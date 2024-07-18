import Renderer from "@/components/notion-renderer";
import { getData } from "@/utils/notion";

export default async function Front() {
  const pageId = "90e8256b91eb43cc9ab4639220ff0e69";
  const data = await getData(pageId);

  return (
    <main className="pt-40 px-36">
      <Renderer recordMap={data} rootPageId={pageId} />
    </main>
  );
}
