!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"log",value:function(){console.log("Hello")}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("h1",null,"Hello"),o.default.createElement("button",{onClick:this.log},"Hello"))}}]),t}();t.default=u},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";(function(e){var t=l(n(0)),r=n(4),o=l(n(3)),u=l(n(2)),i=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,u.default)();c.get("/bundle.js",function(t,n){n.sendFile(i.default.resolve(e,"../dist/client.bundle.js"))}),c.get("**",function(e,n){var u=(0,r.renderToString)(t.default.createElement(o.default,{req:e}));n.send('\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>React App</title>\n      </head>\n      <body>\n        <div id="root">'+u+'</div>\n        <script src="/bundle.js"><\/script>\n      </body>\n    </html>\n  ')}),c.listen(8e3,function(){return console.log("[server] listening...")})}).call(this,"server")}]);