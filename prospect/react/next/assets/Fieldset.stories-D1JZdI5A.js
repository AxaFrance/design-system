import{j as e}from"./index-C-iqcyhV.js";import{g as E,d as H,u as n,R as d,f as c}from"./FieldsetApollo-CzsGY3YX.js";import"./index-ZnYipkzV.js";import{D as B}from"./DropdownApollo-CtdULZgw.js";import{C as _}from"./CardCommon-BFeHTn9T.js";import{C as O}from"./ContentItemMonoCore-CvLSPxTC.js";import{h as W}from"./home-BuLaEOyh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";const z=({children:a,title:R,iconProps:x,className:V,IconComponent:Z,CardComponent:k})=>{const A=x&&e.jsx(Z,{"aria-hidden":"true",...x});return e.jsxs(k,{as:"fieldset",className:E({baseClassName:"af-fieldset",className:V}),children:[e.jsx(O,{as:"legend",title:R,leftComponent:A}),e.jsx("div",{className:"af-fieldset__content",children:a})]})},s=a=>e.jsx(z,{...a,IconComponent:H,CardComponent:_}),p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-481q-66%200-108-42t-42-108q0-66%2042-108t108-42q66%200%20108%2042t42%20108q0%2066-42%20108t-108%2042ZM160-160v-94q0-38%2019-65t49-41q67-30%20128.5-45T480-420q62%200%20123%2015.5t127.92%2044.69q31.3%2014.13%2050.19%2040.97Q800-292%20800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57%200-111%2011.5T252-306q-14%207-23%2021.5t-9%2030.5v34Zm260-321q39%200%2064.5-25.5T570-631q0-39-25.5-64.5T480-721q-39%200-64.5%2025.5T390-631q0%2039%2025.5%2064.5T480-541Zm0-90Zm0%20411Z'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M880-740v520q0%2024-18%2042t-42%2018H140q-24%200-42-18t-18-42v-520q0-24%2018-42t42-18h680q24%200%2042%2018t18%2042ZM140-631h680v-109H140v109Zm0%20129v282h680v-282H140Zm0%20282v-520%20520Z'/%3e%3c/svg%3e",ee={title:"Components/Fieldset",component:s,argTypes:{title:{control:"text",description:"Titre affiché dans la légende du fieldset"},icon:{control:"text",description:"Icône à afficher (déprécié, utiliser iconProps)",table:{category:"Deprecated"}},iconProps:{control:"object",description:"Props de l'icône à afficher"},className:{control:"text",description:"Classes CSS additionnelles"}}},t={name:"Default",render:a=>e.jsxs(s,{...a,children:[e.jsx(n,{label:"Prénom",name:"firstname"}),e.jsx(n,{label:"Nom",name:"lastname"}),e.jsx(n,{label:"Email",name:"email",type:"email"})]}),args:{title:"Informations personnelles",iconProps:{src:p}}},r={name:"With radio buttons",render:a=>e.jsxs(s,{...a,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(d,{id:"gender-male",name:"gender",value:"male"}),e.jsx("label",{htmlFor:"gender-male",children:"Homme"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(d,{id:"gender-female",name:"gender",value:"female"}),e.jsx("label",{htmlFor:"gender-female",children:"Femme"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(d,{id:"gender-other",name:"gender",value:"other"}),e.jsx("label",{htmlFor:"gender-other",children:"Autre"})]})]}),args:{title:"Genre",iconProps:{src:p}}},l={name:"With checkboxes",render:a=>e.jsxs(s,{...a,children:[e.jsx(c,{label:"Newsletter",name:"newsletter",value:"newsletter"}),e.jsx(c,{label:"Offres promotionnelles",name:"promotions",value:"promotions"}),e.jsx(c,{label:"Notifications SMS",name:"sms",value:"sms"})]}),args:{title:"Préférences de communication",iconProps:{src:W}}},o={name:"Payment form",render:a=>e.jsxs(s,{...a,children:[e.jsx(n,{label:"Numéro de carte",name:"cardNumber"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{label:"Date d'expiration",name:"expiry"}),e.jsx(n,{label:"CVV",name:"cvv"})]}),e.jsx(n,{label:"Nom sur la carte",name:"cardName"})]}),args:{title:"Informations de paiement",iconProps:{src:M}}},i={name:"Multiples fieldsets",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs(s,{title:"Informations personnelles",iconProps:{src:p},children:[e.jsx(n,{label:"Prénom",name:"firstname"}),e.jsx(n,{label:"Nom",name:"lastname"}),e.jsx(n,{label:"Email",name:"email",type:"email"})]}),e.jsxs(s,{title:"Adresse",iconProps:{src:W},children:[e.jsx(n,{label:"Rue",name:"street"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{label:"Code postal",name:"zipcode"}),e.jsx(n,{label:"Ville",name:"city"})]}),e.jsxs(B,{label:"Pays",name:"country",placeholder:"Sélectionner un pays",children:[e.jsx("option",{value:"fr",children:"France"}),e.jsx("option",{value:"be",children:"Belgique"}),e.jsx("option",{value:"ch",children:"Suisse"})]})]}),e.jsxs(s,{title:"Paiement",iconProps:{src:M},children:[e.jsx(n,{label:"Numéro de carte",name:"cardNumber"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{label:"Date d'expiration",name:"expiry"}),e.jsx(n,{label:"CVV",name:"cvv"})]})]})]})},m={name:"Without icon",render:a=>e.jsxs(s,{...a,children:[e.jsx(n,{label:"Commentaire",name:"comment"}),e.jsx(c,{label:"J'accepte les conditions générales",name:"terms",value:"terms"})]}),args:{title:"Autres informations"}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Default",
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With radio buttons",
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var j,y,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(y=l.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var C,F,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var P,N,q;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Multiples fieldsets",
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
}`,...(q=(N=i.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var w,S,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Without icon",
  render: args => <Fieldset {...args}>
      <InputText label="Commentaire" name="comment" />
      <CheckboxText label="J'accepte les conditions générales" name="terms" value="terms" />
    </Fieldset>,
  args: {
    title: "Autres informations"
  }
}`,...(D=(S=m.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const ne=["Default","WithRadios","WithCheckboxes","PaymentForm","MultipleFieldsets","WithoutIcon"];export{t as Default,i as MultipleFieldsets,o as PaymentForm,l as WithCheckboxes,r as WithRadios,m as WithoutIcon,ne as __namedExportsOrder,ee as default};
