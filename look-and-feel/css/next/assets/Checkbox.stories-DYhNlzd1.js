import{r as f,a as I}from"./CheckBoxRender-BnPgTt_X.js";import"./utils-DJsnTcQJ.js";const v={title:"Components/Form/Input/Checkbox"},l={render:f,args:{name:"checkbox1",label:"J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.",disabled:!1,checked:!1,error:""},argTypes:{}},n={render:I,args:{label:"Quelle ville ?",isRequired:!0,error:"",vertical:!0,disableParis:!1,disableBruxelles:!1,disableLille:!0,checkParis:!1,checkBruxelles:!0,checkLille:!0,showIconParis:!0,showIconBruxelles:!0,showIconLille:!0,checkboxList:[{name:"Paris",labelGroup:{title:"Paris",subtitle:"Capitale de la France",description:"Nord"}},{name:"Bruxelles",labelGroup:{title:"Bruxelles",subtitle:"Capitale de la Belgique"}},{name:"Lille",labelGroup:{title:"Lille"}}]},argTypes:{checkboxList:{control:!1}},decorators:[(o,{args:d})=>{const{disableParis:u,disableBruxelles:h,disableLille:b,checkParis:m,checkBruxelles:p,checkLille:x,showIconParis:k,showIconBruxelles:L,showIconLille:g,checkboxList:e,...B}=d;return e[0]={...e[0],disabled:u,checked:m,withIcon:k},e[1]={...e[1],disabled:h,checked:p,withIcon:L},e[2]={...e[2],disabled:b,checked:x,withIcon:g},o({args:{checkboxList:e,...B}})}]};var r,s,a;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: renderBasic,
  args: {
    name: "checkbox1",
    label: "J'accepte la convention de preuve relative à ma demande de versement complémentaire sur internet et déclare en accepter expressément les conditions. Je déclare être pleinement informé(e) qu'AXA, en sa qualité d'organisme financier, est soumise aux obligations légales issues principalement du code monétaire et financier en matière de lutte contre le blanchiment des capitaux et le financement du terrorisme.",
    disabled: false,
    checked: false,
    error: ""
  },
  argTypes: {}
}`,...(a=(s=l.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,c,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render,
  args: {
    label: "Quelle ville ?",
    isRequired: true,
    error: "",
    vertical: true,
    disableParis: false,
    disableBruxelles: false,
    disableLille: true,
    checkParis: false,
    checkBruxelles: true,
    checkLille: true,
    showIconParis: true,
    showIconBruxelles: true,
    showIconLille: true,
    checkboxList: [{
      name: "Paris",
      labelGroup: {
        title: "Paris",
        subtitle: "Capitale de la France",
        description: "Nord"
      }
    }, {
      name: "Bruxelles",
      labelGroup: {
        title: "Bruxelles",
        subtitle: "Capitale de la Belgique"
      }
    }, {
      name: "Lille",
      labelGroup: {
        title: "Lille"
      }
    }]
  },
  argTypes: {
    checkboxList: {
      control: false
    }
  },
  decorators: [(story, {
    args
  }) => {
    const {
      disableParis,
      disableBruxelles,
      disableLille,
      checkParis,
      checkBruxelles,
      checkLille,
      showIconParis,
      showIconBruxelles,
      showIconLille,
      checkboxList,
      ...restArgs
    } = args;
    checkboxList[0] = {
      ...checkboxList[0],
      disabled: disableParis,
      checked: checkParis,
      withIcon: showIconParis
    };
    checkboxList[1] = {
      ...checkboxList[1],
      disabled: disableBruxelles,
      checked: checkBruxelles,
      withIcon: showIconBruxelles
    };
    checkboxList[2] = {
      ...checkboxList[2],
      disabled: disableLille,
      checked: checkLille,
      withIcon: showIconLille
    };
    return story({
      args: {
        checkboxList,
        ...restArgs
      }
    });
  }]
}`,...(t=(c=n.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};const q=["Basic","Select"];export{l as Basic,n as Select,q as __namedExportsOrder,v as default};
