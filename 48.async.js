(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"0dPK":function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),u=n(t("d6i3")),c=t("dCQc"),s={namespace:"rule",state:{data:{list:[],pagination:{}}},effects:{fetch:u.default.mark(function e(a,t){var n,r,s,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,s=t.put,e.next=4,r(c.queryRule,n);case 4:return l=e.sent,e.next=7,s({type:"save",payload:l});case 7:case"end":return e.stop()}},e)}),add:u.default.mark(function e(a,t){var n,r,s,l,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,s=t.call,l=t.put,e.next=4,s(c.addRule,n);case 4:return d=e.sent,e.next=7,l({type:"save",payload:d});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),remove:u.default.mark(function e(a,t){var n,r,s,l,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,s=t.call,l=t.put,e.next=4,s(c.removeRule,n);case 4:return d=e.sent,e.next=7,l({type:"save",payload:d});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),update:u.default.mark(function e(a,t){var n,r,s,l,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,s=t.call,l=t.put,e.next=4,s(c.updateRule,n);case 4:return d=e.sent,e.next=7,l({type:"save",payload:d});case 7:r&&r();case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,r.default)({},e,{data:a.payload})}}};a.default=s}}]);