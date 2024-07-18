import Renderer from "@/components/notion-renderer";
import { getData } from "@/utils/notion";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export default async function Front() {
  const pageId = "90e8256b91eb43cc9ab4639220ff0e69";
  const data = await getData(pageId);

  return (
    <main className="py-36 px-36">
      <Renderer recordMap={data} rootPageId={pageId} />
    </main>
  );
}
