import { getContributions } from "@/lib/github";
import { ContributionVisualization } from "./contribution-visualization";

export async function GithubContributionsGraph() {
  const contributions = await getContributions();

  if (!contributions) {
    return null;
  }

  return <ContributionVisualization contributions={contributions} />;
}
