import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{n as a,t as o}from"./distributeur-experimental-CBCB-5EC.js";var s=t({Default:()=>d,Disabled:()=>m,ErrorStory:()=>p,RichLabel:()=>g,Vertical:()=>f,WithUnit:()=>h,__namedExportsOrder:()=>_,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v=e((()=>{o(),r(),c=i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=n.meta({component:a,title:`Experimental/Form/TextInput`,argTypes:{onChange:{action:`onChange`,table:{disable:!0}},label:{table:{category:`Visual Content`}},helpMessage:{table:{category:`Visual Content`},control:{type:`text`}},errorMessage:{table:{category:`Visual Content`}},placeholder:{table:{category:`Visual Content`}},labelPosition:{table:{category:`Visual Content`},control:{type:`select`,options:[`centerLeft`,`above`,void 0]}},contentRight:{table:{category:`Visual Content`},control:{type:`text`}},required:{table:{category:`Field state`}},disabled:{table:{category:`Field state`}},value:{table:{category:`Field state`}},id:{table:{category:`Technical Details`}},name:{table:{category:`Technical Details`}},inputClassName:{table:{category:`Technical Details`},control:{type:`text`}},labelClassName:{table:{category:`Technical Details`},control:{type:`text`}},containerClassName:{table:{category:`Technical Details`},control:{type:`text`}}},args:{label:`What is your name?`,helpMessage:`This is your government name`,labelPosition:`centerLeft`,errorMessage:``,placeholder:`Your name`,required:!0,disabled:!1,value:`John Doe`,id:`nameid`,name:`myTextInput`,onChange:l()}}),d=u.story({args:{}}),f=u.story({args:{disabled:!0,labelPosition:`above`}}),p=u.story({args:{required:!0,errorMessage:`This field is required`,helpMessage:``,value:``,name:`errorInput`}}),m=u.story({args:{disabled:!0,value:`Disabled input`,name:`disabledInput`}}),h=u.story({args:{label:`Price`,placeholder:`Enter amount`,contentRight:`€`,name:`unitInput`}}),g=u.story({args:{label:(0,c.jsxs)(`span`,{children:[`Place name `,(0,c.jsx)(`em`,{children:`optional`})]}),name:`richLabelInput`}}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {}
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    disabled: true,
    labelPosition: "above"
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    required: true,
    errorMessage: "This field is required",
    helpMessage: "",
    value: "",
    name: "errorInput"
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    disabled: true,
    value: "Disabled input",
    name: "disabledInput"
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: "Price",
    placeholder: "Enter amount",
    contentRight: "€",
    name: "unitInput"
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: <span>
        Place name <em>optional</em>
      </span>,
    name: "richLabelInput"
  }
})`,...g.input.parameters?.docs?.source}}},_=[`Default`,`Vertical`,`ErrorStory`,`Disabled`,`WithUnit`,`RichLabel`]}));v();export{d as Default,m as Disabled,p as ErrorStory,g as RichLabel,f as Vertical,h as WithUnit,_ as __namedExportsOrder,u as default,v as n,s as t};