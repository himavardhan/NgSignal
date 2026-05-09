import{a as rt,b as st}from"./chunk-H3EMN5IP.js";import{$ as nt,A as $e,B as Ke,C as ge,D as O,F as R,G as V,H as m,I as N,K as Qe,L as Ue,M as ve,N as Ge,P as te,Q as y,R as ne,S as ie,T as Je,V as Xe,W as oe,X as Ye,Y as Ze,Z as et,_ as tt,aa as it,ba as ot,ca as ae,da as at,l as Z,m as W,q as ee,s as be,t as ze,u as We,v as He,w as H,x as me,y as $,z as fe}from"./chunk-NZSSDDBN.js";import{$a as Ne,A as Q,Bb as T,Cb as u,Eb as Pe,G as De,Gb as Le,Hb as Oe,Ib as Re,Jb as L,K as j,Ka as f,L as M,La as we,M as _e,Na as S,O as F,Oa as E,Pa as z,Q as s,Sb as Ve,Ub as b,V as U,Va as B,W as G,X as ue,Xb as k,Ya as g,Yb as je,Za as v,Zb as Y,_ as xe,_a as ke,ab as Be,bb as h,cb as r,cc as I,db as l,dc as qe,eb as c,f as ye,fa as q,ha as pe,ka as D,kb as J,lb as X,ma as Ce,mb as Ie,nb as x,ob as _,pb as A,qb as P,rb as Me,sb as Fe,tb as C,ub as w,vb as Se,wa as p,wb as Ee,xb as Ae,y as Te}from"./chunk-ALAEV464.js";var lt=`
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
`;var K=["*"],Ct=["previcon"],wt=["nexticon"],yt=["content"],kt=["prevButton"],Nt=["nextButton"],Bt=["inkbar"],It=["tabs"];function Mt(t,a){t&1&&J(0)}function Ft(t,a){if(t&1&&z(0,Mt,1,0,"ng-container",11),t&2){let e=_(2);h("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function St(t,a){t&1&&(ue(),c(0,"svg",10))}function Et(t,a){if(t&1){let e=X();r(0,"button",9,3),x("click",function(){U(e);let n=_();return G(n.onPrevButtonClick())}),g(2,Ft,1,1,"ng-container")(3,St,1,0,":svg:svg",10),l()}if(t&2){let e=_();T(e.cx("prevButton")),h("pBind",e.ptm("prevButton")),B("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),p(2),v(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function At(t,a){t&1&&J(0)}function Pt(t,a){if(t&1&&z(0,At,1,0,"ng-container",11),t&2){let e=_(2);h("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function Lt(t,a){t&1&&(ue(),c(0,"svg",12))}function Ot(t,a){if(t&1){let e=X();r(0,"button",9,4),x("click",function(){U(e);let n=_();return G(n.onNextButtonClick())}),g(2,Pt,1,1,"ng-container")(3,Lt,1,0,":svg:svg",12),l()}if(t&2){let e=_();T(e.cx("nextButton")),h("pBind",e.ptm("nextButton")),B("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),p(2),v(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function Rt(t,a){t&1&&P(0)}function Vt(t,a){t&1&&J(0)}function jt(t,a){if(t&1&&z(0,Vt,1,0,"ng-container",1),t&2){let e=_(),i=Ae(1);h("ngTemplateOutlet",e.content()?e.content():i)}}var qt={root:({instance:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable()}]},ct=(()=>{class t extends O{name="tabs";style=lt;classes=qt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var dt=new F("TABS_INSTANCE"),re=(()=>{class t extends V{$pcTabs=s(dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=Y(void 0);scrollable=k(!1,{transform:I});lazy=k(!1,{transform:I});selectOnFocus=k(!1,{transform:I});showNavigators=k(!0,{transform:I});tabindex=k(0,{transform:qe});id=q($e("pn_id_"));_componentStyle=s(ct);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275cmp=f({type:t,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(B("id",n.id()),T(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[L([ct,{provide:dt,useExisting:t},{provide:R,useExisting:t}]),S([m]),E],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(A(),P(0))},dependencies:[W,N],encapsulation:2,changeDetection:0})}return t})(),zt={root:({instance:t})=>["p-tab",{"p-tab-active":t.active(),"p-disabled":t.disabled()}]},ut=(()=>{class t extends O{name="tab";classes=zt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Wt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},pt=(()=>{class t extends O{name="tablist";classes=Wt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var bt=new F("TABLIST_INSTANCE"),Tt=(()=>{class t extends V{$pcTabList=s(bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=s(j(()=>re));isPrevButtonEnabled=q(!1);isNextButtonEnabled=q(!1);resizeObserver;showNavigators=b(()=>this.pcTabs.showNavigators());tabindex=b(()=>this.pcTabs.tabindex());scrollable=b(()=>this.pcTabs.scrollable());_componentStyle=s(pt);constructor(){super(),pe(()=>{this.pcTabs.value(),ee(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&ee(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,i=$(e),n=Math.abs(e.scrollLeft)-i,o=n<=0?0:n;e.scrollLeft=be(e)?-1*o:o}onNextButtonClick(){let e=this.content.nativeElement,i=$(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+i,o=e.scrollWidth-i,d=n>=o?o:n;e.scrollLeft=be(e)?-1*d:d}updateButtonState(){let e=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:o}=e,d=Math.abs(e.scrollLeft),de=$(e);this.isPrevButtonEnabled.set(d!==0),this.isNextButtonEnabled.set(i.offsetWidth>=o&&Math.abs(d-n+de)>1)}updateInkBar(){let e=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,o=We(e,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=ze(o)+"px",i.style.left=me(o).left-me(n).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[e,i].reduce((n,o)=>o?n+$(o):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=f({type:t,selectors:[["p-tablist"]],contentQueries:function(i,n,o){if(i&1&&Me(o,Ct,4)(o,wt,4)(o,Ke,4),i&2){let d;C(d=w())&&(n.prevIconTemplate=d.first),C(d=w())&&(n.nextIconTemplate=d.first),C(d=w())&&(n.templates=d)}},viewQuery:function(i,n){if(i&1&&Fe(yt,5)(kt,5)(Nt,5)(Bt,5)(It,5),i&2){let o;C(o=w())&&(n.content=o.first),C(o=w())&&(n.prevButton=o.first),C(o=w())&&(n.nextButton=o.first),C(o=w())&&(n.inkbar=o.first),C(o=w())&&(n.tabs=o.first)}},hostVars:2,hostBindings:function(i,n){i&2&&T(n.cx("root"))},features:[L([pt,{provide:bt,useExisting:t},{provide:R,useExisting:t}]),S([m]),E],ngContentSelectors:K,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){if(i&1){let o=X();A(),g(0,Et,4,7,"button",5),r(1,"div",6,0),x("scroll",function(de){return U(o),G(n.onScroll(de))}),r(3,"div",7,1),P(5),c(6,"span",8,2),l()(),g(8,Ot,4,7,"button",5)}i&2&&(v(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),p(),T(n.cx("content")),h("pBind",n.ptm("content")),p(2),T(n.cx("tabList")),h("pBind",n.ptm("tabList")),p(3),T(n.cx("activeBar")),h("pBind",n.ptm("activeBar")),p(2),v(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[W,Z,Qe,Ue,Ge,ve,ge,N,m],encapsulation:2,changeDetection:0})}return t})(),mt=new F("TAB_INSTANCE"),Ht=(()=>{class t extends V{$pcTab=s(mt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=Y();disabled=k(!1,{transform:I});pcTabs=s(j(()=>re));pcTabList=s(j(()=>Tt));el=s(Ce);_componentStyle=s(ut);ripple=b(()=>this.config.ripple());id=b(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=b(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=b(()=>fe(this.pcTabs.value(),this.value()));tabindex=b(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.disabled()||this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(e){let i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}findNextTab(e,i=!1){let n=i?e:e.nextElementSibling;return n?H(n,"data-p-disabled")||H(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(e,i=!1){let n=i?e:e.previousElementSibling;return n?H(n,"data-p-disabled")||H(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,i){He(i),this.scrollInView(i)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){ee(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275cmp=f({type:t,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&x("focus",function(d){return n.onFocus(d)})("click",function(d){return n.onClick(d)})("keydown",function(d){return n.onKeyDown(d)}),i&2&&(B("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),T(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[L([ut,{provide:mt,useExisting:t},{provide:R,useExisting:t}]),S([ve,m]),E],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(A(),P(0))},dependencies:[W,ge,N],encapsulation:2,changeDetection:0})}return t})(),$t={root:({instance:t})=>["p-tabpanel",{"p-tabpanel-active":t.active()}]},ft=(()=>{class t extends O{name="tabpanel";classes=$t;static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var gt=new F("TABPANEL_INSTANCE"),Kt=(()=>{class t extends V{$pcTabPanel=s(gt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(m,{self:!0});pcTabs=s(j(()=>re));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=k(!1,{transform:I});value=Y(void 0);content=je("content");id=b(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=b(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=b(()=>fe(this.pcTabs.value(),this.value()));isLazyEnabled=b(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=b(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=s(ft);static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275cmp=f({type:t,selectors:[["p-tabpanel"]],contentQueries:function(i,n,o){i&1&&Se(o,n.content,yt,5),i&2&&Ee()},hostVars:7,hostBindings:function(i,n){i&2&&(Ie("hidden",!n.active()),B("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),T(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[L([ft,{provide:gt,useExisting:t},{provide:R,useExisting:t}]),S([m]),E],ngContentSelectors:K,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(A(),z(0,Rt,1,0,"ng-template",null,0,Ve),g(2,jt,1,1,"ng-container")),i&2&&(p(2),v(n.shouldRender()?2:-1))},dependencies:[Z,N],encapsulation:2,changeDetection:0})}return t})(),Qt={root:"p-tabpanels"},vt=(()=>{class t extends O{name="tabpanels";classes=Qt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var ht=new F("TABPANELS_INSTANCE"),Ut=(()=>{class t extends V{$pcTabPanels=s(ht,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(m,{self:!0});_componentStyle=s(vt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})();static \u0275cmp=f({type:t,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(i,n){i&2&&(B("role","presentation"),T(n.cx("root")))},features:[L([vt,{provide:ht,useExisting:t},{provide:R,useExisting:t}]),S([m]),E],ngContentSelectors:K,decls:1,vars:0,template:function(i,n){i&1&&(A(),P(0))},dependencies:[W,N],encapsulation:2,changeDetection:0})}return t})(),Dt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=we({type:t});static \u0275inj=_e({imports:[re,Ut,Kt,Tt,Ht,N,N]})}return t})();function se(t){t||(t=s(xe));let a=new ye(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(De(a))}function Jt(t,a){t&1&&(r(0,"span"),u(1," Departure is required "),l(),c(2,"br"))}function Xt(t,a){t&1&&(r(0,"span"),u(1," Minumium length 4 "),l(),c(2,"br"))}function Yt(t,a){if(t&1&&(g(0,Jt,3,0),g(1,Xt,3,0)),t&2){let e=_();v(e.departInfo.hasError("required")?0:-1),p(),v(e.departInfo.hasError("minlength")?1:-1)}}function Zt(t,a){if(t&1&&(r(0,"div",17)(1,"h3"),u(2),l(),r(3,"label",19),u(4," Passenger Name "),l(),c(5,"input",20)(6,"br")(7,"br"),r(8,"label",21),u(9," Passenger Age "),l(),c(10,"input",22)(11,"br")(12,"br"),l()),t&2){let e=a.$index;h("formGroupName",e),p(2),Pe("Passenger ",e+1)}}var le=class t{departure="";Arrival="";fb=s(ot);bookingForm=this.fb.group({depart:["",[y.required,y.minLength(4)]],arrival:[null,y.required],tripType:["Two Way",y.required],departDate:[null,y.required],returnDate:[null,[y.required]],passengerCount:[null,[y.required,y.min(1)]],passengerInfo:this.fb.array([])});constructor(){this.bookingForm.get("passengerCount")?.valueChanges.pipe(Te(400),Q(),se()).subscribe(a=>{if(this.passengerInfo.clear(),a&&a>0){console.log(a);for(let e=0;e<a;e++)this.addPassenger()}}),this.bookingForm.get("tripType")?.valueChanges.pipe(Q(),se()).subscribe(a=>{a=="One Way"?(this.bookingForm.get("returnDate")?.setValue(null),this.bookingForm.get("returnDate")?.disable()):this.bookingForm.get("returnDate")?.enable()}),this.bookingForm.get("depart")?.valueChanges.pipe(Q(),se()).subscribe(a=>{a&&a?.length>=3&&(this.bookingForm.controls.depart.setValue(a.toUpperCase()),console.log("depart =",a))})}get passengerInfo(){return this.bookingForm.get("passengerInfo")}get departInfo(){return this.bookingForm.get("depart")}addNewPassenger(){return this.fb.group({name:[null,y.required],age:[null,[y.required,y.max(100)]]})}addPassenger(){this.passengerInfo.push(this.addNewPassenger())}submitForm(){console.log(this.departure)}onSubmit(){let a=this.bookingForm.value;console.log(a)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-booking-form"]],decls:42,vars:2,consts:[[3,"ngSubmit","formGroup"],["for","depart"],["type","text","formControlName","depart","id","depart","aria-label","Departure Place"],["for","arrival"],["type","text","formControlName","arrival","id","arrival","aria-label","Arrival Place"],["aria-roledescription","Please select the Trip Type"],["type","radio","formControlName","tripType","id","twoWay","name","tripType","value","Two Way","aria-label","Two Way"],["for","twoWay"],["type","radio","formControlName","tripType","id","oneWay","name","tripType","value","One Way","aria-label","One Way"],["for","oneWay"],["for","departDate"],["type","date","formControlName","departDate","id","departDate","aria-label","Departure Date"],["for","returnDate"],["type","date","formControlName","returnDate","id","returnDate","aria-label","Return Date"],["for","count"],["type","number","formControlName","passengerCount","id","count","aria-label"," Total number of Passengers "],["formArrayName","passengerInfo"],[2,"border","1px solid gray","padding","10px","margin-bottom","10px",3,"formGroupName"],["type","submit"],["for","name"],["type","text","formControlName","name","id","name","aria-label","Passenger Name"],["for","age"],["type","number","formControlName","age","id","age","aria-label","Passenger Age"]],template:function(e,i){e&1&&(r(0,"form",0),x("ngSubmit",function(){return i.onSubmit()}),r(1,"label",1),u(2," Departure Place "),l(),c(3,"input",2),g(4,Yt,2,2),c(5,"br")(6,"br"),r(7,"label",3),u(8," Arrival Place "),l(),c(9,"input",4)(10,"br")(11,"br"),r(12,"label",5),u(13," Trip: "),l(),c(14,"input",6),r(15,"label",7),u(16," Two Way "),l(),c(17,"input",8),r(18,"label",9),u(19," One Way "),l(),c(20,"br")(21,"br"),r(22,"label",10),u(23," Depart Date "),l(),c(24,"input",11)(25,"br")(26,"br"),r(27,"label",12),u(28," return Date "),l(),c(29,"input",13)(30,"br")(31,"br"),r(32,"label",14),u(33," Passenger count "),l(),c(34,"input",15)(35,"br")(36,"br"),r(37,"div",16),Ne(38,Zt,13,2,"div",17,ke),l(),r(40,"button",18),u(41," Submit your form "),l()()),e&2&&(h("formGroup",i.bookingForm),p(4),v((i.departInfo.touched||i.departInfo.dirty)&&i.departInfo.invalid?4:-1),p(34),Be(i.passengerInfo.controls))},dependencies:[ae,oe,te,Ye,Ze,ne,ie,at,it,nt,et,tt],encapsulation:2})};var ce=class t{departure="";handleSubmit(){console.log(this.departure)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-booking-template-form"]],decls:6,vars:1,consts:[[3,"ngSubmit"],["type","text","name","departure",3,"ngModelChange","ngModel"],["type","submit"]],template:function(e,i){e&1&&(r(0,"p"),u(1,"booking-template-form works!"),l(),r(2,"form",0),x("ngSubmit",function(){return i.handleSubmit()}),r(3,"input",1),Re("ngModelChange",function(o){return Oe(i.departure,o)||(i.departure=o),o}),l(),r(4,"button",2),u(5," Submit "),l()()),e&2&&(p(3),Le("ngModel",i.departure))},dependencies:[ae,oe,te,ne,ie,Xe,Je],encapsulation:2})};function en(t,a){t&1&&c(0,"app-booking-form")(1,"app-booking-template-form")}var xt=class t{tabs=[{title:"Dashboard",value:"0",component:"Dashboard"},{title:"Properties",value:"1",component:"Property"},{title:"Contact Us",value:"2",component:"ContactUsComponent"}];users=[{id:1,name:"John Doe",email:"john@gmail.com"},{id:2,name:"Himavardhan",email:"hima@gmail.com"}];assets=s(rt).getAssets();constructor(){}ngOnInit(){console.log("Assets in Dashboard:",this.assets)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-dashboard"]],decls:3,vars:1,consts:[[1,"container","mt-4"]],template:function(e,i){e&1&&(r(0,"div",0),c(1,"app-property-list"),g(2,en,2,0),l()),e&2&&(p(2),v(-1))},dependencies:[Dt,st,le,ce],encapsulation:2})};export{re as a,Tt as b,Ht as c,Dt as d,xt as e};
