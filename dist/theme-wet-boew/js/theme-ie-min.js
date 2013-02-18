/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-rc1-development Build: 2013-02-18 03:43 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-wet-boew",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,menu:null,init:function(){b.fullhd=pe.header.find("#wet-fullhd");b.psnb=pe.header.find("#wet-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#wet-srchbx");b.bcrumb=pe.header.find("#wet-bc");b.title=pe.header.find("#wet-title");b.sft=pe.footer.find("#wet-sft");b.fullft=pe.footer.find("#wet-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){e=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=e.parents("ul");d.prev().children("a").addClass("nav-current")}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var u,x,F="",e,m,M=pe.dic.get("%settings"),w,r,f,l,K,P="",s='<a data-role="button" data-iconpos="notext"',z=' data-rel="popup" data-position-to="window"',o=s+z,A='<div data-role="popup" data-overlay-theme="a"',C='<div data-role="header"',O=C+"><h1>",y=' data-theme="c" class="ui-corner-all">',p=C+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',L=s+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",I=o+' data-icon="back" class="ui-btn-left"',G=">"+pe.dic.get("%back")+"</a>",N="</div></div>",n='<ul data-role="listview"',v="",D,k,q,g,d,J,t,E,B,H,j;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");r=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");x=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?r:b.bcrumb.children(":header")[0])).innerHTML;u=A+' id="jqm-wb-mb">'+O+e+"</h1>"+L+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){B=b.bcrumb[0];H=B.getElementsByTagName("a")[0].href;u+='<section><div id="jqm-mb-location-text">'+B.innerHTML+"</div></section>"}else{u+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){F+="<section><div><h2>"+r.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>";B=pe.secnav[0]}if(b.menubar.length!==0){F+="<section><div><h2>"+x+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}u+='<div id="jqm-mb-menu"></div></nav></div></div></div>';P+=u;b.menu=F;v+=o+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){m=pe.dic.get("%search");f=b.search[0];l=f.innerHTML;f=f.getElementsByTagName("input");t=f.length;while(t--){f[t].setAttribute("data-role","none")}K=A+' id="jqm-wb-search">'+O+m+"</h1>"+L+'</div><div data-role="content"><div>'+l.substring(l.indexOf("<form"))+"</div></div></div>";P+=K;v+=o+' data-icon="search" href="#jqm-wb-search">'+m+"</a>"}B=b.title[0];j='<div data-role="header"><div class="ui-title"><div><span class="wb-invisible">'+B.getElementsByTagName("a")[0].innerHTML+"</span></div></div>";j+='<map id="wet-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof H!=="undefined"){j+=s+' href="'+H+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=s+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(v.length!==0){j+=v}j+=o+' href="#popupSettings" data-icon="gear">'+M+"</a></map></div>";b.fullhd.children("#wet-fullhd-in").before(j);B.className+=" ui-bar-b";q=b.fullhd.find('li[id*="-lang"]');w=A+' id="popupSettings"'+y;w+=p+M+"</h1>"+L+"</div>";w+=h+n+">";if(q.length>0){w+='<li><a href="#popupLanguages"'+z+">"+pe.dic.get("%languages")+"</a></li>"}w+='<li class="ui-corner-bottom"><a href="#popupAbout"'+z+">"+pe.dic.get("%about")+"</a></li>";w+="</ul>"+N;if(q.length>0){w+=A+' id="popupLanguages"'+y;w+=p+pe.dic.get("%languages")+"</h1>"+I+' href="#popupSettings"'+G+L+"</div>";w+=h+n+">";if(q.filter('[id*="-lang-current"]').length===0){w+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+pe.dic.get("%current")+"</a></li>"}E=q.get();for(J=0,t=E.length;J!==t;J+=1){B=E[J];k=B.childNodes[0];w+="<li"+(J===(t-1)?' class="ui-corner-bottom"':"");if(B.id.indexOf("-lang-current")!==-1){w+='><a href="javascript:;" class="ui-disabled">'+B.innerHTML+pe.dic.get("%current")+"</a></li>"}else{w+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}w+="</ul>"+N}w+=A+' id="popupAbout"'+y;w+=p+pe.dic.get("%about")+"</h1>"+I+' href="#popupSettings"'+G+L+"</div>";w+=h;w+='<div class="site-app-title"><div class="ui-title">'+b.title.text()+"</div></div>";B=pe.main.find("#wet-date-mod").children();if(B.length!==0){d=B[1];if(d.getElementsByTagName("time").length===0){w+='<div class="app-version">'+B[0].innerHTML+" "+d.innerHTML+"</div>"}}w+=n+' data-inset="true">';D=b.sft.find(".wet-col-head a").get();for(J=0,t=D.length;J!==t;J+=1){k=D[J];B=k.innerHTML;d=B.toLowerCase();w+="<li"+(J===(t-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+B+"</a></li>"}w+="</ul>"+N;pe.bodydiv.append(P+w)}c(document).on("pagecreate",function(){if(v.length!==0){var T=b.fullhd.find("#wet-mnavbar"),V=pe.bodydiv.find("#jqm-mb-menu"),U,S,Q,R;T.removeClass("wb-hide");if(V.length!==0){V.append(b.menu);T.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){V.trigger("create");U=V.find(".ui-controlgroup");S=U.get();t=S.length;while(t--){B=S[t];R=B.getElementsByTagName("li")[0];if(R.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&R.className.indexOf("ui-corner-top")===-1){R.className+=" ui-corner-top"}Q=U.eq(t).find(".ui-btn").get();B=Q[Q.length-1];if(B.className.indexOf("ui-corner-bottom")===-1){B.className+=" ui-corner-bottom"}}})}}function i(X,W,aa,Z){var Y;c.mobile.showPageLoadingMsg();Y=c.mobile.transitionHandlers.simultaneous("pop",W,aa,Z);Y.done(function(){c.mobile.hidePageLoadingMsg()});return Y}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));