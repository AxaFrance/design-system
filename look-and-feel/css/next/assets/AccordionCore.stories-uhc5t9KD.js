/* empty css                      *//* empty css             */const _={title:"Components/AccordionCore"},f=({title:r,content:e,isOpen:A})=>{const t=document.createElement("details");t.className="af-accordion",t.open=A;const o=document.createElement("summary");o.className="af-accordion__summary";const c=document.createElement("div");c.className="af-accordion__title-container";const d=document.createElement("p");d.textContent=r,c.appendChild(d),o.appendChild(c),t.appendChild(o);const s=document.createElement("div");return s.className="af-accordion__content",s.innerHTML=e,t.appendChild(s),t},C={title:"Titre onglet",content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,isOpen:!1},a={render:f,args:C,argTypes:{date:{control:"text"}}},n={render:r=>{const e=document.createElement("section");return e.className="af-card af-card--large af-card--accordion",e.appendChild(f(r)),e},args:C,argTypes:{date:{control:"text"}}};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: template,
  args: defaultArgs,
  argTypes: {
    date: {
      control: "text"
    }
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("section");
    container.className = "af-card af-card--large af-card--accordion";
    container.appendChild(template(args));
    return container;
  },
  args: defaultArgs,
  argTypes: {
    date: {
      control: "text"
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const v=["AccordionCore","AccordionInCard"];export{a as AccordionCore,n as AccordionInCard,v as __namedExportsOrder,_ as default};
