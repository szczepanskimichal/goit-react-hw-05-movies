(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135,930,186],{1228:function(){},5370:function(n,e,r){"use strict";var t=r(1228);r.o(t,"BackLink")&&r.d(e,{BackLink:function(){return t.BackLink}}),r.o(t,"Loader")&&r.d(e,{Loader:function(){return t.Loader}}),r.o(t,"MovieList")&&r.d(e,{MovieList:function(){return t.MovieList}}),r.o(t,"SearchBar")&&r.d(e,{SearchBar:function(){return t.SearchBar}})},8076:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return v}});var t=r(5861),i=r(9439),a=r(7757),c=r.n(a),o=r(2791),s=r(7689),u=r(273),d=r(9930),l={},f=r(184),v=function(){var n=(0,o.useState)([]),e=(0,i.Z)(n,2),r=e[0],a=e[1],v=(0,o.useState)(null),h=(0,i.Z)(v,2),p=h[0],x=h[1],k=(0,o.useState)(!1),m=(0,i.Z)(k,2),L=m[0],j=m[1],B=(0,s.UO)().movieId;return(0,o.useEffect)((function(){(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),n.prev=1,n.next=4,(0,u.yo)(B);case 4:e=n.sent,a(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),x(n.t0);case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))()}),[B]),p?alert("Something went wrong"):L?(0,f.jsx)(d.Loader,{}):0===r.length?(0,f.jsx)("p",{children:"Sorry, no information about movie cast"}):(0,f.jsxs)("section",{children:[(0,f.jsx)("h3",{className:l["Cast-header"],children:"Cast:"}),(0,f.jsx)("ul",{className:l["Cast-item"],children:r.map((function(n){var e=n.id,r=n.name,t=n.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://dummyimage.com/300x450/000/fff&text=No+image",width:200,alt:r}),(0,f.jsx)("p",{className:l["Cast-text"],children:r})]},e)}))})]})}},6352:function(n,e,r){"use strict";r(8076)},4290:function(n,e,r){"use strict";r.d(e,{a:function(){return a}});var t=r(5119),i=r(184),a=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(t.NB,{className:"loader",visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},3116:function(){},549:function(n,e,r){"use strict";var t=r(3116);r.o(t,"BackLink")&&r.d(e,{BackLink:function(){return t.BackLink}}),r.o(t,"MovieList")&&r.d(e,{MovieList:function(){return t.MovieList}}),r.o(t,"SearchBar")&&r.d(e,{SearchBar:function(){return t.SearchBar}})},9937:function(n,e,r){"use strict";r.d(e,{e:function(){return a}});r(2791);var t=r(1087),i=r(184),a=function(n){var e=n.movies;return(0,i.jsx)("ul",{children:e.map((function(n){var e=n.id,r=n.title;return(0,i.jsx)("li",{children:(0,i.jsx)(t.rU,{to:"/movies/".concat(e),children:(0,i.jsx)("p",{children:r})})},e)}))})}},186:function(){},1015:function(n,e,r){"use strict";var t=r(186);r.o(t,"BackLink")&&r.d(e,{BackLink:function(){return t.BackLink}}),r.o(t,"Loader")&&r.d(e,{Loader:function(){return t.Loader}}),r.o(t,"MovieList")&&r.d(e,{MovieList:function(){return t.MovieList}}),r.o(t,"SearchBar")&&r.d(e,{SearchBar:function(){return t.SearchBar}})},3188:function(){},6341:function(n,e,r){"use strict";var t=r(3188);r.o(t,"BackLink")&&r.d(e,{BackLink:function(){return t.BackLink}}),r.o(t,"SearchBar")&&r.d(e,{SearchBar:function(){return t.SearchBar}})},4328:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var t,i,a,c=r(2791),o=r(7689),s=r(168),u=r(6444),d=r(1087),l=u.ZP.div(t||(t=(0,s.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),f=u.ZP.header(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n\n  > nav {\n    display: flex;\n  }\n"]))),v=(0,u.ZP)(d.OL)(a||(a=(0,s.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),h=r(9930),p=r(184),x=function(){return(0,p.jsxs)(l,{children:[(0,p.jsx)(f,{children:(0,p.jsxs)("nav",{children:[(0,p.jsx)(v,{to:"",children:"Home"}),(0,p.jsx)(v,{to:"/movies",children:"Movies"})]})}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(h.Loader,{}),children:(0,p.jsx)(o.j3,{})})]})}},2699:function(n,e,r){"use strict";r(4328)},9930:function(n,e,r){"use strict";r.d(e,{Loader:function(){return a.a},MovieList:function(){return o.e}});var t=r(5370);r.o(t,"BackLink")&&r.d(e,{BackLink:function(){return t.BackLink}}),r.o(t,"Loader")&&r.d(e,{Loader:function(){return t.Loader}}),r.o(t,"MovieList")&&r.d(e,{MovieList:function(){return t.MovieList}}),r.o(t,"SearchBar")&&r.d(e,{SearchBar:function(){return t.SearchBar}});r(6352);var i=r(1015);r.o(i,"BackLink")&&r.d(e,{BackLink:function(){return i.BackLink}}),r.o(i,"Loader")&&r.d(e,{Loader:function(){return i.Loader}}),r.o(i,"MovieList")&&r.d(e,{MovieList:function(){return i.MovieList}}),r.o(i,"SearchBar")&&r.d(e,{SearchBar:function(){return i.SearchBar}});var a=r(4290),c=r(549);r.o(c,"BackLink")&&r.d(e,{BackLink:function(){return c.BackLink}}),r.o(c,"MovieList")&&r.d(e,{MovieList:function(){return c.MovieList}}),r.o(c,"SearchBar")&&r.d(e,{SearchBar:function(){return c.SearchBar}});var o=r(9937),s=r(6341);r.o(s,"BackLink")&&r.d(e,{BackLink:function(){return s.BackLink}}),r.o(s,"SearchBar")&&r.d(e,{SearchBar:function(){return s.SearchBar}});r(2699)},7135:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var t=r(5861),i=r(9439),a=r(7757),c=r.n(a),o=r(2791),s=r(7689),u=r(1087),d=r(273),l=r(9930),f={},v=r(184),h=function(){var n,e,r,a=(0,o.useState)([]),h=(0,i.Z)(a,2),p=h[0],x=h[1],k=(0,o.useState)(null),m=(0,i.Z)(k,2),L=m[0],j=m[1],B=(0,o.useState)(!1),g=(0,i.Z)(B,2),b=g[0],S=g[1],w=(0,s.UO)().movieId,M=(0,s.TH)();console.log("location",M);var Z=null!==(n=null===M||void 0===M||null===(e=M.state)||void 0===e||null===(r=e.from)||void 0===r?void 0:r.location)&&void 0!==n?n:"/movies";if((0,o.useEffect)((function(){(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return S(!0),n.prev=1,n.next=4,(0,d.YJ)(w);case 4:e=n.sent,x(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),j(n.t0);case 11:return n.prev=11,S(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))()}),[w]),L)return alert("Something went wrong");if(b)return(0,v.jsx)(l.Loader,{});if(p){var y=p.poster_path,N=p.title,_=p.release_date,C=p.vote_average,D=p.genres,E=p.overview;console.log("movieDetails",p);var U=null===D||void 0===D?void 0:D.map((function(n){return n.name}));return(0,v.jsxs)("main",{children:[(0,v.jsx)(l.BackLink,{to:Z,children:"Go back"}),(0,v.jsxs)("div",{className:f.MovieDEtails,children:[(0,v.jsx)("img",{src:y?"https://image.tmdb.org/t/p/original".concat(y):"https://dummyimage.com/300x450/000/fff&text=No+image",width:300,alt:N}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h2",{className:f["MovieDEtails-title"],children:[N," ",parseInt(_)," "]}),(0,v.jsxs)("h3",{className:f["MovieDEtails-header"],children:["User Score: ",C," "]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h3",{children:["Overview: ",(0,v.jsx)("br",{})]}),(0,v.jsx)("p",{className:f["MovieDEtails-text"],children:E})]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h3",{children:["Genres: ",(0,v.jsx)("br",{})]}),(0,v.jsx)("p",{className:f["MovieDEtails-text"],children:U?U.join(", "):"No genres available"})]})]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"adidtional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,v.jsx)(s.j3,{})]})}return(0,v.jsx)("p",{children:"Sorry, no information about this movie"})}},273:function(n,e,r){"use strict";r.d(e,{Df:function(){return o},Wf:function(){return d},YJ:function(){return s},yo:function(){return u}});var t=r(5861),i=r(7757),a=r.n(i),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"885aafdff1d2260624bec04a8d95bb64"};var o=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(){var e,r,t=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:"",n.next=3,c.Z.get("search/movie?query=".concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.80136280.chunk.js.map