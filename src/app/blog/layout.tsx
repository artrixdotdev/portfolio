"use client";
import "@/styles/code-theme.css";
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col mt-12 items-center justify-center gap-4 py-8 md:py-10">
      {children}
    </div>
  );
}
