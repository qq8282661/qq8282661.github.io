(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"4Ofr":function(e,t,a){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},AcjU:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMenuMatchKeys=t.getFlatMenuKeys=void 0;var r=l(a("jehZ")),o=l(a("eHn4")),i=l(a("gWZ8")),u=l(a("2Taf")),d=l(a("vZ4D")),c=l(a("l4Ni")),s=l(a("ujKo")),g=l(a("MhPg"));a("B9cy");var f=l(a("Ol7k")),m=n(a("q1tI")),M=l(a("bALw")),p=l(a("TSYQ")),I=l(a("mOP9")),h=l(a("mR0u")),y=n(a("oFg3")),N=a("S/9j"),C=l(a("B4Bd")),v=f.default.Sider,D=function(e){var t=e.location.pathname,a=e.flatMenuKeys;return(0,N.urlToList)(t).map(function(e){return(0,y.getMenuMatches)(a,e)[0]}).filter(function(e){return e})},A=function e(t){return t.reduce(function(t,a){return t.push(a.path),a.children?t.concat(e(a.children)):t},[])};t.getFlatMenuKeys=A;var E=function(e,t){return t.reduce(function(t,a){return t.concat(e.filter(function(e){return(0,M.default)(e).test(a)}))},[])};t.getMenuMatchKeys=E;var j=function(e){function t(e){var a;return(0,u.default)(this,t),a=(0,c.default)(this,(0,s.default)(t).call(this,e)),a.isMainMenu=function(e){var t=a.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},a.handleOpenChange=function(e){var t=e.filter(function(e){return a.isMainMenu(e)}).length>1;a.setState({openKeys:t?[e.pop()]:(0,i.default)(e)})},a.flatMenuKeys=A(e.menuData),a.state={openKeys:D(e)},a}return(0,g.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.collapsed,n=t.onCollapse,l=t.fixSiderbar,i=t.theme,u=this.state.openKeys,d=a?{}:{openKeys:u},c=(0,p.default)(h.default.sider,(e={},(0,o.default)(e,h.default.fixSiderbar,l),(0,o.default)(e,h.default.light,"light"===i),e));return m.default.createElement(v,{trigger:null,collapsible:!0,collapsed:a,breakpoint:"lg",onCollapse:n,width:256,theme:i,className:c},m.default.createElement("div",{className:h.default.logo,id:"logo"},m.default.createElement(I.default,{to:"/"},m.default.createElement("img",{src:C.default,alt:"logo"}),m.default.createElement("h1",null,"\u5408\u8c5a\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"))),m.default.createElement(y.default,(0,r.default)({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%"}},d)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.pathname;return e.location.pathname!==a?{pathname:e.location.pathname,openKeys:D(e)}:null}}]),t}(m.PureComponent);t.default=j},B4Bd:function(e,t,a){e.exports=a.p+"static/logo.e3fd921c.png"},BFsb:function(e,t,a){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},IGtV:function(e,t,a){e.exports={fixedHeader:"antd-pro-layouts-header-fixedHeader"}},IamK:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var l=n(a("/wGt")),r=n(a("jehZ")),o=n(a("q1tI")),i=n(a("AcjU")),u=function e(t){var a=[];return t.forEach(function(t){t.children&&(a=a.concat(e(t.children))),a.push(t.path)}),a},d=function(e){var t=e.isMobile,a=e.menuData,n=e.collapsed,d=e.onCollapse;return t?o.default.createElement(l.default,{visible:!n,placement:"left",onClose:function(){return d(!0)},style:{padding:0,height:"100vh"}},o.default.createElement(i.default,(0,r.default)({},e,{flatMenuKeys:u(a),collapsed:!t&&n}))):o.default.createElement(i.default,(0,r.default)({},e,{flatMenuKeys:u(a)}))},c=d;t.default=c},JwhZ:function(e,t,a){e.exports={head:"antd-pro-components-top-nav-header-index-head",light:"antd-pro-components-top-nav-header-index-light",main:"antd-pro-components-top-nav-header-index-main",wide:"antd-pro-components-top-nav-header-index-wide",left:"antd-pro-components-top-nav-header-index-left",right:"antd-pro-components-top-nav-header-index-right",logo:"antd-pro-components-top-nav-header-index-logo"}},NtFa:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r,o,i,u=n(a("CtXQ")),d=n(a("2Taf")),c=n(a("vZ4D")),s=n(a("l4Ni")),g=n(a("ujKo")),f=n(a("MhPg")),m=n(a("SQvw")),M=l(a("q1tI")),p=n(a("mOP9")),I=n(a("fqkP")),h=n(a("h3zL")),y=n(a("X5mu")),N=(r=(0,I.default)(600),i=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,s.default)(this,(e=(0,g.default)(t)).call.apply(e,[this].concat(l))),a.toggle=function(){var e=a.props,t=e.collapsed,n=e.onCollapse;n(!t),a.triggerResizeEvent()},a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,a=e.isMobile,n=e.logo;return M.default.createElement("div",{className:h.default.header},a&&M.default.createElement(p.default,{to:"/",className:h.default.logo,key:"logo"},M.default.createElement("img",{src:n,alt:"logo",width:"32"})),M.default.createElement(u.default,{className:h.default.trigger,type:t?"menu-unfold":"menu-fold",onClick:this.toggle}),M.default.createElement(y.default,this.props))}}]),t}(M.PureComponent),o=i,(0,m.default)(o.prototype,"triggerResizeEvent",[r],Object.getOwnPropertyDescriptor(o.prototype,"triggerResizeEvent"),o.prototype),o);t.default=N},PceP:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var r=n(a("/wGt"));a("fOrg");var o=n(a("+KLJ"));a("+L6B");var i=n(a("2/Rp"));a("miYZ");var u=n(a("tsqr"));a("/zsF");var d=n(a("PArb"));a("Pwec");var c=n(a("CtXQ"));a("5Dmo");var s=n(a("3S7+"));a("Mwp2");var g=n(a("VXEj"));a("BoS7");var f=n(a("Sdc0")),m=n(a("2Taf")),M=n(a("vZ4D")),p=n(a("l4Ni")),I=n(a("ujKo")),h=n(a("MhPg")),y=n(a("p0pE"));a("OaEy");var N,C,v,D=n(a("2fM7")),A=l(a("q1tI")),E=a("LLXN"),j=a("P5Jw"),T=a("MuoO"),k=n(a("BGR+")),b=n(a("BFsb")),w=n(a("WJM/")),x=n(a("Pjk0")),z=D.default.Option,O=function(e){var t=e.children,a=e.title,n=e.style;return A.default.createElement("div",{style:(0,y.default)({},n,{marginBottom:24})},A.default.createElement("h3",{className:b.default.title},a),t)},L=(N=(0,T.connect)(function(e){var t=e.setting;return{setting:t}}),N((v=function(e){function t(){var e,a;(0,m.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,p.default)(this,(e=(0,I.default)(t)).call.apply(e,[this].concat(l))),a.state={collapse:!1},a.getLayoutSetting=function(){var e=a.props.setting,t=e.contentWidth,n=e.fixedHeader,l=e.layout,r=e.autoHideHeader,o=e.fixSiderbar;return[{title:(0,E.formatMessage)({id:"app.setting.content-width"}),action:A.default.createElement(D.default,{value:t,size:"small",onSelect:function(e){return a.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===l?null:A.default.createElement(z,{value:"Fixed"},(0,E.formatMessage)({id:"app.setting.content-width.fixed"})),A.default.createElement(z,{value:"Fluid"},(0,E.formatMessage)({id:"app.setting.content-width.fluid"})))},{title:(0,E.formatMessage)({id:"app.setting.fixedheader"}),action:A.default.createElement(f.default,{size:"small",checked:!!n,onChange:function(e){return a.changeSetting("fixedHeader",e)}})},{title:(0,E.formatMessage)({id:"app.setting.hideheader"}),disabled:!n,disabledReason:(0,E.formatMessage)({id:"app.setting.hideheader.hint"}),action:A.default.createElement(f.default,{size:"small",checked:!!r,onChange:function(e){return a.changeSetting("autoHideHeader",e)}})},{title:(0,E.formatMessage)({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===l,disabledReason:(0,E.formatMessage)({id:"app.setting.fixedsidebar.hint"}),action:A.default.createElement(f.default,{size:"small",checked:!!o,onChange:function(e){return a.changeSetting("fixSiderbar",e)}})}]},a.changeSetting=function(e,t){var n=a.props.setting,l=(0,y.default)({},n);l[e]=t,"layout"===e?l.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(l.autoHideHeader=!1),a.setState(l,function(){var e=a.props.dispatch;e({type:"setting/changeSetting",payload:a.state})})},a.togglerContent=function(){var e=a.state.collapse;a.setState({collapse:!e})},a.renderLayoutSettingItem=function(e){var t=A.default.cloneElement(e.action,{disabled:e.disabled});return A.default.createElement(s.default,{title:e.disabled?e.disabledReason:"",placement:"left"},A.default.createElement(g.default.Item,{actions:[t]},A.default.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},a}return(0,h.default)(t,e),(0,M.default)(t,[{key:"render",value:function(){var e=this,t=this.props.setting,a=t.navTheme,n=t.primaryColor,l=t.layout,s=t.colorWeak,m=this.state.collapse;return A.default.createElement(r.default,{visible:m,width:300,onClose:this.togglerContent,placement:"right",handler:A.default.createElement("div",{className:b.default.handle},A.default.createElement(c.default,{type:m?"close":"setting",style:{color:"#fff",fontSize:20}})),onHandleClick:this.togglerContent,style:{zIndex:999}},A.default.createElement("div",{className:b.default.content},A.default.createElement(O,{title:(0,E.formatMessage)({id:"app.setting.pagestyle"})},A.default.createElement(x.default,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:(0,E.formatMessage)({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:(0,E.formatMessage)({id:"app.setting.pagestyle.light"})}],value:a,onChange:function(t){return e.changeSetting("navTheme",t)}})),A.default.createElement(w.default,{title:(0,E.formatMessage)({id:"app.setting.themecolor"}),value:n,onChange:function(t){return e.changeSetting("primaryColor",t)}}),A.default.createElement(d.default,null),A.default.createElement(O,{title:(0,E.formatMessage)({id:"app.setting.navigationmode"})},A.default.createElement(x.default,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:(0,E.formatMessage)({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:(0,E.formatMessage)({id:"app.setting.topmenu"})}],value:l,onChange:function(t){return e.changeSetting("layout",t)}})),A.default.createElement(g.default,{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),A.default.createElement(d.default,null),A.default.createElement(O,{title:(0,E.formatMessage)({id:"app.setting.othersettings"})},A.default.createElement(g.default.Item,{actions:[A.default.createElement(f.default,{size:"small",checked:!!s,onChange:function(t){return e.changeSetting("colorWeak",t)}})]},(0,E.formatMessage)({id:"app.setting.weakmode"}))),A.default.createElement(d.default,null),A.default.createElement(j.CopyToClipboard,{text:JSON.stringify((0,k.default)(t,["colorWeak"]),null,2),onCopy:function(){return u.default.success((0,E.formatMessage)({id:"app.setting.copyinfo"}))}},A.default.createElement(i.default,{block:!0,icon:"copy"},(0,E.formatMessage)({id:"app.setting.copy"}))),A.default.createElement(o.default,{type:"warning",className:b.default.productionHint,message:A.default.createElement("div",null,(0,E.formatMessage)({id:"app.setting.production.hint"})," ",A.default.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(A.PureComponent),C=v))||C),S=L;t.default=S},Pjk0:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var l=n(a("3S7+"));a("Pwec");var r=n(a("CtXQ")),o=n(a("q1tI")),i=n(a("BFsb")),u=function(e){var t=e.value,a=e.onChange,n=e.list;return o.default.createElement("div",{className:i.default.blockChecbox,key:t},n.map(function(e){return o.default.createElement(l.default,{title:e.title,key:e.key},o.default.createElement("div",{className:i.default.item,onClick:function(){return a(e.key)}},o.default.createElement("img",{src:e.url,alt:e.key}),o.default.createElement("div",{className:i.default.selectIcon,style:{display:t===e.key?"block":"none"}},o.default.createElement(r.default,{type:"check"}))))}))},d=u;t.default=d},"WJM/":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var l=n(a("3S7+")),r=n(a("jehZ"));a("Pwec");var o=n(a("CtXQ")),i=n(a("Y/ft")),u=n(a("q1tI")),d=a("LLXN"),c=n(a("4Ofr")),s=function(e){var t=e.color,a=e.check,n=(0,i.default)(e,["color","check"]);return u.default.createElement("div",(0,r.default)({},n,{style:{backgroundColor:t}}),a?u.default.createElement(o.default,{type:"check"}):"")},g=function(e){var t=e.colors,a=e.title,n=e.value,r=e.onChange,o=t;return t||(o=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),u.default.createElement("div",{className:c.default.themeColor},u.default.createElement("h3",{className:c.default.title},a),u.default.createElement("div",{className:c.default.content},o.map(function(e){var t=e.key,a=e.color;return u.default.createElement(l.default,{key:a,title:(0,d.formatMessage)({id:"app.setting.themecolor.".concat(t)})},u.default.createElement(s,{className:c.default.colorBlock,color:a,check:n===a,onClick:function(){return r&&r(a)}}))})))},f=g;t.default=f},X5mu:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var r=l(a("W9HT"));a("qVdP");var o=l(a("jsC+"));a("Telt");var i=l(a("Tckk"));a("lUTK");var u=l(a("BvKs"));a("Pwec");var d=l(a("CtXQ"));a("+BJd");var c=l(a("mr32")),s=l(a("p0pE")),g=l(a("2Taf")),f=l(a("vZ4D")),m=l(a("l4Ni")),M=l(a("ujKo")),p=l(a("MhPg")),I=n(a("q1tI")),h=a("LLXN"),y=l(a("wd/R")),N=l(a("bt/X")),C=l(a("h3zL")),v=function(e){function t(){return(0,g.default)(this,t),(0,m.default)(this,(0,M.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"getNoticeData",value:function(){var e=this.props.notices,t=void 0===e?[]:e;if(0===t.length)return{};var a=t.map(function(e){var t=(0,s.default)({},e);if(t.datetime&&(t.datetime=(0,y.default)(e.datetime).fromNow()),t.id&&(t.key=t.id),t.extra&&t.status){var a={todo:"",processing:"blue",urgent:"red",doing:"gold"}[t.status];t.extra=I.default.createElement(c.default,{color:a,style:{marginRight:0}},t.extra)}return t});return(0,N.default)(a,"type")}},{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.onMenuClick,n=e.theme,l=I.default.createElement(u.default,{className:C.default.menu,selectedKeys:[],onClick:a},I.default.createElement(u.default.Item,{key:"userCenter"},I.default.createElement(d.default,{type:"user"}),I.default.createElement(h.FormattedMessage,{id:"menu.account.center",defaultMessage:"account center"})),I.default.createElement(u.default.Item,{key:"userinfo"},I.default.createElement(d.default,{type:"setting"}),I.default.createElement(h.FormattedMessage,{id:"menu.account.settings",defaultMessage:"account settings"})),I.default.createElement(u.default.Item,{key:"triggerError"},I.default.createElement(d.default,{type:"close-circle"}),I.default.createElement(h.FormattedMessage,{id:"menu.account.trigger",defaultMessage:"Trigger Error"})),I.default.createElement(u.default.Divider,null),I.default.createElement(u.default.Item,{key:"logout"},I.default.createElement(d.default,{type:"logout"}),I.default.createElement(h.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"}))),c=C.default.right;return"dark"===n&&(c="".concat(C.default.right,"  ").concat(C.default.dark)),I.default.createElement("div",{className:c},t.name?I.default.createElement(o.default,{overlay:l},I.default.createElement("span",{className:"".concat(C.default.action," ").concat(C.default.account)},I.default.createElement(i.default,{size:"small",className:C.default.avatar,src:t.avatar,alt:"avatar"}),I.default.createElement("span",{className:C.default.name},t.name))):I.default.createElement(r.default,{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),t}(I.PureComponent);t.default=v},ctiy:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ"));a("miYZ");var o=l(a("tsqr")),i=l(a("2Taf")),u=l(a("vZ4D")),d=l(a("l4Ni")),c=l(a("ujKo")),s=l(a("MhPg"));a("B9cy");var g=l(a("Ol7k")),f=n(a("q1tI")),m=a("LLXN"),M=l(a("MFj2")),p=a("MuoO"),I=l(a("usdK")),h=l(a("NtFa")),y=l(a("wWO0")),N=l(a("IGtV")),C=l(a("HZnN")),v=g.default.Header,D=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.state={visible:!0},a.getHeadWidth=function(){var e=a.props,t=e.isMobile,n=e.collapsed,l=e.setting,r=l.fixedHeader,o=l.layout;return t||!r||"topmenu"===o?"100%":n?"calc(100% - 80px)":"calc(100% - 256px)"},a.handleNoticeClear=function(e){o.default.success("".concat((0,m.formatMessage)({id:"component.noticeIcon.cleared"})," ").concat((0,m.formatMessage)({id:"component.globalHeader.".concat(e)})));var t=a.props.dispatch;t({type:"global/clearNotices",payload:e})},a.handleMenuClick=function(e){var t=e.key,n=a.props.dispatch;"userCenter"!==t?"triggerError"!==t?"userinfo"!==t?"logout"===t&&n({type:"login/logout"}):I.default.push("/account/settings/base"):I.default.push("/exception/trigger"):I.default.push("/account/center")},a.handleNoticeVisibleChange=function(e){if(e){var t=a.props.dispatch;t({type:"global/fetchNotices"})}},a.handScroll=function(){var e=a.props.autoHideHeader,t=a.state.visible;if(e){var n=document.body.scrollTop+document.documentElement.scrollTop;a.ticking||(a.ticking=!0,requestAnimationFrame(function(){a.oldScrollTop>n&&a.setState({visible:!0}),n>300&&t&&a.setState({visible:!1}),n<300&&!t&&a.setState({visible:!0}),a.oldScrollTop=n,a.ticking=!1}))}},a}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleMenuCollapse,n=e.setting,l=n.navTheme,o=n.layout,i=n.fixedHeader,u=this.state.visible,d="topmenu"===o,c=this.getHeadWidth(),s=u?f.default.createElement(v,{style:{padding:0,width:c},className:i?N.default.fixedHeader:""},d&&!t?f.default.createElement(y.default,(0,r.default)({theme:l,mode:"horizontal",Authorized:C.default,onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)):f.default.createElement(h.default,(0,r.default)({onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props))):null;return f.default.createElement(M.default,{component:"",transitionName:"fade"},s)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),t}(f.PureComponent),A=(0,p.connect)(function(e){var t=e.user,a=e.global,n=e.setting,l=e.loading;return{currentUser:t.currentUser,collapsed:a.collapsed,fetchingNotices:l.effects["global/fetchNotices"],notices:a.notices,setting:n}})(D);t.default=A},gJ0l:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r=l(a("CtXQ"));a("B9cy");var o=l(a("Ol7k")),i=n(a("q1tI")),u=l(a("ggcP")),d=o.default.Footer,c=function(){return i.default.createElement(d,{style:{padding:0}},i.default.createElement(u.default,{links:[{key:"Pro \u9996\u9875",title:"Pro \u9996\u9875",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:i.default.createElement(r.default,{type:"github"}),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}],copyright:i.default.createElement(i.Fragment,null,"Copyright ",i.default.createElement(r.default,{type:"copyright"})," \u5408\u8c5a")}))},s=c;t.default=s},ggcP:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI")),r=n(a("TSYQ")),o=n(a("wNoj")),i=function(e){var t=e.className,a=e.links,n=e.copyright,i=(0,r.default)(o.default.globalFooter,t);return l.default.createElement("footer",{className:i},a&&l.default.createElement("div",{className:o.default.links},a.map(function(e){return l.default.createElement("a",{key:e.key,title:e.key,target:e.blankTarget?"_blank":"_self",href:e.href},e.title)})),n&&l.default.createElement("div",{className:o.default.copyright},n))},u=i;t.default=u},h3zL:function(e,t,a){e.exports={header:"antd-pro-components-global-header-index-header",logo:"antd-pro-components-global-header-index-logo",menu:"antd-pro-components-global-header-index-menu",trigger:"antd-pro-components-global-header-index-trigger",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},m8Tn:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("jehZ")),r=n(a("2Taf")),o=n(a("vZ4D")),i=n(a("l4Ni")),u=n(a("ujKo")),d=n(a("MhPg")),c=n(a("p0pE"));a("B9cy");var s=n(a("Ol7k")),g=n(a("q1tI")),f=n(a("ZFw/")),m=n(a("Y+p1")),M=n(a("Wwog")),p=a("MuoO"),I=a("E6Dt"),h=n(a("TSYQ")),y=n(a("bALw")),N=a("4zCG"),C=a("LLXN"),v=n(a("IamK")),D=n(a("HZnN")),A=(n(a("PceP")),n(a("mxmt"))),E=n(a("gJ0l")),j=n(a("ctiy")),T=n(a("R1Dz")),k=n(a("wOmh")),b=s.default.Content;function w(e,t,a){return e.map(function(e){if(!e.name||!e.path)return null;var n="menu";n=a?"".concat(a,".").concat(e.name):"menu.".concat(e.name);var l=(0,c.default)({},e,{name:(0,C.formatMessage)({id:n,defaultMessage:e.name}),locale:n,authority:e.authority||t});if(e.routes){var r=w(e.routes,e.authority,n);l.children=r}return delete l.routes,l}).filter(function(e){return e})}var x=(0,M.default)(w,m.default),z={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},O=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,i.default)(this,(0,u.default)(t).call(this,e)),a.state={rendering:!0,isMobile:!1,menuData:a.getMenuData()},a.matchParamsPath=function(e){var t=Object.keys(a.breadcrumbNameMap).find(function(t){return(0,y.default)(t).test(e)});return a.breadcrumbNameMap[t]},a.getPageTitle=function(e){var t=a.matchParamsPath(e);if(!t)return"\u5408\u8c5a\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf";var n=(0,C.formatMessage)({id:t.locale||t.name,defaultMessage:t.name});return"".concat(n," - \u5408\u8c5a\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf")},a.getLayoutStyle=function(){var e=a.state.isMobile,t=a.props,n=t.fixSiderbar,l=t.collapsed,r=t.layout;return n&&"topmenu"!==r&&!e?{paddingLeft:l?"80px":"256px"}:null},a.getContentStyle=function(){var e=a.props.fixedHeader;return{margin:"24px 24px 0",paddingTop:e?64:0}},a.handleMenuCollapse=function(e){var t=a.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},a.getPageTitle=(0,M.default)(a.getPageTitle),a.getBreadcrumbNameMap=(0,M.default)(a.getBreadcrumbNameMap,m.default),a.breadcrumbNameMap=a.getBreadcrumbNameMap(),a.matchParamsPath=(0,M.default)(a.matchParamsPath,m.default),a}return(0,d.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;t({type:"user/fetchCurrent"}),t({type:"setting/getSetting"}),this.renderRef=requestAnimationFrame(function(){e.setState({rendering:!1})}),this.enquireHandler=(0,N.enquireScreen)(function(t){var a=e.state.isMobile;a!==t&&e.setState({isMobile:t})})}},{key:"componentDidUpdate",value:function(e){this.breadcrumbNameMap=this.getBreadcrumbNameMap();var t=this.state.isMobile,a=this.props.collapsed;!t||e.isMobile||a||this.handleMenuCollapse(!1)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.renderRef),(0,N.unenquireScreen)(this.enquireHandler)}},{key:"getContext",value:function(){var e=this.props.location;return{location:e,breadcrumbNameMap:this.breadcrumbNameMap}}},{key:"getMenuData",value:function(){var e=this.props.route.routes;return x(e)}},{key:"getBreadcrumbNameMap",value:function(){var e={},t=function t(a){a.forEach(function(a){a.children&&t(a.children),e[a.path]=a})};return t(this.getMenuData()),e}},{key:"renderSettingDrawer",value:function(){this.state.rendering;return null}},{key:"render",value:function(){var e=this,t=this.props,a=t.navTheme,n=t.layout,r=t.children,o=t.location.pathname,i=this.state,u=i.isMobile,d=i.menuData,m="topmenu"===n,M=this.matchParamsPath(o),p=g.default.createElement(s.default,null,m&&!u?null:g.default.createElement(v.default,(0,l.default)({logo:A.default,Authorized:D.default,theme:a,onCollapse:this.handleMenuCollapse,menuData:d,isMobile:u},this.props)),g.default.createElement(s.default,{style:(0,c.default)({},this.getLayoutStyle(),{minHeight:"100vh"})},g.default.createElement(j.default,(0,l.default)({menuData:d,handleMenuCollapse:this.handleMenuCollapse,logo:A.default,isMobile:u},this.props)),g.default.createElement(b,{style:this.getContentStyle()},g.default.createElement(D.default,{authority:M&&M.authority,noMatch:g.default.createElement(k.default,null)},r)),g.default.createElement(E.default,null)));return g.default.createElement(g.default.Fragment,null,g.default.createElement(f.default,{title:this.getPageTitle(o)},g.default.createElement(I.ContainerQuery,{query:z},function(t){return g.default.createElement(T.default.Provider,{value:e.getContext()},g.default.createElement("div",{className:(0,h.default)(t)},p))})),this.renderSettingDrawer())}}]),t}(g.default.PureComponent),L=(0,p.connect)(function(e){var t=e.global,a=e.setting;return(0,c.default)({collapsed:t.collapsed,layout:a.layout},a)})(O);t.default=L},mR0u:function(e,t,a){e.exports={logo:"antd-pro-components-sider-menu-index-logo",sider:"antd-pro-components-sider-menu-index-sider",fixSiderbar:"antd-pro-components-sider-menu-index-fixSiderbar",light:"antd-pro-components-sider-menu-index-light",icon:"antd-pro-components-sider-menu-index-icon"}},mxmt:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},oFg3:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMenuMatches=void 0;var r=l(a("jehZ")),o=l(a("2Taf")),i=l(a("vZ4D")),u=l(a("l4Ni")),d=l(a("ujKo")),c=l(a("MhPg"));a("Pwec");var s=l(a("CtXQ"));a("lUTK");var g=l(a("BvKs")),f=n(a("q1tI")),m=l(a("mOP9")),M=l(a("Y+p1")),p=l(a("Wwog")),I=l(a("bALw")),h=a("S/9j"),y=l(a("mR0u")),N=g.default.SubMenu,C=function(e){return"string"===typeof e&&0===e.indexOf("http")?f.default.createElement("img",{src:e,alt:"icon",className:y.default.icon}):"string"===typeof e?f.default.createElement(s.default,{type:e}):e},v=function(e,t){return e.filter(function(e){return!!e&&(0,I.default)(e).test(t)})};t.getMenuMatches=v;var D=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,u.default)(this,(0,d.default)(t).call(this,e)),a.getNavMenuItems=function(e,t){return e?e.filter(function(e){return e.name&&!e.hideInMenu}).map(function(e){var n=a.getSubMenuOrItem(e,t);return a.checkPermissionItem(e.authority,n)}).filter(function(e){return e}):[]},a.getSelectedMenuKeys=function(e){return(0,h.urlToList)(e).map(function(e){return v(a.flatMenuKeys,e).pop()})},a.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some(function(e){return e.name})){var t=e.name;return f.default.createElement(N,{title:e.icon?f.default.createElement("span",null,C(e.icon),f.default.createElement("span",null,t)):t,key:e.path},a.getNavMenuItems(e.children))}return f.default.createElement(g.default.Item,{key:e.path},a.getMenuItemPath(e))},a.getMenuItemPath=function(e){var t=e.name,n=a.conversionPath(e.path),l=C(e.icon),r=e.target;if(/^https?:\/\//.test(n))return f.default.createElement("a",{href:n,target:r},l,f.default.createElement("span",null,t));var o=a.props,i=o.location,u=o.isMobile,d=o.onCollapse;return f.default.createElement(m.default,{to:n,target:r,replace:n===i.pathname,onClick:u?function(){d(!0)}:void 0},l,f.default.createElement("span",null,t))},a.checkPermissionItem=function(e,t){var n=a.props.Authorized;if(n&&n.check){var l=n.check;return l(e,t)}return t},a.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},a.getSelectedMenuKeys=(0,p.default)(a.getSelectedMenuKeys,M.default),a.flatMenuKeys=a.getFlatMenuKeys(e.menuData),a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"getFlatMenuKeys",value:function(e){var t=this,a=[];return e.forEach(function(e){e.children&&(a=a.concat(t.getFlatMenuKeys(e.children))),a.push(e.path)}),a}},{key:"render",value:function(){var e=this.props,t=e.openKeys,a=e.theme,n=e.mode,l=e.location.pathname,o=this.getSelectedMenuKeys(l);!o.length&&t&&(o=[t[t.length-1]]);var i={};t&&(i={openKeys:t});var u=this.props,d=u.handleOpenChange,c=u.style,s=u.menuData;return f.default.createElement(g.default,(0,r.default)({key:"Menu",mode:n,theme:a,onOpenChange:d,selectedKeys:o,style:c,className:"horizontal"===n?"top-nav-menu":""},i),this.getNavMenuItems(s))}}]),t}(f.PureComponent);t.default=D},wNoj:function(e,t,a){e.exports={globalFooter:"antd-pro-components-global-footer-index-globalFooter",links:"antd-pro-components-global-footer-index-links",copyright:"antd-pro-components-global-footer-index-copyright"}},wOmh:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI")),r=a("LLXN"),o=n(a("mOP9")),i=n(a("luV/")),u=function(){return l.default.createElement(i.default,{type:"403",desc:(0,r.formatMessage)({id:"app.exception.description.403"}),linkElement:o.default,backText:(0,r.formatMessage)({id:"app.exception.back"})})},d=u;t.default=d},wWO0:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ")),o=l(a("2Taf")),i=l(a("vZ4D")),u=l(a("l4Ni")),d=l(a("ujKo")),c=l(a("MhPg")),s=n(a("q1tI")),g=l(a("mOP9")),f=l(a("X5mu")),m=l(a("oFg3")),M=l(a("JwhZ")),p=function(e){function t(){var e,a;(0,o.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(l))),a.state={maxWidth:void 0},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=t.contentWidth,l=t.logo,o=this.state.maxWidth;return s.default.createElement("div",{className:"".concat(M.default.head," ").concat("light"===a?M.default.light:"")},s.default.createElement("div",{ref:function(t){e.maim=t},className:"".concat(M.default.main," ").concat("Fixed"===n?M.default.wide:"")},s.default.createElement("div",{className:M.default.left},s.default.createElement("div",{className:M.default.logo,key:"logo",id:"logo"},s.default.createElement(g.default,{to:"/"},s.default.createElement("img",{src:l,alt:"logo"}),s.default.createElement("h1",null,"\u5408\u8c5a\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"))),s.default.createElement("div",{style:{maxWidth:o}},s.default.createElement(m.default,(0,r.default)({},this.props,{style:{border:"none",height:64}})))),s.default.createElement(f.default,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-280-165-40}}}]),t}(s.PureComponent);t.default=p}}]);