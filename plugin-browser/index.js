(function(R,p,v,i,_,E,o,h,f,F,y){"use strict";const N=i.stylesheet.createThemedStyleSheet({headerStyleIcon:{marginRight:10,tintColor:f.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:f.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:f.semanticColors.TEXT_DANGER}}),B=function(e){let{onPress:r,icon:a,style:s,destructive:d}=e;return React.createElement(i.ReactNative.TouchableOpacity,{onPress:r},React.createElement(i.ReactNative.Image,{style:[s==="header"?N.headerStyleIcon:N.cardStyleIcon,d&&N.destructiveIcon].filter(function(l){return!!l}),source:a}))};function O(e){let{onPress:r,icon:a,style:s}=e;return function(){return React.createElement(B,{onPress:r,icon:a,style:s})}}const{FormRow:P}=h.Forms,T=i.stylesheet.createThemedStyleSheet({card:{backgroundColor:f.semanticColors.BACKGROUND_SECONDARY,borderRadius:5},header:{padding:0,backgroundColor:f.semanticColors.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"}});function U(e){const[r,a]=React.useState(0);return React.createElement(i.ReactNative.View,{style:[T.card,{marginBottom:10}]},React.createElement(P,{style:T.header,label:e.headerLabel,leading:e.headerIcon&&React.createElement(P.Icon,{source:e.headerIcon})}),React.createElement(P,{label:e.descriptionLabel,trailing:React.createElement(i.ReactNative.View,{style:T.actions},e.actions?.().map(function(s){let{icon:d,onPress:l,destructive:m}=s;return React.createElement(B,{icon:d,onPress:function(){l(function(){return a(r+1)})},style:"card",destructive:m??!1})}))}))}const{TextStyleSheet:A}=v.findByProps("TextStyleSheet"),C=i.stylesheet.createThemedStyleSheet({text:{...A["text-md/medium"],color:f.semanticColors.TEXT_NORMAL},link:{...A["text-md/bold"],color:f.semanticColors.TEXT_LINK}}),{Text:b}=h.General;function $(){const e={},[r,a]=React.useState(!1),[s,d]=React.useState({}),[l,m]=React.useState("");React.useEffect(function(){m("")},[]);const g=i.NavigationNative.useNavigation();return!s.parsed&&!r&&(a(!0),E.safeFetch("https://vd-plugins.github.io/proxy/plugins-full.json",{cache:"no-store"}).then(function(c){return c.json()}).then(function(c){d({parsed:c.reverse()}),a(!1)})),g.setOptions({title:"Plugin Browser",headerRight:O({onPress:function(){return!r&&d({parsed:void 0})},icon:o.getAssetIDByName("ic_sync_24px"),style:"header"})}),r||!s.parsed?React.createElement(i.ReactNative.ActivityIndicator,{size:"large",style:{flex:1}}):React.createElement(i.ReactNative.FlatList,{ListHeaderComponent:React.createElement(h.Search,{style:{marginBottom:10},onChangeText:function(c){return m(c.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:s.parsed.filter(function(c){return c.name?.toLowerCase().includes(l)||c.authors?.some(function(t){return t.name?.toLowerCase().includes(l)})||c.description?.toLowerCase().includes(l)}),renderItem:function(c){let{item:t,index:I}=c;return React.createElement(U,{index:I,headerLabel:React.createElement(b,{style:C.text},t.name,t.authors[0]&&" by ",...t.authors.map(function(n,S,u){return React.createElement(React.Fragment,null,React.createElement(b,{onPress:function(){return x(n.id)},style:C.link},n.name),S!==u.length-1&&", ")})),headerIcon:o.getAssetIDByName(t.vendetta.icon),descriptionLabel:t.description,actions:function(){const n=`https://vd-plugins.github.io/proxy/${t.vendetta.original}`,S=F.plugins.plugins[n];return S?[S.manifest.hash!==t.hash&&{icon:o.getAssetIDByName("ic_sync_24px"),onPress:async function(u){if(!e[n]){e[n]=!0;try{await L(n),y.showToast(`Successfully updated ${t.name}.`,o.getAssetIDByName("ic_sync_24px"))}catch{y.showToast(`Failed to update ${t.name}!`,o.getAssetIDByName("Small"))}delete e[n],u()}}},{icon:o.getAssetIDByName("ic_message_delete"),destructive:!0,onPress:async function(u){if(!e[n]){e[n]=!0;try{p.removePlugin(n),y.showToast(`Successfully deleted ${t.name}.`,o.getAssetIDByName("ic_message_delete"))}catch{y.showToast(`Failed to delete ${t.name}!`,o.getAssetIDByName("Small"))}delete e[n],u()}}}].filter(function(u){return!!u}):[{icon:o.getAssetIDByName("ic_download_24px"),onPress:async function(u){if(!e[n]){e[n]=!0;try{await p.installPlugin(n),y.showToast(`Successfully installed ${t.name}.`,o.getAssetIDByName("toast_image_saved"))}catch(Y){y.showToast(Y?.message??`Failed to install ${t.name}!`,o.getAssetIDByName("Small"))}delete e[n],u()}}}]}})}})}const{FormRow:w}=h.Forms;function M(){const e=i.NavigationNative.useNavigation();return React.createElement(h.ErrorBoundary,null,React.createElement(w,{label:"Plugin Browser",leading:React.createElement(w.Icon,{source:o.getAssetIDByName("ic_search_items_24px"),trailing:w.Arrow}),onPress:function(){return e.push("VendettaCustomPage",{render:$})}}))}const{FormSection:G}=h.Forms,k=v.findByName("UserSettingsOverviewWrapper",!1);function V(){let e=[],r=_.after("default",k,function(a,s){r();const d=E.findInReactTree(s.props.children,function(l){return l.type&&l.type.name==="UserSettingsOverview"});e.push(_.after("render",d.type.prototype,function(l,m){let{props:{children:g}}=m;const c=[i.i18n.Messages.BILLING_SETTINGS,i.i18n.Messages.PREMIUM_SETTINGS];g=E.findInReactTree(g,function(I){return I.children[1].type===G}).children;const t=g.findIndex(function(I){return c.includes(I?.props.label)});g.splice(t===-1?4:t,0,React.createElement(M,null))}))},!0);return function(){return e.forEach(function(a){return a()})}}const j=v.findByStoreName("UserStore"),{showUserProfile:H}=v.findByProps("showUserProfile"),{fetchProfile:K}=v.findByProps("fetchProfile");async function L(e){const r=e.enabled;for(let a=0;a<2;a++)r&&p.stopPlugin(e.id,!1),await p.fetchPlugin(e.id),r&&await p.startPlugin(e.id)}async function x(e){j.getUser(e)||await K(e),H({userId:e})}let D;var X={onLoad:function(){return D=V()},onUnload:function(){return D?.()}};return R.default=X,R.openProfile=x,R.refetchPlugin=L,Object.defineProperty(R,"__esModule",{value:!0}),R})({},vendetta.plugins,vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.utils,vendetta.ui.assets,vendetta.ui.components,vendetta.ui,vendetta,vendetta.ui.toasts);
