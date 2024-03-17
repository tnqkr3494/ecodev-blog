import Image from "next/image";
import avatar from "../img/kang.png";
import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";

export default function AboutMe() {
  return (
    <div id="about" className="pb-96  pl-20">
      <h1 className="text-6xl text-[#F2E9E4] mb-20 font-semibold">About Me</h1>
      <div className="grid grid-cols-5 gap-2  text-[#F2E9E4] text-xl leading-8 ">
        <div className="bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4] p-10 col-span-3 flex justify-center items-center rounded-2xl hover:scale-105 hover:-translate-y-6 transition-transform shadow-xl">
          <p className="pr-8">
            Hello✋ I am a front-end engineer who is working under the nickname
            ecodev.I am studying while dreaming of becoming a{" "}
            <span className="text-[#4A4E69] font-semibold">
              full-stack developer
            </span>{" "}
            in the future.
            <br />
            <br />I am creating a website in pursuit of user-friendly features,
            designs. And I feel rewarded by implementing the behavior of the web
            front end on my own and seeing it run.
            <br />
            <br />I would like to share various experiences and knowledge with
            different people in the future!!
          </p>
          <div className="gap-10 flex flex-col border-l-2 pl-6">
            <Image src={avatar} alt="avatar" className="rounded-full" />
            <div className="flex items-center gap-4">
              <HomeIcon className="w-10 h-10" />
              <EnvelopeIcon className="w-10 h-10" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 fill-[#F2E9E4]"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#efc0b3] p-10 rounded-2xl">
          <h3 className="text-4xl text-center font-semibold">Skills</h3>
          <ul className="mt-3 pt-3 flex flex-col gap-3 items-center border-t-2 border-dashed">
            <li>
              <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" />
            </li>
            <li>
              <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" />
            </li>
            <li>
              <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
            </li>
            <li>
              <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
            </li>
            <li>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
            </li>
            <li>
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
            </li>
            <li>
              <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
