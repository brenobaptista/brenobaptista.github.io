(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(203),s=a(201);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},197:function(e,t,a){var n;e.exports=(n=a(200))&&n.default||n},198:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(197),a(7).default.enqueue;var o=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,s=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,s&&i(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||i,staticQueryData:e})})}},199:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Breno Baptista"}}}}')},200:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),i=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var n=a(202),r=a(0),i=a.n(r),s=a(206),o=a.n(s);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,c=n.data.site,l=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},202:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Breno Baptista","description":"This website is the portfolio of the web developer Breno Baptista","author":"@gatsbyjs"}}}}')},203:function(e,t,a){"use strict";var n=a(199),r=a(0),i=a.n(r),s=a(198);var o=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isMenuOpen:!1},t.handleMenu=function(){t.setState(function(e){return{isMenuOpen:!e.isMenuOpen}})},t.closeMenu=function(){t.setState({isMenuOpen:!1})},t.render=function(){var e=t.props.siteTitle,a=t.state.isMenuOpen?"is-active":"";return i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(s.a,{to:"/",className:"navbar-item is-size-4"},e),i.a.createElement("a",{role:"button",className:"navbar-burger burger "+a,"aria-label":"menu","aria-expanded":"false","data-target":"myNavbar",onClick:t.handleMenu},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"myNavbar",className:"navbar-menu "+a},i.a.createElement("div",{className:"navbar-end"},i.a.createElement(s.a,{to:"/",className:"navbar-item is-size-5",onClick:t.closeMenu},"Home"),i.a.createElement(s.a,{to:"/projects/",className:"navbar-item is-size-5",onClick:t.closeMenu},"Projects"),i.a.createElement(s.a,{to:"/stack/",className:"navbar-item is-size-5",onClick:t.closeMenu},"Stack"),i.a.createElement(s.a,{to:"/downloads/",className:"navbar-item is-size-5",onClick:t.closeMenu},"Downloads"))))},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n}(r.Component);o.defaultProps={siteTitle:""};var c=o;a(207),a(208),t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{className:"container"},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by"," ",i.a.createElement("a",{href:"https://github.com/brenobaptista"},"Breno Baptista"))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-6299925bbed552018220.js.map