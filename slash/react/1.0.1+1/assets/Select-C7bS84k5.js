import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import{g as x}from"./getComponentClassName-C7V7Z2-u.js";const f=n.forwardRef(({options:t,id:l,className:o,classModifier:e,required:a,...m},c)=>{const p=x(o,e,"af-form__input-select");return s.jsxs("div",{className:"af-form__select-container",children:[s.jsx("select",{...m,id:l,className:p,ref:c,required:(e==null?void 0:e.includes("required"))||a,children:t.map(({label:d,...r})=>{var u;return s.jsx("option",{...r,children:d},(u=r.value)==null?void 0:u.toString())})}),s.jsx("span",{"aria-controls":l,className:"glyphicon glyphicon-menu-down"})]})});f.displayName="SelectBase";f.__docgenInfo={description:"@deprecated Use Select instead",methods:[],displayName:"SelectBase"};const i=n.forwardRef(({onChange:t,forceDisplayPlaceholder:l=!1,value:o,placeholder:e="- Select -",options:a,id:m,...c},p)=>{const[d,r]=n.useState(!1),u=n.useId(),g=m??u,N=n.useMemo(()=>d||c.defaultValue!==void 0?a:[{value:"",label:e},...a],[d,a,c.defaultValue,e]);return s.jsx(f,{...c,id:g,value:o,options:N,onChange:h=>{t&&t(h),r(!l)},ref:p})});i.displayName="SelectDefault";i.__docgenInfo={description:"",methods:[],displayName:"SelectDefault",props:{forceDisplayPlaceholder:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:'"- Select -"',computed:!1},required:!1}}};const S=n.forwardRef(({mode:t="default",children:l,...o},e)=>{const a=t==="default"?i:f;return s.jsx(a,{ref:e,...o,children:l})});S.displayName="Select";S.__docgenInfo={description:"",methods:[],displayName:"Select",props:{mode:{defaultValue:{value:'"default"',computed:!1},required:!1}}};export{S};