(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"queryImage",function(){return d});a(204);var r=a(0),i=a.n(r),n=a(203),s=a(201),l=a(211),o=a(210),c=a.n(o),d="560290894";t.default=function(e){var t=e.data;return i.a.createElement(n.a,null,i.a.createElement(s.a,{title:"Downloads"}),i.a.createElement("section",{className:"section is-size-4-desktop is-size-5-touch"},i.a.createElement("h1",{className:"title has-text-centered"},"Downloads"),i.a.createElement("hr",null),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-half is-offset-one-quarter"},i.a.createElement(l.a,{title:"Curriculum Vitae (in Portuguese)",subtitle:"My latest curriculum vitae",link:"https://drive.google.com/file/d/1-bGOhiTphjqd_Lmm7jC2mNvDoInBg8GD/view?usp=sharing",tags:["Curriculum Vitae"],image:i.a.createElement(c.a,{fixed:t.curriculumvitae.childImageSharp.fixed,alt:"curriculum vitae"})}),i.a.createElement(l.a,{title:"Free Ebook (in Portuguese)",subtitle:"The Eagle Negotiator's Guide - Coauthor: Angeliano Sousa",link:"https://drive.google.com/open?id=1EyaNsn_rpdBki7S5lalSI9l73u-QUKBb",tags:["Ebook","Angeliano Sousa"],image:i.a.createElement(c.a,{fixed:t.ebookaguia.childImageSharp.fixed,alt:"free ebook"})}),i.a.createElement(l.a,{title:"Certificates",subtitle:"College Certificates",link:"https://drive.google.com/open?id=17bfdvAJm00vJgqQwRiNsJ0zyRgLIGz0v",tags:["Certificates"],image:i.a.createElement(c.a,{fixed:t.certificates2.childImageSharp.fixed,alt:"free ebook"})}),i.a.createElement(l.a,{title:"Medals",subtitle:"Science Olympiads Medals",link:"https://drive.google.com/open?id=1MvF6eOMCpa7Xs1-Jk2g6WwEycGwC3YN-",tags:["Medals","Science Olympiads"],image:i.a.createElement(c.a,{fixed:t.medals.childImageSharp.fixed,alt:"medals"})}),i.a.createElement(l.a,{title:"High School Certificates",subtitle:"Science Olympiads Certificates",link:"https://drive.google.com/open?id=1AEKeTtAQSQzmZx1_TlNAbKO22yAipaml",tags:["Certificates","Science Olympiads"],image:i.a.createElement(c.a,{fixed:t.certificates.childImageSharp.fixed,alt:"certificates"})})))))}},197:function(e,t,a){var r;e.exports=(r=a(200))&&r.default||r},198:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(66),s=a.n(n);a.d(t,"a",function(){return s.a});a(197),a(7).default.enqueue;var l=i.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,r=e.query,n=e.render,s=a?a.data:t[r]&&t[r].data;return i.a.createElement(i.a.Fragment,null,s&&n(s),!s&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,r=e.render,n=e.children;return i.a.createElement(l.Consumer,null,function(e){return i.a.createElement(o,{data:t,query:a,render:r||n,staticQueryData:e})})}},199:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Breno Baptista"}}}}')},200:function(e,t,a){"use strict";a.r(t);a(22);var r=a(0),i=a.n(r),n=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var r=a(202),i=a(0),n=a.n(i),s=a(206),l=a.n(s);function o(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,c=t||o.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},202:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Breno Baptista","description":"This website is the portfolio of the web developer Breno Baptista","author":"@gatsbyjs"}}}}')},203:function(e,t,a){"use strict";var r=a(199),i=a(0),n=a.n(i),s=a(198);var l=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={isMenuOpen:!1},t.handleMenu=function(){t.setState(function(e){return{isMenuOpen:!e.isMenuOpen}})},t.closeMenu=function(){t.setState({isMenuOpen:!1})},t.render=function(){var e=t.props.siteTitle,a=t.state.isMenuOpen?"is-active":"";return n.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(s.a,{to:"/",className:"navbar-item is-size-4"},e),n.a.createElement("a",{role:"button",className:"navbar-burger burger "+a,"aria-label":"menu","aria-expanded":"false","data-target":"myNavbar",onClick:t.handleMenu},n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}))),n.a.createElement("div",{id:"myNavbar",className:"navbar-menu "+a},n.a.createElement("div",{className:"navbar-end"},n.a.createElement(s.a,{to:"/",className:"navbar-item is-size-5",onClick:t.closeMenu},"Home"),n.a.createElement(s.a,{to:"/projects/",className:"navbar-item is-size-5",onClick:t.closeMenu},"Projects"),n.a.createElement(s.a,{to:"/stack/",className:"navbar-item is-size-5",onClick:t.closeMenu},"Stack"),n.a.createElement(s.a,{to:"/downloads/",className:"navbar-item is-size-5",onClick:t.closeMenu},"Downloads"))))},t}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r}(i.Component);l.defaultProps={siteTitle:""};var o=l;a(207),a(208),t.a=function(e){var t=e.children,a=r.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),n.a.createElement("div",{className:"container"},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by"," ",n.a.createElement("a",{href:"https://github.com/brenobaptista"},"Breno Baptista"))))}},204:function(e,t,a){"use strict";a(205)("fixed",function(e){return function(){return e(this,"tt","","")}})},205:function(e,t,a){var r=a(1),i=a(8),n=a(32),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},210:function(e,t,a){"use strict";a(29),a(30),a(13),a(90),a(132),a(204);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(71)),s=r(a(68)),l=r(a(133)),o=r(a(134)),c=r(a(0)),d=r(a(51)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)}).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(I,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},I=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,N=e.loading,O=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,o.default)({opacity:z?1:0,transition:C?"opacity "+b+"ms":"none"},l),x="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&R,{},l,{},f),T={title:t,alt:this.state.isVisible?"":a,style:V,className:m};if(p){var j=p,P=j[0];return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&c.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&R)}),P.base64&&c.default.createElement(L,{src:P.base64,spreadProps:T,imageVariants:j,generateSources:w}),P.tracedSVG&&c.default.createElement(L,{src:P.tracedSVG,spreadProps:T,imageVariants:j,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(j),c.default.createElement(I,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,o.default)({alt:a,title:t,loading:N},P,{imageVariants:j}))}}))}if(g){var q=g,B=q[0],_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},n);return"inherit"===n.display&&delete _.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},x&&c.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:x,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},C&&R)}),B.base64&&c.default.createElement(L,{src:B.base64,spreadProps:T,imageVariants:q,generateSources:w}),B.tracedSVG&&c.default.createElement(L,{src:B.tracedSVG,spreadProps:T,imageVariants:q,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,E(q),c.default.createElement(I,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,o.default)({alt:a,title:t,loading:N},B,{imageVariants:q}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),M=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});z.propTypes={resolutions:C,sizes:M,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([M,d.default.arrayOf(M)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var x=z;t.default=x},211:function(e,t,a){"use strict";a(212);var r=a(0),i=a.n(r),n=function(e){var t=e.title,a=e.subtitle,r=e.link,n=e.tags,s=e.image;return i.a.createElement("a",{href:r},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},s)),i.a.createElement("div",{className:"media-content"},i.a.createElement("h4",{className:"title is-size-5-desktop is-size-6-touch"},t),i.a.createElement("p",{className:"subtitle is-size-5-desktop is-size-6-touch"},a),i.a.createElement("div",{className:"tags"},n.map(function(e){return i.a.createElement("span",{className:"tag",key:e},e)})))))))};n.defaultProps={link:null,tags:[],image:null},t.a=n},212:function(e,t,a){"use strict";a(205)("link",function(e){return function(t){return e(this,"a","href",t)}})}}]);
//# sourceMappingURL=component---src-pages-downloads-js-1082e0267353a2b95139.js.map