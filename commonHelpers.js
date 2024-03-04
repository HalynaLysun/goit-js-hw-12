import{a as b,S as v,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const l="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function g(o){return o.map(e=>`<li>
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
                </li>`).join("")}async function y(o,e){const t="https://pixabay.com/api/";return(await b.get(t,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const L=new v(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".form"),h=document.querySelector(".loader"),m=document.querySelector(".gallery"),i=document.querySelector(".load"),c=document.querySelector(".down");let d=1,a;f.addEventListener("submit",o=>{if(o.preventDefault(),d=1,m.innerHTML="",a=o.currentTarget.image_name.value,a.length===0||a.trim()==="")i.classList.add("is-hidden"),n.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3});else{h.classList.remove("is-hidden");async function e(){try{const t=await y(a,d);return t.hits.length===0&&(i.classList.add("is-hidden"),n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})),console.log(t),t}catch(t){i.classList.add("is-hidden"),n.error({title:"",message:`${t.message}`,class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}finally{h.classList.add("is-hidden"),f.reset()}}e().then(t=>{console.log(t),m.innerHTML=g(t.hits),L.refresh(),t.hits.length>=15&&i.classList.remove("is-hidden")})}});i.addEventListener("click",w);async function w(){try{i.classList.add("is-hidden"),c.classList.remove("is-hidden"),d+=1;const o=await y(a,d);m.insertAdjacentHTML("beforeend",g(o.hits)),L.refresh(),i.classList.remove("is-hidden"),c.scrollIntoView(),c.classList.add("is-hidden"),o.hits.length<15&&(i.classList.add("is-hidden"),c.classList.add("is-hidden"),n.error({title:"",message:"Sorry! This is all images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3}))}catch(o){i.classList.add("is-hidden"),n.error({title:"",message:`${o.message}`,class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}}
//# sourceMappingURL=commonHelpers.js.map
