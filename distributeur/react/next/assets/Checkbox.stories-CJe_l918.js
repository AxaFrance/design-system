import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BL8mseS1.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./iframe-CUw-2XJG.js";import{Fn as o,Ln as s,Nn as c,Un as l,f as u,t as d,zn as f}from"./distributeur-BR8zYeHf.js";var p=t({CheckboxInputErrorStory:()=>C,CheckboxInputStory:()=>S,CheckboxInputWithChildren:()=>w,CheckboxItemStory:()=>E,CheckboxItemToggleStory:()=>T,CheckboxStory:()=>D,__namedExportsOrder:()=>O,default:()=>x}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{d(),m=n(),i(),h=r(),g=[...Object.values(l),``],_=[s.classic.toString(),s.default.toString(),s.inline.toString(),s.toggle.toString()],v=({children:e,className:t})=>(0,h.jsx)(`strong`,{style:{color:`green`},className:t??``,children:e}),y=[{label:`Disabled`,value:`1`,disabled:!0,id:`uniqueId1`},{label:`Unchecked`,value:`2`,id:`uniqueId2`},{label:`Checked`,value:`3`},{label:(0,h.jsx)(v,{className:`success`,children:`A JSX element`}),value:`4`}],b=[`1`,`3`],x=a.type().meta({title:`Components/Form/Input/Checkbox`,argTypes:{onChange:{action:`onChange`},messageType:{control:{type:`select`,options:g}},mode:{options:_,control:{type:`radio`,options:_}}},render:e=>(0,h.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,h.jsx)(c,{...e,values:b,options:y,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`})})}),S=x.story({name:`CheckboxInput`,parameters:{controls:{include:[`label`,`mode`,`message`,`messageType`,`forceDisplayMessage`,`onChange`,`required`]}}}),C=x.story({name:`CheckboxInputError`,render:e=>(0,h.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,h.jsx)(c,{...e,values:b,options:y,isVisible:!0,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`})}),args:{label:`Place type`,required:!0,mode:s.default,message:`Error message`,messageType:l.error,forceDisplayMessage:!0,id:`inputuniqueid`,name:`placeType`},argTypes:{messageType:{options:g,control:{type:`select`,options:g,labels:{"":`(none)`}}},mode:{control:{type:`select`,options:Object.values(s)}}},parameters:{controls:{include:[`label`,`mode`,`message`,`messageType`,`forceDisplayMessage`,`onChange`,`required`]}}}),w=x.story({name:`CheckboxInput with help button`,render:e=>(0,h.jsx)(c,{...e,name:`placeType`,id:`uniqueid`,children:(0,h.jsx)(u,{mode:`hover`,children:`help`})}),args:{label:`Place type`,required:!0,mode:s.default,id:`inputuniqueid`,name:`placeType`,options:y},parameters:{controls:{include:[`isChecked`,`disabled`,`onChange`]}}}),T=x.story({name:`CheckboxItem Toggle`,render:e=>{let[t,n]=(0,m.useState)(e.isChecked??!1);return(0,m.useEffect)(()=>{n(e.isChecked??!1)},[e.isChecked]),(0,h.jsx)(f,{...e,name:`placeType`,id:`uniqueid`,value:`toto`,className:`af-form__checkbox-toggle`,isChecked:t,onChange:e=>n(e.target.checked)})},args:{isChecked:!0,disabled:!1},argTypes:{onChange:{action:`onChange`}},parameters:{controls:{include:[`isChecked`,`disabled`,`onChange`]}}}),E=x.story({name:`CheckboxItem`,render:({isChecked:e,...t})=>(0,h.jsx)(f,{...t,name:`placeType`,id:`uniqueid2`,isChecked:!1,onChange:()=>{},defaultChecked:e}),args:{label:`web center forever`,isChecked:!0,disabled:!1},parameters:{controls:{include:[`isChecked`,`disabled`,`label`,`onChange`]}}}),D=x.story({name:`Checkbox`,render:e=>(0,h.jsx)(o,{...e,options:y,values:b,name:`placeName`,id:`uniqueid`,placeholder:`Paris`}),args:{mode:s.default},parameters:{controls:{include:[`mode`]}}}),S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxInput",
  parameters: {
    controls: {
      include: ["label", "mode", "message", "messageType", "forceDisplayMessage", "onChange", "required"]
    }
  }
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxInputError",
  render: args => <form className="af-form" name="myform">
      <CheckboxInput {...args} values={values} options={options} isVisible classNameContainerLabel="col-md-2" classNameContainerInput="col-md-10" />
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
      include: ["label", "mode", "message", "messageType", "forceDisplayMessage", "onChange", "required"]
    }
  }
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxInput with help button",
  render: args => {
    return <CheckboxInput {...args} name="placeType" id="uniqueid">
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
})`,...w.input.parameters?.docs?.source}}},T.input.parameters={...T.input.parameters,docs:{...T.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxItem Toggle",
  render: args => {
    const [state, setState] = useState<boolean>(args.isChecked ?? false);
    useEffect(() => {
      setState(args.isChecked ?? false);
    }, [args.isChecked]);
    return <CheckboxItem {...args} name="placeType" id="uniqueid" value="toto" className="af-form__checkbox-toggle" isChecked={state} onChange={e => setState(e.target.checked)} />;
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
})`,...T.input.parameters?.docs?.source}}},E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "CheckboxItem",
  render: ({
    isChecked,
    ...args
  }) => <CheckboxItem {...args} name="placeType" id="uniqueid2" isChecked={false} onChange={() => {}} defaultChecked={isChecked} />,
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
})`,...E.input.parameters?.docs?.source}}},D.input.parameters={...D.input.parameters,docs:{...D.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Checkbox",
  render: args => <Checkbox {...args} options={options} values={values} name="placeName" id="uniqueid" placeholder="Paris" />,
  args: {
    mode: CheckboxModes.default
  },
  parameters: {
    controls: {
      include: ["mode"]
    }
  }
})`,...D.input.parameters?.docs?.source}}},O=[`CheckboxInputStory`,`CheckboxInputErrorStory`,`CheckboxInputWithChildren`,`CheckboxItemToggleStory`,`CheckboxItemStory`,`CheckboxStory`]})))()}export{p as a,D as i,E as n,k as o,T as r,S as t};