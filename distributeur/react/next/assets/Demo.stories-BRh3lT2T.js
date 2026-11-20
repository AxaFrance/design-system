import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,r as i}from"./iframe-CsQbE6mv.js";import{$n as a,An as o,B as s,H as c,Ht as l,I as u,It as d,J as f,Jt as p,K as m,Kt as h,Ln as g,Ot as _,Q as v,Qt as y,Rt as b,St as x,W as S,Wt as C,X as w,et as T,nn as E,nt as D,qt as O,t as k,wt as A}from"./distributeur-BUY4t5VO.js";var j,M,N,P,F;function I(){return(I=e((()=>{h(),k(),j=t(),r(),M=n(),N=i.type().meta({title:`Layout/Demo Page`,parameters:{options:{withAnchorNavBar:!0}},argTypes:{withAnchorNavBar:{control:`boolean`,description:`Whether to display the anchor navigation bar`,defaultValue:!1}},tags:[`!autodocs`]}),P=N.story({name:`Demo`,render:({withAnchorNavBar:e})=>{let[t,n]=(0,j.useState)(`edited`),[r,i]=(0,j.useState)({}),h={"text-input":`Default text`,"text-disabled":`Disabled default`,"text-error":`Error default`,password:`secret`,comments:`Default comment`,"select-example":`2`,accept:[`yes`],delivery:`std`};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l,{children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(_,{alt:``,img:O,onClick:()=>{},title:`Demo application`,subtitle:`Demonstrating our layout`}),(0,M.jsx)(d,{infos:[{definition:`0123456789 - NOM`,word:`Customer :`},{definition:`000123456789`,word:`Wallet:`},{definition:`New business`,word:`Status :`}]}),(0,M.jsx)(A,{name:`Jean Agent`,profile:`AGA`})]})}),(0,M.jsx)(b,{title:`Demo page`,anchorNavBarItems:e?[{name:`Accueil`,link:`#accueil`,isActive:!0},{name:`À Propos`,link:`#apropos`},{name:`Services`,link:`/services`,externalLink:!0},{name:`Contact`,link:`#contact`}]:void 0}),(0,M.jsxs)(s,{children:[(0,M.jsx)(c,{id:`step-risk`,title:`Risk analysis`,number:1,mode:`active`}),(0,M.jsx)(c,{id:`step-price`,title:`Offers`,number:2,mode:`disabled`}),(0,M.jsx)(c,{id:`step-contract`,title:`Contract information`,number:3,mode:`disabled`}),(0,M.jsx)(c,{id:`step-confirmation`,title:`Confirmation`,mode:`disabled`})]}),(0,M.jsxs)(x,{children:[(0,M.jsxs)(D,{className:`lg`,children:[(0,M.jsx)(T,{title:`Policy details`,subtitle:`Contract n° 000123456789`,rightTitle:`Based on last update: 12/03/2024`}),(0,M.jsx)(f,{children:(0,M.jsxs)(S,{title:`Client information`,children:[(0,M.jsxs)(m,{children:[(0,M.jsx)(v,{label:`Adress`,children:`168 High Holborn, London WC1V 7AA, UK`}),(0,M.jsx)(v,{label:`Job`,children:`Alchemist`}),(0,M.jsx)(v,{label:`Beverages`,className:`marge`,children:(0,M.jsx)(w,{values:[`Hoppiness manager`,`Tea maker`,`Coffee brewer`,`Juice extractor`]})})]}),(0,M.jsxs)(m,{className:`test`,children:[(0,M.jsx)(v,{label:`Favorite color`,children:`Blue`}),(0,M.jsx)(v,{label:`Favorite movie`,children:`The Lord of the Rings`}),(0,M.jsx)(v,{label:`Favorite series`,children:`Game of Thrones`})]})]})})]}),(0,M.jsx)(u,{form:(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=e.currentTarget,r=new FormData(t),a={};for(let[e,t]of r.entries())Object.prototype.hasOwnProperty.call(a,e)?Array.isArray(a[e])?a[e].push(t):a[e]=[a[e],t]:a[e]=t;Object.keys(h).forEach(e=>{a[e]===void 0&&(a[e]=h[e])}),i(a),n(`validated`)},children:[(0,M.jsx)(y,{label:`Text input`,name:`text-input`,placeholder:`Type here`,defaultValue:h[`text-input`]}),(0,M.jsx)(y,{label:`Text input (disabled)`,name:`text-disabled`,disabled:!0,defaultValue:h[`text-disabled`]}),(0,M.jsx)(y,{label:`Text input (error)`,name:`text-error`,message:`This field has an error`,className:`error`,defaultValue:h[`text-error`]}),(0,M.jsx)(y,{label:`Password`,name:`password`,placeholder:`••••••`,defaultValue:h.password}),(0,M.jsx)(p,{label:`Comments`,name:`comments`,placeholder:`Write a comment`,defaultValue:h.comments}),(0,M.jsx)(E,{label:`Choose option`,name:`select-example`,options:[{label:`One`,value:`1`},{label:`Two`,value:`2`}],defaultValue:h[`select-example`]}),(0,M.jsx)(g,{label:`Accept terms`,name:`accept`,options:[{label:`I accept`,value:`yes`}],values:h.accept}),(0,M.jsx)(o,{label:`Delivery`,name:`delivery`,options:[{label:`Standard`,value:`std`},{label:`Express`,value:`exp`}],value:h.delivery}),(0,M.jsx)(a,{type:`submit`,variant:`validated`,children:`Submit`})]}),title:`Client information`,stepMode:t,onEdit:()=>{n(`edited`)},restitution:(0,M.jsx)(D,{children:(0,M.jsx)(f,{children:(0,M.jsxs)(S,{children:[(0,M.jsxs)(m,{children:[(0,M.jsx)(v,{label:`Text input`,children:r[`text-input`]}),(0,M.jsx)(v,{label:`Comments`,children:r.comments}),(0,M.jsx)(v,{label:`Choose option`,children:r[`select-example`]})]}),(0,M.jsxs)(m,{children:[(0,M.jsx)(v,{label:`Accept terms`,children:Array.isArray(r.accept)?r.accept.join(`, `):String(r.accept)}),(0,M.jsx)(v,{label:`Delivery`,children:r.delivery})]})]})})})})]}),(0,M.jsx)(C,{children:`© AXA 2040 - All rights reserved`})]})}}),F=[`DemoStory`],P.input.parameters={...P.input.parameters,docs:{...P.input.parameters?.docs,source:{originalSource:`meta.story({
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