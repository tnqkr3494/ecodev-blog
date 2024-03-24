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
        <h1 className="text-6xl mb-20 font-semibold">About Me</h1>
        <section className="flex items-center">
          <div className="max-w-4xl flex">
            <div className="flex flex-col border-r-2 pr-6 items-center gap-3">
              <img src="/kang.png" alt="avatar" className="rounded-full" />
              <div className="flex flex-col items-center">
                <span className="font-semibold text-xl">강인권 / EcoDev</span>
                <span className="text-xs">Front-End Developer</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/">
                  <HomeIcon className="w-10 h-10" />
                </Link>
                <Link href="/">
                  <EnvelopeIcon className="w-10 h-10" />
                </Link>
                <Link href="https://github.com/tnqkr3494">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    className="w-10 h-10"
                  />
                </Link>
              </div>
            </div>
            <p className="pl-8 text-xl">
              Hello✋ I am a front-end engineer who is working under the
              nickname <span>EcoDev</span>.I am studying while dreaming of
              becoming a{" "}
              <span className="text-title font-semibold">
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
        <section className="mt-60">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-6xl capitalize font-semibold">
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
        </section>

        <section className="mt-56 capitalize flex flex-col items-center">
          <h1 className="font-semibold text-6xl">life time</h1>
          <Life />
        </section>
      </div>
    </>
  );
}
