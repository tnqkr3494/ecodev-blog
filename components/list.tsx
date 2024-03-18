interface IList {
  text: string;
}

export default function List({ text }: IList) {
  return (
    <li>
      <span className="bg-[#CCD5AE] px-3 py-2 rounded-md">{text}</span>
    </li>
  );
}
