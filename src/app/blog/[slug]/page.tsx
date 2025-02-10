import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/lib/blog";
import { baseUrl } from "@/app/sitemap";

export async function generateStaticParams() {
   let posts = getBlogPosts();

   return posts.map((post) => ({
      slug: post.slug,
   }));
}

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}) {
   const { slug } = await params;
   let post = getBlogPosts().find((post) => post.slug === slug);
   if (!post) {
      return null;
   }

   let {
      title,
      publishedAt: publishedTime,
      summary: description,
      image,
   } = post.metadata;
   let ogImage = image
      ? image
      : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

   return {
      title,
      description,
      openGraph: {
         title,
         description,
         type: "article",
         publishedTime,
         url: `${baseUrl}/blog/${post.slug}`,
         images: [
            {
               url: ogImage,
            },
         ],
      },
      twitter: {
         card: "summary_large_image",
         title,
         description,
         images: [ogImage],
      },
   };
}

export default async function Blog({ params }: { params: { slug: string } }) {
   const { slug } = await params;
   let post = getBlogPosts().find((post) => post.slug === slug);

   if (!post) {
      notFound();
   }

   return (
      <section>
         <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
               __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  headline: post.metadata.title,
                  datePublished: post.metadata.publishedAt,
                  dateModified: post.metadata.publishedAt,
                  description: post.metadata.summary,
                  image: post.metadata.image
                     ? `${baseUrl}${post.metadata.image}`
                     : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                  url: `${baseUrl}/blog/${post.slug}`,
                  author: {
                     "@type": "Person",
                     name: "Artrix",
                  },
               }),
            }}
         />
         <h1 className="title font-semibold text-2xl tracking-tighter">
            {post.metadata.title}
         </h1>
         <div className="flex justify-between items-center mt-2 mb-8 text-sm">
            <p className="text-sm text-default-200">
               {formatDate(post.metadata.publishedAt)}
            </p>
         </div>
         <article>
            <CustomMDX source={post.content} />
         </article>
      </section>
   );
}
