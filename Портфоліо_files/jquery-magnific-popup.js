!function(e,t){var n=function(){var e;e=function(d){var p,i,u,o,f,t,l="Close",c="BeforeClose",m="MarkupParse",g="Open",a="Change",n="mfp",v="."+n,h="mfp-ready",r="mfp-removing",s="mfp-prevent-close",e=function(){},y=!!window.jQuery,C=d(window),w=function(e,t){p.ev.on(n+e+v,t)},b=function(e,t,n,i){var o=document.createElement("div");return o.className="mfp-"+e,n&&(o.innerHTML=n),i?t&&t.appendChild(o):(o=d(o),t&&o.appendTo(t)),o},I=function(e,t){p.ev.triggerHandler(n+e,t),p.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),p.st.callbacks[e]&&p.st.callbacks[e].apply(p,d.isArray(t)?t:[t]))},x=function(e){return e===t&&p.currTemplate.closeBtn||(p.currTemplate.closeBtn=d(p.st.closeMarkup.replace("%title%",p.st.tClose)),t=e),p.currTemplate.closeBtn},k=function(){d.magnificPopup.instance||((p=new e).init(),d.magnificPopup.instance=p)};e.prototype={constructor:e,init:function(){var e=navigator.appVersion;p.isLowIE=p.isIE8=document.all&&!document.addEventListener,p.isAndroid=/android/gi.test(e),p.isIOS=/iphone|ipad|ipod/gi.test(e),p.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),p.probablyMobile=p.isAndroid||p.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),u=d(document),p.popupsCache={}},open:function(e){var t;if(!1===e.isObj){p.items=e.items.toArray(),p.index=0;var n,i=e.items;for(t=0;t<i.length;t++)if((n=i[t]).parsed&&(n=n.el[0]),n===e.el[0]){p.index=t;break}}else p.items=d.isArray(e.items)?e.items:[e.items],p.index=e.index||0;if(!p.isOpen){p.types=[],f="",e.mainEl&&e.mainEl.length?p.ev=e.mainEl.eq(0):p.ev=u,e.key?(p.popupsCache[e.key]||(p.popupsCache[e.key]={}),p.currTemplate=p.popupsCache[e.key]):p.currTemplate={},p.st=d.extend(!0,{},d.magnificPopup.defaults,e),p.fixedContentPos="auto"===p.st.fixedContentPos?!p.probablyMobile:p.st.fixedContentPos,p.st.modal&&(p.st.closeOnContentClick=!1,p.st.closeOnBgClick=!1,p.st.showCloseBtn=!1,p.st.enableEscapeKey=!1),p.bgOverlay||(p.bgOverlay=b("bg").on("click"+v,function(){p.close()}),p.wrap=b("wrap").attr("tabindex",-1).on("click"+v,function(e){p._checkIfClose(e.target)&&p.close()}),p.container=b("container",p.wrap)),p.contentContainer=b("content"),p.st.preloader&&(p.preloader=b("preloader",p.container,p.st.tLoading));var o=d.magnificPopup.modules;for(t=0;t<o.length;t++){var r=o[t];r=r.charAt(0).toUpperCase()+r.slice(1),p["init"+r].call(p)}I("BeforeOpen"),p.st.showCloseBtn&&(p.st.closeBtnInside?(w(m,function(e,t,n,i){n.close_replaceWith=x(i.type)}),f+=" mfp-close-btn-in"):p.wrap.append(x())),p.st.alignTop&&(f+=" mfp-align-top"),p.fixedContentPos?p.wrap.css({overflow:p.st.overflowY,overflowX:"hidden",overflowY:p.st.overflowY}):p.wrap.css({top:C.scrollTop(),position:"absolute"}),(!1===p.st.fixedBgPos||"auto"===p.st.fixedBgPos&&!p.fixedContentPos)&&p.bgOverlay.css({height:u.height(),position:"absolute"}),p.st.enableEscapeKey&&u.on("keyup"+v,function(e){27===e.keyCode&&p.close()}),C.on("resize"+v,function(){p.updateSize()}),p.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&p.wrap.addClass(f);var a=p.wH=C.height(),s={};if(p.fixedContentPos&&p._hasScrollBar(a)){var l=p._getScrollbarSize();l&&(s.marginRight=l)}p.fixedContentPos&&(p.isIE7?d("body, html").css("overflow","hidden"):s.overflow="hidden");var c=p.st.mainClass;return p.isIE7&&(c+=" mfp-ie7"),c&&p._addClassToMFP(c),p.updateItemHTML(),I("BuildControls"),d("html").css(s),p.bgOverlay.add(p.wrap).prependTo(p.st.prependTo||d(document.body)),p._lastFocusedEl=document.activeElement,setTimeout(function(){p.content?(p._addClassToMFP(h),p._setFocus()):p.bgOverlay.addClass(h),u.on("focusin"+v,p._onFocusIn)},16),p.isOpen=!0,p.updateSize(a),I(g),e}p.updateItemHTML()},close:function(){p.isOpen&&(I(c),p.isOpen=!1,p.st.removalDelay&&!p.isLowIE&&p.supportsTransition?(p._addClassToMFP(r),setTimeout(function(){p._close()},p.st.removalDelay)):p._close())},_close:function(){I(l);var e=r+" "+h+" ";if(p.bgOverlay.detach(),p.wrap.detach(),p.container.empty(),p.st.mainClass&&(e+=p.st.mainClass+" "),p._removeClassFromMFP(e),p.fixedContentPos){var t={marginRight:""};p.isIE7?d("body, html").css("overflow",""):t.overflow="",d("html").css(t)}u.off("keyup.mfp focusin"+v),p.ev.off(v),p.wrap.attr("class","mfp-wrap").removeAttr("style"),p.bgOverlay.attr("class","mfp-bg"),p.container.attr("class","mfp-container"),!p.st.showCloseBtn||p.st.closeBtnInside&&!0!==p.currTemplate[p.currItem.type]||p.currTemplate.closeBtn&&p.currTemplate.closeBtn.detach(),p.st.autoFocusLast&&p._lastFocusedEl&&d(p._lastFocusedEl).focus(),p.currItem=null,p.content=null,p.currTemplate=null,p.prevHeight=0,I("AfterClose")},updateSize:function(e){if(p.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;p.wrap.css("height",n),p.wH=n}else p.wH=e||C.height();p.fixedContentPos||p.wrap.css("height",p.wH),I("Resize")},updateItemHTML:function(){var e=p.items[p.index];p.contentContainer.detach(),p.content&&p.content.detach(),e.parsed||(e=p.parseEl(p.index));var t=e.type;if(I("BeforeChange",[p.currItem?p.currItem.type:"",t]),p.currItem=e,!p.currTemplate[t]){var n=!!p.st[t]&&p.st[t].markup;I("FirstMarkupParse",n),p.currTemplate[t]=!n||d(n)}o&&o!==e.type&&p.container.removeClass("mfp-"+o+"-holder");var i=p["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,p.currTemplate[t]);p.appendContent(i,t),e.preloaded=!0,I(a,e),o=e.type,p.container.prepend(p.contentContainer),I("AfterChange")},appendContent:function(e,t){(p.content=e)?p.st.showCloseBtn&&p.st.closeBtnInside&&!0===p.currTemplate[t]?p.content.find(".mfp-close").length||p.content.append(x()):p.content=e:p.content="",I("BeforeAppend"),p.container.addClass("mfp-"+t+"-holder"),p.contentContainer.append(p.content)},parseEl:function(e){var t,n=p.items[e];if((n=n.tagName?{el:d(n)}:(t=n.type,{data:n,src:n.src})).el){for(var i=p.types,o=0;o<i.length;o++)if(n.el.hasClass("mfp-"+i[o])){t=i[o];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=t||p.st.type||"inline",n.index=e,n.parsed=!0,p.items[e]=n,I("ElementParse",n),p.items[e]},addGroup:function(t,n){var e=function(e){e.mfpEl=this,p._openClick(e,t,n)};n||(n={});var i="click.magnificPopup";n.mainEl=t,n.items?(n.isObj=!0,t.off(i).on(i,e)):(n.isObj=!1,n.delegate?t.off(i).on(i,n.delegate,e):(n.items=t).off(i).on(i,e))},_openClick:function(e,t,n){if((void 0!==n.midClick?n.midClick:d.magnificPopup.defaults.midClick)||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var i=void 0!==n.disableOn?n.disableOn:d.magnificPopup.defaults.disableOn;if(i)if("function"==typeof i){if(!i.call(p))return!0}else if(C.width()<i)return!0;e.type&&(e.preventDefault(),p.isOpen&&e.stopPropagation()),n.el=d(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),p.open(n)}},updateStatus:function(e,t){if(p.preloader){i!==e&&p.container.removeClass("mfp-s-"+i),t||"loading"!==e||(t=p.st.tLoading);var n={status:e,text:t};I("UpdateStatus",n),e=n.status,t=n.text,p.preloader.html(t),p.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),p.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(e){if(!d(e).hasClass(s)){var t=p.st.closeOnContentClick,n=p.st.closeOnBgClick;if(t&&n)return!0;if(!p.content||d(e).hasClass("mfp-close")||p.preloader&&e===p.preloader[0])return!0;if(e===p.content[0]||d.contains(p.content[0],e)){if(t)return!0}else if(n&&d.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){p.bgOverlay.addClass(e),p.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),p.wrap.removeClass(e)},_hasScrollBar:function(e){return(p.isIE7?u.height():document.body.scrollHeight)>(e||C.height())},_setFocus:function(){(p.st.focus?p.content.find(p.st.focus).eq(0):p.wrap).focus()},_onFocusIn:function(e){if(e.target!==p.wrap[0]&&!d.contains(p.wrap[0],e.target))return p._setFocus(),!1},_parseMarkup:function(o,e,t){var r;t.data&&(e=d.extend(t.data,e)),I(m,[o,e,t]),d.each(e,function(e,t){if(void 0===t||!1===t)return!0;if(1<(r=e.split("_")).length){var n=o.find(v+"-"+r[0]);if(0<n.length){var i=r[1];"replaceWith"===i?n[0]!==t[0]&&n.replaceWith(t):"img"===i?n.is("img")?n.attr("src",t):n.replaceWith(d("<img>").attr("src",t).attr("class",n.attr("class"))):n.attr(r[1],t)}}else o.find(v+"-"+e).html(t)})},_getScrollbarSize:function(){if(void 0===p.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),p.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return p.scrollbarSize}},d.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return k(),(e=e?d.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return d.magnificPopup.instance&&d.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(d.magnificPopup.defaults[e]=t.options),d.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},d.fn.magnificPopup=function(e){k();var t=d(this);if("string"==typeof e)if("open"===e){var n,i=y?t.data("magnificPopup"):t[0].magnificPopup,o=parseInt(arguments[1],10)||0;n=i.items?i.items[o]:(n=t,i.delegate&&(n=n.find(i.delegate)),n.eq(o)),p._openClick({mfpEl:n},t,i)}else p.isOpen&&p[e].apply(p,Array.prototype.slice.call(arguments,1));else e=d.extend(!0,{},e),y?t.data("magnificPopup",e):t[0].magnificPopup=e,p.addGroup(t,e);return t};var T,_,P,S="inline",E=function(){P&&(_.after(P.addClass(T)).detach(),P=null)};d.magnificPopup.registerModule(S,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){p.types.push(S),w(l+"."+S,function(){E()})},getInline:function(e,t){if(E(),e.src){var n=p.st.inline,i=d(e.src);if(i.length){var o=i[0].parentNode;o&&o.tagName&&(_||(T=n.hiddenClass,_=b(T),T="mfp-"+T),P=i.after(_).detach().removeClass(T)),p.updateStatus("ready")}else p.updateStatus("error",n.tNotFound),i=d("<div>");return e.inlineElement=i}return p.updateStatus("ready"),p._parseMarkup(t,{},e),t}}});var z,O="ajax",M=function(){z&&d(document.body).removeClass(z)},B=function(){M(),p.req&&p.req.abort()};d.magnificPopup.registerModule(O,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){p.types.push(O),z=p.st.ajax.cursor,w(l+"."+O,B),w("BeforeChange."+O,B)},getAjax:function(o){z&&d(document.body).addClass(z),p.updateStatus("loading");var e=d.extend({url:o.src,success:function(e,t,n){var i={data:e,xhr:n};I("ParseAjax",i),p.appendContent(d(i.data),O),o.finished=!0,M(),p._setFocus(),setTimeout(function(){p.wrap.addClass(h)},16),p.updateStatus("ready"),I("AjaxContentAdded")},error:function(){M(),o.finished=o.loadError=!0,p.updateStatus("error",p.st.ajax.tError.replace("%url%",o.src))}},p.st.ajax.settings);return p.req=d.ajax(e),""}}});var L;d.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=p.st.image,t=".image";p.types.push("image"),w(g+t,function(){"image"===p.currItem.type&&e.cursor&&d(document.body).addClass(e.cursor)}),w(l+t,function(){e.cursor&&d(document.body).removeClass(e.cursor),C.off("resize"+v)}),w("Resize"+t,p.resizeImage),p.isLowIE&&w("AfterChange",p.resizeImage)},resizeImage:function(){var e=p.currItem;if(e&&e.img&&p.st.image.verticalFit){var t=0;p.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",p.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,L&&clearInterval(L),e.isCheckingImgSize=!1,I("ImageHasSize",e),e.imgHidden&&(p.content&&p.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var n=0,i=t.img[0],o=function(e){L&&clearInterval(L),L=setInterval(function(){0<i.naturalWidth?p._onImageHasSize(t):(200<n&&clearInterval(L),3===++n?o(10):40===n?o(50):100===n&&o(500))},e)};o(1)},getImage:function(e,t){var n=0,i=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===p.currItem&&(p._onImageHasSize(e),p.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,I("ImageLoadComplete")):++n<200?setTimeout(i,100):o())},o=function(){e&&(e.img.off(".mfploader"),e===p.currItem&&(p._onImageHasSize(e),p.updateStatus("error",r.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},r=p.st.image,a=t.find(".mfp-img");if(a.length){var s=document.createElement("img");s.className="mfp-img",e.el&&e.el.find("img").length&&(s.alt=e.el.find("img").attr("alt")),e.img=d(s).on("load.mfploader",i).on("error.mfploader",o),s.src=e.src,a.is("img")&&(e.img=e.img.clone()),0<(s=e.img[0]).naturalWidth?e.hasSize=!0:s.width||(e.hasSize=!1)}return p._parseMarkup(t,{title:function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=p.st.image.titleSrc;if(t){if("function"==typeof t)return t.call(p,e);if(e.el)return e.el.attr(t)||""}return""}(e),img_replaceWith:e.img},e),p.resizeImage(),e.hasSize?(L&&clearInterval(L),e.loadError?(t.addClass("mfp-loading"),p.updateStatus("error",r.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),p.updateStatus("ready"))):(p.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),p.findImageSize(e))),t}}});var H;d.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,r=p.st.zoom,t=".zoom";if(r.enabled&&p.supportsTransition){var n,i,o=r.duration,a=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+r.duration/1e3+"s "+r.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},o="transition";return i["-webkit-"+o]=i["-moz-"+o]=i["-o-"+o]=i[o]=n,t.css(i),t},s=function(){p.content.css("visibility","visible")};w("BuildControls"+t,function(){if(p._allowZoom()){if(clearTimeout(n),p.content.css("visibility","hidden"),!(e=p._getItemToZoom()))return void s();(i=a(e)).css(p._getOffset()),p.wrap.append(i),n=setTimeout(function(){i.css(p._getOffset(!0)),n=setTimeout(function(){s(),setTimeout(function(){i.remove(),e=i=null,I("ZoomAnimationEnded")},16)},o)},16)}}),w(c+t,function(){if(p._allowZoom()){if(clearTimeout(n),p.st.removalDelay=o,!e){if(!(e=p._getItemToZoom()))return;i=a(e)}i.css(p._getOffset(!0)),p.wrap.append(i),p.content.css("visibility","hidden"),setTimeout(function(){i.css(p._getOffset())},16)}}),w(l+t,function(){p._allowZoom()&&(s(),i&&i.remove(),e=null)})}},_allowZoom:function(){return"image"===p.currItem.type},_getItemToZoom:function(){return!!p.currItem.hasSize&&p.currItem.img},_getOffset:function(e){var t,n=(t=e?p.currItem.img:p.st.zoom.opener(p.currItem.el||p.currItem)).offset(),i=parseInt(t.css("padding-top"),10),o=parseInt(t.css("padding-bottom"),10);n.top-=d(window).scrollTop()-i;var r={width:t.width(),height:(y?t.innerHeight():t[0].offsetHeight)-o-i};return void 0===H&&(H=void 0!==document.createElement("p").style.MozTransform),H?r["-moz-transform"]=r.transform="translate("+n.left+"px,"+n.top+"px)":(r.left=n.left,r.top=n.top),r}}});var A="iframe",F=function(e){if(p.currTemplate[A]){var t=p.currTemplate[A].find("iframe");t.length&&(e||(t[0].src="//about:blank"),p.isIE8&&t.css("display",e?"block":"none"))}};d.magnificPopup.registerModule(A,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){p.types.push(A),w("BeforeChange",function(e,t,n){t!==n&&(t===A?F():n===A&&F(!0))}),w(l+"."+A,function(){F()})},getIframe:function(e,t){var n=e.src,i=p.st.iframe;d.each(i.patterns,function(){if(-1<n.indexOf(this.index))return this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1});var o={};return i.srcAction&&(o[i.srcAction]=n),p._parseMarkup(t,o,e),p.updateStatus("ready"),t}}});var j=function(e){var t=p.items.length;return t-1<e?e-t:e<0?t+e:e},N=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};d.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var r=p.st.gallery,e=".mfp-gallery";if(p.direction=!0,!r||!r.enabled)return!1;f+=" mfp-gallery",w(g+e,function(){r.navigateByImgClick&&p.wrap.on("click"+e,".mfp-img",function(){if(1<p.items.length)return p.next(),!1}),u.on("keydown"+e,function(e){37===e.keyCode?p.prev():39===e.keyCode&&p.next()})}),w("UpdateStatus"+e,function(e,t){t.text&&(t.text=N(t.text,p.currItem.index,p.items.length))}),w(m+e,function(e,t,n,i){var o=p.items.length;n.counter=1<o?N(r.tCounter,i.index,o):""}),w("BuildControls"+e,function(){if(1<p.items.length&&r.arrows&&!p.arrowLeft){var e=r.arrowMarkup,t=p.arrowLeft=d(e.replace(/%title%/gi,r.tPrev).replace(/%dir%/gi,"left")).addClass(s),n=p.arrowRight=d(e.replace(/%title%/gi,r.tNext).replace(/%dir%/gi,"right")).addClass(s);t.click(function(){p.prev()}),n.click(function(){p.next()}),p.container.append(t.add(n))}}),w(a+e,function(){p._preloadTimeout&&clearTimeout(p._preloadTimeout),p._preloadTimeout=setTimeout(function(){p.preloadNearbyImages(),p._preloadTimeout=null},16)}),w(l+e,function(){u.off(e),p.wrap.off("click"+e),p.arrowRight=p.arrowLeft=null})},next:function(){p.direction=!0,p.index=j(p.index+1),p.updateItemHTML()},prev:function(){p.direction=!1,p.index=j(p.index-1),p.updateItemHTML()},goTo:function(e){p.direction=e>=p.index,p.index=e,p.updateItemHTML()},preloadNearbyImages:function(){var e,t=p.st.gallery.preload,n=Math.min(t[0],p.items.length),i=Math.min(t[1],p.items.length);for(e=1;e<=(p.direction?i:n);e++)p._preloadItem(p.index+e);for(e=1;e<=(p.direction?n:i);e++)p._preloadItem(p.index-e)},_preloadItem:function(e){if(e=j(e),!p.items[e].preloaded){var t=p.items[e];t.parsed||(t=p.parseEl(e)),I("LazyLoad",t),"image"===t.type&&(t.img=d('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,I("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0}}}});var W="retina";d.magnificPopup.registerModule(W,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(1<window.devicePixelRatio){var n=p.st.retina,i=n.ratio;1<(i=isNaN(i)?i():i)&&(w("ImageHasSize."+W,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),w("ElementParse."+W,function(e,t){t.src=n.replaceSrc(t,i)}))}}}}),k()},"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery||window.Zepto)};nb_.listenTo("nb-app-ready",function(){n(),nb_.emit("nb-jmp-parsed")})}(window,document);