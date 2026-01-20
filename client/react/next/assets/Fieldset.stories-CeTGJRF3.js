import{j as e}from"./index-C-iqcyhV.js";import{g as O,I as z,r as n,R as p,b as d}from"./FieldsetLF-BHfV-a9y.js";import"./index-ZnYipkzV.js";import{D as G}from"./DropdownLF-CkkyplFS.js";import{C as J}from"./CardCommon-G4I_jes9.js";import{C as Q}from"./ContentItemMonoCore-CvLSPxTC.js";import{h as Z}from"./home-BuLaEOyh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";const K=({children:a,title:A,iconProps:u,className:E,IconComponent:H,CardComponent:B})=>{const _=u&&e.jsx(H,{"aria-hidden":"true",...u});return e.jsxs(B,{as:"fieldset",className:O({baseClassName:"af-fieldset",className:E}),children:[e.jsx(Q,{as:"legend",title:A,leftComponent:_}),e.jsx("div",{className:"af-fieldset__content",children:a})]})},s=a=>e.jsx(K,{...a,IconComponent:z,CardComponent:J}),x="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-481q-66%200-108-42t-42-108q0-66%2042-108t108-42q66%200%20108%2042t42%20108q0%2066-42%20108t-108%2042ZM160-160v-94q0-38%2019-65t49-41q67-30%20128.5-45T480-420q62%200%20123%2015.5t127.92%2044.69q31.3%2014.13%2050.19%2040.97Q800-292%20800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57%200-111%2011.5T252-306q-14%207-23%2021.5t-9%2030.5v34Zm260-321q39%200%2064.5-25.5T570-631q0-39-25.5-64.5T480-721q-39%200-64.5%2025.5T390-631q0%2039%2025.5%2064.5T480-541Zm0-90Zm0%20411Z'/%3e%3c/svg%3e",k="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M880-740v520q0%2024-18%2042t-42%2018H140q-24%200-42-18t-18-42v-520q0-24%2018-42t42-18h680q24%200%2042%2018t18%2042ZM140-631h680v-109H140v109Zm0%20129v282h680v-282H140Zm0%20282v-520%20520Z'/%3e%3c/svg%3e",re={title:"Components/Fieldset",component:s,argTypes:{title:{control:"text",description:"Titre affiché dans la légende du fieldset"},icon:{control:"text",description:"Icône à afficher (déprécié, utiliser iconProps)",table:{category:"Deprecated"}},iconProps:{control:"object",description:"Props de l'icône à afficher"},className:{control:"text",description:"Classes CSS additionnelles"}}},r={name:"Default",render:a=>e.jsxs(s,{...a,children:[e.jsx(n,{label:"Prénom",name:"firstname"}),e.jsx(n,{label:"Nom",name:"lastname"})]}),args:{title:"Informations personnelles"}},t={name:"With icon",render:a=>e.jsxs(s,{...a,children:[e.jsx(n,{label:"Prénom",name:"firstname"}),e.jsx(n,{label:"Nom",name:"lastname"}),e.jsx(n,{label:"Email",name:"email",type:"email"})]}),args:{title:"Informations personnelles",iconProps:{src:x}}},l={name:"With radios",render:a=>e.jsxs(s,{...a,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(p,{id:"gender-male",name:"gender",value:"male"}),e.jsx("label",{htmlFor:"gender-male",children:"Homme"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(p,{id:"gender-female",name:"gender",value:"female"}),e.jsx("label",{htmlFor:"gender-female",children:"Femme"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(p,{id:"gender-other",name:"gender",value:"other"}),e.jsx("label",{htmlFor:"gender-other",children:"Autre"})]})]}),args:{title:"Genre",iconProps:{src:x}}},o={name:"With checkboxes",render:a=>e.jsxs(s,{...a,children:[e.jsx(d,{label:"Newsletter",name:"newsletter",value:"newsletter"}),e.jsx(d,{label:"Offres promotionnelles",name:"promotions",value:"promotions"}),e.jsx(d,{label:"Notifications SMS",name:"sms",value:"sms"})]}),args:{title:"Préférences de communication",iconProps:{src:Z}}},i={name:"Payment form",render:a=>e.jsxs(s,{...a,children:[e.jsx(n,{label:"Numéro de carte",name:"cardNumber"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{label:"Date d'expiration",name:"expiry"}),e.jsx(n,{label:"CVV",name:"cvv"})]}),e.jsx(n,{label:"Nom sur la carte",name:"cardName"})]}),args:{title:"Informations de paiement",iconProps:{src:k}}},m={name:"Multiple fieldsets",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs(s,{title:"Informations personnelles",iconProps:{src:x},children:[e.jsx(n,{label:"Prénom",name:"firstname"}),e.jsx(n,{label:"Nom",name:"lastname"}),e.jsx(n,{label:"Email",name:"email",type:"email"})]}),e.jsxs(s,{title:"Adresse",iconProps:{src:Z},children:[e.jsx(n,{label:"Rue",name:"street"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{label:"Code postal",name:"zipcode"}),e.jsx(n,{label:"Ville",name:"city"})]}),e.jsxs(G,{label:"Pays",name:"country",placeholder:"Sélectionner un pays",children:[e.jsx("option",{value:"fr",children:"France"}),e.jsx("option",{value:"be",children:"Belgique"}),e.jsx("option",{value:"ch",children:"Suisse"})]})]}),e.jsxs(s,{title:"Paiement",iconProps:{src:k},children:[e.jsx(n,{label:"Numéro de carte",name:"cardNumber"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{label:"Date d'expiration",name:"expiry"}),e.jsx(n,{label:"CVV",name:"cvv"})]})]})]})},c={name:"Without icon",render:a=>e.jsxs(s,{...a,children:[e.jsx(n,{label:"Commentaire",name:"comment"}),e.jsx(d,{label:"J'accepte les conditions générales",name:"terms",value:"terms"})]}),args:{title:"Autres informations"}};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Default",
  render: args => <Fieldset {...args}>
      <InputText label="Prénom" name="firstname" />
      <InputText label="Nom" name="lastname" />
    </Fieldset>,
  args: {
    title: "Informations personnelles"
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,v,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "With icon",
  render: args => <Fieldset {...args}>
      <InputText label="Prénom" name="firstname" />
      <InputText label="Nom" name="lastname" />
      <InputText label="Email" name="email" type="email" />
    </Fieldset>,
  args: {
    title: "Informations personnelles",
    iconProps: {
      src: personIcon
    }
  }
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,y,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var F,T,P;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var N,q,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Payment form",
  render: args => <Fieldset {...args}>
      <InputText label="Numéro de carte" name="cardNumber" />
      <div style={{
      display: "flex",
      gap: "1rem"
    }}>
        <InputText label="Date d'expiration" name="expiry" />
        <InputText label="CVV" name="cvv" />
      </div>
      <InputText label="Nom sur la carte" name="cardName" />
    </Fieldset>,
  args: {
    title: "Informations de paiement",
    iconProps: {
      src: creditCardIcon
    }
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var S,W,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Multiple fieldsets",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }}>
      <Fieldset title="Informations personnelles" iconProps={{
      src: personIcon
    }}>
        <InputText label="Prénom" name="firstname" />
        <InputText label="Nom" name="lastname" />
        <InputText label="Email" name="email" type="email" />
      </Fieldset>

      <Fieldset title="Adresse" iconProps={{
      src: homeIcon
    }}>
        <InputText label="Rue" name="street" />
        <div style={{
        display: "flex",
        gap: "1rem"
      }}>
          <InputText label="Code postal" name="zipcode" />
          <InputText label="Ville" name="city" />
        </div>
        <Dropdown label="Pays" name="country" placeholder="Sélectionner un pays">
          <option value="fr">France</option>
          <option value="be">Belgique</option>
          <option value="ch">Suisse</option>
        </Dropdown>
      </Fieldset>

      <Fieldset title="Paiement" iconProps={{
      src: creditCardIcon
    }}>
        <InputText label="Numéro de carte" name="cardNumber" />
        <div style={{
        display: "flex",
        gap: "1rem"
      }}>
          <InputText label="Date d'expiration" name="expiry" />
          <InputText label="CVV" name="cvv" />
        </div>
      </Fieldset>
    </div>
}`,...(D=(W=m.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var M,R,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Without icon",
  render: args => <Fieldset {...args}>
      <InputText label="Commentaire" name="comment" />
      <CheckboxText label="J'accepte les conditions générales" name="terms" value="terms" />
    </Fieldset>,
  args: {
    title: "Autres informations"
  }
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const te=["Default","WithIcon","WithRadios","WithCheckboxes","PaymentForm","MultipleFieldsets","WithoutIcon"];export{r as Default,m as MultipleFieldsets,i as PaymentForm,o as WithCheckboxes,t as WithIcon,l as WithRadios,c as WithoutIcon,te as __namedExportsOrder,re as default};
