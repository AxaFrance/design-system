/* empty css               *//* empty css             *//* empty css             */const T={title:"Components/List/ContentItemDuo"},u=t=>{const n=document.createElement("div"),a=structuredClone(t.classModifier);if(t.isVertical&&a.push("vertical"),n.classList.add("af-content-item-duo",...a.filter(Boolean).map(e=>`af-content-item-duo--${e}`)),t.isShowingDoneIcon){const e=document.createElement("div");e.className="af-content-item-duo__icon af-content-item-duo__icon--done",e.innerHTML=`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_21132_3825" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_21132_3825)">
                <path d="M9.44999 18.1893L3.51074 12.25L4.93924 10.8218L9.44999 15.3325L19.0357 5.74677L20.4642 7.17502L9.44999 18.1893Z"/>
            </g>
        </svg>`,n.appendChild(e)}if(t.isShowingCloseIcon){const e=document.createElement("div");e.className="af-content-item-duo__icon af-content-item-duo__icon--close",e.innerHTML=`
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.72494 15.1642L0.335693 13.7749L6.11069 7.99994L0.335693 2.22494L1.72494 0.835693L7.49994 6.61069L13.2749 0.835693L14.6642 2.22494L8.88919 7.99994L14.6642 13.7749L13.2749 15.1642L7.49994 9.38919L1.72494 15.1642Z" fill="#C91432"/>
        </svg>`,n.appendChild(e)}const o=document.createElement("p");o.className="af-content-item-duo__label",o.textContent=t.label,n.appendChild(o);const s=document.createElement("p");if(s.className="af-content-item-duo__value",s.textContent=t.value,n.appendChild(s),t.buttonText){const e=document.createElement("div");e.className="af-content-item-duo__button";const r=document.createElement("button");r.className="af-btn-client af-btn-client--ghost",r.textContent=t.buttonText,e.appendChild(r),n.appendChild(e)}return n},D={isVertical:!1,label:"Libellé",value:"Réponse",isShowingDoneIcon:!0,isShowingCloseIcon:!1,buttonText:"En savoir plus",classModifier:[]},M={isVertical:!0,label:"Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",value:"Les incendies, explosions, implosions, fumée et foudre",isShowingDoneIcon:!0,isShowingCloseIcon:!1,buttonText:"En savoir plus",classModifier:[]},b=({classModifier:t,...n})=>{const a=document.createElement("section");a.className=`af-card ${["list","extra-padding",...t].filter(Boolean).map(s=>` af-card--${s}`).join("")}`;const o=document.createElement("ul");return o.className="af-list",n.items.forEach(s=>{const e=document.createElement("li");e.className="af-list__item";const r=structuredClone(s);n.isItemsLarge&&(r.classModifier=["large"]),e.appendChild(u(r)),o.appendChild(e)}),a.appendChild(o),a},i={render:u,args:D,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},l={render:u,args:M,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},c={render:b,args:{items:Array(3).fill(D),isItemsLarge:!1,classModifier:[]},argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},d={render:b,args:{items:Array(3).fill(M),classModifier:[]},argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}};var m,p,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,L;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(L=(h=l.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var v,C,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var I,_,w;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const A=["Default","Vertical","DefaultContentItemDuoList","VerticalContentItemDuoList"];export{i as Default,c as DefaultContentItemDuoList,l as Vertical,d as VerticalContentItemDuoList,A as __namedExportsOrder,T as default};
