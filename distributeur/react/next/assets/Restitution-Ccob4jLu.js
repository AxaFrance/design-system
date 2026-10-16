import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o}from"./iframe-CUw-2XJG.js";import{n as s,r as c,t as l}from"./Restitution.stories-B0WekJ1y.js";function u(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`restitution`,children:`Restitution`}),`
`,(0,f.jsxs)(t.p,{children:[`The Restitution components are a group of related components that are used to
display recapitulative data. The main component is `,(0,f.jsx)(t.code,{children:`ArticleRestitution`}),` which is
a container for the other components.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Then inside the `,(0,f.jsx)(t.code,{children:`ArticleRestitution`}),` you can have a `,(0,f.jsx)(t.code,{children:`HeaderRestitution`}),` which is
the header of the restitution. The `,(0,f.jsx)(t.code,{children:`HeaderRestitution`}),` can have a `,(0,f.jsx)(t.code,{children:`title`}),`, a
`,(0,f.jsx)(t.code,{children:`subtitle`}),` and a `,(0,f.jsx)(t.code,{children:`rightTitle`}),` which is a link to edit the restitution.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Then you can have a `,(0,f.jsx)(t.code,{children:`SectionRestitution`}),` which is a container for the
`,(0,f.jsx)(t.code,{children:`SectionRestitutionRow`}),` or `,(0,f.jsx)(t.code,{children:`SectionRestitutionColumn`}),`. These last two can
include each other depending on the layout you want. Finally you can have a
`,(0,f.jsx)(t.code,{children:`Restitution`}),` which is a label and a value, and a `,(0,f.jsx)(t.code,{children:`RestitutionList`}),` which is a
list of values.`]}),`
`,(0,f.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionRow,
  SectionRestitutionColumn,
  Restitution,
  RestitutionList,
} from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,f.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`const RightTitle = () => (
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
  <ArticleRestitution className="af-restitution--lg">
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
          <Restitution
            label="Garanties complémentaires"
            className="af-restitution__listdef--marge"
          >
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
        <SectionRestitutionColumn className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xl-6--test">
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution
            label="Garanties complémentaires"
            className="af-restitution__listdef--marge"
          >
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
          <Restitution
            label="Garanties complémentaires"
            className="af-restitution__listdef--marge"
          >
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
          <Restitution
            label="Garanties complémentaires"
            className="af-restitution__listdef--marge"
          >
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
`,(0,f.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,f.jsx)(r,{of:l})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),a(),o(),c()})))()}p();export{d as default};