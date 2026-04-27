import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{z as k,B as T,E as w,I as D,U as M,G as I,J as F,K as l,L as E,O as p,Q as B,V as b,W as x,X as n,Y as t,Z as H,_ as O,T as d,p as P,y as N,t as L,b as W,r as J,$ as G,a0 as U}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import{r as f}from"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";const $={title:"Layout/Demo Page",parameters:{options:{withAnchorNavBar:!0}},argTypes:{withAnchorNavBar:{control:"boolean",description:"Whether to display the anchor navigation bar",defaultValue:!1}},tags:["!autodocs"]},r={name:"Demo",render:({withAnchorNavBar:R})=>{const[S,c]=f.useState("edited"),[o,y]=f.useState({}),i={"text-input":"Default text","text-disabled":"Disabled default","text-error":"Error default",password:"secret",comments:"Default comment","select-example":"2",accept:["yes"],delivery:"std"},A=m=>{m.preventDefault();const g=m.currentTarget,V=new FormData(g),s={};for(const[a,u]of V.entries())Object.prototype.hasOwnProperty.call(s,a)?Array.isArray(s[a])?s[a].push(u):s[a]=[s[a],u]:s[a]=u;Object.keys(i).forEach(a=>{s[a]===void 0&&(s[a]=i[a])}),y(s),c("validated")},C=()=>{c("edited")};return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsxs(e.Fragment,{children:[e.jsx(T,{alt:"",img:w,onClick:()=>{},title:"Demo application",subtitle:"Demonstrating our layout"}),e.jsx(D,{infos:[{definition:"0123456789 - NOM",word:"Customer :"},{definition:"000123456789",word:"Wallet:"},{definition:"New business",word:"Status :"}]}),e.jsx(M,{name:"Jean Agent",profile:"AGA"})]})}),e.jsx(I,{title:"Demo page",anchorNavBarItems:R?[{name:"Accueil",link:"#accueil",isActive:!0},{name:"À Propos",link:"#apropos"},{name:"Services",link:"/services",externalLink:!0},{name:"Contact",link:"#contact"}]:void 0}),e.jsxs(F,{children:[e.jsx(l,{id:"step-risk",title:"Risk analysis",number:1,mode:"active"}),e.jsx(l,{id:"step-price",title:"Offers",number:2,mode:"disabled"}),e.jsx(l,{id:"step-contract",title:"Contract information",number:3,mode:"disabled"}),e.jsx(l,{id:"step-confirmation",title:"Confirmation",mode:"disabled"})]}),e.jsxs(E,{children:[e.jsxs(p,{classModifier:"lg",children:[e.jsx(B,{title:"Policy details",subtitle:"Contract n° 000123456789",rightTitle:"Based on last update: 12/03/2024"}),e.jsx(b,{children:e.jsxs(x,{title:"Client information",children:[e.jsxs(n,{children:[e.jsx(t,{label:"Adress",children:"168 High Holborn, London WC1V 7AA, UK"}),e.jsx(t,{label:"Job",children:"Alchemist"}),e.jsx(t,{label:"Beverages",classModifier:"marge",children:e.jsx(H,{values:["Hoppiness manager","Tea maker","Coffee brewer","Juice extractor"]})})]}),e.jsxs(n,{classModifier:"test",children:[e.jsx(t,{label:"Favorite color",children:"Blue"}),e.jsx(t,{label:"Favorite movie",children:"The Lord of the Rings"}),e.jsx(t,{label:"Favorite series",children:"Game of Thrones"})]})]})})]}),e.jsx(O,{form:e.jsxs("form",{onSubmit:A,children:[e.jsx(d,{label:"Text input",name:"text-input",placeholder:"Type here",defaultValue:i["text-input"]}),e.jsx(d,{label:"Text input (disabled)",name:"text-disabled",disabled:!0,defaultValue:i["text-disabled"]}),e.jsx(d,{label:"Text input (error)",name:"text-error",message:"This field has an error",classModifier:"error",defaultValue:i["text-error"]}),e.jsx(P,{label:"Password",name:"password",placeholder:"••••••",defaultValue:i.password}),e.jsx(N,{label:"Comments",name:"comments",placeholder:"Write a comment",defaultValue:i.comments}),e.jsx(L,{label:"Choose option",name:"select-example",options:[{label:"One",value:"1"},{label:"Two",value:"2"}],defaultValue:i["select-example"]}),e.jsx(W,{label:"Accept terms",name:"accept",options:[{label:"I accept",value:"yes"}],values:i.accept}),e.jsx(J,{label:"Delivery",name:"delivery",options:[{label:"Standard",value:"std"},{label:"Express",value:"exp"}],value:i.delivery}),e.jsx(G,{type:"submit",variant:"validated",children:"Submit"})]}),title:"Client information",stepMode:S,onEdit:C,restitution:e.jsx(p,{children:e.jsx(b,{children:e.jsxs(x,{children:[e.jsxs(n,{children:[e.jsx(t,{label:"Text input",children:o["text-input"]}),e.jsx(t,{label:"Comments",children:o.comments}),e.jsx(t,{label:"Choose option",children:o["select-example"]})]}),e.jsxs(n,{children:[e.jsx(t,{label:"Accept terms",children:Array.isArray(o.accept)?o.accept.join(", "):String(o.accept)}),e.jsx(t,{label:"Delivery",children:o.delivery})]})]})})})})]}),e.jsx(U,{children:"© AXA 2040 - All rights reserved"})]})}};var h,v,j;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(v=r.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const q=["DemoStory"];export{r as DemoStory,q as __namedExportsOrder,$ as default};
