(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AiQS:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(e){return a.a.createElement("p",{className:"text-lg lg:text-xl text-tertiary font-medium text-center tracking-wide my-4 leading-relaxed lg:leading-loose"},e.text)}},HbP6:function(e,t,r){(function(r){var n,a,o;"undefined"!=typeof window&&window,a=[],void 0===(o="function"==typeof(n=function(){return function e(t,r){"use strict";var n=Object.create(e.prototype),a=0,o=0,l=0,i=0,s=[],c=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},m=null,p=!1;try{var u=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}catch(A){}var f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,w=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var r in t)if(void 0!==e.style[t[r]+"Transform"])return t[r]+"Transform"}return"transform"}();n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},r&&Object.keys(r).forEach((function(e){n.options[e]=r[e]})),r&&r.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,r=!0;if(n.options.breakpoints.forEach((function(n){"number"!=typeof n&&(r=!1),null!==e&&n<e&&(t=!1),e=n})),t&&r)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax");var v="string"==typeof t?document.querySelectorAll(t):[t];if(v.length>0){if(n.elems=v,n.options.wrapper&&!n.options.wrapper.nodeType){var x=document.querySelector(n.options.wrapper);if(!x)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=x}var h,g=function e(){for(var t=0;t<s.length;t++)n.elems[t].style.cssText=s[t].style;var r,a;s=[],o=window.innerHeight,i=window.innerWidth,r=i,a=n.options.breakpoints,h=r<a[0]?"xs":r>=a[0]&&r<a[1]?"sm":r>=a[1]&&r<a[2]?"md":"lg",b(),function(){for(var e=0;e<n.elems.length;e++){var t=y(n.elems[e]);s.push(t)}}(),O(),c&&(window.addEventListener("resize",e),c=!1,z())},y=function(e){var t,r=e.getAttribute("data-rellax-percentage"),a=e.getAttribute("data-rellax-speed"),l=e.getAttribute("data-rellax-xs-speed"),s=e.getAttribute("data-rellax-mobile-speed"),c=e.getAttribute("data-rellax-tablet-speed"),d=e.getAttribute("data-rellax-desktop-speed"),m=e.getAttribute("data-rellax-vertical-speed"),p=e.getAttribute("data-rellax-horizontal-speed"),u=e.getAttribute("data-rellax-vertical-scroll-axis"),f=e.getAttribute("data-rellax-horizontal-scroll-axis"),w=e.getAttribute("data-rellax-zindex")||0,v=e.getAttribute("data-rellax-min"),x=e.getAttribute("data-rellax-max"),g=e.getAttribute("data-rellax-min-x"),y=e.getAttribute("data-rellax-max-x"),b=e.getAttribute("data-rellax-min-y"),k=e.getAttribute("data-rellax-max-y"),z=!0;l||s||c||d?t={xs:l,sm:s,md:c,lg:d}:z=!1;var O=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(O=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var A=n.options.vertical&&(r||n.options.center)?O:0,S=n.options.horizontal&&(r||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,j=A+e.getBoundingClientRect().top,L=e.clientHeight||e.offsetHeight||e.scrollHeight,N=S+e.getBoundingClientRect().left,T=e.clientWidth||e.offsetWidth||e.scrollWidth,C=r||(A-j+o)/(L+o),P=r||(S-N+i)/(T+i);n.options.center&&(P=.5,C=.5);var R=z&&null!==t[h]?Number(t[h]):a||n.options.speed,X=m||n.options.verticalSpeed,Y=p||n.options.horizontalSpeed,q=u||n.options.verticalScrollAxis,W=f||n.options.horizontalScrollAxis,I=E(P,C,R,X,Y),F=e.style.cssText,H="",M=/transform\s*:/i.exec(F);if(M){var B=M.index,J=F.slice(B),Q=J.indexOf(";");H=Q?" "+J.slice(11,Q).replace(/\s/g,""):" "+J.slice(11).replace(/\s/g,"")}return{baseX:I.x,baseY:I.y,top:j,left:N,height:L,width:T,speed:R,verticalSpeed:X,horizontalSpeed:Y,verticalScrollAxis:q,horizontalScrollAxis:W,style:F,transform:H,zindex:w,min:v,max:x,minX:g,maxX:y,minY:b,maxY:k}},b=function(){var e=a,t=l;if(a=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,l=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var r=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;a=r-n.options.wrapper.offsetTop}return!(e==a||!n.options.vertical)||!(t==l||!n.options.horizontal)},E=function(e,t,r,a,o){var l={},i=(o||r)*(100*(1-e)),s=(a||r)*(100*(1-t));return l.x=n.options.round?Math.round(i):Math.round(100*i)/100,l.y=n.options.round?Math.round(s):Math.round(100*s)/100,l},k=function e(){window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",e),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",e),m=d(z)},z=function e(){b()&&!1===c?(O(),m=d(e)):(m=null,window.addEventListener("resize",k),window.addEventListener("orientationchange",k),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",k,!!p&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",k,!!p&&{passive:!0}))},O=function(){for(var e,t=0;t<n.elems.length;t++){var r=s[t].verticalScrollAxis.toLowerCase(),c=s[t].horizontalScrollAxis.toLowerCase(),d=-1!=r.indexOf("x")?a:0,m=-1!=r.indexOf("y")?a:0,p=-1!=c.indexOf("x")?l:0,u=(m+(-1!=c.indexOf("y")?l:0)-s[t].top+o)/(s[t].height+o),f=(d+p-s[t].left+i)/(s[t].width+i),v=(e=E(f,u,s[t].speed,s[t].verticalSpeed,s[t].horizontalSpeed)).y-s[t].baseY,x=e.x-s[t].baseX;null!==s[t].min&&(n.options.vertical&&!n.options.horizontal&&(v=v<=s[t].min?s[t].min:v),n.options.horizontal&&!n.options.vertical&&(x=x<=s[t].min?s[t].min:x)),null!=s[t].minY&&(v=v<=s[t].minY?s[t].minY:v),null!=s[t].minX&&(x=x<=s[t].minX?s[t].minX:x),null!==s[t].max&&(n.options.vertical&&!n.options.horizontal&&(v=v>=s[t].max?s[t].max:v),n.options.horizontal&&!n.options.vertical&&(x=x>=s[t].max?s[t].max:x)),null!=s[t].maxY&&(v=v>=s[t].maxY?s[t].maxY:v),null!=s[t].maxX&&(x=x>=s[t].maxX?s[t].maxX:x);var h=s[t].zindex,g="translate3d("+(n.options.horizontal?x:"0")+"px,"+(n.options.vertical?v:"0")+"px,"+h+"px) "+s[t].transform;n.elems[t].style[w]=g}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=s[e].style;c||(window.removeEventListener("resize",g),c=!0),f(m),m=null},g(),n.refresh=g,n}console.warn("Rellax: The elements you're trying to select don't exist.")}})?n.apply(t,a):n)||(e.exports=o)}).call(this,r("yLpj"))},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("qw4X"),l=r("Bl7J"),i=r("vrFN"),s=r("Wbzz"),c=r("HbP6"),d=r.n(c);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,i=p(e,["color","size"]);return a.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),a.a.createElement("polyline",{points:"13 17 18 12 13 7"}),a.a.createElement("polyline",{points:"6 17 11 12 6 7"}))}));u.displayName="ChevronsRight";var f=u;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,i=v(e,["color","size"]);return a.a.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),a.a.createElement("circle",{cx:"12",cy:"12",r:"1"}),a.a.createElement("circle",{cx:"19",cy:"12",r:"1"}),a.a.createElement("circle",{cx:"5",cy:"12",r:"1"}))}));x.displayName="MoreHorizontal";var h=x,g={default:"hover:text-secondary",light:"text-gray-100 hover:text-gray-100",dark:"text-tertiary-dark hover:text-tertiary-dark"},y=function(e){var t=e.color,r=e.children,n=e.to;return a.a.createElement(s.Link,{className:g[t]+" text-right justify-end more-link md:absolute bottom-0 right-0 flex items-center uppercase tracking-wider text-sm",to:n},a.a.createElement("span",{className:"flex relative z-10 items-center -mt-4 leading-none transform translate-x-20 transition duration-500 ease-in-out"},r,a.a.createElement(f,{className:"-mt-1 opacity-0 transition duration-500 ease-in-out",size:30,strokeWidth:1.5})),a.a.createElement(h,{className:"opacity-50",color:"light"===t?"#4F0224":"#F9C577",size:100,strokeWidth:3}))},b=function(){var e=Object(s.useStaticQuery)("1379583213");return Object(n.useEffect)((function(){new d.a(".parallax-slow",{speed:-2,wrapper:!1}),new d.a(".parallax-fast",{speed:3,wrapper:!1})}),[]),a.a.createElement("div",{className:"relative"},a.a.createElement("h2",null,"Recent Projects"),a.a.createElement("div",{className:"sm:flex justify-around flex-wrap items-center sm:mb-32 lg:mb-0 xl:mb-8 xl:mt-8"},e.allMarkdownRemark.edges.map((function(e,t){var r=e.node;return a.a.createElement("div",{className:(t.toString()%2!=0?"parallax parallax-fast sm:mt-20 lg:mt-32":"parallax parallax-slow sm:-mt-20 lg:-mt-32")+"  z-20 transition ease-in-out rounded-sm overflow-hidden mb-8 sm:mb-0 shadow-2xl max-w-2xs text-center bg-white sm:inline-block sm:flex-shrink-0"},a.a.createElement("img",{className:"block",src:r.frontmatter.image.childImageSharp.resize.src,alt:r.frontmatter.client+" website"}),a.a.createElement("h3",{className:"p-3 shadow-inner"},r.frontmatter.client))}))),a.a.createElement(y,{to:"/projects/",color:"default"},"See all projects"))},E=r("9eSz"),k=r.n(E),z=function(){var e=Object(s.useStaticQuery)("2288068885");return a.a.createElement("div",{className:"relative"},a.a.createElement("h2",{className:"invisible absolute"},"Current Job"),a.a.createElement("div",{className:"flex items-center justify-around"},a.a.createElement(k.a,{className:"hidden md:inline-block rounded-full w-1/3 border-double border-8 border-secondary-darker bg-secondary-darker bg-opacity-50 shadow-lg",fluid:e.file.childImageSharp.fluid,alt:"Lauren Burrough's headshot"}),e.allMarkdownRemark.edges.map((function(e){var t=e.node;return a.a.createElement("div",null,t.frontmatter.roles.map((function(e,r){return 0===r&&null!==t.frontmatter.url?a.a.createElement("div",null,a.a.createElement("h3",{className:"text-white"},e.title),a.a.createElement("a",{className:"block text-secondary-darker",href:t.frontmatter.url},t.frontmatter.company),a.a.createElement("small",null,"1"===e.start?"a year":e.start+" years")):a.a.createElement("div",null,a.a.createElement("h3",{className:"text-white"},e.title),t.frontmatter.company,a.a.createElement("small",null,"1"===e.start?"a year":e.start+" years"))})))})),a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("strong",null,"Pronouns:")," She/Her"),a.a.createElement("p",null,a.a.createElement("strong",null,"Location:")," Chicago, IL"))),a.a.createElement(y,{to:"/experience/",color:"light"},"See my resume"))},O=r("AiQS"),A=r("wP54");t.default=function(){return a.a.createElement(l.a,null,a.a.createElement(i.a,{title:"Home"}),a.a.createElement(A.a,null,a.a.createElement(o.a,{text:"Hey, I'm Lauren."}),a.a.createElement(O.a,{text:"I build websites. Some people call me Labby."}),a.a.createElement(O.a,{text:"Fusing together a background in journalism and design with a vast knowledge of Drupal, accessibility and web development, I lead teams of engineers to build dynamic websites and create online relationships to help clients reach their users in new and impactful ways. "})),a.a.createElement(A.a,{backgroundColor:"gray",classes:"sm:py-20"},a.a.createElement(b,null)),a.a.createElement(A.a,{backgroundColor:"secondary",textColor:"light"},a.a.createElement(z,null)))}},qw4X:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI"),a=r.n(n);function o(e){return a.a.createElement("h1",null,e.text)}},wP54:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o={default:"bg-transparent",primary:"bg-primary-dark",secondary:"bg-secondary-dark",tertiary:"bg-tertiary-dark",gray:"bg-gray-100"},l={light:"text-white"};t.a=function(e){var t=e.children,r=e.backgroundColor,n=e.textColor,i=e.classes;return a.a.createElement("div",{className:"\n      "+(o[r]||o.default)+"\n      "+(n?l[n]:"")+"\n      "+(i||"")+"\n      py-6 sm:py-10 lg:py-8 xl:py-12 overflow-hidden w-screen -ml-50 relative left-1/2 shadow-inner\n    "},a.a.createElement("div",{className:"container mx-auto px-4"},t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-2336b54089a9c5c71a8b.js.map