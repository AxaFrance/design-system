import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{t as r,x as i}from"./client-D92F0iso.js";var a=e((()=>{})),o,s,c=e((()=>{o=n(),s=({title:e})=>(0,o.jsxs)(`div`,{className:`box-card`,children:[(0,o.jsx)(`h3`,{children:e}),(0,o.jsx)(`p`,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus dolor ratione, ab natus reprehenderit itaque corporis officia ad necessitatibus enim et voluptatem reiciendis rem optio laudantium iure esse vero.`})]}),s.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{title:{required:!0,tsType:{name:`string`},description:``}}}})),l,u,d,f=e((()=>{l=n(),u=12,d=()=>[...Array(u).keys()].map(e=>{let t=e+1,n=u-t+1;return[...Array(n).keys()].map(e=>(0,l.jsx)(`div`,{className:`box box-offset box-offset-${t}-${e+1}`},crypto.randomUUID()))})})),p=t({Wireframe:()=>g,__namedExportsOrder:()=>_,default:()=>h}),m,h,g,_,v=e((()=>{r(),a(),c(),f(),m=n(),h={title:`Fondations/Grid System`,parameters:{layout:`fullscreen`}},g={name:`Example Grid with wireframes`,render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{isCheckedByDefault:!0}),(0,m.jsxs)(`main`,{className:`grid`,children:[(0,m.jsx)(`h1`,{className:`box`,children:`Bonjour, Samuel G.`}),(0,m.jsxs)(`div`,{className:`box box-example-1 subgrid`,children:[(0,m.jsx)(`h2`,{className:`box`,children:`Mes contrats`}),[...[,,,,,,].keys()].map((e,t)=>(0,m.jsx)(s,{title:`contrat-${t+1}`},crypto.randomUUID()))]}),(0,m.jsxs)(`div`,{className:`box box-example-2 subgrid`,children:[(0,m.jsx)(`h2`,{className:`box`,children:`Profil`}),(0,m.jsx)(s,{title:`Mes coordonnées`})]}),(0,m.jsxs)(`div`,{className:`box box-example-3 subgrid`,children:[(0,m.jsx)(`h2`,{className:`box`,children:`Mes Infos`}),(0,m.jsx)(`div`,{className:`box box-half`}),(0,m.jsx)(`div`,{className:`box box-half`}),(0,m.jsx)(`div`,{className:`box box-half`}),(0,m.jsx)(`div`,{className:`box box-half`})]}),(0,m.jsxs)(`div`,{className:`box box-custom`,children:[(0,m.jsx)(`h2`,{className:`box`,children:`Custom`}),(0,m.jsx)(`div`,{className:`box box-content1`,children:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore. Ipsum commodi molestiae aut consectetur corrupti sed quos iste, nemo porro dicta necessitatibus aliquam! Ratione magni quae necessitatibus similique eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore. Ipsum commodi molestiae aut consectetur corrupti sed quos iste, nemo porro dicta necessitatibus aliquam! Ratione magni quae necessitatibus similique eos!`}),(0,m.jsx)(`div`,{className:`box box-content2`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis.`}),(0,m.jsx)(`footer`,{children:`@copyright`})]}),(0,m.jsx)(d,{})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Wireframe`]}));v();export{g as Wireframe,_ as __namedExportsOrder,h as default,v as n,p as t};