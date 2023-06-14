(function(m,f,u,_,k,b,v,P,R,I){"use strict";const{View:E,Text:O}=v.General;function w(o){const t=f.findByProps("colors","meta"),a=f.findByStoreName("ThemeStore");return t.meta.resolveSemanticColor(a.theme,o)}function B(o){let{title:t,children:a,padding:i}=o;const e=u.stylesheet.createThemedStyleSheet({mainText:{fontFamily:u.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:w(R.semanticColors.HEADER_SECONDARY)},main:{backgroundColor:w(R.semanticColors.BACKGROUND_TERTIARY),borderRadius:16,overflow:"hidden",flex:1}});return React.createElement(E,{style:{marginHorizontal:16,marginTop:16}},React.createElement(E,{style:{marginBottom:8}},React.createElement(O,{style:e.mainText},t)),React.createElement(E,{style:e.main},i?React.createElement(E,{style:{paddingHorizontal:16,paddingVertical:16}},a):a))}const n=_.storage,{ScrollView:$,Text:d}=v.General,{FormSwitchRow:D,FormIcon:L}=v.Forms;function x(o){let{style:t}=o;const[a,i]=React.useState(!1),e=new Date;e.setSeconds(e.getSeconds()+1,0),setTimeout(function(){return i(!a)},e.getTime()-Date.now());const l=new Date,y=[[4],[19,20],[4,18,2],l.getHours()<12&&[l.getHours()],[l.getHours(),l.getMinutes()],[l.getHours(),l.getMinutes(),l.getSeconds()]].filter(function(p){return!!p}),g=[];let h=-1;for(const[p,S,r]of y){h++;const s=new Date;s.setHours(p,S??0,r||0);let c=[s.getHours().toString(),S!==void 0&&s.getMinutes().toString().padStart(2,"0"),r!==void 0&&s.getSeconds().toString().padStart(2,"0")].filter(function(C){return!!C}).join(":");p<12&&(c+=" AM");const T=F(Math.floor(s.getTime()/1e3).toString(),n.alwaysLong?"T":"t");g.push(n.reqBackticks?React.createElement(d,{style:t.code},c):c),g.push(" \u2014 "),g.push(React.createElement(d,{style:t.timestamp,onPress:function(){return I.showToast(T.full,b.getAssetIDByName("ic_information_24px"))}},T.formatted)),h!==y.length-1&&g.push(`
`)}return React.createElement(React.Fragment,null,...g)}function q(){n.reqBackticks??=!0,n.alwaysLong??=!1,k.useProxy(n);const o=N.theme,t=M.meta.resolveSemanticColor(o,R.semanticColors.TEXT_NORMAL),a=M.meta.resolveSemanticColor(o,R.semanticColors.SPOILER_HIDDEN_BACKGROUND),i=M.meta.resolveSemanticColor(o,R.semanticColors.BACKGROUND_MODIFIER_ACCENT),e=u.stylesheet.createThemedStyleSheet({mainText:{fontFamily:u.constants.Fonts.DISPLAY_NORMAL,includeFontPadding:!1,fontSize:16,color:t},boldText:{fontFamily:u.constants.Fonts.DISPLAY_BOLD,includeFontPadding:!1,color:t},code:{fontFamily:u.constants.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,color:t,backgroundColor:a},timestamp:{fontFamily:u.constants.Fonts.DISPLAY_NORMAL,includeFontPadding:!1,color:t,backgroundColor:i}});return React.createElement($,null,React.createElement(B,{title:"Info",padding:!0},React.createElement(d,{style:e.mainText},"Send a message with a time code (in",React.createElement(d,{style:e.boldText},"HH:MM")," or",React.createElement(d,{style:e.boldText},"HH:MM:SS")," format) and automatically turn it into a timestamp",`

`,React.createElement(x,{style:e}))),React.createElement(B,{title:"Settings"},React.createElement(D,{label:"Require Backticks",subLabel:"Require time to be surrounded by backticks",leading:React.createElement(L,{source:b.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return n.reqBackticks=!n.reqBackticks},value:n.reqBackticks}),React.createElement(D,{label:"Always Long Time",subLabel:["Always display ",React.createElement(d,{style:e.boldText},"HH:MM:SS")," instead of ",React.createElement(d,{style:e.boldText},"HH:MM")],leading:React.createElement(L,{source:b.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return n.alwaysLong=!n.alwaysLong},value:n.alwaysLong})))}const N=f.findByStoreName("ThemeStore"),M=f.findByProps("colors","meta"),A=f.findByProps("sendMessage","receiveMessage"),{parseTimestamp:F}=f.findByProps("parseTimestamp","unparseTimestamp");let H;var G={onLoad:function(){H=P.before("sendMessage",A,function(o){const t=o[1];let a=t?.content;if(typeof a!="string"||typeof t!="object")return;const i=n.reqBackticks?"`":"",e={otN:"[0-9]{1,2}",tN:"[0-9]{2}",abrv:"( ?(AM|PM))"},l=[`(${e.otN}:${e.tN}:${e.tN})${e.abrv}?`,`(${e.otN}:${e.tN})${e.abrv}?`,`(${e.otN})${e.abrv}`].map(function(y){return new RegExp(`${i}${y}${i}`,"gi")});for(const y of l)a=a.replace(y,function(g,h,p,S){let[r,s,c]=h.split(":").map(function(C){return parseInt(C)});if(r<0||r>24||typeof s=="number"&&(s<0||s>60)||typeof c=="number"&&(c<0||c>60))return g;S&&(S.toLowerCase()==="pm"&&r!==12?r+=12:S.toLowerCase()==="am"&&r===12&&(r=0));const T=new Date;return T.setHours(r,s??0,c??0,0),`<t:${Math.floor(T.getTime()/1e3)}:${n.alwaysLong?"T":"t"}>`});t.content=a})},onUnload:function(){return H?.()},settings:q};return m.Colors=M,m.MessageSender=A,m.ThemeStore=N,m.default=G,m.parseTimestamp=F,Object.defineProperty(m,"__esModule",{value:!0}),m})({},vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.storage,vendetta.ui.assets,vendetta.ui.components,vendetta.patcher,vendetta.ui,vendetta.ui.toasts);
