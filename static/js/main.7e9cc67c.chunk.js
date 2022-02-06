(this.webpackJsonpcv_react=this.webpackJsonpcv_react||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/photo.178edffc.jpg"},,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/front-end_Alina_Marasca_CV.92e909fb.pdf"},function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){var n={"./icons/css.svg":14,"./icons/cv.svg":15,"./icons/github.svg":16,"./icons/html.svg":17,"./icons/jq.svg":18,"./icons/js.svg":19,"./icons/node.svg":20,"./icons/react.svg":21,"./icons/sass.svg":22,"./photo.jpg":2,"./projects/calc.jpg":23,"./projects/cv.jpg":24,"./projects/glass.jpg":25,"./projects/hp.jpg":26,"./projects/quiz.jpg":27};function c(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=l,e.exports=c,c.id=13},function(e,t,a){e.exports=a.p+"static/media/css.e04ffc80.svg"},function(e,t,a){e.exports=a.p+"static/media/cv.f87a298c.svg"},function(e,t,a){e.exports=a.p+"static/media/github.1acf1264.svg"},function(e,t,a){e.exports=a.p+"static/media/html.ad0af567.svg"},function(e,t,a){e.exports=a.p+"static/media/jq.6a38d7ce.svg"},function(e,t,a){e.exports=a.p+"static/media/js.133bc065.svg"},function(e,t,a){e.exports=a.p+"static/media/node.89ccb090.svg"},function(e,t,a){e.exports=a.p+"static/media/react.8c728ff1.svg"},function(e,t,a){e.exports=a.p+"static/media/sass.461014d2.svg"},function(e,t,a){e.exports=a.p+"static/media/calc.b7b3faa9.jpg"},function(e,t,a){e.exports=a.p+"static/media/cv.3d274d78.jpg"},function(e,t,a){e.exports=a.p+"static/media/glass.d2b03fb6.jpg"},function(e,t,a){e.exports=a.p+"static/media/hp.5be940f9.jpg"},function(e,t,a){e.exports=a.p+"static/media/quiz.e43d23dd.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),i=(a(5),a(3)),s=a(1),o=Object(n.createContext)({openModal:function(){},closeModal:function(){}});var m=function(e){var t=e.children,a=Object(n.useContext)(o).closeModal;return n.React.createElement("div",{className:"backdrop",onClick:function(e){return a()}},n.React.createElement("div",{className:"modal",onClick:function(e){return e.stopPropagation()}},n.React.createElement(s.e,{className:"close-modal",onClick:function(e){return a()}}),n.React.createElement("div",{className:"modal-content"},t)))},u=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],r=c[1],s=Object(n.useState)(null),u=Object(i.a)(s,2),p=u[0],d=u[1],f={openModal:function(e){e.children;d(e),r(!0)},closeModal:function(){r(!1)}};return n.React.createElement(o.Provider,{value:f},l&&n.React.createElement(m,p),t)};var p=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"section-title"},e.title))},d=[{skill:"js",name:"JavaScript"},{skill:"sass",name:"SASS"},{skill:"html",name:"HTML5"},{skill:"css",name:"CSS3"},{skill:"jq",name:"jQuery"},{skill:"node",name:"Node.js"},{skill:"github",name:"GitHub"}],f=[{skill:"react",name:"React"}],E=function(e,t,n,l,r,i){return c.a.createElement("img",{key:i,className:l,src:a(13)("./".concat(e,"/").concat(t,".").concat(n)),alt:r})};var v=function(e,t){return c.a.createElement("div",{className:"skill",key:t},E("icons",e.skill,"svg","icon","".concat(e,"-icon")),c.a.createElement("p",{className:"skill-name"},e.name))};var g=function(){return c.a.createElement("div",{className:"skills"},c.a.createElement(p,{title:"Skills"}),c.a.createElement("div",{className:"practising"},d.map((function(e,t){return v(e,t)}))),c.a.createElement(p,{title:"Learning"}),c.a.createElement("div",{className:"learning"},f.map((function(e,t){return v(e,t)}))))};var h=function(){return c.a.createElement("div",{className:"about"},c.a.createElement(p,{title:"About me"}),c.a.createElement("div",{className:"motivation"},c.a.createElement("p",null,"I am a ",c.a.createElement("span",null,"curiosity driven")," person, who"," ",c.a.createElement("span",null,"enjoys learning")," and using their skills. I"," ",c.a.createElement("span",null,"love challenges"),", I like ",c.a.createElement("span",null,"working in a team")," ","and it's important for me to deliver an ",c.a.createElement("span",null,"efficient product"),".")),c.a.createElement(g,null))},b=[{title:"Silly Quiz",thumbnail:"quiz",url:"https://alinamarasca.github.io/jQuery-quizz/",repo:"https://github.com/alinamarasca/jQuery-quizz",tools:["jq","js","sass","html"]},{title:"My Portfolio",thumbnail:"cv",url:"https://alinamarasca.github.io/CV/",repo:"https://github.com/alinamarasca/CV",tools:["react","js","sass","html"]},{title:"Hand & Paw - HYF final project",thumbnail:"hp",url:"https://handandpaw.herokuapp.com/",repo:"https://github.com/alinamarasca/hand-and-paw",tools:["js","html","css"]}],j=function(e,t){var a=e.title,n=e.thumbnail,l=e.url,r=e.repo,i=e.tools;return c.a.createElement("div",{className:"project-card",key:t},c.a.createElement("div",{className:"preview"},c.a.createElement("div",{className:"control"},c.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(s.c,null)),c.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"}," ",c.a.createElement(s.b,null))),E("projects",n,"jpg","thumbnail","project-thumbnail"),c.a.createElement("h4",{className:"project-name"},a)),c.a.createElement("div",{className:"description"},i.map((function(e,t){return E("icons",e,"svg","icon","".concat(e,"-icon"),t)}))))};var k=function(){return c.a.createElement("div",{className:"projects"},c.a.createElement(p,{title:"Projects"}),c.a.createElement("div",{className:"project-cards"},b.map((function(e,t){return j(e,t)}))))};var N=function(){return c.a.createElement("div",{className:"intro"},c.a.createElement("h1",null,"Hello!"),c.a.createElement("p",null,"My name is ",c.a.createElement("span",null," Alina Marasca."),c.a.createElement("br",null),"I am searching for an ",c.a.createElement("span",null,"internship")," as a"," ",c.a.createElement("span",null," front-end web developer.")))},x=a(2),R=a.n(x),w=a(7),C=a.n(w);var y=function(){return c.a.createElement("div",null,c.a.createElement("form",{id:"contact-form",action:"https://formsubmit.co/alinamarasca@gmail.com",method:"POST"},c.a.createElement("div",{className:"input-control"},c.a.createElement("input",{type:"hidden",name:"_next",value:"https://alinamarasca.github.io/CV"}),c.a.createElement("label",null,"Email:"),c.a.createElement("input",{required:!0,id:"email",type:"email",name:"email"})),c.a.createElement("div",{className:"input-control"},c.a.createElement("input",{type:"hidden",name:"_next",value:"https://alinamarasca.github.io/CV"})," ",c.a.createElement("label",null,"Name:"),c.a.createElement("input",{required:!0,id:"name",type:"name",name:"name"})),c.a.createElement("div",{className:"input-control"},c.a.createElement("input",{type:"hidden",name:"_next",value:"https://alinamarasca.github.io/CV"})," ",c.a.createElement("label",null,"Message:"),c.a.createElement("textarea",{id:"message",name:"message",required:!0})),c.a.createElement("button",{type:"submit",id:"submit",form:"contact-form"},"Send")))};var M=function(){var e=Object(n.useContext)(o).openModal;return n.React.createElement("div",{className:"general-info"},n.React.createElement("div",{className:"photo"},n.React.createElement("img",{src:R.a,alt:"Alina Marasca"})),n.React.createElement("div",{className:"contact"},n.React.createElement(s.a,{onClick:function(t){return e(y()),void e({children:y()})}}),n.React.createElement(s.b,{onClick:function(e){return window.open("https://github.com/alinamarasca","_blank").focus}}),n.React.createElement(s.d,{onClick:function(e){return window.open("https://www.linkedin.com/in/alina-marasca-18b603229/","_blank").focus}})),n.React.createElement("div",{className:"extra-info"},n.React.createElement("p",null,n.React.createElement("span",null,"Location: "),"Gent,Belgium"),n.React.createElement("p",null,n.React.createElement("span",null,"Languages: "),n.React.createElement("br",null),"English ",n.React.createElement("br",null),"Russian ",n.React.createElement("br",null),"Dutch ",n.React.createElement("br",null))),n.React.createElement("div",{className:"cv-link"},n.React.createElement("a",{href:C.a,className:"download-cv",download:!0},"download CV(pdf)")))};var S=function(){return c.a.createElement(u,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement(N,null),c.a.createElement(M,null),c.a.createElement(h,null),c.a.createElement(k,null)))},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),_()}],[[8,1,2]]]);
//# sourceMappingURL=main.7e9cc67c.chunk.js.map