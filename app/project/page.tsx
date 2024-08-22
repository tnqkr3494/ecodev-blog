import ProejectSection from "@/components/project-section";
import Link from "next/link";

export default function Project() {
  return (
    <main className="py-56 md:py-56 px-4 md:px-20 flex flex-col gap-32 md:gap-32">
      <ProejectSection
        title="당뇨병 환자를 위한 건강식 간편 구독서비스"
        imgSrc="/diabetes.png"
        codeSrc="https://github.com/likelion-onetool/diabetes-frontend"
        detailSrc="https://jelly-textbook-0b1.notion.site/9137b6d344f4417580624e5788da118b"
        startDate="2024.07.01"
        endDate="2024.08.07"
        act="회원가입, 로그인, 아이디&비번 찾기, 물건 검색, 물건 장바구니 및 구매, 회원 정보 조회, 수정 및 탈퇴"
        language={["React", "TypeScript"]}
        library={["styled-component", "react-router", "react-query"]}
        description="멋대 12기 중앙 해커톤 주제로 팀을 꾸려 나간 프로젝트. 
        당뇨병 환자들을 위한 건강도시락 판매 사이트를 제작하였다. 중간에 서버가 다운되고,
        백엔드와의 연결할 때 cors문제, api에서 문제들이 생겨서 고전하였지만 팀원들이 서로 포기하지 않고
        열심히 해주어서 끝까지 잘 마무리 할 수 있었다.
        "
      />
      <ProejectSection
        title="그녀를 구해라!"
        imgSrc="/hackerton.png"
        codeSrc="https://github.com/bagle-ggul/bagleFront"
        detailSrc="https://jelly-textbook-0b1.notion.site/PROJECT-1ce5beaadbb449269210fd41de5c4272"
        startDate="2024.05.17"
        endDate="2024.05.18"
        act="회원가입, 로그인, 각 스테이지별 선택지 고르기, 선택지 및 점수에 따라 달라지는 스토리 전개, 유저별 점수 랭킹"
        reversed={true}
        language={["React", "JavaScript"]}
        library={["styled-component", "recoil", "react-router"]}
        description="세종대학교 소프트웨어융합대학 주관 해커톤에서 우리팀이 선정한 프로젝트.
        *미연시 즉 미소녀 연애 시뮬레이션을 주제로 게임을 플레이할 수 있는 사이트를 제작하였다.
        하루만에 완성해야되는 프로젝트였고, 주제가 게임이다 보니 로직이 굉장히 복잡해져서 버그를
        수정하는데 굉장한 노력을 많이했다.
        "
      />
      <ProejectSection
        title="My Blog"
        imgSrc="/blog.png"
        codeSrc="https://github.com/tnqkr3494/ecodev-blog"
        detailSrc="https://jelly-textbook-0b1.notion.site/62e747a4ad1846a8ac4e2f87ad60f1e4"
        startDate="2024.03"
        endDate="ing"
        act="나의 소개 페이지, 나의 프로젝트 페이지, notion과 연동한 블로그 포스트, 다크&라이트 모드"
        language={["NextJS", "TypeScript"]}
        library={["tailwind", "DaisyUI", "react-notion-x", "giscus"]}
        description="velog, tistory와 같은 블로그를 제작할 수 있는 사이트는 여럿 있지만 
        커스터마이징하는 부분에서 한계를 느꼈고, 또한 내가 그동안 공부했던 기술들을 이용해서 나의
        상상력을 펼칠 수 있는 기회를 만들고 싶어서 이 프로젝트를 기획했다.
        "
      />
      <ProejectSection
        title="Nostalgia Films"
        imgSrc="/nostalgia.png"
        codeSrc="https://github.com/tnqkr3494/db_course"
        detailSrc="https://jelly-textbook-0b1.notion.site/Nostalgia-Films-11799c9ad9524cca88a68fedd580f653"
        startDate="2024.05.22"
        endDate="2024.05.31"
        act="회원가입, 로그인, 영화 검색 및 정보 조회, 회원 정보 조회, 영화관 정보 조회, 가상의 티켓 구매 및 예약, favorite기능"
        reversed={true}
        language={["React", "TypeScript", "MSSQL"]}
        library={["Express", "react-hook-form", "tailwind", "framer-motion"]}
        description="학교 데이터베이스 과목 수업에서 SQL을 이용한 프로젝트를 구상했었다.
        그 과정에서 SQL 쿼리문을 만드는데 그치지 않고, 나의 전공인 프론트엔드를 살려서 그대로
        express를 이용해서 프론트와 db를 연결시켰다. 사이트의 기능 및 내용은 고전 명화들의 정보를 볼 수 있고,
        가상의 영화관의 티켓을 구매할 수 있도록 해서 예매하는 과정까지 구현해 보았다.
        "
      />
      <section className="flex flex-col items-center gap-16 mt-12 md:mt-32">
        <div className="w-16 h-16 rounded-full bg-base-300"></div>
        <div className="w-16 h-16 rounded-full bg-base-300"></div>
        <div className="w-16 h-16 rounded-full bg-base-300"></div>

        <Link
          href="https://github.com/tnqkr3494"
          target="_blank"
          className="cursor-pointer animate-bounce"
        >
          <span className="text-2xl md:text-4xl font-extrabold underline underline-offset-4">
            Discover more projects
          </span>
        </Link>
      </section>
    </main>
  );
}
