(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"0ybZ":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("Mwp2");var d=l(a("VXEj"));a("Telt");var s=l(a("Tckk")),i=l(a("jehZ"));a("+L6B");var o=l(a("2/Rp"));a("2qtc");var u=l(a("kLXV")),c=l(a("p0pE")),f=l(a("2Taf")),p=l(a("vZ4D")),m=l(a("l4Ni")),h=l(a("ujKo")),v=l(a("MhPg"));a("5NDa");var g=l(a("5rEg"));a("y8nQ");var y,b,E,C,w=l(a("Vl3Y")),x=n(a("q1tI")),I=a("i8i4"),S=a("MuoO"),k=l(a("zHco")),L=l(a("ALo4")),M=l(a("lNDh")),D=l(a("mq1R")),N=w.default.Item,T=g.default.Search,V=(y=(0,S.connect)(function(e){var t=e.sales,a=e.loading,l=e.pictures;return{sales:t,loading:a.models.list,pictures:l}}),b=w.default.create(),y(E=b((C=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,m.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1,previewVisible:!1,previewImage:""},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=a.state,d=r.current,s=r.editableIndex,i=d?d.id:"";setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){console.log("fieldsValue",t),e||(a.setState({done:!0}),l(i?{type:"sales/update",payload:(0,c.default)({},t,{id:i,editableIndex:s})}:{type:"sales/add",payload:(0,c.default)({},t)}))})},a.deleteItem=function(e,t){var l=a.props.dispatch;l({type:"sales/remove",payload:{id:e,currentIndex:t}})},a}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"sales/fetch"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.sales.data,l=t.loading;console.log("sales render data",a);var n=this.state,f=n.visible,p=n.done,m=n.previewVisible,h=n.previewImage,v=n.current,y=void 0===v?{}:v,b=this.props.form.getFieldDecorator,E=function(t,a,l){u.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id,l)}})},C=p?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},S=x.default.createElement("div",{className:D.default.extraContent},x.default.createElement(T,{className:D.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),V=function(e){return x.default.createElement("a",{onClick:function(t){var a=t.key;return E(a,e.current,e.index)}},"\u5220\u9664")},q=function(){return p?x.default.createElement(L.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:x.default.createElement(o.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:D.default.formResult}):x.default.createElement(w.default,{onSubmit:e.handleSubmit},x.default.createElement(N,(0,i.default)({label:"\u5206\u7c7b\u540d\u79f0"},e.formLayout),b("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5206\u7c7b\u540d\u79f0"}],initialValue:y.name})(x.default.createElement(g.default,{placeholder:"\u8bf7\u8f93\u5165"}))),x.default.createElement(N,(0,i.default)({},e.formLayout,{label:"\u56fe\u7247"}),b("imageHash",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u56fe\u7247\uff01"}],initialValue:y.imageHash})(x.default.createElement(M.default,null)),x.default.createElement(u.default,{visible:m,footer:null,onCancel:e.handleCancels},x.default.createElement("img",{alt:"example",style:{width:"50%"},src:h}))))};return x.default.createElement(k.default,null,x.default.createElement("div",{className:D.default.standardList},x.default.createElement(r.default,{className:D.default.listCard,bordered:!1,title:"\u5206\u7c7b\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:S},x.default.createElement(o.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,I.findDOMNode)(t)}},"\u6dfb\u52a0"),x.default.createElement(d.default,{size:"large",rowKey:"id",loading:l,pagination:(0,c.default)({},a.pagination,{onChange:function(t){var a=e.props.dispatch;a({type:"sales/fetch",payload:t})}}),dataSource:a.list,renderItem:function(t,a){return x.default.createElement(d.default.Item,{actions:[x.default.createElement("a",{onClick:function(l){l.preventDefault(),e.showEditModal(t,a)}},"\u7f16\u8f91"),x.default.createElement(V,{current:t,index:a})]},x.default.createElement(d.default.Item.Meta,{avatar:x.default.createElement(s.default,{src:t.imageUrl,shape:"square",size:"large"}),title:t.name}))}}))),x.default.createElement(u.default,(0,i.default)({title:p?null:"\u4efb\u52a1".concat(y?"\u7f16\u8f91":"\u6dfb\u52a0"),className:D.default.standardListForm,width:640,bodyStyle:p?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:f},C),q()))}}]),t}(x.PureComponent),E=C))||E)||E),q=V;t.default=q},mq1R:function(e,t,a){e.exports={standardList:"antd-pro-pages-sales-sales-standardList",headerInfo:"antd-pro-pages-sales-sales-headerInfo",listContent:"antd-pro-pages-sales-sales-listContent",listContentItem:"antd-pro-pages-sales-sales-listContentItem",extraContentSearch:"antd-pro-pages-sales-sales-extraContentSearch",listCard:"antd-pro-pages-sales-sales-listCard",standardListForm:"antd-pro-pages-sales-sales-standardListForm",formResult:"antd-pro-pages-sales-sales-formResult"}}}]);