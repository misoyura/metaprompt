// 강의 공통 정보와 차시 목록.
// 새 차시를 추가하려면: 1) session_N.html 내용 파일 작성, 2) 아래 SESSIONS 배열에 항목 추가.
// index.html의 목차 카드와 각 session_N.html의 상단 네비게이션이 이 데이터로 자동 생성됩니다.

const COURSE = {
  name: "선문대학교 프롬프트 리터러시 특강",
  instructor: "김유라",
  year: 2026,
};

const SESSIONS = [
  {
    id: 1,
    title: "AI에게 제대로 질문하고, 제대로 확인하는 방법",
    subtitle: "프롬프트 리터러시 · 선문대 재학생 특강 · 2026.9.30(수) 12:30~14:20",
    desc: "AI 환각과 검증의 필요성부터 좋은 질문의 재료 5가지, 메타프롬프트 3단계, Gemini Gems·Deep Research·Canvas 실습, 검증 체크리스트까지.",
    href: "session_1.html",
    anchors: [
      { href: "#part0", label: "0 오프닝" },
      { href: "#part1", label: "1 같은 질문, 다른 결과" },
      { href: "#part2", label: "2 질문 기술" },
      { href: "#part3", label: "3 메타프롬프트" },
      { href: "#part4", label: "4 Gemini 실전" },
      { href: "#part5", label: "5 검증" },
      { href: "#part6", label: "6 종합 실습" },
      { href: "#part7", label: "7 마무리" },
    ],
  },
];
