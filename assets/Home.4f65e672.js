import{d as h,r as i,o as c,b as r,h as e,i as o,w as m,F as p,j as _,f as t,t as l}from"./vendor.8d1bb6f7.js";var u="/assets/android_home_hero.40a4c9a6.png",x="/assets/windows_home_hero.84f8cb6f.png";const b={class:"relative h-[52rem] md:h-[40rem] lg:h-[50rem]"},g={class:"absolute top-0 h-[20rem] lg:h-[25rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-500 flex flex-col justify-center items-center w-full"},f={class:"text-center pb-[3rem] md:pb-[4rem] lg:pb-[8rem] mx-8"},v=e("p",{class:"text-5xl md:text-5xl font-bold text-white"}," Yukino ",-1),w=e("p",{class:"mt-4 text-white italic"},[t(" An extension based "),e("b",null,"Anime"),t(" & "),e("b",null,"Manga"),t(" client. ")],-1),k={class:"mt-6"},y=t(" Get Yukino "),A=e("div",{class:"absolute bottom-0 flex justify-center items-center w-full"},[e("img",{class:"block md:hidden h-[36rem]",src:u,alt:"Yukino App"}),e("img",{class:"rounded-md hidden md:block h-[25rem] lg:h-[33rem]",src:x,alt:"Yukino App"})],-1),j={class:"wx wy"},S=e("hr",null,null,-1),L=e("p",{class:"text-3xl font-bold text-center my-10"},"Features",-1),N={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"},Y={class:"text-center"},B={class:"mt-3 font-bold text-lg"},C={class:"mt-3 text-gray-500"},E=h({setup(F){const a=[{icon:"puzzle-piece",text:"Extensions based",desc:"Handful of extensions to pick and use from."},{icon:"compact-disc",text:"Ad-free",desc:"Never see those annoying ads ever again."},{icon:"heart",text:"Open Source",desc:"Source code available publicly, licensed under GPL-3.0."},{icon:"list",text:"Sync",desc:"Track your progress in MyAnimeList and AniList while you enjoy the show."},{icon:"paint-brush",text:"User Interface",desc:"Simple and consistent user experience across the app with multiple themes."}];return(I,V)=>{const n=i("Icon"),d=i("router-link");return c(),r("div",null,[e("div",b,[e("div",g,[e("div",f,[v,w,e("div",k,[o(d,{class:"backdrop-filter backdrop-blur-lg bg-white/25 hover:bg-white/30 hover:shadow rounded hover:-translate-y-1 transition duration-200 text-white dark:text-white hover:text-white dark:hover:text-white px-3 py-1 inline-block",to:"/download"},{default:m(()=>[o(n,{class:"mr-1 text-sm",icon:"download"}),y]),_:1})])])]),A]),e("div",j,[S,L,e("div",N,[(c(),r(p,null,_(a,s=>e("div",Y,[o(n,{class:"text-indigo-500 text-4xl",icon:s.icon},null,8,["icon"]),e("p",B,l(s.text),1),e("p",C,l(s.desc),1)])),64))])])])}}});export{E as default};