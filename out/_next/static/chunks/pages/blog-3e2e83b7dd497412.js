(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return o(8010)}])},6432:function(t,e,o){"use strict";o.d(e,{Z:function(){return a}});var n=o(5893),i=o(9008),s=o.n(i),c={title:"Nijoow",description:"Nijoow's blog",author:"Woojin Lee"},r=o(5075);function a(t){var e=t.customMeta,o=Object.assign({title:c.title,description:c.description,author:c.author},e),i="".concat(o.title," | nijoow portfolio");return(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/images/favicon.ico"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"keywords",content:o.title}),(0,n.jsx)("meta",{name:"description",content:o.description}),(0,n.jsx)("meta",{name:"author",content:o.author}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:i}),(0,n.jsx)("meta",{property:"og:description",content:o.description}),(0,n.jsx)("meta",{property:"og:image",content:"".concat(r.O,"images/nijoow.svg")}),(0,n.jsx)("meta",{property:"og:url",content:"https://nijoow.github.io/"})]})}},43:function(t,e,o){"use strict";var n=o(5893),i=o(1664),s=o.n(i),c=o(9611),r=o.n(c);e.Z=function(t){var e=t.date,o=t.title,i=t.description,c=t.category,a=t.slug;return(0,n.jsx)("div",{className:r().post,children:(0,n.jsx)(s(),{href:"/blog/".concat(a),passHref:!0,children:(0,n.jsxs)("a",{children:[(0,n.jsx)("div",{className:r().postTitle,children:o}),(0,n.jsx)("div",{className:r().description,children:i}),(0,n.jsxs)("div",{className:r().postRow,children:[(0,n.jsx)("div",{className:r().date,children:e}),c.split(", ").map((function(t,e){return(0,n.jsx)("button",{className:r().postCategory,children:t},e)}))]})]})})})}},5075:function(t,e,o){"use strict";o.d(e,{O:function(){return n}});var n="https://nijoow.github.io/"},8010:function(t,e,o){"use strict";o.r(e),o.d(e,{__N_SSG:function(){return d}});var n=o(5893),i=o(43),s=o(6432),c=o(9611),r=o.n(c),a=o(7294),l=o(3432),u=o(4253),p=["all","html","css","javascript","react","typescript","data structure","algorithm"],d=!0;e.default=function(t){var e=t.posts,o=(0,a.useState)(e),c=o[0],d=o[1],_=(0,a.useState)(0),g=_[0],f=_[1],h=(0,l.CG)((function(t){return t.category})).currentCategory,j=(0,l.TL)();return(0,a.useEffect)((function(){d(e.filter((function(t){return t.category.split(", ").includes(h)}))),p.forEach((function(t,e){t===h&&f(e)})),"all"===h&&d(e)}),[h]),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Z,{customMeta:{title:"Blog"}}),(0,n.jsxs)("section",{children:[(0,n.jsx)("div",{className:"title",children:"Blog"}),(0,n.jsx)("div",{className:r().categories,children:(0,n.jsx)("div",{className:r().category,children:p.map((function(t,e){return(0,n.jsx)("button",{onClick:function(){j((0,u.PR)(t))},className:"".concat(r().categoryBtn," ").concat(e===g?r().selected:""),children:t},e)}))})}),c.map((function(t){return(0,n.jsx)(i.Z,{date:t.date,title:t.title,description:t.description,category:t.category,slug:t._raw.flattenedPath},t._id)}))]})]})}},9611:function(t){t.exports={post:"Blog_post__mKNLX",postTitle:"Blog_postTitle__iUq9K",postRow:"Blog_postRow__0nCTG",date:"Blog_date__WP6p7",postCategory:"Blog_postCategory__NaShT",description:"Blog_description__rR9x5",categories:"Blog_categories__aH92L",category:"Blog_category__KJrPR",selected:"Blog_selected__yuLcT",postInfo:"Blog_postInfo___BW8f",postDate:"Blog_postDate__XXb_h",postContent:"Blog_postContent__b12tY"}},9008:function(t,e,o){t.exports=o(5443)}},function(t){t.O(0,[774,888,179],(function(){return e=7801,t(t.s=e);var e}));var e=t.O();_N_E=e}]);