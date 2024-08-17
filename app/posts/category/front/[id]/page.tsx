import Renderer from "@/components/notion-renderer";
import { getData } from "@/utils/notion";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "../../../../../assets/notion-change.css";
import GiscusComments from "@/components/giscus";

export default async function FrontDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);

  return (
    <main className="py-36 pl-[256px] pr-36 flex flex-col items-center gap-8">
      <Renderer recordMap={data} rootPageId={params.id} />
      <GiscusComments />
    </main>
  );
}
