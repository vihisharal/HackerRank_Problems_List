(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"+2yq":function(e,t,n){"use strict";var a=n("MVZn"),r=n.n(a),i=(n("bWfx"),n("lwsE")),o=n.n(i),s=n("W8MJ"),l=n.n(s),c=n("a1gu"),u=n.n(c),d=n("Nsbk"),m=n.n(d),p=n("PJYZ"),f=n.n(p),b=n("7W2i"),v=n.n(b),h=n("lSNA"),g=n.n(h),k=n("cDcd"),O=n.n(k),y=n("/MKj"),E=n("fvjX"),_=n("oBtd"),P=n.n(_),w=n("BtRI"),S=n("goSp"),j=n("HeyA"),N=n("cSw4");n("F63q");function V(e){var t=e.profile,n=e.currentJob;if(n){var a=n.location,r=n.role;return{zone_code:a?a.zone_code:null,role:[r]}}var i=t.country,o=t.work_start_year;return{role:t.jobs_prefered_roles,country_name:i,min_experience:o?(new Date).getFullYear()-o:0,recommended:!0}}var q=function(e){function t(){var e,n;o()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=u()(this,(e=m()(t)).call.apply(e,[this].concat(r))),g()(f()(n),"fetchRecommendedJobs",(function(){var e=n.props,t=e.jobsActions,a=e.recommendedJobs,r=V(n.props),i=JSON.stringify(r),o=a.jobs,s=a.didInvalidate;o&&!s||t.loadRecommendedJobs(r,i).then((function(){var e=n.props.recommendedJobs.jobs.map((function(e){return e.unique_id}));P.a.batch_track("View","JobCard",{attribute1:e})}))})),n}return v()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.fetchRecommendedJobs()}},{key:"render",value:function(){var e=this.props,t=e.header,n=e.recommendedJobs,a=e.referrerQuery,r=e.viewName,i=e.renderEmptySection,o=n.jobs;return o&&o.length?O.a.createElement("div",{className:"recommended-jobs"},t,O.a.createElement("div",{className:"jobs-list"},o.map((function(e,t){return O.a.createElement(S.b,{key:e.unique_id,job:e,position:t,query:a})})),O.a.createElement(j.default,{query:a,"data-attr2":r,"data-attr8":o&&o.length}))):i?i():null}}]),t}(k.PureComponent);t.a=Object(y.b)((function(e,t){var n=e.community.profile,a=JSON.stringify(V(r()({},t,{profile:n})));return{profile:n,recommendedJobs:Object(N.b)(a)(e)}}),(function(e){return{jobsActions:Object(E.b)(w.a,e)}}))(q)},"4PqN":function(e,t,n){},"6yKo":function(e,t,n){"use strict";n.r(t);n("RW0V"),n("rGqo"),n("yt8O"),n("XfO3"),n("HEwt");var a=n("pVnL"),r=n.n(a),i=(n("KKXr"),n("bWfx"),n("dRSK"),n("VRzm"),n("o0o1")),o=n.n(i),s=(n("ls82"),n("yXPU")),l=n.n(s),c=n("MVZn"),u=n.n(c),d=n("lwsE"),m=n.n(d),p=n("W8MJ"),f=n.n(p),b=n("a1gu"),v=n.n(b),h=n("Nsbk"),g=n.n(h),k=n("PJYZ"),O=n.n(k),y=n("7W2i"),E=n.n(y),_=n("lSNA"),P=n.n(_),w=n("cDcd"),S=n.n(w),j=n("fvjX"),N=n("/MKj"),V=n("J2iB"),q=n.n(V),C=n("E+oP"),A=n.n(C),R=n("vN+2"),M=n.n(R),T=n("KYPV"),U=n("f0wr"),D=n("NXto"),J=n("gokM"),B=n("3GBA"),L=n("qs1k"),I=n("qZTp"),x=n("qbr2"),W=n("V6Zm"),H=n("tZtq"),G=n("p5Jc"),F=n("l/re"),Y=n("5J+W"),K=n("la/C"),Q=n("OQuc"),Z=n("xaeT"),z=n("3L6z"),X=n("PsEu");n("4PqN");var $=function(e){var t=e.badges.map((function(e){var t=e.badge_type;return{label:S.a.createElement(X.a,{badge:e,key:t}),value:t}}));return S.a.createElement("div",{className:"badge-checklist"},S.a.createElement(z.a,r()({list:t},e,{componentClassName:"badge-checklist-checkbox"})))},ee=n("fe33"),te=n("bh43"),ne=n("IreD"),ae=n("fQr7"),re=n("KG4N");n("EbYE");function ie(e){var t=Object(Z.f)(e.badges);if(!t.length)return null;return S.a.createElement("div",{className:"jobs-profile-form-badges"},S.a.createElement("h4",{className:"jobs-profile-form-heading"},"HackerRank Badges"),S.a.createElement("p",{className:"hacker-skills-description"},"Include and showcase your Gold and Silver HackerRank Badges as part of your application."),S.a.createElement($,{name:"badges",badges:t,onChange:function(e,t,n){var a={eventCategory:"HRC Jobs",eventLabel:n?"BadgeSelect":"BadgeDeselect",eventAction:"Click",eventAttrs:{badge_id:t.value}};window&&"function"==typeof window.jsTrackGoogleAnalytics&&window.jsTrackGoogleAnalytics(a)}}))}n.d(t,"mapStateToProps",(function(){return se})),n.d(t,"mapActionsToProps",(function(){return le})),n.d(t,"PureJobsProfileForm",(function(){return oe})),n.d(t,"ApplicationBadgesSection",(function(){return ie}));var oe=function(e){function t(){var e,n;m()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=v()(this,(e=g()(t)).call.apply(e,[this].concat(r))),P()(O()(n),"state",{resumeOrLinkedInNotUploaded:void 0,loading:!1,unverifiedPhone:{}}),P()(O()(n),"isOtpVerificationRequired",!1),P()(O()(n),"unsavedValues",{}),P()(O()(n),"metrics",{attribute4:"JobsProfile"}),P()(O()(n),"getFieldMetrics",(function(e){var t=n.props.metrics;return{"data-analytics":e,"data-attr4":"JobsProfile","data-attr5":t?t.attribute5:void 0}})),P()(O()(n),"sendOnchangeMetrics",(function(e,t){(0,n.props.sendMetrics)("Click",e,u()({},t,n.metrics))})),P()(O()(n),"getErrorToast",(function(e){return new U.a({type:"error_strong",placement:"topRight",message:e,icon:"ui-icon-cross",duration:4,closable:!0})})),P()(O()(n),"getSuccessToast",(function(e){return new U.a({type:"success_strong",placement:"topRight",message:e,icon:"ui-icon-check-circle",duration:3,closable:!0})})),P()(O()(n),"handleOnBlur",(function(e,t,a){var r=n.props,i=r.sendMetrics,o=r.profile;e.target.value!==o[t]&&i("Click","Personal",u()({attribute2:t},n.metrics)),a(e)})),P()(O()(n),"showOtpDialog",(function(e){var t=n.mapPhoneValues(e);n.setState({unverifiedPhone:{country_code:t.unverified_country_code,number:t.unverified_number}})})),P()(O()(n),"handleCloseOtpDialog",(function(){var e=n.props,t=e.isSkillsVerificationTest,a=e.sendMetrics;n.setState({unverifiedPhone:{}});var r=t?"CloseOTPSkillVerification":"CloseOTPJobApplication";n.sendGtm({eventCategory:"HRC Phone Verification",eventAction:"Click",eventLabel:r}),a("Click",r)})),P()(O()(n),"handleVerify",(function(){var e=n.props,t=e.onSubmit,a=e.dispatch,r=n.state.unverifiedPhone;a({type:Q.a.PROFILE.UPDATE_PROFILE,data:{profile:{phone:{verified:!0,number:r.number,country_code:r.country_code,unverified_number:null,unverified_country_code:null}}}}),n.handleCloseOtpDialog(),t&&t(n.unsavedValues),n.handleAfterSubmit()})),P()(O()(n),"handleAfterSubmit",l()(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.props.afterSubmit)){e.next=13;break}return e.prev=2,e.next=5,t();case 5:n.getSuccessToast("Details submitted successfully").show(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n.getErrorToast("Something went wrong, please contact us").show();case 11:e.next=14;break;case 13:n.getSuccessToast("Profile updated successfully").show();case 14:case"end":return e.stop()}}),e,null,[[2,8]])})))),P()(O()(n),"submit",(function(e,t){var a=n.props,r=a.isSkillsVerificationTest,i=a.profileActions,o=a.onSubmit,s=a.sendMetrics,l=n.checkPhoneChanged(e),c=n.shouldShowOtpDialog(e),d=new Promise((function(t,a){i.updateProfile("me",n.mapProfileValues(e)).then((function(){if(l){var r=n.mapPhoneValues(e);return r.unverified_country_code&&r.unverified_number?void i.updatePhone(r).then((function(e){var n,r=e.errors,i=null==r?void 0:null===(n=r.number)||void 0===n?void 0:n[0];i?a({phoneNumber:i}):t(e)}),a):void a("Phone data is incorrect")}t()}),a)}));s("Click","SaveUpdateProfileButton",u()({},n.metrics)),d.then((function(){if(t.setSubmitting(!1),s("Click","UpdateProfile",u()({},n.metrics)),c){var a=r?"OTPModalSkillVerification":"OTPModalJobApplication";return n.unsavedValues=e,n.showOtpDialog(e),n.sendGtm({eventCategory:"HRC Phone Verification",eventAction:"View",eventLabel:a}),void s("View",a)}o&&o(e),n.handleAfterSubmit()})).catch((function(e){t.setSubmitting(!1),e.phoneNumber?t.setErrors({phoneNumber:e.phoneNumber}):n.getErrorToast("Something went wrong, please contact us").show()}))})),P()(O()(n),"mapProfileValues",(function(e){var t=e.fname,a=e.lname,r=e.countryOption,i=e.graduationYearOption,o=e.isProfessionalOption,s=e.workStartYearOption,l=e.selectedStateOption,c=e.usWork,u=e.ukWork,d=e.skills,m=e.linkedin_url,p=e.jobsHeadline,f=n.props.profile.linkedin_url,b=null;l&&l.value&&(b=l.value);var v=o.value,h=d&&d.length?Object(Z.z)(d).join(","):void 0,g=r.label,k="highschool"===i.value;return{personal_first_name:t,personal_last_name:a,country:g,state_code:"United States"===g?b:null,is_professional:v,work_start_year:v?s.value:null,graduation_year:v||k?null:i.value,us_work_eligibility:Object(Z.A)(c),uk_work_eligibility:Object(Z.A)(u),jobs_top_skills:h,linkedin_url:m||f,is_high_school_student:k,jobs_headline:p}})),P()(O()(n),"mapPhoneValues",(function(e){var t=e.countryOption.value,n=Object(ne.c)(t);return{unverified_number:e.phoneNumber,unverified_country_code:n}})),P()(O()(n),"validate",(function(e){var t=e.skills,a=e.linkedin_url,r=n.props,i=r.validate,o=r.profile.resume_url,s=r.job,l=r.isSkillsVerificationTest,c={};!s||o||a?n.setState({resumeOrLinkedInNotUploaded:!1}):(n.setState({resumeOrLinkedInNotUploaded:!0}),c.commonError=!0),!t||t.length||l||(c.skills="Required",c.commonError=!0);var d=i?i(e):{};return u()({},c,d)})),P()(O()(n),"clearResumeLinkedErrorState",(function(){n.setState({resumeOrLinkedInNotUploaded:!1})})),P()(O()(n),"resumeUploading",(function(e){var t=e.loading;n.setState({loading:t})})),P()(O()(n),"renderLinkedInResume",(function(){var e=n.props,t=e.profile,a=e.profileActions,r=n.state.resumeOrLinkedInNotUploaded;return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"form-col"},S.a.createElement(G.a,{type:"linkedin",edit:!0,clickConnect:!1,profile:t,profileActions:a,onSuccess:n.clearResumeLinkedErrorState,error:r,metrics:n.getCombinedMetrics(),fieldMetrics:n.getFieldMetrics("Personal")})),S.a.createElement(K.a,null),S.a.createElement(F.a,{onSuccess:n.clearResumeLinkedErrorState,onChange:n.resumeUploading,metrics:n.getCombinedMetrics()})),r&&S.a.createElement("div",{className:"linkedin-resume-error"},"Please connect linkedin or upload resume"))})),n}return E()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=this.props.appUtil.isEmailVerificationRequired;this.isOtpVerificationRequired=this.computeOtpVerificationRequired(),e()}},{key:"computeOtpVerificationRequired",value:function(){var e=this.props,t=e.job;return!!e.isSkillsVerificationTest||!!t&&!Object(Z.w)(t)}},{key:"getCombinedMetrics",value:function(){var e=this.props.metrics;return u()({},this.metrics,e)}},{key:"renderButtonText",value:function(){var e=this.props,t=e.initialValues,n=e.applicationData,a=e.cta,r=n&&n.unique_id;return t?r?"Update Details":"Apply":a||"Update Profile"}},{key:"checkPhoneChanged",value:function(e){var t=this.props.profile.phone||{},n=e.countryOption.value,a=Object(ne.c)(n),r=t.unverified_number||t.number,i=t.unverified_country_code||t.country_code;return r!==e.phoneNumber||i!==a}},{key:"checkPhoneUnverified",value:function(e){var t=this.props.profile.phone||{},n=e.countryOption.value,a=Object(ne.c)(n);return t.number!==e.phoneNumber||t.country_code!==a}},{key:"shouldShowOtpDialog",value:function(e){var t=this.checkPhoneUnverified(e);return!(!this.isOtpVerificationRequired||!t)}},{key:"sendGtm",value:function(e){window&&"function"==typeof window.jsTrackGoogleAnalytics&&window.jsTrackGoogleAnalytics(e)}},{key:"requiredValidation",value:function(e){return Object(x.d)([{test:W.a.required,message:"Required"}])(e)}},{key:"requiredValidationOption",value:function(e){return Object(x.d)([{test:W.a.requiredOption,message:"Required"}])(e)}},{key:"getInitialValues",value:function(){var e=this.props,t=e.profile,n=t.personal_first_name,a=t.personal_last_name,r=t.country,i=t.is_professional,o=t.graduation_year,s=t.work_start_year,l=t.jobs_top_skills,c=t.us_work_eligibility,d=t.uk_work_eligibility,m=t.linkedin_url,p=t.resume_url,f=t.is_high_school_student,b=t.jobs_headline,v=t.state,h=t.phone,g=t.badges,k=e.applicationData,O=e.initialValues,y=e.countries,E=e.states,_=k&&k.unique_id,P=O?O():{},w={label:"",value:"N/A"},S=Object(Z.r)(E),j=P.selectedStateOption;if(!j){var N=(S.find((function(e){var t=e.label;return(v||"").toUpperCase()===t.toUpperCase()}))||{}).value;j=N?Object(x.a)(S,N):u()({},w)}var V=Object(Z.f)(g),C=_?P.badges:V.map((function(e){return e.badge_type})),A=Object(ne.b)(Object(ne.a)(y),r)||{},R=!q()(i),M=Object(Z.m)(),T=Object(Z.j)(),U=Object(Z.t)(),D=(l&&""!==l?l.split(","):[]).map((function(e){return{label:e,value:e}})),J=f?"highschool":o,B=(null==h?void 0:h.unverified_number)||(null==h?void 0:h.number);return u()({fname:n,lname:a,countryOption:A,isProfessionalOption:R?Object(x.a)(M,!!i):u()({},w),graduationYearOption:R?Object(x.a)(T,J):u()({},w),workStartYearOption:R?Object(x.a)(U,s):u()({},w),usWork:Object(Z.A)(c),ukWork:Object(Z.A)(d),linkedin_url:m,resume_url:p,skills:D,jobsHeadline:b},P,{badges:C,selectedStateOption:j,phoneNumber:B})}},{key:"renderPersonalSection",value:function(e,t,n,a,r){var i=this,o=this.props.profile.phone,s=this.checkPhoneUnverified(e);return S.a.createElement("fieldset",null,S.a.createElement("legend",{className:"jobs-profile-form-heading"},"Personal"),S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"form-col"},S.a.createElement(D.a,{component:J.a,label:"First Name",name:"fname",required:!0,validate:this.requiredValidation,onBlur:function(e){return i.handleOnBlur(e,"personal_first_name",r)}})),S.a.createElement("div",{className:"form-col"},S.a.createElement(D.a,{component:J.a,name:"lname",label:"Last name",required:!0,validate:this.requiredValidation,onBlur:function(e){return i.handleOnBlur(e,"personal_last_name",r)}}))),S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"form-col "},S.a.createElement(D.a,{component:B.c,components:{Option:H.a},analyticsAttrs:{Option:{"data-click-event-enabled":!0,"data-event-category":"HRC Profile","data-event-label":"CountrySelect",attributeForLabel:"data-cd-country-id"}},name:"countryOption",label:"Country of Residence",required:!0,options:t,validate:this.requiredValidationOption,wrapperProps:{"data-event-category":"HRC Profile","data-event-label":"CountryDropDown","data-click-event-enabled":!0},onChange:function(e){i.sendOnchangeMetrics("Personal",{attribute2:"country",attribute3:e.value})}})),a&&S.a.createElement("div",{className:"form-col "},S.a.createElement(D.a,{component:B.c,name:"selectedStateOption",label:"State",required:!0,options:n,validate:this.requiredValidationOption,onChange:function(){return i.sendOnchangeMetrics("Personal",{attribute2:"state"})}}))),S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"form-col"},S.a.createElement(re.a,{isPhoneUnverified:s,countryOption:e.countryOption,phone:o,onBlur:function(e){return i.handleOnBlur(e,"phone",r)}}))))}},{key:"renderProfessionalSection",value:function(e,t,n,a,i){var o=this,s=this.props,l=s.job,c=s.isSkillsVerificationTest,d=e.isProfessionalOption.value,m={"data-click-event-enabled":!0,"data-event-category":"HRC Profile"},p=u()({},m,{"data-event-label":"ProfessionDropDown"}),f=u()({},m,{"data-event-label":d?"StudentSelect":"ProfessionSelect"}),b=u()({},m,{"data-event-label":d?"WorkExperienceDropDown":"GraduationYearDropDown"}),v=u()({},m,{"data-event-label":d?"WorkExperienceSelect":"GraduationYearSelect",attributeForLabel:"data-cd-experience-years"});return S.a.createElement("fieldset",null,S.a.createElement("legend",{className:"jobs-profile-form-heading"},"Professional"),S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"form-col"},S.a.createElement(D.a,{label:"Headline",component:J.a,name:"jobsHeadline",required:!0,validate:this.requiredValidationOption,placeholder:"Example: Software Engineer at Google",onBlur:function(e){return o.handleOnBlur(e,"jobs_headline",i)},maxLength:80}))),S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"form-col "},S.a.createElement(D.a,{label:"I am currently a",component:B.c,components:{Option:H.a},analyticsAttrs:{Option:f},name:"isProfessionalOption",isSearchable:!1,options:n,required:!0,validate:this.requiredValidationOption,wrapperProps:p,onChange:function(e){o.sendOnchangeMetrics("Professional",{attribute2:"is_professional",attribute3:e.value})}})),W.a.requiredOption(e.isProfessionalOption)&&S.a.createElement("div",{className:"form-col"},S.a.createElement(D.a,r()({component:B.c,components:{Option:H.a},analyticsAttrs:{Option:v},hidden:!W.a.requiredOption(e.isProfessional),isSearchable:!1},t,{required:!0,validate:this.requiredValidationOption,wrapperProps:b,onChange:function(e){o.sendOnchangeMetrics("Professional",{attribute2:"graduation_year",attribute7:e.value})}})))),S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"form-col linkedin-resume"},S.a.createElement(D.a,{label:"LinkedIn / Resume",component:this.renderLinkedInResume,alignment:"column",required:!!l,validate:!!l&&this.requiredValidation}))),!c&&S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"form-col"},S.a.createElement(D.a,{component:B.c,name:"skills",label:"Add your skills",required:!0,isMulti:!0,options:a,placeholder:"Eg: C++, Python",validate:this.requiredValidationOption,onChange:function(e){return o.sendOnchangeMetrics("Professional",{attribute2:"jobs_top_skills",attribute5:Array.from(e,(function(e){return e.value}))})}}))))}},{key:"renderVisaQuestion",value:function(e){var t=this,n="";"us"===e?n="United States":"uk"===e&&(n="United Kingdom");var a="".concat(e,"Work");return S.a.createElement("div",{className:"form-row"},S.a.createElement("div",{className:"radio-input-wrapper form-col"},S.a.createElement(D.a,r()({label:"Are you legally authorized to work in the ".concat(n," ?"),component:L.a,name:a,alignment:"column",list:[{label:"Yes",value:"true"},{label:"No",value:"false"}],required:!0,validate:this.requiredValidation},this.getFieldMetrics("WorkAuth"),{onChange:function(e){return t.sendOnchangeMetrics("WorkAuth",{attribute2:a,attribute3:"true"===e?"selected":"deselected"})}}))))}},{key:"renderVisaSection",value:function(e,t){return e||t?S.a.createElement("fieldset",null,S.a.createElement("legend",{className:"jobs-profile-form-heading"},"Work Authorization"),e&&this.renderVisaQuestion("us"),t&&this.renderVisaQuestion("uk")):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.states,a=t.countries,r=t.currentCompany,i=t.profile,o=t.commonMessage,s=t.isSubmitDisabled,l=t.showUSVisaQuestions,c=t.showUKVisaQuestions,d=t.isSkillsVerificationTest,m=this.state,p=m.loading,f=m.unverifiedPhone,b=this.getInitialValues(),v=Object(Z.m)(),h=Object(Z.q)(),g=Object(ne.a)(a),k=Object(Z.r)(n),O=i.confirmed,y=i.badges,E=!O||r&&s||p,_={"data-event-category":"HRC Phone Verification"},P=d?"SubmitOTPSkillVerification":"SubmitOTPJobApplication",j={submitOtp:u()({},_,{"data-event-label":P}),resendOtp:u()({},_,{"data-event-label":"ResendOTP"})},N={submitOtp:{"data-analytics":P},resendOtp:{"data-analytics":"ResendOTP"}};return S.a.createElement(w.Fragment,null,S.a.createElement(T.d,{initialValues:b,validate:this.validate,onSubmit:this.submit},(function(t){var n=t.values,a=t.errors,r=t.handleBlur,i=void 0===r?M.a:r,s=n.isProfessionalOption.value,u=Object(Z.p)(s),m=n.countryOption&&n.countryOption.value===Z.a.US,p="badges"in b,f=n.jobCountryCode===Z.a.US||l,O=n.jobCountryCode===Z.a.UK||c,_=a.notEligible&&a.errorMessage&&2===Object.keys(a).length,P=Object.keys(a).length>0&&!a.notEligible||a.commonError,w=a.errorMessage;return S.a.createElement(T.c,{className:"jobs-profile-form",noValidate:!0},p&&!d&&S.a.createElement(ie,{badges:y}),e.renderPersonalSection(n,g,k,m,i),e.renderProfessionalSection(n,u,v,h,i),e.renderVisaSection(!!f,!!O),S.a.createElement("div",{className:"display-error"},P&&"Please fill all the required fields",!P&&_&&w),o&&S.a.createElement("p",{className:"common-message"},o),S.a.createElement(I.b,{className:"ui-btn-primary",disabled:E},e.renderButtonText()))})),!A()(f)&&S.a.createElement(ae.a,{phone:f,onVerify:this.handleVerify,onCloseOtpDialog:this.handleCloseOtpDialog,gtmAttrs:j,hrMetricAttrs:N}))}}]),t}(w.Component);P()(oe,"defaultProps",{showUSVisaQuestions:!1,showUKVisaQuestions:!1});var se=function(e){var t=e.community,n=t.profile,a=t.jobs;return{profile:n,countries:a.countries,states:a.states}},le=function(e){return{profileActions:Object(j.b)(ee.a,e)}};t.default=Object(j.d)(Y.a,Object(N.b)(se,le),te.l)(oe)},AIJ7:function(e,t,n){"use strict";var a=n("pVnL"),r=n.n(a),i=(n("f3/d"),n("cDcd")),o=n.n(i),s=n("OEX3"),l=n("5J+W");n("j6Zk");t.a=Object(l.a)((function(e){var t=e.appUtil,n=e.test,a=n.name,i=n.publicUrl,l=n.cta,c=e.metrics,u=t.assetPath("jobs/lappy.png");return o.a.createElement("article",{className:"test-confirmation"},o.a.createElement("p",{className:"test-confirmation-description"},"Make sure you’re in a quiet environment with a stable internet connection and limited distractions. Good luck!"),o.a.createElement("div",{className:"test-confirmation-illustration"},o.a.createElement("h4",{className:"test-confirmation-illustration-heading"},a),o.a.createElement("img",{src:u,alt:"",className:"test-confirmation-image"})),o.a.createElement(s.d,r()({className:"test-confirmation-btn",role:"link",to:i},c),l))}))},BOhH:function(e,t,n){"use strict";n("f3/d");var a=n("cDcd"),r=n.n(a),i=n("bIS8");n("fH5o");t.a=function(e){var t,n,a,o,s,l=e.logo,c=e.name,u=e.duration,d=e.details,m=e.cta,p=e.logoElement;if(l){t=l.src;var f=l.height;n=void 0===f?80:f;var b=l.width;a=void 0===b?80:b,o=l.alt,s={height:"".concat(n,"px"),width:"".concat(a,"px")}}return r.a.createElement("header",{className:"test-header"},l&&r.a.createElement("img",{className:"test-header-logo",src:t,alt:o,style:s}),p&&r.a.createElement("div",{className:"test-header-logo"},p),r.a.createElement("div",{className:"test-header-content"},r.a.createElement("h2",{className:"test-header-heading"},c),(u||d)&&r.a.createElement("section",{className:"test-header-details"},u&&r.a.createElement("span",{className:"test-header-duration"},r.a.createElement(i.TimeIcon,{className:"test-header-duration-icon"}),"".concat(u," min")),d)),m&&r.a.createElement("div",{className:"test-header-cta"},m))}},EbYE:function(e,t,n){},fH5o:function(e,t,n){},j6Zk:function(e,t,n){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_commons~skills_verification_test~jobs-e6df4204e6.js.map