import Thumbnail from "@/components/post-thumbnail";
import { getData } from "@/utils/notion";
import Link from "next/link";

export const pageId = "6ab62b4157594175adbe92515faed584";
const notionBaseUrl = "https://www.notion.so";

interface IChildPages {
  id: string;
  title: string;
  createdAt: string;
  thumbnail: string;
  lastEditedTime: string;
}

export default async function Posts() {
  const data = await getData(pageId);

  // Function to extract child page details
  const getChildPageDetails = (recordMap: any) => {
    const blockMap = recordMap.block;
    const childPages: IChildPages[] = [];

    Object.keys(blockMap).forEach((blockId) => {
      const block = blockMap[blockId].value;
      if (block.type === "page") {
        const cleanBlockId = blockId.replace(/-/g, "");
        const title = block.properties?.title?.[0]?.[0] || "Untitled";
        const createdAt = block.created_time;
        const lastEditedTime = block.last_edited_time;
        const thumbnailPath = block.format?.page_cover || null;

        const thumbnail = thumbnailPath
          ? thumbnailPath.startsWith("/images")
            ? `${notionBaseUrl}${thumbnailPath}`
            : thumbnailPath
          : null;

        childPages.push({
          id: cleanBlockId,
          title,
          createdAt,
          thumbnail,
          lastEditedTime,
        });
      }
    });

    return childPages;
  };

  const childPages = getChildPageDetails(data);

  return (
    <div className="mt-32 pl-5 pr-5 md:pl-24 md:pr-24 mx-auto">
      <h1 className="font-extrabold text-6xl text-title">전체 포스트</h1>
      <div className="flex flex-wrap gap-4 md:gap-8">
        {childPages.map((page) => (
          <div key={page.id} className="w-full md:w-1/4 p-2">
            <Link href={`/posts/category/front/${page.id}`}>
              <Thumbnail
                title={page.title}
                createdAt={new Date(page.createdAt).toLocaleDateString()}
                lastEditedTime={new Date(
                  page.lastEditedTime
                ).toLocaleDateString()}
                thumbnailImg={page.thumbnail}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
