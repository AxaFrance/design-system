import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DuZrfDUH.js";import"./DividerLF-CGkXvTAL.js";import{g as p,n as i}from"./constants-CfWbtzFy.js";import{I as u}from"./IconBg-CdsIK7UO.js";const _=({title:l,firstSubtitle:s,secondSubtitle:e,level:n=1})=>{const r=`h${n}`;return t.jsxs(t.Fragment,{children:[t.jsx(r,{className:"af-title__title",children:l}),s&&t.jsx("span",{className:"af-title__subtitle",children:s}),e&&t.jsx("span",{className:"af-title__subtitle",children:e})]})},T=({children:l,className:s,classModifier:e,firstSubtitle:n,icon:r,secondSubtitle:x,size:a=i.XL,level:o=a===i.L?2:1})=>{const h=c.useMemo(()=>p("af-title",s,e?`${e} ${a}`:a),[e,s,a]),m=c.useCallback(({...j})=>t.jsx(_,{title:l,firstSubtitle:n,level:o,...j}),[l,n,o]);return t.jsx("header",{className:h,children:r&&a===i.XL?t.jsxs(t.Fragment,{children:[t.jsx(u,{className:"af-title__icon af-icon-bg",children:r}),t.jsx(m,{secondSubtitle:x})]}):t.jsx(m,{})})};export{T};
