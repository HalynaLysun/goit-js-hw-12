import{a as b,S as v,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const l="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function g(s){return s.map(e=>`<li>
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
                </li>`).join("")}async function y(s,e){const r="https://pixabay.com/api/";return(await b.get(r,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const L=new v(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".form"),f=document.querySelector(".loader"),h=document.querySelector(".gallery"),i=document.querySelector(".load"),c=document.querySelector(".down");let d=1,a;m.addEventListener("submit",s=>{if(s.preventDefault(),d=1,h.innerHTML="",a=s.currentTarget.image_name.value,a.length===0||a.trim()==="")n.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3});else{f.classList.remove("is-hidden");async function e(){try{const r=await y(a,d);return r.hits.length===0&&(i.classList.add("is-hidden"),n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})),r}catch{n.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}finally{f.classList.add("is-hidden"),m.reset()}}e().then(r=>{h.innerHTML=g(r.hits),L.refresh(),r.hits.length>=15&&i.classList.remove("is-hidden")})}});i.addEventListener("click",w);async function w(){i.classList.add("is-hidden"),c.classList.remove("is-hidden"),d+=1;try{const s=await y(a,d);h.insertAdjacentHTML("beforeend",g(s.hits)),L.refresh(),i.classList.remove("is-hidden"),c.scrollIntoView(),c.classList.add("is-hidden"),console.log(s.hits.length),s.hits.length<15&&(i.classlist.add("is-hidden"),c.classList.add("is-hidden"),n.error({title:"",message:"This is all images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3}))}catch{n.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}}
//# sourceMappingURL=commonHelpers.js.map
