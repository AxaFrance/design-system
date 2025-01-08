/* empty css               *//* empty css             *//* empty css             */import{c as y,a as D}from"./render-DVKJePZp.js";const T={title:"Components/List/ContentItemDuo"},I={isVertical:!1,label:"Libellé",value:"Réponse",isShowingDoneIcon:!0,isShowingCloseIcon:!1,buttonText:"En savoir plus",classModifier:[]},M={isVertical:!0,label:"Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",value:"Les incendies, explosions, implosions, fumée et foudre",isShowingDoneIcon:!0,isShowingCloseIcon:!1,buttonText:"En savoir plus",classModifier:[]},e={render:y,args:I,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},r={render:y,args:M,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},t={render:D,args:{items:Array(3).fill(I),isItemsLarge:!1,classModifier:[]},argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},s={render:D,args:{items:Array(3).fill(M),classModifier:[]},argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: contentItemDuoRender,
  args: defaultArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: contentItemDuoRender,
  args: verticalArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: contentItemDuoListRender,
  args: {
    items: Array(3).fill(defaultArgs),
    isItemsLarge: false,
    classModifier: []
  },
  argTypes: {
    classModifier: {
      options: ["large"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,f,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: contentItemDuoListRender,
  args: {
    items: Array(3).fill(verticalArgs),
    classModifier: []
  },
  argTypes: {
    classModifier: {
      options: ["large"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const h=["Default","Vertical","DefaultContentItemDuoList","VerticalContentItemDuoList"];export{e as Default,t as DefaultContentItemDuoList,r as Vertical,s as VerticalContentItemDuoList,h as __namedExportsOrder,T as default};
