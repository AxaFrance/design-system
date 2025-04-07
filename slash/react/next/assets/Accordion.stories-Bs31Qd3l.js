import{j as e}from"./index-DK-fRI8B.js";/* empty css              */import{p as u,d as N}from"./Loader-B2KJ74q3.js";import{r as f}from"./index-DbaA8R3S.js";const _=({children:n,ariaLabelledby:s})=>e.jsx("div",{className:"af-accordion__content","aria-labelledby":s,children:e.jsx("div",{children:n})}),I="af-accordion__item-header",T=({children:n,className:s,classModifier:a,id:i})=>{const r=u(s,a,I);return e.jsxs("summary",{className:r,id:i,children:[e.jsx("h3",{className:"af-accordion__item-title",children:n}),e.jsx("span",{className:"glyphicon glyphicon-menu-down"})]})},l=({children:n,name:s,title:a,id:i,open:r,onToggle:d,className:m,classModifier:t=""})=>{const b=i;let h=r?"open":"";h+=` ${t}`;const v=u(m,h.trim(),"af-accordion__details");return e.jsxs("details",{open:r,name:s,className:v,onToggle:d,children:[e.jsx(T,{id:b,children:a}),e.jsx(_,{children:n})]})},X="af-accordion",p=({className:n,classModifier:s,children:a,onlyOne:i=!1})=>{const r=u(n,s,X),d=f.useId(),m=Array.isArray(a)?a:[a];return e.jsx("div",{className:r,children:m.map(t=>f.createElement(l,{...t.props,name:i?d:void 0,key:t.props.id},t.props.children))})},k={title:"Components/Accordion",component:p},o={name:"Regular Accordion",render:({...n})=>e.jsxs(p,{...n,children:[e.jsxs(l,{title:"About AXA",id:"t1",open:!0,classModifier:"test",children:[e.jsx("p",{children:"AXA is a French multinational insurance firm headquartered in the 8th arrondissement of Pars that engages in global insurance, investment management, and other financial services."}),e.jsx(N,{label:"Check me"}),e.jsx("p",{children:"The AXA Group operates primarily in Western Europe, North America, the Asia Pacific region, and the Middle East, with a presence also in Africa. AXA is a conglomerate of independently run businesses, operated according to the laws and regulations of many different countries."}),e.jsx("p",{children:"AXA's main business is insurance, which includes life, health, and other types of insurance. The company also provides investment management services and has a strong presence in the asset management industry."})]}),e.jsx(l,{title:"About insurance",id:"t2",open:!0,className:"maClasse",children:"Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss."})]}),args:{onlyOne:!1}},c={name:"Light accordion",render:({...n})=>e.jsxs(p,{...n,children:[e.jsx(l,{id:"t2",title:"Titre lorem ipsum",children:"Content 1"}),e.jsx(l,{id:"t1",title:"Title 2",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi recusandae dolore est sunt ducimus tenetur sapiente accusamus, nihil ullam, nulla illo asperiores soluta officia rerum, provident voluptate nesciunt quos."})]}),args:{onlyOne:!1,classModifier:"light"}};var g,A,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Regular Accordion",
  render: ({
    ...args
  }) => <Accordion {...args}>
      <CollapseCard title="About AXA" id="t1" open classModifier="test">
        <p>
          AXA is a French multinational insurance firm headquartered in the 8th
          arrondissement of Pars that engages in global insurance, investment
          management, and other financial services.
        </p>

        <CheckboxItem label="Check me" />

        <p>
          The AXA Group operates primarily in Western Europe, North America, the
          Asia Pacific region, and the Middle East, with a presence also in
          Africa. AXA is a conglomerate of independently run businesses,
          operated according to the laws and regulations of many different
          countries.
        </p>

        <p>
          AXA&apos;s main business is insurance, which includes life, health,
          and other types of insurance. The company also provides investment
          management services and has a strong presence in the asset management
          industry.
        </p>
      </CollapseCard>
      <CollapseCard title="About insurance" id="t2" open className="maClasse">
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>
    </Accordion>,
  args: {
    onlyOne: false
  }
}`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var y,x,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Light accordion",
  render: ({
    ...args
  }) => <Accordion {...args}>
      <CollapseCard id="t2" title="Titre lorem ipsum">
        Content 1
      </CollapseCard>
      <CollapseCard id="t1" title="Title 2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi
        recusandae dolore est sunt ducimus tenetur sapiente accusamus, nihil
        ullam, nulla illo asperiores soluta officia rerum, provident voluptate
        nesciunt quos.
      </CollapseCard>
    </Accordion>,
  args: {
    onlyOne: false,
    classModifier: "light"
  }
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const w=["Default","Light"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Light:c,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{P as A,o as D,c as L};
