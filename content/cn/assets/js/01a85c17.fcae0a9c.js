"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[64013],{40497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(67294),s=a(76200),r=a(7774),n=a(53810);const i={tag:"tag_7kA+"};function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:i.tag},l.createElement(r.Z,e))))),l.createElement("hr",null))}const m=function(e){let{tags:t}=e;const a=(0,n.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))};const o=function(e){const{tags:t,sidebar:a}=e,r=(0,n.MA)();return l.createElement(s.Z,{title:r,wrapperClassName:n.kM.wrapper.blogPages,pageClassName:n.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,r),l.createElement(m,{tags:Object.values(t)}))}},7774:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),s=a(86010),r=a(39960);const n={tag:"tag_WK-t",tagRegular:"tagRegular_LXbV",tagWithCount:"tagWithCount_S5Zl"};const i=function(e){const{permalink:t,name:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,s.Z)(n.tag,{[n.tagRegular]:!i,[n.tagWithCount]:i})},a,i&&l.createElement("span",null,i))}},76200:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),s=a(86010),r=a(39256),n=a(39960);const i={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var c=a(95999);function m(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,s.Z)(i.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,s.Z)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:i.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title))))))}const o=function(e){const{sidebar:t,toc:a,children:n,...i}=e,c=t&&t.items.length>0,o="blog-list-page"===e.pageClassName,g="blog-tags-post-list-page"===e.pageClassName;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},c&&l.createElement("aside",{className:"col col--3"},l.createElement(m,{sidebar:t})),l.createElement("main",{className:(0,s.Z)("col",{"col--7":c,"col--9 col--offset-2":!c,row:o||g,"tags-post-list":g}),itemScope:!0,itemType:"http://schema.org/Blog"},n),a&&l.createElement("div",{className:"col col--2"},a))))}}}]);