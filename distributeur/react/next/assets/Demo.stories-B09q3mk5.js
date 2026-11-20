import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,r as i}from"./iframe-d4SpaTwX.js";import{$n as a,An as o,B as s,Et as c,H as l,Ht as u,I as d,It as f,J as p,Jt as m,K as h,Kt as g,Ln as _,Pt as v,Q as y,Qt as b,St as x,W as S,Wt as C,X as w,et as T,nn as E,nt as D,qt as O,t as k,wt as A}from"./distributeur-BYqDcZB-.js";var j,M,N,P,F;function I(){return(I=e((()=>{g(),k(),j=t(),r(),M=n(),N=i.type().meta({title:`Layout/Demo Page`,parameters:{options:{withAnchorNavBar:!0}},argTypes:{withAnchorNavBar:{control:`boolean`,description:`Whether to display the anchor navigation bar`,defaultValue:!1}},tags:[`!autodocs`]}),P=N.story({name:`Demo`,render:({withAnchorNavBar:e})=>{let[t,n]=(0,j.useState)(`edited`),[r,i]=(0,j.useState)({}),g={"text-input":`Default text`,"text-disabled":`Disabled default`,"text-error":`Error default`,password:`secret`,comments:`Default comment`,"select-example":`2`,accept:[`yes`],delivery:`std`};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(u,{children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(c,{alt:``,img:O,onClick:()=>{},title:`Demo application`,subtitle:`Demonstrating our layout`}),(0,M.jsx)(v,{infos:[{definition:`0123456789 - NOM`,word:`Customer :`},{definition:`000123456789`,word:`Wallet:`},{definition:`New business`,word:`Status :`}]}),(0,M.jsx)(A,{name:`Jean Agent`,profile:`AGA`})]})}),(0,M.jsx)(f,{title:`Demo page`,anchorNavBarItems:e?[{name:`Accueil`,link:`#accueil`,isActive:!0},{name:`À Propos`,link:`#apropos`},{name:`Services`,link:`/services`,externalLink:!0},{name:`Contact`,link:`#contact`}]:void 0}),(0,M.jsxs)(s,{children:[(0,M.jsx)(l,{id:`step-risk`,title:`Risk analysis`,number:1,mode:`active`}),(0,M.jsx)(l,{id:`step-price`,title:`Offers`,number:2,mode:`disabled`}),(0,M.jsx)(l,{id:`step-contract`,title:`Contract information`,number:3,mode:`disabled`}),(0,M.jsx)(l,{id:`step-confirmation`,title:`Confirmation`,mode:`disabled`})]}),(0,M.jsxs)(x,{children:[(0,M.jsxs)(D,{className:`lg`,children:[(0,M.jsx)(T,{title:`Policy details`,subtitle:`Contract n° 000123456789`,rightTitle:`Based on last update: 12/03/2024`}),(0,M.jsx)(p,{children:(0,M.jsxs)(S,{title:`Client information`,children:[(0,M.jsxs)(h,{children:[(0,M.jsx)(y,{label:`Adress`,children:`168 High Holborn, London WC1V 7AA, UK`}),(0,M.jsx)(y,{label:`Job`,children:`Alchemist`}),(0,M.jsx)(y,{label:`Beverages`,className:`marge`,children:(0,M.jsx)(w,{values:[`Hoppiness manager`,`Tea maker`,`Coffee brewer`,`Juice extractor`]})})]}),(0,M.jsxs)(h,{className:`test`,children:[(0,M.jsx)(y,{label:`Favorite color`,children:`Blue`}),(0,M.jsx)(y,{label:`Favorite movie`,children:`The Lord of the Rings`}),(0,M.jsx)(y,{label:`Favorite series`,children:`Game of Thrones`})]})]})})]}),(0,M.jsx)(d,{form:(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=e.currentTarget,r=new FormData(t),a={};for(let[e,t]of r.entries())Object.prototype.hasOwnProperty.call(a,e)?Array.isArray(a[e])?a[e].push(t):a[e]=[a[e],t]:a[e]=t;Object.keys(g).forEach(e=>{a[e]===void 0&&(a[e]=g[e])}),i(a),n(`validated`)},children:[(0,M.jsx)(b,{label:`Text input`,name:`text-input`,placeholder:`Type here`,defaultValue:g[`text-input`]}),(0,M.jsx)(b,{label:`Text input (disabled)`,name:`text-disabled`,disabled:!0,defaultValue:g[`text-disabled`]}),(0,M.jsx)(b,{label:`Text input (error)`,name:`text-error`,message:`This field has an error`,className:`error`,defaultValue:g[`text-error`]}),(0,M.jsx)(b,{label:`Password`,name:`password`,placeholder:`••••••`,defaultValue:g.password}),(0,M.jsx)(m,{label:`Comments`,name:`comments`,placeholder:`Write a comment`,defaultValue:g.comments}),(0,M.jsx)(E,{label:`Choose option`,name:`select-example`,options:[{label:`One`,value:`1`},{label:`Two`,value:`2`}],defaultValue:g[`select-example`]}),(0,M.jsx)(_,{label:`Accept terms`,name:`accept`,options:[{label:`I accept`,value:`yes`}],values:g.accept}),(0,M.jsx)(o,{label:`Delivery`,name:`delivery`,options:[{label:`Standard`,value:`std`},{label:`Express`,value:`exp`}],value:g.delivery}),(0,M.jsx)(a,{type:`submit`,variant:`validated`,children:`Submit`})]}),title:`Client information`,stepMode:t,onEdit:()=>{n(`edited`)},restitution:(0,M.jsx)(D,{children:(0,M.jsx)(p,{children:(0,M.jsxs)(S,{children:[(0,M.jsxs)(h,{children:[(0,M.jsx)(y,{label:`Text input`,children:r[`text-input`]}),(0,M.jsx)(y,{label:`Comments`,children:r.comments}),(0,M.jsx)(y,{label:`Choose option`,children:r[`select-example`]})]}),(0,M.jsxs)(h,{children:[(0,M.jsx)(y,{label:`Accept terms`,children:Array.isArray(r.accept)?r.accept.join(`, `):String(r.accept)}),(0,M.jsx)(y,{label:`Delivery`,children:r.delivery})]})]})})})})]}),(0,M.jsx)(C,{children:`© AXA 2040 - All rights reserved`})]})}}),F=[`DemoStory`],P.input.parameters={...P.input.parameters,docs:{...P.input.parameters?.docs,source:{originalSource:`meta.story({
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
          <ArticleRestitution className="lg">
            <HeaderRestitution title="Policy details" subtitle="Contract n° 000123456789" rightTitle="Based on last update: 12/03/2024" />
            <SectionRestitution>
              <SectionRestitutionRow title="Client information">
                <SectionRestitutionColumn>
                  <Restitution label="Adress">
                    168 High Holborn, London WC1V 7AA, UK
                  </Restitution>
                  <Restitution label="Job">Alchemist</Restitution>
                  <Restitution label="Beverages" className="marge">
                    <RestitutionList values={["Hoppiness manager", "Tea maker", "Coffee brewer", "Juice extractor"]} />
                  </Restitution>
                </SectionRestitutionColumn>
                <SectionRestitutionColumn className="test">
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
                <TextInput label="Text input (error)" name="text-error" message="This field has an error" className="error" defaultValue={defaultValues["text-error"]} />

                <TextInput label="Password" name="password" placeholder="••••••" defaultValue={defaultValues.password} />

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
})`,...P.input.parameters?.docs?.source}}}})))()}I();export{P as DemoStory,F as __namedExportsOrder,N as default};