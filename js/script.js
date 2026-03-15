//클래스명이 depth1-list인 모든요소 리스트저장 ,메가 메뉴가 펼쳐질때 나타날 배경요소 선택
const depth1Lists = document.querySelectorAll(".depth1-list");
const depth2NavBg = document.querySelector(".depth2-nav-bg");

// 특정메뉴에서만 반응(필터링 배열만들기) 마우스 이벤트 연결
const activeMenuTexts = ["소개", "투자정보"];

//반복문(forEach) 사용해서 조건을 확인하며 기능부여
depth1Lists.forEach((list) => {
  const linkText = list.querySelector(".depth1-link")?.textContent.trim();

  if (activeMenuTexts.includes(linkText)) {
    list.addEventListener("mouseenter", () => {
      depth2NavBg.classList.add("active");
    });

    list.addEventListener("mouseleave", () => {
      depth2NavBg.classList.remove("active");
    });
  }
});

// 스와이퍼

const swiper = new Swiper(".section-2-content.swiper", {
  slidesPerView: "auto",
});
