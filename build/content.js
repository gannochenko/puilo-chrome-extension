(()=>{"use strict";const e={},t="Хуйло",n="Хуйла",i="Хуйлу",o="Хуйлом",s=new Map([[/владимира\s+путина/gim,n],[/Владимира\s+Путина/gim,n],[/владимиру\s+путину/gim,i],[/Владимиру\s+Путину/gim,i],[/владимиром\s+путиным/gim,o],[/Владимиром\s+Путиным/gim,o],[/владимир\s+путин/gim,t],[/Владимир\s+Путин/gim,t],[/путина/gim,n],[/Путина/gim,n],[/путину/gim,i],[/Путину/gim,i],[/путиным/gim,o],[/Путиным/gim,o],[/путин/gim,t],[/Путин/gim,t]]);console.log("Event listeners added"),chrome.runtime.onMessage.addListener((function(t,n,i){n.tab||t.name in e&&e[t.name](i)}));const m=Array.from(s.keys());function g(e){let t;const n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(;t=n.nextNode();){let e=t.textContent,n=!1;for(let i=0;i<m.length;i++){const o=m[i],g=s.get(o);e?.match(o)&&t&&(e=e.replace(o,g),n=!0)}n&&(t.textContent=e)}}window.addEventListener("load",(()=>{console.log("LOADED!");const e=document.getElementsByTagName("body")[0];g(e),new MutationObserver((()=>{g(e)})).observe(e,{childList:!0,subtree:!0})}))})();