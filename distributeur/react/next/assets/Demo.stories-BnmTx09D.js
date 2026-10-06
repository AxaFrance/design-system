import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,n as r,t as i,w as a}from"./iframe-PYnMZM5z.js";import{B as o,C as s,D as c,E as l,G as u,J as d,Ot as f,Q as p,R as m,S as h,T as g,W as _,X as v,Y as y,Z as b,_ as x,b as S,bt as C,et as w,gt as T,nt as E,t as D,w as O,x as k,y as A,z as j}from"./distributeur-BiOr3XFa.js";var M,N,P,F,I;t((()=>{v(),D(),M=e(n(),1),i(),N=a(),P=r.type().meta({title:`Layout/Demo Page`,parameters:{options:{withAnchorNavBar:!0}},argTypes:{withAnchorNavBar:{control:`boolean`,description:`Whether to display the anchor navigation bar`,defaultValue:!1}},tags:[`!autodocs`]}),F=P.story({name:`Demo`,render:({withAnchorNavBar:e})=>{let[t,n]=(0,M.useState)(`edited`),[r,i]=(0,M.useState)({}),a={"text-input":`Default text`,"text-disabled":`Disabled default`,"text-error":`Error default`,password:`secret`,comments:`Default comment`,"select-example":`2`,accept:[`yes`],delivery:`std`};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d,{children:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(o,{alt:``,img:b,onClick:()=>{},title:`Demo application`,subtitle:`Demonstrating our layout`}),(0,N.jsx)(_,{infos:[{definition:`0123456789 - NOM`,word:`Customer :`},{definition:`000123456789`,word:`Wallet:`},{definition:`New business`,word:`Status :`}]}),(0,N.jsx)(j,{name:`Jean Agent`,profile:`AGA`})]})}),(0,N.jsx)(u,{title:`Demo page`,anchorNavBarItems:e?[{name:`Accueil`,link:`#accueil`,isActive:!0},{name:`À Propos`,link:`#apropos`},{name:`Services`,link:`/services`,externalLink:!0},{name:`Contact`,link:`#contact`}]:void 0}),(0,N.jsxs)(A,{children:[(0,N.jsx)(S,{id:`step-risk`,title:`Risk analysis`,number:1,mode:`active`}),(0,N.jsx)(S,{id:`step-price`,title:`Offers`,number:2,mode:`disabled`}),(0,N.jsx)(S,{id:`step-contract`,title:`Contract information`,number:3,mode:`disabled`}),(0,N.jsx)(S,{id:`step-confirmation`,title:`Confirmation`,mode:`disabled`})]}),(0,N.jsxs)(m,{children:[(0,N.jsxs)(c,{className:`lg`,children:[(0,N.jsx)(l,{title:`Policy details`,subtitle:`Contract n° 000123456789`,rightTitle:`Based on last update: 12/03/2024`}),(0,N.jsx)(s,{children:(0,N.jsxs)(k,{title:`Client information`,children:[(0,N.jsxs)(h,{children:[(0,N.jsx)(g,{label:`Adress`,children:`168 High Holborn, London WC1V 7AA, UK`}),(0,N.jsx)(g,{label:`Job`,children:`Alchemist`}),(0,N.jsx)(g,{label:`Beverages`,className:`marge`,children:(0,N.jsx)(O,{values:[`Hoppiness manager`,`Tea maker`,`Coffee brewer`,`Juice extractor`]})})]}),(0,N.jsxs)(h,{className:`test`,children:[(0,N.jsx)(g,{label:`Favorite color`,children:`Blue`}),(0,N.jsx)(g,{label:`Favorite movie`,children:`The Lord of the Rings`}),(0,N.jsx)(g,{label:`Favorite series`,children:`Game of Thrones`})]})]})})]}),(0,N.jsx)(x,{form:(0,N.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=e.currentTarget,r=new FormData(t),o={};for(let[e,t]of r.entries())Object.prototype.hasOwnProperty.call(o,e)?Array.isArray(o[e])?o[e].push(t):o[e]=[o[e],t]:o[e]=t;Object.keys(a).forEach(e=>{o[e]===void 0&&(o[e]=a[e])}),i(o),n(`validated`)},children:[(0,N.jsx)(w,{label:`Text input`,name:`text-input`,placeholder:`Type here`,defaultValue:a[`text-input`]}),(0,N.jsx)(w,{label:`Text input (disabled)`,name:`text-disabled`,disabled:!0,defaultValue:a[`text-disabled`]}),(0,N.jsx)(w,{label:`Text input (error)`,name:`text-error`,message:`This field has an error`,className:`error`,defaultValue:a[`text-error`]}),(0,N.jsx)(w,{label:`Password`,name:`password`,placeholder:`••••••`,defaultValue:a.password}),(0,N.jsx)(p,{label:`Comments`,name:`comments`,placeholder:`Write a comment`,defaultValue:a.comments}),(0,N.jsx)(E,{label:`Choose option`,name:`select-example`,options:[{label:`One`,value:`1`},{label:`Two`,value:`2`}],defaultValue:a[`select-example`]}),(0,N.jsx)(C,{label:`Accept terms`,name:`accept`,options:[{label:`I accept`,value:`yes`}],values:a.accept}),(0,N.jsx)(T,{label:`Delivery`,name:`delivery`,options:[{label:`Standard`,value:`std`},{label:`Express`,value:`exp`}],value:a.delivery}),(0,N.jsx)(f,{type:`submit`,variant:`validated`,children:`Submit`})]}),title:`Client information`,stepMode:t,onEdit:()=>{n(`edited`)},restitution:(0,N.jsx)(c,{children:(0,N.jsx)(s,{children:(0,N.jsxs)(k,{children:[(0,N.jsxs)(h,{children:[(0,N.jsx)(g,{label:`Text input`,children:r[`text-input`]}),(0,N.jsx)(g,{label:`Comments`,children:r.comments}),(0,N.jsx)(g,{label:`Choose option`,children:r[`select-example`]})]}),(0,N.jsxs)(h,{children:[(0,N.jsx)(g,{label:`Accept terms`,children:Array.isArray(r.accept)?r.accept.join(`, `):String(r.accept)}),(0,N.jsx)(g,{label:`Delivery`,children:r.delivery})]})]})})})})]}),(0,N.jsx)(y,{children:`© AXA 2040 - All rights reserved`})]})}}),F.input.parameters={...F.input.parameters,docs:{...F.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...F.input.parameters?.docs?.source}}},I=[`DemoStory`]}))();export{F as DemoStory,I as __namedExportsOrder,P as default};