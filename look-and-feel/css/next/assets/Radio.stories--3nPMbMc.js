import{r as B,a as I}from"./RadioRender-BNO6JHal.js";import"./utils-DJsnTcQJ.js";const P={title:"Components/Form/Input/Radio"},r={render:B,args:{name:"radio1",label:"J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.",disabled:!1,checked:!1,error:""},argTypes:{}},n={render:I,args:{label:"Quelle ville ?",isRequired:!0,error:"",vertical:!0,disableParis:!1,disableBruxelles:!1,disableLille:!0,showIconParis:!0,showIconBruxelles:!0,showIconLille:!0,radioList:[{name:"cities",labelGroup:{title:"Paris",subtitle:"Capitale de la France",description:"Nord"}},{name:"cities",labelGroup:{title:"Bruxelles",subtitle:"Capitale de la Belgique"}},{name:"cities",labelGroup:{title:"Lille"}}]},argTypes:{radioList:{control:!1},check:{control:"inline-radio",options:["Paris","Bruxelles","Lille"]}},decorators:[(d,{args:u})=>{const{check:i,disableParis:m,disableBruxelles:p,disableLille:b,showIconParis:h,showIconBruxelles:L,showIconLille:g,radioList:e,...x}=u;return e[0]={...e[0],disabled:m,checked:i==="Paris",withIcon:h},e[1]={...e[1],disabled:p,checked:i==="Bruxelles",withIcon:L},e[2]={...e[2],disabled:b,checked:i==="Lille",withIcon:g},d({args:{radioList:e,...x}})}]};var s,a,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: renderBasic,
  args: {
    name: "radio1",
    label: "J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.",
    disabled: false,
    checked: false,
    error: ""
  },
  argTypes: {}
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var t,o,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render,
  args: {
    label: "Quelle ville ?",
    isRequired: true,
    error: "",
    vertical: true,
    disableParis: false,
    disableBruxelles: false,
    disableLille: true,
    showIconParis: true,
    showIconBruxelles: true,
    showIconLille: true,
    radioList: [{
      name: "cities",
      labelGroup: {
        title: "Paris",
        subtitle: "Capitale de la France",
        description: "Nord"
      }
    }, {
      name: "cities",
      labelGroup: {
        title: "Bruxelles",
        subtitle: "Capitale de la Belgique"
      }
    }, {
      name: "cities",
      labelGroup: {
        title: "Lille"
      }
    }]
  },
  argTypes: {
    radioList: {
      control: false
    },
    check: {
      control: "inline-radio",
      options: ["Paris", "Bruxelles", "Lille"]
    }
  },
  decorators: [(story, {
    args
  }) => {
    const {
      check,
      disableParis,
      disableBruxelles,
      disableLille,
      showIconParis,
      showIconBruxelles,
      showIconLille,
      radioList,
      ...restArgs
    } = args;
    radioList[0] = {
      ...radioList[0],
      disabled: disableParis,
      checked: check === "Paris",
      withIcon: showIconParis
    };
    radioList[1] = {
      ...radioList[1],
      disabled: disableBruxelles,
      checked: check === "Bruxelles",
      withIcon: showIconBruxelles
    };
    radioList[2] = {
      ...radioList[2],
      disabled: disableLille,
      checked: check === "Lille",
      withIcon: showIconLille
    };
    return story({
      args: {
        radioList,
        ...restArgs
      }
    });
  }]
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const k=["Basic","Select"];export{r as Basic,n as Select,k as __namedExportsOrder,P as default};
