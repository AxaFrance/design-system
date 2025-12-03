import{j as e}from"./index-C-iqcyhV.js";import"./ClickIconApollo-DAzyCCdM.js";import"./index-ZnYipkzV.js";import{D as l}from"./DebugGridLF-CLhH3uLO.js";const o=({title:s})=>e.jsxs("div",{className:"box-card",children:[e.jsx("h3",{children:s}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus dolor ratione, ab natus reprehenderit itaque corporis officia ad necessitatibus enim et voluptatem reiciendis rem optio laudantium iure esse vero."})]});o.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""}}};const t=12,d=()=>[...Array(t).keys()].map(s=>{const a=s+1,u=t-a+1;return[...Array(u).keys()].map(c=>e.jsx("div",{className:`box box-offset box-offset-${a}-${c+1}`},crypto.randomUUID()))}),p={title:"Fondations/Grid System",parameters:{layout:"fullscreen"}},i={name:"Example Grid with wireframes",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isCheckedByDefault:!0}),e.jsxs("main",{className:"grid",children:[e.jsx("h1",{className:"box",children:"Bonjour, Samuel G."}),e.jsxs("div",{className:"box box-example-1 subgrid",children:[e.jsx("h2",{className:"box",children:"Mes contrats"}),[...Array(6).keys()].map((s,a)=>e.jsx(o,{title:`contrat-${a+1}`},crypto.randomUUID()))]}),e.jsxs("div",{className:"box box-example-2 subgrid",children:[e.jsx("h2",{className:"box",children:"Profil"}),e.jsx(o,{title:"Mes coordonnées"})]}),e.jsxs("div",{className:"box box-example-3 subgrid",children:[e.jsx("h2",{className:"box",children:"Mes Infos"}),e.jsx("div",{className:"box box-half"}),e.jsx("div",{className:"box box-half"}),e.jsx("div",{className:"box box-half"}),e.jsx("div",{className:"box box-half"})]}),e.jsxs("div",{className:"box box-custom",children:[e.jsx("h2",{className:"box",children:"Custom"}),e.jsx("div",{className:"box box-content1",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore. Ipsum commodi molestiae aut consectetur corrupti sed quos iste, nemo porro dicta necessitatibus aliquam! Ratione magni quae necessitatibus similique eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore. Ipsum commodi molestiae aut consectetur corrupti sed quos iste, nemo porro dicta necessitatibus aliquam! Ratione magni quae necessitatibus similique eos!"}),e.jsx("div",{className:"box box-content2",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis."}),e.jsx("footer",{children:"@copyright"})]}),e.jsx(d,{})]})]})};var n,m,r;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example Grid with wireframes",
  render: () => <>
      <DebugGrid isCheckedByDefault />
      <main className="grid">
        <h1 className="box">Bonjour, Samuel G.</h1>
        <div className="box box-example-1 subgrid">
          <h2 className="box">Mes contrats</h2>
          {[...Array(6).keys()].map((_, index) => <Card key={crypto.randomUUID()} title={\`contrat-\${index + 1}\`} />)}
        </div>
        <div className="box box-example-2 subgrid">
          <h2 className="box">Profil</h2>
          <Card title="Mes coordonnées" />
        </div>
        <div className="box box-example-3 subgrid">
          <h2 className="box">Mes Infos</h2>
          <div className="box box-half" />
          <div className="box box-half" />
          <div className="box box-half" />
          <div className="box box-half" />
        </div>

        <div className="box box-custom">
          <h2 className="box">Custom</h2>
          <div className="box box-content1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
            dolore. Ipsum commodi molestiae aut consectetur corrupti sed quos
            iste, nemo porro dicta necessitatibus aliquam! Ratione magni quae
            necessitatibus similique eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quos, dolore. Ipsum commodi molestiae
            aut consectetur corrupti sed quos iste, nemo porro dicta
            necessitatibus aliquam! Ratione magni quae necessitatibus similique
            eos!
          </div>
          <div className="box box-content2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam,
            aliquid itaque magni sint natus earum praesentium minima. Laborum
            enim error animi similique delectus vel. Ipsa deleniti ut ipsam
            quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem nam, aliquid itaque magni sint natus earum praesentium
            minima. Laborum enim error animi similique delectus vel. Ipsa
            deleniti ut ipsam quis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum
            praesentium minima. Laborum enim error animi similique delectus vel.
            Ipsa deleniti ut ipsam quis.
          </div>
          <footer>@copyright</footer>
        </div>
        <Offsets />
      </main>
    </>
}`,...(r=(m=i.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const x=["Wireframe"],g=Object.freeze(Object.defineProperty({__proto__:null,Wireframe:i,__namedExportsOrder:x,default:p},Symbol.toStringTag,{value:"Module"}));export{g as G,i as W};
