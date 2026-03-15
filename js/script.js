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

// 섹션 2 스와이퍼

const swiper = new Swiper(".section-2-content .swiper", {
  slidesPerView: "auto",
});

// 섹션 2 스크롤 애니메이션

const section2 = document.querySelector(".section-2");
const swiperSlides = document.querySelectorAll(
  ".section-2-content .swiper-slide",
);

// 상태 변수: 애니메이션이 이미 적용되었는지 확인 (성능 향상)
let isSpread = false;

function checkSection2Scroll() {
  if (!section2) return;

  const rect = section2.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const sectionHeight = rect.height;

  // 스크롤 진행률 계산 (뷰포트 하단 기준 섹션 진입 정도)
  const scrolledIntoSection = viewportHeight - rect.top;
  const threshold = sectionHeight * 0.15;

  // 15% 지점 도달 여부 확인
  const shouldSpread = scrolledIntoSection >= threshold;

  // 상태가 바뀔 때만 클래스 조작 (매 스크롤마다 DOM을 건드리지 않음)
  if (shouldSpread && !isSpread) {
    swiperSlides.forEach((slide) => slide.classList.add("spread"));
    isSpread = true;
  } else if (!shouldSpread && isSpread) {
    swiperSlides.forEach((slide) => slide.classList.remove("spread"));
    isSpread = false;
  }
}

// 스크롤 최적화 (requestAnimationFrame)
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkSection2Scroll();
      ticking = false;
    });
    ticking = true;
  }
});

// 초기 실행 (페이지 로드 시점에 이미 해당 위치일 경우 대비)
checkSection2Scroll();
