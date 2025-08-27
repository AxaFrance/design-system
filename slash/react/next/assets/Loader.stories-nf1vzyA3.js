import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{o as h,u as f,l as x,M as j,B as y}from"./CardData-DL7aZVqJ.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";const T=r=>{switch(r){case"get":return"Chargement en cours";case"post":return"Sauvegarde en cours";case"delete":return"Suppression en cours";case"update":return"Mise à jour en cours";case"error":return"Une erreur est survenue lors du chargement du composant";default:return""}},m=({className:r,text:s,children:u,classModifier:p,mode:a="none"})=>{const t=h(r,p,"af-loader"),o=s||T(a),g=a!=="none",l=a==="error";return e.jsxs("div",{className:t,children:[u,g?e.jsx("div",{className:`${t} af-loader-on`,children:e.jsxs("div",{className:"af-spinner",role:"alert","aria-live":"assertive","aria-busy":!l,"aria-label":o,children:[!l&&e.jsx("div",{className:"af-spinner__animation"}),e.jsx("div",{className:"af-spinner__caption",children:o})]})}):null]})},b={component:m,title:"Components/Loader",parameters:{layout:"fullscreen"}},n={name:"Loader",render:({children:r,...s})=>e.jsx(m,{...s,children:r}),args:{mode:"get",text:"",children:e.jsxs("form",{style:{height:"100vh",padding:"3rem"},children:[e.jsx(f,{children:"A form asking for your name"}),e.jsx(x,{label:"name",message:"error",messageType:j.error}),e.jsx(y,{children:"Send"})]})},argTypes:{children:{table:{disable:!0}}}};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Loader",
  render: ({
    children: text,
    ...args
  }) => <Loader {...args}>{text}</Loader>,
  args: {
    mode: "get",
    text: "",
    children: <form style={{
      height: "100vh",
      padding: "3rem"
    }}>
        <Title>A form asking for your name</Title>
        <TextInput label="name" message="error" messageType={MessageTypes.error} />
        <Button>Send</Button>
      </form>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const v=["Default"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{n as D,M as L};
