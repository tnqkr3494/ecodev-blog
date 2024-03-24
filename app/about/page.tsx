"use client";

import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Computer } from "../computer.jsx";
import Life from "@/components/lifetime";
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <div id="about" className="pt-32 pl-20 w-full">
        <h1 className="text-6xl mb-20 font-extrabold">About Me</h1>
        <section className="flex items-center">
          <div className="max-w-4xl flex">
            <div className="flex flex-col border-r-2 pr-6 items-center gap-3">
              <img src="/imo.png" alt="avatar" className="rounded-full" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-xl">강인권 / EcoDev</span>
                <span className="text-xs">Front-End Developer</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/">
                  <HomeIcon className="w-10 h-10 text-title" />
                </Link>
                <Link href="/">
                  <EnvelopeIcon className="w-10 h-10 text-title" />
                </Link>
                <Link href="https://github.com/tnqkr3494">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 fill-title"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="pl-8 text-xl">
              Hello✋ I am a front-end engineer who is working under the
              nickname <span>EcoDev</span>.I am studying while dreaming of
              becoming a{" "}
              <span className="text-title font-extrabold">
                full-stack developer
              </span>{" "}
              in the future.
              <br />
              <br />I am creating a website in pursuit of user-friendly
              features, designs. And I feel rewarded by implementing the
              behavior of the web front end on my own and seeing it run.
              <br />
              <br />I would like to share various experiences and knowledge with
              different people in the future!!
            </p>
          </div>
          <div className="w-96 h-96">
            <Canvas camera={{ position: [-100, 50, 10] }}>
              <OrbitControls />
              <ambientLight intensity={1} />
              <group rotation-y={-Math.PI / 2}>
                <Computer />
              </group>
            </Canvas>
          </div>
        </section>
        <section className="mt-60 flex flex-col items-center">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-6xl capitalize font-extrabold">
              technology stacks that i use
            </h1>
            <ul className="flex gap-4">
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-16 h-16"
                />
              </li>

              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  className="w-16 h-16"
                />
              </li>
            </ul>
            <ul className="flex gap-4">
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img src="/recoil.svg" className="w-16 h-16" />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                  className="w-16 h-16"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg"
                  className="w-16 h-16"
                />
              </li>
            </ul>
          </div>
          <div className="flex items-center my-40">
            <img src="/imo2.png" className="w-64 h-64" />
            <p>안녕하세요 반갑습니다.</p>
          </div>
        </section>

        <section className="capitalize flex flex-col items-center">
          <h1 className="font-extrabold text-6xl">life time</h1>
          <Life />
        </section>
      </div>
    </>
  );
}
