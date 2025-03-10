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
    <div className="mt-32 md:pl-[144px] mx-auto">
      {childPages.length === 0 ? (
        <div className="ml-4">
          <div className="flex">
            <h1 className="font-extrabold text-5xl text-title">{title}</h1>
          </div>
          <p className="mt-8 font-semibold">포스트가 비었습니다.</p>
        </div>
      ) : (
        <>
          <div className="flex gap-8">
            <h1 className="font-extrabold text-5xl text-title ml-4">{title}</h1>
          </div>
          <div className="flex flex-wrap">
            {childPages.map((page) => (
              <div key={page.id} className="w-full md:w-1/4 p-4">
                <Link
                  href={{
                    pathname: `/posts/front/${page.id}`,
                    query: { title: page.title },
                  }}
                >
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
        </>
      )}
    </div>
  );
}
