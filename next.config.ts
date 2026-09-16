import type { NextConfig } from "next";

/**
 * Workflow Consulting moved to /roles/process-consulting (see the Roles tab).
 * These are permanent redirects so old links in Slack and ClickUp keep
 * working. /workflow-consulting/role-overview has no 1:1 successor: its
 * content split into two scorecard pages, so it redirects to the track
 * index, which lists both.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/workflow-consulting", destination: "/roles/process-consulting", permanent: true },
      { source: "/workflow-consulting/role-overview", destination: "/roles/process-consulting", permanent: true },
      {
        source: "/workflow-consulting/onboarding-a-partner",
        destination: "/roles/process-consulting/onboarding-a-partner",
        permanent: true,
      },
      {
        source: "/workflow-consulting/running-the-engagement",
        destination: "/roles/process-consulting/running-the-engagement",
        permanent: true,
      },
      {
        source: "/workflow-consulting/managing-the-relationship",
        destination: "/roles/process-consulting/managing-the-relationship",
        permanent: true,
      },
      {
        source: "/workflow-consulting/closing-out",
        destination: "/roles/process-consulting/closing-out",
        permanent: true,
      },
      {
        source: "/workflow-consulting/github-and-vercel",
        destination: "/roles/process-consulting/github-and-vercel",
        permanent: true,
      },
      {
        source: "/workflow-consulting/communication-guidelines",
        destination: "/roles/process-consulting/communication-guidelines",
        permanent: true,
      },
      {
        source: "/workflow-consulting/the-grant-way",
        destination: "/roles/process-consulting/the-grant-way",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
