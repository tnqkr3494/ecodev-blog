import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="welcome" className="px-20">
        <div className="flex flex-wrap items-center justify-around">
          <div className="h-screen flex flex-col justify-center items-baseline font-extrabold">
            <h1 className=" text-9xl animate-fade-up animate-ease-linear ">
              Hello
            </h1>
            <h3 className="text-6xl animate-fade-up animate-ease-linear animate-delay-700">
              Welcome to my blog
              <span>✌🏻</span>
            </h3>
            <div className="flex gap-2 font-extrabold">
              <Link href="/about">
                <button className="btn btn-home  text-4xl mt-5 rounded-xl">
                  About
                </button>
              </Link>
              <Link href="/posts">
                <button className="btn btn-home  text-4xl mt-5 rounded-xl">
                  Posts
                </button>
              </Link>
            </div>
          </div>
          <img
            src="/kang.png"
            alt="avatar"
            className="w-80 h-80 rounded-full animate-fade-up animate-ease-linear"
          />
        </div>
      </section>
    </>
  );
}
