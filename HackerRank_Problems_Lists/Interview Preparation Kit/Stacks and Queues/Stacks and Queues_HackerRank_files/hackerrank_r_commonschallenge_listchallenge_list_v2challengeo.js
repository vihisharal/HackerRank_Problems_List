(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8KV7":function(e,a,t){"use strict";t("2Spj");var c=t("lwsE"),n=t.n(c),o=t("W8MJ"),r=t.n(o),s=t("a1gu"),i=t.n(s),m=t("Nsbk"),l=t.n(m),u=t("PJYZ"),p=t.n(u),h=t("7W2i"),d=t.n(h),g=t("lSNA"),k=t.n(g),w=t("pVnL"),_=t.n(w),f=t("QILm"),b=t.n(f),v=(t("f3/d"),t("cDcd")),y=t.n(v),C=t("MfAl"),I=t("V6Zm"),R=t("TSYQ"),J=t.n(R),S=t("gQMU"),E=t.n(S),H=t("u6S6"),P=t.n(H),N=t("OEX3"),j=t("iiin"),x=t("bIS8"),L=t("5J+W"),U=t("oBtd"),O=t.n(U),T=t("CFIE"),A=t("jx0p");t("P9et");function W(e){var a=e.text,t=e.Icon,c=e.onClick,n=e.fab,o=e.coloredLogo,r=b()(e,["text","Icon","onClick","fab","coloredLogo"]);return n?y.a.createElement(N.c,_()({className:"social-btn-fab",onClick:c},r),y.a.createElement(t,{className:"social-share-icon"}),y.a.createElement("span",{className:"fab-fallback-share"},a)):o?y.a.createElement(N.c,_()({onClick:c},r),y.a.createElement("img",{src:o,className:"social-btn-colored-logo",alt:a})):y.a.createElement(j.a,_()({Icon:t,onClick:c,btnText:a,className:"social-share-icon",tooltip:!1},r))}var D=function(e){function a(){var e,t;n()(this,a);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return t=i()(this,(e=l()(a)).call.apply(e,[this].concat(o))),k()(p()(t),"shareOnPopup",(function(e){var a=screen.width/2-300,t=screen.height/2-150;window.open(e,"_blank","noopener noreferrer","height=".concat(300,",width=").concat(600,",top=").concat(t,",left=").concat(a)),window.focus()})),k()(p()(t),"sharedProps",(function(e){var a=t.props,c=a.fab,n=a.page,o=a.name,r=a.isColored,s=a.appUtil,i=E()(P()(n));return{fab:c,coloredLogo:r&&s.assetPath("social_share/".concat(e,".svg")),onClick:t.shareLink.bind(p()(t),e),"data-event-category":"HRC Skills","data-event-label":"".concat(E()(e)).concat(i),"data-cd-skill":o}})),t}return d()(a,e),r()(a,[{key:"shareLink",value:function(e,a){var t=this;a.preventDefault();var c=this.props,n=c.quote,o=c.hashtag,r=c.name,s="",i=function(e,a){var t=a.name,c=a.page,n=a.slug,o=a.meta,r=a.badge,s=void 0===r?{}:r,i="trigger"===t?"social-dialog":"social-buttons",m=a.profile.username,l={attribute1:c,attribute2:e,attribute3:i,attribute4:n,attribute5:JSON.stringify(s)},u=s.badge_type,p=s.stars,h=s.level;switch(O.a.track("Click","SocialShare",l),c){case"30daysofcode":return"https://www.hackerrank.com/domains/tutorials/30-days-of-code?utm_campaign=".concat(i,"&utm_medium=").concat(e,"&utm_source=tutorial");case"crackingthecodinginterview":return"https://www.hackerrank.com/domains/tutorials/cracking-the-coding-interview?utm_campaign=".concat(i,"&utm_medium=").concat(e,"&utm_source=tutorial");case"tutorial":return"https://www.hackerrank.com/".concat(n,"?utm_campaign=").concat(i,"&utm_medium=").concat(e,"&utm_source=tutorial");case"contest":return"https://www.hackerrank.com/".concat(n,"?utm_campaign=").concat(i,"&utm_medium=").concat(e,"&utm_source=contest");case"domain":return"https://www.hackerrank.com/domains/".concat(n,"?utm_campaign=").concat(i,"&utm_medium=").concat(e,"&utm_source=domain");case"domains":return"https://www.hackerrank.com?utm_campaign=".concat(i,"&utm_medium=").concat(e,"&utm_source=domainlist");case"challenges":case"challenge_attempt_share":return"https://www.hackerrank.com/challenges/".concat(n,"?utm_campaign=").concat(i,"&utm_medium=").concat(e,"&utm_source=challenge");case"chapter_completed":return"https://www.hackerrank.com/domains/".concat(o.track,"/").concat(o.chapter_slug,"?utm_campaign=").concat(i,"&utm_medium=").concat(e,"&utm_source=").concat(c);case"code_snippet":return"https://www.hackerrank.com/snippets/".concat(n,"?utm_campaign=").concat(i,"&utm_medium=").concat(e,"&utm_source=").concat(c);case"badge_share":case"badge_share_profile":return"https://www.hackerrank.com/".concat(m,"?badge=").concat(u,"&stars=").concat(p,"&level=").concat(h,"&hr_r=1&utm_campaign=").concat(i,"&utm_medium=").concat(e,"&utm_source=").concat(c,"&social=linkedin");case"certificate_social_share":return"https://www.hackerrank.com/certificates/".concat(n,"?hr_r=1&utm_campaign=").concat(i,"&utm_medium=").concat(e,"&utm_source=").concat(c,"&social=linkedin");default:return"https://www.hackerrank.com?utm_campaign=".concat(i,"&utm_medium=").concat(e,"&utm_source=domains")}}(e,this.props);Object(C.a)(i).then((function(a){var c,m=I.a.url(a)?a:i;switch(e){case"twitter":c="https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(function(e,a){var t=a.name,c=a.meta,n=a.page,o=a.badge,r=void 0===o?{}:o;switch(n){case"30daysofcode":return"Just joined the #30DaysofCode challenge to improve my #coding skills! Join me and thousands of coders ".concat(e," @HackerRank");case"crackingthecodinginterview":return"Started Cracking the Coding Interview on @HackerRank! Join me and learn the secrets from @gayle ".concat(e," @HackerRank");case"tutorial":return"Just joined ".concat(t," on @HackerRank to improve my #programming skills! Join me and thousands of coders ").concat(e);case"contest":return"Join me and sign up to compete in ".concat(t," on @HackerRank ").concat(e," #programming");case"domain":return"Want to boost your coding skills? @HackerRank is the best way to practice ".concat(t," ").concat(e," #programming");case"domains":return"Keep your coding skills sharp by solving programming challenges ".concat(e,"  on @HackerRank #programming");case"challenges":return"Success! Just solved ".concat(t," on @HackerRank. Can you complete the challenge? ").concat(e," #programming");case"challenge_attempt_share":return"Can you help me solve this challenge? ".concat(e," #programming");case"chapter_completed":return"Just solved all ".concat(c.chapter," challenges in ").concat(c.track," on @HackerRank. Try it out! ").concat(e," #programming");case"code_snippet":return"Check out my code snippet on @HackerRank. ".concat(e);case"badge_share":case"badge_share_profile":return"".concat(Object(T.c)(r)," ").concat(e);case"certificate_social_share":return"I just earned ".concat(t," skill certificate via @HackerRank. Get your skills certified and show the world what you can do! #skilloverpedigree ").concat(e);default:return"Keep your coding skills sharp by solving programming challenges ".concat(e," on @HackerRank #programming")}}(m,t.props)));break;case"facebook":n&&(s+="&quote=".concat(encodeURIComponent(n))),o&&(s+="&hashtag=".concat(encodeURIComponent(o))),c="https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(m)).concat(s);break;case"linkedin":n&&(s+="&title=".concat(r?encodeURIComponent("".concat(n," - (").concat(r,")")):encodeURIComponent(n))),c="https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(m)).concat(s)}t.shareOnPopup(c)}))}},{key:"render",value:function(){var e=this.props,a=e.fab,t=e.className,c=e.align;return y.a.createElement("div",{className:J()(t,a?"fab-icon-share-wrapper":"social-links-wrapper",{"pull-left":"left"===c,"text-center":"center"===c,"pull-right":"right"===c||!c})},y.a.createElement(W,_()({text:"Share on Facebook",Icon:x.FacebookIcon},this.sharedProps("facebook"))),y.a.createElement(W,_()({text:"Share on Twitter",Icon:x.TwitterIcon},this.sharedProps("twitter"))),y.a.createElement(W,_()({text:"Share on LinkedIn",Icon:x.LinkedinIcon},this.sharedProps("linkedin"))))}}]),a}(y.a.Component);k()(D,"defaultProps",{meta:{},align:"right",fab:!1}),a.a=Object(A.a)(Object(L.a)(D))},P9et:function(e,a,t){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_commons~challenge_list~challenge_list_v2~challenge~onboarding~profile_v2~interview~skills_verification-0b7caa0484.js.map