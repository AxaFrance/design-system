import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{F as n,P as r,t as i}from"./client-DKDZiWM3.js";import{bt as a}from"./LoaderCommon-CNPQWS5E.js";import{n as o,t as s}from"./home-BVjJ4IaT.js";var c,l=e((()=>{c=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M372-523q-42-42-42-108t42-108q42-42%20108-42t108%2042q42%2042%2042%20108t-42%20108q-42%2042-108%2042t-108-42ZM160-160v-94q0-38%2019-65t49-41q67-30%20128.5-45T480-420q62%200%20123%2015.5T731-360q31%2014%2050%2041t19%2065v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57%200-111%2011.5T252-306q-14%207-23%2021.5t-9%2030.5v34Zm324.5-346.5Q570-592%20570-631t-25.5-64.5Q519-721%20480-721t-64.5%2025.5Q390-670%20390-631t25.5%2064.5Q441-541%20480-541t64.5-25.5ZM480-631Zm0%20411Z'/%3e%3c/svg%3e`})),u,d,f,p,m;e((()=>{i(),o(),l(),u=t(),d={title:`Components/Fieldset`,component:n,argTypes:{title:{control:`text`,description:`Titre affiché dans la légende du fieldset`},iconProps:{control:`object`,description:`Props de l'icône à afficher`},className:{control:`text`,description:`Classes CSS additionnelles`}}},f={name:`With radios`,render:e=>(0,u.jsxs)(n,{...e,children:[(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,u.jsx)(a,{id:`gender-male`,name:`gender`,value:`male`}),(0,u.jsx)(`label`,{htmlFor:`gender-male`,children:`Homme`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,u.jsx)(a,{id:`gender-female`,name:`gender`,value:`female`}),(0,u.jsx)(`label`,{htmlFor:`gender-female`,children:`Femme`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,u.jsx)(a,{id:`gender-other`,name:`gender`,value:`other`}),(0,u.jsx)(`label`,{htmlFor:`gender-other`,children:`Autre`})]})]}),args:{title:`Genre`,iconProps:{src:c}}},p={name:`With checkboxes`,render:e=>(0,u.jsxs)(n,{...e,children:[(0,u.jsx)(r,{label:`Newsletter`,name:`newsletter`,value:`newsletter`}),(0,u.jsx)(r,{label:`Offres promotionnelles`,name:`promotions`,value:`promotions`}),(0,u.jsx)(r,{label:`Notifications SMS`,name:`sms`,value:`sms`})]}),args:{title:`Préférences de communication`,iconProps:{src:s}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`WithRadios`,`WithCheckboxes`]}))();export{p as WithCheckboxes,f as WithRadios,m as __namedExportsOrder,d as default};