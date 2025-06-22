import{_ as st}from"./Breadcrumb.vue_vue_type_script_setup_true_lang-BkbdieQ1.js";import{_ as h}from"./Card.vue_vue_type_script_setup_true_lang-CiSVOWRc.js";import{A as P}from"./api.service-OTsvCDXe.js";import{_ as g}from"./Icon.vue_vue_type_script_setup_true_lang-CBG9LbS8.js";import{B as A,R as Y,d as N,S as J,m as f,U as nt,g as ot,V as K,W as S,n as X,q as M,a as L,p as B,o as d,w as b,X as z,C as rt,Y as j,_ as it,a0 as lt,j as D,a1 as ct,a2 as W,c as v,t as O,y as o,u as F,E as Z,v as $,b as l,z as m,a3 as ut,a4 as dt,H as bt,x as w,F as ft,A as pt,P as ht,M as U,K as V}from"./index-DHogPU8f.js";import{_ as vt}from"./DataTable.vue_vue_type_script_setup_true_lang-CxGogrNQ.js";import{s as gt,a as mt,_ as xt}from"./DatePicker.vue_vue_type_script_setup_true_lang-DoUUHSHn.js";import"./auth.service-CbCeYD79.js";import"./index-CFjhT2rJ.js";import"./Animation-DgD7q7Oh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Checkbox.vue_vue_type_script_setup_true_lang-rJlw09Tb.js";import"./InputGroup.vue_vue_type_script_setup_true_lang-D4KDqEfN.js";import"./index-DwZSe5ZM.js";import"./index-BUeh_XJX.js";import"./index-tpF7vEZ7.js";import"./index-pDlUpPnY.js";import"./index-_ZOHlRre.js";var yt={root:function(e){var a=e.instance,n=e.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":n.disabled}]}},wt=A.extend({name:"tab",classes:yt}),$t={name:"BaseTab",extends:N,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:wt,provide:function(){return{$pcTab:this,$parentInstance:this}}},G={name:"Tab",extends:$t,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var a=this.findNextTab(e.currentTarget);a?this.changeFocusedTab(e,a):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var a=this.findPrevTab(e.currentTarget);a?this.changeFocusedTab(e,a):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var a=this.findFirstTab();this.changeFocusedTab(e,a),e.preventDefault()},onEndKey:function(e){var a=this.findLastTab();this.changeFocusedTab(e,a),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=a?e:e.nextElementSibling;return n?S(n,"data-p-disabled")||S(n,"data-pc-section")==="activebar"?this.findNextTab(n):K(n,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=a?e:e.previousElementSibling;return n?S(n,"data-p-disabled")||S(n,"data-pc-section")==="activebar"?this.findPrevTab(n):K(n,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,a){ot(a),this.scrollInView(a)},scrollInView:function(e){var a;e==null||(a=e.scrollIntoView)===null||a===void 0||a.call(e,{block:"nearest"})}},computed:{active:function(){var e;return nt((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return f(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return J({active:this.active})}},directives:{ripple:Y}};function _t(t,e,a,n,r,s){var u=X("ripple");return t.asChild?L(t.$slots,"default",{key:1,dataP:s.dataP,class:rt(t.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs,onClick:s.onClick}):M((d(),B(z(t.as),f({key:0,class:t.cx("root"),"data-p":s.dataP,onClick:s.onClick},s.attrs),{default:b(function(){return[L(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[u]])}G.render=_t;var kt={root:"p-tablist",content:function(e){var a=e.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Pt=A.extend({name:"tablist",classes:kt}),Tt={name:"BaseTabList",extends:N,props:{},style:Pt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},Q={name:"TabList",extends:Tt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,a=this.getVisibleButtonWidths(),n=j(e)-a,r=Math.abs(e.scrollLeft),s=n*.8,u=r-s,x=Math.max(u,0);e.scrollLeft=W(e)?-1*x:x},onNextButtonClick:function(){var e=this.$refs.content,a=this.getVisibleButtonWidths(),n=j(e)-a,r=Math.abs(e.scrollLeft),s=n*.8,u=r+s,x=e.scrollWidth-n,y=Math.min(u,x);e.scrollLeft=W(e)?-1*y:y},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,a=e.content,n=e.inkbar,r=e.tabs;if(n){var s=K(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(n.style.height=lt(s)+"px",n.style.top=D(s).top-D(r).top+"px"):(n.style.width=ct(s)+"px",n.style.left=D(s).left-D(r).left+"px")}},updateButtonState:function(){var e=this.$refs,a=e.list,n=e.content,r=n.scrollTop,s=n.scrollWidth,u=n.scrollHeight,x=n.offsetWidth,y=n.offsetHeight,_=Math.abs(n.scrollLeft),k=[j(n),it(n)],I=k[0],E=k[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=a.offsetHeight>=y&&parseInt(r)!==u-E):(this.isPrevButtonEnabled=_!==0,this.isNextButtonEnabled=a.offsetWidth>=x&&parseInt(_)!==s-I)},getVisibleButtonWidths:function(){var e=this.$refs,a=e.prevButton,n=e.nextButton,r=0;return this.showNavigators&&(r=((a==null?void 0:a.offsetWidth)||0)+((n==null?void 0:n.offsetWidth)||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return J({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:mt,ChevronRightIcon:gt},directives:{ripple:Y}},Bt=["data-p"],Ct=["aria-label","tabindex"],St=["data-p"],Dt=["aria-orientation"],Lt=["aria-label","tabindex"];function Ot(t,e,a,n,r,s){var u=X("ripple");return d(),v("div",f({ref:"list",class:t.cx("root"),"data-p":s.dataP},t.ptmi("root")),[s.showNavigators&&r.isPrevButtonEnabled?M((d(),v("button",f({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":s.prevButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return s.onPrevButtonClick&&s.onPrevButtonClick.apply(s,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(d(),B(z(s.templates.previcon||"ChevronLeftIcon"),f({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Ct)),[[u]]):O("",!0),o("div",f({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)}),"data-p":s.dataP},t.ptm("content")),[o("div",f({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":s.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[L(t.$slots,"default"),o("span",f({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Dt)],16,St),s.showNavigators&&r.isNextButtonEnabled?M((d(),v("button",f({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":s.nextButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return s.onNextButtonClick&&s.onNextButtonClick.apply(s,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(d(),B(z(s.templates.nexticon||"ChevronRightIcon"),f({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Lt)),[[u]]):O("",!0)],16,Bt)}Q.render=Ot;var At=({dt:t})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${t("tabs.tablist.background")};
    border-style: solid;
    border-color: ${t("tabs.tablist.border.color")};
    border-width: ${t("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    inset-block-start: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("tabs.nav.button.background")};
    color: ${t("tabs.nav.button.color")};
    width: ${t("tabs.nav.button.width")};
    transition: color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    box-shadow: ${t("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.nav.button.focus.ring.shadow")};
    outline: ${t("tabs.nav.button.focus.ring.width")} ${t("tabs.nav.button.focus.ring.style")} ${t("tabs.nav.button.focus.ring.color")};
    outline-offset: ${t("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${t("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    inset-inline-start: 0;
}

.p-tablist-next-button {
    inset-inline-end: 0;
}

.p-tablist-prev-button:dir(rtl),
.p-tablist-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${t("tabs.tab.gap")};
    background: ${t("tabs.tab.background")};
    border-width: ${t("tabs.tab.border.width")};
    border-color: ${t("tabs.tab.border.color")};
    color: ${t("tabs.tab.color")};
    padding: ${t("tabs.tab.padding")};
    font-weight: ${t("tabs.tab.font.weight")};
    transition: background ${t("tabs.transition.duration")}, border-color ${t("tabs.transition.duration")}, color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    margin: ${t("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.tab.focus.ring.shadow")};
    outline: ${t("tabs.tab.focus.ring.width")} ${t("tabs.tab.focus.ring.style")} ${t("tabs.tab.focus.ring.color")};
    outline-offset: ${t("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${t("tabs.tab.hover.background")};
    border-color: ${t("tabs.tab.hover.border.color")};
    color: ${t("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${t("tabs.tab.active.background")};
    border-color: ${t("tabs.tab.active.border.color")};
    color: ${t("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${t("tabs.tabpanel.background")};
    color: ${t("tabs.tabpanel.color")};
    padding: ${t("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${t("tabs.tabpanel.focus.ring.shadow")};
    outline: ${t("tabs.tabpanel.focus.ring.width")} ${t("tabs.tabpanel.focus.ring.style")} ${t("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${t("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: ${t("tabs.active.bar.bottom")};
    height: ${t("tabs.active.bar.height")};
    background: ${t("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,Nt={root:function(e){var a=e.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},It=A.extend({name:"tabs",style:At,classes:Nt}),Et={name:"BaseTabs",extends:N,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:It,provide:function(){return{$pcTabs:this,$parentInstance:this}}},tt={name:"Tabs",extends:Et,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function jt(t,e,a,n,r,s){return d(),v("div",f({class:t.cx("root")},t.ptmi("root")),[L(t.$slots,"default")],16)}tt.render=jt;const T={getDashboardTotalData:()=>P.get("dashboard/total-data"),getDashboardLowStockData:()=>P.get("dashboard/low-stock"),getDashboardChartDataProductIn:t=>P.get("dashboard/chart/stock-in",{params:t}),getDashboardChartDataProductOut:t=>P.get("dashboard/chart/stock-out",{params:t}),getDashboardChartDataProductMutation:t=>P.get("dashboard/chart/stock-mutation",{params:t})},Vt={class:"w-full text-xs"},Kt={class:"grid grid-rows-2 gap-3"},Mt={class:"grid sm:grid-cols-4 gap-3"},zt={class:"flex flex-row gap-2 justify-between"},Ft={class:"flex flex-col gap-2 text-black"},Rt={class:"font-bold md:text-lg text-sm"},Wt={class:"flex items-center justify-center"},Ut={class:"flex flex-row gap-2 justify-between"},Ht={class:"flex flex-col gap-2 text-black"},qt={class:"font-bold md:text-lg text-sm"},Yt={class:"flex items-center justify-center"},Jt={class:"flex flex-row gap-2 justify-between"},Xt={class:"flex flex-col gap-2 text-black"},Zt={class:"font-bold md:text-lg text-sm"},Gt={class:"flex items-center justify-center"},Qt={class:"flex flex-row gap-2 justify-between"},te={class:"flex flex-col gap-2 text-black"},ee={class:"font-bold md:text-lg text-sm"},ae={class:"flex items-center justify-center"},se={class:"grid sm:grid-cols-4 gap-3"},ne={class:"flex flex-row gap-2 justify-between"},oe={class:"flex flex-col gap-2 text-black"},re={class:"font-bold md:text-lg text-sm"},ie={class:"flex items-center justify-center"},le={class:"flex flex-row gap-2 justify-between"},ce={class:"flex flex-col gap-2 text-black"},ue={class:"font-bold md:text-lg text-sm"},de={class:"flex items-center justify-center"},be={class:"flex flex-row gap-2 justify-between"},fe={class:"flex flex-col gap-2 text-black"},pe={class:"font-bold md:text-lg text-sm"},he={class:"flex items-center justify-center"},ve={class:"flex flex-row gap-2 justify-between"},ge={class:"flex flex-col gap-2 text-black"},me={class:"font-bold md:text-lg text-sm"},xe={class:"flex items-center justify-center"},ye=F({__name:"DashboardTotalData",setup(t){Z(()=>{a()});const e=$(),a=async()=>{try{const{data:n}=await T.getDashboardTotalData();e.value=n.data}catch(n){console.error("Error fetching dashboard total data:",n)}};return(n,r)=>(d(),v("div",Vt,[o("div",Kt,[o("div",Mt,[l(h,{class:"w-full"},{default:b(()=>{var s;return[o("div",zt,[o("div",Ft,[r[0]||(r[0]=o("span",{class:"font-medium text-xs"},"Data Barang",-1)),o("span",Rt,m((s=e.value)==null?void 0:s.totalProducts),1)]),o("div",Wt,[l(g,{icon:"box-3",class:"md:!text-4xl text-xl !h-full text-gray-500 hover:cursor-default",type:"fill"})])])]}),_:1}),l(h,{class:"w-full"},{default:b(()=>{var s;return[o("div",Ut,[o("div",Ht,[r[1]||(r[1]=o("span",{class:"font-medium text-xs"},"Data Pengguna",-1)),o("span",qt,m((s=e.value)==null?void 0:s.totalUsers),1)]),o("div",Yt,[l(g,{icon:"user",class:"md:!text-4xl text-xl !h-full text-gray-500 hover:cursor-default",type:"fill"})])])]}),_:1}),l(h,{class:"w-full"},{default:b(()=>{var s;return[o("div",Jt,[o("div",Xt,[r[2]||(r[2]=o("span",{class:"font-medium text-xs"},"Produk Masuk (Pending)",-1)),o("span",Zt,m((s=e.value)==null?void 0:s.totalProductInPending),1)]),o("div",Gt,[l(g,{icon:"folder-warning",class:"md:!text-4xl text-xl !h-full text-gray-500 hover:cursor-default",type:"fill"})])])]}),_:1}),l(h,{class:"w-full"},{default:b(()=>{var s;return[o("div",Qt,[o("div",te,[r[3]||(r[3]=o("span",{class:"font-medium text-xs"},"Produk Masuk (Selesai)",-1)),o("span",ee,m((s=e.value)==null?void 0:s.totalProductInCompleted),1)]),o("div",ae,[l(g,{icon:"folder-check",class:"md:!text-4xl text-xl !h-full text-gray-500 hover:cursor-default",type:"fill"})])])]}),_:1})]),o("div",se,[l(h,{class:"w-full"},{default:b(()=>{var s;return[o("div",ne,[o("div",oe,[r[4]||(r[4]=o("span",{class:"font-medium text-xs"},"Produk Keluar (Pending)",-1)),o("span",re,m((s=e.value)==null?void 0:s.totalProductOutPending),1)]),o("div",ie,[l(g,{icon:"folder-warning",class:"md:!text-4xl text-xl !h-full text-gray-500 hover:cursor-default",type:"fill"})])])]}),_:1}),l(h,{class:"w-full"},{default:b(()=>{var s;return[o("div",le,[o("div",ce,[r[5]||(r[5]=o("span",{class:"font-medium text-xs"},"Produk Keluar (Selesai)",-1)),o("span",ue,m((s=e.value)==null?void 0:s.totalProductOutCompleted),1)]),o("div",de,[l(g,{icon:"folder-check",class:"md:!text-4xl text-xl !h-full text-gray-500 hover:cursor-default",type:"fill"})])])]}),_:1}),l(h,{class:"w-full"},{default:b(()=>{var s;return[o("div",be,[o("div",fe,[r[6]||(r[6]=o("span",{class:"font-medium text-xs"},"Produk Mutasi (Pending)",-1)),o("span",pe,m((s=e.value)==null?void 0:s.totalProductMutationPending),1)]),o("div",he,[l(g,{icon:"folder-warning",class:"md:!text-4xl text-xl !h-full text-gray-500 hover:cursor-default",type:"fill"})])])]}),_:1}),l(h,{class:"w-full"},{default:b(()=>{var s;return[o("div",ve,[o("div",ge,[r[7]||(r[7]=o("span",{class:"font-medium text-xs"},"Produk Mutasi (Selesai)",-1)),o("span",me,m((s=e.value)==null?void 0:s.totalProductMutationCompleted),1)]),o("div",xe,[l(g,{icon:"folder-check",class:"md:!text-4xl text-xl !h-full text-gray-500 hover:cursor-default",type:"fill"})])])]}),_:1})])])]))}});var we={root:{position:"relative"}},$e={root:"p-chart"},_e=A.extend({name:"chart",classes:$e,inlineStyles:we}),ke={name:"BaseChart",extends:N,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:_e,provide:function(){return{$pcChart:this,$parentInstance:this}}},et={name:"Chart",extends:ke,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var e=this;ut(()=>import("./auto-CSZ8dA-i.js"),[]).then(function(a){e.chart&&(e.chart.destroy(),e.chart=null),a&&a.default&&(e.chart=new a.default(e.$refs.canvas,{type:e.type,data:e.data,options:e.options,plugins:e.plugins})),e.$emit("loaded",e.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(e){if(this.chart){var a=this.chart.getElementsAtEventForMode(e,"nearest",{intersect:!0},!1),n=this.chart.getElementsAtEventForMode(e,"dataset",{intersect:!0},!1);a&&a[0]&&n&&this.$emit("select",{originalEvent:e,element:a[0],dataset:n})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(t)}function H(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function q(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?H(Object(a),!0).forEach(function(n){Pe(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function Pe(t,e,a){return(e=Te(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Te(t){var e=Be(t,"string");return C(e)=="symbol"?e:e+""}function Be(t,e){if(C(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e);if(C(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ce=["width","height"];function Se(t,e,a,n,r,s){return d(),v("div",f({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[o("canvas",f({ref:"canvas",width:t.width,height:t.height,onClick:e[0]||(e[0]=function(u){return s.onCanvasClick(u)})},q(q({},t.canvasProps),t.ptm("canvas"))),null,16,Ce)],16)}et.render=Se;const De={class:"w-full text-xs"},Le=F({__name:"TabMenu",props:dt({tabLabels:{default:[]}},{activeIndex:{default:0},activeIndexModifiers:{}}),emits:["update:activeIndex"],setup(t){const e=bt(t,"activeIndex"),a=t;return(n,r)=>(d(),v("div",De,[l(w(tt),{value:e.value,"onUpdate:value":r[0]||(r[0]=s=>e.value=s)},{default:b(()=>[l(w(Q),{pt:{tabList:{class:"!border-bottom-1 !border-blue-200"},activeBar:{class:"!bg-primary"}}},{default:b(()=>[(d(!0),v(ft,null,pt(a.tabLabels,(s,u)=>(d(),B(w(G),{value:u,class:"!p-2"},{default:b(()=>[ht(m(s),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1},8,["value"])]))}}),Oe={id:"main-view",class:"bg-[#eeedf2] w-full overflow-y-hidden"},Ae={class:"flex flex-col gap-3 p-4"},Ne={class:"flex items-center justify-between"},Ie={key:0,class:"pt-2"},Ee={class:"overflow-x-auto p-2"},je={class:"grid grid-cols-4"},Ve={class:"py-4"},Ke={class:"flex flex-col gap-2"},na=F({__name:"DashboardView",setup(t){const e=$(),a=$(),n=$(new Date),r=$(0),s=$(!1);Z(()=>{y(),I()});const u=[{name:"Dashboard",route:"/dashboard"}],x=[{header:"Kode Produk",field:"product.code",sortable:!1,bodyTemplate:i=>i.codeProduct||"-"},{header:"Nama Produk",field:"product.name",sortable:!1,bodyTemplate:i=>i.productName||"-"},{header:"Merek",field:"product.brand.name",sortable:!1,bodyTemplate:i=>i.brand||"-"},{header:"Jumlah Stok",field:"quantity",sortable:!1,bodyTemplate:i=>i.quantity!==void 0?i.quantity.toLocaleString():"-"},{header:"Lokasi Stok",field:"location.name",sortable:!1,bodyTemplate:i=>i.location||"-"}],y=async()=>{var i;try{const c={year:(i=n.value)==null?void 0:i.getFullYear()},{data:p}=await T.getDashboardChartDataProductIn(c);a.value=p.data}catch(c){console.error("Error fetching chart data:",c)}},_=async()=>{var i;try{const c={year:(i=n.value)==null?void 0:i.getFullYear()},{data:p}=await T.getDashboardChartDataProductOut(c);a.value=p.data}catch(c){console.error("Error fetching chart data:",c)}},k=async()=>{var i;try{const c={year:(i=n.value)==null?void 0:i.getFullYear()},{data:p}=await T.getDashboardChartDataProductMutation(c);a.value=p.data}catch(c){console.error("Error fetching chart data:",c)}},I=()=>{const i=getComputedStyle(document.documentElement),c=i.getPropertyValue("--p-text-color"),p=i.getPropertyValue("--p-text-muted-color"),R=i.getPropertyValue("--p-content-border-color");e.value={plugins:{legend:{labels:{color:c}}},scales:{x:{ticks:{color:p},grid:{color:R}},y:{beginAtZero:!0,ticks:{color:p},grid:{color:R}}}}},E=()=>{s.value=!s.value},at=async()=>{try{const{data:i}=await T.getDashboardLowStockData();return i}catch(i){console.error("Error fetching table data:",i)}};return U(()=>n.value,()=>{r.value===0?y():r.value===1?_():r.value===2&&k()},{immediate:!0}),U(()=>r.value,()=>{r.value===0?y():r.value===1?_():r.value===2&&k()},{immediate:!0}),(i,c)=>(d(),v("div",Oe,[o("div",Ae,[l(st,{menus:u}),l(ye),w(V)("product_in").view&&w(V)("product_out").view&&w(V)("product_mutation").view?(d(),B(h,{key:0,class:"w-full"},{default:b(()=>[o("div",{onClick:E,class:"w-full bg-blue-500/80 text-white p-2 rounded-xl hover:cursor-pointer"},[o("div",Ne,[c[2]||(c[2]=o("span",{class:"text-sm"},"Trend Transaksi Produk ",-1)),l(g,{icon:s.value?"arrow-up-s":"arrow-down-s",class:"text-xl !h-full"},null,8,["icon"])])]),s.value?(d(),v("div",Ie,[l(Le,{"active-index":r.value,"onUpdate:activeIndex":c[0]||(c[0]=p=>r.value=p),"tab-labels":["Produk Masuk","Produk Keluar","Produk Mutasi"]},null,8,["active-index"]),o("div",Ee,[o("div",je,[o("div",null,[c[3]||(c[3]=o("span",{class:"text-xs font-medium"},"Berdasarkan Tahun",-1)),l(xt,{"model-value":n.value,"onUpdate:modelValue":c[1]||(c[1]=p=>n.value=p),view:"year",dateFormat:"yy"},null,8,["model-value"])])]),o("div",Ve,[l(w(et),{type:"bar",data:a.value,options:e.value,pt:{root:{class:"sm:!w-full w-[500px]"},canvas:{class:"!"}}},null,8,["data","options"])])])])):O("",!0)]),_:1})):O("",!0),l(h,{pt:{body:{class:"!p-4 md:!p-5"}}},{default:b(()=>[o("div",Ke,[c[4]||(c[4]=o("div",null,[o("span",{class:"text-sm font-medium"},"Stock Barang yang telah mencapai batas minimum")],-1)),l(vt,{"data-key":"id",columns:x,"fetch-function":at,"use-options":!1,"table-name":"table-dashboard-low-stock","selection-type":"none"})])]),_:1})])]))}});export{na as default};
