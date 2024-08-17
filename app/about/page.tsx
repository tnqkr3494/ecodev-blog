"use client";

import {
  EnvelopeIcon,
  HomeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Computer } from "../computer";
import Life from "@/components/lifetime";
import Link from "next/link";
import IconCirlce from "@/components/circle";
import ChatBubble from "@/components/chatbubble";

export default function AboutMe() {
  return (
    <>
      <div id="about" className="pt-40 px-4 md:px-20 w-full">
        <h1 className="text-4xl md:text-6xl mb-4 md:mb-20 font-extrabold md:text-start text-center">
          About Me
        </h1>
        <section className="flex flex-col md:flex-row items-center">
          <div className="max-w-4xl flex flex-col md:flex-row items-center md:items-start">
            <div className="flex flex-col items-center border-r-0 mb-8 md:mb-0 md:pr-12 md:border-r-2">
              <img
                src="/imo.png"
                alt="avatar"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
              />
              <div className="flex flex-col items-center mt-4">
                <span className="font-semibold text-xl">강인권 / EcoDev</span>
                <span className="text-xs">Front-End Developer</span>
                <span className="font-extrabold text-title text-xs mt-2">
                  Work in Sejong Univ.
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Link href="/">
                  <HomeIcon className="w-8 h-8 text-title" />
                </Link>
                <Link
                  href="https://jelly-textbook-0b1.notion.site/6ba9d1410a3741698120d8a96b6661bc"
                  target="_blank"
                >
                  <IdentificationIcon className="w-8 h-8 text-title" />
                </Link>
                <Link href="/">
                  <EnvelopeIcon className="w-8 h-8 text-title" />
                </Link>
                <Link href="https://github.com/tnqkr3494" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-title"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="text-lg md:text-xl md:pl-8">
              Hello✋ I am a front-end engineer who is working under the
              nickname <span>EcoDev</span>. I am studying while dreaming of
              becoming a{" "}
              <span className="text-title font-extrabold">
                full-stack developer
              </span>{" "}
              in the future.
              <br />
              <br /> I am creating a website in pursuit of user-friendly
              features and designs. And I feel rewarded by implementing the
              behavior of the web front end on my own and seeing it run.
              <br />
              <br />I would like to share various experiences and knowledge with
              various people from now on!
            </p>
          </div>
          <div className="w-full md:w-[26rem] h-64 md:h-96 mt-8 md:mt-0">
            <Canvas camera={{ position: [-100, 50, 10] }}>
              <OrbitControls />
              <ambientLight intensity={1} />
              <group rotation-y={-Math.PI / 2}>
                <Computer />
              </group>
            </Canvas>
          </div>
        </section>
        <section className="mt-12 md:mt-60 flex flex-col items-center">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl md:text-6xl capitalize font-extrabold text-center">
              Technology Stacks That I Use
            </h1>
            <ul className="flex flex-wrap gap-4 justify-center">
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
                name="macOS"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                name="vscode"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg"
                name="notion"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                name="python"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
                name="dart"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                name="HTML"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                name="CSS"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                name="JS"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                name="TS"
              />
            </ul>
            <ul className="flex flex-wrap gap-4 justify-center">
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                name="React"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg"
                name="Router"
              />
              <IconCirlce link="/recoil.svg" name="recoil" />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                name="NextJS"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
                name="flutter"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                name="tailwind"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                name="prisma"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
                name="vercel"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                name="git"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                name="github"
              />
              <IconCirlce
                link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                name="npm"
              />
            </ul>
          </div>
          <div className="flex flex-col md:flex-row items-center my-20">
            <img
              src="/imo2.png"
              alt="imo2"
              className="w-48 h-48 md:w-64 md:h-64 mr-0 md:mr-20 mb-8 md:mb-0"
            />
            <ChatBubble />
          </div>
        </section>

        {/* <section className="capitalize flex flex-col items-center">
          <h1 className="font-extrabold text-6xl">life time</h1>
          <Life />
        </section> */}
      </div>
    </>
  );
}
