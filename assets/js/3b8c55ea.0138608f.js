"use strict";(self.webpackChunkrapid_hub=self.webpackChunkrapid_hub||[]).push([[6803],{23:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"installation","title":"Installation Guide","description":"Using Docker","source":"@site/docs/installation.md","sourceDirName":".","slug":"/installation","permalink":"/rapid-hub/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation.md","tags":[],"version":"current","frontMatter":{"id":"installation","title":"Installation Guide"},"sidebar":"docs","previous":{"title":"RAPID2 Overview","permalink":"/rapid-hub/docs/"},"next":{"title":"Configuration Guide","permalink":"/rapid-hub/docs/configuration"}}');var s=t(4848),a=t(8453);const l={id:"installation",title:"Installation Guide"},r="Installation Guide",o={},d=[{value:"Using Docker",id:"using-docker",level:2},{value:"Manual Installation (Debian-based Systems)",id:"manual-installation-debian-based-systems",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"installation-guide",children:"Installation Guide"})}),"\n",(0,s.jsx)(n.h2,{id:"using-docker",children:"Using Docker"}),"\n",(0,s.jsx)(n.p,{children:"RAPID2 can be easily installed using Docker:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull chdavid/rapid2\ndocker run --rm -it chdavid/rapid2\n"})}),"\n",(0,s.jsx)(n.h2,{id:"manual-installation-debian-based-systems",children:"Manual Installation (Debian-based Systems)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone the repository:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/c-h-david/rapid2\ncd rapid2/\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y --no-install-recommends $(grep -v -E '(^#|^$)' requirements.apt)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Set up Python environment:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m venv $HOME/venv\nsource $HOME/venv/bin/activate\npip install --no-cache-dir -r requirements.pip\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);