import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-BmTal37z.js";import{a as i,i as a,s as o,t as s}from"./distributeur-experimental-DNajU_6i.js";var c,l,u,d,f,p=e((()=>{s(),n(),c=r(),l=t.type().meta({title:`Experimental/Form/Radio/RadioGroup`,argTypes:{orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]},variant:{control:`inline-radio`,options:[`button`,`card`]}},args:{variant:`button`}}),u=l.story({name:`Horizontal`,render:({orientation:e,variant:t})=>(0,c.jsx)(a,{orientation:e,variant:t,children:t===`button`?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{id:`horizontal-radio1`,name:`horizontal-example`,value:`option1`,label:`Option 1`}),(0,c.jsx)(o,{id:`horizontal-radio2`,name:`horizontal-example`,value:`option2`,label:`Option 2`}),(0,c.jsx)(o,{id:`horizontal-radio3`,name:`horizontal-example`,value:`option3`,label:`Option 3`})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{id:`horizontal-radio1-card`,name:`horizontal-example-card`,value:`option1`,label:`Option 1`}),(0,c.jsx)(i,{id:`horizontal-radio2-card`,name:`horizontal-example-card`,value:`option2`,label:`Option 2`}),(0,c.jsx)(i,{id:`horizontal-radio3-card`,name:`horizontal-example-card`,value:`option3`,label:`Option 3`})]})}),args:{orientation:`horizontal`}}),d=l.story({name:`Vertical`,render:e=>(0,c.jsxs)(a,{...e,children:[(0,c.jsx)(o,{id:`vertical-radio1`,name:`vertical-example`,value:`option1`,label:`Option 1`}),(0,c.jsx)(o,{id:`vertical-radio2`,name:`vertical-example`,value:`option2`,label:`Option 2`,checked:!0}),(0,c.jsx)(o,{id:`vertical-radio3`,name:`vertical-example`,value:`option3`,label:`Option 3`,disabled:!0}),(0,c.jsx)(o,{id:`vertical-radio4`,name:`vertical-example`,value:`option4`,label:`Option 4`,"aria-invalid":!0})]}),args:{orientation:`vertical`}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}},f=[`HorizontalStory`,`VerticalStory`]}));p();export{u as HorizontalStory,d as VerticalStory,f as __namedExportsOrder,l as default,p as t};