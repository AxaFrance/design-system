import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as M,u as L,p,B as y,J as S,b as X}from"./CardData-CisLDHWb.js";import{r as x}from"./index-ZnYipkzV.js";import"./index-63p0MazF.js";const Z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24.75%200-42.37-17.63Q201-155.25%20201-180v-570h-11q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32%208.62-8.5%2021.37-8.5h158q0-13%208.63-21.5%208.62-8.5%2021.37-8.5h204q12.75%200%2021.38%208.62Q612-822.75%20612-810h158q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32-8.63%208.5-21.38%208.5h-11v570q0%2024.75-17.62%2042.37Q723.75-120%20699-120H261Zm438-630H261v570h438v-570ZM397.18-266q12.82%200%2021.32-8.63%208.5-8.62%208.5-21.37v-339q0-12.75-8.68-21.38-8.67-8.62-21.5-8.62-12.82%200-21.32%208.62-8.5%208.63-8.5%2021.38v339q0%2012.75%208.68%2021.37%208.67%208.63%2021.5%208.63Zm166%200q12.82%200%2021.32-8.63%208.5-8.62%208.5-21.37v-339q0-12.75-8.68-21.38-8.67-8.62-21.5-8.62-12.82%200-21.32%208.62-8.5%208.63-8.5%2021.38v339q0%2012.75%208.68%2021.37%208.67%208.63%2021.5%208.63ZM261-750v570-570Z'/%3e%3c/svg%3e",O="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M180-180h44l472-471-44-44-472%20471v44Zm-30%2060q-13%200-21.5-8.5T120-150v-73q0-12%205-23.5t13-19.5l557-556q8-8%2019-12.5t23-4.5q11%200%2022%204.5t20%2012.5l44%2044q9%209%2013%2020t4%2022q0%2011-4.5%2022.5T823-694L266-138q-8%208-19.5%2013t-23.5%205h-73Zm629-617-41-41%2041%2041Zm-105%2064-22-22%2044%2044-22-22Z'/%3e%3c/svg%3e",B=({children:a,ariaLabelledby:o})=>e.jsx("div",{className:"af-accordion__content","aria-labelledby":o,children:e.jsx("div",{children:a})}),A="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-356q-6%200-11-2t-10-7L261-563q-9-9-8.5-21.5T262-606q9-9%2021.5-9t21.5%209l175%20176%20176-176q9-9%2021-8.5t21%209.5q9%209%209%2021.5t-9%2021.5L501-365q-5%205-10%207t-11%202Z'/%3e%3c/svg%3e",D="af-accordion__item-header",F=({children:a,className:o,classModifier:r,id:l,actions:i,variant:c})=>{const g=M(o,r,D);return e.jsx("summary",{className:g,id:l,children:c==="light"?e.jsxs(L,{heading:"h3",children:[e.jsx(p,{src:A,className:"af-accordion__item-header-icon"}),a,i?i.filter(n=>!!n).map(({key:n,label:s,leftIcon:m,rightIcon:d,onClick:u})=>e.jsx(y,{onClick:u,leftIcon:m?e.jsx(p,{src:m}):void 0,rightIcon:d?e.jsx(p,{src:d}):void 0,variant:"ghost",children:s},n)):null]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"af-accordion__header-left",children:e.jsx("h3",{className:"af-accordion__item-title",children:a})}),e.jsxs("div",{className:"af-accordion__header-right",children:[i?i.filter(n=>!!n).map(({key:n,label:s,leftIcon:m,rightIcon:d,onClick:u})=>e.jsx(y,{onClick:u,leftIcon:m?e.jsx(p,{src:m}):void 0,rightIcon:d?e.jsx(p,{src:d}):void 0,variant:c==="white"?"ghost":"ghost-reverse",children:s},n)):null,e.jsx(p,{src:A,className:"af-accordion__item-header-icon"})]})]})})},t=({children:a,name:o,title:r,id:l,open:i,onToggle:c,className:g,classModifier:n="",actions:s,variant:m})=>{const d=l;let u=i?"open":"";u+=` ${n}`;const W=M(g,u.trim(),"af-accordion__details");return e.jsxs("details",{open:i,name:o,className:W,onToggle:c,children:[e.jsx(F,{id:d,actions:s,variant:m,children:r}),e.jsx(B,{children:a})]})},P="af-accordion",C=({className:a,classModifier:o,variant:r="default",children:l,onlyOne:i=!1})=>{const c=S({componentClassName:P,userClassName:a,classModifier:o||r!=="default"&&r||""}),g=x.useId(),n=Array.isArray(l)?l:[l];return e.jsx("div",{className:c,children:n.map(s=>x.createElement(t,{...s.props,name:i?g:void 0,key:s.props.id,variant:r},s.props.children))})},G={title:"Components/Accordion",component:C},q=[{key:"edit",label:"Edit",leftIcon:O,onClick:()=>console.log("Edit clicked")},{key:"delete",label:"Delete",rightIcon:Z,onClick:()=>console.log("Delete clicked")}],h={name:"Regular Accordion",render:({...a})=>e.jsxs(C,{...a,children:[e.jsxs(t,{title:"About AXA",id:"t1",open:!0,classModifier:"test",children:[e.jsx("p",{children:"AXA is a French multinational insurance firm headquartered in the 8th arrondissement of Pars that engages in global insurance, investment management, and other financial services."}),e.jsx(X,{label:"Check me"}),e.jsx("p",{children:"The AXA Group operates primarily in Western Europe, North America, the Asia Pacific region, and the Middle East, with a presence also in Africa. AXA is a conglomerate of independently run businesses, operated according to the laws and regulations of many different countries."}),e.jsx("p",{children:"AXA's main business is insurance, which includes life, health, and other types of insurance. The company also provides investment management services and has a strong presence in the asset management industry."})]}),e.jsx(t,{title:"About insurance",id:"t2",open:!0,children:"Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss."}),e.jsx(t,{title:"With actions",id:"t3",open:!0,actions:q,children:"Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss."})]}),args:{variant:"default",onlyOne:!1}},f={name:"Light accordion",render:({...a})=>e.jsxs(C,{...a,children:[e.jsx(t,{id:"t2",title:"Titre lorem ipsum",children:"Content 1"}),e.jsx(t,{id:"t1",title:"Title 2",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eligendi recusandae dolore est sunt ducimus tenetur sapiente accusamus, nihil ullam, nulla illo asperiores soluta officia rerum, provident voluptate nesciunt quos."}),e.jsx(t,{title:"With actions",id:"t3",open:!0,actions:q,children:"Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss."})]}),args:{onlyOne:!1,variant:"light"}},v={name:"White accordion",render:({...a})=>e.jsxs(C,{...a,children:[e.jsx(t,{id:"w1",title:"Titre onglet 1",children:"This is the content of the first white accordion item."}),e.jsx(t,{id:"w2",title:"Titre onglet 2",children:"Erat sed option lorem vero at sit id. Sea aliquyam dolore no ipsum dolore feugiat suscipit ipsum sit aliquyam stet iriure diam eu dolor gubergren magna. Kasd ea et assum. Et sanctus dolor. Amet consequat amet option stet magna nonumy magna nonumy in ut no nibh. Voluptua labore kasd ipsum diam nulla et dolor ea nibh. Et dolore velit. Facilisi invidunt sed nonumy sea et commodo sit. Amet clita amet aliquam consequat dolor eu ipsum eu adipiscing sadipscing tempor consectetuer iriure. Dolores assum feugiat tempor. Nulla magna ipsum amet possim iusto facer at justo. Facilisis sadipscing labore ea ipsum elit diam eos duo. Ipsum sit ut et eum et sanctus vero veniam magna assum gubergren. Magna qui blandit aliquyam amet erat. Clita tation duo consetetur dolor qui magna consequat quod magna ut diam erat vero facilisi erat rebum duis diam. Luptatum sed eu nonummy ut lorem augue ipsum magna lorem nisl dolore. Ea ut nulla et sed volutpat kasd qui lorem justo erat lorem eos erat. Euismod est ut stet elit dolores labore at. Gubergren enim sanctus dolore ut erat dolore nihil eirmod clita ipsum. Erat vero erat. Ipsum sit dolor dolore magna molestie sed diam sit ipsum kasd dolor elit et dolor consectetuer elit. Ipsum amet sanctus dolor nulla eos qui. Consetetur dolores illum nulla doming. Invidunt justo diam. No nulla elitr takimata facilisis ea erat labore ut te rebum et no lorem duo tempor diam clita. Sit luptatum volutpat. Clita clita at nonumy accusam amet aliquyam. Erat voluptua eu kasd voluptua magna vero. Invidunt et sit eirmod at eirmod sed takimata nulla sadipscing sadipscing lorem kasd."}),e.jsx(t,{title:"With actions",id:"t3",open:!0,actions:q,children:"Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss."})]}),args:{onlyOne:!1,variant:"white"}};var b,j,k;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      <CollapseCard title="About insurance" id="t2" open>
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>

      <CollapseCard title="With actions" id="t3" open actions={actions}>
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>
    </Accordion>,
  args: {
    variant: "default",
    onlyOne: false
  }
}`,...(k=(j=h.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var w,I,E;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
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

      <CollapseCard title="With actions" id="t3" open actions={actions}>
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>
    </Accordion>,
  args: {
    onlyOne: false,
    variant: "light"
  }
}`,...(E=(I=f.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var N,_,T;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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

      <CollapseCard title="With actions" id="t3" open actions={actions}>
        Insurance is a means of protection from financial loss. It is a form of
        risk management, primarily used to hedge against the risk of a
        contingent or uncertain loss.
      </CollapseCard>
    </Accordion>,
  args: {
    onlyOne: false,
    variant: "white"
  }
}`,...(T=(_=v.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const H=["Default","Light","White"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:h,Light:f,White:v,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{$ as A,h as D,f as L};
