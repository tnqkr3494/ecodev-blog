import Link from "next/link";
import { FaBook, FaBrain, FaDatabase, FaHtml5 } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="md:fixed md:top-0 md:left-0 md:w-32 md:flex md:flex-col md:items-center md:justify-center md:gap-6 md:px-4 md:text-center md:py-8 md:border-r-[1px] md:h-screen md:z-40 md:bg-base-100 hidden">
      <Link
        href="/posts/category/front"
        className="group flex flex-col items-center transition-all duration-200 hover:text-white hover:bg-gray-700 p-2 rounded-md"
      >
        <FaHtml5 className="w-10 h-10 text-orange-500 group-hover:text-orange-300" />
        <span className="font-semibold mt-2 group-hover:underline">Front</span>
      </Link>

      <Link
        href="/posts/category/back"
        className="group flex flex-col items-center transition-all duration-200 hover:text-white hover:bg-gray-700 p-2 rounded-md"
      >
        <FaDatabase className="w-10 h-10 text-green-500 group-hover:text-green-300" />
        <span className="font-semibold mt-2 group-hover:underline">Back</span>
      </Link>

      <Link
        href="/posts/category/cs"
        className="group flex flex-col items-center transition-all duration-200 hover:text-white hover:bg-gray-700 p-2 rounded-md"
      >
        <FaComputer className="w-10 h-10 text-blue-500 group-hover:text-blue-300" />
        <span className="font-semibold mt-2 group-hover:underline">CS</span>
      </Link>

      <Link
        href="/posts/category/algorithm"
        className="group flex flex-col items-center transition-all duration-200 hover:text-white hover:bg-gray-700 p-2 rounded-md"
      >
        <FaBrain className="w-10 h-10 text-yellow-500 group-hover:text-yellow-300" />
        <span className="font-semibold mt-2 group-hover:underline">
          Algorithm
        </span>
      </Link>

      <Link
        href="/posts/category/etc"
        className="group flex flex-col items-center transition-all duration-200 hover:text-white hover:bg-gray-700 p-2 rounded-md"
      >
        <FaBook className="w-10 h-10 text-red-500 group-hover:text-red-300" />
        <span className="font-semibold mt-2 group-hover:underline">ETC</span>
      </Link>
    </div>
  );
}
