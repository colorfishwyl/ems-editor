import { defineComponent as Qn, createElementBlock as tt, openBlock as L, createElementVNode as U, reactive as Gd, onBeforeUnmount as xe, h as ri, Fragment as Ht, markRaw as Vd, Teleport as Yd, createApp as Hd, useCssVars as Wd, ref as ot, inject as Ke, computed as ir, onMounted as oe, resolveComponent as Y, normalizeStyle as ze, createVNode as D, normalizeClass as ye, createBlock as mt, withCtx as K, createCommentVNode as Jt, renderList as Ue, unref as ct, createTextVNode as on, toDisplayString as Je, withModifiers as qd, isRef as Xd, watch as sr, provide as Eo, nextTick as $d, withDirectives as _d, vShow as Zd } from "vue";
import tg, { ElMessage as vn, ElMessageBox as Zr } from "element-plus";
import { defineStore as or, storeToRefs as Nn } from "pinia";
/*! Element Plus Icons Vue v2.3.2 */
var eg = /* @__PURE__ */ Qn({
  name: "Document",
  __name: "document",
  setup(s) {
    return (t, e) => (L(), tt("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"
      })
    ]));
  }
}), ng = eg, ig = /* @__PURE__ */ Qn({
  name: "Menu",
  __name: "menu",
  setup(s) {
    return (t, e) => (L(), tt("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"
      })
    ]));
  }
}), sg = ig, og = /* @__PURE__ */ Qn({
  name: "Plus",
  __name: "plus",
  setup(s) {
    return (t, e) => (L(), tt("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), rg = og, ag = /* @__PURE__ */ Qn({
  name: "Search",
  __name: "search",
  setup(s) {
    return (t, e) => (L(), tt("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      U("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), lg = ag;
function G(s, t) {
  var e = {};
  for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && t.indexOf(n) < 0 && (e[n] = s[n]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(s); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, n[i]) && (e[n[i]] = s[n[i]]);
  return e;
}
function $(s, t, e, n) {
  var i = arguments.length, o = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, e) : n, r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(s, t, e, n);
  else for (var a = s.length - 1; a >= 0; a--) (r = s[a]) && (o = (i < 3 ? r(o) : i > 3 ? r(t, e, o) : r(t, e)) || o);
  return i > 3 && o && Object.defineProperty(t, e, o), o;
}
function rr(s, t, e, n) {
  function i(o) {
    return o instanceof e ? o : new e(function(r) {
      r(o);
    });
  }
  return new (e || (e = Promise))(function(o, r) {
    function a(h) {
      try {
        c(n.next(h));
      } catch (u) {
        r(u);
      }
    }
    function l(h) {
      try {
        c(n.throw(h));
      } catch (u) {
        r(u);
      }
    }
    function c(h) {
      h.done ? o(h.value) : i(h.value).then(a, l);
    }
    c((n = n.apply(s, t || [])).next());
  });
}
function cg(s) {
  s.forEach((t) => {
    Object.hasOwn(t, "append") || Object.defineProperty(t, "append", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value(...e) {
        const n = document.createDocumentFragment();
        e.forEach((i) => {
          const o = i instanceof Node;
          n.appendChild(o ? i : document.createTextNode(String(i)));
        }), this.appendChild(n);
      }
    });
  });
}
typeof window == "object" && window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
typeof window < "u" && ((s) => {
  cg(s);
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
var ic = typeof global == "object" && global && global.Object === Object && global, hg = typeof self == "object" && self && self.Object === Object && self, ge = ic || hg || Function("return this")(), ie = ge.Symbol, sc = Object.prototype, ug = sc.hasOwnProperty, dg = sc.toString, Hn = ie ? ie.toStringTag : void 0;
function gg(s) {
  var t = ug.call(s, Hn), e = s[Hn];
  try {
    s[Hn] = void 0;
    var n = !0;
  } catch {
  }
  var i = dg.call(s);
  return n && (t ? s[Hn] = e : delete s[Hn]), i;
}
var fg = Object.prototype, pg = fg.toString;
function mg(s) {
  return pg.call(s);
}
var bg = "[object Null]", yg = "[object Undefined]", ta = ie ? ie.toStringTag : void 0;
function He(s) {
  return s == null ? s === void 0 ? yg : bg : ta && ta in Object(s) ? gg(s) : mg(s);
}
function de(s) {
  return s != null && typeof s == "object";
}
var Cg = "[object Symbol]";
function ve(s) {
  return typeof s == "symbol" || de(s) && He(s) == Cg;
}
function ls(s, t) {
  for (var e = -1, n = s == null ? 0 : s.length, i = Array(n); ++e < n; )
    i[e] = t(s[e], e, s);
  return i;
}
var Dt = Array.isArray, ea = ie ? ie.prototype : void 0, na = ea ? ea.toString : void 0;
function oc(s) {
  if (typeof s == "string")
    return s;
  if (Dt(s))
    return ls(s, oc) + "";
  if (ve(s))
    return na ? na.call(s) : "";
  var t = s + "";
  return t == "0" && 1 / s == -1 / 0 ? "-0" : t;
}
var Ag = /\s/;
function wg(s) {
  for (var t = s.length; t-- && Ag.test(s.charAt(t)); )
    ;
  return t;
}
var vg = /^\s+/;
function xg(s) {
  return s && s.slice(0, wg(s) + 1).replace(vg, "");
}
function bt(s) {
  var t = typeof s;
  return s != null && (t == "object" || t == "function");
}
var ia = NaN, Eg = /^[-+]0x[0-9a-f]+$/i, Sg = /^0b[01]+$/i, Mg = /^0o[0-7]+$/i, Bg = parseInt;
function _n(s) {
  if (typeof s == "number")
    return s;
  if (ve(s))
    return ia;
  if (bt(s)) {
    var t = typeof s.valueOf == "function" ? s.valueOf() : s;
    s = bt(t) ? t + "" : t;
  }
  if (typeof s != "string")
    return s === 0 ? s : +s;
  s = xg(s);
  var e = Sg.test(s);
  return e || Mg.test(s) ? Bg(s.slice(2), e ? 2 : 8) : Eg.test(s) ? ia : +s;
}
function Ln(s) {
  return s;
}
var Ig = "[object AsyncFunction]", Pg = "[object Function]", Tg = "[object GeneratorFunction]", kg = "[object Proxy]";
function ar(s) {
  if (!bt(s))
    return !1;
  var t = He(s);
  return t == Pg || t == Tg || t == Ig || t == kg;
}
var to = ge["__core-js_shared__"], sa = function() {
  var s = /[^.]+$/.exec(to && to.keys && to.keys.IE_PROTO || "");
  return s ? "Symbol(src)_1." + s : "";
}();
function Og(s) {
  return !!sa && sa in s;
}
var Rg = Function.prototype, Dg = Rg.toString;
function hn(s) {
  if (s != null) {
    try {
      return Dg.call(s);
    } catch {
    }
    try {
      return s + "";
    } catch {
    }
  }
  return "";
}
var Qg = /[\\^$.*+?()[\]{}|]/g, Ng = /^\[object .+?Constructor\]$/, Lg = Function.prototype, Fg = Object.prototype, zg = Lg.toString, Ug = Fg.hasOwnProperty, Kg = RegExp(
  "^" + zg.call(Ug).replace(Qg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jg(s) {
  if (!bt(s) || Og(s))
    return !1;
  var t = ar(s) ? Kg : Ng;
  return t.test(hn(s));
}
function jg(s, t) {
  return s == null ? void 0 : s[t];
}
function un(s, t) {
  var e = jg(s, t);
  return Jg(e) ? e : void 0;
}
var So = un(ge, "WeakMap"), oa = Object.create, Gg = /* @__PURE__ */ function() {
  function s() {
  }
  return function(t) {
    if (!bt(t))
      return {};
    if (oa)
      return oa(t);
    s.prototype = t;
    var e = new s();
    return s.prototype = void 0, e;
  };
}();
function rc(s, t, e) {
  switch (e.length) {
    case 0:
      return s.call(t);
    case 1:
      return s.call(t, e[0]);
    case 2:
      return s.call(t, e[0], e[1]);
    case 3:
      return s.call(t, e[0], e[1], e[2]);
  }
  return s.apply(t, e);
}
function Vg() {
}
function ac(s, t) {
  var e = -1, n = s.length;
  for (t || (t = Array(n)); ++e < n; )
    t[e] = s[e];
  return t;
}
var Yg = 800, Hg = 16, Wg = Date.now;
function qg(s) {
  var t = 0, e = 0;
  return function() {
    var n = Wg(), i = Hg - (n - e);
    if (e = n, i > 0) {
      if (++t >= Yg)
        return arguments[0];
    } else
      t = 0;
    return s.apply(void 0, arguments);
  };
}
function Xg(s) {
  return function() {
    return s;
  };
}
var ds = function() {
  try {
    var s = un(Object, "defineProperty");
    return s({}, "", {}), s;
  } catch {
  }
}(), $g = ds ? function(s, t) {
  return ds(s, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xg(t),
    writable: !0
  });
} : Ln, lc = qg($g);
function _g(s, t) {
  for (var e = -1, n = s == null ? 0 : s.length; ++e < n && t(s[e], e, s) !== !1; )
    ;
  return s;
}
function Zg(s, t, e, n) {
  for (var i = s.length, o = e + -1; ++o < i; )
    if (t(s[o], o, s))
      return o;
  return -1;
}
function tf(s) {
  return s !== s;
}
function ef(s, t, e) {
  for (var n = e - 1, i = s.length; ++n < i; )
    if (s[n] === t)
      return n;
  return -1;
}
function nf(s, t, e) {
  return t === t ? ef(s, t, e) : Zg(s, tf, e);
}
function cc(s, t) {
  var e = s == null ? 0 : s.length;
  return !!e && nf(s, t, 0) > -1;
}
var sf = 9007199254740991, of = /^(?:0|[1-9]\d*)$/;
function Is(s, t) {
  var e = typeof s;
  return t = t ?? sf, !!t && (e == "number" || e != "symbol" && of.test(s)) && s > -1 && s % 1 == 0 && s < t;
}
function Ps(s, t, e) {
  t == "__proto__" && ds ? ds(s, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : s[t] = e;
}
function Fn(s, t) {
  return s === t || s !== s && t !== t;
}
var rf = Object.prototype, af = rf.hasOwnProperty;
function lr(s, t, e) {
  var n = s[t];
  (!(af.call(s, t) && Fn(n, e)) || e === void 0 && !(t in s)) && Ps(s, t, e);
}
function Ti(s, t, e, n) {
  var i = !e;
  e || (e = {});
  for (var o = -1, r = t.length; ++o < r; ) {
    var a = t[o], l = void 0;
    l === void 0 && (l = s[a]), i ? Ps(e, a, l) : lr(e, a, l);
  }
  return e;
}
var ra = Math.max;
function hc(s, t, e) {
  return t = ra(t === void 0 ? s.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, o = ra(n.length - t, 0), r = Array(o); ++i < o; )
      r[i] = n[t + i];
    i = -1;
    for (var a = Array(t + 1); ++i < t; )
      a[i] = n[i];
    return a[t] = e(r), rc(s, this, a);
  };
}
function zn(s, t) {
  return lc(hc(s, t, Ln), s + "");
}
var lf = 9007199254740991;
function cr(s) {
  return typeof s == "number" && s > -1 && s % 1 == 0 && s <= lf;
}
function dn(s) {
  return s != null && cr(s.length) && !ar(s);
}
function gs(s, t, e) {
  if (!bt(e))
    return !1;
  var n = typeof t;
  return (n == "number" ? dn(e) && Is(t, e.length) : n == "string" && t in e) ? Fn(e[t], s) : !1;
}
function uc(s) {
  return zn(function(t, e) {
    var n = -1, i = e.length, o = i > 1 ? e[i - 1] : void 0, r = i > 2 ? e[2] : void 0;
    for (o = s.length > 3 && typeof o == "function" ? (i--, o) : void 0, r && gs(e[0], e[1], r) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++n < i; ) {
      var a = e[n];
      a && s(t, a, n, o);
    }
    return t;
  });
}
var cf = Object.prototype;
function Ts(s) {
  var t = s && s.constructor, e = typeof t == "function" && t.prototype || cf;
  return s === e;
}
function hf(s, t) {
  for (var e = -1, n = Array(s); ++e < s; )
    n[e] = t(e);
  return n;
}
var uf = "[object Arguments]";
function aa(s) {
  return de(s) && He(s) == uf;
}
var dc = Object.prototype, df = dc.hasOwnProperty, gf = dc.propertyIsEnumerable, Mn = aa(/* @__PURE__ */ function() {
  return arguments;
}()) ? aa : function(s) {
  return de(s) && df.call(s, "callee") && !gf.call(s, "callee");
};
function ff() {
  return !1;
}
var gc = typeof exports == "object" && exports && !exports.nodeType && exports, la = gc && typeof module == "object" && module && !module.nodeType && module, pf = la && la.exports === gc, ca = pf ? ge.Buffer : void 0, mf = ca ? ca.isBuffer : void 0, Bn = mf || ff, bf = "[object Arguments]", yf = "[object Array]", Cf = "[object Boolean]", Af = "[object Date]", wf = "[object Error]", vf = "[object Function]", xf = "[object Map]", Ef = "[object Number]", Sf = "[object Object]", Mf = "[object RegExp]", Bf = "[object Set]", If = "[object String]", Pf = "[object WeakMap]", Tf = "[object ArrayBuffer]", kf = "[object DataView]", Of = "[object Float32Array]", Rf = "[object Float64Array]", Df = "[object Int8Array]", Qf = "[object Int16Array]", Nf = "[object Int32Array]", Lf = "[object Uint8Array]", Ff = "[object Uint8ClampedArray]", zf = "[object Uint16Array]", Uf = "[object Uint32Array]", dt = {};
dt[Of] = dt[Rf] = dt[Df] = dt[Qf] = dt[Nf] = dt[Lf] = dt[Ff] = dt[zf] = dt[Uf] = !0;
dt[bf] = dt[yf] = dt[Tf] = dt[Cf] = dt[kf] = dt[Af] = dt[wf] = dt[vf] = dt[xf] = dt[Ef] = dt[Sf] = dt[Mf] = dt[Bf] = dt[If] = dt[Pf] = !1;
function Kf(s) {
  return de(s) && cr(s.length) && !!dt[He(s)];
}
function ks(s) {
  return function(t) {
    return s(t);
  };
}
var fc = typeof exports == "object" && exports && !exports.nodeType && exports, Zn = fc && typeof module == "object" && module && !module.nodeType && module, Jf = Zn && Zn.exports === fc, eo = Jf && ic.process, In = function() {
  try {
    var s = Zn && Zn.require && Zn.require("util").types;
    return s || eo && eo.binding && eo.binding("util");
  } catch {
  }
}(), ha = In && In.isTypedArray, Os = ha ? ks(ha) : Kf, jf = Object.prototype, Gf = jf.hasOwnProperty;
function pc(s, t) {
  var e = Dt(s), n = !e && Mn(s), i = !e && !n && Bn(s), o = !e && !n && !i && Os(s), r = e || n || i || o, a = r ? hf(s.length, String) : [], l = a.length;
  for (var c in s)
    (t || Gf.call(s, c)) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Is(c, l))) && a.push(c);
  return a;
}
function mc(s, t) {
  return function(e) {
    return s(t(e));
  };
}
var Vf = mc(Object.keys, Object), Yf = Object.prototype, Hf = Yf.hasOwnProperty;
function bc(s) {
  if (!Ts(s))
    return Vf(s);
  var t = [];
  for (var e in Object(s))
    Hf.call(s, e) && e != "constructor" && t.push(e);
  return t;
}
function ki(s) {
  return dn(s) ? pc(s) : bc(s);
}
function Wf(s) {
  var t = [];
  if (s != null)
    for (var e in Object(s))
      t.push(e);
  return t;
}
var qf = Object.prototype, Xf = qf.hasOwnProperty;
function $f(s) {
  if (!bt(s))
    return Wf(s);
  var t = Ts(s), e = [];
  for (var n in s)
    n == "constructor" && (t || !Xf.call(s, n)) || e.push(n);
  return e;
}
function Un(s) {
  return dn(s) ? pc(s, !0) : $f(s);
}
var _f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zf = /^\w*$/;
function hr(s, t) {
  if (Dt(s))
    return !1;
  var e = typeof s;
  return e == "number" || e == "symbol" || e == "boolean" || s == null || ve(s) ? !0 : Zf.test(s) || !_f.test(s) || t != null && s in Object(t);
}
var ai = un(Object, "create");
function tp() {
  this.__data__ = ai ? ai(null) : {}, this.size = 0;
}
function ep(s) {
  var t = this.has(s) && delete this.__data__[s];
  return this.size -= t ? 1 : 0, t;
}
var np = "__lodash_hash_undefined__", ip = Object.prototype, sp = ip.hasOwnProperty;
function op(s) {
  var t = this.__data__;
  if (ai) {
    var e = t[s];
    return e === np ? void 0 : e;
  }
  return sp.call(t, s) ? t[s] : void 0;
}
var rp = Object.prototype, ap = rp.hasOwnProperty;
function lp(s) {
  var t = this.__data__;
  return ai ? t[s] !== void 0 : ap.call(t, s);
}
var cp = "__lodash_hash_undefined__";
function hp(s, t) {
  var e = this.__data__;
  return this.size += this.has(s) ? 0 : 1, e[s] = ai && t === void 0 ? cp : t, this;
}
function rn(s) {
  var t = -1, e = s == null ? 0 : s.length;
  for (this.clear(); ++t < e; ) {
    var n = s[t];
    this.set(n[0], n[1]);
  }
}
rn.prototype.clear = tp;
rn.prototype.delete = ep;
rn.prototype.get = op;
rn.prototype.has = lp;
rn.prototype.set = hp;
function up() {
  this.__data__ = [], this.size = 0;
}
function Rs(s, t) {
  for (var e = s.length; e--; )
    if (Fn(s[e][0], t))
      return e;
  return -1;
}
var dp = Array.prototype, gp = dp.splice;
function fp(s) {
  var t = this.__data__, e = Rs(t, s);
  if (e < 0)
    return !1;
  var n = t.length - 1;
  return e == n ? t.pop() : gp.call(t, e, 1), --this.size, !0;
}
function pp(s) {
  var t = this.__data__, e = Rs(t, s);
  return e < 0 ? void 0 : t[e][1];
}
function mp(s) {
  return Rs(this.__data__, s) > -1;
}
function bp(s, t) {
  var e = this.__data__, n = Rs(e, s);
  return n < 0 ? (++this.size, e.push([s, t])) : e[n][1] = t, this;
}
function Oe(s) {
  var t = -1, e = s == null ? 0 : s.length;
  for (this.clear(); ++t < e; ) {
    var n = s[t];
    this.set(n[0], n[1]);
  }
}
Oe.prototype.clear = up;
Oe.prototype.delete = fp;
Oe.prototype.get = pp;
Oe.prototype.has = mp;
Oe.prototype.set = bp;
var li = un(ge, "Map");
function yp() {
  this.size = 0, this.__data__ = {
    hash: new rn(),
    map: new (li || Oe)(),
    string: new rn()
  };
}
function Cp(s) {
  var t = typeof s;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? s !== "__proto__" : s === null;
}
function Ds(s, t) {
  var e = s.__data__;
  return Cp(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function Ap(s) {
  var t = Ds(this, s).delete(s);
  return this.size -= t ? 1 : 0, t;
}
function wp(s) {
  return Ds(this, s).get(s);
}
function vp(s) {
  return Ds(this, s).has(s);
}
function xp(s, t) {
  var e = Ds(this, s), n = e.size;
  return e.set(s, t), this.size += e.size == n ? 0 : 1, this;
}
function Re(s) {
  var t = -1, e = s == null ? 0 : s.length;
  for (this.clear(); ++t < e; ) {
    var n = s[t];
    this.set(n[0], n[1]);
  }
}
Re.prototype.clear = yp;
Re.prototype.delete = Ap;
Re.prototype.get = wp;
Re.prototype.has = vp;
Re.prototype.set = xp;
var Ep = "Expected a function";
function ur(s, t) {
  if (typeof s != "function" || t != null && typeof t != "function")
    throw new TypeError(Ep);
  var e = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var r = s.apply(this, n);
    return e.cache = o.set(i, r) || o, r;
  };
  return e.cache = new (ur.Cache || Re)(), e;
}
ur.Cache = Re;
var Sp = 500;
function Mp(s) {
  var t = ur(s, function(n) {
    return e.size === Sp && e.clear(), n;
  }), e = t.cache;
  return t;
}
var Bp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ip = /\\(\\)?/g, Pp = Mp(function(s) {
  var t = [];
  return s.charCodeAt(0) === 46 && t.push(""), s.replace(Bp, function(e, n, i, o) {
    t.push(i ? o.replace(Ip, "$1") : n || e);
  }), t;
});
function Kn(s) {
  return s == null ? "" : oc(s);
}
function Qs(s, t) {
  return Dt(s) ? s : hr(s, t) ? [s] : Pp(Kn(s));
}
function Oi(s) {
  if (typeof s == "string" || ve(s))
    return s;
  var t = s + "";
  return t == "0" && 1 / s == -1 / 0 ? "-0" : t;
}
function Ns(s, t) {
  t = Qs(t, s);
  for (var e = 0, n = t.length; s != null && e < n; )
    s = s[Oi(t[e++])];
  return e && e == n ? s : void 0;
}
function Tp(s, t, e) {
  var n = s == null ? void 0 : Ns(s, t);
  return n === void 0 ? e : n;
}
function dr(s, t) {
  for (var e = -1, n = t.length, i = s.length; ++e < n; )
    s[i + e] = t[e];
  return s;
}
var ua = ie ? ie.isConcatSpreadable : void 0;
function kp(s) {
  return Dt(s) || Mn(s) || !!(ua && s && s[ua]);
}
function Ls(s, t, e, n, i) {
  var o = -1, r = s.length;
  for (e || (e = kp), i || (i = []); ++o < r; ) {
    var a = s[o];
    e(a) ? dr(i, a) : n || (i[i.length] = a);
  }
  return i;
}
function Op(s) {
  var t = s == null ? 0 : s.length;
  return t ? Ls(s) : [];
}
function Rp(s) {
  return lc(hc(s, void 0, Op), s + "");
}
var gr = mc(Object.getPrototypeOf, Object), Dp = "[object Object]", Qp = Function.prototype, Np = Object.prototype, yc = Qp.toString, Lp = Np.hasOwnProperty, Fp = yc.call(Object);
function fe(s) {
  if (!de(s) || He(s) != Dp)
    return !1;
  var t = gr(s);
  if (t === null)
    return !0;
  var e = Lp.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && yc.call(e) == Fp;
}
function zp(s, t, e) {
  var n = -1, i = s.length;
  t < 0 && (t = -t > i ? 0 : i + t), e = e > i ? i : e, e < 0 && (e += i), i = t > e ? 0 : e - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++n < i; )
    o[n] = s[n + t];
  return o;
}
function Up(s, t, e) {
  var n = s.length;
  return e = e === void 0 ? n : e, !t && e >= n ? s : zp(s, t, e);
}
var Kp = "\\ud800-\\udfff", Jp = "\\u0300-\\u036f", jp = "\\ufe20-\\ufe2f", Gp = "\\u20d0-\\u20ff", Vp = Jp + jp + Gp, Yp = "\\ufe0e\\ufe0f", Hp = "\\u200d", Wp = RegExp("[" + Hp + Kp + Vp + Yp + "]");
function Cc(s) {
  return Wp.test(s);
}
function qp(s) {
  return s.split("");
}
var Ac = "\\ud800-\\udfff", Xp = "\\u0300-\\u036f", $p = "\\ufe20-\\ufe2f", _p = "\\u20d0-\\u20ff", Zp = Xp + $p + _p, tm = "\\ufe0e\\ufe0f", em = "[" + Ac + "]", Mo = "[" + Zp + "]", Bo = "\\ud83c[\\udffb-\\udfff]", nm = "(?:" + Mo + "|" + Bo + ")", wc = "[^" + Ac + "]", vc = "(?:\\ud83c[\\udde6-\\uddff]){2}", xc = "[\\ud800-\\udbff][\\udc00-\\udfff]", im = "\\u200d", Ec = nm + "?", Sc = "[" + tm + "]?", sm = "(?:" + im + "(?:" + [wc, vc, xc].join("|") + ")" + Sc + Ec + ")*", om = Sc + Ec + sm, rm = "(?:" + [wc + Mo + "?", Mo, vc, xc, em].join("|") + ")", am = RegExp(Bo + "(?=" + Bo + ")|" + rm + om, "g");
function lm(s) {
  return s.match(am) || [];
}
function cm(s) {
  return Cc(s) ? lm(s) : qp(s);
}
function Mc(s) {
  return function(t) {
    t = Kn(t);
    var e = Cc(t) ? cm(t) : void 0, n = e ? e[0] : t.charAt(0), i = e ? Up(e, 1).join("") : t.slice(1);
    return n[s]() + i;
  };
}
var fs = Mc("toUpperCase");
function hm(s) {
  return fs(Kn(s).toLowerCase());
}
function um(s, t, e, n) {
  for (var i = -1, o = s == null ? 0 : s.length; ++i < o; )
    e = t(e, s[i], i, s);
  return e;
}
function dm(s) {
  return function(t) {
    return s == null ? void 0 : s[t];
  };
}
var gm = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, fm = dm(gm), pm = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, mm = "\\u0300-\\u036f", bm = "\\ufe20-\\ufe2f", ym = "\\u20d0-\\u20ff", Cm = mm + bm + ym, Am = "[" + Cm + "]", wm = RegExp(Am, "g");
function vm(s) {
  return s = Kn(s), s && s.replace(pm, fm).replace(wm, "");
}
var xm = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Em(s) {
  return s.match(xm) || [];
}
var Sm = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Mm(s) {
  return Sm.test(s);
}
var Bc = "\\ud800-\\udfff", Bm = "\\u0300-\\u036f", Im = "\\ufe20-\\ufe2f", Pm = "\\u20d0-\\u20ff", Tm = Bm + Im + Pm, Ic = "\\u2700-\\u27bf", Pc = "a-z\\xdf-\\xf6\\xf8-\\xff", km = "\\xac\\xb1\\xd7\\xf7", Om = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Rm = "\\u2000-\\u206f", Dm = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Tc = "A-Z\\xc0-\\xd6\\xd8-\\xde", Qm = "\\ufe0e\\ufe0f", kc = km + Om + Rm + Dm, Oc = "['’]", da = "[" + kc + "]", Nm = "[" + Tm + "]", Rc = "\\d+", Lm = "[" + Ic + "]", Dc = "[" + Pc + "]", Qc = "[^" + Bc + kc + Rc + Ic + Pc + Tc + "]", Fm = "\\ud83c[\\udffb-\\udfff]", zm = "(?:" + Nm + "|" + Fm + ")", Um = "[^" + Bc + "]", Nc = "(?:\\ud83c[\\udde6-\\uddff]){2}", Lc = "[\\ud800-\\udbff][\\udc00-\\udfff]", yn = "[" + Tc + "]", Km = "\\u200d", ga = "(?:" + Dc + "|" + Qc + ")", Jm = "(?:" + yn + "|" + Qc + ")", fa = "(?:" + Oc + "(?:d|ll|m|re|s|t|ve))?", pa = "(?:" + Oc + "(?:D|LL|M|RE|S|T|VE))?", Fc = zm + "?", zc = "[" + Qm + "]?", jm = "(?:" + Km + "(?:" + [Um, Nc, Lc].join("|") + ")" + zc + Fc + ")*", Gm = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Vm = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ym = zc + Fc + jm, Hm = "(?:" + [Lm, Nc, Lc].join("|") + ")" + Ym, Wm = RegExp([
  yn + "?" + Dc + "+" + fa + "(?=" + [da, yn, "$"].join("|") + ")",
  Jm + "+" + pa + "(?=" + [da, yn + ga, "$"].join("|") + ")",
  yn + "?" + ga + "+" + fa,
  yn + "+" + pa,
  Vm,
  Gm,
  Rc,
  Hm
].join("|"), "g");
function qm(s) {
  return s.match(Wm) || [];
}
function Xm(s, t, e) {
  return s = Kn(s), t = t, t === void 0 ? Mm(s) ? qm(s) : Em(s) : s.match(t) || [];
}
var $m = "['’]", _m = RegExp($m, "g");
function Uc(s) {
  return function(t) {
    return um(Xm(vm(t).replace(_m, "")), s, "");
  };
}
var Ri = Uc(function(s, t, e) {
  return t = t.toLowerCase(), s + (e ? hm(t) : t);
});
function ma() {
  if (!arguments.length)
    return [];
  var s = arguments[0];
  return Dt(s) ? s : [s];
}
function Zm(s, t, e) {
  return s === s && (e !== void 0 && (s = s <= e ? s : e), t !== void 0 && (s = s >= t ? s : t)), s;
}
function nn(s, t, e) {
  return e === void 0 && (e = t, t = void 0), e !== void 0 && (e = _n(e), e = e === e ? e : 0), t !== void 0 && (t = _n(t), t = t === t ? t : 0), Zm(_n(s), t, e);
}
function t0() {
  this.__data__ = new Oe(), this.size = 0;
}
function e0(s) {
  var t = this.__data__, e = t.delete(s);
  return this.size = t.size, e;
}
function n0(s) {
  return this.__data__.get(s);
}
function i0(s) {
  return this.__data__.has(s);
}
var s0 = 200;
function o0(s, t) {
  var e = this.__data__;
  if (e instanceof Oe) {
    var n = e.__data__;
    if (!li || n.length < s0 - 1)
      return n.push([s, t]), this.size = ++e.size, this;
    e = this.__data__ = new Re(n);
  }
  return e.set(s, t), this.size = e.size, this;
}
function ce(s) {
  var t = this.__data__ = new Oe(s);
  this.size = t.size;
}
ce.prototype.clear = t0;
ce.prototype.delete = e0;
ce.prototype.get = n0;
ce.prototype.has = i0;
ce.prototype.set = o0;
function r0(s, t) {
  return s && Ti(t, ki(t), s);
}
function a0(s, t) {
  return s && Ti(t, Un(t), s);
}
var Kc = typeof exports == "object" && exports && !exports.nodeType && exports, ba = Kc && typeof module == "object" && module && !module.nodeType && module, l0 = ba && ba.exports === Kc, ya = l0 ? ge.Buffer : void 0, Ca = ya ? ya.allocUnsafe : void 0;
function Jc(s, t) {
  if (t)
    return s.slice();
  var e = s.length, n = Ca ? Ca(e) : new s.constructor(e);
  return s.copy(n), n;
}
function c0(s, t) {
  for (var e = -1, n = s == null ? 0 : s.length, i = 0, o = []; ++e < n; ) {
    var r = s[e];
    t(r, e, s) && (o[i++] = r);
  }
  return o;
}
function jc() {
  return [];
}
var h0 = Object.prototype, u0 = h0.propertyIsEnumerable, Aa = Object.getOwnPropertySymbols, fr = Aa ? function(s) {
  return s == null ? [] : (s = Object(s), c0(Aa(s), function(t) {
    return u0.call(s, t);
  }));
} : jc;
function d0(s, t) {
  return Ti(s, fr(s), t);
}
var g0 = Object.getOwnPropertySymbols, Gc = g0 ? function(s) {
  for (var t = []; s; )
    dr(t, fr(s)), s = gr(s);
  return t;
} : jc;
function f0(s, t) {
  return Ti(s, Gc(s), t);
}
function Vc(s, t, e) {
  var n = t(s);
  return Dt(s) ? n : dr(n, e(s));
}
function Io(s) {
  return Vc(s, ki, fr);
}
function p0(s) {
  return Vc(s, Un, Gc);
}
var Po = un(ge, "DataView"), To = un(ge, "Promise"), xn = un(ge, "Set"), wa = "[object Map]", m0 = "[object Object]", va = "[object Promise]", xa = "[object Set]", Ea = "[object WeakMap]", Sa = "[object DataView]", b0 = hn(Po), y0 = hn(li), C0 = hn(To), A0 = hn(xn), w0 = hn(So), _t = He;
(Po && _t(new Po(new ArrayBuffer(1))) != Sa || li && _t(new li()) != wa || To && _t(To.resolve()) != va || xn && _t(new xn()) != xa || So && _t(new So()) != Ea) && (_t = function(s) {
  var t = He(s), e = t == m0 ? s.constructor : void 0, n = e ? hn(e) : "";
  if (n)
    switch (n) {
      case b0:
        return Sa;
      case y0:
        return wa;
      case C0:
        return va;
      case A0:
        return xa;
      case w0:
        return Ea;
    }
  return t;
});
var v0 = Object.prototype, x0 = v0.hasOwnProperty;
function E0(s) {
  var t = s.length, e = new s.constructor(t);
  return t && typeof s[0] == "string" && x0.call(s, "index") && (e.index = s.index, e.input = s.input), e;
}
var ps = ge.Uint8Array;
function pr(s) {
  var t = new s.constructor(s.byteLength);
  return new ps(t).set(new ps(s)), t;
}
function S0(s, t) {
  var e = t ? pr(s.buffer) : s.buffer;
  return new s.constructor(e, s.byteOffset, s.byteLength);
}
var M0 = /\w*$/;
function B0(s) {
  var t = new s.constructor(s.source, M0.exec(s));
  return t.lastIndex = s.lastIndex, t;
}
var Ma = ie ? ie.prototype : void 0, Ba = Ma ? Ma.valueOf : void 0;
function I0(s) {
  return Ba ? Object(Ba.call(s)) : {};
}
function Yc(s, t) {
  var e = t ? pr(s.buffer) : s.buffer;
  return new s.constructor(e, s.byteOffset, s.length);
}
var P0 = "[object Boolean]", T0 = "[object Date]", k0 = "[object Map]", O0 = "[object Number]", R0 = "[object RegExp]", D0 = "[object Set]", Q0 = "[object String]", N0 = "[object Symbol]", L0 = "[object ArrayBuffer]", F0 = "[object DataView]", z0 = "[object Float32Array]", U0 = "[object Float64Array]", K0 = "[object Int8Array]", J0 = "[object Int16Array]", j0 = "[object Int32Array]", G0 = "[object Uint8Array]", V0 = "[object Uint8ClampedArray]", Y0 = "[object Uint16Array]", H0 = "[object Uint32Array]";
function W0(s, t, e) {
  var n = s.constructor;
  switch (t) {
    case L0:
      return pr(s);
    case P0:
    case T0:
      return new n(+s);
    case F0:
      return S0(s, e);
    case z0:
    case U0:
    case K0:
    case J0:
    case j0:
    case G0:
    case V0:
    case Y0:
    case H0:
      return Yc(s, e);
    case k0:
      return new n();
    case O0:
    case Q0:
      return new n(s);
    case R0:
      return B0(s);
    case D0:
      return new n();
    case N0:
      return I0(s);
  }
}
function Hc(s) {
  return typeof s.constructor == "function" && !Ts(s) ? Gg(gr(s)) : {};
}
var q0 = "[object Map]";
function X0(s) {
  return de(s) && _t(s) == q0;
}
var Ia = In && In.isMap, $0 = Ia ? ks(Ia) : X0, _0 = "[object Set]";
function Z0(s) {
  return de(s) && _t(s) == _0;
}
var Pa = In && In.isSet, tb = Pa ? ks(Pa) : Z0, eb = 1, nb = 2, ib = 4, Wc = "[object Arguments]", sb = "[object Array]", ob = "[object Boolean]", rb = "[object Date]", ab = "[object Error]", qc = "[object Function]", lb = "[object GeneratorFunction]", cb = "[object Map]", hb = "[object Number]", Xc = "[object Object]", ub = "[object RegExp]", db = "[object Set]", gb = "[object String]", fb = "[object Symbol]", pb = "[object WeakMap]", mb = "[object ArrayBuffer]", bb = "[object DataView]", yb = "[object Float32Array]", Cb = "[object Float64Array]", Ab = "[object Int8Array]", wb = "[object Int16Array]", vb = "[object Int32Array]", xb = "[object Uint8Array]", Eb = "[object Uint8ClampedArray]", Sb = "[object Uint16Array]", Mb = "[object Uint32Array]", ht = {};
ht[Wc] = ht[sb] = ht[mb] = ht[bb] = ht[ob] = ht[rb] = ht[yb] = ht[Cb] = ht[Ab] = ht[wb] = ht[vb] = ht[cb] = ht[hb] = ht[Xc] = ht[ub] = ht[db] = ht[gb] = ht[fb] = ht[xb] = ht[Eb] = ht[Sb] = ht[Mb] = !0;
ht[ab] = ht[qc] = ht[pb] = !1;
function ti(s, t, e, n, i, o) {
  var r, a = t & eb, l = t & nb, c = t & ib;
  if (r !== void 0)
    return r;
  if (!bt(s))
    return s;
  var h = Dt(s);
  if (h) {
    if (r = E0(s), !a)
      return ac(s, r);
  } else {
    var u = _t(s), d = u == qc || u == lb;
    if (Bn(s))
      return Jc(s, a);
    if (u == Xc || u == Wc || d && !i) {
      if (r = l || d ? {} : Hc(s), !a)
        return l ? f0(s, a0(r, s)) : d0(s, r0(r, s));
    } else {
      if (!ht[u])
        return i ? s : {};
      r = W0(s, u, a);
    }
  }
  o || (o = new ce());
  var g = o.get(s);
  if (g)
    return g;
  o.set(s, r), tb(s) ? s.forEach(function(m) {
    r.add(ti(m, t, e, m, s, o));
  }) : $0(s) && s.forEach(function(m, b) {
    r.set(b, ti(m, t, e, b, s, o));
  });
  var f = c ? l ? p0 : Io : l ? Un : ki, p = h ? void 0 : f(s);
  return _g(p || s, function(m, b) {
    p && (b = m, m = s[b]), lr(r, b, ti(m, t, e, b, s, o));
  }), r;
}
var Bb = 4;
function ko(s) {
  return ti(s, Bb);
}
var Ib = 1, Pb = 4;
function gt(s) {
  return ti(s, Ib | Pb);
}
var Tb = "__lodash_hash_undefined__";
function kb(s) {
  return this.__data__.set(s, Tb), this;
}
function Ob(s) {
  return this.__data__.has(s);
}
function Pn(s) {
  var t = -1, e = s == null ? 0 : s.length;
  for (this.__data__ = new Re(); ++t < e; )
    this.add(s[t]);
}
Pn.prototype.add = Pn.prototype.push = kb;
Pn.prototype.has = Ob;
function Rb(s, t) {
  for (var e = -1, n = s == null ? 0 : s.length; ++e < n; )
    if (t(s[e], e, s))
      return !0;
  return !1;
}
function mr(s, t) {
  return s.has(t);
}
var Db = 1, Qb = 2;
function $c(s, t, e, n, i, o) {
  var r = e & Db, a = s.length, l = t.length;
  if (a != l && !(r && l > a))
    return !1;
  var c = o.get(s), h = o.get(t);
  if (c && h)
    return c == t && h == s;
  var u = -1, d = !0, g = e & Qb ? new Pn() : void 0;
  for (o.set(s, t), o.set(t, s); ++u < a; ) {
    var f = s[u], p = t[u];
    if (n)
      var m = r ? n(p, f, u, t, s, o) : n(f, p, u, s, t, o);
    if (m !== void 0) {
      if (m)
        continue;
      d = !1;
      break;
    }
    if (g) {
      if (!Rb(t, function(b, y) {
        if (!mr(g, y) && (f === b || i(f, b, e, n, o)))
          return g.push(y);
      })) {
        d = !1;
        break;
      }
    } else if (!(f === p || i(f, p, e, n, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(s), o.delete(t), d;
}
function Nb(s) {
  var t = -1, e = Array(s.size);
  return s.forEach(function(n, i) {
    e[++t] = [i, n];
  }), e;
}
function br(s) {
  var t = -1, e = Array(s.size);
  return s.forEach(function(n) {
    e[++t] = n;
  }), e;
}
var Lb = 1, Fb = 2, zb = "[object Boolean]", Ub = "[object Date]", Kb = "[object Error]", Jb = "[object Map]", jb = "[object Number]", Gb = "[object RegExp]", Vb = "[object Set]", Yb = "[object String]", Hb = "[object Symbol]", Wb = "[object ArrayBuffer]", qb = "[object DataView]", Ta = ie ? ie.prototype : void 0, no = Ta ? Ta.valueOf : void 0;
function Xb(s, t, e, n, i, o, r) {
  switch (e) {
    case qb:
      if (s.byteLength != t.byteLength || s.byteOffset != t.byteOffset)
        return !1;
      s = s.buffer, t = t.buffer;
    case Wb:
      return !(s.byteLength != t.byteLength || !o(new ps(s), new ps(t)));
    case zb:
    case Ub:
    case jb:
      return Fn(+s, +t);
    case Kb:
      return s.name == t.name && s.message == t.message;
    case Gb:
    case Yb:
      return s == t + "";
    case Jb:
      var a = Nb;
    case Vb:
      var l = n & Lb;
      if (a || (a = br), s.size != t.size && !l)
        return !1;
      var c = r.get(s);
      if (c)
        return c == t;
      n |= Fb, r.set(s, t);
      var h = $c(a(s), a(t), n, i, o, r);
      return r.delete(s), h;
    case Hb:
      if (no)
        return no.call(s) == no.call(t);
  }
  return !1;
}
var $b = 1, _b = Object.prototype, Zb = _b.hasOwnProperty;
function ty(s, t, e, n, i, o) {
  var r = e & $b, a = Io(s), l = a.length, c = Io(t), h = c.length;
  if (l != h && !r)
    return !1;
  for (var u = l; u--; ) {
    var d = a[u];
    if (!(r ? d in t : Zb.call(t, d)))
      return !1;
  }
  var g = o.get(s), f = o.get(t);
  if (g && f)
    return g == t && f == s;
  var p = !0;
  o.set(s, t), o.set(t, s);
  for (var m = r; ++u < l; ) {
    d = a[u];
    var b = s[d], y = t[d];
    if (n)
      var A = r ? n(y, b, d, t, s, o) : n(b, y, d, s, t, o);
    if (!(A === void 0 ? b === y || i(b, y, e, n, o) : A)) {
      p = !1;
      break;
    }
    m || (m = d == "constructor");
  }
  if (p && !m) {
    var w = s.constructor, x = t.constructor;
    w != x && "constructor" in s && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof x == "function" && x instanceof x) && (p = !1);
  }
  return o.delete(s), o.delete(t), p;
}
var ey = 1, ka = "[object Arguments]", Oa = "[object Array]", Vi = "[object Object]", ny = Object.prototype, Ra = ny.hasOwnProperty;
function iy(s, t, e, n, i, o) {
  var r = Dt(s), a = Dt(t), l = r ? Oa : _t(s), c = a ? Oa : _t(t);
  l = l == ka ? Vi : l, c = c == ka ? Vi : c;
  var h = l == Vi, u = c == Vi, d = l == c;
  if (d && Bn(s)) {
    if (!Bn(t))
      return !1;
    r = !0, h = !1;
  }
  if (d && !h)
    return o || (o = new ce()), r || Os(s) ? $c(s, t, e, n, i, o) : Xb(s, t, l, e, n, i, o);
  if (!(e & ey)) {
    var g = h && Ra.call(s, "__wrapped__"), f = u && Ra.call(t, "__wrapped__");
    if (g || f) {
      var p = g ? s.value() : s, m = f ? t.value() : t;
      return o || (o = new ce()), i(p, m, e, n, o);
    }
  }
  return d ? (o || (o = new ce()), ty(s, t, e, n, i, o)) : !1;
}
function Fs(s, t, e, n, i) {
  return s === t ? !0 : s == null || t == null || !de(s) && !de(t) ? s !== s && t !== t : iy(s, t, e, n, Fs, i);
}
var sy = 1, oy = 2;
function ry(s, t, e, n) {
  var i = e.length, o = i;
  if (s == null)
    return !o;
  for (s = Object(s); i--; ) {
    var r = e[i];
    if (r[2] ? r[1] !== s[r[0]] : !(r[0] in s))
      return !1;
  }
  for (; ++i < o; ) {
    r = e[i];
    var a = r[0], l = s[a], c = r[1];
    if (r[2]) {
      if (l === void 0 && !(a in s))
        return !1;
    } else {
      var h = new ce(), u;
      if (!(u === void 0 ? Fs(c, l, sy | oy, n, h) : u))
        return !1;
    }
  }
  return !0;
}
function _c(s) {
  return s === s && !bt(s);
}
function ay(s) {
  for (var t = ki(s), e = t.length; e--; ) {
    var n = t[e], i = s[n];
    t[e] = [n, i, _c(i)];
  }
  return t;
}
function Zc(s, t) {
  return function(e) {
    return e == null ? !1 : e[s] === t && (t !== void 0 || s in Object(e));
  };
}
function ly(s) {
  var t = ay(s);
  return t.length == 1 && t[0][2] ? Zc(t[0][0], t[0][1]) : function(e) {
    return e === s || ry(e, s, t);
  };
}
function cy(s, t) {
  return s != null && t in Object(s);
}
function th(s, t, e) {
  t = Qs(t, s);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var r = Oi(t[n]);
    if (!(o = s != null && e(s, r)))
      break;
    s = s[r];
  }
  return o || ++n != i ? o : (i = s == null ? 0 : s.length, !!i && cr(i) && Is(r, i) && (Dt(s) || Mn(s)));
}
function eh(s, t) {
  return s != null && th(s, t, cy);
}
var hy = 1, uy = 2;
function dy(s, t) {
  return hr(s) && _c(t) ? Zc(Oi(s), t) : function(e) {
    var n = Tp(e, s);
    return n === void 0 && n === t ? eh(e, s) : Fs(t, n, hy | uy);
  };
}
function gy(s) {
  return function(t) {
    return t == null ? void 0 : t[s];
  };
}
function fy(s) {
  return function(t) {
    return Ns(t, s);
  };
}
function py(s) {
  return hr(s) ? gy(Oi(s)) : fy(s);
}
function yr(s) {
  return typeof s == "function" ? s : s == null ? Ln : typeof s == "object" ? Dt(s) ? dy(s[0], s[1]) : ly(s) : py(s);
}
function my(s, t, e, n) {
  for (var i = -1, o = s == null ? 0 : s.length; ++i < o; ) {
    var r = s[i];
    t(n, r, e(r), s);
  }
  return n;
}
function by(s) {
  return function(t, e, n) {
    for (var i = -1, o = Object(t), r = n(t), a = r.length; a--; ) {
      var l = r[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var nh = by();
function yy(s, t) {
  return s && nh(s, t, ki);
}
function Cy(s, t) {
  return function(e, n) {
    if (e == null)
      return e;
    if (!dn(e))
      return s(e, n);
    for (var i = e.length, o = -1, r = Object(e); ++o < i && n(r[o], o, r) !== !1; )
      ;
    return e;
  };
}
var ih = Cy(yy);
function Ay(s, t, e, n) {
  return ih(s, function(i, o, r) {
    t(n, i, e(i), r);
  }), n;
}
function wy(s, t) {
  return function(e, n) {
    var i = Dt(e) ? my : Ay, o = t ? t() : {};
    return i(e, s, yr(n), o);
  };
}
var io = function() {
  return ge.Date.now();
}, vy = "Expected a function", xy = Math.max, Ey = Math.min;
function zs(s, t, e) {
  var n, i, o, r, a, l, c = 0, h = !1, u = !1, d = !0;
  if (typeof s != "function")
    throw new TypeError(vy);
  t = _n(t) || 0, bt(e) && (h = !!e.leading, u = "maxWait" in e, o = u ? xy(_n(e.maxWait) || 0, t) : o, d = "trailing" in e ? !!e.trailing : d);
  function g(M) {
    var v = n, S = i;
    return n = i = void 0, c = M, r = s.apply(S, v), r;
  }
  function f(M) {
    return c = M, a = setTimeout(b, t), h ? g(M) : r;
  }
  function p(M) {
    var v = M - l, S = M - c, B = t - v;
    return u ? Ey(B, o - S) : B;
  }
  function m(M) {
    var v = M - l, S = M - c;
    return l === void 0 || v >= t || v < 0 || u && S >= o;
  }
  function b() {
    var M = io();
    if (m(M))
      return y(M);
    a = setTimeout(b, p(M));
  }
  function y(M) {
    return a = void 0, d && n ? g(M) : (n = i = void 0, r);
  }
  function A() {
    a !== void 0 && clearTimeout(a), c = 0, n = l = i = a = void 0;
  }
  function w() {
    return a === void 0 ? r : y(io());
  }
  function x() {
    var M = io(), v = m(M);
    if (n = arguments, i = this, l = M, v) {
      if (a === void 0)
        return f(l);
      if (u)
        return clearTimeout(a), a = setTimeout(b, t), g(l);
    }
    return a === void 0 && (a = setTimeout(b, t)), r;
  }
  return x.cancel = A, x.flush = w, x;
}
var sh = Object.prototype, Sy = sh.hasOwnProperty, My = zn(function(s, t) {
  s = Object(s);
  var e = -1, n = t.length, i = n > 2 ? t[2] : void 0;
  for (i && gs(t[0], t[1], i) && (n = 1); ++e < n; )
    for (var o = t[e], r = Un(o), a = -1, l = r.length; ++a < l; ) {
      var c = r[a], h = s[c];
      (h === void 0 || Fn(h, sh[c]) && !Sy.call(s, c)) && (s[c] = o[c]);
    }
  return s;
});
function Oo(s, t, e) {
  (e !== void 0 && !Fn(s[t], e) || e === void 0 && !(t in s)) && Ps(s, t, e);
}
function ms(s) {
  return de(s) && dn(s);
}
function Ro(s, t) {
  if (!(t === "constructor" && typeof s[t] == "function") && t != "__proto__")
    return s[t];
}
function By(s) {
  return Ti(s, Un(s));
}
function Iy(s, t, e, n, i, o, r) {
  var a = Ro(s, e), l = Ro(t, e), c = r.get(l);
  if (c) {
    Oo(s, e, c);
    return;
  }
  var h = o ? o(a, l, e + "", s, t, r) : void 0, u = h === void 0;
  if (u) {
    var d = Dt(l), g = !d && Bn(l), f = !d && !g && Os(l);
    h = l, d || g || f ? Dt(a) ? h = a : ms(a) ? h = ac(a) : g ? (u = !1, h = Jc(l, !0)) : f ? (u = !1, h = Yc(l, !0)) : h = [] : fe(l) || Mn(l) ? (h = a, Mn(a) ? h = By(a) : (!bt(a) || ar(a)) && (h = Hc(l))) : u = !1;
  }
  u && (r.set(l, h), i(h, l, n, o, r), r.delete(l)), Oo(s, e, h);
}
function Us(s, t, e, n, i) {
  s !== t && nh(t, function(o, r) {
    if (i || (i = new ce()), bt(o))
      Iy(s, t, r, e, Us, n, i);
    else {
      var a = n ? n(Ro(s, r), o, r + "", s, t, i) : void 0;
      a === void 0 && (a = o), Oo(s, r, a);
    }
  }, Un);
}
function oh(s, t, e, n, i, o) {
  return bt(s) && bt(t) && (o.set(t, s), Us(s, t, void 0, oh, o), o.delete(t)), s;
}
var Py = uc(function(s, t, e, n) {
  Us(s, t, e, n);
}), rh = zn(function(s) {
  return s.push(void 0, oh), rc(Py, void 0, s);
}), Ty = 200;
function ky(s, t, e, n) {
  var i = -1, o = cc, r = !0, a = s.length, l = [], c = t.length;
  if (!a)
    return l;
  t.length >= Ty && (o = mr, r = !1, t = new Pn(t));
  t:
    for (; ++i < a; ) {
      var h = s[i], u = h;
      if (h = h !== 0 ? h : 0, r && u === u) {
        for (var d = c; d--; )
          if (t[d] === u)
            continue t;
        l.push(h);
      } else o(t, u, n) || l.push(h);
    }
  return l;
}
var Oy = zn(function(s, t) {
  return ms(s) ? ky(s, Ls(t, 1, ms, !0)) : [];
});
function Ry(s, t) {
  var e = -1, n = dn(s) ? Array(s.length) : [];
  return ih(s, function(i, o, r) {
    n[++e] = t(i, o, r);
  }), n;
}
var Dy = Object.prototype, Qy = Dy.hasOwnProperty, Da = wy(function(s, t, e) {
  Qy.call(s, e) ? s[e].push(t) : Ps(s, e, [t]);
});
function Ny(s, t) {
  return s > t;
}
var Ly = Object.prototype, Fy = Ly.hasOwnProperty;
function zy(s, t) {
  return s != null && Fy.call(s, t);
}
function Yi(s, t) {
  return s != null && th(s, t, zy);
}
var Uy = "[object Map]", Ky = "[object Set]", Jy = Object.prototype, jy = Jy.hasOwnProperty;
function Do(s) {
  if (s == null)
    return !0;
  if (dn(s) && (Dt(s) || typeof s == "string" || typeof s.splice == "function" || Bn(s) || Os(s) || Mn(s)))
    return !s.length;
  var t = _t(s);
  if (t == Uy || t == Ky)
    return !s.size;
  if (Ts(s))
    return !bc(s).length;
  for (var e in s)
    if (jy.call(s, e))
      return !1;
  return !0;
}
function Ie(s, t) {
  return Fs(s, t);
}
var Gy = "[object Number]";
function Be(s) {
  return typeof s == "number" || de(s) && He(s) == Gy;
}
var Vy = Mc("toLowerCase");
function Yy(s, t, e) {
  for (var n = -1, i = s.length; ++n < i; ) {
    var o = s[n], r = t(o);
    if (r != null && (a === void 0 ? r === r && !ve(r) : e(r, a)))
      var a = r, l = o;
  }
  return l;
}
function Hy(s) {
  return s && s.length ? Yy(s, Ln, Ny) : void 0;
}
var pt = uc(function(s, t, e) {
  Us(s, t, e);
});
function Wy(s, t, e, n) {
  if (!bt(s))
    return s;
  t = Qs(t, s);
  for (var i = -1, o = t.length, r = o - 1, a = s; a != null && ++i < o; ) {
    var l = Oi(t[i]), c = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return s;
    if (i != r) {
      var h = a[l];
      c = void 0, c === void 0 && (c = bt(h) ? h : Is(t[i + 1]) ? [] : {});
    }
    lr(a, l, c), a = a[l];
  }
  return s;
}
function qy(s, t, e) {
  for (var n = -1, i = t.length, o = {}; ++n < i; ) {
    var r = t[n], a = Ns(s, r);
    e(a, r) && Wy(o, Qs(r, s), a);
  }
  return o;
}
function Xy(s, t) {
  var e = s.length;
  for (s.sort(t); e--; )
    s[e] = s[e].value;
  return s;
}
function $y(s, t) {
  if (s !== t) {
    var e = s !== void 0, n = s === null, i = s === s, o = ve(s), r = t !== void 0, a = t === null, l = t === t, c = ve(t);
    if (!a && !c && !o && s > t || o && r && l && !a && !c || n && r && l || !e && l || !i)
      return 1;
    if (!n && !o && !c && s < t || c && e && i && !n && !o || a && e && i || !r && i || !l)
      return -1;
  }
  return 0;
}
function _y(s, t, e) {
  for (var n = -1, i = s.criteria, o = t.criteria, r = i.length, a = e.length; ++n < r; ) {
    var l = $y(i[n], o[n]);
    if (l) {
      if (n >= a)
        return l;
      var c = e[n];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return s.index - t.index;
}
function Zy(s, t, e) {
  t.length ? t = ls(t, function(o) {
    return Dt(o) ? function(r) {
      return Ns(r, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [Ln];
  var n = -1;
  t = ls(t, ks(yr));
  var i = Ry(s, function(o, r, a) {
    var l = ls(t, function(c) {
      return c(o);
    });
    return { criteria: l, index: ++n, value: o };
  });
  return Xy(i, function(o, r) {
    return _y(o, r, e);
  });
}
function tC(s, t) {
  return qy(s, t, function(e, n) {
    return eh(s, n);
  });
}
var Qa = Rp(function(s, t) {
  return s == null ? {} : tC(s, t);
}), Cr = zn(function(s, t) {
  if (s == null)
    return [];
  var e = t.length;
  return e > 1 && gs(s, t[0], t[1]) ? t = [] : e > 2 && gs(t[0], t[1], t[2]) && (t = [t[0]]), Zy(s, Ls(t), []);
}), eC = 4294967295, nC = eC - 1, iC = Math.floor, sC = Math.min;
function ah(s, t, e, n) {
  var i = 0, o = s == null ? 0 : s.length;
  if (o === 0)
    return 0;
  t = e(t);
  for (var r = t !== t, a = t === null, l = ve(t), c = t === void 0; i < o; ) {
    var h = iC((i + o) / 2), u = e(s[h]), d = u !== void 0, g = u === null, f = u === u, p = ve(u);
    if (r)
      var m = f;
    else c ? m = f && d : a ? m = f && d && !g : l ? m = f && d && !g && !p : g || p ? m = !1 : m = u < t;
    m ? i = h + 1 : o = h;
  }
  return sC(o, nC);
}
var oC = 4294967295, rC = oC >>> 1;
function aC(s, t, e) {
  var n = 0, i = s == null ? n : s.length;
  if (typeof t == "number" && t === t && i <= rC) {
    for (; n < i; ) {
      var o = n + i >>> 1, r = s[o];
      r !== null && !ve(r) && r < t ? n = o + 1 : i = o;
    }
    return i;
  }
  return ah(s, t, Ln);
}
function lC(s, t) {
  return aC(s, t);
}
function cC(s, t, e) {
  return ah(s, t, yr(e));
}
var hC = Uc(function(s, t, e) {
  return s + (e ? " " : "") + fs(t);
}), uC = "Expected a function";
function dC(s, t, e) {
  var n = !0, i = !0;
  if (typeof s != "function")
    throw new TypeError(uC);
  return bt(e) && (n = "leading" in e ? !0 : n, i = "trailing" in e ? !!e.trailing : i), zs(s, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var gC = 1 / 0, fC = xn && 1 / br(new xn([, -0]))[1] == gC ? function(s) {
  return new xn(s);
} : Vg, pC = 200;
function lh(s, t, e) {
  var n = -1, i = cc, o = s.length, r = !0, a = [], l = a;
  if (o >= pC) {
    var c = fC(s);
    if (c)
      return br(c);
    r = !1, i = mr, l = new Pn();
  } else
    l = a;
  t:
    for (; ++n < o; ) {
      var h = s[n], u = h;
      if (h = h !== 0 ? h : 0, r && u === u) {
        for (var d = l.length; d--; )
          if (l[d] === u)
            continue t;
        a.push(h);
      } else i(l, u, e) || (l !== a && l.push(u), a.push(h));
    }
  return a;
}
var Na = zn(function(s) {
  return lh(Ls(s, 1, ms, !0));
});
function ch(s) {
  return s && s.length ? lh(s) : [];
}
var mC = 0;
function bC(s) {
  var t = ++mC;
  return Kn(s) + t;
}
function Te(s) {
  return typeof s == "string" && s.slice(-1) === "%";
}
function Wt(s, t) {
  if (s == null)
    return 0;
  let e;
  if (typeof s == "string") {
    if (e = parseFloat(s), Te(s) && (e /= 100, Number.isFinite(e)))
      return e * t;
  } else
    e = s;
  return Number.isFinite(e) ? e > 0 && e < 1 ? e * t : e : 0;
}
function he(s) {
  if (typeof s == "object") {
    let e = 0, n = 0, i = 0, o = 0;
    return s.vertical != null && Number.isFinite(s.vertical) && (n = o = s.vertical), s.horizontal != null && Number.isFinite(s.horizontal) && (i = e = s.horizontal), s.left != null && Number.isFinite(s.left) && (e = s.left), s.top != null && Number.isFinite(s.top) && (n = s.top), s.right != null && Number.isFinite(s.right) && (i = s.right), s.bottom != null && Number.isFinite(s.bottom) && (o = s.bottom), { top: n, right: i, bottom: o, left: e };
  }
  let t = 0;
  return s != null && Number.isFinite(s) && (t = s), { top: t, right: t, bottom: t, left: t };
}
let hh = !1, uh = !1, dh = !1, yC = !1, gh = !1;
if (typeof navigator == "object") {
  const s = navigator.userAgent;
  s.indexOf("Macintosh") >= 0, s.match(/(iPad|iPhone|iPod)/g), s.indexOf("Windows") >= 0, hh = s.indexOf("MSIE") >= 0, s.match(/Trident\/7\./), uh = !!s.match(/Edge\//), s.indexOf("Mozilla/") >= 0 && s.indexOf("MSIE") < 0 && s.indexOf("Edge/") < 0, s.indexOf("Chrome/") >= 0 && s.indexOf("Edge/") < 0, s.indexOf("Opera/") >= 0 || s.indexOf("OPR/") >= 0, s.indexOf("Firefox/") >= 0, dh = s.indexOf("AppleWebKit/") >= 0 && s.indexOf("Chrome/") < 0 && s.indexOf("Edge/") < 0, typeof document == "object" && (gh = !document.createElementNS || `${document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")}` != "[object SVGForeignObjectElement]" || s.indexOf("Opera/") >= 0);
}
typeof window == "object" && window.chrome != null && window.chrome.app != null && window.chrome.app.runtime != null;
if (typeof document == "object")
  try {
    const s = Object.defineProperty({}, "passive", {
      get() {
        yC = !0;
      }
    }), t = document.createElement("div");
    t.addEventListener && t.addEventListener("click", () => {
    }, s);
  } catch {
  }
const La = hh, Fa = uh, CC = dh, AC = gh, wC = !AC;
function vC() {
  const s = window.module;
  return s != null && s.hot != null && s.hot.status != null ? s.hot.status() : "unkonwn";
}
function fh() {
  return vC() === "apply";
}
const xC = {
  select: "input",
  change: "input",
  submit: "form",
  reset: "form",
  error: "img",
  load: "img",
  abort: "img"
};
function EC(s) {
  const t = document.createElement(xC[s] || "div"), e = `on${s}`;
  let n = e in t;
  return n || (t.setAttribute(e, "return;"), n = typeof t[e] == "function"), n;
}
const ei = [];
function We(s, t) {
  const e = ei.find((n) => n.name === s);
  if (!(e && (e.loadTimes += 1, e.loadTimes > 1)) && !fh()) {
    const n = document.createElement("style");
    n.setAttribute("type", "text/css"), n.textContent = t;
    const i = document.querySelector("head");
    i && i.insertBefore(n, i.firstChild), ei.push({
      name: s,
      loadTimes: 1,
      styleElement: n
    });
  }
}
function qe(s) {
  const t = ei.findIndex((e) => e.name === s);
  if (t > -1) {
    const e = ei[t];
    if (e.loadTimes -= 1, e.loadTimes > 0)
      return;
    let n = e.styleElement;
    n && n.parentNode && n.parentNode.removeChild(n), n = null, ei.splice(t, 1);
  }
}
function SC(s) {
  const t = s.match(/<svg[^>]*viewBox\s*=\s*(["']?)(.+?)\1[^>]*>/i);
  return t && t[2] ? t[2].replace(/\s+/, " ").split(" ") : null;
}
function za(s) {
  const t = parseFloat(s);
  return Number.isNaN(t) ? null : t;
}
function MC(s) {
  const t = "data:";
  return s.substr(0, t.length) === t;
}
function BC(s, t) {
  if (!s || MC(s)) {
    setTimeout(() => t(null, s));
    return;
  }
  const e = () => {
    t(new Error(`Failed to load image: ${s}`));
  }, n = window.FileReader ? (
    // chrome, IE10+
    (o) => {
      if (o.status === 200) {
        const r = new FileReader();
        r.onload = (a) => {
          const l = a.target.result;
          t(null, l);
        }, r.onerror = e, r.readAsDataURL(o.response);
      } else
        e();
    }
  ) : (o) => {
    const r = (a) => {
      const c = [];
      for (let h = 0; h < a.length; h += 32768)
        c.push(String.fromCharCode.apply(null, a.subarray(h, h + 32768)));
      return c.join("");
    };
    if (o.status === 200) {
      let a = s.split(".").pop() || "png";
      a === "svg" && (a = "svg+xml");
      const l = `data:image/${a};base64,`, c = new Uint8Array(o.response), h = l + btoa(r(c));
      t(null, h);
    } else
      e();
  }, i = new XMLHttpRequest();
  i.responseType = window.FileReader ? "blob" : "arraybuffer", i.open("GET", s, !0), i.addEventListener("error", e), i.addEventListener("load", () => n(i)), i.send();
}
function IC(s) {
  let t = s.replace(/\s/g, "");
  t = decodeURIComponent(t);
  const e = t.indexOf(","), n = t.slice(0, e), i = n.split(":")[1].split(";")[0], o = t.slice(e + 1);
  let r;
  n.indexOf("base64") >= 0 ? r = atob(o) : r = unescape(encodeURIComponent(o));
  const a = new Uint8Array(r.length);
  for (let l = 0; l < r.length; l += 1)
    a[l] = r.charCodeAt(l);
  return new Blob([a], { type: i });
}
function PC(s, t) {
  const e = window.navigator.msSaveBlob;
  if (e)
    e(s, t);
  else {
    const n = window.URL.createObjectURL(s), i = document.createElement("a");
    i.href = n, i.download = t, document.body.appendChild(i), i.click(), document.body.removeChild(i), window.URL.revokeObjectURL(n);
  }
}
function so(s, t) {
  const e = IC(s);
  PC(e, t);
}
function TC(s, t = {}) {
  let e = null;
  const n = (h) => (e == null && (e = SC(s)), e != null ? za(e[h]) : null), i = (h) => {
    const u = s.match(h);
    return u && u[2] ? za(u[2]) : null;
  };
  let o = t.width;
  if (o == null && (o = i(/<svg[^>]*width\s*=\s*(["']?)(.+?)\1[^>]*>/i)), o == null && (o = n(2)), o == null)
    throw new Error("Can not parse width from svg string");
  let r = t.height;
  if (r == null && (r = i(/<svg[^>]*height\s*=\s*(["']?)(.+?)\1[^>]*>/i)), r == null && (r = n(3)), r == null)
    throw new Error("Can not parse height from svg string");
  return `data:image/svg+xml,${encodeURIComponent(s).replace(/'/g, "%27").replace(/"/g, "%22")}`;
}
function kC(s) {
  return typeof s == "object" && s.then && typeof s.then == "function";
}
function Qo(s) {
  return s != null && (s instanceof Promise || kC(s));
}
function Ar(...s) {
  const t = [];
  if (s.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : t.push(n);
  }), t.some((n) => Qo(n))) {
    const n = t.map((i) => Qo(i) ? i : Promise.resolve(i !== !1));
    return Promise.all(n).then((i) => i.reduce((o, r) => r !== !1 && o, !0));
  }
  return t.every((n) => n !== !1);
}
function OC(...s) {
  const t = Ar(s);
  return typeof t == "boolean" ? Promise.resolve(t) : t;
}
function ph(s, t, e) {
  if (e)
    switch (e.length) {
      case 0:
        return s.call(t);
      case 1:
        return s.call(t, e[0]);
      case 2:
        return s.call(t, e[0], e[1]);
      case 3:
        return s.call(t, e[0], e[1], e[2]);
      case 4:
        return s.call(t, e[0], e[1], e[2], e[3]);
      case 5:
        return s.call(t, e[0], e[1], e[2], e[3], e[4]);
      case 6:
        return s.call(t, e[0], e[1], e[2], e[3], e[4], e[5]);
      default:
        return s.apply(t, e);
    }
  return s.call(t);
}
function N(s, t, ...e) {
  return ph(s, t, e);
}
function Ua(s) {
  return 180 * s / Math.PI % 360;
}
const Qt = function(s, t = !1) {
  return (t ? s : s % 360) * Math.PI / 180;
};
function Kt(s) {
  return s % 360 + (s < 0 ? 360 : 0);
}
function en(s, t = 0) {
  return Number.isInteger(s) ? s : +s.toFixed(t);
}
function Ka(s, t) {
  let e, n;
  if (t == null ? (n = s ?? 1, e = 0) : (n = t, e = s ?? 0), n < e) {
    const i = e;
    e = n, n = i;
  }
  return Math.floor(Math.random() * (n - e + 1) + e);
}
function gn(s, t, e) {
  return Number.isNaN(s) ? NaN : Number.isNaN(t) || Number.isNaN(e) ? 0 : s < t ? t : s > e ? e : s;
}
function ue(s, t) {
  return t * Math.round(s / t);
}
function mh(s, t) {
  return t != null && s != null && t.x >= s.x && t.x <= s.x + s.width && t.y >= s.y && t.y <= s.y + s.height;
}
function Ja(s, t) {
  const e = s.x - t.x, n = s.y - t.y;
  return e * e + n * n;
}
class Xe {
  valueOf() {
    return this.toJSON();
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
}
class C extends Xe {
  static create(t, e) {
    return t == null || typeof t == "number" ? new C(t, e) : C.clone(t);
  }
  static clone(t) {
    return C.isPoint(t) ? new C(t.x, t.y) : Array.isArray(t) ? new C(t[0], t[1]) : new C(t.x, t.y);
  }
  static equals(t, e) {
    return t === e ? !0 : t != null && e != null ? t.x === e.x && t.y === e.y : !1;
  }
  static rotateEx(t, e, n, i = new C()) {
    const o = C.clone(t), r = C.clone(i), a = o.x - r.x, l = o.y - r.y, c = a * e - l * n, h = l * e + a * n;
    return new C(c + r.x, h + r.y);
  }
  static toJSON(t) {
    return C.isPoint(t) ? { x: t.x, y: t.y } : Array.isArray(t) ? { x: t[0], y: t[1] } : { x: t.x, y: t.y };
  }
  /**
   * Returns a new Point object from the given polar coordinates.
   * @see http://en.wikipedia.org/wiki/Polar_coordinate_system
   */
  static fromPolar(t, e, n = new C()) {
    let i = Math.abs(t * Math.cos(e)), o = Math.abs(t * Math.sin(e));
    const r = C.clone(n), a = Kt(Ua(e));
    return a < 90 ? o = -o : a < 180 ? (i = -i, o = -o) : a < 270 && (i = -i), new C(r.x + i, r.y + o);
  }
  /**
   * Converts rectangular to polar coordinates.
   */
  static toPolar(t, e = new C()) {
    const n = C.clone(t), i = C.clone(e), o = n.x - i.x, r = n.y - i.y;
    return new C(
      Math.sqrt(o * o + r * r),
      // r
      Qt(i.theta(n))
    );
  }
  static equalPoints(t, e) {
    if (t == null && e != null || t != null && e == null || t != null && e != null && t.length !== e.length)
      return !1;
    if (t != null && e != null) {
      for (let n = 0, i = t.length; n < i; n += 1)
        if (!C.equals(t[n], e[n]))
          return !1;
    }
    return !0;
  }
  /**
   * Returns a point with random coordinates that fall within the range
   * `[x1, x2]` and `[y1, y2]`.
   */
  static random(t, e, n, i) {
    return new C(Ka(t, e), Ka(n, i));
  }
  static rotate(t, e, n) {
    const i = Qt(Kt(-e)), o = Math.sin(i), r = Math.cos(i);
    return C.rotateEx(t, r, o, n);
  }
  static isPoint(t) {
    return t != null && t instanceof C;
  }
  static isPointLike(t) {
    return t != null && typeof t == "object" && typeof t.x == "number" && typeof t.y == "number";
  }
  static isPointData(t) {
    return t != null && Array.isArray(t) && t.length === 2 && typeof t[0] == "number" && typeof t[1] == "number";
  }
  constructor(t, e) {
    super(), this.x = t ?? 0, this.y = e ?? 0;
  }
  /**
   * Rounds the point to the given precision.
   */
  round(t = 0) {
    return this.x = en(this.x, t), this.y = en(this.y, t), this;
  }
  add(t, e) {
    const n = C.create(t, e);
    return this.x += n.x, this.y += n.y, this;
  }
  update(t, e) {
    const n = C.create(t, e);
    return this.x = n.x, this.y = n.y, this;
  }
  translate(t, e) {
    const n = C.create(t, e);
    return this.x += n.x, this.y += n.y, this;
  }
  /**
   * Rotate the point by `degree` around `center`.
   */
  rotate(t, e) {
    const n = C.rotate(this, t, e);
    return this.x = n.x, this.y = n.y, this;
  }
  /**
   * Scale point by `sx` and `sy` around the given `origin`. If origin is
   * not specified, the point is scaled around `0, 0`.
   */
  scale(t, e, n = new C()) {
    const i = C.create(n);
    return this.x = i.x + t * (this.x - i.x), this.y = i.y + e * (this.y - i.y), this;
  }
  /**
   * Chooses the point closest to this point from among `points`. If `points`
   * is an empty array, `null` is returned.
   */
  closest(t) {
    if (t.length === 1)
      return C.create(t[0]);
    let e = null, n = 1 / 0;
    return t.forEach((i) => {
      const o = this.squaredDistance(i);
      o < n && (e = i, n = o);
    }), e ? C.create(e) : null;
  }
  /**
   * Returns the distance between the point and another point `p`.
   */
  distance(t) {
    return Math.sqrt(this.squaredDistance(t));
  }
  /**
   * Returns the squared distance between the point and another point `p`.
   *
   * Useful for distance comparisons in which real distance is not necessary
   * (saves one `Math.sqrt()` operation).
   */
  squaredDistance(t) {
    const e = C.create(t), n = this.x - e.x, i = this.y - e.y;
    return n * n + i * i;
  }
  manhattanDistance(t) {
    const e = C.create(t);
    return Math.abs(e.x - this.x) + Math.abs(e.y - this.y);
  }
  /**
   * Returns the magnitude of the point vector.
   *
   * @see http://en.wikipedia.org/wiki/Magnitude_(mathematics)
   */
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y) || 0.01;
  }
  /**
   * Returns the angle(in degrees) between vector from this point to `p` and
   * the x-axis.
   */
  theta(t = new C()) {
    const e = C.create(t), n = -(e.y - this.y), i = e.x - this.x;
    let o = Math.atan2(n, i);
    return o < 0 && (o = 2 * Math.PI + o), 180 * o / Math.PI;
  }
  /**
   * Returns the angle(in degrees) between vector from this point to `p1` and
   * the vector from this point to `p2`.
   *
   * The ordering of points `p1` and `p2` is important.
   *
   * The function returns a value between `0` and `180` when the angle (in the
   * direction from `p1` to `p2`) is clockwise, and a value between `180` and
   * `360` when the angle is counterclockwise.
   *
   * Returns `NaN` if either of the points `p1` and `p2` is equal with this point.
   */
  angleBetween(t, e) {
    if (this.equals(t) || this.equals(e))
      return NaN;
    let n = this.theta(e) - this.theta(t);
    return n < 0 && (n += 360), n;
  }
  /**
   * Returns the angle(in degrees) between the line from `(0,0)` and this point
   * and the line from `(0,0)` to `p`.
   *
   * The function returns a value between `0` and `180` when the angle (in the
   * direction from this point to `p`) is clockwise, and a value between `180`
   * and `360` when the angle is counterclockwise. Returns `NaN` if called from
   * point `(0,0)` or if `p` is `(0,0)`.
   */
  vectorAngle(t) {
    return new C(0, 0).angleBetween(this, t);
  }
  /**
   * Converts rectangular to polar coordinates.
   */
  toPolar(t) {
    return this.update(C.toPolar(this, t)), this;
  }
  /**
   * Returns the change in angle(in degrees) that is the result of moving the
   * point from its previous position to its current position.
   *
   * More specifically, this function computes the angle between the line from
   * the ref point to the previous position of this point(i.e. current position
   * `-dx`, `-dy`) and the line from the `ref` point to the current position of
   * this point.
   *
   * The function returns a positive value between `0` and `180` when the angle
   * (in the direction from previous position of this point to its current
   * position) is clockwise, and a negative value between `0` and `-180` when
   * the angle is counterclockwise.
   *
   * The function returns `0` if the previous and current positions of this
   * point are the same (i.e. both `dx` and `dy` are `0`).
   */
  changeInAngle(t, e, n = new C()) {
    return this.clone().translate(-t, -e).theta(n) - this.theta(n);
  }
  /**
   * If the point lies outside the rectangle `rect`, adjust the point so that
   * it becomes the nearest point on the boundary of `rect`.
   */
  adhereToRect(t) {
    return mh(t, this) || (this.x = Math.min(Math.max(this.x, t.x), t.x + t.width), this.y = Math.min(Math.max(this.y, t.y), t.y + t.height)), this;
  }
  /**
   * Returns the bearing(cardinal direction) between me and the given point.
   *
   * @see https://en.wikipedia.org/wiki/Cardinal_direction
   */
  bearing(t) {
    const e = C.create(t), n = Qt(this.y), i = Qt(e.y), o = this.x, r = e.x, a = Qt(r - o), l = Math.sin(a) * Math.cos(i), c = Math.cos(n) * Math.sin(i) - Math.sin(n) * Math.cos(i) * Math.cos(a), h = Ua(Math.atan2(l, c)), u = ["NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    let d = h - 22.5;
    return d < 0 && (d += 360), d = parseInt(d / 45, 10), u[d];
  }
  /**
   * Returns the cross product of the vector from me to `p1` and the vector
   * from me to `p2`.
   *
   * The left-hand rule is used because the coordinate system is left-handed.
   */
  cross(t, e) {
    if (t != null && e != null) {
      const n = C.create(t), i = C.create(e);
      return (i.x - this.x) * (n.y - this.y) - (i.y - this.y) * (n.x - this.x);
    }
    return NaN;
  }
  /**
   * Returns the dot product of this point with given other point.
   */
  dot(t) {
    const e = C.create(t);
    return this.x * e.x + this.y * e.y;
  }
  diff(t, e) {
    if (typeof t == "number")
      return new C(this.x - t, this.y - e);
    const n = C.create(t);
    return new C(this.x - n.x, this.y - n.y);
  }
  /**
   * Returns an interpolation between me and point `p` for a parametert in
   * the closed interval `[0, 1]`.
   */
  lerp(t, e) {
    const n = C.create(t);
    return new C((1 - e) * this.x + e * n.x, (1 - e) * this.y + e * n.y);
  }
  /**
   * Normalize the point vector, scale the line segment between `(0, 0)`
   * and the point in order for it to have the given length. If length is
   * not specified, it is considered to be `1`; in that case, a unit vector
   * is computed.
   */
  normalize(t = 1) {
    const e = t / this.magnitude();
    return this.scale(e, e);
  }
  /**
   * Moves this point along the line starting from `ref` to this point by a
   * certain `distance`.
   */
  move(t, e) {
    const n = C.create(t), i = Qt(n.theta(this));
    return this.translate(Math.cos(i) * e, -Math.sin(i) * e);
  }
  /**
   * Returns a point that is the reflection of me with the center of inversion
   * in `ref` point.
   */
  reflection(t) {
    return C.create(t).move(this, this.distance(t));
  }
  snapToGrid(t, e) {
    return this.x = ue(this.x, t), this.y = ue(this.y, e ?? t), this;
  }
  equals(t) {
    const e = C.create(t);
    return e != null && e.x === this.x && e.y === this.y;
  }
  clone() {
    return C.clone(this);
  }
  /**
   * Returns the point as a simple JSON object. For example: `{ x: 0, y: 0 }`.
   */
  toJSON() {
    return C.toJSON(this);
  }
  serialize() {
    return `${this.x} ${this.y}`;
  }
}
class I extends Xe {
  static isRectangle(t) {
    return t != null && t instanceof I;
  }
  static isRectangleLike(t) {
    return t != null && typeof t == "object" && typeof t.x == "number" && typeof t.y == "number" && typeof t.width == "number" && typeof t.height == "number";
  }
  static create(t, e, n, i) {
    return t == null || typeof t == "number" ? new I(t, e, n, i) : I.clone(t);
  }
  static clone(t) {
    return I.isRectangle(t) ? t.clone() : Array.isArray(t) ? new I(t[0], t[1], t[2], t[3]) : new I(t.x, t.y, t.width, t.height);
  }
  /**
   * Returns a new rectangle from the given ellipse.
   */
  static fromEllipse(t) {
    return new I(t.x - t.a, t.y - t.b, 2 * t.a, 2 * t.b);
  }
  static fromSize(t) {
    return new I(0, 0, t.width, t.height);
  }
  static fromPositionAndSize(t, e) {
    return new I(t.x, t.y, e.width, e.height);
  }
  get left() {
    return this.x;
  }
  get top() {
    return this.y;
  }
  get right() {
    return this.x + this.width;
  }
  get bottom() {
    return this.y + this.height;
  }
  get origin() {
    return new C(this.x, this.y);
  }
  get topLeft() {
    return new C(this.x, this.y);
  }
  get topCenter() {
    return new C(this.x + this.width / 2, this.y);
  }
  get topRight() {
    return new C(this.x + this.width, this.y);
  }
  get center() {
    return new C(this.x + this.width / 2, this.y + this.height / 2);
  }
  get bottomLeft() {
    return new C(this.x, this.y + this.height);
  }
  get bottomCenter() {
    return new C(this.x + this.width / 2, this.y + this.height);
  }
  get bottomRight() {
    return new C(this.x + this.width, this.y + this.height);
  }
  get corner() {
    return new C(this.x + this.width, this.y + this.height);
  }
  get rightMiddle() {
    return new C(this.x + this.width, this.y + this.height / 2);
  }
  get leftMiddle() {
    return new C(this.x, this.y + this.height / 2);
  }
  get topLine() {
    return new R(this.topLeft, this.topRight);
  }
  get rightLine() {
    return new R(this.topRight, this.bottomRight);
  }
  get bottomLine() {
    return new R(this.bottomLeft, this.bottomRight);
  }
  get leftLine() {
    return new R(this.topLeft, this.bottomLeft);
  }
  constructor(t, e, n, i) {
    super(), this.x = t ?? 0, this.y = e ?? 0, this.width = n ?? 0, this.height = i ?? 0;
  }
  getOrigin() {
    return this.origin;
  }
  getTopLeft() {
    return this.topLeft;
  }
  getTopCenter() {
    return this.topCenter;
  }
  getTopRight() {
    return this.topRight;
  }
  getCenter() {
    return this.center;
  }
  getCenterX() {
    return this.x + this.width / 2;
  }
  getCenterY() {
    return this.y + this.height / 2;
  }
  getBottomLeft() {
    return this.bottomLeft;
  }
  getBottomCenter() {
    return this.bottomCenter;
  }
  getBottomRight() {
    return this.bottomRight;
  }
  getCorner() {
    return this.corner;
  }
  getRightMiddle() {
    return this.rightMiddle;
  }
  getLeftMiddle() {
    return this.leftMiddle;
  }
  getTopLine() {
    return this.topLine;
  }
  getRightLine() {
    return this.rightLine;
  }
  getBottomLine() {
    return this.bottomLine;
  }
  getLeftLine() {
    return this.leftLine;
  }
  /**
   * Returns a rectangle that is the bounding box of the rectangle.
   *
   * If `angle` is specified, the bounding box calculation will take into
   * account the rotation of the rectangle by angle degrees around its center.
   */
  bbox(t) {
    if (!t)
      return this.clone();
    const e = Qt(t), n = Math.abs(Math.sin(e)), i = Math.abs(Math.cos(e)), o = this.width * i + this.height * n, r = this.width * n + this.height * i;
    return new I(this.x + (this.width - o) / 2, this.y + (this.height - r) / 2, o, r);
  }
  round(t = 0) {
    return this.x = en(this.x, t), this.y = en(this.y, t), this.width = en(this.width, t), this.height = en(this.height, t), this;
  }
  add(t, e, n, i) {
    const o = I.create(t, e, n, i), r = Math.min(this.x, o.x), a = Math.min(this.y, o.y), l = Math.max(this.x + this.width, o.x + o.width), c = Math.max(this.y + this.height, o.y + o.height);
    return this.x = r, this.y = a, this.width = l - r, this.height = c - a, this;
  }
  update(t, e, n, i) {
    const o = I.create(t, e, n, i);
    return this.x = o.x, this.y = o.y, this.width = o.width, this.height = o.height, this;
  }
  inflate(t, e) {
    const n = t, i = e ?? t;
    return this.x -= n, this.y -= i, this.width += 2 * n, this.height += 2 * i, this;
  }
  snapToGrid(t, e) {
    const n = this.origin.snapToGrid(t, e), i = this.corner.snapToGrid(t, e);
    return this.x = n.x, this.y = n.y, this.width = i.x - n.x, this.height = i.y - n.y, this;
  }
  translate(t, e) {
    const n = C.create(t, e);
    return this.x += n.x, this.y += n.y, this;
  }
  scale(t, e, n = new C()) {
    const i = this.origin.scale(t, e, n);
    return this.x = i.x, this.y = i.y, this.width *= t, this.height *= e, this;
  }
  rotate(t, e = this.getCenter()) {
    if (t !== 0) {
      const n = Qt(t), i = Math.cos(n), o = Math.sin(n);
      let r = this.getOrigin(), a = this.getTopRight(), l = this.getBottomRight(), c = this.getBottomLeft();
      r = C.rotateEx(r, i, o, e), a = C.rotateEx(a, i, o, e), l = C.rotateEx(l, i, o, e), c = C.rotateEx(c, i, o, e);
      const h = new I(r.x, r.y, 0, 0);
      h.add(a.x, a.y, 0, 0), h.add(l.x, l.y, 0, 0), h.add(c.x, c.y, 0, 0), this.update(h);
    }
    return this;
  }
  rotate90() {
    const t = (this.width - this.height) / 2;
    this.x += t, this.y -= t;
    const e = this.width;
    return this.width = this.height, this.height = e, this;
  }
  /**
   * Translates the rectangle by `rect.x` and `rect.y` and expand it by
   * `rect.width` and `rect.height`.
   */
  moveAndExpand(t) {
    const e = I.clone(t);
    return this.x += e.x || 0, this.y += e.y || 0, this.width += e.width || 0, this.height += e.height || 0, this;
  }
  /**
   * Returns an object where `sx` and `sy` give the maximum scaling that can be
   * applied to the rectangle so that it would still fit into `limit`. If
   * `origin` is specified, the rectangle is scaled around it; otherwise, it is
   * scaled around its center.
   */
  getMaxScaleToFit(t, e = this.center) {
    const n = I.clone(t), i = e.x, o = e.y;
    let r = 1 / 0, a = 1 / 0, l = 1 / 0, c = 1 / 0, h = 1 / 0, u = 1 / 0, d = 1 / 0, g = 1 / 0;
    const f = n.topLeft;
    f.x < i && (r = (this.x - i) / (f.x - i)), f.y < o && (h = (this.y - o) / (f.y - o));
    const p = n.bottomRight;
    p.x > i && (a = (this.x + this.width - i) / (p.x - i)), p.y > o && (u = (this.y + this.height - o) / (p.y - o));
    const m = n.topRight;
    m.x > i && (l = (this.x + this.width - i) / (m.x - i)), m.y < o && (d = (this.y - o) / (m.y - o));
    const b = n.bottomLeft;
    return b.x < i && (c = (this.x - i) / (b.x - i)), b.y > o && (g = (this.y + this.height - o) / (b.y - o)), {
      sx: Math.min(r, a, l, c),
      sy: Math.min(h, u, d, g)
    };
  }
  /**
   * Returns a number that specifies the maximum scaling that can be applied to
   * the rectangle along both axes so that it would still fit into `limit`. If
   * `origin` is specified, the rectangle is scaled around it; otherwise, it is
   * scaled around its center.
   */
  getMaxUniformScaleToFit(t, e = this.center) {
    const n = this.getMaxScaleToFit(t, e);
    return Math.min(n.sx, n.sy);
  }
  containsPoint(t, e) {
    return mh(this, C.create(t, e));
  }
  containsRect(t, e, n, i) {
    const o = I.create(t, e, n, i), r = this.x, a = this.y, l = this.width, c = this.height, h = o.x, u = o.y, d = o.width, g = o.height;
    return l === 0 || c === 0 || d === 0 || g === 0 ? !1 : h >= r && u >= a && h + d <= r + l && u + g <= a + c;
  }
  /**
   * Returns an array of the intersection points of the rectangle and the line.
   * Return `null` if no intersection exists.
   */
  intersectsWithLine(t) {
    const e = [
      this.topLine,
      this.rightLine,
      this.bottomLine,
      this.leftLine
    ], n = [], i = [];
    return e.forEach((o) => {
      const r = t.intersectsWithLine(o);
      r !== null && i.indexOf(r.toString()) < 0 && (n.push(r), i.push(r.toString()));
    }), n.length > 0 ? n : null;
  }
  /**
   * Returns the point on the boundary of the rectangle that is the intersection
   * of the rectangle with a line starting in the center the rectangle ending in
   * the point `p`.
   *
   * If `angle` is specified, the intersection will take into account the
   * rotation of the rectangle by `angle` degrees around its center.
   */
  intersectsWithLineFromCenterToPoint(t, e) {
    const n = C.clone(t), i = this.center;
    let o = null;
    e != null && e !== 0 && n.rotate(e, i);
    const r = [this.topLine, this.rightLine, this.bottomLine, this.leftLine], a = new R(i, n);
    for (let l = r.length - 1; l >= 0; l -= 1) {
      const c = r[l].intersectsWithLine(a);
      if (c !== null) {
        o = c;
        break;
      }
    }
    return o && e != null && e !== 0 && o.rotate(-e, i), o;
  }
  intersectsWithRect(t, e, n, i) {
    const o = I.create(t, e, n, i);
    if (!this.isIntersectWithRect(o))
      return null;
    const r = this.origin, a = this.corner, l = o.origin, c = o.corner, h = Math.max(r.x, l.x), u = Math.max(r.y, l.y);
    return new I(h, u, Math.min(a.x, c.x) - h, Math.min(a.y, c.y) - u);
  }
  isIntersectWithRect(t, e, n, i) {
    const o = I.create(t, e, n, i), r = this.origin, a = this.corner, l = o.origin, c = o.corner;
    return !(c.x <= r.x || c.y <= r.y || l.x >= a.x || l.y >= a.y);
  }
  /**
   * Normalize the rectangle, i.e. make it so that it has non-negative
   * width and height. If width is less than `0`, the function swaps left and
   * right corners and if height is less than `0`, the top and bottom corners
   * are swapped.
   */
  normalize() {
    let t = this.x, e = this.y, n = this.width, i = this.height;
    return this.width < 0 && (t = this.x + this.width, n = -this.width), this.height < 0 && (e = this.y + this.height, i = -this.height), this.x = t, this.y = e, this.width = n, this.height = i, this;
  }
  /**
   * Returns a rectangle that is a union of this rectangle and rectangle `rect`.
   */
  union(t) {
    const e = I.clone(t), n = this.origin, i = this.corner, o = e.origin, r = e.corner, a = Math.min(n.x, o.x), l = Math.min(n.y, o.y), c = Math.max(i.x, r.x), h = Math.max(i.y, r.y);
    return new I(a, l, c - a, h - l);
  }
  /**
   * Returns a string ("top", "left", "right" or "bottom") denoting the side of
   * the rectangle which is nearest to the point `p`.
   */
  getNearestSideToPoint(t) {
    const e = C.clone(t), n = e.x - this.x, i = this.x + this.width - e.x, o = e.y - this.y, r = this.y + this.height - e.y;
    let a = n, l = "left";
    return i < a && (a = i, l = "right"), o < a && (a = o, l = "top"), r < a && (l = "bottom"), l;
  }
  /**
   * Returns a point on the boundary of the rectangle nearest to the point `p`.
   */
  getNearestPointToPoint(t) {
    const e = C.clone(t);
    if (this.containsPoint(e)) {
      const n = this.getNearestSideToPoint(e);
      if (n === "left")
        return new C(this.x, e.y);
      if (n === "top")
        return new C(e.x, this.y);
      if (n === "right")
        return new C(this.x + this.width, e.y);
      if (n === "bottom")
        return new C(e.x, this.y + this.height);
    }
    return e.adhereToRect(this);
  }
  equals(t) {
    return t != null && t.x === this.x && t.y === this.y && t.width === this.width && t.height === this.height;
  }
  clone() {
    return new I(this.x, this.y, this.width, this.height);
  }
  toJSON() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
  }
  serialize() {
    return `${this.x} ${this.y} ${this.width} ${this.height}`;
  }
}
class R extends Xe {
  static isLine(t) {
    return t != null && t instanceof R;
  }
  get center() {
    return new C((this.start.x + this.end.x) / 2, (this.start.y + this.end.y) / 2);
  }
  constructor(t, e, n, i) {
    super(), typeof t == "number" && typeof e == "number" ? (this.start = new C(t, e), this.end = new C(n, i)) : (this.start = C.create(t), this.end = C.create(e));
  }
  getCenter() {
    return this.center;
  }
  /**
   * Rounds the line to the given `precision`.
   */
  round(t = 0) {
    return this.start.round(t), this.end.round(t), this;
  }
  translate(t, e) {
    return typeof t == "number" ? (this.start.translate(t, e), this.end.translate(t, e)) : (this.start.translate(t), this.end.translate(t)), this;
  }
  /**
   * Rotate the line by `angle` around `origin`.
   */
  rotate(t, e) {
    return this.start.rotate(t, e), this.end.rotate(t, e), this;
  }
  /**
   * Scale the line by `sx` and `sy` about the given `origin`. If origin is not
   * specified, the line is scaled around `0,0`.
   */
  scale(t, e, n) {
    return this.start.scale(t, e, n), this.end.scale(t, e, n), this;
  }
  /**
   * Returns the length of the line.
   */
  length() {
    return Math.sqrt(this.squaredLength());
  }
  /**
   * Useful for distance comparisons in which real length is not necessary
   * (saves one `Math.sqrt()` operation).
   */
  squaredLength() {
    const t = this.start.x - this.end.x, e = this.start.y - this.end.y;
    return t * t + e * e;
  }
  /**
   * Scale the line so that it has the requested length. The start point of
   * the line is preserved.
   */
  setLength(t) {
    const e = this.length();
    if (!e)
      return this;
    const n = t / e;
    return this.scale(n, n, this.start);
  }
  parallel(t) {
    const e = this.clone();
    if (!e.isDifferentiable())
      return e;
    const { start: n, end: i } = e, o = n.clone().rotate(270, i), r = i.clone().rotate(90, n);
    return n.move(r, t), i.move(o, t), e;
  }
  /**
   * Returns the vector of the line with length equal to length of the line.
   */
  vector() {
    return new C(this.end.x - this.start.x, this.end.y - this.start.y);
  }
  /**
   * Returns the angle of incline of the line.
   *
   * The function returns `NaN` if the start and end endpoints of the line
   * both lie at the same coordinates(it is impossible to determine the angle
   * of incline of a line that appears to be a point). The
   * `line.isDifferentiable()` function may be used in advance to determine
   * whether the angle of incline can be computed for a given line.
   */
  angle() {
    const t = new C(this.start.x + 1, this.start.y);
    return this.start.angleBetween(this.end, t);
  }
  /**
   * Returns a rectangle that is the bounding box of the line.
   */
  bbox() {
    const t = Math.min(this.start.x, this.end.x), e = Math.min(this.start.y, this.end.y), n = Math.max(this.start.x, this.end.x), i = Math.max(this.start.y, this.end.y);
    return new I(t, e, n - t, i - e);
  }
  /**
   * Returns the bearing (cardinal direction) of the line.
   *
   * The return value is one of the following strings:
   * 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW' and 'N'.
   *
   * The function returns 'N' if the two endpoints of the line are coincident.
   */
  bearing() {
    return this.start.bearing(this.end);
  }
  /**
   * Returns the point on the line that lies closest to point `p`.
   */
  closestPoint(t) {
    return this.pointAt(this.closestPointNormalizedLength(t));
  }
  /**
   * Returns the length of the line up to the point that lies closest to point `p`.
   */
  closestPointLength(t) {
    return this.closestPointNormalizedLength(t) * this.length();
  }
  /**
   * Returns a line that is tangent to the line at the point that lies closest
   * to point `p`.
   */
  closestPointTangent(t) {
    return this.tangentAt(this.closestPointNormalizedLength(t));
  }
  /**
   * Returns the normalized length (distance from the start of the line / total
   * line length) of the line up to the point that lies closest to point.
   */
  closestPointNormalizedLength(t) {
    const e = this.vector().dot(new R(this.start, t).vector()), n = Math.min(1, Math.max(0, e / this.squaredLength()));
    return Number.isNaN(n) ? 0 : n;
  }
  /**
   * Returns a point on the line that lies `rate` (normalized length) away from
   * the beginning of the line.
   */
  pointAt(t) {
    const e = this.start, n = this.end;
    return t <= 0 ? e.clone() : t >= 1 ? n.clone() : e.lerp(n, t);
  }
  /**
   * Returns a point on the line that lies length away from the beginning of
   * the line.
   */
  pointAtLength(t) {
    const e = this.start, n = this.end;
    let i = !0;
    t < 0 && (i = !1, t = -t);
    const o = this.length();
    if (t >= o)
      return i ? n.clone() : e.clone();
    const r = (i ? t : o - t) / o;
    return this.pointAt(r);
  }
  /**
   * Divides the line into two lines at the point that lies `rate` (normalized
   * length) away from the beginning of the line.
   */
  divideAt(t) {
    const e = this.pointAt(t);
    return [
      new R(this.start, e),
      new R(e, this.end)
    ];
  }
  /**
   * Divides the line into two lines at the point that lies length away from
   * the beginning of the line.
   */
  divideAtLength(t) {
    const e = this.pointAtLength(t);
    return [
      new R(this.start, e),
      new R(e, this.end)
    ];
  }
  /**
   * Returns `true` if the point `p` lies on the line. Return `false` otherwise.
   */
  containsPoint(t) {
    const e = this.start, n = this.end;
    if (e.cross(t, n) !== 0)
      return !1;
    const i = this.length();
    return !(new R(e, t).length() > i || new R(t, n).length() > i);
  }
  intersect(t, e) {
    const n = t.intersectsWithLine(this, e);
    return n ? Array.isArray(n) ? n : [n] : null;
  }
  /**
   * Returns the intersection point of the line with another line. Returns
   * `null` if no intersection exists.
   */
  intersectsWithLine(t) {
    const e = new C(this.end.x - this.start.x, this.end.y - this.start.y), n = new C(t.end.x - t.start.x, t.end.y - t.start.y), i = e.x * n.y - e.y * n.x, o = new C(t.start.x - this.start.x, t.start.y - this.start.y), r = o.x * n.y - o.y * n.x, a = o.x * e.y - o.y * e.x;
    if (i === 0 || r * i < 0 || a * i < 0)
      return null;
    if (i > 0) {
      if (r > i || a > i)
        return null;
    } else if (r < i || a < i)
      return null;
    return new C(this.start.x + r * e.x / i, this.start.y + r * e.y / i);
  }
  /**
   * Returns `true` if a tangent line can be found for the line.
   *
   * Tangents cannot be found if both of the line endpoints are coincident
   * (the line appears to be a point).
   */
  isDifferentiable() {
    return !this.start.equals(this.end);
  }
  /**
   * Returns the perpendicular distance between the line and point. The
   * distance is positive if the point lies to the right of the line, negative
   * if the point lies to the left of the line, and `0` if the point lies on
   * the line.
   */
  pointOffset(t) {
    const e = C.clone(t), n = this.start, i = this.end;
    return ((i.x - n.x) * (e.y - n.y) - (i.y - n.y) * (e.x - n.x)) / this.length();
  }
  pointSquaredDistance(t, e) {
    const n = C.create(t, e);
    return this.closestPoint(n).squaredDistance(n);
  }
  pointDistance(t, e) {
    const n = C.create(t, e);
    return this.closestPoint(n).distance(n);
  }
  /**
   * Returns a line tangent to the line at point that lies `rate` (normalized
   * length) away from the beginning of the line.
   */
  tangentAt(t) {
    if (!this.isDifferentiable())
      return null;
    const e = this.start, n = this.end, i = this.pointAt(t), o = new R(e, n);
    return o.translate(i.x - e.x, i.y - e.y), o;
  }
  /**
   * Returns a line tangent to the line at point that lies `length` away from
   * the beginning of the line.
   */
  tangentAtLength(t) {
    if (!this.isDifferentiable())
      return null;
    const e = this.start, n = this.end, i = this.pointAtLength(t), o = new R(e, n);
    return o.translate(i.x - e.x, i.y - e.y), o;
  }
  relativeCcw(t, e) {
    const n = C.create(t, e);
    let i = n.x - this.start.x, o = n.y - this.start.y;
    const r = this.end.x - this.start.x, a = this.end.y - this.start.y;
    let l = i * a - o * r;
    return l === 0 && (l = i * r + o * a, l > 0 && (i -= r, o -= a, l = i * r + o * a, l < 0 && (l = 0))), l < 0 ? -1 : l > 0 ? 1 : 0;
  }
  /**
   * Return `true` if the line equals the other line.
   */
  equals(t) {
    return t != null && this.start.x === t.start.x && this.start.y === t.start.y && this.end.x === t.end.x && this.end.y === t.end.y;
  }
  /**
   * Returns another line which is a clone of the line.
   */
  clone() {
    return new R(this.start, this.end);
  }
  toJSON() {
    return { start: this.start.toJSON(), end: this.end.toJSON() };
  }
  serialize() {
    return [this.start.serialize(), this.end.serialize()].join(" ");
  }
}
class Vt extends Xe {
  static isEllipse(t) {
    return t != null && t instanceof Vt;
  }
  static create(t, e, n, i) {
    return t == null || typeof t == "number" ? new Vt(t, e, n, i) : Vt.parse(t);
  }
  static parse(t) {
    return Vt.isEllipse(t) ? t.clone() : Array.isArray(t) ? new Vt(t[0], t[1], t[2], t[3]) : new Vt(t.x, t.y, t.a, t.b);
  }
  static fromRect(t) {
    const e = t.center;
    return new Vt(e.x, e.y, t.width / 2, t.height / 2);
  }
  get center() {
    return new C(this.x, this.y);
  }
  constructor(t, e, n, i) {
    super(), this.x = t ?? 0, this.y = e ?? 0, this.a = n ?? 0, this.b = i ?? 0;
  }
  /**
   * Returns a rectangle that is the bounding box of the ellipse.
   */
  bbox() {
    return I.fromEllipse(this);
  }
  /**
   * Returns a point that is the center of the ellipse.
   */
  getCenter() {
    return this.center;
  }
  inflate(t, e) {
    const n = t, i = e ?? t;
    return this.a += 2 * n, this.b += 2 * i, this;
  }
  normalizedDistance(t, e) {
    const n = C.create(t, e), i = n.x - this.x, o = n.y - this.y, r = this.a, a = this.b;
    return i * i / (r * r) + o * o / (a * a);
  }
  containsPoint(t, e) {
    return this.normalizedDistance(t, e) <= 1;
  }
  /**
   * Returns an array of the intersection points of the ellipse and the line.
   * Returns `null` if no intersection exists.
   */
  intersectsWithLine(t) {
    const e = [], n = this.a, i = this.b, o = t.start, r = t.end, a = t.vector(), l = o.diff(new C(this.x, this.y)), c = new C(a.x / (n * n), a.y / (i * i)), h = new C(l.x / (n * n), l.y / (i * i)), u = a.dot(c), d = a.dot(h), g = l.dot(h) - 1, f = d * d - u * g;
    if (f < 0)
      return null;
    if (f > 0) {
      const p = Math.sqrt(f), m = (-d - p) / u, b = (-d + p) / u;
      if ((m < 0 || m > 1) && (b < 0 || b > 1))
        return null;
      m >= 0 && m <= 1 && e.push(o.lerp(r, m)), b >= 0 && b <= 1 && e.push(o.lerp(r, b));
    } else {
      const p = -d / u;
      if (p >= 0 && p <= 1)
        e.push(o.lerp(r, p));
      else
        return null;
    }
    return e;
  }
  /**
   * Returns the point on the boundary of the ellipse that is the
   * intersection of the ellipse with a line starting in the center
   * of the ellipse ending in the point `p`.
   *
   * If angle is specified, the intersection will take into account
   * the rotation of the ellipse by angle degrees around its center.
   */
  intersectsWithLineFromCenterToPoint(t, e = 0) {
    const n = C.clone(t);
    e && n.rotate(e, this.getCenter());
    const i = n.x - this.x, o = n.y - this.y;
    let r;
    if (i === 0)
      return r = this.bbox().getNearestPointToPoint(n), e ? r.rotate(-e, this.getCenter()) : r;
    const a = o / i, l = a * a, c = this.a * this.a, h = this.b * this.b;
    let u = Math.sqrt(1 / (1 / c + l / h));
    u = i < 0 ? -u : u;
    const d = a * u;
    return r = new C(this.x + u, this.y + d), e ? r.rotate(-e, this.getCenter()) : r;
  }
  /**
   * Returns the angle between the x-axis and the tangent from a point. It is
   * valid for points lying on the ellipse boundary only.
   */
  tangentTheta(t) {
    const e = C.clone(t), n = e.x, i = e.y, o = this.a, r = this.b, a = this.bbox().center, l = a.x, c = a.y, h = 30, u = n > a.x + o / 2, d = n < a.x - o / 2;
    let g, f;
    return u || d ? (f = n > a.x ? i - h : i + h, g = o * o / (n - l) - o * o * (i - c) * (f - c) / (r * r * (n - l)) + l) : (g = i > a.y ? n + h : n - h, f = r * r / (i - c) - r * r * (n - l) * (g - l) / (o * o * (i - c)) + c), new C(g, f).theta(e);
  }
  scale(t, e) {
    return this.a *= t, this.b *= e, this;
  }
  rotate(t, e) {
    const n = I.fromEllipse(this);
    n.rotate(t, e);
    const i = Vt.fromRect(n);
    return this.a = i.a, this.b = i.b, this.x = i.x, this.y = i.y, this;
  }
  translate(t, e) {
    const n = C.create(t, e);
    return this.x += n.x, this.y += n.y, this;
  }
  equals(t) {
    return t != null && t.x === this.x && t.y === this.y && t.a === this.a && t.b === this.b;
  }
  clone() {
    return new Vt(this.x, this.y, this.a, this.b);
  }
  toJSON() {
    return { x: this.x, y: this.y, a: this.a, b: this.b };
  }
  serialize() {
    return `${this.x} ${this.y} ${this.a} ${this.b}`;
  }
}
const RC = new RegExp("^[\\s\\dLMCZz,.]*$");
function DC(s) {
  return typeof s != "string" ? !1 : RC.test(s);
}
function oo(s, t) {
  return (s % t + t) % t;
}
function QC(s, t, e, n, i) {
  if (!s || s.length === 0)
    return "";
  const o = [], r = s[s.length - 1], a = t != null && t > 0, l = t || 0;
  if (n && a) {
    s = s.slice();
    const u = s[0], d = new C(r.x + (u.x - r.x) / 2, r.y + (u.y - r.y) / 2);
    s.splice(0, 0, d);
  }
  let c = s[0], h = 1;
  for (e ? o.push("M", c.x, c.y) : o.push("L", c.x, c.y); h < (n ? s.length : s.length - 1); ) {
    let u = s[oo(h, s.length)], d = c.x - u.x, g = c.y - u.y;
    if (a && (d !== 0 || g !== 0) && (i == null || i.indexOf(h - 1) < 0)) {
      let f = Math.sqrt(d * d + g * g);
      const p = d * Math.min(l, f / 2) / f, m = g * Math.min(l, f / 2) / f, b = u.x + p, y = u.y + m;
      o.push("L", b, y);
      let A = s[oo(h + 1, s.length)];
      for (; h < s.length - 2 && Math.round(A.x - u.x) === 0 && Math.round(A.y - u.y) === 0; )
        A = s[oo(h + 2, s.length)], h += 1;
      d = A.x - u.x, g = A.y - u.y, f = Math.max(1, Math.sqrt(d * d + g * g));
      const w = d * Math.min(l, f / 2) / f, x = g * Math.min(l, f / 2) / f, M = u.x + w, v = u.y + x;
      o.push("Q", u.x, u.y, M, v), u = new C(M, v);
    } else
      o.push("L", u.x, u.y);
    c = u, h += 1;
  }
  return n ? o.push("Z") : o.push("L", r.x, r.y), o.map((u) => typeof u == "string" ? u : +u.toFixed(3)).join(" ");
}
function NC(s, t = {}) {
  const e = [];
  return s && s.length && s.forEach((n) => {
    Array.isArray(n) ? e.push({ x: n[0], y: n[1] }) : e.push({ x: n.x, y: n.y });
  }), QC(e, t.round, t.initialMove == null || t.initialMove, t.close, t.exclude);
}
function ja(s, t, e, n, i = 0, o = 0, r = 0, a, l) {
  if (e === 0 || n === 0)
    return [];
  a -= s, l -= t, e = Math.abs(e), n = Math.abs(n);
  const c = -a / 2, h = -l / 2, u = Math.cos(i * Math.PI / 180), d = Math.sin(i * Math.PI / 180), g = u * c + d * h, f = -1 * d * c + u * h, p = g * g, m = f * f, b = e * e, y = n * n, A = p / b + m / y;
  let w;
  if (A > 1)
    e = Math.sqrt(A) * e, n = Math.sqrt(A) * n, w = 0;
  else {
    let Z = 1;
    o === r && (Z = -1), w = Z * Math.sqrt((b * y - b * m - y * p) / (b * m + y * p));
  }
  const x = w * e * f / n, M = -1 * w * n * g / e, v = u * x - d * M + a / 2, S = d * x + u * M + l / 2;
  let B = Math.atan2((f - M) / n, (g - x) / e) - Math.atan2(0, 1), P = B >= 0 ? B : 2 * Math.PI + B;
  B = Math.atan2((-f - M) / n, (-g - x) / e) - Math.atan2((f - M) / n, (g - x) / e);
  let T = B >= 0 ? B : 2 * Math.PI + B;
  r === 0 && T > 0 ? T -= 2 * Math.PI : r !== 0 && T < 0 && (T += 2 * Math.PI);
  const O = T * 2 / Math.PI, J = Math.ceil(O < 0 ? -1 * O : O), V = T / J, it = 8 / 3 * Math.sin(V / 4) * Math.sin(V / 4) / Math.sin(V / 2), W = u * e, St = u * n, Lt = d * e, Ft = d * n;
  let At = Math.cos(P), Q = Math.sin(P), et = -it * (W * Q + Ft * At), rt = -it * (Lt * Q - St * At), H = 0, at = 0;
  const wt = [];
  for (let Z = 0; Z < J; Z += 1) {
    P += V, At = Math.cos(P), Q = Math.sin(P), H = W * At - Ft * Q + v, at = Lt * At + St * Q + S;
    const vt = -it * (W * Q + Ft * At), Ee = -it * (Lt * Q - St * At), zt = Z * 6;
    wt[zt] = Number(et + s), wt[zt + 1] = Number(rt + t), wt[zt + 2] = Number(H - vt + s), wt[zt + 3] = Number(at - Ee + t), wt[zt + 4] = Number(H + s), wt[zt + 5] = Number(at + t), et = H + vt, rt = at + Ee;
  }
  return wt.map((Z) => +Z.toFixed(2));
}
class Mt extends Xe {
  static isPolyline(t) {
    return t != null && t instanceof Mt;
  }
  static parse(t) {
    const e = t.trim();
    if (e === "")
      return new Mt();
    const n = [], i = e.split(/\s*,\s*|\s+/);
    for (let o = 0, r = i.length; o < r; o += 2)
      n.push({ x: +i[o], y: +i[o + 1] });
    return new Mt(n);
  }
  get start() {
    return this.points[0] || null;
  }
  get end() {
    return this.points[this.points.length - 1] || null;
  }
  constructor(t) {
    if (super(), t != null) {
      if (typeof t == "string")
        return Mt.parse(t);
      this.points = t.map((e) => C.create(e));
    } else
      this.points = [];
  }
  scale(t, e, n = new C()) {
    return this.points.forEach((i) => i.scale(t, e, n)), this;
  }
  rotate(t, e) {
    return this.points.forEach((n) => n.rotate(t, e)), this;
  }
  translate(t, e) {
    const n = C.create(t, e);
    return this.points.forEach((i) => i.translate(n.x, n.y)), this;
  }
  round(t = 0) {
    return this.points.forEach((e) => e.round(t)), this;
  }
  bbox() {
    if (this.points.length === 0)
      return new I();
    let t = 1 / 0, e = -1 / 0, n = 1 / 0, i = -1 / 0;
    const o = this.points;
    for (let r = 0, a = o.length; r < a; r += 1) {
      const l = o[r], c = l.x, h = l.y;
      c < t && (t = c), c > e && (e = c), h < n && (n = h), h > i && (i = h);
    }
    return new I(t, n, e - t, i - n);
  }
  closestPoint(t) {
    const e = this.closestPointLength(t);
    return this.pointAtLength(e);
  }
  closestPointLength(t) {
    const e = this.points, n = e.length;
    if (n === 0 || n === 1)
      return 0;
    let i = 0, o = 0, r = 1 / 0;
    for (let a = 0, l = n - 1; a < l; a += 1) {
      const c = new R(e[a], e[a + 1]), h = c.length(), u = c.closestPointNormalizedLength(t), g = c.pointAt(u).squaredDistance(t);
      g < r && (r = g, o = i + u * h), i += h;
    }
    return o;
  }
  closestPointNormalizedLength(t) {
    const e = this.length();
    return e === 0 ? 0 : this.closestPointLength(t) / e;
  }
  closestPointTangent(t) {
    const e = this.closestPointLength(t);
    return this.tangentAtLength(e);
  }
  containsPoint(t) {
    if (this.points.length === 0)
      return !1;
    const e = C.clone(t), n = e.x, i = e.y, o = this.points, r = o.length;
    let a = r - 1, l = 0;
    for (let c = 0; c < r; c += 1) {
      const h = o[a], u = o[c];
      if (e.equals(h))
        return !0;
      const d = new R(h, u);
      if (d.containsPoint(t))
        return !0;
      if (i <= h.y && i > u.y || i > h.y && i <= u.y) {
        const g = h.x - n > u.x - n ? h.x - n : u.x - n;
        if (g >= 0) {
          const f = new C(n + g, i), p = new R(t, f);
          d.intersectsWithLine(p) && (l += 1);
        }
      }
      a = c;
    }
    return l % 2 === 1;
  }
  intersectsWithLine(t) {
    const e = [];
    for (let n = 0, i = this.points.length - 1; n < i; n += 1) {
      const o = this.points[n], r = this.points[n + 1], a = t.intersectsWithLine(new R(o, r));
      a && e.push(a);
    }
    return e.length > 0 ? e : null;
  }
  isDifferentiable() {
    for (let t = 0, e = this.points.length - 1; t < e; t += 1) {
      const n = this.points[t], i = this.points[t + 1];
      if (new R(n, i).isDifferentiable())
        return !0;
    }
    return !1;
  }
  length() {
    let t = 0;
    for (let e = 0, n = this.points.length - 1; e < n; e += 1) {
      const i = this.points[e], o = this.points[e + 1];
      t += i.distance(o);
    }
    return t;
  }
  pointAt(t) {
    const e = this.points, n = e.length;
    if (n === 0)
      return null;
    if (n === 1 || t <= 0)
      return e[0].clone();
    if (t >= 1)
      return e[n - 1].clone();
    const o = this.length() * t;
    return this.pointAtLength(o);
  }
  pointAtLength(t) {
    const e = this.points, n = e.length;
    if (n === 0)
      return null;
    if (n === 1)
      return e[0].clone();
    let i = !0;
    t < 0 && (i = !1, t = -t);
    let o = 0;
    for (let a = 0, l = n - 1; a < l; a += 1) {
      const c = i ? a : l - 1 - a, h = e[c], u = e[c + 1], d = new R(h, u), g = h.distance(u);
      if (t <= o + g)
        return d.pointAtLength((i ? 1 : -1) * (t - o));
      o += g;
    }
    return (i ? e[n - 1] : e[0]).clone();
  }
  tangentAt(t) {
    const n = this.points.length;
    if (n === 0 || n === 1)
      return null;
    t < 0 && (t = 0), t > 1 && (t = 1);
    const o = this.length() * t;
    return this.tangentAtLength(o);
  }
  tangentAtLength(t) {
    const e = this.points, n = e.length;
    if (n === 0 || n === 1)
      return null;
    let i = !0;
    t < 0 && (i = !1, t = -t);
    let o, r = 0;
    for (let a = 0, l = n - 1; a < l; a += 1) {
      const c = i ? a : l - 1 - a, h = e[c], u = e[c + 1], d = new R(h, u), g = h.distance(u);
      if (d.isDifferentiable()) {
        if (t <= r + g)
          return d.tangentAtLength((i ? 1 : -1) * (t - r));
        o = d;
      }
      r += g;
    }
    if (o) {
      const a = i ? 1 : 0;
      return o.tangentAt(a);
    }
    return null;
  }
  simplify(t = {}) {
    const e = this.points;
    if (e.length < 3)
      return this;
    const n = t.threshold || 0;
    let i = 0;
    for (; e[i + 2]; ) {
      const o = i, r = i + 1, a = i + 2, l = e[o], c = e[r], h = e[a];
      new R(l, h).closestPoint(c).distance(c) <= n ? e.splice(r, 1) : i += 1;
    }
    return this;
  }
  toHull() {
    const t = this.points, e = t.length;
    if (e === 0)
      return new Mt();
    let n = t[0];
    for (let d = 1; d < e; d += 1)
      (t[d].y < n.y || t[d].y === n.y && t[d].x > n.x) && (n = t[d]);
    const i = [];
    for (let d = 0; d < e; d += 1) {
      let g = n.theta(t[d]);
      g === 0 && (g = 360), i.push([t[d], d, g]);
    }
    if (i.sort((d, g) => {
      let f = d[2] - g[2];
      return f === 0 && (f = g[1] - d[1]), f;
    }), i.length > 2) {
      const d = i[i.length - 1];
      i.unshift(d);
    }
    const o = {}, r = [], a = (d) => `${d[0].toString()}@${d[1]}`;
    for (; i.length !== 0; ) {
      const d = i.pop(), g = d[0];
      if (o[a(d)])
        continue;
      let f = !1;
      for (; !f; )
        if (r.length < 2)
          r.push(d), f = !0;
        else {
          const p = r.pop(), m = p[0], b = r.pop(), y = b[0], A = y.cross(m, g);
          if (A < 0)
            r.push(b), r.push(p), r.push(d), f = !0;
          else if (A === 0) {
            const x = m.angleBetween(y, g);
            Math.abs(x - 180) < 1e-10 || m.equals(g) || y.equals(m) ? (o[a(p)] = m, r.push(b)) : Math.abs((x + 1) % 360 - 1) < 1e-10 && (r.push(b), i.push(p));
          } else
            o[a(p)] = m, r.push(b);
        }
    }
    r.length > 2 && r.pop();
    let l, c = -1;
    for (let d = 0, g = r.length; d < g; d += 1) {
      const f = r[d][1];
      (l === void 0 || f < l) && (l = f, c = d);
    }
    let h = [];
    if (c > 0) {
      const d = r.slice(c), g = r.slice(0, c);
      h = d.concat(g);
    } else
      h = r;
    const u = [];
    for (let d = 0, g = h.length; d < g; d += 1)
      u.push(h[d][0]);
    return new Mt(u);
  }
  equals(t) {
    return t == null || t.points.length !== this.points.length ? !1 : t.points.every((e, n) => e.equals(this.points[n]));
  }
  clone() {
    return new Mt(this.points.map((t) => t.clone()));
  }
  toJSON() {
    return this.points.map((t) => t.toJSON());
  }
  serialize() {
    return this.points.map((t) => `${t.serialize()}`).join(" ");
  }
}
class Ct extends Xe {
  static isCurve(t) {
    return t != null && t instanceof Ct;
  }
  static throughPoints(t) {
    if (t == null || Array.isArray(t) && t.length < 2)
      throw new Error("At least 2 points are required");
    const e = LC(t), n = [];
    for (let i = 0, o = e[0].length; i < o; i += 1) {
      const r = new C(e[0][i].x, e[0][i].y), a = new C(e[1][i].x, e[1][i].y);
      n.push(new Ct(t[i], r, a, t[i + 1]));
    }
    return n;
  }
  constructor(t, e, n, i) {
    super(), this.PRECISION = 3, this.start = C.create(t), this.controlPoint1 = C.create(e), this.controlPoint2 = C.create(n), this.end = C.create(i);
  }
  bbox() {
    const t = this.start, e = this.controlPoint1, n = this.controlPoint2, i = this.end, o = t.x, r = t.y, a = e.x, l = e.y, c = n.x, h = n.y, u = i.x, d = i.y, g = [], f = [[], []];
    let p, m, b, y, A, w, x, M;
    for (let W = 0; W < 2; W += 1) {
      if (W === 0 ? (m = 6 * o - 12 * a + 6 * c, p = -3 * o + 9 * a - 9 * c + 3 * u, b = 3 * a - 3 * o) : (m = 6 * r - 12 * l + 6 * h, p = -3 * r + 9 * l - 9 * h + 3 * d, b = 3 * l - 3 * r), Math.abs(p) < 1e-12) {
        if (Math.abs(m) < 1e-12)
          continue;
        y = -b / m, y > 0 && y < 1 && g.push(y);
        continue;
      }
      x = m * m - 4 * b * p, M = Math.sqrt(x), !(x < 0) && (A = (-m + M) / (2 * p), A > 0 && A < 1 && g.push(A), w = (-m - M) / (2 * p), w > 0 && w < 1 && g.push(w));
    }
    let v, S, B, P = g.length;
    const T = P;
    for (; P; )
      P -= 1, y = g[P], B = 1 - y, v = B * B * B * o + 3 * B * B * y * a + 3 * B * y * y * c + y * y * y * u, f[0][P] = v, S = B * B * B * r + 3 * B * B * y * l + 3 * B * y * y * h + y * y * y * d, f[1][P] = S;
    g[T] = 0, g[T + 1] = 1, f[0][T] = o, f[1][T] = r, f[0][T + 1] = u, f[1][T + 1] = d, g.length = T + 2, f[0].length = T + 2, f[1].length = T + 2;
    const O = Math.min.apply(null, f[0]), J = Math.min.apply(null, f[1]), V = Math.max.apply(null, f[0]), it = Math.max.apply(null, f[1]);
    return new I(O, J, V - O, it - J);
  }
  closestPoint(t, e = {}) {
    return this.pointAtT(this.closestPointT(t, e));
  }
  closestPointLength(t, e = {}) {
    const n = this.getOptions(e);
    return this.lengthAtT(this.closestPointT(t, n), n);
  }
  closestPointNormalizedLength(t, e = {}) {
    const n = this.getOptions(e), i = this.closestPointLength(t, n);
    if (!i)
      return 0;
    const o = this.length(n);
    return o === 0 ? 0 : i / o;
  }
  closestPointT(t, e = {}) {
    const n = this.getPrecision(e), i = this.getDivisions(e), o = Math.pow(10, -n);
    let r = null, a = 0, l = 0, c = 0, h = 0, u = 0, d = null;
    const g = i.length;
    let f = g > 0 ? 1 / g : 0;
    for (i.forEach((p, m) => {
      const b = p.start.distance(t), y = p.end.distance(t), A = b + y;
      (d == null || A < d) && (r = p, a = m * f, l = (m + 1) * f, c = b, h = y, d = A, u = p.endpointDistance());
    }); ; ) {
      const p = c ? Math.abs(c - h) / c : 0, m = h != null ? Math.abs(c - h) / h : 0, b = p < o || m < o, y = c ? c < u * o : !0, A = h ? h < u * o : !0;
      if (b || (y || A))
        return c <= h ? a : l;
      const x = r.divide(0.5);
      f /= 2;
      const M = x[0].start.distance(t), v = x[0].end.distance(t), S = M + v, B = x[1].start.distance(t), P = x[1].end.distance(t), T = B + P;
      S <= T ? (r = x[0], l -= f, c = M, h = v) : (r = x[1], a += f, c = B, h = P);
    }
  }
  closestPointTangent(t, e = {}) {
    return this.tangentAtT(this.closestPointT(t, e));
  }
  containsPoint(t, e = {}) {
    return this.toPolyline(e).containsPoint(t);
  }
  divideAt(t, e = {}) {
    if (t <= 0)
      return this.divideAtT(0);
    if (t >= 1)
      return this.divideAtT(1);
    const n = this.tAt(t, e);
    return this.divideAtT(n);
  }
  divideAtLength(t, e = {}) {
    const n = this.tAtLength(t, e);
    return this.divideAtT(n);
  }
  divide(t) {
    return this.divideAtT(t);
  }
  divideAtT(t) {
    const e = this.start, n = this.controlPoint1, i = this.controlPoint2, o = this.end;
    if (t <= 0)
      return [
        new Ct(e, e, e, e),
        new Ct(e, n, i, o)
      ];
    if (t >= 1)
      return [
        new Ct(e, n, i, o),
        new Ct(o, o, o, o)
      ];
    const r = this.getSkeletonPoints(t), a = r.startControlPoint1, l = r.startControlPoint2, c = r.divider, h = r.dividerControlPoint1, u = r.dividerControlPoint2;
    return [
      new Ct(e, a, l, c),
      new Ct(c, h, u, o)
    ];
  }
  endpointDistance() {
    return this.start.distance(this.end);
  }
  getSkeletonPoints(t) {
    const e = this.start, n = this.controlPoint1, i = this.controlPoint2, o = this.end;
    if (t <= 0)
      return {
        startControlPoint1: e.clone(),
        startControlPoint2: e.clone(),
        divider: e.clone(),
        dividerControlPoint1: n.clone(),
        dividerControlPoint2: i.clone()
      };
    if (t >= 1)
      return {
        startControlPoint1: n.clone(),
        startControlPoint2: i.clone(),
        divider: o.clone(),
        dividerControlPoint1: o.clone(),
        dividerControlPoint2: o.clone()
      };
    const r = new R(e, n).pointAt(t), a = new R(n, i).pointAt(t), l = new R(i, o).pointAt(t), c = new R(r, a).pointAt(t), h = new R(a, l).pointAt(t), u = new R(c, h).pointAt(t);
    return {
      startControlPoint1: r,
      startControlPoint2: c,
      divider: u,
      dividerControlPoint1: h,
      dividerControlPoint2: l
    };
  }
  getSubdivisions(t = {}) {
    const e = this.getPrecision(t);
    let n = [
      new Ct(this.start, this.controlPoint1, this.controlPoint2, this.end)
    ];
    if (e === 0)
      return n;
    let i = this.endpointDistance();
    const o = Math.pow(10, -e);
    let r = 0;
    for (; ; ) {
      r += 1;
      const a = [];
      n.forEach((h) => {
        const u = h.divide(0.5);
        a.push(u[0], u[1]);
      });
      const l = a.reduce((h, u) => h + u.endpointDistance(), 0), c = l !== 0 ? (l - i) / l : 0;
      if (r > 1 && c < o)
        return a;
      n = a, i = l;
    }
  }
  length(t = {}) {
    return this.getDivisions(t).reduce((n, i) => n + i.endpointDistance(), 0);
  }
  lengthAtT(t, e = {}) {
    if (t <= 0)
      return 0;
    const n = e.precision === void 0 ? this.PRECISION : e.precision;
    return this.divide(t)[0].length({ precision: n });
  }
  pointAt(t, e = {}) {
    if (t <= 0)
      return this.start.clone();
    if (t >= 1)
      return this.end.clone();
    const n = this.tAt(t, e);
    return this.pointAtT(n);
  }
  pointAtLength(t, e = {}) {
    const n = this.tAtLength(t, e);
    return this.pointAtT(n);
  }
  pointAtT(t) {
    return t <= 0 ? this.start.clone() : t >= 1 ? this.end.clone() : this.getSkeletonPoints(t).divider;
  }
  isDifferentiable() {
    const t = this.start, e = this.controlPoint1, n = this.controlPoint2, i = this.end;
    return !(t.equals(e) && e.equals(n) && n.equals(i));
  }
  tangentAt(t, e = {}) {
    if (!this.isDifferentiable())
      return null;
    t < 0 ? t = 0 : t > 1 && (t = 1);
    const n = this.tAt(t, e);
    return this.tangentAtT(n);
  }
  tangentAtLength(t, e = {}) {
    if (!this.isDifferentiable())
      return null;
    const n = this.tAtLength(t, e);
    return this.tangentAtT(n);
  }
  tangentAtT(t) {
    if (!this.isDifferentiable())
      return null;
    t < 0 && (t = 0), t > 1 && (t = 1);
    const e = this.getSkeletonPoints(t), n = e.startControlPoint2, i = e.dividerControlPoint1, o = e.divider, r = new R(n, i);
    return r.translate(o.x - n.x, o.y - n.y), r;
  }
  getPrecision(t = {}) {
    return t.precision == null ? this.PRECISION : t.precision;
  }
  getDivisions(t = {}) {
    if (t.subdivisions != null)
      return t.subdivisions;
    const e = this.getPrecision(t);
    return this.getSubdivisions({ precision: e });
  }
  getOptions(t = {}) {
    const e = this.getPrecision(t), n = this.getDivisions(t);
    return { precision: e, subdivisions: n };
  }
  tAt(t, e = {}) {
    if (t <= 0)
      return 0;
    if (t >= 1)
      return 1;
    const n = this.getOptions(e), o = this.length(n) * t;
    return this.tAtLength(o, n);
  }
  tAtLength(t, e = {}) {
    let n = !0;
    t < 0 && (n = !1, t = -t);
    const i = this.getPrecision(e), o = this.getDivisions(e), r = { precision: i, subdivisions: o };
    let a = null, l, c, h = 0, u = 0, d = 0;
    const g = o.length;
    let f = g > 0 ? 1 / g : 0;
    for (let b = 0; b < g; b += 1) {
      const y = n ? b : g - 1 - b, A = o[b], w = A.endpointDistance();
      if (t <= d + w) {
        a = A, l = y * f, c = (y + 1) * f, h = n ? t - d : w + d - t, u = n ? w + d - t : t - d;
        break;
      }
      d += w;
    }
    if (a == null)
      return n ? 1 : 0;
    const p = this.length(r), m = Math.pow(10, -i);
    for (; ; ) {
      let b;
      if (b = p !== 0 ? h / p : 0, b < m)
        return l;
      if (b = p !== 0 ? u / p : 0, b < m)
        return c;
      let y, A;
      const w = a.divide(0.5);
      f /= 2;
      const x = w[0].endpointDistance(), M = w[1].endpointDistance();
      h <= x ? (a = w[0], c -= f, y = h, A = x - y) : (a = w[1], l += f, y = h - x, A = M - y), h = y, u = A;
    }
  }
  toPoints(t = {}) {
    const e = this.getDivisions(t), n = [e[0].start.clone()];
    return e.forEach((i) => n.push(i.end.clone())), n;
  }
  toPolyline(t = {}) {
    return new Mt(this.toPoints(t));
  }
  scale(t, e, n) {
    return this.start.scale(t, e, n), this.controlPoint1.scale(t, e, n), this.controlPoint2.scale(t, e, n), this.end.scale(t, e, n), this;
  }
  rotate(t, e) {
    return this.start.rotate(t, e), this.controlPoint1.rotate(t, e), this.controlPoint2.rotate(t, e), this.end.rotate(t, e), this;
  }
  translate(t, e) {
    return typeof t == "number" ? (this.start.translate(t, e), this.controlPoint1.translate(t, e), this.controlPoint2.translate(t, e), this.end.translate(t, e)) : (this.start.translate(t), this.controlPoint1.translate(t), this.controlPoint2.translate(t), this.end.translate(t)), this;
  }
  equals(t) {
    return t != null && this.start.equals(t.start) && this.controlPoint1.equals(t.controlPoint1) && this.controlPoint2.equals(t.controlPoint2) && this.end.equals(t.end);
  }
  clone() {
    return new Ct(this.start, this.controlPoint1, this.controlPoint2, this.end);
  }
  toJSON() {
    return {
      start: this.start.toJSON(),
      controlPoint1: this.controlPoint1.toJSON(),
      controlPoint2: this.controlPoint2.toJSON(),
      end: this.end.toJSON()
    };
  }
  serialize() {
    return [
      this.start.serialize(),
      this.controlPoint1.serialize(),
      this.controlPoint2.serialize(),
      this.end.serialize()
    ].join(" ");
  }
}
function Ga(s) {
  const t = s.length, e = [], n = [];
  let i = 2;
  e[0] = s[0] / i;
  for (let o = 1; o < t; o += 1)
    n[o] = 1 / i, i = (o < t - 1 ? 4 : 3.5) - n[o], e[o] = (s[o] - e[o - 1]) / i;
  for (let o = 1; o < t; o += 1)
    e[t - o - 1] -= n[t - o] * e[t - o];
  return e;
}
function LC(s) {
  const t = s.map((l) => C.clone(l)), e = [], n = [], i = t.length - 1;
  if (i === 1)
    return e[0] = new C((2 * t[0].x + t[1].x) / 3, (2 * t[0].y + t[1].y) / 3), n[0] = new C(2 * e[0].x - t[0].x, 2 * e[0].y - t[0].y), [e, n];
  const o = [];
  for (let l = 1; l < i - 1; l += 1)
    o[l] = 4 * t[l].x + 2 * t[l + 1].x;
  o[0] = t[0].x + 2 * t[1].x, o[i - 1] = (8 * t[i - 1].x + t[i].x) / 2;
  const r = Ga(o);
  for (let l = 1; l < i - 1; l += 1)
    o[l] = 4 * t[l].y + 2 * t[l + 1].y;
  o[0] = t[0].y + 2 * t[1].y, o[i - 1] = (8 * t[i - 1].y + t[i].y) / 2;
  const a = Ga(o);
  for (let l = 0; l < i; l += 1)
    e.push(new C(r[l], a[l])), l < i - 1 ? n.push(new C(2 * t[l + 1].x - r[l + 1], 2 * t[l + 1].y - a[l + 1])) : n.push(new C((t[i].x + r[i - 1]) / 2, (t[i].y + a[i - 1]) / 2));
  return [e, n];
}
class Ks extends Xe {
  constructor() {
    super(...arguments), this.isVisible = !0, this.isSegment = !0, this.isSubpathStart = !1;
  }
  get end() {
    return this.endPoint;
  }
  get start() {
    if (this.previousSegment == null)
      throw new Error("Missing previous segment. (This segment cannot be the first segment of a path, or segment has not yet been added to a path.)");
    return this.previousSegment.end;
  }
  closestPointT(t, e) {
    if (this.closestPointNormalizedLength)
      return this.closestPointNormalizedLength(t);
    throw new Error("Neither `closestPointT` nor `closestPointNormalizedLength` method is implemented.");
  }
  // eslint-disable-next-line
  lengthAtT(t, e) {
    if (t <= 0)
      return 0;
    const n = this.length();
    return t >= 1 ? n : n * t;
  }
  divideAtT(t) {
    if (this.divideAt)
      return this.divideAt(t);
    throw new Error("Neither `divideAtT` nor `divideAt` method is implemented.");
  }
  pointAtT(t) {
    if (this.pointAt)
      return this.pointAt(t);
    throw new Error("Neither `pointAtT` nor `pointAt` method is implemented.");
  }
  tangentAtT(t) {
    if (this.tangentAt)
      return this.tangentAt(t);
    throw new Error("Neither `tangentAtT` nor `tangentAt` method is implemented.");
  }
}
class xt extends Ks {
  static create(...t) {
    const e = t.length, n = t[0];
    if (R.isLine(n))
      return new xt(n);
    if (C.isPointLike(n))
      return e === 1 ? new xt(n) : t.map((o) => new xt(o));
    if (e === 2)
      return new xt(+t[0], +t[1]);
    const i = [];
    for (let o = 0; o < e; o += 2) {
      const r = +t[o], a = +t[o + 1];
      i.push(new xt(r, a));
    }
    return i;
  }
  constructor(t, e) {
    super(), R.isLine(t) ? this.endPoint = t.end.clone().round(2) : this.endPoint = C.create(t, e).round(2);
  }
  get type() {
    return "L";
  }
  get line() {
    return new R(this.start, this.end);
  }
  bbox() {
    return this.line.bbox();
  }
  closestPoint(t) {
    return this.line.closestPoint(t);
  }
  closestPointLength(t) {
    return this.line.closestPointLength(t);
  }
  closestPointNormalizedLength(t) {
    return this.line.closestPointNormalizedLength(t);
  }
  closestPointTangent(t) {
    return this.line.closestPointTangent(t);
  }
  length() {
    return this.line.length();
  }
  divideAt(t) {
    const e = this.line.divideAt(t);
    return [new xt(e[0]), new xt(e[1])];
  }
  divideAtLength(t) {
    const e = this.line.divideAtLength(t);
    return [new xt(e[0]), new xt(e[1])];
  }
  getSubdivisions() {
    return [];
  }
  pointAt(t) {
    return this.line.pointAt(t);
  }
  pointAtLength(t) {
    return this.line.pointAtLength(t);
  }
  tangentAt(t) {
    return this.line.tangentAt(t);
  }
  tangentAtLength(t) {
    return this.line.tangentAtLength(t);
  }
  isDifferentiable() {
    return this.previousSegment == null ? !1 : !this.start.equals(this.end);
  }
  clone() {
    return new xt(this.end);
  }
  scale(t, e, n) {
    return this.end.scale(t, e, n), this;
  }
  rotate(t, e) {
    return this.end.rotate(t, e), this;
  }
  translate(t, e) {
    return typeof t == "number" ? this.end.translate(t, e) : this.end.translate(t), this;
  }
  equals(t) {
    return this.type === t.type && this.start.equals(t.start) && this.end.equals(t.end);
  }
  toJSON() {
    return {
      type: this.type,
      start: this.start.toJSON(),
      end: this.end.toJSON()
    };
  }
  serialize() {
    const t = this.end;
    return `${this.type} ${t.x} ${t.y}`;
  }
}
class ci extends Ks {
  static create() {
    return new ci();
  }
  get end() {
    if (!this.subpathStartSegment)
      throw new Error("Missing subpath start segment. (This segment needs a subpath start segment (e.g. MoveTo), or segment has not yet been added to a path.)");
    return this.subpathStartSegment.end;
  }
  get type() {
    return "Z";
  }
  get line() {
    return new R(this.start, this.end);
  }
  bbox() {
    return this.line.bbox();
  }
  closestPoint(t) {
    return this.line.closestPoint(t);
  }
  closestPointLength(t) {
    return this.line.closestPointLength(t);
  }
  closestPointNormalizedLength(t) {
    return this.line.closestPointNormalizedLength(t);
  }
  closestPointTangent(t) {
    return this.line.closestPointTangent(t);
  }
  length() {
    return this.line.length();
  }
  divideAt(t) {
    const e = this.line.divideAt(t);
    return [
      // do not actually cut into the segment, first divided part can stay as Z
      e[1].isDifferentiable() ? new xt(e[0]) : this.clone(),
      new xt(e[1])
    ];
  }
  divideAtLength(t) {
    const e = this.line.divideAtLength(t);
    return [
      e[1].isDifferentiable() ? new xt(e[0]) : this.clone(),
      new xt(e[1])
    ];
  }
  getSubdivisions() {
    return [];
  }
  pointAt(t) {
    return this.line.pointAt(t);
  }
  pointAtLength(t) {
    return this.line.pointAtLength(t);
  }
  tangentAt(t) {
    return this.line.tangentAt(t);
  }
  tangentAtLength(t) {
    return this.line.tangentAtLength(t);
  }
  isDifferentiable() {
    return !this.previousSegment || !this.subpathStartSegment ? !1 : !this.start.equals(this.end);
  }
  scale() {
    return this;
  }
  rotate() {
    return this;
  }
  translate() {
    return this;
  }
  equals(t) {
    return this.type === t.type && this.start.equals(t.start) && this.end.equals(t.end);
  }
  clone() {
    return new ci();
  }
  toJSON() {
    return {
      type: this.type,
      start: this.start.toJSON(),
      end: this.end.toJSON()
    };
  }
  serialize() {
    return this.type;
  }
}
class be extends Ks {
  static create(...t) {
    const e = t.length, n = t[0];
    if (R.isLine(n))
      return new be(n);
    if (Ct.isCurve(n))
      return new be(n);
    if (C.isPointLike(n)) {
      if (e === 1)
        return new be(n);
      const o = [];
      for (let r = 0; r < e; r += 1)
        r === 0 ? o.push(new be(t[r])) : o.push(new xt(t[r]));
      return o;
    }
    if (e === 2)
      return new be(+t[0], +t[1]);
    const i = [];
    for (let o = 0; o < e; o += 2) {
      const r = +t[o], a = +t[o + 1];
      o === 0 ? i.push(new be(r, a)) : i.push(new xt(r, a));
    }
    return i;
  }
  constructor(t, e) {
    super(), this.isVisible = !1, this.isSubpathStart = !0, R.isLine(t) || Ct.isCurve(t) ? this.endPoint = t.end.clone().round(2) : this.endPoint = C.create(t, e).round(2);
  }
  get start() {
    throw new Error("Illegal access. Moveto segments should not need a start property.");
  }
  get type() {
    return "M";
  }
  bbox() {
    return null;
  }
  closestPoint() {
    return this.end.clone();
  }
  closestPointLength() {
    return 0;
  }
  closestPointNormalizedLength() {
    return 0;
  }
  closestPointT() {
    return 1;
  }
  closestPointTangent() {
    return null;
  }
  length() {
    return 0;
  }
  lengthAtT() {
    return 0;
  }
  divideAt() {
    return [this.clone(), this.clone()];
  }
  divideAtLength() {
    return [this.clone(), this.clone()];
  }
  getSubdivisions() {
    return [];
  }
  pointAt() {
    return this.end.clone();
  }
  pointAtLength() {
    return this.end.clone();
  }
  pointAtT() {
    return this.end.clone();
  }
  tangentAt() {
    return null;
  }
  tangentAtLength() {
    return null;
  }
  tangentAtT() {
    return null;
  }
  isDifferentiable() {
    return !1;
  }
  scale(t, e, n) {
    return this.end.scale(t, e, n), this;
  }
  rotate(t, e) {
    return this.end.rotate(t, e), this;
  }
  translate(t, e) {
    return typeof t == "number" ? this.end.translate(t, e) : this.end.translate(t), this;
  }
  clone() {
    return new be(this.end);
  }
  equals(t) {
    return this.type === t.type && this.end.equals(t.end);
  }
  toJSON() {
    return {
      type: this.type,
      end: this.end.toJSON()
    };
  }
  serialize() {
    const t = this.end;
    return `${this.type} ${t.x} ${t.y}`;
  }
}
class Ut extends Ks {
  static create(...t) {
    const e = t.length, n = t[0];
    if (Ct.isCurve(n))
      return new Ut(n);
    if (C.isPointLike(n)) {
      if (e === 3)
        return new Ut(t[0], t[1], t[2]);
      const o = [];
      for (let r = 0; r < e; r += 3)
        o.push(new Ut(t[r], t[r + 1], t[r + 2]));
      return o;
    }
    if (e === 6)
      return new Ut(t[0], t[1], t[2], t[3], t[4], t[5]);
    const i = [];
    for (let o = 0; o < e; o += 6)
      i.push(new Ut(t[o], t[o + 1], t[o + 2], t[o + 3], t[o + 4], t[o + 5]));
    return i;
  }
  constructor(t, e, n, i, o, r) {
    super(), Ct.isCurve(t) ? (this.controlPoint1 = t.controlPoint1.clone().round(2), this.controlPoint2 = t.controlPoint2.clone().round(2), this.endPoint = t.end.clone().round(2)) : typeof t == "number" ? (this.controlPoint1 = new C(t, e).round(2), this.controlPoint2 = new C(n, i).round(2), this.endPoint = new C(o, r).round(2)) : (this.controlPoint1 = C.create(t).round(2), this.controlPoint2 = C.create(e).round(2), this.endPoint = C.create(n).round(2));
  }
  get type() {
    return "C";
  }
  get curve() {
    return new Ct(this.start, this.controlPoint1, this.controlPoint2, this.end);
  }
  bbox() {
    return this.curve.bbox();
  }
  closestPoint(t) {
    return this.curve.closestPoint(t);
  }
  closestPointLength(t) {
    return this.curve.closestPointLength(t);
  }
  closestPointNormalizedLength(t) {
    return this.curve.closestPointNormalizedLength(t);
  }
  closestPointTangent(t) {
    return this.curve.closestPointTangent(t);
  }
  length() {
    return this.curve.length();
  }
  divideAt(t, e = {}) {
    const n = this.curve.divideAt(t, e);
    return [new Ut(n[0]), new Ut(n[1])];
  }
  divideAtLength(t, e = {}) {
    const n = this.curve.divideAtLength(t, e);
    return [new Ut(n[0]), new Ut(n[1])];
  }
  divideAtT(t) {
    const e = this.curve.divideAtT(t);
    return [new Ut(e[0]), new Ut(e[1])];
  }
  getSubdivisions() {
    return [];
  }
  pointAt(t) {
    return this.curve.pointAt(t);
  }
  pointAtLength(t) {
    return this.curve.pointAtLength(t);
  }
  tangentAt(t) {
    return this.curve.tangentAt(t);
  }
  tangentAtLength(t) {
    return this.curve.tangentAtLength(t);
  }
  isDifferentiable() {
    if (!this.previousSegment)
      return !1;
    const t = this.start, e = this.controlPoint1, n = this.controlPoint2, i = this.end;
    return !(t.equals(e) && e.equals(n) && n.equals(i));
  }
  scale(t, e, n) {
    return this.controlPoint1.scale(t, e, n), this.controlPoint2.scale(t, e, n), this.end.scale(t, e, n), this;
  }
  rotate(t, e) {
    return this.controlPoint1.rotate(t, e), this.controlPoint2.rotate(t, e), this.end.rotate(t, e), this;
  }
  translate(t, e) {
    return typeof t == "number" ? (this.controlPoint1.translate(t, e), this.controlPoint2.translate(t, e), this.end.translate(t, e)) : (this.controlPoint1.translate(t), this.controlPoint2.translate(t), this.end.translate(t)), this;
  }
  equals(t) {
    return this.start.equals(t.start) && this.end.equals(t.end) && this.controlPoint1.equals(t.controlPoint1) && this.controlPoint2.equals(t.controlPoint2);
  }
  clone() {
    return new Ut(this.controlPoint1, this.controlPoint2, this.end);
  }
  toJSON() {
    return {
      type: this.type,
      start: this.start.toJSON(),
      controlPoint1: this.controlPoint1.toJSON(),
      controlPoint2: this.controlPoint2.toJSON(),
      end: this.end.toJSON()
    };
  }
  serialize() {
    const t = this.controlPoint1, e = this.controlPoint2, n = this.end;
    return [this.type, t.x, t.y, e.x, e.y, n.x, n.y].join(" ");
  }
}
function Hi(s, t, e) {
  return {
    x: s * Math.cos(e) - t * Math.sin(e),
    y: s * Math.sin(e) + t * Math.cos(e)
  };
}
function Va(s, t, e, n, i, o) {
  const r = 0.3333333333333333, a = 2 / 3;
  return [
    r * s + a * e,
    r * t + a * n,
    r * i + a * e,
    r * o + a * n,
    i,
    o
  ];
}
function bh(s, t, e, n, i, o, r, a, l, c) {
  const h = Math.PI * 120 / 180, u = Math.PI / 180 * (+i || 0);
  let d = [], g, f, p, m, b;
  if (c)
    f = c[0], p = c[1], m = c[2], b = c[3];
  else {
    g = Hi(s, t, -u), s = g.x, t = g.y, g = Hi(a, l, -u), a = g.x, l = g.y;
    const V = (s - a) / 2, it = (t - l) / 2;
    let W = V * V / (e * e) + it * it / (n * n);
    W > 1 && (W = Math.sqrt(W), e = W * e, n = W * n);
    const St = e * e, Lt = n * n, Ft = (o === r ? -1 : 1) * Math.sqrt(Math.abs((St * Lt - St * it * it - Lt * V * V) / (St * it * it + Lt * V * V)));
    m = Ft * e * it / n + (s + a) / 2, b = Ft * -n * V / e + (t + l) / 2, f = Math.asin((t - b) / n), p = Math.asin((l - b) / n), f = s < m ? Math.PI - f : f, p = a < m ? Math.PI - p : p, f < 0 && (f = Math.PI * 2 + f), p < 0 && (p = Math.PI * 2 + p), r && f > p && (f -= Math.PI * 2), !r && p > f && (p -= Math.PI * 2);
  }
  let y = p - f;
  if (Math.abs(y) > h) {
    const V = p, it = a, W = l;
    p = f + h * (r && p > f ? 1 : -1), a = m + e * Math.cos(p), l = b + n * Math.sin(p), d = bh(a, l, e, n, i, 0, r, it, W, [
      p,
      V,
      m,
      b
    ]);
  }
  y = p - f;
  const A = Math.cos(f), w = Math.sin(f), x = Math.cos(p), M = Math.sin(p), v = Math.tan(y / 4), S = 4 / 3 * (e * v), B = 4 / 3 * (n * v), P = [s, t], T = [s + S * w, t - B * A], O = [a + S * M, l - B * x], J = [a, l];
  if (T[0] = 2 * P[0] - T[0], T[1] = 2 * P[1] - T[1], c)
    return [T, O, J].concat(d);
  {
    d = [T, O, J].concat(d).join().split(",");
    const V = [], it = d.length;
    for (let W = 0; W < it; W += 1)
      V[W] = W % 2 ? Hi(+d[W - 1], +d[W], u).y : Hi(+d[W], +d[W + 1], u).x;
    return V;
  }
}
function FC(s) {
  if (!s)
    return null;
  const t = `	
\v\f\r   ᠎             　\u2028\u2029`, e = new RegExp(
    `([a-z])[${t},]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[${t}]*,?[${t}]*)+)`,
    // eslint-disable-line
    "ig"
  ), n = new RegExp(
    // eslint-disable-next-line
    `(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[${t}]*,?[${t}]*`,
    "ig"
  ), i = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
  }, o = [];
  return s.replace(e, (r, a, l) => {
    const c = [];
    let h = a.toLowerCase();
    l.replace(n, (d, g) => (g && c.push(+g), d)), h === "m" && c.length > 2 && (o.push([a, ...c.splice(0, 2)]), h = "l", a = a === "m" ? "l" : "L");
    const u = i[h];
    for (; c.length >= u && (o.push([a, ...c.splice(0, u)]), !!u); )
      ;
    return r;
  }), o;
}
function zC(s) {
  const t = FC(s);
  if (!t || !t.length)
    return [["M", 0, 0]];
  let e = 0, n = 0, i = 0, o = 0;
  const r = [];
  for (let a = 0, l = t.length; a < l; a += 1) {
    const c = [];
    r.push(c);
    const h = t[a], u = h[0];
    if (u !== u.toUpperCase())
      switch (c[0] = u.toUpperCase(), c[0]) {
        case "A":
          c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +h[6] + e, c[7] = +h[7] + n;
          break;
        case "V":
          c[1] = +h[1] + n;
          break;
        case "H":
          c[1] = +h[1] + e;
          break;
        case "M":
          i = +h[1] + e, o = +h[2] + n;
          for (let d = 1, g = h.length; d < g; d += 1)
            c[d] = +h[d] + (d % 2 ? e : n);
          break;
        default:
          for (let d = 1, g = h.length; d < g; d += 1)
            c[d] = +h[d] + (d % 2 ? e : n);
          break;
      }
    else
      for (let d = 0, g = h.length; d < g; d += 1)
        c[d] = h[d];
    switch (c[0]) {
      case "Z":
        e = +i, n = +o;
        break;
      case "H":
        e = c[1];
        break;
      case "V":
        n = c[1];
        break;
      case "M":
        i = c[c.length - 2], o = c[c.length - 1], e = c[c.length - 2], n = c[c.length - 1];
        break;
      default:
        e = c[c.length - 2], n = c[c.length - 1];
        break;
    }
  }
  return r;
}
function UC(s) {
  const t = zC(s), e = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null };
  function n(l, c, h) {
    let u, d;
    if (!l)
      return ["C", c.x, c.y, c.x, c.y, c.x, c.y];
    switch (l[0] in { T: 1, Q: 1 } || (c.qx = null, c.qy = null), l[0]) {
      case "M":
        c.X = l[1], c.Y = l[2];
        break;
      case "A":
        return parseFloat(l[1]) === 0 || parseFloat(l[2]) === 0 ? ["L", l[6], l[7]] : ["C"].concat(bh.apply(0, [c.x, c.y].concat(l.slice(1))));
      case "S":
        return h === "C" || h === "S" ? (u = c.x * 2 - c.bx, d = c.y * 2 - c.by) : (u = c.x, d = c.y), ["C", u, d].concat(l.slice(1));
      case "T":
        return h === "Q" || h === "T" ? (c.qx = c.x * 2 - c.qx, c.qy = c.y * 2 - c.qy) : (c.qx = c.x, c.qy = c.y), ["C"].concat(Va(c.x, c.y, c.qx, c.qy, l[1], l[2]));
      case "Q":
        return c.qx = l[1], c.qy = l[2], ["C"].concat(Va(c.x, c.y, l[1], l[2], l[3], l[4]));
      case "H":
        return ["L"].concat(l[1], c.y);
      case "V":
        return ["L"].concat(c.x, l[1]);
    }
    return l;
  }
  function i(l, c) {
    if (l[c].length > 7) {
      l[c].shift();
      const h = l[c];
      for (; h.length; )
        o[c] = "A", c += 1, l.splice(c, 0, ["C"].concat(h.splice(0, 6)));
      l.splice(c, 1), a = t.length;
    }
  }
  const o = [];
  let r = "", a = t.length;
  for (let l = 0; l < a; l += 1) {
    let c = "";
    t[l] && (c = t[l][0]), c !== "C" && (o[l] = c, l > 0 && (r = o[l - 1])), t[l] = n(t[l], e, r), o[l] !== "A" && c === "C" && (o[l] = "C"), i(t, l);
    const h = t[l], u = h.length;
    e.x = h[u - 2], e.y = h[u - 1], e.bx = parseFloat(h[u - 4]) || e.x, e.by = parseFloat(h[u - 3]) || e.y;
  }
  return (!t[0][0] || t[0][0] !== "M") && t.unshift(["M", 0, 0]), t;
}
function yh(s) {
  return UC(s).map((t) => t.map((e) => typeof e == "string" ? e : en(e, 2))).join(",").split(",").join(" ");
}
class z extends Xe {
  static isPath(t) {
    return t != null && t instanceof z;
  }
  static parse(t) {
    if (!t)
      return new z();
    const e = new z(), n = /(?:[a-zA-Z] *)(?:(?:-?\d+(?:\.\d+)?(?:e[-+]?\d+)? *,? *)|(?:-?\.\d+ *,? *))+|(?:[a-zA-Z] *)(?! |\d|-|\.)/g, i = yh(t).match(n);
    if (i != null)
      for (let o = 0, r = i.length; o < r; o += 1) {
        const a = i[o], l = /(?:[a-zA-Z])|(?:(?:-?\d+(?:\.\d+)?(?:e[-+]?\d+)?))|(?:(?:-?\.\d+))/g, c = a.match(l);
        if (c != null) {
          const h = c[0], u = c.slice(1).map((g) => +g), d = z.createSegment.call(null, h, ...u);
          e.appendSegment(d);
        }
      }
    return e;
  }
  static createSegment(t, ...e) {
    if (t === "M")
      return be.create.call(null, ...e);
    if (t === "L")
      return xt.create.call(null, ...e);
    if (t === "C")
      return Ut.create.call(null, ...e);
    if (t === "z" || t === "Z")
      return ci.create();
    throw new Error(`Invalid path segment type "${t}"`);
  }
  constructor(t) {
    if (super(), this.PRECISION = 3, this.segments = [], Array.isArray(t))
      if (R.isLine(t[0]) || Ct.isCurve(t[0])) {
        let e = null;
        t.forEach((i, o) => {
          o === 0 && this.appendSegment(z.createSegment("M", i.start)), e != null && !e.end.equals(i.start) && this.appendSegment(z.createSegment("M", i.start)), R.isLine(i) ? this.appendSegment(z.createSegment("L", i.end)) : Ct.isCurve(i) && this.appendSegment(z.createSegment("C", i.controlPoint1, i.controlPoint2, i.end)), e = i;
        });
      } else
        t.forEach((n) => {
          n.isSegment && this.appendSegment(n);
        });
    else t != null && (R.isLine(t) ? (this.appendSegment(z.createSegment("M", t.start)), this.appendSegment(z.createSegment("L", t.end))) : Ct.isCurve(t) ? (this.appendSegment(z.createSegment("M", t.start)), this.appendSegment(z.createSegment("C", t.controlPoint1, t.controlPoint2, t.end))) : Mt.isPolyline(t) ? t.points && t.points.length && t.points.forEach((e, n) => {
      const i = n === 0 ? z.createSegment("M", e) : z.createSegment("L", e);
      this.appendSegment(i);
    }) : t.isSegment && this.appendSegment(t));
  }
  get start() {
    const t = this.segments, e = t.length;
    if (e === 0)
      return null;
    for (let n = 0; n < e; n += 1) {
      const i = t[n];
      if (i.isVisible)
        return i.start;
    }
    return t[e - 1].end;
  }
  get end() {
    const t = this.segments, e = t.length;
    if (e === 0)
      return null;
    for (let n = e - 1; n >= 0; n -= 1) {
      const i = t[n];
      if (i.isVisible)
        return i.end;
    }
    return t[e - 1].end;
  }
  moveTo(...t) {
    return this.appendSegment(be.create.call(null, ...t));
  }
  lineTo(...t) {
    return this.appendSegment(xt.create.call(null, ...t));
  }
  curveTo(...t) {
    return this.appendSegment(Ut.create.call(null, ...t));
  }
  arcTo(t, e, n, i, o, r, a) {
    const l = this.end || new C(), c = typeof r == "number" ? ja(l.x, l.y, t, e, n, i, o, r, a) : ja(l.x, l.y, t, e, n, i, o, r.x, r.y);
    if (c != null)
      for (let h = 0, u = c.length; h < u; h += 6)
        this.curveTo(c[h], c[h + 1], c[h + 2], c[h + 3], c[h + 4], c[h + 5]);
    return this;
  }
  quadTo(t, e, n, i) {
    const o = this.end || new C(), r = ["M", o.x, o.y];
    if (typeof t == "number")
      r.push("Q", t, e, n, i);
    else {
      const l = e;
      r.push("Q", t.x, t.y, l.x, l.y);
    }
    const a = z.parse(r.join(" "));
    return this.appendSegment(a.segments.slice(1)), this;
  }
  close() {
    return this.appendSegment(ci.create());
  }
  drawPoints(t, e = {}) {
    const n = NC(t, e), i = z.parse(n);
    i && i.segments && this.appendSegment(i.segments);
  }
  bbox() {
    const t = this.segments, e = t.length;
    if (e === 0)
      return null;
    let n;
    for (let o = 0; o < e; o += 1) {
      const r = t[o];
      if (r.isVisible) {
        const a = r.bbox();
        a != null && (n = n ? n.union(a) : a);
      }
    }
    if (n != null)
      return n;
    const i = t[e - 1];
    return new I(i.end.x, i.end.y, 0, 0);
  }
  appendSegment(t) {
    const e = this.segments.length;
    let n = e !== 0 ? this.segments[e - 1] : null, i;
    const o = null;
    if (Array.isArray(t))
      for (let r = 0, a = t.length; r < a; r += 1) {
        const l = t[r];
        i = this.prepareSegment(l, n, o), this.segments.push(i), n = i;
      }
    else t != null && t.isSegment && (i = this.prepareSegment(t, n, o), this.segments.push(i));
    return this;
  }
  insertSegment(t, e) {
    const n = this.segments.length;
    if (t < 0 && (t = n + t + 1), t > n || t < 0)
      throw new Error("Index out of range.");
    let i, o = null, r = null;
    if (n !== 0 && (t >= 1 ? (o = this.segments[t - 1], r = o.nextSegment) : (o = null, r = this.segments[0])), !Array.isArray(e))
      i = this.prepareSegment(e, o, r), this.segments.splice(t, 0, i);
    else
      for (let a = 0, l = e.length; a < l; a += 1) {
        const c = e[a];
        i = this.prepareSegment(c, o, r), this.segments.splice(t + a, 0, i), o = i;
      }
    return this;
  }
  removeSegment(t) {
    const e = this.fixIndex(t), n = this.segments.splice(e, 1)[0], i = n.previousSegment, o = n.nextSegment;
    return i && (i.nextSegment = o), o && (o.previousSegment = i), n.isSubpathStart && o && this.updateSubpathStartSegment(o), n;
  }
  replaceSegment(t, e) {
    const n = this.fixIndex(t);
    let i;
    const o = this.segments[n];
    let r = o.previousSegment;
    const a = o.nextSegment;
    let l = o.isSubpathStart;
    if (!Array.isArray(e))
      i = this.prepareSegment(e, r, a), this.segments.splice(n, 1, i), l && i.isSubpathStart && (l = !1);
    else {
      this.segments.splice(t, 1);
      for (let c = 0, h = e.length; c < h; c += 1) {
        const u = e[c];
        i = this.prepareSegment(u, r, a), this.segments.splice(t + c, 0, i), r = i, l && i.isSubpathStart && (l = !1);
      }
    }
    l && a && this.updateSubpathStartSegment(a);
  }
  getSegment(t) {
    const e = this.fixIndex(t);
    return this.segments[e];
  }
  fixIndex(t) {
    const e = this.segments.length;
    if (e === 0)
      throw new Error("Path has no segments.");
    let n = t;
    for (; n < 0; )
      n = e + n;
    if (n >= e || n < 0)
      throw new Error("Index out of range.");
    return n;
  }
  segmentAt(t, e = {}) {
    const n = this.segmentIndexAt(t, e);
    return n ? this.getSegment(n) : null;
  }
  segmentAtLength(t, e = {}) {
    const n = this.segmentIndexAtLength(t, e);
    return n ? this.getSegment(n) : null;
  }
  segmentIndexAt(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    const n = gn(t, 0, 1), i = this.getOptions(e), r = this.length(i) * n;
    return this.segmentIndexAtLength(r, i);
  }
  segmentIndexAtLength(t, e = {}) {
    const n = this.segments.length;
    if (n === 0)
      return null;
    let i = !0;
    t < 0 && (i = !1, t = -t);
    const o = this.getPrecision(e), r = this.getSubdivisions(e);
    let a = 0, l = null;
    for (let c = 0; c < n; c += 1) {
      const h = i ? c : n - 1 - c, u = this.segments[h], d = r[h], g = u.length({ precision: o, subdivisions: d });
      if (u.isVisible) {
        if (t <= a + g)
          return h;
        l = h;
      }
      a += g;
    }
    return l;
  }
  getSegmentSubdivisions(t = {}) {
    const e = this.getPrecision(t), n = [];
    for (let i = 0, o = this.segments.length; i < o; i += 1) {
      const a = this.segments[i].getSubdivisions({ precision: e });
      n.push(a);
    }
    return n;
  }
  updateSubpathStartSegment(t) {
    let e = t.previousSegment, n = t;
    for (; n && !n.isSubpathStart; )
      e != null ? n.subpathStartSegment = e.subpathStartSegment : n.subpathStartSegment = null, e = n, n = n.nextSegment;
  }
  prepareSegment(t, e, n) {
    t.previousSegment = e, t.nextSegment = n, e != null && (e.nextSegment = t), n != null && (n.previousSegment = t);
    let i = t;
    return t.isSubpathStart && (t.subpathStartSegment = t, i = n), i != null && this.updateSubpathStartSegment(i), t;
  }
  closestPoint(t, e = {}) {
    const n = this.closestPointT(t, e);
    return n ? this.pointAtT(n) : null;
  }
  closestPointLength(t, e = {}) {
    const n = this.getOptions(e), i = this.closestPointT(t, n);
    return i ? this.lengthAtT(i, n) : 0;
  }
  closestPointNormalizedLength(t, e = {}) {
    const n = this.getOptions(e), i = this.closestPointLength(t, n);
    if (i === 0)
      return 0;
    const o = this.length(n);
    return o === 0 ? 0 : i / o;
  }
  closestPointT(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    const n = this.getPrecision(e), i = this.getSubdivisions(e);
    let o, r = 1 / 0;
    for (let a = 0, l = this.segments.length; a < l; a += 1) {
      const c = this.segments[a], h = i[a];
      if (c.isVisible) {
        const u = c.closestPointT(t, {
          precision: n,
          subdivisions: h
        }), d = c.pointAtT(u), g = Ja(d, t);
        g < r && (o = { segmentIndex: a, value: u }, r = g);
      }
    }
    return o || { segmentIndex: this.segments.length - 1, value: 1 };
  }
  closestPointTangent(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    const n = this.getPrecision(e), i = this.getSubdivisions(e);
    let o, r = 1 / 0;
    for (let a = 0, l = this.segments.length; a < l; a += 1) {
      const c = this.segments[a], h = i[a];
      if (c.isDifferentiable()) {
        const u = c.closestPointT(t, {
          precision: n,
          subdivisions: h
        }), d = c.pointAtT(u), g = Ja(d, t);
        g < r && (o = c.tangentAtT(u), r = g);
      }
    }
    return o || null;
  }
  containsPoint(t, e = {}) {
    const n = this.toPolylines(e);
    if (!n)
      return !1;
    let i = 0;
    for (let o = 0, r = n.length; o < r; o += 1)
      n[o].containsPoint(t) && (i += 1);
    return i % 2 === 1;
  }
  pointAt(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    if (t <= 0)
      return this.start.clone();
    if (t >= 1)
      return this.end.clone();
    const n = this.getOptions(e), o = this.length(n) * t;
    return this.pointAtLength(o, n);
  }
  pointAtLength(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    if (t === 0)
      return this.start.clone();
    let n = !0;
    t < 0 && (n = !1, t = -t);
    const i = this.getPrecision(e), o = this.getSubdivisions(e);
    let r, a = 0;
    for (let c = 0, h = this.segments.length; c < h; c += 1) {
      const u = n ? c : h - 1 - c, d = this.segments[u], g = o[u], f = d.length({
        precision: i,
        subdivisions: g
      });
      if (d.isVisible) {
        if (t <= a + f)
          return d.pointAtLength((n ? 1 : -1) * (t - a), {
            precision: i,
            subdivisions: g
          });
        r = d;
      }
      a += f;
    }
    return r ? n ? r.end : r.start : this.segments[this.segments.length - 1].end.clone();
  }
  pointAtT(t) {
    const e = this.segments, n = e.length;
    if (n === 0)
      return null;
    const i = t.segmentIndex;
    if (i < 0)
      return e[0].pointAtT(0);
    if (i >= n)
      return e[n - 1].pointAtT(1);
    const o = gn(t.value, 0, 1);
    return e[i].pointAtT(o);
  }
  divideAt(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    const n = gn(t, 0, 1), i = this.getOptions(e), r = this.length(i) * n;
    return this.divideAtLength(r, i);
  }
  divideAtLength(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    let n = !0;
    t < 0 && (n = !1, t = -t);
    const i = this.getPrecision(e), o = this.getSubdivisions(e);
    let r = 0, a, l, c, h, u;
    for (let x = 0, M = this.segments.length; x < M; x += 1) {
      const v = n ? x : M - 1 - x, S = this.getSegment(v), B = o[v], P = { precision: i, subdivisions: B }, T = S.length(P);
      if (S.isDifferentiable() && (c = S, h = v, t <= r + T)) {
        l = v, a = S.divideAtLength((n ? 1 : -1) * (t - r), P);
        break;
      }
      r += T;
    }
    if (!c)
      return null;
    a || (l = h, u = n ? 1 : 0, a = c.divideAtT(u));
    const d = this.clone(), g = l;
    d.replaceSegment(g, a);
    const f = g;
    let p = g + 1, m = g + 2;
    a[0].isDifferentiable() || (d.removeSegment(f), p -= 1, m -= 1);
    const b = d.getSegment(p).start;
    d.insertSegment(p, z.createSegment("M", b)), m += 1, a[1].isDifferentiable() || (d.removeSegment(m - 1), m -= 1);
    const y = m - f - 1;
    for (let x = m, M = d.segments.length; x < M; x += 1) {
      const v = this.getSegment(x - y), S = d.getSegment(x);
      if (S.type === "Z" && !v.subpathStartSegment.end.equals(S.subpathStartSegment.end)) {
        const B = z.createSegment("L", v.end);
        d.replaceSegment(x, B);
      }
    }
    const A = new z(d.segments.slice(0, p)), w = new z(d.segments.slice(p));
    return [A, w];
  }
  intersectsWithLine(t, e = {}) {
    const n = this.toPolylines(e);
    if (n == null)
      return null;
    let i = null;
    for (let o = 0, r = n.length; o < r; o += 1) {
      const a = n[o], l = t.intersect(a);
      l && (i == null && (i = []), Array.isArray(l) ? i.push(...l) : i.push(l));
    }
    return i;
  }
  isDifferentiable() {
    for (let t = 0, e = this.segments.length; t < e; t += 1)
      if (this.segments[t].isDifferentiable())
        return !0;
    return !1;
  }
  isValid() {
    const t = this.segments;
    return t.length === 0 || t[0].type === "M";
  }
  length(t = {}) {
    if (this.segments.length === 0)
      return 0;
    const e = this.getSubdivisions(t);
    let n = 0;
    for (let i = 0, o = this.segments.length; i < o; i += 1) {
      const r = this.segments[i], a = e[i];
      n += r.length({ subdivisions: a });
    }
    return n;
  }
  lengthAtT(t, e = {}) {
    const n = this.segments.length;
    if (n === 0)
      return 0;
    let i = t.segmentIndex;
    if (i < 0)
      return 0;
    let o = gn(t.value, 0, 1);
    i >= n && (i = n - 1, o = 1);
    const r = this.getPrecision(e), a = this.getSubdivisions(e);
    let l = 0;
    for (let u = 0; u < i; u += 1) {
      const d = this.segments[u], g = a[u];
      l += d.length({ precision: r, subdivisions: g });
    }
    const c = this.segments[i], h = a[i];
    return l += c.lengthAtT(o, { precision: r, subdivisions: h }), l;
  }
  tangentAt(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    const n = gn(t, 0, 1), i = this.getOptions(e), r = this.length(i) * n;
    return this.tangentAtLength(r, i);
  }
  tangentAtLength(t, e = {}) {
    if (this.segments.length === 0)
      return null;
    let n = !0;
    t < 0 && (n = !1, t = -t);
    const i = this.getPrecision(e), o = this.getSubdivisions(e);
    let r, a = 0;
    for (let l = 0, c = this.segments.length; l < c; l += 1) {
      const h = n ? l : c - 1 - l, u = this.segments[h], d = o[h], g = u.length({ precision: i, subdivisions: d });
      if (u.isDifferentiable()) {
        if (t <= a + g)
          return u.tangentAtLength((n ? 1 : -1) * (t - a), {
            precision: i,
            subdivisions: d
          });
        r = u;
      }
      a += g;
    }
    if (r) {
      const l = n ? 1 : 0;
      return r.tangentAtT(l);
    }
    return null;
  }
  tangentAtT(t) {
    const e = this.segments.length;
    if (e === 0)
      return null;
    const n = t.segmentIndex;
    if (n < 0)
      return this.segments[0].tangentAtT(0);
    if (n >= e)
      return this.segments[e - 1].tangentAtT(1);
    const i = gn(t.value, 0, 1);
    return this.segments[n].tangentAtT(i);
  }
  getPrecision(t = {}) {
    return t.precision == null ? this.PRECISION : t.precision;
  }
  getSubdivisions(t = {}) {
    if (t.segmentSubdivisions == null) {
      const e = this.getPrecision(t);
      return this.getSegmentSubdivisions({ precision: e });
    }
    return t.segmentSubdivisions;
  }
  getOptions(t = {}) {
    const e = this.getPrecision(t), n = this.getSubdivisions(t);
    return { precision: e, segmentSubdivisions: n };
  }
  toPoints(t = {}) {
    const e = this.segments, n = e.length;
    if (n === 0)
      return null;
    const i = this.getSubdivisions(t), o = [];
    let r = [];
    for (let a = 0; a < n; a += 1) {
      const l = e[a];
      if (l.isVisible) {
        const c = i[a];
        c.length > 0 ? c.forEach((h) => r.push(h.start)) : r.push(l.start);
      } else r.length > 0 && (r.push(e[a - 1].end), o.push(r), r = []);
    }
    return r.length > 0 && (r.push(this.end), o.push(r)), o;
  }
  toPolylines(t = {}) {
    const e = this.toPoints(t);
    return e ? e.map((n) => new Mt(n)) : null;
  }
  scale(t, e, n) {
    return this.segments.forEach((i) => i.scale(t, e, n)), this;
  }
  rotate(t, e) {
    return this.segments.forEach((n) => n.rotate(t, e)), this;
  }
  translate(t, e) {
    return typeof t == "number" ? this.segments.forEach((n) => n.translate(t, e)) : this.segments.forEach((n) => n.translate(t)), this;
  }
  clone() {
    const t = new z();
    return this.segments.forEach((e) => t.appendSegment(e.clone())), t;
  }
  equals(t) {
    if (t == null)
      return !1;
    const e = this.segments, n = t.segments, i = e.length;
    if (n.length !== i)
      return !1;
    for (let o = 0; o < i; o += 1) {
      const r = e[o], a = n[o];
      if (r.type !== a.type || !r.equals(a))
        return !1;
    }
    return !0;
  }
  toJSON() {
    return this.segments.map((t) => t.toJSON());
  }
  serialize() {
    if (!this.isValid())
      throw new Error("Invalid path segments.");
    return this.segments.map((t) => t.serialize()).join(" ");
  }
  toString() {
    return this.serialize();
  }
}
function Jn(s, t, e) {
  let n, i;
  typeof t == "object" ? (n = t.x, i = t.y) : (n = t, i = e);
  const o = z.parse(s), r = o.bbox();
  if (r) {
    let a = -r.height / 2 - r.y, l = -r.width / 2 - r.x;
    typeof n == "number" && (l -= n), typeof i == "number" && (a -= i), o.translate(l, a);
  }
  return o.serialize();
}
const wr = /[\t\r\n\f]/g, vr = /\S+/g, Tn = (s) => ` ${s} `;
function kn(s) {
  return s && s.getAttribute && s.getAttribute("class") || "";
}
function Ce(s, t) {
  if (s == null || t == null)
    return !1;
  const e = Tn(kn(s)), n = Tn(t);
  return s.nodeType === 1 ? e.replace(wr, " ").includes(n) : !1;
}
function k(s, t) {
  if (!(s == null || t == null)) {
    if (typeof t == "function")
      return k(s, t(kn(s)));
    if (typeof t == "string" && s.nodeType === 1) {
      const e = t.match(vr) || [], n = Tn(kn(s)).replace(wr, " ");
      let i = e.reduce((o, r) => o.indexOf(Tn(r)) < 0 ? `${o}${r} ` : o, n);
      i = i.trim(), n !== i && s.setAttribute("class", i);
    }
  }
}
function ut(s, t) {
  if (s != null) {
    if (typeof t == "function")
      return ut(s, t(kn(s)));
    if ((!t || typeof t == "string") && s.nodeType === 1) {
      const e = (t || "").match(vr) || [], n = Tn(kn(s)).replace(wr, " ");
      let i = e.reduce((o, r) => {
        const a = Tn(r);
        return o.indexOf(a) > -1 ? o.replace(a, " ") : o;
      }, n);
      i = t ? i.trim() : "", n !== i && s.setAttribute("class", i);
    }
  }
}
function le(s, t, e) {
  if (!(s == null || t == null)) {
    if (e != null && typeof t == "string") {
      e ? k(s, t) : ut(s, t);
      return;
    }
    if (typeof t == "function")
      return le(s, t(kn(s), e), e);
    typeof t == "string" && (t.match(vr) || []).forEach((i) => {
      Ce(s, i) ? ut(s, i) : k(s, i);
    });
  }
}
let Ya = 0;
function KC() {
  return Ya += 1, `v${Ya}`;
}
function xr(s) {
  return (s.id == null || s.id === "") && (s.id = KC()), s.id;
}
function je(s) {
  return s == null ? !1 : typeof s.getScreenCTM == "function" && s instanceof SVGElement;
}
const Bt = {
  svg: "http://www.w3.org/2000/svg",
  xmlns: "http://www.w3.org/2000/xmlns/",
  xml: "http://www.w3.org/XML/1998/namespace",
  xlink: "http://www.w3.org/1999/xlink",
  xhtml: "http://www.w3.org/1999/xhtml"
}, Ha = "1.1";
function Ch(s, t = document) {
  return t.createElement(s);
}
function Er(s, t = Bt.xhtml, e = document) {
  return e.createElementNS(t, s);
}
function pe(s, t = document) {
  return Er(s, Bt.svg, t);
}
function cs(s) {
  if (s) {
    const e = `<svg xmlns="${Bt.svg}" xmlns:xlink="${Bt.xlink}" version="${Ha}">${s}</svg>`, { documentElement: n } = JC(e, { async: !1 });
    return n;
  }
  const t = document.createElementNS(Bt.svg, "svg");
  return t.setAttributeNS(Bt.xmlns, "xmlns:xlink", Bt.xlink), t.setAttribute("version", Ha), t;
}
function JC(s, t = {}) {
  let e;
  try {
    const n = new DOMParser();
    if (t.async != null) {
      const i = n;
      i.async = t.async;
    }
    e = n.parseFromString(s, t.mimeType || "text/xml");
  } catch {
    e = void 0;
  }
  if (!e || e.getElementsByTagName("parsererror").length)
    throw new Error(`Invalid XML: ${s}`);
  return e;
}
function jC(s, t = !0) {
  const e = s.nodeName;
  return t ? e.toLowerCase() : e.toUpperCase();
}
function Sr(s) {
  let t = 0, e = s.previousSibling;
  for (; e; )
    e.nodeType === 1 && (t += 1), e = e.previousSibling;
  return t;
}
function GC(s, t) {
  return s.querySelectorAll(t);
}
function VC(s, t) {
  return s.querySelector(t);
}
function Ah(s, t, e) {
  const n = s.ownerSVGElement;
  let i = s.parentNode;
  for (; i && i !== e && i !== n; ) {
    if (Ce(i, t))
      return i;
    i = i.parentNode;
  }
  return null;
}
function Mr(s, t) {
  const e = t && t.parentNode;
  return s === e || !!(e && e.nodeType === 1 && s.compareDocumentPosition(e) & 16);
}
function ee(s) {
  s && (Array.isArray(s) ? s : [s]).forEach((e) => {
    e.parentNode && e.parentNode.removeChild(e);
  });
}
function Di(s) {
  for (; s.firstChild; )
    s.removeChild(s.firstChild);
}
function Rt(s, t) {
  (Array.isArray(t) ? t : [t]).forEach((n) => {
    n != null && s.appendChild(n);
  });
}
function wh(s, t) {
  const e = s.firstChild;
  return e ? hi(e, t) : Rt(s, t);
}
function hi(s, t) {
  const e = s.parentNode;
  e && (Array.isArray(t) ? t : [t]).forEach((i) => {
    i != null && e.insertBefore(i, s);
  });
}
function YC(s, t) {
  const e = s.parentNode;
  e && (Array.isArray(t) ? t : [t]).forEach((i) => {
    i != null && e.insertBefore(i, s.nextSibling);
  });
}
function ne(s, t) {
  t != null && t.appendChild(s);
}
function HC(s) {
  return !!s && s.nodeType === 1;
}
function vh(s) {
  try {
    return s instanceof HTMLElement;
  } catch {
    return typeof s == "object" && s.nodeType === 1 && typeof s.style == "object" && typeof s.ownerDocument == "object";
  }
}
function WC(s, t) {
  const e = [];
  let n = s.firstChild;
  for (; n; n = n.nextSibling)
    n.nodeType === 1 && (!t || Ce(n, t)) && e.push(n);
  return e;
}
const xh = (s) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (e) => t[e] || (t[e] = s(e));
}, Eh = xh((s) => s.replace(/\B([A-Z])/g, "-$1").toLowerCase()), Br = xh((s) => hC(Ri(s)).replace(/ /g, "")), Sh = [
  "viewBox",
  "attributeName",
  "attributeType",
  "repeatCount",
  "textLength",
  "lengthAdjust",
  "gradientUnits",
  "preserveAspectRatio"
];
function qC(s, t) {
  return s.getAttribute(t);
}
function Ir(s, t) {
  const e = Bh(t);
  e.ns ? s.hasAttributeNS(e.ns, e.local) && s.removeAttributeNS(e.ns, e.local) : s.hasAttribute(t) && s.removeAttribute(t);
}
function Pr(s, t, e) {
  if (e == null)
    return Ir(s, t);
  const n = Bh(t);
  n.ns && typeof e == "string" ? s.setAttributeNS(n.ns, t, e) : t === "id" ? s.id = `${e}` : s.setAttribute(t, `${e}`);
}
function Mh(s, t) {
  Object.keys(t).forEach((e) => {
    Pr(s, e, t[e]);
  });
}
function X(s, t, e) {
  if (t == null) {
    const n = s.attributes, i = {};
    for (let o = 0; o < n.length; o += 1)
      i[n[o].name] = n[o].value;
    return i;
  }
  if (typeof t == "string" && e === void 0)
    return s.getAttribute(t);
  typeof t == "object" ? Mh(s, t) : Pr(s, t, e);
}
function Bh(s) {
  if (s.indexOf(":") !== -1) {
    const t = s.split(":");
    return {
      ns: Bt[t[0]],
      local: t[1]
    };
  }
  return {
    ns: null,
    local: s
  };
}
function ui(s) {
  const t = {};
  return Object.keys(s).forEach((e) => {
    const n = Sh.includes(e) ? e : Eh(e);
    t[n] = s[e];
  }), t;
}
function Wi(s) {
  const t = {};
  return s.split(";").forEach((n) => {
    const i = n.trim();
    if (i) {
      const o = i.split("=");
      o.length && (t[o[0].trim()] = o[1] ? o[1].trim() : "");
    }
  }), t;
}
function No(s, t) {
  return Object.keys(t).forEach((e) => {
    if (e === "class")
      s[e] = s[e] ? `${s[e]} ${t[e]}` : t[e];
    else if (e === "style") {
      const n = typeof s[e] == "object", i = typeof t[e] == "object";
      let o, r;
      n && i ? (o = s[e], r = t[e]) : n ? (o = s[e], r = Wi(t[e])) : i ? (o = Wi(s[e]), r = t[e]) : (o = Wi(s[e]), r = Wi(t[e])), s[e] = No(o, r);
    } else
      s[e] = t[e];
  }), s;
}
const XC = /-(.)/g;
function $C(s) {
  return s.replace(XC, (t, e) => e.toUpperCase());
}
const ro = {}, Wa = ["webkit", "ms", "moz", "o"], Ih = typeof document < "u" ? document.createElement("div").style : {};
function _C(s) {
  for (let t = 0; t < Wa.length; t += 1) {
    const e = Wa[t] + s;
    if (e in Ih)
      return e;
  }
  return null;
}
function ZC(s) {
  const t = $C(s);
  if (ro[t] == null) {
    const e = t.charAt(0).toUpperCase() + t.slice(1);
    ro[t] = t in Ih ? t : _C(e);
  }
  return ro[t];
}
function qa(s, t) {
  const e = s.ownerDocument && s.ownerDocument.defaultView && s.ownerDocument.defaultView.opener ? s.ownerDocument.defaultView.getComputedStyle(s, null) : window.getComputedStyle(s, null);
  return e && t ? e.getPropertyValue(t) || e[t] : e;
}
const tA = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0
};
function eA(s) {
  return /^--/.test(s);
}
function bs(s, t, e) {
  const n = window.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function qi(s, t) {
  return parseInt(bs(s, t), 10) || 0;
}
function nA(s, t) {
  return !tA[s] && typeof t == "number" ? `${t}px` : t;
}
function st(s, t, e) {
  if (typeof t == "string") {
    const n = eA(t);
    if (n || (t = ZC(t)), e === void 0)
      return bs(s, t, n);
    n || (e = nA(t, e));
    const i = s.style;
    n ? i.setProperty(t, e) : i[t] = e;
    return;
  }
  for (const n in t)
    st(s, n, t[n]);
}
function ao(s) {
  let t = 2166136261, e = !1, n = s;
  for (let i = 0, o = n.length; i < o; i += 1) {
    let r = n.charCodeAt(i);
    r > 127 && !e && (n = unescape(encodeURIComponent(n)), r = n.charCodeAt(i), e = !0), t ^= r, t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
  }
  return t >>> 0;
}
function Tr() {
  let s = "";
  const t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  for (let e = 0, n = t.length; e < n; e += 1) {
    const i = t[e], o = Math.random() * 16 | 0, r = i === "x" ? o : i === "y" ? o & 3 | 8 : i;
    s += r.toString(16);
  }
  return s;
}
function iA(s, t, e) {
  const n = Math.min(2, Math.floor(s.length * 0.34));
  let i = Math.floor(s.length * 0.4) + 1, o, r = !1;
  const a = s.toLowerCase();
  for (const l of t) {
    const c = e(l);
    if (c !== void 0 && Math.abs(c.length - a.length) <= n) {
      const h = c.toLowerCase();
      if (h === a) {
        if (c === s)
          continue;
        return l;
      }
      if (r || c.length < 3)
        continue;
      const u = sA(a, h, i - 1);
      if (u === void 0)
        continue;
      u < 3 ? (r = !0, o = l) : (i = u, o = l);
    }
  }
  return o;
}
function sA(s, t, e) {
  let n = new Array(t.length + 1), i = new Array(t.length + 1);
  const o = e + 1;
  for (let a = 0; a <= t.length; a += 1)
    n[a] = a;
  for (let a = 1; a <= s.length; a += 1) {
    const l = s.charCodeAt(a - 1), c = a > e ? a - e : 1, h = t.length > e + a ? e + a : t.length;
    i[0] = a;
    let u = a;
    for (let g = 1; g < c; g += 1)
      i[g] = o;
    for (let g = c; g <= h; g += 1) {
      const f = l === t.charCodeAt(g - 1) ? n[g - 1] : Math.min(
        /* delete */
        n[g] + 1,
        /* insert */
        i[g - 1] + 1,
        /* substitute */
        n[g - 1] + 2
      );
      i[g] = f, u = Math.min(u, f);
    }
    for (let g = h + 1; g <= t.length; g += 1)
      i[g] = o;
    if (u > e)
      return;
    const d = n;
    n = i, i = d;
  }
  const r = n[t.length];
  return r > e ? void 0 : r;
}
const ys = /* @__PURE__ */ new WeakMap();
function oA(s, t) {
  const e = Ri(t), n = ys.get(s);
  if (n)
    return n[e];
}
function rA(s, t, e) {
  const n = Ri(t), i = ys.get(s);
  i ? i[n] = e : ys.set(s, {
    [n]: e
  });
}
function an(s, t, e) {
  if (!t)
    return ys.get(s);
  if (typeof t == "string") {
    if (e === void 0)
      return oA(s, t);
    rA(s, t, e);
    return;
  }
  for (const n in t)
    an(s, n, t[n]);
}
const aA = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
function Lo(s, t, e) {
  if (t) {
    if (typeof t == "string") {
      if (t = aA[t] || t, arguments.length < 3)
        return s[t];
      s[t] = e;
      return;
    }
    for (const n in t)
      Lo(s, n, t[n]);
  }
}
function lA(s, ...t) {
  t.forEach((e) => {
    Object.getOwnPropertyNames(e.prototype).forEach((n) => {
      n !== "constructor" && Object.defineProperty(s.prototype, n, Object.getOwnPropertyDescriptor(e.prototype, n));
    });
  });
}
const cA = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, t) {
  s.__proto__ = t;
} || function(s, t) {
  for (const e in t)
    Object.prototype.hasOwnProperty.call(t, e) && (s[e] = t[e]);
};
function hA(s, t) {
  cA(s, t);
  function e() {
    this.constructor = s;
  }
  s.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
class uA {
}
const dA = /^\s*class\s+/.test(`${uA}`) || /^\s*class\s*\{/.test(`${class {
}}`);
function kr(s, t) {
  let e;
  return dA ? e = class extends t {
  } : (e = function() {
    return t.apply(this, arguments);
  }, hA(e, t)), Object.defineProperty(e, "name", { value: s }), e;
}
function Xa(s) {
  return s === "__proto__";
}
function Or(s, t, e = "/") {
  let n;
  const i = Array.isArray(t) ? t : t.split(e);
  if (i.length)
    for (n = s; i.length; ) {
      const o = i.shift();
      if (Object(n) === n && o && o in n)
        n = n[o];
      else
        return;
    }
  return n;
}
function jn(s, t, e, n = "/") {
  const i = Array.isArray(t) ? t : t.split(n), o = i.pop();
  if (o && !Xa(o)) {
    let r = s;
    i.forEach((a) => {
      Xa(a) || (r[a] == null && (r[a] = {}), r = r[a]);
    }), r[o] = e;
  }
  return s;
}
function $a(s, t, e = "/") {
  const n = Array.isArray(t) ? t.slice() : t.split(e), i = n.pop();
  if (i)
    if (n.length > 0) {
      const o = Or(s, n);
      o && delete o[i];
    } else
      delete s[i];
  return s;
}
function gA(s, t, e = {}) {
  const n = e.offset || 0, i = [], o = [];
  let r, a, l = null;
  for (let c = 0; c < s.length; c += 1) {
    r = o[c] = s[c];
    for (let h = 0, u = t.length; h < u; h += 1) {
      const d = t[h], g = d.start + n, f = d.end + n;
      c >= g && c < f && (typeof r == "string" ? r = o[c] = {
        t: s[c],
        attrs: d.attrs
      } : r.attrs = No(No({}, r.attrs), d.attrs), e.includeAnnotationIndices && (r.annotations == null && (r.annotations = []), r.annotations.push(h)));
    }
    a = o[c - 1], a ? bt(r) && bt(a) ? (l = l, JSON.stringify(r.attrs) === JSON.stringify(a.attrs) ? l.t += r.t : (i.push(l), l = r)) : bt(r) || bt(a) ? (l = l, i.push(l), l = r) : l = String(l || "") + String(r) : l = r;
  }
  return l != null && i.push(l), i;
}
function fA(s) {
  return s.replace(/ /g, " ");
}
class F {
  get [Symbol.toStringTag]() {
    return _a;
  }
  get type() {
    return this.node.nodeName;
  }
  get id() {
    return this.node.id;
  }
  set id(t) {
    this.node.id = t;
  }
  static isVector(t) {
    if (t == null)
      return !1;
    if (t instanceof F)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === _a) && n.node instanceof SVGElement && typeof n.sample == "function" && typeof n.toPath == "function";
  }
  static create(t, e, n) {
    return new F(t, e, n);
  }
  static createVectors(t) {
    if (t[0] === "<") {
      const e = cs(t), n = [];
      for (let i = 0, o = e.childNodes.length; i < o; i += 1) {
        const r = e.childNodes[i];
        n.push(F.create(document.importNode(r, !0)));
      }
      return n;
    }
    return [F.create(t)];
  }
  static toNode(t) {
    return F.isVector(t) ? t.node : t;
  }
  static toNodes(t) {
    return Array.isArray(t) ? t.map((e) => F.toNode(e)) : [F.toNode(t)];
  }
  constructor(t, e, n) {
    if (!t)
      throw new TypeError("Invalid element to create vector");
    let i;
    if (F.isVector(t))
      i = t.node;
    else if (typeof t == "string")
      if (t.toLowerCase() === "svg")
        i = cs();
      else if (t[0] === "<") {
        const o = cs(t);
        i = document.importNode(o.firstChild, !0);
      } else
        i = document.createElementNS(Bt.svg, t);
    else
      i = t;
    this.node = i, e && this.setAttributes(e), n && this.append(n);
  }
  transform(t, e) {
    return t == null ? On(this.node) : (On(this.node, t, e), this);
  }
  translate(t, e = 0, n = {}) {
    return t == null ? tl(this.node) : (tl(this.node, t, e, n), this);
  }
  rotate(t, e, n, i = {}) {
    return t == null ? Uo(this.node) : (Uo(this.node, t, e, n, i), this);
  }
  scale(t, e) {
    return t == null ? el(this.node) : (el(this.node, t, e), this);
  }
  /**
   * Returns an SVGMatrix that specifies the transformation necessary
   * to convert this coordinate system into `target` coordinate system.
   */
  getTransformToElement(t) {
    const e = F.toNode(t);
    return Rr(this.node, e);
  }
  removeAttribute(t) {
    return Ir(this.node, t), this;
  }
  getAttribute(t) {
    return qC(this.node, t);
  }
  setAttribute(t, e) {
    return Pr(this.node, t, e), this;
  }
  setAttributes(t) {
    return Mh(this.node, t), this;
  }
  attr(t, e) {
    return t == null ? X(this.node) : typeof t == "string" && e === void 0 ? X(this.node, t) : (typeof t == "object" ? X(this.node, t) : X(this.node, t, e), this);
  }
  svg() {
    return this.node instanceof SVGSVGElement ? this : F.create(this.node.ownerSVGElement);
  }
  defs() {
    const t = this.svg() || this, e = t.node.getElementsByTagName("defs")[0];
    return e ? F.create(e) : F.create("defs").appendTo(t);
  }
  text(t, e = {}) {
    return Th(this.node, t, e), this;
  }
  tagName() {
    return jC(this.node);
  }
  clone() {
    return F.create(this.node.cloneNode(!0));
  }
  remove() {
    return ee(this.node), this;
  }
  empty() {
    return Di(this.node), this;
  }
  append(t) {
    return Rt(this.node, F.toNodes(t)), this;
  }
  appendTo(t) {
    return ne(this.node, F.isVector(t) ? t.node : t), this;
  }
  prepend(t) {
    return wh(this.node, F.toNodes(t)), this;
  }
  before(t) {
    return hi(this.node, F.toNodes(t)), this;
  }
  replace(t) {
    return this.node.parentNode && this.node.parentNode.replaceChild(F.toNode(t), this.node), F.create(t);
  }
  first() {
    return this.node.firstChild ? F.create(this.node.firstChild) : null;
  }
  last() {
    return this.node.lastChild ? F.create(this.node.lastChild) : null;
  }
  get(t) {
    const e = this.node.childNodes[t];
    return e ? F.create(e) : null;
  }
  indexOf(t) {
    return Array.prototype.slice.call(this.node.childNodes).indexOf(F.toNode(t));
  }
  find(t) {
    const e = [], n = GC(this.node, t);
    if (n)
      for (let i = 0, o = n.length; i < o; i += 1)
        e.push(F.create(n[i]));
    return e;
  }
  findOne(t) {
    const e = VC(this.node, t);
    return e ? F.create(e) : null;
  }
  findParentByClass(t, e) {
    const n = Ah(this.node, t, e);
    return n ? F.create(n) : null;
  }
  matches(t) {
    const e = this.node;
    this.node.matches;
    const n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector || null;
    return n && n.call(e, t);
  }
  contains(t) {
    return Mr(this.node, F.isVector(t) ? t.node : t);
  }
  wrap(t) {
    const e = F.create(t), n = this.node.parentNode;
    return n != null && n.insertBefore(e.node, this.node), e.append(this);
  }
  parent(t) {
    let e = this;
    if (e.node.parentNode == null)
      return null;
    if (e = F.create(e.node.parentNode), t == null)
      return e;
    do
      if (typeof t == "string" ? e.matches(t) : e instanceof t)
        return e;
    while (e = F.create(e.node.parentNode));
    return e;
  }
  children() {
    const t = this.node.childNodes, e = [];
    for (let n = 0; n < t.length; n += 1)
      t[n].nodeType === 1 && e.push(F.create(t[n]));
    return e;
  }
  eachChild(t, e) {
    const n = this.children();
    for (let i = 0, o = n.length; i < o; i += 1)
      t.call(n[i], n[i], i, n), e && n[i].eachChild(t, e);
    return this;
  }
  index() {
    return Sr(this.node);
  }
  hasClass(t) {
    return Ce(this.node, t);
  }
  addClass(t) {
    return k(this.node, t), this;
  }
  removeClass(t) {
    return ut(this.node, t), this;
  }
  toggleClass(t, e) {
    return le(this.node, t, e), this;
  }
  toLocalPoint(t, e) {
    return QA(this.node, t, e);
  }
  /**
   * Samples the underlying SVG element (it currently works only on
   * paths - where it is most useful anyway). Returns an array of objects
   * of the form `{ x: Number, y: Number, distance: Number }`. Each of these
   * objects represent a point on the path. This basically creates a discrete
   * representation of the path (which is possible a curve). The sampling
   * interval defines the accuracy of the sampling. In other words, we travel
   * from the beginning of the path to the end by interval distance (on the
   * path, not between the resulting points) and collect the discrete points
   * on the path. This is very useful in many situations. For example, SVG
   * does not provide a built-in mechanism to find intersections between two
   * paths. Using sampling, we can just generate bunch of points for each of
   * the path and find the closest ones from each set.
   */
  sample(t = 1) {
    return this.node instanceof SVGPathElement ? yA(this.node, t) : [];
  }
  toPath() {
    return F.create(SA(this.node));
  }
  toPathData() {
    return Dh(this.node);
  }
}
const _a = `X6.${F.name}`;
function pA(s, t) {
  const e = F.create(t), n = F.create("textPath"), i = s.d;
  if (i && s["xlink:href"] === void 0) {
    const o = F.create("path").attr("d", i).appendTo(e.defs());
    n.attr("xlink:href", `#${o.id}`);
  }
  return typeof s == "object" && n.attr(s), n.node;
}
function mA(s, t, e) {
  const n = e.eol, i = e.baseSize, o = e.lineHeight;
  let r = 0, a;
  const l = {}, c = t.length - 1;
  for (let h = 0; h <= c; h += 1) {
    let u = t[h], d = null;
    if (typeof u == "object") {
      const g = u.attrs, f = F.create("tspan", g);
      a = f.node;
      let p = u.t;
      n && h === c && (p += n), a.textContent = p;
      const m = g.class;
      m && f.addClass(m), e.includeAnnotationIndices && f.attr("annotations", u.annotations.join(",")), d = parseFloat(g["font-size"]), d === void 0 && (d = i), d && d > r && (r = d);
    } else
      n && h === c && (u += n), a = document.createTextNode(u || " "), i && i > r && (r = i);
    s.appendChild(a);
  }
  return r && (l.maxFontSize = r), o ? l.lineHeight = o : r && (l.lineHeight = r * 1.2), l;
}
const Ph = /em$/;
function Xi(s, t) {
  const e = parseFloat(s);
  return Ph.test(s) ? e * t : e;
}
function bA(s, t, e, n) {
  if (!Array.isArray(t))
    return 0;
  const i = t.length;
  if (!i)
    return 0;
  let o = t[0];
  const r = Xi(o.maxFontSize, e) || e;
  let a = 0;
  const l = Xi(n, e);
  for (let u = 1; u < i; u += 1) {
    o = t[u];
    const d = Xi(o.lineHeight, e) || l;
    a += d;
  }
  const c = Xi(o.maxFontSize, e) || e;
  let h;
  switch (s) {
    case "middle":
      h = r / 2 - 0.15 * c - a / 2;
      break;
    case "bottom":
      h = -(0.25 * c) - a;
      break;
    case "top":
    default:
      h = 0.8 * r;
      break;
  }
  return h;
}
function Th(s, t, e = {}) {
  t = fA(t);
  const n = e.eol;
  let i = e.textPath;
  const o = e.textVerticalAnchor, r = o === "middle" || o === "bottom" || o === "top";
  let a = e.x;
  a === void 0 && (a = s.getAttribute("x") || 0);
  const l = e.includeAnnotationIndices;
  let c = e.annotations;
  c && !Array.isArray(c) && (c = [c]);
  const h = e.lineHeight, u = h === "auto", d = u ? "1.5em" : h || "1em";
  let g = !0;
  const f = s.childNodes;
  if (f.length === 1) {
    const B = f[0];
    B && B.tagName.toUpperCase() === "TITLE" && (g = !1);
  }
  g && Di(s), X(s, {
    // Preserve spaces, do not consecutive spaces to get collapsed to one.
    "xml:space": "preserve",
    // An empty text gets rendered into the DOM in webkit-based browsers.
    // In order to unify this behaviour across all browsers
    // we rather hide the text element when it's empty.
    display: t || e.displayEmpty ? null : "none"
  });
  const p = X(s, "font-size");
  let m = parseFloat(p);
  m || (m = 16, (r || c) && !p && X(s, "font-size", `${m}`));
  let b;
  i ? (typeof i == "string" && (i = { d: i }), b = pA(i, s)) : b = document.createDocumentFragment();
  let y, A = 0, w;
  const x = t.split(`
`), M = [], v = x.length - 1;
  for (let B = 0; B <= v; B += 1) {
    y = d;
    let P = "v-line";
    const T = pe("tspan");
    let O, J = x[B];
    if (J)
      if (c) {
        const V = gA(J, c, {
          offset: -A,
          includeAnnotationIndices: l
        });
        O = mA(T, V, {
          eol: B !== v && n,
          baseSize: m,
          lineHeight: u ? null : d,
          includeAnnotationIndices: l
        });
        const it = O.lineHeight;
        it && u && B !== 0 && (y = it), B === 0 && (w = O.maxFontSize * 0.8);
      } else
        n && B !== v && (J += n), T.textContent = J;
    else {
      T.textContent = "-", P += " v-empty-line";
      const V = T.style;
      V.fillOpacity = 0, V.strokeOpacity = 0, c && (O = {});
    }
    O && M.push(O), B > 0 && T.setAttribute("dy", y), (B > 0 || i) && T.setAttribute("x", a), T.className.baseVal = P, b.appendChild(T), A += J.length + 1;
  }
  if (r)
    if (c)
      y = bA(o, M, m, d);
    else if (o === "top")
      y = "0.8em";
    else {
      let B;
      switch (v > 0 ? (B = parseFloat(d) || 1, B *= v, Ph.test(d) || (B /= m)) : B = 0, o) {
        case "middle":
          y = `${0.3 - B / 2}em`;
          break;
        case "bottom":
          y = `${-B - 0.3}em`;
          break;
      }
    }
  else o === 0 ? y = "0em" : o ? y = o : (y = 0, s.getAttribute("y") == null && s.setAttribute("y", `${w || "0.8em"}`));
  b.firstChild.setAttribute("dy", y), s.appendChild(b);
}
function ni(s, t = {}) {
  const e = document.createElement("canvas").getContext("2d");
  if (!s)
    return { width: 0 };
  const n = [], i = t["font-size"] ? `${parseFloat(t["font-size"])}px` : "14px";
  return n.push(t["font-style"] || "normal"), n.push(t["font-variant"] || "normal"), n.push(t["font-weight"] || 400), n.push(i), n.push(t["font-family"] || "sans-serif"), e.font = n.join(" "), e.measureText(s);
}
function Za(s, t, e, n = {}) {
  if (t >= e)
    return [s, ""];
  const i = s.length, o = {};
  let r = Math.round(t / e * i - 1);
  for (r < 0 && (r = 0); r >= 0 && r < i; ) {
    const a = s.slice(0, r), l = o[a] || ni(a, n).width, c = s.slice(0, r + 1), h = o[c] || ni(c, n).width;
    if (o[a] = l, o[c] = h, l > t)
      r -= 1;
    else if (h <= t)
      r += 1;
    else
      break;
  }
  return [s.slice(0, r), s.slice(r)];
}
function kh(s, t, e = {}, n = {}) {
  const i = t.width, o = t.height, r = n.eol || `
`, a = e.fontSize || 14, l = e.lineHeight ? parseFloat(e.lineHeight) : Math.ceil(a * 1.4), c = Math.floor(o / l);
  if (s.indexOf(r) > -1) {
    const m = Tr(), b = [];
    return s.split(r).forEach((y) => {
      const A = kh(y, Object.assign(Object.assign({}, t), { height: Number.MAX_SAFE_INTEGER }), e, Object.assign(Object.assign({}, n), { eol: m }));
      A && b.push(...A.split(m));
    }), b.slice(0, c).join(r);
  }
  const { width: h } = ni(s, e);
  if (h < i)
    return s;
  const u = [];
  let d = s, g = h, f = n.ellipsis, p = 0;
  f && (typeof f != "string" && (f = "…"), p = ni(f, e).width);
  for (let m = 0; m < c; m += 1)
    if (g > i)
      if (m === c - 1) {
        const [y] = Za(d, i - p, g, e);
        u.push(f ? `${y}${f}` : y);
      } else {
        const [y, A] = Za(d, i, g, e);
        u.push(y), d = A, g = ni(d, e).width;
      }
    else {
      u.push(d);
      break;
    }
  return u.join(r);
}
const Fo = 0.551784;
function Ot(s, t, e = NaN) {
  const n = s.getAttribute(t);
  if (n == null)
    return e;
  const i = parseFloat(n);
  return Number.isNaN(i) ? e : i;
}
function yA(s, t = 1) {
  const e = s.getTotalLength(), n = [];
  let i = 0, o;
  for (; i < e; )
    o = s.getPointAtLength(i), n.push({ distance: i, x: o.x, y: o.y }), i += t;
  return n;
}
function CA(s) {
  return [
    "M",
    Ot(s, "x1"),
    Ot(s, "y1"),
    "L",
    Ot(s, "x2"),
    Ot(s, "y2")
  ].join(" ");
}
function AA(s) {
  const t = Cs(s);
  return t.length === 0 ? null : `${Oh(t)} Z`;
}
function wA(s) {
  const t = Cs(s);
  return t.length === 0 ? null : Oh(t);
}
function Oh(s) {
  return `M ${s.map((e) => `${e.x} ${e.y}`).join(" L")}`;
}
function Cs(s) {
  const t = [], e = s.points;
  if (e)
    for (let n = 0, i = e.numberOfItems; n < i; n += 1)
      t.push(e.getItem(n));
  return t;
}
function vA(s) {
  const t = Ot(s, "cx", 0), e = Ot(s, "cy", 0), n = Ot(s, "r"), i = n * Fo;
  return [
    "M",
    t,
    e - n,
    // Move to the first point.
    "C",
    t + i,
    e - n,
    t + n,
    e - i,
    t + n,
    e,
    // I. Quadrant.
    "C",
    t + n,
    e + i,
    t + i,
    e + n,
    t,
    e + n,
    // II. Quadrant.
    "C",
    t - i,
    e + n,
    t - n,
    e + i,
    t - n,
    e,
    // III. Quadrant.
    "C",
    t - n,
    e - i,
    t - i,
    e - n,
    t,
    e - n,
    // IV. Quadrant.
    "Z"
  ].join(" ");
}
function xA(s) {
  const t = Ot(s, "cx", 0), e = Ot(s, "cy", 0), n = Ot(s, "rx"), i = Ot(s, "ry") || n, o = n * Fo, r = i * Fo;
  return [
    "M",
    t,
    e - i,
    // Move to the first point.
    "C",
    t + o,
    e - i,
    t + n,
    e - r,
    t + n,
    e,
    // I. Quadrant.
    "C",
    t + n,
    e + r,
    t + o,
    e + i,
    t,
    e + i,
    // II. Quadrant.
    "C",
    t - o,
    e + i,
    t - n,
    e + r,
    t - n,
    e,
    // III. Quadrant.
    "C",
    t - n,
    e - r,
    t - o,
    e - i,
    t,
    e - i,
    // IV. Quadrant.
    "Z"
  ].join(" ");
}
function EA(s) {
  return Rh({
    x: Ot(s, "x", 0),
    y: Ot(s, "y", 0),
    width: Ot(s, "width", 0),
    height: Ot(s, "height", 0),
    rx: Ot(s, "rx", 0),
    ry: Ot(s, "ry", 0)
  });
}
function Rh(s) {
  let t;
  const e = s.x, n = s.y, i = s.width, o = s.height, r = Math.min(s.rx || s["top-rx"] || 0, i / 2), a = Math.min(s.rx || s["bottom-rx"] || 0, i / 2), l = Math.min(s.ry || s["top-ry"] || 0, o / 2), c = Math.min(s.ry || s["bottom-ry"] || 0, o / 2);
  return r || a || l || c ? t = [
    "M",
    e,
    n + l,
    "v",
    o - l - c,
    "a",
    a,
    c,
    0,
    0,
    0,
    a,
    c,
    "h",
    i - 2 * a,
    "a",
    a,
    c,
    0,
    0,
    0,
    a,
    -c,
    "v",
    -(o - c - l),
    "a",
    r,
    l,
    0,
    0,
    0,
    -r,
    -l,
    "h",
    -(i - 2 * r),
    "a",
    r,
    l,
    0,
    0,
    0,
    -r,
    l,
    "Z"
  ] : t = ["M", e, n, "H", e + i, "V", n + o, "H", e, "V", n, "Z"], t.join(" ");
}
function SA(s) {
  const t = pe("path");
  X(t, X(s));
  const e = Dh(s);
  return e && t.setAttribute("d", e), t;
}
function Dh(s) {
  const t = s.tagName.toLowerCase();
  switch (t) {
    case "path":
      return s.getAttribute("d");
    case "line":
      return CA(s);
    case "polygon":
      return AA(s);
    case "polyline":
      return wA(s);
    case "ellipse":
      return xA(s);
    case "circle":
      return vA(s);
    case "rect":
      return EA(s);
  }
  throw new Error(`"${t}" cannot be converted to svg path element.`);
}
const MA = /(\w+)\(([^,)]+),?([^)]+)?\)/gi, Qh = /[ ,]+/, BA = /^(\w+)\((.*)\)/;
function IA(s, t) {
  const n = pe("svg").createSVGPoint();
  return n.x = s, n.y = t, n;
}
function kt(s) {
  const e = pe("svg").createSVGMatrix();
  if (s != null) {
    const n = s, i = ["a", "b", "c", "d", "e", "f"];
    for (const o of i)
      n[o] !== void 0 && (e[o] = n[o]);
  }
  return e;
}
function PA(s) {
  const t = pe("svg");
  return s != null ? (s instanceof DOMMatrix || (s = kt(s)), t.createSVGTransformFromMatrix(s)) : t.createSVGTransform();
}
function di(s) {
  let t = kt();
  const e = s != null && s.match(MA);
  if (!e)
    return t;
  for (let n = 0, i = e.length; n < i; n += 1) {
    const r = e[n].match(BA);
    if (r) {
      let a, l, c, h, u, d = kt();
      const g = r[2].split(Qh);
      switch (r[1].toLowerCase()) {
        case "scale":
          a = parseFloat(g[0]), l = g[1] === void 0 ? a : parseFloat(g[1]), d = d.scaleNonUniform(a, l);
          break;
        case "translate":
          c = parseFloat(g[0]), h = parseFloat(g[1]), d = d.translate(c, h);
          break;
        case "rotate":
          u = parseFloat(g[0]), c = parseFloat(g[1]) || 0, h = parseFloat(g[2]) || 0, c !== 0 || h !== 0 ? d = d.translate(c, h).rotate(u).translate(-c, -h) : d = d.rotate(u);
          break;
        case "skewx":
          u = parseFloat(g[0]), d = d.skewX(u);
          break;
        case "skewy":
          u = parseFloat(g[0]), d = d.skewY(u);
          break;
        case "matrix":
          d.a = parseFloat(g[0]), d.b = parseFloat(g[1]), d.c = parseFloat(g[2]), d.d = parseFloat(g[3]), d.e = parseFloat(g[4]), d.f = parseFloat(g[5]);
          break;
        default:
          continue;
      }
      t = t.multiply(d);
    }
  }
  return t;
}
function Qi(s) {
  const t = s || {}, e = t.a != null ? t.a : 1, n = t.b != null ? t.b : 0, i = t.c != null ? t.c : 0, o = t.d != null ? t.d : 1, r = t.e != null ? t.e : 0, a = t.f != null ? t.f : 0;
  return `matrix(${e},${n},${i},${o},${r},${a})`;
}
function Js(s) {
  let t, e, n;
  if (s) {
    const o = Qh;
    if (s.trim().indexOf("matrix") >= 0) {
      const r = di(s), a = TA(r);
      t = [a.translateX, a.translateY], e = [a.rotation], n = [a.scaleX, a.scaleY];
      const l = [];
      (t[0] !== 0 || t[1] !== 0) && l.push(`translate(${t.join(",")})`), (n[0] !== 1 || n[1] !== 1) && l.push(`scale(${n.join(",")})`), e[0] !== 0 && l.push(`rotate(${e[0]})`), s = l.join(" ");
    } else {
      const r = s.match(/translate\((.*?)\)/);
      r && (t = r[1].split(o));
      const a = s.match(/rotate\((.*?)\)/);
      a && (e = a[1].split(o));
      const l = s.match(/scale\((.*?)\)/);
      l && (n = l[1].split(o));
    }
  }
  const i = n && n[0] ? parseFloat(n[0]) : 1;
  return {
    raw: s || "",
    translation: {
      tx: t && t[0] ? parseInt(t[0], 10) : 0,
      ty: t && t[1] ? parseInt(t[1], 10) : 0
    },
    rotation: {
      angle: e && e[0] ? parseInt(e[0], 10) : 0,
      cx: e && e[1] ? parseInt(e[1], 10) : void 0,
      cy: e && e[2] ? parseInt(e[2], 10) : void 0
    },
    scale: {
      sx: i,
      sy: n && n[1] ? parseFloat(n[1]) : i
    }
  };
}
function zo(s, t) {
  const e = t.x * s.a + t.y * s.c + 0, n = t.x * s.b + t.y * s.d + 0;
  return { x: e, y: n };
}
function TA(s) {
  const t = zo(s, { x: 0, y: 1 }), e = zo(s, { x: 1, y: 0 }), n = 180 / Math.PI * Math.atan2(t.y, t.x) - 90, i = 180 / Math.PI * Math.atan2(e.y, e.x);
  return {
    skewX: n,
    skewY: i,
    translateX: s.e,
    translateY: s.f,
    scaleX: Math.sqrt(s.a * s.a + s.b * s.b),
    scaleY: Math.sqrt(s.c * s.c + s.d * s.d),
    rotation: n
  };
}
function kA(s) {
  let t, e, n, i;
  return s ? (t = s.a == null ? 1 : s.a, i = s.d == null ? 1 : s.d, e = s.b, n = s.c) : t = i = 1, {
    sx: e ? Math.sqrt(t * t + e * e) : t,
    sy: n ? Math.sqrt(n * n + i * i) : i
  };
}
function OA(s) {
  let t = { x: 0, y: 1 };
  s && (t = zo(s, t));
  const e = 180 * Math.atan2(t.y, t.x) / Math.PI % 360 - 90;
  return {
    angle: e % 360 + (e < 0 ? 360 : 0)
  };
}
function RA(s) {
  return {
    tx: s && s.e || 0,
    ty: s && s.f || 0
  };
}
function On(s, t, e = {}) {
  if (t == null)
    return di(X(s, "transform"));
  if (e.absolute) {
    s.setAttribute("transform", Qi(t));
    return;
  }
  const n = s.transform, i = PA(t);
  n.baseVal.appendItem(i);
}
function tl(s, t, e = 0, n = {}) {
  let i = X(s, "transform");
  const o = Js(i);
  if (t == null)
    return o.translation;
  i = o.raw, i = i.replace(/translate\([^)]*\)/g, "").trim();
  const r = n.absolute ? t : o.translation.tx + t, a = n.absolute ? e : o.translation.ty + e, l = `translate(${r},${a})`;
  s.setAttribute("transform", `${l} ${i}`.trim());
}
function Uo(s, t, e, n, i = {}) {
  let o = X(s, "transform");
  const r = Js(o);
  if (t == null)
    return r.rotation;
  o = r.raw, o = o.replace(/rotate\([^)]*\)/g, "").trim(), t %= 360;
  const a = i.absolute ? t : r.rotation.angle + t, l = e != null && n != null ? `,${e},${n}` : "", c = `rotate(${a}${l})`;
  s.setAttribute("transform", `${o} ${c}`.trim());
}
function el(s, t, e) {
  let n = X(s, "transform");
  const i = Js(n);
  if (t == null)
    return i.scale;
  e = e ?? t, n = i.raw, n = n.replace(/scale\([^)]*\)/g, "").trim();
  const o = `scale(${t},${e})`;
  s.setAttribute("transform", `${n} ${o}`.trim());
}
function Rr(s, t) {
  if (je(t) && je(s)) {
    const e = t.getScreenCTM(), n = s.getScreenCTM();
    if (e && n)
      return e.inverse().multiply(n);
  }
  return kt();
}
function DA(s, t) {
  let e = kt();
  if (je(t) && je(s)) {
    let n = s;
    const i = [];
    for (; n && n !== t; ) {
      const o = n.getAttribute("transform") || null, r = di(o);
      i.push(r), n = n.parentNode;
    }
    i.reverse().forEach((o) => {
      e = e.multiply(o);
    });
  }
  return e;
}
function QA(s, t, e) {
  const n = s instanceof SVGSVGElement ? s : s.ownerSVGElement, i = n.createSVGPoint();
  i.x = t, i.y = e;
  try {
    const o = n.getScreenCTM(), r = i.matrixTransform(o.inverse()), a = Rr(s, n).inverse();
    return r.matrixTransform(a);
  } catch {
    return i;
  }
}
const Nh = {};
function Rn(s) {
  return Nh[s] || {};
}
function js(s, t) {
  Nh[s] = t;
}
const ii = /* @__PURE__ */ new WeakMap();
function NA(s) {
  return ii.has(s) || ii.set(s, { events: /* @__PURE__ */ Object.create(null) }), ii.get(s);
}
function Dr(s) {
  return ii.get(s);
}
function LA(s) {
  return ii.delete(s);
}
const $i = () => !0, wn = () => !1;
function nl(s) {
  s.stopPropagation();
}
function FA(s, t, e) {
  s.addEventListener != null && s.addEventListener(t, e);
}
function zA(s, t, e) {
  s.removeEventListener != null && s.removeEventListener(t, e);
}
const UA = /[^\x20\t\r\n\f]+/g, KA = /^([^.]*)(?:\.(.+)|)/;
function Lh(s) {
  return (s || "").match(UA) || [""];
}
function Fh(s) {
  const t = KA.exec(s) || [];
  return {
    originType: t[1] ? t[1].trim() : t[1],
    namespaces: t[2] ? t[2].split(".").map((e) => e.trim()).sort() : []
  };
}
function Ko(s) {
  return s.nodeType === 1 || s.nodeType === 9 || !+s.nodeType;
}
let il = 0;
const En = /* @__PURE__ */ new WeakMap();
function zh(s) {
  return En.has(s) || (En.set(s, il), il += 1), En.get(s);
}
function JA(s) {
  return En.get(s);
}
function jA(s) {
  return En.delete(s);
}
function Uh(s, t) {
  return En.set(s, t);
}
function GA(s, t) {
  const e = [], n = Dr(s), i = n && n.events && n.events[t.type], o = i && i.handlers || [], r = i ? i.delegateCount : 0;
  if (r > 0 && // Support: Firefox <=42 - 66+
  // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
  // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
  // Support: IE 11+
  // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
  !(t.type === "click" && typeof t.button == "number" && t.button >= 1)) {
    for (let a = t.target; a !== s; a = a.parentNode || s)
      if (a.nodeType === 1 && !(t.type === "click" && a.disabled === !0)) {
        const l = [], c = {};
        for (let h = 0; h < r; h += 1) {
          const u = o[h], d = u.selector;
          if (d != null && c[d] == null) {
            const g = s, f = [];
            g.querySelectorAll(d).forEach((p) => {
              f.push(p);
            }), c[d] = f.includes(a);
          }
          c[d] && l.push(u);
        }
        l.length && e.push({ elem: a, handlers: l });
      }
  }
  return r < o.length && e.push({ elem: s, handlers: o.slice(r) }), e;
}
function sl(s) {
  return s != null && s === s.window;
}
function Kh(s, t) {
  const e = s.nodeType === 9 ? s.documentElement : s, n = t && t.parentNode;
  return s === n || !!(n && n.nodeType === 1 && // Support: IE 9 - 11+
  // IE doesn't have `contains` on SVG.
  (e.contains ? e.contains(n) : s.compareDocumentPosition && s.compareDocumentPosition(n) & 16));
}
class Pe {
  static create(t) {
    return t instanceof Pe ? t : new Pe(t);
  }
  static addProperty(t, e) {
    Object.defineProperty(Pe.prototype, t, {
      enumerable: !0,
      configurable: !0,
      get: typeof e == "function" ? (
        // eslint-disable-next-line
        function() {
          if (this.originalEvent)
            return e(this.originalEvent);
        }
      ) : (
        // eslint-disable-next-line
        function() {
          if (this.originalEvent)
            return this.originalEvent[t];
        }
      ),
      set(n) {
        Object.defineProperty(this, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n
        });
      }
    });
  }
  constructor(t, e) {
    this.isDefaultPrevented = wn, this.isPropagationStopped = wn, this.isImmediatePropagationStopped = wn, this.isSimulated = !1, this.preventDefault = () => {
      const n = this.originalEvent;
      this.isDefaultPrevented = $i, n && !this.isSimulated && n.preventDefault();
    }, this.stopPropagation = () => {
      const n = this.originalEvent;
      this.isPropagationStopped = $i, n && !this.isSimulated && n.stopPropagation();
    }, this.stopImmediatePropagation = () => {
      const n = this.originalEvent;
      this.isImmediatePropagationStopped = $i, n && !this.isSimulated && n.stopImmediatePropagation(), this.stopPropagation();
    }, typeof t == "string" ? this.type = t : t.type && (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented ? $i : wn, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.timeStamp = t.timeStamp), e && Object.assign(this, e), this.timeStamp || (this.timeStamp = Date.now());
  }
}
const ol = {
  bubbles: !0,
  cancelable: !0,
  eventPhase: !0,
  detail: !0,
  view: !0,
  button: !0,
  buttons: !0,
  clientX: !0,
  clientY: !0,
  offsetX: !0,
  offsetY: !0,
  pageX: !0,
  pageY: !0,
  screenX: !0,
  screenY: !0,
  toElement: !0,
  pointerId: !0,
  pointerType: !0,
  char: !0,
  code: !0,
  charCode: !0,
  key: !0,
  keyCode: !0,
  touches: !0,
  changedTouches: !0,
  targetTouches: !0,
  which: !0,
  altKey: !0,
  ctrlKey: !0,
  metaKey: !0,
  shiftKey: !0
};
Object.keys(ol).forEach((s) => Pe.addProperty(s, ol[s]));
js("load", {
  noBubble: !0
});
js("beforeunload", {
  postDispatch(s, t) {
    t.result !== void 0 && t.originalEvent && (t.originalEvent.returnValue = t.result);
  }
});
js("mouseenter", {
  delegateType: "mouseover",
  bindType: "mouseover",
  handle(s, t) {
    let e;
    const n = t.relatedTarget, i = t.handleObj;
    return (!n || n !== s && !Kh(s, n)) && (t.type = i.originType, e = i.handler.call(s, t), t.type = "mouseover"), e;
  }
});
js("mouseleave", {
  delegateType: "mouseout",
  bindType: "mouseout",
  handle(s, t) {
    let e;
    const n = t.relatedTarget, i = t.handleObj;
    return (!n || n !== s && !Kh(s, n)) && (t.type = i.originType, e = i.handler.call(s, t), t.type = "mouseout"), e;
  }
});
let Jo;
function VA(s, t, e, n, i) {
  if (!Ko(s))
    return;
  let o;
  if (typeof e != "function") {
    const { handler: c, selector: h } = e, u = G(e, ["handler", "selector"]);
    e = c, i = h, o = u;
  }
  const r = NA(s);
  let a = r.handler;
  a == null && (a = r.handler = function(c, ...h) {
    return Jo !== c.type ? YA(s, c, ...h) : void 0;
  });
  const l = zh(e);
  Lh(t).forEach((c) => {
    const { originType: h, namespaces: u } = Fh(c);
    if (!h)
      return;
    let d = h, g = Rn(d);
    d = (i ? g.delegateType : g.bindType) || d, g = Rn(d);
    const f = Object.assign({
      type: d,
      originType: h,
      data: n,
      selector: i,
      guid: l,
      handler: e,
      namespace: u.join(".")
    }, o), p = r.events;
    let m = p[d];
    m || (m = p[d] = { handlers: [], delegateCount: 0 }, (!g.setup || g.setup(s, n, u, a) === !1) && FA(s, d, a)), g.add && (jA(f.handler), g.add(s, f), Uh(f.handler, l)), i ? (m.handlers.splice(m.delegateCount, 0, f), m.delegateCount += 1) : m.handlers.push(f);
  });
}
function Jh(s, t, e, n, i) {
  const o = Dr(s);
  if (!o)
    return;
  const r = o.events;
  r && (Lh(t).forEach((a) => {
    const { originType: l, namespaces: c } = Fh(a);
    if (!l) {
      Object.keys(r).forEach((p) => {
        Jh(s, p + a, e, n, !0);
      });
      return;
    }
    let h = l;
    const u = Rn(h);
    h = (n ? u.delegateType : u.bindType) || h;
    const d = r[h];
    if (!d)
      return;
    const g = c.length > 0 ? new RegExp(`(^|\\.)${c.join("\\.(?:.*\\.|)")}(\\.|$)`) : null, f = d.handlers.length;
    for (let p = d.handlers.length - 1; p >= 0; p -= 1) {
      const m = d.handlers[p];
      (i || l === m.originType) && (!e || JA(e) === m.guid) && (g == null || m.namespace && g.test(m.namespace)) && (n == null || n === m.selector || n === "**" && m.selector) && (d.handlers.splice(p, 1), m.selector && (d.delegateCount -= 1), u.remove && u.remove(s, m));
    }
    f && d.handlers.length === 0 && ((!u.teardown || u.teardown(s, c, o.handler) === !1) && zA(s, h, o.handler), delete r[h]);
  }), Object.keys(r).length === 0 && LA(s));
}
function YA(s, t, ...e) {
  const n = Pe.create(t);
  n.delegateTarget = s;
  const i = Rn(n.type);
  if (i.preDispatch && i.preDispatch(s, n) === !1)
    return;
  const o = GA(s, n);
  for (let r = 0, a = o.length; r < a && !n.isPropagationStopped(); r += 1) {
    const l = o[r];
    n.currentTarget = l.elem;
    for (let c = 0, h = l.handlers.length; c < h && !n.isImmediatePropagationStopped(); c += 1) {
      const u = l.handlers[c];
      if (n.rnamespace == null || u.namespace && n.rnamespace.test(u.namespace)) {
        n.handleObj = u, n.data = u.data;
        const d = Rn(u.originType).handle, g = d ? d(l.elem, n, ...e) : u.handler.call(l.elem, n, ...e);
        g !== void 0 && (n.result = g, g === !1 && (n.preventDefault(), n.stopPropagation()));
      }
    }
  }
  return i.postDispatch && i.postDispatch(s, n), n.result;
}
function HA(s, t, e, n) {
  let i = s, o = typeof s == "string" ? s : s.type, r = typeof s == "string" || i.namespace == null ? [] : i.namespace.split(".");
  const a = e;
  if (a.nodeType === 3 || a.nodeType === 8)
    return;
  o.indexOf(".") > -1 && (r = o.split("."), o = r.shift(), r.sort());
  const l = o.indexOf(":") < 0 && `on${o}`;
  i = s instanceof Pe ? s : new Pe(o, typeof s == "object" ? s : null), i.namespace = r.join("."), i.rnamespace = i.namespace ? new RegExp(`(^|\\.)${r.join("\\.(?:.*\\.|)")}(\\.|$)`) : null, i.result = void 0, i.target || (i.target = a);
  const c = [i];
  Array.isArray(t) ? c.push(...t) : c.push(t);
  const h = Rn(o);
  if (!n && h.trigger && h.trigger(a, i, t) === !1)
    return;
  let u;
  const d = [a];
  if (!n && !h.noBubble && !sl(a)) {
    u = h.delegateType || o;
    let f = a, p = a.parentNode;
    for (; p != null; )
      d.push(p), f = p, p = p.parentNode;
    const m = a.ownerDocument || document;
    if (f === m) {
      const b = f.defaultView || f.parentWindow || window;
      d.push(b);
    }
  }
  let g = a;
  for (let f = 0, p = d.length; f < p && !i.isPropagationStopped(); f += 1) {
    const m = d[f];
    g = m, i.type = f > 1 ? u : h.bindType || o;
    const b = Dr(m);
    b && b.events[i.type] && b.handler && b.handler.call(m, ...c);
    const y = l && m[l] || null;
    y && Ko(m) && (i.result = y.call(m, ...c), i.result === !1 && i.preventDefault());
  }
  if (i.type = o, !n && !i.isDefaultPrevented()) {
    const f = h.preventDefault;
    if ((f == null || f(d.pop(), i, t) === !1) && Ko(a) && l && typeof a[o] == "function" && !sl(a)) {
      const p = a[l];
      p && (a[l] = null), Jo = o, i.isPropagationStopped() && g.addEventListener(o, nl), a[o](), i.isPropagationStopped() && g.removeEventListener(o, nl), Jo = void 0, p && (a[l] = p);
    }
  }
  return i.result;
}
class lt {
  static on(t, e, n, i, o) {
    return si.on(t, e, n, i, o), t;
  }
  static once(t, e, n, i, o) {
    return si.on(t, e, n, i, o, !0), t;
  }
  static off(t, e, n, i) {
    return si.off(t, e, n, i), t;
  }
  static trigger(t, e, n, i) {
    return HA(e, n, t, i), t;
  }
}
var si;
(function(s) {
  function t(n, i, o, r, a, l) {
    if (typeof i == "object") {
      typeof o != "string" && (r = r || o, o = void 0), Object.keys(i).forEach((c) => t(n, c, o, r, i[c], l));
      return;
    }
    if (r == null && a == null ? (a = o, r = o = void 0) : a == null && (typeof o == "string" ? (a = r, r = void 0) : (a = r, r = o, o = void 0)), a === !1)
      a = wn;
    else if (!a)
      return;
    if (l) {
      const c = a;
      a = function(h, ...u) {
        return s.off(n, h), c.call(this, h, ...u);
      }, Uh(a, zh(c));
    }
    VA(n, i, a, r, o);
  }
  s.on = t;
  function e(n, i, o, r) {
    const a = i;
    if (a && a.preventDefault != null && a.handleObj != null) {
      const l = a.handleObj;
      e(a.delegateTarget, l.namespace ? `${l.originType}.${l.namespace}` : l.originType, l.selector, l.handler);
      return;
    }
    if (typeof i == "object") {
      const l = i;
      Object.keys(l).forEach((c) => e(n, c, o, l[c]));
      return;
    }
    (o === !1 || typeof o == "function") && (r = o, o = void 0), r === !1 && (r = wn), Jh(n, i, r, o);
  }
  s.off = e;
})(si || (si = {}));
class jh {
  constructor(t, e, n) {
    this.animationFrameId = 0, this.deltaX = 0, this.deltaY = 0, this.eventName = EC("wheel") ? "wheel" : "mousewheel", this.target = t, this.onWheelCallback = e, this.onWheelGuard = n, this.onWheel = this.onWheel.bind(this), this.didWheel = this.didWheel.bind(this);
  }
  enable() {
    this.target.addEventListener(this.eventName, this.onWheel, {
      passive: !1
    });
  }
  disable() {
    this.target.removeEventListener(this.eventName, this.onWheel);
  }
  onWheel(t) {
    if (this.onWheelGuard != null && !this.onWheelGuard(t))
      return;
    this.deltaX += t.deltaX, this.deltaY += t.deltaY, t.preventDefault();
    let e;
    (this.deltaX !== 0 || this.deltaY !== 0) && (t.stopPropagation(), e = !0), e === !0 && this.animationFrameId === 0 && (this.animationFrameId = requestAnimationFrame(() => {
      this.didWheel(t);
    }));
  }
  didWheel(t) {
    this.animationFrameId = 0, this.onWheelCallback(t, this.deltaX, this.deltaY), this.deltaX = 0, this.deltaY = 0;
  }
}
function Dn(s) {
  const t = s.getBoundingClientRect(), e = s.ownerDocument.defaultView;
  return {
    top: t.top + e.pageYOffset,
    left: t.left + e.pageXOffset
  };
}
function WA(s) {
  return s.getBoundingClientRect().width;
}
function qA(s) {
  return s.getBoundingClientRect().height;
}
function XA(s) {
  const t = bs(s, "position") === "fixed";
  let e;
  if (t) {
    const n = s.getBoundingClientRect();
    e = { left: n.left, top: n.top };
  } else
    e = Dn(s);
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && bs(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && HC(i)) {
      const o = Dn(i);
      e.top -= o.top + qi(i, "borderTopWidth"), e.left -= o.left + qi(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - qi(s, "marginTop"),
    left: e.left - qi(s, "marginLeft")
  };
}
function Me(s, t) {
  const e = IA(s.x, s.y).matrixTransform(t);
  return new C(e.x, e.y);
}
function $A(s, t) {
  return new R(Me(s.start, t), Me(s.end, t));
}
function Zt(s, t) {
  const n = pe("svg").createSVGPoint();
  n.x = s.x, n.y = s.y;
  const i = n.matrixTransform(t);
  n.x = s.x + s.width, n.y = s.y;
  const o = n.matrixTransform(t);
  n.x = s.x + s.width, n.y = s.y + s.height;
  const r = n.matrixTransform(t);
  n.x = s.x, n.y = s.y + s.height;
  const a = n.matrixTransform(t), l = Math.min(i.x, o.x, r.x, a.x), c = Math.max(i.x, o.x, r.x, a.x), h = Math.min(i.y, o.y, r.y, a.y), u = Math.max(i.y, o.y, r.y, a.y);
  return new I(l, h, c - l, u - h);
}
function rl(s, t, e) {
  let n = null;
  if (!s.ownerSVGElement)
    return new I(0, 0, 0, 0);
  try {
    n = s.getBBox();
  } catch {
    n = {
      x: s.clientLeft,
      y: s.clientTop,
      width: s.clientWidth,
      height: s.clientHeight
    };
  }
  return I.create(n);
}
function we(s, t = {}) {
  let e = null;
  if (!s.ownerSVGElement || !je(s)) {
    if (vh(s)) {
      const { left: r, top: a, width: l, height: c } = Gh(s);
      return new I(r, a, l, c);
    }
    return new I(0, 0, 0, 0);
  }
  let i = t.target;
  if (!t.recursive) {
    try {
      e = s.getBBox();
    } catch {
      e = {
        x: s.clientLeft,
        y: s.clientTop,
        width: s.clientWidth,
        height: s.clientHeight
      };
    }
    if (!i)
      return I.create(e);
    const r = Rr(s, i);
    return Zt(e, r);
  }
  {
    const r = s.childNodes, a = r.length;
    if (a === 0)
      return we(s, {
        target: i
      });
    i || (i = s);
    let l = null;
    for (let c = 0; c < a; c += 1) {
      const h = r[c];
      let u = null;
      h.childNodes.length === 0 ? u = we(h, {
        target: i
      }) : u = we(h, {
        target: i,
        recursive: !0
      }), l ? l = l.union(u) : l = I.create(u);
    }
    return l || new I(0, 0, 0, 0);
  }
}
function Gh(s) {
  let t = 0, e = 0, n = 0, i = 0;
  if (s) {
    let o = s;
    for (; o; )
      t += o.offsetLeft, e += o.offsetTop, o = o.offsetParent, o && (t += parseInt(qa(o, "borderLeft"), 10), e += parseInt(qa(o, "borderTop"), 10));
    n = s.offsetWidth, i = s.offsetHeight;
  }
  return {
    left: t,
    top: e,
    width: n,
    height: i
  };
}
function Vh(s) {
  const t = (e) => {
    const n = s.getAttribute(e), i = n ? parseFloat(n) : 0;
    return Number.isNaN(i) ? 0 : i;
  };
  switch (s instanceof SVGElement && s.nodeName.toLowerCase()) {
    case "rect":
      return new I(t("x"), t("y"), t("width"), t("height"));
    case "circle":
      return new Vt(t("cx"), t("cy"), t("r"), t("r"));
    case "ellipse":
      return new Vt(t("cx"), t("cy"), t("rx"), t("ry"));
    case "polyline": {
      const e = Cs(s);
      return new Mt(e);
    }
    case "polygon": {
      const e = Cs(s);
      return e.length > 1 && e.push(e[0]), new Mt(e);
    }
    case "path": {
      let e = s.getAttribute("d");
      return DC(e) || (e = yh(e)), z.parse(e);
    }
    case "line":
      return new R(t("x1"), t("y1"), t("x2"), t("y2"));
  }
  return we(s);
}
function _A(s) {
  if (s == null)
    return null;
  let t = s;
  do {
    let e = t.tagName;
    if (typeof e != "string")
      return null;
    if (e = e.toUpperCase(), Ce(t, "x6-port"))
      t = t.nextElementSibling;
    else if (e === "G")
      t = t.firstElementChild;
    else if (e === "TITLE")
      t = t.nextElementSibling;
    else
      break;
  } while (t);
  return t;
}
function ZA(s) {
  const t = _A(s);
  if (!je(t)) {
    if (vh(s)) {
      const { left: i, top: o, width: r, height: a } = Gh(s);
      return new I(i, o, r, a);
    }
    return new I(0, 0, 0, 0);
  }
  return Vh(t).bbox() || I.create();
}
const tw = (s, t) => s - t;
class ew {
  constructor(t = {}) {
    this.comparator = t.comparator || tw, this.index = {}, this.data = t.data || [], this.heapify();
  }
  /**
   * Returns `true` if the priority queue is empty, `false` otherwise.
   */
  isEmpty() {
    return this.data.length === 0;
  }
  /**
   * Inserts a value with priority to the queue. Optionally pass a unique
   * id of this item. Passing unique IDs for each item you insert allows
   * you to use the `updatePriority()` operation.
   * @param priority
   * @param value
   * @param id
   */
  insert(t, e, n) {
    const i = { priority: t, value: e }, o = this.data.length;
    return n && (i.id = n, this.index[n] = o), this.data.push(i), this.bubbleUp(o), this;
  }
  /**
   * Returns the value of an item with the highest priority.
   */
  peek() {
    return this.data[0] ? this.data[0].value : null;
  }
  /**
   * Returns the highest priority in the queue.
   */
  peekPriority() {
    return this.data[0] ? this.data[0].priority : null;
  }
  updatePriority(t, e) {
    const n = this.index[t];
    if (typeof n > "u")
      throw new Error(`Node with id '${t}' was not found in the heap.`);
    const i = this.data, o = i[n].priority, r = this.comparator(e, o);
    r < 0 ? (i[n].priority = e, this.bubbleUp(n)) : r > 0 && (i[n].priority = e, this.bubbleDown(n));
  }
  /**
   * Removes the item with the highest priority from the queue
   *
   * @returns The value of the removed item.
   */
  remove() {
    const t = this.data, e = t[0], n = t.pop();
    return e != null && e.id && delete this.index[e.id], t.length > 0 && (t[0] = n, n.id && (this.index[n.id] = 0), this.bubbleDown(0)), e ? e.value : null;
  }
  heapify() {
    for (let t = 0; t < this.data.length; t += 1)
      this.bubbleUp(t);
  }
  bubbleUp(t) {
    const e = this.data;
    let n, i, o = t;
    for (; o > 0 && (i = o - 1 >>> 1, this.comparator(e[o].priority, e[i].priority) < 0); ) {
      n = e[i], e[i] = e[o];
      let r = e[o].id;
      r != null && (this.index[r] = i), e[o] = n, r = e[o].id, r != null && (this.index[r] = o), o = i;
    }
  }
  bubbleDown(t) {
    const e = this.data, n = e.length - 1;
    let i = t;
    for (; ; ) {
      const o = (i << 1) + 1, r = o + 1;
      let a = i;
      if (o <= n && this.comparator(e[o].priority, e[a].priority) < 0 && (a = o), r <= n && this.comparator(e[r].priority, e[a].priority) < 0 && (a = r), a !== i) {
        const l = e[a];
        e[a] = e[i];
        let c = e[i].id;
        c != null && (this.index[c] = a), e[i] = l, c = e[i].id, c != null && (this.index[c] = i), i = a;
      } else
        break;
    }
  }
}
function nw(s, t, e = (n, i) => 1) {
  const n = {}, i = {}, o = {}, r = new ew();
  for (n[t] = 0, Object.keys(s).forEach((a) => {
    a !== t && (n[a] = 1 / 0), r.insert(n[a], a, a);
  }); !r.isEmpty(); ) {
    const a = r.remove();
    o[a] = !0;
    const l = s[a];
    for (let c = 0; c < l.length; c += 1) {
      const h = l[c];
      if (!o[h]) {
        const u = n[a] + e(a, h);
        u < n[h] && (n[h] = u, i[h] = a, r.updatePriority(h, u));
      }
    }
  }
  return i;
}
const gi = /(-?(?:\d*\.\d+|\d+))\s*(px|em|rem|ch|vh|vw|vmin|vmax|%|cm|mm|in|pt|pc|ex|fr|deg|rad|turn)$/, Yh = (s, t) => {
  const e = t - s;
  return (n) => s + e * n;
}, Hh = (s, t) => {
  const e = gi, n = e.exec(s), i = e.exec(t), o = i ? i[1] : "", r = n ? +n[1] : 0, a = i ? +i[1] : 0, l = o.indexOf("."), c = l > 0 ? o[1].length - l - 1 : 0, h = a - r, u = n ? n[2] : "";
  return (d) => (r + h * d).toFixed(c) + u;
}, iw = (s, t) => {
  const e = parseInt(s.slice(1), 16), n = parseInt(t.slice(1), 16), i = e & 255, o = (n & 255) - i, r = e & 65280, a = (n & 65280) - r, l = e & 16711680, c = (n & 16711680) - l;
  return (h) => {
    const u = i + o * h & 255, d = r + a * h & 65280, g = l + c * h & 16711680;
    return `#${(1 << 24 | u | d | g).toString(16).slice(1)}`;
  };
}, sw = (s, t) => {
  const e = (o) => {
    const r = [];
    if (!o)
      return r;
    const a = /(\w+)\(([^)]+)\)/g;
    let l = a.exec(o);
    for (; l !== null; )
      l[1] && l[2] && r.push({
        name: l[1],
        values: l[2].split(/\s*,\s*/).filter(Boolean)
      }), l = a.exec(o);
    return r;
  }, n = e(s), i = e(t);
  return n.length === 0 || i.length === 0 ? () => s : (o) => {
    const r = [];
    for (let a = 0; a < Math.min(n.length, i.length); a++) {
      const l = n[a], c = i[a];
      if (!(!l || !c) && l.name === c.name && l.values.length > 0 && l.values.length === c.values.length) {
        const h = [];
        for (let u = 0; u < l.values.length; u++) {
          const d = l.values[u], g = c.values[u];
          if (!(d === void 0 || g === void 0))
            if (gi.test(d) || gi.test(g)) {
              const f = Hh(d, g);
              h.push(f(o));
            } else if (!Number.isNaN(parseFloat(d)) && !Number.isNaN(parseFloat(g))) {
              const f = Yh(parseFloat(d), parseFloat(g));
              h.push(f(o).toString());
            } else
              h.push(d);
        }
        h.length > 0 && r.push(`${l.name}(${h.join(", ")})`);
      }
    }
    return r.length > 0 ? r.join(" ") : s;
  };
}, Wh = (s) => s, ow = (s) => s * s, rw = (s) => s * s * s, aw = (s) => {
  if (s <= 0)
    return 0;
  if (s >= 1)
    return 1;
  const t = s * s, e = t * s;
  return 4 * (s < 0.5 ? e : 3 * (s - t) + e - 0.75);
}, lw = (s) => Math.pow(2, 10 * (s - 1)), cw = (s) => {
  for (let t = 0, e = 1; ; t += e, e /= 2)
    if (s >= (7 - 4 * t) / 11) {
      const n = (11 - 6 * t - 11 * s) / 4;
      return -n * n + e * e;
    }
}, hw = {
  reverse(s) {
    return (t) => 1 - s(1 - t);
  },
  reflect(s) {
    return (t) => 0.5 * (t < 0.5 ? s(2 * t) : 2 - s(2 - 2 * t));
  },
  clamp(s, t = 0, e = 1) {
    return (n) => {
      const i = s(n);
      return i < t ? t : i > e ? e : i;
    };
  },
  back(s = 1.70158) {
    return (t) => t * t * ((s + 1) * t - s);
  },
  elastic(s = 1.5) {
    return (t) => Math.pow(2, 10 * (t - 1)) * Math.cos(20 * Math.PI * s / 3 * t);
  }
};
function uw(s) {
  return -1 * Math.cos(s * (Math.PI / 2)) + 1;
}
function dw(s) {
  return Math.sin(s * (Math.PI / 2));
}
function gw(s) {
  return -0.5 * (Math.cos(Math.PI * s) - 1);
}
function fw(s) {
  return s * s;
}
function pw(s) {
  return s * (2 - s);
}
function mw(s) {
  return s < 0.5 ? 2 * s * s : -1 + (4 - 2 * s) * s;
}
function bw(s) {
  return s * s * s;
}
function yw(s) {
  const t = s - 1;
  return t * t * t + 1;
}
function Cw(s) {
  return s < 0.5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1;
}
function Aw(s) {
  return s * s * s * s;
}
function ww(s) {
  const t = s - 1;
  return 1 - t * t * t * t;
}
function vw(s) {
  const t = s - 1;
  return s < 0.5 ? 8 * s * s * s * s : 1 - 8 * t * t * t * t;
}
function xw(s) {
  return s * s * s * s * s;
}
function Ew(s) {
  const t = s - 1;
  return 1 + t * t * t * t * t;
}
function Sw(s) {
  const t = s - 1;
  return s < 0.5 ? 16 * s * s * s * s * s : 1 + 16 * t * t * t * t * t;
}
function Mw(s) {
  return s === 0 ? 0 : Math.pow(2, 10 * (s - 1));
}
function Bw(s) {
  return s === 1 ? 1 : -Math.pow(2, -10 * s) + 1;
}
function Iw(s) {
  if (s === 0 || s === 1)
    return s;
  const t = s * 2, e = t - 1;
  return t < 1 ? 0.5 * Math.pow(2, 10 * e) : 0.5 * (-Math.pow(2, -10 * e) + 2);
}
function Pw(s) {
  const t = s / 1;
  return -1 * (Math.sqrt(1 - t * s) - 1);
}
function Tw(s) {
  const t = s - 1;
  return Math.sqrt(1 - t * t);
}
function kw(s) {
  const t = s * 2, e = t - 2;
  return t < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - e * e) + 1);
}
function Ow(s, t = 1.70158) {
  return s * s * ((t + 1) * s - t);
}
function Rw(s, t = 1.70158) {
  const e = s / 1 - 1;
  return e * e * ((t + 1) * e + t) + 1;
}
function Dw(s, t = 1.70158) {
  const e = s * 2, n = e - 2, i = t * 1.525;
  return e < 1 ? 0.5 * e * e * ((i + 1) * e - i) : 0.5 * (n * n * ((i + 1) * n + i) + 2);
}
function Qw(s, t = 0.7) {
  if (s === 0 || s === 1)
    return s;
  const n = s / 1 - 1, i = 1 - t, o = i / (2 * Math.PI) * Math.asin(1);
  return -(Math.pow(2, 10 * n) * // eslint-disable-line
  Math.sin((n - o) * (2 * Math.PI) / i));
}
function Nw(s, t = 0.7) {
  const e = 1 - t, n = s * 2;
  if (s === 0 || s === 1)
    return s;
  const i = e / (2 * Math.PI) * Math.asin(1);
  return Math.pow(2, -10 * n) * // eslint-disable-line
  Math.sin((n - i) * (2 * Math.PI) / e) + 1;
}
function Lw(s, t = 0.65) {
  const e = 1 - t;
  if (s === 0 || s === 1)
    return s;
  const n = s * 2, i = n - 1, o = e / (2 * Math.PI) * Math.asin(1);
  return n < 1 ? -0.5 * (Math.pow(2, 10 * i) * // eslint-disable-line
  Math.sin((i - o) * (2 * Math.PI) / e)) : Math.pow(2, -10 * i) * // eslint-disable-line
  Math.sin((i - o) * (2 * Math.PI) / e) * 0.5 + 1;
}
function Qr(s) {
  const t = s / 1;
  if (t < 1 / 2.75)
    return 7.5625 * t * t;
  if (t < 2 / 2.75) {
    const e = t - 0.5454545454545454;
    return 7.5625 * e * e + 0.75;
  }
  if (t < 2.5 / 2.75) {
    const e = t - 0.8181818181818182;
    return 7.5625 * e * e + 0.9375;
  }
  {
    const e = t - 0.9545454545454546;
    return 7.5625 * e * e + 0.984375;
  }
}
function qh(s) {
  return 1 - Qr(1 - s);
}
function Fw(s) {
  return s < 0.5 ? qh(s * 2) * 0.5 : Qr(s * 2 - 1) * 0.5 + 0.5;
}
const zw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bounce: cw,
  cubic: rw,
  decorators: hw,
  easeInBack: Ow,
  easeInBounce: qh,
  easeInCirc: Pw,
  easeInCubic: bw,
  easeInElastic: Qw,
  easeInExpo: Mw,
  easeInOutBack: Dw,
  easeInOutBounce: Fw,
  easeInOutCirc: kw,
  easeInOutCubic: Cw,
  easeInOutElastic: Lw,
  easeInOutExpo: Iw,
  easeInOutQuad: mw,
  easeInOutQuart: vw,
  easeInOutQuint: Sw,
  easeInOutSine: gw,
  easeInQuad: fw,
  easeInQuart: Aw,
  easeInQuint: xw,
  easeInSine: uw,
  easeOutBack: Rw,
  easeOutBounce: Qr,
  easeOutCirc: Tw,
  easeOutCubic: yw,
  easeOutElastic: Nw,
  easeOutExpo: Bw,
  easeOutQuad: pw,
  easeOutQuart: ww,
  easeOutQuint: Ew,
  easeOutSine: dw,
  exponential: lw,
  inout: aw,
  linear: Wh,
  quad: ow
}, Symbol.toStringTag, { value: "Module" }));
function lo(s, t) {
  const e = [];
  for (let n = 0; n < s.length; n += 2) {
    const i = s[n], o = s[n + 1], r = Array.isArray(t) ? t : [t], a = ph(i, o, r);
    e.push(a);
  }
  return Ar(e);
}
class Uw {
  constructor() {
    this.listeners = {};
  }
  on(t, e, n) {
    return e == null ? this : (this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e, n), this);
  }
  once(t, e, n) {
    const i = (...o) => (this.off(t, i), lo([e, n], o));
    return this.on(t, i, this);
  }
  off(t, e, n) {
    if (!(t || e || n))
      return this.listeners = {}, this;
    const i = this.listeners;
    return (t ? [t] : Object.keys(i)).forEach((r) => {
      const a = i[r];
      if (a) {
        if (!(e || n)) {
          delete i[r];
          return;
        }
        for (let l = a.length - 2; l >= 0; l -= 2)
          e && a[l] !== e || n && a[l + 1] !== n || a.splice(l, 2);
      }
    }), this;
  }
  trigger(t, ...e) {
    let n = !0;
    if (t !== "*") {
      const o = this.listeners[t];
      o != null && (n = lo([...o], e));
    }
    const i = this.listeners["*"];
    return i != null ? Ar([n, lo([...i], [t, ...e])]) : n;
  }
  emit(t, ...e) {
    return this.trigger(t, ...e);
  }
}
class Gn {
  get disposed() {
    return this._disposed === !0;
  }
  dispose() {
    this._disposed = !0;
  }
}
function _() {
  return (s, t, e) => {
    const n = e.value, i = s.__proto__;
    e.value = function(...o) {
      this.disposed || (n.call(this, ...o), i.dispose.call(this));
    };
  };
}
class Gt extends Uw {
  dispose() {
    this.off();
  }
}
$([
  _()
], Gt.prototype, "dispose", null);
lA(Gt, Gn);
class jo {
  constructor() {
    this.clear();
  }
  clear() {
    this.map = /* @__PURE__ */ new WeakMap(), this.arr = [];
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    return this.map.get(t);
  }
  set(t, e) {
    this.map.set(t, e), this.arr.push(t);
  }
  delete(t) {
    const e = this.arr.indexOf(t);
    e >= 0 && this.arr.splice(e, 1);
    const n = this.map.get(t);
    return this.map.delete(t), n;
  }
  each(t) {
    this.arr.forEach((e) => {
      const n = this.map.get(e);
      t(n, e);
    });
  }
  dispose() {
    this.clear();
  }
}
function Go(s) {
  const t = [], e = [];
  return Array.isArray(s) ? t.push(...s) : s.split("|").forEach((n) => {
    n.indexOf("&") === -1 ? t.push(n) : e.push(...n.split("&"));
  }), { or: t, and: e };
}
function Kw(s, t) {
  if (s != null && t != null) {
    const e = Go(s), n = Go(t), i = e.or.sort(), o = n.or.sort(), r = e.and.sort(), a = n.and.sort(), l = (c, h) => c.length === h.length && (c.length === 0 || c.every((u, d) => u === h[d]));
    return l(i, o) && l(r, a);
  }
  return s == null && t == null;
}
function Ge(s, t, e) {
  if (t == null || Array.isArray(t) && t.length === 0)
    return e ? s.altKey !== !0 && s.ctrlKey !== !0 && s.metaKey !== !0 && s.shiftKey !== !0 : !0;
  const { or: n, and: i } = Go(t), o = (r) => {
    const a = `${r.toLowerCase()}Key`;
    return s[a] === !0;
  };
  return n.some((r) => o(r)) && i.every((r) => o(r));
}
class yt {
  static create(t) {
    return new yt(t);
  }
  constructor(t) {
    this.options = Object.assign({}, t), this.data = this.options.data || {}, this.register = this.register.bind(this), this.unregister = this.unregister.bind(this);
  }
  get names() {
    return Object.keys(this.data);
  }
  register(t, e, n = !1) {
    if (typeof t == "object") {
      Object.entries(t).forEach(([r, a]) => {
        this.register(r, a, e);
      });
      return;
    }
    this.exist(t) && !n && !fh() && this.onDuplicated(t);
    const i = this.options.process, o = i ? N(i, this, t, e) : e;
    return this.data[t] = o, o;
  }
  unregister(t) {
    const e = t ? this.data[t] : null;
    return delete this.data[t], e;
  }
  get(t) {
    return t ? this.data[t] : null;
  }
  exist(t) {
    return t ? this.data[t] != null : !1;
  }
  onDuplicated(t) {
    try {
      throw this.options.onConflict && N(this.options.onConflict, this, t), new Error(`${fs(this.options.type)} with name '${t}' already registered.`);
    } catch (e) {
      throw e;
    }
  }
  onNotFound(t, e) {
    throw new Error(this.getSpellingSuggestion(t, e));
  }
  getSpellingSuggestion(t, e) {
    const n = this.getSpellingSuggestionForName(t), i = e ? `${e} ${Vy(this.options.type)}` : this.options.type;
    return (
      // eslint-disable-next-line
      `${fs(i)} with name '${t}' does not exist.${n ? ` Did you mean '${n}'?` : ""}`
    );
  }
  getSpellingSuggestionForName(t) {
    return iA(t, Object.keys(this.data), (e) => e);
  }
}
const Jw = {
  // We do not set `ref` attribute directly on an element.
  // The attribute itself does not qualify for relative positioning.
}, Xh = {
  position: Gs("x", "width", "origin")
}, $h = {
  position: Gs("y", "height", "origin")
}, jw = {
  position: Gs("x", "width", "corner")
}, Gw = {
  position: Gs("y", "height", "corner")
}, _h = {
  set: Ve("width", "width")
}, Zh = {
  set: Ve("height", "height")
}, Vw = {
  set: Ve("rx", "width")
}, Yw = {
  set: Ve("ry", "height")
}, tu = {
  set: ((s) => {
    const t = Ve(s, "width"), e = Ve(s, "height");
    return function(n, i) {
      const o = i.refBBox, r = o.height > o.width ? t : e;
      return N(r, this, n, i);
    };
  })("r")
}, Hw = {
  set(s, { refBBox: t }) {
    let e = parseFloat(s);
    const n = Te(s);
    n && (e /= 100);
    const i = Math.sqrt(t.height * t.height + t.width * t.width);
    let o;
    return Number.isFinite(e) && (n || e >= 0 && e <= 1 ? o = e * i : o = Math.max(e + i, 0)), { r: o };
  }
}, Ww = {
  set: Ve("cx", "width")
}, qw = {
  set: Ve("cy", "height")
}, eu = {
  set: su({ resetOffset: !0 })
}, Xw = {
  set: su({ resetOffset: !1 })
}, nu = {
  set: ou({ resetOffset: !0 })
}, $w = {
  set: ou({ resetOffset: !1 })
}, _w = tu, Zw = eu, tv = nu, ev = Xh, nv = $h, iv = _h, sv = Zh;
function Gs(s, t, e) {
  return (n, { refBBox: i }) => {
    if (n == null)
      return null;
    let o = parseFloat(n);
    const r = Te(n);
    r && (o /= 100);
    let a;
    if (Number.isFinite(o)) {
      const c = i[e];
      r || o > 0 && o < 1 ? a = c[s] + i[t] * o : a = c[s] + o;
    }
    const l = new C();
    return l[s] = a || 0, l;
  };
}
function Ve(s, t) {
  return (e, { refBBox: n }) => {
    let i = parseFloat(e);
    const o = Te(e);
    o && (i /= 100);
    const r = {};
    if (Number.isFinite(i)) {
      const a = o || i >= 0 && i <= 1 ? i * n[t] : Math.max(i + n[t], 0);
      r[s] = a;
    }
    return r;
  };
}
function iu(s, t) {
  const e = "x6-shape", n = t && t.resetOffset;
  return (i, { elem: o, refBBox: r }) => {
    let a = an(o, e);
    if (!a || a.value !== i) {
      const p = s(i);
      a = {
        value: i,
        shape: p,
        shapeBBox: p.bbox()
      }, an(o, e, a);
    }
    const l = a.shape.clone(), c = a.shapeBBox.clone(), h = c.getOrigin(), u = r.getOrigin();
    c.x = u.x, c.y = u.y;
    const d = r.getMaxScaleToFit(c, u), g = c.width === 0 || r.width === 0 ? 1 : d.sx, f = c.height === 0 || r.height === 0 ? 1 : d.sy;
    return l.scale(g, f, h), n && l.translate(-h.x, -h.y), l;
  };
}
function su(s) {
  function t(n) {
    return z.parse(n);
  }
  const e = iu(t, s);
  return (n, i) => ({
    d: e(n, i).serialize()
  });
}
function ou(s) {
  const t = iu((e) => new Mt(e), s);
  return (e, n) => ({
    points: t(e, n).serialize()
  });
}
const ov = {
  qualify: fe,
  set(s, { view: t }) {
    return `url(#${t.graph.defineGradient(s)})`;
  }
}, rv = {
  qualify: fe,
  set(s, { view: t }) {
    const e = t.cell, n = Object.assign({}, s);
    if (e.isEdge() && n.type === "linearGradient") {
      const i = t, o = i.sourcePoint, r = i.targetPoint;
      n.id = `gradient-${n.type}-${e.id}`, n.attrs = Object.assign(Object.assign({}, n.attrs), { x1: o.x, y1: o.y, x2: r.x, y2: r.y, gradientUnits: "userSpaceOnUse" }), t.graph.defs.remove(n.id);
    }
    return `url(#${t.graph.defineGradient(n)})`;
  }
}, ru = {
  qualify(s, { attrs: t }) {
    return t.textWrap == null || !fe(t.textWrap);
  },
  set(s, { view: t, elem: e, attrs: n }) {
    const i = "x6-text", o = an(e, i), r = (h) => {
      try {
        return JSON.parse(h);
      } catch {
        return h;
      }
    }, a = {
      x: n.x,
      eol: n.eol,
      annotations: r(n.annotations),
      textPath: r(n["text-path"] || n.textPath),
      textVerticalAnchor: n["text-vertical-anchor"] || n.textVerticalAnchor,
      displayEmpty: (n["display-empty"] || n.displayEmpty) === "true",
      lineHeight: n["line-height"] || n.lineHeight
    }, l = n["font-size"] || n.fontSize, c = JSON.stringify([s, a]);
    if (l && e.setAttribute("font-size", l), o == null || o !== c) {
      const h = a.textPath;
      if (h != null && typeof h == "object") {
        const u = h.selector;
        if (typeof u == "string") {
          const d = t.find(u)[0];
          d instanceof SVGPathElement && (xr(d), a.textPath = Object.assign({ "xlink:href": `#${d.id}` }, h));
        }
      }
      Th(e, `${s}`, a), an(e, i, c);
    }
  }
}, av = {
  qualify: fe,
  set(s, { view: t, elem: e, attrs: n, refBBox: i }) {
    const o = s, r = o.width || 0;
    Te(r) ? i.width *= parseFloat(r) / 100 : r <= 0 ? i.width += r : i.width = r;
    const a = o.height || 0;
    Te(a) ? i.height *= parseFloat(a) / 100 : a <= 0 ? i.height += a : i.height = a;
    let l, c = o.text;
    c == null && (c = n.text || (e == null ? void 0 : e.textContent)), c != null ? l = kh(`${c}`, i, {
      "font-weight": n["font-weight"] || n.fontWeight,
      "font-size": n["font-size"] || n.fontSize,
      "font-family": n["font-family"] || n.fontFamily,
      lineHeight: n.lineHeight
    }, {
      // svgDocument: view.graph.view.svg,
      ellipsis: o.ellipsis
      // hyphen: info.hyphen as string,
      // breakWord: info.breakWord as boolean,
    }) : l = "", N(ru.set, this, l, {
      view: t,
      elem: e,
      attrs: n,
      refBBox: i,
      cell: t.cell
    });
  }
}, Vn = (s, { attrs: t }) => t.text !== void 0, lv = {
  qualify: Vn
}, cv = {
  qualify: Vn
}, hv = {
  qualify: Vn
}, uv = {
  qualify: Vn
}, dv = {
  qualify: Vn
}, gv = {
  qualify: Vn
}, fv = {
  qualify(s, { elem: t }) {
    return t instanceof SVGElement;
  },
  set(s, { elem: t }) {
    const e = "x6-title", n = `${s}`, i = an(t, e);
    if (i == null || i !== n) {
      an(t, e, n);
      const o = t.firstChild;
      if (o && o.tagName.toUpperCase() === "TITLE") {
        const r = o;
        r.textContent = n;
      } else {
        const r = document.createElementNS(t.namespaceURI, "title");
        r.textContent = n, t.insertBefore(r, o);
      }
    }
  }
}, pv = {
  offset: au("x", "width", "right")
}, mv = {
  offset: au("y", "height", "bottom")
}, bv = {
  offset(s, { refBBox: t }) {
    return s ? { x: -t.x, y: -t.y } : { x: 0, y: 0 };
  }
};
function au(s, t, e) {
  return (n, { refBBox: i }) => {
    const o = new C();
    let r;
    return n === "middle" ? r = i[t] / 2 : n === e ? r = i[t] : typeof n == "number" && Number.isFinite(n) ? r = n > -1 && n < 1 ? -i[t] * n : -n : Te(n) ? r = i[t] * parseFloat(n) / 100 : r = 0, o[s] = -(i[s] + r), o;
  };
}
const yv = {
  qualify: fe,
  set(s, { elem: t }) {
    st(t, s);
  }
}, Cv = {
  set(s, { elem: t }) {
    t.innerHTML = `${s}`;
  }
}, Av = {
  qualify: fe,
  set(s, { view: t }) {
    return `url(#${t.graph.defineFilter(s)})`;
  }
}, wv = {
  set(s) {
    return s != null && typeof s == "object" && s.id ? s.id : s;
  }
}, vv = (s) => {
  var { size: t, width: e, height: n, offset: i, open: o } = s, r = G(s, ["size", "width", "height", "offset", "open"]);
  return lu({ size: t, width: e, height: n, offset: i }, o === !0, !0, void 0, r);
}, xv = (s) => {
  var { size: t, width: e, height: n, offset: i, factor: o } = s, r = G(s, ["size", "width", "height", "offset", "factor"]);
  return lu({ size: t, width: e, height: n, offset: i }, !1, !1, o, r);
};
function lu(s, t, e, n = 3 / 4, i = {}) {
  const o = s.size || 10, r = s.width || o, a = s.height || o, l = new z(), c = {};
  if (t)
    l.moveTo(r, 0).lineTo(0, a / 2).lineTo(r, a), c.fill = "none";
  else {
    if (l.moveTo(0, a / 2), l.lineTo(r, 0), !e) {
      const h = nn(n, 0, 1);
      l.lineTo(r * h, a / 2);
    }
    l.lineTo(r, a), l.close();
  }
  return Object.assign(Object.assign(Object.assign({}, c), i), { tagName: "path", d: Jn(l.serialize(), {
    x: s.offset != null ? s.offset : -r / 2
  }) });
}
const Ev = (s) => {
  var { size: t, width: e, height: n, offset: i } = s, o = G(s, ["size", "width", "height", "offset"]);
  const r = t || 10, a = e || r, l = n || r, c = new z();
  return c.moveTo(0, l / 2).lineTo(a / 2, 0).lineTo(a, l / 2).lineTo(a / 2, l).close(), Object.assign(Object.assign({}, o), { tagName: "path", d: Jn(c.serialize(), i ?? -a / 2) });
}, Sv = (s) => {
  var { d: t, offsetX: e, offsetY: n } = s, i = G(s, ["d", "offsetX", "offsetY"]);
  return Object.assign(Object.assign({}, i), { tagName: "path", d: Jn(t, e, n) });
}, Mv = (s) => {
  var { size: t, width: e, height: n, offset: i } = s, o = G(s, ["size", "width", "height", "offset"]);
  const r = t || 10, a = e || r, l = n || r, c = new z();
  return c.moveTo(0, 0).lineTo(a, l).moveTo(0, l).lineTo(a, 0), Object.assign(Object.assign({}, o), { tagName: "path", fill: "none", d: Jn(c.serialize(), i || -a / 2) });
}, Bv = (s) => {
  var { width: t, height: e, offset: n, open: i, flip: o } = s, r = G(s, ["width", "height", "offset", "open", "flip"]);
  let a = e || 6;
  const l = t || 10, c = i === !0, h = o === !0, u = Object.assign(Object.assign({}, r), { tagName: "path" });
  h && (a = -a);
  const d = new z();
  return d.moveTo(0, a).lineTo(l, 0), c ? u.fill = "none" : (d.lineTo(l, a), d.close()), u.d = Jn(d.serialize(), {
    x: n || -l / 2,
    y: a / 2
  }), u;
}, cu = (s) => {
  var { r: t } = s, e = G(s, ["r"]);
  const n = t || 5;
  return Object.assign(Object.assign({ cx: n }, e), { tagName: "circle", r: n });
}, Iv = (s) => {
  var { r: t } = s, e = G(s, ["r"]);
  const n = t || 5, i = new z();
  return i.moveTo(n, 0).lineTo(n, n * 2), i.moveTo(0, n).lineTo(n * 2, n), {
    children: [
      Object.assign(Object.assign({}, cu({ r: n })), { fill: "none" }),
      Object.assign(Object.assign({}, e), { tagName: "path", d: Jn(i.serialize(), -n) })
    ]
  };
}, Pv = (s) => {
  var { rx: t, ry: e } = s, n = G(s, ["rx", "ry"]);
  const i = t || 5, o = e || 5;
  return Object.assign(Object.assign({ cx: i }, n), { tagName: "ellipse", rx: i, ry: o });
}, Tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  async: Bv,
  block: vv,
  circle: cu,
  circlePlus: Iv,
  classic: xv,
  cross: Mv,
  diamond: Ev,
  ellipse: Pv,
  path: Sv
}, Symbol.toStringTag, { value: "Module" })), kv = Tv, fi = yt.create({
  type: "marker"
});
fi.register(kv, !0);
function Nr(s) {
  return typeof s == "string" || fe(s);
}
const Ov = {
  qualify: Nr,
  set(s, { view: t, attrs: e }) {
    return Lr("marker-start", s, t, e);
  }
}, Rv = {
  qualify: Nr,
  set(s, { view: t, attrs: e }) {
    return Lr("marker-end", s, t, e, {
      transform: "rotate(180)"
    });
  }
}, Dv = {
  qualify: Nr,
  set(s, { view: t, attrs: e }) {
    return Lr("marker-mid", s, t, e);
  }
};
function Lr(s, t, e, n, i = {}) {
  const o = typeof t == "string" ? { name: t } : t, { name: r, args: a } = o, l = G(o, ["name", "args"]);
  let c = l;
  if (r && typeof r == "string") {
    const u = fi.get(r);
    if (u)
      c = u(Object.assign(Object.assign({}, l), a));
    else
      return fi.onNotFound(r);
  }
  const h = Object.assign(Object.assign(Object.assign({}, Qv(n, s)), i), c);
  return {
    [s]: `url(#${e.graph.defineMarker(h)})`
  };
}
function Qv(s, t) {
  const e = {}, n = s.stroke;
  if (typeof n == "string" && (e.stroke = n, e.fill = n), t !== "marker-mid") {
    const i = parseFloat(s.strokeWidth || s["stroke-width"]);
    if (Number.isFinite(i) && i > 1) {
      const o = Math.ceil(i / 2);
      e.refX = t === "marker-start" ? o : -o;
    }
  }
  return e;
}
const Ni = (s, { view: t }) => t.cell.isEdge(), Nv = {
  qualify: Ni,
  set(s, t) {
    var e, n, i, o;
    const r = t.view, a = s.reverse || !1, l = s.stubs || 0;
    let c;
    if (Number.isFinite(l) && l !== 0)
      if (a) {
        let h, u;
        const d = r.getConnectionLength() || 0;
        l < 0 ? (h = (d + l) / 2, u = -l) : (h = l, u = d - l * 2);
        const g = r.getConnection();
        c = (o = (i = (n = (e = g == null ? void 0 : g.divideAtLength(h)) === null || e === void 0 ? void 0 : e[1]) === null || n === void 0 ? void 0 : n.divideAtLength(u)) === null || i === void 0 ? void 0 : i[0]) === null || o === void 0 ? void 0 : o.serialize();
      } else {
        let h;
        l < 0 ? h = ((r.getConnectionLength() || 0) + l) / 2 : h = l;
        const u = r.getConnection();
        if (u) {
          const d = u.divideAtLength(h), g = u.divideAtLength(-h);
          d && g && (c = `${d[0].serialize()} ${g[1].serialize()}`);
        }
      }
    return { d: c || r.getConnectionPathData() };
  }
}, hu = {
  qualify: Ni,
  set: Vs("getTangentAtLength", { rotate: !0 })
}, Lv = {
  qualify: Ni,
  set: Vs("getTangentAtLength", { rotate: !1 })
}, uu = {
  qualify: Ni,
  set: Vs("getTangentAtRatio", { rotate: !0 })
}, Fv = {
  qualify: Ni,
  set: Vs("getTangentAtRatio", { rotate: !1 })
}, zv = hu, Uv = uu;
function Vs(s, t) {
  const e = { x: 1, y: 0 };
  return (n, i) => {
    let o, r;
    const a = i.view, l = a[s](Number(n));
    return l ? (r = t.rotate ? l.vector().vectorAngle(e) : 0, o = l.start) : (o = a.path.start, r = 0), r === 0 || Number.isNaN(r) ? { transform: `translate(${o.x},${o.y})` } : {
      transform: `translate(${o.x},${o.y}) rotate(${r})`
    };
  };
}
const Kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  annotations: uv,
  atConnectionLength: zv,
  atConnectionLengthIgnoreGradient: Lv,
  atConnectionLengthKeepGradient: hu,
  atConnectionRatio: Uv,
  atConnectionRatioIgnoreGradient: Fv,
  atConnectionRatioKeepGradient: uu,
  connection: Nv,
  displayEmpty: gv,
  eol: dv,
  fill: ov,
  filter: Av,
  html: Cv,
  lineHeight: lv,
  port: wv,
  ref: Jw,
  refCx: Ww,
  refCy: qw,
  refD: Zw,
  refDKeepOffset: Xw,
  refDResetOffset: eu,
  refDx: jw,
  refDy: Gw,
  refHeight: Zh,
  refHeight2: sv,
  refPoints: tv,
  refPointsKeepOffset: $w,
  refPointsResetOffset: nu,
  refR: _w,
  refRCircumscribed: Hw,
  refRInscribed: tu,
  refRx: Vw,
  refRy: Yw,
  refWidth: _h,
  refWidth2: iv,
  refX: Xh,
  refX2: ev,
  refY: $h,
  refY2: nv,
  resetOffset: bv,
  sourceMarker: Ov,
  stroke: rv,
  style: yv,
  targetMarker: Rv,
  text: ru,
  textPath: hv,
  textVerticalAnchor: cv,
  textWrap: av,
  title: fv,
  vertexMarker: Dv,
  xAlign: pv,
  yAlign: mv
}, Symbol.toStringTag, { value: "Module" })), Jv = {
  xlinkHref: "xlink:href",
  xlinkShow: "xlink:show",
  xlinkRole: "xlink:role",
  xlinkType: "xlink:type",
  xlinkArcrole: "xlink:arcrole",
  xlinkTitle: "xlink:title",
  xlinkActuate: "xlink:actuate",
  xmlSpace: "xml:space",
  xmlBase: "xml:base",
  xmlLang: "xml:lang",
  preserveAspectRatio: "preserveAspectRatio",
  requiredExtension: "requiredExtension",
  requiredFeatures: "requiredFeatures",
  systemLanguage: "systemLanguage",
  externalResourcesRequired: "externalResourceRequired"
};
function jv(s, t, e) {
  return !!(s != null && (typeof s == "string" || typeof s.qualify != "function" || N(s.qualify, this, t, e)));
}
const du = Object.assign(Object.assign({}, Jv), Kv), pi = yt.create({
  type: "attribute definition"
});
pi.register(du, !0);
const gu = (s) => {
  const t = document.createElement("canvas"), e = s.width, n = s.height;
  t.width = e * 2, t.height = n;
  const i = t.getContext("2d");
  return i.drawImage(s, 0, 0, e, n), i.translate(2 * e, 0), i.scale(-1, 1), i.drawImage(s, 0, 0, e, n), t;
}, fu = (s) => {
  const t = document.createElement("canvas"), e = s.width, n = s.height;
  t.width = e, t.height = n * 2;
  const i = t.getContext("2d");
  return i.drawImage(s, 0, 0, e, n), i.translate(0, 2 * n), i.scale(1, -1), i.drawImage(s, 0, 0, e, n), t;
}, pu = (s) => {
  const t = document.createElement("canvas"), e = s.width, n = s.height;
  t.width = 2 * e, t.height = 2 * n;
  const i = t.getContext("2d");
  return i.drawImage(s, 0, 0, e, n), i.setTransform(-1, 0, 0, -1, t.width, t.height), i.drawImage(s, 0, 0, e, n), i.setTransform(-1, 0, 0, 1, t.width, 0), i.drawImage(s, 0, 0, e, n), i.setTransform(1, 0, 0, -1, 0, t.height), i.drawImage(s, 0, 0, e, n), t;
}, Gv = (s, t) => {
  const e = s.width, n = s.height, i = document.createElement("canvas");
  i.width = e * 3, i.height = n * 3;
  const o = i.getContext("2d"), r = t.angle != null ? -t.angle : -20, a = Qt(r), l = i.width / 4, c = i.height / 4;
  for (let h = 0; h < 4; h += 1)
    for (let u = 0; u < 4; u += 1)
      (h + u) % 2 > 0 && (o.setTransform(1, 0, 0, 1, (2 * h - 1) * l, (2 * u - 1) * c), o.rotate(a), o.drawImage(s, -e / 2, -n / 2, e, n));
  return i;
}, Vv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  flipX: gu,
  flipXY: pu,
  flipY: fu,
  watermark: Gv
}, Symbol.toStringTag, { value: "Module" })), Ys = Object.assign({}, Vv);
Ys["flip-x"] = gu;
Ys["flip-y"] = fu;
Ys["flip-xy"] = pu;
const Hs = yt.create({
  type: "background pattern"
});
Hs.register(Ys, !0);
function Ws(s, t, e) {
  let n;
  if (typeof e == "object") {
    if (Number.isFinite(e.y)) {
      const o = new R(t, s), { start: r, end: a } = o.parallel(e.y);
      t = r, s = a;
    }
    n = e.x;
  } else
    n = e;
  if (n == null || !Number.isFinite(n))
    return s;
  const i = s.distance(t);
  return n === 0 && i > 0 ? s : s.move(t, -Math.min(n, i - 1));
}
function As(s) {
  const t = s.getAttribute("stroke-width");
  return t === null ? 0 : parseFloat(t) || 0;
}
function Yv(s) {
  if (s == null)
    return null;
  let t = s;
  do {
    let e = t.tagName;
    if (typeof e != "string")
      return null;
    if (e = e.toUpperCase(), e === "G")
      t = t.firstElementChild;
    else if (e === "TITLE")
      t = t.nextElementSibling;
    else
      break;
  } while (t);
  return t;
}
const mu = (s, t, e, n) => {
  const i = t.getBBoxOfElement(e);
  n.stroked && i.inflate(As(e) / 2);
  const o = s.intersect(i), r = o && o.length ? s.start.closest(o) : s.end;
  return Ws(r, s.start, n.offset);
}, Hv = function(s, t, e, n, i) {
  const o = t.cell, r = o.isNode() ? o.getAngle() : 0;
  if (r === 0)
    return N(mu, this, s, t, e, n, i);
  const a = t.getUnrotatedBBoxOfElement(e);
  n.stroked && a.inflate(As(e) / 2);
  const l = a.getCenter(), c = s.clone().rotate(r, l), h = c.setLength(1e6).intersect(a), u = h && h.length ? c.start.closest(h).rotate(-r, l) : s.end;
  return Ws(u, s.start, n.offset);
}, Wv = (s, t, e, n) => {
  let i, o;
  const r = s.end, a = n.selector;
  if (typeof a == "string" ? i = t.findOne(a) : Array.isArray(a) ? i = Or(e, a) : i = Yv(e), !je(i)) {
    if (i === e || !je(e))
      return r;
    i = e;
  }
  const l = t.getShapeOfElement(i), c = t.getMatrixOfElement(i), h = t.getRootTranslatedMatrix(), u = t.getRootRotatedMatrix(), d = h.multiply(u).multiply(c), g = d.inverse(), f = $A(s, g), p = f.start.clone(), m = t.getDataOfElement(i);
  if (n.insideout === !1) {
    m.shapeBBox == null && (m.shapeBBox = l.bbox());
    const w = m.shapeBBox;
    if (w != null && w.containsPoint(p))
      return r;
  }
  n.extrapolate === !0 && f.setLength(1e6);
  let b;
  if (z.isPath(l)) {
    const w = n.precision || 2;
    m.segmentSubdivisions == null && (m.segmentSubdivisions = l.getSegmentSubdivisions({
      precision: w
    })), b = {
      precision: w,
      segmentSubdivisions: m.segmentSubdivisions
    }, o = f.intersect(l, b);
  } else
    o = f.intersect(l);
  o ? Array.isArray(o) && (o = p.closest(o)) : n.sticky === !0 && (I.isRectangle(l) ? o = l.getNearestPointToPoint(p) : Vt.isEllipse(l) ? o = l.intersectsWithLineFromCenterToPoint(p) : o = l.closestPoint(p, b));
  const y = o ? Me(o, d) : r;
  let A = n.offset || 0;
  return n.stroked !== !1 && (typeof A == "object" ? (A = Object.assign({}, A), A.x == null && (A.x = 0), A.x += As(i) / 2) : A += As(i) / 2), Ws(y, s.start, A);
};
function qv(s, t, e = 0) {
  const { start: n, end: i } = s;
  let o, r, a, l;
  switch (t) {
    case "left":
      l = "x", o = i, r = n, a = -1;
      break;
    case "right":
      l = "x", o = n, r = i, a = 1;
      break;
    case "top":
      l = "y", o = i, r = n, a = -1;
      break;
    case "bottom":
      l = "y", o = n, r = i, a = 1;
      break;
    default:
      return;
  }
  n[l] < i[l] ? o[l] = r[l] : r[l] = o[l], Number.isFinite(e) && (o[l] += a * e, r[l] += a * e);
}
const Xv = (s, t, e, n) => {
  const { alignOffset: i, align: o } = n;
  return o && qv(s, o, i), Ws(s.end, s.start, n.offset);
}, $v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  anchor: Xv,
  bbox: mu,
  boundary: Wv,
  rect: Hv
}, Symbol.toStringTag, { value: "Module" })), _v = $v, mi = yt.create({
  type: "connection point"
});
mi.register(_v, !0);
const al = 1, _i = 1 / 3, Zi = 2 / 3;
let bi = [], ws = [];
function Zv(s) {
  let t = s.graph._jumpOverUpdateList;
  if (t == null && (t = s.graph._jumpOverUpdateList = [], s.graph.on("cell:mouseup", () => {
    const e = s.graph._jumpOverUpdateList;
    setTimeout(() => {
      for (let n = 0; n < e.length; n += 1)
        e[n].update();
    });
  }), s.graph.on("model:reseted", () => {
    t = s.graph._jumpOverUpdateList = [];
  })), t.indexOf(s) < 0) {
    t.push(s);
    const e = () => t.splice(t.indexOf(s), 1);
    s.cell.once("change:connector", e), s.cell.once("removed", e);
  }
}
function co(s, t, e = []) {
  const n = [s, ...e, t], i = [];
  return n.forEach((o, r) => {
    const a = n[r + 1];
    a != null && i.push(new R(o, a));
  }), i;
}
function tx(s, t) {
  const e = [];
  return t.forEach((n) => {
    const i = s.intersectsWithLine(n);
    if (i) {
      const { x: o, y: r } = i, { start: a, end: l } = n, c = Math.round(a.x) === Math.round(o) && Math.round(a.y) === Math.round(r), h = Math.round(l.x) === Math.round(o) && Math.round(l.y) === Math.round(r);
      if (c || h)
        return;
      e.push(i);
    }
  }), e;
}
function ll(s, t) {
  return new R(s, t).squaredLength();
}
function ex(s, t, e) {
  return t.reduce((n, i, o) => {
    if (ws.includes(i))
      return n;
    const r = n.pop() || s, a = C.create(i).move(r.start, -e);
    let l = C.create(i).move(r.start, +e);
    const c = t[o + 1];
    if (c != null) {
      const d = l.distance(c);
      d <= e && (l = c.move(r.start, d), ws.push(c));
    } else if (a.distance(r.end) < e * 2 + al)
      return n.push(r), n;
    if (l.distance(r.start) < e * 2 + al)
      return n.push(r), n;
    const u = new R(a, l);
    return bi.push(u), n.push(new R(r.start, a), u, new R(l, r.end)), n;
  }, []);
}
function cl(s, t, e, n) {
  const i = new z();
  let o;
  return o = z.createSegment("M", s[0].start), i.appendSegment(o), s.forEach((r, a) => {
    if (bi.includes(r)) {
      let l, c, h, u;
      if (e === "arc") {
        l = -90, c = r.start.diff(r.end), (c.x < 0 || c.x === 0 && c.y < 0) && (l += 180);
        const g = r.getCenter(), f = new R(g, r.end).rotate(l, g);
        let p;
        p = new R(r.start, g), h = p.pointAt(2 / 3).rotate(l, r.start), u = f.pointAt(1 / 3).rotate(-l, f.end), o = z.createSegment("C", h, u, f.end), i.appendSegment(o), p = new R(g, r.end), h = f.pointAt(1 / 3).rotate(l, f.end), u = p.pointAt(1 / 3).rotate(-l, r.end), o = z.createSegment("C", h, u, r.end), i.appendSegment(o);
      } else if (e === "gap")
        o = z.createSegment("M", r.end), i.appendSegment(o);
      else if (e === "cubic") {
        l = r.start.theta(r.end);
        const d = t * 0.6;
        let g = t * 1.35;
        c = r.start.diff(r.end), (c.x < 0 || c.x === 0 && c.y < 0) && (g *= -1), h = new C(r.start.x + d, r.start.y + g).rotate(l, r.start), u = new C(r.end.x - d, r.end.y + g).rotate(l, r.end), o = z.createSegment("C", h, u, r.end), i.appendSegment(o);
      }
    } else {
      const l = s[a + 1];
      n === 0 || !l || bi.includes(l) ? (o = z.createSegment("L", r.end), i.appendSegment(o)) : nx(n, i, r.end, r.start, l.end);
    }
  }), i;
}
function nx(s, t, e, n, i) {
  const o = e.distance(n) / 2, r = e.distance(i) / 2, a = -Math.min(s, o), l = -Math.min(s, r), c = e.clone().move(n, a).round(), h = e.clone().move(i, l).round(), u = new C(_i * c.x + Zi * e.x, Zi * e.y + _i * c.y), d = new C(_i * h.x + Zi * e.x, Zi * e.y + _i * h.y);
  let g;
  g = z.createSegment("L", c), t.appendSegment(g), g = z.createSegment("C", u, d, h), t.appendSegment(g);
}
const ix = function(s, t, e, n = {}) {
  bi = [], ws = [], Zv(this);
  const i = n.size || 5, o = n.type || "arc", r = n.radius || 0, a = n.ignoreConnectors || ["smooth"], l = this.graph, h = l.model.getEdges();
  if (h.length === 1)
    return cl(co(s, t, e), i, o, r);
  const u = this.cell, d = h.indexOf(u), g = l.options.connecting.connector || {}, f = h.filter((w, x) => {
    const M = w.getConnector() || g;
    return a.includes(M.name) ? !1 : x > d ? M.name !== "jumpover" : !0;
  }), p = f.map((w) => l.findViewByCell(w)), m = co(s, t, e), b = p.map((w) => w == null ? [] : w === this ? m : co(w.sourcePoint, w.targetPoint, w.routePoints)), y = [];
  m.forEach((w) => {
    const x = f.reduce((M, v, S) => {
      if (v !== u) {
        const B = tx(w, b[S]);
        M.push(...B);
      }
      return M;
    }, []).sort((M, v) => ll(w.start, M) - ll(w.start, v));
    x.length > 0 ? y.push(...ex(w, x, i)) : y.push(w);
  });
  const A = cl(y, i, o, r);
  return bi = [], ws = [], n.raw ? A : A.serialize();
}, sx = (s, t, e, n = {}) => {
  const i = e.length === 3 ? 0 : 1, o = C.create(e[0 + i]), r = C.create(e[2 + i]), a = C.create(e[1 + i]);
  if (!C.equals(s, t)) {
    const c = new C((s.x + t.x) / 2, (s.y + t.y) / 2), h = c.angleBetween(C.create(s).rotate(90, c), a);
    h > 1 && (o.rotate(180 - h, c), r.rotate(180 - h, c), a.rotate(180 - h, c));
  }
  const l = `
     M ${s.x} ${s.y}
     Q ${o.x} ${o.y} ${a.x} ${a.y}
     Q ${r.x} ${r.y} ${t.x} ${t.y}
  `;
  return n.raw ? z.parse(l) : l;
}, ox = (s, t, e, n = {}) => {
  const i = [s, ...e, t], o = new Mt(i), r = new z(o);
  return n.raw ? r : r.serialize();
}, rx = (s, t, e, n = {}) => {
  const i = new z();
  i.appendSegment(z.createSegment("M", s));
  const o = 1 / 3, r = 2 / 3, a = n.radius || 10;
  let l, c;
  for (let h = 0, u = e.length; h < u; h += 1) {
    const d = C.create(e[h]), g = e[h - 1] || s, f = e[h + 1] || t;
    l = c || d.distance(g) / 2, c = d.distance(f) / 2;
    const p = -Math.min(a, l), m = -Math.min(a, c), b = d.clone().move(g, p).round(), y = d.clone().move(f, m).round(), A = new C(o * b.x + r * d.x, r * d.y + o * b.y), w = new C(o * y.x + r * d.x, r * d.y + o * y.y);
    i.appendSegment(z.createSegment("L", b)), i.appendSegment(z.createSegment("C", A, w, y));
  }
  return i.appendSegment(z.createSegment("L", t)), n.raw ? i : i.serialize();
}, ax = (s, t, e, n = {}) => {
  let i, o = n.direction;
  if (e && e.length !== 0) {
    const r = [s, ...e, t], a = Ct.throughPoints(r);
    i = new z(a);
  } else if (i = new z(), i.appendSegment(z.createSegment("M", s)), o || (o = Math.abs(s.x - t.x) >= Math.abs(s.y - t.y) ? "H" : "V"), o === "H") {
    const r = (s.x + t.x) / 2;
    i.appendSegment(z.createSegment("C", r, s.y, r, t.y, t.x, t.y));
  } else {
    const r = (s.y + t.y) / 2;
    i.appendSegment(z.createSegment("C", s.x, r, t.x, r, t.x, t.y));
  }
  return n.raw ? i : i.serialize();
}, lx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  jumpover: ix,
  loop: sx,
  normal: ox,
  rounded: rx,
  smooth: ax
}, Symbol.toStringTag, { value: "Module" })), bu = lx, yi = yt.create({
  type: "connector"
});
yi.register(bu, !0);
function qs(s) {
  return function(t, e, n, i) {
    if (n instanceof Element) {
      const o = this.graph.findViewByElem(n);
      let r;
      if (o)
        if (o.isEdgeElement(n)) {
          const a = i.fixedAt != null ? i.fixedAt : "50%";
          r = yu(o, a);
        } else
          r = o.getBBoxOfElement(n).getCenter();
      else
        r = new C();
      return s.call(this, t, e, r, i);
    }
    return s.apply(this, arguments);
  };
}
function yu(s, t) {
  const e = Te(t), n = typeof t == "string" ? parseFloat(t) : t;
  return e ? s.getPointAtRatio(n / 100) : s.getPointAtLength(n);
}
const Cu = (s, t, e, n) => {
  const i = s.getClosestPoint(e);
  return i ?? new C();
}, cx = qs(Cu), hx = (s, t, e, n) => {
  const i = n.length != null ? n.length : 20;
  return s.getPointAtLength(i);
}, ux = function(s, t, e, n) {
  const o = s.getConnection(), r = s.getConnectionSubdivisions(), a = new R(e.clone().translate(0, 1e6), e.clone().translate(0, -1e6)), l = new R(e.clone().translate(1e6, 0), e.clone().translate(-1e6, 0)), c = a.intersect(o, {
    segmentSubdivisions: r
  }), h = l.intersect(o, {
    segmentSubdivisions: r
  }), u = [];
  return c && u.push(...c), h && u.push(...h), u.length > 0 ? e.closest(u) : n.fallbackAt != null ? yu(s, n.fallbackAt) : N(Cu, this, s, t, e, n);
}, dx = qs(ux), gx = (s, t, e, n) => {
  let i = n.ratio != null ? n.ratio : 0.5;
  return i > 1 && (i /= 100), s.getPointAtRatio(i);
}, fx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: cx,
  length: hx,
  orth: dx,
  ratio: gx
}, Symbol.toStringTag, { value: "Module" })), px = fx, Ci = yt.create({
  type: "edge endpoint"
});
Ci.register(px, !0);
function Fr(s, t) {
  return s ?? t;
}
function Pt(s, t) {
  return s != null && Number.isFinite(s) ? s : t;
}
function mx(s = {}) {
  const t = Fr(s.color, "blue"), e = Pt(s.width, 1), n = Pt(s.margin, 2), i = Pt(s.opacity, 1), o = n, r = n + e;
  return `
    <filter>
      <feFlood flood-color="${t}" flood-opacity="${i}" result="colored"/>
      <feMorphology in="SourceAlpha" result="morphedOuter" operator="dilate" radius="${r}" />
      <feMorphology in="SourceAlpha" result="morphedInner" operator="dilate" radius="${o}" />
      <feComposite result="morphedOuterColored" in="colored" in2="morphedOuter" operator="in"/>
      <feComposite operator="xor" in="morphedOuterColored" in2="morphedInner" result="outline"/>
      <feMerge>
        <feMergeNode in="outline"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  `.trim();
}
function bx(s = {}) {
  const t = Fr(s.color, "red"), e = Pt(s.blur, 0), n = Pt(s.width, 1), i = Pt(s.opacity, 1);
  return `
      <filter>
        <feFlood flood-color="${t}" flood-opacity="${i}" result="colored"/>
        <feMorphology result="morphed" in="SourceGraphic" operator="dilate" radius="${n}"/>
        <feComposite result="composed" in="colored" in2="morphed" operator="in"/>
        <feGaussianBlur result="blured" in="composed" stdDeviation="${e}"/>
        <feBlend in="SourceGraphic" in2="blured" mode="normal"/>
      </filter>
    `.trim();
}
function yx(s = {}) {
  const t = Pt(s.x, 2);
  return `
    <filter>
      <feGaussianBlur stdDeviation="${s.y != null && Number.isFinite(s.y) ? [t, s.y] : t}"/>
    </filter>
  `.trim();
}
function Cx(s = {}) {
  const t = Pt(s.dx, 0), e = Pt(s.dy, 0), n = Fr(s.color, "black"), i = Pt(s.blur, 4), o = Pt(s.opacity, 1);
  return "SVGFEDropShadowElement" in window ? `<filter>
         <feDropShadow stdDeviation="${i}" dx="${t}" dy="${e}" flood-color="${n}" flood-opacity="${o}" />
       </filter>`.trim() : `<filter>
         <feGaussianBlur in="SourceAlpha" stdDeviation="${i}" />
         <feOffset dx="${t}" dy="${e}" result="offsetblur" />
         <feFlood flood-color="${n}" />
         <feComposite in2="offsetblur" operator="in" />
         <feComponentTransfer>
           <feFuncA type="linear" slope="${o}" />
         </feComponentTransfer>
         <feMerge>
           <feMergeNode/>
           <feMergeNode in="SourceGraphic"/>
         </feMerge>
       </filter>`.trim();
}
function Ax(s = {}) {
  const t = Pt(s.amount, 1), e = 0.2126 + 0.7874 * (1 - t), n = 0.7152 - 0.7152 * (1 - t), i = 0.0722 - 0.0722 * (1 - t), o = 0.2126 - 0.2126 * (1 - t), r = 0.7152 + 0.2848 * (1 - t), a = 0.0722 - 0.0722 * (1 - t), l = 0.2126 - 0.2126 * (1 - t), c = 0.0722 + 0.9278 * (1 - t);
  return `
    <filter>
      <feColorMatrix type="matrix" values="${e} ${n} ${i} 0 0 ${o} ${r} ${a} 0 0 ${l} ${n} ${c} 0 0 0 0 0 1 0"/>
    </filter>
  `.trim();
}
function wx(s = {}) {
  const t = Pt(s.amount, 1), e = 0.393 + 0.607 * (1 - t), n = 0.769 - 0.769 * (1 - t), i = 0.189 - 0.189 * (1 - t), o = 0.349 - 0.349 * (1 - t), r = 0.686 + 0.314 * (1 - t), a = 0.168 - 0.168 * (1 - t), l = 0.272 - 0.272 * (1 - t), c = 0.534 - 0.534 * (1 - t), h = 0.131 + 0.869 * (1 - t);
  return `
      <filter>
        <feColorMatrix type="matrix" values="${e} ${n} ${i} 0 0 ${o} ${r} ${a} 0 0 ${l} ${c} ${h} 0 0 0 0 0 1 0"/>
      </filter>
    `.trim();
}
function vx(s = {}) {
  return `
      <filter>
        <feColorMatrix type="saturate" values="${1 - Pt(s.amount, 1)}"/>
      </filter>
    `.trim();
}
function xx(s = {}) {
  return `
      <filter>
        <feColorMatrix type="hueRotate" values="${Pt(s.angle, 0)}"/>
      </filter>
    `.trim();
}
function Ex(s = {}) {
  const t = Pt(s.amount, 1), e = 1 - t;
  return `
      <filter>
        <feComponentTransfer>
          <feFuncR type="table" tableValues="${t} ${e}"/>
          <feFuncG type="table" tableValues="${t} ${e}"/>
          <feFuncB type="table" tableValues="${t} ${e}"/>
        </feComponentTransfer>
      </filter>
    `.trim();
}
function Sx(s = {}) {
  const t = Pt(s.amount, 1);
  return `
    <filter>
      <feComponentTransfer>
        <feFuncR type="linear" slope="${t}"/>
        <feFuncG type="linear" slope="${t}"/>
        <feFuncB type="linear" slope="${t}"/>
      </feComponentTransfer>
    </filter>
  `.trim();
}
function Mx(s = {}) {
  const t = Pt(s.amount, 1), e = 0.5 - t / 2;
  return `
    <filter>
     <feComponentTransfer>
        <feFuncR type="linear" slope="${t}" intercept="${e}"/>
        <feFuncG type="linear" slope="${t}" intercept="${e}"/>
        <feFuncB type="linear" slope="${t}" intercept="${e}"/>
      </feComponentTransfer>
    </filter>
  `.trim();
}
const Bx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blur: yx,
  brightness: Sx,
  contrast: Mx,
  dropShadow: Cx,
  grayScale: Ax,
  highlight: bx,
  hueRotate: xx,
  invert: Ex,
  outline: mx,
  saturate: vx,
  sepia: wx
}, Symbol.toStringTag, { value: "Module" })), Ix = Bx, Ai = yt.create({
  type: "filter"
});
Ai.register(Ix, !0);
const Px = {
  color: "#aaaaaa",
  thickness: 1,
  markup: "rect",
  update(s, t) {
    const e = t.thickness * t.sx, n = t.thickness * t.sy;
    X(s, {
      width: e,
      height: n,
      rx: e,
      ry: n,
      fill: t.color
    });
  }
}, Tx = {
  color: "#aaaaaa",
  thickness: 1,
  markup: "rect",
  update(s, t) {
    const e = t.sx <= 1 ? t.thickness * t.sx : t.thickness;
    X(s, {
      width: e,
      height: e,
      rx: e,
      ry: e,
      fill: t.color
    });
  }
}, kx = {
  color: "rgba(224,224,224,1)",
  thickness: 1,
  markup: "path",
  update(s, t) {
    let e;
    const n = t.width, i = t.height, o = t.thickness;
    n - o >= 0 && i - o >= 0 ? e = ["M", n, 0, "H0 M0 0 V0", i].join(" ") : e = "M 0 0 0 0", X(s, {
      d: e,
      stroke: t.color,
      "stroke-width": t.thickness
    });
  }
}, Ox = [
  {
    color: "rgba(224,224,224,1)",
    thickness: 1,
    markup: "path",
    update(s, t) {
      let e;
      const n = t.width, i = t.height, o = t.thickness;
      n - o >= 0 && i - o >= 0 ? e = ["M", n, 0, "H0 M0 0 V0", i].join(" ") : e = "M 0 0 0 0", X(s, {
        d: e,
        stroke: t.color,
        "stroke-width": t.thickness
      });
    }
  },
  {
    color: "rgba(224,224,224,0.2)",
    thickness: 3,
    factor: 4,
    markup: "path",
    update(s, t) {
      let e;
      const n = t.factor || 1, i = t.width * n, o = t.height * n, r = t.thickness;
      i - r >= 0 && o - r >= 0 ? e = ["M", i, 0, "H0 M0 0 V0", o].join(" ") : e = "M 0 0 0 0", t.width = i, t.height = o, X(s, {
        d: e,
        stroke: t.color,
        "stroke-width": t.thickness
      });
    }
  }
], Rx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dot: Px,
  doubleMesh: Ox,
  fixedDot: Tx,
  mesh: kx
}, Symbol.toStringTag, { value: "Module" }));
class Dx {
  constructor() {
    this.patterns = {}, this.root = F.create(cs(), {
      width: "100%",
      height: "100%"
    }, [pe("defs")]).node;
  }
  add(t, e) {
    const n = this.root.childNodes[0];
    n && n.appendChild(e), this.patterns[t] = e, F.create("rect", {
      width: "100%",
      height: "100%",
      fill: `url(#${t})`
    }).appendTo(this.root);
  }
  get(t) {
    return this.patterns[t];
  }
  has(t) {
    return this.patterns[t] != null;
  }
}
const Au = Rx, wi = yt.create({
  type: "grid"
});
wi.register(Au, !0);
const nt = {
  prefixCls: "x6",
  autoInsertCSS: !0,
  useCSSSelector: !0,
  prefix(s) {
    return `${nt.prefixCls}-${s}`;
  }
}, hl = nt.prefix("highlighted"), Qx = {
  highlight(s, t, e) {
    const n = e && e.className || hl;
    k(t, n);
  },
  unhighlight(s, t, e) {
    const n = e && e.className || hl;
    ut(t, n);
  }
}, ul = nt.prefix("highlight-opacity"), Nx = {
  highlight(s, t) {
    k(t, ul);
  },
  unhighlight(s, t) {
    ut(t, ul);
  }
}, Lx = {
  padding: 3,
  rx: 0,
  ry: 0,
  attrs: {
    "stroke-width": 3,
    stroke: "#FEB663"
  }
}, Fx = {
  highlight(s, t, e) {
    const n = dl(t, e);
    if (Ux(n))
      return;
    e = rh({}, e, Lx);
    const i = F.create(t);
    let o, r;
    try {
      o = i.toPathData();
    } catch {
      r = rl(i.node), o = Rh(Object.assign(Object.assign({}, e), r));
    }
    const a = pe("path");
    if (X(a, Object.assign({ d: o, "pointer-events": "none", "vector-effect": "non-scaling-stroke", fill: "none" }, e.attrs ? ui(e.attrs) : null)), s.isEdgeElement(t))
      X(a, "d", s.getConnectionPathData());
    else {
      let h = i.getTransformToElement(s.container);
      const u = e.padding;
      if (u) {
        r == null && (r = rl(i.node));
        const d = r.x + r.width / 2, g = r.y + r.height / 2;
        r = Zt(r, h);
        const f = Math.max(r.width, 1), p = Math.max(r.height, 1), m = (f + u) / f, b = (p + u) / p, y = kt({
          a: m,
          b: 0,
          c: 0,
          d: b,
          e: d - m * d,
          f: g - b * g
        });
        h = h.multiply(y);
      }
      On(a, h);
    }
    k(a, nt.prefix("highlight-stroke"));
    const l = s.cell, c = () => gl(n);
    l.on("removed", c), l.model && l.model.on("reseted", c), s.container.appendChild(a), zx(n, a);
  },
  unhighlight(s, t, e) {
    gl(dl(t, e));
  }
};
function dl(s, t) {
  return xr(s), s.id + JSON.stringify(t);
}
const vs = {};
function zx(s, t) {
  vs[s] = t;
}
function Ux(s) {
  return vs[s] != null;
}
function gl(s) {
  const t = vs[s];
  t && (ee(t), delete vs[s]);
}
const Kx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  className: Qx,
  opacity: Nx,
  stroke: Fx
}, Symbol.toStringTag, { value: "Module" }));
function Jx(s, t) {
  if (typeof t.highlight != "function")
    throw new Error(`Highlighter '${s}' is missing required \`highlight()\` method`);
  if (typeof t.unhighlight != "function")
    throw new Error(`Highlighter '${s}' is missing required \`unhighlight()\` method`);
}
const jx = Kx, vi = yt.create({
  type: "highlighter"
});
vi.register(jx, !0);
const Gx = De("center"), Vx = De("topCenter"), Yx = De("bottomCenter"), Hx = De("leftMiddle"), Wx = De("rightMiddle"), qx = De("topLeft"), Xx = De("topRight"), $x = De("bottomLeft"), _x = De("bottomRight");
function De(s) {
  return (t, e, n, i = {}) => {
    let o;
    t.cell.visible ? o = i.rotate ? t.getUnrotatedBBoxOfElement(e) : t.getBBoxOfElement(e) : o = t.cell.getBBox();
    const r = o[s];
    r.x += Wt(i.dx, o.width), r.y += Wt(i.dy, o.height);
    const a = t.cell;
    return i.rotate ? r.rotate(-a.getAngle(), a.getBBox().getCenter()) : r;
  };
}
const Zx = (s, t, e, n) => {
  const i = Kt(s.cell.getAngle()), o = s.cell.visible ? s.getBBoxOfElement(t) : s.cell.getBBox(), r = o.getCenter(), a = o.getTopLeft(), l = o.getBottomRight();
  let c = n.padding;
  if (Number.isFinite(c) || (c = 0), a.y + c <= e.y && e.y <= l.y - c) {
    const h = e.y - r.y;
    r.x += i === 0 || i === 180 ? 0 : h * 1 / Math.tan(Qt(i)), r.y += h;
  } else if (a.x + c <= e.x && e.x <= l.x - c) {
    const h = e.x - r.x;
    r.y += i === 90 || i === 270 ? 0 : h * Math.tan(Qt(i)), r.x += h;
  }
  return r;
}, t1 = qs(Zx), e1 = function(s, t, e, n, i) {
  const o = s.cell.getConnectionPoint(this.cell, i);
  return (n.dx || n.dy) && o.translate(n.dx || 0, n.dy || 0), o;
}, n1 = (s, t, e, n) => {
  let i, o = 0, r;
  const a = s.cell;
  n.rotate ? (i = s.getUnrotatedBBoxOfElement(t), r = a.getBBox().getCenter(), o = a.getAngle()) : a.visible ? i = s.getBBoxOfElement(t) : i = s.cell.getBBox();
  const l = n.padding;
  l != null && Number.isFinite(l) && i.inflate(l), n.rotate && e.rotate(o, r);
  const c = i.getNearestSideToPoint(e);
  let h;
  switch (c) {
    case "left":
      h = i.getLeftMiddle();
      break;
    case "right":
      h = i.getRightMiddle();
      break;
    case "top":
      h = i.getTopCenter();
      break;
    case "bottom":
      h = i.getBottomCenter();
      break;
  }
  const u = n.direction;
  return u === "H" ? (c === "top" || c === "bottom") && (e.x <= i.x + i.width ? h = i.getLeftMiddle() : h = i.getRightMiddle()) : u === "V" && (e.y <= i.y + i.height ? h = i.getTopCenter() : h = i.getBottomCenter()), n.rotate ? h.rotate(-o, r) : h;
}, i1 = qs(n1), s1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bottom: Yx,
  bottomLeft: $x,
  bottomRight: _x,
  center: Gx,
  left: Hx,
  midSide: i1,
  nodeCenter: e1,
  orth: t1,
  right: Wx,
  top: Vx,
  topLeft: qx,
  topRight: Xx
}, Symbol.toStringTag, { value: "Module" })), o1 = s1, xi = yt.create({
  type: "node endpoint"
});
xi.register(o1, !0);
const r1 = {
  position: { x: 0, y: 0 },
  angle: 0,
  attrs: {
    ".": {
      y: "0",
      "text-anchor": "start"
    }
  }
};
function $e(s, t) {
  const { x: e, y: n, angle: i, attrs: o } = t || {};
  return rh({}, { angle: i, attrs: o, position: { x: e, y: n } }, s, r1);
}
const a1 = (s, t, e) => $e({ position: t.getTopLeft() }, e), l1 = (s, t, e) => $e({
  position: { x: -15, y: 0 },
  attrs: { ".": { y: ".3em", "text-anchor": "end" } }
}, e), c1 = (s, t, e) => $e({
  position: { x: 15, y: 0 },
  attrs: { ".": { y: ".3em", "text-anchor": "start" } }
}, e), h1 = (s, t, e) => $e({
  position: { x: 0, y: -15 },
  attrs: { ".": { "text-anchor": "middle" } }
}, e), u1 = (s, t, e) => $e({
  position: { x: 0, y: 15 },
  attrs: { ".": { y: ".6em", "text-anchor": "middle" } }
}, e), d1 = (s, t, e) => wu(s, t, !1, e), g1 = (s, t, e) => wu(s, t, !0, e), f1 = (s, t, e) => vu(s, t, !1, e), p1 = (s, t, e) => vu(s, t, !0, e);
function wu(s, t, e, n) {
  const i = n.offset != null ? n.offset : 15, o = t.getCenter().theta(s), r = xu(t);
  let a, l, c, h, u = 0;
  return o < r[1] || o > r[2] ? (a = ".3em", l = i, c = 0, h = "start") : o < r[0] ? (a = "0", l = 0, c = -i, e ? (u = -90, h = "start") : h = "middle") : o < r[3] ? (a = ".3em", l = -i, c = 0, h = "end") : (a = ".6em", l = 0, c = i, e ? (u = 90, h = "start") : h = "middle"), $e({
    position: {
      x: Math.round(l),
      y: Math.round(c)
    },
    angle: u,
    attrs: {
      ".": {
        y: a,
        "text-anchor": h
      }
    }
  }, n);
}
function vu(s, t, e, n) {
  const i = n.offset != null ? n.offset : 15, o = t.getCenter().theta(s), r = xu(t);
  let a, l, c, h, u = 0;
  return o < r[1] || o > r[2] ? (a = ".3em", l = -i, c = 0, h = "end") : o < r[0] ? (a = ".6em", l = 0, c = i, e ? (u = 90, h = "start") : h = "middle") : o < r[3] ? (a = ".3em", l = i, c = 0, h = "start") : (a = "0em", l = 0, c = -i, e ? (u = -90, h = "start") : h = "middle"), $e({
    position: {
      x: Math.round(l),
      y: Math.round(c)
    },
    angle: u,
    attrs: {
      ".": {
        y: a,
        "text-anchor": h
      }
    }
  }, n);
}
function xu(s) {
  const t = s.getCenter(), e = t.theta(s.getTopLeft()), n = t.theta(s.getBottomLeft()), i = t.theta(s.getBottomRight()), o = t.theta(s.getTopRight());
  return [e, o, i, n];
}
const m1 = (s, t, e) => Eu(s.diff(t.getCenter()), !1, e), b1 = (s, t, e) => Eu(s.diff(t.getCenter()), !0, e);
function Eu(s, t, e) {
  const n = e.offset != null ? e.offset : 20, i = new C(0, 0), o = -s.theta(i), r = s.clone().move(i, n).diff(s).round();
  let a = ".3em", l, c = o;
  return (o + 90) % 180 === 0 ? (l = t ? "end" : "middle", !t && o === -270 && (a = "0em")) : o > -270 && o < -90 ? (l = "start", c = o - 180) : l = "end", $e({
    position: r.round().toJSON(),
    angle: t ? c : 0,
    attrs: {
      ".": {
        y: a,
        "text-anchor": l
      }
    }
  }, e);
}
const y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bottom: u1,
  inside: f1,
  insideOriented: p1,
  left: l1,
  manual: a1,
  outside: d1,
  outsideOriented: g1,
  radial: m1,
  radialOriented: b1,
  right: c1,
  top: h1
}, Symbol.toStringTag, { value: "Module" })), Su = y1, Xs = yt.create({
  type: "port label layout"
});
Xs.register(Su, !0);
function Vo(s, t = {}) {
  return new C(Wt(t.x, s.width), Wt(t.y, s.height));
}
function zr(s, t, e) {
  return Object.assign({ angle: t, position: s.toJSON() }, e);
}
const C1 = (s, t) => s.map(({ x: e, y: n, angle: i }) => zr(Vo(t, { x: e, y: n }), i || 0)), A1 = (s, t, e) => {
  const n = e.start || 0, i = e.step || 20;
  return Mu(s, t, n, (o, r) => (o + 0.5 - r / 2) * i);
}, w1 = (s, t, e) => {
  const n = e.start || 0, i = e.step || 360 / s.length;
  return Mu(s, t, n, (o) => o * i);
};
function Mu(s, t, e, n) {
  const i = t.getCenter(), o = t.getTopCenter(), r = t.width / t.height, a = Vt.fromRect(t), l = s.length;
  return s.map((c, h) => {
    const u = e + n(h, l), d = o.clone().rotate(-u, i).scale(r, 1, i), g = c.compensateRotate ? -a.tangentTheta(d) : 0;
    return (c.dx || c.dy) && d.translate(c.dx || 0, c.dy || 0), c.dr && d.move(i, c.dr), zr(d.round(), g, c);
  });
}
const v1 = (s, t, e) => {
  const n = Vo(t, e.start || t.getOrigin()), i = Vo(t, e.end || t.getCorner());
  return Li(s, n, i, e);
}, x1 = (s, t, e) => Li(s, t.getTopLeft(), t.getBottomLeft(), e), E1 = (s, t, e) => Li(s, t.getTopRight(), t.getBottomRight(), e), S1 = (s, t, e) => Li(s, t.getTopLeft(), t.getTopRight(), e), M1 = (s, t, e) => Li(s, t.getBottomLeft(), t.getBottomRight(), e);
function Li(s, t, e, n) {
  const i = new R(t, e), o = s.length;
  return s.map((r, a) => {
    var { strict: l } = r, c = G(r, ["strict"]);
    const h = l || n.strict ? (a + 1) / (o + 1) : (a + 0.5) / o, u = i.pointAt(h);
    return (c.dx || c.dy) && u.translate(c.dx || 0, c.dy || 0), zr(u.round(), 0, c);
  });
}
const B1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  absolute: C1,
  bottom: M1,
  ellipse: A1,
  ellipseSpread: w1,
  left: x1,
  line: v1,
  right: E1,
  top: S1
}, Symbol.toStringTag, { value: "Module" })), Bu = B1, Ei = yt.create({
  type: "port layout"
});
Ei.register(Bu, !0);
const I1 = (s) => [
  ...s
], P1 = (s, t, e) => {
  const n = t.side || "bottom", i = he(t.padding || 40), o = e.sourceBBox, r = e.targetBBox, a = o.getCenter(), l = r.getCenter();
  let c, h, u;
  switch (n) {
    case "top":
      u = -1, c = "y", h = "height";
      break;
    case "left":
      u = -1, c = "x", h = "width";
      break;
    case "right":
      u = 1, c = "x", h = "width";
      break;
    case "bottom":
    default:
      u = 1, c = "y", h = "height";
      break;
  }
  return a[c] += u * (o[h] / 2 + i[n]), l[c] += u * (r[h] / 2 + i[n]), u * (a[c] - l[c]) > 0 ? l[c] = a[c] : a[c] = l[c], [a.toJSON(), ...s, l.toJSON()];
};
function ts(s) {
  return new I(s.x, s.y, 0, 0);
}
function xs(s = {}) {
  const t = he(s.padding || 20);
  return {
    x: -t.left,
    y: -t.top,
    width: t.left + t.right,
    height: t.top + t.bottom
  };
}
function Iu(s, t = {}) {
  return s.sourceBBox.clone().moveAndExpand(xs(t));
}
function Pu(s, t = {}) {
  return s.targetBBox.clone().moveAndExpand(xs(t));
}
function T1(s, t = {}) {
  return s.sourceAnchor ? s.sourceAnchor : Iu(s, t).getCenter();
}
function k1(s, t = {}) {
  return s.targetAnchor ? s.targetAnchor : Pu(s, t).getCenter();
}
const Tu = (s, t, e) => {
  let n = Iu(e, t), i = Pu(e, t);
  const o = T1(e, t), r = k1(e, t);
  n = n.union(ts(o)), i = i.union(ts(r));
  const a = s.map((h) => C.create(h));
  a.unshift(o), a.push(r);
  let l = null;
  const c = [];
  for (let h = 0, u = a.length - 1; h < u; h += 1) {
    let d = null;
    const g = a[h], f = a[h + 1], p = jt(g, f) != null;
    if (h === 0)
      h + 1 === u ? n.intersectsWithRect(i.clone().inflate(1)) ? d = ho(g, f, n, i) : p || (d = Q1(g, f, n, i)) : n.containsPoint(f) ? d = ho(g, f, n, ts(f).moveAndExpand(xs(t))) : p || (d = hs(g, f, n));
    else if (h + 1 === u) {
      const m = p && jt(f, g) === l;
      i.containsPoint(g) || m ? d = ho(g, f, ts(g).moveAndExpand(xs(t)), i, l) : p || (d = D1(g, f, i, l));
    } else p || (d = ku(g, f, l));
    d ? (c.push(...d.points), l = d.direction) : l = jt(g, f), h + 1 < u && c.push(f);
  }
  return c;
}, O1 = {
  N: "S",
  S: "N",
  E: "W",
  W: "E"
}, R1 = {
  N: -Math.PI / 2 * 3,
  S: -Math.PI / 2,
  E: 0,
  W: Math.PI
};
function Es(s, t, e) {
  let n = new C(s.x, t.y);
  return e.containsPoint(n) && (n = new C(t.x, s.y)), n;
}
function Yo(s, t) {
  return s[t === "W" || t === "E" ? "width" : "height"];
}
function jt(s, t) {
  return s.x === t.x ? s.y > t.y ? "N" : "S" : s.y === t.y ? s.x > t.x ? "W" : "E" : null;
}
function ku(s, t, e) {
  const n = new C(s.x, t.y), i = new C(t.x, s.y), o = jt(s, n), r = jt(s, i), a = e ? O1[e] : null, l = o === e || o !== a && (r === a || r !== e) ? n : i;
  return { points: [l], direction: jt(l, t) };
}
function hs(s, t, e) {
  const n = Es(s, t, e);
  return { points: [n], direction: jt(n, t) };
}
function D1(s, t, e, n) {
  const i = [new C(s.x, t.y), new C(t.x, s.y)], o = i.filter((l) => !e.containsPoint(l)), r = o.filter((l) => jt(l, s) !== n);
  let a;
  if (r.length > 0)
    return a = r.filter((l) => jt(s, l) === n).pop(), a = a || r[0], {
      points: [a],
      direction: jt(a, t)
    };
  {
    a = Oy(i, o)[0];
    const l = C.create(t).move(a, -Yo(e, n) / 2);
    return {
      points: [Es(l, s, e), l],
      direction: jt(l, t)
    };
  }
}
function Q1(s, t, e, n) {
  let i = hs(t, s, n);
  const o = i.points[0];
  if (e.containsPoint(o)) {
    i = hs(s, t, e);
    const r = i.points[0];
    if (n.containsPoint(r)) {
      const a = C.create(s).move(r, -Yo(e, jt(s, r)) / 2), l = C.create(t).move(o, -Yo(n, jt(t, o)) / 2), c = new R(a, l).getCenter(), h = hs(s, c, e), u = ku(c, t, h.direction);
      i.points = [h.points[0], u.points[0]], i.direction = u.direction;
    }
  }
  return i;
}
function ho(s, t, e, n, i) {
  const o = e.union(n).inflate(1), r = o.getCenter(), a = r.distance(t) > r.distance(s), l = a ? t : s, c = a ? s : t;
  let h, u, d;
  i ? (h = C.fromPolar(o.width + o.height, R1[i], l), h = o.getNearestPointToPoint(h).move(h, -1)) : h = o.getNearestPointToPoint(l).move(l, 1), u = Es(h, c, o);
  let g;
  h.round().equals(u.round()) ? (u = C.fromPolar(o.width + o.height, Qt(h.theta(l)) + Math.PI / 2, c), u = o.getNearestPointToPoint(u).move(c, 1).round(), d = Es(h, u, o), g = a ? [u, d, h] : [h, d, u]) : g = a ? [u, h] : [h, u];
  const f = jt(a ? h : u, t);
  return {
    points: g,
    direction: f
  };
}
const N1 = {
  step: 10,
  maxLoopCount: 2e3,
  precision: 1,
  maxDirectionChange: 90,
  perpendicular: !0,
  excludeTerminals: [],
  excludeNodes: [],
  excludeShapes: [],
  startDirections: ["top", "right", "bottom", "left"],
  endDirections: ["top", "right", "bottom", "left"],
  directionMap: {
    top: { x: 0, y: -1 },
    right: { x: 1, y: 0 },
    bottom: { x: 0, y: 1 },
    left: { x: -1, y: 0 }
  },
  cost() {
    return Fe(this.step, this);
  },
  directions() {
    const s = Fe(this.step, this), t = Fe(this.cost, this);
    return [
      { cost: t, offsetX: s, offsetY: 0 },
      { cost: t, offsetX: -s, offsetY: 0 },
      { cost: t, offsetX: 0, offsetY: s },
      { cost: t, offsetX: 0, offsetY: -s }
    ];
  },
  penalties() {
    const s = Fe(this.step, this);
    return {
      0: 0,
      45: s / 2,
      90: s / 2
    };
  },
  paddingBox() {
    const s = Fe(this.step, this);
    return {
      x: -s,
      y: -s,
      width: 2 * s,
      height: 2 * s
    };
  },
  fallbackRouter: Tu,
  draggingRouter: null,
  snapToGrid: !0
};
function Fe(s, t) {
  return typeof s == "function" ? s.call(t) : s;
}
function L1(s) {
  const t = Object.keys(s).reduce((e, n) => {
    const i = e;
    return n === "fallbackRouter" || n === "draggingRouter" || n === "fallbackRoute" ? i[n] = s[n] : i[n] = Fe(s[n], s), e;
  }, {});
  if (t.padding) {
    const e = he(t.padding);
    t.paddingBox = {
      x: -e.left,
      y: -e.top,
      width: e.left + e.right,
      height: e.top + e.bottom
    };
  }
  return t.directions.forEach((e) => {
    const n = new C(0, 0), i = new C(e.offsetX, e.offsetY);
    e.angle = Kt(n.theta(i));
  }), t;
}
class F1 {
  constructor(t) {
    this.options = t, this.mapGridSize = 100, this.map = {};
  }
  /**
   * Builds a map of all nodes for quicker obstacle queries i.e. is a point
   * contained in any obstacle?
   *
   * A simplified grid search.
   */
  build(t, e) {
    const n = this.options, i = n.excludeTerminals.reduce((c, h) => {
      const u = e[h];
      if (u) {
        const d = t.getCell(u.cell);
        d && c.push(d);
      }
      return c;
    }, []);
    let o = [];
    const r = t.getCell(e.getSourceCellId());
    r && (o = Na(o, r.getAncestors().map((c) => c.id)));
    const a = t.getCell(e.getTargetCellId());
    a && (o = Na(o, a.getAncestors().map((c) => c.id)));
    const l = this.mapGridSize;
    return t.getNodes().reduce((c, h) => {
      const u = i.some((m) => m.id === h.id), d = h.shape ? n.excludeShapes.includes(h.shape) : !1, g = n.excludeNodes.some((m) => typeof m == "string" ? h.id === m : m === h), f = o.includes(h.id), p = d || u || g || f;
      if (h.isVisible() && !p) {
        const m = h.getBBox().moveAndExpand(n.paddingBox), b = m.getOrigin().snapToGrid(l), y = m.getCorner().snapToGrid(l);
        for (let A = b.x; A <= y.x; A += l)
          for (let w = b.y; w <= y.y; w += l) {
            const x = new C(A, w).toString();
            c[x] == null && (c[x] = []), c[x].push(m);
          }
      }
      return c;
    }, this.map), this;
  }
  isAccessible(t) {
    const e = t.clone().snapToGrid(this.mapGridSize).toString(), n = this.map[e];
    return n ? n.every((i) => !i.containsPoint(t)) : !0;
  }
}
const fl = 1, pl = 2;
class z1 {
  constructor() {
    this.items = [], this.hash = {}, this.values = {};
  }
  add(t, e) {
    this.hash[t] ? this.items.splice(this.items.indexOf(t), 1) : this.hash[t] = fl, this.values[t] = e;
    const n = cC(this.items, t, (i) => this.values[i]);
    this.items.splice(n, 0, t);
  }
  pop() {
    const t = this.items.shift();
    return t && (this.hash[t] = pl), t;
  }
  isOpen(t) {
    return this.hash[t] === fl;
  }
  isClose(t) {
    return this.hash[t] === pl;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
function Ou(s, t) {
  const e = s.sourceBBox.clone();
  return t && t.paddingBox ? e.moveAndExpand(t.paddingBox) : e;
}
function Ru(s, t) {
  const e = s.targetBBox.clone();
  return t && t.paddingBox ? e.moveAndExpand(t.paddingBox) : e;
}
function Du(s, t) {
  return s.sourceAnchor ? s.sourceAnchor : Ou(s, t).getCenter();
}
function U1(s, t) {
  return s.targetAnchor ? s.targetAnchor : Ru(s, t).getCenter();
}
function uo(s, t, e, n, i) {
  const o = 360 / e, r = s.theta(K1(s, t, n, i)), a = Kt(r + o / 2);
  return o * Math.floor(a / o);
}
function K1(s, t, e, n) {
  const i = n.step, o = t.x - s.x, r = t.y - s.y, a = o / e.x, l = r / e.y, c = a * i, h = l * i;
  return new C(s.x + c, s.y + h);
}
function ml(s, t) {
  const e = Math.abs(s - t);
  return e > 180 ? 360 - e : e;
}
function J1(s, t) {
  const e = t.step;
  return t.directions.forEach((n) => {
    n.gridOffsetX = n.offsetX / e * s.x, n.gridOffsetY = n.offsetY / e * s.y;
  }), t.directions;
}
function j1(s, t, e) {
  return {
    source: t.clone(),
    x: bl(e.x - t.x, s),
    y: bl(e.y - t.y, s)
  };
}
function bl(s, t) {
  if (!s)
    return t;
  const e = Math.abs(s), n = Math.round(e / t);
  if (!n)
    return e;
  const i = n * t, r = (e - i) / n;
  return t + r;
}
function G1(s, t) {
  const e = t.source, n = ue(s.x - e.x, t.x) + e.x, i = ue(s.y - e.y, t.y) + e.y;
  return new C(n, i);
}
function qn(s, t) {
  return s.round(t);
}
function us(s, t, e) {
  return qn(G1(s.clone(), t), e);
}
function oi(s) {
  return s.toString();
}
function go(s) {
  return new C(s.x === 0 ? 0 : Math.abs(s.x) / s.x, s.y === 0 ? 0 : Math.abs(s.y) / s.y);
}
function yl(s, t) {
  let e = 1 / 0;
  for (let n = 0, i = t.length; n < i; n += 1) {
    const o = s.manhattanDistance(t[n]);
    o < e && (e = o);
  }
  return e;
}
function Cl(s, t, e, n, i) {
  const o = i.precision, r = i.directionMap, a = s.diff(t.getCenter()), l = Object.keys(r).reduce((c, h) => {
    if (e.includes(h)) {
      const u = r[h], d = new C(s.x + u.x * (Math.abs(a.x) + t.width), s.y + u.y * (Math.abs(a.y) + t.height)), f = new R(s, d).intersect(t) || [];
      let p, m = null;
      for (let b = 0; b < f.length; b += 1) {
        const y = f[b], A = s.squaredDistance(y);
        (p == null || A > p) && (p = A, m = y);
      }
      if (m) {
        let b = us(m, n, o);
        t.containsPoint(b) && (b = us(b.translate(u.x * n.x, u.y * n.y), n, o)), c.push(b);
      }
    }
    return c;
  }, []);
  return t.containsPoint(s) || l.push(us(s, n, o)), l;
}
function V1(s, t, e, n, i) {
  const o = [];
  let r = go(i.diff(e)), a = oi(e), l = s[a], c;
  for (; l; ) {
    c = t[a];
    const d = go(c.diff(l));
    d.equals(r) || (o.unshift(c), r = d), a = oi(l), l = s[a];
  }
  const h = t[a];
  return go(h.diff(n)).equals(r) || o.unshift(h), o;
}
function Y1(s, t, e, n, i) {
  const o = i.precision;
  let r, a;
  I.isRectangle(t) ? r = qn(Du(s, i).clone(), o) : r = qn(t.clone(), o), I.isRectangle(e) ? a = qn(U1(s, i).clone(), o) : a = qn(e.clone(), o);
  const l = j1(i.step, r, a), c = r, h = a;
  let u, d;
  if (I.isRectangle(t) ? u = Cl(c, t, i.startDirections, l, i) : u = [c], I.isRectangle(e) ? d = Cl(a, e, i.endDirections, l, i) : d = [h], u = u.filter((g) => n.isAccessible(g)), d = d.filter((g) => n.isAccessible(g)), u.length > 0 && d.length > 0) {
    const g = new z1(), f = {}, p = {}, m = {};
    for (let P = 0, T = u.length; P < T; P += 1) {
      const O = u[P], J = oi(O);
      g.add(J, yl(O, d)), f[J] = O, m[J] = 0;
    }
    const b = i.previousDirectionAngle, y = b === void 0;
    let A, w;
    const x = J1(l, i), M = x.length, v = d.reduce((P, T) => {
      const O = oi(T);
      return P.push(O), P;
    }, []), S = C.equalPoints(u, d);
    let B = i.maxLoopCount;
    for (; !g.isEmpty() && B > 0; ) {
      const P = g.pop(), T = f[P], O = p[P], J = m[P], V = T.equals(c), it = O == null;
      let W;
      if (it ? y ? V ? W = null : W = uo(c, T, M, l, i) : W = b : W = uo(O, T, M, l, i), !(it && S) && v.indexOf(P) >= 0)
        return i.previousDirectionAngle = W, V1(p, f, T, c, h);
      for (let Lt = 0; Lt < M; Lt += 1) {
        A = x[Lt];
        const Ft = A.angle;
        if (w = ml(W, Ft), !(y && V) && w > i.maxDirectionChange)
          continue;
        const At = us(T.clone().translate(A.gridOffsetX || 0, A.gridOffsetY || 0), l, o), Q = oi(At);
        if (g.isClose(Q) || !n.isAccessible(At))
          continue;
        if (v.indexOf(Q) >= 0 && !At.equals(h)) {
          const wt = uo(At, h, M, l, i);
          if (ml(Ft, wt) > i.maxDirectionChange)
            continue;
        }
        const et = A.cost, rt = V ? 0 : i.penalties[w], H = J + et + rt;
        (!g.isOpen(Q) || H < m[Q]) && (f[Q] = At, p[Q] = T, m[Q] = H, g.add(Q, H + yl(At, d)));
      }
      B -= 1;
    }
  }
  return i.fallbackRoute ? N(i.fallbackRoute, this, c, h, i) : null;
}
function H1(s, t = 10) {
  if (s.length <= 1)
    return s;
  for (let e = 0, n = s.length; e < n - 1; e += 1) {
    const i = s[e], o = s[e + 1];
    if (i.x === o.x) {
      const r = t * Math.round(i.x / t);
      i.x !== r && (i.x = r, o.x = r);
    } else if (i.y === o.y) {
      const r = t * Math.round(i.y / t);
      i.y !== r && (i.y = r, o.y = r);
    }
  }
  return s;
}
const W1 = function(s, t, e) {
  const n = L1(t), i = Ou(e, n), o = Ru(e, n), r = Du(e, n), a = new F1(n).build(e.graph.model, e.cell), l = s.map((g) => C.create(g)), c = [];
  let h = r, u, d;
  for (let g = 0, f = l.length; g <= f; g += 1) {
    let p = null;
    if (u = d || i, d = l[g], d == null) {
      d = o;
      const b = e.cell;
      if ((b.getSourceCellId() == null || b.getTargetCellId() == null) && typeof n.draggingRouter == "function") {
        const A = u === i ? r : u, w = d.getOrigin();
        p = N(n.draggingRouter, e, A, w, n);
      }
    }
    if (p == null && (p = Y1(e, u, d, a, n)), p === null)
      return console.warn("Unable to execute manhattan algorithm, use orth instead"), N(n.fallbackRouter, this, s, n, e);
    const m = p[0];
    m && m.equals(h) && p.shift(), h = p[p.length - 1] || h, c.push(...p);
  }
  return n.snapToGrid ? H1(c, e.graph.grid.getGridSize()) : c;
}, Qu = function(s, t, e) {
  return N(W1, this, s, Object.assign(Object.assign({}, N1), t), e);
}, q1 = {
  maxDirectionChange: 45,
  // an array of directions to find next points on the route
  // different from start/end directions
  directions() {
    const s = Fe(this.step, this), t = Fe(this.cost, this), e = Math.ceil(Math.sqrt(s * s << 1));
    return [
      { cost: t, offsetX: s, offsetY: 0 },
      { cost: e, offsetX: s, offsetY: s },
      { cost: t, offsetX: 0, offsetY: s },
      { cost: e, offsetX: -s, offsetY: s },
      { cost: t, offsetX: -s, offsetY: 0 },
      { cost: e, offsetX: -s, offsetY: -s },
      { cost: t, offsetX: 0, offsetY: -s },
      { cost: e, offsetX: s, offsetY: -s }
    ];
  },
  // a simple route used in situations when main routing method fails
  // (exceed max number of loop iterations, inaccessible)
  fallbackRoute(s, t, e) {
    const n = s.theta(t), i = [];
    let o = { x: t.x, y: s.y }, r = { x: s.x, y: t.y };
    if (n % 180 > 90) {
      const A = o;
      o = r, r = A;
    }
    const a = n % 90 < 45 ? o : r, l = new R(s, a), c = 90 * Math.ceil(n / 90), h = C.fromPolar(l.squaredLength(), Qt(c + 135), a), u = new R(t, h), d = l.intersectsWithLine(u), g = d || t, f = d ? g : s, p = 360 / e.directions.length, m = f.theta(t), b = Kt(m + p / 2), y = p * Math.floor(b / p);
    return e.previousDirectionAngle = y, g && i.push(g.round()), i.push(t), i;
  }
}, X1 = function(s, t, e) {
  return N(Qu, this, s, Object.assign(Object.assign({}, q1), t), e);
}, $1 = (s, t, e) => {
  const n = t.offset || 32, i = t.min == null ? 16 : t.min;
  let o = 0, r = t.direction;
  const a = e.sourceBBox, l = e.targetBBox, c = a.getCenter(), h = l.getCenter();
  if (typeof n == "number" && (o = n), r == null) {
    let b = l.left - a.right, y = l.top - a.bottom;
    b >= 0 && y >= 0 ? r = b >= y ? "L" : "T" : b <= 0 && y >= 0 ? (b = a.left - l.right, b >= 0 ? r = b >= y ? "R" : "T" : r = "T") : b >= 0 && y <= 0 ? (y = a.top - l.bottom, y >= 0 ? r = b >= y ? "L" : "B" : r = "L") : (b = a.left - l.right, y = a.top - l.bottom, b >= 0 && y >= 0 ? r = b >= y ? "R" : "B" : b <= 0 && y >= 0 ? r = "B" : b >= 0 && y <= 0 ? r = "R" : r = Math.abs(b) > Math.abs(y) ? "R" : "B");
  }
  r === "H" ? r = h.x - c.x >= 0 ? "L" : "R" : r === "V" && (r = h.y - c.y >= 0 ? "T" : "B"), n === "center" && (r === "L" ? o = (l.left - a.right) / 2 : r === "R" ? o = (a.left - l.right) / 2 : r === "T" ? o = (l.top - a.bottom) / 2 : r === "B" && (o = (a.top - l.bottom) / 2));
  let u, d, g;
  const f = r === "L" || r === "R";
  if (f) {
    if (h.y === c.y)
      return [...s];
    g = r === "L" ? 1 : -1, u = "x", d = "width";
  } else {
    if (h.x === c.x)
      return [...s];
    g = r === "T" ? 1 : -1, u = "y", d = "height";
  }
  const p = c.clone(), m = h.clone();
  if (p[u] += g * (a[d] / 2 + o), m[u] -= g * (l[d] / 2 + o), f) {
    const b = p.x, y = m.x, A = a.width / 2 + i, w = l.width / 2 + i;
    h.x > c.x ? y <= b && (p.x = Math.max(y, c.x + A), m.x = Math.min(b, h.x - w)) : y >= b && (p.x = Math.min(y, c.x - A), m.x = Math.max(b, h.x + w));
  } else {
    const b = p.y, y = m.y, A = a.height / 2 + i, w = l.height / 2 + i;
    h.y > c.y ? y <= b && (p.y = Math.max(y, c.y + A), m.y = Math.min(b, h.y - w)) : y >= b && (p.y = Math.min(y, c.y - A), m.y = Math.max(b, h.y + w));
  }
  return [p.toJSON(), ...s, m.toJSON()];
};
function fn(s, t) {
  if (t != null && t !== !1) {
    const e = typeof t == "boolean" ? 0 : t;
    if (e > 0) {
      const n = C.create(s[1]).move(s[2], e), i = C.create(s[1]).move(s[0], e);
      return [n.toJSON(), ...s, i.toJSON()];
    }
    {
      const n = s[1];
      return [Object.assign({}, n), ...s, Object.assign({}, n)];
    }
  }
  return s;
}
const _1 = (s, t, e) => {
  const n = t.width || 50, o = (t.height || 80) / 2, r = t.angle || "auto", a = e.sourceAnchor, l = e.targetAnchor, c = e.sourceBBox, h = e.targetBBox;
  if (a.equals(l)) {
    const u = (b) => {
      const y = Qt(b), A = Math.sin(y), w = Math.cos(y), x = new C(a.x + w * n, a.y + A * n), M = new C(x.x - w * o, x.y - A * o), v = M.clone().rotate(-90, x), S = M.clone().rotate(90, x);
      return [v.toJSON(), x.toJSON(), S.toJSON()];
    }, d = (b) => {
      const y = a.clone().move(b, -1), A = new R(y, b);
      return !c.containsPoint(b) && !c.intersectsWithLine(A);
    }, g = [0, 90, 180, 270, 45, 135, 225, 315];
    if (typeof r == "number")
      return fn(u(r), t.merge);
    const f = c.getCenter();
    if (f.equals(a))
      return fn(u(0), t.merge);
    const p = f.angleBetween(a, f.clone().translate(1, 0));
    let m = u(p);
    if (d(m[1]))
      return fn(m, t.merge);
    for (let b = 1, y = g.length; b < y; b += 1)
      if (m = u(p + g[b]), d(m[1]))
        return fn(m, t.merge);
    return fn(m, t.merge);
  }
  {
    const u = new R(a, l);
    let d = u.parallel(-n), g = d.getCenter(), f = d.start.clone().move(d.end, o), p = d.end.clone().move(d.start, o);
    const m = u.parallel(-1), b = new R(m.start, g), y = new R(m.end, g);
    if ((c.containsPoint(g) || h.containsPoint(g) || c.intersectsWithLine(b) || c.intersectsWithLine(y) || h.intersectsWithLine(b) || h.intersectsWithLine(y)) && (d = u.parallel(n), g = d.getCenter(), f = d.start.clone().move(d.end, o), p = d.end.clone().move(d.start, o)), t.merge) {
      const A = new R(a, l), w = new R(g, A.center).setLength(Number.MAX_SAFE_INTEGER), x = c.intersectsWithLine(w), M = h.intersectsWithLine(w), v = x ? Array.isArray(x) ? x : [x] : [];
      M && (Array.isArray(M) ? v.push(...M) : v.push(M));
      const S = A.center.closest(v);
      S ? (e.sourceAnchor = S.clone(), e.targetAnchor = S.clone()) : (e.sourceAnchor = A.center.clone(), e.targetAnchor = A.center.clone());
    }
    return fn([f.toJSON(), g.toJSON(), p.toJSON()], t.merge);
  }
}, Z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  er: $1,
  loop: _1,
  manhattan: Qu,
  metro: X1,
  normal: I1,
  oneSide: P1,
  orth: Tu
}, Symbol.toStringTag, { value: "Module" })), Ho = Z1, Si = yt.create({
  type: "router"
});
Si.register(Ho, !0);
function tE(s) {
  return s != null && !$s(s);
}
function $s(s) {
  return s != null && typeof s == "string";
}
function eE(s) {
  return s == null || $s(s) ? s : gt(s);
}
function nE(s) {
  return `${s}`.trim().replace(/[\r|\n]/g, " ").replace(/>\s+</g, "><");
}
function Nu(s, t = { ns: Bt.svg }) {
  const e = document.createDocumentFragment(), n = {}, i = {}, o = [
    {
      markup: Array.isArray(s) ? s : [s],
      parent: e,
      ns: t.ns
    }
  ];
  for (; o.length > 0; ) {
    const r = o.pop();
    let a = r.ns || Bt.svg;
    const l = r.markup, c = r.parent;
    l.forEach((h) => {
      const u = h.tagName;
      if (!u)
        throw new TypeError("Invalid tagName");
      h.ns && (a = h.ns);
      const d = a ? Er(u, a) : Ch(u), g = h.attrs;
      g && X(d, ui(g));
      const f = h.style;
      f && st(d, f);
      const p = h.className;
      p != null && d.setAttribute("class", Array.isArray(p) ? p.join(" ") : p), h.textContent && (d.textContent = h.textContent);
      const m = h.selector;
      if (m != null) {
        if (i[m])
          throw new TypeError("Selector must be unique");
        i[m] = d;
      }
      if (h.groupSelector) {
        let y = h.groupSelector;
        Array.isArray(y) || (y = [y]), y.forEach((A) => {
          n[A] || (n[A] = []), n[A].push(d);
        });
      }
      c.appendChild(d);
      const b = h.children;
      Array.isArray(b) && o.push({ ns: a, markup: b, parent: d });
    });
  }
  return Object.keys(n).forEach((r) => {
    if (i[r])
      throw new Error("Ambiguous group selector");
    i[r] = n[r];
  }), { fragment: e, selectors: i, groups: n };
}
function Wo(s) {
  return s instanceof SVGElement ? pe("g") : Ch("div");
}
function iE(s) {
  if ($s(s)) {
    const i = F.createVectors(s), o = i.length;
    if (o === 1)
      return {
        elem: i[0].node
      };
    if (o > 1) {
      const r = Wo(i[0].node);
      return i.forEach((a) => {
        r.appendChild(a.node);
      }), { elem: r };
    }
    return {};
  }
  const t = Nu(s), e = t.fragment;
  let n = null;
  return e.childNodes.length > 1 ? (n = Wo(e.firstChild), n.appendChild(e)) : n = e.firstChild, { elem: n, selectors: t.selectors };
}
function sE(s) {
  const t = F.createVectors(s), e = document.createDocumentFragment();
  for (let n = 0, i = t.length; n < i; n += 1) {
    const o = t[n].node;
    e.appendChild(o);
  }
  return { fragment: e, selectors: {} };
}
function Lu(s, t, e) {
  if (s != null) {
    let n;
    const i = s.tagName.toLowerCase();
    if (s === t)
      return typeof e == "string" ? n = `> ${i} > ${e}` : n = `> ${i}`, n;
    const o = s.parentNode;
    if (o && o.childNodes.length > 1) {
      const r = Sr(s) + 1;
      n = `${i}:nth-child(${r})`;
    } else
      n = i;
    return e && (n += ` > ${e}`), Lu(s.parentNode, t, n);
  }
  return e;
}
function oE() {
  return "g";
}
function rE() {
  return {
    tagName: "circle",
    selector: "circle",
    attrs: {
      r: 10,
      fill: "#FFFFFF",
      stroke: "#000000"
    }
  };
}
function aE() {
  return {
    tagName: "text",
    selector: "text",
    attrs: {
      fill: "#000000"
    }
  };
}
function lE() {
  return [
    {
      tagName: "path",
      selector: "wrap",
      groupSelector: "lines",
      attrs: {
        fill: "none",
        cursor: "pointer",
        stroke: "transparent",
        strokeLinecap: "round"
      }
    },
    {
      tagName: "path",
      selector: "line",
      groupSelector: "lines",
      attrs: {
        fill: "none",
        pointerEvents: "none"
      }
    }
  ];
}
function cE(s = !1) {
  return {
    tagName: "foreignObject",
    selector: "fo",
    children: [
      {
        ns: Bt.xhtml,
        tagName: "body",
        selector: "foBody",
        attrs: {
          xmlns: Bt.xhtml
        },
        style: {
          width: "100%",
          height: "100%",
          background: "transparent"
        },
        children: s ? [] : [
          {
            tagName: "div",
            selector: "foContent",
            style: {
              width: "100%",
              height: "100%"
            }
          }
        ]
      }
    ]
  };
}
const Nt = {
  isJSONMarkup: tE,
  isStringMarkup: $s,
  clone: eE,
  sanitize: nE,
  parseJSONMarkup: Nu,
  createContainer: Wo,
  renderMarkup: iE,
  parseLabelStringMarkup: sE,
  getSelector: Lu,
  getPortContainerMarkup: oE,
  getPortMarkup: rE,
  getPortLabelMarkup: aE,
  getEdgeMarkup: lE,
  getForeignObjectMarkup: cE
};
function ln(s, t) {
  return t ? pe(s || "g") : Er(s || "div");
}
function Fu(s, t, e) {
  if (!s || s === ".")
    return { elems: [t] };
  if (e) {
    const n = e[s];
    if (n)
      return { elems: Array.isArray(n) ? n : [n] };
  }
  {
    const n = s.includes(">") ? `:scope ${s}` : s;
    return {
      isCSSSelector: !0,
      // $(rootElem).find(selector).toArray() as Element[]
      elems: Array.prototype.slice.call(t.querySelectorAll(n))
    };
  }
}
function hE(s) {
  var t;
  let e = s;
  const n = s.originalEvent, i = (t = n == null ? void 0 : n.changedTouches) === null || t === void 0 ? void 0 : t[0];
  if (i) {
    for (const o in s)
      i[o] === void 0 && (i[o] = s[o]);
    e = i;
  }
  return e;
}
let Yt = class extends Gt {
  get priority() {
    return 2;
  }
  /** If need remove `this.container` DOM */
  get disposeContainer() {
    return !0;
  }
  constructor() {
    super(), this.cid = bC("v"), this.cid;
  }
  confirmUpdate(t, e) {
    return 0;
  }
  empty(t = this.container) {
    return Di(t), this;
  }
  unmount(t = this.container) {
    return ee(t), this;
  }
  remove(t = this.container) {
    return t === this.container ? (this.removeEventListeners(document), this.onRemove(), this.cid, this.disposeContainer && this.unmount(t)) : this.unmount(t), this;
  }
  onRemove() {
  }
  setClass(t, e = this.container) {
    e.classList.value = Array.isArray(t) ? t.join(" ") : t;
  }
  addClass(t, e = this.container) {
    return k(e, Array.isArray(t) ? t.join(" ") : t), this;
  }
  removeClass(t, e = this.container) {
    return ut(e, Array.isArray(t) ? t.join(" ") : t), this;
  }
  setStyle(t, e = this.container) {
    return st(e, t), this;
  }
  setAttrs(t, e = this.container) {
    return t != null && e != null && X(e, t), this;
  }
  /**
   * Returns the value of the specified attribute of `node`.
   *
   * If the node does not set a value for attribute, start recursing up
   * the DOM tree from node to lookup for attribute at the ancestors of
   * node. If the recursion reaches CellView's root node and attribute
   * is not found even there, return `null`.
   */
  findAttr(t, e = this.container) {
    let n = e;
    for (; n && n.nodeType === 1; ) {
      const i = n.getAttribute(t);
      if (i != null)
        return i;
      if (n === this.container)
        return null;
      n = n.parentNode;
    }
    return null;
  }
  find(t, e = this.container, n = this.selectors) {
    return Fu(t, e, n).elems;
  }
  findOne(t, e = this.container, n = this.selectors) {
    const i = this.find(t, e, n);
    return i.length > 0 ? i[0] : null;
  }
  findByAttr(t, e = this.container) {
    let n = e;
    for (; n != null && n.getAttribute; ) {
      const i = n.getAttribute(t);
      if ((i != null || n === this.container) && i !== "false")
        return n;
      n = n.parentNode;
    }
    return null;
  }
  getSelector(t, e) {
    let n;
    if (t === this.container)
      return typeof e == "string" && (n = `> ${e}`), n;
    if (t) {
      const i = Sr(t) + 1;
      n = `${t.tagName.toLowerCase()}:nth-child(${i})`, e && (n += ` > ${e}`), n = this.getSelector(t.parentNode, n);
    }
    return n;
  }
  prefixClassName(t) {
    return nt.prefix(t);
  }
  delegateEvents(t, e) {
    if (t == null)
      return this;
    e || this.undelegateEvents();
    const n = /^(\S+)\s*(.*)$/;
    return Object.keys(t).forEach((i) => {
      const o = i.match(n);
      if (o == null)
        return;
      const r = this.getEventHandler(t[i]);
      typeof r == "function" && this.delegateEvent(o[1], o[2], r);
    }), this;
  }
  undelegateEvents() {
    return lt.off(this.container, this.getEventNamespace()), this;
  }
  delegateDocumentEvents(t, e) {
    return this.addEventListeners(document, t, e), this;
  }
  undelegateDocumentEvents() {
    return this.removeEventListeners(document), this;
  }
  delegateEvent(t, e, n) {
    return lt.on(this.container, t + this.getEventNamespace(), e, n), this;
  }
  undelegateEvent(t, e, n) {
    const i = t + this.getEventNamespace();
    return e == null ? lt.off(this.container, i) : typeof e == "string" ? lt.off(this.container, i, e, n) : lt.off(this.container, i, e), this;
  }
  addEventListeners(t, e, n) {
    if (e == null)
      return this;
    const i = this.getEventNamespace();
    return Object.keys(e).forEach((o) => {
      const r = this.getEventHandler(e[o]);
      typeof r == "function" && lt.on(t, o + i, n, r);
    }), this;
  }
  removeEventListeners(t) {
    return t != null && lt.off(t, this.getEventNamespace()), this;
  }
  getEventNamespace() {
    return `.${nt.prefixCls}-event-${this.cid}`;
  }
  getEventHandler(t) {
    let e;
    if (typeof t == "string") {
      const n = this[t];
      typeof n == "function" && (e = (...i) => n.call(this, ...i));
    } else
      e = (...n) => t.call(this, ...n);
    return e;
  }
  getEventTarget(t, e = {}) {
    const { target: n, type: i, clientX: o = 0, clientY: r = 0 } = t;
    return e.fromPoint || i === "touchmove" || i === "touchend" ? document.elementFromPoint(o, r) : n;
  }
  stopPropagation(t) {
    return this.setEventData(t, { propagationStopped: !0 }), this;
  }
  isPropagationStopped(t) {
    return this.getEventData(t).propagationStopped === !0;
  }
  getEventData(t) {
    return this.eventData(t);
  }
  setEventData(t, e) {
    return this.eventData(t, e);
  }
  eventData(t, e) {
    if (t == null)
      throw new TypeError("Event object required");
    let n = t.data;
    const i = `__${this.cid}__`;
    return e == null ? n == null ? {} : n[i] || {} : (n == null && (n = t.data = {}), n[i] == null ? n[i] = Object.assign({}, e) : n[i] = Object.assign(Object.assign({}, n[i]), e), n[i]);
  }
  normalizeEvent(t) {
    return hE(t);
  }
  dispose() {
    this.remove();
  }
};
$([
  _()
], Yt.prototype, "dispose", null);
let Al = 0;
function uE(s) {
  return s ? Br(s) : (Al += 1, `CustomTool${Al}`);
}
class ft extends Yt {
  static isToolItem(t) {
    if (t == null)
      return !1;
    if (t instanceof ft)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === wl) && n.graph != null && n.cell != null && typeof n.config == "function" && typeof n.update == "function" && typeof n.focus == "function" && typeof n.blur == "function" && typeof n.show == "function" && typeof n.hide == "function" && typeof n.isVisible == "function";
  }
  static define(t) {
    const e = kr(uE(t.name), ft);
    return e.config(t), e;
  }
  static getDefaults() {
    return this.defaults;
  }
  static config(t) {
    this.defaults = this.getOptions(t);
  }
  static getOptions(t) {
    return pt(gt(this.getDefaults()), t);
  }
  get graph() {
    return this.cellView.graph;
  }
  get cell() {
    return this.cellView.cell;
  }
  get name() {
    return this.options.name;
  }
  get [Symbol.toStringTag]() {
    return wl;
  }
  constructor(t = {}) {
    super(), this.visible = !0, this.options = this.getOptions(t), this.container = ln(this.options.tagName || "g", this.options.isSVGElement !== !1), k(this.container, this.prefixClassName("cell-tool")), typeof this.options.className == "string" && k(this.container, this.options.className), this.init();
  }
  init() {
  }
  getOptions(t) {
    return this.constructor.getOptions(t);
  }
  delegateEvents() {
    return this.options.events && super.delegateEvents(this.options.events), this;
  }
  config(t, e) {
    return this.cellView = t, this.parent = e, this.stamp(this.container), this.cell.isEdge() ? k(this.container, this.prefixClassName("edge-tool")) : this.cell.isNode() && k(this.container, this.prefixClassName("node-tool")), this.name && this.container.setAttribute("data-tool-name", this.name), this.delegateEvents(), this;
  }
  render() {
    this.empty();
    const t = this.options.markup;
    if (t) {
      const e = Nt.parseJSONMarkup(t);
      this.container.appendChild(e.fragment), this.childNodes = e.selectors;
    }
    return this.onRender(), this;
  }
  onRender() {
  }
  update() {
    return this;
  }
  stamp(t) {
    t && t.setAttribute("data-cell-id", this.cellView.cell.id);
  }
  show() {
    return this.container.style.display = "", this.visible = !0, this;
  }
  hide() {
    return this.container.style.display = "none", this.visible = !1, this;
  }
  isVisible() {
    return this.visible;
  }
  focus() {
    const t = this.options.focusOpacity;
    return t != null && Number.isFinite(t) && (this.container.style.opacity = `${t}`), this.parent.focus(this), this;
  }
  blur() {
    return this.container.style.opacity = "", this.parent.blur(this), this;
  }
  guard(t) {
    return this.graph == null || this.cellView == null ? !0 : this.graph.view.guard(t, this.cellView);
  }
}
ft.toStringTag = `X6.${ft.name}`;
ft.defaults = {
  isSVGElement: !0,
  tagName: "g"
};
const wl = `X6.${ft.name}`;
class dE {
  constructor(t) {
    this.view = t;
  }
  get cell() {
    return this.view.cell;
  }
  getDefinition(t) {
    return this.cell.getAttrDefinition(t);
  }
  processAttrs(t, e) {
    let n, i, o, r;
    const a = [];
    return Object.keys(e).forEach((l) => {
      const c = e[l], h = this.getDefinition(l), u = N(jv, this.view, h, c, {
        elem: t,
        attrs: e,
        cell: this.cell,
        view: this.view
      });
      if (h && u)
        typeof h == "string" ? (n == null && (n = {}), n[h] = c) : c !== null && a.push({ name: l, definition: h });
      else {
        n == null && (n = {});
        const d = Sh.includes(l) ? l : Eh(l);
        n[d] = c;
      }
    }), a.forEach(({ name: l, definition: c }) => {
      const h = e[l];
      typeof c.set == "function" && (i == null && (i = {}), i[l] = h), typeof c.offset == "function" && (o == null && (o = {}), o[l] = h), typeof c.position == "function" && (r == null && (r = {}), r[l] = h);
    }), {
      raw: e,
      normal: n,
      set: i,
      offset: o,
      position: r
    };
  }
  mergeProcessedAttrs(t, e) {
    var n;
    t.set = Object.assign(Object.assign({}, t.set), e.set), t.position = Object.assign(Object.assign({}, t.position), e.position), t.offset = Object.assign(Object.assign({}, t.offset), e.offset);
    const i = (n = t.normal) === null || n === void 0 ? void 0 : n.transform;
    i != null && e.normal && (e.normal.transform = i), t.normal = e.normal;
  }
  findAttrs(t, e, n, i) {
    const o = [], r = new jo();
    return Object.keys(t).forEach((a) => {
      const l = t[a];
      if (!fe(l))
        return;
      const { isCSSSelector: c, elems: h } = Fu(a, e, i);
      n[a] = h;
      for (let u = 0, d = h.length; u < d; u += 1) {
        const g = h[u], f = i && i[a] === g, p = r.get(g);
        if (p) {
          p.array || (o.push(g), p.array = !0, p.attrs = [p.attrs], p.priority = [p.priority]);
          const m = p.attrs, b = p.priority;
          if (f)
            m.unshift(l), b.unshift(-1);
          else {
            const y = lC(b, c ? -1 : d);
            m.splice(y, 0, l), b.splice(y, 0, d);
          }
        } else
          r.set(g, {
            elem: g,
            attrs: l,
            priority: f ? -1 : d,
            array: !1
          });
      }
    }), o.forEach((a) => {
      const l = r.get(a), c = l.attrs;
      l.attrs = c.reduceRight((h, u) => pt(h, u), {});
    }), r;
  }
  updateRelativeAttrs(t, e, n) {
    const i = e.raw || {};
    let o = e.normal || {};
    const r = e.set, a = e.position, l = e.offset, c = () => ({
      elem: t,
      cell: this.cell,
      view: this.view,
      attrs: i,
      refBBox: n.clone()
    });
    if (r != null && Object.keys(r).forEach((m) => {
      const b = r[m], y = this.getDefinition(m);
      if (y != null) {
        const A = N(y.set, this.view, b, c());
        typeof A == "object" ? o = Object.assign(Object.assign({}, o), A) : A != null && (o[m] = A);
      }
    }), t instanceof HTMLElement) {
      this.view.setAttrs(o, t);
      return;
    }
    const h = o.transform, u = h ? `${h}` : null, d = di(u), g = new C(d.e, d.f);
    h && (delete o.transform, d.e = 0, d.f = 0);
    let f = !1;
    a != null && Object.keys(a).forEach((m) => {
      const b = a[m], y = this.getDefinition(m);
      if (y != null) {
        const A = N(y.position, this.view, b, c());
        A != null && (f = !0, g.translate(C.create(A)));
      }
    }), this.view.setAttrs(o, t);
    let p = !1;
    if (l != null) {
      const m = this.view.getBoundingRectOfElement(t);
      if (m.width > 0 && m.height > 0) {
        const b = Zt(m, d);
        Object.keys(l).forEach((y) => {
          const A = l[y], w = this.getDefinition(y);
          if (w != null) {
            const x = N(w.offset, this.view, A, {
              elem: t,
              cell: this.cell,
              view: this.view,
              attrs: i,
              refBBox: b
            });
            x != null && (p = !0, g.translate(C.create(x)));
          }
        });
      }
    }
    (h != null || f || p) && (g.round(1), d.e = g.x, d.f = g.y, t.setAttribute("transform", Qi(d)));
  }
  update(t, e, n) {
    const i = {}, o = this.findAttrs(n.attrs || e, t, i, n.selectors), r = n.attrs ? this.findAttrs(e, t, i, n.selectors) : o, a = [];
    o.each((h) => {
      const u = h.elem, d = h.attrs, g = this.processAttrs(u, d);
      if (g.set == null && g.position == null && g.offset == null)
        this.view.setAttrs(g.normal, u);
      else {
        const f = r.get(u), p = f ? f.attrs : null, m = p && d.ref == null ? p.ref : d.ref;
        let b;
        if (m) {
          if (b = (i[m] || this.view.find(m, t, n.selectors))[0], !b)
            throw new Error(`"${m}" reference does not exist.`);
        } else
          b = null;
        const y = {
          node: u,
          refNode: b,
          attributes: p,
          processedAttributes: g
        }, A = a.findIndex((w) => w.refNode === u);
        A > -1 ? a.splice(A, 0, y) : a.push(y);
      }
    });
    const l = new jo();
    let c;
    a.forEach((h) => {
      const u = h.node, d = h.refNode;
      let g;
      const f = d != null && n.rotatableNode != null && Mr(n.rotatableNode, d);
      if (d && (g = l.get(d)), !g) {
        const b = f ? n.rotatableNode : t;
        g = d ? we(d, { target: b }) : n.rootBBox, d && l.set(d, g);
      }
      let p;
      n.attrs && h.attributes ? (p = this.processAttrs(u, h.attributes), this.mergeProcessedAttrs(p, h.processedAttributes)) : p = h.processedAttributes;
      let m = g;
      f && n.rotatableNode != null && !n.rotatableNode.contains(u) && (c || (c = di(X(n.rotatableNode, "transform"))), m = Zt(g, c)), this.updateRelativeAttrs(u, p, m);
    });
  }
}
class gE {
  constructor(t) {
    this.view = t, this.clean();
  }
  clean() {
    this.elemCache && this.elemCache.dispose(), this.elemCache = new jo(), this.pathCache = {};
  }
  get(t) {
    return this.elemCache.has(t) || this.elemCache.set(t, {}), this.elemCache.get(t);
  }
  getData(t) {
    const e = this.get(t);
    return e.data || (e.data = {}), e.data;
  }
  getMatrix(t) {
    const e = this.get(t);
    if (e.matrix == null) {
      const n = this.view.container;
      e.matrix = DA(t, n);
    }
    return kt(e.matrix);
  }
  getShape(t) {
    const e = this.get(t);
    return e.shape == null && (e.shape = Vh(t)), e.shape.clone();
  }
  getBoundingRect(t) {
    const e = this.get(t);
    return e.boundingRect == null && (e.boundingRect = ZA(t)), e.boundingRect.clone();
  }
}
class fE {
  get cell() {
    return this.view.cell;
  }
  constructor(t, e, n = []) {
    this.view = t;
    const i = {}, o = {};
    let r = 0;
    Object.keys(e).forEach((l) => {
      let c = e[l];
      Array.isArray(c) || (c = [c]), c.forEach((h) => {
        let u = i[h];
        u || (r += 1, u = i[h] = 1 << r), o[l] |= u;
      });
    });
    let a = n;
    if (Array.isArray(a) || (a = [a]), a.forEach((l) => {
      i[l] || (r += 1, i[l] = 1 << r);
    }), r > 25)
      throw new Error("Maximum number of flags exceeded.");
    this.flags = i, this.attrs = o, this.bootstrap = n;
  }
  getFlag(t) {
    const e = this.flags;
    return e == null ? 0 : Array.isArray(t) ? t.reduce((n, i) => n | e[i], 0) : e[t] | 0;
  }
  hasAction(t, e) {
    return t & this.getFlag(e);
  }
  removeAction(t, e) {
    return t ^ t & this.getFlag(e);
  }
  getBootstrapFlag() {
    return this.getFlag(this.bootstrap);
  }
  getChangedFlag() {
    let t = 0;
    return this.attrs && Object.keys(this.attrs).forEach((e) => {
      this.cell.hasChanged(e) && (t |= this.attrs[e]);
    }), t;
  }
}
class It extends Yt {
  static getDefaults() {
    return It.defaults;
  }
  static isCellView(t) {
    if (t == null)
      return !1;
    if (t instanceof It)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === vl) && typeof n.isNodeView == "function" && typeof n.isEdgeView == "function" && typeof n.confirmUpdate == "function";
  }
  static config(t) {
    It.defaults = It.getOptions(t);
  }
  static getOptions(t) {
    const e = (c, h) => h != null ? ch([
      ...Array.isArray(c) ? c : [c],
      ...Array.isArray(h) ? h : [h]
    ]) : Array.isArray(c) ? [...c] : [c], n = gt(It.getDefaults()), { bootstrap: i, actions: o, events: r, documentEvents: a } = t, l = G(t, ["bootstrap", "actions", "events", "documentEvents"]);
    return i && (n.bootstrap = e(n.bootstrap, i)), o && Object.entries(o).forEach(([c, h]) => {
      const u = n.actions[c];
      h && u ? n.actions[c] = e(u, h) : h && (n.actions[c] = e(h));
    }), r && (n.events = Object.assign(Object.assign({}, n.events), r)), t.documentEvents && (n.documentEvents = Object.assign(Object.assign({}, n.documentEvents), a)), pt(n, l);
  }
  get [Symbol.toStringTag]() {
    return vl;
  }
  constructor(t, e = {}) {
    super(), this.cell = t, this.options = this.ensureOptions(e), this.graph = this.options.graph, this.attr = new dE(this), this.flag = new fE(this, this.options.actions, this.options.bootstrap), this.cache = new gE(this), this.setContainer(this.ensureContainer()), this.setup(), this.init();
  }
  init() {
  }
  onRemove() {
    this.removeTools();
  }
  get priority() {
    return this.options.priority;
  }
  get rootSelector() {
    return this.options.rootSelector;
  }
  getConstructor() {
    return this.constructor;
  }
  ensureOptions(t) {
    return this.getConstructor().getOptions(t);
  }
  getContainerTagName() {
    return this.options.isSvgElement ? "g" : "div";
  }
  getContainerStyle() {
  }
  getContainerAttrs() {
    return {
      "data-cell-id": this.cell.id,
      "data-shape": this.cell.shape
    };
  }
  getContainerClassName() {
    return this.prefixClassName("cell");
  }
  ensureContainer() {
    return ln(this.getContainerTagName(), this.options.isSvgElement);
  }
  setContainer(t) {
    if (this.container !== t) {
      this.undelegateEvents(), this.container = t, this.options.events != null && this.delegateEvents(this.options.events);
      const e = this.getContainerAttrs();
      e != null && this.setAttrs(e, t);
      const n = this.getContainerStyle();
      n != null && this.setStyle(n, t);
      const i = this.getContainerClassName();
      i != null && this.addClass(i, t);
    }
    return this;
  }
  isNodeView() {
    return !1;
  }
  isEdgeView() {
    return !1;
  }
  render() {
    return this;
  }
  confirmUpdate(t, e = {}) {
    return 0;
  }
  getBootstrapFlag() {
    return this.flag.getBootstrapFlag();
  }
  getFlag(t) {
    return this.flag.getFlag(t);
  }
  hasAction(t, e) {
    return this.flag.hasAction(t, e);
  }
  removeAction(t, e) {
    return this.flag.removeAction(t, e);
  }
  handleAction(t, e, n, i) {
    if (this.hasAction(t, e)) {
      n();
      const o = [e];
      return i && (typeof i == "string" ? o.push(i) : o.push(...i)), this.removeAction(t, o);
    }
    return t;
  }
  setup() {
    this.cell.on("changed", this.onCellChanged, this);
  }
  onCellChanged({ options: t }) {
    this.onAttrsChange(t);
  }
  onAttrsChange(t) {
    let e = this.flag.getChangedFlag();
    t.updated || !e || (t.dirty && this.hasAction(e, "update") && (e |= this.getFlag("render")), t.toolId && (t.async = !1), this.graph != null && this.graph.renderer.requestViewUpdate(this, e, t));
  }
  parseJSONMarkup(t, e) {
    const n = Nt.parseJSONMarkup(t), i = n.selectors, o = this.rootSelector;
    if (e && o) {
      if (i[o])
        throw new Error("Invalid root selector");
      i[o] = e;
    }
    return n;
  }
  can(t) {
    let e = this.graph.options.interacting;
    if (typeof e == "function" && (e = N(e, this.graph, this)), typeof e == "object") {
      let n = e[t];
      return typeof n == "function" && (n = N(n, this.graph, this)), n !== !1;
    }
    return typeof e == "boolean" ? e : !1;
  }
  cleanCache() {
    return this.cache.clean(), this;
  }
  getCache(t) {
    return this.cache.get(t);
  }
  getDataOfElement(t) {
    return this.cache.getData(t);
  }
  getMatrixOfElement(t) {
    return this.cache.getMatrix(t);
  }
  getShapeOfElement(t) {
    return this.cache.getShape(t);
  }
  getBoundingRectOfElement(t) {
    return this.cache.getBoundingRect(t);
  }
  getBBoxOfElement(t) {
    const e = this.getBoundingRectOfElement(t), n = this.getMatrixOfElement(t), i = this.getRootRotatedMatrix(), o = this.getRootTranslatedMatrix();
    return Zt(e, o.multiply(i).multiply(n));
  }
  getUnrotatedBBoxOfElement(t) {
    const e = this.getBoundingRectOfElement(t), n = this.getMatrixOfElement(t), i = this.getRootTranslatedMatrix();
    return Zt(e, i.multiply(n));
  }
  getBBox(t = {}) {
    let e;
    if (t.useCellGeometry) {
      const n = this.cell, i = n.isNode() ? n.getAngle() : 0;
      e = n.getBBox().bbox(i);
    } else
      e = this.getBBoxOfElement(this.container);
    return this.graph.coord.localToGraphRect(e);
  }
  getRootTranslatedMatrix() {
    const t = this.cell, e = t.isNode() ? t.getPosition() : { x: 0, y: 0 };
    return kt().translate(e.x, e.y);
  }
  getRootRotatedMatrix() {
    let t = kt();
    const e = this.cell, n = e.isNode() ? e.getAngle() : 0;
    if (n) {
      const i = e.getBBox(), o = i.width / 2, r = i.height / 2;
      t = t.translate(o, r).rotate(n).translate(-o, -r);
    }
    return t;
  }
  findMagnet(t = this.container) {
    return this.findByAttr("magnet", t);
  }
  updateAttrs(t, e, n = {}) {
    n.rootBBox == null && (n.rootBBox = new I()), n.selectors == null && (n.selectors = this.selectors), this.attr.update(t, e, n);
  }
  isEdgeElement(t) {
    return this.cell.isEdge() && (t == null || t === this.container);
  }
  // #region highlight
  prepareHighlight(t, e = {}) {
    const n = t || this.container;
    return e.partial = n === this.container, n;
  }
  highlight(t, e = {}) {
    const n = this.prepareHighlight(t, e);
    return this.notify("cell:highlight", {
      magnet: n,
      options: e,
      view: this,
      cell: this.cell
    }), this.isEdgeView() ? this.notify("edge:highlight", {
      magnet: n,
      options: e,
      view: this,
      edge: this.cell,
      cell: this.cell
    }) : this.isNodeView() && this.notify("node:highlight", {
      magnet: n,
      options: e,
      view: this,
      node: this.cell,
      cell: this.cell
    }), this;
  }
  unhighlight(t, e = {}) {
    const n = this.prepareHighlight(t, e);
    return this.notify("cell:unhighlight", {
      magnet: n,
      options: e,
      view: this,
      cell: this.cell
    }), this.isNodeView() ? this.notify("node:unhighlight", {
      magnet: n,
      options: e,
      view: this,
      node: this.cell,
      cell: this.cell
    }) : this.isEdgeView() && this.notify("edge:unhighlight", {
      magnet: n,
      options: e,
      view: this,
      edge: this.cell,
      cell: this.cell
    }), this;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  notifyUnhighlight(t, e) {
  }
  // #endregion
  getEdgeTerminal(t, e, n, i, o) {
    const r = this.cell, a = this.findAttr("port", t), l = t.getAttribute("data-selector"), c = { cell: r.id };
    return l != null && (c.magnet = l), a != null ? (c.port = a, r.isNode() && !r.hasPort(a) && l == null && (c.selector = this.getSelector(t))) : l == null && this.container !== t && (c.selector = this.getSelector(t)), c;
  }
  getMagnetFromEdgeTerminal(t) {
    const e = this.cell, n = this.container, i = t.port;
    let o = t.magnet, r;
    return i != null && e.isNode() && e.hasPort(i) ? r = this.findPortElem(i, o) || n : (o || (o = t.selector), !o && i != null && (o = `[port="${i}"]`), r = this.findOne(o, n, this.selectors)), r;
  }
  hasTools(t) {
    const e = this.tools;
    return e == null ? !1 : t == null ? !0 : e.name === t;
  }
  addTools(t) {
    if (this.removeTools(), t) {
      if (!this.can("toolsAddable"))
        return this;
      const e = cn.isToolsView(t) ? t : new cn(t);
      this.tools = e, e.config({ view: this }), e.mount();
    }
    return this;
  }
  updateTools(t = {}) {
    return this.tools && this.tools.update(t), this;
  }
  removeTools() {
    return this.tools && (this.tools.remove(), this.tools = null), this;
  }
  hideTools() {
    return this.tools && this.tools.hide(), this;
  }
  showTools() {
    return this.tools && this.tools.show(), this;
  }
  renderTools() {
    const t = this.cell.getTools();
    return this.addTools(t), this;
  }
  notify(t, e) {
    return this.trigger(t, e), this.graph.trigger(t, e), this;
  }
  getEventArgs(t, e, n) {
    const i = this, o = i.cell;
    return e == null || n == null ? { e: t, view: i, cell: o } : { e: t, x: e, y: n, view: i, cell: o };
  }
  onClick(t, e, n) {
    this.notify("cell:click", this.getEventArgs(t, e, n));
  }
  onDblClick(t, e, n) {
    this.notify("cell:dblclick", this.getEventArgs(t, e, n));
  }
  onContextMenu(t, e, n) {
    this.notify("cell:contextmenu", this.getEventArgs(t, e, n));
  }
  onMouseDown(t, e, n) {
    this.cell.model && (this.cachedModelForMouseEvent = this.cell.model, this.cachedModelForMouseEvent.startBatch("mouse")), this.notify("cell:mousedown", this.getEventArgs(t, e, n));
  }
  onMouseUp(t, e, n) {
    this.notify("cell:mouseup", this.getEventArgs(t, e, n)), this.cachedModelForMouseEvent && (this.cachedModelForMouseEvent.stopBatch("mouse", { cell: this.cell }), this.cachedModelForMouseEvent = null);
  }
  onMouseMove(t, e, n) {
    this.notify("cell:mousemove", this.getEventArgs(t, e, n));
  }
  onMouseOver(t) {
    this.notify("cell:mouseover", this.getEventArgs(t));
  }
  onMouseOut(t) {
    this.notify("cell:mouseout", this.getEventArgs(t));
  }
  onMouseEnter(t) {
    this.notify("cell:mouseenter", this.getEventArgs(t));
  }
  onMouseLeave(t) {
    this.notify("cell:mouseleave", this.getEventArgs(t));
  }
  onMouseWheel(t, e, n, i) {
    this.notify("cell:mousewheel", Object.assign({ delta: i }, this.getEventArgs(t, e, n)));
  }
  onCustomEvent(t, e, n, i) {
    this.notify("cell:customevent", Object.assign({ name: e }, this.getEventArgs(t, n, i))), this.notify(e, Object.assign({}, this.getEventArgs(t, n, i)));
  }
  onMagnetMouseDown(t, e, n, i) {
  }
  onMagnetDblClick(t, e, n, i) {
  }
  onMagnetContextMenu(t, e, n, i) {
  }
  onLabelMouseDown(t, e, n) {
  }
  checkMouseleave(t) {
    const e = this.getEventTarget(t, { fromPoint: !0 }), n = this.graph.findViewByElem(e);
    n !== this && (this.onMouseLeave(t), n && n.onMouseEnter(t));
  }
  dispose() {
    this.cell.off("changed", this.onCellChanged, this);
  }
}
It.defaults = {
  isSvgElement: !0,
  rootSelector: "root",
  priority: 0,
  bootstrap: [],
  actions: {}
};
It.registry = yt.create({
  type: "view"
});
$([
  _()
], It.prototype, "dispose", null);
const vl = `X6.${It.name}`;
class cn extends Yt {
  static isToolsView(t) {
    if (t == null)
      return !1;
    if (t instanceof cn)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === xl) && n.graph != null && n.cell != null && typeof n.config == "function" && typeof n.update == "function" && typeof n.focus == "function" && typeof n.blur == "function" && typeof n.show == "function" && typeof n.hide == "function";
  }
  get name() {
    return this.options.name;
  }
  get graph() {
    return this.cellView.graph;
  }
  get cell() {
    return this.cellView.cell;
  }
  get [Symbol.toStringTag]() {
    return xl;
  }
  constructor(t = {}) {
    super(), this.svgContainer = this.createContainer(!0, t), this.htmlContainer = this.createContainer(!1, t), this.config(t);
  }
  createContainer(t, e) {
    const n = t ? ln("g", !0) : ln("div", !1);
    return k(n, this.prefixClassName("cell-tools")), e.className && k(n, e.className), n;
  }
  config(t) {
    if (this.options = Object.assign(Object.assign({}, this.options), t), !It.isCellView(t.view) || t.view === this.cellView)
      return this;
    this.cellView = t.view, this.cell.isEdge() ? (k(this.svgContainer, this.prefixClassName("edge-tools")), k(this.htmlContainer, this.prefixClassName("edge-tools"))) : this.cell.isNode() && (k(this.svgContainer, this.prefixClassName("node-tools")), k(this.htmlContainer, this.prefixClassName("node-tools"))), this.svgContainer.setAttribute("data-cell-id", this.cell.id), this.htmlContainer.setAttribute("data-cell-id", this.cell.id), this.name && (this.svgContainer.setAttribute("data-tools-name", this.name), this.htmlContainer.setAttribute("data-tools-name", this.name));
    const e = this.options.items;
    if (!Array.isArray(e))
      return this;
    this.tools = [];
    const n = [];
    e.forEach((i) => {
      ft.isToolItem(i) ? i.name === "vertices" ? n.unshift(i) : n.push(i) : (typeof i == "object" ? i.name : i) === "vertices" ? n.unshift(i) : n.push(i);
    });
    for (let i = 0; i < n.length; i += 1) {
      const o = n[i];
      let r;
      if (ft.isToolItem(o))
        r = o;
      else {
        const a = typeof o == "object" ? o.name : o, l = typeof o == "object" ? o.args || {} : {};
        if (a) {
          if (this.cell.isNode()) {
            const c = Mi.get(a);
            if (c)
              r = new c(l);
            else
              return Mi.onNotFound(a);
          } else if (this.cell.isEdge()) {
            const c = Bi.get(a);
            if (c)
              r = new c(l);
            else
              return Bi.onNotFound(a);
          }
        }
      }
      r && (r.config(this.cellView, this), r.render(), (r.options.isSVGElement !== !1 ? this.svgContainer : this.htmlContainer).appendChild(r.container), this.tools.push(r));
    }
    return this;
  }
  update(t = {}) {
    const e = this.tools;
    return e && e.forEach((n) => {
      t.toolId !== n.cid && n.isVisible() && n.update();
    }), this;
  }
  focus(t) {
    const e = this.tools;
    return e && e.forEach((n) => {
      t === n ? n.show() : n.hide();
    }), this;
  }
  blur(t) {
    const e = this.tools;
    return e && e.forEach((n) => {
      n !== t && !n.isVisible() && (n.show(), n.update());
    }), this;
  }
  hide() {
    return this.focus(null);
  }
  show() {
    return this.blur(null);
  }
  remove() {
    const t = this.tools;
    return t && (t.forEach((e) => e.remove()), this.tools = null), ee(this.svgContainer), ee(this.htmlContainer), super.remove();
  }
  mount() {
    const t = this.tools, e = this.cellView;
    if (e && t) {
      const n = t.some((o) => o.options.isSVGElement !== !1), i = t.some((o) => o.options.isSVGElement === !1);
      n && (this.options.local ? e.container : e.graph.view.decorator).appendChild(this.svgContainer), i && this.graph.container.appendChild(this.htmlContainer);
    }
    return this;
  }
}
cn.toStringTag = `X6.${cn.name}`;
const xl = `X6.${cn.name}`, pE = (s) => s;
function El(s, t) {
  return t === 0 ? "0%" : `${Math.round(s / t * 100)}%`;
}
function zu(s) {
  return (e, n, i, o) => n.isEdgeElement(i) ? bE(s, e, n, i, o) : mE(s, e, n, i, o);
}
function mE(s, t, e, n, i) {
  const o = e.cell, r = o.getAngle(), a = e.getUnrotatedBBoxOfElement(n), l = o.getBBox().getCenter(), c = C.create(i).rotate(r, l);
  let h = c.x - a.x, u = c.y - a.y;
  return s && (h = El(h, a.width), u = El(u, a.height)), t.anchor = {
    name: "topLeft",
    args: {
      dx: h,
      dy: u,
      rotate: !0
    }
  }, t;
}
function bE(s, t, e, n, i) {
  const o = e.getConnection();
  if (!o)
    return t;
  const r = o.closestPointLength(i);
  if (s) {
    const a = o.length();
    t.anchor = {
      name: "ratio",
      args: {
        ratio: r / a
      }
    };
  } else
    t.anchor = {
      name: "length",
      args: {
        length: r
      }
    };
  return t;
}
const yE = zu(!0), CE = zu(!1), AE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  noop: pE,
  pinAbsolute: CE,
  pinRelative: yE
}, Symbol.toStringTag, { value: "Module" })), Uu = AE, wE = yt.create({
  type: "connection strategy"
});
wE.register(Uu, !0);
function Ku(s, t, e, n) {
  return N(Uu.pinRelative, this.graph, {}, t, e, s, this.cell, n, {}).anchor;
}
function Ju(s, t) {
  return t ? s.cell.getBBox() : s.cell.isEdge() ? s.getConnection().bbox() : s.getUnrotatedBBoxOfElement(s.container);
}
class Fi extends ft {
  get type() {
    return this.options.type;
  }
  onRender() {
    k(this.container, this.prefixClassName(`edge-tool-${this.type}-anchor`)), this.toggleArea(!1), this.update();
  }
  update() {
    const t = this.type;
    return this.cellView.getTerminalView(t) ? (this.updateAnchor(), this.updateArea(), this.container.style.display = "") : this.container.style.display = "none", this;
  }
  updateAnchor() {
    const t = this.childNodes;
    if (!t)
      return;
    const e = t.anchor;
    if (!e)
      return;
    const n = this.type, i = this.cellView, o = this.options, r = i.getTerminalAnchor(n), a = i.cell.prop([n, "anchor"]);
    e.setAttribute("transform", `translate(${r.x}, ${r.y})`);
    const l = a ? o.customAnchorAttrs : o.defaultAnchorAttrs;
    l && Object.keys(l).forEach((c) => {
      e.setAttribute(c, l[c]);
    });
  }
  updateArea() {
    const t = this.childNodes;
    if (!t)
      return;
    const e = t.area;
    if (!e)
      return;
    const n = this.type, i = this.cellView, o = i.getTerminalView(n);
    if (o) {
      const r = o.cell, a = i.getTerminalMagnet(n);
      let l = this.options.areaPadding || 0;
      Number.isFinite(l) || (l = 0);
      let c, h, u;
      o.isEdgeElement(a) ? (c = o.getBBox(), h = 0, u = c.getCenter()) : (c = o.getUnrotatedBBoxOfElement(a), h = r.getAngle(), u = c.getCenter(), h && u.rotate(-h, r.getBBox().getCenter())), c.inflate(l), X(e, {
        x: -c.width / 2,
        y: -c.height / 2,
        width: c.width,
        height: c.height,
        transform: `translate(${u.x}, ${u.y}) rotate(${h})`
      });
    }
  }
  toggleArea(t) {
    if (this.childNodes) {
      const e = this.childNodes.area;
      e && (e.style.display = t ? "" : "none");
    }
  }
  onMouseDown(t) {
    this.guard(t) || (t.stopPropagation(), t.preventDefault(), this.graph.view.undelegateEvents(), this.options.documentEvents && this.delegateDocumentEvents(this.options.documentEvents), this.focus(), this.toggleArea(this.options.restrictArea), this.cell.startBatch("move-anchor", {
      ui: !0,
      toolId: this.cid
    }));
  }
  resetAnchor(t) {
    const e = this.type, n = this.cell;
    t ? n.prop([e, "anchor"], t, {
      rewrite: !0,
      ui: !0,
      toolId: this.cid
    }) : n.removeProp([e, "anchor"], {
      ui: !0,
      toolId: this.cid
    });
  }
  onMouseMove(t) {
    const e = this.type, n = this.cellView, i = n.getTerminalView(e);
    if (i == null)
      return;
    const o = this.normalizeEvent(t), r = i.cell, a = n.getTerminalMagnet(e);
    let l = this.graph.coord.clientToLocalPoint(o.clientX, o.clientY);
    const c = this.options.snap;
    if (typeof c == "function") {
      const d = N(c, n, l, i, a, e, n, this);
      l = C.create(d);
    }
    if (this.options.restrictArea)
      if (i.isEdgeElement(a)) {
        const d = i.getClosestPoint(l);
        d && (l = d);
      } else {
        const d = i.getUnrotatedBBoxOfElement(a), g = r.getAngle(), f = r.getBBox().getCenter(), p = l.clone().rotate(g, f);
        d.containsPoint(p) || (l = d.getNearestPointToPoint(p).rotate(-g, f));
      }
    let h;
    const u = this.options.anchor;
    typeof u == "function" && (h = N(u, n, l, i, a, e, n, this)), this.resetAnchor(h), this.update();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onMouseUp(t) {
    this.graph.view.delegateEvents(), this.undelegateDocumentEvents(), this.blur(), this.toggleArea(!1);
    const e = this.cellView;
    this.options.removeRedundancies && e.removeRedundantLinearVertices({ ui: !0, toolId: this.cid }), this.cell.stopBatch("move-anchor", { ui: !0, toolId: this.cid });
  }
  onDblClick() {
    const t = this.options.resetAnchor;
    t && this.resetAnchor(t === !0 ? void 0 : t), this.update();
  }
}
Fi.defaults = Object.assign(Object.assign({}, ft.getDefaults()), { tagName: "g", markup: [
  {
    tagName: "circle",
    selector: "anchor",
    attrs: {
      cursor: "pointer"
    }
  },
  {
    tagName: "rect",
    selector: "area",
    attrs: {
      "pointer-events": "none",
      fill: "none",
      stroke: "#33334F",
      "stroke-dasharray": "2,4",
      rx: 5,
      ry: 5
    }
  }
], events: {
  mousedown: "onMouseDown",
  touchstart: "onMouseDown",
  dblclick: "onDblClick"
}, documentEvents: {
  mousemove: "onMouseMove",
  touchmove: "onMouseMove",
  mouseup: "onMouseUp",
  touchend: "onMouseUp",
  touchcancel: "onMouseUp"
}, customAnchorAttrs: {
  "stroke-width": 4,
  stroke: "#33334F",
  fill: "#FFFFFF",
  r: 5
}, defaultAnchorAttrs: {
  "stroke-width": 2,
  stroke: "#FFFFFF",
  fill: "#33334F",
  r: 6
}, areaPadding: 6, snapRadius: 10, resetAnchor: !0, restrictArea: !0, removeRedundancies: !0, anchor: Ku, snap(s, t, e, n, i, o) {
  const r = o.options.snapRadius || 0, a = n === "source", l = a ? 0 : -1, c = this.cell.getVertexAt(l) || this.getTerminalAnchor(a ? "target" : "source");
  return c && (Math.abs(c.x - s.x) < r && (s.x = c.x), Math.abs(c.y - s.y) < r && (s.y = c.y)), s;
} });
class ju extends Fi {
}
ju.defaults = Object.assign(Object.assign({}, Fi.getDefaults()), { name: "source-anchor", type: "source" });
class Gu extends Fi {
}
Gu.defaults = Object.assign(Object.assign({}, Fi.getDefaults()), { name: "target-anchor", type: "target" });
class zi extends ft {
  get type() {
    return this.options.type;
  }
  get ratio() {
    return this.options.ratio;
  }
  init() {
    if (this.options.attrs) {
      const t = this.options.attrs, { class: e } = t, n = G(t, ["class"]);
      this.setAttrs(n, this.container), e && k(this.container, e);
    }
  }
  onRender() {
    k(this.container, this.prefixClassName(`edge-tool-${this.type}-arrowhead`)), this.update();
  }
  update() {
    const t = this.ratio, e = this.cellView, n = e.getTangentAtRatio(t), i = n ? n.start : e.getPointAtRatio(t), o = n && n.vector().vectorAngle(new C(1, 0)) || 0;
    if (!i)
      return this;
    const r = kt().translate(i.x, i.y).rotate(o);
    return On(this.container, r, { absolute: !0 }), this;
  }
  onMouseDown(t) {
    if (this.guard(t))
      return;
    t.stopPropagation(), t.preventDefault();
    const e = this.cellView;
    if (e.can("arrowheadMovable")) {
      e.cell.startBatch("move-arrowhead", {
        ui: !0,
        toolId: this.cid
      });
      const n = this.graph.snapToGrid(t.clientX, t.clientY), i = e.prepareArrowheadDragging(this.type, {
        x: n.x,
        y: n.y,
        options: Object.assign(Object.assign({}, this.options), { toolId: this.cid })
      });
      this.cellView.setEventData(t, i), this.delegateDocumentEvents(this.options.documentEvents, t.data), e.graph.view.undelegateEvents(), this.container.style.pointerEvents = "none";
    }
    this.focus();
  }
  onMouseMove(t) {
    const e = this.normalizeEvent(t), n = this.graph.snapToGrid(e.clientX, e.clientY);
    this.cellView.onMouseMove(e, n.x, n.y), this.update();
  }
  onMouseUp(t) {
    this.undelegateDocumentEvents();
    const e = this.normalizeEvent(t), n = this.cellView, i = this.graph.snapToGrid(e.clientX, e.clientY);
    n.onMouseUp(e, i.x, i.y), this.graph.view.delegateEvents(), this.blur(), this.container.style.pointerEvents = "", n.cell.stopBatch("move-arrowhead", {
      ui: !0,
      toolId: this.cid
    });
  }
}
zi.defaults = Object.assign(Object.assign({}, ft.getDefaults()), { tagName: "path", isSVGElement: !0, events: {
  mousedown: "onMouseDown",
  touchstart: "onMouseDown"
}, documentEvents: {
  mousemove: "onMouseMove",
  touchmove: "onMouseMove",
  mouseup: "onMouseUp",
  touchend: "onMouseUp",
  touchcancel: "onMouseUp"
} });
class Vu extends zi {
}
Vu.defaults = Object.assign(Object.assign({}, zi.getDefaults()), { name: "source-arrowhead", type: "source", ratio: 0, attrs: {
  d: "M 10 -8 -10 0 10 8 Z",
  fill: "#333",
  stroke: "#fff",
  "stroke-width": 2,
  cursor: "move"
} });
class Yu extends zi {
}
Yu.defaults = Object.assign(Object.assign({}, zi.getDefaults()), { name: "target-arrowhead", type: "target", ratio: 1, attrs: {
  d: "M -10 -8 10 0 -10 8 Z",
  fill: "#333",
  stroke: "#fff",
  "stroke-width": 2,
  cursor: "move"
} });
class Ur extends ft {
  onRender() {
    if (k(this.container, this.prefixClassName("cell-tool-boundary")), this.options.attrs) {
      const t = this.options.attrs, { class: e } = t, n = G(t, ["class"]);
      X(this.container, ui(n)), e && k(this.container, e);
    }
    this.update();
  }
  update() {
    const t = this.cellView, e = this.options, { useCellGeometry: n, rotate: i } = e, o = he(e.padding);
    let r = Ju(t, n);
    this.parent.options.local && (r = r.translate({
      x: -r.x,
      y: -r.y
    })), r = r.moveAndExpand({
      x: -o.left,
      y: -o.top,
      width: o.left + o.right,
      height: o.top + o.bottom
    });
    const a = t.cell;
    if (a.isNode()) {
      const l = a.getAngle();
      if (l != null)
        if (i && !this.parent.options.local) {
          const c = a.getBBox().getCenter();
          Uo(this.container, l, c.x, c.y, {
            absolute: !0
          });
        } else i || (r = r.bbox(l));
    }
    return X(this.container, r.toJSON()), this;
  }
}
Ur.defaults = Object.assign(Object.assign({}, ft.getDefaults()), { name: "boundary", tagName: "rect", padding: 10, useCellGeometry: !0, attrs: {
  fill: "none",
  stroke: "#333",
  "stroke-width": 0.5,
  "stroke-dasharray": "5, 5",
  "pointer-events": "none"
} });
class Ui extends ft {
  onRender() {
    k(this.container, this.prefixClassName("cell-tool-button")), this.update();
  }
  update() {
    return this.updatePosition(), this;
  }
  updatePosition() {
    const e = this.cellView.cell.isEdge() ? this.getEdgeMatrix() : this.getNodeMatrix();
    On(this.container, e, { absolute: !0 });
  }
  getNodeMatrix() {
    const t = this.cellView, e = this.options;
    let { x: n = 0, y: i = 0 } = e;
    const { offset: o, useCellGeometry: r, rotate: a } = e;
    let l = Ju(t, r);
    const c = t.cell.getAngle();
    a || (l = l.bbox(c));
    let h = 0, u = 0;
    typeof o == "number" ? (h = o, u = o) : typeof o == "object" && (h = o.x, u = o.y), n = Wt(n, l.width), i = Wt(i, l.height);
    let d = kt();
    return this.parent.options.local ? d = d.translate(l.width / 2, l.height / 2) : d = d.translate(l.x + l.width / 2, l.y + l.height / 2), a && (d = d.rotate(c)), d = d.translate(n + h - l.width / 2, i + u - l.height / 2), d;
  }
  getEdgeMatrix() {
    const t = this.cellView, e = this.options, { offset: n = 0, distance: i = 0, rotate: o } = e, r = Wt(i, 1), a = r >= 0 && r <= 1 ? t.getTangentAtRatio(r) : t.getTangentAtLength(r), l = a ? a.start : t.getConnection().start, c = a && a.vector().vectorAngle(new C(1, 0)) || 0;
    let h = kt().translate(l.x, l.y).rotate(c);
    return typeof n == "object" ? h = h.translate(n.x || 0, n.y || 0) : h = h.translate(0, n), o || (h = h.rotate(-c)), h;
  }
  onMouseDown(t) {
    if (this.guard(t))
      return;
    t.stopPropagation(), t.preventDefault();
    const e = this.options.onClick;
    typeof e == "function" && N(e, this.cellView, {
      e: t,
      view: this.cellView,
      cell: this.cellView.cell,
      btn: this
    });
  }
}
Ui.defaults = Object.assign(Object.assign({}, ft.getDefaults()), { name: "button", useCellGeometry: !0, events: {
  mousedown: "onMouseDown",
  touchstart: "onMouseDown"
} });
class Kr extends Ui {
}
Kr.defaults = Object.assign(Object.assign({}, Ui.getDefaults()), { name: "button-remove", markup: [
  {
    tagName: "circle",
    selector: "button",
    attrs: {
      r: 7,
      fill: "#FF1D00",
      cursor: "pointer"
    }
  },
  {
    tagName: "path",
    selector: "icon",
    attrs: {
      d: "M -3 -3 3 3 M -3 3 3 -3",
      fill: "none",
      stroke: "#FFFFFF",
      "stroke-width": 2,
      "pointer-events": "none"
    }
  }
], distance: 60, offset: 0, useCellGeometry: !0, onClick({ view: s, btn: t }) {
  t.parent.remove(), s.cell.remove({ ui: !0, toolId: t.cid });
} });
class Ki extends ft {
  constructor() {
    super(...arguments), this.labelIndex = -1, this.distance = 0.5, this.dblClick = this.onCellDblClick.bind(this);
  }
  onRender() {
    const t = this.cellView;
    t && t.on("cell:dblclick", this.dblClick);
  }
  createElement() {
    const t = [
      this.prefixClassName(`${this.cell.isEdge() ? "edge" : "node"}-tool-editor`),
      this.prefixClassName("cell-tool-editor")
    ];
    this.editor = ln("div", !1), this.addClass(t, this.editor), this.editor.contentEditable = "true", this.container.appendChild(this.editor);
  }
  removeElement() {
    this.undelegateDocumentEvents(), this.editor && (this.container.removeChild(this.editor), this.editor = null);
  }
  updateEditor() {
    const { cell: t, editor: e } = this;
    if (!e)
      return;
    const { style: n } = e;
    t.isNode() ? this.updateNodeEditorTransform() : t.isEdge() && this.updateEdgeEditorTransform();
    const { attrs: i } = this.options;
    n.fontSize = `${i.fontSize}px`, n.fontFamily = i.fontFamily, n.color = i.color, n.backgroundColor = i.backgroundColor;
    const o = this.getCellText() || "";
    return e.innerText = o, this.setCellText(""), this;
  }
  updateNodeEditorTransform() {
    const { graph: t, cell: e, editor: n } = this;
    if (!n)
      return;
    let i = C.create(), o = 20, r = "", { x: a, y: l } = this.options;
    const { width: c, height: h } = this.options;
    if (typeof a < "u" && typeof l < "u") {
      const g = e.getBBox();
      a = Wt(a, g.width), l = Wt(l, g.height), i = g.topLeft.translate(a, l), o = g.width - a * 2;
    } else {
      const g = e.getBBox();
      i = g.center, o = g.width - 4, r = "translate(-50%, -50%)";
    }
    const u = t.scale(), { style: d } = n;
    i = t.localToGraph(i), d.left = `${i.x}px`, d.top = `${i.y}px`, d.transform = `scale(${u.sx}, ${u.sy}) ${r}`, d.minWidth = `${o}px`, typeof c == "number" && (d.width = `${c}px`), typeof h == "number" && (d.height = `${h}px`);
  }
  updateEdgeEditorTransform() {
    if (!this.event)
      return;
    const { graph: t, editor: e } = this;
    if (!e)
      return;
    let n = C.create(), i = 20;
    const { style: o } = e, r = this.event.target, a = r.parentElement;
    if (a && Ce(a, this.prefixClassName("edge-label"))) {
      const h = a.getAttribute("data-index") || "0";
      this.labelIndex = parseInt(h, 10);
      const u = a.getAttribute("transform"), { translation: d } = Js(u);
      n = new C(d.tx, d.ty), i = we(r).width;
    } else {
      if (!this.options.labelAddable)
        return this;
      n = t.clientToLocal(C.create(this.event.clientX, this.event.clientY));
      const u = this.cellView.path.closestPointLength(n);
      this.distance = u, this.labelIndex = -1;
    }
    n = t.localToGraph(n);
    const c = t.scale();
    o.left = `${n.x}px`, o.top = `${n.y}px`, o.minWidth = `${i}px`, o.transform = `scale(${c.sx}, ${c.sy}) translate(-50%, -50%)`;
  }
  updateCell() {
    const t = this.editor.innerText.replace(/\n$/, "") || "";
    this.setCellText(t !== "" ? t : null), this.removeElement();
  }
  onDocumentMouseUp(t) {
    this.editor && t.target !== this.editor && this.updateCell();
  }
  onCellDblClick({ e: t }) {
    this.editor || (t.stopPropagation(), this.removeElement(), this.event = t, this.createElement(), this.updateEditor(), this.autoFocus(), this.delegateDocumentEvents(this.options.documentEvents));
  }
  onMouseDown(t) {
    t.stopPropagation();
  }
  autoFocus() {
    setTimeout(() => {
      this.editor && (this.editor.focus(), this.selectText());
    });
  }
  selectText() {
    if (window.getSelection && this.editor) {
      const t = document.createRange(), e = window.getSelection();
      t.selectNodeContents(this.editor), e.removeAllRanges(), e.addRange(t);
    }
  }
  getCellText() {
    const { getText: t } = this.options;
    if (typeof t == "function")
      return N(t, this.cellView, {
        cell: this.cell,
        index: this.labelIndex
      });
    if (typeof t == "string") {
      if (this.cell.isNode())
        return this.cell.attr(t);
      if (this.cell.isEdge() && this.labelIndex !== -1)
        return this.cell.prop(`labels/${this.labelIndex}/attrs/${t}`);
    }
  }
  setCellText(t) {
    const e = this.options.setText;
    if (typeof e == "function") {
      N(e, this.cellView, {
        cell: this.cell,
        value: t,
        index: this.labelIndex,
        distance: this.distance
      });
      return;
    }
    if (typeof e == "string") {
      if (this.cell.isNode()) {
        t !== null && this.cell.attr(e, t);
        return;
      }
      if (this.cell.isEdge()) {
        const n = this.cell;
        if (this.labelIndex === -1) {
          if (t) {
            const i = {
              position: {
                distance: this.distance
              },
              attrs: {}
            };
            jn(i, `attrs/${e}`, t), n.appendLabel(i);
          }
        } else
          t !== null ? n.prop(`labels/${this.labelIndex}/attrs/${e}`, t) : typeof this.labelIndex == "number" && n.removeLabelAt(this.labelIndex);
      }
    }
  }
  onRemove() {
    const t = this.cellView;
    t && t.off("cell:dblclick", this.dblClick), this.removeElement();
  }
}
Ki.defaults = Object.assign(Object.assign({}, ft.getDefaults()), { tagName: "div", isSVGElement: !1, events: {
  mousedown: "onMouseDown",
  touchstart: "onMouseDown"
}, documentEvents: {
  mouseup: "onDocumentMouseUp",
  touchend: "onDocumentMouseUp",
  touchcancel: "onDocumentMouseUp"
} });
class Hu extends Ki {
}
Hu.defaults = pt({}, Ki.defaults, {
  attrs: {
    fontSize: 14,
    fontFamily: "Arial, helvetica, sans-serif",
    color: "#000",
    backgroundColor: "#fff"
  },
  getText: "text/text",
  setText: "text/text"
});
class Wu extends Ki {
}
Wu.defaults = pt({}, Ki.defaults, {
  attrs: {
    fontSize: 14,
    fontFamily: "Arial, helvetica, sans-serif",
    color: "#000",
    backgroundColor: "#fff"
  },
  labelAddable: !0,
  getText: "label/text",
  setText: "label/text"
});
class Jr extends ft {
  constructor() {
    super(...arguments), this.handles = [];
  }
  get vertices() {
    return this.cellView.cell.getVertices();
  }
  update() {
    return this.render(), this;
  }
  getPoints() {
    const e = this.cellView.routePoints;
    if (e.length <= 2)
      return e;
    const n = [e[0]];
    for (let i = 1; i < e.length - 1; i++) {
      const o = n[n.length - 1], r = e[i], a = e[i + 1];
      (r.x - o.x) * (a.y - o.y) - (r.y - o.y) * (a.x - o.x) !== 0 && n.push(r);
    }
    return n.push(e[e.length - 1]), n;
  }
  onRender() {
    k(this.container, this.prefixClassName("edge-tool-segments")), this.resetHandles();
    const t = this.cellView, e = [...this.getPoints()];
    e.unshift(t.sourcePoint), e.push(t.targetPoint);
    for (let n = 0, i = e.length; n < i - 1; n += 1) {
      const o = e[n], r = e[n + 1], a = this.renderHandle(o, r, n);
      this.stamp(a.container), this.handles.push(a);
    }
    return this;
  }
  renderHandle(t, e, n) {
    const i = this.options.createHandle({
      index: n,
      graph: this.graph,
      guard: (o) => this.guard(o),
      attrs: this.options.attrs || {}
    });
    return this.options.processHandle && this.options.processHandle(i), this.updateHandle(i, t, e), this.container.appendChild(i.container), this.startHandleListening(i), i;
  }
  startHandleListening(t) {
    t.on("change", this.onHandleChange, this), t.on("changing", this.onHandleChanging, this), t.on("changed", this.onHandleChanged, this);
  }
  stopHandleListening(t) {
    t.off("change", this.onHandleChange, this), t.off("changing", this.onHandleChanging, this), t.off("changed", this.onHandleChanged, this);
  }
  resetHandles() {
    const t = this.handles;
    this.handles = [], t && t.forEach((e) => {
      this.stopHandleListening(e), e.remove();
    });
  }
  shiftHandleIndexes(t) {
    const e = this.handles;
    for (let n = 0, i = e.length; n < i; n += 1)
      e[n].options.index += t;
  }
  resetAnchor(t, e) {
    const n = this.cellView.cell, i = {
      ui: !0,
      toolId: this.cid
    };
    e ? n.prop([t, "anchor"], e, i) : n.removeProp([t, "anchor"], i);
  }
  snapHandle(t, e, n) {
    const i = t.options.axis, o = t.options.index, l = this.cellView.cell.getVertices(), c = l[o - 2] || n.sourceAnchor, h = l[o + 1] || n.targetAnchor, u = this.options.snapRadius;
    return Math.abs(e[i] - c[i]) < u ? e[i] = c[i] : Math.abs(e[i] - h[i]) < u && (e[i] = h[i]), e;
  }
  onHandleChanging({ handle: t, e }) {
    const n = this.graph, i = this.options, o = this.cellView, r = i.anchor, a = t.options.axis, l = t.options.index - 1, c = this.getEventData(e), h = this.normalizeEvent(e), u = n.snapToGrid(h.clientX, h.clientY), d = this.snapHandle(t, u.clone(), c), g = gt(this.vertices);
    let f = g[l], p = g[l + 1];
    const m = o.sourceView, b = o.sourceBBox;
    let y = !1, A = !1;
    if (f ? l === 0 ? b.containsPoint(f) ? (g.shift(), this.shiftHandleIndexes(-1), y = !0) : (f[a] = d[a], A = !0) : f[a] = d[a] : (f = o.sourceAnchor.toJSON(), f[a] = d[a], b.containsPoint(f) ? y = !0 : (g.unshift(f), this.shiftHandleIndexes(1), A = !0)), typeof r == "function" && m) {
      if (y) {
        const S = c.sourceAnchor.clone();
        S[a] = d[a];
        const B = N(r, o, S, m, o.sourceMagnet || m.container, "source", o, this);
        this.resetAnchor("source", B);
      }
      A && this.resetAnchor("source", c.sourceAnchorDef);
    }
    const w = o.targetView, x = o.targetBBox;
    let M = !1, v = !1;
    if (p ? l === g.length - 2 ? x.containsPoint(p) ? (g.pop(), M = !0) : (p[a] = d[a], v = !0) : p[a] = d[a] : (p = o.targetAnchor.toJSON(), p[a] = d[a], x.containsPoint(p) ? M = !0 : (g.push(p), v = !0)), typeof r == "function" && w) {
      if (M) {
        const S = c.targetAnchor.clone();
        S[a] = d[a];
        const B = N(r, o, S, w, o.targetMagnet || w.container, "target", o, this);
        this.resetAnchor("target", B);
      }
      v && this.resetAnchor("target", c.targetAnchorDef);
    }
    C.equalPoints(g, this.vertices) || this.cellView.cell.setVertices(g, { ui: !0, toolId: this.cid }), this.updateHandle(t, f, p, 0), i.stopPropagation || o.notifyMouseMove(h, u.x, u.y);
  }
  onHandleChange({ handle: t, e }) {
    const n = this.options, i = this.handles, o = this.cellView, r = t.options.index;
    if (Array.isArray(i)) {
      for (let a = 0, l = i.length; a < l; a += 1)
        a !== r && i[a].hide();
      if (this.focus(), this.setEventData(e, {
        sourceAnchor: o.sourceAnchor.clone(),
        targetAnchor: o.targetAnchor.clone(),
        sourceAnchorDef: gt(this.cell.prop(["source", "anchor"])),
        targetAnchorDef: gt(this.cell.prop(["target", "anchor"]))
      }), this.cell.startBatch("move-segment", { ui: !0, toolId: this.cid }), !n.stopPropagation) {
        const a = this.normalizeEvent(e), l = this.graph.snapToGrid(a.clientX, a.clientY);
        o.notifyMouseDown(a, l.x, l.y);
      }
    }
  }
  onHandleChanged({ e: t }) {
    const e = this.options, n = this.cellView;
    e.removeRedundancies && n.removeRedundantLinearVertices({ ui: !0, toolId: this.cid });
    const i = this.normalizeEvent(t), o = this.graph.snapToGrid(i.clientX, i.clientY);
    this.render(), this.blur(), this.cell.stopBatch("move-segment", { ui: !0, toolId: this.cid }), e.stopPropagation || n.notifyMouseUp(i, o.x, o.y), n.checkMouseleave(i), e.onChanged && e.onChanged({ edge: n.cell, edgeView: n });
  }
  updateHandle(t, e, n, i = 0) {
    const o = this.options.precision || 0, r = Math.abs(e.x - n.x) < o, a = Math.abs(e.y - n.y) < o;
    if (r || a) {
      const l = new R(e, n);
      if (l.length() < this.options.threshold)
        t.hide();
      else {
        const h = l.getCenter(), u = r ? "x" : "y";
        h[u] += i || 0;
        const d = l.vector().vectorAngle(new C(1, 0));
        t.updatePosition(h.x, h.y, d, this.cellView), t.show(), t.options.axis = u;
      }
    } else
      t.hide();
  }
  onRemove() {
    this.resetHandles();
  }
}
Jr.defaults = Object.assign(Object.assign({}, ft.defaults), { name: "segments", precision: 0.5, threshold: 40, snapRadius: 10, stopPropagation: !0, removeRedundancies: !0, attrs: {
  width: 20,
  height: 8,
  x: -10,
  y: -4,
  rx: 4,
  ry: 4,
  fill: "#333",
  stroke: "#fff",
  "stroke-width": 2
}, createHandle: (s) => new vE(s), anchor: Ku });
let vE = class extends Yt {
  constructor(t) {
    super(), this.options = t, this.render(), this.delegateEvents({
      mousedown: "onMouseDown",
      touchstart: "onMouseDown"
    });
  }
  render() {
    this.container = ln("rect", !0);
    const t = this.options.attrs;
    if (typeof t == "function") {
      const e = Jr.getDefaults();
      this.setAttrs(Object.assign(Object.assign({}, e.attrs), t(this)));
    } else
      this.setAttrs(t);
    this.addClass(this.prefixClassName("edge-tool-segment"));
  }
  updatePosition(t, e, n, i) {
    const o = i.getClosestPoint(new C(t, e)) || new C(t, e);
    let r = kt().translate(o.x, o.y);
    if (o.equals({ x: t, y: e }))
      r = r.rotate(n);
    else {
      let l = new R(t, e, o.x, o.y).vector().vectorAngle(new C(1, 0));
      l !== 0 && (l += 90), r = r.rotate(l);
    }
    this.setAttrs({
      transform: Qi(r),
      cursor: n % 180 === 0 ? "row-resize" : "col-resize"
    });
  }
  onMouseDown(t) {
    this.options.guard(t) || (this.trigger("change", { e: t, handle: this }), t.stopPropagation(), t.preventDefault(), this.options.graph.view.undelegateEvents(), this.delegateDocumentEvents({
      mousemove: "onMouseMove",
      touchmove: "onMouseMove",
      mouseup: "onMouseUp",
      touchend: "onMouseUp",
      touchcancel: "onMouseUp"
    }, t.data));
  }
  onMouseMove(t) {
    this.emit("changing", { e: t, handle: this });
  }
  onMouseUp(t) {
    this.emit("changed", { e: t, handle: this }), this.undelegateDocumentEvents(), this.options.graph.view.delegateEvents();
  }
  show() {
    this.container.style.display = "";
  }
  hide() {
    this.container.style.display = "none";
  }
};
const fo = nt.prefix("edge-tool-vertex-path");
class jr extends ft {
  constructor() {
    super(...arguments), this.handles = [];
  }
  get vertices() {
    return this.cellView.cell.getVertices();
  }
  onRender() {
    return this.addClass(this.prefixClassName("edge-tool-vertices")), this.options.addable && this.updatePath(), this.resetHandles(), this.renderHandles(), this;
  }
  update() {
    return this.vertices.length === this.handles.length ? this.updateHandles() : (this.resetHandles(), this.renderHandles()), this.options.addable && this.updatePath(), this;
  }
  resetHandles() {
    const t = this.handles;
    this.handles = [], t && t.forEach((e) => {
      this.stopHandleListening(e), e.remove();
    });
  }
  renderHandles() {
    const t = this.vertices;
    for (let e = 0, n = t.length; e < n; e += 1) {
      const i = t[e], o = this.options.createHandle, r = this.options.processHandle, a = o({
        index: e,
        graph: this.graph,
        guard: (l) => this.guard(l),
        // eslint-disable-line no-loop-func
        attrs: this.options.attrs || {}
      });
      r && r(a), a.updatePosition(i.x, i.y), this.stamp(a.container), this.container.appendChild(a.container), this.handles.push(a), this.startHandleListening(a);
    }
  }
  updateHandles() {
    const t = this.vertices;
    for (let e = 0, n = t.length; e < n; e += 1) {
      const i = t[e], o = this.handles[e];
      o && o.updatePosition(i.x, i.y);
    }
  }
  updatePath() {
    const t = this.childNodes.connection;
    t && t.setAttribute("d", this.cellView.getConnectionPathData());
  }
  startHandleListening(t) {
    const e = this.cellView;
    e.can("vertexMovable") && (t.on("change", this.onHandleChange, this), t.on("changing", this.onHandleChanging, this), t.on("changed", this.onHandleChanged, this)), e.can("vertexDeletable") && t.on("remove", this.onHandleRemove, this);
  }
  stopHandleListening(t) {
    const e = this.cellView;
    e.can("vertexMovable") && (t.off("change", this.onHandleChange, this), t.off("changing", this.onHandleChanging, this), t.off("changed", this.onHandleChanged, this)), e.can("vertexDeletable") && t.off("remove", this.onHandleRemove, this);
  }
  getNeighborPoints(t) {
    const e = this.cellView, n = this.vertices, i = t > 0 ? n[t - 1] : e.sourceAnchor, o = t < n.length - 1 ? n[t + 1] : e.targetAnchor;
    return {
      prev: C.create(i),
      next: C.create(o)
    };
  }
  getMouseEventArgs(t) {
    const e = this.normalizeEvent(t), { x: n, y: i } = this.graph.snapToGrid(e.clientX, e.clientY);
    return { e, x: n, y: i };
  }
  onHandleChange({ e: t }) {
    this.focus();
    const e = this.cellView;
    if (e.cell.startBatch("move-vertex", { ui: !0, toolId: this.cid }), !this.options.stopPropagation) {
      const { e: n, x: i, y: o } = this.getMouseEventArgs(t);
      this.eventData(n, { start: { x: i, y: o } }), e.notifyMouseDown(n, i, o);
    }
  }
  onHandleChanging({ handle: t, e }) {
    const n = this.cellView, i = t.options.index, { e: o, x: r, y: a } = this.getMouseEventArgs(e), l = { x: r, y: a };
    this.snapVertex(l, i), n.cell.setVertexAt(i, l, { ui: !0, toolId: this.cid }), t.updatePosition(l.x, l.y), this.options.stopPropagation || n.notifyMouseMove(o, r, a);
  }
  stopBatch(t) {
    this.cell.stopBatch("move-vertex", { ui: !0, toolId: this.cid }), t && this.cell.stopBatch("add-vertex", { ui: !0, toolId: this.cid });
  }
  onHandleChanged({ e: t }) {
    const e = this.options, n = this.cellView;
    if (e.addable && this.updatePath(), !e.removeRedundancies) {
      this.stopBatch(this.eventData(t).vertexAdded);
      return;
    }
    n.removeRedundantLinearVertices({
      ui: !0,
      toolId: this.cid
    }) && this.render(), this.blur(), this.stopBatch(this.eventData(t).vertexAdded);
    const { e: o, x: r, y: a } = this.getMouseEventArgs(t);
    if (!this.options.stopPropagation) {
      n.notifyMouseUp(o, r, a);
      const { start: l } = this.eventData(o);
      if (l) {
        const { x: c, y: h } = l;
        c === r && h === a && n.onClick(o, r, a);
      }
    }
    n.checkMouseleave(o), e.onChanged && e.onChanged({ edge: n.cell, edgeView: n });
  }
  snapVertex(t, e) {
    const n = this.options.snapRadius || 0;
    if (n > 0) {
      const i = this.getNeighborPoints(e), o = i.prev, r = i.next;
      Math.abs(t.x - o.x) < n ? t.x = o.x : Math.abs(t.x - r.x) < n && (t.x = r.x), Math.abs(t.y - o.y) < n ? t.y = i.prev.y : Math.abs(t.y - r.y) < n && (t.y = r.y);
    }
  }
  onHandleRemove({ handle: t, e }) {
    if (this.options.removable) {
      const n = t.options.index, i = this.cellView;
      i.cell.removeVertexAt(n, { ui: !0 }), this.options.addable && this.updatePath(), i.checkMouseleave(this.normalizeEvent(e));
    }
  }
  allowAddVertex(t) {
    const e = this.guard(t), n = this.options.addable && this.cellView.can("vertexAddable"), i = this.options.modifiers ? Ge(t, this.options.modifiers) : !0;
    return !e && n && i;
  }
  onPathMouseDown(t) {
    const e = this.cellView;
    if (!this.allowAddVertex(t))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = this.normalizeEvent(t), i = this.graph.snapToGrid(n.clientX, n.clientY).toJSON();
    e.cell.startBatch("add-vertex", { ui: !0, toolId: this.cid });
    const o = e.getVertexIndex(i.x, i.y);
    this.snapVertex(i, o), e.cell.insertVertex(i, o, {
      ui: !0,
      toolId: this.cid
    }), this.render();
    const r = this.handles[o];
    this.eventData(n, { vertexAdded: !0 }), r.onMouseDown(n);
  }
  onRemove() {
    this.resetHandles();
  }
}
jr.defaults = Object.assign(Object.assign({}, ft.getDefaults()), { name: "vertices", snapRadius: 20, addable: !0, removable: !0, removeRedundancies: !0, stopPropagation: !0, attrs: {
  r: 6,
  fill: "#333",
  stroke: "#fff",
  cursor: "move",
  "stroke-width": 2
}, createHandle: (s) => new xE(s), markup: [
  {
    tagName: "path",
    selector: "connection",
    className: fo,
    attrs: {
      fill: "none",
      stroke: "transparent",
      "stroke-width": 10,
      cursor: "pointer"
    }
  }
], events: {
  [`mousedown .${fo}`]: "onPathMouseDown",
  [`touchstart .${fo}`]: "onPathMouseDown"
} });
class xE extends Yt {
  get graph() {
    return this.options.graph;
  }
  constructor(t) {
    super(), this.options = t, this.render(), this.delegateEvents({
      mousedown: "onMouseDown",
      touchstart: "onMouseDown",
      dblclick: "onDoubleClick"
    });
  }
  render() {
    this.container = ln("circle", !0);
    const t = this.options.attrs;
    if (typeof t == "function") {
      const e = jr.getDefaults();
      this.setAttrs(Object.assign(Object.assign({}, e.attrs), t(this)));
    } else
      this.setAttrs(t);
    this.addClass(this.prefixClassName("edge-tool-vertex"));
  }
  updatePosition(t, e) {
    this.setAttrs({ cx: t, cy: e });
  }
  onMouseDown(t) {
    this.options.guard(t) || (t.stopPropagation(), t.preventDefault(), this.graph.view.undelegateEvents(), this.delegateDocumentEvents({
      mousemove: "onMouseMove",
      touchmove: "onMouseMove",
      mouseup: "onMouseUp",
      touchend: "onMouseUp",
      touchcancel: "onMouseUp"
    }, t.data), this.emit("change", { e: t, handle: this }));
  }
  onMouseMove(t) {
    this.emit("changing", { e: t, handle: this });
  }
  onMouseUp(t) {
    this.emit("changed", { e: t, handle: this }), this.undelegateDocumentEvents(), this.graph.view.delegateEvents();
  }
  onDoubleClick(t) {
    this.emit("remove", { e: t, handle: this });
  }
}
const EE = {
  boundary: Ur,
  button: Ui,
  "button-remove": Kr,
  "node-editor": Hu
}, Mi = yt.create({
  type: "node tool",
  process(s, t) {
    if (typeof t == "function")
      return t;
    let e = ft;
    const { inherit: n } = t, i = G(t, ["inherit"]);
    if (n) {
      const o = this.get(n);
      o == null ? this.onNotFound(n, "inherited") : e = o;
    }
    return i.name == null && (i.name = s), e.define.call(e, i);
  }
});
Mi.register(EE, !0);
const SE = {
  boundary: Ur,
  vertices: jr,
  segments: Jr,
  button: Ui,
  "button-remove": Kr,
  "source-anchor": ju,
  "target-anchor": Gu,
  "source-arrowhead": Vu,
  "target-arrowhead": Yu,
  "edge-editor": Wu
}, Bi = yt.create({
  type: "edge tool",
  process(s, t) {
    if (typeof t == "function")
      return t;
    let e = ft;
    const { inherit: n } = t, i = G(t, ["inherit"]);
    if (n) {
      const o = this.get(n);
      o == null ? this.onNotFound(n, "inherited") : e = o;
    }
    return i.name == null && (i.name = s), e.define.call(e, i);
  }
});
Bi.register(SE, !0);
class Sl {
  constructor(t, e, n, i) {
    var o;
    this.target = t, this.cell = (o = this.target.effect) === null || o === void 0 ? void 0 : o.target, this.type = e, this.bubbles = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = 0, this.timeStamp = performance.now(), this.currentTime = n, this.timelineTime = i;
  }
}
function es(s) {
  return s !== "offset" && s !== "easing" && s !== "composite" && s !== "computedOffset";
}
function Ml(s, t) {
  return s === "reverse" || s === "alternate" && t % 2 === 1 || s === "alternate-reverse" && t % 2 === 0;
}
class ME {
  constructor(t, e) {
    this._effect = null, this._currentTime = null, this._playbackRate = 1, this._playState = "idle", this._rafId = null, this._startTime = null, this._pausedTime = null, this._timeline = null, this.id = "", this.onfinish = null, this.oncancel = null, this._effect = t, this._timeline = e ?? document.timeline;
  }
  get effect() {
    return this._effect;
  }
  get currentTime() {
    return this._currentTime;
  }
  set currentTime(t) {
    const e = this._timeline.currentTime;
    Be(e) && (this._startTime = e - t, this._currentTime = t);
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(t) {
    const e = this._playbackRate;
    this._playbackRate = t;
    const n = this._timeline.currentTime;
    if (this._playState === "running" && this._startTime != null && Be(n)) {
      const i = (n - this._startTime) * e;
      this._startTime = n - i / t;
    }
  }
  get playState() {
    return this._playState;
  }
  get timeline() {
    return this._timeline;
  }
  play() {
    if (this._playState === "running" || !this._effect)
      return;
    const t = this._timeline.currentTime;
    Be(t) && (this._playState === "paused" ? (this._startTime = t - this._pausedTime / this._playbackRate, this._pausedTime = null) : (this._currentTime = 0, this._startTime = t), this._playState = "running", this._tick());
  }
  pause() {
    this._playState === "running" && (this._rafId && (cancelAnimationFrame(this._rafId), this._rafId = null), this._pausedTime = this._currentTime, this._playState = "paused");
  }
  finish() {
    var t;
    if (!this._effect)
      return;
    const e = this._effect.getComputedTiming(), n = this._playbackRate < 0, { duration: i, endTime: o, direction: r, fill: a, iterations: l } = e;
    if (a === "forwards" || a === "both") {
      const h = n ? 0 : l - 1, u = Ml(r, h);
      this._effect.apply(u || n ? 0 : i);
    } else (a === "none" || a === "backwards") && this._effect.apply(null);
    this._currentTime = n ? 0 : o, this._playState = "finished", this._rafId && (cancelAnimationFrame(this._rafId), this._rafId = null);
    const c = new Sl(this, "finish", this._currentTime, this._timeline.currentTime);
    (t = this.onfinish) === null || t === void 0 || t.call(this, c), this._effect.target.notify("animation:finish", c);
  }
  cancel() {
    var t;
    if (!this._effect)
      return;
    this._rafId && (cancelAnimationFrame(this._rafId), this._rafId = null), this._playState = "idle", this._currentTime = null, this._startTime = null, this._pausedTime = null, this._effect.apply(null);
    const e = new Sl(this, "cancel", this._currentTime, this._timeline.currentTime);
    (t = this.oncancel) === null || t === void 0 || t.call(this, e), this._effect.target.notify("animation:cancel", e);
  }
  updatePlaybackRate(t) {
    this.playbackRate = t;
  }
  reverse() {
    this.playbackRate = this.playbackRate * -1;
  }
  _tick() {
    const t = this._timeline.currentTime;
    if (this._playState !== "running" || !this._effect || !Be(t))
      return;
    const e = this._effect.getComputedTiming(), { duration: n, delay: i, iterations: o, direction: r, endTime: a } = e, l = (t - this._startTime) * this._playbackRate, c = l - i;
    let h = Math.floor(c / n);
    if (l >= a || l < 0 || n <= 0) {
      this.finish();
      return;
    }
    if (l >= i) {
      let u = c % n;
      h = Math.min(h, o - 1), Ml(r, h) && (u = n - u), this._effect.apply(u);
    }
    this._currentTime = l, this._rafId = requestAnimationFrame(() => this._tick());
  }
}
class BE {
  constructor() {
    this.animations = [];
  }
  addAnimation(t) {
    this.animations.push(t);
  }
  getAnimations() {
    return this.animations;
  }
  cancelAnimations() {
    this.animations.forEach((t) => {
      t.cancel();
    });
  }
}
class IE {
  constructor(t, e, n) {
    this._originProps = {}, this._target = t, this._options = Be(n) ? { duration: n } : Object.assign({}, n), this.setKeyframes(e);
  }
  get target() {
    return this._target;
  }
  getKeyframes() {
    if (!this._keyframes || this._keyframes.length === 0)
      return [];
    let t = [];
    if (Array.isArray(this._keyframes) && (t = [...this._keyframes]), fe(this._keyframes)) {
      const n = Object.values(this._keyframes).map((o) => ma(o).length), i = Math.max(...n);
      for (let o = 0; o < i; o++) {
        const r = {};
        Object.entries(this._keyframes).forEach(([a, l]) => {
          const c = ma(l)[o];
          es(a) && c != null && (r[a] = c);
        }), t.push(r);
      }
    }
    return t = t.map((e, n, i) => {
      var o, r, a;
      const l = e ?? {}, c = {};
      return c.offset = l.offset, c.easing = (a = (o = l.easing) !== null && o !== void 0 ? o : (r = i[n - 1]) === null || r === void 0 ? void 0 : r.easing) !== null && a !== void 0 ? a : this.getComputedTiming().easing, Object.keys(l).forEach((h) => {
        es(h) && (c[h] = l[h]);
      }), c;
    }), t = t.map((e, n) => (e.offset == null ? n === t.length - 1 ? e.computedOffset = 1 : n === 0 ? e.computedOffset = 0 : e.computedOffset = n / (t.length - 1) : e.computedOffset = e.offset, e)), t;
  }
  setKeyframes(t) {
    this._keyframes = t, this._computedKeyframes = this.getKeyframes(), this._computedKeyframes.forEach((e) => {
      Object.keys(e).forEach((n) => {
        es(n) && this._originProps[n] == null && (this._originProps[n] = this.target.getPropByPath(n));
      });
    });
  }
  getTiming() {
    return My(this._options, PE);
  }
  getComputedTiming() {
    const t = this.getTiming(), e = t.duration * t.iterations;
    return Object.assign(Object.assign({}, t), { activeDuration: e, endTime: e + t.delay });
  }
  apply(t) {
    var e, n, i, o;
    if (!this._target || !this._computedKeyframes.length)
      return;
    if (t == null) {
      Object.entries(this._originProps).forEach(([y, A]) => {
        this.target.setPropByPath(y, A);
      });
      return;
    }
    const a = this.getComputedTiming().duration;
    if (a < 0)
      return;
    const l = Math.min(t / a, 1), c = this._computedKeyframes;
    if (c.length === 0)
      return;
    let h = { computedOffset: 0 }, u = { computedOffset: 1 };
    for (const y of c)
      if (l === 0 && y.computedOffset === 0 && (h = y), l === 1 && y.computedOffset === 1 && (u = y), y.computedOffset < l && (h = y), y.computedOffset > l) {
        u = y;
        break;
      }
    const d = h.computedOffset, g = u.computedOffset, f = (l - d) / (g - d), p = (e = h.easing) !== null && e !== void 0 ? e : u.easing, m = Ri(p), b = (n = zw[m]) !== null && n !== void 0 ? n : Wh;
    for (const y in Object.assign(Object.assign({}, h), u))
      if (es(y) && (h[y] != null || u[y] != null)) {
        const A = (i = h[y]) !== null && i !== void 0 ? i : this._originProps[y], w = (o = u[y]) !== null && o !== void 0 ? o : this._originProps[y];
        let x;
        String(A).startsWith("#") ? x = iw : y.endsWith("transform") && !Be(A) ? x = sw : gi.test(String(A)) || gi.test(String(w)) ? x = Hh : x = Yh;
        const v = x(A, w)(b(f));
        this.target.setPropByPath(y, v);
      }
  }
}
const PE = {
  delay: 0,
  direction: "normal",
  duration: 0,
  easing: "linear",
  fill: "none",
  iterations: 1
};
class qu extends Gt {
  constructor(t = {}) {
    super(), this.pending = !1, this.changing = !1, this.data = {}, this.mutate(gt(t)), this.changed = {};
  }
  mutate(t, e = {}) {
    const n = e.unset === !0, i = e.silent === !0, o = [], r = this.changing;
    this.changing = !0, r || (this.previous = gt(this.data), this.changed = {});
    const a = this.data, l = this.previous, c = this.changed;
    if (Object.keys(t).forEach((h) => {
      const u = h, d = t[u];
      Ie(a[u], d) || o.push(u), Ie(l[u], d) ? delete c[u] : c[u] = d, n ? delete a[u] : a[u] = d;
    }), !i && o.length > 0 && (this.pending = !0, this.pendingOptions = e, o.forEach((h) => {
      this.emit("change:*", {
        key: h,
        options: e,
        store: this,
        current: a[h],
        previous: l[h]
      });
    })), r)
      return this;
    if (!i)
      for (; this.pending; )
        this.pending = !1, this.emit("changed", {
          current: a,
          previous: l,
          store: this,
          options: this.pendingOptions
        });
    return this.pending = !1, this.changing = !1, this.pendingOptions = null, this;
  }
  get(t, e) {
    if (t == null)
      return this.data;
    const n = this.data[t];
    return n ?? e;
  }
  getPrevious(t) {
    if (this.previous) {
      const e = this.previous[t];
      return e ?? void 0;
    }
  }
  set(t, e, n) {
    return t != null && (typeof t == "object" ? this.mutate(t, e) : this.mutate({ [t]: e }, n)), this;
  }
  remove(t, e) {
    const i = {};
    let o;
    if (typeof t == "string")
      i[t] = void 0, o = e;
    else if (Array.isArray(t))
      t.forEach((r) => i[r] = void 0), o = e;
    else {
      for (const r in this.data)
        i[r] = void 0;
      o = t;
    }
    return this.mutate(i, Object.assign(Object.assign({}, o), { unset: !0 })), this;
  }
  getByPath(t) {
    return Or(this.data, t, "/");
  }
  setByPath(t, e, n = {}) {
    const i = "/", o = Array.isArray(t) ? [...t] : t.split(i), r = Array.isArray(t) ? t.join(i) : t, a = o[0], l = o.length;
    if (n.propertyPath = r, n.propertyValue = e, n.propertyPathArray = o, l === 1)
      this.set(a, e, n);
    else {
      const c = {};
      let h = c, u = a;
      for (let f = 1; f < l; f += 1) {
        const p = o[f], m = Number.isFinite(Number(p));
        h = h[u] = m ? [] : {}, u = p;
      }
      jn(c, o, e, i);
      const d = gt(this.data);
      n.rewrite && $a(d, t, i);
      const g = pt(d, c);
      this.set(a, g[a], n);
    }
    return this;
  }
  removeByPath(t, e) {
    const n = Array.isArray(t) ? t : t.split("/"), i = n[0];
    if (n.length === 1)
      this.remove(i, e);
    else {
      const o = n.slice(1), r = gt(this.get(i));
      r && $a(r, o), this.set(i, r, e);
    }
    return this;
  }
  hasChanged(t) {
    return t == null ? Object.keys(this.changed).length > 0 : t in this.changed;
  }
  /**
   * Returns an object containing all the data that have changed,
   * or `null` if there are no changes. Useful for determining what
   * parts of a view need to be updated.
   */
  getChanges(t) {
    if (t == null)
      return this.hasChanged() ? gt(this.changed) : null;
    const e = this.changing ? this.previous : this.data, n = {};
    let i;
    for (const o in t) {
      const r = t[o];
      Ie(e[o], r) || (n[o] = r, i = !0);
    }
    return i ? gt(n) : null;
  }
  /**
   * Returns a copy of the store's `data` object.
   */
  toJSON() {
    return gt(this.data);
  }
  clone() {
    const t = this.constructor;
    return new t(this.data);
  }
  dispose() {
    this.off(), this.data = {}, this.previous = {}, this.changed = {}, this.pending = !1, this.changing = !1, this.pendingOptions = null, this.trigger("disposed", { store: this });
  }
}
$([
  _()
], qu.prototype, "dispose", null);
class q extends Gt {
  static isCell(t) {
    if (t == null)
      return !1;
    if (t instanceof q)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === q.toStringTag) && typeof n.isNode == "function" && typeof n.isEdge == "function" && typeof n.prop == "function" && typeof n.attr == "function";
  }
  static normalizeTools(t) {
    if (typeof t == "string")
      return { items: [t] };
    if (Array.isArray(t))
      return { items: t };
    if (t.items)
      return t;
    if (Reflect.has(t, "local")) {
      const e = t, { local: n } = e, i = G(e, ["local"]);
      return {
        local: n,
        items: [i]
      };
    }
    return {
      items: [t]
    };
  }
  static getCommonAncestor(...t) {
    const e = t.filter((i) => i != null).map((i) => i.getAncestors()).sort((i, o) => i.length - o.length);
    return e.shift().find((i) => e.every((o) => o.includes(i))) || null;
  }
  static getCellsBBox(t, e = {}) {
    let n = null;
    for (let i = 0, o = t.length; i < o; i += 1) {
      const r = t[i];
      let a = r.getBBox(e);
      if (a) {
        if (r.isNode()) {
          const l = r.getAngle();
          l != null && l !== 0 && (a = a.bbox(l));
        }
        n = n == null ? a : n.union(a);
      }
    }
    return n;
  }
  static deepClone(t) {
    const e = [t, ...t.getDescendants({ deep: !0 })];
    return q.cloneCells(e);
  }
  static cloneCells(t) {
    const e = ch(t), n = e.reduce((i, o) => (i[o.id] = o.clone(), i), {});
    return e.forEach((i) => {
      const o = n[i.id];
      if (o.isEdge()) {
        const l = o.getSourceCellId(), c = o.getTargetCellId();
        l && n[l] && o.setSource(Object.assign(Object.assign({}, o.getSource()), { cell: n[l].id })), c && n[c] && o.setTarget(Object.assign(Object.assign({}, o.getTarget()), { cell: n[c].id }));
      }
      const r = i.getParent();
      r && n[r.id] && o.setParent(n[r.id]);
      const a = i.getChildren();
      if (a && a.length) {
        const l = a.reduce((c, h) => (n[h.id] && c.push(n[h.id]), c), []);
        l.length > 0 && o.setChildren(l);
      }
    }), n;
  }
  static config(t) {
    const { markup: e, propHooks: n, attrHooks: i } = t, o = G(t, ["markup", "propHooks", "attrHooks"]);
    e != null && (this.markup = e), n && (this.propHooks = this.propHooks.slice(), Array.isArray(n) ? this.propHooks.push(...n) : typeof n == "function" ? this.propHooks.push(n) : Object.values(n).forEach((r) => {
      typeof r == "function" && this.propHooks.push(r);
    })), i && (this.attrHooks = Object.assign(Object.assign({}, this.attrHooks), i)), this.defaults = pt({}, this.defaults, o);
  }
  static getMarkup() {
    return this.markup;
  }
  static getDefaults(t) {
    return t ? this.defaults : gt(this.defaults);
  }
  static getAttrHooks() {
    return this.attrHooks;
  }
  static applyPropHooks(t, e) {
    return this.propHooks.reduce((n, i) => i ? N(i, t, n) : n, e);
  }
  // eslint-disable-next-line
  static generateId(t = {}) {
    return Tr();
  }
  // #endregion
  get [Symbol.toStringTag]() {
    return q.toStringTag;
  }
  constructor(t = {}) {
    super();
    const n = this.constructor.getDefaults(!0), i = pt({}, this.preprocess(n), this.preprocess(t));
    this.id = i.id || q.generateId(t), this.store = new qu(i), this.animationManager = new BE(), this.setup(), this.init(), this.postprocess(t);
  }
  init() {
  }
  // #region model
  get model() {
    return this._model;
  }
  set model(t) {
    this._model !== t && (this._model = t);
  }
  // #endregion
  preprocess(t, e) {
    const n = t.id, o = this.constructor.applyPropHooks(this, t);
    return n == null && e !== !0 && (o.id = q.generateId(t)), o;
  }
  postprocess(t) {
  }
  // eslint-disable-line
  setup() {
    this.store.on("change:*", (t) => {
      const { key: e, current: n, previous: i, options: o } = t;
      this.notify("change:*", {
        key: e,
        options: o,
        current: n,
        previous: i,
        cell: this
      }), this.notify(`change:${e}`, {
        options: o,
        current: n,
        previous: i,
        cell: this
      });
      const r = e;
      (r === "source" || r === "target") && this.notify("change:terminal", {
        type: r,
        current: n,
        previous: i,
        options: o,
        cell: this
      });
    }), this.store.on("changed", ({ options: t }) => this.notify("changed", { options: t, cell: this })), this.on("added", ({ cell: t }) => {
      const e = this.store.get("animation");
      Do(e) || e.forEach((n) => {
        t.animate(...n);
      });
    });
  }
  notify(t, e) {
    this.trigger(t, e);
    const n = this.model;
    return n && (n.notify(`cell:${t}`, e), this.isNode() ? n.notify(`node:${t}`, Object.assign(Object.assign({}, e), { node: this })) : this.isEdge() && n.notify(`edge:${t}`, Object.assign(Object.assign({}, e), { edge: this }))), this;
  }
  isNode() {
    return !1;
  }
  isEdge() {
    return !1;
  }
  isSameStore(t) {
    return this.store === t.store;
  }
  get view() {
    return this.store.get("view");
  }
  get shape() {
    return this.store.get("shape", "");
  }
  getProp(t, e) {
    return t == null ? this.store.get() : this.store.get(t, e);
  }
  setProp(t, e, n) {
    if (typeof t == "string")
      this.store.set(t, e, n);
    else {
      const i = this.preprocess(t, !0);
      this.store.set(pt({}, this.getProp(), i), e), this.postprocess(t);
    }
    return this;
  }
  removeProp(t, e) {
    return typeof t == "string" || Array.isArray(t) ? this.store.removeByPath(t, e) : this.store.remove(e), this;
  }
  hasChanged(t) {
    return t == null ? this.store.hasChanged() : this.store.hasChanged(t);
  }
  getPropByPath(t) {
    return this.store.getByPath(t);
  }
  setPropByPath(t, e, n = {}) {
    return this.model && (t === "children" ? this._children = e ? e.map((i) => this.model.getCell(i)).filter((i) => i != null) : null : t === "parent" && (this._parent = e ? this.model.getCell(e) : null)), this.store.setByPath(t, e, n), this;
  }
  removePropByPath(t, e = {}) {
    const n = Array.isArray(t) ? t : t.split("/");
    return n[0] === "attrs" && (e.dirty = !0), this.store.removeByPath(n, e), this;
  }
  prop(t, e, n) {
    return t == null ? this.getProp() : typeof t == "string" || Array.isArray(t) ? arguments.length === 1 ? this.getPropByPath(t) : e == null ? this.removePropByPath(t, n || {}) : this.setPropByPath(t, e, n || {}) : this.setProp(t, e || {});
  }
  previous(t) {
    return this.store.getPrevious(t);
  }
  // #endregion
  // #region zIndex
  get zIndex() {
    return this.getZIndex();
  }
  set zIndex(t) {
    t == null ? this.removeZIndex() : this.setZIndex(t);
  }
  getZIndex() {
    return this.store.get("zIndex");
  }
  setZIndex(t, e = {}) {
    return this.store.set("zIndex", t, e), this;
  }
  removeZIndex(t = {}) {
    return this.store.remove("zIndex", t), this;
  }
  toFront(t = {}) {
    const e = this.model;
    if (e) {
      let n = e.getMaxZIndex(), i;
      t.deep ? (i = this.getDescendants({ deep: !0, breadthFirst: !0 }), i.unshift(this)) : i = [this], n = n - i.length + 1;
      const o = e.total();
      let r = e.indexOf(this) !== o - i.length;
      r || (r = i.some((a, l) => a.getZIndex() !== n + l)), r && this.batchUpdate("to-front", () => {
        n += i.length, i.forEach((a, l) => {
          a.setZIndex(n + l, t);
        });
      });
    }
    return this;
  }
  toBack(t = {}) {
    const e = this.model;
    if (e) {
      let n = e.getMinZIndex(), i;
      t.deep ? (i = this.getDescendants({ deep: !0, breadthFirst: !0 }), i.unshift(this)) : i = [this];
      let o = e.indexOf(this) !== 0;
      o || (o = i.some((r, a) => r.getZIndex() !== n + a)), o && this.batchUpdate("to-back", () => {
        n -= i.length, i.forEach((r, a) => {
          r.setZIndex(n + a, t);
        });
      });
    }
    return this;
  }
  // #endregion
  // #region markup
  get markup() {
    return this.getMarkup();
  }
  set markup(t) {
    t == null ? this.removeMarkup() : this.setMarkup(t);
  }
  getMarkup() {
    let t = this.store.get("markup");
    return t == null && (t = this.constructor.getMarkup()), t;
  }
  setMarkup(t, e = {}) {
    return this.store.set("markup", t, e), this;
  }
  removeMarkup(t = {}) {
    return this.store.remove("markup", t), this;
  }
  // #endregion
  // #region attrs
  get attrs() {
    return this.getAttrs();
  }
  set attrs(t) {
    t == null ? this.removeAttrs() : this.setAttrs(t);
  }
  getAttrs() {
    const t = this.store.get("attrs");
    return t ? Object.assign({}, t) : {};
  }
  setAttrs(t, e = {}) {
    if (t == null)
      this.removeAttrs(e);
    else {
      const n = (i) => this.store.set("attrs", i, e);
      if (e.overwrite === !0)
        n(t);
      else {
        const i = this.getAttrs();
        e.deep === !1 ? n(Object.assign(Object.assign({}, i), t)) : n(pt({}, i, t));
      }
    }
    return this;
  }
  replaceAttrs(t, e = {}) {
    return this.setAttrs(t, Object.assign(Object.assign({}, e), { overwrite: !0 }));
  }
  updateAttrs(t, e = {}) {
    return this.setAttrs(t, Object.assign(Object.assign({}, e), { deep: !1 }));
  }
  removeAttrs(t = {}) {
    return this.store.remove("attrs", t), this;
  }
  getAttrDefinition(t) {
    if (!t)
      return null;
    const n = this.constructor.getAttrHooks() || {};
    let i = n[t] || pi.get(t);
    if (!i) {
      const o = Ri(t);
      i = n[o] || pi.get(o);
    }
    return i || null;
  }
  getAttrByPath(t) {
    return t == null || t === "" ? this.getAttrs() : this.getPropByPath(this.prefixAttrPath(t));
  }
  setAttrByPath(t, e, n = {}) {
    return this.setPropByPath(this.prefixAttrPath(t), e, n), this;
  }
  removeAttrByPath(t, e = {}) {
    return this.removePropByPath(this.prefixAttrPath(t), e), this;
  }
  prefixAttrPath(t) {
    return Array.isArray(t) ? ["attrs"].concat(t) : `attrs/${t}`;
  }
  attr(t, e, n) {
    return t == null ? this.getAttrByPath() : typeof t == "string" || Array.isArray(t) ? arguments.length === 1 ? this.getAttrByPath(t) : e == null ? this.removeAttrByPath(t, n || {}) : this.setAttrByPath(t, e, n || {}) : this.setAttrs(t, e || {});
  }
  // #endregion
  // #region visible
  get visible() {
    return this.isVisible();
  }
  set visible(t) {
    this.setVisible(t);
  }
  setVisible(t, e = {}) {
    return this.store.set("visible", t, e), this;
  }
  isVisible() {
    return this.store.get("visible") !== !1;
  }
  show(t = {}) {
    return this.isVisible() || this.setVisible(!0, t), this;
  }
  hide(t = {}) {
    return this.isVisible() && this.setVisible(!1, t), this;
  }
  toggleVisible(t, e = {}) {
    const n = typeof t == "boolean" ? t : !this.isVisible(), i = typeof t == "boolean" ? e : t;
    return n ? this.show(i) : this.hide(i), this;
  }
  // #endregion
  // #region data
  get data() {
    return this.getData();
  }
  set data(t) {
    this.setData(t);
  }
  getData() {
    return this.store.get("data");
  }
  setData(t, e = {}) {
    if (t == null)
      this.removeData(e);
    else {
      const n = (i) => this.store.set("data", i, e);
      if (e.overwrite === !0)
        n(t);
      else {
        const i = this.getData();
        e.deep === !1 ? n(typeof t == "object" ? Object.assign(Object.assign({}, i), t) : t) : n(pt({}, i, t));
      }
    }
    return this;
  }
  replaceData(t, e = {}) {
    return this.setData(t, Object.assign(Object.assign({}, e), { overwrite: !0 }));
  }
  updateData(t, e = {}) {
    return this.setData(t, Object.assign(Object.assign({}, e), { deep: !1 }));
  }
  removeData(t = {}) {
    return this.store.remove("data", t), this;
  }
  // #endregion
  // #region parent children
  get parent() {
    return this.getParent();
  }
  get children() {
    return this.getChildren();
  }
  getParentId() {
    return this.store.get("parent");
  }
  getParent() {
    const t = this.getParentId();
    if (t && this.model) {
      const e = this.model.getCell(t);
      return this._parent = e, e;
    }
    return null;
  }
  getChildren() {
    const t = this.store.get("children");
    if (t && t.length && this.model) {
      const e = t.map((n) => {
        var i;
        return (i = this.model) === null || i === void 0 ? void 0 : i.getCell(n);
      }).filter((n) => n != null);
      return this._children = e, [...e];
    }
    return null;
  }
  hasParent() {
    return this.parent != null;
  }
  isParentOf(t) {
    return t != null && t.getParent() === this;
  }
  isChildOf(t) {
    return t != null && this.getParent() === t;
  }
  eachChild(t, e) {
    return this.children && this.children.forEach(t, e), this;
  }
  filterChild(t, e) {
    return this.children ? this.children.filter(t, e) : [];
  }
  getChildCount() {
    return this.children == null ? 0 : this.children.length;
  }
  getChildIndex(t) {
    return this.children == null ? -1 : this.children.indexOf(t);
  }
  getChildAt(t) {
    return this.children != null && t >= 0 ? this.children[t] : null;
  }
  getAncestors(t = {}) {
    const e = [];
    let n = this.getParent();
    for (; n; )
      e.push(n), n = t.deep !== !1 ? n.getParent() : null;
    return e;
  }
  getDescendants(t = {}) {
    if (t.deep !== !1) {
      if (t.breadthFirst) {
        const e = [], n = this.getChildren() || [];
        for (; n.length > 0; ) {
          const i = n.shift(), o = i.getChildren();
          e.push(i), o && n.push(...o);
        }
        return e;
      }
      {
        const e = this.getChildren() || [];
        return e.forEach((n) => {
          e.push(...n.getDescendants(t));
        }), e;
      }
    }
    return this.getChildren() || [];
  }
  isDescendantOf(t, e = {}) {
    if (t == null)
      return !1;
    if (e.deep !== !1) {
      let n = this.getParent();
      for (; n; ) {
        if (n === t)
          return !0;
        n = n.getParent();
      }
      return !1;
    }
    return this.isChildOf(t);
  }
  isAncestorOf(t, e = {}) {
    return t == null ? !1 : t.isDescendantOf(this, e);
  }
  contains(t) {
    return this.isAncestorOf(t);
  }
  getCommonAncestor(...t) {
    return q.getCommonAncestor(this, ...t);
  }
  setParent(t, e = {}) {
    return this._parent = t, t ? this.store.set("parent", t.id, e) : this.store.remove("parent", e), this;
  }
  setChildren(t, e = {}) {
    return this._children = t, t != null ? this.store.set("children", t.map((n) => n.id), e) : this.store.remove("children", e), this;
  }
  unembed(t, e = {}) {
    const n = this.children;
    if (n != null && t != null) {
      const i = this.getChildIndex(t);
      i !== -1 && (n.splice(i, 1), t.setParent(null, e), this.setChildren(n, e));
    }
    return this;
  }
  embed(t, e = {}) {
    return t.addTo(this, e), this;
  }
  addTo(t, e = {}) {
    return q.isCell(t) ? t.addChild(this, e) : t.addCell(this, e), this;
  }
  insertTo(t, e, n = {}) {
    return t.insertChild(this, e, n), this;
  }
  addChild(t, e = {}) {
    return this.insertChild(t, void 0, e);
  }
  insertChild(t, e, n = {}) {
    if (t != null && t !== this) {
      const i = t.getParent(), o = this !== i;
      let r = e;
      if (r == null && (r = this.getChildCount(), o || (r -= 1)), i) {
        const l = i.getChildren();
        if (l) {
          const c = l.indexOf(t);
          c >= 0 && (t.setParent(null, n), l.splice(c, 1), i.setChildren(l, n));
        }
      }
      let a = this.children;
      if (a == null ? (a = [], a.push(t)) : a.splice(r, 0, t), t.setParent(this, n), this.setChildren(a, n), o && this.model) {
        const l = this.model.getIncomingEdges(this), c = this.model.getOutgoingEdges(this);
        l && l.forEach((h) => h.updateParent(n)), c && c.forEach((h) => h.updateParent(n));
      }
      this.model && this.model.addCell(t, n);
    }
    return this;
  }
  removeFromParent(t = {}) {
    const e = this.getParent();
    if (e != null) {
      const n = e.getChildIndex(this);
      e.removeChildAt(n, t);
    }
    return this;
  }
  removeChild(t, e = {}) {
    const n = this.getChildIndex(t);
    return this.removeChildAt(n, e);
  }
  removeChildAt(t, e = {}) {
    const n = this.getChildAt(t);
    return this.children != null && n != null && (this.unembed(n, e), n.remove(e)), n;
  }
  remove(t = {}) {
    return this.batchUpdate("remove", () => {
      const e = this.getParent();
      e && e.removeChild(this, t), t.deep !== !1 && this.eachChild((n) => n.remove(t)), this.model && this.model.removeCell(this, t), this.dispose();
    }), this;
  }
  // #endregion
  // #region animation
  animate(t, e) {
    var n;
    const i = Be(e) ? { duration: e } : Object.assign({}, e), o = new IE(this, t, i), r = new ME(o, i.timeline);
    return this.animationManager.addAnimation(r), r.id = (n = i.id) !== null && n !== void 0 ? n : "", r.play(), r;
  }
  getAnimations() {
    return this.animationManager.getAnimations();
  }
  // #endregion
  // #region transform
  // eslint-disable-next-line
  translate(t, e, n) {
    return this;
  }
  scale(t, e, n, i) {
    return this;
  }
  addTools(t, e, n) {
    const i = Array.isArray(t) ? t : [t], o = typeof e == "string" ? e : null, r = typeof e == "object" ? e : typeof n == "object" ? n : {};
    if (r.reset)
      return this.setTools({ name: o, items: i, local: r.local }, r);
    let a = gt(this.getTools());
    if (a == null || o == null || a.name === o)
      return a == null && (a = {}), a.items || (a.items = []), a.name = o, a.items = [...a.items, ...i], this.setTools(Object.assign({}, a), r);
  }
  setTools(t, e = {}) {
    return t == null ? this.removeTools() : this.store.set("tools", q.normalizeTools(t), e), this;
  }
  getTools() {
    return this.store.get("tools");
  }
  removeTools(t = {}) {
    return this.store.remove("tools", t), this;
  }
  hasTools(t) {
    const e = this.getTools();
    return e == null ? !1 : t == null ? !0 : e.name === t;
  }
  hasTool(t) {
    const e = this.getTools();
    return e == null ? !1 : e.items.some((n) => typeof n == "string" ? n === t : n.name === t);
  }
  removeTool(t, e = {}) {
    const n = gt(this.getTools());
    if (n) {
      let i = !1;
      const o = n.items.slice(), r = (a) => {
        o.splice(a, 1), i = !0;
      };
      if (typeof t == "number")
        r(t);
      else
        for (let a = o.length - 1; a >= 0; a -= 1) {
          const l = o[a];
          (typeof l == "string" ? l === t : l.name === t) && r(a);
        }
      i && (n.items = o, this.setTools(n, e));
    }
    return this;
  }
  // #endregion
  // #region common
  // eslint-disable-next-line
  getBBox(t) {
    return new I();
  }
  // eslint-disable-next-line
  getConnectionPoint(t, e) {
    return new C();
  }
  toJSON(t = {}) {
    const e = Object.assign({}, this.store.get()), n = Object.prototype.toString, i = this.isNode() ? "node" : this.isEdge() ? "edge" : "cell";
    if (!e.shape) {
      const f = this.constructor;
      throw new Error(`Unable to serialize ${i} missing "shape" prop, check the ${i} "${f.name || n.call(f)}"`);
    }
    const o = this.constructor, r = t.diff === !0, a = e.attrs || {}, l = o.getDefaults(!0), c = r ? this.preprocess(l, !0) : l, h = c.attrs || {}, u = {};
    Object.entries(e).forEach(([f, p]) => {
      if (p != null && !Array.isArray(p) && typeof p == "object" && !fe(p))
        throw new Error(`Can only serialize ${i} with plain-object props, but got a "${n.call(p)}" type of key "${f}" on ${i} "${this.id}"`);
      if (f !== "attrs" && f !== "shape" && r) {
        const m = c[f];
        Ie(p, m) && delete e[f];
      }
    }), Object.keys(a).forEach((f) => {
      const p = a[f], m = h[f];
      Object.keys(p).forEach((b) => {
        const y = p[b], A = m ? m[b] : null;
        y != null && typeof y == "object" && !Array.isArray(y) ? Object.keys(y).forEach((w) => {
          const x = y[w];
          if (m == null || A == null || !bt(A) || !Ie(A[w], x)) {
            u[f] == null && (u[f] = {}), u[f][b] == null && (u[f][b] = {});
            const M = u[f][b];
            M[w] = x;
          }
        }) : (m == null || !Ie(A, y)) && (u[f] == null && (u[f] = {}), u[f][b] = y);
      });
    });
    const d = Object.assign(Object.assign({}, e), { attrs: Do(u) ? void 0 : u });
    d.attrs == null && delete d.attrs;
    const g = d;
    return g.angle === 0 && delete g.angle, gt(g);
  }
  clone(t = {}) {
    if (!t.deep) {
      const n = Object.assign({}, this.store.get());
      t.keepId || delete n.id, delete n.parent, delete n.children;
      const i = this.constructor;
      return new i(n);
    }
    return q.deepClone(this)[this.id];
  }
  findView(t) {
    return t.findViewByCell(this);
  }
  // #endregion
  // #region batch
  startBatch(t, e = {}, n = this.model) {
    return this.notify("batch:start", { name: t, data: e, cell: this }), n && n.startBatch(t, Object.assign(Object.assign({}, e), { cell: this })), this;
  }
  stopBatch(t, e = {}, n = this.model) {
    return n && n.stopBatch(t, Object.assign(Object.assign({}, e), { cell: this })), this.notify("batch:stop", { name: t, data: e, cell: this }), this;
  }
  batchUpdate(t, e, n) {
    const i = this.model;
    this.startBatch(t, n, i);
    const o = e();
    return this.stopBatch(t, n, i), o;
  }
  // #endregion
  // #region IDisposable
  dispose() {
    this.removeFromParent(), this.animationManager.cancelAnimations(), this.store.dispose();
  }
}
q.toStringTag = "X6.cell";
q.defaults = {};
q.attrHooks = {};
q.propHooks = [];
$([
  _()
], q.prototype, "dispose", null);
q.config({
  propHooks(s) {
    var { tools: t } = s, e = G(s, ["tools"]);
    return t && (e.tools = q.normalizeTools(t)), e;
  }
});
class TE {
  constructor(t) {
    this.ports = [], this.groups = {}, this.init(gt(t));
  }
  getPorts() {
    return this.ports;
  }
  getGroup(t) {
    return t != null ? this.groups[t] : null;
  }
  getPortsByGroup(t) {
    return this.ports.filter((e) => e.group === t || e.group == null && t == null);
  }
  getPortsLayoutByGroup(t, e) {
    const n = this.getPortsByGroup(t), i = t ? this.getGroup(t) : null, o = i ? i.position : null, r = o ? o.name : null;
    let a;
    if (r != null) {
      const u = Ei.get(r);
      if (u == null)
        return Ei.onNotFound(r);
      a = u;
    } else
      a = Bu.left;
    const l = n.map((u) => u && u.position && u.position.args || {}), c = o && o.args || {};
    return a(l, e, c).map((u, d) => {
      const g = n[d];
      return {
        portLayout: u,
        portId: g.id,
        portSize: g.size,
        portAttrs: g.attrs,
        labelSize: g.label.size,
        labelLayout: this.getPortLabelLayout(g, C.create(u.position), e)
      };
    });
  }
  init(t) {
    const { groups: e, items: n } = t;
    e != null && Object.keys(e).forEach((i) => {
      this.groups[i] = this.parseGroup(e[i]);
    }), Array.isArray(n) && n.forEach((i) => {
      this.ports.push(this.parsePort(i));
    });
  }
  parseGroup(t) {
    return Object.assign(Object.assign({}, t), { label: this.getLabel(t, !0), position: this.getPortPosition(t.position, !0) });
  }
  parsePort(t) {
    const e = Object.assign({}, t), n = this.getGroup(t.group) || {};
    return e.markup = e.markup || n.markup, e.attrs = pt({}, n.attrs, e.attrs), e.position = this.createPosition(n, e), e.label = pt({}, n.label, this.getLabel(e)), e.zIndex = this.getZIndex(n, e), e.size = Object.assign(Object.assign({}, n.size), e.size), e;
  }
  getZIndex(t, e) {
    return typeof e.zIndex == "number" ? e.zIndex : typeof t.zIndex == "number" || t.zIndex === "auto" ? t.zIndex : "auto";
  }
  createPosition(t, e) {
    return pt({
      name: "left",
      args: {}
    }, t.position, { args: e.args });
  }
  getPortPosition(t, e = !1) {
    if (t == null) {
      if (e)
        return { name: "left", args: {} };
    } else {
      if (typeof t == "string")
        return {
          name: t,
          args: {}
        };
      if (Array.isArray(t))
        return {
          name: "absolute",
          args: { x: t[0], y: t[1] }
        };
      if (typeof t == "object")
        return t;
    }
    return { args: {} };
  }
  getPortLabelPosition(t, e = !1) {
    if (t == null) {
      if (e)
        return { name: "left", args: {} };
    } else {
      if (typeof t == "string")
        return {
          name: t,
          args: {}
        };
      if (typeof t == "object")
        return t;
    }
    return { args: {} };
  }
  getLabel(t, e = !1) {
    const n = t.label || {};
    return n.position = this.getPortLabelPosition(n.position, e), n;
  }
  getPortLabelLayout(t, e, n) {
    const i = t.label.position.name || "left", o = t.label.position.args || {}, r = Xs.get(i) || Su.left;
    return r ? r(e, n, o) : null;
  }
}
let qo, Xo;
function Xu(s, t) {
  return t ? qo != null && qo.exist(s) : Xo != null && Xo.exist(s);
}
function kE(s) {
  qo = s;
}
function OE(s) {
  Xo = s;
}
const $u = "X6.node";
let Bl = 0;
function RE(s) {
  return s ? Br(s) : (Bl += 1, `CustomNode${Bl}`);
}
let Tt = class Cn extends q {
  static isNode(t) {
    if (t == null)
      return !1;
    if (t instanceof Cn)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === $u) && typeof n.isNode == "function" && typeof n.isEdge == "function" && typeof n.prop == "function" && typeof n.attr == "function" && typeof n.size == "function" && typeof n.position == "function";
  }
  static define(t) {
    const { constructorName: e, overwrite: n } = t, i = G(t, ["constructorName", "overwrite"]), o = kr(
      RE(e || i.shape),
      // biome-ignore lint/complexity/noThisInStatic: <修改后会导致渲染错误>
      this
    );
    return o.config(i), i.shape && Cn.registry.register(i.shape, o, n), o;
  }
  static create(t) {
    const e = t.shape || "rect", n = Cn.registry.get(e);
    return n ? new n(t) : Cn.registry.onNotFound(e);
  }
  get [Symbol.toStringTag]() {
    return Cn.toStringTag;
  }
  constructor(t = {}) {
    super(t), this.initPorts();
  }
  preprocess(t, e) {
    const { x: n, y: i, width: o, height: r } = t, a = G(t, ["x", "y", "width", "height"]);
    if (n != null || i != null) {
      const l = a.position;
      a.position = Object.assign(Object.assign({}, l), { x: n ?? (l ? l.x : 0), y: i ?? (l ? l.y : 0) });
    }
    if (o != null || r != null) {
      const l = a.size;
      a.size = Object.assign(Object.assign({}, l), { width: o ?? (l ? l.width : 0), height: r ?? (l ? l.height : 0) });
    }
    return super.preprocess(a, e);
  }
  isNode() {
    return !0;
  }
  size(t, e, n) {
    return t === void 0 ? this.getSize() : typeof t == "number" ? this.setSize(t, e, n) : this.setSize(t, e);
  }
  getSize() {
    const t = this.store.get("size");
    return t ? Object.assign({}, t) : { width: 1, height: 1 };
  }
  setSize(t, e, n) {
    return typeof t == "object" ? this.resize(t.width, t.height, e) : this.resize(t, e, n), this;
  }
  resize(t, e, n = {}) {
    this.startBatch("resize", n);
    const i = n.direction;
    if (i) {
      const o = this.getSize();
      switch (i) {
        case "left":
        case "right":
          e = o.height;
          break;
        case "top":
        case "bottom":
          t = o.width;
          break;
      }
      let a = {
        right: 0,
        "top-right": 0,
        top: 1,
        "top-left": 1,
        left: 2,
        "bottom-left": 2,
        bottom: 3,
        "bottom-right": 3
      }[i];
      const l = Kt(this.getAngle() || 0);
      n.absolute && (a += Math.floor((l + 45) / 90), a %= 4);
      const c = this.getBBox();
      let h;
      a === 0 ? h = c.getBottomLeft() : a === 1 ? h = c.getCorner() : a === 2 ? h = c.getTopRight() : h = c.getOrigin();
      const u = h.clone().rotate(-l, c.getCenter()), d = Math.sqrt(t * t + e * e) / 2;
      let g = a * Math.PI / 2;
      g += Math.atan(a % 2 === 0 ? e / t : t / e), g -= Qt(l);
      const p = C.fromPolar(d, g, u).clone().translate(t / -2, e / -2);
      this.store.set("size", { width: t, height: e }, n), this.setPosition(p.x, p.y, n);
    } else
      this.store.set("size", { width: t, height: e }, n);
    return this.stopBatch("resize", n), this;
  }
  scale(t, e, n, i = {}) {
    const o = this.getBBox().scale(t, e, n ?? void 0);
    return this.startBatch("scale", i), this.setPosition(o.x, o.y, i), this.resize(o.width, o.height, i), this.stopBatch("scale"), this;
  }
  position(t, e, n) {
    return typeof t == "number" ? this.setPosition(t, e, n) : this.getPosition(t);
  }
  getPosition(t = {}) {
    if (t.relative) {
      const n = this.getParent();
      if (n != null && n.isNode()) {
        const i = this.getPosition(), o = n.getPosition();
        return {
          x: i.x - o.x,
          y: i.y - o.y
        };
      }
    }
    const e = this.store.get("position");
    return e ? Object.assign({}, e) : { x: 0, y: 0 };
  }
  setPosition(t, e, n = {}) {
    let i, o, r;
    if (typeof t == "object" ? (i = t.x, o = t.y, r = e || {}) : (i = t, o = e, r = n || {}), r.relative) {
      const a = this.getParent();
      if (a != null && a.isNode()) {
        const l = a.getPosition();
        i += l.x, o += l.y;
      }
    }
    if (r.deep) {
      const a = this.getPosition();
      this.translate(i - a.x, o - a.y, r);
    } else
      this.store.set("position", { x: i, y: o }, r);
    return this;
  }
  translate(t = 0, e = 0, n = {}) {
    if (t === 0 && e === 0)
      return this;
    n.translateBy = n.translateBy || this.id;
    const i = this.getPosition();
    if (n.restrict != null && n.translateBy === this.id) {
      const r = this.getBBox({ deep: !0 }), a = n.restrict, l = i.x - r.x, c = i.y - r.y, h = Math.max(a.x + l, Math.min(a.x + a.width + l - r.width, i.x + t)), u = Math.max(a.y + c, Math.min(a.y + a.height + c - r.height, i.y + e));
      t = h - i.x, e = u - i.y;
    }
    const o = {
      x: i.x + t,
      y: i.y + e
    };
    if (n.tx = t, n.ty = e, n.transition) {
      let r = typeof n.transition != "object" ? {} : Object.assign({}, n.transition);
      r = Object.assign({ duration: 100, fill: "forwards" }, r), this.animate({
        "position/x": o.x,
        "position/y": o.y
      }, r), this.eachChild((a) => {
        var l;
        ((l = n.exclude) === null || l === void 0 ? void 0 : l.includes(a)) || a.translate(t, e, n);
      });
    } else
      this.startBatch("translate", n), this.store.set("position", o, n), this.eachChild((r) => {
        var a;
        ((a = n.exclude) === null || a === void 0 ? void 0 : a.includes(r)) || r.translate(t, e, n);
      }), this.stopBatch("translate", n);
    return this;
  }
  angle(t, e) {
    return t == null ? this.getAngle() : this.rotate(t, e);
  }
  getAngle() {
    return this.store.get("angle", 0);
  }
  rotate(t, e = {}) {
    const n = this.getAngle();
    if (e.center) {
      const i = this.getSize(), o = this.getPosition(), r = this.getBBox().getCenter();
      r.rotate(n - t, e.center);
      const a = r.x - i.width / 2 - o.x, l = r.y - i.height / 2 - o.y;
      this.startBatch("rotate", { angle: t, options: e }), this.setPosition(o.x + a, o.y + l, e), this.rotate(t, Object.assign(Object.assign({}, e), { center: null })), this.stopBatch("rotate");
    } else
      this.store.set("angle", e.absolute ? t : (n + t) % 360, e);
    return this;
  }
  // #endregion
  // #region common
  getBBox(t = {}) {
    if (t.deep) {
      const e = this.getDescendants({ deep: !0, breadthFirst: !0 });
      return e.push(this), q.getCellsBBox(e);
    }
    return I.fromPositionAndSize(this.getPosition(), this.getSize());
  }
  getConnectionPoint(t, e) {
    const n = this.getBBox(), i = n.getCenter(), o = t.getTerminal(e);
    if (o == null)
      return i;
    const r = o.port;
    if (!r || !this.hasPort(r))
      return i;
    const a = this.getPort(r);
    if (!a || !a.group)
      return i;
    const c = this.getPortsPosition(a.group)[r].position, h = C.create(c).translate(n.getOrigin()), u = this.getAngle();
    return u && h.rotate(-u, i), h;
  }
  /**
   * Sets cell's size and position based on the children bbox and given padding.
   */
  fit(t = {}) {
    const n = (this.getChildren() || []).filter((c) => c.isNode());
    if (n.length === 0)
      return this;
    this.startBatch("fit-embeds", t), t.deep && n.forEach((c) => {
      c.fit(t);
    });
    let { x: i, y: o, width: r, height: a } = q.getCellsBBox(n);
    const l = he(t.padding);
    return i -= l.left, o -= l.top, r += l.left + l.right, a += l.bottom + l.top, this.store.set({
      position: { x: i, y: o },
      size: { width: r, height: a }
    }, t), this.stopBatch("fit-embeds"), this;
  }
  // #endregion
  // #region ports
  get portContainerMarkup() {
    return this.getPortContainerMarkup();
  }
  set portContainerMarkup(t) {
    this.setPortContainerMarkup(t);
  }
  getDefaultPortContainerMarkup() {
    return this.store.get("defaultPortContainerMarkup") || Nt.getPortContainerMarkup();
  }
  getPortContainerMarkup() {
    return this.store.get("portContainerMarkup") || this.getDefaultPortContainerMarkup();
  }
  setPortContainerMarkup(t, e = {}) {
    return this.store.set("portContainerMarkup", Nt.clone(t), e), this;
  }
  get portMarkup() {
    return this.getPortMarkup();
  }
  set portMarkup(t) {
    this.setPortMarkup(t);
  }
  getDefaultPortMarkup() {
    return this.store.get("defaultPortMarkup") || Nt.getPortMarkup();
  }
  getPortMarkup() {
    return this.store.get("portMarkup") || this.getDefaultPortMarkup();
  }
  setPortMarkup(t, e = {}) {
    return this.store.set("portMarkup", Nt.clone(t), e), this;
  }
  get portLabelMarkup() {
    return this.getPortLabelMarkup();
  }
  set portLabelMarkup(t) {
    this.setPortLabelMarkup(t);
  }
  getDefaultPortLabelMarkup() {
    return this.store.get("defaultPortLabelMarkup") || Nt.getPortLabelMarkup();
  }
  getPortLabelMarkup() {
    return this.store.get("portLabelMarkup") || this.getDefaultPortLabelMarkup();
  }
  setPortLabelMarkup(t, e = {}) {
    return this.store.set("portLabelMarkup", Nt.clone(t), e), this;
  }
  get ports() {
    const t = this.store.get("ports", { items: [] });
    return t.items == null && (t.items = []), t;
  }
  getPorts() {
    return gt(this.ports.items);
  }
  getPortsByGroup(t) {
    return this.getPorts().filter((e) => e.group === t);
  }
  getPort(t) {
    return gt(this.ports.items.find((e) => e.id && e.id === t));
  }
  getPortAt(t) {
    return this.ports.items[t] || null;
  }
  hasPorts() {
    return this.ports.items.length > 0;
  }
  hasPort(t) {
    return this.getPortIndex(t) !== -1;
  }
  getPortIndex(t) {
    const e = typeof t == "string" ? t : t.id;
    return e != null ? this.ports.items.findIndex((n) => n.id === e) : -1;
  }
  getPortsPosition(t) {
    const e = this.getSize();
    return this.port.getPortsLayoutByGroup(t, new I(0, 0, e.width, e.height)).reduce((i, o) => {
      const r = o.portLayout;
      return i[o.portId] = {
        position: Object.assign({}, r.position),
        angle: r.angle || 0
      }, i;
    }, {});
  }
  getPortProp(t, e) {
    return this.getPropByPath(this.prefixPortPath(t, e));
  }
  setPortProp(t, e, n, i) {
    if (typeof e == "string" || Array.isArray(e)) {
      const a = this.prefixPortPath(t, e), l = n;
      return this.setPropByPath(a, l, i);
    }
    const o = this.prefixPortPath(t), r = e;
    return this.setPropByPath(o, r, n);
  }
  removePortProp(t, e, n) {
    return typeof e == "string" || Array.isArray(e) ? this.removePropByPath(this.prefixPortPath(t, e), n) : this.removePropByPath(this.prefixPortPath(t), e);
  }
  portProp(t, e, n, i) {
    return e == null ? this.getPortProp(t) : typeof e == "string" || Array.isArray(e) ? arguments.length === 2 ? this.getPortProp(t, e) : n == null ? this.removePortProp(t, e, i) : this.setPortProp(t, e, n, i) : this.setPortProp(t, e, n);
  }
  prefixPortPath(t, e) {
    const n = this.getPortIndex(t);
    if (n === -1)
      throw new Error(`Unable to find port with id: "${t}"`);
    return e == null || e === "" ? ["ports", "items", `${n}`] : Array.isArray(e) ? ["ports", "items", `${n}`, ...e] : `ports/items/${n}/${e}`;
  }
  addPort(t, e) {
    const n = [...this.ports.items];
    return n.push(t), this.setPropByPath("ports/items", n, e), this;
  }
  addPorts(t, e) {
    return this.setPropByPath("ports/items", [...this.ports.items, ...t], e), this;
  }
  insertPort(t, e, n) {
    const i = [...this.ports.items];
    return i.splice(t, 0, e), this.setPropByPath("ports/items", i, n), this;
  }
  removePort(t, e = {}) {
    return this.removePortAt(this.getPortIndex(t), e);
  }
  removePortAt(t, e = {}) {
    if (t >= 0) {
      const n = [...this.ports.items];
      n.splice(t, 1), e.rewrite = !0, this.setPropByPath("ports/items", n, e);
    }
    return this;
  }
  removePorts(t, e) {
    let n;
    if (Array.isArray(t)) {
      if (n = e || {}, t.length) {
        n.rewrite = !0;
        const o = [...this.ports.items].filter((r) => !t.some((a) => {
          const l = typeof a == "string" ? a : a.id;
          return r.id === l;
        }));
        this.setPropByPath("ports/items", o, n);
      }
    } else
      n = t || {}, n.rewrite = !0, this.setPropByPath("ports/items", [], n);
    return this;
  }
  getParsedPorts() {
    return this.port.getPorts();
  }
  getParsedGroups() {
    return this.port.groups;
  }
  getPortsLayoutByGroup(t, e) {
    return this.port.getPortsLayoutByGroup(t, e);
  }
  initPorts() {
    this.updatePortData(), this.on("change:ports", () => {
      this.processRemovedPort(), this.updatePortData();
    });
  }
  processRemovedPort() {
    const t = this.ports, e = {};
    t.items.forEach((r) => {
      r.id && (e[r.id] = !0);
    });
    const n = {};
    (this.store.getPrevious("ports") || {
      items: []
    }).items.forEach((r) => {
      r.id && !e[r.id] && (n[r.id] = !0);
    });
    const o = this.model;
    o && !Do(n) && (o.getConnectedEdges(this, { incoming: !0 }).forEach((l) => {
      const c = l.getTargetPortId();
      c && n[c] && l.remove();
    }), o.getConnectedEdges(this, { outgoing: !0 }).forEach((l) => {
      const c = l.getSourcePortId();
      c && n[c] && l.remove();
    }));
  }
  validatePorts() {
    const t = {}, e = [];
    return this.ports.items.forEach((n) => {
      typeof n != "object" && e.push(`Invalid port ${n}.`), n.id == null && (n.id = this.generatePortId()), t[n.id] && e.push("Duplicitied port id."), t[n.id] = !0;
    }), e;
  }
  generatePortId() {
    return Tr();
  }
  updatePortData() {
    const t = this.validatePorts();
    if (t.length > 0)
      throw this.store.set("ports", this.store.getPrevious("ports")), new Error(t.join(" "));
    const e = this.port ? this.port.getPorts() : null;
    this.port = new TE(this.ports);
    const n = this.port.getPorts(), i = e ? n.filter((r) => e.find((a) => a.id === r.id) ? null : r) : [...n], o = e ? e.filter((r) => n.find((a) => a.id === r.id) ? null : r) : [];
    i.length > 0 && this.notify("ports:added", { added: i, cell: this, node: this }), o.length > 0 && this.notify("ports:removed", { removed: o, cell: this, node: this });
  }
};
Tt.toStringTag = $u;
Tt.registry = yt.create({
  type: "node",
  process(s, t) {
    if (Xu(s, !0))
      throw new Error(`Node with name '${s}' was registered by anthor Edge`);
    if (typeof t == "function")
      return t.config({ shape: s }), t;
    let e = Tt;
    const { inherit: n } = t, i = G(t, ["inherit"]);
    if (n)
      if (typeof n == "string") {
        const r = this.get(n);
        r == null ? this.onNotFound(n, "inherited") : e = r;
      } else
        e = n;
    i.constructorName == null && (i.constructorName = s);
    const o = e.define.call(e, i);
    return o.config({ shape: s }), o;
  }
});
Tt.defaults = {
  angle: 0,
  position: { x: 0, y: 0 },
  size: { width: 1, height: 1 }
};
Tt.config({
  propHooks(s) {
    var { ports: t } = s, e = G(s, ["ports"]);
    return t && (e.ports = Array.isArray(t) ? { items: t } : t), e;
  }
});
OE(Tt.registry);
const _u = "X6.edge", Zu = "basic.edge";
let Il = 0;
function DE(s) {
  return s ? Br(s) : (Il += 1, `CustomEdge${Il}`);
}
let Et = class An extends q {
  static parseStringLabel(t) {
    return {
      attrs: { label: { text: t } }
    };
  }
  static isEdge(t) {
    if (t == null)
      return !1;
    if (t instanceof An)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === _u) && typeof n.isNode == "function" && typeof n.isEdge == "function" && typeof n.prop == "function" && typeof n.attr == "function" && typeof n.disconnect == "function" && typeof n.getSource == "function" && typeof n.getTarget == "function";
  }
  static equalTerminals(t, e) {
    const n = t, i = e;
    return n.cell === i.cell ? n.port === i.port || n.port == null && i.port == null : !1;
  }
  static define(t) {
    const { constructorName: e, overwrite: n } = t, i = G(t, ["constructorName", "overwrite"]), o = kr(DE(e || i.shape), this);
    return o.config(i), i.shape && An.registry.register(i.shape, o, n), o;
  }
  static create(t) {
    const e = t.shape || "edge", n = An.registry.get(e);
    return n ? new n(t) : An.registry.onNotFound(e);
  }
  get [Symbol.toStringTag]() {
    return An.toStringTag;
  }
  constructor(t = {}) {
    super(t);
  }
  preprocess(t, e) {
    const { source: n, sourceCell: i, sourcePort: o, sourcePoint: r, target: a, targetCell: l, targetPort: c, targetPoint: h } = t, d = G(t, ["source", "sourceCell", "sourcePort", "sourcePoint", "target", "targetCell", "targetPort", "targetPoint"]), g = (f) => typeof f == "string" || typeof f == "number";
    if (n != null)
      if (q.isCell(n))
        d.source = { cell: n.id };
      else if (g(n))
        d.source = { cell: n };
      else if (C.isPoint(n))
        d.source = n.toJSON();
      else if (Array.isArray(n))
        d.source = { x: n[0], y: n[1] };
      else {
        const f = n.cell;
        q.isCell(f) ? d.source = Object.assign(Object.assign({}, n), { cell: f.id }) : d.source = n;
      }
    if (i != null || o != null) {
      let f = d.source;
      if (i != null) {
        const p = g(i) ? i : i.id;
        f ? f.cell = p : f = d.source = { cell: p };
      }
      o != null && f && (f.port = o);
    } else r != null && (d.source = C.create(r).toJSON());
    if (a != null)
      if (q.isCell(a))
        d.target = { cell: a.id };
      else if (g(a))
        d.target = { cell: a };
      else if (C.isPoint(a))
        d.target = a.toJSON();
      else if (Array.isArray(a))
        d.target = { x: a[0], y: a[1] };
      else {
        const f = a.cell;
        q.isCell(f) ? d.target = Object.assign(Object.assign({}, a), { cell: f.id }) : d.target = a;
      }
    if (l != null || c != null) {
      let f = d.target;
      if (l != null) {
        const p = g(l) ? l : l.id;
        f ? f.cell = p : f = d.target = { cell: p };
      }
      c != null && f && (f.port = c);
    } else h != null && (d.target = C.create(h).toJSON());
    return super.preprocess(d, e);
  }
  setup() {
    super.setup(), this.on("change:labels", (t) => this.onLabelsChanged(t)), this.on("change:vertices", (t) => this.onVertexsChanged(t));
  }
  isEdge() {
    return !0;
  }
  // #region terminal
  disconnect(t = {}) {
    return this.store.set({
      source: { x: 0, y: 0 },
      target: { x: 0, y: 0 }
    }, t), this;
  }
  get source() {
    return this.getSource();
  }
  set source(t) {
    this.setSource(t);
  }
  getSource() {
    return this.getTerminal("source");
  }
  getSourceCellId() {
    return this.source.cell;
  }
  getSourcePortId() {
    return this.source.port;
  }
  setSource(t, e, n = {}) {
    return this.setTerminal("source", t, e, n);
  }
  get target() {
    return this.getTarget();
  }
  set target(t) {
    this.setTarget(t);
  }
  getTarget() {
    return this.getTerminal("target");
  }
  getTargetCellId() {
    return this.target.cell;
  }
  getTargetPortId() {
    return this.target.port;
  }
  setTarget(t, e, n = {}) {
    return this.setTerminal("target", t, e, n);
  }
  getTerminal(t) {
    return Object.assign({}, this.store.get(t));
  }
  setTerminal(t, e, n, i = {}) {
    if (q.isCell(e))
      return this.store.set(t, pt({}, n, { cell: e.id }), i), this;
    const o = e;
    return C.isPoint(e) || o.x != null && o.y != null ? (this.store.set(t, pt({}, n, { x: o.x, y: o.y }), i), this) : (this.store.set(t, gt(e), i), this);
  }
  getSourcePoint() {
    return this.getTerminalPoint("source");
  }
  getTargetPoint() {
    return this.getTerminalPoint("target");
  }
  getTerminalPoint(t) {
    const e = this[t];
    if (C.isPointLike(e))
      return C.create(e);
    const n = this.getTerminalCell(t);
    return n ? n.getConnectionPoint(this, t) : new C();
  }
  getSourceCell() {
    return this.getTerminalCell("source");
  }
  getTargetCell() {
    return this.getTerminalCell("target");
  }
  getTerminalCell(t) {
    if (this.model) {
      const e = t === "source" ? this.getSourceCellId() : this.getTargetCellId();
      if (e)
        return this.model.getCell(e);
    }
    return null;
  }
  getSourceNode() {
    return this.getTerminalNode("source");
  }
  getTargetNode() {
    return this.getTerminalNode("target");
  }
  getTerminalNode(t) {
    let e = this;
    const n = {};
    for (; e && e.isEdge(); ) {
      if (n[e.id])
        return null;
      n[e.id] = !0, e = e.getTerminalCell(t);
    }
    return e && e.isNode() ? e : null;
  }
  // #endregion
  // #region router
  get router() {
    return this.getRouter();
  }
  set router(t) {
    t == null ? this.removeRouter() : this.setRouter(t);
  }
  getRouter() {
    return this.store.get("router");
  }
  setRouter(t, e, n) {
    return typeof t == "object" ? this.store.set("router", t, e) : this.store.set("router", { name: t, args: e }, n), this;
  }
  removeRouter(t = {}) {
    return this.store.remove("router", t), this;
  }
  // #endregion
  // #region connector
  get connector() {
    return this.getConnector();
  }
  set connector(t) {
    t == null ? this.removeConnector() : this.setConnector(t);
  }
  getConnector() {
    return this.store.get("connector");
  }
  setConnector(t, e, n) {
    return typeof t == "object" ? this.store.set("connector", t, e) : this.store.set("connector", { name: t, args: e }, n), this;
  }
  removeConnector(t = {}) {
    return this.store.remove("connector", t);
  }
  // #endregion
  // #region labels
  getDefaultLabel() {
    const t = this.constructor, e = this.store.get("defaultLabel") || t.defaultLabel || {};
    return gt(e);
  }
  get labels() {
    return this.getLabels();
  }
  set labels(t) {
    this.setLabels(t);
  }
  getLabels() {
    return [...this.store.get("labels", [])].map((t) => this.parseLabel(t));
  }
  setLabels(t, e = {}) {
    return this.store.set("labels", Array.isArray(t) ? t : [t], e), this;
  }
  insertLabel(t, e, n = {}) {
    const i = this.getLabels(), o = i.length;
    let r = e != null && Number.isFinite(e) ? e : o;
    return r < 0 && (r = o + r + 1), i.splice(r, 0, this.parseLabel(t)), this.setLabels(i, n);
  }
  appendLabel(t, e = {}) {
    return this.insertLabel(t, -1, e);
  }
  getLabelAt(t) {
    const e = this.getLabels();
    return t != null && Number.isFinite(t) ? this.parseLabel(e[t]) : null;
  }
  setLabelAt(t, e, n = {}) {
    if (t != null && Number.isFinite(t)) {
      const i = this.getLabels();
      i[t] = this.parseLabel(e), this.setLabels(i, n);
    }
    return this;
  }
  removeLabelAt(t, e = {}) {
    const n = this.getLabels(), i = t != null && Number.isFinite(t) ? t : -1, o = n.splice(i, 1);
    return this.setLabels(n, e), o.length ? o[0] : null;
  }
  parseLabel(t) {
    return typeof t == "string" ? this.constructor.parseStringLabel(t) : t;
  }
  onLabelsChanged({ previous: t, current: e }) {
    const n = t && e ? e.filter((o) => t.find((r) => o === r || Ie(o, r)) ? null : o) : e ? [...e] : [], i = t && e ? t.filter((o) => e.find((r) => o === r || Ie(o, r)) ? null : o) : t ? [...t] : [];
    n.length > 0 && this.notify("labels:added", { added: n, cell: this, edge: this }), i.length > 0 && this.notify("labels:removed", { removed: i, cell: this, edge: this });
  }
  // #endregion
  // #region vertices
  get vertices() {
    return this.getVertices();
  }
  set vertices(t) {
    this.setVertices(t);
  }
  getVertices() {
    return [...this.store.get("vertices", [])];
  }
  setVertices(t, e = {}) {
    const n = Array.isArray(t) ? t : [t];
    return this.store.set("vertices", n.map((i) => C.toJSON(i)), e), this;
  }
  insertVertex(t, e, n = {}) {
    const i = this.getVertices(), o = i.length;
    let r = e != null && Number.isFinite(e) ? e : o;
    return r < 0 && (r = o + r + 1), i.splice(r, 0, C.toJSON(t)), this.setVertices(i, n);
  }
  appendVertex(t, e = {}) {
    return this.insertVertex(t, -1, e);
  }
  getVertexAt(t) {
    return t != null && Number.isFinite(t) ? this.getVertices()[t] : null;
  }
  setVertexAt(t, e, n = {}) {
    if (t != null && Number.isFinite(t)) {
      const i = this.getVertices();
      i[t] = e, this.setVertices(i, n);
    }
    return this;
  }
  removeVertexAt(t, e = {}) {
    const n = this.getVertices(), i = t != null && Number.isFinite(t) ? t : -1;
    return n.splice(i, 1), this.setVertices(n, e);
  }
  onVertexsChanged({ previous: t, current: e }) {
    const n = t && e ? e.filter((o) => t.find((r) => C.equals(o, r)) ? null : o) : e ? [...e] : [], i = t && e ? t.filter((o) => e.find((r) => C.equals(o, r)) ? null : o) : t ? [...t] : [];
    n.length > 0 && this.notify("vertexs:added", { added: n, cell: this, edge: this }), i.length > 0 && this.notify("vertexs:removed", { removed: i, cell: this, edge: this });
  }
  // #endregion
  // #region markup
  getDefaultMarkup() {
    return this.store.get("defaultMarkup") || Nt.getEdgeMarkup();
  }
  getMarkup() {
    return super.getMarkup() || this.getDefaultMarkup();
  }
  // #endregion
  // #region transform
  /**
   * Translate the edge vertices (and source and target if they are points)
   * by `tx` pixels in the x-axis and `ty` pixels in the y-axis.
   */
  translate(t, e, n = {}) {
    return n.translateBy = n.translateBy || this.id, n.tx = t, n.ty = e, this.applyToPoints((i) => ({
      x: (i.x || 0) + t,
      y: (i.y || 0) + e
    }), n);
  }
  /**
   * Scales the edge's points (vertices) relative to the given origin.
   */
  scale(t, e, n, i = {}) {
    return this.applyToPoints((o) => C.create(o).scale(t, e, n).toJSON(), i);
  }
  applyToPoints(t, e = {}) {
    const n = {}, i = this.getSource(), o = this.getTarget();
    C.isPointLike(i) && (n.source = t(i)), C.isPointLike(o) && (n.target = t(o));
    const r = this.getVertices();
    return r.length > 0 && (n.vertices = r.map(t)), this.store.set(n, e), this;
  }
  // #endregion
  // #region common
  getBBox() {
    return this.getPolyline().bbox();
  }
  getConnectionPoint() {
    return this.getPolyline().pointAt(0.5);
  }
  getPolyline() {
    const t = [
      this.getSourcePoint(),
      ...this.getVertices().map((e) => C.create(e)),
      this.getTargetPoint()
    ];
    return new Mt(t);
  }
  updateParent(t) {
    let e = null;
    const n = this.getSourceCell(), i = this.getTargetCell(), o = this.getParent();
    return n && i && (n === i || n.isDescendantOf(i) ? e = i : i.isDescendantOf(n) ? e = n : e = q.getCommonAncestor(n, i)), o && e && e.id !== o.id && o.unembed(this, t), e && (!o || o.id !== e.id) && e.embed(this, t), e;
  }
  hasLoop(t = {}) {
    const e = this.getSource(), n = this.getTarget(), i = e.cell, o = n.cell;
    if (!i || !o)
      return !1;
    let r = i === o;
    if (!r && t.deep && this._model) {
      const a = this.getSourceCell(), l = this.getTargetCell();
      a && l && (r = a.isAncestorOf(l, t) || l.isAncestorOf(a, t));
    }
    return r;
  }
  getFragmentAncestor() {
    const t = [this, this.getSourceNode(), this.getTargetNode()].filter((e) => e != null);
    return this.getCommonAncestor(...t);
  }
  isFragmentDescendantOf(t) {
    const e = this.getFragmentAncestor();
    return !!e && (e.id === t.id || e.isDescendantOf(t));
  }
};
Et.toStringTag = _u;
Et.defaultLabel = {
  markup: [
    {
      tagName: "rect",
      selector: "body"
    },
    {
      tagName: "text",
      selector: "label"
    }
  ],
  attrs: {
    text: {
      fill: "#000",
      fontSize: 14,
      textAnchor: "middle",
      textVerticalAnchor: "middle",
      pointerEvents: "none"
    },
    rect: {
      ref: "label",
      fill: "#fff",
      rx: 3,
      ry: 3,
      refWidth: 1,
      refHeight: 1,
      refX: 0,
      refY: 0
    }
  },
  position: {
    distance: 0.5
  }
};
Et.registry = yt.create({
  type: "edge",
  process(s, t) {
    if (Xu(s, !1))
      throw new Error(`Edge with name '${s}' was registered by anthor Node`);
    if (typeof t == "function")
      return t.config({ shape: s }), t;
    let e = Et;
    const { inherit: n = "edge" } = t, i = G(t, ["inherit"]);
    if (typeof n == "string") {
      const r = this.get(n || "edge");
      r == null && n ? this.onNotFound(n, "inherited") : e = r;
    } else
      e = n;
    i.constructorName == null && (i.constructorName = s);
    const o = e.define.call(e, i);
    return o.config({ shape: s }), o;
  }
});
Et.defaults = {};
kE(Et.registry);
Et.config({
  shape: Zu,
  propHooks(s) {
    const { label: t, vertices: e } = s, n = G(s, ["label", "vertices"]);
    if (t) {
      n.labels == null && (n.labels = []);
      const i = typeof t == "string" ? Et.parseStringLabel(t) : t;
      n.labels.push(i);
    }
    return e && Array.isArray(e) && (n.vertices = e.map((i) => C.create(i).toJSON())), n;
  }
});
Et.registry.register(Zu, Et);
class Gr extends Gt {
  constructor(t, e = {}) {
    super(), this.length = 0, this.comparator = e.comparator || "zIndex", this.clean(), t && this.reset(t, { silent: !0 });
  }
  toJSON() {
    return this.cells.map((t) => t.toJSON());
  }
  add(t, e, n) {
    let i, o;
    typeof e == "number" ? (i = e, o = Object.assign({ merge: !1 }, n)) : (i = this.length, o = Object.assign({ merge: !1 }, e)), i > this.length && (i = this.length), i < 0 && (i += this.length + 1);
    const r = Array.isArray(t) ? t : [t], a = this.comparator && typeof e != "number" && o.sort !== !1, l = this.comparator || null;
    let c = !1;
    const h = [], u = [];
    return r.forEach((d) => {
      const g = this.get(d);
      g ? o.merge && !d.isSameStore(g) && (g.setProp(d.getProp(), n), u.push(g), a && !c && (l == null || typeof l == "function" ? c = g.hasChanged() : typeof l == "string" ? c = g.hasChanged(l) : c = l.some((f) => g.hasChanged(f)))) : (h.push(d), this.reference(d));
    }), h.length && (a && (c = !0), this.cells.splice(i, 0, ...h), this.length = this.cells.length), c && this.sort({ silent: !0 }), o.silent || (h.forEach((d, g) => {
      const f = {
        cell: d,
        index: i + g,
        options: o
      };
      this.trigger("added", f), o.dryrun || d.notify("added", Object.assign({}, f));
    }), c && this.trigger("sorted"), (h.length || u.length) && this.trigger("updated", {
      added: h,
      merged: u,
      removed: [],
      options: o
    })), this;
  }
  remove(t, e = {}) {
    const n = Array.isArray(t) ? t : [t], i = this.removeCells(n, e);
    return !e.silent && i.length > 0 && this.trigger("updated", {
      options: e,
      removed: i,
      added: [],
      merged: []
    }), Array.isArray(t) ? i : i[0];
  }
  removeCells(t, e) {
    const n = [];
    for (let i = 0; i < t.length; i += 1) {
      const o = this.get(t[i]);
      if (o == null)
        continue;
      const r = this.cells.indexOf(o);
      this.cells.splice(r, 1), this.length -= 1, delete this.map[o.id], n.push(o), this.unreference(o), e.silent || (this.trigger("removed", { cell: o, index: r, options: e }), e.dryrun || o.notify("removed", { cell: o, index: r, options: e })), e.dryrun || o.remove();
    }
    return n;
  }
  reset(t, e = {}) {
    const n = this.cells.slice();
    if (e.diff || (n.forEach((i) => {
      this.unreference(i), i.remove();
    }), this.clean()), this.add(t, Object.assign({ silent: !0 }, e)), !e.silent) {
      const i = this.cells.slice();
      this.trigger("reseted", {
        options: e,
        previous: n,
        current: i
      });
      const o = [], r = [];
      i.forEach((a) => {
        n.some((c) => c.id === a.id) || o.push(a);
      }), n.forEach((a) => {
        i.some((c) => c.id === a.id) || r.push(a);
      }), this.trigger("updated", { options: e, added: o, removed: r, merged: [] });
    }
    return this;
  }
  push(t, e) {
    return this.add(t, this.length, e);
  }
  pop(t) {
    const e = this.at(this.length - 1);
    return e ? this.remove(e, t) : null;
  }
  unshift(t, e) {
    return this.add(t, 0, e);
  }
  shift(t) {
    const e = this.at(0);
    return e ? this.remove(e, t) : null;
  }
  get(t) {
    if (t == null)
      return null;
    const e = typeof t == "string" || typeof t == "number" ? t : t.id;
    return this.map[e] || null;
  }
  has(t) {
    return this.get(t) != null;
  }
  at(t) {
    return t < 0 && (t += this.length), this.cells[t] || null;
  }
  first() {
    return this.at(0);
  }
  last() {
    return this.at(-1);
  }
  indexOf(t) {
    return this.cells.indexOf(t);
  }
  toArray() {
    return this.cells.slice();
  }
  sort(t = {}) {
    return this.comparator != null && (this.cells = Cr(this.cells, this.comparator), t.silent || this.trigger("sorted")), this;
  }
  clone() {
    const t = this.constructor;
    return new t(this.cells.slice(), {
      comparator: this.comparator
    });
  }
  reference(t) {
    this.map[t.id] = t, t.on("*", this.notifyCellEvent, this);
  }
  unreference(t) {
    t.off("*", this.notifyCellEvent, this), delete this.map[t.id];
  }
  notifyCellEvent(t, e) {
    const n = e.cell;
    this.trigger(`cell:${t}`, e), n && (n.isNode() ? this.trigger(`node:${t}`, Object.assign(Object.assign({}, e), { node: n })) : n.isEdge() && this.trigger(`edge:${t}`, Object.assign(Object.assign({}, e), { edge: n })));
  }
  clean() {
    this.length = 0, this.cells = [], this.map = {};
  }
  dispose() {
    this.reset([]);
  }
}
$([
  _()
], Gr.prototype, "dispose", null);
const QE = "X6.Model";
class qt extends Gt {
  static isModel(t) {
    if (t == null)
      return !1;
    if (t instanceof qt)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === QE) && typeof n.addNode == "function" && typeof n.addEdge == "function" && n.collection != null;
  }
  static toJSON(t, e = {}) {
    return {
      cells: t.map((n) => n.toJSON(e))
    };
  }
  static fromJSON(t) {
    const e = [];
    return Array.isArray(t) ? e.push(...t) : (t.cells && e.push(...t.cells), t.nodes && t.nodes.forEach((n) => {
      n.shape == null && (n.shape = "rect"), e.push(n);
    }), t.edges && t.edges.forEach((n) => {
      n.shape == null && (n.shape = "edge"), e.push(n);
    })), e.map((n) => {
      const i = n.shape;
      if (i) {
        if (Tt.registry.exist(i))
          return Tt.create(n);
        if (Et.registry.exist(i))
          return Et.create(n);
      }
      throw new Error("The `shape` should be specified when creating a node/edge instance");
    });
  }
  constructor(t = []) {
    super(), this.batches = {}, this.addings = /* @__PURE__ */ new WeakMap(), this.nodes = {}, this.edges = {}, this.outgoings = {}, this.incomings = {}, this.collection = new Gr(t), this.setup();
  }
  notify(t, e) {
    this.trigger(t, e);
    const n = this.graph;
    return n && (t === "sorted" || t === "reseted" || t === "updated" ? n.trigger(`model:${t}`, e) : n.trigger(t, e)), this;
  }
  setup() {
    const t = this.collection;
    t.on("sorted", () => this.notify("sorted", null)), t.on("updated", (e) => this.notify("updated", e)), t.on("cell:change:zIndex", () => this.sortOnChangeZ()), t.on("added", ({ cell: e }) => {
      this.onCellAdded(e);
    }), t.on("removed", (e) => {
      const n = e.cell;
      this.onCellRemoved(n, e.options), this.notify("cell:removed", e), n.isNode() ? this.notify("node:removed", Object.assign(Object.assign({}, e), { node: n })) : n.isEdge() && this.notify("edge:removed", Object.assign(Object.assign({}, e), { edge: n }));
    }), t.on("reseted", (e) => {
      this.onReset(e.current), this.notify("reseted", e);
    }), t.on("edge:change:source", ({ edge: e }) => this.onEdgeTerminalChanged(e, "source")), t.on("edge:change:target", ({ edge: e }) => {
      this.onEdgeTerminalChanged(e, "target");
    });
  }
  sortOnChangeZ() {
    this.collection.sort();
  }
  onCellAdded(t) {
    const e = t.id;
    t.isEdge() ? (t.updateParent(), this.edges[e] = !0, this.onEdgeTerminalChanged(t, "source"), this.onEdgeTerminalChanged(t, "target")) : this.nodes[e] = !0;
  }
  onCellRemoved(t, e) {
    const n = t.id;
    if (t.isEdge()) {
      delete this.edges[n];
      const i = t.getSource(), o = t.getTarget();
      if (i != null && i.cell) {
        const r = this.outgoings[i.cell], a = r ? r.indexOf(n) : -1;
        a >= 0 && (r.splice(a, 1), r.length === 0 && delete this.outgoings[i.cell]);
      }
      if (o != null && o.cell) {
        const r = this.incomings[o.cell], a = r ? r.indexOf(n) : -1;
        a >= 0 && (r.splice(a, 1), r.length === 0 && delete this.incomings[o.cell]);
      }
    } else
      delete this.nodes[n];
    e.clear || (e.disconnectEdges ? this.disconnectConnectedEdges(t, e) : this.removeConnectedEdges(t, e)), t.model === this && (t.model = null);
  }
  onReset(t) {
    this.nodes = {}, this.edges = {}, this.outgoings = {}, this.incomings = {}, t.forEach((e) => {
      this.onCellAdded(e);
    });
  }
  onEdgeTerminalChanged(t, e) {
    const n = e === "source" ? this.outgoings : this.incomings, i = t.previous(e);
    if (i != null && i.cell) {
      const r = q.isCell(i.cell) ? i.cell.id : i.cell, a = n[r], l = a ? a.indexOf(t.id) : -1;
      l >= 0 && (a.splice(l, 1), a.length === 0 && delete n[r]);
    }
    const o = t.getTerminal(e);
    if (o != null && o.cell) {
      const r = q.isCell(o.cell) ? o.cell.id : o.cell, a = n[r] || [];
      a.indexOf(t.id) === -1 && a.push(t.id), n[r] = a;
    }
  }
  prepareCell(t, e) {
    return !t.model && (!e || !e.dryrun) && (t.model = this), t.zIndex == null && t.setZIndex(this.getMaxZIndex() + 1, { silent: !0 }), t;
  }
  resetCells(t, e = {}) {
    return t.map((n) => this.prepareCell(n, Object.assign(Object.assign({}, e), { dryrun: !0 }))), this.collection.reset(t, e), t.map((n) => this.prepareCell(n, { options: e })), this;
  }
  clear(t = {}) {
    const e = this.getCells();
    if (e.length === 0)
      return this;
    const n = Object.assign(Object.assign({}, t), { clear: !0 });
    return this.batchUpdate("clear", () => {
      const i = e.sort((o, r) => {
        const a = o.isEdge() ? 1 : 2, l = r.isEdge() ? 1 : 2;
        return a - l;
      });
      for (; i.length > 0; ) {
        const o = i.shift();
        o && o.remove(n);
      }
    }, n), this;
  }
  addNode(t, e = {}) {
    const n = Tt.isNode(t) ? t : this.createNode(t);
    return this.addCell(n, e), n;
  }
  updateNode(t, e = {}) {
    const n = this.createNode(t), i = n.getProp();
    return n.dispose(), this.updateCell(i, e);
  }
  createNode(t) {
    return Tt.create(t);
  }
  addEdge(t, e = {}) {
    const n = Et.isEdge(t) ? t : this.createEdge(t);
    return this.addCell(n, e), n;
  }
  createEdge(t) {
    return Et.create(t);
  }
  updateEdge(t, e = {}) {
    const n = this.createEdge(t), i = n.getProp();
    return n.dispose(), this.updateCell(i, e);
  }
  addCell(t, e = {}) {
    return Array.isArray(t) ? this.addCells(t, e) : (!this.collection.has(t) && !this.addings.has(t) && (this.addings.set(t, !0), this.collection.add(this.prepareCell(t, e), e), t.eachChild((n) => this.addCell(n, e)), this.addings.delete(t)), this);
  }
  addCells(t, e = {}) {
    const n = t.length;
    if (n === 0)
      return this;
    const i = Object.assign(Object.assign({}, e), { position: n - 1, maxPosition: n - 1 });
    return this.startBatch("add", Object.assign(Object.assign({}, i), { cells: t })), t.forEach((o) => {
      this.addCell(o, i), i.position -= 1;
    }), this.stopBatch("add", Object.assign(Object.assign({}, i), { cells: t })), this;
  }
  updateCell(t, e = {}) {
    const n = t.id && this.getCell(t.id);
    return n ? this.batchUpdate("update", () => (Object.entries(t).forEach(([i, o]) => {
      n.setProp(i, o, e);
    }), !0), t) : !1;
  }
  removeCell(t, e = {}) {
    const n = typeof t == "string" ? this.getCell(t) : t;
    return n && this.has(n) ? this.collection.remove(n, e) : null;
  }
  updateCellId(t, e) {
    if (t.id === e)
      return;
    this.startBatch("update", { id: e }), t.prop("id", e);
    const n = t.clone({ keepId: !0 });
    return this.addCell(n), this.getConnectedEdges(t).forEach((o) => {
      const r = o.getSourceCell(), a = o.getTargetCell();
      r === t && o.setSource(Object.assign(Object.assign({}, o.getSource()), { cell: e })), a === t && o.setTarget(Object.assign(Object.assign({}, o.getTarget()), { cell: e }));
    }), this.removeCell(t), this.stopBatch("update", { id: e }), n;
  }
  removeCells(t, e = {}) {
    return t.length ? this.batchUpdate("remove", () => t.map((n) => this.removeCell(n, e))) : [];
  }
  removeConnectedEdges(t, e = {}) {
    const n = this.getConnectedEdges(t);
    return n.forEach((i) => {
      i.remove(e);
    }), n;
  }
  disconnectConnectedEdges(t, e = {}) {
    const n = typeof t == "string" ? t : t.id;
    this.getConnectedEdges(t).forEach((i) => {
      const o = i.getSourceCellId(), r = i.getTargetCellId();
      o === n && i.setSource({ x: 0, y: 0 }, e), r === n && i.setTarget({ x: 0, y: 0 }, e);
    });
  }
  has(t) {
    return this.collection.has(t);
  }
  total() {
    return this.collection.length;
  }
  indexOf(t) {
    return this.collection.indexOf(t);
  }
  /**
   * Returns a cell from the graph by its id.
   */
  getCell(t) {
    return this.collection.get(t);
  }
  /**
   * Returns all the nodes and edges in the graph.
   */
  getCells() {
    return this.collection.toArray();
  }
  /**
   * Returns the first cell (node or edge) in the graph. The first cell is
   * defined as the cell with the lowest `zIndex`.
   */
  getFirstCell() {
    return this.collection.first();
  }
  /**
   * Returns the last cell (node or edge) in the graph. The last cell is
   * defined as the cell with the highest `zIndex`.
   */
  getLastCell() {
    return this.collection.last();
  }
  /**
   * Returns the lowest `zIndex` value in the graph.
   */
  getMinZIndex() {
    const t = this.collection.first();
    return t && t.getZIndex() || 0;
  }
  /**
   * Returns the highest `zIndex` value in the graph.
   */
  getMaxZIndex() {
    const t = this.collection.last();
    return t && t.getZIndex() || 0;
  }
  getCellsFromCache(t) {
    return t ? Object.keys(t).map((e) => this.getCell(e)).filter((e) => e != null) : [];
  }
  /**
   * Returns all the nodes in the graph.
   */
  getNodes() {
    return this.getCellsFromCache(this.nodes);
  }
  /**
   * Returns all the edges in the graph.
   */
  getEdges() {
    return this.getCellsFromCache(this.edges);
  }
  /**
   * Returns all outgoing edges for the node.
   */
  getOutgoingEdges(t) {
    const e = typeof t == "string" ? t : t.id, n = this.outgoings[e];
    return n ? n.map((i) => this.getCell(i)).filter((i) => i == null ? void 0 : i.isEdge()) : null;
  }
  /**
   * Returns all incoming edges for the node.
   */
  getIncomingEdges(t) {
    const e = typeof t == "string" ? t : t.id, n = this.incomings[e];
    return n ? n.map((i) => this.getCell(i)).filter((i) => i == null ? void 0 : i.isEdge()) : null;
  }
  /**
   * Returns edges connected with cell.
   */
  getConnectedEdges(t, e = {}) {
    const n = [], i = typeof t == "string" ? this.getCell(t) : t;
    if (i == null)
      return n;
    const o = {}, r = e.indirect;
    let a = e.incoming, l = e.outgoing;
    a == null && l == null && (a = l = !0);
    const c = (h, u) => {
      const d = u ? this.getOutgoingEdges(h) : this.getIncomingEdges(h);
      if (d != null && d.forEach((g) => {
        o[g.id] || (n.push(g), o[g.id] = !0, r && (a && c(g, !1), l && c(g, !0)));
      }), r && h.isEdge()) {
        const g = u ? h.getTargetCell() : h.getSourceCell();
        g != null && g.isEdge() && (o[g.id] || (n.push(g), c(g, u)));
      }
    };
    if (l && c(i, !0), a && c(i, !1), e.deep) {
      const h = i.getDescendants({ deep: !0 }), u = {};
      h.forEach((g) => {
        g.isNode() && (u[g.id] = !0);
      });
      const d = (g, f) => {
        const p = f ? this.getOutgoingEdges(g.id) : this.getIncomingEdges(g.id);
        p != null && p.forEach((m) => {
          if (!o[m.id]) {
            const b = m.getSourceCell(), y = m.getTargetCell();
            if (!e.enclosed && b && u[b.id] && y && u[y.id])
              return;
            n.push(m), o[m.id] = !0;
          }
        });
      };
      h.forEach((g) => {
        g.isEdge() || (l && d(g, !0), a && d(g, !1));
      });
    }
    return n;
  }
  isBoundary(t, e) {
    const n = typeof t == "string" ? this.getCell(t) : t, i = e ? this.getIncomingEdges(n) : this.getOutgoingEdges(n);
    return i == null || i.length === 0;
  }
  getBoundaryNodes(t) {
    const e = [];
    return Object.keys(this.nodes).forEach((n) => {
      if (this.isBoundary(n, t)) {
        const i = this.getCell(n);
        i && e.push(i);
      }
    }), e;
  }
  /**
   * Returns an array of all the roots of the graph.
   */
  getRoots() {
    return this.getBoundaryNodes(!0);
  }
  /**
   * Returns an array of all the leafs of the graph.
   */
  getLeafs() {
    return this.getBoundaryNodes(!1);
  }
  /**
   * Returns `true` if the node is a root node, i.e. there is no edges
   * coming to the node.
   */
  isRoot(t) {
    return this.isBoundary(t, !0);
  }
  /**
   * Returns `true` if the node is a leaf node, i.e. there is no edges
   * going out from the node.
   */
  isLeaf(t) {
    return this.isBoundary(t, !1);
  }
  /**
   * Returns all the neighbors of node in the graph. Neighbors are all
   * the nodes connected to node via either incoming or outgoing edge.
   */
  getNeighbors(t, e = {}) {
    let n = e.incoming, i = e.outgoing;
    n == null && i == null && (n = i = !0);
    const r = this.getConnectedEdges(t, e).reduce((a, l) => {
      const c = l.hasLoop(e), h = l.getSourceCell(), u = l.getTargetCell();
      return n && h && h.isNode() && !a[h.id] && (c || h !== t && (!e.deep || !h.isDescendantOf(t))) && (a[h.id] = h), i && u && u.isNode() && !a[u.id] && (c || u !== t && (!e.deep || !u.isDescendantOf(t))) && (a[u.id] = u), a;
    }, {});
    if (t.isEdge()) {
      if (n) {
        const a = t.getSourceCell();
        a != null && a.isNode() && !r[a.id] && (r[a.id] = a);
      }
      if (i) {
        const a = t.getTargetCell();
        a != null && a.isNode() && !r[a.id] && (r[a.id] = a);
      }
    }
    return Object.keys(r).map((a) => r[a]);
  }
  /**
   * Returns `true` if `cell2` is a neighbor of `cell1`.
   */
  isNeighbor(t, e, n = {}) {
    let i = n.incoming, o = n.outgoing;
    return i == null && o == null && (i = o = !0), this.getConnectedEdges(t, n).some((r) => {
      const a = r.getSourceCell(), l = r.getTargetCell();
      return !!(i && a && a.id === e.id || o && l && l.id === e.id);
    });
  }
  getSuccessors(t, e = {}) {
    const n = [];
    return this.search(t, (i, o) => {
      i !== t && this.matchDistance(o, e.distance) && n.push(i);
    }, Object.assign(Object.assign({}, e), { outgoing: !0 })), n;
  }
  /**
   * Returns `true` if `cell2` is a successor of `cell1`.
   */
  isSuccessor(t, e, n = {}) {
    let i = !1;
    return this.search(t, (o, r) => {
      if (o === e && o !== t && this.matchDistance(r, n.distance))
        return i = !0, !1;
    }, Object.assign(Object.assign({}, n), { outgoing: !0 })), i;
  }
  getPredecessors(t, e = {}) {
    const n = [];
    return this.search(t, (i, o) => {
      i !== t && this.matchDistance(o, e.distance) && n.push(i);
    }, Object.assign(Object.assign({}, e), { incoming: !0 })), n;
  }
  /**
   * Returns `true` if `cell2` is a predecessor of `cell1`.
   */
  isPredecessor(t, e, n = {}) {
    let i = !1;
    return this.search(t, (o, r) => {
      if (o === e && o !== t && this.matchDistance(r, n.distance))
        return i = !0, !1;
    }, Object.assign(Object.assign({}, n), { incoming: !0 })), i;
  }
  matchDistance(t, e) {
    return e == null ? !0 : typeof e == "function" ? e(t) : Array.isArray(e) && e.includes(t) ? !0 : t === e;
  }
  /**
   * Returns the common ancestor of the passed cells.
   */
  getCommonAncestor(...t) {
    const e = [];
    return t.forEach((n) => {
      n && (Array.isArray(n) ? e.push(...n) : e.push(n));
    }), q.getCommonAncestor(...e);
  }
  /**
   * Returns an array of cells that result from finding nodes/edges that
   * are connected to any of the cells in the cells array. This function
   * loops over cells and if the current cell is a edge, it collects its
   * source/target nodes; if it is an node, it collects its incoming and
   * outgoing edges if both the edge terminal (source/target) are in the
   * cells array.
   */
  getSubGraph(t, e = {}) {
    const n = [], i = {}, o = [], r = [], a = (l) => {
      i[l.id] || (n.push(l), i[l.id] = l, l.isEdge() && r.push(l), l.isNode() && o.push(l));
    };
    return t.forEach((l) => {
      a(l), e.deep && l.getDescendants({ deep: !0 }).forEach((h) => {
        a(h);
      });
    }), r.forEach((l) => {
      const c = l.getSourceCell(), h = l.getTargetCell();
      c && !i[c.id] && (n.push(c), i[c.id] = c, c.isNode() && o.push(c)), h && !i[h.id] && (n.push(h), i[h.id] = h, h.isNode() && o.push(h));
    }), o.forEach((l) => {
      this.getConnectedEdges(l, e).forEach((h) => {
        const u = h.getSourceCell(), d = h.getTargetCell();
        !i[h.id] && u && i[u.id] && d && i[d.id] && (n.push(h), i[h.id] = h);
      });
    }), n;
  }
  /**
   * Clones the whole subgraph (including all the connected links whose
   * source/target is in the subgraph). If `options.deep` is `true`, also
   * take into account all the embedded cells of all the subgraph cells.
   *
   * Returns a map of the form: { [original cell ID]: [clone] }.
   */
  cloneSubGraph(t, e = {}) {
    const n = this.getSubGraph(t, e);
    return this.cloneCells(n);
  }
  cloneCells(t) {
    return q.cloneCells(t);
  }
  getNodesFromPoint(t, e) {
    const n = typeof t == "number" ? { x: t, y: e || 0 } : t;
    return this.getNodes().filter((i) => i.getBBox().containsPoint(n));
  }
  getNodesInArea(t, e, n, i, o) {
    const r = typeof t == "number" ? new I(t, e, n, i) : I.create(t), a = typeof t == "number" ? o : e, l = a == null ? void 0 : a.strict;
    return this.getNodes().filter((c) => {
      const h = c.angle(), u = c.getBBox().bbox(h);
      return l ? r.containsRect(u) : r.isIntersectWithRect(u);
    });
  }
  getEdgesInArea(t, e, n, i, o) {
    const r = typeof t == "number" ? new I(t, e, n, i) : I.create(t), a = typeof t == "number" ? o : e, l = a == null ? void 0 : a.strict;
    return this.getEdges().filter((c) => {
      const h = c.getBBox();
      return h.width === 0 ? h.inflate(1, 0) : h.height === 0 && h.inflate(0, 1), l ? r.containsRect(h) : r.isIntersectWithRect(h);
    });
  }
  getNodesUnderNode(t, e = {}) {
    const n = t.getBBox();
    return (e.by == null || e.by === "bbox" ? this.getNodesInArea(n) : this.getNodesFromPoint(n[e.by])).filter((o) => t.id !== o.id && !o.isDescendantOf(t));
  }
  /**
   * Returns the bounding box that surrounds all cells in the graph.
   */
  getAllCellsBBox() {
    return this.getCellsBBox(this.getCells());
  }
  /**
   * Returns the bounding box that surrounds all the given cells.
   */
  getCellsBBox(t, e = {}) {
    return q.getCellsBBox(t, e);
  }
  // #region search
  search(t, e, n = {}) {
    n.breadthFirst ? this.breadthFirstSearch(t, e, n) : this.depthFirstSearch(t, e, n);
  }
  breadthFirstSearch(t, e, n = {}) {
    const i = [], o = {}, r = {};
    for (i.push(t), r[t.id] = 0; i.length > 0; ) {
      const a = i.shift();
      if (a == null || o[a.id] || (o[a.id] = !0, N(e, this, a, r[a.id]) === !1))
        continue;
      this.getNeighbors(a, n).forEach((c) => {
        r[c.id] = r[a.id] + 1, i.push(c);
      });
    }
  }
  depthFirstSearch(t, e, n = {}) {
    const i = [], o = {}, r = {};
    for (i.push(t), r[t.id] = 0; i.length > 0; ) {
      const a = i.pop();
      if (a == null || o[a.id] || (o[a.id] = !0, N(e, this, a, r[a.id]) === !1))
        continue;
      const l = this.getNeighbors(a, n), c = i.length;
      l.forEach((h) => {
        r[h.id] = r[a.id] + 1, i.splice(c, 0, h);
      });
    }
  }
  // #endregion
  // #region shortest path
  /** *
   * Returns an array of IDs of nodes on the shortest
   * path between source and target.
   */
  getShortestPath(t, e, n = {}) {
    const i = {};
    this.getEdges().forEach((c) => {
      const h = c.getSourceCellId(), u = c.getTargetCellId();
      h && u && (i[h] || (i[h] = []), i[u] || (i[u] = []), i[h].push(u), n.directed || i[u].push(h));
    });
    const o = typeof t == "string" ? t : t.id, r = nw(i, o, n.weight), a = [];
    let l = typeof e == "string" ? e : e.id;
    for (r[l] && a.push(l); r[l]; ) {
      const c = r[l];
      a.unshift(c), l = c;
    }
    return a;
  }
  // #endregion
  // #region transform
  /**
   * Translate all cells in the graph by `tx` and `ty` pixels.
   */
  translate(t, e, n) {
    return this.getCells().filter((i) => !i.hasParent()).forEach((i) => {
      i.translate(t, e, n);
    }), this;
  }
  resize(t, e, n) {
    return this.resizeCells(t, e, this.getCells(), n);
  }
  resizeCells(t, e, n, i = {}) {
    const o = this.getCellsBBox(n);
    if (o) {
      const r = Math.max(t / o.width, 0), a = Math.max(e / o.height, 0), l = o.getOrigin();
      n.forEach((c) => {
        c.scale(r, a, l, i);
      });
    }
    return this;
  }
  // #endregion
  // #region serialize/deserialize
  toJSON(t = {}) {
    return qt.toJSON(this.getCells(), t);
  }
  parseJSON(t) {
    return qt.fromJSON(t);
  }
  fromJSON(t, e = {}) {
    let n = [];
    if (!e.diff)
      n = this.parseJSON(t);
    else {
      const i = t, { nodes: o = [], edges: r = [] } = i, a = G(i, ["nodes", "edges"]), l = o.filter((h) => !this.nodes[h.id]) || [], c = r.filter((h) => !this.edges[h.id]) || [];
      n = this.parseJSON(Object.assign(Object.assign({}, a), { nodes: l, edges: c }));
    }
    return this.resetCells(n, e), this;
  }
  // #endregion
  // #region batch
  startBatch(t, e = {}) {
    return this.batches[t] = (this.batches[t] || 0) + 1, this.notify("batch:start", { name: t, data: e }), this;
  }
  stopBatch(t, e = {}) {
    return this.batches[t] = (this.batches[t] || 0) - 1, this.notify("batch:stop", { name: t, data: e }), this;
  }
  batchUpdate(t, e, n = {}) {
    this.startBatch(t, n);
    const i = e();
    return this.stopBatch(t, n), i;
  }
  hasActiveBatch(t = Object.keys(this.batches)) {
    return (Array.isArray(t) ? t : [t]).some((n) => this.batches[n] > 0);
  }
  // #endregion
  dispose() {
    this.collection.dispose();
  }
}
$([
  _()
], qt.prototype, "dispose", null);
const td = {
  fill: "#ffffff",
  stroke: "#333333",
  strokeWidth: 2
}, NE = {
  fontSize: 14,
  fill: "#000000",
  refX: 0.5,
  refY: 0.5,
  textAnchor: "middle",
  textVerticalAnchor: "middle",
  fontFamily: "Arial, helvetica, sans-serif"
};
let Ji = class extends Tt {
  get label() {
    return this.getLabel();
  }
  set label(t) {
    this.setLabel(t);
  }
  getLabel() {
    return this.getAttrByPath("text/text");
  }
  setLabel(t, e) {
    return t == null ? this.removeLabel() : this.setAttrByPath("text/text", t, e), this;
  }
  removeLabel() {
    return this.removeAttrByPath("text/text"), this;
  }
};
Ji.config({
  attrs: { text: Object.assign({}, NE) },
  propHooks(s) {
    const { label: t } = s, e = G(s, ["label"]);
    return t && jn(e, "attrs/text/text", t), e;
  },
  visible: !0
});
function LE(s, t = "body") {
  return [
    {
      tagName: s,
      selector: t
    },
    {
      tagName: "text",
      selector: "label"
    }
  ];
}
function FE(s = "xlink:href") {
  return (e) => {
    const { imageUrl: n, imageWidth: i, imageHeight: o } = e, r = G(e, ["imageUrl", "imageWidth", "imageHeight"]);
    if (n != null || i != null || o != null) {
      const a = () => {
        if (r.attrs) {
          const l = r.attrs.image;
          n != null && (l[s] = n), i != null && (l.width = i), o != null && (l.height = o), r.attrs.image = l;
        }
      };
      r.attrs ? (r.attrs.image == null && (r.attrs.image = {}), a()) : (r.attrs = {
        image: {}
      }, a());
    }
    return r;
  };
}
function Yn(s, t, e = {}) {
  const n = {
    constructorName: s,
    markup: LE(s, e.selector),
    attrs: {
      [s]: Object.assign({}, td)
    }
  };
  return (e.parent || Ji).define(pt(n, t, { shape: s }));
}
function ed(s) {
  return typeof s == "string" ? s : s.map((t) => Array.isArray(t) ? t.join(",") : C.isPointLike(t) ? `${t.x}, ${t.y}` : "").join(" ");
}
Yn("circle", {
  attrs: {
    body: {
      refCx: "50%",
      refCy: "50%",
      refR: "50%"
    }
  }
});
const nd = Et.define({
  shape: "edge",
  markup: [
    {
      tagName: "path",
      selector: "wrap",
      groupSelector: "lines",
      attrs: {
        fill: "none",
        cursor: "pointer",
        stroke: "transparent",
        strokeLinecap: "round"
      }
    },
    {
      tagName: "path",
      selector: "line",
      groupSelector: "lines",
      attrs: {
        fill: "none",
        pointerEvents: "none"
      }
    }
  ],
  attrs: {
    lines: {
      connection: !0,
      strokeLinejoin: "round"
    },
    wrap: {
      strokeWidth: 10
    },
    line: {
      stroke: "#333",
      strokeWidth: 2,
      targetMarker: "classic"
    }
  }
});
Yn("ellipse", {
  attrs: {
    body: {
      refCx: "50%",
      refCy: "50%",
      refRx: "50%",
      refRy: "50%"
    }
  }
});
class re extends Gn {
  get options() {
    return this.graph.options;
  }
  get model() {
    return this.graph.model;
  }
  get view() {
    return this.graph.view;
  }
  constructor(t) {
    super(), this.graph = t, this.init();
  }
  init() {
  }
}
const id = {
  mousemove: "onMouseMove",
  touchmove: "onMouseMove",
  mouseup: "onMouseUp",
  touchend: "onMouseUp",
  touchcancel: "onDragEnd"
}, Qe = 1 << 30, zE = 1 << 29;
class se extends It {
  constructor() {
    super(...arguments), this.portsCache = {};
  }
  static isNodeView(t) {
    if (t == null)
      return !1;
    if (t instanceof se)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === Pl) && typeof n.isNodeView == "function" && typeof n.isEdgeView == "function" && typeof n.confirmUpdate == "function" && typeof n.update == "function" && typeof n.findPortElem == "function" && typeof n.resize == "function" && typeof n.rotate == "function" && typeof n.translate == "function";
  }
  get [Symbol.toStringTag]() {
    return Pl;
  }
  getContainerClassName() {
    const t = [
      super.getContainerClassName(),
      this.prefixClassName("node")
    ];
    return this.can("nodeMovable") || t.push(this.prefixClassName("node-immovable")), t.join(" ");
  }
  updateClassName(t) {
    const e = t.target;
    if (e.hasAttribute("magnet")) {
      const n = this.prefixClassName("port-unconnectable");
      this.can("magnetConnectable") ? ut(e, n) : k(e, n);
    } else {
      const n = this.prefixClassName("node-immovable");
      this.can("nodeMovable") ? this.removeClass(n) : this.addClass(n);
    }
  }
  isNodeView() {
    return !0;
  }
  confirmUpdate(t, e = {}) {
    let n = t;
    return this.hasAction(n, "ports") && (this.removePorts(), this.cleanPortsCache()), this.hasAction(n, "render") ? (this.render(), n = this.removeAction(n, [
      "render",
      "update",
      "resize",
      "translate",
      "rotate",
      "ports",
      "tools"
    ])) : (n = this.handleAction(n, "resize", () => this.resize(), "update"), n = this.handleAction(
      n,
      "update",
      () => this.update(),
      // `update()` will render ports when useCSSSelectors are enabled
      "ports"
    ), n = this.handleAction(n, "translate", () => this.translate()), n = this.handleAction(n, "rotate", () => this.rotate()), n = this.handleAction(n, "ports", () => this.renderPorts()), n = this.handleAction(n, "tools", () => {
      this.getFlag("tools") === t ? this.renderTools() : this.updateTools(e);
    })), n;
  }
  update(t) {
    this.cleanCache(), this.removePorts();
    const e = this.cell, n = e.getSize(), i = e.getAttrs();
    this.updateAttrs(this.container, i, {
      attrs: t === i ? null : t,
      rootBBox: new I(0, 0, n.width, n.height),
      selectors: this.selectors
    }), this.renderPorts();
  }
  renderMarkup() {
    const t = this.cell.markup;
    if (t) {
      if (typeof t == "string")
        throw new TypeError("Not support string markup.");
      return this.renderJSONMarkup(t);
    }
    throw new TypeError("Invalid node markup.");
  }
  renderJSONMarkup(t) {
    const e = this.parseJSONMarkup(t, this.container);
    this.selectors = e.selectors, this.container.appendChild(e.fragment);
  }
  render() {
    return this.empty(), this.renderMarkup(), this.resize(), this.updateTransform(), this.renderTools(), this.notify("view:render", { view: this }), this;
  }
  resize() {
    this.cell.getAngle() && this.rotate(), this.update();
  }
  translate() {
    this.updateTransform();
  }
  rotate() {
    this.updateTransform();
  }
  getTranslationString() {
    const t = this.cell.getPosition();
    return `translate(${t.x},${t.y})`;
  }
  getRotationString() {
    const t = this.cell.getAngle();
    if (t) {
      const e = this.cell.getSize();
      return `rotate(${t},${e.width / 2},${e.height / 2})`;
    }
  }
  updateTransform() {
    let t = this.getTranslationString();
    const e = this.getRotationString();
    e && (t += ` ${e}`), this.container.setAttribute("transform", t);
  }
  // #region ports
  findPortElem(t, e) {
    const n = t ? this.portsCache[t] : null;
    if (!n)
      return null;
    const i = n.portContentElement, o = n.portContentSelectors || {};
    return this.findOne(e, i, o);
  }
  cleanPortsCache() {
    this.portsCache = {};
  }
  removePorts() {
    Object.values(this.portsCache).forEach((t) => {
      ee(t.portElement);
    });
  }
  renderPorts() {
    const t = this.container, e = [];
    t.childNodes.forEach((r) => {
      e.push(r);
    });
    const n = this.cell.getParsedPorts(), i = Da(n, "zIndex"), o = "auto";
    i[o] && i[o].forEach((r) => {
      const a = this.getPortElement(r);
      t.append(a), e.push(a);
    }), Object.keys(i).forEach((r) => {
      if (r !== o) {
        const a = parseInt(r, 10);
        this.appendPorts(i[r], a, e);
      }
    }), this.updatePorts();
  }
  appendPorts(t, e, n) {
    const i = t.map((o) => this.getPortElement(o));
    n[e] || e < 0 ? hi(n[Math.max(e, 0)], i) : Rt(this.container, i);
  }
  getPortElement(t) {
    const e = this.portsCache[t.id];
    return e ? e.portElement : this.createPortElement(t);
  }
  createPortElement(t) {
    let e = Nt.renderMarkup(this.cell.getPortContainerMarkup());
    const n = e.elem;
    if (n == null)
      throw new Error("Invalid port container markup.");
    e = Nt.renderMarkup(this.getPortMarkup(t));
    const i = e.elem, o = e.selectors;
    if (i == null)
      throw new Error("Invalid port markup.");
    this.setAttrs({
      port: t.id,
      "port-group": t.group
    }, i);
    let r = "x6-port";
    t.group && (r += ` x6-port-${t.group}`), k(n, r), k(n, "x6-port"), k(i, "x6-port-body"), n.appendChild(i);
    let a = o, l, c;
    if (this.existPortLabel(t)) {
      if (e = Nt.renderMarkup(this.getPortLabelMarkup(t.label)), l = e.elem, c = e.selectors, l == null)
        throw new Error("Invalid port label markup.");
      if (o && c) {
        for (const u in c)
          if (o[u] && u !== this.rootSelector)
            throw new Error("Selectors within port must be unique.");
        a = Object.assign(Object.assign({}, o), c);
      }
      k(l, "x6-port-label"), n.appendChild(l);
    }
    return this.portsCache[t.id] = {
      portElement: n,
      portSelectors: a,
      portLabelElement: l,
      portLabelSelectors: c,
      portContentElement: i,
      portContentSelectors: o
    }, this.graph.options.onPortRendered && this.graph.options.onPortRendered({
      port: t,
      node: this.cell,
      container: n,
      selectors: a,
      labelContainer: l,
      labelSelectors: c,
      contentContainer: i,
      contentSelectors: o
    }), n;
  }
  updatePorts() {
    const t = this.cell.getParsedGroups(), e = Object.keys(t);
    e.length === 0 ? this.updatePortGroup() : e.forEach((n) => {
      this.updatePortGroup(n);
    });
  }
  updatePortGroup(t) {
    const e = I.fromSize(this.cell.getSize()), n = this.cell.getPortsLayoutByGroup(t, e);
    for (let i = 0, o = n.length; i < o; i += 1) {
      const r = n[i], a = r.portId, l = this.portsCache[a] || {}, c = r.portLayout;
      if (this.applyPortTransform(l.portElement, c), r.portAttrs != null) {
        const u = {
          // @ts-expect-error
          selectors: l.portSelectors || {}
        };
        r.portSize && (u.rootBBox = I.fromSize(r.portSize)), this.updateAttrs(l.portElement, r.portAttrs, u);
      }
      const h = r.labelLayout;
      if (h && l.portLabelElement && (this.applyPortTransform(
        // @ts-expect-error
        l.portLabelElement,
        h,
        -(c.angle || 0)
      ), h.attrs)) {
        const u = {
          // @ts-expect-error
          selectors: l.portLabelSelectors || {}
        };
        r.labelSize && (u.rootBBox = I.fromSize(r.labelSize)), this.updateAttrs(l.portLabelElement, h.attrs, u);
      }
    }
  }
  applyPortTransform(t, e, n = 0) {
    const i = e.angle, o = e.position, r = kt().rotate(n).translate(o.x || 0, o.y || 0).rotate(i || 0);
    On(t, r, { absolute: !0 });
  }
  getPortMarkup(t) {
    return t.markup || this.cell.portMarkup;
  }
  getPortLabelMarkup(t) {
    return t.markup || this.cell.portLabelMarkup;
  }
  existPortLabel(t) {
    return t.attrs && t.attrs.text;
  }
  getEventArgs(t, e, n) {
    const i = this, o = i.cell, r = o;
    return e == null || n == null ? { e: t, view: i, node: o, cell: r } : { e: t, x: e, y: n, view: i, node: o, cell: r };
  }
  getPortEventArgs(t, e, n) {
    const i = this, o = i.cell, r = o;
    return n ? {
      e: t,
      x: n.x,
      y: n.y,
      view: i,
      node: o,
      cell: r,
      port: e
    } : { e: t, view: i, node: o, cell: r, port: e };
  }
  notifyMouseDown(t, e, n) {
    super.onMouseDown(t, e, n), this.notify("node:mousedown", this.getEventArgs(t, e, n));
  }
  notifyMouseMove(t, e, n) {
    super.onMouseMove(t, e, n), this.notify("node:mousemove", this.getEventArgs(t, e, n));
  }
  notifyMouseUp(t, e, n) {
    super.onMouseUp(t, e, n), this.notify("node:mouseup", this.getEventArgs(t, e, n));
  }
  notifyPortEvent(t, e, n) {
    const i = this.findAttr("port", e.target);
    if (i) {
      const o = e.type;
      t === "node:port:mouseenter" ? e.type = "mouseenter" : t === "node:port:mouseleave" && (e.type = "mouseleave"), this.notify(t, this.getPortEventArgs(e, i, n)), e.type = o;
    }
  }
  onClick(t, e, n) {
    super.onClick(t, e, n), this.notify("node:click", this.getEventArgs(t, e, n)), this.notifyPortEvent("node:port:click", t, { x: e, y: n });
  }
  onDblClick(t, e, n) {
    super.onDblClick(t, e, n), this.notify("node:dblclick", this.getEventArgs(t, e, n)), this.notifyPortEvent("node:port:dblclick", t, { x: e, y: n });
  }
  onContextMenu(t, e, n) {
    super.onContextMenu(t, e, n), this.notify("node:contextmenu", this.getEventArgs(t, e, n)), this.notifyPortEvent("node:port:contextmenu", t, { x: e, y: n });
  }
  onMouseDown(t, e, n) {
    this.isPropagationStopped(t) || (this.notifyMouseDown(t, e, n), this.notifyPortEvent("node:port:mousedown", t, { x: e, y: n }), this.startNodeDragging(t, e, n));
  }
  onMouseMove(t, e, n) {
    const i = this.getEventData(t), o = i.action;
    if (o === "magnet")
      this.dragMagnet(t, e, n);
    else {
      if (o === "move") {
        const a = i.targetView || this;
        a.dragNode(t, e, n), a.notify("node:moving", {
          e: t,
          x: e,
          y: n,
          view: a,
          cell: a.cell,
          node: a.cell
        });
      }
      this.notifyMouseMove(t, e, n), this.notifyPortEvent("node:port:mousemove", t, { x: e, y: n });
    }
    this.setEventData(t, i);
  }
  onMouseUp(t, e, n) {
    const i = this.getEventData(t), o = i.action;
    o === "magnet" ? this.stopMagnetDragging(t, e, n) : (this.notifyMouseUp(t, e, n), this.notifyPortEvent("node:port:mouseup", t, { x: e, y: n }), o === "move" && (i.targetView || this).stopNodeDragging(t, e, n));
    const r = i.targetMagnet;
    r && this.onMagnetClick(t, r, e, n), this.checkMouseleave(t);
  }
  onMouseOver(t) {
    super.onMouseOver(t), this.notify("node:mouseover", this.getEventArgs(t)), this.notifyPortEvent("node:port:mouseenter", t), this.notifyPortEvent("node:port:mouseover", t);
  }
  onMouseOut(t) {
    super.onMouseOut(t), this.notify("node:mouseout", this.getEventArgs(t)), this.notifyPortEvent("node:port:mouseleave", t), this.notifyPortEvent("node:port:mouseout", t);
  }
  onMouseEnter(t) {
    this.updateClassName(t), super.onMouseEnter(t), this.notify("node:mouseenter", this.getEventArgs(t));
  }
  onMouseLeave(t) {
    super.onMouseLeave(t), this.notify("node:mouseleave", this.getEventArgs(t));
  }
  onMouseWheel(t, e, n, i) {
    super.onMouseWheel(t, e, n, i), this.notify("node:mousewheel", Object.assign({ delta: i }, this.getEventArgs(t, e, n)));
  }
  onMagnetClick(t, e, n, i) {
    const o = this.graph;
    o.view.getMouseMovedCount(t) > o.options.clickThreshold || this.notify("node:magnet:click", Object.assign({ magnet: e }, this.getEventArgs(t, n, i)));
  }
  onMagnetDblClick(t, e, n, i) {
    this.notify("node:magnet:dblclick", Object.assign({ magnet: e }, this.getEventArgs(t, n, i)));
  }
  onMagnetContextMenu(t, e, n, i) {
    this.notify("node:magnet:contextmenu", Object.assign({ magnet: e }, this.getEventArgs(t, n, i)));
  }
  onMagnetMouseDown(t, e, n, i) {
    this.startMagnetDragging(t, n, i);
  }
  onCustomEvent(t, e, n, i) {
    this.notify("node:customevent", Object.assign({ name: e }, this.getEventArgs(t, n, i))), super.onCustomEvent(t, e, n, i);
  }
  prepareEmbedding(t) {
    const e = this.graph, i = this.getEventData(t).cell || this.cell, o = e.findViewByCell(i), r = e.snapToGrid(t.clientX, t.clientY);
    this.notify("node:embed", {
      e: t,
      node: i,
      view: o,
      cell: i,
      x: r.x,
      y: r.y,
      currentParent: i.getParent()
    });
  }
  processEmbedding(t, e) {
    const n = e.cell || this.cell, i = e.graph || this.graph, o = i.options.embedding, r = o.findParent;
    let a = typeof r == "function" ? N(r, i, {
      view: this,
      node: this.cell
    }).filter((d) => q.isCell(d) && this.cell.id !== d.id && !d.isDescendantOf(this.cell)) : i.model.getNodesUnderNode(n, {
      by: r
    });
    if (o.frontOnly && a.length > 0) {
      const d = Da(a, "zIndex"), g = Hy(Object.keys(d).map((f) => parseInt(f, 10)));
      g && (a = d[g]);
    }
    a = a.filter((d) => d.visible);
    let l = null;
    const c = e.candidateEmbedView, h = o.validate;
    for (let d = a.length - 1; d >= 0; d -= 1) {
      const g = a[d];
      if (c && c.cell.id === g.id) {
        l = c;
        break;
      } else {
        const f = g.findView(i);
        if (h && N(h, i, {
          child: this.cell,
          parent: f.cell,
          childView: this,
          parentView: f
        })) {
          l = f;
          break;
        }
      }
    }
    this.clearEmbedding(e), l && l.highlight(null, { type: "embedding" }), e.candidateEmbedView = l;
    const u = i.snapToGrid(t.clientX, t.clientY);
    this.notify("node:embedding", {
      e: t,
      cell: n,
      node: n,
      view: i.findViewByCell(n),
      x: u.x,
      y: u.y,
      currentParent: n.getParent(),
      candidateParent: l ? l.cell : null
    });
  }
  clearEmbedding(t) {
    const e = t.candidateEmbedView;
    e && (e.unhighlight(null, { type: "embedding" }), t.candidateEmbedView = null);
  }
  finalizeEmbedding(t, e) {
    this.graph.startBatch("embedding");
    const n = e.cell || this.cell, i = e.graph || this.graph, o = i.findViewByCell(n), r = n.getParent(), a = e.candidateEmbedView;
    if (a ? (a.unhighlight(null, { type: "embedding" }), e.candidateEmbedView = null, (r == null || r.id !== a.cell.id) && a.cell.insertChild(n, void 0, { ui: !0 })) : r && r.unembed(n, { ui: !0 }), i.model.getConnectedEdges(n, { deep: !0 }).forEach((l) => {
      l.updateParent({ ui: !0 });
    }), o && a) {
      const l = i.snapToGrid(t.clientX, t.clientY);
      o.notify("node:embedded", {
        e: t,
        cell: n,
        x: l.x,
        y: l.y,
        node: n,
        view: i.findViewByCell(n),
        previousParent: r,
        currentParent: n.getParent()
      });
    }
    this.graph.stopBatch("embedding");
  }
  getDelegatedView() {
    let t = this.cell, e = this;
    for (; e && !t.isEdge(); ) {
      if (!t.hasParent() || e.can("stopDelegateOnDragging"))
        return e;
      t = t.getParent(), e = this.graph.findViewByCell(t);
    }
    return null;
  }
  validateMagnet(t, e, n) {
    if (e.getAttribute("magnet") !== "passive") {
      const i = this.graph.options.connecting.validateMagnet;
      return i ? N(i, this.graph, {
        e: n,
        magnet: e,
        view: t,
        cell: t.cell
      }) : !0;
    }
    return !1;
  }
  startMagnetDragging(t, e, n) {
    if (!this.can("magnetConnectable"))
      return;
    t.stopPropagation();
    const i = t.currentTarget, o = this.graph;
    this.setEventData(t, {
      targetMagnet: i
    }), this.validateMagnet(this, i, t) ? (o.options.magnetThreshold <= 0 && this.startConnectting(t, i, e, n), this.setEventData(t, {
      action: "magnet"
    }), this.stopPropagation(t)) : this.onMouseDown(t, e, n), o.view.delegateDragEvents(t, this);
  }
  startConnectting(t, e, n, i) {
    this.graph.model.startBatch("add-edge");
    const o = this.createEdgeFromMagnet(e, n, i);
    o.setEventData(t, o.prepareArrowheadDragging("target", {
      x: n,
      y: i,
      isNewEdge: !0,
      fallbackAction: "remove"
    })), this.setEventData(t, { edgeView: o }), o.notifyMouseDown(t, n, i);
  }
  getDefaultEdge(t, e) {
    let n;
    const i = this.graph.options.connecting.createEdge;
    return i && (n = N(i, this.graph, {
      sourceMagnet: e,
      sourceView: t,
      sourceCell: t.cell
    })), n;
  }
  createEdgeFromMagnet(t, e, n) {
    const i = this.graph, o = i.model, r = this.getDefaultEdge(this, t);
    return r.setSource(Object.assign(Object.assign({}, r.getSource()), this.getEdgeTerminal(t, e, n, r, "source"))), r.setTarget(Object.assign(Object.assign({}, r.getTarget()), { x: e, y: n })), r.addTo(o, { async: !1, ui: !0 }), r.findView(i);
  }
  dragMagnet(t, e, n) {
    const i = this.getEventData(t), o = i.edgeView;
    if (o)
      o.onMouseMove(t, e, n), this.autoScrollGraph(t.clientX, t.clientY);
    else {
      const r = this.graph, a = r.options.magnetThreshold, l = this.getEventTarget(t), c = i.targetMagnet;
      if (a === "onleave") {
        if (c === l || c.contains(l))
          return;
      } else if (r.view.getMouseMovedCount(t) <= a)
        return;
      this.startConnectting(t, c, e, n);
    }
  }
  stopMagnetDragging(t, e, n) {
    const o = this.eventData(t).edgeView;
    o && (o.onMouseUp(t, e, n), this.graph.model.stopBatch("add-edge"));
  }
  notifyUnhandledMouseDown(t, e, n) {
    this.notify("node:unhandled:mousedown", {
      e: t,
      x: e,
      y: n,
      view: this,
      cell: this.cell,
      node: this.cell
    });
  }
  notifyNodeMove(t, e, n, i, o) {
    let r = [o];
    const a = this.graph.getPlugin("selection");
    if (a && a.isSelectionMovable()) {
      const l = a.getSelectedCells();
      l.includes(o) && (r = l.filter((c) => c.isNode()));
    }
    r.forEach((l) => {
      this.notify(t, {
        e,
        x: n,
        y: i,
        cell: l,
        node: l,
        view: l.findView(this.graph)
      });
    });
  }
  getRestrictArea(t) {
    const e = this.graph.options.translating.restrict, n = typeof e == "function" ? N(e, this.graph, t) : e;
    return typeof n == "number" ? this.graph.transform.getGraphArea().inflate(n) : n === !0 ? this.graph.transform.getGraphArea() : n || null;
  }
  startNodeDragging(t, e, n) {
    const i = this.getDelegatedView();
    if (i == null || !i.can("nodeMovable"))
      return this.notifyUnhandledMouseDown(t, e, n);
    this.setEventData(t, {
      targetView: i,
      action: "move"
    });
    const o = C.create(i.cell.getPosition());
    i.setEventData(t, {
      moving: !1,
      offset: o.diff(e, n),
      restrict: this.getRestrictArea(i)
    });
  }
  dragNode(t, e, n) {
    const i = this.cell, o = this.graph, r = o.getGridSize(), a = this.getEventData(t), l = a.offset, c = a.restrict;
    a.moving || (a.moving = !0, this.addClass("node-moving"), this.notifyNodeMove("node:move", t, e, n, this.cell)), this.autoScrollGraph(t.clientX, t.clientY);
    const h = ue(e + l.x, r), u = ue(n + l.y, r);
    i.setPosition(h, u, {
      restrict: c,
      deep: !0,
      ui: !0
    }), o.options.embedding.enabled && (a.embedding || (this.prepareEmbedding(t), a.embedding = !0), this.processEmbedding(t, a));
  }
  autoOffsetNode() {
    const t = this.cell, e = this.graph, n = Object.assign({ id: t.id }, t.getPosition()), o = e.getNodes().map((c) => {
      const h = c.getPosition();
      return { id: c.id, x: h.x, y: h.y };
    }).filter((c) => c.id !== n.id), r = [
      [1, 1],
      // offset to right bottom
      [1, -1],
      // offset to right top
      [-1, 1],
      // offset to left bottom
      [-1, -1]
      // offset to left top
    ];
    let a = e.getGridSize();
    const l = (c) => o.some((h) => h.x === c.x && h.y === c.y);
    for (; l(n); ) {
      let c = !1;
      for (let h = 0; h < r.length; h += 1) {
        const u = r[h], d = {
          x: n.x + u[0] * a,
          y: n.y + u[1] * a
        };
        if (!l(d)) {
          t.translate(u[0] * a, u[1] * a), c = !0;
          break;
        }
      }
      if (c)
        break;
      a += e.getGridSize();
    }
  }
  stopNodeDragging(t, e, n) {
    const i = this.getEventData(t), o = this.graph;
    i.embedding && this.finalizeEmbedding(t, i), i.moving && (o.options.translating.autoOffset && this.autoOffsetNode(), this.removeClass("node-moving"), this.notifyNodeMove("node:moved", t, e, n, this.cell)), i.moving = !1, i.embedding = !1;
  }
  // eslint-disable-next-line
  autoScrollGraph(t, e) {
    const n = this.graph.getPlugin("scroller");
    n && n.autoScroll(t, e);
  }
}
const Pl = `X6.${se.name}`;
se.config({
  isSvgElement: !0,
  priority: 0,
  bootstrap: ["render"],
  actions: {
    view: ["render"],
    markup: ["render"],
    attrs: ["update"],
    size: ["resize", "ports", "tools"],
    angle: ["rotate", "tools"],
    position: ["translate", "tools"],
    ports: ["ports"],
    tools: ["tools"]
  }
});
se.registry.register("node", se, !0);
class Ye extends It {
  constructor() {
    super(...arguments), this.POINT_ROUNDING = 2, this.labelDestroyFn = {};
  }
  static isEdgeView(t) {
    if (t == null)
      return !1;
    if (t instanceof Ye)
      return !0;
    const e = t[Symbol.toStringTag], n = t;
    return (e == null || e === Tl) && typeof n.isNodeView == "function" && typeof n.isEdgeView == "function" && typeof n.confirmUpdate == "function" && typeof n.update == "function" && typeof n.getConnection == "function";
  }
  get [Symbol.toStringTag]() {
    return Tl;
  }
  getContainerClassName() {
    return [super.getContainerClassName(), this.prefixClassName("edge")].join(" ");
  }
  get sourceBBox() {
    const t = this.sourceView;
    if (!t) {
      const n = this.cell.getSource();
      return new I(n.x, n.y);
    }
    const e = this.sourceMagnet;
    return t.isEdgeElement(e) ? new I(this.sourceAnchor.x, this.sourceAnchor.y) : t.getBBoxOfElement(e || t.container);
  }
  get targetBBox() {
    const t = this.targetView;
    if (!t) {
      const n = this.cell.getTarget();
      return new I(n.x, n.y);
    }
    const e = this.targetMagnet;
    return t.isEdgeElement(e) ? new I(this.targetAnchor.x, this.targetAnchor.y) : t.getBBoxOfElement(e || t.container);
  }
  isEdgeView() {
    return !0;
  }
  confirmUpdate(t, e = {}) {
    let n = t;
    if (this.hasAction(n, "source")) {
      if (!this.updateTerminalProperties("source"))
        return n;
      n = this.removeAction(n, "source");
    }
    if (this.hasAction(n, "target")) {
      if (!this.updateTerminalProperties("target"))
        return n;
      n = this.removeAction(n, "target");
    }
    return this.hasAction(n, "render") ? (this.render(), n = this.removeAction(n, ["render", "update", "labels", "tools"]), n) : (n = this.handleAction(n, "update", () => this.update(e)), n = this.handleAction(n, "labels", () => this.onLabelsChange(e)), n = this.handleAction(n, "tools", () => this.renderTools()), n);
  }
  // #region render
  render() {
    return this.empty(), this.renderMarkup(), this.labelContainer = null, this.renderLabels(), this.update(), this.renderTools(), this.notify("view:render", { view: this }), this;
  }
  renderMarkup() {
    const t = this.cell.markup;
    if (t) {
      if (typeof t == "string")
        throw new TypeError("Not support string markup.");
      return this.renderJSONMarkup(t);
    }
    throw new TypeError("Invalid edge markup.");
  }
  renderJSONMarkup(t) {
    const e = this.parseJSONMarkup(t, this.container);
    this.selectors = e.selectors, this.container.append(e.fragment);
  }
  customizeLabels() {
    if (this.labelContainer) {
      const t = this.cell, e = t.labels;
      for (let n = 0, i = e.length; n < i; n += 1) {
        const o = e[n], r = this.labelCache[n], a = this.labelSelectors[n], l = this.graph.options.onEdgeLabelRendered;
        if (l) {
          const c = l({
            edge: t,
            label: o,
            container: r,
            selectors: a
          });
          c && (this.labelDestroyFn[n] = c);
        }
      }
    }
  }
  destroyCustomizeLabels() {
    const t = this.cell.labels;
    if (this.labelCache && this.labelSelectors && this.labelDestroyFn)
      for (let e = 0, n = t.length; e < n; e += 1) {
        const i = this.labelDestroyFn[e], o = this.labelCache[e], r = this.labelSelectors[e];
        i && o && r && i({
          edge: this.cell,
          label: t[e],
          container: o,
          selectors: r
        });
      }
    this.labelDestroyFn = {};
  }
  renderLabels() {
    const t = this.cell, e = t.getLabels(), n = e.length;
    let i = this.labelContainer;
    if (this.labelCache = {}, this.labelSelectors = {}, n <= 0)
      return i && i.parentNode && i.parentNode.removeChild(i), this;
    i ? this.empty(i) : (i = pe("g"), this.addClass(this.prefixClassName("edge-labels"), i), this.labelContainer = i);
    for (let o = 0, r = e.length; o < r; o += 1) {
      const a = e[o], l = this.normalizeLabelMarkup(this.parseLabelMarkup(a.markup));
      let c, h;
      if (l)
        c = l.node, h = l.selectors;
      else {
        const d = t.getDefaultLabel(), g = this.normalizeLabelMarkup(this.parseLabelMarkup(d.markup));
        c = g.node, h = g.selectors;
      }
      c.setAttribute("data-index", `${o}`), i.appendChild(c);
      const u = this.rootSelector;
      if (h[u])
        throw new Error("Ambiguous label root selector.");
      h[u] = c, this.labelCache[o] = c, this.labelSelectors[o] = h;
    }
    return i.parentNode == null && this.container.appendChild(i), this.updateLabels(), this.customizeLabels(), this;
  }
  onLabelsChange(t = {}) {
    this.destroyCustomizeLabels(), this.shouldRerenderLabels(t) ? this.renderLabels() : this.updateLabels(), this.updateLabelPositions();
  }
  shouldRerenderLabels(t = {}) {
    const e = this.cell.previous("labels");
    if (e == null)
      return !0;
    if ("propertyPathArray" in t && "propertyValue" in t) {
      const n = t.propertyPathArray || [], i = n.length;
      if (i > 1) {
        const o = n[1];
        if (e[o]) {
          if (i === 2)
            return typeof t.propertyValue == "object" && Yi(t.propertyValue, "markup");
          if (n[2] !== "markup")
            return !1;
        }
      }
    }
    return !0;
  }
  parseLabelMarkup(t) {
    return t ? typeof t == "string" ? this.parseLabelStringMarkup(t) : this.parseJSONMarkup(t) : null;
  }
  parseLabelStringMarkup(t) {
    const e = F.createVectors(t), n = document.createDocumentFragment();
    for (let i = 0, o = e.length; i < o; i += 1) {
      const r = e[i].node;
      n.appendChild(r);
    }
    return { fragment: n, selectors: {} };
  }
  normalizeLabelMarkup(t) {
    if (t == null)
      return;
    const e = t.fragment;
    if (!(e instanceof DocumentFragment) || !e.hasChildNodes())
      throw new Error("Invalid label markup.");
    let n;
    const i = e.childNodes;
    return i.length > 1 || i[0].nodeName.toUpperCase() !== "G" ? n = F.create("g").append(e) : n = F.create(i[0]), n.addClass(this.prefixClassName("edge-label")), {
      node: n.node,
      selectors: t.selectors
    };
  }
  updateLabels() {
    if (this.labelContainer) {
      const t = this.cell, e = t.labels, n = this.can("edgeLabelMovable"), i = t.getDefaultLabel();
      for (let o = 0, r = e.length; o < r; o += 1) {
        const a = this.labelCache[o], l = this.labelSelectors[o];
        a.setAttribute("cursor", n ? "move" : "default");
        const c = e[o], h = pt({}, i.attrs, c.attrs);
        this.updateAttrs(a, h, {
          selectors: l,
          rootBBox: c.size ? I.fromSize(c.size) : void 0
        });
      }
    }
  }
  renderTools() {
    const t = this.cell.getTools();
    return this.addTools(t), this;
  }
  // #endregion
  // #region updating
  update(t = {}) {
    var e;
    this.cleanCache(), this.updateConnection(t);
    const n = this.cell.getAttrs(), { text: i } = n, o = G(n, ["text"]);
    if (o != null) {
      if (((e = this.container) === null || e === void 0 ? void 0 : e.tagName) === "g" && this.isEdgeElement(this.container) && CC) {
        const r = this.container.parentNode;
        if (r) {
          const a = this.container.nextSibling;
          r.removeChild(this.container), r.insertBefore(this.container, a);
        }
      }
      this.updateAttrs(this.container, o, {
        selectors: this.selectors
      });
    }
    return this.updateLabelPositions(), this.updateTools(t), this;
  }
  removeRedundantLinearVertices(t = {}) {
    const e = this.cell, n = e.getVertices(), i = [this.sourceAnchor, ...n, this.targetAnchor], o = i.length, r = new Mt(i);
    r.simplify({ threshold: 0.01 });
    const a = r.points.map((c) => c.toJSON()), l = a.length;
    return o === l ? 0 : (e.setVertices(a.slice(1, l - 1), t), o - l);
  }
  getTerminalView(t) {
    switch (t) {
      case "source":
        return this.sourceView || null;
      case "target":
        return this.targetView || null;
      default:
        throw new Error(`Unknown terminal type '${t}'`);
    }
  }
  getTerminalAnchor(t) {
    switch (t) {
      case "source":
        return C.create(this.sourceAnchor);
      case "target":
        return C.create(this.targetAnchor);
      default:
        throw new Error(`Unknown terminal type '${t}'`);
    }
  }
  getTerminalConnectionPoint(t) {
    switch (t) {
      case "source":
        return C.create(this.sourcePoint);
      case "target":
        return C.create(this.targetPoint);
      default:
        throw new Error(`Unknown terminal type '${t}'`);
    }
  }
  getTerminalMagnet(t, e = {}) {
    switch (t) {
      case "source": {
        if (e.raw)
          return this.sourceMagnet;
        const n = this.sourceView;
        return n ? this.sourceMagnet || n.container : null;
      }
      case "target": {
        if (e.raw)
          return this.targetMagnet;
        const n = this.targetView;
        return n ? this.targetMagnet || n.container : null;
      }
      default:
        throw new Error(`Unknown terminal type '${t}'`);
    }
  }
  updateConnection(t = {}) {
    const e = this.cell;
    if (t.translateBy && e.isFragmentDescendantOf(t.translateBy)) {
      const n = t.tx || 0, i = t.ty || 0;
      this.routePoints = new Mt(this.routePoints).translate(n, i).points, this.translateConnectionPoints(n, i), this.path.translate(n, i);
    } else {
      const n = e.getVertices(), i = this.findAnchors(n);
      this.sourceAnchor = i.source, this.targetAnchor = i.target, this.routePoints = this.findRoutePoints(n);
      const o = this.findConnectionPoints(this.routePoints, this.sourceAnchor, this.targetAnchor);
      this.sourcePoint = o.source, this.targetPoint = o.target;
      const r = this.findMarkerPoints(this.routePoints, this.sourcePoint, this.targetPoint);
      this.path = this.findPath(this.routePoints, r.source || this.sourcePoint, r.target || this.targetPoint);
    }
    this.cleanCache();
  }
  findAnchors(t) {
    const e = this.cell, n = e.source, i = e.target, o = t[0], r = t[t.length - 1];
    return i.priority && !n.priority ? this.findAnchorsOrdered("target", r, "source", o) : this.findAnchorsOrdered("source", o, "target", r);
  }
  findAnchorsOrdered(t, e, n, i) {
    let o, r;
    const a = this.cell, l = a[t], c = a[n], h = this.getTerminalView(t), u = this.getTerminalView(n), d = this.getTerminalMagnet(t), g = this.getTerminalMagnet(n);
    if (h) {
      let f;
      e ? f = C.create(e) : u ? f = g : f = C.create(c), o = this.getAnchor(l.anchor, h, d, f, t);
    } else
      o = C.create(l);
    if (u) {
      const f = C.create(i || o);
      r = this.getAnchor(c.anchor, u, g, f, n);
    } else
      r = C.isPointLike(c) ? C.create(c) : new C();
    return {
      [t]: o,
      [n]: r
    };
  }
  getAnchor(t, e, n, i, o) {
    const r = e.isEdgeElement(n), a = this.graph.options.connecting;
    let l = typeof t == "string" ? { name: t } : t;
    if (!l) {
      const u = r ? (o === "source" ? a.sourceEdgeAnchor : a.targetEdgeAnchor) || a.edgeAnchor : (o === "source" ? a.sourceAnchor : a.targetAnchor) || a.anchor;
      l = typeof u == "string" ? { name: u } : u;
    }
    if (!l)
      throw new Error("Anchor should be specified.");
    let c;
    const h = l.name;
    if (r) {
      const u = Ci.get(h);
      if (typeof u != "function")
        return Ci.onNotFound(h);
      c = N(u, this, e, n, i, l.args || {}, o);
    } else {
      const u = xi.get(h);
      if (typeof u != "function")
        return xi.onNotFound(h);
      c = N(u, this, e, n, i, l.args || {}, o);
    }
    return c ? c.round(this.POINT_ROUNDING) : new C();
  }
  findRoutePoints(t = []) {
    const e = this.graph.options.connecting.router || Ho.normal, n = this.cell.getRouter() || e;
    let i;
    if (typeof n == "function")
      i = N(n, this, t, {}, this);
    else {
      const o = typeof n == "string" ? n : n.name, r = typeof n == "string" ? {} : n.args || {}, a = o ? Si.get(o) : Ho.normal;
      if (typeof a != "function")
        return Si.onNotFound(o);
      i = N(a, this, t, r, this);
    }
    return i == null ? t.map((o) => C.create(o)) : i.map((o) => C.create(o));
  }
  findConnectionPoints(t, e, n) {
    const i = this.cell, o = this.graph.options.connecting, r = i.getSource(), a = i.getTarget(), l = this.sourceView, c = this.targetView, h = t[0], u = t[t.length - 1];
    let d;
    if (l && !l.isEdgeElement(this.sourceMagnet)) {
      const f = this.sourceMagnet || l.container, p = h || n, m = new R(p, e), b = r.connectionPoint || o.sourceConnectionPoint || o.connectionPoint;
      d = this.getConnectionPoint(b, l, f, m, "source");
    } else
      d = e;
    let g;
    if (c && !c.isEdgeElement(this.targetMagnet)) {
      const f = this.targetMagnet || c.container, p = a.connectionPoint || o.targetConnectionPoint || o.connectionPoint, m = u || e, b = new R(m, n);
      g = this.getConnectionPoint(p, c, f, b, "target");
    } else
      g = n;
    return {
      source: d,
      target: g
    };
  }
  getConnectionPoint(t, e, n, i, o) {
    const r = i.end;
    if (t == null)
      return r;
    const a = typeof t == "string" ? t : t.name, l = typeof t == "string" ? {} : t.args, c = mi.get(a);
    if (typeof c != "function")
      return mi.onNotFound(a);
    const h = N(c, this, i, e, n, l || {}, o);
    return h ? h.round(this.POINT_ROUNDING) : r;
  }
  findMarkerPoints(t, e, n) {
    const i = (u) => {
      const d = this.cell.getAttrs(), g = Object.keys(d);
      for (let f = 0, p = g.length; f < p; f += 1) {
        const m = d[g[f]];
        if (m[`${u}Marker`] || m[`${u}-marker`]) {
          const b = m.strokeWidth || m["stroke-width"];
          if (b)
            return parseFloat(b);
          break;
        }
      }
      return null;
    }, o = t[0], r = t[t.length - 1];
    let a, l;
    const c = i("source");
    c && (a = e.clone().move(o || n, -c));
    const h = i("target");
    return h && (l = n.clone().move(r || e, -h)), this.sourceMarkerPoint = a || e.clone(), this.targetMarkerPoint = l || n.clone(), {
      source: a,
      target: l
    };
  }
  findPath(t, e, n) {
    const i = this.cell.getConnector() || this.graph.options.connecting.connector;
    let o, r, a;
    if (typeof i == "string" ? o = i : (o = i.name, r = i.args), o) {
      const c = yi.get(o);
      if (typeof c != "function")
        return yi.onNotFound(o);
      a = c;
    } else
      a = bu.normal;
    const l = N(a, this, e, n, t, Object.assign(Object.assign({}, r), { raw: !0 }), this);
    return typeof l == "string" ? z.parse(l) : l;
  }
  translateConnectionPoints(t, e) {
    this.sourcePoint.translate(t, e), this.targetPoint.translate(t, e), this.sourceAnchor.translate(t, e), this.targetAnchor.translate(t, e), this.sourceMarkerPoint.translate(t, e), this.targetMarkerPoint.translate(t, e);
  }
  updateLabelPositions() {
    if (this.labelContainer == null)
      return this;
    if (!this.path)
      return this;
    const e = this.cell, n = e.getLabels();
    if (n.length === 0)
      return this;
    const i = e.getDefaultLabel(), o = this.normalizeLabelPosition(i.position);
    for (let r = 0, a = n.length; r < a; r += 1) {
      const l = n[r], c = this.labelCache[r];
      if (!c)
        continue;
      const h = this.normalizeLabelPosition(l.position), u = pt({}, o, h), d = this.getLabelTransformationMatrix(u);
      c.setAttribute("transform", Qi(d));
    }
    return this;
  }
  updateTerminalProperties(t) {
    const e = this.cell, n = this.graph, i = e[t], o = i && i.cell, r = `${t}View`;
    if (!o)
      return this[r] = null, this.updateTerminalMagnet(t), !0;
    const a = n.getCellById(o);
    if (!a)
      throw new Error(`Edge's ${t} node with id "${o}" not exists`);
    const l = a.findView(n);
    return l ? (this[r] = l, this.updateTerminalMagnet(t), !0) : !1;
  }
  updateTerminalMagnet(t) {
    const e = `${t}Magnet`, n = this.getTerminalView(t);
    if (n) {
      let i = n.getMagnetFromEdgeTerminal(this.cell[t]);
      i === n.container && (i = null), this[e] = i;
    } else
      this[e] = null;
  }
  getLabelPositionAngle(t) {
    const e = this.cell.getLabelAt(t);
    return e && e.position && typeof e.position == "object" && e.position.angle || 0;
  }
  getLabelPositionArgs(t) {
    const e = this.cell.getLabelAt(t);
    if (e && e.position && typeof e.position == "object")
      return e.position.options;
  }
  getDefaultLabelPositionArgs() {
    const t = this.cell.getDefaultLabel();
    if (t && t.position && typeof t.position == "object")
      return t.position.options;
  }
  mergeLabelPositionArgs(t, e) {
    return t === null ? null : t === void 0 ? e === null ? null : e : pt({}, e, t);
  }
  // #endregion
  getConnection() {
    return this.path != null ? this.path.clone() : null;
  }
  getConnectionPathData() {
    if (this.path == null)
      return "";
    const t = this.cache.pathCache;
    return Yi(t, "data") || (t.data = this.path.serialize()), t.data || "";
  }
  getConnectionSubdivisions() {
    if (this.path == null)
      return null;
    const t = this.cache.pathCache;
    return Yi(t, "segmentSubdivisions") || (t.segmentSubdivisions = this.path.getSegmentSubdivisions()), t.segmentSubdivisions;
  }
  getConnectionLength() {
    if (this.path == null)
      return 0;
    const t = this.cache.pathCache;
    return Yi(t, "length") || (t.length = this.path.length({
      segmentSubdivisions: this.getConnectionSubdivisions()
    })), t.length;
  }
  getPointAtLength(t) {
    return this.path == null ? null : this.path.pointAtLength(t, {
      segmentSubdivisions: this.getConnectionSubdivisions()
    });
  }
  getPointAtRatio(t) {
    return this.path == null ? null : (Te(t) && (t = parseFloat(t) / 100), this.path.pointAt(t, {
      segmentSubdivisions: this.getConnectionSubdivisions()
    }));
  }
  getTangentAtLength(t) {
    return this.path == null ? null : this.path.tangentAtLength(t, {
      segmentSubdivisions: this.getConnectionSubdivisions()
    });
  }
  getTangentAtRatio(t) {
    return this.path == null ? null : this.path.tangentAt(t, {
      segmentSubdivisions: this.getConnectionSubdivisions()
    });
  }
  getClosestPoint(t) {
    return this.path == null ? null : this.path.closestPoint(t, {
      segmentSubdivisions: this.getConnectionSubdivisions()
    });
  }
  getClosestPointLength(t) {
    return this.path == null ? null : this.path.closestPointLength(t, {
      segmentSubdivisions: this.getConnectionSubdivisions()
    });
  }
  getClosestPointRatio(t) {
    return this.path == null ? null : this.path.closestPointNormalizedLength(t, {
      segmentSubdivisions: this.getConnectionSubdivisions()
    });
  }
  getLabelPosition(t, e, n, i) {
    const o = { distance: 0 };
    let r = 0, a;
    typeof n == "number" ? (r = n, a = i) : a = n, a != null && (o.options = a);
    const l = a && a.absoluteOffset, c = !(a && a.absoluteDistance), h = a && a.absoluteDistance && a.reverseDistance, u = this.path, d = {
      segmentSubdivisions: this.getConnectionSubdivisions()
    }, g = new C(t, e), f = u.closestPointT(g, d), p = this.getConnectionLength() || 0;
    let m = u.lengthAtT(f, d);
    c && (m = p > 0 ? m / p : 0), h && (m = -1 * (p - m) || 1), o.distance = m;
    let b;
    l || (b = u.tangentAtT(f));
    let y;
    if (b)
      y = b.pointOffset(g);
    else {
      const A = u.pointAtT(f), w = g.diff(A);
      y = { x: w.x, y: w.y };
    }
    return o.offset = y, o.angle = r, o;
  }
  normalizeLabelPosition(t) {
    return typeof t == "number" ? { distance: t } : t;
  }
  getLabelTransformationMatrix(t) {
    const e = this.normalizeLabelPosition(t), n = e.options || {}, i = e.angle || 0, o = e.distance, r = o > 0 && o <= 1;
    let a = 0;
    const l = { x: 0, y: 0 }, c = e.offset;
    c && (typeof c == "number" ? a = c : (c.x != null && (l.x = c.x), c.y != null && (l.y = c.y)));
    const h = l.x !== 0 || l.y !== 0 || a === 0, u = n.keepGradient, d = n.ensureLegibility, g = this.path, f = { segmentSubdivisions: this.getConnectionSubdivisions() }, p = r ? o * this.getConnectionLength() : o, m = g.tangentAtLength(p, f);
    let b, y = i;
    if (m) {
      if (h)
        b = m.start, b.translate(l);
      else {
        const A = m.clone();
        A.rotate(-90, m.start), A.setLength(a), b = A.end;
      }
      u && (y = m.angle() + i, d && (y = Kt((y + 90) % 180 - 90)));
    } else
      b = g.start, h && b.translate(l);
    return kt().translate(b.x, b.y).rotate(y);
  }
  getVertexIndex(t, e) {
    const i = this.cell.getVertices(), o = this.getClosestPointLength(new C(t, e));
    let r = 0;
    if (o != null)
      for (const a = i.length; r < a; r += 1) {
        const l = i[r], c = this.getClosestPointLength(l);
        if (c != null && o < c)
          break;
      }
    return r;
  }
  getEventArgs(t, e, n) {
    const i = this, o = i.cell, r = o;
    return e == null || n == null ? { e: t, view: i, edge: o, cell: r } : { e: t, x: e, y: n, view: i, edge: o, cell: r };
  }
  notifyUnhandledMouseDown(t, e, n) {
    this.notify("edge:unhandled:mousedown", {
      e: t,
      x: e,
      y: n,
      view: this,
      cell: this.cell,
      edge: this.cell
    });
  }
  notifyMouseDown(t, e, n) {
    super.onMouseDown(t, e, n), this.notify("edge:mousedown", this.getEventArgs(t, e, n));
  }
  notifyMouseMove(t, e, n) {
    super.onMouseMove(t, e, n), this.notify("edge:mousemove", this.getEventArgs(t, e, n));
  }
  notifyMouseUp(t, e, n) {
    super.onMouseUp(t, e, n), this.notify("edge:mouseup", this.getEventArgs(t, e, n));
  }
  onClick(t, e, n) {
    super.onClick(t, e, n), this.notify("edge:click", this.getEventArgs(t, e, n));
  }
  onDblClick(t, e, n) {
    super.onDblClick(t, e, n), this.notify("edge:dblclick", this.getEventArgs(t, e, n));
  }
  onContextMenu(t, e, n) {
    super.onContextMenu(t, e, n), this.notify("edge:contextmenu", this.getEventArgs(t, e, n));
  }
  onMouseDown(t, e, n) {
    this.notifyMouseDown(t, e, n), this.startEdgeDragging(t, e, n);
  }
  onMouseMove(t, e, n) {
    const i = this.getEventData(t);
    switch (i.action) {
      case "drag-label": {
        this.dragLabel(t, e, n);
        break;
      }
      case "drag-arrowhead": {
        this.dragArrowhead(t, e, n);
        break;
      }
      case "drag-edge": {
        this.dragEdge(t, e, n);
        break;
      }
    }
    return this.notifyMouseMove(t, e, n), i;
  }
  onMouseUp(t, e, n) {
    const i = this.getEventData(t);
    switch (i.action) {
      case "drag-label": {
        this.stopLabelDragging(t, e, n);
        break;
      }
      case "drag-arrowhead": {
        this.stopArrowheadDragging(t, e, n);
        break;
      }
      case "drag-edge": {
        this.stopEdgeDragging(t, e, n);
        break;
      }
    }
    return this.notifyMouseUp(t, e, n), this.checkMouseleave(t), i;
  }
  onMouseOver(t) {
    super.onMouseOver(t), this.notify("edge:mouseover", this.getEventArgs(t));
  }
  onMouseOut(t) {
    super.onMouseOut(t), this.notify("edge:mouseout", this.getEventArgs(t));
  }
  onMouseEnter(t) {
    super.onMouseEnter(t), this.notify("edge:mouseenter", this.getEventArgs(t));
  }
  onMouseLeave(t) {
    super.onMouseLeave(t), this.notify("edge:mouseleave", this.getEventArgs(t));
  }
  onMouseWheel(t, e, n, i) {
    super.onMouseWheel(t, e, n, i), this.notify("edge:mousewheel", Object.assign({ delta: i }, this.getEventArgs(t, e, n)));
  }
  onCustomEvent(t, e, n, i) {
    if (Ah(t.target, "edge-tool", this.container)) {
      if (t.stopPropagation(), this.can("useEdgeTools")) {
        if (e === "edge:remove") {
          this.cell.remove({ ui: !0 });
          return;
        }
        this.notify("edge:customevent", Object.assign({ name: e }, this.getEventArgs(t, n, i)));
      }
      this.notifyMouseDown(t, n, i);
    } else
      this.notify("edge:customevent", Object.assign({ name: e }, this.getEventArgs(t, n, i))), super.onCustomEvent(t, e, n, i);
  }
  onLabelMouseDown(t, e, n) {
    this.notifyMouseDown(t, e, n), this.startLabelDragging(t, e, n), this.getEventData(t).stopPropagation && t.stopPropagation();
  }
  // #region drag edge
  startEdgeDragging(t, e, n) {
    if (!this.can("edgeMovable")) {
      this.notifyUnhandledMouseDown(t, e, n);
      return;
    }
    this.setEventData(t, {
      x: e,
      y: n,
      moving: !1,
      action: "drag-edge"
    });
  }
  dragEdge(t, e, n) {
    const i = this.getEventData(t);
    i.moving || (i.moving = !0, this.addClass("edge-moving"), this.notify("edge:move", {
      e: t,
      x: e,
      y: n,
      view: this,
      cell: this.cell,
      edge: this.cell
    })), this.cell.translate(e - i.x, n - i.y, { ui: !0 }), this.setEventData(t, { x: e, y: n }), this.notify("edge:moving", {
      e: t,
      x: e,
      y: n,
      view: this,
      cell: this.cell,
      edge: this.cell
    });
  }
  stopEdgeDragging(t, e, n) {
    const i = this.getEventData(t);
    i.moving && (this.removeClass("edge-moving"), this.notify("edge:moved", {
      e: t,
      x: e,
      y: n,
      view: this,
      cell: this.cell,
      edge: this.cell
    })), i.moving = !1;
  }
  // #endregion
  // #region drag arrowhead
  prepareArrowheadDragging(t, e) {
    const n = this.getTerminalMagnet(t), i = {
      action: "drag-arrowhead",
      x: e.x,
      y: e.y,
      isNewEdge: e.isNewEdge === !0,
      terminalType: t,
      initialMagnet: n,
      initialTerminal: ko(this.cell[t]),
      fallbackAction: e.fallbackAction || "revert",
      getValidateConnectionArgs: this.createValidateConnectionArgs(t),
      options: e.options
    };
    return this.beforeArrowheadDragging(i), i;
  }
  createValidateConnectionArgs(t) {
    const e = [];
    e[4] = t, e[5] = this;
    let n, i = 0, o = 0;
    t === "source" ? (i = 2, n = "target") : (o = 2, n = "source");
    const r = this.cell[n], a = r.cell;
    if (a) {
      let l;
      const c = e[i] = this.graph.findViewByCell(a);
      c && (l = c.getMagnetFromEdgeTerminal(r), l === c.container && (l = void 0)), e[i + 1] = l;
    }
    return (l, c) => (e[o] = l, e[o + 1] = l.container === c ? void 0 : c, e);
  }
  beforeArrowheadDragging(t) {
    t.zIndex = this.cell.zIndex, this.cell.toFront();
    const e = this.container.style;
    t.pointerEvents = e.pointerEvents, e.pointerEvents = "none", this.graph.options.connecting.highlight && this.highlightAvailableMagnets(t);
  }
  afterArrowheadDragging(t) {
    t.zIndex != null && (this.cell.setZIndex(t.zIndex, { ui: !0 }), t.zIndex = null);
    const e = this.container;
    e.style.pointerEvents = t.pointerEvents || "", this.graph.options.connecting.highlight && this.unhighlightAvailableMagnets(t);
  }
  validateConnection(t, e, n, i, o, r, a) {
    const l = this.graph.options.connecting, c = l.allowLoop, h = l.allowNode, u = l.allowEdge, d = l.allowPort, g = l.allowMulti, f = l.validateConnection, p = r ? r.cell : null, m = o === "target" ? n : t, b = o === "target" ? i : e;
    let y = !0;
    const A = (w) => {
      const x = o === "source" ? a ? a.port : null : p ? p.getSourcePortId() : null, M = o === "target" ? a ? a.port : null : p ? p.getTargetPortId() : null;
      return N(w, this.graph, {
        edge: p,
        edgeView: r,
        sourceView: t,
        targetView: n,
        sourcePort: x,
        targetPort: M,
        sourceMagnet: e,
        targetMagnet: i,
        sourceCell: t ? t.cell : null,
        targetCell: n ? n.cell : null,
        type: o
      });
    };
    if (c != null && (typeof c == "boolean" ? !c && t === n && (y = !1) : y = A(c)), y && d != null && (typeof d == "boolean" ? !d && b && (y = !1) : y = A(d)), y && u != null && (typeof u == "boolean" ? !u && Ye.isEdgeView(m) && (y = !1) : y = A(u)), y && h != null && b == null && (typeof h == "boolean" ? !h && se.isNodeView(m) && (y = !1) : y = A(h)), y && g != null && r) {
      const w = r.cell, x = o === "source" ? a : w.getSource(), M = o === "target" ? a : w.getTarget(), v = a ? this.graph.getCellById(a.cell) : null;
      if (x && M && x.cell && M.cell && v)
        if (typeof g == "function")
          y = A(g);
        else {
          const S = this.graph.model.getConnectedEdges(v, {
            outgoing: o === "source",
            incoming: o === "target"
          });
          S.length && (g === "withPort" ? S.some((P) => {
            const T = P.getSource(), O = P.getTarget();
            return T && O && T.cell === x.cell && O.cell === M.cell && T.port != null && T.port === x.port && O.port != null && O.port === M.port;
          }) && (y = !1) : g || S.some((P) => {
            const T = P.getSource(), O = P.getTarget();
            return T && O && T.cell === x.cell && O.cell === M.cell;
          }) && (y = !1));
        }
    }
    return y && f != null && (y = A(f)), y;
  }
  allowConnectToBlank(t) {
    const e = this.graph, i = e.options.connecting.allowBlank;
    if (typeof i != "function")
      return !!i;
    const o = e.findViewByCell(t), r = t.getSourceCell(), a = t.getTargetCell(), l = e.findViewByCell(r), c = e.findViewByCell(a);
    return N(i, e, {
      edge: t,
      edgeView: o,
      sourceCell: r,
      targetCell: a,
      sourceView: l,
      targetView: c,
      sourcePort: t.getSourcePortId(),
      targetPort: t.getTargetPortId(),
      sourceMagnet: o.sourceMagnet,
      targetMagnet: o.targetMagnet
    });
  }
  validateEdge(t, e, n) {
    const i = this.graph;
    if (!this.allowConnectToBlank(t)) {
      const r = t.getSourceCellId(), a = t.getTargetCellId();
      if (!(r && a))
        return !1;
    }
    const o = i.options.connecting.validateEdge;
    return o ? N(o, i, {
      edge: t,
      type: e,
      previous: n
    }) : !0;
  }
  arrowheadDragging(t, e, n, i) {
    i.x = e, i.y = n, i.currentTarget !== t && (i.currentMagnet && i.currentView && i.currentView.unhighlight(i.currentMagnet, {
      type: "magnetAdsorbed"
    }), i.currentView = this.graph.findViewByElem(t), i.currentView ? (i.currentMagnet = i.currentView.findMagnet(t), i.currentMagnet && this.validateConnection(...i.getValidateConnectionArgs(i.currentView, i.currentMagnet), i.currentView.getEdgeTerminal(i.currentMagnet, e, n, this.cell, i.terminalType)) ? i.currentView.highlight(i.currentMagnet, {
      type: "magnetAdsorbed"
    }) : i.currentMagnet = null) : i.currentMagnet = null), i.currentTarget = t, this.cell.prop(i.terminalType, { x: e, y: n }, Object.assign(Object.assign({}, i.options), { ui: !0 }));
  }
  arrowheadDragged(t, e, n) {
    const i = t.currentView, o = t.currentMagnet;
    if (!o || !i)
      return;
    i.unhighlight(o, { type: "magnetAdsorbed" });
    const r = t.terminalType, a = i.getEdgeTerminal(o, e, n, this.cell, r);
    this.cell.setTerminal(r, a, { ui: !0 });
  }
  snapArrowhead(t, e, n) {
    const i = this.graph, { snap: o, allowEdge: r } = i.options.connecting, a = typeof o == "object" && o.radius || 50, l = typeof o == "object" && o.anchor || "center", c = i.renderer.findViewsInArea({
      x: t - a,
      y: e - a,
      width: 2 * a,
      height: 2 * a
    }, { nodeOnly: !0 });
    if (r) {
      const w = i.renderer.findEdgeViewsFromPoint({ x: t, y: e }, a).filter((x) => x !== this);
      c.push(...w);
    }
    const h = n.closestView || null, u = n.closestMagnet || null;
    n.closestView = null, n.closestMagnet = null;
    let d, g = Number.MAX_SAFE_INTEGER;
    const f = new C(t, e);
    c.forEach((w) => {
      if (w.container.getAttribute("magnet") !== "false") {
        if (w.isNodeView())
          d = l === "center" ? w.cell.getBBox().getCenter().distance(f) : w.cell.getBBox().getNearestPointToPoint(f).distance(f);
        else if (w.isEdgeView()) {
          const x = w.getClosestPoint(f);
          x ? d = x.distance(f) : d = Number.MAX_SAFE_INTEGER;
        }
        d < a && d < g && (u === w.container || this.validateConnection(...n.getValidateConnectionArgs(w, null), w.getEdgeTerminal(w.container, t, e, this.cell, n.terminalType))) && (g = d, n.closestView = w, n.closestMagnet = w.container);
      }
      w.container.querySelectorAll("[magnet]").forEach((x) => {
        if (x.getAttribute("magnet") !== "false") {
          const M = w.getBBoxOfElement(x);
          d = f.distance(M.getCenter()), d < a && d < g && (u === x || this.validateConnection(...n.getValidateConnectionArgs(w, x), w.getEdgeTerminal(x, t, e, this.cell, n.terminalType))) && (g = d, n.closestView = w, n.closestMagnet = x);
        }
      });
    });
    let p;
    const m = n.terminalType, b = n.closestView, y = n.closestMagnet, A = u !== y;
    if (h && A && h.unhighlight(u, {
      type: "magnetAdsorbed"
    }), b) {
      if (!A)
        return;
      b.highlight(y, {
        type: "magnetAdsorbed"
      }), p = b.getEdgeTerminal(y, t, e, this.cell, m);
    } else
      p = { x: t, y: e };
    this.cell.setTerminal(m, p, {}, Object.assign(Object.assign({}, n.options), { ui: !0 }));
  }
  snapArrowheadEnd(t) {
    const e = t.closestView, n = t.closestMagnet;
    e && n && (e.unhighlight(n, {
      type: "magnetAdsorbed"
    }), t.currentMagnet = e.findMagnet(n)), t.closestView = null, t.closestMagnet = null;
  }
  finishEmbedding(t) {
    this.graph.options.embedding.enabled && this.cell.updateParent() && (t.zIndex = null);
  }
  fallbackConnection(t) {
    switch (t.fallbackAction) {
      case "remove":
        this.cell.remove({ ui: !0 });
        break;
      case "revert":
      default:
        this.cell.prop(t.terminalType, t.initialTerminal, {
          ui: !0
        });
        break;
    }
  }
  notifyConnectionEvent(t, e) {
    const n = t.terminalType, i = t.initialTerminal, o = this.cell[n];
    if (o && !Et.equalTerminals(i, o)) {
      const a = this.graph, l = i, c = l.cell ? a.getCellById(l.cell) : null, h = l.port, u = c ? a.findViewByCell(c) : null, d = c || t.isNewEdge ? null : C.create(i).toJSON(), g = o, f = g.cell ? a.getCellById(g.cell) : null, p = g.port, m = f ? a.findViewByCell(f) : null, b = f ? null : C.create(o).toJSON();
      this.notify("edge:connected", {
        e,
        previousCell: c,
        previousPort: h,
        previousView: u,
        previousPoint: d,
        currentCell: f,
        currentView: m,
        currentPort: p,
        currentPoint: b,
        previousMagnet: t.initialMagnet,
        currentMagnet: t.currentMagnet,
        edge: this.cell,
        view: this,
        type: n,
        isNew: t.isNewEdge
      });
    }
  }
  highlightAvailableMagnets(t) {
    const e = this.graph, n = e.model.getCells();
    t.marked = {};
    for (let i = 0, o = n.length; i < o; i += 1) {
      const r = e.findViewByCell(n[i]);
      if (!r || r.cell.id === this.cell.id)
        continue;
      const a = Array.prototype.slice.call(r.container.querySelectorAll("[magnet]"));
      r.container.getAttribute("magnet") !== "false" && a.push(r.container);
      const l = a.filter((c) => this.validateConnection(...t.getValidateConnectionArgs(r, c), r.getEdgeTerminal(c, t.x, t.y, this.cell, t.terminalType)));
      if (l.length > 0) {
        for (let c = 0, h = l.length; c < h; c += 1)
          r.highlight(l[c], { type: "magnetAvailable" });
        r.highlight(null, { type: "nodeAvailable" }), t.marked[r.cell.id] = l;
      }
    }
  }
  unhighlightAvailableMagnets(t) {
    const e = t.marked || {};
    Object.keys(e).forEach((n) => {
      const i = this.graph.findViewByCell(n);
      i && (e[n].forEach((r) => {
        i.unhighlight(r, { type: "magnetAvailable" });
      }), i.unhighlight(null, { type: "nodeAvailable" }));
    }), t.marked = null;
  }
  startArrowheadDragging(t, e, n) {
    if (!this.can("arrowheadMovable")) {
      this.notifyUnhandledMouseDown(t, e, n);
      return;
    }
    const o = t.target.getAttribute("data-terminal"), r = this.prepareArrowheadDragging(o, { x: e, y: n });
    this.setEventData(t, r);
  }
  dragArrowhead(t, e, n) {
    const i = this.getEventData(t);
    this.graph.options.connecting.snap ? this.snapArrowhead(e, n, i) : this.arrowheadDragging(this.getEventTarget(t), e, n, i);
  }
  stopArrowheadDragging(t, e, n) {
    const i = this.graph, o = this.getEventData(t);
    i.options.connecting.snap ? this.snapArrowheadEnd(o) : this.arrowheadDragged(o, e, n), this.validateEdge(this.cell, o.terminalType, o.initialTerminal) ? (this.finishEmbedding(o), this.notifyConnectionEvent(o, t)) : this.fallbackConnection(o), this.afterArrowheadDragging(o);
  }
  // #endregion
  // #region drag lable
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startLabelDragging(t, e, n) {
    if (this.can("edgeLabelMovable")) {
      const i = t.currentTarget, o = parseInt(i.getAttribute("data-index"), 10), r = this.getLabelPositionAngle(o), a = this.getLabelPositionArgs(o), l = this.getDefaultLabelPositionArgs(), c = this.mergeLabelPositionArgs(a, l);
      this.setEventData(t, {
        index: o,
        positionAngle: r,
        positionArgs: c,
        stopPropagation: !0,
        action: "drag-label"
      });
    } else
      this.setEventData(t, { stopPropagation: !0 });
    this.graph.view.delegateDragEvents(t, this);
  }
  dragLabel(t, e, n) {
    const i = this.getEventData(t), o = this.cell.getLabelAt(i.index), r = pt({}, o, {
      position: this.getLabelPosition(e, n, i.positionAngle, i.positionArgs)
    });
    this.cell.setLabelAt(i.index, r);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stopLabelDragging(t, e, n) {
  }
}
const Tl = `X6.${Ye.name}`;
Ye.config({
  isSvgElement: !0,
  priority: 1,
  bootstrap: ["render", "source", "target"],
  actions: {
    view: ["render"],
    markup: ["render"],
    attrs: ["update"],
    source: ["source", "update"],
    target: ["target", "update"],
    router: ["update"],
    connector: ["update"],
    labels: ["labels"],
    defaultLabel: ["labels"],
    tools: ["tools"],
    vertices: ["vertices", "update"]
  }
});
Ye.registry.register("edge", Ye, !0);
const pn = {
  idle: "idle",
  raf: "raf",
  timeout: "timeout"
};
class UE {
  constructor() {
    this.isFlushing = !1, this.isFlushPending = !1, this.scheduleId = 0, this.queue = [], this.frameInterval = 16, this.initialTime = Date.now(), this.pendingJobs = /* @__PURE__ */ new Map(), this.scheduleMode = null;
  }
  queueJob(t) {
    if (t.priority & Se.PRIOR)
      t.cb();
    else {
      const e = this.pendingJobs.get(t.id);
      if (e) {
        if (e.cb = t.cb, t.priority !== e.priority) {
          e.priority = t.priority;
          const n = this.queue.indexOf(e);
          if (n >= 0) {
            this.queue.splice(n, 1);
            const i = this.findInsertionIndex(e);
            this.queue.splice(i, 0, e);
          }
        }
      } else {
        const n = this.findInsertionIndex(t);
        this.queue.splice(n, 0, t), this.pendingJobs.set(t.id, t);
      }
    }
  }
  queueFlush() {
    !this.isFlushing && !this.isFlushPending && (this.isFlushPending = !0, this.scheduleJob());
  }
  queueFlushSync() {
    !this.isFlushing && !this.isFlushPending && (this.isFlushPending = !0, this.flushJobsSync());
  }
  clearJobs() {
    this.queue.length = 0, this.pendingJobs.clear(), this.isFlushing = !1, this.isFlushPending = !1, this.cancelScheduleJob();
  }
  flushJobs(t) {
    this.isFlushPending = !1, this.isFlushing = !0;
    const e = this.getCurrentTime();
    let n = this.frameInterval;
    if (t && typeof t.timeRemaining == "function") {
      const i = t.timeRemaining();
      n = Math.max(0, Math.min(n, i));
    }
    for (; this.queue.length > 0; ) {
      const i = this.queue.shift();
      if (i.cb(), this.pendingJobs.delete(i.id), this.getCurrentTime() - e >= n)
        break;
    }
    this.isFlushing = !1, this.queue.length && this.queueFlush();
  }
  flushJobsSync() {
    for (this.isFlushPending = !1, this.isFlushing = !0; this.queue.length > 0; ) {
      const t = this.queue.shift();
      try {
        t.cb();
      } catch (e) {
        console.error(e);
      }
      this.pendingJobs.delete(t.id);
    }
    this.isFlushing = !1;
  }
  findInsertionIndex(t) {
    let e = 0, n = this.queue.length, i = n - 1;
    const o = t.priority;
    for (; e <= i; ) {
      const r = (i - e >> 1) + e;
      o <= this.queue[r].priority ? e = r + 1 : (n = r, i = r - 1);
    }
    return n;
  }
  scheduleJob() {
    this.scheduleId && this.cancelScheduleJob(), "requestAnimationFrame" in window ? (this.scheduleMode = pn.raf, this.scheduleId = window.requestAnimationFrame(() => this.flushJobs())) : "requestIdleCallback" in window ? (this.scheduleMode = pn.idle, this.scheduleId = window.requestIdleCallback((t) => this.flushJobs(t), {
      timeout: 100
    })) : (this.scheduleMode = pn.timeout, this.scheduleId = window.setTimeout(() => this.flushJobs()));
  }
  cancelScheduleJob() {
    if (!this.scheduleId)
      return;
    const t = {
      [pn.idle]: window == null ? void 0 : window.cancelIdleCallback,
      [pn.raf]: window == null ? void 0 : window.cancelAnimationFrame,
      [pn.timeout]: window == null ? void 0 : window.clearTimeout
    }, e = this.scheduleMode, n = e ? t[e] : void 0;
    typeof n == "function" && n(this.scheduleId), this.scheduleId = 0, this.scheduleMode = null;
  }
  getCurrentTime() {
    return typeof performance == "object" && typeof performance.now == "function" ? performance.now() : Date.now() - this.initialTime;
  }
}
var Se;
(function(s) {
  s[s.Update = 2] = "Update", s[s.RenderEdge = 4] = "RenderEdge", s[s.RenderNode = 8] = "RenderNode", s[s.PRIOR = 1048576] = "PRIOR";
})(Se || (Se = {}));
const KE = "#insert";
var me;
(function(s) {
  s[s.CREATED = 0] = "CREATED", s[s.MOUNTED = 1] = "MOUNTED", s[s.WAITING = 2] = "WAITING";
})(me || (me = {}));
class sd extends Gn {
  get model() {
    return this.graph.model;
  }
  get container() {
    return this.graph.view.stage;
  }
  constructor(t) {
    super(), this.views = {}, this.willRemoveViews = {}, this.queue = new UE(), this.graph = t, this.init();
  }
  init() {
    this.startListening(), this.renderViews(this.model.getCells());
  }
  startListening() {
    this.model.on("reseted", this.onModelReseted, this), this.model.on("cell:added", this.onCellAdded, this), this.model.on("cell:removed", this.onCellRemoved, this), this.model.on("cell:change:zIndex", this.onCellZIndexChanged, this), this.model.on("cell:change:visible", this.onCellVisibleChanged, this);
  }
  stopListening() {
    this.model.off("reseted", this.onModelReseted, this), this.model.off("cell:added", this.onCellAdded, this), this.model.off("cell:removed", this.onCellRemoved, this), this.model.off("cell:change:zIndex", this.onCellZIndexChanged, this), this.model.off("cell:change:visible", this.onCellVisibleChanged, this);
  }
  onModelReseted({ options: t, previous: e }) {
    let n = this.model.getCells();
    if (!(t != null && t.diff))
      this.queue.clearJobs(), this.removeZPivots(), this.resetViews();
    else {
      const i = new Set(e);
      n = n.filter((o) => !i.has(o));
    }
    this.renderViews(n, Object.assign(Object.assign({}, t), { queue: n.map((i) => i.id) }));
  }
  onCellAdded({ cell: t, options: e }) {
    this.renderViews([t], e);
  }
  onCellRemoved({ cell: t }) {
    this.removeViews([t]);
  }
  onCellZIndexChanged({ cell: t, options: e }) {
    const n = this.views[t.id];
    n && this.requestViewUpdate(n.view, Qe, e, Se.Update, !0);
  }
  onCellVisibleChanged({ cell: t, current: e }) {
    this.toggleVisible(t, !!e);
  }
  requestViewUpdate(t, e, n = {}, i = Se.Update, o = !0) {
    const r = t.cell.id, a = this.views[r];
    if (!a)
      return;
    a.flag = e, a.options = n, (t.hasAction(e, ["translate", "resize", "rotate"]) || n.async === !1) && (i = Se.PRIOR, o = !1);
    const c = e & Qe ? `${r}${KE}` : r;
    this.queue.queueJob({
      id: c,
      priority: i,
      cb: () => {
        this.renderViewInArea(t, e, n);
        const u = n.queue;
        if (u) {
          const d = u.indexOf(t.cell.id);
          d >= 0 && u.splice(d, 1), u.length === 0 && this.graph.trigger("render:done");
        }
      }
    }), this.getEffectedEdges(t).forEach((u) => {
      this.requestViewUpdate(u.view, u.flag, n, i, !1);
    }), o && this.flush();
  }
  setRenderArea(t) {
    this.renderArea = t, Object.values(this.views).forEach((e) => {
      if (!e)
        return;
      const { view: n } = e;
      e.state === me.MOUNTED && (this.isUpdatable(n) || (n.remove(), this.graph.trigger("view:unmounted", { view: n }), e.state = me.WAITING, e.flag |= Qe | n.getBootstrapFlag()));
    }), this.flushWaitingViews();
  }
  isViewMounted(t) {
    if (t == null)
      return !1;
    const e = this.views[t.cell.id];
    return e ? e.state === me.MOUNTED : !1;
  }
  renderViews(t, e = {}) {
    t.sort((n, i) => n.isNode() && i.isEdge() ? -1 : 0), t.forEach((n) => {
      const i = n.id, o = this.views;
      let r = 0, a = o[i];
      if (a)
        r = Qe;
      else {
        const l = this.createCellView(n);
        l && (l.graph = this.graph, r = Qe | l.getBootstrapFlag(), a = {
          view: l,
          flag: r,
          options: e,
          state: me.CREATED
        }, this.views[i] = a);
      }
      a && this.requestViewUpdate(a.view, r, e, this.getRenderPriority(a.view), !1);
    }), this.flush();
  }
  renderViewInArea(t, e, n = {}) {
    const i = t.cell, o = i.id, r = this.views[o];
    if (!r)
      return;
    let a = 0;
    this.isUpdatable(t) ? (a = this.updateView(t, e, n), r.flag = a) : (r.state === me.MOUNTED && (t.remove(), this.graph.trigger("view:unmounted", { view: t }), a = 0), r.state = me.WAITING, r.flag = e | Qe | t.getBootstrapFlag()), a && i.isEdge() && !(a & t.getFlag(["source", "target"])) && this.queue.queueJob({
      id: o,
      priority: Se.RenderEdge,
      cb: () => {
        this.updateView(t, e, n);
      }
    });
  }
  removeViews(t) {
    t.forEach((e) => {
      const n = e.id, i = this.views[n];
      i && (this.willRemoveViews[n] = i, delete this.views[n], this.queue.queueJob({
        id: n,
        priority: this.getRenderPriority(i.view),
        cb: () => {
          this.removeView(i.view);
        }
      }));
    }), this.flush();
  }
  flush() {
    this.graph.options.async ? this.queue.queueFlush() : this.queue.queueFlushSync();
  }
  flushWaitingViews() {
    Object.values(this.views).forEach((t) => {
      if (t && t.state === me.WAITING) {
        const { view: e, flag: n, options: i } = t;
        this.requestViewUpdate(e, n, i, this.getRenderPriority(e), !1);
      }
    }), this.flush();
  }
  updateView(t, e, n = {}) {
    if (t == null)
      return 0;
    if (It.isCellView(t)) {
      if (e & zE)
        return this.removeView(t.cell), 0;
      e & Qe && (this.insertView(t), e ^= Qe);
    }
    return e ? t.confirmUpdate(e, n) : 0;
  }
  insertView(t) {
    const e = this.views[t.cell.id];
    if (e) {
      const n = t.cell.getZIndex(), i = this.addZPivot(n);
      this.container.insertBefore(t.container, i), t.cell.isVisible() || this.toggleVisible(t.cell, !1), e.state = me.MOUNTED, this.graph.trigger("view:mounted", { view: t });
    }
  }
  resetViews() {
    this.willRemoveViews = Object.assign(Object.assign({}, this.views), this.willRemoveViews), Object.values(this.willRemoveViews).forEach((t) => {
      t && this.removeView(t.view);
    }), this.views = {}, this.willRemoveViews = {};
  }
  removeView(t) {
    const e = t.cell, n = this.willRemoveViews[e.id];
    n && t && (n.view.remove(), delete this.willRemoveViews[e.id], this.graph.trigger("view:unmounted", { view: t }));
  }
  toggleVisible(t, e) {
    const n = this.model.getConnectedEdges(t);
    for (let o = 0, r = n.length; o < r; o += 1) {
      const a = n[o];
      if (e) {
        const l = a.getSourceCell(), c = a.getTargetCell();
        if (l && !l.isVisible() || c && !c.isVisible())
          continue;
        this.toggleVisible(a, !0);
      } else
        this.toggleVisible(a, !1);
    }
    const i = this.views[t.id];
    i && st(i.view.container, {
      display: e ? "unset" : "none"
    });
  }
  addZPivot(t = 0) {
    this.zPivots == null && (this.zPivots = {});
    const e = this.zPivots;
    let n = e[t];
    if (n)
      return n;
    n = e[t] = document.createComment(`z-index:${t + 1}`);
    let i = -1 / 0;
    for (const r in e) {
      const a = +r;
      a < t && a > i && (i = a);
    }
    const o = this.container;
    if (i !== -1 / 0) {
      const r = e[i];
      o.insertBefore(n, r.nextSibling);
    } else
      o.insertBefore(n, o.firstChild);
    return n;
  }
  removeZPivots() {
    this.zPivots && Object.values(this.zPivots).forEach((t) => {
      t && t.parentNode && t.parentNode.removeChild(t);
    }), this.zPivots = {};
  }
  createCellView(t) {
    const e = { graph: this.graph }, n = this.graph.options.createCellView;
    if (n) {
      const o = N(n, this.graph, t);
      if (o)
        return new o(t, e);
      if (o === null)
        return null;
    }
    const i = t.view;
    if (i != null && typeof i == "string") {
      const o = It.registry.get(i);
      return o ? new o(t, e) : It.registry.onNotFound(i);
    }
    return t.isNode() ? new se(t, e) : t.isEdge() ? new Ye(t, e) : null;
  }
  getEffectedEdges(t) {
    const e = [], n = t.cell, i = this.model.getConnectedEdges(n);
    for (let o = 0, r = i.length; o < r; o += 1) {
      const a = i[o], l = this.views[a.id];
      if (!l)
        continue;
      const c = l.view;
      if (!this.isViewMounted(c))
        continue;
      const h = ["update"];
      a.getTargetCell() === n && h.push("target"), a.getSourceCell() === n && h.push("source"), e.push({
        id: a.id,
        view: c,
        flag: c.getFlag(h)
      });
    }
    return e;
  }
  isUpdatable(t) {
    if (t.isNodeView())
      return this.renderArea ? this.renderArea.isIntersectWithRect(t.cell.getBBox()) : !0;
    if (t.isEdgeView()) {
      const e = t.cell, n = this.renderArea ? this.renderArea.isIntersectWithRect(e.getBBox()) : !0;
      if (this.graph.virtualRender.isVirtualEnabled())
        return n;
      const i = e.getSourceCell(), o = e.getTargetCell();
      if (this.renderArea && i && o)
        return this.renderArea.isIntersectWithRect(i.getBBox()) || this.renderArea.isIntersectWithRect(o.getBBox());
    }
    return !0;
  }
  getRenderPriority(t) {
    return t.cell.isNode() ? Se.RenderNode : Se.RenderEdge;
  }
  dispose() {
    this.stopListening(), Object.keys(this.views).forEach((t) => {
      this.views[t].view.dispose();
    }), this.views = {};
  }
}
$([
  _()
], sd.prototype, "dispose", null);
class od extends re {
  constructor() {
    super(...arguments), this.schedule = new sd(this.graph);
  }
  requestViewUpdate(t, e, n = {}) {
    this.schedule.requestViewUpdate(t, e, n);
  }
  isViewMounted(t) {
    return this.schedule.isViewMounted(t);
  }
  setRenderArea(t) {
    this.schedule.setRenderArea(t);
  }
  findViewByElem(t) {
    if (t == null)
      return null;
    const e = this.options.container, n = typeof t == "string" ? e.querySelector(t) : t instanceof Element ? t : t[0];
    if (n) {
      const i = this.graph.view.findAttr("data-cell-id", n);
      if (i) {
        const o = this.schedule.views;
        if (o[i])
          return o[i].view;
      }
    }
    return null;
  }
  findViewByCell(t) {
    if (t == null)
      return null;
    const e = q.isCell(t) ? t.id : t, n = this.schedule.views;
    return n[e] ? n[e].view : null;
  }
  findViewsFromPoint(t) {
    const e = { x: t.x, y: t.y };
    return this.model.getCells().map((n) => this.findViewByCell(n)).filter((n) => n != null ? we(n.container, {
      target: this.view.stage
    }).containsPoint(e) : !1);
  }
  findEdgeViewsFromPoint(t, e = 5) {
    return this.model.getEdges().map((n) => this.findViewByCell(n)).filter((n) => {
      if (n != null) {
        const i = n.getClosestPoint(t);
        if (i)
          return i.distance(t) <= e;
      }
      return !1;
    });
  }
  findViewsInArea(t, e = {}) {
    const n = I.create(t);
    return this.model.getCells().map((i) => this.findViewByCell(i)).filter((i) => {
      if (i) {
        if (e.nodeOnly && !i.isNodeView())
          return !1;
        const o = we(i.container, {
          target: this.view.stage
        });
        return o.width === 0 ? o.inflate(1, 0) : o.height === 0 && o.inflate(0, 1), e.strict ? n.containsRect(o) : n.isIntersectWithRect(o);
      }
      return !1;
    });
  }
  dispose() {
    this.schedule.dispose();
  }
}
$([
  _()
], od.prototype, "dispose", null);
class Vr extends re {
  get elem() {
    return this.view.background;
  }
  init() {
    this.startListening(), this.options.background && this.draw(this.options.background);
  }
  startListening() {
    this.graph.on("scale", this.update, this), this.graph.on("translate", this.update, this);
  }
  stopListening() {
    this.graph.off("scale", this.update, this), this.graph.off("translate", this.update, this);
  }
  updateBackgroundImage(t = {}) {
    let e = t.size || "auto auto", n = t.position || "center";
    const i = this.graph.transform.getScale(), o = this.graph.translate();
    if (typeof n == "object") {
      const r = o.tx + i.sx * (n.x || 0), a = o.ty + i.sy * (n.y || 0);
      n = `${r}px ${a}px`;
    }
    typeof e == "object" && (e = I.fromSize(e).scale(i.sx, i.sy), e = `${e.width}px ${e.height}px`), this.elem.style.backgroundSize = e, this.elem.style.backgroundPosition = n;
  }
  drawBackgroundImage(t, e = {}) {
    if (!(t instanceof HTMLImageElement)) {
      this.elem.style.backgroundImage = "";
      return;
    }
    const n = this.optionsCache;
    if (n && n.image !== e.image)
      return;
    let i;
    const o = e.opacity, r = e.size;
    let a = e.repeat || "no-repeat";
    const l = Hs.get(a);
    if (typeof l == "function") {
      const h = e.quality || 1;
      t.width *= h, t.height *= h;
      const u = l(t, e);
      if (!(u instanceof HTMLCanvasElement))
        throw new Error("Background pattern must return an HTML Canvas instance");
      i = u.toDataURL("image/png"), e.repeat && a !== e.repeat ? a = e.repeat : a = "repeat", typeof r == "object" ? (r.width *= u.width / t.width, r.height *= u.height / t.height) : r === void 0 && (e.size = {
        width: u.width / h,
        height: u.height / h
      });
    } else
      i = t.src, r === void 0 && (e.size = {
        width: t.width,
        height: t.height
      });
    n != null && typeof e.size == "object" && e.image === n.image && e.repeat === n.repeat && e.quality === n.quality && (n.size = ko(e.size));
    const c = this.elem.style;
    c.backgroundImage = `url(${i})`, c.backgroundRepeat = a, c.opacity = o == null || o >= 1 ? "" : `${o}`, this.updateBackgroundImage(e);
  }
  updateBackgroundColor(t) {
    this.elem.style.backgroundColor = t || "";
  }
  updateBackgroundOptions(t) {
    this.graph.options.background = t;
  }
  update() {
    this.optionsCache && this.updateBackgroundImage(this.optionsCache);
  }
  draw(t) {
    const e = t || {};
    if (this.updateBackgroundOptions(t), this.updateBackgroundColor(e.color), e.image) {
      this.optionsCache = ko(e);
      const n = document.createElement("img");
      n.onload = () => this.drawBackgroundImage(n, t), n.setAttribute("crossorigin", "anonymous"), n.src = e.image;
    } else
      this.drawBackgroundImage(null), this.optionsCache = null;
  }
  clear() {
    this.draw();
  }
  dispose() {
    this.clear(), this.stopListening();
  }
}
$([
  _()
], Vr.prototype, "dispose", null);
class JE extends re {
  getClientMatrix() {
    return kt(this.view.stage.getScreenCTM());
  }
  /**
   * Returns coordinates of the graph viewport, relative to the window.
   */
  getClientOffset() {
    const t = this.view.svg.getBoundingClientRect();
    return new C(t.left, t.top);
  }
  /**
   * Returns coordinates of the graph viewport, relative to the document.
   */
  getPageOffset() {
    return this.getClientOffset().translate(window.scrollX, window.scrollY);
  }
  snapToGrid(t, e) {
    return (typeof t == "number" ? this.clientToLocalPoint(t, e) : this.clientToLocalPoint(t.x, t.y)).snapToGrid(this.graph.getGridSize());
  }
  localToGraphPoint(t, e) {
    const n = C.create(t, e);
    return Me(n, this.graph.matrix());
  }
  localToClientPoint(t, e) {
    const n = C.create(t, e);
    return Me(n, this.getClientMatrix());
  }
  localToPagePoint(t, e) {
    return (typeof t == "number" ? this.localToGraphPoint(t, e) : this.localToGraphPoint(t)).translate(this.getPageOffset());
  }
  localToGraphRect(t, e, n, i) {
    const o = I.create(t, e, n, i);
    return Zt(o, this.graph.matrix());
  }
  localToClientRect(t, e, n, i) {
    const o = I.create(t, e, n, i);
    return Zt(o, this.getClientMatrix());
  }
  localToPageRect(t, e, n, i) {
    return (typeof t == "number" ? this.localToGraphRect(t, e, n, i) : this.localToGraphRect(t)).translate(this.getPageOffset());
  }
  graphToLocalPoint(t, e) {
    const n = C.create(t, e);
    return Me(n, this.graph.matrix().inverse());
  }
  clientToLocalPoint(t, e) {
    const n = C.create(t, e);
    return Me(n, this.getClientMatrix().inverse());
  }
  clientToGraphPoint(t, e) {
    const n = C.create(t, e);
    return Me(n, this.graph.matrix().multiply(this.getClientMatrix().inverse()));
  }
  pageToLocalPoint(t, e) {
    const i = C.create(t, e).diff(this.getPageOffset());
    return this.graphToLocalPoint(i);
  }
  graphToLocalRect(t, e, n, i) {
    const o = I.create(t, e, n, i);
    return Zt(o, this.graph.matrix().inverse());
  }
  clientToLocalRect(t, e, n, i) {
    const o = I.create(t, e, n, i);
    return Zt(o, this.getClientMatrix().inverse());
  }
  clientToGraphRect(t, e, n, i) {
    const o = I.create(t, e, n, i);
    return Zt(o, this.graph.matrix().multiply(this.getClientMatrix().inverse()));
  }
  pageToLocalRect(t, e, n, i) {
    const o = I.create(t, e, n, i), r = this.getPageOffset();
    return o.x -= r.x, o.y -= r.y, this.graphToLocalRect(o);
  }
}
const jE = `.x6-graph {
  position: relative;
  overflow: hidden;
  outline: none;
  touch-action: none;
}
.x6-graph-background,
.x6-graph-grid,
.x6-graph-svg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.x6-graph-background-stage,
.x6-graph-grid-stage,
.x6-graph-svg-stage {
  user-select: none;
}
.x6-graph.x6-graph-pannable {
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
.x6-graph.x6-graph-panning {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
  user-select: none;
}
.x6-node {
  cursor: move;
  /* stylelint-disable-next-line */
}
.x6-node.x6-node-immovable {
  cursor: default;
}
.x6-node * {
  -webkit-user-drag: none;
}
.x6-node .scalable * {
  vector-effect: non-scaling-stroke;
}
.x6-node [magnet='true'] {
  cursor: crosshair;
  transition: opacity 0.3s;
}
.x6-node [magnet='true']:hover {
  opacity: 0.7;
}
.x6-node foreignObject {
  display: block;
  overflow: visible;
  background-color: transparent;
}
.x6-node foreignObject > body {
  position: static;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: visible;
  background-color: transparent;
}
.x6-edge .source-marker,
.x6-edge .target-marker {
  vector-effect: non-scaling-stroke;
}
.x6-edge .connection {
  stroke-linejoin: round;
  fill: none;
}
.x6-edge .connection-wrap {
  cursor: move;
  opacity: 0;
  fill: none;
  stroke: #000;
  stroke-width: 15;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.x6-edge .connection-wrap:hover {
  opacity: 0.4;
  stroke-opacity: 0.4;
}
.x6-edge .vertices {
  cursor: move;
  opacity: 0;
}
.x6-edge .vertices .vertex {
  fill: #1abc9c;
}
.x6-edge .vertices .vertex :hover {
  fill: #34495e;
  stroke: none;
}
.x6-edge .vertices .vertex-remove {
  cursor: pointer;
  fill: #fff;
}
.x6-edge .vertices .vertex-remove-area {
  cursor: pointer;
  opacity: 0.1;
}
.x6-edge .vertices .vertex-group:hover .vertex-remove-area {
  opacity: 1;
}
.x6-edge .arrowheads {
  cursor: move;
  opacity: 0;
}
.x6-edge .arrowheads .arrowhead {
  fill: #1abc9c;
}
.x6-edge .arrowheads .arrowhead :hover {
  fill: #f39c12;
  stroke: none;
}
.x6-edge .tools {
  cursor: pointer;
  opacity: 0;
}
.x6-edge .tools .tool-options {
  display: none;
}
.x6-edge .tools .tool-remove circle {
  fill: #f00;
}
.x6-edge .tools .tool-remove path {
  fill: #fff;
}
.x6-edge:hover .vertices,
.x6-edge:hover .arrowheads,
.x6-edge:hover .tools {
  opacity: 1;
}
.x6-highlight-opacity {
  opacity: 0.3;
}
.x6-cell-tool-editor {
  position: relative;
  display: inline-block;
  min-height: 1em;
  margin: 0;
  padding: 0;
  line-height: 1;
  white-space: normal;
  text-align: center;
  vertical-align: top;
  overflow-wrap: normal;
  outline: none;
  transform-origin: 0 0;
  -webkit-user-drag: none;
  cursor: text;
}
.x6-edge-tool-editor {
  border: 1px solid #275fc5;
  border-radius: 2px;
}
`;
class rd extends re {
  init() {
    We("core", jE);
  }
  dispose() {
    qe("core");
  }
}
$([
  _()
], rd.prototype, "dispose", null);
class GE extends re {
  get cid() {
    return this.graph.view.cid;
  }
  get svg() {
    return this.view.svg;
  }
  get defs() {
    return this.view.defs;
  }
  isDefined(t) {
    return this.svg.getElementById(t) != null;
  }
  filter(t) {
    let e = t.id;
    const n = t.name;
    if (e || (e = `filter-${n}-${this.cid}-${ao(JSON.stringify(t))}`), !this.isDefined(e)) {
      const i = Ai.get(n);
      if (i == null)
        return Ai.onNotFound(n);
      const o = i(t.args || {}), r = Object.assign(Object.assign({ x: -1, y: -1, width: 3, height: 3, filterUnits: "objectBoundingBox" }, t.attrs), { id: e });
      F.create(Nt.sanitize(o), r).appendTo(this.defs);
    }
    return e;
  }
  gradient(t) {
    let e = t.id;
    const n = t.type;
    if (e || (e = `gradient-${n}-${this.cid}-${ao(JSON.stringify(t))}`), !this.isDefined(e)) {
      const o = t.stops.map((l) => {
        const c = l.opacity != null && Number.isFinite(l.opacity) ? l.opacity : 1;
        return `<stop offset="${l.offset}" stop-color="${l.color}" stop-opacity="${c}"/>`;
      }), r = `<${n}>${o.join("")}</${n}>`, a = Object.assign({ id: e }, t.attrs);
      F.create(r, a).appendTo(this.defs);
    }
    return e;
  }
  marker(t) {
    const { id: e, refX: n, refY: i, markerUnits: o, markerOrient: r, tagName: a, children: l } = t, c = G(t, ["id", "refX", "refY", "markerUnits", "markerOrient", "tagName", "children"]);
    let h = e;
    if (h || (h = `marker-${this.cid}-${ao(JSON.stringify(t))}`), !this.isDefined(h)) {
      a !== "path" && delete c.d;
      const u = F.create("marker", {
        refX: n,
        refY: i,
        id: h,
        overflow: "visible",
        orient: r ?? "auto",
        markerUnits: o || "userSpaceOnUse"
      }, l ? l.map((d) => {
        var { tagName: g } = d, f = G(d, ["tagName"]);
        return F.create(`${g}` || "path", ui(Object.assign(Object.assign({}, c), f)));
      }) : [F.create(a || "path", ui(c))]);
      this.defs.appendChild(u.node);
    }
    return h;
  }
  remove(t) {
    const e = this.svg.getElementById(t);
    e && e.parentNode && e.parentNode.removeChild(e);
  }
}
class ad extends re {
  get elem() {
    return this.view.grid;
  }
  get grid() {
    return this.options.grid;
  }
  init() {
    this.startListening(), this.draw(this.grid);
  }
  startListening() {
    this.graph.on("scale", this.update, this), this.graph.on("translate", this.update, this);
  }
  stopListening() {
    this.graph.off("scale", this.update, this), this.graph.off("translate", this.update, this);
  }
  setVisible(t) {
    this.grid.visible !== t && (this.grid.visible = t, this.update());
  }
  getGridSize() {
    return this.grid.size;
  }
  setGridSize(t) {
    this.grid.size = Math.max(t, 1), this.update();
  }
  show() {
    this.setVisible(!0), this.update();
  }
  hide() {
    this.setVisible(!1), this.update();
  }
  clear() {
    this.elem.style.backgroundImage = "";
  }
  draw(t) {
    this.clear(), this.instance = null, Object.assign(this.grid, t), this.patterns = this.resolveGrid(t), this.update();
  }
  update(t = {}) {
    const e = this.grid.size;
    if (e <= 1 || !this.grid.visible)
      return this.clear();
    const n = this.graph.matrix(), i = this.getInstance(), o = Array.isArray(t) ? t : [t];
    this.patterns.forEach((l, c) => {
      const h = `pattern_${c}`, u = n.a || 1, d = n.d || 1, { update: g, markup: f } = l, p = G(l, ["update", "markup"]), m = Object.assign(Object.assign(Object.assign({}, p), o[c]), {
        sx: u,
        sy: d,
        ox: n.e || 0,
        oy: n.f || 0,
        width: e * u,
        height: e * d
      });
      i.has(h) || i.add(h, F.create("pattern", { id: h, patternUnits: "userSpaceOnUse" }, F.createVectors(f)).node);
      const b = i.get(h);
      typeof g == "function" && g(b.childNodes[0], m);
      let y = m.ox % m.width;
      y < 0 && (y += m.width);
      let A = m.oy % m.height;
      A < 0 && (A += m.height), X(b, {
        x: y,
        y: A,
        width: m.width,
        height: m.height
      });
    });
    const r = new XMLSerializer().serializeToString(i.root), a = `url(data:image/svg+xml;base64,${btoa(r)})`;
    this.elem.style.backgroundImage = a;
  }
  getInstance() {
    return this.instance || (this.instance = new Dx()), this.instance;
  }
  resolveGrid(t) {
    if (!t)
      return [];
    const e = t.type;
    if (e == null)
      return [
        Object.assign(Object.assign({}, Au.dot), t.args)
      ];
    const n = wi.get(e);
    if (n) {
      let i = t.args || [];
      return Array.isArray(i) || (i = [i]), Array.isArray(n) ? n.map((o, r) => Object.assign(Object.assign({}, o), i[r])) : [Object.assign(Object.assign({}, n), i[0])];
    }
    return wi.onNotFound(e);
  }
  dispose() {
    this.stopListening(), this.clear();
  }
}
$([
  _()
], ad.prototype, "dispose", null);
class ld extends re {
  constructor() {
    super(...arguments), this.highlights = {};
  }
  init() {
    this.startListening();
  }
  startListening() {
    this.graph.on("cell:highlight", this.onCellHighlight, this), this.graph.on("cell:unhighlight", this.onCellUnhighlight, this);
  }
  stopListening() {
    this.graph.off("cell:highlight", this.onCellHighlight, this), this.graph.off("cell:unhighlight", this.onCellUnhighlight, this);
  }
  onCellHighlight({ view: t, magnet: e, options: n = {} }) {
    const i = this.resolveHighlighter(n);
    if (!i)
      return;
    const o = this.getHighlighterId(e, i);
    if (!this.highlights[o]) {
      const r = i.highlighter;
      r.highlight(t, e, Object.assign({}, i.args)), this.highlights[o] = {
        cellView: t,
        magnet: e,
        highlighter: r,
        args: i.args
      };
    }
  }
  onCellUnhighlight({ magnet: t, options: e = {} }) {
    const n = this.resolveHighlighter(e);
    if (!n)
      return;
    const i = this.getHighlighterId(t, n);
    this.unhighlight(i);
  }
  resolveHighlighter(t) {
    const e = this.options;
    let n = t.highlighter;
    if (n == null) {
      const a = t.type;
      n = a && e.highlighting[a] || e.highlighting.default;
    }
    if (n == null)
      return null;
    const i = typeof n == "string" ? {
      name: n
    } : n, o = i.name, r = vi.get(o);
    return r == null ? vi.onNotFound(o) : (Jx(o, r), {
      name: o,
      highlighter: r,
      args: i.args || {}
    });
  }
  getHighlighterId(t, e) {
    return xr(t), e.name + t.id + JSON.stringify(e.args);
  }
  unhighlight(t) {
    const e = this.highlights[t];
    e && (e.highlighter.unhighlight(e.cellView, e.magnet, e.args), delete this.highlights[t]);
  }
  dispose() {
    Object.keys(this.highlights).forEach((t) => this.unhighlight(t)), this.stopListening();
  }
}
$([
  _()
], ld.prototype, "dispose", null);
class cd extends re {
  constructor() {
    super(...arguments), this.cumulatedFactor = 1;
  }
  get widgetOptions() {
    return this.options.mousewheel;
  }
  init() {
    this.container = this.graph.container, this.target = this.widgetOptions.global ? document : this.container, this.mousewheelHandle = new jh(this.target, this.onMouseWheel.bind(this), this.allowMouseWheel.bind(this)), this.widgetOptions.enabled && this.enable(!0);
  }
  get disabled() {
    return this.widgetOptions.enabled !== !0;
  }
  enable(t) {
    (this.disabled || t) && (this.widgetOptions.enabled = !0, this.mousewheelHandle.enable());
  }
  disable() {
    this.disabled || (this.widgetOptions.enabled = !1, this.mousewheelHandle.disable());
  }
  allowMouseWheel(t) {
    const e = this.widgetOptions.guard;
    return (e == null || e(t)) && Ge(t, this.widgetOptions.modifiers);
  }
  onMouseWheel(t) {
    const e = this.widgetOptions.guard;
    if ((e == null || e(t)) && Ge(t, this.widgetOptions.modifiers)) {
      const n = this.widgetOptions.factor || 1.2;
      this.currentScale == null && (this.startPos = { x: t.clientX, y: t.clientY }, this.currentScale = this.graph.transform.getScale().sx), t.deltaY < 0 ? (this.currentScale < 0.15 ? this.cumulatedFactor = (this.currentScale + 0.01) / this.currentScale : this.cumulatedFactor = Math.round(this.currentScale * n * 20) / 20 / this.currentScale, this.cumulatedFactor <= 1 && (this.cumulatedFactor = 1.05)) : (this.currentScale <= 0.15 ? this.cumulatedFactor = (this.currentScale - 0.01) / this.currentScale : this.cumulatedFactor = Math.round(this.currentScale * (1 / n) * 20) / 20 / this.currentScale, this.cumulatedFactor >= 1 && (this.cumulatedFactor = 0.95)), this.cumulatedFactor = Math.max(0.01, Math.min(this.currentScale * this.cumulatedFactor, 160) / this.currentScale);
      const o = this.currentScale;
      let r = this.graph.transform.clampScale(o * this.cumulatedFactor);
      const a = this.widgetOptions.minScale || Number.MIN_SAFE_INTEGER, l = this.widgetOptions.maxScale || Number.MAX_SAFE_INTEGER;
      if (r = nn(r, a, l), r !== o)
        if (this.widgetOptions.zoomAtMousePosition) {
          const h = !!this.graph.getPlugin("scroller") ? this.graph.clientToLocal(this.startPos) : this.graph.clientToGraph(this.startPos);
          this.graph.zoom(r, {
            absolute: !0,
            center: h.clone()
          });
        } else
          this.graph.zoom(r, { absolute: !0 });
      this.currentScale = null, this.cumulatedFactor = 1;
    }
  }
  dispose() {
    this.disable();
  }
}
$([
  _()
], cd.prototype, "dispose", null);
function VE(s) {
  const { grid: t, panning: e, mousewheel: n, embedding: i } = s, o = G(
    s,
    ["grid", "panning", "mousewheel", "embedding"]
  ), r = s.container;
  if (r != null)
    o.width == null && (o.width = r.clientWidth), o.height == null && (o.height = r.clientHeight);
  else
    throw new Error("Ensure the container of the graph is specified and valid");
  const a = pt({}, YE, o), l = { size: 10, visible: !1 };
  return typeof t == "number" ? a.grid = { size: t, visible: !1 } : typeof t == "boolean" ? a.grid = Object.assign(Object.assign({}, l), { visible: t }) : a.grid = Object.assign(Object.assign({}, l), t), [
    "panning",
    "mousewheel",
    "embedding"
  ].forEach((h) => {
    const u = s[h];
    typeof u == "boolean" ? a[h].enabled = u : u != null && (a[h] = Object.assign(Object.assign({}, a[h]), u));
  }), a;
}
const YE = {
  x: 0,
  y: 0,
  scaling: {
    min: 0.01,
    max: 16
  },
  grid: {
    size: 10,
    visible: !1
  },
  background: !1,
  panning: {
    enabled: !0,
    eventTypes: ["leftMouseDown"]
  },
  mousewheel: {
    enabled: !1,
    factor: 1.2,
    zoomAtMousePosition: !0
  },
  highlighting: {
    default: {
      name: "stroke",
      args: {
        padding: 3
      }
    },
    nodeAvailable: {
      name: "className",
      args: {
        className: nt.prefix("available-node")
      }
    },
    magnetAvailable: {
      name: "className",
      args: {
        className: nt.prefix("available-magnet")
      }
    }
  },
  connecting: {
    snap: !1,
    allowLoop: !0,
    allowNode: !0,
    allowEdge: !1,
    allowPort: !0,
    allowBlank: !0,
    allowMulti: !0,
    highlight: !1,
    anchor: "center",
    edgeAnchor: "ratio",
    connectionPoint: "boundary",
    router: "normal",
    connector: "normal",
    validateConnection({ type: s, sourceView: t, targetView: e }) {
      return (s === "target" ? e : t) != null;
    },
    createEdge() {
      return new nd();
    }
  },
  translating: {
    restrict: !1
  },
  embedding: {
    enabled: !1,
    findParent: "bbox",
    frontOnly: !0,
    validate: () => !0
  },
  moveThreshold: 0,
  clickThreshold: 0,
  magnetThreshold: 0,
  preventDefaultDblClick: !0,
  preventDefaultMouseDown: !1,
  preventDefaultContextMenu: !0,
  preventDefaultBlankAction: !0,
  interacting: {
    edgeLabelMovable: !1
  },
  async: !0,
  virtual: !1,
  guard: () => !1
};
class hd extends re {
  get widgetOptions() {
    return this.options.panning;
  }
  get pannable() {
    return this.widgetOptions && this.widgetOptions.enabled === !0;
  }
  init() {
    this.onRightMouseDown = this.onRightMouseDown.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.startListening(), this.updateClassName();
  }
  startListening() {
    this.graph.on("blank:mousedown", this.onMouseDown, this), this.graph.on("node:unhandled:mousedown", this.onMouseDown, this), this.graph.on("edge:unhandled:mousedown", this.onMouseDown, this), lt.on(this.graph.container, "mousedown", this.onRightMouseDown), lt.on(document.body, {
      keydown: this.onKeyDown,
      keyup: this.onKeyUp
    }), this.mousewheelHandle = new jh(this.graph.container, this.onMouseWheel.bind(this), this.allowMouseWheel.bind(this)), this.mousewheelHandle.enable();
  }
  stopListening() {
    this.graph.off("blank:mousedown", this.onMouseDown, this), this.graph.off("node:unhandled:mousedown", this.onMouseDown, this), this.graph.off("edge:unhandled:mousedown", this.onMouseDown, this), lt.off(this.graph.container, "mousedown", this.onRightMouseDown), lt.off(document.body, {
      keydown: this.onKeyDown,
      keyup: this.onKeyUp
    }), this.mousewheelHandle && this.mousewheelHandle.disable();
  }
  allowPanning(t, e) {
    return t.spaceKey = this.isSpaceKeyPressed, this.pannable && Ge(t, this.widgetOptions.modifiers, e);
  }
  startPanning(t) {
    const e = this.view.normalizeEvent(t);
    this.clientX = e.clientX, this.clientY = e.clientY, this.panning = !0, this.updateClassName(t), lt.on(document.body, {
      "mousemove.panning touchmove.panning": this.pan.bind(this),
      "mouseup.panning touchend.panning": this.stopPanning.bind(this),
      "mouseleave.panning": this.stopPanning.bind(this)
    }), lt.on(window, "mouseup.panning", this.stopPanning.bind(this));
  }
  pan(t) {
    const e = this.view.normalizeEvent(t), n = e.clientX - this.clientX, i = e.clientY - this.clientY;
    this.clientX = e.clientX, this.clientY = e.clientY, this.graph.translateBy(n, i);
  }
  // eslint-disable-next-line
  stopPanning(t) {
    this.panning = !1, this.updateClassName(t), lt.off(document.body, ".panning"), lt.off(window, ".panning");
  }
  updateClassName(t) {
    const e = this.widgetOptions.eventTypes;
    if ((e == null ? void 0 : e.length) === 1 && e.includes("mouseWheel"))
      return;
    const n = this.view.container, i = this.view.prefixClassName("graph-panning"), o = this.view.prefixClassName("graph-pannable"), r = this.graph.getPlugin("selection"), a = r && r.allowRubberband(t, !0), l = (e == null ? void 0 : e.includes("leftMouseDown")) && !a;
    this.allowPanning(t ?? {}, !0) || this.allowPanning(t ?? {}) && l ? this.panning ? (k(n, i), ut(n, o)) : (ut(n, i), k(n, o)) : this.panning || (ut(n, i), ut(n, o));
  }
  onMouseDown({ e: t }) {
    if (!this.allowBlankMouseDown(t))
      return;
    const e = this.graph.getPlugin("selection"), n = e && e.allowRubberband(t, !0);
    (this.allowPanning(t, !0) || this.allowPanning(t) && !n) && this.startPanning(t);
  }
  onRightMouseDown(t) {
    const e = this.widgetOptions.eventTypes;
    e != null && e.includes("rightMouseDown") && t.button === 2 && this.allowPanning(t, !0) && this.startPanning(t);
  }
  onMouseWheel(t, e, n) {
    this.graph.translateBy(-e, -n);
  }
  onKeyDown(t) {
    t.which === 32 && (this.isSpaceKeyPressed = !0), this.updateClassName(t);
  }
  onKeyUp(t) {
    t.which === 32 && (this.isSpaceKeyPressed = !1), this.updateClassName(t);
  }
  allowBlankMouseDown(t) {
    const e = this.widgetOptions.eventTypes;
    return typeof t.type == "string" && t.type.startsWith("touch") || t.pointerType === "touch" ? e == null ? void 0 : e.includes("leftMouseDown") : (e == null ? void 0 : e.includes("leftMouseDown")) && t.button === 0 || (e == null ? void 0 : e.includes("mouseWheelDown")) && t.button === 1;
  }
  allowMouseWheel(t) {
    var e;
    return this.pannable && !t.ctrlKey && ((e = this.widgetOptions.eventTypes) === null || e === void 0 ? void 0 : e.includes("mouseWheel"));
  }
  autoPanning(t, e) {
    const i = this.graph.getGraphArea();
    let o = 0, r = 0;
    t <= i.left + 10 && (o = -10), e <= i.top + 10 && (r = -10), t >= i.right - 10 && (o = 10), e >= i.bottom - 10 && (r = 10), (o !== 0 || r !== 0) && this.graph.translateBy(-o, -r);
  }
  enablePanning() {
    this.pannable || (this.widgetOptions.enabled = !0, this.updateClassName());
  }
  disablePanning() {
    this.pannable && (this.widgetOptions.enabled = !1, this.updateClassName());
  }
  dispose() {
    this.stopListening();
  }
}
$([
  _()
], hd.prototype, "dispose", null);
class ud extends re {
  getScroller() {
    const t = this.graph.getPlugin("scroller");
    return t && t.options.enabled ? t : null;
  }
  getContainer() {
    const t = this.getScroller();
    return t ? t.container.parentElement : this.graph.container.parentElement;
  }
  getSensorTarget() {
    const t = this.options.autoResize;
    if (t)
      return typeof t == "boolean" ? this.getContainer() || void 0 : t;
  }
  init() {
    if (this.options.autoResize) {
      const e = this.getSensorTarget();
      if (e) {
        if (typeof ResizeObserver > "u")
          return;
        this.ro = new ResizeObserver((o) => {
          if (!o || o.length === 0)
            return;
          const { width: r, height: a } = o[0].contentRect;
          this.resize(Math.round(r), Math.round(a));
        }), this.ro.observe(e);
        const n = e.offsetWidth, i = e.offsetHeight;
        this.resize(n, i);
      }
    }
  }
  resize(t, e) {
    const n = this.getScroller();
    n ? n.resize(t, e) : this.graph.transform.resize(t, e);
  }
  dispose() {
    this.ro && (this.ro.disconnect(), this.ro = void 0);
  }
}
$([
  _()
], ud.prototype, "dispose", null);
class HE extends re {
  get container() {
    return this.graph.view.container;
  }
  get viewport() {
    return this.graph.view.viewport;
  }
  get stage() {
    return this.graph.view.stage;
  }
  init() {
    this.resize();
  }
  /**
   * Returns the current transformation matrix of the graph.
   */
  getMatrix() {
    const t = this.viewport.getAttribute("transform");
    return t !== this.viewportTransformString && (this.viewportMatrix = this.viewport.getCTM(), this.viewportTransformString = t), kt(this.viewportMatrix);
  }
  /**
   * Sets new transformation with the given `matrix`
   */
  setMatrix(t) {
    const e = kt(t), n = Qi(e);
    this.viewport.setAttribute("transform", n), this.viewportMatrix = e, this.viewportTransformString = n;
  }
  resize(t, e) {
    let n = t === void 0 ? this.options.width : t, i = e === void 0 ? this.options.height : e;
    this.options.width = n, this.options.height = i, typeof n == "number" && (n = Math.round(n)), typeof i == "number" && (i = Math.round(i)), this.container.style.width = n == null ? "" : `${n}px`, this.container.style.height = i == null ? "" : `${i}px`;
    const o = this.getComputedSize();
    return this.graph.trigger("resize", Object.assign({}, o)), this;
  }
  getComputedSize() {
    let t = this.options.width, e = this.options.height;
    return Be(t) || (t = this.container.clientWidth), Be(e) || (e = this.container.clientHeight), { width: t, height: e };
  }
  getScale() {
    return kA(this.getMatrix());
  }
  scale(t, e = t, n = 0, i = 0, o = !0) {
    if (t = this.clampScale(t), e = this.clampScale(e), o && (n || i)) {
      const a = this.getTranslation(), l = this.getScale(), c = n - (n - a.tx) * (t / l.sx), h = i - (i - a.ty) * (e / l.sy);
      (c !== a.tx || h !== a.ty) && this.translate(c, h);
    }
    const r = this.getMatrix();
    return r.a = t, r.d = e, this.setMatrix(r), this.graph.trigger("scale", { sx: t, sy: e, ox: n, oy: i }), this;
  }
  clampScale(t) {
    const e = this.graph.options.scaling;
    return nn(t, e.min || 0.01, e.max || 16);
  }
  getZoom() {
    return this.getScale().sx;
  }
  zoom(t, e) {
    e = e || {};
    let n = t, i = t;
    const o = this.getScale(), r = this.getComputedSize();
    let a = r.width / 2, l = r.height / 2;
    return e.absolute || (n += o.sx, i += o.sy), e.scaleGrid && (n = Math.round(n / e.scaleGrid) * e.scaleGrid, i = Math.round(i / e.scaleGrid) * e.scaleGrid), e.maxScale && (n = Math.min(e.maxScale, n), i = Math.min(e.maxScale, i)), e.minScale && (n = Math.max(e.minScale, n), i = Math.max(e.minScale, i)), e.center && (a = e.center.x, l = e.center.y), n = this.clampScale(n), i = this.clampScale(i), this.scale(n, i, a, l), this;
  }
  getRotation() {
    return OA(this.getMatrix());
  }
  rotate(t, e, n) {
    if (e == null || n == null) {
      const o = we(this.stage);
      e = o.width / 2, n = o.height / 2;
    }
    const i = this.getMatrix().translate(e, n).rotate(t).translate(-e, -n);
    return this.setMatrix(i), this;
  }
  getTranslation() {
    return RA(this.getMatrix());
  }
  translate(t, e) {
    const n = this.getMatrix();
    n.e = t || 0, n.f = e || 0, this.setMatrix(n);
    const i = this.getTranslation();
    return this.options.x = i.tx, this.options.y = i.ty, this.graph.trigger("translate", Object.assign({}, i)), this;
  }
  setOrigin(t, e) {
    return this.translate(t || 0, e || 0);
  }
  fitToContent(t, e, n, i) {
    if (typeof t == "object") {
      const A = t;
      t = A.gridWidth || 1, e = A.gridHeight || 1, n = A.padding || 0, i = A;
    } else
      t = t || 1, e = e || 1, n = n || 0, i == null && (i = {});
    const o = he(n), r = i.border || 0, a = i.contentArea ? I.create(i.contentArea) : this.getContentArea(i);
    r > 0 && a.inflate(r);
    const l = this.getScale(), c = this.getTranslation(), h = l.sx, u = l.sy;
    a.x *= h, a.y *= u, a.width *= h, a.height *= u;
    let d = Math.max(Math.ceil((a.width + a.x) / t), 1) * t, g = Math.max(Math.ceil((a.height + a.y) / e), 1) * e, f = 0, p = 0;
    (i.allowNewOrigin === "negative" && a.x < 0 || i.allowNewOrigin === "positive" && a.x >= 0 || i.allowNewOrigin === "any") && (f = Math.ceil(-a.x / t) * t, f += o.left, d += f), (i.allowNewOrigin === "negative" && a.y < 0 || i.allowNewOrigin === "positive" && a.y >= 0 || i.allowNewOrigin === "any") && (p = Math.ceil(-a.y / e) * e, p += o.top, g += p), d += o.right, g += o.bottom, d = Math.max(d, i.minWidth || 0), g = Math.max(g, i.minHeight || 0), d = Math.min(d, i.maxWidth || Number.MAX_SAFE_INTEGER), g = Math.min(g, i.maxHeight || Number.MAX_SAFE_INTEGER);
    const m = this.getComputedSize(), b = d !== m.width || g !== m.height;
    return (f !== c.tx || p !== c.ty) && this.translate(f, p), b && this.resize(d, g), new I(-f / h, -p / u, d / h, g / u);
  }
  scaleContentToFit(t = {}) {
    this.scaleContentToFitImpl(t);
  }
  scaleContentToFitImpl(t = {}, e = !0) {
    let n, i;
    if (t.contentArea) {
      const b = t.contentArea;
      n = this.graph.localToGraph(b), i = C.create(b);
    } else
      n = this.getContentBBox(t), i = this.graph.graphToLocal(n);
    if (!n.width || !n.height)
      return;
    const o = he(t.padding), r = t.minScale || 0, a = t.maxScale || Number.MAX_SAFE_INTEGER, l = t.minScaleX || r, c = t.maxScaleX || a, h = t.minScaleY || r, u = t.maxScaleY || a;
    let d;
    if (t.viewportArea)
      d = t.viewportArea;
    else {
      const b = this.getComputedSize(), y = this.getTranslation();
      d = {
        x: y.tx,
        y: y.ty,
        width: b.width,
        height: b.height
      };
    }
    d = I.create(d).moveAndExpand({
      x: o.left,
      y: o.top,
      width: -o.left - o.right,
      height: -o.top - o.bottom
    });
    const g = this.getScale();
    let f = d.width / n.width * g.sx, p = d.height / n.height * g.sy;
    t.preserveAspectRatio !== !1 && (f = p = Math.min(f, p));
    const m = t.scaleGrid;
    if (m && (f = m * Math.floor(f / m), p = m * Math.floor(p / m)), f = nn(f, l, c), p = nn(p, h, u), this.scale(f, p), e) {
      const b = this.options, y = d.x - i.x * f - b.x, A = d.y - i.y * p - b.y;
      this.translate(y, A);
    }
  }
  getContentArea(t = {}) {
    return t.useCellGeometry !== !1 ? this.model.getAllCellsBBox() || new I() : we(this.stage);
  }
  getContentBBox(t = {}) {
    return this.graph.localToGraph(this.getContentArea(t));
  }
  getGraphArea() {
    const t = I.fromSize(this.getComputedSize());
    return this.graph.graphToLocal(t);
  }
  zoomToRect(t, e = {}) {
    const n = I.create(t), i = this.graph;
    e.contentArea = n, e.viewportArea == null && (e.viewportArea = {
      x: i.options.x,
      y: i.options.y,
      width: this.options.width,
      height: this.options.height
    }), this.scaleContentToFitImpl(e, !1);
    const o = n.getCenter();
    return this.centerPoint(o.x, o.y), this;
  }
  zoomToFit(t = {}) {
    return this.zoomToRect(this.getContentArea(t), t);
  }
  centerPoint(t, e) {
    const n = this.getComputedSize(), i = this.getScale(), o = this.getTranslation(), r = n.width / 2, a = n.height / 2;
    t = typeof t == "number" ? t : r, e = typeof e == "number" ? e : a, t = r - t * i.sx, e = a - e * i.sy, (o.tx !== t || o.ty !== e) && this.translate(t, e);
  }
  centerContent(t) {
    const n = this.graph.getContentArea(t).getCenter();
    this.centerPoint(n.x, n.y);
  }
  centerCell(t) {
    return this.positionCell(t, "center");
  }
  positionPoint(t, e, n) {
    const i = this.getComputedSize();
    e = Wt(e, Math.max(0, i.width)), e < 0 && (e = i.width + e), n = Wt(n, Math.max(0, i.height)), n < 0 && (n = i.height + n);
    const o = this.getTranslation(), r = this.getScale(), a = e - t.x * r.sx, l = n - t.y * r.sy;
    (o.tx !== a || o.ty !== l) && this.translate(a, l);
  }
  positionRect(t, e) {
    const n = I.create(t);
    switch (e) {
      case "center":
        return this.positionPoint(n.getCenter(), "50%", "50%");
      case "top":
        return this.positionPoint(n.getTopCenter(), "50%", 0);
      case "top-right":
        return this.positionPoint(n.getTopRight(), "100%", 0);
      case "right":
        return this.positionPoint(n.getRightMiddle(), "100%", "50%");
      case "bottom-right":
        return this.positionPoint(n.getBottomRight(), "100%", "100%");
      case "bottom":
        return this.positionPoint(n.getBottomCenter(), "50%", "100%");
      case "bottom-left":
        return this.positionPoint(n.getBottomLeft(), 0, "100%");
      case "left":
        return this.positionPoint(n.getLeftMiddle(), 0, "50%");
      case "top-left":
        return this.positionPoint(n.getTopLeft(), 0, 0);
      default:
        return this;
    }
  }
  positionCell(t, e) {
    const n = t.getBBox();
    return this.positionRect(n, e);
  }
  positionContent(t, e) {
    const n = this.graph.getContentArea(e);
    return this.positionRect(n, t);
  }
}
const Ne = `${nt.prefixCls}-graph`;
class ke extends Yt {
  static snapshoot(t) {
    const e = t.cloneNode();
    return t.childNodes.forEach((n) => {
      e.appendChild(n);
    }), () => {
      for (Di(t); t.attributes.length > 0; )
        t.removeAttribute(t.attributes[0].name);
      for (let n = 0, i = e.attributes.length; n < i; n += 1) {
        const o = e.attributes[n];
        t.setAttribute(o.name, o.value);
      }
      e.childNodes.forEach((n) => {
        t.appendChild(n);
      });
    };
  }
  /** Graph's `this.container` is from outer, should not dispose */
  get disposeContainer() {
    return !1;
  }
  get options() {
    return this.graph.options;
  }
  constructor(t) {
    super(), this.graph = t;
    const { selectors: e, fragment: n } = Nt.parseJSONMarkup(ke.markup);
    this.background = e.background, this.grid = e.grid, this.svg = e.svg, this.defs = e.defs, this.viewport = e.viewport, this.primer = e.primer, this.stage = e.stage, this.decorator = e.decorator, this.overlay = e.overlay, this.container = this.options.container, this.restore = ke.snapshoot(this.container), k(this.container, this.prefixClassName("graph")), Rt(this.container, n), this.delegateEvents();
  }
  delegateEvents() {
    const t = this.constructor;
    return super.delegateEvents(t.events), this;
  }
  /**
   * Guard the specified event. If the event is not interesting, it
   * returns `true`, otherwise returns `false`.
   */
  guard(t, e) {
    return t.type === "mousedown" && t.button === 2 || this.options.guard && this.options.guard(t, e) ? !0 : t.data && t.data.guarded !== void 0 ? t.data.guarded : !(e && e.cell && q.isCell(e.cell) || this.svg === t.target || this.container === t.target || this.svg.contains(t.target));
  }
  findView(t) {
    return this.graph.findViewByElem(t);
  }
  onDblClick(t) {
    this.options.preventDefaultDblClick && t.preventDefault();
    const e = this.normalizeEvent(t), n = this.findView(e.target);
    if (this.guard(e, n))
      return;
    const i = this.graph.snapToGrid(e.clientX, e.clientY);
    n ? n.onDblClick(e, i.x, i.y) : this.graph.trigger("blank:dblclick", {
      e,
      x: i.x,
      y: i.y
    });
  }
  onClick(t) {
    if (this.getMouseMovedCount(t) <= this.options.clickThreshold) {
      const e = this.normalizeEvent(t), n = this.findView(e.target);
      if (this.guard(e, n))
        return;
      const i = this.graph.snapToGrid(e.clientX, e.clientY);
      n ? n.onClick(e, i.x, i.y) : this.graph.trigger("blank:click", {
        e,
        x: i.x,
        y: i.y
      });
    }
  }
  isPreventDefaultContextMenu(t) {
    let e = this.options.preventDefaultContextMenu;
    return typeof e == "function" && (e = N(e, this.graph, { view: t })), e;
  }
  onContextMenu(t) {
    const e = this.normalizeEvent(t), n = this.findView(e.target);
    if (this.isPreventDefaultContextMenu(n) && t.preventDefault(), this.guard(e, n))
      return;
    const i = this.graph.snapToGrid(e.clientX, e.clientY);
    n ? n.onContextMenu(e, i.x, i.y) : this.graph.trigger("blank:contextmenu", {
      e,
      x: i.x,
      y: i.y
    });
  }
  delegateDragEvents(t, e) {
    t.data == null && (t.data = {}), this.setEventData(t, {
      currentView: e || null,
      mouseMovedCount: 0,
      startPosition: {
        x: t.clientX,
        y: t.clientY
      }
    });
    const n = this.constructor;
    this.delegateDocumentEvents(n.documentEvents, t.data), this.undelegateEvents();
  }
  getMouseMovedCount(t) {
    return this.getEventData(t).mouseMovedCount || 0;
  }
  onMouseDown(t) {
    const e = this.normalizeEvent(t), n = this.findView(e.target);
    if (this.guard(e, n))
      return;
    this.options.preventDefaultMouseDown && t.preventDefault();
    const i = this.graph.snapToGrid(e.clientX, e.clientY);
    n ? n.onMouseDown(e, i.x, i.y) : (this.options.preventDefaultBlankAction && ["touchstart"].includes(e.type) && t.preventDefault(), this.graph.trigger("blank:mousedown", {
      e,
      x: i.x,
      y: i.y
    })), this.delegateDragEvents(e, n);
  }
  onMouseMove(t) {
    const e = this.getEventData(t), n = e.startPosition;
    if (n && n.x === t.clientX && n.y === t.clientY || (e.mouseMovedCount == null && (e.mouseMovedCount = 0), e.mouseMovedCount += 1, e.mouseMovedCount <= this.options.moveThreshold))
      return;
    const o = this.normalizeEvent(t), r = this.graph.snapToGrid(o.clientX, o.clientY), a = e.currentView;
    a ? a.onMouseMove(o, r.x, r.y) : this.graph.trigger("blank:mousemove", {
      e: o,
      x: r.x,
      y: r.y
    }), this.setEventData(o, e);
  }
  onMouseUp(t) {
    this.undelegateDocumentEvents();
    const e = this.normalizeEvent(t), n = this.graph.snapToGrid(e.clientX, e.clientY), o = this.getEventData(t).currentView;
    if (o ? o.onMouseUp(e, n.x, n.y) : this.graph.trigger("blank:mouseup", {
      e,
      x: n.x,
      y: n.y
    }), !t.isPropagationStopped()) {
      const r = new Pe(t, {
        type: "click",
        data: t.data
      });
      this.onClick(r);
    }
    t.stopImmediatePropagation(), this.delegateEvents();
  }
  onMouseOver(t) {
    const e = this.normalizeEvent(t), n = this.findView(e.target);
    if (!this.guard(e, n))
      if (n)
        n.onMouseOver(e);
      else {
        if (this.container === e.target)
          return;
        this.graph.trigger("blank:mouseover", { e });
      }
  }
  onMouseOut(t) {
    const e = this.normalizeEvent(t), n = this.findView(e.target);
    if (!this.guard(e, n))
      if (n)
        n.onMouseOut(e);
      else {
        if (this.container === e.target)
          return;
        this.graph.trigger("blank:mouseout", { e });
      }
  }
  onMouseEnter(t) {
    const e = this.normalizeEvent(t), n = this.findView(e.target);
    if (this.guard(e, n))
      return;
    const i = this.graph.findViewByElem(e.relatedTarget);
    if (n) {
      if (i === n)
        return;
      n.onMouseEnter(e);
    } else {
      if (i)
        return;
      this.graph.trigger("graph:mouseenter", { e });
    }
  }
  onMouseLeave(t) {
    const e = this.normalizeEvent(t), n = this.findView(e.target);
    if (this.guard(e, n))
      return;
    const i = this.graph.findViewByElem(e.relatedTarget);
    if (n) {
      if (i === n)
        return;
      n.onMouseLeave(e);
    } else {
      if (i)
        return;
      this.graph.trigger("graph:mouseleave", { e });
    }
  }
  onMouseWheel(t) {
    const e = this.normalizeEvent(t), n = this.findView(e.target);
    if (this.guard(e, n))
      return;
    const i = e.originalEvent, o = this.graph.snapToGrid(i.clientX, i.clientY), r = Math.max(-1, Math.min(1, i.wheelDelta || -i.detail));
    n ? n.onMouseWheel(e, o.x, o.y, r) : this.graph.trigger("blank:mousewheel", {
      e,
      delta: r,
      x: o.x,
      y: o.y
    });
  }
  onCustomEvent(t) {
    const e = t.currentTarget, n = e.getAttribute("event") || e.getAttribute("data-event");
    if (n) {
      const i = this.findView(e);
      if (i) {
        const o = this.normalizeEvent(t);
        if (this.guard(o, i))
          return;
        const r = this.graph.snapToGrid(o.clientX, o.clientY);
        i.onCustomEvent(o, n, r.x, r.y);
      }
    }
  }
  handleMagnetEvent(t, e) {
    const n = t.currentTarget, i = n.getAttribute("magnet");
    if (i && i.toLowerCase() !== "false") {
      const o = this.findView(n);
      if (o) {
        const r = this.normalizeEvent(t);
        if (this.guard(r, o))
          return;
        const a = this.graph.snapToGrid(r.clientX, r.clientY);
        N(e, this.graph, o, r, n, a.x, a.y);
      }
    }
  }
  onMagnetMouseDown(t) {
    this.handleMagnetEvent(t, (e, n, i, o, r) => {
      e.onMagnetMouseDown(n, i, o, r);
    });
  }
  onMagnetDblClick(t) {
    this.handleMagnetEvent(t, (e, n, i, o, r) => {
      e.onMagnetDblClick(n, i, o, r);
    });
  }
  onMagnetContextMenu(t) {
    const e = this.findView(t.target);
    this.isPreventDefaultContextMenu(e) && t.preventDefault(), this.handleMagnetEvent(t, (n, i, o, r, a) => {
      n.onMagnetContextMenu(i, o, r, a);
    });
  }
  onLabelMouseDown(t) {
    const e = t.currentTarget, n = this.findView(e);
    if (n) {
      const i = this.normalizeEvent(t);
      if (this.guard(i, n))
        return;
      const o = this.graph.snapToGrid(i.clientX, i.clientY);
      n.onLabelMouseDown(i, o.x, o.y);
    }
  }
  onImageDragStart() {
    return !1;
  }
  dispose() {
    this.undelegateEvents(), this.undelegateDocumentEvents(), this.restore(), this.restore = () => {
    };
  }
}
ke.markup = [
  {
    ns: Bt.xhtml,
    tagName: "div",
    selector: "background",
    className: `${Ne}-background`
  },
  {
    ns: Bt.xhtml,
    tagName: "div",
    selector: "grid",
    className: `${Ne}-grid`
  },
  {
    ns: Bt.svg,
    tagName: "svg",
    selector: "svg",
    className: `${Ne}-svg`,
    attrs: {
      width: "100%",
      height: "100%",
      "xmlns:xlink": Bt.xlink
    },
    children: [
      {
        tagName: "defs",
        selector: "defs"
      },
      {
        tagName: "g",
        selector: "viewport",
        className: `${Ne}-svg-viewport`,
        children: [
          {
            tagName: "g",
            selector: "primer",
            className: `${Ne}-svg-primer`
          },
          {
            tagName: "g",
            selector: "stage",
            className: `${Ne}-svg-stage`
          },
          {
            tagName: "g",
            selector: "decorator",
            className: `${Ne}-svg-decorator`
          },
          {
            tagName: "g",
            selector: "overlay",
            className: `${Ne}-svg-overlay`
          }
        ]
      }
    ]
  }
];
ke.events = {
  dblclick: "onDblClick",
  contextmenu: "onContextMenu",
  touchstart: "onMouseDown",
  mousedown: "onMouseDown",
  mouseover: "onMouseOver",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  mousewheel: "onMouseWheel",
  DOMMouseScroll: "onMouseWheel",
  [`mouseenter  .${nt.prefixCls}-cell`]: "onMouseEnter",
  [`mouseleave  .${nt.prefixCls}-cell`]: "onMouseLeave",
  [`mouseenter  .${nt.prefixCls}-cell-tools`]: "onMouseEnter",
  [`mouseleave  .${nt.prefixCls}-cell-tools`]: "onMouseLeave",
  [`mousedown   .${nt.prefixCls}-cell [event]`]: "onCustomEvent",
  [`touchstart  .${nt.prefixCls}-cell [event]`]: "onCustomEvent",
  [`mousedown   .${nt.prefixCls}-cell [data-event]`]: "onCustomEvent",
  [`touchstart  .${nt.prefixCls}-cell [data-event]`]: "onCustomEvent",
  [`dblclick    .${nt.prefixCls}-cell [magnet]`]: "onMagnetDblClick",
  [`contextmenu .${nt.prefixCls}-cell [magnet]`]: "onMagnetContextMenu",
  [`mousedown   .${nt.prefixCls}-cell [magnet]`]: "onMagnetMouseDown",
  [`touchstart  .${nt.prefixCls}-cell [magnet]`]: "onMagnetMouseDown",
  [`dblclick    .${nt.prefixCls}-cell [data-magnet]`]: "onMagnetDblClick",
  [`contextmenu .${nt.prefixCls}-cell [data-magnet]`]: "onMagnetContextMenu",
  [`mousedown   .${nt.prefixCls}-cell [data-magnet]`]: "onMagnetMouseDown",
  [`touchstart  .${nt.prefixCls}-cell [data-magnet]`]: "onMagnetMouseDown",
  [`dragstart   .${nt.prefixCls}-cell image`]: "onImageDragStart",
  [`mousedown   .${nt.prefixCls}-edge .${nt.prefixCls}-edge-label`]: "onLabelMouseDown",
  [`touchstart  .${nt.prefixCls}-edge .${nt.prefixCls}-edge-label`]: "onLabelMouseDown"
};
ke.documentEvents = {
  mousemove: "onMouseMove",
  touchmove: "onMouseMove",
  mouseup: "onMouseUp",
  touchend: "onMouseUp",
  touchcancel: "onMouseUp"
};
$([
  _()
], ke.prototype, "dispose", null);
const kl = 120;
class dd extends re {
  init() {
    this.resetRenderArea = dC(this.resetRenderArea, 200, {
      leading: !0
    }), this.resetRenderArea(), this.startListening();
  }
  bindScrollerEvents(t) {
    this.scrollerRef = t, typeof t.on == "function" && (t.on("pan:start", this.resetRenderArea, this), t.on("panning", this.resetRenderArea, this), t.on("pan:stop", this.resetRenderArea, this));
    const e = t.container;
    e && (this.scrollerScrollHandler = (n) => {
      this.resetRenderArea();
    }, lt.on(e, "scroll", this.scrollerScrollHandler));
  }
  startListening() {
    this.graph.on("translate", this.resetRenderArea, this), this.graph.on("scale", this.resetRenderArea, this), this.graph.on("resize", this.resetRenderArea, this);
    const t = this.graph.getPlugin("scroller");
    t && this.bindScrollerEvents(t);
  }
  stopListening() {
    this.graph.off("translate", this.resetRenderArea, this), this.graph.off("scale", this.resetRenderArea, this), this.graph.off("resize", this.resetRenderArea, this), this.unbindScroller();
  }
  onScrollerReady(t) {
    this.scrollerRef !== t && (this.unbindScroller(), this.bindScrollerEvents(t), this.resetRenderArea());
  }
  unbindScroller() {
    if (this.scrollerRef) {
      typeof this.scrollerRef.off == "function" && (this.scrollerRef.off("pan:start", this.resetRenderArea, this), this.scrollerRef.off("panning", this.resetRenderArea, this), this.scrollerRef.off("pan:stop", this.resetRenderArea, this));
      const t = this.scrollerRef.container;
      t && this.scrollerScrollHandler && lt.off(t, "scroll", this.scrollerScrollHandler), this.scrollerRef = void 0, this.scrollerScrollHandler = void 0;
    }
  }
  setVirtualEnabled(t) {
    const e = this.options.virtual;
    if (typeof e == "object") {
      const n = e;
      this.options.virtual = Object.assign(Object.assign({}, n), { enabled: t });
    } else
      this.options.virtual = t;
  }
  enableVirtualRender() {
    this.setVirtualEnabled(!0), this.resetRenderArea();
  }
  disableVirtualRender() {
    this.setVirtualEnabled(!1), this.graph.renderer.setRenderArea(void 0);
  }
  isVirtualEnabled() {
    const t = this.options.virtual;
    return t != null && typeof t == "object" ? t.enabled !== !1 : !!t;
  }
  getVirtualMargin() {
    const t = this.options.virtual;
    if (typeof t == "object") {
      const e = t.margin;
      return typeof e == "number" ? e : kl;
    }
    return kl;
  }
  resetRenderArea() {
    if (this.isVirtualEnabled()) {
      const e = this.graph.getGraphArea();
      if (e) {
        const n = this.getVirtualMargin(), i = e.clone();
        i.inflate(n, n), this.graph.renderer.setRenderArea(i);
        return;
      }
    }
  }
  dispose() {
    this.stopListening();
  }
}
$([
  _()
], dd.prototype, "dispose", null);
class E extends Gt {
  static isGraph(t) {
    if (t == null)
      return !1;
    if (t instanceof E)
      return !0;
    const e = t[Symbol.toStringTag];
    return e == null || e === E.toStringTag;
  }
  static render(t, e) {
    const n = t instanceof HTMLElement ? new E({ container: t }) : new E(t);
    return e != null && n.fromJSON(e), n;
  }
  get container() {
    return this.options.container;
  }
  get [Symbol.toStringTag]() {
    return E.toStringTag;
  }
  constructor(t) {
    super(), this.installedPlugins = /* @__PURE__ */ new Set(), this.options = VE(t), this.css = new rd(this), this.view = new ke(this), this.defs = new GE(this), this.coord = new JE(this), this.transform = new HE(this), this.highlight = new ld(this), this.grid = new ad(this), this.background = new Vr(this), this.options.model ? this.model = this.options.model : (this.model = new qt(), this.model.graph = this), this.renderer = new od(this), this.panning = new hd(this), this.mousewheel = new cd(this), this.virtualRender = new dd(this), this.size = new ud(this);
  }
  // #region model
  isNode(t) {
    return t.isNode();
  }
  isEdge(t) {
    return t.isEdge();
  }
  resetCells(t, e = {}) {
    return this.model.resetCells(t, e), this;
  }
  clearCells(t = {}) {
    return this.model.clear(t), this;
  }
  toJSON(t = {}) {
    return this.model.toJSON(t);
  }
  parseJSON(t) {
    return this.model.parseJSON(t);
  }
  fromJSON(t, e = {}) {
    return this.model.fromJSON(t, e), this;
  }
  getCellById(t) {
    return this.model.getCell(t);
  }
  addNode(t, e = {}) {
    return this.model.addNode(t, e);
  }
  addNodes(t, e = {}) {
    return this.addCell(t.map((n) => Tt.isNode(n) ? n : this.createNode(n)), e);
  }
  createNode(t) {
    return this.model.createNode(t);
  }
  removeNode(t, e = {}) {
    return this.model.removeCell(t, e);
  }
  addEdge(t, e = {}) {
    return this.model.addEdge(t, e);
  }
  addEdges(t, e = {}) {
    return this.addCell(t.map((n) => Et.isEdge(n) ? n : this.createEdge(n)), e);
  }
  removeEdge(t, e = {}) {
    return this.model.removeCell(t, e);
  }
  createEdge(t) {
    return this.model.createEdge(t);
  }
  addCell(t, e = {}) {
    return this.model.addCell(t, e), this;
  }
  removeCell(t, e = {}) {
    return this.model.removeCell(t, e);
  }
  removeCells(t, e = {}) {
    return this.model.removeCells(t, e);
  }
  removeConnectedEdges(t, e = {}) {
    return this.model.removeConnectedEdges(t, e);
  }
  disconnectConnectedEdges(t, e = {}) {
    return this.model.disconnectConnectedEdges(t, e), this;
  }
  hasCell(t) {
    return this.model.has(t);
  }
  getCells() {
    return this.model.getCells();
  }
  getCellCount() {
    return this.model.total();
  }
  /**
   * Returns all the nodes in the graph.
   */
  getNodes() {
    return this.model.getNodes();
  }
  /**
   * Returns all the edges in the graph.
   */
  getEdges() {
    return this.model.getEdges();
  }
  /**
   * Returns all outgoing edges for the node.
   */
  getOutgoingEdges(t) {
    return this.model.getOutgoingEdges(t);
  }
  /**
   * Returns all incoming edges for the node.
   */
  getIncomingEdges(t) {
    return this.model.getIncomingEdges(t);
  }
  /**
   * Returns edges connected with cell.
   */
  getConnectedEdges(t, e = {}) {
    return this.model.getConnectedEdges(t, e);
  }
  /**
   * Returns an array of all the roots of the graph.
   */
  getRootNodes() {
    return this.model.getRoots();
  }
  /**
   * Returns an array of all the leafs of the graph.
   */
  getLeafNodes() {
    return this.model.getLeafs();
  }
  /**
   * Returns `true` if the node is a root node, i.e.
   * there is no  edges coming to the node.
   */
  isRootNode(t) {
    return this.model.isRoot(t);
  }
  /**
   * Returns `true` if the node is a leaf node, i.e.
   * there is no edges going out from the node.
   */
  isLeafNode(t) {
    return this.model.isLeaf(t);
  }
  /**
   * Returns all the neighbors of node in the graph. Neighbors are all
   * the nodes connected to node via either incoming or outgoing edge.
   */
  getNeighbors(t, e = {}) {
    return this.model.getNeighbors(t, e);
  }
  /**
   * Returns `true` if `cell2` is a neighbor of `cell1`.
   */
  isNeighbor(t, e, n = {}) {
    return this.model.isNeighbor(t, e, n);
  }
  getSuccessors(t, e = {}) {
    return this.model.getSuccessors(t, e);
  }
  /**
   * Returns `true` if `cell2` is a successor of `cell1`.
   */
  isSuccessor(t, e, n = {}) {
    return this.model.isSuccessor(t, e, n);
  }
  getPredecessors(t, e = {}) {
    return this.model.getPredecessors(t, e);
  }
  /**
   * Returns `true` if `cell2` is a predecessor of `cell1`.
   */
  isPredecessor(t, e, n = {}) {
    return this.model.isPredecessor(t, e, n);
  }
  getCommonAncestor(...t) {
    return this.model.getCommonAncestor(...t);
  }
  /**
   * Returns an array of cells that result from finding nodes/edges that
   * are connected to any of the cells in the cells array. This function
   * loops over cells and if the current cell is a edge, it collects its
   * source/target nodes; if it is an node, it collects its incoming and
   * outgoing edges if both the edge terminal (source/target) are in the
   * cells array.
   */
  getSubGraph(t, e = {}) {
    return this.model.getSubGraph(t, e);
  }
  /**
   * Clones the whole subgraph (including all the connected links whose
   * source/target is in the subgraph). If `options.deep` is `true`, also
   * take into account all the embedded cells of all the subgraph cells.
   *
   * Returns a map of the form: { [original cell ID]: [clone] }.
   */
  cloneSubGraph(t, e = {}) {
    return this.model.cloneSubGraph(t, e);
  }
  cloneCells(t) {
    return this.model.cloneCells(t);
  }
  getNodesFromPoint(t, e) {
    return this.model.getNodesFromPoint(t, e);
  }
  getNodesInArea(t, e, n, i, o) {
    return this.model.getNodesInArea(t, e, n, i, o);
  }
  getNodesUnderNode(t, e = {}) {
    return this.model.getNodesUnderNode(t, e);
  }
  searchCell(t, e, n = {}) {
    return this.model.search(t, e, n), this;
  }
  /** *
   * Returns an array of IDs of nodes on the shortest
   * path between source and target.
   */
  getShortestPath(t, e, n = {}) {
    return this.model.getShortestPath(t, e, n);
  }
  /**
   * Returns the bounding box that surrounds all cells in the graph.
   */
  getAllCellsBBox() {
    return this.model.getAllCellsBBox();
  }
  /**
   * Returns the bounding box that surrounds all the given cells.
   */
  getCellsBBox(t, e = {}) {
    return this.model.getCellsBBox(t, e);
  }
  startBatch(t, e = {}) {
    this.model.startBatch(t, e);
  }
  stopBatch(t, e = {}) {
    this.model.stopBatch(t, e);
  }
  batchUpdate(t, e, n) {
    const i = typeof t == "string" ? t : "update", o = typeof t == "string" ? e : t, r = typeof e == "function" ? n : e;
    this.startBatch(i, r);
    const a = o();
    return this.stopBatch(i, r), a;
  }
  updateCellId(t, e) {
    return this.model.updateCellId(t, e);
  }
  // #endregion
  // #region view
  findView(t) {
    return q.isCell(t) ? this.findViewByCell(t) : this.findViewByElem(t);
  }
  findViews(t) {
    return I.isRectangleLike(t) ? this.findViewsInArea(t) : C.isPointLike(t) ? this.findViewsFromPoint(t) : [];
  }
  findViewByCell(t) {
    return this.renderer.findViewByCell(t);
  }
  findViewByElem(t) {
    return this.renderer.findViewByElem(t);
  }
  findViewsFromPoint(t, e) {
    const n = typeof t == "number" ? { x: t, y: e } : t;
    return this.renderer.findViewsFromPoint(n);
  }
  findViewsInArea(t, e, n, i, o) {
    const r = typeof t == "number" ? {
      x: t,
      y: e,
      width: n,
      height: i
    } : t, a = typeof t == "number" ? o : e;
    return this.renderer.findViewsInArea(r, a);
  }
  matrix(t) {
    return typeof t > "u" ? this.transform.getMatrix() : (this.transform.setMatrix(t), this);
  }
  resize(t, e) {
    const n = this.getPlugin("scroller");
    return n ? n.resize(t, e) : this.transform.resize(t, e), this;
  }
  scale(t, e = t, n = 0, i = 0) {
    return typeof t > "u" ? this.transform.getScale() : (this.transform.scale(t, e, n, i), this);
  }
  zoom(t, e) {
    const n = this.getPlugin("scroller");
    if (n) {
      if (typeof t > "u")
        return n.zoom();
      n.zoom(t, e);
    } else {
      if (typeof t > "u")
        return this.transform.getZoom();
      this.transform.zoom(t, e);
    }
    return this;
  }
  zoomTo(t, e = {}) {
    const n = this.getPlugin("scroller");
    return n ? n.zoom(t, Object.assign(Object.assign({}, e), { absolute: !0 })) : this.transform.zoom(t, Object.assign(Object.assign({}, e), { absolute: !0 })), this;
  }
  zoomToRect(t, e = {}) {
    const n = this.getPlugin("scroller");
    return n ? n.zoomToRect(t, e) : this.transform.zoomToRect(t, e), this;
  }
  zoomToFit(t = {}) {
    const e = this.getPlugin("scroller");
    return e ? e.zoomToFit(t) : this.transform.zoomToFit(t), this;
  }
  rotate(t, e, n) {
    return typeof t > "u" ? this.transform.getRotation() : (this.transform.rotate(t, e, n), this);
  }
  translate(t, e) {
    return typeof t > "u" ? this.transform.getTranslation() : (this.transform.translate(t, e), this);
  }
  translateBy(t, e) {
    const n = this.translate(), i = n.tx + t, o = n.ty + e;
    return this.translate(i, o);
  }
  getGraphArea() {
    var t;
    const e = this.getPlugin("scroller");
    if (e) {
      const n = (t = e.getVisibleArea) === null || t === void 0 ? void 0 : t.call(e);
      if (n)
        return n;
    }
    return this.transform.getGraphArea();
  }
  getContentArea(t = {}) {
    return this.transform.getContentArea(t);
  }
  getContentBBox(t = {}) {
    return this.transform.getContentBBox(t);
  }
  fitToContent(t, e, n, i) {
    return this.transform.fitToContent(t, e, n, i);
  }
  scaleContentToFit(t = {}) {
    return this.transform.scaleContentToFit(t), this;
  }
  /**
   * Position the center of graph to the center of the viewport.
   */
  center(t) {
    return this.centerPoint(t);
  }
  centerPoint(t, e, n) {
    const i = this.getPlugin("scroller");
    return i ? i.centerPoint(t, e, n) : this.transform.centerPoint(t, e), this;
  }
  centerContent(t) {
    const e = this.getPlugin("scroller");
    return e ? e.centerContent(t) : this.transform.centerContent(t), this;
  }
  centerCell(t, e) {
    const n = this.getPlugin("scroller");
    return n ? n.centerCell(t, e) : this.transform.centerCell(t), this;
  }
  positionPoint(t, e, n, i = {}) {
    const o = this.getPlugin("scroller");
    return o ? o.positionPoint(t, e, n, i) : this.transform.positionPoint(t, e, n), this;
  }
  positionRect(t, e, n) {
    const i = this.getPlugin("scroller");
    return i ? i.positionRect(t, e, n) : this.transform.positionRect(t, e), this;
  }
  positionCell(t, e, n) {
    const i = this.getPlugin("scroller");
    return i ? i.positionCell(t, e, n) : this.transform.positionCell(t, e), this;
  }
  positionContent(t, e) {
    const n = this.getPlugin("scroller");
    return n ? n.positionContent(t, e) : this.transform.positionContent(t, e), this;
  }
  snapToGrid(t, e) {
    return this.coord.snapToGrid(t, e);
  }
  pageToLocal(t, e, n, i) {
    return I.isRectangleLike(t) ? this.coord.pageToLocalRect(t) : typeof t == "number" && typeof e == "number" && typeof n == "number" && typeof i == "number" ? this.coord.pageToLocalRect(t, e, n, i) : this.coord.pageToLocalPoint(t, e);
  }
  localToPage(t, e, n, i) {
    return I.isRectangleLike(t) ? this.coord.localToPageRect(t) : typeof t == "number" && typeof e == "number" && typeof n == "number" && typeof i == "number" ? this.coord.localToPageRect(t, e, n, i) : this.coord.localToPagePoint(t, e);
  }
  clientToLocal(t, e, n, i) {
    return I.isRectangleLike(t) ? this.coord.clientToLocalRect(t) : typeof t == "number" && typeof e == "number" && typeof n == "number" && typeof i == "number" ? this.coord.clientToLocalRect(t, e, n, i) : this.coord.clientToLocalPoint(t, e);
  }
  localToClient(t, e, n, i) {
    return I.isRectangleLike(t) ? this.coord.localToClientRect(t) : typeof t == "number" && typeof e == "number" && typeof n == "number" && typeof i == "number" ? this.coord.localToClientRect(t, e, n, i) : this.coord.localToClientPoint(t, e);
  }
  localToGraph(t, e, n, i) {
    return I.isRectangleLike(t) ? this.coord.localToGraphRect(t) : typeof t == "number" && typeof e == "number" && typeof n == "number" && typeof i == "number" ? this.coord.localToGraphRect(t, e, n, i) : this.coord.localToGraphPoint(t, e);
  }
  graphToLocal(t, e, n, i) {
    return I.isRectangleLike(t) ? this.coord.graphToLocalRect(t) : typeof t == "number" && typeof e == "number" && typeof n == "number" && typeof i == "number" ? this.coord.graphToLocalRect(t, e, n, i) : this.coord.graphToLocalPoint(t, e);
  }
  clientToGraph(t, e, n, i) {
    return I.isRectangleLike(t) ? this.coord.clientToGraphRect(t) : typeof t == "number" && typeof e == "number" && typeof n == "number" && typeof i == "number" ? this.coord.clientToGraphRect(t, e, n, i) : this.coord.clientToGraphPoint(t, e);
  }
  // #endregion
  // #region defs
  defineFilter(t) {
    return this.defs.filter(t);
  }
  defineGradient(t) {
    return this.defs.gradient(t);
  }
  defineMarker(t) {
    return this.defs.marker(t);
  }
  // #endregion
  // #region grid
  getGridSize() {
    return this.grid.getGridSize();
  }
  setGridSize(t) {
    return this.grid.setGridSize(t), this;
  }
  showGrid() {
    return this.grid.show(), this;
  }
  hideGrid() {
    return this.grid.hide(), this;
  }
  clearGrid() {
    return this.grid.clear(), this;
  }
  drawGrid(t) {
    return this.grid.draw(t), this;
  }
  // #endregion
  // #region background
  updateBackground() {
    return this.background.update(), this;
  }
  drawBackground(t, e) {
    const n = this.getPlugin("scroller");
    return n != null && (this.options.background == null || !e) ? n.drawBackground(t, e) : this.background.draw(t), this;
  }
  clearBackground(t) {
    const e = this.getPlugin("scroller");
    return e != null && (this.options.background == null || !t) ? e.clearBackground(t) : this.background.clear(), this;
  }
  // #endregion
  // #region virtual-render
  enableVirtualRender() {
    return this.virtualRender.enableVirtualRender(), this;
  }
  disableVirtualRender() {
    return this.virtualRender.disableVirtualRender(), this;
  }
  // #endregion
  // #region mousewheel
  isMouseWheelEnabled() {
    return !this.mousewheel.disabled;
  }
  enableMouseWheel() {
    return this.mousewheel.enable(), this;
  }
  disableMouseWheel() {
    return this.mousewheel.disable(), this;
  }
  toggleMouseWheel(t) {
    return t == null ? this.isMouseWheelEnabled() ? this.disableMouseWheel() : this.enableMouseWheel() : t ? this.enableMouseWheel() : this.disableMouseWheel(), this;
  }
  // #endregion
  // #region panning
  isPannable() {
    const t = this.getPlugin("scroller");
    return t ? t.isPannable() : this.panning.pannable;
  }
  enablePanning() {
    const t = this.getPlugin("scroller");
    return t ? t.enablePanning() : this.panning.enablePanning(), this;
  }
  disablePanning() {
    const t = this.getPlugin("scroller");
    return t ? t.disablePanning() : this.panning.disablePanning(), this;
  }
  togglePanning(t) {
    return t == null ? this.isPannable() ? this.disablePanning() : this.enablePanning() : t !== this.isPannable() && (t ? this.enablePanning() : this.disablePanning()), this;
  }
  // #endregion
  // #region plugin
  handleScrollerPluginStateChange(t, e) {
    t.name === "scroller" && (e ? this.virtualRender.onScrollerReady(t) : this.virtualRender.unbindScroller());
  }
  use(t, ...e) {
    return this.installedPlugins.has(t) || (this.installedPlugins.add(t), t.init(this, ...e), this.handleScrollerPluginStateChange(t, !0)), this;
  }
  getPlugin(t) {
    return Array.from(this.installedPlugins).find((e) => e.name === t);
  }
  getPlugins(t) {
    return Array.from(this.installedPlugins).filter((e) => t.includes(e.name));
  }
  enablePlugins(t) {
    let e = t;
    Array.isArray(e) || (e = [e]);
    const n = this.getPlugins(e);
    return n == null || n.forEach((i) => {
      var o;
      (o = i == null ? void 0 : i.enable) === null || o === void 0 || o.call(i), this.handleScrollerPluginStateChange(i, !0);
    }), this;
  }
  disablePlugins(t) {
    let e = t;
    Array.isArray(e) || (e = [e]);
    const n = this.getPlugins(e);
    return n == null || n.forEach((i) => {
      var o;
      (o = i == null ? void 0 : i.disable) === null || o === void 0 || o.call(i), this.handleScrollerPluginStateChange(i, !1);
    }), this;
  }
  isPluginEnabled(t) {
    var e;
    const n = this.getPlugin(t);
    return (e = n == null ? void 0 : n.isEnabled) === null || e === void 0 ? void 0 : e.call(n);
  }
  disposePlugins(t) {
    let e = t;
    Array.isArray(e) || (e = [e]);
    const n = this.getPlugins(e);
    return n == null || n.forEach((i) => {
      i.dispose(), this.handleScrollerPluginStateChange(i, !1), this.installedPlugins.delete(i);
    }), this;
  }
  // #endregion
  // #region dispose
  dispose(t = !0) {
    t && this.model.dispose(), this.css.dispose(), this.defs.dispose(), this.grid.dispose(), this.coord.dispose(), this.transform.dispose(), this.highlight.dispose(), this.background.dispose(), this.mousewheel.dispose(), this.panning.dispose(), this.view.dispose(), this.renderer.dispose(), this.installedPlugins.forEach((e) => {
      e.dispose();
    });
  }
}
E.toStringTag = `X6.${E.name}`;
E.registerNode = Tt.registry.register;
E.registerEdge = Et.registry.register;
E.registerView = It.registry.register;
E.registerAttr = pi.register;
E.registerGrid = wi.register;
E.registerFilter = Ai.register;
E.registerNodeTool = Mi.register;
E.registerEdgeTool = Bi.register;
E.registerBackground = Hs.register;
E.registerHighlighter = vi.register;
E.registerPortLayout = Ei.register;
E.registerPortLabelLayout = Xs.register;
E.registerMarker = fi.register;
E.registerRouter = Si.register;
E.registerConnector = yi.register;
E.registerAnchor = xi.register;
E.registerEdgeAnchor = Ci.register;
E.registerConnectionPoint = mi.register;
E.unregisterNode = Tt.registry.unregister;
E.unregisterEdge = Et.registry.unregister;
E.unregisterView = It.registry.unregister;
E.unregisterAttr = pi.unregister;
E.unregisterGrid = wi.unregister;
E.unregisterFilter = Ai.unregister;
E.unregisterNodeTool = Mi.unregister;
E.unregisterEdgeTool = Bi.unregister;
E.unregisterBackground = Hs.unregister;
E.unregisterHighlighter = vi.unregister;
E.unregisterPortLayout = Ei.unregister;
E.unregisterPortLabelLayout = Xs.unregister;
E.unregisterMarker = fi.unregister;
E.unregisterRouter = Si.unregister;
E.unregisterConnector = yi.unregister;
E.unregisterAnchor = xi.unregister;
E.unregisterEdgeAnchor = Ci.unregister;
E.unregisterConnectionPoint = mi.unregister;
$([
  _()
], E.prototype, "dispose", null);
const $o = "html", _o = {};
class gd extends Tt {
  /**
   * HTML.register
   * @param config
   */
  static register(t) {
    const { shape: e, html: n, effect: i, inherit: o } = t, r = G(t, ["shape", "html", "effect", "inherit"]);
    if (!e)
      throw new Error("HTML.register should specify `shape` in config.");
    _o[e] = {
      html: n,
      effect: i
    }, E.registerNode(e, Object.assign({ inherit: o || "html" }, r), !0);
  }
}
gd.config({
  view: "html-view",
  markup: [
    {
      tagName: "rect",
      selector: "body"
    },
    Object.assign({}, Nt.getForeignObjectMarkup()),
    {
      tagName: "text",
      selector: "label"
    }
  ],
  attrs: {
    body: {
      fill: "none",
      stroke: "none",
      refWidth: "100%",
      refHeight: "100%"
    },
    fo: {
      refWidth: "100%",
      refHeight: "100%"
    }
  }
});
Tt.registry.register("html", gd, !0);
class Yr extends se {
  init() {
    super.init(), this.cell.on("change:*", this.onCellChangeAny, this);
  }
  onCellChangeAny({ key: t }) {
    const e = _o[this.cell.shape];
    if (e) {
      const { effect: n } = e;
      (!n || n.includes(t)) && this.renderHTMLComponent();
    }
  }
  confirmUpdate(t) {
    const e = super.confirmUpdate(t);
    return this.handleAction(e, $o, () => this.renderHTMLComponent());
  }
  renderHTMLComponent() {
    const t = this.selectors && this.selectors.foContent;
    if (t) {
      Di(t);
      const e = _o[this.cell.shape];
      if (!e)
        return;
      let { html: n } = e;
      typeof n == "function" && (n = n(this.cell)), n && (typeof n == "string" ? t.innerHTML = n : Rt(t, n));
    }
  }
  dispose() {
    this.cell.off("change:*", this.onCellChangeAny, this);
  }
}
$([
  _()
], Yr.prototype, "dispose", null);
Yr.config({
  bootstrap: [$o],
  actions: {
    html: $o
  }
});
se.registry.register("html-view", Yr, !0);
Yn("image", {
  attrs: {
    image: {
      refWidth: "100%",
      refHeight: "100%"
    }
  },
  propHooks: FE()
}, {
  selector: "image"
});
Ji.define({
  shape: "path",
  markup: [
    {
      tagName: "rect",
      selector: "bg"
    },
    {
      tagName: "path",
      selector: "body"
    },
    {
      tagName: "text",
      selector: "label"
    }
  ],
  attrs: {
    bg: {
      refWidth: "100%",
      refHeight: "100%",
      fill: "none",
      stroke: "none",
      pointerEvents: "all"
    },
    body: {
      fill: "none",
      stroke: "#000",
      strokeWidth: 2
    }
  },
  propHooks(s) {
    const { path: t } = s, e = G(s, ["path"]);
    return t && jn(e, "attrs/body/refD", t), e;
  }
});
class Hr extends Ji {
  get points() {
    return this.getPoints();
  }
  set points(t) {
    this.setPoints(t);
  }
  getPoints() {
    return this.getAttrByPath("body/refPoints");
  }
  setPoints(t, e) {
    return t == null ? this.removePoints() : this.setAttrByPath("body/refPoints", ed(t), e), this;
  }
  removePoints() {
    return this.removeAttrByPath("body/refPoints"), this;
  }
}
Hr.config({
  propHooks(s) {
    const { points: t } = s, e = G(s, ["points"]);
    if (t) {
      const n = ed(t);
      n && jn(e, "attrs/body/refPoints", n);
    }
    return e;
  }
});
Yn("polygon", {}, { parent: Hr });
Yn("polyline", {}, { parent: Hr });
Yn("rect", {
  attrs: {
    body: {
      refWidth: "100%",
      refHeight: "100%"
    }
  }
});
function WE(s) {
  return s ? {
    tagName: "foreignObject",
    selector: "foreignObject",
    children: [
      {
        tagName: "div",
        ns: Bt.xhtml,
        selector: "label",
        style: {
          width: "100%",
          height: "100%",
          position: "static",
          backgroundColor: "transparent",
          textAlign: "center",
          margin: 0,
          padding: "0px 5px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }
    ]
  } : {
    tagName: "text",
    selector: "label",
    attrs: {
      textAnchor: "middle"
    }
  };
}
const qE = {
  shape: "text-block",
  markup: [
    {
      tagName: "rect",
      selector: "body"
    },
    WE(wC)
  ],
  attrs: {
    body: Object.assign(Object.assign({}, td), { refWidth: "100%", refHeight: "100%" }),
    foreignObject: {
      refWidth: "100%",
      refHeight: "100%"
    },
    label: {
      style: {
        fontSize: 14
      }
    }
  },
  propHooks(s) {
    const { text: t } = s, e = G(s, ["text"]);
    return t && jn(e, "attrs/label/text", t), e;
  },
  attrHooks: {
    text: {
      set(s, { cell: t, view: e, refBBox: n, elem: i, attrs: o }) {
        if (i instanceof HTMLElement)
          i.textContent = s;
        else {
          const r = o.style || {}, a = { text: s, width: -5, height: "100%" }, l = Object.assign({ textVerticalAnchor: "middle" }, r), c = du.textWrap;
          return N(c.set, this, a, {
            cell: t,
            view: e,
            elem: i,
            refBBox: n,
            attrs: l
          }), { fill: r.color || null };
        }
      },
      position(s, { refBBox: t, elem: e }) {
        if (e instanceof SVGElement)
          return t.getCenter();
      }
    }
  }
};
Ji.define(qE);
const Wr = `${nt.prefixCls}.clipboard.cells`;
function XE(s) {
  if (window.localStorage) {
    const t = s.map((e) => e.toJSON());
    localStorage.setItem(Wr, JSON.stringify(t));
  }
}
function $E() {
  if (window.localStorage) {
    const s = localStorage.getItem(Wr), t = s ? JSON.parse(s) : [];
    if (t)
      return qt.fromJSON(t);
  }
}
function _E() {
  window.localStorage && localStorage.removeItem(Wr);
}
class ZE {
  constructor() {
    this.cells = [];
  }
  copy(t, e, n = {}) {
    this.options = Object.assign({}, n);
    const o = (qt.isModel(e) ? e : e.model).cloneSubGraph(t, n);
    this.cells = Cr(Object.keys(o).map((r) => o[r]), (r) => r.isEdge() ? 2 : 1), this.serialize(n);
  }
  cut(t, e, n = {}) {
    this.copy(t, e, n), (E.isGraph(e) ? e.model : e).batchUpdate("cut", () => {
      t.forEach((o) => o.remove());
    });
  }
  paste(t, e = {}) {
    const n = Object.assign(Object.assign({}, this.options), e), { offset: i, edgeProps: o, nodeProps: r } = n;
    let a = 20, l = 20;
    i && (a = typeof i == "number" ? i : i.dx, l = typeof i == "number" ? i : i.dy), this.deserialize(n);
    const c = this.cells;
    c.forEach((u) => {
      u.model = null, u.removeProp("zIndex"), (a || l) && u.translate(a, l), r && u.isNode() && u.prop(r), o && u.isEdge() && u.prop(o);
    });
    const h = E.isGraph(t) ? t.model : t;
    return h.batchUpdate("paste", () => {
      h.addCells(this.cells);
    }), this.copy(c, t, e), c;
  }
  serialize(t) {
    t.useLocalStorage !== !1 && XE(this.cells);
  }
  deserialize(t) {
    if (t.useLocalStorage) {
      const e = $E();
      e && (this.cells = e);
    }
  }
  isEmpty(t = {}) {
    return t.useLocalStorage && this.deserialize(t), this.cells.length <= 0;
  }
  clean() {
    this.options = {}, this.cells = [], _E();
  }
}
E.prototype.isClipboardEnabled = function() {
  const s = this.getPlugin("clipboard");
  return s ? s.isEnabled() : !1;
};
E.prototype.enableClipboard = function() {
  const s = this.getPlugin("clipboard");
  return s && s.enable(), this;
};
E.prototype.disableClipboard = function() {
  const s = this.getPlugin("clipboard");
  return s && s.disable(), this;
};
E.prototype.toggleClipboard = function(s) {
  const t = this.getPlugin("clipboard");
  return t && t.toggleEnabled(s), this;
};
E.prototype.isClipboardEmpty = function(s) {
  const t = this.getPlugin("clipboard");
  return t ? t.isEmpty(s) : !0;
};
E.prototype.getCellsInClipboard = function() {
  const s = this.getPlugin("clipboard");
  return s ? s.getCellsInClipboard() : [];
};
E.prototype.cleanClipboard = function() {
  const s = this.getPlugin("clipboard");
  return s && s.clean(), this;
};
E.prototype.copy = function(s, t) {
  const e = this.getPlugin("clipboard");
  return e && e.copy(s, t), this;
};
E.prototype.cut = function(s, t) {
  const e = this.getPlugin("clipboard");
  return e && e.cut(s, t), this;
};
E.prototype.paste = function(s, t) {
  const e = this.getPlugin("clipboard");
  return e ? e.paste(s, t) : [];
};
class fd extends Gt {
  get disabled() {
    return this.options.enabled !== !0;
  }
  get cells() {
    return this.clipboardImpl.cells;
  }
  constructor(t = {}) {
    super(), this.name = "clipboard", this.options = Object.assign({ enabled: !0 }, t);
  }
  init(t) {
    this.graph = t, this.clipboardImpl = new ZE(), this.clipboardImpl.deserialize(this.options);
  }
  // #region api
  isEnabled() {
    return !this.disabled;
  }
  enable() {
    this.disabled && (this.options.enabled = !0);
  }
  disable() {
    this.disabled || (this.options.enabled = !1);
  }
  toggleEnabled(t) {
    return t === void 0 && (t = !this.isEnabled()), t ? this.enable() : this.disable(), this;
  }
  isEmpty(t = {}) {
    return this.clipboardImpl.isEmpty(t);
  }
  getCellsInClipboard() {
    return this.cells;
  }
  clean(t) {
    return (!this.disabled || t) && (this.clipboardImpl.clean(), this.notify("clipboard:changed", { cells: [] })), this;
  }
  copy(t, e = {}) {
    return this.disabled || (this.clipboardImpl.copy(t, this.graph, Object.assign(Object.assign({}, this.commonOptions), e)), this.notify("clipboard:changed", { cells: t })), this;
  }
  cut(t, e = {}) {
    return this.disabled || (this.clipboardImpl.cut(t, this.graph, Object.assign(Object.assign({}, this.commonOptions), e)), this.notify("clipboard:changed", { cells: t })), this;
  }
  paste(t = {}, e = this.graph) {
    return this.disabled ? [] : this.clipboardImpl.paste(e, Object.assign(Object.assign({}, this.commonOptions), t));
  }
  // #endregion
  get commonOptions() {
    const t = this.options, { enabled: e } = t;
    return G(t, ["enabled"]);
  }
  notify(t, e) {
    this.trigger(t, e), this.graph.trigger(t, e);
  }
  dispose() {
    this.clean(!0), this.off();
  }
}
$([
  _()
], fd.prototype, "dispose", null);
function Ol(s, t) {
  var e = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(s);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(s, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function Rl(s) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ol(Object(e), !0).forEach(function(n) {
      tS(s, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e)) : Ol(Object(e)).forEach(function(n) {
      Object.defineProperty(s, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return s;
}
function Zo(s) {
  "@babel/helpers - typeof";
  return Zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zo(s);
}
function tS(s, t, e) {
  return t in s ? Object.defineProperty(s, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[t] = e, s;
}
var Wn, eS = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Ss() {
  if (Wn !== void 0)
    return Wn;
  Wn = "";
  var s = document.createElement("p").style, t = "Transform";
  for (var e in eS)
    e + t in s && (Wn = e);
  return Wn;
}
function pd() {
  return Ss() ? "".concat(Ss(), "TransitionProperty") : "transitionProperty";
}
function _s() {
  return Ss() ? "".concat(Ss(), "Transform") : "transform";
}
function Dl(s, t) {
  var e = pd();
  e && (s.style[e] = t, e !== "transitionProperty" && (s.style.transitionProperty = t));
}
function po(s, t) {
  var e = _s();
  e && (s.style[e] = t, e !== "transform" && (s.style.transform = t));
}
function nS(s) {
  return s.style.transitionProperty || s.style[pd()];
}
function iS(s) {
  var t = window.getComputedStyle(s, null), e = t.getPropertyValue("transform") || t.getPropertyValue(_s());
  if (e && e !== "none") {
    var n = e.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(n[12] || n[4], 0),
      y: parseFloat(n[13] || n[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var sS = /matrix\((.*)\)/, oS = /matrix3d\((.*)\)/;
function rS(s, t) {
  var e = window.getComputedStyle(s, null), n = e.getPropertyValue("transform") || e.getPropertyValue(_s());
  if (n && n !== "none") {
    var i, o = n.match(sS);
    if (o)
      o = o[1], i = o.split(",").map(function(a) {
        return parseFloat(a, 10);
      }), i[4] = t.x, i[5] = t.y, po(s, "matrix(".concat(i.join(","), ")"));
    else {
      var r = n.match(oS)[1];
      i = r.split(",").map(function(a) {
        return parseFloat(a, 10);
      }), i[12] = t.x, i[13] = t.y, po(s, "matrix3d(".concat(i.join(","), ")"));
    }
  } else
    po(s, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var aS = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ji;
function Ql(s) {
  var t = s.style.display;
  s.style.display = "none", s.offsetHeight, s.style.display = t;
}
function Sn(s, t, e) {
  var n = e;
  if (Zo(t) === "object") {
    for (var i in t)
      t.hasOwnProperty(i) && Sn(s, i, t[i]);
    return;
  }
  if (typeof n < "u") {
    typeof n == "number" && (n = "".concat(n, "px")), s.style[t] = n;
    return;
  }
  return ji(s, t);
}
function lS(s) {
  var t, e, n, i = s.ownerDocument, o = i.body, r = i && i.documentElement;
  return t = s.getBoundingClientRect(), e = Math.floor(t.left), n = Math.floor(t.top), e -= r.clientLeft || o.clientLeft || 0, n -= r.clientTop || o.clientTop || 0, {
    left: e,
    top: n
  };
}
function md(s, t) {
  var e = s["page".concat(t ? "Y" : "X", "Offset")], n = "scroll".concat(t ? "Top" : "Left");
  if (typeof e != "number") {
    var i = s.document;
    e = i.documentElement[n], typeof e != "number" && (e = i.body[n]);
  }
  return e;
}
function bd(s) {
  return md(s);
}
function yd(s) {
  return md(s, !0);
}
function Ii(s) {
  var t = lS(s), e = s.ownerDocument, n = e.defaultView || e.parentWindow;
  return t.left += bd(n), t.top += yd(n), t;
}
function qr(s) {
  return s != null && s == s.window;
}
function Cd(s) {
  return qr(s) ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
}
function cS(s, t, e) {
  var n = e, i = "", o = Cd(s);
  return n = n || o.defaultView.getComputedStyle(s, null), n && (i = n.getPropertyValue(t) || n[t]), i;
}
var hS = new RegExp("^(".concat(aS, ")(?!px)[a-z%]+$"), "i"), uS = /^(top|right|bottom|left)$/, mo = "currentStyle", bo = "runtimeStyle", _e = "left", dS = "px";
function gS(s, t) {
  var e = s[mo] && s[mo][t];
  if (hS.test(e) && !uS.test(t)) {
    var n = s.style, i = n[_e], o = s[bo][_e];
    s[bo][_e] = s[mo][_e], n[_e] = t === "fontSize" ? "1em" : e || 0, e = n.pixelLeft + dS, n[_e] = i, s[bo][_e] = o;
  }
  return e === "" ? "auto" : e;
}
typeof window < "u" && (ji = window.getComputedStyle ? cS : gS);
function ns(s, t) {
  return s === "left" ? t.useCssRight ? "right" : s : t.useCssBottom ? "bottom" : s;
}
function Nl(s) {
  if (s === "left")
    return "right";
  if (s === "right")
    return "left";
  if (s === "top")
    return "bottom";
  if (s === "bottom")
    return "top";
}
function Ll(s, t, e) {
  Sn(s, "position") === "static" && (s.style.position = "relative");
  var n = -999, i = -999, o = ns("left", e), r = ns("top", e), a = Nl(o), l = Nl(r);
  o !== "left" && (n = 999), r !== "top" && (i = 999);
  var c = "", h = Ii(s);
  ("left" in t || "top" in t) && (c = nS(s) || "", Dl(s, "none")), "left" in t && (s.style[a] = "", s.style[o] = "".concat(n, "px")), "top" in t && (s.style[l] = "", s.style[r] = "".concat(i, "px")), Ql(s);
  var u = Ii(s), d = {};
  for (var g in t)
    if (t.hasOwnProperty(g)) {
      var f = ns(g, e), p = g === "left" ? n : i, m = h[g] - u[g];
      f === g ? d[f] = p + m : d[f] = p - m;
    }
  Sn(s, d), Ql(s), ("left" in t || "top" in t) && Dl(s, c);
  var b = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var A = ns(y, e), w = t[y] - h[y];
      y === A ? b[A] = d[A] + w : b[A] = d[A] - w;
    }
  Sn(s, b);
}
function fS(s, t) {
  var e = Ii(s), n = iS(s), i = {
    x: n.x,
    y: n.y
  };
  "left" in t && (i.x = n.x + t.left - e.left), "top" in t && (i.y = n.y + t.top - e.top), rS(s, i);
}
function pS(s, t, e) {
  if (e.ignoreShake) {
    var n = Ii(s), i = n.left.toFixed(0), o = n.top.toFixed(0), r = t.left.toFixed(0), a = t.top.toFixed(0);
    if (i === r && o === a)
      return;
  }
  e.useCssRight || e.useCssBottom ? Ll(s, t, e) : e.useCssTransform && _s() in document.body.style ? fS(s, t) : Ll(s, t, e);
}
function Xr(s, t) {
  for (var e = 0; e < s.length; e++)
    t(s[e]);
}
function Ad(s) {
  return ji(s, "boxSizing") === "border-box";
}
var mS = ["margin", "border", "padding"], tr = -1, bS = 2, er = 1, yS = 0;
function CS(s, t, e) {
  var n = {}, i = s.style, o;
  for (o in t)
    t.hasOwnProperty(o) && (n[o] = i[o], i[o] = t[o]);
  e.call(s);
  for (o in t)
    t.hasOwnProperty(o) && (i[o] = n[o]);
}
function Xn(s, t, e) {
  var n = 0, i, o, r;
  for (o = 0; o < t.length; o++)
    if (i = t[o], i)
      for (r = 0; r < e.length; r++) {
        var a = void 0;
        i === "border" ? a = "".concat(i).concat(e[r], "Width") : a = i + e[r], n += parseFloat(ji(s, a)) || 0;
      }
  return n;
}
var Ae = {
  getParent: function(t) {
    var e = t;
    do
      e.nodeType === 11 && e.host ? e = e.host : e = e.parentNode;
    while (e && e.nodeType !== 1 && e.nodeType !== 9);
    return e;
  }
};
Xr(["Width", "Height"], function(s) {
  Ae["doc".concat(s)] = function(t) {
    var e = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      e.documentElement["scroll".concat(s)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      e.body["scroll".concat(s)],
      Ae["viewport".concat(s)](e)
    );
  }, Ae["viewport".concat(s)] = function(t) {
    var e = "client".concat(s), n = t.document, i = n.body, o = n.documentElement, r = o[e];
    return n.compatMode === "CSS1Compat" && r || i && i[e] || r;
  };
});
function Fl(s, t, e) {
  var n = e;
  if (qr(s))
    return t === "width" ? Ae.viewportWidth(s) : Ae.viewportHeight(s);
  if (s.nodeType === 9)
    return t === "width" ? Ae.docWidth(s) : Ae.docHeight(s);
  var i = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], o = Math.floor(t === "width" ? s.getBoundingClientRect().width : s.getBoundingClientRect().height), r = Ad(s), a = 0;
  (o == null || o <= 0) && (o = void 0, a = ji(s, t), (a == null || Number(a) < 0) && (a = s.style[t] || 0), a = Math.floor(parseFloat(a)) || 0), n === void 0 && (n = r ? er : tr);
  var l = o !== void 0 || r, c = o || a;
  return n === tr ? l ? c - Xn(s, ["border", "padding"], i) : a : l ? n === er ? c : c + (n === bS ? -Xn(s, ["border"], i) : Xn(s, ["margin"], i)) : a + Xn(s, mS.slice(n), i);
}
var AS = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function zl() {
  for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
    t[e] = arguments[e];
  var n, i = t[0];
  return i.offsetWidth !== 0 ? n = Fl.apply(void 0, t) : CS(i, AS, function() {
    n = Fl.apply(void 0, t);
  }), n;
}
Xr(["width", "height"], function(s) {
  var t = s.charAt(0).toUpperCase() + s.slice(1);
  Ae["outer".concat(t)] = function(n, i) {
    return n && zl(n, s, i ? yS : er);
  };
  var e = s === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Ae[s] = function(n, i) {
    var o = i;
    if (o !== void 0) {
      if (n) {
        var r = Ad(n);
        return r && (o += Xn(n, ["padding", "border"], e)), Sn(n, s, o);
      }
      return;
    }
    return n && zl(n, s, tr);
  };
});
function wd(s, t) {
  for (var e in t)
    t.hasOwnProperty(e) && (s[e] = t[e]);
  return s;
}
var j = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var e = t.ownerDocument || t;
    return e.defaultView || e.parentWindow;
  },
  getDocument: Cd,
  offset: function(t, e, n) {
    if (typeof e < "u")
      pS(t, e, n || {});
    else
      return Ii(t);
  },
  isWindow: qr,
  each: Xr,
  css: Sn,
  clone: function(t) {
    var e, n = {};
    for (e in t)
      t.hasOwnProperty(e) && (n[e] = t[e]);
    var i = t.overflow;
    if (i)
      for (e in t)
        t.hasOwnProperty(e) && (n.overflow[e] = t.overflow[e]);
    return n;
  },
  mix: wd,
  getWindowScrollLeft: function(t) {
    return bd(t);
  },
  getWindowScrollTop: function(t) {
    return yd(t);
  },
  merge: function() {
    for (var t = {}, e = 0; e < arguments.length; e++)
      j.mix(t, e < 0 || arguments.length <= e ? void 0 : arguments[e]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
wd(j, Ae);
var yo = j.getParent;
function Ul(s) {
  if (j.isWindow(s) || s.nodeType === 9)
    return null;
  var t = j.getDocument(s), e = t.body, n, i = j.css(s, "position"), o = i === "fixed" || i === "absolute";
  if (!o)
    return s.nodeName.toLowerCase() === "html" ? null : yo(s);
  for (n = yo(s); n && n !== e && n.nodeType !== 9; n = yo(n))
    if (i = j.css(n, "position"), i !== "static")
      return n;
  return null;
}
var Kl = j.getParent;
function wS(s) {
  if (j.isWindow(s) || s.nodeType === 9)
    return !1;
  var t = j.getDocument(s), e = t.body, n = null;
  for (
    n = Kl(s);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    n && n !== e && n !== t;
    n = Kl(n)
  ) {
    var i = j.css(n, "position");
    if (i === "fixed")
      return !0;
  }
  return !1;
}
function vS(s, t) {
  for (var e = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, n = Ul(s), i = j.getDocument(s), o = i.defaultView || i.parentWindow, r = i.body, a = i.documentElement; n; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || n.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    n !== r && n !== a && j.css(n, "overflow") !== "visible") {
      var l = j.offset(n);
      l.left += n.clientLeft, l.top += n.clientTop, e.top = Math.max(e.top, l.top), e.right = Math.min(
        e.right,
        // consider area without scrollBar
        l.left + n.clientWidth
      ), e.bottom = Math.min(e.bottom, l.top + n.clientHeight), e.left = Math.max(e.left, l.left);
    } else if (n === r || n === a)
      break;
    n = Ul(n);
  }
  var c = null;
  if (!j.isWindow(s) && s.nodeType !== 9) {
    c = s.style.position;
    var h = j.css(s, "position");
    h === "absolute" && (s.style.position = "fixed");
  }
  var u = j.getWindowScrollLeft(o), d = j.getWindowScrollTop(o), g = j.viewportWidth(o), f = j.viewportHeight(o), p = a.scrollWidth, m = a.scrollHeight, b = window.getComputedStyle(r);
  if (b.overflowX === "hidden" && (p = o.innerWidth), b.overflowY === "hidden" && (m = o.innerHeight), s.style && (s.style.position = c), t || wS(s))
    e.left = Math.max(e.left, u), e.top = Math.max(e.top, d), e.right = Math.min(e.right, u + g), e.bottom = Math.min(e.bottom, d + f);
  else {
    var y = Math.max(p, u + g);
    e.right = Math.min(e.right, y);
    var A = Math.max(m, d + f);
    e.bottom = Math.min(e.bottom, A);
  }
  return e.top >= 0 && e.left >= 0 && e.bottom > e.top && e.right > e.left ? e : null;
}
function xS(s, t, e, n) {
  var i = j.clone(s), o = {
    width: t.width,
    height: t.height
  };
  return n.adjustX && i.left < e.left && (i.left = e.left), n.resizeWidth && i.left >= e.left && i.left + o.width > e.right && (o.width -= i.left + o.width - e.right), n.adjustX && i.left + o.width > e.right && (i.left = Math.max(e.right - o.width, e.left)), n.adjustY && i.top < e.top && (i.top = e.top), n.resizeHeight && i.top >= e.top && i.top + o.height > e.bottom && (o.height -= i.top + o.height - e.bottom), n.adjustY && i.top + o.height > e.bottom && (i.top = Math.max(e.bottom - o.height, e.top)), j.mix(i, o);
}
function ES(s) {
  var t, e, n;
  if (!j.isWindow(s) && s.nodeType !== 9)
    t = j.offset(s), e = j.outerWidth(s), n = j.outerHeight(s);
  else {
    var i = j.getWindow(s);
    t = {
      left: j.getWindowScrollLeft(i),
      top: j.getWindowScrollTop(i)
    }, e = j.viewportWidth(i), n = j.viewportHeight(i);
  }
  return t.width = e, t.height = n, t;
}
function Jl(s, t) {
  var e = t.charAt(0), n = t.charAt(1), i = s.width, o = s.height, r = s.left, a = s.top;
  return e === "c" ? a += o / 2 : e === "b" && (a += o), n === "c" ? r += i / 2 : n === "r" && (r += i), {
    left: r,
    top: a
  };
}
function is(s, t, e, n, i) {
  var o = Jl(t, e[1]), r = Jl(s, e[0]), a = [r.left - o.left, r.top - o.top];
  return {
    left: Math.round(s.left - a[0] + n[0] - i[0]),
    top: Math.round(s.top - a[1] + n[1] - i[1])
  };
}
function jl(s, t, e) {
  return s.left < e.left || s.left + t.width > e.right;
}
function Gl(s, t, e) {
  return s.top < e.top || s.top + t.height > e.bottom;
}
function SS(s, t, e) {
  return s.left > e.right || s.left + t.width < e.left;
}
function MS(s, t, e) {
  return s.top > e.bottom || s.top + t.height < e.top;
}
function ss(s, t, e) {
  var n = [];
  return j.each(s, function(i) {
    n.push(i.replace(t, function(o) {
      return e[o];
    }));
  }), n;
}
function os(s, t) {
  return s[t] = -s[t], s;
}
function Vl(s, t) {
  var e;
  return /%$/.test(s) ? e = parseInt(s.substring(0, s.length - 1), 10) / 100 * t : e = parseInt(s, 10), e || 0;
}
function Yl(s, t) {
  s[0] = Vl(s[0], t.width), s[1] = Vl(s[1], t.height);
}
function BS(s, t, e, n) {
  var i = e.points, o = e.offset || [0, 0], r = e.targetOffset || [0, 0], a = e.overflow, l = e.source || s;
  o = [].concat(o), r = [].concat(r), a = a || {};
  var c = {}, h = 0, u = !!(a && a.alwaysByViewport), d = vS(l, u), g = ES(l);
  Yl(o, g), Yl(r, t);
  var f = is(g, t, i, o, r), p = j.merge(g, f);
  if (d && (a.adjustX || a.adjustY) && n) {
    if (a.adjustX && jl(f, g, d)) {
      var m = ss(i, /[lr]/gi, {
        l: "r",
        r: "l"
      }), b = os(o, 0), y = os(r, 0), A = is(g, t, m, b, y);
      SS(A, g, d) || (h = 1, i = m, o = b, r = y);
    }
    if (a.adjustY && Gl(f, g, d)) {
      var w = ss(i, /[tb]/gi, {
        t: "b",
        b: "t"
      }), x = os(o, 1), M = os(r, 1), v = is(g, t, w, x, M);
      MS(v, g, d) || (h = 1, i = w, o = x, r = M);
    }
    h && (f = is(g, t, i, o, r), j.mix(p, f));
    var S = jl(f, g, d), B = Gl(f, g, d);
    if (S || B) {
      var P = i;
      S && (P = ss(i, /[lr]/gi, {
        l: "r",
        r: "l"
      })), B && (P = ss(i, /[tb]/gi, {
        t: "b",
        b: "t"
      })), i = P, o = e.offset || [0, 0], r = e.targetOffset || [0, 0];
    }
    c.adjustX = a.adjustX && S, c.adjustY = a.adjustY && B, (c.adjustX || c.adjustY) && (p = xS(f, g, d, c));
  }
  return p.width !== g.width && j.css(l, "width", j.width(l) + p.width - g.width), p.height !== g.height && j.css(l, "height", j.height(l) + p.height - g.height), j.offset(l, {
    left: p.left,
    top: p.top
  }, {
    useCssRight: e.useCssRight,
    useCssBottom: e.useCssBottom,
    useCssTransform: e.useCssTransform,
    ignoreShake: e.ignoreShake
  }), {
    points: i,
    offset: o,
    targetOffset: r,
    overflow: c
  };
}
function IS(s, t, e) {
  var n, i, o = j.getDocument(s), r = o.defaultView || o.parentWindow, a = j.getWindowScrollLeft(r), l = j.getWindowScrollTop(r), c = j.viewportWidth(r), h = j.viewportHeight(r);
  "pageX" in t ? n = t.pageX : n = a + t.clientX, "pageY" in t ? i = t.pageY : i = l + t.clientY;
  var u = {
    left: n,
    top: i,
    width: 0,
    height: 0
  }, d = n >= 0 && n <= a + c && i >= 0 && i <= l + h, g = [e.points[0], "cc"];
  return BS(s, u, Rl(Rl({}, e), {}, {
    points: g
  }), d);
}
const PS = `.x6-widget-dnd {
  position: absolute;
  top: -10000px;
  left: -10000px;
  z-index: 999999;
  display: none;
  cursor: move;
  opacity: 0.7;
}
.x6-widget-dnd.dragging {
  display: inline-block;
}
.x6-widget-dnd.dragging * {
  pointer-events: none !important;
}
.x6-widget-dnd .x6-graph {
  background: transparent;
  box-shadow: none;
}
`, vd = {
  // animation: false,
  getDragNode: (s) => s.clone(),
  getDropNode: (s) => s.clone()
};
class $r extends Yt {
  get targetScroller() {
    return this.options.target.getPlugin("scroller");
  }
  get targetGraph() {
    return this.options.target;
  }
  get targetModel() {
    return this.targetGraph.model;
  }
  get snapline() {
    return this.options.target.getPlugin("snapline");
  }
  constructor(t) {
    super(), this.name = "dnd", this.options = Object.assign(Object.assign({}, vd), t), this.init();
  }
  init() {
    We(this.name, PS), this.container = document.createElement("div"), k(this.container, this.prefixClassName("widget-dnd")), this.draggingGraph = new E(Object.assign(Object.assign({}, this.options.delegateGraphOptions), { container: document.createElement("div"), width: 1, height: 1, async: !1 })), Rt(this.container, this.draggingGraph.container);
  }
  start(t, e) {
    var n;
    const i = e;
    i.preventDefault(), this.targetModel.startBatch("dnd"), k(this.container, "dragging"), ne(this.container, this.options.draggingContainer || document.body), this.sourceNode = t, this.prepareDragging(t, i.clientX, i.clientY);
    const o = this.updateNodePosition(i.clientX, i.clientY);
    this.isSnaplineEnabled() && (this.snapline.captureCursorOffset({
      e: i,
      node: t,
      cell: t,
      view: this.draggingView,
      x: o.x,
      y: o.y
    }), (n = this.draggingNode) === null || n === void 0 || n.on("change:position", this.snap, this)), this.delegateDocumentEvents(id, i.data);
  }
  isSnaplineEnabled() {
    var t;
    return (t = this.snapline) === null || t === void 0 ? void 0 : t.isEnabled();
  }
  prepareDragging(t, e, n) {
    const i = this.draggingGraph, o = i.model, r = this.options.getDragNode(t, {
      sourceNode: t,
      draggingGraph: i,
      targetGraph: this.targetGraph
    });
    r.position(0, 0);
    let a = 5;
    if (this.isSnaplineEnabled() && (a += this.snapline.options.tolerance || 0), this.isSnaplineEnabled() || this.options.scaled) {
      const h = this.targetGraph.transform.getScale();
      i.scale(h.sx, h.sy), a *= Math.max(h.sx, h.sy);
    } else
      i.scale(1, 1);
    this.clearDragging(), o.resetCells([r]);
    const l = i.findViewByCell(r);
    l.undelegateEvents(), l.cell.off("changed"), i.fitToContent({
      padding: a,
      allowNewOrigin: "any",
      useCellGeometry: !1
    });
    const c = l.getBBox();
    this.geometryBBox = l.getBBox({ useCellGeometry: !0 }), this.delta = this.geometryBBox.getTopLeft().diff(c.getTopLeft()), this.draggingNode = r, this.draggingView = l, this.draggingBBox = r.getBBox(), this.padding = a, this.updateGraphPosition(e, n);
  }
  updateGraphPosition(t, e) {
    const n = this.delta, i = this.geometryBBox, o = this.padding || 5, r = {
      left: t - n.x - i.width / 2 - o,
      top: e - n.y - i.height / 2 - o
    };
    this.draggingGraph && IS(this.container, {
      clientX: r.left,
      clientY: r.top
    }, {
      points: ["tl"]
    });
  }
  updateNodePosition(t, e) {
    const n = this.targetGraph.clientToLocal(t, e), i = this.draggingBBox;
    return i && (n.x -= i.width / 2, n.y -= i.height / 2, this.draggingNode.position(n.x, n.y)), n;
  }
  snap({ cell: t, current: e, options: n }) {
    const i = t;
    if (n.snapped) {
      const o = this.draggingBBox;
      i.position(o.x + n.tx, o.y + n.ty, { silent: !0 }), this.draggingView.translate(), i.position(e.x, e.y, { silent: !0 }), this.snapOffset = {
        x: n.tx,
        y: n.ty
      };
    } else
      this.snapOffset = null;
  }
  onMouseMove(t) {
    this.onDragging(t);
  }
  onMouseUp(t) {
    this.onDragEnd(t);
  }
  onDragging(t) {
    const e = this.draggingView;
    if (e) {
      t.preventDefault();
      const n = this.normalizeEvent(t), i = n.clientX, o = n.clientY;
      this.updateGraphPosition(i, o);
      const r = this.updateNodePosition(i, o), a = this.targetGraph.options.embedding.enabled, l = (a || this.isSnaplineEnabled()) && this.isInsideValidArea({
        x: i,
        y: o
      });
      if (a) {
        e.setEventData(n, {
          graph: this.targetGraph,
          candidateEmbedView: this.candidateEmbedView
        });
        const c = e.getEventData(n);
        l ? e.processEmbedding(n, c) : e.clearEmbedding(c), this.candidateEmbedView = c.candidateEmbedView;
      }
      this.isSnaplineEnabled() && (l ? this.snapline.snapOnMoving({
        e: n,
        view: e,
        x: r.x,
        y: r.y
      }) : this.snapline.hide());
    }
  }
  onDragEnd(t) {
    const e = this.draggingNode;
    if (e) {
      const n = this.normalizeEvent(t), i = this.draggingView, o = this.draggingBBox, r = this.snapOffset;
      let a = o.x, l = o.y;
      r && (a += r.x, l += r.y), e.position(a, l, { silent: !0 });
      const c = this.drop(e, { x: n.clientX, y: n.clientY }), h = (u) => {
        u ? (this.onDropped(e), this.targetGraph.options.embedding.enabled && i && (i.setEventData(n, {
          cell: u,
          graph: this.targetGraph,
          candidateEmbedView: this.candidateEmbedView
        }), i.finalizeEmbedding(n, i.getEventData(n)))) : this.onDropInvalid(), this.candidateEmbedView = null, this.targetModel.stopBatch("dnd");
      };
      Qo(c) ? (this.undelegateDocumentEvents(), c.then(h)) : h(c);
    }
  }
  clearDragging() {
    this.draggingNode && (this.sourceNode = null, this.draggingNode.remove(), this.draggingNode = null, this.draggingView = null, this.delta = null, this.padding = null, this.snapOffset = null, this.undelegateDocumentEvents());
  }
  onDropped(t) {
    this.draggingNode === t && (this.clearDragging(), ut(this.container, "dragging"), ee(this.container));
  }
  onDropInvalid() {
    const t = this.draggingNode;
    t && this.onDropped(t);
  }
  isInsideValidArea(t) {
    let e, n = null;
    const i = this.targetGraph, o = this.targetScroller;
    this.options.dndContainer && (n = this.getDropArea(this.options.dndContainer));
    const r = n == null ? void 0 : n.containsPoint(t);
    if (o)
      if (o.options.autoResize)
        e = this.getDropArea(o.container);
      else {
        const a = this.getDropArea(o.container);
        e = this.getDropArea(i.container).intersectsWithRect(a);
      }
    else
      e = this.getDropArea(i.container);
    return !r && e && e.containsPoint(t);
  }
  getDropArea(t) {
    const e = Dn(t), n = document.body.scrollTop || document.documentElement.scrollTop, i = document.body.scrollLeft || document.documentElement.scrollLeft;
    return I.create({
      x: e.left + parseInt(st(t, "border-left-width"), 10) - i,
      y: e.top + parseInt(st(t, "border-top-width"), 10) - n,
      width: t.clientWidth,
      height: t.clientHeight
    });
  }
  drop(t, e) {
    if (this.isInsideValidArea(e)) {
      const n = this.targetGraph, i = n.model, o = n.clientToLocal(e), r = this.sourceNode, a = this.options.getDropNode(t, {
        sourceNode: r,
        draggingNode: t,
        targetGraph: this.targetGraph,
        draggingGraph: this.draggingGraph
      }), l = a.getBBox();
      o.x += l.x - l.width / 2, o.y += l.y - l.height / 2;
      const c = this.snapOffset ? 1 : n.getGridSize();
      a.position(ue(o.x, c), ue(o.y, c)), a.removeZIndex();
      const h = this.options.validateNode, u = h ? h(a, {
        sourceNode: r,
        draggingNode: t,
        droppingNode: a,
        targetGraph: n,
        draggingGraph: this.draggingGraph
      }) : !0;
      return typeof u == "boolean" ? u ? (i.addCell(a, { stencil: this.cid }), a) : null : OC(u).then((d) => d ? (i.addCell(a, { stencil: this.cid }), a) : null);
    }
    return null;
  }
  onRemove() {
    this.draggingGraph && (this.draggingGraph.view.remove(), this.draggingGraph.dispose());
  }
  dispose() {
    this.remove(), qe(this.name);
  }
}
$([
  _()
], $r.prototype, "dispose", null);
E.prototype.toSVG = function(s, t) {
  const e = this.getPlugin("export");
  e && e.toSVG(s, t);
};
E.prototype.toSVGAsync = function(s) {
  return rr(this, void 0, void 0, function* () {
    return new Promise((t) => {
      this.toSVG(t, s);
    });
  });
};
E.prototype.toPNG = function(s, t) {
  const e = this.getPlugin("export");
  e && e.toPNG(s, t);
};
E.prototype.toPNGAsync = function(s) {
  return rr(this, void 0, void 0, function* () {
    return new Promise((t) => {
      this.toPNG(t, s);
    });
  });
};
E.prototype.toJPEG = function(s, t) {
  const e = this.getPlugin("export");
  e && e.toJPEG(s, t);
};
E.prototype.toJPEGAsync = function(s) {
  return rr(this, void 0, void 0, function* () {
    return new Promise((t) => {
      this.toJPEG(t, s);
    });
  });
};
E.prototype.exportPNG = function(s, t) {
  const e = this.getPlugin("export");
  e && e.exportPNG(s, t);
};
E.prototype.exportJPEG = function(s, t) {
  const e = this.getPlugin("export");
  e && e.exportJPEG(s, t);
};
E.prototype.exportSVG = function(s, t) {
  const e = this.getPlugin("export");
  e && e.exportSVG(s, t);
};
class TS extends Gt {
  constructor() {
    super(...arguments), this.name = "export";
  }
  get view() {
    return this.graph.view;
  }
  init(t) {
    this.graph = t;
  }
  exportPNG(t = "chart", e = {}) {
    this.toPNG((n) => {
      so(n, t);
    }, e);
  }
  exportJPEG(t = "chart", e = {}) {
    this.toJPEG((n) => {
      so(n, t);
    }, e);
  }
  exportSVG(t = "chart", e = {}) {
    this.toSVG((n) => {
      so(TC(n), t);
    }, e);
  }
  toSVG(t, e = {}) {
    this.notify("before:export", e), Object.hasOwn(e, "copyStyles") || (e.copyStyles = !0), Object.hasOwn(e, "serializeImages") || (e.serializeImages = !0);
    const n = this.view.svg, i = F.create(n).clone();
    let o = i.node;
    const r = i.findOne(`.${this.view.prefixClassName("graph-svg-stage")}`), a = e.viewBox || this.graph.graphToLocal(this.graph.getContentBBox()), l = e.preserveDimensions;
    if (l) {
      const u = typeof l == "boolean" ? a : l;
      i.attr({
        width: u.width,
        height: u.height
      });
    }
    if (i.removeAttribute("style").attr("viewBox", [a.x, a.y, a.width, a.height].join(" ")), r.removeAttribute("transform"), e.copyStyles) {
      const u = n.ownerDocument, d = Array.from(n.querySelectorAll("*")), g = Array.from(o.querySelectorAll("*")), f = u.implementation.createHTMLDocument("x6-export-defaults"), p = f.importNode(n, !0);
      f.body.appendChild(p);
      const m = Array.from(p.querySelectorAll("*")), b = {};
      m.forEach((A, w) => {
        const x = window.getComputedStyle(A, null), M = {};
        for (let v = 0; v < x.length; v += 1) {
          const S = x[v], B = x.getPropertyValue(S);
          M[S] = B;
        }
        b[w] = M;
      });
      const y = {};
      d.forEach((A, w) => {
        const x = window.getComputedStyle(A, null), M = b[w] || {}, v = {};
        for (let S = 0; S < x.length; S += 1) {
          const B = x[S], P = x.getPropertyValue(B);
          P !== M[B] && (v[B] = P);
        }
        y[w] = v;
      }), g.forEach((A, w) => {
        st(A, y[w]);
      });
    }
    const c = e.stylesheet;
    if (typeof c == "string") {
      const u = n.ownerDocument.implementation.createDocument(null, "xml", null).createCDATASection(c);
      i.prepend(F.create("style", {
        type: "text/css"
      }, [u]));
    }
    const h = () => {
      const u = e.beforeSerialize;
      if (typeof u == "function") {
        const g = N(u, this.graph, o);
        g instanceof SVGSVGElement && (o = g);
      }
      const d = new XMLSerializer().serializeToString(o).replace(/&nbsp;/g, " ");
      this.notify("after:export", e), t(d);
    };
    if (e.serializeImages) {
      const u = i.find("image").map((d) => new Promise((g) => {
        const f = d.attr("xlink:href") || d.attr("href");
        BC(f, (p, m) => {
          !p && m && (d.attr("xlink:href", m), d.attr("href", m)), g();
        });
      }));
      Promise.all(u).then(h);
    } else
      h();
  }
  toDataURL(t, e) {
    let n = e.viewBox || this.graph.getContentBBox();
    const i = he(e.padding);
    e.width && e.height && (i.left + i.right >= e.width && (i.left = i.right = 0), i.top + i.bottom >= e.height && (i.top = i.bottom = 0));
    const o = new I(-i.left, -i.top, i.left + i.right, i.top + i.bottom);
    if (e.width && e.height) {
      const h = n.width + i.left + i.right, u = n.height + i.top + i.bottom;
      o.scale(h / e.width, u / e.height);
    }
    n = I.create(n).moveAndExpand(o);
    const r = typeof e.width == "number" && typeof e.height == "number" ? { width: e.width, height: e.height } : n;
    let a = e.ratio ? e.ratio : 1;
    (!Number.isFinite(a) || a === 0) && (a = 1);
    const l = {
      width: Math.max(Math.round(r.width * a), 1),
      height: Math.max(Math.round(r.height * a), 1)
    };
    {
      const h = document.createElement("canvas"), u = h.getContext("2d");
      h.width = l.width, h.height = l.height;
      const d = l.width - 1, g = l.height - 1;
      u.fillStyle = "rgb(1,1,1)", u.fillRect(d, g, 1, 1);
      const f = u.getImageData(d, g, 1, 1).data;
      if (f[0] !== 1 || f[1] !== 1 || f[2] !== 1)
        throw new Error("size exceeded");
    }
    const c = new Image();
    c.onload = () => {
      const h = document.createElement("canvas");
      h.width = l.width, h.height = l.height;
      const u = h.getContext("2d");
      u.fillStyle = e.backgroundColor || "white", u.fillRect(0, 0, l.width, l.height);
      try {
        u.drawImage(c, 0, 0, l.width, l.height);
        const d = h.toDataURL(e.type, e.quality);
        t(d);
      } catch {
      }
    }, this.toSVG((h) => {
      c.src = `data:image/svg+xml,${encodeURIComponent(h)}`;
    }, Object.assign(Object.assign({}, e), { viewBox: n, serializeImages: !0, preserveDimensions: Object.assign({}, l) }));
  }
  toPNG(t, e = {}) {
    this.toDataURL(t, Object.assign(Object.assign({}, e), { type: "image/png" }));
  }
  toJPEG(t, e = {}) {
    this.toDataURL(t, Object.assign(Object.assign({}, e), { type: "image/jpeg" }));
  }
  notify(t, e) {
    this.trigger(t, e), this.graph.trigger(t, e);
  }
  dispose() {
    this.off();
  }
}
$([
  _()
], TS.prototype, "dispose", null);
function Le(s) {
  return s === "cell:added";
}
function Ze(s) {
  return s === "cell:removed";
}
function $n(s) {
  return s != null && s.startsWith("cell:change:");
}
function kS(s) {
  const t = [
    "cell:added",
    "cell:removed",
    "cell:change:*"
  ], e = ["batch:start", "batch:stop"], n = s.eventNames ? s.eventNames.filter((i) => !($n(i) || t.includes(i) || e.includes(i))) : t;
  return Object.assign(Object.assign({ enabled: !0 }, s), { eventNames: n, applyOptionsList: s.applyOptionsList || ["propertyPath"], revertOptionsList: s.revertOptionsList || ["propertyPath"] });
}
function Hl(s) {
  const t = [];
  for (let e = 0, n = s.length; e < n; e += 1) {
    const i = s[e];
    let o = null;
    if (Le(i.event)) {
      const r = i.data.id;
      for (let a = 0; a < e; a += 1)
        if (s[a].data.id === r) {
          o = a;
          break;
        }
    }
    o !== null ? t.splice(o, 0, i) : t.push(i);
  }
  return t;
}
class xd extends Gt {
  constructor(t) {
    super(), this.map = {}, this.command = t.history, this.cancelInvalid = t.cancelInvalid !== !1, this.command.on("add", this.onCommandAdded, this);
  }
  onCommandAdded({ cmds: t }) {
    return Array.isArray(t) ? t.every((e) => this.isValidCommand(e)) : this.isValidCommand(t);
  }
  isValidCommand(t) {
    if (t.options && t.options.validation === !1)
      return !0;
    const e = t.event && this.map[t.event] || [];
    let n = null;
    return e.forEach((i) => {
      let o = 0;
      const r = (a) => {
        const l = i[o];
        o += 1;
        try {
          l ? l(a, t, r) : n = a;
        } catch (c) {
          r(c);
        }
      };
      r(n);
    }), n ? (this.cancelInvalid && this.command.cancel(), this.emit("invalid", { err: n }), !1) : !0;
  }
  validate(t, ...e) {
    const n = Array.isArray(t) ? t : t.split(/\s+/);
    return e.forEach((i) => {
      if (typeof i != "function")
        throw new Error(`${n.join(" ")} requires callback functions.`);
    }), n.forEach((i) => {
      this.map[i] == null && (this.map[i] = []), this.map[i].push(e);
    }), this;
  }
  dispose() {
    this.command.off("add", this.onCommandAdded, this);
  }
}
$([
  _()
], xd.prototype, "dispose", null);
E.prototype.isHistoryEnabled = function() {
  const s = this.getPlugin("history");
  return s ? s.isEnabled() : !1;
};
E.prototype.enableHistory = function() {
  const s = this.getPlugin("history");
  return s && s.enable(), this;
};
E.prototype.disableHistory = function() {
  const s = this.getPlugin("history");
  return s && s.disable(), this;
};
E.prototype.toggleHistory = function(s) {
  const t = this.getPlugin("history");
  return t && t.toggleEnabled(s), this;
};
E.prototype.undo = function(s) {
  const t = this.getPlugin("history");
  return t && t.undo(s), this;
};
E.prototype.redo = function(s) {
  const t = this.getPlugin("history");
  return t && t.redo(s), this;
};
E.prototype.undoAndCancel = function(s) {
  const t = this.getPlugin("history");
  return t && t.cancel(s), this;
};
E.prototype.canUndo = function() {
  const s = this.getPlugin("history");
  return s ? s.canUndo() : !1;
};
E.prototype.canRedo = function() {
  const s = this.getPlugin("history");
  return s ? s.canRedo() : !1;
};
E.prototype.cleanHistory = function(s) {
  const t = this.getPlugin("history");
  return t && t.clean(s), this;
};
E.prototype.getHistoryStackSize = function() {
  return this.getPlugin("history").getSize();
};
E.prototype.getUndoStackSize = function() {
  return this.getPlugin("history").getUndoSize();
};
E.prototype.getRedoStackSize = function() {
  return this.getPlugin("history").getRedoSize();
};
E.prototype.getUndoRemainSize = function() {
  return this.getPlugin("history").getUndoRemainSize();
};
class Ed extends Gt {
  constructor(t = {}) {
    super(), this.name = "history", this.batchCommands = null, this.batchLevel = 0, this.lastBatchIndex = -1, this.freezed = !1, this.stackSize = 0, this.handlers = [];
    const { stackSize: e = 0 } = t;
    this.stackSize = e, this.options = kS(t), this.validator = new xd({
      history: this,
      cancelInvalid: this.options.cancelInvalid
    });
  }
  init(t) {
    this.graph = t, this.model = this.graph.model, this.clean(), this.startListening();
  }
  // #region api
  isEnabled() {
    return !this.disabled;
  }
  enable() {
    this.disabled && (this.options.enabled = !0);
  }
  disable() {
    this.disabled || (this.options.enabled = !1);
  }
  toggleEnabled(t) {
    return t != null ? t !== this.isEnabled() && (t ? this.enable() : this.disable()) : this.isEnabled() ? this.disable() : this.enable(), this;
  }
  undo(t = {}) {
    if (!this.disabled) {
      const e = this.undoStack.pop();
      e && (this.revertCommand(e, t), this.redoStack.push(e), this.notify("undo", e, t));
    }
    return this;
  }
  redo(t = {}) {
    if (!this.disabled) {
      const e = this.redoStack.pop();
      e && (this.applyCommand(e, t), this.undoStackPush(e), this.notify("redo", e, t));
    }
    return this;
  }
  /**
   * Same as `undo()` but does not store the undo-ed command to the
   * `redoStack`. Canceled command therefore cannot be redo-ed.
   */
  cancel(t = {}) {
    if (!this.disabled) {
      const e = this.undoStack.pop();
      e && (this.revertCommand(e, t), this.redoStack = [], this.notify("cancel", e, t));
    }
    return this;
  }
  getSize() {
    return this.stackSize;
  }
  getUndoRemainSize() {
    const t = this.undoStack.length;
    return this.stackSize - t;
  }
  getUndoSize() {
    return this.undoStack.length;
  }
  getRedoSize() {
    return this.redoStack.length;
  }
  canUndo() {
    return !this.disabled && this.undoStack.length > 0;
  }
  canRedo() {
    return !this.disabled && this.redoStack.length > 0;
  }
  clean(t = {}) {
    return this.undoStack = [], this.redoStack = [], this.notify("clean", null, t), this;
  }
  // #endregion
  get disabled() {
    return this.options.enabled !== !0;
  }
  validate(t, ...e) {
    return this.validator.validate(t, ...e), this;
  }
  startListening() {
    this.model.on("batch:start", this.initBatchCommand, this), this.model.on("batch:stop", this.storeBatchCommand, this), this.options.eventNames && this.options.eventNames.forEach((t, e) => {
      this.handlers[e] = this.addCommand.bind(this, t), this.model.on(t, this.handlers[e]);
    }), this.validator.on("invalid", (t) => this.trigger("invalid", t));
  }
  stopListening() {
    this.model.off("batch:start", this.initBatchCommand, this), this.model.off("batch:stop", this.storeBatchCommand, this), this.options.eventNames && (this.options.eventNames.forEach((t, e) => {
      this.model.off(t, this.handlers[e]);
    }), this.handlers.length = 0), this.validator.off("invalid");
  }
  createCommand(t) {
    return {
      batch: t ? t.batch : !1,
      data: {}
    };
  }
  revertCommand(t, e) {
    this.freezed = !0;
    const n = Array.isArray(t) ? Hl(t) : [t];
    for (let i = n.length - 1; i >= 0; i -= 1) {
      const o = n[i], r = Object.assign(Object.assign({}, e), Qa(o.options, this.options.revertOptionsList || []));
      this.executeCommand(o, !0, r);
    }
    this.freezed = !1;
  }
  applyCommand(t, e) {
    this.freezed = !0;
    const n = Array.isArray(t) ? Hl(t) : [t];
    for (let i = 0; i < n.length; i += 1) {
      const o = n[i], r = Object.assign(Object.assign({}, e), Qa(o.options, this.options.applyOptionsList || []));
      this.executeCommand(o, !1, r);
    }
    this.freezed = !1;
  }
  executeCommand(t, e, n) {
    const i = this.model, o = i.getCell(t.data.id), r = t.event;
    if (Le(r) && e || Ze(r) && !e)
      o && o.remove(n);
    else if (Le(r) && !e || Ze(r) && e) {
      const a = t.data;
      a.node ? i.addNode(a.props, n) : a.edge && i.addEdge(a.props, n);
    } else if ($n(r)) {
      const a = t.data, l = a.key;
      if (l && o) {
        const c = e ? a.prev[l] : a.next[l];
        a.key === "attrs" && this.ensureUndefinedAttrs(c, e ? a.next[l] : a.prev[l]) && (n.dirty = !0), o.prop(l, c, n);
      }
    } else {
      const a = this.options.executeCommand;
      a && N(a, this, t, e, n);
    }
  }
  addCommand(t, e) {
    if (this.freezed || this.disabled)
      return;
    const n = e, i = n.options || {};
    if (i.dryrun || Le(t) && this.options.ignoreAdd || Ze(t) && this.options.ignoreRemove || $n(t) && this.options.ignoreChange)
      return;
    const o = this.options.beforeAddCommand;
    if (o != null && N(o, this, t, e) === !1)
      return;
    t === "cell:change:*" && (t = `cell:change:${n.key}`);
    const r = n.cell, a = qt.isModel(r);
    let l;
    if (this.batchCommands) {
      l = this.batchCommands[Math.max(this.lastBatchIndex, 0)];
      const h = a && !l.modelChange || l.data.id !== r.id, u = l.event !== t;
      if (this.lastBatchIndex >= 0 && (h || u)) {
        const d = this.batchCommands.findIndex((g) => (a && g.modelChange || g.data.id === r.id) && g.event === t);
        d < 0 || Le(t) || Ze(t) ? l = this.createCommand({ batch: !0 }) : (l = this.batchCommands[d], this.batchCommands.splice(d, 1)), this.batchCommands.push(l), this.lastBatchIndex = this.batchCommands.length - 1;
      }
    } else
      l = this.createCommand({ batch: !1 });
    if (Le(t) || Ze(t)) {
      const h = l.data;
      return l.event = t, l.options = i, h.id = r.id, h.props = gt(r.toJSON()), r.isEdge() ? h.edge = !0 : r.isNode() && (h.node = !0), this.push(l, i);
    }
    if ($n(t)) {
      const h = e.key, u = l.data;
      return (!l.batch || !l.event) && (l.event = t, l.options = i, u.key = h, u.prev == null && (u.prev = {}), u.prev[h] = gt(r.previous(h)), a ? l.modelChange = !0 : u.id = r.id), u.next == null && (u.next = {}), u.next[h] = gt(r.prop(h)), this.push(l, i);
    }
    const c = this.options.afterAddCommand;
    c && N(c, this, t, e, l), this.push(l, i);
  }
  /**
   * Gather multiple changes into a single command. These commands could
   * be reverted with single `undo()` call. From the moment the function
   * is called every change made on model is not stored into the undoStack.
   * Changes are temporarily kept until `storeBatchCommand()` is called.
   */
  // eslint-disable-next-line
  initBatchCommand(t) {
    this.freezed || (this.batchCommands ? this.batchLevel += 1 : (this.batchCommands = [this.createCommand({ batch: !0 })], this.batchLevel = 0, this.lastBatchIndex = -1));
  }
  /**
   * Store changes temporarily kept in the undoStack. You have to call this
   * function as many times as `initBatchCommand()` been called.
   */
  storeBatchCommand(t) {
    if (!this.freezed)
      if (this.batchCommands && this.batchLevel <= 0) {
        const e = this.filterBatchCommand(this.batchCommands);
        e.length > 0 && (this.redoStack = [], this.undoStackPush(e), this.consolidateCommands(), this.notify("add", e, t)), this.batchCommands = null, this.lastBatchIndex = -1, this.batchLevel = 0;
      } else this.batchCommands && this.batchLevel > 0 && (this.batchLevel -= 1);
  }
  filterBatchCommand(t) {
    let e = t.slice();
    const n = [];
    for (; e.length > 0; ) {
      const i = e.shift(), o = i.event, r = i.data.id;
      if (o != null && (r != null || i.modelChange)) {
        if (Le(o)) {
          const a = e.findIndex((l) => Ze(l.event) && l.data.id === r);
          if (a >= 0) {
            e = e.filter((l, c) => a < c || l.data.id !== r);
            continue;
          }
        } else if (Ze(o)) {
          const a = e.findIndex((l) => Le(l.event) && l.data.id === r);
          if (a >= 0) {
            e.splice(a, 1);
            continue;
          }
        } else if ($n(o)) {
          const a = i.data;
          if (Ie(a.prev, a.next))
            continue;
        }
        n.push(i);
      }
    }
    return n;
  }
  notify(t, e, n) {
    const i = e == null ? null : Array.isArray(e) ? e : [e];
    this.emit(t, { cmds: i, options: n }), this.graph.trigger(`history:${t}`, { cmds: i, options: n }), this.emit("change", { cmds: i, options: n }), this.graph.trigger("history:change", { cmds: i, options: n });
  }
  push(t, e) {
    this.redoStack = [], t.batch ? (this.lastBatchIndex = Math.max(this.lastBatchIndex, 0), this.emit("batch", { cmd: t, options: e })) : (this.undoStackPush(t), this.consolidateCommands(), this.notify("add", t, e));
  }
  /**
   * Conditionally combine multiple undo items into one.
   *
   * Currently this is only used combine a `cell:changed:position` event
   * followed by multiple `cell:change:parent` and `cell:change:children`
   * events, such that a "move + embed" action can be undone in one step.
   *
   * See https://github.com/antvis/X6/issues/2421
   *
   * This is an ugly WORKAROUND. It does not solve deficiencies in the batch
   * system itself.
   */
  consolidateCommands() {
    var t;
    const e = this.undoStack[this.undoStack.length - 1], n = this.undoStack[this.undoStack.length - 2];
    if (!Array.isArray(e))
      return;
    const i = new Set(e.map((r) => r.event));
    if (i.size !== 2 || !i.has("cell:change:parent") || !i.has("cell:change:children") || !e.every((r) => {
      var a;
      return r.batch && ((a = r.options) === null || a === void 0 ? void 0 : a.ui);
    }) || !Array.isArray(n) || n.length !== 1)
      return;
    const o = n[0];
    o.event !== "cell:change:position" || !(!((t = o.options) === null || t === void 0) && t.ui) || (n.push(...e), this.undoStack.pop());
  }
  undoStackPush(t) {
    if (this.stackSize === 0) {
      this.undoStack.push(t);
      return;
    }
    this.undoStack.length >= this.stackSize && this.undoStack.shift(), this.undoStack.push(t);
  }
  ensureUndefinedAttrs(t, e) {
    let n = !1;
    return t !== null && e !== null && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((i) => {
      t[i] === void 0 && e[i] !== void 0 ? (t[i] = void 0, n = !0) : typeof t[i] == "object" && typeof e[i] == "object" && (n = this.ensureUndefinedAttrs(t[i], e[i]));
    }), n;
  }
  dispose() {
    this.validator.dispose(), this.clean(), this.stopListening(), this.off();
  }
}
$([
  _()
], Ed.prototype, "dispose", null);
function OS(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Sd = { exports: {} };
(function(s) {
  (function(t, e, n) {
    if (!t)
      return;
    for (var i = {
      8: "backspace",
      9: "tab",
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "ins",
      46: "del",
      91: "meta",
      93: "meta",
      224: "meta"
    }, o = {
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    }, r = {
      "~": "`",
      "!": "1",
      "@": "2",
      "#": "3",
      $: "4",
      "%": "5",
      "^": "6",
      "&": "7",
      "*": "8",
      "(": "9",
      ")": "0",
      _: "-",
      "+": "=",
      ":": ";",
      '"': "'",
      "<": ",",
      ">": ".",
      "?": "/",
      "|": "\\"
    }, a = {
      option: "alt",
      command: "meta",
      return: "enter",
      escape: "esc",
      plus: "+",
      mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, l, c = 1; c < 20; ++c)
      i[111 + c] = "f" + c;
    for (c = 0; c <= 9; ++c)
      i[c + 96] = c.toString();
    function h(v, S, B) {
      if (v.addEventListener) {
        v.addEventListener(S, B, !1);
        return;
      }
      v.attachEvent("on" + S, B);
    }
    function u(v) {
      if (v.type == "keypress") {
        var S = String.fromCharCode(v.which);
        return v.shiftKey || (S = S.toLowerCase()), S;
      }
      return i[v.which] ? i[v.which] : o[v.which] ? o[v.which] : String.fromCharCode(v.which).toLowerCase();
    }
    function d(v, S) {
      return v.sort().join(",") === S.sort().join(",");
    }
    function g(v) {
      var S = [];
      return v.shiftKey && S.push("shift"), v.altKey && S.push("alt"), v.ctrlKey && S.push("ctrl"), v.metaKey && S.push("meta"), S;
    }
    function f(v) {
      if (v.preventDefault) {
        v.preventDefault();
        return;
      }
      v.returnValue = !1;
    }
    function p(v) {
      if (v.stopPropagation) {
        v.stopPropagation();
        return;
      }
      v.cancelBubble = !0;
    }
    function m(v) {
      return v == "shift" || v == "ctrl" || v == "alt" || v == "meta";
    }
    function b() {
      if (!l) {
        l = {};
        for (var v in i)
          v > 95 && v < 112 || i.hasOwnProperty(v) && (l[i[v]] = v);
      }
      return l;
    }
    function y(v, S, B) {
      return B || (B = b()[v] ? "keydown" : "keypress"), B == "keypress" && S.length && (B = "keydown"), B;
    }
    function A(v) {
      return v === "+" ? ["+"] : (v = v.replace(/\+{2}/g, "+plus"), v.split("+"));
    }
    function w(v, S) {
      var B, P, T, O = [];
      for (B = A(v), T = 0; T < B.length; ++T)
        P = B[T], a[P] && (P = a[P]), S && S != "keypress" && r[P] && (P = r[P], O.push("shift")), m(P) && O.push(P);
      return S = y(P, O, S), {
        key: P,
        modifiers: O,
        action: S
      };
    }
    function x(v, S) {
      return v === null || v === e ? !1 : v === S ? !0 : x(v.parentNode, S);
    }
    function M(v) {
      var S = this;
      if (v = v || e, !(S instanceof M))
        return new M(v);
      S.target = v, S._callbacks = {}, S._directMap = {};
      var B = {}, P, T = !1, O = !1, J = !1;
      function V(Q) {
        Q = Q || {};
        var et = !1, rt;
        for (rt in B) {
          if (Q[rt]) {
            et = !0;
            continue;
          }
          B[rt] = 0;
        }
        et || (J = !1);
      }
      function it(Q, et, rt, H, at, wt) {
        var Z, vt, Ee = [], zt = rt.type;
        if (!S._callbacks[Q])
          return [];
        for (zt == "keyup" && m(Q) && (et = [Q]), Z = 0; Z < S._callbacks[Q].length; ++Z)
          if (vt = S._callbacks[Q][Z], !(!H && vt.seq && B[vt.seq] != vt.level) && zt == vt.action && (zt == "keypress" && !rt.metaKey && !rt.ctrlKey || d(et, vt.modifiers))) {
            var Jd = !H && vt.combo == at, jd = H && vt.seq == H && vt.level == wt;
            (Jd || jd) && S._callbacks[Q].splice(Z, 1), Ee.push(vt);
          }
        return Ee;
      }
      function W(Q, et, rt, H) {
        S.stopCallback(et, et.target || et.srcElement, rt, H) || Q(et, rt) === !1 && (f(et), p(et));
      }
      S._handleKey = function(Q, et, rt) {
        var H = it(Q, et, rt), at, wt = {}, Z = 0, vt = !1;
        for (at = 0; at < H.length; ++at)
          H[at].seq && (Z = Math.max(Z, H[at].level));
        for (at = 0; at < H.length; ++at) {
          if (H[at].seq) {
            if (H[at].level != Z)
              continue;
            vt = !0, wt[H[at].seq] = 1, W(H[at].callback, rt, H[at].combo, H[at].seq);
            continue;
          }
          vt || W(H[at].callback, rt, H[at].combo);
        }
        var Ee = rt.type == "keypress" && O;
        rt.type == J && !m(Q) && !Ee && V(wt), O = vt && rt.type == "keydown";
      };
      function St(Q) {
        typeof Q.which != "number" && (Q.which = Q.keyCode);
        var et = u(Q);
        if (et) {
          if (Q.type == "keyup" && T === et) {
            T = !1;
            return;
          }
          S.handleKey(et, g(Q), Q);
        }
      }
      function Lt() {
        clearTimeout(P), P = setTimeout(V, 1e3);
      }
      function Ft(Q, et, rt, H) {
        B[Q] = 0;
        function at(zt) {
          return function() {
            J = zt, ++B[Q], Lt();
          };
        }
        function wt(zt) {
          W(rt, zt, Q), H !== "keyup" && (T = u(zt)), setTimeout(V, 10);
        }
        for (var Z = 0; Z < et.length; ++Z) {
          var vt = Z + 1 === et.length, Ee = vt ? wt : at(H || w(et[Z + 1]).action);
          At(et[Z], Ee, H, Q, Z);
        }
      }
      function At(Q, et, rt, H, at) {
        S._directMap[Q + ":" + rt] = et, Q = Q.replace(/\s+/g, " ");
        var wt = Q.split(" "), Z;
        if (wt.length > 1) {
          Ft(Q, wt, et, rt);
          return;
        }
        Z = w(Q, rt), S._callbacks[Z.key] = S._callbacks[Z.key] || [], it(Z.key, Z.modifiers, { type: Z.action }, H, Q, at), S._callbacks[Z.key][H ? "unshift" : "push"]({
          callback: et,
          modifiers: Z.modifiers,
          action: Z.action,
          seq: H,
          level: at,
          combo: Q
        });
      }
      S._bindMultiple = function(Q, et, rt) {
        for (var H = 0; H < Q.length; ++H)
          At(Q[H], et, rt);
      }, h(v, "keypress", St), h(v, "keydown", St), h(v, "keyup", St);
    }
    M.prototype.bind = function(v, S, B) {
      var P = this;
      return v = v instanceof Array ? v : [v], P._bindMultiple.call(P, v, S, B), P;
    }, M.prototype.unbind = function(v, S) {
      var B = this;
      return B.bind.call(B, v, function() {
      }, S);
    }, M.prototype.trigger = function(v, S) {
      var B = this;
      return B._directMap[v + ":" + S] && B._directMap[v + ":" + S]({}, v), B;
    }, M.prototype.reset = function() {
      var v = this;
      return v._callbacks = {}, v._directMap = {}, v;
    }, M.prototype.stopCallback = function(v, S) {
      var B = this;
      if ((" " + S.className + " ").indexOf(" mousetrap ") > -1 || x(S, B.target))
        return !1;
      if ("composedPath" in v && typeof v.composedPath == "function") {
        var P = v.composedPath()[0];
        P !== v.target && (S = P);
      }
      return S.tagName == "INPUT" || S.tagName == "SELECT" || S.tagName == "TEXTAREA" || S.isContentEditable;
    }, M.prototype.handleKey = function() {
      var v = this;
      return v._handleKey.apply(v, arguments);
    }, M.addKeycodes = function(v) {
      for (var S in v)
        v.hasOwnProperty(S) && (i[S] = v[S]);
      l = null;
    }, M.init = function() {
      var v = M(e);
      for (var S in v)
        S.charAt(0) !== "_" && (M[S] = /* @__PURE__ */ function(B) {
          return function() {
            return v[B].apply(v, arguments);
          };
        }(S));
    }, M.init(), t.Mousetrap = M, s.exports && (s.exports = M);
  })(typeof window < "u" ? window : null, typeof window < "u" ? document : null);
})(Sd);
var RS = Sd.exports;
const DS = /* @__PURE__ */ OS(RS);
function Wl(s, t, e) {
  const n = s.toLocaleLowerCase().replace(/\s/g, "").replace("delete", "del").replace("cmd", "command").replace("arrowup", "up").replace("arrowright", "right").replace("arrowdown", "down").replace("arrowleft", "left");
  return t ? N(t, e, n) : n;
}
function ql(s) {
  var t;
  const e = s.target, n = (t = e == null ? void 0 : e.tagName) === null || t === void 0 ? void 0 : t.toLowerCase();
  let i = ["input", "textarea"].includes(n);
  return X(e, "contenteditable") === "true" && (i = !0), i;
}
function QS(s, t, e) {
  const n = s.target, i = s.currentTarget;
  return n ? n === t || i === t || n === document.body ? !0 : Mr(e, n) : !1;
}
function NS(s) {
  const t = new DS(s.target), e = t.stopCallback;
  return t.stopCallback = (n, i, o) => s.isEnabledForEvent(n) ? e ? e.call(t, n, i, o) : !1 : !0, t;
}
class Md extends Gn {
  get graph() {
    return this.options.graph;
  }
  constructor(t) {
    super(), this.options = t;
    const e = this.graph.getPlugin("scroller");
    this.container = e ? e.container : this.graph.container, t.global ? this.target = document : (this.target = this.container, this.disabled || this.target.setAttribute("tabindex", "-1"), this.graph.on("cell:mouseup", this.focus.bind(this), this), this.graph.on("blank:mouseup", this.focus.bind(this), this)), this.mousetrap = NS(this);
  }
  get disabled() {
    return this.options.enabled !== !0;
  }
  enable() {
    this.disabled && (this.options.enabled = !0, this.target instanceof HTMLElement && this.target.setAttribute("tabindex", "-1"));
  }
  disable() {
    this.disabled || (this.options.enabled = !1, this.target instanceof HTMLElement && this.target.removeAttribute("tabindex"));
  }
  on(t, e, n) {
    this.mousetrap.bind(this.getKeys(t), e, n);
  }
  off(t, e) {
    this.mousetrap.unbind(this.getKeys(t), e);
  }
  clear() {
    this.mousetrap.reset();
  }
  trigger(t, e) {
    this.mousetrap.trigger(Wl(t, this.options.format, this.graph), e);
  }
  focus(t) {
    if (ql(t.e))
      return;
    this.target.focus({
      preventScroll: !0
    });
  }
  getKeys(t) {
    return (Array.isArray(t) ? t : [t]).map((e) => Wl(e, this.options.format, this.graph));
  }
  isEnabledForEvent(t) {
    const e = !this.disabled && QS(t, this.target, this.container), n = ql(t);
    if (e) {
      if (n && (t.key === "Backspace" || t.key === "Delete"))
        return !1;
      if (this.options.guard)
        return N(this.options.guard, this.graph, t);
    }
    return e;
  }
  dispose() {
    this.mousetrap.reset();
  }
}
$([
  _()
], Md.prototype, "dispose", null);
E.prototype.isKeyboardEnabled = function() {
  const s = this.getPlugin("keyboard");
  return s ? s.isEnabled() : !1;
};
E.prototype.enableKeyboard = function() {
  const s = this.getPlugin("keyboard");
  return s && s.enable(), this;
};
E.prototype.disableKeyboard = function() {
  const s = this.getPlugin("keyboard");
  return s && s.disable(), this;
};
E.prototype.toggleKeyboard = function(s) {
  const t = this.getPlugin("keyboard");
  return t && t.toggleEnabled(s), this;
};
E.prototype.bindKey = function(s, t, e) {
  const n = this.getPlugin("keyboard");
  return n && n.bindKey(s, t, e), this;
};
E.prototype.unbindKey = function(s, t) {
  const e = this.getPlugin("keyboard");
  return e && e.unbindKey(s, t), this;
};
E.prototype.clearKeys = function() {
  const s = this.getPlugin("keyboard");
  return s && s.clear(), this;
};
E.prototype.triggerKey = function(s, t) {
  const e = this.getPlugin("keyboard");
  return e && e.trigger(s, t), this;
};
class Bd extends Gn {
  constructor(t = {}) {
    super(), this.name = "keyboard", this.options = Object.assign({ enabled: !0 }, t);
  }
  init(t) {
    this.keyboardImpl = new Md(Object.assign(Object.assign({}, this.options), { graph: t }));
  }
  // #region api
  isEnabled() {
    return !this.keyboardImpl.disabled;
  }
  enable() {
    this.keyboardImpl.enable();
  }
  disable() {
    this.keyboardImpl.disable();
  }
  toggleEnabled(t) {
    return t === void 0 && (t = !this.isEnabled()), t ? this.enable() : this.disable(), this;
  }
  bindKey(t, e, n) {
    return this.keyboardImpl.on(t, e, n), this;
  }
  trigger(t, e) {
    return this.keyboardImpl.trigger(t, e), this;
  }
  clear() {
    return this.keyboardImpl.clear(), this;
  }
  unbindKey(t, e) {
    return this.keyboardImpl.off(t, e), this;
  }
  // #endregion
  dispose() {
    this.keyboardImpl.dispose();
  }
}
$([
  _()
], Bd.prototype, "dispose", null);
class Id extends Yt {
  get graph() {
    return this.options.graph;
  }
  get boxClassName() {
    return this.prefixClassName(ae.box);
  }
  get $boxes() {
    return WC(this.container, this.boxClassName);
  }
  get handleOptions() {
    return this.options;
  }
  constructor(t) {
    super(), this.updateThrottleTimer = null, this.isDragging = !1, this.batchUpdating = !1, this.dragRafId = null, this.transformRafId = null, this.dragPendingOffset = null, this.containerOffsetX = 0, this.containerOffsetY = 0, this.translatingCache = null, this.options = t, this.options.model && (this.options.collection = this.options.model.collection), this.options.collection ? this.collection = this.options.collection : (this.collection = new Gr([], {
      comparator: LS
    }), this.options.collection = this.collection), this.boxCount = 0, this.boxesUpdated = !1, this.createContainer(), this.startListening();
  }
  startListening() {
    const t = this.graph, e = this.collection;
    this.delegateEvents({
      [`mousedown .${this.boxClassName}`]: "onSelectionBoxMouseDown",
      [`touchstart .${this.boxClassName}`]: "onSelectionBoxMouseDown",
      [`mousedown .${this.prefixClassName(ae.inner)}`]: "onSelectionContainerMouseDown",
      [`touchstart .${this.prefixClassName(ae.inner)}`]: "onSelectionContainerMouseDown"
    }, !0), t.on("scale", this.onGraphTransformed, this), t.on("translate", this.onGraphTransformed, this), t.model.on("updated", this.onModelUpdated, this), e.on("added", this.onCellAdded, this), e.on("removed", this.onCellRemoved, this), e.on("reseted", this.onReseted, this), e.on("updated", this.onCollectionUpdated, this), e.on("node:change:position", this.onNodePositionChanged, this), e.on("cell:changed", this.onCellChanged, this);
  }
  stopListening() {
    const t = this.graph, e = this.collection;
    this.undelegateEvents(), t.off("scale", this.onGraphTransformed, this), t.off("translate", this.onGraphTransformed, this), this.transformRafId != null && (cancelAnimationFrame(this.transformRafId), this.transformRafId = null), this.updateThrottleTimer && (clearTimeout(this.updateThrottleTimer), this.updateThrottleTimer = null), t.model.off("updated", this.onModelUpdated, this), e.off("added", this.onCellAdded, this), e.off("removed", this.onCellRemoved, this), e.off("reseted", this.onReseted, this), e.off("updated", this.onCollectionUpdated, this), e.off("node:change:position", this.onNodePositionChanged, this), e.off("cell:changed", this.onCellChanged, this);
  }
  onRemove() {
    this.stopListening();
  }
  onGraphTransformed() {
    this.updateThrottleTimer && (clearTimeout(this.updateThrottleTimer), this.updateThrottleTimer = null), this.transformRafId == null && (this.transformRafId = window.requestAnimationFrame(() => {
      this.transformRafId = null, !this.isDragging && this.collection.length > 0 && this.refreshSelectionBoxes();
    }));
  }
  onCellChanged() {
    this.updateSelectionBoxes();
  }
  onNodePositionChanged({ node: t, options: e }) {
    const { showNodeSelectionBox: n, pointerEvents: i } = this.options, { ui: o, selection: r, translateBy: a, snapped: l } = e, c = (n !== !0 || i && this.getPointerEventsValue(i) === "none") && !this.translating && !r, h = o && a && t.id === a;
    if (c && (h || l)) {
      this.translating = !0;
      const u = t.position(), d = t.previous("position");
      if (d) {
        const g = u.x - d.x, f = u.y - d.y;
        (g !== 0 || f !== 0) && this.translateSelectedNodes(g, f, t, e);
      }
      this.translating = !1;
    }
  }
  onModelUpdated({ removed: t }) {
    t != null && t.length && this.unselect(t);
  }
  isEmpty() {
    return this.length <= 0;
  }
  isSelected(t) {
    return this.collection.has(t);
  }
  get length() {
    return this.collection.length;
  }
  get cells() {
    return this.collection.toArray();
  }
  select(t, e = {}) {
    e.dryrun = !0;
    const n = this.filter(Array.isArray(t) ? t : [t]);
    return this.collection.add(n, e), this;
  }
  unselect(t, e = {}) {
    return e.dryrun = !0, this.collection.remove(Array.isArray(t) ? t : [t], e), this;
  }
  reset(t, e = {}) {
    if (t) {
      this.batchUpdating = !!e.batch;
      const n = this.cells, i = this.filter(Array.isArray(t) ? t : [t]), o = {}, r = {};
      for (const c of n)
        o[c.id] = c;
      for (const c of i)
        r[c.id] = c;
      const a = [], l = [];
      return i.forEach((c) => {
        o[c.id] || a.push(c);
      }), n.forEach((c) => {
        r[c.id] || l.push(c);
      }), l.length && this.unselect(l, Object.assign(Object.assign({}, e), { ui: !0 })), a.length && this.select(a, Object.assign(Object.assign({}, e), { ui: !0 })), this.updateContainer(), this.batchUpdating = !1, this;
    }
    return this.clean(e);
  }
  clean(t = {}) {
    return this.length && this.unselect(this.cells, t), this.containerOffsetX = 0, this.containerOffsetY = 0, st(this.container, "transform", ""), this;
  }
  setFilter(t) {
    this.options.filter = t;
  }
  setContent(t) {
    this.options.content = t;
  }
  startSelecting(t) {
    t = this.normalizeEvent(t), this.clean();
    let e, n;
    const i = this.graph.container;
    if (t.offsetX != null && t.offsetY != null && i.contains(t.target))
      e = t.offsetX, n = t.offsetY;
    else {
      const o = Dn(i), r = i.scrollLeft, a = i.scrollTop;
      e = t.clientX - o.left + window.pageXOffset + r, n = t.clientY - o.top + window.pageYOffset + a;
    }
    st(this.container, {
      top: n,
      left: e,
      width: 1,
      height: 1
    }), this.setEventData(t, {
      action: "selecting",
      clientX: t.clientX,
      clientY: t.clientY,
      offsetX: e,
      offsetY: n,
      scrollerX: 0,
      scrollerY: 0,
      moving: !1
    }), this.delegateDocumentEvents(Xl, t.data);
  }
  filter(t) {
    const e = this.options.filter;
    return t.filter((n) => Array.isArray(e) ? e.some((i) => typeof i == "string" ? n.shape === i : n.id === i.id) : typeof e == "function" ? N(e, this.graph, n) : !0);
  }
  stopSelecting(t) {
    this.isDragging = !1, this.boxesUpdated = !1, this.updateThrottleTimer && (clearTimeout(this.updateThrottleTimer), this.updateThrottleTimer = null);
    const e = this.graph;
    switch (this.getEventData(t).action) {
      case "selecting": {
        let o = WA(this.container), r = qA(this.container);
        const a = Dn(this.container), l = e.pageToLocal(a.left, a.top), c = e.transform.getScale();
        o /= c.sx, r /= c.sy;
        const h = new I(l.x, l.y, o, r), u = this.getCellViewsInArea(h).map((d) => d.cell);
        this.reset(u, { batch: !0 }), this.hideRubberband();
        break;
      }
      case "translating": {
        const o = e.snapToGrid(t.clientX, t.clientY);
        if (this.dragPendingOffset) {
          const r = this.dragPendingOffset;
          this.dragPendingOffset = null, this.translateSelectedNodes(r.dx, r.dy), this.updateContainerPosition(r);
        }
        this.dragRafId != null && (cancelAnimationFrame(this.dragRafId), this.dragRafId = null), this.containerOffsetX = 0, this.containerOffsetY = 0, st(this.container, "transform", ""), this.graph.model.stopBatch("move-selection"), this.translatingCache = null, this.notifyBoxEvent("box:mouseup", t, o.x, o.y), this.repositionSelectionBoxesInPlace();
        break;
      }
      default: {
        this.clean();
        break;
      }
    }
    this.undelegateDocumentEvents();
  }
  onMouseUp(t) {
    const e = this.normalizeEvent(t);
    this.getEventData(e) && this.stopSelecting(t);
  }
  onSelectionBoxMouseDown(t) {
    this.handleSelectionMouseDown(t, !0);
  }
  onSelectionContainerMouseDown(t) {
    this.handleSelectionMouseDown(t, !1);
  }
  handleSelectionMouseDown(t, e) {
    var n;
    t.stopPropagation(), (n = t.preventDefault) === null || n === void 0 || n.call(t);
    const i = this.normalizeEvent(t), o = this.graph.snapToGrid(i.clientX, i.clientY);
    if (!e && Ge(i, this.options.multipleSelectionModifiers)) {
      const l = this.graph.findViewsFromPoint(o.x, o.y).find((c) => c.isNodeView());
      if (l) {
        const c = l.cell;
        this.isSelected(c) ? this.unselect(c, { ui: !0 }) : this.options.multiple === !1 ? this.reset(c, { ui: !0 }) : this.select(c, { ui: !0 });
      }
      return;
    }
    this.options.movable && this.startTranslating(i);
    let r = e ? this.getCellViewFromElem(i.target) : null;
    if (!r && (r = this.graph.findViewsFromPoint(o.x, o.y).filter((l) => this.isSelected(l.cell))[0] || null, !r)) {
      const l = this.collection.first();
      l && (r = this.graph.renderer.findViewByCell(l));
    }
    r && (this.setEventData(i, { activeView: r }), e && this.notifyBoxEvent("box:mousedown", i, o.x, o.y), this.delegateDocumentEvents(Xl, i.data));
  }
  startTranslating(t) {
    this.graph.model.startBatch("move-selection");
    const e = this.graph.snapToGrid(t.clientX, t.clientY);
    this.setEventData(t, {
      action: "translating",
      clientX: e.x,
      clientY: e.y,
      originX: e.x,
      originY: e.y
    }), this.prepareTranslatingCache();
  }
  getRestrictArea() {
    const t = this.graph.options.translating.restrict, e = typeof t == "function" ? N(t, this.graph, null) : t;
    return typeof e == "number" ? this.graph.transform.getGraphArea().inflate(e) : e === !0 ? this.graph.transform.getGraphArea() : e || null;
  }
  // 根据当前选择的节点构建拖拽缓存
  prepareTranslatingCache() {
    const t = this.collection.toArray().filter((r) => r.isNode()), e = new Set(t.map((r) => r.id)), n = this.collection.toArray().filter((r) => r.isEdge()), i = /* @__PURE__ */ new Set(), o = (r) => r.getVertices().length > 0 || !r.getSourceCellId() || !r.getTargetCellId();
    this.graph.model.getEdges().forEach((r) => {
      const a = r.getSourceCellId(), l = r.getTargetCellId();
      (a != null && e.has(a) || l != null && e.has(l)) && o(r) && i.add(r);
    }), n.forEach((r) => {
      o(r) && i.add(r);
    }), this.translatingCache = {
      selectedNodes: t,
      nodeIdSet: e,
      edgesToTranslate: Array.from(i)
    };
  }
  getSelectionOffset(t, e) {
    let n = t.x - e.clientX, i = t.y - e.clientY;
    const o = this.getRestrictArea();
    if (o) {
      const r = this.collection.toArray(), a = q.getCellsBBox(r, { deep: !0 }) || I.create(), l = o.x - a.x, c = o.y - a.y, h = o.x + o.width - (a.x + a.width), u = o.y + o.height - (a.y + a.height);
      if (n < l && (n = l), i < c && (i = c), h < n && (n = h), u < i && (i = u), !this.options.following) {
        const d = t.x - e.originX, g = t.y - e.originY;
        n = d <= l || d >= h ? 0 : n, i = g <= c || g >= u ? 0 : i;
      }
    }
    return {
      dx: n,
      dy: i
    };
  }
  updateSelectedNodesPosition(t) {
    t.dx === 0 && t.dy === 0 || (this.dragPendingOffset ? (this.dragPendingOffset.dx += t.dx, this.dragPendingOffset.dy += t.dy) : this.dragPendingOffset = { dx: t.dx, dy: t.dy }, this.dragRafId == null && (this.dragRafId = requestAnimationFrame(() => {
      const e = this.dragPendingOffset || { dx: 0, dy: 0 };
      this.dragPendingOffset = null, this.dragRafId = null, this.translateSelectedNodes(e.dx, e.dy), this.updateContainerPosition(e), this.boxesUpdated = !0, this.isDragging = !0;
    })));
  }
  autoScrollGraph(t, e) {
    const n = this.graph.getPlugin("scroller");
    return n != null && n.autoScroll ? n.autoScroll(t, e) : { scrollerX: 0, scrollerY: 0 };
  }
  adjustSelection(t) {
    const e = this.normalizeEvent(t), n = this.getEventData(e);
    switch (n.action) {
      case "selecting": {
        const o = n;
        o.moving !== !0 && (ne(this.container, this.graph.container), this.showRubberband(), o.moving = !0);
        const { scrollerX: r, scrollerY: a } = this.autoScrollGraph(e.clientX, e.clientY);
        o.scrollerX += r, o.scrollerY += a;
        const l = e.clientX - o.clientX + o.scrollerX, c = e.clientY - o.clientY + o.scrollerY;
        st(this.container, {
          left: l < 0 ? o.offsetX + l : o.offsetX,
          top: c < 0 ? o.offsetY + c : o.offsetY,
          width: Math.abs(l),
          height: Math.abs(c)
        });
        break;
      }
      case "translating": {
        this.isDragging = !0;
        const o = this.graph.snapToGrid(e.clientX, e.clientY), r = n, a = this.getSelectionOffset(o, r);
        this.options.following ? this.updateSelectedNodesPosition(a) : this.updateContainerPosition(a), a.dx && (r.clientX = o.x), a.dy && (r.clientY = o.y), this.notifyBoxEvent("box:mousemove", t, o.x, o.y);
        break;
      }
    }
    this.boxesUpdated = !1;
  }
  translateSelectedNodes(t, e, n, i) {
    var o, r;
    const a = {}, l = [];
    if (n && (a[n.id] = !0), this.collection.toArray().forEach((p) => {
      p.getDescendants({ deep: !0 }).forEach((m) => {
        a[m.id] = !0;
      });
    }), i != null && i.translateBy) {
      const p = this.graph.getCellById(i.translateBy);
      p && (a[p.id] = !0, p.getDescendants({ deep: !0 }).forEach((m) => {
        a[m.id] = !0;
      }), l.push(p));
    }
    const c = Object.assign(Object.assign({}, i), { selection: this.cid, exclude: l }), h = (o = this.translatingCache) === null || o === void 0 ? void 0 : o.selectedNodes, u = (h ?? this.collection.toArray().filter((p) => p.isNode())).filter((p) => !a[p.id]);
    u.forEach((p) => {
      p.translate(t, e, c);
    });
    const d = (r = this.translatingCache) === null || r === void 0 ? void 0 : r.edgesToTranslate, g = /* @__PURE__ */ new Set();
    if (d)
      d.forEach((p) => {
        g.add(p);
      });
    else {
      const p = new Set(u.map((m) => m.id));
      this.graph.model.getEdges().forEach((m) => {
        const b = m.getSourceCellId(), y = m.getTargetCellId(), A = b ? p.has(b) : !1, w = y ? p.has(y) : !1;
        (A || w) && (m.getVertices().length > 0 || (!b || !y)) && g.add(m);
      });
    }
    this.collection.toArray().filter((p) => p.isEdge() && !a[p.id]).forEach((p) => {
      const m = p.getVertices().length > 0, b = !p.getSourceCellId() || !p.getTargetCellId();
      (m || b) && g.add(p);
    }), g.forEach((p) => {
      p.translate(t, e, c);
    });
  }
  getCellViewsInArea(t) {
    const e = this.graph, n = {
      strict: this.options.strict
    };
    let i = [];
    return this.options.rubberNode && (i = i.concat(e.model.getNodesInArea(t, n).map((o) => e.renderer.findViewByCell(o)).filter((o) => o != null))), this.options.rubberEdge && (i = i.concat(e.model.getEdgesInArea(t, n).map((o) => e.renderer.findViewByCell(o)).filter((o) => o != null))), i;
  }
  notifyBoxEvent(t, e, n, i) {
    const r = this.getEventData(e).activeView;
    this.trigger(t, { e, view: r, x: n, y: i, cell: r.cell });
  }
  getSelectedClassName(t) {
    return this.prefixClassName(`${t.isNode() ? "node" : "edge"}-selected`);
  }
  addCellSelectedClassName(t) {
    const e = this.graph.renderer.findViewByCell(t);
    e && e.addClass(this.getSelectedClassName(t));
  }
  removeCellUnSelectedClassName(t) {
    const e = this.graph.renderer.findViewByCell(t);
    e && e.removeClass(this.getSelectedClassName(t));
  }
  destroySelectionBox(t) {
    this.removeCellUnSelectedClassName(t), this.canShowSelectionBox(t) && (ee(this.container.querySelector(`[data-cell-id="${t.id}"]`)), this.$boxes.length === 0 && this.hide(), this.boxCount = Math.max(0, this.boxCount - 1));
  }
  destroyAllSelectionBoxes(t) {
    t.forEach((e) => {
      this.removeCellUnSelectedClassName(e);
    }), this.hide(), ee(this.$boxes), this.boxCount = 0;
  }
  hide() {
    ut(this.container, this.prefixClassName(ae.rubberband)), ut(this.container, this.prefixClassName(ae.selected));
  }
  showRubberband() {
    k(this.container, this.prefixClassName(ae.rubberband));
  }
  hideRubberband() {
    ut(this.container, this.prefixClassName(ae.rubberband));
  }
  showSelected() {
    Ir(this.container, "style"), k(this.container, this.prefixClassName(ae.selected));
  }
  createContainer() {
    this.container = document.createElement("div"), k(this.container, this.prefixClassName(ae.root)), this.options.className && k(this.container, this.options.className), st(this.container, {
      willChange: "transform"
    }), this.selectionContainer = document.createElement("div"), k(this.selectionContainer, this.prefixClassName(ae.inner)), this.selectionContent = document.createElement("div"), k(this.selectionContent, this.prefixClassName(ae.content)), Rt(this.selectionContainer, this.selectionContent), X(this.selectionContainer, "data-selection-length", this.collection.length), wh(this.container, this.selectionContainer);
  }
  updateContainerPosition(t) {
    if (t.dx || t.dy) {
      const e = this.graph.transform.getScale();
      this.containerOffsetX += t.dx * e.sx, this.containerOffsetY += t.dy * e.sy, st(this.container, "transform", `translate3d(${this.containerOffsetX}px, ${this.containerOffsetY}px, 0)`);
    }
  }
  updateContainer() {
    const t = { x: 1 / 0, y: 1 / 0 }, e = { x: 0, y: 0 };
    this.collection.toArray().filter((o) => this.canShowSelectionBox(o)).forEach((o) => {
      const r = this.graph.renderer.findViewByCell(o);
      if (r) {
        const a = r.getBBox({
          useCellGeometry: !0
        });
        t.x = Math.min(t.x, a.x), t.y = Math.min(t.y, a.y), e.x = Math.max(e.x, a.x + a.width), e.y = Math.max(e.y, a.y + a.height);
      }
    }), st(this.selectionContainer, {
      position: "absolute",
      pointerEvents: this.options.movable ? "auto" : "none",
      cursor: this.options.movable ? "move" : "default",
      left: t.x,
      top: t.y,
      width: e.x - t.x,
      height: e.y - t.y
    }), X(this.selectionContainer, "data-selection-length", this.collection.length);
    const i = this.options.content;
    if (i)
      if (typeof i == "function") {
        const o = N(i, this.graph, this, this.selectionContent);
        o && (this.selectionContent.innerHTML = o);
      } else
        this.selectionContent.innerHTML = i;
    this.collection.length > 0 && !this.container.parentNode ? ne(this.container, this.graph.container) : this.collection.length <= 0 && this.container.parentNode && this.container.parentNode.removeChild(this.container);
  }
  canShowSelectionBox(t) {
    return t.isNode() && this.options.showNodeSelectionBox === !0 || t.isEdge() && this.options.showEdgeSelectionBox === !0;
  }
  getPointerEventsValue(t) {
    return typeof t == "string" ? t : t(this.cells);
  }
  createSelectionBox(t) {
    if (this.addCellSelectedClassName(t), this.canShowSelectionBox(t)) {
      const e = this.graph.renderer.findViewByCell(t);
      if (e) {
        const n = e.getBBox({
          useCellGeometry: !0
        }), i = this.boxClassName, o = document.createElement("div"), r = this.options.pointerEvents;
        k(o, i), k(o, `${i}-${t.isNode() ? "node" : "edge"}`), X(o, "data-cell-id", t.id), st(o, {
          position: "absolute",
          left: n.x,
          top: n.y,
          width: n.width,
          height: n.height,
          pointerEvents: r ? this.getPointerEventsValue(r) : "auto"
        }), ne(o, this.container), this.showSelected(), this.boxCount += 1;
      }
    }
  }
  updateSelectionBoxes() {
    if (this.collection.length > 0) {
      if (this.isDragging)
        return;
      this.updateThrottleTimer && clearTimeout(this.updateThrottleTimer), this.updateThrottleTimer = setTimeout(() => {
        this.refreshSelectionBoxes(), this.updateThrottleTimer = null;
      }, 16);
    }
  }
  refreshSelectionBoxes() {
    ee(this.$boxes), this.boxCount = 0, this.collection.toArray().forEach((t) => {
      this.createSelectionBox(t);
    }), this.updateContainer(), this.boxesUpdated = !0;
  }
  // 按当前视图几何同步每个选择框的位置与尺寸
  repositionSelectionBoxesInPlace() {
    const t = this.$boxes;
    if (t.length === 0) {
      this.refreshSelectionBoxes();
      return;
    }
    for (const e of t) {
      const n = e.getAttribute("data-cell-id");
      if (!n)
        continue;
      const i = this.collection.get(n);
      if (!i)
        continue;
      const o = this.graph.renderer.findViewByCell(i);
      if (!o)
        continue;
      const r = o.getBBox({ useCellGeometry: !0 });
      st(e, {
        left: r.x,
        top: r.y,
        width: r.width,
        height: r.height
      });
    }
    this.updateContainer(), this.boxesUpdated = !0;
  }
  getCellViewFromElem(t) {
    const e = t.getAttribute("data-cell-id");
    if (e) {
      const n = this.collection.get(e);
      if (n)
        return this.graph.renderer.findViewByCell(n);
    }
    return null;
  }
  onCellRemoved({ cell: t }) {
    this.destroySelectionBox(t), this.batchUpdating || this.updateContainer();
  }
  onReseted({ previous: t, current: e }) {
    this.destroyAllSelectionBoxes(t), e.forEach((n) => {
      this.listenCellRemoveEvent(n), this.createSelectionBox(n);
    }), this.updateContainer();
  }
  onCellAdded({ cell: t }) {
    this.listenCellRemoveEvent(t), this.createSelectionBox(t), this.batchUpdating || this.updateContainer();
  }
  listenCellRemoveEvent(t) {
    t.off("removed", this.onCellRemoved, this), t.on("removed", this.onCellRemoved, this);
  }
  onCollectionUpdated({ added: t, removed: e, options: n }) {
    t.forEach((o) => {
      this.trigger("cell:selected", { cell: o, options: n }), o.isNode() ? this.trigger("node:selected", { cell: o, options: n, node: o }) : o.isEdge() && this.trigger("edge:selected", { cell: o, options: n, edge: o });
    }), e.forEach((o) => {
      this.trigger("cell:unselected", { cell: o, options: n }), o.isNode() ? this.trigger("node:unselected", { cell: o, options: n, node: o }) : o.isEdge() && this.trigger("edge:unselected", { cell: o, options: n, edge: o });
    });
    const i = {
      added: t,
      removed: e,
      options: n,
      selected: this.cells.filter((o) => !!this.graph.getCellById(o.id))
    };
    this.trigger("selection:changed", i);
  }
  // #endregion
  dispose() {
    this.clean(), this.remove(), this.off();
  }
}
$([
  _()
], Id.prototype, "dispose", null);
const mn = "widget-selection", ae = {
  root: mn,
  inner: `${mn}-inner`,
  box: `${mn}-box`,
  content: `${mn}-content`,
  rubberband: `${mn}-rubberband`,
  selected: `${mn}-selected`
}, Xl = {
  mousemove: "adjustSelection",
  touchmove: "adjustSelection",
  mouseup: "onMouseUp",
  touchend: "onMouseUp",
  touchcancel: "onMouseUp"
};
function LS(s) {
  return s.getAncestors().length;
}
const FS = `.x6-widget-selection {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 0;
  height: 0;
  touch-action: none;
}
.x6-widget-selection-rubberband {
  display: block;
  overflow: visible;
  opacity: 0.3;
}
.x6-widget-selection-selected {
  display: block;
}
.x6-widget-selection-box {
  cursor: move;
}
.x6-widget-selection-inner[data-selection-length='0'],
.x6-widget-selection-inner[data-selection-length='1'] {
  display: none;
}
.x6-widget-selection-content {
  position: absolute;
  top: 100%;
  right: -20px;
  left: -20px;
  margin-top: 30px;
  padding: 6px;
  line-height: 14px;
  text-align: center;
  border-radius: 6px;
}
.x6-widget-selection-content:empty {
  display: none;
}
.x6-widget-selection-rubberband {
  background-color: #3498db;
  border: 2px solid #2980b9;
}
.x6-widget-selection-box {
  box-sizing: content-box !important;
  margin-top: -4px;
  margin-left: -4px;
  padding-right: 4px;
  padding-bottom: 4px;
  border: 2px dashed #feb663;
  box-shadow: 2px 2px 5px #d3d3d3;
}
.x6-widget-selection-inner {
  box-sizing: content-box !important;
  margin-top: -8px;
  margin-left: -8px;
  padding-right: 12px;
  padding-bottom: 12px;
  border: 2px solid #feb663;
  box-shadow: 2px 2px 5px #d3d3d3;
}
.x6-widget-selection-content {
  color: #fff;
  font-size: 10px;
  background-color: #6a6b8a;
}
`;
E.prototype.isSelectionEnabled = function() {
  const s = this.getPlugin("selection");
  return s ? s.isEnabled() : !1;
};
E.prototype.enableSelection = function() {
  const s = this.getPlugin("selection");
  return s && s.enable(), this;
};
E.prototype.disableSelection = function() {
  const s = this.getPlugin("selection");
  return s && s.disable(), this;
};
E.prototype.toggleSelection = function(s) {
  const t = this.getPlugin("selection");
  return t && t.toggleEnabled(s), this;
};
E.prototype.isMultipleSelection = function() {
  const s = this.getPlugin("selection");
  return s ? s.isMultipleSelection() : !1;
};
E.prototype.enableMultipleSelection = function() {
  const s = this.getPlugin("selection");
  return s && s.enableMultipleSelection(), this;
};
E.prototype.disableMultipleSelection = function() {
  const s = this.getPlugin("selection");
  return s && s.disableMultipleSelection(), this;
};
E.prototype.toggleMultipleSelection = function(s) {
  const t = this.getPlugin("selection");
  return t && t.toggleMultipleSelection(s), this;
};
E.prototype.isSelectionMovable = function() {
  const s = this.getPlugin("selection");
  return s ? s.isSelectionMovable() : !1;
};
E.prototype.enableSelectionMovable = function() {
  const s = this.getPlugin("selection");
  return s && s.enableSelectionMovable(), this;
};
E.prototype.disableSelectionMovable = function() {
  const s = this.getPlugin("selection");
  return s && s.disableSelectionMovable(), this;
};
E.prototype.toggleSelectionMovable = function(s) {
  const t = this.getPlugin("selection");
  return t && t.toggleSelectionMovable(s), this;
};
E.prototype.isRubberbandEnabled = function() {
  const s = this.getPlugin("selection");
  return s ? s.isRubberbandEnabled() : !1;
};
E.prototype.enableRubberband = function() {
  const s = this.getPlugin("selection");
  return s && s.enableRubberband(), this;
};
E.prototype.disableRubberband = function() {
  const s = this.getPlugin("selection");
  return s && s.disableRubberband(), this;
};
E.prototype.toggleRubberband = function(s) {
  const t = this.getPlugin("selection");
  return t && t.toggleRubberband(s), this;
};
E.prototype.isStrictRubberband = function() {
  const s = this.getPlugin("selection");
  return s ? s.isStrictRubberband() : !1;
};
E.prototype.enableStrictRubberband = function() {
  const s = this.getPlugin("selection");
  return s && s.enableStrictRubberband(), this;
};
E.prototype.disableStrictRubberband = function() {
  const s = this.getPlugin("selection");
  return s && s.disableStrictRubberband(), this;
};
E.prototype.toggleStrictRubberband = function(s) {
  const t = this.getPlugin("selection");
  return t && t.toggleStrictRubberband(s), this;
};
E.prototype.setRubberbandModifiers = function(s) {
  const t = this.getPlugin("selection");
  return t && t.setRubberbandModifiers(s), this;
};
E.prototype.setSelectionFilter = function(s) {
  const t = this.getPlugin("selection");
  return t && t.setSelectionFilter(s), this;
};
E.prototype.setSelectionDisplayContent = function(s) {
  const t = this.getPlugin("selection");
  return t && t.setSelectionDisplayContent(s), this;
};
E.prototype.isSelectionEmpty = function() {
  const s = this.getPlugin("selection");
  return s ? s.isEmpty() : !0;
};
E.prototype.cleanSelection = function(s) {
  const t = this.getPlugin("selection");
  return t && t.clean(s), this;
};
E.prototype.resetSelection = function(s, t) {
  const e = this.getPlugin("selection");
  return e && e.reset(s, t), this;
};
E.prototype.getSelectedCells = function() {
  const s = this.getPlugin("selection");
  return s ? s.getSelectedCells() : [];
};
E.prototype.getSelectedCellCount = function() {
  const s = this.getPlugin("selection");
  return s ? s.getSelectedCellCount() : 0;
};
E.prototype.isSelected = function(s) {
  const t = this.getPlugin("selection");
  return t ? t.isSelected(s) : !1;
};
E.prototype.select = function(s, t) {
  const e = this.getPlugin("selection");
  return e && e.select(s, t), this;
};
E.prototype.unselect = function(s, t) {
  const e = this.getPlugin("selection");
  return e && e.unselect(s, t), this;
};
const zS = {
  rubberband: !1,
  rubberNode: !0,
  rubberEdge: !1,
  // next version will set to true
  pointerEvents: "auto",
  multiple: !0,
  multipleSelectionModifiers: ["ctrl", "meta"],
  movable: !0,
  strict: !1,
  selectCellOnMoved: !1,
  selectNodeOnMoved: !1,
  selectEdgeOnMoved: !1,
  following: !0,
  content: null,
  eventTypes: ["leftMouseDown", "mouseWheelDown"]
};
class Pd extends Gt {
  get rubberbandDisabled() {
    return this.options.enabled !== !0 || this.options.rubberband !== !0;
  }
  get disabled() {
    return this.options.enabled !== !0;
  }
  get length() {
    return this.selectionImpl.length;
  }
  get cells() {
    return this.selectionImpl.cells;
  }
  constructor(t = {}) {
    super(), this.name = "selection", this.movedMap = /* @__PURE__ */ new WeakMap(), this.unselectMap = /* @__PURE__ */ new WeakMap(), this.options = Object.assign(Object.assign({ enabled: !0 }, zS), t), We(this.name, FS);
  }
  init(t) {
    this.graph = t, this.selectionImpl = new Id(Object.assign(Object.assign({}, this.options), { graph: t })), this.resolvePanningSelectionConflict(), this.setup(), this.startListening();
  }
  // #region api
  isEnabled() {
    return !this.disabled;
  }
  enable() {
    this.disabled && (this.options.enabled = !0);
  }
  disable() {
    this.disabled || (this.options.enabled = !1);
  }
  toggleEnabled(t) {
    return t != null ? t !== this.isEnabled() && (t ? this.enable() : this.disable()) : this.isEnabled() ? this.disable() : this.enable(), this;
  }
  isMultipleSelection() {
    return this.isMultiple();
  }
  enableMultipleSelection() {
    return this.enableMultiple(), this;
  }
  disableMultipleSelection() {
    return this.disableMultiple(), this;
  }
  toggleMultipleSelection(t) {
    return t != null ? t !== this.isMultipleSelection() && (t ? this.enableMultipleSelection() : this.disableMultipleSelection()) : this.isMultipleSelection() ? this.disableMultipleSelection() : this.enableMultipleSelection(), this;
  }
  isSelectionMovable() {
    return this.options.movable !== !1;
  }
  enableSelectionMovable() {
    return this.selectionImpl.options.movable = !0, this;
  }
  disableSelectionMovable() {
    return this.selectionImpl.options.movable = !1, this;
  }
  toggleSelectionMovable(t) {
    return t != null ? t !== this.isSelectionMovable() && (t ? this.enableSelectionMovable() : this.disableSelectionMovable()) : this.isSelectionMovable() ? this.disableSelectionMovable() : this.enableSelectionMovable(), this;
  }
  isRubberbandEnabled() {
    return !this.rubberbandDisabled;
  }
  enableRubberband() {
    return this.rubberbandDisabled && (this.options.rubberband = !0), this;
  }
  disableRubberband() {
    return this.rubberbandDisabled || (this.options.rubberband = !1), this;
  }
  toggleRubberband(t) {
    return t != null ? t !== this.isRubberbandEnabled() && (t ? this.enableRubberband() : this.disableRubberband()) : this.isRubberbandEnabled() ? this.disableRubberband() : this.enableRubberband(), this;
  }
  isStrictRubberband() {
    return this.selectionImpl.options.strict === !0;
  }
  enableStrictRubberband() {
    return this.selectionImpl.options.strict = !0, this;
  }
  disableStrictRubberband() {
    return this.selectionImpl.options.strict = !1, this;
  }
  toggleStrictRubberband(t) {
    return t != null ? t !== this.isStrictRubberband() && (t ? this.enableStrictRubberband() : this.disableStrictRubberband()) : this.isStrictRubberband() ? this.disableStrictRubberband() : this.enableStrictRubberband(), this;
  }
  setRubberbandModifiers(t) {
    this.setModifiers(t);
  }
  setSelectionFilter(t) {
    return this.setFilter(t), this;
  }
  setSelectionDisplayContent(t) {
    return this.setContent(t), this;
  }
  isEmpty() {
    return this.length <= 0;
  }
  clean(t = {}) {
    return this.selectionImpl.clean(t), this;
  }
  reset(t, e = {}) {
    return this.selectionImpl.reset(t ? this.getCells(t) : [], e), this;
  }
  getSelectedCells() {
    return this.cells;
  }
  getSelectedCellCount() {
    return this.length;
  }
  isSelected(t) {
    return this.selectionImpl.isSelected(t);
  }
  select(t, e = {}) {
    const n = this.getCells(t);
    return n.length && (this.isMultiple() ? this.selectionImpl.select(n, e) : this.reset(n.slice(0, 1), e)), this;
  }
  unselect(t, e = {}) {
    return this.selectionImpl.unselect(this.getCells(t), e), this;
  }
  // #endregion
  setup() {
    this.selectionImpl.on("*", (t, e) => {
      this.trigger(t, e), this.graph.trigger(t, e);
    });
  }
  startListening() {
    this.graph.on("blank:mousedown", this.onBlankMouseDown, this), this.graph.on("blank:click", this.onBlankClick, this), this.graph.on("cell:mousemove", this.onCellMouseMove, this), this.graph.on("cell:mouseup", this.onCellMouseUp, this), this.selectionImpl.on("box:mousedown", this.onBoxMouseDown, this);
  }
  stopListening() {
    this.graph.off("blank:mousedown", this.onBlankMouseDown, this), this.graph.off("blank:click", this.onBlankClick, this), this.graph.off("cell:mousemove", this.onCellMouseMove, this), this.graph.off("cell:mouseup", this.onCellMouseUp, this), this.selectionImpl.off("box:mousedown", this.onBoxMouseDown, this);
  }
  onBlankMouseDown({ e: t }) {
    if (!this.allowBlankMouseDown(t))
      return;
    const e = this.graph.panning.allowPanning(t, !0), n = this.graph.getPlugin("scroller"), i = n && n.allowPanning(t, !0);
    (this.allowRubberband(t, !0) || this.allowRubberband(t) && !i && !e) && this.startRubberband(t);
  }
  allowBlankMouseDown(t) {
    const e = this.options.eventTypes;
    return typeof t.type == "string" && t.type.startsWith("touch") || t.pointerType === "touch" ? e == null ? void 0 : e.includes("leftMouseDown") : (e == null ? void 0 : e.includes("leftMouseDown")) && t.button === 0 || (e == null ? void 0 : e.includes("mouseWheelDown")) && t.button === 1;
  }
  onBlankClick() {
    this.clean();
  }
  allowRubberband(t, e) {
    const n = t ?? {
      altKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      shiftKey: !1
    };
    return !this.rubberbandDisabled && Ge(n, this.options.modifiers, e);
  }
  /**
   * 当框选和画布拖拽平移触发条件相同时（相同事件 + 相同修饰键），框选优先触发，否则不互相影响。
   */
  resolvePanningSelectionConflict() {
    if (this.options.enabled !== !0 || this.options.rubberband !== !0)
      return;
    const t = this.graph.options.panning;
    if (!t || t.enabled === !1)
      return;
    (() => {
      var n, i;
      const o = (n = this.options.eventTypes) !== null && n !== void 0 ? n : [], r = (i = t.eventTypes) !== null && i !== void 0 ? i : [], a = new Set(r), l = o.some((h) => a.has(h)), c = Kw(t.modifiers, this.options.modifiers);
      return l && c;
    })() && this.graph.panning.disablePanning();
  }
  allowMultipleSelection(t) {
    return this.isMultiple() && Ge(t, this.options.multipleSelectionModifiers);
  }
  onCellMouseMove({ cell: t }) {
    this.movedMap.set(t, !0);
  }
  onCellMouseUp({ e: t, cell: e }) {
    const n = this.options;
    let i = this.disabled;
    !i && this.movedMap.has(e) && (i = n.selectCellOnMoved === !1, i || (i = n.selectNodeOnMoved === !1 && e.isNode()), i || (i = n.selectEdgeOnMoved === !1 && e.isEdge())), i || (this.allowMultipleSelection(t) ? this.unselectMap.has(e) ? this.unselectMap.delete(e) : this.isSelected(e) ? this.unselect(e) : this.select(e) : this.reset(e)), this.movedMap.delete(e);
  }
  onBoxMouseDown({ e: t, cell: e }) {
    this.disabled || this.allowMultipleSelection(t) && (this.unselect(e), this.unselectMap.set(e, !0));
  }
  getCells(t) {
    return (Array.isArray(t) ? t : [t]).map((e) => typeof e == "string" ? this.graph.getCellById(e) : e).filter((e) => e != null);
  }
  startRubberband(t) {
    return this.rubberbandDisabled || this.selectionImpl.startSelecting(t), this;
  }
  isMultiple() {
    return this.options.multiple !== !1;
  }
  enableMultiple() {
    return this.options.multiple = !0, this;
  }
  disableMultiple() {
    return this.options.multiple = !1, this;
  }
  setModifiers(t) {
    return this.options.modifiers = t, this;
  }
  setContent(t) {
    return this.selectionImpl.setContent(t), this;
  }
  setFilter(t) {
    return this.selectionImpl.setFilter(t), this;
  }
  dispose() {
    this.stopListening(), this.off(), this.selectionImpl.dispose(), qe(this.name);
  }
}
$([
  _()
], Pd.prototype, "dispose", null);
const US = `.x6-widget-minimap {
  position: relative;
  display: table-cell;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  user-select: none;
}
.x6-widget-minimap .x6-graph {
  display: inline-block;
  box-shadow: 0 0 4px 0 #eee;
  cursor: pointer;
}
.x6-widget-minimap .x6-graph > svg {
  pointer-events: none;
  shape-rendering: optimizespeed;
}
.x6-widget-minimap .x6-graph .x6-node * {
  /* stylelint-disable-next-line */
  vector-effect: initial;
}
.x6-widget-minimap-viewport {
  position: absolute;
  box-sizing: content-box !important;
  margin: -2px 0 0 -2px;
  border: 2px solid #31d0c6;
  cursor: move;
}
.x6-widget-minimap-viewport-zoom {
  position: absolute;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  margin: 0 -6px -6px 0;
  background-color: #fff;
  border: 2px solid #31d0c6;
  border-radius: 50%;
  cursor: nwse-resize;
}
`, KS = {
  width: 300,
  height: 200,
  padding: 10,
  scalable: !0,
  minScale: 0.01,
  maxScale: 16,
  graphOptions: {},
  createGraph: (s) => new E(s)
}, JS = {
  mousemove: "doAction",
  touchmove: "doAction",
  mouseup: "stopAction",
  touchend: "stopAction"
}, Td = "widget-minimap", kd = `${Td}-viewport`, jS = `${kd}-zoom`;
class GS extends Yt {
  get scroller() {
    return this.graph.getPlugin("scroller");
  }
  get graphContainer() {
    return this.scroller ? this.scroller.container : this.graph.container;
  }
  constructor(t) {
    super(), this.name = "minimap", this.options = Object.assign(Object.assign({}, KS), t), We(this.name, US);
  }
  init(t) {
    this.graph = t, this.updateViewport = zs(this.updateViewport.bind(this), 0), this.container = document.createElement("div"), k(this.container, this.prefixClassName(Td));
    const e = document.createElement("div");
    this.container.appendChild(e), this.viewport = document.createElement("div"), k(this.viewport, this.prefixClassName(kd)), this.options.scalable && (this.zoomHandle = document.createElement("div"), k(this.zoomHandle, this.prefixClassName(jS)), ne(this.zoomHandle, this.viewport)), Rt(this.container, this.viewport), st(this.container, {
      width: this.options.width,
      height: this.options.height,
      padding: this.options.padding
    }), this.options.container && this.options.container.appendChild(this.container), this.sourceGraph = this.graph;
    const n = Object.assign(Object.assign({}, this.options.graphOptions), { container: e, model: this.sourceGraph.model, interacting: !1, grid: !1, background: !1, embedding: !1, panning: !1 });
    this.targetGraph = this.options.createGraph ? this.options.createGraph(n) : new E(n), this.updatePaper(this.sourceGraph.options.width, this.sourceGraph.options.height), this.startListening();
  }
  startListening() {
    this.scroller ? lt.on(this.graphContainer, `scroll${this.getEventNamespace()}`, this.updateViewport) : (this.sourceGraph.on("translate", this.onTransform, this), this.sourceGraph.on("scale", this.onTransform, this), this.sourceGraph.on("model:updated", this.onModelUpdated, this)), this.sourceGraph.on("resize", this.updatePaper, this), this.delegateEvents({
      mousedown: "startAction",
      touchstart: "startAction",
      [`mousedown .${this.prefixClassName("graph")}`]: "scrollTo",
      [`touchstart .${this.prefixClassName("graph")}`]: "scrollTo"
    });
  }
  stopListening() {
    this.scroller ? lt.off(this.graphContainer, this.getEventNamespace()) : (this.sourceGraph.off("translate", this.onTransform, this), this.sourceGraph.off("scale", this.onTransform, this), this.sourceGraph.off("model:updated", this.onModelUpdated, this)), this.sourceGraph.off("resize", this.updatePaper, this), this.undelegateEvents();
  }
  onRemove() {
    this.stopListening(), this.targetGraph.dispose(!1);
  }
  onTransform(t) {
    (t.ui || this.targetGraphTransforming || !this.scroller) && this.updateViewport();
  }
  onModelUpdated() {
    this.targetGraph.zoomToFit();
  }
  updatePaper(t, e) {
    let n, i;
    typeof t == "object" ? (n = t.width, i = t.height) : (n = t, i = e);
    const o = this.sourceGraph.options, r = this.sourceGraph.transform.getScale(), a = this.options.width - 2 * this.options.padding, l = this.options.height - 2 * this.options.padding;
    n /= r.sx, i /= r.sy, this.ratio = Math.min(a / n, l / i);
    const c = this.ratio, h = o.x * c / r.sx, u = o.y * c / r.sy;
    return n *= c, i *= c, this.targetGraph.resize(n, i), this.targetGraph.translate(h, u), this.scroller ? this.targetGraph.scale(c, c) : this.targetGraph.zoomToFit(), this.updateViewport(), this;
  }
  updateViewport() {
    const t = this.sourceGraph.transform.getScale(), e = this.targetGraph.transform.getScale(), n = this.scroller ? this.scroller.clientToLocalPoint(0, 0) : this.graph.graphToLocal(0, 0), i = XA(this.targetGraph.container), o = this.targetGraph.translate();
    o.ty = o.ty || 0, this.geometry = {
      top: i.top + n.y * e.sy + o.ty,
      left: i.left + n.x * e.sx + o.tx,
      width: this.graphContainer.clientWidth * e.sx / t.sx,
      height: this.graphContainer.clientHeight * e.sy / t.sy
    }, st(this.viewport, this.geometry);
  }
  startAction(t) {
    const e = this.normalizeEvent(t), n = e.target === this.zoomHandle ? "zooming" : "panning", { tx: i, ty: o } = this.sourceGraph.translate(), r = {
      action: n,
      clientX: e.clientX,
      clientY: e.clientY,
      scrollLeft: this.graphContainer.scrollLeft,
      scrollTop: this.graphContainer.scrollTop,
      zoom: this.sourceGraph.zoom(),
      scale: this.sourceGraph.transform.getScale(),
      geometry: this.geometry,
      translateX: i,
      translateY: o
    };
    this.targetGraphTransforming = !0, this.delegateDocumentEvents(JS, r);
  }
  doAction(t) {
    const e = this.normalizeEvent(t), n = e.clientX, i = e.clientY, o = e.data;
    switch (o.action) {
      case "panning": {
        const r = this.sourceGraph.transform.getScale(), a = (n - o.clientX) * r.sx, l = (i - o.clientY) * r.sy;
        this.scroller ? (this.graphContainer.scrollLeft = o.scrollLeft + a / this.ratio, this.graphContainer.scrollTop = o.scrollTop + l / this.ratio) : this.sourceGraph.translate(o.translateX - a / this.ratio, o.translateY - l / this.ratio);
        break;
      }
      case "zooming": {
        const r = o.scale, a = o.geometry, l = 1 + (o.clientX - n) / a.width / r.sx;
        o.frameId && cancelAnimationFrame(o.frameId), o.frameId = requestAnimationFrame(() => {
          this.sourceGraph.zoom(l * o.zoom, {
            absolute: !0,
            minScale: this.options.minScale,
            maxScale: this.options.maxScale
          });
        });
        break;
      }
    }
  }
  stopAction() {
    this.undelegateDocumentEvents(), this.targetGraphTransforming = !1;
  }
  scrollTo(t) {
    const e = this.normalizeEvent(t);
    let n, i;
    const o = this.targetGraph.translate();
    if (o.ty = o.ty || 0, e.offsetX == null) {
      const l = Dn(this.targetGraph.container);
      n = e.pageX - l.left, i = e.pageY - l.top;
    } else
      n = e.offsetX, i = e.offsetY;
    const r = (n - o.tx) / this.ratio, a = (i - o.ty) / this.ratio;
    this.sourceGraph.centerPoint(r, a);
  }
  dispose() {
    this.remove(), qe(this.name);
  }
}
$([
  _()
], GS.prototype, "dispose", null);
const Zs = "graph-scroller", VS = `${Zs}-paged`, YS = `${Zs}-content`, HS = `${Zs}-background`, $l = "transition-in-progress", Co = "transitionend.graph-scroller-transition", WS = {
  padding() {
    const s = this.getClientSize(), t = Math.max(this.options.minVisibleWidth || 0, 1) || 1, e = Math.max(this.options.minVisibleHeight || 0, 1) || 1, n = Math.max(s.width - t, 0), i = Math.max(s.height - e, 0);
    return { left: n, top: i, right: n, bottom: i };
  },
  minVisibleWidth: 50,
  minVisibleHeight: 50,
  pageVisible: !1,
  pageBreak: !1,
  autoResize: !0
};
function Od(s) {
  const t = pt({}, WS, s);
  t.pageWidth == null && (t.pageWidth = s.graph.options.width), t.pageHeight == null && (t.pageHeight = s.graph.options.height);
  const e = s.graph.options;
  return e.background && t.enabled && t.background == null && (t.background = e.background, s.graph.background.clear()), t;
}
class Rd extends Yt {
  get graph() {
    return this.options.graph;
  }
  get model() {
    return this.graph.model;
  }
  constructor(t) {
    super(), this.padding = { left: 0, top: 0, right: 0, bottom: 0 }, this.options = Od(t), this.onUpdate = zs(this.onUpdate, 200);
    const e = this.graph.transform.getScale();
    this.sx = e.sx, this.sy = e.sy;
    const n = this.options.width || this.graph.options.width, i = this.options.height || this.graph.options.height;
    this.container = document.createElement("div"), k(this.container, this.prefixClassName(Zs)), st(this.container, { width: n, height: i }), this.options.pageVisible && k(this.container, this.prefixClassName(VS)), this.options.className && k(this.container, this.options.className);
    const o = this.graph.container;
    o.parentNode && hi(o, this.container), this.content = document.createElement("div"), k(this.content, this.prefixClassName(YS)), st(this.content, {
      width: this.graph.options.width,
      height: this.graph.options.height
    }), this.background = document.createElement("div"), k(this.background, this.prefixClassName(HS)), Rt(this.content, this.background), this.options.pageVisible || Rt(this.content, this.graph.view.grid), Rt(this.content, o), ne(this.content, this.container), this.startListening(), this.options.pageVisible || this.graph.grid.update(), this.backgroundManager = new qS(this), this.options.autoResize || this.update();
  }
  startListening() {
    const t = this.graph, e = this.model;
    t.on("scale", this.onScale, this), t.on("resize", this.onResize, this), t.on("before:print", this.storeScrollPosition, this), t.on("before:export", this.storeScrollPosition, this), t.on("after:print", this.restoreScrollPosition, this), t.on("after:export", this.restoreScrollPosition, this), e.on("reseted", this.onUpdate, this), e.on("cell:added", this.onUpdate, this), e.on("cell:removed", this.onUpdate, this), e.on("cell:changed", this.onUpdate, this), this.delegateBackgroundEvents();
  }
  stopListening() {
    const t = this.graph, e = this.model;
    t.off("scale", this.onScale, this), t.off("resize", this.onResize, this), t.off("beforeprint", this.storeScrollPosition, this), t.off("beforeexport", this.storeScrollPosition, this), t.off("afterprint", this.restoreScrollPosition, this), t.off("afterexport", this.restoreScrollPosition, this), e.off("reseted", this.onUpdate, this), e.off("cell:added", this.onUpdate, this), e.off("cell:removed", this.onUpdate, this), e.off("cell:changed", this.onUpdate, this), this.undelegateBackgroundEvents();
  }
  enableAutoResize() {
    this.options.autoResize = !0;
  }
  disableAutoResize() {
    this.options.autoResize = !1;
  }
  onUpdate() {
    this.options.autoResize && this.update();
  }
  delegateBackgroundEvents(t) {
    const e = t || ke.events;
    this.delegatedHandlers = Object.keys(e).reduce((n, i) => {
      const o = e[i];
      if (i.indexOf(" ") === -1)
        if (typeof o == "function")
          n[i] = o;
        else {
          let r = this.graph.view[o];
          typeof r == "function" && (r = r.bind(this.graph.view), n[i] = r);
        }
      return n;
    }, {}), this.onBackgroundEvent = this.onBackgroundEvent.bind(this), Object.keys(this.delegatedHandlers).forEach((n) => {
      this.delegateEvent(n, {
        guarded: !1
      }, this.onBackgroundEvent);
    });
  }
  undelegateBackgroundEvents() {
    Object.keys(this.delegatedHandlers).forEach((t) => {
      this.undelegateEvent(t, this.onBackgroundEvent);
    });
  }
  onBackgroundEvent(t) {
    let e = !1;
    const n = t.target;
    if (this.options.pageVisible)
      this.options.background ? e = this.background === n : e = this.content === n;
    else {
      const i = this.graph.view;
      e = i.background === n || i.grid === n;
    }
    if (e) {
      const i = this.delegatedHandlers[t.type];
      typeof i == "function" && i.apply(this.graph, arguments);
    }
  }
  onResize() {
    this.cachedCenterPoint && (this.centerPoint(this.cachedCenterPoint.x, this.cachedCenterPoint.y), this.updatePageBreak());
  }
  onScale({ sx: t, sy: e, ox: n, oy: i }) {
    this.updateScale(t, e), (n || i) && (this.centerPoint(n, i), this.updatePageBreak()), typeof this.options.autoResizeOptions == "function" && this.update();
  }
  storeScrollPosition() {
    this.cachedScrollLeft = this.container.scrollLeft, this.cachedScrollTop = this.container.scrollTop;
  }
  restoreScrollPosition() {
    this.container.scrollLeft = this.cachedScrollLeft, this.container.scrollTop = this.cachedScrollTop, this.cachedScrollLeft = null, this.cachedScrollTop = null;
  }
  storeClientSize() {
    this.cachedClientSize = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
  }
  restoreClientSize() {
    this.cachedClientSize = null;
  }
  beforeManipulation() {
    (La || Fa) && st(this.container, { visibility: "hidden" });
  }
  afterManipulation() {
    (La || Fa) && st(this.container, { visibility: "visible" });
  }
  updatePageSize(t, e) {
    t != null && (this.options.pageWidth = t), e != null && (this.options.pageHeight = e), this.updatePageBreak();
  }
  updatePageBreak() {
    if (this.pageBreak && this.pageBreak.parentNode && this.pageBreak.parentNode.removeChild(this.pageBreak), this.pageBreak = null, this.options.pageVisible && this.options.pageBreak) {
      const t = this.graph.options.width, e = this.graph.options.height, n = this.options.pageWidth * this.sx, i = this.options.pageHeight * this.sy;
      if (n === 0 || i === 0)
        return;
      if (t > n || e > i) {
        let o = !1;
        const r = document.createElement("div");
        for (let a = 1, l = Math.floor(t / n); a < l; a += 1) {
          const c = document.createElement("div");
          k(c, this.prefixClassName("graph-pagebreak-vertical")), st(c, { left: a * n }), ne(c, r), o = !0;
        }
        for (let a = 1, l = Math.floor(e / i); a < l; a += 1) {
          const c = document.createElement("div");
          k(c, this.prefixClassName("graph-pagebreak-horizontal")), st(c, { top: a * i }), ne(c, r), o = !0;
        }
        o && (k(r, this.prefixClassName("graph-pagebreak")), YC(this.graph.view.grid, r), this.pageBreak = r);
      }
    }
  }
  update() {
    const t = this.getClientSize();
    this.cachedCenterPoint = this.clientToLocalPoint(t.width / 2, t.height / 2);
    let e = this.options.autoResizeOptions;
    typeof e == "function" && (e = N(e, this, this));
    const n = Object.assign({ gridWidth: this.options.pageWidth, gridHeight: this.options.pageHeight, allowNewOrigin: "negative" }, e);
    this.graph.fitToContent(this.getFitToContentOptions(n));
  }
  getFitToContentOptions(t) {
    const e = this.sx, n = this.sy;
    return t.gridWidth && (t.gridWidth *= e), t.gridHeight && (t.gridHeight *= n), t.minWidth && (t.minWidth *= e), t.minHeight && (t.minHeight *= n), typeof t.padding == "object" ? t.padding = {
      left: (t.padding.left || 0) * e,
      right: (t.padding.right || 0) * e,
      top: (t.padding.top || 0) * n,
      bottom: (t.padding.bottom || 0) * n
    } : typeof t.padding == "number" && (t.padding *= e), this.options.autoResize || (t.contentArea = I.create()), t;
  }
  updateScale(t, e) {
    const n = this.graph.options, i = t / this.sx, o = e / this.sy;
    this.sx = t, this.sy = e, this.graph.translate(n.x * i, n.y * o), this.graph.transform.resize(n.width * i, n.height * o);
  }
  scrollbarPosition(t, e) {
    if (t == null && e == null)
      return {
        left: this.container.scrollLeft,
        top: this.container.scrollTop
      };
    const n = {};
    return typeof t == "number" && (n.scrollLeft = t), typeof e == "number" && (n.scrollTop = e), Lo(this.container, n), this;
  }
  /**
   * Try to scroll to ensure that the position (x,y) on the graph (in local
   * coordinates) is at the center of the viewport. If only one of the
   * coordinates is specified, only scroll in the specified dimension and
   * keep the other coordinate unchanged.
   */
  scrollToPoint(t, e) {
    const n = this.getClientSize(), i = this.graph.matrix(), o = {};
    return typeof t == "number" && (o.scrollLeft = t - n.width / 2 + i.e + (this.padding.left || 0)), typeof e == "number" && (o.scrollTop = e - n.height / 2 + i.f + (this.padding.top || 0)), Lo(this.container, o), this;
  }
  /**
   * Try to scroll to ensure that the center of graph content is at the
   * center of the viewport.
   */
  scrollToContent() {
    const t = this.sx, e = this.sy, n = this.graph.getContentArea().getCenter();
    return this.scrollToPoint(n.x * t, n.y * e);
  }
  /**
   * Try to scroll to ensure that the center of cell is at the center of
   * the viewport.
   */
  scrollToCell(t) {
    const e = this.sx, n = this.sy, i = t.getBBox().getCenter();
    return this.scrollToPoint(i.x * e, i.y * n);
  }
  /**
   * The center methods are more aggressive than the scroll methods. These
   * methods position the graph so that a specific point on the graph lies
   * at the center of the viewport, adding paddings around the paper if
   * necessary (e.g. if the requested point lies in a corner of the paper).
   * This means that the requested point will always move into the center
   * of the viewport. (Use the scroll functions to avoid adding paddings
   * and only scroll the viewport as far as the graph boundary.)
   */
  /**
   * Position the center of graph to the center of the viewport.
   */
  center(t) {
    return this.centerPoint(t);
  }
  centerPoint(t, e, n) {
    const i = this.graph.matrix(), o = i.a, r = i.d, a = -i.e, l = -i.f, c = a + this.graph.options.width, h = l + this.graph.options.height;
    let u;
    if (this.storeClientSize(), typeof t == "number" || typeof e == "number") {
      u = n;
      const x = this.getVisibleArea().getCenter();
      typeof t == "number" ? t *= o : t = x.x, typeof e == "number" ? e *= r : e = x.y;
    } else
      u = t, t = (a + c) / 2, e = (l + h) / 2;
    if (u && u.padding)
      return this.positionPoint({ x: t, y: e }, "50%", "50%", u);
    const d = this.getPadding(), g = this.getClientSize(), f = g.width / 2, p = g.height / 2, m = f - d.left - t + a, b = f - d.right + t - c, y = p - d.top - e + l, A = p - d.bottom + e - h;
    this.addPadding(Math.max(m, 0), Math.max(b, 0), Math.max(y, 0), Math.max(A, 0));
    const w = this.scrollToPoint(t, e);
    return this.restoreClientSize(), w;
  }
  centerContent(t) {
    return this.positionContent("center", t);
  }
  centerCell(t, e) {
    return this.positionCell(t, "center", e);
  }
  /**
   * The position methods are a more general version of the center methods.
   * They position the graph so that a specific point on the graph lies at
   * requested coordinates inside the viewport.
   */
  /**
   *
   */
  positionContent(t, e) {
    const n = this.graph.getContentArea(e);
    return this.positionRect(n, t, e);
  }
  positionCell(t, e, n) {
    const i = t.getBBox();
    return this.positionRect(i, e, n);
  }
  positionRect(t, e, n) {
    const i = I.create(t);
    switch (e) {
      case "center":
        return this.positionPoint(i.getCenter(), "50%", "50%", n);
      case "top":
        return this.positionPoint(i.getTopCenter(), "50%", 0, n);
      case "top-right":
        return this.positionPoint(i.getTopRight(), "100%", 0, n);
      case "right":
        return this.positionPoint(i.getRightMiddle(), "100%", "50%", n);
      case "bottom-right":
        return this.positionPoint(i.getBottomRight(), "100%", "100%", n);
      case "bottom":
        return this.positionPoint(i.getBottomCenter(), "50%", "100%", n);
      case "bottom-left":
        return this.positionPoint(i.getBottomLeft(), 0, "100%", n);
      case "left":
        return this.positionPoint(i.getLeftMiddle(), 0, "50%", n);
      case "top-left":
        return this.positionPoint(i.getTopLeft(), 0, 0, n);
      default:
        return this;
    }
  }
  positionPoint(t, e, n, i = {}) {
    const { padding: o } = i, r = G(i, ["padding"]), a = he(o), l = I.fromSize(this.getClientSize()), c = l.clone().moveAndExpand({
      x: a.left,
      y: a.top,
      width: -a.right - a.left,
      height: -a.top - a.bottom
    });
    e = Wt(e, Math.max(0, c.width)), e < 0 && (e = c.width + e), n = Wt(n, Math.max(0, c.height)), n < 0 && (n = c.height + n);
    const h = c.getTopLeft().translate(e, n), u = l.getCenter().diff(h), d = this.zoom(), g = u.scale(1 / d, 1 / d), f = C.create(t).translate(g);
    return this.centerPoint(f.x, f.y, r);
  }
  zoom(t, e) {
    if (t == null)
      return this.sx;
    e = e || {};
    let n, i;
    const o = this.getClientSize(), r = this.clientToLocalPoint(o.width / 2, o.height / 2);
    let a = t, l = t;
    if (e.absolute || (a += this.sx, l += this.sy), e.scaleGrid && (a = Math.round(a / e.scaleGrid) * e.scaleGrid, l = Math.round(l / e.scaleGrid) * e.scaleGrid), e.maxScale && (a = Math.min(e.maxScale, a), l = Math.min(e.maxScale, l)), e.minScale && (a = Math.max(e.minScale, a), l = Math.max(e.minScale, l)), a = this.graph.transform.clampScale(a), l = this.graph.transform.clampScale(l), e.center) {
      const c = a / this.sx, h = l / this.sy;
      n = e.center.x - (e.center.x - r.x) / c, i = e.center.y - (e.center.y - r.y) / h;
    } else
      n = r.x, i = r.y;
    return this.beforeManipulation(), this.graph.transform.scale(a, l, n, i, !1), this.centerPoint(n, i), this.afterManipulation(), this;
  }
  zoomToRect(t, e = {}) {
    const n = I.create(t), i = this.graph;
    if (e.contentArea = n, e.viewportArea == null) {
      const r = this.container.getBoundingClientRect();
      e.viewportArea = {
        x: i.options.x,
        y: i.options.y,
        width: r.width,
        height: r.height
      };
    }
    this.beforeManipulation(), i.transform.scaleContentToFitImpl(e, !1);
    const o = n.getCenter();
    return this.centerPoint(o.x, o.y), this.afterManipulation(), this;
  }
  zoomToFit(t = {}) {
    return this.zoomToRect(this.graph.getContentArea(t), t);
  }
  transitionToPoint(t, e, n) {
    typeof t == "object" ? (n = e, e = t.y, t = t.x) : e = e, n == null && (n = {});
    let i, o;
    const r = this.sx, a = Math.max(n.scale || r, 1e-6), l = this.getClientSize(), c = new C(t, e), h = this.clientToLocalPoint(l.width / 2, l.height / 2);
    if (r === a) {
      const d = h.diff(c).scale(r, r).round();
      i = `translate(${d.x}px,${d.y}px)`;
    } else {
      const d = a / (r - a) * c.distance(h), g = h.clone().move(c, d), f = this.localToBackgroundPoint(g).round();
      i = `scale(${a / r})`, o = `${f.x}px ${f.y}px`;
    }
    const u = n.onTransitionEnd;
    return k(this.container, $l), lt.off(this.content, Co), lt.on(this.content, Co, (d) => {
      this.syncTransition(a, { x: t, y: e }), typeof u == "function" && N(u, this, d.originalEvent);
    }), st(this.content, {
      transform: i,
      transformOrigin: o,
      transition: "transform",
      transitionDuration: n.duration || "1s",
      transitionDelay: n.delay,
      transitionTimingFunction: n.timing
    }), this;
  }
  syncTransition(t, e) {
    return this.beforeManipulation(), this.graph.scale(t), this.removeTransition(), this.centerPoint(e.x, e.y), this.afterManipulation(), this;
  }
  removeTransition() {
    return ut(this.container, $l), lt.off(this.content, Co), st(this.content, {
      transform: "",
      transformOrigin: "",
      transition: "",
      transitionDuration: "",
      transitionDelay: "",
      transitionTimingFunction: ""
    }), this;
  }
  transitionToRect(t, e = {}) {
    const n = I.create(t), i = e.maxScale || 1 / 0, o = e.minScale || Number.MIN_VALUE, r = e.scaleGrid || null, a = e.visibility || 1, l = e.center ? C.create(e.center) : n.getCenter(), c = this.getClientSize(), h = c.width * a, u = c.height * a;
    let d = new I(l.x - h / 2, l.y - u / 2, h, u).getMaxUniformScaleToFit(n, l);
    return d = Math.min(d, i), r && (d = Math.floor(d / r) * r), d = Math.max(o, d), this.transitionToPoint(l, Object.assign({ scale: d }, e));
  }
  startPanning(t) {
    const e = this.normalizeEvent(t);
    this.clientX = e.clientX, this.clientY = e.clientY, this.trigger("pan:start", { e }), lt.on(document.body, {
      "mousemove.panning touchmove.panning": this.pan.bind(this),
      "mouseup.panning touchend.panning": this.stopPanning.bind(this),
      "mouseleave.panning": this.stopPanning.bind(this)
    }), lt.on(window, "mouseup.panning", this.stopPanning.bind(this));
  }
  pan(t) {
    const e = this.normalizeEvent(t), n = e.clientX - this.clientX, i = e.clientY - this.clientY;
    this.container.scrollTop -= i, this.container.scrollLeft -= n, this.clientX = e.clientX, this.clientY = e.clientY, this.trigger("panning", { e });
  }
  stopPanning(t) {
    lt.off(document.body, ".panning"), lt.off(window, ".panning"), this.trigger("pan:stop", { e: t });
  }
  clientToLocalPoint(t, e) {
    let n = typeof t == "object" ? t.x : t, i = typeof t == "object" ? t.y : e;
    const o = this.graph.matrix();
    return n += this.container.scrollLeft - this.padding.left - o.e, i += this.container.scrollTop - this.padding.top - o.f, new C(n / o.a, i / o.d);
  }
  localToBackgroundPoint(t, e) {
    const n = typeof t == "object" ? C.create(t) : new C(t, e), i = this.graph.matrix(), o = this.padding;
    return Me(n, i).translate(o.left, o.top);
  }
  resize(t, e) {
    let n = t ?? this.container.offsetWidth, i = e ?? this.container.offsetHeight;
    typeof n == "number" && (n = Math.round(n)), typeof i == "number" && (i = Math.round(i)), this.options.width = n, this.options.height = i, st(this.container, { width: n, height: i }), this.update();
  }
  getClientSize() {
    return this.cachedClientSize ? this.cachedClientSize : {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
  }
  autoScroll(t, e) {
    const i = this.container, o = i.getBoundingClientRect();
    let r = 0, a = 0;
    return t <= o.left + 10 && (r = -10), e <= o.top + 10 && (a = -10), t >= o.right - 10 && (r = 10), e >= o.bottom - 10 && (a = 10), r !== 0 && (i.scrollLeft += r), a !== 0 && (i.scrollTop += a), {
      scrollerX: r,
      scrollerY: a
    };
  }
  addPadding(t, e, n, i) {
    let o = this.getPadding();
    this.padding = {
      left: Math.round(o.left + (t || 0)),
      top: Math.round(o.top + (n || 0)),
      bottom: Math.round(o.bottom + (i || 0)),
      right: Math.round(o.right + (e || 0))
    }, o = this.padding, st(this.content, {
      width: o.left + this.graph.options.width + o.right,
      height: o.top + this.graph.options.height + o.bottom
    });
    const r = this.graph.container;
    return r.style.left = `${this.padding.left}px`, r.style.top = `${this.padding.top}px`, this;
  }
  getPadding() {
    const t = this.options.padding;
    return he(typeof t == "function" ? N(t, this, this) : t);
  }
  /**
   * Returns the untransformed size and origin of the current viewport.
   */
  getVisibleArea() {
    const t = this.graph.matrix(), e = this.getClientSize(), n = {
      x: this.container.scrollLeft || 0,
      y: this.container.scrollTop || 0,
      width: e.width,
      height: e.height
    }, i = Zt(n, t.inverse());
    return i.x -= (this.padding.left || 0) / this.sx, i.y -= (this.padding.top || 0) / this.sy, i;
  }
  isCellVisible(t, e = {}) {
    const n = t.getBBox(), i = this.getVisibleArea();
    return e.strict ? i.containsRect(n) : i.isIntersectWithRect(n);
  }
  isPointVisible(t) {
    return this.getVisibleArea().containsPoint(t);
  }
  /**
   * Lock the current viewport by disabling user scrolling.
   */
  lock() {
    return st(this.container, { overflow: "hidden" }), this;
  }
  /**
   * Enable user scrolling if previously locked.
   */
  unlock() {
    return st(this.container, { overflow: "scroll" }), this;
  }
  onRemove() {
    this.stopListening();
  }
  dispose() {
    hi(this.container, this.graph.container), this.remove();
  }
}
$([
  _()
], Rd.prototype, "dispose", null);
class qS extends Vr {
  get elem() {
    return this.scroller.background;
  }
  constructor(t) {
    super(t.graph), this.scroller = t, t.options.background && this.draw(t.options.background);
  }
  init() {
    this.graph.on("scale", this.update, this), this.graph.on("translate", this.update, this);
  }
  updateBackgroundOptions(t) {
    this.scroller.options.background = t;
  }
}
const XS = `.x6-graph-scroller {
  position: relative;
  box-sizing: border-box;
  overflow: scroll;
  outline: none;
}
.x6-graph-scroller-content {
  position: relative;
}
.x6-graph-scroller-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.x6-graph-scroller .x6-graph {
  position: absolute;
  display: inline-block;
  margin: 0;
  box-shadow: none;
}
.x6-graph-scroller .x6-graph > svg {
  display: block;
}
.x6-graph-scroller.x6-graph-scroller-paged .x6-graph {
  box-shadow: 0 0 4px 0 #eee;
}
.x6-graph-scroller.x6-graph-scroller-pannable[data-panning='false'] {
  cursor: grab;
}
.x6-graph-scroller.x6-graph-scroller-pannable[data-panning='true'] {
  cursor: grabbing;
  user-select: none;
}
.x6-graph-pagebreak {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.x6-graph-pagebreak-vertical {
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 1px;
  border-left: 1px dashed #bdbdbd;
}
.x6-graph-pagebreak-horizontal {
  position: absolute;
  right: 0;
  left: 0;
  box-sizing: border-box;
  height: 1px;
  border-top: 1px dashed #bdbdbd;
}
`;
E.prototype.lockScroller = function() {
  const s = this.getPlugin("scroller");
  return s && s.lockScroller(), this;
};
E.prototype.unlockScroller = function() {
  const s = this.getPlugin("scroller");
  return s && s.unlockScroller(), this;
};
E.prototype.updateScroller = function() {
  const s = this.getPlugin("scroller");
  return s && s.updateScroller(), this;
};
E.prototype.getScrollbarPosition = function() {
  const s = this.getPlugin("scroller");
  return s ? s.getScrollbarPosition() : {
    left: 0,
    top: 0
  };
};
E.prototype.setScrollbarPosition = function(s, t) {
  const e = this.getPlugin("scroller");
  return e && e.setScrollbarPosition(s, t), this;
};
class Dd extends Gt {
  get pannable() {
    return this.options ? typeof this.options.pannable == "object" ? this.options.pannable.enabled : !!this.options.pannable : !1;
  }
  get container() {
    return this.scrollerImpl.container;
  }
  constructor(t = {}) {
    super(), this.name = "scroller", this.options = t, We(this.name, XS);
  }
  init(t) {
    this.graph = t;
    const e = Od(Object.assign(Object.assign({ enabled: !0 }, this.options), { graph: t }));
    this.options = e, this.scrollerImpl = new Rd(e), this.setup(), this.autoDisableGraphPanning(), this.startListening(), this.updateClassName(), this.scrollerImpl.center();
  }
  // #region api
  resize(t, e) {
    this.scrollerImpl.resize(t, e);
  }
  resizePage(t, e) {
    this.scrollerImpl.updatePageSize(t, e);
  }
  zoom(t, e) {
    return typeof t > "u" ? this.scrollerImpl.zoom() : (this.scrollerImpl.zoom(t, e), this);
  }
  zoomTo(t, e = {}) {
    return this.scrollerImpl.zoom(t, Object.assign(Object.assign({}, e), { absolute: !0 })), this;
  }
  zoomToRect(t, e = {}) {
    return this.scrollerImpl.zoomToRect(t, e), this;
  }
  zoomToFit(t = {}) {
    return this.scrollerImpl.zoomToFit(t), this;
  }
  center(t) {
    return this.centerPoint(t);
  }
  centerPoint(t, e, n) {
    return this.scrollerImpl.centerPoint(t, e, n), this;
  }
  centerContent(t) {
    return this.scrollerImpl.centerContent(t), this;
  }
  centerCell(t, e) {
    return this.scrollerImpl.centerCell(t, e), this;
  }
  positionPoint(t, e, n, i = {}) {
    return this.scrollerImpl.positionPoint(t, e, n, i), this;
  }
  positionRect(t, e, n) {
    return this.scrollerImpl.positionRect(t, e, n), this;
  }
  positionCell(t, e, n) {
    return this.scrollerImpl.positionCell(t, e, n), this;
  }
  positionContent(t, e) {
    return this.scrollerImpl.positionContent(t, e), this;
  }
  drawBackground(t, e) {
    return (this.graph.options.background == null || !e) && this.scrollerImpl.backgroundManager.draw(t), this;
  }
  clearBackground(t) {
    return (this.graph.options.background == null || !t) && this.scrollerImpl.backgroundManager.clear(), this;
  }
  isPannable() {
    return this.pannable;
  }
  enablePanning() {
    this.pannable || (this.options.pannable = !0, this.updateClassName());
  }
  disablePanning() {
    this.pannable && (this.options.pannable = !1, this.updateClassName());
  }
  togglePanning(t) {
    return t == null ? this.isPannable() ? this.disablePanning() : this.enablePanning() : t !== this.isPannable() && (t ? this.enablePanning() : this.disablePanning()), this;
  }
  lockScroller() {
    return this.scrollerImpl.lock(), this;
  }
  unlockScroller() {
    return this.scrollerImpl.unlock(), this;
  }
  updateScroller() {
    return this.scrollerImpl.update(), this;
  }
  getScrollbarPosition() {
    return this.scrollerImpl.scrollbarPosition();
  }
  setScrollbarPosition(t, e) {
    return this.scrollerImpl.scrollbarPosition(t, e), this;
  }
  scrollToPoint(t, e) {
    return this.scrollerImpl.scrollToPoint(t, e), this;
  }
  scrollToContent() {
    return this.scrollerImpl.scrollToContent(), this;
  }
  scrollToCell(t) {
    return this.scrollerImpl.scrollToCell(t), this;
  }
  transitionToPoint(t, e, n) {
    return this.scrollerImpl.transitionToPoint(t, e, n), this;
  }
  transitionToRect(t, e = {}) {
    return this.scrollerImpl.transitionToRect(t, e), this;
  }
  enableAutoResize() {
    this.scrollerImpl.enableAutoResize();
  }
  disableAutoResize() {
    this.scrollerImpl.disableAutoResize();
  }
  autoScroll(t, e) {
    return this.scrollerImpl.autoScroll(t, e);
  }
  clientToLocalPoint(t, e) {
    return this.scrollerImpl.clientToLocalPoint(t, e);
  }
  getVisibleArea() {
    return this.scrollerImpl.getVisibleArea();
  }
  isCellVisible(t, e = {}) {
    return this.scrollerImpl.isCellVisible(t, e);
  }
  isPointVisible(t) {
    return this.scrollerImpl.isPointVisible(t);
  }
  // #endregion
  setup() {
    this.scrollerImpl.on("*", (t, e) => {
      this.trigger(t, e);
    });
  }
  startListening() {
    let t = [];
    const e = this.options.pannable;
    typeof e == "object" ? t = e.eventTypes || [] : t = ["leftMouseDown"], t.includes("leftMouseDown") && (this.graph.on("blank:mousedown", this.preparePanning, this), this.graph.on("node:unhandled:mousedown", this.preparePanning, this), this.graph.on("edge:unhandled:mousedown", this.preparePanning, this)), t.includes("rightMouseDown") && (this.onRightMouseDown = this.onRightMouseDown.bind(this), lt.on(this.scrollerImpl.container, "mousedown", this.onRightMouseDown));
  }
  stopListening() {
    let t = [];
    const e = this.options.pannable;
    typeof e == "object" ? t = e.eventTypes || [] : t = ["leftMouseDown"], t.includes("leftMouseDown") && (this.graph.off("blank:mousedown", this.preparePanning, this), this.graph.off("node:unhandled:mousedown", this.preparePanning, this), this.graph.off("edge:unhandled:mousedown", this.preparePanning, this)), t.includes("rightMouseDown") && lt.off(this.scrollerImpl.container, "mousedown", this.onRightMouseDown);
  }
  onRightMouseDown(t) {
    t.button === 2 && this.allowPanning(t, !0) && (this.updateClassName(!0), this.scrollerImpl.startPanning(t), this.scrollerImpl.once("pan:stop", () => this.updateClassName(!1)));
  }
  preparePanning({ e: t }) {
    const e = this.allowPanning(t, !0), n = this.graph.getPlugin("selection"), i = n && n.allowRubberband(t, !0);
    (e || this.allowPanning(t) && !i) && (this.updateClassName(!0), this.scrollerImpl.startPanning(t), this.scrollerImpl.once("pan:stop", () => this.updateClassName(!1)));
  }
  allowPanning(t, e) {
    return this.pannable && Ge(t, this.options.modifiers, e);
  }
  updateClassName(t) {
    const e = this.scrollerImpl.container, n = nt.prefix("graph-scroller-pannable");
    this.pannable ? (k(e, n), e.dataset.panning = (!!t).toString()) : ut(e, n);
  }
  /**
   * 当 Scroller 插件启用时，默认关闭 Graph 的内置 panning，
   * 以避免滚动容器的拖拽与画布平移产生冲突。
   */
  autoDisableGraphPanning() {
    var t;
    const e = (t = this.graph) === null || t === void 0 ? void 0 : t.panning;
    e != null && e.pannable && (e.disablePanning(), console.warn("Detected Scroller plugin; Graph panning has been disabled by default to avoid conflicts."));
  }
  dispose() {
    this.scrollerImpl.dispose(), this.stopListening(), this.off(), qe(this.name);
  }
}
$([
  _()
], Dd.prototype, "dispose", null);
function rs(s, t) {
  return s.reduce((e, n) => Math.max(n == null ? void 0 : n.getSize()[t], e), 0);
}
function $S(s, t, e) {
  const n = [];
  for (let i = e * t, o = i + e; i < o; i += 1)
    s[i] && n.push(s[i]);
  return n;
}
function _S(s, t, e) {
  const n = [];
  for (let i = t, o = s.length; i < o; i += e)
    s[i] && n.push(s[i]);
  return n;
}
function _l(s, t) {
  return s.reduce((e, n, i) => (e.push(e[i] + n), e), [t || 0]);
}
function ZS(s, t = {}) {
  const e = qt.isModel(s) ? s : new qt().resetCells(s, {
    sort: !1,
    dryrun: !0
  }), n = e.getNodes(), i = t.columns || 1, o = Math.ceil(n.length / i), r = t.dx || 0, a = t.dy || 0, l = t.center !== !1, c = t.resizeToFit === !0, h = t.marginX || 0, u = t.marginY || 0, d = [];
  let g = t.columnWidth;
  if (g === "compact")
    for (let y = 0; y < i; y += 1) {
      const A = _S(n, y, i);
      d.push(rs(A, "width") + r);
    }
  else {
    (g == null || g === "auto") && (g = rs(n, "width") + r);
    for (let y = 0; y < i; y += 1)
      d.push(g);
  }
  const f = _l(d, h), p = [];
  let m = t.rowHeight;
  if (m === "compact")
    for (let y = 0; y < o; y += 1) {
      const A = $S(n, y, i);
      p.push(rs(A, "height") + a);
    }
  else {
    (m == null || m === "auto") && (m = rs(n, "height") + a);
    for (let y = 0; y < o; y += 1)
      p.push(m);
  }
  const b = _l(p, u);
  e.startBatch("layout"), n.forEach((y, A) => {
    const w = A % i, x = Math.floor(A / i), M = d[w], v = p[x];
    let S = 0, B = 0, P = y.getSize();
    if (c) {
      let T = M - 2 * r, O = v - 2 * a;
      const J = P.height * (P.width ? T / P.width : 1), V = P.width * (P.height ? O / P.height : 1);
      v < J ? T = V : O = J, P = {
        width: T,
        height: O
      }, y.setSize(P, t);
    }
    l && (S = (M - P.width) / 2, B = (v - P.height) / 2), y.position(f[w] + r + S, b[x] + a + B, t);
  }), e.stopBatch("layout");
}
const tM = `.x6-widget-dnd {
  position: absolute;
  top: -10000px;
  left: -10000px;
  z-index: 999999;
  display: none;
  cursor: move;
  opacity: 0.7;
  pointer-events: 'cursor';
}
.x6-widget-dnd.dragging {
  display: inline-block;
}
.x6-widget-dnd.dragging * {
  pointer-events: none !important;
}
.x6-widget-dnd .x6-graph {
  background: transparent;
  box-shadow: none;
}
.x6-widget-stencil {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.x6-widget-stencil::after {
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 20px;
  padding: 8px 0;
  line-height: 20px;
  text-align: center;
  opacity: 0;
  transition: top 0.1s linear, opacity 0.1s linear;
  content: ' ';
  pointer-events: none;
}
.x6-widget-stencil-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
.x6-widget-stencil .x6-node [magnet]:not([magnet='passive']) {
  pointer-events: none;
}
.x6-widget-stencil-group {
  padding: 0;
  padding-bottom: 8px;
  overflow: hidden;
  user-select: none;
}
.x6-widget-stencil-group.collapsed {
  height: auto;
  padding-bottom: 0;
}
.x6-widget-stencil-group-title {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding: 4px;
  cursor: pointer;
}
.x6-widget-stencil-title,
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
}
.x6-widget-stencil .unmatched {
  opacity: 0.3;
}
.x6-widget-stencil .x6-node.unmatched {
  display: none;
}
.x6-widget-stencil-group.unmatched {
  display: none;
}
.x6-widget-stencil-search-text {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  max-height: 30px;
  line-height: 30px;
  outline: 0;
}
.x6-widget-stencil.not-found::after {
  opacity: 1;
  content: attr(data-not-found-text);
}
.x6-widget-stencil.not-found.searchable::after {
  top: 30px;
}
.x6-widget-stencil.not-found.searchable.collapsable::after {
  top: 50px;
}
.x6-widget-stencil {
  color: #333;
  background: #f5f5f5;
}
.x6-widget-stencil-content {
  position: absolute;
  top: 32px;
}
.x6-widget-stencil.searchable > .x6-widget-stencil-content {
  top: 80px;
}
.x6-widget-stencil.not-found::after {
  position: absolute;
}
.x6-widget-stencil.not-found.searchable.collapsable::after {
  top: 80px;
}
.x6-widget-stencil.not-found.searchable::after {
  top: 60px;
}
.x6-widget-stencil-group {
  height: auto;
  margin-bottom: 1px;
  padding: 0;
  transition: none;
}
  .x6-widget-stencil-group .x6-graph {
    background: transparent;
    box-shadow: none;
  }

  .x6-widget-stencil .x6-node.x6-node-immovable {
    cursor: move;
  }
.x6-widget-stencil-group.collapsed {
  height: auto;
  max-height: 31px;
}
.x6-widget-stencil-title,
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  position: relative;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  padding: 0 5px 0 8px;
  color: #666;
  font-weight: 700;
  font-size: 12px;
  line-height: 32px;
  cursor: default;
  transition: all 0.3;
}
.x6-widget-stencil-title:hover,
.x6-widget-stencil-group > .x6-widget-stencil-group-title:hover {
  color: #444;
}
.x6-widget-stencil-title {
  background: #e9e9e9;
}
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  background: #ededed;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title {
  padding-left: 32px;
  cursor: pointer;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title::before {
  position: absolute;
  top: 6px;
  left: 8px;
  display: block;
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 0 0;
  border: none;
  content: ' ';
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title::before {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOS4zNzUuNUM0LjY4Ny41Ljg3NSA0LjMxMy44NzUgOWMwIDQuNjg4IDMuODEyIDguNSA4LjUgOC41IDQuNjg3IDAgOC41LTMuODEyIDguNS04LjUgMC00LjY4Ny0zLjgxMy04LjUtOC41LTguNXptMCAxNS44ODZDNS4zMDMgMTYuMzg2IDEuOTkgMTMuMDcyIDEuOTkgOXMzLjMxMi03LjM4NSA3LjM4NS03LjM4NVMxNi43NiA0LjkyOCAxNi43NiA5YzAgNC4wNzItMy4zMTMgNy4zODYtNy4zODUgNy4zODZ6Ii8+PHBhdGggZD0iTTEyLjc1MyA4LjQ0M0g1Ljk5N2EuNTU4LjU1OCAwIDAwMCAxLjExNmg2Ljc1NmEuNTU4LjU1OCAwIDAwMC0xLjExNnoiLz48L2c+PC9zdmc+');
  opacity: 0.4;
  transition: all 0.3s;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title:hover::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title:hover::before {
  opacity: 0.6;
}
.x6-widget-stencil.collapsable.collapsed > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable.collapsed > .x6-widget-stencil-group-title::before {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOS4zNzUuNUM0LjY4Ny41Ljg3NSA0LjMxMy44NzUgOWMwIDQuNjg4IDMuODEyIDguNSA4LjUgOC41IDQuNjg3IDAgOC41LTMuODEyIDguNS04LjUgMC00LjY4Ny0zLjgxMy04LjUtOC41LTguNXptMCAxNS44ODZDNS4zMDMgMTYuMzg2IDEuOTkgMTMuMDcyIDEuOTkgOXMzLjMxMi03LjM4NSA3LjM4NS03LjM4NVMxNi43NiA0LjkyOCAxNi43NiA5YzAgNC4wNzItMy4zMTMgNy4zODYtNy4zODUgNy4zODZ6Ii8+PHBhdGggZD0iTTEyLjc1MyA4LjQ0M0g1Ljk5N2EuNTU4LjU1OCAwIDAwMCAxLjExNmg2Ljc1NmEuNTU4LjU1OCAwIDAwMC0xLjExNnoiLz48cGF0aCBkPSJNOC44MTcgNS42MjN2Ni43NTZhLjU1OC41NTggMCAwMDEuMTE2IDBWNS42MjNhLjU1OC41NTggMCAxMC0xLjExNiAweiIvPjwvZz48L3N2Zz4=');
  opacity: 0.4;
}
.x6-widget-stencil.collapsable.collapsed > .x6-widget-stencil-title:hover::before,
.x6-widget-stencil-group.collapsable.collapsed > .x6-widget-stencil-group-title:hover::before {
  opacity: 0.6;
}
.x6-widget-stencil input[type='search'] {
  appearance: textfield;
}
.x6-widget-stencil input[type='search']::-webkit-search-cancel-button,
.x6-widget-stencil input[type='search']::-webkit-search-decoration {
  appearance: none;
}
.x6-widget-stencil-search-text {
  display: block;
  width: 90%;
  margin: 8px 5%;
  padding-left: 8px;
  color: #333;
  background: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  outline: 0;
}
.x6-widget-stencil-search-text:focus {
  outline: 0;
}
.x6-widget-stencil::after {
  color: #808080;
  font-weight: 600;
  font-size: 12px;
  background: 0 0;
}
`, $t = {
  base: "widget-stencil",
  title: "widget-stencil-title",
  search: "widget-stencil-search",
  searchText: "widget-stencil-search-text",
  content: "widget-stencil-content",
  group: "widget-stencil-group",
  groupTitle: "widget-stencil-group-title",
  groupContent: "widget-stencil-group-content"
}, Ao = "__default__", eM = Object.assign({ stencilGraphWidth: 200, stencilGraphHeight: 800, title: "Stencil", collapsable: !1, placeholder: "Search", notFoundText: "No matches found", layout(s, t) {
  const e = {
    columnWidth: this.options.stencilGraphWidth / 2 - 10,
    columns: 2,
    rowHeight: 80,
    resizeToFit: !1,
    dx: 10,
    dy: 10
  };
  ZS(s, Object.assign(Object.assign(Object.assign({}, e), this.options.layoutOptions), t ? t.layoutOptions : {}));
} }, vd);
class nM extends Yt {
  get targetScroller() {
    return this.options.target.getPlugin("scroller");
  }
  get targetGraph() {
    return this.options.target;
  }
  get targetModel() {
    return this.targetGraph.model;
  }
  constructor(t = {}) {
    super(), this.name = "stencil", We(this.name, tM), this.graphs = {}, this.groups = {}, this.options = Object.assign(Object.assign({}, eM), t), this.init();
  }
  init() {
    this.dnd = new $r(this.options), this.onSearch = zs(this.onSearch, 200), this.initContainer(), this.initSearch(), this.initContent(), this.initGroups(), this.setTitle(), this.startListening();
  }
  load(t, e) {
    return Array.isArray(t) ? this.loadGroup(t, e) : this.options.groups && Object.keys(this.options.groups).forEach((n) => {
      t[n] && this.loadGroup(t[n], n);
    }), this;
  }
  unload(t, e) {
    return Array.isArray(t) ? this.loadGroup(t, e, !0) : this.options.groups && Object.keys(this.options.groups).forEach((n) => {
      t[n] && this.loadGroup(t[n], n, !0);
    }), this;
  }
  toggleGroup(t) {
    return this.isGroupCollapsed(t) ? this.expandGroup(t) : this.collapseGroup(t), this;
  }
  collapseGroup(t) {
    if (this.isGroupCollapsable(t)) {
      const e = this.groups[t];
      e && !this.isGroupCollapsed(t) && (this.trigger("group:collapse", { name: t }), k(e, "collapsed"));
    }
    return this;
  }
  expandGroup(t) {
    if (this.isGroupCollapsable(t)) {
      const e = this.groups[t];
      e && this.isGroupCollapsed(t) && (this.trigger("group:expand", { name: t }), ut(e, "collapsed"));
    }
    return this;
  }
  isGroupCollapsable(t) {
    const e = this.groups[t];
    return Ce(e, "collapsable");
  }
  isGroupCollapsed(t) {
    const e = this.groups[t];
    return e && Ce(e, "collapsed");
  }
  collapseGroups() {
    return Object.keys(this.groups).forEach((t) => {
      this.collapseGroup(t);
    }), this;
  }
  expandGroups() {
    return Object.keys(this.groups).forEach((t) => {
      this.expandGroup(t);
    }), this;
  }
  resizeGroup(t, e) {
    const n = this.graphs[t];
    return n && n.resize(e.width, e.height), this;
  }
  addGroup(t) {
    const e = Array.isArray(t) ? t : [t];
    this.options.groups ? this.options.groups.push(...e) : this.options.groups = e, e.forEach((n) => {
      this.initGroup(n);
    });
  }
  removeGroup(t) {
    const e = Array.isArray(t) ? t : [t];
    this.options.groups && (this.options.groups = this.options.groups.filter((n) => !e.includes(n.name)), e.forEach((n) => {
      const i = this.graphs[n];
      this.unregisterGraphEvents(i), i.dispose(), delete this.graphs[n];
      const o = this.groups[n];
      ee(o), delete this.groups[n];
    }));
  }
  // #endregion
  initContainer() {
    this.container = document.createElement("div"), k(this.container, this.prefixClassName($t.base)), X(this.container, "data-not-found-text", this.options.notFoundText || "No matches found");
  }
  initContent() {
    this.content = document.createElement("div"), k(this.content, this.prefixClassName($t.content)), ne(this.content, this.container);
  }
  buildGraphConfig(t) {
    const e = this.options.stencilGraphOptions || {}, n = t == null ? void 0 : t.graphOptions, i = Object.assign(Object.assign({}, e), n);
    i.panning == null && (i.panning = !1);
    const o = t && t.graphWidth || this.options.stencilGraphWidth, r = t && t.graphHeight || this.options.stencilGraphHeight, a = i.model || new qt();
    return { mergedGraphOptions: i, width: o, height: r, model: a };
  }
  createStencilGraph(t, e, n, i) {
    const o = new E(Object.assign(Object.assign({}, t), {
      container: document.createElement("div"),
      model: i,
      width: e,
      height: n,
      interacting: !1,
      preventDefaultBlankAction: !1
    }));
    return this.registerGraphEvents(o), o;
  }
  initSearch() {
    this.options.search && (k(this.container, "searchable"), Rt(this.container, this.renderSearch()));
  }
  initGroup(t) {
    const e = document.createElement("div");
    k(e, this.prefixClassName($t.group)), X(e, "data-name", t.name), (t.collapsable == null && this.options.collapsable || t.collapsable !== !1) && k(e, "collapsable"), le(e, "collapsed", t.collapsed === !0);
    const n = document.createElement("h3");
    k(n, this.prefixClassName($t.groupTitle)), n.innerHTML = t.title || t.name;
    const i = document.createElement("div");
    k(i, this.prefixClassName($t.groupContent));
    const { mergedGraphOptions: o, width: r, height: a, model: l } = this.buildGraphConfig(t), c = this.createStencilGraph(o, r, a, l);
    Rt(i, c.container), Rt(e, [n, i]), ne(e, this.content), this.groups[t.name] = e, this.graphs[t.name] = c;
  }
  initGroups() {
    if (this.clearGroups(), this.setCollapsableState(), this.options.groups && this.options.groups.length)
      this.options.groups.forEach((t) => {
        this.initGroup(t);
      });
    else {
      const { mergedGraphOptions: t, width: e, height: n, model: i } = this.buildGraphConfig(), o = this.createStencilGraph(t, e, n, i);
      Rt(this.content, o.container), this.graphs[Ao] = o;
    }
  }
  setCollapsableState() {
    this.options.collapsable = this.options.collapsable && this.options.groups && this.options.groups.some((t) => t.collapsable !== !1), this.options.collapsable ? (k(this.container, "collapsable"), this.options.groups && this.options.groups.every((e) => e.collapsed || e.collapsable === !1) ? k(this.container, "collapsed") : ut(this.container, "collapsed")) : ut(this.container, "collapsable");
  }
  setTitle() {
    const t = document.createElement("div");
    k(t, this.prefixClassName($t.title)), t.innerHTML = this.options.title, ne(t, this.container);
  }
  renderSearch() {
    const t = document.createElement("div");
    k(t, this.prefixClassName($t.search));
    const e = document.createElement("input");
    return X(e, {
      type: "search",
      placeholder: this.options.placeholder || "Search"
    }), k(e, this.prefixClassName($t.searchText)), Rt(t, e), t;
  }
  startListening() {
    const t = this.prefixClassName($t.title), e = this.prefixClassName($t.searchText), n = this.prefixClassName($t.groupTitle);
    this.delegateEvents({
      [`click .${t}`]: "onTitleClick",
      [`touchstart .${t}`]: "onTitleClick",
      [`click .${n}`]: "onGroupTitleClick",
      [`touchstart .${n}`]: "onGroupTitleClick",
      [`input .${e}`]: "onSearch",
      [`focusin .${e}`]: "onSearchFocusIn",
      [`focusout .${e}`]: "onSearchFocusOut"
    });
  }
  stopListening() {
    this.undelegateEvents();
  }
  registerGraphEvents(t) {
    t.on("cell:mousedown", this.onDragStart, this);
  }
  unregisterGraphEvents(t) {
    t.off("cell:mousedown", this.onDragStart, this);
  }
  loadGroup(t, e, n) {
    const i = this.getModel(e);
    if (i) {
      const l = t.map((c) => Tt.isNode(c) ? c : Tt.create(c));
      n === !0 ? i.removeCells(l) : i.resetCells(l);
    }
    const o = this.getGroup(e);
    let r = this.options.stencilGraphHeight;
    o && o.graphHeight != null && (r = o.graphHeight);
    const a = o && o.layout || this.options.layout;
    if (a && i && N(a, this, i, o), !r) {
      const l = this.getGraph(e);
      l.fitToContent({
        minWidth: l.options.width,
        gridHeight: 1,
        padding: o && o.graphPadding || this.options.stencilGraphPadding || 10
      });
    }
    return this;
  }
  onDragStart(t) {
    const { e, node: n } = t, i = this.getGroupByNode(n);
    if (i && i.nodeMovable === !1)
      return;
    const o = this.getGraph(i ? i.name : void 0), r = o && typeof o.isPannable == "function" ? o.isPannable() : !1;
    r && o.disablePanning();
    const a = () => {
      r && o.enablePanning(), this.undelegateDocumentEvents();
    };
    this.delegateDocumentEvents({
      mouseup: a,
      touchend: a,
      touchcancel: a
    }), this.dnd.start(n, e);
  }
  filter(t, e) {
    const n = Object.keys(this.graphs).reduce((i, o) => {
      const r = this.graphs[o], a = o === Ao ? null : o, l = r.model.getNodes().filter((d) => {
        let g = !1;
        typeof e == "function" ? g = N(e, this, d, t, a, this) : typeof e == "boolean" ? g = e : g = this.isCellMatched(d, t, e, t.toLowerCase() !== t);
        const f = r.renderer.findViewByCell(d);
        return f && le(f.container, "unmatched", !g), g;
      }), c = l.length > 0, h = this.options, u = new qt();
      return u.resetCells(l), h.layout && N(h.layout, this, u, this.getGroup(o)), this.groups[o] && le(this.groups[o], "unmatched", !c), r.fitToContent({
        gridWidth: 1,
        gridHeight: 1,
        padding: h.stencilGraphPadding || 10
      }), i || c;
    }, !1);
    le(this.container, "not-found", !n);
  }
  isCellMatched(t, e, n, i) {
    return e && n ? Object.keys(n).some((o) => {
      if (o === "*" || t.shape === o) {
        const r = n[o];
        return typeof r == "boolean" ? r : (Array.isArray(r) ? r : [r]).some((l) => {
          let c = t.getPropByPath(l);
          return c != null ? (c = `${c}`, i || (c = c.toLowerCase()), c.indexOf(e) >= 0) : !1;
        });
      }
      return !1;
    }) : !0;
  }
  onSearch(t) {
    this.filter(t.target.value, this.options.search);
  }
  onSearchFocusIn() {
    k(this.container, "is-focused");
  }
  onSearchFocusOut() {
    ut(this.container, "is-focused");
  }
  onTitleClick() {
    this.options.collapsable && (le(this.container, "collapsed"), Ce(this.container, "collapsed") ? this.collapseGroups() : this.expandGroups());
  }
  onGroupTitleClick(t) {
    const e = t.target.closest(`.${this.prefixClassName($t.group)}`);
    e && this.toggleGroup(X(e, "data-name") || "");
    const n = Object.keys(this.groups).every((i) => {
      const o = this.getGroup(i), r = this.groups[i];
      return o && o.collapsable === !1 || Ce(r, "collapsed");
    });
    le(this.container, "collapsed", n);
  }
  getModel(t) {
    const e = this.getGraph(t);
    return e ? e.model : null;
  }
  getGraph(t) {
    return this.graphs[t || Ao];
  }
  getGroup(t) {
    const e = this.options.groups;
    return t != null && e && e.length ? e.find((n) => n.name === t) : null;
  }
  getGroupByNode(t) {
    const e = this.options.groups;
    return e ? e.find((n) => {
      const i = this.getModel(n.name);
      return i ? i.has(t.id) : !1;
    }) : null;
  }
  clearGroups() {
    Object.keys(this.graphs).forEach((t) => {
      const e = this.graphs[t];
      this.unregisterGraphEvents(e), e.dispose();
    }), Object.keys(this.groups).forEach((t) => {
      const e = this.groups[t];
      ee(e);
    }), this.graphs = {}, this.groups = {};
  }
  onRemove() {
    this.clearGroups(), this.dnd.remove(), this.stopListening(), this.undelegateDocumentEvents();
  }
  dispose() {
    this.remove(), qe(this.name);
  }
}
$([
  _()
], nM.prototype, "dispose", null);
class Qd extends Yt {
  get model() {
    return this.graph.model;
  }
  get containerClassName() {
    return this.prefixClassName("widget-snapline");
  }
  get verticalClassName() {
    return `${this.containerClassName}-vertical`;
  }
  get horizontalClassName() {
    return `${this.containerClassName}-horizontal`;
  }
  constructor(t) {
    super();
    const { graph: e } = t, n = G(t, ["graph"]);
    this.graph = e, this.options = Object.assign({}, n), this.offset = { x: 0, y: 0 }, this.render(), this.disabled || this.startListening();
  }
  get disabled() {
    return this.options.enabled !== !0;
  }
  enable() {
    this.disabled && (this.options.enabled = !0, this.startListening());
  }
  disable() {
    this.disabled || (this.options.enabled = !1, this.stopListening());
  }
  setFilter(t) {
    this.options.filter = t;
  }
  render() {
    const t = this.containerWrapper = new F("svg"), e = this.horizontal = new F("line"), n = this.vertical = new F("line");
    t.addClass(this.containerClassName), e.addClass(this.horizontalClassName), n.addClass(this.verticalClassName), t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), e.setAttribute("display", "none"), n.setAttribute("display", "none"), t.append([e, n]), this.options.className && t.addClass(this.options.className), this.container = this.containerWrapper.node;
  }
  startListening() {
    this.stopListening(), this.graph.on("node:mousedown", this.captureCursorOffset, this), this.graph.on("node:mousemove", this.snapOnMoving, this), this.model.on("batch:stop", this.onBatchStop, this), this.delegateDocumentEvents({
      mouseup: "hide",
      touchend: "hide"
    });
  }
  stopListening() {
    this.graph.off("node:mousedown", this.captureCursorOffset, this), this.graph.off("node:mousemove", this.snapOnMoving, this), this.model.off("batch:stop", this.onBatchStop, this), this.undelegateDocumentEvents();
  }
  onBatchStop({ name: t, data: e }) {
    t === "resize" && this.snapOnResizing(e.cell, e);
  }
  captureCursorOffset({ view: t, x: e, y: n }) {
    const i = t.getDelegatedView();
    if (i && this.isNodeMovable(i)) {
      const o = t.cell.getPosition();
      this.offset = {
        x: e - o.x,
        y: n - o.y
      };
    }
  }
  isNodeMovable(t) {
    return t && t.cell.isNode() && t.can("nodeMovable");
  }
  getRestrictArea(t) {
    const e = this.graph.options.translating.restrict, n = typeof e == "function" ? N(e, this.graph, t) : e;
    return typeof n == "number" ? this.graph.transform.getGraphArea().inflate(n) : n === !0 ? this.graph.transform.getGraphArea() : n || null;
  }
  snapOnResizing(t, e) {
    if (this.options.resizing && !e.snapped && e.ui && e.direction && e.trueDirection) {
      const n = this.graph.renderer.findViewByCell(t);
      if (n && n.cell.isNode()) {
        const i = t.getBBox(), o = i.bbox(t.getAngle()), r = o.getTopLeft(), a = o.getBottomRight(), l = Kt(t.getAngle()), c = this.options.tolerance || 0;
        let h, u, d, g, f, p;
        const m = {
          vertical: 0,
          horizontal: 0
        }, b = e.direction, y = e.trueDirection, A = e.relativeDirection;
        y.indexOf("right") !== -1 ? m.vertical = a.x : m.vertical = r.x, y.indexOf("bottom") !== -1 ? m.horizontal = a.y : m.horizontal = r.y, this.model.getNodes().some((O) => {
          if (this.isIgnored(t, O))
            return !1;
          const J = O.getBBox().bbox(O.getAngle()), V = J.getTopLeft(), it = J.getBottomRight(), W = {
            vertical: [V.x, it.x],
            horizontal: [V.y, it.y]
          }, St = {};
          return Object.keys(W).forEach((Lt) => {
            const Ft = Lt, At = W[Ft].map((Q) => ({
              position: Q,
              distance: Math.abs(Q - m[Ft])
            })).filter((Q) => Q.distance <= c);
            St[Ft] = Cr(At, (Q) => Q.distance);
          }), h == null && St.vertical.length > 0 && (h = St.vertical[0].position, u = Math.min(o.y, J.y), d = Math.max(a.y, it.y) - u), g == null && St.horizontal.length > 0 && (g = St.horizontal[0].position, f = Math.min(o.x, J.x), p = Math.max(a.x, it.x) - f), h != null && g != null;
        }), this.hide();
        let w = 0, x = 0;
        (g != null || h != null) && (h != null && (w = y.indexOf("right") !== -1 ? h - a.x : r.x - h), g != null && (x = y.indexOf("bottom") !== -1 ? g - a.y : r.y - g));
        let M = 0, v = 0;
        if (l % 90 === 0)
          l === 90 || l === 270 ? (M = x, v = w) : (M = w, v = x);
        else {
          const O = l >= 0 && l < 90 ? 1 : l >= 90 && l < 180 ? 4 : l >= 180 && l < 270 ? 3 : 2;
          g != null && h != null && (w < x ? (x = 0, g = void 0) : (w = 0, h = void 0));
          const J = Qt(l % 90);
          w && (M = O === 3 ? w / Math.cos(J) : w / Math.sin(J)), x && (v = O === 3 ? x / Math.cos(J) : x / Math.sin(J));
          const V = O === 1 || O === 3;
          switch (A) {
            case "top":
            case "bottom":
              v = x ? x / (V ? Math.cos(J) : Math.sin(J)) : w / (V ? Math.sin(J) : Math.cos(J));
              break;
            case "left":
            case "right":
              M = w ? w / (V ? Math.cos(J) : Math.sin(J)) : x / (V ? Math.sin(J) : Math.cos(J));
              break;
          }
        }
        switch (A) {
          case "top":
          case "bottom":
            M = 0;
            break;
          case "left":
          case "right":
            v = 0;
            break;
        }
        const S = this.graph.getGridSize();
        let B = Math.max(i.width + M, S), P = Math.max(i.height + v, S);
        e.minWidth && e.minWidth > S && (B = Math.max(B, e.minWidth)), e.minHeight && e.minHeight > S && (P = Math.max(P, e.minHeight)), e.maxWidth && (B = Math.min(B, e.maxWidth)), e.maxHeight && (P = Math.min(P, e.maxHeight)), e.preserveAspectRatio && (v < M ? P = B * (i.height / i.width) : B = P * (i.width / i.height)), (B !== i.width || P !== i.height) && (t.resize(B, P, {
          direction: b,
          relativeDirection: A,
          trueDirection: y,
          snapped: !0,
          snaplines: this.cid,
          restrict: this.getRestrictArea(n)
        }), d && (d += P - i.height), p && (p += B - i.width));
        const T = t.getBBox().bbox(l);
        h && Math.abs(T.x - h) > 1 && Math.abs(T.width + T.x - h) > 1 && (h = void 0), g && Math.abs(T.y - g) > 1 && Math.abs(T.height + T.y - g) > 1 && (g = void 0), this.update({
          verticalLeft: h,
          verticalTop: u,
          verticalHeight: d,
          horizontalTop: g,
          horizontalLeft: f,
          horizontalWidth: p
        });
      }
    }
  }
  snapOnMoving({ view: t, e, x: n, y: i }) {
    const o = t.getEventData(e).delegatedView || t;
    if (!this.isNodeMovable(o))
      return;
    const r = o.cell, a = r.getSize(), l = r.getPosition(), c = new I(n - this.offset.x, i - this.offset.y, a.width, a.height), h = r.getAngle(), u = c.getCenter(), d = c.bbox(h), g = d.getTopLeft(), f = d.getBottomRight(), p = this.options.tolerance || 0;
    let m, b, y, A, w, x, M = 0, v = 0;
    if (this.model.getNodes().some((S) => {
      if (this.isIgnored(r, S))
        return !1;
      const B = S.getBBox().bbox(S.getAngle()), P = B.getCenter(), T = B.getTopLeft(), O = B.getBottomRight();
      return m == null && (Math.abs(P.x - u.x) < p ? (m = P.x, M = 0.5) : Math.abs(T.x - g.x) < p ? (m = T.x, M = 0) : Math.abs(T.x - f.x) < p ? (m = T.x, M = 1) : Math.abs(O.x - f.x) < p ? (m = O.x, M = 1) : Math.abs(O.x - g.x) < p && (m = O.x), m != null && (b = Math.min(d.y, B.y), y = Math.max(f.y, O.y) - b)), A == null && (Math.abs(P.y - u.y) < p ? (A = P.y, v = 0.5) : Math.abs(T.y - g.y) < p ? A = T.y : Math.abs(T.y - f.y) < p ? (A = T.y, v = 1) : Math.abs(O.y - f.y) < p ? (A = O.y, v = 1) : Math.abs(O.y - g.y) < p && (A = O.y), A != null && (w = Math.min(d.x, B.x), x = Math.max(f.x, O.x) - w)), m != null && A != null;
    }), this.hide(), A != null || m != null) {
      A != null && (d.y = A - v * d.height), m != null && (d.x = m - M * d.width);
      const S = d.getCenter(), B = S.x - c.width / 2, P = S.y - c.height / 2, T = B - l.x, O = P - l.y;
      (T !== 0 || O !== 0) && (r.translate(T, O, {
        snapped: !0,
        restrict: this.getRestrictArea(o)
      }), x && (x += T), y && (y += O)), this.update({
        verticalLeft: m,
        verticalTop: b,
        verticalHeight: y,
        horizontalTop: A,
        horizontalLeft: w,
        horizontalWidth: x
      });
    }
  }
  isIgnored(t, e) {
    return e.id === t.id || e.isDescendantOf(t) || !this.filter(e);
  }
  filter(t) {
    const e = this.options.filter;
    return Array.isArray(e) ? e.some((n) => typeof n == "string" ? t.shape === n : t.id === n.id) : typeof e == "function" ? N(e, this.graph, t) : !0;
  }
  update(t) {
    if (t.horizontalTop) {
      const e = this.graph.localToGraph(new C(t.horizontalLeft, t.horizontalTop)), n = this.graph.localToGraph(new C(t.horizontalLeft + t.horizontalWidth, t.horizontalTop));
      this.horizontal.setAttributes({
        x1: this.options.sharp ? `${e.x}` : "0",
        y1: `${e.y}`,
        x2: this.options.sharp ? `${n.x}` : "100%",
        y2: `${n.y}`,
        display: "inherit"
      });
    } else
      this.horizontal.setAttribute("display", "none");
    if (t.verticalLeft) {
      const e = this.graph.localToGraph(new C(t.verticalLeft, t.verticalTop)), n = this.graph.localToGraph(new C(t.verticalLeft, t.verticalTop + t.verticalHeight));
      this.vertical.setAttributes({
        x1: `${e.x}`,
        y1: this.options.sharp ? `${e.y}` : "0",
        x2: `${n.x}`,
        y2: this.options.sharp ? `${n.y}` : "100%",
        display: "inherit"
      });
    } else
      this.vertical.setAttribute("display", "none");
    this.show();
  }
  resetTimer() {
    this.timer && (clearTimeout(this.timer), this.timer = null);
  }
  show() {
    return this.resetTimer(), this.container.parentNode == null && this.graph.container.appendChild(this.container), this;
  }
  hide() {
    this.resetTimer(), this.vertical.setAttribute("display", "none"), this.horizontal.setAttribute("display", "none");
    const t = this.options.clean, e = typeof t == "number" ? t : t !== !1 ? 3e3 : 0;
    return e > 0 && (this.timer = window.setTimeout(() => {
      this.container.parentNode !== null && this.unmount();
    }, e)), this;
  }
  onRemove() {
    this.stopListening(), this.hide();
  }
  dispose() {
    this.remove();
  }
}
$([
  _()
], Qd.prototype, "dispose", null);
const iM = `.x6-widget-snapline {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.x6-widget-snapline-vertical,
.x6-widget-snapline-horizontal {
  stroke: #2ecc71;
  stroke-width: 1px;
}
`;
E.prototype.isSnaplineEnabled = function() {
  const s = this.getPlugin("snapline");
  return s ? s.isEnabled() : !1;
};
E.prototype.enableSnapline = function() {
  const s = this.getPlugin("snapline");
  return s && s.enable(), this;
};
E.prototype.disableSnapline = function() {
  const s = this.getPlugin("snapline");
  return s && s.disable(), this;
};
E.prototype.toggleSnapline = function() {
  const s = this.getPlugin("snapline");
  return s && s.toggleEnabled(), this;
};
E.prototype.hideSnapline = function() {
  const s = this.getPlugin("snapline");
  return s && s.hide(), this;
};
E.prototype.setSnaplineFilter = function(s) {
  const t = this.getPlugin("snapline");
  return t && t.setFilter(s), this;
};
E.prototype.isSnaplineOnResizingEnabled = function() {
  const s = this.getPlugin("snapline");
  return s ? s.isOnResizingEnabled() : !1;
};
E.prototype.enableSnaplineOnResizing = function() {
  const s = this.getPlugin("snapline");
  return s && s.enableOnResizing(), this;
};
E.prototype.disableSnaplineOnResizing = function() {
  const s = this.getPlugin("snapline");
  return s && s.disableOnResizing(), this;
};
E.prototype.toggleSnaplineOnResizing = function(s) {
  const t = this.getPlugin("snapline");
  return t && t.toggleOnResizing(s), this;
};
E.prototype.isSharpSnapline = function() {
  const s = this.getPlugin("snapline");
  return s ? s.isSharp() : !1;
};
E.prototype.enableSharpSnapline = function() {
  const s = this.getPlugin("snapline");
  return s && s.enableSharp(), this;
};
E.prototype.disableSharpSnapline = function() {
  const s = this.getPlugin("snapline");
  return s && s.disableSharp(), this;
};
E.prototype.toggleSharpSnapline = function(s) {
  const t = this.getPlugin("snapline");
  return t && t.toggleSharp(s), this;
};
E.prototype.getSnaplineTolerance = function() {
  const s = this.getPlugin("snapline");
  if (s)
    return s.getTolerance();
};
E.prototype.setSnaplineTolerance = function(s) {
  const t = this.getPlugin("snapline");
  return t && t.setTolerance(s), this;
};
class Nd extends Gn {
  constructor(t = {}) {
    super(), this.name = "snapline", this.options = Object.assign({ enabled: !0, tolerance: 10 }, t), We(this.name, iM);
  }
  init(t) {
    this.snaplineImpl = new Qd(Object.assign(Object.assign({}, this.options), { graph: t }));
  }
  // #region api
  isEnabled() {
    return !this.snaplineImpl.disabled;
  }
  enable() {
    this.snaplineImpl.enable();
  }
  disable() {
    this.snaplineImpl.disable();
  }
  toggleEnabled(t) {
    if (t != null)
      t !== this.isEnabled() && (t ? this.enable() : this.disable());
    else
      return this.isEnabled() ? this.disable() : this.enable(), this;
  }
  hide() {
    return this.snaplineImpl.hide(), this;
  }
  setFilter(t) {
    return this.snaplineImpl.setFilter(t), this;
  }
  isOnResizingEnabled() {
    return this.snaplineImpl.options.resizing === !0;
  }
  enableOnResizing() {
    return this.snaplineImpl.options.resizing = !0, this;
  }
  disableOnResizing() {
    return this.snaplineImpl.options.resizing = !1, this;
  }
  toggleOnResizing(t) {
    return t != null ? t !== this.isOnResizingEnabled() && (t ? this.enableOnResizing() : this.disableOnResizing()) : this.isOnResizingEnabled() ? this.disableOnResizing() : this.enableOnResizing(), this;
  }
  isSharp() {
    return this.snaplineImpl.options.sharp === !0;
  }
  enableSharp() {
    return this.snaplineImpl.options.sharp = !0, this;
  }
  disableSharp() {
    return this.snaplineImpl.options.sharp = !1, this;
  }
  toggleSharp(t) {
    return t != null ? t !== this.isSharp() && (t ? this.enableSharp() : this.disableSharp()) : this.isSharp() ? this.disableSharp() : this.enableSharp(), this;
  }
  getTolerance() {
    return this.snaplineImpl.options.tolerance;
  }
  setTolerance(t) {
    return this.snaplineImpl.options.tolerance = t, this;
  }
  captureCursorOffset(t) {
    this.snaplineImpl.captureCursorOffset(t);
  }
  snapOnMoving(t) {
    this.snaplineImpl.snapOnMoving(t);
  }
  // #endregion
  dispose() {
    this.snaplineImpl.dispose(), qe(this.name);
  }
}
$([
  _()
], Nd.prototype, "dispose", null);
const sM = `.x6-widget-transform {
  position: absolute;
  box-sizing: content-box !important;
  margin: -5px 0 0 -5px;
  padding: 4px;
  border: 1px dashed #000;
  border-radius: 5px;
  user-select: none;
  pointer-events: none;
}
.x6-widget-transform > div {
  position: absolute;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #000;
  transition: background-color 0.2s;
  pointer-events: auto;
  -webkit-user-drag: none;
  user-drag: none;
  /* stylelint-disable-line */
}
.x6-widget-transform > div:hover {
  background-color: #d3d3d3;
}
.x6-widget-transform-cursor-n {
  cursor: n-resize;
}
.x6-widget-transform-cursor-s {
  cursor: s-resize;
}
.x6-widget-transform-cursor-e {
  cursor: e-resize;
}
.x6-widget-transform-cursor-w {
  cursor: w-resize;
}
.x6-widget-transform-cursor-ne {
  cursor: ne-resize;
}
.x6-widget-transform-cursor-nw {
  cursor: nw-resize;
}
.x6-widget-transform-cursor-se {
  cursor: se-resize;
}
.x6-widget-transform-cursor-sw {
  cursor: sw-resize;
}
.x6-widget-transform-resize {
  width: 10px;
  height: 10px;
  border-radius: 6px;
}
.x6-widget-transform-resize[data-position='top-left'] {
  top: -5px;
  left: -5px;
}
.x6-widget-transform-resize[data-position='top-right'] {
  top: -5px;
  right: -5px;
}
.x6-widget-transform-resize[data-position='bottom-left'] {
  bottom: -5px;
  left: -5px;
}
.x6-widget-transform-resize[data-position='bottom-right'] {
  right: -5px;
  bottom: -5px;
}
.x6-widget-transform-resize[data-position='top'] {
  top: -5px;
  left: 50%;
  margin-left: -5px;
}
.x6-widget-transform-resize[data-position='bottom'] {
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
}
.x6-widget-transform-resize[data-position='left'] {
  top: 50%;
  left: -5px;
  margin-top: -5px;
}
.x6-widget-transform-resize[data-position='right'] {
  top: 50%;
  right: -5px;
  margin-top: -5px;
}
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='top'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='bottom'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='left'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='right'] {
  display: none;
}
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='bottom'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='left'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='right'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='top'] {
  display: none;
}
.x6-widget-transform.no-resize .x6-widget-transform-resize {
  display: none;
}
.x6-widget-transform-rotate {
  top: -20px;
  left: -20px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  cursor: crosshair;
}
.x6-widget-transform.no-rotate .x6-widget-transform-rotate {
  display: none;
}
.x6-widget-transform-active {
  border-color: transparent;
  pointer-events: all;
}
.x6-widget-transform-active > div {
  display: none;
}
.x6-widget-transform-active > .x6-widget-transform-active-handle {
  display: block;
  background-color: #808080;
}
`, Zl = "has-widget-transform", bn = ["nw", "n", "ne", "e", "se", "s", "sw", "w"], tn = [
  "top-left",
  "top",
  "top-right",
  "right",
  "bottom-right",
  "bottom",
  "bottom-left",
  "left"
], oM = {
  minWidth: 0,
  minHeight: 0,
  maxWidth: 1 / 0,
  maxHeight: 1 / 0,
  rotateGrid: 15,
  rotatable: !0,
  preserveAspectRatio: !1,
  orthogonalResizing: !0,
  restrictedResizing: !1,
  autoScrollOnResizing: !0,
  allowReverse: !0
};
class Ld extends Yt {
  get model() {
    return this.graph.model;
  }
  get view() {
    return this.graph.renderer.findViewByCell(this.node);
  }
  get containerClassName() {
    return this.prefixClassName("widget-transform");
  }
  get resizeClassName() {
    return `${this.containerClassName}-resize`;
  }
  get rotateClassName() {
    return `${this.containerClassName}-rotate`;
  }
  constructor(t, e, n) {
    super(), this.node = e, this.graph = n, this.options = Object.assign(Object.assign({}, oM), t), this.render(), this.startListening();
  }
  startListening() {
    this.delegateEvents({
      [`mousedown .${this.resizeClassName}`]: "startResizing",
      [`touchstart .${this.resizeClassName}`]: "startResizing",
      [`mousedown .${this.rotateClassName}`]: "startRotating",
      [`touchstart .${this.rotateClassName}`]: "startRotating"
    }), this.model.on("*", this.update, this), this.graph.on("scale", this.update, this), this.graph.on("translate", this.update, this), this.node.on("removed", this.remove, this), this.model.on("reseted", this.remove, this), this.view.on("cell:knob:mousedown", this.onKnobMouseDown, this), this.view.on("cell:knob:mouseup", this.onKnobMouseUp, this);
  }
  stopListening() {
    this.undelegateEvents(), this.model.off("*", this.update, this), this.graph.off("scale", this.update, this), this.graph.off("translate", this.update, this), this.node.off("removed", this.remove, this), this.model.off("reseted", this.remove, this), this.view.off("cell:knob:mousedown", this.onKnobMouseDown, this), this.view.off("cell:knob:mouseup", this.onKnobMouseUp, this);
  }
  renderHandles() {
    this.container = document.createElement("div");
    const t = document.createElement("div");
    X(t, "draggable", "false");
    const e = t.cloneNode(!0);
    k(e, this.rotateClassName);
    const n = tn.map((i) => {
      const o = t.cloneNode(!0);
      return k(o, this.resizeClassName), X(o, "data-position", i), o;
    });
    this.empty(), Rt(this.container, [...n, e]);
  }
  render() {
    return this.renderHandles(), this.view && this.view.addClass(Zl), k(this.container, this.containerClassName), le(this.container, "no-orth-resize", this.options.preserveAspectRatio || !this.options.orthogonalResizing), le(this.container, "no-resize", !this.options.resizable), le(this.container, "no-rotate", !this.options.rotatable), this.options.className && k(this.container, this.options.className), this.graph.container.appendChild(this.container), this.update();
  }
  update() {
    const t = this.graph.matrix(), e = this.node.getBBox();
    e.x *= t.a, e.x += t.e, e.y *= t.d, e.y += t.f, e.width *= t.a, e.height *= t.d;
    const n = Kt(this.node.getAngle()), i = n !== 0 ? `rotate(${n}deg)` : "";
    return st(this.container, {
      transform: i,
      width: e.width,
      height: e.height,
      left: e.x,
      top: e.y
    }), this.updateResizerDirections(), this;
  }
  remove() {
    return this.view && this.view.removeClass(Zl), super.remove();
  }
  onKnobMouseDown() {
    this.startHandle();
  }
  onKnobMouseUp() {
    this.stopHandle();
  }
  updateResizerDirections() {
    const t = Kt(this.node.getAngle()), e = Math.floor(t * (bn.length / 360));
    if (e !== this.prevShift) {
      const n = bn.slice(e).concat(bn.slice(0, e)), i = (r) => `${this.containerClassName}-cursor-${r}`;
      this.container.querySelectorAll(`.${this.resizeClassName}`).forEach((r, a) => {
        ut(r, bn.map((l) => i(l)).join(" ")), k(r, i(n[a]));
      }), this.prevShift = e;
    }
  }
  getTrueDirection(t) {
    const e = Kt(this.node.getAngle());
    let n = tn.indexOf(t);
    return n += Math.floor(e * (tn.length / 360)), n %= tn.length, tn[n];
  }
  toValidResizeDirection(t) {
    return {
      top: "top-left",
      bottom: "bottom-right",
      left: "bottom-left",
      right: "top-right"
    }[t] || t;
  }
  startResizing(t) {
    t.stopPropagation(), this.model.startBatch("resize", { cid: this.cid });
    const e = X(t.target, "data-position");
    this.prepareResizing(t, e), this.startAction(t);
  }
  prepareResizing(t, e) {
    const n = this.getTrueDirection(e);
    let i = 0, o = 0;
    e.split("-").forEach((c) => {
      i = { left: -1, right: 1 }[c] || i, o = { top: -1, bottom: 1 }[c] || o;
    });
    const r = this.toValidResizeDirection(e), a = {
      "top-right": "bottomLeft",
      "top-left": "bottomRight",
      "bottom-left": "topRight",
      "bottom-right": "topLeft"
    }[r], l = Kt(this.node.getAngle());
    this.setEventData(t, {
      selector: a,
      direction: r,
      trueDirection: n,
      relativeDirection: e,
      angle: l,
      resizeX: i,
      resizeY: o,
      action: "resizing"
    });
  }
  startRotating(t) {
    t.stopPropagation(), this.model.startBatch("rotate", { cid: this.cid });
    const e = this.node.getBBox().getCenter(), n = this.normalizeEvent(t), i = this.graph.snapToGrid(n.clientX, n.clientY);
    this.setEventData(t, {
      center: e,
      action: "rotating",
      angle: Kt(this.node.getAngle()),
      start: C.create(i).theta(e)
    }), this.startAction(t);
  }
  onMouseMove(t) {
    const e = this.graph.findViewByCell(this.node);
    let n = this.getEventData(t);
    if (n.action) {
      const i = this.normalizeEvent(t);
      let o = i.clientX, r = i.clientY;
      const a = this.graph.getPlugin("scroller"), l = this.options.restrictedResizing;
      if (l === !0 || typeof l == "number") {
        const g = l === !0 ? 0 : l, f = a ? Math.max(g, 8) : g, p = this.graph.container.getBoundingClientRect();
        o = nn(o, p.left + f, p.right - f), r = nn(r, p.top + f, p.bottom - f);
      } else this.options.autoScrollOnResizing && a && a.autoScroll(o, r);
      const c = this.graph.snapToGrid(o, r), h = this.graph.getGridSize(), u = this.node, d = this.options;
      if (n.action === "resizing") {
        n = n, n.resized || (e && (e.addClass("node-resizing"), this.notify("node:resize", t, e)), n.resized = !0);
        const g = u.getBBox(), f = C.create(c).rotate(n.angle, g.getCenter()).diff(g[n.selector]);
        let p = n.resizeX ? f.x * n.resizeX : g.width, m = n.resizeY ? f.y * n.resizeY : g.height;
        const b = p, y = m;
        if (p = ue(p, h), m = ue(m, h), p = Math.max(p, d.minWidth || h), m = Math.max(m, d.minHeight || h), p = Math.min(p, d.maxWidth || 1 / 0), m = Math.min(m, d.maxHeight || 1 / 0), d.preserveAspectRatio) {
          const w = g.width * m / g.height, x = g.height * p / g.width;
          p < w ? m = x : p = w;
        }
        const A = n.relativeDirection;
        if (d.allowReverse && (b <= -p || y <= -m)) {
          let w;
          A === "left" ? b <= -p && (w = "right") : A === "right" ? b <= -p && (w = "left") : A === "top" ? y <= -m && (w = "bottom") : A === "bottom" ? y <= -m && (w = "top") : A === "top-left" ? b <= -p && y <= -m ? w = "bottom-right" : b <= -p ? w = "top-right" : y <= -m && (w = "bottom-left") : A === "top-right" ? b <= -p && y <= -m ? w = "bottom-left" : b <= -p ? w = "top-left" : y <= -m && (w = "bottom-right") : A === "bottom-left" ? b <= -p && y <= -m ? w = "top-right" : b <= -p ? w = "bottom-right" : y <= -m && (w = "top-left") : A === "bottom-right" && (b <= -p && y <= -m ? w = "top-left" : b <= -p ? w = "bottom-left" : y <= -m && (w = "top-right"));
          const x = w;
          this.stopHandle();
          const M = this.container.querySelector(`.${this.resizeClassName}[data-position="${x}"]`);
          this.startHandle(M), this.prepareResizing(t, x), this.onMouseMove(t);
        }
        if (g.width !== p || g.height !== m) {
          const w = {
            ui: !0,
            direction: n.direction,
            relativeDirection: n.relativeDirection,
            trueDirection: n.trueDirection,
            minWidth: d.minWidth,
            minHeight: d.minHeight,
            maxWidth: d.maxWidth,
            maxHeight: d.maxHeight,
            preserveAspectRatio: d.preserveAspectRatio === !0
          };
          u.resize(p, m, w), this.notify("node:resizing", t, e);
        }
      } else if (n.action === "rotating") {
        n = n, n.rotated || (e && (e.addClass("node-rotating"), this.notify("node:rotate", t, e)), n.rotated = !0);
        const g = u.getAngle(), f = n.start - C.create(c).theta(n.center);
        let p = n.angle + f;
        d.rotateGrid && (p = ue(p, d.rotateGrid)), p = Kt(p), g !== p && (u.rotate(p, { absolute: !0 }), this.notify("node:rotating", t, e));
      }
    }
  }
  onMouseUp(t) {
    const e = this.getEventData(t);
    e.action && (this.stopAction(t), this.model.stopBatch(e.action === "resizing" ? "resize" : "rotate", {
      cid: this.cid
    }));
  }
  startHandle(t) {
    if (this.handle = t || null, k(this.container, `${this.containerClassName}-active`), t) {
      k(t, `${this.containerClassName}-active-handle`);
      const e = t.getAttribute("data-position");
      if (e) {
        const n = bn[tn.indexOf(e)];
        k(this.container, `${this.containerClassName}-cursor-${n}`);
      }
    }
  }
  stopHandle() {
    if (ut(this.container, `${this.containerClassName}-active`), this.handle) {
      ut(this.handle, `${this.containerClassName}-active-handle`);
      const t = this.handle.getAttribute("data-position");
      if (t) {
        const e = bn[tn.indexOf(t)];
        ut(this.container, `${this.containerClassName}-cursor-${e}`);
      }
      this.handle = null;
    }
  }
  startAction(t) {
    this.startHandle(t.target), this.graph.view.undelegateEvents(), this.delegateDocumentEvents(id, t.data);
  }
  stopAction(t) {
    this.stopHandle(), this.undelegateDocumentEvents(), this.graph.view.delegateEvents();
    const e = this.graph.findViewByCell(this.node), n = this.getEventData(t);
    e && (e.removeClass(`node-${n.action}`), n.action === "resizing" && n.resized ? this.notify("node:resized", t, e) : n.action === "rotating" && n.rotated && this.notify("node:rotated", t, e));
  }
  notify(t, e, n, i = {}) {
    if (n) {
      const o = n.graph, r = o.view.normalizeEvent(e), a = o.snapToGrid(r.clientX, r.clientY);
      this.trigger(t, Object.assign({
        e: r,
        view: n,
        node: n.cell,
        cell: n.cell,
        x: a.x,
        y: a.y
      }, i));
    }
  }
  dispose() {
    this.stopListening(), this.remove(), this.off();
  }
}
$([
  _()
], Ld.prototype, "dispose", null);
E.prototype.createTransformWidget = function(s) {
  const t = this.getPlugin("transform");
  return t && t.createWidget(s), this;
};
E.prototype.clearTransformWidgets = function() {
  const s = this.getPlugin("transform");
  return s && s.clearWidgets(), this;
};
class Fd extends Gt {
  constructor(t = {}) {
    super(), this.name = "transform", this.widgets = /* @__PURE__ */ new Map(), this.disabled = !1, this.options = t, We(this.name, sM);
  }
  init(t) {
    this.graph = t, !this.disabled && this.startListening();
  }
  startListening() {
    this.graph.on("node:click", this.onNodeClick, this), this.graph.on("blank:mousedown", this.onBlankMouseDown, this);
  }
  stopListening() {
    this.graph.off("node:click", this.onNodeClick, this), this.graph.off("blank:mousedown", this.onBlankMouseDown, this);
  }
  enable() {
    this.disabled && (this.disabled = !1, this.startListening());
  }
  disable() {
    this.disabled || (this.disabled = !0, this.stopListening());
  }
  isEnabled() {
    return !this.disabled;
  }
  createWidget(t) {
    this.clearWidgets();
    const e = this.createTransform(t);
    e && (this.widgets.set(t, e), e.on("*", (n, i) => {
      this.trigger(n, i), this.graph.trigger(n, i);
    }));
  }
  onNodeClick({ node: t }) {
    this.createWidget(t);
  }
  onBlankMouseDown() {
    this.clearWidgets();
  }
  createTransform(t) {
    const e = this.getTransformOptions(t);
    return e.resizable || e.rotatable ? new Ld(e, t, this.graph) : null;
  }
  parseOptionGroup(t, e, n) {
    const i = {};
    return Object.keys(n || {}).forEach((o) => {
      const r = n[o];
      i[o] = typeof r == "function" ? r.call(t, e) : r;
    }), i;
  }
  getTransformOptions(t) {
    this.options.resizing || (this.options.resizing = {
      enabled: !1
    }), this.options.rotating || (this.options.rotating = {
      enabled: !1
    }), typeof this.options.resizing == "boolean" && (this.options.resizing = {
      enabled: this.options.resizing
    }), typeof this.options.rotating == "boolean" && (this.options.rotating = {
      enabled: this.options.rotating
    });
    const e = this.parseOptionGroup(this.graph, t, this.options.resizing), n = this.parseOptionGroup(this.graph, t, this.options.rotating);
    return {
      resizable: !!e.enabled,
      minWidth: e.minWidth || 0,
      maxWidth: e.maxWidth || Number.MAX_SAFE_INTEGER,
      minHeight: e.minHeight || 0,
      maxHeight: e.maxHeight || Number.MAX_SAFE_INTEGER,
      orthogonalResizing: typeof e.orthogonal == "boolean" ? e.orthogonal : !0,
      restrictedResizing: !!e.restrict,
      autoScrollOnResizing: typeof e.autoScroll == "boolean" ? e.autoScroll : !0,
      preserveAspectRatio: !!e.preserveAspectRatio,
      allowReverse: typeof e.allowReverse == "boolean" ? e.allowReverse : !0,
      rotatable: !!n.enabled,
      rotateGrid: n.grid || 15
    };
  }
  clearWidgets() {
    this.widgets.forEach((t, e) => {
      this.graph.getCellById(e.id) && t.dispose();
    }), this.widgets.clear();
  }
  dispose() {
    this.clearWidgets(), this.stopListening(), this.off(), qe(this.name);
  }
}
$([
  _()
], Fd.prototype, "dispose", null);
function tc(s) {
  const t = Nt.getForeignObjectMarkup();
  return s ? [
    {
      tagName: s,
      selector: "body"
    },
    t
  ] : [t];
}
E.registerNode("vue-shape", {
  view: "vue-shape-view",
  markup: tc(),
  attrs: {
    body: {
      fill: "none",
      stroke: "none",
      refWidth: "100%",
      refHeight: "100%"
    },
    fo: {
      refWidth: "100%",
      refHeight: "100%"
    }
  },
  propHooks(s) {
    if (s.markup == null) {
      const t = s.primer;
      if (t) {
        s.markup = tc(t);
        let e = {};
        switch (t) {
          case "circle":
            e = {
              refCx: "50%",
              refCy: "50%",
              refR: "50%"
            };
            break;
          case "ellipse":
            e = {
              refCx: "50%",
              refCy: "50%",
              refRx: "50%",
              refRy: "50%"
            };
            break;
        }
        s.attrs = pt({}, {
          body: Object.assign({ refWidth: null, refHeight: null }, e)
        }, s.attrs || {});
      }
    }
    return s;
  }
}, !0);
var rM = function(s, t) {
  var e = {};
  for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && t.indexOf(n) < 0 && (e[n] = s[n]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(s); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, n[i]) && (e[n[i]] = s[n[i]]);
  return e;
};
const zd = {};
function wo(s) {
  const { shape: t, component: e, inherit: n } = s, i = rM(s, ["shape", "component", "inherit"]);
  if (!t)
    throw new Error("should specify shape in config");
  zd[t] = {
    component: e
  }, E.registerNode(t, Object.assign({ inherit: n || "vue-shape" }, i), !0);
}
let Pi = !1;
const Ms = Gd({});
function aM(s, t, e, n, i) {
  Pi && (Ms[s] = Vd(Qn({
    render: () => ri(Yd, { to: e }, [
      ri(t, { node: n, graph: i })
    ]),
    provide: () => ({
      getNode: () => n,
      getGraph: () => i
    })
  })));
}
function lM(s) {
  Pi && delete Ms[s];
}
function ec() {
  return Pi;
}
let as = null;
function Ud() {
  return as && Pi ? null : (Pi = !0, as = Qn({
    setup() {
      return xe(() => {
        as = null;
      }), () => ri(Ht, {}, Object.keys(Ms).map((s) => ri(Ms[s])));
    }
  }), as);
}
class sn extends se {
  getComponentContainer() {
    return this.selectors && this.selectors.foContent;
  }
  confirmUpdate(t) {
    const e = super.confirmUpdate(t);
    return this.handleAction(e, sn.action, () => {
      this.renderVueComponent();
    });
  }
  targetId() {
    return `${this.graph.view.cid}:${this.cell.id}`;
  }
  renderVueComponent() {
    this.unmountVueComponent();
    const t = this.getComponentContainer(), e = this.cell, n = this.graph;
    if (t) {
      const { component: i } = zd[e.shape];
      i && (ec() ? aM(this.targetId(), i, t, e, n) : (this.vm = Hd({
        render() {
          return ri(i, { node: e, graph: n });
        },
        provide() {
          return {
            getNode: () => e,
            getGraph: () => n
          };
        }
      }), this.vm.mount(t)));
    }
  }
  unmountVueComponent() {
    const t = this.getComponentContainer();
    return this.vm && (this.vm.unmount(), this.vm = null), t && (t.innerHTML = ""), t;
  }
  onMouseDown(t, e, n) {
    const i = t.target;
    if (i.tagName.toLowerCase() === "input") {
      const r = i.getAttribute("type");
      if (r == null || [
        "text",
        "password",
        "number",
        "email",
        "search",
        "tel",
        "url"
      ].includes(r))
        return;
    }
    super.onMouseDown(t, e, n);
  }
  unmount() {
    return ec() && lM(this.targetId()), this.unmountVueComponent(), super.unmount(), this;
  }
}
sn.action = "vue";
sn.config({
  bootstrap: [sn.action],
  actions: {
    component: sn.action
  }
});
se.registry.register("vue-shape-view", sn, !0);
const Xt = (s, t) => {
  const e = s.__vccOpts || s;
  for (const [n, i] of t)
    e[n] = i;
  return e;
}, cM = {
  __name: "vueNode",
  setup(s) {
    Wd((h) => ({
      v237d1efc: e.value.opacity,
      v0a584c48: e.value.borderStyle,
      v570a5d7c: e.value.borderWidth + "px",
      v0c2028e4: e.value.borderColor,
      v26d534e6: e.value.borderRadius + "px",
      a54def68: e.value.backgroundColor,
      a4a6fb78: e.value.backgroundImage
    }));
    const t = Ke("getNode"), e = ot({}), n = ot(128), i = ot(128), o = ir(() => Math.min(n.value, i.value)), r = ({ current: h }) => {
      n.value = h.width, i.value = h.height;
    }, a = ({ current: h }) => {
      console.log(h), e.value = { ...e.value, ...h };
    };
    let l = null, c = null;
    return oe(() => {
      l = t(), n.value = l.size().width, i.value = l.size().height, e.value = l.getData(), l.on("change:data", a), l.on("change:size", r), c = setInterval(() => {
        const { progress: h } = l.getData();
        l.setData({
          progress: (h + 10) % 100
        });
      }, 500);
    }), xe(() => {
      l.off("change:data", a), l.off("change:size", r), c && clearInterval(c);
    }), (h, u) => {
      const d = Y("el-progress");
      return L(), tt("div", {
        style: ze({ width: n.value + "px", height: i.value + "px" }),
        class: "vueNode"
      }, [
        D(d, {
          type: "circle",
          percentage: e.value.progress,
          width: o.value
        }, null, 8, ["percentage", "width"])
      ], 4);
    };
  }
}, hM = /* @__PURE__ */ Xt(cM, [["__scopeId", "data-v-664fcc5f"]]), uM = ["innerHTML"], dM = {
  __name: "svgNode",
  setup(s) {
    const t = Ke("getNode"), e = ot(50), n = ot(50), i = ot(""), o = ot("#ffffff"), r = ir(() => Math.min(e.value, n.value)), a = ({ current: c }) => {
      e.value = c.width, n.value = c.height;
    };
    let l = null;
    return oe(() => {
      l = t(), e.value = l.size().width, n.value = l.size().height, i.value = l.getData().icon, o.value = l.getData().value, l.on("change:size", a);
    }), xe(() => {
      l.off("change:size", a);
    }), (c, h) => (L(), tt("div", {
      style: ze({ width: e.value + "px", height: n.value + "px" }),
      class: "svgNode"
    }, [
      U("div", {
        class: "svg-icon",
        innerHTML: i.value,
        style: ze({ color: o.value, width: r.value + "px", height: r.value + "px" })
      }, null, 12, uM)
    ], 4));
  }
}, gM = /* @__PURE__ */ Xt(dM, [["__scopeId", "data-v-a6ab1817"]]), fM = {
  __name: "iconfontNode",
  setup(s) {
    const t = Ke("getNode"), e = ot(50), n = ot(50), i = ot(""), o = ot("#ffffff"), r = ir(() => Math.min(e.value, n.value)), a = ({ current: c }) => {
      e.value = c.width, n.value = c.height;
    };
    let l = null;
    return oe(() => {
      l = t(), e.value = l.size().width, n.value = l.size().height, i.value = l.getData().icon, o.value = l.getData().color, l.on("change:size", a);
    }), xe(() => {
      l.off("change:size", a);
    }), (c, h) => (L(), tt("div", {
      style: ze({ width: e.value + "px", height: n.value + "px" }),
      class: "iconfontNode"
    }, [
      U("div", {
        style: ze({ width: r.value + "px", height: r.value + "px", lineHeight: r.value + "px" })
      }, [
        U("i", {
          class: ye(["iconfont", i.value]),
          style: ze({ color: o.value, fontSize: r.value + "px" })
        }, null, 6)
      ], 4)
    ], 4));
  }
}, pM = /* @__PURE__ */ Xt(fM, [["__scopeId", "data-v-777768b5"]]), vo = {
  borderStyle: "none",
  borderRadius: 0,
  borderWidth: 0,
  borderColor: "#5F95FF",
  opacity: 1,
  backgroundImage: "none",
  backgroundColor: "transparent"
}, _r = () => {
  wo({
    shape: "icon-node",
    width: 50,
    height: 50,
    data: {
      ...vo,
      icon: null
    },
    component: pM
  }), wo({
    shape: "vue-node",
    width: 50,
    height: 50,
    data: {
      ...vo,
      progress: 70
    },
    component: hM
  }), wo({
    shape: "svg-node",
    width: 50,
    height: 50,
    data: {
      ...vo,
      svg: null
    },
    // ports: { ...ports },
    component: gM
  });
}, nc = {
  Blank: "blank"
}, Bs = or("property", {
  state: () => ({
    targetType: nc.Blank,
    cellId: null,
    tabs: ["画布"],
    activeTab: 0
  }),
  getters: {},
  actions: {
    setTarget(s, t) {
      this.targetType = s, s === nc.Blank ? this.tabs = ["画布"] : this.tabs = ["外观", "数据", "动画", "状态", "交互"], this.activeTab = 0, this.cellId = t;
    }
  }
}), xo = {
  backgroundColor: "#1e1e1e",
  backgroundImage: null
}, te = or("editor-graph", {
  state: () => ({
    el: null,
    graph: null,
    dnd: null,
    style: { ...xo, width: 1920, height: 1080 },
    name: "",
    id: "",
    zoom: 100
  }),
  getters: {
    hasGraph: (s) => !!s.graph
  },
  actions: {
    init() {
      if (this.el === null) return;
      this.graph && this.graph.dispose(), this.graph = new E({
        container: this.el,
        autoResize: !0,
        // virtual: true,
        mousewheel: {
          enabled: !0,
          factor: 0.1
        },
        panning: !1,
        scaling: { min: 0.5, max: 2 },
        background: { color: "#000000" },
        grid: {
          size: 5,
          visible: !0,
          type: "mesh",
          args: {
            color: "rgba(100, 100, 100, 0.6)",
            // 网格线颜色
            thickness: 1
            // 网格线宽度
          }
        },
        translating: {
          restrict: !0
        },
        connecting: {
          router: "orth",
          connector: {
            name: "normal"
          },
          args: {
            padding: 0,
            direction: "H"
          },
          anchor: "center",
          connectionPoint: "anchor",
          allowBlank: !0,
          allowLoop: !1,
          allowMulti: !1,
          snap: {
            radius: 20
          },
          createEdge() {
            return new nd({
              attrs: {
                line: {
                  stroke: "#03e6f7ff",
                  strokeWidth: 2,
                  targetMarker: null
                }
              },
              zIndex: 0
            });
          },
          validateConnection({ targetMagnet: t }) {
            return !!t;
          }
        },
        highlighting: {
          magnetAdsorbed: {
            name: "stroke",
            args: {
              attrs: {
                fill: "#5F95FF",
                stroke: "#5F95FF"
              }
            }
          }
        }
      }), this.graph.use(
        new Nd({
          enabled: !0
        })
      );
      const s = new Dd({
        pageWidth: this.style.width,
        pageHeight: this.style.height,
        enabled: !0,
        pannable: !0,
        autoResize: !1
      });
      this.graph.use(s), this.dnd = new $r({
        target: this.graph,
        validateNode() {
          return !0;
        }
      }), this.graph.use(
        new Fd({
          resizing: !0,
          rotating: !0
          // resizing: transformOption,
        })
      ), this.graph.use(
        new fd({
          enabled: !0
        })
      ), this.graph.use(
        new Bd({
          enabled: !0,
          global: !0
        })
      ).use(
        new Pd({
          rubberband: !0,
          showNodeSelectionBox: !0,
          showEdgeSelectionBox: !1,
          modifiers: ["meta", "shift", "ctrl"]
        })
      ).use(new Ed()), _r(), this.initEvent();
    },
    loadMenu({ name: s, id: t, value: e, style: n }) {
      this.graph && (this.name = s, this.id = t, this.graph.fromJSON(e || {}), n ? this.style = { ...this.style, ...xo, ...n } : this.style = { ...this.style, ...xo }, setTimeout(() => {
        const i = Math.min(1280 / this.style.width, 840 / this.style.height);
        console.log(i, this.style.width, this.style.height), this.graph.zoomTo(i), this.graph.center(), console.log(this.graph.getScrollbarPosition()), Bs().setTarget("blank", null);
      }, 100));
    },
    setZoom(s) {
      this.zoom = Number(s), this.graph.zoomTo(s);
    },
    updateSize(s, t, e) {
      this.style.width = s, this.style.height = t, this.init(), setTimeout(() => {
        e && e();
      }, 100);
    },
    initEvent() {
      this.graph.on("node:moving", (e) => {
      }), this.graph.on("scale", ({ sx: e, sy: n }) => {
        console.log(e, n), this.zoom = Number((e * 100).toFixed(0));
      });
      const s = Bs();
      this.graph.on("blank:click", ({ e, x: n, y: i }) => {
        console.log("Blank click at:", n, i, e), s.setTarget("blank", null);
      }), this.graph.on("edge:click", ({ e, x: n, y: i, edge: o }) => {
        console.log("edge:click", n, i, o.id), s.setTarget("edge", o.id);
      }), this.graph.on("node:click", ({ e, x: n, y: i, node: o }) => {
        console.log("node:click", n, i, o.id), s.setTarget("node", o.id);
      }), this.graph.on("edge:mouseenter", ({ cell: e }) => {
        e.addTools([
          {
            name: "vertices",
            args: {
              attrs: { fill: "#666" },
              modifiers: ["meta", "shift", "ctrl"]
            }
          }
          // {
          //   name: 'source-arrowhead',
          //   args: {
          //     attrs: { fill: '#666', 'stroke-width': 0, },
          //   },
          // },
          // {
          //   name: 'target-arrowhead',
          //   args: {
          //     attrs: { fill: '#666', 'stroke-width': 0, },
          //   },
          // }
        ]);
      }), this.graph.on("edge:mouseleave", ({ cell: e }) => {
        e.hasTool("vertices") && e.removeTool("vertices"), e.hasTool("source-arrowhead") && e.removeTool("source-arrowhead"), e.hasTool("target-arrowhead") && e.removeTool("target-arrowhead");
      }), this.graph.bindKey(["meta+c", "ctrl+c"], () => {
        const e = this.graph.getSelectedCells();
        return e.length && this.graph.copy(e), !1;
      }), this.graph.bindKey(["meta+x", "ctrl+x"], () => {
        const e = this.graph.getSelectedCells();
        return e.length && this.graph.cut(e), !1;
      }), this.graph.bindKey(["meta+v", "ctrl+v"], () => {
        if (!this.graph.isClipboardEmpty()) {
          const e = this.graph.paste({ offset: 32 });
          this.graph.cleanSelection(), this.graph.select(e);
        }
        return !1;
      }), this.graph.bindKey(["meta+z", "ctrl+z"], () => (this.graph.canUndo() && this.graph.undo(), !1)), this.graph.bindKey(["meta+shift+z", "ctrl+shift+z"], () => (this.graph.canRedo() && this.graph.redo(), !1)), this.graph.bindKey(["meta+a", "ctrl+a"], () => {
        const e = this.graph.getNodes();
        e && this.graph.select(e);
      }), this.graph.bindKey("backspace", () => {
        const e = this.graph.getSelectedCells();
        e.length && this.graph.removeCells(e);
      });
      const t = (e, n) => {
        for (let i = 0, o = e.length; i < o; i += 1)
          e[i].style.visibility = n ? "visible" : "hidden";
      };
      this.graph.on("node:mouseenter", () => {
        const e = this.el.querySelectorAll(
          ".x6-port-body"
        );
        t(e, !0);
      }), this.graph.on("node:mouseleave", () => {
        const e = this.el.querySelectorAll(
          ".x6-port-body"
        );
        t(e, !1);
      });
    }
  }
}), Gi = or("menus", {
  state: () => ({ menus: [], current: [], services: {} }),
  getters: {
    currentMenu: (s) => {
      var t;
      return (t = s.menus.find((e) => e.id === s.current[0])) == null ? void 0 : t.children.find((e) => e.id === s.current[1]);
    }
  },
  actions: {
    async setCurrentMenu(s, t = !1) {
      const e = te();
      if (JSON.stringify(s) === JSON.stringify(this.current) && t === !1)
        return !1;
      this.current = s, e.loadMenu(await this.services.getMenu(s[1]));
    },
    async loadAllMenus(s = !1) {
      var t;
      this.menus = await ((t = this.services) == null ? void 0 : t.getAllMenus()), s && this.menus[0] && this.menus[0].children[0] && this.setCurrentMenu([this.menus[0].id, this.menus[0].children[0].id]);
    },
    async addMenu(s, t) {
      var n;
      const e = await ((n = this.services) == null ? void 0 : n.addMenu(s));
      this.loadAllMenus(), this.setCurrentMenu([e.parentId, e.id]), t && t();
    },
    async saveMenu(s) {
      const t = te(), e = {
        name: t.name,
        id: this.current[1],
        parentId: this.current[0],
        style: t.style,
        value: t.graph.toJSON()
      };
      await this.services.saveMenus(e), s && s();
    },
    clearMenu(s) {
      const t = te(), e = {
        name: t.name,
        id: this.current[1],
        parentId: this.current[0],
        style: t.style,
        value: {}
      };
      this.services.saveMenus(e), t.graph.clearCells(), s && s();
    },
    async removeMenu(s) {
      if (await this.services.removeMenu(this.current[1]), await this.loadAllMenus(), this.menus[0] && this.menus[0].children[0])
        this.setCurrentMenu([this.menus[0].id, this.menus[0].children[0].id]);
      else {
        const t = te();
        t.graph.clearCells(), t.name = "", t.id = "";
      }
      s && s();
    }
  }
}), mM = { class: "dialog-footer" }, bM = {
  __name: "addMenu",
  emits: ["close"],
  setup(s, { emit: t }) {
    const e = Gi(), { menus: n } = Nn(e), i = t, o = ot(!1);
    function r() {
      o.value = !1, i("close");
    }
    const a = ot(null), l = ot({
      parent: null,
      parentNameNew: "",
      name: ""
    }), c = ot({
      parent: [{
        required: !0,
        message: "请选择上级目录",
        trigger: "change"
      }],
      parentNameNew: {
        required: !0,
        message: "请输入一级目录名称",
        trigger: "blur"
      },
      name: [{
        required: !0,
        message: "请输入二级目录名称",
        trigger: "blur"
      }]
    }), h = ot(!1), u = async () => {
      if (a.value) {
        h.value = !0;
        try {
          await a.value.validate((d, g) => {
            d ? (console.log("submit!"), e.addMenu(l.value, () => {
              r();
            })) : console.log("error submit!", g);
          });
        } catch (d) {
          console.log("表单验证失败:", d);
        } finally {
          h.value = !1;
        }
      }
    };
    return oe(() => {
      o.value = !0;
    }), (d, g) => {
      const f = Y("el-option"), p = Y("el-select"), m = Y("el-form-item"), b = Y("el-input"), y = Y("el-form"), A = Y("el-button"), w = Y("el-dialog");
      return L(), mt(w, {
        modelValue: o.value,
        "onUpdate:modelValue": g[3] || (g[3] = (x) => o.value = x),
        title: "新增目录",
        width: "500"
      }, {
        footer: K(() => [
          U("div", mM, [
            D(A, { onClick: r }, {
              default: K(() => [...g[4] || (g[4] = [
                on("取消", -1)
              ])]),
              _: 1
            }),
            D(A, {
              type: "primary",
              onClick: u
            }, {
              default: K(() => [...g[5] || (g[5] = [
                on("确定", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        default: K(() => [
          D(y, {
            ref_key: "formRef",
            ref: a,
            model: l.value,
            "label-width": "auto",
            style: { padding: "10px 20px" },
            rules: c.value
          }, {
            default: K(() => [
              D(m, {
                label: "上级目录",
                prop: "parent"
              }, {
                default: K(() => [
                  D(p, {
                    modelValue: l.value.parent,
                    "onUpdate:modelValue": g[0] || (g[0] = (x) => l.value.parent = x),
                    placeholder: "请选择上级目录"
                  }, {
                    default: K(() => [
                      D(f, {
                        value: "0",
                        label: "根目录"
                      }),
                      (L(!0), tt(Ht, null, Ue(ct(n), (x) => (L(), mt(f, {
                        key: x.id,
                        label: x.name,
                        value: x.id
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              l.value.parent == "0" ? (L(), mt(m, {
                key: 0,
                label: "一级目录名称",
                prop: "parentNameNew"
              }, {
                default: K(() => [
                  D(b, {
                    modelValue: l.value.parentNameNew,
                    "onUpdate:modelValue": g[1] || (g[1] = (x) => l.value.parentNameNew = x)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })) : Jt("", !0),
              D(m, {
                label: "二级目录名称",
                prop: "name"
              }, {
                default: K(() => [
                  D(b, {
                    modelValue: l.value.name,
                    "onUpdate:modelValue": g[2] || (g[2] = (x) => l.value.name = x)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}, yM = {
  __name: "previewBox",
  emits: ["close"],
  setup(s, { emit: t }) {
    const e = te(), n = ot(null), i = Ud(), o = t;
    function r() {
      o("close");
    }
    let a = null;
    return oe(() => {
      const { width: l, height: c } = e.style;
      a = new E({
        container: n.value,
        width: l,
        height: c,
        interacting: !1,
        selecting: !1,
        keyboard: !1,
        mousewheel: !1,
        panning: !1
      }), _r(), a.fromJSON(e.graph.toJSON()), a.drawBackground({
        color: e.style.backgroundColor,
        image: e.style.backgroundImage,
        size: "cover"
      });
    }), xe(() => {
      a && a.dispose();
    }), (l, c) => (L(), tt("div", {
      class: "previewBox",
      onClick: r
    }, [
      U("div", {
        ref_key: "container",
        ref: n,
        class: "ems-preview"
      }, null, 512),
      D(ct(i))
    ]));
  }
}, CM = /* @__PURE__ */ Xt(yM, [["__scopeId", "data-v-2764911c"]]), AM = { class: "toolBox" }, wM = { class: "left" }, vM = { style: { "line-height": "40px" } }, xM = { class: "right" }, EM = {
  __name: "index",
  setup(s) {
    const t = Gi(), e = te(), { zoom: n } = Nn(e), i = ot(!1), o = () => {
      i.value = !0;
    }, r = () => {
      t.saveMenu(() => {
        vn.success("保存成功！");
      });
    };
    function a(f) {
      const p = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      (p && f.metaKey && f.key === "s" || !p && f.ctrlKey && f.key === "s") && (f.preventDefault(), r());
    }
    const l = () => {
      Zr.confirm("确认清空画布吗?", "提示", { confirmButtonText: "确定", cancelButtonText: "取消", type: "warning" }).then(() => {
        t.clearMenu(() => {
          vn.success("清空成功！");
        });
      });
    }, c = () => {
      Zr.confirm("确认删除画布吗?", "提示", { confirmButtonText: "确定", cancelButtonText: "取消", type: "warning" }).then(() => {
        t.removeMenu(() => {
          vn.success("删除成功！");
        });
      });
    }, h = ot(!1), u = () => {
      h.value = !0;
    }, d = (f) => {
      e.setZoom(+f * 0.1);
    }, g = e.graph;
    return g.on("blank:click", ({ x: f, y: p }) => {
    }), g.on("mousemove", ({ x: f, y: p }) => {
    }), g.on("blank:contextmenu", ({ e: f }) => {
    }), oe(() => {
      window.addEventListener("keydown", a);
    }), xe(() => {
      window.removeEventListener("keydown", a);
    }), (f, p) => {
      const m = Y("el-tooltip"), b = Y("el-dropdown-item"), y = Y("el-dropdown-menu"), A = Y("el-dropdown");
      return L(), tt(Ht, null, [
        U("div", AM, [
          U("div", wM, [
            U("a", { onClick: o }, [
              D(m, {
                effect: "light",
                content: "新增",
                placement: "bottom",
                "popper-class": "tooltipcolor"
              }, {
                default: K(() => [...p[2] || (p[2] = [
                  U("i", { class: "iconfont icon-xinjian" }, null, -1)
                ])]),
                _: 1
              })
            ]),
            U("a", { onClick: r }, [
              D(m, {
                effect: "light",
                content: "保存",
                placement: "bottom",
                "popper-class": "tooltipcolor"
              }, {
                default: K(() => [...p[3] || (p[3] = [
                  U("i", { class: "iconfont icon-baocun" }, null, -1)
                ])]),
                _: 1
              })
            ]),
            U("a", { onClick: l }, [
              D(m, {
                effect: "light",
                content: "清空",
                placement: "bottom",
                "popper-class": "tooltipcolor"
              }, {
                default: K(() => [...p[4] || (p[4] = [
                  U("i", { class: "iconfont icon-qingkong" }, null, -1)
                ])]),
                _: 1
              })
            ]),
            U("a", { onClick: c }, [
              D(m, {
                effect: "light",
                content: "删除",
                placement: "bottom",
                "popper-class": "tooltipcolor"
              }, {
                default: K(() => [...p[5] || (p[5] = [
                  U("i", { class: "iconfont icon-shanchu" }, null, -1)
                ])]),
                _: 1
              })
            ])
          ]),
          p[9] || (p[9] = U("div", { style: { flex: "1" } }, null, -1)),
          U("div", vM, [
            D(A, {
              onCommand: d,
              "split-button": "",
              type: "primary",
              plain: "",
              size: "small",
              style: { "margin-top": "8px" }
            }, {
              dropdown: K(() => [
                D(y, null, {
                  default: K(() => [
                    (L(), tt(Ht, null, Ue(20, (w) => (L(), tt(Ht, null, [
                      w >= 5 && w <= 20 ? (L(), mt(b, {
                        key: 0,
                        command: w
                      }, {
                        default: K(() => [
                          on(Je(w) + "0%", 1)
                        ]),
                        _: 2
                      }, 1032, ["command"])) : Jt("", !0)
                    ], 64))), 64))
                  ]),
                  _: 1
                })
              ]),
              default: K(() => [
                on(Je(ct(n)) + "% ", 1)
              ]),
              _: 1
            })
          ]),
          p[10] || (p[10] = U("div", { style: { flex: "1" } }, null, -1)),
          U("div", xM, [
            U("a", { onClick: u }, [
              D(m, {
                effect: "light",
                content: "预览",
                placement: "bottom",
                "popper-class": "tooltipcolor"
              }, {
                default: K(() => [...p[6] || (p[6] = [
                  U("i", { class: "iconfont icon-yulan" }, null, -1)
                ])]),
                _: 1
              })
            ]),
            U("a", null, [
              D(m, {
                effect: "light",
                content: "导出",
                placement: "bottom",
                "popper-class": "tooltipcolor"
              }, {
                default: K(() => [...p[7] || (p[7] = [
                  U("i", { class: "iconfont icon-daochu" }, null, -1)
                ])]),
                _: 1
              })
            ]),
            U("a", null, [
              D(m, {
                effect: "light",
                content: "导入",
                placement: "bottom",
                "popper-class": "tooltipcolor"
              }, {
                default: K(() => [...p[8] || (p[8] = [
                  U("i", { class: "iconfont icon-daoru" }, null, -1)
                ])]),
                _: 1
              })
            ])
          ])
        ]),
        i.value ? (L(), mt(bM, {
          key: 0,
          onClose: p[0] || (p[0] = (w) => i.value = !1)
        })) : Jt("", !0),
        h.value ? (L(), mt(CM, {
          key: 1,
          onClose: p[1] || (p[1] = (w) => h.value = !1)
        })) : Jt("", !0)
      ], 64);
    };
  }
}, SM = /* @__PURE__ */ Xt(EM, [["__scopeId", "data-v-502eacd5"]]), MM = { class: "editorArea" }, BM = { class: "drawBox" }, IM = { style: { width: "100%", height: "100%" } }, PM = {
  __name: "editorArea",
  props: ["width", "height"],
  setup(s) {
    const t = Gi(), e = te(), { style: n } = Nn(e), i = s, o = ot(null), r = Ud(), a = Ke("topoApi");
    return oe(() => {
      e.el = o.value, e.style.height = i.height || 1080, e.style.width = i.width || 1920, e.init(), t.services = a, t.loadAllMenus(!0);
    }), xe(() => {
      e.graph && e.graph.dispose();
    }), (l, c) => (L(), tt("div", MM, [
      ct(e).graph ? (L(), mt(SM, { key: 0 })) : Jt("", !0),
      U("div", BM, [
        U("div", IM, [
          U("div", {
            ref_key: "container",
            ref: o,
            class: "editor-container",
            style: ze({ backgroundColor: ct(n).backgroundColor, backgroundImage: ct(n).backgroundImage ? `url(${ct(n).backgroundImage})` : "none" })
          }, null, 4),
          D(ct(r))
        ])
      ])
    ]));
  }
}, TM = /* @__PURE__ */ Xt(PM, [["__scopeId", "data-v-0d80170d"]]), kM = { class: "groups-menus" }, OM = {
  __name: "menus",
  setup(s) {
    const t = Gi(), { menus: e, current: n } = Nn(t), i = (o, r) => {
      t.setCurrentMenu(r);
    };
    return oe(() => {
      console.log(e, n);
    }), (o, r) => {
      const a = Y("el-icon"), l = Y("el-menu-item"), c = Y("el-sub-menu"), h = Y("el-menu");
      return L(), tt("div", kM, [
        D(h, {
          "default-active": ct(n)[1],
          onSelect: i,
          "background-color": "transparent"
        }, {
          default: K(() => [
            (L(!0), tt(Ht, null, Ue(ct(e), (u) => (L(), mt(c, {
              key: u.id,
              index: u.id,
              "popper-offset": 100
            }, {
              title: K(() => [
                D(a, null, {
                  default: K(() => [
                    D(ct(sg))
                  ]),
                  _: 1
                }),
                U("span", null, Je(u.name), 1)
              ]),
              default: K(() => [
                (L(!0), tt(Ht, null, Ue(u.children, (d) => (L(), mt(l, {
                  key: d.id,
                  index: d.id
                }, {
                  title: K(() => [
                    on(Je(d.name), 1)
                  ]),
                  default: K(() => [
                    D(a, null, {
                      default: K(() => [
                        D(ct(ng))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["index"]))), 128))
              ]),
              _: 2
            }, 1032, ["index"]))), 128))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]);
    };
  }
}, RM = /* @__PURE__ */ Xt(OM, [["__scopeId", "data-v-4ccd6e37"]]), DM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZQAAADsCAYAAABTw1C4AAAAAXNSR0IArs4c6QAAEo1JREFUeF7t3E3I5mUVBvD/DGPISBnF5Ec5FkxFG1FykYQLK7BFi2rppo1tgkBqVeJKrFURBG1q48ZluHAjVC4MbKEEbsRamFl+NEz0QcOgw0y8Ay7H68Ccns5zP7+29/F+7ud33t6La/HOsdNn7ry8+R8BAgQIELhGgWMC5RoF/ecECBAgcEVAoPhBIECAAIEWAYHSwugSAgQIEBAofgYIECBAoEVAoLQwuoQAAQIEBIqfAQIECBBoERAoLYwuIUCAAAGB4meAAAECBFoEBEoLo0sIECBAoBwot93/8+3kzXcTI0CAAIEDEzj/5vPba09/M37rcqB8+hu/315+/K54oQECBAgQWEug+vtfoKy1d9+GAAEC7QICpZ3UhQQIEDhMAYFymHv3rQkQINAuIFDaSV1IgACBwxQQKIe5d9+aAAEC7QICpZ3UhQQIEDhMgZ0Hir9TyT9ob//z1e2NZ7+3XTj3Uh42QYDANQtc/+HPbLfc+8PtfTfefs13rXxB+juTnQdK9QNXXkr6brd/5YntreceFSgJyjmBJoGjQLnpnke2V596oOnGNa9Jv7/T+bsqbX+HUv3ANddR+1YCpeZkikCXgECpSabf3+lcoNScW6cESiunywhEAYESia4MpMBI5wKl5tw6JVBaOV1GIAoIlEgkUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJNJQakTzpgTKvJ140doCAqW239RA0rmGUnNunRIorZwuIxAFBEok0lBqRPOmBMq8nXjR2gICpbbf1EDSuYZSc26dEiitnC4jEAUESiTSUGpE86YEyrydeNHaAgKltt/UQNK5hlJzbp0SKK2cLiMQBQRKJJrZUD7xtSe3S++cr73+QKdOnPzI9tdff3u7cO6lAxXwtQnsVuAoUD76xZ9uF8//bbcfvGefdvzEye2VJ7961VfvvKEcLc7/soAwyUYmCHQK+N1U03yv3007D5Tak00RIECAwL4JCJR925j3EiBAYKiAQBm6GM8iQIDAvgkIlH3bmPcSIEBgqIBAGboYzyJAgMC+CQiUfduY9xIgQGCowM4D5ZZ7f7C978aPD+UY8qzLl7a3fveYv0MZsg7P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", QM = "data:image/png;base64,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", NM = "data:image/png;base64,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", LM = "data:image/png;base64,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", FM = "data:image/png;base64,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", zM = "data:image/png;base64,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", UM = "data:image/png;base64,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", KM = "data:image/png;base64,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", JM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.9872 921.5232l-0.0896 0.0768-31.6736-31.68 0.0768-0.0768-76.864-76.864 31.6736-31.68 76.8768 76.864 76.864-76.864 31.6736 31.68-76.864 76.864 0.0768 0.0768L512.064 921.6z m0-102.4l-0.0896 0.0768-31.6736-31.68 0.0768-0.0768-76.864-76.864 31.6736-31.68 54.4896 54.4832V290.6176l-54.4896 54.464-31.6736-31.68 76.864-76.8384-0.0768-0.0704 31.6736-31.68 0.0896 0.0768 0.0768-0.0768 31.6736 31.68-0.0768 0.0704 76.864 76.8384-31.6736 31.68-54.4512-54.432v442.7008l54.4512-54.4512 31.6736 31.68-76.864 76.864 0.0768 0.0768L512.064 819.2z m0-653.2864L435.1104 242.6816l-31.6736-31.68 76.864-76.8384-0.0768-0.0704 31.6736-31.68 0.0896 0.0768 0.0768-0.0768 31.6736 31.68-0.0768 0.0704 76.864 76.8384-31.6736 31.68z" fill="#EF5317" /></svg>', jM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M544 64v268.256a192.064 192.064 0 0 1 147.84 256.704A192 192 0 1 1 512 904.608a192 192 0 1 1-179.84-315.68A192.064 192.064 0 0 1 480 332.256V64h64z m-197.44 555.072l-5.856 0.832A160.032 160.032 0 0 0 368 937.6a159.68 159.68 0 0 0 124.48-59.456 190.72 190.72 0 0 1-28.48-100.544c0-23.68 4.288-46.4 12.16-67.36a192 192 0 0 1-125.12-83.904l-4.48-7.264z m330.88-0.064l-0.8 1.44a192.192 192.192 0 0 1-128.832 89.824A190.72 190.72 0 0 1 560 777.6a191.104 191.104 0 0 1-28.384 100.544 160 160 0 1 0 145.824-259.104zM509.344 713.6l-2.016 4.8A159.584 159.584 0 0 0 496 777.6c0 25.024 5.76 48.672 16 69.76a158.72 158.72 0 0 0 16-69.76c0-22.784-4.768-44.448-13.344-64.064l-5.312 0.032z m-124.608-95.104l1.28 1.76a159.84 159.84 0 0 0 104.544 59.968l1.824-3.136a159.456 159.456 0 0 0-107.648-58.592z m254.56 0.064l-3.872 0.384a159.808 159.808 0 0 0-103.872 58.144l1.92 3.072a159.488 159.488 0 0 0 100.96-55.52l4.864-6.08zM512 361.6a160 160 0 0 0-146.656 224.064l2.656-0.064c57.344 0 108.8 25.152 144 64.992a191.552 191.552 0 0 1 144-64.992h2.688a160 160 0 0 0-146.688-224z" /></svg>', GM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M533.0944 534.3232c-82.1248 0-148.8896-66.7648-148.8896-148.8896s66.7648-148.8896 148.8896-148.8896 148.8896 66.7648 148.8896 148.8896-66.7648 148.8896-148.8896 148.8896z m0-277.504c-70.8608 0-128.4096 57.5488-128.4096 128.4096s57.5488 128.4096 128.4096 128.4096c70.8608 0 128.4096-57.5488 128.4096-128.4096s-57.5488-128.4096-128.4096-128.4096z" fill="#E60012" /><path d="M633.6512 459.9808h-200.704l98.7136-158.1056 101.9904 158.1056z m-163.84-20.48h126.1568l-64.1024-99.5328-62.0544 99.5328z" fill="#E60012" /><path d="M533.0944 694.272c-82.1248 0-148.8896-66.7648-148.8896-148.8896s66.7648-148.8896 148.8896-148.8896 148.8896 66.7648 148.8896 148.8896c0 81.92-66.7648 148.8896-148.8896 148.8896z m0-277.504c-70.8608 0-128.4096 57.5488-128.4096 128.4096s57.5488 128.4096 128.4096 128.4096c70.8608 0 128.4096-57.5488 128.4096-128.4096s-57.5488-128.4096-128.4096-128.4096z" fill="#EF7C1B" /><path d="M522.8544 611.9424h20.48v317.0304h-20.48z" fill="#EF7C1B" /><path d="M522.8544 57.9584h20.48v192.512h-20.48z" fill="#E60012" /><path d="M534.7328 632.832l-90.9312-101.9904 15.1552-13.5168 75.3664 84.3776 72.704-84.3776 15.5648 13.5168z" fill="#EF7C1B" /></svg>', VM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 170.666667c-117.824 0-213.333333 95.509333-213.333333 213.333333s95.509333 213.333333 213.333333 213.333333 213.333333-95.509333 213.333333-213.333333S629.824 170.666667 512 170.666667zM256 384c0-141.376 114.624-256 256-256s256 114.624 256 256-114.624 256-256 256-256-114.624-256-256z" fill="#000000" /><path d="M512 426.666667c-117.824 0-213.333333 95.509333-213.333333 213.333333s95.509333 213.333333 213.333333 213.333333 213.333333-95.509333 213.333333-213.333333-95.509333-213.333333-213.333333-213.333333zM256 640c0-141.376 114.624-256 256-256s256 114.624 256 256-114.624 256-256 256-256-114.624-256-256z" fill="#000000" /><path d="M490.666667 981.333333v-106.666666h42.666666v106.666666h-42.666666zM490.666667 149.333333V42.666667h42.666666v106.666666h-42.666666z" fill="#000000" /></svg>', YM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M431.431671 299.041479h159.572225v426.308151H431.431671z" fill="#d81e06" /><path d="M609.777099 744.122832H412.658468v-463.854556h197.118631v463.854556z m-159.572225-37.546405h122.025819v-388.761745H450.204874v388.761745z" fill="#d81e06" /><path d="M492.44458 131.568864h37.546406v186.167596h-37.546406zM492.44458 707.280422h37.546406v186.167596h-37.546406z" fill="#d81e06" /><path d="M594.993201 252.656023L511.06134 145.414101 427.129478 252.656023l-29.567794-23.153617L511.06134 84.479413l113.499656 145.022993z" fill="#d81e06" /><path d="M594.993201 168.17661L511.06134 60.934688 427.129478 168.17661l-29.567794-23.153617 113.499656-145.022993L624.560996 145.022993z" fill="#d81e06" /><path d="M511.06134 939.520587L397.561684 794.497594l29.567794-23.075396 83.931862 107.241922L594.993201 771.422198l29.567795 23.075396z" fill="#d81e06" /><path d="M511.06134 1024L397.561684 878.977007l29.567794-23.075395 83.931862 107.241922L594.993201 855.901612l29.567795 23.075395z" fill="#d81e06" /></svg>', HM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M494.481834 206.967196l-8.668783-7.223986 71.51746-87.410229c1.083598-1.444797 2.889594-2.167196 4.695591-2.167196s3.611993 0.722399 4.695591 2.167196l71.51746 87.410229-8.668783 7.223986-67.544268-82.714639-67.544268 82.714639zM566.360494 119.195767c0 0.361199 0 0.361199 0 0z" fill="#FF0000" /><path d="M494.481834 148.091711l-8.668783-7.223986 71.51746-87.410229c1.083598-1.444797 2.889594-2.167196 4.695591-2.167196s3.611993 0.722399 4.695591 2.167196L638.600353 140.867725l-8.668783 7.223986-67.544268-82.714639L494.481834 148.091711z m71.87866-87.771429c0 0.361199 0 0.361199 0 0zM562.026102 913.834215c-1.805996 0-3.250794-0.722399-4.334391-2.167196l-71.87866-87.771428 8.668783-7.223986 67.544268 82.714638 67.544268-82.714638 8.668783 7.223986-71.878659 87.771428c-1.083598 1.444797-2.528395 2.167196-4.334392 2.167196z" fill="#FF0000" /><path d="M562.026102 972.7097c-1.805996 0-3.250794-0.722399-4.334391-2.167196l-71.87866-87.771428 8.668783-7.223986 67.544268 82.714638 67.544268-82.714638 8.668783 7.223986-71.878659 87.771428c-1.083598 1.444797-2.528395 2.167196-4.334392 2.167196zM567.805291 849.179541h-11.197178V617.650794l-171.208466-252.839507 9.391182-6.140388 171.930864 254.284304c0.722399 1.083598 1.083598 2.167196 1.083598 3.250793v232.973545zM556.608113 178.071252h11.197178v183.489242h-11.197178z" fill="#FF0000" /><path d="M510.898342 402.654138l94.446392-90.429856 7.740501 8.087252-94.44278 90.429856z" fill="#FF0000" /><path d="M511.158406 320.35849l7.744113-8.087252 94.457227 90.415408-7.744113 8.090864zM556.608113 849.179541h11.197178v58.875485h-11.197178zM556.608113 119.195767h11.197178v58.875485h-11.197178z" fill="#FF0000" /></svg>', WM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M85.18656007 375.38588444l-13.9264 0 0-387.28817777 13.9264 0z" fill="#EF1616" /><path d="M12.7726934 188.10538666l-9.84746666-9.84746666 72.41500444-72.41500444 9.84746666 9.84746666z" fill="#EF1616" /><path d="M71.25674674 115.69038222l9.84746666-9.84746665 72.41500443 72.41500443-9.84746665 9.84746667zM12.77496896 261.79811556l-9.84746667-9.84746667 72.41500445-72.41500445 9.84746666 9.84746667z" fill="#EF1616" /><path d="M71.25447117 189.38311111l9.84746667-9.84746667 72.41500445 72.41500445-9.84746667 9.84746667zM85.1797334 1037.94346667l-13.9264 0 0-387.28817778 13.9264 0z" fill="#EF1616" /><path d="M85.18769784 910.336l-9.84746665 9.84746667-72.41500445-72.41500445 9.84746666-9.84746666z" fill="#EF1616" /><path d="M143.67175118 837.92099556l9.84746666 9.84746665-72.41500444 72.41500446-9.84746666-9.84746667z" fill="#EF1616" /><path d="M85.18542229 836.64668444l-9.84746667 9.84746667-72.41500444-72.41500444 9.84746666-9.84746667z" fill="#EF1616" /><path d="M143.67402674 764.23168l9.84746666 9.84746667-72.41614222 72.41500444-9.84632889-9.84746667z" fill="#EF1616" /><path d="M19.62666674 375.38702222l118.32888888 0L137.95555561 650.33102222l-118.32888886 0-1e-8-274.944z m104.41386666 13.91502222l-90.48746666 0L33.55306674 636.40462222l90.48746666 0 0-247.10257778z" fill="#EF1616" /></svg>', qM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M531.791456 701.961295a17.407498 17.407498 0 0 1-15.824998-16.616247v-316.499956a15.824998 15.824998 0 0 1 15.824998-15.824998 17.407498 17.407498 0 0 1 15.824998 16.616248v320.456205a15.824998 15.824998 0 0 1-15.824998 11.868748zM533.373956 377.548841a18.989997 18.989997 0 0 1-11.077499 0L172.564006 27.02514a15.033748 15.033748 0 0 1 0-22.154997 15.033748 15.033748 0 0 1 22.154997 0l349.732451 345.776202a15.033748 15.033748 0 0 1 0 22.154996 14.242498 14.242498 0 0 1-11.077498 4.7475zM609.333945 1024H455.040217a15.824998 15.824998 0 0 1 0-31.649996h158.249977a15.824998 15.824998 0 0 1 0 31.649996zM762.836423 870.497522H300.746488a15.824998 15.824998 0 0 1 0-31.649996h462.089935a15.824998 15.824998 0 1 1 0 31.649996zM840.378913 716.203793H223.995249a15.824998 15.824998 0 0 1-15.824998-15.824998 15.824998 15.824998 0 0 1 15.824998-16.616247H840.378913a15.824998 15.824998 0 0 1 15.824997 16.616247 15.824998 15.824998 0 0 1-15.824997 15.824998z" /></svg>', XM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.666667 704H213.333333v-42.666667h597.333334v42.666667zM725.333333 810.666667H298.666667v-42.666667h426.666666v42.666667zM640 917.333333H384v-42.666666h256v42.666666z" fill="#000000" /><path d="M490.666667 704V106.666667h42.666666v597.333333h-42.666666z" fill="#000000" /></svg>', $M = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M640 176H528V0h-32v176H384v672h112v176h32V848h112z" fill="#D81E06" /></svg>', _M = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M700.16 341.333333l55.04-55.04a42.666667 42.666667 0 0 0-60.16-60.16l-12.373333 12.373334V42.666667a42.666667 42.666667 0 0 0-85.333334 0v195.84l-12.373333-12.373334a42.666667 42.666667 0 0 0-60.16 60.16L579.84 341.333333l-55.466667 55.04a42.666667 42.666667 0 1 0 60.16 60.16L640 401.493333l55.04 55.04a42.666667 42.666667 0 1 0 60.16-60.16zM333.226667 230.826667a42.666667 42.666667 0 0 0-69.12 50.346666L597.333333 739.413333V981.333333a42.666667 42.666667 0 0 0 85.333334 0v-256a42.666667 42.666667 0 0 0-8.106667-25.173333z" /></svg>', ZM = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="98.08px" viewBox="0 0 2088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M2088.44 442.576H5.726v138.848H2088.44V442.576z" fill="#FF0000" /></svg>', t2 = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="100.64px" viewBox="0 0 2035 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M2538.89999992 217.3c2.9-0.1 5.7-0.1 8.6-0.1"  /><path d="M1344.19999992 960.2H703.99999992V130.3h640.1v829.9z m-567.5-70.1h494.8V200.4H776.69999992v689.7z" fill="#03E086" /><path d="M896.09999992 61h254.4v70H896.09999992zM1064.99999992 755.9l-80.7-39.7 63.6-129.1H855.49999992l128.3-255.3 80.4 40.5-62.7 124.8h191z" fill="#03E086" /></svg>', e2 = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M207.36 359.936l58.624-58.624c9.216-9.216 21.418667-14.250667 34.389333-14.250667s25.173333 5.034667 34.389334 14.250667l41.557333 41.557333c17.749333 17.749333 40.96 26.88 64.341333 26.88 18.773333 0 37.632-5.802667 53.930667-17.749333l45.909333-33.621333c9.472-6.912 11.52-20.224 4.608-29.696a21.265067 21.265067 0 0 0-29.696-4.608l-45.909333 33.621333a48.452267 48.452267 0 0 1-63.146667-4.864l-41.557333-41.557333c-17.237333-17.237333-40.106667-26.709333-64.426667-26.709334-24.32 0-47.274667 9.472-64.426666 26.709334l-58.624 58.624c-8.277333 8.277333-8.277333 21.76 0 30.037333 8.277333 8.277333 21.76 8.277333 30.037333 0zM119.466667 119.466667v785.066666h785.066666V119.466667H119.466667z m706.645333 42.496L161.962667 826.112V161.962667h664.149333z m-640 700.074666l675.925333-675.925333v675.925333H186.112zM490.837333 685.568h339.882667v42.496H490.837333zM736.682667 790.101333h94.122666v42.496H736.682667zM613.717333 790.101333h94.122667v42.496H613.717333zM490.837333 790.101333h94.122667v42.496H490.837333z" /></svg>', n2 = /* @__PURE__ */ Object.assign({
  "../../../assets/iconfont/svg/A相手车刀闸合.svg": JM,
  "../../../assets/iconfont/svg/三绕组变压器.svg": jM,
  "../../../assets/iconfont/svg/变压器_1.svg": GM,
  "../../../assets/iconfont/svg/变压器_2.svg": VM,
  "../../../assets/iconfont/svg/手持开关盒.svg": YM,
  "../../../assets/iconfont/svg/手持断路器.svg": HM,
  "../../../assets/iconfont/svg/抽屉式断路器断开.svg": WM,
  "../../../assets/iconfont/svg/接地_1.svg": qM,
  "../../../assets/iconfont/svg/接地_2.svg": XM,
  "../../../assets/iconfont/svg/断路器-he.svg": $M,
  "../../../assets/iconfont/svg/断路器.svg": _M,
  "../../../assets/iconfont/svg/母线.svg": ZM,
  "../../../assets/iconfont/svg/电池.svg": t2,
  "../../../assets/iconfont/svg/直流逆变器.svg": e2
});
function i2(s) {
  return s ? (s = s.replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"').replace(/stroke="(?!none)[^"]*"/gi, 'stroke="currentColor"'), s = s.replace(/<([a-z]+)([^>]*?)\/?>/gi, (t, e, n) => {
    const i = t.endsWith("/>") ? "/>" : ">";
    return !/(fill=)/i.test(n) && /^(path|circle|rect|polygon|polyline)$/i.test(e) ? `<${e}${n} fill="currentColor"${i}` : t;
  }), s) : "";
}
const s2 = Object.entries(n2).map(([s, t]) => ({
  name: s.split("/").pop().replace(".svg", ""),
  svg: i2(t)
})), o2 = { class: "nodes" }, r2 = { class: "groups" }, a2 = ["onClick"], l2 = { class: "list" }, c2 = { style: { width: "100%", display: "flex", "justify-content": "space-between", "align-items": "center", padding: "20px 10px 10px 10px" } }, h2 = { style: { padding: "10px" } }, u2 = ["onMousedown", "title"], d2 = ["innerHTML"], g2 = {
  __name: "nodes",
  setup(s) {
    const t = te(), e = {
      IMG: "img",
      ICON: "icon",
      SVG: "svg",
      OTHER: "other"
    }, n = ot(0), i = ot([
      {
        name: "控件",
        icon: "iconfont icon-icon-relativity",
        active: [],
        children: [
          {
            name: "基础",
            layout: "1fr 1fr 1fr",
            list: [
              { name: "线段", renderType: "icon", icon: "iconfont icon-xianduan", data: { type: "line" } },
              { name: "基础文字", renderType: "icon", icon: "iconfont icon-wenzi", data: { type: "text" } },
              { name: "数值", renderType: "icon", icon: "iconfont icon-shuzhi", data: { type: "data" } },
              { name: "图标", renderType: "icon", icon: "iconfont icon-tubiao", data: { type: "icon" } },
              { name: "图片", renderType: "icon", icon: "iconfont icon-tupian", data: { type: "img" } },
              { name: "自定义", renderType: "other", icon: "iconfont icon-tupian", data: { type: "other" } }
            ]
          },
          { name: "图形", list: [] },
          { name: "表格", list: [] },
          { name: "图表", list: [] },
          { name: "表单", list: [] }
        ]
      },
      {
        name: "模板",
        icon: "iconfont icon-root-list",
        active: [],
        children: [
          {
            name: "布局",
            layout: "1fr 1fr",
            list: [
              { name: "布局1", renderType: "img", icon: DM, data: { type: "layout" } },
              { name: "布局2", renderType: "img", icon: QM, data: { type: "layout" } },
              { name: "布局3", renderType: "img", icon: NM, data: { type: "layout" } },
              { name: "布局4", renderType: "img", icon: LM, data: { type: "layout" } },
              { name: "布局5", renderType: "img", icon: FM, data: { type: "layout" } },
              { name: "布局6", renderType: "img", icon: zM, data: { type: "layout" } },
              { name: "布局7", renderType: "img", icon: UM, data: { type: "layout" } },
              { name: "布局8", renderType: "img", icon: KM, data: { type: "layout" } }
            ]
          }
          // { name: '主题', list: [] }
        ]
      },
      { name: "设备", icon: "iconfont icon-control-platform", children: [], active: [] },
      { name: "图表", icon: "iconfont icon-icon_chart", children: [], active: [] },
      {
        name: "素材",
        icon: "iconfont icon-icon_image",
        children: [
          {
            name: "电器svg",
            layout: "1fr 1fr 1fr",
            list: s2.map((h) => ({
              name: h.name,
              renderType: "svg",
              icon: h.svg,
              data: { type: "svg" }
            }))
          }
        ],
        active: []
      }
    ]), o = ot(""), r = (h) => {
      n.value = h;
    }, a = () => {
      if (i.value[n.value].active.length > 0)
        i.value[n.value].active = [];
      else {
        const h = [];
        i.value[n.value].children.forEach((u, d) => {
          h.push(d);
        }), i.value[n.value].active = h;
      }
    }, l = (h, u) => {
      if (console.log(u), u.renderType === "other") {
        const d = t.graph.createNode({ shape: "vue-node" });
        d.setData({ icon: u.icon, name: u.name, ...u.data }), t.dnd.start(d, h);
      } else {
        const d = t.graph.createNode({ shape: u.renderType + "-node" });
        d.setData({ icon: u.icon, name: u.name, ...u.data }), t.dnd.start(d, h);
      }
    }, c = ({ node: h }) => {
      var u;
      if (((u = h.data) == null ? void 0 : u.type) === "line") {
        const d = h.position();
        console.log(h, h.position()), h.remove();
        const g = t.graph.addNode({
          x: d.x - 50,
          y: d.y,
          width: 5,
          height: 5,
          attrs: {
            body: {
              fill: "transparent",
              stroke: "transparent"
            }
          },
          zIndex: 1
        }), f = t.graph.addNode({
          x: d.x + 50,
          y: d.y,
          width: 5,
          height: 5,
          attrs: {
            body: {
              fill: "transparent",
              stroke: "transparent"
            }
          },
          zIndex: 1
        }), p = t.graph.addEdge({
          source: g,
          target: f,
          router: "normal",
          attrs: { line: { stroke: "#1890ff", strokeWidth: 2, sourceMarker: null, targetMarker: null } },
          zIndex: 0
        });
        t.graph.select(p);
      }
    };
    return oe(() => {
      t.graph.on("node:added", c);
    }), xe(() => {
      t.graph.off("node:added", c);
    }), (h, u) => {
      const d = Y("el-input"), g = Y("el-tooltip"), f = Y("el-image"), p = Y("el-collapse-item"), m = Y("el-collapse");
      return L(), tt("div", o2, [
        U("div", r2, [
          (L(!0), tt(Ht, null, Ue(i.value, (b, y) => (L(), tt("div", {
            key: b.index,
            class: ye(["group", { active: n.value === y }]),
            onClick: (A) => r(y)
          }, [
            U("i", {
              class: ye(b.icon)
            }, null, 2),
            U("span", null, Je(b.name), 1)
          ], 10, a2))), 128))
        ]),
        U("div", l2, [
          U("div", c2, [
            D(d, {
              modelValue: o.value,
              "onUpdate:modelValue": u[0] || (u[0] = (b) => o.value = b),
              style: { width: "180px" },
              placeholder: "请输入过滤",
              "prefix-icon": ct(lg),
              clearable: ""
            }, null, 8, ["modelValue", "prefix-icon"]),
            D(g, {
              effect: "light",
              content: "展开/折叠",
              placement: "top"
            }, {
              default: K(() => [
                U("div", {
                  style: { cursor: "pointer", "font-size": "20px" },
                  onClick: a
                }, [...u[2] || (u[2] = [
                  U("i", { class: "iconfont icon-menu-fold" }, null, -1)
                ])])
              ]),
              _: 1
            })
          ]),
          U("div", h2, [
            D(m, {
              modelValue: i.value[n.value].active,
              "onUpdate:modelValue": u[1] || (u[1] = (b) => i.value[n.value].active = b),
              "expand-icon-position": "left",
              style: { border: "none", "background-color": "transparent" }
            }, {
              default: K(() => [
                (L(!0), tt(Ht, null, Ue(i.value[n.value].children, (b, y) => (L(), mt(p, {
                  key: y,
                  title: b.name,
                  name: y
                }, {
                  default: K(() => [
                    U("div", {
                      class: "expand-content",
                      style: ze({ gridTemplateColumns: b.layout ? b.layout : "1fr 1fr 1fr" })
                    }, [
                      (L(!0), tt(Ht, null, Ue(b.list.filter((A) => A.name.includes(o.value)), (A, w) => (L(), tt("div", {
                        key: w,
                        class: "graphic",
                        onMousedown: (x) => l(x, A),
                        title: A.name
                      }, [
                        A.renderType === e.IMG ? (L(), mt(f, {
                          key: 0,
                          src: A.icon,
                          style: { width: "100px", height: "60px", margin: "auto" }
                        }, null, 8, ["src"])) : Jt("", !0),
                        A.renderType === e.ICON ? (L(), tt("i", {
                          key: 1,
                          class: ye(A.icon),
                          style: { "font-size": "24px" }
                        }, null, 2)) : Jt("", !0),
                        A.renderType === e.SVG ? (L(), tt("div", {
                          key: 2,
                          class: "svg-icon",
                          innerHTML: A.icon
                        }, null, 8, d2)) : Jt("", !0),
                        A.renderType === e.OTHER ? (L(), tt("i", {
                          key: 3,
                          class: ye(A.icon),
                          style: { "font-size": "24px" }
                        }, null, 2)) : Jt("", !0),
                        U("p", null, Je(A.name), 1)
                      ], 40, u2))), 128))
                    ], 4)
                  ]),
                  _: 2
                }, 1032, ["title", "name"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ]);
    };
  }
}, f2 = /* @__PURE__ */ Xt(g2, [["__scopeId", "data-v-eeff84fb"]]), p2 = { class: "graphics" }, m2 = { class: "menus" }, b2 = {
  __name: "index",
  setup(s) {
    const t = ot(0);
    return (e, n) => (L(), tt("div", p2, [
      U("div", m2, [
        U("div", {
          class: ye(["menu", { active: t.value === 0 }]),
          onClick: n[0] || (n[0] = (i) => t.value = 0)
        }, "菜单目录", 2),
        U("div", {
          class: ye(["menu", { active: t.value === 1 }]),
          onClick: n[1] || (n[1] = (i) => t.value = 1)
        }, "系统资源", 2),
        U("div", {
          class: ye(["menu", { active: t.value === 2 }]),
          onClick: n[2] || (n[2] = (i) => t.value = 2)
        }, "我的资源", 2),
        U("div", {
          class: ye(["menu", { active: t.value === 3 }]),
          onClick: n[3] || (n[3] = (i) => t.value = 3)
        }, "数据模拟", 2)
      ]),
      t.value === 0 ? (L(), mt(RM, { key: 0 })) : Jt("", !0),
      t.value === 1 ? (L(), mt(f2, { key: 1 })) : Jt("", !0)
    ]));
  }
}, y2 = /* @__PURE__ */ Xt(b2, [["__scopeId", "data-v-e999f41f"]]), C2 = ["src"], A2 = {
  __name: "graphProperty",
  setup(s) {
    Gi();
    const t = te(), { style: e, name: n } = Nn(t), i = ot([
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585",
      "rgba(255, 69, 0, 0.68)",
      "rgb(255, 120, 0)",
      "hsv(51, 100, 98)",
      "hsva(120, 40, 94, 0.5)",
      "hsl(181, 100%, 37%)",
      "hsla(209, 100%, 56%, 0.73)",
      "#c7158577"
    ]);
    function o(a) {
      return new Promise((l, c) => {
        const h = new FileReader();
        h.onload = () => l(h.result), h.onerror = c, h.readAsDataURL(a);
      });
    }
    const r = async (a) => {
      if (!a.type.startsWith("image/"))
        return vn.error("只能上传图片文件"), !1;
      if (!(a.size / 1024 / 1024 < 2))
        return vn.error("图片大小不能超过 2MB"), !1;
      try {
        const c = await o(a);
        e.value.backgroundImage = c;
      } catch {
        return vn.error("图片读取失败"), !1;
      }
      return !1;
    };
    return ot(1920), ot(1080), (a, l) => {
      const c = Y("el-input"), h = Y("el-form-item");
      Y("el-input-number"), Y("el-button");
      const u = Y("el-color-picker"), d = Y("el-icon"), g = Y("el-upload"), f = Y("el-form");
      return L(), mt(f, {
        class: "graphProperty",
        size: "small",
        "label-width": "auto",
        onSubmit: l[4] || (l[4] = qd(() => {
        }, ["prevent"]))
      }, {
        default: K(() => [
          D(h, { label: "目录名称" }, {
            default: K(() => [
              D(c, {
                modelValue: ct(n),
                "onUpdate:modelValue": l[0] || (l[0] = (p) => Xd(n) ? n.value = p : null)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          Jt("", !0),
          D(h, { label: "背景颜色" }, {
            default: K(() => [
              D(u, {
                modelValue: ct(e).backgroundColor,
                "onUpdate:modelValue": l[3] || (l[3] = (p) => ct(e).backgroundColor = p),
                "show-alpha": "",
                predefine: i.value,
                style: { width: "100%", height: "30px" }
              }, null, 8, ["modelValue", "predefine"])
            ]),
            _: 1
          }),
          D(h, { label: "背景图片" }, {
            default: K(() => [
              D(g, {
                accept: "image/*",
                "show-file-list": !1,
                "before-upload": r
              }, {
                default: K(() => [
                  ct(e).backgroundImage ? (L(), tt("img", {
                    key: 0,
                    src: ct(e).backgroundImage,
                    style: { width: "100%", height: "100%" }
                  }, null, 8, C2)) : (L(), mt(d, {
                    key: 1,
                    class: "avatar-uploader-icon"
                  }, {
                    default: K(() => [
                      D(ct(rg))
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, w2 = /* @__PURE__ */ Xt(A2, [["__scopeId", "data-v-3a1238a6"]]), v2 = {
  __name: "nodePanel",
  setup(s) {
    var r;
    const t = te(), e = Ke("cellId"), n = Ke("getCurCell")(), i = n.getData(), o = ot({
      name: ((r = n.getData()) == null ? void 0 : r.name) || "",
      x: n.position().x,
      y: n.position().y,
      width: n.size().width,
      height: n.size().height,
      zIndex: n.prop("zIndex"),
      opacity: n.prop("opacity") || 1,
      borderStyle: i.borderStyle,
      borderRadius: i.borderRadius,
      borderWidth: i.borderWidth,
      borderColor: i.borderColor,
      backgroundColor: i.backgroundColor
    });
    return sr(o.value, () => {
      n.prop("position", { x: o.value.x, y: o.value.y }), n.prop("size", { width: o.value.width, height: o.value.height }), n.prop("zIndex", o.value.zIndex);
      const { opacity: a, borderStyle: l, borderRadius: c, borderWidth: h, borderColor: u, backgroundColor: d } = o.value;
      n.setData({
        opacity: a,
        borderStyle: l,
        borderRadius: c,
        borderWidth: h,
        borderColor: u,
        backgroundColor: d
      });
    }), oe(() => {
      t.graph.on("node:resized", ({ node: a }) => {
        a.id === e.value && (o.value.width = a.size().width, o.value.height = a.size().height);
      }), t.graph.on("node:change:position", ({ node: a }) => {
        console.log(a.position()), a.id === e.value && (o.value.x = +a.position().x.toFixed(0), o.value.y = +a.position().y.toFixed(0));
      });
    }), xe(() => {
      t.graph.off("node:resized"), t.graph.off("node:change:position");
    }), (a, l) => {
      const c = Y("el-input"), h = Y("el-form-item"), u = Y("el-input-number"), d = Y("el-slider"), g = Y("el-option"), f = Y("el-select"), p = Y("el-color-picker"), m = Y("el-form");
      return L(), mt(m, {
        size: "small",
        "label-width": "80px",
        "label-position": "left"
      }, {
        default: K(() => [
          D(h, { label: "元素名称" }, {
            default: K(() => [
              D(c, {
                modelValue: o.value.name,
                "onUpdate:modelValue": l[0] || (l[0] = (b) => o.value.name = b)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          D(h, { label: "位置" }, {
            default: K(() => [
              D(u, {
                modelValue: o.value.x,
                "onUpdate:modelValue": l[1] || (l[1] = (b) => o.value.x = b),
                "controls-position": "right",
                min: 0,
                step: 5,
                style: { width: "80px", "margin-right": "10px" }
              }, null, 8, ["modelValue"]),
              D(u, {
                modelValue: o.value.y,
                "onUpdate:modelValue": l[2] || (l[2] = (b) => o.value.y = b),
                "controls-position": "right",
                min: 0,
                step: 5,
                style: { width: "80px" }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          D(h, { label: "长宽" }, {
            default: K(() => [
              D(u, {
                modelValue: o.value.width,
                "onUpdate:modelValue": l[3] || (l[3] = (b) => o.value.width = b),
                "controls-position": "right",
                min: 0,
                step: 5,
                style: { width: "80px", "margin-right": "10px" }
              }, null, 8, ["modelValue"]),
              D(u, {
                modelValue: o.value.height,
                "onUpdate:modelValue": l[4] || (l[4] = (b) => o.value.height = b),
                "controls-position": "right",
                min: 0,
                step: 5,
                style: { width: "80px" }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          D(h, { label: "层级" }, {
            default: K(() => [
              D(u, {
                modelValue: o.value.zIndex,
                "onUpdate:modelValue": l[5] || (l[5] = (b) => o.value.zIndex = b),
                min: 0,
                max: 1e4,
                step: 1,
                style: { width: "160px" }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          D(h, { label: "透明度" }, {
            default: K(() => [
              D(d, {
                modelValue: o.value.opacity,
                "onUpdate:modelValue": l[6] || (l[6] = (b) => o.value.opacity = b),
                min: 0,
                max: 1,
                step: 0.01,
                style: { width: "160px" }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          D(h, { label: "边框" }, {
            default: K(() => [
              D(f, {
                modelValue: o.value.borderStyle,
                "onUpdate:modelValue": l[7] || (l[7] = (b) => o.value.borderStyle = b),
                style: { width: "60px", "margin-right": "10px" },
                placeholder: "样式"
              }, {
                default: K(() => [
                  D(g, {
                    label: "无",
                    value: "none"
                  }),
                  D(g, {
                    label: "实线",
                    value: "solid"
                  }),
                  D(g, {
                    label: "虚线",
                    value: "dashed"
                  }),
                  D(g, {
                    label: "点线",
                    value: "dotted"
                  }),
                  D(g, {
                    label: "双实线",
                    value: "double"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              D(u, {
                modelValue: o.value.borderWidth,
                "onUpdate:modelValue": l[8] || (l[8] = (b) => o.value.borderWidth = b),
                "controls-position": "right",
                min: 0,
                step: 1,
                style: { width: "60px", "margin-right": "10px" },
                placeholder: "宽度"
              }, null, 8, ["modelValue"]),
              D(p, {
                modelValue: o.value.borderColor,
                "onUpdate:modelValue": l[9] || (l[9] = (b) => o.value.borderColor = b),
                "show-alpha": "",
                placeholder: "颜色"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          D(h, { label: "背景颜色" }, {
            default: K(() => [
              D(p, {
                modelValue: o.value.backgroundColor,
                "onUpdate:modelValue": l[10] || (l[10] = (b) => o.value.backgroundColor = b),
                "show-alpha": "",
                placeholder: "颜色",
                style: { width: "100%", height: "30px" }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          U("div", null, Je(JSON.stringify(ct(n).getData(), null, 2)), 1)
        ]),
        _: 1
      });
    };
  }
}, x2 = {
  __name: "linePanel",
  setup(s) {
    const t = ot({
      name: "line"
    });
    return (e, n) => {
      const i = Y("el-input"), o = Y("el-form-item"), r = Y("el-slider"), a = Y("el-form");
      return L(), mt(a, {
        size: "small",
        "label-width": "80px",
        "label-position": "left"
      }, {
        default: K(() => [
          D(o, { label: "元素名称" }, {
            default: K(() => [
              D(i, {
                modelValue: t.value.name,
                "onUpdate:modelValue": n[0] || (n[0] = (l) => t.value.name = l)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          D(o, { label: "透明度" }, {
            default: K(() => [
              D(r, {
                modelValue: t.value.opacity,
                "onUpdate:modelValue": n[1] || (n[1] = (l) => t.value.opacity = l),
                min: 0,
                max: 1,
                step: 0.01,
                style: { width: "160px" }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, E2 = { class: "propertyForm" }, S2 = {
  __name: "base",
  setup(s) {
    Bs(), te();
    const t = Ke("getCurCell")(), e = ot(t == null ? void 0 : t.isNode());
    return console.log(Ke("cellId").value, e.value, t), (n, i) => (L(), tt("div", E2, [
      e.value ? (L(), mt(v2, { key: 0 })) : (L(), mt(x2, { key: 1 }))
    ]));
  }
}, M2 = {};
function B2(s, t) {
  const e = Y("el-form");
  return L(), mt(e, null, {
    default: K(() => [...t[0] || (t[0] = [
      on(" 数据配置面板 ", -1)
    ])]),
    _: 1
  });
}
const I2 = /* @__PURE__ */ Xt(M2, [["render", B2]]), P2 = { class: "prop" }, T2 = { class: "tabContainer" }, k2 = ["onClick"], O2 = { class: "activeLine" }, R2 = {
  key: 0,
  class: "main"
}, D2 = {
  __name: "index",
  setup(s) {
    const t = te(), e = Bs(), { targetType: n, tabs: i, activeTab: o, cellId: r } = Nn(e), a = (h) => {
      o.value = h;
    };
    let l = r.value ? t.graph.getCellById(r.value) : null;
    Eo("getCurCell", () => l), Eo("cellId", r);
    const c = ot(!0);
    return sr(r, () => {
      console.log("cellId", r.value), l = t.graph.getCellById(r.value), c.value = !1, $d(() => {
        c.value = !0;
      });
    }), (h, u) => (L(), tt("div", P2, [
      U("div", T2, [
        (L(!0), tt(Ht, null, Ue(ct(i), (d, g) => (L(), tt("div", {
          key: g,
          class: ye(["tabItem", { active: ct(o) === g }]),
          onClick: (f) => a(g)
        }, [
          on(Je(d) + " ", 1),
          _d(U("div", O2, null, 512), [
            [Zd, ct(o) === g]
          ])
        ], 10, k2))), 128))
      ]),
      c.value ? (L(), tt("div", R2, [
        ct(n) === "blank" ? (L(), tt(Ht, { key: 0 }, [
          ct(o) === 0 ? (L(), mt(w2, { key: 0 })) : Jt("", !0)
        ], 64)) : (L(), tt(Ht, { key: 1 }, [
          ct(o) === 0 ? (L(), mt(S2, { key: 0 })) : ct(o) === 1 ? (L(), mt(I2, { key: 1 })) : Jt("", !0)
        ], 64))
      ])) : Jt("", !0)
    ]));
  }
}, Q2 = /* @__PURE__ */ Xt(D2, [["__scopeId", "data-v-9ea41e56"]]), N2 = { class: "ems-editor" }, L2 = { class: "ems-editor__workspace" }, Kd = /* @__PURE__ */ Object.assign({ name: "EmsEditor" }, {
  __name: "index",
  props: {
    services: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: Number,
      default: 1920
    },
    height: {
      type: Number,
      default: 1080
    }
  },
  emits: ["ready", "exit"],
  setup(s, { emit: t }) {
    const e = s, n = {
      setItem(o, r) {
        r !== void 0 && window.localStorage.setItem(o, JSON.stringify(r));
      },
      getItem(o) {
        let r = window.localStorage.getItem(o);
        return JSON.parse(r);
      },
      removeItem(o) {
        window.localStorage.removeItem(o);
      },
      clear() {
        window.localStorage.clear();
      }
    };
    return Eo("topoApi", {
      async getAllMenus() {
        var r;
        let o = [];
        return (r = e.services) != null && r.getAllMenus ? o = await e.services.getAllMenus() || [] : o = n.getItem("menus") || [
          {
            id: "1",
            parentId: "0",
            name: "首页",
            children: [
              {
                id: crypto.randomUUID(),
                parentId: "1",
                name: "首页概览",
                style: {},
                value: {}
              }
            ]
          }
        ], n.setItem("menus", o), o;
      },
      async getMenu(o) {
        var r;
        if ((r = e.services) != null && r.getMenu)
          return await e.services.getMenu(o) || {};
        {
          let a = n.getItem("menus") || [];
          for (let l of a)
            if (l.children) {
              for (let c of l.children)
                if (c.id === o)
                  return c;
            }
          return {};
        }
      },
      async addMenu({ parent: o, parentNameNew: r, name: a }) {
        var l;
        if ((l = e.services) != null && l.addMenu)
          return await e.services.addMenu({ parent: o, parentNameNew: r, name: a });
        {
          let c = n.getItem("menus") || [], h = null, u = crypto.randomUUID(), d = "";
          if (o === "0")
            d = crypto.randomUUID(), h = { name: a, id: u, parentId: d, style: {}, value: {} }, c.push({ name: r, id: d, parentId: "0", children: [h] });
          else {
            const g = c.find((f) => f.id === o);
            g && (d = g.id, g.children.push({ name: a, id: u, parentId: d, style: {}, value: {} }), h = { name: a, id: u, parentId: d, style: {}, value: {} });
          }
          return n.setItem(u, h), n.setItem("menus", c), h;
        }
      },
      async saveMenus(o) {
        var a;
        const r = await this.getMenu(o.id);
        if (r && (r.name = o.name, r.style = o.style, r.value = o.value), (a = e.services) != null && a.saveMenus)
          await e.services.saveMenus(o);
        else {
          let l = n.getItem("menus") || [];
          for (let c of l) {
            const h = c.children.findIndex((u) => u.id === o.id);
            h > -1 && (c.children[h] = o);
          }
          n.setItem("menus", l), n.setItem(o.id, o);
        }
      },
      async removeMenu(o) {
        var r;
        if ((r = e.services) != null && r.removeMenus)
          await e.services.removeMenu(o);
        else {
          let a = n.getItem("menus") || [];
          if (this.getMenu(o)) {
            const c = a.find((h) => {
              var u;
              return (u = h.children) == null ? void 0 : u.some((d) => d.id === o);
            });
            c && (c.children = c.children.filter((h) => h.id !== o), c.children.length === 0 && (a = a.filter((h) => h.id !== c.id))), n.setItem("menus", a);
          }
          n.removeItem(o);
        }
      }
    }), oe(() => {
    }), xe(() => {
    }), (o, r) => (L(), tt("div", N2, [
      U("div", L2, [
        D(y2),
        D(TM, {
          width: e.width,
          height: e.height
        }, null, 8, ["width", "height"]),
        D(Q2)
      ])
    ]));
  }
}), F2 = {
  __name: "preview",
  props: {
    menu: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const t = s, e = ot(null);
    let n = null;
    return oe(() => {
      const { width: i, height: o } = t.menu.style;
      n = new E({
        container: e.value,
        width: i,
        height: o,
        interacting: !1,
        selecting: !1,
        keyboard: !1,
        mousewheel: !1,
        panning: !1
      }), _r(), n.fromJSON(t.json);
    }), sr(
      () => t.json,
      (i) => {
        n && (n.clearCells(), n.resize(i.width, i.height), n.fromJSON(i));
      },
      { deep: !0 }
    ), (i, o) => (L(), tt("div", {
      ref_key: "container",
      ref: e,
      class: "ems-preview"
    }, null, 512));
  }
}, z2 = /* @__PURE__ */ Xt(F2, [["__scopeId", "data-v-0f1512aa"]]), U2 = [Kd], nr = (s) => {
  !s || nr.installed || (s.use(tg), U2.forEach((t) => {
    const e = t.name || t.__name;
    e && s.component(e, t);
  }), nr.installed = !0);
}, H2 = { install: nr, EmsEditor: Kd, EmsPreview: z2 };
export {
  Kd as EmsEditor,
  z2 as EmsPreview,
  H2 as default,
  nr as install
};
