(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"5Sap":function(t,e,n){"use strict";n.r(e),n.d(e,"makeContestChallengesProps",(function(){return k})),n.d(e,"mapDispatchToProps",(function(){return v})),n.d(e,"mergeProps",(function(){return w}));var r=n("MVZn"),c=n.n(r),o=(n("bWfx"),n("/MKj")),l=n("fvjX"),u=n("peh1"),i=n("iGQG"),a=n("5J+W"),s=n("eOGF"),f=n("cK/l"),g=n("LNHK"),p=n("rw7i"),h=n("Z/B0"),b=function(t){return t.community.profile},m=function(t,e){return e.appUtil.params},j=function(t){return t.community.challenges.contestChallengeList},C=function(t){return t.community.challenges.challengeList},O=Object(u.createSelector)([function(t,e){return e.appUtil.location}],(function(t){return Object(s.u)(t).filters})),d=function(t){return t.community.contests.allContest.contest},k=function(){return Object(u.createSelector)([b,f.g,C,O,m,d,j],(function(t,e,n,r,c,o,l){var u=c.contestSlug,i=o[u],a=l[Object(f.j)(u,r)]||{},s=a.list,g=void 0===s?[]:s,p=a.total;return{challenges:g.map((function(t){return e[Object(f.k)(t,i.slug)]})),currentChallengesCount:g.length,totalChallenges:p||0,profile:t,filters:r,contest:i,listType:h.b.CONTEST}}))},v=function(t){return{challengeActions:Object(l.b)(g.a,t)}},w=function(t,e,n){var r=t.filters,o=t.currentChallengesCount,l=t.contest;return c()({},t,e,n,{loadChallenges:function(){return e.challengeActions.getContestChallengeList({filters:r,contestSlug:l.slug,limit:10,offset:o})}})},y=Object(l.d)(a.a,i.b,Object(o.b)(k(),v,w))(p.a);e.default=y},m1sg:function(t,e,n){"use strict";n.r(e),n.d(e,"makeBookmarkChallengesProps",(function(){return C})),n.d(e,"mapDispatchToProps",(function(){return O})),n.d(e,"mergeProps",(function(){return d}));var r=n("MVZn"),c=n.n(r),o=(n("bWfx"),n("/MKj")),l=n("fvjX"),u=n("peh1"),i=n("iGQG"),a=n("5J+W"),s=n("eOGF"),f=n("cK/l"),g=n("Z/B0"),p=n("LNHK"),h=n("rw7i"),b=function(t){return t.community.profile},m=Object(u.createSelector)([function(t,e){return e.appUtil.location}],(function(t){return Object(s.u)(t).filters})),j=function(t){return t.community.challenges.bookmarks},C=function(){return Object(u.createSelector)([b,j,f.g,m],(function(t,e,n,r){var c=e[Object(f.c)(r)]||{},o=c.list,l=void 0===o?[]:o,u=c.total;return{challenges:l.map((function(t){return n[Object(f.k)(t,"master")]})),currentChallengesCount:l.length,profile:t,listType:g.b.BOOKMARK,filters:r,totalChallenges:u||0}}))},O=function(t){return{challengeActions:Object(l.b)(p.a,t)}},d=function(t,e,n){var r=t.filters,o=t.currentChallengesCount;return c()({},t,e,n,{loadChallenges:function(){return e.challengeActions.getBookmarkChallengeList({filters:r,limit:10,offset:o})}})},k=Object(l.d)(a.a,i.b,Object(o.b)(C(),O,d))(h.a);e.default=k}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_challenge_list_v2-3563a574f6.js.map