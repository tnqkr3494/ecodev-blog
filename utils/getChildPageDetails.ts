const notionBaseUrl = "https://www.notion.so";

interface IChildPages {
  id: string;
  title: string;
  createdAt: string;
  thumbnail: string;
  lastEditedTime: string;
  tags?: string[];
}

export default function getChildPageDetails(recordMap: any) {
  const blockMap = recordMap.block;
  const collectionMap = recordMap.collection;

  if (!collectionMap) {
    console.warn("⚠️ collectionMap이 존재하지 않습니다.");
    return [];
  }

  const collection =
    collectionMap["801956a9-4bd1-44a0-8dab-8353292973ca"]?.value;
  if (!collection) {
    console.warn("⚠️ 해당 컬렉션 ID에 대한 데이터가 없습니다.");
    return [];
  }

  const schema = collection.schema;
  if (!schema) {
    console.warn("⚠️ schema 정보가 없습니다.");
    return [];
  }

  // ✅ 태그 속성 찾기
  const tagKey = Object.keys(schema).find(
    (key) => schema[key].type === "multi_select"
  );

  const childPages: IChildPages[] = [];

  Object.keys(blockMap).forEach((blockId) => {
    const block = blockMap[blockId]?.value;
    if (!block) return;

    let tags: string[] = [];
    if (tagKey && block.properties?.[tagKey]) {
      tags = block.properties[tagKey].map((t: any) => t[0]);
    }

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
        tags,
      });
    }
  });

  childPages.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

  return childPages;
}
