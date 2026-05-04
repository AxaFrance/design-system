import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{O as r,n as i,t as a,w as o}from"./iframe-B6pS4pdr.js";import{St as s,_t as c,bt as l,n as u,o as d,vt as f,yt as p}from"./distributeur-DmtDXCQS.js";var m=n({CheckboxInputErrorStory:()=>w,CheckboxInputStory:()=>C,CheckboxInputWithChildren:()=>T,CheckboxItemStory:()=>D,CheckboxItemToggleStory:()=>E,CheckboxStory:()=>O,__namedExportsOrder:()=>k,default:()=>S}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{u(),h=e(r(),1),a(),g=o(),_=[...Object.values(s),``],v=[p.classic.toString(),p.default.toString(),p.inline.toString(),p.toggle.toString()],y=({children:e,classModifier:t})=>(0,g.jsx)(`strong`,{style:{color:`green`},className:t??``,children:e}),b=[{label:`Disabled`,value:`1`,disabled:!0,id:`uniqueId1`},{label:`Unchecked`,value:`2`,id:`uniqueId2`},{label:`Checked`,value:`3`},{label:(0,g.jsx)(y,{classModifier:`success`,children:`A JSX element`}),value:`4`}],x=[`1`,`3`],S=i.type().meta({title:`Components/Form/Input/Checkbox`,argTypes:{onChange:{action:`onChange`},messageType:{control:{type:`select`,options:_}},classModifier:{options:[`required`,`disabled`],control:{type:`inline-check`}},mode:{control:{type:`radio`,options:v}}},render:({classModifier:e,...t})=>(0,g.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,g.jsx)(c,{...t,classModifier:(e??[]).join(` `),values:x,options:b,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`})})}),C=S.story({name:`CheckboxInput`,parameters:{controls:{include:[`label`,`classModifier`,`mode`,`message`,`messageType`,`forceDisplayMessage`,`onChange`,`required`]}}}),w=S.story({name:`CheckboxInputError`,render:({classModifier:e,...t})=>(0,g.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,g.jsx)(c,{...t,values:x,options:b,classModifier:(e??[]).join(` `),isVisible:!0,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`})}),args:{label:`Place type`,required:!0,mode:p.default,message:`Error message`,messageType:s.error,forceDisplayMessage:!0,id:`inputuniqueid`,name:`placeType`},argTypes:{messageType:{options:_,control:{type:`select`,options:_,labels:{"":`(none)`}}},mode:{control:{type:`select`,options:Object.values(p)}}},parameters:{controls:{include:[`label`,`classModifier`,`mode`,`message`,`messageType`,`forceDisplayMessage`,`onChange`,`required`]}}}),T=S.story({name:`CheckboxInput with help button`,render:e=>(0,g.jsx)(c,{...e,classModifier:(e.classModifier??[]).join(` `),name:`placeType`,id:`uniqueid`,children:(0,g.jsx)(d,{mode:`hover`,children:`help`})}),args:{label:`Place type`,required:!0,mode:p.default,id:`inputuniqueid`,name:`placeType`,options:b},parameters:{controls:{include:[`isChecked`,`disabled`,`onChange`]}}}),E=S.story({name:`CheckboxItem Toggle`,render:e=>{let[t,n]=(0,h.useState)(e.isChecked??!1);return(0,h.useEffect)(()=>{n(e.isChecked??!1)},[e.isChecked]),(0,g.jsx)(l,{...e,name:`placeType`,id:`uniqueid`,value:`toto`,classModifier:(e.classModifier??[]).join(` `),className:`af-form__checkbox-toggle`,isChecked:t,onChange:e=>n(e.target.checked)})},args:{isChecked:!0,disabled:!1},argTypes:{onChange:{action:`onChange`}},parameters:{controls:{include:[`isChecked`,`disabled`,`onChange`]}}}),D=S.story({name:`CheckboxItem`,render:({isChecked:e,...t})=>(0,g.jsx)(l,{...t,name:`placeType`,id:`uniqueid2`,classModifier:(t.classModifier??[]).join(` `),isChecked:!1,onChange:()=>{},defaultChecked:e}),args:{label:`web center forever`,isChecked:!0,disabled:!1},parameters:{controls:{include:[`isChecked`,`disabled`,`label`,`onChange`]}}}),O=S.story({name:`Checkbox`,render:e=>(0,g.jsx)(f,{...e,classModifier:(e.classModifier??[]).join(` `),options:b,values:x,name:`placeName`,id:`uniqueid`,placeholder:`Paris`}),args:{mode:p.default},parameters:{controls:{include:[`mode`]}}}),C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxInput",
  parameters: {
    controls: {
      include: ["label", "classModifier", "mode", "message", "messageType", "forceDisplayMessage", "onChange", "required"]
    }
  }
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxInputError",
  render: ({
    classModifier,
    ...args
  }) => <form className="af-form" name="myform">
      <CheckboxInput {...args} values={values} options={options} classModifier={(classModifier ?? []).join(" ")} isVisible classNameContainerLabel="col-md-2" classNameContainerInput="col-md-10" />
    </form>,
  args: {
    label: "Place type",
    required: true,
    mode: CheckboxModes.default,
    message: "Error message",
    messageType: MessageTypes.error,
    forceDisplayMessage: true,
    id: "inputuniqueid",
    name: "placeType"
  },
  argTypes: {
    messageType: {
      options: messageTypes,
      control: {
        type: "select",
        options: messageTypes,
        labels: {
          "": "(none)"
        }
      }
    },
    mode: {
      control: {
        type: "select",
        options: Object.values(CheckboxModes)
      }
    }
  },
  parameters: {
    controls: {
      include: ["label", "classModifier", "mode", "message", "messageType", "forceDisplayMessage", "onChange", "required"]
    }
  }
})`,...w.input.parameters?.docs?.source}}},T.input.parameters={...T.input.parameters,docs:{...T.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxInput with help button",
  render: args => {
    return <CheckboxInput {...args} classModifier={(args.classModifier ?? []).join(" ")} name="placeType" id="uniqueid">
        <HelpButton mode="hover">help</HelpButton>
      </CheckboxInput>;
  },
  args: {
    label: "Place type",
    required: true,
    mode: CheckboxModes.default,
    id: "inputuniqueid",
    name: "placeType",
    options
  },
  parameters: {
    controls: {
      include: ["isChecked", "disabled", "onChange"]
    }
  }
})`,...T.input.parameters?.docs?.source}}},E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxItem Toggle",
  render: args => {
    const [state, setState] = useState<boolean>(args.isChecked ?? false);
    useEffect(() => {
      setState(args.isChecked ?? false);
    }, [args.isChecked]);
    return <CheckboxItem {...args} name="placeType" id="uniqueid" value="toto" classModifier={(args.classModifier ?? []).join(" ")} className="af-form__checkbox-toggle" isChecked={state} onChange={e => setState(e.target.checked)} />;
  },
  args: {
    isChecked: true,
    disabled: false
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  },
  parameters: {
    controls: {
      include: ["isChecked", "disabled", "onChange"]
    }
  }
})`,...E.input.parameters?.docs?.source}}},D.input.parameters={...D.input.parameters,docs:{...D.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxItem",
  render: ({
    isChecked,
    ...args
  }) => <CheckboxItem {...args} name="placeType" id="uniqueid2" classModifier={(args.classModifier ?? []).join(" ")} isChecked={false} onChange={() => {}} defaultChecked={isChecked} />,
  args: {
    label: "web center forever",
    isChecked: true,
    disabled: false
  },
  parameters: {
    controls: {
      include: ["isChecked", "disabled", "label", "onChange"]
    }
  }
})`,...D.input.parameters?.docs?.source}}},O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Checkbox",
  render: args => <Checkbox {...args} classModifier={(args.classModifier ?? []).join(" ")} options={options} values={values} name="placeName" id="uniqueid" placeholder="Paris" />,
  args: {
    mode: CheckboxModes.default
  },
  parameters: {
    controls: {
      include: ["mode"]
    }
  }
})`,...O.input.parameters?.docs?.source}}},k=[`CheckboxInputStory`,`CheckboxInputErrorStory`,`CheckboxInputWithChildren`,`CheckboxItemToggleStory`,`CheckboxItemStory`,`CheckboxStory`]}));A();export{w as CheckboxInputErrorStory,C as CheckboxInputStory,T as CheckboxInputWithChildren,D as CheckboxItemStory,E as CheckboxItemToggleStory,O as CheckboxStory,k as __namedExportsOrder,S as default,A as n,m as t};