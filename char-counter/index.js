(function(p,C,l,h,R,n,u,A,I,d,m){"use strict";const{canUseIncreasedMessageLength:b}=l.findByProps("canUseIncreasedMessageLength");function E(r){return s.commas?r.toString().split("").reverse().map(function(o,e,a){return e%3===0&&a.length>3&&e!==0?`${o},`:o}).reverse().join(""):r.toString()}function w(){return Object.keys(A.plugins).find(function(r){return r.includes("SplitLargeMessages")})?1/0:b()?4e3:2e3}const{Animated:y}=n.ReactNative;function B(r){let{duration:o,children:e,style:a,fade:i}=r;const t=n.React.useRef(new y.Value(i==="in"?0:1)).current;return n.React.useEffect(function(){y.timing(t,{toValue:i==="in"?1:0,duration:o,useNativeDriver:!0}).start()},[t,i]),n.React.createElement(y.View,{style:[a,{opacity:t}]},e)}const{TextStyleSheet:_}=l.findByProps("TextStyleSheet"),{Text:D}=u.General,f=n.stylesheet.createThemedStyleSheet({text:{..._["text-xs/semibold"],backgroundColor:d.semanticColors.BACKGROUND_TERTIARY,borderRadius:8,textAlign:"right",marginRight:8,marginTop:-12,paddingHorizontal:8,paddingVertical:8},normal:{color:d.semanticColors.TEXT_NORMAL},jinkies:{color:d.semanticColors.TEXT_DANGER}});function V(r){let{thing:o}=r;const[e,a]=n.React.useState("");o.runner=function(H){return a(H)};const i=e.length,t=w(),T=f.text.fontSize*2+f.text.paddingVertical;return n.React.createElement(B,{duration:100,style:{flexDirection:"row-reverse",position:"absolute",right:0,top:-T,zIndex:1},fade:i===0?"out":"in"},n.React.createElement(D,{style:{...f.text,color:i<=t?f.normal.color:f.jinkies.color}},E(i),"/",t!==1/0?E(t):"\u221E"))}const{ChatInput:N}=l.findByProps("ChatInput"),{MessagesWrapper:P}=l.findByProps("MessagesWrapper");let c=[];function F(){return c.push(h.after("render",N.prototype,function(r,o){const e=R.findInReactTree(o,function(t){return typeof t?.placeholder=="string"});if(!e?.onChangeText)return;const a=R.findInReactTree(o,function(t){return t?.type?.displayName==="View"&&Array.isArray(t?.props?.children)})?.props?.children;if(!a)return console.log("no children");let i={runner:function(){}};e.onChangeText?c.push(h.after("onChangeText",e,function(t){let[T]=t;return i.runner(T)},!0)):e.onChangeText=function(t){return i.runner(t)},a.unshift(React.createElement(V,{thing:i}))})),c.push(h.after("render",P.prototype,function(r,o){const e=R.findInReactTree(o,function(a){return a?.type?.name==="JumpToPresentButton"});e&&c.push(h.after("type",e,function(a,i){i?.props?.style&&(i.props.style[1].bottom+=32+8)}))})),function(){c.forEach(function(r){return r()}),c=[]}}const{TextStyleSheet:M}=l.findByProps("TextStyleSheet"),{View:g,Text:x}=u.General,{FormRow:$}=u.Forms;function z(r){let{title:o,icon:e,children:a,padding:i}=r;const t=n.stylesheet.createThemedStyleSheet({mainText:{fontFamily:n.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:d.semanticColors.HEADER_SECONDARY},main:{backgroundColor:d.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return n.React.createElement(g,{style:{marginHorizontal:16,marginTop:16}},n.React.createElement(g,{style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},e&&n.React.createElement(g,{style:{marginRight:4}},n.React.createElement($.Icon,{source:e,size:"small"})),n.React.createElement(x,{style:t.mainText},o)),n.React.createElement(g,{style:t.main},i?n.React.createElement(g,{style:{paddingHorizontal:16,paddingVertical:16}},a):a))}var S;(function(r){function o(e){let{children:a}=e;return n.React.createElement(x,{style:M["text-md/bold"]},a)}r.Bold=o})(S||(S={}));const{ScrollView:G}=u.General,{FormSwitchRow:L,FormRow:O}=u.Forms;function j(){return s.commas??=!0,I.useProxy(s),React.createElement(G,null,React.createElement(z,{title:"Settings",icon:m.getAssetIDByName("ic_cog_24px")},React.createElement(L,{label:"Add Thousand Seperators",subLabel:"Adds thousand seperators (1,234,567) to numbers",leading:React.createElement(O.Icon,{source:m.getAssetIDByName("ic_message_edit")}),onValueChange:function(){s.commas=!s.commas},value:s.commas})))}const s=C.storage;let v;var k={onLoad:function(){return v=F()},onUnload:function(){return v?.()},settings:j};return p.default=k,p.vstorage=s,Object.defineProperty(p,"__esModule",{value:!0}),p})({},vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.plugins,vendetta.storage,vendetta.ui,vendetta.ui.assets);
