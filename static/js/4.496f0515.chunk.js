(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(e,t,a){"use strict";var n=a(190),r=a(0),s=a.n(r),c=a(288),i=a(53);t.a=Object(i.b)((function(e){return{products:e.data.products?e.data.products:[]}}))((function(e){var t,a,r,i,o=e.title,l=e.products,m=e.adClass,u=e.type,d=void 0===u?"normal":u,g=(e.slug,e.container),p=void 0===g?"container":g,h=e.productId,b=Object(n.a)(e,["title","products","adClass","type","slug","container","productId"]),f=[];for(t in b)"function"!==typeof b[t]&&f.push(b[t]);return r=l.filter((function(e){return e.id===h})),(a=l.filter((function(e){return e.id<parseInt(r.vid)})))&&a.length?a[a.length-1]:r[0],(i=l.filter((function(e){return e.vid>parseInt(r.vid)})))&&0!==i.length?i[0]:r[0],s.a.createElement("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav ".concat(m)},"normal"===d?s.a.createElement("div",{className:p},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(c.a,{to:"".concat("")},"Trang ch\u1ee7")),f.map((function(e){return s.a.createElement("li",{className:"breadcrumb-item",key:e[0]},s.a.createElement(c.a,{to:"".concat("","/").concat(e[1])},e[0]))})),s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},o))):"product"===d?s.a.createElement("div",{className:"".concat(p,"  d-flex align-items-center")},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(c.a,{to:"".concat("")},"Home")),f.map((function(e,t){return s.a.createElement("li",{className:"breadcrumb-item",key:t},s.a.createElement(c.a,{to:"".concat("","/").concat(e[1],"/default/7")},e[0]))})),s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},o))):"")}))},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=r.a.memo((function(e){var t=e.title,a=e.subTitle;return r.a.createElement("div",{className:"page-header text-center",style:{backgroundImage:"url(".concat("","/assets/images/page-header-bg.jpg)")}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"page-title"},t,r.a.createElement("span",null,a))))}))},166:function(e){e.exports=JSON.parse('{"team_members":[{"img":"assets/images/team/about-2/member-1.jpg","name":"Samanta Grey","title":"Founder & CEO"},{"img":"assets/images/team/about-2/member-2.jpg","name":"Bruce Sutton","title":"Sales & Marketing Manager"},{"img":"assets/images/team/about-2/member-3.jpg","name":"Janet Joy","title":"Product Manager"},{"img":"assets/images/team/about-2/member-4.jpg","name":"Mark Pocket","title":"Product Manager"},{"img":"assets/images/team/about-2/member-5.jpg","name":"Damion Blue","title":"Sales & Marketing Manager"},{"img":"assets/images/team/about-2/member-6.jpg","name":"Lenard Smith","title":"Product Manager"},{"img":"assets/images/team/about-2/member-7.jpg","name":"Rachel Green","title":"Product Manager"},{"img":"assets/images/team/about-2/member-8.jpg","name":"David Doe","title":"Product Manager"}],"brands":{"default":[{"name":"brand","image":"assets/images/brands/1.png"},{"name":"brand","image":"assets/images/brands/2.png"},{"name":"brand","image":"assets/images/brands/3.png"},{"name":"brand","image":"assets/images/brands/4.png"},{"name":"brand","image":"assets/images/brands/5.png"},{"name":"brand","image":"assets/images/brands/6.png"},{"name":"brand","image":"assets/images/brands/7.png"},{"name":"brand","image":"assets/images/brands/8.png"},{"name":"brand","image":"assets/images/brands/9.png"}]},"elementsUrl":[{"url":"/elements/accordions","name":"accordions","class":"img-accordions"},{"url":"/elements/banners","name":"banners","class":"img-banners"},{"url":"/elements/blog-posts","name":"blog posts","class":"img-blog-posts"},{"url":"/elements/buttons","name":"buttons","class":"img-buttons"},{"url":"/elements/cta","name":"call to action","class":"img-cta"},{"url":"/elements/icon-boxes","name":"icon boxes","class":"img-icon-boxes"},{"url":"/elements/portfolios","name":"portfolio","class":"img-portfolio"},{"url":"/elements/categories","name":"product catigories","class":"img-product-categories"},{"url":"/elements/products","name":"products","class":"img-products"},{"url":"/elements/tabs","name":"tabs","class":"img-tabs"},{"url":"/elements/testimonials","name":"testimonials","class":"img-testimonials"},{"url":"/elements/titles","name":"titles","class":"img-titles"},{"url":"/elements/typography","name":"typography","class":"img-typography"},{"url":"/elements/video-banners","name":"video","class":"img-video"}],"services":[{"id":1,"icon":"icon-rocket","title":"Thanh to\xe1n & V\u1eadn chuy\u1ec3n","subtitle":"Mi\u1ec5n ph\xed v\u1eadn chuy\u1ec3n cho \u0111\u01a1n h\xe0ng t\u1eeb 500.000\u0111"},{"id":2,"icon":"icon-rotate-left","title":"\u0110\u1ed5i tr\u1ea3 & Ho\xe0n ti\u1ec1n","subtitle":"\u0110\u1ea3m b\u1ea3o ho\xe0n ti\u1ec1n 100% gi\xe1 tr\u1ecb \u0111\u01a1n h\xe0ng"},{"id":3,"icon":"icon-life-ring","title":"H\u1ed7 tr\u1ee3","subtitle":"H\u1ed7 tr\u1ee3 tr\u1ef1c tuy\u1ebfn 24/7"}],"innerOverlayPaths":["shop/sidebar","product/default","product/centered","product/extended","product/gallery","product/sticky","product/sidebar","product/fullwidth","product/masonry"],"introBanners":[{"image":"/assets/images/home/sliders/slide-1.jpg","subtitle":"","title":"Gi\u1ea3m gi\xe1 <br /> <strong>50%</strong>","aSubtitle":"Si\xeau gi\u1ea3m gi\xe1 m\xf9a h\xe8","subClass":"position-right","adClass":"text-left","subImage":"/assets/images/home/sliders/img-1.png"},{"image":"/assets/images/home/sliders/slide-2.jpg","subtitle":"Premium Quality","title":"Coats<span class=\'highlight\'> &</span><br />Jackets","subClass":"position-left","adClass":"text-right","subImage":"/assets/images/home/sliders/img-2.png"}],"banner":[{"id":1,"img":"assets/images/home/banners/banner-6.jpg","subtitle":"S\u1ea3n ph\u1ea9m m\u1edbi","title":"<strong>\u0110\u1ed3 Nam</strong>","width":"376","height":"470"},{"id":2,"img":"assets/images/home/banners/banner-5.jpg","subtitle":"S\u1ea3n ph\u1ea9m m\u1edbi","title":"<strong>\u0110\u1ed3 N\u1eef</strong>","width":"376","height":"470"},{"id":3,"img":"assets/images/home/banners/banner-7.jpg","subtitle":"\u0110ang gi\u1ea3m gi\xe1","title":"<strong>Ph\u1ee5 Ki\u1ec7n</strong>","width":"376","height":"470"},{"id":4,"img":"assets/images/home/banners/banner-2.jpg","subtitle":"Limited Time Only","title":"<strong>Trainers &<br />Sportwear</strong><br />40 -70% off","width":"376","height":"470"},{"id":5,"img":"assets/images/home/banners/banner-3.jpg","subtitle":"This Week We Love...","title":"<strong>Women\'s<br />Accessories</strong><br />From $6.99","width":"376","height":"470","adClass":"col-sm-6 col-lg-4 d-none d-lg-block"},{"id":6,"img":"assets/images/home/banners/banner-5.jpg","subtitle":"New Arrivals","title":"Women\'s","width":"575","height":"300","adClass":"col-md-6"},{"id":7,"img":"assets/images/home/banners/banner-6.jpg","subtitle":"New Arrivals","title":"Men\'s","width":"575","height":"300","adClass":"col-md-6"}],"category":["T\u1ea5t C\u1ea3","\u0110\u1ed3 Nam","\u0110\u1ed3 N\u1eef","Ph\u1ee5 Ki\u1ec7n","T\xfai X\xe1ch","Gi\xe0y, D\xe9p"],"categories":{"wears":[{"id":1,"name":"\u0110\u1ed3 Nam"},{"id":2,"name":"\u0110\u1ed3 N\u1eef"},{"id":3,"name":"Ph\u1ee5 Ki\u1ec7n"},{"id":4,"name":"T\xfai X\xe1ch"},{"id":5,"name":"Gi\xe0y, D\xe9p"}]}}')},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),s=a(198),c=a.n(s);function i(e){var t=e.adClass,a=e.carouselOptions,s=Object(n.useRef)(null);Object(n.useEffect)((function(){return e.children&&(e.children.length>0||e.children&&void 0===e.children.length)&&s.current.props.className.indexOf("owl-quickview")>-1&&function(){var e,t=s.current;if(document.querySelector("#owl-dots .carousel-dot")){document.querySelector("#owl-dots .carousel-dot.active")||document.querySelectorAll("#owl-dots .carousel-dot")[0].classList.add("active"),e=document.querySelectorAll("#owl-dots .carousel-dot");for(var a=0;a<e.length;a++)e[a].addEventListener("click",(function(e){t.goTo(e.currentTarget.index())}))}}(),function(){(e.children.length>0||e.children&&void 0===e.children.length)&&s.current.props.className.indexOf("owl-quickview")>-1&&function(){var e,t=s.current;if(document.querySelector("#owl-dots .carousel-dot")){document.querySelector("#owl-dots .carousel-dot.active")||document.querySelectorAll("#owl-dots .carousel-dot")[0].classList.add("active"),e=document.querySelectorAll("#owl-dots .carousel-dot");for(var a=0;a<e.length;a++)e[a].addEventListener("click",(function(e){t.goTo(e.currentTarget.index())}))}}()}}),[]);var i={onTranslate:function(e){e.target&&e.target.closest(".owl-quickview")&&(document.querySelector("#owl-dots").querySelector(".active").classList.remove("active"),document.querySelector("#owl-dots").children[e.page.index].classList.add("active"))}},o=Object.assign({},{items:1,loop:!1,margin:0,responsiveClass:"true",nav:!0,navText:['<i class="icon-angle-left">','<i class="icon-angle-right">'],dots:!0,smartSpeed:400,autoplay:!1,responsive:{320:{nav:!1},375:{nav:!1}}},a);return void 0!==e.children&&(e.children.length>0||e.children&&void 0===e.children.length)?r.a.createElement(c.a,{ref:s,className:"owl-carousel ".concat(t),options:o,events:i},e.children):""}},171:function(e,t,a){"use strict";a.d(t,"i",(function(){return r})),a.d(t,"e",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"h",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return u})),a.d(t,"d",(function(){return d}));var n=a(4),r=function(e,t){var a=t.sortBy,r=t.category,s=t.size,c=t.brand,i=t.color,o=t.rating,l=t.value;return e.filter((function(e){var t=!1,a=!1,m=!1,u=!1,d=!1,g=!1;if(r&&r.length>0)for(var p=function(a){(-1!==Object(n.b)(e.category,(function(e){return e===r[a]}))||"Sale"===r[a]&&e.discount>0||"All"===r[a])&&(t=!0)},h=0;h<r.length;h++)p(h);else t=!0;if(s&&s.length>0)for(var b=function(t){-1!==Object(n.b)(e.size,(function(e){return e===s[t]}))&&(a=!0)},f=0;f<s.length;f++)b(f);else a=!0;if(c&&c.length>0)for(var v=function(t){-1!==Object(n.b)(e.brands,(function(e){return e===c[t]}))&&(m=!0)},E=0;E<c.length;E++)v(E);else m=!0;if(i&&i.length>0)for(var N=function(t){-1!==Object(n.b)(e.variants,(function(e){return e.color===i[t]}))&&(u=!0)},w=0;w<i.length;w++)N(w);else u=!0;if(o&&o.length>0)for(var y=0;y<o.length;y++)e.ratings===o[y]&&(g=!0);else g=!0;var S=e.discount?e.salePrice:e.price;return l&&l.min<=S&&S<=l.max&&(d=!0),t&&a&&m&&u&&d&&g})).sort((function(e,t){var n=e.discount>0?e.salePrice:e.price,r=t.discount>0?t.salePrice:t.price;return"totalbuy"===a?t.totalBuy<e.totalBuy?-1:1:"popularity"===a?t.vid<e.vid?-1:1:"rating"===a?t.ratings>e.ratings?1:-1:"date"===a||"newness"===a?t.vid>e.vid?-1:1:"price: low to high"===a?r>n?-1:1:"price: high to low"===a?r<n?-1:1:t.id<e.id?-1:1}))},s=function(e){return e.filter((function(e){return!0===e.featured}))},c=function(e){return e.filter((function(e){return e.discount>0}))},i=function(e){return e.filter((function(e){return e.ratings>2})).sort((function(e,t){return t.ratings<e.ratings?-1:1}))},o=function(e,t){return console.log(JSON.stringify(e)),"All"===t||"T\u1ea5t C\u1ea3"===t?e:(-1!==t.indexOf("&")&&(t=t.split(" & ")),e.filter((function(e){var a=!1;if(Array.isArray(t))for(var n=0;n<t.length;n++)-1!==e.category.indexOf(t[n])&&(a=!0);else-1!==e.category.indexOf(t)&&(a=!0);return a})))},l=function(e,t){return"All"===t||"T\u1ea5t C\u1ea3"===t?e.length:"Sale"===t?e.filter((function(e){return e.discount>0})).length:e.filter((function(e){return-1!==e.category.indexOf(t)})).length},m=function(e){for(var t=0,a=0;a<e.length;a++)t+=parseInt(e[a].qty,10)*(e[a].discount?e[a].salePrice:e[a].price);return t},u=function(e){for(var t=0,a=0;a<e.length;a++)t+=parseInt(e[a].qty,10);return t},d=function(e,t){return e.filter((function(e){return e.rating===t})).length}},173:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"h",(function(){return s})),a.d(t,"i",(function(){return c})),a.d(t,"j",(function(){return i})),a.d(t,"k",(function(){return o})),a.d(t,"l",(function(){return l})),a.d(t,"m",(function(){return m})),a.d(t,"n",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return g})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return b})),a.d(t,"o",(function(){return f}));var n={nav:!1,dots:!0,items:3,margin:20,loop:!1,responsive:{0:{items:1},600:{items:2},992:{items:3,dots:!0}}},r={nav:!1,dots:!1,margin:20,loop:!1,responsive:{0:{items:2},992:{items:3},1200:{items:4}}},s={nav:!1,dots:!1,margin:20,loop:!1,responsive:{0:{items:2},480:{items:2},992:{items:3},1200:{nav:!0,items:4}}},c={nav:!1,dots:!1,margin:20,loop:!1,responsive:{0:{items:2},480:{items:2},768:{items:3},992:{items:4},1200:{items:5}}},i={nav:!1,dots:!0,margin:20,loop:!0,responsive:{1200:{nav:!0}}},o={nav:!1,dots:!0,margin:20,loop:!0,responsive:{0:{items:1},768:{items:2},1200:{items:2,nav:!0}}},l={nav:!1,dots:!0,items:3,margin:20,loop:!0,responsive:{0:{items:1},768:{items:2},992:{items:3},1200:{items:3,nav:!0}}},m={nav:!1,dots:!0,margin:20,loop:!1,responsive:{0:{items:1},375:{items:2},480:{items:2},768:{items:3},992:{items:4},1200:{items:4,nav:!0,dots:!1}}},u={nav:!0,dots:!1,items:3,margin:0,loop:!1,responsive:{0:{items:1},576:{items:2},992:{items:3}}},d={loop:!1,dots:!1,responsive:{772:{nav:!0}}},g={nav:!1,dots:!0,margin:30,loop:!1,responsive:{0:{items:2},420:{items:3},600:{items:4},900:{items:5},1024:{items:6,nav:!0,dots:!1}}},p={nav:!1,dots:!1,margin:0,items:6,loop:!1,responsive:{0:{items:1},360:{items:2},600:{items:3},992:{items:4},1200:{items:5},1500:{items:6}}},h={nav:!1,dots:!1,loop:!0,responsive:{992:{nav:!0}}},b={nav:!1,dots:!1,margin:30,loop:!1,responsive:{0:{items:2},420:{items:3},600:{items:4},900:{items:5},1024:{items:6}}},f={nav:!1,dots:!0,margin:20,loop:!1,responsive:{320:{items:2},375:{items:2},480:{items:2},768:{items:3},992:{items:4},1200:{items:4,nav:!0,dots:!1}}}},184:function(e,t,a){"use strict";var n=a(168),r=a(0),s=a.n(r),c=a(11),i=a(289),o=a(20),l=a(288),m=a(53),u=a(166);function d(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){i(window.location.href)})),s.a.createElement("nav",{className:"main-nav"},s.a.createElement("ul",{className:"menu sf-arrows"},s.a.createElement("li",{className:"megamenu-container",id:"menu-home"},s.a.createElement(l.a,{to:"".concat("")},"Trang ch\u1ee7")),s.a.createElement("li",{className:c.indexOf("/shop/sidebar/list")>-1?"active":""},s.a.createElement(l.a,{to:"".concat("","/shop/sidebar/list")},"S\u1ea3n Ph\u1ea9m")),u.categories.wears.slice(0,3).map((function(e,t){return console.log(e),s.a.createElement("li",{className:c.indexOf("/shop/sidebar/".concat(parseInt(e.id)+1,"cols"))>-1?"active":""},s.a.createElement(l.a,{to:"".concat("","/shop/sidebar/").concat(parseInt(e.id)+1,"cols?categoryIndex=").concat(e.id)},e.name))})),s.a.createElement("li",{className:c.indexOf("blog/")>-1?"active":""},s.a.createElement(l.a,{to:"".concat("","/pages/about")},"Vanis Store"))))}var g=a(171),p=a(35),h=a(4);var b=Object(m.b)((function(e){return{cartlist:e.cartlist.cart?e.cartlist.cart:[]}}),{removeFromCart:p.m})((function(e){var t=e.cartlist,a=e.removeFromCart,n=Object(g.b)(t);return s.a.createElement("div",{className:"dropdown cart-dropdown"},s.a.createElement(l.a,{to:"".concat("","/shop/cart"),className:"dropdown-toggle",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-display":"static"},s.a.createElement("i",{className:"icon-shopping-cart"}),s.a.createElement("span",{className:"cart-count"},Object(g.a)(t)),s.a.createElement("span",{className:"cart-txt"},n.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})," \u0111")),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right ".concat(0===t.length?"text-center":"")},0===t.length?s.a.createElement("p",null,"Gi\u1ecf h\xe0ng tr\u1ed1ng."):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"dropdown-cart-products"},t.map((function(e,t){return s.a.createElement("div",{className:"product",key:t},s.a.createElement("div",{className:"product-cart-details"},s.a.createElement("h4",{className:"product-title"},s.a.createElement(l.a,{to:"".concat("","/product/default/7"),dangerouslySetInnerHTML:Object(h.o)(e.name)})),s.a.createElement("span",{className:"cart-product-info"},s.a.createElement("span",{className:"cart-product-qty"},e.qty),"x ",e.discount?e.salePrice.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0}):e.price.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})," \u0111")),s.a.createElement("figure",{className:"product-image-container"},s.a.createElement(l.a,{to:"".concat("","/product/default/7"),className:"product-image"},s.a.createElement("img",{src:e.pictures[0],"data-oi":e.pictures[0],alt:"product"}))),s.a.createElement("button",{className:"btn-remove",title:"Remove Product",onClick:function(){return a(e)}},s.a.createElement("i",{className:"icon-close"})))}))),s.a.createElement("div",{className:"dropdown-cart-total"},s.a.createElement("span",null,"T\u1ed5ng: "),s.a.createElement("span",{className:"cart-total-price"},n.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})," \u0111\u1ed3ng")),s.a.createElement("div",{className:"dropdown-cart-action"},s.a.createElement(l.a,{to:"".concat("","/shop/cart"),className:"btn btn-primary"},"Xem gi\u1ecf"),s.a.createElement(l.a,{to:"".concat("","/shop/checkout"),className:"btn btn-outline-primary-2"},s.a.createElement("span",null,"Mua"),s.a.createElement("i",{className:"icon-long-arrow-right"}))))))}));s.a.memo((function(){function e(e){document.querySelector(".header-search-wrapper")&&document.querySelector(".header-search-wrapper").classList.contains("show")&&(document.querySelector(".header-search-wrapper").classList.remove("show"),document.querySelector(".search-toggle").classList.remove("active"),document.querySelector("body").classList.remove("is-search-active"),e.preventDefault())}function t(e){document.querySelector(".header-search-wrapper").classList.toggle("show"),document.querySelector(".search-toggle").classList.toggle("active"),document.querySelector(".header-search-wrapper input").focus(),e.preventDefault()}return Object(r.useEffect)((function(){return document.querySelector(".search-toggle").addEventListener("click",t),document.querySelector(".header-search").addEventListener("click",(function(e){e.stopPropagation()})),document.querySelector("body").addEventListener("click",e),function(){document.querySelector(".search-toggle").removeEventListener("click",t),document.querySelector(".header-search").addEventListener("click",(function(e){e.stopPropagation()})),document.querySelector("body").addEventListener("click",e)}})),s.a.createElement("div",{className:"header-search"},s.a.createElement("a",{href:"#dropdown",className:"search-toggle",role:"button",title:"Search"},s.a.createElement("i",{className:"icon-search"})),s.a.createElement("form",null,s.a.createElement("div",{className:"header-search-wrapper"},s.a.createElement("label",{htmlFor:"q",className:"sr-only"},"Search"),s.a.createElement("input",{type:"search",className:"form-control",name:"q",id:"q",placeholder:"Search in...",required:!0}))))}));var f=Object(m.b)((function(e){return{isWishlist:e.wishlist.list}}))((function(e){var t=e.container,a=void 0===t?"container":t,n=e.isWishlist;return s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"header-bottom sticky-header"},s.a.createElement("div",{className:a},s.a.createElement("div",{className:"header-left"},s.a.createElement("button",{className:"mobile-menu-toggler"},s.a.createElement("span",{className:"sr-only"},"Danh m\u1ee5c"),s.a.createElement("i",{className:"icon-bars"})),s.a.createElement(l.a,{to:"".concat(""),className:"logo"},s.a.createElement("img",{src:"".concat("","/assets/images/home/logo.png"),alt:"Molla Logo",width:82,height:20}))),s.a.createElement("div",{className:"header-center"},s.a.createElement(d,null)),s.a.createElement("div",{className:"header-right"},s.a.createElement(l.a,{to:"".concat("","/shop/wishlist"),className:"wishlist-link"},s.a.createElement("i",{className:"icon-heart-o"}),s.a.createElement("span",{className:"wishlist-count"},n.length)),s.a.createElement(b,null)))))}));var v=s.a.memo((function(e){var t=e.logoFooter,a=void 0===t?"assets/images/home/logo-footer.png":t,n=e.container,r=void 0===n?"container":n;return s.a.createElement("footer",{className:"footer footer-2"},s.a.createElement("div",{className:"footer-middle border-0"},s.a.createElement("div",{className:r},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 col-lg-6"},s.a.createElement("div",{className:"widget widget-about"},s.a.createElement("img",{src:"/"+a,className:"footer-logo",alt:"Molla Logo",width:"82",height:"25"}),s.a.createElement("p",null,"VANIS STORE - Chuy\xean kinh doanh qu\u1ea7n \xe1o, v\xe1y \u0111\u1ea7m, balo, ph\u1ee5 ki\u1ec7n th\u1eddi trang nam n\u1eef, v.v. t\u1ea1i \u0110\xe0 N\u1eb5ng. "),s.a.createElement("div",{className:"widget-about-info"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6 col-md-4"},s.a.createElement("span",{className:"widget-about-title"},"C\u1ea7n tr\u1ee3 gi\xfap? G\u1ecdi ngay cho ch\xfang t\xf4i "),s.a.createElement(l.a,{to:"tel:123456789"},"0905 246 323")),s.a.createElement("div",{className:"col-sm-6 col-md-8"},s.a.createElement("span",{className:"widget-about-title"},"H\u1ed7 Tr\u1ee3 Thanh To\xe1n"),s.a.createElement("figure",{className:"footer-payments"},s.a.createElement("img",{src:"".concat("","/assets/images/payments.png"),alt:"Payment methods",width:"272",height:"20"}))))))),s.a.createElement("div",{className:"col-sm-4 col-lg-2"},s.a.createElement("div",{className:"widget"},s.a.createElement("h4",{className:"widget-title"},"Th\xf4ng tin"),s.a.createElement("ul",{className:"widget-list"},s.a.createElement("li",null,s.a.createElement(l.a,{to:"".concat("","/pages/about")},"V\u1ec1 Vanis Store"))))),s.a.createElement("div",{className:"col-sm-4 col-lg-2"},s.a.createElement("div",{className:"widget"},s.a.createElement("h4",{className:"widget-title"},"D\u1ecbch V\u1ee5 Kh\xe1ch H\xe0ng"))),s.a.createElement("div",{className:"col-sm-4 col-lg-2"},s.a.createElement("div",{className:"widget"},s.a.createElement("h4",{className:"widget-title"},"T\xe0i Kho\u1ea3n")))))),s.a.createElement("div",{className:"footer-bottom"},s.a.createElement("div",{className:r},s.a.createElement("p",{className:"footer-copyright"},"Copyright \xa9 ",(new Date).getFullYear()," Vanis Store. All Rights Reserved."),s.a.createElement("div",{className:"social-icons social-icons-color"},s.a.createElement("span",{className:"social-label"},"M\u1ea1ng x\xe3 h\u1ed9i"),s.a.createElement("a",{href:"https://www.facebook.com",className:"social-icon social-facebook",rel:"noopener noreferrer",title:"Facebook",target:"_blank"},s.a.createElement("i",{className:"icon-facebook-f"})),s.a.createElement("a",{href:"https://twitter.com",className:"social-icon social-twitter",rel:"noopener noreferrer",title:"Twitter",target:"_blank"},s.a.createElement("i",{className:"icon-twitter"})),s.a.createElement("a",{href:"https://instagram.com",className:"social-icon social-instagram",rel:"noopener noreferrer",title:"Instagram",target:"_blank"},s.a.createElement("i",{className:"icon-instagram"})),s.a.createElement("a",{href:"https://youtube.com",className:"social-icon social-youtube",rel:"noopener noreferrer",title:"Youtube",target:"_blank"},s.a.createElement("i",{className:"icon-youtube"})),s.a.createElement("a",{href:"https://pinterest.com",className:"social-icon social-pinterest",rel:"noopener noreferrer",title:"Pinterest",target:"_blank"},s.a.createElement("i",{className:"icon-pinterest"}))))))}));var E=function(e){return s.a.useEffect((function(){Object(h.i)()})),s.a.createElement("nav",{className:"mobile-nav"},s.a.createElement("ul",{className:"mobile-menu"},s.a.createElement("li",null,s.a.createElement(l.a,{to:"".concat("")},"Trang ch\u1ee7")),s.a.createElement("li",null,s.a.createElement(l.a,{to:"".concat("","/shop/sidebar/list")},"S\u1ea3n Ph\u1ea9m")),u.categories.wears.slice(0,3).map((function(e,t){return console.log(e),s.a.createElement("li",null,s.a.createElement(l.a,{to:"".concat("","/shop/sidebar/").concat(parseInt(e.id)+1,"cols?categoryIndex=").concat(e.id)},e.name))})),s.a.createElement("li",null,s.a.createElement(l.a,{to:"".concat("","/pages/about")},"Vanis Store"))))};function N(e){var t=e.adClass;return s.a.createElement("div",{className:"mobile-menu-container ".concat(t)},s.a.createElement("div",{className:"mobile-menu-wrapper"},s.a.createElement("span",{className:"mobile-menu-close"},s.a.createElement("i",{className:"icon-close"})),s.a.createElement("nav",{className:"mobile-nav"},s.a.createElement(E,null)),s.a.createElement("div",{className:"social-icons"},s.a.createElement(l.a,{to:"#",className:"social-icon",target:"_blank",title:"Facebook"},s.a.createElement("i",{className:"icon-facebook-f"})),s.a.createElement(l.a,{to:"#",className:"social-icon",target:"_blank",title:"Twitter"},s.a.createElement("i",{className:"icon-twitter"})),s.a.createElement(l.a,{to:"#",className:"social-icon",target:"_blank",title:"Instagram"},s.a.createElement("i",{className:"icon-instagram"})),s.a.createElement(l.a,{to:"#",className:"social-icon",target:"_blank",title:"Youtube"},s.a.createElement("i",{className:"icon-youtube"})))))}t.a=function(e){var t=0,a=!0,l=Object(r.useState)("container"),m=Object(n.a)(l,2),d=m[0],g=m[1],b=Object(r.useState)(""),E=Object(n.a)(b,2),w=E[0],y=E[1];return Object(r.useLayoutEffect)((function(){a=!0;for(var t=0;t<u.innerOverlayPaths.length;t++)w.indexOf(u.innerOverlayPaths[t])>0&&e.location.pathname.indexOf(u.innerOverlayPaths[t])>0&&(a=!1),w===e.location.pathname&&(a=!1);a&&(document.querySelector("body").classList.remove("loaded"),document.querySelector("#root").classList.remove("loaded"))})),Object(r.useEffect)((function(){return Object(h.i)(),Object(h.s)(),window.addEventListener("scroll",h.s),Object(h.k)(),function(){window.removeEventListener("scroll",h.s),Object(h.n)()}}),[]),Object(r.useEffect)((function(){for(y(e.location.pathname),setTimeout((function(){document.querySelector("body").classList.add("loaded"),document.querySelector("#root").classList.add("loaded")}),200);t<e.children.length&&!Object(i.a)(window.location.pathname,{path:e.children[t].props.path,exact:!0});)t++;e.children&&!e.children.length&&Object(i.a)(window.location.pathname,{path:e.children.props.path,exact:!0})&&(t=1),(t>=e.children.length||e.children&&!e.children.length&&0===t)&&(window.location="/pages/404"),o.a.getState()&&o.a.getState().data.quickView&&o.a.dispatch(Object(p.h)()),-1!==e.location.pathname.indexOf("fullwidth")?g("container-fluid"):g("container")})),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"page-wrapper"},s.a.createElement(f,{container:d,urls:w}),e.children,s.a.createElement(v,{container:d}),s.a.createElement(c.ToastContainer,{autoClose:3e3,className:"toast-container"})),s.a.createElement(N,null))}}}]);
//# sourceMappingURL=4.496f0515.chunk.js.map