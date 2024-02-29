import{a as y,S as L,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const l="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function m(r){return r.map(e=>`<li>
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
                </li>`).join("")}async function h(r,e){const s="https://pixabay.com/api/";return(await y.get(s,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const g=new L(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".form"),f=document.querySelector(".loader"),c=document.querySelector(".gallery"),u=document.querySelector(".load");document.querySelector(".down");let p=1,b;d.addEventListener("submit",r=>{r.preventDefault(),c.innerHTML="";const e=r.currentTarget.image_name.value;e.length===0||e.trim()===""?n.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3}):(f.classList.remove("is-hidden"),h(e,p).then(s=>{s.hits.length===0&&(u.classList.add("is-hidden"),n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})),c.innerHTML=m(s.hits),s.hits.length>=15&&u.classList.remove("is-hidden"),g.refresh()}).catch(s=>{n.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}).finally(()=>{f.classList.add("is-hidden"),d.reset()}))});u.addEventListener("click",()=>{p+=1,h(b,p).then(r=>{c.insertAdjacentHTML("beforeend",m(r.hits)),g.refresh()})});
//# sourceMappingURL=commonHelpers.js.map
