(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{bmwc:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("Mwp2");var d=l(a("VXEj"));a("giR+");var u=l(a("fyUT")),o=l(a("jehZ"));a("+L6B");var i=l(a("2/Rp"));a("2qtc");var s=l(a("kLXV")),c=l(a("p0pE")),f=l(a("2Taf")),m=l(a("vZ4D")),p=l(a("l4Ni")),h=l(a("ujKo")),E=l(a("MhPg"));a("5NDa");var v=l(a("5rEg"));a("7Kak");var g=l(a("9yH6"));a("y8nQ");var b,y,C,I,w=l(a("Vl3Y")),k=n(a("q1tI")),S=a("i8i4"),x=a("MuoO"),L=n(a("qr6c")),D=l(a("zHco")),M=l(a("ALo4")),N=l(a("r5T6")),T=w.default.Item,V=g.default.Group,q=v.default.Search,B=v.default.TextArea,O=(b=(0,x.connect)(function(e){var t=e.product,a=e.loading;return{product:t,loading:a.models.list}}),y=w.default.create(),b(C=y((I=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,p.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=a.state.current,d=r?r.id:"";setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){e||(a.setState({done:!0}),l({type:"product/submit",payload:(0,c.default)({id:d},t)}))})},a.deleteItem=function(e){var t=a.props.dispatch;t({type:"product/submit",payload:{id:e}})},a}return(0,E.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match;t({type:"product/fetch",payload:{storeId:a.params.storeId}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.product.data,l=t.loading;console.log("data",a);var n=this.props.form.getFieldDecorator,c=this.state,f=c.visible,m=c.done,p=c.current,h=void 0===p?{}:p,E=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&s.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},b=m?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},y=k.default.createElement("div",{className:N.default.extraContent},k.default.createElement(q,{className:N.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),C={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},I=function(e){var t=e.data,a=t.price,l=t.stock,n=t.status;return k.default.createElement("div",{className:N.default.listContent},k.default.createElement("div",{className:N.default.listContentItem},k.default.createElement("span",null,"\u552e\u4ef7"),k.default.createElement("p",null,"\xa5 ",L.eval(a/100))),k.default.createElement("div",{className:N.default.listContentItem},k.default.createElement("span",null,"\u5e93\u5b58"),k.default.createElement("p",null,l,"\u4ef6")),k.default.createElement("div",{className:N.default.listContentItem},k.default.createElement("span",null,"\u72b6\u6001"),k.default.createElement("p",null,"selling"===n?"\u5728\u552e":"\u6682\u65e0")))},x=function(e){return k.default.createElement("a",{onClick:function(t){var a=t.key;return E(a,e.current)}},"\u5220\u9664")},O=function(){return m?k.default.createElement(M.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:k.default.createElement(i.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:N.default.formResult}):k.default.createElement(w.default,{onSubmit:e.handleSubmit},k.default.createElement(T,(0,o.default)({label:"\u5546\u54c1ID"},e.formLayout),n("itemId",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5546\u54c1ID"}],initialValue:h.itemId})(k.default.createElement(v.default,{placeholder:"\u8bf7\u8f93\u5165"}))),k.default.createElement(T,(0,o.default)({label:"\u5546\u54c1\u552e\u4ef7"},e.formLayout),n("price",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5546\u54c1\u552e\u4ef7"}],initialValue:h.price})(k.default.createElement(u.default,{min:.01,max:999999999}))),k.default.createElement(T,(0,o.default)({label:"\u5546\u54c1\u5e93\u5b58"},e.formLayout),n("stock",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5546\u54c1\u5e93\u5b58"}],initialValue:h.stock})(k.default.createElement(u.default,{min:.01,max:999999999}))),k.default.createElement(T,(0,o.default)({label:"\u9500\u552e\u72b6\u6001"},e.formLayout),n("status",{rules:[{required:!0}],initialValue:h.status})(k.default.createElement(V,null,k.default.createElement(g.default,{value:"offshelf"},"\u6682\u65e0"),k.default.createElement(g.default,{value:"selling"},"\u5728\u552e")))),k.default.createElement(T,(0,o.default)({},e.formLayout,{label:"\u5546\u54c1\u63cf\u8ff0"}),n("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u5546\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:h.subDescription})(k.default.createElement(B,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return k.default.createElement(D.default,null,k.default.createElement("div",{className:N.default.standardList},k.default.createElement(r.default,{className:N.default.listCard,bordered:!1,title:"\u5546\u54c1\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:y},k.default.createElement(i.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,S.findDOMNode)(t)}},"\u6dfb\u52a0"),k.default.createElement(d.default,{size:"large",rowKey:"id",loading:l,pagination:C,dataSource:a,renderItem:function(t){return k.default.createElement(d.default.Item,{actions:[k.default.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),k.default.createElement(x,{current:t})]},k.default.createElement(d.default.Item.Meta,{title:"[".concat(t.itemId,"]")}),k.default.createElement(I,{data:t}))}}))),k.default.createElement(s.default,(0,o.default)({title:m?null:"\u4efb\u52a1".concat(h?"\u7f16\u8f91":"\u6dfb\u52a0"),className:N.default.standardListForm,width:640,bodyStyle:m?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:f},b),O()))}}]),t}(k.PureComponent),C=I))||C)||C),z=O;t.default=z},r5T6:function(e,t,a){e.exports={standardList:"antd-pro-pages-stores-product-standardList",headerInfo:"antd-pro-pages-stores-product-headerInfo",listContent:"antd-pro-pages-stores-product-listContent",listContentItem:"antd-pro-pages-stores-product-listContentItem",extraContentSearch:"antd-pro-pages-stores-product-extraContentSearch",listCard:"antd-pro-pages-stores-product-listCard",standardListForm:"antd-pro-pages-stores-product-standardListForm",formResult:"antd-pro-pages-stores-product-formResult"}}}]);