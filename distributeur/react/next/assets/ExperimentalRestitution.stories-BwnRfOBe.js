import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,w as r}from"./iframe-Cq757aCd.js";import{a as i,d as a,f as o,i as s,n as c,p as l,r as u,t as d,u as ee}from"./classnames-BJ5hHcCe.js";import{a as te,i as ne,n as f,o as re,r as p,t as m}from"./Label-DtVmrGEG.js";var h,g=t((()=>{h=({baseClassName:e,modifiers:t=[],className:n=``})=>{let r=[e,...t.filter(Boolean).map(t=>`${e}--${t}`),...n.split(` `)].filter(Boolean);return Array.from(new Set(r)).join(` `)}})),_,v,ie=t((()=>{_=r(),g(),v=({title:e,rightElement:t,subtitle:n,id:r,className:i,...a})=>(0,_.jsxs)(`div`,{className:h({baseClassName:`experimental-af-restitution__header`,className:i}),...a,children:[(0,_.jsxs)(`header`,{className:`experimental-af-restitution__header-left`,id:r,children:[(0,_.jsx)(`h3`,{className:`experimental-af-restitution__title`,children:e}),n?(0,_.jsx)(`p`,{className:`experimental-af-restitution__subtitle`,children:n}):null]}),t?(0,_.jsx)(`div`,{className:`experimental-af-restitution__header-right`,children:t}):null]})})),y,ae,b,oe=t((()=>{y=r(),ae=e(n()),g(),ie(),b=({title:e,children:t,rightElement:n,subtitle:r,className:i,...a})=>{let o=(0,ae.useId)();return(0,y.jsxs)(`article`,{className:h({baseClassName:`experimental-af-restitution`,className:i}),"aria-labelledby":o,...a,children:[e?(0,y.jsx)(v,{rightElement:n,subtitle:r,title:e,id:o}):null,(0,y.jsx)(`div`,{className:`experimental-af-restitution__content`,children:t})]})}})),se,x,ce=t((()=>{se=r(),g(),x=({children:e,className:t,...n})=>(0,se.jsx)(`div`,{className:h({baseClassName:`experimental-af-restitution__column`,className:t}),...n,children:e})})),le,ue,S=t((()=>{le=r(),g(),ue=({children:e,className:t,...n})=>(0,le.jsx)(`dt`,{className:h({baseClassName:`experimental-af-restitution__listdef-item`,className:t}),...n,children:e})})),C,de,fe=t((()=>{C=r(),g(),de=({children:e,className:t,...n})=>(0,C.jsx)(`dd`,{className:h({baseClassName:`experimental-af-restitution__listdef-value`,className:t}),...n,children:e})})),w,T,pe=t((()=>{w=r(),S(),fe(),T=({label:e,value:t,labelProps:n,valueProps:r})=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ue,{...n,children:e}),(0,w.jsx)(de,{...r,children:t})]})})),me,E,he=t((()=>{me=r(),g(),E=({children:e,className:t,...n})=>(0,me.jsx)(`dl`,{className:h({baseClassName:`experimental-af-restitution__listdef`,className:t}),...n,children:e})})),D,O,ge=t((()=>{D=r(),g(),O=({children:e,className:t,...n})=>(0,D.jsx)(`div`,{className:h({baseClassName:`experimental-af-restitution__row`,className:t}),...n,children:e})})),k,A,j,_e=t((()=>{k=r(),A=e(n()),g(),j=({title:e,children:t,className:n,...r})=>{let i=h({baseClassName:`experimental-af-restitution__section`,className:n}),a=(0,A.useId)();return(0,k.jsxs)(`section`,{className:i,"aria-labelledby":a,...r,children:[(0,k.jsx)(`h2`,{id:a,className:`experimental-af-restitution__section-title`,children:e}),(0,k.jsx)(`div`,{className:`experimental-af-restitution__row-content`,children:t})]})}})),M,N,ve=t((()=>{M=r(),g(),N=({items:e,className:t,...n})=>(0,M.jsx)(`ul`,{className:h({baseClassName:`experimental-af-restitution__listdef-value-list`,className:t}),...n,children:e.map(e=>(0,M.jsx)(`li`,{children:e},null))})})),ye=t((()=>{re(),oe(),ce(),S(),pe(),he(),ge(),_e(),fe(),ve()})),P,F,I=t((()=>{P=r(),te(),n(),g(),F=({className:e,...t})=>(0,P.jsx)(`input`,{className:h({baseClassName:`af-input__input`,className:e}),...t}),F.displayName=`Input`})),L,R,z,B=t((()=>{L=r(),ne(),R=e(d()),z=({children:e,vertical:t,className:n})=>(0,L.jsx)(`div`,{className:(0,R.default)(`af-input__container`,{"af-input__container--vertical":t},n),children:e})})),be,V,xe=t((()=>{be=r(),p(),V=({children:e})=>(0,be.jsx)(`span`,{className:`af-input__unit`,children:e})})),Se,Ce,we,Te=t((()=>{i(),c(),Se=[`fill`,`stroke`],Ce=(e,t)=>{let n={};e?.getAttributeNames().forEach(t=>{(t.startsWith(`aria-`)||Se.includes(t))&&(n[t]=e.getAttribute(t))}),Object.keys(n).forEach(e=>{t.setAttribute(e,n[e])})},we=(e,{beforeEach:t=()=>{},...n}={})=>{s(e,{...n,beforeEach:n=>{u.sanitize(n,{ADD_ATTR:[`to`,`from`],USE_PROFILES:{svg:!0,svgFilters:!0},IN_PLACE:!0}),Ce(e,n),t(n)}})}})),H,U,W,Ee,De=t((()=>{H=r(),U=e(n()),Te(),W=(e,t)=>{e.getAttributeNames().forEach(n=>{t.setAttribute(n,e.getAttribute(n))})},Ee=({src:e,alt:t,width:n=24,height:r=24,...i})=>{let a=(0,U.useRef)(null),[o,s]=(0,U.useState)(!1);return(0,U.useLayoutEffect)(()=>{o&&s(!1)},[e]),(0,U.useLayoutEffect)(()=>{if(o)return;let e=a.current;if(e){let t=document.createElement(`div`),i=document.createElement(`svg`);t.appendChild(i),W(e,i),i.setAttribute(`width`,n.toString()),i.setAttribute(`height`,r.toString()),we(i,{afterEach:(t,n)=>{t&&s(!0),n&&(e.innerHTML=n.innerHTML,W(n,e))}})}},[e,n,r,o]),o?t?(0,H.jsx)(`span`,{...i,children:t}):null:(0,H.jsx)(`svg`,{ref:a,"data-src":e,role:`presentation`,...i})}})),Oe=t((()=>{De()})),G,ke,K,Ae=t((()=>{G=r(),f(),l(),a(),Oe(),g(),ke={success:o,error:ee},K=({variant:e,children:t,className:n,id:r})=>{let i=h({baseClassName:`af-item-message`,className:n,modifiers:[e]}),a=e?ke[e]:null;return(0,G.jsxs)(`div`,{className:i,id:r,children:[a?(0,G.jsx)(Ee,{src:a,className:`af-item-message__icon`}):null,t]})}})),q,je,Me=t((()=>{q=r(),m(),je=({children:e,required:t=!1,...n})=>(0,q.jsxs)(`label`,{className:`af-label`,...n,children:[e,t?(0,q.jsx)(`span`,{className:`af-label__required`,"aria-hidden":!0,children:`*`}):null]})})),Ne=t((()=>{n()})),Pe,Fe,Ie=t((()=>{Pe=e(n()),g(),Ne(),Fe=e=>{let t=(0,Pe.useId)(),n=e.id??t,r=!!e.errorMessage,i=h({baseClassName:`af-input__input`,className:e.inputClassName}),a=h({baseClassName:`af-label`,modifiers:[e.labelPosition===`above`&&`top`],className:e.labelClassName}),o=r?`${n}-description`:void 0,s=e.helpMessage?`${n}-helper`:void 0,c=[o,s].filter(Boolean).join(` `).trim();return{isInvalid:r,isContainerVertical:e.labelPosition===`above`,inputClassName:i,labelClassName:a,describedBy:c,errorId:o,helperId:s,inputId:n}}})),J,Le,Re=t((()=>{J=r(),n(),I(),B(),xe(),Ae(),Me(),Ie(),Le=({contentRight:e,id:t,labelPosition:n,inputClassName:r,labelClassName:i,helpMessage:a,containerClassName:o,required:s,label:c,errorMessage:l,...u})=>{let{describedBy:d,errorId:ee,helperId:te,inputClassName:ne,inputId:f,isContainerVertical:re,isInvalid:p,labelClassName:m}=Fe({id:t,labelPosition:n,inputClassName:r,labelClassName:i,errorMessage:l,helpMessage:a});return(0,J.jsxs)(z,{vertical:re,className:o,children:[(0,J.jsx)(je,{htmlFor:f,required:s,className:m,children:c}),(0,J.jsx)(F,{...u,className:ne,id:f,"aria-describedby":d,"aria-invalid":p}),e?(0,J.jsx)(V,{children:e}):null,a?(0,J.jsx)(K,{id:te,children:a}):null,l?(0,J.jsx)(K,{variant:`error`,id:ee,children:l}):null]})},Le.displayName=`TextInput`})),ze=t((()=>{I(),B(),xe(),Ae(),Me(),Re(),Ie()})),Be=t((()=>{ye(),ze()})),Y,Ve,X,Z,Q,$,He,Ue=t((()=>{Be(),Y=r(),Ve={title:`Experimental/ExperimentalRestitution`,component:b,parameters:{viewport:{viewports:{fourColumns:{name:`4 columns`,styles:{width:`1300px`,height:`90vh`},type:`desktop`},twoColumns:{name:`2 columns`,styles:{width:`1000px`,height:`90vh`},type:`tablet`},oneColumns:{name:`1 column`,styles:{width:`540px`,height:`90vh`},type:`tablet`}}}}},X=()=>(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:(0,Y.jsx)(N,{items:[`value 1`,`value 2`,`value 3`]})})]})}),Z={name:`Complete restitution demo`,render:()=>(0,Y.jsxs)(b,{title:`General title of the restitution`,subtitle:`Subtitle of the restitution`,rightElement:(0,Y.jsx)(`div`,{children:`Right title`}),children:[(0,Y.jsxs)(O,{children:[(0,Y.jsxs)(j,{title:`Cas 2 + 1`,children:[(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:(0,Y.jsx)(N,{items:[`value 1`,`value 2`,`value 3`]})})]})}),(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:(0,Y.jsx)(N,{items:[`value 1`,`value 2`,`value 3`]})}),(0,Y.jsx)(T,{label:`item5`,value:`item value`}),(0,Y.jsx)(T,{label:`item6`,value:`item value`})]})})]}),(0,Y.jsx)(j,{title:`a short title`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:(0,Y.jsx)(N,{items:[`value 1`,`value 2`,`value 3`]})})]})})})]}),(0,Y.jsxs)(O,{children:[(0,Y.jsxs)(j,{title:`Cas 3 + 1`,children:[(0,Y.jsx)(X,{}),(0,Y.jsx)(X,{}),(0,Y.jsx)(X,{})]}),(0,Y.jsx)(j,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(X,{})})]}),(0,Y.jsxs)(O,{children:[(0,Y.jsx)(j,{title:`Cas 4 x 1`,children:(0,Y.jsx)(X,{})}),(0,Y.jsx)(j,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(X,{})}),(0,Y.jsx)(j,{title:`A short title`,children:(0,Y.jsx)(X,{})}),(0,Y.jsx)(j,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(X,{})})]}),(0,Y.jsxs)(O,{children:[(0,Y.jsxs)(j,{title:`Cas 2x2`,children:[(0,Y.jsx)(X,{}),(0,Y.jsx)(X,{})]}),(0,Y.jsxs)(j,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:[(0,Y.jsx)(X,{}),(0,Y.jsx)(X,{})]})]})]})},Q={name:`Restitution 4x1`,render:()=>(0,Y.jsx)(b,{title:`General title of the restitution`,subtitle:`Subtitle of the restitution`,rightElement:(0,Y.jsx)(`div`,{children:`Right title`}),children:(0,Y.jsxs)(O,{children:[(0,Y.jsx)(j,{title:`Cas 4 x 1`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:(0,Y.jsx)(N,{items:[`value 1`,`value 2`,`value 3`]})})]})})}),(0,Y.jsx)(j,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:(0,Y.jsx)(N,{items:[`value 1`,`value 2`,`value 3`]})})]})})}),(0,Y.jsx)(j,{title:`A short title`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:(0,Y.jsx)(N,{items:[`value 1`,`value 2`,`value 3`]})})]})})}),(0,Y.jsx)(j,{title:`A very long title that should be be wrapped on several lines to test the layout of the header`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:(0,Y.jsx)(N,{items:[`value 1`,`value 2`,`value 3`]})})]})})})]})})},$={name:`Restitution section`,render:()=>(0,Y.jsx)(`div`,{className:`experimental-af-restitution`,children:(0,Y.jsx)(j,{title:`Section title`,children:(0,Y.jsx)(x,{children:(0,Y.jsxs)(E,{children:[(0,Y.jsx)(T,{label:`item1`,value:`item value`}),(0,Y.jsx)(T,{label:`item2`,value:`item value`}),(0,Y.jsx)(T,{label:`item3`,value:`item value`}),(0,Y.jsx)(T,{label:`item4`,value:`item value`})]})})})})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},He=[`Demo`,`Restitution4x1`,`RestitutionSection`]}));Ue();export{Z as Demo,Q as Restitution4x1,$ as RestitutionSection,He as __namedExportsOrder,Ve as default,Ue as t};