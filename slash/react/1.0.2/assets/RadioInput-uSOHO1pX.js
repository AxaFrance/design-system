import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as w}from"./index-CTjT7uj6.js";import{F as L}from"./HelpMessage-8RhooMOY.js";import{u as v}from"./useInputClassModifier-B4SXY78l.js";import"./index-CCQ3W5xA.js";import{u as y}from"./useOptionsWithId-BhtwyMuM.js";import{a as E,R as M}from"./Radio-DweL7mc7.js";const N=o=>!o||o.length===0?"":o[0].id,d=w.forwardRef(({mode:o,messageType:p,message:u,className:f,classModifier:e="",isVisible:m,options:l,classNameContainerLabel:c,classNameContainerInput:I,label:t,forceDisplayMessage:R,children:r,required:i,disabled:s=!1,ariaLabelContainer:x,...C},g)=>{const j=`${e??""}${o===E.classic?" label-top ":""}`,a=y(l),F=N(a),{inputClassModifier:h,inputFieldClassModifier:q}=v(e,s,!!r,i);return n.jsxs(L,{label:t,id:F,message:u,messageType:p,isVisible:m,forceDisplayMessage:R,className:f,classModifier:j+q,classNameContainerLabel:c,classNameContainerInput:I,roleContainer:"radiogroup",ariaLabelContainer:x??(t==null?void 0:t.toString()),isLabelContainerLinkedToInput:!1,children:[n.jsx(M,{options:a,mode:o,classModifier:h,ref:g,disabled:s,required:i||(e==null?void 0:e.includes("required")),...C}),r]})});d.displayName="RadioInput";d.__docgenInfo={description:"",methods:[],displayName:"RadioInput",props:{classModifier:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{d as R};
