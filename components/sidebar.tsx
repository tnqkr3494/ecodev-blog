import Link from "next/link";
import { FaBook, FaBrain, FaDatabase, FaHtml5 } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="fixed top-32 left-0 w-32 flex flex-col items-center gap-6 px-4 text-center py-8 border-r-2">
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
