import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as _}from"./distributeur-DTTLZb8p.js";import{s as C}from"./save-Dn7C8GKk.js";import{h as j}from"./home-BuLaEOyh.js";import{f as I}from"./index-VGPHIPc6.js";import{r as T}from"./index-ZnYipkzV.js";import{H as S}from"./HeaderTitle-D5QFhiMz.js";import{p as l}from"./CardData-HcEAgEId.js";const y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24.75%200-42.37-17.63Q201-155.25%20201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0%2024-18%2042t-42%2018H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166%200h60v-399h-60v399ZM261-750v570-570Z'/%3e%3c/svg%3e",H="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M140-160q-24%200-42-18t-18-42v-520q0-24%2018-42t42-18h680q24%200%2042%2018t18%2042v520q0%2024-18%2042t-42%2018H140Zm340-302L140-685v465h680v-465L480-462Zm0-60%20336-218H145l335%20218ZM140-685v-55%20520-465Z'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M561-240%20320-481l241-241%2043%2043-198%20198%20198%20198-43%2043Z'/%3e%3c/svg%3e",B=["sticky","fixed"],E={args:{className:"af-title-bar",isSticky:!0,subtitle:"Info complémentaire",title:"Toolkit Axa",toggleMenu:I()},argTypes:{toggleMenu:{action:"onToggle"},classModifier:{options:B,control:{type:"select"},defaultValue:"sticky"}},component:S,title:"Components/Header/HeaderTitle"},k=[{id:"001",icon:y,title:"Supprimer"},{id:"002",icon:H,title:"Envoyer"},{id:"003",icon:C,title:"Enregistrer"}],Z=[{id:"001",icon:j,title:"Accueil"},{id:"002",icon:M,title:"Retour"}],s={},i={args:{contentRight:e.jsx("div",{className:"af-title-bar__actions",children:k.map(({icon:t,id:n,title:a})=>e.jsx("a",{href:"/#",role:"button",title:a,className:"btn af-btn--circle",children:e.jsx(l,{src:t})},n))})}},r={args:{contentLeft:e.jsx("div",{className:"af-title-bar__actions",children:Z.map(({icon:t,id:n,title:a})=>e.jsx("a",{href:"/#",role:"button",title:a,className:"btn  af-btn--circle",children:e.jsx(l,{src:t})},n))}),children:e.jsx(_,{classModifier:"success",children:" Statut OK "}),contentRight:e.jsx("div",{className:"af-title-bar__actions",children:k.map(({icon:t,id:n,title:a})=>e.jsx("a",{href:"/#",role:"button",title:a,className:"btn af-btn--circle",children:e.jsx(l,{src:t})},n))})}},c={render:({anchorNavBarItems:t,...n})=>{const[a,w]=T.useState("Accueil");return e.jsx(S,{...n,anchorNavBarItems:t==null?void 0:t.map(o=>({...o,isActive:o.name===a,onClick:()=>w(o.name)}))})},args:{anchorNavBarItems:[{name:"Accueil",link:"#accueil",isActive:!0},{name:"À Propos",link:"#apropos"},{name:"Services",link:"/services",externalLink:!0},{name:"Contact",link:"#contact"},{name:"Exemple de lien personnalisé",render:({className:t})=>e.jsx("a",{href:"#exemple",className:t,children:"Exemple de lien personnalisé"})}]}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var v,h,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,f,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,A,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const L=["DefaultTitle","ComplexTitle","ComplexTitleWithContentAndChildren","HeaderTitleWithAnchorNavBar"],F=Object.freeze(Object.defineProperty({__proto__:null,ComplexTitle:i,ComplexTitleWithContentAndChildren:r,DefaultTitle:s,HeaderTitleWithAnchorNavBar:c,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{i as C,s as D,F as H,r as a,c as b};
