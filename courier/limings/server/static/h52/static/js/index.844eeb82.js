(function(n){function e(e){for(var i,r,u=e[0],c=e[1],d=e[2],s=0,g=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&g.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);p&&p(e);while(g.length)g.shift()();return t.push.apply(t,d||[]),o()}function o(){for(var n,e=0;e<t.length;e++){for(var o=t[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(i=!1)}i&&(t.splice(e--,1),n=u(u.s=o[0]))}return n}var i={},a={index:0},t=[];function r(n){return u.p+"static/js/"+({"pages-account-account~pages-index-index~pages-login-index~pages-oderinfo-oderinfo":"pages-account-account~pages-index-index~pages-login-index~pages-oderinfo-oderinfo","pages-account-account~pages-index-index":"pages-account-account~pages-index-index","pages-account-account":"pages-account-account","pages-index-index~pages-login-index~pages-oderinfo-oderinfo":"pages-index-index~pages-login-index~pages-oderinfo-oderinfo","pages-index-index":"pages-index-index","pages-login-index":"pages-login-index","pages-oderinfo-oderinfo":"pages-oderinfo-oderinfo"}[n]||n)+"."+{"pages-account-account~pages-index-index~pages-login-index~pages-oderinfo-oderinfo":"1e13650e","pages-account-account~pages-index-index":"698c2635","pages-account-account":"9e5886c0","pages-index-index~pages-login-index~pages-oderinfo-oderinfo":"2b4d3714","pages-index-index":"5109b406","pages-login-index":"4c4b4f86","pages-oderinfo-oderinfo":"507a69b2"}[n]+".js"}function u(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(n){var e=[],o=a[n];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,i){o=a[n]=[e,i]}));e.push(o[2]=i);var t,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=r(n);var d=new Error;t=function(e){c.onerror=c.onload=null,clearTimeout(s);var o=a[n];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),t=e&&e.target&&e.target.src;d.message="Loading chunk "+n+" failed.\n("+i+": "+t+")",d.name="ChunkLoadError",d.type=i,d.request=t,o[1](d)}a[n]=void 0}};var s=setTimeout((function(){t({type:"timeout",target:c})}),12e4);c.onerror=c.onload=t,document.head.appendChild(c)}return Promise.all(e)},u.m=n,u.c=i,u.d=function(n,e,o){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)u.d(o,i,function(e){return n[e]}.bind(null,i));return o},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="./",u.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var p=d;t.push([0,"chunk-vendors"]),o()})({0:function(n,e,o){n.exports=o("5abc")},"11a0":function(n,e,o){"use strict";o.r(e);var i=o("a96e"),a=o("8931");for(var t in a)"default"!==t&&function(n){o.d(e,n,(function(){return a[n]}))}(t);o("924d");var r,u=o("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},"3a35":function(n,e,o){var i=o("24fb");e=i(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),n.exports=e},"3f1d":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=i},"409c":function(n,e,o){"use strict";(function(n){var e=o("4ea4"),i=e(o("e143"));n["____D601200____"]=!0,delete n["____D601200____"],n.__uniConfig={easycom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"快递送货",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},n.__uniConfig.compilerVersion="3.2.3",n.__uniConfig.router={mode:"hash",base:"./"},n.__uniConfig.publicPath="./",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=o.e,i.default.component("pages-login-index",(function(n){var e={component:Promise.all([o.e("pages-account-account~pages-index-index~pages-login-index~pages-oderinfo-oderinfo"),o.e("pages-index-index~pages-login-index~pages-oderinfo-oderinfo"),o.e("pages-login-index")]).then(function(){return n(o("bdc3"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-index-index",(function(n){var e={component:Promise.all([o.e("pages-account-account~pages-index-index~pages-login-index~pages-oderinfo-oderinfo"),o.e("pages-index-index~pages-login-index~pages-oderinfo-oderinfo"),o.e("pages-account-account~pages-index-index"),o.e("pages-index-index")]).then(function(){return n(o("93c7"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-oderinfo-oderinfo",(function(n){var e={component:Promise.all([o.e("pages-account-account~pages-index-index~pages-login-index~pages-oderinfo-oderinfo"),o.e("pages-index-index~pages-login-index~pages-oderinfo-oderinfo"),o.e("pages-oderinfo-oderinfo")]).then(function(){return n(o("90b8"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),i.default.component("pages-account-account",(function(n){var e={component:Promise.all([o.e("pages-account-account~pages-index-index~pages-login-index~pages-oderinfo-oderinfo"),o.e("pages-account-account~pages-index-index"),o.e("pages-account-account")]).then(function(){return n(o("a592"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/login/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!0})},[n("pages-login-index",{slot:"page"})])}},meta:{id:1,name:"pages-login-index",isNVue:!1,maxWidth:0,pagePath:"pages/login/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"快递送货"})},[n("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",windowTop:44}},{path:"/pages/oderinfo/oderinfo",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[n("pages-oderinfo-oderinfo",{slot:"page"})])}},meta:{name:"pages-oderinfo-oderinfo",isNVue:!1,maxWidth:0,pagePath:"pages/oderinfo/oderinfo",windowTop:44}},{path:"/pages/account/account",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"历史订单",enablePullDownRefresh:!1})},[n("pages-account-account",{slot:"page"})])}},meta:{name:"pages-account-account",isNVue:!1,maxWidth:0,pagePath:"pages/account/account",windowTop:44}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,o("c8ba"))},"5abc":function(n,e,o){"use strict";var i=o("4ea4"),a=i(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("409c"),o("1c31");var t=i(o("e143")),r=i(o("11a0")),u=i(o("5dc6")),c=i(o("b573"));t.default.config.productionTip=!1,r.default.mpType="app",t.default.prototype.$store=c.default,t.default.prototype.$beseURL="http://8.140.56.185:8085",t.default.use(u.default);var d=new t.default((0,a.default)({},r.default));d.$mount()},8931:function(n,e,o){"use strict";o.r(e);var i=o("3f1d"),a=o.n(i);for(var t in i)"default"!==t&&function(n){o.d(e,n,(function(){return i[n]}))}(t);e["default"]=a.a},"924d":function(n,e,o){"use strict";var i=o("ef34"),a=o.n(i);a.a},a96e:function(n,e,o){"use strict";var i;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return t})),o.d(e,"a",(function(){return i}));var a=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},t=[]},b573:function(n,e,o){"use strict";var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(o("e143")),t=i(o("2f62"));a.default.use(t.default);var r=new t.default.Store({state:{phone:""},mutations:{chnagephone:function(n,e){n.phone=e}},actions:{}}),u=r;e.default=u},ef34:function(n,e,o){var i=o("3a35");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=o("4f06").default;a("3e94d4e6",i,!0,{sourceMap:!1,shadowMode:!1})}});