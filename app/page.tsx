import Image from "next/image";
import avatar from "../img/kang.png";
import AboutMe from "@/components/about-me";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <section id="welcome" className="mb-60">
        <div className="flex flex-wrap items-center">
          <div className="h-screen flex flex-col justify-center pr-52 font-semibold">
            <h1 className="text-[#4A4E69] text-9xl">Hello</h1>
            <h3 className="text-[#9A8C98] text-6xl">Welcome to my blog</h3>
          </div>
          <Image src={avatar} alt="avatar" className="w-80 h-80 rounded-full" />
        </div>
      </section>
      <AboutMe />
      <SideBar />
    </>
  );
}
