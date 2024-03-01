import{a as b,S as v,i as l}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const n="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function g(o){return o.map(e=>`<li>
                <a href="${e.largeImageURL}"><img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"></a>
                <ul class="gallery-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${e.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${e.views}</p>
                    </li>                    
                    <li>
                        <h2>Comments</h2>
                        <p>${e.comments}</p>
                    </li>                    
                    <li>
                        <h2>Downloads</h2>
                        <p>${e.downloads}</p>
                    </li>
                </ul>
                </li>`).join("")}async function y(o,e){const r="https://pixabay.com/api/";return(await b.get(r,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const L=new v(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".form"),h=document.querySelector(".loader"),m=document.querySelector(".gallery"),a=document.querySelector(".load"),c=document.querySelector(".down");let d=1,i;f.addEventListener("submit",o=>{if(o.preventDefault(),m.innerHTML="",i=o.currentTarget.image_name.value,i.length===0||i.trim()==="")l.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3});else{h.classList.remove("is-hidden");async function e(){const r=await y(i,d);try{r.hits.length===0&&(a.classList.add("is-hidden"),l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3})),m.innerHTML=g(r.hits),L.refresh(),r.hits.length>=15&&a.classList.remove("is-hidden")}catch{l.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3})}finally{h.classList.add("is-hidden"),f.reset()}}e()}});a.addEventListener("click",()=>{a.classList.add("is-hidden"),c.classList.remove("is-hidden"),d+=1;async function o(){const e=await y(i,d);try{e.hits.length*d>e.totalHits&&(a.classlist.add("is-hidden"),c.classList.add("is-hidden"),l.error({title:"",message:"This is all images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3})),m.insertAdjacentHTML("beforeend",g(e.hits)),L.refresh(),a.classList.remove("is-hidden"),c.scrollIntoView(),c.classList.add("is-hidden")}catch{l.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3})}}o()});
//# sourceMappingURL=commonHelpers.js.map
