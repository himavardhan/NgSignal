import{a as Nt,b as It}from"./chunk-BE4EBEUX.js";import{A as xt,B as Dt,C as at,D as S,F as L,G as P,H as l,I as y,K as Bt,L as wt,M as ot,N as Ct,l as J,m as z,q as X,s as et,t as yt,u as Tt,v as _t,w as j,x as nt,y as H,z as it}from"./chunk-TNUCP4OM.js";import{$a as M,$b as gt,Fb as F,Ha as h,I as O,Ia as ct,J as D,K as st,Ka as w,La as C,M as B,Ma as V,O as o,Ob as ht,Qb as r,Sa as T,T as Q,Tb as g,U as $,Ub as mt,V as tt,Va as N,Vb as G,Wa as I,Za as b,_a as _,_b as x,ab as k,da as q,fa as rt,gb as W,hb as U,ia as u,ib as dt,jb as R,ka as lt,kb as m,lb as E,mb as A,nb as ut,ob as bt,pb as p,qb as f,rb as pt,sb as ft,ta as v,tb as vt,xb as d}from"./chunk-PSSCZRRA.js";var Mt=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
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
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
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
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
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
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var K=["*"],$t=["previcon"],qt=["nexticon"],zt=["content"],Wt=["prevButton"],Ut=["nextButton"],Gt=["inkbar"],Jt=["tabs"];function Xt(e,c){e&1&&W(0)}function Yt(e,c){if(e&1&&V(0,Xt,1,0,"ng-container",11),e&2){let t=m(2);b("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function Zt(e,c){e&1&&(tt(),k(0,"svg",10))}function te(e,c){if(e&1){let t=U();_(0,"button",9,3),R("click",function(){Q(t);let n=m();return $(n.onPrevButtonClick())}),N(2,Yt,1,1,"ng-container")(3,Zt,1,0,":svg:svg",10),M()}if(e&2){let t=m();d(t.cx("prevButton")),b("pBind",t.ptm("prevButton")),T("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),v(2),I(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function ee(e,c){e&1&&W(0)}function ne(e,c){if(e&1&&V(0,ee,1,0,"ng-container",11),e&2){let t=m(2);b("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function ie(e,c){e&1&&(tt(),k(0,"svg",12))}function ae(e,c){if(e&1){let t=U();_(0,"button",9,4),R("click",function(){Q(t);let n=m();return $(n.onNextButtonClick())}),N(2,ne,1,1,"ng-container")(3,ie,1,0,":svg:svg",12),M()}if(e&2){let t=m();d(t.cx("nextButton")),b("pBind",t.ptm("nextButton")),T("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),v(2),I(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function oe(e,c){e&1&&A(0)}function se(e,c){e&1&&W(0)}function re(e,c){if(e&1&&V(0,se,1,0,"ng-container",1),e&2){let t=m(),i=vt(1);b("ngTemplateOutlet",t.content()?t.content():i)}}var le={root:({instance:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable()}]},kt=(()=>{class e extends S{name="tabs";style=Mt;classes=le;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Et=new B("TABS_INSTANCE"),Y=(()=>{class e extends P{$pcTabs=o(Et,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=G(void 0);scrollable=g(!1,{transform:x});lazy=g(!1,{transform:x});selectOnFocus=g(!1,{transform:x});showNavigators=g(!0,{transform:x});tabindex=g(0,{transform:gt});id=q(xt("pn_id_"));_componentStyle=o(kt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=h({type:e,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(T("id",n.id()),d(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[F([kt,{provide:Et,useExisting:e},{provide:L,useExisting:e}]),w([l]),C],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(E(),A(0))},dependencies:[z,y],encapsulation:2,changeDetection:0})}return e})(),ce={root:({instance:e})=>["p-tab",{"p-tab-active":e.active(),"p-disabled":e.disabled()}]},At=(()=>{class e extends S{name="tab";classes=ce;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var de={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Ft=(()=>{class e extends S{name="tablist";classes=de;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var St=new B("TABLIST_INSTANCE"),jt=(()=>{class e extends P{$pcTabList=o(St,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=o(O(()=>Y));isPrevButtonEnabled=q(!1);isNextButtonEnabled=q(!1);resizeObserver;showNavigators=r(()=>this.pcTabs.showNavigators());tabindex=r(()=>this.pcTabs.tabindex());scrollable=r(()=>this.pcTabs.scrollable());_componentStyle=o(Ft);constructor(){super(),rt(()=>{this.pcTabs.value(),X(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&X(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=H(t),n=Math.abs(t.scrollLeft)-i,a=n<=0?0:n;t.scrollLeft=et(t)?-1*a:a}onNextButtonClick(){let t=this.content.nativeElement,i=H(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,a=t.scrollWidth-i,s=n>=a?a:n;t.scrollLeft=et(t)?-1*s:s}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:a}=t,s=Math.abs(t.scrollLeft),Z=H(t);this.isPrevButtonEnabled.set(s!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&Math.abs(s-n+Z)>1)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,a=Tt(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=yt(a)+"px",i.style.left=nt(a).left-nt(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,a)=>a?n+H(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,a){if(i&1&&ut(a,$t,4)(a,qt,4)(a,Dt,4),i&2){let s;p(s=f())&&(n.prevIconTemplate=s.first),p(s=f())&&(n.nextIconTemplate=s.first),p(s=f())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&bt(zt,5)(Wt,5)(Ut,5)(Gt,5)(Jt,5),i&2){let a;p(a=f())&&(n.content=a.first),p(a=f())&&(n.prevButton=a.first),p(a=f())&&(n.nextButton=a.first),p(a=f())&&(n.inkbar=a.first),p(a=f())&&(n.tabs=a.first)}},hostVars:2,hostBindings:function(i,n){i&2&&d(n.cx("root"))},features:[F([Ft,{provide:St,useExisting:e},{provide:L,useExisting:e}]),w([l]),C],ngContentSelectors:K,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){if(i&1){let a=U();E(),N(0,te,4,7,"button",5),_(1,"div",6,0),R("scroll",function(Z){return Q(a),$(n.onScroll(Z))}),_(3,"div",7,1),A(5),k(6,"span",8,2),M()(),N(8,ae,4,7,"button",5)}i&2&&(I(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),v(),d(n.cx("content")),b("pBind",n.ptm("content")),v(2),d(n.cx("tabList")),b("pBind",n.ptm("tabList")),v(3),d(n.cx("activeBar")),b("pBind",n.ptm("activeBar")),v(2),I(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[z,J,Bt,wt,Ct,ot,at,y,l],encapsulation:2,changeDetection:0})}return e})(),Lt=new B("TAB_INSTANCE"),ue=(()=>{class e extends P{$pcTab=o(Lt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=G();disabled=g(!1,{transform:x});pcTabs=o(O(()=>Y));pcTabList=o(O(()=>jt));el=o(lt);_componentStyle=o(At);ripple=r(()=>this.config.ripple());id=r(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=r(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=r(()=>it(this.pcTabs.value(),this.value()));tabindex=r(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.disabled()||this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.disabled()||this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?j(n,"data-p-disabled")||j(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?j(n,"data-p-disabled")||j(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){_t(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){X(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=h({type:e,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&R("focus",function(s){return n.onFocus(s)})("click",function(s){return n.onClick(s)})("keydown",function(s){return n.onKeyDown(s)}),i&2&&(T("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),d(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[F([At,{provide:Lt,useExisting:e},{provide:L,useExisting:e}]),w([ot,l]),C],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(E(),A(0))},dependencies:[z,at,y],encapsulation:2,changeDetection:0})}return e})(),be={root:({instance:e})=>["p-tabpanel",{"p-tabpanel-active":e.active()}]},Pt=(()=>{class e extends S{name="tabpanel";classes=be;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Ot=new B("TABPANEL_INSTANCE"),pe=(()=>{class e extends P{$pcTabPanel=o(Ot,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(l,{self:!0});pcTabs=o(O(()=>Y));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=g(!1,{transform:x});value=G(void 0);content=mt("content");id=r(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=r(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=r(()=>it(this.pcTabs.value(),this.value()));isLazyEnabled=r(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=r(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=o(Pt);static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=h({type:e,selectors:[["p-tabpanel"]],contentQueries:function(i,n,a){i&1&&pt(a,n.content,zt,5),i&2&&ft()},hostVars:7,hostBindings:function(i,n){i&2&&(dt("hidden",!n.active()),T("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),d(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[F([Pt,{provide:Ot,useExisting:e},{provide:L,useExisting:e}]),w([l]),C],ngContentSelectors:K,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(E(),V(0,oe,1,0,"ng-template",null,0,ht),N(2,re,1,1,"ng-container")),i&2&&(v(2),I(n.shouldRender()?2:-1))},dependencies:[J,y],encapsulation:2,changeDetection:0})}return e})(),fe={root:"p-tabpanels"},Vt=(()=>{class e extends S{name="tabpanels";classes=fe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Rt=new B("TABPANELS_INSTANCE"),ve=(()=>{class e extends P{$pcTabPanels=o(Rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(l,{self:!0});_componentStyle=o(Vt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=h({type:e,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(i,n){i&2&&(T("role","presentation"),d(n.cx("root")))},features:[F([Vt,{provide:Rt,useExisting:e},{provide:L,useExisting:e}]),w([l]),C],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(E(),A(0))},dependencies:[z,y],encapsulation:2,changeDetection:0})}return e})(),Ht=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=ct({type:e});static \u0275inj=st({imports:[Y,ve,pe,jt,ue,y,y]})}return e})();var Kt=class e{tabs=[{title:"Dashboard",value:"0",component:"Dashboard"},{title:"Properties",value:"1",component:"Property"},{title:"Contact Us",value:"2",component:"ContactUsComponent"}];users=[{id:1,name:"John Doe",email:"john@gmail.com"},{id:2,name:"Himavardhan",email:"hima@gmail.com"}];assets=o(Nt).getAssets();constructor(){}ngOnInit(){console.log("Assets in Dashboard:",this.assets)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=h({type:e,selectors:[["app-dashboard"]],decls:2,vars:0,consts:[[1,"container","mt-4"]],template:function(t,i){t&1&&(_(0,"div",0),k(1,"app-property-list"),M())},dependencies:[Ht,It],encapsulation:2})};export{Y as a,jt as b,ue as c,Ht as d,Kt as e};
