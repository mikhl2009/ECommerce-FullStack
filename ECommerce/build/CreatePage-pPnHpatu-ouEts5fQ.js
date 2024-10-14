import{h as T,l as b,k as y,bo as $,o as F,u as k,ar as D,r as B,bp as N,s as q,bq as O,br as V,bs as Q,bt as U,j as e,P as p,bb as _,O as z,Q as G,b as R,F as u,U as P,bu as H,B as l,T as M,S as g,W as d,Y as W,ak as Y,d as J,aO as K,b2 as S}from"./strapi-DPo_kHW6.js";import{P as X}from"./Permissions-aSGK8VGG-Bhn0PaFW.js";import{f as Z}from"./index-BbMEfSxX.js";import"./groupBy-BhxUTQ74.js";import"./_baseEach-DxMoPriR.js";import"./index-BRVyLNfZ.js";const ee=T().shape({name:b().required(y.required.id),description:b().required(y.required.id)}),se=()=>{const{id:s}=$(),{toggleNotification:o}=F(),{formatMessage:r}=k(),C=D(),m=B.useRef(null),{trackUsage:h}=N(),{_unstableFormatAPIError:f,_unstableFormatValidationErrors:x}=q(),{isLoading:E,currentData:j}=O({role:s??""}),{currentData:w,isLoading:L}=V({id:s},{skip:!s,refetchOnMountOrArgChange:!0}),[v]=Q(),[A]=U(),I=async(c,a)=>{try{h(s?"willDuplicateRole":"willCreateNewRole");const t=await v(c);if("error"in t){S(t.error)&&t.error.name==="ValidationError"?a.setErrors(x(t.error)):o({type:"danger",message:f(t.error)});return}const{permissionsToSend:n}=m.current?.getPermissions()??{};if(t.data.id&&Array.isArray(n)&&n.length>0){const i=await A({id:t.data.id,permissions:n});if("error"in i){S(i.error)&&i.error.name==="ValidationError"?a.setErrors(x(i.error)):o({type:"danger",message:f(i.error)});return}}o({type:"success",message:r({id:"Settings.roles.created",defaultMessage:"created"})}),C(`../roles/${t.data.id.toString()}`,{replace:!0})}catch{o({type:"danger",message:r({id:"notification.error",defaultMessage:"An error occurred"})})}};return E&&L||!j?e.jsx(p.Loading,{}):e.jsxs(_,{children:[e.jsx(p.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(z,{initialValues:{name:"",description:`${r({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${Z(new Date,"PPP")}`},onSubmit:I,validationSchema:ee,validateOnChange:!1,children:({values:c,errors:a,handleReset:t,handleChange:n,isSubmitting:i})=>e.jsx(G,{children:e.jsxs(e.Fragment,{children:[e.jsx(R.Header,{primaryAction:e.jsxs(u,{gap:2,children:[e.jsx(P,{variant:"secondary",onClick:()=>{t(),m.current?.resetForm()},size:"L",children:r({id:"app.components.Button.reset",defaultMessage:"Reset"})}),e.jsx(P,{type:"submit",loading:i,size:"L",children:r({id:"global.save",defaultMessage:"Save"})})]}),title:r({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:r({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.jsx(H,{})}),e.jsx(R.Content,{children:e.jsxs(u,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(l,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(u,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(u,{justifyContent:"space-between",children:[e.jsxs(l,{children:[e.jsx(l,{children:e.jsx(M,{fontWeight:"bold",children:r({id:"global.details",defaultMessage:"Details"})})}),e.jsx(l,{children:e.jsx(M,{variant:"pi",textColor:"neutral600",children:r({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),e.jsx(re,{children:r({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),e.jsxs(g.Root,{gap:4,children:[e.jsx(g.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{name:"name",error:a.name&&r({id:a.name}),required:!0,children:[e.jsx(d.Label,{children:r({id:"global.name",defaultMessage:"Name"})}),e.jsx(W,{onChange:n,value:c.name}),e.jsx(d.Error,{})]})}),e.jsx(g.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{name:"description",error:a.description&&r({id:a.description}),children:[e.jsx(d.Label,{children:r({id:"global.description",defaultMessage:"Description"})}),e.jsx(Y,{onChange:n,value:c.description})]})})]})]})}),e.jsx(l,{shadow:"filterShadow",hasRadius:!0,children:e.jsx(X,{isFormDisabled:!1,ref:m,permissions:w,layout:j})})]})})]})})})]})},re=J.div`
  border: 1px solid ${({theme:s})=>s.colors.primary200};
  background: ${({theme:s})=>s.colors.primary100};
  padding: ${({theme:s})=>`${s.spaces[2]} ${s.spaces[4]}`};
  color: ${({theme:s})=>s.colors.primary600};
  border-radius: ${({theme:s})=>s.borderRadius};
  font-size: 1.2rem;
  font-weight: bold;
`,de=()=>{const s=K(o=>o.admin_app.permissions.settings?.roles.create);return e.jsx(p.Protect,{permissions:s,children:e.jsx(se,{})})};export{se as CreatePage,de as ProtectedCreatePage};
