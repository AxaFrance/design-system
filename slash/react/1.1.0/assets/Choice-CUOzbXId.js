import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-C33_amOP.js";import{R as d}from"./Radio-CJcO5WkX.js";import"./RadioInput-_ZEfJbsU.js";import"./RadioItem-QFzOzOYt.js";const m=[{label:"Oui",value:!0,id:"radioItemTrue"},{label:"Non",value:!1,id:"radioItemFalse"}],t=u.forwardRef(({children:n,value:e,options:r=m,...i},o)=>{const l=r.map(a=>({...a,value:`${a.value}`}));return s.jsx(d,{...i,ref:o,value:e==null?void 0:e.toString(),options:l,children:n})});t.displayName="Choice";t.__docgenInfo={description:"",methods:[],displayName:"Choice",props:{id:{required:!0,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:'Omit<Option, "value"> & { value: boolean }',elements:[{name:"Omit",elements:[{name:"intersection",raw:`{
  id?: string;
  icon?: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  value: string;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>`,elements:[{name:"signature",type:"object",raw:`{
  id?: string;
  icon?: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}]},{name:"literal",value:'"value"'}],raw:'Omit<Option, "value">'},{name:"signature",type:"object",raw:"{ value: boolean }",signature:{properties:[{key:"value",value:{name:"boolean",required:!0}}]}}]}],raw:'Array<Omit<Option, "value"> & { value: boolean }>'},description:"",defaultValue:{value:`[
  { label: "Oui", value: true, id: "radioItemTrue" },
  { label: "Non", value: false, id: "radioItemFalse" },
]`,computed:!1}}}};export{t as C};
