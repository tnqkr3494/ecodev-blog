import Renderer from "@/components/notion-renderer";
import { getData } from "@/utils/notion";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export default async function Front({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <main className="py-36 px-36">
      <Renderer recordMap={data} rootPageId={params.id} />
    </main>
  );
}
