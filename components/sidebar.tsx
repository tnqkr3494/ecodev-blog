import Link from "next/link";
import { FaBook, FaBrain, FaDatabase, FaHtml5 } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="top-[10.5rem] fixed flex flex-col items-center gap-10 pl-4 text-center">
      <Link href="/posts/category/front">
        <FaHtml5 className="size-10" />
        <span className="font-semibold">front</span>
      </Link>

      <Link href="/posts/category/back">
        <FaDatabase className="size-10" />
        <span className="font-semibold">back</span>
      </Link>

      <Link href="/posts/category/cs">
        <FaComputer className="size-10" />
        <span className="font-semibold">CS</span>
      </Link>

      <Link
        href="/posts/category/algorithm"
        className="flex flex-col items-center"
      >
        <FaBrain className="size-10" />

        <span className="font-semibold">algorithm</span>
      </Link>
      <Link href="/posts/category/etc" className="flex flex-col items-center">
        <FaBook className="w-10 h-10" />
        <span className="font-semibold">ETC</span>
      </Link>
    </div>
  );
}
