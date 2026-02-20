import{j as e}from"./index-C-iqcyhV.js";import{g as b,I as C,R as r,b as a}from"./FieldsetLF-fOvmfdj4.js";import"./index-ZnYipkzV.js";import{C as j}from"./CardCommon-DuAUMPxy.js";import{C as q}from"./ContentItemMonoCore-D9FKs_2U.js";import{h as F}from"./home-BuLaEOyh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";const I=({children:n,title:h,iconProps:l,className:x,IconComponent:f,CardComponent:v})=>{const u=l&&e.jsx(f,{"aria-hidden":"true",...l});return e.jsxs(v,{as:"fieldset",className:b({baseClassName:"af-fieldset",className:x}),children:[e.jsx(q,{as:"legend",title:h,leftComponent:u}),e.jsx("div",{className:"af-fieldset__content",children:n})]})},o=n=>e.jsx(I,{...n,IconComponent:C,CardComponent:j}),T="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-481q-66%200-108-42t-42-108q0-66%2042-108t108-42q66%200%20108%2042t42%20108q0%2066-42%20108t-108%2042ZM160-160v-94q0-38%2019-65t49-41q67-30%20128.5-45T480-420q62%200%20123%2015.5t127.92%2044.69q31.3%2014.13%2050.19%2040.97Q800-292%20800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57%200-111%2011.5T252-306q-14%207-23%2021.5t-9%2030.5v34Zm260-321q39%200%2064.5-25.5T570-631q0-39-25.5-64.5T480-721q-39%200-64.5%2025.5T390-631q0%2039%2025.5%2064.5T480-541Zm0-90Zm0%20411Z'/%3e%3c/svg%3e",Z={title:"Components/Fieldset",component:o,argTypes:{title:{control:"text",description:"Titre affiché dans la légende du fieldset"},iconProps:{control:"object",description:"Props de l'icône à afficher"},className:{control:"text",description:"Classes CSS additionnelles"}}},s={name:"With radios",render:n=>e.jsxs(o,{...n,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{id:"gender-male",name:"gender",value:"male"}),e.jsx("label",{htmlFor:"gender-male",children:"Homme"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{id:"gender-female",name:"gender",value:"female"}),e.jsx("label",{htmlFor:"gender-female",children:"Femme"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(r,{id:"gender-other",name:"gender",value:"other"}),e.jsx("label",{htmlFor:"gender-other",children:"Autre"})]})]}),args:{title:"Genre",iconProps:{src:T}}},t={name:"With checkboxes",render:n=>e.jsxs(o,{...n,children:[e.jsx(a,{label:"Newsletter",name:"newsletter",value:"newsletter"}),e.jsx(a,{label:"Offres promotionnelles",name:"promotions",value:"promotions"}),e.jsx(a,{label:"Notifications SMS",name:"sms",value:"sms"})]}),args:{title:"Préférences de communication",iconProps:{src:F}}};var i,m,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With radios",
  render: args => <Fieldset {...args}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }}>
        <Radio id="gender-male" name="gender" value="male" />
        <label htmlFor="gender-male">Homme</label>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }}>
        <Radio id="gender-female" name="gender" value="female" />
        <label htmlFor="gender-female">Femme</label>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }}>
        <Radio id="gender-other" name="gender" value="other" />
        <label htmlFor="gender-other">Autre</label>
      </div>
    </Fieldset>,
  args: {
    title: "Genre",
    iconProps: {
      src: personIcon
    }
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "With checkboxes",
  render: args => <Fieldset {...args}>
      <CheckboxText label="Newsletter" name="newsletter" value="newsletter" />
      <CheckboxText label="Offres promotionnelles" name="promotions" value="promotions" />
      <CheckboxText label="Notifications SMS" name="sms" value="sms" />
    </Fieldset>,
  args: {
    title: "Préférences de communication",
    iconProps: {
      src: homeIcon
    }
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const M=["WithRadios","WithCheckboxes"];export{t as WithCheckboxes,s as WithRadios,M as __namedExportsOrder,Z as default};
