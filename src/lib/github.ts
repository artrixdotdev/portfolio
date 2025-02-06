"use server";
import { cache } from "react";
import "server-only";

export type ContributionsCalender = {
   totalContributions: number;
   weeks: {
      /** This array will always be 7 elements long */
      contributionDays: {
         contributionCount: number;
         date: string;
      }[];
   }[];
};

export const getContributions = cache(async () => {
   const query = `
      {
        user(login: "artrixdotdev") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
  `;
   const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
   });

   if (!response.ok) {
      const error = (await response.json()).message;
      throw new Error(
         `Failed to fetch contributions: ${response.status} | ${error}`,
      );
   }

   const data = await response.json();
   return data.data.user.contributionsCollection
      .contributionCalendar as ContributionsCalender;
});

export const getFollowers = cache(async () => {
   const query = `
      {
        user(login: "artrixdotdev") {
          followers {
            totalCount
          }
        }
      }
    `;
   // TODO: Add caching
   const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
   });

   if (!response.ok) {
      const error = (await response.json()).message;
      throw new Error(
         `Failed to fetch followers: ${response.status} | ${error}`,
      );
   }

   const data = await response.json();
   return data.data.user.followers.totalCount;
});
