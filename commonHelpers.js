import{S as f,i as l}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function m(i,r){r.innerHTML=i.map(o=>`<li>
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
                </li>`).join(""),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}async function h(i,r){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"42515030-f0931f035bd772c998b8c15c1",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}?${o}`,t=await fetch(e);try{t.ok}catch{throw new Error("Error!")}return await t.json()}const c=document.querySelector(".form"),u=document.querySelector(".loader"),p=document.querySelector(".gallery");c.addEventListener("submit",i=>{i.preventDefault(),p.innerHTML="";const r=i.currentTarget.image_name.value;r.length===0||r.trim()===""?l.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3}):(u.classList.remove("is-hidden"),h(r).then(s=>{s.hits.length===0&&l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3});const o=s.hits.slice(0,15);m(o,p)}).catch(s=>{l.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:n,position:"topRight",pauseOnHover:!0,timeout:3e3})}).finally(()=>{u.classList.add("is-hidden"),c.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
