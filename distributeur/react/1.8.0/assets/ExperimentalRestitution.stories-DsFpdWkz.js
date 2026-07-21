import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,w as r}from"./iframe-CKcycv95.js";import{a as i,d as a,f as o,i as s,n as c,p as l,r as ee,t as te,u}from"./classnames-DvNNj8-q.js";import{a as d,i as f,n as ne,o as p,r as re,t as ie}from"./Label-Cq2rsIG9.js";var m,h=t((()=>{m=({baseClassName:e,modifiers:t=[],className:n=``})=>{let r=[e,...t.filter(Boolean).map(t=>`${e}--${t}`),...n.split(` `)].filter(Boolean);return Array.from(new Set(r)).join(` `)}})),g,_,ae=t((()=>{g=r(),h(),_=({title:e,rightElement:t,subtitle:n,id:r,className:i,...a})=>(0,g.jsxs)(`div`,{className:m({baseClassName:`experimental-af-restitution__header`,className:i}),...a,children:[(0,g.jsxs)(`header`,{className:`experimental-af-restitution__header-left`,id:r,children:[(0,g.jsx)(`h3`,{className:`experimental-af-restitution__title`,children:e}),n?(0,g.jsx)(`p`,{className:`experimental-af-restitution__subtitle`,children:n}):null]}),t?(0,g.jsx)(`div`,{className:`experimental-af-restitution__header-right`,children:t}):null]})})),v,y,b,oe=t((()=>{v=r(),y=e(n()),h(),ae(),b=({title:e,children:t,rightElement:n,subtitle:r,className:i,...a})=>{let o=(0,y.useId)();return(0,v.jsxs)(`article`,{className:m({baseClassName:`experimental-af-restitution`,className:i}),"aria-labelledby":o,...a,children:[e?(0,v.jsx)(_,{rightElement:n,subtitle:r,title:e,id:o}):null,(0,v.jsx)(`div`,{className:`experimental-af-restitution__content`,children:t})]})}})),se,x,ce=t((()=>{se=r(),h(),x=({children:e,className:t,...n})=>(0,se.jsx)(`div`,{className:m({baseClassName:`experimental-af-restitution__column`,className:t}),...n,children:e})})),le,ue,de=t((()=>{le=r(),h(),ue=({children:e,className:t,...n})=>(0,le.jsx)(`dt`,{className:m({baseClassName:`experimental-af-restitution__listdef-item`,className:t}),...n,children:e})})),fe,pe,me=t((()=>{fe=r(),h(),pe=({children:e,className:t,...n})=>(0,fe.jsx)(`dd`,{className:m({baseClassName:`experimental-af-restitution__listdef-value`,className:t}),...n,children:e})})),S,C,he=t((()=>{S=r(),de(),me(),C=({label:e,value:t,labelProps:n,valueProps:r})=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(ue,{...n,children:e}),(0,S.jsx)(pe,{...r,children:t})]})})),ge,w,_e=t((()=>{ge=r(),h(),w=({children:e,className:t,...n})=>(0,ge.jsx)(`dl`,{className:m({baseClassName:`experimental-af-restitution__listdef`,className:t}),...n,children:e})})),T,E,ve=t((()=>{T=r(),h(),E=({children:e,className:t,...n})=>(0,T.jsx)(`div`,{className:m({baseClassName:`experimental-af-restitution__row`,className:t}),...n,children:e})})),D,O,k,ye=t((()=>{D=r(),O=e(n()),h(),k=({title:e,children:t,className:n,...r})=>{let i=m({baseClassName:`experimental-af-restitution__section`,className:n}),a=(0,O.useId)();return(0,D.jsxs)(`section`,{className:i,"aria-labelledby":a,...r,children:[(0,D.jsx)(`h2`,{id:a,className:`experimental-af-restitution__section-title`,children:e}),(0,D.jsx)(`div`,{className:`experimental-af-restitution__row-content`,children:t})]})}})),A,j,be=t((()=>{A=r(),h(),j=({items:e,className:t,...n})=>(0,A.jsx)(`ul`,{className:m({baseClassName:`experimental-af-restitution__listdef-value-list`,className:t}),...n,children:e.map(e=>(0,A.jsx)(`li`,{children:e},null))})})),xe=t((()=>{p(),oe(),ce(),de(),he(),_e(),ve(),ye(),me(),be()})),M,N,P,F=t((()=>{M=r(),d(),N=e(n()),h(),P=(0,N.forwardRef)(({className:e,...t},n)=>(0,M.jsx)(`input`,{className:m({baseClassName:`af-input__input`,className:e}),ref:n,...t})),P.displayName=`Input`,P.__docgenInfo={description:``,methods:[],displayName:`Input`}})),I,L,R,z=t((()=>{I=r(),f(),L=e(te()),R=({children:e,vertical:t,className:n})=>(0,I.jsx)(`div`,{className:(0,L.default)(`af-input__container`,{"af-input__container--vertical":t},n),children:e})})),Se,Ce,we=t((()=>{Se=r(),re(),Ce=({children:e})=>(0,Se.jsx)(`span`,{className:`af-input__unit`,children:e})})),Te,Ee,De,Oe=t((()=>{i(),c(),Te=[`fill`,`stroke`],Ee=(e,t)=>{let n={};e?.getAttributeNames().forEach(t=>{(t.startsWith(`aria-`)||Te.includes(t))&&(n[t]=e.getAttribute(t))}),Object.keys(n).forEach(e=>{t.setAttribute(e,n[e])})},De=(e,{beforeEach:t=()=>{},...n}={})=>{s(e,{...n,beforeEach:n=>{ee.sanitize(n,{USE_PROFILES:{svg:!0,svgFilters:!0},IN_PLACE:!0}),Ee(e,n),t(n)}})}})),B,V,H,ke,Ae=t((()=>{B=r(),V=e(n()),Oe(),H=(e,t)=>{e.getAttributeNames().forEach(n=>{t.setAttribute(n,e.getAttribute(n))})},ke=({src:e,alt:t,width:n=24,height:r=24,...i})=>{let a=(0,V.useRef)(null),[o,s]=(0,V.useState)(!1);return(0,V.useLayoutEffect)(()=>{o&&s(!1)},[e]),(0,V.useLayoutEffect)(()=>{if(o)return;let e=a.current;if(e){let t=document.createElement(`div`),i=document.createElement(`svg`);t.appendChild(i),H(e,i),i.setAttribute(`width`,n.toString()),i.setAttribute(`height`,r.toString()),De(i,{afterEach:(t,n)=>{t&&s(!0),n&&(e.innerHTML=n.innerHTML,H(n,e))}})}},[e,n,r,o]),o?t?(0,B.jsx)(`span`,{...i,children:t}):null:(0,B.jsx)(`svg`,{ref:a,"data-src":e,role:`presentation`,...i})}})),je=t((()=>{Ae()})),U,Me,W,Ne=t((()=>{U=r(),ne(),l(),a(),je(),h(),Me={success:o,error:u},W=({variant:e,children:t,className:n,id:r})=>{let i=m({baseClassName:`af-item-message`,className:n,modifiers:[e]}),a=e?Me[e]:null;return(0,U.jsxs)(`div`,{className:i,id:r,children:[a?(0,U.jsx)(ke,{src:a,className:`af-item-message__icon`}):null,t]})}})),G,Pe,Fe=t((()=>{G=r(),ie(),Pe=({children:e,required:t=!1,...n})=>(0,G.jsxs)(`label`,{className:`af-label`,...n,children:[e,t?(0,G.jsx)(`span`,{className:`af-label__required`,"aria-hidden":!0,children:`*`}):null]})})),Ie=t((()=>{n()})),Le,K,Re=t((()=>{Le=e(n()),h(),Ie(),K=e=>{let t=(0,Le.useId)(),n=e.id??t,r=!!e.errorMessage,i=m({baseClassName:`af-input__input`,className:e.inputClassName}),a=m({baseClassName:`af-label`,modifiers:[e.labelPosition===`above`&&`top`],className:e.labelClassName}),o=r?`${n}-description`:void 0,s=e.helpMessage?`${n}-helper`:void 0,c=[o,s].filter(Boolean).join(` `).trim();return{isInvalid:r,isContainerVertical:e.labelPosition===`above`,inputClassName:i,labelClassName:a,describedBy:c,errorId:o,helperId:s,inputId:n}}})),q,ze,J,Be=t((()=>{q=r(),ze=e(n()),F(),z(),we(),Ne(),Fe(),Re(),J=(0,ze.forwardRef)(({contentRight:e,id:t,labelPosition:n,inputClassName:r,labelClassName:i,helpMessage:a,containerClassName:o,required:s,label:c,errorMessage:l,...ee},te)=>{let{describedBy:u,errorId:d,helperId:f,inputClassName:ne,inputId:p,isContainerVertical:re,isInvalid:ie,labelClassName:m}=K({id:t,labelPosition:n,inputClassName:r,labelClassName:i,errorMessage:l,helpMessage:a});return(0,q.jsxs)(R,{vertical:re,className:o,children:[(0,q.jsx)(Pe,{htmlFor:p,required:s,className:m,children:c}),(0,q.jsx)(P,{...ee,className:ne,id:p,ref:te,"aria-describedby":u,"aria-invalid":ie}),e?(0,q.jsx)(Ce,{children:e}):null,a?(0,q.jsx)(W,{id:f,children:a}):null,l?(0,q.jsx)(W,{variant:`error`,id:d,children:l}):null]})}),J.displayName=`TextInput`,J.__docgenInfo={description:`This component renders a label, a text input field and optionnally help and  error messages.
It can be customized to render the label on top, or on the left of the input.
It also supports adding a unit on the right of the input.`,methods:[],displayName:`TextInput`}})),Ve=t((()=>{F(),z(),we(),Ne(),Fe(),Be(),Re()})),He=t((()=>{xe(),Ve()})),Y,Ue,X,Z,Q,$,We,Ge=t((()=>{He(),Y=r(),Ue={title:`Experimental/ExperimentalRestitution`,component:b,parameters:{viewport:{viewports:{fourColumns:{name:`4 columns`,styles:{width:`1300px`,height:`90vh`},type:`desktop`},twoColumns:{name:`2 columns`,styles:{width:`1000px`,height:`90vh`},type:`tablet`},oneColumns:{name:`1 column`,styles:{width:`540px`,height:`90vh`},type:`tablet`}}}}},X=()=>(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:(0,Y.jsx)(j,{items:[`value 1`,`value 2`,`value 3`]})})]})}),Z={name:`Complete restitution demo`,render:()=>(0,Y.jsxs)(b,{title:`General title of the restitution`,subtitle:`Subtitle of the restitution`,rightElement:(0,Y.jsx)(`div`,{children:`Right title`}),children:[(0,Y.jsxs)(E,{children:[(0,Y.jsxs)(k,{title:`Cas 2 + 1`,children:[(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:(0,Y.jsx)(j,{items:[`value 1`,`value 2`,`value 3`]})})]})}),(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:(0,Y.jsx)(j,{items:[`value 1`,`value 2`,`value 3`]})}),(0,Y.jsx)(C,{label:`item5`,value:`item value`}),(0,Y.jsx)(C,{label:`item6`,value:`item value`})]})})]}),(0,Y.jsx)(k,{title:`a short title`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:(0,Y.jsx)(j,{items:[`value 1`,`value 2`,`value 3`]})})]})})})]}),(0,Y.jsxs)(E,{children:[(0,Y.jsxs)(k,{title:`Cas 3 + 1`,children:[(0,Y.jsx)(X,{}),(0,Y.jsx)(X,{}),(0,Y.jsx)(X,{})]}),(0,Y.jsx)(k,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(X,{})})]}),(0,Y.jsxs)(E,{children:[(0,Y.jsx)(k,{title:`Cas 4 x 1`,children:(0,Y.jsx)(X,{})}),(0,Y.jsx)(k,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(X,{})}),(0,Y.jsx)(k,{title:`A short title`,children:(0,Y.jsx)(X,{})}),(0,Y.jsx)(k,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(X,{})})]}),(0,Y.jsxs)(E,{children:[(0,Y.jsxs)(k,{title:`Cas 2x2`,children:[(0,Y.jsx)(X,{}),(0,Y.jsx)(X,{})]}),(0,Y.jsxs)(k,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:[(0,Y.jsx)(X,{}),(0,Y.jsx)(X,{})]})]})]})},Q={name:`Restitution 4x1`,render:()=>(0,Y.jsx)(b,{title:`General title of the restitution`,subtitle:`Subtitle of the restitution`,rightElement:(0,Y.jsx)(`div`,{children:`Right title`}),children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(k,{title:`Cas 4 x 1`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:(0,Y.jsx)(j,{items:[`value 1`,`value 2`,`value 3`]})})]})})}),(0,Y.jsx)(k,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:(0,Y.jsx)(j,{items:[`value 1`,`value 2`,`value 3`]})})]})})}),(0,Y.jsx)(k,{title:`A short title`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:(0,Y.jsx)(j,{items:[`value 1`,`value 2`,`value 3`]})})]})})}),(0,Y.jsx)(k,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:(0,Y.jsx)(j,{items:[`value 1`,`value 2`,`value 3`]})})]})})})]})})},$={name:`Restitution section`,render:()=>(0,Y.jsx)(`div`,{className:`experimental-af-restitution`,children:(0,Y.jsx)(k,{title:`Section title`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(w,{children:[(0,Y.jsx)(C,{label:`item1`,value:`item value`}),(0,Y.jsx)(C,{label:`item2`,value:`item value`}),(0,Y.jsx)(C,{label:`item3`,value:`item value`}),(0,Y.jsx)(C,{label:`item4`,value:`item value`})]})})})})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Complete restitution demo",
  render: () => <ExperimentalRestitution title="General title of the restitution" subtitle="Subtitle of the restitution" rightElement={<div>Right title</div>}>
      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 2 + 1">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue label="item1" value="item value" />
              <ExperimentalRestitutionLabelValue label="item2" value="item value" />
              <ExperimentalRestitutionLabelValue label="item3" value="item value" />
              <ExperimentalRestitutionLabelValue label="item4" value={<ExperimentalRestitutionValueList items={["value 1", "value 2", "value 3"]} />} />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue label="item1" value="item value" />
              <ExperimentalRestitutionLabelValue label="item2" value="item value" />
              <ExperimentalRestitutionLabelValue label="item3" value="item value" />
              <ExperimentalRestitutionLabelValue label="item4" value={<ExperimentalRestitutionValueList items={["value 1", "value 2", "value 3"]} />} />
              <ExperimentalRestitutionLabelValue label="item5" value="item value" />
              <ExperimentalRestitutionLabelValue label="item6" value="item value" />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="a short title">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue label="item1" value="item value" />
              <ExperimentalRestitutionLabelValue label="item2" value="item value" />
              <ExperimentalRestitutionLabelValue label="item3" value="item value" />
              <ExperimentalRestitutionLabelValue label="item4" value={<ExperimentalRestitutionValueList items={["value 1", "value 2", "value 3"]} />} />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>

      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 3 + 1">
          <Column />
          <Column />
          <Column />
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <Column />
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>

      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 4 x 1">
          <Column />
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <Column />
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A short title">
          <Column />
        </ExperimentalRestitutionSection>

        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <Column />
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>

      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 2x2">
          <Column />
          <Column />
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <Column />
          <Column />
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>
    </ExperimentalRestitution>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Restitution 4x1",
  render: () => <ExperimentalRestitution title="General title of the restitution" subtitle="Subtitle of the restitution" rightElement={<div>Right title</div>}>
      <ExperimentalRestitutionRow>
        <ExperimentalRestitutionSection title="Cas 4 x 1">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue label="item1" value="item value" />
              <ExperimentalRestitutionLabelValue label="item2" value="item value" />
              <ExperimentalRestitutionLabelValue label="item3" value="item value" />
              <ExperimentalRestitutionLabelValue label="item4" value={<ExperimentalRestitutionValueList items={["value 1", "value 2", "value 3"]} />} />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue label="item1" value="item value" />
              <ExperimentalRestitutionLabelValue label="item2" value="item value" />
              <ExperimentalRestitutionLabelValue label="item3" value="item value" />
              <ExperimentalRestitutionLabelValue label="item4" value={<ExperimentalRestitutionValueList items={["value 1", "value 2", "value 3"]} />} />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
        <ExperimentalRestitutionSection title="A short title">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue label="item1" value="item value" />
              <ExperimentalRestitutionLabelValue label="item2" value="item value" />
              <ExperimentalRestitutionLabelValue label="item3" value="item value" />
              <ExperimentalRestitutionLabelValue label="item4" value={<ExperimentalRestitutionValueList items={["value 1", "value 2", "value 3"]} />} />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>

        <ExperimentalRestitutionSection title="A very long title that should be be wrapped on several lines to test the layout of the header">
          <ExperimentalRestitutionColumn>
            <ExperimentalRestitutionListDef>
              <ExperimentalRestitutionLabelValue label="item1" value="item value" />
              <ExperimentalRestitutionLabelValue label="item2" value="item value" />
              <ExperimentalRestitutionLabelValue label="item3" value="item value" />
              <ExperimentalRestitutionLabelValue label="item4" value={<ExperimentalRestitutionValueList items={["value 1", "value 2", "value 3"]} />} />
            </ExperimentalRestitutionListDef>
          </ExperimentalRestitutionColumn>
        </ExperimentalRestitutionSection>
      </ExperimentalRestitutionRow>
    </ExperimentalRestitution>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Restitution section",
  render: () => <div className="experimental-af-restitution">
      <ExperimentalRestitutionSection title="Section title">
        <ExperimentalRestitutionColumn>
          <ExperimentalRestitutionListDef>
            <ExperimentalRestitutionLabelValue label="item1" value="item value" />
            <ExperimentalRestitutionLabelValue label="item2" value="item value" />
            <ExperimentalRestitutionLabelValue label="item3" value="item value" />
            <ExperimentalRestitutionLabelValue label="item4" value="item value" />
          </ExperimentalRestitutionListDef>
        </ExperimentalRestitutionColumn>
      </ExperimentalRestitutionSection>
    </div>
}`,...$.parameters?.docs?.source}}},We=[`Demo`,`Restitution4x1`,`RestitutionSection`]}));Ge();export{Z as Demo,Q as Restitution4x1,$ as RestitutionSection,We as __namedExportsOrder,Ue as default,Ge as t};