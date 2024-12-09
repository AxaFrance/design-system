import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{g as o}from"./getComponentClassName-C7V7Z2-u.js";import"./index-CTjT7uj6.js";const d=({children:s,className:i,classModifier:t,...a})=>{const n=o(i,t,"af-restitution");return e.jsx("article",{className:n,...a,children:s})};d.__docgenInfo={description:"",methods:[],displayName:"ArticleRestitution",props:{classModifier:{required:!1,tsType:{name:"string"},description:""}}};const m=({title:s,subtitle:i,rightTitle:t,className:a,classModifier:n})=>{const r=o(a,n,"af-restitution__header");return e.jsxs("header",{className:r,children:[e.jsx("div",{className:"af-restitution__header-left",children:e.jsxs("div",{className:"af-restitution__title",children:[e.jsx("span",{className:"af-restitution__title-main",children:s}),i?e.jsx("span",{className:"af-restitution__title-subtitle",children:i}):null]})}),t?e.jsx("div",{className:"af-restitution__header-right",children:e.jsx("span",{className:"af-restitution__title",children:t})}):null]})};m.__docgenInfo={description:"",methods:[],displayName:"HeaderRestitution",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightTitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""}}};const p=({children:s,className:i,classModifier:t})=>{const a=o(i,t,"af-restitution__content");return e.jsx("section",{className:a,children:s})};p.__docgenInfo={description:"",methods:[],displayName:"SectionRestitution",props:{className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""}}};const c=({title:s,className:i,classModifier:t})=>{const a=o(i,t,"af-restitution__content-title");return e.jsx("div",{className:a,children:s})};c.__docgenInfo={description:"",methods:[],displayName:"SectionRestitutionTitle",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""}}};const l="col col-sm-12 col-md-12 col-lg-12 col-xl-12",u=({title:s,className:i=l,classNameContainer:t="row af-restitution__content-left",children:a,classModifier:n})=>{const r=o(i,n,l);return e.jsxs("div",{className:r,children:[s?e.jsx(c,{title:s}):null,e.jsx("div",{className:t,children:a})]})};u.__docgenInfo={description:"",methods:[],displayName:"SectionRestitutionRow",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},classNameContainer:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"row af-restitution__content-left"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"col col-sm-12 col-md-12 col-lg-12 col-xl-12"',computed:!1}},classModifier:{required:!1,tsType:{name:"string"},description:""}}};const f=({children:s,className:i,title:t,classModifier:a})=>{const n=o(i,a,"col-sm-12 col-md-12 col-lg-6 col-xl-6");return e.jsxs("div",{className:n,children:[t?e.jsx(c,{title:t}):null,s]})};f.__docgenInfo={description:"",methods:[],displayName:"SectionRestitutionColumn",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""}}};const N=({label:s,children:i="-",className:t,classModifier:a})=>{const n=o(t,a,"af-restitution__listdef");return e.jsxs("dl",{className:n,children:[e.jsx("dt",{className:"af-restitution__listdef-item",children:e.jsx("span",{className:"af-restitution__text",children:s})}),e.jsx("dd",{className:"af-restitution__listdef-value",children:i})]})};N.__docgenInfo={description:"",methods:[],displayName:"Restitution",props:{label:{required:!0,tsType:{name:"string"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""},children:{defaultValue:{value:'"-"',computed:!1},required:!1}}};const _=({values:s,...i})=>e.jsx("ul",{className:"af-restitution__listul",...i,children:s.map(t=>e.jsx("li",{className:"af-restitution__listul-item",children:t},t))});_.__docgenInfo={description:"",methods:[],displayName:"RestitutionList",props:{values:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};export{d as A,m as H,N as R,p as S,u as a,f as b,_ as c};