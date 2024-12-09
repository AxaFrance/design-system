const p={args:{children:"",className:"af-info-user",name:"Pierre Martin",profile:"profile",title:"Voir mon profil"},argTypes:{onClick:{action:"onClick"}},render:e=>{const n=document.createElement("div");return n.innerHTML=`
        <div class="${e.className}">
            ${e.href?`
                <a class="${e.className}__link" href=${e.href} title="${e.title}" onclick="${e.onClick()}" >
                    <span class="${e.className}__name">
                        ${e.name}
                    </span>
                    <span class="${e.className}__profile">
                        [${e.profile}]
                    </span>
                </a>
              `:`
                <span class="${e.className}__name">
                    ${e.name}
                </span>
                <span class="${e.className}__profile">
                    [${e.profile}]
                </span>
              `}
            ${e.children}
        </div>
    `,n},title:"Components/Header/User"},s={args:{href:"/#"}},a={};var r,o,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    href: "/#"
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,t,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const m=["UserWithLink","UserWithoutLink"];export{s as UserWithLink,a as UserWithoutLink,m as __namedExportsOrder,p as default};
