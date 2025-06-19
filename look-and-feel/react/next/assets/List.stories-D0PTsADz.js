import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./DropdownCommon-DE7SQs8a.js";import{S as r}from"./constants-CYR1qehH.js";import"./index-DuZrfDUH.js";import{C as m}from"./ContentItemMonoLF-tbws9YN1.js";import{C as s}from"./ClickItem-DKlqy5_5.js";import{L as a}from"./List-TPGCoA8K.js";const p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24.75%200-42.37-17.63Q201-155.25%20201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0%2024-18%2042t-42%2018H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166%200h60v-399h-60v399ZM261-750v570-570Z'/%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M430-82q-72-9-134.5-43t-108-86.5Q142-264%20116-332.5T90-480q0-88%2041.5-168T243-790H121v-60h229v229h-60v-129q-64%2051-102%20121.5T150-480q0%20132%2080%20225.5T430-143v61Zm-7-228L268-465l42-42%20113%20113%20227-227%2042%2042-269%20269Zm187%20200v-229h60v129q64-52%20102-122t38-148q0-132-80-225.5T530-817v-61q146%2018%20243%20129t97%20269q0%2088-41.5%20168T717-170h122v60H610Z'/%3e%3c/svg%3e",h={title:"Components/List",component:a},t={name:"List",render:({classModifier:l,...c})=>e.jsx(a,{classModifier:l.join(" "),...c}),args:{children:[e.jsx(m,{title:"Prénom NOM",subtitle:"nom.prénom@mail.fr",type:"stick"},0),e.jsx(s,{icon:e.jsx(r,{src:d}),children:"Modifier le profil"},1),e.jsx(s,{icon:e.jsx(r,{src:p}),children:"Supprimer le profil"},2)],classModifier:["first-separator-full-width"]},argTypes:{classModifier:{options:["large","extra-padding","first-separator-full-width"],control:{type:"multi-select"},defaultValue:[]}}};var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "List",
  render: ({
    classModifier,
    ...args
  }) => <List classModifier={classModifier.join(" ")} {...args} />,
  args: {
    children: [<ContentItemMono key={0} title="Prénom NOM" subtitle="nom.prénom@mail.fr" type="stick" />, <ClickItem key={1} icon={<Svg src={publishedWithChangesIcon} />}>
        Modifier le profil
      </ClickItem>, <ClickItem key={2} icon={<Svg src={trashIcon} />}>
        Supprimer le profil
      </ClickItem>],
    classModifier: ["first-separator-full-width"]
  },
  argTypes: {
    classModifier: {
      options: ["large", "extra-padding", "first-separator-full-width"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const f=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{t as D,C as L};
