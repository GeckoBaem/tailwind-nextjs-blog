interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}
//이미지 프레임 사이즈 16 X 9
const projectsData: Project[] = [
  {
    title: "WITTY",
    description: `2024년도 제50회 덕영제 전시 목적 MAKE@Web 동아리 - 교사 정보 제공 웹앱`,
    imgSrc: "https://i.imgur.com/fEJWjIy.png",
    href: "https://github.com/GeckoBaem/WITTY",
  },
  {
    title: "Gradient Color Text Generator",
    description: `React 학습 목적 그라데이션 텍스트 생성기`,
    imgSrc: "",
    href: "https://github.com/GeckoBaem/Gradient-color-Text",
  },
  {
    title: "Quick Sort Animation",
    description: `자료구조 - 퀵정렬 시각화 제작`,
    imgSrc: "https://i.imgur.com/69Y8MwT.png",
    href: "https://geckobaem.github.io/Quick-Sort-Animation/main.html",
  },
  {
    title: "PROJECT: ULLA",
    description: `2023년도 비즈쿨 솔루션 - 코오롱 글로텍 문제 해결 발표 보조자료 아이디어 소개 사이트`,
    imgSrc: "https://i.imgur.com/ZpGq1Gk.png",
    href: "https://project-ulla-web.pages.dev/",
  },
  {
    title: "Weather Forecast API",
    description: `외부 API 활용 능력 학습 목적 날씨 예보 웹(Next.JS, Vercel)`,
    imgSrc: "https://i.imgur.com/GAKT5lS.png",
    href: "https://weather.geckobaem.kr",
  },
  {
    title: "Voronoi & Delaunay",
    description: `2024년도 덕영고 알고리즘 교내 대회 우수상 프로젝트 - 보로노이 & 들로네 시각화`,
    imgSrc: "https://i.imgur.com/hMEVzyy.png",
    href: "https://geckobaem.github.io/Voronoi-Delaunay/main.html",
  },
]

export default projectsData
