import ProejectSection from "@/components/project-section";
import Link from "next/link";

export default function Project() {
  return (
    <main className="py-56 px-20 flex flex-col gap-96">
      <ProejectSection
        title="Movie Site"
        imgSrc="/project1.png"
        codeSrc="https://github.com/tnqkr3494/ReactJs-ms/tree/460c7b204a97262ca935d9a398e7c6e91f7f8f22"
        skills={["react", "styled-component", "react-router", "framer-motion"]}
        description="react를 본격적으로 배우면서 해본 프로젝트. react-router의 사용방법을 익힐 수 있었고, styled-component와 framer-motion
        의 조합으로 interactive한 사이트를 제작해 볼 수 있었다. 또한 api를 이용하는 방법으로 여러 영화들의 정보들을 불러와서 사이트 제작을
        하였다.
        "
      />
      <ProejectSection
        title="ToDo List"
        imgSrc="/project2.png"
        codeSrc="https://github.com/tnqkr3494/ReactJs-ms/tree/8bf9b60da778a54104762cd991a7038e942a37b3"
        reversed={true}
        skills={["react", "styled-component", "recoil", "beautiful-dnd"]}
        description="react-beautiful-dnd라는 라이브러리를 이용하여 애니메이션이 있는 todo리스트를 만들어 보았다.
        여러 컴포넌트들을 만들게 되면서 변수들을 관리해야 할 필요성을 느꼈고 redux대신 좀 더 가볍고 쉬운 recoil을 사용하여 처리하였다.
        개인적으로 가장 복잡했던 프로젝트였던 것 같다.
        "
      />
      <ProejectSection
        title="Carrot-Market"
        imgSrc="/project3.png"
        codeSrc="https://github.com/tnqkr3494/carrot-market"
        skills={["NextJS", "tailwind", "prisma", "planetscale"]}
        description="NextJS12버전을 사용하면서 만들었던 프로젝트. 강의를 들으면서 천천히 이해하고 복습해가며 만들었다.
        E-Commerce사이트를 직접 구현해보면서 백엔드 동작까지 Next의 도움으로 맛볼 수 있었다.
        이 프로젝트를 통해 NextJS와 사랑에 빠지게 되었다....❤️. 개인적으로 프론트엔드 개발에 더욱 흥미를 느끼고, 자신감도 생길 수 있게 해준 프로젝트.
        "
      />
      <ProejectSection
        title="CSS Practice"
        imgSrc="/project4.png"
        codeSrc="https://github.com/tnqkr3494/Css-practice"
        reversed={true}
        skills={["HTML", "CSS", "JS"]}
        description="react, NextJS, 기타 라이브러리들을 배우기 급급하여 기본기가 부족함을 느꼈다.
        다시 초심으로 돌아가 여러 영상, 사이트를 둘러보며 기본기 연습을 하였다.
        내가 부족했던 부분, 몰랐던 부분들을 되짚어 볼 수 있었던 계기가 되었다.
        튜닝의 끝은 순정...
        "
      />
      <section className="flex flex-col gap-32 items-center">
        <div className="w-16 h-16 rounded-full bg-base-300"></div>
        <div className="w-16 h-16 rounded-full bg-base-300"></div>
        <div className="w-16 h-16 rounded-full bg-base-300"></div>

        <Link
          href="https://github.com/tnqkr3494"
          target="_blank"
          className="cursor-pointer animate-bounce"
        >
          <span className="text-4xl font-extrabold underline underline-offset-4">
            Discover more projects
          </span>
        </Link>
      </section>
    </main>
  );
}
