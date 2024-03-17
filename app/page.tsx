import Image from "next/image";
import avatar from "../img/kang.png";
import AboutMe from "@/components/about-me";
import Works from "@/components/works";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <section id="welcome" className="mb-60  pl-20">
        <div className="flex flex-wrap items-center">
          <div className="h-screen flex flex-col justify-center pr-52 font-semibold animate-jump animate-twice animate-duration-[800ms] animate-ease-in-out animate-normal animate-fill-forwards">
            <h1 className="text-[#FFC8DD] text-9xl">Hello</h1>
            <h3 className="text-[#F2E9E4] text-6xl">Welcome to my blog</h3>
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
