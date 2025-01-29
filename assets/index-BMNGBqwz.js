function rp(i, u) {
    for (var a = 0; a < u.length; a++) {
        const f = u[a];
        if (typeof f != "string" && !Array.isArray(f)) {
            for (const d in f)
                if (d !== "default" && !(d in i)) {
                    const g = Object.getOwnPropertyDescriptor(f, d);
                    g && Object.defineProperty(i, d, g.get ? g : {
                        enumerable: !0,
                        get: () => f[d]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const u = document.createElement("link").relList;
    if (u && u.supports && u.supports("modulepreload"))
        return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]'))
        f(d);
    new MutationObserver(d => {
        for (const g of d)
            if (g.type === "childList")
                for (const k of g.addedNodes)
                    k.tagName === "LINK" && k.rel === "modulepreload" && f(k)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(d) {
        const g = {};
        return d.integrity && (g.integrity = d.integrity),
        d.referrerPolicy && (g.referrerPolicy = d.referrerPolicy),
        d.crossOrigin === "use-credentials" ? g.credentials = "include" : d.crossOrigin === "anonymous" ? g.credentials = "omit" : g.credentials = "same-origin",
        g
    }
    function f(d) {
        if (d.ep)
            return;
        d.ep = !0;
        const g = a(d);
        fetch(d.href, g)
    }
}
)();
function Tc(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var ps = {
    exports: {}
}
  , ro = {}
  , ms = {
    exports: {}
}
  , ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uc;
function op() {
    if (uc)
        return ae;
    uc = 1;
    var i = Symbol.for("react.element")
      , u = Symbol.for("react.portal")
      , a = Symbol.for("react.fragment")
      , f = Symbol.for("react.strict_mode")
      , d = Symbol.for("react.profiler")
      , g = Symbol.for("react.provider")
      , k = Symbol.for("react.context")
      , S = Symbol.for("react.forward_ref")
      , C = Symbol.for("react.suspense")
      , N = Symbol.for("react.memo")
      , L = Symbol.for("react.lazy")
      , O = Symbol.iterator;
    function B(h) {
        return h === null || typeof h != "object" ? null : (h = O && h[O] || h["@@iterator"],
        typeof h == "function" ? h : null)
    }
    var v = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , j = Object.assign
      , U = {};
    function A(h, E, V) {
        this.props = h,
        this.context = E,
        this.refs = U,
        this.updater = V || v
    }
    A.prototype.isReactComponent = {},
    A.prototype.setState = function(h, E) {
        if (typeof h != "object" && typeof h != "function" && h != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, E, "setState")
    }
    ,
    A.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate")
    }
    ;
    function G() {}
    G.prototype = A.prototype;
    function ee(h, E, V) {
        this.props = h,
        this.context = E,
        this.refs = U,
        this.updater = V || v
    }
    var ce = ee.prototype = new G;
    ce.constructor = ee,
    j(ce, A.prototype),
    ce.isPureReactComponent = !0;
    var ue = Array.isArray
      , ye = Object.prototype.hasOwnProperty
      , me = {
        current: null
    }
      , W = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Z(h, E, V) {
        var K, ne = {}, se = null, le = null;
        if (E != null)
            for (K in E.ref !== void 0 && (le = E.ref),
            E.key !== void 0 && (se = "" + E.key),
            E)
                ye.call(E, K) && !W.hasOwnProperty(K) && (ne[K] = E[K]);
        var he = arguments.length - 2;
        if (he === 1)
            ne.children = V;
        else if (1 < he) {
            for (var we = Array(he), be = 0; be < he; be++)
                we[be] = arguments[be + 2];
            ne.children = we
        }
        if (h && h.defaultProps)
            for (K in he = h.defaultProps,
            he)
                ne[K] === void 0 && (ne[K] = he[K]);
        return {
            $$typeof: i,
            type: h,
            key: se,
            ref: le,
            props: ne,
            _owner: me.current
        }
    }
    function xe(h, E) {
        return {
            $$typeof: i,
            type: h.type,
            key: E,
            ref: h.ref,
            props: h.props,
            _owner: h._owner
        }
    }
    function ke(h) {
        return typeof h == "object" && h !== null && h.$$typeof === i
    }
    function Ae(h) {
        var E = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + h.replace(/[=:]/g, function(V) {
            return E[V]
        })
    }
    var oe = /\/+/g;
    function ze(h, E) {
        return typeof h == "object" && h !== null && h.key != null ? Ae("" + h.key) : E.toString(36)
    }
    function Te(h, E, V, K, ne) {
        var se = typeof h;
        (se === "undefined" || se === "boolean") && (h = null);
        var le = !1;
        if (h === null)
            le = !0;
        else
            switch (se) {
            case "string":
            case "number":
                le = !0;
                break;
            case "object":
                switch (h.$$typeof) {
                case i:
                case u:
                    le = !0
                }
            }
        if (le)
            return le = h,
            ne = ne(le),
            h = K === "" ? "." + ze(le, 0) : K,
            ue(ne) ? (V = "",
            h != null && (V = h.replace(oe, "$&/") + "/"),
            Te(ne, E, V, "", function(be) {
                return be
            })) : ne != null && (ke(ne) && (ne = xe(ne, V + (!ne.key || le && le.key === ne.key ? "" : ("" + ne.key).replace(oe, "$&/") + "/") + h)),
            E.push(ne)),
            1;
        if (le = 0,
        K = K === "" ? "." : K + ":",
        ue(h))
            for (var he = 0; he < h.length; he++) {
                se = h[he];
                var we = K + ze(se, he);
                le += Te(se, E, V, we, ne)
            }
        else if (we = B(h),
        typeof we == "function")
            for (h = we.call(h),
            he = 0; !(se = h.next()).done; )
                se = se.value,
                we = K + ze(se, he++),
                le += Te(se, E, V, we, ne);
        else if (se === "object")
            throw E = String(h),
            Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
        return le
    }
    function Fe(h, E, V) {
        if (h == null)
            return h;
        var K = []
          , ne = 0;
        return Te(h, K, "", "", function(se) {
            return E.call(V, se, ne++)
        }),
        K
    }
    function de(h) {
        if (h._status === -1) {
            var E = h._result;
            E = E(),
            E.then(function(V) {
                (h._status === 0 || h._status === -1) && (h._status = 1,
                h._result = V)
            }, function(V) {
                (h._status === 0 || h._status === -1) && (h._status = 2,
                h._result = V)
            }),
            h._status === -1 && (h._status = 0,
            h._result = E)
        }
        if (h._status === 1)
            return h._result.default;
        throw h._result
    }
    var fe = {
        current: null
    }
      , b = {
        transition: null
    }
      , z = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: b,
        ReactCurrentOwner: me
    };
    function F() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ae.Children = {
        map: Fe,
        forEach: function(h, E, V) {
            Fe(h, function() {
                E.apply(this, arguments)
            }, V)
        },
        count: function(h) {
            var E = 0;
            return Fe(h, function() {
                E++
            }),
            E
        },
        toArray: function(h) {
            return Fe(h, function(E) {
                return E
            }) || []
        },
        only: function(h) {
            if (!ke(h))
                throw Error("React.Children.only expected to receive a single React element child.");
            return h
        }
    },
    ae.Component = A,
    ae.Fragment = a,
    ae.Profiler = d,
    ae.PureComponent = ee,
    ae.StrictMode = f,
    ae.Suspense = C,
    ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z,
    ae.act = F,
    ae.cloneElement = function(h, E, V) {
        if (h == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var K = j({}, h.props)
          , ne = h.key
          , se = h.ref
          , le = h._owner;
        if (E != null) {
            if (E.ref !== void 0 && (se = E.ref,
            le = me.current),
            E.key !== void 0 && (ne = "" + E.key),
            h.type && h.type.defaultProps)
                var he = h.type.defaultProps;
            for (we in E)
                ye.call(E, we) && !W.hasOwnProperty(we) && (K[we] = E[we] === void 0 && he !== void 0 ? he[we] : E[we])
        }
        var we = arguments.length - 2;
        if (we === 1)
            K.children = V;
        else if (1 < we) {
            he = Array(we);
            for (var be = 0; be < we; be++)
                he[be] = arguments[be + 2];
            K.children = he
        }
        return {
            $$typeof: i,
            type: h.type,
            key: ne,
            ref: se,
            props: K,
            _owner: le
        }
    }
    ,
    ae.createContext = function(h) {
        return h = {
            $$typeof: k,
            _currentValue: h,
            _currentValue2: h,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        h.Provider = {
            $$typeof: g,
            _context: h
        },
        h.Consumer = h
    }
    ,
    ae.createElement = Z,
    ae.createFactory = function(h) {
        var E = Z.bind(null, h);
        return E.type = h,
        E
    }
    ,
    ae.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ae.forwardRef = function(h) {
        return {
            $$typeof: S,
            render: h
        }
    }
    ,
    ae.isValidElement = ke,
    ae.lazy = function(h) {
        return {
            $$typeof: L,
            _payload: {
                _status: -1,
                _result: h
            },
            _init: de
        }
    }
    ,
    ae.memo = function(h, E) {
        return {
            $$typeof: N,
            type: h,
            compare: E === void 0 ? null : E
        }
    }
    ,
    ae.startTransition = function(h) {
        var E = b.transition;
        b.transition = {};
        try {
            h()
        } finally {
            b.transition = E
        }
    }
    ,
    ae.unstable_act = F,
    ae.useCallback = function(h, E) {
        return fe.current.useCallback(h, E)
    }
    ,
    ae.useContext = function(h) {
        return fe.current.useContext(h)
    }
    ,
    ae.useDebugValue = function() {}
    ,
    ae.useDeferredValue = function(h) {
        return fe.current.useDeferredValue(h)
    }
    ,
    ae.useEffect = function(h, E) {
        return fe.current.useEffect(h, E)
    }
    ,
    ae.useId = function() {
        return fe.current.useId()
    }
    ,
    ae.useImperativeHandle = function(h, E, V) {
        return fe.current.useImperativeHandle(h, E, V)
    }
    ,
    ae.useInsertionEffect = function(h, E) {
        return fe.current.useInsertionEffect(h, E)
    }
    ,
    ae.useLayoutEffect = function(h, E) {
        return fe.current.useLayoutEffect(h, E)
    }
    ,
    ae.useMemo = function(h, E) {
        return fe.current.useMemo(h, E)
    }
    ,
    ae.useReducer = function(h, E, V) {
        return fe.current.useReducer(h, E, V)
    }
    ,
    ae.useRef = function(h) {
        return fe.current.useRef(h)
    }
    ,
    ae.useState = function(h) {
        return fe.current.useState(h)
    }
    ,
    ae.useSyncExternalStore = function(h, E, V) {
        return fe.current.useSyncExternalStore(h, E, V)
    }
    ,
    ae.useTransition = function() {
        return fe.current.useTransition()
    }
    ,
    ae.version = "18.3.1",
    ae
}
var cc;
function Ns() {
    return cc || (cc = 1,
    ms.exports = op()),
    ms.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dc;
function lp() {
    if (dc)
        return ro;
    dc = 1;
    var i = Ns()
      , u = Symbol.for("react.element")
      , a = Symbol.for("react.fragment")
      , f = Object.prototype.hasOwnProperty
      , d = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , g = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function k(S, C, N) {
        var L, O = {}, B = null, v = null;
        N !== void 0 && (B = "" + N),
        C.key !== void 0 && (B = "" + C.key),
        C.ref !== void 0 && (v = C.ref);
        for (L in C)
            f.call(C, L) && !g.hasOwnProperty(L) && (O[L] = C[L]);
        if (S && S.defaultProps)
            for (L in C = S.defaultProps,
            C)
                O[L] === void 0 && (O[L] = C[L]);
        return {
            $$typeof: u,
            type: S,
            key: B,
            ref: v,
            props: O,
            _owner: d.current
        }
    }
    return ro.Fragment = a,
    ro.jsx = k,
    ro.jsxs = k,
    ro
}
var fc;
function ip() {
    return fc || (fc = 1,
    ps.exports = lp()),
    ps.exports
}
var _ = ip()
  , I = Ns();
const D = Tc(I)
  , sp = rp({
    __proto__: null,
    default: D
}, [I]);
var Nl = {}
  , hs = {
    exports: {}
}
  , st = {}
  , vs = {
    exports: {}
}
  , gs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function ap() {
    return pc || (pc = 1,
    function(i) {
        function u(b, z) {
            var F = b.length;
            b.push(z);
            e: for (; 0 < F; ) {
                var h = F - 1 >>> 1
                  , E = b[h];
                if (0 < d(E, z))
                    b[h] = z,
                    b[F] = E,
                    F = h;
                else
                    break e
            }
        }
        function a(b) {
            return b.length === 0 ? null : b[0]
        }
        function f(b) {
            if (b.length === 0)
                return null;
            var z = b[0]
              , F = b.pop();
            if (F !== z) {
                b[0] = F;
                e: for (var h = 0, E = b.length, V = E >>> 1; h < V; ) {
                    var K = 2 * (h + 1) - 1
                      , ne = b[K]
                      , se = K + 1
                      , le = b[se];
                    if (0 > d(ne, F))
                        se < E && 0 > d(le, ne) ? (b[h] = le,
                        b[se] = F,
                        h = se) : (b[h] = ne,
                        b[K] = F,
                        h = K);
                    else if (se < E && 0 > d(le, F))
                        b[h] = le,
                        b[se] = F,
                        h = se;
                    else
                        break e
                }
            }
            return z
        }
        function d(b, z) {
            var F = b.sortIndex - z.sortIndex;
            return F !== 0 ? F : b.id - z.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var g = performance;
            i.unstable_now = function() {
                return g.now()
            }
        } else {
            var k = Date
              , S = k.now();
            i.unstable_now = function() {
                return k.now() - S
            }
        }
        var C = []
          , N = []
          , L = 1
          , O = null
          , B = 3
          , v = !1
          , j = !1
          , U = !1
          , A = typeof setTimeout == "function" ? setTimeout : null
          , G = typeof clearTimeout == "function" ? clearTimeout : null
          , ee = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ce(b) {
            for (var z = a(N); z !== null; ) {
                if (z.callback === null)
                    f(N);
                else if (z.startTime <= b)
                    f(N),
                    z.sortIndex = z.expirationTime,
                    u(C, z);
                else
                    break;
                z = a(N)
            }
        }
        function ue(b) {
            if (U = !1,
            ce(b),
            !j)
                if (a(C) !== null)
                    j = !0,
                    de(ye);
                else {
                    var z = a(N);
                    z !== null && fe(ue, z.startTime - b)
                }
        }
        function ye(b, z) {
            j = !1,
            U && (U = !1,
            G(Z),
            Z = -1),
            v = !0;
            var F = B;
            try {
                for (ce(z),
                O = a(C); O !== null && (!(O.expirationTime > z) || b && !Ae()); ) {
                    var h = O.callback;
                    if (typeof h == "function") {
                        O.callback = null,
                        B = O.priorityLevel;
                        var E = h(O.expirationTime <= z);
                        z = i.unstable_now(),
                        typeof E == "function" ? O.callback = E : O === a(C) && f(C),
                        ce(z)
                    } else
                        f(C);
                    O = a(C)
                }
                if (O !== null)
                    var V = !0;
                else {
                    var K = a(N);
                    K !== null && fe(ue, K.startTime - z),
                    V = !1
                }
                return V
            } finally {
                O = null,
                B = F,
                v = !1
            }
        }
        var me = !1
          , W = null
          , Z = -1
          , xe = 5
          , ke = -1;
        function Ae() {
            return !(i.unstable_now() - ke < xe)
        }
        function oe() {
            if (W !== null) {
                var b = i.unstable_now();
                ke = b;
                var z = !0;
                try {
                    z = W(!0, b)
                } finally {
                    z ? ze() : (me = !1,
                    W = null)
                }
            } else
                me = !1
        }
        var ze;
        if (typeof ee == "function")
            ze = function() {
                ee(oe)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Te = new MessageChannel
              , Fe = Te.port2;
            Te.port1.onmessage = oe,
            ze = function() {
                Fe.postMessage(null)
            }
        } else
            ze = function() {
                A(oe, 0)
            }
            ;
        function de(b) {
            W = b,
            me || (me = !0,
            ze())
        }
        function fe(b, z) {
            Z = A(function() {
                b(i.unstable_now())
            }, z)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(b) {
            b.callback = null
        }
        ,
        i.unstable_continueExecution = function() {
            j || v || (j = !0,
            de(ye))
        }
        ,
        i.unstable_forceFrameRate = function(b) {
            0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xe = 0 < b ? Math.floor(1e3 / b) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return B
        }
        ,
        i.unstable_getFirstCallbackNode = function() {
            return a(C)
        }
        ,
        i.unstable_next = function(b) {
            switch (B) {
            case 1:
            case 2:
            case 3:
                var z = 3;
                break;
            default:
                z = B
            }
            var F = B;
            B = z;
            try {
                return b()
            } finally {
                B = F
            }
        }
        ,
        i.unstable_pauseExecution = function() {}
        ,
        i.unstable_requestPaint = function() {}
        ,
        i.unstable_runWithPriority = function(b, z) {
            switch (b) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                b = 3
            }
            var F = B;
            B = b;
            try {
                return z()
            } finally {
                B = F
            }
        }
        ,
        i.unstable_scheduleCallback = function(b, z, F) {
            var h = i.unstable_now();
            switch (typeof F == "object" && F !== null ? (F = F.delay,
            F = typeof F == "number" && 0 < F ? h + F : h) : F = h,
            b) {
            case 1:
                var E = -1;
                break;
            case 2:
                E = 250;
                break;
            case 5:
                E = 1073741823;
                break;
            case 4:
                E = 1e4;
                break;
            default:
                E = 5e3
            }
            return E = F + E,
            b = {
                id: L++,
                callback: z,
                priorityLevel: b,
                startTime: F,
                expirationTime: E,
                sortIndex: -1
            },
            F > h ? (b.sortIndex = F,
            u(N, b),
            a(C) === null && b === a(N) && (U ? (G(Z),
            Z = -1) : U = !0,
            fe(ue, F - h))) : (b.sortIndex = E,
            u(C, b),
            j || v || (j = !0,
            de(ye))),
            b
        }
        ,
        i.unstable_shouldYield = Ae,
        i.unstable_wrapCallback = function(b) {
            var z = B;
            return function() {
                var F = B;
                B = z;
                try {
                    return b.apply(this, arguments)
                } finally {
                    B = F
                }
            }
        }
    }(gs)),
    gs
}
var mc;
function up() {
    return mc || (mc = 1,
    vs.exports = ap()),
    vs.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hc;
function cp() {
    if (hc)
        return st;
    hc = 1;
    var i = Ns()
      , u = up();
    function a(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var f = new Set
      , d = {};
    function g(e, t) {
        k(e, t),
        k(e + "Capture", t)
    }
    function k(e, t) {
        for (d[e] = t,
        e = 0; e < t.length; e++)
            f.add(t[e])
    }
    var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , C = Object.prototype.hasOwnProperty
      , N = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , L = {}
      , O = {};
    function B(e) {
        return C.call(O, e) ? !0 : C.call(L, e) ? !1 : N.test(e) ? O[e] = !0 : (L[e] = !0,
        !1)
    }
    function v(e, t, n, r) {
        if (n !== null && n.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function j(e, t, n, r) {
        if (t === null || typeof t > "u" || v(e, t, n, r))
            return !0;
        if (r)
            return !1;
        if (n !== null)
            switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function U(e, t, n, r, o, l, s) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = o,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = l,
        this.removeEmptyString = s
    }
    var A = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        A[e] = new U(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        A[t] = new U(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        A[e] = new U(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        A[e] = new U(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        A[e] = new U(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        A[e] = new U(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        A[e] = new U(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        A[e] = new U(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        A[e] = new U(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var G = /[\-:]([a-z])/g;
    function ee(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(G, ee);
        A[t] = new U(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(G, ee);
        A[t] = new U(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(G, ee);
        A[t] = new U(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        A[e] = new U(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    A.xlinkHref = new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        A[e] = new U(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function ce(e, t, n, r) {
        var o = A.hasOwnProperty(t) ? A[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (j(t, n, o, r) && (n = null),
        r || o === null ? B(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
        r = o.attributeNamespace,
        n === null ? e.removeAttribute(t) : (o = o.type,
        n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var ue = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , ye = Symbol.for("react.element")
      , me = Symbol.for("react.portal")
      , W = Symbol.for("react.fragment")
      , Z = Symbol.for("react.strict_mode")
      , xe = Symbol.for("react.profiler")
      , ke = Symbol.for("react.provider")
      , Ae = Symbol.for("react.context")
      , oe = Symbol.for("react.forward_ref")
      , ze = Symbol.for("react.suspense")
      , Te = Symbol.for("react.suspense_list")
      , Fe = Symbol.for("react.memo")
      , de = Symbol.for("react.lazy")
      , fe = Symbol.for("react.offscreen")
      , b = Symbol.iterator;
    function z(e) {
        return e === null || typeof e != "object" ? null : (e = b && e[b] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var F = Object.assign, h;
    function E(e) {
        if (h === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                h = t && t[1] || ""
            }
        return `
` + h + e
    }
    var V = !1;
    function K(e, t) {
        if (!e || V)
            return "";
        V = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (x) {
                        var r = x
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (x) {
                        r = x
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (x) {
                    r = x
                }
                e()
            }
        } catch (x) {
            if (x && r && typeof x.stack == "string") {
                for (var o = x.stack.split(`
`), l = r.stack.split(`
`), s = o.length - 1, c = l.length - 1; 1 <= s && 0 <= c && o[s] !== l[c]; )
                    c--;
                for (; 1 <= s && 0 <= c; s--,
                c--)
                    if (o[s] !== l[c]) {
                        if (s !== 1 || c !== 1)
                            do
                                if (s--,
                                c--,
                                0 > c || o[s] !== l[c]) {
                                    var p = `
` + o[s].replace(" at new ", " at ");
                                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)),
                                    p
                                }
                            while (1 <= s && 0 <= c);
                        break
                    }
            }
        } finally {
            V = !1,
            Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? E(e) : ""
    }
    function ne(e) {
        switch (e.tag) {
        case 5:
            return E(e.type);
        case 16:
            return E("Lazy");
        case 13:
            return E("Suspense");
        case 19:
            return E("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = K(e.type, !1),
            e;
        case 11:
            return e = K(e.type.render, !1),
            e;
        case 1:
            return e = K(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function se(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case W:
            return "Fragment";
        case me:
            return "Portal";
        case xe:
            return "Profiler";
        case Z:
            return "StrictMode";
        case ze:
            return "Suspense";
        case Te:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case Ae:
                return (e.displayName || "Context") + ".Consumer";
            case ke:
                return (e._context.displayName || "Context") + ".Provider";
            case oe:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Fe:
                return t = e.displayName || null,
                t !== null ? t : se(e.type) || "Memo";
            case de:
                t = e._payload,
                e = e._init;
                try {
                    return se(e(t))
                } catch {}
            }
        return null
    }
    function le(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return se(t);
        case 8:
            return t === Z ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function he(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function we(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function be(e) {
        var t = we(e) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var o = n.get
              , l = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(s) {
                    r = "" + s,
                    l.call(this, s)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return r
                },
                setValue: function(s) {
                    r = "" + s
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function zt(e) {
        e._valueTracker || (e._valueTracker = be(e))
    }
    function co(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , r = "";
        return e && (r = we(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function wn(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function vr(e, t) {
        var n = t.checked;
        return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }
    function An(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue
          , r = t.checked != null ? t.checked : t.defaultChecked;
        n = he(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function fo(e, t) {
        t = t.checked,
        t != null && ce(e, "checked", t, !1)
    }
    function Dn(e, t) {
        fo(e, t);
        var n = he(t.value)
          , r = t.type;
        if (n != null)
            r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Fn(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fn(e, t.type, he(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function xn(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
    }
    function Fn(e, t, n) {
        (t !== "number" || wn(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var mt = Array.isArray;
    function Gt(e, t, n, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var o = 0; o < n.length; o++)
                t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
                o = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + he(n),
            t = null,
            o = 0; o < e.length; o++) {
                if (e[o].value === n) {
                    e[o].selected = !0,
                    r && (e[o].defaultSelected = !0);
                    return
                }
                t !== null || e[o].disabled || (t = e[o])
            }
            t !== null && (t.selected = !0)
        }
    }
    function gr(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(a(91));
        return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function Ze(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children,
            t = t.defaultValue,
            n != null) {
                if (t != null)
                    throw Error(a(92));
                if (mt(n)) {
                    if (1 < n.length)
                        throw Error(a(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""),
            n = t
        }
        e._wrapperState = {
            initialValue: he(n)
        }
    }
    function At(e, t) {
        var n = he(t.value)
          , r = he(t.defaultValue);
        n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
    }
    function po(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function mo(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Kt(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? mo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var bn, Un = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o)
            })
        }
        : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (bn = bn || document.createElement("div"),
            bn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = bn.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function ht(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Yt = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , Bn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Yt).forEach(function(e) {
        Bn.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Yt[t] = Yt[e]
        })
    });
    function yr(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Yt.hasOwnProperty(e) && Yt[e] ? ("" + t).trim() : t + "px"
    }
    function ho(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0
                  , o = yr(n, t[n], r);
                n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : e[n] = o
            }
    }
    var vo = F({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Vn(e, t) {
        if (t) {
            if (vo[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(a(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(a(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(a(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(a(62))
        }
    }
    function wr(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Sn = null;
    function vt(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var xr = null
      , te = null
      , pe = null;
    function Ce(e) {
        if (e = Vr(e)) {
            if (typeof xr != "function")
                throw Error(a(280));
            var t = e.stateNode;
            t && (t = Uo(t),
            xr(e.stateNode, e.type, t))
        }
    }
    function tt(e) {
        te ? pe ? pe.push(e) : pe = [e] : te = e
    }
    function at() {
        if (te) {
            var e = te
              , t = pe;
            if (pe = te = null,
            Ce(e),
            t)
                for (e = 0; e < t.length; e++)
                    Ce(t[e])
        }
    }
    function kn(e, t) {
        return e(t)
    }
    function go() {}
    var zl = !1;
    function js(e, t, n) {
        if (zl)
            return e(t, n);
        zl = !0;
        try {
            return kn(e, t, n)
        } finally {
            zl = !1,
            (te !== null || pe !== null) && (go(),
            at())
        }
    }
    function Sr(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var r = Uo(n);
        if (r === null)
            return null;
        n = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
            r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !r;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(a(231, t, typeof n));
        return n
    }
    var jl = !1;
    if (S)
        try {
            var kr = {};
            Object.defineProperty(kr, "passive", {
                get: function() {
                    jl = !0
                }
            }),
            window.addEventListener("test", kr, kr),
            window.removeEventListener("test", kr, kr)
        } catch {
            jl = !1
        }
    function ud(e, t, n, r, o, l, s, c, p) {
        var x = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, x)
        } catch (T) {
            this.onError(T)
        }
    }
    var Cr = !1
      , yo = null
      , wo = !1
      , Ml = null
      , cd = {
        onError: function(e) {
            Cr = !0,
            yo = e
        }
    };
    function dd(e, t, n, r, o, l, s, c, p) {
        Cr = !1,
        yo = null,
        ud.apply(cd, arguments)
    }
    function fd(e, t, n, r, o, l, s, c, p) {
        if (dd.apply(this, arguments),
        Cr) {
            if (Cr) {
                var x = yo;
                Cr = !1,
                yo = null
            } else
                throw Error(a(198));
            wo || (wo = !0,
            Ml = x)
        }
    }
    function Cn(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function Ms(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function Ls(e) {
        if (Cn(e) !== e)
            throw Error(a(188))
    }
    function pd(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Cn(e),
            t === null)
                throw Error(a(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t; ; ) {
            var o = n.return;
            if (o === null)
                break;
            var l = o.alternate;
            if (l === null) {
                if (r = o.return,
                r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (o.child === l.child) {
                for (l = o.child; l; ) {
                    if (l === n)
                        return Ls(o),
                        e;
                    if (l === r)
                        return Ls(o),
                        t;
                    l = l.sibling
                }
                throw Error(a(188))
            }
            if (n.return !== r.return)
                n = o,
                r = l;
            else {
                for (var s = !1, c = o.child; c; ) {
                    if (c === n) {
                        s = !0,
                        n = o,
                        r = l;
                        break
                    }
                    if (c === r) {
                        s = !0,
                        r = o,
                        n = l;
                        break
                    }
                    c = c.sibling
                }
                if (!s) {
                    for (c = l.child; c; ) {
                        if (c === n) {
                            s = !0,
                            n = l,
                            r = o;
                            break
                        }
                        if (c === r) {
                            s = !0,
                            r = l,
                            n = o;
                            break
                        }
                        c = c.sibling
                    }
                    if (!s)
                        throw Error(a(189))
                }
            }
            if (n.alternate !== r)
                throw Error(a(190))
        }
        if (n.tag !== 3)
            throw Error(a(188));
        return n.stateNode.current === n ? e : t
    }
    function Is(e) {
        return e = pd(e),
        e !== null ? Os(e) : null
    }
    function Os(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = Os(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var As = u.unstable_scheduleCallback
      , Ds = u.unstable_cancelCallback
      , md = u.unstable_shouldYield
      , hd = u.unstable_requestPaint
      , Ie = u.unstable_now
      , vd = u.unstable_getCurrentPriorityLevel
      , Ll = u.unstable_ImmediatePriority
      , Fs = u.unstable_UserBlockingPriority
      , xo = u.unstable_NormalPriority
      , gd = u.unstable_LowPriority
      , bs = u.unstable_IdlePriority
      , So = null
      , jt = null;
    function yd(e) {
        if (jt && typeof jt.onCommitFiberRoot == "function")
            try {
                jt.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var Ct = Math.clz32 ? Math.clz32 : Sd
      , wd = Math.log
      , xd = Math.LN2;
    function Sd(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (wd(e) / xd | 0) | 0
    }
    var ko = 64
      , Co = 4194304;
    function Er(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function Eo(e, t) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var r = 0
          , o = e.suspendedLanes
          , l = e.pingedLanes
          , s = n & 268435455;
        if (s !== 0) {
            var c = s & ~o;
            c !== 0 ? r = Er(c) : (l &= s,
            l !== 0 && (r = Er(l)))
        } else
            s = n & ~o,
            s !== 0 ? r = Er(s) : l !== 0 && (r = Er(l));
        if (r === 0)
            return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
        l = t & -t,
        o >= l || o === 16 && (l & 4194240) !== 0))
            return t;
        if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= r; 0 < t; )
                n = 31 - Ct(t),
                o = 1 << n,
                r |= e[n],
                t &= ~o;
        return r
    }
    function kd(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Cd(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
            var s = 31 - Ct(l)
              , c = 1 << s
              , p = o[s];
            p === -1 ? (!(c & n) || c & r) && (o[s] = kd(c, t)) : p <= t && (e.expiredLanes |= c),
            l &= ~c
        }
    }
    function Il(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Us() {
        var e = ko;
        return ko <<= 1,
        !(ko & 4194240) && (ko = 64),
        e
    }
    function Ol(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function Nr(e, t, n) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Ct(t),
        e[t] = n
    }
    function Ed(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var o = 31 - Ct(n)
              , l = 1 << o;
            t[o] = 0,
            r[o] = -1,
            e[o] = -1,
            n &= ~l
        }
    }
    function Al(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var r = 31 - Ct(n)
              , o = 1 << r;
            o & t | e[r] & t && (e[r] |= t),
            n &= ~o
        }
    }
    var Se = 0;
    function Bs(e) {
        return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var Vs, Dl, $s, Ws, Hs, Fl = !1, No = [], Xt = null, Zt = null, Jt = null, _r = new Map, Pr = new Map, qt = [], Nd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Qs(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Xt = null;
            break;
        case "dragenter":
        case "dragleave":
            Zt = null;
            break;
        case "mouseover":
        case "mouseout":
            Jt = null;
            break;
        case "pointerover":
        case "pointerout":
            _r.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Pr.delete(t.pointerId)
        }
    }
    function Tr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [o]
        },
        t !== null && (t = Vr(t),
        t !== null && Dl(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e)
    }
    function _d(e, t, n, r, o) {
        switch (t) {
        case "focusin":
            return Xt = Tr(Xt, e, t, n, r, o),
            !0;
        case "dragenter":
            return Zt = Tr(Zt, e, t, n, r, o),
            !0;
        case "mouseover":
            return Jt = Tr(Jt, e, t, n, r, o),
            !0;
        case "pointerover":
            var l = o.pointerId;
            return _r.set(l, Tr(_r.get(l) || null, e, t, n, r, o)),
            !0;
        case "gotpointercapture":
            return l = o.pointerId,
            Pr.set(l, Tr(Pr.get(l) || null, e, t, n, r, o)),
            !0
        }
        return !1
    }
    function Gs(e) {
        var t = En(e.target);
        if (t !== null) {
            var n = Cn(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = Ms(n),
                    t !== null) {
                        e.blockedOn = t,
                        Hs(e.priority, function() {
                            $s(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function _o(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type,n);
                Sn = r,
                n.target.dispatchEvent(r),
                Sn = null
            } else
                return t = Vr(n),
                t !== null && Dl(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Ks(e, t, n) {
        _o(e) && n.delete(t)
    }
    function Pd() {
        Fl = !1,
        Xt !== null && _o(Xt) && (Xt = null),
        Zt !== null && _o(Zt) && (Zt = null),
        Jt !== null && _o(Jt) && (Jt = null),
        _r.forEach(Ks),
        Pr.forEach(Ks)
    }
    function Rr(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Fl || (Fl = !0,
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Pd)))
    }
    function zr(e) {
        function t(o) {
            return Rr(o, e)
        }
        if (0 < No.length) {
            Rr(No[0], e);
            for (var n = 1; n < No.length; n++) {
                var r = No[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (Xt !== null && Rr(Xt, e),
        Zt !== null && Rr(Zt, e),
        Jt !== null && Rr(Jt, e),
        _r.forEach(t),
        Pr.forEach(t),
        n = 0; n < qt.length; n++)
            r = qt[n],
            r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < qt.length && (n = qt[0],
        n.blockedOn === null); )
            Gs(n),
            n.blockedOn === null && qt.shift()
    }
    var $n = ue.ReactCurrentBatchConfig
      , Po = !0;
    function Td(e, t, n, r) {
        var o = Se
          , l = $n.transition;
        $n.transition = null;
        try {
            Se = 1,
            bl(e, t, n, r)
        } finally {
            Se = o,
            $n.transition = l
        }
    }
    function Rd(e, t, n, r) {
        var o = Se
          , l = $n.transition;
        $n.transition = null;
        try {
            Se = 4,
            bl(e, t, n, r)
        } finally {
            Se = o,
            $n.transition = l
        }
    }
    function bl(e, t, n, r) {
        if (Po) {
            var o = Ul(e, t, n, r);
            if (o === null)
                ri(e, t, r, To, n),
                Qs(e, r);
            else if (_d(o, e, t, n, r))
                r.stopPropagation();
            else if (Qs(e, r),
            t & 4 && -1 < Nd.indexOf(e)) {
                for (; o !== null; ) {
                    var l = Vr(o);
                    if (l !== null && Vs(l),
                    l = Ul(e, t, n, r),
                    l === null && ri(e, t, r, To, n),
                    l === o)
                        break;
                    o = l
                }
                o !== null && r.stopPropagation()
            } else
                ri(e, t, r, null, n)
        }
    }
    var To = null;
    function Ul(e, t, n, r) {
        if (To = null,
        e = vt(r),
        e = En(e),
        e !== null)
            if (t = Cn(e),
            t === null)
                e = null;
            else if (n = t.tag,
            n === 13) {
                if (e = Ms(t),
                e !== null)
                    return e;
                e = null
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return To = e,
        null
    }
    function Ys(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (vd()) {
            case Ll:
                return 1;
            case Fs:
                return 4;
            case xo:
            case gd:
                return 16;
            case bs:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var en = null
      , Bl = null
      , Ro = null;
    function Xs() {
        if (Ro)
            return Ro;
        var e, t = Bl, n = t.length, r, o = "value"in en ? en.value : en.textContent, l = o.length;
        for (e = 0; e < n && t[e] === o[e]; e++)
            ;
        var s = n - e;
        for (r = 1; r <= s && t[n - r] === o[l - r]; r++)
            ;
        return Ro = o.slice(e, 1 < r ? 1 - r : void 0)
    }
    function zo(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function jo() {
        return !0
    }
    function Zs() {
        return !1
    }
    function ut(e) {
        function t(n, r, o, l, s) {
            this._reactName = n,
            this._targetInst = o,
            this.type = r,
            this.nativeEvent = l,
            this.target = s,
            this.currentTarget = null;
            for (var c in e)
                e.hasOwnProperty(c) && (n = e[c],
                this[c] = n ? n(l) : l[c]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? jo : Zs,
            this.isPropagationStopped = Zs,
            this
        }
        return F(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = jo)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = jo)
            },
            persist: function() {},
            isPersistent: jo
        }),
        t
    }
    var Wn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Vl = ut(Wn), jr = F({}, Wn, {
        view: 0,
        detail: 0
    }), zd = ut(jr), $l, Wl, Mr, Mo = F({}, jr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ql,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Mr && (Mr && e.type === "mousemove" ? ($l = e.screenX - Mr.screenX,
            Wl = e.screenY - Mr.screenY) : Wl = $l = 0,
            Mr = e),
            $l)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Wl
        }
    }), Js = ut(Mo), jd = F({}, Mo, {
        dataTransfer: 0
    }), Md = ut(jd), Ld = F({}, jr, {
        relatedTarget: 0
    }), Hl = ut(Ld), Id = F({}, Wn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Od = ut(Id), Ad = F({}, Wn, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Dd = ut(Ad), Fd = F({}, Wn, {
        data: 0
    }), qs = ut(Fd), bd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Ud = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Bd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Vd(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Bd[e]) ? !!t[e] : !1
    }
    function Ql() {
        return Vd
    }
    var $d = F({}, jr, {
        key: function(e) {
            if (e.key) {
                var t = bd[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = zo(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ud[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ql,
        charCode: function(e) {
            return e.type === "keypress" ? zo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? zo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Wd = ut($d)
      , Hd = F({}, Mo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , ea = ut(Hd)
      , Qd = F({}, jr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ql
    })
      , Gd = ut(Qd)
      , Kd = F({}, Wn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Yd = ut(Kd)
      , Xd = F({}, Mo, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Zd = ut(Xd)
      , Jd = [9, 13, 27, 32]
      , Gl = S && "CompositionEvent"in window
      , Lr = null;
    S && "documentMode"in document && (Lr = document.documentMode);
    var qd = S && "TextEvent"in window && !Lr
      , ta = S && (!Gl || Lr && 8 < Lr && 11 >= Lr)
      , na = " "
      , ra = !1;
    function oa(e, t) {
        switch (e) {
        case "keyup":
            return Jd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function la(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Hn = !1;
    function ef(e, t) {
        switch (e) {
        case "compositionend":
            return la(t);
        case "keypress":
            return t.which !== 32 ? null : (ra = !0,
            na);
        case "textInput":
            return e = t.data,
            e === na && ra ? null : e;
        default:
            return null
        }
    }
    function tf(e, t) {
        if (Hn)
            return e === "compositionend" || !Gl && oa(e, t) ? (e = Xs(),
            Ro = Bl = en = null,
            Hn = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return ta && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var nf = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function ia(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!nf[e.type] : t === "textarea"
    }
    function sa(e, t, n, r) {
        tt(r),
        t = Do(t, "onChange"),
        0 < t.length && (n = new Vl("onChange","change",null,n,r),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var Ir = null
      , Or = null;
    function rf(e) {
        Na(e, 0)
    }
    function Lo(e) {
        var t = Xn(e);
        if (co(t))
            return e
    }
    function of(e, t) {
        if (e === "change")
            return t
    }
    var aa = !1;
    if (S) {
        var Kl;
        if (S) {
            var Yl = "oninput"in document;
            if (!Yl) {
                var ua = document.createElement("div");
                ua.setAttribute("oninput", "return;"),
                Yl = typeof ua.oninput == "function"
            }
            Kl = Yl
        } else
            Kl = !1;
        aa = Kl && (!document.documentMode || 9 < document.documentMode)
    }
    function ca() {
        Ir && (Ir.detachEvent("onpropertychange", da),
        Or = Ir = null)
    }
    function da(e) {
        if (e.propertyName === "value" && Lo(Or)) {
            var t = [];
            sa(t, Or, e, vt(e)),
            js(rf, t)
        }
    }
    function lf(e, t, n) {
        e === "focusin" ? (ca(),
        Ir = t,
        Or = n,
        Ir.attachEvent("onpropertychange", da)) : e === "focusout" && ca()
    }
    function sf(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Lo(Or)
    }
    function af(e, t) {
        if (e === "click")
            return Lo(t)
    }
    function uf(e, t) {
        if (e === "input" || e === "change")
            return Lo(t)
    }
    function cf(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Et = typeof Object.is == "function" ? Object.is : cf;
    function Ar(e, t) {
        if (Et(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!C.call(t, o) || !Et(e[o], t[o]))
                return !1
        }
        return !0
    }
    function fa(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function pa(e, t) {
        var n = fa(e);
        e = 0;
        for (var r; n; ) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length,
                e <= t && r >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = r
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = fa(n)
        }
    }
    function ma(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ma(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function ha() {
        for (var e = window, t = wn(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = wn(e.document)
        }
        return t
    }
    function Xl(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function df(e) {
        var t = ha()
          , n = e.focusedElem
          , r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && ma(n.ownerDocument.documentElement, n)) {
            if (r !== null && Xl(n)) {
                if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart"in n)
                    n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length
                      , l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o),
                    !e.extend && l > r && (o = r,
                    r = l,
                    l = o),
                    o = pa(n, l);
                    var s = pa(n, r);
                    o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    l > r ? (e.addRange(t),
                    e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = n; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
                e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var ff = S && "documentMode"in document && 11 >= document.documentMode
      , Qn = null
      , Zl = null
      , Dr = null
      , Jl = !1;
    function va(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Jl || Qn == null || Qn !== wn(r) || (r = Qn,
        "selectionStart"in r && Xl(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
        r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }),
        Dr && Ar(Dr, r) || (Dr = r,
        r = Do(Zl, "onSelect"),
        0 < r.length && (t = new Vl("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = Qn)))
    }
    function Io(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var Gn = {
        animationend: Io("Animation", "AnimationEnd"),
        animationiteration: Io("Animation", "AnimationIteration"),
        animationstart: Io("Animation", "AnimationStart"),
        transitionend: Io("Transition", "TransitionEnd")
    }
      , ql = {}
      , ga = {};
    S && (ga = document.createElement("div").style,
    "AnimationEvent"in window || (delete Gn.animationend.animation,
    delete Gn.animationiteration.animation,
    delete Gn.animationstart.animation),
    "TransitionEvent"in window || delete Gn.transitionend.transition);
    function Oo(e) {
        if (ql[e])
            return ql[e];
        if (!Gn[e])
            return e;
        var t = Gn[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in ga)
                return ql[e] = t[n];
        return e
    }
    var ya = Oo("animationend")
      , wa = Oo("animationiteration")
      , xa = Oo("animationstart")
      , Sa = Oo("transitionend")
      , ka = new Map
      , Ca = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function tn(e, t) {
        ka.set(e, t),
        g(t, [e])
    }
    for (var ei = 0; ei < Ca.length; ei++) {
        var ti = Ca[ei]
          , pf = ti.toLowerCase()
          , mf = ti[0].toUpperCase() + ti.slice(1);
        tn(pf, "on" + mf)
    }
    tn(ya, "onAnimationEnd"),
    tn(wa, "onAnimationIteration"),
    tn(xa, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(Sa, "onTransitionEnd"),
    k("onMouseEnter", ["mouseout", "mouseover"]),
    k("onMouseLeave", ["mouseout", "mouseover"]),
    k("onPointerEnter", ["pointerout", "pointerover"]),
    k("onPointerLeave", ["pointerout", "pointerover"]),
    g("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    g("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    g("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    g("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    g("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    g("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
    function Ea(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
        fd(r, t, void 0, e),
        e.currentTarget = null
    }
    function Na(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
              , o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var s = r.length - 1; 0 <= s; s--) {
                        var c = r[s]
                          , p = c.instance
                          , x = c.currentTarget;
                        if (c = c.listener,
                        p !== l && o.isPropagationStopped())
                            break e;
                        Ea(o, c, x),
                        l = p
                    }
                else
                    for (s = 0; s < r.length; s++) {
                        if (c = r[s],
                        p = c.instance,
                        x = c.currentTarget,
                        c = c.listener,
                        p !== l && o.isPropagationStopped())
                            break e;
                        Ea(o, c, x),
                        l = p
                    }
            }
        }
        if (wo)
            throw e = Ml,
            wo = !1,
            Ml = null,
            e
    }
    function Ne(e, t) {
        var n = t[ui];
        n === void 0 && (n = t[ui] = new Set);
        var r = e + "__bubble";
        n.has(r) || (_a(t, e, 2, !1),
        n.add(r))
    }
    function ni(e, t, n) {
        var r = 0;
        t && (r |= 4),
        _a(n, e, r, t)
    }
    var Ao = "_reactListening" + Math.random().toString(36).slice(2);
    function br(e) {
        if (!e[Ao]) {
            e[Ao] = !0,
            f.forEach(function(n) {
                n !== "selectionchange" && (hf.has(n) || ni(n, !1, e),
                ni(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ao] || (t[Ao] = !0,
            ni("selectionchange", !1, t))
        }
    }
    function _a(e, t, n, r) {
        switch (Ys(t)) {
        case 1:
            var o = Td;
            break;
        case 4:
            o = Rd;
            break;
        default:
            o = bl
        }
        n = o.bind(null, t, n, e),
        o = void 0,
        !jl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
        r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1)
    }
    function ri(e, t, n, r, o) {
        var l = r;
        if (!(t & 1) && !(t & 2) && r !== null)
            e: for (; ; ) {
                if (r === null)
                    return;
                var s = r.tag;
                if (s === 3 || s === 4) {
                    var c = r.stateNode.containerInfo;
                    if (c === o || c.nodeType === 8 && c.parentNode === o)
                        break;
                    if (s === 4)
                        for (s = r.return; s !== null; ) {
                            var p = s.tag;
                            if ((p === 3 || p === 4) && (p = s.stateNode.containerInfo,
                            p === o || p.nodeType === 8 && p.parentNode === o))
                                return;
                            s = s.return
                        }
                    for (; c !== null; ) {
                        if (s = En(c),
                        s === null)
                            return;
                        if (p = s.tag,
                        p === 5 || p === 6) {
                            r = l = s;
                            continue e
                        }
                        c = c.parentNode
                    }
                }
                r = r.return
            }
        js(function() {
            var x = l
              , T = vt(n)
              , R = [];
            e: {
                var P = ka.get(e);
                if (P !== void 0) {
                    var $ = Vl
                      , Q = e;
                    switch (e) {
                    case "keypress":
                        if (zo(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        $ = Wd;
                        break;
                    case "focusin":
                        Q = "focus",
                        $ = Hl;
                        break;
                    case "focusout":
                        Q = "blur",
                        $ = Hl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        $ = Hl;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        $ = Js;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        $ = Md;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        $ = Gd;
                        break;
                    case ya:
                    case wa:
                    case xa:
                        $ = Od;
                        break;
                    case Sa:
                        $ = Yd;
                        break;
                    case "scroll":
                        $ = zd;
                        break;
                    case "wheel":
                        $ = Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        $ = Dd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        $ = ea
                    }
                    var Y = (t & 4) !== 0
                      , Oe = !Y && e === "scroll"
                      , y = Y ? P !== null ? P + "Capture" : null : P;
                    Y = [];
                    for (var m = x, w; m !== null; ) {
                        w = m;
                        var M = w.stateNode;
                        if (w.tag === 5 && M !== null && (w = M,
                        y !== null && (M = Sr(m, y),
                        M != null && Y.push(Ur(m, M, w)))),
                        Oe)
                            break;
                        m = m.return
                    }
                    0 < Y.length && (P = new $(P,Q,null,n,T),
                    R.push({
                        event: P,
                        listeners: Y
                    }))
                }
            }
            if (!(t & 7)) {
                e: {
                    if (P = e === "mouseover" || e === "pointerover",
                    $ = e === "mouseout" || e === "pointerout",
                    P && n !== Sn && (Q = n.relatedTarget || n.fromElement) && (En(Q) || Q[Dt]))
                        break e;
                    if (($ || P) && (P = T.window === T ? T : (P = T.ownerDocument) ? P.defaultView || P.parentWindow : window,
                    $ ? (Q = n.relatedTarget || n.toElement,
                    $ = x,
                    Q = Q ? En(Q) : null,
                    Q !== null && (Oe = Cn(Q),
                    Q !== Oe || Q.tag !== 5 && Q.tag !== 6) && (Q = null)) : ($ = null,
                    Q = x),
                    $ !== Q)) {
                        if (Y = Js,
                        M = "onMouseLeave",
                        y = "onMouseEnter",
                        m = "mouse",
                        (e === "pointerout" || e === "pointerover") && (Y = ea,
                        M = "onPointerLeave",
                        y = "onPointerEnter",
                        m = "pointer"),
                        Oe = $ == null ? P : Xn($),
                        w = Q == null ? P : Xn(Q),
                        P = new Y(M,m + "leave",$,n,T),
                        P.target = Oe,
                        P.relatedTarget = w,
                        M = null,
                        En(T) === x && (Y = new Y(y,m + "enter",Q,n,T),
                        Y.target = w,
                        Y.relatedTarget = Oe,
                        M = Y),
                        Oe = M,
                        $ && Q)
                            t: {
                                for (Y = $,
                                y = Q,
                                m = 0,
                                w = Y; w; w = Kn(w))
                                    m++;
                                for (w = 0,
                                M = y; M; M = Kn(M))
                                    w++;
                                for (; 0 < m - w; )
                                    Y = Kn(Y),
                                    m--;
                                for (; 0 < w - m; )
                                    y = Kn(y),
                                    w--;
                                for (; m--; ) {
                                    if (Y === y || y !== null && Y === y.alternate)
                                        break t;
                                    Y = Kn(Y),
                                    y = Kn(y)
                                }
                                Y = null
                            }
                        else
                            Y = null;
                        $ !== null && Pa(R, P, $, Y, !1),
                        Q !== null && Oe !== null && Pa(R, Oe, Q, Y, !0)
                    }
                }
                e: {
                    if (P = x ? Xn(x) : window,
                    $ = P.nodeName && P.nodeName.toLowerCase(),
                    $ === "select" || $ === "input" && P.type === "file")
                        var X = of;
                    else if (ia(P))
                        if (aa)
                            X = uf;
                        else {
                            X = sf;
                            var J = lf
                        }
                    else
                        ($ = P.nodeName) && $.toLowerCase() === "input" && (P.type === "checkbox" || P.type === "radio") && (X = af);
                    if (X && (X = X(e, x))) {
                        sa(R, X, n, T);
                        break e
                    }
                    J && J(e, P, x),
                    e === "focusout" && (J = P._wrapperState) && J.controlled && P.type === "number" && Fn(P, "number", P.value)
                }
                switch (J = x ? Xn(x) : window,
                e) {
                case "focusin":
                    (ia(J) || J.contentEditable === "true") && (Qn = J,
                    Zl = x,
                    Dr = null);
                    break;
                case "focusout":
                    Dr = Zl = Qn = null;
                    break;
                case "mousedown":
                    Jl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Jl = !1,
                    va(R, n, T);
                    break;
                case "selectionchange":
                    if (ff)
                        break;
                case "keydown":
                case "keyup":
                    va(R, n, T)
                }
                var q;
                if (Gl)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var re = "onCompositionStart";
                            break e;
                        case "compositionend":
                            re = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            re = "onCompositionUpdate";
                            break e
                        }
                        re = void 0
                    }
                else
                    Hn ? oa(e, n) && (re = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (re = "onCompositionStart");
                re && (ta && n.locale !== "ko" && (Hn || re !== "onCompositionStart" ? re === "onCompositionEnd" && Hn && (q = Xs()) : (en = T,
                Bl = "value"in en ? en.value : en.textContent,
                Hn = !0)),
                J = Do(x, re),
                0 < J.length && (re = new qs(re,e,null,n,T),
                R.push({
                    event: re,
                    listeners: J
                }),
                q ? re.data = q : (q = la(n),
                q !== null && (re.data = q)))),
                (q = qd ? ef(e, n) : tf(e, n)) && (x = Do(x, "onBeforeInput"),
                0 < x.length && (T = new qs("onBeforeInput","beforeinput",null,n,T),
                R.push({
                    event: T,
                    listeners: x
                }),
                T.data = q))
            }
            Na(R, t)
        })
    }
    function Ur(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Do(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
            var o = e
              , l = o.stateNode;
            o.tag === 5 && l !== null && (o = l,
            l = Sr(e, n),
            l != null && r.unshift(Ur(e, l, o)),
            l = Sr(e, t),
            l != null && r.push(Ur(e, l, o))),
            e = e.return
        }
        return r
    }
    function Kn(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function Pa(e, t, n, r, o) {
        for (var l = t._reactName, s = []; n !== null && n !== r; ) {
            var c = n
              , p = c.alternate
              , x = c.stateNode;
            if (p !== null && p === r)
                break;
            c.tag === 5 && x !== null && (c = x,
            o ? (p = Sr(n, l),
            p != null && s.unshift(Ur(n, p, c))) : o || (p = Sr(n, l),
            p != null && s.push(Ur(n, p, c)))),
            n = n.return
        }
        s.length !== 0 && e.push({
            event: t,
            listeners: s
        })
    }
    var vf = /\r\n?/g
      , gf = /\u0000|\uFFFD/g;
    function Ta(e) {
        return (typeof e == "string" ? e : "" + e).replace(vf, `
`).replace(gf, "")
    }
    function Fo(e, t, n) {
        if (t = Ta(t),
        Ta(e) !== t && n)
            throw Error(a(425))
    }
    function bo() {}
    var oi = null
      , li = null;
    function ii(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var si = typeof setTimeout == "function" ? setTimeout : void 0
      , yf = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Ra = typeof Promise == "function" ? Promise : void 0
      , wf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ra < "u" ? function(e) {
        return Ra.resolve(null).then(e).catch(xf)
    }
    : si;
    function xf(e) {
        setTimeout(function() {
            throw e
        })
    }
    function ai(e, t) {
        var n = t
          , r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n),
            o && o.nodeType === 8)
                if (n = o.data,
                n === "/$") {
                    if (r === 0) {
                        e.removeChild(o),
                        zr(t);
                        return
                    }
                    r--
                } else
                    n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o
        } while (n);
        zr(t)
    }
    function nn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function za(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Yn = Math.random().toString(36).slice(2)
      , Mt = "__reactFiber$" + Yn
      , Br = "__reactProps$" + Yn
      , Dt = "__reactContainer$" + Yn
      , ui = "__reactEvents$" + Yn
      , Sf = "__reactListeners$" + Yn
      , kf = "__reactHandles$" + Yn;
    function En(e) {
        var t = e[Mt];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[Dt] || n[Mt]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = za(e); e !== null; ) {
                        if (n = e[Mt])
                            return n;
                        e = za(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function Vr(e) {
        return e = e[Mt] || e[Dt],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function Xn(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(a(33))
    }
    function Uo(e) {
        return e[Br] || null
    }
    var ci = []
      , Zn = -1;
    function rn(e) {
        return {
            current: e
        }
    }
    function _e(e) {
        0 > Zn || (e.current = ci[Zn],
        ci[Zn] = null,
        Zn--)
    }
    function Ee(e, t) {
        Zn++,
        ci[Zn] = e.current,
        e.current = t
    }
    var on = {}
      , Ge = rn(on)
      , nt = rn(!1)
      , Nn = on;
    function Jn(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return on;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for (l in n)
            o[l] = t[l];
        return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = o),
        o
    }
    function rt(e) {
        return e = e.childContextTypes,
        e != null
    }
    function Bo() {
        _e(nt),
        _e(Ge)
    }
    function ja(e, t, n) {
        if (Ge.current !== on)
            throw Error(a(168));
        Ee(Ge, t),
        Ee(nt, n)
    }
    function Ma(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
            return n;
        r = r.getChildContext();
        for (var o in r)
            if (!(o in t))
                throw Error(a(108, le(e) || "Unknown", o));
        return F({}, n, r)
    }
    function Vo(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on,
        Nn = Ge.current,
        Ee(Ge, e),
        Ee(nt, nt.current),
        !0
    }
    function La(e, t, n) {
        var r = e.stateNode;
        if (!r)
            throw Error(a(169));
        n ? (e = Ma(e, t, Nn),
        r.__reactInternalMemoizedMergedChildContext = e,
        _e(nt),
        _e(Ge),
        Ee(Ge, e)) : _e(nt),
        Ee(nt, n)
    }
    var Ft = null
      , $o = !1
      , di = !1;
    function Ia(e) {
        Ft === null ? Ft = [e] : Ft.push(e)
    }
    function Cf(e) {
        $o = !0,
        Ia(e)
    }
    function ln() {
        if (!di && Ft !== null) {
            di = !0;
            var e = 0
              , t = Se;
            try {
                var n = Ft;
                for (Se = 1; e < n.length; e++) {
                    var r = n[e];
                    do
                        r = r(!0);
                    while (r !== null)
                }
                Ft = null,
                $o = !1
            } catch (o) {
                throw Ft !== null && (Ft = Ft.slice(e + 1)),
                As(Ll, ln),
                o
            } finally {
                Se = t,
                di = !1
            }
        }
        return null
    }
    var qn = []
      , er = 0
      , Wo = null
      , Ho = 0
      , gt = []
      , yt = 0
      , _n = null
      , bt = 1
      , Ut = "";
    function Pn(e, t) {
        qn[er++] = Ho,
        qn[er++] = Wo,
        Wo = e,
        Ho = t
    }
    function Oa(e, t, n) {
        gt[yt++] = bt,
        gt[yt++] = Ut,
        gt[yt++] = _n,
        _n = e;
        var r = bt;
        e = Ut;
        var o = 32 - Ct(r) - 1;
        r &= ~(1 << o),
        n += 1;
        var l = 32 - Ct(t) + o;
        if (30 < l) {
            var s = o - o % 5;
            l = (r & (1 << s) - 1).toString(32),
            r >>= s,
            o -= s,
            bt = 1 << 32 - Ct(t) + o | n << o | r,
            Ut = l + e
        } else
            bt = 1 << l | n << o | r,
            Ut = e
    }
    function fi(e) {
        e.return !== null && (Pn(e, 1),
        Oa(e, 1, 0))
    }
    function pi(e) {
        for (; e === Wo; )
            Wo = qn[--er],
            qn[er] = null,
            Ho = qn[--er],
            qn[er] = null;
        for (; e === _n; )
            _n = gt[--yt],
            gt[yt] = null,
            Ut = gt[--yt],
            gt[yt] = null,
            bt = gt[--yt],
            gt[yt] = null
    }
    var ct = null
      , dt = null
      , Re = !1
      , Nt = null;
    function Aa(e, t) {
        var n = kt(5, null, null, 0);
        n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
        e.flags |= 16) : t.push(n)
    }
    function Da(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            ct = e,
            dt = nn(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            ct = e,
            dt = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (n = _n !== null ? {
                id: bt,
                overflow: Ut
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            },
            n = kt(18, null, null, 0),
            n.stateNode = t,
            n.return = e,
            e.child = n,
            ct = e,
            dt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function mi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function hi(e) {
        if (Re) {
            var t = dt;
            if (t) {
                var n = t;
                if (!Da(e, t)) {
                    if (mi(e))
                        throw Error(a(418));
                    t = nn(n.nextSibling);
                    var r = ct;
                    t && Da(e, t) ? Aa(r, n) : (e.flags = e.flags & -4097 | 2,
                    Re = !1,
                    ct = e)
                }
            } else {
                if (mi(e))
                    throw Error(a(418));
                e.flags = e.flags & -4097 | 2,
                Re = !1,
                ct = e
            }
        }
    }
    function Fa(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        ct = e
    }
    function Qo(e) {
        if (e !== ct)
            return !1;
        if (!Re)
            return Fa(e),
            Re = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !ii(e.type, e.memoizedProps)),
        t && (t = dt)) {
            if (mi(e))
                throw ba(),
                Error(a(418));
            for (; t; )
                Aa(e, t),
                t = nn(t.nextSibling)
        }
        if (Fa(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(a(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                dt = nn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                dt = null
            }
        } else
            dt = ct ? nn(e.stateNode.nextSibling) : null;
        return !0
    }
    function ba() {
        for (var e = dt; e; )
            e = nn(e.nextSibling)
    }
    function tr() {
        dt = ct = null,
        Re = !1
    }
    function vi(e) {
        Nt === null ? Nt = [e] : Nt.push(e)
    }
    var Ef = ue.ReactCurrentBatchConfig;
    function $r(e, t, n) {
        if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner,
                n) {
                    if (n.tag !== 1)
                        throw Error(a(309));
                    var r = n.stateNode
                }
                if (!r)
                    throw Error(a(147, e));
                var o = r
                  , l = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(s) {
                    var c = o.refs;
                    s === null ? delete c[l] : c[l] = s
                }
                ,
                t._stringRef = l,
                t)
            }
            if (typeof e != "string")
                throw Error(a(284));
            if (!n._owner)
                throw Error(a(290, e))
        }
        return e
    }
    function Go(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function Ua(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Ba(e) {
        function t(y, m) {
            if (e) {
                var w = y.deletions;
                w === null ? (y.deletions = [m],
                y.flags |= 16) : w.push(m)
            }
        }
        function n(y, m) {
            if (!e)
                return null;
            for (; m !== null; )
                t(y, m),
                m = m.sibling;
            return null
        }
        function r(y, m) {
            for (y = new Map; m !== null; )
                m.key !== null ? y.set(m.key, m) : y.set(m.index, m),
                m = m.sibling;
            return y
        }
        function o(y, m) {
            return y = mn(y, m),
            y.index = 0,
            y.sibling = null,
            y
        }
        function l(y, m, w) {
            return y.index = w,
            e ? (w = y.alternate,
            w !== null ? (w = w.index,
            w < m ? (y.flags |= 2,
            m) : w) : (y.flags |= 2,
            m)) : (y.flags |= 1048576,
            m)
        }
        function s(y) {
            return e && y.alternate === null && (y.flags |= 2),
            y
        }
        function c(y, m, w, M) {
            return m === null || m.tag !== 6 ? (m = ss(w, y.mode, M),
            m.return = y,
            m) : (m = o(m, w),
            m.return = y,
            m)
        }
        function p(y, m, w, M) {
            var X = w.type;
            return X === W ? T(y, m, w.props.children, M, w.key) : m !== null && (m.elementType === X || typeof X == "object" && X !== null && X.$$typeof === de && Ua(X) === m.type) ? (M = o(m, w.props),
            M.ref = $r(y, m, w),
            M.return = y,
            M) : (M = gl(w.type, w.key, w.props, null, y.mode, M),
            M.ref = $r(y, m, w),
            M.return = y,
            M)
        }
        function x(y, m, w, M) {
            return m === null || m.tag !== 4 || m.stateNode.containerInfo !== w.containerInfo || m.stateNode.implementation !== w.implementation ? (m = as(w, y.mode, M),
            m.return = y,
            m) : (m = o(m, w.children || []),
            m.return = y,
            m)
        }
        function T(y, m, w, M, X) {
            return m === null || m.tag !== 7 ? (m = On(w, y.mode, M, X),
            m.return = y,
            m) : (m = o(m, w),
            m.return = y,
            m)
        }
        function R(y, m, w) {
            if (typeof m == "string" && m !== "" || typeof m == "number")
                return m = ss("" + m, y.mode, w),
                m.return = y,
                m;
            if (typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                case ye:
                    return w = gl(m.type, m.key, m.props, null, y.mode, w),
                    w.ref = $r(y, null, m),
                    w.return = y,
                    w;
                case me:
                    return m = as(m, y.mode, w),
                    m.return = y,
                    m;
                case de:
                    var M = m._init;
                    return R(y, M(m._payload), w)
                }
                if (mt(m) || z(m))
                    return m = On(m, y.mode, w, null),
                    m.return = y,
                    m;
                Go(y, m)
            }
            return null
        }
        function P(y, m, w, M) {
            var X = m !== null ? m.key : null;
            if (typeof w == "string" && w !== "" || typeof w == "number")
                return X !== null ? null : c(y, m, "" + w, M);
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case ye:
                    return w.key === X ? p(y, m, w, M) : null;
                case me:
                    return w.key === X ? x(y, m, w, M) : null;
                case de:
                    return X = w._init,
                    P(y, m, X(w._payload), M)
                }
                if (mt(w) || z(w))
                    return X !== null ? null : T(y, m, w, M, null);
                Go(y, w)
            }
            return null
        }
        function $(y, m, w, M, X) {
            if (typeof M == "string" && M !== "" || typeof M == "number")
                return y = y.get(w) || null,
                c(m, y, "" + M, X);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case ye:
                    return y = y.get(M.key === null ? w : M.key) || null,
                    p(m, y, M, X);
                case me:
                    return y = y.get(M.key === null ? w : M.key) || null,
                    x(m, y, M, X);
                case de:
                    var J = M._init;
                    return $(y, m, w, J(M._payload), X)
                }
                if (mt(M) || z(M))
                    return y = y.get(w) || null,
                    T(m, y, M, X, null);
                Go(m, M)
            }
            return null
        }
        function Q(y, m, w, M) {
            for (var X = null, J = null, q = m, re = m = 0, We = null; q !== null && re < w.length; re++) {
                q.index > re ? (We = q,
                q = null) : We = q.sibling;
                var ge = P(y, q, w[re], M);
                if (ge === null) {
                    q === null && (q = We);
                    break
                }
                e && q && ge.alternate === null && t(y, q),
                m = l(ge, m, re),
                J === null ? X = ge : J.sibling = ge,
                J = ge,
                q = We
            }
            if (re === w.length)
                return n(y, q),
                Re && Pn(y, re),
                X;
            if (q === null) {
                for (; re < w.length; re++)
                    q = R(y, w[re], M),
                    q !== null && (m = l(q, m, re),
                    J === null ? X = q : J.sibling = q,
                    J = q);
                return Re && Pn(y, re),
                X
            }
            for (q = r(y, q); re < w.length; re++)
                We = $(q, y, re, w[re], M),
                We !== null && (e && We.alternate !== null && q.delete(We.key === null ? re : We.key),
                m = l(We, m, re),
                J === null ? X = We : J.sibling = We,
                J = We);
            return e && q.forEach(function(hn) {
                return t(y, hn)
            }),
            Re && Pn(y, re),
            X
        }
        function Y(y, m, w, M) {
            var X = z(w);
            if (typeof X != "function")
                throw Error(a(150));
            if (w = X.call(w),
            w == null)
                throw Error(a(151));
            for (var J = X = null, q = m, re = m = 0, We = null, ge = w.next(); q !== null && !ge.done; re++,
            ge = w.next()) {
                q.index > re ? (We = q,
                q = null) : We = q.sibling;
                var hn = P(y, q, ge.value, M);
                if (hn === null) {
                    q === null && (q = We);
                    break
                }
                e && q && hn.alternate === null && t(y, q),
                m = l(hn, m, re),
                J === null ? X = hn : J.sibling = hn,
                J = hn,
                q = We
            }
            if (ge.done)
                return n(y, q),
                Re && Pn(y, re),
                X;
            if (q === null) {
                for (; !ge.done; re++,
                ge = w.next())
                    ge = R(y, ge.value, M),
                    ge !== null && (m = l(ge, m, re),
                    J === null ? X = ge : J.sibling = ge,
                    J = ge);
                return Re && Pn(y, re),
                X
            }
            for (q = r(y, q); !ge.done; re++,
            ge = w.next())
                ge = $(q, y, re, ge.value, M),
                ge !== null && (e && ge.alternate !== null && q.delete(ge.key === null ? re : ge.key),
                m = l(ge, m, re),
                J === null ? X = ge : J.sibling = ge,
                J = ge);
            return e && q.forEach(function(np) {
                return t(y, np)
            }),
            Re && Pn(y, re),
            X
        }
        function Oe(y, m, w, M) {
            if (typeof w == "object" && w !== null && w.type === W && w.key === null && (w = w.props.children),
            typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case ye:
                    e: {
                        for (var X = w.key, J = m; J !== null; ) {
                            if (J.key === X) {
                                if (X = w.type,
                                X === W) {
                                    if (J.tag === 7) {
                                        n(y, J.sibling),
                                        m = o(J, w.props.children),
                                        m.return = y,
                                        y = m;
                                        break e
                                    }
                                } else if (J.elementType === X || typeof X == "object" && X !== null && X.$$typeof === de && Ua(X) === J.type) {
                                    n(y, J.sibling),
                                    m = o(J, w.props),
                                    m.ref = $r(y, J, w),
                                    m.return = y,
                                    y = m;
                                    break e
                                }
                                n(y, J);
                                break
                            } else
                                t(y, J);
                            J = J.sibling
                        }
                        w.type === W ? (m = On(w.props.children, y.mode, M, w.key),
                        m.return = y,
                        y = m) : (M = gl(w.type, w.key, w.props, null, y.mode, M),
                        M.ref = $r(y, m, w),
                        M.return = y,
                        y = M)
                    }
                    return s(y);
                case me:
                    e: {
                        for (J = w.key; m !== null; ) {
                            if (m.key === J)
                                if (m.tag === 4 && m.stateNode.containerInfo === w.containerInfo && m.stateNode.implementation === w.implementation) {
                                    n(y, m.sibling),
                                    m = o(m, w.children || []),
                                    m.return = y,
                                    y = m;
                                    break e
                                } else {
                                    n(y, m);
                                    break
                                }
                            else
                                t(y, m);
                            m = m.sibling
                        }
                        m = as(w, y.mode, M),
                        m.return = y,
                        y = m
                    }
                    return s(y);
                case de:
                    return J = w._init,
                    Oe(y, m, J(w._payload), M)
                }
                if (mt(w))
                    return Q(y, m, w, M);
                if (z(w))
                    return Y(y, m, w, M);
                Go(y, w)
            }
            return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w,
            m !== null && m.tag === 6 ? (n(y, m.sibling),
            m = o(m, w),
            m.return = y,
            y = m) : (n(y, m),
            m = ss(w, y.mode, M),
            m.return = y,
            y = m),
            s(y)) : n(y, m)
        }
        return Oe
    }
    var nr = Ba(!0)
      , Va = Ba(!1)
      , Ko = rn(null)
      , Yo = null
      , rr = null
      , gi = null;
    function yi() {
        gi = rr = Yo = null
    }
    function wi(e) {
        var t = Ko.current;
        _e(Ko),
        e._currentValue = t
    }
    function xi(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function or(e, t) {
        Yo = e,
        gi = rr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (ot = !0),
        e.firstContext = null)
    }
    function wt(e) {
        var t = e._currentValue;
        if (gi !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            rr === null) {
                if (Yo === null)
                    throw Error(a(308));
                rr = e,
                Yo.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                rr = rr.next = e;
        return t
    }
    var Tn = null;
    function Si(e) {
        Tn === null ? Tn = [e] : Tn.push(e)
    }
    function $a(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n,
        Si(t)) : (n.next = o.next,
        o.next = n),
        t.interleaved = n,
        Bt(e, r)
    }
    function Bt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var sn = !1;
    function ki(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Wa(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function Vt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function an(e, t, n) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
        ve & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next,
            o.next = t),
            r.pending = t,
            Bt(e, n)
        }
        return o = r.interleaved,
        o === null ? (t.next = t,
        Si(r)) : (t.next = o.next,
        o.next = t),
        r.interleaved = t,
        Bt(e, n)
    }
    function Xo(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Al(e, n)
        }
    }
    function Ha(e, t) {
        var n = e.updateQueue
          , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
        n === r)) {
            var o = null
              , l = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var s = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    l === null ? o = l = s : l = l.next = s,
                    n = n.next
                } while (n !== null);
                l === null ? o = l = t : l = l.next = t
            } else
                o = l = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    function Zo(e, t, n, r) {
        var o = e.updateQueue;
        sn = !1;
        var l = o.firstBaseUpdate
          , s = o.lastBaseUpdate
          , c = o.shared.pending;
        if (c !== null) {
            o.shared.pending = null;
            var p = c
              , x = p.next;
            p.next = null,
            s === null ? l = x : s.next = x,
            s = p;
            var T = e.alternate;
            T !== null && (T = T.updateQueue,
            c = T.lastBaseUpdate,
            c !== s && (c === null ? T.firstBaseUpdate = x : c.next = x,
            T.lastBaseUpdate = p))
        }
        if (l !== null) {
            var R = o.baseState;
            s = 0,
            T = x = p = null,
            c = l;
            do {
                var P = c.lane
                  , $ = c.eventTime;
                if ((r & P) === P) {
                    T !== null && (T = T.next = {
                        eventTime: $,
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    });
                    e: {
                        var Q = e
                          , Y = c;
                        switch (P = t,
                        $ = n,
                        Y.tag) {
                        case 1:
                            if (Q = Y.payload,
                            typeof Q == "function") {
                                R = Q.call($, R, P);
                                break e
                            }
                            R = Q;
                            break e;
                        case 3:
                            Q.flags = Q.flags & -65537 | 128;
                        case 0:
                            if (Q = Y.payload,
                            P = typeof Q == "function" ? Q.call($, R, P) : Q,
                            P == null)
                                break e;
                            R = F({}, R, P);
                            break e;
                        case 2:
                            sn = !0
                        }
                    }
                    c.callback !== null && c.lane !== 0 && (e.flags |= 64,
                    P = o.effects,
                    P === null ? o.effects = [c] : P.push(c))
                } else
                    $ = {
                        eventTime: $,
                        lane: P,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    },
                    T === null ? (x = T = $,
                    p = R) : T = T.next = $,
                    s |= P;
                if (c = c.next,
                c === null) {
                    if (c = o.shared.pending,
                    c === null)
                        break;
                    P = c,
                    c = P.next,
                    P.next = null,
                    o.lastBaseUpdate = P,
                    o.shared.pending = null
                }
            } while (!0);
            if (T === null && (p = R),
            o.baseState = p,
            o.firstBaseUpdate = x,
            o.lastBaseUpdate = T,
            t = o.shared.interleaved,
            t !== null) {
                o = t;
                do
                    s |= o.lane,
                    o = o.next;
                while (o !== t)
            } else
                l === null && (o.shared.lanes = 0);
            jn |= s,
            e.lanes = s,
            e.memoizedState = R
        }
    }
    function Qa(e, t, n) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t]
                  , o = r.callback;
                if (o !== null) {
                    if (r.callback = null,
                    r = n,
                    typeof o != "function")
                        throw Error(a(191, o));
                    o.call(r)
                }
            }
    }
    var Wr = {}
      , Lt = rn(Wr)
      , Hr = rn(Wr)
      , Qr = rn(Wr);
    function Rn(e) {
        if (e === Wr)
            throw Error(a(174));
        return e
    }
    function Ci(e, t) {
        switch (Ee(Qr, t),
        Ee(Hr, e),
        Ee(Lt, Wr),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Kt(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = Kt(t, e)
        }
        _e(Lt),
        Ee(Lt, t)
    }
    function lr() {
        _e(Lt),
        _e(Hr),
        _e(Qr)
    }
    function Ga(e) {
        Rn(Qr.current);
        var t = Rn(Lt.current)
          , n = Kt(t, e.type);
        t !== n && (Ee(Hr, e),
        Ee(Lt, n))
    }
    function Ei(e) {
        Hr.current === e && (_e(Lt),
        _e(Hr))
    }
    var je = rn(0);
    function Jo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Ni = [];
    function _i() {
        for (var e = 0; e < Ni.length; e++)
            Ni[e]._workInProgressVersionPrimary = null;
        Ni.length = 0
    }
    var qo = ue.ReactCurrentDispatcher
      , Pi = ue.ReactCurrentBatchConfig
      , zn = 0
      , Me = null
      , Ue = null
      , Ve = null
      , el = !1
      , Gr = !1
      , Kr = 0
      , Nf = 0;
    function Ke() {
        throw Error(a(321))
    }
    function Ti(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Et(e[n], t[n]))
                return !1;
        return !0
    }
    function Ri(e, t, n, r, o, l) {
        if (zn = l,
        Me = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        qo.current = e === null || e.memoizedState === null ? Rf : zf,
        e = n(r, o),
        Gr) {
            l = 0;
            do {
                if (Gr = !1,
                Kr = 0,
                25 <= l)
                    throw Error(a(301));
                l += 1,
                Ve = Ue = null,
                t.updateQueue = null,
                qo.current = jf,
                e = n(r, o)
            } while (Gr)
        }
        if (qo.current = rl,
        t = Ue !== null && Ue.next !== null,
        zn = 0,
        Ve = Ue = Me = null,
        el = !1,
        t)
            throw Error(a(300));
        return e
    }
    function zi() {
        var e = Kr !== 0;
        return Kr = 0,
        e
    }
    function It() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ve === null ? Me.memoizedState = Ve = e : Ve = Ve.next = e,
        Ve
    }
    function xt() {
        if (Ue === null) {
            var e = Me.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Ue.next;
        var t = Ve === null ? Me.memoizedState : Ve.next;
        if (t !== null)
            Ve = t,
            Ue = e;
        else {
            if (e === null)
                throw Error(a(310));
            Ue = e,
            e = {
                memoizedState: Ue.memoizedState,
                baseState: Ue.baseState,
                baseQueue: Ue.baseQueue,
                queue: Ue.queue,
                next: null
            },
            Ve === null ? Me.memoizedState = Ve = e : Ve = Ve.next = e
        }
        return Ve
    }
    function Yr(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ji(e) {
        var t = xt()
          , n = t.queue;
        if (n === null)
            throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = Ue
          , o = r.baseQueue
          , l = n.pending;
        if (l !== null) {
            if (o !== null) {
                var s = o.next;
                o.next = l.next,
                l.next = s
            }
            r.baseQueue = o = l,
            n.pending = null
        }
        if (o !== null) {
            l = o.next,
            r = r.baseState;
            var c = s = null
              , p = null
              , x = l;
            do {
                var T = x.lane;
                if ((zn & T) === T)
                    p !== null && (p = p.next = {
                        lane: 0,
                        action: x.action,
                        hasEagerState: x.hasEagerState,
                        eagerState: x.eagerState,
                        next: null
                    }),
                    r = x.hasEagerState ? x.eagerState : e(r, x.action);
                else {
                    var R = {
                        lane: T,
                        action: x.action,
                        hasEagerState: x.hasEagerState,
                        eagerState: x.eagerState,
                        next: null
                    };
                    p === null ? (c = p = R,
                    s = r) : p = p.next = R,
                    Me.lanes |= T,
                    jn |= T
                }
                x = x.next
            } while (x !== null && x !== l);
            p === null ? s = r : p.next = c,
            Et(r, t.memoizedState) || (ot = !0),
            t.memoizedState = r,
            t.baseState = s,
            t.baseQueue = p,
            n.lastRenderedState = r
        }
        if (e = n.interleaved,
        e !== null) {
            o = e;
            do
                l = o.lane,
                Me.lanes |= l,
                jn |= l,
                o = o.next;
            while (o !== e)
        } else
            o === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }
    function Mi(e) {
        var t = xt()
          , n = t.queue;
        if (n === null)
            throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch
          , o = n.pending
          , l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var s = o = o.next;
            do
                l = e(l, s.action),
                s = s.next;
            while (s !== o);
            Et(l, t.memoizedState) || (ot = !0),
            t.memoizedState = l,
            t.baseQueue === null && (t.baseState = l),
            n.lastRenderedState = l
        }
        return [l, r]
    }
    function Ka() {}
    function Ya(e, t) {
        var n = Me
          , r = xt()
          , o = t()
          , l = !Et(r.memoizedState, o);
        if (l && (r.memoizedState = o,
        ot = !0),
        r = r.queue,
        Li(Ja.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || Ve !== null && Ve.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            Xr(9, Za.bind(null, n, r, o, t), void 0, null),
            $e === null)
                throw Error(a(349));
            zn & 30 || Xa(n, t, o)
        }
        return o
    }
    function Xa(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = Me.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Me.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function Za(e, t, n, r) {
        t.value = n,
        t.getSnapshot = r,
        qa(t) && eu(e)
    }
    function Ja(e, t, n) {
        return n(function() {
            qa(t) && eu(e)
        })
    }
    function qa(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Et(e, n)
        } catch {
            return !0
        }
    }
    function eu(e) {
        var t = Bt(e, 1);
        t !== null && Rt(t, e, 1, -1)
    }
    function tu(e) {
        var t = It();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Yr,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = Tf.bind(null, Me, e),
        [t.memoizedState, e]
    }
    function Xr(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        },
        t = Me.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Me.updateQueue = t,
        t.lastEffect = e.next = e) : (n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (r = n.next,
        n.next = e,
        e.next = r,
        t.lastEffect = e)),
        e
    }
    function nu() {
        return xt().memoizedState
    }
    function tl(e, t, n, r) {
        var o = It();
        Me.flags |= e,
        o.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r)
    }
    function nl(e, t, n, r) {
        var o = xt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (Ue !== null) {
            var s = Ue.memoizedState;
            if (l = s.destroy,
            r !== null && Ti(r, s.deps)) {
                o.memoizedState = Xr(t, n, l, r);
                return
            }
        }
        Me.flags |= e,
        o.memoizedState = Xr(1 | t, n, l, r)
    }
    function ru(e, t) {
        return tl(8390656, 8, e, t)
    }
    function Li(e, t) {
        return nl(2048, 8, e, t)
    }
    function ou(e, t) {
        return nl(4, 2, e, t)
    }
    function lu(e, t) {
        return nl(4, 4, e, t)
    }
    function iu(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function su(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        nl(4, 4, iu.bind(null, t, e), n)
    }
    function Ii() {}
    function au(e, t) {
        var n = xt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ti(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
    }
    function uu(e, t) {
        var n = xt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ti(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
    }
    function cu(e, t, n) {
        return zn & 21 ? (Et(n, t) || (n = Us(),
        Me.lanes |= n,
        jn |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
        ot = !0),
        e.memoizedState = n)
    }
    function _f(e, t) {
        var n = Se;
        Se = n !== 0 && 4 > n ? n : 4,
        e(!0);
        var r = Pi.transition;
        Pi.transition = {};
        try {
            e(!1),
            t()
        } finally {
            Se = n,
            Pi.transition = r
        }
    }
    function du() {
        return xt().memoizedState
    }
    function Pf(e, t, n) {
        var r = fn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        fu(e))
            pu(t, n);
        else if (n = $a(e, t, n, r),
        n !== null) {
            var o = qe();
            Rt(n, e, r, o),
            mu(n, t, r)
        }
    }
    function Tf(e, t, n) {
        var r = fn(e)
          , o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (fu(e))
            pu(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer,
            l !== null))
                try {
                    var s = t.lastRenderedState
                      , c = l(s, n);
                    if (o.hasEagerState = !0,
                    o.eagerState = c,
                    Et(c, s)) {
                        var p = t.interleaved;
                        p === null ? (o.next = o,
                        Si(t)) : (o.next = p.next,
                        p.next = o),
                        t.interleaved = o;
                        return
                    }
                } catch {} finally {}
            n = $a(e, t, o, r),
            n !== null && (o = qe(),
            Rt(n, e, r, o),
            mu(n, t, r))
        }
    }
    function fu(e) {
        var t = e.alternate;
        return e === Me || t !== null && t === Me
    }
    function pu(e, t) {
        Gr = el = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function mu(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Al(e, n)
        }
    }
    var rl = {
        readContext: wt,
        useCallback: Ke,
        useContext: Ke,
        useEffect: Ke,
        useImperativeHandle: Ke,
        useInsertionEffect: Ke,
        useLayoutEffect: Ke,
        useMemo: Ke,
        useReducer: Ke,
        useRef: Ke,
        useState: Ke,
        useDebugValue: Ke,
        useDeferredValue: Ke,
        useTransition: Ke,
        useMutableSource: Ke,
        useSyncExternalStore: Ke,
        useId: Ke,
        unstable_isNewReconciler: !1
    }
      , Rf = {
        readContext: wt,
        useCallback: function(e, t) {
            return It().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: wt,
        useEffect: ru,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null,
            tl(4194308, 4, iu.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return tl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return tl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = It();
            return t = t === void 0 ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var r = It();
            return t = n !== void 0 ? n(t) : t,
            r.memoizedState = r.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            r.queue = e,
            e = e.dispatch = Pf.bind(null, Me, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = It();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: tu,
        useDebugValue: Ii,
        useDeferredValue: function(e) {
            return It().memoizedState = e
        },
        useTransition: function() {
            var e = tu(!1)
              , t = e[0];
            return e = _f.bind(null, e[1]),
            It().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Me
              , o = It();
            if (Re) {
                if (n === void 0)
                    throw Error(a(407));
                n = n()
            } else {
                if (n = t(),
                $e === null)
                    throw Error(a(349));
                zn & 30 || Xa(r, t, n)
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l,
            ru(Ja.bind(null, r, l, e), [e]),
            r.flags |= 2048,
            Xr(9, Za.bind(null, r, l, n, t), void 0, null),
            n
        },
        useId: function() {
            var e = It()
              , t = $e.identifierPrefix;
            if (Re) {
                var n = Ut
                  , r = bt;
                n = (r & ~(1 << 32 - Ct(r) - 1)).toString(32) + n,
                t = ":" + t + "R" + n,
                n = Kr++,
                0 < n && (t += "H" + n.toString(32)),
                t += ":"
            } else
                n = Nf++,
                t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , zf = {
        readContext: wt,
        useCallback: au,
        useContext: wt,
        useEffect: Li,
        useImperativeHandle: su,
        useInsertionEffect: ou,
        useLayoutEffect: lu,
        useMemo: uu,
        useReducer: ji,
        useRef: nu,
        useState: function() {
            return ji(Yr)
        },
        useDebugValue: Ii,
        useDeferredValue: function(e) {
            var t = xt();
            return cu(t, Ue.memoizedState, e)
        },
        useTransition: function() {
            var e = ji(Yr)[0]
              , t = xt().memoizedState;
            return [e, t]
        },
        useMutableSource: Ka,
        useSyncExternalStore: Ya,
        useId: du,
        unstable_isNewReconciler: !1
    }
      , jf = {
        readContext: wt,
        useCallback: au,
        useContext: wt,
        useEffect: Li,
        useImperativeHandle: su,
        useInsertionEffect: ou,
        useLayoutEffect: lu,
        useMemo: uu,
        useReducer: Mi,
        useRef: nu,
        useState: function() {
            return Mi(Yr)
        },
        useDebugValue: Ii,
        useDeferredValue: function(e) {
            var t = xt();
            return Ue === null ? t.memoizedState = e : cu(t, Ue.memoizedState, e)
        },
        useTransition: function() {
            var e = Mi(Yr)[0]
              , t = xt().memoizedState;
            return [e, t]
        },
        useMutableSource: Ka,
        useSyncExternalStore: Ya,
        useId: du,
        unstable_isNewReconciler: !1
    };
    function _t(e, t) {
        if (e && e.defaultProps) {
            t = F({}, t),
            e = e.defaultProps;
            for (var n in e)
                t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }
    function Oi(e, t, n, r) {
        t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : F({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var ol = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Cn(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = qe()
              , o = fn(e)
              , l = Vt(r, o);
            l.payload = t,
            n != null && (l.callback = n),
            t = an(e, l, o),
            t !== null && (Rt(t, e, o, r),
            Xo(t, e, o))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = qe()
              , o = fn(e)
              , l = Vt(r, o);
            l.tag = 1,
            l.payload = t,
            n != null && (l.callback = n),
            t = an(e, l, o),
            t !== null && (Rt(t, e, o, r),
            Xo(t, e, o))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = qe()
              , r = fn(e)
              , o = Vt(n, r);
            o.tag = 2,
            t != null && (o.callback = t),
            t = an(e, o, r),
            t !== null && (Rt(t, e, r, n),
            Xo(t, e, r))
        }
    };
    function hu(e, t, n, r, o, l, s) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, s) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(o, l) : !0
    }
    function vu(e, t, n) {
        var r = !1
          , o = on
          , l = t.contextType;
        return typeof l == "object" && l !== null ? l = wt(l) : (o = rt(t) ? Nn : Ge.current,
        r = t.contextTypes,
        l = (r = r != null) ? Jn(e, o) : on),
        t = new t(n,l),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = ol,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = o,
        e.__reactInternalMemoizedMaskedChildContext = l),
        t
    }
    function gu(e, t, n, r) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ol.enqueueReplaceState(t, t.state, null)
    }
    function Ai(e, t, n, r) {
        var o = e.stateNode;
        o.props = n,
        o.state = e.memoizedState,
        o.refs = {},
        ki(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = wt(l) : (l = rt(t) ? Nn : Ge.current,
        o.context = Jn(e, l)),
        o.state = e.memoizedState,
        l = t.getDerivedStateFromProps,
        typeof l == "function" && (Oi(e, t, l, n),
        o.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
        t !== o.state && ol.enqueueReplaceState(o, o.state, null),
        Zo(e, n, o, r),
        o.state = e.memoizedState),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function ir(e, t) {
        try {
            var n = ""
              , r = t;
            do
                n += ne(r),
                r = r.return;
            while (r);
            var o = n
        } catch (l) {
            o = `
Error generating stack: ` + l.message + `
` + l.stack
        }
        return {
            value: e,
            source: t,
            stack: o,
            digest: null
        }
    }
    function Di(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }
    function Fi(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var Mf = typeof WeakMap == "function" ? WeakMap : Map;
    function yu(e, t, n) {
        n = Vt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            dl || (dl = !0,
            qi = r),
            Fi(e, t)
        }
        ,
        n
    }
    function wu(e, t, n) {
        n = Vt(-1, n),
        n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o)
            }
            ,
            n.callback = function() {
                Fi(e, t)
            }
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            Fi(e, t),
            typeof r != "function" && (cn === null ? cn = new Set([this]) : cn.add(this));
            var s = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: s !== null ? s : ""
            })
        }
        ),
        n
    }
    function xu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Mf;
            var o = new Set;
            r.set(t, o)
        } else
            o = r.get(t),
            o === void 0 && (o = new Set,
            r.set(t, o));
        o.has(n) || (o.add(n),
        e = Qf.bind(null, e, t, n),
        t.then(e, e))
    }
    function Su(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function ku(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = o,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
        n.flags |= 131072,
        n.flags &= -52805,
        n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1),
        t.tag = 2,
        an(n, t, 1))),
        n.lanes |= 1),
        e)
    }
    var Lf = ue.ReactCurrentOwner
      , ot = !1;
    function Je(e, t, n, r) {
        t.child = e === null ? Va(t, null, n, r) : nr(t, e.child, n, r)
    }
    function Cu(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return or(t, o),
        r = Ri(e, t, n, r, l, o),
        n = zi(),
        e !== null && !ot ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~o,
        $t(e, t, o)) : (Re && n && fi(t),
        t.flags |= 1,
        Je(e, t, r, o),
        t.child)
    }
    function Eu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !is(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = l,
            Nu(e, t, l, r, o)) : (e = gl(n.type, null, r, t, t.mode, o),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (l = e.child,
        !(e.lanes & o)) {
            var s = l.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : Ar,
            n(s, r) && e.ref === t.ref)
                return $t(e, t, o)
        }
        return t.flags |= 1,
        e = mn(l, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Nu(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Ar(l, r) && e.ref === t.ref)
                if (ot = !1,
                t.pendingProps = r = l,
                (e.lanes & o) !== 0)
                    e.flags & 131072 && (ot = !0);
                else
                    return t.lanes = e.lanes,
                    $t(e, t, o)
        }
        return bi(e, t, n, r, o)
    }
    function _u(e, t, n) {
        var r = t.pendingProps
          , o = r.children
          , l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1))
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ee(ar, ft),
                ft |= n;
            else {
                if (!(n & 1073741824))
                    return e = l !== null ? l.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    Ee(ar, ft),
                    ft |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                r = l !== null ? l.baseLanes : n,
                Ee(ar, ft),
                ft |= r
            }
        else
            l !== null ? (r = l.baseLanes | n,
            t.memoizedState = null) : r = n,
            Ee(ar, ft),
            ft |= r;
        return Je(e, t, o, n),
        t.child
    }
    function Pu(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function bi(e, t, n, r, o) {
        var l = rt(n) ? Nn : Ge.current;
        return l = Jn(t, l),
        or(t, o),
        n = Ri(e, t, n, r, l, o),
        r = zi(),
        e !== null && !ot ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~o,
        $t(e, t, o)) : (Re && r && fi(t),
        t.flags |= 1,
        Je(e, t, n, o),
        t.child)
    }
    function Tu(e, t, n, r, o) {
        if (rt(n)) {
            var l = !0;
            Vo(t)
        } else
            l = !1;
        if (or(t, o),
        t.stateNode === null)
            il(e, t),
            vu(t, n, r),
            Ai(t, n, r, o),
            r = !0;
        else if (e === null) {
            var s = t.stateNode
              , c = t.memoizedProps;
            s.props = c;
            var p = s.context
              , x = n.contextType;
            typeof x == "object" && x !== null ? x = wt(x) : (x = rt(n) ? Nn : Ge.current,
            x = Jn(t, x));
            var T = n.getDerivedStateFromProps
              , R = typeof T == "function" || typeof s.getSnapshotBeforeUpdate == "function";
            R || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== r || p !== x) && gu(t, s, r, x),
            sn = !1;
            var P = t.memoizedState;
            s.state = P,
            Zo(t, r, s, o),
            p = t.memoizedState,
            c !== r || P !== p || nt.current || sn ? (typeof T == "function" && (Oi(t, n, T, r),
            p = t.memoizedState),
            (c = sn || hu(t, n, c, r, P, p, x)) ? (R || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
            typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = p),
            s.props = r,
            s.state = p,
            s.context = x,
            r = c) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            r = !1)
        } else {
            s = t.stateNode,
            Wa(e, t),
            c = t.memoizedProps,
            x = t.type === t.elementType ? c : _t(t.type, c),
            s.props = x,
            R = t.pendingProps,
            P = s.context,
            p = n.contextType,
            typeof p == "object" && p !== null ? p = wt(p) : (p = rt(n) ? Nn : Ge.current,
            p = Jn(t, p));
            var $ = n.getDerivedStateFromProps;
            (T = typeof $ == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== R || P !== p) && gu(t, s, r, p),
            sn = !1,
            P = t.memoizedState,
            s.state = P,
            Zo(t, r, s, o);
            var Q = t.memoizedState;
            c !== R || P !== Q || nt.current || sn ? (typeof $ == "function" && (Oi(t, n, $, r),
            Q = t.memoizedState),
            (x = sn || hu(t, n, x, r, P, Q, p) || !1) ? (T || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, Q, p),
            typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, Q, p)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && P === e.memoizedState || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = r,
            t.memoizedState = Q),
            s.props = r,
            s.state = Q,
            s.context = p,
            r = x) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && P === e.memoizedState || (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024),
            r = !1)
        }
        return Ui(e, t, n, r, l, o)
    }
    function Ui(e, t, n, r, o, l) {
        Pu(e, t);
        var s = (t.flags & 128) !== 0;
        if (!r && !s)
            return o && La(t, n, !1),
            $t(e, t, l);
        r = t.stateNode,
        Lf.current = t;
        var c = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1,
        e !== null && s ? (t.child = nr(t, e.child, null, l),
        t.child = nr(t, null, c, l)) : Je(e, t, c, l),
        t.memoizedState = r.state,
        o && La(t, n, !0),
        t.child
    }
    function Ru(e) {
        var t = e.stateNode;
        t.pendingContext ? ja(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ja(e, t.context, !1),
        Ci(e, t.containerInfo)
    }
    function zu(e, t, n, r, o) {
        return tr(),
        vi(o),
        t.flags |= 256,
        Je(e, t, n, r),
        t.child
    }
    var Bi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Vi(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function ju(e, t, n) {
        var r = t.pendingProps, o = je.current, l = !1, s = (t.flags & 128) !== 0, c;
        if ((c = s) || (c = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        c ? (l = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
        Ee(je, o & 1),
        e === null)
            return hi(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
            null) : (s = r.children,
            e = r.fallback,
            l ? (r = t.mode,
            l = t.child,
            s = {
                mode: "hidden",
                children: s
            },
            !(r & 1) && l !== null ? (l.childLanes = 0,
            l.pendingProps = s) : l = yl(s, r, 0, null),
            e = On(e, r, n, null),
            l.return = t,
            e.return = t,
            l.sibling = e,
            t.child = l,
            t.child.memoizedState = Vi(n),
            t.memoizedState = Bi,
            e) : $i(t, s));
        if (o = e.memoizedState,
        o !== null && (c = o.dehydrated,
        c !== null))
            return If(e, t, s, r, c, o, n);
        if (l) {
            l = r.fallback,
            s = t.mode,
            o = e.child,
            c = o.sibling;
            var p = {
                mode: "hidden",
                children: r.children
            };
            return !(s & 1) && t.child !== o ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = p,
            t.deletions = null) : (r = mn(o, p),
            r.subtreeFlags = o.subtreeFlags & 14680064),
            c !== null ? l = mn(c, l) : (l = On(l, s, n, null),
            l.flags |= 2),
            l.return = t,
            r.return = t,
            r.sibling = l,
            t.child = r,
            r = l,
            l = t.child,
            s = e.child.memoizedState,
            s = s === null ? Vi(n) : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions
            },
            l.memoizedState = s,
            l.childLanes = e.childLanes & ~n,
            t.memoizedState = Bi,
            r
        }
        return l = e.child,
        e = l.sibling,
        r = mn(l, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
        n === null ? (t.deletions = [e],
        t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
    }
    function $i(e, t) {
        return t = yl({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function ll(e, t, n, r) {
        return r !== null && vi(r),
        nr(t, e.child, null, n),
        e = $i(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function If(e, t, n, r, o, l, s) {
        if (n)
            return t.flags & 256 ? (t.flags &= -257,
            r = Di(Error(a(422))),
            ll(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (l = r.fallback,
            o = t.mode,
            r = yl({
                mode: "visible",
                children: r.children
            }, o, 0, null),
            l = On(l, o, s, null),
            l.flags |= 2,
            r.return = t,
            l.return = t,
            r.sibling = l,
            t.child = r,
            t.mode & 1 && nr(t, e.child, null, s),
            t.child.memoizedState = Vi(s),
            t.memoizedState = Bi,
            l);
        if (!(t.mode & 1))
            return ll(e, t, s, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset,
            r)
                var c = r.dgst;
            return r = c,
            l = Error(a(419)),
            r = Di(l, r, void 0),
            ll(e, t, s, r)
        }
        if (c = (s & e.childLanes) !== 0,
        ot || c) {
            if (r = $e,
            r !== null) {
                switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
                }
                o = o & (r.suspendedLanes | s) ? 0 : o,
                o !== 0 && o !== l.retryLane && (l.retryLane = o,
                Bt(e, o),
                Rt(r, e, o, -1))
            }
            return ls(),
            r = Di(Error(a(421))),
            ll(e, t, s, r)
        }
        return o.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = Gf.bind(null, e),
        o._reactRetry = t,
        null) : (e = l.treeContext,
        dt = nn(o.nextSibling),
        ct = t,
        Re = !0,
        Nt = null,
        e !== null && (gt[yt++] = bt,
        gt[yt++] = Ut,
        gt[yt++] = _n,
        bt = e.id,
        Ut = e.overflow,
        _n = t),
        t = $i(t, r.children),
        t.flags |= 4096,
        t)
    }
    function Mu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t),
        xi(e.return, t, n)
    }
    function Wi(e, t, n, r, o) {
        var l = e.memoizedState;
        l === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: o
        } : (l.isBackwards = t,
        l.rendering = null,
        l.renderingStartTime = 0,
        l.last = r,
        l.tail = n,
        l.tailMode = o)
    }
    function Lu(e, t, n) {
        var r = t.pendingProps
          , o = r.revealOrder
          , l = r.tail;
        if (Je(e, t, r.children, n),
        r = je.current,
        r & 2)
            r = r & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && e.flags & 128)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Mu(e, n, t);
                    else if (e.tag === 19)
                        Mu(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            r &= 1
        }
        if (Ee(je, r),
        !(t.mode & 1))
            t.memoizedState = null;
        else
            switch (o) {
            case "forwards":
                for (n = t.child,
                o = null; n !== null; )
                    e = n.alternate,
                    e !== null && Jo(e) === null && (o = n),
                    n = n.sibling;
                n = o,
                n === null ? (o = t.child,
                t.child = null) : (o = n.sibling,
                n.sibling = null),
                Wi(t, !1, o, n, l);
                break;
            case "backwards":
                for (n = null,
                o = t.child,
                t.child = null; o !== null; ) {
                    if (e = o.alternate,
                    e !== null && Jo(e) === null) {
                        t.child = o;
                        break
                    }
                    e = o.sibling,
                    o.sibling = n,
                    n = o,
                    o = e
                }
                Wi(t, !0, n, null, l);
                break;
            case "together":
                Wi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function il(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function $t(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        jn |= t.lanes,
        !(n & t.childLanes))
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(a(153));
        if (t.child !== null) {
            for (e = t.child,
            n = mn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = mn(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Of(e, t, n) {
        switch (t.tag) {
        case 3:
            Ru(t),
            tr();
            break;
        case 5:
            Ga(t);
            break;
        case 1:
            rt(t.type) && Vo(t);
            break;
        case 4:
            Ci(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
              , o = t.memoizedProps.value;
            Ee(Ko, r._currentValue),
            r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState,
            r !== null)
                return r.dehydrated !== null ? (Ee(je, je.current & 1),
                t.flags |= 128,
                null) : n & t.child.childLanes ? ju(e, t, n) : (Ee(je, je.current & 1),
                e = $t(e, t, n),
                e !== null ? e.sibling : null);
            Ee(je, je.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
            e.flags & 128) {
                if (r)
                    return Lu(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState,
            o !== null && (o.rendering = null,
            o.tail = null,
            o.lastEffect = null),
            Ee(je, je.current),
            r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            _u(e, t, n)
        }
        return $t(e, t, n)
    }
    var Iu, Hi, Ou, Au;
    Iu = function(e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6)
                e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ,
    Hi = function() {}
    ,
    Ou = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode,
            Rn(Lt.current);
            var l = null;
            switch (n) {
            case "input":
                o = vr(e, o),
                r = vr(e, r),
                l = [];
                break;
            case "select":
                o = F({}, o, {
                    value: void 0
                }),
                r = F({}, r, {
                    value: void 0
                }),
                l = [];
                break;
            case "textarea":
                o = gr(e, o),
                r = gr(e, r),
                l = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bo)
            }
            Vn(n, r);
            var s;
            n = null;
            for (x in o)
                if (!r.hasOwnProperty(x) && o.hasOwnProperty(x) && o[x] != null)
                    if (x === "style") {
                        var c = o[x];
                        for (s in c)
                            c.hasOwnProperty(s) && (n || (n = {}),
                            n[s] = "")
                    } else
                        x !== "dangerouslySetInnerHTML" && x !== "children" && x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && x !== "autoFocus" && (d.hasOwnProperty(x) ? l || (l = []) : (l = l || []).push(x, null));
            for (x in r) {
                var p = r[x];
                if (c = o != null ? o[x] : void 0,
                r.hasOwnProperty(x) && p !== c && (p != null || c != null))
                    if (x === "style")
                        if (c) {
                            for (s in c)
                                !c.hasOwnProperty(s) || p && p.hasOwnProperty(s) || (n || (n = {}),
                                n[s] = "");
                            for (s in p)
                                p.hasOwnProperty(s) && c[s] !== p[s] && (n || (n = {}),
                                n[s] = p[s])
                        } else
                            n || (l || (l = []),
                            l.push(x, n)),
                            n = p;
                    else
                        x === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0,
                        c = c ? c.__html : void 0,
                        p != null && c !== p && (l = l || []).push(x, p)) : x === "children" ? typeof p != "string" && typeof p != "number" || (l = l || []).push(x, "" + p) : x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && (d.hasOwnProperty(x) ? (p != null && x === "onScroll" && Ne("scroll", e),
                        l || c === p || (l = [])) : (l = l || []).push(x, p))
            }
            n && (l = l || []).push("style", n);
            var x = l;
            (t.updateQueue = x) && (t.flags |= 4)
        }
    }
    ,
    Au = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    }
    ;
    function Zr(e, t) {
        if (!Re)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n),
                    n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function Ye(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , r = 0;
        if (t)
            for (var o = e.child; o !== null; )
                n |= o.lanes | o.childLanes,
                r |= o.subtreeFlags & 14680064,
                r |= o.flags & 14680064,
                o.return = e,
                o = o.sibling;
        else
            for (o = e.child; o !== null; )
                n |= o.lanes | o.childLanes,
                r |= o.subtreeFlags,
                r |= o.flags,
                o.return = e,
                o = o.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = n,
        t
    }
    function Af(e, t, n) {
        var r = t.pendingProps;
        switch (pi(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ye(t),
            null;
        case 1:
            return rt(t.type) && Bo(),
            Ye(t),
            null;
        case 3:
            return r = t.stateNode,
            lr(),
            _e(nt),
            _e(Ge),
            _i(),
            r.pendingContext && (r.context = r.pendingContext,
            r.pendingContext = null),
            (e === null || e.child === null) && (Qo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
            Nt !== null && (ns(Nt),
            Nt = null))),
            Hi(e, t),
            Ye(t),
            null;
        case 5:
            Ei(t);
            var o = Rn(Qr.current);
            if (n = t.type,
            e !== null && t.stateNode != null)
                Ou(e, t, n, r, o),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(a(166));
                    return Ye(t),
                    null
                }
                if (e = Rn(Lt.current),
                Qo(t)) {
                    r = t.stateNode,
                    n = t.type;
                    var l = t.memoizedProps;
                    switch (r[Mt] = t,
                    r[Br] = l,
                    e = (t.mode & 1) !== 0,
                    n) {
                    case "dialog":
                        Ne("cancel", r),
                        Ne("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Ne("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Fr.length; o++)
                            Ne(Fr[o], r);
                        break;
                    case "source":
                        Ne("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Ne("error", r),
                        Ne("load", r);
                        break;
                    case "details":
                        Ne("toggle", r);
                        break;
                    case "input":
                        An(r, l),
                        Ne("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = {
                            wasMultiple: !!l.multiple
                        },
                        Ne("invalid", r);
                        break;
                    case "textarea":
                        Ze(r, l),
                        Ne("invalid", r)
                    }
                    Vn(n, l),
                    o = null;
                    for (var s in l)
                        if (l.hasOwnProperty(s)) {
                            var c = l[s];
                            s === "children" ? typeof c == "string" ? r.textContent !== c && (l.suppressHydrationWarning !== !0 && Fo(r.textContent, c, e),
                            o = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (l.suppressHydrationWarning !== !0 && Fo(r.textContent, c, e),
                            o = ["children", "" + c]) : d.hasOwnProperty(s) && c != null && s === "onScroll" && Ne("scroll", r)
                        }
                    switch (n) {
                    case "input":
                        zt(r),
                        xn(r, l, !0);
                        break;
                    case "textarea":
                        zt(r),
                        po(r);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof l.onClick == "function" && (r.onclick = bo)
                    }
                    r = o,
                    t.updateQueue = r,
                    r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = mo(n)),
                    e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n),
                    n === "select" && (s = e,
                    r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                    e[Mt] = t,
                    e[Br] = r,
                    Iu(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (s = wr(n, r),
                        n) {
                        case "dialog":
                            Ne("cancel", e),
                            Ne("close", e),
                            o = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ne("load", e),
                            o = r;
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Fr.length; o++)
                                Ne(Fr[o], e);
                            o = r;
                            break;
                        case "source":
                            Ne("error", e),
                            o = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ne("error", e),
                            Ne("load", e),
                            o = r;
                            break;
                        case "details":
                            Ne("toggle", e),
                            o = r;
                            break;
                        case "input":
                            An(e, r),
                            o = vr(e, r),
                            Ne("invalid", e);
                            break;
                        case "option":
                            o = r;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!r.multiple
                            },
                            o = F({}, r, {
                                value: void 0
                            }),
                            Ne("invalid", e);
                            break;
                        case "textarea":
                            Ze(e, r),
                            o = gr(e, r),
                            Ne("invalid", e);
                            break;
                        default:
                            o = r
                        }
                        Vn(n, o),
                        c = o;
                        for (l in c)
                            if (c.hasOwnProperty(l)) {
                                var p = c[l];
                                l === "style" ? ho(e, p) : l === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0,
                                p != null && Un(e, p)) : l === "children" ? typeof p == "string" ? (n !== "textarea" || p !== "") && ht(e, p) : typeof p == "number" && ht(e, "" + p) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (d.hasOwnProperty(l) ? p != null && l === "onScroll" && Ne("scroll", e) : p != null && ce(e, l, p, s))
                            }
                        switch (n) {
                        case "input":
                            zt(e),
                            xn(e, r, !1);
                            break;
                        case "textarea":
                            zt(e),
                            po(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + he(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple,
                            l = r.value,
                            l != null ? Gt(e, !!r.multiple, l, !1) : r.defaultValue != null && Gt(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default:
                            typeof o.onClick == "function" && (e.onclick = bo)
                        }
                        switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default:
                            r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return Ye(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                Au(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(a(166));
                if (n = Rn(Qr.current),
                Rn(Lt.current),
                Qo(t)) {
                    if (r = t.stateNode,
                    n = t.memoizedProps,
                    r[Mt] = t,
                    (l = r.nodeValue !== n) && (e = ct,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            Fo(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Fo(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    l && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                    r[Mt] = t,
                    t.stateNode = r
            }
            return Ye(t),
            null;
        case 13:
            if (_e(je),
            r = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Re && dt !== null && t.mode & 1 && !(t.flags & 128))
                    ba(),
                    tr(),
                    t.flags |= 98560,
                    l = !1;
                else if (l = Qo(t),
                r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!l)
                            throw Error(a(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(a(317));
                        l[Mt] = t
                    } else
                        tr(),
                        !(t.flags & 128) && (t.memoizedState = null),
                        t.flags |= 4;
                    Ye(t),
                    l = !1
                } else
                    Nt !== null && (ns(Nt),
                    Nt = null),
                    l = !0;
                if (!l)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
            t) : (r = r !== null,
            r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
            t.mode & 1 && (e === null || je.current & 1 ? Be === 0 && (Be = 3) : ls())),
            t.updateQueue !== null && (t.flags |= 4),
            Ye(t),
            null);
        case 4:
            return lr(),
            Hi(e, t),
            e === null && br(t.stateNode.containerInfo),
            Ye(t),
            null;
        case 10:
            return wi(t.type._context),
            Ye(t),
            null;
        case 17:
            return rt(t.type) && Bo(),
            Ye(t),
            null;
        case 19:
            if (_e(je),
            l = t.memoizedState,
            l === null)
                return Ye(t),
                null;
            if (r = (t.flags & 128) !== 0,
            s = l.rendering,
            s === null)
                if (r)
                    Zr(l, !1);
                else {
                    if (Be !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null; ) {
                            if (s = Jo(e),
                            s !== null) {
                                for (t.flags |= 128,
                                Zr(l, !1),
                                r = s.updateQueue,
                                r !== null && (t.updateQueue = r,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                r = n,
                                n = t.child; n !== null; )
                                    l = n,
                                    e = r,
                                    l.flags &= 14680066,
                                    s = l.alternate,
                                    s === null ? (l.childLanes = 0,
                                    l.lanes = e,
                                    l.child = null,
                                    l.subtreeFlags = 0,
                                    l.memoizedProps = null,
                                    l.memoizedState = null,
                                    l.updateQueue = null,
                                    l.dependencies = null,
                                    l.stateNode = null) : (l.childLanes = s.childLanes,
                                    l.lanes = s.lanes,
                                    l.child = s.child,
                                    l.subtreeFlags = 0,
                                    l.deletions = null,
                                    l.memoizedProps = s.memoizedProps,
                                    l.memoizedState = s.memoizedState,
                                    l.updateQueue = s.updateQueue,
                                    l.type = s.type,
                                    e = s.dependencies,
                                    l.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    n = n.sibling;
                                return Ee(je, je.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && Ie() > ur && (t.flags |= 128,
                    r = !0,
                    Zr(l, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Jo(s),
                    e !== null) {
                        if (t.flags |= 128,
                        r = !0,
                        n = e.updateQueue,
                        n !== null && (t.updateQueue = n,
                        t.flags |= 4),
                        Zr(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !s.alternate && !Re)
                            return Ye(t),
                            null
                    } else
                        2 * Ie() - l.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128,
                        r = !0,
                        Zr(l, !1),
                        t.lanes = 4194304);
                l.isBackwards ? (s.sibling = t.child,
                t.child = s) : (n = l.last,
                n !== null ? n.sibling = s : t.child = s,
                l.last = s)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = Ie(),
            t.sibling = null,
            n = je.current,
            Ee(je, r ? n & 1 | 2 : n & 1),
            t) : (Ye(t),
            null);
        case 22:
        case 23:
            return os(),
            r = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
            r && t.mode & 1 ? ft & 1073741824 && (Ye(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(a(156, t.tag))
    }
    function Df(e, t) {
        switch (pi(t),
        t.tag) {
        case 1:
            return rt(t.type) && Bo(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return lr(),
            _e(nt),
            _e(Ge),
            _i(),
            e = t.flags,
            e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return Ei(t),
            null;
        case 13:
            if (_e(je),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(a(340));
                tr()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return _e(je),
            null;
        case 4:
            return lr(),
            null;
        case 10:
            return wi(t.type._context),
            null;
        case 22:
        case 23:
            return os(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var sl = !1
      , Xe = !1
      , Ff = typeof WeakSet == "function" ? WeakSet : Set
      , H = null;
    function sr(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null)
                } catch (r) {
                    Le(e, t, r)
                }
            else
                n.current = null
    }
    function Qi(e, t, n) {
        try {
            n()
        } catch (r) {
            Le(e, t, r)
        }
    }
    var Du = !1;
    function bf(e, t) {
        if (oi = Po,
        e = ha(),
        Xl(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var o = r.anchorOffset
                          , l = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType,
                            l.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var s = 0
                          , c = -1
                          , p = -1
                          , x = 0
                          , T = 0
                          , R = e
                          , P = null;
                        t: for (; ; ) {
                            for (var $; R !== n || o !== 0 && R.nodeType !== 3 || (c = s + o),
                            R !== l || r !== 0 && R.nodeType !== 3 || (p = s + r),
                            R.nodeType === 3 && (s += R.nodeValue.length),
                            ($ = R.firstChild) !== null; )
                                P = R,
                                R = $;
                            for (; ; ) {
                                if (R === e)
                                    break t;
                                if (P === n && ++x === o && (c = s),
                                P === l && ++T === r && (p = s),
                                ($ = R.nextSibling) !== null)
                                    break;
                                R = P,
                                P = R.parentNode
                            }
                            R = $
                        }
                        n = c === -1 || p === -1 ? null : {
                            start: c,
                            end: p
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (li = {
            focusedElem: e,
            selectionRange: n
        },
        Po = !1,
        H = t; H !== null; )
            if (t = H,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                H = e;
            else
                for (; H !== null; ) {
                    t = H;
                    try {
                        var Q = t.alternate;
                        if (t.flags & 1024)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (Q !== null) {
                                    var Y = Q.memoizedProps
                                      , Oe = Q.memoizedState
                                      , y = t.stateNode
                                      , m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? Y : _t(t.type, Y), Oe);
                                    y.__reactInternalSnapshotBeforeUpdate = m
                                }
                                break;
                            case 3:
                                var w = t.stateNode.containerInfo;
                                w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(a(163))
                            }
                    } catch (M) {
                        Le(t, t.return, M)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        H = e;
                        break
                    }
                    H = t.return
                }
        return Q = Du,
        Du = !1,
        Q
    }
    function Jr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null,
        r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0,
                    l !== void 0 && Qi(t, n, l)
                }
                o = o.next
            } while (o !== r)
        }
    }
    function al(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }
    function Gi(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function Fu(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Fu(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[Mt],
        delete t[Br],
        delete t[ui],
        delete t[Sf],
        delete t[kf])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function bu(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Uu(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || bu(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Ki(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
            t.insertBefore(e, n)) : (t = n,
            t.appendChild(e)),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = bo));
        else if (r !== 4 && (e = e.child,
        e !== null))
            for (Ki(e, t, n),
            e = e.sibling; e !== null; )
                Ki(e, t, n),
                e = e.sibling
    }
    function Yi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child,
        e !== null))
            for (Yi(e, t, n),
            e = e.sibling; e !== null; )
                Yi(e, t, n),
                e = e.sibling
    }
    var He = null
      , Pt = !1;
    function un(e, t, n) {
        for (n = n.child; n !== null; )
            Bu(e, t, n),
            n = n.sibling
    }
    function Bu(e, t, n) {
        if (jt && typeof jt.onCommitFiberUnmount == "function")
            try {
                jt.onCommitFiberUnmount(So, n)
            } catch {}
        switch (n.tag) {
        case 5:
            Xe || sr(n, t);
        case 6:
            var r = He
              , o = Pt;
            He = null,
            un(e, t, n),
            He = r,
            Pt = o,
            He !== null && (Pt ? (e = He,
            n = n.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
            break;
        case 18:
            He !== null && (Pt ? (e = He,
            n = n.stateNode,
            e.nodeType === 8 ? ai(e.parentNode, n) : e.nodeType === 1 && ai(e, n),
            zr(e)) : ai(He, n.stateNode));
            break;
        case 4:
            r = He,
            o = Pt,
            He = n.stateNode.containerInfo,
            Pt = !0,
            un(e, t, n),
            He = r,
            Pt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Xe && (r = n.updateQueue,
            r !== null && (r = r.lastEffect,
            r !== null))) {
                o = r = r.next;
                do {
                    var l = o
                      , s = l.destroy;
                    l = l.tag,
                    s !== void 0 && (l & 2 || l & 4) && Qi(n, t, s),
                    o = o.next
                } while (o !== r)
            }
            un(e, t, n);
            break;
        case 1:
            if (!Xe && (sr(n, t),
            r = n.stateNode,
            typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                    r.state = n.memoizedState,
                    r.componentWillUnmount()
                } catch (c) {
                    Le(n, t, c)
                }
            un(e, t, n);
            break;
        case 21:
            un(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Xe = (r = Xe) || n.memoizedState !== null,
            un(e, t, n),
            Xe = r) : un(e, t, n);
            break;
        default:
            un(e, t, n)
        }
    }
    function Vu(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Ff),
            t.forEach(function(r) {
                var o = Kf.bind(null, e, r);
                n.has(r) || (n.add(r),
                r.then(o, o))
            })
        }
    }
    function Tt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                try {
                    var l = e
                      , s = t
                      , c = s;
                    e: for (; c !== null; ) {
                        switch (c.tag) {
                        case 5:
                            He = c.stateNode,
                            Pt = !1;
                            break e;
                        case 3:
                            He = c.stateNode.containerInfo,
                            Pt = !0;
                            break e;
                        case 4:
                            He = c.stateNode.containerInfo,
                            Pt = !0;
                            break e
                        }
                        c = c.return
                    }
                    if (He === null)
                        throw Error(a(160));
                    Bu(l, s, o),
                    He = null,
                    Pt = !1;
                    var p = o.alternate;
                    p !== null && (p.return = null),
                    o.return = null
                } catch (x) {
                    Le(o, t, x)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                $u(t, e),
                t = t.sibling
    }
    function $u(e, t) {
        var n = e.alternate
          , r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Tt(t, e),
            Ot(e),
            r & 4) {
                try {
                    Jr(3, e, e.return),
                    al(3, e)
                } catch (Y) {
                    Le(e, e.return, Y)
                }
                try {
                    Jr(5, e, e.return)
                } catch (Y) {
                    Le(e, e.return, Y)
                }
            }
            break;
        case 1:
            Tt(t, e),
            Ot(e),
            r & 512 && n !== null && sr(n, n.return);
            break;
        case 5:
            if (Tt(t, e),
            Ot(e),
            r & 512 && n !== null && sr(n, n.return),
            e.flags & 32) {
                var o = e.stateNode;
                try {
                    ht(o, "")
                } catch (Y) {
                    Le(e, e.return, Y)
                }
            }
            if (r & 4 && (o = e.stateNode,
            o != null)) {
                var l = e.memoizedProps
                  , s = n !== null ? n.memoizedProps : l
                  , c = e.type
                  , p = e.updateQueue;
                if (e.updateQueue = null,
                p !== null)
                    try {
                        c === "input" && l.type === "radio" && l.name != null && fo(o, l),
                        wr(c, s);
                        var x = wr(c, l);
                        for (s = 0; s < p.length; s += 2) {
                            var T = p[s]
                              , R = p[s + 1];
                            T === "style" ? ho(o, R) : T === "dangerouslySetInnerHTML" ? Un(o, R) : T === "children" ? ht(o, R) : ce(o, T, R, x)
                        }
                        switch (c) {
                        case "input":
                            Dn(o, l);
                            break;
                        case "textarea":
                            At(o, l);
                            break;
                        case "select":
                            var P = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!l.multiple;
                            var $ = l.value;
                            $ != null ? Gt(o, !!l.multiple, $, !1) : P !== !!l.multiple && (l.defaultValue != null ? Gt(o, !!l.multiple, l.defaultValue, !0) : Gt(o, !!l.multiple, l.multiple ? [] : "", !1))
                        }
                        o[Br] = l
                    } catch (Y) {
                        Le(e, e.return, Y)
                    }
            }
            break;
        case 6:
            if (Tt(t, e),
            Ot(e),
            r & 4) {
                if (e.stateNode === null)
                    throw Error(a(162));
                o = e.stateNode,
                l = e.memoizedProps;
                try {
                    o.nodeValue = l
                } catch (Y) {
                    Le(e, e.return, Y)
                }
            }
            break;
        case 3:
            if (Tt(t, e),
            Ot(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    zr(t.containerInfo)
                } catch (Y) {
                    Le(e, e.return, Y)
                }
            break;
        case 4:
            Tt(t, e),
            Ot(e);
            break;
        case 13:
            Tt(t, e),
            Ot(e),
            o = e.child,
            o.flags & 8192 && (l = o.memoizedState !== null,
            o.stateNode.isHidden = l,
            !l || o.alternate !== null && o.alternate.memoizedState !== null || (Ji = Ie())),
            r & 4 && Vu(e);
            break;
        case 22:
            if (T = n !== null && n.memoizedState !== null,
            e.mode & 1 ? (Xe = (x = Xe) || T,
            Tt(t, e),
            Xe = x) : Tt(t, e),
            Ot(e),
            r & 8192) {
                if (x = e.memoizedState !== null,
                (e.stateNode.isHidden = x) && !T && e.mode & 1)
                    for (H = e,
                    T = e.child; T !== null; ) {
                        for (R = H = T; H !== null; ) {
                            switch (P = H,
                            $ = P.child,
                            P.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Jr(4, P, P.return);
                                break;
                            case 1:
                                sr(P, P.return);
                                var Q = P.stateNode;
                                if (typeof Q.componentWillUnmount == "function") {
                                    r = P,
                                    n = P.return;
                                    try {
                                        t = r,
                                        Q.props = t.memoizedProps,
                                        Q.state = t.memoizedState,
                                        Q.componentWillUnmount()
                                    } catch (Y) {
                                        Le(r, n, Y)
                                    }
                                }
                                break;
                            case 5:
                                sr(P, P.return);
                                break;
                            case 22:
                                if (P.memoizedState !== null) {
                                    Qu(R);
                                    continue
                                }
                            }
                            $ !== null ? ($.return = P,
                            H = $) : Qu(R)
                        }
                        T = T.sibling
                    }
                e: for (T = null,
                R = e; ; ) {
                    if (R.tag === 5) {
                        if (T === null) {
                            T = R;
                            try {
                                o = R.stateNode,
                                x ? (l = o.style,
                                typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (c = R.stateNode,
                                p = R.memoizedProps.style,
                                s = p != null && p.hasOwnProperty("display") ? p.display : null,
                                c.style.display = yr("display", s))
                            } catch (Y) {
                                Le(e, e.return, Y)
                            }
                        }
                    } else if (R.tag === 6) {
                        if (T === null)
                            try {
                                R.stateNode.nodeValue = x ? "" : R.memoizedProps
                            } catch (Y) {
                                Le(e, e.return, Y)
                            }
                    } else if ((R.tag !== 22 && R.tag !== 23 || R.memoizedState === null || R === e) && R.child !== null) {
                        R.child.return = R,
                        R = R.child;
                        continue
                    }
                    if (R === e)
                        break e;
                    for (; R.sibling === null; ) {
                        if (R.return === null || R.return === e)
                            break e;
                        T === R && (T = null),
                        R = R.return
                    }
                    T === R && (T = null),
                    R.sibling.return = R.return,
                    R = R.sibling
                }
            }
            break;
        case 19:
            Tt(t, e),
            Ot(e),
            r & 4 && Vu(e);
            break;
        case 21:
            break;
        default:
            Tt(t, e),
            Ot(e)
        }
    }
    function Ot(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (bu(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(a(160))
                }
                switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ht(o, ""),
                    r.flags &= -33);
                    var l = Uu(e);
                    Yi(e, l, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo
                      , c = Uu(e);
                    Ki(e, c, s);
                    break;
                default:
                    throw Error(a(161))
                }
            } catch (p) {
                Le(e, e.return, p)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Uf(e, t, n) {
        H = e,
        Wu(e)
    }
    function Wu(e, t, n) {
        for (var r = (e.mode & 1) !== 0; H !== null; ) {
            var o = H
              , l = o.child;
            if (o.tag === 22 && r) {
                var s = o.memoizedState !== null || sl;
                if (!s) {
                    var c = o.alternate
                      , p = c !== null && c.memoizedState !== null || Xe;
                    c = sl;
                    var x = Xe;
                    if (sl = s,
                    (Xe = p) && !x)
                        for (H = o; H !== null; )
                            s = H,
                            p = s.child,
                            s.tag === 22 && s.memoizedState !== null ? Gu(o) : p !== null ? (p.return = s,
                            H = p) : Gu(o);
                    for (; l !== null; )
                        H = l,
                        Wu(l),
                        l = l.sibling;
                    H = o,
                    sl = c,
                    Xe = x
                }
                Hu(e)
            } else
                o.subtreeFlags & 8772 && l !== null ? (l.return = o,
                H = l) : Hu(e)
        }
    }
    function Hu(e) {
        for (; H !== null; ) {
            var t = H;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Xe || al(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Xe)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var l = t.updateQueue;
                            l !== null && Qa(t, l, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (n = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                    }
                                Qa(t, s, n)
                            }
                            break;
                        case 5:
                            var c = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = c;
                                var p = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    p.autoFocus && n.focus();
                                    break;
                                case "img":
                                    p.src && (n.src = p.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var x = t.alternate;
                                if (x !== null) {
                                    var T = x.memoizedState;
                                    if (T !== null) {
                                        var R = T.dehydrated;
                                        R !== null && zr(R)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(a(163))
                        }
                    Xe || t.flags & 512 && Gi(t)
                } catch (P) {
                    Le(t, t.return, P)
                }
            }
            if (t === e) {
                H = null;
                break
            }
            if (n = t.sibling,
            n !== null) {
                n.return = t.return,
                H = n;
                break
            }
            H = t.return
        }
    }
    function Qu(e) {
        for (; H !== null; ) {
            var t = H;
            if (t === e) {
                H = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return,
                H = n;
                break
            }
            H = t.return
        }
    }
    function Gu(e) {
        for (; H !== null; ) {
            var t = H;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        al(4, t)
                    } catch (p) {
                        Le(t, n, p)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (p) {
                            Le(t, o, p)
                        }
                    }
                    var l = t.return;
                    try {
                        Gi(t)
                    } catch (p) {
                        Le(t, l, p)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Gi(t)
                    } catch (p) {
                        Le(t, s, p)
                    }
                }
            } catch (p) {
                Le(t, t.return, p)
            }
            if (t === e) {
                H = null;
                break
            }
            var c = t.sibling;
            if (c !== null) {
                c.return = t.return,
                H = c;
                break
            }
            H = t.return
        }
    }
    var Bf = Math.ceil
      , ul = ue.ReactCurrentDispatcher
      , Xi = ue.ReactCurrentOwner
      , St = ue.ReactCurrentBatchConfig
      , ve = 0
      , $e = null
      , De = null
      , Qe = 0
      , ft = 0
      , ar = rn(0)
      , Be = 0
      , qr = null
      , jn = 0
      , cl = 0
      , Zi = 0
      , eo = null
      , lt = null
      , Ji = 0
      , ur = 1 / 0
      , Wt = null
      , dl = !1
      , qi = null
      , cn = null
      , fl = !1
      , dn = null
      , pl = 0
      , to = 0
      , es = null
      , ml = -1
      , hl = 0;
    function qe() {
        return ve & 6 ? Ie() : ml !== -1 ? ml : ml = Ie()
    }
    function fn(e) {
        return e.mode & 1 ? ve & 2 && Qe !== 0 ? Qe & -Qe : Ef.transition !== null ? (hl === 0 && (hl = Us()),
        hl) : (e = Se,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : Ys(e.type)),
        e) : 1
    }
    function Rt(e, t, n, r) {
        if (50 < to)
            throw to = 0,
            es = null,
            Error(a(185));
        Nr(e, n, r),
        (!(ve & 2) || e !== $e) && (e === $e && (!(ve & 2) && (cl |= n),
        Be === 4 && pn(e, Qe)),
        it(e, r),
        n === 1 && ve === 0 && !(t.mode & 1) && (ur = Ie() + 500,
        $o && ln()))
    }
    function it(e, t) {
        var n = e.callbackNode;
        Cd(e, t);
        var r = Eo(e, e === $e ? Qe : 0);
        if (r === 0)
            n !== null && Ds(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = r & -r,
        e.callbackPriority !== t) {
            if (n != null && Ds(n),
            t === 1)
                e.tag === 0 ? Cf(Yu.bind(null, e)) : Ia(Yu.bind(null, e)),
                wf(function() {
                    !(ve & 6) && ln()
                }),
                n = null;
            else {
                switch (Bs(r)) {
                case 1:
                    n = Ll;
                    break;
                case 4:
                    n = Fs;
                    break;
                case 16:
                    n = xo;
                    break;
                case 536870912:
                    n = bs;
                    break;
                default:
                    n = xo
                }
                n = rc(n, Ku.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = n
        }
    }
    function Ku(e, t) {
        if (ml = -1,
        hl = 0,
        ve & 6)
            throw Error(a(327));
        var n = e.callbackNode;
        if (cr() && e.callbackNode !== n)
            return null;
        var r = Eo(e, e === $e ? Qe : 0);
        if (r === 0)
            return null;
        if (r & 30 || r & e.expiredLanes || t)
            t = vl(e, r);
        else {
            t = r;
            var o = ve;
            ve |= 2;
            var l = Zu();
            ($e !== e || Qe !== t) && (Wt = null,
            ur = Ie() + 500,
            Ln(e, t));
            do
                try {
                    Wf();
                    break
                } catch (c) {
                    Xu(e, c)
                }
            while (!0);
            yi(),
            ul.current = l,
            ve = o,
            De !== null ? t = 0 : ($e = null,
            Qe = 0,
            t = Be)
        }
        if (t !== 0) {
            if (t === 2 && (o = Il(e),
            o !== 0 && (r = o,
            t = ts(e, o))),
            t === 1)
                throw n = qr,
                Ln(e, 0),
                pn(e, r),
                it(e, Ie()),
                n;
            if (t === 6)
                pn(e, r);
            else {
                if (o = e.current.alternate,
                !(r & 30) && !Vf(o) && (t = vl(e, r),
                t === 2 && (l = Il(e),
                l !== 0 && (r = l,
                t = ts(e, l))),
                t === 1))
                    throw n = qr,
                    Ln(e, 0),
                    pn(e, r),
                    it(e, Ie()),
                    n;
                switch (e.finishedWork = o,
                e.finishedLanes = r,
                t) {
                case 0:
                case 1:
                    throw Error(a(345));
                case 2:
                    In(e, lt, Wt);
                    break;
                case 3:
                    if (pn(e, r),
                    (r & 130023424) === r && (t = Ji + 500 - Ie(),
                    10 < t)) {
                        if (Eo(e, 0) !== 0)
                            break;
                        if (o = e.suspendedLanes,
                        (o & r) !== r) {
                            qe(),
                            e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = si(In.bind(null, e, lt, Wt), t);
                        break
                    }
                    In(e, lt, Wt);
                    break;
                case 4:
                    if (pn(e, r),
                    (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                    o = -1; 0 < r; ) {
                        var s = 31 - Ct(r);
                        l = 1 << s,
                        s = t[s],
                        s > o && (o = s),
                        r &= ~l
                    }
                    if (r = o,
                    r = Ie() - r,
                    r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bf(r / 1960)) - r,
                    10 < r) {
                        e.timeoutHandle = si(In.bind(null, e, lt, Wt), r);
                        break
                    }
                    In(e, lt, Wt);
                    break;
                case 5:
                    In(e, lt, Wt);
                    break;
                default:
                    throw Error(a(329))
                }
            }
        }
        return it(e, Ie()),
        e.callbackNode === n ? Ku.bind(null, e) : null
    }
    function ts(e, t) {
        var n = eo;
        return e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
        e = vl(e, t),
        e !== 2 && (t = lt,
        lt = n,
        t !== null && ns(t)),
        e
    }
    function ns(e) {
        lt === null ? lt = e : lt.push.apply(lt, e)
    }
    function Vf(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores,
                n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r]
                          , l = o.getSnapshot;
                        o = o.value;
                        try {
                            if (!Et(l(), o))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function pn(e, t) {
        for (t &= ~Zi,
        t &= ~cl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Ct(t)
              , r = 1 << n;
            e[n] = -1,
            t &= ~r
        }
    }
    function Yu(e) {
        if (ve & 6)
            throw Error(a(327));
        cr();
        var t = Eo(e, 0);
        if (!(t & 1))
            return it(e, Ie()),
            null;
        var n = vl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Il(e);
            r !== 0 && (t = r,
            n = ts(e, r))
        }
        if (n === 1)
            throw n = qr,
            Ln(e, 0),
            pn(e, t),
            it(e, Ie()),
            n;
        if (n === 6)
            throw Error(a(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        In(e, lt, Wt),
        it(e, Ie()),
        null
    }
    function rs(e, t) {
        var n = ve;
        ve |= 1;
        try {
            return e(t)
        } finally {
            ve = n,
            ve === 0 && (ur = Ie() + 500,
            $o && ln())
        }
    }
    function Mn(e) {
        dn !== null && dn.tag === 0 && !(ve & 6) && cr();
        var t = ve;
        ve |= 1;
        var n = St.transition
          , r = Se;
        try {
            if (St.transition = null,
            Se = 1,
            e)
                return e()
        } finally {
            Se = r,
            St.transition = n,
            ve = t,
            !(ve & 6) && ln()
        }
    }
    function os() {
        ft = ar.current,
        _e(ar)
    }
    function Ln(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1,
        yf(n)),
        De !== null)
            for (n = De.return; n !== null; ) {
                var r = n;
                switch (pi(r),
                r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                    r != null && Bo();
                    break;
                case 3:
                    lr(),
                    _e(nt),
                    _e(Ge),
                    _i();
                    break;
                case 5:
                    Ei(r);
                    break;
                case 4:
                    lr();
                    break;
                case 13:
                    _e(je);
                    break;
                case 19:
                    _e(je);
                    break;
                case 10:
                    wi(r.type._context);
                    break;
                case 22:
                case 23:
                    os()
                }
                n = n.return
            }
        if ($e = e,
        De = e = mn(e.current, null),
        Qe = ft = t,
        Be = 0,
        qr = null,
        Zi = cl = jn = 0,
        lt = eo = null,
        Tn !== null) {
            for (t = 0; t < Tn.length; t++)
                if (n = Tn[t],
                r = n.interleaved,
                r !== null) {
                    n.interleaved = null;
                    var o = r.next
                      , l = n.pending;
                    if (l !== null) {
                        var s = l.next;
                        l.next = o,
                        r.next = s
                    }
                    n.pending = r
                }
            Tn = null
        }
        return e
    }
    function Xu(e, t) {
        do {
            var n = De;
            try {
                if (yi(),
                qo.current = rl,
                el) {
                    for (var r = Me.memoizedState; r !== null; ) {
                        var o = r.queue;
                        o !== null && (o.pending = null),
                        r = r.next
                    }
                    el = !1
                }
                if (zn = 0,
                Ve = Ue = Me = null,
                Gr = !1,
                Kr = 0,
                Xi.current = null,
                n === null || n.return === null) {
                    Be = 1,
                    qr = t,
                    De = null;
                    break
                }
                e: {
                    var l = e
                      , s = n.return
                      , c = n
                      , p = t;
                    if (t = Qe,
                    c.flags |= 32768,
                    p !== null && typeof p == "object" && typeof p.then == "function") {
                        var x = p
                          , T = c
                          , R = T.tag;
                        if (!(T.mode & 1) && (R === 0 || R === 11 || R === 15)) {
                            var P = T.alternate;
                            P ? (T.updateQueue = P.updateQueue,
                            T.memoizedState = P.memoizedState,
                            T.lanes = P.lanes) : (T.updateQueue = null,
                            T.memoizedState = null)
                        }
                        var $ = Su(s);
                        if ($ !== null) {
                            $.flags &= -257,
                            ku($, s, c, l, t),
                            $.mode & 1 && xu(l, x, t),
                            t = $,
                            p = x;
                            var Q = t.updateQueue;
                            if (Q === null) {
                                var Y = new Set;
                                Y.add(p),
                                t.updateQueue = Y
                            } else
                                Q.add(p);
                            break e
                        } else {
                            if (!(t & 1)) {
                                xu(l, x, t),
                                ls();
                                break e
                            }
                            p = Error(a(426))
                        }
                    } else if (Re && c.mode & 1) {
                        var Oe = Su(s);
                        if (Oe !== null) {
                            !(Oe.flags & 65536) && (Oe.flags |= 256),
                            ku(Oe, s, c, l, t),
                            vi(ir(p, c));
                            break e
                        }
                    }
                    l = p = ir(p, c),
                    Be !== 4 && (Be = 2),
                    eo === null ? eo = [l] : eo.push(l),
                    l = s;
                    do {
                        switch (l.tag) {
                        case 3:
                            l.flags |= 65536,
                            t &= -t,
                            l.lanes |= t;
                            var y = yu(l, p, t);
                            Ha(l, y);
                            break e;
                        case 1:
                            c = p;
                            var m = l.type
                              , w = l.stateNode;
                            if (!(l.flags & 128) && (typeof m.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (cn === null || !cn.has(w)))) {
                                l.flags |= 65536,
                                t &= -t,
                                l.lanes |= t;
                                var M = wu(l, c, t);
                                Ha(l, M);
                                break e
                            }
                        }
                        l = l.return
                    } while (l !== null)
                }
                qu(n)
            } catch (X) {
                t = X,
                De === n && n !== null && (De = n = n.return);
                continue
            }
            break
        } while (!0)
    }
    function Zu() {
        var e = ul.current;
        return ul.current = rl,
        e === null ? rl : e
    }
    function ls() {
        (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
        $e === null || !(jn & 268435455) && !(cl & 268435455) || pn($e, Qe)
    }
    function vl(e, t) {
        var n = ve;
        ve |= 2;
        var r = Zu();
        ($e !== e || Qe !== t) && (Wt = null,
        Ln(e, t));
        do
            try {
                $f();
                break
            } catch (o) {
                Xu(e, o)
            }
        while (!0);
        if (yi(),
        ve = n,
        ul.current = r,
        De !== null)
            throw Error(a(261));
        return $e = null,
        Qe = 0,
        Be
    }
    function $f() {
        for (; De !== null; )
            Ju(De)
    }
    function Wf() {
        for (; De !== null && !md(); )
            Ju(De)
    }
    function Ju(e) {
        var t = nc(e.alternate, e, ft);
        e.memoizedProps = e.pendingProps,
        t === null ? qu(e) : De = t,
        Xi.current = null
    }
    function qu(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return,
            t.flags & 32768) {
                if (n = Df(n, t),
                n !== null) {
                    n.flags &= 32767,
                    De = n;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    Be = 6,
                    De = null;
                    return
                }
            } else if (n = Af(n, t, ft),
            n !== null) {
                De = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                De = t;
                return
            }
            De = t = e
        } while (t !== null);
        Be === 0 && (Be = 5)
    }
    function In(e, t, n) {
        var r = Se
          , o = St.transition;
        try {
            St.transition = null,
            Se = 1,
            Hf(e, t, n, r)
        } finally {
            St.transition = o,
            Se = r
        }
        return null
    }
    function Hf(e, t, n, r) {
        do
            cr();
        while (dn !== null);
        if (ve & 6)
            throw Error(a(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
            throw Error(a(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Ed(e, l),
        e === $e && (De = $e = null,
        Qe = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fl || (fl = !0,
        rc(xo, function() {
            return cr(),
            null
        })),
        l = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || l) {
            l = St.transition,
            St.transition = null;
            var s = Se;
            Se = 1;
            var c = ve;
            ve |= 4,
            Xi.current = null,
            bf(e, n),
            $u(n, e),
            df(li),
            Po = !!oi,
            li = oi = null,
            e.current = n,
            Uf(n),
            hd(),
            ve = c,
            Se = s,
            St.transition = l
        } else
            e.current = n;
        if (fl && (fl = !1,
        dn = e,
        pl = o),
        l = e.pendingLanes,
        l === 0 && (cn = null),
        yd(n.stateNode),
        it(e, Ie()),
        t !== null)
            for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
                o = t[n],
                r(o.value, {
                    componentStack: o.stack,
                    digest: o.digest
                });
        if (dl)
            throw dl = !1,
            e = qi,
            qi = null,
            e;
        return pl & 1 && e.tag !== 0 && cr(),
        l = e.pendingLanes,
        l & 1 ? e === es ? to++ : (to = 0,
        es = e) : to = 0,
        ln(),
        null
    }
    function cr() {
        if (dn !== null) {
            var e = Bs(pl)
              , t = St.transition
              , n = Se;
            try {
                if (St.transition = null,
                Se = 16 > e ? 16 : e,
                dn === null)
                    var r = !1;
                else {
                    if (e = dn,
                    dn = null,
                    pl = 0,
                    ve & 6)
                        throw Error(a(331));
                    var o = ve;
                    for (ve |= 4,
                    H = e.current; H !== null; ) {
                        var l = H
                          , s = l.child;
                        if (H.flags & 16) {
                            var c = l.deletions;
                            if (c !== null) {
                                for (var p = 0; p < c.length; p++) {
                                    var x = c[p];
                                    for (H = x; H !== null; ) {
                                        var T = H;
                                        switch (T.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Jr(8, T, l)
                                        }
                                        var R = T.child;
                                        if (R !== null)
                                            R.return = T,
                                            H = R;
                                        else
                                            for (; H !== null; ) {
                                                T = H;
                                                var P = T.sibling
                                                  , $ = T.return;
                                                if (Fu(T),
                                                T === x) {
                                                    H = null;
                                                    break
                                                }
                                                if (P !== null) {
                                                    P.return = $,
                                                    H = P;
                                                    break
                                                }
                                                H = $
                                            }
                                    }
                                }
                                var Q = l.alternate;
                                if (Q !== null) {
                                    var Y = Q.child;
                                    if (Y !== null) {
                                        Q.child = null;
                                        do {
                                            var Oe = Y.sibling;
                                            Y.sibling = null,
                                            Y = Oe
                                        } while (Y !== null)
                                    }
                                }
                                H = l
                            }
                        }
                        if (l.subtreeFlags & 2064 && s !== null)
                            s.return = l,
                            H = s;
                        else
                            e: for (; H !== null; ) {
                                if (l = H,
                                l.flags & 2048)
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jr(9, l, l.return)
                                    }
                                var y = l.sibling;
                                if (y !== null) {
                                    y.return = l.return,
                                    H = y;
                                    break e
                                }
                                H = l.return
                            }
                    }
                    var m = e.current;
                    for (H = m; H !== null; ) {
                        s = H;
                        var w = s.child;
                        if (s.subtreeFlags & 2064 && w !== null)
                            w.return = s,
                            H = w;
                        else
                            e: for (s = m; H !== null; ) {
                                if (c = H,
                                c.flags & 2048)
                                    try {
                                        switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            al(9, c)
                                        }
                                    } catch (X) {
                                        Le(c, c.return, X)
                                    }
                                if (c === s) {
                                    H = null;
                                    break e
                                }
                                var M = c.sibling;
                                if (M !== null) {
                                    M.return = c.return,
                                    H = M;
                                    break e
                                }
                                H = c.return
                            }
                    }
                    if (ve = o,
                    ln(),
                    jt && typeof jt.onPostCommitFiberRoot == "function")
                        try {
                            jt.onPostCommitFiberRoot(So, e)
                        } catch {}
                    r = !0
                }
                return r
            } finally {
                Se = n,
                St.transition = t
            }
        }
        return !1
    }
    function ec(e, t, n) {
        t = ir(n, t),
        t = yu(e, t, 1),
        e = an(e, t, 1),
        t = qe(),
        e !== null && (Nr(e, 1, t),
        it(e, t))
    }
    function Le(e, t, n) {
        if (e.tag === 3)
            ec(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    ec(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cn === null || !cn.has(r))) {
                        e = ir(n, e),
                        e = wu(t, e, 1),
                        t = an(t, e, 1),
                        e = qe(),
                        t !== null && (Nr(t, 1, e),
                        it(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function Qf(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
        t = qe(),
        e.pingedLanes |= e.suspendedLanes & n,
        $e === e && (Qe & n) === n && (Be === 4 || Be === 3 && (Qe & 130023424) === Qe && 500 > Ie() - Ji ? Ln(e, 0) : Zi |= n),
        it(e, t)
    }
    function tc(e, t) {
        t === 0 && (e.mode & 1 ? (t = Co,
        Co <<= 1,
        !(Co & 130023424) && (Co = 4194304)) : t = 1);
        var n = qe();
        e = Bt(e, t),
        e !== null && (Nr(e, t, n),
        it(e, n))
    }
    function Gf(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        tc(e, n)
    }
    function Kf(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
            var r = e.stateNode
              , o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(a(314))
        }
        r !== null && r.delete(t),
        tc(e, n)
    }
    var nc;
    nc = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || nt.current)
                ot = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128))
                    return ot = !1,
                    Of(e, t, n);
                ot = !!(e.flags & 131072)
            }
        else
            ot = !1,
            Re && t.flags & 1048576 && Oa(t, Ho, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var r = t.type;
            il(e, t),
            e = t.pendingProps;
            var o = Jn(t, Ge.current);
            or(t, n),
            o = Ri(null, t, r, e, o, n);
            var l = zi();
            return t.flags |= 1,
            typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            rt(r) ? (l = !0,
            Vo(t)) : l = !1,
            t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
            ki(t),
            o.updater = ol,
            t.stateNode = o,
            o._reactInternals = t,
            Ai(t, r, e, n),
            t = Ui(null, t, r, !0, l, n)) : (t.tag = 0,
            Re && l && fi(t),
            Je(null, t, o, n),
            t = t.child),
            t;
        case 16:
            r = t.elementType;
            e: {
                switch (il(e, t),
                e = t.pendingProps,
                o = r._init,
                r = o(r._payload),
                t.type = r,
                o = t.tag = Xf(r),
                e = _t(r, e),
                o) {
                case 0:
                    t = bi(null, t, r, e, n);
                    break e;
                case 1:
                    t = Tu(null, t, r, e, n);
                    break e;
                case 11:
                    t = Cu(null, t, r, e, n);
                    break e;
                case 14:
                    t = Eu(null, t, r, _t(r.type, e), n);
                    break e
                }
                throw Error(a(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
            o = t.pendingProps,
            o = t.elementType === r ? o : _t(r, o),
            bi(e, t, r, o, n);
        case 1:
            return r = t.type,
            o = t.pendingProps,
            o = t.elementType === r ? o : _t(r, o),
            Tu(e, t, r, o, n);
        case 3:
            e: {
                if (Ru(t),
                e === null)
                    throw Error(a(387));
                r = t.pendingProps,
                l = t.memoizedState,
                o = l.element,
                Wa(e, t),
                Zo(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element,
                l.isDehydrated)
                    if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                        transitions: s.transitions
                    },
                    t.updateQueue.baseState = l,
                    t.memoizedState = l,
                    t.flags & 256) {
                        o = ir(Error(a(423)), t),
                        t = zu(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                        o = ir(Error(a(424)), t),
                        t = zu(e, t, r, n, o);
                        break e
                    } else
                        for (dt = nn(t.stateNode.containerInfo.firstChild),
                        ct = t,
                        Re = !0,
                        Nt = null,
                        n = Va(t, null, r, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (tr(),
                    r === o) {
                        t = $t(e, t, n);
                        break e
                    }
                    Je(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Ga(t),
            e === null && hi(t),
            r = t.type,
            o = t.pendingProps,
            l = e !== null ? e.memoizedProps : null,
            s = o.children,
            ii(r, o) ? s = null : l !== null && ii(r, l) && (t.flags |= 32),
            Pu(e, t),
            Je(e, t, s, n),
            t.child;
        case 6:
            return e === null && hi(t),
            null;
        case 13:
            return ju(e, t, n);
        case 4:
            return Ci(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            e === null ? t.child = nr(t, null, r, n) : Je(e, t, r, n),
            t.child;
        case 11:
            return r = t.type,
            o = t.pendingProps,
            o = t.elementType === r ? o : _t(r, o),
            Cu(e, t, r, o, n);
        case 7:
            return Je(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return Je(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return Je(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                if (r = t.type._context,
                o = t.pendingProps,
                l = t.memoizedProps,
                s = o.value,
                Ee(Ko, r._currentValue),
                r._currentValue = s,
                l !== null)
                    if (Et(l.value, s)) {
                        if (l.children === o.children && !nt.current) {
                            t = $t(e, t, n);
                            break e
                        }
                    } else
                        for (l = t.child,
                        l !== null && (l.return = t); l !== null; ) {
                            var c = l.dependencies;
                            if (c !== null) {
                                s = l.child;
                                for (var p = c.firstContext; p !== null; ) {
                                    if (p.context === r) {
                                        if (l.tag === 1) {
                                            p = Vt(-1, n & -n),
                                            p.tag = 2;
                                            var x = l.updateQueue;
                                            if (x !== null) {
                                                x = x.shared;
                                                var T = x.pending;
                                                T === null ? p.next = p : (p.next = T.next,
                                                T.next = p),
                                                x.pending = p
                                            }
                                        }
                                        l.lanes |= n,
                                        p = l.alternate,
                                        p !== null && (p.lanes |= n),
                                        xi(l.return, n, t),
                                        c.lanes |= n;
                                        break
                                    }
                                    p = p.next
                                }
                            } else if (l.tag === 10)
                                s = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (s = l.return,
                                s === null)
                                    throw Error(a(341));
                                s.lanes |= n,
                                c = s.alternate,
                                c !== null && (c.lanes |= n),
                                xi(s, n, t),
                                s = l.sibling
                            } else
                                s = l.child;
                            if (s !== null)
                                s.return = l;
                            else
                                for (s = l; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (l = s.sibling,
                                    l !== null) {
                                        l.return = s.return,
                                        s = l;
                                        break
                                    }
                                    s = s.return
                                }
                            l = s
                        }
                Je(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type,
            r = t.pendingProps.children,
            or(t, n),
            o = wt(o),
            r = r(o),
            t.flags |= 1,
            Je(e, t, r, n),
            t.child;
        case 14:
            return r = t.type,
            o = _t(r, t.pendingProps),
            o = _t(r.type, o),
            Eu(e, t, r, o, n);
        case 15:
            return Nu(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
            o = t.pendingProps,
            o = t.elementType === r ? o : _t(r, o),
            il(e, t),
            t.tag = 1,
            rt(r) ? (e = !0,
            Vo(t)) : e = !1,
            or(t, n),
            vu(t, r, o),
            Ai(t, r, o, n),
            Ui(null, t, r, !0, e, n);
        case 19:
            return Lu(e, t, n);
        case 22:
            return _u(e, t, n)
        }
        throw Error(a(156, t.tag))
    }
    ;
    function rc(e, t) {
        return As(e, t)
    }
    function Yf(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function kt(e, t, n, r) {
        return new Yf(e,t,n,r)
    }
    function is(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Xf(e) {
        if (typeof e == "function")
            return is(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === oe)
                return 11;
            if (e === Fe)
                return 14
        }
        return 2
    }
    function mn(e, t) {
        var n = e.alternate;
        return n === null ? (n = kt(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function gl(e, t, n, r, o, l) {
        var s = 2;
        if (r = e,
        typeof e == "function")
            is(e) && (s = 1);
        else if (typeof e == "string")
            s = 5;
        else
            e: switch (e) {
            case W:
                return On(n.children, o, l, t);
            case Z:
                s = 8,
                o |= 8;
                break;
            case xe:
                return e = kt(12, n, t, o | 2),
                e.elementType = xe,
                e.lanes = l,
                e;
            case ze:
                return e = kt(13, n, t, o),
                e.elementType = ze,
                e.lanes = l,
                e;
            case Te:
                return e = kt(19, n, t, o),
                e.elementType = Te,
                e.lanes = l,
                e;
            case fe:
                return yl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case ke:
                        s = 10;
                        break e;
                    case Ae:
                        s = 9;
                        break e;
                    case oe:
                        s = 11;
                        break e;
                    case Fe:
                        s = 14;
                        break e;
                    case de:
                        s = 16,
                        r = null;
                        break e
                    }
                throw Error(a(130, e == null ? e : typeof e, ""))
            }
        return t = kt(s, n, t, o),
        t.elementType = e,
        t.type = r,
        t.lanes = l,
        t
    }
    function On(e, t, n, r) {
        return e = kt(7, e, r, t),
        e.lanes = n,
        e
    }
    function yl(e, t, n, r) {
        return e = kt(22, e, r, t),
        e.elementType = fe,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function ss(e, t, n) {
        return e = kt(6, e, null, t),
        e.lanes = n,
        e
    }
    function as(e, t, n) {
        return t = kt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function Zf(e, t, n, r, o) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Ol(0),
        this.expirationTimes = Ol(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ol(0),
        this.identifierPrefix = r,
        this.onRecoverableError = o,
        this.mutableSourceEagerHydrationData = null
    }
    function us(e, t, n, r, o, l, s, c, p) {
        return e = new Zf(e,t,n,c,p),
        t === 1 ? (t = 1,
        l === !0 && (t |= 8)) : t = 0,
        l = kt(3, null, null, t),
        e.current = l,
        l.stateNode = e,
        l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        ki(l),
        e
    }
    function Jf(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: me,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function oc(e) {
        if (!e)
            return on;
        e = e._reactInternals;
        e: {
            if (Cn(e) !== e || e.tag !== 1)
                throw Error(a(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (rt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(a(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (rt(n))
                return Ma(e, n, t)
        }
        return t
    }
    function lc(e, t, n, r, o, l, s, c, p) {
        return e = us(n, r, !0, e, o, l, s, c, p),
        e.context = oc(null),
        n = e.current,
        r = qe(),
        o = fn(n),
        l = Vt(r, o),
        l.callback = t ?? null,
        an(n, l, o),
        e.current.lanes = o,
        Nr(e, o, r),
        it(e, r),
        e
    }
    function wl(e, t, n, r) {
        var o = t.current
          , l = qe()
          , s = fn(o);
        return n = oc(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Vt(l, s),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = an(o, t, s),
        e !== null && (Rt(e, o, s, l),
        Xo(e, o, s)),
        s
    }
    function xl(e) {
        if (e = e.current,
        !e.child)
            return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }
    function ic(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function cs(e, t) {
        ic(e, t),
        (e = e.alternate) && ic(e, t)
    }
    var sc = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function ds(e) {
        this._internalRoot = e
    }
    Sl.prototype.render = ds.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(a(409));
        wl(e, t, null, null)
    }
    ,
    Sl.prototype.unmount = ds.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Mn(function() {
                wl(null, e, null, null)
            }),
            t[Dt] = null
        }
    }
    ;
    function Sl(e) {
        this._internalRoot = e
    }
    Sl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Ws();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++)
                ;
            qt.splice(n, 0, e),
            n === 0 && Gs(e)
        }
    }
    ;
    function fs(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function kl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function ac() {}
    function qf(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var x = xl(s);
                    l.call(x)
                }
            }
            var s = lc(t, r, e, 0, null, !1, !1, "", ac);
            return e._reactRootContainer = s,
            e[Dt] = s.current,
            br(e.nodeType === 8 ? e.parentNode : e),
            Mn(),
            s
        }
        for (; o = e.lastChild; )
            e.removeChild(o);
        if (typeof r == "function") {
            var c = r;
            r = function() {
                var x = xl(p);
                c.call(x)
            }
        }
        var p = us(e, 0, !1, null, null, !1, !1, "", ac);
        return e._reactRootContainer = p,
        e[Dt] = p.current,
        br(e.nodeType === 8 ? e.parentNode : e),
        Mn(function() {
            wl(t, p, n, r)
        }),
        p
    }
    function Cl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var s = l;
            if (typeof o == "function") {
                var c = o;
                o = function() {
                    var p = xl(s);
                    c.call(p)
                }
            }
            wl(t, s, e, o)
        } else
            s = qf(n, t, e, o, r);
        return xl(s)
    }
    Vs = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Er(t.pendingLanes);
                n !== 0 && (Al(t, n | 1),
                it(t, Ie()),
                !(ve & 6) && (ur = Ie() + 500,
                ln()))
            }
            break;
        case 13:
            Mn(function() {
                var r = Bt(e, 1);
                if (r !== null) {
                    var o = qe();
                    Rt(r, e, 1, o)
                }
            }),
            cs(e, 1)
        }
    }
    ,
    Dl = function(e) {
        if (e.tag === 13) {
            var t = Bt(e, 134217728);
            if (t !== null) {
                var n = qe();
                Rt(t, e, 134217728, n)
            }
            cs(e, 134217728)
        }
    }
    ,
    $s = function(e) {
        if (e.tag === 13) {
            var t = fn(e)
              , n = Bt(e, t);
            if (n !== null) {
                var r = qe();
                Rt(n, e, t, r)
            }
            cs(e, t)
        }
    }
    ,
    Ws = function() {
        return Se
    }
    ,
    Hs = function(e, t) {
        var n = Se;
        try {
            return Se = e,
            t()
        } finally {
            Se = n
        }
    }
    ,
    xr = function(e, t, n) {
        switch (t) {
        case "input":
            if (Dn(e, n),
            t = n.name,
            n.type === "radio" && t != null) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Uo(r);
                        if (!o)
                            throw Error(a(90));
                        co(r),
                        Dn(r, o)
                    }
                }
            }
            break;
        case "textarea":
            At(e, n);
            break;
        case "select":
            t = n.value,
            t != null && Gt(e, !!n.multiple, t, !1)
        }
    }
    ,
    kn = rs,
    go = Mn;
    var ep = {
        usingClientEntryPoint: !1,
        Events: [Vr, Xn, Uo, tt, at, rs]
    }
      , no = {
        findFiberByHostInstance: En,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , tp = {
        bundleType: no.bundleType,
        version: no.version,
        rendererPackageName: no.rendererPackageName,
        rendererConfig: no.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ue.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Is(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: no.findFiberByHostInstance,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!El.isDisabled && El.supportsFiber)
            try {
                So = El.inject(tp),
                jt = El
            } catch {}
    }
    return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep,
    st.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!fs(t))
            throw Error(a(200));
        return Jf(e, t, null, n)
    }
    ,
    st.createRoot = function(e, t) {
        if (!fs(e))
            throw Error(a(299));
        var n = !1
          , r = ""
          , o = sc;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        t = us(e, 1, !1, null, null, n, !1, r, o),
        e[Dt] = t.current,
        br(e.nodeType === 8 ? e.parentNode : e),
        new ds(t)
    }
    ,
    st.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","),
            Error(a(268, e)));
        return e = Is(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    st.flushSync = function(e) {
        return Mn(e)
    }
    ,
    st.hydrate = function(e, t, n) {
        if (!kl(t))
            throw Error(a(200));
        return Cl(null, e, t, !0, n)
    }
    ,
    st.hydrateRoot = function(e, t, n) {
        if (!fs(e))
            throw Error(a(405));
        var r = n != null && n.hydratedSources || null
          , o = !1
          , l = ""
          , s = sc;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        t = lc(t, null, e, 1, n ?? null, o, !1, l, s),
        e[Dt] = t.current,
        br(e),
        r)
            for (e = 0; e < r.length; e++)
                n = r[e],
                o = n._getVersion,
                o = o(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Sl(t)
    }
    ,
    st.render = function(e, t, n) {
        if (!kl(t))
            throw Error(a(200));
        return Cl(null, e, t, !1, n)
    }
    ,
    st.unmountComponentAtNode = function(e) {
        if (!kl(e))
            throw Error(a(40));
        return e._reactRootContainer ? (Mn(function() {
            Cl(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[Dt] = null
            })
        }),
        !0) : !1
    }
    ,
    st.unstable_batchedUpdates = rs,
    st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!kl(n))
            throw Error(a(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(a(38));
        return Cl(e, t, n, !1, r)
    }
    ,
    st.version = "18.3.1-next-f1338f8080-20240426",
    st
}
var vc;
function Rc() {
    if (vc)
        return hs.exports;
    vc = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (u) {
                console.error(u)
            }
    }
    return i(),
    hs.exports = cp(),
    hs.exports
}
var gc;
function dp() {
    if (gc)
        return Nl;
    gc = 1;
    var i = Rc();
    return Nl.createRoot = i.createRoot,
    Nl.hydrateRoot = i.hydrateRoot,
    Nl
}
var fp = dp();
function Qt(i, u, {checkForDefaultPrevented: a=!0}={}) {
    return function(d) {
        if (i == null || i(d),
        a === !1 || !d.defaultPrevented)
            return u == null ? void 0 : u(d)
    }
}
function _s(i, u=[]) {
    let a = [];
    function f(g, k) {
        const S = I.createContext(k)
          , C = a.length;
        a = [...a, k];
        const N = O => {
            var G;
            const {scope: B, children: v, ...j} = O
              , U = ((G = B == null ? void 0 : B[i]) == null ? void 0 : G[C]) || S
              , A = I.useMemo( () => j, Object.values(j));
            return _.jsx(U.Provider, {
                value: A,
                children: v
            })
        }
        ;
        N.displayName = g + "Provider";
        function L(O, B) {
            var U;
            const v = ((U = B == null ? void 0 : B[i]) == null ? void 0 : U[C]) || S
              , j = I.useContext(v);
            if (j)
                return j;
            if (k !== void 0)
                return k;
            throw new Error(`\`${O}\` must be used within \`${g}\``)
        }
        return [N, L]
    }
    const d = () => {
        const g = a.map(k => I.createContext(k));
        return function(S) {
            const C = (S == null ? void 0 : S[i]) || g;
            return I.useMemo( () => ({
                [`__scope${i}`]: {
                    ...S,
                    [i]: C
                }
            }), [S, C])
        }
    }
    ;
    return d.scopeName = i,
    [f, pp(d, ...u)]
}
function pp(...i) {
    const u = i[0];
    if (i.length === 1)
        return u;
    const a = () => {
        const f = i.map(d => ({
            useScope: d(),
            scopeName: d.scopeName
        }));
        return function(g) {
            const k = f.reduce( (S, {useScope: C, scopeName: N}) => {
                const O = C(g)[`__scope${N}`];
                return {
                    ...S,
                    ...O
                }
            }
            , {});
            return I.useMemo( () => ({
                [`__scope${u.scopeName}`]: k
            }), [k])
        }
    }
    ;
    return a.scopeName = u.scopeName,
    a
}
function yc(i, u) {
    if (typeof i == "function")
        return i(u);
    i != null && (i.current = u)
}
function zc(...i) {
    return u => {
        let a = !1;
        const f = i.map(d => {
            const g = yc(d, u);
            return !a && typeof g == "function" && (a = !0),
            g
        }
        );
        if (a)
            return () => {
                for (let d = 0; d < f.length; d++) {
                    const g = f[d];
                    typeof g == "function" ? g() : yc(i[d], null)
                }
            }
    }
}
function Tl(...i) {
    return I.useCallback(zc(...i), i)
}
var ao = I.forwardRef( (i, u) => {
    const {children: a, ...f} = i
      , d = I.Children.toArray(a)
      , g = d.find(hp);
    if (g) {
        const k = g.props.children
          , S = d.map(C => C === g ? I.Children.count(k) > 1 ? I.Children.only(null) : I.isValidElement(k) ? k.props.children : null : C);
        return _.jsx(xs, {
            ...f,
            ref: u,
            children: I.isValidElement(k) ? I.cloneElement(k, void 0, S) : null
        })
    }
    return _.jsx(xs, {
        ...f,
        ref: u,
        children: a
    })
}
);
ao.displayName = "Slot";
var xs = I.forwardRef( (i, u) => {
    const {children: a, ...f} = i;
    if (I.isValidElement(a)) {
        const d = gp(a);
        return I.cloneElement(a, {
            ...vp(f, a.props),
            ref: u ? zc(u, d) : d
        })
    }
    return I.Children.count(a) > 1 ? I.Children.only(null) : null
}
);
xs.displayName = "SlotClone";
var mp = ({children: i}) => _.jsx(_.Fragment, {
    children: i
});
function hp(i) {
    return I.isValidElement(i) && i.type === mp
}
function vp(i, u) {
    const a = {
        ...u
    };
    for (const f in u) {
        const d = i[f]
          , g = u[f];
        /^on[A-Z]/.test(f) ? d && g ? a[f] = (...S) => {
            g(...S),
            d(...S)
        }
        : d && (a[f] = d) : f === "style" ? a[f] = {
            ...d,
            ...g
        } : f === "className" && (a[f] = [d, g].filter(Boolean).join(" "))
    }
    return {
        ...i,
        ...a
    }
}
function gp(i) {
    var f, d;
    let u = (f = Object.getOwnPropertyDescriptor(i.props, "ref")) == null ? void 0 : f.get
      , a = u && "isReactWarning"in u && u.isReactWarning;
    return a ? i.ref : (u = (d = Object.getOwnPropertyDescriptor(i, "ref")) == null ? void 0 : d.get,
    a = u && "isReactWarning"in u && u.isReactWarning,
    a ? i.props.ref : i.props.ref || i.ref)
}
function yp(i) {
    const u = i + "CollectionProvider"
      , [a,f] = _s(u)
      , [d,g] = a(u, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , k = v => {
        const {scope: j, children: U} = v
          , A = D.useRef(null)
          , G = D.useRef(new Map).current;
        return _.jsx(d, {
            scope: j,
            itemMap: G,
            collectionRef: A,
            children: U
        })
    }
    ;
    k.displayName = u;
    const S = i + "CollectionSlot"
      , C = D.forwardRef( (v, j) => {
        const {scope: U, children: A} = v
          , G = g(S, U)
          , ee = Tl(j, G.collectionRef);
        return _.jsx(ao, {
            ref: ee,
            children: A
        })
    }
    );
    C.displayName = S;
    const N = i + "CollectionItemSlot"
      , L = "data-radix-collection-item"
      , O = D.forwardRef( (v, j) => {
        const {scope: U, children: A, ...G} = v
          , ee = D.useRef(null)
          , ce = Tl(j, ee)
          , ue = g(N, U);
        return D.useEffect( () => (ue.itemMap.set(ee, {
            ref: ee,
            ...G
        }),
        () => void ue.itemMap.delete(ee))),
        _.jsx(ao, {
            [L]: "",
            ref: ce,
            children: A
        })
    }
    );
    O.displayName = N;
    function B(v) {
        const j = g(i + "CollectionConsumer", v);
        return D.useCallback( () => {
            const A = j.collectionRef.current;
            if (!A)
                return [];
            const G = Array.from(A.querySelectorAll(`[${L}]`));
            return Array.from(j.itemMap.values()).sort( (ue, ye) => G.indexOf(ue.ref.current) - G.indexOf(ye.ref.current))
        }
        , [j.collectionRef, j.itemMap])
    }
    return [{
        Provider: k,
        Slot: C,
        ItemSlot: O
    }, B, f]
}
var Ss = globalThis != null && globalThis.document ? I.useLayoutEffect : () => {}
  , wp = sp.useId || ( () => {}
)
  , xp = 0;
function jc(i) {
    const [u,a] = I.useState(wp());
    return Ss( () => {
        i || a(f => f ?? String(xp++))
    }
    , [i]),
    i || (u ? `radix-${u}` : "")
}
var Sp = Rc();
const kp = Tc(Sp);
var Cp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , pr = Cp.reduce( (i, u) => {
    const a = I.forwardRef( (f, d) => {
        const {asChild: g, ...k} = f
          , S = g ? ao : u;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        _.jsx(S, {
            ...k,
            ref: d
        })
    }
    );
    return a.displayName = `Primitive.${u}`,
    {
        ...i,
        [u]: a
    }
}
, {});
function Ps(i) {
    const u = I.useRef(i);
    return I.useEffect( () => {
        u.current = i
    }
    ),
    I.useMemo( () => (...a) => {
        var f;
        return (f = u.current) == null ? void 0 : f.call(u, ...a)
    }
    , [])
}
function Mc({prop: i, defaultProp: u, onChange: a= () => {}
}) {
    const [f,d] = Ep({
        defaultProp: u,
        onChange: a
    })
      , g = i !== void 0
      , k = g ? i : f
      , S = Ps(a)
      , C = I.useCallback(N => {
        if (g) {
            const O = typeof N == "function" ? N(i) : N;
            O !== i && S(O)
        } else
            d(N)
    }
    , [g, i, d, S]);
    return [k, C]
}
function Ep({defaultProp: i, onChange: u}) {
    const a = I.useState(i)
      , [f] = a
      , d = I.useRef(f)
      , g = Ps(u);
    return I.useEffect( () => {
        d.current !== f && (g(f),
        d.current = f)
    }
    , [f, d, g]),
    a
}
var Np = I.createContext(void 0);
function Lc(i) {
    const u = I.useContext(Np);
    return i || u || "ltr"
}
var ys = "rovingFocusGroup.onEntryFocus"
  , _p = {
    bubbles: !1,
    cancelable: !0
}
  , Rl = "RovingFocusGroup"
  , [ks,Ic,Pp] = yp(Rl)
  , [Tp,Oc] = _s(Rl, [Pp])
  , [Rp,zp] = Tp(Rl)
  , Ac = I.forwardRef( (i, u) => _.jsx(ks.Provider, {
    scope: i.__scopeRovingFocusGroup,
    children: _.jsx(ks.Slot, {
        scope: i.__scopeRovingFocusGroup,
        children: _.jsx(jp, {
            ...i,
            ref: u
        })
    })
}));
Ac.displayName = Rl;
var jp = I.forwardRef( (i, u) => {
    const {__scopeRovingFocusGroup: a, orientation: f, loop: d=!1, dir: g, currentTabStopId: k, defaultCurrentTabStopId: S, onCurrentTabStopIdChange: C, onEntryFocus: N, preventScrollOnEntryFocus: L=!1, ...O} = i
      , B = I.useRef(null)
      , v = Tl(u, B)
      , j = Lc(g)
      , [U=null,A] = Mc({
        prop: k,
        defaultProp: S,
        onChange: C
    })
      , [G,ee] = I.useState(!1)
      , ce = Ps(N)
      , ue = Ic(a)
      , ye = I.useRef(!1)
      , [me,W] = I.useState(0);
    return I.useEffect( () => {
        const Z = B.current;
        if (Z)
            return Z.addEventListener(ys, ce),
            () => Z.removeEventListener(ys, ce)
    }
    , [ce]),
    _.jsx(Rp, {
        scope: a,
        orientation: f,
        dir: j,
        loop: d,
        currentTabStopId: U,
        onItemFocus: I.useCallback(Z => A(Z), [A]),
        onItemShiftTab: I.useCallback( () => ee(!0), []),
        onFocusableItemAdd: I.useCallback( () => W(Z => Z + 1), []),
        onFocusableItemRemove: I.useCallback( () => W(Z => Z - 1), []),
        children: _.jsx(pr.div, {
            tabIndex: G || me === 0 ? -1 : 0,
            "data-orientation": f,
            ...O,
            ref: v,
            style: {
                outline: "none",
                ...i.style
            },
            onMouseDown: Qt(i.onMouseDown, () => {
                ye.current = !0
            }
            ),
            onFocus: Qt(i.onFocus, Z => {
                const xe = !ye.current;
                if (Z.target === Z.currentTarget && xe && !G) {
                    const ke = new CustomEvent(ys,_p);
                    if (Z.currentTarget.dispatchEvent(ke),
                    !ke.defaultPrevented) {
                        const Ae = ue().filter(de => de.focusable)
                          , oe = Ae.find(de => de.active)
                          , ze = Ae.find(de => de.id === U)
                          , Fe = [oe, ze, ...Ae].filter(Boolean).map(de => de.ref.current);
                        bc(Fe, L)
                    }
                }
                ye.current = !1
            }
            ),
            onBlur: Qt(i.onBlur, () => ee(!1))
        })
    })
}
)
  , Dc = "RovingFocusGroupItem"
  , Fc = I.forwardRef( (i, u) => {
    const {__scopeRovingFocusGroup: a, focusable: f=!0, active: d=!1, tabStopId: g, ...k} = i
      , S = jc()
      , C = g || S
      , N = zp(Dc, a)
      , L = N.currentTabStopId === C
      , O = Ic(a)
      , {onFocusableItemAdd: B, onFocusableItemRemove: v} = N;
    return I.useEffect( () => {
        if (f)
            return B(),
            () => v()
    }
    , [f, B, v]),
    _.jsx(ks.ItemSlot, {
        scope: a,
        id: C,
        focusable: f,
        active: d,
        children: _.jsx(pr.span, {
            tabIndex: L ? 0 : -1,
            "data-orientation": N.orientation,
            ...k,
            ref: u,
            onMouseDown: Qt(i.onMouseDown, j => {
                f ? N.onItemFocus(C) : j.preventDefault()
            }
            ),
            onFocus: Qt(i.onFocus, () => N.onItemFocus(C)),
            onKeyDown: Qt(i.onKeyDown, j => {
                if (j.key === "Tab" && j.shiftKey) {
                    N.onItemShiftTab();
                    return
                }
                if (j.target !== j.currentTarget)
                    return;
                const U = Ip(j, N.orientation, N.dir);
                if (U !== void 0) {
                    if (j.metaKey || j.ctrlKey || j.altKey || j.shiftKey)
                        return;
                    j.preventDefault();
                    let G = O().filter(ee => ee.focusable).map(ee => ee.ref.current);
                    if (U === "last")
                        G.reverse();
                    else if (U === "prev" || U === "next") {
                        U === "prev" && G.reverse();
                        const ee = G.indexOf(j.currentTarget);
                        G = N.loop ? Op(G, ee + 1) : G.slice(ee + 1)
                    }
                    setTimeout( () => bc(G))
                }
            }
            )
        })
    })
}
);
Fc.displayName = Dc;
var Mp = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function Lp(i, u) {
    return u !== "rtl" ? i : i === "ArrowLeft" ? "ArrowRight" : i === "ArrowRight" ? "ArrowLeft" : i
}
function Ip(i, u, a) {
    const f = Lp(i.key, a);
    if (!(u === "vertical" && ["ArrowLeft", "ArrowRight"].includes(f)) && !(u === "horizontal" && ["ArrowUp", "ArrowDown"].includes(f)))
        return Mp[f]
}
function bc(i, u=!1) {
    const a = document.activeElement;
    for (const f of i)
        if (f === a || (f.focus({
            preventScroll: u
        }),
        document.activeElement !== a))
            return
}
function Op(i, u) {
    return i.map( (a, f) => i[(u + f) % i.length])
}
var Ap = Ac
  , Dp = Fc;
function Fp(i, u) {
    return I.useReducer( (a, f) => u[a][f] ?? a, i)
}
var Uc = i => {
    const {present: u, children: a} = i
      , f = bp(u)
      , d = typeof a == "function" ? a({
        present: f.isPresent
    }) : I.Children.only(a)
      , g = Tl(f.ref, Up(d));
    return typeof a == "function" || f.isPresent ? I.cloneElement(d, {
        ref: g
    }) : null
}
;
Uc.displayName = "Presence";
function bp(i) {
    const [u,a] = I.useState()
      , f = I.useRef({})
      , d = I.useRef(i)
      , g = I.useRef("none")
      , k = i ? "mounted" : "unmounted"
      , [S,C] = Fp(k, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return I.useEffect( () => {
        const N = _l(f.current);
        g.current = S === "mounted" ? N : "none"
    }
    , [S]),
    Ss( () => {
        const N = f.current
          , L = d.current;
        if (L !== i) {
            const B = g.current
              , v = _l(N);
            i ? C("MOUNT") : v === "none" || (N == null ? void 0 : N.display) === "none" ? C("UNMOUNT") : C(L && B !== v ? "ANIMATION_OUT" : "UNMOUNT"),
            d.current = i
        }
    }
    , [i, C]),
    Ss( () => {
        if (u) {
            let N;
            const L = u.ownerDocument.defaultView ?? window
              , O = v => {
                const U = _l(f.current).includes(v.animationName);
                if (v.target === u && U && (C("ANIMATION_END"),
                !d.current)) {
                    const A = u.style.animationFillMode;
                    u.style.animationFillMode = "forwards",
                    N = L.setTimeout( () => {
                        u.style.animationFillMode === "forwards" && (u.style.animationFillMode = A)
                    }
                    )
                }
            }
              , B = v => {
                v.target === u && (g.current = _l(f.current))
            }
            ;
            return u.addEventListener("animationstart", B),
            u.addEventListener("animationcancel", O),
            u.addEventListener("animationend", O),
            () => {
                L.clearTimeout(N),
                u.removeEventListener("animationstart", B),
                u.removeEventListener("animationcancel", O),
                u.removeEventListener("animationend", O)
            }
        } else
            C("ANIMATION_END")
    }
    , [u, C]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(S),
        ref: I.useCallback(N => {
            N && (f.current = getComputedStyle(N)),
            a(N)
        }
        , [])
    }
}
function _l(i) {
    return (i == null ? void 0 : i.animationName) || "none"
}
function Up(i) {
    var f, d;
    let u = (f = Object.getOwnPropertyDescriptor(i.props, "ref")) == null ? void 0 : f.get
      , a = u && "isReactWarning"in u && u.isReactWarning;
    return a ? i.ref : (u = (d = Object.getOwnPropertyDescriptor(i, "ref")) == null ? void 0 : d.get,
    a = u && "isReactWarning"in u && u.isReactWarning,
    a ? i.props.ref : i.props.ref || i.ref)
}
var Ts = "Tabs"
  , [Bp,sh] = _s(Ts, [Oc])
  , Bc = Oc()
  , [Vp,Rs] = Bp(Ts)
  , Vc = I.forwardRef( (i, u) => {
    const {__scopeTabs: a, value: f, onValueChange: d, defaultValue: g, orientation: k="horizontal", dir: S, activationMode: C="automatic", ...N} = i
      , L = Lc(S)
      , [O,B] = Mc({
        prop: f,
        onChange: d,
        defaultProp: g
    });
    return _.jsx(Vp, {
        scope: a,
        baseId: jc(),
        value: O,
        onValueChange: B,
        orientation: k,
        dir: L,
        activationMode: C,
        children: _.jsx(pr.div, {
            dir: L,
            "data-orientation": k,
            ...N,
            ref: u
        })
    })
}
);
Vc.displayName = Ts;
var $c = "TabsList"
  , Wc = I.forwardRef( (i, u) => {
    const {__scopeTabs: a, loop: f=!0, ...d} = i
      , g = Rs($c, a)
      , k = Bc(a);
    return _.jsx(Ap, {
        asChild: !0,
        ...k,
        orientation: g.orientation,
        dir: g.dir,
        loop: f,
        children: _.jsx(pr.div, {
            role: "tablist",
            "aria-orientation": g.orientation,
            ...d,
            ref: u
        })
    })
}
);
Wc.displayName = $c;
var Hc = "TabsTrigger"
  , Qc = I.forwardRef( (i, u) => {
    const {__scopeTabs: a, value: f, disabled: d=!1, ...g} = i
      , k = Rs(Hc, a)
      , S = Bc(a)
      , C = Yc(k.baseId, f)
      , N = Xc(k.baseId, f)
      , L = f === k.value;
    return _.jsx(Dp, {
        asChild: !0,
        ...S,
        focusable: !d,
        active: L,
        children: _.jsx(pr.button, {
            type: "button",
            role: "tab",
            "aria-selected": L,
            "aria-controls": N,
            "data-state": L ? "active" : "inactive",
            "data-disabled": d ? "" : void 0,
            disabled: d,
            id: C,
            ...g,
            ref: u,
            onMouseDown: Qt(i.onMouseDown, O => {
                !d && O.button === 0 && O.ctrlKey === !1 ? k.onValueChange(f) : O.preventDefault()
            }
            ),
            onKeyDown: Qt(i.onKeyDown, O => {
                [" ", "Enter"].includes(O.key) && k.onValueChange(f)
            }
            ),
            onFocus: Qt(i.onFocus, () => {
                const O = k.activationMode !== "manual";
                !L && !d && O && k.onValueChange(f)
            }
            )
        })
    })
}
);
Qc.displayName = Hc;
var Gc = "TabsContent"
  , Kc = I.forwardRef( (i, u) => {
    const {__scopeTabs: a, value: f, forceMount: d, children: g, ...k} = i
      , S = Rs(Gc, a)
      , C = Yc(S.baseId, f)
      , N = Xc(S.baseId, f)
      , L = f === S.value
      , O = I.useRef(L);
    return I.useEffect( () => {
        const B = requestAnimationFrame( () => O.current = !1);
        return () => cancelAnimationFrame(B)
    }
    , []),
    _.jsx(Uc, {
        present: d || L,
        children: ({present: B}) => _.jsx(pr.div, {
            "data-state": L ? "active" : "inactive",
            "data-orientation": S.orientation,
            role: "tabpanel",
            "aria-labelledby": C,
            hidden: !B,
            id: N,
            tabIndex: 0,
            ...k,
            ref: u,
            style: {
                ...i.style,
                animationDuration: O.current ? "0s" : void 0
            },
            children: B && g
        })
    })
}
);
Kc.displayName = Gc;
function Yc(i, u) {
    return `${i}-trigger-${u}`
}
function Xc(i, u) {
    return `${i}-content-${u}`
}
var $p = Vc
  , Zc = Wc
  , Jc = Qc
  , qc = Kc;
function ed(i) {
    var u, a, f = "";
    if (typeof i == "string" || typeof i == "number")
        f += i;
    else if (typeof i == "object")
        if (Array.isArray(i)) {
            var d = i.length;
            for (u = 0; u < d; u++)
                i[u] && (a = ed(i[u])) && (f && (f += " "),
                f += a)
        } else
            for (a in i)
                i[a] && (f && (f += " "),
                f += a);
    return f
}
function td() {
    for (var i, u, a = 0, f = "", d = arguments.length; a < d; a++)
        (i = arguments[a]) && (u = ed(i)) && (f && (f += " "),
        f += u);
    return f
}
const zs = "-"
  , Wp = i => {
    const u = Qp(i)
      , {conflictingClassGroups: a, conflictingClassGroupModifiers: f} = i;
    return {
        getClassGroupId: k => {
            const S = k.split(zs);
            return S[0] === "" && S.length !== 1 && S.shift(),
            nd(S, u) || Hp(k)
        }
        ,
        getConflictingClassGroupIds: (k, S) => {
            const C = a[k] || [];
            return S && f[k] ? [...C, ...f[k]] : C
        }
    }
}
  , nd = (i, u) => {
    var k;
    if (i.length === 0)
        return u.classGroupId;
    const a = i[0]
      , f = u.nextPart.get(a)
      , d = f ? nd(i.slice(1), f) : void 0;
    if (d)
        return d;
    if (u.validators.length === 0)
        return;
    const g = i.join(zs);
    return (k = u.validators.find( ({validator: S}) => S(g))) == null ? void 0 : k.classGroupId
}
  , wc = /^\[(.+)\]$/
  , Hp = i => {
    if (wc.test(i)) {
        const u = wc.exec(i)[1]
          , a = u == null ? void 0 : u.substring(0, u.indexOf(":"));
        if (a)
            return "arbitrary.." + a
    }
}
  , Qp = i => {
    const {theme: u, prefix: a} = i
      , f = {
        nextPart: new Map,
        validators: []
    };
    return Kp(Object.entries(i.classGroups), a).forEach( ([g,k]) => {
        Cs(k, f, g, u)
    }
    ),
    f
}
  , Cs = (i, u, a, f) => {
    i.forEach(d => {
        if (typeof d == "string") {
            const g = d === "" ? u : xc(u, d);
            g.classGroupId = a;
            return
        }
        if (typeof d == "function") {
            if (Gp(d)) {
                Cs(d(f), u, a, f);
                return
            }
            u.validators.push({
                validator: d,
                classGroupId: a
            });
            return
        }
        Object.entries(d).forEach( ([g,k]) => {
            Cs(k, xc(u, g), a, f)
        }
        )
    }
    )
}
  , xc = (i, u) => {
    let a = i;
    return u.split(zs).forEach(f => {
        a.nextPart.has(f) || a.nextPart.set(f, {
            nextPart: new Map,
            validators: []
        }),
        a = a.nextPart.get(f)
    }
    ),
    a
}
  , Gp = i => i.isThemeGetter
  , Kp = (i, u) => u ? i.map( ([a,f]) => {
    const d = f.map(g => typeof g == "string" ? u + g : typeof g == "object" ? Object.fromEntries(Object.entries(g).map( ([k,S]) => [u + k, S])) : g);
    return [a, d]
}
) : i
  , Yp = i => {
    if (i < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let u = 0
      , a = new Map
      , f = new Map;
    const d = (g, k) => {
        a.set(g, k),
        u++,
        u > i && (u = 0,
        f = a,
        a = new Map)
    }
    ;
    return {
        get(g) {
            let k = a.get(g);
            if (k !== void 0)
                return k;
            if ((k = f.get(g)) !== void 0)
                return d(g, k),
                k
        },
        set(g, k) {
            a.has(g) ? a.set(g, k) : d(g, k)
        }
    }
}
  , rd = "!"
  , Xp = i => {
    const {separator: u, experimentalParseClassName: a} = i
      , f = u.length === 1
      , d = u[0]
      , g = u.length
      , k = S => {
        const C = [];
        let N = 0, L = 0, O;
        for (let A = 0; A < S.length; A++) {
            let G = S[A];
            if (N === 0) {
                if (G === d && (f || S.slice(A, A + g) === u)) {
                    C.push(S.slice(L, A)),
                    L = A + g;
                    continue
                }
                if (G === "/") {
                    O = A;
                    continue
                }
            }
            G === "[" ? N++ : G === "]" && N--
        }
        const B = C.length === 0 ? S : S.substring(L)
          , v = B.startsWith(rd)
          , j = v ? B.substring(1) : B
          , U = O && O > L ? O - L : void 0;
        return {
            modifiers: C,
            hasImportantModifier: v,
            baseClassName: j,
            maybePostfixModifierPosition: U
        }
    }
    ;
    return a ? S => a({
        className: S,
        parseClassName: k
    }) : k
}
  , Zp = i => {
    if (i.length <= 1)
        return i;
    const u = [];
    let a = [];
    return i.forEach(f => {
        f[0] === "[" ? (u.push(...a.sort(), f),
        a = []) : a.push(f)
    }
    ),
    u.push(...a.sort()),
    u
}
  , Jp = i => ({
    cache: Yp(i.cacheSize),
    parseClassName: Xp(i),
    ...Wp(i)
})
  , qp = /\s+/
  , em = (i, u) => {
    const {parseClassName: a, getClassGroupId: f, getConflictingClassGroupIds: d} = u
      , g = []
      , k = i.trim().split(qp);
    let S = "";
    for (let C = k.length - 1; C >= 0; C -= 1) {
        const N = k[C]
          , {modifiers: L, hasImportantModifier: O, baseClassName: B, maybePostfixModifierPosition: v} = a(N);
        let j = !!v
          , U = f(j ? B.substring(0, v) : B);
        if (!U) {
            if (!j) {
                S = N + (S.length > 0 ? " " + S : S);
                continue
            }
            if (U = f(B),
            !U) {
                S = N + (S.length > 0 ? " " + S : S);
                continue
            }
            j = !1
        }
        const A = Zp(L).join(":")
          , G = O ? A + rd : A
          , ee = G + U;
        if (g.includes(ee))
            continue;
        g.push(ee);
        const ce = d(U, j);
        for (let ue = 0; ue < ce.length; ++ue) {
            const ye = ce[ue];
            g.push(G + ye)
        }
        S = N + (S.length > 0 ? " " + S : S)
    }
    return S
}
;
function tm() {
    let i = 0, u, a, f = "";
    for (; i < arguments.length; )
        (u = arguments[i++]) && (a = od(u)) && (f && (f += " "),
        f += a);
    return f
}
const od = i => {
    if (typeof i == "string")
        return i;
    let u, a = "";
    for (let f = 0; f < i.length; f++)
        i[f] && (u = od(i[f])) && (a && (a += " "),
        a += u);
    return a
}
;
function nm(i, ...u) {
    let a, f, d, g = k;
    function k(C) {
        const N = u.reduce( (L, O) => O(L), i());
        return a = Jp(N),
        f = a.cache.get,
        d = a.cache.set,
        g = S,
        S(C)
    }
    function S(C) {
        const N = f(C);
        if (N)
            return N;
        const L = em(C, a);
        return d(C, L),
        L
    }
    return function() {
        return g(tm.apply(null, arguments))
    }
}
const Pe = i => {
    const u = a => a[i] || [];
    return u.isThemeGetter = !0,
    u
}
  , ld = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , rm = /^\d+\/\d+$/
  , om = new Set(["px", "full", "screen"])
  , lm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , im = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , sm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , am = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , um = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Ht = i => fr(i) || om.has(i) || rm.test(i)
  , vn = i => mr(i, "length", gm)
  , fr = i => !!i && !Number.isNaN(Number(i))
  , ws = i => mr(i, "number", fr)
  , oo = i => !!i && Number.isInteger(Number(i))
  , cm = i => i.endsWith("%") && fr(i.slice(0, -1))
  , ie = i => ld.test(i)
  , gn = i => lm.test(i)
  , dm = new Set(["length", "size", "percentage"])
  , fm = i => mr(i, dm, id)
  , pm = i => mr(i, "position", id)
  , mm = new Set(["image", "url"])
  , hm = i => mr(i, mm, wm)
  , vm = i => mr(i, "", ym)
  , lo = () => !0
  , mr = (i, u, a) => {
    const f = ld.exec(i);
    return f ? f[1] ? typeof u == "string" ? f[1] === u : u.has(f[1]) : a(f[2]) : !1
}
  , gm = i => im.test(i) && !sm.test(i)
  , id = () => !1
  , ym = i => am.test(i)
  , wm = i => um.test(i)
  , xm = () => {
    const i = Pe("colors")
      , u = Pe("spacing")
      , a = Pe("blur")
      , f = Pe("brightness")
      , d = Pe("borderColor")
      , g = Pe("borderRadius")
      , k = Pe("borderSpacing")
      , S = Pe("borderWidth")
      , C = Pe("contrast")
      , N = Pe("grayscale")
      , L = Pe("hueRotate")
      , O = Pe("invert")
      , B = Pe("gap")
      , v = Pe("gradientColorStops")
      , j = Pe("gradientColorStopPositions")
      , U = Pe("inset")
      , A = Pe("margin")
      , G = Pe("opacity")
      , ee = Pe("padding")
      , ce = Pe("saturate")
      , ue = Pe("scale")
      , ye = Pe("sepia")
      , me = Pe("skew")
      , W = Pe("space")
      , Z = Pe("translate")
      , xe = () => ["auto", "contain", "none"]
      , ke = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , Ae = () => ["auto", ie, u]
      , oe = () => [ie, u]
      , ze = () => ["", Ht, vn]
      , Te = () => ["auto", fr, ie]
      , Fe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , de = () => ["solid", "dashed", "dotted", "double", "none"]
      , fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , b = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , z = () => ["", "0", ie]
      , F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , h = () => [fr, ie];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [lo],
            spacing: [Ht, vn],
            blur: ["none", "", gn, ie],
            brightness: h(),
            borderColor: [i],
            borderRadius: ["none", "", "full", gn, ie],
            borderSpacing: oe(),
            borderWidth: ze(),
            contrast: h(),
            grayscale: z(),
            hueRotate: h(),
            invert: z(),
            gap: oe(),
            gradientColorStops: [i],
            gradientColorStopPositions: [cm, vn],
            inset: Ae(),
            margin: Ae(),
            opacity: h(),
            padding: oe(),
            saturate: h(),
            scale: h(),
            sepia: z(),
            skew: h(),
            space: oe(),
            translate: oe()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", ie]
            }],
            container: ["container"],
            columns: [{
                columns: [gn]
            }],
            "break-after": [{
                "break-after": F()
            }],
            "break-before": [{
                "break-before": F()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Fe(), ie]
            }],
            overflow: [{
                overflow: ke()
            }],
            "overflow-x": [{
                "overflow-x": ke()
            }],
            "overflow-y": [{
                "overflow-y": ke()
            }],
            overscroll: [{
                overscroll: xe()
            }],
            "overscroll-x": [{
                "overscroll-x": xe()
            }],
            "overscroll-y": [{
                "overscroll-y": xe()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [U]
            }],
            "inset-x": [{
                "inset-x": [U]
            }],
            "inset-y": [{
                "inset-y": [U]
            }],
            start: [{
                start: [U]
            }],
            end: [{
                end: [U]
            }],
            top: [{
                top: [U]
            }],
            right: [{
                right: [U]
            }],
            bottom: [{
                bottom: [U]
            }],
            left: [{
                left: [U]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", oo, ie]
            }],
            basis: [{
                basis: Ae()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", ie]
            }],
            grow: [{
                grow: z()
            }],
            shrink: [{
                shrink: z()
            }],
            order: [{
                order: ["first", "last", "none", oo, ie]
            }],
            "grid-cols": [{
                "grid-cols": [lo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", oo, ie]
                }, ie]
            }],
            "col-start": [{
                "col-start": Te()
            }],
            "col-end": [{
                "col-end": Te()
            }],
            "grid-rows": [{
                "grid-rows": [lo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [oo, ie]
                }, ie]
            }],
            "row-start": [{
                "row-start": Te()
            }],
            "row-end": [{
                "row-end": Te()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", ie]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", ie]
            }],
            gap: [{
                gap: [B]
            }],
            "gap-x": [{
                "gap-x": [B]
            }],
            "gap-y": [{
                "gap-y": [B]
            }],
            "justify-content": [{
                justify: ["normal", ...b()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...b(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...b(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [ee]
            }],
            px: [{
                px: [ee]
            }],
            py: [{
                py: [ee]
            }],
            ps: [{
                ps: [ee]
            }],
            pe: [{
                pe: [ee]
            }],
            pt: [{
                pt: [ee]
            }],
            pr: [{
                pr: [ee]
            }],
            pb: [{
                pb: [ee]
            }],
            pl: [{
                pl: [ee]
            }],
            m: [{
                m: [A]
            }],
            mx: [{
                mx: [A]
            }],
            my: [{
                my: [A]
            }],
            ms: [{
                ms: [A]
            }],
            me: [{
                me: [A]
            }],
            mt: [{
                mt: [A]
            }],
            mr: [{
                mr: [A]
            }],
            mb: [{
                mb: [A]
            }],
            ml: [{
                ml: [A]
            }],
            "space-x": [{
                "space-x": [W]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [W]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ie, u]
            }],
            "min-w": [{
                "min-w": [ie, u, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [ie, u, "none", "full", "min", "max", "fit", "prose", {
                    screen: [gn]
                }, gn]
            }],
            h: [{
                h: [ie, u, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [ie, u, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [ie, u, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [ie, u, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", gn, vn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ws]
            }],
            "font-family": [{
                font: [lo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ie]
            }],
            "line-clamp": [{
                "line-clamp": ["none", fr, ws]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ht, ie]
            }],
            "list-image": [{
                "list-image": ["none", ie]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", ie]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [i]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [G]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [i]
            }],
            "text-opacity": [{
                "text-opacity": [G]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...de(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Ht, vn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Ht, ie]
            }],
            "text-decoration-color": [{
                decoration: [i]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: oe()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ie]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", ie]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [G]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Fe(), pm]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", fm]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, hm]
            }],
            "bg-color": [{
                bg: [i]
            }],
            "gradient-from-pos": [{
                from: [j]
            }],
            "gradient-via-pos": [{
                via: [j]
            }],
            "gradient-to-pos": [{
                to: [j]
            }],
            "gradient-from": [{
                from: [v]
            }],
            "gradient-via": [{
                via: [v]
            }],
            "gradient-to": [{
                to: [v]
            }],
            rounded: [{
                rounded: [g]
            }],
            "rounded-s": [{
                "rounded-s": [g]
            }],
            "rounded-e": [{
                "rounded-e": [g]
            }],
            "rounded-t": [{
                "rounded-t": [g]
            }],
            "rounded-r": [{
                "rounded-r": [g]
            }],
            "rounded-b": [{
                "rounded-b": [g]
            }],
            "rounded-l": [{
                "rounded-l": [g]
            }],
            "rounded-ss": [{
                "rounded-ss": [g]
            }],
            "rounded-se": [{
                "rounded-se": [g]
            }],
            "rounded-ee": [{
                "rounded-ee": [g]
            }],
            "rounded-es": [{
                "rounded-es": [g]
            }],
            "rounded-tl": [{
                "rounded-tl": [g]
            }],
            "rounded-tr": [{
                "rounded-tr": [g]
            }],
            "rounded-br": [{
                "rounded-br": [g]
            }],
            "rounded-bl": [{
                "rounded-bl": [g]
            }],
            "border-w": [{
                border: [S]
            }],
            "border-w-x": [{
                "border-x": [S]
            }],
            "border-w-y": [{
                "border-y": [S]
            }],
            "border-w-s": [{
                "border-s": [S]
            }],
            "border-w-e": [{
                "border-e": [S]
            }],
            "border-w-t": [{
                "border-t": [S]
            }],
            "border-w-r": [{
                "border-r": [S]
            }],
            "border-w-b": [{
                "border-b": [S]
            }],
            "border-w-l": [{
                "border-l": [S]
            }],
            "border-opacity": [{
                "border-opacity": [G]
            }],
            "border-style": [{
                border: [...de(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [S]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [S]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [G]
            }],
            "divide-style": [{
                divide: de()
            }],
            "border-color": [{
                border: [d]
            }],
            "border-color-x": [{
                "border-x": [d]
            }],
            "border-color-y": [{
                "border-y": [d]
            }],
            "border-color-s": [{
                "border-s": [d]
            }],
            "border-color-e": [{
                "border-e": [d]
            }],
            "border-color-t": [{
                "border-t": [d]
            }],
            "border-color-r": [{
                "border-r": [d]
            }],
            "border-color-b": [{
                "border-b": [d]
            }],
            "border-color-l": [{
                "border-l": [d]
            }],
            "divide-color": [{
                divide: [d]
            }],
            "outline-style": [{
                outline: ["", ...de()]
            }],
            "outline-offset": [{
                "outline-offset": [Ht, ie]
            }],
            "outline-w": [{
                outline: [Ht, vn]
            }],
            "outline-color": [{
                outline: [i]
            }],
            "ring-w": [{
                ring: ze()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [i]
            }],
            "ring-opacity": [{
                "ring-opacity": [G]
            }],
            "ring-offset-w": [{
                "ring-offset": [Ht, vn]
            }],
            "ring-offset-color": [{
                "ring-offset": [i]
            }],
            shadow: [{
                shadow: ["", "inner", "none", gn, vm]
            }],
            "shadow-color": [{
                shadow: [lo]
            }],
            opacity: [{
                opacity: [G]
            }],
            "mix-blend": [{
                "mix-blend": [...fe(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": fe()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [a]
            }],
            brightness: [{
                brightness: [f]
            }],
            contrast: [{
                contrast: [C]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", gn, ie]
            }],
            grayscale: [{
                grayscale: [N]
            }],
            "hue-rotate": [{
                "hue-rotate": [L]
            }],
            invert: [{
                invert: [O]
            }],
            saturate: [{
                saturate: [ce]
            }],
            sepia: [{
                sepia: [ye]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [a]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [f]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [C]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [N]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [L]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [O]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [G]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [ce]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [ye]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [k]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [k]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [k]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ie]
            }],
            duration: [{
                duration: h()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", ie]
            }],
            delay: [{
                delay: h()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", ie]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [ue]
            }],
            "scale-x": [{
                "scale-x": [ue]
            }],
            "scale-y": [{
                "scale-y": [ue]
            }],
            rotate: [{
                rotate: [oo, ie]
            }],
            "translate-x": [{
                "translate-x": [Z]
            }],
            "translate-y": [{
                "translate-y": [Z]
            }],
            "skew-x": [{
                "skew-x": [me]
            }],
            "skew-y": [{
                "skew-y": [me]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ie]
            }],
            accent: [{
                accent: ["auto", i]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ie]
            }],
            "caret-color": [{
                caret: [i]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": oe()
            }],
            "scroll-mx": [{
                "scroll-mx": oe()
            }],
            "scroll-my": [{
                "scroll-my": oe()
            }],
            "scroll-ms": [{
                "scroll-ms": oe()
            }],
            "scroll-me": [{
                "scroll-me": oe()
            }],
            "scroll-mt": [{
                "scroll-mt": oe()
            }],
            "scroll-mr": [{
                "scroll-mr": oe()
            }],
            "scroll-mb": [{
                "scroll-mb": oe()
            }],
            "scroll-ml": [{
                "scroll-ml": oe()
            }],
            "scroll-p": [{
                "scroll-p": oe()
            }],
            "scroll-px": [{
                "scroll-px": oe()
            }],
            "scroll-py": [{
                "scroll-py": oe()
            }],
            "scroll-ps": [{
                "scroll-ps": oe()
            }],
            "scroll-pe": [{
                "scroll-pe": oe()
            }],
            "scroll-pt": [{
                "scroll-pt": oe()
            }],
            "scroll-pr": [{
                "scroll-pr": oe()
            }],
            "scroll-pb": [{
                "scroll-pb": oe()
            }],
            "scroll-pl": [{
                "scroll-pl": oe()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", ie]
            }],
            fill: [{
                fill: [i, "none"]
            }],
            "stroke-w": [{
                stroke: [Ht, vn, ws]
            }],
            stroke: [{
                stroke: [i, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Sm = nm(xm);
function uo(...i) {
    return Sm(td(i))
}
const km = $p
  , sd = I.forwardRef( ({className: i, ...u}, a) => _.jsx(Zc, {
    ref: a,
    className: uo("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", i),
    ...u
}));
sd.displayName = Zc.displayName;
const io = I.forwardRef( ({className: i, ...u}, a) => _.jsx(Jc, {
    ref: a,
    className: uo("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", i),
    ...u
}));
io.displayName = Jc.displayName;
const so = I.forwardRef( ({className: i, ...u}, a) => _.jsx(qc, {
    ref: a,
    className: uo("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", i),
    ...u
}));
so.displayName = qc.displayName;
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , ad = (...i) => i.filter( (u, a, f) => !!u && u.trim() !== "" && f.indexOf(u) === a).join(" ").trim();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Em = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nm = I.forwardRef( ({color: i="currentColor", size: u=24, strokeWidth: a=2, absoluteStrokeWidth: f, className: d="", children: g, iconNode: k, ...S}, C) => I.createElement("svg", {
    ref: C,
    ...Em,
    width: u,
    height: u,
    stroke: i,
    strokeWidth: f ? Number(a) * 24 / Number(u) : a,
    className: ad("lucide", d),
    ...S
}, [...k.map( ([N,L]) => I.createElement(N, L)), ...Array.isArray(g) ? g : [g]]));
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = (i, u) => {
    const a = I.forwardRef( ({className: f, ...d}, g) => I.createElement(Nm, {
        ref: g,
        iconNode: u,
        className: ad(`lucide-${Cm(i)}`, f),
        ...d
    }));
    return a.displayName = `${i}`,
    a
}
;
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = hr("Bot", [["path", {
    d: "M12 8V4H8",
    key: "hb8ula"
}], ["rect", {
    width: "16",
    height: "12",
    x: "4",
    y: "8",
    rx: "2",
    key: "enze0r"
}], ["path", {
    d: "M2 14h2",
    key: "vft8re"
}], ["path", {
    d: "M20 14h2",
    key: "4cs60a"
}], ["path", {
    d: "M15 13v2",
    key: "1xurst"
}], ["path", {
    d: "M9 13v2",
    key: "rq6x2g"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = hr("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = hr("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pm = hr("NotebookPen", [["path", {
    d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
    key: "re6nr2"
}], ["path", {
    d: "M2 6h4",
    key: "aawbzj"
}], ["path", {
    d: "M2 10h4",
    key: "l0bgd4"
}], ["path", {
    d: "M2 14h4",
    key: "1gsvsf"
}], ["path", {
    d: "M2 18h4",
    key: "1bu2t1"
}], ["path", {
    d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
    key: "pqwjuv"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = hr("Pause", [["rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16",
    rx: "1",
    key: "zuxfzm"
}], ["rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16",
    rx: "1",
    key: "1okwgv"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cc = hr("Skull", [["path", {
    d: "m12.5 17-.5-1-.5 1h1z",
    key: "3me087"
}], ["path", {
    d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
    key: "1o5pge"
}], ["circle", {
    cx: "15",
    cy: "12",
    r: "1",
    key: "1tmaij"
}], ["circle", {
    cx: "9",
    cy: "12",
    r: "1",
    key: "1vctgf"
}]])
  , yn = I.forwardRef( ({className: i, type: u, ...a}, f) => _.jsx("input", {
    type: u,
    className: uo("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", i),
    ref: f,
    ...a
}));
yn.displayName = "Input";
const Ec = i => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i
  , Nc = td
  , Rm = (i, u) => a => {
    var f;
    if ((u == null ? void 0 : u.variants) == null)
        return Nc(i, a == null ? void 0 : a.class, a == null ? void 0 : a.className);
    const {variants: d, defaultVariants: g} = u
      , k = Object.keys(d).map(N => {
        const L = a == null ? void 0 : a[N]
          , O = g == null ? void 0 : g[N];
        if (L === null)
            return null;
        const B = Ec(L) || Ec(O);
        return d[N][B]
    }
    )
      , S = a && Object.entries(a).reduce( (N, L) => {
        let[O,B] = L;
        return B === void 0 || (N[O] = B),
        N
    }
    , {})
      , C = u == null || (f = u.compoundVariants) === null || f === void 0 ? void 0 : f.reduce( (N, L) => {
        let {class: O, className: B, ...v} = L;
        return Object.entries(v).every(j => {
            let[U,A] = j;
            return Array.isArray(A) ? A.includes({
                ...g,
                ...S
            }[U]) : {
                ...g,
                ...S
            }[U] === A
        }
        ) ? [...N, O, B] : N
    }
    , []);
    return Nc(i, k, C, a == null ? void 0 : a.class, a == null ? void 0 : a.className)
}
  , zm = Rm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , dr = I.forwardRef( ({className: i, variant: u, size: a, asChild: f=!1, ...d}, g) => {
    const k = f ? ao : "button";
    return _.jsx(k, {
        className: uo(zm({
            variant: u,
            size: a,
            className: i
        })),
        ref: g,
        ...d
    })
}
);
dr.displayName = "Button";
var jm = i => {
    switch (i) {
    case "success":
        return Im;
    case "info":
        return Am;
    case "warning":
        return Om;
    case "error":
        return Dm;
    default:
        return null
    }
}
  , Mm = Array(12).fill(0)
  , Lm = ({visible: i, className: u}) => D.createElement("div", {
    className: ["sonner-loading-wrapper", u].filter(Boolean).join(" "),
    "data-visible": i
}, D.createElement("div", {
    className: "sonner-spinner"
}, Mm.map( (a, f) => D.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${f}`
}))))
  , Im = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Om = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Am = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Dm = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Fm = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, D.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), D.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , bm = () => {
    let[i,u] = D.useState(document.hidden);
    return D.useEffect( () => {
        let a = () => {
            u(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", a),
        () => window.removeEventListener("visibilitychange", a)
    }
    , []),
    i
}
  , Es = 1
  , Um = class {
    constructor() {
        this.subscribe = i => (this.subscribers.push(i),
        () => {
            let u = this.subscribers.indexOf(i);
            this.subscribers.splice(u, 1)
        }
        ),
        this.publish = i => {
            this.subscribers.forEach(u => u(i))
        }
        ,
        this.addToast = i => {
            this.publish(i),
            this.toasts = [...this.toasts, i]
        }
        ,
        this.create = i => {
            var u;
            let {message: a, ...f} = i
              , d = typeof (i == null ? void 0 : i.id) == "number" || ((u = i.id) == null ? void 0 : u.length) > 0 ? i.id : Es++
              , g = this.toasts.find(S => S.id === d)
              , k = i.dismissible === void 0 ? !0 : i.dismissible;
            return g ? this.toasts = this.toasts.map(S => S.id === d ? (this.publish({
                ...S,
                ...i,
                id: d,
                title: a
            }),
            {
                ...S,
                ...i,
                id: d,
                dismissible: k,
                title: a
            }) : S) : this.addToast({
                title: a,
                ...f,
                dismissible: k,
                id: d
            }),
            d
        }
        ,
        this.dismiss = i => (i || this.toasts.forEach(u => {
            this.subscribers.forEach(a => a({
                id: u.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(u => u({
            id: i,
            dismiss: !0
        })),
        i),
        this.message = (i, u) => this.create({
            ...u,
            message: i
        }),
        this.error = (i, u) => this.create({
            ...u,
            message: i,
            type: "error"
        }),
        this.success = (i, u) => this.create({
            ...u,
            type: "success",
            message: i
        }),
        this.info = (i, u) => this.create({
            ...u,
            type: "info",
            message: i
        }),
        this.warning = (i, u) => this.create({
            ...u,
            type: "warning",
            message: i
        }),
        this.loading = (i, u) => this.create({
            ...u,
            type: "loading",
            message: i
        }),
        this.promise = (i, u) => {
            if (!u)
                return;
            let a;
            u.loading !== void 0 && (a = this.create({
                ...u,
                promise: i,
                type: "loading",
                message: u.loading,
                description: typeof u.description != "function" ? u.description : void 0
            }));
            let f = i instanceof Promise ? i : i(), d = a !== void 0, g, k = f.then(async C => {
                if (g = ["resolve", C],
                D.isValidElement(C))
                    d = !1,
                    this.create({
                        id: a,
                        type: "default",
                        message: C
                    });
                else if (Vm(C) && !C.ok) {
                    d = !1;
                    let N = typeof u.error == "function" ? await u.error(`HTTP error! status: ${C.status}`) : u.error
                      , L = typeof u.description == "function" ? await u.description(`HTTP error! status: ${C.status}`) : u.description;
                    this.create({
                        id: a,
                        type: "error",
                        message: N,
                        description: L
                    })
                } else if (u.success !== void 0) {
                    d = !1;
                    let N = typeof u.success == "function" ? await u.success(C) : u.success
                      , L = typeof u.description == "function" ? await u.description(C) : u.description;
                    this.create({
                        id: a,
                        type: "success",
                        message: N,
                        description: L
                    })
                }
            }
            ).catch(async C => {
                if (g = ["reject", C],
                u.error !== void 0) {
                    d = !1;
                    let N = typeof u.error == "function" ? await u.error(C) : u.error
                      , L = typeof u.description == "function" ? await u.description(C) : u.description;
                    this.create({
                        id: a,
                        type: "error",
                        message: N,
                        description: L
                    })
                }
            }
            ).finally( () => {
                var C;
                d && (this.dismiss(a),
                a = void 0),
                (C = u.finally) == null || C.call(u)
            }
            ), S = () => new Promise( (C, N) => k.then( () => g[0] === "reject" ? N(g[1]) : C(g[1])).catch(N));
            return typeof a != "string" && typeof a != "number" ? {
                unwrap: S
            } : Object.assign(a, {
                unwrap: S
            })
        }
        ,
        this.custom = (i, u) => {
            let a = (u == null ? void 0 : u.id) || Es++;
            return this.create({
                jsx: i(a),
                id: a,
                ...u
            }),
            a
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , pt = new Um
  , Bm = (i, u) => {
    let a = (u == null ? void 0 : u.id) || Es++;
    return pt.addToast({
        title: i,
        ...u,
        id: a
    }),
    a
}
  , Vm = i => i && typeof i == "object" && "ok"in i && typeof i.ok == "boolean" && "status"in i && typeof i.status == "number"
  , $m = Bm
  , Wm = () => pt.toasts
  , et = Object.assign($m, {
    success: pt.success,
    info: pt.info,
    warning: pt.warning,
    error: pt.error,
    custom: pt.custom,
    message: pt.message,
    promise: pt.promise,
    dismiss: pt.dismiss,
    loading: pt.loading
}, {
    getHistory: Wm
});
function Hm(i, {insertAt: u}={}) {
    if (typeof document > "u")
        return;
    let a = document.head || document.getElementsByTagName("head")[0]
      , f = document.createElement("style");
    f.type = "text/css",
    u === "top" && a.firstChild ? a.insertBefore(f, a.firstChild) : a.appendChild(f),
    f.styleSheet ? f.styleSheet.cssText = i : f.appendChild(document.createTextNode(i))
}
Hm(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Pl(i) {
    return i.label !== void 0
}
var Qm = 3
  , Gm = "32px"
  , _c = 4e3
  , Km = 356
  , Ym = 14
  , Xm = 20
  , Zm = 200;
function Jm(...i) {
    return i.filter(Boolean).join(" ")
}
var qm = i => {
    var u, a, f, d, g, k, S, C, N, L, O;
    let {invert: B, toast: v, unstyled: j, interacting: U, setHeights: A, visibleToasts: G, heights: ee, index: ce, toasts: ue, expanded: ye, removeToast: me, defaultRichColors: W, closeButton: Z, style: xe, cancelButtonStyle: ke, actionButtonStyle: Ae, className: oe="", descriptionClassName: ze="", duration: Te, position: Fe, gap: de, loadingIcon: fe, expandByDefault: b, classNames: z, icons: F, closeButtonAriaLabel: h="Close toast", pauseWhenPageIsHidden: E, cn: V} = i
      , [K,ne] = D.useState(!1)
      , [se,le] = D.useState(!1)
      , [he,we] = D.useState(!1)
      , [be,zt] = D.useState(!1)
      , [co,wn] = D.useState(!1)
      , [vr,An] = D.useState(0)
      , [fo,Dn] = D.useState(0)
      , xn = D.useRef(v.duration || Te || _c)
      , Fn = D.useRef(null)
      , mt = D.useRef(null)
      , Gt = ce === 0
      , gr = ce + 1 <= G
      , Ze = v.type
      , At = v.dismissible !== !1
      , po = v.className || ""
      , mo = v.descriptionClassName || ""
      , Kt = D.useMemo( () => ee.findIndex(te => te.toastId === v.id) || 0, [ee, v.id])
      , bn = D.useMemo( () => {
        var te;
        return (te = v.closeButton) != null ? te : Z
    }
    , [v.closeButton, Z]);
    D.useMemo( () => v.duration || Te || _c, [v.duration, Te]);
    let Un = D.useRef(0)
      , ht = D.useRef(0)
      , Yt = D.useRef(0)
      , Bn = D.useRef(null)
      , [yr,ho] = Fe.split("-")
      , vo = D.useMemo( () => ee.reduce( (te, pe, Ce) => Ce >= Kt ? te : te + pe.height, 0), [ee, Kt])
      , Vn = bm()
      , wr = v.invert || B
      , Sn = Ze === "loading";
    ht.current = D.useMemo( () => Kt * de + vo, [Kt, vo]),
    D.useEffect( () => {
        ne(!0)
    }
    , []),
    D.useEffect( () => {
        let te = mt.current;
        if (te) {
            let pe = te.getBoundingClientRect().height;
            return Dn(pe),
            A(Ce => [{
                toastId: v.id,
                height: pe,
                position: v.position
            }, ...Ce]),
            () => A(Ce => Ce.filter(tt => tt.toastId !== v.id))
        }
    }
    , [A, v.id]),
    D.useLayoutEffect( () => {
        if (!K)
            return;
        let te = mt.current
          , pe = te.style.height;
        te.style.height = "auto";
        let Ce = te.getBoundingClientRect().height;
        te.style.height = pe,
        Dn(Ce),
        A(tt => tt.find(at => at.toastId === v.id) ? tt.map(at => at.toastId === v.id ? {
            ...at,
            height: Ce
        } : at) : [{
            toastId: v.id,
            height: Ce,
            position: v.position
        }, ...tt])
    }
    , [K, v.title, v.description, A, v.id]);
    let vt = D.useCallback( () => {
        le(!0),
        An(ht.current),
        A(te => te.filter(pe => pe.toastId !== v.id)),
        setTimeout( () => {
            me(v)
        }
        , Zm)
    }
    , [v, me, A, ht]);
    D.useEffect( () => {
        if (v.promise && Ze === "loading" || v.duration === 1 / 0 || v.type === "loading")
            return;
        let te;
        return ye || U || E && Vn ? ( () => {
            if (Yt.current < Un.current) {
                let pe = new Date().getTime() - Un.current;
                xn.current = xn.current - pe
            }
            Yt.current = new Date().getTime()
        }
        )() : xn.current !== 1 / 0 && (Un.current = new Date().getTime(),
        te = setTimeout( () => {
            var pe;
            (pe = v.onAutoClose) == null || pe.call(v, v),
            vt()
        }
        , xn.current)),
        () => clearTimeout(te)
    }
    , [ye, U, v, Ze, E, Vn, vt]),
    D.useEffect( () => {
        v.delete && vt()
    }
    , [vt, v.delete]);
    function xr() {
        var te, pe, Ce;
        return F != null && F.loading ? D.createElement("div", {
            className: V(z == null ? void 0 : z.loader, (te = v == null ? void 0 : v.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": Ze === "loading"
        }, F.loading) : fe ? D.createElement("div", {
            className: V(z == null ? void 0 : z.loader, (pe = v == null ? void 0 : v.classNames) == null ? void 0 : pe.loader, "sonner-loader"),
            "data-visible": Ze === "loading"
        }, fe) : D.createElement(Lm, {
            className: V(z == null ? void 0 : z.loader, (Ce = v == null ? void 0 : v.classNames) == null ? void 0 : Ce.loader),
            visible: Ze === "loading"
        })
    }
    return D.createElement("li", {
        tabIndex: 0,
        ref: mt,
        className: V(oe, po, z == null ? void 0 : z.toast, (u = v == null ? void 0 : v.classNames) == null ? void 0 : u.toast, z == null ? void 0 : z.default, z == null ? void 0 : z[Ze], (a = v == null ? void 0 : v.classNames) == null ? void 0 : a[Ze]),
        "data-sonner-toast": "",
        "data-rich-colors": (f = v.richColors) != null ? f : W,
        "data-styled": !(v.jsx || v.unstyled || j),
        "data-mounted": K,
        "data-promise": !!v.promise,
        "data-swiped": co,
        "data-removed": se,
        "data-visible": gr,
        "data-y-position": yr,
        "data-x-position": ho,
        "data-index": ce,
        "data-front": Gt,
        "data-swiping": he,
        "data-dismissible": At,
        "data-type": Ze,
        "data-invert": wr,
        "data-swipe-out": be,
        "data-expanded": !!(ye || b && K),
        style: {
            "--index": ce,
            "--toasts-before": ce,
            "--z-index": ue.length - ce,
            "--offset": `${se ? vr : ht.current}px`,
            "--initial-height": b ? "auto" : `${fo}px`,
            ...xe,
            ...v.style
        },
        onPointerDown: te => {
            Sn || !At || (Fn.current = new Date,
            An(ht.current),
            te.target.setPointerCapture(te.pointerId),
            te.target.tagName !== "BUTTON" && (we(!0),
            Bn.current = {
                x: te.clientX,
                y: te.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var te, pe, Ce, tt;
            if (be || !At)
                return;
            Bn.current = null;
            let at = Number(((te = mt.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , kn = new Date().getTime() - ((pe = Fn.current) == null ? void 0 : pe.getTime())
              , go = Math.abs(at) / kn;
            if (Math.abs(at) >= Xm || go > .11) {
                An(ht.current),
                (Ce = v.onDismiss) == null || Ce.call(v, v),
                vt(),
                zt(!0),
                wn(!1);
                return
            }
            (tt = mt.current) == null || tt.style.setProperty("--swipe-amount", "0px"),
            we(!1)
        }
        ,
        onPointerMove: te => {
            var pe, Ce;
            if (!Bn.current || !At)
                return;
            let tt = te.clientY - Bn.current.y
              , at = ((pe = window.getSelection()) == null ? void 0 : pe.toString().length) > 0
              , kn = yr === "top" ? Math.min(0, tt) : Math.max(0, tt);
            Math.abs(kn) > 0 && wn(!0),
            !at && ((Ce = mt.current) == null || Ce.style.setProperty("--swipe-amount", `${kn}px`))
        }
    }, bn && !v.jsx ? D.createElement("button", {
        "aria-label": h,
        "data-disabled": Sn,
        "data-close-button": !0,
        onClick: Sn || !At ? () => {}
        : () => {
            var te;
            vt(),
            (te = v.onDismiss) == null || te.call(v, v)
        }
        ,
        className: V(z == null ? void 0 : z.closeButton, (d = v == null ? void 0 : v.classNames) == null ? void 0 : d.closeButton)
    }, (g = F == null ? void 0 : F.close) != null ? g : Fm) : null, v.jsx || D.isValidElement(v.title) ? v.jsx ? v.jsx : typeof v.title == "function" ? v.title() : v.title : D.createElement(D.Fragment, null, Ze || v.icon || v.promise ? D.createElement("div", {
        "data-icon": "",
        className: V(z == null ? void 0 : z.icon, (k = v == null ? void 0 : v.classNames) == null ? void 0 : k.icon)
    }, v.promise || v.type === "loading" && !v.icon ? v.icon || xr() : null, v.type !== "loading" ? v.icon || (F == null ? void 0 : F[Ze]) || jm(Ze) : null) : null, D.createElement("div", {
        "data-content": "",
        className: V(z == null ? void 0 : z.content, (S = v == null ? void 0 : v.classNames) == null ? void 0 : S.content)
    }, D.createElement("div", {
        "data-title": "",
        className: V(z == null ? void 0 : z.title, (C = v == null ? void 0 : v.classNames) == null ? void 0 : C.title)
    }, typeof v.title == "function" ? v.title() : v.title), v.description ? D.createElement("div", {
        "data-description": "",
        className: V(ze, mo, z == null ? void 0 : z.description, (N = v == null ? void 0 : v.classNames) == null ? void 0 : N.description)
    }, typeof v.description == "function" ? v.description() : v.description) : null), D.isValidElement(v.cancel) ? v.cancel : v.cancel && Pl(v.cancel) ? D.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: v.cancelButtonStyle || ke,
        onClick: te => {
            var pe, Ce;
            Pl(v.cancel) && At && ((Ce = (pe = v.cancel).onClick) == null || Ce.call(pe, te),
            vt())
        }
        ,
        className: V(z == null ? void 0 : z.cancelButton, (L = v == null ? void 0 : v.classNames) == null ? void 0 : L.cancelButton)
    }, v.cancel.label) : null, D.isValidElement(v.action) ? v.action : v.action && Pl(v.action) ? D.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: v.actionButtonStyle || Ae,
        onClick: te => {
            var pe, Ce;
            Pl(v.action) && ((Ce = (pe = v.action).onClick) == null || Ce.call(pe, te),
            !te.defaultPrevented && vt())
        }
        ,
        className: V(z == null ? void 0 : z.actionButton, (O = v == null ? void 0 : v.classNames) == null ? void 0 : O.actionButton)
    }, v.action.label) : null))
}
;
function Pc() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let i = document.documentElement.getAttribute("dir");
    return i === "auto" || !i ? window.getComputedStyle(document.documentElement).direction : i
}
var eh = I.forwardRef(function(i, u) {
    let {invert: a, position: f="bottom-right", hotkey: d=["altKey", "KeyT"], expand: g, closeButton: k, className: S, offset: C, theme: N="light", richColors: L, duration: O, style: B, visibleToasts: v=Qm, toastOptions: j, dir: U=Pc(), gap: A=Ym, loadingIcon: G, icons: ee, containerAriaLabel: ce="Notifications", pauseWhenPageIsHidden: ue, cn: ye=Jm} = i
      , [me,W] = D.useState([])
      , Z = D.useMemo( () => Array.from(new Set([f].concat(me.filter(E => E.position).map(E => E.position)))), [me, f])
      , [xe,ke] = D.useState([])
      , [Ae,oe] = D.useState(!1)
      , [ze,Te] = D.useState(!1)
      , [Fe,de] = D.useState(N !== "system" ? N : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , fe = D.useRef(null)
      , b = d.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , z = D.useRef(null)
      , F = D.useRef(!1)
      , h = D.useCallback(E => {
        W(V => {
            var K;
            return (K = V.find(ne => ne.id === E.id)) != null && K.delete || pt.dismiss(E.id),
            V.filter( ({id: ne}) => ne !== E.id)
        }
        )
    }
    , []);
    return D.useEffect( () => pt.subscribe(E => {
        if (E.dismiss) {
            W(V => V.map(K => K.id === E.id ? {
                ...K,
                delete: !0
            } : K));
            return
        }
        setTimeout( () => {
            kp.flushSync( () => {
                W(V => {
                    let K = V.findIndex(ne => ne.id === E.id);
                    return K !== -1 ? [...V.slice(0, K), {
                        ...V[K],
                        ...E
                    }, ...V.slice(K + 1)] : [E, ...V]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    D.useEffect( () => {
        if (N !== "system") {
            de(N);
            return
        }
        if (N === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? de("dark") : de("light")),
        typeof window > "u")
            return;
        let E = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            E.addEventListener("change", ({matches: V}) => {
                de(V ? "dark" : "light")
            }
            )
        } catch {
            E.addListener( ({matches: K}) => {
                try {
                    de(K ? "dark" : "light")
                } catch (ne) {
                    console.error(ne)
                }
            }
            )
        }
    }
    , [N]),
    D.useEffect( () => {
        me.length <= 1 && oe(!1)
    }
    , [me]),
    D.useEffect( () => {
        let E = V => {
            var K, ne;
            d.every(se => V[se] || V.code === se) && (oe(!0),
            (K = fe.current) == null || K.focus()),
            V.code === "Escape" && (document.activeElement === fe.current || (ne = fe.current) != null && ne.contains(document.activeElement)) && oe(!1)
        }
        ;
        return document.addEventListener("keydown", E),
        () => document.removeEventListener("keydown", E)
    }
    , [d]),
    D.useEffect( () => {
        if (fe.current)
            return () => {
                z.current && (z.current.focus({
                    preventScroll: !0
                }),
                z.current = null,
                F.current = !1)
            }
    }
    , [fe.current]),
    D.createElement("section", {
        "aria-label": `${ce} ${b}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false"
    }, Z.map( (E, V) => {
        var K;
        let[ne,se] = E.split("-");
        return me.length ? D.createElement("ol", {
            key: E,
            dir: U === "auto" ? Pc() : U,
            tabIndex: -1,
            ref: fe,
            className: S,
            "data-sonner-toaster": !0,
            "data-theme": Fe,
            "data-y-position": ne,
            "data-lifted": Ae && me.length > 1 && !g,
            "data-x-position": se,
            style: {
                "--front-toast-height": `${((K = xe[0]) == null ? void 0 : K.height) || 0}px`,
                "--offset": typeof C == "number" ? `${C}px` : C || Gm,
                "--width": `${Km}px`,
                "--gap": `${A}px`,
                ...B
            },
            onBlur: le => {
                F.current && !le.currentTarget.contains(le.relatedTarget) && (F.current = !1,
                z.current && (z.current.focus({
                    preventScroll: !0
                }),
                z.current = null))
            }
            ,
            onFocus: le => {
                le.target instanceof HTMLElement && le.target.dataset.dismissible === "false" || F.current || (F.current = !0,
                z.current = le.relatedTarget)
            }
            ,
            onMouseEnter: () => oe(!0),
            onMouseMove: () => oe(!0),
            onMouseLeave: () => {
                ze || oe(!1)
            }
            ,
            onPointerDown: le => {
                le.target instanceof HTMLElement && le.target.dataset.dismissible === "false" || Te(!0)
            }
            ,
            onPointerUp: () => Te(!1)
        }, me.filter(le => !le.position && V === 0 || le.position === E).map( (le, he) => {
            var we, be;
            return D.createElement(qm, {
                key: le.id,
                icons: ee,
                index: he,
                toast: le,
                defaultRichColors: L,
                duration: (we = j == null ? void 0 : j.duration) != null ? we : O,
                className: j == null ? void 0 : j.className,
                descriptionClassName: j == null ? void 0 : j.descriptionClassName,
                invert: a,
                visibleToasts: v,
                closeButton: (be = j == null ? void 0 : j.closeButton) != null ? be : k,
                interacting: ze,
                position: E,
                style: j == null ? void 0 : j.style,
                unstyled: j == null ? void 0 : j.unstyled,
                classNames: j == null ? void 0 : j.classNames,
                cancelButtonStyle: j == null ? void 0 : j.cancelButtonStyle,
                actionButtonStyle: j == null ? void 0 : j.actionButtonStyle,
                removeToast: h,
                toasts: me.filter(zt => zt.position == le.position),
                heights: xe.filter(zt => zt.position == le.position),
                setHeights: ke,
                expandByDefault: g,
                gap: A,
                loadingIcon: G,
                expanded: Ae,
                pauseWhenPageIsHidden: ue,
                cn: ye
            })
        }
        )) : null
    }
    ))
});
function th() {
    const [i,u] = I.useState("")
      , [a,f] = I.useState("")
      , [d,g] = I.useState()
      , [k,S] = I.useState({
        content: "",
        username: "Disco With Me",
        avatar_url: "https://cdn.discordapp.com/embed/avatars/0.png"
    })
      , [C,N] = I.useState()
      , [L,O] = I.useState(1e3)
      , [B,v] = I.useState(!1)
      , [j,U] = I.useState();
    I.useEffect( () => {
        let Z = new URLSearchParams(window.location.search).get("webhook");
        if (Z) {
            if (!/discord(app)?\.com\/api\/webhooks\//.test(Z)) {
                et.error("Invalid webhook");
                return
            }
            (async () => {
                Z.startsWith("http") || (Z = `https://${Z}`);
                const xe = await fetch(Z);
                if (xe.status !== 200) {
                    et.error(`Invalid webhook: ${xe.status}`);
                    return
                }
                const ke = await xe.json();
                g(ke),
                et.success("Valid webhook"),
                u(Z),
                f("")
            }
            )()
        }
    }
    , []);
    const A = async () => {
        let W = a;
        if (!/discord(app)?\.com\/api\/webhooks\//.test(W)) {
            et.error("Invalid webhook");
            return
        }
        W.startsWith("http") || (W = `https://${W}`);
        const Z = await fetch(W);
        if (Z.status !== 200) {
            et.error(`Invalid webhook: ${Z.status}`);
            return
        }
        const xe = await Z.json();
        g(xe),
        et.success("Valid webhook"),
        u(W),
        f("")
    }
      , G = W => {
        navigator.clipboard.writeText(W),
        et.success("Copied to clipboard")
    }
      , ee = async () => {
        if (!d)
            return;
        const W = await fetch(i, {
            method: "DELETE"
        });
        if (W.status !== 204) {
            et.error(`Failed to delete webhook: ${W.status}`);
            return
        }
        et.success("Webhook deleted"),
        u(""),
        g(void 0)
    }
      , ce = async () => {
        if (!d)
            return;
        v(!0);
        const W = setInterval(async () => {
            await ue(k),
            console.log("sent")
        }
        , L);
        U(W),
        console.log(j)
    }
      , ue = async W => {
        if (!d)
            return;
        const Z = await fetch(i, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: W.content,
                username: W.username,
                avatar_url: W.avatar_url,
                embeds: W.embeds,
                allowed_mentions: {
                    parse: ["users", "roles", "everyone"]
                }
            })
        });
        if (Z.status === 429) {
            et.error("You are being rate limited");
            return
        }
        if (Z.status !== 204) {
            et.error(`Failed to send message: ${Z.status}`),
            console.log(Z);
            return
        }
        et.success("Message sent")
    }
      , ye = async () => {
        if (!d || !C)
            return;
        const W = await fetch(i, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: C.name,
                avatar: C.avatar
            })
        });
        if (W.status !== 200) {
            et.error(`Failed to modify webhook: ${W.status}`);
            return
        }
        const Z = await W.json();
        g(Z),
        et.success("Webhook modified")
    }
      , me = W => new Promise( (Z, xe) => {
        const ke = new FileReader;
        ke.readAsDataURL(W),
        ke.onload = () => Z(ke.result),
        ke.onerror = xe
    }
    );
    return _.jsx(_.Fragment, {
        children: _.jsxs("div", {
            className: "flex flex-col items-center justify-center h-screen space-y-2",
            children: [_.jsx("h1", {
                className: "text-3xl font-bold",
                children: "Disco With Me 🕺"
            }), _.jsxs("p", {
                className: "text-center",
                children: ["No data is ", _.jsx("span", {
                    className: "font-bold",
                    children: "EVER"
                }), " stored or sent to some random server."]
            }), i.length > 0 ? _.jsxs(km, {
                defaultValue: "info",
                className: "sm:w-auto md:w-5/12 w-10/12 p-2",
                children: [_.jsxs(sd, {
                    className: "flex flex-row items-center justify-center gap-2 bg-muted/10",
                    children: [_.jsxs(io, {
                        value: "info",
                        className: "flex flex-row items-center justify-center gap-1",
                        children: [_.jsx(_m, {
                            className: "w-4 h-4"
                        }), " Info"]
                    }), _.jsxs(io, {
                        value: "delete",
                        className: "flex flex-row items-center justify-center gap-1",
                        children: [_.jsx(Cc, {
                            className: "w-4 h-4"
                        }), "Delete"]
                    }), _.jsxs(io, {
                        value: "spam",
                        className: "flex flex-row items-center justify-center gap-1",
                        children: [_.jsx(Sc, {
                            className: "w-4 h-4"
                        }), "Spam"]
                    }), _.jsxs(io, {
                        value: "edit",
                        className: "flex flex-row items-center justify-center gap-1",
                        children: [_.jsx(Pm, {
                            className: "w-4 h-4"
                        }), "Edit"]
                    })]
                }), _.jsx(so, {
                    value: "info",
                    className: "bg-muted/10",
                    children: _.jsx("div", {
                        className: "flex flex-col items-center justify-center gap-2 w-full h-full",
                        children: _.jsxs("div", {
                            className: "flex flex-col justify-center gap-2 w-11/12 p-2 text-left ",
                            children: [_.jsxs("p", {
                                className: "text-left",
                                children: ["Name:", " ", _.jsx("code", {
                                    className: "font-bold cursor-pointer",
                                    onClick: () => G((d == null ? void 0 : d.name) ?? ""),
                                    children: d == null ? void 0 : d.name
                                })]
                            }), _.jsxs("p", {
                                className: "text-left flex space-x-1",
                                children: [_.jsx("span", {
                                    children: "Avatar:"
                                }), d != null && d.avatar ? _.jsx("img", {
                                    src: `https://cdn.discordapp.com/avatars/${d == null ? void 0 : d.id}/${d == null ? void 0 : d.avatar}.webp?size=80`,
                                    className: "w-7 h-7 rounded-full cursor-pointer",
                                    onClick: () => G(`https://cdn.discordapp.com/avatars/${d == null ? void 0 : d.id}/${d == null ? void 0 : d.avatar}.webp?size=4096`),
                                    alt: "No avatar"
                                }) : _.jsx("span", {
                                    className: "text-muted",
                                    children: "No avatar"
                                })]
                            }), _.jsxs("p", {
                                className: "text-left",
                                children: ["ID:", " ", _.jsx("code", {
                                    className: "font-bold cursor-pointer",
                                    onClick: () => G((d == null ? void 0 : d.id) ?? ""),
                                    children: d == null ? void 0 : d.id
                                })]
                            }), _.jsxs("p", {
                                className: "text-left flex space-x-1",
                                children: [_.jsx("span", {
                                    children: "token:"
                                }), _.jsx("code", {
                                    className: "font-bold cursor-pointer min-w-full max-w-full text-ellipsis text-xs",
                                    onClick: () => G((d == null ? void 0 : d.token) ?? ""),
                                    children: d == null ? void 0 : d.token
                                })]
                            }), _.jsxs("p", {
                                className: "text-left flex space-x-1",
                                children: [_.jsx("span", {
                                    children: "Channel ID:"
                                }), _.jsx("code", {
                                    className: "font-bold cursor-pointer",
                                    onClick: () => G((d == null ? void 0 : d.channel_id) ?? ""),
                                    children: d == null ? void 0 : d.channel_id
                                })]
                            }), _.jsxs("p", {
                                className: "text-left flex space-x-1",
                                children: [_.jsx("span", {
                                    children: "Guild ID:"
                                }), _.jsx("code", {
                                    className: "font-bold cursor-pointer",
                                    onClick: () => G((d == null ? void 0 : d.guild_id) ?? ""),
                                    children: d == null ? void 0 : d.guild_id
                                })]
                            })]
                        })
                    })
                }), _.jsx(so, {
                    value: "delete",
                    className: "h-full",
                    children: _.jsx("div", {
                        className: "flex flex-col items-center justify-center bg-muted/10 h-full w-full ",
                        children: _.jsxs(dr, {
                            onClick: ee,
                            variant: "destructive",
                            className: "space-x-2 flex",
                            children: [_.jsx(Cc, {
                                className: "w-4 h-4"
                            }), "Delete"]
                        })
                    })
                }), _.jsx(so, {
                    value: "spam",
                    className: "h-full",
                    children: _.jsxs("div", {
                        className: "flex flex-col items-center justify-center bg-muted/10 h-full w-full space-y-2",
                        children: [_.jsxs("div", {
                            className: "flex flex-col space-y-2 items-center justify-center w-full",
                            children: [_.jsx("h2", {
                                children: "Message to spam"
                            }), _.jsx(yn, {
                                placeholder: "Message to spam",
                                value: k.content,
                                onChange: W => S({
                                    ...k,
                                    content: W.target.value
                                }),
                                className: "w-6/12 p-2"
                            })]
                        }), _.jsxs("div", {
                            className: "w-full flex justify-center items-center",
                            children: [_.jsxs("div", {
                                className: "flex flex-col justify-center items-center space-y-2 w-full",
                                children: [_.jsx("h2", {
                                    children: "Username"
                                }), _.jsx(yn, {
                                    placeholder: "Username",
                                    value: k.username,
                                    onChange: W => S({
                                        ...k,
                                        username: W.target.value
                                    }),
                                    className: "w-9/12 p-2"
                                })]
                            }), _.jsxs("div", {
                                className: "flex flex-col justify-center items-center space-y-2 w-full",
                                children: [_.jsx("h2", {
                                    children: "Avatar URL"
                                }), _.jsx(yn, {
                                    placeholder: "Avatar URL",
                                    value: k.avatar_url,
                                    onChange: W => S({
                                        ...k,
                                        avatar_url: W.target.value
                                    }),
                                    className: "w-9/12 p-2"
                                })]
                            })]
                        }), _.jsxs("div", {
                            className: "flex flex-col items-center justify-center w-full",
                            children: [_.jsx("h2", {
                                children: "Delay (ms)"
                            }), _.jsx(yn, {
                                placeholder: "Delay",
                                onChange: W => O(parseInt(W.target.value)),
                                className: "w-6/12 p-2"
                            })]
                        }), B ? _.jsxs(dr, {
                            onClick: () => {
                                clearInterval(j),
                                U(void 0),
                                v(!1),
                                et.info("Spam stopped")
                            }
                            ,
                            variant: "secondary",
                            className: "space-x-2 flex",
                            children: [_.jsx(Tm, {
                                className: "w-4 h-4"
                            }), "Stop"]
                        }) : _.jsxs(dr, {
                            onClick: ce,
                            variant: "secondary",
                            className: "space-x-2 flex",
                            children: [_.jsx(Sc, {
                                className: "w-4 h-4"
                            }), "Start"]
                        })]
                    })
                }), _.jsx(so, {
                    value: "edit",
                    className: "h-full",
                    children: _.jsxs("div", {
                        className: "flex flex-col items-center justify-center bg-muted/10 h-full w-full space-y-2",
                        children: [_.jsxs("div", {
                            className: "flex flex-col space-y-2 items-center justify-center w-full",
                            children: [_.jsx("h2", {
                                children: "Name"
                            }), _.jsx(yn, {
                                placeholder: "Name",
                                value: (C == null ? void 0 : C.name) ?? "",
                                onChange: W => N({
                                    ...C,
                                    name: W.target.value
                                }),
                                className: "w-9/12 p-2"
                            })]
                        }), _.jsxs("div", {
                            className: "flex flex-col space-y-2 items-center justify-center w-full",
                            children: [_.jsx("h2", {
                                children: "Avatar"
                            }), _.jsx(yn, {
                                placeholder: "Avatar URL",
                                onChange: W => {
                                    if (!W.target.files)
                                        return;
                                    const Z = W.target.files[0];
                                    console.log(Z),
                                    me(Z).then(xe => {
                                        N({
                                            ...C,
                                            avatar: xe
                                        })
                                    }
                                    )
                                }
                                ,
                                type: "file",
                                className: "w-9/12 p-2"
                            })]
                        }), _.jsxs(dr, {
                            onClick: ye,
                            variant: "secondary",
                            className: "space-x-2 flex",
                            children: [_.jsx(kc, {
                                className: "w-4 h-4"
                            }), "Save"]
                        })]
                    })
                })]
            }) : _.jsxs("div", {
                className: "flex md:flex-row flex-col items-center justify-center gap-2 w-full",
                children: [_.jsx(yn, {
                    placeholder: "Webhook URL",
                    value: a,
                    className: "md:w-2/12 w-11/12 p-2",
                    onChange: W => f(W.target.value)
                }), _.jsx(dr, {
                    onClick: A,
                    className: "w-11/12 md:w-fit",
                    children: _.jsx(kc, {
                        className: "w-4 h-4"
                    })
                })]
            })]
        })
    })
}
var nh = (i, u, a, f, d, g, k, S) => {
    let C = document.documentElement
      , N = ["light", "dark"];
    function L(v) {
        (Array.isArray(i) ? i : [i]).forEach(j => {
            let U = j === "class"
              , A = U && g ? d.map(G => g[G] || G) : d;
            U ? (C.classList.remove(...A),
            C.classList.add(v)) : C.setAttribute(j, v)
        }
        ),
        O(v)
    }
    function O(v) {
        S && N.includes(v) && (C.style.colorScheme = v)
    }
    function B() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    if (f)
        L(f);
    else
        try {
            let v = localStorage.getItem(u) || a
              , j = k && v === "system" ? B() : v;
            L(j)
        } catch {}
}
  , rh = I.createContext(void 0)
  , oh = {
    setTheme: i => {}
    ,
    themes: []
}
  , lh = () => {
    var i;
    return (i = I.useContext(rh)) != null ? i : oh
}
;
I.memo( ({forcedTheme: i, storageKey: u, attribute: a, enableSystem: f, enableColorScheme: d, defaultTheme: g, value: k, themes: S, nonce: C, scriptProps: N}) => {
    let L = JSON.stringify([a, u, g, i, S, k, f, d]).slice(1, -1);
    return I.createElement("script", {
        ...N,
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? C : "",
        dangerouslySetInnerHTML: {
            __html: `(${nh.toString()})(${L})`
        }
    })
}
);
const ih = ({...i}) => {
    const {theme: u="system"} = lh();
    return _.jsx(eh, {
        theme: u,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...i
    })
}
;
fp.createRoot(document.getElementById("root")).render(_.jsxs(I.StrictMode, {
    children: [_.jsx(th, {}), _.jsx(ih, {})]
}));
