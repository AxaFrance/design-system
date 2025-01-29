import{r as t}from"./index-C33_amOP.js";import{R as m}from"./RadioItem-QFzOzOYt.js";var p=(e=>(e.classic="classic",e.default="default",e.inline="inline",e))(p||{});const f=e=>{switch(e){case"classic":return"af-form__radio";case"inline":return"af-form__radio-inline";default:return"af-form__radio-custom"}},n=t.forwardRef(({classModifier:e,options:r,value:i="",mode:s="default",children:l,disabled:d,...u},o)=>{const c=f(s);return r.map(a=>t.createElement(m,{...u,key:a.value,isChecked:a.value===i,disabled:a.disabled||d,className:c,classModifier:e,ref:o,...a},l))});n.displayName="EnhancedInputRadio";n.__docgenInfo={description:"",methods:[],displayName:"EnhancedInputRadio",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}]}],raw:"Option[]"},description:""},mode:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"RadioModes.default",computed:!0}},value:{defaultValue:{value:'""',computed:!1},required:!1}}};export{n as R,p as a};
