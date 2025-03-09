import{a as n,i as d,S as m}from"./assets/vendor-CkcXhjHS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();n.defaults.baseURL="https://pixabay.com/api/";n.defaults.params={key:"35983466-b93c787dc13242734c56ed506",image_type:"photo",orientation:"horizontal",per_page:8,safesearch:!0};async function u(s,o){return n.defaults.params.q=s,n.defaults.params.page=o,(await n.get()).data}function p(s,o){const l=s.map(e=>`
        <li class="photo-card">
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="stats">
          <p class="stats-item">
            <i class="material-icons">likes</i>
            ${e.likes}    
            </p>
          <p class="stats-item">
            <i class="material-icons">views</i>
            ${e.views}    
            </p>
                      <p class="stats-item">
            <i class="material-icons">comments</i>
            ${e.comments}    
            </p>
                      <p class="stats-item">
            <i class="material-icons">downloads</i>
            ${e.downloads}    
            </p>
        </div>
        </li>
        `);o.insertAdjacentHTML("beforeend",l.join(""))}function f(s){s.innerHTML=""}const a={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".btn-primary"),onLoadMore:document.querySelector(".btn-load-more"),loaderEl:document.querySelector(".loader-span")};let i=1;a.onLoadMore.classList.add("is-hidden");a.searchForm.addEventListener("submit",y);a.onLoadMore.addEventListener("click",g);function y(s){s.preventDefault();const l=s.currentTarget.elements.query;if(l.value===""){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}a.searchBtn.disabled=!0,a.loaderEl.classList.add("loader"),f(a.gallery),a.onLoadMore.classList.remove("is-hidden"),u(l.value,i).then(e=>{console.log(e),p(e.hits,a.gallery),i+=1,a.loaderEl.classList.remove("loader"),new m(".gallery a",{captionsData:"alt",captionDelay:500})}).catch(e=>{d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{a.searchBtn.disabled=!1})}function g(){const o=a.searchForm.elements.query;a.loaderEl.classList.add("loader"),u(o.value,i).then(l=>{console.log(l),p(l.hits,a.gallery),i+=1,a.loaderEl.classList.remove("loader"),new m(".gallery a",{captionsData:"alt",captionDelay:500});var e=$(".gallery a").simpleLightbox();e.refresh()})}
//# sourceMappingURL=index.js.map
