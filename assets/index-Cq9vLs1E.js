(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d=document.querySelectorAll('input[type="checkbox"]'),l=document.getElementById("clickOrder");let n=[];function u(){const t=n.join(","),c=`${window.location.origin}${window.location.pathname}?checked=${t}`;window.history.pushState({},"",c)}function a(){l.innerHTML="";for(let t=0;t<n.length;t++){const c=n[t],r=document.createElement("li");r.textContent=c,l.appendChild(r)}}function f(t){const c=t.target.id;t.target.checked&&!n.includes(c)?n.push(c):n=n.filter(r=>r!==c),u(),a()}function h(){const c=new URLSearchParams(window.location.search).get("checked");if(c){n=c.split(",");for(let r=0;r<d.length;r++){const i=d[r];n.includes(i.id)&&(i.checked=!0)}a()}}document.getElementById("copyLink").addEventListener("click",()=>{const t=window.location.href;navigator.clipboard.writeText(t).then(()=>{alert("Данные скопированы!")})});d.forEach(t=>{t.addEventListener("click",f)});h();
