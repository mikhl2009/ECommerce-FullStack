import{bp as T,u as I,o as v,s as A,cF as N,cJ as D,fa as k,r as w,eV as O,j as s,P as c}from"./strapi-DPo_kHW6.js";import{C as R,T as U}from"./Form-u_kAOhwB-DPL6c8pk.js";import{u as V}from"./hooks-E5u1mcgM-C1TLh3GD.js";import{s as G}from"./objects-mKMAmfec-_JojWgFf.js";import"./useDragAndDrop-DdHgKsqq-BDjrKmCK.js";import"./ComponentIcon-u4bIXTFY-CcsRXpNL.js";import"./FieldTypeIcon-CMlNO8PE-BzufqYgi.js";import"./getEmptyImage-CjqolaH3.js";const H=()=>{const{trackUsage:o}=T(),{formatMessage:n}=I(),{toggleNotification:a}=v(),{_unstableFormatAPIError:u}=A(),{isLoading:F,schema:y,model:L}=N(),{isLoading:S,error:h,list:E,edit:g}=D(),{fieldSizes:x,error:d,isLoading:_,isFetching:j}=k(void 0,{selectFromResult:e=>{const l=Object.entries(e.data?.fieldSizes??{}).reduce((r,[t,{default:i}])=>(r[t]=i,r),{});return{isFetching:e.isFetching,isLoading:e.isLoading,error:e.error,fieldSizes:l}}});w.useEffect(()=>{d&&a({type:"danger",message:u(d)})},[d,u,a]);const C=F||S||_||j,[M]=O(),P=async e=>{try{o("willSaveContentTypeLayout");const l=Object.entries(E.metadatas).reduce((t,[i,{mainField:m,...f}])=>{const z=g.metadatas[i],{__temp_key__:J,size:Q,name:$,...b}=e.layout.flatMap(p=>p.children).find(p=>p.name===i)??{};return t[i]={edit:{...z,...b},list:f},t},{}),r=await M({layouts:{edit:e.layout.map(t=>t.children.reduce((i,{name:m,size:f})=>m!==U?[...i,{name:m,size:f}]:i,[])),list:E.layout.map(t=>t.name)},settings:G(e.settings,"displayName",void 0),metadatas:l,uid:L});"data"in r?(o("didEditEditSettings"),a({type:"success",message:n({id:"notification.success.saved",defaultMessage:"Saved"})})):a({type:"danger",message:u(r.error)})}catch{a({type:"danger",message:n({id:"notification.error",defaultMessage:"An error occurred"})})}};return C?s.jsx(c.Loading,{}):d||h||!y?s.jsx(c.Error,{}):s.jsxs(s.Fragment,{children:[s.jsx(c.Title,{children:`Configure ${g.settings.displayName} Edit View`}),s.jsx(R,{onSubmit:P,attributes:y.attributes,fieldSizes:x,layout:g})]})},te=()=>{const o=V(n=>n.admin_app.permissions.contentManager?.collectionTypesConfigurations);return s.jsx(c.Protect,{permissions:o,children:s.jsx(H,{})})};export{H as EditConfigurationPage,te as ProtectedEditConfigurationPage};
