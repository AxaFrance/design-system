import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{A as r,C as s}from"./Accordion-9xC_6UG_.js";const m={title:"Components/Accordion",component:r},n={name:"Regular Accordion",render:({...i})=>e.jsxs(r,{...i,children:[e.jsxs(s,{title:"About AXA",id:"t1",open:!0,children:[e.jsx("p",{children:"AXA is a French multinational insurance firm headquartered in the 8th arrondissement of Pars that engages in global insurance, investment management, and other financial services."}),e.jsx("p",{children:"The AXA Group operates primarily in Western Europe, North America, the Asia Pacific region, and the Middle East, with a presence also in Africa. AXA is a conglomerate of independently run businesses, operated according to the laws and regulations of many different countries."}),e.jsx("p",{children:"AXA's main business is insurance, which includes life, health, and other types of insurance. The company also provides investment management services and has a strong presence in the asset management industry."})]}),e.jsx(s,{title:"About insurance",id:"t2",open:!0,children:"Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss."})]}),args:{onlyOne:!1}},a={name:"Light accordion",render:({...i})=>e.jsxs(r,{...i,children:[e.jsx(s,{id:"t2",title:"Titre lorem ipsum",children:"Content 1"}),e.jsx(s,{id:"t1",title:"Title 2",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi recusandae dolore est sunt ducimus tenetur sapiente accusamus, nihil ullam, nulla illo asperiores soluta officia rerum, provident voluptate nesciunt quos."})]}),args:{onlyOne:!1,classModifier:"light"}};var t,o,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Regular Accordion",
  render: ({
    ...args
  }) => <Accordion {...args}>
      <CollapseCard title="About AXA" id="t1" open>
        <p>
          AXA is a French multinational insurance firm headquartered in the 8th
          arrondissement of Pars that engages in global insurance, investment
          management, and other financial services.
        </p>

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
      <CollapseCard title="About insurance" id="t2" open>
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>
    </Accordion>,
  args: {
    onlyOne: false
  }
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const p=["Default","Light"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Light:a,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{f as A,n as D,a as L};
