(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{PGck:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2qtc");var n=l(a("kLXV"));a("DZo9");var i=l(a("8z0m"));a("Pwec");var r,d,s,u=l(a("CtXQ")),o=l(a("d6i3")),c=l(a("1l/V")),f=l(a("2Taf")),m=l(a("vZ4D")),p=l(a("l4Ni")),h=l(a("ujKo")),v=l(a("MhPg")),g=l(a("q1tI")),b=a("MuoO"),E=(r=(0,b.connect)(function(e){var t=e.global;return{token:t.uploadToken}}),r((s=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return a=(0,p.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(n))),a.state={previewVisible:!1,previewImage:"",fileList:[]},a.handleCancel=function(){return a.setState({previewVisible:!1})},a.handlePreview=function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.beforeUpload=function(){var e=a.props.dispatch;return new Promise(function(){var t=(0,c.default)(o.default.mark(function t(a){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e({type:"global/updateUploadToken"});case 2:a();case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},a.handleChange=function(e){var t=e.fileList,l=e.file;if(a.setState({fileList:t}),"done"===l.status){var n=a.props.onChange,i=t.map(function(e){var t=e.response;return t.hash});n(i)}},a}return(0,v.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.state,t=e.previewVisible,a=e.previewImage,l=e.fileList,r=this.props.token,d=g.default.createElement("div",null,g.default.createElement(u.default,{type:"plus"}),g.default.createElement("div",{className:"ant-upload-text"},"Upload"));return g.default.createElement("div",{className:"clearfix"},g.default.createElement(i.default,{action:"https://up.qiniup.com",listType:"picture-card",fileList:l,data:{token:r},beforeUpload:this.beforeUpload,onPreview:this.handlePreview,onChange:this.handleChange},l.length>=6?null:d),g.default.createElement(n.default,{visible:t,footer:null,onCancel:this.handleCancel},g.default.createElement("img",{alt:"example",style:{width:"100%"},src:a})))}}]),t}(g.default.Component),d=s))||d),y=E;t.default=y},WN3O:function(e,t,a){e.exports={standardList:"antd-pro-pages-list-basic-list-standardList",headerInfo:"antd-pro-pages-list-basic-list-headerInfo",listContent:"antd-pro-pages-list-basic-list-listContent",listContentItem:"antd-pro-pages-list-basic-list-listContentItem",extraContentSearch:"antd-pro-pages-list-basic-list-extraContentSearch",listCard:"antd-pro-pages-list-basic-list-listCard",standardListForm:"antd-pro-pages-list-basic-list-standardListForm",formResult:"antd-pro-pages-list-basic-list-formResult"}},w9uU:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var i=l(a("bx4M"));a("Mwp2");var r=l(a("VXEj"));a("Telt");var d=l(a("Tckk"));a("giR+");var s=l(a("fyUT")),u=l(a("jehZ"));a("+L6B");var o=l(a("2/Rp"));a("2qtc");var c=l(a("kLXV")),f=l(a("p0pE")),m=l(a("2Taf")),p=l(a("vZ4D")),h=l(a("l4Ni")),v=l(a("ujKo")),g=l(a("MhPg"));a("OaEy");var b=l(a("2fM7"));a("5NDa");var E=l(a("5rEg"));a("7Kak");var y=l(a("9yH6"));a("y8nQ");var w,C,L,I,x=l(a("Vl3Y")),k=n(a("q1tI")),S=a("i8i4"),M=l(a("PGck")),V=l(a("lNDh")),N=n(a("qr6c")),B=a("MuoO"),T=l(a("zHco")),q=l(a("ALo4")),D=l(a("WN3O")),P=x.default.Item,O=y.default.Group,U=E.default.Search,j=b.default.Option,H=(w=(0,B.connect)(function(e){var t=e.basic,a=e.loading;return{basic:t,loading:a.models.list}}),C=x.default.create(),w(L=C((I=function(e){function t(){var e,a;(0,m.default)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return a=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1,showEditModal:!0,previewVisible:!1,previewImage:""},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0,showEditModal:!0})},a.showEditModal=function(e){console.log("list BasicList item ",e),a.setState({visible:!0,showEditModal:!1,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancels=function(){return a.setState({previewVisible:!1})},a.handlePreview=function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,i=a.state,r=i.current,d=i.editableIndex;console.log("list BasicList handleSubmit current",r);var s=r?r.code:"";console.log("list BasicList handleSubmit code",s),Math.formatInt=function(e){var t=N.eval(100*e);return N.round(t)},console.log("list BasicList ceshi ",Math.formatInt(1.00001)),setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){var n=Math.formatInt(t.price),i=t.id,r=Math.formatInt(t.cost);console.log("list BasicList fieldsValue",t),e||(a.setState({done:!0}),l(s?{type:"basic/update",payload:(0,f.default)({},t,{editableIndex:d,code:s,price:n,cost:r,itemCategoryId:i})}:{type:"basic/add",payload:(0,f.default)({},t,{price:n,cost:r,itemCategoryId:i})}))})},a.deleteItem=function(e,t){console.log("list BasicList currentIndex",t),console.log("list BasicList code",e);var l=a.props.dispatch;l({type:"basic/remove",payload:e})},a.handleSearch=function(e){console.log("list BasicList value",e);var t=a.props.dispatch;t({type:"basic/search",payload:e})},a}return(0,g.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"basic/fetch"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.basic,l=a.items,n=a.category,m=a.pagination,p=t.loading;console.log("list models BasicList",l),console.log("list models pagination",m);var h=this.props.form.getFieldDecorator,v=this.state,g=v.visible,w=v.done,C=v.showEditModal,L=v.previewVisible,I=v.previewImage,B=v.current,H=void 0===B?{}:B,z=function(t,a,l){c.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.code,l)}})},F=w?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},R=k.default.createElement("div",{className:D.default.extraContent},k.default.createElement(U,{className:D.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165\u6761\u5f62\u7801",onSearch:this.handleSearch})),X=function(e){var t=e.data,a=t.code,l=t.cost,n=t.price,i=t.status;return k.default.createElement("div",{className:D.default.listContent},k.default.createElement("div",{className:D.default.listContentItem},k.default.createElement("span",null,"\u6761\u5f62\u7801"),k.default.createElement("p",null,a)),k.default.createElement("div",{className:D.default.listContentItem},k.default.createElement("span",null,"\u6210\u672c"),k.default.createElement("p",null,"\xa5 ",N.eval(l/100))),k.default.createElement("div",{className:D.default.listContentItem},k.default.createElement("span",null,"\u552e\u4ef7"),k.default.createElement("p",null,"\xa5 ",N.eval(n/100))),k.default.createElement("div",{className:D.default.listContentItem},k.default.createElement("span",null,"\u72b6\u6001"),k.default.createElement("p",null,"selling"===i?"\u5728\u552e":"\u6682\u65e0")))},A=function(e){return k.default.createElement("a",{onClick:function(t){var a=t.key;return z(a,e.current,e.index)}},"\u5220\u9664")},K=function(){return w?k.default.createElement(q.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:k.default.createElement(o.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:D.default.formResult}):k.default.createElement(x.default,{onSubmit:e.handleSubmit},k.default.createElement(P,(0,u.default)({label:"\u5546\u54c1\u540d\u79f0"},e.formLayout),h("title",{rules:[{required:C,message:"\u8bf7\u8f93\u5165\u5546\u54c1\u540d\u79f0"}],initialValue:H.title})(k.default.createElement(E.default,{placeholder:"\u8bf7\u8f93\u5165"}))),k.default.createElement(P,(0,u.default)({label:"\u5546\u54c1\u6210\u672c"},e.formLayout),h("cost",{rules:[{required:C,message:"\u8bf7\u8f93\u5165\u5546\u54c1\u6210\u672c"}],initialValue:(H.cost?H.cost:" ")/100})(k.default.createElement(s.default,{min:.01,max:999999999}))),k.default.createElement(P,(0,u.default)({label:"\u5546\u54c1\u552e\u4ef7"},e.formLayout),h("price",{rules:[{required:C,message:"\u8bf7\u8f93\u5165\u5546\u54c1\u552e\u4ef7"}],initialValue:(H.price?H.price:" ")/100})(k.default.createElement(s.default,{min:.01,max:999999999}))),k.default.createElement(P,(0,u.default)({label:"\u5546\u54c1\u6761\u5f62\u7801"},e.formLayout),h("code",{rules:[{required:C,message:"\u8bf7\u8f93\u5165\u6761\u7801",min:5,max:13}],initialValue:H.code})(k.default.createElement(E.default,{placeholder:"\u8bf7\u8f93\u5165\u6761\u7801",disabled:!C}))),k.default.createElement(P,(0,u.default)({label:"\u9500\u552e\u72b6\u6001"},e.formLayout),h("status",{rules:[{required:C}],initialValue:H.status})(k.default.createElement(O,null,k.default.createElement(y.default,{value:"offshelf"},"\u6682\u65e0"),k.default.createElement(y.default,{value:"selling"},"\u5728\u552e")))),n?k.default.createElement(P,(0,u.default)({label:"\u5206\u7c7b"},e.formLayout),h("id",{rules:[{required:C}],initialValue:H.name})(k.default.createElement(b.default,{style:{width:120}},n.map(function(e){return k.default.createElement(j,{key:e.id,value:e.id},e.name)})))):null,k.default.createElement(P,(0,u.default)({},e.formLayout,{label:"\u5546\u54c1\u5c01\u9762"}),h("imageHash",{rules:[{message:"\u8bf7\u9009\u62e9\u5546\u54c1\u56fe\u7247\uff01"}],initialValue:H.imageHash})(k.default.createElement(V.default,null)),k.default.createElement(c.default,{visible:L,footer:null,onCancel:e.handleCancels},k.default.createElement("img",{alt:"example",style:{width:"50%"},src:I}))),k.default.createElement(P,(0,u.default)({},e.formLayout,{label:"\u5546\u54c1\u56fe\u7247"}),h("imageHashes",{rules:[{message:"\u8bf7\u9009\u62e9\u5546\u54c1\u56fe\u7247\uff01",type:"array"}],initialValue:H.imageHashes})(k.default.createElement(M.default,null)),k.default.createElement(c.default,{visible:L,footer:null,onCancel:e.handleCancels},k.default.createElement("img",{alt:"example",style:{width:"50%"},src:I}))))};return k.default.createElement(T.default,null,k.default.createElement("div",{className:D.default.standardList},k.default.createElement(i.default,{className:D.default.listCard,bordered:!1,title:"\u5546\u54c1\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:R},k.default.createElement(o.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,S.findDOMNode)(t)}},"\u6dfb\u52a0"),k.default.createElement(r.default,{size:"large",rowKey:"id",loading:p,pagination:(0,f.default)({},m,{onChange:function(t){var a=e.props.dispatch;a({type:"basic/fetch",payload:t})}}),dataSource:l,renderItem:function(t,a){return k.default.createElement(r.default.Item,{actions:[k.default.createElement("a",{onClick:function(l){l.preventDefault(),e.showEditModal(t,a)}},"\u7f16\u8f91"),k.default.createElement(A,{current:t,index:a})]},k.default.createElement(r.default.Item.Meta,{avatar:k.default.createElement(d.default,{src:t.imageUrl,shape:"square",size:"large"}),title:t.title,description:t.detail}),k.default.createElement(X,{data:t}))}}))),k.default.createElement(c.default,(0,u.default)({title:w?null:"\u4efb\u52a1".concat(H?"\u7f16\u8f91":"\u6dfb\u52a0"),className:D.default.standardListForm,width:640,bodyStyle:w?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:g},F),K()))}}]),t}(k.PureComponent),L=I))||L)||L),z=H;t.default=z}}]);