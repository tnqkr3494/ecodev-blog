import Renderer from "@/components/notion-renderer";
import { getData } from "@/utils/notion";

export default async function ETCDetail({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  return (
    <main className="py-36 px-36">
      <Renderer recordMap={data} rootPageId={params.id} />
    </main>
  );
}
