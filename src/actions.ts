"use server";
import { request } from "@octokit/request";
import { cache } from "react";

const PAGE_COUNT = 10;

export const getContributions = cache(async () => {
  // This code is horrible lol
  const requests = Promise.all(
    Array.from({ length: PAGE_COUNT }).map((_, i) =>
      request("GET /users/{username}/events", {
        per_page: 100,
        page: i + 1,
        username: "artrixdotdev",
      }),
    ),
  );

  // Wait for all the requests to resolve
  const responses = await Promise.all(requests);

  // Return all responses
  return responses;
});
