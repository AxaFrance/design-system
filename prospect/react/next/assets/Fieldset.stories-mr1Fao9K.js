import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{Cn as n,Dt as r,Et as i,Ht as a,mn as o,t as s}from"./prospect-DBIK3mU0.js";import{n as c,t as l}from"./home-DWtwG4Lc.js";var u,d,f,p,m;function h(){return(h=e((()=>{s(),c(),i(),u=t(),d={title:`Components/Fieldset`,component:n,argTypes:{title:{control:`text`,description:`Titre affiché dans la légende du fieldset`},iconProps:{control:`object`,description:`Props de l'icône à afficher`},className:{control:`text`,description:`Classes CSS additionnelles`}}},f={name:`With radio buttons`,render:e=>(0,u.jsxs)(n,{...e,children:[(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,u.jsx)(a,{id:`gender-male`,name:`gender`,value:`male`}),(0,u.jsx)(`label`,{htmlFor:`gender-male`,children:`Homme`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,u.jsx)(a,{id:`gender-female`,name:`gender`,value:`female`}),(0,u.jsx)(`label`,{htmlFor:`gender-female`,children:`Femme`})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,u.jsx)(a,{id:`gender-other`,name:`gender`,value:`other`}),(0,u.jsx)(`label`,{htmlFor:`gender-other`,children:`Autre`})]})]}),args:{title:`Genre`,iconProps:{src:r}}},p={name:`With checkboxes`,render:e=>(0,u.jsxs)(n,{...e,children:[(0,u.jsx)(o,{label:`Newsletter`,name:`newsletter`,value:`newsletter`}),(0,u.jsx)(o,{label:`Offres promotionnelles`,name:`promotions`,value:`promotions`}),(0,u.jsx)(o,{label:`Notifications SMS`,name:`sms`,value:`sms`})]}),args:{title:`Préférences de communication`,iconProps:{src:l}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`WithRadios`,`WithCheckboxes`]})))()}h();export{p as WithCheckboxes,f as WithRadios,m as __namedExportsOrder,d as default};