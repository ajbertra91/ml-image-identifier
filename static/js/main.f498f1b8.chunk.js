(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(41)},18:function(e,t,a){},19:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),i=a.n(r),o=(a(18),a(19),a(1)),u=a(10),l=(a(39),a(12)),s=(a(40),a(11)),m=a.n(s),f={width:220,height:200,facingMode:"user"},d=function(e){var t=e.postCaptureCb,a=(Object(l.a)(e,["postCaptureCb"]),c.a.useRef(null)),r=Object(n.useState)(""),i=Object(o.a)(r,2),u=i[0],s=i[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),p=b[0],E=b[1],g=Object(n.useState)(),v=Object(o.a)(g,2),w=v[0],j=v[1],O=Object(n.useState)(),h=Object(o.a)(O,2),C=h[0],N=h[1],S=c.a.useCallback(function(){var e=a.current.getScreenshot();s(e),E(!0)});return Object(n.useEffect)(function(){N(document.defaultView.visualViewport.width),j(.90905*document.defaultView.visualViewport.width)},[]),Object(n.useEffect)(function(){p&&(t(),E(!1))},[p]),c.a.createElement("div",{className:"webcam-container"},c.a.createElement("div",{className:"webcam-img"},""===u?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{audio:!1,height:w,ref:a,screenshotFormat:"image/jpeg",width:C,videoConstraints:f})):c.a.createElement("img",{src:u,alt:"",id:"image"}),c.a.createElement(c.a.Fragment,null,""!==u?c.a.createElement("button",{onClick:function(e){e.preventDefault(),s("")},className:"webcam-btn"},"Retake Image"):c.a.createElement("button",{onClick:function(e){e.preventDefault(),S()},className:"webcam-btn"},"Capture"))))},b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),s=l[0],m=l[1];return c.a.createElement("div",{className:"ImageClassifier"},c.a.createElement(d,{postCaptureCb:function(){m(!0);var e=u.imageClassifier("MobileNet",function(){console.info(e),console.log("Model Loaded!")}),t=document.getElementById("image");e.predict(t,5,function(e,t){return t}).then(function(e){m(!1),r(e)})}}),s?c.a.createElement("div",{className:"loader"}):function(){if(a.length>0)return a.map(function(e,t){var a=e.label,n=e.confidence;return n=Math.floor(1e4*n)/100+"%",c.a.createElement("div",{key:t+""},t+1,". Prediction: ",a," at ",n," ")})}())};var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f498f1b8.chunk.js.map