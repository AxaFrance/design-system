import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-C33_amOP.js";import{g as T}from"./getComponentClassName-CfMiunrP.js";const u=l.forwardRef(({options:a,id:s,className:r,classModifier:e,required:t,...p},o)=>{const m=T(r,e,"af-form__input-select");return n.jsxs("div",{className:"af-form__select-container",children:[n.jsx("select",{...p,id:s,className:m,ref:o,required:(e==null?void 0:e.includes("required"))||t,children:a.map(({label:i,...d})=>{var c;return n.jsx("option",{...d,children:i},(c=d.value)==null?void 0:c.toString())})}),n.jsx("span",{"aria-controls":s,className:"glyphicon glyphicon-menu-down"})]})});u.displayName="SelectBase";u.__docgenInfo={description:"@deprecated Use Select instead",methods:[],displayName:"SelectBase",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"OptionHTMLAttributes",elements:[{name:"HTMLOptionElement"}],raw:"OptionHTMLAttributes<HTMLOptionElement>"}],raw:"OptionHTMLAttributes<HTMLOptionElement>[]"},description:""},classModifier:{required:!1,tsType:{name:"string"},description:""}}};const f=l.forwardRef(({onChange:a,forceDisplayPlaceholder:s=!1,value:r,placeholder:e="- Select -",options:t,id:p,...o},m)=>{const[i,d]=l.useState(!1),c=l.useId(),S=p??c,g=l.useMemo(()=>i||o.defaultValue!==void 0?t:[{value:"",label:e},...t],[i,t,o.defaultValue,e]);return n.jsx(u,{...o,id:S,value:r,options:g,onChange:N=>{a&&a(N),d(!s)},ref:m})});f.displayName="SelectDefault";f.__docgenInfo={description:"",methods:[],displayName:"SelectDefault",props:{forceDisplayPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"- Select -"',computed:!1}}}};const y=l.forwardRef(({mode:a="default",children:s,...r},e)=>{const t=a==="default"?f:u;return n.jsx(t,{ref:e,...r,children:s})});y.displayName="Select";y.__docgenInfo={description:"",methods:[],displayName:"Select",props:{mode:{required:!1,tsType:{name:"union",raw:'"default" | "base"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"base"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};export{y as S};
