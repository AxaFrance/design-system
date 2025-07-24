import{j as e}from"./index-C1mcBe1y.js";/* empty css                    */import{p as g,B as d,q as h,I as v,H as q,r as f,s as C}from"./DropdownCommon-Dj4Eg6q1.js";import{r as b}from"./index-DbaA8R3S.js";import{b as P}from"./account_balance-B8UiBJSK.js";import{f as r}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const M=s=>e.jsx(g,{buttonComponent:d,...s}),x=s=>e.jsx(h,{headingComponent:q,iconComponent:v,...s}),A={title:"Components/Modal/ModalCore",component:f,parameters:{layout:"fullscreen"},args:{onSubmit:r(),onCancel:r(),onClose:r()}},a={decorators:[(s,{args:n})=>{const i=b.useRef(null),u=()=>{var t,o;(t=i.current)==null||t.close(),(o=n.onClose)==null||o.call(n)},p=e.jsxs(e.Fragment,{children:[e.jsx(x,{headingProps:{children:n.title},iconProps:{src:P},onClose:u}),e.jsx(C,{children:n.children}),e.jsx(M,{primaryButtonProps:{children:"Valider"},secondaryButtonProps:{children:"Annuler"}})]});return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:8},children:e.jsx(d,{onClick:()=>{var t;return(t=i.current)==null?void 0:t.showModal()},children:"Open the modal"})}),e.jsx(s,{args:{...n,ref:i,onClose:u,children:p}})]})}],args:{open:!1,title:"Modal title",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"paragraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),e.jsx("p",{className:"paragraph",children:"Donec non quam neque. Nullam fermentum erat in sem fermentum euismod. Phasellus sollicitudin condimentum diam ut euismod. Duis nec bibendum metus. Ut convallis tincidunt risus. Nam vel ultricies augue. Donec malesuada dolor et ligula egestas, sit amet ultrices libero bibendum. Phasellus varius pulvinar lectus, a ultrices risus tempus ut. Aliquam faucibus tortor lorem, et mattis dolor efficitur quis. Pellentesque ipsum nunc, finibus nec velit eget, sodales lobortis leo."}),e.jsx("p",{className:"paragraph",children:"Pellentesque venenatis est quis aliquam tristique. In tincidunt orci ac ipsum vulputate, quis mattis orci commodo. Pellentesque at hendrerit felis, pulvinar porttitor lorem. Sed vulputate quis diam sit amet ultricies. Cras non nisl pharetra, ornare lectus sed, fringilla turpis. Cras molestie velit in enim pretium, id vestibulum est luctus. Ut mattis consequat magna, ac scelerisque massa consequat in. Proin euismod pulvinar congue. Donec dapibus lorem tellus, dapibus dignissim elit condimentum non. Donec luctus nulla a turpis mattis, vehicula posuere quam convallis. Nullam gravida ante rutrum purus efficitur hendrerit. Aenean magna tortor, cursus at ligula vel, aliquet iaculis arcu. Praesent varius, purus eget interdum tempor, magna nisi pretium neque, pharetra viverra leo neque at est."})]})}};var l,m,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [(Story, {
    args
  }) => {
    const ref = useRef<HTMLDialogElement>(null);
    const onClose = () => {
      ref.current?.close();
      args.onClose?.();
    };
    const children = <>
          <ModalCoreHeader headingProps={{
        children: args.title
      }} iconProps={{
        src: bank
      }} onClose={onClose as VoidFunction} />
          <ModalCoreBody>{args.children}</ModalCoreBody>
          <ModalCoreFooter primaryButtonProps={{
        children: "Valider"
      }} secondaryButtonProps={{
        children: "Annuler"
      }} />
        </>;
    return <>
          <div style={{
        padding: 8
      }}>
            <Button onClick={() => ref.current?.showModal()}>
              Open the modal
            </Button>
          </div>
          <Story args={{
        ...{
          ...args,
          ref,
          onClose,
          children
        }
      }} />
        </>;
  }],
  args: {
    open: false,
    title: "Modal title",
    children: <>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          consectetur urna a tellus semper, id elementum ligula fermentum. In
          semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque
          purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam
          dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus
          at nulla fermentum semper. In ipsum urna, tempus vel lorem vel,
          venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut,
          vulputate at elit.
        </p>

        <p className="paragraph">
          Donec non quam neque. Nullam fermentum erat in sem fermentum euismod.
          Phasellus sollicitudin condimentum diam ut euismod. Duis nec bibendum
          metus. Ut convallis tincidunt risus. Nam vel ultricies augue. Donec
          malesuada dolor et ligula egestas, sit amet ultrices libero bibendum.
          Phasellus varius pulvinar lectus, a ultrices risus tempus ut. Aliquam
          faucibus tortor lorem, et mattis dolor efficitur quis. Pellentesque
          ipsum nunc, finibus nec velit eget, sodales lobortis leo.
        </p>
        <p className="paragraph">
          Pellentesque venenatis est quis aliquam tristique. In tincidunt orci
          ac ipsum vulputate, quis mattis orci commodo. Pellentesque at
          hendrerit felis, pulvinar porttitor lorem. Sed vulputate quis diam sit
          amet ultricies. Cras non nisl pharetra, ornare lectus sed, fringilla
          turpis. Cras molestie velit in enim pretium, id vestibulum est luctus.
          Ut mattis consequat magna, ac scelerisque massa consequat in. Proin
          euismod pulvinar congue. Donec dapibus lorem tellus, dapibus dignissim
          elit condimentum non. Donec luctus nulla a turpis mattis, vehicula
          posuere quam convallis. Nullam gravida ante rutrum purus efficitur
          hendrerit. Aenean magna tortor, cursus at ligula vel, aliquet iaculis
          arcu. Praesent varius, purus eget interdum tempor, magna nisi pretium
          neque, pharetra viverra leo neque at est.
        </p>
      </>
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const E=["ModalCore"];export{a as ModalCore,E as __namedExportsOrder,A as default};
