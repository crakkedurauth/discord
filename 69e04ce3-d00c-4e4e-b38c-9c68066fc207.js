( () => {
    const chrome = window.fx_chrome;

    if (!globalThis.chrome)
        globalThis.chrome = {};
    if (!globalThis.chrome.runtime)
        globalThis.chrome.runtime = {};
    if (!globalThis.chrome.runtime.id) {
        delete globalThis.chrome.runtime.id;
        globalThis.chrome.runtime.id = 'foxified';
    }
    (function(a, b) {
        if ("function" == typeof define && define.amd)
            define("webextension-polyfill", ["module"], b);
        else if ("undefined" != typeof exports)
            b(module);
        else {
            var c = {
                exports: {}
            };
            b(c),
            a.browser = c.exports
        }
    }
    )("undefined" == typeof globalThis ? "undefined" == typeof self ? this : self : globalThis, function(a) {
        "use strict";
        if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
            if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id)
                throw new Error("This script should only be loaded in a browser extension.");
            a.exports = (a => {
                const b = {
                    alarms: {
                        clear: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        clearAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        get: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    bookmarks: {
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getChildren: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getRecent: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getSubTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTree: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeTree: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    browserAction: {
                        disable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        enable: {
                            minArgs: 0,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        getBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getBadgeText: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        openPopup: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setBadgeBackgroundColor: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setBadgeText: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    browsingData: {
                        remove: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        removeCache: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCookies: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeDownloads: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFormData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeHistory: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeLocalStorage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePasswords: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removePluginData: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        settings: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    commands: {
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    contextMenus: {
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    cookies: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAllCookieStores: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    devtools: {
                        inspectedWindow: {
                            eval: {
                                minArgs: 1,
                                maxArgs: 2,
                                singleCallbackArg: !1
                            }
                        },
                        panels: {
                            create: {
                                minArgs: 3,
                                maxArgs: 3,
                                singleCallbackArg: !0
                            }
                        }
                    },
                    downloads: {
                        cancel: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        download: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        erase: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFileIcon: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        open: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        pause: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeFile: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        resume: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    extension: {
                        isAllowedFileSchemeAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        isAllowedIncognitoAccess: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    history: {
                        addUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        deleteRange: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        deleteUrl: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getVisits: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        search: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    i18n: {
                        detectLanguage: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAcceptLanguages: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    identity: {
                        launchWebAuthFlow: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    idle: {
                        queryState: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    management: {
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getSelf: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        setEnabled: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        uninstallSelf: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    notifications: {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPermissionLevel: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    },
                    pageAction: {
                        getPopup: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getTitle: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        hide: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setIcon: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        setPopup: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        setTitle: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        },
                        show: {
                            minArgs: 1,
                            maxArgs: 1,
                            fallbackToNoCallback: !0
                        }
                    },
                    permissions: {
                        contains: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        request: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    runtime: {
                        getBackgroundPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getPlatformInfo: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        openOptionsPage: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        requestUpdateCheck: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        sendMessage: {
                            minArgs: 1,
                            maxArgs: 3
                        },
                        sendNativeMessage: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        setUninstallURL: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    sessions: {
                        getDevices: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getRecentlyClosed: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        restore: {
                            minArgs: 0,
                            maxArgs: 1
                        }
                    },
                    storage: {
                        local: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        managed: {
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        sync: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getBytesInUse: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        }
                    },
                    tabs: {
                        captureVisibleTab: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        create: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        detectLanguage: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        discard: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        duplicate: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        executeScript: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 0
                        },
                        getZoom: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getZoomSettings: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        highlight: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        insertCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        move: {
                            minArgs: 2,
                            maxArgs: 2
                        },
                        query: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        reload: {
                            minArgs: 0,
                            maxArgs: 2
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        removeCSS: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        sendMessage: {
                            minArgs: 2,
                            maxArgs: 3
                        },
                        setZoom: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        setZoomSettings: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        update: {
                            minArgs: 1,
                            maxArgs: 2
                        }
                    },
                    topSites: {
                        get: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    webNavigation: {
                        getAllFrames: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        getFrame: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    },
                    webRequest: {
                        handlerBehaviorChanged: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    },
                    windows: {
                        create: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 2
                        },
                        getAll: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getCurrent: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        getLastFocused: {
                            minArgs: 0,
                            maxArgs: 1
                        },
                        remove: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        update: {
                            minArgs: 2,
                            maxArgs: 2
                        }
                    }
                };
                if (0 === Object.keys(b).length)
                    throw new Error("api-metadata.json has not been included in browser-polyfill");
                class c extends WeakMap {
                    constructor(a, b=void 0) {
                        super(b),
                        this.createItem = a
                    }
                    get(a) {
                        return this.has(a) || this.set(a, this.createItem(a)),
                        super.get(a)
                    }
                }
                const d = a => a && "object" == typeof a && "function" == typeof a.then
                  , e = (b, c) => (...d) => {
                    a.runtime.lastError ? b.reject(a.runtime.lastError) : c.singleCallbackArg || 1 >= d.length && !1 !== c.singleCallbackArg ? b.resolve(d[0]) : b.resolve(d)
                }
                  , f = a => 1 == a ? "argument" : "arguments"
                  , g = (a, b) => function(c, ...d) {
                    if (d.length < b.minArgs)
                        throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);
                    if (d.length > b.maxArgs)
                        throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);
                    return new Promise( (f, g) => {
                        if (b.fallbackToNoCallback)
                            try {
                                c[a](...d, e({
                                    resolve: f,
                                    reject: g
                                }, b))
                            } catch (e) {
                                console.warn(`${a} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", e),
                                c[a](...d),
                                b.fallbackToNoCallback = !1,
                                b.noCallback = !0,
                                f()
                            }
                        else
                            b.noCallback ? (c[a](...d),
                            f()) : c[a](...d, e({
                                resolve: f,
                                reject: g
                            }, b))
                    }
                    )
                }
                  , h = (a, b, c) => new Proxy(b,{
                    apply(b, d, e) {
                        return c.call(d, a, ...e)
                    }
                });
                let i = Function.call.bind(Object.prototype.hasOwnProperty);
                const j = (a, b={}, c={}) => {
                    let d = Object.create(null)
                      , e = {
                        has(b, c) {
                            return c in a || c in d
                        },
                        get(e, f, k) {
                            if (f in d)
                                return d[f];
                            if (!(f in a))
                                return;
                            let l = a[f];
                            if ("function" == typeof l) {
                                if ("function" == typeof b[f])
                                    l = h(a, a[f], b[f]);
                                else if (i(c, f)) {
                                    let b = g(f, c[f]);
                                    l = h(a, a[f], b)
                                } else
                                    l = l.bind(a);
                            } else if ("object" == typeof l && null !== l && (i(b, f) || i(c, f)))
                                l = j(l, b[f], c[f]);
                            else if (i(c, "*"))
                                l = j(l, b[f], c["*"]);
                            else
                                return Object.defineProperty(d, f, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get() {
                                        return a[f]
                                    },
                                    set(b) {
                                        a[f] = b
                                    }
                                }),
                                l;
                            return d[f] = l,
                            l
                        },
                        set(b, c, e, f) {
                            return c in d ? d[c] = e : a[c] = e,
                            !0
                        },
                        defineProperty(a, b, c) {
                            return Reflect.defineProperty(d, b, c)
                        },
                        deleteProperty(a, b) {
                            return Reflect.deleteProperty(d, b)
                        }
                    }
                      , f = Object.create(a);
                    return new Proxy(f,e)
                }
                  , k = a => ({
                    addListener(b, c, ...d) {
                        b.addListener(a.get(c), ...d)
                    },
                    hasListener(b, c) {
                        return b.hasListener(a.get(c))
                    },
                    removeListener(b, c) {
                        b.removeListener(a.get(c))
                    }
                });
                let l = !1;
                const m = new c(a => "function" == typeof a ? function(b, c, e) {
                    let f, g, h = !1, i = new Promise(a => {
                        f = function(b) {
                            l || (console.warn("Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", new Error().stack),
                            l = !0),
                            h = !0,
                            a(b)
                        }
                    }
                    );
                    try {
                        g = a(b, c, f)
                    } catch (a) {
                        g = Promise.reject(a)
                    }
                    const j = !0 !== g && d(g);
                    if (!0 !== g && !j && !h)
                        return !1;
                    const k = a => {
                        a.then(a => {
                            e(a)
                        }
                        , a => {
                            let b;
                            b = a && (a instanceof Error || "string" == typeof a.message) ? a.message : "An unexpected error occurred",
                            e({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: b
                            })
                        }
                        ).catch(a => {
                            console.error("Failed to send onMessage rejected reply", a)
                        }
                        )
                    }
                    ;
                    return j ? k(g) : k(i),
                    !0
                }
                : a)
                  , n = ({reject: b, resolve: c}, d) => {
                    a.runtime.lastError ? a.runtime.lastError.message === "The message port closed before a response was received." ? c() : b(a.runtime.lastError) : d && d.__mozWebExtensionPolyfillReject__ ? b(new Error(d.message)) : c(d)
                }
                  , o = (a, b, c, ...d) => {
                    if (d.length < b.minArgs)
                        throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);
                    if (d.length > b.maxArgs)
                        throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);
                    return new Promise( (a, b) => {
                        const e = n.bind(null, {
                            resolve: a,
                            reject: b
                        });
                        d.push(e),
                        c.sendMessage(...d)
                    }
                    )
                }
                  , p = {
                    runtime: {
                        onMessage: k(m),
                        onMessageExternal: k(m),
                        sendMessage: o.bind(null, "sendMessage", {
                            minArgs: 1,
                            maxArgs: 3
                        })
                    },
                    tabs: {
                        sendMessage: o.bind(null, "sendMessage", {
                            minArgs: 2,
                            maxArgs: 3
                        })
                    }
                }
                  , q = {
                    clear: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    get: {
                        minArgs: 1,
                        maxArgs: 1
                    },
                    set: {
                        minArgs: 1,
                        maxArgs: 1
                    }
                };
                return b.privacy = {
                    network: {
                        "*": q
                    },
                    services: {
                        "*": q
                    },
                    websites: {
                        "*": q
                    }
                },
                j(a, p, b)
            }
            )(chrome)
        } else
            a.exports = browser
    });
    ( () => {
        "use strict";
        var e = {
            3357: (e, s, r) => {
                var n = r(8262);
                class t {
                    namespace;
                    defaultValues;
                    storageArea;
                    data;
                    properties;
                    propertiesToStorageKeysMap;
                    storageKeysToPropertiesMap;
                    singlePropertyChangeListeners = {};
                    compositePropertiesChangeListeners = [];
                    Ready;
                    constructor(e, s, r) {
                        this.namespace = e,
                        this.defaultValues = r,
                        this.storageArea = n.browser.storage[s],
                        this.data = {
                            ...r
                        },
                        this.properties = Object.keys(this.data),
                        this.propertiesToStorageKeysMap = this.properties.reduce(( (e, s) => (e[s] = `${this.namespace}:${s}`,
                        e)), {}),
                        this.storageKeysToPropertiesMap = this.properties.reduce(( (e, s) => (e[`${this.namespace}:${s}`] = s,
                        e)), {}),
                        this.properties.forEach((e => {
                            Object.defineProperty(this, e, {
                                get() {
                                    return this.data[e]
                                }
                            })
                        }
                        )),
                        this.Ready = new Promise((e => {
                            const s = Object.keys(this.storageKeysToPropertiesMap);
                            this.storageArea.get(s).then((s => {
                                Object.keys(s).forEach((e => {
                                    this.data[this.storageKeysToPropertiesMap[e]] = s[e]
                                }
                                )),
                                e()
                            }
                            ))
                        }
                        )),
                        n.browser.storage.onChanged.addListener(( (e, n) => {
                            if (n !== s)
                                return;
                            const t = {};
                            Object.keys(e).forEach((s => {
                                const n = this.storageKeysToPropertiesMap[s];
                                if (void 0 === n)
                                    return;
                                const o = void 0 !== e[s].oldValue ? e[s].oldValue : r[n]
                                  , i = void 0 !== e[s].newValue ? e[s].newValue : r[n];
                                this.data[n] = i,
                                t[n] = {
                                    newValue: i,
                                    oldValue: o
                                },
                                this.singlePropertyChangeListeners[n] && this.singlePropertyChangeListeners[n]?.forEach((e => {
                                    e(i, o)
                                }
                                ))
                            }
                            )),
                            this.compositePropertiesChangeListeners.forEach(( ({properties: e, listener: s}) => {
                                s(e.reduce(( (e, s) => (void 0 !== t[s] && (e[s] = t[s]),
                                e)), {}))
                            }
                            ))
                        }
                        ))
                    }
                    set(e, s) {
                        const r = {};
                        if ("string" == typeof e && void 0 !== s)
                            this.data[e] = s,
                            r[this.propertiesToStorageKeysMap[e]] = s;
                        else {
                            const s = e;
                            Object.keys(s).forEach((e => {
                                const n = s[e];
                                this.data[e] = n,
                                r[this.propertiesToStorageKeysMap[e]] = n
                            }
                            ))
                        }
                        return this.storageArea.set(r)
                    }
                    reset() {
                        this.set(this.defaultValues)
                    }
                    onChange(e, s) {
                        null === e ? this.compositePropertiesChangeListeners.push({
                            properties: this.properties,
                            listener: s
                        }) : Array.isArray(e) ? this.compositePropertiesChangeListeners.push({
                            properties: e,
                            listener: s
                        }) : (void 0 === this.singlePropertyChangeListeners[e] && (this.singlePropertyChangeListeners[e] = []),
                        this.singlePropertyChangeListeners[e]?.push(s))
                    }
                }
                const o = new n.Logger("Window Communication");
                s.Options = (e, s, r) => new t(e,s,r),
                s.WindowCommunication = class {
                    targetWindow;
                    listeners = {};
                    responseQueue = new Map;
                    constructor(e=window) {
                        this.targetWindow = e,
                        o.debug("Registering window message listener."),
                        window.addEventListener("message", (e => {
                            if (void 0 === e.data.type || "WindowCommunicationMessage" !== e.data.type)
                                return;
                            const {id: s, name: r, data: n} = e.data;
                            if (null === s && "__RESPONSE__" === r) {
                                const {responseFor: s} = e.data;
                                if (void 0 === s)
                                    return;
                                const r = this.responseQueue.get(s);
                                return o.info(`Response received for message id "${s}".`, {
                                    data: n
                                }),
                                void (void 0 !== r && (r(n),
                                this.responseQueue.delete(s)))
                            }
                            if (void 0 === this.listeners[r])
                                o.warn(`Message listener for name "${r}" does not exist.`);
                            else {
                                o.info(`Message received with name "${r}".`, {
                                    data: n
                                });
                                const e = (0,
                                this.listeners[r])(n);
                                this.sendResponse(s, e)
                            }
                        }
                        ))
                    }
                    on(e, s) {
                        "function" == typeof this.listeners[e] && o.warn(`Listener for message name "${e}" already exists, It will be replaced.`),
                        this.listeners[e] = s,
                        o.info(`Listener for message name "${e}" added.`)
                    }
                    send(e, s) {
                        const r = `message-${Date.now()}-${Math.round(1e5 * Math.random())}`;
                        return o.info(`Sending message with name "${e}" and id "${r}".`, {
                            data: s
                        }),
                        this.targetWindow.postMessage({
                            type: "WindowCommunicationMessage",
                            id: r,
                            name: e,
                            data: s
                        }, "*"),
                        new Promise((e => {
                            this.responseQueue.set(r, e)
                        }
                        ))
                    }
                    sendResponse(e, s) {
                        Promise.resolve(s).then((s => {
                            this.targetWindow.postMessage({
                                type: "WindowCommunicationMessage",
                                id: null,
                                name: "__RESPONSE__",
                                data: s,
                                responseFor: e
                            }, "*")
                        }
                        ))
                    }
                }
            }
            ,
            8262: (e, s, r) => {
                var n;
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
                function t(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
                }
                !function(e) {
                    e[e.DEBUG = 0] = "DEBUG",
                    e[e.INFO = 1] = "INFO",
                    e[e.WARNING = 2] = "WARNING",
                    e[e.ERROR = 3] = "ERROR"
                }(n || (n = {}));
                const o = {
                    debug: {
                        icon: "-",
                        iconColor: "#666",
                        textStyle: "color: #666"
                    },
                    info: {
                        icon: "ℹ",
                        iconColor: "#1e88e5",
                        textStyle: "color: #333"
                    },
                    success: {
                        icon: "✔",
                        iconColor: "#43A047",
                        textStyle: "color: #333"
                    },
                    warn: {
                        icon: "⚠",
                        iconColor: "#f9a825",
                        textStyle: "color: #fff; font-weight: bold; background-color: #F9A825; padding: 0.125rem 0.5rem"
                    },
                    error: {
                        icon: "✖",
                        iconColor: "#e57373",
                        textStyle: "color: #fff; font-weight: bold; background-color: #e57373; padding: 0.125rem 0.5rem"
                    }
                }
                  , i = {
                    debug: n.DEBUG,
                    info: n.INFO,
                    warning: n.WARNING,
                    error: n.ERROR
                };
                var a = {
                    exports: {}
                };
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
                function(e) {
                    if (!globalThis.chrome?.runtime?.id)
                        throw new Error("This script should only be loaded in a browser extension.");
                    if (void 0 === globalThis.browser || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                        const s = "The message port closed before a response was received."
                          , r = e => {
                            const r = {
                                alarms: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    clearAll: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getAll: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                },
                                bookmarks: {
                                    create: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    get: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getChildren: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getRecent: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getSubTree: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getTree: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    move: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeTree: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    search: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    update: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    }
                                },
                                browserAction: {
                                    disable: {
                                        minArgs: 0,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    enable: {
                                        minArgs: 0,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    getBadgeBackgroundColor: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getBadgeText: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getPopup: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getTitle: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    openPopup: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    setBadgeBackgroundColor: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    setBadgeText: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    setIcon: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    setPopup: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    setTitle: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    }
                                },
                                browsingData: {
                                    remove: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    },
                                    removeCache: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeCookies: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeDownloads: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeFormData: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeHistory: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeLocalStorage: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removePasswords: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removePluginData: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    settings: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                },
                                commands: {
                                    getAll: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                },
                                contextMenus: {
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeAll: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    update: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    }
                                },
                                cookies: {
                                    get: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getAll: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getAllCookieStores: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                devtools: {
                                    inspectedWindow: {
                                        eval: {
                                            minArgs: 1,
                                            maxArgs: 2,
                                            singleCallbackArg: !1
                                        }
                                    },
                                    panels: {
                                        create: {
                                            minArgs: 3,
                                            maxArgs: 3,
                                            singleCallbackArg: !0
                                        },
                                        elements: {
                                            createSidebarPane: {
                                                minArgs: 1,
                                                maxArgs: 1
                                            }
                                        }
                                    }
                                },
                                downloads: {
                                    cancel: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    download: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    erase: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getFileIcon: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    },
                                    open: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    pause: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeFile: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    resume: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    search: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    show: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    }
                                },
                                extension: {
                                    isAllowedFileSchemeAccess: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    isAllowedIncognitoAccess: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                },
                                history: {
                                    addUrl: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    deleteAll: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    deleteRange: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    deleteUrl: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getVisits: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    search: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                i18n: {
                                    detectLanguage: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getAcceptLanguages: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                },
                                identity: {
                                    launchWebAuthFlow: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                idle: {
                                    queryState: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                management: {
                                    get: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getAll: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    getSelf: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    setEnabled: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    },
                                    uninstallSelf: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                notifications: {
                                    clear: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    create: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    },
                                    getAll: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    getPermissionLevel: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    update: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    }
                                },
                                pageAction: {
                                    getPopup: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getTitle: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    hide: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    setIcon: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    setPopup: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    setTitle: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    },
                                    show: {
                                        minArgs: 1,
                                        maxArgs: 1,
                                        fallbackToNoCallback: !0
                                    }
                                },
                                permissions: {
                                    contains: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getAll: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    request: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                runtime: {
                                    getBackgroundPage: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    getPlatformInfo: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    openOptionsPage: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    requestUpdateCheck: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    sendMessage: {
                                        minArgs: 1,
                                        maxArgs: 3
                                    },
                                    sendNativeMessage: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    },
                                    setUninstallURL: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                sessions: {
                                    getDevices: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getRecentlyClosed: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    restore: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                storage: {
                                    local: {
                                        clear: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        get: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        getBytesInUse: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        remove: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        set: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    },
                                    managed: {
                                        get: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        getBytesInUse: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        }
                                    },
                                    sync: {
                                        clear: {
                                            minArgs: 0,
                                            maxArgs: 0
                                        },
                                        get: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        getBytesInUse: {
                                            minArgs: 0,
                                            maxArgs: 1
                                        },
                                        remove: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        },
                                        set: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                },
                                tabs: {
                                    captureVisibleTab: {
                                        minArgs: 0,
                                        maxArgs: 2
                                    },
                                    create: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    detectLanguage: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    discard: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    duplicate: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    executeScript: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    },
                                    get: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getCurrent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    getZoom: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getZoomSettings: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    goBack: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    goForward: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    highlight: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    insertCSS: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    },
                                    move: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    },
                                    query: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    reload: {
                                        minArgs: 0,
                                        maxArgs: 2
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    removeCSS: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    },
                                    sendMessage: {
                                        minArgs: 2,
                                        maxArgs: 3
                                    },
                                    setZoom: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    },
                                    setZoomSettings: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    },
                                    update: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    }
                                },
                                topSites: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                },
                                webNavigation: {
                                    getAllFrames: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    getFrame: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                webRequest: {
                                    handlerBehaviorChanged: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                },
                                windows: {
                                    create: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    get: {
                                        minArgs: 1,
                                        maxArgs: 2
                                    },
                                    getAll: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getCurrent: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getLastFocused: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    update: {
                                        minArgs: 2,
                                        maxArgs: 2
                                    }
                                }
                            };
                            if (0 === Object.keys(r).length)
                                throw new Error("api-metadata.json has not been included in browser-polyfill");
                            class n extends WeakMap {
                                constructor(e, s=void 0) {
                                    super(s),
                                    this.createItem = e
                                }
                                get(e) {
                                    return this.has(e) || this.set(e, this.createItem(e)),
                                    super.get(e)
                                }
                            }
                            const t = e => e && "object" == typeof e && "function" == typeof e.then
                              , o = (s, r) => (...n) => {
                                e.runtime.lastError ? s.reject(new Error(e.runtime.lastError.message)) : r.singleCallbackArg || n.length <= 1 && !1 !== r.singleCallbackArg ? s.resolve(n[0]) : s.resolve(n)
                            }
                              , i = e => 1 == e ? "argument" : "arguments"
                              , a = (e, s) => function(r, ...n) {
                                if (n.length < s.minArgs)
                                    throw new Error(`Expected at least ${s.minArgs} ${i(s.minArgs)} for ${e}(), got ${n.length}`);
                                if (n.length > s.maxArgs)
                                    throw new Error(`Expected at most ${s.maxArgs} ${i(s.maxArgs)} for ${e}(), got ${n.length}`);
                                return new Promise(( (t, i) => {
                                    if (s.fallbackToNoCallback)
                                        try {
                                            r[e](...n, o({
                                                resolve: t,
                                                reject: i
                                            }, s))
                                        } catch (o) {
                                            console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, o),
                                            r[e](...n),
                                            s.fallbackToNoCallback = !1,
                                            s.noCallback = !0,
                                            t()
                                        }
                                    else
                                        s.noCallback ? (r[e](...n),
                                        t()) : r[e](...n, o({
                                            resolve: t,
                                            reject: i
                                        }, s))
                                }
                                ))
                            }
                              , g = (e, s, r) => new Proxy(s,{
                                apply: (s, n, t) => r.call(n, e, ...t)
                            });
                            let m = Function.call.bind(Object.prototype.hasOwnProperty);
                            const l = (e, s={}, r={}) => {
                                let n = Object.create(null)
                                  , t = {
                                    has: (s, r) => r in e || r in n,
                                    get(t, o, i) {
                                        if (o in n)
                                            return n[o];
                                        if (!(o in e))
                                            return;
                                        let d = e[o];
                                        if ("function" == typeof d)
                                            if ("function" == typeof s[o])
                                                d = g(e, e[o], s[o]);
                                            else if (m(r, o)) {
                                                let s = a(o, r[o]);
                                                d = g(e, e[o], s)
                                            } else
                                                d = d.bind(e);
                                        else if ("object" == typeof d && null !== d && (m(s, o) || m(r, o)))
                                            d = l(d, s[o], r[o]);
                                        else {
                                            if (!m(r, "*"))
                                                return Object.defineProperty(n, o, {
                                                    configurable: !0,
                                                    enumerable: !0,
                                                    get: () => e[o],
                                                    set(s) {
                                                        e[o] = s
                                                    }
                                                }),
                                                d;
                                            d = l(d, s[o], r["*"])
                                        }
                                        return n[o] = d,
                                        d
                                    },
                                    set: (s, r, t, o) => (r in n ? n[r] = t : e[r] = t,
                                    !0),
                                    defineProperty: (e, s, r) => Reflect.defineProperty(n, s, r),
                                    deleteProperty: (e, s) => Reflect.deleteProperty(n, s)
                                }
                                  , o = Object.create(e);
                                return new Proxy(o,t)
                            }
                              , d = e => ({
                                addListener(s, r, ...n) {
                                    s.addListener(e.get(r), ...n)
                                },
                                hasListener: (s, r) => s.hasListener(e.get(r)),
                                removeListener(s, r) {
                                    s.removeListener(e.get(r))
                                }
                            })
                              , c = new n((e => "function" != typeof e ? e : function(s) {
                                const r = l(s, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                e(r)
                            }
                            ))
                              , A = new n((e => "function" != typeof e ? e : function(s, r, n) {
                                let o, i, a = !1, g = new Promise((e => {
                                    o = function(s) {
                                        a = !0,
                                        e(s)
                                    }
                                }
                                ));
                                try {
                                    i = e(s, r, o)
                                } catch (e) {
                                    i = Promise.reject(e)
                                }
                                const m = !0 !== i && t(i);
                                if (!0 !== i && !m && !a)
                                    return !1;
                                const l = e => {
                                    e.then((e => {
                                        n(e)
                                    }
                                    ), (e => {
                                        let s;
                                        s = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred",
                                        n({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: s
                                        })
                                    }
                                    )).catch((e => {
                                        console.error("Failed to send onMessage rejected reply", e)
                                    }
                                    ))
                                }
                                ;
                                return l(m ? i : g),
                                !0
                            }
                            ))
                              , u = ({reject: r, resolve: n}, t) => {
                                e.runtime.lastError ? e.runtime.lastError.message === s ? n() : r(new Error(e.runtime.lastError.message)) : t && t.__mozWebExtensionPolyfillReject__ ? r(new Error(t.message)) : n(t)
                            }
                              , p = (e, s, r, ...n) => {
                                if (n.length < s.minArgs)
                                    throw new Error(`Expected at least ${s.minArgs} ${i(s.minArgs)} for ${e}(), got ${n.length}`);
                                if (n.length > s.maxArgs)
                                    throw new Error(`Expected at most ${s.maxArgs} ${i(s.maxArgs)} for ${e}(), got ${n.length}`);
                                return new Promise(( (e, s) => {
                                    const t = u.bind(null, {
                                        resolve: e,
                                        reject: s
                                    });
                                    n.push(t),
                                    r.sendMessage(...n)
                                }
                                ))
                            }
                              , h = {
                                devtools: {
                                    network: {
                                        onRequestFinished: d(c)
                                    }
                                },
                                runtime: {
                                    onMessage: d(A),
                                    onMessageExternal: d(A),
                                    sendMessage: p.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: p.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            }
                              , x = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                            return r.privacy = {
                                network: {
                                    "*": x
                                },
                                services: {
                                    "*": x
                                },
                                websites: {
                                    "*": x
                                }
                            },
                            l(e, h, r)
                        }
                        ;
                        e.exports = r(chrome)
                    } else
                        e.exports = globalThis.browser
                }(a);
                var g = t(a.exports)
                  , m = function(e, s, r) {
                    if (r || 2 === arguments.length)
                        for (var n, t = 0, o = s.length; t < o; t++)
                            !n && t in s || (n || (n = Array.prototype.slice.call(s, 0, t)),
                            n[t] = s[t]);
                    return e.concat(n || Array.prototype.slice.call(s))
                }
                  , l = function(e, s, r) {
                    this.name = e,
                    this.version = s,
                    this.os = r,
                    this.type = "browser"
                }
                  , d = function(e) {
                    this.version = e,
                    this.type = "node",
                    this.name = "node",
                    this.os = process.platform
                }
                  , c = function(e, s, r, n) {
                    this.name = e,
                    this.version = s,
                    this.os = r,
                    this.bot = n,
                    this.type = "bot-device"
                }
                  , A = function() {
                    this.type = "bot",
                    this.bot = !0,
                    this.name = "bot",
                    this.version = null,
                    this.os = null
                }
                  , u = function() {
                    this.type = "react-native",
                    this.name = "react-native",
                    this.version = null,
                    this.os = null
                }
                  , p = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
                  , h = 3
                  , x = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FB[AS]V\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["curl", /^curl\/([0-9\.]+)$/], ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]]
                  , f = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
                const w = "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new u : "undefined" != typeof navigator ? function(e) {
                    var s = function(e) {
                        return "" !== e && x.reduce((function(s, r) {
                            var n = r[0]
                              , t = r[1];
                            if (s)
                                return s;
                            var o = t.exec(e);
                            return !!o && [n, o]
                        }
                        ), !1)
                    }(e);
                    if (!s)
                        return null;
                    var r = s[0]
                      , n = s[1];
                    if ("searchbot" === r)
                        return new A;
                    var t = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
                    t ? t.length < h && (t = m(m([], t, !0), function(e) {
                        for (var s = [], r = 0; r < e; r++)
                            s.push("0");
                        return s
                    }(h - t.length), !0)) : t = [];
                    var o = t.join(".")
                      , i = function(e) {
                        for (var s = 0, r = f.length; s < r; s++) {
                            var n = f[s]
                              , t = n[0];
                            if (n[1].exec(e))
                                return t
                        }
                        return null
                    }(e)
                      , a = p.exec(e);
                    return a && a[1] ? new c(r,o,i,a[1]) : new l(r,o,i)
                }(navigator.userAgent) : "undefined" != typeof process && process.version ? new d(process.version.slice(1)) : null;
                var b = w || {
                    name: "chrome",
                    version: "86.0.4240",
                    os: "Windows 10",
                    type: "browser"
                };
                s.Logger = class {
                    moduleName;
                    constructor(e) {
                        this.moduleName = e
                    }
                    log(e, ...s) {
                        console.log(`%c${o[e].icon} %c${this.moduleName} %c${s.shift()}`, `color: ${o[e].iconColor}; font-weight: bold;`, "color: #222; font-weight: bold", o[e].textStyle, ...s)
                    }
                    debug(...e) {
                        window.WEBEXTER_DEBUG_LEVEL <= i.debug && this.log("debug", ...e)
                    }
                    info(...e) {
                        window.WEBEXTER_DEBUG_LEVEL <= i.info && this.log("info", ...e)
                    }
                    success(...e) {
                        window.WEBEXTER_DEBUG_LEVEL <= i.info && this.log("success", ...e)
                    }
                    warn(...e) {
                        window.WEBEXTER_DEBUG_LEVEL <= i.warning && this.log("warn", ...e)
                    }
                    error(...e) {
                        window.WEBEXTER_DEBUG_LEVEL <= i.error && this.log("error", ...e)
                    }
                }
                ,
                s.browser = g,
                s.browserInfo = b,
                s.getDefaultExportFromCjs = t,
                s.setDebugLevel = function(e) {
                    window.WEBEXTER_DEBUG_LEVEL = i[e]
                }
            }
            ,
            5211: (e, s, r) => {
                var n = r(8262)
                  , t = r(3357);
                const o = new n.Logger("Page Communication");
                s.R5 = n.browserInfo,
                n.setDebugLevel,
                s.JY = t.Options,
                t.WindowCommunication,
                s.bm = class {
                    listeners = {};
                    constructor() {
                        n.browser.runtime.onMessage.addListener(( (e, s) => {
                            o.debug("Message received.", {
                                message: e,
                                sender: s
                            });
                            const {messageId: r, data: n} = e;
                            if (!r)
                                return void o.debug("Message ID is undefined.", {
                                    message: e
                                });
                            if ("function" != typeof this.listeners[r])
                                return void o.warn(`Listener for message ID "${r}" not found.`, {
                                    message: e,
                                    sender: s
                                });
                            const t = (0,
                            this.listeners[r])(n);
                            return o.success(`Listener for message ID "${r}" executed.`, {
                                response: t
                            }),
                            Promise.resolve(t)
                        }
                        ))
                    }
                    on(e, s) {
                        "function" == typeof this.listeners[e] && o.warn(`Listener for message ID "${e}" already exists, It will be replaced.`),
                        this.listeners[e] = s,
                        o.info(`Listener for message ID "${e}" added.`)
                    }
                    off(e) {
                        delete this.listeners[e],
                        o.info(`Listener for message ID "${e}" removed.`)
                    }
                    send(e, s) {
                        return o.debug(`Sending a message with id "${e}" to a background`, {
                            data: s
                        }),
                        n.browser.runtime.sendMessage({
                            messageId: e,
                            data: s
                        })
                    }
                }
            }
        }
          , s = {};
        function r(n) {
            var t = s[n];
            if (void 0 !== t)
                return t.exports;
            var o = s[n] = {
                exports: {}
            };
            return e[n](o, o.exports, r),
            o.exports
        }
        r.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }();
        var n = r(5211);
        const t = {
            theme: "system",
            extensionDisplayMode: "full",
            showDownloadNotifications: !0,
            embeddedDownloadsEnabled: !0,
            downloadButtonOnUrlsEnabled: !0,
            formats: ["mp4", "m4a", "webm"],
            dashFormats: "none",
            mp3DefaultBitrate: 128,
            copyToClipboardButtonEnabled: !0,
            qrGeneratorButtonEnabled: !0,
            saveAsDialogEnabled: !1,
            flixmateEnabled: !0,
            flixmateFormats: ["mp4", "mkv", "avi"],
            flixmateUseMultithreading: !0,
            preferredVideoPlaybackQuality: "disabled",
            menuOrder: ["dark-mode", "cinema-mode", "pic-in-pic", "float-video", "looper"],
            hiddenMenuOrder: ["smart-pause", "autoplay", "mousewheel-volume-control", "video-search", "hide-comments", "options"],
            floatVideoEnabled: !1,
            smartPauseEnabled: !1,
            audioModeEnabled: !1,
            mousewheelVolumeControlEnabled: !1,
            videoSearchEnabled: !1,
            hideCommentsEnabled: !1,
            syncCutterWithPlayer: !1
        }
          , o = {
            mp3FlixmateAlertMinimized: !1,
            flixmatePromoMinimized: !1
        };
        ({
            browserInfo: n.R5,
            message: new n.bm,
            options: (0,
            n.JY)("__options__", "sync", t),
            userStorage: (0,
            n.JY)("__user_storage__", "sync", o)
        }).message.send("background.content.addoncrop.info").then((e => {
            if (!e || e.error || !e.data)
                return;
            const s = document.createElement("script");
            s.textContent = `(() => {\n        window.addoncropExtensions = window.addoncropExtensions || [];\n        window.addoncropExtensions.push({\n            mode: '${e.data.mode}',\n            emulator: '${e.data.emulator}',\n            extension: {\n                id: ${e.data.extension.id},\n                name: '${e.data.extension.name}',\n                version: '${e.data.extension.version}',\n                date: '${e.data.extension.date}',\n            },\n            flixmateConnected: ${e.data.flixmateConnected},\n        });\n    })();`,
            document.body.appendChild(s)
        }
        ))
    }
    )();
}
)();
