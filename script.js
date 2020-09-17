let previous=document.getElementById('prev');
let next=document.getElementById('next');
let dots=document.getElementById('dots');
let slides=document.getElementsByClassName('slides');

for(let i=0;i<slides.length;i++){
	dots.innerHTML+="<p class='dot'></p>"
}

let dot=document.getElementsByClassName('dot');
let slideIndex=1;

previous.addEventListener('click', ()=> changeSlide(-1));
next.addEventListener('click', ()=> changeSlide(1));
changeSlide=num=>showSlides(slideIndex+=num);

showSlides = num => {
	num > slides.length ? slideIndex = 1 :  num < 1 ? slideIndex = slides.length : slideIndex;
	for (let i =0; i<slides.length;i++){
		slides[i].style.display="none";
		dot[i].className=dot[i].className.replace("active","");
	}

	slides[slideIndex-1].style.display="block";
	dot[slideIndex-1].className +=" active";
}
showSlides(slideIndex);

setInterval(() => changeSlide(1), 5000);