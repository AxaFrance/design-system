import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-DBecIi7S.js";import{c as a,f as o,o as s,t as c}from"./distributeur-experimental-CbFjMJ07.js";var l=t({HorizontalStory:()=>f,VerticalStory:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m;function h(){return(h=e((()=>{c(),r(),u=n(),d=i.type().meta({title:`Experimental/Form/Radio/RadioGroup`,argTypes:{orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]},variant:{control:`inline-radio`,options:[`button`,`card`]}},args:{variant:`button`}}),f=d.story({name:`Horizontal`,render:({orientation:e,variant:t})=>(0,u.jsx)(s,{orientation:e,variant:t,children:t===`button`?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{id:`horizontal-radio1`,name:`horizontal-example`,value:`option1`,label:`Option 1`}),(0,u.jsx)(o,{id:`horizontal-radio2`,name:`horizontal-example`,value:`option2`,label:`Option 2`}),(0,u.jsx)(o,{id:`horizontal-radio3`,name:`horizontal-example`,value:`option3`,label:`Option 3`})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{id:`horizontal-radio1-card`,name:`horizontal-example-card`,value:`option1`,label:`Option 1`}),(0,u.jsx)(a,{id:`horizontal-radio2-card`,name:`horizontal-example-card`,value:`option2`,label:`Option 2`}),(0,u.jsx)(a,{id:`horizontal-radio3-card`,name:`horizontal-example-card`,value:`option3`,label:`Option 3`})]})}),args:{orientation:`horizontal`}}),p=d.story({name:`Vertical`,render:e=>(0,u.jsxs)(s,{...e,children:[(0,u.jsx)(o,{id:`vertical-radio1`,name:`vertical-example`,value:`option1`,label:`Option 1`}),(0,u.jsx)(o,{id:`vertical-radio2`,name:`vertical-example`,value:`option2`,label:`Option 2`,checked:!0}),(0,u.jsx)(o,{id:`vertical-radio3`,name:`vertical-example`,value:`option3`,label:`Option 3`,disabled:!0}),(0,u.jsx)(o,{id:`vertical-radio4`,name:`vertical-example`,value:`option4`,label:`Option 4`,"aria-invalid":!0})]}),args:{orientation:`vertical`}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Horizontal",
  render: ({
    orientation,
    variant
  }) => <RadioGroup orientation={orientation} variant={variant}>
      {variant === "button" ? <>
          <RadioButton id="horizontal-radio1" name="horizontal-example" value="option1" label="Option 1" />
          <RadioButton id="horizontal-radio2" name="horizontal-example" value="option2" label="Option 2" />
          <RadioButton id="horizontal-radio3" name="horizontal-example" value="option3" label="Option 3" />
        </> : <>
          <RadioCard id="horizontal-radio1-card" name="horizontal-example-card" value="option1" label="Option 1" />
          <RadioCard id="horizontal-radio2-card" name="horizontal-example-card" value="option2" label="Option 2" />
          <RadioCard id="horizontal-radio3-card" name="horizontal-example-card" value="option3" label="Option 3" />
        </>}
    </RadioGroup>,
  args: {
    orientation: "horizontal"
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Vertical",
  render: args => <RadioGroup {...args}>
      <RadioButton id="vertical-radio1" name="vertical-example" value="option1" label="Option 1" />
      <RadioButton id="vertical-radio2" name="vertical-example" value="option2" label="Option 2" checked />
      <RadioButton id="vertical-radio3" name="vertical-example" value="option3" label="Option 3" disabled />
      <RadioButton id="vertical-radio4" name="vertical-example" value="option4" label="Option 4" aria-invalid />
    </RadioGroup>,
  args: {
    orientation: "vertical"
  }
})`,...p.input.parameters?.docs?.source}}},m=[`HorizontalStory`,`VerticalStory`]})))()}export{h as i,l as n,p as r,f as t};