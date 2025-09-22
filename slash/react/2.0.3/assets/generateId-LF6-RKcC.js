let r=1;const n=new WeakMap,t=e=>n.has(e)?`id-${n.get(e)}`:(n.set(e,r),r+=1,t(e));export{t as g};
