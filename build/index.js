"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));exports.Dual=function(e){var n="sm"===e.offset?1*e.fontSize/40:"md"===e.offset?1*e.fontSize/30:1*e.fontSize/20,l=function(e){return t.default.createElement("text",{letterSpacing:e.parent.letterSpacing,fontSize:e.parent.fontSize,fontFamily:e.parent.fontFamily,fontStyle:e.parent.fontStyle,fontWeight:e.parent.fontWeight,x:e.x,y:e.y,fill:e.fill},e.parent.content)},f={letterSpacing:e.letterSpacing,fontSize:e.fontSize,fontFamily:e.fontFamily,fontStyle:e.fontStyle,fontWeight:e.fontWeight,content:e.content};return t.default.createElement("div",null,t.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:e.width,height:e.height},e.shadow?t.default.createElement(t.default.Fragment,null,t.default.createElement(l,{parent:f,x:n+n,y:e.fontSize+2*n,fill:e.color[2]}),t.default.createElement(l,{parent:f,x:n,y:e.fontSize,fill:e.color[0]}),t.default.createElement(l,{parent:f,x:n,y:e.fontSize+n,fill:e.color[1]})):t.default.createElement(t.default.Fragment,null,t.default.createElement(l,{parent:f,x:2*n,y:e.fontSize+n,fill:e.color[2]}),t.default.createElement(l,{parent:f,x:0,y:e.fontSize+n,fill:e.color[0]}),t.default.createElement(l,{parent:f,x:n,y:e.fontSize+n,fill:e.color[1]}))))};
//# sourceMappingURL=index.js.map
