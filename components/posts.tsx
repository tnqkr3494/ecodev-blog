import Link from "next/link";
import Thumbnail from "./post-thumbnail";
import { getData } from "@/utils/notion";
import getChildPageDetails from "@/utils/getChildPageDetails";

export default async function Posts({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const data = await getData(id);
  const childPages = getChildPageDetails(data);
  return (
    <div className="mt-32 pl-5 md:pl-24  mx-auto">
      <div className="flex gap-8">
        <h1 className="font-extrabold text-5xl text-title">{title}</h1>
      </div>
      <div className="flex flex-wrap">
        {childPages.map((page) => (
          <div key={page.id} className="w-full md:w-1/4 p-4">
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
