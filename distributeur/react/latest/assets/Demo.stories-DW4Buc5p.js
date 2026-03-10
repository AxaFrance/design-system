import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{p as k,m as d,o as T,l as w,a as D,j as M,B as I,q as F}from"./EditorialMessage-BmsJa9B6.js";import{r as p}from"./index-ZnYipkzV.js";import{P as H}from"./PassInput-CmuYGMcV.js";import"./index-63p0MazF.js";import{H as B}from"./Header-B81GaK1r.js";import{H as E}from"./HeaderTitle-7phKSnM4.js";import{I as P}from"./Infos-Ctb9dQdP.js";import{N}from"./Name-DiZQyc1p.js";import{U as O}from"./User-BtMlzHdm.js";import{M as L}from"./MainContainer-Cw-l_AEa.js";import{A as f,H as W,S as b,a as x,b as l,R as t,c as J}from"./SectionRestitutionRow-BjkFwLyi.js";import{S as U,a as r}from"./Steps-BHnT90tk.js";import{V as G}from"./VerticalStep-JbIsHnCT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./info-fill-BDWUZ-2L.js";import"./generateId-LF6-RKcC.js";const ue={title:"Layout/Demo Page",parameters:{options:{withAnchorNavBar:!0}},argTypes:{withAnchorNavBar:{control:"boolean",description:"Whether to display the anchor navigation bar",defaultValue:!1}},tags:["!autodocs"]},n={name:"Demo",render:({withAnchorNavBar:R})=>{const[S,c]=p.useState("edited"),[s,y]=p.useState({}),i={"text-input":"Default text","text-disabled":"Disabled default","text-error":"Error default",password:"secret",comments:"Default comment","select-example":"2",accept:["yes"],delivery:"std"},A=m=>{m.preventDefault();const g=m.currentTarget,V=new FormData(g),o={};for(const[a,u]of V.entries())Object.prototype.hasOwnProperty.call(o,a)?Array.isArray(o[a])?o[a].push(u):o[a]=[o[a],u]:o[a]=u;Object.keys(i).forEach(a=>{o[a]===void 0&&(o[a]=i[a])}),y(o),c("validated")},C=()=>{c("edited")};return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs(e.Fragment,{children:[e.jsx(N,{alt:"",img:k,onClick:()=>{},title:"Demo application",subtitle:"Demonstrating our layout"}),e.jsx(P,{infos:[{definition:"0123456789 - NOM",word:"Customer :"},{definition:"000123456789",word:"Wallet:"},{definition:"New business",word:"Status :"}]}),e.jsx(O,{name:"Jean Agent",profile:"AGA"})]})}),e.jsx(E,{title:"Demo page",anchorNavBarItems:R?[{name:"Accueil",link:"#accueil",isActive:!0},{name:"À Propos",link:"#apropos"},{name:"Services",link:"/services",externalLink:!0},{name:"Contact",link:"#contact"}]:void 0}),e.jsxs(U,{children:[e.jsx(r,{id:"step-risk",title:"Risk analysis",number:1,mode:"active"}),e.jsx(r,{id:"step-price",title:"Offers",number:2,mode:"disabled"}),e.jsx(r,{id:"step-contract",title:"Contract information",number:3,mode:"disabled"}),e.jsx(r,{id:"step-confirmation",title:"Confirmation",mode:"disabled"})]}),e.jsxs(L,{children:[e.jsxs(f,{classModifier:"lg",children:[e.jsx(W,{title:"Policy details",subtitle:"Contract n° 000123456789",rightTitle:"Based on last update: 12/03/2024"}),e.jsx(b,{children:e.jsxs(x,{title:"Client information",children:[e.jsxs(l,{children:[e.jsx(t,{label:"Adress",children:"168 High Holborn, London WC1V 7AA, UK"}),e.jsx(t,{label:"Job",children:"Alchemist"}),e.jsx(t,{label:"Beverages",classModifier:"marge",children:e.jsx(J,{values:["Hoppiness manager","Tea maker","Coffee brewer","Juice extractor"]})})]}),e.jsxs(l,{classModifier:"test",children:[e.jsx(t,{label:"Favorite color",children:"Blue"}),e.jsx(t,{label:"Favorite movie",children:"The Lord of the Rings"}),e.jsx(t,{label:"Favorite series",children:"Game of Thrones"})]})]})})]}),e.jsx(G,{form:e.jsxs("form",{onSubmit:A,children:[e.jsx(d,{label:"Text input",name:"text-input",placeholder:"Type here",defaultValue:i["text-input"]}),e.jsx(d,{label:"Text input (disabled)",name:"text-disabled",disabled:!0,defaultValue:i["text-disabled"]}),e.jsx(d,{label:"Text input (error)",name:"text-error",message:"This field has an error",classModifier:"error",defaultValue:i["text-error"]}),e.jsx(H,{label:"Password",name:"password",placeholder:"••••••",defaultValue:i.password}),e.jsx(T,{label:"Comments",name:"comments",placeholder:"Write a comment",defaultValue:i.comments}),e.jsx(w,{label:"Choose option",name:"select-example",options:[{label:"One",value:"1"},{label:"Two",value:"2"}],defaultValue:i["select-example"]}),e.jsx(D,{label:"Accept terms",name:"accept",options:[{label:"I accept",value:"yes"}],values:i.accept}),e.jsx(M,{label:"Delivery",name:"delivery",options:[{label:"Standard",value:"std"},{label:"Express",value:"exp"}],value:i.delivery}),e.jsx(I,{type:"submit",variant:"validated",children:"Submit"})]}),title:"Client information",stepMode:S,onEdit:C,restitution:e.jsx(f,{children:e.jsx(b,{children:e.jsxs(x,{children:[e.jsxs(l,{children:[e.jsx(t,{label:"Text input",children:s["text-input"]}),e.jsx(t,{label:"Comments",children:s.comments}),e.jsx(t,{label:"Choose option",children:s["select-example"]})]}),e.jsxs(l,{children:[e.jsx(t,{label:"Accept terms",children:Array.isArray(s.accept)?s.accept.join(", "):String(s.accept)}),e.jsx(t,{label:"Delivery",children:s.delivery})]})]})})})})]}),e.jsx(F,{children:"© AXA 2040 - All rights reserved"})]})}};var h,v,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const de=["DemoStory"];export{n as DemoStory,de as __namedExportsOrder,ue as default};
