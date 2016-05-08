! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length,
            c = fa.type(a);
        return "function" === c || fa.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (fa.isFunction(b)) return fa.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return fa.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (pa.test(b)) return fa.filter(b, a, c);
            b = fa.filter(b, a)
        }
        return fa.grep(a, function (a) {
            return _.call(b, a) > -1 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = {};
        return fa.each(a.match(va) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), fa.ready()
    }

    function h() {
        this.expando = fa.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Ca, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ba.test(c) ? fa.parseJSON(c) : c
                } catch (e) {}
                Aa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return fa.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (fa.cssNumber[b] ? "" : "px"),
            k = (fa.cssNumber[b] || "px" !== j && +i) && Ea.exec(fa.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, fa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function k(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], c) : c
    }

    function l(a, b) {
        for (var c = 0, d = a.length; d > c; c++) za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"))
    }

    function m(a, b, c, d, e) {
        for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++)
            if (f = a[p], f || 0 === f)
                if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
                else if (La.test(f)) {
            for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || ["", ""])[1].toLowerCase(), i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--;) g = g.lastChild;
            fa.merge(o, g.childNodes), g = n.firstChild, g.textContent = ""
        } else o.push(b.createTextNode(f));
        for (n.textContent = "", p = 0; f = o[p++];)
            if (d && fa.inArray(f, d) > -1) e && e.push(f);
            else if (j = fa.contains(f.ownerDocument, f), g = k(n.appendChild(f), "script"), j && l(g), c)
            for (m = 0; f = g[m++];) Ja.test(f.type || "") && c.push(f);
        return n
    }

    function n() {
        return !0
    }

    function o() {
        return !1
    }

    function p() {
        try {
            return X.activeElement
        } catch (a) {}
    }

    function q(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) q(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = o;
        else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return fa().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = fa.guid++)), a.each(function () {
            fa.event.add(this, b, e, d, c)
        })
    }

    function r(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function s(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function t(a) {
        var b = Sa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function u(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (za.hasData(a) && (f = za.access(a), g = za.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c])
            }
            Aa.hasData(a) && (h = Aa.access(a), i = fa.extend({}, h), Aa.set(b, i))
        }
    }

    function v(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function w(a, b, c, d) {
        b = Z.apply([], b);
        var e, f, g, h, i, j, l = 0,
            n = a.length,
            o = n - 1,
            p = b[0],
            q = fa.isFunction(p);
        if (q || n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)) return a.each(function (e) {
            var f = a.eq(e);
            q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d)
        });
        if (n && (e = m(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++) i = e, l !== o && (i = fa.clone(i, !0, !0), h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
            if (h)
                for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++) i = g[l], Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")))
        }
        return a
    }

    function x(a, b, c) {
        for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)), d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function y(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body),
            d = fa.css(c[0], "display");
        return c.detach(), d
    }

    function z(a) {
        var b = X,
            c = Va[a];
        return c || (c = y(a, b), "none" !== c && c || (Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ua[0].contentDocument, b.write(), b.close(), c = y(a, b), Ua.detach()), Va[a] = c), c
    }

    function A(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ya(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), c && !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function B(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function C(a) {
        if (a in db) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--;)
            if (a = cb[c] + b, a in db) return a
    }

    function D(a, b, c) {
        var d = Ea.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Fa[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
        return g
    }

    function F(b, c, d) {
        var e = !0,
            f = "width" === c ? b.offsetWidth : b.offsetHeight,
            g = Ya(b),
            h = "border-box" === fa.css(b, "boxSizing", !1, g);
        if (X.msFullscreenElement && a.top !== a && b.getClientRects().length && (f = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= f || null == f) {
            if (f = A(b, c, g), (0 > f || null == f) && (f = b.style[c]), Xa.test(f)) return f;
            e = h && (da.boxSizingReliable() || f === b.style[c]), f = parseFloat(f) || 0
        }
        return f + E(b, c, d || (h ? "border" : "content"), e, g) + "px"
    }

    function G(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = za.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName)))) : (e = Ga(d), "none" === c && e || za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function H(a, b, c, d, e) {
        return new H.prototype.init(a, b, c, d, e)
    }

    function I() {
        return a.setTimeout(function () {
            eb = void 0
        }), eb = fa.now()
    }

    function J(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Fa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function K(a, b, c) {
        for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function L(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && Ga(a),
            p = za.get(a, "fxshow");
        c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], gb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || fa.style(a, d)
            } else j = void 0;
        if (fa.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = za.access(a, "fxshow", {}), f && (p.hidden = !o), o ? fa(a).show() : l.done(function () {
                fa(a).hide()
            }), l.done(function () {
                var b;
                za.remove(a, "fxshow");
                for (b in m) fa.style(a, b, m[b])
            });
            for (d in m) g = K(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function M(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function N(a, b, c) {
        var d, e, f = 0,
            g = N.prefilters.length,
            h = fa.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: fa.extend({}, b),
                opts: fa.extend(!0, {
                    specialEasing: {},
                    easing: fa.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: eb || I(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (M(k, j.opts.specialEasing); g > f; f++)
            if (d = N.prefilters[f].call(j, a, k, j.opts)) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), d;
        return fa.map(k, K, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function O(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function P(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(va) || [];
            if (fa.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Q(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fa.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Ab;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function R(a, b) {
        var c, d, e = fa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && fa.extend(!0, a, d), a
    }

    function S(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function T(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function U(a, b, c, d) {
        var e;
        if (fa.isArray(b)) fa.each(b, function (b, e) {
            c || Eb.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== fa.type(b)) d(a, b);
        else
            for (e in b) U(a + "[" + e + "]", b[e], c, d)
    }

    function V(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var W = [],
        X = a.document,
        Y = W.slice,
        Z = W.concat,
        $ = W.push,
        _ = W.indexOf,
        aa = {},
        ba = aa.toString,
        ca = aa.hasOwnProperty,
        da = {},
        ea = "2.2.2",
        fa = function (a, b) {
            return new fa.fn.init(a, b)
        },
        ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ha = /^-ms-/,
        ia = /-([\da-z])/gi,
        ja = function (a, b) {
            return b.toUpperCase()
        };
    fa.fn = fa.prototype = {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function () {
            return Y.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
        },
        pushStack: function (a) {
            var b = fa.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a) {
            return fa.each(this, a)
        },
        map: function (a) {
            return this.pushStack(fa.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: $,
        sort: W.sort,
        splice: W.splice
    }, fa.extend = fa.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d))) ? (e ? (e = !1, f = c && fa.isArray(c) ? c : []) : f = c && fa.isPlainObject(c) ? c : {}, g[b] = fa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === fa.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            var b = a && a.toString();
            return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function (a) {
            var b;
            if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
            if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || ca.call(a, b)
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            var b, c = eval;
            a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = X.createElement("script"), b.text = a, X.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function (a) {
            return a.replace(ha, "ms-").replace(ia, ja)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b) {
            var d, e = 0;
            if (c(a))
                for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++);
            else
                for (e in a)
                    if (b.call(a[e], e, a[e]) === !1) break; return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(ga, "")
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)), d
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : _.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e, f, g = 0,
                h = [];
            if (c(a))
                for (e = a.length; e > g; g++) f = b(a[g], g, d), null != f && h.push(f);
            else
                for (g in a) f = b(a[g], g, d), null != f && h.push(f);
            return Z.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), fa.isFunction(a) ? (d = Y.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(Y.call(arguments)))
            }, e.guid = a.guid = a.guid || fa.guid++, e) : void 0
        },
        now: Date.now,
        support: da
    }), "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]), fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        aa["[object " + b + "]"] = b.toLowerCase()
    });
    var ka = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument,
                p = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                if (11 !== p && (j = ra.exec(a)))
                    if (e = j[1]) {
                        if (9 === p) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c
                        } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c
                    } else {
                        if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                    }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) o = b, n = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;) l[f] = i + " " + m(l[f]);
                        n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
                    }
                    if (n) try {
                        return $.apply(c, o.querySelectorAll(n)), c
                    } catch (q) {} finally {
                        h === N && b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                    return a === b
                }, g, !0), j = n(function (a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function (d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];)
                                if (m(k, g || G, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function (a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = /'|\\/g,
            ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            va = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            wa = function () {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (xa) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function (a) {
                return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function (a) {
                return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, w.filter.ID = function (a) {
                var b = a.replace(ua, va);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function (a) {
                var b = a.replace(ua, va);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function (a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function (a) {
                var b = G.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function (a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return E = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
            }, G) : G
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ua, va).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [P, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function (a) {
                    return a = a.replace(ua, va),
                        function (b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function (a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === H
                },
                focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !w.pseudos.empty(a)
                },
                header: function (a) {
                    return pa.test(a.nodeName)
                },
                input: function (a) {
                    return oa.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function () {
                    return [0]
                }),
                last: j(function (a, b) {
                    return [b - 1]
                }),
                eq: j(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.uniqueSort = fa.unique = ka.uniqueSort, fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
    var la = function (a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && fa(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        ma = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        na = fa.expr.match.needsContext,
        oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        pa = /^.[^:#\[\.,]*$/;
    fa.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, fa.fn.extend({
        find: function (a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(fa(a).filter(function () {
                for (b = 0; c > b; b++)
                    if (fa.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) fa.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? fa.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function (a) {
            return !!d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length
        }
    });
    var qa, ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        sa = fa.fn.init = function (a, b, c) {
            var d, e;
            if (!a) return this;
            if (c = c || qa, "string" == typeof a) {
                if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ra.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), oa.test(d[1]) && fa.isPlainObject(b))
                        for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                return e = X.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = X, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
        };
    sa.prototype = fa.fn, qa = fa(X);
    var ta = /^(?:parents|prev(?:Until|All))/,
        ua = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fa.fn.extend({
        has: function (a) {
            var b = fa(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (fa.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), fa.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return la(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return la(a, "parentNode", c)
        },
        next: function (a) {
            return e(a, "nextSibling")
        },
        prev: function (a) {
            return e(a, "previousSibling")
        },
        nextAll: function (a) {
            return la(a, "nextSibling")
        },
        prevAll: function (a) {
            return la(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return la(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return la(a, "previousSibling", c)
        },
        siblings: function (a) {
            return ma((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return ma(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || fa.merge([], a.childNodes)
        }
    }, function (a, b) {
        fa.fn[a] = function (c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var va = /\S+/g;
    fa.Callbacks = function (a) {
        a = "string" == typeof a ? f(a) : fa.extend({}, a);
        var b, c, d, e, g = [],
            h = [],
            i = -1,
            j = function () {
                for (e = a.once, d = b = !0; h.length; i = -1)
                    for (c = h.shift(); ++i < g.length;) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
            },
            k = {
                add: function () {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function d(b) {
                        fa.each(b, function (b, c) {
                            fa.isFunction(c) ? a.unique && k.has(c) || g.push(c) : c && c.length && "string" !== fa.type(c) && d(c)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function () {
                    return fa.each(arguments, function (a, b) {
                        for (var c;
                            (c = fa.inArray(b, g, c)) > -1;) g.splice(c, 1), i >= c && i--
                    }), this
                },
                has: function (a) {
                    return a ? fa.inArray(a, g) > -1 : g.length > 0
                },
                empty: function () {
                    return g && (g = []), this
                },
                disable: function () {
                    return e = h = [], g = c = "", this
                },
                disabled: function () {
                    return !g
                },
                lock: function () {
                    return e = h = [], c || (g = c = ""), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, fa.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", fa.Callbacks("once memory"), "resolved"], ["reject", "fail", fa.Callbacks("once memory"), "rejected"], ["notify", "progress", fa.Callbacks("memory")]],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return fa.Deferred(function (c) {
                            fa.each(b, function (b, f) {
                                var g = fa.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? fa.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, fa.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b, c, d, e = 0,
                f = Y.call(arguments),
                g = f.length,
                h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : fa.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? Y.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var wa;
    fa.fn.ready = function (a) {
        return fa.ready.promise().done(a), this
    }, fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? fa.readyWait++ : fa.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))))
        }
    }), fa.ready.promise = function (b) {
        return wa || (wa = fa.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))), wa.promise(b)
    }, fa.ready.promise();
    var xa = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === fa.type(c)) {
                e = !0;
                for (h in c) xa(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(fa(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        ya = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    h.uid = 1, h.prototype = {
        register: function (a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function (a) {
            if (!ya(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, ya(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    fa.isArray(b) ? d = b.concat(b.map(fa.camelCase)) : (e = fa.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(va) || [])), c = d.length;
                    for (; c--;) delete f[d[c]]
                }(void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !fa.isEmptyObject(b)
        }
    };
    var za = new h,
        Aa = new h,
        Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ca = /[A-Z]/g;
    fa.extend({
        hasData: function (a) {
            return Aa.hasData(a) || za.hasData(a)
        },
        data: function (a, b, c) {
            return Aa.access(a, b, c)
        },
        removeData: function (a, b) {
            Aa.remove(a, b)
        },
        _data: function (a, b, c) {
            return za.access(a, b, c)
        },
        _removeData: function (a, b) {
            za.remove(a, b)
        }
    }), fa.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Aa.get(f), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d])));
                    za.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                Aa.set(this, a)
            }) : xa(this, function (b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = fa.camelCase(a), c = Aa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else d = fa.camelCase(a), this.each(function () {
                    var c = Aa.get(this, d);
                    Aa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                Aa.remove(this, a)
            })
        }
    }), fa.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = za.get(a, b), c && (!d || fa.isArray(c) ? d = za.access(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = fa.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = fa._queueHooks(a, b),
                g = function () {
                    fa.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return za.get(a, c) || za.access(a, c, {
                empty: fa.Callbacks("once memory").add(function () {
                    za.remove(a, [b + "queue", c])
                })
            })
        }
    }), fa.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = fa.queue(this, a, b);
                fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                fa.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = fa.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = za.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
        Fa = ["Top", "Right", "Bottom", "Left"],
        Ga = function (a, b) {
            return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
        },
        Ha = /^(?:checkbox|radio)$/i,
        Ia = /<([\w:-]+)/,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ka.optgroup = Ka.option, Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead, Ka.th = Ka.td;
    var La = /<|&#?\w+;/;
    ! function () {
        var a = X.createDocumentFragment(),
            b = a.appendChild(X.createElement("div")),
            c = X.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var Ma = /^key/,
        Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Oa = /^([^.]*)(?:\.(.+)|)/;
    fa.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = fa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                        return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(va) || [""], j = b.length; j--;) h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = fa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = fa.event.special[n] || {}, k = fa.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && fa.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), fa.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.hasData(a) && za.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(va) || [""], j = b.length; j--;)
                    if (h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && za.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            a = fa.event.fix(a);
            var b, c, d, e, f, g = [],
                h = Y.call(arguments),
                i = (za.get(this, "events") || {})[a.type] || [],
                j = fa.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = fa.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || X, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[fa.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return fa.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, fa.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, fa.Event = function (a, b) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? n : o) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
    }, fa.Event.prototype = {
        constructor: fa.Event,
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = n, a && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = n, a && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = n, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || fa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), fa.fn.extend({
        on: function (a, b, c, d) {
            return q(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return q(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = o), this.each(function () {
                fa.event.remove(this, a, c, b)
            })
        }
    });
    var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Qa = /<script|<style|<link/i,
        Ra = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Sa = /^true\/(.*)/,
        Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
        htmlPrefilter: function (a) {
            return a.replace(Pa, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = fa.contains(a.ownerDocument, a);
            if (!(da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++) v(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++) u(f[d], g[d]);
                else u(a, h);
            return g = k(h, "script"), g.length > 0 && l(g, !i && k(a, "script")), h
        },
        cleanData: function (a) {
            for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (ya(c)) {
                    if (b = c[za.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                        c[za.expando] = void 0
                    }
                    c[Aa.expando] && (c[Aa.expando] = void 0)
                }
        }
    }), fa.fn.extend({
        domManip: w,
        detach: function (a) {
            return x(this, a, !0)
        },
        remove: function (a) {
            return x(this, a)
        },
        text: function (a) {
            return xa(this, function (a) {
                return void 0 === a ? fa.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return w(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return w(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return w(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return w(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return fa.clone(this, a, b)
            })
        },
        html: function (a) {
            return xa(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = fa.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(k(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return w(this, arguments, function (b) {
                var c = this.parentNode;
                fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        fa.fn[a] = function (a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), fa(e[g])[b](c), $.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ua, Va = {
            HTML: "block",
            BODY: "block"
        },
        Wa = /^margin/,
        Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
        Ya = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Za = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        $a = X.documentElement;
    ! function () {
        function b() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", $a.appendChild(g);
            var b = a.getComputedStyle(h);
            c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, $a.removeChild(g)
        }
        var c, d, e, f, g = X.createElement("div"),
            h = X.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), fa.extend(da, {
            pixelPosition: function () {
                return b(), c
            },
            boxSizingReliable: function () {
                return null == d && b(), d
            },
            pixelMarginRight: function () {
                return null == d && b(), e
            },
            reliableMarginLeft: function () {
                return null == d && b(), f
            },
            reliableMarginRight: function () {
                var b, c = h.appendChild(X.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", $a.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), $a.removeChild(g), h.removeChild(c), b
            }
        }))
    }();
    var _a = /^(none|table(?!-c[ea]).+)/,
        ab = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cb = ["Webkit", "O", "Moz", "ms"],
        db = X.createElement("div").style;
    fa.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = A(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = fa.camelCase(b),
                    i = a.style;
                return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ea.exec(c)) && e[1] && (c = j(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (fa.cssNumber[h] ? "" : "px")), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = fa.camelCase(b);
            return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = A(a, b, d)), "normal" === e && b in bb && (e = bb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), fa.each(["height", "width"], function (a, b) {
        fa.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth ? Za(a, ab, function () {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e, f = d && Ya(a),
                    g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = fa.css(a, b)), D(a, c, g)
            }
        }
    }), fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(A(a, "marginLeft")) || a.getBoundingClientRect().left - Za(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), fa.cssHooks.marginRight = B(da.reliableMarginRight, function (a, b) {
        return b ? Za(a, {
            display: "inline-block"
        }, A, [a, "marginRight"]) : void 0
    }), fa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        fa.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Wa.test(a) || (fa.cssHooks[a + b].set = D)
    }), fa.fn.extend({
        css: function (a, b) {
            return xa(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (fa.isArray(b)) {
                    for (d = Ya(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return G(this, !0)
        },
        hide: function () {
            return G(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                Ga(this) ? fa(this).show() : fa(this).hide()
            })
        }
    }), fa.Tween = H, H.prototype = {
        constructor: H,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || fa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = H.propHooks[this.prop];
            return a && a.get ? a.get(this) : H.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = H.propHooks[this.prop];
            return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : fa.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, fa.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, fa.fx = H.prototype.init, fa.fx.step = {};
    var eb, fb, gb = /^(?:toggle|show|hide)$/,
        hb = /queueHooks$/;
    fa.Animation = fa.extend(N, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return j(c.elem, a, Ea.exec(b), c), c
                }]
            },
            tweener: function (a, b) {
                fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(va);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], N.tweeners[c] = N.tweeners[c] || [], N.tweeners[c].unshift(b)
            },
            prefilters: [L],
            prefilter: function (a, b) {
                b ? N.prefilters.unshift(a) : N.prefilters.push(a)
            }
        }), fa.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? fa.extend({}, a) : {
                complete: c || !c && b || fa.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !fa.isFunction(b) && b
            };
            return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
            }, d
        }, fa.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Ga).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = fa.isEmptyObject(a),
                    f = fa.speed(b, c, d),
                    g = function () {
                        var b = N(this, fa.extend({}, a), f);
                        (e || za.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = fa.timers,
                        g = za.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || fa.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = za.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = fa.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), fa.each(["toggle", "show", "hide"], function (a, b) {
            var c = fa.fn[b];
            fa.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e)
            }
        }), fa.each({
            slideDown: J("show"),
            slideUp: J("hide"),
            slideToggle: J("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            fa.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), fa.timers = [], fa.fx.tick = function () {
            var a, b = 0,
                c = fa.timers;
            for (eb = fa.now(); b < c.length; b++) a = c[b],
                a() || c[b] !== a || c.splice(b--, 1);
            c.length || fa.fx.stop(), eb = void 0
        }, fa.fx.timer = function (a) {
            fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop()
        }, fa.fx.interval = 13, fa.fx.start = function () {
            fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval))
        }, fa.fx.stop = function () {
            a.clearInterval(fb), fb = null
        }, fa.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fa.fn.delay = function (b, c) {
            return b = fa.fx ? fa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        },
        function () {
            var a = X.createElement("input"),
                b = X.createElement("select"),
                c = b.appendChild(X.createElement("option"));
            a.type = "checkbox", da.checkOn = "" !== a.value, da.optSelected = c.selected, b.disabled = !0, da.optDisabled = !c.disabled, a = X.createElement("input"), a.value = "t", a.type = "radio", da.radioValue = "t" === a.value
        }();
    var ib, jb = fa.expr.attrHandle;
    fa.fn.extend({
        attr: function (a, b) {
            return xa(this, fa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                fa.removeAttr(this, a)
            })
        }
    }), fa.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void fa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = fa.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(va);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ib = {
        set: function (a, b, c) {
            return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = jb[b] || fa.find.attr;
        jb[b] = function (a, b, d) {
            var e, f;
            return d || (f = jb[b], jb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, jb[b] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    fa.fn.extend({
        prop: function (a, b) {
            return xa(this, fa.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[fa.propFix[a] || a]
            })
        }
    }), fa.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && fa.isXMLDoc(a) || (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = fa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), da.optSelected || (fa.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        fa.propFix[this.toLowerCase()] = this
    });
    var mb = /[\t\r\n\f]/g;
    fa.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function (b) {
                fa(this).addClass(a.call(this, b, O(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(va) || []; c = this[i++];)
                    if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function (b) {
                fa(this).removeClass(a.call(this, b, O(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(va) || []; c = this[i++];)
                    if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function (c) {
                fa(this).toggleClass(a.call(this, c, O(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = fa(this), f = a.match(va) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = O(this), b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : za.get(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;
    fa.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = fa.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)
            }
        }
    }), fa.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = fa.find.attr(a, "value");
                    return null != b ? b : fa.trim(fa.text(a)).replace(ob, " ")
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fa(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), fa.each(["radio", "checkbox"], function () {
        fa.valHooks[this] = {
            set: function (a, b) {
                return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) > -1 : void 0
            }
        }, da.checkOn || (fa.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || X],
                n = ca.call(b, "type") ? b.type : b,
                o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !pb.test(n + fa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), l = fa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !fa.isWindow(d)) {
                    for (i = l.delegateType || n, pb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && ya(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !ya(d) || j && fa.isFunction(d[n]) && !fa.isWindow(d) && (h = d[j], h && (d[j] = null), fa.event.triggered = n, d[n](), fa.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        simulate: function (a, b, c) {
            var d = fa.extend(new fa.Event, c, {
                type: a,
                isSimulated: !0
            });
            fa.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), fa.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                fa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? fa.event.trigger(a, b, c, !0) : void 0
        }
    }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        fa.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fa.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), da.focusin = "onfocusin" in a, da.focusin || fa.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            fa.event.simulate(b, a.target, fa.event.fix(a))
        };
        fa.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = za.access(d, b);
                e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = za.access(d, b) - 1;
                e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = fa.now(),
        sb = /\?/;
    fa.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, fa.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b), c
    };
    var tb = /#.*$/,
        ub = /([?&])_=[^&]*/,
        vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        xb = /^(?:GET|HEAD)$/,
        yb = /^\/\//,
        zb = {},
        Ab = {},
        Bb = "*/".concat("*"),
        Cb = X.createElement("a");
    Cb.href = qb.href, fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: wb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a)
        },
        ajaxPrefilter: P(zb),
        ajaxTransport: P(Ab),
        ajax: function (b, c) {
            function d(b, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), e = void 0, g = h || "", w.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (t = S(m, w, d)), t = T(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, !b && x || (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
                p = fa.Deferred(),
                q = fa.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!h)
                                for (h = {}; b = vb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || v;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || qb.href) + "").replace(tb, "").replace(yb, qb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(va) || [""], null == m.crossDomain) {
                j = X.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = Cb.protocol + "//" + Cb.host != j.protocol + "//" + j.host
                } catch (x) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(zb, m, c, w), 2 === u) return w;
            k = fa.event && m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !xb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (sb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = ub.test(f) ? f.replace(ub, "$1_=" + rb++) : f + (sb.test(f) ? "&" : "?") + "_=" + rb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](m[l]);
            if (e = Q(Ab, m, c, w)) {
                if (w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, e.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function (a, b, c) {
            return fa.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return fa.get(a, void 0, b, "script")
        }
    }), fa.each(["get", "post"], function (a, b) {
        fa[b] = function (a, c, d, e) {
            return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax(fa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, fa.isPlainObject(a) && a))
        }
    }), fa._evalUrl = function (a) {
        return fa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, fa.fn.extend({
        wrapAll: function (a) {
            var b;
            return fa.isFunction(a) ? this.each(function (b) {
                fa(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function (a) {
            return fa.isFunction(a) ? this.each(function (b) {
                fa(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = fa(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = fa.isFunction(a);
            return this.each(function (c) {
                fa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fa.expr.filters.hidden = function (a) {
        return !fa.expr.filters.visible(a)
    }, fa.expr.filters.visible = function (a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Db = /%20/g,
        Eb = /\[\]$/,
        Fb = /\r?\n/g,
        Gb = /^(?:submit|button|image|reset|file)$/i,
        Hb = /^(?:input|select|textarea|keygen)/i;
    fa.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) U(c, a[c], b, e);
        return d.join("&").replace(Db, "+")
    }, fa.fn.extend({
        serialize: function () {
            return fa.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && Hb.test(this.nodeName) && !Gb.test(a) && (this.checked || !Ha.test(a))
            }).map(function (a, b) {
                var c = fa(this).val();
                return null == c ? null : fa.isArray(c) ? fa.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Fb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Fb, "\r\n")
                }
            }).get()
        }
    }), fa.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Ib = {
            0: 200,
            1223: 204
        },
        Jb = fa.ajaxSettings.xhr();
    da.cors = !!Jb && "withCredentials" in Jb, da.ajax = Jb = !!Jb, fa.ajaxTransport(function (b) {
        var c, d;
        return da.cors || Jb && !b.crossDomain ? {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ib[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function () {
                c && c()
            }
        } : void 0
    }), fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return fa.globalEval(a), a
            }
        }
    }), fa.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fa.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = fa("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), X.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var Kb = [],
        Lb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Kb.pop() || fa.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), fa.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Lb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Lb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Lb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || fa.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? fa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Kb.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), fa.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || X;
        var d = oa.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
    };
    var Mb = fa.fn.load;
    fa.fn.load = function (a, b, c) {
        if ("string" != typeof a && Mb) return Mb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = fa.trim(a.slice(h)), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && fa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        fa.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), fa.expr.filters.animated = function (a) {
        return fa.grep(fa.timers, function (b) {
            return a === b.elem
        }).length
    }, fa.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = fa.css(a, "position"),
                l = fa(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, fa.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                fa.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, fa.contains(b, d) ? (e = d.getBoundingClientRect(), c = V(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fa.css(c, "marginTop", !0),
                    left: b.left - d.left - fa.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === fa.css(a, "position");) a = a.offsetParent;
                return a || $a
            })
        }
    }), fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        fa.fn[a] = function (d) {
            return xa(this, function (a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), fa.each(["top", "left"], function (a, b) {
        fa.cssHooks[b] = B(da.pixelPosition, function (a, c) {
            return c ? (c = A(a, b), Xa.test(c) ? fa(a).position()[b] + "px" : c) : void 0
        })
    }), fa.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        fa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            fa.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return xa(this, function (b, c, d) {
                    var e;
                    return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), fa.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function () {
            return this.length
        }
    }), fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return fa
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return fa.noConflict = function (b) {
        return a.$ === fa && (a.$ = Ob), b && a.jQuery === fa && (a.jQuery = Nb), fa
    }, b || (a.jQuery = a.$ = fa), fa
}),
function () {
    function a(a) {
        function b(b, c, d, e, f, g) {
            for (; f >= 0 && g > f; f += a) {
                var h = e ? e[f] : f;
                d = c(d, b[h], h, b)
            }
            return d
        }
        return function (c, d, e, f) {
            d = t(d, f, 4);
            var g = !A(c) && s.keys(c),
                h = (g || c).length,
                i = a > 0 ? 0 : h - 1;
            return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
        }
    }

    function b(a) {
        return function (b, c, d) {
            c = u(c, d);
            for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a)
                if (c(b[f], f, b)) return f;
            return -1
        }
    }

    function c(a, b, c) {
        return function (d, e, f) {
            var g = 0,
                h = z(d);
            if ("number" == typeof f) a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1;
            else if (c && f && h) return f = c(d, e), d[f] === e ? f : -1;
            if (e !== e) return f = b(k.call(d, g, h), s.isNaN), f >= 0 ? f + g : -1;
            for (f = a > 0 ? g : h - 1; f >= 0 && h > f; f += a)
                if (d[f] === e) return f;
            return -1
        }
    }

    function d(a, b) {
        var c = F.length,
            d = a.constructor,
            e = s.isFunction(d) && d.prototype || h,
            f = "constructor";
        for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--;) f = F[c], f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f)
    }
    var e = this,
        f = e._,
        g = Array.prototype,
        h = Object.prototype,
        i = Function.prototype,
        j = g.push,
        k = g.slice,
        l = h.toString,
        m = h.hasOwnProperty,
        n = Array.isArray,
        o = Object.keys,
        p = i.bind,
        q = Object.create,
        r = function () {},
        s = function (a) {
            return a instanceof s ? a : this instanceof s ? void(this._wrapped = a) : new s(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports._ = s) : e._ = s, s.VERSION = "1.8.3";
    var t = function (a, b, c) {
            if (void 0 === b) return a;
            switch (null == c ? 3 : c) {
            case 1:
                return function (c) {
                    return a.call(b, c)
                };
            case 2:
                return function (c, d) {
                    return a.call(b, c, d)
                };
            case 3:
                return function (c, d, e) {
                    return a.call(b, c, d, e)
                };
            case 4:
                return function (c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        },
        u = function (a, b, c) {
            return null == a ? s.identity : s.isFunction(a) ? t(a, b, c) : s.isObject(a) ? s.matcher(a) : s.property(a)
        };
    s.iteratee = function (a, b) {
        return u(a, b, 1 / 0)
    };
    var v = function (a, b) {
            return function (c) {
                var d = arguments.length;
                if (2 > d || null == c) return c;
                for (var e = 1; d > e; e++)
                    for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
                        var j = g[i];
                        b && void 0 !== c[j] || (c[j] = f[j])
                    }
                return c
            }
        },
        w = function (a) {
            if (!s.isObject(a)) return {};
            if (q) return q(a);
            r.prototype = a;
            var b = new r;
            return r.prototype = null, b
        },
        x = function (a) {
            return function (b) {
                return null == b ? void 0 : b[a]
            }
        },
        y = Math.pow(2, 53) - 1,
        z = x("length"),
        A = function (a) {
            var b = z(a);
            return "number" == typeof b && b >= 0 && y >= b
        };
    s.each = s.forEach = function (a, b, c) {
        b = t(b, c);
        var d, e;
        if (A(a))
            for (d = 0, e = a.length; e > d; d++) b(a[d], d, a);
        else {
            var f = s.keys(a);
            for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a)
        }
        return a
    }, s.map = s.collect = function (a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
            var h = d ? d[g] : g;
            f[g] = b(a[h], h, a)
        }
        return f
    }, s.reduce = s.foldl = s.inject = a(1), s.reduceRight = s.foldr = a(-1), s.find = s.detect = function (a, b, c) {
        var d;
        return d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
    }, s.filter = s.select = function (a, b, c) {
        var d = [];
        return b = u(b, c), s.each(a, function (a, c, e) {
            b(a, c, e) && d.push(a)
        }), d
    }, s.reject = function (a, b, c) {
        return s.filter(a, s.negate(u(b)), c)
    }, s.every = s.all = function (a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
            var g = d ? d[f] : f;
            if (!b(a[g], g, a)) return !1
        }
        return !0
    }, s.some = s.any = function (a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
            var g = d ? d[f] : f;
            if (b(a[g], g, a)) return !0
        }
        return !1
    }, s.contains = s.includes = s.include = function (a, b, c, d) {
        return A(a) || (a = s.values(a)), ("number" != typeof c || d) && (c = 0), s.indexOf(a, b, c) >= 0
    }, s.invoke = function (a, b) {
        var c = k.call(arguments, 2),
            d = s.isFunction(b);
        return s.map(a, function (a) {
            var e = d ? b : a[b];
            return null == e ? e : e.apply(a, c)
        })
    }, s.pluck = function (a, b) {
        return s.map(a, s.property(b))
    }, s.where = function (a, b) {
        return s.filter(a, s.matcher(b))
    }, s.findWhere = function (a, b) {
        return s.find(a, s.matcher(b))
    }, s.max = function (a, b, c) {
        var d, e, f = -(1 / 0),
            g = -(1 / 0);
        if (null == b && null != a) {
            a = A(a) ? a : s.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d)
        } else b = u(b, c), s.each(a, function (a, c, d) {
            e = b(a, c, d), (e > g || e === -(1 / 0) && f === -(1 / 0)) && (f = a, g = e)
        });
        return f
    }, s.min = function (a, b, c) {
        var d, e, f = 1 / 0,
            g = 1 / 0;
        if (null == b && null != a) {
            a = A(a) ? a : s.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d)
        } else b = u(b, c), s.each(a, function (a, c, d) {
            e = b(a, c, d), (g > e || e === 1 / 0 && f === 1 / 0) && (f = a, g = e)
        });
        return f
    }, s.shuffle = function (a) {
        for (var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = s.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
        return e
    }, s.sample = function (a, b, c) {
        return null == b || c ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)]) : s.shuffle(a).slice(0, Math.max(0, b))
    }, s.sortBy = function (a, b, c) {
        return b = u(b, c), s.pluck(s.map(a, function (a, c, d) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, d)
            }
        }).sort(function (a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var B = function (a) {
        return function (b, c, d) {
            var e = {};
            return c = u(c, d), s.each(b, function (d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    s.groupBy = B(function (a, b, c) {
        s.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), s.indexBy = B(function (a, b, c) {
        a[c] = b
    }), s.countBy = B(function (a, b, c) {
        s.has(a, c) ? a[c]++ : a[c] = 1
    }), s.toArray = function (a) {
        return a ? s.isArray(a) ? k.call(a) : A(a) ? s.map(a, s.identity) : s.values(a) : []
    }, s.size = function (a) {
        return null == a ? 0 : A(a) ? a.length : s.keys(a).length
    }, s.partition = function (a, b, c) {
        b = u(b, c);
        var d = [],
            e = [];
        return s.each(a, function (a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, s.first = s.head = s.take = function (a, b, c) {
        return null != a ? null == b || c ? a[0] : s.initial(a, a.length - b) : void 0
    }, s.initial = function (a, b, c) {
        return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, s.last = function (a, b, c) {
        return null != a ? null == b || c ? a[a.length - 1] : s.rest(a, Math.max(0, a.length - b)) : void 0
    }, s.rest = s.tail = s.drop = function (a, b, c) {
        return k.call(a, null == b || c ? 1 : b)
    }, s.compact = function (a) {
        return s.filter(a, s.identity)
    };
    var C = function (a, b, c, d) {
        for (var e = [], f = 0, g = d || 0, h = z(a); h > g; g++) {
            var i = a[g];
            if (A(i) && (s.isArray(i) || s.isArguments(i))) {
                b || (i = C(i, b, c));
                var j = 0,
                    k = i.length;
                for (e.length += k; k > j;) e[f++] = i[j++]
            } else c || (e[f++] = i)
        }
        return e
    };
    s.flatten = function (a, b) {
        return C(a, b, !1)
    }, s.without = function (a) {
        return s.difference(a, k.call(arguments, 1))
    }, s.uniq = s.unique = function (a, b, c, d) {
        s.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = u(c, d));
        for (var e = [], f = [], g = 0, h = z(a); h > g; g++) {
            var i = a[g],
                j = c ? c(i, g, a) : i;
            b ? (g && f === j || e.push(i), f = j) : c ? s.contains(f, j) || (f.push(j), e.push(i)) : s.contains(e, i) || e.push(i)
        }
        return e
    }, s.union = function () {
        return s.uniq(C(arguments, !0, !0))
    }, s.intersection = function (a) {
        for (var b = [], c = arguments.length, d = 0, e = z(a); e > d; d++) {
            var f = a[d];
            if (!s.contains(b, f)) {
                for (var g = 1; c > g && s.contains(arguments[g], f); g++);
                g === c && b.push(f)
            }
        }
        return b
    }, s.difference = function (a) {
        var b = C(arguments, !0, !0, 1);
        return s.filter(a, function (a) {
            return !s.contains(b, a)
        })
    }, s.zip = function () {
        return s.unzip(arguments)
    }, s.unzip = function (a) {
        for (var b = a && s.max(a, z).length || 0, c = Array(b), d = 0; b > d; d++) c[d] = s.pluck(a, d);
        return c
    }, s.object = function (a, b) {
        for (var c = {}, d = 0, e = z(a); e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, s.findIndex = b(1), s.findLastIndex = b(-1), s.sortedIndex = function (a, b, c, d) {
        c = u(c, d, 1);
        for (var e = c(b), f = 0, g = z(a); g > f;) {
            var h = Math.floor((f + g) / 2);
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, s.indexOf = c(1, s.findIndex, s.sortedIndex), s.lastIndexOf = c(-1, s.findLastIndex), s.range = function (a, b, c) {
        null == b && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
        return e
    };
    var D = function (a, b, c, d, e) {
        if (!(d instanceof b)) return a.apply(c, e);
        var f = w(a.prototype),
            g = a.apply(f, e);
        return s.isObject(g) ? g : f
    };
    s.bind = function (a, b) {
        if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
        if (!s.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var c = k.call(arguments, 2),
            d = function () {
                return D(a, d, b, this, c.concat(k.call(arguments)))
            };
        return d
    }, s.partial = function (a) {
        var b = k.call(arguments, 1),
            c = function () {
                for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++) f[g] = b[g] === s ? arguments[d++] : b[g];
                for (; d < arguments.length;) f.push(arguments[d++]);
                return D(a, c, this, this, f)
            };
        return c
    }, s.bindAll = function (a) {
        var b, c, d = arguments.length;
        if (1 >= d) throw new Error("bindAll must be passed function names");
        for (b = 1; d > b; b++) c = arguments[b], a[c] = s.bind(a[c], a);
        return a
    }, s.memoize = function (a, b) {
        var c = function (d) {
            var e = c.cache,
                f = "" + (b ? b.apply(this, arguments) : d);
            return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, s.delay = function (a, b) {
        var c = k.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    }, s.defer = s.partial(s.delay, s, 1), s.throttle = function (a, b, c) {
        var d, e, f, g = null,
            h = 0;
        c || (c = {});
        var i = function () {
            h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), g || (d = e = null)
        };
        return function () {
            var j = s.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }, s.debounce = function (a, b, c) {
        var d, e, f, g, h, i = function () {
            var j = s.now() - g;
            b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function () {
            f = this, e = arguments, g = s.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, s.wrap = function (a, b) {
        return s.partial(b, a)
    }, s.negate = function (a) {
        return function () {
            return !a.apply(this, arguments)
        }
    }, s.compose = function () {
        var a = arguments,
            b = a.length - 1;
        return function () {
            for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
            return d
        }
    }, s.after = function (a, b) {
        return function () {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, s.before = function (a, b) {
        var c;
        return function () {
            return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
        }
    }, s.once = s.partial(s.before, 2);
    var E = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    s.keys = function (a) {
        if (!s.isObject(a)) return [];
        if (o) return o(a);
        var b = [];
        for (var c in a) s.has(a, c) && b.push(c);
        return E && d(a, b), b
    }, s.allKeys = function (a) {
        if (!s.isObject(a)) return [];
        var b = [];
        for (var c in a) b.push(c);
        return E && d(a, b), b
    }, s.values = function (a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d
    }, s.mapObject = function (a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; f > h; h++) d = e[h], g[d] = b(a[d], d, a);
        return g
    }, s.pairs = function (a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
        return d
    }, s.invert = function (a) {
        for (var b = {}, c = s.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b
    }, s.functions = s.methods = function (a) {
        var b = [];
        for (var c in a) s.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, s.extend = v(s.allKeys), s.extendOwn = s.assign = v(s.keys), s.findKey = function (a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = 0, g = e.length; g > f; f++)
            if (d = e[f], b(a[d], d, a)) return d
    }, s.pick = function (a, b, c) {
        var d, e, f = {},
            g = a;
        if (null == g) return f;
        s.isFunction(b) ? (e = s.allKeys(g), d = t(b, c)) : (e = C(arguments, !1, !1, 1), d = function (a, b, c) {
            return b in c
        }, g = Object(g));
        for (var h = 0, i = e.length; i > h; h++) {
            var j = e[h],
                k = g[j];
            d(k, j, g) && (f[j] = k)
        }
        return f
    }, s.omit = function (a, b, c) {
        if (s.isFunction(b)) b = s.negate(b);
        else {
            var d = s.map(C(arguments, !1, !1, 1), String);
            b = function (a, b) {
                return !s.contains(d, b)
            }
        }
        return s.pick(a, b, c)
    }, s.defaults = v(s.allKeys, !0), s.create = function (a, b) {
        var c = w(a);
        return b && s.extendOwn(c, b), c
    }, s.clone = function (a) {
        return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a
    }, s.tap = function (a, b) {
        return b(a), a
    }, s.isMatch = function (a, b) {
        var c = s.keys(b),
            d = c.length;
        if (null == a) return !d;
        for (var e = Object(a), f = 0; d > f; f++) {
            var g = c[f];
            if (b[g] !== e[g] || !(g in e)) return !1
        }
        return !0
    };
    var G = function (a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
        var e = l.call(a);
        if (e !== l.call(b)) return !1;
        switch (e) {
        case "[object RegExp]":
        case "[object String]":
            return "" + a == "" + b;
        case "[object Number]":
            return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            return +a === +b
        }
        var f = "[object Array]" === e;
        if (!f) {
            if ("object" != typeof a || "object" != typeof b) return !1;
            var g = a.constructor,
                h = b.constructor;
            if (g !== h && !(s.isFunction(g) && g instanceof g && s.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
        }
        c = c || [], d = d || [];
        for (var i = c.length; i--;)
            if (c[i] === a) return d[i] === b;
        if (c.push(a), d.push(b), f) {
            if (i = a.length, i !== b.length) return !1;
            for (; i--;)
                if (!G(a[i], b[i], c, d)) return !1
        } else {
            var j, k = s.keys(a);
            if (i = k.length, s.keys(b).length !== i) return !1;
            for (; i--;)
                if (j = k[i], !s.has(b, j) || !G(a[j], b[j], c, d)) return !1
        }
        return c.pop(), d.pop(), !0
    };
    s.isEqual = function (a, b) {
        return G(a, b)
    }, s.isEmpty = function (a) {
        return null == a ? !0 : A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a)) ? 0 === a.length : 0 === s.keys(a).length
    }, s.isElement = function (a) {
        return !(!a || 1 !== a.nodeType)
    }, s.isArray = n || function (a) {
        return "[object Array]" === l.call(a)
    }, s.isObject = function (a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, s.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (a) {
        s["is" + a] = function (b) {
            return l.call(b) === "[object " + a + "]"
        }
    }), s.isArguments(arguments) || (s.isArguments = function (a) {
        return s.has(a, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (s.isFunction = function (a) {
        return "function" == typeof a || !1
    }), s.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, s.isNaN = function (a) {
        return s.isNumber(a) && a !== +a
    }, s.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" === l.call(a)
    }, s.isNull = function (a) {
        return null === a
    }, s.isUndefined = function (a) {
        return void 0 === a
    }, s.has = function (a, b) {
        return null != a && m.call(a, b)
    }, s.noConflict = function () {
        return e._ = f, this
    }, s.identity = function (a) {
        return a
    }, s.constant = function (a) {
        return function () {
            return a
        }
    }, s.noop = function () {}, s.property = x, s.propertyOf = function (a) {
        return null == a ? function () {} : function (b) {
            return a[b]
        }
    }, s.matcher = s.matches = function (a) {
        return a = s.extendOwn({}, a),
            function (b) {
                return s.isMatch(b, a)
            }
    }, s.times = function (a, b, c) {
        var d = Array(Math.max(0, a));
        b = t(b, c, 1);
        for (var e = 0; a > e; e++) d[e] = b(e);
        return d
    }, s.random = function (a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, s.now = Date.now || function () {
        return (new Date).getTime()
    };
    var H = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        I = s.invert(H),
        J = function (a) {
            var b = function (b) {
                    return a[b]
                },
                c = "(?:" + s.keys(a).join("|") + ")",
                d = RegExp(c),
                e = RegExp(c, "g");
            return function (a) {
                return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
            }
        };
    s.escape = J(H), s.unescape = J(I), s.result = function (a, b, c) {
        var d = null == a ? void 0 : a[b];
        return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d
    };
    var K = 0;
    s.uniqueId = function (a) {
        var b = ++K + "";
        return a ? a + b : b
    }, s.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
        M = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        N = /\\|'|\r|\n|\u2028|\u2029/g,
        O = function (a) {
            return "\\" + M[a]
        };
    s.template = function (a, b, c) {
        !b && c && (b = c), b = s.defaults({}, b, s.templateSettings);
        var d = RegExp([(b.escape || L).source, (b.interpolate || L).source, (b.evaluate || L).source].join("|") + "|$", "g"),
            e = 0,
            f = "__p+='";
        a.replace(d, function (b, c, d, g, h) {
            return f += a.slice(e, h).replace(N, O), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        var i = function (a) {
                return g.call(this, a, s)
            },
            j = b.variable || "obj";
        return i.source = "function(" + j + "){\n" + f + "}", i
    }, s.chain = function (a) {
        var b = s(a);
        return b._chain = !0, b
    };
    var P = function (a, b) {
        return a._chain ? s(b).chain() : b
    };
    s.mixin = function (a) {
        s.each(s.functions(a), function (b) {
            var c = s[b] = a[b];
            s.prototype[b] = function () {
                var a = [this._wrapped];
                return j.apply(a, arguments), P(this, c.apply(s, a))
            }
        })
    }, s.mixin(s), s.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = g[a];
        s.prototype[a] = function () {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], P(this, c)
        }
    }), s.each(["concat", "join", "slice"], function (a) {
        var b = g[a];
        s.prototype[a] = function () {
            return P(this, b.apply(this._wrapped, arguments))
        }
    }), s.prototype.value = function () {
        return this._wrapped
    }, s.prototype.valueOf = s.prototype.toJSON = s.prototype.value, s.prototype.toString = function () {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return s
    })
}.call(this),
    function (a) {
        var b = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function (c, d, e) {
            b.Backbone = a(b, e, c, d)
        });
        else if ("undefined" != typeof exports) {
            var c, d = require("underscore");
            try {
                c = require("jquery")
            } catch (e) {}
            a(b, exports, d, c)
        } else b.Backbone = a(b, {}, b._, b.jQuery || b.Zepto || b.ender || b.$)
    }(function (a, b, c, d) {
        var e = a.Backbone,
            f = Array.prototype.slice;
        b.VERSION = "1.3.2", b.$ = d, b.noConflict = function () {
            return a.Backbone = e, this
        }, b.emulateHTTP = !1, b.emulateJSON = !1;
        var g = function (a, b, d) {
                switch (a) {
                case 1:
                    return function () {
                        return c[b](this[d])
                    };
                case 2:
                    return function (a) {
                        return c[b](this[d], a)
                    };
                case 3:
                    return function (a, e) {
                        return c[b](this[d], i(a, this), e)
                    };
                case 4:
                    return function (a, e, f) {
                        return c[b](this[d], i(a, this), e, f)
                    };
                default:
                    return function () {
                        var a = f.call(arguments);
                        return a.unshift(this[d]), c[b].apply(c, a)
                    }
                }
            },
            h = function (a, b, d) {
                c.each(b, function (b, e) {
                    c[e] && (a.prototype[e] = g(b, e, d))
                })
            },
            i = function (a, b) {
                return c.isFunction(a) ? a : c.isObject(a) && !b._isModel(a) ? j(a) : c.isString(a) ? function (b) {
                    return b.get(a)
                } : a
            },
            j = function (a) {
                var b = c.matches(a);
                return function (a) {
                    return b(a.attributes)
                }
            },
            k = b.Events = {},
            l = /\s+/,
            m = function (a, b, d, e, f) {
                var g, h = 0;
                if (d && "object" == typeof d) {
                    void 0 !== e && "context" in f && void 0 === f.context && (f.context = e);
                    for (g = c.keys(d); h < g.length; h++) b = m(a, b, g[h], d[g[h]], f)
                } else if (d && l.test(d))
                    for (g = d.split(l); h < g.length; h++) b = a(b, g[h], e, f);
                else b = a(b, d, e, f);
                return b
            };
        k.on = function (a, b, c) {
            return n(this, a, b, c)
        };
        var n = function (a, b, c, d, e) {
            if (a._events = m(o, a._events || {}, b, c, {
                    context: d,
                    ctx: a,
                    listening: e
                }), e) {
                var f = a._listeners || (a._listeners = {});
                f[e.id] = e
            }
            return a
        };
        k.listenTo = function (a, b, d) {
            if (!a) return this;
            var e = a._listenId || (a._listenId = c.uniqueId("l")),
                f = this._listeningTo || (this._listeningTo = {}),
                g = f[e];
            if (!g) {
                var h = this._listenId || (this._listenId = c.uniqueId("l"));
                g = f[e] = {
                    obj: a,
                    objId: e,
                    id: h,
                    listeningTo: f,
                    count: 0
                }
            }
            return n(a, b, d, this, g), this
        };
        var o = function (a, b, c, d) {
            if (c) {
                var e = a[b] || (a[b] = []),
                    f = d.context,
                    g = d.ctx,
                    h = d.listening;
                h && h.count++, e.push({
                    callback: c,
                    context: f,
                    ctx: f || g,
                    listening: h
                })
            }
            return a
        };
        k.off = function (a, b, c) {
            return this._events ? (this._events = m(p, this._events, a, b, {
                context: c,
                listeners: this._listeners
            }), this) : this
        }, k.stopListening = function (a, b, d) {
            var e = this._listeningTo;
            if (!e) return this;
            for (var f = a ? [a._listenId] : c.keys(e), g = 0; g < f.length; g++) {
                var h = e[f[g]];
                if (!h) break;
                h.obj.off(b, d, this)
            }
            return this
        };
        var p = function (a, b, d, e) {
            if (a) {
                var f, g = 0,
                    h = e.context,
                    i = e.listeners;
                if (b || d || h) {
                    for (var j = b ? [b] : c.keys(a); g < j.length; g++) {
                        b = j[g];
                        var k = a[b];
                        if (!k) break;
                        for (var l = [], m = 0; m < k.length; m++) {
                            var n = k[m];
                            d && d !== n.callback && d !== n.callback._callback || h && h !== n.context ? l.push(n) : (f = n.listening, f && 0 === --f.count && (delete i[f.id], delete f.listeningTo[f.objId]))
                        }
                        l.length ? a[b] = l : delete a[b]
                    }
                    return a
                }
                for (var o = c.keys(i); g < o.length; g++) f = i[o[g]], delete i[f.id], delete f.listeningTo[f.objId]
            }
        };
        k.once = function (a, b, d) {
            var e = m(q, {}, a, b, c.bind(this.off, this));
            return "string" == typeof a && null == d && (b = void 0), this.on(e, b, d)
        }, k.listenToOnce = function (a, b, d) {
            var e = m(q, {}, b, d, c.bind(this.stopListening, this, a));
            return this.listenTo(a, e)
        };
        var q = function (a, b, d, e) {
            if (d) {
                var f = a[b] = c.once(function () {
                    e(b, f), d.apply(this, arguments)
                });
                f._callback = d
            }
            return a
        };
        k.trigger = function (a) {
            if (!this._events) return this;
            for (var b = Math.max(0, arguments.length - 1), c = Array(b), d = 0; b > d; d++) c[d] = arguments[d + 1];
            return m(r, this._events, a, void 0, c), this
        };
        var r = function (a, b, c, d) {
                if (a) {
                    var e = a[b],
                        f = a.all;
                    e && f && (f = f.slice()), e && s(e, d), f && s(f, [b].concat(d))
                }
                return a
            },
            s = function (a, b) {
                var c, d = -1,
                    e = a.length,
                    f = b[0],
                    g = b[1],
                    h = b[2];
                switch (b.length) {
                case 0:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                    return;
                case 1:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f);
                    return;
                case 2:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g);
                    return;
                case 3:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g, h);
                    return;
                default:
                    for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b);
                    return
                }
            };
        k.bind = k.on, k.unbind = k.off, c.extend(b, k);
        var t = b.Model = function (a, b) {
            var d = a || {};
            b || (b = {}), this.cid = c.uniqueId(this.cidPrefix), this.attributes = {}, b.collection && (this.collection = b.collection), b.parse && (d = this.parse(d, b) || {});
            var e = c.result(this, "defaults");
            d = c.defaults(c.extend({}, e, d), e), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
        };
        c.extend(t.prototype, k, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function () {},
            toJSON: function (a) {
                return c.clone(this.attributes)
            },
            sync: function () {
                return b.sync.apply(this, arguments)
            },
            get: function (a) {
                return this.attributes[a]
            },
            escape: function (a) {
                return c.escape(this.get(a))
            },
            has: function (a) {
                return null != this.get(a)
            },
            matches: function (a) {
                return !!c.iteratee(a, this)(this.attributes)
            },
            set: function (a, b, d) {
                if (null == a) return this;
                var e;
                if ("object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d || (d = {}), !this._validate(e, d)) return !1;
                var f = d.unset,
                    g = d.silent,
                    h = [],
                    i = this._changing;
                this._changing = !0, i || (this._previousAttributes = c.clone(this.attributes), this.changed = {});
                var j = this.attributes,
                    k = this.changed,
                    l = this._previousAttributes;
                for (var m in e) b = e[m], c.isEqual(j[m], b) || h.push(m), c.isEqual(l[m], b) ? delete k[m] : k[m] = b, f ? delete j[m] : j[m] = b;
                if (this.idAttribute in e && (this.id = this.get(this.idAttribute)), !g) {
                    h.length && (this._pending = d);
                    for (var n = 0; n < h.length; n++) this.trigger("change:" + h[n], this, j[h[n]], d)
                }
                if (i) return this;
                if (!g)
                    for (; this._pending;) d = this._pending, this._pending = !1, this.trigger("change", this, d);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function (a, b) {
                return this.set(a, void 0, c.extend({}, b, {
                    unset: !0
                }))
            },
            clear: function (a) {
                var b = {};
                for (var d in this.attributes) b[d] = void 0;
                return this.set(b, c.extend({}, a, {
                    unset: !0
                }))
            },
            hasChanged: function (a) {
                return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
            },
            changedAttributes: function (a) {
                if (!a) return this.hasChanged() ? c.clone(this.changed) : !1;
                var b = this._changing ? this._previousAttributes : this.attributes,
                    d = {};
                for (var e in a) {
                    var f = a[e];
                    c.isEqual(b[e], f) || (d[e] = f)
                }
                return c.size(d) ? d : !1
            },
            previous: function (a) {
                return null != a && this._previousAttributes ? this._previousAttributes[a] : null
            },
            previousAttributes: function () {
                return c.clone(this._previousAttributes)
            },
            fetch: function (a) {
                a = c.extend({
                    parse: !0
                }, a);
                var b = this,
                    d = a.success;
                return a.success = function (c) {
                    var e = a.parse ? b.parse(c, a) : c;
                    return b.set(e, a) ? (d && d.call(a.context, b, c, a), void b.trigger("sync", b, c, a)) : !1
                }, P(this, a), this.sync("read", this, a)
            },
            save: function (a, b, d) {
                var e;
                null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d = c.extend({
                    validate: !0,
                    parse: !0
                }, d);
                var f = d.wait;
                if (e && !f) {
                    if (!this.set(e, d)) return !1
                } else if (!this._validate(e, d)) return !1;
                var g = this,
                    h = d.success,
                    i = this.attributes;
                d.success = function (a) {
                    g.attributes = i;
                    var b = d.parse ? g.parse(a, d) : a;
                    return f && (b = c.extend({}, e, b)), b && !g.set(b, d) ? !1 : (h && h.call(d.context, g, a, d), void g.trigger("sync", g, a, d))
                }, P(this, d), e && f && (this.attributes = c.extend({}, i, e));
                var j = this.isNew() ? "create" : d.patch ? "patch" : "update";
                "patch" !== j || d.attrs || (d.attrs = e);
                var k = this.sync(j, this, d);
                return this.attributes = i, k
            },
            destroy: function (a) {
                a = a ? c.clone(a) : {};
                var b = this,
                    d = a.success,
                    e = a.wait,
                    f = function () {
                        b.stopListening(), b.trigger("destroy", b, b.collection, a)
                    };
                a.success = function (c) {
                    e && f(), d && d.call(a.context, b, c, a), b.isNew() || b.trigger("sync", b, c, a)
                };
                var g = !1;
                return this.isNew() ? c.defer(a.success) : (P(this, a), g = this.sync("delete", this, a)), e || f(), g
            },
            url: function () {
                var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || O();
                if (this.isNew()) return a;
                var b = this.get(this.idAttribute);
                return a.replace(/[^\/]$/, "$&/") + encodeURIComponent(b)
            },
            parse: function (a, b) {
                return a
            },
            clone: function () {
                return new this.constructor(this.attributes)
            },
            isNew: function () {
                return !this.has(this.idAttribute)
            },
            isValid: function (a) {
                return this._validate({}, c.extend({}, a, {
                    validate: !0
                }))
            },
            _validate: function (a, b) {
                if (!b.validate || !this.validate) return !0;
                a = c.extend({}, this.attributes, a);
                var d = this.validationError = this.validate(a, b) || null;
                return d ? (this.trigger("invalid", this, d, c.extend(b, {
                    validationError: d
                })), !1) : !0
            }
        });
        var u = {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        };
        h(t, u, "attributes");
        var v = b.Collection = function (a, b) {
                b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({
                    silent: !0
                }, b))
            },
            w = {
                add: !0,
                remove: !0,
                merge: !0
            },
            x = {
                add: !0,
                remove: !1
            },
            y = function (a, b, c) {
                c = Math.min(Math.max(c, 0), a.length);
                var d, e = Array(a.length - c),
                    f = b.length;
                for (d = 0; d < e.length; d++) e[d] = a[d + c];
                for (d = 0; f > d; d++) a[d + c] = b[d];
                for (d = 0; d < e.length; d++) a[d + f + c] = e[d]
            };
        c.extend(v.prototype, k, {
            model: t,
            initialize: function () {},
            toJSON: function (a) {
                return this.map(function (b) {
                    return b.toJSON(a)
                })
            },
            sync: function () {
                return b.sync.apply(this, arguments)
            },
            add: function (a, b) {
                return this.set(a, c.extend({
                    merge: !1
                }, b, x))
            },
            remove: function (a, b) {
                b = c.extend({}, b);
                var d = !c.isArray(a);
                a = d ? [a] : a.slice();
                var e = this._removeModels(a, b);
                return !b.silent && e.length && (b.changes = {
                    added: [],
                    merged: [],
                    removed: e
                }, this.trigger("update", this, b)), d ? e[0] : e
            },
            set: function (a, b) {
                if (null != a) {
                    b = c.extend({}, w, b), b.parse && !this._isModel(a) && (a = this.parse(a, b) || []);
                    var d = !c.isArray(a);
                    a = d ? [a] : a.slice();
                    var e = b.at;
                    null != e && (e = +e), e > this.length && (e = this.length), 0 > e && (e += this.length + 1);
                    var f, g, h = [],
                        i = [],
                        j = [],
                        k = [],
                        l = {},
                        m = b.add,
                        n = b.merge,
                        o = b.remove,
                        p = !1,
                        q = this.comparator && null == e && b.sort !== !1,
                        r = c.isString(this.comparator) ? this.comparator : null;
                    for (g = 0; g < a.length; g++) {
                        f = a[g];
                        var s = this.get(f);
                        if (s) {
                            if (n && f !== s) {
                                var t = this._isModel(f) ? f.attributes : f;
                                b.parse && (t = s.parse(t, b)), s.set(t, b), j.push(s), q && !p && (p = s.hasChanged(r))
                            }
                            l[s.cid] || (l[s.cid] = !0, h.push(s)), a[g] = s
                        } else m && (f = a[g] = this._prepareModel(f, b), f && (i.push(f), this._addReference(f, b), l[f.cid] = !0, h.push(f)))
                    }
                    if (o) {
                        for (g = 0; g < this.length; g++) f = this.models[g], l[f.cid] || k.push(f);
                        k.length && this._removeModels(k, b)
                    }
                    var u = !1,
                        v = !q && m && o;
                    if (h.length && v ? (u = this.length !== h.length || c.some(this.models, function (a, b) {
                            return a !== h[b]
                        }), this.models.length = 0, y(this.models, h, 0), this.length = this.models.length) : i.length && (q && (p = !0), y(this.models, i, null == e ? this.length : e), this.length = this.models.length), p && this.sort({
                            silent: !0
                        }), !b.silent) {
                        for (g = 0; g < i.length; g++) null != e && (b.index = e + g), f = i[g], f.trigger("add", f, this, b);
                        (p || u) && this.trigger("sort", this, b), (i.length || k.length || j.length) && (b.changes = {
                            added: i,
                            removed: k,
                            merged: j
                        }, this.trigger("update", this, b))
                    }
                    return d ? a[0] : a
                }
            },
            reset: function (a, b) {
                b = b ? c.clone(b) : {};
                for (var d = 0; d < this.models.length; d++) this._removeReference(this.models[d], b);
                return b.previousModels = this.models, this._reset(), a = this.add(a, c.extend({
                    silent: !0
                }, b)), b.silent || this.trigger("reset", this, b), a
            },
            push: function (a, b) {
                return this.add(a, c.extend({
                    at: this.length
                }, b))
            },
            pop: function (a) {
                var b = this.at(this.length - 1);
                return this.remove(b, a)
            },
            unshift: function (a, b) {
                return this.add(a, c.extend({
                    at: 0
                }, b))
            },
            shift: function (a) {
                var b = this.at(0);
                return this.remove(b, a)
            },
            slice: function () {
                return f.apply(this.models, arguments)
            },
            get: function (a) {
                return null != a ? this._byId[a] || this._byId[this.modelId(a.attributes || a)] || a.cid && this._byId[a.cid] : void 0
            },
            has: function (a) {
                return null != this.get(a)
            },
            at: function (a) {
                return 0 > a && (a += this.length), this.models[a]
            },
            where: function (a, b) {
                return this[b ? "find" : "filter"](a)
            },
            findWhere: function (a) {
                return this.where(a, !0)
            },
            sort: function (a) {
                var b = this.comparator;
                if (!b) throw new Error("Cannot sort a set without a comparator");
                a || (a = {});
                var d = b.length;
                return c.isFunction(b) && (b = c.bind(b, this)), 1 === d || c.isString(b) ? this.models = this.sortBy(b) : this.models.sort(b), a.silent || this.trigger("sort", this, a), this
            },
            pluck: function (a) {
                return this.map(a + "")
            },
            fetch: function (a) {
                a = c.extend({
                    parse: !0
                }, a);
                var b = a.success,
                    d = this;
                return a.success = function (c) {
                    var e = a.reset ? "reset" : "set";
                    d[e](c, a), b && b.call(a.context, d, c, a), d.trigger("sync", d, c, a)
                }, P(this, a), this.sync("read", this, a)
            },
            create: function (a, b) {
                b = b ? c.clone(b) : {};
                var d = b.wait;
                if (a = this._prepareModel(a, b), !a) return !1;
                d || this.add(a, b);
                var e = this,
                    f = b.success;
                return b.success = function (a, b, c) {
                    d && e.add(a, c), f && f.call(c.context, a, b, c)
                }, a.save(null, b), a
            },
            parse: function (a, b) {
                return a
            },
            clone: function () {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function (a) {
                return a[this.model.prototype.idAttribute || "id"]
            },
            _reset: function () {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function (a, b) {
                if (this._isModel(a)) return a.collection || (a.collection = this), a;
                b = b ? c.clone(b) : {}, b.collection = this;
                var d = new this.model(a, b);
                return d.validationError ? (this.trigger("invalid", this, d.validationError, b), !1) : d
            },
            _removeModels: function (a, b) {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = this.get(a[d]);
                    if (e) {
                        var f = this.indexOf(e);
                        this.models.splice(f, 1), this.length--, delete this._byId[e.cid];
                        var g = this.modelId(e.attributes);
                        null != g && delete this._byId[g], b.silent || (b.index = f, e.trigger("remove", e, this, b)), c.push(e), this._removeReference(e, b)
                    }
                }
                return c
            },
            _isModel: function (a) {
                return a instanceof t
            },
            _addReference: function (a, b) {
                this._byId[a.cid] = a;
                var c = this.modelId(a.attributes);
                null != c && (this._byId[c] = a), a.on("all", this._onModelEvent, this)
            },
            _removeReference: function (a, b) {
                delete this._byId[a.cid];
                var c = this.modelId(a.attributes);
                null != c && delete this._byId[c], this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function (a, b, c, d) {
                if (b) {
                    if (("add" === a || "remove" === a) && c !== this) return;
                    if ("destroy" === a && this.remove(b, d), "change" === a) {
                        var e = this.modelId(b.previousAttributes()),
                            f = this.modelId(b.attributes);
                        e !== f && (null != e && delete this._byId[e], null != f && (this._byId[f] = b))
                    }
                }
                this.trigger.apply(this, arguments)
            }
        });
        var z = {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 0,
            foldl: 0,
            inject: 0,
            reduceRight: 0,
            foldr: 0,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 3,
            includes: 3,
            contains: 3,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3,
            groupBy: 3,
            countBy: 3,
            sortBy: 3,
            indexBy: 3,
            findIndex: 3,
            findLastIndex: 3
        };
        h(v, z, "models");
        var A = b.View = function (a) {
                this.cid = c.uniqueId("view"), c.extend(this, c.pick(a, C)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            B = /^(\S+)\s*(.*)$/,
            C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        c.extend(A.prototype, k, {
            tagName: "div",
            $: function (a) {
                return this.$el.find(a)
            },
            initialize: function () {},
            render: function () {
                return this
            },
            remove: function () {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function () {
                this.$el.remove()
            },
            setElement: function (a) {
                return this.undelegateEvents(), this._setElement(a), this.delegateEvents(), this
            },
            _setElement: function (a) {
                this.$el = a instanceof b.$ ? a : b.$(a), this.el = this.$el[0]
            },
            delegateEvents: function (a) {
                if (a || (a = c.result(this, "events")), !a) return this;
                this.undelegateEvents();
                for (var b in a) {
                    var d = a[b];
                    if (c.isFunction(d) || (d = this[d]), d) {
                        var e = b.match(B);
                        this.delegate(e[1], e[2], c.bind(d, this))
                    }
                }
                return this
            },
            delegate: function (a, b, c) {
                return this.$el.on(a + ".delegateEvents" + this.cid, b, c), this
            },
            undelegateEvents: function () {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function (a, b, c) {
                return this.$el.off(a + ".delegateEvents" + this.cid, b, c), this
            },
            _createElement: function (a) {
                return document.createElement(a)
            },
            _ensureElement: function () {
                if (this.el) this.setElement(c.result(this, "el"));
                else {
                    var a = c.extend({}, c.result(this, "attributes"));
                    this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className")), this.setElement(this._createElement(c.result(this, "tagName"))), this._setAttributes(a)
                }
            },
            _setAttributes: function (a) {
                this.$el.attr(a)
            }
        }), b.sync = function (a, d, e) {
            var f = D[a];
            c.defaults(e || (e = {}), {
                emulateHTTP: b.emulateHTTP,
                emulateJSON: b.emulateJSON
            });
            var g = {
                type: f,
                dataType: "json"
            };
            if (e.url || (g.url = c.result(d, "url") || O()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {
                    model: g.data
                } : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
                g.type = "POST", e.emulateJSON && (g.data._method = f);
                var h = e.beforeSend;
                e.beforeSend = function (a) {
                    return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) : void 0
                }
            }
            "GET" === g.type || e.emulateJSON || (g.processData = !1);
            var i = e.error;
            e.error = function (a, b, c) {
                e.textStatus = b, e.errorThrown = c, i && i.call(e.context, a, b, c)
            };
            var j = e.xhr = b.ajax(c.extend(g, e));
            return d.trigger("request", d, j, e), j
        };
        var D = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        b.ajax = function () {
            return b.$.ajax.apply(b.$, arguments)
        };
        var E = b.Router = function (a) {
                a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            F = /\((.*?)\)/g,
            G = /(\(\?)?:\w+/g,
            H = /\*\w+/g,
            I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        c.extend(E.prototype, k, {
            initialize: function () {},
            route: function (a, d, e) {
                c.isRegExp(a) || (a = this._routeToRegExp(a)), c.isFunction(d) && (e = d, d = ""), e || (e = this[d]);
                var f = this;
                return b.history.route(a, function (c) {
                    var g = f._extractParameters(a, c);
                    f.execute(e, g, d) !== !1 && (f.trigger.apply(f, ["route:" + d].concat(g)), f.trigger("route", d, g), b.history.trigger("route", f, d, g))
                }), this
            },
            execute: function (a, b, c) {
                a && a.apply(this, b)
            },
            navigate: function (a, c) {
                return b.history.navigate(a, c), this
            },
            _bindRoutes: function () {
                if (this.routes) {
                    this.routes = c.result(this, "routes");
                    for (var a, b = c.keys(this.routes); null != (a = b.pop());) this.route(a, this.routes[a])
                }
            },
            _routeToRegExp: function (a) {
                return a = a.replace(I, "\\$&").replace(F, "(?:$1)?").replace(G, function (a, b) {
                    return b ? a : "([^/?]+)"
                }).replace(H, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function (a, b) {
                var d = a.exec(b).slice(1);
                return c.map(d, function (a, b) {
                    return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
                })
            }
        });
        var J = b.History = function () {
                this.handlers = [], this.checkUrl = c.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            K = /^[#\/]|\s+$/g,
            L = /^\/+|\/+$/g,
            M = /#.*$/;
        J.started = !1, c.extend(J.prototype, k, {
            interval: 50,
            atRoot: function () {
                var a = this.location.pathname.replace(/[^\/]$/, "$&/");
                return a === this.root && !this.getSearch()
            },
            matchRoot: function () {
                var a = this.decodeFragment(this.location.pathname),
                    b = a.slice(0, this.root.length - 1) + "/";
                return b === this.root
            },
            decodeFragment: function (a) {
                return decodeURI(a.replace(/%25/g, "%2525"))
            },
            getSearch: function () {
                var a = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return a ? a[0] : ""
            },
            getHash: function (a) {
                var b = (a || this).location.href.match(/#(.*)$/);
                return b ? b[1] : ""
            },
            getPath: function () {
                var a = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return "/" === a.charAt(0) ? a.slice(1) : a
            },
            getFragment: function (a) {
                return null == a && (a = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), a.replace(K, "")
            },
            start: function (a) {
                if (J.started) throw new Error("Backbone.history has already been started");
                if (J.started = !0, this.options = c.extend({
                        root: "/"
                    }, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(L, "/"), this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var b = this.root.slice(0, -1) || "/";
                        return this.location.replace(b + "#" + this.getPath()), !0
                    }
                    this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    })
                }
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var d = document.body,
                        e = d.insertBefore(this.iframe, d.firstChild).contentWindow;
                    e.document.open(), e.document.close(), e.location.hash = "#" + this.fragment
                }
                var f = window.addEventListener || function (a, b) {
                    return attachEvent("on" + a, b)
                };
                return this._usePushState ? f("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? f("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function () {
                var a = window.removeEventListener || function (a, b) {
                    return detachEvent("on" + a, b)
                };
                this._usePushState ? a("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && a("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), J.started = !1
            },
            route: function (a, b) {
                this.handlers.unshift({
                    route: a,
                    callback: b
                })
            },
            checkUrl: function (a) {
                var b = this.getFragment();
                return b === this.fragment && this.iframe && (b = this.getHash(this.iframe.contentWindow)), b === this.fragment ? !1 : (this.iframe && this.navigate(b), void this.loadUrl())
            },
            loadUrl: function (a) {
                return this.matchRoot() ? (a = this.fragment = this.getFragment(a), c.some(this.handlers, function (b) {
                    return b.route.test(a) ? (b.callback(a), !0) : void 0
                })) : !1
            },
            navigate: function (a, b) {
                if (!J.started) return !1;
                b && b !== !0 || (b = {
                    trigger: !!b
                }), a = this.getFragment(a || "");
                var c = this.root;
                "" !== a && "?" !== a.charAt(0) || (c = c.slice(0, -1) || "/");
                var d = c + a;
                if (a = this.decodeFragment(a.replace(M, "")), this.fragment !== a) {
                    if (this.fragment = a, this._usePushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, d);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(d);
                        if (this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getHash(this.iframe.contentWindow)) {
                            var e = this.iframe.contentWindow;
                            b.replace || (e.document.open(), e.document.close()), this._updateHash(e.location, a, b.replace)
                        }
                    }
                    return b.trigger ? this.loadUrl(a) : void 0
                }
            },
            _updateHash: function (a, b, c) {
                if (c) {
                    var d = a.href.replace(/(javascript:|#).*$/, "");
                    a.replace(d + "#" + b)
                } else a.hash = "#" + b
            }
        }), b.history = new J;
        var N = function (a, b) {
            var d, e = this;
            return d = a && c.has(a, "constructor") ? a.constructor : function () {
                return e.apply(this, arguments)
            }, c.extend(d, e, b), d.prototype = c.create(e.prototype, a), d.prototype.constructor = d, d.__super__ = e.prototype, d
        };
        t.extend = v.extend = E.extend = A.extend = J.extend = N;
        var O = function () {
                throw new Error('A "url" property or function must be specified')
            },
            P = function (a, b) {
                var c = b.error;
                b.error = function (d) {
                    c && c.call(b.context, a, d, b), a.trigger("error", a, d, b)
                }
            };
        return b
    }),
    function (a) {
        function b(b, c, d, e) {
            "use strict";

            function f() {
                for (var a, c = 0; i.length > c; c++) i[c].href && i[c].href.indexOf(b) > -1 && (a = !0);
                a ? g.media = d || "all" : setTimeout(f)
            }
            var g = a.document.createElement("link"),
                h = c || a.document.getElementsByTagName("script")[0],
                i = a.document.styleSheets;
            return g.rel = "stylesheet", g.href = b, g.media = "only x", g.onload = e || null, h.parentNode.insertBefore(g, h), f(), g
        }
        var c = function (d, e) {
            "use strict";
            if (d && 3 === d.length) {
                var f = a.navigator,
                    g = a.Image,
                    h = !(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || a.opera && -1 === f.userAgent.indexOf("Chrome") || -1 !== f.userAgent.indexOf("Series40")),
                    i = new g;
                i.onerror = function () {
                    c.method = "png", c.href = d[2], b(d[2])
                }, i.onload = function () {
                    var a = 1 === i.width && 1 === i.height,
                        f = d[a && h ? 0 : a ? 1 : 2];
                    c.method = a && h ? "svg" : a ? "datapng" : "png", c.href = f, b(f, null, null, e)
                }, i.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", document.documentElement.className += " grunticon"
            }
        };
        c.loadCSS = b, a.grunticon = c
    }(this),
    function (a, b) {
        "use strict";
        var c = b.document,
            d = "grunticon:",
            e = function (a) {
                if (c.attachEvent ? "complete" === c.readyState : "loading" !== c.readyState) a();
                else {
                    var b = !1;
                    c.addEventListener("readystatechange", function () {
                        b || (b = !0, a())
                    }, !1)
                }
            },
            f = function (a) {
                return b.document.querySelector('link[href$="' + a + '"]')
            },
            g = function (a) {
                var b, c, e, f, g, h, i = {};
                if (b = a.sheet, !b) return i;
                c = b.cssRules ? b.cssRules : b.rules;
                for (var j = 0; c.length > j; j++) e = c[j].cssText, f = d + c[j].selectorText, g = e.split(");")[0].match(/US\-ASCII\,([^"']+)/), g && g[1] && (h = decodeURIComponent(g[1]), i[f] = h);
                return i
            },
            h = function (a) {
                var b, e, f;
                e = "data-grunticon-embed";
                for (var g in a)
                    if (f = g.slice(d.length), b = c.querySelectorAll(f + "[" + e + "]"), b.length)
                        for (var h = 0; b.length > h; h++) b[h].innerHTML = a[g], b[h].style.backgroundImage = "none", b[h].removeAttribute(e);
                return b
            },
            i = function (b) {
                "svg" === a.method && e(function () {
                    h(g(f(a.href))), "function" == typeof b && b()
                })
            };
        a.embedIcons = h, a.getCSS = f, a.getIcons = g, a.ready = e, a.svgLoadedCallback = i, a.embedSVG = i
    }(grunticon, this), grunticon(["/global-styles/img/svg/icons/icons.data.svg.css", "/global-styles/img/svg/icons/icons.data.png.css", "/global-styles/img/svg/icons/icons.fallback.css"]), ! function (a) {
        "use strict";
        a.fn.fitVids = function (b) {
            var c = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var d = document.createElement("div"),
                    e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                    f = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
                d.className = "fit-vids-style", d.id = "fit-vids-style", d.style.display = "none", d.innerHTML = f, e.parentNode.insertBefore(d, e)
            }
            return b && a.extend(c, b), this.each(function () {
                var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                c.customSelector && b.push(c.customSelector);
                var d = a(this).find(b.join(","));
                d = d.not("object object"), d.each(function () {
                    var b = a(this);
                    if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                        var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                            d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                            e = c / d;
                        if (!b.attr("id")) {
                            var f = "fitvid" + Math.floor(999999 * Math.random());
                            b.attr("id", f)
                        }
                        b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function (a, b, c) {
        a.fn.tinyNav = function (d) {
            var e = a.extend({
                active: "selected",
                header: "",
                label: ""
            }, d);
            return this.each(function () {
                c++;
                var d = a(this),
                    f = "tinynav",
                    g = f + c,
                    h = ".l_" + g,
                    i = a("<select/>").attr("id", g).addClass(f + " " + g);
                if (d.is("ul,ol")) {
                    "" !== e.header && i.append(a("<option/>").text(e.header));
                    var j = "";
                    d.addClass("l_" + g).find("a").each(function () {
                        j += '<option value="' + a(this).attr("href") + '">';
                        var b;
                        for (b = 0; b < a(this).parents("ul, ol").length - 1; b++) j += "- ";
                        j += a(this).text() + "</option>"
                    }), i.append(j), e.header || i.find(":eq(" + a(h + " li").index(a(h + " li." + e.active)) + ")").attr("selected", !0), i.change(function () {
                        b.location.href = a(this).val()
                    }), a(h).after(i), e.label && i.before(a("<label/>").attr("for", g).addClass(f + "_label " + g + "_label").append(e.label))
                }
            })
        }
    }(jQuery, this, 0), + function (a) {
        "use strict";

        function b() {
            var a = document.createElement("bootstrap"),
                b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var c in b)
                if (void 0 !== a.style[c]) return {
                    end: b[c]
                };
            return !1
        }
        a.fn.emulateTransitionEnd = function (b) {
            var c = !1,
                d = this;
            a(this).one(a.support.transition.end, function () {
                c = !0
            });
            var e = function () {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b), this
        }, a(function () {
            a.support.transition = b()
        })
    }(jQuery), + function (a) {
        "use strict";
        var b = '[data-dismiss="alert"]',
            c = function (c) {
                a(c).on("click", b, this.close)
            };
        c.prototype.close = function (b) {
            function c() {
                f.trigger("closed.bs.alert").remove()
            }
            var d = a(this),
                e = d.attr("data-target");
            e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
            var f = a(e);
            b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
        };
        var d = a.fn.alert;
        a.fn.alert = function (b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.alert");
                e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
            })
        }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
            return a.fn.alert = d, this
        }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
    }(jQuery), + function (a) {
        "use strict";
        var b = function (c, d) {
            this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
        };
        b.DEFAULTS = {
            loadingText: "loading..."
        }, b.prototype.setState = function (b) {
            var c = "disabled",
                d = this.$element,
                e = d.is("input") ? "val" : "html",
                f = d.data();
            b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function () {
                "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
            }, this), 0)
        }, b.prototype.toggle = function () {
            var a = !0,
                b = this.$element.closest('[data-toggle="buttons"]');
            if (b.length) {
                var c = this.$element.find("input");
                "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
            }
            a && this.$element.toggleClass("active")
        };
        var c = a.fn.button;
        a.fn.button = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.button"),
                    f = "object" == typeof c && c;
                e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
            })
        }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
            return a.fn.button = c, this
        }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
            var c = a(b.target);
            c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
        })
    }(jQuery), + function (a) {
        "use strict";
        var b = function (b, c) {
            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
        };
        b.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0
        }, b.prototype.cycle = function (b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
        }, b.prototype.getActiveIndex = function () {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        }, b.prototype.to = function (b) {
            var c = this,
                d = this.getActiveIndex();
            return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                c.to(b)
            }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
        }, b.prototype.pause = function (b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, b.prototype.next = function () {
            return this.sliding ? void 0 : this.slide("next")
        }, b.prototype.prev = function () {
            return this.sliding ? void 0 : this.slide("prev")
        }, b.prototype.slide = function (b, c) {
            var d = this.$element.find(".item.active"),
                e = c || d[b](),
                f = this.interval,
                g = "next" == b ? "left" : "right",
                h = "next" == b ? "first" : "last",
                i = this;
            if (!e.length) {
                if (!this.options.wrap) return;
                e = this.$element.find(".item")[h]()
            }
            if (e.hasClass("active")) return this.sliding = !1;
            var j = a.Event("slide.bs.carousel", {
                relatedTarget: e[0],
                direction: g
            });
            return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active")
            })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
                e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger("slid.bs.carousel")
                }, 0)
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this)
        };
        var c = a.fn.carousel;
        a.fn.carousel = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
                    g = "string" == typeof c ? c : f.slide;
                e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
            return a.fn.carousel = c, this
        }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
            var c, d = a(this),
                e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
                f = a.extend({}, e.data(), d.data()),
                g = d.attr("data-slide-to");
            g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
        }), a(window).on("load", function () {
            a('[data-ride="carousel"]').each(function () {
                var b = a(this);
                b.carousel(b.data())
            })
        })
    }(jQuery), + function (a) {
        "use strict";
        var b = function (c, d) {
            this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
        };
        b.DEFAULTS = {
            toggle: !0
        }, b.prototype.dimension = function () {
            var a = this.$element.hasClass("width");
            return a ? "width" : "height"
        }, b.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var b = a.Event("show.bs.collapse");
                if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.$parent && this.$parent.find("> .panel > .in");
                    if (c && c.length) {
                        var d = c.data("bs.collapse");
                        if (d && d.transitioning) return;
                        c.collapse("hide"), d || c.data("bs.collapse", null)
                    }
                    var e = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                    var f = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return f.call(this);
                    var g = a.camelCase(["scroll", e].join("-"));
                    this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
                }
            }
        }, b.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var d = function () {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
                }
            }
        }, b.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var c = a.fn.collapse;
        a.fn.collapse = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.collapse"),
                    f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
                !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
            return a.fn.collapse = c, this
        }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
            var c, d = a(this),
                e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
                f = a(e),
                g = f.data("bs.collapse"),
                h = g ? "toggle" : d.data(),
                i = d.attr("data-parent"),
                j = i && a(i);
            g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
        })
    }(jQuery), + function (a) {
        "use strict";

        function b(b) {
            a(d).remove(), a(e).each(function () {
                var d = c(a(this)),
                    e = {
                        relatedTarget: this
                    };
                d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
            })
        }

        function c(b) {
            var c = b.attr("data-target");
            c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
            var d = c && a(c);
            return d && d.length ? d : b.parent()
        }
        var d = ".dropdown-backdrop",
            e = "[data-toggle=dropdown]",
            f = function (b) {
                a(b).on("click.bs.dropdown", this.toggle)
            };
        f.prototype.toggle = function (d) {
            var e = a(this);
            if (!e.is(".disabled, :disabled")) {
                var f = c(e),
                    g = f.hasClass("open");
                if (b(), !g) {
                    "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                    var h = {
                        relatedTarget: this
                    };
                    if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                    f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus()
                }
                return !1
            }
        }, f.prototype.keydown = function (b) {
            if (/(38|40|27)/.test(b.keyCode)) {
                var d = a(this);
                if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                    var f = c(d),
                        g = f.hasClass("open");
                    if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                    var h = " li:not(.divider):visible a",
                        i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                    if (i.length) {
                        var j = i.index(i.filter(":focus"));
                        38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus()
                    }
                }
            }
        };
        var g = a.fn.dropdown;
        a.fn.dropdown = function (b) {
            return this.each(function () {
                var c = a(this),
                    d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
            })
        }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
            return a.fn.dropdown = g, this
        }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
            a.stopPropagation()
        }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
    }(jQuery), + function (a) {
        "use strict";
        var b = function (b, c) {
            this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        b.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, b.prototype.toggle = function (a) {
            return this[this.isShown ? "hide" : "show"](a)
        }, b.prototype.show = function (b) {
            var c = this,
                d = a.Event("show.bs.modal", {
                    relatedTarget: b
                });
            this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
                var d = a.support.transition && c.$element.hasClass("fade");
                c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
                var e = a.Event("shown.bs.modal", {
                    relatedTarget: b
                });
                d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
                    c.$element.focus().trigger(e)
                }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
            }))
        }, b.prototype.hide = function (b) {
            b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
        }, b.prototype.enforceFocus = function () {
            a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
                this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
            }, this))
        }, b.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
                27 == a.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
        }, b.prototype.hideModal = function () {
            var a = this;
            this.$element.hide(), this.backdrop(function () {
                a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
            })
        }, b.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, b.prototype.backdrop = function (b) {
            var c = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var d = a.support.transition && c;
                if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
        };
        var c = a.fn.modal;
        a.fn.modal = function (c, d) {
            return this.each(function () {
                var e = a(this),
                    f = e.data("bs.modal"),
                    g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
                f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
            })
        }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
            return a.fn.modal = c, this
        }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
            var c = a(this),
                d = c.attr("href"),
                e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
                f = e.data("bs.modal") ? "toggle" : a.extend({
                    remote: !/#/.test(d) && d
                }, e.data(), c.data());
            c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function () {
                c.is(":visible") && c.focus()
            })
        }), a(document).on("show.bs.modal", ".modal", function () {
            a(document.body).addClass("modal-open")
        }).on("hidden.bs.modal", ".modal", function () {
            a(document.body).removeClass("modal-open")
        })
    }(jQuery), + function (a) {
        "use strict";
        var b = function (a, b) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
        };
        b.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, b.prototype.init = function (b, c, d) {
            this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
            for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                var g = e[f];
                if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                else if ("manual" != g) {
                    var h = "hover" == g ? "mouseenter" : "focusin",
                        i = "hover" == g ? "mouseleave" : "focusout";
                    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, b.prototype.getDefaults = function () {
            return b.DEFAULTS
        }, b.prototype.getOptions = function (b) {
            return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        }, b.prototype.getDelegateOptions = function () {
            var b = {},
                c = this.getDefaults();
            return this._options && a.each(this._options, function (a, d) {
                c[a] != d && (b[a] = d)
            }), b
        }, b.prototype.enter = function (b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show)) : c.show()
        }, b.prototype.leave = function (b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) : c.hide()
        }, b.prototype.show = function () {
            var b = a.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(b), b.isDefaultPrevented()) return;
                var c = this,
                    d = this.tip();
                this.setContent(), this.options.animation && d.addClass("fade");
                var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                    f = /\s?auto?\s?/i,
                    g = f.test(e);
                g && (e = e.replace(f, "") || "top"), d.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
                var h = this.getPosition(),
                    i = d[0].offsetWidth,
                    j = d[0].offsetHeight;
                if (g) {
                    var k = this.$element.parent(),
                        l = e,
                        m = document.documentElement.scrollTop || document.body.scrollTop,
                        n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
                        o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
                        p = "body" == this.options.container ? 0 : k.offset().left;
                    e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
                }
                var q = this.getCalculatedOffset(e, h, i, j);
                this.applyPlacement(q, e), this.hoverState = null;
                var r = function () {
                    c.$element.trigger("shown.bs." + c.type)
                };
                a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
            }
        }, b.prototype.applyPlacement = function (b, c) {
            var d, e = this.tip(),
                f = e[0].offsetWidth,
                g = e[0].offsetHeight,
                h = parseInt(e.css("margin-top"), 10),
                i = parseInt(e.css("margin-left"), 10);
            isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
                using: function (a) {
                    e.css({
                        top: Math.round(a.top),
                        left: Math.round(a.left)
                    })
                }
            }, b), 0), e.addClass("in");
            var j = e[0].offsetWidth,
                k = e[0].offsetHeight;
            if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
                var l = 0;
                b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
            } else this.replaceArrow(k - g, k, "top");
            d && e.offset(b)
        }, b.prototype.replaceArrow = function (a, b, c) {
            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
        }, b.prototype.setContent = function () {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        }, b.prototype.hide = function () {
            function b() {
                "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
            }
            var c = this,
                d = this.tip(),
                e = a.Event("hide.bs." + this.type);
            return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
        }, b.prototype.fixTitle = function () {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        }, b.prototype.hasContent = function () {
            return this.getTitle()
        }, b.prototype.getPosition = function () {
            var b = this.$element[0];
            return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                width: b.offsetWidth,
                height: b.offsetHeight
            }, this.$element.offset())
        }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
            return "bottom" == a ? {
                top: b.top + b.height,
                left: b.left + b.width / 2 - c / 2
            } : "top" == a ? {
                top: b.top - d,
                left: b.left + b.width / 2 - c / 2
            } : "left" == a ? {
                top: b.top + b.height / 2 - d / 2,
                left: b.left - c
            } : {
                top: b.top + b.height / 2 - d / 2,
                left: b.left + b.width
            }
        }, b.prototype.getTitle = function () {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        }, b.prototype.tip = function () {
            return this.$tip = this.$tip || a(this.options.template)
        }, b.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, b.prototype.validate = function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, b.prototype.enable = function () {
            this.enabled = !0
        }, b.prototype.disable = function () {
            this.enabled = !1
        }, b.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, b.prototype.toggle = function (b) {
            var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
            c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
        }, b.prototype.destroy = function () {
            clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
        };
        var c = a.fn.tooltip;
        a.fn.tooltip = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.tooltip"),
                    f = "object" == typeof c && c;
                (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
            })
        }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
            return a.fn.tooltip = c, this
        }
    }(jQuery), + function (a) {
        "use strict";
        var b = function (a, b) {
            this.init("popover", a, b)
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
            return b.DEFAULTS
        }, b.prototype.setContent = function () {
            var a = this.tip(),
                b = this.getTitle(),
                c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
        }, b.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, b.prototype.getContent = function () {
            var a = this.$element,
                b = this.options;
            return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        }, b.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, b.prototype.tip = function () {
            return this.$tip || (this.$tip = a(this.options.template)), this.$tip
        };
        var c = a.fn.popover;
        a.fn.popover = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.popover"),
                    f = "object" == typeof c && c;
                (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]())
            })
        }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
            return a.fn.popover = c, this
        }
    }(jQuery), + function (a) {
        "use strict";

        function b(c, d) {
            var e, f = a.proxy(this.process, this);
            this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
        }
        b.DEFAULTS = {
            offset: 10
        }, b.prototype.refresh = function () {
            var b = this.$element[0] == window ? "offset" : "position";
            this.offsets = a([]), this.targets = a([]);
            var c = this;
            this.$body.find(this.selector).map(function () {
                var d = a(this),
                    e = d.data("target") || d.attr("href"),
                    f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null
            }).sort(function (a, b) {
                return a[0] - b[0]
            }).each(function () {
                c.offsets.push(this[0]), c.targets.push(this[1])
            })
        }, b.prototype.process = function () {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                d = c - this.$scrollElement.height(),
                e = this.offsets,
                f = this.targets,
                g = this.activeTarget;
            if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
            if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
            for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
        }, b.prototype.activate = function (b) {
            this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                d = a(c).parents("li").addClass("active");
            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
        };
        var c = a.fn.scrollspy;
        a.fn.scrollspy = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
            return a.fn.scrollspy = c, this
        }, a(window).on("load", function () {
            a('[data-spy="scroll"]').each(function () {
                var b = a(this);
                b.scrollspy(b.data())
            })
        })
    }(jQuery), + function (a) {
        "use strict";
        var b = function (b) {
            this.element = a(b)
        };
        b.prototype.show = function () {
            var b = this.element,
                c = b.closest("ul:not(.dropdown-menu)"),
                d = b.data("target");
            if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                var e = c.find(".active:last a")[0],
                    f = a.Event("show.bs.tab", {
                        relatedTarget: e
                    });
                if (b.trigger(f), !f.isDefaultPrevented()) {
                    var g = a(d);
                    this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
                        b.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: e
                        })
                    })
                }
            }
        }, b.prototype.activate = function (b, c, d) {
            function e() {
                f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
            }
            var f = c.find("> .active"),
                g = d && a.support.transition && f.hasClass("fade");
            g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
        };
        var c = a.fn.tab;
        a.fn.tab = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.tab");
                e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
            })
        }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
            return a.fn.tab = c, this
        }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
            b.preventDefault(), a(this).tab("show")
        })
    }(jQuery), + function (a) {
        "use strict";
        var b = function (c, d) {
            this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
        };
        b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
            offset: 0
        }, b.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(b.RESET).addClass("affix");
            var a = this.$window.scrollTop(),
                c = this.$element.offset();
            return this.pinnedOffset = c.top - a
        }, b.prototype.checkPositionWithEventLoop = function () {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        }, b.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var c = a(document).height(),
                    d = this.$window.scrollTop(),
                    e = this.$element.offset(),
                    f = this.options.offset,
                    g = f.top,
                    h = f.bottom;
                "top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
                var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
                if (this.affixed !== i) {
                    this.unpin && this.$element.css("top", "");
                    var j = "affix" + (i ? "-" + i : ""),
                        k = a.Event(j + ".bs.affix");
                    this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                        top: c - h - this.$element.height()
                    }))
                }
            }
        };
        var c = a.fn.affix;
        a.fn.affix = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("bs.affix"),
                    f = "object" == typeof c && c;
                e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
            return a.fn.affix = c, this
        }, a(window).on("load", function () {
            a('[data-spy="affix"]').each(function () {
                var b = a(this),
                    c = b.data();
                c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
            })
        })
    }(jQuery),
    function (a) {
        a.fn.extend({
            customSelect: function (b) {
                if ("undefined" == typeof document.body.style.maxHeight) return this;
                var c = {
                        customClass: "customSelect",
                        mapClass: !0,
                        mapStyle: !0
                    },
                    b = a.extend(c, b),
                    d = b.customClass,
                    e = function (b, c) {
                        var d = b.find(":selected"),
                            e = c.children(":first"),
                            g = d.html() || "&nbsp;";
                        e.html(g), d.attr("disabled") ? c.addClass(f("DisabledOption")) : c.removeClass(f("DisabledOption")), setTimeout(function () {
                            c.removeClass(f("Open")), a(document).off("mouseup.customSelect")
                        }, 60)
                    },
                    f = function (a) {
                        return d + a
                    };
                return this.each(function () {
                    var c = a(this),
                        g = a("<span />").addClass(f("Inner")),
                        h = a("<span />");
                    c.after(h.append(g)), h.addClass(d), b.mapClass && h.addClass(c.attr("class")), b.mapStyle && h.attr("style", c.attr("style")), c.addClass("hasCustomSelect").on("render.customSelect", function () {
                        e(c, h), c.css("width", "");
                        var a = parseInt(c.outerWidth(), 10) - (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
                        h.css({
                            display: "inline-block"
                        });
                        var b = h.outerHeight();
                        c.attr("disabled") ? h.addClass(f("Disabled")) : h.removeClass(f("Disabled")), g.css({
                            width: a,
                            display: "inline-block"
                        }), c.css({
                            "-webkit-appearance": "menulist-button",
                            width: h.outerWidth(),
                            position: "absolute",
                            opacity: 0,
                            height: b,
                            fontSize: h.css("font-size")
                        })
                    }).on("change.customSelect", function () {
                        h.addClass(f("Changed")), e(c, h)
                    }).on("keyup.customSelect", function (a) {
                        h.hasClass(f("Open")) ? (13 == a.which || 27 == a.which) && e(c, h) : (c.trigger("blur.customSelect"), c.trigger("focus.customSelect"))
                    }).on("mousedown.customSelect", function () {
                        h.removeClass(f("Changed"))
                    }).on("mouseup.customSelect", function (b) {
                        h.hasClass(f("Open")) || (a("." + f("Open")).not(h).length > 0 && "undefined" != typeof InstallTrigger ? c.trigger("focus.customSelect") : (h.addClass(f("Open")), b.stopPropagation(), a(document).one("mouseup.customSelect", function (b) {
                            b.target != c.get(0) && a.inArray(b.target, c.find("*").get()) < 0 ? c.trigger("blur.customSelect") : e(c, h)
                        })))
                    }).on("focus.customSelect", function () {
                        h.removeClass(f("Changed")).addClass(f("Focus"))
                    }).on("blur.customSelect", function () {
                        h.removeClass(f("Focus") + " " + f("Open"))
                    }).on("mouseenter.customSelect", function () {
                        h.addClass(f("Hover"))
                    }).on("mouseleave.customSelect", function () {
                        h.removeClass(f("Hover"))
                    }).trigger("render.customSelect")
                })
            }
        })
    }(jQuery), jQuery(document).ready(function (a) {
        function b() {
            c.width() < 980 && a("#mfilter").removeClass("collapse in").addClass("collapse"), c.width() >= 980 && a("#mfilter").removeClass("collapse").addClass("collapse in")
        }
        a(".searchHolder").hover(function () {
            a(this).find("#searchBox").show()
        }, function () {
            a(this).find("#searchBox").hide()
        }), a(".gl-app-store").click(function (b) {
            b.preventDefault(), track_outbound_link(a(this).attr("href"), "App Store Click", "Airport Guide", "Global Layout")
        }), a("#nwTabs a").click(function (b) {
            b.preventDefault(), a(this).tab("show")
        }), a('[data-toggle="tooltip"]').tooltip(), a("a[data-toggle=popover]").popover().click(function (a) {
            a.preventDefault()
        });
        var c = a(window);
        b()
    }), $(function () {
        $("#blog-headlines").tinyNav()
    }), (window._gsQueue || (window._gsQueue = [])).push(function () {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
                var d = [].slice,
                    e = function (a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = e.prototype.render
                    },
                    f = 1e-10,
                    g = c._internals,
                    h = g.isSelector,
                    i = g.isArray,
                    j = e.prototype = c.to({}, .1, {}),
                    k = [];
                e.version = "1.12.1", j.constructor = e, j.kill()._gc = !1, e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf, e.getTweensOf = c.getTweensOf, e.lagSmoothing = c.lagSmoothing, e.ticker = c.ticker, e.render = c.render, j.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
                }, j.updateTo = function (a, b) {
                    var d, e = this.ratio;
                    b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted)
                        if (b) this._initted = !1;
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var f = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var g, h = 1 / (1 - e), i = this._firstPT; i;) g = i.s + i.c, i.c *= h, i.s = g - i.c, i = i._next
                    }
                    return this
                }, j.render = function (a, b, c) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var d, e, h, i, j, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        q = this._totalTime,
                        r = this._cycle,
                        s = this._duration,
                        t = this._rawPrevTime;
                    if (a >= o ? (this._totalTime = o, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = s, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete"), 0 === s && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > t || t === f) && t !== a && (c = !0, t > f && (e = "onReverseComplete")), this._rawPrevTime = n = !b || a || t === a ? a : f)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== q || 0 === s && t > 0 && t !== f) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === s && (this._initted || !this.vars.lazy || c) && (t >= 0 && (c = !0), this._rawPrevTime = n = !b || a || t === a ? a : f)) : this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (i = s + this._repeatDelay, this._cycle = this._totalTime / i >> 0, 0 !== this._cycle && this._cycle === this._totalTime / i && this._cycle--, this._time = this._totalTime - this._cycle * i, this._yoyo && 0 !== (1 & this._cycle) && (this._time = s - this._time), this._time > s ? this._time = s : 0 > this._time && (this._time = 0)), this._easeType ? (j = this._time / s, l = this._easeType, m = this._easePower, (1 === l || 3 === l && j >= .5) && (j = 1 - j), 3 === l && (j *= 2), 1 === m ? j *= j : 2 === m ? j *= j * j : 3 === m ? j *= j * j * j : 4 === m && (j *= j * j * j * j), this.ratio = 1 === l ? 1 - j : 2 === l ? j : .5 > this._time / s ? j / 2 : 1 - j / 2) : this.ratio = this._ease.getRatio(this._time / s)), p === this._time && !c && r === this._cycle) return void(q !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || k)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = q, this._rawPrevTime = t, this._cycle = r, g.lazyTweens.push(this), void(this._lazy = a);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / s) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && a >= 0 && (this._active = !0), 0 === q && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === s) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || k))), h = this._firstPT; h;) h.f ? h.t[h.p](h.c * this.ratio + h.s) : h.t[h.p] = h.c * this.ratio + h.s, h = h._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._totalTime !== q || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || k)), this._cycle !== r && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || k)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || k), 0 === s && this._rawPrevTime === f && n !== f && (this._rawPrevTime = 0)))
                }, e.to = function (a, b, c) {
                    return new e(a, b, c)
                }, e.from = function (a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new e(a, b, c)
                }, e.fromTo = function (a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new e(a, b, d)
                }, e.staggerTo = e.allTo = function (a, b, f, g, j, l, m) {
                    g = g || 0;
                    var n, o, p, q, r = f.delay || 0,
                        s = [],
                        t = function () {
                            f.onComplete && f.onComplete.apply(f.onCompleteScope || this, arguments), j.apply(m || this, l || k)
                        };
                    for (i(a) || ("string" == typeof a && (a = c.selector(a) || a), h(a) && (a = d.call(a, 0))), n = a.length, p = 0; n > p; p++) {
                        o = {};
                        for (q in f) o[q] = f[q];
                        o.delay = r, p === n - 1 && j && (o.onComplete = t), s[p] = new e(a[p], b, o), r += g
                    }
                    return s
                }, e.staggerFrom = e.allFrom = function (a, b, c, d, f, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, e.staggerTo(a, b, c, d, f, g, h)
                }, e.staggerFromTo = e.allFromTo = function (a, b, c, d, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, e.staggerTo(a, b, d, f, g, h, i)
                }, e.delayedCall = function (a, b, c, d, f) {
                    return new e(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        onCompleteScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        onReverseCompleteScope: d,
                        immediateRender: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                }, e.set = function (a, b) {
                    return new e(a, 0, b)
                }, e.isTweening = function (a) {
                    return c.getTweensOf(a, !0).length > 0
                };
                var l = function (a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(l(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    m = e.getAllTweens = function (b) {
                        return l(a._rootTimeline, b).concat(l(a._rootFramesTimeline, b))
                    };
                e.killAll = function (a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = m(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                }, e.killChildTweensOf = function (a, b) {
                    if (null != a) {
                        var f, j, k, l, m, n = g.tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), h(a) && (a = d.call(a, 0)), i(a))
                            for (l = a.length; --l > -1;) e.killChildTweensOf(a[l], b);
                        else {
                            f = [];
                            for (k in n)
                                for (j = n[k].target.parentNode; j;) j === a && (f = f.concat(n[k].tweens)), j = j.parentNode;
                            for (m = f.length, l = 0; m > l; l++) b && f[l].totalTime(f[l].totalDuration()), f[l]._enabled(!1, !1)
                        }
                    }
                };
                var n = function (a, c, d, e) {
                    c = c !== !1, d = d !== !1, e = e !== !1;
                    for (var f, g, h = m(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return e.pauseAll = function (a, b, c) {
                    n(!0, a, b, c)
                }, e.resumeAll = function (a, b, c) {
                    n(!1, a, b, c)
                }, e.globalTimeScale = function (b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || f, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, j.progress = function (a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, j.totalProgress = function (a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, j.time = function (a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, j.duration = function (b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, j.totalDuration = function (a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, j.repeat = function (a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, j.repeatDelay = function (a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, j.yoyo = function (a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, e
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
                var d = function (a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var c, d, e = this.vars;
                        for (d in e) c = e[d], g(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        g(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                    },
                    e = 1e-10,
                    f = c._internals.isSelector,
                    g = c._internals.isArray,
                    h = [],
                    i = window._gsDefine.globals,
                    j = function (a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    k = function (a, b, c, d) {
                        a._timeline.pause(a._startTime), b && b.apply(d || a._timeline, c || h)
                    },
                    l = h.slice,
                    m = d.prototype = new b;
                return d.version = "1.12.1", m.constructor = d, m.kill()._gc = !1, m.to = function (a, b, d, e) {
                    var f = d.repeat && i.TweenMax || c;
                    return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                }, m.from = function (a, b, d, e) {
                    return this.add((d.repeat && i.TweenMax || c).from(a, b, d), e)
                }, m.fromTo = function (a, b, d, e, f) {
                    var g = e.repeat && i.TweenMax || c;
                    return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, m.staggerTo = function (a, b, e, g, h, i, k, m) {
                    var n, o = new d({
                        onComplete: i,
                        onCompleteParams: k,
                        onCompleteScope: m,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = l.call(a, 0)), g = g || 0, n = 0; a.length > n; n++) e.startAt && (e.startAt = j(e.startAt)), o.to(a[n], b, j(e), n * g);
                    return this.add(o, h)
                }, m.staggerFrom = function (a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, m.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, m.call = function (a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, m.set = function (a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function (a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g = new d(a),
                        h = g._timeline;
                    for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
                    return h.add(g, 0), g
                }, m.add = function (e, f, h, i) {
                    var j, k, l, m, n, o;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && g(e)) {
                            for (h = h || "normal", i = i || 0, j = f, k = e.length, l = 0; k > l; l++) g(m = e[l]) && (m = new d({
                                tweens: m
                            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === h ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === h && (m._startTime -= m.delay())), j += i;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                    return this
                }, m.remove = function (b) {
                    if (b instanceof a) return this._remove(b, !1);
                    if (b instanceof Array || b && b.push && g(b)) {
                        for (var c = b.length; --c > -1;) this.remove(b[c]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, m._remove = function (a, c) {
                    b.prototype._remove.call(this, a, c);
                    var d = this._last;
                    return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function (a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, m.insert = m.insertMultiple = function (a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, m.appendMultiple = function (a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, m.addLabel = function (a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, m.addPause = function (a, b, c, d) {
                    return this.call(k, ["{self}", b, c, d], this, a)
                }, m.removeLabel = function (a) {
                    return delete this._labels[a], this
                }, m.getLabelTime = function (a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, m._parseTimeOrLabel = function (b, c, d, e) {
                    var f;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && g(e)))
                        for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
                    if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
                    else {
                        if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
                    }
                    return Number(b) + c
                }, m.seek = function (a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, m.stop = function () {
                    return this.paused(!0)
                }, m.gotoAndPlay = function (a, b) {
                    return this.play(a, b)
                }, m.gotoAndStop = function (a, b) {
                    return this.pause(a, b)
                }, m.render = function (a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, i, j, k = this._dirty ? this.totalDuration() : this._totalDuration,
                        l = this._time,
                        m = this._startTime,
                        n = this._timeScale,
                        o = this._paused;
                    if (a >= k ? (this._totalTime = this._time = k, this._reversed || this._hasPausedChild() || (f = !0, i = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (j = !0, this._rawPrevTime > e && (i = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = k + 1e-4) : 1e-7 > a ? (this._totalTime = this._time = 0, (0 !== l || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (i = "onReverseComplete", f = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (j = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = 0, this._initted || (j = !0))) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== l && this._first || c || j) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== l && a > 0 && (this._active = !0), 0 === l && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= l)
                            for (d = this._first; d && (g = d._next, !this._paused || o);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = this._last; d && (g = d._prev, !this._paused || o);)(d._active || l >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), i && (this._gc || (m === this._startTime || n !== this._timeScale) && (0 === this._time || k >= this.totalDuration()) && (f && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || h)))
                    }
                }, m._hasPausedChild = function () {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, m.getChildren = function (a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) e > g._startTime || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, m.getTweensOf = function (a, b) {
                    var d, e, f = this._gc,
                        g = [],
                        h = 0;
                    for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0), g
                }, m._contains = function (a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, m.shiftChildren = function (a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, m._kill = function (a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, m.clear = function (a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function () {
                    for (var a = this._first; a;) a.invalidate(), a = a._next;
                    return this
                }, m._enabled = function (a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, m.duration = function (a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function (a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, 0 > e._startTime && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                            this._duration = this._totalDuration = d, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
                }, m.usesFrames = function () {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, m.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, d
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
                var d = function (b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    e = 1e-10,
                    f = [],
                    g = new c(null, null, 1, 0),
                    h = d.prototype = new a;
                return h.constructor = d, h.kill()._gc = !1, d.version = "1.12.1", h.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, h.addCallback = function (a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, h.removeCallback = function (a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, h.tweenTo = function (a, c) {
                    c = c || {};
                    var d, e, h, i = {
                        ease: g,
                        overwrite: c.delay ? 2 : 1,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (e in c) i[e] = c[e];
                    return i.time = this._parseTimeOrLabel(a), d = Math.abs(Number(i.time) - this._time) / this._timeScale || .001, h = new b(this, d, i), i.onStart = function () {
                        h.target.paused(!0), h.vars.time !== h.target.time() && d === h.duration() && h.duration(Math.abs(h.vars.time - h.target.time()) / h.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || h, c.onStartParams || f)
                    }, h
                }, h.tweenFromTo = function (a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        onCompleteScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, h.render = function (a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, g, h, i, j, k, l = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        n = this._time,
                        o = this._totalTime,
                        p = this._startTime,
                        q = this._timeScale,
                        r = this._rawPrevTime,
                        s = this._paused,
                        t = this._cycle;
                    if (a >= l ? (this._locked || (this._totalTime = l, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (g = !0, i = "onComplete", 0 === this._duration && (0 === a || 0 > r || r === e) && r !== a && this._first && (j = !0, r > e && (i = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = m, a = m + 1e-4)) : 1e-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== n || 0 === m && r !== e && (r > 0 || 0 > a && r >= 0) && !this._locked) && (i = "onReverseComplete", g = this._reversed), 0 > a ? (this._active = !1, 0 === m && r >= 0 && this._first && (j = !0), this._rawPrevTime = a) : (this._rawPrevTime = m || !b || a || this._rawPrevTime === a ? a : e, a = 0, this._initted || (j = !0))) : (0 === m && 0 > r && (j = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (k = m + this._repeatDelay, this._cycle = this._totalTime / k >> 0, 0 !== this._cycle && this._cycle === this._totalTime / k && this._cycle--, this._time = this._totalTime - this._cycle * k, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, a = m + 1e-4) : 0 > this._time ? this._time = a = 0 : a = this._time))), this._cycle !== t && !this._locked) {
                        var u = this._yoyo && 0 !== (1 & t),
                            v = u === (this._yoyo && 0 !== (1 & this._cycle)),
                            w = this._totalTime,
                            x = this._cycle,
                            y = this._rawPrevTime,
                            z = this._time;
                        if (this._totalTime = t * m, t > this._cycle ? u = !u : this._totalTime += m, this._time = n, this._rawPrevTime = 0 === m ? r - 1e-4 : r, this._cycle = t, this._locked = !0, n = u ? 0 : m, this.render(n, b, 0 === m), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f), v && (n = u ? m + 1e-4 : -1e-4, this.render(n, !0, !1)), this._locked = !1, this._paused && !s) return;
                        this._time = z, this._totalTime = w, this._cycle = x, this._rawPrevTime = y
                    }
                    if (!(this._time !== n && this._first || c || j)) return void(o !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== o && a > 0 && (this._active = !0), 0 === o && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), this._time >= n)
                        for (d = this._first; d && (h = d._next, !this._paused || s);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = h;
                    else
                        for (d = this._last; d && (h = d._prev, !this._paused || s);)(d._active || n >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = h;
                    this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), i && (this._locked || this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || f)))
                }, h.getActive = function (a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var d, e, f = [],
                        g = this.getChildren(a, b, c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                    return f
                }, h.getLabelAfter = function (a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, h.getLabelBefore = function (a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (a > b[c].time) return b[c].name;
                    return null
                }, h.getLabelsArray = function () {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function (a, b) {
                        return a.time - b.time
                    }), b
                }, h.progress = function (a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function (a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function (b) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function (a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, h.repeat = function (a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function (a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function (a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, h.currentLabel = function (a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function () {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = function (a, b, c, d) {
                        this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    g = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function (a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    i = function (a, e, f, g, i) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, i ? (t = b[j], u = c[j], v = .25 * (u + t) * e / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - .5 * (l - k) * e, p = l + .5 * (m - l) * e, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = h(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = h(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    j = function (a, d, e, g) {
                        var h, i, j, k, l, m, n = [];
                        if (g)
                            for (a = [g].concat(a), i = a.length; --i > -1;) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = g[d] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new f(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new f(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new f(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    k = function (a, f, h, k, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : g, null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                }
                            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = j(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                        if (!k) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q], d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                        }
                        for (n = w.length, q = h ? 4 : 1; --n > -1;) o = w[n], p = v[o], i(p, f, h, k, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    l = function (a, b, c) {
                        b = b || "soft";
                        var d, e, g, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || q + 1 > a.length) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], g = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new f(d, e, g, h) : new f(d, (2 * e + d) / 3, (2 * e + g) / 3, g);
                            i.length = n
                        }
                        return p
                    },
                    m = function (a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    n = function (a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            n = [];
                        for (c in a) m(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, n[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = n, h[f] = j, i = 0, n = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    o = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.2",
                        API: 2,
                        global: !0,
                        init: function (a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                m = i[0],
                                o = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = o ? o instanceof Array ? o : [["x", "y", "rotation", o === !0 ? 0 : Number(o) || 0]] : null;
                            for (d in m) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? k(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : l(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = n(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (o = this._autoRotate)
                                for (this._initialRotations = [], o[0] instanceof Array || (this._autoRotate = o = [o]), f = o.length; --f > -1;) {
                                    for (g = 0; 3 > g; g++) d = o[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                                    d = o[f][2], this._initialRotations[f] = this._func[d] ? this._func[d].call(this._target) : this._target[d]
                                }
                            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target,
                                p = b !== this._startRatio;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && b >= (this._l2 = k[++e]););
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e],
                                        this._s2 = l[this._s1 = this._si = 0]
                                } else if (this._l1 > b && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && this._l1 > b ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && l.length - 1 > e) {
                                    for (j = l.length - 1; j > e && b >= (this._s2 = l[++e]););
                                    this._s1 = l[e - 1], this._si = e
                                } else if (this._s1 > b && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && this._s1 > b ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = Math.round(i)), n[f] ? o[f](i) : o[f] = i;
                            if (this._autoRotate) {
                                var q, r, s, t, u, v, w, x = this._autoRotate;
                                for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    p = o.prototype;
                o.bezierThrough = k, o.cubicToQuadratic = h, o._autoCSS = !0, o.quadraticToCubic = function (a, b, c) {
                    return new f(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, o._cssRegister = function () {
                    var a = window._gsDefine.globals.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function (a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new o;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    p = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), p[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = p, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, p._roundProps = function (a, b) {
                    for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
                }, p._kill = function (a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
                var c, d, e, f, g = function () {
                        a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    h = {},
                    i = g.prototype = new a("css");
                i.constructor = g, g.version = "1.12.1", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", i = "px", g.suffixMap = {
                    top: i,
                    right: i,
                    bottom: i,
                    left: i,
                    width: i,
                    height: i,
                    fontSize: i,
                    padding: i,
                    margin: i,
                    perspective: i,
                    lineHeight: ""
                };
                var j, k, l, m, n, o, p = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    q = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    r = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    s = /[^\d\-\.]/g,
                    t = /(?:\d|\-|\+|=|#|\.)*/g,
                    u = /opacity *= *([^)]*)/i,
                    v = /opacity:([^;]*)/i,
                    w = /alpha\(opacity *=.+?\)/i,
                    x = /^(rgb|hsl)/,
                    y = /([A-Z])/g,
                    z = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    B = function (a, b) {
                        return b.toUpperCase()
                    },
                    C = /(?:Left|Right|Width)/i,
                    D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    F = /,(?=[^\)]*(?:\(|$))/gi,
                    G = Math.PI / 180,
                    H = 180 / Math.PI,
                    I = {},
                    J = document,
                    K = J.createElement("div"),
                    L = J.createElement("img"),
                    M = g._internals = {
                        _specialProps: h
                    },
                    N = navigator.userAgent,
                    O = function () {
                        var a, b = N.indexOf("Android"),
                            c = J.createElement("div");
                        return l = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === b || Number(N.substr(b + 8, 1)) > 3), n = l && 6 > Number(N.substr(N.indexOf("Version/") + 8, 1)), m = -1 !== N.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N) && (o = parseFloat(RegExp.$1)), c.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", a = c.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
                    }(),
                    P = function (a) {
                        return u.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    Q = function (a) {
                        window.console && console.log(a)
                    },
                    R = "",
                    S = "",
                    T = function (a, b) {
                        b = b || K;
                        var c, d, e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (S = 3 === d ? "ms" : c[d], R = "-" + S.toLowerCase() + "-", S + a) : null
                    },
                    U = J.defaultView ? J.defaultView.getComputedStyle : function () {},
                    V = g.getStyle = function (a, b, c, d, e) {
                        var f;
                        return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(y, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a)
                    },
                    W = M.convertToPixels = function (a, c, d, e, f) {
                        if ("px" === e || !e) return d;
                        if ("auto" === e || !d) return 0;
                        var h, i, j, k = C.test(c),
                            l = a,
                            m = K.style,
                            n = 0 > d;
                        if (n && (d = -d), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                        else {
                            if (m.cssText = "border:0 solid red;position:" + V(a, "position") + ";line-height:0;", "%" !== e && l.appendChild) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                            else {
                                if (l = a.parentNode || J.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                m[k ? "width" : "height"] = d + e
                            }
                            l.appendChild(K), h = parseFloat(K[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(K), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = 100 * (h / d)), 0 !== h || f || (h = W(a, c, d, e, !0))
                        }
                        return n ? -h : h
                    },
                    X = M.calculateOffset = function (a, b, c) {
                        if ("absolute" !== V(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = V(a, "margin" + d, c);
                        return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(t, "")) || 0)
                    },
                    Y = function (a, b) {
                        var c, d, e = {};
                        if (b = b || U(a, null))
                            if (c = b.length)
                                for (; --c > -1;) e[b[c].replace(z, B)] = b.getPropertyValue(b[c]);
                            else
                                for (c in b) e[c] = b[c];
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 === e[c] && (e[c.replace(z, B)] = b[c]);
                        return O || (e.opacity = P(a)), d = ya(a, b, !1), e.rotation = d.rotation, e.skewX = d.skewX, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, wa && (e.z = d.z, e.rotationX = d.rotationX, e.rotationY = d.rotationY, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
                    },
                    Z = function (a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(s, "") ? f : 0 : X(a, g), void 0 !== j[g] && (h = new la(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    $ = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    _ = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    aa = function (a, b, c) {
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = $[b],
                            f = e.length;
                        for (c = c || U(a, null); --f > -1;) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ba = function (a, b) {
                        (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                        var c = a.split(" "),
                            d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                            e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                        return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(s, "")), b.oy = parseFloat(e.replace(s, ""))), d + " " + e + (c.length > 2 ? " " + c[2] : "")
                    },
                    ca = function (a, b) {
                        return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
                    },
                    da = function (a, b) {
                        return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a)
                    },
                    ea = function (a, b, c, d) {
                        var e, f, g, h, i = 1e-6;
                        return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), g = Number(f[0].replace(s, "")) * (-1 === a.indexOf("rad") ? 1 : H) - ("=" === a.charAt(1) ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (0 | g / e) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (0 | g / e) * e)), h = b + g), i > h && h > -i && (h = 0), h
                    },
                    fa = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ga = function (a, b, c) {
                        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
                    },
                    ha = function (a) {
                        var b, c, d, e, f, g;
                        return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), fa[a] ? fa[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, 255 & a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(p), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = ga(e + 1 / 3, b, c), a[1] = ga(e, b, c), a[2] = ga(e - 1 / 3, b, c), a) : (a = a.match(p) || fa.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : fa.black
                    },
                    ia = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (i in fa) ia += "|" + i + "\\b";
                ia = RegExp(ia + ")", "gi");
                var ja = function (a, b, c, d) {
                        if (null == a) return function (a) {
                            return a
                        };
                        var e, f = b ? (a.match(ia) || [""])[0] : "",
                            g = a.split(f).join("").match(r) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(p, "") : "";
                        return k ? e = b ? function (a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && F.test(a)) {
                                for (o = a.replace(F, "|").split("|"), n = 0; o.length > n; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(ia) || [f])[0], m = a.split(b).join("").match(r) || [], n = m.length, k > n--)
                                for (; k > ++n;) m[n] = c ? m[0 | (n - 1) / 2] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function (a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && F.test(a)) {
                                for (f = a.replace(F, "|").split("|"), m = 0; f.length > m; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(r) || [], m = b.length, k > m--)
                                for (; k > ++m;) b[m] = c ? b[0 | (m - 1) / 2] : g[m];
                            return h + b.join(j) + i
                        } : function (a) {
                            return a
                        }
                    },
                    ka = function (a) {
                        return a = a.split(","),
                            function (b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    la = (M._setPluginRatio = function (a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h;) b = g[h.v], h.r ? b = Math.round(b) : i > b && b > -i && (b = 0), h.t[h.p] = b, h = h._next;
                        if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a)
                            for (h = f.firstMPT; h;) {
                                if (c = h.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; c.l > d; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c.e = e
                                    }
                                } else c.e = c.s + c.xs0;
                                h = h._next
                            }
                    }, function (a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    ma = (M._parseToProxy = function (a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = I;
                        for (c._transform = null, I = b, d = k = c.parse(a, b, d, e), I = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (1 >= d.type && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new la(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new la(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, M.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ma || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    na = g.parseComplex = function (a, b, c, d, e, f, g, h, i, k) {
                        c = c || f || "", g = new ma(a, b, 0, 0, g, k ? 2 : 1, null, !1, h, c, d), d += "";
                        var l, m, n, o, r, s, t, u, v, w, y, z, A = c.split(", ").join(",").split(" "),
                            B = d.split(", ").join(",").split(" "),
                            C = A.length,
                            D = j !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(F, ", ").split(" "), B = B.join(" ").replace(F, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), C = A.length), g.plugin = i, g.setRatio = k, l = 0; C > l; l++)
                            if (o = A[l], r = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, ca(r, u), r.replace(q, ""), D && -1 !== r.indexOf("px"), !0);
                            else if (e && ("#" === o.charAt(0) || fa[o] || x.test(o))) z = "," === r.charAt(r.length - 1) ? ")," : ")", o = ha(o), r = ha(r), v = o.length + r.length > 6, v && !O && 0 === r[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l]).join("transparent")) : (O || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], r[0] - o[0], ",", !0, !0).appendXtra("", o[1], r[1] - o[1], ",", !0).appendXtra("", o[2], r[2] - o[2], v ? "," : z, !0), v && (o = 4 > o.length ? 1 : o[3], g.appendXtra("", o, (4 > r.length ? 1 : r[3]) - o, z, !1)));
                        else if (s = o.match(p)) {
                            if (t = r.match(q), !t || t.length !== s.length) return g;
                            for (n = 0, m = 0; s.length > m; m++) y = s[m], w = o.indexOf(y, n), g.appendXtra(o.substr(n, w - n), Number(y), ca(t[m], y), "", D && "px" === o.substr(w + y.length, 2), 0 === m), n = w + y.length;
                            g["xs" + g.l] += o.substr(n)
                        } else g["xs" + g.l] += g.l ? " " + o : o;
                        if (-1 !== d.indexOf("=") && g.data) {
                            for (z = g.xs0 + g.data.s, l = 1; g.l > l; l++) z += g["xs" + l] + g.data["xn" + l];
                            g.e = z + g["xs" + l]
                        }
                        return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
                    },
                    oa = 9;
                for (i = ma.prototype, i.l = i.pr = 0; --oa > 0;) i["xn" + oa] = 0, i["xs" + oa] = "";
                i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function (a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ma(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var pa = function (a, b) {
                        b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || ja(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    qa = M._registerComplexSpecialProp = function (a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; f.length > d; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new pa(f[d], b)
                    },
                    ra = function (a) {
                        if (!h[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            qa(a, {
                                parser: function (a, c, d, e, f, g, i) {
                                    var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                                    return j ? (j._cssRegister(), h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                i = pa.prototype, i.parseComplex = function (a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (F.test(c) || F.test(b) ? (h = b.replace(F, "|").split("|"), i = c.replace(F, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (c = -1 === l ? i : h, c[g] += " " + m));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return na(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, i.parse = function (a, b, c, d, f, g) {
                    return this.parseComplex(a.style, this.format(V(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function (a, b, c) {
                    qa(a, {
                        parser: function (a, d, e, f, g, h) {
                            var i = new ma(a, e, 0, 0, g, 2, e, !1, c);
                            return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i
                        },
                        priority: c
                    })
                };
                var sa = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective".split(","),
                    ta = T("transform"),
                    ua = R + "transform",
                    va = T("transformOrigin"),
                    wa = null !== T("perspective"),
                    xa = M.Transform = function () {
                        this.skewY = 0
                    },
                    ya = M.getTransform = function (a, b, c, d) {
                        if (a._gsTransform && c && !d) return a._gsTransform;
                        var e, f, h, i, j, k, l, m, n, o, p, q, r, s = c ? a._gsTransform || new xa : new xa,
                            t = 0 > s.scaleX,
                            u = 2e-5,
                            v = 1e5,
                            w = 179.99,
                            x = w * G,
                            y = wa ? parseFloat(V(a, va, b, !1, "0 0 0").split(" ")[2]) || s.zOrigin || 0 : 0;
                        for (ta ? e = V(a, ua, b, !0) : a.currentStyle && (e = a.currentStyle.filter.match(D), e = e && 4 === e.length ? [e[0].substr(4), Number(e[2].substr(4)), Number(e[1].substr(4)), e[3].substr(4), s.x || 0, s.y || 0].join(",") : ""), f = (e || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], h = f.length; --h > -1;) i = Number(f[h]), f[h] = (j = i - (i |= 0)) ? (0 | j * v + (0 > j ? -.5 : .5)) / v + i : i;
                        if (16 === f.length) {
                            var z = f[8],
                                A = f[9],
                                B = f[10],
                                C = f[12],
                                E = f[13],
                                F = f[14];
                            if (s.zOrigin && (F = -s.zOrigin, C = z * F - f[12], E = A * F - f[13], F = B * F + s.zOrigin - f[14]), !c || d || null == s.rotationX) {
                                var I, J, K, L, M, N, O, P = f[0],
                                    Q = f[1],
                                    R = f[2],
                                    S = f[3],
                                    T = f[4],
                                    U = f[5],
                                    W = f[6],
                                    X = f[7],
                                    Y = f[11],
                                    Z = Math.atan2(W, B),
                                    $ = -x > Z || Z > x;
                                s.rotationX = Z * H, Z && (L = Math.cos(-Z), M = Math.sin(-Z), I = T * L + z * M, J = U * L + A * M, K = W * L + B * M, z = T * -M + z * L, A = U * -M + A * L, B = W * -M + B * L, Y = X * -M + Y * L, T = I, U = J, W = K), Z = Math.atan2(z, P), s.rotationY = Z * H, Z && (N = -x > Z || Z > x, L = Math.cos(-Z), M = Math.sin(-Z), I = P * L - z * M, J = Q * L - A * M, K = R * L - B * M, A = Q * M + A * L, B = R * M + B * L, Y = S * M + Y * L, P = I, Q = J, R = K), Z = Math.atan2(Q, U), s.rotation = Z * H, Z && (O = -x > Z || Z > x, L = Math.cos(-Z), M = Math.sin(-Z), P = P * L + T * M, J = Q * L + U * M, U = Q * -M + U * L, W = R * -M + W * L, Q = J), O && $ ? s.rotation = s.rotationX = 0 : O && N ? s.rotation = s.rotationY = 0 : N && $ && (s.rotationY = s.rotationX = 0), s.scaleX = (0 | Math.sqrt(P * P + Q * Q) * v + .5) / v, s.scaleY = (0 | Math.sqrt(U * U + A * A) * v + .5) / v, s.scaleZ = (0 | Math.sqrt(W * W + B * B) * v + .5) / v, s.skewX = 0, s.perspective = Y ? 1 / (0 > Y ? -Y : Y) : 0, s.x = C, s.y = E, s.z = F
                            }
                        } else if (!(wa && !d && f.length && s.x === f[4] && s.y === f[5] && (s.rotationX || s.rotationY) || void 0 !== s.x && "none" === V(a, "display", b))) {
                            var _ = f.length >= 6,
                                aa = _ ? f[0] : 1,
                                ba = f[1] || 0,
                                ca = f[2] || 0,
                                da = _ ? f[3] : 1;
                            s.x = f[4] || 0, s.y = f[5] || 0, k = Math.sqrt(aa * aa + ba * ba), l = Math.sqrt(da * da + ca * ca), m = aa || ba ? Math.atan2(ba, aa) * H : s.rotation || 0, n = ca || da ? Math.atan2(ca, da) * H + m : s.skewX || 0, o = k - Math.abs(s.scaleX || 0), p = l - Math.abs(s.scaleY || 0), Math.abs(n) > 90 && 270 > Math.abs(n) && (t ? (k *= -1, n += 0 >= m ? 180 : -180, m += 0 >= m ? 180 : -180) : (l *= -1, n += 0 >= n ? 180 : -180)), q = (m - s.rotation) % 180, r = (n - s.skewX) % 180, (void 0 === s.skewX || o > u || -u > o || p > u || -u > p || q > -w && w > q && !1 | q * v || r > -w && w > r && !1 | r * v) && (s.scaleX = k, s.scaleY = l, s.rotation = m, s.skewX = n), wa && (s.rotationX = s.rotationY = s.z = 0, s.perspective = parseFloat(g.defaultTransformPerspective) || 0, s.scaleZ = 1)
                        }
                        s.zOrigin = y;
                        for (h in s) u > s[h] && s[h] > -u && (s[h] = 0);
                        return c && (a._gsTransform = s), s
                    },
                    za = function (a) {
                        var b, c, d = this.data,
                            e = -d.rotation * G,
                            f = e + d.skewX * G,
                            g = 1e5,
                            h = (0 | Math.cos(e) * d.scaleX * g) / g,
                            i = (0 | Math.sin(e) * d.scaleX * g) / g,
                            j = (0 | Math.sin(f) * -d.scaleY * g) / g,
                            k = (0 | Math.cos(f) * d.scaleY * g) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, p, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                w = d.x,
                                x = d.y;
                            if (null != d.ox && (n = (d.oxp ? .01 * q * d.ox : d.ox) - q / 2, p = (d.oyp ? .01 * r * d.oy : d.oy) - r / 2, w += n - (n * h + p * i), x += p - (n * j + p * k)), s ? (n = q / 2, p = r / 2, v += ", Dx=" + (n - (n * h + p * i) + w) + ", Dy=" + (p - (n * j + p * k) + x) + ")") : v += ", sizingMethod='auto expand')", l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(E, v) : v + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === v.indexOf("Dx=0, Dy=0") || u.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                var y, z, A, B = 8 > o ? 1 : -1;
                                for (n = d.ieOffsetX || 0, p = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), oa = 0; 4 > oa; oa++) z = _[oa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : W(this.t, z, parseFloat(y), y.replace(t, "")) || 0, A = c !== d[z] ? 2 > oa ? -d.ieOffsetX : -d.ieOffsetY : 2 > oa ? n - d.ieOffsetX : p - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === oa || 2 === oa ? 1 : B))) + "px"
                            }
                        }
                    },
                    Aa = M.set3DTransformRatio = function (a) {
                        var b, c, d, e, f, g, h, i, j, k, l, n, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                            A = this.t.style,
                            B = z.rotation * G,
                            C = z.scaleX,
                            D = z.scaleY,
                            E = z.scaleZ,
                            F = z.perspective;
                        if (!(1 !== a && 0 !== a || "auto" !== z.force3D || z.rotationY || z.rotationX || 1 !== E || F || z.z)) return void Ba.call(this, a);
                        if (m) {
                            var H = 1e-4;
                            H > C && C > -H && (C = E = 2e-5), H > D && D > -H && (D = E = 2e-5), !F || z.z || z.rotationX || z.rotationY || (F = 0)
                        }
                        if (B || z.skewX) t = Math.cos(B), u = Math.sin(B), b = t, f = u, z.skewX && (B -= z.skewX * G, t = Math.cos(B), u = Math.sin(B), "simple" === z.skewType && (v = Math.tan(z.skewX * G), v = Math.sqrt(1 + v * v), t *= v, u *= v)), c = -u, g = t;
                        else {
                            if (!(z.rotationY || z.rotationX || 1 !== E || F)) return void(A[ta] = "translate3d(" + z.x + "px," + z.y + "px," + z.z + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""));
                            b = g = 1, c = f = 0
                        }
                        l = 1, d = e = h = i = j = k = n = o = p = 0, q = F ? -1 / F : 0, r = z.zOrigin, s = 1e5, B = z.rotationY * G, B && (t = Math.cos(B), u = Math.sin(B), j = l * -u, o = q * -u, d = b * u, h = f * u, l *= t, q *= t, b *= t, f *= t), B = z.rotationX * G, B && (t = Math.cos(B), u = Math.sin(B), v = c * t + d * u, w = g * t + h * u, x = k * t + l * u, y = p * t + q * u, d = c * -u + d * t, h = g * -u + h * t, l = k * -u + l * t, q = p * -u + q * t, c = v, g = w, k = x, p = y), 1 !== E && (d *= E, h *= E, l *= E, q *= E), 1 !== D && (c *= D, g *= D, k *= D, p *= D), 1 !== C && (b *= C, f *= C, j *= C, o *= C), r && (n -= r, e = d * n, i = h * n, n = l * n + r), e = (v = (e += z.x) - (e |= 0)) ? (0 | v * s + (0 > v ? -.5 : .5)) / s + e : e, i = (v = (i += z.y) - (i |= 0)) ? (0 | v * s + (0 > v ? -.5 : .5)) / s + i : i, n = (v = (n += z.z) - (n |= 0)) ? (0 | v * s + (0 > v ? -.5 : .5)) / s + n : n, A[ta] = "matrix3d(" + [(0 | b * s) / s, (0 | f * s) / s, (0 | j * s) / s, (0 | o * s) / s, (0 | c * s) / s, (0 | g * s) / s, (0 | k * s) / s, (0 | p * s) / s, (0 | d * s) / s, (0 | h * s) / s, (0 | l * s) / s, (0 | q * s) / s, e, i, n, F ? 1 + -n / F : 1].join(",") + ")"
                    },
                    Ba = M.set2DTransformRatio = function (a) {
                        var b, c, d, e, f, g = this.data,
                            h = this.t,
                            i = h.style;
                        return g.rotationX || g.rotationY || g.z || g.force3D === !0 || "auto" === g.force3D && 1 !== a && 0 !== a ? (this.setRatio = Aa, void Aa.call(this, a)) : void(g.rotation || g.skewX ? (b = g.rotation * G, c = b - g.skewX * G, d = 1e5, e = g.scaleX * d, f = g.scaleY * d, i[ta] = "matrix(" + (0 | Math.cos(b) * e) / d + "," + (0 | Math.sin(b) * e) / d + "," + (0 | Math.sin(c) * -f) / d + "," + (0 | Math.cos(c) * f) / d + "," + g.x + "," + g.y + ")") : i[ta] = "matrix(" + g.scaleX + ",0,0," + g.scaleY + "," + g.x + "," + g.y + ")")
                    };
                qa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType", {
                    parser: function (a, b, c, d, f, h, i) {
                        if (d._transform) return f;
                        var j, k, l, m, n, o, p, q = d._transform = ya(a, e, !0, i.parseTransform),
                            r = a.style,
                            s = 1e-6,
                            t = sa.length,
                            u = i,
                            v = {};
                        if ("string" == typeof u.transform && ta) l = K.style, l[ta] = u.transform, l.display = "block", l.position = "absolute", J.body.appendChild(K), j = ya(K, null, !1), J.body.removeChild(K);
                        else if ("object" == typeof u) {
                            if (j = {
                                    scaleX: da(null != u.scaleX ? u.scaleX : u.scale, q.scaleX),
                                    scaleY: da(null != u.scaleY ? u.scaleY : u.scale, q.scaleY),
                                    scaleZ: da(u.scaleZ, q.scaleZ),
                                    x: da(u.x, q.x),
                                    y: da(u.y, q.y),
                                    z: da(u.z, q.z),
                                    perspective: da(u.transformPerspective, q.perspective)
                                }, p = u.directionalRotation, null != p)
                                if ("object" == typeof p)
                                    for (l in p) u[l] = p[l];
                                else u.rotation = p;
                            j.rotation = ea("rotation" in u ? u.rotation : "shortRotation" in u ? u.shortRotation + "_short" : "rotationZ" in u ? u.rotationZ : q.rotation, q.rotation, "rotation", v), wa && (j.rotationX = ea("rotationX" in u ? u.rotationX : "shortRotationX" in u ? u.shortRotationX + "_short" : q.rotationX || 0, q.rotationX, "rotationX", v), j.rotationY = ea("rotationY" in u ? u.rotationY : "shortRotationY" in u ? u.shortRotationY + "_short" : q.rotationY || 0, q.rotationY, "rotationY", v)), j.skewX = null == u.skewX ? q.skewX : ea(u.skewX, q.skewX), j.skewY = null == u.skewY ? q.skewY : ea(u.skewY, q.skewY), (k = j.skewY - q.skewY) && (j.skewX += k, j.rotation += k)
                        }
                        for (wa && null != u.force3D && (q.force3D = u.force3D, o = !0), q.skewType = u.skewType || q.skewType || g.defaultSkewType, n = q.force3D || q.z || q.rotationX || q.rotationY || j.z || j.rotationX || j.rotationY || j.perspective, n || null == u.scale || (j.scaleZ = 1); --t > -1;) c = sa[t], m = j[c] - q[c], (m > s || -s > m || null != I[c]) && (o = !0, f = new ma(q, c, q[c], m, f), c in v && (f.e = v[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                        return m = u.transformOrigin, (m || wa && n && q.zOrigin) && (ta ? (o = !0, c = va, m = (m || V(a, c, e, !1, "50% 50%")) + "", f = new ma(r, c, 0, 0, f, -1, "transformOrigin"), f.b = r[c], f.plugin = h, wa ? (l = q.zOrigin, m = m.split(" "), q.zOrigin = (m.length > 2 && (0 === l || "0px" !== m[2]) ? parseFloat(m[2]) : l) || 0, f.xs0 = f.e = m[0] + " " + (m[1] || "50%") + " 0px", f = new ma(q, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = q.zOrigin) : f.xs0 = f.e = m) : ba(m + "", q)), o && (d._transformType = n || 3 === this._transformType ? 3 : 2), f
                    },
                    prefix: !0
                }), qa("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), qa("borderRadius", {
                    defaultValue: "0px",
                    parser: function (a, b, c, f, g) {
                        b = this.format(b);
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            y = a.style;
                        for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), i = 0; x.length > i; i++) this.p.indexOf("border") && (x[i] = T(x[i])), l = k = V(a, x[i], e, !1, "0px"), -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = W(a, "borderLeft", n, s), v = W(a, "borderTop", n, s), "%" === r ? (l = 100 * (u / p) + "%", k = 100 * (v / q) + "%") : "em" === r ? (w = W(a, "borderLeft", 1, "em"), l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, j = parseFloat(k) + o + r)), g = na(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: ja("0px 0px 0px 0px", !1, !0)
                }), qa("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            p = e || U(a, null),
                            q = this.format((p ? o ? p.getPropertyValue(n + "-x") + " " + p.getPropertyValue(n + "-y") : p.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = V(a, "backgroundImage").replace(A, ""), m && "none" !== m)) {
                            for (h = q.split(" "), i = r.split(" "), L.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - L.width : a.offsetHeight - L.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : 100 * (parseFloat(q) / l) + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ba
                }), qa("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ba
                }), qa("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), qa("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), qa("transformStyle", {
                    prefix: !0
                }), qa("backfaceVisibility", {
                    prefix: !0
                }), qa("userSelect", {
                    prefix: !0
                }), qa("margin", {
                    parser: ka("marginTop,marginRight,marginBottom,marginLeft")
                }), qa("padding", {
                    parser: ka("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), qa("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > o ? (i = a.currentStyle, j = 8 > o ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                    }
                }), qa("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), qa("autoRound,strictUnits", {
                    parser: function (a, b, c, d, e) {
                        return e
                    }
                }), qa("border", {
                    defaultValue: "0px solid #000",
                    parser: function (a, b, c, d, f, g) {
                        return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", e, !1, "0px") + " " + V(a, "borderTopStyle", e, !1, "solid") + " " + V(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
                    },
                    color: !0,
                    formatter: function (a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(ia) || ["#000"])[0]
                    }
                }), qa("borderWidth", {
                    parser: ka("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), qa("float,cssFloat,styleFloat", {
                    parser: function (a, b, c, d, e) {
                        var f = a.style,
                            g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                        return new ma(f, g, 0, 0, e, -1, c, !1, 0, f[g], b)
                    }
                });
                var Ca = function (a) {
                    var b, c = this.t,
                        d = c.filter || V(this.data, "filter"),
                        e = 0 | this.s + this.c * a;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !V(this.data, "filter")) : (c.filter = d.replace(w, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(u, "opacity=" + e))
                };
                qa("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (a, b, c, d, f, g) {
                        var h = parseFloat(V(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === V(a, "visibility", e) && 0 !== b && (h = 0), O ? f = new ma(i, "opacity", h, b - h, f) : (f = new ma(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ca), j && (f = new ma(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var Da = function (a, b) {
                        b && (a.removeProperty ? ("ms" === b.substr(0, 2) && (b = "M" + b.substr(1)), a.removeProperty(b.replace(y, "-$1").toLowerCase())) : a.removeAttribute(b))
                    },
                    Ea = function (a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Da(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                qa("className", {
                    parser: function (a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (g = f._classNamePT = new ma(a, d, 0, 0, g, 2), g.setRatio = Ea, g.pr = -11, c = !0, g.b = o, k = Y(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), f._tween._duration && (a.setAttribute("class", g.e), j = Z(a, k, Y(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)), g
                    }
                });
                var Fa = function (a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f = this.t.style,
                            g = h.transform.parse;
                        if ("all" === this.e) f.cssText = "", e = !0;
                        else
                            for (b = this.e.split(","), d = b.length; --d > -1;) c = b[d], h[c] && (h[c].parse === g ? e = !0 : c = "transformOrigin" === c ? va : h[c].p), Da(f, c);
                        e && (Da(f, ta), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (qa("clearProps", {
                        parser: function (a, b, d, e, f) {
                            return f = new ma(a, d, 0, 0, f, 2), f.setRatio = Fa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), i = "bezier,throwProps,physicsProps,physics2D".split(","), oa = i.length; oa--;) ra(i[oa]);
                i = g.prototype, i._firstPT = null, i._onInitTween = function (a, b, h) {
                    if (!a.nodeType) return !1;
                    this._target = a, this._tween = h, this._vars = b, j = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = U(a, ""), f = this._overwriteProps;
                    var i, m, o, p, q, r, s, t, u, w = a.style;
                    if (k && "" === w.zIndex && (i = V(a, "zIndex", e), ("auto" === i || "" === i) && this._addLazySet(w, "zIndex", 0)), "string" == typeof b && (p = w.cssText, i = Y(a, e), w.cssText = p + ";" + b, i = Z(a, i, Y(a)).difs, !O && v.test(b) && (i.opacity = parseFloat(RegExp.$1)), b = i, w.cssText = p), this._firstPT = m = this.parse(a, b, null), this._transformType) {
                        for (u = 3 === this._transformType, ta ? l && (k = !0, "" === w.zIndex && (s = V(a, "zIndex", e), ("auto" === s || "" === s) && this._addLazySet(w, "zIndex", 0)), n && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : w.zoom = 1, o = m; o && o._next;) o = o._next;
                        t = new ma(a, "transform", 0, 0, null, 2), this._linkCSSP(t, null, o), t.setRatio = u && wa ? Aa : ta ? Ba : za, t.data = this._transform || ya(a, e, !0), f.pop()
                    }
                    if (c) {
                        for (; m;) {
                            for (r = m._next, o = p; o && o.pr > m.pr;) o = o._next;
                            (m._prev = o ? o._prev : q) ? m._prev._next = m: p = m, (m._next = o) ? o._prev = m : q = m, m = r
                        }
                        this._firstPT = p
                    }
                    return !0
                }, i.parse = function (a, b, c, f) {
                    var g, i, k, l, m, n, o, p, q, r, s = a.style;
                    for (g in b) n = b[g], i = h[g], i ? c = i.parse(a, n, g, this, c, f, b) : (m = V(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && x.test(n) ? (q || (n = ha(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = na(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (k = parseFloat(m), o = k || 0 === k ? m.substr((k + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (k = aa(a, g, e), o = "px") : "left" === g || "top" === g ? (k = X(a, g, e), o = "px") : (k = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(t, "")) : (l = parseFloat(n), p = q ? n.substr((l + "").length) || "" : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + k : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && k && (k = W(a, g, k, o), "%" === p ? (k /= W(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = k + "%")) : "em" === p ? k /= W(a, g, 1, "em") : "px" !== p && (l = W(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + k + p)), r && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== s[g] && (n || "NaN" != n + "" && null != n) ? (c = new ma(s, g, l || k || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : Q("invalid " + g + " tween value: " + b[g]) : (c = new ma(s, g, k, l - k, c, 0, g, j !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = na(s, g, m, n, !0, null, c, 0, f)),
                        f && c && !c.plugin && (c.plugin = f);
                    return c
                }, i.setRatio = function (a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), e = e._next
                }, i._enableTransforms = function (a) {
                    this._transformType = a || 3 === this._transformType ? 3 : 2, this._transform = this._transform || ya(this._target, e, !0)
                };
                var Ga = function () {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                i._addLazySet = function (a, b, c) {
                    var d = this._firstPT = new ma(a, b, 0, 0, this._firstPT, 2);
                    d.e = c, d.setRatio = Ga, d.data = this
                }, i._linkCSSP = function (a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                }, i._kill = function (b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
                };
                var Ha = function (a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Ha(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Ha(f, b, c)
                };
                return g.cascadeTo = function (a, c, d) {
                    var e, f, g, h = b.to(a, c, d),
                        i = [h],
                        j = [],
                        k = [],
                        l = [],
                        m = b._internals.reservedProps;
                    for (a = h._targets || h.target, Ha(a, j, l), h.render(c, !0), Ha(a, k), h.render(0, !0), h._enabled(!0), e = l.length; --e > -1;)
                        if (f = Z(l[e], j[e], k[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) m[g] && (f[g] = d[g]);
                            i.push(b.to(l[e], c, f))
                        }
                    return i
                }, a.activate([g]), g
            }, !0),
            function () {
                var a = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function (a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = a.prototype;
                b._onInitAllProps = function () {
                    for (var a, b, c, d = this._tween, e = d.vars.roundProps instanceof Array ? d.vars.roundProps : d.vars.roundProps.split(","), f = e.length, g = {}, h = d._propLookup.roundProps; --f > -1;) g[e[f]] = 1;
                    for (f = e.length; --f > -1;)
                        for (a = e[f], b = d._firstPT; b;) c = b._next, b.pg ? b.t._roundProps(g, !0) : b.n === a && (this._add(b.t, a, b.s, b.c), c && (c._prev = b._prev), b._prev ? b._prev._next = c : d._firstPT === b && (d._firstPT = c), b._next = b._prev = null, d._propLookup[a] = h), b = c;
                    return !1
                }, b._add = function (a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.2",
                init: function (a, b) {
                    var c, d, e;
                    if ("function" != typeof a.setAttribute) return !1;
                    this._target = a, this._proxy = {}, this._start = {}, this._end = {};
                    for (c in b) this._start[c] = this._proxy[c] = d = a.getAttribute(c), e = this._addTween(this._proxy, c, parseFloat(d), b[c], c), this._end[c] = e ? e.s + e.c : b[c], this._overwriteProps.push(c);
                    return !0
                },
                set: function (a) {
                    this._super.setRatio.call(this, a);
                    for (var b, c = this._overwriteProps, d = c.length, e = 1 === a ? this._end : a ? this._proxy : this._start; --d > -1;) b = c[d], this._target.setAttribute(b, e[b] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                version: "0.2.0",
                init: function (a, b) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var c, d, e, f, g, h, i = b.useRadians === !0 ? 2 * Math.PI : 360,
                        j = 1e-6;
                    for (c in b) "useRadians" !== c && (h = (b[c] + "").split("_"), d = h[0], e = parseFloat("function" != typeof a[c] ? a[c] : a[c.indexOf("set") || "function" != typeof a["get" + c.substr(3)] ? c : "get" + c.substr(3)]()), f = this.finals[c] = "string" == typeof d && "=" === d.charAt(1) ? e + parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) || 0, g = f - e, h.length && (d = h.join("_"), -1 !== d.indexOf("short") && (g %= i, g !== g % (i / 2) && (g = 0 > g ? g + i : g - i)), -1 !== d.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * i) % i - (0 | g / i) * i : -1 !== d.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * i) % i - (0 | g / i) * i)), (g > j || -j > g) && (this._addTween(a, c, e, e + g, c), this._overwriteProps.push(c)));
                    return !0
                },
                set: function (a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function (a) {
                var b, c, d, e = window.GreenSockGlobals || window,
                    f = e.com.greensock,
                    g = 2 * Math.PI,
                    h = Math.PI / 2,
                    i = f._class,
                    j = function (b, c) {
                        var d = i("easing." + b, function () {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    k = a.register || function () {},
                    l = function (a, b, c, d) {
                        var e = i("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return k(e, a), e
                    },
                    m = function (a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    n = function (b, c) {
                        var d = i("easing." + b, function (a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function (a) {
                            return new d(a)
                        }, d
                    },
                    o = l("Back", n("BackOut", function (a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), n("BackIn", function (a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), n("BackInOut", function (a) {
                        return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    p = i("easing.SlowMo", function (a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    q = p.prototype = new a;
                return q.constructor = p, q.getRatio = function (a) {
                    var b = a + (.5 - a) * this._p;
                    return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, p.ease = new p(.7, .7), q.config = p.config = function (a, b, c) {
                    return new p(a, b, c)
                }, b = i("easing.SteppedEase", function (a) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
                }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function (a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
                }, q.config = b.config = function (a) {
                    return new b(a)
                }, c = i("easing.RoughEase", function (b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = .5 * f * f * r) : (f = 2 * (1 - c), e = .5 * f * f * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function (a, b) {
                            return a.x - b.x
                        }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                    this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
                }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function (a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && b.t >= a;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, q.config = function (a) {
                    return new c(a)
                }, c.ease = new c, l("Bounce", j("BounceOut", function (a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), j("BounceIn", function (a) {
                    return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), j("BounceInOut", function (a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), l("Circ", j("CircOut", function (a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), j("CircIn", function (a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), j("CircInOut", function (a) {
                    return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), d = function (b, c, d) {
                    var e = i("easing." + b, function (a, b) {
                            this._p1 = a || 1, this._p2 = b || d, this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
                        return new e(a, b)
                    }, e
                }, l("Elastic", d("ElasticOut", function (a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * g / this._p2) + 1
                }, .3), d("ElasticIn", function (a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2))
                }, .3), d("ElasticInOut", function (a) {
                    return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) + 1
                }, .45)), l("Expo", j("ExpoOut", function (a) {
                    return 1 - Math.pow(2, -10 * a)
                }), j("ExpoIn", function (a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), j("ExpoInOut", function (a) {
                    return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), l("Sine", j("SineOut", function (a) {
                    return Math.sin(a * h)
                }), j("SineIn", function (a) {
                    return -Math.cos(a * h) + 1
                }), j("SineInOut", function (a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), i("easing.EaseLookup", {
                    find: function (b) {
                        return a.map[b]
                    }
                }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
            }, !0)
    }),
    function (a) {
        "use strict";
        var b = a.GreenSockGlobals || a;
        if (!b.TweenLite) {
            var c, d, e, f, g, h = function (a) {
                    var c, d = a.split("."),
                        e = b;
                    for (c = 0; d.length > c; c++) e[d[c]] = e = e[d[c]] || {};
                    return e
                },
                i = h("com.greensock"),
                j = 1e-10,
                k = [].slice,
                l = function () {},
                m = function () {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function (c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                n = {},
                o = function (c, d, e, f) {
                    this.sc = n[c] ? n[c].sc : [], n[c] = this, this.gsClass = null, this.func = e;
                    var g = [];
                    this.check = function (i) {
                        for (var j, k, l, m, p = d.length, q = p; --p > -1;)(j = n[d[p]] || new o(d[p], [])).gsClass ? (g[p] = j.gsClass, q--) : i && j.sc.push(this);
                        if (0 === q && e)
                            for (k = ("com.greensock." + c).split("."), l = k.pop(), m = h(k.join("."))[l] = this.gsClass = e.apply(e, g), f && (b[l] = m, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + c.split(".").join("/"), [], function () {
                                    return m
                                }) : "undefined" != typeof module && module.exports && (module.exports = m)), p = 0; this.sc.length > p; p++) this.sc[p].check()
                    }, this.check(!0)
                },
                p = a._gsDefine = function (a, b, c, d) {
                    return new o(a, b, c, d)
                },
                q = i._class = function (a, b, c) {
                    return b = b || function () {}, p(a, [], function () {
                        return b
                    }, c), b
                };
            p.globals = b;
            var r = [0, 0, 1, 1],
                s = [],
                t = q("easing.Ease", function (a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? r.concat(b) : r
                }, !0),
                u = t.map = {},
                v = t.register = function (a, b, c, d) {
                    for (var e, f, g, h, j = b.split(","), k = j.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                        for (f = j[k], e = d ? q("easing." + f, null, !0) : i.easing[f] || {}, g = l.length; --g > -1;) h = l[g], u[f + "." + h] = u[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for (e = t.prototype, e._calcEnd = !1, e.getRatio = function (a) {
                    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                }, c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], d = c.length; --d > -1;) e = c[d] + ",Power" + d, v(new t(null, null, 1, d), e, "easeOut", !0), v(new t(null, null, 2, d), e, "easeIn" + (0 === d ? ",easeNone" : "")), v(new t(null, null, 3, d), e, "easeInOut");
            u.linear = i.easing.Linear.easeIn, u.swing = i.easing.Quad.easeInOut;
            var w = q("events.EventDispatcher", function (a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            e = w.prototype, e.addEventListener = function (a, b, c, d, e) {
                e = e || 0;
                var h, i, j = this._listeners[a],
                    k = 0;
                for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) h = j[i], h.c === b && h.s === c ? j.splice(i, 1) : 0 === k && e > h.pr && (k = i + 1);
                j.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                }), this !== f || g || f.wake()
            }, e.removeEventListener = function (a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1)
            }, e.dispatchEvent = function (a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c)
            };
            var x = a.requestAnimationFrame,
                y = a.cancelAnimationFrame,
                z = Date.now || function () {
                    return (new Date).getTime()
                },
                A = z();
            for (c = ["ms", "moz", "webkit", "o"], d = c.length; --d > -1 && !x;) x = a[c[d] + "RequestAnimationFrame"], y = a[c[d] + "CancelAnimationFrame"] || a[c[d] + "CancelRequestAnimationFrame"];
            q("Ticker", function (a, b) {
                var c, d, e, h, i, k = this,
                    m = z(),
                    n = b !== !1 && x,
                    o = 500,
                    p = 33,
                    q = function (a) {
                        var b, f, g = z() - A;
                        g > o && (m += g - p), A += g, k.time = (A - m) / 1e3, b = k.time - i, (!c || b > 0 || a === !0) && (k.frame++, i += b + (b >= h ? .004 : h - b), f = !0), a !== !0 && (e = d(q)), f && k.dispatchEvent("tick")
                    };
                w.call(k), k.time = k.frame = 0, k.tick = function () {
                    q(!0)
                }, k.lagSmoothing = function (a, b) {
                    o = a || 1 / j, p = Math.min(b, o, 0)
                }, k.sleep = function () {
                    null != e && (n && y ? y(e) : clearTimeout(e), d = l, e = null, k === f && (g = !1))
                }, k.wake = function () {
                    null !== e ? k.sleep() : k.frame > 10 && (A = z() - o + 5), d = 0 === c ? l : n && x ? x : function (a) {
                        return setTimeout(a, 0 | 1e3 * (i - k.time) + 1)
                    }, k === f && (g = !0), q(2)
                }, k.fps = function (a) {
                    return arguments.length ? (c = a, h = 1 / (c || 60), i = this.time + h, void k.wake()) : c
                }, k.useRAF = function (a) {
                    return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n
                }, k.fps(a), setTimeout(function () {
                    n && (!e || 5 > k.frame) && k.useRAF(!1)
                }, 1500)
            }), e = i.Ticker.prototype = new i.events.EventDispatcher, e.constructor = i.Ticker;
            var B = q("core.Animation", function (a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, Q) {
                    g || f.wake();
                    var c = this.vars.useFrames ? P : Q;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            f = B.ticker = new i.Ticker, e = B.prototype, e._dirty = e._gc = e._initted = e._paused = !1, e._totalTime = e._time = 0, e._rawPrevTime = -1, e._next = e._last = e._onUpdate = e._timeline = e.timeline = null, e._paused = !1;
            var C = function () {
                g && z() - A > 2e3 && f.wake(), setTimeout(C, 2e3)
            };
            C(), e.play = function (a, b) {
                return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
            }, e.pause = function (a, b) {
                return null != a && this.seek(a, b), this.paused(!0)
            }, e.resume = function (a, b) {
                return null != a && this.seek(a, b), this.paused(!1)
            }, e.seek = function (a, b) {
                return this.totalTime(Number(a), b !== !1)
            }, e.restart = function (a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
            }, e.reverse = function (a, b) {
                return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, e.render = function () {}, e.invalidate = function () {
                return this
            }, e.isActive = function () {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
            }, e._enabled = function (a, b) {
                return g || f.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, e._kill = function () {
                return this._enabled(!1, !1)
            }, e.kill = function (a, b) {
                return this._kill(a, b), this
            }, e._uncache = function (a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, e._swapSelfInParams = function (a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, e.eventCallback = function (a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = m(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, e.delay = function (a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, e.duration = function (a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, e.totalDuration = function (a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, e.time = function (a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, e.totalTime = function (a, b, c) {
                if (g || f.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (this.render(a, b, !1), H.length && R())
                }
                return this
            }, e.progress = e.totalProgress = function (a, b) {
                return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
            }, e.startTime = function (a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, e.timeScale = function (a) {
                if (!arguments.length) return this._timeScale;
                if (a = a || j, this._timeline && this._timeline.smoothChildTiming) {
                    var b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = c - (c - this._startTime) * this._timeScale / a
                }
                return this._timeScale = a, this._uncache(!1)
            }, e.reversed = function (a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, e.paused = function (a) {
                if (!arguments.length) return this._paused;
                if (a != this._paused && this._timeline) {
                    g || a || f.wake();
                    var b = this._timeline,
                        c = b.rawTime(),
                        d = c - this._pauseTime;
                    !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !a && this._enabled(!0, !1), this
            };
            var D = q("core.SimpleTimeline", function (a) {
                B.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            e = D.prototype = new B, e.constructor = D, e.kill()._gc = !1, e._first = e._last = null, e._sortChildren = !1, e.add = e.insert = function (a, b) {
                var c, d;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                    for (d = a._startTime; c && c._startTime > d;) c = c._prev;
                return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
            }, e._remove = function (a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
            }, e.render = function (a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, e.rawTime = function () {
                return g || f.wake(), this._totalTime
            };
            var E = q("TweenLite", function (b, c, d) {
                    if (B.call(this, c, d), this.render = E.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : E.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? O[E.defaultOverwrite] : "number" == typeof i ? i >> 0 : O[i], (h || b instanceof Array || b.push && m(b)) && "number" != typeof b[0])
                        for (this._targets = g = k.call(b, 0), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(k.call(f, 0))) : (this._siblings[e] = S(f, this, !1), 1 === i && this._siblings[e].length > 1 && T(f, this, null, 1, this._siblings[e])) : (f = g[e--] = E.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = S(b, this, !1), 1 === i && this._siblings.length > 1 && T(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -j, this.render(-this._delay))
                }, !0),
                F = function (b) {
                    return b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                },
                G = function (a, b) {
                    var c, d = {};
                    for (c in a) N[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!K[c] || K[c] && K[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                };
            e = E.prototype = new B, e.constructor = E, e.kill()._gc = !1, e.ratio = 0, e._firstPT = e._targets = e._overwrittenProps = e._startAt = null, e._notifyPluginsOfEnabled = e._lazy = !1, E.version = "1.12.1", E.defaultEase = e._ease = new t(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = f, E.autoSleep = !0, E.lagSmoothing = function (a, b) {
                f.lagSmoothing(a, b)
            }, E.selector = a.$ || a.jQuery || function (b) {
                return a.$ ? (E.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
            };
            var H = [],
                I = {},
                J = E._internals = {
                    isArray: m,
                    isSelector: F,
                    lazyTweens: H
                },
                K = E._plugins = {},
                L = J.tweenLookup = {},
                M = 0,
                N = J.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                },
                O = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                P = B._rootFramesTimeline = new D,
                Q = B._rootTimeline = new D,
                R = function () {
                    var a = H.length;
                    for (I = {}; --a > -1;) c = H[a], c && c._lazy !== !1 && (c.render(c._lazy, !1, !0), c._lazy = !1);
                    H.length = 0
                };
            Q._startTime = f.time, P._startTime = f.frame, Q._active = P._active = !0, setTimeout(R, 1), B._updateRoot = E.render = function () {
                var a, b, c;
                if (H.length && R(), Q.render((f.time - Q._startTime) * Q._timeScale, !1, !1), P.render((f.frame - P._startTime) * P._timeScale, !1, !1), H.length && R(), !(f.frame % 120)) {
                    for (c in L) {
                        for (b = L[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete L[c]
                    }
                    if (c = Q._first, (!c || c._paused) && E.autoSleep && !P._first && 1 === f._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || f.sleep()
                    }
                }
            }, f.addEventListener("tick", B._updateRoot);
            var S = function (a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (L[f || (a._gsTweenID = f = "t" + M++)] || (L[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = L[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return L[f].tweens
                },
                T = function (a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var k, l = b._startTime + j,
                        m = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (k = k || U(b, 0, o), 0 === U(h, k, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                    for (f = n; --f > -1;) h = m[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
                    return g
                },
                U = function (a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * j > f - b ? j : (f += a.totalDuration() / a._timeScale / e) > b + j ? 0 : f - b - j
                };
            e._init = function () {
                var a, b, c, d, e, f = this.vars,
                    g = this._overwrittenProps,
                    h = this._duration,
                    i = !!f.immediateRender,
                    j = f.ease;
                if (f.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                    for (d in f.startAt) e[d] = f.startAt[d];
                    if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = E.to(this.target, 0, e), i)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== h) return
                } else if (f.runBackwards && 0 !== h)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        c = {};
                        for (d in f) N[d] && "autoCSS" !== d || (c[d] = f[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = E.to(this.target, 0, c), i) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1)
                    }
                if (this._ease = j ? j instanceof t ? f.easeParams instanceof Array ? j.config.apply(j, f.easeParams) : j : "function" == typeof j ? new t(j, f.easeParams) : u[j] || E.defaultEase : E.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, g);
                if (b && E._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = f.onUpdate, this._initted = !0
            }, e._initProps = function (b, c, d, e) {
                var f, g, h, i, j, k;
                if (null == b) return !1;
                I[b._gsTweenID] && R(), this.vars.css || b.style && b !== a && b.nodeType && K.css && this.vars.autoCSS !== !1 && G(this.vars, b);
                for (f in this.vars) {
                    if (k = this.vars[f], N[f]) k && (k instanceof Array || k.push && m(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                    else if (K[f] && (i = new K[f])._onInitTween(b, this.vars[f], this)) {
                        for (this._firstPT = j = {
                                _next: this._firstPT,
                                t: i,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: f,
                                pg: !0,
                                pr: i._priority
                            }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                        (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = c[f] = j = {
                        _next: this._firstPT,
                        t: b,
                        p: f,
                        f: "function" == typeof b[f],
                        n: f,
                        pg: !1,
                        pr: 0
                    }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                    j && j._next && (j._next._prev = j)
                }
                return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && T(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[b._gsTweenID] = !0), h)
            }, e.render = function (a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration,
                    k = this._rawPrevTime;
                if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > k || k === j) && k !== a && (c = !0, k > j && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || k === a ? a : j);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && k > 0 && k !== j) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (k >= 0 && (c = !0), this._rawPrevTime = g = !b || a || k === a ? a : j)) : this._initted || (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var l = a / i,
                        m = this._easeType,
                        n = this._easePower;
                    (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), this.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / i ? l / 2 : 1 - l / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = k, H.push(this), void(this._lazy = a);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || s), 0 === i && this._rawPrevTime === j && g !== j && (this._rawPrevTime = 0)))
                }
            }, e._kill = function (a, b) {
                if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : E.selector(b) || b;
                var c, d, e, f, g, h, i, j;
                if ((m(b) || F(b)) && "number" != typeof b[0])
                    for (c = b.length; --c > -1;) this._kill(a, b[c]) && (h = !0);
                else {
                    if (this._targets) {
                        for (c = this._targets.length; --c > -1;)
                            if (b === this._targets[c]) {
                                g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target) return !1;
                        g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (g) {
                        i = a || g, j = a !== d && "all" !== d && a !== g && ("object" != typeof a || !a._tempKill);
                        for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, e.invalidate = function () {
                return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
            }, e._enabled = function (a, b) {
                if (g || f.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = S(d[c], this, !0);
                    else this._siblings = S(this.target, this, !0)
                }
                return B.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
            }, E.to = function (a, b, c) {
                return new E(a, b, c)
            }, E.from = function (a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new E(a, b, c)
            }, E.fromTo = function (a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new E(a, b, d)
            }, E.delayedCall = function (a, b, c, d, e) {
                return new E(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    onCompleteScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    onReverseCompleteScope: d,
                    immediateRender: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, E.set = function (a, b) {
                return new E(a, 0, b)
            }, E.getTweensOf = function (a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : E.selector(a) || a;
                var c, d, e, f;
                if ((m(a) || F(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(E.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else
                    for (d = S(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d
            }, E.killTweensOf = E.killDelayedCallsTo = function (a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = E.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var V = q("plugins.TweenPlugin", function (a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = V.prototype
            }, !0);
            if (e = V.prototype, V.version = "1.10.1", V.API = 2, e._firstPT = null, e._addTween = function (a, b, c, d, e, f) {
                    var g, h;
                    return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                            _next: this._firstPT,
                            t: a,
                            p: b,
                            s: c,
                            c: g,
                            f: "function" == typeof a[b],
                            n: e || b,
                            r: f
                        }, h._next && (h._next._prev = h),
                        h) : void 0
                }, e.setRatio = function (a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
                }, e._kill = function (a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, e._roundProps = function (a, b) {
                    for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
                }, E._onPluginEvent = function (a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, V.activate = function (a) {
                    for (var b = a.length; --b > -1;) a[b].API === V.API && (K[(new a[b])._propName] = a[b]);
                    return !0
                }, p.plugin = function (a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        g = q("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                            V.call(this, c, d), this._overwriteProps = e || []
                        }, a.global === !0),
                        h = g.prototype = new V(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, V.activate([g]), g
                }, c = a._gsQueue) {
                for (d = 0; c.length > d; d++) c[d]();
                for (e in n) n[e].func || a.console.log("GSAP encountered missing dependency: com.greensock." + e)
            }
            g = !1
        }
    }(window), (window._gsQueue || (window._gsQueue = [])).push(function () {
        "use strict";
        var a = document.documentElement,
            b = window,
            c = function (c, d) {
                var e = "x" === d ? "Width" : "Height",
                    f = "scroll" + e,
                    g = "client" + e,
                    h = document.body;
                return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || Math.max(a[g], h[g])) : c[f] - c["offset" + e]
            },
            d = window._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.7.3",
                init: function (a, d, e) {
                    return this._wdw = a === b, this._target = a, this._tween = e, "object" != typeof d && (d = {
                        y: d
                    }), this._autoKill = d.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != d.x ? (this._addTween(this, "x", this.x, "max" === d.x ? c(a, "x") : d.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != d.y ? (this._addTween(this, "y", this.y, "max" === d.y ? c(a, "y") : d.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function (a) {
                    this._super.setRatio.call(this, a);
                    var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        f = e - this.yPrev,
                        g = d - this.xPrev;
                    this._autoKill && (!this.skipX && (g > 7 || -7 > g) && c(this._target, "x") > d && (this.skipX = !0), !this.skipY && (f > 7 || -7 > f) && c(this._target, "y") > e && (this.skipY = !0), this.skipX && this.skipY && this._tween.kill()), this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            e = d.prototype;
        d.max = c, e.getX = function () {
            return this._wdw ? null != b.pageXOffset ? b.pageXOffset : null != a.scrollLeft ? a.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
        }, e.getY = function () {
            return this._wdw ? null != b.pageYOffset ? b.pageYOffset : null != a.scrollTop ? a.scrollTop : document.body.scrollTop : this._target.scrollTop
        }, e._kill = function (a) {
            return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a)
        }
    }), window._gsDefine && window._gsQueue.pop()(),
    function (a) {
        var b = function () {
                "use strict";
                return {
                    isMsie: function () {
                        return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                    },
                    isBlankString: function (a) {
                        return !a || /^\s*$/.test(a)
                    },
                    escapeRegExChars: function (a) {
                        return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function (a) {
                        return "string" == typeof a
                    },
                    isNumber: function (a) {
                        return "number" == typeof a
                    },
                    isArray: a.isArray,
                    isFunction: a.isFunction,
                    isObject: a.isPlainObject,
                    isUndefined: function (a) {
                        return "undefined" == typeof a
                    },
                    toStr: function (a) {
                        return b.isUndefined(a) || null === a ? "" : a + ""
                    },
                    bind: a.proxy,
                    each: function (b, c) {
                        function d(a, b) {
                            return c(b, a)
                        }
                        a.each(b, d)
                    },
                    map: a.map,
                    filter: a.grep,
                    every: function (b, c) {
                        var d = !0;
                        return b ? (a.each(b, function (a, e) {
                            return (d = c.call(null, e, a, b)) ? void 0 : !1
                        }), !!d) : d
                    },
                    some: function (b, c) {
                        var d = !1;
                        return b ? (a.each(b, function (a, e) {
                            return (d = c.call(null, e, a, b)) ? !1 : void 0
                        }), !!d) : d
                    },
                    mixin: a.extend,
                    getUniqueId: function () {
                        var a = 0;
                        return function () {
                            return a++
                        }
                    }(),
                    templatify: function (b) {
                        function c() {
                            return String(b)
                        }
                        return a.isFunction(b) ? b : c
                    },
                    defer: function (a) {
                        setTimeout(a, 0)
                    },
                    debounce: function (a, b, c) {
                        var d, e;
                        return function () {
                            var f, g, h = this,
                                i = arguments;
                            return f = function () {
                                d = null, c || (e = a.apply(h, i))
                            }, g = c && !d, clearTimeout(d), d = setTimeout(f, b), g && (e = a.apply(h, i)), e
                        }
                    },
                    throttle: function (a, b) {
                        var c, d, e, f, g, h;
                        return g = 0, h = function () {
                                g = new Date, e = null, f = a.apply(c, d)
                            },
                            function () {
                                var i = new Date,
                                    j = b - (i - g);
                                return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
                            }
                    },
                    noop: function () {}
                }
            }(),
            c = function () {
                return {
                    wrapper: '<span class="twitter-typeahead"></span>',
                    dropdown: '<span class="tt-dropdown-menu"></span>',
                    dataset: '<div class="tt-dataset-%CLASS%"></div>',
                    suggestions: '<span class="tt-suggestions"></span>',
                    suggestion: '<div class="tt-suggestion"></div>'
                }
            }(),
            d = function () {
                "use strict";
                var a = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: "1"
                    },
                    input: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    inputWithNoHint: {
                        position: "relative",
                        verticalAlign: "top"
                    },
                    dropdown: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    },
                    suggestions: {
                        display: "block"
                    },
                    suggestion: {
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    },
                    suggestionChild: {
                        whiteSpace: "normal"
                    },
                    ltr: {
                        left: "0",
                        right: "auto"
                    },
                    rtl: {
                        left: "auto",
                        right: " 0"
                    }
                };
                return b.isMsie() && b.mixin(a.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                }), b.isMsie() && b.isMsie() <= 7 && b.mixin(a.input, {
                    marginTop: "-1px"
                }), a
            }(),
            e = function () {
                "use strict";

                function c(b) {
                    b && b.el || a.error("EventBus initialized without el"), this.$el = a(b.el)
                }
                var d = "typeahead:";
                return b.mixin(c.prototype, {
                    trigger: function (a) {
                        var b = [].slice.call(arguments, 1);
                        this.$el.trigger(d + a, b)
                    }
                }), c
            }(),
            f = function () {
                "use strict";

                function a(a, b, c, d) {
                    var e;
                    if (!c) return this;
                    for (b = b.split(i), c = d ? h(c, d) : c, this._callbacks = this._callbacks || {}; e = b.shift();) this._callbacks[e] = this._callbacks[e] || {
                        sync: [],
                        async: []
                    }, this._callbacks[e][a].push(c);
                    return this
                }

                function b(b, c, d) {
                    return a.call(this, "async", b, c, d)
                }

                function c(b, c, d) {
                    return a.call(this, "sync", b, c, d)
                }

                function d(a) {
                    var b;
                    if (!this._callbacks) return this;
                    for (a = a.split(i); b = a.shift();) delete this._callbacks[b];
                    return this
                }

                function e(a) {
                    var b, c, d, e, g;
                    if (!this._callbacks) return this;
                    for (a = a.split(i), d = [].slice.call(arguments, 1);
                        (b = a.shift()) && (c = this._callbacks[b]);) e = f(c.sync, this, [b].concat(d)), g = f(c.async, this, [b].concat(d)), e() && j(g);
                    return this
                }

                function f(a, b, c) {
                    function d() {
                        for (var d, e = 0, f = a.length; !d && f > e; e += 1) d = a[e].apply(b, c) === !1;
                        return !d
                    }
                    return d
                }

                function g() {
                    var a;
                    return a = window.setImmediate ? function (a) {
                        setImmediate(function () {
                            a()
                        })
                    } : function (a) {
                        setTimeout(function () {
                            a()
                        }, 0)
                    }
                }

                function h(a, b) {
                    return a.bind ? a.bind(b) : function () {
                        a.apply(b, [].slice.call(arguments, 0))
                    }
                }
                var i = /\s+/,
                    j = g();
                return {
                    onSync: c,
                    onAsync: b,
                    off: d,
                    trigger: e
                }
            }(),
            g = function (a) {
                "use strict";

                function c(a, c, d) {
                    for (var e, f = [], g = 0, h = a.length; h > g; g++) f.push(b.escapeRegExChars(a[g]));
                    return e = d ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")", c ? new RegExp(e) : new RegExp(e, "i")
                }
                var d = {
                    node: null,
                    pattern: null,
                    tagName: "strong",
                    className: null,
                    wordsOnly: !1,
                    caseSensitive: !1
                };
                return function (e) {
                    function f(b) {
                        var c, d, f;
                        return (c = h.exec(b.data)) && (f = a.createElement(e.tagName), e.className && (f.className = e.className), d = b.splitText(c.index), d.splitText(c[0].length), f.appendChild(d.cloneNode(!0)), b.parentNode.replaceChild(f, d)), !!c
                    }

                    function g(a, b) {
                        for (var c, d = 3, e = 0; e < a.childNodes.length; e++) c = a.childNodes[e], c.nodeType === d ? e += b(c) ? 1 : 0 : g(c, b)
                    }
                    var h;
                    e = b.mixin({}, d, e), e.node && e.pattern && (e.pattern = b.isArray(e.pattern) ? e.pattern : [e.pattern], h = c(e.pattern, e.caseSensitive, e.wordsOnly), g(e.node, f))
                }
            }(window.document),
            h = function () {
                "use strict";

                function c(c) {
                    var e, f, g, i, j = this;
                    c = c || {}, c.input || a.error("input is missing"), e = b.bind(this._onBlur, this), f = b.bind(this._onFocus, this), g = b.bind(this._onKeydown, this), i = b.bind(this._onInput, this), this.$hint = a(c.hint), this.$input = a(c.input).on("blur.tt", e).on("focus.tt", f).on("keydown.tt", g), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = b.noop), b.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (a) {
                        h[a.which || a.keyCode] || b.defer(b.bind(j._onInput, j, a))
                    }) : this.$input.on("input.tt", i), this.query = this.$input.val(), this.$overflowHelper = d(this.$input)
                }

                function d(b) {
                    return a('<pre aria-hidden="true"></pre>').css({
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily: b.css("font-family"),
                        fontSize: b.css("font-size"),
                        fontStyle: b.css("font-style"),
                        fontVariant: b.css("font-variant"),
                        fontWeight: b.css("font-weight"),
                        wordSpacing: b.css("word-spacing"),
                        letterSpacing: b.css("letter-spacing"),
                        textIndent: b.css("text-indent"),
                        textRendering: b.css("text-rendering"),
                        textTransform: b.css("text-transform")
                    }).insertAfter(b)
                }

                function e(a, b) {
                    return c.normalizeQuery(a) === c.normalizeQuery(b)
                }

                function g(a) {
                    return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey
                }
                var h;
                return h = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, c.normalizeQuery = function (a) {
                    return (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }, b.mixin(c.prototype, f, {
                    _onBlur: function () {
                        this.resetInputValue(), this.trigger("blurred")
                    },
                    _onFocus: function () {
                        this.trigger("focused")
                    },
                    _onKeydown: function (a) {
                        var b = h[a.which || a.keyCode];
                        this._managePreventDefault(b, a), b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
                    },
                    _onInput: function () {
                        this._checkInputValue()
                    },
                    _managePreventDefault: function (a, b) {
                        var c, d, e;
                        switch (a) {
                        case "tab":
                            d = this.getHint(), e = this.getInputValue(), c = d && d !== e && !g(b);
                            break;
                        case "up":
                        case "down":
                            c = !g(b);
                            break;
                        default:
                            c = !1
                        }
                        c && b.preventDefault()
                    },
                    _shouldTrigger: function (a, b) {
                        var c;
                        switch (a) {
                        case "tab":
                            c = !g(b);
                            break;
                        default:
                            c = !0
                        }
                        return c
                    },
                    _checkInputValue: function () {
                        var a, b, c;
                        a = this.getInputValue(), b = e(a, this.query), c = b ? this.query.length !== a.length : !1, this.query = a, b ? c && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                    },
                    focus: function () {
                        this.$input.focus()
                    },
                    blur: function () {
                        this.$input.blur()
                    },
                    getQuery: function () {
                        return this.query
                    },
                    setQuery: function (a) {
                        this.query = a
                    },
                    getInputValue: function () {
                        return this.$input.val()
                    },
                    setInputValue: function (a, b) {
                        this.$input.val(a), b ? this.clearHint() : this._checkInputValue()
                    },
                    resetInputValue: function () {
                        this.setInputValue(this.query, !0)
                    },
                    getHint: function () {
                        return this.$hint.val()
                    },
                    setHint: function (a) {
                        this.$hint.val(a)
                    },
                    clearHint: function () {
                        this.setHint("")
                    },
                    clearHintIfInvalid: function () {
                        var a, b, c, d;
                        a = this.getInputValue(), b = this.getHint(), c = a !== b && 0 === b.indexOf(a), d = "" !== a && c && !this.hasOverflow(), !d && this.clearHint()
                    },
                    getLanguageDirection: function () {
                        return (this.$input.css("direction") || "ltr").toLowerCase()
                    },
                    hasOverflow: function () {
                        var a = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= a
                    },
                    isCursorAtEnd: function () {
                        var a, c, d;
                        return a = this.$input.val().length, c = this.$input[0].selectionStart, b.isNumber(c) ? c === a : document.selection ? (d = document.selection.createRange(), d.moveStart("character", -a), a === d.text.length) : !0
                    },
                    destroy: function () {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                    }
                }), c
            }(),
            i = function () {
                "use strict";

                function e(d) {
                    d = d || {}, d.templates = d.templates || {}, d.source || a.error("missing source"), d.name && !j(d.name) && a.error("invalid dataset name: " + d.name), this.query = null, this.highlight = !!d.highlight, this.name = d.name || b.getUniqueId(), this.source = d.source, this.displayFn = h(d.display || d.displayKey), this.templates = i(d.templates, this.displayFn), this.$el = a(c.dataset.replace("%CLASS%", this.name))
                }

                function h(a) {
                    function c(b) {
                        return b[a]
                    }
                    return a = a || "value", b.isFunction(a) ? a : c
                }

                function i(a, c) {
                    function d(a) {
                        return "<p>" + c(a) + "</p>"
                    }
                    return {
                        empty: a.empty && b.templatify(a.empty),
                        header: a.header && b.templatify(a.header),
                        footer: a.footer && b.templatify(a.footer),
                        suggestion: a.suggestion || d
                    }
                }

                function j(a) {
                    return /^[_a-zA-Z0-9-]+$/.test(a)
                }
                var k = "ttDataset",
                    l = "ttValue",
                    m = "ttDatum";
                return e.extractDatasetName = function (b) {
                    return a(b).data(k)
                }, e.extractValue = function (b) {
                    return a(b).data(l)
                }, e.extractDatum = function (b) {
                    return a(b).data(m)
                }, b.mixin(e.prototype, f, {
                    _render: function (e, f) {
                        function h() {
                            return p.templates.empty({
                                query: e,
                                isEmpty: !0
                            })
                        }

                        function i() {
                            function h(b) {
                                var e;
                                return e = a(c.suggestion).append(p.templates.suggestion(b)).data(k, p.name).data(l, p.displayFn(b)).data(m, b), e.children().each(function () {
                                    a(this).css(d.suggestionChild)
                                }), e
                            }
                            var i, j;
                            return i = a(c.suggestions).css(d.suggestions), j = b.map(f, h), i.append.apply(i, j), p.highlight && g({
                                className: "tt-highlight",
                                node: i[0],
                                pattern: e
                            }), i
                        }

                        function j() {
                            return p.templates.header({
                                query: e,
                                isEmpty: !o
                            })
                        }

                        function n() {
                            return p.templates.footer({
                                query: e,
                                isEmpty: !o
                            })
                        }
                        if (this.$el) {
                            var o, p = this;
                            this.$el.empty(), o = f && f.length, !o && this.templates.empty ? this.$el.html(h()).prepend(p.templates.header ? j() : null).append(p.templates.footer ? n() : null) : o && this.$el.html(i()).prepend(p.templates.header ? j() : null).append(p.templates.footer ? n() : null), this.trigger("rendered")
                        }
                    },
                    getRoot: function () {
                        return this.$el
                    },
                    update: function (a) {
                        function b(b) {
                            c.canceled || a !== c.query || c._render(a, b)
                        }
                        var c = this;
                        this.query = a, this.canceled = !1, this.source(a, b)
                    },
                    cancel: function () {
                        this.canceled = !0
                    },
                    clear: function () {
                        this.cancel(), this.$el.empty(), this.trigger("rendered")
                    },
                    isEmpty: function () {
                        return this.$el.is(":empty")
                    },
                    destroy: function () {
                        this.$el = null
                    }
                }), e
            }(),
            j = function () {
                "use strict";

                function c(c) {
                    var d, f, g, h = this;
                    c = c || {}, c.menu || a.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = b.map(c.datasets, e), d = b.bind(this._onSuggestionClick, this), f = b.bind(this._onSuggestionMouseEnter, this), g = b.bind(this._onSuggestionMouseLeave, this), this.$menu = a(c.menu).on("click.tt", ".tt-suggestion", d).on("mouseenter.tt", ".tt-suggestion", f).on("mouseleave.tt", ".tt-suggestion", g), b.each(this.datasets, function (a) {
                        h.$menu.append(a.getRoot()), a.onSync("rendered", h._onRendered, h)
                    })
                }

                function e(a) {
                    return new i(a)
                }
                return b.mixin(c.prototype, f, {
                    _onSuggestionClick: function (b) {
                        this.trigger("suggestionClicked", a(b.currentTarget))
                    },
                    _onSuggestionMouseEnter: function (b) {
                        this._removeCursor(), this._setCursor(a(b.currentTarget), !0)
                    },
                    _onSuggestionMouseLeave: function () {
                        this._removeCursor()
                    },
                    _onRendered: function () {
                        function a(a) {
                            return a.isEmpty()
                        }
                        this.isEmpty = b.every(this.datasets, a), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
                    },
                    _hide: function () {
                        this.$menu.hide()
                    },
                    _show: function () {
                        this.$menu.css("display", "block")
                    },
                    _getSuggestions: function () {
                        return this.$menu.find(".tt-suggestion")
                    },
                    _getCursor: function () {
                        return this.$menu.find(".tt-cursor").first()
                    },
                    _setCursor: function (a, b) {
                        a.first().addClass("tt-cursor"), !b && this.trigger("cursorMoved")
                    },
                    _removeCursor: function () {
                        this._getCursor().removeClass("tt-cursor")
                    },
                    _moveCursor: function (a) {
                        var b, c, d, e;
                        if (this.isOpen) {
                            if (c = this._getCursor(), b = this._getSuggestions(), this._removeCursor(), d = b.index(c) + a, d = (d + 1) % (b.length + 1) - 1, -1 === d) return void this.trigger("cursorRemoved"); - 1 > d && (d = b.length - 1), this._setCursor(e = b.eq(d)), this._ensureVisible(e)
                        }
                    },
                    _ensureVisible: function (a) {
                        var b, c, d, e;
                        b = a.position().top, c = b + a.outerHeight(!0), d = this.$menu.scrollTop(), e = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), 0 > b ? this.$menu.scrollTop(d + b) : c > e && this.$menu.scrollTop(d + (c - e))
                    },
                    close: function () {
                        this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
                    },
                    open: function () {
                        this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                    },
                    setLanguageDirection: function (a) {
                        this.$menu.css("ltr" === a ? d.ltr : d.rtl)
                    },
                    moveCursorUp: function () {
                        this._moveCursor(-1)
                    },
                    moveCursorDown: function () {
                        this._moveCursor(1)
                    },
                    getDatumForSuggestion: function (a) {
                        var b = null;
                        return a.length && (b = {
                            raw: i.extractDatum(a),
                            value: i.extractValue(a),
                            datasetName: i.extractDatasetName(a)
                        }), b
                    },
                    getDatumForCursor: function () {
                        return this.getDatumForSuggestion(this._getCursor().first())
                    },
                    getDatumForTopSuggestion: function () {
                        return this.getDatumForSuggestion(this._getSuggestions().first())
                    },
                    update: function (a) {
                        function c(b) {
                            b.update(a)
                        }
                        b.each(this.datasets, c)
                    },
                    empty: function () {
                        function a(a) {
                            a.clear()
                        }
                        b.each(this.datasets, a), this.isEmpty = !0
                    },
                    isVisible: function () {
                        return this.isOpen && !this.isEmpty
                    },
                    destroy: function () {
                        function a(a) {
                            a.destroy()
                        }
                        this.$menu.off(".tt"), this.$menu = null, b.each(this.datasets, a)
                    }
                }), c
            }(),
            k = function () {
                "use strict";

                function f(c) {
                    var d, f, i;
                    c = c || {}, c.input || a.error("missing input"), this.isActivated = !1, this.autoselect = !!c.autoselect, this.minLength = b.isNumber(c.minLength) ? c.minLength : 1, this.$node = g(c.input, c.withHint), d = this.$node.find(".tt-dropdown-menu"), f = this.$node.find(".tt-input"), i = this.$node.find(".tt-hint"), f.on("blur.tt", function (a) {
                        var c, e, g;
                        c = document.activeElement, e = d.is(c), g = d.has(c).length > 0, b.isMsie() && (e || g) && (a.preventDefault(), a.stopImmediatePropagation(), b.defer(function () {
                            f.focus()
                        }))
                    }), d.on("mousedown.tt", function (a) {
                        a.preventDefault()
                    }), this.eventBus = c.eventBus || new e({
                        el: f
                    }), this.dropdown = new j({
                        menu: d,
                        datasets: c.datasets
                    }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new h({
                        input: f,
                        hint: i
                    }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
                }

                function g(b, e) {
                    var f, g, h, j;
                    f = a(b), g = a(c.wrapper).css(d.wrapper), h = a(c.dropdown).css(d.dropdown), j = f.clone().css(d.hint).css(i(f)), j.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                        autocomplete: "off",
                        spellcheck: "false",
                        tabindex: -1
                    }), f.data(l, {
                        dir: f.attr("dir"),
                        autocomplete: f.attr("autocomplete"),
                        spellcheck: f.attr("spellcheck"),
                        style: f.attr("style")
                    }), f.addClass("tt-input").attr({
                        autocomplete: "off",
                        spellcheck: !1
                    }).css(e ? d.input : d.inputWithNoHint);
                    try {
                        !f.attr("dir") && f.attr("dir", "auto")
                    } catch (k) {}
                    return f.wrap(g).parent().prepend(e ? j : null).append(h)
                }

                function i(a) {
                    return {
                        backgroundAttachment: a.css("background-attachment"),
                        backgroundClip: a.css("background-clip"),
                        backgroundColor: a.css("background-color"),
                        backgroundImage: a.css("background-image"),
                        backgroundOrigin: a.css("background-origin"),
                        backgroundPosition: a.css("background-position"),
                        backgroundRepeat: a.css("background-repeat"),
                        backgroundSize: a.css("background-size")
                    }
                }

                function k(a) {
                    var c = a.find(".tt-input");
                    b.each(c.data(l), function (a, d) {
                        b.isUndefined(a) ? c.removeAttr(d) : c.attr(d, a)
                    }), c.detach().removeData(l).removeClass("tt-input").insertAfter(a), a.remove()
                }
                var l = "ttAttrs";
                return b.mixin(f.prototype, {
                    _onSuggestionClicked: function (a, b) {
                        var c;
                        (c = this.dropdown.getDatumForSuggestion(b)) && this._select(c)
                    },
                    _onCursorMoved: function () {
                        var a = this.dropdown.getDatumForCursor();
                        this.input.setInputValue(a.value, !0), this.eventBus.trigger("cursorchanged", a.raw, a.datasetName)
                    },
                    _onCursorRemoved: function () {
                        this.input.resetInputValue(), this._updateHint()
                    },
                    _onDatasetRendered: function () {
                        this._updateHint()
                    },
                    _onOpened: function () {
                        this._updateHint(), this.eventBus.trigger("opened")
                    },
                    _onClosed: function () {
                        this.input.clearHint(), this.eventBus.trigger("closed")
                    },
                    _onFocused: function () {
                        this.isActivated = !0, this.dropdown.open()
                    },
                    _onBlurred: function () {
                        this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
                    },
                    _onEnterKeyed: function (a, b) {
                        var c, d;
                        c = this.dropdown.getDatumForCursor(), d = this.dropdown.getDatumForTopSuggestion(), c ? (this._select(c), b.preventDefault()) : this.autoselect && d && (this._select(d), b.preventDefault())
                    },
                    _onTabKeyed: function (a, b) {
                        var c;
                        (c = this.dropdown.getDatumForCursor()) ? (this._select(c), b.preventDefault()) : this._autocomplete(!0)
                    },
                    _onEscKeyed: function () {
                        this.dropdown.close(), this.input.resetInputValue()
                    },
                    _onUpKeyed: function () {
                        var a = this.input.getQuery();
                        this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorUp(), this.dropdown.open()
                    },
                    _onDownKeyed: function () {
                        var a = this.input.getQuery();
                        this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorDown(), this.dropdown.open()
                    },
                    _onLeftKeyed: function () {
                        "rtl" === this.dir && this._autocomplete()
                    },
                    _onRightKeyed: function () {
                        "ltr" === this.dir && this._autocomplete()
                    },
                    _onQueryChanged: function (a, b) {
                        this.input.clearHintIfInvalid(), b.length >= this.minLength ? this.dropdown.update(b) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
                    },
                    _onWhitespaceChanged: function () {
                        this._updateHint(), this.dropdown.open()
                    },
                    _setLanguageDirection: function () {
                        var a;
                        this.dir !== (a = this.input.getLanguageDirection()) && (this.dir = a, this.$node.css("direction", a), this.dropdown.setLanguageDirection(a))
                    },
                    _updateHint: function () {
                        var a, c, d, e, f, g;
                        a = this.dropdown.getDatumForTopSuggestion(), a && this.dropdown.isVisible() && !this.input.hasOverflow() ? (c = this.input.getInputValue(), d = h.normalizeQuery(c), e = b.escapeRegExChars(d), f = new RegExp("^(?:" + e + ")(.+$)", "i"), g = f.exec(a.value), g ? this.input.setHint(c + g[1]) : this.input.clearHint()) : this.input.clearHint()
                    },
                    _autocomplete: function (a) {
                        var b, c, d, e;
                        b = this.input.getHint(), c = this.input.getQuery(), d = a || this.input.isCursorAtEnd(), b && c !== b && d && (e = this.dropdown.getDatumForTopSuggestion(), e && this.input.setInputValue(e.value), this.eventBus.trigger("autocompleted", e.raw, e.datasetName))
                    },
                    _select: function (a) {
                        this.input.setQuery(a.value), this.input.setInputValue(a.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", a.raw, a.datasetName), this.dropdown.close(), b.defer(b.bind(this.dropdown.empty, this.dropdown))
                    },
                    open: function () {
                        this.dropdown.open()
                    },
                    close: function () {
                        this.dropdown.close()
                    },
                    setVal: function (a) {
                        a = b.toStr(a), this.isActivated ? this.input.setInputValue(a) : (this.input.setQuery(a), this.input.setInputValue(a, !0)), this._setLanguageDirection()
                    },
                    getVal: function () {
                        return this.input.getQuery()
                    },
                    destroy: function () {
                        this.input.destroy(), this.dropdown.destroy(), k(this.$node), this.$node = null
                    }
                }), f
            }();
        ! function () {
            "use strict";
            var c, d, f;
            c = a.fn.typeahead, d = "ttTypeahead", f = {
                initialize: function (c, f) {
                    function g() {
                        var g, h, i = a(this);
                        b.each(f, function (a) {
                            a.highlight = !!c.highlight
                        }), h = new k({
                            input: i,
                            eventBus: g = new e({
                                el: i
                            }),
                            withHint: b.isUndefined(c.hint) ? !0 : !!c.hint,
                            minLength: c.minLength,
                            autoselect: c.autoselect,
                            datasets: f
                        }), i.data(d, h)
                    }
                    return f = b.isArray(f) ? f : [].slice.call(arguments, 1), c = c || {}, this.each(g)
                },
                open: function () {
                    function b() {
                        var b, c = a(this);
                        (b = c.data(d)) && b.open()
                    }
                    return this.each(b)
                },
                close: function () {
                    function b() {
                        var b, c = a(this);
                        (b = c.data(d)) && b.close()
                    }
                    return this.each(b)
                },
                val: function (b) {
                    function c() {
                        var c, e = a(this);
                        (c = e.data(d)) && c.setVal(b)
                    }

                    function e(a) {
                        var b, c;
                        return (b = a.data(d)) && (c = b.getVal()), c
                    }
                    return arguments.length ? this.each(c) : e(this.first())
                },
                destroy: function () {
                    function b() {
                        var b, c = a(this);
                        (b = c.data(d)) && (b.destroy(), c.removeData(d))
                    }
                    return this.each(b)
                }
            }, a.fn.typeahead = function (b) {
                var c;
                return f[b] && "initialize" !== b ? (c = this.filter(function () {
                    return !!a(this).data(d)
                }), f[b].apply(c, [].slice.call(arguments, 1))) : f.initialize.apply(this, arguments)
            }, a.fn.typeahead.noConflict = function () {
                return a.fn.typeahead = c, this
            }
        }()
    }(window.jQuery),
    function (a) {
        a || (window.NW = {}, a = window.NW), a.Views = a.Views || {}, a.Views.CompareBarView = Backbone.View.extend({
            tagName: "div",
            className: "nw-compare compare-bar",
            initialize: function () {
                _.bindAll(this, "render", "handleScroll"), this.headerHeight = $("header").height(), this.model.on("change", this.render), $(window).scroll(this.handleScroll), this.handleScroll(), this.render()
            },
            render: function () {
                var a = this.model.get("cart").length,
                    b = this.compiled({
                        count: a,
                        href: this.model.get("href"),
                        icon: this.model.get("icon")
                    });
                this.isMounted ? this.$el.find(".count-bubble").text(a) : ($("header.global-header").after(this.$el.append(b)), this.isMounted = !0), a > 0 ? this.$el.addClass("active") : this.$el.removeClass("active"), a >= 2 ? this.$el.find(".cta.right").removeClass("transparent") : this.$el.find(".cta.right").addClass("transparent")
            },
            handleScroll: function (a) {
                if (this.model.get("isSticky")) {
                    var b = $(window).scrollTop();
                    b < this.headerHeight ? this.$el.hasClass("sticky") && this.$el.removeClass("sticky") : this.$el.hasClass("sticky") || this.$el.addClass("sticky")
                }
            },
            compiled: _.template("<div class='compare-bar-inner-wrapper'><a href='<%= href %>'><div class='cta left'><div class='icon <%= icon %>' /><span class='count-bubble'><%= count %></span></div><div class='cta right'><h4>Compare</h4><span class='icon ss-gizmo ss-navigateright' /></div></a></div>")
        })
    }(window.NW),
    function (a) {
        a || (window.NW = {}, a = window.NW), a.Views = a.Views || {}, a.Views.CompareCheckboxView = Backbone.View.extend({
            events: {
                "change input": "handleCheckboxClick"
            },
            initialize: function () {
                _.bindAll(this, "handleCheckboxClick"), this.model.on("change", this.render, this), this.render()
            },
            render: function () {
                var a = parseInt(this.$el.attr("data-product-id")),
                    b = this.model.isInCart(a);
                this.$el.html(this.compiled({
                    label: this.model.get("compareCheckboxLabel"),
                    checked: b ? "checked" : void 0,
                    className: this.model.get("compareCheckboxClass")
                }))
            },
            handleCheckboxClick: function (a) {
                var b = parseInt(this.$el.attr("data-product-id")),
                    c = this.$el.attr("data-product-slug");
                a.target.checked ? this.model.add(b, c) : this.model.remove(b, c)
            },
            compiled: _.template("<div class='checkbox <%= className %>'><label><input type='checkbox' <%= checked %> ><span class='label-text'><%= label %></span></label></input>")
        })
    }(window.NW),
    function (a) {
        a || (window.NW = {}, a = window.NW), a.Views = a.Views || {}, a.Views.NavMenuView = Backbone.View.extend({
            activeMenuItem: null,
            events: {
                "click .menu-item-text-wrapper": "handleNavItemClick"
            },
            initialize: function () {},
            handleNavItemClick: function (a) {
                var b = $(a.target).parents(".menu-item");
                this.activeMenuItem && !b.is(this.activeMenuItem) ? (this.collapseSubMenu(this.activeMenuItem), this.expandSubMenu(b)) : this.activeMenuItem && b.is(this.activeMenuItem) ? this.collapseSubMenu(this.activeMenuItem) : this.expandSubMenu(b)
            },
            collapseSubMenu: function (a) {
                a.removeClass("expanded"), this.activeMenuItem = null
            },
            expandSubMenu: function (a) {
                a.addClass("expanded");
                var b = a.children(".menu-item-text-wrapper").height() * a.index();
                TweenLite.to($("ul.side-menu"), .2, {
                    scrollTo: b
                }, .2), this.activeMenuItem = a
            }
        })
    }(window.NW),
    function (a) {
        a || (window.NW = {}, a = window.NW), a.Views = a.Views || {}, a.Views.NavSearchView = Backbone.View.extend({
            typeAheadHintVal: null,
            events: {
                "typeahead:selected": "jumpToSearch",
                submit: "submitForm",
                "click .nav-search-submit": "submitForm",
                "focusin input": "activateSearch",
                "focusout input": "deactivateSearch",
                "click .ss-search": "focusSearch",
                "keyup input": "toggleSearchControls",
                "click .nav-search-clear": "clearForm"
            },
            initialize: function () {
                return this.$input = this.$("input"), this.$submit = this.$("button.nav-search-submit"), this.$clear = this.$("a.nav-search-clear"), this.$input.fadeIn("slow"), this.$input.typeahead({
                    hint: !1,
                    highlight: !0,
                    minLength: 2
                }, {
                    name: "google",
                    source: this.autocomplete
                }), this
            },
            activateSearch: function (a) {
                return this.toggleSearchControls(), this.$el.addClass("is-search-active"), this
            },
            deactivateSearch: function (a) {
                return this.typeAheadHintVal = this.$input.val(), this.$el.removeClass("is-search-active"), this
            },
            jumpToSearch: function (a, b) {
                var c = this;
                /iP(od|hone)/i.test(window.navigator.userAgent) && window.addEventListener("pagehide", function (a) {
                    setTimeout(function () {
                        c.$input.blur()
                    })
                });
                var d = "/search/results#q=" + b.value;
                window.location.href = d
            },
            submitForm: function (a) {
                a.preventDefault();
                var b = this.typeAheadHintVal ? this.typeAheadHintVal : this.$input.val();
                b ? this.jumpToSearch(a, {
                    value: b
                }) : this.$input.focus()
            },
            autocomplete: _.debounce(function (a, b) {
                var c = "003386302330948953581:vxiyfvu3r-s";
                return $.ajax({
                    url: "http://clients1.google.com/complete/search",
                    dataType: "jsonp",
                    data: {
                        q: a,
                        hl: "en",
                        client: "partner",
                        source: "gcsc",
                        partnerid: c,
                        ds: "cse"
                    }
                }).success(function (a) {
                    var c = a[1],
                        d = c.map(function (a) {
                            return {
                                value: a[0]
                            }
                        });
                    b(d)
                }).error(function (a) {
                    var c = [];
                    b(c)
                }), this
            }, 300),
            focusSearch: function () {
                this.$input.focus()
            },
            toggleSearchControls: function () {
                this.$input.val() ? (this.$clear.css({
                    display: "inline-block"
                }), this.$submit.removeAttr("disabled")) : (this.$clear.css({
                    display: "none"
                }), this.$submit.attr("disabled", "disabled"))
            },
            clearForm: function (a) {
                a.preventDefault(), this.$input.val(""), this.$input.typeahead("val", ""), this.$input.focus(), this.typeAheadHintVal = null, this.toggleSearchControls()
            }
        })
    }(window.NW),
    function (a) {
        a || (window.NW = {}, a = window.NW), a.Views = a.Views || {}, $.scrollbarWidth = function () {
            var a, b, c;
            return void 0 === c && (a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), c = b.innerWidth() - b.height(99).innerWidth(), a.remove()), c
        };
        var b = Backbone.View.extend({
            className: "nav-toggle-view",
            menuClosed: !0,
            events: {
                click: "togglePanel"
            },
            initialize: function () {
                this.$menu = $(".side-menu"), this.$contentModalOverlay = $('<div class="nw-xl-v1 content-modal-overlay">'), this.bindEvents()
            },
            bindEvents: function () {
                var a = this,
                    b = 27;
                $(document).on("keyup", function (c) {
                    c.keyCode !== b || a.menuClosed || a.togglePanel()
                }), $(document).on("click touchstart", _.debounce(function (b) {
                    b.target === a.$contentModalOverlay[0] && a.togglePanel()
                }, 400, !0))
            },
            togglePanel: function () {
                this.menuClosed ? this.reveal() : this.conceal(), this.menuClosed = !this.menuClosed
            },
            conceal: function () {
                return this.$menu.removeClass("revealed"), this.$contentModalOverlay.removeClass("revealed"), this.$contentModalOverlay.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    $("body").attr("style", ""), this.menuClosed && this.$contentModalOverlay.remove()
                }.bind(this)), this
            },
            reveal: function () {
                var a = $.scrollbarWidth(),
                    b = a + "px";
                return $("body").css({
                    overflow: "hidden",
                    "margin-right": b
                }), this.$menu.addClass("revealed"), this.$contentModalOverlay.appendTo(".global-header"), setTimeout(function () {
                    this.$contentModalOverlay.addClass("revealed")
                }.bind(this), 10), this
            }
        });
        a.Views.NavToggleView = b
    }(window.NW),
    function (a) {
        a || (window.NW = {}, a = window.NW), a.Models = a.Models || {}, a.Models.CompareCartModel = Backbone.Model.extend({
            products: {
                CC: {
                    cookie_name: "nw_compare",
                    href: "/compare/credit-cards?trk=nw-cc-compare-header-side_by_side",
                    icon: "icon-NW-CC-Compare-Icon",
                    isSticky: !0,
                    compareCheckboxLabel: "Compare",
                    compareCheckboxClass: ""
                }
            },
            defaults: {
                productName: "CC"
            },
            initialize: function () {
                this.set("schema", this.products[this.get("productName")]), this.overrideWithDynamicConfigs();
                var a = this.getCookie(),
                    b = this.parseAndValidateCookie(a);
                return this.setState(b), this
            },
            overrideWithDynamicConfigs: function () {
                var a = {};
                for (var b in this.get("schema")) "undefined" != typeof this.get(b) ? a[b] = this.get(b) : a[b] = this.get("schema")[b];
                this.set(a)
            },
            add: function (a, b) {
                if (this.validateIncomingID(a) && !this.isInCart(a)) {
                    var c = this.get("cart").slice(0);
                    c.push(a), this.setState(c), "CC" === this.get("productName") && this.logCCInteraction("ADD", a, b)
                }
                return this
            },
            remove: function (a, b) {
                var c = this.get("cart").slice(0);
                if (this.validateIncomingID(a) && this.isInCart(a)) {
                    var d = $.inArray(a, c);
                    c.splice(d, 1), this.setState(c), "CC" === this.get("productName") && this.logCCInteraction("REMOVE", a, b)
                }
                return this;
            },
            setState: function (a) {
                this.set("cart", a), this.setCookie()
            },
            logCCInteraction: function (a, b, c) {
                var d, e = window.NWA.metadata.get("impressionsFired").CC;
                for (var f in e)
                    if (f.indexOf(b) > -1) {
                        d = f;
                        break
                    }
                var g = e[d].impressionHeader;
                window.NWA.eventCenter.publish("customEvent", {
                    eventName: "PRODUCT_INTERACTION_EVENT",
                    endpoint: "productinteraction",
                    info: {
                        clickHeader: g,
                        type: a
                    }
                })
            },
            validateIncomingID: function (a) {
                return "number" == typeof a
            },
            isInCart: function (a) {
                return $.inArray(a, this.get("cart")) > -1
            },
            getCookie: function () {
                var a = "; " + document.cookie,
                    b = a.split("; " + this.get("cookie_name") + "=");
                return 2 === b.length ? b[1].split(";")[0] : void 0
            },
            setCookie: function () {
                var a = this.get("cookie_name"),
                    b = JSON.stringify(this.get("cart")),
                    c = 30,
                    d = "/",
                    e = new Date;
                e.setTime(e.getTime() + 24 * (c || 30) * 60 * 60 * 1e3);
                var f = "expires=" + e.toUTCString();
                d = "path=" + (d || "/"), document.cookie = a + "=" + encodeURIComponent(b) + "; " + f + "; " + d
            },
            parseAndValidateCookie: function (a) {
                var b;
                if (a) try {
                    a = decodeURIComponent(a), b = this.validateCookie(JSON.parse(a))
                } catch (c) {
                    b = []
                }
                return b || []
            },
            validateCookie: function (a) {
                return $.isArray(a) ? $.grep(a, function (a) {
                    return "number" == typeof a
                }) : []
            }
        })
    }(window.NW), $(function () {
        ! function (a) {
            a || (window.NW = {}, a = window.NW);
            var b;
            new a.Views.NavToggleView({
                el: ".side-menu-toggle"
            }), new a.Views.NavMenuView({
                el: ".side-menu"
            }), new a.Views.NavSearchView({
                el: ".nav-search-wrapper"
            });
            a.Views.CompareBarViewInitialize = function (c) {
                var d = {};
                if (b)
                    for (var e in c) b.set(e, c[e]);
                else "string" == typeof c ? d.productName = c : d = c, b = new a.Models.CompareCartModel(d), new a.Views.CompareBarView({
                    model: b
                }), $(".compare-checkbox-container[data-product-id]").each(function () {
                    new a.Views.CompareCheckboxView({
                        model: b,
                        el: this
                    })
                })
            }
        }(window.NW)
    });