(() => {
  "use strict";
  var e = {
    d: (t, n) => {
      for (var o in n)
        e.o(n, o) &&
          !e.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
    },
  };
  (e.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var t = {};
  function n(e, t) {
    const n = Object.create(null),
      o = e.split(",");
    for (let e = 0; e < o.length; e++) n[o[e]] = !0;
    return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
  }
  e.r(t),
    e.d(t, {
      BaseTransition: () => Rn,
      Comment: () => as,
      EffectScope: () => re,
      Fragment: () => rs,
      KeepAlive: () => zn,
      ReactiveEffect: () => xe,
      Static: () => cs,
      Suspense: () => xn,
      Teleport: () => Xo,
      Text: () => is,
      Transition: () => Ui,
      TransitionGroup: () => aa,
      VueElement: () => Fi,
      callWithAsyncErrorHandling: () => vr,
      callWithErrorHandling: () => yr,
      camelize: () => K,
      capitalize: () => J,
      cloneVNode: () => Os,
      compatUtils: () => mi,
      computed: () => qt,
      createApp: () => Da,
      createBlock: () => vs,
      createCommentVNode: () => Ns,
      createElementBlock: () => ys,
      createElementVNode: () => Ts,
      createHydrationRenderer: () => Uo,
      createPropsRestProxy: () => ri,
      createRenderer: () => zo,
      createSSRApp: () => Aa,
      createSlots: () => Ds,
      createStaticVNode: () => Rs,
      createTextVNode: () => Is,
      createVNode: () => Es,
      customRef: () => Ut,
      defineAsyncComponent: () => An,
      defineComponent: () => Bn,
      defineCustomElement: () => Li,
      defineEmits: () => Zr,
      defineExpose: () => Qr,
      defineProps: () => Xr,
      defineSSRCustomElement: () => Mi,
      devtools: () => Jt,
      effect: () => _e,
      effectScope: () => ie,
      getCurrentInstance: () => Ys,
      getCurrentScope: () => ce,
      getTransitionRawChildren: () => Fn,
      guardReactiveProps: () => ks,
      h: () => ai,
      handleError: () => br,
      hydrate: () => Ba,
      initCustomFormatter: () => ui,
      initDirectivesForSSR: () => za,
      inject: () => kn,
      isMemoSame: () => pi,
      isProxy: () => Et,
      isReactive: () => Ct,
      isReadonly: () => Tt,
      isRef: () => Lt,
      isRuntimeOnly: () => ir,
      isVNode: () => bs,
      markRaw: () => Ot,
      mergeDefaults: () => si,
      mergeProps: () => Ps,
      nextTick: () => Lr,
      normalizeClass: () => u,
      normalizeProps: () => d,
      normalizeStyle: () => i,
      onActivated: () => Hn,
      onBeforeMount: () => Zn,
      onBeforeUnmount: () => no,
      onBeforeUpdate: () => eo,
      onDeactivated: () => Wn,
      onErrorCaptured: () => ao,
      onMounted: () => Qn,
      onRenderTracked: () => io,
      onRenderTriggered: () => ro,
      onScopeDispose: () => le,
      onServerPrefetch: () => so,
      onUnmounted: () => oo,
      onUpdated: () => to,
      openBlock: () => ds,
      popScopeId: () => pn,
      provide: () => En,
      proxyRefs: () => $t,
      pushScopeId: () => dn,
      queuePostFlushCb: () => Br,
      reactive: () => bt,
      readonly: () => wt,
      ref: () => Mt,
      registerRuntimeCompiler: () => rr,
      render: () => Fa,
      renderList: () => Bs,
      renderSlot: () => As,
      resolveComponent: () => Qo,
      resolveDirective: () => ns,
      resolveDynamicComponent: () => ts,
      resolveFilter: () => gi,
      resolveTransitionHooks: () => jn,
      setBlockTracking: () => gs,
      setDevtoolsHook: () => Qt,
      setTransitionHooks: () => Pn,
      shallowReactive: () => xt,
      shallowReadonly: () => _t,
      shallowRef: () => Pt,
      ssrContextKey: () => ci,
      ssrUtils: () => hi,
      stop: () => Se,
      toDisplayString: () => y,
      toHandlerKey: () => Y,
      toHandlers: () => $s,
      toRaw: () => kt,
      toRef: () => Kt,
      toRefs: () => Ht,
      transformVNodeArgs: () => ws,
      triggerRef: () => Dt,
      unref: () => At,
      useAttrs: () => ni,
      useCssModule: () => Bi,
      useCssVars: () => Di,
      useSSRContext: () => li,
      useSlots: () => ti,
      useTransitionState: () => On,
      vModelCheckbox: () => ga,
      vModelDynamic: () => _a,
      vModelRadio: () => ya,
      vModelSelect: () => va,
      vModelText: () => ha,
      vShow: () => Ia,
      version: () => fi,
      warn: () => hr,
      watch: () => Kr,
      watchEffect: () => zr,
      watchPostEffect: () => Ur,
      watchSyncEffect: () => Hr,
      withAsyncContext: () => ii,
      withCtx: () => hn,
      withDefaults: () => ei,
      withDirectives: () => No,
      withKeys: () => Oa,
      withMemo: () => di,
      withModifiers: () => Ea,
      withScopeId: () => fn,
    });
  const o = n(
      "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"
    ),
    s = n(
      "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
    );
  function r(e) {
    return !!e || "" === e;
  }
  function i(e) {
    if (R(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const o = e[n],
          s = P(o) ? l(o) : i(o);
        if (s) for (const e in s) t[e] = s[e];
      }
      return t;
    }
    return P(e) || B(e) ? e : void 0;
  }
  const a = /;(?![^(]*\))/g,
    c = /:(.+)/;
  function l(e) {
    const t = {};
    return (
      e.split(a).forEach((e) => {
        if (e) {
          const n = e.split(c);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
      t
    );
  }
  function u(e) {
    let t = "";
    if (P(e)) t = e;
    else if (R(e))
      for (let n = 0; n < e.length; n++) {
        const o = u(e[n]);
        o && (t += o + " ");
      }
    else if (B(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  }
  function d(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !P(t) && (e.class = u(t)), n && (e.style = i(n)), e;
  }
  const p = n(
      "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
    ),
    f = n(
      "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"
    ),
    h = n(
      "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"
    );
  function g(e, t) {
    if (e === t) return !0;
    let n = L(e),
      o = L(t);
    if (n || o) return !(!n || !o) && e.getTime() === t.getTime();
    if (((n = R(e)), (o = R(t)), n || o))
      return (
        !(!n || !o) &&
        (function (e, t) {
          if (e.length !== t.length) return !1;
          let n = !0;
          for (let o = 0; n && o < e.length; o++) n = g(e[o], t[o]);
          return n;
        })(e, t)
      );
    if (((n = B(e)), (o = B(t)), n || o)) {
      if (!n || !o) return !1;
      if (Object.keys(e).length !== Object.keys(t).length) return !1;
      for (const n in e) {
        const o = e.hasOwnProperty(n),
          s = t.hasOwnProperty(n);
        if ((o && !s) || (!o && s) || !g(e[n], t[n])) return !1;
      }
    }
    return String(e) === String(t);
  }
  function m(e, t) {
    return e.findIndex((e) => g(e, t));
  }
  const y = (e) =>
      null == e
        ? ""
        : R(e) || (B(e) && (e.toString === A || !M(e.toString)))
        ? JSON.stringify(e, v, 2)
        : String(e),
    v = (e, t) =>
      t && t.__v_isRef
        ? v(e, t.value)
        : N(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (e, [t, n]) => ((e[`${t} =>`] = n), e),
              {}
            ),
          }
        : j(t)
        ? { [`Set(${t.size})`]: [...t.values()] }
        : !B(t) || R(t) || $(t)
        ? t
        : String(t),
    b = {},
    x = [],
    w = () => {},
    _ = () => !1,
    S = /^on[^a-z]/,
    C = (e) => S.test(e),
    T = (e) => e.startsWith("onUpdate:"),
    E = Object.assign,
    k = (e, t) => {
      const n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    },
    O = Object.prototype.hasOwnProperty,
    I = (e, t) => O.call(e, t),
    R = Array.isArray,
    N = (e) => "[object Map]" === V(e),
    j = (e) => "[object Set]" === V(e),
    L = (e) => e instanceof Date,
    M = (e) => "function" == typeof e,
    P = (e) => "string" == typeof e,
    F = (e) => "symbol" == typeof e,
    B = (e) => null !== e && "object" == typeof e,
    D = (e) => B(e) && M(e.then) && M(e.catch),
    A = Object.prototype.toString,
    V = (e) => A.call(e),
    $ = (e) => "[object Object]" === V(e),
    z = (e) =>
      P(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
    U = n(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    ),
    H = (e) => {
      const t = Object.create(null);
      return (n) => t[n] || (t[n] = e(n));
    },
    W = /-(\w)/g,
    K = H((e) => e.replace(W, (e, t) => (t ? t.toUpperCase() : ""))),
    G = /\B([A-Z])/g,
    q = H((e) => e.replace(G, "-$1").toLowerCase()),
    J = H((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Y = H((e) => (e ? `on${J(e)}` : "")),
    X = (e, t) => !Object.is(e, t),
    Z = (e, t) => {
      for (let n = 0; n < e.length; n++) e[n](t);
    },
    Q = (e, t, n) => {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n,
      });
    },
    ee = (e) => {
      const t = parseFloat(e);
      return isNaN(t) ? e : t;
    };
  let te;
  const ne = () =>
    te ||
    (te =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : void 0 !== e.g
        ? e.g
        : {});
  let oe;
  const se = [];
  class re {
    constructor(e = !1) {
      (this.active = !0),
        (this.effects = []),
        (this.cleanups = []),
        !e &&
          oe &&
          ((this.parent = oe),
          (this.index = (oe.scopes || (oe.scopes = [])).push(this) - 1));
    }
    run(e) {
      if (this.active)
        try {
          return this.on(), e();
        } finally {
          this.off();
        }
    }
    on() {
      this.active && (se.push(this), (oe = this));
    }
    off() {
      this.active && (se.pop(), (oe = se[se.length - 1]));
    }
    stop(e) {
      if (this.active) {
        if (
          (this.effects.forEach((e) => e.stop()),
          this.cleanups.forEach((e) => e()),
          this.scopes && this.scopes.forEach((e) => e.stop(!0)),
          this.parent && !e)
        ) {
          const e = this.parent.scopes.pop();
          e &&
            e !== this &&
            ((this.parent.scopes[this.index] = e), (e.index = this.index));
        }
        this.active = !1;
      }
    }
  }
  function ie(e) {
    return new re(e);
  }
  function ae(e, t) {
    (t = t || oe) && t.active && t.effects.push(e);
  }
  function ce() {
    return oe;
  }
  function le(e) {
    oe && oe.cleanups.push(e);
  }
  const ue = (e) => {
      const t = new Set(e);
      return (t.w = 0), (t.n = 0), t;
    },
    de = (e) => (e.w & ge) > 0,
    pe = (e) => (e.n & ge) > 0,
    fe = new WeakMap();
  let he = 0,
    ge = 1;
  const me = [];
  let ye;
  const ve = Symbol(""),
    be = Symbol("");
  class xe {
    constructor(e, t = null, n) {
      (this.fn = e),
        (this.scheduler = t),
        (this.active = !0),
        (this.deps = []),
        ae(this, n);
    }
    run() {
      if (!this.active) return this.fn();
      if (!me.includes(this))
        try {
          return (
            me.push((ye = this)),
            Te.push(Ce),
            (Ce = !0),
            (ge = 1 << ++he),
            he <= 30
              ? (({ deps: e }) => {
                  if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ge;
                })(this)
              : we(this),
            this.fn()
          );
        } finally {
          he <= 30 &&
            ((e) => {
              const { deps: t } = e;
              if (t.length) {
                let n = 0;
                for (let o = 0; o < t.length; o++) {
                  const s = t[o];
                  de(s) && !pe(s) ? s.delete(e) : (t[n++] = s),
                    (s.w &= ~ge),
                    (s.n &= ~ge);
                }
                t.length = n;
              }
            })(this),
            (ge = 1 << --he),
            ke(),
            me.pop();
          const e = me.length;
          ye = e > 0 ? me[e - 1] : void 0;
        }
    }
    stop() {
      this.active &&
        (we(this), this.onStop && this.onStop(), (this.active = !1));
    }
  }
  function we(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++) t[n].delete(e);
      t.length = 0;
    }
  }
  function _e(e, t) {
    e.effect && (e = e.effect.fn);
    const n = new xe(e);
    t && (E(n, t), t.scope && ae(n, t.scope)), (t && t.lazy) || n.run();
    const o = n.run.bind(n);
    return (o.effect = n), o;
  }
  function Se(e) {
    e.effect.stop();
  }
  let Ce = !0;
  const Te = [];
  function Ee() {
    Te.push(Ce), (Ce = !1);
  }
  function ke() {
    const e = Te.pop();
    Ce = void 0 === e || e;
  }
  function Oe(e, t, n) {
    if (!Ie()) return;
    let o = fe.get(e);
    o || fe.set(e, (o = new Map()));
    let s = o.get(n);
    s || o.set(n, (s = ue())), Re(s);
  }
  function Ie() {
    return Ce && void 0 !== ye;
  }
  function Re(e, t) {
    let n = !1;
    he <= 30 ? pe(e) || ((e.n |= ge), (n = !de(e))) : (n = !e.has(ye)),
      n && (e.add(ye), ye.deps.push(e));
  }
  function Ne(e, t, n, o, s, r) {
    const i = fe.get(e);
    if (!i) return;
    let a = [];
    if ("clear" === t) a = [...i.values()];
    else if ("length" === n && R(e))
      i.forEach((e, t) => {
        ("length" === t || t >= o) && a.push(e);
      });
    else
      switch ((void 0 !== n && a.push(i.get(n)), t)) {
        case "add":
          R(e)
            ? z(n) && a.push(i.get("length"))
            : (a.push(i.get(ve)), N(e) && a.push(i.get(be)));
          break;
        case "delete":
          R(e) || (a.push(i.get(ve)), N(e) && a.push(i.get(be)));
          break;
        case "set":
          N(e) && a.push(i.get(ve));
      }
    if (1 === a.length) a[0] && je(a[0]);
    else {
      const e = [];
      for (const t of a) t && e.push(...t);
      je(ue(e));
    }
  }
  function je(e, t) {
    for (const t of R(e) ? e : [...e])
      (t !== ye || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
  }
  const Le = n("__proto__,__v_isRef,__isVue"),
    Me = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map((e) => Symbol[e])
        .filter(F)
    ),
    Pe = $e(),
    Fe = $e(!1, !0),
    Be = $e(!0),
    De = $e(!0, !0),
    Ae = Ve();
  function Ve() {
    const e = {};
    return (
      ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
        e[t] = function (...e) {
          const n = kt(this);
          for (let e = 0, t = this.length; e < t; e++) Oe(n, 0, e + "");
          const o = n[t](...e);
          return -1 === o || !1 === o ? n[t](...e.map(kt)) : o;
        };
      }),
      ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
        e[t] = function (...e) {
          Ee();
          const n = kt(this)[t].apply(this, e);
          return ke(), n;
        };
      }),
      e
    );
  }
  function $e(e = !1, t = !1) {
    return function (n, o, s) {
      if ("__v_isReactive" === o) return !e;
      if ("__v_isReadonly" === o) return e;
      if ("__v_raw" === o && s === (e ? (t ? vt : yt) : t ? mt : gt).get(n))
        return n;
      const r = R(n);
      if (!e && r && I(Ae, o)) return Reflect.get(Ae, o, s);
      const i = Reflect.get(n, o, s);
      return (F(o) ? Me.has(o) : Le(o))
        ? i
        : (e || Oe(n, 0, o),
          t
            ? i
            : Lt(i)
            ? r && z(o)
              ? i
              : i.value
            : B(i)
            ? e
              ? wt(i)
              : bt(i)
            : i);
    };
  }
  function ze(e = !1) {
    return function (t, n, o, s) {
      let r = t[n];
      if (!e && !Tt(o) && ((o = kt(o)), (r = kt(r)), !R(t) && Lt(r) && !Lt(o)))
        return (r.value = o), !0;
      const i = R(t) && z(n) ? Number(n) < t.length : I(t, n),
        a = Reflect.set(t, n, o, s);
      return (
        t === kt(s) && (i ? X(o, r) && Ne(t, "set", n, o) : Ne(t, "add", n, o)),
        a
      );
    };
  }
  const Ue = {
      get: Pe,
      set: ze(),
      deleteProperty: function (e, t) {
        const n = I(e, t),
          o = (e[t], Reflect.deleteProperty(e, t));
        return o && n && Ne(e, "delete", t, void 0), o;
      },
      has: function (e, t) {
        const n = Reflect.has(e, t);
        return (F(t) && Me.has(t)) || Oe(e, 0, t), n;
      },
      ownKeys: function (e) {
        return Oe(e, 0, R(e) ? "length" : ve), Reflect.ownKeys(e);
      },
    },
    He = { get: Be, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
    We = E({}, Ue, { get: Fe, set: ze(!0) }),
    Ke = E({}, He, { get: De }),
    Ge = (e) => e,
    qe = (e) => Reflect.getPrototypeOf(e);
  function Je(e, t, n = !1, o = !1) {
    const s = kt((e = e.__v_raw)),
      r = kt(t);
    t !== r && !n && Oe(s, 0, t), !n && Oe(s, 0, r);
    const { has: i } = qe(s),
      a = o ? Ge : n ? Rt : It;
    return i.call(s, t)
      ? a(e.get(t))
      : i.call(s, r)
      ? a(e.get(r))
      : void (e !== s && e.get(t));
  }
  function Ye(e, t = !1) {
    const n = this.__v_raw,
      o = kt(n),
      s = kt(e);
    return (
      e !== s && !t && Oe(o, 0, e),
      !t && Oe(o, 0, s),
      e === s ? n.has(e) : n.has(e) || n.has(s)
    );
  }
  function Xe(e, t = !1) {
    return (e = e.__v_raw), !t && Oe(kt(e), 0, ve), Reflect.get(e, "size", e);
  }
  function Ze(e) {
    e = kt(e);
    const t = kt(this);
    return qe(t).has.call(t, e) || (t.add(e), Ne(t, "add", e, e)), this;
  }
  function Qe(e, t) {
    t = kt(t);
    const n = kt(this),
      { has: o, get: s } = qe(n);
    let r = o.call(n, e);
    r || ((e = kt(e)), (r = o.call(n, e)));
    const i = s.call(n, e);
    return (
      n.set(e, t), r ? X(t, i) && Ne(n, "set", e, t) : Ne(n, "add", e, t), this
    );
  }
  function et(e) {
    const t = kt(this),
      { has: n, get: o } = qe(t);
    let s = n.call(t, e);
    s || ((e = kt(e)), (s = n.call(t, e))), o && o.call(t, e);
    const r = t.delete(e);
    return s && Ne(t, "delete", e, void 0), r;
  }
  function tt() {
    const e = kt(this),
      t = 0 !== e.size,
      n = e.clear();
    return t && Ne(e, "clear", void 0, void 0), n;
  }
  function nt(e, t) {
    return function (n, o) {
      const s = this,
        r = s.__v_raw,
        i = kt(r),
        a = t ? Ge : e ? Rt : It;
      return !e && Oe(i, 0, ve), r.forEach((e, t) => n.call(o, a(e), a(t), s));
    };
  }
  function ot(e, t, n) {
    return function (...o) {
      const s = this.__v_raw,
        r = kt(s),
        i = N(r),
        a = "entries" === e || (e === Symbol.iterator && i),
        c = "keys" === e && i,
        l = s[e](...o),
        u = n ? Ge : t ? Rt : It;
      return (
        !t && Oe(r, 0, c ? be : ve),
        {
          next() {
            const { value: e, done: t } = l.next();
            return t
              ? { value: e, done: t }
              : { value: a ? [u(e[0]), u(e[1])] : u(e), done: t };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function st(e) {
    return function (...t) {
      return "delete" !== e && this;
    };
  }
  function rt() {
    const e = {
        get(e) {
          return Je(this, e);
        },
        get size() {
          return Xe(this);
        },
        has: Ye,
        add: Ze,
        set: Qe,
        delete: et,
        clear: tt,
        forEach: nt(!1, !1),
      },
      t = {
        get(e) {
          return Je(this, e, !1, !0);
        },
        get size() {
          return Xe(this);
        },
        has: Ye,
        add: Ze,
        set: Qe,
        delete: et,
        clear: tt,
        forEach: nt(!1, !0),
      },
      n = {
        get(e) {
          return Je(this, e, !0);
        },
        get size() {
          return Xe(this, !0);
        },
        has(e) {
          return Ye.call(this, e, !0);
        },
        add: st("add"),
        set: st("set"),
        delete: st("delete"),
        clear: st("clear"),
        forEach: nt(!0, !1),
      },
      o = {
        get(e) {
          return Je(this, e, !0, !0);
        },
        get size() {
          return Xe(this, !0);
        },
        has(e) {
          return Ye.call(this, e, !0);
        },
        add: st("add"),
        set: st("set"),
        delete: st("delete"),
        clear: st("clear"),
        forEach: nt(!0, !0),
      };
    return (
      ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
        (e[s] = ot(s, !1, !1)),
          (n[s] = ot(s, !0, !1)),
          (t[s] = ot(s, !1, !0)),
          (o[s] = ot(s, !0, !0));
      }),
      [e, n, t, o]
    );
  }
  const [it, at, ct, lt] = rt();
  function ut(e, t) {
    const n = t ? (e ? lt : ct) : e ? at : it;
    return (t, o, s) =>
      "__v_isReactive" === o
        ? !e
        : "__v_isReadonly" === o
        ? e
        : "__v_raw" === o
        ? t
        : Reflect.get(I(n, o) && o in t ? n : t, o, s);
  }
  const dt = { get: ut(!1, !1) },
    pt = { get: ut(!1, !0) },
    ft = { get: ut(!0, !1) },
    ht = { get: ut(!0, !0) },
    gt = new WeakMap(),
    mt = new WeakMap(),
    yt = new WeakMap(),
    vt = new WeakMap();
  function bt(e) {
    return e && e.__v_isReadonly ? e : St(e, !1, Ue, dt, gt);
  }
  function xt(e) {
    return St(e, !1, We, pt, mt);
  }
  function wt(e) {
    return St(e, !0, He, ft, yt);
  }
  function _t(e) {
    return St(e, !0, Ke, ht, vt);
  }
  function St(e, t, n, o, s) {
    if (!B(e)) return e;
    if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
    const r = s.get(e);
    if (r) return r;
    const i =
      (a = e).__v_skip || !Object.isExtensible(a)
        ? 0
        : (function (e) {
            switch (e) {
              case "Object":
              case "Array":
                return 1;
              case "Map":
              case "Set":
              case "WeakMap":
              case "WeakSet":
                return 2;
              default:
                return 0;
            }
          })(((e) => V(e).slice(8, -1))(a));
    var a;
    if (0 === i) return e;
    const c = new Proxy(e, 2 === i ? o : n);
    return s.set(e, c), c;
  }
  function Ct(e) {
    return Tt(e) ? Ct(e.__v_raw) : !(!e || !e.__v_isReactive);
  }
  function Tt(e) {
    return !(!e || !e.__v_isReadonly);
  }
  function Et(e) {
    return Ct(e) || Tt(e);
  }
  function kt(e) {
    const t = e && e.__v_raw;
    return t ? kt(t) : e;
  }
  function Ot(e) {
    return Q(e, "__v_skip", !0), e;
  }
  const It = (e) => (B(e) ? bt(e) : e),
    Rt = (e) => (B(e) ? wt(e) : e);
  function Nt(e) {
    Ie() && ((e = kt(e)).dep || (e.dep = ue()), Re(e.dep));
  }
  function jt(e, t) {
    (e = kt(e)).dep && je(e.dep);
  }
  function Lt(e) {
    return Boolean(e && !0 === e.__v_isRef);
  }
  function Mt(e) {
    return Ft(e, !1);
  }
  function Pt(e) {
    return Ft(e, !0);
  }
  function Ft(e, t) {
    return Lt(e) ? e : new Bt(e, t);
  }
  class Bt {
    constructor(e, t) {
      (this._shallow = t),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = t ? e : kt(e)),
        (this._value = t ? e : It(e));
    }
    get value() {
      return Nt(this), this._value;
    }
    set value(e) {
      (e = this._shallow ? e : kt(e)),
        X(e, this._rawValue) &&
          ((this._rawValue = e),
          (this._value = this._shallow ? e : It(e)),
          jt(this));
    }
  }
  function Dt(e) {
    jt(e);
  }
  function At(e) {
    return Lt(e) ? e.value : e;
  }
  const Vt = {
    get: (e, t, n) => At(Reflect.get(e, t, n)),
    set: (e, t, n, o) => {
      const s = e[t];
      return Lt(s) && !Lt(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, o);
    },
  };
  function $t(e) {
    return Ct(e) ? e : new Proxy(e, Vt);
  }
  class zt {
    constructor(e) {
      (this.dep = void 0), (this.__v_isRef = !0);
      const { get: t, set: n } = e(
        () => Nt(this),
        () => jt(this)
      );
      (this._get = t), (this._set = n);
    }
    get value() {
      return this._get();
    }
    set value(e) {
      this._set(e);
    }
  }
  function Ut(e) {
    return new zt(e);
  }
  function Ht(e) {
    const t = R(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Kt(e, n);
    return t;
  }
  class Wt {
    constructor(e, t, n) {
      (this._object = e),
        (this._key = t),
        (this._defaultValue = n),
        (this.__v_isRef = !0);
    }
    get value() {
      const e = this._object[this._key];
      return void 0 === e ? this._defaultValue : e;
    }
    set value(e) {
      this._object[this._key] = e;
    }
  }
  function Kt(e, t, n) {
    const o = e[t];
    return Lt(o) ? o : new Wt(e, t, n);
  }
  class Gt {
    constructor(e, t, n) {
      (this._setter = t),
        (this.dep = void 0),
        (this._dirty = !0),
        (this.__v_isRef = !0),
        (this.effect = new xe(e, () => {
          this._dirty || ((this._dirty = !0), jt(this));
        })),
        (this.__v_isReadonly = n);
    }
    get value() {
      const e = kt(this);
      return (
        Nt(e),
        e._dirty && ((e._dirty = !1), (e._value = e.effect.run())),
        e._value
      );
    }
    set value(e) {
      this._setter(e);
    }
  }
  function qt(e, t) {
    let n, o;
    const s = M(e);
    return (
      s ? ((n = e), (o = w)) : ((n = e.get), (o = e.set)), new Gt(n, o, s || !o)
    );
  }
  Promise.resolve(), new Set(), new Map();
  let Jt,
    Yt = [],
    Xt = !1;
  function Zt(e, ...t) {
    Jt ? Jt.emit(e, ...t) : Xt || Yt.push({ event: e, args: t });
  }
  function Qt(e, t) {
    var n, o;
    (Jt = e),
      Jt
        ? ((Jt.enabled = !0),
          Yt.forEach(({ event: e, args: t }) => Jt.emit(e, ...t)),
          (Yt = []))
        : "undefined" != typeof window &&
          window.HTMLElement &&
          !(null ===
            (o =
              null === (n = window.navigator) || void 0 === n
                ? void 0
                : n.userAgent) || void 0 === o
            ? void 0
            : o.includes("jsdom"))
        ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
            t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
            Qt(e, t);
          }),
          setTimeout(() => {
            Jt ||
              ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Xt = !0), (Yt = []));
          }, 3e3))
        : ((Xt = !0), (Yt = []));
  }
  const en = on("component:added"),
    tn = on("component:updated"),
    nn = on("component:removed");
  function on(e) {
    return (t) => {
      Zt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
    };
  }
  function sn(e, t, ...n) {
    const o = e.vnode.props || b;
    let s = n;
    const r = t.startsWith("update:"),
      i = r && t.slice(7);
    if (i && i in o) {
      const e = `${"modelValue" === i ? "model" : i}Modifiers`,
        { number: t, trim: r } = o[e] || b;
      r ? (s = n.map((e) => e.trim())) : t && (s = n.map(ee));
    }
    let a;
    __VUE_PROD_DEVTOOLS__ &&
      (function (e, t, n) {
        Zt("component:emit", e.appContext.app, e, t, n);
      })(e, t, s);
    let c = o[(a = Y(t))] || o[(a = Y(K(t)))];
    !c && r && (c = o[(a = Y(q(t)))]), c && vr(c, e, 6, s);
    const l = o[a + "Once"];
    if (l) {
      if (e.emitted) {
        if (e.emitted[a]) return;
      } else e.emitted = {};
      (e.emitted[a] = !0), vr(l, e, 6, s);
    }
  }
  function rn(e, t, n = !1) {
    const o = t.emitsCache,
      s = o.get(e);
    if (void 0 !== s) return s;
    const r = e.emits;
    let i = {},
      a = !1;
    if (__VUE_OPTIONS_API__ && !M(e)) {
      const o = (e) => {
        const n = rn(e, t, !0);
        n && ((a = !0), E(i, n));
      };
      !n && t.mixins.length && t.mixins.forEach(o),
        e.extends && o(e.extends),
        e.mixins && e.mixins.forEach(o);
    }
    return r || a
      ? (R(r) ? r.forEach((e) => (i[e] = null)) : E(i, r), o.set(e, i), i)
      : (o.set(e, null), null);
  }
  function an(e, t) {
    return (
      !(!e || !C(t)) &&
      ((t = t.slice(2).replace(/Once$/, "")),
      I(e, t[0].toLowerCase() + t.slice(1)) || I(e, q(t)) || I(e, t))
    );
  }
  let cn = null,
    ln = null;
  function un(e) {
    const t = cn;
    return (cn = e), (ln = (e && e.type.__scopeId) || null), t;
  }
  function dn(e) {
    ln = e;
  }
  function pn() {
    ln = null;
  }
  const fn = (e) => hn;
  function hn(e, t = cn, n) {
    if (!t) return e;
    if (e._n) return e;
    const o = (...n) => {
      o._d && gs(-1);
      const s = un(t),
        r = e(...n);
      return un(s), o._d && gs(1), __VUE_PROD_DEVTOOLS__ && tn(t), r;
    };
    return (o._n = !0), (o._c = !0), (o._d = !0), o;
  }
  function gn(e) {
    const {
      type: t,
      vnode: n,
      proxy: o,
      withProxy: s,
      props: r,
      propsOptions: [i],
      slots: a,
      attrs: c,
      emit: l,
      render: u,
      renderCache: d,
      data: p,
      setupState: f,
      ctx: h,
      inheritAttrs: g,
    } = e;
    let m, y;
    const v = un(e);
    try {
      if (4 & n.shapeFlag) {
        const e = s || o;
        (m = js(u.call(e, e, d, r, f, p, h))), (y = c);
      } else {
        const e = t;
        (m = js(
          e.length > 1 ? e(r, { attrs: c, slots: a, emit: l }) : e(r, null)
        )),
          (y = t.props ? c : mn(c));
      }
    } catch (t) {
      (ls.length = 0), br(t, e, 1), (m = Es(as));
    }
    let b = m;
    if (y && !1 !== g) {
      const e = Object.keys(y),
        { shapeFlag: t } = b;
      e.length && 7 & t && (i && e.some(T) && (y = yn(y, i)), (b = Os(b, y)));
    }
    return (
      n.dirs && (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs),
      n.transition && (b.transition = n.transition),
      (m = b),
      un(v),
      m
    );
  }
  const mn = (e) => {
      let t;
      for (const n in e)
        ("class" === n || "style" === n || C(n)) && ((t || (t = {}))[n] = e[n]);
      return t;
    },
    yn = (e, t) => {
      const n = {};
      for (const o in e) (T(o) && o.slice(9) in t) || (n[o] = e[o]);
      return n;
    };
  function vn(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < o.length; s++) {
      const r = o[s];
      if (t[r] !== e[r] && !an(n, r)) return !0;
    }
    return !1;
  }
  function bn({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
  }
  const xn = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, o, s, r, i, a, c, l) {
      null == e
        ? (function (e, t, n, o, s, r, i, a, c) {
            const {
                p: l,
                o: { createElement: u },
              } = c,
              d = u("div"),
              p = (e.suspense = _n(e, s, o, t, d, n, r, i, a, c));
            l(null, (p.pendingBranch = e.ssContent), d, null, o, p, r, i),
              p.deps > 0
                ? (wn(e, "onPending"),
                  wn(e, "onFallback"),
                  l(null, e.ssFallback, t, n, o, null, r, i),
                  Tn(p, e.ssFallback))
                : p.resolve();
          })(t, n, o, s, r, i, a, c, l)
        : (function (
            e,
            t,
            n,
            o,
            s,
            r,
            i,
            a,
            { p: c, um: l, o: { createElement: u } }
          ) {
            const d = (t.suspense = e.suspense);
            (d.vnode = t), (t.el = e.el);
            const p = t.ssContent,
              f = t.ssFallback,
              {
                activeBranch: h,
                pendingBranch: g,
                isInFallback: m,
                isHydrating: y,
              } = d;
            if (g)
              (d.pendingBranch = p),
                xs(p, g)
                  ? (c(g, p, d.hiddenContainer, null, s, d, r, i, a),
                    d.deps <= 0
                      ? d.resolve()
                      : m && (c(h, f, n, o, s, null, r, i, a), Tn(d, f)))
                  : (d.pendingId++,
                    y
                      ? ((d.isHydrating = !1), (d.activeBranch = g))
                      : l(g, s, d),
                    (d.deps = 0),
                    (d.effects.length = 0),
                    (d.hiddenContainer = u("div")),
                    m
                      ? (c(null, p, d.hiddenContainer, null, s, d, r, i, a),
                        d.deps <= 0
                          ? d.resolve()
                          : (c(h, f, n, o, s, null, r, i, a), Tn(d, f)))
                      : h && xs(p, h)
                      ? (c(h, p, n, o, s, d, r, i, a), d.resolve(!0))
                      : (c(null, p, d.hiddenContainer, null, s, d, r, i, a),
                        d.deps <= 0 && d.resolve()));
            else if (h && xs(p, h)) c(h, p, n, o, s, d, r, i, a), Tn(d, p);
            else if (
              (wn(t, "onPending"),
              (d.pendingBranch = p),
              d.pendingId++,
              c(null, p, d.hiddenContainer, null, s, d, r, i, a),
              d.deps <= 0)
            )
              d.resolve();
            else {
              const { timeout: e, pendingId: t } = d;
              e > 0
                ? setTimeout(() => {
                    d.pendingId === t && d.fallback(f);
                  }, e)
                : 0 === e && d.fallback(f);
            }
          })(e, t, n, o, s, i, a, c, l);
    },
    hydrate: function (e, t, n, o, s, r, i, a, c) {
      const l = (t.suspense = _n(
          t,
          o,
          n,
          e.parentNode,
          document.createElement("div"),
          null,
          s,
          r,
          i,
          a,
          !0
        )),
        u = c(e, (l.pendingBranch = t.ssContent), n, l, r, i);
      return 0 === l.deps && l.resolve(), u;
    },
    create: _n,
    normalize: function (e) {
      const { shapeFlag: t, children: n } = e,
        o = 32 & t;
      (e.ssContent = Sn(o ? n.default : n)),
        (e.ssFallback = o ? Sn(n.fallback) : Es(as));
    },
  };
  function wn(e, t) {
    const n = e.props && e.props[t];
    M(n) && n();
  }
  function _n(e, t, n, o, s, r, i, a, c, l, u = !1) {
    const {
        p: d,
        m: p,
        um: f,
        n: h,
        o: { parentNode: g, remove: m },
      } = l,
      y = ee(e.props && e.props.timeout),
      v = {
        vnode: e,
        parent: t,
        parentComponent: n,
        isSVG: i,
        container: o,
        hiddenContainer: s,
        anchor: r,
        deps: 0,
        pendingId: 0,
        timeout: "number" == typeof y ? y : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !0,
        isHydrating: u,
        isUnmounted: !1,
        effects: [],
        resolve(e = !1) {
          const {
            vnode: t,
            activeBranch: n,
            pendingBranch: o,
            pendingId: s,
            effects: r,
            parentComponent: i,
            container: a,
          } = v;
          if (v.isHydrating) v.isHydrating = !1;
          else if (!e) {
            const e = n && o.transition && "out-in" === o.transition.mode;
            e &&
              (n.transition.afterLeave = () => {
                s === v.pendingId && p(o, a, t, 0);
              });
            let { anchor: t } = v;
            n && ((t = h(n)), f(n, i, v, !0)), e || p(o, a, t, 0);
          }
          Tn(v, o), (v.pendingBranch = null), (v.isInFallback = !1);
          let c = v.parent,
            l = !1;
          for (; c; ) {
            if (c.pendingBranch) {
              c.effects.push(...r), (l = !0);
              break;
            }
            c = c.parent;
          }
          l || Br(r), (v.effects = []), wn(t, "onResolve");
        },
        fallback(e) {
          if (!v.pendingBranch) return;
          const {
            vnode: t,
            activeBranch: n,
            parentComponent: o,
            container: s,
            isSVG: r,
          } = v;
          wn(t, "onFallback");
          const i = h(n),
            l = () => {
              v.isInFallback && (d(null, e, s, i, o, null, r, a, c), Tn(v, e));
            },
            u = e.transition && "out-in" === e.transition.mode;
          u && (n.transition.afterLeave = l),
            (v.isInFallback = !0),
            f(n, o, null, !0),
            u || l();
        },
        move(e, t, n) {
          v.activeBranch && p(v.activeBranch, e, t, n), (v.container = e);
        },
        next: () => v.activeBranch && h(v.activeBranch),
        registerDep(e, t) {
          const n = !!v.pendingBranch;
          n && v.deps++;
          const o = e.vnode.el;
          e.asyncDep
            .catch((t) => {
              br(t, e, 0);
            })
            .then((s) => {
              if (
                e.isUnmounted ||
                v.isUnmounted ||
                v.pendingId !== e.suspenseId
              )
                return;
              e.asyncResolved = !0;
              const { vnode: r } = e;
              sr(e, s, !1), o && (r.el = o);
              const a = !o && e.subTree.el;
              t(e, r, g(o || e.subTree.el), o ? null : h(e.subTree), v, i, c),
                a && m(a),
                bn(e, r.el),
                n && 0 == --v.deps && v.resolve();
            });
        },
        unmount(e, t) {
          (v.isUnmounted = !0),
            v.activeBranch && f(v.activeBranch, n, e, t),
            v.pendingBranch && f(v.pendingBranch, n, e, t);
        },
      };
    return v;
  }
  function Sn(e) {
    let t;
    if (M(e)) {
      const n = hs && e._c;
      n && ((e._d = !1), ds()), (e = e()), n && ((e._d = !0), (t = us), ps());
    }
    if (R(e)) {
      const t = (function (e) {
        let t;
        for (let n = 0; n < e.length; n++) {
          const o = e[n];
          if (!bs(o)) return;
          if (o.type !== as || "v-if" === o.children) {
            if (t) return;
            t = o;
          }
        }
        return t;
      })(e);
      e = t;
    }
    return (
      (e = js(e)),
      t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)),
      e
    );
  }
  function Cn(e, t) {
    t && t.pendingBranch
      ? R(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : Br(e);
  }
  function Tn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: o } = e,
      s = (n.el = t.el);
    o && o.subTree === n && ((o.vnode.el = s), bn(o, s));
  }
  function En(e, t) {
    if (Js) {
      let n = Js.provides;
      const o = Js.parent && Js.parent.provides;
      o === n && (n = Js.provides = Object.create(o)), (n[e] = t);
    }
  }
  function kn(e, t, n = !1) {
    const o = Js || cn;
    if (o) {
      const s =
        null == o.parent
          ? o.vnode.appContext && o.vnode.appContext.provides
          : o.parent.provides;
      if (s && e in s) return s[e];
      if (arguments.length > 1) return n && M(t) ? t.call(o.proxy) : t;
    }
  }
  function On() {
    const e = {
      isMounted: !1,
      isLeaving: !1,
      isUnmounting: !1,
      leavingVNodes: new Map(),
    };
    return (
      Qn(() => {
        e.isMounted = !0;
      }),
      no(() => {
        e.isUnmounting = !0;
      }),
      e
    );
  }
  const In = [Function, Array],
    Rn = {
      name: "BaseTransition",
      props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: In,
        onEnter: In,
        onAfterEnter: In,
        onEnterCancelled: In,
        onBeforeLeave: In,
        onLeave: In,
        onAfterLeave: In,
        onLeaveCancelled: In,
        onBeforeAppear: In,
        onAppear: In,
        onAfterAppear: In,
        onAppearCancelled: In,
      },
      setup(e, { slots: t }) {
        const n = Ys(),
          o = On();
        let s;
        return () => {
          const r = t.default && Fn(t.default(), !0);
          if (!r || !r.length) return;
          const i = kt(e),
            { mode: a } = i,
            c = r[0];
          if (o.isLeaving) return Ln(c);
          const l = Mn(c);
          if (!l) return Ln(c);
          const u = jn(l, i, o, n);
          Pn(l, u);
          const d = n.subTree,
            p = d && Mn(d);
          let f = !1;
          const { getTransitionKey: h } = l.type;
          if (h) {
            const e = h();
            void 0 === s ? (s = e) : e !== s && ((s = e), (f = !0));
          }
          if (p && p.type !== as && (!xs(l, p) || f)) {
            const e = jn(p, i, o, n);
            if ((Pn(p, e), "out-in" === a))
              return (
                (o.isLeaving = !0),
                (e.afterLeave = () => {
                  (o.isLeaving = !1), n.update();
                }),
                Ln(c)
              );
            "in-out" === a &&
              l.type !== as &&
              (e.delayLeave = (e, t, n) => {
                (Nn(o, p)[String(p.key)] = p),
                  (e._leaveCb = () => {
                    t(), (e._leaveCb = void 0), delete u.delayedLeave;
                  }),
                  (u.delayedLeave = n);
              });
          }
          return c;
        };
      },
    };
  function Nn(e, t) {
    const { leavingVNodes: n } = e;
    let o = n.get(t.type);
    return o || ((o = Object.create(null)), n.set(t.type, o)), o;
  }
  function jn(e, t, n, o) {
    const {
        appear: s,
        mode: r,
        persisted: i = !1,
        onBeforeEnter: a,
        onEnter: c,
        onAfterEnter: l,
        onEnterCancelled: u,
        onBeforeLeave: d,
        onLeave: p,
        onAfterLeave: f,
        onLeaveCancelled: h,
        onBeforeAppear: g,
        onAppear: m,
        onAfterAppear: y,
        onAppearCancelled: v,
      } = t,
      b = String(e.key),
      x = Nn(n, e),
      w = (e, t) => {
        e && vr(e, o, 9, t);
      },
      _ = {
        mode: r,
        persisted: i,
        beforeEnter(t) {
          let o = a;
          if (!n.isMounted) {
            if (!s) return;
            o = g || a;
          }
          t._leaveCb && t._leaveCb(!0);
          const r = x[b];
          r && xs(e, r) && r.el._leaveCb && r.el._leaveCb(), w(o, [t]);
        },
        enter(e) {
          let t = c,
            o = l,
            r = u;
          if (!n.isMounted) {
            if (!s) return;
            (t = m || c), (o = y || l), (r = v || u);
          }
          let i = !1;
          const a = (e._enterCb = (t) => {
            i ||
              ((i = !0),
              w(t ? r : o, [e]),
              _.delayedLeave && _.delayedLeave(),
              (e._enterCb = void 0));
          });
          t ? (t(e, a), t.length <= 1 && a()) : a();
        },
        leave(t, o) {
          const s = String(e.key);
          if ((t._enterCb && t._enterCb(!0), n.isUnmounting)) return o();
          w(d, [t]);
          let r = !1;
          const i = (t._leaveCb = (n) => {
            r ||
              ((r = !0),
              o(),
              w(n ? h : f, [t]),
              (t._leaveCb = void 0),
              x[s] === e && delete x[s]);
          });
          (x[s] = e), p ? (p(t, i), p.length <= 1 && i()) : i();
        },
        clone: (e) => jn(e, t, n, o),
      };
    return _;
  }
  function Ln(e) {
    if ($n(e)) return ((e = Os(e)).children = null), e;
  }
  function Mn(e) {
    return $n(e) ? (e.children ? e.children[0] : void 0) : e;
  }
  function Pn(e, t) {
    6 & e.shapeFlag && e.component
      ? Pn(e.component.subTree, t)
      : 128 & e.shapeFlag
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
  }
  function Fn(e, t = !1) {
    let n = [],
      o = 0;
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      r.type === rs
        ? (128 & r.patchFlag && o++, (n = n.concat(Fn(r.children, t))))
        : (t || r.type !== as) && n.push(r);
    }
    if (o > 1) for (let e = 0; e < n.length; e++) n[e].patchFlag = -2;
    return n;
  }
  function Bn(e) {
    return M(e) ? { setup: e, name: e.name } : e;
  }
  const Dn = (e) => !!e.type.__asyncLoader;
  function An(e) {
    M(e) && (e = { loader: e });
    const {
      loader: t,
      loadingComponent: n,
      errorComponent: o,
      delay: s = 200,
      timeout: r,
      suspensible: i = !0,
      onError: a,
    } = e;
    let c,
      l = null,
      u = 0;
    const d = () => {
      let e;
      return (
        l ||
        (e = l =
          t()
            .catch((e) => {
              if (((e = e instanceof Error ? e : new Error(String(e))), a))
                return new Promise((t, n) => {
                  a(
                    e,
                    () => t((u++, (l = null), d())),
                    () => n(e),
                    u + 1
                  );
                });
              throw e;
            })
            .then((t) =>
              e !== l && l
                ? l
                : (t &&
                    (t.__esModule || "Module" === t[Symbol.toStringTag]) &&
                    (t = t.default),
                  (c = t),
                  t)
            ))
      );
    };
    return Bn({
      name: "AsyncComponentWrapper",
      __asyncLoader: d,
      get __asyncResolved() {
        return c;
      },
      setup() {
        const e = Js;
        if (c) return () => Vn(c, e);
        const t = (t) => {
          (l = null), br(t, e, 13, !o);
        };
        if ((i && e.suspense) || nr)
          return d()
            .then((t) => () => Vn(t, e))
            .catch((e) => (t(e), () => (o ? Es(o, { error: e }) : null)));
        const a = Mt(!1),
          u = Mt(),
          p = Mt(!!s);
        return (
          s &&
            setTimeout(() => {
              p.value = !1;
            }, s),
          null != r &&
            setTimeout(() => {
              if (!a.value && !u.value) {
                const e = new Error(`Async component timed out after ${r}ms.`);
                t(e), (u.value = e);
              }
            }, r),
          d()
            .then(() => {
              (a.value = !0),
                e.parent && $n(e.parent.vnode) && Mr(e.parent.update);
            })
            .catch((e) => {
              t(e), (u.value = e);
            }),
          () =>
            a.value && c
              ? Vn(c, e)
              : u.value && o
              ? Es(o, { error: u.value })
              : n && !p.value
              ? Es(n)
              : void 0
        );
      },
    });
  }
  function Vn(e, { vnode: { ref: t, props: n, children: o } }) {
    const s = Es(e, n, o);
    return (s.ref = t), s;
  }
  const $n = (e) => e.type.__isKeepAlive,
    zn = {
      name: "KeepAlive",
      __isKeepAlive: !0,
      props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number],
      },
      setup(e, { slots: t }) {
        const n = Ys(),
          o = n.ctx;
        if (!o.renderer) return t.default;
        const s = new Map(),
          r = new Set();
        let i = null;
        __VUE_PROD_DEVTOOLS__ && (n.__v_cache = s);
        const a = n.suspense,
          {
            renderer: {
              p: c,
              m: l,
              um: u,
              o: { createElement: d },
            },
          } = o,
          p = d("div");
        function f(e) {
          qn(e), u(e, n, a);
        }
        function h(e) {
          s.forEach((t, n) => {
            const o = dr(t.type);
            !o || (e && e(o)) || g(n);
          });
        }
        function g(e) {
          const t = s.get(e);
          i && t.type === i.type ? i && qn(i) : f(t), s.delete(e), r.delete(e);
        }
        (o.activate = (e, t, n, o, s) => {
          const r = e.component;
          l(e, t, n, 0, a),
            c(r.vnode, e, t, n, r, a, o, e.slotScopeIds, s),
            $o(() => {
              (r.isDeactivated = !1), r.a && Z(r.a);
              const t = e.props && e.props.onVnodeMounted;
              t && Fs(t, r.parent, e);
            }, a),
            __VUE_PROD_DEVTOOLS__ && en(r);
        }),
          (o.deactivate = (e) => {
            const t = e.component;
            l(e, p, null, 1, a),
              $o(() => {
                t.da && Z(t.da);
                const n = e.props && e.props.onVnodeUnmounted;
                n && Fs(n, t.parent, e), (t.isDeactivated = !0);
              }, a),
              __VUE_PROD_DEVTOOLS__ && en(t);
          }),
          Kr(
            () => [e.include, e.exclude],
            ([e, t]) => {
              e && h((t) => Un(e, t)), t && h((e) => !Un(t, e));
            },
            { flush: "post", deep: !0 }
          );
        let m = null;
        const y = () => {
          null != m && s.set(m, Jn(n.subTree));
        };
        return (
          Qn(y),
          to(y),
          no(() => {
            s.forEach((e) => {
              const { subTree: t, suspense: o } = n,
                s = Jn(t);
              if (e.type !== s.type) f(e);
              else {
                qn(s);
                const e = s.component.da;
                e && $o(e, o);
              }
            });
          }),
          () => {
            if (((m = null), !t.default)) return null;
            const n = t.default(),
              o = n[0];
            if (n.length > 1) return (i = null), n;
            if (!bs(o) || !(4 & o.shapeFlag || 128 & o.shapeFlag))
              return (i = null), o;
            let a = Jn(o);
            const c = a.type,
              l = dr(Dn(a) ? a.type.__asyncResolved || {} : c),
              { include: u, exclude: d, max: p } = e;
            if ((u && (!l || !Un(u, l))) || (d && l && Un(d, l)))
              return (i = a), o;
            const f = null == a.key ? c : a.key,
              h = s.get(f);
            return (
              a.el && ((a = Os(a)), 128 & o.shapeFlag && (o.ssContent = a)),
              (m = f),
              h
                ? ((a.el = h.el),
                  (a.component = h.component),
                  a.transition && Pn(a, a.transition),
                  (a.shapeFlag |= 512),
                  r.delete(f),
                  r.add(f))
                : (r.add(f),
                  p && r.size > parseInt(p, 10) && g(r.values().next().value)),
              (a.shapeFlag |= 256),
              (i = a),
              o
            );
          }
        );
      },
    };
  function Un(e, t) {
    return R(e)
      ? e.some((e) => Un(e, t))
      : P(e)
      ? e.split(",").indexOf(t) > -1
      : !!e.test && e.test(t);
  }
  function Hn(e, t) {
    Kn(e, "a", t);
  }
  function Wn(e, t) {
    Kn(e, "da", t);
  }
  function Kn(e, t, n = Js) {
    const o =
      e.__wdc ||
      (e.__wdc = () => {
        let t = n;
        for (; t; ) {
          if (t.isDeactivated) return;
          t = t.parent;
        }
        return e();
      });
    if ((Yn(t, o, n), n)) {
      let e = n.parent;
      for (; e && e.parent; )
        $n(e.parent.vnode) && Gn(o, t, n, e), (e = e.parent);
    }
  }
  function Gn(e, t, n, o) {
    const s = Yn(t, e, o, !0);
    oo(() => {
      k(o[t], s);
    }, n);
  }
  function qn(e) {
    let t = e.shapeFlag;
    256 & t && (t -= 256), 512 & t && (t -= 512), (e.shapeFlag = t);
  }
  function Jn(e) {
    return 128 & e.shapeFlag ? e.ssContent : e;
  }
  function Yn(e, t, n = Js, o = !1) {
    if (n) {
      const s = n[e] || (n[e] = []),
        r =
          t.__weh ||
          (t.__weh = (...o) => {
            if (n.isUnmounted) return;
            Ee(), Xs(n);
            const s = vr(t, n, e, o);
            return Zs(), ke(), s;
          });
      return o ? s.unshift(r) : s.push(r), r;
    }
  }
  const Xn =
      (e) =>
      (t, n = Js) =>
        (!nr || "sp" === e) && Yn(e, t, n),
    Zn = Xn("bm"),
    Qn = Xn("m"),
    eo = Xn("bu"),
    to = Xn("u"),
    no = Xn("bum"),
    oo = Xn("um"),
    so = Xn("sp"),
    ro = Xn("rtg"),
    io = Xn("rtc");
  function ao(e, t = Js) {
    Yn("ec", e, t);
  }
  let co = !0;
  function lo(e, t, n) {
    vr(R(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function uo(e, t, n, o) {
    const s = o.includes(".") ? Jr(n, o) : () => n[o];
    if (P(e)) {
      const n = t[e];
      M(n) && Kr(s, n);
    } else if (M(e)) Kr(s, e.bind(n));
    else if (B(e))
      if (R(e)) e.forEach((e) => uo(e, t, n, o));
      else {
        const o = M(e.handler) ? e.handler.bind(n) : t[e.handler];
        M(o) && Kr(s, o, e);
      }
  }
  function po(e) {
    const t = e.type,
      { mixins: n, extends: o } = t,
      {
        mixins: s,
        optionsCache: r,
        config: { optionMergeStrategies: i },
      } = e.appContext,
      a = r.get(t);
    let c;
    return (
      a
        ? (c = a)
        : s.length || n || o
        ? ((c = {}), s.length && s.forEach((e) => fo(c, e, i, !0)), fo(c, t, i))
        : (c = t),
      r.set(t, c),
      c
    );
  }
  function fo(e, t, n, o = !1) {
    const { mixins: s, extends: r } = t;
    r && fo(e, r, n, !0), s && s.forEach((t) => fo(e, t, n, !0));
    for (const s in t)
      if (o && "expose" === s);
      else {
        const o = ho[s] || (n && n[s]);
        e[s] = o ? o(e[s], t[s]) : t[s];
      }
    return e;
  }
  const ho = {
    data: go,
    props: vo,
    emits: vo,
    methods: vo,
    computed: vo,
    beforeCreate: yo,
    created: yo,
    beforeMount: yo,
    mounted: yo,
    beforeUpdate: yo,
    updated: yo,
    beforeDestroy: yo,
    beforeUnmount: yo,
    destroyed: yo,
    unmounted: yo,
    activated: yo,
    deactivated: yo,
    errorCaptured: yo,
    serverPrefetch: yo,
    components: vo,
    directives: vo,
    watch: function (e, t) {
      if (!e) return t;
      if (!t) return e;
      const n = E(Object.create(null), e);
      for (const o in t) n[o] = yo(e[o], t[o]);
      return n;
    },
    provide: go,
    inject: function (e, t) {
      return vo(mo(e), mo(t));
    },
  };
  function go(e, t) {
    return t
      ? e
        ? function () {
            return E(
              M(e) ? e.call(this, this) : e,
              M(t) ? t.call(this, this) : t
            );
          }
        : t
      : e;
  }
  function mo(e) {
    if (R(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function yo(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function vo(e, t) {
    return e ? E(E(Object.create(null), e), t) : t;
  }
  function bo(e, t, n, o) {
    const [s, r] = e.propsOptions;
    let i,
      a = !1;
    if (t)
      for (let c in t) {
        if (U(c)) continue;
        const l = t[c];
        let u;
        s && I(s, (u = K(c)))
          ? r && r.includes(u)
            ? ((i || (i = {}))[u] = l)
            : (n[u] = l)
          : an(e.emitsOptions, c) ||
            (c in o && l === o[c]) ||
            ((o[c] = l), (a = !0));
      }
    if (r) {
      const t = kt(n),
        o = i || b;
      for (let i = 0; i < r.length; i++) {
        const a = r[i];
        n[a] = xo(s, t, a, o[a], e, !I(o, a));
      }
    }
    return a;
  }
  function xo(e, t, n, o, s, r) {
    const i = e[n];
    if (null != i) {
      const e = I(i, "default");
      if (e && void 0 === o) {
        const e = i.default;
        if (i.type !== Function && M(e)) {
          const { propsDefaults: r } = s;
          n in r ? (o = r[n]) : (Xs(s), (o = r[n] = e.call(null, t)), Zs());
        } else o = e;
      }
      i[0] &&
        (r && !e ? (o = !1) : !i[1] || ("" !== o && o !== q(n)) || (o = !0));
    }
    return o;
  }
  function wo(e, t, n = !1) {
    const o = t.propsCache,
      s = o.get(e);
    if (s) return s;
    const r = e.props,
      i = {},
      a = [];
    let c = !1;
    if (__VUE_OPTIONS_API__ && !M(e)) {
      const o = (e) => {
        c = !0;
        const [n, o] = wo(e, t, !0);
        E(i, n), o && a.push(...o);
      };
      !n && t.mixins.length && t.mixins.forEach(o),
        e.extends && o(e.extends),
        e.mixins && e.mixins.forEach(o);
    }
    if (!r && !c) return o.set(e, x), x;
    if (R(r))
      for (let e = 0; e < r.length; e++) {
        const t = K(r[e]);
        _o(t) && (i[t] = b);
      }
    else if (r)
      for (const e in r) {
        const t = K(e);
        if (_o(t)) {
          const n = r[e],
            o = (i[t] = R(n) || M(n) ? { type: n } : n);
          if (o) {
            const e = To(Boolean, o.type),
              n = To(String, o.type);
            (o[0] = e > -1),
              (o[1] = n < 0 || e < n),
              (e > -1 || I(o, "default")) && a.push(t);
          }
        }
      }
    const l = [i, a];
    return o.set(e, l), l;
  }
  function _o(e) {
    return "$" !== e[0];
  }
  function So(e) {
    const t = e && e.toString().match(/^\s*function (\w+)/);
    return t ? t[1] : null === e ? "null" : "";
  }
  function Co(e, t) {
    return So(e) === So(t);
  }
  function To(e, t) {
    return R(t) ? t.findIndex((t) => Co(t, e)) : M(t) && Co(t, e) ? 0 : -1;
  }
  const Eo = (e) => "_" === e[0] || "$stable" === e,
    ko = (e) => (R(e) ? e.map(js) : [js(e)]),
    Oo = (e, t, n) => {
      const o = hn((...e) => ko(t(...e)), n);
      return (o._c = !1), o;
    },
    Io = (e, t, n) => {
      const o = e._ctx;
      for (const n in e) {
        if (Eo(n)) continue;
        const s = e[n];
        if (M(s)) t[n] = Oo(0, s, o);
        else if (null != s) {
          const e = ko(s);
          t[n] = () => e;
        }
      }
    },
    Ro = (e, t) => {
      const n = ko(t);
      e.slots.default = () => n;
    };
  function No(e, t) {
    if (null === cn) return e;
    const n = cn.proxy,
      o = e.dirs || (e.dirs = []);
    for (let e = 0; e < t.length; e++) {
      let [s, r, i, a = b] = t[e];
      M(s) && (s = { mounted: s, updated: s }),
        s.deep && Yr(r),
        o.push({
          dir: s,
          instance: n,
          value: r,
          oldValue: void 0,
          arg: i,
          modifiers: a,
        });
    }
    return e;
  }
  function jo(e, t, n, o) {
    const s = e.dirs,
      r = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
      const a = s[i];
      r && (a.oldValue = r[i].value);
      let c = a.dir[o];
      c && (Ee(), vr(c, n, 8, [e.el, a, e, t]), ke());
    }
  }
  function Lo() {
    return {
      app: null,
      config: {
        isNativeTag: _,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  let Mo = 0;
  function Po(e, t) {
    return function (n, o = null) {
      null == o || B(o) || (o = null);
      const s = Lo(),
        r = new Set();
      let i = !1;
      const a = (s.app = {
        _uid: Mo++,
        _component: n,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: fi,
        get config() {
          return s.config;
        },
        set config(e) {},
        use: (e, ...t) => (
          r.has(e) ||
            (e && M(e.install)
              ? (r.add(e), e.install(a, ...t))
              : M(e) && (r.add(e), e(a, ...t))),
          a
        ),
        mixin: (e) => (
          __VUE_OPTIONS_API__ && (s.mixins.includes(e) || s.mixins.push(e)), a
        ),
        component: (e, t) => (t ? ((s.components[e] = t), a) : s.components[e]),
        directive: (e, t) => (t ? ((s.directives[e] = t), a) : s.directives[e]),
        mount(r, c, l) {
          if (!i) {
            const u = Es(n, o);
            return (
              (u.appContext = s),
              c && t ? t(u, r) : e(u, r, l),
              (i = !0),
              (a._container = r),
              (r.__vue_app__ = a),
              __VUE_PROD_DEVTOOLS__ &&
                ((a._instance = u.component),
                (function (e, t) {
                  Zt("app:init", e, t, {
                    Fragment: rs,
                    Text: is,
                    Comment: as,
                    Static: cs,
                  });
                })(a, fi)),
              lr(u.component) || u.component.proxy
            );
          }
        },
        unmount() {
          i &&
            (e(null, a._container),
            __VUE_PROD_DEVTOOLS__ &&
              ((a._instance = null),
              (function (e) {
                Zt("app:unmount", e);
              })(a)),
            delete a._container.__vue_app__);
        },
        provide: (e, t) => ((s.provides[e] = t), a),
      });
      return a;
    };
  }
  function Fo(e, t, n, o, s = !1) {
    if (R(e))
      return void e.forEach((e, r) => Fo(e, t && (R(t) ? t[r] : t), n, o, s));
    if (Dn(o) && !s) return;
    const r = 4 & o.shapeFlag ? lr(o.component) || o.component.proxy : o.el,
      i = s ? null : r,
      { i: a, r: c } = e,
      l = t && t.r,
      u = a.refs === b ? (a.refs = {}) : a.refs,
      d = a.setupState;
    if (
      (null != l &&
        l !== c &&
        (P(l)
          ? ((u[l] = null), I(d, l) && (d[l] = null))
          : Lt(l) && (l.value = null)),
      M(c))
    )
      yr(c, a, 12, [i, u]);
    else {
      const t = P(c),
        o = Lt(c);
      if (t || o) {
        const o = () => {
          if (e.f) {
            const n = t ? u[c] : c.value;
            s
              ? R(n) && k(n, r)
              : R(n)
              ? n.includes(r) || n.push(r)
              : t
              ? (u[c] = [r])
              : ((c.value = [r]), e.k && (u[e.k] = c.value));
          } else
            t
              ? ((u[c] = i), I(d, c) && (d[c] = i))
              : Lt(c) && ((c.value = i), e.k && (u[e.k] = i));
        };
        i ? ((o.id = -1), $o(o, n)) : o();
      }
    }
  }
  let Bo = !1;
  const Do = (e) => /svg/.test(e.namespaceURI) && "foreignObject" !== e.tagName,
    Ao = (e) => 8 === e.nodeType;
  function Vo(e) {
    const {
        mt: t,
        p: n,
        o: {
          patchProp: o,
          nextSibling: s,
          parentNode: r,
          remove: i,
          insert: a,
          createComment: c,
        },
      } = e,
      l = (n, o, i, a, c, g = !1) => {
        const m = Ao(n) && "[" === n.data,
          y = () => f(n, o, i, a, c, m),
          { type: v, ref: b, shapeFlag: x } = o,
          w = n.nodeType;
        o.el = n;
        let _ = null;
        switch (v) {
          case is:
            3 !== w
              ? (_ = y())
              : (n.data !== o.children && ((Bo = !0), (n.data = o.children)),
                (_ = s(n)));
            break;
          case as:
            _ = 8 !== w || m ? y() : s(n);
            break;
          case cs:
            if (1 === w) {
              _ = n;
              const e = !o.children.length;
              for (let t = 0; t < o.staticCount; t++)
                e && (o.children += _.outerHTML),
                  t === o.staticCount - 1 && (o.anchor = _),
                  (_ = s(_));
              return _;
            }
            _ = y();
            break;
          case rs:
            _ = m ? p(n, o, i, a, c, g) : y();
            break;
          default:
            if (1 & x)
              _ =
                1 !== w || o.type.toLowerCase() !== n.tagName.toLowerCase()
                  ? y()
                  : u(n, o, i, a, c, g);
            else if (6 & x) {
              o.slotScopeIds = c;
              const e = r(n);
              if (
                (t(o, e, null, i, a, Do(e), g), (_ = m ? h(n) : s(n)), Dn(o))
              ) {
                let t;
                m
                  ? ((t = Es(rs)),
                    (t.anchor = _ ? _.previousSibling : e.lastChild))
                  : (t = 3 === n.nodeType ? Is("") : Es("div")),
                  (t.el = n),
                  (o.component.subTree = t);
              }
            } else
              64 & x
                ? (_ = 8 !== w ? y() : o.type.hydrate(n, o, i, a, c, g, e, d))
                : 128 & x &&
                  (_ = o.type.hydrate(n, o, i, a, Do(r(n)), c, g, e, l));
        }
        return null != b && Fo(b, null, a, o), _;
      },
      u = (e, t, n, s, r, a) => {
        a = a || !!t.dynamicChildren;
        const { type: c, props: l, patchFlag: u, shapeFlag: p, dirs: f } = t,
          h = ("input" === c && f) || "option" === c;
        if (h || -1 !== u) {
          if ((f && jo(t, null, n, "created"), l))
            if (h || !a || 48 & u)
              for (const t in l)
                ((h && t.endsWith("value")) || (C(t) && !U(t))) &&
                  o(e, t, null, l[t], !1, void 0, n);
            else l.onClick && o(e, "onClick", null, l.onClick, !1, void 0, n);
          let c;
          if (
            ((c = l && l.onVnodeBeforeMount) && Fs(c, n, t),
            f && jo(t, null, n, "beforeMount"),
            ((c = l && l.onVnodeMounted) || f) &&
              Cn(() => {
                c && Fs(c, n, t), f && jo(t, null, n, "mounted");
              }, s),
            16 & p && (!l || (!l.innerHTML && !l.textContent)))
          ) {
            let o = d(e.firstChild, t, e, n, s, r, a);
            for (; o; ) {
              Bo = !0;
              const e = o;
              (o = o.nextSibling), i(e);
            }
          } else
            8 & p &&
              e.textContent !== t.children &&
              ((Bo = !0), (e.textContent = t.children));
        }
        return e.nextSibling;
      },
      d = (e, t, o, s, r, i, a) => {
        a = a || !!t.dynamicChildren;
        const c = t.children,
          u = c.length;
        for (let t = 0; t < u; t++) {
          const u = a ? c[t] : (c[t] = js(c[t]));
          if (e) e = l(e, u, s, r, i, a);
          else {
            if (u.type === is && !u.children) continue;
            (Bo = !0), n(null, u, o, null, s, r, Do(o), i);
          }
        }
        return e;
      },
      p = (e, t, n, o, i, l) => {
        const { slotScopeIds: u } = t;
        u && (i = i ? i.concat(u) : u);
        const p = r(e),
          f = d(s(e), t, p, n, o, i, l);
        return f && Ao(f) && "]" === f.data
          ? s((t.anchor = f))
          : ((Bo = !0), a((t.anchor = c("]")), p, f), f);
      },
      f = (e, t, o, a, c, l) => {
        if (((Bo = !0), (t.el = null), l)) {
          const t = h(e);
          for (;;) {
            const n = s(e);
            if (!n || n === t) break;
            i(n);
          }
        }
        const u = s(e),
          d = r(e);
        return i(e), n(null, t, d, u, o, a, Do(d), c), u;
      },
      h = (e) => {
        let t = 0;
        for (; e; )
          if ((e = s(e)) && Ao(e) && ("[" === e.data && t++, "]" === e.data)) {
            if (0 === t) return s(e);
            t--;
          }
        return e;
      };
    return [
      (e, t) => {
        if (!t.hasChildNodes()) return n(null, e, t), void Ar();
        (Bo = !1),
          l(t.firstChild, e, null, null, null),
          Ar(),
          Bo && console.error("Hydration completed but contains mismatches.");
      },
      l,
    ];
  }
  const $o = Cn;
  function zo(e) {
    return Ho(e);
  }
  function Uo(e) {
    return Ho(e, Vo);
  }
  function Ho(e, t) {
    "boolean" != typeof __VUE_OPTIONS_API__ && (ne().__VUE_OPTIONS_API__ = !0),
      "boolean" != typeof __VUE_PROD_DEVTOOLS__ &&
        (ne().__VUE_PROD_DEVTOOLS__ = !1);
    const n = ne();
    (n.__VUE__ = !0),
      __VUE_PROD_DEVTOOLS__ && Qt(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
    const {
        insert: o,
        remove: s,
        patchProp: r,
        createElement: i,
        createText: a,
        createComment: c,
        setText: l,
        setElementText: u,
        parentNode: d,
        nextSibling: p,
        setScopeId: f = w,
        cloneNode: h,
        insertStaticContent: g,
      } = e,
      m = (
        e,
        t,
        n,
        o = null,
        s = null,
        r = null,
        i = !1,
        a = null,
        c = !!t.dynamicChildren
      ) => {
        if (e === t) return;
        e && !xs(e, t) && ((o = Y(e)), z(e, s, r, !0), (e = null)),
          -2 === t.patchFlag && ((c = !1), (t.dynamicChildren = null));
        const { type: l, ref: u, shapeFlag: d } = t;
        switch (l) {
          case is:
            y(e, t, n, o);
            break;
          case as:
            v(e, t, n, o);
            break;
          case cs:
            null == e && _(t, n, o, i);
            break;
          case rs:
            j(e, t, n, o, s, r, i, a, c);
            break;
          default:
            1 & d
              ? S(e, t, n, o, s, r, i, a, c)
              : 6 & d
              ? L(e, t, n, o, s, r, i, a, c)
              : (64 & d || 128 & d) && l.process(e, t, n, o, s, r, i, a, c, Q);
        }
        null != u && s && Fo(u, e && e.ref, r, t || e, !t);
      },
      y = (e, t, n, s) => {
        if (null == e) o((t.el = a(t.children)), n, s);
        else {
          const n = (t.el = e.el);
          t.children !== e.children && l(n, t.children);
        }
      },
      v = (e, t, n, s) => {
        null == e ? o((t.el = c(t.children || "")), n, s) : (t.el = e.el);
      },
      _ = (e, t, n, o) => {
        [e.el, e.anchor] = g(e.children, t, n, o);
      },
      S = (e, t, n, o, s, r, i, a, c) => {
        (i = i || "svg" === t.type),
          null == e ? C(t, n, o, s, r, i, a, c) : O(e, t, s, r, i, a, c);
      },
      C = (e, t, n, s, a, c, l, d) => {
        let p, f;
        const {
          type: g,
          props: m,
          shapeFlag: y,
          transition: v,
          patchFlag: b,
          dirs: x,
        } = e;
        if (e.el && void 0 !== h && -1 === b) p = e.el = h(e.el);
        else {
          if (
            ((p = e.el = i(e.type, c, m && m.is, m)),
            8 & y
              ? u(p, e.children)
              : 16 & y &&
                k(e.children, p, null, s, a, c && "foreignObject" !== g, l, d),
            x && jo(e, null, s, "created"),
            m)
          ) {
            for (const t in m)
              "value" === t ||
                U(t) ||
                r(p, t, null, m[t], c, e.children, s, a, J);
            "value" in m && r(p, "value", null, m.value),
              (f = m.onVnodeBeforeMount) && Fs(f, s, e);
          }
          T(p, e, e.scopeId, l, s);
        }
        __VUE_PROD_DEVTOOLS__ &&
          (Object.defineProperty(p, "__vnode", { value: e, enumerable: !1 }),
          Object.defineProperty(p, "__vueParentComponent", {
            value: s,
            enumerable: !1,
          })),
          x && jo(e, null, s, "beforeMount");
        const w = (!a || (a && !a.pendingBranch)) && v && !v.persisted;
        w && v.beforeEnter(p),
          o(p, t, n),
          ((f = m && m.onVnodeMounted) || w || x) &&
            $o(() => {
              f && Fs(f, s, e), w && v.enter(p), x && jo(e, null, s, "mounted");
            }, a);
      },
      T = (e, t, n, o, s) => {
        if ((n && f(e, n), o)) for (let t = 0; t < o.length; t++) f(e, o[t]);
        if (s && t === s.subTree) {
          const t = s.vnode;
          T(e, t, t.scopeId, t.slotScopeIds, s.parent);
        }
      },
      k = (e, t, n, o, s, r, i, a, c = 0) => {
        for (let l = c; l < e.length; l++) {
          const c = (e[l] = a ? Ls(e[l]) : js(e[l]));
          m(null, c, t, n, o, s, r, i, a);
        }
      },
      O = (e, t, n, o, s, i, a) => {
        const c = (t.el = e.el);
        let { patchFlag: l, dynamicChildren: d, dirs: p } = t;
        l |= 16 & e.patchFlag;
        const f = e.props || b,
          h = t.props || b;
        let g;
        n && Wo(n, !1),
          (g = h.onVnodeBeforeUpdate) && Fs(g, n, t, e),
          p && jo(t, e, n, "beforeUpdate"),
          n && Wo(n, !0);
        const m = s && "foreignObject" !== t.type;
        if (
          (d
            ? R(e.dynamicChildren, d, c, n, o, m, i)
            : a || D(e, t, c, null, n, o, m, i, !1),
          l > 0)
        ) {
          if (16 & l) N(c, t, f, h, n, o, s);
          else if (
            (2 & l && f.class !== h.class && r(c, "class", null, h.class, s),
            4 & l && r(c, "style", f.style, h.style, s),
            8 & l)
          ) {
            const i = t.dynamicProps;
            for (let t = 0; t < i.length; t++) {
              const a = i[t],
                l = f[a],
                u = h[a];
              (u === l && "value" !== a) ||
                r(c, a, l, u, s, e.children, n, o, J);
            }
          }
          1 & l && e.children !== t.children && u(c, t.children);
        } else a || null != d || N(c, t, f, h, n, o, s);
        ((g = h.onVnodeUpdated) || p) &&
          $o(() => {
            g && Fs(g, n, t, e), p && jo(t, e, n, "updated");
          }, o);
      },
      R = (e, t, n, o, s, r, i) => {
        for (let a = 0; a < t.length; a++) {
          const c = e[a],
            l = t[a],
            u =
              c.el && (c.type === rs || !xs(c, l) || 70 & c.shapeFlag)
                ? d(c.el)
                : n;
          m(c, l, u, null, o, s, r, i, !0);
        }
      },
      N = (e, t, n, o, s, i, a) => {
        if (n !== o) {
          for (const c in o) {
            if (U(c)) continue;
            const l = o[c],
              u = n[c];
            l !== u && "value" !== c && r(e, c, u, l, a, t.children, s, i, J);
          }
          if (n !== b)
            for (const c in n)
              U(c) || c in o || r(e, c, n[c], null, a, t.children, s, i, J);
          "value" in o && r(e, "value", n.value, o.value);
        }
      },
      j = (e, t, n, s, r, i, c, l, u) => {
        const d = (t.el = e ? e.el : a("")),
          p = (t.anchor = e ? e.anchor : a(""));
        let { patchFlag: f, dynamicChildren: h, slotScopeIds: g } = t;
        g && (l = l ? l.concat(g) : g),
          null == e
            ? (o(d, n, s), o(p, n, s), k(t.children, n, p, r, i, c, l, u))
            : f > 0 && 64 & f && h && e.dynamicChildren
            ? (R(e.dynamicChildren, h, n, r, i, c, l),
              (null != t.key || (r && t === r.subTree)) && Ko(e, t, !0))
            : D(e, t, n, p, r, i, c, l, u);
      },
      L = (e, t, n, o, s, r, i, a, c) => {
        (t.slotScopeIds = a),
          null == e
            ? 512 & t.shapeFlag
              ? s.ctx.activate(t, n, o, i, c)
              : M(t, n, o, s, r, i, c)
            : P(e, t, c);
      },
      M = (e, t, n, o, s, r, i) => {
        const a = (e.component = qs(e, o, s));
        if (($n(e) && (a.ctx.renderer = Q), or(a), a.asyncDep)) {
          if ((s && s.registerDep(a, F), !e.el)) {
            const e = (a.subTree = Es(as));
            v(null, e, t, n);
          }
        } else F(a, e, t, n, s, r, i);
      },
      P = (e, t, n) => {
        const o = (t.component = e.component);
        if (
          (function (e, t, n) {
            const { props: o, children: s, component: r } = e,
              { props: i, children: a, patchFlag: c } = t,
              l = r.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && c >= 0))
              return (
                !((!s && !a) || (a && a.$stable)) ||
                (o !== i && (o ? !i || vn(o, i, l) : !!i))
              );
            if (1024 & c) return !0;
            if (16 & c) return o ? vn(o, i, l) : !!i;
            if (8 & c) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (i[n] !== o[n] && !an(l, n)) return !0;
              }
            }
            return !1;
          })(e, t, n)
        ) {
          if (o.asyncDep && !o.asyncResolved) return void B(o, t, n);
          (o.next = t),
            (function (e) {
              const t = _r.indexOf(e);
              t > Sr && _r.splice(t, 1);
            })(o.update),
            o.update();
        } else (t.component = e.component), (t.el = e.el), (o.vnode = t);
      },
      F = (e, t, n, o, s, r, i) => {
        const a = (e.effect = new xe(
            () => {
              if (e.isMounted) {
                let t,
                  { next: n, bu: o, u: a, parent: c, vnode: l } = e,
                  u = n;
                Wo(e, !1),
                  n ? ((n.el = l.el), B(e, n, i)) : (n = l),
                  o && Z(o),
                  (t = n.props && n.props.onVnodeBeforeUpdate) &&
                    Fs(t, c, n, l),
                  Wo(e, !0);
                const p = gn(e),
                  f = e.subTree;
                (e.subTree = p),
                  m(f, p, d(f.el), Y(f), e, s, r),
                  (n.el = p.el),
                  null === u && bn(e, p.el),
                  a && $o(a, s),
                  (t = n.props && n.props.onVnodeUpdated) &&
                    $o(() => Fs(t, c, n, l), s),
                  __VUE_PROD_DEVTOOLS__ && tn(e);
              } else {
                let i;
                const { el: a, props: c } = t,
                  { bm: l, m: u, parent: d } = e,
                  p = Dn(t);
                if (
                  (Wo(e, !1),
                  l && Z(l),
                  !p && (i = c && c.onVnodeBeforeMount) && Fs(i, d, t),
                  Wo(e, !0),
                  a && te)
                ) {
                  const n = () => {
                    (e.subTree = gn(e)), te(a, e.subTree, e, s, null);
                  };
                  p
                    ? t.type.__asyncLoader().then(() => !e.isUnmounted && n())
                    : n();
                } else {
                  const i = (e.subTree = gn(e));
                  m(null, i, n, o, e, s, r), (t.el = i.el);
                }
                if ((u && $o(u, s), !p && (i = c && c.onVnodeMounted))) {
                  const e = t;
                  $o(() => Fs(i, d, e), s);
                }
                256 & t.shapeFlag && e.a && $o(e.a, s),
                  (e.isMounted = !0),
                  __VUE_PROD_DEVTOOLS__ && en(e),
                  (t = n = o = null);
              }
            },
            () => Mr(e.update),
            e.scope
          )),
          c = (e.update = a.run.bind(a));
        (c.id = e.uid), Wo(e, !0), c();
      },
      B = (e, t, n) => {
        t.component = e;
        const o = e.vnode.props;
        (e.vnode = t),
          (e.next = null),
          (function (e, t, n, o) {
            const {
                props: s,
                attrs: r,
                vnode: { patchFlag: i },
              } = e,
              a = kt(s),
              [c] = e.propsOptions;
            let l = !1;
            if (!(o || i > 0) || 16 & i) {
              let o;
              bo(e, t, s, r) && (l = !0);
              for (const r in a)
                (t && (I(t, r) || ((o = q(r)) !== r && I(t, o)))) ||
                  (c
                    ? !n ||
                      (void 0 === n[r] && void 0 === n[o]) ||
                      (s[r] = xo(c, a, r, void 0, e, !0))
                    : delete s[r]);
              if (r !== a)
                for (const e in r) (t && I(t, e)) || (delete r[e], (l = !0));
            } else if (8 & i) {
              const n = e.vnode.dynamicProps;
              for (let o = 0; o < n.length; o++) {
                let i = n[o];
                const u = t[i];
                if (c)
                  if (I(r, i)) u !== r[i] && ((r[i] = u), (l = !0));
                  else {
                    const t = K(i);
                    s[t] = xo(c, a, t, u, e, !1);
                  }
                else u !== r[i] && ((r[i] = u), (l = !0));
              }
            }
            l && Ne(e, "set", "$attrs");
          })(e, t.props, o, n),
          ((e, t, n) => {
            const { vnode: o, slots: s } = e;
            let r = !0,
              i = b;
            if (32 & o.shapeFlag) {
              const e = t._;
              e
                ? n && 1 === e
                  ? (r = !1)
                  : (E(s, t), n || 1 !== e || delete s._)
                : ((r = !t.$stable), Io(t, s)),
                (i = t);
            } else t && (Ro(e, t), (i = { default: 1 }));
            if (r) for (const e in s) Eo(e) || e in i || delete s[e];
          })(e, t.children, n),
          Ee(),
          Dr(void 0, e.update),
          ke();
      },
      D = (e, t, n, o, s, r, i, a, c = !1) => {
        const l = e && e.children,
          d = e ? e.shapeFlag : 0,
          p = t.children,
          { patchFlag: f, shapeFlag: h } = t;
        if (f > 0) {
          if (128 & f) return void V(l, p, n, o, s, r, i, a, c);
          if (256 & f) return void A(l, p, n, o, s, r, i, a, c);
        }
        8 & h
          ? (16 & d && J(l, s, r), p !== l && u(n, p))
          : 16 & d
          ? 16 & h
            ? V(l, p, n, o, s, r, i, a, c)
            : J(l, s, r, !0)
          : (8 & d && u(n, ""), 16 & h && k(p, n, o, s, r, i, a, c));
      },
      A = (e, t, n, o, s, r, i, a, c) => {
        t = t || x;
        const l = (e = e || x).length,
          u = t.length,
          d = Math.min(l, u);
        let p;
        for (p = 0; p < d; p++) {
          const o = (t[p] = c ? Ls(t[p]) : js(t[p]));
          m(e[p], o, n, null, s, r, i, a, c);
        }
        l > u ? J(e, s, r, !0, !1, d) : k(t, n, o, s, r, i, a, c, d);
      },
      V = (e, t, n, o, s, r, i, a, c) => {
        let l = 0;
        const u = t.length;
        let d = e.length - 1,
          p = u - 1;
        for (; l <= d && l <= p; ) {
          const o = e[l],
            u = (t[l] = c ? Ls(t[l]) : js(t[l]));
          if (!xs(o, u)) break;
          m(o, u, n, null, s, r, i, a, c), l++;
        }
        for (; l <= d && l <= p; ) {
          const o = e[d],
            l = (t[p] = c ? Ls(t[p]) : js(t[p]));
          if (!xs(o, l)) break;
          m(o, l, n, null, s, r, i, a, c), d--, p--;
        }
        if (l > d) {
          if (l <= p) {
            const e = p + 1,
              d = e < u ? t[e].el : o;
            for (; l <= p; )
              m(null, (t[l] = c ? Ls(t[l]) : js(t[l])), n, d, s, r, i, a, c),
                l++;
          }
        } else if (l > p) for (; l <= d; ) z(e[l], s, r, !0), l++;
        else {
          const f = l,
            h = l,
            g = new Map();
          for (l = h; l <= p; l++) {
            const e = (t[l] = c ? Ls(t[l]) : js(t[l]));
            null != e.key && g.set(e.key, l);
          }
          let y,
            v = 0;
          const b = p - h + 1;
          let w = !1,
            _ = 0;
          const S = new Array(b);
          for (l = 0; l < b; l++) S[l] = 0;
          for (l = f; l <= d; l++) {
            const o = e[l];
            if (v >= b) {
              z(o, s, r, !0);
              continue;
            }
            let u;
            if (null != o.key) u = g.get(o.key);
            else
              for (y = h; y <= p; y++)
                if (0 === S[y - h] && xs(o, t[y])) {
                  u = y;
                  break;
                }
            void 0 === u
              ? z(o, s, r, !0)
              : ((S[u - h] = l + 1),
                u >= _ ? (_ = u) : (w = !0),
                m(o, t[u], n, null, s, r, i, a, c),
                v++);
          }
          const C = w
            ? (function (e) {
                const t = e.slice(),
                  n = [0];
                let o, s, r, i, a;
                const c = e.length;
                for (o = 0; o < c; o++) {
                  const c = e[o];
                  if (0 !== c) {
                    if (((s = n[n.length - 1]), e[s] < c)) {
                      (t[o] = s), n.push(o);
                      continue;
                    }
                    for (r = 0, i = n.length - 1; r < i; )
                      (a = (r + i) >> 1), e[n[a]] < c ? (r = a + 1) : (i = a);
                    c < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), (n[r] = o));
                  }
                }
                for (r = n.length, i = n[r - 1]; r-- > 0; )
                  (n[r] = i), (i = t[i]);
                return n;
              })(S)
            : x;
          for (y = C.length - 1, l = b - 1; l >= 0; l--) {
            const e = h + l,
              d = t[e],
              p = e + 1 < u ? t[e + 1].el : o;
            0 === S[l]
              ? m(null, d, n, p, s, r, i, a, c)
              : w && (y < 0 || l !== C[y] ? $(d, n, p, 2) : y--);
          }
        }
      },
      $ = (e, t, n, s, r = null) => {
        const { el: i, type: a, transition: c, children: l, shapeFlag: u } = e;
        if (6 & u) $(e.component.subTree, t, n, s);
        else if (128 & u) e.suspense.move(t, n, s);
        else if (64 & u) a.move(e, t, n, Q);
        else if (a !== rs)
          if (a !== cs)
            if (2 !== s && 1 & u && c)
              if (0 === s)
                c.beforeEnter(i), o(i, t, n), $o(() => c.enter(i), r);
              else {
                const { leave: e, delayLeave: s, afterLeave: r } = c,
                  a = () => o(i, t, n),
                  l = () => {
                    e(i, () => {
                      a(), r && r();
                    });
                  };
                s ? s(i, a, l) : l();
              }
            else o(i, t, n);
          else
            (({ el: e, anchor: t }, n, s) => {
              let r;
              for (; e && e !== t; ) (r = p(e)), o(e, n, s), (e = r);
              o(t, n, s);
            })(e, t, n);
        else {
          o(i, t, n);
          for (let e = 0; e < l.length; e++) $(l[e], t, n, s);
          o(e.anchor, t, n);
        }
      },
      z = (e, t, n, o = !1, s = !1) => {
        const {
          type: r,
          props: i,
          ref: a,
          children: c,
          dynamicChildren: l,
          shapeFlag: u,
          patchFlag: d,
          dirs: p,
        } = e;
        if ((null != a && Fo(a, null, n, e, !0), 256 & u))
          return void t.ctx.deactivate(e);
        const f = 1 & u && p,
          h = !Dn(e);
        let g;
        if ((h && (g = i && i.onVnodeBeforeUnmount) && Fs(g, t, e), 6 & u))
          G(e.component, n, o);
        else {
          if (128 & u) return void e.suspense.unmount(n, o);
          f && jo(e, null, t, "beforeUnmount"),
            64 & u
              ? e.type.remove(e, t, n, s, Q, o)
              : l && (r !== rs || (d > 0 && 64 & d))
              ? J(l, t, n, !1, !0)
              : ((r === rs && 384 & d) || (!s && 16 & u)) && J(c, t, n),
            o && H(e);
        }
        ((h && (g = i && i.onVnodeUnmounted)) || f) &&
          $o(() => {
            g && Fs(g, t, e), f && jo(e, null, t, "unmounted");
          }, n);
      },
      H = (e) => {
        const { type: t, el: n, anchor: o, transition: r } = e;
        if (t === rs) return void W(n, o);
        if (t === cs)
          return void (({ el: e, anchor: t }) => {
            let n;
            for (; e && e !== t; ) (n = p(e)), s(e), (e = n);
            s(t);
          })(e);
        const i = () => {
          s(n), r && !r.persisted && r.afterLeave && r.afterLeave();
        };
        if (1 & e.shapeFlag && r && !r.persisted) {
          const { leave: t, delayLeave: o } = r,
            s = () => t(n, i);
          o ? o(e.el, i, s) : s();
        } else i();
      },
      W = (e, t) => {
        let n;
        for (; e !== t; ) (n = p(e)), s(e), (e = n);
        s(t);
      },
      G = (e, t, n) => {
        const { bum: o, scope: s, update: r, subTree: i, um: a } = e;
        o && Z(o),
          s.stop(),
          r && ((r.active = !1), z(i, e, t, n)),
          a && $o(a, t),
          $o(() => {
            e.isUnmounted = !0;
          }, t),
          t &&
            t.pendingBranch &&
            !t.isUnmounted &&
            e.asyncDep &&
            !e.asyncResolved &&
            e.suspenseId === t.pendingId &&
            (t.deps--, 0 === t.deps && t.resolve()),
          __VUE_PROD_DEVTOOLS__ && nn(e);
      },
      J = (e, t, n, o = !1, s = !1, r = 0) => {
        for (let i = r; i < e.length; i++) z(e[i], t, n, o, s);
      },
      Y = (e) =>
        6 & e.shapeFlag
          ? Y(e.component.subTree)
          : 128 & e.shapeFlag
          ? e.suspense.next()
          : p(e.anchor || e.el),
      X = (e, t, n) => {
        null == e
          ? t._vnode && z(t._vnode, null, null, !0)
          : m(t._vnode || null, e, t, null, null, null, n),
          Ar(),
          (t._vnode = e);
      },
      Q = { p: m, um: z, m: $, r: H, mt: M, mc: k, pc: D, pbc: R, n: Y, o: e };
    let ee, te;
    return (
      t && ([ee, te] = t(Q)), { render: X, hydrate: ee, createApp: Po(X, ee) }
    );
  }
  function Wo({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
  }
  function Ko(e, t, n = !1) {
    const o = e.children,
      s = t.children;
    if (R(o) && R(s))
      for (let e = 0; e < o.length; e++) {
        const t = o[e];
        let r = s[e];
        1 & r.shapeFlag &&
          !r.dynamicChildren &&
          ((r.patchFlag <= 0 || 32 === r.patchFlag) &&
            ((r = s[e] = Ls(s[e])), (r.el = t.el)),
          n || Ko(t, r));
      }
  }
  const Go = (e) => e && (e.disabled || "" === e.disabled),
    qo = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement,
    Jo = (e, t) => {
      const n = e && e.to;
      if (P(n)) {
        if (t) {
          return t(n);
        }
        return null;
      }
      return n;
    };
  function Yo(e, t, n, { o: { insert: o }, m: s }, r = 2) {
    0 === r && o(e.targetAnchor, t, n);
    const { el: i, anchor: a, shapeFlag: c, children: l, props: u } = e,
      d = 2 === r;
    if ((d && o(i, t, n), (!d || Go(u)) && 16 & c))
      for (let e = 0; e < l.length; e++) s(l[e], t, n, 2);
    d && o(a, t, n);
  }
  const Xo = {
      __isTeleport: !0,
      process(e, t, n, o, s, r, i, a, c, l) {
        const {
            mc: u,
            pc: d,
            pbc: p,
            o: { insert: f, querySelector: h, createText: g, createComment: m },
          } = l,
          y = Go(t.props);
        let { shapeFlag: v, children: b, dynamicChildren: x } = t;
        if (null == e) {
          const e = (t.el = g("")),
            l = (t.anchor = g(""));
          f(e, n, o), f(l, n, o);
          const d = (t.target = Jo(t.props, h)),
            p = (t.targetAnchor = g(""));
          d && (f(p, d), (i = i || qo(d)));
          const m = (e, t) => {
            16 & v && u(b, e, t, s, r, i, a, c);
          };
          y ? m(n, l) : d && m(d, p);
        } else {
          t.el = e.el;
          const o = (t.anchor = e.anchor),
            u = (t.target = e.target),
            f = (t.targetAnchor = e.targetAnchor),
            g = Go(e.props),
            m = g ? n : u,
            v = g ? o : f;
          if (
            ((i = i || qo(u)),
            x
              ? (p(e.dynamicChildren, x, m, s, r, i, a), Ko(e, t, !0))
              : c || d(e, t, m, v, s, r, i, a, !1),
            y)
          )
            g || Yo(t, n, o, l, 1);
          else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
            const e = (t.target = Jo(t.props, h));
            e && Yo(t, e, null, l, 0);
          } else g && Yo(t, u, f, l, 1);
        }
      },
      remove(e, t, n, o, { um: s, o: { remove: r } }, i) {
        const {
          shapeFlag: a,
          children: c,
          anchor: l,
          targetAnchor: u,
          target: d,
          props: p,
        } = e;
        if ((d && r(u), (i || !Go(p)) && (r(l), 16 & a)))
          for (let e = 0; e < c.length; e++) {
            const o = c[e];
            s(o, t, n, !0, !!o.dynamicChildren);
          }
      },
      move: Yo,
      hydrate: function (
        e,
        t,
        n,
        o,
        s,
        r,
        { o: { nextSibling: i, parentNode: a, querySelector: c } },
        l
      ) {
        const u = (t.target = Jo(t.props, c));
        if (u) {
          const c = u._lpa || u.firstChild;
          16 & t.shapeFlag &&
            (Go(t.props)
              ? ((t.anchor = l(i(e), t, a(e), n, o, s, r)),
                (t.targetAnchor = c))
              : ((t.anchor = i(e)), (t.targetAnchor = l(c, t, u, n, o, s, r))),
            (u._lpa = t.targetAnchor && i(t.targetAnchor)));
        }
        return t.anchor && i(t.anchor);
      },
    },
    Zo = "components";
  function Qo(e, t) {
    return os(Zo, e, !0, t) || e;
  }
  const es = Symbol();
  function ts(e) {
    return P(e) ? os(Zo, e, !1) || e : e || es;
  }
  function ns(e) {
    return os("directives", e);
  }
  function os(e, t, n = !0, o = !1) {
    const s = cn || Js;
    if (s) {
      const n = s.type;
      if (e === Zo) {
        const e = dr(n);
        if (e && (e === t || e === K(t) || e === J(K(t)))) return n;
      }
      const r = ss(s[e] || n[e], t) || ss(s.appContext[e], t);
      return !r && o ? n : r;
    }
  }
  function ss(e, t) {
    return e && (e[t] || e[K(t)] || e[J(K(t))]);
  }
  const rs = Symbol(void 0),
    is = Symbol(void 0),
    as = Symbol(void 0),
    cs = Symbol(void 0),
    ls = [];
  let us = null;
  function ds(e = !1) {
    ls.push((us = e ? null : []));
  }
  function ps() {
    ls.pop(), (us = ls[ls.length - 1] || null);
  }
  let fs,
    hs = 1;
  function gs(e) {
    hs += e;
  }
  function ms(e) {
    return (
      (e.dynamicChildren = hs > 0 ? us || x : null),
      ps(),
      hs > 0 && us && us.push(e),
      e
    );
  }
  function ys(e, t, n, o, s, r) {
    return ms(Ts(e, t, n, o, s, r, !0));
  }
  function vs(e, t, n, o, s) {
    return ms(Es(e, t, n, o, s, !0));
  }
  function bs(e) {
    return !!e && !0 === e.__v_isVNode;
  }
  function xs(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  function ws(e) {
    fs = e;
  }
  const _s = "__vInternal",
    Ss = ({ key: e }) => (null != e ? e : null),
    Cs = ({ ref: e, ref_key: t, ref_for: n }) =>
      null != e
        ? P(e) || Lt(e) || M(e)
          ? { i: cn, r: e, k: t, f: !!n }
          : e
        : null;
  function Ts(
    e,
    t = null,
    n = null,
    o = 0,
    s = null,
    r = e === rs ? 0 : 1,
    i = !1,
    a = !1
  ) {
    const c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && Ss(t),
      ref: t && Cs(t),
      scopeId: ln,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: r,
      patchFlag: o,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
    };
    return (
      a
        ? (Ms(c, n), 128 & r && e.normalize(c))
        : n && (c.shapeFlag |= P(n) ? 8 : 16),
      hs > 0 &&
        !i &&
        us &&
        (c.patchFlag > 0 || 6 & r) &&
        32 !== c.patchFlag &&
        us.push(c),
      c
    );
  }
  const Es = function (e, t = null, n = null, o = 0, s = null, r = !1) {
    if (((e && e !== es) || (e = as), bs(e))) {
      const o = Os(e, t, !0);
      return n && Ms(o, n), o;
    }
    if (((a = e), M(a) && "__vccOpts" in a && (e = e.__vccOpts), t)) {
      t = ks(t);
      let { class: e, style: n } = t;
      e && !P(e) && (t.class = u(e)),
        B(n) && (Et(n) && !R(n) && (n = E({}, n)), (t.style = i(n)));
    }
    var a;
    return Ts(
      e,
      t,
      n,
      o,
      s,
      P(e)
        ? 1
        : ((e) => e.__isSuspense)(e)
        ? 128
        : ((e) => e.__isTeleport)(e)
        ? 64
        : B(e)
        ? 4
        : M(e)
        ? 2
        : 0,
      r,
      !0
    );
  };
  function ks(e) {
    return e ? (Et(e) || _s in e ? E({}, e) : e) : null;
  }
  function Os(e, t, n = !1) {
    const { props: o, ref: s, patchFlag: r, children: i } = e,
      a = t ? Ps(o || {}, t) : o;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && Ss(a),
      ref:
        t && t.ref
          ? n && s
            ? R(s)
              ? s.concat(Cs(t))
              : [s, Cs(t)]
            : Cs(t)
          : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: i,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== rs ? (-1 === r ? 16 : 16 | r) : r,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Os(e.ssContent),
      ssFallback: e.ssFallback && Os(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
    };
  }
  function Is(e = " ", t = 0) {
    return Es(is, null, e, t);
  }
  function Rs(e, t) {
    const n = Es(cs, null, e);
    return (n.staticCount = t), n;
  }
  function Ns(e = "", t = !1) {
    return t ? (ds(), vs(as, null, e)) : Es(as, null, e);
  }
  function js(e) {
    return null == e || "boolean" == typeof e
      ? Es(as)
      : R(e)
      ? Es(rs, null, e.slice())
      : "object" == typeof e
      ? Ls(e)
      : Es(is, null, String(e));
  }
  function Ls(e) {
    return null === e.el || e.memo ? e : Os(e);
  }
  function Ms(e, t) {
    let n = 0;
    const { shapeFlag: o } = e;
    if (null == t) t = null;
    else if (R(t)) n = 16;
    else if ("object" == typeof t) {
      if (65 & o) {
        const n = t.default;
        return void (
          n && (n._c && (n._d = !1), Ms(e, n()), n._c && (n._d = !0))
        );
      }
      {
        n = 32;
        const o = t._;
        o || _s in t
          ? 3 === o &&
            cn &&
            (1 === cn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
          : (t._ctx = cn);
      }
    } else
      M(t)
        ? ((t = { default: t, _ctx: cn }), (n = 32))
        : ((t = String(t)), 64 & o ? ((n = 16), (t = [Is(t)])) : (n = 8));
    (e.children = t), (e.shapeFlag |= n);
  }
  function Ps(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      for (const e in o)
        if ("class" === e)
          t.class !== o.class && (t.class = u([t.class, o.class]));
        else if ("style" === e) t.style = i([t.style, o.style]);
        else if (C(e)) {
          const n = t[e],
            s = o[e];
          n === s ||
            (R(n) && n.includes(s)) ||
            (t[e] = n ? [].concat(n, s) : s);
        } else "" !== e && (t[e] = o[e]);
    }
    return t;
  }
  function Fs(e, t, n, o = null) {
    vr(e, t, 7, [n, o]);
  }
  function Bs(e, t, n, o) {
    let s;
    const r = n && n[o];
    if (R(e) || P(e)) {
      s = new Array(e.length);
      for (let n = 0, o = e.length; n < o; n++)
        s[n] = t(e[n], n, void 0, r && r[n]);
    } else if ("number" == typeof e) {
      s = new Array(e);
      for (let n = 0; n < e; n++) s[n] = t(n + 1, n, void 0, r && r[n]);
    } else if (B(e))
      if (e[Symbol.iterator])
        s = Array.from(e, (e, n) => t(e, n, void 0, r && r[n]));
      else {
        const n = Object.keys(e);
        s = new Array(n.length);
        for (let o = 0, i = n.length; o < i; o++) {
          const i = n[o];
          s[o] = t(e[i], i, o, r && r[o]);
        }
      }
    else s = [];
    return n && (n[o] = s), s;
  }
  function Ds(e, t) {
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      if (R(o)) for (let t = 0; t < o.length; t++) e[o[t].name] = o[t].fn;
      else o && (e[o.name] = o.fn);
    }
    return e;
  }
  function As(e, t, n = {}, o, s) {
    if (cn.isCE)
      return Es("slot", "default" === t ? null : { name: t }, o && o());
    let r = e[t];
    r && r._c && (r._d = !1), ds();
    const i = r && Vs(r(n)),
      a = vs(
        rs,
        { key: n.key || `_${t}` },
        i || (o ? o() : []),
        i && 1 === e._ ? 64 : -2
      );
    return (
      !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
      r && r._c && (r._d = !0),
      a
    );
  }
  function Vs(e) {
    return e.some(
      (e) => !bs(e) || (e.type !== as && !(e.type === rs && !Vs(e.children)))
    )
      ? e
      : null;
  }
  function $s(e) {
    const t = {};
    for (const n in e) t[Y(n)] = e[n];
    return t;
  }
  const zs = (e) => (e ? (Qs(e) ? lr(e) || e.proxy : zs(e.parent)) : null),
    Us = E(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => zs(e.parent),
      $root: (e) => zs(e.root),
      $emit: (e) => e.emit,
      $options: (e) => (__VUE_OPTIONS_API__ ? po(e) : e.type),
      $forceUpdate: (e) => () => Mr(e.update),
      $nextTick: (e) => Lr.bind(e.proxy),
      $watch: (e) => (__VUE_OPTIONS_API__ ? qr.bind(e) : w),
    }),
    Hs = {
      get({ _: e }, t) {
        const {
          ctx: n,
          setupState: o,
          data: s,
          props: r,
          accessCache: i,
          type: a,
          appContext: c,
        } = e;
        let l;
        if ("$" !== t[0]) {
          const a = i[t];
          if (void 0 !== a)
            switch (a) {
              case 1:
                return o[t];
              case 2:
                return s[t];
              case 4:
                return n[t];
              case 3:
                return r[t];
            }
          else {
            if (o !== b && I(o, t)) return (i[t] = 1), o[t];
            if (s !== b && I(s, t)) return (i[t] = 2), s[t];
            if ((l = e.propsOptions[0]) && I(l, t)) return (i[t] = 3), r[t];
            if (n !== b && I(n, t)) return (i[t] = 4), n[t];
            (__VUE_OPTIONS_API__ && !co) || (i[t] = 0);
          }
        }
        const u = Us[t];
        let d, p;
        return u
          ? ("$attrs" === t && Oe(e, 0, t), u(e))
          : (d = a.__cssModules) && (d = d[t])
          ? d
          : n !== b && I(n, t)
          ? ((i[t] = 4), n[t])
          : ((p = c.config.globalProperties), I(p, t) ? p[t] : void 0);
      },
      set({ _: e }, t, n) {
        const { data: o, setupState: s, ctx: r } = e;
        if (s !== b && I(s, t)) s[t] = n;
        else if (o !== b && I(o, t)) o[t] = n;
        else if (I(e.props, t)) return !1;
        return !(("$" === t[0] && t.slice(1) in e) || ((r[t] = n), 0));
      },
      has(
        {
          _: {
            data: e,
            setupState: t,
            accessCache: n,
            ctx: o,
            appContext: s,
            propsOptions: r,
          },
        },
        i
      ) {
        let a;
        return (
          !!n[i] ||
          (e !== b && I(e, i)) ||
          (t !== b && I(t, i)) ||
          ((a = r[0]) && I(a, i)) ||
          I(o, i) ||
          I(Us, i) ||
          I(s.config.globalProperties, i)
        );
      },
    },
    Ws = E({}, Hs, {
      get(e, t) {
        if (t !== Symbol.unscopables) return Hs.get(e, t, e);
      },
      has: (e, t) => "_" !== t[0] && !o(t),
    }),
    Ks = Lo();
  let Gs = 0;
  function qs(e, t, n) {
    const o = e.type,
      s = (t ? t.appContext : e.appContext) || Ks,
      r = {
        uid: Gs++,
        vnode: e,
        type: o,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new re(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: wo(o, s),
        emitsOptions: rn(o, s),
        emit: null,
        emitted: null,
        propsDefaults: b,
        inheritAttrs: o.inheritAttrs,
        ctx: b,
        data: b,
        props: b,
        attrs: b,
        slots: b,
        refs: b,
        setupState: b,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
      };
    return (
      (r.ctx = { _: r }),
      (r.root = t ? t.root : r),
      (r.emit = sn.bind(null, r)),
      e.ce && e.ce(r),
      r
    );
  }
  let Js = null;
  const Ys = () => Js || cn,
    Xs = (e) => {
      (Js = e), e.scope.on();
    },
    Zs = () => {
      Js && Js.scope.off(), (Js = null);
    };
  function Qs(e) {
    return 4 & e.vnode.shapeFlag;
  }
  let er,
    tr,
    nr = !1;
  function or(e, t = !1) {
    nr = t;
    const { props: n, children: o } = e.vnode,
      s = Qs(e);
    !(function (e, t, n, o = !1) {
      const s = {},
        r = {};
      Q(r, _s, 1), (e.propsDefaults = Object.create(null)), bo(e, t, s, r);
      for (const t in e.propsOptions[0]) t in s || (s[t] = void 0);
      n
        ? (e.props = o ? s : xt(s))
        : e.type.props
        ? (e.props = s)
        : (e.props = r),
        (e.attrs = r);
    })(e, n, s, t),
      ((e, t) => {
        if (32 & e.vnode.shapeFlag) {
          const n = t._;
          n ? ((e.slots = kt(t)), Q(t, "_", n)) : Io(t, (e.slots = {}));
        } else (e.slots = {}), t && Ro(e, t);
        Q(e.slots, _s, 1);
      })(e, o);
    const r = s
      ? (function (e, t) {
          const n = e.type;
          (e.accessCache = Object.create(null)),
            (e.proxy = Ot(new Proxy(e.ctx, Hs)));
          const { setup: o } = n;
          if (o) {
            const n = (e.setupContext = o.length > 1 ? cr(e) : null);
            Xs(e), Ee();
            const s = yr(o, e, 0, [e.props, n]);
            if ((ke(), Zs(), D(s))) {
              if ((s.then(Zs, Zs), t))
                return s
                  .then((n) => {
                    sr(e, n, t);
                  })
                  .catch((t) => {
                    br(t, e, 0);
                  });
              e.asyncDep = s;
            } else sr(e, s, t);
          } else ar(e, t);
        })(e, t)
      : void 0;
    return (nr = !1), r;
  }
  function sr(e, t, n) {
    M(t)
      ? e.type.__ssrInlineRender
        ? (e.ssrRender = t)
        : (e.render = t)
      : B(t) &&
        (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = t),
        (e.setupState = $t(t))),
      ar(e, n);
  }
  function rr(e) {
    (er = e),
      (tr = (e) => {
        e.render._rc && (e.withProxy = new Proxy(e.ctx, Ws));
      });
  }
  const ir = () => !er;
  function ar(e, t, n) {
    const o = e.type;
    if (!e.render) {
      if (!t && er && !o.render) {
        const t = o.template;
        if (t) {
          const { isCustomElement: n, compilerOptions: s } =
              e.appContext.config,
            { delimiters: r, compilerOptions: i } = o,
            a = E(E({ isCustomElement: n, delimiters: r }, s), i);
          o.render = er(t, a);
        }
      }
      (e.render = o.render || w), tr && tr(e);
    }
    __VUE_OPTIONS_API__ &&
      (Xs(e),
      Ee(),
      (function (e) {
        const t = po(e),
          n = e.proxy,
          o = e.ctx;
        (co = !1), t.beforeCreate && lo(t.beforeCreate, e, "bc");
        const {
          data: s,
          computed: r,
          methods: i,
          watch: a,
          provide: c,
          inject: l,
          created: u,
          beforeMount: d,
          mounted: p,
          beforeUpdate: f,
          updated: h,
          activated: g,
          deactivated: m,
          beforeDestroy: y,
          beforeUnmount: v,
          destroyed: b,
          unmounted: x,
          render: _,
          renderTracked: S,
          renderTriggered: C,
          errorCaptured: T,
          serverPrefetch: E,
          expose: k,
          inheritAttrs: O,
          components: I,
          directives: N,
          filters: j,
        } = t;
        if (
          (l &&
            (function (e, t, n = w, o = !1) {
              R(e) && (e = mo(e));
              for (const n in e) {
                const s = e[n];
                let r;
                (r = B(s)
                  ? "default" in s
                    ? kn(s.from || n, s.default, !0)
                    : kn(s.from || n)
                  : kn(s)),
                  Lt(r) && o
                    ? Object.defineProperty(t, n, {
                        enumerable: !0,
                        configurable: !0,
                        get: () => r.value,
                        set: (e) => (r.value = e),
                      })
                    : (t[n] = r);
              }
            })(l, o, null, e.appContext.config.unwrapInjectedRef),
          i)
        )
          for (const e in i) {
            const t = i[e];
            M(t) && (o[e] = t.bind(n));
          }
        if (s) {
          const t = s.call(n, n);
          B(t) && (e.data = bt(t));
        }
        if (((co = !0), r))
          for (const e in r) {
            const t = r[e],
              s = qt({
                get: M(t) ? t.bind(n, n) : M(t.get) ? t.get.bind(n, n) : w,
                set: !M(t) && M(t.set) ? t.set.bind(n) : w,
              });
            Object.defineProperty(o, e, {
              enumerable: !0,
              configurable: !0,
              get: () => s.value,
              set: (e) => (s.value = e),
            });
          }
        if (a) for (const e in a) uo(a[e], o, n, e);
        if (c) {
          const e = M(c) ? c.call(n) : c;
          Reflect.ownKeys(e).forEach((t) => {
            En(t, e[t]);
          });
        }
        function L(e, t) {
          R(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
        }
        if (
          (u && lo(u, e, "c"),
          L(Zn, d),
          L(Qn, p),
          L(eo, f),
          L(to, h),
          L(Hn, g),
          L(Wn, m),
          L(ao, T),
          L(io, S),
          L(ro, C),
          L(no, v),
          L(oo, x),
          L(so, E),
          R(k))
        )
          if (k.length) {
            const t = e.exposed || (e.exposed = {});
            k.forEach((e) => {
              Object.defineProperty(t, e, {
                get: () => n[e],
                set: (t) => (n[e] = t),
              });
            });
          } else e.exposed || (e.exposed = {});
        _ && e.render === w && (e.render = _),
          null != O && (e.inheritAttrs = O),
          I && (e.components = I),
          N && (e.directives = N);
      })(e),
      ke(),
      Zs());
  }
  function cr(e) {
    let t;
    return {
      get attrs() {
        return (
          t ||
          (t = (function (e) {
            return new Proxy(e.attrs, {
              get: (t, n) => (Oe(e, 0, "$attrs"), t[n]),
            });
          })(e))
        );
      },
      slots: e.slots,
      emit: e.emit,
      expose: (t) => {
        e.exposed = t || {};
      },
    };
  }
  function lr(e) {
    if (e.exposed)
      return (
        e.exposeProxy ||
        (e.exposeProxy = new Proxy($t(Ot(e.exposed)), {
          get: (t, n) => (n in t ? t[n] : n in Us ? Us[n](e) : void 0),
        }))
      );
  }
  const ur = /(?:^|[-_])(\w)/g;
  function dr(e) {
    return (M(e) && e.displayName) || e.name;
  }
  function pr(e, t, n = !1) {
    let o = dr(t);
    if (!o && t.__file) {
      const e = t.__file.match(/([^/\\]+)\.\w+$/);
      e && (o = e[1]);
    }
    if (!o && e && e.parent) {
      const n = (e) => {
        for (const n in e) if (e[n] === t) return n;
      };
      o =
        n(e.components || e.parent.type.components) ||
        n(e.appContext.components);
    }
    return o
      ? o.replace(ur, (e) => e.toUpperCase()).replace(/[-_]/g, "")
      : n
      ? "App"
      : "Anonymous";
  }
  const fr = [];
  function hr(e, ...t) {
    Ee();
    const n = fr.length ? fr[fr.length - 1].component : null,
      o = n && n.appContext.config.warnHandler,
      s = (function () {
        let e = fr[fr.length - 1];
        if (!e) return [];
        const t = [];
        for (; e; ) {
          const n = t[0];
          n && n.vnode === e
            ? n.recurseCount++
            : t.push({ vnode: e, recurseCount: 0 });
          const o = e.component && e.component.parent;
          e = o && o.vnode;
        }
        return t;
      })();
    if (o)
      yr(o, n, 11, [
        e + t.join(""),
        n && n.proxy,
        s.map(({ vnode: e }) => `at <${pr(n, e.type)}>`).join("\n"),
        s,
      ]);
    else {
      const n = [`[Vue warn]: ${e}`, ...t];
      s.length &&
        n.push(
          "\n",
          ...(function (e) {
            const t = [];
            return (
              e.forEach((e, n) => {
                t.push(
                  ...(0 === n ? [] : ["\n"]),
                  ...(function ({ vnode: e, recurseCount: t }) {
                    const n = t > 0 ? `... (${t} recursive calls)` : "",
                      o = !!e.component && null == e.component.parent,
                      s = ` at <${pr(e.component, e.type, o)}`,
                      r = ">" + n;
                    return e.props ? [s, ...gr(e.props), r] : [s + r];
                  })(e)
                );
              }),
              t
            );
          })(s)
        ),
        console.warn(...n);
    }
    ke();
  }
  function gr(e) {
    const t = [],
      n = Object.keys(e);
    return (
      n.slice(0, 3).forEach((n) => {
        t.push(...mr(n, e[n]));
      }),
      n.length > 3 && t.push(" ..."),
      t
    );
  }
  function mr(e, t, n) {
    return P(t)
      ? ((t = JSON.stringify(t)), n ? t : [`${e}=${t}`])
      : "number" == typeof t || "boolean" == typeof t || null == t
      ? n
        ? t
        : [`${e}=${t}`]
      : Lt(t)
      ? ((t = mr(e, kt(t.value), !0)), n ? t : [`${e}=Ref<`, t, ">"])
      : M(t)
      ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`]
      : ((t = kt(t)), n ? t : [`${e}=`, t]);
  }
  function yr(e, t, n, o) {
    let s;
    try {
      s = o ? e(...o) : e();
    } catch (e) {
      br(e, t, n);
    }
    return s;
  }
  function vr(e, t, n, o) {
    if (M(e)) {
      const s = yr(e, t, n, o);
      return (
        s &&
          D(s) &&
          s.catch((e) => {
            br(e, t, n);
          }),
        s
      );
    }
    const s = [];
    for (let r = 0; r < e.length; r++) s.push(vr(e[r], t, n, o));
    return s;
  }
  function br(e, t, n, o = !0) {
    if ((t && t.vnode, t)) {
      let o = t.parent;
      const s = t.proxy,
        r = n;
      for (; o; ) {
        const t = o.ec;
        if (t)
          for (let n = 0; n < t.length; n++) if (!1 === t[n](e, s, r)) return;
        o = o.parent;
      }
      const i = t.appContext.config.errorHandler;
      if (i) return void yr(i, null, 10, [e, s, r]);
    }
    !(function (e, t, n, o = !0) {
      console.error(e);
    })(e, 0, 0, o);
  }
  let xr = !1,
    wr = !1;
  const _r = [];
  let Sr = 0;
  const Cr = [];
  let Tr = null,
    Er = 0;
  const kr = [];
  let Or = null,
    Ir = 0;
  const Rr = Promise.resolve();
  let Nr = null,
    jr = null;
  function Lr(e) {
    const t = Nr || Rr;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function Mr(e) {
    (_r.length && _r.includes(e, xr && e.allowRecurse ? Sr + 1 : Sr)) ||
      e === jr ||
      (null == e.id
        ? _r.push(e)
        : _r.splice(
            (function (e) {
              let t = Sr + 1,
                n = _r.length;
              for (; t < n; ) {
                const o = (t + n) >>> 1;
                Vr(_r[o]) < e ? (t = o + 1) : (n = o);
              }
              return t;
            })(e.id),
            0,
            e
          ),
      Pr());
  }
  function Pr() {
    xr || wr || ((wr = !0), (Nr = Rr.then($r)));
  }
  function Fr(e, t, n, o) {
    R(e)
      ? n.push(...e)
      : (t && t.includes(e, e.allowRecurse ? o + 1 : o)) || n.push(e),
      Pr();
  }
  function Br(e) {
    Fr(e, Or, kr, Ir);
  }
  function Dr(e, t = null) {
    if (Cr.length) {
      for (
        jr = t, Tr = [...new Set(Cr)], Cr.length = 0, Er = 0;
        Er < Tr.length;
        Er++
      )
        Tr[Er]();
      (Tr = null), (Er = 0), (jr = null), Dr(e, t);
    }
  }
  function Ar(e) {
    if (kr.length) {
      const e = [...new Set(kr)];
      if (((kr.length = 0), Or)) return void Or.push(...e);
      for (
        Or = e, Or.sort((e, t) => Vr(e) - Vr(t)), Ir = 0;
        Ir < Or.length;
        Ir++
      )
        Or[Ir]();
      (Or = null), (Ir = 0);
    }
  }
  const Vr = (e) => (null == e.id ? 1 / 0 : e.id);
  function $r(e) {
    (wr = !1), (xr = !0), Dr(e), _r.sort((e, t) => Vr(e) - Vr(t));
    try {
      for (Sr = 0; Sr < _r.length; Sr++) {
        const e = _r[Sr];
        e && !1 !== e.active && yr(e, null, 14);
      }
    } finally {
      (Sr = 0),
        (_r.length = 0),
        Ar(),
        (xr = !1),
        (Nr = null),
        (_r.length || Cr.length || kr.length) && $r(e);
    }
  }
  function zr(e, t) {
    return Gr(e, null, t);
  }
  function Ur(e, t) {
    return Gr(e, null, { flush: "post" });
  }
  function Hr(e, t) {
    return Gr(e, null, { flush: "sync" });
  }
  const Wr = {};
  function Kr(e, t, n) {
    return Gr(e, t, n);
  }
  function Gr(
    e,
    t,
    { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = b
  ) {
    const a = Js;
    let c,
      l,
      u = !1,
      d = !1;
    if (
      (Lt(e)
        ? ((c = () => e.value), (u = !!e._shallow))
        : Ct(e)
        ? ((c = () => e), (o = !0))
        : R(e)
        ? ((d = !0),
          (u = e.some(Ct)),
          (c = () =>
            e.map((e) =>
              Lt(e) ? e.value : Ct(e) ? Yr(e) : M(e) ? yr(e, a, 2) : void 0
            )))
        : (c = M(e)
            ? t
              ? () => yr(e, a, 2)
              : () => {
                  if (!a || !a.isUnmounted) return l && l(), vr(e, a, 3, [p]);
                }
            : w),
      t && o)
    ) {
      const e = c;
      c = () => Yr(e());
    }
    let p = (e) => {
      l = m.onStop = () => {
        yr(e, a, 4);
      };
    };
    if (nr)
      return (p = w), t ? n && vr(t, a, 3, [c(), d ? [] : void 0, p]) : c(), w;
    let f = d ? [] : Wr;
    const h = () => {
      if (m.active)
        if (t) {
          const e = m.run();
          (o || u || (d ? e.some((e, t) => X(e, f[t])) : X(e, f))) &&
            (l && l(), vr(t, a, 3, [e, f === Wr ? void 0 : f, p]), (f = e));
        } else m.run();
    };
    let g;
    (h.allowRecurse = !!t),
      (g =
        "sync" === s
          ? h
          : "post" === s
          ? () => $o(h, a && a.suspense)
          : () => {
              !a || a.isMounted
                ? (function (e) {
                    Fr(e, Tr, Cr, Er);
                  })(h)
                : h();
            });
    const m = new xe(c, g);
    return (
      t
        ? n
          ? h()
          : (f = m.run())
        : "post" === s
        ? $o(m.run.bind(m), a && a.suspense)
        : m.run(),
      () => {
        m.stop(), a && a.scope && k(a.scope.effects, m);
      }
    );
  }
  function qr(e, t, n) {
    const o = this.proxy,
      s = P(e) ? (e.includes(".") ? Jr(o, e) : () => o[e]) : e.bind(o, o);
    let r;
    M(t) ? (r = t) : ((r = t.handler), (n = t));
    const i = Js;
    Xs(this);
    const a = Gr(s, r.bind(o), n);
    return i ? Xs(i) : Zs(), a;
  }
  function Jr(e, t) {
    const n = t.split(".");
    return () => {
      let t = e;
      for (let e = 0; e < n.length && t; e++) t = t[n[e]];
      return t;
    };
  }
  function Yr(e, t) {
    if (!B(e) || e.__v_skip) return e;
    if ((t = t || new Set()).has(e)) return e;
    if ((t.add(e), Lt(e))) Yr(e.value, t);
    else if (R(e)) for (let n = 0; n < e.length; n++) Yr(e[n], t);
    else if (j(e) || N(e))
      e.forEach((e) => {
        Yr(e, t);
      });
    else if ($(e)) for (const n in e) Yr(e[n], t);
    return e;
  }
  function Xr() {
    return null;
  }
  function Zr() {
    return null;
  }
  function Qr(e) {}
  function ei(e, t) {
    return null;
  }
  function ti() {
    return oi().slots;
  }
  function ni() {
    return oi().attrs;
  }
  function oi() {
    const e = Ys();
    return e.setupContext || (e.setupContext = cr(e));
  }
  function si(e, t) {
    const n = R(e) ? e.reduce((e, t) => ((e[t] = {}), e), {}) : e;
    for (const e in t) {
      const o = n[e];
      o
        ? R(o) || M(o)
          ? (n[e] = { type: o, default: t[e] })
          : (o.default = t[e])
        : null === o && (n[e] = { default: t[e] });
    }
    return n;
  }
  function ri(e, t) {
    const n = {};
    for (const o in e)
      t.includes(o) ||
        Object.defineProperty(n, o, { enumerable: !0, get: () => e[o] });
    return n;
  }
  function ii(e) {
    const t = Ys();
    let n = e();
    return (
      Zs(),
      D(n) &&
        (n = n.catch((e) => {
          throw (Xs(t), e);
        })),
      [n, () => Xs(t)]
    );
  }
  function ai(e, t, n) {
    const o = arguments.length;
    return 2 === o
      ? B(t) && !R(t)
        ? bs(t)
          ? Es(e, null, [t])
          : Es(e, t)
        : Es(e, null, t)
      : (o > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : 3 === o && bs(n) && (n = [n]),
        Es(e, t, n));
  }
  const ci = Symbol(""),
    li = () => {
      {
        const e = kn(ci);
        return (
          e ||
            hr(
              "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
            ),
          e
        );
      }
    };
  function ui() {}
  function di(e, t, n, o) {
    const s = n[o];
    if (s && pi(s, e)) return s;
    const r = t();
    return (r.memo = e.slice()), (n[o] = r);
  }
  function pi(e, t) {
    const n = e.memo;
    if (n.length != t.length) return !1;
    for (let e = 0; e < n.length; e++) if (n[e] !== t[e]) return !1;
    return hs > 0 && us && us.push(e), !0;
  }
  const fi = "3.2.26",
    hi = {
      createComponentInstance: qs,
      setupComponent: or,
      renderComponentRoot: gn,
      setCurrentRenderingInstance: un,
      isVNode: bs,
      normalizeVNode: js,
    },
    gi = null,
    mi = null,
    yi = "undefined" != typeof document ? document : null,
    vi = new Map(),
    bi = {
      insert: (e, t, n) => {
        t.insertBefore(e, n || null);
      },
      remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      createElement: (e, t, n, o) => {
        const s = t
          ? yi.createElementNS("http://www.w3.org/2000/svg", e)
          : yi.createElement(e, n ? { is: n } : void 0);
        return (
          "select" === e &&
            o &&
            null != o.multiple &&
            s.setAttribute("multiple", o.multiple),
          s
        );
      },
      createText: (e) => yi.createTextNode(e),
      createComment: (e) => yi.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t;
      },
      setElementText: (e, t) => {
        e.textContent = t;
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => yi.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, "");
      },
      cloneNode(e) {
        const t = e.cloneNode(!0);
        return "_value" in e && (t._value = e._value), t;
      },
      insertStaticContent(e, t, n, o) {
        const s = n ? n.previousSibling : t.lastChild;
        let r = vi.get(e);
        if (!r) {
          const t = yi.createElement("template");
          if (((t.innerHTML = o ? `<svg>${e}</svg>` : e), (r = t.content), o)) {
            const e = r.firstChild;
            for (; e.firstChild; ) r.appendChild(e.firstChild);
            r.removeChild(e);
          }
          vi.set(e, r);
        }
        return (
          t.insertBefore(r.cloneNode(!0), n),
          [
            s ? s.nextSibling : t.firstChild,
            n ? n.previousSibling : t.lastChild,
          ]
        );
      },
    },
    xi = /\s*!important$/;
  function wi(e, t, n) {
    if (R(n)) n.forEach((n) => wi(e, t, n));
    else if (t.startsWith("--")) e.setProperty(t, n);
    else {
      const o = (function (e, t) {
        const n = Si[t];
        if (n) return n;
        let o = K(t);
        if ("filter" !== o && o in e) return (Si[t] = o);
        o = J(o);
        for (let n = 0; n < _i.length; n++) {
          const s = _i[n] + o;
          if (s in e) return (Si[t] = s);
        }
        return t;
      })(e, t);
      xi.test(n)
        ? e.setProperty(q(o), n.replace(xi, ""), "important")
        : (e[o] = n);
    }
  }
  const _i = ["Webkit", "Moz", "ms"],
    Si = {},
    Ci = "http://www.w3.org/1999/xlink";
  let Ti = Date.now,
    Ei = !1;
  if ("undefined" != typeof window) {
    Ti() > document.createEvent("Event").timeStamp &&
      (Ti = () => performance.now());
    const e = navigator.userAgent.match(/firefox\/(\d+)/i);
    Ei = !!(e && Number(e[1]) <= 53);
  }
  let ki = 0;
  const Oi = Promise.resolve(),
    Ii = () => {
      ki = 0;
    };
  function Ri(e, t, n, o) {
    e.addEventListener(t, n, o);
  }
  const Ni = /(?:Once|Passive|Capture)$/,
    ji = /^on[a-z]/;
  function Li(e, t) {
    const n = Bn(e);
    class o extends Fi {
      constructor(e) {
        super(n, e, t);
      }
    }
    return (o.def = n), o;
  }
  const Mi = (e) => Li(e, Ba),
    Pi = "undefined" != typeof HTMLElement ? HTMLElement : class {};
  class Fi extends Pi {
    constructor(e, t = {}, n) {
      super(),
        (this._def = e),
        (this._props = t),
        (this._instance = null),
        (this._connected = !1),
        (this._resolved = !1),
        (this._numberProps = null),
        this.shadowRoot && n
          ? n(this._createVNode(), this.shadowRoot)
          : this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      (this._connected = !0), this._instance || this._resolveDef();
    }
    disconnectedCallback() {
      (this._connected = !1),
        Lr(() => {
          this._connected ||
            (Fa(null, this.shadowRoot), (this._instance = null));
        });
    }
    _resolveDef() {
      if (this._resolved) return;
      this._resolved = !0;
      for (let e = 0; e < this.attributes.length; e++)
        this._setAttr(this.attributes[e].name);
      new MutationObserver((e) => {
        for (const t of e) this._setAttr(t.attributeName);
      }).observe(this, { attributes: !0 });
      const e = (e) => {
          const { props: t, styles: n } = e,
            o = !R(t),
            s = t ? (o ? Object.keys(t) : t) : [];
          let r;
          if (o)
            for (const e in this._props) {
              const n = t[e];
              (n === Number || (n && n.type === Number)) &&
                ((this._props[e] = ee(this._props[e])),
                ((r || (r = Object.create(null)))[e] = !0));
            }
          this._numberProps = r;
          for (const e of Object.keys(this))
            "_" !== e[0] && this._setProp(e, this[e], !0, !1);
          for (const e of s.map(K))
            Object.defineProperty(this, e, {
              get() {
                return this._getProp(e);
              },
              set(t) {
                this._setProp(e, t);
              },
            });
          this._applyStyles(n), this._update();
        },
        t = this._def.__asyncLoader;
      t ? t().then(e) : e(this._def);
    }
    _setAttr(e) {
      let t = this.getAttribute(e);
      this._numberProps && this._numberProps[e] && (t = ee(t)),
        this._setProp(K(e), t, !1);
    }
    _getProp(e) {
      return this._props[e];
    }
    _setProp(e, t, n = !0, o = !0) {
      t !== this._props[e] &&
        ((this._props[e] = t),
        o && this._instance && this._update(),
        n &&
          (!0 === t
            ? this.setAttribute(q(e), "")
            : "string" == typeof t || "number" == typeof t
            ? this.setAttribute(q(e), t + "")
            : t || this.removeAttribute(q(e))));
    }
    _update() {
      Fa(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
      const e = Es(this._def, E({}, this._props));
      return (
        this._instance ||
          (e.ce = (e) => {
            (this._instance = e),
              (e.isCE = !0),
              (e.emit = (e, ...t) => {
                this.dispatchEvent(new CustomEvent(e, { detail: t }));
              });
            let t = this;
            for (; (t = t && (t.parentNode || t.host)); )
              if (t instanceof Fi) {
                e.parent = t._instance;
                break;
              }
          }),
        e
      );
    }
    _applyStyles(e) {
      e &&
        e.forEach((e) => {
          const t = document.createElement("style");
          (t.textContent = e), this.shadowRoot.appendChild(t);
        });
    }
  }
  function Bi(e = "$style") {
    {
      const t = Ys();
      if (!t) return b;
      const n = t.type.__cssModules;
      if (!n) return b;
      return n[e] || b;
    }
  }
  function Di(e) {
    const t = Ys();
    if (!t) return;
    const n = () => Ai(t.subTree, e(t.proxy));
    Ur(n),
      Qn(() => {
        const e = new MutationObserver(n);
        e.observe(t.subTree.el.parentNode, { childList: !0 }),
          oo(() => e.disconnect());
      });
  }
  function Ai(e, t) {
    if (128 & e.shapeFlag) {
      const n = e.suspense;
      (e = n.activeBranch),
        n.pendingBranch &&
          !n.isHydrating &&
          n.effects.push(() => {
            Ai(n.activeBranch, t);
          });
    }
    for (; e.component; ) e = e.component.subTree;
    if (1 & e.shapeFlag && e.el) Vi(e.el, t);
    else if (e.type === rs) e.children.forEach((e) => Ai(e, t));
    else if (e.type === cs) {
      let { el: n, anchor: o } = e;
      for (; n && (Vi(n, t), n !== o); ) n = n.nextSibling;
    }
  }
  function Vi(e, t) {
    if (1 === e.nodeType) {
      const n = e.style;
      for (const e in t) n.setProperty(`--${e}`, t[e]);
    }
  }
  const $i = "transition",
    zi = "animation",
    Ui = (e, { slots: t }) => ai(Rn, qi(e), t);
  Ui.displayName = "Transition";
  const Hi = {
      name: String,
      type: String,
      css: { type: Boolean, default: !0 },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String,
    },
    Wi = (Ui.props = E({}, Rn.props, Hi)),
    Ki = (e, t = []) => {
      R(e) ? e.forEach((e) => e(...t)) : e && e(...t);
    },
    Gi = (e) => !!e && (R(e) ? e.some((e) => e.length > 1) : e.length > 1);
  function qi(e) {
    const t = {};
    for (const n in e) n in Hi || (t[n] = e[n]);
    if (!1 === e.css) return t;
    const {
        name: n = "v",
        type: o,
        duration: s,
        enterFromClass: r = `${n}-enter-from`,
        enterActiveClass: i = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: c = r,
        appearActiveClass: l = i,
        appearToClass: u = a,
        leaveFromClass: d = `${n}-leave-from`,
        leaveActiveClass: p = `${n}-leave-active`,
        leaveToClass: f = `${n}-leave-to`,
      } = e,
      h = (function (e) {
        if (null == e) return null;
        if (B(e)) return [Ji(e.enter), Ji(e.leave)];
        {
          const t = Ji(e);
          return [t, t];
        }
      })(s),
      g = h && h[0],
      m = h && h[1],
      {
        onBeforeEnter: y,
        onEnter: v,
        onEnterCancelled: b,
        onLeave: x,
        onLeaveCancelled: w,
        onBeforeAppear: _ = y,
        onAppear: S = v,
        onAppearCancelled: C = b,
      } = t,
      T = (e, t, n) => {
        Xi(e, t ? u : a), Xi(e, t ? l : i), n && n();
      },
      k = (e, t) => {
        Xi(e, f), Xi(e, p), t && t();
      },
      O = (e) => (t, n) => {
        const s = e ? S : v,
          i = () => T(t, e, n);
        Ki(s, [t, i]),
          Zi(() => {
            Xi(t, e ? c : r), Yi(t, e ? u : a), Gi(s) || ea(t, o, g, i);
          });
      };
    return E(t, {
      onBeforeEnter(e) {
        Ki(y, [e]), Yi(e, r), Yi(e, i);
      },
      onBeforeAppear(e) {
        Ki(_, [e]), Yi(e, c), Yi(e, l);
      },
      onEnter: O(!1),
      onAppear: O(!0),
      onLeave(e, t) {
        const n = () => k(e, t);
        Yi(e, d),
          sa(),
          Yi(e, p),
          Zi(() => {
            Xi(e, d), Yi(e, f), Gi(x) || ea(e, o, m, n);
          }),
          Ki(x, [e, n]);
      },
      onEnterCancelled(e) {
        T(e, !1), Ki(b, [e]);
      },
      onAppearCancelled(e) {
        T(e, !0), Ki(C, [e]);
      },
      onLeaveCancelled(e) {
        k(e), Ki(w, [e]);
      },
    });
  }
  function Ji(e) {
    return ee(e);
  }
  function Yi(e, t) {
    t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
      (e._vtc || (e._vtc = new Set())).add(t);
  }
  function Xi(e, t) {
    t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
    const { _vtc: n } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0));
  }
  function Zi(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Qi = 0;
  function ea(e, t, n, o) {
    const s = (e._endId = ++Qi),
      r = () => {
        s === e._endId && o();
      };
    if (n) return setTimeout(r, n);
    const { type: i, timeout: a, propCount: c } = ta(e, t);
    if (!i) return o();
    const l = i + "end";
    let u = 0;
    const d = () => {
        e.removeEventListener(l, p), r();
      },
      p = (t) => {
        t.target === e && ++u >= c && d();
      };
    setTimeout(() => {
      u < c && d();
    }, a + 1),
      e.addEventListener(l, p);
  }
  function ta(e, t) {
    const n = window.getComputedStyle(e),
      o = (e) => (n[e] || "").split(", "),
      s = o("transitionDelay"),
      r = o("transitionDuration"),
      i = na(s, r),
      a = o("animationDelay"),
      c = o("animationDuration"),
      l = na(a, c);
    let u = null,
      d = 0,
      p = 0;
    return (
      t === $i
        ? i > 0 && ((u = $i), (d = i), (p = r.length))
        : t === zi
        ? l > 0 && ((u = zi), (d = l), (p = c.length))
        : ((d = Math.max(i, l)),
          (u = d > 0 ? (i > l ? $i : zi) : null),
          (p = u ? (u === $i ? r.length : c.length) : 0)),
      {
        type: u,
        timeout: d,
        propCount: p,
        hasTransform:
          u === $i && /\b(transform|all)(,|$)/.test(n.transitionProperty),
      }
    );
  }
  function na(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((t, n) => oa(t) + oa(e[n])));
  }
  function oa(e) {
    return 1e3 * Number(e.slice(0, -1).replace(",", "."));
  }
  function sa() {
    return document.body.offsetHeight;
  }
  const ra = new WeakMap(),
    ia = new WeakMap(),
    aa = {
      name: "TransitionGroup",
      props: E({}, Wi, { tag: String, moveClass: String }),
      setup(e, { slots: t }) {
        const n = Ys(),
          o = On();
        let s, r;
        return (
          to(() => {
            if (!s.length) return;
            const t = e.moveClass || `${e.name || "v"}-move`;
            if (
              !(function (e, t, n) {
                const o = e.cloneNode();
                e._vtc &&
                  e._vtc.forEach((e) => {
                    e.split(/\s+/).forEach((e) => e && o.classList.remove(e));
                  }),
                  n.split(/\s+/).forEach((e) => e && o.classList.add(e)),
                  (o.style.display = "none");
                const s = 1 === t.nodeType ? t : t.parentNode;
                s.appendChild(o);
                const { hasTransform: r } = ta(o);
                return s.removeChild(o), r;
              })(s[0].el, n.vnode.el, t)
            )
              return;
            s.forEach(ca), s.forEach(la);
            const o = s.filter(ua);
            sa(),
              o.forEach((e) => {
                const n = e.el,
                  o = n.style;
                Yi(n, t),
                  (o.transform = o.webkitTransform = o.transitionDuration = "");
                const s = (n._moveCb = (e) => {
                  (e && e.target !== n) ||
                    (e && !/transform$/.test(e.propertyName)) ||
                    (n.removeEventListener("transitionend", s),
                    (n._moveCb = null),
                    Xi(n, t));
                });
                n.addEventListener("transitionend", s);
              });
          }),
          () => {
            const i = kt(e),
              a = qi(i);
            let c = i.tag || rs;
            (s = r), (r = t.default ? Fn(t.default()) : []);
            for (let e = 0; e < r.length; e++) {
              const t = r[e];
              null != t.key && Pn(t, jn(t, a, o, n));
            }
            if (s)
              for (let e = 0; e < s.length; e++) {
                const t = s[e];
                Pn(t, jn(t, a, o, n)), ra.set(t, t.el.getBoundingClientRect());
              }
            return Es(c, null, r);
          }
        );
      },
    };
  function ca(e) {
    const t = e.el;
    t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
  }
  function la(e) {
    ia.set(e, e.el.getBoundingClientRect());
  }
  function ua(e) {
    const t = ra.get(e),
      n = ia.get(e),
      o = t.left - n.left,
      s = t.top - n.top;
    if (o || s) {
      const t = e.el.style;
      return (
        (t.transform = t.webkitTransform = `translate(${o}px,${s}px)`),
        (t.transitionDuration = "0s"),
        e
      );
    }
  }
  const da = (e) => {
    const t = e.props["onUpdate:modelValue"];
    return R(t) ? (e) => Z(t, e) : t;
  };
  function pa(e) {
    e.target.composing = !0;
  }
  function fa(e) {
    const t = e.target;
    t.composing &&
      ((t.composing = !1),
      (function (e, t) {
        const n = document.createEvent("HTMLEvents");
        n.initEvent("input", !0, !0), e.dispatchEvent(n);
      })(t));
  }
  const ha = {
      created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) {
        e._assign = da(s);
        const r = o || (s.props && "number" === s.props.type);
        Ri(e, t ? "change" : "input", (t) => {
          if (t.target.composing) return;
          let o = e.value;
          n ? (o = o.trim()) : r && (o = ee(o)), e._assign(o);
        }),
          n &&
            Ri(e, "change", () => {
              e.value = e.value.trim();
            }),
          t ||
            (Ri(e, "compositionstart", pa),
            Ri(e, "compositionend", fa),
            Ri(e, "change", fa));
      },
      mounted(e, { value: t }) {
        e.value = null == t ? "" : t;
      },
      beforeUpdate(
        e,
        { value: t, modifiers: { lazy: n, trim: o, number: s } },
        r
      ) {
        if (((e._assign = da(r)), e.composing)) return;
        if (document.activeElement === e) {
          if (n) return;
          if (o && e.value.trim() === t) return;
          if ((s || "number" === e.type) && ee(e.value) === t) return;
        }
        const i = null == t ? "" : t;
        e.value !== i && (e.value = i);
      },
    },
    ga = {
      deep: !0,
      created(e, t, n) {
        (e._assign = da(n)),
          Ri(e, "change", () => {
            const t = e._modelValue,
              n = xa(e),
              o = e.checked,
              s = e._assign;
            if (R(t)) {
              const e = m(t, n),
                r = -1 !== e;
              if (o && !r) s(t.concat(n));
              else if (!o && r) {
                const n = [...t];
                n.splice(e, 1), s(n);
              }
            } else if (j(t)) {
              const e = new Set(t);
              o ? e.add(n) : e.delete(n), s(e);
            } else s(wa(e, o));
          });
      },
      mounted: ma,
      beforeUpdate(e, t, n) {
        (e._assign = da(n)), ma(e, t, n);
      },
    };
  function ma(e, { value: t, oldValue: n }, o) {
    (e._modelValue = t),
      R(t)
        ? (e.checked = m(t, o.props.value) > -1)
        : j(t)
        ? (e.checked = t.has(o.props.value))
        : t !== n && (e.checked = g(t, wa(e, !0)));
  }
  const ya = {
      created(e, { value: t }, n) {
        (e.checked = g(t, n.props.value)),
          (e._assign = da(n)),
          Ri(e, "change", () => {
            e._assign(xa(e));
          });
      },
      beforeUpdate(e, { value: t, oldValue: n }, o) {
        (e._assign = da(o)), t !== n && (e.checked = g(t, o.props.value));
      },
    },
    va = {
      deep: !0,
      created(e, { value: t, modifiers: { number: n } }, o) {
        const s = j(t);
        Ri(e, "change", () => {
          const t = Array.prototype.filter
            .call(e.options, (e) => e.selected)
            .map((e) => (n ? ee(xa(e)) : xa(e)));
          e._assign(e.multiple ? (s ? new Set(t) : t) : t[0]);
        }),
          (e._assign = da(o));
      },
      mounted(e, { value: t }) {
        ba(e, t);
      },
      beforeUpdate(e, t, n) {
        e._assign = da(n);
      },
      updated(e, { value: t }) {
        ba(e, t);
      },
    };
  function ba(e, t) {
    const n = e.multiple;
    if (!n || R(t) || j(t)) {
      for (let o = 0, s = e.options.length; o < s; o++) {
        const s = e.options[o],
          r = xa(s);
        if (n) R(t) ? (s.selected = m(t, r) > -1) : (s.selected = t.has(r));
        else if (g(xa(s), t))
          return void (e.selectedIndex !== o && (e.selectedIndex = o));
      }
      n || -1 === e.selectedIndex || (e.selectedIndex = -1);
    }
  }
  function xa(e) {
    return "_value" in e ? e._value : e.value;
  }
  function wa(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  }
  const _a = {
    created(e, t, n) {
      Sa(e, t, n, null, "created");
    },
    mounted(e, t, n) {
      Sa(e, t, n, null, "mounted");
    },
    beforeUpdate(e, t, n, o) {
      Sa(e, t, n, o, "beforeUpdate");
    },
    updated(e, t, n, o) {
      Sa(e, t, n, o, "updated");
    },
  };
  function Sa(e, t, n, o, s) {
    let r;
    switch (e.tagName) {
      case "SELECT":
        r = va;
        break;
      case "TEXTAREA":
        r = ha;
        break;
      default:
        switch (n.props && n.props.type) {
          case "checkbox":
            r = ga;
            break;
          case "radio":
            r = ya;
            break;
          default:
            r = ha;
        }
    }
    const i = r[s];
    i && i(e, t, n, o);
  }
  const Ca = ["ctrl", "shift", "alt", "meta"],
    Ta = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => "button" in e && 0 !== e.button,
      middle: (e) => "button" in e && 1 !== e.button,
      right: (e) => "button" in e && 2 !== e.button,
      exact: (e, t) => Ca.some((n) => e[`${n}Key`] && !t.includes(n)),
    },
    Ea =
      (e, t) =>
      (n, ...o) => {
        for (let e = 0; e < t.length; e++) {
          const o = Ta[t[e]];
          if (o && o(n, t)) return;
        }
        return e(n, ...o);
      },
    ka = {
      esc: "escape",
      space: " ",
      up: "arrow-up",
      left: "arrow-left",
      right: "arrow-right",
      down: "arrow-down",
      delete: "backspace",
    },
    Oa = (e, t) => (n) => {
      if (!("key" in n)) return;
      const o = q(n.key);
      return t.some((e) => e === o || ka[e] === o) ? e(n) : void 0;
    },
    Ia = {
      beforeMount(e, { value: t }, { transition: n }) {
        (e._vod = "none" === e.style.display ? "" : e.style.display),
          n && t ? n.beforeEnter(e) : Ra(e, t);
      },
      mounted(e, { value: t }, { transition: n }) {
        n && t && n.enter(e);
      },
      updated(e, { value: t, oldValue: n }, { transition: o }) {
        !t != !n &&
          (o
            ? t
              ? (o.beforeEnter(e), Ra(e, !0), o.enter(e))
              : o.leave(e, () => {
                  Ra(e, !1);
                })
            : Ra(e, t));
      },
      beforeUnmount(e, { value: t }) {
        Ra(e, t);
      },
    };
  function Ra(e, t) {
    e.style.display = t ? e._vod : "none";
  }
  const Na = E(
    {
      patchProp: (e, t, n, o, i = !1, a, c, l, u) => {
        "class" === t
          ? (function (e, t, n) {
              const o = e._vtc;
              o && (t = (t ? [t, ...o] : [...o]).join(" ")),
                null == t
                  ? e.removeAttribute("class")
                  : n
                  ? e.setAttribute("class", t)
                  : (e.className = t);
            })(e, o, i)
          : "style" === t
          ? (function (e, t, n) {
              const o = e.style,
                s = P(n);
              if (n && !s) {
                for (const e in n) wi(o, e, n[e]);
                if (t && !P(t)) for (const e in t) null == n[e] && wi(o, e, "");
              } else {
                const r = o.display;
                s
                  ? t !== n && (o.cssText = n)
                  : t && e.removeAttribute("style"),
                  "_vod" in e && (o.display = r);
              }
            })(e, n, o)
          : C(t)
          ? T(t) ||
            (function (e, t, n, o, s = null) {
              const r = e._vei || (e._vei = {}),
                i = r[t];
              if (o && i) i.value = o;
              else {
                const [n, a] = (function (e) {
                  let t;
                  if (Ni.test(e)) {
                    let n;
                    for (t = {}; (n = e.match(Ni)); )
                      (e = e.slice(0, e.length - n[0].length)),
                        (t[n[0].toLowerCase()] = !0);
                  }
                  return [q(e.slice(2)), t];
                })(t);
                if (o) {
                  const i = (r[t] = (function (e, t) {
                    const n = (e) => {
                      const o = e.timeStamp || Ti();
                      (Ei || o >= n.attached - 1) &&
                        vr(
                          (function (e, t) {
                            if (R(t)) {
                              const n = e.stopImmediatePropagation;
                              return (
                                (e.stopImmediatePropagation = () => {
                                  n.call(e), (e._stopped = !0);
                                }),
                                t.map((e) => (t) => !t._stopped && e(t))
                              );
                            }
                            return t;
                          })(e, n.value),
                          t,
                          5,
                          [e]
                        );
                    };
                    return (
                      (n.value = e),
                      (n.attached = ki || (Oi.then(Ii), (ki = Ti()))),
                      n
                    );
                  })(o, s));
                  Ri(e, n, i, a);
                } else
                  i &&
                    ((function (e, t, n, o) {
                      e.removeEventListener(t, n, o);
                    })(e, n, i, a),
                    (r[t] = void 0));
              }
            })(e, t, 0, o, c)
          : (
              "." === t[0]
                ? ((t = t.slice(1)), 1)
                : "^" === t[0]
                ? ((t = t.slice(1)), 0)
                : (function (e, t, n, o) {
                    return o
                      ? "innerHTML" === t ||
                          "textContent" === t ||
                          !!(t in e && ji.test(t) && M(n))
                      : "spellcheck" !== t &&
                          "draggable" !== t &&
                          "form" !== t &&
                          ("list" !== t || "INPUT" !== e.tagName) &&
                          ("type" !== t || "TEXTAREA" !== e.tagName) &&
                          (!ji.test(t) || !P(n)) &&
                          t in e;
                  })(e, t, o, i)
            )
          ? (function (e, t, n, o, s, i, a) {
              if ("innerHTML" === t || "textContent" === t)
                return o && a(o, s, i), void (e[t] = null == n ? "" : n);
              if (
                "value" === t &&
                "PROGRESS" !== e.tagName &&
                !e.tagName.includes("-")
              ) {
                e._value = n;
                const o = null == n ? "" : n;
                return (
                  (e.value === o && "OPTION" !== e.tagName) || (e.value = o),
                  void (null == n && e.removeAttribute(t))
                );
              }
              if ("" === n || null == n) {
                const o = typeof e[t];
                if ("boolean" === o) return void (e[t] = r(n));
                if (null == n && "string" === o)
                  return (e[t] = ""), void e.removeAttribute(t);
                if ("number" === o) {
                  try {
                    e[t] = 0;
                  } catch (e) {}
                  return void e.removeAttribute(t);
                }
              }
              try {
                e[t] = n;
              } catch (e) {}
            })(e, t, o, a, c, l, u)
          : ("true-value" === t
              ? (e._trueValue = o)
              : "false-value" === t && (e._falseValue = o),
            (function (e, t, n, o, i) {
              if (o && t.startsWith("xlink:"))
                null == n
                  ? e.removeAttributeNS(Ci, t.slice(6, t.length))
                  : e.setAttributeNS(Ci, t, n);
              else {
                const o = s(t);
                null == n || (o && !r(n))
                  ? e.removeAttribute(t)
                  : e.setAttribute(t, o ? "" : n);
              }
            })(e, t, o, i));
      },
    },
    bi
  );
  let ja,
    La = !1;
  function Ma() {
    return ja || (ja = zo(Na));
  }
  function Pa() {
    return (ja = La ? ja : Uo(Na)), (La = !0), ja;
  }
  const Fa = (...e) => {
      Ma().render(...e);
    },
    Ba = (...e) => {
      Pa().hydrate(...e);
    },
    Da = (...e) => {
      const t = Ma().createApp(...e),
        { mount: n } = t;
      return (
        (t.mount = (e) => {
          const o = Va(e);
          if (!o) return;
          const s = t._component;
          M(s) || s.render || s.template || (s.template = o.innerHTML),
            (o.innerHTML = "");
          const r = n(o, !1, o instanceof SVGElement);
          return (
            o instanceof Element &&
              (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
            r
          );
        }),
        t
      );
    },
    Aa = (...e) => {
      const t = Pa().createApp(...e),
        { mount: n } = t;
      return (
        (t.mount = (e) => {
          const t = Va(e);
          if (t) return n(t, !0, t instanceof SVGElement);
        }),
        t
      );
    };
  function Va(e) {
    return P(e) ? document.querySelector(e) : e;
  }
  let $a = !1;
  const za = () => {
    $a ||
      (($a = !0),
      (ha.getSSRProps = ({ value: e }) => ({ value: e })),
      (ya.getSSRProps = ({ value: e }, t) => {
        if (t.props && g(t.props.value, e)) return { checked: !0 };
      }),
      (ga.getSSRProps = ({ value: e }, t) => {
        if (R(e)) {
          if (t.props && m(e, t.props.value) > -1) return { checked: !0 };
        } else if (j(e)) {
          if (t.props && e.has(t.props.value)) return { checked: !0 };
        } else if (e) return { checked: !0 };
      }),
      (Ia.getSSRProps = ({ value: e }) => {
        if (!e) return { style: { display: "none" } };
      }));
  };
  function Ua(e) {
    throw e;
  }
  function Ha(e) {}
  function Wa(e, t, n, o) {
    const s = new SyntaxError(String(e));
    return (s.code = e), (s.loc = t), s;
  }
  const Ka = Symbol(""),
    Ga = Symbol(""),
    qa = Symbol(""),
    Ja = Symbol(""),
    Ya = Symbol(""),
    Xa = Symbol(""),
    Za = Symbol(""),
    Qa = Symbol(""),
    ec = Symbol(""),
    tc = Symbol(""),
    nc = Symbol(""),
    oc = Symbol(""),
    sc = Symbol(""),
    rc = Symbol(""),
    ic = Symbol(""),
    ac = Symbol(""),
    cc = Symbol(""),
    lc = Symbol(""),
    uc = Symbol(""),
    dc = Symbol(""),
    pc = Symbol(""),
    fc = Symbol(""),
    hc = Symbol(""),
    gc = Symbol(""),
    mc = Symbol(""),
    yc = Symbol(""),
    vc = Symbol(""),
    bc = Symbol(""),
    xc = Symbol(""),
    wc = Symbol(""),
    _c = Symbol(""),
    Sc = Symbol(""),
    Cc = Symbol(""),
    Tc = Symbol(""),
    Ec = Symbol(""),
    kc = Symbol(""),
    Oc = Symbol(""),
    Ic = Symbol(""),
    Rc = Symbol(""),
    Nc = {
      [Ka]: "Fragment",
      [Ga]: "Teleport",
      [qa]: "Suspense",
      [Ja]: "KeepAlive",
      [Ya]: "BaseTransition",
      [Xa]: "openBlock",
      [Za]: "createBlock",
      [Qa]: "createElementBlock",
      [ec]: "createVNode",
      [tc]: "createElementVNode",
      [nc]: "createCommentVNode",
      [oc]: "createTextVNode",
      [sc]: "createStaticVNode",
      [rc]: "resolveComponent",
      [ic]: "resolveDynamicComponent",
      [ac]: "resolveDirective",
      [cc]: "resolveFilter",
      [lc]: "withDirectives",
      [uc]: "renderList",
      [dc]: "renderSlot",
      [pc]: "createSlots",
      [fc]: "toDisplayString",
      [hc]: "mergeProps",
      [gc]: "normalizeClass",
      [mc]: "normalizeStyle",
      [yc]: "normalizeProps",
      [vc]: "guardReactiveProps",
      [bc]: "toHandlers",
      [xc]: "camelize",
      [wc]: "capitalize",
      [_c]: "toHandlerKey",
      [Sc]: "setBlockTracking",
      [Cc]: "pushScopeId",
      [Tc]: "popScopeId",
      [Ec]: "withCtx",
      [kc]: "unref",
      [Oc]: "isRef",
      [Ic]: "withMemo",
      [Rc]: "isMemoSame",
    },
    jc = {
      source: "",
      start: { line: 1, column: 1, offset: 0 },
      end: { line: 1, column: 1, offset: 0 },
    };
  function Lc(e, t, n, o, s, r, i, a = !1, c = !1, l = !1, u = jc) {
    return (
      e &&
        (a
          ? (e.helper(Xa), e.helper(cl(e.inSSR, l)))
          : e.helper(al(e.inSSR, l)),
        i && e.helper(lc)),
      {
        type: 13,
        tag: t,
        props: n,
        children: o,
        patchFlag: s,
        dynamicProps: r,
        directives: i,
        isBlock: a,
        disableTracking: c,
        isComponent: l,
        loc: u,
      }
    );
  }
  function Mc(e, t = jc) {
    return { type: 17, loc: t, elements: e };
  }
  function Pc(e, t = jc) {
    return { type: 15, loc: t, properties: e };
  }
  function Fc(e, t) {
    return { type: 16, loc: jc, key: P(e) ? Bc(e, !0) : e, value: t };
  }
  function Bc(e, t = !1, n = jc, o = 0) {
    return { type: 4, loc: n, content: e, isStatic: t, constType: t ? 3 : o };
  }
  function Dc(e, t = jc) {
    return { type: 8, loc: t, children: e };
  }
  function Ac(e, t = [], n = jc) {
    return { type: 14, loc: n, callee: e, arguments: t };
  }
  function Vc(e, t, n = !1, o = !1, s = jc) {
    return { type: 18, params: e, returns: t, newline: n, isSlot: o, loc: s };
  }
  function $c(e, t, n, o = !0) {
    return {
      type: 19,
      test: e,
      consequent: t,
      alternate: n,
      newline: o,
      loc: jc,
    };
  }
  const zc = (e) => 4 === e.type && e.isStatic,
    Uc = (e, t) => e === t || e === q(t);
  function Hc(e) {
    return Uc(e, "Teleport")
      ? Ga
      : Uc(e, "Suspense")
      ? qa
      : Uc(e, "KeepAlive")
      ? Ja
      : Uc(e, "BaseTransition")
      ? Ya
      : void 0;
  }
  const Wc = /^\d|[^\$\w]/,
    Kc = (e) => !Wc.test(e),
    Gc = /[A-Za-z_$\xA0-\uFFFF]/,
    qc = /[\.\?\w$\xA0-\uFFFF]/,
    Jc = /\s+[.[]\s*|\s*[.[]\s+/g,
    Yc = (e) => {
      e = e.trim().replace(Jc, (e) => e.trim());
      let t = 0,
        n = [],
        o = 0,
        s = 0,
        r = null;
      for (let i = 0; i < e.length; i++) {
        const a = e.charAt(i);
        switch (t) {
          case 0:
            if ("[" === a) n.push(t), (t = 1), o++;
            else if ("(" === a) n.push(t), (t = 2), s++;
            else if (!(0 === i ? Gc : qc).test(a)) return !1;
            break;
          case 1:
            "'" === a || '"' === a || "`" === a
              ? (n.push(t), (t = 3), (r = a))
              : "[" === a
              ? o++
              : "]" === a && (--o || (t = n.pop()));
            break;
          case 2:
            if ("'" === a || '"' === a || "`" === a)
              n.push(t), (t = 3), (r = a);
            else if ("(" === a) s++;
            else if (")" === a) {
              if (i === e.length - 1) return !1;
              --s || (t = n.pop());
            }
            break;
          case 3:
            a === r && ((t = n.pop()), (r = null));
        }
      }
      return !o && !s;
    };
  function Xc(e, t, n) {
    const o = {
      source: e.source.slice(t, t + n),
      start: Zc(e.start, e.source, t),
      end: e.end,
    };
    return null != n && (o.end = Zc(e.start, e.source, t + n)), o;
  }
  function Zc(e, t, n = t.length) {
    return Qc(E({}, e), t, n);
  }
  function Qc(e, t, n = t.length) {
    let o = 0,
      s = -1;
    for (let e = 0; e < n; e++) 10 === t.charCodeAt(e) && (o++, (s = e));
    return (
      (e.offset += n),
      (e.line += o),
      (e.column = -1 === s ? e.column + n : n - s),
      e
    );
  }
  function el(e, t, n = !1) {
    for (let o = 0; o < e.props.length; o++) {
      const s = e.props[o];
      if (
        7 === s.type &&
        (n || s.exp) &&
        (P(t) ? s.name === t : t.test(s.name))
      )
        return s;
    }
  }
  function tl(e, t, n = !1, o = !1) {
    for (let s = 0; s < e.props.length; s++) {
      const r = e.props[s];
      if (6 === r.type) {
        if (n) continue;
        if (r.name === t && (r.value || o)) return r;
      } else if ("bind" === r.name && (r.exp || o) && nl(r.arg, t)) return r;
    }
  }
  function nl(e, t) {
    return !(!e || !zc(e) || e.content !== t);
  }
  function ol(e) {
    return 5 === e.type || 2 === e.type;
  }
  function sl(e) {
    return 7 === e.type && "slot" === e.name;
  }
  function rl(e) {
    return 1 === e.type && 3 === e.tagType;
  }
  function il(e) {
    return 1 === e.type && 2 === e.tagType;
  }
  function al(e, t) {
    return e || t ? ec : tc;
  }
  function cl(e, t) {
    return e || t ? Za : Qa;
  }
  const ll = new Set([yc, vc]);
  function ul(e, t = []) {
    if (e && !P(e) && 14 === e.type) {
      const n = e.callee;
      if (!P(n) && ll.has(n)) return ul(e.arguments[0], t.concat(e));
    }
    return [e, t];
  }
  function dl(e, t, n) {
    let o,
      s,
      r = 13 === e.type ? e.props : e.arguments[2],
      i = [];
    if (r && !P(r) && 14 === r.type) {
      const e = ul(r);
      (r = e[0]), (i = e[1]), (s = i[i.length - 1]);
    }
    if (null == r || P(r)) o = Pc([t]);
    else if (14 === r.type) {
      const e = r.arguments[0];
      P(e) || 15 !== e.type
        ? r.callee === bc
          ? (o = Ac(n.helper(hc), [Pc([t]), r]))
          : r.arguments.unshift(Pc([t]))
        : e.properties.unshift(t),
        !o && (o = r);
    } else if (15 === r.type) {
      let e = !1;
      if (4 === t.key.type) {
        const n = t.key.content;
        e = r.properties.some((e) => 4 === e.key.type && e.key.content === n);
      }
      e || r.properties.unshift(t), (o = r);
    } else
      (o = Ac(n.helper(hc), [Pc([t]), r])),
        s && s.callee === vc && (s = i[i.length - 2]);
    13 === e.type
      ? s
        ? (s.arguments[0] = o)
        : (e.props = o)
      : s
      ? (s.arguments[0] = o)
      : (e.arguments[2] = o);
  }
  function pl(e, t) {
    return `_${t}_${e.replace(/[^\w]/g, (t, n) =>
      "-" === t ? "_" : e.charCodeAt(n).toString()
    )}`;
  }
  function fl(e, { helper: t, removeHelper: n, inSSR: o }) {
    e.isBlock ||
      ((e.isBlock = !0),
      n(al(o, e.isComponent)),
      t(Xa),
      t(cl(o, e.isComponent)));
  }
  function hl(e, t) {
    const n = t.options ? t.options.compatConfig : t.compatConfig,
      o = n && n[e];
    return "MODE" === e ? o || 3 : o;
  }
  function gl(e, t) {
    const n = hl("MODE", t),
      o = hl(e, t);
    return 3 === n ? !0 === o : !1 !== o;
  }
  function ml(e, t, n, ...o) {
    return gl(e, t);
  }
  const yl = /&(gt|lt|amp|apos|quot);/g,
    vl = { gt: ">", lt: "<", amp: "&", apos: "'", quot: '"' },
    bl = {
      delimiters: ["{{", "}}"],
      getNamespace: () => 0,
      getTextMode: () => 0,
      isVoidTag: _,
      isPreTag: _,
      isCustomElement: _,
      decodeEntities: (e) => e.replace(yl, (e, t) => vl[t]),
      onError: Ua,
      onWarn: Ha,
      comments: !1,
    };
  function xl(e, t, n) {
    const o = Pl(n),
      s = o ? o.ns : 0,
      r = [];
    for (; !$l(e, t, n); ) {
      const i = e.source;
      let a;
      if (0 === t || 1 === t)
        if (!e.inVPre && Fl(i, e.options.delimiters[0])) a = Rl(e, t);
        else if (0 === t && "<" === i[0])
          if (1 === i.length) Vl(e, 5, 1);
          else if ("!" === i[1])
            Fl(i, "\x3c!--")
              ? (a = Sl(e))
              : Fl(i, "<!DOCTYPE")
              ? (a = Cl(e))
              : Fl(i, "<![CDATA[")
              ? 0 !== s
                ? (a = _l(e, n))
                : (Vl(e, 1), (a = Cl(e)))
              : (Vl(e, 11), (a = Cl(e)));
          else if ("/" === i[1])
            if (2 === i.length) Vl(e, 5, 2);
            else {
              if (">" === i[2]) {
                Vl(e, 14, 2), Bl(e, 3);
                continue;
              }
              if (/[a-z]/i.test(i[2])) {
                Vl(e, 23), kl(e, 1, o);
                continue;
              }
              Vl(e, 12, 2), (a = Cl(e));
            }
          else
            /[a-z]/i.test(i[1])
              ? ((a = Tl(e, n)),
                gl("COMPILER_NATIVE_TEMPLATE", e) &&
                  a &&
                  "template" === a.tag &&
                  !a.props.some((e) => 7 === e.type && El(e.name)) &&
                  (a = a.children))
              : "?" === i[1]
              ? (Vl(e, 21, 1), (a = Cl(e)))
              : Vl(e, 12, 1);
      if ((a || (a = Nl(e, t)), R(a)))
        for (let e = 0; e < a.length; e++) wl(r, a[e]);
      else wl(r, a);
    }
    let i = !1;
    if (2 !== t && 1 !== t) {
      const t = "preserve" !== e.options.whitespace;
      for (let n = 0; n < r.length; n++) {
        const o = r[n];
        if (e.inPre || 2 !== o.type)
          3 !== o.type || e.options.comments || ((i = !0), (r[n] = null));
        else if (/[^\t\r\n\f ]/.test(o.content))
          t && (o.content = o.content.replace(/[\t\r\n\f ]+/g, " "));
        else {
          const e = r[n - 1],
            s = r[n + 1];
          !e ||
          !s ||
          (t &&
            (3 === e.type ||
              3 === s.type ||
              (1 === e.type && 1 === s.type && /[\r\n]/.test(o.content))))
            ? ((i = !0), (r[n] = null))
            : (o.content = " ");
        }
      }
      if (e.inPre && o && e.options.isPreTag(o.tag)) {
        const e = r[0];
        e && 2 === e.type && (e.content = e.content.replace(/^\r?\n/, ""));
      }
    }
    return i ? r.filter(Boolean) : r;
  }
  function wl(e, t) {
    if (2 === t.type) {
      const n = Pl(e);
      if (n && 2 === n.type && n.loc.end.offset === t.loc.start.offset)
        return (
          (n.content += t.content),
          (n.loc.end = t.loc.end),
          void (n.loc.source += t.loc.source)
        );
    }
    e.push(t);
  }
  function _l(e, t) {
    Bl(e, 9);
    const n = xl(e, 3, t);
    return 0 === e.source.length ? Vl(e, 6) : Bl(e, 3), n;
  }
  function Sl(e) {
    const t = Ll(e);
    let n;
    const o = /--(\!)?>/.exec(e.source);
    if (o) {
      o.index <= 3 && Vl(e, 0),
        o[1] && Vl(e, 10),
        (n = e.source.slice(4, o.index));
      const t = e.source.slice(0, o.index);
      let s = 1,
        r = 0;
      for (; -1 !== (r = t.indexOf("\x3c!--", s)); )
        Bl(e, r - s + 1), r + 4 < t.length && Vl(e, 16), (s = r + 1);
      Bl(e, o.index + o[0].length - s + 1);
    } else (n = e.source.slice(4)), Bl(e, e.source.length), Vl(e, 7);
    return { type: 3, content: n, loc: Ml(e, t) };
  }
  function Cl(e) {
    const t = Ll(e),
      n = "?" === e.source[1] ? 1 : 2;
    let o;
    const s = e.source.indexOf(">");
    return (
      -1 === s
        ? ((o = e.source.slice(n)), Bl(e, e.source.length))
        : ((o = e.source.slice(n, s)), Bl(e, s + 1)),
      { type: 3, content: o, loc: Ml(e, t) }
    );
  }
  function Tl(e, t) {
    const n = e.inPre,
      o = e.inVPre,
      s = Pl(t),
      r = kl(e, 0, s),
      i = e.inPre && !n,
      a = e.inVPre && !o;
    if (r.isSelfClosing || e.options.isVoidTag(r.tag))
      return i && (e.inPre = !1), a && (e.inVPre = !1), r;
    t.push(r);
    const c = e.options.getTextMode(r, s),
      l = xl(e, c, t);
    t.pop();
    {
      const t = r.props.find(
        (e) => 6 === e.type && "inline-template" === e.name
      );
      if (t && ml("COMPILER_INLINE_TEMPLATE", e, t.loc)) {
        const n = Ml(e, r.loc.end);
        t.value = { type: 2, content: n.source, loc: n };
      }
    }
    if (((r.children = l), zl(e.source, r.tag))) kl(e, 1, s);
    else if (
      (Vl(e, 24, 0, r.loc.start),
      0 === e.source.length && "script" === r.tag.toLowerCase())
    ) {
      const t = l[0];
      t && Fl(t.loc.source, "\x3c!--") && Vl(e, 8);
    }
    return (
      (r.loc = Ml(e, r.loc.start)), i && (e.inPre = !1), a && (e.inVPre = !1), r
    );
  }
  const El = n("if,else,else-if,for,slot");
  function kl(e, t, n) {
    const o = Ll(e),
      s = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),
      r = s[1],
      i = e.options.getNamespace(r, n);
    Bl(e, s[0].length), Dl(e);
    const a = Ll(e),
      c = e.source;
    e.options.isPreTag(r) && (e.inPre = !0);
    let l = Ol(e, t);
    0 === t &&
      !e.inVPre &&
      l.some((e) => 7 === e.type && "pre" === e.name) &&
      ((e.inVPre = !0),
      E(e, a),
      (e.source = c),
      (l = Ol(e, t).filter((e) => "v-pre" !== e.name)));
    let u = !1;
    if (
      (0 === e.source.length
        ? Vl(e, 9)
        : ((u = Fl(e.source, "/>")),
          1 === t && u && Vl(e, 4),
          Bl(e, u ? 2 : 1)),
      1 === t)
    )
      return;
    let d = 0;
    return (
      e.inVPre ||
        ("slot" === r
          ? (d = 2)
          : "template" === r
          ? l.some((e) => 7 === e.type && El(e.name)) && (d = 3)
          : (function (e, t, n) {
              const o = n.options;
              if (o.isCustomElement(e)) return !1;
              if (
                "component" === e ||
                /^[A-Z]/.test(e) ||
                Hc(e) ||
                (o.isBuiltInComponent && o.isBuiltInComponent(e)) ||
                (o.isNativeTag && !o.isNativeTag(e))
              )
                return !0;
              for (let e = 0; e < t.length; e++) {
                const o = t[e];
                if (6 === o.type) {
                  if ("is" === o.name && o.value) {
                    if (o.value.content.startsWith("vue:")) return !0;
                    if (ml("COMPILER_IS_ON_ELEMENT", n, o.loc)) return !0;
                  }
                } else {
                  if ("is" === o.name) return !0;
                  if (
                    "bind" === o.name &&
                    nl(o.arg, "is") &&
                    ml("COMPILER_IS_ON_ELEMENT", n, o.loc)
                  )
                    return !0;
                }
              }
            })(r, l, e) && (d = 1)),
      {
        type: 1,
        ns: i,
        tag: r,
        tagType: d,
        props: l,
        isSelfClosing: u,
        children: [],
        loc: Ml(e, o),
        codegenNode: void 0,
      }
    );
  }
  function Ol(e, t) {
    const n = [],
      o = new Set();
    for (; e.source.length > 0 && !Fl(e.source, ">") && !Fl(e.source, "/>"); ) {
      if (Fl(e.source, "/")) {
        Vl(e, 22), Bl(e, 1), Dl(e);
        continue;
      }
      1 === t && Vl(e, 3);
      const s = Il(e, o);
      6 === s.type &&
        s.value &&
        "class" === s.name &&
        (s.value.content = s.value.content.replace(/\s+/g, " ").trim()),
        0 === t && n.push(s),
        /^[^\t\r\n\f />]/.test(e.source) && Vl(e, 15),
        Dl(e);
    }
    return n;
  }
  function Il(e, t) {
    const n = Ll(e),
      o = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];
    t.has(o) && Vl(e, 2), t.add(o), "=" === o[0] && Vl(e, 19);
    {
      const t = /["'<]/g;
      let n;
      for (; (n = t.exec(o)); ) Vl(e, 17, n.index);
    }
    let s;
    Bl(e, o.length),
      /^[\t\r\n\f ]*=/.test(e.source) &&
        (Dl(e),
        Bl(e, 1),
        Dl(e),
        (s = (function (e) {
          const t = Ll(e);
          let n;
          const o = e.source[0],
            s = '"' === o || "'" === o;
          if (s) {
            Bl(e, 1);
            const t = e.source.indexOf(o);
            -1 === t
              ? (n = jl(e, e.source.length, 4))
              : ((n = jl(e, t, 4)), Bl(e, 1));
          } else {
            const t = /^[^\t\r\n\f >]+/.exec(e.source);
            if (!t) return;
            const o = /["'<=`]/g;
            let s;
            for (; (s = o.exec(t[0])); ) Vl(e, 18, s.index);
            n = jl(e, t[0].length, 4);
          }
          return { content: n, isQuoted: s, loc: Ml(e, t) };
        })(e)),
        s || Vl(e, 13));
    const r = Ml(e, n);
    if (!e.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(o)) {
      const t =
        /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(
          o
        );
      let i,
        a = Fl(o, "."),
        c = t[1] || (a || Fl(o, ":") ? "bind" : Fl(o, "@") ? "on" : "slot");
      if (t[2]) {
        const s = "slot" === c,
          r = o.lastIndexOf(t[2]),
          a = Ml(
            e,
            Al(e, n, r),
            Al(e, n, r + t[2].length + ((s && t[3]) || "").length)
          );
        let l = t[2],
          u = !0;
        l.startsWith("[")
          ? ((u = !1),
            l.endsWith("]")
              ? (l = l.slice(1, l.length - 1))
              : (Vl(e, 27), (l = l.slice(1))))
          : s && (l += t[3] || ""),
          (i = {
            type: 4,
            content: l,
            isStatic: u,
            constType: u ? 3 : 0,
            loc: a,
          });
      }
      if (s && s.isQuoted) {
        const e = s.loc;
        e.start.offset++,
          e.start.column++,
          (e.end = Zc(e.start, s.content)),
          (e.source = e.source.slice(1, -1));
      }
      const l = t[3] ? t[3].slice(1).split(".") : [];
      return (
        a && l.push("prop"),
        "bind" === c &&
          i &&
          l.includes("sync") &&
          ml("COMPILER_V_BIND_SYNC", e, 0, i.loc.source) &&
          ((c = "model"), l.splice(l.indexOf("sync"), 1)),
        {
          type: 7,
          name: c,
          exp: s && {
            type: 4,
            content: s.content,
            isStatic: !1,
            constType: 0,
            loc: s.loc,
          },
          arg: i,
          modifiers: l,
          loc: r,
        }
      );
    }
    return (
      !e.inVPre && Fl(o, "v-") && Vl(e, 26),
      {
        type: 6,
        name: o,
        value: s && { type: 2, content: s.content, loc: s.loc },
        loc: r,
      }
    );
  }
  function Rl(e, t) {
    const [n, o] = e.options.delimiters,
      s = e.source.indexOf(o, n.length);
    if (-1 === s) return void Vl(e, 25);
    const r = Ll(e);
    Bl(e, n.length);
    const i = Ll(e),
      a = Ll(e),
      c = s - n.length,
      l = e.source.slice(0, c),
      u = jl(e, c, t),
      d = u.trim(),
      p = u.indexOf(d);
    return (
      p > 0 && Qc(i, l, p),
      Qc(a, l, c - (u.length - d.length - p)),
      Bl(e, o.length),
      {
        type: 5,
        content: {
          type: 4,
          isStatic: !1,
          constType: 0,
          content: d,
          loc: Ml(e, i, a),
        },
        loc: Ml(e, r),
      }
    );
  }
  function Nl(e, t) {
    const n = 3 === t ? ["]]>"] : ["<", e.options.delimiters[0]];
    let o = e.source.length;
    for (let t = 0; t < n.length; t++) {
      const s = e.source.indexOf(n[t], 1);
      -1 !== s && o > s && (o = s);
    }
    const s = Ll(e);
    return { type: 2, content: jl(e, o, t), loc: Ml(e, s) };
  }
  function jl(e, t, n) {
    const o = e.source.slice(0, t);
    return (
      Bl(e, t),
      2 === n || 3 === n || -1 === o.indexOf("&")
        ? o
        : e.options.decodeEntities(o, 4 === n)
    );
  }
  function Ll(e) {
    const { column: t, line: n, offset: o } = e;
    return { column: t, line: n, offset: o };
  }
  function Ml(e, t, n) {
    return {
      start: t,
      end: (n = n || Ll(e)),
      source: e.originalSource.slice(t.offset, n.offset),
    };
  }
  function Pl(e) {
    return e[e.length - 1];
  }
  function Fl(e, t) {
    return e.startsWith(t);
  }
  function Bl(e, t) {
    const { source: n } = e;
    Qc(e, n, t), (e.source = n.slice(t));
  }
  function Dl(e) {
    const t = /^[\t\r\n\f ]+/.exec(e.source);
    t && Bl(e, t[0].length);
  }
  function Al(e, t, n) {
    return Zc(t, e.originalSource.slice(t.offset, n), n);
  }
  function Vl(e, t, n, o = Ll(e)) {
    n && ((o.offset += n), (o.column += n)),
      e.options.onError(Wa(t, { start: o, end: o, source: "" }));
  }
  function $l(e, t, n) {
    const o = e.source;
    switch (t) {
      case 0:
        if (Fl(o, "</"))
          for (let e = n.length - 1; e >= 0; --e)
            if (zl(o, n[e].tag)) return !0;
        break;
      case 1:
      case 2: {
        const e = Pl(n);
        if (e && zl(o, e.tag)) return !0;
        break;
      }
      case 3:
        if (Fl(o, "]]>")) return !0;
    }
    return !o;
  }
  function zl(e, t) {
    return (
      Fl(e, "</") &&
      e.slice(2, 2 + t.length).toLowerCase() === t.toLowerCase() &&
      /[\t\r\n\f />]/.test(e[2 + t.length] || ">")
    );
  }
  function Ul(e, t) {
    Wl(e, t, Hl(e, e.children[0]));
  }
  function Hl(e, t) {
    const { children: n } = e;
    return 1 === n.length && 1 === t.type && !il(t);
  }
  function Wl(e, t, n = !1) {
    const { children: o } = e,
      s = o.length;
    let r = 0;
    for (let e = 0; e < o.length; e++) {
      const s = o[e];
      if (1 === s.type && 0 === s.tagType) {
        const e = n ? 0 : Kl(s, t);
        if (e > 0) {
          if (e >= 2) {
            (s.codegenNode.patchFlag = "-1"),
              (s.codegenNode = t.hoist(s.codegenNode)),
              r++;
            continue;
          }
        } else {
          const e = s.codegenNode;
          if (13 === e.type) {
            const n = Xl(e);
            if ((!n || 512 === n || 1 === n) && Jl(s, t) >= 2) {
              const n = Yl(s);
              n && (e.props = t.hoist(n));
            }
            e.dynamicProps && (e.dynamicProps = t.hoist(e.dynamicProps));
          }
        }
      } else
        12 === s.type &&
          Kl(s.content, t) >= 2 &&
          ((s.codegenNode = t.hoist(s.codegenNode)), r++);
      if (1 === s.type) {
        const e = 1 === s.tagType;
        e && t.scopes.vSlot++, Wl(s, t), e && t.scopes.vSlot--;
      } else if (11 === s.type) Wl(s, t, 1 === s.children.length);
      else if (9 === s.type)
        for (let e = 0; e < s.branches.length; e++)
          Wl(s.branches[e], t, 1 === s.branches[e].children.length);
    }
    r && t.transformHoist && t.transformHoist(o, t, e),
      r &&
        r === s &&
        1 === e.type &&
        0 === e.tagType &&
        e.codegenNode &&
        13 === e.codegenNode.type &&
        R(e.codegenNode.children) &&
        (e.codegenNode.children = t.hoist(Mc(e.codegenNode.children)));
  }
  function Kl(e, t) {
    const { constantCache: n } = t;
    switch (e.type) {
      case 1:
        if (0 !== e.tagType) return 0;
        const o = n.get(e);
        if (void 0 !== o) return o;
        const s = e.codegenNode;
        if (13 !== s.type) return 0;
        if (s.isBlock && "svg" !== e.tag && "foreignObject" !== e.tag) return 0;
        if (Xl(s)) return n.set(e, 0), 0;
        {
          let o = 3;
          const r = Jl(e, t);
          if (0 === r) return n.set(e, 0), 0;
          r < o && (o = r);
          for (let s = 0; s < e.children.length; s++) {
            const r = Kl(e.children[s], t);
            if (0 === r) return n.set(e, 0), 0;
            r < o && (o = r);
          }
          if (o > 1)
            for (let s = 0; s < e.props.length; s++) {
              const r = e.props[s];
              if (7 === r.type && "bind" === r.name && r.exp) {
                const s = Kl(r.exp, t);
                if (0 === s) return n.set(e, 0), 0;
                s < o && (o = s);
              }
            }
          return (
            s.isBlock &&
              (t.removeHelper(Xa),
              t.removeHelper(cl(t.inSSR, s.isComponent)),
              (s.isBlock = !1),
              t.helper(al(t.inSSR, s.isComponent))),
            n.set(e, o),
            o
          );
        }
      case 2:
      case 3:
        return 3;
      case 9:
      case 11:
      case 10:
      default:
        return 0;
      case 5:
      case 12:
        return Kl(e.content, t);
      case 4:
        return e.constType;
      case 8:
        let r = 3;
        for (let n = 0; n < e.children.length; n++) {
          const o = e.children[n];
          if (P(o) || F(o)) continue;
          const s = Kl(o, t);
          if (0 === s) return 0;
          s < r && (r = s);
        }
        return r;
    }
  }
  const Gl = new Set([gc, mc, yc, vc]);
  function ql(e, t) {
    if (14 === e.type && !P(e.callee) && Gl.has(e.callee)) {
      const n = e.arguments[0];
      if (4 === n.type) return Kl(n, t);
      if (14 === n.type) return ql(n, t);
    }
    return 0;
  }
  function Jl(e, t) {
    let n = 3;
    const o = Yl(e);
    if (o && 15 === o.type) {
      const { properties: e } = o;
      for (let o = 0; o < e.length; o++) {
        const { key: s, value: r } = e[o],
          i = Kl(s, t);
        if (0 === i) return i;
        let a;
        if (
          (i < n && (n = i),
          (a = 4 === r.type ? Kl(r, t) : 14 === r.type ? ql(r, t) : 0),
          0 === a)
        )
          return a;
        a < n && (n = a);
      }
    }
    return n;
  }
  function Yl(e) {
    const t = e.codegenNode;
    if (13 === t.type) return t.props;
  }
  function Xl(e) {
    const t = e.patchFlag;
    return t ? parseInt(t, 10) : void 0;
  }
  function Zl(e, t) {
    const n = (function (
      e,
      {
        filename: t = "",
        prefixIdentifiers: n = !1,
        hoistStatic: o = !1,
        cacheHandlers: s = !1,
        nodeTransforms: r = [],
        directiveTransforms: i = {},
        transformHoist: a = null,
        isBuiltInComponent: c = w,
        isCustomElement: l = w,
        expressionPlugins: u = [],
        scopeId: d = null,
        slotted: p = !0,
        ssr: f = !1,
        inSSR: h = !1,
        ssrCssVars: g = "",
        bindingMetadata: m = b,
        inline: y = !1,
        isTS: v = !1,
        onError: x = Ua,
        onWarn: _ = Ha,
        compatConfig: S,
      }
    ) {
      const C = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/),
        T = {
          selfName: C && J(K(C[1])),
          prefixIdentifiers: n,
          hoistStatic: o,
          cacheHandlers: s,
          nodeTransforms: r,
          directiveTransforms: i,
          transformHoist: a,
          isBuiltInComponent: c,
          isCustomElement: l,
          expressionPlugins: u,
          scopeId: d,
          slotted: p,
          ssr: f,
          inSSR: h,
          ssrCssVars: g,
          bindingMetadata: m,
          inline: y,
          isTS: v,
          onError: x,
          onWarn: _,
          compatConfig: S,
          root: e,
          helpers: new Map(),
          components: new Set(),
          directives: new Set(),
          hoists: [],
          imports: [],
          constantCache: new Map(),
          temps: 0,
          cached: 0,
          identifiers: Object.create(null),
          scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 },
          parent: null,
          currentNode: e,
          childIndex: 0,
          inVOnce: !1,
          helper(e) {
            const t = T.helpers.get(e) || 0;
            return T.helpers.set(e, t + 1), e;
          },
          removeHelper(e) {
            const t = T.helpers.get(e);
            if (t) {
              const n = t - 1;
              n ? T.helpers.set(e, n) : T.helpers.delete(e);
            }
          },
          helperString: (e) => `_${Nc[T.helper(e)]}`,
          replaceNode(e) {
            T.parent.children[T.childIndex] = T.currentNode = e;
          },
          removeNode(e) {
            const t = T.parent.children,
              n = e ? t.indexOf(e) : T.currentNode ? T.childIndex : -1;
            e && e !== T.currentNode
              ? T.childIndex > n && (T.childIndex--, T.onNodeRemoved())
              : ((T.currentNode = null), T.onNodeRemoved()),
              T.parent.children.splice(n, 1);
          },
          onNodeRemoved: () => {},
          addIdentifiers(e) {},
          removeIdentifiers(e) {},
          hoist(e) {
            P(e) && (e = Bc(e)), T.hoists.push(e);
            const t = Bc(`_hoisted_${T.hoists.length}`, !1, e.loc, 2);
            return (t.hoisted = e), t;
          },
          cache: (e, t = !1) =>
            (function (e, t, n = !1) {
              return { type: 20, index: e, value: t, isVNode: n, loc: jc };
            })(T.cached++, e, t),
        };
      return (T.filters = new Set()), T;
    })(e, t);
    Ql(e, n),
      t.hoistStatic && Ul(e, n),
      t.ssr ||
        (function (e, t) {
          const { helper: n } = t,
            { children: o } = e;
          if (1 === o.length) {
            const n = o[0];
            if (Hl(e, n) && n.codegenNode) {
              const o = n.codegenNode;
              13 === o.type && fl(o, t), (e.codegenNode = o);
            } else e.codegenNode = n;
          } else if (o.length > 1) {
            let o = 64;
            e.codegenNode = Lc(
              t,
              n(Ka),
              void 0,
              e.children,
              o + "",
              void 0,
              void 0,
              !0,
              void 0,
              !1
            );
          }
        })(e, n),
      (e.helpers = [...n.helpers.keys()]),
      (e.components = [...n.components]),
      (e.directives = [...n.directives]),
      (e.imports = n.imports),
      (e.hoists = n.hoists),
      (e.temps = n.temps),
      (e.cached = n.cached),
      (e.filters = [...n.filters]);
  }
  function Ql(e, t) {
    t.currentNode = e;
    const { nodeTransforms: n } = t,
      o = [];
    for (let s = 0; s < n.length; s++) {
      const r = n[s](e, t);
      if ((r && (R(r) ? o.push(...r) : o.push(r)), !t.currentNode)) return;
      e = t.currentNode;
    }
    switch (e.type) {
      case 3:
        t.ssr || t.helper(nc);
        break;
      case 5:
        t.ssr || t.helper(fc);
        break;
      case 9:
        for (let n = 0; n < e.branches.length; n++) Ql(e.branches[n], t);
        break;
      case 10:
      case 11:
      case 1:
      case 0:
        !(function (e, t) {
          let n = 0;
          const o = () => {
            n--;
          };
          for (; n < e.children.length; n++) {
            const s = e.children[n];
            P(s) ||
              ((t.parent = e),
              (t.childIndex = n),
              (t.onNodeRemoved = o),
              Ql(s, t));
          }
        })(e, t);
    }
    t.currentNode = e;
    let s = o.length;
    for (; s--; ) o[s]();
  }
  function eu(e, t) {
    const n = P(e) ? (t) => t === e : (t) => e.test(t);
    return (e, o) => {
      if (1 === e.type) {
        const { props: s } = e;
        if (3 === e.tagType && s.some(sl)) return;
        const r = [];
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          if (7 === a.type && n(a.name)) {
            s.splice(i, 1), i--;
            const n = t(e, a, o);
            n && r.push(n);
          }
        }
        return r;
      }
    };
  }
  const tu = "/*#__PURE__*/";
  function nu(e, t, { helper: n, push: o, newline: s, isTS: r }) {
    const i = n("filter" === t ? cc : "component" === t ? rc : ac);
    for (let n = 0; n < e.length; n++) {
      let a = e[n];
      const c = a.endsWith("__self");
      c && (a = a.slice(0, -6)),
        o(
          `const ${pl(a, t)} = ${i}(${JSON.stringify(a)}${c ? ", true" : ""})${
            r ? "!" : ""
          }`
        ),
        n < e.length - 1 && s();
    }
  }
  function ou(e, t) {
    const n = e.length > 3 || !1;
    t.push("["), n && t.indent(), su(e, t, n), n && t.deindent(), t.push("]");
  }
  function su(e, t, n = !1, o = !0) {
    const { push: s, newline: r } = t;
    for (let i = 0; i < e.length; i++) {
      const a = e[i];
      P(a) ? s(a) : R(a) ? ou(a, t) : ru(a, t),
        i < e.length - 1 && (n ? (o && s(","), r()) : o && s(", "));
    }
  }
  function ru(e, t) {
    if (P(e)) t.push(e);
    else if (F(e)) t.push(t.helper(e));
    else
      switch (e.type) {
        case 1:
        case 9:
        case 11:
        case 12:
          ru(e.codegenNode, t);
          break;
        case 2:
          !(function (e, t) {
            t.push(JSON.stringify(e.content), e);
          })(e, t);
          break;
        case 4:
          iu(e, t);
          break;
        case 5:
          !(function (e, t) {
            const { push: n, helper: o, pure: s } = t;
            s && n(tu), n(`${o(fc)}(`), ru(e.content, t), n(")");
          })(e, t);
          break;
        case 8:
          au(e, t);
          break;
        case 3:
          !(function (e, t) {
            const { push: n, helper: o, pure: s } = t;
            s && n(tu), n(`${o(nc)}(${JSON.stringify(e.content)})`, e);
          })(e, t);
          break;
        case 13:
          !(function (e, t) {
            const { push: n, helper: o, pure: s } = t,
              {
                tag: r,
                props: i,
                children: a,
                patchFlag: c,
                dynamicProps: l,
                directives: u,
                isBlock: d,
                disableTracking: p,
                isComponent: f,
              } = e;
            u && n(o(lc) + "("),
              d && n(`(${o(Xa)}(${p ? "true" : ""}), `),
              s && n(tu);
            n(o(d ? cl(t.inSSR, f) : al(t.inSSR, f)) + "(", e),
              su(
                (function (e) {
                  let t = e.length;
                  for (; t-- && null == e[t]; );
                  return e.slice(0, t + 1).map((e) => e || "null");
                })([r, i, a, c, l]),
                t
              ),
              n(")"),
              d && n(")"),
              u && (n(", "), ru(u, t), n(")"));
          })(e, t);
          break;
        case 14:
          !(function (e, t) {
            const { push: n, helper: o, pure: s } = t,
              r = P(e.callee) ? e.callee : o(e.callee);
            s && n(tu), n(r + "(", e), su(e.arguments, t), n(")");
          })(e, t);
          break;
        case 15:
          !(function (e, t) {
            const { push: n, indent: o, deindent: s, newline: r } = t,
              { properties: i } = e;
            if (!i.length) return void n("{}", e);
            const a = i.length > 1 || !1;
            n(a ? "{" : "{ "), a && o();
            for (let e = 0; e < i.length; e++) {
              const { key: o, value: s } = i[e];
              cu(o, t), n(": "), ru(s, t), e < i.length - 1 && (n(","), r());
            }
            a && s(), n(a ? "}" : " }");
          })(e, t);
          break;
        case 17:
          !(function (e, t) {
            ou(e.elements, t);
          })(e, t);
          break;
        case 18:
          !(function (e, t) {
            const { push: n, indent: o, deindent: s } = t,
              { params: r, returns: i, body: a, newline: c, isSlot: l } = e;
            l && n(`_${Nc[Ec]}(`),
              n("(", e),
              R(r) ? su(r, t) : r && ru(r, t),
              n(") => "),
              (c || a) && (n("{"), o()),
              i
                ? (c && n("return "), R(i) ? ou(i, t) : ru(i, t))
                : a && ru(a, t),
              (c || a) && (s(), n("}")),
              l && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
          })(e, t);
          break;
        case 19:
          !(function (e, t) {
            const { test: n, consequent: o, alternate: s, newline: r } = e,
              { push: i, indent: a, deindent: c, newline: l } = t;
            if (4 === n.type) {
              const e = !Kc(n.content);
              e && i("("), iu(n, t), e && i(")");
            } else i("("), ru(n, t), i(")");
            r && a(),
              t.indentLevel++,
              r || i(" "),
              i("? "),
              ru(o, t),
              t.indentLevel--,
              r && l(),
              r || i(" "),
              i(": ");
            const u = 19 === s.type;
            u || t.indentLevel++, ru(s, t), u || t.indentLevel--, r && c(!0);
          })(e, t);
          break;
        case 20:
          !(function (e, t) {
            const {
              push: n,
              helper: o,
              indent: s,
              deindent: r,
              newline: i,
            } = t;
            n(`_cache[${e.index}] || (`),
              e.isVNode && (s(), n(`${o(Sc)}(-1),`), i()),
              n(`_cache[${e.index}] = `),
              ru(e.value, t),
              e.isVNode &&
                (n(","),
                i(),
                n(`${o(Sc)}(1),`),
                i(),
                n(`_cache[${e.index}]`),
                r()),
              n(")");
          })(e, t);
          break;
        case 21:
          su(e.body, t, !0, !1);
      }
  }
  function iu(e, t) {
    const { content: n, isStatic: o } = e;
    t.push(o ? JSON.stringify(n) : n, e);
  }
  function au(e, t) {
    for (let n = 0; n < e.children.length; n++) {
      const o = e.children[n];
      P(o) ? t.push(o) : ru(o, t);
    }
  }
  function cu(e, t) {
    const { push: n } = t;
    8 === e.type
      ? (n("["), au(e, t), n("]"))
      : e.isStatic
      ? n(Kc(e.content) ? e.content : JSON.stringify(e.content), e)
      : n(`[${e.content}]`, e);
  }
  new RegExp(
    "\\b" +
      "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void"
        .split(",")
        .join("\\b|\\b") +
      "\\b"
  );
  const lu = eu(/^(if|else|else-if)$/, (e, t, n) =>
    (function (e, t, n, o) {
      if (!("else" === t.name || (t.exp && t.exp.content.trim()))) {
        const o = t.exp ? t.exp.loc : e.loc;
        n.onError(Wa(28, t.loc)), (t.exp = Bc("true", !1, o));
      }
      if ("if" === t.name) {
        const s = uu(e, t),
          r = { type: 9, loc: e.loc, branches: [s] };
        if ((n.replaceNode(r), o)) return o(r, s, !0);
      } else {
        const s = n.parent.children;
        let r = s.indexOf(e);
        for (; r-- >= -1; ) {
          const i = s[r];
          if (!i || 2 !== i.type || i.content.trim().length) {
            if (i && 9 === i.type) {
              "else-if" === t.name &&
                void 0 === i.branches[i.branches.length - 1].condition &&
                n.onError(Wa(30, e.loc)),
                n.removeNode();
              const s = uu(e, t);
              i.branches.push(s);
              const r = o && o(i, s, !1);
              Ql(s, n), r && r(), (n.currentNode = null);
            } else n.onError(Wa(30, e.loc));
            break;
          }
          n.removeNode(i);
        }
      }
    })(e, t, n, (e, t, o) => {
      const s = n.parent.children;
      let r = s.indexOf(e),
        i = 0;
      for (; r-- >= 0; ) {
        const e = s[r];
        e && 9 === e.type && (i += e.branches.length);
      }
      return () => {
        if (o) e.codegenNode = du(t, i, n);
        else {
          const o = (function (e) {
            for (;;)
              if (19 === e.type) {
                if (19 !== e.alternate.type) return e;
                e = e.alternate;
              } else 20 === e.type && (e = e.value);
          })(e.codegenNode);
          o.alternate = du(t, i + e.branches.length - 1, n);
        }
      };
    })
  );
  function uu(e, t) {
    return {
      type: 10,
      loc: e.loc,
      condition: "else" === t.name ? void 0 : t.exp,
      children: 3 !== e.tagType || el(e, "for") ? [e] : e.children,
      userKey: tl(e, "key"),
    };
  }
  function du(e, t, n) {
    return e.condition
      ? $c(e.condition, pu(e, t, n), Ac(n.helper(nc), ['""', "true"]))
      : pu(e, t, n);
  }
  function pu(e, t, n) {
    const { helper: o } = n,
      s = Fc("key", Bc(`${t}`, !1, jc, 2)),
      { children: r } = e,
      i = r[0];
    if (1 !== r.length || 1 !== i.type) {
      if (1 === r.length && 11 === i.type) {
        const e = i.codegenNode;
        return dl(e, s, n), e;
      }
      {
        let t = 64;
        return Lc(
          n,
          o(Ka),
          Pc([s]),
          r,
          t + "",
          void 0,
          void 0,
          !0,
          !1,
          !1,
          e.loc
        );
      }
    }
    {
      const e = i.codegenNode,
        t = 14 === (a = e).type && a.callee === Ic ? a.arguments[1].returns : a;
      return 13 === t.type && fl(t, n), dl(t, s, n), e;
    }
    var a;
  }
  const fu = eu("for", (e, t, n) => {
      const { helper: o, removeHelper: s } = n;
      return (function (e, t, n, o) {
        if (!t.exp) return void n.onError(Wa(31, t.loc));
        const s = yu(t.exp);
        if (!s) return void n.onError(Wa(32, t.loc));
        const { addIdentifiers: r, removeIdentifiers: i, scopes: a } = n,
          { source: c, value: l, key: u, index: d } = s,
          p = {
            type: 11,
            loc: t.loc,
            source: c,
            valueAlias: l,
            keyAlias: u,
            objectIndexAlias: d,
            parseResult: s,
            children: rl(e) ? e.children : [e],
          };
        n.replaceNode(p), a.vFor++;
        const f = o && o(p);
        return () => {
          a.vFor--, f && f();
        };
      })(e, t, n, (t) => {
        const r = Ac(o(uc), [t.source]),
          i = el(e, "memo"),
          a = tl(e, "key"),
          c = a && (6 === a.type ? Bc(a.value.content, !0) : a.exp),
          l = a ? Fc("key", c) : null,
          u = 4 === t.source.type && t.source.constType > 0,
          d = u ? 64 : a ? 128 : 256;
        return (
          (t.codegenNode = Lc(
            n,
            o(Ka),
            void 0,
            r,
            d + "",
            void 0,
            void 0,
            !0,
            !u,
            !1,
            e.loc
          )),
          () => {
            let a;
            const d = rl(e),
              { children: p } = t,
              f = 1 !== p.length || 1 !== p[0].type,
              h = il(e)
                ? e
                : d && 1 === e.children.length && il(e.children[0])
                ? e.children[0]
                : null;
            if (
              (h
                ? ((a = h.codegenNode), d && l && dl(a, l, n))
                : f
                ? (a = Lc(
                    n,
                    o(Ka),
                    l ? Pc([l]) : void 0,
                    e.children,
                    "64",
                    void 0,
                    void 0,
                    !0,
                    void 0,
                    !1
                  ))
                : ((a = p[0].codegenNode),
                  d && l && dl(a, l, n),
                  a.isBlock !== !u &&
                    (a.isBlock
                      ? (s(Xa), s(cl(n.inSSR, a.isComponent)))
                      : s(al(n.inSSR, a.isComponent))),
                  (a.isBlock = !u),
                  a.isBlock
                    ? (o(Xa), o(cl(n.inSSR, a.isComponent)))
                    : o(al(n.inSSR, a.isComponent))),
              i)
            ) {
              const e = Vc(bu(t.parseResult, [Bc("_cached")]));
              (e.body = {
                type: 21,
                body: [
                  Dc(["const _memo = (", i.exp, ")"]),
                  Dc([
                    "if (_cached",
                    ...(c ? [" && _cached.key === ", c] : []),
                    ` && ${n.helperString(Rc)}(_cached, _memo)) return _cached`,
                  ]),
                  Dc(["const _item = ", a]),
                  Bc("_item.memo = _memo"),
                  Bc("return _item"),
                ],
                loc: jc,
              }),
                r.arguments.push(e, Bc("_cache"), Bc(String(n.cached++)));
            } else r.arguments.push(Vc(bu(t.parseResult), a, !0));
          }
        );
      });
    }),
    hu = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    gu = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    mu = /^\(|\)$/g;
  function yu(e, t) {
    const n = e.loc,
      o = e.content,
      s = o.match(hu);
    if (!s) return;
    const [, r, i] = s,
      a = {
        source: vu(n, i.trim(), o.indexOf(i, r.length)),
        value: void 0,
        key: void 0,
        index: void 0,
      };
    let c = r.trim().replace(mu, "").trim();
    const l = r.indexOf(c),
      u = c.match(gu);
    if (u) {
      c = c.replace(gu, "").trim();
      const e = u[1].trim();
      let t;
      if (
        (e && ((t = o.indexOf(e, l + c.length)), (a.key = vu(n, e, t))), u[2])
      ) {
        const s = u[2].trim();
        s &&
          (a.index = vu(
            n,
            s,
            o.indexOf(s, a.key ? t + e.length : l + c.length)
          ));
      }
    }
    return c && (a.value = vu(n, c, l)), a;
  }
  function vu(e, t, n) {
    return Bc(t, !1, Xc(e, n, t.length));
  }
  function bu({ value: e, key: t, index: n }, o = []) {
    return (function (e) {
      let t = e.length;
      for (; t-- && !e[t]; );
      return e.slice(0, t + 1).map((e, t) => e || Bc("_".repeat(t + 1), !1));
    })([e, t, n, ...o]);
  }
  const xu = Bc("undefined", !1),
    wu = (e, t) => {
      if (1 === e.type && (1 === e.tagType || 3 === e.tagType)) {
        const n = el(e, "slot");
        if (n)
          return (
            n.exp,
            t.scopes.vSlot++,
            () => {
              t.scopes.vSlot--;
            }
          );
      }
    },
    _u = (e, t, n) => Vc(e, t, !1, !0, t.length ? t[0].loc : n);
  function Su(e, t, n = _u) {
    t.helper(Ec);
    const { children: o, loc: s } = e,
      r = [],
      i = [];
    let a = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
    const c = el(e, "slot", !0);
    if (c) {
      const { arg: e, exp: t } = c;
      e && !zc(e) && (a = !0), r.push(Fc(e || Bc("default", !0), n(t, o, s)));
    }
    let l = !1,
      u = !1;
    const d = [],
      p = new Set();
    for (let e = 0; e < o.length; e++) {
      const s = o[e];
      let f;
      if (!rl(s) || !(f = el(s, "slot", !0))) {
        3 !== s.type && d.push(s);
        continue;
      }
      if (c) {
        t.onError(Wa(37, f.loc));
        break;
      }
      l = !0;
      const { children: h, loc: g } = s,
        { arg: m = Bc("default", !0), exp: y, loc: v } = f;
      let b;
      zc(m) ? (b = m ? m.content : "default") : (a = !0);
      const x = n(y, h, g);
      let w, _, S;
      if ((w = el(s, "if"))) (a = !0), i.push($c(w.exp, Cu(m, x), xu));
      else if ((_ = el(s, /^else(-if)?$/, !0))) {
        let n,
          s = e;
        for (; s-- && ((n = o[s]), 3 === n.type); );
        if (n && rl(n) && el(n, "if")) {
          o.splice(e, 1), e--;
          let t = i[i.length - 1];
          for (; 19 === t.alternate.type; ) t = t.alternate;
          t.alternate = _.exp ? $c(_.exp, Cu(m, x), xu) : Cu(m, x);
        } else t.onError(Wa(30, _.loc));
      } else if ((S = el(s, "for"))) {
        a = !0;
        const e = S.parseResult || yu(S.exp);
        e
          ? i.push(Ac(t.helper(uc), [e.source, Vc(bu(e), Cu(m, x), !0)]))
          : t.onError(Wa(32, S.loc));
      } else {
        if (b) {
          if (p.has(b)) {
            t.onError(Wa(38, v));
            continue;
          }
          p.add(b), "default" === b && (u = !0);
        }
        r.push(Fc(m, x));
      }
    }
    if (!c) {
      const e = (e, o) => {
        const r = n(e, o, s);
        return t.compatConfig && (r.isNonScopedSlot = !0), Fc("default", r);
      };
      l
        ? d.length &&
          d.some((e) => Eu(e)) &&
          (u ? t.onError(Wa(39, d[0].loc)) : r.push(e(void 0, d)))
        : r.push(e(void 0, o));
    }
    const f = a ? 2 : Tu(e.children) ? 3 : 1;
    let h = Pc(r.concat(Fc("_", Bc(f + "", !1))), s);
    return (
      i.length && (h = Ac(t.helper(pc), [h, Mc(i)])),
      { slots: h, hasDynamicSlots: a }
    );
  }
  function Cu(e, t) {
    return Pc([Fc("name", e), Fc("fn", t)]);
  }
  function Tu(e) {
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      switch (n.type) {
        case 1:
          if (2 === n.tagType || Tu(n.children)) return !0;
          break;
        case 9:
          if (Tu(n.branches)) return !0;
          break;
        case 10:
        case 11:
          if (Tu(n.children)) return !0;
      }
    }
    return !1;
  }
  function Eu(e) {
    return (
      (2 !== e.type && 12 !== e.type) ||
      (2 === e.type ? !!e.content.trim() : Eu(e.content))
    );
  }
  const ku = new WeakMap(),
    Ou = (e, t) =>
      function () {
        if (
          1 !== (e = t.currentNode).type ||
          (0 !== e.tagType && 1 !== e.tagType)
        )
          return;
        const { tag: n, props: o } = e,
          s = 1 === e.tagType;
        let r,
          i,
          a,
          c,
          l,
          u,
          d = s
            ? (function (e, t, n = !1) {
                let { tag: o } = e;
                const s = ju(o),
                  r = tl(e, "is");
                if (r)
                  if (s || gl("COMPILER_IS_ON_ELEMENT", t)) {
                    const e =
                      6 === r.type ? r.value && Bc(r.value.content, !0) : r.exp;
                    if (e) return Ac(t.helper(ic), [e]);
                  } else
                    6 === r.type &&
                      r.value.content.startsWith("vue:") &&
                      (o = r.value.content.slice(4));
                const i = !s && el(e, "is");
                if (i && i.exp) return Ac(t.helper(ic), [i.exp]);
                const a = Hc(o) || t.isBuiltInComponent(o);
                return a
                  ? (n || t.helper(a), a)
                  : (t.helper(rc), t.components.add(o), pl(o, "component"));
              })(e, t)
            : `"${n}"`,
          p = 0,
          f =
            (B(d) && d.callee === ic) ||
            d === Ga ||
            d === qa ||
            (!s && ("svg" === n || "foreignObject" === n));
        if (o.length > 0) {
          const n = Iu(e, t);
          (r = n.props), (p = n.patchFlag), (l = n.dynamicPropNames);
          const o = n.directives;
          (u =
            o && o.length
              ? Mc(
                  o.map((e) =>
                    (function (e, t) {
                      const n = [],
                        o = ku.get(e);
                      o
                        ? n.push(t.helperString(o))
                        : (t.helper(ac),
                          t.directives.add(e.name),
                          n.push(pl(e.name, "directive")));
                      const { loc: s } = e;
                      if (
                        (e.exp && n.push(e.exp),
                        e.arg && (e.exp || n.push("void 0"), n.push(e.arg)),
                        Object.keys(e.modifiers).length)
                      ) {
                        e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
                        const t = Bc("true", !1, s);
                        n.push(
                          Pc(
                            e.modifiers.map((e) => Fc(e, t)),
                            s
                          )
                        );
                      }
                      return Mc(n, e.loc);
                    })(e, t)
                  )
                )
              : void 0),
            n.shouldUseBlock && (f = !0);
        }
        if (e.children.length > 0)
          if (
            (d === Ja && ((f = !0), (p |= 1024)), s && d !== Ga && d !== Ja)
          ) {
            const { slots: n, hasDynamicSlots: o } = Su(e, t);
            (i = n), o && (p |= 1024);
          } else if (1 === e.children.length && d !== Ga) {
            const n = e.children[0],
              o = n.type,
              s = 5 === o || 8 === o;
            s && 0 === Kl(n, t) && (p |= 1),
              (i = s || 2 === o ? n : e.children);
          } else i = e.children;
        0 !== p &&
          ((a = String(p)),
          l &&
            l.length &&
            (c = (function (e) {
              let t = "[";
              for (let n = 0, o = e.length; n < o; n++)
                (t += JSON.stringify(e[n])), n < o - 1 && (t += ", ");
              return t + "]";
            })(l))),
          (e.codegenNode = Lc(t, d, r, i, a, c, u, !!f, !1, s, e.loc));
      };
  function Iu(e, t, n = e.props, o = !1) {
    const { tag: s, loc: r, children: i } = e,
      a = 1 === e.tagType;
    let c = [];
    const l = [],
      u = [],
      d = i.length > 0;
    let p = !1,
      f = 0,
      h = !1,
      g = !1,
      m = !1,
      y = !1,
      v = !1,
      b = !1;
    const x = [],
      w = ({ key: e, value: n }) => {
        if (zc(e)) {
          const o = e.content,
            s = C(o);
          if (
            (a ||
              !s ||
              "onclick" === o.toLowerCase() ||
              "onUpdate:modelValue" === o ||
              U(o) ||
              (y = !0),
            s && U(o) && (b = !0),
            20 === n.type || ((4 === n.type || 8 === n.type) && Kl(n, t) > 0))
          )
            return;
          "ref" === o
            ? (h = !0)
            : "class" === o
            ? (g = !0)
            : "style" === o
            ? (m = !0)
            : "key" === o || x.includes(o) || x.push(o),
            !a ||
              ("class" !== o && "style" !== o) ||
              x.includes(o) ||
              x.push(o);
        } else v = !0;
      };
    for (let i = 0; i < n.length; i++) {
      const f = n[i];
      if (6 === f.type) {
        const { loc: e, name: n, value: o } = f;
        let r = !0;
        if (
          ("ref" === n &&
            ((h = !0),
            t.scopes.vFor > 0 && c.push(Fc(Bc("ref_for", !0), Bc("true")))),
          "is" === n &&
            (ju(s) ||
              (o && o.content.startsWith("vue:")) ||
              gl("COMPILER_IS_ON_ELEMENT", t)))
        )
          continue;
        c.push(
          Fc(
            Bc(n, !0, Xc(e, 0, n.length)),
            Bc(o ? o.content : "", r, o ? o.loc : e)
          )
        );
      } else {
        const { name: n, arg: i, exp: h, loc: g } = f,
          m = "bind" === n,
          y = "on" === n;
        if ("slot" === n) {
          a || t.onError(Wa(40, g));
          continue;
        }
        if ("once" === n || "memo" === n) continue;
        if (
          "is" === n ||
          (m && nl(i, "is") && (ju(s) || gl("COMPILER_IS_ON_ELEMENT", t)))
        )
          continue;
        if (y && o) continue;
        if (
          (((m && nl(i, "key")) || (y && d && nl(i, "vue:before-update"))) &&
            (p = !0),
          m &&
            nl(i, "ref") &&
            t.scopes.vFor > 0 &&
            c.push(Fc(Bc("ref_for", !0), Bc("true"))),
          !i && (m || y))
        ) {
          if (((v = !0), h))
            if ((c.length && (l.push(Pc(Ru(c), r)), (c = [])), m)) {
              if (gl("COMPILER_V_BIND_OBJECT_ORDER", t)) {
                l.unshift(h);
                continue;
              }
              l.push(h);
            } else
              l.push({
                type: 14,
                loc: g,
                callee: t.helper(bc),
                arguments: [h],
              });
          else t.onError(Wa(m ? 34 : 35, g));
          continue;
        }
        const b = t.directiveTransforms[n];
        if (b) {
          const { props: n, needRuntime: s } = b(f, e, t);
          !o && n.forEach(w),
            c.push(...n),
            s && (u.push(f), F(s) && ku.set(f, s));
        } else u.push(f), d && (p = !0);
      }
    }
    let _;
    if (
      (l.length
        ? (c.length && l.push(Pc(Ru(c), r)),
          (_ = l.length > 1 ? Ac(t.helper(hc), l, r) : l[0]))
        : c.length && (_ = Pc(Ru(c), r)),
      v
        ? (f |= 16)
        : (g && !a && (f |= 2),
          m && !a && (f |= 4),
          x.length && (f |= 8),
          y && (f |= 32)),
      p || (0 !== f && 32 !== f) || !(h || b || u.length > 0) || (f |= 512),
      !t.inSSR && _)
    )
      switch (_.type) {
        case 15:
          let e = -1,
            n = -1,
            o = !1;
          for (let t = 0; t < _.properties.length; t++) {
            const s = _.properties[t].key;
            zc(s)
              ? "class" === s.content
                ? (e = t)
                : "style" === s.content && (n = t)
              : s.isHandlerKey || (o = !0);
          }
          const s = _.properties[e],
            r = _.properties[n];
          o
            ? (_ = Ac(t.helper(yc), [_]))
            : (s && !zc(s.value) && (s.value = Ac(t.helper(gc), [s.value])),
              !r ||
                zc(r.value) ||
                (!m && 17 !== r.value.type) ||
                (r.value = Ac(t.helper(mc), [r.value])));
          break;
        case 14:
          break;
        default:
          _ = Ac(t.helper(yc), [Ac(t.helper(vc), [_])]);
      }
    return {
      props: _,
      directives: u,
      patchFlag: f,
      dynamicPropNames: x,
      shouldUseBlock: p,
    };
  }
  function Ru(e) {
    const t = new Map(),
      n = [];
    for (let o = 0; o < e.length; o++) {
      const s = e[o];
      if (8 === s.key.type || !s.key.isStatic) {
        n.push(s);
        continue;
      }
      const r = s.key.content,
        i = t.get(r);
      i
        ? ("style" === r || "class" === r || C(r)) && Nu(i, s)
        : (t.set(r, s), n.push(s));
    }
    return n;
  }
  function Nu(e, t) {
    17 === e.value.type
      ? e.value.elements.push(t.value)
      : (e.value = Mc([e.value, t.value], e.loc));
  }
  function ju(e) {
    return "component" === e || "Component" === e;
  }
  const Lu = /-(\w)/g,
    Mu = ((e) => {
      const t = Object.create(null);
      return (e) =>
        t[e] ||
        (t[e] = ((e) => e.replace(Lu, (e, t) => (t ? t.toUpperCase() : "")))(
          e
        ));
    })(),
    Pu = (e, t) => {
      if (il(e)) {
        const { children: n, loc: o } = e,
          { slotName: s, slotProps: r } = (function (e, t) {
            let n,
              o = '"default"';
            const s = [];
            for (let t = 0; t < e.props.length; t++) {
              const n = e.props[t];
              6 === n.type
                ? n.value &&
                  ("name" === n.name
                    ? (o = JSON.stringify(n.value.content))
                    : ((n.name = Mu(n.name)), s.push(n)))
                : "bind" === n.name && nl(n.arg, "name")
                ? n.exp && (o = n.exp)
                : ("bind" === n.name &&
                    n.arg &&
                    zc(n.arg) &&
                    (n.arg.content = Mu(n.arg.content)),
                  s.push(n));
            }
            if (s.length > 0) {
              const { props: o, directives: r } = Iu(e, t, s);
              (n = o), r.length && t.onError(Wa(36, r[0].loc));
            }
            return { slotName: o, slotProps: n };
          })(e, t),
          i = [
            t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
            s,
            "{}",
            "undefined",
            "true",
          ];
        let a = 2;
        r && ((i[2] = r), (a = 3)),
          n.length && ((i[3] = Vc([], n, !1, !1, o)), (a = 4)),
          t.scopeId && !t.slotted && (a = 5),
          i.splice(a),
          (e.codegenNode = Ac(t.helper(dc), i, o));
      }
    },
    Fu =
      /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,
    Bu = (e, t, n, o) => {
      const { loc: s, modifiers: r, arg: i } = e;
      let a;
      if ((e.exp || r.length || n.onError(Wa(35, s)), 4 === i.type))
        if (i.isStatic) {
          let e = i.content;
          e.startsWith("vue:") && (e = `vnode-${e.slice(4)}`),
            (a = Bc(Y(K(e)), !0, i.loc));
        } else a = Dc([`${n.helperString(_c)}(`, i, ")"]);
      else
        (a = i),
          a.children.unshift(`${n.helperString(_c)}(`),
          a.children.push(")");
      let c = e.exp;
      c && !c.content.trim() && (c = void 0);
      let l = n.cacheHandlers && !c && !n.inVOnce;
      if (c) {
        const e = Yc(c.content),
          t = !(e || Fu.test(c.content)),
          n = c.content.includes(";");
        (t || (l && e)) &&
          (c = Dc([
            `${t ? "$event" : "(...args)"} => ${n ? "{" : "("}`,
            c,
            n ? "}" : ")",
          ]));
      }
      let u = { props: [Fc(a, c || Bc("() => {}", !1, s))] };
      return (
        o && (u = o(u)),
        l && (u.props[0].value = n.cache(u.props[0].value)),
        u.props.forEach((e) => (e.key.isHandlerKey = !0)),
        u
      );
    },
    Du = (e, t, n) => {
      const { exp: o, modifiers: s, loc: r } = e,
        i = e.arg;
      return (
        4 !== i.type
          ? (i.children.unshift("("), i.children.push(') || ""'))
          : i.isStatic || (i.content = `${i.content} || ""`),
        s.includes("camel") &&
          (4 === i.type
            ? i.isStatic
              ? (i.content = K(i.content))
              : (i.content = `${n.helperString(xc)}(${i.content})`)
            : (i.children.unshift(`${n.helperString(xc)}(`),
              i.children.push(")"))),
        n.inSSR ||
          (s.includes("prop") && Au(i, "."), s.includes("attr") && Au(i, "^")),
        !o || (4 === o.type && !o.content.trim())
          ? (n.onError(Wa(34, r)), { props: [Fc(i, Bc("", !0, r))] })
          : { props: [Fc(i, o)] }
      );
    },
    Au = (e, t) => {
      4 === e.type
        ? e.isStatic
          ? (e.content = t + e.content)
          : (e.content = `\`${t}\${${e.content}}\``)
        : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
    },
    Vu = (e, t) => {
      if (0 === e.type || 1 === e.type || 11 === e.type || 10 === e.type)
        return () => {
          const n = e.children;
          let o,
            s = !1;
          for (let e = 0; e < n.length; e++) {
            const t = n[e];
            if (ol(t)) {
              s = !0;
              for (let s = e + 1; s < n.length; s++) {
                const r = n[s];
                if (!ol(r)) {
                  o = void 0;
                  break;
                }
                o || (o = n[e] = { type: 8, loc: t.loc, children: [t] }),
                  o.children.push(" + ", r),
                  n.splice(s, 1),
                  s--;
              }
            }
          }
          if (
            s &&
            (1 !== n.length ||
              (0 !== e.type &&
                (1 !== e.type ||
                  0 !== e.tagType ||
                  e.props.find(
                    (e) => 7 === e.type && !t.directiveTransforms[e.name]
                  ) ||
                  "template" === e.tag)))
          )
            for (let e = 0; e < n.length; e++) {
              const o = n[e];
              if (ol(o) || 8 === o.type) {
                const s = [];
                (2 === o.type && " " === o.content) || s.push(o),
                  t.ssr || 0 !== Kl(o, t) || s.push("1"),
                  (n[e] = {
                    type: 12,
                    content: o,
                    loc: o.loc,
                    codegenNode: Ac(t.helper(oc), s),
                  });
              }
            }
        };
    },
    $u = new WeakSet(),
    zu = (e, t) => {
      if (1 === e.type && el(e, "once", !0)) {
        if ($u.has(e) || t.inVOnce) return;
        return (
          $u.add(e),
          (t.inVOnce = !0),
          t.helper(Sc),
          () => {
            t.inVOnce = !1;
            const e = t.currentNode;
            e.codegenNode && (e.codegenNode = t.cache(e.codegenNode, !0));
          }
        );
      }
    },
    Uu = (e, t, n) => {
      const { exp: o, arg: s } = e;
      if (!o) return n.onError(Wa(41, e.loc)), Hu();
      const r = o.loc.source,
        i = 4 === o.type ? o.content : r;
      if ((n.bindingMetadata[r], !i.trim() || !Yc(i)))
        return n.onError(Wa(42, o.loc)), Hu();
      const a = s || Bc("modelValue", !0),
        c = s
          ? zc(s)
            ? `onUpdate:${s.content}`
            : Dc(['"onUpdate:" + ', s])
          : "onUpdate:modelValue";
      let l;
      l = Dc([
        (n.isTS ? "($event: any)" : "$event") + " => ((",
        o,
        ") = $event)",
      ]);
      const u = [Fc(a, e.exp), Fc(c, l)];
      if (e.modifiers.length && 1 === t.tagType) {
        const t = e.modifiers
            .map((e) => (Kc(e) ? e : JSON.stringify(e)) + ": true")
            .join(", "),
          n = s
            ? zc(s)
              ? `${s.content}Modifiers`
              : Dc([s, ' + "Modifiers"'])
            : "modelModifiers";
        u.push(Fc(n, Bc(`{ ${t} }`, !1, e.loc, 2)));
      }
      return Hu(u);
    };
  function Hu(e = []) {
    return { props: e };
  }
  const Wu = /[\w).+\-_$\]]/,
    Ku = (e, t) => {
      gl("COMPILER_FILTER", t) &&
        (5 === e.type && Gu(e.content, t),
        1 === e.type &&
          e.props.forEach((e) => {
            7 === e.type && "for" !== e.name && e.exp && Gu(e.exp, t);
          }));
    };
  function Gu(e, t) {
    if (4 === e.type) qu(e, t);
    else
      for (let n = 0; n < e.children.length; n++) {
        const o = e.children[n];
        "object" == typeof o &&
          (4 === o.type
            ? qu(o, t)
            : 8 === o.type
            ? Gu(e, t)
            : 5 === o.type && Gu(o.content, t));
      }
  }
  function qu(e, t) {
    const n = e.content;
    let o,
      s,
      r,
      i,
      a = !1,
      c = !1,
      l = !1,
      u = !1,
      d = 0,
      p = 0,
      f = 0,
      h = 0,
      g = [];
    for (r = 0; r < n.length; r++)
      if (((s = o), (o = n.charCodeAt(r)), a)) 39 === o && 92 !== s && (a = !1);
      else if (c) 34 === o && 92 !== s && (c = !1);
      else if (l) 96 === o && 92 !== s && (l = !1);
      else if (u) 47 === o && 92 !== s && (u = !1);
      else if (
        124 !== o ||
        124 === n.charCodeAt(r + 1) ||
        124 === n.charCodeAt(r - 1) ||
        d ||
        p ||
        f
      ) {
        switch (o) {
          case 34:
            c = !0;
            break;
          case 39:
            a = !0;
            break;
          case 96:
            l = !0;
            break;
          case 40:
            f++;
            break;
          case 41:
            f--;
            break;
          case 91:
            p++;
            break;
          case 93:
            p--;
            break;
          case 123:
            d++;
            break;
          case 125:
            d--;
        }
        if (47 === o) {
          let e,
            t = r - 1;
          for (; t >= 0 && ((e = n.charAt(t)), " " === e); t--);
          (e && Wu.test(e)) || (u = !0);
        }
      } else void 0 === i ? ((h = r + 1), (i = n.slice(0, r).trim())) : m();
    function m() {
      g.push(n.slice(h, r).trim()), (h = r + 1);
    }
    if (
      (void 0 === i ? (i = n.slice(0, r).trim()) : 0 !== h && m(), g.length)
    ) {
      for (r = 0; r < g.length; r++) i = Ju(i, g[r], t);
      e.content = i;
    }
  }
  function Ju(e, t, n) {
    n.helper(cc);
    const o = t.indexOf("(");
    if (o < 0) return n.filters.add(t), `${pl(t, "filter")}(${e})`;
    {
      const s = t.slice(0, o),
        r = t.slice(o + 1);
      return (
        n.filters.add(s), `${pl(s, "filter")}(${e}${")" !== r ? "," + r : r}`
      );
    }
  }
  const Yu = new WeakSet(),
    Xu = (e, t) => {
      if (1 === e.type) {
        const n = el(e, "memo");
        if (!n || Yu.has(e)) return;
        return (
          Yu.add(e),
          () => {
            const o = e.codegenNode || t.currentNode.codegenNode;
            o &&
              13 === o.type &&
              (1 !== e.tagType && fl(o, t),
              (e.codegenNode = Ac(t.helper(Ic), [
                n.exp,
                Vc(void 0, o),
                "_cache",
                String(t.cached++),
              ])));
          }
        );
      }
    };
  function Zu(e, t = {}) {
    const n = t.onError || Ua,
      o = "module" === t.mode;
    !0 === t.prefixIdentifiers ? n(Wa(46)) : o && n(Wa(47)),
      t.cacheHandlers && n(Wa(48)),
      t.scopeId && !o && n(Wa(49));
    const s = P(e)
        ? (function (e, t = {}) {
            const n = (function (e, t) {
                const n = E({}, bl);
                let o;
                for (o in t) n[o] = void 0 === t[o] ? bl[o] : t[o];
                return {
                  options: n,
                  column: 1,
                  line: 1,
                  offset: 0,
                  originalSource: e,
                  source: e,
                  inPre: !1,
                  inVPre: !1,
                  onWarn: n.onWarn,
                };
              })(e, t),
              o = Ll(n);
            return (function (e, t = jc) {
              return {
                type: 0,
                children: e,
                helpers: [],
                components: [],
                directives: [],
                hoists: [],
                imports: [],
                cached: 0,
                temps: 0,
                codegenNode: void 0,
                loc: t,
              };
            })(xl(n, 0, []), Ml(n, o));
          })(e, t)
        : e,
      [r, i] = [
        [zu, lu, Xu, fu, Ku, Pu, Ou, wu, Vu],
        { on: Bu, bind: Du, model: Uu },
      ];
    return (
      Zl(
        s,
        E({}, t, {
          prefixIdentifiers: !1,
          nodeTransforms: [...r, ...(t.nodeTransforms || [])],
          directiveTransforms: E({}, i, t.directiveTransforms || {}),
        })
      ),
      (function (e, t = {}) {
        const n = (function (
          e,
          {
            mode: t = "function",
            prefixIdentifiers: n = "module" === t,
            sourceMap: o = !1,
            filename: s = "template.vue.html",
            scopeId: r = null,
            optimizeImports: i = !1,
            runtimeGlobalName: a = "Vue",
            runtimeModuleName: c = "vue",
            ssrRuntimeModuleName: l = "vue/server-renderer",
            ssr: u = !1,
            isTS: d = !1,
            inSSR: p = !1,
          }
        ) {
          const f = {
            mode: t,
            prefixIdentifiers: n,
            sourceMap: o,
            filename: s,
            scopeId: r,
            optimizeImports: i,
            runtimeGlobalName: a,
            runtimeModuleName: c,
            ssrRuntimeModuleName: l,
            ssr: u,
            isTS: d,
            inSSR: p,
            source: e.loc.source,
            code: "",
            column: 1,
            line: 1,
            offset: 0,
            indentLevel: 0,
            pure: !1,
            map: void 0,
            helper: (e) => `_${Nc[e]}`,
            push(e, t) {
              f.code += e;
            },
            indent() {
              h(++f.indentLevel);
            },
            deindent(e = !1) {
              e ? --f.indentLevel : h(--f.indentLevel);
            },
            newline() {
              h(f.indentLevel);
            },
          };
          function h(e) {
            f.push("\n" + "  ".repeat(e));
          }
          return f;
        })(e, t);
        t.onContextCreated && t.onContextCreated(n);
        const {
            mode: o,
            push: s,
            prefixIdentifiers: r,
            indent: i,
            deindent: a,
            newline: c,
            scopeId: l,
            ssr: u,
          } = n,
          d = e.helpers.length > 0,
          p = !r && "module" !== o;
        if (
          ((function (e, t) {
            const {
                ssr: n,
                prefixIdentifiers: o,
                push: s,
                newline: r,
                runtimeModuleName: i,
                runtimeGlobalName: a,
                ssrRuntimeModuleName: c,
              } = t,
              l = a,
              u = (e) => `${Nc[e]}: _${Nc[e]}`;
            e.helpers.length > 0 &&
              (s(`const _Vue = ${l}\n`), e.hoists.length) &&
              s(
                `const { ${[ec, tc, nc, oc, sc]
                  .filter((t) => e.helpers.includes(t))
                  .map(u)
                  .join(", ")} } = _Vue\n`
              ),
              (function (e, t) {
                if (!e.length) return;
                t.pure = !0;
                const {
                  push: n,
                  newline: o,
                  helper: s,
                  scopeId: r,
                  mode: i,
                } = t;
                o();
                for (let s = 0; s < e.length; s++) {
                  const r = e[s];
                  r && (n(`const _hoisted_${s + 1} = `), ru(r, t), o());
                }
                t.pure = !1;
              })(e.hoists, t),
              r(),
              s("return ");
          })(e, n),
          s(
            `function ${u ? "ssrRender" : "render"}(${(u
              ? ["_ctx", "_push", "_parent", "_attrs"]
              : ["_ctx", "_cache"]
            ).join(", ")}) {`
          ),
          i(),
          p &&
            (s("with (_ctx) {"),
            i(),
            d &&
              (s(
                `const { ${e.helpers
                  .map((e) => `${Nc[e]}: _${Nc[e]}`)
                  .join(", ")} } = _Vue`
              ),
              s("\n"),
              c())),
          e.components.length &&
            (nu(e.components, "component", n),
            (e.directives.length || e.temps > 0) && c()),
          e.directives.length &&
            (nu(e.directives, "directive", n), e.temps > 0 && c()),
          e.filters &&
            e.filters.length &&
            (c(), nu(e.filters, "filter", n), c()),
          e.temps > 0)
        ) {
          s("let ");
          for (let t = 0; t < e.temps; t++) s(`${t > 0 ? ", " : ""}_temp${t}`);
        }
        return (
          (e.components.length || e.directives.length || e.temps) &&
            (s("\n"), c()),
          u || s("return "),
          e.codegenNode ? ru(e.codegenNode, n) : s("null"),
          p && (a(), s("}")),
          a(),
          s("}"),
          {
            ast: e,
            code: n.code,
            preamble: "",
            map: n.map ? n.map.toJSON() : void 0,
          }
        );
      })(s, E({}, t, { prefixIdentifiers: !1 }))
    );
  }
  const Qu = Symbol(""),
    ed = Symbol(""),
    td = Symbol(""),
    nd = Symbol(""),
    od = Symbol(""),
    sd = Symbol(""),
    rd = Symbol(""),
    id = Symbol(""),
    ad = Symbol(""),
    cd = Symbol("");
  var ld;
  let ud;
  (ld = {
    [Qu]: "vModelRadio",
    [ed]: "vModelCheckbox",
    [td]: "vModelText",
    [nd]: "vModelSelect",
    [od]: "vModelDynamic",
    [sd]: "withModifiers",
    [rd]: "withKeys",
    [id]: "vShow",
    [ad]: "Transition",
    [cd]: "TransitionGroup",
  }),
    Object.getOwnPropertySymbols(ld).forEach((e) => {
      Nc[e] = ld[e];
    });
  const dd = n("style,iframe,script,noscript", !0),
    pd = {
      isVoidTag: h,
      isNativeTag: (e) => p(e) || f(e),
      isPreTag: (e) => "pre" === e,
      decodeEntities: function (e, t = !1) {
        return (
          ud || (ud = document.createElement("div")),
          t
            ? ((ud.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`),
              ud.children[0].getAttribute("foo"))
            : ((ud.innerHTML = e), ud.textContent)
        );
      },
      isBuiltInComponent: (e) =>
        Uc(e, "Transition") ? ad : Uc(e, "TransitionGroup") ? cd : void 0,
      getNamespace(e, t) {
        let n = t ? t.ns : 0;
        if (t && 2 === n)
          if ("annotation-xml" === t.tag) {
            if ("svg" === e) return 1;
            t.props.some(
              (e) =>
                6 === e.type &&
                "encoding" === e.name &&
                null != e.value &&
                ("text/html" === e.value.content ||
                  "application/xhtml+xml" === e.value.content)
            ) && (n = 0);
          } else
            /^m(?:[ions]|text)$/.test(t.tag) &&
              "mglyph" !== e &&
              "malignmark" !== e &&
              (n = 0);
        else
          t &&
            1 === n &&
            (("foreignObject" !== t.tag &&
              "desc" !== t.tag &&
              "title" !== t.tag) ||
              (n = 0));
        if (0 === n) {
          if ("svg" === e) return 1;
          if ("math" === e) return 2;
        }
        return n;
      },
      getTextMode({ tag: e, ns: t }) {
        if (0 === t) {
          if ("textarea" === e || "title" === e) return 1;
          if (dd(e)) return 2;
        }
        return 0;
      },
    },
    fd = (e, t) => {
      const n = l(e);
      return Bc(JSON.stringify(n), !1, t, 3);
    };
  function hd(e, t) {
    return Wa(e, t);
  }
  const gd = n("passive,once,capture"),
    md = n("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),
    yd = n("left,right"),
    vd = n("onkeyup,onkeydown,onkeypress", !0),
    bd = (e, t) =>
      zc(e) && "onclick" === e.content.toLowerCase()
        ? Bc(t, !0)
        : 4 !== e.type
        ? Dc(["(", e, `) === "onClick" ? "${t}" : (`, e, ")"])
        : e,
    xd = (e, t) => {
      1 !== e.type ||
        0 !== e.tagType ||
        ("script" !== e.tag && "style" !== e.tag) ||
        (t.onError(hd(60, e.loc)), t.removeNode());
    },
    wd = [
      (e) => {
        1 === e.type &&
          e.props.forEach((t, n) => {
            6 === t.type &&
              "style" === t.name &&
              t.value &&
              (e.props[n] = {
                type: 7,
                name: "bind",
                arg: Bc("style", !0, t.loc),
                exp: fd(t.value.content, t.loc),
                modifiers: [],
                loc: t.loc,
              });
          });
      },
    ],
    _d = {
      cloak: () => ({ props: [] }),
      html: (e, t, n) => {
        const { exp: o, loc: s } = e;
        return (
          o || n.onError(hd(50, s)),
          t.children.length && (n.onError(hd(51, s)), (t.children.length = 0)),
          { props: [Fc(Bc("innerHTML", !0, s), o || Bc("", !0))] }
        );
      },
      text: (e, t, n) => {
        const { exp: o, loc: s } = e;
        return (
          o || n.onError(hd(52, s)),
          t.children.length && (n.onError(hd(53, s)), (t.children.length = 0)),
          {
            props: [
              Fc(
                Bc("textContent", !0),
                o ? Ac(n.helperString(fc), [o], s) : Bc("", !0)
              ),
            ],
          }
        );
      },
      model: (e, t, n) => {
        const o = Uu(e, t, n);
        if (!o.props.length || 1 === t.tagType) return o;
        e.arg && n.onError(hd(55, e.arg.loc));
        const { tag: s } = t,
          r = n.isCustomElement(s);
        if ("input" === s || "textarea" === s || "select" === s || r) {
          let i = td,
            a = !1;
          if ("input" === s || r) {
            const o = tl(t, "type");
            if (o) {
              if (7 === o.type) i = od;
              else if (o.value)
                switch (o.value.content) {
                  case "radio":
                    i = Qu;
                    break;
                  case "checkbox":
                    i = ed;
                    break;
                  case "file":
                    (a = !0), n.onError(hd(56, e.loc));
                }
            } else
              (function (e) {
                return e.props.some(
                  (e) =>
                    !(
                      7 !== e.type ||
                      "bind" !== e.name ||
                      (e.arg && 4 === e.arg.type && e.arg.isStatic)
                    )
                );
              })(t) && (i = od);
          } else "select" === s && (i = nd);
          a || (o.needRuntime = n.helper(i));
        } else n.onError(hd(54, e.loc));
        return (
          (o.props = o.props.filter(
            (e) => !(4 === e.key.type && "modelValue" === e.key.content)
          )),
          o
        );
      },
      on: (e, t, n) =>
        Bu(e, 0, n, (t) => {
          const { modifiers: o } = e;
          if (!o.length) return t;
          let { key: s, value: r } = t.props[0];
          const {
            keyModifiers: i,
            nonKeyModifiers: a,
            eventOptionModifiers: c,
          } = ((e, t, n, o) => {
            const s = [],
              r = [],
              i = [];
            for (let o = 0; o < t.length; o++) {
              const a = t[o];
              ("native" === a && ml("COMPILER_V_ON_NATIVE", n)) || gd(a)
                ? i.push(a)
                : yd(a)
                ? zc(e)
                  ? vd(e.content)
                    ? s.push(a)
                    : r.push(a)
                  : (s.push(a), r.push(a))
                : md(a)
                ? r.push(a)
                : s.push(a);
            }
            return {
              keyModifiers: s,
              nonKeyModifiers: r,
              eventOptionModifiers: i,
            };
          })(s, o, n, e.loc);
          if (
            (a.includes("right") && (s = bd(s, "onContextmenu")),
            a.includes("middle") && (s = bd(s, "onMouseup")),
            a.length && (r = Ac(n.helper(sd), [r, JSON.stringify(a)])),
            !i.length ||
              (zc(s) && !vd(s.content)) ||
              (r = Ac(n.helper(rd), [r, JSON.stringify(i)])),
            c.length)
          ) {
            const e = c.map(J).join("");
            s = zc(s) ? Bc(`${s.content}${e}`, !0) : Dc(["(", s, `) + "${e}"`]);
          }
          return { props: [Fc(s, r)] };
        }),
      show: (e, t, n) => {
        const { exp: o, loc: s } = e;
        return (
          o || n.onError(hd(58, s)), { props: [], needRuntime: n.helper(id) }
        );
      },
    },
    Sd = Object.create(null);
  rr(function (e, n) {
    if (!P(e)) {
      if (!e.nodeType) return w;
      e = e.innerHTML;
    }
    const o = e,
      s = Sd[o];
    if (s) return s;
    if ("#" === e[0]) {
      const t = document.querySelector(e);
      e = t ? t.innerHTML : "";
    }
    const { code: r } = (function (e, t = {}) {
        return Zu(
          e,
          E({}, pd, t, {
            nodeTransforms: [xd, ...wd, ...(t.nodeTransforms || [])],
            directiveTransforms: E({}, _d, t.directiveTransforms || {}),
            transformHoist: null,
          })
        );
      })(e, E({ hoistStatic: !0, onError: void 0, onWarn: w }, n)),
      i = new Function("Vue", r)(t);
    return (i._rc = !0), (Sd[o] = i);
  });
  var Cd,
    Td,
    Ed =
      ((Cd = function (e) {
        !(function () {
          function t(e, t, n) {
            return e.call.apply(e.bind, arguments);
          }
          function n(e, t, n) {
            if (!e) throw Error();
            if (2 < arguments.length) {
              var o = Array.prototype.slice.call(arguments, 2);
              return function () {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, o), e.apply(t, n);
              };
            }
            return function () {
              return e.apply(t, arguments);
            };
          }
          function o(e, s, r) {
            return (o =
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf("native code")
                ? t
                : n).apply(null, arguments);
          }
          var s =
            Date.now ||
            function () {
              return +new Date();
            };
          function r(e, t) {
            (this.a = e), (this.o = t || e), (this.c = this.o.document);
          }
          var i = !!window.FontFace;
          function a(e, t, n, o) {
            if (((t = e.c.createElement(t)), n))
              for (var s in n)
                n.hasOwnProperty(s) &&
                  ("style" == s
                    ? (t.style.cssText = n[s])
                    : t.setAttribute(s, n[s]));
            return o && t.appendChild(e.c.createTextNode(o)), t;
          }
          function c(e, t, n) {
            (e = e.c.getElementsByTagName(t)[0]) ||
              (e = document.documentElement),
              e.insertBefore(n, e.lastChild);
          }
          function l(e) {
            e.parentNode && e.parentNode.removeChild(e);
          }
          function u(e, t, n) {
            (t = t || []), (n = n || []);
            for (
              var o = e.className.split(/\s+/), s = 0;
              s < t.length;
              s += 1
            ) {
              for (var r = !1, i = 0; i < o.length; i += 1)
                if (t[s] === o[i]) {
                  r = !0;
                  break;
                }
              r || o.push(t[s]);
            }
            for (t = [], s = 0; s < o.length; s += 1) {
              for (r = !1, i = 0; i < n.length; i += 1)
                if (o[s] === n[i]) {
                  r = !0;
                  break;
                }
              r || t.push(o[s]);
            }
            e.className = t
              .join(" ")
              .replace(/\s+/g, " ")
              .replace(/^\s+|\s+$/, "");
          }
          function d(e, t) {
            for (
              var n = e.className.split(/\s+/), o = 0, s = n.length;
              o < s;
              o++
            )
              if (n[o] == t) return !0;
            return !1;
          }
          function p(e, t, n) {
            function o() {
              u && s && r && (u(l), (u = null));
            }
            t = a(e, "link", { rel: "stylesheet", href: t, media: "all" });
            var s = !1,
              r = !0,
              l = null,
              u = n || null;
            i
              ? ((t.onload = function () {
                  (s = !0), o();
                }),
                (t.onerror = function () {
                  (s = !0), (l = Error("Stylesheet failed to load")), o();
                }))
              : setTimeout(function () {
                  (s = !0), o();
                }, 0),
              c(e, "head", t);
          }
          function f(e, t, n, o) {
            var s = e.c.getElementsByTagName("head")[0];
            if (s) {
              var r = a(e, "script", { src: t }),
                i = !1;
              return (
                (r.onload = r.onreadystatechange =
                  function () {
                    i ||
                      (this.readyState &&
                        "loaded" != this.readyState &&
                        "complete" != this.readyState) ||
                      ((i = !0),
                      n && n(null),
                      (r.onload = r.onreadystatechange = null),
                      "HEAD" == r.parentNode.tagName && s.removeChild(r));
                  }),
                s.appendChild(r),
                setTimeout(function () {
                  i || ((i = !0), n && n(Error("Script load timeout")));
                }, o || 5e3),
                r
              );
            }
            return null;
          }
          function h() {
            (this.a = 0), (this.c = null);
          }
          function g(e) {
            return (
              e.a++,
              function () {
                e.a--, y(e);
              }
            );
          }
          function m(e, t) {
            (e.c = t), y(e);
          }
          function y(e) {
            0 == e.a && e.c && (e.c(), (e.c = null));
          }
          function v(e) {
            this.a = e || "-";
          }
          function b(e, t) {
            (this.c = e), (this.f = 4), (this.a = "n");
            var n = (t || "n4").match(/^([nio])([1-9])$/i);
            n && ((this.a = n[1]), (this.f = parseInt(n[2], 10)));
          }
          function x(e) {
            var t = [];
            e = e.split(/,\s*/);
            for (var n = 0; n < e.length; n++) {
              var o = e[n].replace(/['"]/g, "");
              -1 != o.indexOf(" ") || /^\d/.test(o)
                ? t.push("'" + o + "'")
                : t.push(o);
            }
            return t.join(",");
          }
          function w(e) {
            return e.a + e.f;
          }
          function _(e) {
            var t = "normal";
            return (
              "o" === e.a ? (t = "oblique") : "i" === e.a && (t = "italic"), t
            );
          }
          function S(e) {
            var t = 4,
              n = "n",
              o = null;
            return (
              e &&
                ((o = e.match(/(normal|oblique|italic)/i)) &&
                  o[1] &&
                  (n = o[1].substr(0, 1).toLowerCase()),
                (o = e.match(/([1-9]00|normal|bold)/i)) &&
                  o[1] &&
                  (/bold/i.test(o[1])
                    ? (t = 7)
                    : /[1-9]00/.test(o[1]) &&
                      (t = parseInt(o[1].substr(0, 1), 10)))),
              n + t
            );
          }
          function C(e, t) {
            (this.c = e),
              (this.f = e.o.document.documentElement),
              (this.h = t),
              (this.a = new v("-")),
              (this.j = !1 !== t.events),
              (this.g = !1 !== t.classes);
          }
          function T(e) {
            if (e.g) {
              var t = d(e.f, e.a.c("wf", "active")),
                n = [],
                o = [e.a.c("wf", "loading")];
              t || n.push(e.a.c("wf", "inactive")), u(e.f, n, o);
            }
            E(e, "inactive");
          }
          function E(e, t, n) {
            e.j && e.h[t] && (n ? e.h[t](n.c, w(n)) : e.h[t]());
          }
          function k() {
            this.c = {};
          }
          function O(e, t) {
            (this.c = e),
              (this.f = t),
              (this.a = a(this.c, "span", { "aria-hidden": "true" }, this.f));
          }
          function I(e) {
            c(e.c, "body", e.a);
          }
          function R(e) {
            return (
              "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
              x(e.c) +
              ";font-style:" +
              _(e) +
              ";font-weight:" +
              e.f +
              "00;"
            );
          }
          function N(e, t, n, o, s, r) {
            (this.g = e),
              (this.j = t),
              (this.a = o),
              (this.c = n),
              (this.f = s || 3e3),
              (this.h = r || void 0);
          }
          function j(e, t, n, o, s, r, i) {
            (this.v = e),
              (this.B = t),
              (this.c = n),
              (this.a = o),
              (this.s = i || "BESbswy"),
              (this.f = {}),
              (this.w = s || 3e3),
              (this.u = r || null),
              (this.m = this.j = this.h = this.g = null),
              (this.g = new O(this.c, this.s)),
              (this.h = new O(this.c, this.s)),
              (this.j = new O(this.c, this.s)),
              (this.m = new O(this.c, this.s)),
              (e = R((e = new b(this.a.c + ",serif", w(this.a))))),
              (this.g.a.style.cssText = e),
              (e = R((e = new b(this.a.c + ",sans-serif", w(this.a))))),
              (this.h.a.style.cssText = e),
              (e = R((e = new b("serif", w(this.a))))),
              (this.j.a.style.cssText = e),
              (e = R((e = new b("sans-serif", w(this.a))))),
              (this.m.a.style.cssText = e),
              I(this.g),
              I(this.h),
              I(this.j),
              I(this.m);
          }
          (v.prototype.c = function (e) {
            for (var t = [], n = 0; n < arguments.length; n++)
              t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
            return t.join(this.a);
          }),
            (N.prototype.start = function () {
              var e = this.c.o.document,
                t = this,
                n = s(),
                o = new Promise(function (o, r) {
                  !(function i() {
                    s() - n >= t.f
                      ? r()
                      : e.fonts
                          .load(
                            (function (e) {
                              return _(e) + " " + e.f + "00 300px " + x(e.c);
                            })(t.a),
                            t.h
                          )
                          .then(
                            function (e) {
                              1 <= e.length ? o() : setTimeout(i, 25);
                            },
                            function () {
                              r();
                            }
                          );
                  })();
                }),
                r = null,
                i = new Promise(function (e, n) {
                  r = setTimeout(n, t.f);
                });
              Promise.race([i, o]).then(
                function () {
                  r && (clearTimeout(r), (r = null)), t.g(t.a);
                },
                function () {
                  t.j(t.a);
                }
              );
            });
          var L = { D: "serif", C: "sans-serif" },
            M = null;
          function P() {
            if (null === M) {
              var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                window.navigator.userAgent
              );
              M =
                !!e &&
                (536 > parseInt(e[1], 10) ||
                  (536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10)));
            }
            return M;
          }
          function F(e, t, n) {
            for (var o in L)
              if (L.hasOwnProperty(o) && t === e.f[L[o]] && n === e.f[L[o]])
                return !0;
            return !1;
          }
          function B(e) {
            var t,
              n = e.g.a.offsetWidth,
              r = e.h.a.offsetWidth;
            (t = n === e.f.serif && r === e.f["sans-serif"]) ||
              (t = P() && F(e, n, r)),
              t
                ? s() - e.A >= e.w
                  ? P() &&
                    F(e, n, r) &&
                    (null === e.u || e.u.hasOwnProperty(e.a.c))
                    ? D(e, e.v)
                    : D(e, e.B)
                  : (function (e) {
                      setTimeout(
                        o(function () {
                          B(this);
                        }, e),
                        50
                      );
                    })(e)
                : D(e, e.v);
          }
          function D(e, t) {
            setTimeout(
              o(function () {
                l(this.g.a), l(this.h.a), l(this.j.a), l(this.m.a), t(this.a);
              }, e),
              0
            );
          }
          function A(e, t, n) {
            (this.c = e),
              (this.a = t),
              (this.f = 0),
              (this.m = this.j = !1),
              (this.s = n);
          }
          j.prototype.start = function () {
            (this.f.serif = this.j.a.offsetWidth),
              (this.f["sans-serif"] = this.m.a.offsetWidth),
              (this.A = s()),
              B(this);
          };
          var V = null;
          function $(e) {
            0 == --e.f &&
              e.j &&
              (e.m
                ? ((e = e.a).g &&
                    u(
                      e.f,
                      [e.a.c("wf", "active")],
                      [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]
                    ),
                  E(e, "active"))
                : T(e.a));
          }
          function z(e) {
            (this.j = e),
              (this.a = new k()),
              (this.h = 0),
              (this.f = this.g = !0);
          }
          function U(e, t, n, s, r) {
            var i = 0 == --e.h;
            (e.f || e.g) &&
              setTimeout(function () {
                var e = r || null,
                  a = s || {};
                if (0 === n.length && i) T(t.a);
                else {
                  (t.f += n.length), i && (t.j = i);
                  var c,
                    l = [];
                  for (c = 0; c < n.length; c++) {
                    var d = n[c],
                      p = a[d.c],
                      f = t.a,
                      h = d;
                    if (
                      (f.g &&
                        u(f.f, [f.a.c("wf", h.c, w(h).toString(), "loading")]),
                      E(f, "fontloading", h),
                      (f = null),
                      null === V)
                    )
                      if (window.FontFace) {
                        h = /Gecko.*Firefox\/(\d+)/.exec(
                          window.navigator.userAgent
                        );
                        var g =
                          /OS X.*Version\/10\..*Safari/.exec(
                            window.navigator.userAgent
                          ) && /Apple/.exec(window.navigator.vendor);
                        V = h ? 42 < parseInt(h[1], 10) : !g;
                      } else V = !1;
                    (f = V
                      ? new N(o(t.g, t), o(t.h, t), t.c, d, t.s, p)
                      : new j(o(t.g, t), o(t.h, t), t.c, d, t.s, e, p)),
                      l.push(f);
                  }
                  for (c = 0; c < l.length; c++) l[c].start();
                }
              }, 0);
          }
          function H(e, t) {
            (this.c = e), (this.a = t);
          }
          function W(e, t) {
            (this.c = e), (this.a = t);
          }
          function K(e, t) {
            (this.c = e || G), (this.a = []), (this.f = []), (this.g = t || "");
          }
          (A.prototype.g = function (e) {
            var t = this.a;
            t.g &&
              u(
                t.f,
                [t.a.c("wf", e.c, w(e).toString(), "active")],
                [
                  t.a.c("wf", e.c, w(e).toString(), "loading"),
                  t.a.c("wf", e.c, w(e).toString(), "inactive"),
                ]
              ),
              E(t, "fontactive", e),
              (this.m = !0),
              $(this);
          }),
            (A.prototype.h = function (e) {
              var t = this.a;
              if (t.g) {
                var n = d(t.f, t.a.c("wf", e.c, w(e).toString(), "active")),
                  o = [],
                  s = [t.a.c("wf", e.c, w(e).toString(), "loading")];
                n || o.push(t.a.c("wf", e.c, w(e).toString(), "inactive")),
                  u(t.f, o, s);
              }
              E(t, "fontinactive", e), $(this);
            }),
            (z.prototype.load = function (e) {
              (this.c = new r(this.j, e.context || this.j)),
                (this.g = !1 !== e.events),
                (this.f = !1 !== e.classes),
                (function (e, t, n) {
                  var o = [],
                    s = n.timeout;
                  !(function (e) {
                    e.g && u(e.f, [e.a.c("wf", "loading")]), E(e, "loading");
                  })(t),
                    (o = (function (e, t, n) {
                      var o,
                        s = [];
                      for (o in t)
                        if (t.hasOwnProperty(o)) {
                          var r = e.c[o];
                          r && s.push(r(t[o], n));
                        }
                      return s;
                    })(e.a, n, e.c));
                  var r = new A(e.c, t, s);
                  for (e.h = o.length, t = 0, n = o.length; t < n; t++)
                    o[t].load(function (t, n, o) {
                      U(e, r, t, n, o);
                    });
                })(this, new C(this.c, e), e);
            }),
            (H.prototype.load = function (e) {
              function t() {
                if (r["__mti_fntLst" + o]) {
                  var n,
                    s = r["__mti_fntLst" + o](),
                    i = [];
                  if (s)
                    for (var a = 0; a < s.length; a++) {
                      var c = s[a].fontfamily;
                      null != s[a].fontStyle && null != s[a].fontWeight
                        ? ((n = s[a].fontStyle + s[a].fontWeight),
                          i.push(new b(c, n)))
                        : i.push(new b(c));
                    }
                  e(i);
                } else
                  setTimeout(function () {
                    t();
                  }, 50);
              }
              var n = this,
                o = n.a.projectId,
                s = n.a.version;
              if (o) {
                var r = n.c.o;
                f(
                  this.c,
                  (n.a.api || "https://fast.fonts.net/jsapi") +
                    "/" +
                    o +
                    ".js" +
                    (s ? "?v=" + s : ""),
                  function (s) {
                    s
                      ? e([])
                      : ((r["__MonotypeConfiguration__" + o] = function () {
                          return n.a;
                        }),
                        t());
                  }
                ).id = "__MonotypeAPIScript__" + o;
              } else e([]);
            }),
            (W.prototype.load = function (e) {
              var t,
                n,
                o = this.a.urls || [],
                s = this.a.families || [],
                r = this.a.testStrings || {},
                i = new h();
              for (t = 0, n = o.length; t < n; t++) p(this.c, o[t], g(i));
              var a = [];
              for (t = 0, n = s.length; t < n; t++)
                if ((o = s[t].split(":"))[1])
                  for (var c = o[1].split(","), l = 0; l < c.length; l += 1)
                    a.push(new b(o[0], c[l]));
                else a.push(new b(o[0]));
              m(i, function () {
                e(a, r);
              });
            });
          var G = "https://fonts.googleapis.com/css";
          function q(e) {
            (this.f = e), (this.a = []), (this.c = {});
          }
          var J = {
              latin: "BESbswy",
              "latin-ext": "çöüğş",
              cyrillic: "йяЖ",
              greek: "αβΣ",
              khmer: "កខគ",
              Hanuman: "កខគ",
            },
            Y = {
              thin: "1",
              extralight: "2",
              "extra-light": "2",
              ultralight: "2",
              "ultra-light": "2",
              light: "3",
              regular: "4",
              book: "4",
              medium: "5",
              "semi-bold": "6",
              semibold: "6",
              "demi-bold": "6",
              demibold: "6",
              bold: "7",
              "extra-bold": "8",
              extrabold: "8",
              "ultra-bold": "8",
              ultrabold: "8",
              black: "9",
              heavy: "9",
              l: "3",
              r: "4",
              b: "7",
            },
            X = { i: "i", italic: "i", n: "n", normal: "n" },
            Z =
              /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
          function Q(e, t) {
            (this.c = e), (this.a = t);
          }
          var ee = { Arimo: !0, Cousine: !0, Tinos: !0 };
          function te(e, t) {
            (this.c = e), (this.a = t);
          }
          function ne(e, t) {
            (this.c = e), (this.f = t), (this.a = []);
          }
          (Q.prototype.load = function (e) {
            var t = new h(),
              n = this.c,
              o = new K(this.a.api, this.a.text),
              s = this.a.families;
            !(function (e, t) {
              for (var n = t.length, o = 0; o < n; o++) {
                var s = t[o].split(":");
                3 == s.length && e.f.push(s.pop());
                var r = "";
                2 == s.length && "" != s[1] && (r = ":"), e.a.push(s.join(r));
              }
            })(o, s);
            var r = new q(s);
            !(function (e) {
              for (var t = e.f.length, n = 0; n < t; n++) {
                var o = e.f[n].split(":"),
                  s = o[0].replace(/\+/g, " "),
                  r = ["n4"];
                if (2 <= o.length) {
                  var i;
                  if (((i = []), (a = o[1])))
                    for (
                      var a, c = (a = a.split(",")).length, l = 0;
                      l < c;
                      l++
                    ) {
                      var u;
                      if ((u = a[l]).match(/^[\w-]+$/))
                        if (null == (d = Z.exec(u.toLowerCase()))) u = "";
                        else {
                          if (
                            ((u = null == (u = d[2]) || "" == u ? "n" : X[u]),
                            null == (d = d[1]) || "" == d)
                          )
                            d = "4";
                          else
                            var d = Y[d] || (isNaN(d) ? "4" : d.substr(0, 1));
                          u = [u, d].join("");
                        }
                      else u = "";
                      u && i.push(u);
                    }
                  0 < i.length && (r = i),
                    3 == o.length &&
                      ((i = []),
                      0 < (o = (o = o[2]) ? o.split(",") : i).length &&
                        (o = J[o[0]]) &&
                        (e.c[s] = o));
                }
                for (
                  e.c[s] || ((o = J[s]) && (e.c[s] = o)), o = 0;
                  o < r.length;
                  o += 1
                )
                  e.a.push(new b(s, r[o]));
              }
            })(r),
              p(
                n,
                (function (e) {
                  if (0 == e.a.length) throw Error("No fonts to load!");
                  if (-1 != e.c.indexOf("kit=")) return e.c;
                  for (var t = e.a.length, n = [], o = 0; o < t; o++)
                    n.push(e.a[o].replace(/ /g, "+"));
                  return (
                    (t = e.c + "?family=" + n.join("%7C")),
                    0 < e.f.length && (t += "&subset=" + e.f.join(",")),
                    0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)),
                    t
                  );
                })(o),
                g(t)
              ),
              m(t, function () {
                e(r.a, r.c, ee);
              });
          }),
            (te.prototype.load = function (e) {
              var t = this.a.id,
                n = this.c.o;
              t
                ? f(
                    this.c,
                    (this.a.api || "https://use.typekit.net") + "/" + t + ".js",
                    function (t) {
                      if (t) e([]);
                      else if (
                        n.Typekit &&
                        n.Typekit.config &&
                        n.Typekit.config.fn
                      ) {
                        t = n.Typekit.config.fn;
                        for (var o = [], s = 0; s < t.length; s += 2)
                          for (
                            var r = t[s], i = t[s + 1], a = 0;
                            a < i.length;
                            a++
                          )
                            o.push(new b(r, i[a]));
                        try {
                          n.Typekit.load({
                            events: !1,
                            classes: !1,
                            async: !0,
                          });
                        } catch (e) {}
                        e(o);
                      }
                    },
                    2e3
                  )
                : e([]);
            }),
            (ne.prototype.load = function (e) {
              var t = this.f.id,
                n = this.c.o,
                o = this;
              t
                ? (n.__webfontfontdeckmodule__ ||
                    (n.__webfontfontdeckmodule__ = {}),
                  (n.__webfontfontdeckmodule__[t] = function (t, n) {
                    for (var s = 0, r = n.fonts.length; s < r; ++s) {
                      var i = n.fonts[s];
                      o.a.push(
                        new b(
                          i.name,
                          S(
                            "font-weight:" + i.weight + ";font-style:" + i.style
                          )
                        )
                      );
                    }
                    e(o.a);
                  }),
                  f(
                    this.c,
                    (this.f.api || "https://f.fontdeck.com/s/css/js/") +
                      (function (e) {
                        return e.o.location.hostname || e.a.location.hostname;
                      })(this.c) +
                      "/" +
                      t +
                      ".js",
                    function (t) {
                      t && e([]);
                    }
                  ))
                : e([]);
            });
          var oe = new z(window);
          (oe.a.c.custom = function (e, t) {
            return new W(t, e);
          }),
            (oe.a.c.fontdeck = function (e, t) {
              return new ne(t, e);
            }),
            (oe.a.c.monotype = function (e, t) {
              return new H(t, e);
            }),
            (oe.a.c.typekit = function (e, t) {
              return new te(t, e);
            }),
            (oe.a.c.google = function (e, t) {
              return new Q(t, e);
            });
          var se = { load: o(oe.load, oe) };
          e.exports
            ? (e.exports = se)
            : ((window.WebFont = se),
              window.WebFontConfig && oe.load(window.WebFontConfig));
        })();
      }),
      Cd(
        (Td = {
          path: undefined,
          exports: {},
          require: function (e, t) {
            return (function () {
              throw new Error(
                "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
              );
            })(null == t && Td.path);
          },
        }),
        Td.exports
      ),
      Td.exports),
    kd = Ed,
    Od = {
      name: "boxIllustration",
      props: {
        illustration: {},
        editorUsage: {},
        indexMedia: {},
        pathMediaDir: {},
        style: {},
        stylesObj: {},
      },
      methods: {},
      computed: {
        imgPathPart: function () {
          let e = this.indexMedia.find(
            (e) => e.Id == this.illustration.ID
          ).name;
          return this.pathMediaDir + "/" + e;
        },
        responsiveImages: function () {
          let e = { srcset: "", sizes: "" };
          return (
            this.style["img-sizes"].forEach((t, n) => {
              (e.srcset =
                e.srcset +
                this.imgPathPart +
                "-" +
                t.width +
                "x" +
                t.height +
                ".jpg " +
                t.width +
                "w"),
                n + 1 != this.style["img-sizes"].length &&
                  (e.srcset = e.srcset + ","),
                n + 1 != this.style["img-sizes"].length
                  ? (e.sizes =
                      e.sizes +
                      "( max-width:" +
                      t.width +
                      "px ) " +
                      t.width +
                      "px, ")
                  : (e.sizes = e.sizes + t.width + "px");
            }),
            e
          );
        },
      },
    };
  const Id = { class: "sg1-inner-box" },
    Rd = ["src"],
    Nd = ["src", "srcset", "sizes"];
  function jd(e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
      var o = document.head || document.getElementsByTagName("head")[0],
        s = document.createElement("style");
      (s.type = "text/css"),
        "top" === n && o.firstChild
          ? o.insertBefore(s, o.firstChild)
          : o.appendChild(s),
        s.styleSheet
          ? (s.styleSheet.cssText = e)
          : s.appendChild(document.createTextNode(e));
    }
  }
  function Ld(e, t) {
    let n = t;
    return e.replace("#7F7F7F", n);
  }
  jd(
    "\n.sg1-game-gridnot:not(.sg1-no-theme) .sg1-box-illustration {\r\n  grid-column-start: 2;\r\n  grid-column-end: 3;\r\n  grid-row-start: 2;\r\n  grid-row-end: 3;\n}\n.sg1-inner-box {\r\n  width: 100%;\r\n  height: 100%;\n}\n.sg1-inner-box img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  display: block;\n}\r\n"
  ),
    (Od.render = function (e, t, n, o, s, r) {
      return (
        ds(),
        ys(
          "div",
          {
            class: "sg1-box-illustration",
            style: i(e.stylesObj.boxIllustration),
          },
          [
            Ts("div", Id, [
              e.editorUsage
                ? (ds(),
                  ys(
                    "img",
                    {
                      key: 0,
                      class: "sg1-box-img",
                      src: e.illustration.srcFull[0],
                    },
                    null,
                    8,
                    Rd
                  ))
                : (ds(),
                  ys(
                    "img",
                    {
                      key: 1,
                      src:
                        e.imgPathPart +
                        "-" +
                        e.style["img-sizes"][e.style["img-sizes"].length - 1]
                          .width +
                        "x" +
                        e.style["img-sizes"][e.style["img-sizes"].length - 1]
                          .height +
                        ".jpg",
                      srcset: e.responsiveImages.srcset,
                      sizes: e.responsiveImages.sizes,
                    },
                    null,
                    8,
                    Nd
                  )),
            ]),
          ],
          4
        )
      );
    });
  var Md = {
    name: "boxNarration",
    components: {},
    props: { stylesObj: {} },
    data: function () {
      return { svgData: !1, animation: !1, svgShadow: !1 };
    },
    watch: {
      stylesObj: {
        handler() {
          this.initSvg();
        },
        deep: !0,
      },
    },
    mounted() {
      this.initSvg();
    },
    methods: {
      initSvg() {
        let e;
        switch (this.stylesObj.iconSingleArrow.type) {
          case "sketch":
            (e =
              '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<g>\n\t<path style="fill:#7F7F7F;" d="M53.4,71.1c-1.1,1.3-1.9,2.3-2.6,3.3c-2.4,0-4.9,0.5-7.1-0.1c-2.8-0.8-4.6-3.2-4.4-6.3\n\t\tc0.1-2.6-1-4-3.1-5.2c-4.8-2.7-9.6-5.2-14.1-8.4c-4.4-3.1-8.3-6.8-12.4-10.2c-0.4-0.3-0.7-0.9-1.1-1c-3.8-0.4-5.4-3.6-7.5-6.1\n\t\tc-0.7-0.8-1.3-2.4-0.9-3c0.9-1.3,2.4-3,3.6-2.9c3.1,0.1,4.6-0.9,5.2-3.9c0.1-0.6,1-1.1,1.6-1.8c2.9,2.5,5.4,5.1,8.3,7\n\t\tc3.9,2.6,8.3,4.5,12.2,7c1.9,1.2,3.2,3.2,5.1,4.4c5.7,3.5,11.6,6.7,17.4,10c0.8,0.4,1.5,0.9,2.9,1.9c2.7-2.7,5.4-5.6,8.2-8.5\n\t\tc2.6-2.7,5.2-5.5,7.9-8.2c2.2-2.2,3.8-5,7.4-6c4.9-1.2,9.6-3.5,14.5-4.9c1.2-0.3,3.1,0.8,4.4,1.6c0.7,0.5,0.9,1.8,1.3,2.8\n\t\tc-0.9,0.2-2.2,0-2.8,0.6c-2.3,2-6.2,4.1-6.3,6.3c-0.1,6.7-4.5,9.9-8.8,13.2c-5,3.9-10.6,7.1-15.9,10.8C65,64.5,64,66,63.3,66.8\n\t\tc-2.9,2.4-5.5,4.5-8.2,6.7C54.5,72.7,54.1,72.1,53.4,71.1z"/>\n</g>\n</svg>\n'),
              (this.animation = "shining");
            break;
          case "minimal2":
            (e =
              '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<polygon style="fill:#7F7F7F;" points="50,74.6 100,25.4 0,25.4 "/>\n</svg>'),
              (this.animation = "scroll-down"),
              (this.svgShadow = !0);
            break;
          default:
            (e =
              '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<polygon style="fill:#7F7F7F;" points="100,27.4 100,35.5 50,72.6 0,35.5 0,27.4 7.2,32.7 50,64.5 92.8,32.7 "/>\n</svg>'),
              (this.animation = "scroll-down"),
              (this.svgShadow = !0);
        }
        this.svgData = Ld(e, this.stylesObj.iconSingleArrow.color);
      },
    },
  };
  const Pd = ["innerHTML"],
    Fd = ["innerHTML"];
  jd(
    "\n.sg1-next-tab-wrapper[data-v-07a96db8] {\r\n\t\twidth: auto;\r\n\t\tdisplay: inline-flex;\r\n\t\tcursor: pointer;\r\n\t\tposition: relative;\r\n\t\ttransition: opacity 0.35s;\r\n\t\ttransition-timing-function: ease-out;\n}\n.sg1-next-tab-wrapper[data-v-07a96db8]:hover {\r\n\t\topacity: 0.75;\n}\n.sg1-next-tab-wrapper:hover .sg1-svg-shadow[data-v-07a96db8] {\r\n\t\topacity: 0;\r\n\t\tanimation: none;\n}\n.sg1-svg-shadow[data-v-07a96db8] {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransition: opacity 0.35s;\r\n\t\ttransition-timing-function: ease-out;\n}\r\n\r\n\t/* scroll-down */\n.sg1-animation-scroll-down .sg1-svg-shadow[data-v-07a96db8] {\r\n\t\tanimation: sg1-scroll-down-07a96db8 2s infinite;\r\n\t\tanimation-timing-function: ease-out;\n}\n.sg1-animation-scroll-down[data-v-07a96db8] {\r\n\t\ttransition: transform 0.35s;\r\n\t\ttransition-timing-function: ease-out;\r\n\t\ttransform: translateY(0) scale(0.95);\n}\n.sg1-animation-scroll-down[data-v-07a96db8]:hover {\r\n\t\ttransform: translateY(10%) scale(1);\n}\n@keyframes sg1-scroll-down-07a96db8 {\n0% {\r\n\t\t\ttransform: translateY(0);\r\n\t\t\topacity: 0.5;\n}\n100% {\r\n\t\t\ttransform: translateY(35%);\r\n\t\t\topacity: 0;\n}\n}\r\n\r\n\t/* shining */\n.sg1-animation-shining[data-v-07a96db8] {\r\n\t\ttransition: transform 0.35s;\r\n\t\ttransition-timing-function: ease-out;\r\n\t\ttransform: translateY(0) scale(0.95);\r\n\t\tanimation: sg1-shining-07a96db8 1s infinite;\r\n\t\tanimation-timing-function: ease-out;\n}\n.sg1-animation-shining[data-v-07a96db8]:hover {\r\n\t\ttransform: translateY(10%) scale(1);\r\n\t\tanimation: none;\n}\n@keyframes sg1-shining-07a96db8 {\n0% {\r\n\t\t\topacity: 1;\r\n\t\t\ttransform: translateY(0) scale(1);\n}\n50% {\r\n\t\t\topacity: 0.5;\r\n\t\t\ttransform: translateY(0) scale(0.95);\n}\n100% {\r\n\t\t\topacity: 1;\r\n\t\t\ttransform: translateY(0) scale(1);\n}\n}\r\n"
  ),
    (Md.render = function (e, t, n, o, s, r) {
      return e.svgData
        ? (ds(),
          ys(
            "div",
            {
              key: 0,
              class: u([
                "sg1-" +
                  e.stylesObj.iconSingleArrow.type +
                  " sg1-animation-" +
                  e.animation,
                "sg1-next-tab-wrapper",
              ]),
            },
            [
              Ts(
                "div",
                {
                  class: "sg1-svg-wraper",
                  style: i({ width: e.stylesObj.iconSingleArrow.size }),
                  innerHTML: e.svgData,
                },
                null,
                12,
                Pd
              ),
              Ts(
                "div",
                {
                  class: "sg1-svg-shadow",
                  style: i({ width: e.stylesObj.iconSingleArrow.size }),
                  innerHTML: e.svgData,
                },
                null,
                12,
                Fd
              ),
            ],
            2
          ))
        : Ns("", !0);
    }),
    (Md.__scopeId = "data-v-07a96db8");
  var Bd =
      '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<g>\n\t<path style="fill:#7F7F7F;" d="M70.8,19.8c2.3-2.6,5.6-4.6,5.1-8.7c2.2-0.7,4.4-1.3,6.6-2c0.4-0.5,0.8-1.1,1.2-1.6\n\t\tc1.2,2.8,2.3,5.7,3.5,8.5c0.5-0.6,1-1.1,1.5-1.7c0.5,2.1,0.9,4.2,1.4,6.4c0.3-0.1,0.5-0.1,0.8-0.2c-0.7,2-1.2,4.2-2.1,6.1\n\t\tc-0.6,1.2-1.9,2-2.8,3.1c-1.9,2.1-3.8,4.2-5.5,6.4c-2.4,3.2-4.5,6.6-7.1,10.4c4.2,3.7,8,7.4,12.3,10.5c1.9,1.4,4.8,1.4,7.3,1.9\n\t\tc3.3,0.8,5.5,2.6,6.6,5.8c-0.3,0.1-0.6,0.2-0.9,0.2c0.3,1.7,0.7,3.4,1,5.1c0.2,1,0.3,2.1,0.4,3.1c-1.7,0.1-3.8,0.9-4.9,0.2\n\t\tc-4.5-3-8.9-6.3-13-9.9c-2.6-2.3-4.5-5.3-6.8-7.8c-1.3-1.4-2.9-2.5-5-4.3c1,3,1.7,5.2,2.5,7.4c0.2-0.1,0.3-0.2,0.5-0.4\n\t\tc4.1,6.7,8.2,13.5,12.3,20.2c-1.5,1.3-2.2,2-3.1,2.7c0.2,0.5,0.5,0.9,0.4,1.4c-0.2,1.4,0,3.4-0.8,4.1c-0.8,0.7-2.9,0.4-4.1-0.2\n\t\tc-2.4-1.1-4.5-2.8-6.7-4.2c-0.3,0.4-0.6,0.7-0.9,1.1c2.4,2.1,4.8,4.1,7.5,6.4c-3.5,3-2.9,6-1.2,9c-3.1,2.4-5-0.2-7-1.4\n\t\tc-2.4-1.4-4.7-3-6.9-4.7c-1.4-1.1-2.5-2.7-3.9-4c-3.4-3.3-6.9-6.5-10.4-9.6c-0.2-0.2-0.8-0.1-1.2-0.1C46.7,85.1,44,89.4,39,92.1\n\t\tc-2.6,2.1-4.9,4.2-7.6,5.7c-0.7,0.4-2.8-0.7-3.6-1.6c-0.8-1-1.1-2.8-0.8-4c0.4-1.6,1.6-2.9,2.6-4.5c-1.7-1.8-3.4-3.6-5.1-5.5\n\t\tc0.6-1,1.1-1.9,1.7-2.7c1.7-2.4,1.8-4.3-1.1-5.9c-1-0.6-1.4-2.1-2.2-3.1c-0.5-0.7-0.8-1.5-1.4-2c-3-2.4-4.6-5.3-2.6-8.3\n\t\tc2.1-3,1.6-5.3-1.3-8c-4.3-4-7.9-8.8-11.8-13.2c-1.2-1.3-2.6-2.5-4-3.6C0.1,34-0.7,32,0.8,30.3C2,29,4,28.2,5.8,27.8\n\t\tc1.1-0.2,2.4,0.6,3.5,1c0,1.5,0,2.8,0,4.4c1.3-0.5,2-0.9,2.8-1.2c5.1,5,9.2,11,16.9,12.5c-0.2-0.5-0.2-1.3-0.5-1.7\n\t\tc-3.7-4.8-7.3-9.6-11.1-14.3C14.6,25,11.5,21.8,9,18.2C8.3,17.3,8.5,15,9.3,14c1-1.4,3-2.2,4.9-3.5c0.8,1.4,1.5,2.4,2.1,3.5\n\t\tc1.4,2.5,4.3,3.7,7.1,2.6c2.8-1.1,4.7,0.4,6.6,2.2c2.5,2.4,5.1,4.8,7.8,7c0.7,0.6,1.9,0.5,2.9,0.7c0-1.1,0.6-2.5,0.1-3.3\n\t\tc-1.4-2.3-3.2-4.4-5-6.5c-2.4-2.7-4.9-5.3-7.3-7.9c-0.5-0.5-0.8-1.2-1-1.8c-1.4-3-0.1-5.1,2.2-7C34,0.9,46,12.6,47.4,17.9\n\t\tc0.8-1.2,1.3-2.1,1.9-2.8c3.1-3.7,6-7.6,9.4-11.1c0.9-0.9,2.9-0.9,4.4-0.9c0.3,0,0.7,1.8,0.9,2.8c0.5,1.9,0.3,4.8,5,2.4\n\t\tc-1.6,3.5-2.7,5.8-3.9,8.3c1.7,0.9,3.6,1.8,5.4,2.7c-0.4,0.4-0.7,0.8-1.1,1.2c0.2,0.1,0.4,0.3,0.5,0.4\n\t\tC70.2,20.6,70.5,20.2,70.8,19.8z M41.9,70.8c-4.1,1.2-5.6,3.7-4.5,6.3C39,75,40.4,72.9,41.9,70.8z M27.7,29c-0.3,0.3-0.6,0.7-1,1\n\t\tc0.5,0.6,1,1.3,1.5,1.9c0.4-0.4,0.8-0.8,1.2-1.2C28.8,30.1,28.3,29.6,27.7,29z M66.7,35.5c0.3,0.2,0.5,0.3,0.8,0.5\n\t\tc0.2-0.5,0.4-1,0.6-1.4c-0.2-0.1-0.4-0.2-0.6-0.3C67.3,34.6,67,35.1,66.7,35.5z M65.3,58.2c-0.1,0.2-0.2,0.4-0.4,0.7\n\t\tc0.4,0.4,0.9,0.7,1.3,1.1c0.2-0.4,0.4-0.8,0.6-1.2C66.4,58.5,65.9,58.3,65.3,58.2z M69.8,30.4c-0.3,0.5-0.6,0.8-0.7,1.1\n\t\tc0,0.1,0.5,0.6,0.6,0.5c0.3-0.2,0.6-0.4,0.7-0.7C70.4,31.1,70.1,30.8,69.8,30.4z"/>\n</g>\n</svg>\n',
    Dd = {
      name: "boxNarration",
      components: {},
      props: { stylesObj: {}, index: {}, text: {} },
      data: function () {
        return { svgData: !1, svgDataActive: !1, indexListText: !1 };
      },
      watch: {
        stylesObj: {
          handler() {
            this.init();
          },
          deep: !0,
        },
      },
      mounted() {
        this.init();
      },
      methods: {
        init() {
          if (this.stylesObj && this.stylesObj.iconMultipleArrow.type) {
            let e = this.stylesObj.iconMultipleArrow.type;
            if ("letter" == e || "number" == e)
              if (
                ((this.svgData = !1), (this.svgDataActive = !1), "letter" == e)
              ) {
                let e = [
                  "a",
                  "b",
                  "c",
                  "d",
                  "e",
                  "f",
                  "g",
                  "h",
                  "i",
                  "j",
                  "k",
                  "l",
                  "m",
                  "n",
                  "o",
                  "p",
                  "q",
                  "r",
                  "s",
                  "t",
                  "u",
                  "v",
                  "w",
                  "x",
                  "y",
                  "z",
                ];
                this.indexListText = e[this.index];
              } else this.indexListText = this.index + 1 + ".";
            else (this.indexListText = !1), this.initSvg();
          }
        },
        initSvg() {
          let e, t;
          switch (
            ((this.svgDataActive = !1), this.stylesObj.iconMultipleArrow.type)
          ) {
            case "sketch":
              (t = [Bd, Bd, Bd, Bd, Bd]),
                this.initSvgActive(
                  '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<g>\n\t<path style="fill:#7F7F7F;" d="M87.2,12.2c0.8-0.4,1.6-0.8,1.8-0.9c1.4,2.2,2.8,4.2,4,6.3c1.8,3.2,4.4,6.4,5.1,9.9\n\t\tc1.9,8.9,2.9,17.9,0.7,27c-1.2,5-2.1,10-3.1,15c-1.1,5.7-5.4,9-10,12c-3.4,2.2-7.1,3.9-10.4,6.2c-1.5,1-2.2,3.2-3.7,4.3\n\t\tc-5.5,3.9-12,5.7-18.6,7.5c-0.7,0.2-1.6,0-2.4-0.2c-3.4-0.5-6.9-0.6-10-1.7c-2.7-1-5.1-3-7.3-4.9c-6.2-5.3-10.7-11.8-15.8-17.9\n\t\tc-4.9-5.8-5.2-12.3-8-18.4c-0.5-1.2-1.9-2-2.2-3.2C5.5,46-0.7,40.6,0.1,32.4c0.5-5.6,3.5-9.1,7.5-12.4c3-2.5,6.2-4.9,9.7-6.6\n\t\tc5-2.4,9.3-6.3,14.5-7.9c9.2-2.9,18.7-5.8,28.8-3.8c4.4,0.9,8.9,1.3,13.4,1.7C78.4,3.9,84.9,8,87.2,12.2z M80.9,42.8\n\t\tc-0.7,2-0.9,3.1-1.5,4c-1.2,1.9-2.4,3.8-3.9,5.4c-1.6,1.7-3.3,3.5-5.3,4.7c-3.5,2-7.1,4.6-10.9,4.8c-4.6,0.3-9.5-1.2-12.5-5.5\n\t\tc-0.8-1.1-1.8-2-2.7-3c-3.5,3.8-4.1,6.7-0.8,9.9c3,2.9,6.9,5,10.4,7.4c1.3,0.9,2.9,1.4,4,2.5c1.7,1.6,9.1,2.6,10.7,0.9\n\t\tc4.8-4.7,10.2-9,12.6-15.4C83,53.7,84.1,48.9,80.9,42.8z M35.2,40.7c2.5-1.6,5-3.2,7.5-4.8c3-1.8,5.9-4.6,9.2-5.2\n\t\tc6.3-1.2,12.9-1.1,19.3-1.7c1.1-0.1,3.1-1.4,3-1.7c-0.7-2.3-1.4-4.7-2.8-6.7c-0.5-0.7-2.9-0.7-4.2-0.3C60.9,22,54.7,23.8,48.7,26\n\t\tc-4.1,1.4-8,3.2-11.8,5.2C33.2,33.2,32.7,36.5,35.2,40.7z M18.7,24.2c-7.6,0.7-12.6,15.3-7.4,22.3c0.5-1.1,0.9-1.9,1.3-2.7\n\t\tc1.2-2.5,1.9-5.5,3.7-7.5C19.6,32.5,18.5,28.4,18.7,24.2z M91.2,49.6c0.1-0.5,0.4-1.2,0.4-1.9c0.1-8.3-2.7-16-6.2-23.4\n\t\tc-1-2.2-1.7-6.5-6.3-5C83.2,29.4,87.2,39.4,91.2,49.6z M37,81.7c3.2,2.2,4.9,4.1,7,4.6c4.4,1.3,9.1,2,13.7,2.6\n\t\tc0.7,0.1,1.8-1.4,2.4-2.4c0.2-0.3-0.9-1.8-1.4-1.8c-6.3,0.6-11.8-1.4-17.2-4.2C40.7,80.1,39.1,81.1,37,81.7z M65,46.8\n\t\tc0,0,0.3,0.3,0.6,0.3c2.7-0.3,6.8-5.7,6-8.3c-0.2-0.7-1.7-1.9-2-1.7c-1.3,0.7-3,1.5-3.5,2.7C65.3,41.9,65.3,44.3,65,46.8z\n\t\t M86.9,62.4c0.6,0.1,1.2,0.3,1.7,0.4c0.5-1.8,1-3.6,1.5-5.3c-0.6-0.1-1.1-0.3-1.7-0.4C87.9,58.9,87.4,60.7,86.9,62.4z M57.5,14.4\n\t\tc-0.2-0.2-0.4-0.5-0.4-0.5c-0.3,0.1-0.5,0.3-0.7,0.4c0.1,0.2,0.3,0.5,0.3,0.4C57,14.7,57.3,14.5,57.5,14.4z M80.9,73.5\n\t\tc0.5-0.5,1-0.8,1-1.1c0-0.3-0.4-0.6-0.7-0.9c-0.4,0.3-0.9,0.5-1,0.8C80.2,72.6,80.6,73,80.9,73.5z M83.6,68.9\n\t\tc0.2,0.1,0.5,0.2,0.7,0.3c0.3-0.5,0.5-1,0.8-1.4c-0.2-0.1-0.5-0.2-0.7-0.3C84.1,68,83.8,68.5,83.6,68.9z M53.8,79.6\n\t\tc0.2-0.3,0.5-0.6,0.4-0.8c0-0.2-0.4-0.4-0.6-0.6c-0.2,0.3-0.5,0.6-0.7,0.8C53.2,79.3,53.5,79.4,53.8,79.6z"/>\n</g>\n</svg>\n'
                );
              break;
            case "hexagon":
              (t = [
                '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<g>\n\t<path style="fill:#7F7F7F;" d="M75,6.7H25L0,50l25,43.3h50L100,50L75,6.7z M67.8,80.8H32.2L14.4,50l17.8-30.8h35.6L85.6,50\n\t\tL67.8,80.8z"/>\n</g>\n</svg>\n',
              ]),
                this.initSvgActive(
                  '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<polygon style="fill:#7F7F7F;" points="75,6.7 25,6.7 0,50 25,93.3 75,93.3 100,50 "/>\n</svg>\n'
                );
              break;
            case "minimal1":
              (t = [
                '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill:#7F7F7F;}\n</style>\n<polygon class="st0" points="85.2,50 45.3,89.1 14.8,89.1 14.8,10.9 45.3,10.9 "/>\n</svg>\n',
              ]),
                this.initSvgActive(!1);
          }
          (e = t[Math.floor(Math.random() * t.length)]),
            (this.svgData = Ld(e, this.stylesObj.iconMultipleArrow.color));
        },
        initSvgActive(e) {
          this.svgDataActive =
            !!e && Ld(e, this.stylesObj.iconMultipleArrow.color);
        },
      },
    };
  const Ad = { key: 0, style: { dispaly: "contents" } },
    Vd = ["innerHTML"],
    $d = ["innerHTML"],
    zd = ["innerHTML"],
    Ud = ["innerHTML"],
    Hd = { key: 1, class: "sg1-chose-item" },
    Wd = ((e) => (dn("data-v-68d5b6a0"), (e = e()), pn(), e))(() =>
      Ts("div", { class: "list-item" }, null, -1)
    ),
    Kd = ["innerHTML"];
  function Gd(e) {
    var t;
    if ("object" == typeof e)
      if (null === e) t = null;
      else
        switch (toString.call(e)) {
          case "[object Array]":
            t = e.map(Gd);
            break;
          case "[object Date]":
            t = new Date(e);
            break;
          case "[object RegExp]":
            t = new RegExp(e);
            break;
          default:
            t = Object.keys(e).reduce(function (t, n) {
              return (t[n] = Gd(e[n])), t;
            }, {});
        }
    else t = e;
    return t;
  }
  function qd(e) {
    let t = JSON.stringify(e).replace(/(\\r\\)+/g, "<br>\\");
    return (t = t.replace(/(\\r)+/g, "<br>")), JSON.parse(t);
  }
  function Jd(e) {
    if (1 == e.length) return e;
    {
      let t = [],
        n = [];
      return (
        e.forEach((e) => {
          n.push(e.x);
        }),
        n.sort(function (e, t) {
          return e - t;
        }),
        n.forEach((n) => {
          e.forEach((e) => {
            n == e.x && t.push(e);
          });
        }),
        t
      );
    }
  }
  jd(
    "\n.sg1-chose-item[data-v-68d5b6a0] {\r\n  display: inline-flex;\r\n  margin-bottom: 1em;\r\n  max-width: 100%;\r\n  width: auto;\r\n  cursor: pointer;\n}\n.sg1-icon-wrapper[data-v-68d5b6a0] {\r\n  margin-right: 0.5em;\r\n  position: relative;\n}\n.sg1-svg-hover-wraper[data-v-68d5b6a0] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\n}\n.sg1-chose-item[data-v-68d5b6a0] {\r\n  font-size: inherit;\r\n  font-family: inherit;\n}\n.sg1-chose-item[data-v-68d5b6a0],\r\n.sg1-svg-wraper[data-v-68d5b6a0],\r\n.sg1-svg-hover-wraper[data-v-68d5b6a0] {\r\n  transition: opacity 0.35s;\r\n  transition-timing-function: ease-out;\n}\n.sg1-chose-item[data-v-68d5b6a0]:hover {\r\n  opacity: 0.75;\n}\n.sg1-chose-item:hover .sg1-svg-hover-wraper[data-v-68d5b6a0] {\r\n  opacity: 1;\n}\n.sg1-chose-item.use-active-item:hover .sg1-svg-wraper[data-v-68d5b6a0] {\r\n  opacity: 0;\n}\n.sg1-type-number[data-v-68d5b6a0],\r\n.sg1-type-letter[data-v-68d5b6a0] {\r\n  margin-right: 0.5em;\n}\r\n"
  ),
    (Dd.render = function (e, t, n, o, s, r) {
      return e.stylesObj
        ? (ds(),
          ys("div", Ad, [
            e.stylesObj.iconMultipleArrow.type
              ? (ds(),
                ys(
                  "div",
                  {
                    key: 0,
                    class: u([
                      { "use-active-item": e.svgDataActive },
                      "sg1-chose-item",
                    ]),
                    style: i({
                      ...e.stylesObj.commonFontFamily,
                      ...e.stylesObj.fontWeightListSelected,
                      ...e.stylesObj.fontColor,
                      ...e.stylesObj.fontSize1,
                    }),
                  },
                  [
                    e.svgData
                      ? (ds(),
                        ys(
                          "div",
                          {
                            key: 0,
                            class: u([
                              "type-" + e.stylesObj.iconMultipleArrow.type,
                              "sg1-icon-wrapper",
                            ]),
                            style: i({
                              ...e.stylesObj.commonFontFamily,
                              ...e.stylesObj.fontWeightListSelected,
                              ...e.stylesObj.fontColor,
                              ...e.stylesObj.fontSize1,
                            }),
                          },
                          [
                            Ts(
                              "div",
                              {
                                class: "sg1-svg-wraper",
                                style: i({
                                  minWidth: e.stylesObj.iconMultipleArrow.size,
                                }),
                                innerHTML: e.svgData,
                              },
                              null,
                              12,
                              Vd
                            ),
                            e.svgDataActive
                              ? (ds(),
                                ys(
                                  "div",
                                  {
                                    key: 0,
                                    class: "sg1-svg-hover-wraper",
                                    style: i({
                                      minWidth:
                                        e.stylesObj.iconMultipleArrow.size,
                                    }),
                                    innerHTML: e.svgDataActive,
                                  },
                                  null,
                                  12,
                                  $d
                                ))
                              : Ns("", !0),
                          ],
                          6
                        ))
                      : (ds(),
                        ys(
                          "div",
                          {
                            key: 1,
                            class: u(
                              "sg1-type-" + e.stylesObj.iconMultipleArrow.type
                            ),
                            style: i({
                              ...e.stylesObj.commonFontFamily,
                              ...e.stylesObj.fontWeightListSelected,
                              ...e.stylesObj.fontColor,
                              ...e.stylesObj.fontSize1,
                            }),
                          },
                          y(e.indexListText),
                          7
                        )),
                    Ts("span", { innerHTML: e.text }, null, 8, zd),
                  ],
                  6
                ))
              : (ds(),
                ys(
                  "div",
                  {
                    key: 1,
                    class: "sg1-chose-item",
                    style: i({
                      ...e.stylesObj.commonFontFamily,
                      ...e.stylesObj.fontWeightListSelected,
                      ...e.stylesObj.fontColor,
                      ...e.stylesObj.fontSize1,
                    }),
                  },
                  [Ts("span", { innerHTML: e.text }, null, 8, Ud)],
                  4
                )),
          ]))
        : (ds(),
          ys("div", Hd, [Wd, Ts("span", { innerHTML: e.text }, null, 8, Kd)]));
    }),
    (Dd.__scopeId = "data-v-68d5b6a0");
  var Yd = {
    name: "boxNarration",
    components: { NextTab: Md, ChooseTab: Dd },
    props: { currentTabs: {}, nextTabsChose: {}, lang: {}, stylesObj: {} },
    emits: ["emitReedBeams2"],
    computed: {
      currentTabsReordered: function () {
        return Jd(this.currentTabs);
      },
      nextTabsChoseReordered: function () {
        return Jd(this.nextTabsChose);
      },
    },
    methods: {
      emitReedBeams3(e) {
        this.$emit("emitReedBeams2", e);
      },
      fixText: (e) => qd(e),
    },
  };
  const Xd = { class: "sg1-box-narration" },
    Zd = ["innerHTML"],
    Qd = { key: 0 };
  jd(
    "\n.sg1-tab-results[data-v-3b0d3f8e] {\r\n  flex-grow: 1;\r\n  overflow: auto;\n}\n.sg1-single-beem-foward-box[data-v-3b0d3f8e] {\r\n  display: flex;\r\n  justify-content: center;\n}\n.sg1-box-narration[data-v-3b0d3f8e] {\r\n  position: relative;\r\n  z-index: 10;\r\n  max-height: inherit;\r\n  min-height: inherit;\r\n  overflow-y: auto;\r\n  flex-grow: 1;\n}\r\n"
  ),
    (Yd.render = function (e, t, n, o, s, r) {
      const a = Qo("ChooseTab"),
        c = Qo("NextTab");
      return (
        ds(),
        ys(
          rs,
          null,
          [
            Ts("div", Xd, [
              Ts(
                "div",
                {
                  class: "sg1-tab-results",
                  style: i(e.stylesObj.tabResultsMaxHeight),
                },
                [
                  (ds(!0),
                  ys(
                    rs,
                    null,
                    Bs(
                      e.currentTabsReordered,
                      (t, n) => (
                        ds(),
                        ys(
                          "div",
                          {
                            key: t.id,
                            class: u(
                              1 == e.currentTabs.length
                                ? "sg1-label-description"
                                : "sg1-label-multiple-chose"
                            ),
                          },
                          [
                            1 == e.currentTabs.length
                              ? (ds(),
                                ys(
                                  "div",
                                  {
                                    key: 0,
                                    style: i({
                                      ...e.stylesObj.commonFontFamily,
                                      ...e.stylesObj.fontWeightListSelected,
                                      ...e.stylesObj.fontColor,
                                      ...e.stylesObj.fontSize1,
                                      ...e.stylesObj.paddingBottomNextTab,
                                    }),
                                    innerHTML: e.fixText(t.text[e.lang]),
                                  },
                                  null,
                                  12,
                                  Zd
                                ))
                              : (ds(),
                                ys(
                                  "div",
                                  {
                                    key: 1,
                                    style: i({
                                      ...e.stylesObj.commonFontFamily,
                                      ...e.stylesObj.fontWeightListSelected,
                                      ...e.stylesObj.fontColor,
                                      ...e.stylesObj.fontSize1,
                                    }),
                                  },
                                  [
                                    Es(
                                      a,
                                      {
                                        index: n,
                                        text: e.fixText(t.text[e.lang]),
                                        stylesObj: e.stylesObj,
                                        onClick: (n) => e.emitReedBeams3(t.id),
                                      },
                                      null,
                                      8,
                                      ["index", "text", "stylesObj", "onClick"]
                                    ),
                                  ],
                                  4
                                )),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                  (ds(!0),
                  ys(
                    rs,
                    null,
                    Bs(
                      e.nextTabsChoseReordered,
                      (t, n) => (
                        ds(),
                        ys(
                          "div",
                          {
                            key: t.id,
                            class: u(
                              1 == e.nextTabsChose.length
                                ? "sg1-label-description"
                                : "sg1-label-multiple-chose"
                            ),
                          },
                          [
                            t.id
                              ? (ds(),
                                ys("div", Qd, [
                                  Es(
                                    a,
                                    {
                                      index: n,
                                      text: e.fixText(t.text[e.lang]),
                                      stylesObj: e.stylesObj,
                                      onClick: (n) => e.emitReedBeams3(t.id),
                                    },
                                    null,
                                    8,
                                    ["index", "text", "stylesObj", "onClick"]
                                  ),
                                ]))
                              : Ns("", !0),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ],
                4
              ),
            ]),
            1 == e.currentTabs.length && 0 == e.nextTabsChose.length
              ? (ds(),
                ys(
                  "div",
                  {
                    key: 0,
                    class: "sg1-single-beem-foward-box",
                    style: i(e.stylesObj.paddingTopNextTab),
                  },
                  [
                    e.stylesObj
                      ? (ds(),
                        vs(
                          c,
                          {
                            key: 0,
                            stylesObj: e.stylesObj,
                            onClick:
                              t[0] ||
                              (t[0] = (t) =>
                                e.emitReedBeams3(e.currentTabs[0].id)),
                          },
                          null,
                          8,
                          ["stylesObj"]
                        ))
                      : (ds(),
                        ys("div", {
                          key: 1,
                          onClick:
                            t[1] ||
                            (t[1] = (t) =>
                              e.emitReedBeams3(e.currentTabs[0].id)),
                          class: "sg1-single-beem-icon",
                        })),
                  ],
                  4
                ))
              : Ns("", !0),
          ],
          64
        )
      );
    }),
    (Yd.__scopeId = "data-v-3b0d3f8e");
  var ep = {
    name: "boxNarrationGameEnd",
    props: { currentTabs: {}, lang: {}, reedbeams: {}, stylesObj: {} },
    mounted() {
      this.currentTabs[0].openNewPage &&
        window.open(this.currentTabs[0].url[this.lang], "_self");
    },
    methods: {
      reedBeams(e) {
        this.$emit("reedbeams", e);
      },
      fixText: (e) => qd(e),
    },
  };
  const tp = { class: "sg1-box-narration" },
    np = ["innerHTML"];
  jd(
    "\n.sg1-tab-results[data-v-9c79f44c] {\n\t\tflex-grow: 1;\n\t\toverflow: auto;\n}\n.sg1-box-narration[data-v-9c79f44c] {\n\t\tposition: relative;\n\t\tmax-height: initial;\n\t\tmin-height: inherit;\n\t\tz-index: 10;\n\t\tflex-grow: 1;\n}\n"
  ),
    (ep.render = function (e, t, n, o, s, r) {
      return (
        ds(),
        ys("div", tp, [
          Ts(
            "div",
            {
              class: "sg1-tab-results",
              style: i(e.stylesObj.tabResultsMaxHeight),
            },
            [
              (ds(!0),
              ys(
                rs,
                null,
                Bs(
                  e.currentTabs,
                  (t, n) => (
                    ds(),
                    ys(
                      "div",
                      {
                        key: t.id,
                        class: u(
                          1 == e.currentTabs.length
                            ? "sg1-label-description"
                            : "sg1-label-multiple-chose"
                        ),
                      },
                      [
                        1 == e.currentTabs.length
                          ? (ds(),
                            ys(
                              "div",
                              {
                                key: 0,
                                style: i({
                                  ...e.stylesObj.commonFontFamily,
                                  ...e.stylesObj.fontWeightListSelected,
                                  ...e.stylesObj.fontColor,
                                  ...e.stylesObj.fontSize1,
                                }),
                                innerHTML: e.fixText(t.text[e.lang]),
                              },
                              null,
                              12,
                              np
                            ))
                          : Ns("", !0),
                      ],
                      2
                    )
                  )
                ),
                128
              )),
            ],
            4
          ),
        ])
      );
    }),
    (ep.__scopeId = "data-v-9c79f44c");
  var op = {
    name: "boxNarrationGameOver",
    props: {
      currentTabs: {},
      lang: {},
      reedbeams: {},
      stylesObj: {},
      gameIntentLoad3: {},
    },
    methods: {
      reedBeams(e) {
        this.$emit("reedbeams", e);
      },
      fixText: (e) => qd(e),
      gameIntentLoad4() {
        this.$emit("gameIntentLoad3");
      },
    },
  };
  const sp = { class: "sg1-box-narration" },
    rp = ["innerHTML"];
  jd(
    "\n.sg1-tab-results[data-v-3117e596] {\n\t\tflex-grow: 1;\n\t\toverflow: auto;\n}\n.sg1-box-narration[data-v-3117e596] {\n\t\tposition: relative;\n\t\tmax-height: initial;\n\t\tmin-height: inherit;\n\t\tz-index: 10;\n\t\tflex-grow: 1;\n}\n.sg1-replay-link[data-v-3117e596] {\n\t\ttext-decoration: underline;\n\t\tcursor: pointer;\n}\n"
  ),
    (op.render = function (e, t, n, o, s, r) {
      return (
        ds(),
        ys("div", sp, [
          Ts(
            "div",
            {
              class: "sg1-tab-results",
              style: i(e.stylesObj.tabResultsMaxHeight),
            },
            [
              (ds(!0),
              ys(
                rs,
                null,
                Bs(
                  e.currentTabs,
                  (n, o) => (
                    ds(),
                    ys(
                      "div",
                      {
                        key: n.id,
                        class: u(
                          1 == e.currentTabs.length
                            ? "sg1-label-description"
                            : "sg1-label-multiple-chose"
                        ),
                      },
                      [
                        1 == e.currentTabs.length
                          ? (ds(),
                            ys(
                              "div",
                              {
                                key: 0,
                                onClick:
                                  t[0] || (t[0] = (t) => e.gameIntentLoad4()),
                                style: i({
                                  ...e.stylesObj.commonFontFamily,
                                  ...e.stylesObj.fontWeightListSelected,
                                  ...e.stylesObj.fontColor,
                                  ...e.stylesObj.fontSize1,
                                }),
                                innerHTML: e.fixText(n.text[e.lang]),
                                class: "sg1-replay-link",
                              },
                              null,
                              12,
                              rp
                            ))
                          : Ns("", !0),
                      ],
                      2
                    )
                  )
                ),
                128
              )),
            ],
            4
          ),
        ])
      );
    }),
    (op.__scopeId = "data-v-3117e596");
  let ip = {
    name: "BgBoxText",
    components: {},
    props: { stylesObj: {} },
    data: function () {
      return {
        isCanvas: !1,
        canvasTypeArray: ["sketch"],
        borderRadiousLayout: [
          "d3e6",
          "b3c6",
          "b2e3",
          "b2e4",
          "b6e7",
          "b5e7",
          "e2e7",
          "b2b7",
        ],
        width: 0,
        height: 0,
        styleStBg: {},
      };
    },
    mounted() {
      this.init(), window.addEventListener("resize", this.init);
    },
    destroyed() {
      window.removeEventListener("resize", this.init);
    },
    methods: {
      init() {
        let e = !1;
        this.borderRadiousLayout.includes(this.stylesObj.layoutID) && (e = !0),
          this.canvasTypeArray.includes(this.stylesObj.bgStyle.bgType)
            ? ((this.isCanvas = !0),
              (this.width =
                document.getElementsByClassName("bg-wrapper")[0].clientWidth),
              (this.height =
                document.getElementsByClassName("bg-wrapper")[0].clientHeight),
              setTimeout(() => {
                !(function (e, t, n) {
                  let o = document
                      .getElementById("st-canvas-bg")
                      .getContext("2d"),
                    s = Ld(
                      '\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 133.3 133.3" style="enable-background:new 0 0 133.3 133.3;" xml:space="preserve">\n<g>\n\t<path style="fill:#7F7F7F;" d="M132.6,99.6c-0.2,0.2-0.4,0.3-0.6,0.5c0.3,0.3,0,0.5-0.1,0.7c0,0.2,0.1,0.3,0.1,0.4\n\t\tc-0.1,0.6,0,1.3,0.3,1.8c0.1,0.1,0.1,0.3,0.1,0.4c-0.1,0.5-0.2,1-0.3,1.4c-0.1,0.4-0.2,0.7,0,1c-0.1,0.3-0.2,0.5-0.2,0.7\n\t\tc0,0.6,0,1.1,0,1.7c0,0.4,0,0.8-0.3,1.1c0,0.1,0,0.1-0.1,0.2c0.2,0.1,0.3,0.2,0.4,0.3c-0.1,0.3-0.3,0.5-0.3,0.8\n\t\tc0.1,0.6,0.3,1.1,0.4,1.7c-0.1,0.4-0.2,0.8-0.3,1.2c0,0.2,0.1,0.3,0.1,0.5c0,0.1,0.1,0.2,0.2,0.3c-0.2,0.4-0.5,0.8-0.7,1.2\n\t\tc-0.3,0.6-0.5,0.7,0.2,1.2c0,0,0,0.1,0.1,0.1c0,0.1,0,0.2,0,0.2c-0.1,0.4-0.1,0.7,0.2,1c0.1,0.1,0.1,0.2,0.1,0.4c0,0.5,0,1-0.1,1.5\n\t\tc-0.1,0.3-0.2,0.5-0.1,0.9c0,0.1,0,0.3-0.1,0.3c-0.3,0.4-0.3,0.8,0,1.2c-0.8,1.4-0.4,2.7,0.4,4.1c-0.1,0.2-0.3,0.3-0.4,0.5\n\t\tc-0.1,0.2-0.3,0.4-0.3,0.6c0,0.3,0.1,0.6,0.2,1c0.1,0.3,0.3,0.7,0.4,1c-0.3,0.6-0.3,1.4-0.9,1.8c-0.2,0-0.5,0-0.8,0\n\t\tc-0.2,0.2,0.1,0.7-0.4,0.5c-0.2-0.1-0.5,0-0.8,0.1c-0.3,0.1-0.5,0.2-0.9,0.1c-0.4-0.1-0.8-0.2-1.2,0c-0.3,0.1-0.5,0.1-0.8,0\n\t\tc-0.2-0.1-0.4-0.1-0.6-0.1c-0.3,0.1-0.6,0-0.9-0.1c-0.2-0.1-0.6-0.3-0.8-0.2c-0.6,0.2-1.1,0.1-1.7,0.2c-0.1,0-0.2,0-0.2,0\n\t\tc-0.8,0.3-1.7,0.1-2.5,0.1c-0.6,0-1.3,0.1-1.9,0c-0.1,0-0.2,0-0.2,0c-0.3,0.2-0.7,0.1-1,0.1c-0.6,0-1.2-0.1-1.8-0.1\n\t\tc-0.2,0-0.3,0-0.5,0c-0.4,0.2-0.8,0.2-1.2,0c-0.2-0.1-0.4,0-0.6,0c-0.5,0-0.9,0.3-1.4,0.1c-0.5-0.2-1-0.2-1.5,0\n\t\tc-0.3,0-0.6-0.1-0.8-0.1s-0.4,0-0.6-0.1c-0.6-0.1-1.2-0.2-1.8-0.3c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0-0.2,0.1-0.4,0.2\n\t\tc0-0.5-0.3-0.4-0.6-0.4c-0.6-0.1-1.2,0.2-1.7,0.5c-0.2,0.2-0.4,0.2-0.7,0.1c-0.2-0.1-0.4-0.1-0.6,0c-0.4,0-0.8,0.1-1.2,0.2\n\t\tc-0.1,0-0.3,0-0.4-0.1c-0.5-0.3-1.1-0.2-1.6-0.5c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0-0.1-0.1-0.2-0.1\n\t\tc-0.7-0.4-0.7-0.4-1.4,0c-0.3,0.2-0.7,0.3-1.1,0.3c-0.5,0-1-0.1-1.4,0.1c-0.3-0.2-0.6-0.4-0.9-0.4c-0.6,0-1.3-0.2-1.9,0.1\n\t\tc-0.2,0.1-0.4,0.2-0.5,0.1c-0.3-0.2-0.6-0.1-0.9-0.2c-0.5-0.3-0.9-0.4-1.4-0.1c-0.6-0.2-1.1,0-1.6,0.2c-0.5,0.2-1,0.3-1.5,0.3\n\t\tc-0.5,0-1,0.1-1.5-0.2c-0.1,0-0.2-0.1-0.2-0.1c-0.3-0.2-0.7-0.3-1.1,0c-0.1,0-0.2,0-0.3,0c-0.7,0-1.4,0.1-2,0.4\n\t\tc-0.5-0.2-1-0.7-1.6-0.3c-0.1,0-0.2,0-0.3,0c-0.1,0-0.3-0.1-0.3-0.1c-0.3,0.2-0.5,0-0.8,0c-0.4,0-0.8-0.2-1.2,0.3\n\t\tc-0.3,0.4-0.5,0.4-0.9,0.1c-0.2-0.2-0.4-0.4-0.6-0.5c-0.3,0-0.6,0-0.8,0c-0.5,0.2-0.9,0.2-1.2-0.1c-0.4,0-0.8,0-1.1,0\n\t\tc-0.1,0-0.2,0-0.3,0c-0.4,0.3-0.9,0.2-1.3,0.4c-0.1,0-0.2,0-0.4,0c-0.3-0.1-0.6-0.2-0.9-0.3c-0.3-0.1-0.5-0.1-0.8,0\n\t\tc-0.6,0.2-1.2,0.3-1.7,0.4c-0.3-0.2-0.6-0.3-0.9-0.5c-0.5-0.3-0.9-0.3-1.4,0c-0.6,0.3-1.2,0.4-1.8,0.2c-0.3-0.1-0.6-0.1-0.9,0\n\t\tc-0.1,0.1-0.4,0.1-0.4,0c-0.3-0.3-0.7-0.2-0.9-0.2c-0.4,0-0.7,0-1.1-0.1c-0.2,0.1-0.3,0.2-0.5,0.3c-0.2,0.2-0.4,0.2-0.6,0\n\t\tc-0.4-0.3-0.7-0.2-1.1,0.1c-0.8-0.5-1.4-0.4-2,0.2c-0.2,0-0.3-0.1-0.5-0.1c-0.1,0-0.3,0-0.4,0c-0.1-0.1-0.1-0.1-0.1-0.1\n\t\tc0-0.1-0.1-0.1-0.1-0.2c-0.3-0.5-0.3-0.5-0.8-0.3c-0.1,0-0.2,0-0.3,0c-0.4,0-0.9,0.1-1.3-0.2c-0.1-0.1-0.3,0-0.5,0\n\t\tc-0.3,0-0.7,0.1-1,0.2c-0.1,0-0.3,0-0.3,0c-0.4-0.4-0.9,0.1-1.3,0c-0.3,0.3-0.7,0.2-1,0.2c-0.7,0-1.3-0.2-2-0.2\n\t\tc-0.1,0-0.2-0.1-0.2-0.1c-0.2,0.1-0.3,0.2-0.4,0.3c-0.8-0.4-1.5-0.4-2.2,0c-0.2,0-0.4-0.1-0.6,0c-0.4,0.1-0.7,0-1.1-0.2\n\t\tc-0.2-0.1-0.5-0.1-0.7,0.1c-0.3,0.3-0.8,0.2-1.1,0.2c-0.4,0-0.8-0.1-1.2-0.1c-0.3-0.1-0.6-0.1-0.8,0.1c-0.2-0.1-0.3-0.2-0.6-0.3\n\t\tc-0.1,0.2-0.2,0.3-0.3,0.5c-0.4-0.5-0.8-0.4-1.3-0.2c-0.3,0.1-0.6,0.3-0.9,0.4c-0.2-0.2-0.3-0.4-0.5-0.6c-0.3,0.3-0.5,0-0.7-0.1\n\t\tc-0.2,0-0.3,0.1-0.5,0.1c-0.6-0.1-1.3,0-1.8,0.3c-0.1,0.1-0.3,0.1-0.4,0.1c-0.5-0.1-1-0.2-1.4-0.3c-0.4-0.1-0.7-0.2-1,0\n\t\tc-0.3-0.1-0.5-0.2-0.7-0.2c-0.6,0-1.1,0.1-1.7,0.1c-0.4,0-0.8-0.1-1.1-0.3c-0.1-0.1-0.1-0.1-0.2-0.1c-0.1,0.2-0.2,0.3-0.3,0.4\n\t\tc-0.3-0.1-0.5-0.3-0.7-0.3c-0.6,0.1-1.1,0.3-1.7,0.4c-0.4-0.1-0.8-0.2-1.2-0.3c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0-0.2,0.1-0.3,0.2\n\t\tc-0.4-0.2-0.8-0.5-1.2-0.7c-0.6-0.3-0.7-0.5-1.1,0.2c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.2,0c-0.4-0.1-0.7-0.1-1,0.2\n\t\tc-0.1,0.1-0.3,0.2-0.4,0.2c-0.5,0-1,0-1.5-0.1c-0.3-0.1-0.5-0.2-0.9-0.1c-0.1,0-0.2,0-0.3-0.1c-0.4-0.3-0.8-0.3-1.2,0\n\t\tc-1.4-0.8-2.7-0.4-4.1,0.4c-0.2-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.3-0.6-0.3c-0.3,0-0.7,0.1-1,0.2c-0.3,0.1-0.7,0.3-1,0.4\n\t\tc-0.6-0.3-1.3-0.3-1.8-0.9c0-0.1-0.8-0.2-0.8-0.3c-0.1-0.5-0.3-1.1-0.1-1.6c0.1-0.2,0-0.6-0.1-0.8c-0.1-0.3-0.2-0.5-0.1-0.9\n\t\tc0.2-0.4,0.2-0.8,0-1.2c-0.1-0.3-0.1-0.6,0-0.8c0.1-0.2,0.1-0.4,0.1-0.6c-0.1-0.3,0-0.6,0.1-0.9c0.1-0.2,0.3-0.6,0.2-0.8\n\t\tc-0.2-0.6-0.1-1.1-0.2-1.7c0-0.1,0-0.2,0-0.2c-0.4-0.8-0.1-1.6-0.1-2.5c0-0.6-0.1-1.3,0-1.9c0-0.1,0-0.2,0-0.2\n\t\tc-0.2-0.3-0.1-0.7-0.1-1c0-0.6,0.1-1.2,0.1-1.8c0-0.2,0-0.3,0-0.5c-0.2-0.4-0.1-0.8,0-1.2c0.1-0.2,0-0.4,0-0.6\n\t\tc0-0.5-0.3-0.9-0.1-1.4c0.2-0.5,0.2-1.1,0-1.5c0-0.3,0.1-0.6,0.1-0.8c0-0.2,0-0.4,0.1-0.6c0.1-0.6,0.2-1.2,0.3-1.7\n\t\tc0-0.2-0.1-0.3-0.2-0.5c0-0.1-0.1-0.2-0.2-0.4c0.4,0,0.4-0.3,0.4-0.6c0.1-0.6-0.1-1.2-0.5-1.7c-0.2-0.2-0.2-0.4-0.1-0.6\n\t\tc0.1-0.2,0.1-0.4,0-0.6c0-0.4-0.1-0.8-0.2-1.2c0-0.1,0-0.3,0.1-0.4c0.3-0.5,0.2-1.1,0.5-1.6c0-0.1,0-0.2,0-0.3\n\t\tc0-0.2-0.1-0.3-0.1-0.4c0-0.1,0.1-0.1,0.1-0.2c0.4-0.7,0.4-0.7,0-1.3c-0.2-0.3-0.3-0.7-0.3-1.1c0-0.5,0.1-1-0.1-1.4\n\t\tc0.2-0.3,0.4-0.6,0.4-0.9c0-0.6,0.1-1.3-0.1-1.9c-0.1-0.2-0.2-0.4-0.1-0.5c0.2-0.3,0.1-0.6,0.2-0.9c0.2-0.5,0.4-0.9,0.1-1.4\n\t\tc0.2-0.6,0-1.1-0.2-1.6c-0.1-0.5-0.3-1-0.3-1.5c0-0.5-0.1-1,0.2-1.5c0-0.1,0.1-0.1,0.1-0.2c0.2-0.4,0.3-0.7,0-1.1\n\t\tc0-0.1,0-0.2,0-0.3c0-0.7-0.1-1.4-0.4-2c0.2-0.5,0.7-1,0.3-1.6c0-0.1,0-0.2,0-0.3c0-0.1,0.1-0.3,0-0.3c-0.2-0.3,0-0.5,0-0.7\n\t\tc0-0.4,0.2-0.8-0.3-1.1c-0.4-0.3-0.4-0.5-0.1-0.9c0.2-0.2,0.4-0.4,0.5-0.6c0-0.3,0-0.6-0.1-0.8c-0.2-0.5-0.2-0.9,0.1-1.2\n\t\tc0-0.5,0-0.8,0-1.1c0-0.1,0-0.2,0-0.3c-0.3-0.4-0.2-0.9-0.4-1.3c0-0.1,0-0.2,0-0.3c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.3,0.1-0.5,0-0.8\n\t\tc-0.2-0.6-0.3-1.1-0.4-1.7c0.2-0.3,0.3-0.6,0.5-0.8c0.3-0.5,0.3-0.9,0-1.4c-0.3-0.6-0.4-1.2-0.2-1.9c0.1-0.3,0.1-0.6,0-0.8\n\t\tc-0.1-0.1-0.1-0.4,0-0.5c0.3-0.3,0.2-0.7,0.2-1c0-0.4,0-0.7,0.1-1c-0.1-0.2-0.2-0.3-0.3-0.5c-0.2-0.2-0.2-0.4,0-0.6\n\t\tc0.3-0.4,0.2-0.7-0.2-1.1c0.5-0.8,0.4-1.4-0.2-2c0-0.2,0.1-0.3,0.1-0.4c0-0.1,0-0.3,0-0.4C1,53.3,1,53.3,1,53.3\n\t\tc0,0,0.1-0.1,0.2-0.1c0.5-0.3,0.5-0.3,0.3-0.8c0-0.1,0-0.2,0-0.3c0-0.5-0.1-0.9,0.2-1.3c0.1-0.1,0-0.3,0-0.5c0-0.3-0.1-0.7-0.2-1\n\t\tc0-0.1,0-0.3,0-0.3c0.4-0.4-0.1-0.8,0-1.3c-0.3-0.3-0.2-0.7-0.2-1c0-0.7,0.2-1.3,0.2-1.9c0-0.1,0-0.2,0.1-0.2\n\t\tc-0.1-0.2-0.2-0.3-0.3-0.4c0.4-0.8,0.4-1.5,0-2.2c0-0.2,0.1-0.4,0-0.6c-0.1-0.4,0-0.7,0.2-1.1c0.1-0.2,0.1-0.5-0.1-0.7\n\t\tc-0.3-0.3-0.3-0.8-0.2-1.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.3,0.1-0.6-0.1-0.8c0.1-0.2,0.2-0.3,0.3-0.6c-0.2-0.1-0.3-0.2-0.5-0.3\n\t\tc0.5-0.4,0.4-0.8,0.2-1.3c-0.2-0.3-0.3-0.6-0.5-0.9c0.2-0.2,0.3-0.3,0.6-0.5c-0.3-0.3,0-0.5,0.2-0.7c0-0.2-0.1-0.3-0.1-0.4\n\t\tc0.1-0.7,0-1.3-0.3-1.8c-0.1-0.1-0.1-0.3-0.1-0.4c0.1-0.5,0.2-1,0.3-1.4c0.1-0.4,0.2-0.7,0-1c0.1-0.3,0.2-0.5,0.2-0.7\n\t\tc0-0.6,0-1.1,0-1.7c0-0.4,0-0.8,0.3-1.1c0,0,0.1-0.1,0.1-0.2c-0.2-0.1-0.3-0.2-0.4-0.3c0.1-0.3,0.3-0.5,0.3-0.8\n\t\tc-0.1-0.6-0.3-1.1-0.4-1.7c0.1-0.4,0.2-0.8,0.3-1.2c0-0.2-0.1-0.3-0.2-0.5c0-0.1-0.1-0.2-0.2-0.3c0.2-0.4,0.5-0.8,0.7-1.2\n\t\tc0.3-0.6,0.5-0.7-0.2-1.2c0,0,0-0.1-0.1-0.1c0-0.1,0-0.1,0-0.2c0.2-0.4,0.1-0.7-0.2-1c-0.1-0.1-0.2-0.2-0.1-0.4c0-0.5,0-1,0.1-1.4\n\t\tc0.1-0.3,0.2-0.6,0.1-0.9c0-0.1,0-0.3,0.1-0.3c0.3-0.4,0.3-0.8,0-1.2C2.2,9.2,1.8,7.9,1,6.5C1.2,6.4,1.3,6.2,1.5,6s0.3-0.4,0.3-0.6\n\t\tc0-0.3-0.1-0.6-0.2-1c-0.1-0.3-0.3-0.7-0.4-1C1.4,2.8,1.4,2.1,2,1.7c0.1,0,0.2,0,0.3,0v0l0.2,0c0.5-0.1,1.1-0.3,1.6-0.1\n\t\tc0.2,0.1,0.6,0,0.8-0.1c0.3-0.1,0.5-0.2,0.8-0.1c0.4,0.1,0.8,0.2,1.2,0c0.3-0.1,0.6-0.1,0.8,0c0.2,0.1,0.4,0.1,0.6,0.1\n\t\tc0.3-0.1,0.6,0,0.9,0.1c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.6-0.2,1.1-0.2,1.7-0.2c0.1,0,0.2,0,0.2,0\n\t\tc0.8-0.4,1.7-0.1,2.5-0.1c0.6,0,1.3-0.1,1.9,0c0.1,0,0.2,0,0.2,0c0.3-0.2,0.7-0.1,1-0.1c0.6,0,1.2,0.1,1.8,0.1c0.2,0,0.3,0,0.5,0\n\t\tc0.4-0.2,0.8-0.2,1.2,0c0.2,0.1,0.4,0,0.6,0c0.5,0,0.9-0.3,1.4-0.1c0.5,0.2,1.1,0.2,1.5,0c0.3,0,0.6,0.1,0.8,0.1c0.2,0,0.4,0,0.6,0\n\t\tc0.6,0.1,1.2,0.2,1.7,0.3c0.2,0,0.3-0.1,0.5-0.2c0.1,0,0.2-0.1,0.4-0.2c0,0.4,0.3,0.4,0.6,0.4c0.6,0.1,1.2-0.1,1.7-0.5\n\t\tc0.2-0.2,0.4-0.2,0.6-0.1C31.7,1,32,1,32.2,1c0.4,0,0.8-0.1,1.2-0.2c0.1,0,0.3,0,0.4,0.1c0.5,0.3,1.1,0.2,1.6,0.5\n\t\tc0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.4-0.1c0.1,0,0.1,0.1,0.2,0.1c0.7,0.4,0.7,0.4,1.4,0c0.3-0.2,0.7-0.3,1-0.3c0.5,0,1,0.1,1.4-0.1\n\t\tc0.3,0.2,0.6,0.4,0.9,0.4c0.6,0,1.3,0.1,1.9-0.1c0.2-0.1,0.4-0.1,0.5-0.1c0.3,0.1,0.6,0.1,0.9,0.2c0.5,0.3,0.9,0.4,1.4,0.1\n\t\tc0.6,0.2,1.1,0,1.6-0.2c0.5-0.2,1-0.3,1.5-0.3c0.5,0,1-0.1,1.5,0.2c0.1,0,0.1,0.1,0.2,0.1c0.4,0.1,0.7,0.3,1.1,0\n\t\tc0.1-0.1,0.2,0,0.3,0c0.7,0,1.4-0.1,2-0.4c0.5,0.2,1,0.7,1.6,0.3c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0.1,0.3,0c0.3-0.2,0.5,0,0.7,0\n\t\tc0.4,0,0.8,0.2,1.2-0.3c0.3-0.4,0.5-0.4,0.9-0.1c0.2,0.2,0.4,0.4,0.6,0.5c0.3,0,0.6,0,0.8-0.1c0.5-0.2,0.9-0.2,1.2,0.1\n\t\tc0.5,0,0.8,0,1.1,0c0.1,0,0.2,0,0.3,0c0.4-0.3,0.9-0.2,1.3-0.4c0.1,0,0.2,0,0.3,0c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.5,0.1,0.8,0\n\t\tc0.6-0.2,1.1-0.3,1.7-0.4c0.3,0.2,0.6,0.3,0.8,0.5c0.5,0.3,0.9,0.3,1.4,0c0.6-0.4,1.2-0.4,1.8-0.2c0.3,0.1,0.6,0.1,0.8,0\n\t\tc0.1-0.1,0.4-0.1,0.5,0c0.3,0.3,0.7,0.2,1,0.2c0.4,0,0.7,0,1,0.1c0.2-0.1,0.3-0.2,0.5-0.3c0.2-0.2,0.4-0.2,0.6,0\n\t\tc0.4,0.3,0.7,0.2,1.1-0.1c0.8,0.5,1.4,0.4,2-0.2c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.3,0,0.4,0C80.3,1,80.3,1,80.3,1\n\t\tc0,0,0.1,0.1,0.1,0.1c0.3,0.5,0.3,0.5,0.8,0.3c0.1,0,0.2,0,0.3,0c0.5,0,0.9-0.1,1.3,0.2c0.1,0.1,0.3,0,0.5,0c0.3-0.1,0.7-0.1,1-0.2\n\t\tc0.1,0,0.3,0,0.3,0c0.4,0.4,0.8-0.1,1.3,0c0.3-0.3,0.7-0.2,1-0.2c0.7,0,1.3,0.2,1.9,0.2c0.1,0,0.2,0.1,0.2,0.1\n\t\tc0.2-0.1,0.3-0.2,0.4-0.3c0.8,0.4,1.5,0.4,2.2,0c0.2,0,0.4,0.1,0.6,0c0.4-0.1,0.7,0,1.1,0.2c0.2,0.1,0.5,0.1,0.7-0.1\n\t\tc0.3-0.3,0.8-0.3,1.2-0.2c0.4,0,0.8,0.1,1.2,0.1c0.3,0.1,0.6,0.1,0.8-0.1c0.2,0.1,0.3,0.2,0.6,0.3C98,1.4,98.1,1.2,98.2,1\n\t\tc0.4,0.5,0.8,0.4,1.3,0.2c0.3-0.2,0.6-0.3,0.9-0.5c0.2,0.2,0.3,0.3,0.5,0.6c0.3-0.3,0.5,0,0.7,0.1c0.2,0,0.3-0.1,0.4-0.1\n\t\tc0.7,0.1,1.3,0,1.8-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.5,0.1,1,0.2,1.5,0.3c0.3,0.1,0.7,0.2,1-0.1c0.3,0.1,0.5,0.2,0.7,0.2\n\t\tc0.6,0,1.1,0,1.7,0c0.4,0,0.8,0,1.1,0.3c0,0,0.1,0.1,0.2,0.1c0.1-0.2,0.2-0.3,0.3-0.4c0.3,0.1,0.5,0.3,0.8,0.3\n\t\tc0.6-0.1,1.1-0.3,1.7-0.4c0.4,0.1,0.8,0.2,1.2,0.3c0.2,0,0.3-0.1,0.5-0.2c0.1,0,0.2-0.1,0.3-0.2c0.4,0.2,0.8,0.5,1.2,0.7\n\t\tc0.6,0.3,0.7,0.5,1.1-0.2c0,0,0.1,0,0.1-0.1c0.1,0,0.1,0,0.2,0c0.4,0.2,0.7,0.1,1-0.2c0.1-0.1,0.2-0.1,0.4-0.1c0.5,0,1,0,1.5,0.1\n\t\tc0.3,0.1,0.5,0.2,0.9,0.1c0.1,0,0.3,0,0.3,0.1c0.4,0.3,0.8,0.3,1.2,0c0.2,0.1,0.3,0.2,0.5,0.2c0.8,0.3,1.6,0.3,2.4,0\n\t\tc0.4-0.1,0.8-0.4,1.2-0.6c0.2,0.1,0.3,0.3,0.5,0.4c0.1,0.1,0.2,0.1,0.3,0.2h0c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.4,0,0.5-0.1\n\t\tc0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.7-0.3,1-0.4c0.6,0.3,1.3,0.3,1.8,0.9c0,0.2,0,0.4-0.1,0.6c0,0.3,0,0.6-0.1,0.9\n\t\tc-0.1,0.2,0,0.6,0.1,0.8c0.1,0.3,0.2,0.5,0.1,0.8c-0.2,0.4-0.2,0.8,0,1.2c0.1,0.3,0.1,0.5,0,0.8c-0.1,0.2-0.1,0.4-0.1,0.6\n\t\tc0.1,0.3,0,0.6-0.1,0.9c-0.1,0.2-0.3,0.6-0.2,0.8c0.2,0.6,0.2,1.1,0.2,1.7c0,0.1,0,0.2,0,0.2c0.4,0.8,0.1,1.7,0.1,2.5\n\t\tc0,0.6,0.1,1.3,0,1.9c0,0.1,0,0.2,0,0.2c0.2,0.3,0.1,0.7,0.1,1c0,0.6-0.1,1.2-0.1,1.8c0,0.1,0,0.3,0,0.5c0.2,0.4,0.1,0.8,0,1.2\n\t\tc-0.1,0.2,0,0.4,0,0.6c0,0.5,0.3,0.9,0.1,1.4c-0.2,0.5-0.2,1.1,0,1.5c0,0.3-0.1,0.6-0.1,0.8c0,0.2,0,0.4-0.1,0.6\n\t\tc-0.1,0.6-0.2,1.2-0.3,1.7c0,0.2,0.1,0.3,0.2,0.5c0,0.1,0.1,0.2,0.2,0.4c-0.4,0-0.4,0.3-0.4,0.6c-0.1,0.6,0.1,1.2,0.5,1.7\n\t\tc0.2,0.2,0.2,0.4,0.1,0.6c-0.1,0.2-0.1,0.4,0,0.6c0,0.4,0.1,0.8,0.2,1.2c0,0.1,0,0.3-0.1,0.4c-0.3,0.5-0.2,1.1-0.5,1.6\n\t\tc0,0.1,0,0.2,0,0.3c0,0.2,0.1,0.3,0.1,0.4c0,0.1-0.1,0.1-0.1,0.2c-0.4,0.7-0.4,0.7,0,1.4c0.2,0.3,0.3,0.7,0.3,1.1\n\t\tc0,0.5-0.1,1,0.1,1.4c-0.2,0.3-0.4,0.6-0.4,0.9c0,0.6-0.1,1.3,0.1,1.9c0.1,0.2,0.2,0.4,0.1,0.5c-0.1,0.3-0.1,0.6-0.2,0.9\n\t\tc-0.2,0.5-0.4,0.9-0.1,1.4c-0.2,0.6,0,1.1,0.2,1.6c0.2,0.5,0.3,1,0.3,1.5c0,0.5,0.1,1-0.2,1.5c0,0.1-0.1,0.1-0.1,0.2\n\t\tc-0.2,0.4-0.3,0.7,0,1.1c0,0.1,0,0.2,0,0.3c0,0.7,0.1,1.4,0.4,2c-0.2,0.5-0.7,1-0.3,1.6c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.3,0,0.3\n\t\tc0.2,0.3,0,0.5,0,0.7c0,0.4-0.2,0.8,0.3,1.2c0.4,0.3,0.4,0.5,0.1,0.9c-0.2,0.2-0.4,0.4-0.5,0.6c0,0.3,0,0.6,0.1,0.8\n\t\tc0.2,0.5,0.1,0.9-0.1,1.2c0,0.4,0,0.8,0,1.1c0,0.1,0,0.2,0,0.3c0.3,0.4,0.2,0.9,0.4,1.3c0.1,0.1,0,0.2,0,0.3\n\t\tc-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.3-0.1,0.5,0,0.8c0.2,0.6,0.3,1.2,0.4,1.7c-0.2,0.3-0.3,0.6-0.5,0.8c-0.3,0.5-0.3,0.9,0,1.4\n\t\tc0.3,0.6,0.4,1.2,0.2,1.8c-0.1,0.3-0.1,0.6,0,0.9c0.1,0.1,0.1,0.4,0,0.4c-0.3,0.3-0.2,0.7-0.2,0.9c0.1,0.4,0,0.7-0.1,1.1\n\t\tc0.1,0.2,0.2,0.3,0.3,0.5c0.2,0.2,0.2,0.4,0,0.6c-0.3,0.4-0.2,0.7,0.2,1.1c-0.5,0.8-0.4,1.4,0.2,2c0,0.2-0.1,0.3-0.1,0.5\n\t\tc0,0.1,0,0.3,0,0.3c-0.1,0.1-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.2,0.1c-0.5,0.3-0.5,0.3-0.3,0.8c0,0.1,0,0.2,0,0.3\n\t\tc0,0.4,0.1,0.9-0.2,1.3c-0.1,0.1,0,0.3,0,0.5c0,0.3,0.1,0.7,0.2,1c0,0.1,0,0.3,0,0.3c-0.4,0.4,0.1,0.8,0,1.3c0.3,0.3,0.2,0.7,0.2,1\n\t\tc0,0.7-0.2,1.3-0.2,1.9c0,0.1,0,0.2-0.1,0.2c0.1,0.2,0.2,0.3,0.3,0.4c-0.4,0.8-0.4,1.5,0,2.2c0,0.2-0.1,0.4,0,0.6\n\t\tc0.1,0.4,0,0.7-0.2,1.1c-0.1,0.2-0.1,0.5,0.1,0.7c0.3,0.4,0.3,0.8,0.2,1.2c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.3-0.1,0.6,0.1,0.8\n\t\tc-0.1,0.2-0.2,0.3-0.3,0.6c0.2,0.1,0.3,0.2,0.5,0.3c-0.5,0.4-0.4,0.8-0.2,1.3C132.3,99,132.4,99.3,132.6,99.6z"/>\n</g>\n</svg>',
                      t.bgColor
                    ),
                    r = 400,
                    i = Math.ceil(e.height / r);
                  for (let e = 0; e < i; e++) a(s, 0, e * r, r, r);
                  function a(e, t, n, s, r) {
                    var i = new Image();
                    (i.onload = function () {
                      o.save(), o.drawImage(i, t, n, s, r);
                    }),
                      (i.src =
                        "data:image/svg+xml;charset=utf-8," +
                        encodeURIComponent(e)),
                      (o.fillStyle = "pink"),
                      o.fillRect(0, 0, 100, 100),
                      o.restore();
                  }
                })(
                  { width: this.width, height: this.height },
                  this.stylesObj.bgStyle,
                  this.stylesObj.layoutID
                );
              }, 100))
            : ((this.isCanvas = !1),
              "minimal1" == this.stylesObj.bgStyle.bgType
                ? ((this.styleStBg = {
                    backgroundColor: this.stylesObj.bgStyle.bgColor,
                    boxShadow: "0 0 4px 2px rgba(14,14,14,0.45)",
                  }),
                  e && (this.styleStBg.borderRadius = "20px"))
                : (this.styleStBg = {
                    backgroundColor: this.stylesObj.bgStyle.bgColor,
                  }));
      },
    },
  };
  var ap = ip;
  const cp = { class: "sg1-bg-wrapper" },
    lp = ["width", "height"];
  jd(
    "\n.sg1-bg-wrapper[data-v-25293889] {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n}\n.sg1-st-bg[data-v-25293889] {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n}\n"
  ),
    (ap.render = function (e, t, n, o, s, r) {
      return (
        ds(),
        ys("div", cp, [
          e.isCanvas
            ? (ds(),
              ys(
                "canvas",
                {
                  key: 0,
                  width: e.width,
                  height: e.height,
                  id: "sg1-st-canvas-bg",
                },
                null,
                8,
                lp
              ))
            : (ds(),
              ys(
                "div",
                { key: 1, class: "sg1-st-bg", style: i(e.styleStBg) },
                null,
                4
              )),
        ])
      );
    }),
    (ap.__scopeId = "data-v-25293889");
  var up = {
    name: "boxText",
    components: { boxnarration: Yd, gameEnd: ep, gameOver: op, BgBoxText: ap },
    props: {
      narrationBox: {},
      lang: {},
      currentTabs: {},
      nextTabsChose: {},
      reedBeams: {},
      stylesObj: {},
      gameIntentLoad: {},
    },
    methods: {
      emitReedBeams1(e) {
        this.$emit("reedBeams", e);
      },
      gameIntentLoad2() {
        this.$emit("gameIntentLoad");
      },
    },
  };
  jd(
    "\n.sg1-wrapper-box-text[data-v-34060e5e] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n  flex-grow: 1;\r\n  height: auto;\n}\r\n"
  ),
    (up.render = function (e, t, n, o, s, r) {
      const a = Qo("BgBoxText"),
        c = Qo("boxnarration"),
        l = Qo("gameEnd"),
        u = Qo("gameOver");
      return (
        ds(),
        ys(
          "div",
          {
            class: "sg1-wrapper-box-text",
            style: i({ ...e.stylesObj.boxText, ...e.stylesObj.boxTextPadding }),
          },
          [
            e.stylesObj
              ? (ds(),
                vs(a, { key: 0, stylesObj: e.stylesObj }, null, 8, [
                  "stylesObj",
                ]))
              : Ns("", !0),
            "default" == e.narrationBox ||
            "descriptions" == e.narrationBox ||
            "chose" == e.narrationBox
              ? (ds(),
                vs(
                  c,
                  {
                    key: 1,
                    lang: e.lang,
                    "current-tabs": e.currentTabs,
                    nextTabsChose: e.nextTabsChose,
                    stylesObj: e.stylesObj,
                    onEmitReedBeams2: e.emitReedBeams1,
                  },
                  null,
                  8,
                  [
                    "lang",
                    "current-tabs",
                    "nextTabsChose",
                    "stylesObj",
                    "onEmitReedBeams2",
                  ]
                ))
              : Ns("", !0),
            "end" == e.narrationBox
              ? (ds(),
                vs(
                  l,
                  {
                    key: 2,
                    lang: e.lang,
                    "current-tabs": e.currentTabs,
                    stylesObj: e.stylesObj,
                    onEmitReedBeams2: e.emitReedBeams1,
                  },
                  null,
                  8,
                  ["lang", "current-tabs", "stylesObj", "onEmitReedBeams2"]
                ))
              : Ns("", !0),
            "game over" == e.narrationBox
              ? (ds(),
                vs(
                  u,
                  {
                    key: 3,
                    lang: e.lang,
                    "current-tabs": e.currentTabs,
                    stylesObj: e.stylesObj,
                    onEmitReedBeams2: e.emitReedBeams1,
                    onGameIntentLoad3: e.gameIntentLoad2,
                  },
                  null,
                  8,
                  [
                    "lang",
                    "current-tabs",
                    "stylesObj",
                    "onEmitReedBeams2",
                    "onGameIntentLoad3",
                  ]
                ))
              : Ns("", !0),
          ],
          4
        )
      );
    }),
    (up.__scopeId = "data-v-34060e5e");
  var dp = {
    name: "PreCachedImg",
    props: { preCachedImgList: {}, editorUsage: {}, setImgsLoaded: {} },
    data: () => ({ imgsLoaded: 0 }),
    watch: {
      imgsLoaded: function () {
        this.imgsLoaded == this.preCachedImgList.length &&
          this.$emit("setImgsLoaded");
      },
    },
  };
  const pp = { class: "sg1-pre-cached-img-wrapper" },
    fp = { key: 0 },
    hp = ["src"],
    gp = { key: 1 },
    mp = ["src", "srcset", "sizes"];
  jd(
    "\n.sg1-pre-cached-img-wrapper[data-v-50ed9ac2] {\n\t\tposition: fixed;\n\t\tmax-height: 0;\n\t\tmax-width: 0;\n\t\toverflow: hidden;\n\t\tvisibility: hidden;\n}\n"
  ),
    (dp.render = function (e, t, n, o, s, r) {
      return (
        ds(),
        ys("div", pp, [
          e.editorUsage
            ? (ds(),
              ys("div", fp, [
                (ds(!0),
                ys(
                  rs,
                  null,
                  Bs(
                    e.preCachedImgList,
                    (n, o) => (
                      ds(),
                      ys(
                        "img",
                        {
                          key: o,
                          class: "sg1-box-img",
                          src: n,
                          onLoad: t[0] || (t[0] = (t) => e.imgsLoaded++),
                        },
                        null,
                        40,
                        hp
                      )
                    )
                  ),
                  128
                )),
              ]))
            : (ds(),
              ys("div", gp, [
                (ds(!0),
                ys(
                  rs,
                  null,
                  Bs(
                    e.preCachedImgList,
                    (n, o) => (
                      ds(),
                      ys(
                        "img",
                        {
                          key: o,
                          src: n.src,
                          srcset: n.srcset,
                          sizes: n.sizes,
                          onLoad: t[1] || (t[1] = (t) => e.imgsLoaded++),
                        },
                        null,
                        40,
                        mp
                      )
                    )
                  ),
                  128
                )),
              ])),
        ])
      );
    }),
    (dp.__scopeId = "data-v-50ed9ac2");
  var yp = { name: "Spinner" };
  const vp = { class: "sg1-spinner-box-media" },
    bp = [
      ((e) => (dn("data-v-141b4ae7"), (e = e()), pn(), e))(() =>
        Ts(
          "div",
          { class: "sg1-spinner sg1-pulse-container" },
          [
            Ts("div", { class: "sg1-pulse-bubble sg1-pulse-bubble-1" }),
            Ts("div", { class: "sg1-pulse-bubble sg1-pulse-bubble-2" }),
            Ts("div", { class: "sg1-pulse-bubble sg1-pulse-bubble-3" }),
          ],
          -1
        )
      ),
    ];
  jd(
    "\n.sg1-spinner-box-media[data-v-141b4ae7] {\n\t\tbackground-color: #464646;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tanimation-name: sg1-fadein-141b4ae7;\n\t\tanimation-duration: 0.4s;\n\t\tanimation-timing-function: ease-out;\n}\n@keyframes sg1-fadein-141b4ae7 {\n0% {\n\t\t\topacity: 0;\n}\n100% {\n\t\t\topacity: 1;\n}\n}\n\n\t/* PULSE BUBBLES */\n.sg1-pulse-container[data-v-141b4ae7] {\n\t\twidth: 3em;\n\t\tfont-size: rem(15px);\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n}\n.sg1-pulse-bubble[data-v-141b4ae7] {\n\t\tfont-size: 1em;\n\t\twidth: 0.6em;\n\t\theight: 3em;\n\t\tbackground-color: #ffffff;\n}\n.sg1-pulse-bubble-1[data-v-141b4ae7] {\n\t\tanimation: sg1-pulse-141b4ae7 0.6s ease 0s infinite alternate;\n}\n.sg1-pulse-bubble-2[data-v-141b4ae7] {\n\t\tanimation: sg1-pulse-141b4ae7 0.6s ease 0.15s infinite alternate;\n}\n.sg1-pulse-bubble-3[data-v-141b4ae7] {\n\t\tanimation: sg1-pulse-141b4ae7 0.6s ease 0.3s infinite alternate;\n}\n\n\t/* KEYFRAMES */\n@keyframes sg1-pulse-141b4ae7 {\nfrom {\n\t\t\topacity: 1;\n\t\t\ttransform: scale(1);\n}\nto {\n\t\t\topacity: 0.5;\n\t\t\ttransform: scale(0.8);\n}\n}\n"
  ),
    (yp.render = function (e, t, n, o, s, r) {
      return ds(), ys("div", vp, bp);
    }),
    (yp.__scopeId = "data-v-141b4ae7");
  var xp = {
    name: "ToastContainer",
    data: () => ({ idToSet: 0, toasts: [], toastsFiltered: [], tostToSee: 3 }),
    methods: {
      addToast(e) {
        this.idToSet = this.idToSet + 1;
        let t = {
          id: this.idToSet,
          type: e.type,
          title: e.title,
          expanded: !1,
          content: e.content,
          isUnmountening: !1,
        };
        this.toasts.push(t);
      },
      removeToast(e) {
        (this.toasts.find((t) => t.id == e).isUnmountening = !0),
          setTimeout(() => {
            this.toasts = this.toasts.filter((t) => t.id !== e);
          }, 1e3);
      },
      expandToast(e) {
        this.toasts.forEach((t) => {
          t.id == e && (t.expanded = !t.expanded);
        });
      },
    },
  };
  const wp = { key: 0, class: "sg1-toast-container" },
    _p = ["cose"],
    Sp = { class: "sg1-head" },
    Cp = ["innerHTML"],
    Tp = ["onClick"],
    Ep = ["onClick"],
    kp = { class: "sg1-content" },
    Op = { class: "sg1-wrapper-pre" };
  function Ip(e) {
    let t, n;
    switch (e) {
      case "a6f8":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 6,
        }),
          (n = {
            gridRowStart: 1,
            gridColumnStart: 6,
            gridRowEnd: 7,
            gridColumnEnd: 9,
          });
        break;
      case "a5f8":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 5,
        }),
          (n = {
            gridRowStart: 1,
            gridColumnStart: 5,
            gridRowEnd: 7,
            gridColumnEnd: 9,
          });
        break;
      case "a1f3":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 4,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 1,
            gridColumnStart: 1,
            gridRowEnd: 7,
            gridColumnEnd: 4,
          });
        break;
      case "a1f4":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 5,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 1,
            gridColumnStart: 1,
            gridRowEnd: 7,
            gridColumnEnd: 5,
          });
        break;
      case "d3e6":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 4,
            gridColumnStart: 3,
            gridRowEnd: 6,
            gridColumnEnd: 7,
          });
        break;
      case "b3c6":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 2,
            gridColumnStart: 3,
            gridRowEnd: 4,
            gridColumnEnd: 7,
          });
        break;
      case "a1f8":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 1,
            gridColumnStart: 1,
            gridRowEnd: 7,
            gridColumnEnd: 9,
          });
        break;
      case "b2e3":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 2,
            gridColumnStart: 2,
            gridRowEnd: 6,
            gridColumnEnd: 4,
          });
        break;
      case "b2e4":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 2,
            gridColumnStart: 2,
            gridRowEnd: 6,
            gridColumnEnd: 5,
          });
        break;
      case "b6e7":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 2,
            gridColumnStart: 6,
            gridRowEnd: 6,
            gridColumnEnd: 8,
          });
        break;
      case "b5e7":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 2,
            gridColumnStart: 5,
            gridRowEnd: 6,
            gridColumnEnd: 8,
          });
        break;
      case "e2e7":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 5,
            gridColumnStart: 2,
            gridRowEnd: 6,
            gridColumnEnd: 8,
          });
        break;
      case "b2b7":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 2,
            gridColumnStart: 2,
            gridRowEnd: 3,
            gridColumnEnd: 8,
          });
        break;
      case "d2e7":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 7,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 4,
            gridColumnStart: 2,
            gridRowEnd: 6,
            gridColumnEnd: 8,
          });
        break;
      case "d1f8":
        (t = {
          gridRowStart: 1,
          gridColumnStart: 1,
          gridRowEnd: 4,
          gridColumnEnd: 9,
        }),
          (n = {
            gridRowStart: 4,
            gridColumnStart: 1,
            gridRowEnd: 7,
            gridColumnEnd: 9,
          });
    }
    return { boxIllustration: t, boxText: n };
  }
  jd(
    '\n.sg1-toast-container {\r\n  --sg1ToastColor1: rgb(49, 49, 49);\r\n  --sg1ToastColor2: rgb(82, 82, 82);\r\n  --sg1ToastColor3: rgb(231, 231, 231);\r\n  --sg1ToastColor4: rgb(0, 0, 0);\r\n\r\n  --sg1ToastBg: 10px;\r\n  --sg1ToastColorText: var(--sg1ToastColor3);\r\n  --sg1ToastPaddingVertical: 10px;\r\n  --sg1ToastPaddingHorizontal: 10px;\r\n  --sg1ToastMargin: 10px;\r\n  --sg1ToastSizeIconLine: 2px;\r\n\r\n  --sg1toastWidth: 300px;\r\n  --maxToastHeight: 600px;\r\n\r\n  --sg1toastFontFamily: monospace;\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: var(--sg1ToastMargin);\r\n  height: 100%;\r\n  transform: translate(100%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  z-index: 100;\n}\n.sg1-toast-container * {\r\n  box-sizing: border-box;\n}\n.sg1-toast {\r\n  min-width: var(--sg1toastWidth);\r\n  max-width: var(--sg1toastWidth);\r\n  margin-bottom: var(--sg1ToastMargin);\r\n  transform: translateX(-100%);\r\n  border-radius: 4px;\r\n  background-color: var(--sg1ToastColor1);\r\n  box-shadow: 0 0 0 1px white;\r\n  animation-name: sg1-fadein;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-out;\r\n  transition: 0.35s opacity;\r\n  transition-timing-function: ease-out;\n}\n@keyframes sg1-fadein {\n0% {\r\n    opacity: 0;\r\n    transform: translate(100%);\r\n    max-height: 0;\n}\n85% {\r\n    opacity: 1;\r\n    transform: translateX(-110%);\r\n    max-height: var(--maxToastHeight);\n}\n100% {\r\n    transform: translateX(-100%);\n}\n}\n.sg1-toast .sg1-head {\r\n  padding: var(--sg1ToastPaddingVertical) var(--sg1ToastPaddingHorizontal);\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\n}\n.sg1-toast .sg1-head .sg1-title {\r\n  font-size: 14px;\r\n  font-family: var(--sg1toastFontFamily);\r\n  color: var(--sg1ToastColorText);\n}\n.sg1-toast .sg1-head .title .sg1-id {\r\n  font-weight: 700;\n}\n.sg1-toast .sg1-content {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  padding: 0 var(--sg1ToastPaddingHorizontal);\r\n  position: relative;\n}\n.sg1-toast.sg1-active .sg1-content {\r\n  padding: var(--sg1ToastPaddingVertical) var(--sg1ToastPaddingHorizontal);\r\n  max-height: var(--maxToastHeight);\r\n  transition-timing-function: ease-out;\r\n  transition: 1s max-height, 0.5s padding;\n}\n.sg1-toast .sg1-content:before {\r\n  content: "";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: var(--sg1ToastColor2);\n}\n.sg1-wrapper-pre {\r\n  width: 100%;\r\n  padding: calc(var(--sg1ToastPaddingVertical) / 2)\r\n    calc(var(--sg1ToastPaddingHorizontal) / 2);\r\n  background-color: var(--sg1ToastColor4);\r\n  border-radius: 4px;\n}\n.sg1-toast .sg1-content pre {\r\n  width: 100%;\r\n  background-color: var(--sg1ToastColor4);\r\n  font-size: 12px;\r\n  font-family: var(--sg1toastFontFamily);\r\n  color: var(--sg1ToastColorText);\r\n\r\n  margin-top: 0;\r\n  margin-bottom: 0;\n}\n.sg1-toast .sg1-close-btn,\r\n.sg1-toast .sg1-expand {\r\n  font-size: 16px;\r\n  min-width: 1em;\r\n  height: 1em;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\n}\n.sg1-toast .sg1-close-btn:after,\r\n.sg1-toast .sg1-close-btn:before {\r\n  content: "";\r\n  position: absolute;\r\n  display: block;\r\n  height: var(--sg1ToastSizeIconLine);\r\n  width: 100%;\r\n  background-color: var(--sg1ToastColor3);\n}\n.sg1-toast .sg1-close-btn:after {\r\n  transform: rotate(45%);\n}\n.sg1-toast .sg1-close-btn:before {\r\n  transform: rotate(-45%);\n}\n.sg1-toast .sg1-close-btn:before {\r\n  transform: translate(-50%, -50%) rotate(45deg);\r\n  top: 50%;\r\n  left: 50%;\n}\n.sg1-toast .sg1-close-btn:after {\r\n  transform: translate(-50%, -50%) rotate(-45deg);\r\n  top: 50%;\r\n  left: 50%;\n}\n.sg1-toast .sg1-expand {\r\n  margin-left: auto;\n}\n.sg1-toast .sg1-expand:after {\r\n  content: "";\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  transform: rotate(45deg) scale(0.5);\r\n  border-top: calc(var(--sg1ToastSizeIconLine) * 2) solid var(--sg1ToastColor3);\r\n  border-right: calc(var(--sg1ToastSizeIconLine) * 2) solid\r\n    var(--sg1ToastColor3);\n}\n.sg1-toast.sg1-active .sg1-expand:after {\r\n  transform: rotate(135deg) scale(0.5);\n}\n.sg1-toast-faded-1 {\r\n  opacity: 0.5;\r\n  pointer-events: none;\n}\n.sg1-toast-faded-2 {\r\n  opacity: 0.25;\n}\n.sg1-toast-faded-3 {\r\n  opacity: 0;\n}\n.sg1-toast.sg1-toast-fade-out {\r\n  animation-name: sg1-fadeout;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-out;\n}\n@keyframes sg1-fadeout {\n0% {\r\n    transform: translateX(-100%);\r\n    max-height: var(--maxToastHeight);\n}\n100% {\r\n    opacity: 0;\r\n    transform: translate(100%);\r\n    max-height: 0;\n}\n}\r\n'
  ),
    (xp.render = function (e, t, n, o, s, r) {
      return e.toasts.length
        ? (ds(),
          ys("div", wp, [
            (ds(!0),
            ys(
              rs,
              null,
              Bs(
                e.toasts,
                (t, n) => (
                  ds(),
                  ys(
                    "div",
                    {
                      key: t.id,
                      class: u([
                        {
                          "sg1-active": t.expanded,
                          "sg1-toast-faded-1":
                            e.toasts.length - n > e.tostToSee,
                          "sg1-toast-faded-2":
                            e.toasts.length - n > e.tostToSee + 1,
                          "sg1-toast-faded-3":
                            e.toasts.length - n > e.tostToSee + 2,
                          "sg1-toast-fade-out": t.isUnmountening,
                        },
                        "sg1-toast",
                      ]),
                      cose: e.toasts.length - n,
                    },
                    [
                      Ts("div", Sp, [
                        Ts(
                          "span",
                          { class: "sg1-title", innerHTML: t.title },
                          null,
                          8,
                          Cp
                        ),
                        Ts(
                          "div",
                          {
                            onClick: (n) => e.expandToast(t.id),
                            class: "sg1-expand",
                          },
                          null,
                          8,
                          Tp
                        ),
                        Ts(
                          "div",
                          {
                            onClick: (n) => e.removeToast(t.id),
                            class: "sg1-close-btn",
                          },
                          null,
                          8,
                          Ep
                        ),
                      ]),
                      Ts("div", kp, [
                        Ts("div", Op, [Ts("pre", null, y(t.content), 1)]),
                      ]),
                    ],
                    10,
                    _p
                  )
                )
              ),
              128
            )),
          ]))
        : Ns("", !0);
    });
  var Rp = Bn({
    name: "game",
    components: {
      boxillustration: Od,
      boxText: up,
      PreCachedImg: dp,
      Spinner: yp,
      ToastContainer: xp,
    },
    props: {
      editorUsage: { type: Boolean, default: !0 },
      disableIlustration: { type: Boolean, default: !1 },
      langStory: { type: String, default: "null-lang" },
      langEditor: { type: String, default: "en" },
      strings: {
        type: Object,
        default: {
          wrongTabsId: { en: "wrong tabs id", it: "id tabs sbagliato" },
          noData: {
            en: "No data appears to be present at the moment",
            it: "Al momento non sembra essere presente alcun dato",
          },
          noStart: {
            en: "A node has not been selected to start the story from",
            it: "Non è stato selezionato un nodo da cui iniziare la storia",
          },
          noEnd: {
            en: "an end node has not been inserted",
            it: "non è stato inserito un nodo finale",
          },
          nodeBadMix: {
            it: "La lista di nodi risultanti non è corretta (id nodi da scollegare:",
            en: "the resulting list of nodes is incorrect (id nodes to be disconnected:",
          },
          expressionIncoplete: {
            it: "l'espressione usata è incopleta",
            en: "the expression used is incomplete",
          },
          linkNodeEmpty: {
            it: "Il nodo link è vuoto",
            en: "The link node is empty",
          },
          redirectError: {
            it: "Non sono stati specificati alcuni nodi di destinazione",
            en: "Some target nodes were not specified",
          },
          urlRedirect: { it: "Reindirizzamento a", en: "Redirect to" },
        },
      },
      gameData: {
        type: Object,
        default: {
          postInfo: {
            title: "Placeholder",
            lenghtDescriptionsNode: 400,
            lenghtChoseNode: 20,
            selectedWorkSpace: 1,
            privateLink: !1,
            langList: ["it", "en"],
            templateSelected: "White",
          },
          erorList: { noStart: !1 },
          MaxId: 16,
          levels: [],
          achievements: [],
          items: [],
          stats: [],
          story: {
            tabs: [
              {
                id: 1,
                humanName: { default: "start" },
                level: 0,
                name: "start",
                type: "start",
                gameStart: !0,
                levelStart: !1,
                x: 607,
                y: 68.8125,
              },
              {
                id: 2,
                humanName: { default: "text", textImage: "text & image" },
                level: 0,
                name: "descriptions0",
                text: {
                  it: "Questa è una storia segnaposto, sei interessato a proseguire?",
                  en: "This is a placeholder story",
                },
                type: "descriptions",
                img: {
                  ID: 1315,
                  srcFull: [
                    "https://storygroundeditor.com/media-placeholder.jpg",
                    1920,
                    1080,
                    !1,
                  ],
                  srcThumbnail: [
                    "https://storygroundeditor.com/media-placeholder.jpg",
                    150,
                    150,
                    !0,
                  ],
                  post_name: "29695f55c408397b6eeb453fb59d40d9_img-1",
                },
                save: !1,
                textRevision: !1,
                x: 576,
                y: 189.8125,
              },
              {
                id: 4,
                humanName: { default: "choice" },
                level: 0,
                name: "chose0",
                text: { it: "si", en: "yes" },
                type: "chose",
                textRevision: !1,
                x: 480,
                y: 531.8125,
              },
              {
                id: 5,
                humanName: { default: "choice" },
                level: 0,
                name: "chose1",
                text: { it: "no", en: "no" },
                type: "chose",
                textRevision: !1,
                x: 781,
                y: 595.8125,
              },
              {
                id: 10,
                humanName: { default: "text", textImage: "text & image" },
                level: 0,
                name: "descriptions1",
                text: {
                  it: "Non c'è molto altro da dire, come ti ho detto...",
                  en: "There isn't much more to say, as I told you...\r",
                },
                type: "descriptions",
                img: !1,
                save: !1,
                textRevision: !1,
                x: 473,
                y: 681.8125,
              },
              {
                id: 11,
                humanName: { default: "null" },
                level: 0,
                type: "null",
                x: 149,
                y: 319.8125,
                name: "null0",
              },
              {
                id: 15,
                humanName: { default: "end" },
                level: 0,
                name: "end0",
                type: "end",
                text: { it: "Allora esci da questa pagina", en: "" },
                img: !1,
                textRevision: !1,
                x: 884,
                y: 839.8125,
                openNewPage: !1,
                url: { it: "", en: "" },
              },
            ],
            beams: [
              { id: 3, from: 1, to: 2 },
              { id: 8, from: 2, to: 4 },
              { id: 9, from: 2, to: 5 },
              { id: 12, from: 10, to: 11 },
              { id: 13, from: 11, to: 2 },
              { id: 14, from: 4, to: 10 },
              { id: 16, from: 5, to: 15 },
            ],
          },
          style: {
            "font-family": "Montserrat",
            "font-weight": [100, 200, 300, 400, 500, 600],
            "font-weight-selected": 500,
            "img-sizes": [
              { width: 800, height: 600 },
              { width: 1200, height: 992 },
              { width: 1920, height: 1080 },
            ],
            "bg-color": "#ffffff",
            "bg-type": "minimal2",
            color: "#282828",
            "icon-single-arrow": {
              type: "minimal2",
              size: "35px",
              color: "#282828",
            },
            "icon-multiple-arrow": {
              type: "minimal1",
              size: "12px",
              color: "#282828",
            },
            desktop: {
              "font-size-1": "20px",
              margin: "50px",
              "box-text-padding": "25px",
              "layout-type": "a6f8",
            },
            mobile: {
              "font-size-1": "18px",
              margin: "100px",
              "box-text-padding": "5vw",
              "layout-type": "d1f8",
            },
          },
        },
      },
      indexMedia: {
        type: Object,
        default: [{ Id: 1315, name: "29695f55c408397b6eeb453fb59d40d9_img-1" }],
      },
      pathMediaDir: { type: String, default: "http://your-website/media" },
      width: { type: String, default: "100vw" },
      height: { type: String, default: "100vh" },
      stopLink: { type: Boolean, default: !1 },
      useTheme: { type: Boolean, default: !0 },
      canEmit: { type: Boolean, default: !0 },
      showToast: { type: Boolean, default: !1 },
    },
    emits: [
      "functionToEmitByTabs",
      "functionToEmitOnInit",
      "functionToEmitBeforeNavigation",
      "functionToEmitAfterNavigation",
    ],
    data: function () {
      return {
        initialized: !1,
        stepToInit: { font: !1, img: !1 },
        preCachedImgList: [],
        lang: !1,
        textualTabs: ["descriptions", "chose", "game over"],
        playerState: "playing",
        player: { item: [] },
        currentTabs: [],
        nextTabsChose: [],
        illustration: !1,
        onRunError: [],
        listBadMixId: "",
        isBadNodeMixForCose: [],
        gameLoaded: !1,
        device: !1,
        goToLink: !1,
        urlToShow: !1,
      };
    },
    watch: {
      narrationBox: function (e) {
        "node-bad-mix" == e && this.setListBadMixId();
      },
      stepToInit: {
        handler() {
          this.stepToInit.font && this.stepToInit.img
            ? ((this.initialized = !0), this.$emit("functionToEmitOnInit"))
            : (this.initialized = !1);
        },
        deep: !0,
      },
      gameData: {
        handler() {
          this.LoadFont();
        },
        deep: !0,
      },
      playerState: function (e) {
        "game end" == e && this.goToLink && (this.initialized = !1);
      },
      currentTabs: {
        handler() {
          this.$emit("functionToEmitAfterNavigation");
        },
        deep: !0,
      },
    },
    computed: {
      narrationBox: function () {
        if (this.onRunError.length > 0) return "false";
        if (this.currentTabs.length > 0) {
          if (1 == this.currentTabs.length) return this.currentTabs[0].type;
          {
            let e = ["chose"];
            return this.currentTabs.filter((t) => e.includes(t.type)).length ==
              this.currentTabs.length
              ? "default"
              : "node-bad-mix";
          }
        }
        return !1;
      },
      stylesObj: function () {
        if (this.useTheme) {
          if (this.device) {
            let e,
              t = {
                width: this.width,
                height: this.height,
                gridTemplateColumns:
                  this.gameData.style[this.device].margin +
                  " repeat(6, 1fr) " +
                  this.gameData.style[this.device].margin,
                gridTemplateRows:
                  this.gameData.style[this.device].margin +
                  " repeat(4, 1fr) " +
                  this.gameData.style[this.device].margin,
              };
            e =
              1 == this.disableIlustration
                ? Ip("a1f8")
                : Ip(this.gameData.style[this.device]["layout-type"]);
            let n,
              o = { ...e.boxIllustration },
              s = { ...e.boxText },
              r = {
                padding: this.gameData.style[this.device]["box-text-padding"],
              };
            n =
              7 != s.gridRowEnd && 1 != s.gridRowStart
                ? "(( " +
                  this.height +
                  " - (" +
                  this.gameData.style[this.device].margin +
                  "+" +
                  this.gameData.style[this.device].margin +
                  "))/4) * (" +
                  s.gridRowEnd +
                  " - " +
                  s.gridRowStart +
                  ")"
                : this.height;
            let i =
                "calc( " +
                n +
                " - " +
                this.gameData.style[this.device]["box-text-padding"] +
                " - " +
                this.gameData.style[this.device]["box-text-padding"] +
                " - ( + " +
                this.gameData.style[this.device]["box-text-padding"] +
                " + " +
                this.gameData.style["icon-single-arrow"].size +
                "))",
              a = { maxHeight: i, minHeight: i },
              c = this.gameData.style["font-family"],
              l = { fontFamily: this.gameData.style["font-family"] },
              u = this.gameData.style["font-weight"],
              d = { fontWeight: this.gameData.style["font-weight-selected"] },
              p = { color: this.gameData.style.color },
              f = { fontSize: this.gameData.style[this.device]["font-size-1"] },
              h = this.gameData.style["icon-single-arrow"],
              g = this.gameData.style["icon-multiple-arrow"],
              m = {
                paddingTop:
                  this.gameData.style[this.device]["box-text-padding"],
              },
              y = {
                paddingBottom:
                  this.gameData.style[this.device]["box-text-padding"],
              },
              v = {
                bgType: this.gameData.style["bg-type"],
                bgColor: this.gameData.style["bg-color"],
              };
            return {
              gameGrid: t,
              layoutID: this.gameData.style[this.device]["layout-type"],
              boxIllustration: o,
              boxText: s,
              fontName: c,
              commonFontFamily: l,
              boxTextPadding: r,
              fontWeightList: u,
              fontWeightListSelected: d,
              fontColor: p,
              fontSize1: f,
              iconSingleArrow: h,
              iconMultipleArrow: g,
              paddingTopNextTab: m,
              paddingBottomNextTab: y,
              tabResultsMaxHeight: a,
              bgStyle: v,
            };
          }
          return !1;
        }
        return !1;
      },
      logMessage: function () {
        return !(
          "false" != this.narrationBox &&
          "node-bad-mix" != this.narrationBox &&
          !this.urlToShow
        );
      },
    },
    mounted() {
      "null-lang" !== this.langStory
        ? (this.lang = this.langStory)
        : (this.lang = this.gameData.postInfo.langList[0]),
        this.gameIntentLoad();
    },
    created() {
      this.init(), window.addEventListener("resize", this.setDevice);
    },
    destroyed() {
      window.removeEventListener("resize", this.setDevice);
    },
    methods: {
      gameIntentLoad() {
        (this.playerState = "playing"),
          (this.player = { stats: [], item: [] }),
          this.gameData.stats &&
            this.gameData.stats.forEach((e) => {
              let t = Gd(e);
              (t.level = 0), this.player.stats.push(t);
            }),
          this.setPlayerItemFiltered();
        let e = [],
          t = this.gameData.story.tabs.find((e) => e.gameStart);
        if (t) e.push(t.id), this.navigation(e);
        else {
          let e = this.strings.noStart[this.langEditor];
          this.onRunError.push(e);
        }
      },
      navigation(e) {
        this.$emit("functionToEmitBeforeNavigation");
        let t = this.gameData.story.tabs.filter((t) => e.includes(t.id)),
          n = this.ResoveTabsList(t);
        if (0 == n.length && "game end" != this.playerState) {
          let e = this.strings.wrongTabsId[this.langEditor];
          this.onRunError.push(e), (this.nextTabsChose = []);
        } else {
          if (1 == n.length) {
            this.singleBeemFoward = !0;
            let e = [],
              t = !1,
              o = !1;
            this.gameData.story.beams.forEach((t) => {
              if (n[0].id == t.from) {
                let n = this.gameData.story.tabs.find((e) => e.id == t.to);
                e.push(n);
              }
            }),
              (this.isBadNodeMixForCose = []);
            let s = this.ResoveTabsList(e, !0);
            1 == s.length
              ? ("descriptions" != s[0].type && "game over" != s[0].type) ||
                (o = !0)
              : s.forEach((e) => {
                  "chose" != e.type && (t = !0);
                }),
              o
                ? (this.nextTabsChose = [])
                : t
                ? ((this.narrationBox = "node-bad-mix"),
                  this.setListBadMixId(),
                  (this.nextTabsChose = []))
                : (this.nextTabsChose = s),
              n[0].img && this.setImage(n[0].img),
              1 == n[0].save && this.saveData();
          } else {
            this.singleBeemFoward = !1;
            let e = !0;
            n.forEach((t) => {
              "chose" != t.type && (e = !1);
            }),
              e && (this.nextTabsChose = []);
          }
          this.currentTabs = n;
        }
      },
      ResoveTabsList(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = !1,
          o = 0;
        const s = this.textualTabs;
        let r = e;
        for (; 0 == n; ) {
          o++;
          let e = !0,
            i = [];
          r.forEach((n) => {
            if (s.includes(n.type)) {
              let e = !0;
              t && "playing" != this.playerState && (e = !1), e && i.push(n);
            } else (e = !1), (i = [...i, ...this.ResoveTab(n, t)]);
          }),
            (r = i),
            (1 == e || o >= 100) && (n = !0);
        }
        return r;
      },
      ResoveTab(e, t) {
        function n(e, t, n) {
          const o = parseInt(e),
            s = parseInt(n);
          switch (t) {
            case ">":
              return o > s;
            case ">=":
              return o >= s;
            case "<":
              return o < s;
            case "<=":
              return o <= s;
            case "==":
              return o == s;
          }
        }
        let o,
          s = [],
          r = !1;
        switch (
          ((o =
            "object" == typeof e
              ? e
              : this.gameData.story.tabs.find((t) => t.id == e)),
          console.log("type: " + o.type + "------------------------"),
          o.type)
        ) {
          case "start":
            break;
          case "descriptions":
          case "chose":
            s.push(o), (r = !0);
            break;
          case "game over":
            t || ((this.playerState = "game over"), s.push(o)), (r = !0);
            break;
          case "end":
            t
              ? (r = !0)
              : ((this.playerState = "game end"),
                o.openNewPage
                  ? ((this.goToLink = !0),
                    this.stopLink
                      ? (this.urlToShow =
                          this.strings.urlRedirect[this.langEditor] +
                          ": " +
                          o.url[this.lang])
                      : window.open(o.url[this.lang], "_self"))
                  : (s.push(o), (r = !0)));
            break;
          case "redirect":
            let e = !1;
            if (
              (o.listRedirectId.length > 0
                ? o.listRedirectId.forEach((t) => {
                    t || (e = !0);
                  })
                : (e =
                    this.strings.linkNodeEmpty[this.langEditor] +
                    " ( ID: " +
                    o.id +
                    " )"),
              0 == e)
            ) {
              let e;
              if (1 == o.listRedirectId.length) e = o.listRedirectId[0];
              else {
                let t =
                  (0,
                  (i = o.listRedirectId.length - 1),
                  Math.floor(Math.random() * (i - 0 + 1) + 0));
                e = o.listRedirectId[t];
              }
              let t = this.gameData.story.tabs.find((t) => t.id == e);
              o = t;
            } else {
              let e =
                this.strings.redirectError[this.langEditor] +
                " ( ID: " +
                o.id +
                " )";
              this.onRunError.push(e), (r = !0);
            }
            e && (this.onRunError.push(e), (r = !0));
            break;
          case "set stat":
            if (!t) {
              let e = this.gameData.stats.find((e) => e.id == o.idStat);
              if (e)
                if (0 == e.length || 0 == o.operator) {
                  let e =
                    this.strings.expressionIncoplete[this.langEditor] +
                    " ( ID: " +
                    o.id +
                    " )";
                  this.onRunError.push(e), (r = !0);
                } else this.modifyStat(o.idStat, o.operator, o.ammount);
              else {
                let e =
                  this.strings.expressionIncoplete[this.langEditor] +
                  " ( ID: " +
                  o.id +
                  " )";
                this.onRunError.push(e), (r = !0);
              }
            }
            break;
          case "set object":
            if (!t) {
              let e = this.gameData.items.find((e) => e.id == o.idObject);
              if (e)
                if (0 == e.length || 0 == o.operator) {
                  let e =
                    this.strings.expressionIncoplete[this.langEditor] +
                    " ( ID: " +
                    o.id +
                    " )";
                  this.onRunError.push(e), (r = !0);
                } else this.modifyItem(o.idObject, o.operator, o.ammount);
              else {
                let e =
                  this.strings.expressionIncoplete[this.langEditor] +
                  " ( ID: " +
                  o.id +
                  " )";
                this.onRunError.push(e), (r = !0);
              }
            }
            break;
          case "if stat":
            let a = this.player.stats.find((e) => e.id == o.idStat);
            if (a)
              if (!1 === o.ammount || null == o.ammount || 0 == o.operator) {
                let e =
                  this.strings.expressionIncoplete[this.langEditor] +
                  " ( ID: " +
                  o.id +
                  " )";
                this.onRunError.push(e), (r = !0);
              } else if (n(a.level, o.operator, o.ammount)) {
                let e = this.gameData.story.tabs.filter((e) =>
                  o.trueId.includes(e.id)
                );
                (s = e), (r = !0);
              } else {
                let e = this.gameData.story.tabs.filter((e) =>
                  o.falseId.includes(e.id)
                );
                (s = e), (r = !0);
              }
            else {
              let e =
                this.strings.expressionIncoplete[this.langEditor] +
                " ( ID: " +
                o.id +
                " )";
              this.onRunError.push(e), (r = !0);
            }
            break;
          case "if item":
            let c = this.player.item.filter((e) => e.id == o.idObject).length,
              l = this.gameData.items.find((e) => e.id == o.idObject);
            if (l)
              if (0 == l.length || 0 == o.operator) {
                let e =
                  this.strings.expressionIncoplete[this.langEditor] +
                  " ( ID: " +
                  o.id +
                  " )";
                this.onRunError.push(e), (r = !0);
              } else if (n(c, o.operator, o.ammount)) {
                let e = this.gameData.story.tabs.filter((e) =>
                  o.trueId.includes(e.id)
                );
                (s = e), (r = !0);
              } else {
                let e = this.gameData.story.tabs.filter((e) =>
                  o.falseId.includes(e.id)
                );
                (s = e), (r = !0);
              }
            else {
              let e =
                this.strings.expressionIncoplete[this.langEditor] +
                " ( ID: " +
                o.id +
                " )";
              this.onRunError.push(e), (r = !0);
            }
            break;
          case "image":
            t || this.setImage(o.img);
            break;
          case "emit_function":
            t ||
              (this.canEmit && this.$emit("functionToEmitByTabs", o.objToEmit),
              this.showToast &&
                this.$refs.ToastContainerRef.addToast({
                  type: o.type.replaceAll(" ", "_"),
                  title:
                    o.humanName.default +
                    ' <span class="sg1-id">ID: ' +
                    o.id +
                    "</span>",
                  content: o.objToEmit,
                }));
        }
        var i;
        return (
          0 == r &&
            (this.gameData.story.beams.forEach((e) => {
              o.id == e.from && s.push(e.to);
            }),
            (r = !0)),
          s
        );
      },
      modifyStat(e, t, n) {
        let o,
          s,
          r = this.gameData.stats.find((t) => t.id == e),
          i = this.player.stats.find((t) => t.id == e);
        switch (t) {
          case "+":
            (o = n), (s = 1);
            break;
          case "-":
            (o = n), (s = 2);
            break;
          case "*":
            (o = parseInt(i.level) * parseInt(n)), (s = 1);
            break;
          case "/":
            (o = Math.floor(parseInt(i.level) / parseInt(n))), (s = 2);
            break;
          case "=":
            (o = n), (s = 5);
        }
        1 == s && (i.level = parseInt(i.level) + parseInt(o)),
          2 == s && (i.level = parseInt(i.level) - parseInt(o)),
          5 == s && (i.level = o),
          i.level > r.max && (i.level = r.max),
          i.level < 0 && !isNaN(i.level) && (i.level = 0);
      },
      modifyItem(e, t, n) {
        const o = this.gameData.items.find((t) => t.id == e),
          s = this.player.item.filter((e) => e.id == o.id).length;
        let r, i;
        switch (t) {
          case "+":
            (r = n), (i = 1);
            break;
          case "-":
            (r = n), (i = 2);
            break;
          case "*":
            (r = parseInt(s) * parseInt(n)), (i = 1);
            break;
          case "/":
            (r = parseInt(s) - Math.floor(parseInt(s) / parseInt(n))), (i = 2);
            break;
          case "=":
            n < s ? ((r = s - n), (i = 2)) : ((r = n - s), (i = 1));
        }
        if (1 == i) for (let e = 0; e < r; e++) this.player.item.push(o);
        if (2 == i) {
          let e = [],
            t = 0;
          this.player.item.forEach((n) => {
            o.id == n.id ? (t++, t <= s - r && e.push(n)) : e.push(n);
          }),
            (this.player.item = e);
        }
        this.setPlayerItemFiltered();
      },
      reedBeams(e) {
        let t = [];
        this.gameData.story.beams.forEach((n) => {
          e == n.from && t.push(n.to);
        }),
          this.navigation(t);
      },
      saveData() {},
      setImage(e) {
        this.illustration = e;
      },
      animatePaperSelector() {
        1 == this.hoveCharacterSheet &&
          ("stats" == this.subTabCharacterSheet
            ? this.player.stats.forEach((e) => {
                e.id == this.seletedItem
                  ? (e.active = 2)
                  : 0 != e.active && (e.active = 1);
              })
            : this.playerItemFiltered.forEach((e) => {
                e.id == this.seletedItem
                  ? (e.active = 2)
                  : 0 != e.active && (e.active = 1);
              }));
      },
      clearAnimatePaperSelector() {
        this.player.stats.forEach((e) => {
          e.active = 0;
        }),
          this.player.item.forEach((e) => {
            e.active = 0;
          });
      },
      setDescriptionPaper(e) {
        (this.seletedItem = e.id),
          this.animatePaperSelector(),
          (this.descriptionPaperName = e.name[this.lang]),
          (this.descriptionPaperDescription = e.description[this.lang]),
          (this.oldItemTap = this.itemTap),
          (this.itemTap = this.itemTap + 1),
          setTimeout(() => {
            0 == this.itemTap &&
              ((this.seletedItem = !1), this.animatePaperSelector());
          }, 4e3);
      },
      setPlayerItemFiltered() {
        let e = [];
        this.player.item.forEach((t) => {
          if (null == e.find((e) => e.id == t.id)) {
            let n = this.player.item.filter((e) => e.id == t.id).length,
              o = Object.assign({}, t);
            (o.amount = n), e.push(o);
          }
        }),
          (this.playerItemFiltered = e);
      },
      setListBadMixId() {
        let e = "",
          t = this.currentTabs.filter((e) => "descriptions" == e.type);
        t.forEach((n, o) => {
          (e += n.id), o + 1 < t.length && (e += ", ");
        }),
          (this.listBadMixId = e);
      },
      activateDemo() {
        !(function (e) {
          var t =
            e.requestFullScreen ||
            e.webkitRequestFullScreen ||
            e.mozRequestFullScreen ||
            e.msRequestFullScreen;
          if (t) t.call(e);
          else if (void 0 !== window.ActiveXObject) {
            var n = new ActiveXObject("WScript.Shell");
            null !== n && n.SendKeys("{F11}");
          }
        })(document.body);
      },
      init() {
        this.useTheme
          ? (this.setDevice(), this.LoadFont())
          : (this.stepToInit.font = !0),
          console.log(this.preCachedImgList),
          this.setPreCacheImgList(),
          0 == this.preCachedImgList.length && (this.stepToInit.img = !0);
      },
      LoadFont() {
        (this.stepToInit.font = !1),
          kd.load({
            google: {
              families: [
                this.stylesObj.fontName +
                  ":" +
                  this.stylesObj.fontWeightList.join(),
              ],
            },
            active: () => {
              this.stepToInit.font = !0;
            },
            inactive: () => {
              this.stepToInit.font = !0;
            },
          });
      },
      setPreCacheImgList() {
        this.gameData.story.tabs.forEach((e) => {
          if (e.img)
            if (this.editorUsage) this.preCachedImgList.push(e.img.srcFull[0]);
            else {
              let t = {},
                n = this.indexMedia.find((t) => t.Id == e.img.ID).name,
                o = this.pathMediaDir + "/" + n,
                s = this.gameData.style["img-sizes"];
              s.forEach((e, n) => {
                (t.srcset =
                  t.srcset +
                  o +
                  "-" +
                  e.width +
                  "x" +
                  e.height +
                  ".jpg " +
                  e.width +
                  "w"),
                  n + 1 != s.length && (t.srcset = t.srcset + ","),
                  n + 1 != s.length
                    ? (t.sizes =
                        t.sizes +
                        "( max-width:" +
                        e.width +
                        "px ) " +
                        e.width +
                        "px, ")
                    : (t.sizes = t.sizes + e.width + "px"),
                  (t.src =
                    o +
                    "-" +
                    s[s.length - 1].width +
                    "x" +
                    s[s.length - 1].height +
                    ".jpg");
              }),
                this.preCachedImgList.push(t);
            }
        });
      },
      setImgsLoaded() {
        this.stepToInit.img = !0;
      },
      setDevice() {
        window.innerWidth > 992
          ? (this.device = "desktop")
          : (this.device = "mobile");
      },
      getPlayerValues() {
        return this.player.stats;
      },
      getCurrentTabValues() {
        return this.currentTabs;
      },
      setStartPoint(e) {
        let t;
        (t =
          "string" == typeof e
            ? this.gameData.story.tabs.find((t) => t.name == e)
            : this.gameData.story.tabs.find((t) => t.id == e)),
          t && this.navigation([t.id]);
      },
      setPlayerValues(e) {
        this.player.stats = e;
      },
      setPlayerValues(e) {
        this.player.stats = e;
      },
    },
  });
  const Np = { key: 2, class: "sg1-log-app" },
    jp = { key: 0, class: "sg1-game-error sg1-e-1" },
    Lp = { key: 1, class: "sg1-game-error sg1-e-3" },
    Mp = { key: 2, class: "sg1-game-message sg1-e-4" },
    Pp = { key: 5, class: "sg1-load-screen" };
  jd(
    '\nbody {\r\n  margin: 0;\n}\n.sg1-no-theme :where(.sg1-label-description) {\r\n  margin-bottom: 30px;\n}\n.sg1-no-theme :where(.sg1-wrapper-box-text) {\r\n  grid-column: 1/3;\r\n  padding: 20px;\r\n  background-color: whitesmoke;\n}\n.sg1-no-theme :where(.sg1-tab-results) {\r\n  font-family: monospace;\r\n  font-size: 16px;\r\n  color: grey;\n}\n.sg1-no-theme:is(.sg1-game-grid) {\r\n  max-width: calc(100% - 50px);\r\n  max-width: 992px;\r\n  aspect-ratio: 3/2;\r\n  max-height: calc(100vh - 50px);\r\n  margin-top: 25px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  display: grid;\r\n  grid-template-rows: 70% 30%;\r\n  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);\n}\n.sg1-no-theme:is(.sg1-game-grid):is(.sg1-no-illustration) {\r\n  grid-template-rows: 100% 0;\n}\n.sg1-no-theme :where(.sg1-label-multiple-chose) {\r\n  max-width: calc(100% - 25px);\r\n  margin-left: 25px;\n}\n.sg1-no-theme :where(.list-item):before {\r\n  content: "◆";\r\n  display: inline-block;\r\n  margin-right: 10px;\n}\n.sg1-no-theme :where(.sg1-single-beem-icon) {\r\n  cursor: pointer;\r\n  font-size: 12px;\r\n  width: 2em;\r\n  height: 2em;\r\n  position: relative;\n}\n.sg1-no-theme :where(.sg1-single-beem-icon):before {\r\n  content: "";\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 1em 1em 0 1em;\r\n  border-color: grey transparent transparent transparent;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\n.sg1-no-theme :where(.sg1-box-illustration) {\r\n  grid-column: 1/3;\r\n  grid-row: 1/1;\n}\n.sg1-no-theme :where(img) {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\n}\n.sg1-game-grid:is(.sg1-toast-wrapper) {\r\n  position: relative;\r\n  overflow: hidden;\n}\r\n'
  ),
    jd(
      "\n.sg1-game-grid[data-v-264c4d09]:not(.sg1-no-theme) {\r\n  display: grid;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  background-color: #282828;\n}\n.sg1-load-screen[data-v-264c4d09] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\n}\n.sg1-log-app[data-v-264c4d09] {\r\n  grid-row-start: 1;\r\n  grid-column-start: 1;\r\n  grid-row-end: 7;\r\n  grid-column-end: 9;\r\n  flex-direction: column;\r\n  max-width: 100% !important;\r\n  overflow: hidden;\r\n\r\n  background-color: #282828;\r\n  z-index: 100;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\n}\n.sg1-log-app > *[data-v-264c4d09] {\r\n  font-size: 15px;\r\n  max-width: 100%;\r\n  padding-right: 20px;\r\n  padding-left: 20px;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-family: monospace;\n}\n.sg1-game-error[data-v-264c4d09] {\r\n  color: #ed6767;\n}\n.sg1-game-message[data-v-264c4d09] {\r\n  color: #67ed72;\n}\r\n"
    ),
    (Rp.render = function (e, t, n, o, s, r) {
      const a = Qo("boxillustration"),
        c = Qo("boxText"),
        l = Qo("ToastContainer"),
        d = Qo("PreCachedImg"),
        p = Qo("Spinner");
      return e.stylesObj || 0 == e.useTheme
        ? (ds(),
          ys(
            "div",
            {
              key: 0,
              style: i(e.stylesObj.gameGrid),
              class: u([
                {
                  "sg1-no-theme": !e.stylesObj,
                  "sg1-no-illustration":
                    0 == e.disableIlustration || !e.illustration,
                  "sg1-toast-wrapper": e.showToast,
                },
                "sg1-game-grid",
              ]),
            },
            [
              0 == e.disableIlustration &&
              e.illustration &&
              e.initialized &&
              !e.logMessage
                ? (ds(),
                  vs(
                    a,
                    {
                      key: 0,
                      editorUsage: e.editorUsage,
                      illustration: e.illustration,
                      indexMedia: e.indexMedia,
                      pathMediaDir: e.pathMediaDir,
                      style: i(e.gameData.style),
                      stylesObj: e.stylesObj,
                    },
                    null,
                    8,
                    [
                      "editorUsage",
                      "illustration",
                      "indexMedia",
                      "pathMediaDir",
                      "style",
                      "stylesObj",
                    ]
                  ))
                : Ns("", !0),
              e.initialized &&
              !1 !== e.narrationBox &&
              "node-bad-mix" !== e.narrationBox &&
              !e.logMessage
                ? (ds(),
                  vs(
                    c,
                    {
                      key: 1,
                      narrationBox: e.narrationBox,
                      lang: e.lang,
                      "current-tabs": e.currentTabs,
                      nextTabsChose: e.nextTabsChose,
                      stylesObj: e.stylesObj,
                      onReedBeams: e.reedBeams,
                      onGameIntentLoad: e.gameIntentLoad,
                    },
                    null,
                    8,
                    [
                      "narrationBox",
                      "lang",
                      "current-tabs",
                      "nextTabsChose",
                      "stylesObj",
                      "onReedBeams",
                      "onGameIntentLoad",
                    ]
                  ))
                : Ns("", !0),
              e.logMessage
                ? (ds(),
                  ys("div", Np, [
                    0 == e.narrationBox && 0 == e.onRunError.length
                      ? (ds(),
                        ys("div", jp, y(e.strings.noEnd[e.langEditor]), 1))
                      : Ns("", !0),
                    (ds(!0),
                    ys(
                      rs,
                      null,
                      Bs(
                        e.onRunError,
                        (e, t) => (
                          ds(),
                          ys(
                            "div",
                            { key: t, class: "sg1-game-error sg1-e-2" },
                            y(e),
                            1
                          )
                        )
                      ),
                      128
                    )),
                    "node-bad-mix" == e.narrationBox
                      ? (ds(),
                        ys(
                          "div",
                          Lp,
                          y(e.strings.nodeBadMix[e.langEditor]) +
                            " " +
                            y(e.listBadMixId) +
                            " ) ",
                          1
                        ))
                      : Ns("", !0),
                    e.urlToShow
                      ? (ds(), ys("div", Mp, y(e.urlToShow), 1))
                      : Ns("", !0),
                  ]))
                : Ns("", !0),
              e.showToast
                ? (ds(), vs(l, { key: 3, ref: "ToastContainerRef" }, null, 512))
                : Ns("", !0),
              e.preCachedImgList
                ? (ds(),
                  vs(
                    d,
                    {
                      key: 4,
                      editorUsage: e.editorUsage,
                      preCachedImgList: e.preCachedImgList,
                      onSetImgsLoaded: e.setImgsLoaded,
                    },
                    null,
                    8,
                    ["editorUsage", "preCachedImgList", "onSetImgsLoaded"]
                  ))
                : Ns("", !0),
              e.initialized ? Ns("", !0) : (ds(), ys("div", Pp, [Es(p)])),
            ],
            6
          ))
        : Ns("", !0);
    }),
    (Rp.__scopeId = "data-v-264c4d09"),
    (Element.prototype.StoryGround = function (e) {
      let t = {
        name: "StoryGround",
        data: () => ({ objSettings: e, idStory: !1 }),
        mounted() {
          let t = 0;
          e.id && (t = e.id),
            (this.idStory = t),
            window.addEventListener("getPlayerValues" + this.idStory, (e) => {
              localStorage.setItem(
                "sg1Storage" + this.idStory,
                JSON.stringify([{ val1: !0, val2: "ciaone" }])
              );
            }),
            window.addEventListener(
              "getCurrentTabValues" + this.idStory,
              (e) => {
                localStorage.setItem(
                  "sg1Storage" + this.idStory,
                  JSON.stringify([{ val1: !1, val2: "ciaone4" }])
                );
              }
            ),
            window.addEventListener("setStartPoint" + this.idStory, (e) => {
              let t = JSON.parse(localStorage["sg1Storage" + this.idStory]);
              console.log("NUOVO VALORE 2"),
                console.log(t, localStorage["sg1Storage" + this.idStory]),
                localStorage.removeItem("sg1Storage" + this.idStory);
            }),
            window.addEventListener("setPlayerValues" + this.idStory, (e) => {
              let t = JSON.parse(localStorage["sg1Storage" + this.idStory]);
              console.log("NUOVO VALORE 4"),
                console.log(t, localStorage["sg1Storage" + this.idStory]),
                localStorage.removeItem("sg1Storage" + this.idStory);
            });
        },
        components: { game: Rp },
        template:
          '\n      <game \n        v-bind:sg1-id-stroy="idStory"\n        v-bind:editorUsage="objSettings.editorUsage"\n        v-bind:langStory="objSettings.langStory"\n        v-bind:langEditor="objSettings.langEditor"\n        v-bind:strings="objSettings.strings"\n        v-bind:gameData="objSettings.gameData"\n        v-bind:indexMedia="objSettings.indexMedia"\n        v-bind:pathMediaDir="objSettings.pathMediaDir"\n        v-bind:disableIlustration="objSettings.disableIlustration"\n        v-bind:stopLink="objSettings.stopLink"\n        v-bind:width="objSettings.width"\n        v-bind:height="objSettings.height"\n        v-bind:useTheme="objSettings.useTheme"\n        v-bind:canEmit="objSettings.canEmit"\n        v-bind:showToast="objSettings.showToast"\n        v-on:functionToEmitByTabs="objSettings.EmitByTabs ? objSettings.EmitByTabs() : false"\n        v-on:functionToEmitOnInit="objSettings.OnInit ? objSettings.OnInit() : false"\n        v-on:functionToEmitBeforeNavigation = " objSettings.beforeNavigation ? objSettings.beforeNavigation() : false "\n        v-on:functionToEmitAfterNavigation = " objSettings.afterNavigation ?  objSettings.afterNavigation() : false "\n      />\n    ',
        getPlayerValues: () => {
          window.dispatchEvent(new Event("getPlayerValues" + e.id));
          let t = JSON.parse(localStorage["sg1Storage" + e.id]);
          return localStorage.removeItem("sg1Storage" + e.id), t;
        },
        getCurrentTabValues: () => {
          window.dispatchEvent(new Event("getCurrentTabValues" + e.id));
          let t = JSON.parse(localStorage["sg1Storage" + e.id]);
          return localStorage.removeItem("sg1Storage" + e.id), t;
        },
        setStartPoint: (t) => {
          localStorage.setItem("sg1Storage" + e.id, JSON.stringify(t)),
            window.dispatchEvent(new Event("setStartPoint" + e.id));
        },
        setPlayerValues: (t) => {
          localStorage.setItem("sg1Storage" + e.id, JSON.stringify(t)),
            window.dispatchEvent(new Event("setPlayerValues" + e.id));
        },
      };
      return Da(t).mount(this), t;
    }),
    (window.storyGround = {}.default);
})();
