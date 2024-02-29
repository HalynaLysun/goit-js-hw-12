import{a as L,S as b,i as a}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const l="/goit-js-hw-12/assets/bi_x-octagon-9b778eac.svg";function h(s){return s.map(e=>`<li>
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
                </li>`).join("")}async function g(s,e){const r="https://pixabay.com/api/";return(await L.get(r,{params:{key:"42515030-f0931f035bd772c998b8c15c1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const y=new b(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".form"),f=document.querySelector(".loader"),u=document.querySelector(".gallery"),i=document.querySelector(".load"),d=document.querySelector(".down");let p=1,v;m.addEventListener("submit",s=>{s.preventDefault(),u.innerHTML="";const e=s.currentTarget.image_name.value;e.length===0||e.trim()===""?a.error({title:"",message:"Could you, please choose some type of photos",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3}):(f.classList.remove("is-hidden"),g(e,p).then(r=>{r.hits.length===0&&(i.classList.add("is-hidden"),a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})),u.innerHTML=h(r.hits),y.refresh(),r.hits.length>=15&&i.classList.remove("is-hidden")}).catch(r=>{a.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})}).finally(()=>{f.classList.add("is-hidden"),m.reset()}))});i.addEventListener("click",()=>{i.classList.add("is-hidden"),d.classList.remove("is-hidden"),p+=1,g(v,p).then(s=>{u.insertAdjacentHTML("beforeend",h(s.hits)),y.refresh(),i.classList.remove("is-hidden"),d.scrollIntoView(),d.classList.add("is-hidden")}).catch(s=>{a.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:l,position:"topRight",pauseOnHover:!0,timeout:3e3})})});
//# sourceMappingURL=commonHelpers.js.map
