var ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dt(P){return P&&P.__esModule&&Object.prototype.hasOwnProperty.call(P,"default")?P.default:P}var X={exports:{}};/*! dom-to-image-more 03-10-2023 */(function(P,F){(function(D){const s=function(){let l=0;return{escape:function(t){return t.replace(/([.*+?^${}()|[]\/\\])/g,"\\$1")},isDataUrl:function(t){return t.search(/^(data:)/)!==-1},canvasToBlob:function(t){return t.toBlob?new Promise(function(n){t.toBlob(n)}):function(n){return new Promise(function(o){var u=Q(n.toDataURL().split(",")[1]),a=u.length,v=new Uint8Array(a);for(let d=0;d<a;d++)v[d]=u.charCodeAt(d);o(new Blob([v],{type:"image/png"}))})}(t)},resolveUrl:function(t,n){var o=document.implementation.createHTMLDocument(),u=o.createElement("base"),a=(o.head.appendChild(u),o.createElement("a"));return o.body.appendChild(a),u.href=n,a.href=t,a.href},getAndEncode:function(t){let n=m.impl.urlCache.find(function(o){return o.url===t});return n||(n={url:t,promise:null},m.impl.urlCache.push(n)),n.promise===null&&(m.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime()),n.promise=new Promise(function(o){const u=m.impl.options.httpTimeout,a=new XMLHttpRequest;if(a.onreadystatechange=function(){if(a.readyState===4)if(300<=a.status)d?o(d):w(`cannot fetch resource: ${t}, status: `+a.status);else{const p=new FileReader;p.onloadend=function(){o(p.result)},p.readAsDataURL(a.response)}},a.ontimeout=function(){d?o(d):w(`timeout of ${u}ms occured while fetching resource: `+t)},a.responseType="blob",a.timeout=u,m.impl.options.useCredentials&&(a.withCredentials=!0),m.impl.options.corsImg&&t.indexOf("http")===0&&t.indexOf(window.location.origin)===-1){var v=(m.impl.options.corsImg.method||"GET").toUpperCase()==="POST"?"POST":"GET";a.open(v,(m.impl.options.corsImg.url||"").replace("#{cors}",t),!0);let p=!1;const r=m.impl.options.corsImg.headers||{},g=(Object.keys(r).forEach(function(S){r[S].indexOf("application/json")!==-1&&(p=!0),a.setRequestHeader(S,r[S])}),function(S){try{return JSON.parse(JSON.stringify(S))}catch{w("corsImg.data is missing or invalid")}}(m.impl.options.corsImg.data||""));Object.keys(g).forEach(function(S){typeof g[S]=="string"&&(g[S]=g[S].replace("#{cors}",t))}),a.send(p?JSON.stringify(g):g)}else a.open("GET",t,!0),a.send();let d;function w(p){console.error(p),o("")}m.impl.options.imagePlaceholder&&(v=m.impl.options.imagePlaceholder.split(/,/))&&v[1]&&(d=v[1])})),n.promise},uid:function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+l++},delay:function(t){return function(n){return new Promise(function(o){setTimeout(function(){o(n)},t)})}},asArray:function(t){var n=[],o=t.length;for(let u=0;u<o;u++)n.push(t[u]);return n},escapeXhtml:function(t){return t.replace(/%/g,"%25").replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return t!=="data:,"?new Promise(function(n,o){const u=new Image;m.impl.options.useCredentials&&(u.crossOrigin="use-credentials"),u.onload=function(){window&&window.requestAnimationFrame?window.requestAnimationFrame(function(){n(u)}):n(u)},u.onerror=o,u.src=t}):Promise.resolve()},width:function(t){var n=f(t,"width");if(!isNaN(n))return n;var n=f(t,"border-left-width"),o=f(t,"border-right-width");return t.scrollWidth+n+o},height:function(t){var n=f(t,"height");if(!isNaN(n))return n;var n=f(t,"border-top-width"),o=f(t,"border-bottom-width");return t.scrollHeight+n+o},getWindow:e,isElement:c,isElementHostForOpenShadowRoot:function(t){return c(t)&&t.shadowRoot!==null},isShadowRoot:i,isInShadowRoot:h,isHTMLElement:function(t){return t instanceof e(t).HTMLElement},isHTMLCanvasElement:function(t){return t instanceof e(t).HTMLCanvasElement},isHTMLInputElement:function(t){return t instanceof e(t).HTMLInputElement},isHTMLImageElement:function(t){return t instanceof e(t).HTMLImageElement},isHTMLLinkElement:function(t){return t instanceof e(t).HTMLLinkElement},isHTMLScriptElement:function(t){return t instanceof e(t).HTMLScriptElement},isHTMLStyleElement:function(t){return t instanceof e(t).HTMLStyleElement},isHTMLTextAreaElement:function(t){return t instanceof e(t).HTMLTextAreaElement},isShadowSlotElement:function(t){return h(t)&&t instanceof e(t).HTMLSlotElement},isSVGElement:function(t){return t instanceof e(t).SVGElement},isSVGRectElement:function(t){return t instanceof e(t).SVGRectElement},isDimensionMissing:function(t){return isNaN(t)||t<=0}};function e(t){return t=t?t.ownerDocument:void 0,(t?t.defaultView:void 0)||D||window}function i(t){return t instanceof e(t).ShadowRoot}function h(t){return t!==null&&Object.prototype.hasOwnProperty.call(t,"getRootNode")&&i(t.getRootNode())}function c(t){return t instanceof e(t).Element}function f(t,n){if(t.nodeType===U){let o=V(t).getPropertyValue(n);if(o.slice(-2)==="px")return o=o.slice(0,-2),parseFloat(o)}return NaN}}(),I=function(){const l=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(c,f,t){return e(c)?Promise.resolve(c).then(i).then(function(n){let o=Promise.resolve(c);return n.forEach(function(u){o=o.then(function(a){return h(a,u,f,t)})}),o}):Promise.resolve(c)},shouldProcess:e,impl:{readUrls:i,inline:h}};function e(c){return c.search(l)!==-1}function i(c){for(var f,t=[];(f=l.exec(c))!==null;)t.push(f[1]);return t.filter(function(n){return!s.isDataUrl(n)})}function h(c,f,t,n){return Promise.resolve(f).then(function(o){return t?s.resolveUrl(o,t):o}).then(n||s.getAndEncode).then(function(o){return c.replace((u=f,new RegExp(`(url\\(['"]?)(${s.escape(u)})(['"]?\\))`,"g")),`$1${o}$3`);var u})}}(),O={resolveAll:function(){return j().then(function(l){return Promise.all(l.map(function(e){return e.resolve()}))}).then(function(l){return l.join(`
`)})},impl:{readAll:j}};function j(){return Promise.resolve(s.asArray(document.styleSheets)).then(function(e){const i=[];return e.forEach(function(h){if(Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(h),"cssRules"))try{s.asArray(h.cssRules||[]).forEach(i.push.bind(i))}catch(c){console.error("domtoimage: Error while reading CSS rules from "+h.href,c.toString())}}),i}).then(function(e){return e.filter(function(i){return i.type===CSSRule.FONT_FACE_RULE}).filter(function(i){return I.shouldProcess(i.style.getPropertyValue("src"))})}).then(function(e){return e.map(l)});function l(e){return{resolve:function(){var i=(e.parentStyleSheet||{}).href;return I.inlineAll(e.cssText,i)},src:function(){return e.style.getPropertyValue("src")}}}}const G={inlineAll:function l(e){if(!s.isElement(e))return Promise.resolve(e);return i(e).then(function(){return s.isHTMLImageElement(e)?W(e).inline():Promise.all(s.asArray(e.childNodes).map(function(h){return l(h)}))});function i(h){const c=["background","background-image"],f=c.map(function(t){const n=h.style.getPropertyValue(t),o=h.style.getPropertyPriority(t);return n?I.inlineAll(n).then(function(u){h.style.setProperty(t,u,o)}):Promise.resolve()});return Promise.all(f).then(function(){return h})}},impl:{newImage:W}};function W(l){return{inline:function(e){return s.isDataUrl(l.src)?Promise.resolve():Promise.resolve(l.src).then(e||s.getAndEncode).then(function(i){return new Promise(function(h){l.onload=h,l.onerror=h,l.src=i})})}}}const M={copyDefaultStyles:!0,imagePlaceholder:void 0,cacheBust:!1,useCredentials:!1,httpTimeout:3e4,styleCaching:"strict",corsImg:void 0},m={toSvg:q,toPng:function(l,e){return R(l,e).then(function(i){return i.toDataURL()})},toJpeg:function(l,e){return R(l,e).then(function(i){return i.toDataURL("image/jpeg",(e?e.quality:void 0)||1)})},toBlob:function(l,e){return R(l,e).then(s.canvasToBlob)},toPixelData:function(l,e){return R(l,e).then(function(i){return i.getContext("2d").getImageData(0,0,s.width(l),s.height(l)).data})},toCanvas:R,impl:{fontFaces:O,images:G,util:s,inliner:I,urlCache:[],options:{}}},U=(P.exports=m,(typeof Node<"u"?Node.ELEMENT_NODE:void 0)||1),V=(D!==void 0?D.getComputedStyle:void 0)||(typeof window<"u"?window.getComputedStyle:void 0)||globalThis.getComputedStyle,Q=(D!==void 0?D.atob:void 0)||(typeof window<"u"?window.atob:void 0)||globalThis.atob;function q(l,e){m.impl.util.getWindow(l);var i=e=e||{};i.copyDefaultStyles===void 0?m.impl.options.copyDefaultStyles=M.copyDefaultStyles:m.impl.options.copyDefaultStyles=i.copyDefaultStyles,i.imagePlaceholder===void 0?m.impl.options.imagePlaceholder=M.imagePlaceholder:m.impl.options.imagePlaceholder=i.imagePlaceholder,i.cacheBust===void 0?m.impl.options.cacheBust=M.cacheBust:m.impl.options.cacheBust=i.cacheBust,i.corsImg===void 0?m.impl.options.corsImg=M.corsImg:m.impl.options.corsImg=i.corsImg,i.useCredentials===void 0?m.impl.options.useCredentials=M.useCredentials:m.impl.options.useCredentials=i.useCredentials,i.httpTimeout===void 0?m.impl.options.httpTimeout=M.httpTimeout:m.impl.options.httpTimeout=i.httpTimeout,i.styleCaching===void 0?m.impl.options.styleCaching=M.styleCaching:m.impl.options.styleCaching=i.styleCaching;let h=[];return Promise.resolve(l).then(function(c){if(c.nodeType===U)return c;var f=c,t=c.parentNode,n=document.createElement("span");return t.replaceChild(n,f),n.append(c),h.push({parent:t,child:f,wrapper:n}),n}).then(function(c){return function f(t,n,o,u){const a=n.filter;if(t===b||s.isHTMLScriptElement(t)||s.isHTMLStyleElement(t)||s.isHTMLLinkElement(t)||o!==null&&a&&!a(t))return Promise.resolve();return Promise.resolve(t).then(v).then(function(r){return w(r,d(t))}).then(function(r){return p(r,t)});function v(r){return s.isHTMLCanvasElement(r)?s.makeImage(r.toDataURL()):r.cloneNode(!1)}function d(r){return s.isElementHostForOpenShadowRoot(r)?r.shadowRoot:r}function w(r,g){const S=x(g);let C=Promise.resolve();if(S.length!==0){const T=V(H(g));s.asArray(S).forEach(function(L){C=C.then(function(){return f(L,n,T).then(function(E){E&&r.appendChild(E)})})})}return C.then(function(){return r});function H(T){return s.isShadowRoot(T)?T.host:T}function x(T){return s.isShadowSlotElement(T)?T.assignedNodes():T.childNodes}}function p(r,g){return!s.isElement(r)||s.isShadowSlotElement(g)?Promise.resolve(r):Promise.resolve().then(S).then(C).then(H).then(x).then(function(){return r});function S(){function T(E,y){y.font=E.font,y.fontFamily=E.fontFamily,y.fontFeatureSettings=E.fontFeatureSettings,y.fontKerning=E.fontKerning,y.fontSize=E.fontSize,y.fontStretch=E.fontStretch,y.fontStyle=E.fontStyle,y.fontVariant=E.fontVariant,y.fontVariantCaps=E.fontVariantCaps,y.fontVariantEastAsian=E.fontVariantEastAsian,y.fontVariantLigatures=E.fontVariantLigatures,y.fontVariantNumeric=E.fontVariantNumeric,y.fontVariationSettings=E.fontVariationSettings,y.fontWeight=E.fontWeight}function L(E,y){const A=V(E);A.cssText?(y.style.cssText=A.cssText,T(A,y.style)):(et(n,E,A,o,y),o===null&&(["inset-block","inset-block-start","inset-block-end"].forEach(N=>y.style.removeProperty(N)),["left","right","top","bottom"].forEach(N=>{y.style.getPropertyValue(N)&&y.style.setProperty(N,"0px")})))}L(g,r)}function C(){const T=s.uid();function L(E){const y=V(g,E),A=y.getPropertyValue("content");if(A!==""&&A!=="none"){let z=function(){const rt=`.${T}:`+E,it=(y.cssText?st:ut)();return document.createTextNode(rt+`{${it}}`);function st(){return`${y.cssText} content: ${A};`}function ut(){return s.asArray(y).map(ct).join("; ")+";";function ct(B){const lt=y.getPropertyValue(B),at=y.getPropertyPriority(B)?" !important":"";return B+": "+lt+at}}};var N=z;const ot=r.getAttribute("class")||"",_=(r.setAttribute("class",ot+" "+T),document.createElement("style"));_.appendChild(z()),r.appendChild(_)}}[":before",":after"].forEach(function(E){L(E)})}function H(){s.isHTMLTextAreaElement(g)&&(r.innerHTML=g.value),s.isHTMLInputElement(g)&&r.setAttribute("value",g.value)}function x(){s.isSVGElement(r)&&(r.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.isSVGRectElement(r))&&["width","height"].forEach(function(T){const L=r.getAttribute(T);L&&r.style.setProperty(T,L)})}}}(c,e,null)}).then(Z).then(tt).then(function(c){e.bgcolor&&(c.style.backgroundColor=e.bgcolor),e.width&&(c.style.width=e.width+"px"),e.height&&(c.style.height=e.height+"px"),e.style&&Object.keys(e.style).forEach(function(t){c.style[t]=e.style[t]});let f=null;return typeof e.onclone=="function"&&(f=e.onclone(c)),Promise.resolve(f).then(function(){return c})}).then(function(c){let f=e.width||s.width(c),t=e.height||s.height(c);return Promise.resolve(c).then(function(n){return n.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(n)}).then(s.escapeXhtml).then(function(n){var o=(s.isDimensionMissing(f)?' width="100%"':` width="${f}"`)+(s.isDimensionMissing(t)?' height="100%"':` height="${t}"`);return`<svg xmlns="http://www.w3.org/2000/svg"${(s.isDimensionMissing(f)?"":` width="${f}"`)+(s.isDimensionMissing(t)?"":` height="${t}"`)}><foreignObject${o}>${n}</foreignObject></svg>`}).then(function(n){return"data:image/svg+xml;charset=utf-8,"+n})}).then(function(c){for(;0<h.length;){var f=h.pop();f.parent.replaceChild(f.child,f.wrapper)}return c}).then(function(c){return m.impl.urlCache=[],function(){b&&(document.body.removeChild(b),b=null),$&&clearTimeout($),$=setTimeout(()=>{$=null,k={}},2e4)}(),c})}function R(l,e){return q(l,e=e||{}).then(s.makeImage).then(function(i){var h=typeof e.scale!="number"?1:e.scale,c=function(t,n){let o=e.width||s.width(t),u=e.height||s.height(t);return s.isDimensionMissing(o)&&(o=s.isDimensionMissing(u)?300:2*u),s.isDimensionMissing(u)&&(u=o/2),t=document.createElement("canvas"),t.width=o*n,t.height=u*n,e.bgcolor&&((n=t.getContext("2d")).fillStyle=e.bgcolor,n.fillRect(0,0,t.width,t.height)),t}(l,h),f=c.getContext("2d");return f.msImageSmoothingEnabled=!1,f.imageSmoothingEnabled=!1,i&&(f.scale(h,h),f.drawImage(i,0,0)),c})}let b=null;function Z(l){return O.resolveAll().then(function(e){var i;return e!==""&&(i=document.createElement("style"),l.appendChild(i),i.appendChild(document.createTextNode(e))),l})}function tt(l){return G.inlineAll(l).then(function(){return l})}function et(l,e,i,h,c){const f=m.impl.options.copyDefaultStyles?function(n,a){var a=function(d){var w=[];do if(d.nodeType===U){var p=d.tagName;if(w.push(p),nt.includes(p))break}while(d=d.parentNode,d);return w}(a),u=function(d){return(n.styleCaching!=="relaxed"?d:d.filter((w,p,r)=>p===0||p===r.length-1)).join(">")}(a);if(k[u])return k[u];var v=function(){if(b)return b.contentWindow;var d=document.characterSet||"UTF-8",w=document.doctype,w=w?(`<!DOCTYPE ${p(w.name)} ${p(w.publicId)} `+p(w.systemId)).trim()+">":"";return(b=document.createElement("iframe")).id="domtoimage-sandbox-"+s.uid(),b.style.visibility="hidden",b.style.position="fixed",document.body.appendChild(b),function(r,g,S,C){try{return r.contentWindow.document.write(g+`<html><head><meta charset='${S}'><title>${C}</title></head><body></body></html>`),r.contentWindow}catch{}var H=document.createElement("meta");H.setAttribute("charset",S);try{var x=document.implementation.createHTMLDocument(C),T=(x.head.appendChild(H),g+x.documentElement.outerHTML);return r.setAttribute("srcdoc",T),r.contentWindow}catch{}return r.contentDocument.head.appendChild(H),r.contentDocument.title=C,r.contentWindow}(b,w,d,"domtoimage-sandbox");function p(r){var g;return r?((g=document.createElement("div")).innerText=r,g.innerHTML):""}}(),a=function(d,w){let p=d.body;do{var r=w.pop(),r=d.createElement(r);p.appendChild(r),p=r}while(0<w.length);return p.textContent="​",p}(v.document,a),v=function(d,w){const p={},r=d.getComputedStyle(w);return s.asArray(r).forEach(function(g){p[g]=g==="width"||g==="height"?"auto":r.getPropertyValue(g)}),p}(v,a);return function(d){do{var w=d.parentElement;w!==null&&w.removeChild(d),d=w}while(d&&d.tagName!=="BODY")}(a),k[u]=v}(l,e):{},t=c.style;s.asArray(i).forEach(function(n){var o,u=i.getPropertyValue(n),a=f[n],v=h?h.getPropertyValue(n):void 0;(u!==a||h&&u!==v)&&(a=i.getPropertyPriority(n),v=t,u=u,a=a,o=0<=["background-clip"].indexOf(n=n),a?(v.setProperty(n,u,a),o&&v.setProperty("-webkit-"+n,u,a)):(v.setProperty(n,u),o&&v.setProperty("-webkit-"+n,u)))})}let $=null,k={};const nt=["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DETAILS","DIALOG","DD","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","LI","MAIN","NAV","OL","P","PRE","SECTION","SVG","TABLE","UL","math","svg","BODY","HEAD","HTML"]})(ft)})(X);var mt=X.exports;const ht=dt(mt),K=document.querySelectorAll("[data-screenshot]"),J=document.querySelector("#screenshot-button");function Y(){for(const P of K){const F=P.getBoundingClientRect(),D=window.getComputedStyle(P),s=F.height+parseInt(D.getPropertyValue("margin-top"));ht.toPng(P,{width:F.width*2,height:s*2,style:{transform:"scale(2)","transform-origin":"top left"},copyDefaultStyles:!1}).then(I=>{var O=document.createElement("a");O.download=P.dataset.screenshot+".png",O.href=I,O.click()})}}K.length>0&&(J.removeAttribute("hidden"),J.addEventListener("click",()=>Y()));new URL(window.location.href).searchParams.has("autoSS")&&document.addEventListener("readystatechange",()=>{Y()});
