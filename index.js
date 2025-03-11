import{a as i,i as c,S as m}from"./assets/vendor-CkcXhjHS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();i.defaults.baseURL="https://pixabay.com/api/";i.defaults.params={key:"35983466-b93c787dc13242734c56ed506",image_type:"photo",orientation:"horizontal",per_page:8,safesearch:!0};async function f(t,r){return i.defaults.params.q=t,i.defaults.params.page=r,(await i.get()).data}function p(t,r){const o=t.map(n=>`
        <li class="photo-card">
        <a href="${n.largeImageURL}">
        <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
        </a>
        <div class="stats">
          <p class="stats-item">
            <i class="material-icons">likes</i>
            ${n.likes}    
            </p>
          <p class="stats-item">
            <i class="material-icons">views</i>
            ${n.views}    
            </p>
                      <p class="stats-item">
            <i class="material-icons">comments</i>
            ${n.comments}    
            </p>
                      <p class="stats-item">
            <i class="material-icons">downloads</i>
            ${n.downloads}    
            </p>
        </div>
        </li>
        `);r.insertAdjacentHTML("beforeend",o.join(""))}function y(t){t.innerHTML=""}const a={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".btn-primary"),onLoadMore:document.querySelector(".btn-load-more"),loaderEl:document.querySelector(".loader-span")};let d=1;a.onLoadMore.classList.add("is-hidden");a.searchForm.addEventListener("submit",g);a.onLoadMore.addEventListener("click",h);function g(t){t.preventDefault();const o=a.searchForm.elements.query;if(o.value===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}a.searchBtn.disabled=!0,a.loaderEl.classList.add("loader"),y(a.gallery),a.onLoadMore.classList.remove("is-hidden"),u(o.value,d)}function h(){const r=a.searchForm.elements.query;a.loaderEl.classList.add("loader"),u(r.value,d)}async function u(t,r){try{const o=await f(t,r);p(o.hits,a.gallery),r+=1,a.loaderEl.classList.remove("loader"),new m(".gallery a",{captionsData:"alt",captionDelay:500})}catch{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{a.searchBtn.disabled=!1}}
//# sourceMappingURL=index.js.map
