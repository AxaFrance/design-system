const i={title:"Components/Title"},r=["","content"],t={render:e=>{const n=document.createElement(e.heading);return n.innerHTML=e.text,n.className+=["af-title",e.classModifier?`af-title--${e.classModifier}`:""].join(" "),n},args:{text:"Sample Title",heading:"h2",classModifier:""},argTypes:{classModifier:{options:r,control:{type:"select"}},heading:{options:["h2","h3","h4"],control:{type:"radio"}}}};var s,a,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const title = document.createElement(args.heading);
    title.innerHTML = args.text;
    title.className += ["af-title", args.classModifier ? \`af-title--\${args.classModifier}\` : ""].join(" ");
    return title;
  },
  args: {
    text: "Sample Title",
    heading: "h2",
    classModifier: ""
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      }
    },
    heading: {
      options: ["h2", "h3", "h4"],
      control: {
        type: "radio"
      }
    }
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,i as default};
