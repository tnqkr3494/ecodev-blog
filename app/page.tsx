import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="welcome"
        className="h-screen flex flex-col items-center justify-center relative"
      >
        <div className="relative z-10 text-center px-6 md:px-12 top-10">
          <Image
            src="/kang.png"
            alt="Logo"
            className="w-40 h-40 md:w-60 md:h-60 mx-auto mb-6 rounded-full border-4 border-transparent animate-borderAnimation shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Welcome to my blog
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I think everybody should study ants. They have an amazing four-part
            philosophy.
            <br />
            Never give up, look ahead, stay positive and do all you can.
            <br />
            <span className="font-semibold text-accent">-Jim Rohn-</span>
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/about">
              <button className="btn btn-home border-2 text-xl px-6 py-3 rounded-full transition-all duration-300">
                About Me
              </button>
            </Link>
            <Link href="/posts/category/front">
              <button className="btn btn-home border-2 text-xl px-6 py-3 rounded-full transition-all duration-300">
                Read Posts
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
