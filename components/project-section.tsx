"use client";

import { cls } from "@/utils/utils";
import Image from "next/image";
import img from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface IProjectSection {
  reversed?: boolean;
  imgSrc: string;
  codeSrc: string;
  detailSrc: string;
  title: string;
  description?: string;
  skills: string[];
}

export default function ProjectSection({
  reversed = false,
  imgSrc,
  codeSrc,
  title,
  detailSrc,
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
        "relative flex flex-col md:flex-row items-center gap-8 md:gap-16",
        reversed ? "md:flex-row-reverse" : "",
        intersect
          ? reversed
            ? "animate-fade-left animate-delay-100"
            : "animate-fade-right"
          : ""
      )}
    >
      <div className="w-full md:w-[45rem] shadow-xl relative">
        <article>
          <div className="w-full rounded-lg">
            <Image
              src={imgSrc}
              alt="project"
              layout="responsive"
              width={700}
              height={475}
              className="rounded-lg"
            />
          </div>
        </article>
      </div>
      <div
        className={cls(
          "bg-base-300 bg-opacity-70 max-w-full md:max-w-lg p-5 rounded-lg flex flex-col gap-3",
          reversed ? "md:right-1/3" : "md:left-1/3"
        )}
      >
        <h2 className="font-extrabold text-2xl md:text-3xl text-title">
          {title}
        </h2>
        <h3 className="font-semibold text-lg md:text-xl">
          Using :
          {skills.map((skill, index) => (
            <span key={index} className="ml-2">
              {skill} /
            </span>
          ))}
          <span className="ml-2">and more...</span>
        </h3>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex flex-row gap-3">
          <Link href={detailSrc} target="_blank">
            <button className="btn btn-outline">Go To Detail</button>
          </Link>
          <Link href={codeSrc} target="_blank">
            <button className="btn btn-outline">Code</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
