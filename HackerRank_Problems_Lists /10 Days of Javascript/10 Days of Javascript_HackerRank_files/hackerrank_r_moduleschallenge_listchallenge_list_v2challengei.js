(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+KS9":function(e,t,n){"use strict";var a=n("lwsE"),i=n.n(a),r=n("W8MJ"),o=n.n(r),s=n("a1gu"),c=n.n(s),l=n("Nsbk"),u=n.n(l),m=n("PJYZ"),d=n.n(m),p=n("7W2i"),h=n.n(p),f=n("lSNA"),v=n.n(f),y=n("cDcd"),b=n.n(y),S=n("17x9"),w=n.n(S),k=n("wd/R"),N=n.n(k),g=n("xNbf"),E=n("eOGF"),O=function(e){function t(e){var n;return i()(this,t),n=c()(this,u()(t).call(this,e)),v()(d()(n),"state",void 0),v()(d()(n),"intervalObject",void 0),v()(d()(n),"onTimerEnd",(function(){n.props.onTimerEnd()})),n.state={timeRemaining:""},n.intervalObject=null,n}return h()(t,e),o()(t,[{key:"componentDidMount",value:function(){var e=this;this.setNewTimeDiff(),this.intervalObject=setInterval((function(){e.setNewTimeDiff()}),1e3)}},{key:"componentWillUnmount",value:function(){this.clearIntervalObj()}},{key:"clearIntervalObj",value:function(){this.intervalObject&&clearInterval(this.intervalObject)}},{key:"setNewTimeDiff",value:function(){var e=this.props.finishTimeMs-(new Date).getTime();if(e<=0)return this.clearIntervalObj(),void this.onTimerEnd();var t=N.a.duration(e);if(t.days()>0)this.setState({timeRemaining:b.a.createElement("span",{className:"countdowntimer-days"},"".concat(t.days()," ").concat(t.days()>1?"days":"day"))});else{var n=Object(E.r)(t.hours()),a=Object(E.r)(t.minutes()),i=Object(E.r)(t.seconds()),r=b.a.createElement("span",{className:"countdowntimer-clock"},b.a.createElement("span",{className:"countdowntimer-hours"},n),":",b.a.createElement("span",{className:"countdowntimer-minutes"},a),":",b.a.createElement("span",{className:"countdowntimer-seconds"},i));this.setState({timeRemaining:r})}}},{key:"render",value:function(){var e=this.state.timeRemaining,t=this.props.className;return""===e?b.a.createElement(g.a,{className:"countdowntimer-loader",diameter:16}):b.a.createElement("span",{className:t},this.state.timeRemaining)}}]),t}(b.a.Component);v()(O,"propTypes",{finishTimeMs:w.a.number.isRequired,onTimerEnd:w.a.func}),v()(O,"defaultProps",{onTimerEnd:function(){}}),t.a=O},"5VZm":function(e,t,n){"use strict";var a=n("cDcd"),i=n.n(a),r=n("17x9"),o=n.n(r),s=n("O766"),c=n("eOGF");n("UTUX");function l(e){var t=e.open,n=e.onClose,a=e.title,r=e.youtubeId,o=e.className;return i.a.createElement(s.a,{open:t,onClose:n,title:a,theme:"theme-m",modalClass:"video-modal",className:o},i.a.createElement("div",{className:"frame-wrapper"},i.a.createElement("iframe",{id:"player-".concat(r),className:"youtube-frame block-center",type:"text/html",src:"https://www.youtube.com/embed/".concat(r,"?").concat(Object(c.Y)({enablejsapi:1,version:3,autoplay:1,rel:0,origin:"https://www.hackerrank.com"})),frameBorder:"0",allowFullScreen:!0})))}l.propTypes={open:o.a.bool,onClose:o.a.func,title:o.a.string.isRequired,youtubeId:o.a.string.isRequired},t.a=l},F39y:function(e,t,n){},H4Rz:function(e,t,n){},MfAl:function(e,t,n){"use strict";n("VRzm");var a=n("MrcO"),i=n("ZaSc"),r=n("Ckvm"),o={};t.a=function(e){return new Promise((function(t,n){if(o[e])t(o[e]);else if(a.a.get(e)){var s=a.a.get(e);o[e]=s,t(s)}else Object(i.g)({url:"".concat(Object(r.b)(),"shorten"),data:{url:encodeURIComponent(e)},success:function(n){var i=n.url;o[e]=i,a.a.set(e,i),t(i)},error:n})}))}},MrcO:function(e,t,n){"use strict";n("hHhE"),n("9VmF"),n("8+KV"),n("rGqo"),n("yt8O"),n("RW0V");var a=n("lwsE"),i=n.n(a),r=n("W8MJ"),o=n.n(r),s=n("a1gu"),c=n.n(s),l=n("Nsbk"),u=n.n(l),m=n("7W2i"),d=n.n(m),p=n("oShl"),h=n.n(p),f=n("MVZn"),v=n.n(f),y=n("lSNA"),b=n.n(y),S=n("eOGF"),w=function(e){function t(){return i()(this,t),c()(this,u()(t).apply(this,arguments))}return d()(t,e),o()(t,[{key:"setItem",value:function(e,t){this[e]=t}},{key:"getItem",value:function(e){return this[e]}},{key:"removeItem",value:function(e){delete this[e]}}]),t}(h()(Object)),k=new(function(){function e(t,n){var a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i()(this,e),b()(this,"dbName",void 0),b()(this,"namespace",void 0),b()(this,"intermediateStore",{}),b()(this,"persistentStore",void 0),b()(this,"onWindowUnload",void 0),b()(this,"flushIntervalID",void 0);var o=r.namespace,s=void 0===o?"":o,c=r.persistOnUnload,l=void 0===c||c,u=r.flushInterval,m=void 0===u?3e3:u;this.dbName=n,this.namespace=s,this.persistentStore=t,!s&&n&&this.initBaseStore(l,n),this.flushIntervalID=setInterval((function(){return a.flush()}),m)}return o()(e,[{key:"initBaseStore",value:function(e,t){var n=this;try{var a=this.persistentStore.getItem(t);if(a){var i=JSON.parse(a);this.intermediateStore=i}}catch(e){this.intermediateStore={}}e&&!Object(S.I)()&&window.addEventListener("beforeunload",(function(){return n.flush()}))}},{key:"flush",value:function(){try{this.persistentStore.setItem(this.dbName,JSON.stringify(this.intermediateStore))}catch(e){console.error(e)}}},{key:"getKey",value:function(e){return this.namespace?"".concat(this.namespace,"-").concat(e):e}},{key:"setItem",value:function(e,t){this.intermediateStore[this.getKey(e)]=t}},{key:"getItem",value:function(e){return this.intermediateStore[this.getKey(e)]}},{key:"set",value:function(e,t){return this.setItem(e,t)}},{key:"get",value:function(e){return this.getItem(e)}},{key:"removeItem",value:function(e){delete this.intermediateStore[this.getKey(e)]}},{key:"deleteKey",value:function(e){return this.removeItem(e)}},{key:"storageObj",value:function(){return v()({},this.intermediateStore)}},{key:"index",value:function(){return Object.keys(this.intermediateStore)}},{key:"removePrefix",value:function(e){var t=this;Object.keys(this.intermediateStore).forEach((function(n){n.startsWith(e)&&delete t.intermediateStore[n]}))}},{key:"createNamespace",value:function(e){if(!e)throw new Error("Cannot create storage without namespace");return Object.create(this,{namespace:{value:this.getKey(e)}})}},{key:"remove",value:function(){this.namespace&&this.removePrefix(this.namespace)}}]),e}())("undefined"==typeof localStorage?new w:localStorage,"jStorage");"undefined"!=typeof window&&(window.jStorage=k,window.$=window.$||{},window.$.jStorage=k);t.a=k},UTUX:function(e,t,n){},gNz3:function(e,t,n){},iiin:function(e,t,n){"use strict";var a=n("pVnL"),i=n.n(a),r=n("QILm"),o=n.n(r),s=n("cDcd"),c=n.n(s),l=n("TSYQ"),u=n.n(l),m=n("vN+2"),d=n.n(m);n("gNz3");function p(e){var t=e.iconProps,n=e.size,a=e.btnText,r=e.tooltip,s=e.Icon,l=e.disabled,m=e.className,p=o()(e,["iconProps","size","btnText","tooltip","Icon","disabled","className"]),h=r&&!l?{"data-balloon":a,"data-balloon-pos":"up"}:{},f=l?d.a:e.onClick;return c.a.createElement("button",i()({className:u()("ui-icon-btn","ui-btn-".concat(n),m),disabled:l},h,p,{onClick:f}),!r&&c.a.createElement("span",{className:"sr-only"},a),c.a.createElement(s,i()({"aria-hidden":!0,focusable:"false"},t)))}p.defaultProps={iconProps:{},size:"normal",tooltip:!0,disabled:!1},t.a=p},nB3z:function(e,t,n){"use strict";var a=n("lwsE"),i=n.n(a),r=n("W8MJ"),o=n.n(r),s=n("a1gu"),c=n.n(s),l=n("Nsbk"),u=n.n(l),m=n("PJYZ"),d=n.n(m),p=n("7W2i"),h=n.n(p),f=n("lSNA"),v=n.n(f),y=n("cDcd"),b=n("vN+2"),S=n.n(b),w=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=c()(this,(e=u()(t)).call.apply(e,[this].concat(r))),v()(d()(n),"currentPromise",null),v()(d()(n),"failedCount",0),v()(d()(n),"state",{optimisticState:n.props.initialValue}),v()(d()(n),"handleToggle",(function(e){var t=!n.state.optimisticState;n.setState({optimisticState:t});var a=n.props.action(t,e);n.currentPromise=a,a.catch((function(e){n.failedCount++,n.currentPromise===a&&n.setState((function(e){return{optimisticState:n.failedCount%2==0?e.optimisticState:!e.optimisticState}}),(function(){n.failedCount=0}))}))})),n}return h()(t,e),o()(t,[{key:"render",value:function(){return this.props.children(this.state.optimisticState,this.handleToggle)}}]),t}(y.Component);v()(w,"defaultProps",{initialValue:!1,action:S.a}),t.a=w},oOaF:function(e,t,n){"use strict";var a=n("pVnL"),i=n.n(a),r=n("QILm"),o=n.n(r),s=n("cDcd"),c=n.n(s),l=n("TSYQ"),u=n.n(l),m=n("vN+2"),d=n.n(m),p=n("nB3z"),h=n("OEX3");n("F39y");function f(e){var t=e.initialValue,n=e.className,a=e.label,r=e.onClick,s=o()(e,["initialValue","className","label","onClick"]);return c.a.createElement(p.a,{initialValue:t,action:r},(function(e,t){var r=e?"star-icon-filled":"",o=e?"ui-icon-star-filled":"ui-icon-star";return c.a.createElement(h.c,i()({"aria-label":a(e),className:"star-button",onClick:t},s),c.a.createElement("i",{className:u()(n,"star-icon",o,r)}))}))}f.defaultProps={initialValue:!1,label:function(e){return e?"Unstar":"Star"},onClick:d.a},t.a=f},ve2B:function(e,t,n){"use strict";var a=n("lwsE"),i=n.n(a),r=n("W8MJ"),o=n.n(r),s=n("a1gu"),c=n.n(s),l=n("Nsbk"),u=n.n(l),m=n("7W2i"),d=n.n(m),p=n("lSNA"),h=n.n(p),f=n("cDcd"),v=n.n(f),y=n("TSYQ"),b=n.n(y),S=n("OEX3"),w=n("3N0A"),k=n("Q9J+"),N=(n("H4Rz"),function(e){function t(){return i()(this,t),c()(this,u()(t).apply(this,arguments))}return d()(t,e),o()(t,[{key:"componentDidUpdate",value:function(){this.shouldHideScrollBar()?k.a.hideScrollBars():k.a.showScrollBars()}},{key:"componentWillUnmount",value:function(){k.a.showScrollBars()}},{key:"shouldShowOverlay",value:function(){var e=this.props,t=e.open,n=e.overlay;return t&&n}},{key:"shouldHideScrollBar",value:function(){var e=this.props,t=e.open,n=e.type,a=e.popupTarget;return(this.shouldShowOverlay()||t&&"full-screen"===n)&&!a}},{key:"renderPopup",value:function(){var e=this.props,t=e.children,n=e.type,a=e.handleClose,i=e.className,r=e.popupTarget,o=this.shouldShowOverlay();return v.a.createElement(w.a,{target:r},v.a.createElement("div",{className:b()("fab-popup",i)},o&&v.a.createElement("div",{className:"fab-popup-overlay",onClick:a}),v.a.createElement("div",{className:b()("fab-popup-content","fab-popup-".concat(n))},t)))}},{key:"renderPopupHandle",value:function(){var e=this.props,t=e.icon,n=e.handleOpen,a=e.active;return v.a.createElement(S.d,{className:b()("fab-popup-handle",a?"active":"default"),onClick:n},v.a.createElement("i",{className:b()(t,"fab-popup-icon")}))}},{key:"render",value:function(){return this.props.open?this.renderPopup():this.renderPopupHandle()}}]),t}(f.PureComponent));h()(N,"defaultProps",{type:"menu",overlay:!0,active:!1}),t.a=N}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_modules~challenge_list~challenge_list_v2~challenge~interview-f3389a7ecb.js.map