!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequire8e87;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire8e87=a);var o=a("kAkBg"),c=a("jO2Au");function i(){return(i=o.asyncToGenerator(e(c).mark((function t(){var r,n,a,i,u,d,l,h,b,m,v,y,A,q,k,j,T,L,M,C,O,H,z,N,E;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.querySelector("#mycontainer").insertAdjacentHTML("beforeend",s),n=new URLSearchParams(document.location.search),a=n.get("edition"),i=n.get("bareedition")||a.replace(/\d+/g,"").split("-")[1].trim(),u=n.get("type")||"section",d=n.get("num"),l=n.get("grade"),i&&(d||"full"==u)){e.next=10;break}return e.abrupt("return");case 10:return x("#mycontainer","beforeend"),"full"==u?h="editions/".concat(a):"section"==u?h="editions/".concat(a,"/sections/").concat(d):"single"==u&&(h="editions/".concat(a,"/").concat(d)),e.next=15,p("isocodes/iso-codes",f);case 15:return b=e.sent,e.t0=o,e.next=19,p(["editions",h]);case 19:for(e.t1=e.sent,m=e.t0.slicedToArray.call(e.t0,e.t1,2),v=m[0],y=m[1],A=o.slicedToArray(v[i].collection.filter((function(e){return e.name==a})).map((function(e){return[e.name,e.language,e.direction]}))[0],3),A[0],q=A[1],k=A[2],j=y.hadiths,l&&(l=l.trim().toLowerCase(),j=j.filter((function(e){return e.grades.some((function(e){return e.grade.toLowerCase().includes(l)}))}))),"section"==u&&w(null==y||null===(r=y.metadata)||void 0===r?void 0:r.section)&&(T=o.slicedToArray(Object.entries(y.metadata.section).flat(),2),L=T[0],M=T[1],document.querySelector("#mycontainer").insertAdjacentHTML("beforeend",'<h2 class="text-center">Section '.concat(L,": ").concat(M,"</h2>"))),j=j.filter((function(e){return null==e?void 0:e.text})),C=!0,O=!1,H=void 0,e.prev=29,z=j[Symbol.iterator]();!(C=(N=z.next()).done);C=!0)E=N.value,document.querySelector("#mycontainer").appendChild(g(E,a,k,q,b));e.next=37;break;case 33:e.prev=33,e.t2=e.catch(29),O=!0,H=e.t2;case 37:e.prev=37,e.prev=38,C||null==z.return||z.return();case 40:if(e.prev=40,!O){e.next=43;break}throw H;case 43:return e.finish(40);case 44:return e.finish(37);case 45:S();case 46:case"end":return e.stop()}}),t,null,[[29,33,37,45],[38,,40,44]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return i.apply(this,arguments)}));var s='\n<div class="mb-3 d-none">\n<form class="d-flex" onsubmit="beginSearch(); return false">\n  <input id="searchquery" class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />\n  <button id="searchbtn" class="btn btn-outline-info" type="button" onclick="beginSearch(); return false">\n    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"\n      xmlns="http://www.w3.org/2000/svg">\n      <path fill-rule="evenodd"\n        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />\n      <path fill-rule="evenodd"\n        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />\n    </svg>\n  </button>\n</form>\n</div>\n';function u(e){return e.toString().toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})).trim()}var d=new DOMParser;var l=["https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/","https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/"],f=["https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/","https://raw.githubusercontent.com/fawazahmed0/quran-api/1/"],h=[".min.json",".json"];function p(e,t){return b.apply(this,arguments)}function b(){return(b=o.asyncToGenerator(e(c).mark((function t(r,n){var a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,Array.isArray(r)||(r=[r],a=!0),e.next=4,Promise.all(r.map((function(e){return m(y(e,n)).then((function(e){return e.json()}))}))).catch(console.error);case 4:if(o=e.sent,!a){e.next=7;break}return e.abrupt("return",o[0]);case 7:return e.abrupt("return",o);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(e,t){return v.apply(this,arguments)}function v(){return(v=o.asyncToGenerator(e(c).mark((function t(r,n){var a,o,i,s,u,d,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=!0,i=!1,s=void 0,e.prev=2,u=r[Symbol.iterator]();case 4:if(o=(d=u.next()).done){e.next=19;break}return l=d.value,e.prev=6,e.next=9,fetch(l,n);case 9:if(!(a=e.sent).ok){e.next=12;break}return e.abrupt("return",a);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:o=!0,e.next=4;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),i=!0,s=e.t1;case 25:e.prev=25,e.prev=26,o||null==u.return||u.return();case 28:if(e.prev=28,!i){e.next=31;break}throw s;case 31:return e.finish(28);case 32:return e.finish(25);case 33:return e.abrupt("return",a);case 34:case"end":return e.stop()}}),t,null,[[2,21,25,33],[6,14],[26,,28,32]])})))).apply(this,arguments)}function y(e,t){return t=t||l,h.map((function(r){return t.map((function(t){return t+e+r}))})).flat()}function g(e,t,r,n,a){var c,i=n.toLowerCase(),s=(c='    \n<div class="card text-dark bg-light m-3">\n<div class="card-body">\n<div class="card-text lead m-1"></div>\n</div>\n\n<span id="footercontainer">\n</span>\n\n</div>\n',d.parseFromString(c,"text/html")).querySelector(".card");s.querySelector(".card-text").innerText=e.text;var l=function(e,t){t||(t={});var r=document.createElement(e),n=!0,a=!1,c=void 0;try{for(var i,s=Object.entries(t)[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var u=o.slicedToArray(i.value,2),d=u[0],l=u[1];r.setAttribute(d,l)}}catch(e){a=!0,c=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw c}}return r}("div",{class:"card-footer"});e.grades.length>0&&(s.querySelector("#footercontainer").appendChild(l.cloneNode()),Array.from(s.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",'<table class="table table-sm">\n    <thead>\n      <tr>\n        <th>Grade</th>\n      \n      </tr>\n    </thead>\n    <tbody>\n    </tbody>\n    </table>'));var f=!0,h=!1,p=void 0;try{for(var b,m=e.grades[Symbol.iterator]();!(f=(b=m.next()).done);f=!0){var v=b.value;s.querySelector("tbody").insertAdjacentHTML("beforeend","<tr><td>".concat(u(v.grade),"</td><td>").concat(v.name,"</td></tr>"))}}catch(e){h=!0,p=e}finally{try{f||null==m.return||m.return()}finally{if(h)throw p}}var y="hadith:".concat(t,":").concat(e.hadithnumber);return e.hadithnumber&&(s.querySelector("#footercontainer").appendChild(l.cloneNode()),Array.from(s.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend","<a href=#".concat(y,' class="link-dark text-decoration-none" >Hadith Number: ').concat(e.hadithnumber,"</a><br>"))),e.arabicnumber&&(s.querySelector("#footercontainer").appendChild(l.cloneNode()),Array.from(s.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend","<a href=#".concat(y,' class="link-dark text-decoration-none" >Arabic Number: ').concat(e.arabicnumber,"</a><br>"))),e.reference&&(s.querySelector("#footercontainer").appendChild(l.cloneNode()),Array.from(s.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend","<a href=#".concat(y,' class="link-dark text-decoration-none" >Reference: ').concat(Object.entries(e.reference).flat().map((function(e){return u(e)})).join(" "),"</a><br>"))),s.setAttribute("id",y),s.querySelector(".card-text").setAttribute("dir",r),s.querySelector(".card-text").setAttribute("lang",a[i].iso1?a[i].iso1:a[i].iso2),s}function w(e){return e===Object(e)}function x(e,t){document.body.contains(document.querySelector("#spinningwheel"))||document.querySelector(e).insertAdjacentHTML(t,'<div  id="spinningwheel">\n    <div class="text-center">\n      <div class="spinner-border m-5" role="status">\n      </div>\n      </div>\n      </div>\n      ')}function S(){document.body.contains(document.querySelector("#spinningwheel"))&&document.querySelector("#spinningwheel").remove()}window.beginSearch=function(){var e=new URLSearchParams,t=document.getElementById("searchquery").value;e.set("q","site:fawazahmed0.github.io/hadiths ".concat(t)),window.open("https://www.google.com/search?"+e.toString(),"_blank")}}();
//# sourceMappingURL=data.49d30cab.js.map
