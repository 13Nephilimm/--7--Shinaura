"use strict";

/************************* SLIDER #1 ************************/
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

/************************* TABS COMPONENTS ************************/

const tabs = document.querySelectorAll(".tab");
const tabsContainer = document.querySelector(".tabs-box");
const tabsContent = document.querySelectorAll(".content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("active-button"));
  clicked.classList.add("active-button");

  tabsContent.forEach((c) => {
    c.classList.remove("active");
  });

  document
    .querySelector(`.content-${clicked.dataset.tab}`)
    .classList.add("active");
});

/************************* TABS SLIDER #1 ************************/
const slides2 = document.querySelectorAll(".slide-2");
const btnLeft2 = document.querySelector(".slider-btn-2-left-2");
const btnRight2 = document.querySelector(".slider-btn-2-right-2");

let curSlide2 = 0;
const maxSlide2 = slides2.length;

const goToSlide2 = function (slide) {
  slides2.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide2(0);

const nextSlide2 = function () {
  if (curSlide2 === maxSlide2 - 1) {
    curSlide2 = 0;
  } else {
    curSlide2++;
  }

  goToSlide2(curSlide2);
};

const prevSlide2 = function () {
  if (curSlide2 === 0) {
    curSlide2 = maxSlide2 - 1;
  } else {
    curSlide2--;
  }

  goToSlide2(curSlide2);
};

const init2 = function () {
  goToSlide2(0);
};
init2();

btnRight2.addEventListener("click", nextSlide2);
btnLeft2.addEventListener("click", prevSlide2);

/************************* TABS SLIDER #2 ************************/
const slides3 = document.querySelectorAll(".slide-3");
const btnLeft3 = document.querySelector(".slider-btn-3-left-3");
const btnRight3 = document.querySelector(".slider-btn-3-right-3");

let curSlide3 = 0;
const maxSlide3 = slides3.length;

const goToSlide3 = function (slide) {
  slides3.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide3(0);

const nextSlide3 = function () {
  if (curSlide3 === maxSlide3 - 1) {
    curSlide3 = 0;
  } else {
    curSlide3++;
  }

  goToSlide3(curSlide3);
};

const prevSlide3 = function () {
  if (curSlide3 === 0) {
    curSlide3 = maxSlide3 - 1;
  } else {
    curSlide3--;
  }

  goToSlide3(curSlide3);
};

const init3 = function () {
  goToSlide3(0);
};
init3();

btnRight3.addEventListener("click", nextSlide3);
btnLeft3.addEventListener("click", prevSlide3);

/************************* TABS SLIDER #3 ************************/
const slides4 = document.querySelectorAll(".slide-4");
const btnLeft4 = document.querySelector(".slider-btn-4-left-4");
const btnRight4 = document.querySelector(".slider-btn-4-right-4");

let curSlide4 = 0;
const maxSlide4 = slides4.length;

const goToSlide4 = function (slide) {
  slides4.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide4(0);

const nextSlide4 = function () {
  if (curSlide4 === maxSlide4 - 1) {
    curSlide4 = 0;
  } else {
    curSlide4++;
  }

  goToSlide4(curSlide4);
};

const prevSlide4 = function () {
  if (curSlide4 === 0) {
    curSlide4 = maxSlide4 - 1;
  } else {
    curSlide4--;
  }

  goToSlide4(curSlide4);
};

const init4 = function () {
  goToSlide4(0);
};
init4();

btnRight4.addEventListener("click", nextSlide4);
btnLeft4.addEventListener("click", prevSlide4);

/************************* TABS SLIDER #4 ************************/
const slides5 = document.querySelectorAll(".slide-5");
const btnLeft5 = document.querySelector(".slider-btn-5-left-5");
const btnRight5 = document.querySelector(".slider-btn-5-right-5");

let curSlide5 = 0;
const maxSlide5 = slides5.length;

const goToSlide5 = function (slide) {
  slides5.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide5(0);

const nextSlide5 = function () {
  if (curSlide5 === maxSlide5 - 1) {
    curSlide5 = 0;
  } else {
    curSlide5++;
  }

  goToSlide5(curSlide5);
};

const prevSlide5 = function () {
  if (curSlide5 === 0) {
    curSlide5 = maxSlide5 - 1;
  } else {
    curSlide5--;
  }

  goToSlide5(curSlide5);
};

const init5 = function () {
  goToSlide5(0);
};
init5();

btnRight5.addEventListener("click", nextSlide5);
btnLeft5.addEventListener("click", prevSlide5);

/*************************  REVEAL SECTIONS  ************************/
const allSections = document.querySelectorAll(".section");

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

/*************************  COPYRIGHT  ************************/
const date = new Date().getFullYear();
const dateElement = document.querySelector(".year");

dateElement.textContent = date;
