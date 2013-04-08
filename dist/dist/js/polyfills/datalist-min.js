/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release-development Build: 2013-04-08 02:23 AM
 *
 */
(function(a){a.fn.datalist=function(){return a(this).each(function(f){var g=a(this),j=a("#"+g.attr("list")),e,k,d=[],h,c,i,b;h=function(n){var l,m;if(n.length!==0){l=n.toLowerCase();m=k.filter(function(){var p=a(this),o=p.find("span.al-value").html();if(o.length===0){o=p.find("span.al-label").html()}return(l.length===0||o.toLowerCase().indexOf(l)!==-1)})}else{m=k}e.empty().append(m);if(m.length!==0){i();e.removeClass("al-hide");g.attr("aria-expanded","true")}else{e.addClass("al-hide");g.attr("aria-expanded","false")}};c=function(){e.addClass("al-hide").empty();g.attr({"aria-expanded":"false","aria-activedescendent":""})};i=function(){e.css("width",g.innerWidth());if(pe.ie>0&&pe.ie<8){e.css("top",g.innerHeight()+13)}};pe.resize(i);j.find("option").each(function(o){var n=a(this),m=n.attr("value"),l=n.attr("label");if(m==="undefined"){m=n.text()}d.push('<li class="al-option" id="al-option-'+f+"-"+o+'"><a href="javascript:;"><span class="al-value">'+(m!=="undefined"?m:"")+'</span><span class="al-label">'+(l!=="undefined"?l:"")+"</span></a></li>")});g.attr({autocomplete:"off",role:"textbox","aria-haspopup":"true","aria-autocomplete":"list","aria-owns":"wb-autolist-"+f,"aria-activedescendent":""}).wrap('<div class="wb-al-container" role="application"/>');b=g.parent();e=a('<ul role="listbox" id="wb-autolist-'+f+'" class="wb-autolist al-hide" aria-hidden="true" aria-live="polite"></ul>');k=a(d.join(""));g.after(e);g.on("keyup keydown click vclick touchstart focus",function(o){var n=o.type,l=o.keyCode,m;if(n==="keyup"){if(!(o.ctrlKey||o.altKey||o.metaKey)){if((l>47&&l<58)||(l>64&&l<91)||l===32||l===8){h(g.val())}}}else{if(n==="keydown"){if(!(o.ctrlKey||o.metaKey)){if(!o.altKey&&!e.hasClass("al-hide")){if(l===27){c();return false}else{if((l===38||l===40)&&g.attr("aria-activedescendent")===""){if(l===38){m=e.find("a").last()}else{m=e.find("a").eq(0)}g.attr("aria-activedescendent",m.parent().attr("id"));pe.focus(m);return false}}}else{if(l===38||l===40){h("");return false}}}}else{if(n==="click"||n==="vclick"){if(!e.hasClass("al-hide")){c()}return false}else{if(n==="focus"&&pe.ie>0&&pe.ie<8){e.addClass("al-hide").empty()}}}}});e.on("keyup keydown click vclick touchstart","a, span",function(o){var r=o.type,q=o.keyCode,p=a(o.target),l,n,t,m=g.val(),s;if(r==="keyup"){if(!(o.ctrlKey||o.altKey||o.metaKey)){if((q>47&&q<58)||(q>64&&q<91)||q===32){g.val(m+String.fromCharCode(q));pe.focus(g);h(g.val())}else{if(q===8){if(g.val().length>0){g.val(m.substring(0,m.length-1));h(g.val())}pe.focus(g)}}}}else{if(r==="keydown"){if(!(o.ctrlKey||o.altKey||o.metaKey)){if(q===13){s=p.find("span.al-value").html();if(s.length===0){s=p.find("span.al-label").html()}g.val(s);pe.focus(g);c();return false}else{if(q===9||q===27){pe.focus(g);c();return false}else{if(q===38||q===40){l=e.find("a");if(l.length!==0){n=l.index(p);if(q===38){t=((n-1)===-1?l.last():l.eq(n-1))}else{t=((n+1)===l.length?l.eq(0):l.eq(n+1))}g.attr("aria-activedescendent",t.parent().attr("id"));pe.focus(t)}return false}}}}}else{if(r==="click"||r==="vclick"||r==="touchstart"){if(!p.hasClass("al-option")){p=p.parent()}s=p.find("span.al-value").html();if(s.length===0){s=p.find("span.al-label").html()}g.val(s);pe.focus(g);c()}}}});pe.document.on("click vclick touchstart",function(l){if(!e.hasClass("al-hide")&&!a(l.target).is(g)){c()}})})};a("input[list]").datalist()}(jQuery));