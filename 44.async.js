(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{IepL:function(a,e,t){"use strict";var n=t("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=n(t("p0pE")),d=n(t("d6i3")),s=t("dCQc"),r={namespace:"sales",state:{data:{list:[],pagination:{}}},effects:{fetch:d.default.mark(function a(e,t){var n,l,r,o;return d.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,l=t.call,r=t.put,console.log("sales effects payload",n),a.next=5,l(s.getSalesItems,n);case 5:return o=a.sent,console.log("response",o),a.next=9,r({type:"save",payload:o});case 9:case"end":return a.stop()}},a)}),add:d.default.mark(function a(e,t){var n,l,r,o,p;return d.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,l=e.callback,r=t.call,o=t.put,console.log("sales add payload",n),a.next=5,r(s.postSalesItem,n);case 5:return p=a.sent,a.next=8,o({type:"append",payload:p});case 8:l&&l();case 9:case"end":return a.stop()}},a)}),remove:d.default.mark(function a(e,t){var n,l,r,o;return d.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,l=e.callback,r=t.call,o=t.put,console.log("index",n),a.next=5,r(s.deleteSalesItem,n.id);case 5:return a.next=7,o({type:"delete",payload:n});case 7:l&&l();case 8:case"end":return a.stop()}},a)}),update:d.default.mark(function a(e,t){var n,l,r,o,p;return d.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,l=e.callback,r=t.call,o=t.put,a.next=4,r(s.putSalesItem,n.id,n);case 4:return p=a.sent,a.next=7,o({type:"replace",payload:{editableIndex:n.editableIndex,response:p}});case 7:l&&l();case 8:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return(0,l.default)({},a,{data:e.payload})},append:function(a,e){var t=a.data.list;t.unshift(e.payload);var n=a.data.pagination.total+1;return(0,l.default)({},a,{data:{list:t,pagination:(0,l.default)({},a.data.pagination,{total:n})}})},delete:function(a,e){var t=a.data.list;t.splice(e.payload,1);var n=a.data.pagination.total-1;return(0,l.default)({},a,{data:{list:t,pagination:(0,l.default)({},a.data.pagination,{total:n})}})},replace:function(a,e){var t=a.data.list;return t.splice(e.payload.editableIndex,1,e.payload.response),(0,l.default)({},a,{data:{list:t,pagination:(0,l.default)({},a.data.pagination)}})}}};e.default=r}}]);