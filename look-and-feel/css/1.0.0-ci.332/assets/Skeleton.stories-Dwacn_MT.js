const R={title:"Components/Skeleton"},l={className:"af-skeleton",grid:[[12],[12]],ariaBusy:!0,ariaLabel:"Chargement",maxCols:12,colGap:1,rowGap:.5};function m(a,r){const s=document.createElement(a);for(const e in r)r[e]&&s.setAttribute(e,r[e]);return s}const d=({className:a,grid:r,ariaBusy:s,ariaLabel:e,maxCols:E,colGap:b,rowGap:v})=>{const i=m("div",{style:`--max-cols: ${E}; --col-gap: ${b}rem; --row-gap: ${v}rem;`,class:`${a}-container`,"aria-busy":s,"aria-label":e}),D=p=>m("div",{style:`--col-size: ${p};`,class:a});return r.forEach(p=>{p.forEach(M=>{i.appendChild(D(M))})}),i},o={render:d,args:l},n={render:d,args:{...l,grid:[[1,1,1,1,1,1,1,1],[2,2,2,2],[4,4],[8]],maxCols:8}},c={render:d,args:{...l,grid:[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3],[4,4,4],[6,6]],colGap:32}},t={render:d,args:{...l,grid:[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3],[4,4,4],[6,6]],rowGap:32}};var g,u,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render,
  args
}`,...(C=(u=o.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var G,f,x;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render,
  args: {
    ...args,
    grid: [[1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2], [4, 4], [8]],
    maxCols: 8
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,S,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render,
  args: {
    ...args,
    grid: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4], [6, 6]],
    colGap: 32
  }
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,$,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render,
  args: {
    ...args,
    grid: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4], [6, 6]],
    rowGap: 32
  }
}`,...(h=($=t.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};const _=["Default","MaxCols","ColGap","RowGap"];export{c as ColGap,o as Default,n as MaxCols,t as RowGap,_ as __namedExportsOrder,R as default};
