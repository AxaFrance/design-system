import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{m as n,s as r,u as i,w as a}from"./iframe-De-9TtK1.js";import{t as o}from"./mdx-react-shim-BooHXHLT.js";import{Default as s,n as c,t as l}from"./Restitution.stories-1P9okz6J.js";function u(e){let n={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h2,{id:`restitution`,children:`Restitution`}),`
`,(0,f.jsxs)(n.p,{children:[`The Restitution components are a group of related components that are used to
display recapitulative data. The main component is `,(0,f.jsx)(n.code,{children:`ArticleRestitution`}),` which is
a container for the other components.`]}),`
`,(0,f.jsxs)(n.p,{children:[`Then inside the `,(0,f.jsx)(n.code,{children:`ArticleRestitution`}),` you can have a `,(0,f.jsx)(n.code,{children:`HeaderRestitution`}),` which is
the header of the restitution. The `,(0,f.jsx)(n.code,{children:`HeaderRestitution`}),` can have a `,(0,f.jsx)(n.code,{children:`title`}),`, a
`,(0,f.jsx)(n.code,{children:`subtitle`}),` and a `,(0,f.jsx)(n.code,{children:`rightTitle`}),` which is a link to edit the restitution.`]}),`
`,(0,f.jsxs)(n.p,{children:[`Then you can have a `,(0,f.jsx)(n.code,{children:`SectionRestitution`}),` which is a container for the
`,(0,f.jsx)(n.code,{children:`SectionRestitutionRow`}),` or `,(0,f.jsx)(n.code,{children:`SectionRestitutionColumn`}),`. These last two can
include each other depending on the layout you want. Finally you can have a
`,(0,f.jsx)(n.code,{children:`Restitution`}),` which is a label and a value, and a `,(0,f.jsx)(n.code,{children:`RestitutionList`}),` which is a
list of values.`]}),`
`,(0,f.jsx)(n.h3,{id:`import`,children:`Import`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionRow,
  SectionRestitutionColumn,
  Restitution,
  RestitutionList,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,f.jsx)(n.h3,{id:`use`,children:`Use`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`const RightTitle = () => (
  <a
    className="af-link af-link--hasIconLeft"
    href="/#"
    onClick={(e) => {
      console.log(e);
    }}
  >
    <i className="glyphicon glyphicon-pencil" />
    <span className="af-link__text">Modifier</span>
  </a>
);

export const Restititution = () => (
  <ArticleRestitution classModifier="lg">
    <HeaderRestitution
      title="Tarifs"
      subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
      rightTitle={<RightTitle />}
    />
    <SectionRestitution>
      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn classModifier="test">
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
      </SectionRestitutionRow>

      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">
            <span style={{ textDecoration: "underline" }}>EURO</span>
          </Restitution>
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
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
            <span style={{ textDecoration: "underline" }}>EURO</span>
          </Restitution>
        </SectionRestitutionColumn>
      </SectionRestitutionRow>
    </SectionRestitution>
  </ArticleRestitution>
);
`})}),`
`,(0,f.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,f.jsx)(r,{of:s})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=a(),o(),n(),c()}))();export{d as default};