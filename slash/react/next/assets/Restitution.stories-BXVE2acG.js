import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{o}from"./CardData---QWWqDB.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";const f=({children:i,className:n,classModifier:s,...l})=>{const a=o(n,s,"af-restitution");return e.jsx("article",{className:a,...l,children:i})},b=({title:i,subtitle:n,rightTitle:s,className:l,classModifier:a})=>{const d=o(l,a,"af-restitution__header");return e.jsxs("header",{className:d,children:[e.jsx("div",{className:"af-restitution__header-left",children:e.jsxs("h3",{className:"af-restitution__title",children:[e.jsx("span",{className:"af-restitution__title-main",children:i}),n?e.jsx("span",{className:"af-restitution__title-subtitle",children:n}):null]})}),s?e.jsx("div",{className:"af-restitution__header-right",children:e.jsx("span",{className:"af-restitution__title",children:s})}):null]})},_=({children:i,className:n,classModifier:s})=>{const l=o(n,s,"af-restitution__content");return e.jsx("section",{className:l,children:i})},j=({title:i,className:n,classModifier:s})=>{const l=o(n,s,"af-restitution__content-title");return e.jsx("h4",{className:l,children:i})},R="col col-sm-12 col-md-12 col-lg-12 col-xl-12",m=({title:i,className:n=R,classNameContainer:s="row af-restitution__content-left",children:l,classModifier:a})=>{const d=o(n,a,R);return e.jsxs("div",{className:d,children:[i?e.jsx(j,{title:i}):null,e.jsx("div",{className:s,children:l})]})},r=({children:i,className:n,title:s,classModifier:l})=>{const a=o(n,l,"col-sm-12 col-md-12 col-lg-6 col-xl-6");return e.jsxs("div",{className:a,children:[s?e.jsx(j,{title:s}):null,i]})},t=({label:i,children:n="-",className:s,classModifier:l})=>{const a=o(s,l,"af-restitution__listdef");return e.jsxs("dl",{className:a,children:[e.jsx("dt",{className:"af-restitution__listdef-item",children:e.jsx("span",{className:"af-restitution__text",children:i})}),e.jsx("dd",{className:"af-restitution__listdef-value",children:n})]})},u=({values:i,...n})=>e.jsx("ul",{className:"af-restitution__listul",...n,children:i.map(s=>e.jsx("li",{className:"af-restitution__listul-item",children:s},s))}),N={title:"Components/Restitution",component:t,args:{classModifier:""}},c={name:"Restitution",render:({...i})=>e.jsxs(f,{...i,children:[e.jsx(b,{title:"Tarifs",subtitle:"Tout adhérent, assuré, base (sans EAC ou sans PAC)",rightTitle:e.jsxs("a",{className:"af-link af-link--hasIconLeft",href:"/#",children:[e.jsx("i",{className:"glyphicon glyphicon-pencil"}),e.jsx("span",{className:"af-link__text",children:"Modifier"})]})}),e.jsxs(_,{children:[e.jsxs(m,{title:"Base de calcul des prestations",children:[e.jsxs(r,{children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:"EURO"}),e.jsx(t,{label:"TT"}),e.jsx(t,{label:"Garanties complémentaires",classModifier:"marge",children:e.jsx(u,{values:["Vol au domicile","Vol étendu aux appareils nomades","Bris de glace","Plomberie et électricité","Jardin"]})})]}),e.jsxs(r,{classModifier:"test",children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:"EURO"}),e.jsx(t,{label:"TT"}),e.jsx(t,{label:"Garanties complémentaires",classModifier:"marge",children:e.jsx(u,{values:["Vol au domicile","Vol étendu aux appareils nomades","Bris de glace","Plomberie et électricité","Jardin"]})})]})]}),e.jsxs(m,{title:"Base de calcul des prestations",children:[e.jsxs(r,{children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:"EURO"}),e.jsx(t,{label:"TT"}),e.jsx(t,{label:"Garanties complémentaires",classModifier:"marge",children:e.jsx(u,{values:["Vol au domicile","Vol étendu aux appareils nomades","Bris de glace","Plomberie et électricité","Jardin"]})})]}),e.jsxs(r,{children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:e.jsx("span",{style:{textDecoration:"underline"},children:"EURO"})}),e.jsx(t,{label:"Garanties complémentaires",classModifier:"marge",children:e.jsx(u,{values:["Vol au domicile","Vol étendu aux appareils nomades","Bris de glace","Plomberie et électricité","Jardin"]})})]})]}),e.jsxs(m,{children:[e.jsxs(r,{title:"Base de calcul des prestations",children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:"EURO"})]}),e.jsxs(r,{title:"Base de calcul des prestations",children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:e.jsx("span",{style:{textDecoration:"underline"},children:"EURO"})})]})]})]})]})};var x,p,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Restitution",
  render: ({
    ...args
  }) => <ArticleRestitution {...args}>
      <HeaderRestitution title="Tarifs" subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)" rightTitle={<a className="af-link af-link--hasIconLeft" href="/#">
            <i className="glyphicon glyphicon-pencil" />
            <span className="af-link__text">Modifier</span>
          </a>} />
      <SectionRestitution>
        <SectionRestitutionRow title="Base de calcul des prestations">
          <SectionRestitutionColumn>
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">EURO</Restitution>
            <Restitution label="TT" />
            <Restitution label="Garanties complémentaires" classModifier="marge">
              <RestitutionList values={["Vol au domicile", "Vol étendu aux appareils nomades", "Bris de glace", "Plomberie et électricité", "Jardin"]} />
            </Restitution>
          </SectionRestitutionColumn>
          <SectionRestitutionColumn classModifier="test">
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">EURO</Restitution>
            <Restitution label="TT" />
            <Restitution label="Garanties complémentaires" classModifier="marge">
              <RestitutionList values={["Vol au domicile", "Vol étendu aux appareils nomades", "Bris de glace", "Plomberie et électricité", "Jardin"]} />
            </Restitution>
          </SectionRestitutionColumn>
        </SectionRestitutionRow>

        <SectionRestitutionRow title="Base de calcul des prestations">
          <SectionRestitutionColumn>
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">EURO</Restitution>
            <Restitution label="TT" />
            <Restitution label="Garanties complémentaires" classModifier="marge">
              <RestitutionList values={["Vol au domicile", "Vol étendu aux appareils nomades", "Bris de glace", "Plomberie et électricité", "Jardin"]} />
            </Restitution>
          </SectionRestitutionColumn>
          <SectionRestitutionColumn>
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">
              <span style={{
              textDecoration: "underline"
            }}>EURO</span>
            </Restitution>
            <Restitution label="Garanties complémentaires" classModifier="marge">
              <RestitutionList values={["Vol au domicile", "Vol étendu aux appareils nomades", "Bris de glace", "Plomberie et électricité", "Jardin"]} />
            </Restitution>
          </SectionRestitutionColumn>
        </SectionRestitutionRow>

        <SectionRestitutionRow>
          <SectionRestitutionColumn title="Base de calcul des prestations">
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">EURO</Restitution>
          </SectionRestitutionColumn>
          <SectionRestitutionColumn title="Base de calcul des prestations">
            <Restitution label="TA">99,99 %</Restitution>
            <Restitution label="EURO">
              <span style={{
              textDecoration: "underline"
            }}>EURO</span>
            </Restitution>
          </SectionRestitutionColumn>
        </SectionRestitutionRow>
      </SectionRestitution>
    </ArticleRestitution>
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const T=["Default"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:c,__namedExportsOrder:T,default:N},Symbol.toStringTag,{value:"Module"}));export{c as D,U as R};
