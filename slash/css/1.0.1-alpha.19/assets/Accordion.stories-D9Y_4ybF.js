const t={title:"Components/Accordion"},r=["","light"],n={render:({classModifier:a})=>{const e=document.createElement("div");return e.innerHTML=`
  <div class="af-accordion ${a?`af-accordion--${a}`:""}">
    <details class="af-accordion__details" open="">
      <summary class="af-accordion__item-header" id="t1">
        <h3 class="af-accordion__item-title">About us</h3>
        <span class="glyphicon glyphicon-menu-down up"></span>
      </summary>
      <div
        class="af-accordion__content"
        id=":r2:"
      >
          <p>AXA is a French multinational insurance firm headquartered in the 8th arrondissement of Pars that engages in global insurance, investment management, and other financial services.</p>

          <p>The AXA Group operates primarily in Western Europe, North America, the Asia Pacific region, and the Middle East, with a presence also in Africa. AXA is a conglomerate of independently run businesses, operated according to the laws and regulations of many different countries.</p>

          <p>AXA's main business is insurance, which includes life, health, and other types of insurance. The company also provides investment management services and has a strong presence in the asset management industry.</p>
        </div>
    </details>
    <details class="af-accordion__details">
      <summary class="af-accordion__item-header" id="t2">
        <h3 class="af-accordion__item-title">About insurance</h3>
        <span class="glyphicon glyphicon-menu-down"></span>
      </summary>
      <div
        class="af-accordion__content"
        id=":r4:"
      >
        <div class="af-accordion__block">Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss.</div>
      </div>
    </details>
  </div>
`,e},args:{classModifier:""},argTypes:{classModifier:{options:r,control:{type:"select",labels:{"":"(none)",light:"light"}}}}};var s,i,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    classModifier
  }) => {
    const accordion = document.createElement("div");
    accordion.innerHTML = \`
  <div class="af-accordion \${classModifier ? \`af-accordion--\${classModifier}\` : ""}">
    <details class="af-accordion__details" open="">
      <summary class="af-accordion__item-header" id="t1">
        <h3 class="af-accordion__item-title">About us</h3>
        <span class="glyphicon glyphicon-menu-down up"></span>
      </summary>
      <div
        class="af-accordion__content"
        id=":r2:"
      >
          <p>AXA is a French multinational insurance firm headquartered in the 8th arrondissement of Pars that engages in global insurance, investment management, and other financial services.</p>

          <p>The AXA Group operates primarily in Western Europe, North America, the Asia Pacific region, and the Middle East, with a presence also in Africa. AXA is a conglomerate of independently run businesses, operated according to the laws and regulations of many different countries.</p>

          <p>AXA's main business is insurance, which includes life, health, and other types of insurance. The company also provides investment management services and has a strong presence in the asset management industry.</p>
        </div>
    </details>
    <details class="af-accordion__details">
      <summary class="af-accordion__item-header" id="t2">
        <h3 class="af-accordion__item-title">About insurance</h3>
        <span class="glyphicon glyphicon-menu-down"></span>
      </summary>
      <div
        class="af-accordion__content"
        id=":r4:"
      >
        <div class="af-accordion__block">Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss.</div>
      </div>
    </details>
  </div>
\`;
    return accordion;
  },
  args: {
    classModifier: ""
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select",
        labels: {
          "": "(none)",
          light: "light"
        }
      }
    }
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const c=["Accordion"];export{n as Accordion,c as __namedExportsOrder,t as default};