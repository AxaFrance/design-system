import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-PYnMZM5z.js";import{l as a,t as o}from"./distributeur-experimental-DOvW8NNr.js";var s=t({Default:()=>p,Disabled:()=>g,ErrorStory:()=>h,Grouped:()=>_,RichLabel:()=>b,Vertical:()=>m,WithUnit:()=>y,WithoutPlaceholder:()=>v,__namedExportsOrder:()=>x,default:()=>f}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=e((()=>{o(),r(),c=i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`option`,{value:`fr`,children:`France`}),(0,c.jsx)(`option`,{value:`be`,children:`Belgique`}),(0,c.jsx)(`option`,{value:`es`,children:`Espagne`}),(0,c.jsx)(`option`,{value:`it`,disabled:!0,children:`Italie`})]}),d=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`optgroup`,{label:`Europe`,children:[(0,c.jsx)(`option`,{value:`fr`,children:`France`}),(0,c.jsx)(`option`,{value:`be`,children:`Belgique`}),(0,c.jsx)(`option`,{value:`es`,children:`Espagne`})]}),(0,c.jsxs)(`optgroup`,{label:`Amérique`,children:[(0,c.jsx)(`option`,{value:`us`,children:`États-Unis`}),(0,c.jsx)(`option`,{value:`ca`,children:`Canada`})]})]}),f=n.meta({component:a,title:`Experimental/Form/SelectInput`,argTypes:{onChange:{action:`onChange`,table:{disable:!0}},label:{table:{category:`Visual Content`}},options:{table:{category:`Visual Content`},control:!1},placeholder:{table:{category:`Visual Content`},control:{type:`text`}},helpMessage:{table:{category:`Visual Content`},control:{type:`text`}},errorMessage:{table:{category:`Visual Content`}},labelPosition:{table:{category:`Visual Content`},control:{type:`select`,options:[`centerLeft`,`above`,void 0]}},contentRight:{table:{category:`Visual Content`},control:{type:`text`}},required:{table:{category:`Field state`}},disabled:{table:{category:`Field state`}},value:{table:{category:`Field state`},control:{type:`text`}},id:{table:{category:`Technical Details`}},name:{table:{category:`Technical Details`}},inputClassName:{table:{category:`Technical Details`},control:{type:`text`}},labelClassName:{table:{category:`Technical Details`},control:{type:`text`}},containerClassName:{table:{category:`Technical Details`},control:{type:`text`}}},args:{label:`In which country do you live?`,helpMessage:`The country of your main residence`,options:u,labelPosition:`centerLeft`,errorMessage:``,required:!0,disabled:!1,value:`fr`,id:`countryid`,name:`mySelectInput`,onChange:l()}}),p=f.story({args:{label:`In which country do you live?`,options:u}}),m=f.story({args:{labelPosition:`above`,label:`In which country do you live?`,options:u}}),h=f.story({args:{required:!0,errorMessage:`This field is required`,helpMessage:``,value:``,name:`errorInput`,label:`In which country do you live?`,options:u}}),g=f.story({args:{disabled:!0,name:`disabledInput`,label:`In which country do you live?`,options:u}}),_=f.story({args:{label:`In which country do you live?`,helpMessage:`Options can be grouped with <optgroup>`,options:d,name:`groupedInput`}}),v=f.story({args:{label:`In which country do you live?`,options:u,helpMessage:`No empty option is rendered`,placeholder:null,name:`noPlaceholderInput`}}),y=f.story({args:{label:`In which country do you live?`,options:u,helpMessage:``,contentRight:`UE`,name:`unitInput`}}),b=f.story({args:{label:(0,c.jsxs)(`span`,{children:[`Country `,(0,c.jsx)(`em`,{children:`optional`})]}),options:u,name:`richLabelInput`}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: "In which country do you live?",
    options: countries
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    labelPosition: "above",
    label: "In which country do you live?",
    options: countries
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    required: true,
    errorMessage: "This field is required",
    helpMessage: "",
    value: "",
    name: "errorInput",
    label: "In which country do you live?",
    options: countries
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    disabled: true,
    name: "disabledInput",
    label: "In which country do you live?",
    options: countries
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: "In which country do you live?",
    helpMessage: "Options can be grouped with <optgroup>",
    options: groupedCountries,
    name: "groupedInput"
  }
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: "In which country do you live?",
    options: countries,
    helpMessage: "No empty option is rendered",
    placeholder: null,
    name: "noPlaceholderInput"
  }
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: "In which country do you live?",
    options: countries,
    helpMessage: "",
    contentRight: "UE",
    name: "unitInput"
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: <span>
        Country <em>optional</em>
      </span>,
    options: countries,
    name: "richLabelInput"
  }
})`,...b.input.parameters?.docs?.source}}},x=[`Default`,`Vertical`,`ErrorStory`,`Disabled`,`Grouped`,`WithoutPlaceholder`,`WithUnit`,`RichLabel`]}));S();export{p as Default,g as Disabled,h as ErrorStory,_ as Grouped,b as RichLabel,m as Vertical,y as WithUnit,v as WithoutPlaceholder,x as __namedExportsOrder,f as default,S as n,s as t};