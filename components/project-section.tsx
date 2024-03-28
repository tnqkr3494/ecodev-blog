import { cls } from "@/utils/utils";
import Link from "next/link";

interface IProjectSection {
  reversed?: boolean;
  videoSrc: string;
  title: string;
  description?: string;
  skills: string[];
}

export default function ProjectSection({
  reversed = false,
  videoSrc,
  title,
  description = "dd",
  skills,
}: IProjectSection) {
  return (
    <section
      className={cls(
        "relative flex flex-wrap",
        reversed ? "flex-row-reverse" : ""
      )}
    >
      <div className="w-[45rem] shadow-xl relative">
        <article>
          <video
            src={videoSrc}
            loop
            muted
            preload="auto"
            className="opacity-50"
          />
        </article>
      </div>
      <div
        className={cls(
          "absolute top-2/3 z-10 bg-base-300 bg-opacity-70 max-w-3xl p-5 rounded-lg flex flex-col gap-3",
          reversed ? "right-1/3" : "left-1/3"
        )}
      >
        <h2 className="font-extrabold text-3xl text-title">{title}</h2>
        <h3 className="font-semibold text-xl">
          Using :
          {skills.map((skill, index) => (
            <span key={index} className="ml-2">
              {skill} /
            </span>
          ))}
          <span className="ml-2">and more...</span>
        </h3>
        <p>{description}</p>
        <Link href="/posts/category/front/dd">
          <button className="btn btn-outline">Go To Detail</button>
        </Link>
      </div>
    </section>
  );
}
