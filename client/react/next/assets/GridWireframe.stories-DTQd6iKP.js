import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{X as r,t as i}from"./client-2r8I_y7l.js";var a,o;function s(){return(s=e((()=>{a=n(),o=({title:e})=>(0,a.jsxs)(`div`,{className:`box-card`,children:[(0,a.jsx)(`h3`,{children:e}),(0,a.jsx)(`p`,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus dolor ratione, ab natus reprehenderit itaque corporis officia ad necessitatibus enim et voluptatem reiciendis rem optio laudantium iure esse vero.`})]}),o.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{title:{required:!0,tsType:{name:`string`},description:``}}}})))()}var c,l,u;function d(){return(d=e((()=>{c=n(),l=12,u=()=>[...Array(l).keys()].map(e=>{let t=e+1,n=l-t+1;return[...Array(n).keys()].map(e=>(0,c.jsx)(`div`,{className:`box box-offset box-offset-${t}-${e+1}`},crypto.randomUUID()))})})))()}var f=t({Wireframe:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{i(),s(),d(),p=n(),m={title:`Fondations/Grid System`,parameters:{layout:`fullscreen`}},h={name:`Example Grid with wireframes`,render:()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{isCheckedByDefault:!0}),(0,p.jsxs)(`main`,{className:`grid`,children:[(0,p.jsx)(`h1`,{className:`box`,children:`Bonjour, Samuel G.`}),(0,p.jsxs)(`div`,{className:`box box-example-1 subgrid`,children:[(0,p.jsx)(`h2`,{className:`box`,children:`Mes contrats`}),[...[,,,,,,].keys()].map((e,t)=>(0,p.jsx)(o,{title:`contrat-${t+1}`},crypto.randomUUID()))]}),(0,p.jsxs)(`div`,{className:`box box-example-2 subgrid`,children:[(0,p.jsx)(`h2`,{className:`box`,children:`Profil`}),(0,p.jsx)(o,{title:`Mes coordonnées`})]}),(0,p.jsxs)(`div`,{className:`box box-example-3 subgrid`,children:[(0,p.jsx)(`h2`,{className:`box`,children:`Mes Infos`}),(0,p.jsx)(`div`,{className:`box box-half`}),(0,p.jsx)(`div`,{className:`box box-half`}),(0,p.jsx)(`div`,{className:`box box-half`}),(0,p.jsx)(`div`,{className:`box box-half`})]}),(0,p.jsxs)(`div`,{className:`box box-custom`,children:[(0,p.jsx)(`h2`,{className:`box`,children:`Custom`}),(0,p.jsx)(`div`,{className:`box box-content1`,children:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore. Ipsum commodi molestiae aut consectetur corrupti sed quos iste, nemo porro dicta necessitatibus aliquam! Ratione magni quae necessitatibus similique eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore. Ipsum commodi molestiae aut consectetur corrupti sed quos iste, nemo porro dicta necessitatibus aliquam! Ratione magni quae necessitatibus similique eos!`}),(0,p.jsx)(`div`,{className:`box box-content2`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam, aliquid itaque magni sint natus earum praesentium minima. Laborum enim error animi similique delectus vel. Ipsa deleniti ut ipsam quis.`}),(0,p.jsx)(`footer`,{children:`@copyright`})]}),(0,p.jsx)(u,{})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Wireframe`]})))()}export{h as n,_ as r,f as t};