import Renderer from "@/components/notion-renderer";
import { getData } from "@/utils/notion";

import "@/styles/prism-theme.css";
import GiscusComments from "@/components/giscus";

export default async function PostDetail({ id }: { id: string }) {
  const data = await getData(id);

  return (
    <main className="py-36 gap-8">
      <Renderer recordMap={data} rootPageId={id} />
      <div className="flex justify-center mt-8">
        <GiscusComments />
      </div>
    </main>
  );
}
