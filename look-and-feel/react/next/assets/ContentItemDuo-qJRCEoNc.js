import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as x,S as m,o as j,B as v}from"./constants-BP85GAnv.js";import{r as l}from"./index-DuZrfDUH.js";import"./MessageLF-DdJybLL5.js";const _="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M378-246%20154-470l43-43%20181%20181%20384-384%2043%2043-427%20427Z'/%3e%3c/svg%3e",B=({label:d,value:s,isVertical:o=!1,className:a,classModifier:n,isShowingDoneIcon:t=!1,isShowingCloseIcon:c=!1,buttonText:r,onButtonClick:f})=>{const p=l.useMemo(()=>{const i=[n];return o&&i.push("vertical"),x("af-content-item-duo",a,i.filter(Boolean).join(" "))},[n,a,o]),u=l.useMemo(()=>` af-content-item-duo__icon--${t?"done":"close"}`,[t]);return e.jsxs("div",{className:p,children:[(t||c)&&e.jsxs("div",{className:`af-content-item-duo__icon${u}`,children:[t&&e.jsx(m,{src:_}),c&&e.jsx(m,{src:j})]}),e.jsx("p",{className:"af-content-item-duo__label",children:d}),typeof s=="string"?e.jsx("p",{className:"af-content-item-duo__value",children:s}):e.jsx("div",{className:"af-content-item-duo__value",children:s}),r&&e.jsx("div",{className:"af-content-item-duo__button",children:e.jsx(v,{variant:"ghost",onClick:f,children:r})})]})};export{B as C};
