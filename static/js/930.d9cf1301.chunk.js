(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[930,186],{2989:function(r,n,t){"use strict";t.d(n,{h:function(){return o}});t(2791);var e=t(1087),a=t(2134),i="BackLink_BackLink__64hbi",c=t(184),o=function(r){var n=r.to,t=r.children;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(e.rU,{className:i,to:n,children:[(0,c.jsx)(a.kyg,{size:"16"}),t]})})}},8076:function(r,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var e=t(5861),a=t(9439),i=t(7757),c=t.n(i),o=t(2791),s=t(7689),u=t(273),d=t(9930),f="Cast_Cast-item__4lOrj",h="Cast_Cast-header__ItCyt",l="Cast_Cast-text__3QLHz",p=t(184),v=function(){var r=(0,o.useState)([]),n=(0,a.Z)(r,2),t=n[0],i=n[1],v=(0,o.useState)(null),x=(0,a.Z)(v,2),m=x[0],b=x[1],g=(0,o.useState)(!1),L=(0,a.Z)(g,2),j=L[0],k=L[1],w=(0,s.UO)().movieId;return(0,o.useEffect)((function(){(0,e.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return k(!0),r.prev=1,r.next=4,(0,u.yo)(w);case 4:n=r.sent,i(n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),b(r.t0);case 11:return r.prev=11,k(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})))()}),[w]),m?alert("Something went wrong"):j?(0,p.jsx)(d.Loader,{}):0===t.length?(0,p.jsx)("p",{children:"Sorry, no information about movie cast"}):(0,p.jsxs)("section",{children:[(0,p.jsx)("h3",{className:h,children:"Cast:"}),(0,p.jsx)("ul",{className:f,children:t.map((function(r){var n=r.id,t=r.name,e=r.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://dummyimage.com/300x450/000/fff&text=No+image",width:200,alt:t}),(0,p.jsx)("p",{className:l,children:t})]},n)}))})]})}},6352:function(r,n,t){"use strict";t(8076)},4290:function(r,n,t){"use strict";t.d(n,{a:function(){return i}});var e=t(5119),a=t(184),i=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(e.NB,{className:"loader",visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},3116:function(){},549:function(r,n,t){"use strict";var e=t(3116);t.o(e,"MovieList")&&t.d(n,{MovieList:function(){return e.MovieList}}),t.o(e,"SearchBar")&&t.d(n,{SearchBar:function(){return e.SearchBar}})},9937:function(r,n,t){"use strict";t.d(n,{e:function(){return i}});t(2791);var e=t(1087),a=t(184),i=function(r){var n=r.movies;return(0,a.jsx)("ul",{children:n.map((function(r){var n=r.id,t=r.title;return(0,a.jsx)("li",{children:(0,a.jsx)(e.rU,{to:"/movies/".concat(n),children:(0,a.jsx)("p",{children:t})})},n)}))})}},186:function(){},1015:function(r,n,t){"use strict";var e=t(186);t.o(e,"Loader")&&t.d(n,{Loader:function(){return e.Loader}}),t.o(e,"MovieList")&&t.d(n,{MovieList:function(){return e.MovieList}}),t.o(e,"SearchBar")&&t.d(n,{SearchBar:function(){return e.SearchBar}})},3188:function(){},6341:function(r,n,t){"use strict";var e=t(3188);t.o(e,"SearchBar")&&t.d(n,{SearchBar:function(){return e.SearchBar}})},4328:function(r,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var e,a,i,c=t(2791),o=t(7689),s=t(168),u=t(6444),d=t(1087),f=u.ZP.div(e||(e=(0,s.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),h=u.ZP.header(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n\n  > nav {\n    display: flex;\n  }\n"]))),l=(0,u.ZP)(d.OL)(i||(i=(0,s.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),p=t(9930),v=t(184),x=function(){return(0,v.jsxs)(f,{children:[(0,v.jsx)(h,{children:(0,v.jsxs)("nav",{children:[(0,v.jsx)(l,{to:"",children:"Home"}),(0,v.jsx)(l,{to:"/movies",children:"Movies"})]})}),(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)(p.Loader,{}),children:(0,v.jsx)(o.j3,{})})]})}},2699:function(r,n,t){"use strict";t(4328)},9930:function(r,n,t){"use strict";t.d(n,{BackLink:function(){return e.h},Loader:function(){return i.a},MovieList:function(){return o.e}});var e=t(2989),a=(t(6352),t(1015));t.o(a,"Loader")&&t.d(n,{Loader:function(){return a.Loader}}),t.o(a,"MovieList")&&t.d(n,{MovieList:function(){return a.MovieList}}),t.o(a,"SearchBar")&&t.d(n,{SearchBar:function(){return a.SearchBar}});var i=t(4290),c=t(549);t.o(c,"MovieList")&&t.d(n,{MovieList:function(){return c.MovieList}}),t.o(c,"SearchBar")&&t.d(n,{SearchBar:function(){return c.SearchBar}});var o=t(9937),s=t(6341);t.o(s,"SearchBar")&&t.d(n,{SearchBar:function(){return s.SearchBar}});t(2699)},273:function(r,n,t){"use strict";t.d(n,{Df:function(){return o},Wf:function(){return d},YJ:function(){return s},yo:function(){return u}});var e=t(5861),a=t(7757),i=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"885aafdff1d2260624bec04a8d95bb64"};var o=function(){var r=(0,e.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day");case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,e.Z)(i().mark((function r(n){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(n));case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),u=function(){var r=(0,e.Z)(i().mark((function r(n){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(n,"/credits"));case 2:return t=r.sent,r.abrupt("return",t.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),d=function(){var r=(0,e.Z)(i().mark((function r(){var n,t,e=arguments;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",r.next=3,c.Z.get("search/movie?query=".concat(n));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=930.d9cf1301.chunk.js.map