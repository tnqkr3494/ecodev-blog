import Image from "next/image";
import avatar from "../img/kang.png";
import AboutMe from "@/components/about-me";
import Works from "@/components/works";
import SideBar from "@/components/sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="welcome" className="mb-60  pl-20">
        <div className="flex flex-wrap items-center">
          <div className="h-screen flex flex-col justify-center items-baseline pr-52 font-semibold">
            <h1 className="text-[#d4a373] text-9xl ">Hello</h1>
            <h3 className="text-[#FEFAE0] text-6xl">Welcome to my blog</h3>
            <Link
              href="/posts"
              className="bg-[#E9EDC9] text-[#D4A373] px-20 py-10 font-semibold text-4xl mt-5 rounded-xl animate-jump animate-twice animate-duration-[800ms] animate-ease-in-out animate-normal animate-fill-forwards"
            >
              posts
            </Link>
          </div>
          <Image src={avatar} alt="avatar" className="w-80 h-80 rounded-full" />
        </div>
      </section>
      <div className="relative">
        <AboutMe />
      </div>
      <Works />
      <SideBar />
    </>
  );
}
