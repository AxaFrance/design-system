import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{O as r,n as i,t as a,w as o}from"./iframe-B6pS4pdr.js";import{R as s,n as c,t as l}from"./distributeur-DmtDXCQS.js";import{a as u}from"./getClassName-CR6lB2oi.js";import{n as d,t as f}from"./home-DwhFuQ-p.js";import{n as p,t as m}from"./save-KJo_R0Gr.js";var h,g=t((()=>{h=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M561-240%20320-481l241-241%2043%2043-198%20198%20198%20198-43%2043Z'/%3e%3c/svg%3e`})),_,v=t((()=>{_=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24.75%200-42.37-17.63Q201-155.25%20201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0%2024-18%2042t-42%2018H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166%200h60v-399h-60v399ZM261-750v570-570Z'/%3e%3c/svg%3e`})),y,b=t((()=>{y=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M140-160q-24%200-42-18t-18-42v-520q0-24%2018-42t42-18h680q24%200%2042%2018t18%2042v520q0%2024-18%2042t-42%2018H140Zm340-302L140-685v465h680v-465L480-462Zm0-60%20336-218H145l335%20218ZM140-685v-55%20520-465Z'/%3e%3c/svg%3e`})),x=n({ComplexTitle:()=>k,ComplexTitleWithContentAndChildren:()=>A,DefaultTitle:()=>O,HeaderTitleWithAnchorNavBar:()=>j,__namedExportsOrder:()=>M,default:()=>T}),S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{c(),g(),v(),d(),b(),m(),S=e(r(),1),a(),C=o(),{fn:w}=__STORYBOOK_MODULE_TEST__,T=i.meta({args:{className:`af-title-bar`,isSticky:!0,subtitle:`Info complémentaire`,title:`Toolkit Axa`,toggleMenu:w()},argTypes:{toggleMenu:{action:`onToggle`},classModifier:{options:[`sticky`,`fixed`],control:{type:`select`},defaultValue:`sticky`}},component:s,title:`Components/Header/HeaderTitle`}),E=[{id:`001`,icon:_,title:`Supprimer`},{id:`002`,icon:y,title:`Envoyer`},{id:`003`,icon:p,title:`Enregistrer`}],D=[{id:`001`,icon:f,title:`Accueil`},{id:`002`,icon:h,title:`Retour`}],O=T.story(),k=T.story({args:{contentRight:(0,C.jsx)(`div`,{className:`af-title-bar__actions`,children:E.map(({icon:e,id:t,title:n})=>(0,C.jsx)(`a`,{href:`/#`,role:`button`,title:n,className:`btn af-btn--circle`,children:(0,C.jsx)(u,{src:e})},t))})}}),A=T.story({args:{contentLeft:(0,C.jsx)(`div`,{className:`af-title-bar__actions`,children:D.map(({icon:e,id:t,title:n})=>(0,C.jsx)(`a`,{href:`/#`,role:`button`,title:n,className:`btn  af-btn--circle`,children:(0,C.jsx)(u,{src:e})},t))}),children:(0,C.jsx)(l,{classModifier:`success`,children:` Statut OK `}),contentRight:(0,C.jsx)(`div`,{className:`af-title-bar__actions`,children:E.map(({icon:e,id:t,title:n})=>(0,C.jsx)(`a`,{href:`/#`,role:`button`,title:n,className:`btn af-btn--circle`,children:(0,C.jsx)(u,{src:e})},t))})}}),j=T.story({render:({anchorNavBarItems:e,...t})=>{let[n,r]=(0,S.useState)(`Accueil`);return(0,C.jsx)(s,{...t,anchorNavBarItems:e?.map(e=>({...e,isActive:e.name===n,onClick:()=>r(e.name)}))})},args:{anchorNavBarItems:[{name:`Accueil`,link:`#accueil`,isActive:!0},{name:`À Propos`,link:`#apropos`},{name:`Services`,link:`/services`,externalLink:!0},{name:`Contact`,link:`#contact`},{name:`Exemple de lien personnalisé`,render:({className:e})=>(0,C.jsx)(`a`,{href:`#exemple`,className:e,children:`Exemple de lien personnalisé`})}]}}),O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{originalSource:`meta.story()`,...O.input.parameters?.docs?.source}}},k.input.parameters={...k.input.parameters,docs:{...k.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...k.input.parameters?.docs?.source}}},A.input.parameters={...A.input.parameters,docs:{...A.input.parameters?.docs,source:{originalSource:`meta.story({
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
    children: <Badge classModifier="success"> Statut OK </Badge>,
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
})`,...A.input.parameters?.docs?.source}}},j.input.parameters={...j.input.parameters,docs:{...j.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...j.input.parameters?.docs?.source}}},M=[`DefaultTitle`,`ComplexTitle`,`ComplexTitleWithContentAndChildren`,`HeaderTitleWithAnchorNavBar`]}));N();export{k as ComplexTitle,A as ComplexTitleWithContentAndChildren,O as DefaultTitle,j as HeaderTitleWithAnchorNavBar,M as __namedExportsOrder,T as default,N as n,x as t};