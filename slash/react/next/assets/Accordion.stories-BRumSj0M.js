import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{o as g,c as N}from"./Loader-DJsQniMZ.js";import{r as f}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";const w=({children:a,ariaLabelledby:n})=>e.jsx("div",{className:"af-accordion__content","aria-labelledby":n,children:e.jsx("div",{children:a})}),T="af-accordion__item-header",_=({children:a,className:n,classModifier:t,id:o})=>{const i=g(n,t,T);return e.jsxs("summary",{className:i,id:o,children:[e.jsx("h3",{className:"af-accordion__item-title",children:a}),e.jsx("span",{className:"glyphicon glyphicon-menu-down"})]})},s=({children:a,name:n,title:t,id:o,open:i,onToggle:c,className:p,classModifier:r=""})=>{const E=o;let h=i?"open":"";h+=` ${r}`;const I=g(p,h.trim(),"af-accordion__details");return e.jsxs("details",{open:i,name:n,className:I,onToggle:c,children:[e.jsx(_,{id:E,children:t}),e.jsx(w,{children:a})]})},M="af-accordion",d=({className:a,classModifier:n,children:t,onlyOne:o=!1})=>{const i=g(a,n,M),c=f.useId(),p=Array.isArray(t)?t:[t];return e.jsx("div",{className:i,children:p.map(r=>f.createElement(s,{...r.props,name:o?c:void 0,key:r.props.id},r.props.children))})},S={title:"Components/Accordion",component:d},l={name:"Regular Accordion",render:({...a})=>e.jsxs(d,{...a,children:[e.jsxs(s,{title:"About AXA",id:"t1",open:!0,classModifier:"test",children:[e.jsx("p",{children:"AXA is a French multinational insurance firm headquartered in the 8th arrondissement of Pars that engages in global insurance, investment management, and other financial services."}),e.jsx(N,{label:"Check me"}),e.jsx("p",{children:"The AXA Group operates primarily in Western Europe, North America, the Asia Pacific region, and the Middle East, with a presence also in Africa. AXA is a conglomerate of independently run businesses, operated according to the laws and regulations of many different countries."}),e.jsx("p",{children:"AXA's main business is insurance, which includes life, health, and other types of insurance. The company also provides investment management services and has a strong presence in the asset management industry."})]}),e.jsx(s,{title:"About insurance",id:"t2",open:!0,className:"maClasse",children:"Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss."})]}),args:{onlyOne:!1}},u={name:"Light accordion",render:({...a})=>e.jsxs(d,{...a,children:[e.jsx(s,{id:"t2",title:"Titre lorem ipsum",children:"Content 1"}),e.jsx(s,{id:"t1",title:"Title 2",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi recusandae dolore est sunt ducimus tenetur sapiente accusamus, nihil ullam, nulla illo asperiores soluta officia rerum, provident voluptate nesciunt quos."})]}),args:{onlyOne:!1,classModifier:"light"}},m={name:"White accordion",render:({...a})=>e.jsxs(d,{...a,children:[e.jsx(s,{id:"w1",title:"Titre onglet 1",children:"This is the content of the first white accordion item."}),e.jsx(s,{id:"w2",title:"Titre onglet 2",children:"Erat sed option lorem vero at sit id. Sea aliquyam dolore no ipsum dolore feugiat suscipit ipsum sit aliquyam stet iriure diam eu dolor gubergren magna. Kasd ea et assum. Et sanctus dolor. Amet consequat amet option stet magna nonumy magna nonumy in ut no nibh. Voluptua labore kasd ipsum diam nulla et dolor ea nibh. Et dolore velit. Facilisi invidunt sed nonumy sea et commodo sit. Amet clita amet aliquam consequat dolor eu ipsum eu adipiscing sadipscing tempor consectetuer iriure. Dolores assum feugiat tempor. Nulla magna ipsum amet possim iusto facer at justo. Facilisis sadipscing labore ea ipsum elit diam eos duo. Ipsum sit ut et eum et sanctus vero veniam magna assum gubergren. Magna qui blandit aliquyam amet erat. Clita tation duo consetetur dolor qui magna consequat quod magna ut diam erat vero facilisi erat rebum duis diam. Luptatum sed eu nonummy ut lorem augue ipsum magna lorem nisl dolore. Ea ut nulla et sed volutpat kasd qui lorem justo erat lorem eos erat. Euismod est ut stet elit dolores labore at. Gubergren enim sanctus dolore ut erat dolore nihil eirmod clita ipsum. Erat vero erat. Ipsum sit dolor dolore magna molestie sed diam sit ipsum kasd dolor elit et dolor consectetuer elit. Ipsum amet sanctus dolor nulla eos qui. Consetetur dolores illum nulla doming. Invidunt justo diam. No nulla elitr takimata facilisis ea erat labore ut te rebum et no lorem duo tempor diam clita. Sit luptatum volutpat. Clita clita at nonumy accusam amet aliquyam. Erat voluptua eu kasd voluptua magna vero. Invidunt et sit eirmod at eirmod sed takimata nulla sadipscing sadipscing lorem kasd."})]}),args:{onlyOne:!1,classModifier:"white"}};var y,A,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var v,b,j;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(b=u.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var q,x,k;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "White accordion",
  render: ({
    ...args
  }) => <Accordion {...args}>
      <CollapseCard id="w1" title="Titre onglet 1">
        This is the content of the first white accordion item.
      </CollapseCard>
      <CollapseCard id="w2" title="Titre onglet 2">
        Erat sed option lorem vero at sit id. Sea aliquyam dolore no ipsum
        dolore feugiat suscipit ipsum sit aliquyam stet iriure diam eu dolor
        gubergren magna. Kasd ea et assum. Et sanctus dolor. Amet consequat amet
        option stet magna nonumy magna nonumy in ut no nibh. Voluptua labore
        kasd ipsum diam nulla et dolor ea nibh. Et dolore velit. Facilisi
        invidunt sed nonumy sea et commodo sit. Amet clita amet aliquam
        consequat dolor eu ipsum eu adipiscing sadipscing tempor consectetuer
        iriure. Dolores assum feugiat tempor. Nulla magna ipsum amet possim
        iusto facer at justo. Facilisis sadipscing labore ea ipsum elit diam eos
        duo. Ipsum sit ut et eum et sanctus vero veniam magna assum gubergren.
        Magna qui blandit aliquyam amet erat. Clita tation duo consetetur dolor
        qui magna consequat quod magna ut diam erat vero facilisi erat rebum
        duis diam. Luptatum sed eu nonummy ut lorem augue ipsum magna lorem nisl
        dolore. Ea ut nulla et sed volutpat kasd qui lorem justo erat lorem eos
        erat. Euismod est ut stet elit dolores labore at. Gubergren enim sanctus
        dolore ut erat dolore nihil eirmod clita ipsum. Erat vero erat. Ipsum
        sit dolor dolore magna molestie sed diam sit ipsum kasd dolor elit et
        dolor consectetuer elit. Ipsum amet sanctus dolor nulla eos qui.
        Consetetur dolores illum nulla doming. Invidunt justo diam. No nulla
        elitr takimata facilisis ea erat labore ut te rebum et no lorem duo
        tempor diam clita. Sit luptatum volutpat. Clita clita at nonumy accusam
        amet aliquyam. Erat voluptua eu kasd voluptua magna vero. Invidunt et
        sit eirmod at eirmod sed takimata nulla sadipscing sadipscing lorem
        kasd.
      </CollapseCard>
    </Accordion>,
  args: {
    onlyOne: false,
    classModifier: "white"
  }
}`,...(k=(x=m.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const X=["Default","Light","White"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Light:u,White:m,__namedExportsOrder:X,default:S},Symbol.toStringTag,{value:"Module"}));export{P as A,l as D,u as L};
