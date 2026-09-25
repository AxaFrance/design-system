import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-BmTal37z.js";import{n as i,t as a}from"./distributeur-experimental-DNajU_6i.js";var o,s,c,l,u,d=e((()=>{a(),n(),o=r(),s=t.meta({title:`Experimental/Form/Radio/RadioText`,component:i,argTypes:{"aria-invalid":{control:`boolean`,name:`aria-invalid`}}}),c=s.story({name:`Default`,render:e=>(0,o.jsx)(i,{...e}),args:{id:`radio1`,name:`example`,value:`option1`,label:`Option 1`}}),l=s.story({name:`States`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,o.jsx)(i,{id:`radio1`,name:`example`,value:`option1`,label:`Option 1`}),(0,o.jsx)(i,{id:`radio2`,name:`example`,value:`option2`,label:`Option 2`,checked:!0}),(0,o.jsx)(i,{id:`radio3`,name:`example`,value:`option3`,label:`Option 3`,disabled:!0}),(0,o.jsx)(i,{id:`radio4`,name:`example`,value:`option4`,label:`Option 4`,"aria-invalid":!0})]})}),c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Default",
  render: args => <RadioText {...args} />,
  args: {
    id: "radio1",
    name: "example",
    value: "option1",
    label: "Option 1"
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "States",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <RadioText id="radio1" name="example" value="option1" label="Option 1" />
      <RadioText id="radio2" name="example" value="option2" label="Option 2" checked />
      <RadioText id="radio3" name="example" value="option3" label="Option 3" disabled />
      <RadioText id="radio4" name="example" value="option4" label="Option 4" aria-invalid />
    </div>
})`,...l.input.parameters?.docs?.source}}},u=[`DefaultStory`,`States`]}));d();export{c as DefaultStory,l as States,u as __namedExportsOrder,s as default,d as t};