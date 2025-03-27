import { getData } from "@/utils/notion";
import getChildPageDetails from "@/utils/getChildPageDetails";
import PostsClient from "./posts-client";

export default async function Posts({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const data = await getData(id);
  const childPages = getChildPageDetails(data);

  const categories: Record<string, number> = {};

  for (const e of childPages) {
    if (!e.tags || e.tags.length === 0) {
      categories["etc"] = (categories["etc"] || 0) + 1;
    } else {
      for (const k of e.tags[0].split(",")) {
        categories[k] = (categories[k] || 0) + 1;
      }
    }
  }

  return (
    <PostsClient
      title={title}
      childPages={childPages}
      categories={categories}
    />
  );
}
