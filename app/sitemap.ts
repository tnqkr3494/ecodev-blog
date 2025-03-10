import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ecodev-blog.vercel.app",
    },
    {
      url: "https://ecodev-blog.vercel.app/about",
    },
    {
      url: "https://ecodev-blog.vercel.app/projects",
    },
    {
      url: "https://ecodev-blog.vercel.app/posts",
    },
    {
      url: "https://ecodev-blog.vercel.app/posts/front",
    },
    {
      url: "https://ecodev-blog.vercel.app/posts/back",
    },
    {
      url: "https://ecodev-blog.vercel.app/posts/cs",
    },
    {
      url: "https://ecodev-blog.vercel.app/posts/algorithm",
    },
    {
      url: "https://ecodev-blog.vercel.app/posts/etc",
    },
  ];
}
