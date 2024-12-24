import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{R as p}from"./Radio-CvQ5P06R.js";import"./RadioInput-CLpzqv7t.js";import"./RadioItem-FNwESqqr.js";const n=[{label:"Oui",value:!0,id:"radioItemTrue"},{label:"Non",value:!1,id:"radioItemFalse"}],a=m.forwardRef(({children:r,value:e,options:i=n,...t},s)=>{const l=i.map(o=>({...o,value:`${o.value}`}));return d.jsx(p,{...t,ref:s,value:e==null?void 0:e.toString(),options:l,children:r})});a.displayName="Choice";a.__docgenInfo={description:"",methods:[],displayName:"Choice",props:{options:{defaultValue:{value:`[
  { label: "Oui", value: true, id: "radioItemTrue" },
  { label: "Non", value: false, id: "radioItemFalse" },
]`,computed:!1},required:!1}}};export{a as C};
