import{a as b,S as v,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const l="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function g(r){return r.map(e=>`<li>
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
                </li>`).join("")}async function y(r,e){const o="https://pixabay.com/api/";return(await b.get(o,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const L=new v(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".form"),h=document.querySelector(".loader"),m=document.querySelector(".gallery"),i=document.querySelector(".load"),c=document.querySelector(".down");let d=1,a;f.addEventListener("submit",r=>{if(r.preventDefault(),m.innerHTML="",a=r.currentTarget.image_name.value,a.length===0||a.trim()==="")n.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3});else{h.classList.remove("is-hidden");async function e(){try{const o=await y(a,d);return o.hits.length===0&&(i.classList.add("is-hidden"),n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})),o}catch{n.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}finally{h.classList.add("is-hidden"),f.reset()}}e().then(o=>{m.innerHTML=g(o.hits),L.refresh(),o.hits.length>=15&&i.classList.remove("is-hidden")})}});i.addEventListener("click",()=>{i.classList.add("is-hidden"),c.classList.remove("is-hidden"),d+=1;async function r(){try{const e=await y(a,d);return e.hits.length*d>e.totalHits&&(i.classlist.add("is-hidden"),c.classList.add("is-hidden"),n.error({title:"",message:"This is all images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})),e}catch{n.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}}r().then(e=>{m.insertAdjacentHTML("beforeend",g(e.hits)),L.refresh(),i.classList.remove("is-hidden"),c.scrollIntoView(),c.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
