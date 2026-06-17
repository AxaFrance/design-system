import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,n as r,t as i,w as a}from"./iframe-CSdX1VlE.js";import{C as o,Et as s,G as c,H as l,J as u,K as d,M as f,N as p,P as m,Q as h,R as g,S as _,U as v,W as y,_ as b,b as x,et as S,g as C,m as w,mt as T,n as E,v as D,vt as O,w as k,x as A,y as j,z as M}from"./distributeur-Fvjo_0rn.js";var N,P,F,I,L;t((()=>{y(),E(),N=e(n(),1),i(),P=a(),F=r.type().meta({title:`Layout/Demo Page`,parameters:{options:{withAnchorNavBar:!0}},argTypes:{withAnchorNavBar:{control:`boolean`,description:`Whether to display the anchor navigation bar`,defaultValue:!1}},tags:[`!autodocs`]}),I=F.story({name:`Demo`,render:({withAnchorNavBar:e})=>{let[t,n]=(0,N.useState)(`edited`),[r,i]=(0,N.useState)({}),a={"text-input":`Default text`,"text-disabled":`Disabled default`,"text-error":`Error default`,password:`secret`,comments:`Default comment`,"select-example":`2`,accept:[`yes`],delivery:`std`};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{children:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m,{alt:``,img:c,onClick:()=>{},title:`Demo application`,subtitle:`Demonstrating our layout`}),(0,P.jsx)(g,{infos:[{definition:`0123456789 - NOM`,word:`Customer :`},{definition:`000123456789`,word:`Wallet:`},{definition:`New business`,word:`Status :`}]}),(0,P.jsx)(p,{name:`Jean Agent`,profile:`AGA`})]})}),(0,P.jsx)(M,{title:`Demo page`,anchorNavBarItems:e?[{name:`Accueil`,link:`#accueil`,isActive:!0},{name:`À Propos`,link:`#apropos`},{name:`Services`,link:`/services`,externalLink:!0},{name:`Contact`,link:`#contact`}]:void 0}),(0,P.jsxs)(C,{children:[(0,P.jsx)(b,{id:`step-risk`,title:`Risk analysis`,number:1,mode:`active`}),(0,P.jsx)(b,{id:`step-price`,title:`Offers`,number:2,mode:`disabled`}),(0,P.jsx)(b,{id:`step-contract`,title:`Contract information`,number:3,mode:`disabled`}),(0,P.jsx)(b,{id:`step-confirmation`,title:`Confirmation`,mode:`disabled`})]}),(0,P.jsxs)(f,{children:[(0,P.jsxs)(k,{classModifier:`lg`,children:[(0,P.jsx)(o,{title:`Policy details`,subtitle:`Contract n° 000123456789`,rightTitle:`Based on last update: 12/03/2024`}),(0,P.jsx)(x,{children:(0,P.jsxs)(D,{title:`Client information`,children:[(0,P.jsxs)(j,{children:[(0,P.jsx)(_,{label:`Adress`,children:`168 High Holborn, London WC1V 7AA, UK`}),(0,P.jsx)(_,{label:`Job`,children:`Alchemist`}),(0,P.jsx)(_,{label:`Beverages`,classModifier:`marge`,children:(0,P.jsx)(A,{values:[`Hoppiness manager`,`Tea maker`,`Coffee brewer`,`Juice extractor`]})})]}),(0,P.jsxs)(j,{classModifier:`test`,children:[(0,P.jsx)(_,{label:`Favorite color`,children:`Blue`}),(0,P.jsx)(_,{label:`Favorite movie`,children:`The Lord of the Rings`}),(0,P.jsx)(_,{label:`Favorite series`,children:`Game of Thrones`})]})]})})]}),(0,P.jsx)(w,{form:(0,P.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=e.currentTarget,r=new FormData(t),o={};for(let[e,t]of r.entries())Object.prototype.hasOwnProperty.call(o,e)?Array.isArray(o[e])?o[e].push(t):o[e]=[o[e],t]:o[e]=t;Object.keys(a).forEach(e=>{o[e]===void 0&&(o[e]=a[e])}),i(o),n(`validated`)},children:[(0,P.jsx)(u,{label:`Text input`,name:`text-input`,placeholder:`Type here`,defaultValue:a[`text-input`]}),(0,P.jsx)(u,{label:`Text input (disabled)`,name:`text-disabled`,disabled:!0,defaultValue:a[`text-disabled`]}),(0,P.jsx)(u,{label:`Text input (error)`,name:`text-error`,message:`This field has an error`,classModifier:`error`,defaultValue:a[`text-error`]}),(0,P.jsx)(S,{label:`Password`,name:`password`,placeholder:`••••••`,defaultValue:a.password}),(0,P.jsx)(d,{label:`Comments`,name:`comments`,placeholder:`Write a comment`,defaultValue:a.comments}),(0,P.jsx)(h,{label:`Choose option`,name:`select-example`,options:[{label:`One`,value:`1`},{label:`Two`,value:`2`}],defaultValue:a[`select-example`]}),(0,P.jsx)(O,{label:`Accept terms`,name:`accept`,options:[{label:`I accept`,value:`yes`}],values:a.accept}),(0,P.jsx)(T,{label:`Delivery`,name:`delivery`,options:[{label:`Standard`,value:`std`},{label:`Express`,value:`exp`}],value:a.delivery}),(0,P.jsx)(s,{type:`submit`,variant:`validated`,children:`Submit`})]}),title:`Client information`,stepMode:t,onEdit:()=>{n(`edited`)},restitution:(0,P.jsx)(k,{children:(0,P.jsx)(x,{children:(0,P.jsxs)(D,{children:[(0,P.jsxs)(j,{children:[(0,P.jsx)(_,{label:`Text input`,children:r[`text-input`]}),(0,P.jsx)(_,{label:`Comments`,children:r.comments}),(0,P.jsx)(_,{label:`Choose option`,children:r[`select-example`]})]}),(0,P.jsxs)(j,{children:[(0,P.jsx)(_,{label:`Accept terms`,children:Array.isArray(r.accept)?r.accept.join(`, `):String(r.accept)}),(0,P.jsx)(_,{label:`Delivery`,children:r.delivery})]})]})})})})]}),(0,P.jsx)(v,{children:`© AXA 2040 - All rights reserved`})]})}}),I.input.parameters={...I.input.parameters,docs:{...I.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Demo",
  render: ({
    withAnchorNavBar
  }) => {
    const [stepMode, setStepMode] = useState<"edited" | "validated" | "locked">("edited");
    const [values, setValues] = useState<Partial<DemoFormValues>>({});
    const defaultValues: DemoFormValues = {
      "text-input": "Default text",
      "text-disabled": "Disabled default",
      "text-error": "Error default",
      password: "secret",
      comments: "Default comment",
      "select-example": "2",
      accept: ["yes"],
      delivery: "std"
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);
      const obj: Partial<DemoFormValues> = {};
      for (const [k, v] of data.entries()) {
        if (Object.prototype.hasOwnProperty.call(obj, k)) {
          // @ts-expect-error: on utilise du any ici pour pas s'embeter
          if (Array.isArray(obj[k])) obj[k].push(v);
          // @ts-expect-error: on utilise du any ici pour pas s'embeter
          else obj[k] = [obj[k], v];
        } else {
          // @ts-expect-error: on utilise du any ici pour pas s'embeter
          obj[k] = v;
        }
      }

      // Merge defaults for missing keys
      Object.keys(defaultValues).forEach(k => {
        // @ts-expect-error: on utilise du any ici pour pas s'embeter
        if (obj[k] === undefined) {
          // @ts-expect-error: on utilise du any ici pour pas s'embeter
          obj[k] = defaultValues[k as keyof DemoFormValues];
        }
      });
      setValues(obj as DemoFormValues);
      setStepMode("validated");
    };
    const handleEdit = () => {
      setStepMode("edited");
    };
    return <>
        <Header>
          <>
            <Name alt="" img={logoAxa} onClick={() => {}} title="Demo application" subtitle="Demonstrating our layout" />
            <Infos infos={[{
            definition: "0123456789 - NOM",
            word: "Customer :"
          }, {
            definition: "000123456789",
            word: "Wallet:"
          }, {
            definition: "New business",
            word: "Status :"
          }]} />
            <User name="Jean Agent" profile="AGA" />
          </>
        </Header>
        <HeaderTitle title="Demo page" anchorNavBarItems={withAnchorNavBar ? [{
        name: "Accueil",
        link: "#accueil",
        isActive: true
      }, {
        name: "À Propos",
        link: "#apropos"
      }, {
        name: "Services",
        link: "/services",
        externalLink: true
      }, {
        name: "Contact",
        link: "#contact"
      }] : undefined} />
        <Steps>
          <Step id="step-risk" title="Risk analysis" number={1} mode="active" />
          <Step id="step-price" title="Offers" number={2} mode="disabled" />
          <Step id="step-contract" title="Contract information" number={3} mode="disabled" />
          <Step id="step-confirmation" title="Confirmation" mode="disabled" />
        </Steps>
        <MainContainer>
          <ArticleRestitution classModifier="lg">
            <HeaderRestitution title="Policy details" subtitle="Contract n° 000123456789" rightTitle="Based on last update: 12/03/2024" />
            <SectionRestitution>
              <SectionRestitutionRow title="Client information">
                <SectionRestitutionColumn>
                  <Restitution label="Adress">
                    168 High Holborn, London WC1V 7AA, UK
                  </Restitution>
                  <Restitution label="Job">Alchemist</Restitution>
                  <Restitution label="Beverages" classModifier="marge">
                    <RestitutionList values={["Hoppiness manager", "Tea maker", "Coffee brewer", "Juice extractor"]} />
                  </Restitution>
                </SectionRestitutionColumn>
                <SectionRestitutionColumn classModifier="test">
                  <Restitution label="Favorite color">Blue</Restitution>
                  <Restitution label="Favorite movie">
                    The Lord of the Rings
                  </Restitution>
                  <Restitution label="Favorite series">
                    Game of Thrones
                  </Restitution>
                </SectionRestitutionColumn>
              </SectionRestitutionRow>
            </SectionRestitution>
          </ArticleRestitution>

          <VerticalStep form={<form onSubmit={handleSubmit}>
                <TextInput label="Text input" name="text-input" placeholder="Type here" defaultValue={defaultValues["text-input"]} />
                <TextInput label="Text input (disabled)" name="text-disabled" disabled defaultValue={defaultValues["text-disabled"]} />
                <TextInput label="Text input (error)" name="text-error" message="This field has an error" classModifier="error" defaultValue={defaultValues["text-error"]} />

                <PassInput label="Password" name="password" placeholder="••••••" defaultValue={defaultValues.password} />

                <TextareaInput label="Comments" name="comments" placeholder="Write a comment" defaultValue={defaultValues.comments} />

                <SelectInput label="Choose option" name="select-example" options={[{
            label: "One",
            value: "1"
          }, {
            label: "Two",
            value: "2"
          }]} defaultValue={defaultValues["select-example"]} />

                <CheckboxInput label="Accept terms" name="accept" options={[{
            label: "I accept",
            value: "yes"
          }]} values={defaultValues.accept} />

                <RadioInput label="Delivery" name="delivery" options={[{
            label: "Standard",
            value: "std"
          }, {
            label: "Express",
            value: "exp"
          }]} value={defaultValues.delivery} />

                <Button type="submit" variant="validated">
                  Submit
                </Button>
              </form>} title="Client information" stepMode={stepMode} onEdit={handleEdit} restitution={<ArticleRestitution>
                <SectionRestitution>
                  <SectionRestitutionRow>
                    <SectionRestitutionColumn>
                      <Restitution label="Text input">
                        {values["text-input"]}
                      </Restitution>
                      <Restitution label="Comments">
                        {values.comments}
                      </Restitution>
                      <Restitution label="Choose option">
                        {values["select-example"]}
                      </Restitution>
                    </SectionRestitutionColumn>
                    <SectionRestitutionColumn>
                      <Restitution label="Accept terms">
                        {Array.isArray(values.accept) ? values.accept.join(", ") : String(values.accept)}
                      </Restitution>
                      <Restitution label="Delivery">
                        {values.delivery}
                      </Restitution>
                    </SectionRestitutionColumn>
                  </SectionRestitutionRow>
                </SectionRestitution>
              </ArticleRestitution>} />
        </MainContainer>
        <Footer>© AXA 2040 - All rights reserved</Footer>
      </>;
  }
})`,...I.input.parameters?.docs?.source}}},L=[`DemoStory`]}))();export{I as DemoStory,L as __namedExportsOrder,F as default};