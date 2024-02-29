import{S as f,a as h,i as n}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const c="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function g(i,o){o.innerHTML=i.map(t=>`<li>
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
                </li>`).join(""),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}async function u(i,o){const r="https://pixabay.com/api/";return(await h.get(r,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const d=document.querySelector(".form"),p=document.querySelector(".loader"),m=document.querySelector(".gallery"),a=document.querySelector(".load");d.addEventListener("submit",i=>{i.preventDefault(),a.classList.add("is-hidden"),m.innerHTML="";const o=i.currentTarget.image_name.value;let r;o.length===0||o.trim()===""?n.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:c,position:"topRight",pauseOnHover:!0,timeout:3e3}):(p.classList.remove("is-hidden"),u(o,1).then(t=>{t.hits.length===0&&(a.classList.add("is-hidden"),n.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:c,position:"topRight",pauseOnHover:!0,timeout:3e3}));const e=t.hits;g(e,m),r=1,a.classList.remove("is-hidden"),a.addEventListener("click",s=>{r+=1,u(o,r)})}).catch(t=>{n.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:c,position:"topRight",pauseOnHover:!0,timeout:3e3})}).finally(()=>{p.classList.add("is-hidden"),d.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
