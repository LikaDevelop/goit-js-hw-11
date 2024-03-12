import{a as d,S as m,i as l}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function u(n){return await(await d.get("https://pixabay.com/api",{params:{key:"42798522-d824d0eb072596e07151c9725",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}function p(n,s){let o=[];s.forEach(function(r){const e=document.createElement("li");e.classList.add("gallery-item");const t=document.createElement("a");t.classList.add("gallery-link"),t.setAttribute("href",r.largeImageURL);const a=document.createElement("img");a.classList.add("gallery-image"),a.src=r.webformatURL,a.alt=r.tags,t.append(a),e.append(t);const c=`<div class="description">
                                <div class="likes">
                                    <h4>Likes</h4>
                                    <p>${r.likes}</p>
                                </div>
                                <div class="views">
                                    <h4>Views</h4>
                                    <p>${r.views}</p>
                                </div>
                                <div class="comments">
                                    <h4>Comments</h4>
                                    <p>${r.comments}</p>
                                </div>
                                <div class="dowloads">
                                    <h4>Downloads</h4>
                                    <p>${r.downloads}</p>
                                </div>
                            </div >`;e.innerHTML+=c,o.push(e)}),n.append(...o),new m("ul.gallery a",{captionsData:"alt",captionDelay:250})}const i=document.querySelector(".search-form"),g=document.querySelector(".search-input");i.addEventListener("submit",async n=>{n.preventDefault();const s=document.querySelector(".gallery");s.innerHTML="";const o=document.createElement("span");o.classList.add("loader"),o.textContent="Loading images, please wait...",i.append(o);const r=i.elements.search.value.trim();if(r=="")document.querySelector(".loader").remove(),l.error({title:"Error",message:"Search field can't be empty"});else{const e=await u(r);document.querySelector(".loader").remove(),console.log(e),e.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):p(s,e),g.value=""}});
//# sourceMappingURL=commonHelpers.js.map
