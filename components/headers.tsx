import img from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-2xl fixed top-0 w-full md:px-20 px-4 py-3 z-50  bg-base-100 border-b-[1px] shadow-md">
      <div className="navbar">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost bg-white">
            <img
              src="/logo-no-background.png"
              alt="logo-no-background"
              className="w-full h-full"
            />
          </Link>
        </div>
        <ul className="md:hidden menu lg:menu-horizontal bg-base-100 rounded-box lg:mb-64 font-semibold">
          <li>
            <details>
              <summary>Menu</summary>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/project">Project</Link>
                </li>
                <li>
                  <div className="dropdown dropdown-end">
                    <summary tabIndex={0} className="m-1">
                      Posts
                    </summary>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li>
                        <Link href="/posts/category/front">front</Link>
                      </li>
                      <li>
                        <Link href="/posts/category/back">back</Link>
                      </li>
                      <li>
                        <Link href="/posts/category/algorithm">algorithm</Link>
                      </li>
                      <li>
                        <Link href="/posts/category/cs">cs</Link>
                      </li>
                      <li>
                        <Link href="/posts/category/etc">etc</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <details>
                <summary>Posts</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link href="/posts/category/front">front</Link>
                  </li>
                  <li>
                    <Link href="/posts/category/back">back</Link>
                  </li>
                  <li>
                    <Link href="/posts/category/cs">CS</Link>
                  </li>
                  <li>
                    <Link href="/posts/category/algorithm">Algorithm</Link>
                  </li>
                  <li>
                    <Link href="/posts/category/etc">ETC</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="autumn" />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </header>
  );
}
