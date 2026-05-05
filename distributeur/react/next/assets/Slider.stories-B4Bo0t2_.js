import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{X as a,n as o}from"./distributeur-Ct4qDp97.js";var s=t({SliderStory:()=>p,__namedExportsOrder:()=>m,default:()=>d}),c,l,u,d,f,p,m,h=e((()=>{o(),r(),c=i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=[`required`,`disabled`],d=n.type().meta({title:`Components/Form/Input/Slider`,args:{onChange:l()}}),f=[{label:`64`,value:64},{label:`128`,value:128},{label:`256`,value:256},{label:`1024`,value:1024},{label:`2048`,value:2048},{label:`4096`,value:4096}],p=d.story({name:`Slider`,render:({classModifier:e,...t})=>(0,c.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,c.jsx)(a,{classModifier:e.join(` `),...t})}),args:{name:`placeName`,options:f,id:`uniqueid`,value:2048,disabled:!1,classModifier:[]},argTypes:{classModifier:{options:u,control:{type:`inline-check`}},onChange:{action:`onChange`},onChangeComplete:{action:`onChangeComplete`},onBlur:{action:`onBlur`},onFocus:{action:`onFocus`}}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Slider",
  render: ({
    classModifier,
    ...args
  }) => <form className="af-form" name="myform">
      <Slider classModifier={classModifier.join(" ")} {...args} />
    </form>,
  args: {
    name: "placeName",
    options,
    id: "uniqueid",
    value: 2048,
    disabled: false,
    classModifier: []
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "inline-check"
      }
    },
    onChange: {
      action: "onChange"
    },
    onChangeComplete: {
      action: "onChangeComplete"
    },
    onBlur: {
      action: "onBlur"
    },
    onFocus: {
      action: "onFocus"
    }
  }
})`,...p.input.parameters?.docs?.source}}},m=[`SliderStory`]}));h();export{p as SliderStory,m as __namedExportsOrder,d as default,h as n,s as t};