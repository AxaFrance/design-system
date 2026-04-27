import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{Y as t,O as u,Q as d,V as R,W as l,X as i,Z as s}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";const m={title:"Components/Restitution",component:t,args:{classModifier:""}},n={name:"Restitution",render:({...c})=>e.jsxs(u,{...c,children:[e.jsx(d,{title:"Tarifs",subtitle:"Tout adhérent, assuré, base (sans EAC ou sans PAC)",rightTitle:e.jsxs("a",{className:"af-link af-link--hasIconLeft",href:"/#",children:[e.jsx("i",{className:"glyphicon glyphicon-pencil"}),e.jsx("span",{className:"af-link__text",children:"Modifier"})]})}),e.jsxs(R,{children:[e.jsxs(l,{title:"Base de calcul des prestations",children:[e.jsxs(i,{children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:"EURO"}),e.jsx(t,{label:"TT"}),e.jsx(t,{label:"Garanties complémentaires",classModifier:"marge",children:e.jsx(s,{values:["Vol au domicile","Vol étendu aux appareils nomades","Bris de glace","Plomberie et électricité","Jardin"]})})]}),e.jsxs(i,{classModifier:"test",children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:"EURO"}),e.jsx(t,{label:"TT"}),e.jsx(t,{label:"Garanties complémentaires",classModifier:"marge",children:e.jsx(s,{values:["Vol au domicile","Vol étendu aux appareils nomades","Bris de glace","Plomberie et électricité","Jardin"]})})]})]}),e.jsxs(l,{title:"Base de calcul des prestations",children:[e.jsxs(i,{children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:"EURO"}),e.jsx(t,{label:"TT"}),e.jsx(t,{label:"Garanties complémentaires",classModifier:"marge",children:e.jsx(s,{values:["Vol au domicile","Vol étendu aux appareils nomades","Bris de glace","Plomberie et électricité","Jardin"]})})]}),e.jsxs(i,{children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:e.jsx("span",{style:{textDecoration:"underline"},children:"EURO"})}),e.jsx(t,{label:"Garanties complémentaires",classModifier:"marge",children:e.jsx(s,{values:["Vol au domicile","Vol étendu aux appareils nomades","Bris de glace","Plomberie et électricité","Jardin"]})})]})]}),e.jsxs(l,{children:[e.jsxs(i,{title:"Base de calcul des prestations",children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:"EURO"})]}),e.jsxs(i,{title:"Base de calcul des prestations",children:[e.jsx(t,{label:"TA",children:"99,99 %"}),e.jsx(t,{label:"EURO",children:e.jsx("span",{style:{textDecoration:"underline"},children:"EURO"})})]})]})]})]})};var a,o,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const p=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{n as D,f as R};
