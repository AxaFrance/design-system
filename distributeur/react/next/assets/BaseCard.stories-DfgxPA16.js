import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./iframe-BmTal37z.js";import{n as r}from"./distributeur-DhKxp596.js";import{r as i}from"./CardButton-BjG1B7T-.js";var a,o,s,c,l,u,d,f;e((()=>{r(),n(),a=t.meta({title:`Components/BaseCard`,component:i,parameters:{layout:`centered`},argTypes:{component:{options:[`button`,`label`],control:{type:`select`}},orientation:{options:[`horizontal`,`vertical`],control:{type:`select`}},disabled:{control:{type:`boolean`}},type:{options:[`button`,`submit`],control:{type:`select`}}}}),o=a.story({name:`BaseCard Button`,args:{children:`Base Card Content`,component:`button`,orientation:`horizontal`,disabled:!1,type:`button`}}),s=a.story({name:`BaseCard Label`,args:{children:`Base Card Label`,component:`label`,orientation:`horizontal`,htmlFor:`example`}}),c=a.story({name:`BaseCard Button Vertical`,args:{...o.input.args,orientation:`vertical`}}),l=a.story({name:`BaseCard Label Vertical`,args:{...s.input.args,orientation:`vertical`}}),u=a.story({name:`BaseCard Button Disabled`,args:{...o.input.args,disabled:!0}}),d=a.story({name:`BaseCard Submit`,args:{...o.input.args,type:`submit`,children:`Submit`}}),o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "BaseCard Button",
  args: {
    children: "Base Card Content",
    component: "button",
    orientation: "horizontal",
    disabled: false,
    type: "button"
  }
})`,...o.input.parameters?.docs?.source}}},s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "BaseCard Label",
  args: {
    children: "Base Card Label",
    component: "label",
    orientation: "horizontal",
    htmlFor: "example"
  }
})`,...s.input.parameters?.docs?.source}}},c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "BaseCard Button Vertical",
  args: {
    ...Default.input.args,
    orientation: "vertical"
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "BaseCard Label Vertical",
  args: {
    ...AsLabel.input.args,
    orientation: "vertical"
  }
})`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "BaseCard Button Disabled",
  args: {
    ...Default.input.args,
    disabled: true
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "BaseCard Submit",
  args: {
    ...Default.input.args,
    type: "submit",
    children: "Submit"
  }
})`,...d.input.parameters?.docs?.source}}},f=[`Default`,`AsLabel`,`VerticalButton`,`VerticalLabel`,`Disabled`,`Submit`]}))();export{s as AsLabel,o as Default,u as Disabled,d as Submit,c as VerticalButton,l as VerticalLabel,f as __namedExportsOrder,a as default};