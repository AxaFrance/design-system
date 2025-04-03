import{d as l}from"./utils-DJsnTcQJ.js";const h={title:"Components/Skeleton"},o={className:"af-skeleton",grid:[[12],[12]],ariaBusy:!0,ariaLabel:"Chargement",maxCols:12,colGap:16,rowGap:8},n=({className:c,grid:b,ariaBusy:$,ariaLabel:k,maxCols:y,colGap:v,rowGap:z})=>{const D=t=>l([],{style:`--col-size: ${t};`,class:c}),M=b.map(t=>t.map(R=>D(R)));return l([...M.flat()],{style:`--max-cols: ${y}; --col-gap: calc(${v} / var(--font-size-base) * 1rem); --row-gap: calc(${z} / var(--font-size-base) * 1rem);`,class:`${c}-container`,"aria-busy":$,"aria-label":k})},r={render:n,args:o},a={render:n,args:{...o,grid:[[1,1,1,1,1,1,1,1],[2,2,2,2],[4,4],[8]],maxCols:8}},e={render:n,args:{...o,grid:[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3],[4,4,4],[6,6]],colGap:32}},s={render:n,args:{...o,grid:[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3],[4,4,4],[6,6]],rowGap:32}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render,
  args
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var i,g,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render,
  args: {
    ...args,
    grid: [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2], [4, 4], [8]],
    maxCols: 8
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var G,C,f;e.parameters={...e.parameters,docs:{...(G=e.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render,
  args: {
    ...args,
    grid: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4], [6, 6]],
    colGap: 32
  }
}`,...(f=(C=e.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,w,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render,
  args: {
    ...args,
    grid: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4], [6, 6]],
    rowGap: 32
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const B=["Default","MaxCols","ColGap","RowGap"];export{e as ColGap,r as Default,a as MaxCols,s as RowGap,B as __namedExportsOrder,h as default};
