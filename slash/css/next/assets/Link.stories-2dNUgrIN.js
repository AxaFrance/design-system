const p={title:"Components/Link"},d=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
</svg>
`,g=`
<i class="glyphicon glyphicon-pencil"></i>
`,t={render:e=>{const n=document.createElement("a");n.target="_blank",n.classList.add("af-slash-link"),n.href=e.href,e.disabled&&n.setAttribute("aria-disabled","true");const o=l=>l==="svg"?d:l==="glyphicon"?g:"",c=o(e.leftIcon),a=o(e.rightIcon);return n.innerHTML=`${c}${e.label}${a}`,n},args:{label:"axa.fr",href:"https://www.axa.fr",disabled:!1,leftIcon:"",rightIcon:""},argTypes:{leftIcon:{options:["","svg","glyphicon"],control:{type:"select",labels:{"":"(none)",svg:"SVG edit",glyphicon:"Glyphicon edit"}}},rightIcon:{options:["","svg","glyphicon"],control:{type:"select",labels:{"":"(none)",svg:"SVG edit",glyphicon:"Glyphicon edit"}}},disabled:{description:"To disable the link, use `aria-disabled`."}}};var i,s,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.classList.add("af-slash-link");
    link.href = args.href;
    if (args.disabled) {
      link.setAttribute("aria-disabled", "true");
    }
    const getIcon = (type: string) => {
      if (type === "svg") return demoSvg;
      if (type === "glyphicon") return demoGlyphicon;
      return "";
    };
    const leftIcon = getIcon(args.leftIcon);
    const rightIcon = getIcon(args.rightIcon);
    link.innerHTML = \`\${leftIcon}\${args.label}\${rightIcon}\`;
    return link;
  },
  args: {
    label: "axa.fr",
    href: "https://www.axa.fr",
    disabled: false,
    leftIcon: "",
    rightIcon: ""
  },
  argTypes: {
    leftIcon: {
      options: ["", "svg", "glyphicon"],
      control: {
        type: "select",
        labels: {
          "": "(none)",
          svg: "SVG edit",
          glyphicon: "Glyphicon edit"
        }
      }
    },
    rightIcon: {
      options: ["", "svg", "glyphicon"],
      control: {
        type: "select",
        labels: {
          "": "(none)",
          svg: "SVG edit",
          glyphicon: "Glyphicon edit"
        }
      }
    },
    disabled: {
      description: "To disable the link, use \`aria-disabled\`."
    }
  }
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const h=["Link"];export{t as Link,h as __namedExportsOrder,p as default};
