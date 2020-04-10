(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"+KS9":function(e,t,a){"use strict";var n=a("lwsE"),s=a.n(n),r=a("W8MJ"),i=a.n(r),o=a("a1gu"),c=a.n(o),l=a("Nsbk"),d=a.n(l),m=a("PJYZ"),u=a.n(m),p=a("7W2i"),h=a.n(p),v=a("lSNA"),f=a.n(v),g=a("cDcd"),b=a.n(g),y=a("17x9"),E=a.n(y),C=a("wd/R"),k=a.n(C),N=a("xNbf"),w=a("eOGF"),L=function(e){function t(e){var a;return s()(this,t),a=c()(this,d()(t).call(this,e)),f()(u()(a),"state",void 0),f()(u()(a),"intervalObject",void 0),f()(u()(a),"onTimerEnd",(function(){a.props.onTimerEnd()})),a.state={timeRemaining:""},a.intervalObject=null,a}return h()(t,e),i()(t,[{key:"componentDidMount",value:function(){var e=this;this.setNewTimeDiff(),this.intervalObject=setInterval((function(){e.setNewTimeDiff()}),1e3)}},{key:"componentWillUnmount",value:function(){this.clearIntervalObj()}},{key:"clearIntervalObj",value:function(){this.intervalObject&&clearInterval(this.intervalObject)}},{key:"setNewTimeDiff",value:function(){var e=this.props.finishTimeMs-(new Date).getTime();if(e<=0)return this.clearIntervalObj(),void this.onTimerEnd();var t=k.a.duration(e);if(t.days()>0)this.setState({timeRemaining:b.a.createElement("span",{className:"countdowntimer-days"},"".concat(t.days()," ").concat(t.days()>1?"days":"day"))});else{var a=Object(w.r)(t.hours()),n=Object(w.r)(t.minutes()),s=Object(w.r)(t.seconds()),r=b.a.createElement("span",{className:"countdowntimer-clock"},b.a.createElement("span",{className:"countdowntimer-hours"},a),":",b.a.createElement("span",{className:"countdowntimer-minutes"},n),":",b.a.createElement("span",{className:"countdowntimer-seconds"},s));this.setState({timeRemaining:r})}}},{key:"render",value:function(){var e=this.state.timeRemaining,t=this.props.className;return""===e?b.a.createElement(N.a,{className:"countdowntimer-loader",diameter:16}):b.a.createElement("span",{className:t},this.state.timeRemaining)}}]),t}(b.a.Component);f()(L,"propTypes",{finishTimeMs:E.a.number.isRequired,onTimerEnd:E.a.func}),f()(L,"defaultProps",{onTimerEnd:function(){}}),t.a=L},"8Nfx":function(e,t,a){},E4DP:function(e,t,a){},"H+te":function(e,t,a){},IHEK:function(e,t,a){},PKJS:function(e,t,a){},Vspg:function(e,t,a){},XDuw:function(e,t,a){},lrHr:function(e,t,a){"use strict";var n=a("pVnL"),s=a.n(n),r=a("QILm"),i=a.n(r),o=a("cDcd"),c=a.n(o),l=a("TSYQ"),d=a.n(l);a("oLQN");t.a=function(e){var t=e.className,a=e.label,n=e.checked,r=e.error,o=i()(e,["className","label","checked","error"]),l=c.a.createElement("div",{className:"radio-wrap"},c.a.createElement("input",s()({type:"radio",className:"radio-input",checked:n},o)),c.a.createElement("span",{className:d()("custom-holder",{error:r})}));return c.a.createElement("div",{className:d()("ui-radio",{checked:n},t)},a?c.a.createElement("label",{className:"label-wrap"},l,c.a.createElement("div",{className:"label"},a)):l)}},nxGB:function(e,t,a){"use strict";a.r(t),a.d(t,"ContestTimer",(function(){return x}));a("eM6i");var n=a("lwsE"),s=a.n(n),r=a("W8MJ"),i=a.n(r),o=a("a1gu"),c=a.n(o),l=a("Nsbk"),d=a.n(l),m=a("PJYZ"),u=a.n(m),p=a("7W2i"),h=a.n(p),v=a("lSNA"),f=a.n(v),g=a("cDcd"),b=a.n(g),y=a("17x9"),E=a.n(y),C=a("/MKj"),k=a("fvjX"),N=a("TSYQ"),w=a.n(N),L=a("5J+W"),S=a("eOGF"),T=a("qePO"),D=a("+KS9"),x=(a("XDuw"),function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=c()(this,(e=d()(t)).call.apply(e,[this].concat(r))),f()(u()(a),"state",{timerEnded:!1}),f()(u()(a),"handleTimerEnd",(function(){a.setState({timerEnded:!0})})),a}return h()(t,e),i()(t,[{key:"renderTimerWithTooltip",value:function(){var e=this.props.contest,t=1e3*Object(T.c)(e)+Date.now(),a=b.a.createElement(D.a,{finishTimeMs:t,onTimerEnd:this.handleTimerEnd,className:"contest-countdown"});return b.a.createElement("div",{className:"contest-remaining-time"},b.a.createElement("span",{"data-balloon":Object(S.n)(t,!0),"data-balloon-pos":"left"},a))}},{key:"renderContestStatus",value:function(e){return b.a.createElement("span",null,b.a.createElement("span",{className:"text-sec-headline-xs"},e),this.renderTimerWithTooltip())}},{key:"renderContestTimer",value:function(){var e=this.props.contest,t=e.track,a=e.started,n=e.can_be_viewed,s=t&&"tutorials"===t.track_slug,r=Object(T.c)(e);return b.a.createElement("div",{className:"contest-status"},a?r>0&&this.renderContestStatus("Contest ends in"):s&&!n?this.renderContestStatus("Unlocks in"):this.renderContestStatus("The contest has not yet started. It begins in"))}},{key:"renderContestUserTimer",value:function(){var e,t=this.props.contest,a=t.started,n=1e3*t.effective_epoch_endtime-t.apiTime;return a&&!Object(T.g)(t)&&(e=n<0?b.a.createElement("span",{"data-balloon":"Further submissions made by you in the contest won't affect leaderboard.","data-balloon-pos":"left"},b.a.createElement("span",{className:"text-sec-headline-xs contest-timer-warning"},b.a.createElement("i",{className:"ui-icon-lock"}),"Your time limit has expired")):b.a.createElement("span",null,b.a.createElement("span",{className:"text-sec-headline-xs"},"Your remaining time"),b.a.createElement("div",{className:"contest-remaining-time"},b.a.createElement("span",{"data-balloon":"Each contestant gets ".concat(Object(S.W)(t.hacker_timelimit)," to complete this contest."),"data-balloon-pos":"left"},b.a.createElement(D.a,{finishTimeMs:1e3*t.effective_epoch_endtime,onTimerEnd:this.handleTimerEnd,className:"contest-countdown"}))))),b.a.createElement("div",{className:"contest-status"},a?b.a.createElement("span",null,e):b.a.createElement("span",null,b.a.createElement("h2",{className:"text-sec-headline-xs"},"The contest has not yet started.")))}},{key:"render",value:function(){var e=this.props,t=e.contest,a=e.className;return b.a.createElement("div",{className:w()("contest-timer-wrapper",a)},t.time_limited_contest&&this.renderContestUserTimer(),!Object(T.g)(t)&&this.renderContestTimer())}}]),t}(g.Component));f()(x,"propTypes",{contest:E.a.object.isRequired,className:E.a.string}),t.default=Object(k.d)(L.a,Object(C.b)((function(e,t){var a=t.appUtil.params.contestSlug;return{contest:Object(T.a)(a,e)}})))(x)},o3IM:function(e,t,a){"use strict";var n=a("pVnL"),s=a.n(n),r=a("QILm"),i=a.n(r),o=a("cDcd"),c=a.n(o),l=a("TSYQ"),d=a.n(l);a("Vspg");function m(e){var t=e.text,a=e.onDelete,n=e.removable,r=e.size,o=e.className,l=i()(e,["text","onDelete","removable","size","className"]);return c.a.createElement("div",s()({className:d()("ui-tag",r,o)},l),c.a.createElement("span",{className:"tag-text ellipsis"},t),n&&c.a.createElement("span",{className:"delete",onClick:function(e){e.stopPropagation(),a(e)}},c.a.createElement("i",{className:"ui-icon-cross"})))}m.defaultProps={onDelete:function(){},removable:!0,size:"medium"},t.a=m},oLQN:function(e,t,a){},rAWl:function(e,t,a){"use strict";a.r(t),a.d(t,"PureContestLeaderboard",(function(){return S}));var n=a("lwsE"),s=a.n(n),r=a("W8MJ"),i=a.n(r),o=a("a1gu"),c=a.n(o),l=a("Nsbk"),d=a.n(l),m=a("7W2i"),u=a.n(m),p=a("lSNA"),h=a.n(p),v=a("cDcd"),f=a.n(v),g=a("17x9"),b=a.n(g),y=a("/MKj"),E=a("fvjX"),C=a("qePO"),k=a("5J+W"),N=a("lyz7"),w=a("cW2f"),L=a("9q+v"),S=(a("8Nfx"),function(e){function t(){return s()(this,t),c()(this,d()(t).apply(this,arguments))}return u()(t,e),i()(t,[{key:"getFreezeTimeMinutes",value:function(){var e=this.props.contest,t=e.leaderboard_freeze_time,a=e.epoch_endtime;if(t){var n=(new Date(1e3*a)-new Date(t))/6e4;return Math.max(n,0)}return 0}},{key:"renderContestHeader",value:function(){var e=this.props.contest.leaderboard_broadcast_message;return f.a.createElement(v.Fragment,null,e&&f.a.createElement("div",{className:"banner",dangerouslySetInnerHTML:{__html:e}}))}},{key:"render",value:function(){var e=this.props,t=e.contest,a=e.leaderboard,n=a.pageNo,s=a.total,r=a.limit;return f.a.createElement("div",{className:"theme-m contest-leaderboard-wrapper"},f.a.createElement("div",{className:"container panes-container plT"},f.a.createElement("div",{className:"left-pane"},f.a.createElement("div",{className:"contest-leaderboard-container"},this.renderContestHeader(),f.a.createElement(N.a,{className:"contest-leaderboard",contest:t,leaderboard:a,leaderboardType:"ContestLeaderboard",freezeTimeMinutes:this.getFreezeTimeMinutes()})),!!s&&f.a.createElement(w.a,{totalItems:s,currentPage:n,itemPerPage:r,className:"leaderboard-pagination"})),f.a.createElement("aside",{className:"right-pane"},f.a.createElement(L.a,{leaderboard:a,filterLocation:"ContestLeaderboard"}))))}}]),t}(v.Component));h()(S,"propTypes",{contest:b.a.object.isRequired,appUtil:b.a.object.isRequired,otherLeaderboard:b.a.bool,leaderboard:b.a.object.isRequired}),t.default=Object(E.d)(k.a,Object(y.b)((function(e,t){var a=t.appUtil.params.contestSlug,n=void 0===a?"master":a;return{contest:Object(C.a)(n,e),leaderboard:e.community.contests.contestLeaderboard[n].leaderboard}})))(S)},sISB:function(e,t,a){"use strict";a.r(t);a("Vd3H"),a("bWfx"),a("8+KV"),a("rGqo"),a("yt8O"),a("RW0V"),a("0l/t"),a("V+eJ"),a("91GP"),a("CX2u");var n=a("lwsE"),s=a.n(n),r=a("W8MJ"),i=a.n(r),o=a("a1gu"),c=a.n(o),l=a("Nsbk"),d=a.n(l),m=a("PJYZ"),u=a.n(m),p=a("7W2i"),h=a.n(p),v=a("lSNA"),f=a.n(v),g=a("cDcd"),b=a.n(g),y=a("17x9"),E=a.n(y),C=a("/MKj"),k=a("fvjX"),N=a("5J+W"),w=a("oBtd"),L=a.n(w),S=a("dAq8"),T=(a("xfY5"),a("MGin")),D=(a("f3/d"),a("MVZn")),x=a.n(D),j=a("pVnL"),_=a.n(j),P=(a("jqX0"),a("LlRK")),O=a.n(P),A=a("TSYQ"),R=a.n(A),M=a("xeH2"),F=a.n(M),I=a("f0Wu"),U=a.n(I),q=a("iGQG"),W=a("eOGF"),B=a("O766"),V=a("wqqT"),J=a("p0DI"),K=a("fv1W"),H=a("qePO"),z=(a("zszX"),function(e){function t(){var e;return s()(this,t),e=c()(this,d()(t).call(this)),f()(u()(e),"expandContest",(function(t){F()(t.target).is("a,button")||e.props.expandContest(e.props.contest.id)})),f()(u()(e),"expandContestOnKey",(function(t){"space"!==t.key&&"enter"!==t.key||e.expandContest(t)})),f()(u()(e),"signupContest",(function(){e.setState({signingUp:!0});var t=e.props,a=t.contestActions,n=t.contest,s=t.appUtil.goto,r=n.slug;a.signupContest(r).then((function(t){e.setState({signingUp:!1}),t.country_allowed?t.status?s("/contests/".concat(r)):e.setState({modalError:{title:"",body:t.message}}):e.setState({modalError:{title:"Country Not Allowed",body:"Sorry, it seems like you are trying to access the contest from ".concat(t.current_country,".\n               But this contest is only available for users who live in ").concat(t.allowed_countries,".")}})}))})),f()(u()(e),"login",(function(){e.setState({openAuthModal:!0})})),f()(u()(e),"closeAuthModal",(function(){e.setState({openAuthModal:!1})})),e.state={},e}return h()(t,e),i()(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.detailedListLoaded!==e.detailedListLoaded;this.props.detailedListLoaded&&(!this.props.open||e.open&&!t?!this.props.open&&e.open&&F()(this.refs.contestDetail).stop().slideUp():F()(this.refs.contestDetail).stop().slideDown())}},{key:"openIndefinitely",value:function(){return this.props.contest.time_left/31536e3>1}},{key:"getContestStatus",value:function(){return this.props.contest.ended?"Archived":"Active"}},{key:"getRelevantTime",value:function(){var e=this.props.contest,t=e.time_left;return t?new Date(e.apiTime+1e3*t):""}},{key:"getButtonAttributes",value:function(){var e=this.props,t=e.contest,a=e.profile,n=t.started,s=t.slug,r=t.track,i=t.challenges_count,o=this.getContestStatus(),c=!!a.username;return{"data-analytics":"ContestCardSignupLink","data-attr2":o,"data-attr1":s,"data-attr3":r?r.slug:"","data-attr7":i,"data-attr4":c,"data-attr11":n}}},{key:"renderDateMicroData",value:function(){var e=this.props.contest,t=e.epoch_starttime,a=e.epoch_endtime,n=new Date(1e3*t).toISOString(),s=new Date(1e3*a).toISOString(),r=Object(W.p)(n,s);return b.a.createElement("span",null,b.a.createElement("meta",{itemProp:"startDate",content:n}),b.a.createElement("meta",{itemProp:"endDate",content:s}),b.a.createElement("meta",{itemProp:"duration",content:r}))}},{key:"renderRelevantTime",value:function(e){var t=this.getRelevantTime();return t?b.a.createElement("span",null,e&&this.renderDateMicroData(),b.a.createElement(J.a,null,b.a.createElement("time",{className:"timeago",dateTime:t.toISOString()},b.a.createElement(O.a,{date:t})))):null}},{key:"renderStartTime",value:function(){var e=this.props.contest.epoch_starttime;return b.a.createElement("span",null,this.renderDateMicroData(),b.a.createElement(J.a,null,b.a.createElement("time",{className:"timeago",dateTime:U()(1e3*e).format("MMM DD YYYY")},Object(W.n)(1e3*e,!0))))}},{key:"renderContestStatus",value:function(){var e=this.openIndefinitely();return b.a.createElement("div",{className:"mxst contest-status span-md-5 head-col"},b.a.createElement("span",{className:"fnt-sz-small txt-navy"},e?"Open Indefinitely":this.renderStartTime()))}},{key:"renderHeaderButtons",value:function(){var e=this.props,t=e.contest,a=e.profile,n=t.ended,s=t.started,r=t.skip_signup,i=t.signed_up,o=t.additional_details_required,c=t.domain_restrictions,l=t.has_codesprint_reg_page,d=t.ask_jobs_profile,m=t.slug,u=t.version,p=this.state.signingUp,h=a.is_admin,v=!!a.username,f=this.getButtonAttributes(),g=[],y=Object(H.d)(m),E="v3"===u;if(n)if(g.push(b.a.createElement("span",{key:"endedText",className:"txt-alt-grey details-link"},"Ended")),!i&&(o||c||l||d))g.push(b.a.createElement(T.Link,_()({key:"viewChallenge",className:"btn signup-auth btn-neutral-new",to:"/auth/signup/".concat(m)},f),"View Challenges"));else if(v)if(i){var C=x()({},f,{key:"viewChallenge",className:"btn btn-neutral-new"});y?g.push(b.a.createElement(T.Link,_()({to:"/contests/".concat(m,"/challenges")},C),"View Challenges")):g.push(b.a.createElement("a",_()({href:"/contests/".concat(m,"/challenges")},C),"View Challenges"))}else g.push(b.a.createElement("button",_()({key:"viewChallenge",className:"btn contest-signup btn-neutral-new",disabled:p,onClick:this.signupContest},f),p?"Signing up...":"View Challenges"));else g.push(b.a.createElement("button",_()({key:"viewChallenge",className:"btn login btn-neutral-new",onClick:this.login},f),"View Challenges"));else if(E)if(i){var k="/contests/".concat(m,"/challenges");g.push(b.a.createElement(T.Link,{to:k,className:"details-link",id:m,key:m},"View Details")),g.push(b.a.createElement(T.Link,_()({key:"signup",className:"btn btn-flat btn-primary-new btn-line-new",to:k},f),"Enter"))}else{var N="/contestlanding/".concat(m,"/welcome");g.push(b.a.createElement(T.Link,{to:N,className:"details-link",id:m,key:m},"View Details")),g.push(b.a.createElement(T.Link,_()({key:"signup",className:"btn login btn-flat btn-primary-new",to:N},f),"Sign Up"))}else{if("projecteuler"===m)g.push(b.a.createElement(T.Link,{to:"/contests/".concat(m),className:"details-link",id:"".concat(m),key:"".concat(m)},"View Details"));else{var w={key:"viewDetail",className:"details-link"};y?g.push(b.a.createElement(T.Link,_()({},w,{to:"/contests/".concat(m)}),"View Details")):g.push(b.a.createElement("a",_()({},w,{href:"/".concat(m)}),"View Details"))}r?g.push(b.a.createElement("a",_()({key:"signup",className:"btn btn-flat btn-primary-new",href:"/".concat(m)},f),"Sign Up")):!i&&(o||c||l||d)?g.push(b.a.createElement("a",_()({key:"signup",className:"btn signup-auth btn-flat btn-primary-new",href:"/auth/signup/".concat(m)},f),"Sign Up")):v||n?i||n||h?s||h?g.push(b.a.createElement("a",_()({key:"enter",className:"btn btn-flat btn-primary-new btn-line-new",href:"/contests/".concat(m,"/challenges")},f),"Enter")):g.push(b.a.createElement("span",{key:"signedup",className:"xsmall inline-block msT msB text-center signed-up"},b.a.createElement("i",{className:"icon-ok-circled txt-green"}),"Signed Up")):g.push(b.a.createElement("button",_()({key:"signup",className:"btn contest-signup btn-flat btn-primary-new",disabled:p,onClick:this.signupContest},f),p?"Signing up...":"Sign Up")):g.push(b.a.createElement("button",_()({key:"signup",className:"btn login btn-flat btn-primary-new"},f,{onClick:this.login}),"Sign Up"))}return b.a.createElement("div",{className:"contest-item-buttons head-col"},g)}},{key:"renderContestDetail",value:function(){if(!this.props.detailedListLoaded)return null;var e=this.props.contest,t=e.ended,a=e.slug,n=e.description_html,s=e.rated,r=this.openIndefinitely();return b.a.createElement("div",{ref:"contestDetail",className:"contest-detail contest-tab-expand-content only-desc","data-slug":a},b.a.createElement("div",{className:"rated-contest-text bold pmB"},s?"Rated Contest":"Unrated Contest"),t||r?b.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}):b.a.createElement("div",null,b.a.createElement("p",{itemProp:"description",dangerouslySetInnerHTML:{__html:n}}),b.a.createElement("meta",{itemProp:"url",content:"https://www.hackerrank.com/".concat(a,"/??utm_source=google&amp;utm_medium=search&amp;utm_campaign=SEO")})))}},{key:"contestName",value:function(){var e=this.props.contest,t=e.name,a=e.ended,n=this.openIndefinitely();return b.a.createElement("div",{className:R()("contest-name head-col truncate",a?"txt-alt-grey":"txt-navy")},a||n?t:b.a.createElement("span",{itemProp:"name"},t))}},{key:"errorDialog",value:function(){var e=this,t=this.state.modalError;return t&&b.a.createElement(B.a,{modalClass:"signup-error",title:t.title,open:!0,onClose:function(){return e.setState({modalError:null})}},b.a.createElement("div",{className:"block-center text-center"},t.body))}},{key:"render",value:function(){var e=this,t=this.props,a=t.contest,n=t.open,s=t.detailedListLoaded,r=a.ended,i=a.slug,o=this.state.openAuthModal,c=r?"Archived":"Active";return b.a.createElement("li",{key:a.id,className:R()("contests-list-view mdB",{open:n,loading:n&&!s})},n&&!s&&b.a.createElement(V.a,{className:"contest-loader",diameter:32,color:"#FFFFFF"}),b.a.createElement("div",{className:"contest-tab-expander has-buttons",onClick:this.expandContest,onKeyPress:function(t){return("space"===t.key||"enter"===t.key)&&e.expandContest()},"data-slug":i,"data-contest-state":c,role:"button",tabIndex:"0"},this.contestName(),this.renderContestStatus(),this.renderHeaderButtons()),this.renderContestDetail(),this.errorDialog(),o&&b.a.createElement(K.a,{open:!0,onClose:this.closeAuthModal}))}}]),t}(b.a.Component));f()(z,"defaultProps",{open:!1,detailedListLoaded:!1,expandContest:function(){}});z=Object(C.b)((function(e){return{profile:e.community.profile}}),(function(e){return{contestActions:Object(k.b)(S.a,e)}}))(z);var Y=Object(k.d)(q.b,N.a)(z),Q=a("xxD/");a("PKJS");var X=function(e){function t(){return s()(this,t),c()(this,d()(t).apply(this,arguments))}return h()(t,e),i()(t,[{key:"renderContestList",value:function(e){var t=this.props,a=t.detailedListLoaded,n=t.profile,s=t.expandContest,r=t.expandedContest,i=t.contestCategory;return b.a.createElement("ul",{className:{active:"contests-active",archived:"contests-archived",college:"contests-college"}[i]},e.map((function(e){return b.a.createElement(Y,{key:e.id,contest:e,profile:n,detailedListLoaded:a,open:r===e.id,expandContest:s})})))}},{key:"renderActiveContest",value:function(){var e=this.props,t=e.activeContest;return"active"!==e.contestCategory?null:b.a.createElement("div",{className:"active_contests active-contest-container fnt-wt-600"},b.a.createElement("h5",{className:"contest-title"},"Active Contests"),t.length?this.renderContestList(t):b.a.createElement("div",{className:"contests-active"},b.a.createElement("p",{className:"psB psT txt-alt-grey"},b.a.createElement("em",null,"No contest matched your selection, please choose other options"))))}},{key:"renderArchivedContest",value:function(){var e=this.props,t=e.archivedContest,a=e.contestCategory;return"active"!==a&&"archived"!==a?null:b.a.createElement("div",{className:"active_contests archived-contest-container fnt-wt-600"},b.a.createElement("h5",{className:"contest-title plT"},"Archived Contests"),this.renderContestList(t),this.renderLoadingIcon(),"active"===a&&b.a.createElement("p",{className:"plT plB text-center more-archived-contest-container"},b.a.createElement(T.Link,{to:"/contests/archived",className:"backbone","data-analytics":"ContestListShowMoreArchived"},"Show More Archived Contests")))}},{key:"renderCollegeContest",value:function(){var e=this.props,t=e.collegeContest;return"college"!==e.contestCategory?null:b.a.createElement("div",{className:"active_contests college-contest-container fnt-wt-600"},b.a.createElement("h5",{className:"contest-title plT"},"College Contests"),this.renderContestList(t),this.renderLoadingIcon())}},{key:"renderLoadingIcon",value:function(){var e=this.props,t=e.detailedListLoaded,a=e.loading;if(t&&a)return b.a.createElement("div",{className:"hackerrank_spinner_wrap"},b.a.createElement("div",{className:"hackerrank_spinner big"}))}},{key:"render",value:function(){var e=this.props,t=e.contestCategory,a=e.currentPage,n=e.totalItems,s=e.onPageChange;return b.a.createElement("div",{className:"span-md-11 span-lg-12 pjR"},b.a.createElement("div",{className:"contests mlT mjB"},this.renderActiveContest(),this.renderArchivedContest(),this.renderCollegeContest()),"archived"===t||"college"===t?b.a.createElement("div",{className:"pagination-wrapper"},b.a.createElement(Q.a,{itemPerPage:50,currentPage:Number(a)||1,totalItems:n,onPageChange:s})):null)}}]),t}(g.Component);f()(X,"propTypes",{detailedListLoaded:E.a.bool,profile:E.a.object.isRequired,expandContest:E.a.func,expandedContest:E.a.string,contestCategory:E.a.string,activeContest:E.a.array,archivedContest:E.a.array,collegeContest:E.a.array,loading:E.a.bool,currentPage:E.a.oneOfType([E.a.number,E.a.string]),totalItems:E.a.number,onPageChange:E.a.func}),f()(X,"defaultProps",{contestCategory:"active",activeContest:[],archivedContest:[],collegeContest:[],currentPage:1,onPageChange:function(){}});var G=X,Z=(a("IHEK"),function(e){function t(){return s()(this,t),c()(this,d()(t).apply(this,arguments))}return h()(t,e),i()(t,[{key:"renderRatedFilter",value:function(){var e=this.props,t=e.showRatedContest,a=e.showFilters,n=e.applyRatedFilter;if(a)return b.a.createElement("div",{className:"track-item"},b.a.createElement("input",{className:"hr-sleek-input rated-contests",id:"rated-contests",type:"checkbox",checked:t,onChange:function(e){n(e.target.checked)}}),b.a.createElement("label",{className:"rated-contests-label",htmlFor:"rated-contests"},b.a.createElement("span",null),"Rated"))}},{key:"renderDomainFilter",value:function(){var e=this.props,t=e.domains,a=e.applyDomainFilter,n=e.selectedDomains;if(e.showFilters)return b.a.createElement("div",{className:"track-selector"},b.a.createElement("h5",{className:"pjT pmB"},"Filter"),this.renderRatedFilter(),t.map((function(e){var t=e.slug,s=e.name,r="trackcheckbox-filter-".concat(t);return b.a.createElement("div",{className:"track-item",key:t},b.a.createElement("input",{id:r,className:"hr-sleek-input track-select-input",type:"checkbox",checked:!!n[t],onChange:function(e){return a(t,e.target.checked)}}),b.a.createElement("label",{className:"rated-contests-label",htmlFor:r},b.a.createElement("span",null),s))})))}},{key:"renderAdministrationLinks",value:function(){return b.a.createElement("div",{className:"administration-link"},b.a.createElement("h5",{className:"plT pmB"},"Administration"),b.a.createElement("div",{className:"fnt-wt-600 psB msT"},b.a.createElement("a",{href:"/administration/contests/create"},"Create Contest")),b.a.createElement("div",{className:"fnt-wt-600"},b.a.createElement("a",{href:"/administration/contests/"},"Manage Contest")))}},{key:"render",value:function(){return b.a.createElement("div",{className:"contest-list-filter span-md-5 span-lg-4"},this.renderAdministrationLinks(),this.renderDomainFilter(),b.a.createElement("h5",{className:"plT pmB"},"Quick Links"),b.a.createElement("div",{className:"msT mjB"},b.a.createElement("div",{className:"fnt-wt-600 psB"},b.a.createElement(T.Link,{to:"/contests/archived",className:"backbone","data-analytics":"ContestListQuickLinks","data-attr1":"Archived"},"Archived Contest")),b.a.createElement("div",{className:"fnt-wt-600 psB"},b.a.createElement(T.Link,{to:"/contests/college",className:"backbone","data-analytics":"ContestListQuickLinks","data-attr1":"College"},"College Contest")),b.a.createElement("div",{className:"fnt-wt-600 psB"},b.a.createElement("a",{href:"/calendar",className:"backbone","data-analytics":"ContestListQuickLinks","data-attr1":"Calendar"},"Contest Calendar"))))}}]),t}(g.Component));f()(Z,"propTypes",{domains:E.a.array,selectedDomains:E.a.object,showFilters:E.a.bool,showRatedContest:E.a.bool,applyDomainFilter:E.a.func,abTest:E.a.object.isRequired,profile:E.a.object.isRequired}),f()(Z,"defaultProps",{domains:[],selectedDomains:{},showFilters:!0,showRatedContest:!1,applyDomainFilter:function(){}});var $=Z=Object(q.b)(Z);a("H+te");a.d(t,"PureContest",(function(){return te}));var ee=function(e){function t(e){var a;return s()(this,t),a=c()(this,d()(t).call(this,e)),f()(u()(a),"contestXHR",void 0),f()(u()(a),"state",void 0),f()(u()(a),"onPageChange",(function(e){a.setState({loading:!0,currentPage:e})})),f()(u()(a),"expandContest",(function(e){e===a.state.expandedContest&&(e=null),a.setState({expandedContest:e})})),f()(u()(a),"loadContest",(function(){var e=a.state,t=e.selectedDomains,n=e.showRatedContest,s=a.getSelectedDomainAry(t),r=a.props.contestState,i=s.length?s.join("|"):"all";n&&(i+="|rated"),r.active.loadedFilter[i]||(a.setState({loading:!0}),a.props.contestActions.getContestList({contestSlug:"active",filter:s,ratedFilter:n}).finally((function(){a.setState({loading:!1})})))})),f()(u()(a),"applyDomainFilter",(function(e,t){var n=Object.assign({},a.state.selectedDomains,f()({},e,t));a.setState({selectedDomains:n},a.loadContest)})),f()(u()(a),"applyRatedFilter",(function(e){a.setState({showRatedContest:e},a.loadContest),L.a.track("ToggleRatedContests",e)})),a.state={selectedDomains:{},currentPage:e.appUtil.params.pageNo||1},a}return h()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.getDetailedList()}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.appUtil.params.pageNo,a=e.appUtil.params.pageNo;t!==a&&this.setState({loading:!1,currentPage:a||1})}},{key:"getPageInfo",value:function(){var e=this.props.appUtil,t=e.location,a=(e.params,t.pathname),n="active";return-1!==a.indexOf("archived")?n="archived":-1!==a.indexOf("college")&&(n="college"),{contestCategory:n,currentPage:this.state.currentPage}}},{key:"getDetailedList",value:function(){var e=this,t=this.getPageInfo(),a=t.contestCategory,n=t.currentPage;this.props.contestState[a].partialData?this.contestXHR="active"===a?this.props.contestActions.getContestList({contestSlug:"active"}).then((function(){e.setState({detailedListLoaded:!0})})):this.props.contestActions.getCategorizedContest({contestSlug:"active",contestCategory:a,page:n}).then((function(){e.setState({detailedListLoaded:!0})})):this.setState({detailedListLoaded:!0})}},{key:"getSelectedDomainAry",value:function(e){return Object.keys(e).filter((function(t){return!!e[t]}))}},{key:"filterActiveContest",value:function(){var e=this.props.contestState,t=e.allContest,a=e.active,n=this.state.showRatedContest,s=this.getSelectedDomainAry(this.state.selectedDomains);s.length||s.push("all");var r=[];s.forEach((function(e){r=r.concat(a.track[e]||[])}));var i=r.map((function(e){return t.contest[e]}));return n&&(i=i.filter((function(e){return e.rated}))),i}},{key:"getContestState",value:function(e,t){var a,n=[],s=[],r=[],i=this.props.contestState,o=i.archived,c=(i.active,i.college),l=i.allContest;if("active"===e)this.filterActiveContest().forEach((function(e){e.ended?n.push(e):s.push(e)})),s.sort((function(e,t){return e.epoch_starttime-t.epoch_starttime||e.epoch_endtime-t.epoch_endtime})),n=n.sort((function(e,t){return t.epoch_starttime-e.epoch_starttime||t.epoch_endtime-e.epoch_endtime})).slice(0,10);else if("archived"===e){a=o.total;var d=o.page[t];d&&(n=d.map((function(e){return l.contest[e]})))}else if("college"===e){a=c.total;var m=c.page[t];m&&(r=m.map((function(e){return l.contest[e]})))}return{activeContest:s,archivedContest:n,collegeContest:r,totalItems:a}}},{key:"render",value:function(){var e=this.props,t=e.domains,a=(e.contestState,e.profile),n=this.state,s=n.detailedListLoaded,r=n.loading,i=n.expandedContest,o=n.selectedDomains,c=n.showRatedContest,l=this.getPageInfo(),d=l.contestCategory,m=l.currentPage,u=this.getContestState(d,m),p=u.activeContest,h=u.archivedContest,v=u.collegeContest,f=u.totalItems;return b.a.createElement("div",{className:"main_content"},b.a.createElement("div",{className:"contest-view"},b.a.createElement("div",{className:"plL container"},b.a.createElement(G,{activeContest:p,archivedContest:h,collegeContest:v,totalItems:f,detailedListLoaded:s,loading:r,profile:a,expandedContest:i,expandContest:this.expandContest,onPageChange:this.onPageChange,contestCategory:d,currentPage:m}),b.a.createElement($,{profile:a,domains:t,showFilters:"active"===d,applyDomainFilter:this.applyDomainFilter,applyRatedFilter:this.applyRatedFilter,showRatedContest:c,selectedDomains:o}))))}}]),t}(g.Component);f()(ee,"propTypes",{appUtil:E.a.object.isRequired,domains:E.a.array.isRequired,contestState:E.a.object.isRequired,profile:E.a.object.isRequired,contestActions:E.a.object.isRequired});var te=ee;ee=Object(C.b)((function(e){return{domains:e.community.domains.list,profile:e.community.profile,contestState:e.community.contests}}),(function(e){return{contestActions:Object(k.b)(S.a,e)}}))(ee),ee=Object(N.a)(ee),ee=Object(q.b)(ee);t.default=ee},ww4x:function(e,t,a){"use strict";a.r(t),a.d(t,"eligibleTooltip",(function(){return k})),a.d(t,"normalTooltip",(function(){return N})),a.d(t,"PureContestLeaderboardPageLabel",(function(){return L}));a("f3/d"),a("0l/t"),a("LK8F");var n=a("lwsE"),s=a.n(n),r=a("W8MJ"),i=a.n(r),o=a("a1gu"),c=a.n(o),l=a("Nsbk"),d=a.n(l),m=a("PJYZ"),u=a.n(m),p=a("7W2i"),h=a.n(p),v=a("lSNA"),f=a.n(v),g=a("cDcd"),b=a.n(g),y=a("/MKj"),E=a("5J+W"),C=a("qePO"),k=(a("E4DP"),"This leaderboard has all the first-time users that are eligible for T-shirts."),N="This leaderboard has all the rated users that are not eligible for prizes for this beginner's contest.",w=function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=c()(this,(e=d()(t)).call.apply(e,[this].concat(r))),f()(u()(a),"props",void 0),a}return h()(t,e),i()(t,[{key:"getLeaderboardTitle",value:function(){var e=this.props,t=e.contest,a=e.appUtil.location.query;if(t&&Array.isArray(t.custom_leaderboards)&&a.customKind){var n=t.custom_leaderboards.filter((function(e){return e.slug===a.customKind}))[0];if(n)return n.name}return"Leaderboard"}},{key:"render",value:function(){var e=this.props,t=e.contest.limited_participants,a=e.otherleaderboard;return b.a.createElement("div",{className:"contest-page-label-wrapper d-flex align-items-center"},b.a.createElement("h1",{className:"ellipsis page-label d-inline"},this.getLeaderboardTitle()),t&&(a?b.a.createElement("span",{"data-balloon":N,"data-balloon-pos":"right","data-balloon-length":"medium"},b.a.createElement("i",{className:"ui-icon-help contest-page-label-icon"})):b.a.createElement("span",{"data-balloon":k,"data-balloon-pos":"right","data-balloon-length":"medium"},b.a.createElement("i",{className:"ui-icon-help contest-page-label-icon"}))))}}]),t}(b.a.PureComponent);f()(w,"defaultProps",{otherleaderboard:!1});var L=w;w=Object(y.b)((function(e,t){var a=t.appUtil.params.contestSlug,n=void 0===a?"master":a,s=Object(C.a)(n,e);return{contest:s,leaderboard:e.community.contests.contestLeaderboard[s.slug].leaderboard}}))(w),w=Object(E.a)(w),t.default=w},zszX:function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_contest-541a1566fb.js.map