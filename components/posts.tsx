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
    <div className="mt-32 mx-12">
      {childPages.length === 0 ? (
        <div>
          <div className="flex gap-8 justify-center">
            <h1 className="font-extrabold text-3xl text-title ml-4 my-8">
              {title} 포스트
            </h1>
          </div>
          <p className="text-center font-semibold ml-4">
            포스트가 비어있습니다.
          </p>
        </div>
      ) : (
        <>
          <div className="flex gap-8 justify-center">
            <h1 className="font-extrabold text-3xl text-title ml-4 my-8">
              {title} 포스트
            </h1>
          </div>
          <div className="flex flex-wrap">
            {childPages.map((page) => (
              <div key={page.id} className="w-full md:w-1/4 p-4">
                <Link
                  href={{
                    pathname: `/posts/${page.id}`,
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
