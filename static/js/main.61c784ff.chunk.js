(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,n){e.exports=n(492)},269:function(e,t){},271:function(e,t){},303:function(e,t){},304:function(e,t){},373:function(e,t){},492:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(32),c=n.n(o),u=n(40),i=n(41),l=n(45),s=n(42),p=n(46),d=n(26),m=n(44),f=n(87),h=n(30),b={structure:[{label:"nome",componentId:"nome0",type:"textfield",helpBlock:null}],updateFlag:!0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":return Object(h.a)({},e,{structure:t.structure});case"SET_UPDATE_FLAG":return Object(h.a)({},e,{updateFlag:t.updateFlag});default:return e}},g={forms:[{id:"6950",name:"Cadastro de Pok\xe9mon",status:"enabled",category:"Desafio front-end",answerTracking:!0,publicAnswers:!1}],currentForm:{id:5704,name:"API Doc - Filmes preferidos"}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORMS":return Object(h.a)({},e,{forms:t.forms});case"SET_CURRENT_FORM":return Object(h.a)({},e,{currentForm:t.currentForm});default:return e}},O=n(59),j={formValues:{},starRating:0},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_VALUE":return Object(h.a)({},e,{formValues:Object(h.a)({},e.formValues,Object(O.a)({},t.updateField,t.updateValue))});case"RESET_FORM_VALUES":return Object(h.a)({},e,{formValues:{}});case"SET_STAR_RATING":return Object(h.a)({},e,{starRating:t.starRating});default:return e}},k=Object(f.b)({formStructure:v,availableForms:w,formValues:E}),y=Object(f.c)(k),F=n(68),x=n(102),A=n(27),S=n(24),T=n.n(S),C=n(50);function _(){var e=Object(d.a)(["\n  font-family: Arial;\n  color: #a4a5b2;\n\n  @media (max-width: 768px) { \n    text-align: center;\n  }\n\n  @media (max-width: 425px) { \n    margin: 0;\n    padding: 0.5em 0 0 0;\n  }\n"]);return _=function(){return e},e}var R=A.b.h1(_()),D=function(e){return a.a.createElement(R,null,e.title)},I=n(223),U=n.n(I);function V(){var e=Object(d.a)(["\n  background: white\n\n  @media (min-width: 576px) { \n    margin: auto;\n    width: 50%;\n    padding: 1em;\n    border: 2px solid #DDD;\n  }\n\n  @media (max-width: 425px) { \n    height: 100vh\n  }\n\n  @media (min-width: 576px) { \n    margin: auto;\n    width: 50%;\n    padding: 1em;\n    border: 2px solid #DDD;\n  }\n\n"]);return V=function(){return e},e}var P=Object(A.b)(U.a)(V()),L=function(e){return a.a.createElement(P,null,e.children)},M=n(495),N=n(493),B=n(494),G=n(226),W=n(103),z=n(224),q=n.n(z);function H(){var e=Object(d.a)(["\n  font-size: 1.0em;\n  \n  @media (min-width: 1024px) { \n    font-size: 1.5em;\n  }\n"]);return H=function(){return e},e}function J(){var e=Object(d.a)(["\n  margin-right: 0.5em;\n"]);return J=function(){return e},e}var K=Object(A.b)(W.a)(J()),$=A.b.div(H()),Q=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleStarClick",value:function(e,t,n){this.props.dispatch({type:"SET_STAR_RATING",starRating:e})}},{key:"render",value:function(){return a.a.createElement($,null,a.a.createElement(q.a,{name:"starRating",starCount:5,value:this.props.rating,onStarClick:this.handleStarClick.bind(this),renderStarIcon:function(){return a.a.createElement(K,{icon:"star"})},emptyStarColor:"#9b9da0"}))}}]),t}(a.a.Component),X=Object(m.b)(function(e){return{rating:e.formValues.starRating}})(Q);function Y(){var e=Object(d.a)(["\n  word-wrap: break-word;\n"]);return Y=function(){return e},e}var Z=Object(A.b)(M.a.Label)(Y()),ee=4,te=6,ne=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){n.props.dispatch({type:"UPDATE_VALUE",updateField:e.target.name,updateValue:e.target.value}),console.log(n.props.formValues)},n.createInputField=function(e){switch(e.type){case"datefield":return a.a.createElement(N.a,null,a.a.createElement(M.a.Control,{name:e.componentId,type:"date",placeholder:"DD/MM/AAAA",onChange:function(e){n.handleChange(e)}}),a.a.createElement(N.a.Append,null,a.a.createElement(N.a.Text,{id:"inputGroupPrepend"},a.a.createElement(W.a,{icon:"calendar-alt"}))));case"ratingfield":return a.a.createElement(X,{name:e.componentId});case"urlfield":return a.a.createElement(M.a.Control,{name:e.componentId,type:"url",onChange:function(e){n.handleChange(e)}});default:return a.a.createElement(M.a.Control,{name:e.componentId,type:"text",onChange:function(e){n.handleChange(e)}})}},n.createHelpBlock=function(e){if(null!==e.helpBlock)return a.a.createElement("small",{className:"form-text text-muted"},e.helpBlock)},n.createFormFields=function(){return a.a.createElement(M.a,{onSubmit:function(e){n.handleSubmit(e)}},n.props.structure.map(function(e){var t;return a.a.createElement(M.a.Group,{as:B.a,controlId:e.componentId,key:e.componentId},a.a.createElement(Z,(t={className:"text-right",column:!0,xs:ee+1},Object(O.a)(t,"column",!0),Object(O.a)(t,"sm",ee),t),e.label),a.a.createElement(G.a,{xs:te},n.createInputField(e),n.createHelpBlock(e)))}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return 0===this.props.structure.length||void 0===this.props.structure?null:this.createFormFields()}}]),t}(r.Component),re=Object(m.b)(function(e){return{formValues:e.formValues,currentForm:e.availableForms.currentForm}})(ne),ae=n(244),oe=function(){var e=Object(C.a)(T.a.mark(function e(t){var n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae(t,{json:!0});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return","error");case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(C.a)(T.a.mark(function e(t){var n,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://coletum.com/api/graphql?query="+t+"&token=cizio7xeohwgc8k4g4koo008kkoocwg",e.next=3,oe(n);case 3:if("error"!==(r=e.sent)){e.next=6;break}return e.abrupt("return",r);case 6:return e.abrupt("return",r.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(C.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"{form{id,name,status,category,answerTracking,publicAnswers}}",e.next=3,ce("{form{id,name,status,category,answerTracking,publicAnswers}}");case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(C.a)(T.a.mark(function e(t,n){var r,a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="{form_structure(formId:".concat(n,"){label,componentId,type,helpBlock,order,components}}"),e.next=3,ce(r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),le=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).componentDidMount=function(){n.props.dispatch({type:"SET_UPDATE_FLAG",updateFlag:!0})},n.componentDidUpdate=function(){n.props.formStructure.updateFlag&&n.updateStructure()},n.updateStructure=Object(C.a)(T.a.mark(function e(){var t,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.availableForms.currentForm,e.next=3,ie(t.name,t.id);case 3:if("error"!==(r=e.sent)){e.next=6;break}return e.abrupt("return");case 6:n.props.dispatch({type:"UPDATE",structure:r.form_structure}),n.props.dispatch({type:"SET_UPDATE_FLAG",updateFlag:!1}),n.props.dispatch({type:"RESET_FORM_VALUES"});case 9:case"end":return e.stop()}},e,this)})),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.formStructure.updateFlag?null:a.a.createElement(L,null,a.a.createElement(D,{title:this.props.availableForms.currentForm.name}),a.a.createElement("hr",null),a.a.createElement(re,{structure:this.props.formStructure.structure}),a.a.createElement("hr",null))}}]),t}(r.Component),se=Object(m.b)(function(e){return Object(h.a)({},e)})(le),pe=n(497),de=n(496),me=n(498);function fe(){var e=Object(d.a)(["\n  .navbar-toggler {\n    background-color: #52a096;\n  }\n\n  @media (max-width: 425px) { \n    background: white;\n  }\n"]);return fe=function(){return e},e}function he(){var e=Object(d.a)(["\n  background-color: #52a096;\n\n  a {\n    color: white\n  }\n\n  .nav-link {\n    color: white !important\n  }\n\n  .dropdown-menu {\n    background-color: #52a096;\n  }\n  \n"]);return he=function(){return e},e}var be=Object(A.b)(pe.a)(he()),ve=Object(A.b)(de.a)(fe()),ge=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){n.getForms()},n.handleSelection=function(e){var t=n.props.forms.filter(function(t){return t.id===e});n.props.dispatch({type:"SET_CURRENT_FORM",currentForm:t[0]}),n.props.dispatch({type:"SET_UPDATE_FLAG",updateFlag:!0})},n.getForms=Object(C.a)(T.a.mark(function e(){var t;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:if("error"!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:n.props.dispatch({type:"SET_FORMS",forms:t.form});case 6:case"end":return e.stop()}},e,this)})),n.populateDropdown=function(){return a.a.createElement(be,{onSelect:function(e){return n.handleSelection(e)},title:"Formul\xe1rios Dispon\xedveis"},n.props.forms.map(function(e){return a.a.createElement(pe.a.Item,{key:e.id,eventKey:e.id},e.name)}))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(ve,{variant:"dark",expand:"sm"},a.a.createElement(ve.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(ve.Collapse,null,a.a.createElement(me.a,{className:"mr-auto"},this.populateDropdown())))}}]),t}(r.Component),we=Object(m.b)(function(e){return{forms:e.availableForms.forms}})(ge);function Oe(){var e=Object(d.a)(["\n  body {\n    background-color: #575b5e;\n  }\n"]);return Oe=function(){return e},e}F.b.add(x.a),F.b.add(x.b);var je=Object(A.a)(Oe()),Ee=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,{store:y},a.a.createElement(je,null),a.a.createElement(we,null),a.a.createElement(se,null))}}]),t}(r.Component),ke=(n(491),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ye(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(Ee,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/desafio-coletum",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/desafio-coletum","/service-worker.js");ke?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ye(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ye(t,e)})}}()}},[[231,1,2]]]);
//# sourceMappingURL=main.61c784ff.chunk.js.map