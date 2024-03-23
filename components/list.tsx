import { cls } from "@/utils/utils";

interface IList {
  text: string;
  year: string;
  reversed?: boolean;
}

export default function List({ text, year, reversed = false }: IList) {
  return (
    <li
      className={cls(
        "flex flex-col text-center capitalize ",
        reversed ? "flex-row-reverse" : ""
      )}
    >
      <span>{year}</span>
      <span className="bg-[#CCD5AE] px-3 py-2 rounded-md">{text}</span>
    </li>
  );
}
