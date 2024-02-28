import{S as p,i as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function m(i,t){t.innerHTML=i.map(o=>`<li>
                <a href="${o.largeImageURL}"><img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}"></a>
                <ul class="gallery-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${o.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${o.views}</p>
                    </li>                    
                    <li>
                        <h2>Comments</h2>
                        <p>${o.comments}</p>
                    </li>                    
                    <li>
                        <h2>Downloads</h2>
                        <p>${o.downloads}</p>
                    </li>
                </ul>
                </li>`).join(""),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function h(i){const t="https://pixabay.com/api/",s=new URLSearchParams({key:"42515030-f0931f035bd772c998b8c15c1",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${t}?${s}`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Error!");return e.json()})}const c=document.querySelector(".form"),u=document.querySelector(".loader"),f=document.querySelector(".gallery");c.addEventListener("submit",i=>{i.preventDefault(),f.innerHTML="";const t=i.currentTarget.image_name.value;t.length===0||t.trim()===""?l.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3}):(u.classList.remove("is-hidden"),h(t).then(s=>{s.hits.length===0&&l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3});const o=s.hits.slice(0,15);m(o,f)}).catch(s=>{l.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3})}).finally(()=>{u.classList.add("is-hidden"),c.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
