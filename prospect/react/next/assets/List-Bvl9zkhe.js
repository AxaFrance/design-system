import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-tv3KQEW_.js";import{i,l as a,n as o,s}from"./blocks-D74w0bgk.js";import{n as c,r as l,t as u}from"./List.stories-Dn83up8N.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:c,name:`List`}),`
`,(0,p.jsx)(t.h1,{id:`list`,children:`List`}),`
`,(0,p.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,p.jsx)(t.p,{children:`To use the List component import it like that:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import {
  ClickItem,
  ContentItemMono,
  List,
  Svg,
} from "@axa-fr/canopee-react/prospect";
import trashIcon from "@material-symbols/svg-400/outlined/delete.svg";
import publishedWithChangesIcon from "@material-symbols/svg-400/outlined/published_with_changes-fill.svg";

const MyComponent = () => (
  <List>
    <ContentItemMono secondaryText="nom.prénom@mail.fr">
      Prénom NOM
    </ContentItemMono>
    <ClickItem icon={<Svg src={publishedWithChangesIcon} />}>
      Modifier le profil
    </ClickItem>
    <ClickItem icon={<Svg src={trashIcon} />}>Supprimer le profil</ClickItem>
  </List>
);
`})}),`
`,(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(i,{of:u})]})}function f(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),n(),a(),l()})))()}m();export{f as default};