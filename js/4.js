(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{887:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n(15),c=n.n(i),u=n(1),l=n.n(u),f=n(12),p=n.n(f),s=n(17),y=n.n(s);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var k=function(e){function t(){return b(this,t),v(this,g(t).apply(this,arguments))}return O(t,e),h(t,[{key:"render",value:function e(){var t=this.props,n=t.subTitle,r=t.dataSource,i=t.columns;return o.a.createElement("div",{style:x.content},o.a.createElement("h3",{style:x.subTitle},n),o.a.createElement(y.a,{dataSource:r,hasBorder:!1,style:x.table},i.map(function(e){return o.a.createElement(y.a.Column,{key:e.key,title:e.title,dataIndex:e.dataIndex})})),o.a.createElement("div",{style:x.footer},o.a.createElement("a",{href:"#",style:x.link},o.a.createElement(a.a,{id:"app.dashboard.activity.more"}))))}}]),t}(r.Component);k.defaultProps={columns:[],dataSource:[]},k.propTypes={columns:l.a.array,dataSource:l.a.array};var x={subTitle:{margin:"0",padding:"20px 20px 10px",fonSize:"16px",color:"rgba(0, 0, 0, 0.85)",fontWeight:"500",borderBottom:"1px solid #f0f0f0"},table:{margin:"0 10px"},footer:{height:"40px",padding:"0 20px",background:"#fff",display:"flex",alignItems:"center",justifyContent:"flex-end"},link:{color:"#4990e2",cursor:"pointer"}};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),e}function T(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}function B(e,t){return(B=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var q=c.a.Row,z=c.a.Col,A=function(e){function t(){return _(this,t),T(this,R(t).apply(this,arguments))}return I(t,e),P(t,[{key:"render",value:function e(){var t=this.props,n=t.title,r=t.summary,a=t.link;return o.a.createElement(p.a,{style:L.container},o.a.createElement(q,null,o.a.createElement(z,{l:"18",style:L.content},o.a.createElement("div",{style:L.head},o.a.createElement("h3",{style:L.title},n),o.a.createElement("div",{style:L.summary},r.map(function(e,t){return o.a.createElement("div",{style:L.item,key:t},o.a.createElement("span",{style:L.itemLabel},e.label),o.a.createElement("span",{style:L.itemValue},e.value))})),o.a.createElement("a",{href:a.href,style:L.link},a.text)),this.props.content),o.a.createElement(z,{l:"6"},o.a.createElement(k,this.props))))}}]),t}(r.Component);A.displayName="Card",A.propTypes={content:l.a.element.isRequired,title:l.a.string.isRequired,summary:l.a.array.isRequired,link:l.a.object.isRequired};var L={container:{minWidth:"1080px",overflow:"scroll",padding:"0"},content:{borderRight:"1px solid #f0f0f0",padding:"20px"},head:{display:"flex",alignItems:"center",position:"relative"},title:{margin:"0",fonSize:"16px",color:"rgba(0, 0, 0, 0.85)",fontWeight:"500"},summary:{display:"flex",marginLeft:"20px",fontSize:"13px"},item:{marginRight:"15px"},itemLabel:{color:"#9B9B9B",marginRight:"6px"},itemValue:{color:"#4990E2"},link:{position:"absolute",right:"20px",color:"#4990E2",fontSize:"13px"}},W=A,J=n(11);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return t&&V(e.prototype,t),n&&V(e,n),e}function G(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function K(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}function Q(e,t){return(Q=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var U,X=function(e){function t(){return N(this,t),G(this,H(t).apply(this,arguments))}return K(t,e),F(t,[{key:"render",value:function e(){var t=[{week:"\u5468\u4e00",count:38},{week:"\u5468\u4e8c",count:52},{week:"\u5468\u4e09",count:61},{week:"\u5468\u56db",count:145},{week:"\u5468\u4e94",count:48},{week:"\u5468\u516d",count:38},{week:"\u5468\u65e5",count:38}],n={count:{tickInterval:20}};return o.a.createElement("div",null,o.a.createElement(J.Chart,{height:400,data:t,scale:n,forceFit:!0,padding:[80,40,40,40]},o.a.createElement(J.Axis,{name:"week"}),o.a.createElement(J.Axis,{name:"count"}),o.a.createElement(J.Tooltip,{crosshairs:{type:"y"}}),o.a.createElement(J.Geom,{type:"interval",position:"week*count"})))}}]),t}(o.a.Component),Y,Z,$;function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function re(e,t,n){return t&&ne(e.prototype,t),n&&ne(e,n),e}function oe(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?ae(e):t}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function ce(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}function ue(e,t){return(ue=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var le=Object(a.d)(($=Z=function(e){function t(){return te(this,t),oe(this,ie(t).apply(this,arguments))}return ce(t,e),re(t,[{key:"render",value:function e(){var t=this.props.intl.formatMessage,n=Array.from({length:10}).map(function(e,n){return{name:"".concat(n+1,". ").concat(t({id:"app.dashboard.activity.festival"})),num:parseInt(1e3*Math.random(),10)}}),r=[{title:t({id:"app.dashboard.activity.spacename"}),dataIndex:"name",key:"name"},{title:t({id:"app.dashboard.activity.number"}),dataIndex:"num",key:"num"}];return o.a.createElement(W,{title:t({id:"app.dashboard.activity.latest"}),subTitle:"".concat(t({id:"app.dashboard.activity.latestweek"})," TOP 10"),summary:[{label:t({id:"app.dashboard.activity.week"}),value:"123"},{label:t({id:"app.dashboard.activity.accumulative"}),value:"23,239"}],link:{text:t({id:"app.dashboard.activity.list"}),href:"#"},dataSource:n,columns:r,content:o.a.createElement(X,null)})}}]),t}(r.Component),Z.displayName="LatestActivity",Z.propTypes={},Z.defaultProps={},Y=$))||Y,fe=t.default=le}}]);