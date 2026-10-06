import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-PYnMZM5z.js";import{t as a,u as o}from"./distributeur-experimental-DOvW8NNr.js";var s=t({Default:()=>d,Disabled:()=>m,ErrorStory:()=>p,RichLabel:()=>_,Vertical:()=>f,WithBoundaries:()=>h,WithUnit:()=>g,__namedExportsOrder:()=>v,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v,y=e((()=>{a(),r(),c=i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=n.meta({component:o,title:`Experimental/Form/DateInput`,argTypes:{onChange:{action:`onChange`,table:{disable:!0}},label:{table:{category:`Visual Content`}},helpMessage:{table:{category:`Visual Content`},control:{type:`text`}},errorMessage:{table:{category:`Visual Content`}},labelPosition:{table:{category:`Visual Content`},control:{type:`select`,options:[`centerLeft`,`above`,void 0]}},contentRight:{table:{category:`Visual Content`},control:{type:`text`}},required:{table:{category:`Field state`}},disabled:{table:{category:`Field state`}},value:{table:{category:`Field state`},control:{type:`text`}},min:{table:{category:`Field state`},control:{type:`text`}},max:{table:{category:`Field state`},control:{type:`text`}},id:{table:{category:`Technical Details`}},name:{table:{category:`Technical Details`}},inputClassName:{table:{category:`Technical Details`},control:{type:`text`}},labelClassName:{table:{category:`Technical Details`},control:{type:`text`}},containerClassName:{table:{category:`Technical Details`},control:{type:`text`}}},args:{label:`What is your birth date?`,helpMessage:`The date written on your ID card`,labelPosition:`centerLeft`,errorMessage:``,required:!0,disabled:!1,value:`1990-03-28`,id:`birthdateid`,name:`myDateInput`,onChange:l()}}),d=u.story({args:{label:`What is your birth date?`}}),f=u.story({args:{labelPosition:`above`,label:`What is your birth date?`}}),p=u.story({args:{required:!0,errorMessage:`This field is required`,helpMessage:``,value:``,name:`errorInput`,label:`What is your birth date?`}}),m=u.story({args:{disabled:!0,name:`disabledInput`,label:`What is your birth date?`}}),h=u.story({args:{label:`Pick a date in 2025`,helpMessage:`Only dates in 2025 can be selected`,value:`2025-03-28`,min:`2025-01-01`,max:`2025-12-31`,name:`boundedInput`}}),g=u.story({args:{label:`Effective date`,helpMessage:``,contentRight:`UTC`,name:`unitInput`}}),_=u.story({args:{label:(0,c.jsxs)(`span`,{children:[`Birth date `,(0,c.jsx)(`em`,{children:`optional`})]}),name:`richLabelInput`}}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: "What is your birth date?"
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    labelPosition: "above",
    label: "What is your birth date?"
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    required: true,
    errorMessage: "This field is required",
    helpMessage: "",
    value: "",
    name: "errorInput",
    label: "What is your birth date?"
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    disabled: true,
    name: "disabledInput",
    label: "What is your birth date?"
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: "Pick a date in 2025",
    helpMessage: "Only dates in 2025 can be selected",
    value: "2025-03-28",
    min: "2025-01-01",
    max: "2025-12-31",
    name: "boundedInput"
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: "Effective date",
    helpMessage: "",
    contentRight: "UTC",
    name: "unitInput"
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: <span>
        Birth date <em>optional</em>
      </span>,
    name: "richLabelInput"
  }
})`,..._.input.parameters?.docs?.source}}},v=[`Default`,`Vertical`,`ErrorStory`,`Disabled`,`WithBoundaries`,`WithUnit`,`RichLabel`]}));y();export{d as Default,m as Disabled,p as ErrorStory,_ as RichLabel,f as Vertical,h as WithBoundaries,g as WithUnit,v as __namedExportsOrder,u as default,y as n,s as t};