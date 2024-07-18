import Thumbnail from "@/components/post-thumbnail";
import { getData } from "@/utils/notion";
import Link from "next/link";

export const pageId = "6ab62b4157594175adbe92515faed584";

export default async function Posts() {
  const data = await getData(pageId);

  // Function to extract child page IDs
  const getChildPageIds = (recordMap: any) => {
    const blockMap = recordMap.block;
    const childPageIds: string[] = [];

    Object.keys(blockMap).forEach((blockId) => {
      const block = blockMap[blockId].value;
      if (block.type === "page") {
        const cleanBlockId = blockId.replace(/-/g, "");
        childPageIds.push(cleanBlockId);
      }
    });

    return childPageIds;
  };

  const childrensId = getChildPageIds(data);

  return (
    <div className="mt-32 pl-24 mx-auto">
      <h1 className="ml-5 font-extrabold text-6xl text-title">전체 포스트</h1>
      <div className="flex flex-wrap gap-8 py-12 px-5">
        {childrensId.map((id) => (
          <Link
            href={`/posts/category/front/${id}`}
            className="block w-1/4"
            key={id}
          >
            <Thumbnail />
          </Link>
        ))}
      </div>
    </div>
  );
}
