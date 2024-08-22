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
  startDate: string;
  endDate: string;
  act: string;
  title: string;
  description?: string;
  language: string[];
  library: string[];
}

export default function ProjectSection({
  reversed = false,
  imgSrc,
  codeSrc,
  detailSrc,
  startDate,
  endDate,
  act,
  title,
  description = "dd",
  language,
  library,
}: IProjectSection) {
  const [intersect, setIntersect] = useState(false);
  const [hovered, setHovered] = useState(false);
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
    <div
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
      <div
        className="w-full md:w-[45rem] shadow-xl relative cursor-pointer"
        onClick={() => window.open(detailSrc)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
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
        <div
          className={cls(
            "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300",
            hovered ? "opacity-100" : "opacity-0"
          )}
        >
          <p
            className={cls(
              "font-semibold text-white text-lg transform transition-transform duration-300",
              hovered ? "translate-y-0" : "translate-y-4"
            )}
          >
            클릭시 상세 링크로 이동합니다
          </p>
        </div>
      </div>
      <div
        className={cls(
          "max-w-full md:max-w-2xl p-5 rounded-lg flex flex-col gap-3",
          reversed ? "md:right-1/3" : "md:left-1/3"
        )}
      >
        <h1 className="font-extrabold text-2xl md:text-3xl text-title">
          {title}
        </h1>
        <h2 className="text-gray-400">
          {startDate} ~ {endDate}
        </h2>
        <p>
          <span className="font-semibold text-lg">✔ 주요기능</span>
          <br />
          {act}
        </p>
        <p>
          <span className="font-semibold text-lg">✔ 회고</span>
          <br />
          {description}
        </p>
        <hr />
        <h3>
          📍언어 및 프레임워크 :
          {language.map((lan, index) => {
            return (
              <span key={index}>
                {index >= language.length - 1 ? ` ${lan}` : ` ${lan},`}
              </span>
            );
          })}
        </h3>
        <h3>
          📍라이브러리 및 패키지 :
          {library.map((lib, index) => {
            return (
              <span key={index}>
                {" "}
                {index >= library.length - 1 ? ` ${lib}` : ` ${lib},`}
              </span>
            );
          })}
        </h3>
        <h3>
          📍github :{" "}
          <Link href={codeSrc} className="underline" target="_blank">
            {codeSrc}
          </Link>
        </h3>
      </div>
    </div>
  );
}
