"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[861],{2315:function(n,e,t){t.d(e,{s:function(){return l}});var r=t(5861),i=t(5671),c=t(3144),a=t(7757),o=t.n(a),s=t(4569),u=t.n(s)().create({baseURL:"https://api.themoviedb.org/3"}),l=function(){function n(){(0,i.Z)(this,n),this._apiKey="4a69d9470951ad07e8f0cc655bb46705",this.page=1}return(0,c.Z)(n,[{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"getTrendingFilms",value:function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/trending/movies/day?api_key=".concat(this._apiKey)).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"getFilmByName",value:function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/search/movie?api_key=".concat(this._apiKey,"&query=").concat(e,"&page=1&include_adult=false")).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getFilmDetails",value:function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.get("/movie/".concat(e,"?api_key=").concat(this._apiKey)).then((function(n){return n.data})).catch((function(n){return console.log(n)})));case 1:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getFilmReviews",value:function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(e,"/reviews?api_key=").concat(this._apiKey)).then((function(n){return n.data.results})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getFilmActors",value:function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/movie/".concat(e,"/credits?api_key=").concat(this._apiKey)).then((function(n){return n.data.cast})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()}]),n}()},9861:function(n,e,t){t.r(e);var r=t(8152),i=t(2791),c=t(6871),a=t(3504),o=t(2315),s=t(8618),u=t(184),l=new o.s;e.default=function(){var n=(0,i.useState)(null),e=(0,r.Z)(n,2),t=e[0],o=e[1],p=(0,c.UO)().movieId;return(0,i.useEffect)((function(){l.getFilmDetails(Number(p)).then(o)}),[p]),(0,u.jsx)(s.W2,{children:t&&(0,u.jsxs)("div",{children:[(0,u.jsxs)(s.pS,{children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:""})}),(0,u.jsxs)(s.Wl,{children:[(0,u.jsx)("h2",{children:t.original_title}),(0,u.jsx)("p",{children:"User score: 74%"}),(0,u.jsxs)("div",{children:[(0,u.jsx)(s.bi,{children:"Overview:"}),(0,u.jsx)("p",{children:t.overview})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(s.bi,{children:"Genres:"}),t.genres.map((function(n){return(0,u.jsxs)("span",{children:[" ",n.name," "]},n.id)}))]})]})]}),(0,u.jsxs)(s.SC,{children:[(0,u.jsx)("span",{children:"Additional Info"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)(s.oA,{children:(0,u.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)(s.oA,{children:(0,u.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,u.jsx)(c.j3,{})]})})}},8618:function(n,e,t){t.d(e,{aV:function(){return f},W2:function(){return h},BB:function(){return x},bi:function(){return v},pS:function(){return g},SC:function(){return m},Wl:function(){return y},oA:function(){return w}});var r,i,c,a,o,s,u,l,p=t(168),d=t(2499),f=d.Z.ul(r||(r=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 900px;\n"]))),h=d.Z.div(i||(i=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n\n"]))),x=d.Z.div(c||(c=(0,p.Z)(["\n  display: block;\n  width: 120px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),v=d.Z.p(a||(a=(0,p.Z)(["\n  font-weight: bold;\n"]))),g=d.Z.div(o||(o=(0,p.Z)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    \n    img {\n        width: 200px;\n    }\n"]))),m=d.Z.div(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-top: 3px solid lightgray;\n  border-bottom:  3px solid lightgray;\n  margin-top: 5px;\n  padding-top: 10px;\n  padding-bottom: 3px;\n    \n"]))),y=d.Z.div(u||(u=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  margin-bottom: 10px;\n"]))),w=d.Z.li(l||(l=(0,p.Z)(["\n  margin-top: 10px;\n"])))}}]);
//# sourceMappingURL=861.e6ad5bc6.chunk.js.map