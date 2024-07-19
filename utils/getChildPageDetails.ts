const notionBaseUrl = "https://www.notion.so";

interface IChildPages {
  id: string;
  title: string;
  createdAt: string;
  thumbnail: string;
  lastEditedTime: string;
}

export default function getChildPageDetails(recordMap: any) {
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
  childPages.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

  return childPages;
}
