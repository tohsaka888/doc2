(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),l=t.n(n),r=t(93),s=t(47),c=t.n(s);function i({sidebar:e}){return 0===e.items.length?null:l.a.createElement("div",{className:c.a.sidebar},l.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),l.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(r.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(99),s=t(93),c=t(101);a.default=function(e){const{tags:a,sidebar:t}=e,n={};Object.keys(a).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)}));const i=Object.entries(n).sort((([e],[a])=>e===a?0:e>a?1:-1)).map((([e,t])=>l.a.createElement("div",{key:e},l.a.createElement("h3",null,e),t.map((e=>l.a.createElement(s.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")"))),l.a.createElement("hr",null)))).filter((e=>null!=e));return l.a.createElement(r.a,{title:"Tags",description:"Blog Tags"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(c.a,{sidebar:t})),l.a.createElement("main",{className:"col col--8"},l.a.createElement("h1",null,"Tags"),l.a.createElement("div",{className:"margin-vert--lg"},i)))))}}}]);