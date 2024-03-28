"use client";

import { cls } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface IProjectSection {
  reversed?: boolean;
  imgSrc: string;
  codeSrc: string;
  title: string;
  description?: string;
  skills: string[];
}

export default function ProjectSection({
  reversed = false,
  imgSrc,
  codeSrc,
  title,
  description = "dd",
  skills,
}: IProjectSection) {
  const [intersect, setIntersect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return; // null 체크

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIntersect(entry.isIntersecting); // IntersectionObserver 결과를 상태에 반영
      });
    });

    observer.observe(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className={cls(
        "relative flex flex-wrap",
        reversed ? "flex-row-reverse" : "",
        intersect
          ? reversed
            ? "animate-fade-left animate-delay-100"
            : "animate-fade-right"
          : ""
      )}
    >
      <div className="w-[45rem] shadow-xl relative">
        <article>
          <img src={imgSrc} className="rounded-lg" />
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
        <div className="flex gap-3">
          <Link href="/posts/category/front/dd">
            <button className="btn btn-outline">Go To Detail</button>
          </Link>
          <Link href={codeSrc}>
            <button className="btn btn-outline">Code</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
