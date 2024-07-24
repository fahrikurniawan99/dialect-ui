import{j as t}from"./jsx-runtime-DEdD30eg.js";import{c as d}from"./cn-TWf4uoCM.js";import{r}from"./index-RYns6xqu.js";import"./Button-DkPABJZg.js";function N({title:a,titleId:e,...s},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":e},s),a?r.createElement("title",{id:e},a):null,r.createElement("path",{fillRule:"evenodd",d:"M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",clipRule:"evenodd"}))}const C=r.forwardRef(N);function q({title:a,titleId:e,...s},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":e},s),a?r.createElement("title",{id:e},a):null,r.createElement("path",{d:"M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"}))}const A=r.forwardRef(q),S=({message:a,color:e="main",className:s,onClose:n})=>t.jsxs("div",{className:d("flex w-full max-w-[400px] items-center py-3.5 border px-4 font-medium text-sm rounded-md",s,{"bg-gray-100 text-gray-700 border-gray-300":e==="main","bg-green-100 text-green-700 border-green-300":e==="success","bg-orange-100 text-orange-700 border-orange-300":e==="warning","bg-red-100 text-red-700 border-red-300":e==="error","bg-blue-100 text-blue-700 border-blue-300":e==="info"}),children:[t.jsx(C,{className:"size-5 mr-1"})," ",a," ",t.jsx("button",{className:"ml-auto",children:t.jsx(A,{onClick:n,className:d("size-5",{"text-gray-500":e==="main","text-green-500":e==="success","text-orange-500":e==="warning","text-red-500":e==="error","text-blue-500":e==="info"})})})]});S.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"main" | "success" | "warning" | "error" | "info"',elements:[{name:"literal",value:'"main"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"main"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O={component:S},o={args:{message:"This is an alert!"}},i={args:{message:"This is an alert!",color:"error"}},c={args:{message:"This is an alert!",color:"success"}},l={args:{message:"This is an alert!",color:"info"}},m={args:{message:"This is an alert!",color:"warning"}};var u,g,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    message: "This is an alert!"
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,x,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    message: "This is an alert!",
    color: "error"
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var b,h,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    message: "This is an alert!",
    color: "success"
  }
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var T,y,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "This is an alert!",
    color: "info"
  }
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var j,M,R;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    message: "This is an alert!",
    color: "warning"
  }
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const k=["Main","Error","Success","Info","Warning"];export{i as Error,l as Info,o as Main,c as Success,m as Warning,k as __namedExportsOrder,O as default};
