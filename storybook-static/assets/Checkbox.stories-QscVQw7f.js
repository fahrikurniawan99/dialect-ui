import{j as c}from"./jsx-runtime-DEdD30eg.js";import{r as e}from"./index-RYns6xqu.js";import{c as l}from"./cn-TWf4uoCM.js";function x({title:r,titleId:a,...o},t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,e.createElement("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const w=e.forwardRef(x);function b({title:r,titleId:a,...o},t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,e.createElement("path",{d:"M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"}))}const v=e.forwardRef(b),g=({icon:r})=>{const[a,o]=e.useState(!1),t=()=>{o(h=>!h)};return c.jsx("div",{onClick:t,className:l("p-[8px] cursor-pointer flex rounded-full w-fit aspect-square transition-all hover:bg-orange-50 active:bg-orange-100"),children:c.jsx("div",{className:l("w-3.5 border rounded cursor-pointer border-orange-500 aspect-square flex justify-center items-center text-white",{"bg-orange-500":a}),children:r||c.jsx(w,{className:l("w-4 aspect-square",{hidden:!a})})})})};g.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""}}};const R={component:g},s={},n={args:{icon:c.jsx(v,{})}};var i,d,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: <MinusIcon />
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const k=["Default","CustomIcon"];export{n as CustomIcon,s as Default,k as __namedExportsOrder,R as default};