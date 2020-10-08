!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){(function(o){var n,r,i;"undefined"!=typeof window&&window,r=[],void 0===(i="function"==typeof(n=function(){var e=function(t,o){"use strict";var n=Object.create(e.prototype),r=0,i=0,a=0,l=0,s=[],p=!0,c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},d=null,u=!1;try{var m=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("testPassive",null,m),window.removeEventListener("testPassive",null,m)}catch(e){}var f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,w=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}();n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){n.options[e]=o[e]})),o&&o.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach((function(n){"number"!=typeof n&&(o=!1),null!==e&&n<e&&(t=!1),e=n})),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax");var v="string"==typeof t?document.querySelectorAll(t):[t];if(v.length>0){if(n.elems=v,n.options.wrapper&&!n.options.wrapper.nodeType){var x=document.querySelector(n.options.wrapper);if(!x)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=x}var y,b=function(){for(var e=0;e<s.length;e++)n.elems[e].style.cssText=s[e].style;var t,o;s=[],i=window.innerHeight,l=window.innerWidth,t=l,o=n.options.breakpoints,y=t<o[0]?"xs":t>=o[0]&&t<o[1]?"sm":t>=o[1]&&t<o[2]?"md":"lg",g(),function(){for(var e=0;e<n.elems.length;e++){var t=h(n.elems[e]);s.push(t)}}(),T(),p&&(window.addEventListener("resize",b),p=!1,S())},h=function(e){var t,o=e.getAttribute("data-rellax-percentage"),r=e.getAttribute("data-rellax-speed"),a=e.getAttribute("data-rellax-xs-speed"),s=e.getAttribute("data-rellax-mobile-speed"),p=e.getAttribute("data-rellax-tablet-speed"),c=e.getAttribute("data-rellax-desktop-speed"),d=e.getAttribute("data-rellax-vertical-speed"),u=e.getAttribute("data-rellax-horizontal-speed"),m=e.getAttribute("data-rellax-vertical-scroll-axis"),f=e.getAttribute("data-rellax-horizontal-scroll-axis"),w=e.getAttribute("data-rellax-zindex")||0,v=e.getAttribute("data-rellax-min"),x=e.getAttribute("data-rellax-max"),b=e.getAttribute("data-rellax-min-x"),h=e.getAttribute("data-rellax-max-x"),g=e.getAttribute("data-rellax-min-y"),z=e.getAttribute("data-rellax-max-y"),S=!0;a||s||p||c?t={xs:a,sm:s,md:p,lg:c}:S=!1;var T=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(T=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var E=n.options.vertical&&(o||n.options.center)?T:0,O=n.options.horizontal&&(o||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,L=E+e.getBoundingClientRect().top,Y=e.clientHeight||e.offsetHeight||e.scrollHeight,k=O+e.getBoundingClientRect().left,q=e.clientWidth||e.offsetWidth||e.scrollWidth,X=o||(E-L+i)/(Y+i),j=o||(O-k+l)/(q+l);n.options.center&&(j=.5,X=.5);var M=S&&null!==t[y]?Number(t[y]):r||n.options.speed,P=d||n.options.verticalSpeed,R=u||n.options.horizontalSpeed,F=m||n.options.verticalScrollAxis,W=f||n.options.horizontalScrollAxis,_=A(j,X,M,P,R),C=e.style.cssText,H="",N=/transform\s*:/i.exec(C);if(N){var B=N.index,D=C.slice(B),G=D.indexOf(";");H=G?" "+D.slice(11,G).replace(/\s/g,""):" "+D.slice(11).replace(/\s/g,"")}return{baseX:_.x,baseY:_.y,top:L,left:k,height:Y,width:q,speed:M,verticalSpeed:P,horizontalSpeed:R,verticalScrollAxis:F,horizontalScrollAxis:W,style:C,transform:H,zindex:w,min:v,max:x,minX:b,maxX:h,minY:g,maxY:z}},g=function(){var e=r,t=a;if(r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=o-n.options.wrapper.offsetTop}return!(e==r||!n.options.vertical)||!(t==a||!n.options.horizontal)},A=function(e,t,o,r,i){var a={},l=(i||o)*(100*(1-e)),s=(r||o)*(100*(1-t));return a.x=n.options.round?Math.round(l):Math.round(100*l)/100,a.y=n.options.round?Math.round(s):Math.round(100*s)/100,a},z=function(){window.removeEventListener("resize",z),window.removeEventListener("orientationchange",z),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",z),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",z),d=c(S)},S=function(){g()&&!1===p?(T(),d=c(S)):(d=null,window.addEventListener("resize",z),window.addEventListener("orientationchange",z),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",z,!!u&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",z,!!u&&{passive:!0}))},T=function(){for(var e,t=0;t<n.elems.length;t++){var o=s[t].verticalScrollAxis.toLowerCase(),p=s[t].horizontalScrollAxis.toLowerCase(),c=-1!=o.indexOf("x")?r:0,d=-1!=o.indexOf("y")?r:0,u=-1!=p.indexOf("x")?a:0,m=(d+(-1!=p.indexOf("y")?a:0)-s[t].top+i)/(s[t].height+i),f=(c+u-s[t].left+l)/(s[t].width+l),v=(e=A(f,m,s[t].speed,s[t].verticalSpeed,s[t].horizontalSpeed)).y-s[t].baseY,x=e.x-s[t].baseX;null!==s[t].min&&(n.options.vertical&&!n.options.horizontal&&(v=v<=s[t].min?s[t].min:v),n.options.horizontal&&!n.options.vertical&&(x=x<=s[t].min?s[t].min:x)),null!=s[t].minY&&(v=v<=s[t].minY?s[t].minY:v),null!=s[t].minX&&(x=x<=s[t].minX?s[t].minX:x),null!==s[t].max&&(n.options.vertical&&!n.options.horizontal&&(v=v>=s[t].max?s[t].max:v),n.options.horizontal&&!n.options.vertical&&(x=x>=s[t].max?s[t].max:x)),null!=s[t].maxY&&(v=v>=s[t].maxY?s[t].maxY:v),null!=s[t].maxX&&(x=x>=s[t].maxX?s[t].maxX:x);var y=s[t].zindex,b="translate3d("+(n.options.horizontal?x:"0")+"px,"+(n.options.vertical?v:"0")+"px,"+y+"px) "+s[t].transform;n.elems[t].style[w]=b}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=s[e].style;p||(window.removeEventListener("resize",b),p=!0),f(d),d=null},b(),n.refresh=b,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e})?n.apply(t,r):n)||(e.exports=i)}).call(this,o(2))},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=(o(3),new r.a(".rellax"),document.querySelector(".g-visibility")),a=document.querySelector(".city"),l=document.querySelector(".person"),s=(document.querySelector(".house-1"),document.querySelector("#letter"));i.style.visibility="hidden";setTimeout((function(){i.style.visibility="visible"}),2e3),window.addEventListener("scroll",(function(){a.style.marginTop=.2*window.scrollY-185+"px",s.style.opacity=1-.002*window.scrollY,l.style.transform="scale(".concat(1-2e-4*window.scrollY,")"),l.style.top=45+.022*window.scrollY+"%"}))},function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){}]);