import { AuthType, OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { GetSearch } from "./search";

const AccessToken = "3f0c9160c4d80f2ca773428bf03a3266"

export const router = OpenAPIRouter({
  schema: {
    info: {
      title: "GitHub Repositories Search API",
      description:
        "A plugin that allows the user to search for GitHub repositories using ChatGPT",
      version: "v0.0.1",
    },
  },
  docs_url: "/",
  aiPlugin: {
    auth: {
      type: AuthType.SERVICE_HTTP,
      authorization_type: "basic",
      verification_tokens: {"openai": "698676c6e3d546e29fc86ece5dfca0ef"},
    },
    name_for_human: "GitHub Repositories Search",
    name_for_model: "github_repositories_search",
    description_for_human: "GitHub Repositories Search plugin for ChatGPT.",
    description_for_model:
      "GitHub Repositories Search plugin for ChatGPT. You can search for GitHub repositories using this plugin.",
    contact_email: "support@example.com",
    legal_info_url: "http://www.example.com/legal",
    logo_url: "https://workers.cloudflare.com/resources/logo/logo.svg",
  },
});

router.get("/search", GetSearch);

// 404 for everything else
router.all("*", () => new Response("Not Found.", { status: 404 }));

export default {
  fetch: router.handle,
};
