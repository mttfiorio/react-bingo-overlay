(this["webpackJsonpreact-bingo-overlay"]=this["webpackJsonpreact-bingo-overlay"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),a=t.n(c),o=t(6),l=t.n(o),i=(t(13),t(7)),s=t(4),u=["#006EFF","#E96C00","#4F2C5E","#C8922E"],b=["#F9E5B4","#C8DDED","#F9F2F2","#EDDCF4"],j=Object(c.createContext)(),f=function(e){var n="numbers-saved-locally",t=Object(c.useState)([]),a=Object(s.a)(t,2),o=a[0],l=a[1];Object(c.useEffect)((function(){var e=localStorage.getItem(n),t=JSON.parse(e);t&&l(t)}),[]),Object(c.useEffect)((function(){var e=JSON.stringify(o);localStorage.setItem(n,e)}),[o]);var f={balls:o,insertBall:function(e){if(!isNaN(e)&&!(e<0||e>90)){var n=!1;if(o.forEach((function(t){t.number===e&&(n=!0)})),!n){var t=function(){var e=u[Math.floor(Math.random()*u.length)],n=b[Math.floor(Math.random()*b.length)];return console.log(Math.random()*u.length),Math.random()>=.5?[e,n]:[n,e]}(),r={number:e,backgroundColor:t[0],numberColor:t[1]};l((function(e){return[r].concat(Object(i.a)(e))}))}}},removeBall:function(e){l((function(n){return n.filter((function(n){return n.number!==e}))}))}};return Object(r.jsx)(j.Provider,{value:f,children:e.children})},d=j,v=function(e){var n=e.ball,t=e.isFirst,c=e.handleOnClick,a={backgroundColor:n.backgroundColor,color:n.numberColor},o="ball-container";return t&&(o+=" first"),Object(r.jsxs)("div",{className:o,children:[Object(r.jsx)("div",{style:a,className:"back"}),Object(r.jsx)("div",{style:a,className:"bingo-ball",onClick:c,children:Object(r.jsx)("div",{className:"text",children:n.number})},n.number)]})},O=function(){var e=Object(c.useContext)(d);return Object(r.jsx)("div",{className:"display",children:e.balls.map((function(n,t){var c=0===t;return Object(r.jsx)(v,{handleOnClick:function(){return e.removeBall(n.number)},ball:n,isFirst:c})}))})},h=function(){var e=Object(c.useContext)(d),n=Object(c.useState)(""),t=Object(s.a)(n,2),a=t[0],o=t[1];return Object(r.jsxs)("div",{className:"value-input",children:[Object(r.jsx)("input",{value:a,type:"number",onChange:function(e){o(e.target.value)},onKeyPress:function(n){if(13===n.charCode){var t=parseInt(a,10);e.insertBall(t),o("")}}}),Object(r.jsx)("button",{onClick:function(n){var t=parseInt(a,10);e.insertBall(t),o("")},children:"Insert"})]})},m=function(){return Object(r.jsx)("div",{className:"overlay",children:Object(r.jsxs)(f,{children:[Object(r.jsx)(h,{}),Object(r.jsx)(O,{})]})})};var g=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(m,{})})},x=(t(14),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),a(e),o(e)}))});l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.461b9419.chunk.js.map