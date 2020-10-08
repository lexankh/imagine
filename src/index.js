
import Rellax from 'Rellax';
import "./index.css";
//объявление переменныз
var rellax = new Rellax('.rellax');
const charG = document.querySelector(".g-visibility");


const city = document.querySelector(".city");
const person = document.querySelector(".person");
const house1 = document.querySelector(".house-1");
const house2 = document.querySelector('.house-2');
const moscowcity = document.querySelector('.moscow-city');
const lighters = document.querySelector('.lighters');
const bridge = document.querySelector('.bridge');
const logo = document.querySelector("#letter");

const cloud1 = document.querySelector('#cloud-1');
const cloud2 = document.querySelector('#cloud-2');
const cloud3 = document.querySelector('#cloud-3');
const cloud4 = document.querySelector('#cloud-4');
const cloudtext = document.querySelector('.cloud__text');

const ques = document.querySelectorAll('.queue'); //массив из всех картинок вопроса




charG.style.visibility = "hidden";

const visible = () => { //видимость для буквы g
  charG.style.visibility = "visible";
};
setTimeout(visible, 2000);


function fadeOut(el){  //функция затухания
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function fadeIn(el, display){ // функция плавного появления
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

function takeQues () {  // вопросы в конце
  fadeOut(cloud3);
  cloud4.style.display = "block";
  moscowcity.style.opacity = 0.5;
  house2.style.opacity = 0.5;
  lighters.style.opacity = 0.5;
  bridge.style.opacity = 0.5;

  ques.forEach(item => {
    item.style.display = "block";
  })
  
 

}

//события по скроллу
window.addEventListener("scroll", function () {

  city.style.marginTop = -185 + window.scrollY * 0.2 + "px";
  logo.style.opacity = 1 - window.scrollY * 0.002; //прозрачность лого при прокрутке
  person.style.transform = `scale(${1 - window.scrollY * 0.0003})`;
 
  person.style.top = 45 + window.scrollY * 0.022  + "%";
  
  if (window.scrollY < 500 && window.scrollY > 480) {
    fadeIn(cloud1, "block");
    fadeOut(cloud2);
  }

  if (window.scrollY > 500 && window.scrollY < 540) {
    fadeOut(cloud1);
    fadeIn(cloud2, "block");
  }

  if (window.scrollY > 980 && window.scrollY < 1000 ) {
    fadeOut(cloud2);
    fadeIn(cloud3, "block");
    document.body.style.overflow = 'hidden';
    setInterval(takeQues, 3000);
    

  }

 

 
  
});
