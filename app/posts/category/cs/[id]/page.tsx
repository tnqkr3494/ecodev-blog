import Renderer from "@/components/notion-renderer";
import { getData } from "@/utils/notion";

export default async function CSDetail({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <main className="py-36 pl-[256px] pr-36 flex flex-col items-center gap-8">
      <Renderer recordMap={data} rootPageId={params.id} />
    </main>
  );
}
