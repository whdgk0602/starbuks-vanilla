const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', ()=>{
	searchInputEl.focus();
});

searchInputEl.addEventListener('focus', ()=>{
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', ()=>{
	searchEl.classList.remove('focused');
	searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(
	()=>{
		if(window.scrollY > 500){
			// gsap.to(요소, 지속시간, 옵션), 배지숨기기
			gsap.to(badgeEl, .6, {
				opacity : 0,
				display	: 'none',
			});
			//버튼 보이기
			gsap.to(toTopEl, .2, {
				x: 0,

			});
		}else{
			//배지 보이기
			gsap.to(badgeEl, .6, {
				opacity : 1,
				display	: 'block',
			});
			//버튼 숨기기
			gsap.to(toTopEl, .2, {
				x: 100,
			});
		}
	}, 300));


	toTopEl.addEventListener('click', ()=>{
		gsap.to(window, .7, {
			scrollTo : 0
		})
	})

	const fadeEls = document.querySelectorAll('.visual .fade-in');
	fadeEls.forEach((fadeEl, index)=>{
		gsap.to(
			fadeEl, 1, {
				delay: .7*(index+1),
				opacity : 1,
			}
		);
	});

new Swiper('.notice-line .swiper-container', {
	direction : 'vertical',
	autoplay : true,
	loop : true,
});

new Swiper('.promotion .swiper-container', {
	slidesPerView : 3,
	spaceBetween : 10,
	centeredSlides : true,
	loop : true,
	autoplay : {
		delay : 5000,
	},
	pagination : {
		el : '.promotion .swiper-pagination',
		clickable : true,
	},
	navigation : {
		prevEl : '.promotion .swiper-prev',
		nextEl : '.promotion .swiper-next',
	}
});

new Swiper('.awards .swiper-container', {
	autoplay : true,
	loop : true,
	spaceBetween : 30,
	slidesPerView : 5,
	navigation : {
		prevEl : '.awards .swiper-prev',
		nextEl : '.awards .swiper-next'
	}
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', ()=>{
	isHidePromotion = !isHidePromotion;
	if(isHidePromotion){
		promotionEl.classList.add('hide');
	}else{
		promotionEl.classList.remove('hide');
	}
});

function random(min, max){
	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
	gsap.to(selector, random(1.5, 2.5), {
		y : size,
		repeat : -1,
		yoyo : true,
		ease:Power1.easeInOut,
		delay : random(0, delay),
	});
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl)=>{
	new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();