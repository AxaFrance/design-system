import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{r as w}from"./index-CTjT7uj6.js";import{F as v}from"./HelpMessage-8RhooMOY.js";import{u as y}from"./useInputClassModifier-B4SXY78l.js";import"./index-CCQ3W5xA.js";import{u as E}from"./useOptionsWithId-BhtwyMuM.js";import{a as N,R as O}from"./Radio-DweL7mc7.js";const V=o=>!o||o.length===0?"":o[0].id,n=w.forwardRef(({mode:o,messageType:p,message:f,className:u,classModifier:i="",isVisible:l,options:m,classNameContainerLabel:c,classNameContainerInput:R,label:s,forceDisplayMessage:I,children:r,required:t,disabled:a=!1,ariaLabelContainer:M,...x},g)=>{const C=`${i??""}${o===N.classic?" label-top ":""}`,e=E(m),j=V(e),{inputClassModifier:F,inputFieldClassModifier:h}=y(i,a,!!r,t);return d.jsxs(v,{label:s,id:j,message:f,messageType:p,isVisible:l,forceDisplayMessage:I,className:u,classModifier:C+h,classNameContainerLabel:c,classNameContainerInput:R,roleContainer:"radiogroup",ariaLabelContainer:M??(s==null?void 0:s.toString()),children:[d.jsx(O,{options:e,mode:o,classModifier:F,ref:g,disabled:a,required:t,...x}),r]})});n.displayName="RadioInput";n.__docgenInfo={description:"",methods:[],displayName:"RadioInput",props:{classModifier:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{n as R};