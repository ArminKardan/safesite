(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{1093:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/android1v2",function(){return t(333)}])},333:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var c=t(5893),s=t(9008),i=t.n(s),o=t(7294),d=t(214),r=t.n(d);function a(){var n=(0,o.useState)({connectstate:"disconnected",apkversion:"0.0"}),e=n[0],s=n[1],d=function(){s(JSON.parse(JSON.stringify(e)))};if("undefined"!=typeof Android&&!t.g.FromJava){window.FromAndroid=function(n){try{var t=JSON.parse(n);"status"==t.type&&(e.connectstate=t.status,e.apkversion=t.version||null,d())}catch(c){}};var a=Android.isvpnconnected();"disconnected"!=a&&"disconnected"==e.connectstate&&(e.connectstate=a,d())}var l="QE";return"stunnel"==e.connectstate&&(l="TLS"),(0,c.jsxs)("div",{className:r().container,children:[(0,c.jsxs)(i(),{children:[(0,c.jsx)("title",{children:"QE Tunnel"}),(0,c.jsx)("meta",{name:"description",content:"QE Tunnel"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsx)("main",{className:r().main,children:(0,c.jsxs)("c-cc",{style:{height:"90vh"},children:["disconnected"==e.connectstate?(0,c.jsx)("f-cc",{class:r().connect,style:{padding:"10px 20px",borderRadius:5},onMouseDown:function(){Android.startwstunnel(JSON.stringify(["ws://87.98.164.191:7240"])),e.connectstate="connecting",d()},children:"Connect by QE"}):null,(0,c.jsx)("br",{}),"disconnected"==e.connectstate?(0,c.jsx)("f-cc",{class:r().connect,style:{padding:"10px 20px",borderRadius:5},onMouseDown:function(){Android.startstunnel(JSON.stringify(["148.113.143.160:8080:mu.tehss.xyz:TLSv1"])),e.connectstate="connecting",d()},children:"Connect by TLS (Beta)"}):null,"connecting"==e.connectstate?(0,c.jsx)("img",{src:"/spin.svg",style:{width:70,height:70}}):null,"connecting"!=e.connectstate&&"disconnected"!=e.connectstate?(0,c.jsxs)("f-cc",{class:r().disconnect,style:{padding:"10px 20px",borderRadius:5},onMouseDown:function(){Android.vpndisconnect(),e.connectstate="disconnected",d()},children:["Disconnect from ",l]}):null,"0.0"!=e.apkversion&&"1.2"!=e.apkversion?(0,c.jsxs)("f-cc",{style:{marginTop:50},onMouseDown:function(){e.apkversion?(Android.toast("لطفا نسخه جدید را از کانال تلگرام دریافت کنید\n@qevpn"),Android.link("tg://resolve?domain=qevpn")):Android.toast("لطفا نسخه جدید را از کانال تلگرام دریافت کنید\n@qevpn")},children:[(0,c.jsx)("img",{src:"/coffee.svg",style:{width:35,height:35,marginTop:-10}}),(0,c.jsx)("img",{src:"/newversion.png",style:{width:170,height:20}})]}):null]})})]})}},214:function(n){n.exports={main:"Home_main__nLjiQ",connect:"Home_connect__lnU7w",disconnect:"Home_disconnect__sogvD",closebtn:"Home_closebtn__PqJs4",minimizebtn:"Home_minimizebtn__IjlJx",avataritem:"Home_avataritem__PzGFD",vitem:"Home_vitem__h40Ls"}},9008:function(n,e,t){n.exports=t(5443)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=1093)}),_N_E=n.O()}]);