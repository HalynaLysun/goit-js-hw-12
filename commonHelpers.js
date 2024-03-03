import{a as b,S as v,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const l="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function g(t){return t.map(e=>`<li>
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
                </li>`).join("")}async function y(t,e){const o="https://pixabay.com/api/";return(await b.get(o,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const L=new v(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".form"),h=document.querySelector(".loader"),m=document.querySelector(".gallery"),a=document.querySelector(".load"),d=document.querySelector(".down");let c=1,i;f.addEventListener("submit",t=>{if(t.preventDefault(),c=1,m.innerHTML="",i=t.currentTarget.image_name.value,i.length===0||i.trim()==="")a.classList.add("is-hidden"),n.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3});else{h.classList.remove("is-hidden");async function e(){try{const o=await y(i,c);return o.hits.length===0&&(a.classList.add("is-hidden"),n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})),o}catch(o){n.error({title:"",message:`${o.message}`,class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}finally{h.classList.add("is-hidden"),f.reset()}}e().then(o=>{m.innerHTML=g(o.hits),L.refresh(),o.hits.length>=15&&a.classList.remove("is-hidden")})}});a.addEventListener("click",w);async function w(){try{a.classList.add("is-hidden"),d.classList.remove("is-hidden"),c+=1;const t=await y(i,c);m.insertAdjacentHTML("beforeend",g(t.hits)),L.refresh(),a.classList.remove("is-hidden"),d.scrollIntoView(),d.classList.add("is-hidden"),c*15<t.totalHits&&(a.classList.add("is-hidden"),d.classList.add("is-hidden"),n.error({title:"",message:"Sorry! This is all images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3}))}catch(t){n.error({title:"",message:`${t.message}`,class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}}
//# sourceMappingURL=commonHelpers.js.map
