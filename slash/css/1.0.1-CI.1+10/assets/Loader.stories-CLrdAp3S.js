const d={title:"Components/Loader",parameters:{layout:"centered"}},n={name:"Loader",render:({error:s,message:o})=>{const e=document.createElement("div");e.style.width="75vw",e.style.height="10rem",e.style.border="1px solid rebeccapurple";const i=`<div class="af-loader">
        <div class="af-loader-on">
        <div style="width:75%; margin: 2rem auto;">stuff in the background</div>
          <div
            class="af-spinner"
            role="alert"
            aria-live="assertive"
            aria-busy
            aria-label="Loading">
            ${s?"":'<div class="af-spinner__animation"></div>'}
            <div class="af-spinner__caption">${o}</div>
          </div>
        </div>
    </div>
    `;return e.innerHTML=i,e},args:{error:!1,message:"Loading"},argTypes:{error:{options:[!0,!1],control:{type:"boolean"}}}};var a,r,t;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Loader",
  render: ({
    error,
    message
  }) => {
    const context = document.createElement("div");
    context.style.width = "75vw";
    context.style.height = "10rem";
    context.style.border = "1px solid rebeccapurple";
    const html = \`<div class="af-loader">
        <div class="af-loader-on">
        <div style="width:75%; margin: 2rem auto;">stuff in the background</div>
          <div
            class="af-spinner"
            role="alert"
            aria-live="assertive"
            aria-busy
            aria-label="Loading">
            \${!error ? \`<div class="af-spinner__animation"></div>\` : \`\`}
            <div class="af-spinner__caption">\${message}</div>
          </div>
        </div>
    </div>
    \`;
    context.innerHTML = html;
    return context;
  },
  args: {
    error: false,
    message: "Loading"
  },
  argTypes: {
    error: {
      options: [true, false],
      control: {
        type: "boolean"
      }
    }
  }
}`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const l=["Default"];export{n as Default,l as __namedExportsOrder,d as default};
