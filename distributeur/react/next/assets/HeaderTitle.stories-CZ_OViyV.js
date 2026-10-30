import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BL8mseS1.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./iframe-CjUrzS1v.js";import{Mt as o,t as s,w as c}from"./distributeur-BzQs3Sl2.js";import{c as l}from"./CardButton-Cj2InLTg.js";import{n as u,t as d}from"./home-DWtwG4Lc.js";import{n as f,t as p}from"./save-CEK2F57z.js";var m;function h(){return(h=e((()=>{m=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M561-240%20320-481l241-241%2043%2043-198%20198%20198%20198-43%2043Z'/%3e%3c/svg%3e`})))()}var g;function _(){return(_=e((()=>{g=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24.75%200-42.37-17.63Q201-155.25%20201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0%2024-18%2042t-42%2018H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166%200h60v-399h-60v399ZM261-750v570-570Z'/%3e%3c/svg%3e`})))()}var v;function y(){return(y=e((()=>{v=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M140-160q-24%200-42-18t-18-42v-520q0-24%2018-42t42-18h680q24%200%2042%2018t18%2042v520q0%2024-18%2042t-42%2018H140Zm340-302L140-685v465h680v-465L480-462Zm0-60%20336-218H145l335%20218ZM140-685v-55%20520-465Z'/%3e%3c/svg%3e`})))()}var b=t({ComplexTitle:()=>O,ComplexTitleWithContentAndChildren:()=>k,DefaultTitle:()=>D,HeaderTitleWithAnchorNavBar:()=>A,__namedExportsOrder:()=>j,default:()=>w}),x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{s(),h(),_(),u(),y(),p(),x=n(),i(),S=r(),{fn:C}=__STORYBOOK_MODULE_TEST__,w=a.meta({args:{isSticky:!0,subtitle:`Info complémentaire`,title:`Toolkit Axa`,toggleMenu:C()},argTypes:{toggleMenu:{action:`onToggle`}},component:o,title:`Components/Header/HeaderTitle`}),T=[{id:`001`,icon:g,title:`Supprimer`},{id:`002`,icon:v,title:`Envoyer`},{id:`003`,icon:f,title:`Enregistrer`}],E=[{id:`001`,icon:d,title:`Accueil`},{id:`002`,icon:m,title:`Retour`}],D=w.story(),O=w.story({args:{contentRight:(0,S.jsx)(`div`,{className:`af-title-bar__actions`,children:T.map(({icon:e,id:t,title:n})=>(0,S.jsx)(`a`,{href:`/#`,role:`button`,title:n,className:`btn af-btn--circle`,children:(0,S.jsx)(l,{src:e})},t))})}}),k=w.story({args:{contentLeft:(0,S.jsx)(`div`,{className:`af-title-bar__actions`,children:E.map(({icon:e,id:t,title:n})=>(0,S.jsx)(`a`,{href:`/#`,role:`button`,title:n,className:`btn  af-btn--circle`,children:(0,S.jsx)(l,{src:e})},t))}),children:(0,S.jsx)(c,{variant:`success`,children:` Statut OK `}),contentRight:(0,S.jsx)(`div`,{className:`af-title-bar__actions`,children:T.map(({icon:e,id:t,title:n})=>(0,S.jsx)(`a`,{href:`/#`,role:`button`,title:n,className:`btn af-btn--circle`,children:(0,S.jsx)(l,{src:e})},t))})}}),A=w.story({render:({anchorNavBarItems:e,...t})=>{let[n,r]=(0,x.useState)(`Accueil`);return(0,S.jsx)(o,{...t,anchorNavBarItems:e?.map(e=>({...e,isActive:e.name===n,onClick:()=>r(e.name)}))})},args:{anchorNavBarItems:[{name:`Accueil`,link:`#accueil`,isActive:!0},{name:`À Propos`,link:`#apropos`},{name:`Services`,link:`/services`,externalLink:!0},{name:`Contact`,link:`#contact`},{name:`Exemple de lien personnalisé`,render:({className:e})=>(0,S.jsx)(`a`,{href:`#exemple`,className:e,children:`Exemple de lien personnalisé`})}]}}),D.input.parameters={...D.input.parameters,docs:{...D.input.parameters?.docs,source:{originalSource:`meta.story()`,...D.input.parameters?.docs?.source}}},O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    contentRight: <div className="af-title-bar__actions">
        {actions.map(({
        icon,
        id,
        title
      }: ComponentProps<typeof Action>) => <a key={id} href="/#" role="button" title={title} className="btn af-btn--circle">
            <Svg src={icon} />
          </a>)}
      </div>
  }
})`,...O.input.parameters?.docs?.source}}},k.input.parameters={...k.input.parameters,docs:{...k.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    contentLeft: <div className="af-title-bar__actions">
        {leftActions.map(({
        icon,
        id,
        title
      }: ComponentProps<typeof Action>) => <a key={id} href="/#" role="button" title={title} className="btn  af-btn--circle">
              <Svg src={icon} />
            </a>)}
      </div>,
    children: <Tag variant="success"> Statut OK </Tag>,
    contentRight: <div className="af-title-bar__actions">
        {actions.map(({
        icon,
        id,
        title
      }: ComponentProps<typeof Action>) => <a key={id} href="/#" role="button" title={title} className="btn af-btn--circle">
            <Svg src={icon} />
          </a>)}
      </div>
  }
})`,...k.input.parameters?.docs?.source}}},A.input.parameters={...A.input.parameters,docs:{...A.input.parameters?.docs,source:{originalSource:`meta.story({
  render: ({
    anchorNavBarItems,
    ...args
  }) => {
    const [activeItem, setActiveItem] = useState("Accueil");
    return <HeaderTitle {...args} anchorNavBarItems={anchorNavBarItems?.map(item => ({
      ...item,
      isActive: item.name === activeItem,
      onClick: () => setActiveItem(item.name)
    }))} />;
  },
  args: {
    anchorNavBarItems: [{
      name: "Accueil",
      link: "#accueil",
      isActive: true
    }, {
      name: "À Propos",
      link: "#apropos"
    }, {
      name: "Services",
      link: "/services",
      externalLink: true
    }, {
      name: "Contact",
      link: "#contact"
    }, {
      name: "Exemple de lien personnalisé",
      render: ({
        className
      }: {
        className: string;
      }) => <a href="#exemple" className={className}>
            Exemple de lien personnalisé
          </a>
    }]
  }
})`,...A.input.parameters?.docs?.source}}},j=[`DefaultTitle`,`ComplexTitle`,`ComplexTitleWithContentAndChildren`,`HeaderTitleWithAnchorNavBar`]})))()}export{b as a,A as i,k as n,M as o,D as r,O as t};