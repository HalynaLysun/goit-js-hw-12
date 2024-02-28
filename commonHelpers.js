import{S as f,a as m,i as l}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function h(i,o){o.innerHTML=i.map(t=>`<li>
                <a href="${t.largeImageURL}"><img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"></a>
                <ul class="gallery-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${t.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${t.views}</p>
                    </li>                    
                    <li>
                        <h2>Comments</h2>
                        <p>${t.comments}</p>
                    </li>                    
                    <li>
                        <h2>Downloads</h2>
                        <p>${t.downloads}</p>
                    </li>
                </ul>
                </li>`).join(""),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}async function d(i){const o="https://pixabay.com/api/";try{const s=await m.get(o,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}});if(s.status!==200)throw new Error("Error!");return s.data}catch{throw new Error("Error!")}}const c=document.querySelector(".form"),u=document.querySelector(".loader"),p=document.querySelector(".gallery");c.addEventListener("submit",i=>{i.preventDefault(),p.innerHTML="";const o=i.currentTarget.image_name.value;o.length===0||o.trim()===""?l.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3}):(u.classList.remove("is-hidden"),d(o).then(s=>{s.hits.length===0&&l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3});const t=s.hits.slice(0,15);h(t,p)}).catch(s=>{l.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3})}).finally(()=>{u.classList.add("is-hidden"),c.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
