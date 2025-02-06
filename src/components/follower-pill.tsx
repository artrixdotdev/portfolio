"use client";
import { Spinner } from "@heroui/react";
import { UserIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const GithubFollowerCount: React.FC = () => {
   const [user, setUser] = useState<{ followers?: number } | null>(null);

   useEffect(() => {
      const fetchGithubUser = async () => {
         try {
            const response = await fetch(
               "https://api.github.com/users/artrixdotdev",
            );
            const userData = await response.json();
            setUser(userData);
         } catch (error) {
            console.error("Failed to fetch GitHub user data", error);
         }
      };

      fetchGithubUser();
   }, []);

   return (
      <div
         //href="https://github.com/artrixdotdev?tab=followers"
         //target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center gap-0.5"
      >
         <UserIcon className="w-4 h-4" />
         {user?.followers ? (
            <span>{user.followers}</span>
         ) : (
            <Spinner className="w-2 h-2" />
         )}
      </div>
   );
};
