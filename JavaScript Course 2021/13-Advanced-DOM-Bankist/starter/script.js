'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
//////////////////////////////////
//MODAL WINDOW

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////
//PAGE NAVIGATION
//способ 1 - не очень эффективный, тк создаем несколько ф-й (forEACH) для каждой кнопки
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); //предотвращаем переход по анкерам из html - те клик по элементу с href = #name перенесет на эл-т с id "name"
//     const id = this.getAttribute('href'); /*этот самый href*/
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     //ВАЖНО общая практика в html засовывать id элемента в href кнопки, чтоб потом ее прочитать и сделать навигацию
//   });
// });

//способ 2 - более эффективный с использованием bubble up - EVENT DELEGATION
//1. add eventListener to common parent
//2. Determine what el originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //  console.log(e.target); //where the event happened
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); /*этот самый href*/
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//TABBED COMPONENT
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

//tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return; //если мы кликаем не по таб-ам, а по пустому месту

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');
  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//MENU FADE ANIMATION
// const nav = document.querySelectorAll('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// способ 1
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// }); //event listener expects a f, поэтому нельзя просто вызвать handleHover

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//способ 2 - удаляем коллбэк ф-ии, используем bind метод
/*Bind method ex - creates the copy of the f, that it's called on 
and will set the THIS keyword 
in this f call to whatever value that we pass into bind */
//Passing argument into handler

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//STICKY NAVIGATION
//1 идея - sticky class в html. в css - position: fixed + backgroundColor: transparency
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   // window.scrollY//scrolling position от места, где мы сейчас к самой вершине страницы
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// const obsCallback = function (
//   entries /*это array of threshold entries*/,
//   observer
// ) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }; //will be called each time when the observed element is intersecting the root element at the threshold % we have defined

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2], // % of intersection on which the obsCallback will be called
// }; //object; needs a root property

// //threshgold: [0, 0.2] - 0% значит, что ф будет вызываться каждый раз, когда таргет-элемент полностью выходит из вида или когда он появляется на виду
// //1 значил бы, что когда полностью появится на экране
// const observer = new IntersectionObserver(
//   obsCallback /*function*/,
//   obsOptions /*object*/
// );
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //когда исчезает из виду
  rootMargin: `-${navHeight}px`, //% or RAM doesnt work
});
1;
headerObserver.observe(header);

//REVEALING ELEMENTS ON SCROLL
/*CSS style, который помогает делаеть красивый эффект всплытия новой секции при скроллинге
.section--hidden {
  opacity: 0;
  transform: translateY(8rem);
} */
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(
  revealSection,
  /*object of options */ {
    root: null,
    threshold: 0.15,
  }
);
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add('section--hidden');
});

//LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  //замена изображения проходит behind the scenes. Как только js закончит загрузку изобр, произойдет load event
  //load event - он как и обычные ивенты, его можно слушать
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
    //если просто удалять класс без ивентЛистнера, то будет слишком быстро это происходить (даже не заметим)
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

//BUILDING a SLIDER COMPONENT - все это в отдельную функцию!!!
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;

  //потом удалить, просто чтоб проще было видеть слайды
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.5)';
  // slider.style.overflow = 'visible'; //?????

  //создаем точки
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        //HTML-code itself =>
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  //createDots();=>put into init f

  //чтоб точка становилась другого цвета
  const activateDot = function (slide) {
    //сначала деактивируем все
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    //потом активируем нужный
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  //activateDot(0); =>put into init f

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    ); //здесь дб процент
  };
  //goToSlide(0);=>put into init f

  //Next slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  //функция при загрузке страницы
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  //Event Handllers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //чтоб работали стрелочки
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide(); //short circuting
  });

  //чтоб работали точки
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide; //иначе можно записать {slide} = e.target.dataset - пример destructuring;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//SCROLLING
//Attributes
//const logo = document.querySelector('.nav__logo');

btnScrollTo.addEventListener('click', function (e) {
  // preventDefault();
  const s1coords = section1.getBoundingClientRect(); //relative to visible ViewPort (относительно того, что мы видим на странице)
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log(window.pageXOffset, pageYOffset); //текущее положение, до которого доскроллили
  console.log(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //height/width of viewport

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1 /*куда*/
    .scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

//Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header'); //наиболее употребимы
//const allSections = document.querySelectorAll('.section'); //наиболее употребимы
// console.log(allSections);
//
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); //life html collection
// console.log(document.getElementsByClassName('btn')); //life html collection

//Creating and insetring elements
// .insertAdjacentHTML // наиболее употребимый и автору больше всего нра!!!

const message = document.createElement('div'); //это создаст ДОМ-элемент, к-й сохранит в вар мессадж
//НО! пока этот элемент еще не в ДОМ! его пока нигде нет
//чтоб его увидеть, его нужно вручную вставить на страницу, но первоначально мы, напр, добавим класс
//message - это объект, к-й представляет собой ДОМ-элемент => можем на нем использовать, например, classlist
message.classList.add('cookie-message');
// message.textContent = 'We use cookues for improved functionality and analytics';
message.innerHTML =
  'We use cookues for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//теперь мы помещаем элемент кнопку в наш ДОМ в хэдер

header.append(message);

//Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //удалит созданную выше кнопку Got it и строчку про куки
  });

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%'; //-это inline styles

// console.log(message.style.backgroundColor); //будет rgb...

// console.log(getComputedStyle(message).color); // выдаст rgb...

//например, хотим увеличить высоту элемента
//тк высота в пикселях - нужно парсить
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //1 способ - через ивентЛистнер

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great');
// });

//2 способ - using onevent property
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great');
// };

// const alertH1 = function (e) {
//   alert('addEventListener: Great');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);//удалит через 3 секи
// rgb(255,255,255);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log(e.target, e.currentTarget);
//   //e.stopPropagation();//bubble up не коснется parent elements
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   // console.log('LINK3');
//   this.style.backgroundColor = randomColor();
// });

//DOM traversing
// const h1 = document.querySelector('h1');

//going downward - selecting child
// console.log(h1.querySelectorAll('.highlight')); //выбирает все эл-ты с классом highlight , которые дети h1/ и неважно, на сколько уровней дети
// console.log(h1.childNodes); // всякая фигня
// console.log(h1.children); //HTML coolection - но только для Direc children;
// h1.firstElementChild.style.color = 'white'; //ex
// h1.lastElementChild.style.color = 'black'; //ex

// //going upward - selecting parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.closest('.header'));

// //going sideways - siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling); //for Nodes
// console.log(h1.nextSibling); //for Nodes

// //all sibings trick
// console.log(h1.parentElement.children)

//DOMContentLoaded - ждет, пока загрузится html и сss (не ждет external res-s или картинки) и потом происходит
document.addEventListener('DOMContentLoaded', function (e) {
  console.log(e);
});

/*
когда html will be parsed and the DOM tree built - 
в консоль выйдет ивент
*/

//когда страница полностью прогрузится
window.addEventListener('load', function (e) {
  console.log(e);
});

//прямо перед закрытием страницы
window.addEventListener('beforeunload', function (e) {
  //в хроме чтоб работал - используем привентДеф
  e.preventDefault();
  //можно использовать, когда юзер хочет выйти, чтоб спросить, точно ли он хочет покинуть стр
  console.log(e);
  e.returnValue = ''; //in order to display a leaving confirmation - по историческим причинам
  //выскочит поп-ап, точно ли покидаете страницу?
  //изменить поп-ап нельзя
});
