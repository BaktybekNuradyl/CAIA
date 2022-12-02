//    fixed menu  bg

let programFix = document.querySelector('.nav-fixed');
let mainContent = document.querySelector('.header-title');

const progFixed = () => {
  let scrollTop = window.scrollY;
  let routeCenter = mainContent.offsetHeight / 2;

  if (scrollTop >= routeCenter) {
    programFix.classList.add("animation-nav");
  } else {
    programFix.classList.remove("animation-nav");
  }
};

window.addEventListener("scroll", () => {
  progFixed();
});


//    burger

let burger = document.getElementsByClassName("burger")[0];
let show = document.getElementsByClassName("nav-items")[0];

burger.addEventListener("click", () => {
  burger.classList.toggle("show-menu");
  show.classList.toggle("show");
});



//   contacts   form

// let contactform = document.querySelector(".footer-form");
// if (contactform) {
//   contactform.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let data = new FormData(this);
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", location.origin + "/formrequest.php");
//     xhr.onload = function () {
//      console.log(this.responseText);
//       contactform.innerHTML = "Спасибо, ваша заявка принята!";
//     };
//     xhr.send(data);
//   });
// }


//  scroll to element 

const smoothLinks = document.querySelectorAll(".nav-link");
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}


	//   animation text

	const animItems = document.querySelectorAll('.anim-items');

	if(animItems.length > 0) {
		window.addEventListener('scroll', animOnScrollElem);

		function animOnScrollElem(param)	{
			for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			
			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			}else {
				if(!animItem.classList.contains('anim-no')){
				animItem.classList.remove('_active')
				}
			}
			}
		}

		function offset(el) {

			const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}

		setTimeout(() => {
			animOnScrollElem();
		}, 300)

	};

