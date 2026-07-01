import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-DzNgoTat.js";import{m as n,u as r,w as i}from"./iframe-7wMN1aoF.js";import{t as a}from"./mdx-react-shim-D3wKrnut.js";var o,s=e((()=>{o=`:root {
  /* COLORS *******************************************************************/
  --axablue10: hsl(240deg, 40%, 98%); /* #F7F7FC */
  --axablue20: hsl(240deg, 100%, 99%); /* #F8F8FF */
  --axablue30: hsl(240deg, 100%, 97%); /* #EEEEFF */
  --axablue40: hsl(240deg, 100%, 95%); /* #E4E4FF */
  --axablue50: hsl(240deg, 39%, 64%); /* #8080C7 */
  --axablue60: hsl(240deg, 39%, 53%); /* #5959B6 */
  --axablue70: hsl(240deg, 53%, 42%); /* #3333A5 */
  --axablue80: hsl(240deg, 100%, 28%); /* #00008F */
  --axablue90: hsl(240deg, 100%, 22%); /* #000072 */
  --axablue100: hsl(240deg, 100%, 18%); /* #00005B */
  --cyan10: hsl(195deg, 67%, 98%); /* #F5FBFD */
  --cyan20: hsl(212deg, 45%, 89%); /* #D5E1EF */
  --cyan30: hsl(213deg, 46%, 73%); /* #9CB8DA */
  --cyan40: hsl(213deg, 53%, 46%); /* #3871B5 */
  --bluetarif10: hsl(225deg, 33%, 98%); /* #F7F8FB */
  --bluetarif20: hsl(240deg, 33%, 93%); /* #E7E7F3 */
  --bluetarif30: hsl(238deg, 32%, 81%); /* #BFC0DE */
  --bluetarif40: hsl(238deg, 32%, 53%); /* #5F61AD */
  --purplelighttarif10: hsl(270deg, 29%, 97%); /* #F8F6FA */
  --purplelighttarif20: hsl(268deg, 29%, 91%); /* #E8E2EF */
  --purplelighttarif30: hsl(268deg, 31%, 76%); /* #C1B0D5 */
  --purplelighttarif40: hsl(267deg, 44%, 41%); /* #633A96 */
  --purpletarif10: hsl(260deg, 20%, 97%); /* #F7F6F9 */
  --purpletarif20: hsl(270deg, 20%, 90%); /* #E6E1EB */
  --purpletarif30: hsl(273deg, 18%, 74%); /* #BDB0C8 */
  --purpletarif40: hsl(272deg, 35%, 34%); /* #5A3976 */
  --purpledarktarif10: hsl(300deg, 6%, 97%); /* #F7F6F7 */
  --purpledarktarif20: hsl(285deg, 7%, 89%); /* #E3E0E4 */
  --purpledarktarif30: hsl(273deg, 7%, 70%); /* #B3ADB8 */
  --purpledarktarif40: hsl(274deg, 22%, 25%); /* #41314D */
  --greentarif10: hsl(195deg, 22%, 96%); /* #F4F7F8 */
  --greentarif20: hsl(193deg, 25%, 89%); /* #DCE7EA */
  --greentarif30: hsl(193deg, 25%, 70%); /* #A1BEC6 */
  --greentarif40: hsl(193deg, 68%, 26%); /* #155D70 */
  --green10: hsl(132deg, 100%, 99%); /* #FAFFFB */
  --green20: hsl(145deg, 23%, 61%); /* #85B398 */
  --green30: hsl(145deg, 82%, 27%); /* #0C7D3B */
  --green40: hsl(144deg, 80%, 16%); /* #084922 */
  --red10: hsl(348deg, 100%, 99%); /* #FFFAFB */
  --red20: hsl(350deg, 35%, 80%); /* #DEBBC1 */
  --red30: hsl(350deg, 85%, 42%); /* #C7102E */
  --red40: hsl(353deg, 85%, 23%); /* #6D0915 */
  --orange10: hsl(0deg, 100%, 99%); /* #FFFBFB */
  --orange20: hsl(7deg, 100%, 97%); /* #FFF1EF */
  --orange30: hsl(13deg, 52%, 73%); /* #DEA696 */
  --orange40: hsl(13deg, 61%, 46%); /* #BC4C2D */
  --gray10: hsl(0deg, 0%, 96%); /* #F6F6F6 */
  --gray20: hsl(0deg, 0%, 91%); /* #E9E9E9 */
  --gray30: hsl(0deg, 0%, 90%); /* #E6E6E6 */
  --gray40: hsl(0deg, 0%, 80%); /* #CCCCCC */
  --gray50: hsl(0deg, 0%, 60%); /* #999999 */
  --gray60: hsl(0deg, 0%, 40%); /* #666666 */
  --gray80: hsl(0deg, 0%, 20%); /* #333333 */
  --bluesubtitle: hsl(237deg, 100%, 88%); /* #C1C4FF */
  --black: hsl(0deg, 0%, 0%); /* #000000 */
  --white: hsl(0deg, 0%, 100%); /* #FFFFFF */
  --azur: hsl(239deg, 60%, 47%); /* #3032c1 */

  /* SEMANTIC TOKENS **********************************************************/
  --text-color: var(--gray80);
  --disabled-color: var(--gray40);
  --error-color: var(--red30);
  --input-border-color: var(--gray50);
  --brand-primary: var(--axablue80);
  --warning-color: var(--orange40);
  --help-color: var(--gray60);
  --valid-element-color: var(--green30);
  --inactive-button-background: var(--gray30);
  --inactive-button-border-color: var(--gray50);
  --active-button-border-color: var(--axablue90);
  --error-button-background: var(--red10);
  --button-primary-default: var(--brand-primary);

  /********* Alias Token *********/
  --color-border-default: transparent;
  --color-border-hover: var(--axablue80);
  --color-border-selected: var(--axablue80);

  /********* Font Size *********/
  --font-size-base: 16;

  /* *************************************************************************/

  /* BREAKPOINTS                                                             */

  /* *************************************************************************/

  @custom-media --small screen and (width >= 0);
  @custom-media --tablet-portrait screen and (width >= 576px);
  @custom-media --tablet-landscape screen and (width >= 772px);
  @custom-media --desktop-small screen and (width >= 1016px);
  @custom-media --desktop-medium screen and (width >= 1272px);
  @custom-media --desktop-large screen and (width >= 1432px);
  @custom-media --desktop-xl screen and (width >= 1432px);
}
`}));function c(e){let n={code:`code`,h1:`h1`,p:`p`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{title:`Fondations/Tokens`}),`
`,(0,u.jsx)(n.h1,{id:`tokens-distributeur`,children:`Tokens Distributeur`}),`
`,(0,u.jsxs)(n.p,{children:[`Cette page est alimentee directement depuis
`,(0,u.jsx)(n.code,{children:`packages/canopee-css/src/distributeur/common/tokens.css`}),`.`]}),`
`,d.map(e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h2`,{children:e.title}),e.cssVariables.length>0?(0,u.jsxs)(`table`,{children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`Token`}),(0,u.jsx)(`th`,{children:`Valeur`}),(0,u.jsx)(`th`,{children:`Apercu`})]})}),(0,u.jsx)(`tbody`,{children:e.cssVariables.map(({token:e,value:t,hexValue:n,previewColor:r})=>(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:e})}),(0,u.jsxs)(`td`,{children:[(0,u.jsx)(`code`,{children:t}),n&&n.toLowerCase()!==t.trim().toLowerCase()?(0,u.jsxs)(u.Fragment,{children:[` / `,(0,u.jsxs)(`code`,{children:[`(`,n,`)`]})]}):null]}),(0,u.jsx)(`td`,{children:r?(0,u.jsx)(`span`,{style:{display:`inline-block`,width:`1.5em`,height:`1.5em`,backgroundColor:r,border:`1px solid #ccc`,borderRadius:`2px`},title:e}):`-`})]},e))})]}):null,e.customMedias.length>0?(0,u.jsxs)(`table`,{children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`Token`}),(0,u.jsx)(`th`,{children:`Valeur`})]})}),(0,u.jsx)(`tbody`,{children:e.customMedias.map(({token:e,value:t})=>(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:e})}),(0,u.jsx)(`td`,{children:(0,u.jsx)(`code`,{children:t})})]},e))})]}):null]},e.title))]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u,d;e((()=>{u=i(),a(),n(),s(),d=(()=>{let e=/^\s*(--[a-z0-9-]+)\s*:\s*([^;]+);\s*(?:\/\*\s*(#[a-f0-9]{3,8})\s*\*\/)?/i,t=/^\s*@custom-media\s+(--[a-z0-9-]+)\s+([^;]+);/i,n=/^\s*\/\*+\s*(.*?)\s*\*+\/\s*$/,r=/^(hsl|rgb|rgba|#|oklch|lab|lch|hwb|color\()/i,i=(e,t)=>{let n=e.find(e=>e.title===t);if(n)return n;let r={title:t,cssVariables:[],customMedias:[]};return e.push(r),r},a=o.split(`
`).reduce((r,a)=>{let o=a.match(n);if(o){let[,e]=o,t=e.replace(/\*/g,``).trim();return/[a-z]/i.test(t)&&(r.currentSectionTitle=t,i(r.sections,t)),r}let s=a.match(e);if(s){let[,e,t,n]=s;return i(r.sections,r.currentSectionTitle).cssVariables.push({token:e,value:t.trim(),hexValue:n?n.toUpperCase():null}),r}let c=a.match(t);if(c){let[,e,t]=c;i(r.sections,r.currentSectionTitle).customMedias.push({token:e,value:t.trim()})}return r},{sections:[],currentSectionTitle:`Autres`}),s=a.sections.flatMap(e=>e.cssVariables),c=new Map(s.map(({token:e,value:t,hexValue:n})=>[e,{value:t,hexValue:n}])),l=(e,t=0)=>{let n=e.trim();if(t>8)return null;if(r.test(n))return n;let i=n.match(/^var\((--[a-z0-9-]+)\)$/i);if(i){let[,e]=i,n=c.get(e);return n?l(n.value,t+1):null}return null},u=(e,t,n=0)=>{let r=e.trim();if(n>8)return null;if(t)return t;let i=r.match(/^var\((--[a-z0-9-]+)\)$/i);if(i){let[,e]=i,t=c.get(e);return t?u(t.value,t.hexValue,n+1):null}return null};return a.sections.map(e=>({title:e.title,customMedias:e.customMedias,cssVariables:e.cssVariables.map(({token:e,value:t,hexValue:n})=>({token:e,value:t,hexValue:u(t,n),previewColor:l(t)}))}))})()}))();export{l as default,d as parsedTokens};