(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{B1BB:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("Mwp2");var d=l(a("VXEj"));a("Telt");var u=l(a("Tckk")),i=l(a("jehZ"));a("+L6B");var o=l(a("2/Rp"));a("MXD1");var s=l(a("CFYs"));a("2qtc");var c=l(a("kLXV")),f=l(a("p0pE")),m=l(a("2Taf")),p=l(a("vZ4D")),h=l(a("l4Ni")),v=l(a("ujKo")),E=l(a("MhPg"));a("5NDa");var g=l(a("5rEg"));a("y8nQ");var y,C,b,w,S=l(a("Vl3Y")),k=n(a("q1tI")),M=a("i8i4"),x=a("MuoO"),I=l(a("zHco")),N=l(a("ALo4")),D=l(a("MgQm")),L=S.default.Item,T=g.default.Search,B=(y=(0,x.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),C=S.default.create(),y(b=C((w=function(e){function t(){var e,a;(0,m.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=a.state.current,d=r?r.id:"";setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){e||(a.setState({done:!0}),l({type:"list/submit",payload:(0,f.default)({id:d},t)}))})},a.deleteItem=function(e){var t=a.props.dispatch;t({type:"list/submit",payload:{id:e}})},a}return(0,E.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list.list,l=t.loading,n=this.props.form.getFieldDecorator,f=this.state,m=f.visible,p=f.done,h=f.current,v=void 0===h?{}:h,E=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&c.default.confirm({title:"\u5220\u9664\u666e\u901a\u7528\u6237",content:"\u786e\u5b9a\u5220\u9664\u8be5\u666e\u901a\u7528\u6237\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},y=p?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},C=k.default.createElement("div",{className:D.default.extraContent},k.default.createElement(T,{className:D.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),b={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},w=function(e){var t=e.data,a=t.owner,l=t.percent,n=t.status;return k.default.createElement("div",{className:D.default.listContent},k.default.createElement("div",{className:D.default.listContentItem},k.default.createElement("span",null,"Owner"),k.default.createElement("p",null,a)),k.default.createElement("div",{className:D.default.listContentItem},k.default.createElement("span",null,"\u4eab\u53d7\u6298\u6263"),k.default.createElement("p",null,"9.5\u6298")),k.default.createElement("div",{className:D.default.listContentItem},k.default.createElement(s.default,{percent:l,status:n,strokeWidth:6,style:{width:180}})))},x=function(e){return k.default.createElement("a",{onClick:function(t){var a=t.key;return E(a,e.current)}},"\u5220\u9664")},B=function(){return p?k.default.createElement(N.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:k.default.createElement(o.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:D.default.formResult}):k.default.createElement(S.default,{onSubmit:e.handleSubmit},k.default.createElement(L,(0,i.default)({label:"\u666e\u901a\u7528\u6237\u540d\u79f0"},e.formLayout),n("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u666e\u901a\u7528\u6237\u540d\u79f0"}],initialValue:v.title})(k.default.createElement(g.default,{placeholder:"\u8bf7\u8f93\u5165"}))),k.default.createElement(L,(0,i.default)({label:"\u666e\u901a\u7528\u6237\u5185\u5bb9"},e.formLayout),n("content",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u666e\u901a\u7528\u6237\u5185\u5bb9"}],initialValue:v.content})(k.default.createElement(g.default,{placeholder:"\u8bf7\u8f93\u5165"}))))};return k.default.createElement(I.default,null,k.default.createElement("div",{className:D.default.standardList},k.default.createElement(r.default,{className:D.default.listCard,bordered:!1,title:"\u666e\u901a\u7528\u6237\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:C},k.default.createElement(o.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,M.findDOMNode)(t)}},"\u6dfb\u52a0"),k.default.createElement(d.default,{size:"large",rowKey:"id",loading:l,pagination:b,dataSource:a,renderItem:function(t){return k.default.createElement(d.default.Item,{actions:[k.default.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),k.default.createElement(x,{current:t})]},k.default.createElement(d.default.Item.Meta,{avatar:k.default.createElement(u.default,{src:t.logo,shape:"square",size:"large"}),title:k.default.createElement("a",{href:t.href},t.title),description:t.subDescription}),k.default.createElement(w,{data:t}))}}))),k.default.createElement(c.default,(0,i.default)({title:p?null:"\u666e\u901a\u7528\u6237".concat(v?"\u7f16\u8f91":"\u6dfb\u52a0"),className:D.default.standardListForm,width:640,bodyStyle:p?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:m},y),B()))}}]),t}(k.PureComponent),b=w))||b)||b),O=B;t.default=O},MgQm:function(e,t,a){e.exports={standardList:"antd-pro-pages-customer-vip-standardList",headerInfo:"antd-pro-pages-customer-vip-headerInfo",listContent:"antd-pro-pages-customer-vip-listContent",listContentItem:"antd-pro-pages-customer-vip-listContentItem",extraContentSearch:"antd-pro-pages-customer-vip-extraContentSearch",listCard:"antd-pro-pages-customer-vip-listCard",standardListForm:"antd-pro-pages-customer-vip-standardListForm",formResult:"antd-pro-pages-customer-vip-formResult"}}}]);