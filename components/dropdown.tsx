interface IDropdown {
  title: string;
}

export default function Dropdown({ title }: IDropdown) {
  return (
    <div
      tabIndex={0}
      className="font-semibold collapse bg-section1 text-title focus:bg-section2 focus:text-p-color capitalize"
    >
      <div className="collapse-title text-2xl text-center">{title}</div>
      <div className="collapse-content flex flex-col">
        <ul>
          <li>react-router</li>
          <li>tailwind</li>
          <li>styled-component</li>
          <li>SWR</li>
          <li>recoil</li>
          <li>prisma</li>
          <li>vercel</li>
        </ul>
      </div>
    </div>
  );
}
