(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{F63q:function(e,t,a){},HeyA:function(e,t,a){"use strict";a.r(t);var n=a("pVnL"),c=a.n(n),r=a("QILm"),o=a.n(r),l=a("cDcd"),i=a.n(l),u=a("MGin"),d=a("TSYQ"),s=a.n(d),b=a("YZNL"),m=a("OEX3"),p=a("eOGF"),f=a("aJtI");a("JszF");function j(e){var t=e.fullWidth,a=e.query,n=void 0===a?{}:a,r=e.prefetchProps,l=o()(e,["fullWidth","query","prefetchProps"]),d=Object(p.b)("/jobs/search",n);return i.a.createElement(f.a,c()({url:d},r),i.a.createElement(u.Link,c()({to:d,className:s()("job-promo-card",{"full-width":t}),"data-analytics":"ViewJob","data-attr1":"All","data-event-category":"HRC Jobs","data-event-label":"ViewAllJobs"},l),i.a.createElement(b.a,{layer:1,active:!0},i.a.createElement("div",null,i.a.createElement("h2",{className:"job-promo-card-title"},"Find Your Dream Job"),i.a.createElement("p",{className:"job-promo-card-text"},"Update your profile and apply to multiple companies.")),i.a.createElement(m.f,null,"View All Jobs"))))}j.defaultProps={prefetchProps:{}},t.default=j},JszF:function(e,t,a){},aVRc:function(e,t,a){},cSw4:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return p}));a("bWfx"),a("rGqo"),a("yt8O"),a("hhXQ");var n=a("peh1"),c=a("eOGF"),r=a("kGgQ"),o=function(e){return e.community.jobs},l=Object(n.createSelector)([o],(function(e){return Object.values(e.companies)})),i=Object(n.createSelector)([function(e,t){return t.appUtil.location}],(function(e){return Object(c.u)(e)})),u=Object(n.createSelector)([o],(function(e){return e.list})),d=Object(n.createSelector)([o],(function(e){return e.filtered})),s=Object(n.createSelector)([d,i],(function(e,t){var a=t||{},n=a.role,c=a.zones;return e[JSON.stringify({role:n,zones:c})]})),b=function(){return Object(n.createSelector)([u,s,r.f],(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.total,n=t.list,c=arguments.length>2?arguments[2]:void 0;return{total:a,jobs:(n||[]).map((function(t){return e[t]})),triedAllSkillsVerificationTests:c}}))},m=function(e){return Object(n.createSelector)([o],(function(t){var a=t.recommended;return{jobIds:(a[e]||{}).list,didInvalidate:a.didInvalidate}}))},p=function(e){return Object(n.createSelector)([u,m(e)],(function(e,t){var a=t.jobIds,n=t.didInvalidate;return{jobs:a?a.map((function(t){return e[t]})):null,didInvalidate:n}}))}},goSp:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("MVZn"),c=a.n(n),r=a("cDcd"),o=a.n(r),l=a("MGin"),i=a("YZNL"),u=a("eOGF"),d=a("aJtI"),s=a("5J+W"),b=a("bIS8"),m=a("xaeT");a("aVRc");function p(e){var t=e.active,a=void 0!==t&&t,n=e.job,c=e.job,r=c.title,l=c.company_name,u=c.company_new_logo,d=c.company_background_color,s=e.children,p=Object(m.k)(n),f=Object(m.i)(n);return o.a.createElement(i.a,{layer:1,active:a},o.a.createElement("div",{className:"job-card-logo-wrapper",style:{backgroundColor:d}},o.a.createElement("img",{className:"job-card-logo",src:u,alt:"".concat(l,"'s logo")})),o.a.createElement("div",{className:"job-card-content"},o.a.createElement("h2",{className:"job-card-title"},r),o.a.createElement("span",{className:"job-card-company-name"},o.a.createElement("i",{className:"ui-icon-building"}),l),o.a.createElement("ul",{className:"job-card-detail"},o.a.createElement("li",{className:"job-card-field"},o.a.createElement(b.LocationIcon,null),p),f&&o.a.createElement("li",{className:"job-card-field","data-automation":"experience-label"},o.a.createElement(b.EmploymentIcon,null),f)),s))}t.b=Object(s.a)((function(e){var t=e.job,a=e.job,n=a.unique_id,r=a.company_slug,i=e.position,s=e.query,b=void 0===s?{}:s,m=e.prefetchProps,f=e.appUtil.location,j=Object(u.b)("/companies/".concat(r,"/jobs/").concat(n),c()({},f.query,b)),v=c()({url:j,shouldPrefetch:!1},m);return o.a.createElement(d.a,v,o.a.createElement(l.Link,{to:j,className:"job-card","data-analytics":"ViewJob","data-attr1":n,"data-attr8":i,"data-event-category":"HRC Jobs","data-event-label":"JobCard","data-cd-card-position":i,"data-cd-company-slug":r,"data-cd-job-unique-id":n},o.a.createElement(p,{job:t,active:!0})))}))}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_commons~skills_verification~skills_verification_test~jobs~dashboard-acc1f32766.js.map