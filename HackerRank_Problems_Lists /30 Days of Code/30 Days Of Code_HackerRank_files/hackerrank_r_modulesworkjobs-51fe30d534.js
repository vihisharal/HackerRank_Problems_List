(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{EZGV:function(e,t,o){"use strict";var a=o("pVnL"),n=o.n(a),r=o("QILm"),i=o.n(r),s=o("cDcd"),l=o.n(s),d=o("17x9"),c=o.n(d),u={ENTER:13,SPACE:32};function p(e){var t=e.onClick,o=i()(e,["onClick"]);return l.a.createElement("div",n()({onClick:t,onKeyUp:function(e){var o=e.keyCode,a=u.ENTER,n=u.SPACE;o!==a&&o!==n||t(e)},tabIndex:"0",role:"button"},o))}p.propTypes={onClick:c.a.func.isRequired},t.a=p},"Ua/2":function(e,t,o){"use strict";o("pIFo"),o("rGqo"),o("8+KV"),o("dRSK");var a=o("lwsE"),n=o.n(a),r=o("W8MJ"),i=o.n(r),s=o("a1gu"),l=o.n(s),d=o("Nsbk"),c=o.n(d),u=o("PJYZ"),p=o.n(u),f=o("7W2i"),m=o.n(f),b=o("MVZn"),v=o.n(b),g=o("lSNA"),k=o.n(g),h=o("cDcd"),C=o.n(h),w=o("17x9"),E=o.n(w),y=o("faye"),N=o.n(y),U=o("OnOE"),L=o.n(U),T=o("TSYQ"),S=o.n(T),B=o("EfbJ"),D=o("w13Q"),R=o("xNbf"),W=(o("gQEU"),o("xeH2")),I=o.n(W),M=function(){},_={extraPlugins:"autogrow,image2,customlink",filebrowserImageUploadUrl:"/x/api/v1/editor_uploads",filebrowserUploadUrl:"/x/api/v1/editor_uploads",filebrowserBrowseUrl:"",filebrowserImageBrowseUrl:"",filebrowserImageBrowseLinkUrl:"",filebrowserUploadMethod:"form",toolbar:[["Bold","Italic","Underline","BulletedList","NumberedList","Font","FontSize","Link","Image"]],toolbarCanCollapse:!1,toolbarLocation:"bottom",autoGrow_onStartup:!0,extraAllowedContent:"iframe[*];*{*}",removePlugins:"elementspath,liststyle,resize,link,tabletools,tableselection",removeDialogTabs:"link:advanced;link:target;link:upload",disableNativeSpellChecker:!1,bodyClass:"hrx-version challenge-text ck_table-wrap",htmlEncodeOutput:!0,tabSpaces:4,resize_enable:!1,dialog_backgroundCoverColor:"rgba(248, 249, 250, 0.88)",dialog_backgroundCoverOpacity:2.5,language:"en",defaultLanguage:"en"},x=function(e){function t(e){var o;return n()(this,t),o=l()(this,c()(t).call(this,e)),k()(p()(o),"state",void 0),k()(p()(o),"_isUnMounted",void 0),k()(p()(o),"editor",void 0),k()(p()(o),"editorElem",void 0),k()(p()(o),"editorWrapper",void 0),k()(p()(o),"$editorWrapper",void 0),k()(p()(o),"buttonWrap",void 0),k()(p()(o),"setReadOnlyMode",(function(){o._isUnMounted||"boolean"!=typeof o.props.disabled||o.editor&&o.editor.editable()&&o.editor.setReadOnly(o.props.disabled)})),k()(p()(o),"setCsrfToken",(function(){var e=o.props.metadata.csrfToken,t=window.CKEDITOR;"function"!=typeof t.tools.getCsrfToken||t.tools.getCsrfToken.overrode||(t.tools.getCsrfToken=function(){return e},t.tools.getCsrfToken.overrode=!0)})),k()(p()(o),"addTooltip",(function(){var e=o.$editorWrapper.find(".cke_bottom [title]");Array.prototype.forEach.call(e,(function(e){var t=e.title;I()(e).removeAttr("title").attr({"data-tip":t,"data-effect":"solid"})})),L.a.rebuild()})),k()(p()(o),"renderCustomButtons",(function(e){var t=e.renderCustomButtons,a=o.buttonWrap;a||(o.$editorWrapper.find(".cke_bottom").append('<div class="customize"></div>'),o.buttonWrap=o.$editorWrapper.find(".customize")[0],a=o.buttonWrap),N.a.unstable_renderSubtreeIntoContainer(p()(o),t(),a),L.a.rebuild()})),k()(p()(o),"onInstanceReady",(function(){o.setState({loading:!1});var e=o.props.afterLoad;o.addTooltip(),o.setReadOnlyMode(),e&&e(o.editor)})),k()(p()(o),"postLoad",(function(){var e=o.editor;o.$editorWrapper=I()(o.editorWrapper);var t=o.props,a=t.onFocus,n=t.onChange,r=t.onBlur,i=t.mode;e.on("focus",a),e.on("change",(function(e){n&&n(e.editor.getData())})),e.on("blur",r),e.on("instanceReady",o.onInstanceReady),i&&o.setMode(i)})),k()(p()(o),"setMode",(function(e){o.editor.setMode(e)})),o.state={loading:!0,data:e.value},o}return m()(t,e),i()(t,[{key:"componentDidMount",value:function(){L.a.rebuild(),this.loadCkeditor()}},{key:"componentDidUpdate",value:function(e){L.a.rebuild();var t=this.props,o=t.value,a=t.useSetHtmlData,n=t.renderCustomButtons,r=this.state.loading;this.setReadOnlyMode();var i=this.editor;if((r||n()===e.renderCustomButtons()||this.renderCustomButtons(this.props),!r&&i&&void 0!==o&&e.value!==o)&&i.getData()!==o)if(a){var s=i.editable();s&&s.setHtml(o)}else i.setData(o)}},{key:"componentWillUnmount",value:function(){this._isUnMounted=!0,this.editor&&this.editor.destroy()}},{key:"loadCkeditor",value:function(){var e=this,t=this.props,o=t.editorConfig,a=t.appUtil.assetPath;Object(D.c)("https://hrcdn.net/ckeditor/v4.11.4.1/ckeditor.js").then((function(){if(!e._isUnMounted){var t=v()({contentsCss:[a("react-ckeditor.css"),a("ckeditor-custom.css"),a("balloon.min.css")]},_,o),n=window.CKEDITOR;n.on("dialogDefinition",(function(){n.lang.en.common.ok="Save",n.lang.en.common.cancel="Cancel"})),e.setCsrfToken(),e.editor=n.replace(e.editorElem,t),e.postLoad()}}))}},{key:"render",value:function(){var e=this,t=this.state.loading,o=this.props,a=o.showLoader,n=o.value,r=o.instanceName,i=o.className;return C.a.createElement("div",{className:S()("ckeditor-wrapper",i),ref:function(t){return e.editorWrapper=t}},t&&a&&C.a.createElement(R.a,{diameter:50}),C.a.createElement("textarea",{ref:function(t){return e.editorElem=t},className:"d-none ck-textarea",id:r},n))}}]),t}(h.Component);k()(x,"propTypes",{showLoader:E.a.bool,useSetHtmlData:E.a.bool,value:E.a.string,className:E.a.string,instanceName:E.a.string,editorConfig:E.a.object,appUtil:E.a.object.isRequired,metadata:E.a.object.isRequired,onChange:E.a.func,afterLoad:E.a.func,renderCustomButtons:E.a.func,onFocus:E.a.func,onBlur:E.a.func,mode:E.a.func,disabled:E.a.bool}),k()(x,"defaultProps",{showLoader:!0,useSetHtmlData:!1,editorConfig:{},instanceName:"problem-description",onFocus:M,onBlur:M,onChange:M,renderCustomButtons:M,value:""}),x=Object(B.a)(x),t.a=x},gQEU:function(e,t,o){},lrHr:function(e,t,o){"use strict";var a=o("pVnL"),n=o.n(a),r=o("QILm"),i=o.n(r),s=o("cDcd"),l=o.n(s),d=o("TSYQ"),c=o.n(d);o("oLQN");t.a=function(e){var t=e.className,o=e.label,a=e.checked,r=e.error,s=i()(e,["className","label","checked","error"]),d=l.a.createElement("div",{className:"radio-wrap"},l.a.createElement("input",n()({type:"radio",className:"radio-input",checked:a},s)),l.a.createElement("span",{className:c()("custom-holder",{error:r})}));return l.a.createElement("div",{className:c()("ui-radio",{checked:a},t)},o?l.a.createElement("label",{className:"label-wrap"},d,l.a.createElement("div",{className:"label"},o)):d)}},oLQN:function(e,t,o){}}]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/hackerrank_r_modules~work~jobs-51fe30d534.js.map