import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="welcome" className="px-20">
        <div className="flex flex-wrap items-center justify-around">
          <div className="h-screen flex flex-col justify-center items-baseline font-semibold">
            <h1 className="text-[#d4a373] text-9xl ">Hello</h1>
            <h3 className="text-[#FEFAE0] text-6xl">Welcome to my blog</h3>
            <div className="flex gap-2">
              <Link
                href="/about"
                className="bg-[#E9EDC9] text-[#D4A373] px-20 py-10 font-semibold text-4xl mt-5 rounded-xl"
              >
                About
              </Link>
              <Link
                href="/posts"
                className="bg-[#E9EDC9] text-[#D4A373] px-20 py-10 font-semibold text-4xl mt-5 rounded-xl"
              >
                Posts
              </Link>
            </div>
          </div>
          <img
            src="/kang.png"
            alt="avatar"
            className="w-80 h-80 rounded-full"
          />
        </div>
      </section>
    </>
  );
}
