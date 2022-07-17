const slideList=document.querySelector('.slide_list');
const slideContents=document.querySelectorAll('.slide_content');
const slideBtnNext=document.querySelector('.slide_btn_next');
const slideBtnPrev=document.querySelector('slide_btn_prev');
const pagination=document.querySelector('.slide_pagination');
const slidenLen=slideContents.length;
const slideWidth=400;
const slideSpeed=300;

slideList.style.width=slideWidth*(slidelen)+"px";

let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);


