import { defineComponent as nn, ref as Ot, onMounted as Rn, resolveComponent as qt, openBlock as ct, createBlock as Ct, mergeProps as zt, withCtx as pt, createElementBlock as Gt, Fragment as se, renderList as Re, resolveDynamicComponent as ue, createCommentVNode as Ft, unref as yt, renderSlot as Lt, createVNode as ce, nextTick as Mn, watch as Me, normalizeClass as Nn } from "vue";
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bn(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
function Fn() {
  this.__data__ = [], this.size = 0;
}
var On = Fn;
function Ln(P, L) {
  return P === L || P !== P && L !== L;
}
var rn = Ln, $n = rn;
function Hn(P, L) {
  for (var o = P.length; o--; )
    if ($n(P[o][0], L))
      return o;
  return -1;
}
var ee = Hn, bn = ee, jn = Array.prototype, Un = jn.splice;
function wn(P) {
  var L = this.__data__, o = bn(L, P);
  if (o < 0)
    return !1;
  var n = L.length - 1;
  return o == n ? L.pop() : Un.call(L, o, 1), --this.size, !0;
}
var Qn = wn, Yn = ee;
function Vn(P) {
  var L = this.__data__, o = Yn(L, P);
  return o < 0 ? void 0 : L[o][1];
}
var zn = Vn, Gn = ee;
function Kn(P) {
  return Gn(this.__data__, P) > -1;
}
var Jn = Kn, Wn = ee;
function Xn(P, L) {
  var o = this.__data__, n = Wn(o, P);
  return n < 0 ? (++this.size, o.push([P, L])) : o[n][1] = L, this;
}
var Zn = Xn, kn = On, qn = Qn, _n = zn, tr = Jn, er = Zn;
function $t(P) {
  var L = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++L < o; ) {
    var n = P[L];
    this.set(n[0], n[1]);
  }
}
$t.prototype.clear = kn;
$t.prototype.delete = qn;
$t.prototype.get = _n;
$t.prototype.has = tr;
$t.prototype.set = er;
var ne = $t, nr = ne;
function rr() {
  this.__data__ = new nr(), this.size = 0;
}
var or = rr;
function ar(P) {
  var L = this.__data__, o = L.delete(P);
  return this.size = L.size, o;
}
var ir = ar;
function lr(P) {
  return this.__data__.get(P);
}
var sr = lr;
function ur(P) {
  return this.__data__.has(P);
}
var fr = ur, cr = typeof kt == "object" && kt && kt.Object === Object && kt, on = cr, dr = on, vr = typeof self == "object" && self && self.Object === Object && self, pr = dr || vr || Function("return this")(), mt = pr, mr = mt, hr = mr.Symbol, Ae = hr, Ne = Ae, an = Object.prototype, gr = an.hasOwnProperty, Ar = an.toString, Vt = Ne ? Ne.toStringTag : void 0;
function yr(P) {
  var L = gr.call(P, Vt), o = P[Vt];
  try {
    P[Vt] = void 0;
    var n = !0;
  } catch {
  }
  var t = Ar.call(P);
  return n && (L ? P[Vt] = o : delete P[Vt]), t;
}
var Er = yr, xr = Object.prototype, Sr = xr.toString;
function Cr(P) {
  return Sr.call(P);
}
var Tr = Cr, Be = Ae, Dr = Er, Ir = Tr, Pr = "[object Null]", Rr = "[object Undefined]", Fe = Be ? Be.toStringTag : void 0;
function Mr(P) {
  return P == null ? P === void 0 ? Rr : Pr : Fe && Fe in Object(P) ? Dr(P) : Ir(P);
}
var re = Mr;
function Nr(P) {
  var L = typeof P;
  return P != null && (L == "object" || L == "function");
}
var Jt = Nr, Br = re, Fr = Jt, Or = "[object AsyncFunction]", Lr = "[object Function]", $r = "[object GeneratorFunction]", Hr = "[object Proxy]";
function br(P) {
  if (!Fr(P))
    return !1;
  var L = Br(P);
  return L == Lr || L == $r || L == Or || L == Hr;
}
var ln = br, jr = mt, Ur = jr["__core-js_shared__"], wr = Ur, fe = wr, Oe = function() {
  var P = /[^.]+$/.exec(fe && fe.keys && fe.keys.IE_PROTO || "");
  return P ? "Symbol(src)_1." + P : "";
}();
function Qr(P) {
  return !!Oe && Oe in P;
}
var Yr = Qr, Vr = Function.prototype, zr = Vr.toString;
function Gr(P) {
  if (P != null) {
    try {
      return zr.call(P);
    } catch {
    }
    try {
      return P + "";
    } catch {
    }
  }
  return "";
}
var sn = Gr, Kr = ln, Jr = Yr, Wr = Jt, Xr = sn, Zr = /[\\^$.*+?()[\]{}|]/g, kr = /^\[object .+?Constructor\]$/, qr = Function.prototype, _r = Object.prototype, to = qr.toString, eo = _r.hasOwnProperty, no = RegExp(
  "^" + to.call(eo).replace(Zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ro(P) {
  if (!Wr(P) || Jr(P))
    return !1;
  var L = Kr(P) ? no : kr;
  return L.test(Xr(P));
}
var oo = ro;
function ao(P, L) {
  return P == null ? void 0 : P[L];
}
var io = ao, lo = oo, so = io;
function uo(P, L) {
  var o = so(P, L);
  return lo(o) ? o : void 0;
}
var Dt = uo, fo = Dt, co = mt, vo = fo(co, "Map"), ye = vo, po = Dt, mo = po(Object, "create"), oe = mo, Le = oe;
function ho() {
  this.__data__ = Le ? Le(null) : {}, this.size = 0;
}
var go = ho;
function Ao(P) {
  var L = this.has(P) && delete this.__data__[P];
  return this.size -= L ? 1 : 0, L;
}
var yo = Ao, Eo = oe, xo = "__lodash_hash_undefined__", So = Object.prototype, Co = So.hasOwnProperty;
function To(P) {
  var L = this.__data__;
  if (Eo) {
    var o = L[P];
    return o === xo ? void 0 : o;
  }
  return Co.call(L, P) ? L[P] : void 0;
}
var Do = To, Io = oe, Po = Object.prototype, Ro = Po.hasOwnProperty;
function Mo(P) {
  var L = this.__data__;
  return Io ? L[P] !== void 0 : Ro.call(L, P);
}
var No = Mo, Bo = oe, Fo = "__lodash_hash_undefined__";
function Oo(P, L) {
  var o = this.__data__;
  return this.size += this.has(P) ? 0 : 1, o[P] = Bo && L === void 0 ? Fo : L, this;
}
var Lo = Oo, $o = go, Ho = yo, bo = Do, jo = No, Uo = Lo;
function Ht(P) {
  var L = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++L < o; ) {
    var n = P[L];
    this.set(n[0], n[1]);
  }
}
Ht.prototype.clear = $o;
Ht.prototype.delete = Ho;
Ht.prototype.get = bo;
Ht.prototype.has = jo;
Ht.prototype.set = Uo;
var wo = Ht, $e = wo, Qo = ne, Yo = ye;
function Vo() {
  this.size = 0, this.__data__ = {
    hash: new $e(),
    map: new (Yo || Qo)(),
    string: new $e()
  };
}
var zo = Vo;
function Go(P) {
  var L = typeof P;
  return L == "string" || L == "number" || L == "symbol" || L == "boolean" ? P !== "__proto__" : P === null;
}
var Ko = Go, Jo = Ko;
function Wo(P, L) {
  var o = P.__data__;
  return Jo(L) ? o[typeof L == "string" ? "string" : "hash"] : o.map;
}
var ae = Wo, Xo = ae;
function Zo(P) {
  var L = Xo(this, P).delete(P);
  return this.size -= L ? 1 : 0, L;
}
var ko = Zo, qo = ae;
function _o(P) {
  return qo(this, P).get(P);
}
var ta = _o, ea = ae;
function na(P) {
  return ea(this, P).has(P);
}
var ra = na, oa = ae;
function aa(P, L) {
  var o = oa(this, P), n = o.size;
  return o.set(P, L), this.size += o.size == n ? 0 : 1, this;
}
var ia = aa, la = zo, sa = ko, ua = ta, fa = ra, ca = ia;
function bt(P) {
  var L = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++L < o; ) {
    var n = P[L];
    this.set(n[0], n[1]);
  }
}
bt.prototype.clear = la;
bt.prototype.delete = sa;
bt.prototype.get = ua;
bt.prototype.has = fa;
bt.prototype.set = ca;
var da = bt, va = ne, pa = ye, ma = da, ha = 200;
function ga(P, L) {
  var o = this.__data__;
  if (o instanceof va) {
    var n = o.__data__;
    if (!pa || n.length < ha - 1)
      return n.push([P, L]), this.size = ++o.size, this;
    o = this.__data__ = new ma(n);
  }
  return o.set(P, L), this.size = o.size, this;
}
var Aa = ga, ya = ne, Ea = or, xa = ir, Sa = sr, Ca = fr, Ta = Aa;
function jt(P) {
  var L = this.__data__ = new ya(P);
  this.size = L.size;
}
jt.prototype.clear = Ea;
jt.prototype.delete = xa;
jt.prototype.get = Sa;
jt.prototype.has = Ca;
jt.prototype.set = Ta;
var Da = jt;
function Ia(P, L) {
  for (var o = -1, n = P == null ? 0 : P.length; ++o < n && L(P[o], o, P) !== !1; )
    ;
  return P;
}
var Pa = Ia, Ra = Dt, Ma = function() {
  try {
    var P = Ra(Object, "defineProperty");
    return P({}, "", {}), P;
  } catch {
  }
}(), Na = Ma, He = Na;
function Ba(P, L, o) {
  L == "__proto__" && He ? He(P, L, {
    configurable: !0,
    enumerable: !0,
    value: o,
    writable: !0
  }) : P[L] = o;
}
var un = Ba, Fa = un, Oa = rn, La = Object.prototype, $a = La.hasOwnProperty;
function Ha(P, L, o) {
  var n = P[L];
  (!($a.call(P, L) && Oa(n, o)) || o === void 0 && !(L in P)) && Fa(P, L, o);
}
var fn = Ha, ba = fn, ja = un;
function Ua(P, L, o, n) {
  var t = !o;
  o || (o = {});
  for (var e = -1, a = L.length; ++e < a; ) {
    var r = L[e], i = n ? n(o[r], P[r], r, o, P) : void 0;
    i === void 0 && (i = P[r]), t ? ja(o, r, i) : ba(o, r, i);
  }
  return o;
}
var ie = Ua;
function wa(P, L) {
  for (var o = -1, n = Array(P); ++o < P; )
    n[o] = L(o);
  return n;
}
var Qa = wa;
function Ya(P) {
  return P != null && typeof P == "object";
}
var Wt = Ya, Va = re, za = Wt, Ga = "[object Arguments]";
function Ka(P) {
  return za(P) && Va(P) == Ga;
}
var Ja = Ka, be = Ja, Wa = Wt, cn = Object.prototype, Xa = cn.hasOwnProperty, Za = cn.propertyIsEnumerable, ka = be(function() {
  return arguments;
}()) ? be : function(P) {
  return Wa(P) && Xa.call(P, "callee") && !Za.call(P, "callee");
}, qa = ka, _a = Array.isArray, Ee = _a, te = { exports: {} };
function ti() {
  return !1;
}
var ei = ti;
(function(P, L) {
  var o = mt, n = ei, t = L && !L.nodeType && L, e = t && !0 && P && !P.nodeType && P, a = e && e.exports === t, r = a ? o.Buffer : void 0, i = r ? r.isBuffer : void 0, c = i || n;
  P.exports = c;
})(te, te.exports);
var ni = 9007199254740991, ri = /^(?:0|[1-9]\d*)$/;
function oi(P, L) {
  var o = typeof P;
  return L = L == null ? ni : L, !!L && (o == "number" || o != "symbol" && ri.test(P)) && P > -1 && P % 1 == 0 && P < L;
}
var ai = oi, ii = 9007199254740991;
function li(P) {
  return typeof P == "number" && P > -1 && P % 1 == 0 && P <= ii;
}
var dn = li, si = re, ui = dn, fi = Wt, ci = "[object Arguments]", di = "[object Array]", vi = "[object Boolean]", pi = "[object Date]", mi = "[object Error]", hi = "[object Function]", gi = "[object Map]", Ai = "[object Number]", yi = "[object Object]", Ei = "[object RegExp]", xi = "[object Set]", Si = "[object String]", Ci = "[object WeakMap]", Ti = "[object ArrayBuffer]", Di = "[object DataView]", Ii = "[object Float32Array]", Pi = "[object Float64Array]", Ri = "[object Int8Array]", Mi = "[object Int16Array]", Ni = "[object Int32Array]", Bi = "[object Uint8Array]", Fi = "[object Uint8ClampedArray]", Oi = "[object Uint16Array]", Li = "[object Uint32Array]", ot = {};
ot[Ii] = ot[Pi] = ot[Ri] = ot[Mi] = ot[Ni] = ot[Bi] = ot[Fi] = ot[Oi] = ot[Li] = !0;
ot[ci] = ot[di] = ot[Ti] = ot[vi] = ot[Di] = ot[pi] = ot[mi] = ot[hi] = ot[gi] = ot[Ai] = ot[yi] = ot[Ei] = ot[xi] = ot[Si] = ot[Ci] = !1;
function $i(P) {
  return fi(P) && ui(P.length) && !!ot[si(P)];
}
var Hi = $i;
function bi(P) {
  return function(L) {
    return P(L);
  };
}
var xe = bi, Kt = { exports: {} };
(function(P, L) {
  var o = on, n = L && !L.nodeType && L, t = n && !0 && P && !P.nodeType && P, e = t && t.exports === n, a = e && o.process, r = function() {
    try {
      var i = t && t.require && t.require("util").types;
      return i || a && a.binding && a.binding("util");
    } catch {
    }
  }();
  P.exports = r;
})(Kt, Kt.exports);
var ji = Hi, Ui = xe, je = Kt.exports, Ue = je && je.isTypedArray, wi = Ue ? Ui(Ue) : ji, Qi = wi, Yi = Qa, Vi = qa, zi = Ee, Gi = te.exports, Ki = ai, Ji = Qi, Wi = Object.prototype, Xi = Wi.hasOwnProperty;
function Zi(P, L) {
  var o = zi(P), n = !o && Vi(P), t = !o && !n && Gi(P), e = !o && !n && !t && Ji(P), a = o || n || t || e, r = a ? Yi(P.length, String) : [], i = r.length;
  for (var c in P)
    (L || Xi.call(P, c)) && !(a && (c == "length" || t && (c == "offset" || c == "parent") || e && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ki(c, i))) && r.push(c);
  return r;
}
var vn = Zi, ki = Object.prototype;
function qi(P) {
  var L = P && P.constructor, o = typeof L == "function" && L.prototype || ki;
  return P === o;
}
var Se = qi;
function _i(P, L) {
  return function(o) {
    return P(L(o));
  };
}
var pn = _i, tl = pn, el = tl(Object.keys, Object), nl = el, rl = Se, ol = nl, al = Object.prototype, il = al.hasOwnProperty;
function ll(P) {
  if (!rl(P))
    return ol(P);
  var L = [];
  for (var o in Object(P))
    il.call(P, o) && o != "constructor" && L.push(o);
  return L;
}
var sl = ll, ul = ln, fl = dn;
function cl(P) {
  return P != null && fl(P.length) && !ul(P);
}
var mn = cl, dl = vn, vl = sl, pl = mn;
function ml(P) {
  return pl(P) ? dl(P) : vl(P);
}
var Ce = ml, hl = ie, gl = Ce;
function Al(P, L) {
  return P && hl(L, gl(L), P);
}
var yl = Al;
function El(P) {
  var L = [];
  if (P != null)
    for (var o in Object(P))
      L.push(o);
  return L;
}
var xl = El, Sl = Jt, Cl = Se, Tl = xl, Dl = Object.prototype, Il = Dl.hasOwnProperty;
function Pl(P) {
  if (!Sl(P))
    return Tl(P);
  var L = Cl(P), o = [];
  for (var n in P)
    n == "constructor" && (L || !Il.call(P, n)) || o.push(n);
  return o;
}
var Rl = Pl, Ml = vn, Nl = Rl, Bl = mn;
function Fl(P) {
  return Bl(P) ? Ml(P, !0) : Nl(P);
}
var Te = Fl, Ol = ie, Ll = Te;
function $l(P, L) {
  return P && Ol(L, Ll(L), P);
}
var Hl = $l, de = { exports: {} };
(function(P, L) {
  var o = mt, n = L && !L.nodeType && L, t = n && !0 && P && !P.nodeType && P, e = t && t.exports === n, a = e ? o.Buffer : void 0, r = a ? a.allocUnsafe : void 0;
  function i(c, g) {
    if (g)
      return c.slice();
    var d = c.length, m = r ? r(d) : new c.constructor(d);
    return c.copy(m), m;
  }
  P.exports = i;
})(de, de.exports);
function bl(P, L) {
  var o = -1, n = P.length;
  for (L || (L = Array(n)); ++o < n; )
    L[o] = P[o];
  return L;
}
var jl = bl;
function Ul(P, L) {
  for (var o = -1, n = P == null ? 0 : P.length, t = 0, e = []; ++o < n; ) {
    var a = P[o];
    L(a, o, P) && (e[t++] = a);
  }
  return e;
}
var wl = Ul;
function Ql() {
  return [];
}
var hn = Ql, Yl = wl, Vl = hn, zl = Object.prototype, Gl = zl.propertyIsEnumerable, we = Object.getOwnPropertySymbols, Kl = we ? function(P) {
  return P == null ? [] : (P = Object(P), Yl(we(P), function(L) {
    return Gl.call(P, L);
  }));
} : Vl, De = Kl, Jl = ie, Wl = De;
function Xl(P, L) {
  return Jl(P, Wl(P), L);
}
var Zl = Xl;
function kl(P, L) {
  for (var o = -1, n = L.length, t = P.length; ++o < n; )
    P[t + o] = L[o];
  return P;
}
var gn = kl, ql = pn, _l = ql(Object.getPrototypeOf, Object), An = _l, ts = gn, es = An, ns = De, rs = hn, os = Object.getOwnPropertySymbols, as = os ? function(P) {
  for (var L = []; P; )
    ts(L, ns(P)), P = es(P);
  return L;
} : rs, yn = as, is = ie, ls = yn;
function ss(P, L) {
  return is(P, ls(P), L);
}
var us = ss, fs = gn, cs = Ee;
function ds(P, L, o) {
  var n = L(P);
  return cs(P) ? n : fs(n, o(P));
}
var En = ds, vs = En, ps = De, ms = Ce;
function hs(P) {
  return vs(P, ms, ps);
}
var gs = hs, As = En, ys = yn, Es = Te;
function xs(P) {
  return As(P, Es, ys);
}
var Ss = xs, Cs = Dt, Ts = mt, Ds = Cs(Ts, "DataView"), Is = Ds, Ps = Dt, Rs = mt, Ms = Ps(Rs, "Promise"), Ns = Ms, Bs = Dt, Fs = mt, Os = Bs(Fs, "Set"), Ls = Os, $s = Dt, Hs = mt, bs = $s(Hs, "WeakMap"), js = bs, ve = Is, pe = ye, me = Ns, he = Ls, ge = js, xn = re, Ut = sn, Qe = "[object Map]", Us = "[object Object]", Ye = "[object Promise]", Ve = "[object Set]", ze = "[object WeakMap]", Ge = "[object DataView]", ws = Ut(ve), Qs = Ut(pe), Ys = Ut(me), Vs = Ut(he), zs = Ut(ge), Tt = xn;
(ve && Tt(new ve(new ArrayBuffer(1))) != Ge || pe && Tt(new pe()) != Qe || me && Tt(me.resolve()) != Ye || he && Tt(new he()) != Ve || ge && Tt(new ge()) != ze) && (Tt = function(P) {
  var L = xn(P), o = L == Us ? P.constructor : void 0, n = o ? Ut(o) : "";
  if (n)
    switch (n) {
      case ws:
        return Ge;
      case Qs:
        return Qe;
      case Ys:
        return Ye;
      case Vs:
        return Ve;
      case zs:
        return ze;
    }
  return L;
});
var Ie = Tt, Gs = Object.prototype, Ks = Gs.hasOwnProperty;
function Js(P) {
  var L = P.length, o = new P.constructor(L);
  return L && typeof P[0] == "string" && Ks.call(P, "index") && (o.index = P.index, o.input = P.input), o;
}
var Ws = Js, Xs = mt, Zs = Xs.Uint8Array, ks = Zs, Ke = ks;
function qs(P) {
  var L = new P.constructor(P.byteLength);
  return new Ke(L).set(new Ke(P)), L;
}
var Pe = qs, _s = Pe;
function tu(P, L) {
  var o = L ? _s(P.buffer) : P.buffer;
  return new P.constructor(o, P.byteOffset, P.byteLength);
}
var eu = tu, nu = /\w*$/;
function ru(P) {
  var L = new P.constructor(P.source, nu.exec(P));
  return L.lastIndex = P.lastIndex, L;
}
var ou = ru, Je = Ae, We = Je ? Je.prototype : void 0, Xe = We ? We.valueOf : void 0;
function au(P) {
  return Xe ? Object(Xe.call(P)) : {};
}
var iu = au, lu = Pe;
function su(P, L) {
  var o = L ? lu(P.buffer) : P.buffer;
  return new P.constructor(o, P.byteOffset, P.length);
}
var uu = su, fu = Pe, cu = eu, du = ou, vu = iu, pu = uu, mu = "[object Boolean]", hu = "[object Date]", gu = "[object Map]", Au = "[object Number]", yu = "[object RegExp]", Eu = "[object Set]", xu = "[object String]", Su = "[object Symbol]", Cu = "[object ArrayBuffer]", Tu = "[object DataView]", Du = "[object Float32Array]", Iu = "[object Float64Array]", Pu = "[object Int8Array]", Ru = "[object Int16Array]", Mu = "[object Int32Array]", Nu = "[object Uint8Array]", Bu = "[object Uint8ClampedArray]", Fu = "[object Uint16Array]", Ou = "[object Uint32Array]";
function Lu(P, L, o) {
  var n = P.constructor;
  switch (L) {
    case Cu:
      return fu(P);
    case mu:
    case hu:
      return new n(+P);
    case Tu:
      return cu(P, o);
    case Du:
    case Iu:
    case Pu:
    case Ru:
    case Mu:
    case Nu:
    case Bu:
    case Fu:
    case Ou:
      return pu(P, o);
    case gu:
      return new n();
    case Au:
    case xu:
      return new n(P);
    case yu:
      return du(P);
    case Eu:
      return new n();
    case Su:
      return vu(P);
  }
}
var $u = Lu, Hu = Jt, Ze = Object.create, bu = function() {
  function P() {
  }
  return function(L) {
    if (!Hu(L))
      return {};
    if (Ze)
      return Ze(L);
    P.prototype = L;
    var o = new P();
    return P.prototype = void 0, o;
  };
}(), ju = bu, Uu = ju, wu = An, Qu = Se;
function Yu(P) {
  return typeof P.constructor == "function" && !Qu(P) ? Uu(wu(P)) : {};
}
var Vu = Yu, zu = Ie, Gu = Wt, Ku = "[object Map]";
function Ju(P) {
  return Gu(P) && zu(P) == Ku;
}
var Wu = Ju, Xu = Wu, Zu = xe, ke = Kt.exports, qe = ke && ke.isMap, ku = qe ? Zu(qe) : Xu, qu = ku, _u = Ie, tf = Wt, ef = "[object Set]";
function nf(P) {
  return tf(P) && _u(P) == ef;
}
var rf = nf, of = rf, af = xe, _e = Kt.exports, tn = _e && _e.isSet, lf = tn ? af(tn) : of, sf = lf, uf = Da, ff = Pa, cf = fn, df = yl, vf = Hl, pf = de.exports, mf = jl, hf = Zl, gf = us, Af = gs, yf = Ss, Ef = Ie, xf = Ws, Sf = $u, Cf = Vu, Tf = Ee, Df = te.exports, If = qu, Pf = Jt, Rf = sf, Mf = Ce, Nf = Te, Bf = 1, Ff = 2, Of = 4, Sn = "[object Arguments]", Lf = "[object Array]", $f = "[object Boolean]", Hf = "[object Date]", bf = "[object Error]", Cn = "[object Function]", jf = "[object GeneratorFunction]", Uf = "[object Map]", wf = "[object Number]", Tn = "[object Object]", Qf = "[object RegExp]", Yf = "[object Set]", Vf = "[object String]", zf = "[object Symbol]", Gf = "[object WeakMap]", Kf = "[object ArrayBuffer]", Jf = "[object DataView]", Wf = "[object Float32Array]", Xf = "[object Float64Array]", Zf = "[object Int8Array]", kf = "[object Int16Array]", qf = "[object Int32Array]", _f = "[object Uint8Array]", tc = "[object Uint8ClampedArray]", ec = "[object Uint16Array]", nc = "[object Uint32Array]", rt = {};
rt[Sn] = rt[Lf] = rt[Kf] = rt[Jf] = rt[$f] = rt[Hf] = rt[Wf] = rt[Xf] = rt[Zf] = rt[kf] = rt[qf] = rt[Uf] = rt[wf] = rt[Tn] = rt[Qf] = rt[Yf] = rt[Vf] = rt[zf] = rt[_f] = rt[tc] = rt[ec] = rt[nc] = !0;
rt[bf] = rt[Cn] = rt[Gf] = !1;
function _t(P, L, o, n, t, e) {
  var a, r = L & Bf, i = L & Ff, c = L & Of;
  if (o && (a = t ? o(P, n, t, e) : o(P)), a !== void 0)
    return a;
  if (!Pf(P))
    return P;
  var g = Tf(P);
  if (g) {
    if (a = xf(P), !r)
      return mf(P, a);
  } else {
    var d = Ef(P), m = d == Cn || d == jf;
    if (Df(P))
      return pf(P, r);
    if (d == Tn || d == Sn || m && !t) {
      if (a = i || m ? {} : Cf(P), !r)
        return i ? gf(P, vf(a, P)) : hf(P, df(a, P));
    } else {
      if (!rt[d])
        return t ? P : {};
      a = Sf(P, d, r);
    }
  }
  e || (e = new uf());
  var f = e.get(P);
  if (f)
    return f;
  e.set(P, a), Rf(P) ? P.forEach(function(s) {
    a.add(_t(s, L, o, s, P, e));
  }) : If(P) && P.forEach(function(s, p) {
    a.set(p, _t(s, L, o, p, P, e));
  });
  var l = c ? i ? yf : Af : i ? Nf : Mf, u = g ? void 0 : l(P);
  return ff(u || P, function(s, p) {
    u && (p = s, s = P[p]), cf(a, p, _t(s, L, o, p, P, e));
  }), a;
}
var rc = _t, oc = rc, ac = 1, ic = 4;
function lc(P) {
  return oc(P, ac | ic);
}
var en = lc, Dn = { exports: {} };
(function(P, L) {
  (function(n, t) {
    P.exports = t();
  })(window, function() {
    return function(o) {
      var n = {};
      function t(e) {
        if (n[e])
          return n[e].exports;
        var a = n[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return o[e].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
      }
      return t.m = o, t.c = n, t.d = function(e, a, r) {
        t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: r });
      }, t.r = function(e) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, t.t = function(e, a) {
        if (a & 1 && (e = t(e)), a & 8 || a & 4 && typeof e == "object" && e && e.__esModule)
          return e;
        var r = /* @__PURE__ */ Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), a & 2 && typeof e != "string")
          for (var i in e)
            t.d(r, i, function(c) {
              return e[c];
            }.bind(null, i));
        return r;
      }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return t.d(a, "a", a), a;
      }, t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
      }, t.p = "", t(t.s = 141);
    }([
      function(o, n) {
        function t(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        o.exports = t;
      },
      function(o, n, t) {
        o.exports = t(142);
      },
      function(o, n, t) {
        t.r(n), t.d(n, "__extends", function() {
          return a;
        }), t.d(n, "__assign", function() {
          return r;
        }), t.d(n, "__rest", function() {
          return i;
        }), t.d(n, "__decorate", function() {
          return c;
        }), t.d(n, "__param", function() {
          return g;
        }), t.d(n, "__metadata", function() {
          return d;
        }), t.d(n, "__awaiter", function() {
          return m;
        }), t.d(n, "__generator", function() {
          return f;
        }), t.d(n, "__createBinding", function() {
          return l;
        }), t.d(n, "__exportStar", function() {
          return u;
        }), t.d(n, "__values", function() {
          return s;
        }), t.d(n, "__read", function() {
          return p;
        }), t.d(n, "__spread", function() {
          return v;
        }), t.d(n, "__spreadArrays", function() {
          return h;
        }), t.d(n, "__spreadArray", function() {
          return y;
        }), t.d(n, "__await", function() {
          return A;
        }), t.d(n, "__asyncGenerator", function() {
          return x;
        }), t.d(n, "__asyncDelegator", function() {
          return S;
        }), t.d(n, "__asyncValues", function() {
          return D;
        }), t.d(n, "__makeTemplateObject", function() {
          return I;
        }), t.d(n, "__importStar", function() {
          return E;
        }), t.d(n, "__importDefault", function() {
          return T;
        }), t.d(n, "__classPrivateFieldGet", function() {
          return R;
        }), t.d(n, "__classPrivateFieldSet", function() {
          return N;
        });
        /*! *****************************************************************************
        	Copyright (c) Microsoft Corporation.
        
        	Permission to use, copy, modify, and/or distribute this software for any
        	purpose with or without fee is hereby granted.
        
        	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        	PERFORMANCE OF THIS SOFTWARE.
        	***************************************************************************** */
        var e = function(M, B) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(F, O) {
            F.__proto__ = O;
          } || function(F, O) {
            for (var b in O)
              Object.prototype.hasOwnProperty.call(O, b) && (F[b] = O[b]);
          }, e(M, B);
        };
        function a(M, B) {
          if (typeof B != "function" && B !== null)
            throw new TypeError("Class extends value " + String(B) + " is not a constructor or null");
          e(M, B);
          function F() {
            this.constructor = M;
          }
          M.prototype = B === null ? Object.create(B) : (F.prototype = B.prototype, new F());
        }
        var r = function() {
          return r = Object.assign || function(B) {
            for (var F, O = 1, b = arguments.length; O < b; O++) {
              F = arguments[O];
              for (var $ in F)
                Object.prototype.hasOwnProperty.call(F, $) && (B[$] = F[$]);
            }
            return B;
          }, r.apply(this, arguments);
        };
        function i(M, B) {
          var F = {};
          for (var O in M)
            Object.prototype.hasOwnProperty.call(M, O) && B.indexOf(O) < 0 && (F[O] = M[O]);
          if (M != null && typeof Object.getOwnPropertySymbols == "function")
            for (var b = 0, O = Object.getOwnPropertySymbols(M); b < O.length; b++)
              B.indexOf(O[b]) < 0 && Object.prototype.propertyIsEnumerable.call(M, O[b]) && (F[O[b]] = M[O[b]]);
          return F;
        }
        function c(M, B, F, O) {
          var b = arguments.length, $ = b < 3 ? B : O === null ? O = Object.getOwnPropertyDescriptor(B, F) : O, H;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            $ = Reflect.decorate(M, B, F, O);
          else
            for (var j = M.length - 1; j >= 0; j--)
              (H = M[j]) && ($ = (b < 3 ? H($) : b > 3 ? H(B, F, $) : H(B, F)) || $);
          return b > 3 && $ && Object.defineProperty(B, F, $), $;
        }
        function g(M, B) {
          return function(F, O) {
            B(F, O, M);
          };
        }
        function d(M, B) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
            return Reflect.metadata(M, B);
        }
        function m(M, B, F, O) {
          function b($) {
            return $ instanceof F ? $ : new F(function(H) {
              H($);
            });
          }
          return new (F || (F = Promise))(function($, H) {
            function j(W) {
              try {
                U(O.next(W));
              } catch (K) {
                H(K);
              }
            }
            function G(W) {
              try {
                U(O.throw(W));
              } catch (K) {
                H(K);
              }
            }
            function U(W) {
              W.done ? $(W.value) : b(W.value).then(j, G);
            }
            U((O = O.apply(M, B || [])).next());
          });
        }
        function f(M, B) {
          var F = { label: 0, sent: function() {
            if ($[0] & 1)
              throw $[1];
            return $[1];
          }, trys: [], ops: [] }, O, b, $, H;
          return H = { next: j(0), throw: j(1), return: j(2) }, typeof Symbol == "function" && (H[Symbol.iterator] = function() {
            return this;
          }), H;
          function j(U) {
            return function(W) {
              return G([U, W]);
            };
          }
          function G(U) {
            if (O)
              throw new TypeError("Generator is already executing.");
            for (; F; )
              try {
                if (O = 1, b && ($ = U[0] & 2 ? b.return : U[0] ? b.throw || (($ = b.return) && $.call(b), 0) : b.next) && !($ = $.call(b, U[1])).done)
                  return $;
                switch (b = 0, $ && (U = [U[0] & 2, $.value]), U[0]) {
                  case 0:
                  case 1:
                    $ = U;
                    break;
                  case 4:
                    return F.label++, { value: U[1], done: !1 };
                  case 5:
                    F.label++, b = U[1], U = [0];
                    continue;
                  case 7:
                    U = F.ops.pop(), F.trys.pop();
                    continue;
                  default:
                    if ($ = F.trys, !($ = $.length > 0 && $[$.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                      F = 0;
                      continue;
                    }
                    if (U[0] === 3 && (!$ || U[1] > $[0] && U[1] < $[3])) {
                      F.label = U[1];
                      break;
                    }
                    if (U[0] === 6 && F.label < $[1]) {
                      F.label = $[1], $ = U;
                      break;
                    }
                    if ($ && F.label < $[2]) {
                      F.label = $[2], F.ops.push(U);
                      break;
                    }
                    $[2] && F.ops.pop(), F.trys.pop();
                    continue;
                }
                U = B.call(M, F);
              } catch (W) {
                U = [6, W], b = 0;
              } finally {
                O = $ = 0;
              }
            if (U[0] & 5)
              throw U[1];
            return { value: U[0] ? U[1] : void 0, done: !0 };
          }
        }
        var l = Object.create ? function(M, B, F, O) {
          O === void 0 && (O = F), Object.defineProperty(M, O, { enumerable: !0, get: function() {
            return B[F];
          } });
        } : function(M, B, F, O) {
          O === void 0 && (O = F), M[O] = B[F];
        };
        function u(M, B) {
          for (var F in M)
            F !== "default" && !Object.prototype.hasOwnProperty.call(B, F) && l(B, M, F);
        }
        function s(M) {
          var B = typeof Symbol == "function" && Symbol.iterator, F = B && M[B], O = 0;
          if (F)
            return F.call(M);
          if (M && typeof M.length == "number")
            return {
              next: function() {
                return M && O >= M.length && (M = void 0), { value: M && M[O++], done: !M };
              }
            };
          throw new TypeError(B ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function p(M, B) {
          var F = typeof Symbol == "function" && M[Symbol.iterator];
          if (!F)
            return M;
          var O = F.call(M), b, $ = [], H;
          try {
            for (; (B === void 0 || B-- > 0) && !(b = O.next()).done; )
              $.push(b.value);
          } catch (j) {
            H = { error: j };
          } finally {
            try {
              b && !b.done && (F = O.return) && F.call(O);
            } finally {
              if (H)
                throw H.error;
            }
          }
          return $;
        }
        function v() {
          for (var M = [], B = 0; B < arguments.length; B++)
            M = M.concat(p(arguments[B]));
          return M;
        }
        function h() {
          for (var M = 0, B = 0, F = arguments.length; B < F; B++)
            M += arguments[B].length;
          for (var O = Array(M), b = 0, B = 0; B < F; B++)
            for (var $ = arguments[B], H = 0, j = $.length; H < j; H++, b++)
              O[b] = $[H];
          return O;
        }
        function y(M, B) {
          for (var F = 0, O = B.length, b = M.length; F < O; F++, b++)
            M[b] = B[F];
          return M;
        }
        function A(M) {
          return this instanceof A ? (this.v = M, this) : new A(M);
        }
        function x(M, B, F) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var O = F.apply(M, B || []), b, $ = [];
          return b = {}, H("next"), H("throw"), H("return"), b[Symbol.asyncIterator] = function() {
            return this;
          }, b;
          function H(w) {
            O[w] && (b[w] = function(Y) {
              return new Promise(function(J, k) {
                $.push([w, Y, J, k]) > 1 || j(w, Y);
              });
            });
          }
          function j(w, Y) {
            try {
              G(O[w](Y));
            } catch (J) {
              K($[0][3], J);
            }
          }
          function G(w) {
            w.value instanceof A ? Promise.resolve(w.value.v).then(U, W) : K($[0][2], w);
          }
          function U(w) {
            j("next", w);
          }
          function W(w) {
            j("throw", w);
          }
          function K(w, Y) {
            w(Y), $.shift(), $.length && j($[0][0], $[0][1]);
          }
        }
        function S(M) {
          var B, F;
          return B = {}, O("next"), O("throw", function(b) {
            throw b;
          }), O("return"), B[Symbol.iterator] = function() {
            return this;
          }, B;
          function O(b, $) {
            B[b] = M[b] ? function(H) {
              return (F = !F) ? { value: A(M[b](H)), done: b === "return" } : $ ? $(H) : H;
            } : $;
          }
        }
        function D(M) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var B = M[Symbol.asyncIterator], F;
          return B ? B.call(M) : (M = typeof s == "function" ? s(M) : M[Symbol.iterator](), F = {}, O("next"), O("throw"), O("return"), F[Symbol.asyncIterator] = function() {
            return this;
          }, F);
          function O($) {
            F[$] = M[$] && function(H) {
              return new Promise(function(j, G) {
                H = M[$](H), b(j, G, H.done, H.value);
              });
            };
          }
          function b($, H, j, G) {
            Promise.resolve(G).then(function(U) {
              $({ value: U, done: j });
            }, H);
          }
        }
        function I(M, B) {
          return Object.defineProperty ? Object.defineProperty(M, "raw", { value: B }) : M.raw = B, M;
        }
        var C = Object.create ? function(M, B) {
          Object.defineProperty(M, "default", { enumerable: !0, value: B });
        } : function(M, B) {
          M.default = B;
        };
        function E(M) {
          if (M && M.__esModule)
            return M;
          var B = {};
          if (M != null)
            for (var F in M)
              F !== "default" && Object.prototype.hasOwnProperty.call(M, F) && l(B, M, F);
          return C(B, M), B;
        }
        function T(M) {
          return M && M.__esModule ? M : { default: M };
        }
        function R(M, B) {
          if (!B.has(M))
            throw new TypeError("attempted to get private field on non-instance");
          return B.get(M);
        }
        function N(M, B, F) {
          if (!B.has(M))
            throw new TypeError("attempted to set private field on non-instance");
          return B.set(M, F), F;
        }
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(89)), i = e(t(4)), c = e(t(26)), g = e(t(17)), d = e(t(121)), m = e(t(27)), f = e(t(91)), l = e(t(70)), u = e(t(28)), s = e(t(57));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.DomElement = void 0;
        var p = t(2), v = t(6), h = [];
        function y(C) {
          var E = document.createElement("div");
          E.innerHTML = C;
          var T = E.children;
          return v.toArray(T);
        }
        function A(C) {
          return C ? C instanceof HTMLCollection || C instanceof NodeList : !1;
        }
        function x(C) {
          var E = document.querySelectorAll(C);
          return v.toArray(E);
        }
        function S(C) {
          var E = [], T = [];
          return (0, r.default)(C) ? E = C : E = C.split(";"), (0, i.default)(E).call(E, function(R) {
            var N, M = (0, c.default)(N = R.split(":")).call(N, function(B) {
              return (0, g.default)(B).call(B);
            });
            M.length === 2 && T.push(M[0] + ":" + M[1]);
          }), T;
        }
        var D = function() {
          function C(E) {
            if (this.elems = [], this.length = this.elems.length, this.dataSource = new d.default(), !!E) {
              if (E instanceof C)
                return E;
              var T = [], R = E instanceof Node ? E.nodeType : -1;
              if (this.selector = E, R === 1 || R === 9)
                T = [E];
              else if (A(E))
                T = v.toArray(E);
              else if (E instanceof Array)
                T = E;
              else if (typeof E == "string") {
                var N, M = (0, g.default)(N = E.replace(`/
/mg`, "")).call(N);
                (0, m.default)(M).call(M, "<") === 0 ? T = y(M) : T = x(M);
              }
              var B = T.length;
              if (!B)
                return this;
              for (var F = 0; F < B; F++)
                this.elems.push(T[F]);
              this.length = B;
            }
          }
          return (0, a.default)(C.prototype, "id", {
            get: function() {
              return this.elems[0].id;
            },
            enumerable: !1,
            configurable: !0
          }), C.prototype.forEach = function(E) {
            for (var T = 0; T < this.length; T++) {
              var R = this.elems[T], N = E.call(R, R, T);
              if (N === !1)
                break;
            }
            return this;
          }, C.prototype.clone = function(E) {
            var T;
            E === void 0 && (E = !1);
            var R = [];
            return (0, i.default)(T = this.elems).call(T, function(N) {
              R.push(N.cloneNode(!!E));
            }), I(R);
          }, C.prototype.get = function(E) {
            E === void 0 && (E = 0);
            var T = this.length;
            return E >= T && (E = E % T), I(this.elems[E]);
          }, C.prototype.first = function() {
            return this.get(0);
          }, C.prototype.last = function() {
            var E = this.length;
            return this.get(E - 1);
          }, C.prototype.on = function(E, T, R) {
            var N;
            return E ? (typeof T == "function" && (R = T, T = ""), (0, i.default)(N = this).call(N, function(M) {
              if (!T) {
                M.addEventListener(E, R);
                return;
              }
              var B = function(O) {
                var b = O.target;
                b.matches(T) && R.call(b, O);
              };
              M.addEventListener(E, B), h.push({
                elem: M,
                selector: T,
                fn: R,
                agentFn: B
              });
            })) : this;
          }, C.prototype.off = function(E, T, R) {
            var N;
            return E ? (typeof T == "function" && (R = T, T = ""), (0, i.default)(N = this).call(N, function(M) {
              if (T) {
                for (var B = -1, F = 0; F < h.length; F++) {
                  var O = h[F];
                  if (O.selector === T && O.fn === R && O.elem === M) {
                    B = F;
                    break;
                  }
                }
                if (B !== -1) {
                  var b = (0, f.default)(h).call(h, B, 1)[0].agentFn;
                  M.removeEventListener(E, b);
                }
              } else
                M.removeEventListener(E, R);
            })) : this;
          }, C.prototype.attr = function(E, T) {
            var R;
            return T == null ? this.elems[0].getAttribute(E) || "" : (0, i.default)(R = this).call(R, function(N) {
              N.setAttribute(E, T);
            });
          }, C.prototype.removeAttr = function(E) {
            var T;
            (0, i.default)(T = this).call(T, function(R) {
              R.removeAttribute(E);
            });
          }, C.prototype.addClass = function(E) {
            var T;
            return E ? (0, i.default)(T = this).call(T, function(R) {
              if (R.className) {
                var N = R.className.split(/\s/);
                N = (0, l.default)(N).call(N, function(M) {
                  return !!(0, g.default)(M).call(M);
                }), (0, m.default)(N).call(N, E) < 0 && N.push(E), R.className = N.join(" ");
              } else
                R.className = E;
            }) : this;
          }, C.prototype.removeClass = function(E) {
            var T;
            return E ? (0, i.default)(T = this).call(T, function(R) {
              if (!!R.className) {
                var N = R.className.split(/\s/);
                N = (0, l.default)(N).call(N, function(M) {
                  return M = (0, g.default)(M).call(M), !(!M || M === E);
                }), R.className = N.join(" ");
              }
            }) : this;
          }, C.prototype.hasClass = function(E) {
            if (!E)
              return !1;
            var T = this.elems[0];
            if (!T.className)
              return !1;
            var R = T.className.split(/\s/);
            return (0, u.default)(R).call(R, E);
          }, C.prototype.css = function(E, T) {
            var R, N;
            return T == "" ? N = "" : N = E + ":" + T + ";", (0, i.default)(R = this).call(R, function(M) {
              var B, F = (0, g.default)(B = M.getAttribute("style") || "").call(B);
              if (F) {
                var O = S(F);
                O = (0, c.default)(O).call(O, function(b) {
                  return (0, m.default)(b).call(b, E) === 0 ? N : b;
                }), N != "" && (0, m.default)(O).call(O, N) < 0 && O.push(N), N == "" && (O = S(O)), M.setAttribute("style", O.join("; "));
              } else
                M.setAttribute("style", N);
            });
          }, C.prototype.getBoundingClientRect = function() {
            var E = this.elems[0];
            return E.getBoundingClientRect();
          }, C.prototype.show = function() {
            return this.css("display", "block");
          }, C.prototype.hide = function() {
            return this.css("display", "none");
          }, C.prototype.children = function() {
            var E = this.elems[0];
            return E ? I(E.children) : null;
          }, C.prototype.childNodes = function() {
            var E = this.elems[0];
            return E ? I(E.childNodes) : null;
          }, C.prototype.replaceChildAll = function(E) {
            for (var T = this.getNode(), R = this.elems[0]; R.hasChildNodes(); )
              T.firstChild && R.removeChild(T.firstChild);
            this.append(E);
          }, C.prototype.append = function(E) {
            var T;
            return (0, i.default)(T = this).call(T, function(R) {
              (0, i.default)(E).call(E, function(N) {
                R.appendChild(N);
              });
            });
          }, C.prototype.remove = function() {
            var E;
            return (0, i.default)(E = this).call(E, function(T) {
              if (T.remove)
                T.remove();
              else {
                var R = T.parentElement;
                R && R.removeChild(T);
              }
            });
          }, C.prototype.isContain = function(E) {
            var T = this.elems[0], R = E.elems[0];
            return T.contains(R);
          }, C.prototype.getNodeName = function() {
            var E = this.elems[0];
            return E.nodeName;
          }, C.prototype.getNode = function(E) {
            E === void 0 && (E = 0);
            var T;
            return T = this.elems[E], T;
          }, C.prototype.find = function(E) {
            var T = this.elems[0];
            return I(T.querySelectorAll(E));
          }, C.prototype.text = function(E) {
            if (E) {
              var R;
              return (0, i.default)(R = this).call(R, function(N) {
                N.innerHTML = E;
              });
            } else {
              var T = this.elems[0];
              return T.innerHTML.replace(/<[^>]+>/g, function() {
                return "";
              });
            }
          }, C.prototype.html = function(E) {
            var T = this.elems[0];
            return E ? (T.innerHTML = E, this) : T.innerHTML;
          }, C.prototype.val = function() {
            var E, T = this.elems[0];
            return (0, g.default)(E = T.value).call(E);
          }, C.prototype.focus = function() {
            var E;
            return (0, i.default)(E = this).call(E, function(T) {
              T.focus();
            });
          }, C.prototype.prev = function() {
            var E = this.elems[0];
            return I(E.previousElementSibling);
          }, C.prototype.next = function() {
            var E = this.elems[0];
            return I(E.nextElementSibling);
          }, C.prototype.getNextSibling = function() {
            var E = this.elems[0];
            return I(E.nextSibling);
          }, C.prototype.parent = function() {
            var E = this.elems[0];
            return I(E.parentElement);
          }, C.prototype.parentUntil = function(E, T) {
            var R = T || this.elems[0];
            if (R.nodeName === "BODY")
              return null;
            var N = R.parentElement;
            return N === null ? null : N.matches(E) ? I(N) : this.parentUntil(E, N);
          }, C.prototype.parentUntilEditor = function(E, T, R) {
            var N = R || this.elems[0];
            if (I(N).equal(T.$textContainerElem) || I(N).equal(T.$toolbarElem))
              return null;
            var M = N.parentElement;
            return M === null ? null : M.matches(E) ? I(M) : this.parentUntilEditor(E, T, M);
          }, C.prototype.equal = function(E) {
            return E instanceof C ? this.elems[0] === E.elems[0] : E instanceof HTMLElement ? this.elems[0] === E : !1;
          }, C.prototype.insertBefore = function(E) {
            var T, R = I(E), N = R.elems[0];
            return N ? (0, i.default)(T = this).call(T, function(M) {
              var B = N.parentNode;
              B == null || B.insertBefore(M, N);
            }) : this;
          }, C.prototype.insertAfter = function(E) {
            var T, R = I(E), N = R.elems[0], M = N && N.nextSibling;
            return N ? (0, i.default)(T = this).call(T, function(B) {
              var F = N.parentNode;
              M ? F.insertBefore(B, M) : F.appendChild(B);
            }) : this;
          }, C.prototype.data = function(E, T) {
            if (T != null)
              this.dataSource.set(E, T);
            else
              return this.dataSource.get(E);
          }, C.prototype.getNodeTop = function(E) {
            if (this.length < 1)
              return this;
            var T = this.parent();
            return E.$textElem.equal(this) || E.$textElem.equal(T) ? this : (T.prior = this, T.getNodeTop(E));
          }, C.prototype.getOffsetData = function() {
            var E = this.elems[0];
            return {
              top: E.offsetTop,
              left: E.offsetLeft,
              width: E.offsetWidth,
              height: E.offsetHeight,
              parent: E.offsetParent
            };
          }, C.prototype.scrollTop = function(E) {
            var T = this.elems[0];
            T.scrollTo({
              top: E
            });
          }, C;
        }();
        n.DomElement = D;
        function I() {
          for (var C = [], E = 0; E < arguments.length; E++)
            C[E] = arguments[E];
          return new ((0, s.default)(D).apply(D, p.__spreadArrays([void 0], C)))();
        }
        n.default = I;
      },
      function(o, n, t) {
        o.exports = t(180);
      },
      function(o, n, t) {
        var e = t(8), a = t(71).f, r = t(101), i = t(9), c = t(40), g = t(19), d = t(16), m = function(f) {
          var l = function(u, s, p) {
            if (this instanceof f) {
              switch (arguments.length) {
                case 0:
                  return new f();
                case 1:
                  return new f(u);
                case 2:
                  return new f(u, s);
              }
              return new f(u, s, p);
            }
            return f.apply(this, arguments);
          };
          return l.prototype = f.prototype, l;
        };
        o.exports = function(f, l) {
          var u = f.target, s = f.global, p = f.stat, v = f.proto, h = s ? e : p ? e[u] : (e[u] || {}).prototype, y = s ? i : i[u] || (i[u] = {}), A = y.prototype, x, S, D, I, C, E, T, R, N;
          for (I in l)
            x = r(s ? I : u + (p ? "." : "#") + I, f.forced), S = !x && h && d(h, I), E = y[I], S && (f.noTargetGet ? (N = a(h, I), T = N && N.value) : T = h[I]), C = S && T ? T : l[I], !(S && typeof E == typeof C) && (f.bind && S ? R = c(C, e) : f.wrap && S ? R = m(C) : v && typeof C == "function" ? R = c(Function.call, C) : R = C, (f.sham || C && C.sham || E && E.sham) && g(R, "sham", !0), y[I] = R, v && (D = u + "Prototype", d(i, D) || g(i, D, {}), i[D][I] = C, f.real && A && !A[I] && g(A, I, C)));
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(92)), r = e(t(1)), i = e(t(256)), c = e(t(45)), g = e(t(46)), d = e(t(89)), m = e(t(26));
        (0, r.default)(n, "__esModule", {
          value: !0
        }), n.hexToRgb = n.getRandomCode = n.toArray = n.deepClone = n.isFunction = n.debounce = n.throttle = n.arrForEach = n.forEach = n.replaceSpecialSymbol = n.replaceHtmlSymbol = n.getRandom = n.UA = void 0;
        var f = t(2), l = function() {
          function E() {
            this._ua = navigator.userAgent;
            var T = this._ua.match(/(Edge?)\/(\d+)/);
            this.isOldEdge = !!(T && T[1] == "Edge" && (0, i.default)(T[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
          }
          return E.prototype.isIE = function() {
            return "ActiveXObject" in window;
          }, E.prototype.isWebkit = function() {
            return /webkit/i.test(this._ua);
          }, E;
        }();
        n.UA = new l();
        function u(E) {
          var T;
          return E === void 0 && (E = ""), E + (0, c.default)(T = Math.random().toString()).call(T, 2);
        }
        n.getRandom = u;
        function s(E) {
          return E.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
        }
        n.replaceHtmlSymbol = s;
        function p(E) {
          return E.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
        }
        n.replaceSpecialSymbol = p;
        function v(E, T) {
          for (var R in E)
            if (Object.prototype.hasOwnProperty.call(E, R)) {
              var N = T(R, E[R]);
              if (N === !1)
                break;
            }
        }
        n.forEach = v;
        function h(E, T) {
          var R, N, M, B = E.length || 0;
          for (R = 0; R < B && (N = E[R], M = T.call(E, N, R), M !== !1); R++)
            ;
        }
        n.arrForEach = h;
        function y(E, T) {
          T === void 0 && (T = 200);
          var R = !1;
          return function() {
            for (var N = this, M = [], B = 0; B < arguments.length; B++)
              M[B] = arguments[B];
            R || (R = !0, (0, g.default)(function() {
              R = !1, E.call.apply(E, f.__spreadArrays([N], M));
            }, T));
          };
        }
        n.throttle = y;
        function A(E, T) {
          T === void 0 && (T = 200);
          var R = 0;
          return function() {
            for (var N = this, M = [], B = 0; B < arguments.length; B++)
              M[B] = arguments[B];
            R && window.clearTimeout(R), R = (0, g.default)(function() {
              R = 0, E.call.apply(E, f.__spreadArrays([N], M));
            }, T);
          };
        }
        n.debounce = A;
        function x(E) {
          return typeof E == "function";
        }
        n.isFunction = x;
        function S(E) {
          if ((0, a.default)(E) !== "object" || typeof E == "function" || E === null)
            return E;
          var T;
          (0, d.default)(E) && (T = []), (0, d.default)(E) || (T = {});
          for (var R in E)
            Object.prototype.hasOwnProperty.call(E, R) && (T[R] = S(E[R]));
          return T;
        }
        n.deepClone = S;
        function D(E) {
          return (0, c.default)(Array.prototype).call(E);
        }
        n.toArray = D;
        function I() {
          var E;
          return (0, c.default)(E = Math.random().toString(36)).call(E, -5);
        }
        n.getRandomCode = I;
        function C(E) {
          var T = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(E);
          if (T == null)
            return null;
          var R = (0, m.default)(T).call(T, function(F) {
            return (0, i.default)(F, 16);
          }), N = R[1], M = R[2], B = R[3];
          return "rgb(" + N + ", " + M + ", " + B + ")";
        }
        n.hexToRgb = C;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.EMPTY_P_REGEX = n.EMPTY_P_LAST_REGEX = n.EMPTY_P = n.urlRegex = n.EMPTY_FN = void 0;
        function r() {
        }
        n.EMPTY_FN = r, n.urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g, n.EMPTY_P = '<p data-we-empty-p=""><br></p>', n.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, n.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
      },
      function(o, n, t) {
        (function(e) {
          var a = function(r) {
            return r && r.Math == Math && r;
          };
          o.exports = a(typeof globalThis == "object" && globalThis) || a(typeof window == "object" && window) || a(typeof self == "object" && self) || a(typeof e == "object" && e) || Function("return this")();
        }).call(this, t(145));
      },
      function(o, n) {
        o.exports = {};
      },
      function(o, n, t) {
        var e = t(8), a = t(74), r = t(16), i = t(64), c = t(76), g = t(106), d = a("wks"), m = e.Symbol, f = g ? m : m && m.withoutSetter || i;
        o.exports = function(l) {
          return r(d, l) || (c && r(m, l) ? d[l] = m[l] : d[l] = f("Symbol." + l)), d[l];
        };
      },
      function(o, n) {
        o.exports = function(t) {
          try {
            return !!t();
          } catch {
            return !0;
          }
        };
      },
      function(o, n, t) {
        var e = t(9), a = t(16), r = t(93), i = t(18).f;
        o.exports = function(c) {
          var g = e.Symbol || (e.Symbol = {});
          a(g, c) || i(g, c, {
            value: r.f(c)
          });
        };
      },
      function(o, n) {
        o.exports = function(t) {
          return typeof t == "object" ? t !== null : typeof t == "function";
        };
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = !e(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      },
      function(o, n, t) {
        var e = t(9);
        o.exports = function(a) {
          return e[a + "Prototype"];
        };
      },
      function(o, n) {
        var t = {}.hasOwnProperty;
        o.exports = function(e, a) {
          return t.call(e, a);
        };
      },
      function(o, n, t) {
        o.exports = t(192);
      },
      function(o, n, t) {
        var e = t(14), a = t(100), r = t(25), i = t(60), c = Object.defineProperty;
        n.f = e ? c : function(d, m, f) {
          if (r(d), m = i(m, !0), r(f), a)
            try {
              return c(d, m, f);
            } catch {
            }
          if ("get" in f || "set" in f)
            throw TypeError("Accessors not supported");
          return "value" in f && (d[m] = f.value), d;
        };
      },
      function(o, n, t) {
        var e = t(14), a = t(18), r = t(48);
        o.exports = e ? function(i, c, g) {
          return a.f(i, c, r(1, g));
        } : function(i, c, g) {
          return i[c] = g, i;
        };
      },
      function(o, n, t) {
        var e = function() {
          var h;
          return function() {
            return typeof h > "u" && (h = Boolean(window && document && document.all && !window.atob)), h;
          };
        }(), a = function() {
          var h = {};
          return function(A) {
            if (typeof h[A] > "u") {
              var x = document.querySelector(A);
              if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
                try {
                  x = x.contentDocument.head;
                } catch {
                  x = null;
                }
              h[A] = x;
            }
            return h[A];
          };
        }(), r = [];
        function i(v) {
          for (var h = -1, y = 0; y < r.length; y++)
            if (r[y].identifier === v) {
              h = y;
              break;
            }
          return h;
        }
        function c(v, h) {
          for (var y = {}, A = [], x = 0; x < v.length; x++) {
            var S = v[x], D = h.base ? S[0] + h.base : S[0], I = y[D] || 0, C = "".concat(D, " ").concat(I);
            y[D] = I + 1;
            var E = i(C), T = {
              css: S[1],
              media: S[2],
              sourceMap: S[3]
            };
            E !== -1 ? (r[E].references++, r[E].updater(T)) : r.push({
              identifier: C,
              updater: p(T, h),
              references: 1
            }), A.push(C);
          }
          return A;
        }
        function g(v) {
          var h = document.createElement("style"), y = v.attributes || {};
          if (typeof y.nonce > "u") {
            var A = t.nc;
            A && (y.nonce = A);
          }
          if (Object.keys(y).forEach(function(S) {
            h.setAttribute(S, y[S]);
          }), typeof v.insert == "function")
            v.insert(h);
          else {
            var x = a(v.insert || "head");
            if (!x)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            x.appendChild(h);
          }
          return h;
        }
        function d(v) {
          if (v.parentNode === null)
            return !1;
          v.parentNode.removeChild(v);
        }
        var m = function() {
          var h = [];
          return function(A, x) {
            return h[A] = x, h.filter(Boolean).join(`
`);
          };
        }();
        function f(v, h, y, A) {
          var x = y ? "" : A.media ? "@media ".concat(A.media, " {").concat(A.css, "}") : A.css;
          if (v.styleSheet)
            v.styleSheet.cssText = m(h, x);
          else {
            var S = document.createTextNode(x), D = v.childNodes;
            D[h] && v.removeChild(D[h]), D.length ? v.insertBefore(S, D[h]) : v.appendChild(S);
          }
        }
        function l(v, h, y) {
          var A = y.css, x = y.media, S = y.sourceMap;
          if (x ? v.setAttribute("media", x) : v.removeAttribute("media"), S && typeof btoa < "u" && (A += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(S)))), " */")), v.styleSheet)
            v.styleSheet.cssText = A;
          else {
            for (; v.firstChild; )
              v.removeChild(v.firstChild);
            v.appendChild(document.createTextNode(A));
          }
        }
        var u = null, s = 0;
        function p(v, h) {
          var y, A, x;
          if (h.singleton) {
            var S = s++;
            y = u || (u = g(h)), A = f.bind(null, y, S, !1), x = f.bind(null, y, S, !0);
          } else
            y = g(h), A = l.bind(null, y, h), x = function() {
              d(y);
            };
          return A(v), function(I) {
            if (I) {
              if (I.css === v.css && I.media === v.media && I.sourceMap === v.sourceMap)
                return;
              A(v = I);
            } else
              x();
          };
        }
        o.exports = function(v, h) {
          h = h || {}, !h.singleton && typeof h.singleton != "boolean" && (h.singleton = e()), v = v || [];
          var y = c(v, h);
          return function(x) {
            if (x = x || [], Object.prototype.toString.call(x) === "[object Array]") {
              for (var S = 0; S < y.length; S++) {
                var D = y[S], I = i(D);
                r[I].references--;
              }
              for (var C = c(x, h), E = 0; E < y.length; E++) {
                var T = y[E], R = i(T);
                r[R].references === 0 && (r[R].updater(), r.splice(R, 1));
              }
              y = C;
            }
          };
        };
      },
      function(o, n, t) {
        o.exports = function(r) {
          var i = [];
          return i.toString = function() {
            return this.map(function(g) {
              var d = e(g, r);
              return g[2] ? "@media ".concat(g[2], " {").concat(d, "}") : d;
            }).join("");
          }, i.i = function(c, g, d) {
            typeof c == "string" && (c = [[null, c, ""]]);
            var m = {};
            if (d)
              for (var f = 0; f < this.length; f++) {
                var l = this[f][0];
                l != null && (m[l] = !0);
              }
            for (var u = 0; u < c.length; u++) {
              var s = [].concat(c[u]);
              d && m[s[0]] || (g && (s[2] ? s[2] = "".concat(g, " and ").concat(s[2]) : s[2] = g), i.push(s));
            }
          }, i;
        };
        function e(r, i) {
          var c = r[1] || "", g = r[3];
          if (!g)
            return c;
          if (i && typeof btoa == "function") {
            var d = a(g), m = g.sources.map(function(f) {
              return "/*# sourceURL=".concat(g.sourceRoot || "").concat(f, " */");
            });
            return [c].concat(m).concat([d]).join(`
`);
          }
          return [c].join(`
`);
        }
        function a(r) {
          var i = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i);
          return "/*# ".concat(c, " */");
        }
      },
      function(o, n, t) {
        var e = t(14), a = t(11), r = t(16), i = Object.defineProperty, c = {}, g = function(d) {
          throw d;
        };
        o.exports = function(d, m) {
          if (r(c, d))
            return c[d];
          m || (m = {});
          var f = [][d], l = r(m, "ACCESSORS") ? m.ACCESSORS : !1, u = r(m, 0) ? m[0] : g, s = r(m, 1) ? m[1] : void 0;
          return c[d] = !!f && !a(function() {
            if (l && !e)
              return !0;
            var p = { length: -1 };
            l ? i(p, 1, { enumerable: !0, get: g }) : p[1] = 1, f.call(p, u, s);
          });
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(95)), c = function(g) {
          r.__extends(d, g);
          function d(m, f) {
            return g.call(this, m, f) || this;
          }
          return d;
        }(i.default);
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(3)), d = c.__importDefault(t(95)), m = c.__importDefault(t(134)), f = function(l) {
          c.__extends(u, l);
          function u(s, p, v) {
            var h = l.call(this, s, p) || this;
            v.title = p.i18next.t("menus.dropListMenu." + v.title);
            var y = p.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
            if (y !== "" && v.type === "list") {
              var A;
              (0, r.default)(A = v.list).call(A, function(S) {
                var D = S.$elem, I = g.default(D.children());
                if (I.length > 0) {
                  var C = I == null ? void 0 : I.getNodeName();
                  C && C === "I" && D.addClass(y);
                }
              });
            }
            var x = new m.default(h, v);
            return h.dropList = x, s.on("click", function() {
              var S;
              p.selection.getRange() != null && (s.css("z-index", p.zIndex.get("menu")), (0, r.default)(S = p.txt.eventHooks.dropListMenuHoverEvents).call(S, function(D) {
                return D();
              }), x.show());
            }).on("mouseleave", function() {
              s.css("z-index", "auto"), x.hideTimeoutId = (0, i.default)(function() {
                x.hide();
              });
            }), h;
          }
          return u;
        }(d.default);
        n.default = f;
      },
      function(o, n, t) {
        var e = t(13);
        o.exports = function(a) {
          if (!e(a))
            throw TypeError(String(a) + " is not an object");
          return a;
        };
      },
      function(o, n, t) {
        o.exports = t(188);
      },
      function(o, n, t) {
        o.exports = t(201);
      },
      function(o, n, t) {
        o.exports = t(213);
      },
      function(o, n, t) {
        o.exports = t(283);
      },
      function(o, n, t) {
        var e = t(72), a = t(49);
        o.exports = function(r) {
          return e(a(r));
        };
      },
      function(o, n, t) {
        var e = t(49);
        o.exports = function(a) {
          return Object(e(a));
        };
      },
      function(o, n, t) {
        var e = t(40), a = t(72), r = t(31), i = t(35), c = t(88), g = [].push, d = function(m) {
          var f = m == 1, l = m == 2, u = m == 3, s = m == 4, p = m == 6, v = m == 5 || p;
          return function(h, y, A, x) {
            for (var S = r(h), D = a(S), I = e(y, A, 3), C = i(D.length), E = 0, T = x || c, R = f ? T(h, C) : l ? T(h, 0) : void 0, N, M; C > E; E++)
              if ((v || E in D) && (N = D[E], M = I(N, E, S), m)) {
                if (f)
                  R[E] = M;
                else if (M)
                  switch (m) {
                    case 3:
                      return !0;
                    case 5:
                      return N;
                    case 6:
                      return E;
                    case 2:
                      g.call(R, N);
                  }
                else if (s)
                  return !1;
              }
            return p ? -1 : u || s ? s : R;
          };
        };
        o.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6)
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(29)), c = e(t(132));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = g.__importDefault(t(3)), m = t(7), f = function() {
          function l(u, s) {
            this.menu = u, this.conf = s, this.$container = d.default('<div class="w-e-panel-container"></div>');
            var p = u.editor;
            p.txt.eventHooks.clickEvents.push(l.hideCurAllPanels), p.txt.eventHooks.toolbarClickEvents.push(l.hideCurAllPanels), p.txt.eventHooks.dropListMenuHoverEvents.push(l.hideCurAllPanels);
          }
          return l.prototype.create = function() {
            var u = this, s = this.menu;
            if (!l.createdMenus.has(s)) {
              var p = this.conf, v = this.$container, h = p.width || 300, y = s.editor.$toolbarElem.getBoundingClientRect(), A = s.$elem.getBoundingClientRect(), x = y.height + y.top - A.top, S = (y.width - h) / 2 + y.left - A.left, D = 300;
              Math.abs(S) > D && (A.left < document.documentElement.clientWidth / 2 ? S = -A.width / 2 : S = -h + A.width / 2), v.css("width", h + "px").css("margin-top", x + "px").css("margin-left", S + "px").css("z-index", s.editor.zIndex.get("panel"));
              var I = d.default('<i class="w-e-icon-close w-e-panel-close"></i>');
              v.append(I), I.on("click", function() {
                u.remove();
              });
              var C = d.default('<ul class="w-e-panel-tab-title"></ul>'), E = d.default('<div class="w-e-panel-tab-content"></div>');
              v.append(C).append(E);
              var T = p.height;
              T && E.css("height", T + "px").css("overflow-y", "auto");
              var R = p.tabs || [], N = [], M = [];
              (0, r.default)(R).call(R, function(F, O) {
                if (!!F) {
                  var b = F.title || "", $ = F.tpl || "", H = d.default('<li class="w-e-item">' + b + "</li>");
                  C.append(H);
                  var j = d.default($);
                  E.append(j), N.push(H), M.push(j), O === 0 ? (H.data("active", !0), H.addClass("w-e-active")) : j.hide(), H.on("click", function() {
                    H.data("active") || ((0, r.default)(N).call(N, function(G) {
                      G.data("active", !1), G.removeClass("w-e-active");
                    }), (0, r.default)(M).call(M, function(G) {
                      G.hide();
                    }), H.data("active", !0), H.addClass("w-e-active"), j.show());
                  });
                }
              }), v.on("click", function(F) {
                F.stopPropagation();
              }), s.$elem.append(v), p.setLinkValue && p.setLinkValue(v, "text"), p.setLinkValue && p.setLinkValue(v, "link"), (0, r.default)(R).call(R, function(F, O) {
                if (!!F) {
                  var b = F.events || [];
                  (0, r.default)(b).call(b, function($) {
                    var H, j = $.selector, G = $.type, U = $.fn || m.EMPTY_FN, W = M[O], K = (H = $.bindEnter) !== null && H !== void 0 ? H : !1, w = function(J) {
                      return g.__awaiter(u, void 0, void 0, function() {
                        var k;
                        return g.__generator(this, function(nt) {
                          switch (nt.label) {
                            case 0:
                              return J.stopPropagation(), [
                                4,
                                U(J)
                              ];
                            case 1:
                              return k = nt.sent(), k && this.remove(), [
                                2
                              ];
                          }
                        });
                      });
                    };
                    (0, i.default)(W).call(W, j).on(G, w), K && G === "click" && W.on("keyup", function(Y) {
                      Y.keyCode == 13 && w(Y);
                    });
                  });
                }
              });
              var B = (0, i.default)(v).call(v, "input[type=text],textarea");
              B.length && B.get(0).focus(), l.hideCurAllPanels(), s.setPanel(this), l.createdMenus.add(s);
            }
          }, l.prototype.remove = function() {
            var u = this.menu, s = this.$container;
            s && s.remove(), l.createdMenus.delete(u);
          }, l.hideCurAllPanels = function() {
            var u;
            l.createdMenus.size !== 0 && (0, r.default)(u = l.createdMenus).call(u, function(s) {
              var p = s.panel;
              p && p.remove();
            });
          }, l.createdMenus = new c.default(), l;
        }();
        n.default = f;
      },
      function(o, n) {
        var t = {}.toString;
        o.exports = function(e) {
          return t.call(e).slice(8, -1);
        };
      },
      function(o, n, t) {
        var e = t(62), a = Math.min;
        o.exports = function(r) {
          return r > 0 ? a(e(r), 9007199254740991) : 0;
        };
      },
      function(o, n, t) {
        var e = t(9), a = t(8), r = function(i) {
          return typeof i == "function" ? i : void 0;
        };
        o.exports = function(i, c) {
          return arguments.length < 2 ? r(e[i]) || r(a[i]) : e[i] && e[i][c] || a[i] && a[i][c];
        };
      },
      function(o, n, t) {
        var e = t(81), a = t(18).f, r = t(19), i = t(16), c = t(170), g = t(10), d = g("toStringTag");
        o.exports = function(m, f, l, u) {
          if (m) {
            var s = l ? m : m.prototype;
            i(s, d) || a(s, d, { configurable: !0, value: f }), u && !e && r(s, "toString", c);
          }
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(95)), c = function(g) {
          r.__extends(d, g);
          function d(m, f) {
            return g.call(this, m, f) || this;
          }
          return d.prototype.setPanel = function(m) {
            this.panel = m;
          }, d;
        }(i.default);
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(57));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(3)), d = function() {
          function m(f, l, u) {
            this.editor = f, this.$targetElem = l, this.conf = u, this._show = !1, this._isInsertTextContainer = !1;
            var s = g.default("<div></div>");
            s.addClass("w-e-tooltip"), this.$container = s;
          }
          return m.prototype.getPositionData = function() {
            var f = this.$container, l = 0, u = 0, s = 20, p = document.documentElement.scrollTop, v = this.$targetElem.getBoundingClientRect(), h = this.editor.$textElem.getBoundingClientRect(), y = this.$targetElem.getOffsetData(), A = g.default(y.parent), x = this.editor.$textElem.elems[0].scrollTop;
            if (this._isInsertTextContainer = A.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
              var S = A.getBoundingClientRect().height, D = y.top, I = y.left, C = y.height, E = D - x;
              E > s + 5 ? (l = E - s - 15, f.addClass("w-e-tooltip-up")) : E + C + s < S ? (l = E + C + 10, f.addClass("w-e-tooltip-down")) : (l = (E > 0 ? E : 0) + s + 10, f.addClass("w-e-tooltip-down")), I < 0 ? u = 0 : u = I;
            } else
              v.top < s || v.top - h.top < s ? (l = v.bottom + p + 5, f.addClass("w-e-tooltip-down")) : (l = v.top + p - s - 15, f.addClass("w-e-tooltip-up")), v.left < 0 ? u = 0 : u = v.left;
            return {
              top: l,
              left: u
            };
          }, m.prototype.appendMenus = function() {
            var f = this, l = this.conf, u = this.editor, s = this.$targetElem, p = this.$container;
            (0, r.default)(l).call(l, function(v, h) {
              var y = v.$elem, A = g.default("<div></div>");
              A.addClass("w-e-tooltip-item-wrapper "), A.append(y), p.append(A), y.on("click", function(x) {
                x.preventDefault();
                var S = v.onClick(u, s);
                S && f.remove();
              });
            });
          }, m.prototype.create = function() {
            var f, l, u = this.editor, s = this.$container;
            this.appendMenus();
            var p = this.getPositionData(), v = p.top, h = p.left;
            s.css("top", v + "px"), s.css("left", h + "px"), s.css("z-index", u.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(s) : g.default("body").append(s), this._show = !0, u.beforeDestroy((0, i.default)(f = this.remove).call(f, this)), u.txt.eventHooks.onBlurEvents.push((0, i.default)(l = this.remove).call(l, this));
          }, m.prototype.remove = function() {
            this.$container.remove(), this._show = !1;
          }, (0, a.default)(m.prototype, "isShow", {
            get: function() {
              return this._show;
            },
            enumerable: !1,
            configurable: !0
          }), m;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(41);
        o.exports = function(a, r, i) {
          if (e(a), r === void 0)
            return a;
          switch (i) {
            case 0:
              return function() {
                return a.call(r);
              };
            case 1:
              return function(c) {
                return a.call(r, c);
              };
            case 2:
              return function(c, g) {
                return a.call(r, c, g);
              };
            case 3:
              return function(c, g, d) {
                return a.call(r, c, g, d);
              };
          }
          return function() {
            return a.apply(r, arguments);
          };
        };
      },
      function(o, n) {
        o.exports = function(t) {
          if (typeof t != "function")
            throw TypeError(String(t) + " is not a function");
          return t;
        };
      },
      function(o, n, t) {
        var e = t(165), a = t(8), r = t(13), i = t(19), c = t(16), g = t(63), d = t(51), m = a.WeakMap, f, l, u, s = function(S) {
          return u(S) ? l(S) : f(S, {});
        }, p = function(S) {
          return function(D) {
            var I;
            if (!r(D) || (I = l(D)).type !== S)
              throw TypeError("Incompatible receiver, " + S + " required");
            return I;
          };
        };
        if (e) {
          var v = new m(), h = v.get, y = v.has, A = v.set;
          f = function(S, D) {
            return A.call(v, S, D), D;
          }, l = function(S) {
            return h.call(v, S) || {};
          }, u = function(S) {
            return y.call(v, S);
          };
        } else {
          var x = g("state");
          d[x] = !0, f = function(S, D) {
            return i(S, x, D), D;
          }, l = function(S) {
            return c(S, x) ? S[x] : {};
          }, u = function(S) {
            return c(S, x);
          };
        }
        o.exports = {
          set: f,
          get: l,
          has: u,
          enforce: s,
          getterFor: p
        };
      },
      function(o, n) {
        o.exports = !0;
      },
      function(o, n) {
        o.exports = {};
      },
      function(o, n, t) {
        o.exports = t(261);
      },
      function(o, n, t) {
        o.exports = t(265);
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createElementFragment = n.createDocumentFragment = n.createElement = n.insertBefore = n.getEndPoint = n.getStartPoint = n.updateRange = n.filterSelectionNodes = void 0;
        var i = t(2), c = t(137), g = i.__importDefault(t(3));
        function d(h) {
          var y = [];
          return (0, r.default)(h).call(h, function(A) {
            var x = A.getNodeName();
            if (x !== c.ListType.OrderedList && x !== c.ListType.UnorderedList)
              y.push(A);
            else if (A.prior)
              y.push(A.prior);
            else {
              var S = A.children();
              S == null || (0, r.default)(S).call(S, function(D) {
                y.push(g.default(D));
              });
            }
          }), y;
        }
        n.filterSelectionNodes = d;
        function m(h, y, A) {
          var x = h.selection, S = document.createRange();
          y.length > 1 ? (S.setStart(y.elems[0], 0), S.setEnd(y.elems[y.length - 1], y.elems[y.length - 1].childNodes.length)) : S.selectNodeContents(y.elems[0]), A && S.collapse(!1), x.saveRange(S), x.restoreSelection();
        }
        n.updateRange = m;
        function f(h) {
          var y;
          return h.prior ? h.prior : g.default((y = h.children()) === null || y === void 0 ? void 0 : y.elems[0]);
        }
        n.getStartPoint = f;
        function l(h) {
          var y;
          return h.prior ? h.prior : g.default((y = h.children()) === null || y === void 0 ? void 0 : y.last().elems[0]);
        }
        n.getEndPoint = l;
        function u(h, y, A) {
          A === void 0 && (A = null), h.parent().elems[0].insertBefore(y, A);
        }
        n.insertBefore = u;
        function s(h) {
          return document.createElement(h);
        }
        n.createElement = s;
        function p() {
          return document.createDocumentFragment();
        }
        n.createDocumentFragment = p;
        function v(h, y, A) {
          return A === void 0 && (A = "li"), (0, r.default)(h).call(h, function(x) {
            var S = s(A);
            S.innerHTML = x.html(), y.appendChild(S), x.remove();
          }), y;
        }
        n.createElementFragment = v;
      },
      function(o, n) {
        o.exports = function(t, e) {
          return {
            enumerable: !(t & 1),
            configurable: !(t & 2),
            writable: !(t & 4),
            value: e
          };
        };
      },
      function(o, n) {
        o.exports = function(t) {
          if (t == null)
            throw TypeError("Can't call method on " + t);
          return t;
        };
      },
      function(o, n, t) {
        var e = t(164).charAt, a = t(42), r = t(75), i = "String Iterator", c = a.set, g = a.getterFor(i);
        r(String, "String", function(d) {
          c(this, {
            type: i,
            string: String(d),
            index: 0
          });
        }, function() {
          var m = g(this), f = m.string, l = m.index, u;
          return l >= f.length ? { value: void 0, done: !0 } : (u = e(f, l), m.index += u.length, { value: u, done: !1 });
        });
      },
      function(o, n) {
        o.exports = {};
      },
      function(o, n, t) {
        var e = t(107), a = t(80);
        o.exports = Object.keys || function(i) {
          return e(i, a);
        };
      },
      function(o, n, t) {
        var e = t(19);
        o.exports = function(a, r, i, c) {
          c && c.enumerable ? a[r] = i : e(a, r, i);
        };
      },
      function(o, n, t) {
        t(173);
        var e = t(174), a = t(8), r = t(65), i = t(19), c = t(44), g = t(10), d = g("toStringTag");
        for (var m in e) {
          var f = a[m], l = f && f.prototype;
          l && r(l) !== d && i(l, d, m), c[m] = c.Array;
        }
      },
      function(o, n, t) {
        var e = t(34);
        o.exports = Array.isArray || function(r) {
          return e(r) == "Array";
        };
      },
      function(o, n, t) {
        var e = t(11), a = t(10), r = t(86), i = a("species");
        o.exports = function(c) {
          return r >= 51 || !e(function() {
            var g = [], d = g.constructor = {};
            return d[i] = function() {
              return { foo: 1 };
            }, g[c](Boolean).foo !== 1;
          });
        };
      },
      function(o, n, t) {
        o.exports = t(222);
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.ListHandle = void 0;
        var r = t(2), i = r.__importDefault(t(373)), c = function() {
          function g(d) {
            this.options = d, this.selectionRangeElem = new i.default();
          }
          return g;
        }();
        n.ListHandle = c;
      },
      function(o, n, t) {
        var e = {}.propertyIsEnumerable, a = Object.getOwnPropertyDescriptor, r = a && !e.call({ 1: 2 }, 1);
        n.f = r ? function(c) {
          var g = a(this, c);
          return !!g && g.enumerable;
        } : e;
      },
      function(o, n, t) {
        var e = t(13);
        o.exports = function(a, r) {
          if (!e(a))
            return a;
          var i, c;
          if (r && typeof (i = a.toString) == "function" && !e(c = i.call(a)) || typeof (i = a.valueOf) == "function" && !e(c = i.call(a)) || !r && typeof (i = a.toString) == "function" && !e(c = i.call(a)))
            return c;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function(o, n) {
      },
      function(o, n) {
        var t = Math.ceil, e = Math.floor;
        o.exports = function(a) {
          return isNaN(a = +a) ? 0 : (a > 0 ? e : t)(a);
        };
      },
      function(o, n, t) {
        var e = t(74), a = t(64), r = e("keys");
        o.exports = function(i) {
          return r[i] || (r[i] = a(i));
        };
      },
      function(o, n) {
        var t = 0, e = Math.random();
        o.exports = function(a) {
          return "Symbol(" + String(a === void 0 ? "" : a) + ")_" + (++t + e).toString(36);
        };
      },
      function(o, n, t) {
        var e = t(81), a = t(34), r = t(10), i = r("toStringTag"), c = a(function() {
          return arguments;
        }()) == "Arguments", g = function(d, m) {
          try {
            return d[m];
          } catch {
          }
        };
        o.exports = e ? a : function(d) {
          var m, f, l;
          return d === void 0 ? "Undefined" : d === null ? "Null" : typeof (f = g(m = Object(d), i)) == "string" ? f : c ? a(m) : (l = a(m)) == "Object" && typeof m.callee == "function" ? "Arguments" : l;
        };
      },
      function(o, n, t) {
        var e = t(25), a = t(112), r = t(35), i = t(40), c = t(113), g = t(114), d = function(f, l) {
          this.stopped = f, this.result = l;
        }, m = o.exports = function(f, l, u, s, p) {
          var v = i(l, u, s ? 2 : 1), h, y, A, x, S, D, I;
          if (p)
            h = f;
          else {
            if (y = c(f), typeof y != "function")
              throw TypeError("Target is not iterable");
            if (a(y)) {
              for (A = 0, x = r(f.length); x > A; A++)
                if (S = s ? v(e(I = f[A])[0], I[1]) : v(f[A]), S && S instanceof d)
                  return S;
              return new d(!1);
            }
            h = y.call(f);
          }
          for (D = h.next; !(I = D.call(h)).done; )
            if (S = g(h, v, I.value, s), typeof S == "object" && S && S instanceof d)
              return S;
          return new d(!1);
        };
        m.stop = function(f) {
          return new d(!0, f);
        };
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = function(a, r) {
          var i = [][a];
          return !!i && e(function() {
            i.call(null, r || function() {
              throw 1;
            }, 1);
          });
        };
      },
      function(o, n) {
        o.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
      },
      function(o, n, t) {
        var e = t(60), a = t(18), r = t(48);
        o.exports = function(i, c, g) {
          var d = e(c);
          d in i ? a.f(i, d, r(0, g)) : i[d] = g;
        };
      },
      function(o, n, t) {
        o.exports = t(209);
      },
      function(o, n, t) {
        var e = t(14), a = t(59), r = t(48), i = t(30), c = t(60), g = t(16), d = t(100), m = Object.getOwnPropertyDescriptor;
        n.f = e ? m : function(l, u) {
          if (l = i(l), u = c(u, !0), d)
            try {
              return m(l, u);
            } catch {
            }
          if (g(l, u))
            return r(!a.f.call(l, u), l[u]);
        };
      },
      function(o, n, t) {
        var e = t(11), a = t(34), r = "".split;
        o.exports = e(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(i) {
          return a(i) == "String" ? r.call(i, "") : Object(i);
        } : Object;
      },
      function(o, n, t) {
        var e = t(8), a = t(13), r = e.document, i = a(r) && a(r.createElement);
        o.exports = function(c) {
          return i ? r.createElement(c) : {};
        };
      },
      function(o, n, t) {
        var e = t(43), a = t(103);
        (o.exports = function(r, i) {
          return a[r] || (a[r] = i !== void 0 ? i : {});
        })("versions", []).push({
          version: "3.6.4",
          mode: e ? "pure" : "global",
          copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      function(o, n, t) {
        var e = t(5), a = t(167), r = t(105), i = t(171), c = t(37), g = t(19), d = t(53), m = t(10), f = t(43), l = t(44), u = t(104), s = u.IteratorPrototype, p = u.BUGGY_SAFARI_ITERATORS, v = m("iterator"), h = "keys", y = "values", A = "entries", x = function() {
          return this;
        };
        o.exports = function(S, D, I, C, E, T, R) {
          a(I, D, C);
          var N = function(U) {
            if (U === E && b)
              return b;
            if (!p && U in F)
              return F[U];
            switch (U) {
              case h:
                return function() {
                  return new I(this, U);
                };
              case y:
                return function() {
                  return new I(this, U);
                };
              case A:
                return function() {
                  return new I(this, U);
                };
            }
            return function() {
              return new I(this);
            };
          }, M = D + " Iterator", B = !1, F = S.prototype, O = F[v] || F["@@iterator"] || E && F[E], b = !p && O || N(E), $ = D == "Array" && F.entries || O, H, j, G;
          if ($ && (H = r($.call(new S())), s !== Object.prototype && H.next && (!f && r(H) !== s && (i ? i(H, s) : typeof H[v] != "function" && g(H, v, x)), c(H, M, !0, !0), f && (l[M] = x))), E == y && O && O.name !== y && (B = !0, b = function() {
            return O.call(this);
          }), (!f || R) && F[v] !== b && g(F, v, b), l[D] = b, E)
            if (j = {
              values: N(y),
              keys: T ? b : N(h),
              entries: N(A)
            }, R)
              for (G in j)
                (p || B || !(G in F)) && d(F, G, j[G]);
            else
              e({ target: D, proto: !0, forced: p || B }, j);
          return j;
        };
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = !!Object.getOwnPropertySymbols && !e(function() {
          return !String(Symbol());
        });
      },
      function(o, n, t) {
        var e = t(25), a = t(169), r = t(80), i = t(51), c = t(108), g = t(73), d = t(63), m = ">", f = "<", l = "prototype", u = "script", s = d("IE_PROTO"), p = function() {
        }, v = function(S) {
          return f + u + m + S + f + "/" + u + m;
        }, h = function(S) {
          S.write(v("")), S.close();
          var D = S.parentWindow.Object;
          return S = null, D;
        }, y = function() {
          var S = g("iframe"), D = "java" + u + ":", I;
          return S.style.display = "none", c.appendChild(S), S.src = String(D), I = S.contentWindow.document, I.open(), I.write(v("document.F=Object")), I.close(), I.F;
        }, A, x = function() {
          try {
            A = document.domain && new ActiveXObject("htmlfile");
          } catch {
          }
          x = A ? h(A) : y();
          for (var S = r.length; S--; )
            delete x[l][r[S]];
          return x();
        };
        i[s] = !0, o.exports = Object.create || function(D, I) {
          var C;
          return D !== null ? (p[l] = e(D), C = new p(), p[l] = null, C[s] = D) : C = x(), I === void 0 ? C : a(C, I);
        };
      },
      function(o, n, t) {
        var e = t(30), a = t(35), r = t(79), i = function(c) {
          return function(g, d, m) {
            var f = e(g), l = a(f.length), u = r(m, l), s;
            if (c && d != d) {
              for (; l > u; )
                if (s = f[u++], s != s)
                  return !0;
            } else
              for (; l > u; u++)
                if ((c || u in f) && f[u] === d)
                  return c || u || 0;
            return !c && -1;
          };
        };
        o.exports = {
          includes: i(!0),
          indexOf: i(!1)
        };
      },
      function(o, n, t) {
        var e = t(62), a = Math.max, r = Math.min;
        o.exports = function(i, c) {
          var g = e(i);
          return g < 0 ? a(g + c, 0) : r(g, c);
        };
      },
      function(o, n) {
        o.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      },
      function(o, n, t) {
        var e = t(10), a = e("toStringTag"), r = {};
        r[a] = "z", o.exports = String(r) === "[object z]";
      },
      function(o, n) {
        o.exports = function() {
        };
      },
      function(o, n) {
        o.exports = function(t, e, a) {
          if (!(t instanceof e))
            throw TypeError("Incorrect " + (a ? a + " " : "") + "invocation");
          return t;
        };
      },
      function(o, n, t) {
        var e = t(36);
        o.exports = e("navigator", "userAgent") || "";
      },
      function(o, n, t) {
        var e = t(41), a = function(r) {
          var i, c;
          this.promise = new r(function(g, d) {
            if (i !== void 0 || c !== void 0)
              throw TypeError("Bad Promise constructor");
            i = g, c = d;
          }), this.resolve = e(i), this.reject = e(c);
        };
        o.exports.f = function(r) {
          return new a(r);
        };
      },
      function(o, n, t) {
        var e = t(8), a = t(84), r = e.process, i = r && r.versions, c = i && i.v8, g, d;
        c ? (g = c.split("."), d = g[0] + g[1]) : a && (g = a.match(/Edge\/(\d+)/), (!g || g[1] >= 74) && (g = a.match(/Chrome\/(\d+)/), g && (d = g[1]))), o.exports = d && +d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(6), d = i.__importDefault(t(267)), m = i.__importDefault(t(280)), f = i.__importDefault(t(281)), l = i.__importDefault(t(282)), u = i.__importDefault(t(301)), s = i.__importStar(t(416)), p = i.__importDefault(t(417)), v = i.__importDefault(t(418)), h = i.__importDefault(t(419)), y = i.__importStar(t(420)), A = i.__importDefault(t(423)), x = i.__importDefault(t(424)), S = i.__importDefault(t(425)), D = i.__importDefault(t(427)), I = i.__importDefault(t(437)), C = i.__importDefault(t(440)), E = i.__importStar(t(441)), T = i.__importDefault(t(23)), R = i.__importDefault(t(134)), N = i.__importDefault(t(24)), M = i.__importDefault(t(33)), B = i.__importDefault(t(38)), F = i.__importDefault(t(39)), O = 1, b = function() {
          function $(H, j) {
            this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + O++, this.toolbarSelector = H, this.textSelector = j, s.selectorValidator(this), this.config = g.deepClone(d.default), this.$toolbarElem = c.default("<div></div>"), this.$textContainerElem = c.default("<div></div>"), this.$textElem = c.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new m.default(this), this.cmd = new f.default(this), this.txt = new l.default(this), this.menus = new u.default(this), this.zIndex = new x.default(), this.change = new S.default(this), this.history = new D.default(this), this.onSelectionChange = new C.default(this);
            var G = I.default(this), U = G.disable, W = G.enable;
            this.disable = U, this.enable = W, this.isEnable = !0;
          }
          return $.prototype.initSelection = function(H) {
            p.default(this, H);
          }, $.prototype.create = function() {
            this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), h.default(this), s.default(this), this.txt.init(), this.menus.init(), y.default(this), this.initSelection(!0), v.default(this), this.change.observe(), this.history.observe(), E.default(this);
          }, $.prototype.beforeDestroy = function(H) {
            return this.beforeDestroyHooks.push(H), this;
          }, $.prototype.destroy = function() {
            var H, j = this;
            (0, r.default)(H = this.beforeDestroyHooks).call(H, function(G) {
              return G.call(j);
            }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
          }, $.prototype.fullScreen = function() {
            y.setFullScreen(this);
          }, $.prototype.unFullScreen = function() {
            y.setUnFullScreen(this);
          }, $.prototype.scrollToHead = function(H) {
            A.default(this, H);
          }, $.registerMenu = function(H, j) {
            !j || typeof j != "function" || ($.globalCustomMenuConstructorList[H] = j);
          }, $.prototype.registerPlugin = function(H, j) {
            E.registerPlugin(H, j, this.pluginsFunctionList);
          }, $.registerPlugin = function(H, j) {
            E.registerPlugin(H, j, $.globalPluginsFunctionList);
          }, $.$ = c.default, $.BtnMenu = T.default, $.DropList = R.default, $.DropListMenu = N.default, $.Panel = M.default, $.PanelMenu = B.default, $.Tooltip = F.default, $.globalCustomMenuConstructorList = {}, $.globalPluginsFunctionList = {}, $;
        }();
        n.default = b;
      },
      function(o, n, t) {
        var e = t(13), a = t(55), r = t(10), i = r("species");
        o.exports = function(c, g) {
          var d;
          return a(c) && (d = c.constructor, typeof d == "function" && (d === Array || a(d.prototype)) ? d = void 0 : e(d) && (d = d[i], d === null && (d = void 0))), new (d === void 0 ? Array : d)(g === 0 ? 0 : g);
        };
      },
      function(o, n, t) {
        o.exports = t(185);
      },
      function(o, n, t) {
        var e = t(49), a = t(68), r = "[" + a + "]", i = RegExp("^" + r + r + "*"), c = RegExp(r + r + "*$"), g = function(d) {
          return function(m) {
            var f = String(e(m));
            return d & 1 && (f = f.replace(i, "")), d & 2 && (f = f.replace(c, "")), f;
          };
        };
        o.exports = {
          start: g(1),
          end: g(2),
          trim: g(3)
        };
      },
      function(o, n, t) {
        o.exports = t(205);
      },
      function(o, n, t) {
        var e = t(227), a = t(230);
        function r(i) {
          return typeof a == "function" && typeof e == "symbol" ? o.exports = r = function(g) {
            return typeof g;
          } : o.exports = r = function(g) {
            return g && typeof a == "function" && g.constructor === a && g !== a.prototype ? "symbol" : typeof g;
          }, r(i);
        }
        o.exports = r;
      },
      function(o, n, t) {
        var e = t(10);
        n.f = e;
      },
      function(o, n, t) {
        o.exports = t(306);
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(33)), g = function() {
          function d(m, f) {
            var l = this;
            this.$elem = m, this.editor = f, this._active = !1, m.on("click", function(u) {
              var s;
              c.default.hideCurAllPanels(), (0, r.default)(s = f.txt.eventHooks.menuClickEvents).call(s, function(p) {
                return p();
              }), u.stopPropagation(), f.selection.getRange() != null && l.clickHandler(u);
            });
          }
          return d.prototype.clickHandler = function(m) {
          }, d.prototype.active = function() {
            this._active = !0, this.$elem.addClass("w-e-active");
          }, d.prototype.unActive = function() {
            this._active = !1, this.$elem.removeClass("w-e-active");
          }, (0, a.default)(d.prototype, "isActive", {
            get: function() {
              return this._active;
            },
            enumerable: !1,
            configurable: !0
          }), d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.getParentNodeA = n.EXTRA_TAG = void 0, n.EXTRA_TAG = ["B", "FONT", "I", "STRIKE"];
        function i(g) {
          for (var d = g.elems[0]; d && (0, r.default)(m = n.EXTRA_TAG).call(m, d.nodeName); ) {
            var m;
            if (d = d.parentElement, d.nodeName === "A")
              return d;
          }
        }
        n.getParentNodeA = i;
        function c(g) {
          var d, m = g.selection.getSelectionContainerElem();
          if (!(!((d = m == null ? void 0 : m.elems) === null || d === void 0) && d.length))
            return !1;
          if (m.getNodeName() === "A")
            return !0;
          var f = i(m);
          return !!(f && f.nodeName === "A");
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(57)), i = e(t(4)), c = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(6), m = g.__importDefault(t(135)), f = g.__importDefault(t(136)), l = function() {
          function u(s) {
            this.editor = s;
          }
          return u.prototype.insertImg = function(s, p, v) {
            var h = this.editor, y = h.config, A = "validate.", x = function(T, R) {
              return R === void 0 && (R = A), h.i18next.t(R + T);
            }, S = s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            S = S.replace("'", '"');
            var D = "";
            v && (D = v.replace("'", '"'), D = "data-href='" + encodeURIComponent(D) + "' ");
            var I = "";
            p && (I = p.replace(/</g, "&lt;").replace(/>/g, "&gt;"), I = I.replace("'", '"'), I = "alt='" + I + "' "), h.cmd.do("insertHTML", "<img src='" + S + "' " + I + D + 'style="max-width:100%;" contenteditable="false"/>'), y.linkImgCallback(s, p, v);
            var C = document.createElement("img");
            C.onload = function() {
              C = null;
            }, C.onerror = function() {
              y.customAlert(x("\u63D2\u5165\u56FE\u7247\u9519\u8BEF"), "error", "wangEditor: " + x("\u63D2\u5165\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + x("\u56FE\u7247\u94FE\u63A5") + ' "' + s + '"\uFF0C' + x("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), C = null;
            }, C.onabort = function() {
              return C = null;
            }, C.src = s;
          }, u.prototype.uploadImg = function(s) {
            var p = this;
            if (!!s.length) {
              var v = this.editor, h = v.config, y = "validate.", A = function(w) {
                return v.i18next.t(y + w);
              }, x = h.uploadImgServer, S = h.uploadImgShowBase64, D = h.uploadImgMaxSize, I = D / 1024 / 1024, C = h.uploadImgMaxLength, E = h.uploadFileName, T = h.uploadImgParams, R = h.uploadImgParamsWithUrl, N = h.uploadImgHeaders, M = h.uploadImgHooks, B = h.uploadImgTimeout, F = h.withCredentials, O = h.customUploadImg;
              if (!(!O && !x && !S)) {
                var b = [], $ = [];
                if (d.arrForEach(s, function(K) {
                  if (!!K) {
                    var w = K.name || K.type.replace("/", "."), Y = K.size;
                    if (!(!w || !Y)) {
                      var J = v.config.uploadImgAccept.join("|"), k = ".(" + J + ")$", nt = new RegExp(k, "i");
                      if (nt.test(w) === !1) {
                        $.push("\u3010" + w + "\u3011" + A("\u4E0D\u662F\u56FE\u7247"));
                        return;
                      }
                      if (D < Y) {
                        $.push("\u3010" + w + "\u3011" + A("\u5927\u4E8E") + " " + I + "M");
                        return;
                      }
                      b.push(K);
                    }
                  }
                }), $.length) {
                  h.customAlert(A("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + $.join(`
`), "warning");
                  return;
                }
                if (b.length === 0) {
                  h.customAlert(A("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                  return;
                }
                if (b.length > C) {
                  h.customAlert(A("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + C + A("\u5F20\u56FE\u7247"), "warning");
                  return;
                }
                if (O && typeof O == "function") {
                  var H;
                  O(b, (0, r.default)(H = this.insertImg).call(H, this));
                  return;
                }
                var j = new FormData();
                if ((0, i.default)(b).call(b, function(K, w) {
                  var Y = E || K.name;
                  b.length > 1 && (Y = Y + (w + 1)), j.append(Y, K);
                }), x) {
                  var G = x.split("#");
                  x = G[0];
                  var U = G[1] || "";
                  (0, i.default)(d).call(d, T, function(K, w) {
                    R && ((0, c.default)(x).call(x, "?") > 0 ? x += "&" : x += "?", x = x + K + "=" + w), j.append(K, w);
                  }), U && (x += "#" + U);
                  var W = m.default(x, {
                    timeout: B,
                    formData: j,
                    headers: N,
                    withCredentials: !!F,
                    beforeSend: function(w) {
                      if (M.before)
                        return M.before(w, v, b);
                    },
                    onTimeout: function(w) {
                      h.customAlert(A("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error"), M.timeout && M.timeout(w, v);
                    },
                    onProgress: function(w, Y) {
                      var J = new f.default(v);
                      Y.lengthComputable && (w = Y.loaded / Y.total, J.show(w));
                    },
                    onError: function(w) {
                      h.customAlert(A("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", A("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + A("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + w.status), M.error && M.error(w, v);
                    },
                    onFail: function(w, Y) {
                      h.customAlert(A("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", A("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + A("\u8FD4\u56DE\u7ED3\u679C") + ": ") + Y), M.fail && M.fail(w, v, Y);
                    },
                    onSuccess: function(w, Y) {
                      if (M.customInsert) {
                        var J;
                        M.customInsert((0, r.default)(J = p.insertImg).call(J, p), Y, v);
                        return;
                      }
                      if (Y.errno != "0") {
                        h.customAlert(A("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", A("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + A("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + Y.errno), M.fail && M.fail(w, v, Y);
                        return;
                      }
                      var k = Y.data;
                      (0, i.default)(k).call(k, function(nt) {
                        typeof nt == "string" ? p.insertImg(nt) : p.insertImg(nt.url, nt.alt, nt.href);
                      }), M.success && M.success(w, v, Y);
                    }
                  });
                  typeof W == "string" && h.customAlert(W, "error");
                  return;
                }
                S && d.arrForEach(s, function(K) {
                  var w = p, Y = new FileReader();
                  Y.readAsDataURL(K), Y.onload = function() {
                    if (!!this.result) {
                      var J = this.result.toString();
                      w.insertImg(J, J);
                    }
                  };
                });
              }
            }
          }, u;
        }();
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(410)), i = e(t(4)), c = e(t(45));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.dealTextNode = n.isAllTodo = n.isTodo = n.getCursorNextNode = void 0;
        function g(u) {
          return u.length ? u.attr("class") === "w-e-todo" : !1;
        }
        n.isTodo = g;
        function d(u) {
          var s = u.selection.getSelectionRangeTopNodes();
          if (s.length !== 0)
            return (0, r.default)(s).call(s, function(p) {
              return g(p);
            });
        }
        n.isAllTodo = d;
        function m(u, s, p) {
          var v;
          if (!!u.hasChildNodes()) {
            var h = u.cloneNode(), y = !1;
            s.nodeValue === "" && (y = !0);
            var A = [];
            return (0, i.default)(v = u.childNodes).call(v, function(x) {
              if (!f(x, s) && y && (h.appendChild(x.cloneNode(!0)), x.nodeName !== "BR" && A.push(x)), f(x, s)) {
                if (x.nodeType === 1) {
                  var S = m(x, s, p);
                  S && S.textContent !== "" && (h == null || h.appendChild(S));
                }
                if (x.nodeType === 3 && s.isEqualNode(x)) {
                  var D = l(x, p);
                  h.textContent = D;
                }
                y = !0;
              }
            }), (0, i.default)(A).call(A, function(x) {
              var S = x;
              S.remove();
            }), h;
          }
        }
        n.getCursorNextNode = m;
        function f(u, s) {
          return u.nodeType === 3 ? u.nodeValue === s.nodeValue : u.contains(s);
        }
        function l(u, s, p) {
          p === void 0 && (p = !0);
          var v = u.nodeValue, h = v == null ? void 0 : (0, c.default)(v).call(v, 0, s);
          if (v = v == null ? void 0 : (0, c.default)(v).call(v, s), !p) {
            var y = v;
            v = h, h = y;
          }
          return u.nodeValue = h, v;
        }
        n.dealTextNode = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(430), i = function() {
          function c(g) {
            this.maxSize = g, this.isRe = !1, this.data = new r.CeilStack(g), this.revokeData = new r.CeilStack(g);
          }
          return (0, a.default)(c.prototype, "size", {
            get: function() {
              return [this.data.size, this.revokeData.size];
            },
            enumerable: !1,
            configurable: !0
          }), c.prototype.resetMaxSize = function(g) {
            this.data.resetMax(g), this.revokeData.resetMax(g);
          }, c.prototype.save = function(g) {
            return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(g), this;
          }, c.prototype.revoke = function(g) {
            !this.isRe && (this.isRe = !0);
            var d = this.data.outstack();
            return d ? (this.revokeData.instack(d), g(d), !0) : !1;
          }, c.prototype.restore = function(g) {
            !this.isRe && (this.isRe = !0);
            var d = this.revokeData.outstack();
            return d ? (this.data.instack(d), g(d), !0) : !1;
          }, c;
        }();
        n.default = i;
      },
      function(o, n, t) {
        var e = t(14), a = t(11), r = t(73);
        o.exports = !e && !a(function() {
          return Object.defineProperty(r("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      },
      function(o, n, t) {
        var e = t(11), a = /#|\.prototype\./, r = function(m, f) {
          var l = c[i(m)];
          return l == d ? !0 : l == g ? !1 : typeof f == "function" ? e(f) : !!f;
        }, i = r.normalize = function(m) {
          return String(m).replace(a, ".").toLowerCase();
        }, c = r.data = {}, g = r.NATIVE = "N", d = r.POLYFILL = "P";
        o.exports = r;
      },
      function(o, n, t) {
        var e = t(103), a = Function.toString;
        typeof e.inspectSource != "function" && (e.inspectSource = function(r) {
          return a.call(r);
        }), o.exports = e.inspectSource;
      },
      function(o, n, t) {
        var e = t(8), a = t(166), r = "__core-js_shared__", i = e[r] || a(r, {});
        o.exports = i;
      },
      function(o, n, t) {
        var e = t(105), a = t(19), r = t(16), i = t(10), c = t(43), g = i("iterator"), d = !1, m = function() {
          return this;
        }, f, l, u;
        [].keys && (u = [].keys(), "next" in u ? (l = e(e(u)), l !== Object.prototype && (f = l)) : d = !0), f == null && (f = {}), !c && !r(f, g) && a(f, g, m), o.exports = {
          IteratorPrototype: f,
          BUGGY_SAFARI_ITERATORS: d
        };
      },
      function(o, n, t) {
        var e = t(16), a = t(31), r = t(63), i = t(168), c = r("IE_PROTO"), g = Object.prototype;
        o.exports = i ? Object.getPrototypeOf : function(d) {
          return d = a(d), e(d, c) ? d[c] : typeof d.constructor == "function" && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? g : null;
        };
      },
      function(o, n, t) {
        var e = t(76);
        o.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
      },
      function(o, n, t) {
        var e = t(16), a = t(30), r = t(78).indexOf, i = t(51);
        o.exports = function(c, g) {
          var d = a(c), m = 0, f = [], l;
          for (l in d)
            !e(i, l) && e(d, l) && f.push(l);
          for (; g.length > m; )
            e(d, l = g[m++]) && (~r(f, l) || f.push(l));
          return f;
        };
      },
      function(o, n, t) {
        var e = t(36);
        o.exports = e("document", "documentElement");
      },
      function(o, n, t) {
        var e = t(8);
        o.exports = e.Promise;
      },
      function(o, n, t) {
        var e = t(53);
        o.exports = function(a, r, i) {
          for (var c in r)
            i && i.unsafe && a[c] ? a[c] = r[c] : e(a, c, r[c], i);
          return a;
        };
      },
      function(o, n, t) {
        var e = t(36), a = t(18), r = t(10), i = t(14), c = r("species");
        o.exports = function(g) {
          var d = e(g), m = a.f;
          i && d && !d[c] && m(d, c, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
        };
      },
      function(o, n, t) {
        var e = t(10), a = t(44), r = e("iterator"), i = Array.prototype;
        o.exports = function(c) {
          return c !== void 0 && (a.Array === c || i[r] === c);
        };
      },
      function(o, n, t) {
        var e = t(65), a = t(44), r = t(10), i = r("iterator");
        o.exports = function(c) {
          if (c != null)
            return c[i] || c["@@iterator"] || a[e(c)];
        };
      },
      function(o, n, t) {
        var e = t(25);
        o.exports = function(a, r, i, c) {
          try {
            return c ? r(e(i)[0], i[1]) : r(i);
          } catch (d) {
            var g = a.return;
            throw g !== void 0 && e(g.call(a)), d;
          }
        };
      },
      function(o, n, t) {
        var e = t(10), a = e("iterator"), r = !1;
        try {
          var i = 0, c = {
            next: function() {
              return { done: !!i++ };
            },
            return: function() {
              r = !0;
            }
          };
          c[a] = function() {
            return this;
          }, Array.from(c, function() {
            throw 2;
          });
        } catch {
        }
        o.exports = function(g, d) {
          if (!d && !r)
            return !1;
          var m = !1;
          try {
            var f = {};
            f[a] = function() {
              return {
                next: function() {
                  return { done: m = !0 };
                }
              };
            }, g(f);
          } catch {
          }
          return m;
        };
      },
      function(o, n, t) {
        var e = t(25), a = t(41), r = t(10), i = r("species");
        o.exports = function(c, g) {
          var d = e(c).constructor, m;
          return d === void 0 || (m = e(d)[i]) == null ? g : a(m);
        };
      },
      function(o, n, t) {
        var e = t(8), a = t(11), r = t(34), i = t(40), c = t(108), g = t(73), d = t(118), m = e.location, f = e.setImmediate, l = e.clearImmediate, u = e.process, s = e.MessageChannel, p = e.Dispatch, v = 0, h = {}, y = "onreadystatechange", A, x, S, D = function(T) {
          if (h.hasOwnProperty(T)) {
            var R = h[T];
            delete h[T], R();
          }
        }, I = function(T) {
          return function() {
            D(T);
          };
        }, C = function(T) {
          D(T.data);
        }, E = function(T) {
          e.postMessage(T + "", m.protocol + "//" + m.host);
        };
        (!f || !l) && (f = function(R) {
          for (var N = [], M = 1; arguments.length > M; )
            N.push(arguments[M++]);
          return h[++v] = function() {
            (typeof R == "function" ? R : Function(R)).apply(void 0, N);
          }, A(v), v;
        }, l = function(R) {
          delete h[R];
        }, r(u) == "process" ? A = function(T) {
          u.nextTick(I(T));
        } : p && p.now ? A = function(T) {
          p.now(I(T));
        } : s && !d ? (x = new s(), S = x.port2, x.port1.onmessage = C, A = i(S.postMessage, S, 1)) : e.addEventListener && typeof postMessage == "function" && !e.importScripts && !a(E) && m.protocol !== "file:" ? (A = E, e.addEventListener("message", C, !1)) : y in g("script") ? A = function(T) {
          c.appendChild(g("script"))[y] = function() {
            c.removeChild(this), D(T);
          };
        } : A = function(T) {
          setTimeout(I(T), 0);
        }), o.exports = {
          set: f,
          clear: l
        };
      },
      function(o, n, t) {
        var e = t(84);
        o.exports = /(iphone|ipod|ipad).*applewebkit/i.test(e);
      },
      function(o, n, t) {
        var e = t(25), a = t(13), r = t(85);
        o.exports = function(i, c) {
          if (e(i), a(c) && c.constructor === i)
            return c;
          var g = r.f(i), d = g.resolve;
          return d(c), g.promise;
        };
      },
      function(o, n) {
        o.exports = function(t) {
          try {
            return { error: !1, value: t() };
          } catch (e) {
            return { error: !0, value: e };
          }
        };
      },
      function(o, n, t) {
        o.exports = t(197);
      },
      function(o, n, t) {
        var e = t(5), a = t(8), r = t(123), i = t(11), c = t(19), g = t(66), d = t(83), m = t(13), f = t(37), l = t(18).f, u = t(32).forEach, s = t(14), p = t(42), v = p.set, h = p.getterFor;
        o.exports = function(y, A, x) {
          var S = y.indexOf("Map") !== -1, D = y.indexOf("Weak") !== -1, I = S ? "set" : "add", C = a[y], E = C && C.prototype, T = {}, R;
          if (!s || typeof C != "function" || !(D || E.forEach && !i(function() {
            new C().entries().next();
          })))
            R = x.getConstructor(A, y, S, I), r.REQUIRED = !0;
          else {
            R = A(function(M, B) {
              v(d(M, R, y), {
                type: y,
                collection: new C()
              }), B != null && g(B, M[I], M, S);
            });
            var N = h(y);
            u(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(M) {
              var B = M == "add" || M == "set";
              M in E && !(D && M == "clear") && c(R.prototype, M, function(F, O) {
                var b = N(this).collection;
                if (!B && D && !m(F))
                  return M == "get" ? void 0 : !1;
                var $ = b[M](F === 0 ? 0 : F, O);
                return B ? this : $;
              });
            }), D || l(R.prototype, "size", {
              configurable: !0,
              get: function() {
                return N(this).collection.size;
              }
            });
          }
          return f(R, y, !1, !0), T[y] = R, e({ global: !0, forced: !0 }, T), D || x.setStrong(R, y, S), R;
        };
      },
      function(o, n, t) {
        var e = t(51), a = t(13), r = t(16), i = t(18).f, c = t(64), g = t(200), d = c("meta"), m = 0, f = Object.isExtensible || function() {
          return !0;
        }, l = function(h) {
          i(h, d, { value: {
            objectID: "O" + ++m,
            weakData: {}
          } });
        }, u = function(h, y) {
          if (!a(h))
            return typeof h == "symbol" ? h : (typeof h == "string" ? "S" : "P") + h;
          if (!r(h, d)) {
            if (!f(h))
              return "F";
            if (!y)
              return "E";
            l(h);
          }
          return h[d].objectID;
        }, s = function(h, y) {
          if (!r(h, d)) {
            if (!f(h))
              return !0;
            if (!y)
              return !1;
            l(h);
          }
          return h[d].weakData;
        }, p = function(h) {
          return g && v.REQUIRED && f(h) && !r(h, d) && l(h), h;
        }, v = o.exports = {
          REQUIRED: !1,
          fastKey: u,
          getWeakData: s,
          onFreeze: p
        };
        e[d] = !0;
      },
      function(o, n, t) {
        var e = t(18).f, a = t(77), r = t(110), i = t(40), c = t(83), g = t(66), d = t(75), m = t(111), f = t(14), l = t(123).fastKey, u = t(42), s = u.set, p = u.getterFor;
        o.exports = {
          getConstructor: function(v, h, y, A) {
            var x = v(function(C, E) {
              c(C, x, h), s(C, {
                type: h,
                index: a(null),
                first: void 0,
                last: void 0,
                size: 0
              }), f || (C.size = 0), E != null && g(E, C[A], C, y);
            }), S = p(h), D = function(C, E, T) {
              var R = S(C), N = I(C, E), M, B;
              return N ? N.value = T : (R.last = N = {
                index: B = l(E, !0),
                key: E,
                value: T,
                previous: M = R.last,
                next: void 0,
                removed: !1
              }, R.first || (R.first = N), M && (M.next = N), f ? R.size++ : C.size++, B !== "F" && (R.index[B] = N)), C;
            }, I = function(C, E) {
              var T = S(C), R = l(E), N;
              if (R !== "F")
                return T.index[R];
              for (N = T.first; N; N = N.next)
                if (N.key == E)
                  return N;
            };
            return r(x.prototype, {
              clear: function() {
                for (var E = this, T = S(E), R = T.index, N = T.first; N; )
                  N.removed = !0, N.previous && (N.previous = N.previous.next = void 0), delete R[N.index], N = N.next;
                T.first = T.last = void 0, f ? T.size = 0 : E.size = 0;
              },
              delete: function(C) {
                var E = this, T = S(E), R = I(E, C);
                if (R) {
                  var N = R.next, M = R.previous;
                  delete T.index[R.index], R.removed = !0, M && (M.next = N), N && (N.previous = M), T.first == R && (T.first = N), T.last == R && (T.last = M), f ? T.size-- : E.size--;
                }
                return !!R;
              },
              forEach: function(E) {
                for (var T = S(this), R = i(E, arguments.length > 1 ? arguments[1] : void 0, 3), N; N = N ? N.next : T.first; )
                  for (R(N.value, N.key, this); N && N.removed; )
                    N = N.previous;
              },
              has: function(E) {
                return !!I(this, E);
              }
            }), r(x.prototype, y ? {
              get: function(E) {
                var T = I(this, E);
                return T && T.value;
              },
              set: function(E, T) {
                return D(this, E === 0 ? 0 : E, T);
              }
            } : {
              add: function(E) {
                return D(this, E = E === 0 ? 0 : E, E);
              }
            }), f && e(x.prototype, "size", {
              get: function() {
                return S(this).size;
              }
            }), x;
          },
          setStrong: function(v, h, y) {
            var A = h + " Iterator", x = p(h), S = p(A);
            d(v, h, function(D, I) {
              s(this, {
                type: A,
                target: D,
                state: x(D),
                kind: I,
                last: void 0
              });
            }, function() {
              for (var D = S(this), I = D.kind, C = D.last; C && C.removed; )
                C = C.previous;
              return !D.target || !(D.last = C = C ? C.next : D.state.first) ? (D.target = void 0, { value: void 0, done: !0 }) : I == "keys" ? { value: C.key, done: !1 } : I == "values" ? { value: C.value, done: !1 } : { value: [C.key, C.value], done: !1 };
            }, y ? "entries" : "values", !y, !0), m(h);
          }
        };
      },
      function(o, n, t) {
        var e = t(12);
        e("iterator");
      },
      function(o, n, t) {
        var e = t(107), a = t(80), r = a.concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(c) {
          return e(c, r);
        };
      },
      function(o, n) {
        n.f = Object.getOwnPropertySymbols;
      },
      function(o, n, t) {
        o.exports = t(268);
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          zIndex: 1e4
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          focus: !0,
          height: 300,
          placeholder: "\u8BF7\u8F93\u5165\u6B63\u6587",
          zIndexFullScreen: 10002,
          showFullScreen: !0
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.getPasteImgs = n.getPasteHtml = n.getPasteText = void 0;
        var i = t(2), c = t(6), g = i.__importDefault(t(292));
        function d(l) {
          var u = l.clipboardData, s = "";
          return u == null ? s = window.clipboardData && window.clipboardData.getData("text") : s = u.getData("text/plain"), c.replaceHtmlSymbol(s);
        }
        n.getPasteText = d;
        function m(l, u, s) {
          u === void 0 && (u = !0), s === void 0 && (s = !1);
          var p = l.clipboardData, v = "";
          if (p && (v = p.getData("text/html")), !v) {
            var h = d(l);
            if (!h)
              return "";
            v = "<p>" + h + "</p>";
          }
          return v = v.replace(/<(\d)/gm, function(y, A) {
            return "&lt;" + A;
          }), v = v.replace(/<(\/?meta.*?)>/gim, ""), v = g.default(v, u, s), v;
        }
        n.getPasteHtml = m;
        function f(l) {
          var u, s = [], p = d(l);
          if (p)
            return s;
          var v = (u = l.clipboardData) === null || u === void 0 ? void 0 : u.items;
          return v && (0, r.default)(c).call(c, v, function(h, y) {
            var A = y.type;
            /image/i.test(A) && s.push(y.getAsFile());
          }), s;
        }
        n.getPasteImgs = f;
      },
      function(o, n, t) {
        o.exports = t(294);
      },
      function(o, n, t) {
        o.exports = t(310);
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(3)), d = t(7), m = function() {
          function f(l, u) {
            var s = this;
            this.hideTimeoutId = 0, this.menu = l, this.conf = u;
            var p = g.default('<div class="w-e-droplist"></div>'), v = g.default("<p>" + u.title + "</p>");
            v.addClass("w-e-dp-title"), p.append(v);
            var h = u.list || [], y = u.type || "list", A = u.clickHandler || d.EMPTY_FN, x = g.default('<ul class="' + (y === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
            (0, r.default)(h).call(h, function(S) {
              var D = S.$elem, I = S.value, C = g.default('<li class="w-e-item"></li>');
              D && (C.append(D), x.append(C), C.on("click", function(E) {
                A(I), E.stopPropagation(), s.hideTimeoutId = (0, i.default)(function() {
                  s.hide();
                });
              }));
            }), p.append(x), p.on("mouseleave", function() {
              s.hideTimeoutId = (0, i.default)(function() {
                s.hide();
              });
            }), this.$container = p, this.rendered = !1, this._show = !1;
          }
          return f.prototype.show = function() {
            this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
            var l = this.menu, u = l.$elem, s = this.$container;
            if (!this._show) {
              if (this.rendered)
                s.show();
              else {
                var p = u.getBoundingClientRect().height || 0, v = this.conf.width || 100;
                s.css("margin-top", p + "px").css("width", v + "px"), u.append(s), this.rendered = !0;
              }
              this._show = !0;
            }
          }, f.prototype.hide = function() {
            var l = this.$container;
            !this._show || (l.hide(), this._show = !1);
          }, (0, a.default)(f.prototype, "isShow", {
            get: function() {
              return this._show;
            },
            enumerable: !1,
            configurable: !0
          }), f;
        }();
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(92)), r = e(t(1)), i = e(t(4));
        (0, r.default)(n, "__esModule", {
          value: !0
        });
        var c = t(6);
        function g(d, m) {
          var f = new XMLHttpRequest();
          if (f.open("POST", d), f.timeout = m.timeout || 10 * 1e3, f.ontimeout = function() {
            console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6"), m.onTimeout && m.onTimeout(f);
          }, f.upload && (f.upload.onprogress = function(u) {
            var s = u.loaded / u.total;
            m.onProgress && m.onProgress(s, u);
          }), m.headers && (0, i.default)(c).call(c, m.headers, function(u, s) {
            f.setRequestHeader(u, s);
          }), f.withCredentials = !!m.withCredentials, m.beforeSend) {
            var l = m.beforeSend(f);
            if (l && (0, a.default)(l) === "object" && l.prevent)
              return l.msg;
          }
          return f.onreadystatechange = function() {
            if (f.readyState === 4) {
              var u = f.status;
              if (!(u < 200) && !(u >= 300 && u < 400)) {
                if (u >= 400) {
                  console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + u), m.onError && m.onError(f);
                  return;
                }
                var s = f.responseText, p;
                if ((0, a.default)(s) !== "object")
                  try {
                    p = JSON.parse(s);
                  } catch {
                    console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", s), m.onFail && m.onFail(f, s);
                    return;
                  }
                else
                  p = s;
                m.onSuccess(f, p);
              }
            }
          }, f.send(m.formData || null), f;
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(342)), i = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(3)), d = function() {
          function m(f) {
            this.editor = f, this.$textContainer = f.$textContainerElem, this.$bar = g.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
          }
          return m.prototype.show = function(f) {
            var l = this;
            if (!this.isShow) {
              this.isShow = !0;
              var u = this.$bar, s = this.$textContainer;
              s.append(u), (0, r.default)() - this.time > 100 && f <= 1 && (u.css("width", f * 100 + "%"), this.time = (0, r.default)());
              var p = this.timeoutId;
              p && clearTimeout(p), this.timeoutId = (0, i.default)(function() {
                l.hide();
              }, 500);
            }
          }, m.prototype.hide = function() {
            var f = this.$bar;
            f.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
          }, m;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.ListType = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(24)), g = t(47), d = r.__importStar(t(371)), m;
        (function(l) {
          l.OrderedList = "OL", l.UnorderedList = "UL";
        })(m = n.ListType || (n.ListType = {}));
        var f = function(l) {
          r.__extends(u, l);
          function u(s) {
            var p = this, v = i.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`), h = {
              width: 130,
              title: "\u5E8F\u5217",
              type: "list",
              list: [{
                $elem: i.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + s.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + `
                        <p>`),
                value: m.UnorderedList
              }, {
                $elem: i.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + s.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + `
                        <p>`),
                value: m.OrderedList
              }],
              clickHandler: function(A) {
                p.command(A);
              }
            };
            return p = l.call(this, v, s, h) || this, p;
          }
          return u.prototype.command = function(s) {
            var p = this.editor, v = p.selection.getSelectionContainerElem();
            v !== void 0 && (this.handleSelectionRangeNodes(s), this.tryChangeActive());
          }, u.prototype.validator = function(s, p, v) {
            return !(!s.length || !p.length || v.equal(s) || v.equal(p));
          }, u.prototype.handleSelectionRangeNodes = function(s) {
            var p = this.editor, v = p.selection, h = s.toLowerCase(), y = v.getSelectionContainerElem(), A = v.getSelectionStartElem().getNodeTop(p), x = v.getSelectionEndElem().getNodeTop(p);
            if (!!this.validator(A, x, p.$textElem)) {
              var S = v.getRange(), D = S == null ? void 0 : S.collapsed;
              p.$textElem.equal(y) || (y = y.getNodeTop(p));
              var I = {
                editor: p,
                listType: s,
                listTarget: h,
                $selectionElem: y,
                $startElem: A,
                $endElem: x
              }, C;
              this.isOrderElem(y) ? C = d.ClassType.Wrap : this.isOrderElem(A) && this.isOrderElem(x) ? C = d.ClassType.Join : this.isOrderElem(A) ? C = d.ClassType.StartJoin : this.isOrderElem(x) ? C = d.ClassType.EndJoin : C = d.ClassType.Other;
              var E = new d.default(d.createListHandle(C, I, S));
              g.updateRange(p, E.getSelectionRangeElem(), !!D);
            }
          }, u.prototype.isOrderElem = function(s) {
            var p = s.getNodeName();
            return p === m.OrderedList || p === m.UnorderedList;
          }, u.prototype.tryChangeActive = function() {
          }, u;
        }(c.default);
        n.default = f;
      },
      function(o, n, t) {
        o.exports = t(395);
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(i) {
          var c = i.selection.getSelectionContainerElem();
          return c != null && c.length ? !!(c.getNodeName() == "CODE" || c.getNodeName() == "PRE" || c.parent().getNodeName() == "CODE" || c.parent().getNodeName() == "PRE" || /hljs/.test(c.parent().attr("class"))) : !1;
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.todo = void 0;
        var i = t(2), c = i.__importDefault(t(3)), g = function() {
          function m(f) {
            var l;
            this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = c.default(this.template), this.$child = (l = f == null ? void 0 : f.childNodes()) === null || l === void 0 ? void 0 : l.clone(!0);
          }
          return m.prototype.init = function() {
            var f = this.$child, l = this.getInputContainer();
            f && f.insertAfter(l);
          }, m.prototype.getInput = function() {
            var f = this.$todo, l = (0, r.default)(f).call(f, "input");
            return l;
          }, m.prototype.getInputContainer = function() {
            var f = this.getInput().parent();
            return f;
          }, m.prototype.getTodo = function() {
            return this.$todo;
          }, m;
        }();
        n.todo = g;
        function d(m) {
          var f = new g(m);
          return f.init(), f;
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2);
        t(146), t(148), t(152), t(154), t(156), t(158), t(160);
        var i = r.__importDefault(t(87));
        r.__exportStar(t(442), n);
        try {
        } catch {
          throw new Error("\u8BF7\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C");
        }
        n.default = i.default;
      },
      function(o, n, t) {
        var e = t(143);
        o.exports = e;
      },
      function(o, n, t) {
        t(144);
        var e = t(9), a = e.Object, r = o.exports = function(c, g, d) {
          return a.defineProperty(c, g, d);
        };
        a.defineProperty.sham && (r.sham = !0);
      },
      function(o, n, t) {
        var e = t(5), a = t(14), r = t(18);
        e({ target: "Object", stat: !0, forced: !a, sham: !a }, {
          defineProperty: r.f
        });
      },
      function(o, n) {
        var t;
        t = function() {
          return this;
        }();
        try {
          t = t || new Function("return this")();
        } catch {
          typeof window == "object" && (t = window);
        }
        o.exports = t;
      },
      function(o, n, t) {
        var e = t(20), a = t(147);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*\u8868\u60C5\u83DC\u5355\u6837\u5F0F*/
  /*\u5206\u5272\u7EBF\u6837\u5F0F*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(20), a = t(149);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21), a = t(150), r = t(151);
        n = e(!1);
        var i = a(r);
        n.push([o.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + i + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        o.exports = function(e, a) {
          return a || (a = {}), e = e && e.__esModule ? e.default : e, typeof e != "string" ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), a.hash && (e += a.hash), /["'() \t\n]/.test(e) || a.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e);
        };
      },
      function(o, n, t) {
        t.r(n), n.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
      },
      function(o, n, t) {
        var e = t(20), a = t(153);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* \u5355\u4E2A\u83DC\u5355 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(20), a = t(155);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(20), a = t(157);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* \u4E3A emotion panel \u5B9A\u5236\u7684\u6837\u5F0F */
  /* \u4E0A\u4F20\u56FE\u7247\u3001\u4E0A\u4F20\u89C6\u9891\u7684 panel \u5B9A\u5236\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* \u8F93\u5165\u6846\u7684\u6837\u5F0F */
  /* \u6309\u94AE\u7684\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(20), a = t(159);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(161));
        Element.prototype.matches || (Element.prototype.matches = function(r) {
          var i = this.ownerDocument.querySelectorAll(r), c = i.length;
          for (c; c >= 0 && i.item(c) !== this; c--)
            ;
          return c > -1;
        }), a.default || (window.Promise = a.default);
      },
      function(o, n, t) {
        o.exports = t(162);
      },
      function(o, n, t) {
        var e = t(163);
        o.exports = e;
      },
      function(o, n, t) {
        t(61), t(50), t(54), t(175), t(178), t(179);
        var e = t(9);
        o.exports = e.Promise;
      },
      function(o, n, t) {
        var e = t(62), a = t(49), r = function(i) {
          return function(c, g) {
            var d = String(a(c)), m = e(g), f = d.length, l, u;
            return m < 0 || m >= f ? i ? "" : void 0 : (l = d.charCodeAt(m), l < 55296 || l > 56319 || m + 1 === f || (u = d.charCodeAt(m + 1)) < 56320 || u > 57343 ? i ? d.charAt(m) : l : i ? d.slice(m, m + 2) : (l - 55296 << 10) + (u - 56320) + 65536);
          };
        };
        o.exports = {
          codeAt: r(!1),
          charAt: r(!0)
        };
      },
      function(o, n, t) {
        var e = t(8), a = t(102), r = e.WeakMap;
        o.exports = typeof r == "function" && /native code/.test(a(r));
      },
      function(o, n, t) {
        var e = t(8), a = t(19);
        o.exports = function(r, i) {
          try {
            a(e, r, i);
          } catch {
            e[r] = i;
          }
          return i;
        };
      },
      function(o, n, t) {
        var e = t(104).IteratorPrototype, a = t(77), r = t(48), i = t(37), c = t(44), g = function() {
          return this;
        };
        o.exports = function(d, m, f) {
          var l = m + " Iterator";
          return d.prototype = a(e, { next: r(1, f) }), i(d, l, !1, !0), c[l] = g, d;
        };
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = !e(function() {
          function a() {
          }
          return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
        });
      },
      function(o, n, t) {
        var e = t(14), a = t(18), r = t(25), i = t(52);
        o.exports = e ? Object.defineProperties : function(g, d) {
          r(g);
          for (var m = i(d), f = m.length, l = 0, u; f > l; )
            a.f(g, u = m[l++], d[u]);
          return g;
        };
      },
      function(o, n, t) {
        var e = t(81), a = t(65);
        o.exports = e ? {}.toString : function() {
          return "[object " + a(this) + "]";
        };
      },
      function(o, n, t) {
        var e = t(25), a = t(172);
        o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var r = !1, i = {}, c;
          try {
            c = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, c.call(i, []), r = i instanceof Array;
          } catch {
          }
          return function(d, m) {
            return e(d), a(m), r ? c.call(d, m) : d.__proto__ = m, d;
          };
        }() : void 0);
      },
      function(o, n, t) {
        var e = t(13);
        o.exports = function(a) {
          if (!e(a) && a !== null)
            throw TypeError("Can't set " + String(a) + " as a prototype");
          return a;
        };
      },
      function(o, n, t) {
        var e = t(30), a = t(82), r = t(44), i = t(42), c = t(75), g = "Array Iterator", d = i.set, m = i.getterFor(g);
        o.exports = c(Array, "Array", function(f, l) {
          d(this, {
            type: g,
            target: e(f),
            index: 0,
            kind: l
          });
        }, function() {
          var f = m(this), l = f.target, u = f.kind, s = f.index++;
          return !l || s >= l.length ? (f.target = void 0, { value: void 0, done: !0 }) : u == "keys" ? { value: s, done: !1 } : u == "values" ? { value: l[s], done: !1 } : { value: [s, l[s]], done: !1 };
        }, "values"), r.Arguments = r.Array, a("keys"), a("values"), a("entries");
      },
      function(o, n) {
        o.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      },
      function(o, n, t) {
        var e = t(5), a = t(43), r = t(8), i = t(36), c = t(109), g = t(53), d = t(110), m = t(37), f = t(111), l = t(13), u = t(41), s = t(83), p = t(34), v = t(102), h = t(66), y = t(115), A = t(116), x = t(117).set, S = t(176), D = t(119), I = t(177), C = t(85), E = t(120), T = t(42), R = t(101), N = t(10), M = t(86), B = N("species"), F = "Promise", O = T.get, b = T.set, $ = T.getterFor(F), H = c, j = r.TypeError, G = r.document, U = r.process, W = i("fetch"), K = C.f, w = K, Y = p(U) == "process", J = !!(G && G.createEvent && r.dispatchEvent), k = "unhandledrejection", nt = "rejectionhandled", at = 0, dt = 1, Xt = 2, st = 1, wt = 2, It, ut, ht, Pt, gt = R(F, function() {
          var X = v(H) !== String(H);
          if (!X && (M === 66 || !Y && typeof PromiseRejectionEvent != "function") || a && !H.prototype.finally)
            return !0;
          if (M >= 51 && /native code/.test(H))
            return !1;
          var Q = H.resolve(1), q = function(z) {
            z(function() {
            }, function() {
            });
          }, tt = Q.constructor = {};
          return tt[B] = q, !(Q.then(function() {
          }) instanceof q);
        }), le = gt || !y(function(X) {
          H.all(X).catch(function() {
          });
        }), Rt = function(X) {
          var Q;
          return l(X) && typeof (Q = X.then) == "function" ? Q : !1;
        }, xt = function(X, Q, q) {
          if (!Q.notified) {
            Q.notified = !0;
            var tt = Q.reactions;
            S(function() {
              for (var z = Q.value, V = Q.state == dt, Z = 0; tt.length > Z; ) {
                var _ = tt[Z++], et = V ? _.ok : _.fail, it = _.resolve, ft = _.reject, vt = _.domain, lt, Yt, Zt;
                try {
                  et ? (V || (Q.rejection === wt && Bt(X, Q), Q.rejection = st), et === !0 ? lt = z : (vt && vt.enter(), lt = et(z), vt && (vt.exit(), Zt = !0)), lt === _.promise ? ft(j("Promise-chain cycle")) : (Yt = Rt(lt)) ? Yt.call(lt, it, ft) : it(lt)) : ft(z);
                } catch (Pn) {
                  vt && !Zt && vt.exit(), ft(Pn);
                }
              }
              Q.reactions = [], Q.notified = !1, q && !Q.rejection && Qt(X, Q);
            });
          }
        }, Mt = function(X, Q, q) {
          var tt, z;
          J ? (tt = G.createEvent("Event"), tt.promise = Q, tt.reason = q, tt.initEvent(X, !1, !0), r.dispatchEvent(tt)) : tt = { promise: Q, reason: q }, (z = r["on" + X]) ? z(tt) : X === k && I("Unhandled promise rejection", q);
        }, Qt = function(X, Q) {
          x.call(r, function() {
            var q = Q.value, tt = Nt(Q), z;
            if (tt && (z = E(function() {
              Y ? U.emit("unhandledRejection", q, X) : Mt(k, X, q);
            }), Q.rejection = Y || Nt(Q) ? wt : st, z.error))
              throw z.value;
          });
        }, Nt = function(X) {
          return X.rejection !== st && !X.parent;
        }, Bt = function(X, Q) {
          x.call(r, function() {
            Y ? U.emit("rejectionHandled", X) : Mt(nt, X, Q.value);
          });
        }, At = function(X, Q, q, tt) {
          return function(z) {
            X(Q, q, z, tt);
          };
        }, Et = function(X, Q, q, tt) {
          Q.done || (Q.done = !0, tt && (Q = tt), Q.value = q, Q.state = Xt, xt(X, Q, !0));
        }, St = function(X, Q, q, tt) {
          if (!Q.done) {
            Q.done = !0, tt && (Q = tt);
            try {
              if (X === q)
                throw j("Promise can't be resolved itself");
              var z = Rt(q);
              z ? S(function() {
                var V = { done: !1 };
                try {
                  z.call(
                    q,
                    At(St, X, V, Q),
                    At(Et, X, V, Q)
                  );
                } catch (Z) {
                  Et(X, V, Z, Q);
                }
              }) : (Q.value = q, Q.state = dt, xt(X, Q, !1));
            } catch (V) {
              Et(X, { done: !1 }, V, Q);
            }
          }
        };
        gt && (H = function(Q) {
          s(this, H, F), u(Q), It.call(this);
          var q = O(this);
          try {
            Q(At(St, this, q), At(Et, this, q));
          } catch (tt) {
            Et(this, q, tt);
          }
        }, It = function(Q) {
          b(this, {
            type: F,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: at,
            value: void 0
          });
        }, It.prototype = d(H.prototype, {
          then: function(Q, q) {
            var tt = $(this), z = K(A(this, H));
            return z.ok = typeof Q == "function" ? Q : !0, z.fail = typeof q == "function" && q, z.domain = Y ? U.domain : void 0, tt.parent = !0, tt.reactions.push(z), tt.state != at && xt(this, tt, !1), z.promise;
          },
          catch: function(X) {
            return this.then(void 0, X);
          }
        }), ut = function() {
          var X = new It(), Q = O(X);
          this.promise = X, this.resolve = At(St, X, Q), this.reject = At(Et, X, Q);
        }, C.f = K = function(X) {
          return X === H || X === ht ? new ut(X) : w(X);
        }, !a && typeof c == "function" && (Pt = c.prototype.then, g(c.prototype, "then", function(Q, q) {
          var tt = this;
          return new H(function(z, V) {
            Pt.call(tt, z, V);
          }).then(Q, q);
        }, { unsafe: !0 }), typeof W == "function" && e({ global: !0, enumerable: !0, forced: !0 }, {
          fetch: function(Q) {
            return D(H, W.apply(r, arguments));
          }
        }))), e({ global: !0, wrap: !0, forced: gt }, {
          Promise: H
        }), m(H, F, !1, !0), f(F), ht = i(F), e({ target: F, stat: !0, forced: gt }, {
          reject: function(Q) {
            var q = K(this);
            return q.reject.call(void 0, Q), q.promise;
          }
        }), e({ target: F, stat: !0, forced: a || gt }, {
          resolve: function(Q) {
            return D(a && this === ht ? H : this, Q);
          }
        }), e({ target: F, stat: !0, forced: le }, {
          all: function(Q) {
            var q = this, tt = K(q), z = tt.resolve, V = tt.reject, Z = E(function() {
              var _ = u(q.resolve), et = [], it = 0, ft = 1;
              h(Q, function(vt) {
                var lt = it++, Yt = !1;
                et.push(void 0), ft++, _.call(q, vt).then(function(Zt) {
                  Yt || (Yt = !0, et[lt] = Zt, --ft || z(et));
                }, V);
              }), --ft || z(et);
            });
            return Z.error && V(Z.value), tt.promise;
          },
          race: function(Q) {
            var q = this, tt = K(q), z = tt.reject, V = E(function() {
              var Z = u(q.resolve);
              h(Q, function(_) {
                Z.call(q, _).then(tt.resolve, z);
              });
            });
            return V.error && z(V.value), tt.promise;
          }
        });
      },
      function(o, n, t) {
        var e = t(8), a = t(71).f, r = t(34), i = t(117).set, c = t(118), g = e.MutationObserver || e.WebKitMutationObserver, d = e.process, m = e.Promise, f = r(d) == "process", l = a(e, "queueMicrotask"), u = l && l.value, s, p, v, h, y, A, x, S;
        u || (s = function() {
          var D, I;
          for (f && (D = d.domain) && D.exit(); p; ) {
            I = p.fn, p = p.next;
            try {
              I();
            } catch (C) {
              throw p ? h() : v = void 0, C;
            }
          }
          v = void 0, D && D.enter();
        }, f ? h = function() {
          d.nextTick(s);
        } : g && !c ? (y = !0, A = document.createTextNode(""), new g(s).observe(A, { characterData: !0 }), h = function() {
          A.data = y = !y;
        }) : m && m.resolve ? (x = m.resolve(void 0), S = x.then, h = function() {
          S.call(x, s);
        }) : h = function() {
          i.call(e, s);
        }), o.exports = u || function(D) {
          var I = { fn: D, next: void 0 };
          v && (v.next = I), p || (p = I, h()), v = I;
        };
      },
      function(o, n, t) {
        var e = t(8);
        o.exports = function(a, r) {
          var i = e.console;
          i && i.error && (arguments.length === 1 ? i.error(a) : i.error(a, r));
        };
      },
      function(o, n, t) {
        var e = t(5), a = t(41), r = t(85), i = t(120), c = t(66);
        e({ target: "Promise", stat: !0 }, {
          allSettled: function(d) {
            var m = this, f = r.f(m), l = f.resolve, u = f.reject, s = i(function() {
              var p = a(m.resolve), v = [], h = 0, y = 1;
              c(d, function(A) {
                var x = h++, S = !1;
                v.push(void 0), y++, p.call(m, A).then(function(D) {
                  S || (S = !0, v[x] = { status: "fulfilled", value: D }, --y || l(v));
                }, function(D) {
                  S || (S = !0, v[x] = { status: "rejected", reason: D }, --y || l(v));
                });
              }), --y || l(v);
            });
            return s.error && u(s.value), f.promise;
          }
        });
      },
      function(o, n, t) {
        var e = t(5), a = t(43), r = t(109), i = t(11), c = t(36), g = t(116), d = t(119), m = t(53), f = !!r && i(function() {
          r.prototype.finally.call({ then: function() {
          } }, function() {
          });
        });
        e({ target: "Promise", proto: !0, real: !0, forced: f }, {
          finally: function(l) {
            var u = g(this, c("Promise")), s = typeof l == "function";
            return this.then(
              s ? function(p) {
                return d(u, l()).then(function() {
                  return p;
                });
              } : l,
              s ? function(p) {
                return d(u, l()).then(function() {
                  throw p;
                });
              } : l
            );
          }
        }), !a && typeof r == "function" && !r.prototype.finally && m(r.prototype, "finally", c("Promise").prototype.finally);
      },
      function(o, n, t) {
        t(54);
        var e = t(181), a = t(65), r = Array.prototype, i = {
          DOMTokenList: !0,
          NodeList: !0
        };
        o.exports = function(c) {
          var g = c.forEach;
          return c === r || c instanceof Array && g === r.forEach || i.hasOwnProperty(a(c)) ? e : g;
        };
      },
      function(o, n, t) {
        var e = t(182);
        o.exports = e;
      },
      function(o, n, t) {
        t(183);
        var e = t(15);
        o.exports = e("Array").forEach;
      },
      function(o, n, t) {
        var e = t(5), a = t(184);
        e({ target: "Array", proto: !0, forced: [].forEach != a }, {
          forEach: a
        });
      },
      function(o, n, t) {
        var e = t(32).forEach, a = t(67), r = t(22), i = a("forEach"), c = r("forEach");
        o.exports = !i || !c ? function(d) {
          return e(this, d, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      },
      function(o, n, t) {
        var e = t(186);
        o.exports = e;
      },
      function(o, n, t) {
        t(187);
        var e = t(9);
        o.exports = e.Array.isArray;
      },
      function(o, n, t) {
        var e = t(5), a = t(55);
        e({ target: "Array", stat: !0 }, {
          isArray: a
        });
      },
      function(o, n, t) {
        var e = t(189);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(190), a = Array.prototype;
        o.exports = function(r) {
          var i = r.map;
          return r === a || r instanceof Array && i === a.map ? e : i;
        };
      },
      function(o, n, t) {
        t(191);
        var e = t(15);
        o.exports = e("Array").map;
      },
      function(o, n, t) {
        var e = t(5), a = t(32).map, r = t(56), i = t(22), c = r("map"), g = i("map");
        e({ target: "Array", proto: !0, forced: !c || !g }, {
          map: function(m) {
            return a(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(193);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(194), a = String.prototype;
        o.exports = function(r) {
          var i = r.trim;
          return typeof r == "string" || r === a || r instanceof String && i === a.trim ? e : i;
        };
      },
      function(o, n, t) {
        t(195);
        var e = t(15);
        o.exports = e("String").trim;
      },
      function(o, n, t) {
        var e = t(5), a = t(90).trim, r = t(196);
        e({ target: "String", proto: !0, forced: r("trim") }, {
          trim: function() {
            return a(this);
          }
        });
      },
      function(o, n, t) {
        var e = t(11), a = t(68), r = "\u200B\x85\u180E";
        o.exports = function(i) {
          return e(function() {
            return !!a[i]() || r[i]() != r || a[i].name !== i;
          });
        };
      },
      function(o, n, t) {
        var e = t(198);
        o.exports = e;
      },
      function(o, n, t) {
        t(199), t(61), t(50), t(54);
        var e = t(9);
        o.exports = e.Map;
      },
      function(o, n, t) {
        var e = t(122), a = t(124);
        o.exports = e("Map", function(r) {
          return function() {
            return r(this, arguments.length ? arguments[0] : void 0);
          };
        }, a);
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = !e(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      function(o, n, t) {
        var e = t(202);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(203), a = Array.prototype;
        o.exports = function(r) {
          var i = r.indexOf;
          return r === a || r instanceof Array && i === a.indexOf ? e : i;
        };
      },
      function(o, n, t) {
        t(204);
        var e = t(15);
        o.exports = e("Array").indexOf;
      },
      function(o, n, t) {
        var e = t(5), a = t(78).indexOf, r = t(67), i = t(22), c = [].indexOf, g = !!c && 1 / [1].indexOf(1, -0) < 0, d = r("indexOf"), m = i("indexOf", { ACCESSORS: !0, 1: 0 });
        e({ target: "Array", proto: !0, forced: g || !d || !m }, {
          indexOf: function(l) {
            return g ? c.apply(this, arguments) || 0 : a(this, l, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(206);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(207), a = Array.prototype;
        o.exports = function(r) {
          var i = r.splice;
          return r === a || r instanceof Array && i === a.splice ? e : i;
        };
      },
      function(o, n, t) {
        t(208);
        var e = t(15);
        o.exports = e("Array").splice;
      },
      function(o, n, t) {
        var e = t(5), a = t(79), r = t(62), i = t(35), c = t(31), g = t(88), d = t(69), m = t(56), f = t(22), l = m("splice"), u = f("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), s = Math.max, p = Math.min, v = 9007199254740991, h = "Maximum allowed length exceeded";
        e({ target: "Array", proto: !0, forced: !l || !u }, {
          splice: function(A, x) {
            var S = c(this), D = i(S.length), I = a(A, D), C = arguments.length, E, T, R, N, M, B;
            if (C === 0 ? E = T = 0 : C === 1 ? (E = 0, T = D - I) : (E = C - 2, T = p(s(r(x), 0), D - I)), D + E - T > v)
              throw TypeError(h);
            for (R = g(S, T), N = 0; N < T; N++)
              M = I + N, M in S && d(R, N, S[M]);
            if (R.length = T, E < T) {
              for (N = I; N < D - T; N++)
                M = N + T, B = N + E, M in S ? S[B] = S[M] : delete S[B];
              for (N = D; N > D - T + E; N--)
                delete S[N - 1];
            } else if (E > T)
              for (N = D - T; N > I; N--)
                M = N + T - 1, B = N + E - 1, M in S ? S[B] = S[M] : delete S[B];
            for (N = 0; N < E; N++)
              S[N + I] = arguments[N + 2];
            return S.length = D - T + E, R;
          }
        });
      },
      function(o, n, t) {
        var e = t(210);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(211), a = Array.prototype;
        o.exports = function(r) {
          var i = r.filter;
          return r === a || r instanceof Array && i === a.filter ? e : i;
        };
      },
      function(o, n, t) {
        t(212);
        var e = t(15);
        o.exports = e("Array").filter;
      },
      function(o, n, t) {
        var e = t(5), a = t(32).filter, r = t(56), i = t(22), c = r("filter"), g = i("filter");
        e({ target: "Array", proto: !0, forced: !c || !g }, {
          filter: function(m) {
            return a(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(214);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(215), a = t(217), r = Array.prototype, i = String.prototype;
        o.exports = function(c) {
          var g = c.includes;
          return c === r || c instanceof Array && g === r.includes ? e : typeof c == "string" || c === i || c instanceof String && g === i.includes ? a : g;
        };
      },
      function(o, n, t) {
        t(216);
        var e = t(15);
        o.exports = e("Array").includes;
      },
      function(o, n, t) {
        var e = t(5), a = t(78).includes, r = t(82), i = t(22), c = i("indexOf", { ACCESSORS: !0, 1: 0 });
        e({ target: "Array", proto: !0, forced: !c }, {
          includes: function(d) {
            return a(this, d, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), r("includes");
      },
      function(o, n, t) {
        t(218);
        var e = t(15);
        o.exports = e("String").includes;
      },
      function(o, n, t) {
        var e = t(5), a = t(219), r = t(49), i = t(221);
        e({ target: "String", proto: !0, forced: !i("includes") }, {
          includes: function(g) {
            return !!~String(r(this)).indexOf(a(g), arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(220);
        o.exports = function(a) {
          if (e(a))
            throw TypeError("The method doesn't accept regular expressions");
          return a;
        };
      },
      function(o, n, t) {
        var e = t(13), a = t(34), r = t(10), i = r("match");
        o.exports = function(c) {
          var g;
          return e(c) && ((g = c[i]) !== void 0 ? !!g : a(c) == "RegExp");
        };
      },
      function(o, n, t) {
        var e = t(10), a = e("match");
        o.exports = function(r) {
          var i = /./;
          try {
            "/./"[r](i);
          } catch {
            try {
              return i[a] = !1, "/./"[r](i);
            } catch {
            }
          }
          return !1;
        };
      },
      function(o, n, t) {
        var e = t(223);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(224), a = Function.prototype;
        o.exports = function(r) {
          var i = r.bind;
          return r === a || r instanceof Function && i === a.bind ? e : i;
        };
      },
      function(o, n, t) {
        t(225);
        var e = t(15);
        o.exports = e("Function").bind;
      },
      function(o, n, t) {
        var e = t(5), a = t(226);
        e({ target: "Function", proto: !0 }, {
          bind: a
        });
      },
      function(o, n, t) {
        var e = t(41), a = t(13), r = [].slice, i = {}, c = function(g, d, m) {
          if (!(d in i)) {
            for (var f = [], l = 0; l < d; l++)
              f[l] = "a[" + l + "]";
            i[d] = Function("C,a", "return new C(" + f.join(",") + ")");
          }
          return i[d](g, m);
        };
        o.exports = Function.bind || function(d) {
          var m = e(this), f = r.call(arguments, 1), l = function() {
            var s = f.concat(r.call(arguments));
            return this instanceof l ? c(m, s.length, s) : m.apply(d, s);
          };
          return a(m.prototype) && (l.prototype = m.prototype), l;
        };
      },
      function(o, n, t) {
        o.exports = t(228);
      },
      function(o, n, t) {
        var e = t(229);
        o.exports = e;
      },
      function(o, n, t) {
        t(125), t(50), t(54);
        var e = t(93);
        o.exports = e.f("iterator");
      },
      function(o, n, t) {
        o.exports = t(231);
      },
      function(o, n, t) {
        var e = t(232);
        t(251), t(252), t(253), t(254), t(255), o.exports = e;
      },
      function(o, n, t) {
        t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(125), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
        var e = t(9);
        o.exports = e.Symbol;
      },
      function(o, n, t) {
        var e = t(5), a = t(11), r = t(55), i = t(13), c = t(31), g = t(35), d = t(69), m = t(88), f = t(56), l = t(10), u = t(86), s = l("isConcatSpreadable"), p = 9007199254740991, v = "Maximum allowed index exceeded", h = u >= 51 || !a(function() {
          var S = [];
          return S[s] = !1, S.concat()[0] !== S;
        }), y = f("concat"), A = function(S) {
          if (!i(S))
            return !1;
          var D = S[s];
          return D !== void 0 ? !!D : r(S);
        }, x = !h || !y;
        e({ target: "Array", proto: !0, forced: x }, {
          concat: function(D) {
            var I = c(this), C = m(I, 0), E = 0, T, R, N, M, B;
            for (T = -1, N = arguments.length; T < N; T++)
              if (B = T === -1 ? I : arguments[T], A(B)) {
                if (M = g(B.length), E + M > p)
                  throw TypeError(v);
                for (R = 0; R < M; R++, E++)
                  R in B && d(C, E, B[R]);
              } else {
                if (E >= p)
                  throw TypeError(v);
                d(C, E++, B);
              }
            return C.length = E, C;
          }
        });
      },
      function(o, n, t) {
        var e = t(5), a = t(8), r = t(36), i = t(43), c = t(14), g = t(76), d = t(106), m = t(11), f = t(16), l = t(55), u = t(13), s = t(25), p = t(31), v = t(30), h = t(60), y = t(48), A = t(77), x = t(52), S = t(126), D = t(235), I = t(127), C = t(71), E = t(18), T = t(59), R = t(19), N = t(53), M = t(74), B = t(63), F = t(51), O = t(64), b = t(10), $ = t(93), H = t(12), j = t(37), G = t(42), U = t(32).forEach, W = B("hidden"), K = "Symbol", w = "prototype", Y = b("toPrimitive"), J = G.set, k = G.getterFor(K), nt = Object[w], at = a.Symbol, dt = r("JSON", "stringify"), Xt = C.f, st = E.f, wt = D.f, It = T.f, ut = M("symbols"), ht = M("op-symbols"), Pt = M("string-to-symbol-registry"), gt = M("symbol-to-string-registry"), le = M("wks"), Rt = a.QObject, xt = !Rt || !Rt[w] || !Rt[w].findChild, Mt = c && m(function() {
          return A(st({}, "a", {
            get: function() {
              return st(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(z, V, Z) {
          var _ = Xt(nt, V);
          _ && delete nt[V], st(z, V, Z), _ && z !== nt && st(nt, V, _);
        } : st, Qt = function(z, V) {
          var Z = ut[z] = A(at[w]);
          return J(Z, {
            type: K,
            tag: z,
            description: V
          }), c || (Z.description = V), Z;
        }, Nt = d ? function(z) {
          return typeof z == "symbol";
        } : function(z) {
          return Object(z) instanceof at;
        }, Bt = function(V, Z, _) {
          V === nt && Bt(ht, Z, _), s(V);
          var et = h(Z, !0);
          return s(_), f(ut, et) ? (_.enumerable ? (f(V, W) && V[W][et] && (V[W][et] = !1), _ = A(_, { enumerable: y(0, !1) })) : (f(V, W) || st(V, W, y(1, {})), V[W][et] = !0), Mt(V, et, _)) : st(V, et, _);
        }, At = function(V, Z) {
          s(V);
          var _ = v(Z), et = x(_).concat(q(_));
          return U(et, function(it) {
            (!c || St.call(_, it)) && Bt(V, it, _[it]);
          }), V;
        }, Et = function(V, Z) {
          return Z === void 0 ? A(V) : At(A(V), Z);
        }, St = function(V) {
          var Z = h(V, !0), _ = It.call(this, Z);
          return this === nt && f(ut, Z) && !f(ht, Z) ? !1 : _ || !f(this, Z) || !f(ut, Z) || f(this, W) && this[W][Z] ? _ : !0;
        }, X = function(V, Z) {
          var _ = v(V), et = h(Z, !0);
          if (!(_ === nt && f(ut, et) && !f(ht, et))) {
            var it = Xt(_, et);
            return it && f(ut, et) && !(f(_, W) && _[W][et]) && (it.enumerable = !0), it;
          }
        }, Q = function(V) {
          var Z = wt(v(V)), _ = [];
          return U(Z, function(et) {
            !f(ut, et) && !f(F, et) && _.push(et);
          }), _;
        }, q = function(V) {
          var Z = V === nt, _ = wt(Z ? ht : v(V)), et = [];
          return U(_, function(it) {
            f(ut, it) && (!Z || f(nt, it)) && et.push(ut[it]);
          }), et;
        };
        if (g || (at = function() {
          if (this instanceof at)
            throw TypeError("Symbol is not a constructor");
          var V = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Z = O(V), _ = function(et) {
            this === nt && _.call(ht, et), f(this, W) && f(this[W], Z) && (this[W][Z] = !1), Mt(this, Z, y(1, et));
          };
          return c && xt && Mt(nt, Z, { configurable: !0, set: _ }), Qt(Z, V);
        }, N(at[w], "toString", function() {
          return k(this).tag;
        }), N(at, "withoutSetter", function(z) {
          return Qt(O(z), z);
        }), T.f = St, E.f = Bt, C.f = X, S.f = D.f = Q, I.f = q, $.f = function(z) {
          return Qt(b(z), z);
        }, c && (st(at[w], "description", {
          configurable: !0,
          get: function() {
            return k(this).description;
          }
        }), i || N(nt, "propertyIsEnumerable", St, { unsafe: !0 }))), e({ global: !0, wrap: !0, forced: !g, sham: !g }, {
          Symbol: at
        }), U(x(le), function(z) {
          H(z);
        }), e({ target: K, stat: !0, forced: !g }, {
          for: function(z) {
            var V = String(z);
            if (f(Pt, V))
              return Pt[V];
            var Z = at(V);
            return Pt[V] = Z, gt[Z] = V, Z;
          },
          keyFor: function(V) {
            if (!Nt(V))
              throw TypeError(V + " is not a symbol");
            if (f(gt, V))
              return gt[V];
          },
          useSetter: function() {
            xt = !0;
          },
          useSimple: function() {
            xt = !1;
          }
        }), e({ target: "Object", stat: !0, forced: !g, sham: !c }, {
          create: Et,
          defineProperty: Bt,
          defineProperties: At,
          getOwnPropertyDescriptor: X
        }), e({ target: "Object", stat: !0, forced: !g }, {
          getOwnPropertyNames: Q,
          getOwnPropertySymbols: q
        }), e({ target: "Object", stat: !0, forced: m(function() {
          I.f(1);
        }) }, {
          getOwnPropertySymbols: function(V) {
            return I.f(p(V));
          }
        }), dt) {
          var tt = !g || m(function() {
            var z = at();
            return dt([z]) != "[null]" || dt({ a: z }) != "{}" || dt(Object(z)) != "{}";
          });
          e({ target: "JSON", stat: !0, forced: tt }, {
            stringify: function(V, Z, _) {
              for (var et = [V], it = 1, ft; arguments.length > it; )
                et.push(arguments[it++]);
              if (ft = Z, !(!u(Z) && V === void 0 || Nt(V)))
                return l(Z) || (Z = function(vt, lt) {
                  if (typeof ft == "function" && (lt = ft.call(this, vt, lt)), !Nt(lt))
                    return lt;
                }), et[1] = Z, dt.apply(null, et);
            }
          });
        }
        at[w][Y] || R(at[w], Y, at[w].valueOf), j(at, K), F[W] = !0;
      },
      function(o, n, t) {
        var e = t(30), a = t(126).f, r = {}.toString, i = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], c = function(g) {
          try {
            return a(g);
          } catch {
            return i.slice();
          }
        };
        o.exports.f = function(d) {
          return i && r.call(d) == "[object Window]" ? c(d) : a(e(d));
        };
      },
      function(o, n, t) {
        var e = t(12);
        e("asyncIterator");
      },
      function(o, n) {
      },
      function(o, n, t) {
        var e = t(12);
        e("hasInstance");
      },
      function(o, n, t) {
        var e = t(12);
        e("isConcatSpreadable");
      },
      function(o, n, t) {
        var e = t(12);
        e("match");
      },
      function(o, n, t) {
        var e = t(12);
        e("matchAll");
      },
      function(o, n, t) {
        var e = t(12);
        e("replace");
      },
      function(o, n, t) {
        var e = t(12);
        e("search");
      },
      function(o, n, t) {
        var e = t(12);
        e("species");
      },
      function(o, n, t) {
        var e = t(12);
        e("split");
      },
      function(o, n, t) {
        var e = t(12);
        e("toPrimitive");
      },
      function(o, n, t) {
        var e = t(12);
        e("toStringTag");
      },
      function(o, n, t) {
        var e = t(12);
        e("unscopables");
      },
      function(o, n, t) {
        var e = t(37);
        e(Math, "Math", !0);
      },
      function(o, n, t) {
        var e = t(8), a = t(37);
        a(e.JSON, "JSON", !0);
      },
      function(o, n, t) {
        var e = t(12);
        e("asyncDispose");
      },
      function(o, n, t) {
        var e = t(12);
        e("dispose");
      },
      function(o, n, t) {
        var e = t(12);
        e("observable");
      },
      function(o, n, t) {
        var e = t(12);
        e("patternMatch");
      },
      function(o, n, t) {
        var e = t(12);
        e("replaceAll");
      },
      function(o, n, t) {
        o.exports = t(257);
      },
      function(o, n, t) {
        var e = t(258);
        o.exports = e;
      },
      function(o, n, t) {
        t(259);
        var e = t(9);
        o.exports = e.parseInt;
      },
      function(o, n, t) {
        var e = t(5), a = t(260);
        e({ global: !0, forced: parseInt != a }, {
          parseInt: a
        });
      },
      function(o, n, t) {
        var e = t(8), a = t(90).trim, r = t(68), i = e.parseInt, c = /^[+-]?0[Xx]/, g = i(r + "08") !== 8 || i(r + "0x16") !== 22;
        o.exports = g ? function(m, f) {
          var l = a(String(m));
          return i(l, f >>> 0 || (c.test(l) ? 16 : 10));
        } : i;
      },
      function(o, n, t) {
        var e = t(262);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(263), a = Array.prototype;
        o.exports = function(r) {
          var i = r.slice;
          return r === a || r instanceof Array && i === a.slice ? e : i;
        };
      },
      function(o, n, t) {
        t(264);
        var e = t(15);
        o.exports = e("Array").slice;
      },
      function(o, n, t) {
        var e = t(5), a = t(13), r = t(55), i = t(79), c = t(35), g = t(30), d = t(69), m = t(10), f = t(56), l = t(22), u = f("slice"), s = l("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), p = m("species"), v = [].slice, h = Math.max;
        e({ target: "Array", proto: !0, forced: !u || !s }, {
          slice: function(A, x) {
            var S = g(this), D = c(S.length), I = i(A, D), C = i(x === void 0 ? D : x, D), E, T, R;
            if (r(S) && (E = S.constructor, typeof E == "function" && (E === Array || r(E.prototype)) ? E = void 0 : a(E) && (E = E[p], E === null && (E = void 0)), E === Array || E === void 0))
              return v.call(S, I, C);
            for (T = new (E === void 0 ? Array : E)(h(C - I, 0)), R = 0; I < C; I++, R++)
              I in S && d(T, R, S[I]);
            return T.length = R, T;
          }
        });
      },
      function(o, n, t) {
        t(266);
        var e = t(9);
        o.exports = e.setTimeout;
      },
      function(o, n, t) {
        var e = t(5), a = t(8), r = t(84), i = [].slice, c = /MSIE .\./.test(r), g = function(d) {
          return function(m, f) {
            var l = arguments.length > 2, u = l ? i.call(arguments, 2) : void 0;
            return d(l ? function() {
              (typeof m == "function" ? m : Function(m)).apply(this, u);
            } : m, f);
          };
        };
        e({ global: !0, bind: !0, forced: c }, {
          setTimeout: g(a.setTimeout),
          setInterval: g(a.setInterval)
        });
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(128));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(272)), g = i.__importDefault(t(273)), d = i.__importDefault(t(129)), m = i.__importDefault(t(274)), f = i.__importDefault(t(275)), l = i.__importDefault(t(276)), u = i.__importDefault(t(130)), s = i.__importDefault(t(277)), p = i.__importDefault(t(278)), v = i.__importDefault(t(279)), h = (0, r.default)(
          {},
          c.default,
          g.default,
          d.default,
          f.default,
          m.default,
          l.default,
          u.default,
          s.default,
          p.default,
          v.default,
          {
            linkCheck: function(A, x) {
              return !0;
            }
          }
        );
        n.default = h;
      },
      function(o, n, t) {
        var e = t(269);
        o.exports = e;
      },
      function(o, n, t) {
        t(270);
        var e = t(9);
        o.exports = e.Object.assign;
      },
      function(o, n, t) {
        var e = t(5), a = t(271);
        e({ target: "Object", stat: !0, forced: Object.assign !== a }, {
          assign: a
        });
      },
      function(o, n, t) {
        var e = t(14), a = t(11), r = t(52), i = t(127), c = t(59), g = t(31), d = t(72), m = Object.assign, f = Object.defineProperty;
        o.exports = !m || a(function() {
          if (e && m({ b: 1 }, m(f({}, "a", {
            enumerable: !0,
            get: function() {
              f(this, "b", {
                value: 3,
                enumerable: !1
              });
            }
          }), { b: 2 })).b !== 1)
            return !0;
          var l = {}, u = {}, s = Symbol(), p = "abcdefghijklmnopqrst";
          return l[s] = 7, p.split("").forEach(function(v) {
            u[v] = v;
          }), m({}, l)[s] != 7 || r(m({}, u)).join("") != p;
        }) ? function(u, s) {
          for (var p = g(u), v = arguments.length, h = 1, y = i.f, A = c.f; v > h; )
            for (var x = d(arguments[h++]), S = y ? r(x).concat(y(x)) : r(x), D = S.length, I = 0, C; D > I; )
              C = S[I++], (!e || A.call(x, C)) && (p[C] = x[C]);
          return p;
        } : m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          menus: [
            "head",
            "bold",
            "fontSize",
            "fontName",
            "italic",
            "underline",
            "strikeThrough",
            "indent",
            "lineHeight",
            "foreColor",
            "backColor",
            "link",
            "list",
            "todo",
            "justify",
            "quote",
            "emoticon",
            "image",
            "video",
            "table",
            "code",
            "splitLine",
            "undo",
            "redo"
          ],
          fontNames: ["\u9ED1\u4F53", "\u4EFF\u5B8B", "\u6977\u4F53", "\u6807\u6977\u4F53", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u6977\u4F53", "\u5B8B\u4F53", "\u5FAE\u8F6F\u96C5\u9ED1", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
          fontSizes: {
            "x-small": {
              name: "10px",
              value: "1"
            },
            small: {
              name: "13px",
              value: "2"
            },
            normal: {
              name: "16px",
              value: "3"
            },
            large: {
              name: "18px",
              value: "4"
            },
            "x-large": {
              name: "24px",
              value: "5"
            },
            "xx-large": {
              name: "32px",
              value: "6"
            },
            "xxx-large": {
              name: "48px",
              value: "7"
            }
          },
          colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
          languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
          languageTab: "\u3000\u3000\u3000\u3000",
          emotions: [{
            title: "\u8868\u60C5",
            type: "emoji",
            content: "\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F60A} \u{1F607} \u{1F642} \u{1F643} \u{1F609} \u{1F60C} \u{1F60D} \u{1F618} \u{1F617} \u{1F619} \u{1F61A} \u{1F60B} \u{1F61B} \u{1F61D} \u{1F61C} \u{1F913} \u{1F60E} \u{1F60F} \u{1F612} \u{1F61E} \u{1F614} \u{1F61F} \u{1F615} \u{1F641} \u{1F623} \u{1F616} \u{1F62B} \u{1F629} \u{1F622} \u{1F62D} \u{1F624} \u{1F620} \u{1F621} \u{1F633} \u{1F631} \u{1F628} \u{1F917} \u{1F914} \u{1F636} \u{1F611} \u{1F62C} \u{1F644} \u{1F62F} \u{1F634} \u{1F637} \u{1F911} \u{1F608} \u{1F921} \u{1F4A9} \u{1F47B} \u{1F480} \u{1F440} \u{1F463}".split(/\s/)
          }, {
            title: "\u624B\u52BF",
            type: "emoji",
            content: "\u{1F450} \u{1F64C} \u{1F44F} \u{1F91D} \u{1F44D} \u{1F44E} \u{1F44A} \u270A \u{1F91B} \u{1F91C} \u{1F91E} \u270C\uFE0F \u{1F918} \u{1F44C} \u{1F448} \u{1F449} \u{1F446} \u{1F447} \u261D\uFE0F \u270B \u{1F91A} \u{1F590} \u{1F596} \u{1F44B} \u{1F919} \u{1F4AA} \u{1F595} \u270D\uFE0F \u{1F64F}".split(/\s/)
          }],
          lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
          undoLimit: 20,
          indentation: "2em",
          showMenuTooltips: !0,
          menuTooltipPosition: "up"
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        function i(c, g, d) {
          window.alert(c), d && console.error("wangEditor: " + d);
        }
        n.default = {
          onchangeTimeout: 200,
          onchange: null,
          onfocus: r.EMPTY_FN,
          onblur: r.EMPTY_FN,
          onCatalogChange: null,
          customAlert: i
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          pasteFilterStyle: !0,
          pasteIgnoreImg: !1,
          pasteTextHandle: function(i) {
            return i;
          }
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          styleWithCSS: !1
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        n.default = {
          linkImgCheck: function(c, g, d) {
            return !0;
          },
          showLinkImg: !0,
          showLinkImgAlt: !0,
          showLinkImgHref: !0,
          linkImgCallback: r.EMPTY_FN,
          uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
          uploadImgServer: "",
          uploadImgShowBase64: !1,
          uploadImgMaxSize: 5 * 1024 * 1024,
          uploadImgMaxLength: 100,
          uploadFileName: "",
          uploadImgParams: {},
          uploadImgParamsWithUrl: !1,
          uploadImgHeaders: {},
          uploadImgHooks: {},
          uploadImgTimeout: 10 * 1e3,
          withCredentials: !1,
          customUploadImg: null,
          uploadImgFromMedia: null
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          lang: "zh-CN",
          languages: {
            "zh-CN": {
              wangEditor: {
                \u91CD\u7F6E: "\u91CD\u7F6E",
                \u63D2\u5165: "\u63D2\u5165",
                \u9ED8\u8BA4: "\u9ED8\u8BA4",
                \u521B\u5EFA: "\u521B\u5EFA",
                \u4FEE\u6539: "\u4FEE\u6539",
                \u5982: "\u5982",
                \u8BF7\u8F93\u5165\u6B63\u6587: "\u8BF7\u8F93\u5165\u6B63\u6587",
                menus: {
                  title: {
                    \u6807\u9898: "\u6807\u9898",
                    \u52A0\u7C97: "\u52A0\u7C97",
                    \u5B57\u53F7: "\u5B57\u53F7",
                    \u5B57\u4F53: "\u5B57\u4F53",
                    \u659C\u4F53: "\u659C\u4F53",
                    \u4E0B\u5212\u7EBF: "\u4E0B\u5212\u7EBF",
                    \u5220\u9664\u7EBF: "\u5220\u9664\u7EBF",
                    \u7F29\u8FDB: "\u7F29\u8FDB",
                    \u884C\u9AD8: "\u884C\u9AD8",
                    \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272",
                    \u80CC\u666F\u8272: "\u80CC\u666F\u8272",
                    \u94FE\u63A5: "\u94FE\u63A5",
                    \u5E8F\u5217: "\u5E8F\u5217",
                    \u5BF9\u9F50: "\u5BF9\u9F50",
                    \u5F15\u7528: "\u5F15\u7528",
                    \u8868\u60C5: "\u8868\u60C5",
                    \u56FE\u7247: "\u56FE\u7247",
                    \u89C6\u9891: "\u89C6\u9891",
                    \u8868\u683C: "\u8868\u683C",
                    \u4EE3\u7801: "\u4EE3\u7801",
                    \u5206\u5272\u7EBF: "\u5206\u5272\u7EBF",
                    \u6062\u590D: "\u6062\u590D",
                    \u64A4\u9500: "\u64A4\u9500",
                    \u5168\u5C4F: "\u5168\u5C4F",
                    \u53D6\u6D88\u5168\u5C4F: "\u53D6\u6D88\u5168\u5C4F",
                    \u5F85\u529E\u4E8B\u9879: "\u5F85\u529E\u4E8B\u9879"
                  },
                  dropListMenu: {
                    \u8BBE\u7F6E\u6807\u9898: "\u8BBE\u7F6E\u6807\u9898",
                    \u80CC\u666F\u989C\u8272: "\u80CC\u666F\u989C\u8272",
                    \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272",
                    \u8BBE\u7F6E\u5B57\u53F7: "\u8BBE\u7F6E\u5B57\u53F7",
                    \u8BBE\u7F6E\u5B57\u4F53: "\u8BBE\u7F6E\u5B57\u4F53",
                    \u8BBE\u7F6E\u7F29\u8FDB: "\u8BBE\u7F6E\u7F29\u8FDB",
                    \u5BF9\u9F50\u65B9\u5F0F: "\u5BF9\u9F50\u65B9\u5F0F",
                    \u8BBE\u7F6E\u884C\u9AD8: "\u8BBE\u7F6E\u884C\u9AD8",
                    \u5E8F\u5217: "\u5E8F\u5217",
                    head: {
                      \u6B63\u6587: "\u6B63\u6587"
                    },
                    indent: {
                      \u589E\u52A0\u7F29\u8FDB: "\u589E\u52A0\u7F29\u8FDB",
                      \u51CF\u5C11\u7F29\u8FDB: "\u51CF\u5C11\u7F29\u8FDB"
                    },
                    justify: {
                      \u9760\u5DE6: "\u9760\u5DE6",
                      \u5C45\u4E2D: "\u5C45\u4E2D",
                      \u9760\u53F3: "\u9760\u53F3",
                      \u4E24\u7AEF: "\u4E24\u7AEF"
                    },
                    list: {
                      \u65E0\u5E8F\u5217\u8868: "\u65E0\u5E8F\u5217\u8868",
                      \u6709\u5E8F\u5217\u8868: "\u6709\u5E8F\u5217\u8868"
                    }
                  },
                  panelMenus: {
                    emoticon: {
                      \u9ED8\u8BA4: "\u9ED8\u8BA4",
                      \u65B0\u6D6A: "\u65B0\u6D6A",
                      emoji: "emoji",
                      \u624B\u52BF: "\u624B\u52BF"
                    },
                    image: {
                      \u4E0A\u4F20\u56FE\u7247: "\u4E0A\u4F20\u56FE\u7247",
                      \u7F51\u7EDC\u56FE\u7247: "\u7F51\u7EDC\u56FE\u7247",
                      \u56FE\u7247\u5730\u5740: "\u56FE\u7247\u5730\u5740",
                      \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "\u56FE\u7247\u6587\u5B57\u8BF4\u660E",
                      \u8DF3\u8F6C\u94FE\u63A5: "\u8DF3\u8F6C\u94FE\u63A5"
                    },
                    link: {
                      \u94FE\u63A5: "\u94FE\u63A5",
                      \u94FE\u63A5\u6587\u5B57: "\u94FE\u63A5\u6587\u5B57",
                      \u53D6\u6D88\u94FE\u63A5: "\u53D6\u6D88\u94FE\u63A5",
                      \u67E5\u770B\u94FE\u63A5: "\u67E5\u770B\u94FE\u63A5"
                    },
                    video: {
                      \u63D2\u5165\u89C6\u9891: "\u63D2\u5165\u89C6\u9891",
                      \u4E0A\u4F20\u89C6\u9891: "\u4E0A\u4F20\u89C6\u9891"
                    },
                    table: {
                      \u884C: "\u884C",
                      \u5217: "\u5217",
                      \u7684: "\u7684",
                      \u8868\u683C: "\u8868\u683C",
                      \u6DFB\u52A0\u884C: "\u6DFB\u52A0\u884C",
                      \u5220\u9664\u884C: "\u5220\u9664\u884C",
                      \u6DFB\u52A0\u5217: "\u6DFB\u52A0\u5217",
                      \u5220\u9664\u5217: "\u5220\u9664\u5217",
                      \u8BBE\u7F6E\u8868\u5934: "\u8BBE\u7F6E\u8868\u5934",
                      \u53D6\u6D88\u8868\u5934: "\u53D6\u6D88\u8868\u5934",
                      \u63D2\u5165\u8868\u683C: "\u63D2\u5165\u8868\u683C",
                      \u5220\u9664\u8868\u683C: "\u5220\u9664\u8868\u683C"
                    },
                    code: {
                      \u5220\u9664\u4EE3\u7801: "\u5220\u9664\u4EE3\u7801",
                      \u4FEE\u6539\u4EE3\u7801: "\u4FEE\u6539\u4EE3\u7801",
                      \u63D2\u5165\u4EE3\u7801: "\u63D2\u5165\u4EE3\u7801"
                    }
                  }
                },
                validate: {
                  \u5F20\u56FE\u7247: "\u5F20\u56FE\u7247",
                  \u5927\u4E8E: "\u5927\u4E8E",
                  \u56FE\u7247\u94FE\u63A5: "\u56FE\u7247\u94FE\u63A5",
                  \u4E0D\u662F\u56FE\u7247: "\u4E0D\u662F\u56FE\u7247",
                  \u8FD4\u56DE\u7ED3\u679C: "\u8FD4\u56DE\u7ED3\u679C",
                  \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6",
                  \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF",
                  \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25",
                  \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "\u63D2\u5165\u56FE\u7247\u9519\u8BEF",
                  \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "\u4E00\u6B21\u6700\u591A\u4E0A\u4F20",
                  \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25",
                  \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7",
                  \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001",
                  \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF",
                  \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "\u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B",
                  \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "\u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B",
                  \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "\u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C",
                  \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "\u63D2\u5165\u89C6\u9891\u9519\u8BEF",
                  \u89C6\u9891\u94FE\u63A5: "\u89C6\u9891\u94FE\u63A5",
                  \u4E0D\u662F\u89C6\u9891: "\u4E0D\u662F\u89C6\u9891",
                  \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7",
                  \u4E2A\u89C6\u9891: "\u4E2A\u89C6\u9891",
                  \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6",
                  \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF",
                  \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "\u4E0A\u4F20\u89C6\u9891\u5931\u8D25",
                  \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF"
                }
              }
            },
            en: {
              wangEditor: {
                \u91CD\u7F6E: "reset",
                \u63D2\u5165: "insert",
                \u9ED8\u8BA4: "default",
                \u521B\u5EFA: "create",
                \u4FEE\u6539: "edit",
                \u5982: "like",
                \u8BF7\u8F93\u5165\u6B63\u6587: "please enter the text",
                menus: {
                  title: {
                    \u6807\u9898: "head",
                    \u52A0\u7C97: "bold",
                    \u5B57\u53F7: "font size",
                    \u5B57\u4F53: "font family",
                    \u659C\u4F53: "italic",
                    \u4E0B\u5212\u7EBF: "underline",
                    \u5220\u9664\u7EBF: "strikethrough",
                    \u7F29\u8FDB: "indent",
                    \u884C\u9AD8: "line heihgt",
                    \u6587\u5B57\u989C\u8272: "font color",
                    \u80CC\u666F\u8272: "background",
                    \u94FE\u63A5: "link",
                    \u5E8F\u5217: "numbered list",
                    \u5BF9\u9F50: "align",
                    \u5F15\u7528: "quote",
                    \u8868\u60C5: "emoticons",
                    \u56FE\u7247: "image",
                    \u89C6\u9891: "media",
                    \u8868\u683C: "table",
                    \u4EE3\u7801: "code",
                    \u5206\u5272\u7EBF: "split line",
                    \u6062\u590D: "redo",
                    \u64A4\u9500: "undo",
                    \u5168\u5C4F: "fullscreen",
                    \u53D6\u6D88\u5168\u5C4F: "cancel fullscreen",
                    \u5F85\u529E\u4E8B\u9879: "todo"
                  },
                  dropListMenu: {
                    \u8BBE\u7F6E\u6807\u9898: "title",
                    \u80CC\u666F\u989C\u8272: "background",
                    \u6587\u5B57\u989C\u8272: "font color",
                    \u8BBE\u7F6E\u5B57\u53F7: "font size",
                    \u8BBE\u7F6E\u5B57\u4F53: "font family",
                    \u8BBE\u7F6E\u7F29\u8FDB: "indent",
                    \u5BF9\u9F50\u65B9\u5F0F: "align",
                    \u8BBE\u7F6E\u884C\u9AD8: "line heihgt",
                    \u5E8F\u5217: "list",
                    head: {
                      \u6B63\u6587: "text"
                    },
                    indent: {
                      \u589E\u52A0\u7F29\u8FDB: "indent",
                      \u51CF\u5C11\u7F29\u8FDB: "outdent"
                    },
                    justify: {
                      \u9760\u5DE6: "left",
                      \u5C45\u4E2D: "center",
                      \u9760\u53F3: "right",
                      \u4E24\u7AEF: "justify"
                    },
                    list: {
                      \u65E0\u5E8F\u5217\u8868: "unordered",
                      \u6709\u5E8F\u5217\u8868: "ordered"
                    }
                  },
                  panelMenus: {
                    emoticon: {
                      \u8868\u60C5: "emoji",
                      \u624B\u52BF: "gesture"
                    },
                    image: {
                      \u4E0A\u4F20\u56FE\u7247: "upload image",
                      \u7F51\u7EDC\u56FE\u7247: "network image",
                      \u56FE\u7247\u5730\u5740: "image link",
                      \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "image alt",
                      \u8DF3\u8F6C\u94FE\u63A5: "hyperlink"
                    },
                    link: {
                      \u94FE\u63A5: "link",
                      \u94FE\u63A5\u6587\u5B57: "link text",
                      \u53D6\u6D88\u94FE\u63A5: "unlink",
                      \u67E5\u770B\u94FE\u63A5: "view links"
                    },
                    video: {
                      \u63D2\u5165\u89C6\u9891: "insert video",
                      \u4E0A\u4F20\u89C6\u9891: "upload local video"
                    },
                    table: {
                      \u884C: "rows",
                      \u5217: "columns",
                      \u7684: " ",
                      \u8868\u683C: "table",
                      \u6DFB\u52A0\u884C: "insert row",
                      \u5220\u9664\u884C: "delete row",
                      \u6DFB\u52A0\u5217: "insert column",
                      \u5220\u9664\u5217: "delete column",
                      \u8BBE\u7F6E\u8868\u5934: "set header",
                      \u53D6\u6D88\u8868\u5934: "cancel header",
                      \u63D2\u5165\u8868\u683C: "insert table",
                      \u5220\u9664\u8868\u683C: "delete table"
                    },
                    code: {
                      \u5220\u9664\u4EE3\u7801: "delete code",
                      \u4FEE\u6539\u4EE3\u7801: "edit code",
                      \u63D2\u5165\u4EE3\u7801: "insert code"
                    }
                  }
                },
                validate: {
                  \u5F20\u56FE\u7247: "images",
                  \u5927\u4E8E: "greater than",
                  \u56FE\u7247\u94FE\u63A5: "image link",
                  \u4E0D\u662F\u56FE\u7247: "is not image",
                  \u8FD4\u56DE\u7ED3\u679C: "return results",
                  \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "upload image timeout",
                  \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "upload image error",
                  \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "upload image failed",
                  \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "insert image error",
                  \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "once most at upload",
                  \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "download link failed",
                  \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "image validate failed",
                  \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "server return status",
                  \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload image return results error",
                  \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "please replace with a supported image type",
                  \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "the network picture you inserted is not recognized",
                  \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "the image link you just inserted did not pass the editor verification",
                  \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "insert video error",
                  \u89C6\u9891\u94FE\u63A5: "video link",
                  \u4E0D\u662F\u89C6\u9891: "is not video",
                  \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "video validate failed",
                  \u4E2A\u89C6\u9891: "videos",
                  \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "upload video timeout",
                  \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "upload video error",
                  \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "upload video failed",
                  \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload video return results error"
                }
              }
            }
          }
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(6);
        function i() {
          return !!(r.UA.isIE() || r.UA.isOldEdge);
        }
        n.default = {
          compatibleMode: i,
          historyMaxSize: 30
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        n.default = {
          onlineVideoCheck: function(c) {
            return !0;
          },
          onlineVideoCallback: r.EMPTY_FN,
          showLinkVideo: !0,
          uploadVideoAccept: ["mp4"],
          uploadVideoServer: "",
          uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
          uploadVideoName: "",
          uploadVideoParams: {},
          uploadVideoParamsWithUrl: !1,
          uploadVideoHeaders: {},
          uploadVideoHooks: {},
          uploadVideoTimeout: 1e3 * 60 * 60 * 2,
          withVideoCredentials: !1,
          customUploadVideo: null,
          customInsertVideo: null
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(6), d = t(7), m = function() {
          function f(l) {
            this._currentRange = null, this.editor = l;
          }
          return f.prototype.getRange = function() {
            return this._currentRange;
          }, f.prototype.saveRange = function(l) {
            if (l) {
              this._currentRange = l;
              return;
            }
            var u = window.getSelection();
            if (u.rangeCount !== 0) {
              var s = u.getRangeAt(0), p = this.getSelectionContainerElem(s);
              if (!!(p != null && p.length) && !(p.attr("contenteditable") === "false" || p.parentUntil("[contenteditable=false]"))) {
                var v = this.editor, h = v.$textElem;
                if (h.isContain(p)) {
                  if (h.elems[0] === p.elems[0]) {
                    var y;
                    if ((0, r.default)(y = h.html()).call(y) === d.EMPTY_P) {
                      var A = h.children(), x = A == null ? void 0 : A.last();
                      v.selection.createRangeByElem(x, !0, !0), v.selection.restoreSelection();
                    }
                  }
                  this._currentRange = s;
                }
              }
            }
          }, f.prototype.collapseRange = function(l) {
            l === void 0 && (l = !1);
            var u = this._currentRange;
            u && u.collapse(l);
          }, f.prototype.getSelectionText = function() {
            var l = this._currentRange;
            return l ? l.toString() : "";
          }, f.prototype.getSelectionContainerElem = function(l) {
            var u;
            u = l || this._currentRange;
            var s;
            if (u)
              return s = u.commonAncestorContainer, c.default(s.nodeType === 1 ? s : s.parentNode);
          }, f.prototype.getSelectionStartElem = function(l) {
            var u;
            u = l || this._currentRange;
            var s;
            if (u)
              return s = u.startContainer, c.default(s.nodeType === 1 ? s : s.parentNode);
          }, f.prototype.getSelectionEndElem = function(l) {
            var u;
            u = l || this._currentRange;
            var s;
            if (u)
              return s = u.endContainer, c.default(s.nodeType === 1 ? s : s.parentNode);
          }, f.prototype.isSelectionEmpty = function() {
            var l = this._currentRange;
            return !!(l && l.startContainer && l.startContainer === l.endContainer && l.startOffset === l.endOffset);
          }, f.prototype.restoreSelection = function() {
            var l = window.getSelection(), u = this._currentRange;
            l && u && (l.removeAllRanges(), l.addRange(u));
          }, f.prototype.createEmptyRange = function() {
            var l = this.editor, u = this.getRange(), s;
            if (!!u && !!this.isSelectionEmpty())
              try {
                g.UA.isWebkit() ? (l.cmd.do("insertHTML", "&#8203;"), u.setEnd(u.endContainer, u.endOffset + 1), this.saveRange(u)) : (s = c.default("<strong>&#8203;</strong>"), l.cmd.do("insertElem", s), this.createRangeByElem(s, !0));
              } catch {
              }
          }, f.prototype.createRangeByElems = function(l, u) {
            var s = window.getSelection ? window.getSelection() : document.getSelection();
            s == null || s.removeAllRanges();
            var p = document.createRange();
            p.setStart(l, 0), p.setEnd(u, u.childNodes.length || 1), this.saveRange(p), this.restoreSelection();
          }, f.prototype.createRangeByElem = function(l, u, s) {
            if (!!l.length) {
              var p = l.elems[0], v = document.createRange();
              s ? v.selectNodeContents(p) : v.selectNode(p), u != null && (v.collapse(u), u || (this.saveRange(v), this.editor.selection.moveCursor(p))), this.saveRange(v);
            }
          }, f.prototype.getSelectionRangeTopNodes = function() {
            var l, u, s, p = (l = this.getSelectionStartElem()) === null || l === void 0 ? void 0 : l.getNodeTop(this.editor), v = (u = this.getSelectionEndElem()) === null || u === void 0 ? void 0 : u.getNodeTop(this.editor);
            return s = this.recordSelectionNodes(c.default(p), c.default(v)), s;
          }, f.prototype.moveCursor = function(l, u) {
            var s, p = this.getRange(), v = l.nodeType === 3 ? (s = l.nodeValue) === null || s === void 0 ? void 0 : s.length : l.childNodes.length;
            (g.UA.isFirefox || g.UA.isIE()) && v !== 0 && (l.nodeType === 3 || l.childNodes[v - 1].nodeName === "BR") && (v = v - 1);
            var h = u != null ? u : v;
            !p || l && (p.setStart(l, h), p.setEnd(l, h), this.restoreSelection());
          }, f.prototype.getCursorPos = function() {
            var l = window.getSelection();
            return l == null ? void 0 : l.anchorOffset;
          }, f.prototype.clearWindowSelectionRange = function() {
            var l = window.getSelection();
            l && l.removeAllRanges();
          }, f.prototype.recordSelectionNodes = function(l, u) {
            var s = [], p = !0;
            try {
              for (var v = l, h = this.editor.$textElem; p; ) {
                var y = v == null ? void 0 : v.getNodeTop(this.editor);
                y.getNodeName() === "BODY" && (p = !1), y.length > 0 && (s.push(c.default(v)), (u == null ? void 0 : u.equal(y)) || h.equal(y) ? p = !1 : v = y.getNextSibling());
              }
            } catch {
              p = !1;
            }
            return s;
          }, f.prototype.setRangeToElem = function(l) {
            var u = this.getRange();
            u == null || u.setStart(l, 0), u == null || u.setEnd(l, 0);
          }, f;
        }();
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = function() {
          function g(d) {
            this.editor = d;
          }
          return g.prototype.do = function(d, m) {
            var f = this.editor;
            f.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
            var l = f.selection;
            if (!!l.getRange()) {
              switch (l.restoreSelection(), d) {
                case "insertHTML":
                  this.insertHTML(m);
                  break;
                case "insertElem":
                  this.insertElem(m);
                  break;
                default:
                  this.execCommand(d, m);
                  break;
              }
              f.menus.changeActive(), l.saveRange(), l.restoreSelection();
            }
          }, g.prototype.insertHTML = function(d) {
            var m = this.editor, f = m.selection.getRange();
            if (f != null) {
              if (this.queryCommandSupported("insertHTML"))
                this.execCommand("insertHTML", d);
              else if (f.insertNode) {
                if (f.deleteContents(), i.default(d).elems.length > 0)
                  f.insertNode(i.default(d).elems[0]);
                else {
                  var l = document.createElement("p");
                  l.appendChild(document.createTextNode(d)), f.insertNode(l);
                }
                m.selection.collapseRange();
              }
            }
          }, g.prototype.insertElem = function(d) {
            var m = this.editor, f = m.selection.getRange();
            f != null && f.insertNode && (f.deleteContents(), f.insertNode(d.elems[0]));
          }, g.prototype.execCommand = function(d, m) {
            document.execCommand(d, !1, m);
          }, g.prototype.queryCommandValue = function(d) {
            return document.queryCommandValue(d);
          }, g.prototype.queryCommandState = function(d) {
            return document.queryCommandState(d);
          }, g.prototype.queryCommandSupported = function(d) {
            return document.queryCommandSupported(d);
          }, g;
        }();
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29)), i = e(t(4)), c = e(t(17)), g = e(t(27)), d = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var m = t(2), f = m.__importDefault(t(3)), l = m.__importDefault(t(287)), u = t(6), s = m.__importDefault(t(299)), p = m.__importDefault(t(300)), v = t(7), h = function() {
          function y(A) {
            this.editor = A, this.eventHooks = {
              onBlurEvents: [],
              changeEvents: [],
              dropEvents: [],
              clickEvents: [],
              keydownEvents: [],
              keyupEvents: [],
              tabUpEvents: [],
              tabDownEvents: [],
              enterUpEvents: [],
              enterDownEvents: [],
              deleteUpEvents: [],
              deleteDownEvents: [],
              pasteEvents: [],
              linkClickEvents: [],
              codeClickEvents: [],
              textScrollEvents: [],
              toolbarClickEvents: [],
              imgClickEvents: [],
              imgDragBarMouseDownEvents: [],
              tableClickEvents: [],
              menuClickEvents: [],
              dropListMenuHoverEvents: [],
              splitLineEvents: [],
              videoClickEvents: []
            };
          }
          return y.prototype.init = function() {
            this._saveRange(), this._bindEventHooks(), l.default(this);
          }, y.prototype.togglePlaceholder = function() {
            var A, x = this.html(), S = (0, r.default)(A = this.editor.$textContainerElem).call(A, ".placeholder");
            S.hide(), !this.editor.isComposing && (!x || x === " ") && S.show();
          }, y.prototype.clear = function() {
            this.html(v.EMPTY_P);
          }, y.prototype.html = function(A) {
            var x = this.editor, S = x.$textElem;
            if (A == null) {
              var D = S.html();
              D = D.replace(/\u200b/gm, ""), D = D.replace(/<p><\/p>/gim, ""), D = D.replace(v.EMPTY_P_LAST_REGEX, ""), D = D.replace(v.EMPTY_P_REGEX, "<p>");
              var I = D.match(/<(img|br|hr|input)[^>]*>/gi);
              return I !== null && (0, i.default)(I).call(I, function(C) {
                C.match(/\/>/) || (D = D.replace(C, C.substring(0, C.length - 1) + "/>"));
              }), D;
            }
            A = (0, c.default)(A).call(A), A === "" && (A = v.EMPTY_P), (0, g.default)(A).call(A, "<") !== 0 && (A = "<p>" + A + "</p>"), S.html(A), x.initSelection();
          }, y.prototype.setJSON = function(A) {
            var x = p.default(A).children(), S = this.editor, D = S.$textElem;
            !x || D.replaceChildAll(x);
          }, y.prototype.getJSON = function() {
            var A = this.editor, x = A.$textElem;
            return s.default(x);
          }, y.prototype.text = function(A) {
            var x = this.editor, S = x.$textElem;
            if (A == null) {
              var D = S.text();
              return D = D.replace(/\u200b/gm, ""), D;
            }
            S.text("<p>" + A + "</p>"), x.initSelection();
          }, y.prototype.append = function(A) {
            var x = this.editor;
            (0, g.default)(A).call(A, "<") !== 0 && (A = "<p>" + A + "</p>"), this.html(this.html() + A), x.initSelection();
          }, y.prototype._saveRange = function() {
            var A = this.editor, x = A.$textElem, S = f.default(document);
            function D() {
              A.selection.saveRange(), A.menus.changeActive();
            }
            x.on("keyup", D);
            function I() {
              D(), x.off("click", I);
            }
            x.on("click", I);
            function C() {
              D(), S.off("mouseup", C);
            }
            function E() {
              S.on("mouseup", C), x.off("mouseleave", E);
            }
            x.on("mousedown", function() {
              x.on("mouseleave", E);
            }), x.on("mouseup", function(T) {
              x.off("mouseleave", E), (0, d.default)(function() {
                var R = A.selection, N = R.getRange();
                N !== null && D();
              }, 0);
            });
          }, y.prototype._bindEventHooks = function() {
            var A = this.editor, x = A.$textElem, S = this.eventHooks;
            x.on("click", function(I) {
              var C = S.clickEvents;
              (0, i.default)(C).call(C, function(E) {
                return E(I);
              });
            }), x.on("keyup", function(I) {
              if (I.keyCode === 13) {
                var C = S.enterUpEvents;
                (0, i.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("keyup", function(I) {
              var C = S.keyupEvents;
              (0, i.default)(C).call(C, function(E) {
                return E(I);
              });
            }), x.on("keydown", function(I) {
              var C = S.keydownEvents;
              (0, i.default)(C).call(C, function(E) {
                return E(I);
              });
            }), x.on("keyup", function(I) {
              if (!(I.keyCode !== 8 && I.keyCode !== 46)) {
                var C = S.deleteUpEvents;
                (0, i.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("keydown", function(I) {
              if (!(I.keyCode !== 8 && I.keyCode !== 46)) {
                var C = S.deleteDownEvents;
                (0, i.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("paste", function(I) {
              if (!u.UA.isIE()) {
                I.preventDefault();
                var C = S.pasteEvents;
                (0, i.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("keydown", function(I) {
              (A.isFocus || A.isCompatibleMode) && (I.ctrlKey || I.metaKey) && I.keyCode === 90 && (I.preventDefault(), I.shiftKey ? A.history.restore() : A.history.revoke());
            }), x.on("keyup", function(I) {
              if (I.keyCode === 9) {
                I.preventDefault();
                var C = S.tabUpEvents;
                (0, i.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("keydown", function(I) {
              if (I.keyCode === 9) {
                I.preventDefault();
                var C = S.tabDownEvents;
                (0, i.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on(
              "scroll",
              u.throttle(function(I) {
                var C = S.textScrollEvents;
                (0, i.default)(C).call(C, function(E) {
                  return E(I);
                });
              }, 100)
            );
            function D(I) {
              I.preventDefault();
            }
            f.default(document).on("dragleave", D).on("drop", D).on("dragenter", D).on("dragover", D), A.beforeDestroy(function() {
              f.default(document).off("dragleave", D).off("drop", D).off("dragenter", D).off("dragover", D);
            }), x.on("drop", function(I) {
              I.preventDefault();
              var C = S.dropEvents;
              (0, i.default)(C).call(C, function(E) {
                return E(I);
              });
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = f.default(E);
              if (T.getNodeName() === "A")
                C = T;
              else {
                var R = T.parentUntil("a");
                R != null && (C = R);
              }
              if (!!C) {
                var N = S.linkClickEvents;
                (0, i.default)(N).call(N, function(M) {
                  return M(C);
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = f.default(E);
              if (T.getNodeName() === "IMG" && !T.elems[0].getAttribute("data-emoji") && (I.stopPropagation(), C = T), !!C) {
                var R = S.imgClickEvents;
                (0, i.default)(R).call(R, function(N) {
                  return N(C);
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = f.default(E);
              if (T.getNodeName() === "PRE")
                C = T;
              else {
                var R = T.parentUntil("pre");
                R !== null && (C = R);
              }
              if (!!C) {
                var N = S.codeClickEvents;
                (0, i.default)(N).call(N, function(M) {
                  return M(C);
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = f.default(E);
              if (T.getNodeName() === "HR" && (C = T), !!C) {
                A.selection.createRangeByElem(C), A.selection.restoreSelection();
                var R = S.splitLineEvents;
                (0, i.default)(R).call(R, function(N) {
                  return N(C);
                });
              }
            }), A.$toolbarElem.on("click", function(I) {
              var C = S.toolbarClickEvents;
              (0, i.default)(C).call(C, function(E) {
                return E(I);
              });
            }), A.$textContainerElem.on("mousedown", function(I) {
              var C = I.target, E = f.default(C);
              if (E.hasClass("w-e-img-drag-rb")) {
                var T = S.imgDragBarMouseDownEvents;
                (0, i.default)(T).call(T, function(R) {
                  return R();
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target;
              if (C = f.default(E).parentUntilEditor("TABLE", A, E), !!C) {
                var T = S.tableClickEvents;
                (0, i.default)(T).call(T, function(R) {
                  return R(C, I);
                });
              }
            }), x.on("keydown", function(I) {
              if (I.keyCode === 13) {
                var C = S.enterDownEvents;
                (0, i.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = f.default(E);
              if (T.getNodeName() === "VIDEO" && (I.stopPropagation(), C = T), !!C) {
                var R = S.videoClickEvents;
                (0, i.default)(R).call(R, function(N) {
                  return N(C);
                });
              }
            });
          }, y;
        }();
        n.default = h;
      },
      function(o, n, t) {
        var e = t(284);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(285), a = Array.prototype;
        o.exports = function(r) {
          var i = r.find;
          return r === a || r instanceof Array && i === a.find ? e : i;
        };
      },
      function(o, n, t) {
        t(286);
        var e = t(15);
        o.exports = e("Array").find;
      },
      function(o, n, t) {
        var e = t(5), a = t(32).find, r = t(82), i = t(22), c = "find", g = !0, d = i(c);
        c in [] && Array(1)[c](function() {
          g = !1;
        }), e({ target: "Array", proto: !0, forced: g || !d }, {
          find: function(f) {
            return a(this, f, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), r(c);
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(288)), c = r.__importStar(t(289)), g = r.__importDefault(t(290)), d = r.__importDefault(t(291)), m = r.__importDefault(t(298));
        function f(l) {
          var u = l.editor, s = l.eventHooks;
          i.default(u, s.enterUpEvents, s.enterDownEvents), c.default(u, s.deleteUpEvents, s.deleteDownEvents), c.cutToKeepP(u, s.keyupEvents), g.default(u, s.tabDownEvents), d.default(u, s.pasteEvents), m.default(u, s.imgClickEvents);
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = t(7), g = i.__importDefault(t(3));
        function d(m, f, l) {
          function u(v) {
            var h, y = g.default(c.EMPTY_P);
            if (y.insertBefore(v), (0, r.default)(h = v.html()).call(h, "<img") >= 0) {
              y.remove();
              return;
            }
            m.selection.createRangeByElem(y, !0, !0), m.selection.restoreSelection(), v.remove();
          }
          function s() {
            var v = m.$textElem, h = m.selection.getSelectionContainerElem(), y = h.parent();
            if (y.html() === "<code><br></code>") {
              u(y);
              return;
            }
            if (h.getNodeName() === "FONT" && h.text() === "" && h.attr("face") === "monospace") {
              u(y);
              return;
            }
            if (!!y.equal(v)) {
              var A = h.getNodeName();
              A === "P" && h.attr("data-we-empty-p") === null || h.text() || u(h);
            }
          }
          f.push(s);
          function p(v) {
            var h;
            m.selection.saveRange((h = getSelection()) === null || h === void 0 ? void 0 : h.getRangeAt(0));
            var y = m.selection.getSelectionContainerElem();
            y.id === m.textElemId && (v.preventDefault(), m.cmd.do("insertHTML", "<p><br></p>"));
          }
          l.push(p);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17)), i = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.cutToKeepP = void 0;
        var c = t(2), g = t(7), d = c.__importDefault(t(3));
        function m(l, u, s) {
          function p() {
            var h = l.$textElem, y = l.$textElem.html(), A = l.$textElem.text(), x = (0, r.default)(y).call(y), S = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', g.EMPTY_P];
            if (/^\s*$/.test(A) && (!x || (0, i.default)(S).call(S, x))) {
              h.html(g.EMPTY_P);
              var D = h.getNode();
              l.selection.createRangeByElems(D.childNodes[0], D.childNodes[0]);
              var I = l.selection.getSelectionContainerElem();
              l.selection.restoreSelection(), l.selection.moveCursor(I.getNode(), 0);
            }
          }
          u.push(p);
          function v(h) {
            var y, A = l.$textElem, x = (0, r.default)(y = A.html().toLowerCase()).call(y);
            if (x === g.EMPTY_P) {
              h.preventDefault();
              return;
            }
          }
          s.push(v);
        }
        function f(l, u) {
          function s(p) {
            var v;
            if (p.keyCode === 88) {
              var h = l.$textElem, y = (0, r.default)(v = h.html().toLowerCase()).call(v);
              if (!y || y === "<br>") {
                var A = d.default(g.EMPTY_P);
                h.html(" "), h.append(A), l.selection.createRangeByElem(A, !1, !0), l.selection.restoreSelection(), l.selection.moveCursor(A.getNode(), 0);
              }
            }
          }
          u.push(s);
        }
        n.cutToKeepP = f, n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(i, c) {
          function g() {
            if (!!i.cmd.queryCommandSupported("insertHTML")) {
              var d = i.selection.getSelectionContainerElem();
              if (!!d) {
                var m = d.parent(), f = d.getNodeName(), l = m.getNodeName();
                f == "CODE" || l === "CODE" || l === "PRE" || /hljs/.test(l) ? i.cmd.do("insertHTML", i.config.languageTab) : i.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
              }
            }
          }
          c.push(g);
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17)), i = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(131), g = t(6), d = t(7);
        function m(p) {
          var v, h = (0, r.default)(v = p.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(v), y = document.createElement("div");
          return y.innerHTML = h, y.innerHTML.replace(/<p><\/p>/gim, "");
        }
        function f(p) {
          var v = p.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
          return v;
        }
        function l(p) {
          var v;
          if (p === "")
            return !1;
          var h = document.createElement("div");
          return h.innerHTML = p, ((v = h.firstChild) === null || v === void 0 ? void 0 : v.nodeName) === "P";
        }
        function u(p) {
          if (!(p != null && p.length))
            return !1;
          var v = p.elems[0];
          return v.nodeName === "P" && v.innerHTML === "<br>";
        }
        function s(p, v) {
          function h(y) {
            var A = p.config, x = A.pasteFilterStyle, S = A.pasteIgnoreImg, D = A.pasteTextHandle, I = c.getPasteHtml(y, x, S), C = c.getPasteText(y);
            C = C.replace(/\n/gm, "<br>");
            var E = p.selection.getSelectionContainerElem();
            if (!!E) {
              var T = E == null ? void 0 : E.getNodeName(), R = E == null ? void 0 : E.getNodeTop(p), N = "";
              if (R.elems[0] && (N = R == null ? void 0 : R.getNodeName()), T === "CODE" || N === "PRE") {
                D && g.isFunction(D) && (C = "" + (D(C) || "")), p.cmd.do("insertHTML", f(C));
                return;
              }
              if (d.urlRegex.test(C) && x) {
                D && g.isFunction(D) && (C = "" + (D(C) || ""));
                var M = C.replace(d.urlRegex, function(G) {
                  return '<a href="' + G + '" target="_blank">' + G + "</a>";
                }), B = p.selection.getRange(), F = document.createElement("div"), O = document.createDocumentFragment();
                if (F.innerHTML = M, B == null)
                  return;
                for (; F.childNodes.length; )
                  O.append(F.childNodes[0]);
                var b = O.querySelectorAll("a");
                (0, i.default)(b).call(b, function(G) {
                  G.innerText = G.href;
                }), B.insertNode && (B.deleteContents(), B.insertNode(O)), p.selection.clearWindowSelectionRange();
                return;
              }
              if (!!I)
                try {
                  D && g.isFunction(D) && (I = "" + (D(I) || ""));
                  var $ = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(I);
                  if ($ && x)
                    p.cmd.do("insertHTML", "" + m(C));
                  else {
                    var H = m(I);
                    if (l(H)) {
                      var j = p.$textElem;
                      if (p.cmd.do("insertHTML", H), j.equal(E)) {
                        p.selection.createEmptyRange();
                        return;
                      }
                      u(R) && R.remove();
                    } else
                      p.cmd.do("insertHTML", H);
                  }
                } catch {
                  D && g.isFunction(D) && (C = "" + (D(C) || "")), p.cmd.do("insertHTML", "" + m(C));
                }
            }
          }
          v.push(h);
        }
        n.default = s;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17)), i = e(t(4)), c = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(293), m = g.__importDefault(t(297));
        function f(v) {
          var h = /<span>.*?<\/span>/gi, y = /<span>(.*?)<\/span>/;
          return v.replace(h, function(A) {
            var x = A.match(y);
            return x == null ? "" : x[1];
          });
        }
        function l(v, h) {
          var y;
          return v = (0, r.default)(y = v.toLowerCase()).call(y), !!(d.IGNORE_TAGS.has(v) || h && v === "img");
        }
        function u(v, h) {
          var y = "";
          y = "<" + v;
          var A = [];
          (0, i.default)(h).call(h, function(S) {
            A.push(S.name + '="' + S.value + '"');
          }), A.length > 0 && (y = y + " " + A.join(" "));
          var x = d.EMPTY_TAGS.has(v);
          return y = y + (x ? "/" : "") + ">", y;
        }
        function s(v) {
          return "</" + v + ">";
        }
        function p(v, h, y) {
          h === void 0 && (h = !0), y === void 0 && (y = !1);
          var A = [], x = "";
          function S(E) {
            E = (0, r.default)(E).call(E), E && (d.EMPTY_TAGS.has(E) || (x = E));
          }
          function D() {
            x = "";
          }
          var I = new m.default();
          I.parse(v, {
            startElement: function(T, R) {
              if (S(T), !l(T, y)) {
                var N = d.NECESSARY_ATTRS.get(T) || [], M = [];
                (0, i.default)(R).call(R, function(F) {
                  var O = F.name;
                  if (O === "style") {
                    h || M.push(F);
                    return;
                  }
                  (0, c.default)(N).call(N, O) !== !1 && M.push(F);
                });
                var B = u(T, M);
                A.push(B);
              }
            },
            characters: function(T) {
              !T || l(x, y) || A.push(T);
            },
            endElement: function(T) {
              if (!l(T, y)) {
                var R = s(T);
                A.push(R), D();
              }
            },
            comment: function(T) {
              S(T);
            }
          });
          var C = A.join("");
          return C = f(C), C;
        }
        n.default = p;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(132)), i = e(t(121));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.TOP_LEVEL_TAGS = n.EMPTY_TAGS = n.NECESSARY_ATTRS = n.IGNORE_TAGS = void 0, n.IGNORE_TAGS = new r.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), n.NECESSARY_ATTRS = new i.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), n.EMPTY_TAGS = new r.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), n.TOP_LEVEL_TAGS = new r.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
      },
      function(o, n, t) {
        var e = t(295);
        o.exports = e;
      },
      function(o, n, t) {
        t(296), t(61), t(50), t(54);
        var e = t(9);
        o.exports = e.Set;
      },
      function(o, n, t) {
        var e = t(122), a = t(124);
        o.exports = e("Set", function(r) {
          return function() {
            return r(this, arguments.length ? arguments[0] : void 0);
          };
        }, a);
      },
      function(o, n) {
        function t() {
        }
        t.prototype = {
          handler: null,
          startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
          endTagRe: /^<\/([^>\s]+)[^>]*>/m,
          attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
          parse: function(e, a) {
            a && (this.contentHandler = a);
            for (var r, i, c, g = !1, d = this; e.length > 0; )
              e.substring(0, 4) == "<!--" ? (c = e.indexOf("-->"), c != -1 ? (this.contentHandler.comment(e.substring(4, c)), e = e.substring(c + 3), g = !1) : g = !0) : e.substring(0, 2) == "</" ? this.endTagRe.test(e) ? (r = RegExp.lastMatch, i = RegExp.rightContext, r.replace(this.endTagRe, function() {
                return d.parseEndTag.apply(d, arguments);
              }), e = i, g = !1) : g = !0 : e.charAt(0) == "<" && (this.startTagRe.test(e) ? (r = RegExp.lastMatch, i = RegExp.rightContext, r.replace(this.startTagRe, function() {
                return d.parseStartTag.apply(d, arguments);
              }), e = i, g = !1) : g = !0), g && (c = e.indexOf("<"), c == -1 ? (this.contentHandler.characters(e), e = "") : (this.contentHandler.characters(e.substring(0, c)), e = e.substring(c))), g = !0;
          },
          parseStartTag: function(e, a, r) {
            var i = this.parseAttributes(a, r);
            this.contentHandler.startElement(a, i);
          },
          parseEndTag: function(e, a) {
            this.contentHandler.endElement(a);
          },
          parseAttributes: function(e, a) {
            var r = this, i = [];
            return a.replace(this.attrRe, function(c, g, d, m, f, l, u, s) {
              i.push(r.parseAttribute(e, c, g, d, m, f, l, u, s));
            }), i;
          },
          parseAttribute: function(e, a, r) {
            var i = "";
            arguments[7] ? i = arguments[8] : arguments[5] ? i = arguments[6] : arguments[3] && (i = arguments[4]);
            var c = !i && !arguments[3];
            return { name: r, value: c ? null : i };
          }
        }, o.exports = t;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(i, c) {
          function g(d) {
            i.selection.createRangeByElem(d), i.selection.restoreSelection();
          }
          c.push(g);
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = t(6), g = i.__importDefault(t(3));
        function d(m) {
          var f = [], l = m.childNodes() || [];
          return (0, r.default)(l).call(l, function(u) {
            var s, p = u.nodeType;
            if (p === 3 && (s = u.textContent || "", s = c.replaceHtmlSymbol(s)), p === 1) {
              s = {}, s = s, s.tag = u.nodeName.toLowerCase();
              for (var v = [], h = u.attributes, y = h.length || 0, A = 0; A < y; A++) {
                var x = h[A];
                v.push({
                  name: x.name,
                  value: x.value
                });
              }
              s.attrs = v, s.children = d(g.default(u));
            }
            s && f.push(s);
          }), f;
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(92)), r = e(t(1)), i = e(t(4));
        (0, r.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(3));
        function d(m, f) {
          f === void 0 && (f = document.createElement("div"));
          var l = f;
          return (0, i.default)(m).call(m, function(u) {
            var s;
            if (typeof u == "string" && (s = document.createTextNode(u)), (0, a.default)(u) === "object") {
              var p;
              s = document.createElement(u.tag), (0, i.default)(p = u.attrs).call(p, function(v) {
                g.default(s).attr(v.name, v.value);
              }), u.children && u.children.length > 0 && d(u.children, s.getRootNode());
            }
            s && l.appendChild(s);
          }), g.default(l);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(89)), i = e(t(70)), c = e(t(28)), g = e(t(302)), d = e(t(4)), m = e(t(94)), f = e(t(133)), l = e(t(46)), u = e(t(57));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var s = t(2), p = s.__importDefault(t(87)), v = s.__importDefault(t(314)), h = s.__importDefault(t(3)), y = function() {
          function A(x) {
            this.editor = x, this.menuList = [], this.constructorList = v.default;
          }
          return A.prototype.extend = function(x, S) {
            !S || typeof S != "function" || (this.constructorList[x] = S);
          }, A.prototype.init = function() {
            var x, S, D = this, I = this.editor.config, C = I.excludeMenus;
            (0, r.default)(C) === !1 && (C = []), I.menus = (0, i.default)(x = I.menus).call(x, function(O) {
              return (0, c.default)(C).call(C, O) === !1;
            });
            var E = (0, g.default)(p.default.globalCustomMenuConstructorList);
            E = (0, i.default)(E).call(E, function(O) {
              return (0, c.default)(C).call(C, O);
            }), (0, d.default)(E).call(E, function(O) {
              delete p.default.globalCustomMenuConstructorList[O];
            }), (0, d.default)(S = I.menus).call(S, function(O) {
              var b = D.constructorList[O];
              D._initMenuList(O, b);
            });
            for (var T = 0, R = (0, m.default)(p.default.globalCustomMenuConstructorList); T < R.length; T++) {
              var N = R[T], M = N[0], B = N[1], F = B;
              this._initMenuList(M, F);
            }
            this._addToToolbar(), I.showMenuTooltips && this._bindMenuTooltips();
          }, A.prototype._initMenuList = function(x, S) {
            var D;
            if (!(S == null || typeof S != "function"))
              if ((0, f.default)(D = this.menuList).call(D, function(C) {
                return C.key === x;
              }))
                console.warn("\u83DC\u5355\u540D\u79F0\u91CD\u590D:" + x);
              else {
                var I = new S(this.editor);
                I.key = x, this.menuList.push(I);
              }
          }, A.prototype._bindMenuTooltips = function() {
            var x = this.editor, S = x.$toolbarElem, D = x.config, I = D.menuTooltipPosition, C = h.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + I + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
            C.css("visibility", "hidden"), S.append(C), C.css("z-index", x.zIndex.get("tooltip"));
            var E = 0;
            function T() {
              E && clearTimeout(E);
            }
            function R() {
              T(), C.css("visibility", "hidden");
            }
            S.on("mouseover", function(N) {
              var M = N.target, B = h.default(M), F, O;
              if (B.isContain(S)) {
                R();
                return;
              }
              if (B.parentUntil(".w-e-droplist") != null)
                R();
              else if (B.attr("data-title"))
                F = B.attr("data-title"), O = B;
              else {
                var b = B.parentUntil(".w-e-menu");
                b != null && (F = b.attr("data-title"), O = b);
              }
              if (F && O) {
                T();
                var $ = O.getOffsetData();
                C.text(x.i18next.t("menus.title." + F));
                var H = C.getOffsetData(), j = $.left + $.width / 2 - H.width / 2;
                C.css("left", j + "px"), I === "up" ? C.css("top", $.top - H.height - 8 + "px") : I === "down" && C.css("top", $.top + $.height + 8 + "px"), E = (0, l.default)(function() {
                  C.css("visibility", "visible");
                }, 200);
              } else
                R();
            }).on("mouseleave", function() {
              R();
            });
          }, A.prototype._addToToolbar = function() {
            var x, S = this.editor, D = S.$toolbarElem;
            (0, d.default)(x = this.menuList).call(x, function(I) {
              var C = I.$elem;
              C && D.append(C);
            });
          }, A.prototype.menuFind = function(x) {
            for (var S = this.menuList, D = 0, I = S.length; D < I; D++)
              if (S[D].key === x)
                return S[D];
            return S[0];
          }, A.prototype.changeActive = function() {
            var x;
            (0, d.default)(x = this.menuList).call(x, function(S) {
              var D;
              (0, l.default)((0, u.default)(D = S.tryChangeActive).call(D, S), 100);
            });
          }, A;
        }();
        n.default = y;
      },
      function(o, n, t) {
        o.exports = t(303);
      },
      function(o, n, t) {
        var e = t(304);
        o.exports = e;
      },
      function(o, n, t) {
        t(305);
        var e = t(9);
        o.exports = e.Object.keys;
      },
      function(o, n, t) {
        var e = t(5), a = t(31), r = t(52), i = t(11), c = i(function() {
          r(1);
        });
        e({ target: "Object", stat: !0, forced: c }, {
          keys: function(d) {
            return r(a(d));
          }
        });
      },
      function(o, n, t) {
        var e = t(307);
        o.exports = e;
      },
      function(o, n, t) {
        t(308);
        var e = t(9);
        o.exports = e.Object.entries;
      },
      function(o, n, t) {
        var e = t(5), a = t(309).entries;
        e({ target: "Object", stat: !0 }, {
          entries: function(i) {
            return a(i);
          }
        });
      },
      function(o, n, t) {
        var e = t(14), a = t(52), r = t(30), i = t(59).f, c = function(g) {
          return function(d) {
            for (var m = r(d), f = a(m), l = f.length, u = 0, s = [], p; l > u; )
              p = f[u++], (!e || i.call(m, p)) && s.push(g ? [p, m[p]] : m[p]);
            return s;
          };
        };
        o.exports = {
          entries: c(!0),
          values: c(!1)
        };
      },
      function(o, n, t) {
        var e = t(311);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(312), a = Array.prototype;
        o.exports = function(r) {
          var i = r.some;
          return r === a || r instanceof Array && i === a.some ? e : i;
        };
      },
      function(o, n, t) {
        t(313);
        var e = t(15);
        o.exports = e("Array").some;
      },
      function(o, n, t) {
        var e = t(5), a = t(32).some, r = t(67), i = t(22), c = r("some"), g = i("some");
        e({ target: "Array", proto: !0, forced: !c || !g }, {
          some: function(m) {
            return a(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(315)), c = r.__importDefault(t(316)), g = r.__importDefault(t(321)), d = r.__importDefault(t(326)), m = r.__importDefault(t(327)), f = r.__importDefault(t(328)), l = r.__importDefault(t(329)), u = r.__importDefault(t(331)), s = r.__importDefault(t(333)), p = r.__importDefault(t(334)), v = r.__importDefault(t(337)), h = r.__importDefault(t(338)), y = r.__importDefault(t(339)), A = r.__importDefault(t(350)), x = r.__importDefault(t(365)), S = r.__importDefault(t(369)), D = r.__importDefault(t(137)), I = r.__importDefault(t(378)), C = r.__importDefault(t(380)), E = r.__importDefault(t(381)), T = r.__importDefault(t(382)), R = r.__importDefault(t(401)), N = r.__importDefault(t(406)), M = r.__importDefault(t(409));
        n.default = {
          bold: i.default,
          head: c.default,
          italic: d.default,
          link: g.default,
          underline: m.default,
          strikeThrough: f.default,
          fontName: l.default,
          fontSize: u.default,
          justify: s.default,
          quote: p.default,
          backColor: v.default,
          foreColor: h.default,
          video: y.default,
          image: A.default,
          indent: x.default,
          emoticon: S.default,
          list: D.default,
          lineHeight: I.default,
          undo: C.default,
          redo: E.default,
          table: T.default,
          code: R.default,
          splitLine: N.default,
          todo: M.default
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(23)), c = r.__importDefault(t(3)), g = function(d) {
          r.__extends(m, d);
          function m(f) {
            var l = this, u = c.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return m.prototype.clickHandler = function() {
            var f = this.editor, l = f.selection.isSelectionEmpty();
            l && f.selection.createEmptyRange(), f.cmd.do("bold"), l && (f.selection.collapseRange(), f.selection.restoreSelection());
          }, m.prototype.tryChangeActive = function() {
            var f = this.editor;
            f.cmd.queryCommandState("bold") ? this.active() : this.unActive();
          }, m;
        }(i.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(27)), i = e(t(29)), c = e(t(4)), g = e(t(317)), d = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var m = t(2), f = m.__importDefault(t(24)), l = m.__importDefault(t(3)), u = t(6), s = t(7), p = function(v) {
          m.__extends(h, v);
          function h(y) {
            var A = this, x = l.default('<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>'), S = {
              width: 100,
              title: "\u8BBE\u7F6E\u6807\u9898",
              type: "list",
              list: [{
                $elem: l.default("<h1>H1</h1>"),
                value: "<h1>"
              }, {
                $elem: l.default("<h2>H2</h2>"),
                value: "<h2>"
              }, {
                $elem: l.default("<h3>H3</h3>"),
                value: "<h3>"
              }, {
                $elem: l.default("<h4>H4</h4>"),
                value: "<h4>"
              }, {
                $elem: l.default("<h5>H5</h5>"),
                value: "<h5>"
              }, {
                $elem: l.default("<p>" + y.i18next.t("menus.dropListMenu.head.\u6B63\u6587") + "</p>"),
                value: "<p>"
              }],
              clickHandler: function(C) {
                A.command(C);
              }
            };
            A = v.call(this, x, y, S) || this;
            var D = y.config.onCatalogChange;
            return D && (A.oldCatalogs = [], A.addListenerCatalog(), A.getCatalogs()), A;
          }
          return h.prototype.command = function(y) {
            var A = this.editor, x = A.selection.getSelectionContainerElem();
            if (x && A.$textElem.equal(x))
              this.setMultilineHead(y);
            else {
              var S;
              if ((0, r.default)(S = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(S, l.default(x).getNodeName()) > -1)
                return;
              A.cmd.do("formatBlock", y);
            }
            y !== "<p>" && this.addUidForSelectionElem();
          }, h.prototype.addUidForSelectionElem = function() {
            var y = this.editor, A = y.selection.getSelectionContainerElem(), x = u.getRandomCode();
            l.default(A).attr("id", x);
          }, h.prototype.addListenerCatalog = function() {
            var y = this, A = this.editor;
            A.txt.eventHooks.changeEvents.push(function() {
              y.getCatalogs();
            });
          }, h.prototype.getCatalogs = function() {
            var y = this.editor, A = this.editor.$textElem, x = y.config.onCatalogChange, S = (0, i.default)(A).call(A, "h1,h2,h3,h4,h5"), D = [];
            (0, c.default)(S).call(S, function(I, C) {
              var E = l.default(I), T = E.attr("id"), R = E.getNodeName(), N = E.text();
              T || (T = u.getRandomCode(), E.attr("id", T)), N && D.push({
                tag: R,
                id: T,
                text: N
              });
            }), (0, g.default)(this.oldCatalogs) !== (0, g.default)(D) && (this.oldCatalogs = D, x && x(D));
          }, h.prototype.setMultilineHead = function(y) {
            var A = this, x, S, D = this.editor, I = D.selection, C = (x = I.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0], E = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], T = l.default(I.getSelectionStartElem()), R = l.default(I.getSelectionEndElem());
            R.elems[0].outerHTML === l.default(s.EMPTY_P).elems[0].outerHTML && !R.elems[0].nextSibling && (R = R.prev());
            var N = [];
            N.push(T.getNodeTop(D));
            var M = [], B = (S = I.getRange()) === null || S === void 0 ? void 0 : S.commonAncestorContainer.childNodes;
            B == null || (0, c.default)(B).call(B, function(b, $) {
              b === N[0].getNode() && M.push($), b === R.getNodeTop(D).getNode() && M.push($);
            });
            for (var F = 0; N[F].getNode() !== R.getNodeTop(D).getNode(); ) {
              if (!N[F].elems[0])
                return;
              var O = l.default(N[F].next().getNode());
              N.push(O), F++;
            }
            N == null || (0, c.default)(N).call(N, function(b, $) {
              if (!A.hasTag(b, E)) {
                var H = l.default(y), j = b.parent().getNode();
                H.html("" + b.html()), j.insertBefore(H.getNode(), b.getNode()), b.remove();
              }
            }), I.createRangeByElems(C.children[M[0]], C.children[M[1]]);
          }, h.prototype.hasTag = function(y, A) {
            var x = this, S;
            if (!y)
              return !1;
            if ((0, d.default)(A).call(A, y == null ? void 0 : y.getNodeName()))
              return !0;
            var D = !1;
            return (S = y.children()) === null || S === void 0 || (0, c.default)(S).call(S, function(I) {
              D = x.hasTag(l.default(I), A);
            }), D;
          }, h.prototype.tryChangeActive = function() {
            var y = this.editor, A = /^h/i, x = y.cmd.queryCommandValue("formatBlock");
            A.test(x) ? this.active() : this.unActive();
          }, h;
        }(f.default);
        n.default = p;
      },
      function(o, n, t) {
        o.exports = t(318);
      },
      function(o, n, t) {
        var e = t(319);
        o.exports = e;
      },
      function(o, n, t) {
        t(320);
        var e = t(9);
        e.JSON || (e.JSON = { stringify: JSON.stringify }), o.exports = function(r, i, c) {
          return e.JSON.stringify.apply(null, arguments);
        };
      },
      function(o, n, t) {
        var e = t(5), a = t(36), r = t(11), i = a("JSON", "stringify"), c = /[\uD800-\uDFFF]/g, g = /^[\uD800-\uDBFF]$/, d = /^[\uDC00-\uDFFF]$/, m = function(l, u, s) {
          var p = s.charAt(u - 1), v = s.charAt(u + 1);
          return g.test(l) && !d.test(v) || d.test(l) && !g.test(p) ? "\\u" + l.charCodeAt(0).toString(16) : l;
        }, f = r(function() {
          return i("\uDF06\uD834") !== '"\\udf06\\ud834"' || i("\uDEAD") !== '"\\udead"';
        });
        i && e({ target: "JSON", stat: !0, forced: f }, {
          stringify: function(u, s, p) {
            var v = i.apply(null, arguments);
            return typeof v == "string" ? v.replace(c, m) : v;
          }
        });
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(38)), g = i.__importDefault(t(3)), d = i.__importDefault(t(322)), m = i.__importStar(t(96)), f = i.__importDefault(t(33)), l = i.__importDefault(t(324)), u = t(7), s = function(p) {
          i.__extends(v, p);
          function v(h) {
            var y = this, A = g.default('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
            return y = p.call(this, A, h) || this, l.default(h), y;
          }
          return v.prototype.clickHandler = function() {
            var h = this.editor, y, A = h.selection.getSelectionContainerElem(), x = h.$textElem, S = x.html(), D = (0, r.default)(S).call(S);
            if (D === u.EMPTY_P) {
              var I = x.children();
              h.selection.createRangeByElem(I, !0, !0), A = h.selection.getSelectionContainerElem();
            }
            if (!(A && h.$textElem.equal(A)))
              if (this.isActive) {
                var C = "", E = "";
                if (y = h.selection.getSelectionContainerElem(), !y)
                  return;
                if (y.getNodeName() !== "A") {
                  var T = m.getParentNodeA(y);
                  y = g.default(T);
                }
                C = y.elems[0].innerText, E = y.attr("href"), this.createPanel(C, E);
              } else
                h.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(h.selection.getSelectionText(), "");
          }, v.prototype.createPanel = function(h, y) {
            var A = d.default(this.editor, h, y), x = new f.default(this, A);
            x.create();
          }, v.prototype.tryChangeActive = function() {
            var h = this.editor;
            m.default(h) ? this.active() : this.unActive();
          }, v;
        }(c.default);
        n.default = s;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28)), i = e(t(17)), c = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(6), m = g.__importDefault(t(3)), f = g.__importStar(t(96)), l = t(323);
        function u(s, p, v) {
          var h = d.getRandom("input-link"), y = d.getRandom("input-text"), A = d.getRandom("btn-ok"), x = d.getRandom("btn-del"), S = f.default(s) ? "inline-block" : "none", D;
          function I() {
            if (!!f.default(s)) {
              var N = s.selection.getSelectionContainerElem();
              !N || (s.selection.createRangeByElem(N), s.selection.restoreSelection(), D = N);
            }
          }
          function C(N, M) {
            var B = N.replace(/</g, "&lt;").replace(/>/g, "&gt;"), F = m.default('<a target="_blank">' + B + "</a>"), O = F.elems[0];
            O.innerText = N, O.href = M, f.default(s) && I(), s.cmd.do("insertElem", F);
          }
          function E() {
            if (!!f.default(s))
              if (I(), D.getNodeName() === "A") {
                var N, M = D.elems[0], B = M.parentElement;
                B && (0, r.default)(N = f.EXTRA_TAG).call(N, B.nodeName) ? B.innerHTML = M.innerHTML : s.cmd.do("insertHTML", "<span>" + M.innerHTML + "</span>");
              } else {
                var F = f.getParentNodeA(D), O = F.innerHTML;
                s.cmd.do("insertHTML", "<span>" + O + "</span>");
              }
          }
          function T(N, M) {
            var B = s.config.linkCheck(N, M);
            if (B !== void 0) {
              if (B === !0)
                return !0;
              s.config.customAlert(B, "warning");
            }
            return !1;
          }
          var R = {
            width: 300,
            height: 0,
            tabs: [{
              title: s.i18next.t("menus.panelMenus.link.\u94FE\u63A5"),
              tpl: `<div>
                        <input
                            id="` + y + `"
                            type="text"
                            class="block"
                            placeholder="` + s.i18next.t("menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57") + `"/>
                        </td>
                        <input
                            id="` + h + `"
                            type="text"
                            class="block"
                            placeholder="` + s.i18next.t("\u5982") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + A + `" class="right">
                                ` + s.i18next.t("\u63D2\u5165") + `
                            </button>
                            <button type="button" id="` + x + '" class="gray right" style="display:' + S + `">
                                ` + s.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + `
                            </button>
                        </div>
                    </div>`,
              events: [
                {
                  selector: "#" + A,
                  type: "click",
                  fn: function() {
                    var M, B, F, O, b, $ = s.selection.getSelectionContainerElem(), H = $ == null ? void 0 : $.elems[0];
                    s.selection.restoreSelection();
                    var j = s.selection.getSelectionRangeTopNodes()[0].getNode(), G = window.getSelection(), U = m.default("#" + h), W = m.default("#" + y), K = (0, i.default)(M = U.val()).call(M), w = (0, i.default)(B = W.val()).call(B), Y = "";
                    G && !(G != null && G.isCollapsed) && (Y = (O = l.insertHtml(G, j)) === null || O === void 0 ? void 0 : (0, i.default)(O).call(O));
                    var J = Y == null ? void 0 : Y.replace(/<.*?>/g, ""), k = (b = J == null ? void 0 : J.length) !== null && b !== void 0 ? b : 0;
                    if (k <= w.length) {
                      var nt = w.substring(0, k), at = w.substring(k);
                      J === nt && (w = J + at);
                    }
                    if (!!K && (w || (w = K), !!T(w, K))) {
                      if ((H == null ? void 0 : H.nodeName) === "A")
                        return H.setAttribute("href", K), H.innerText = w, !0;
                      if ((H == null ? void 0 : H.nodeName) !== "A" && (0, r.default)(F = f.EXTRA_TAG).call(F, H.nodeName)) {
                        var dt = f.getParentNodeA($);
                        if (dt)
                          return dt.setAttribute("href", K), H.innerText = w, !0;
                      }
                      return C(w, K), !0;
                    }
                  },
                  bindEnter: !0
                },
                {
                  selector: "#" + x,
                  type: "click",
                  fn: function() {
                    return E(), !0;
                  }
                }
              ]
            }],
            setLinkValue: function(M, B) {
              var F = "", O = "", b;
              B === "text" && (F = "#" + y, O = p), B === "link" && (F = "#" + h, O = v), b = (0, c.default)(M).call(M, F).elems[0], b.value = O;
            }
          };
          return R;
        }
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.insertHtml = n.createPartHtml = n.makeHtmlString = n.getTopNode = void 0;
        function i(l, u) {
          var s = l, p = l;
          do {
            if (s.textContent === u)
              break;
            p = s, s.parentNode && (s = s == null ? void 0 : s.parentNode);
          } while ((s == null ? void 0 : s.nodeName) !== "P");
          return p;
        }
        n.getTopNode = i;
        function c(l, u) {
          var s = l.nodeName, p = "";
          if (l.nodeType === 3 || /^(h|H)[1-6]$/.test(s))
            return u;
          if (l.nodeType === 1) {
            var v = l.getAttribute("style"), h = l.getAttribute("face"), y = l.getAttribute("color");
            v && (p = p + (' style="' + v + '"')), h && (p = p + (' face="' + h + '"')), y && (p = p + (' color="' + y + '"'));
          }
          return s = s.toLowerCase(), "<" + s + p + ">" + u + "</" + s + ">";
        }
        n.makeHtmlString = c;
        function g(l, u, s, p) {
          var v, h = (v = u.textContent) === null || v === void 0 ? void 0 : v.substring(s, p), y = u, A = "";
          do
            A = c(y, h != null ? h : ""), h = A, y = y == null ? void 0 : y.parentElement;
          while (y && y.textContent !== l);
          return A;
        }
        n.createPartHtml = g;
        function d(l, u) {
          var s, p, v, h, y, A = l.anchorNode, x = l.focusNode, S = l.anchorOffset, D = l.focusOffset, I = (s = u.textContent) !== null && s !== void 0 ? s : "", C = m(u), E = "", T = "", R = "", N = "", M = A, B = x, F = A;
          if (A != null && A.isEqualNode(x != null ? x : null)) {
            var O = g(I, A, S, D);
            return O = f(C, O), O;
          }
          for (A && (T = g(I, A, S != null ? S : 0)), x && (N = g(I, x, 0, D)), A && (M = i(A, I)), x && (B = i(x, I)), F = (p = M == null ? void 0 : M.nextSibling) !== null && p !== void 0 ? p : A; !(F != null && F.isEqualNode(B != null ? B : null)); ) {
            var b = F == null ? void 0 : F.nodeName;
            if (b === "#text")
              R = R + (F == null ? void 0 : F.textContent);
            else {
              var $ = (h = (v = F == null ? void 0 : F.firstChild) === null || v === void 0 ? void 0 : v.parentElement) === null || h === void 0 ? void 0 : h.innerHTML;
              F && (R = R + c(F, $ != null ? $ : ""));
            }
            var H = (y = F == null ? void 0 : F.nextSibling) !== null && y !== void 0 ? y : F;
            if (H === F)
              break;
            F = H;
          }
          return E = "" + T + R + N, E = f(C, E), E;
        }
        n.insertHtml = d;
        function m(l) {
          for (var u, s = (u = l.textContent) !== null && u !== void 0 ? u : "", p = []; (l == null ? void 0 : l.textContent) === s; )
            l.nodeName !== "P" && l.nodeName !== "TABLE" && p.push(l), l = l.childNodes[0];
          return p;
        }
        function f(l, u) {
          return (0, r.default)(l).call(l, function(s) {
            u = c(s, u);
          }), u;
        }
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(325));
        function c(g) {
          i.default(g);
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = i.__importDefault(t(39)), d = t(96);
        function m(l) {
          var u;
          function s(v) {
            var h = [{
              $elem: c.default("<span>" + l.i18next.t("menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5") + "</span>"),
              onClick: function(A, x) {
                var S = x.attr("href");
                return window.open(S, "_target"), !0;
              }
            }, {
              $elem: c.default("<span>" + l.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "</span>"),
              onClick: function(A, x) {
                var S, D;
                A.selection.createRangeByElem(x), A.selection.restoreSelection();
                var I = x.childNodes();
                if ((I == null ? void 0 : I.getNodeName()) === "IMG") {
                  var C = (D = (S = A.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.children()) === null || D === void 0 ? void 0 : D.elems[0].children[0];
                  A.cmd.do("insertHTML", `<img 
                                src=` + (C == null ? void 0 : C.getAttribute("src")) + ` 
                                style=` + (C == null ? void 0 : C.getAttribute("style")) + ">");
                } else {
                  var E, T = x.elems[0], R = T.innerHTML, N = T.parentElement;
                  N && (0, r.default)(E = d.EXTRA_TAG).call(E, N.nodeName) ? N.innerHTML = R : A.cmd.do("insertHTML", "<span>" + R + "</span>");
                }
                return !0;
              }
            }];
            u = new g.default(l, v, h), u.create();
          }
          function p() {
            u && (u.remove(), u = null);
          }
          return {
            showLinkTooltip: s,
            hideLinkTooltip: p
          };
        }
        function f(l) {
          var u = m(l), s = u.showLinkTooltip, p = u.hideLinkTooltip;
          l.txt.eventHooks.linkClickEvents.push(s), l.txt.eventHooks.clickEvents.push(p), l.txt.eventHooks.keyupEvents.push(p), l.txt.eventHooks.toolbarClickEvents.push(p), l.txt.eventHooks.menuClickEvents.push(p), l.txt.eventHooks.textScrollEvents.push(p);
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(23)), c = r.__importDefault(t(3)), g = function(d) {
          r.__extends(m, d);
          function m(f) {
            var l = this, u = c.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return m.prototype.clickHandler = function() {
            var f = this.editor, l = f.selection.isSelectionEmpty();
            l && f.selection.createEmptyRange(), f.cmd.do("italic"), l && (f.selection.collapseRange(), f.selection.restoreSelection());
          }, m.prototype.tryChangeActive = function() {
            var f = this.editor;
            f.cmd.queryCommandState("italic") ? this.active() : this.unActive();
          }, m;
        }(i.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(23)), c = r.__importDefault(t(3)), g = function(d) {
          r.__extends(m, d);
          function m(f) {
            var l = this, u = c.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return m.prototype.clickHandler = function() {
            var f = this.editor, l = f.selection.isSelectionEmpty();
            l && f.selection.createEmptyRange(), f.cmd.do("underline"), l && (f.selection.collapseRange(), f.selection.restoreSelection());
          }, m.prototype.tryChangeActive = function() {
            var f = this.editor;
            f.cmd.queryCommandState("underline") ? this.active() : this.unActive();
          }, m;
        }(i.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(23)), c = r.__importDefault(t(3)), g = function(d) {
          r.__extends(m, d);
          function m(f) {
            var l = this, u = c.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return m.prototype.clickHandler = function() {
            var f = this.editor, l = f.selection.isSelectionEmpty();
            l && f.selection.createEmptyRange(), f.cmd.do("strikeThrough"), l && (f.selection.collapseRange(), f.selection.restoreSelection());
          }, m.prototype.tryChangeActive = function() {
            var f = this.editor;
            f.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
          }, m;
        }(i.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(24)), c = r.__importDefault(t(3)), g = r.__importDefault(t(330)), d = function(m) {
          r.__extends(f, m);
          function f(l) {
            var u = this, s = c.default(`<div class="w-e-menu" data-title="\u5B57\u4F53">
                <i class="w-e-icon-font"></i>
            </div>`), p = new g.default(l.config.fontNames), v = {
              width: 100,
              title: "\u8BBE\u7F6E\u5B57\u4F53",
              type: "list",
              list: p.getItemList(),
              clickHandler: function(y) {
                u.command(y);
              }
            };
            return u = m.call(this, s, l, v) || this, u;
          }
          return f.prototype.command = function(l) {
            var u, s = this.editor, p = s.selection.isSelectionEmpty(), v = (u = s.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
            if (v != null) {
              var h = (v == null ? void 0 : v.nodeName.toLowerCase()) !== "p", y = (v == null ? void 0 : v.getAttribute("face")) === l;
              if (p) {
                if (h && !y) {
                  var A = s.selection.getSelectionRangeTopNodes();
                  s.selection.createRangeByElem(A[0]), s.selection.moveCursor(A[0].elems[0]);
                }
                s.selection.setRangeToElem(v), s.selection.createEmptyRange();
              }
              s.cmd.do("fontName", l), p && (s.selection.collapseRange(), s.selection.restoreSelection());
            }
          }, f.prototype.tryChangeActive = function() {
          }, f;
        }(i.default);
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = function() {
          function d(m) {
            var f = this;
            this.itemList = [], (0, r.default)(m).call(m, function(l) {
              var u = typeof l == "string" ? l : l.value, s = typeof l == "string" ? l : l.name;
              f.itemList.push({
                $elem: c.default(`<p style="font-family:'` + u + `'">` + s + "</p>"),
                value: s
              });
            });
          }
          return d.prototype.getItemList = function() {
            return this.itemList;
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(24)), c = r.__importDefault(t(3)), g = r.__importDefault(t(332)), d = function(m) {
          r.__extends(f, m);
          function f(l) {
            var u = this, s = c.default(`<div class="w-e-menu" data-title="\u5B57\u53F7">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), p = new g.default(l.config.fontSizes), v = {
              width: 160,
              title: "\u8BBE\u7F6E\u5B57\u53F7",
              type: "list",
              list: p.getItemList(),
              clickHandler: function(y) {
                u.command(y);
              }
            };
            return u = m.call(this, s, l, v) || this, u;
          }
          return f.prototype.command = function(l) {
            var u, s = this.editor, p = s.selection.isSelectionEmpty(), v = (u = s.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
            v != null && (s.cmd.do("fontSize", l), p && (s.selection.collapseRange(), s.selection.restoreSelection()));
          }, f.prototype.tryChangeActive = function() {
          }, f;
        }(i.default);
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = function() {
          function g(d) {
            this.itemList = [];
            for (var m in d) {
              var f = d[m];
              this.itemList.push({
                $elem: i.default('<p style="font-size:' + m + '">' + f.name + "</p>"),
                value: f.value
              });
            }
          }
          return g.prototype.getItemList = function() {
            return this.itemList;
          }, g;
        }();
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(24)), d = c.__importDefault(t(3)), m = ["LI"], f = ["BLOCKQUOTE"], l = function(u) {
          c.__extends(s, u);
          function s(p) {
            var v = this, h = d.default('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'), y = {
              width: 100,
              title: "\u5BF9\u9F50\u65B9\u5F0F",
              type: "list",
              list: [{
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.\u9760\u5DE6") + `
                        </p>`),
                value: "left"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.\u5C45\u4E2D") + `
                        </p>`),
                value: "center"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.\u9760\u53F3") + `
                        </p>`),
                value: "right"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + p.i18next.t("menus.dropListMenu.justify.\u4E24\u7AEF") + `
                        </p>`),
                value: "justify"
              }],
              clickHandler: function(x) {
                v.command(x);
              }
            };
            return v = u.call(this, h, p, y) || this, v;
          }
          return s.prototype.command = function(p) {
            var v = this.editor, h = v.selection, y = h.getSelectionContainerElem();
            h.saveRange();
            var A = v.selection.getSelectionRangeTopNodes();
            if (y != null && y.length)
              if (this.isSpecialNode(y, A[0]) || this.isSpecialTopNode(A[0])) {
                var x = this.getSpecialNodeUntilTop(y, A[0]);
                if (x == null)
                  return;
                d.default(x).css("text-align", p);
              } else
                (0, r.default)(A).call(A, function(S) {
                  S.css("text-align", p);
                });
            h.restoreSelection();
          }, s.prototype.getSpecialNodeUntilTop = function(p, v) {
            for (var h = p.elems[0], y = v.elems[0]; h != null; ) {
              if ((0, i.default)(m).call(m, h == null ? void 0 : h.nodeName) !== -1 || h.parentNode === y)
                return h;
              h = h.parentNode;
            }
            return h;
          }, s.prototype.isSpecialNode = function(p, v) {
            var h = this.getSpecialNodeUntilTop(p, v);
            return h == null ? !1 : (0, i.default)(m).call(m, h.nodeName) !== -1;
          }, s.prototype.isSpecialTopNode = function(p) {
            var v;
            return p == null ? !1 : (0, i.default)(f).call(f, (v = p.elems[0]) === null || v === void 0 ? void 0 : v.nodeName) !== -1;
          }, s.prototype.tryChangeActive = function() {
          }, s;
        }(g.default);
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = i.__importDefault(t(23)), d = i.__importDefault(t(335)), m = i.__importDefault(t(336)), f = t(7), l = function(u) {
          i.__extends(s, u);
          function s(p) {
            var v = this, h = c.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
            return v = u.call(this, h, p) || this, d.default(p), v;
          }
          return s.prototype.clickHandler = function() {
            var p, v, h = this.editor, y = h.selection.isSelectionEmpty(), A = h.selection.getSelectionRangeTopNodes(), x = A[A.length - 1], S = this.getTopNodeName();
            if (S === "BLOCKQUOTE") {
              var D = c.default(x.childNodes()), I = D.length, C = x;
              (0, r.default)(D).call(D, function(N) {
                var M = c.default(N);
                M.insertAfter(C), C = M;
              }), x.remove(), h.selection.moveCursor(D.elems[I - 1]), this.tryChangeActive();
            } else {
              var E = m.default(A);
              if (h.$textElem.equal(x)) {
                var T = (p = h.selection.getSelectionContainerElem()) === null || p === void 0 ? void 0 : p.elems[0];
                h.selection.createRangeByElems(T.children[0], T.children[0]), A = h.selection.getSelectionRangeTopNodes(), E = m.default(A), x.append(E);
              } else
                E.insertAfter(x);
              this.delSelectNode(A);
              var R = (v = E.childNodes()) === null || v === void 0 ? void 0 : v.last().getNode();
              if (R == null)
                return;
              R.textContent ? h.selection.moveCursor(R) : h.selection.moveCursor(R, 0), this.tryChangeActive(), c.default(f.EMPTY_P).insertAfter(E);
              return;
            }
            y && (h.selection.collapseRange(), h.selection.restoreSelection());
          }, s.prototype.tryChangeActive = function() {
            var p, v = this.editor, h = (p = v.selection.getSelectionRangeTopNodes()[0]) === null || p === void 0 ? void 0 : p.getNodeName();
            h === "BLOCKQUOTE" ? this.active() : this.unActive();
          }, s.prototype.getTopNodeName = function() {
            var p = this.editor, v = p.selection.getSelectionRangeTopNodes()[0], h = v == null ? void 0 : v.getNodeName();
            return h;
          }, s.prototype.delSelectNode = function(p) {
            (0, r.default)(p).call(p, function(v) {
              v.remove();
            });
          }, s;
        }(g.default);
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = t(7), c = r.__importDefault(t(3));
        function g(d) {
          function m(f) {
            var l, u = d.selection.getSelectionContainerElem(), s = d.selection.getSelectionRangeTopNodes()[0];
            if ((s == null ? void 0 : s.getNodeName()) === "BLOCKQUOTE") {
              if (u.getNodeName() === "BLOCKQUOTE") {
                var p = (l = u.childNodes()) === null || l === void 0 ? void 0 : l.getNode();
                d.selection.moveCursor(p);
              }
              if (u.text() === "") {
                f.preventDefault(), u.remove();
                var v = c.default(i.EMPTY_P);
                v.insertAfter(s), d.selection.moveCursor(v.getNode(), 0);
              }
              s.text() === "" && s.remove();
            }
          }
          d.txt.eventHooks.enterDownEvents.push(m);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3));
        function g(d) {
          var m = c.default("<blockquote></blockquote>");
          return (0, r.default)(d).call(d, function(f) {
            m.append(f.clone(!0));
          }), m;
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(24)), g = i.__importDefault(t(3)), d = t(6), m = function(f) {
          i.__extends(l, f);
          function l(u) {
            var s, p = this, v = g.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), h = {
              width: 120,
              title: "\u80CC\u666F\u989C\u8272",
              type: "inline-block",
              list: (0, r.default)(s = u.config.colors).call(s, function(y) {
                return {
                  $elem: g.default('<i style="color:' + y + ';" class="w-e-icon-paint-brush"></i>'),
                  value: y
                };
              }),
              clickHandler: function(A) {
                p.command(A);
              }
            };
            return p = f.call(this, v, u, h) || this, p;
          }
          return l.prototype.command = function(u) {
            var s, p = this.editor, v = p.selection.isSelectionEmpty(), h = (s = p.selection.getSelectionContainerElem()) === null || s === void 0 ? void 0 : s.elems[0];
            if (h != null) {
              var y = (h == null ? void 0 : h.nodeName.toLowerCase()) !== "p", A = h == null ? void 0 : h.style.backgroundColor, x = d.hexToRgb(u) === A;
              if (v) {
                if (y && !x) {
                  var S = p.selection.getSelectionRangeTopNodes();
                  p.selection.createRangeByElem(S[0]), p.selection.moveCursor(S[0].elems[0]);
                }
                p.selection.createEmptyRange();
              }
              p.cmd.do("backColor", u), v && (p.selection.collapseRange(), p.selection.restoreSelection());
            }
          }, l.prototype.tryChangeActive = function() {
          }, l;
        }(c.default);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(24)), g = i.__importDefault(t(3)), d = function(m) {
          i.__extends(f, m);
          function f(l) {
            var u, s = this, p = g.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`), v = {
              width: 120,
              title: "\u6587\u5B57\u989C\u8272",
              type: "inline-block",
              list: (0, r.default)(u = l.config.colors).call(u, function(h) {
                return {
                  $elem: g.default('<i style="color:' + h + ';" class="w-e-icon-pencil2"></i>'),
                  value: h
                };
              }),
              clickHandler: function(y) {
                s.command(y);
              }
            };
            return s = m.call(this, p, l, v) || this, s;
          }
          return f.prototype.command = function(l) {
            var u, s = this.editor, p = s.selection.isSelectionEmpty(), v = (u = s.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
            if (v != null) {
              var h = s.selection.getSelectionText();
              if (v.nodeName === "A" && v.textContent === h) {
                var y = g.default("<span>&#8203;</span>").getNode();
                v.appendChild(y);
              }
              s.cmd.do("foreColor", l), p && (s.selection.collapseRange(), s.selection.restoreSelection());
            }
          }, f.prototype.tryChangeActive = function() {
          }, f;
        }(c.default);
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(33)), g = r.__importDefault(t(38)), d = r.__importDefault(t(340)), m = r.__importDefault(t(346)), f = function(l) {
          r.__extends(u, l);
          function u(s) {
            var p = this, v = i.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`);
            return p = l.call(this, v, s) || this, m.default(s), p;
          }
          return u.prototype.clickHandler = function() {
            this.createPanel("");
          }, u.prototype.createPanel = function(s) {
            var p = d.default(this.editor, s), v = new c.default(this, p);
            v.create();
          }, u.prototype.tryChangeActive = function() {
          }, u;
        }(g.default);
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = t(6), g = i.__importDefault(t(3)), d = i.__importDefault(t(341)), m = t(7);
        function f(l, u) {
          var s = l.config, p = new d.default(l), v = c.getRandom("input-iframe"), h = c.getRandom("btn-ok"), y = c.getRandom("input-upload"), A = c.getRandom("btn-local-ok");
          function x(C) {
            l.cmd.do("insertHTML", C + m.EMPTY_P), l.config.onlineVideoCallback(C);
          }
          function S(C) {
            var E = l.config.onlineVideoCheck(C);
            return E === !0 ? !0 : (typeof E == "string" && l.config.customAlert(E, "error"), !1);
          }
          var D = [{
            title: l.i18next.t("menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891"),
            tpl: `<div class="w-e-up-video-container">
                    <div id="` + A + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + y + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
            events: [
              {
                selector: "#" + A,
                type: "click",
                fn: function() {
                  var E = g.default("#" + y), T = E.elems[0];
                  if (T)
                    T.click();
                  else
                    return !0;
                }
              },
              {
                selector: "#" + y,
                type: "change",
                fn: function() {
                  var E = g.default("#" + y), T = E.elems[0];
                  if (!T)
                    return !0;
                  var R = T.files;
                  return R.length && p.uploadVideo(R), !0;
                }
              }
            ]
          }, {
            title: l.i18next.t("menus.panelMenus.video.\u63D2\u5165\u89C6\u9891"),
            tpl: `<div>
                    <input 
                        id="` + v + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + l.i18next.t("\u5982") + `\uFF1A<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + h + `" class="right">
                            ` + l.i18next.t("\u63D2\u5165") + `
                        </button>
                    </div>
                </div>`,
            events: [
              {
                selector: "#" + h,
                type: "click",
                fn: function() {
                  var E, T = g.default("#" + v), R = (0, r.default)(E = T.val()).call(E);
                  if (!!R && !!S(R))
                    return x(R), !0;
                },
                bindEnter: !0
              }
            ]
          }], I = {
            width: 300,
            height: 0,
            tabs: []
          };
          return window.FileReader && (s.uploadVideoServer || s.customUploadVideo) && I.tabs.push(D[0]), s.showLinkVideo && I.tabs.push(D[1]), I;
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(133)), i = e(t(57)), c = e(t(4)), g = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var d = t(2), m = t(6), f = d.__importDefault(t(135)), l = d.__importDefault(t(136)), u = t(7), s = t(6), p = function() {
          function v(h) {
            this.editor = h;
          }
          return v.prototype.uploadVideo = function(h) {
            var y = this;
            if (!!h.length) {
              var A = this.editor, x = A.config, S = "validate.", D = function(J) {
                return A.i18next.t(S + J);
              }, I = x.uploadVideoServer, C = x.uploadVideoMaxSize, E = C / 1024, T = x.uploadVideoName, R = x.uploadVideoParams, N = x.uploadVideoParamsWithUrl, M = x.uploadVideoHeaders, B = x.uploadVideoHooks, F = x.uploadVideoTimeout, O = x.withVideoCredentials, b = x.customUploadVideo, $ = x.uploadVideoAccept, H = [], j = [];
              if (m.arrForEach(h, function(Y) {
                var J = Y.name, k = Y.size / 1024 / 1024;
                if (!(!J || !k)) {
                  if (!($ instanceof Array)) {
                    j.push("\u3010" + $ + "\u3011" + D("uploadVideoAccept \u4E0D\u662FArray"));
                    return;
                  }
                  if (!(0, r.default)($).call($, function(nt) {
                    return nt === J.split(".")[J.split(".").length - 1];
                  })) {
                    j.push("\u3010" + J + "\u3011" + D("\u4E0D\u662F\u89C6\u9891"));
                    return;
                  }
                  if (E < k) {
                    j.push("\u3010" + J + "\u3011" + D("\u5927\u4E8E") + " " + E + "M");
                    return;
                  }
                  H.push(Y);
                }
              }), j.length) {
                x.customAlert(D("\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + j.join(`
`), "warning");
                return;
              }
              if (H.length === 0) {
                x.customAlert(D("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                return;
              }
              if (b && typeof b == "function") {
                var G;
                b(H, (0, i.default)(G = this.insertVideo).call(G, this));
                return;
              }
              var U = new FormData();
              if ((0, c.default)(H).call(H, function(Y, J) {
                var k = T || Y.name;
                H.length > 1 && (k = k + (J + 1)), U.append(k, Y);
              }), I) {
                var W = I.split("#");
                I = W[0];
                var K = W[1] || "";
                (0, c.default)(m).call(m, R, function(Y, J) {
                  N && ((0, g.default)(I).call(I, "?") > 0 ? I += "&" : I += "?", I = I + Y + "=" + J), U.append(Y, J);
                }), K && (I += "#" + K);
                var w = f.default(I, {
                  timeout: F,
                  formData: U,
                  headers: M,
                  withCredentials: !!O,
                  beforeSend: function(J) {
                    if (B.before)
                      return B.before(J, A, H);
                  },
                  onTimeout: function(J) {
                    x.customAlert(D("\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6"), "error"), B.timeout && B.timeout(J, A);
                  },
                  onProgress: function(J, k) {
                    var nt = new l.default(A);
                    k.lengthComputable && (J = k.loaded / k.total, nt.show(J));
                  },
                  onError: function(J) {
                    x.customAlert(D("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF"), "error", D("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + D("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + J.status), B.error && B.error(J, A);
                  },
                  onFail: function(J, k) {
                    x.customAlert(D("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", D("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + D("\u8FD4\u56DE\u7ED3\u679C") + ": ") + k), B.fail && B.fail(J, A, k);
                  },
                  onSuccess: function(J, k) {
                    if (B.customInsert) {
                      var nt;
                      B.customInsert((0, i.default)(nt = y.insertVideo).call(nt, y), k, A);
                      return;
                    }
                    if (k.errno != "0") {
                      x.customAlert(D("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", D("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + D("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + k.errno), B.fail && B.fail(J, A, k);
                      return;
                    }
                    var at = k.data;
                    y.insertVideo(at.url), B.success && B.success(J, A, k);
                  }
                });
                typeof w == "string" && x.customAlert(w, "error");
              }
            }
          }, v.prototype.insertVideo = function(h) {
            var y = this.editor, A = y.config, x = "validate.", S = function(C, E) {
              return E === void 0 && (E = x), y.i18next.t(E + C);
            };
            if (!A.customInsertVideo)
              s.UA.isFirefox ? y.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + h + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : y.cmd.do("insertHTML", '<video src="' + h + '" controls="controls" style="max-width:100%"></video>' + u.EMPTY_P);
            else {
              A.customInsertVideo(h);
              return;
            }
            var D = document.createElement("video");
            D.onload = function() {
              D = null;
            }, D.onerror = function() {
              A.customAlert(S("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + S("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + S("\u89C6\u9891\u94FE\u63A5") + ' "' + h + '"\uFF0C' + S("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), D = null;
            }, D.onabort = function() {
              return D = null;
            }, D.src = h;
          }, v;
        }();
        n.default = p;
      },
      function(o, n, t) {
        o.exports = t(343);
      },
      function(o, n, t) {
        var e = t(344);
        o.exports = e;
      },
      function(o, n, t) {
        t(345);
        var e = t(9);
        o.exports = e.Date.now;
      },
      function(o, n, t) {
        var e = t(5);
        e({ target: "Date", stat: !0 }, {
          now: function() {
            return new Date().getTime();
          }
        });
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(347)), c = r.__importDefault(t(349));
        function g(d) {
          i.default(d), c.default(d);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(39)), g = r.__importDefault(t(348));
        function d(f) {
          var l, u = function(h, y) {
            return y === void 0 && (y = ""), f.i18next.t(y + h);
          };
          function s(v) {
            var h = [{
              $elem: i.default("<span class='w-e-icon-trash-o'></span>"),
              onClick: function(A, x) {
                return x.remove(), !0;
              }
            }, {
              $elem: i.default("<span>100%</span>"),
              onClick: function(A, x) {
                return x.attr("width", "100%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: i.default("<span>50%</span>"),
              onClick: function(A, x) {
                return x.attr("width", "50%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: i.default("<span>30%</span>"),
              onClick: function(A, x) {
                return x.attr("width", "30%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: i.default("<span>" + u("\u91CD\u7F6E") + "</span>"),
              onClick: function(A, x) {
                return x.removeAttr("width"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: i.default("<span>" + u("menus.justify.\u9760\u5DE6") + "</span>"),
              onClick: function(A, x) {
                return g.default(x, "left"), !0;
              }
            }, {
              $elem: i.default("<span>" + u("menus.justify.\u5C45\u4E2D") + "</span>"),
              onClick: function(A, x) {
                return g.default(x, "center"), !0;
              }
            }, {
              $elem: i.default("<span>" + u("menus.justify.\u9760\u53F3") + "</span>"),
              onClick: function(A, x) {
                return g.default(x, "right"), !0;
              }
            }];
            l = new c.default(f, v, h), l.create();
          }
          function p() {
            l && (l.remove(), l = null);
          }
          return {
            showVideoTooltip: s,
            hideVideoTooltip: p
          };
        }
        n.createShowHideFn = d;
        function m(f) {
          var l = d(f), u = l.showVideoTooltip, s = l.hideVideoTooltip;
          f.txt.eventHooks.videoClickEvents.push(u), f.txt.eventHooks.clickEvents.push(s), f.txt.eventHooks.keyupEvents.push(s), f.txt.eventHooks.toolbarClickEvents.push(s), f.txt.eventHooks.menuClickEvents.push(s), f.txt.eventHooks.textScrollEvents.push(s), f.txt.eventHooks.changeEvents.push(s);
        }
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3));
        function g(m, f) {
          var l = ["P"], u = d(m, l);
          u && c.default(u).css("text-align", f);
        }
        n.default = g;
        function d(m, f) {
          for (var l, u = m.elems[0]; u != null; ) {
            if ((0, r.default)(f).call(f, u == null ? void 0 : u.nodeName))
              return u;
            if (((l = u == null ? void 0 : u.parentNode) === null || l === void 0 ? void 0 : l.nodeName) === "BODY")
              return null;
            u = u.parentNode;
          }
          return u;
        }
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(6);
        function i(c) {
          if (!!r.UA.isFirefox) {
            var g = c.txt, d = c.selection, m = g.eventHooks.keydownEvents;
            m.push(function(f) {
              var l = d.getSelectionContainerElem();
              if (l) {
                var u = l.getNodeTop(c), s = u.length && u.prev().length ? u.prev() : null;
                s && s.attr("data-we-video-p") && d.getCursorPos() === 0 && f.keyCode === 8 && s.remove();
              }
            });
          }
        }
        n.default = i;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = t(7), g = i.__importDefault(t(3)), d = i.__importDefault(t(33)), m = i.__importDefault(t(38)), f = i.__importDefault(t(351)), l = i.__importDefault(t(364)), u = function(s) {
          i.__extends(p, s);
          function p(v) {
            var h = this, y = g.default('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'), A = l.default(v);
            if (A.onlyUploadConf) {
              var x;
              y = A.onlyUploadConf.$elem, (0, r.default)(x = A.onlyUploadConf.events).call(x, function(S) {
                var D = S.type, I = S.fn || c.EMPTY_FN;
                y.on(D, function(C) {
                  C.stopPropagation(), I(C);
                });
              });
            }
            return h = s.call(this, y, v) || this, h.imgPanelConfig = A, f.default(v), h;
          }
          return p.prototype.clickHandler = function() {
            this.imgPanelConfig.onlyUploadConf || this.createPanel();
          }, p.prototype.createPanel = function() {
            var v = this.imgPanelConfig, h = new d.default(this, v);
            this.setPanel(h), h.create();
          }, p.prototype.tryChangeActive = function() {
          }, p;
        }(m.default);
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(352)), c = r.__importDefault(t(353)), g = r.__importDefault(t(354)), d = r.__importDefault(t(362)), m = r.__importDefault(t(363));
        function f(l) {
          i.default(l), c.default(l), g.default(l), d.default(l), m.default(l);
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = t(131), c = r.__importDefault(t(97));
        function g(l, u) {
          var s = l.config, p = s.pasteFilterStyle, v = s.pasteIgnoreImg, h = i.getPasteHtml(u, p, v);
          if (h)
            return !0;
          var y = i.getPasteText(u);
          return !!y;
        }
        function d(l, u) {
          for (var s, p = ((s = u.clipboardData) === null || s === void 0 ? void 0 : s.types) || [], v = 0; v < p.length; v++) {
            var h = p[v];
            if (h === "Files")
              return !0;
          }
          return !1;
        }
        function m(l, u) {
          if (!(!d(u, l) && g(u, l))) {
            var s = i.getPasteImgs(l);
            if (!!s.length) {
              var p = new c.default(u);
              p.uploadImg(s);
            }
          }
        }
        function f(l) {
          l.txt.eventHooks.pasteEvents.unshift(function(u) {
            m(u, l);
          });
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(97));
        function c(g) {
          function d(m) {
            var f = m.dataTransfer && m.dataTransfer.files;
            if (!(!f || !f.length)) {
              var l = new i.default(g);
              l.uploadImg(f);
            }
          }
          g.txt.eventHooks.dropEvents.push(d);
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29)), i = e(t(355));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var c = t(2), g = c.__importDefault(t(3));
        t(360);
        var d = t(6);
        function m(p, v, h, y, A) {
          p.attr("style", "width:" + v + "px; height:" + h + "px; left:" + y + "px; top:" + A + "px;");
        }
        function f(p, v) {
          var h = g.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
          return h.hide(), v.append(h), h;
        }
        function l(p, v, h) {
          var y = p.getBoundingClientRect(), A = h.getBoundingClientRect(), x = A.width.toFixed(2), S = A.height.toFixed(2);
          (0, r.default)(v).call(v, ".w-e-img-drag-show-size").text(x + "px * " + S + "px"), m(v, (0, i.default)(x), (0, i.default)(S), A.left - y.left, A.top - y.top), v.show();
        }
        function u(p) {
          var v = p.$textContainerElem, h, y = f(p, v);
          function A(D, I) {
            D.on("click", function(C) {
              C.stopPropagation();
            }), D.on("mousedown", ".w-e-img-drag-rb", function(C) {
              if (C.preventDefault(), !h)
                return;
              var E = C.clientX, T = C.clientY, R = I.getBoundingClientRect(), N = h.getBoundingClientRect(), M = N.width, B = N.height, F = N.left - R.left, O = N.top - R.top, b = M / B, $ = M, H = B, j = g.default(document);
              function G() {
                j.off("mousemove", U), j.off("mouseup", W);
              }
              function U(K) {
                K.stopPropagation(), K.preventDefault(), $ = M + (K.clientX - E), H = B + (K.clientY - T), $ / H != b && (H = $ / b), $ = (0, i.default)($.toFixed(2)), H = (0, i.default)(H.toFixed(2)), (0, r.default)(D).call(D, ".w-e-img-drag-show-size").text($.toFixed(2).replace(".00", "") + "px * " + H.toFixed(2).replace(".00", "") + "px"), m(D, $, H, F, O);
              }
              j.on("mousemove", U);
              function W() {
                h.attr("width", $ + ""), h.attr("height", H + "");
                var K = h.getBoundingClientRect();
                m(D, $, H, K.left - R.left, K.top - R.top), G();
              }
              j.on("mouseup", W), j.on("mouseleave", G);
            });
          }
          function x(D) {
            if (d.UA.isIE())
              return !1;
            D && (h = D, l(v, y, h));
          }
          function S() {
            (0, r.default)(v).call(v, ".w-e-img-drag-mask").hide();
          }
          return A(y, v), g.default(document).on("click", S), p.beforeDestroy(function() {
            g.default(document).off("click", S);
          }), {
            showDrag: x,
            hideDrag: S
          };
        }
        n.createShowHideFn = u;
        function s(p) {
          var v = u(p), h = v.showDrag, y = v.hideDrag;
          p.txt.eventHooks.imgClickEvents.push(h), p.txt.eventHooks.textScrollEvents.push(y), p.txt.eventHooks.keyupEvents.push(y), p.txt.eventHooks.toolbarClickEvents.push(y), p.txt.eventHooks.menuClickEvents.push(y), p.txt.eventHooks.changeEvents.push(y);
        }
        n.default = s;
      },
      function(o, n, t) {
        o.exports = t(356);
      },
      function(o, n, t) {
        var e = t(357);
        o.exports = e;
      },
      function(o, n, t) {
        t(358);
        var e = t(9);
        o.exports = e.parseFloat;
      },
      function(o, n, t) {
        var e = t(5), a = t(359);
        e({ global: !0, forced: parseFloat != a }, {
          parseFloat: a
        });
      },
      function(o, n, t) {
        var e = t(8), a = t(90).trim, r = t(68), i = e.parseFloat, c = 1 / i(r + "-0") !== -1 / 0;
        o.exports = c ? function(d) {
          var m = a(String(d)), f = i(m);
          return f === 0 && m.charAt(0) == "-" ? -0 : f;
        } : i;
      },
      function(o, n, t) {
        var e = t(20), a = t(361);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(39));
        function g(m) {
          var f, l = function(v, h) {
            return h === void 0 && (h = ""), m.i18next.t(h + v);
          };
          function u(p) {
            var v = [{
              $elem: i.default("<span class='w-e-icon-trash-o'></span>"),
              onClick: function(y, A) {
                return y.selection.createRangeByElem(A), y.selection.restoreSelection(), y.cmd.do("delete"), !0;
              }
            }, {
              $elem: i.default("<span>30%</span>"),
              onClick: function(y, A) {
                return A.attr("width", "30%"), A.removeAttr("height"), !0;
              }
            }, {
              $elem: i.default("<span>50%</span>"),
              onClick: function(y, A) {
                return A.attr("width", "50%"), A.removeAttr("height"), !0;
              }
            }, {
              $elem: i.default("<span>100%</span>"),
              onClick: function(y, A) {
                return A.attr("width", "100%"), A.removeAttr("height"), !0;
              }
            }];
            v.push({
              $elem: i.default("<span>" + l("\u91CD\u7F6E") + "</span>"),
              onClick: function(y, A) {
                return A.removeAttr("width"), A.removeAttr("height"), !0;
              }
            }), p.attr("data-href") && v.push({
              $elem: i.default("<span>" + l("\u67E5\u770B\u94FE\u63A5") + "</span>"),
              onClick: function(y, A) {
                var x = A.attr("data-href");
                return x && (x = decodeURIComponent(x), window.open(x, "_target")), !0;
              }
            }), f = new c.default(m, p, v), f.create();
          }
          function s() {
            f && (f.remove(), f = null);
          }
          return {
            showImgTooltip: u,
            hideImgTooltip: s
          };
        }
        n.createShowHideFn = g;
        function d(m) {
          var f = g(m), l = f.showImgTooltip, u = f.hideImgTooltip;
          m.txt.eventHooks.imgClickEvents.push(l), m.txt.eventHooks.clickEvents.push(u), m.txt.eventHooks.keyupEvents.push(u), m.txt.eventHooks.toolbarClickEvents.push(u), m.txt.eventHooks.menuClickEvents.push(u), m.txt.eventHooks.textScrollEvents.push(u), m.txt.eventHooks.imgDragBarMouseDownEvents.push(u), m.txt.eventHooks.changeEvents.push(u);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(i) {
          var c = i.txt, g = i.selection, d = c.eventHooks.keydownEvents;
          d.push(function(m) {
            var f = g.getSelectionContainerElem(), l = g.getRange();
            if (!(!l || !f || m.keyCode !== 8 || !g.isSelectionEmpty())) {
              var u = l.startContainer, s = l.startOffset, p = null;
              if (s === 0)
                for (; u !== f.elems[0] && f.elems[0].contains(u) && u.parentNode && !p; ) {
                  if (u.previousSibling) {
                    p = u.previousSibling;
                    break;
                  }
                  u = u.parentNode;
                }
              else
                u.nodeType !== 3 && (p = u.childNodes[s - 1]);
              if (!!p) {
                for (var v = p; v.childNodes.length; )
                  v = v.childNodes[v.childNodes.length - 1];
                v instanceof HTMLElement && v.tagName === "IMG" && (v.remove(), m.preventDefault());
              }
            }
          });
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26)), i = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(3)), d = t(6), m = c.__importDefault(t(97));
        function f(l) {
          var u, s = l.config, p = new m.default(l), v = d.getRandom("up-trigger-id"), h = d.getRandom("up-file-id"), y = d.getRandom("input-link-url"), A = d.getRandom("input-link-url-alt"), x = d.getRandom("input-link-url-href"), S = d.getRandom("btn-link"), D = "menus.panelMenus.image.", I = function(b, $) {
            return $ === void 0 && ($ = D), l.i18next.t($ + b);
          };
          function C(O, b, $) {
            var H = s.linkImgCheck(O);
            return H === !0 ? !0 : (typeof H == "string" && s.customAlert(H, "error"), !1);
          }
          var E = s.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', T = (0, r.default)(u = s.uploadImgAccept).call(u, function(O) {
            return "image/" + O;
          }).join(","), R = function(b, $, H) {
            return '<div class="' + b + '" data-title="' + H + `">
            <div id="` + v + `" class="w-e-up-btn">
                <i class="` + $ + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + h + '" type="file" ' + E + ' accept="' + T + `"/>
            </div>
        </div>`;
          }, N = [
            {
              selector: "#" + v,
              type: "click",
              fn: function() {
                var b = s.uploadImgFromMedia;
                if (b && typeof b == "function")
                  return b(), !0;
                var $ = g.default("#" + h), H = $.elems[0];
                if (H)
                  H.click();
                else
                  return !0;
              }
            },
            {
              selector: "#" + h,
              type: "change",
              fn: function() {
                var b = g.default("#" + h), $ = b.elems[0];
                if (!$)
                  return !0;
                var H = $.files;
                return H != null && H.length && p.uploadImg(H), $ && ($.value = ""), !0;
              }
            }
          ], M = [`<input
            id="` + y + `"
            type="text"
            class="block"
            placeholder="` + I("\u56FE\u7247\u5730\u5740") + '"/>'];
          s.showLinkImgAlt && M.push(`
        <input
            id="` + A + `"
            type="text"
            class="block"
            placeholder="` + I("\u56FE\u7247\u6587\u5B57\u8BF4\u660E") + '"/>'), s.showLinkImgHref && M.push(`
        <input
            id="` + x + `"
            type="text"
            class="block"
            placeholder="` + I("\u8DF3\u8F6C\u94FE\u63A5") + '"/>');
          var B = [
            {
              title: I("\u4E0A\u4F20\u56FE\u7247"),
              tpl: R("w-e-up-img-container", "w-e-icon-upload2", ""),
              events: N
            },
            {
              title: I("\u7F51\u7EDC\u56FE\u7247"),
              tpl: `<div>
                    ` + M.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + S + '" class="right">' + I("\u63D2\u5165", "") + `</button>
                    </div>
                </div>`,
              events: [{
                selector: "#" + S,
                type: "click",
                fn: function() {
                  var b, $ = g.default("#" + y), H = (0, i.default)(b = $.val()).call(b);
                  if (!!H) {
                    var j;
                    if (s.showLinkImgAlt) {
                      var G;
                      j = (0, i.default)(G = g.default("#" + A).val()).call(G);
                    }
                    var U;
                    if (s.showLinkImgHref) {
                      var W;
                      U = (0, i.default)(W = g.default("#" + x).val()).call(W);
                    }
                    if (!!C(H))
                      return p.insertImg(H, j, U), !0;
                  }
                },
                bindEnter: !0
              }]
            }
          ], F = {
            width: 300,
            height: 0,
            tabs: [],
            onlyUploadConf: {
              $elem: g.default(R("w-e-menu", "w-e-icon-image", "\u56FE\u7247")),
              events: N
            }
          };
          return window.FileReader && (s.uploadImgShowBase64 || s.uploadImgServer || s.customUploadImg || s.uploadImgFromMedia) && F.tabs.push(B[0]), s.showLinkImg && (F.tabs.push(B[1]), F.onlyUploadConf = void 0), F;
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = i.__importDefault(t(24)), d = i.__importDefault(t(366)), m = function(f) {
          i.__extends(l, f);
          function l(u) {
            var s = this, p = c.default(`<div class="w-e-menu" data-title="\u7F29\u8FDB">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), v = {
              width: 130,
              title: "\u8BBE\u7F6E\u7F29\u8FDB",
              type: "list",
              list: [{
                $elem: c.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB") + `
                        <p>`),
                value: "increase"
              }, {
                $elem: c.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB") + `
                        <p>`),
                value: "decrease"
              }],
              clickHandler: function(y) {
                s.command(y);
              }
            };
            return s = f.call(this, p, u, v) || this, s;
          }
          return l.prototype.command = function(u) {
            var s = this.editor, p = s.selection.getSelectionContainerElem();
            if (p && s.$textElem.equal(p)) {
              var v = s.selection.getSelectionRangeTopNodes();
              v.length > 0 && (0, r.default)(v).call(v, function(h) {
                d.default(c.default(h), u, s);
              });
            } else
              p && p.length > 0 && (0, r.default)(p).call(p, function(h) {
                d.default(c.default(h), u, s);
              });
            s.selection.restoreSelection(), this.tryChangeActive();
          }, l.prototype.tryChangeActive = function() {
            var u = this.editor, s = u.selection.getSelectionStartElem(), p = c.default(s).getNodeTop(u);
            p.length <= 0 || (p.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
          }, l;
        }(g.default);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45)), i = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(367)), d = c.__importDefault(t(368)), m = /^(\d+)(\w+)$/, f = /^(\d+)%$/;
        function l(s) {
          var p = s.config.indentation;
          if (typeof p == "string") {
            if (m.test(p)) {
              var v, h = (0, r.default)(v = (0, i.default)(p).call(p).match(m)).call(v, 1, 3), y = h[0], A = h[1];
              return {
                value: Number(y),
                unit: A
              };
            } else if (f.test(p))
              return {
                value: Number((0, i.default)(p).call(p).match(f)[1]),
                unit: "%"
              };
          } else if (p.value !== void 0 && p.unit)
            return p;
          return {
            value: 2,
            unit: "em"
          };
        }
        function u(s, p, v) {
          var h = s.getNodeTop(v), y = /^(P|H[0-9]*)$/;
          y.test(h.getNodeName()) && (p === "increase" ? g.default(h, l(v)) : p === "decrease" && d.default(h, l(v)));
        }
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function i(c, g) {
          var d = c.elems[0];
          if (d.style.paddingLeft === "")
            c.css("padding-left", g.value + g.unit);
          else {
            var m = d.style.paddingLeft, f = (0, r.default)(m).call(m, 0, m.length - g.unit.length), l = Number(f) + g.value;
            c.css("padding-left", "" + l + g.unit);
          }
        }
        n.default = i;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function i(c, g) {
          var d = c.elems[0];
          if (d.style.paddingLeft !== "") {
            var m = d.style.paddingLeft, f = (0, r.default)(m).call(m, 0, m.length - g.unit.length), l = Number(f) - g.value;
            l > 0 ? c.css("padding-left", "" + l + g.unit) : c.css("padding-left", "");
          }
        }
        n.default = i;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(38)), g = r.__importDefault(t(33)), d = r.__importDefault(t(370)), m = function(f) {
          r.__extends(l, f);
          function l(u) {
            var s = this, p = i.default(`<div class="w-e-menu" data-title="\u8868\u60C5">
                <i class="w-e-icon-happy"></i>
            </div>`);
            return s = f.call(this, p, u) || this, s;
          }
          return l.prototype.createPanel = function() {
            var u = d.default(this.editor), s = new g.default(this, u);
            s.create();
          }, l.prototype.clickHandler = function() {
            this.createPanel();
          }, l.prototype.tryChangeActive = function() {
          }, l;
        }(c.default);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26)), i = e(t(70)), c = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = g.__importDefault(t(3));
        function m(f) {
          var l = f.config.emotions;
          function u(v) {
            var h = [];
            if (v.type == "image") {
              var y;
              h = (0, r.default)(y = v.content).call(y, function(x) {
                return typeof x == "string" ? "" : '<span  title="' + x.alt + `">
                    <img class="eleImg" data-emoji="` + x.alt + '" style src="' + x.src + '" alt="[' + x.alt + `]">
                </span>`;
              }), h = (0, i.default)(h).call(h, function(x) {
                return x !== "";
              });
            } else {
              var A;
              h = (0, r.default)(A = v.content).call(A, function(x) {
                return '<span class="eleImg" title="' + x + '">' + x + "</span>";
              });
            }
            return h.join("").replace(/&nbsp;/g, "");
          }
          var s = (0, r.default)(l).call(l, function(v) {
            return {
              title: f.i18next.t("menus.panelMenus.emoticon." + v.title),
              tpl: "<div>" + u(v) + "</div>",
              events: [{
                selector: ".eleImg",
                type: "click",
                fn: function(y) {
                  var A = d.default(y.target), x = A.getNodeName(), S;
                  if (x === "IMG") {
                    var D;
                    S = (0, c.default)(D = A.parent().html()).call(D);
                  } else
                    S = "<span>" + A.html() + "</span>";
                  return f.cmd.do("insertHTML", S), !0;
                }
              }]
            };
          }), p = {
            width: 300,
            height: 230,
            tabs: s
          };
          return p;
        }
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createListHandle = n.ClassType = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(372)), g = r.__importDefault(t(374)), d = r.__importDefault(t(375)), m = r.__importDefault(t(376)), f = r.__importDefault(t(377)), l;
        (function(v) {
          v.Wrap = "WrapListHandle", v.Join = "JoinListHandle", v.StartJoin = "StartJoinListHandle", v.EndJoin = "EndJoinListHandle", v.Other = "OtherListHandle";
        })(l = n.ClassType || (n.ClassType = {}));
        var u = {
          WrapListHandle: c.default,
          JoinListHandle: g.default,
          StartJoinListHandle: d.default,
          EndJoinListHandle: m.default,
          OtherListHandle: f.default
        };
        function s(v, h, y) {
          if (v === l.Other && y === void 0)
            throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
          return v !== l.Other ? new u[v](h) : new u[v](h, y);
        }
        n.createListHandle = s;
        var p = function() {
          function v(h) {
            this.handle = h, this.handle.exec();
          }
          return v.prototype.getSelectionRangeElem = function() {
            return i.default(this.handle.selectionRangeElem.get());
          }, v;
        }();
        n.default = p;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(58), d = t(47), m = function(f) {
          i.__extends(l, f);
          function l(u) {
            return f.call(this, u) || this;
          }
          return l.prototype.exec = function() {
            var u = this.options, s = u.listType, p = u.listTarget, v = u.$selectionElem, h = u.$startElem, y = u.$endElem, A, x = [], S = v == null ? void 0 : v.getNodeName(), D = h.prior, I = y.prior;
            if (!h.prior && !y.prior || !(D != null && D.prev().length) && !(I != null && I.next().length)) {
              var C;
              (0, r.default)(C = v == null ? void 0 : v.children()).call(C, function(F) {
                x.push(c.default(F));
              }), S === s ? A = d.createElementFragment(
                x,
                d.createDocumentFragment(),
                "p"
              ) : (A = d.createElement(p), (0, r.default)(x).call(x, function(F) {
                A.appendChild(F.elems[0]);
              })), this.selectionRangeElem.set(A), d.insertBefore(v, A, v.elems[0]), v.remove();
            } else {
              for (var E = D; E.length; )
                x.push(E), I != null && I.equal(E) ? E = c.default(void 0) : E = E.next();
              var T = D.prev(), R = I.next();
              if (S === s ? A = d.createElementFragment(
                x,
                d.createDocumentFragment(),
                "p"
              ) : (A = d.createElement(p), (0, r.default)(x).call(x, function(F) {
                A.append(F.elems[0]);
              })), T.length && R.length) {
                for (var N = []; R.length; )
                  N.push(R), R = R.next();
                var M = d.createElement(S);
                (0, r.default)(N).call(N, function(F) {
                  M.append(F.elems[0]);
                }), c.default(M).insertAfter(v), this.selectionRangeElem.set(A);
                var B = v.next();
                B.length ? d.insertBefore(v, A, B.elems[0]) : v.parent().elems[0].append(A);
              } else if (!T.length)
                this.selectionRangeElem.set(A), d.insertBefore(v, A, v.elems[0]);
              else {
                this.selectionRangeElem.set(A);
                var B = v.next();
                B.length ? d.insertBefore(v, A, B.elems[0]) : v.parent().elems[0].append(A);
              }
            }
          }, l;
        }(g.ListHandle);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = function() {
          function c() {
            this._element = null;
          }
          return c.prototype.set = function(g) {
            if (g instanceof DocumentFragment) {
              var d, m = [];
              (0, r.default)(d = g.childNodes).call(d, function(f) {
                m.push(f);
              }), g = m;
            }
            this._element = g;
          }, c.prototype.get = function() {
            return this._element;
          }, c.prototype.clear = function() {
            this._element = null;
          }, c;
        }();
        n.default = i;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(58), d = t(47), m = function(f) {
          i.__extends(l, f);
          function l(u) {
            return f.call(this, u) || this;
          }
          return l.prototype.exec = function() {
            var u, s, p, v, h, y, A, x = this.options, S = x.editor, D = x.listType, I = x.listTarget, C = x.$startElem, E = x.$endElem, T, R = S.selection.getSelectionRangeTopNodes(), N = C == null ? void 0 : C.getNodeName(), M = E == null ? void 0 : E.getNodeName();
            if (N === M)
              if (R.length > 2)
                if (R.shift(), R.pop(), T = d.createElementFragment(
                  d.filterSelectionNodes(R),
                  d.createDocumentFragment()
                ), N === D)
                  (u = E.children()) === null || u === void 0 || (0, r.default)(u).call(u, function(K) {
                    T.append(K);
                  }), E.remove(), this.selectionRangeElem.set(T), C.elems[0].append(T);
                else {
                  for (var B = document.createDocumentFragment(), F = document.createDocumentFragment(), O = d.getStartPoint(C); O.length; ) {
                    var b = O.elems[0];
                    O = O.next(), B.append(b);
                  }
                  for (var $ = d.getEndPoint(E), H = []; $.length; )
                    H.unshift($.elems[0]), $ = $.prev();
                  (0, r.default)(H).call(H, function(K) {
                    F.append(K);
                  });
                  var j = d.createElement(I);
                  j.append(B), j.append(T), j.append(F), T = j, this.selectionRangeElem.set(T), c.default(j).insertAfter(C), !(!((s = C.children()) === null || s === void 0) && s.length) && C.remove(), !(!((p = E.children()) === null || p === void 0) && p.length) && E.remove();
                }
              else {
                R.length = 0;
                for (var O = d.getStartPoint(C); O.length; )
                  R.push(O), O = O.next();
                for (var $ = d.getEndPoint(E), H = []; $.length; )
                  H.unshift($), $ = $.prev();
                R.push.apply(R, H), N === D ? (T = d.createElementFragment(R, d.createDocumentFragment(), "p"), this.selectionRangeElem.set(T), d.insertBefore(C, T, E.elems[0])) : (T = d.createElement(I), (0, r.default)(R).call(R, function(J) {
                  T.append(J.elems[0]);
                }), this.selectionRangeElem.set(T), c.default(T).insertAfter(C)), !(!((v = C.children()) === null || v === void 0) && v.length) && E.remove(), !(!((h = E.children()) === null || h === void 0) && h.length) && E.remove();
              }
            else {
              for (var G = [], $ = d.getEndPoint(E); $.length; )
                G.unshift($), $ = $.prev();
              for (var U = [], O = d.getStartPoint(C); O.length; )
                U.push(O), O = O.next();
              if (T = d.createDocumentFragment(), R.shift(), R.pop(), (0, r.default)(U).call(U, function(Y) {
                return T.append(Y.elems[0]);
              }), T = d.createElementFragment(
                d.filterSelectionNodes(R),
                T
              ), (0, r.default)(G).call(G, function(Y) {
                return T.append(Y.elems[0]);
              }), this.selectionRangeElem.set(T), N === D)
                C.elems[0].append(T), !(!((y = E.children()) === null || y === void 0) && y.length) && E.remove();
              else if (!((A = E.children()) === null || A === void 0) && A.length) {
                var W = E.children();
                d.insertBefore(W, T, W.elems[0]);
              } else
                E.elems[0].append(T);
            }
          }, l;
        }(g.ListHandle);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(58), d = t(47), m = function(f) {
          i.__extends(l, f);
          function l(u) {
            return f.call(this, u) || this;
          }
          return l.prototype.exec = function() {
            var u, s = this.options, p = s.editor, v = s.listType, h = s.listTarget, y = s.$startElem, A, x = p.selection.getSelectionRangeTopNodes(), S = y == null ? void 0 : y.getNodeName();
            x.shift();
            for (var D = [], I = d.getStartPoint(y); I.length; )
              D.push(I), I = I.next();
            S === v ? (A = d.createDocumentFragment(), (0, r.default)(D).call(D, function(C) {
              return A.append(C.elems[0]);
            }), A = d.createElementFragment(
              d.filterSelectionNodes(x),
              A
            ), this.selectionRangeElem.set(A), y.elems[0].append(A)) : (A = d.createElement(h), (0, r.default)(D).call(D, function(C) {
              return A.append(C.elems[0]);
            }), A = d.createElementFragment(
              d.filterSelectionNodes(x),
              A
            ), this.selectionRangeElem.set(A), c.default(A).insertAfter(y), !(!((u = y.children()) === null || u === void 0) && u.length) && y.remove());
          }, l;
        }(g.ListHandle);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(58), d = t(47), m = function(f) {
          i.__extends(l, f);
          function l(u) {
            return f.call(this, u) || this;
          }
          return l.prototype.exec = function() {
            var u, s, p = this.options, v = p.editor, h = p.listType, y = p.listTarget, A = p.$endElem, x, S = v.selection.getSelectionRangeTopNodes(), D = A == null ? void 0 : A.getNodeName();
            S.pop();
            for (var I = [], C = d.getEndPoint(A); C.length; )
              I.unshift(C), C = C.prev();
            if (D === h)
              if (x = d.createElementFragment(
                d.filterSelectionNodes(S),
                d.createDocumentFragment()
              ), (0, r.default)(I).call(I, function(R) {
                return x.append(R.elems[0]);
              }), this.selectionRangeElem.set(x), !((u = A.children()) === null || u === void 0) && u.length) {
                var E = A.children();
                d.insertBefore(E, x, E.elems[0]);
              } else
                A.elems[0].append(x);
            else {
              var T = d.filterSelectionNodes(S);
              T.push.apply(T, I), x = d.createElementFragment(
                T,
                d.createElement(y)
              ), this.selectionRangeElem.set(x), c.default(x).insertBefore(A), !(!((s = A.children()) === null || s === void 0) && s.length) && A.remove();
            }
          }, l;
        }(g.ListHandle);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = t(58), c = t(47), g = function(d) {
          r.__extends(m, d);
          function m(f, l) {
            var u = d.call(this, f) || this;
            return u.range = l, u;
          }
          return m.prototype.exec = function() {
            var f = this.options, l = f.editor, u = f.listTarget, s = l.selection.getSelectionRangeTopNodes(), p = c.createElementFragment(
              c.filterSelectionNodes(s),
              c.createElement(u)
            );
            this.selectionRangeElem.set(p), this.range.insertNode(p);
          }, m;
        }(i.ListHandle);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(24)), d = c.__importDefault(t(3)), m = c.__importDefault(t(379)), f = function(l) {
          c.__extends(u, l);
          function u(s) {
            var p = this, v = d.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`), h = new m.default(s, s.config.lineHeights), y = {
              width: 100,
              title: "\u8BBE\u7F6E\u884C\u9AD8",
              type: "list",
              list: h.getItemList(),
              clickHandler: function(x) {
                s.selection.saveRange(), p.command(x);
              }
            };
            return p = l.call(this, v, s, y) || this, p;
          }
          return u.prototype.command = function(s) {
            var p = this.editor;
            p.selection.restoreSelection();
            var v = d.default(p.selection.getSelectionContainerElem());
            if (!!v.elems.length) {
              if (v && p.$textElem.equal(v)) {
                for (var h = !1, y = d.default(p.selection.getSelectionStartElem()).elems[0], A = d.default(p.selection.getSelectionEndElem()).elems[0], x = this.getDom(y), S = this.getDom(A), D = v.elems[0].children, I = 0; I < D.length; I++) {
                  var C = D[I];
                  if (d.default(C).getNodeName() === "P" && (C === x && (h = !0), h && (d.default(C).css("line-height", s), C === S))) {
                    h = !1;
                    return;
                  }
                }
                p.selection.createRangeByElems(y, A);
                return;
              }
              var E = v.elems[0], T = this.getDom(E);
              d.default(T).getNodeName() === "P" && (d.default(T).css("line-height", s), p.selection.createRangeByElems(T, T));
            }
          }, u.prototype.getDom = function(s) {
            var p = d.default(s).elems[0];
            if (!p.parentNode)
              return p;
            function v(h, y) {
              var A = d.default(h.parentNode);
              return y.$textElem.equal(A) ? h : v(A.elems[0], y);
            }
            return p = v(p, this.editor), p;
          }, u.prototype.styleProcessing = function(s) {
            var p = "";
            return (0, r.default)(s).call(s, function(v) {
              v !== "" && (0, i.default)(v).call(v, "line-height") === -1 && (p = p + v + ";");
            }), p;
          }, u.prototype.setRange = function(s, p) {
            var v = this.editor, h = window.getSelection ? window.getSelection() : document.getSelection();
            h == null || h.removeAllRanges();
            var y = document.createRange(), A = s, x = p;
            y.setStart(A, 0), y.setEnd(x, 1), h == null || h.addRange(y), v.selection.saveRange(), h == null || h.removeAllRanges(), v.selection.restoreSelection();
          }, u.prototype.tryChangeActive = function() {
            var s = this.editor, p = s.selection.getSelectionContainerElem();
            if (!(p && s.$textElem.equal(p))) {
              var v = d.default(s.selection.getSelectionStartElem());
              if (v.length !== 0) {
                v = this.getDom(v.elems[0]);
                var h = v.getAttribute("style") ? v.getAttribute("style") : "";
                h && (0, i.default)(h).call(h, "line-height") !== -1 ? this.active() : this.unActive();
              }
            }
          }, u;
        }(g.default);
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = function() {
          function d(m, f) {
            var l = this;
            this.itemList = [{
              $elem: c.default("<span>" + m.i18next.t("\u9ED8\u8BA4") + "</span>"),
              value: ""
            }], (0, r.default)(f).call(f, function(u) {
              l.itemList.push({
                $elem: c.default("<span>" + u + "</span>"),
                value: u
              });
            });
          }
          return d.prototype.getItemList = function() {
            return this.itemList;
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(23)), g = function(d) {
          r.__extends(m, d);
          function m(f) {
            var l = this, u = i.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return m.prototype.clickHandler = function() {
            var f = this.editor;
            f.history.revoke();
            var l = f.$textElem.children();
            if (!!(l != null && l.length)) {
              var u = l.last();
              f.selection.createRangeByElem(u, !1, !0), f.selection.restoreSelection();
            }
          }, m.prototype.tryChangeActive = function() {
            this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
          }, m;
        }(c.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(23)), g = function(d) {
          r.__extends(m, d);
          function m(f) {
            var l = this, u = i.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return m.prototype.clickHandler = function() {
            var f = this.editor;
            f.history.restore();
            var l = f.$textElem.children();
            if (!!(l != null && l.length)) {
              var u = l.last();
              f.selection.createRangeByElem(u, !1, !0), f.selection.restoreSelection();
            }
          }, m.prototype.tryChangeActive = function() {
            this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
          }, m;
        }(c.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(38)), c = r.__importDefault(t(3)), g = r.__importDefault(t(383)), d = r.__importDefault(t(33)), m = r.__importDefault(t(392)), f = function(l) {
          r.__extends(u, l);
          function u(s) {
            var p = this, v = c.default('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
            return p = l.call(this, v, s) || this, m.default(s), p;
          }
          return u.prototype.clickHandler = function() {
            this.createPanel();
          }, u.prototype.createPanel = function() {
            var s = g.default(this.editor), p = new d.default(this, s);
            p.create();
          }, u.prototype.tryChangeActive = function() {
          }, u;
        }(i.default);
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(384));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = t(6), g = i.__importDefault(t(3));
        t(389);
        var d = i.__importDefault(t(391));
        function m(l) {
          return l > 0 && (0, r.default)(l);
        }
        function f(l) {
          var u = new d.default(l), s = c.getRandom("w-col-id"), p = c.getRandom("w-row-id"), v = c.getRandom("btn-link"), h = "menus.panelMenus.table.", y = function(D) {
            return l.i18next.t(D);
          }, A = [{
            title: y(h + "\u63D2\u5165\u8868\u683C"),
            tpl: `<div>
                    <div class="w-e-table">
                        <span>` + y("\u521B\u5EFA") + `</span>
                        <input id="` + p + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + y(h + "\u884C") + `</span>
                        <input id="` + s + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (y(h + "\u5217") + y(h + "\u7684") + y(h + "\u8868\u683C")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + v + '" class="right">' + y("\u63D2\u5165") + `</button>
                    </div>
                </div>`,
            events: [{
              selector: "#" + v,
              type: "click",
              fn: function() {
                var D = Number(g.default("#" + s).val()), I = Number(g.default("#" + p).val());
                return m(I) && m(D) ? (u.createAction(I, D), !0) : (l.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning"), !1);
              },
              bindEnter: !0
            }]
          }], x = {
            width: 330,
            height: 0,
            tabs: []
          };
          return x.tabs.push(A[0]), x;
        }
        n.default = f;
      },
      function(o, n, t) {
        o.exports = t(385);
      },
      function(o, n, t) {
        var e = t(386);
        o.exports = e;
      },
      function(o, n, t) {
        t(387);
        var e = t(9);
        o.exports = e.Number.isInteger;
      },
      function(o, n, t) {
        var e = t(5), a = t(388);
        e({ target: "Number", stat: !0 }, {
          isInteger: a
        });
      },
      function(o, n, t) {
        var e = t(13), a = Math.floor;
        o.exports = function(i) {
          return !e(i) && isFinite(i) && a(i) === i;
        };
      },
      function(o, n, t) {
        var e = t(20), a = t(390);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = t(7), c = r.__importDefault(t(3)), g = function() {
          function d(m) {
            this.editor = m;
          }
          return d.prototype.createAction = function(m, f) {
            var l = this.editor, u = c.default(l.selection.getSelectionContainerElem()), s = c.default(u.elems[0]).parentUntilEditor("UL", l), p = c.default(u.elems[0]).parentUntilEditor("OL", l);
            if (!(s || p)) {
              var v = this.createTableHtml(m, f);
              l.cmd.do("insertHTML", v);
            }
          }, d.prototype.createTableHtml = function(m, f) {
            for (var l = "", u = "", s = 0; s < m; s++) {
              u = "";
              for (var p = 0; p < f; p++)
                s === 0 ? u = u + "<th></th>" : u = u + "<td></td>";
              l = l + "<tr>" + u + "</tr>";
            }
            var v = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + l + ("</tbody></table>" + i.EMPTY_P);
            return v;
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(393)), c = t(400);
        function g(d) {
          i.default(d), c.bindEventKeyboardEvent(d), c.bindClickEvent(d);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(39)), g = r.__importDefault(t(394)), d = r.__importDefault(t(399)), m = t(7);
        function f(p) {
          var v;
          function h(A) {
            var x = new d.default(p), S = "menus.panelMenus.table.", D = function(E, T) {
              return T === void 0 && (T = S), p.i18next.t(T + E);
            }, I = [{
              $elem: i.default("<span>" + D("\u5220\u9664\u8868\u683C") + "</span>"),
              onClick: function(E, T) {
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", m.EMPTY_P), !0;
              }
            }, {
              $elem: i.default("<span>" + D("\u6DFB\u52A0\u884C") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = i.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                if (!M)
                  return !0;
                var B = Number(x.getCurrentRowIndex(T.elems[0], M)), F = x.getTableHtml(T.elems[0]), O = x.getTableHtml(g.default.ProcessingRow(i.default(F), B).elems[0]);
                return O = s(T, O), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", O), !0;
              }
            }, {
              $elem: i.default("<span>" + D("\u5220\u9664\u884C") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = i.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                if (!M)
                  return !0;
                var B = Number(x.getCurrentRowIndex(T.elems[0], M)), F = x.getTableHtml(T.elems[0]), O = g.default.DeleteRow(i.default(F), B).elems[0].children[0].children.length, b = "";
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), O === 0 ? b = m.EMPTY_P : b = x.getTableHtml(g.default.DeleteRow(i.default(F), B).elems[0]), b = s(T, b), E.cmd.do("insertHTML", b), !0;
              }
            }, {
              $elem: i.default("<span>" + D("\u6DFB\u52A0\u5217") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = i.default(E.selection.getSelectionStartElem()), M = x.getCurrentColIndex(N.elems[0]), B = x.getTableHtml(T.elems[0]), F = x.getTableHtml(g.default.ProcessingCol(i.default(B), M).elems[0]);
                return F = s(T, F), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
              }
            }, {
              $elem: i.default("<span>" + D("\u5220\u9664\u5217") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = i.default(E.selection.getSelectionStartElem()), M = x.getCurrentColIndex(N.elems[0]), B = x.getTableHtml(T.elems[0]), F = g.default.DeleteCol(i.default(B), M), O = F.elems[0].children[0].children[0].children.length, b = "";
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), O === 0 ? b = m.EMPTY_P : b = x.getTableHtml(F.elems[0]), b = s(T, b), E.cmd.do("insertHTML", b), !0;
              }
            }, {
              $elem: i.default("<span>" + D("\u8BBE\u7F6E\u8868\u5934") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = i.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                if (!M)
                  return !0;
                var B = Number(x.getCurrentRowIndex(T.elems[0], M));
                B !== 0 && (B = 0);
                var F = x.getTableHtml(T.elems[0]), O = x.getTableHtml(g.default.setTheHeader(i.default(F), B, "th").elems[0]);
                return O = s(T, O), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", O), !0;
              }
            }, {
              $elem: i.default("<span>" + D("\u53D6\u6D88\u8868\u5934") + "</span>"),
              onClick: function(E, T) {
                var R = i.default(E.selection.getSelectionStartElem()), N = x.getRowNode(R.elems[0]);
                if (!N)
                  return !0;
                var M = Number(x.getCurrentRowIndex(T.elems[0], N));
                M !== 0 && (M = 0);
                var B = x.getTableHtml(T.elems[0]), F = x.getTableHtml(g.default.setTheHeader(i.default(B), M, "td").elems[0]);
                return F = s(T, F), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
              }
            }];
            v = new c.default(p, A, I), v.create();
          }
          function y() {
            v && (v.remove(), v = null);
          }
          return {
            showTableTooltip: h,
            hideTableTooltip: y
          };
        }
        function l(p) {
          var v = p.selection.getSelectionStartElem(), h = p.selection.getSelectionEndElem();
          return (v == null ? void 0 : v.elems[0]) !== (h == null ? void 0 : h.elems[0]);
        }
        function u(p) {
          var v = f(p), h = v.showTableTooltip, y = v.hideTableTooltip;
          p.txt.eventHooks.tableClickEvents.push(h), p.txt.eventHooks.clickEvents.push(y), p.txt.eventHooks.keyupEvents.push(y), p.txt.eventHooks.toolbarClickEvents.push(y), p.txt.eventHooks.menuClickEvents.push(y), p.txt.eventHooks.textScrollEvents.push(y);
        }
        n.default = u;
        function s(p, v) {
          var h = p.elems[0].nextSibling;
          return (!h || h.innerHTML === "<br>") && (v += "" + m.EMPTY_P), v;
        }
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45)), i = e(t(91)), c = e(t(4)), g = e(t(138));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var d = t(2), m = d.__importDefault(t(3));
        function f(y, A) {
          for (var x = h(y), S = (0, r.default)(Array.prototype).apply(x.children), D = S[0].children.length, I = document.createElement("tr"), C = 0; C < D; C++) {
            var E = document.createElement("td");
            I.appendChild(E);
          }
          return (0, i.default)(S).call(S, A + 1, 0, I), v(x, S), m.default(x.parentNode);
        }
        function l(y, A) {
          for (var x = h(y), S = (0, r.default)(Array.prototype).apply(x.children), D = function(E) {
            var T, R = [];
            for ((0, c.default)(T = (0, g.default)(S[E].children)).call(T, function(B) {
              R.push(B);
            }); S[E].children.length !== 0; )
              S[E].removeChild(S[E].children[0]);
            var N = m.default(R[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
            (0, i.default)(R).call(R, A + 1, 0, N);
            for (var M = 0; M < R.length; M++)
              S[E].appendChild(R[M]);
          }, I = 0; I < S.length; I++)
            D(I);
          return v(x, S), m.default(x.parentNode);
        }
        function u(y, A) {
          var x = h(y), S = (0, r.default)(Array.prototype).apply(x.children);
          return (0, i.default)(S).call(S, A, 1), v(x, S), m.default(x.parentNode);
        }
        function s(y, A) {
          for (var x = h(y), S = (0, r.default)(Array.prototype).apply(x.children), D = function(E) {
            var T, R = [];
            for ((0, c.default)(T = (0, g.default)(S[E].children)).call(T, function(M) {
              R.push(M);
            }); S[E].children.length !== 0; )
              S[E].removeChild(S[E].children[0]);
            (0, i.default)(R).call(R, A, 1);
            for (var N = 0; N < R.length; N++)
              S[E].appendChild(R[N]);
          }, I = 0; I < S.length; I++)
            D(I);
          return v(x, S), m.default(x.parentNode);
        }
        function p(y, A, x) {
          for (var S = h(y), D = (0, r.default)(Array.prototype).apply(S.children), I = D[A].children, C = document.createElement("tr"), E = function(N) {
            var M, B = document.createElement(x), F = I[N];
            (0, c.default)(M = (0, g.default)(F.childNodes)).call(M, function(O) {
              B.appendChild(O);
            }), C.appendChild(B);
          }, T = 0; T < I.length; T++)
            E(T);
          return (0, i.default)(D).call(D, A, 1, C), v(S, D), m.default(S.parentNode);
        }
        function v(y, A) {
          for (; y.children.length !== 0; )
            y.removeChild(y.children[0]);
          for (var x = 0; x < A.length; x++)
            y.appendChild(A[x]);
        }
        function h(y) {
          var A = y.elems[0].children[0];
          return A.nodeName === "COLGROUP" && (A = y.elems[0].children[y.elems[0].children.length - 1]), A;
        }
        n.default = {
          ProcessingRow: f,
          ProcessingCol: l,
          DeleteRow: u,
          DeleteCol: s,
          setTheHeader: p
        };
      },
      function(o, n, t) {
        var e = t(396);
        o.exports = e;
      },
      function(o, n, t) {
        t(50), t(397);
        var e = t(9);
        o.exports = e.Array.from;
      },
      function(o, n, t) {
        var e = t(5), a = t(398), r = t(115), i = !r(function(c) {
          Array.from(c);
        });
        e({ target: "Array", stat: !0, forced: i }, {
          from: a
        });
      },
      function(o, n, t) {
        var e = t(40), a = t(31), r = t(114), i = t(112), c = t(35), g = t(69), d = t(113);
        o.exports = function(f) {
          var l = a(f), u = typeof this == "function" ? this : Array, s = arguments.length, p = s > 1 ? arguments[1] : void 0, v = p !== void 0, h = d(l), y = 0, A, x, S, D, I, C;
          if (v && (p = e(p, s > 2 ? arguments[2] : void 0, 2)), h != null && !(u == Array && i(h)))
            for (D = h.call(l), I = D.next, x = new u(); !(S = I.call(D)).done; y++)
              C = v ? r(D, p, [S.value, y], !0) : S.value, g(x, y, C);
          else
            for (A = c(l.length), x = new u(A); A > y; y++)
              C = v ? p(l[y], y) : l[y], g(x, y, C);
          return x.length = y, x;
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(138));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(3)), d = function() {
          function m(f) {
            this.editor = f;
          }
          return m.prototype.getRowNode = function(f) {
            var l, u = g.default(f).elems[0];
            return u.parentNode && (u = (l = g.default(u).parentUntil("TR", u)) === null || l === void 0 ? void 0 : l.elems[0]), u;
          }, m.prototype.getCurrentRowIndex = function(f, l) {
            var u, s = 0, p = f.children[0];
            return p.nodeName === "COLGROUP" && (p = f.children[f.children.length - 1]), (0, r.default)(u = (0, i.default)(p.children)).call(u, function(v, h) {
              v === l && (s = h);
            }), s;
          }, m.prototype.getCurrentColIndex = function(f) {
            var l, u, s = 0, p = g.default(f).getNodeName() === "TD" || g.default(f).getNodeName() === "TH" ? f : (u = g.default(f).parentUntil("TD", f)) === null || u === void 0 ? void 0 : u.elems[0], v = g.default(p).parent();
            return (0, r.default)(l = (0, i.default)(v.elems[0].children)).call(l, function(h, y) {
              h === p && (s = y);
            }), s;
          }, m.prototype.getTableHtml = function(f) {
            var l = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + g.default(f).html() + "</table>";
            return l;
          }, m;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.bindEventKeyboardEvent = n.bindClickEvent = void 0;
        var r = t(2), i = r.__importDefault(t(3));
        function c(m) {
          if (!m.length)
            return !1;
          var f = m.elems[0];
          return f.nodeName === "P" && f.innerHTML === "<br>";
        }
        function g(m) {
          function f(l, u) {
            if (u.detail >= 3) {
              var s = window.getSelection();
              if (s) {
                var p = s.focusNode, v = s.anchorNode, h = i.default(v == null ? void 0 : v.parentElement);
                if (!l.isContain(i.default(p))) {
                  var y = h.elems[0].tagName === "TD" ? h : h.parentUntilEditor("td", m);
                  if (y) {
                    var A = m.selection.getRange();
                    A == null || A.setEnd(y.elems[0], y.elems[0].childNodes.length), m.selection.restoreSelection();
                  }
                }
              }
            }
          }
          m.txt.eventHooks.tableClickEvents.push(f);
        }
        n.bindClickEvent = g;
        function d(m) {
          var f = m.txt, l = m.selection, u = f.eventHooks.keydownEvents;
          u.push(function(s) {
            m.selection.saveRange();
            var p = l.getSelectionContainerElem();
            if (p) {
              var v = p.getNodeTop(m), h = v.length && v.prev().length ? v.prev() : null;
              if (h && h.getNodeName() === "TABLE" && l.isSelectionEmpty() && l.getCursorPos() === 0 && s.keyCode === 8) {
                var y = v.next(), A = !!y.length;
                A && c(v) && (v.remove(), m.selection.setRangeToElem(y.elems[0])), s.preventDefault();
              }
            }
          });
        }
        n.bindEventKeyboardEvent = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.formatCodeHtml = void 0;
        var i = t(2), c = i.__importDefault(t(38)), g = i.__importDefault(t(3)), d = t(6), m = i.__importDefault(t(402)), f = i.__importDefault(t(139)), l = i.__importDefault(t(33)), u = i.__importDefault(t(403));
        function s(v, h) {
          if (!h)
            return h;
          return h = A(h), h = y(h), h = d.replaceSpecialSymbol(h), h;
          function y(x) {
            var S = x.match(/<pre[\s|\S]+?\/pre>/g);
            return S === null || (0, r.default)(S).call(S, function(D) {
              x = x.replace(D, D.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
            }), x;
          }
          function A(x) {
            var S, D = x.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
            if (!D || !D.length)
              return x;
            for (var I = (0, r.default)(S = d.deepClone(D)).call(S, function(E) {
              return E = E.replace(/<span\sclass="hljs[^>]+>/, ""), E.replace(/<\/span>/, "");
            }), C = 0; C < D.length; C++)
              x = x.replace(D[C], I[C]);
            return A(x);
          }
        }
        n.formatCodeHtml = s;
        var p = function(v) {
          i.__extends(h, v);
          function h(y) {
            var A = this, x = g.default('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
            return A = v.call(this, x, y) || this, u.default(y), A;
          }
          return h.prototype.insertLineCode = function(y) {
            var A = this.editor, x = g.default("<code>" + y + "</code>");
            A.cmd.do("insertElem", x), A.selection.createRangeByElem(x, !1), A.selection.restoreSelection();
          }, h.prototype.clickHandler = function() {
            var y = this.editor, A = y.selection.getSelectionText();
            this.isActive || (y.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(A));
          }, h.prototype.createPanel = function(y, A) {
            var x = m.default(this.editor, y, A), S = new l.default(this, x);
            S.create();
          }, h.prototype.tryChangeActive = function() {
            var y = this.editor;
            f.default(y) ? this.active() : this.unActive();
          }, h;
        }(c.default);
        n.default = p;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = t(6), g = i.__importDefault(t(3)), d = i.__importDefault(t(139)), m = t(7);
        function f(l, u, s) {
          var p, v = c.getRandom("input-iframe"), h = c.getRandom("select"), y = c.getRandom("btn-ok");
          function A(I, C) {
            var E, T = d.default(l);
            T && x();
            var R = (E = l.selection.getSelectionStartElem()) === null || E === void 0 ? void 0 : E.elems[0].innerHTML;
            R && l.cmd.do("insertHTML", m.EMPTY_P);
            var N = C.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            l.highlight && (N = l.highlight.highlightAuto(N).value), l.cmd.do("insertHTML", '<pre><code class="' + I + '">' + N + "</code></pre>");
            var M = l.selection.getSelectionStartElem(), B = M == null ? void 0 : M.getNodeTop(l);
            (B == null ? void 0 : B.getNextSibling().elems.length) === 0 && g.default(m.EMPTY_P).insertAfter(B);
          }
          function x() {
            if (!!d.default(l)) {
              var I = l.selection.getSelectionStartElem(), C = I == null ? void 0 : I.getNodeTop(l);
              !C || (l.selection.createRangeByElem(C), l.selection.restoreSelection());
            }
          }
          var S = function(C) {
            return l.i18next.t(C);
          }, D = {
            width: 500,
            height: 0,
            tabs: [{
              title: S("menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801"),
              tpl: `<div>
                        <select name="" id="` + h + `">
                            ` + (0, r.default)(p = l.config.languageType).call(p, function(I) {
                return "<option " + (s == I ? "selected" : "") + ' value ="' + I + '">' + I + "</option>";
              }) + `
                        </select>
                        <textarea id="` + v + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + u.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + y + '" class="right">' + (d.default(l) ? S("\u4FEE\u6539") : S("\u63D2\u5165")) + `</button>
                        </div>
                    </div>`,
              events: [
                {
                  selector: "#" + y,
                  type: "click",
                  fn: function() {
                    var C = document.getElementById(v), E = g.default("#" + h), T = E.val(), R = C.value;
                    if (!!R)
                      return d.default(l) ? !1 : (A(T, R), !0);
                  }
                }
              ]
            }]
          };
          return D;
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(404)), c = r.__importDefault(t(405));
        function g(d) {
          i.default(d), c.default(d);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(39));
        function g(m) {
          var f;
          function l(s) {
            var p = "menus.panelMenus.code.", v = function(A, x) {
              return x === void 0 && (x = p), m.i18next.t(x + A);
            }, h = [{
              $elem: i.default("<span>" + v("\u5220\u9664\u4EE3\u7801") + "</span>"),
              onClick: function(A, x) {
                return x.remove(), !0;
              }
            }];
            f = new c.default(m, s, h), f.create();
          }
          function u() {
            f && (f.remove(), f = null);
          }
          return {
            showCodeTooltip: l,
            hideCodeTooltip: u
          };
        }
        n.createShowHideFn = g;
        function d(m) {
          var f = g(m), l = f.showCodeTooltip, u = f.hideCodeTooltip;
          m.txt.eventHooks.codeClickEvents.push(l), m.txt.eventHooks.clickEvents.push(u), m.txt.eventHooks.toolbarClickEvents.push(u), m.txt.eventHooks.menuClickEvents.push(u), m.txt.eventHooks.textScrollEvents.push(u);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = t(7), c = r.__importDefault(t(3));
        function g(d) {
          var m = d.$textElem, f = d.selection, l = d.txt, u = l.eventHooks.keydownEvents;
          u.push(function(s) {
            var p;
            if (s.keyCode === 40) {
              var v = f.getSelectionContainerElem(), h = (p = m.children()) === null || p === void 0 ? void 0 : p.last();
              if ((v == null ? void 0 : v.elems[0].tagName) === "XMP" && (h == null ? void 0 : h.elems[0].tagName) === "PRE") {
                var y = c.default(i.EMPTY_P);
                m.append(y);
              }
            }
          }), u.push(function(s) {
            d.selection.saveRange();
            var p = f.getSelectionContainerElem();
            if (p) {
              var v = p.getNodeTop(d), h = v == null ? void 0 : v.prev(), y = v == null ? void 0 : v.getNextSibling();
              if (h.length && (h == null ? void 0 : h.getNodeName()) === "PRE" && y.length === 0 && f.getCursorPos() === 0 && s.keyCode === 8) {
                var A = c.default(i.EMPTY_P);
                m.append(A);
              }
            }
          });
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(23)), c = r.__importDefault(t(3)), g = r.__importDefault(t(407)), d = t(6), m = t(7), f = function(l) {
          r.__extends(u, l);
          function u(s) {
            var p = this, v = c.default('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
            return p = l.call(this, v, s) || this, g.default(s), p;
          }
          return u.prototype.clickHandler = function() {
            var s = this.editor, p = s.selection.getRange(), v = s.selection.getSelectionContainerElem();
            if (!!(v != null && v.length)) {
              var h = c.default(v.elems[0]), y = h.parentUntil("TABLE", v.elems[0]), A = h.children();
              h.getNodeName() !== "CODE" && (y && c.default(y.elems[0]).getNodeName() === "TABLE" || A && A.length !== 0 && c.default(A.elems[0]).getNodeName() === "IMG" && !(p != null && p.collapsed) || this.createSplitLine());
            }
          }, u.prototype.createSplitLine = function() {
            var s = "<hr/>" + m.EMPTY_P;
            d.UA.isFirefox && (s = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", s);
          }, u.prototype.tryChangeActive = function() {
          }, u;
        }(i.default);
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(408));
        function c(g) {
          i.default(g);
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(39));
        function g(m) {
          var f;
          function l(s) {
            var p = [{
              $elem: i.default("<span>" + m.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"),
              onClick: function(h, y) {
                return h.selection.createRangeByElem(y), h.selection.restoreSelection(), h.cmd.do("delete"), !0;
              }
            }];
            f = new c.default(m, s, p), f.create();
          }
          function u() {
            f && (f.remove(), f = null);
          }
          return {
            showSplitLineTooltip: l,
            hideSplitLineTooltip: u
          };
        }
        function d(m) {
          var f = g(m), l = f.showSplitLineTooltip, u = f.hideSplitLineTooltip;
          m.txt.eventHooks.splitLineEvents.push(l), m.txt.eventHooks.clickEvents.push(u), m.txt.eventHooks.keyupEvents.push(u), m.txt.eventHooks.toolbarClickEvents.push(u), m.txt.eventHooks.menuClickEvents.push(u), m.txt.eventHooks.textScrollEvents.push(u);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = i.__importDefault(t(23)), d = t(98), m = i.__importDefault(t(415)), f = i.__importDefault(t(140)), l = function(u) {
          i.__extends(s, u);
          function s(p) {
            var v = this, h = c.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
            return v = u.call(this, h, p) || this, m.default(p), v;
          }
          return s.prototype.clickHandler = function() {
            var p = this.editor;
            d.isAllTodo(p) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
          }, s.prototype.tryChangeActive = function() {
            d.isAllTodo(this.editor) ? this.active() : this.unActive();
          }, s.prototype.setTodo = function() {
            var p = this.editor, v = p.selection.getSelectionRangeTopNodes();
            (0, r.default)(v).call(v, function(h) {
              var y, A = h == null ? void 0 : h.getNodeName();
              if (A === "P") {
                var x = f.default(h), S = x.getTodo(), D = (y = S.children()) === null || y === void 0 ? void 0 : y.getNode();
                S.insertAfter(h), p.selection.moveCursor(D), h.remove();
              }
            }), this.tryChangeActive();
          }, s.prototype.cancelTodo = function() {
            var p = this.editor, v = p.selection.getSelectionRangeTopNodes();
            (0, r.default)(v).call(v, function(h) {
              var y, A, x, S = (A = (y = h.childNodes()) === null || y === void 0 ? void 0 : y.childNodes()) === null || A === void 0 ? void 0 : A.clone(!0), D = c.default("<p></p>");
              D.append(S), D.insertAfter(h), (x = D.childNodes()) === null || x === void 0 || x.get(0).remove(), p.selection.moveCursor(D.getNode()), h.remove();
            });
          }, s;
        }(g.default);
        n.default = l;
      },
      function(o, n, t) {
        o.exports = t(411);
      },
      function(o, n, t) {
        var e = t(412);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(413), a = Array.prototype;
        o.exports = function(r) {
          var i = r.every;
          return r === a || r instanceof Array && i === a.every ? e : i;
        };
      },
      function(o, n, t) {
        t(414);
        var e = t(15);
        o.exports = e("Array").every;
      },
      function(o, n, t) {
        var e = t(5), a = t(32).every, r = t(67), i = t(22), c = r("every"), g = i("every");
        e({ target: "Array", proto: !0, forced: !c || !g }, {
          every: function(m) {
            return a(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(98), d = i.__importDefault(t(140)), m = t(98), f = t(7);
        function l(u) {
          function s(y) {
            var A, x;
            if (g.isAllTodo(u)) {
              y.preventDefault();
              var S = u.selection, D = S.getSelectionRangeTopNodes()[0], I = (A = D.childNodes()) === null || A === void 0 ? void 0 : A.get(0), C = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, E = S.getRange();
              if (!(E != null && E.collapsed)) {
                var T = E == null ? void 0 : E.commonAncestorContainer.childNodes, R = E == null ? void 0 : E.startContainer, N = E == null ? void 0 : E.endContainer, M = E == null ? void 0 : E.startOffset, B = E == null ? void 0 : E.endOffset, F = 0, O = 0, b = [];
                T == null || (0, r.default)(T).call(T, function(J, k) {
                  J.contains(R) && (F = k), J.contains(N) && (O = k);
                }), O - F > 1 && (T == null || (0, r.default)(T).call(T, function(J, k) {
                  k <= F || k >= O || b.push(J);
                }), (0, r.default)(b).call(b, function(J) {
                  J.remove();
                })), m.dealTextNode(R, M), m.dealTextNode(N, B, !1), u.selection.moveCursor(N, 0);
              }
              if (D.text() === "") {
                var $ = c.default(f.EMPTY_P);
                $.insertAfter(D), S.moveCursor($.getNode()), D.remove();
                return;
              }
              var H = S.getCursorPos(), j = g.getCursorNextNode(I == null ? void 0 : I.getNode(), C, H), G = d.default(c.default(j)), U = G.getInputContainer(), W = U.parent().getNode(), K = G.getTodo(), w = U.getNode().nextSibling;
              if ((I == null ? void 0 : I.text()) === "" && (I == null || I.append(c.default("<br>"))), K.insertAfter(D), !w || (w == null ? void 0 : w.textContent) === "") {
                if ((w == null ? void 0 : w.nodeName) !== "BR") {
                  var Y = c.default("<br>");
                  Y.insertAfter(U);
                }
                S.moveCursor(W, 1);
              } else
                S.moveCursor(W);
            }
          }
          function p(y) {
            var A, x;
            if (g.isAllTodo(u)) {
              var S = u.selection, D = S.getSelectionRangeTopNodes()[0], I = (A = D.childNodes()) === null || A === void 0 ? void 0 : A.getNode(), C = c.default("<p></p>"), E = C.getNode(), T = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, R = S.getCursorPos(), N = T.previousSibling;
              if (D.text() === "") {
                y.preventDefault();
                var M = c.default(f.EMPTY_P);
                M.insertAfter(D), D.remove(), S.moveCursor(M.getNode(), 0);
                return;
              }
              if ((N == null ? void 0 : N.nodeName) === "SPAN" && N.childNodes[0].nodeName === "INPUT" && R === 0) {
                var B;
                y.preventDefault(), I == null || (0, r.default)(B = I.childNodes).call(B, function(F, O) {
                  O !== 0 && E.appendChild(F.cloneNode(!0));
                }), C.insertAfter(D), D.remove();
              }
            }
          }
          function v() {
            var y = u.selection, A = y.getSelectionRangeTopNodes()[0];
            A && m.isTodo(A) && A.text() === "" && (c.default(f.EMPTY_P).insertAfter(A), A.remove());
          }
          function h(y) {
            y && y.target instanceof HTMLInputElement && y.target.type === "checkbox" && (y.target.checked ? y.target.setAttribute("checked", "true") : y.target.removeAttribute("checked"));
          }
          u.txt.eventHooks.enterDownEvents.push(s), u.txt.eventHooks.deleteUpEvents.push(v), u.txt.eventHooks.deleteDownEvents.push(p), u.txt.eventHooks.clickEvents.push(h);
        }
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.selectorValidator = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = t(6), g = t(7), d = r.__importDefault(t(130)), m = {
          border: "1px solid #c9d8db",
          toolbarBgColor: "#FFF",
          toolbarBottomBorder: "1px solid #EEE"
        };
        function f(u) {
          var s = u.toolbarSelector, p = i.default(s), v = u.textSelector, h = u.config, y = h.height, A = u.i18next, x = i.default("<div></div>"), S = i.default("<div></div>"), D, I, C = null;
          v == null ? (I = p.children(), p.append(x).append(S), x.css("background-color", m.toolbarBgColor).css("border", m.border).css("border-bottom", m.toolbarBottomBorder), S.css("border", m.border).css("border-top", "none").css("height", y + "px")) : (p.append(x), C = i.default(v).children(), i.default(v).append(S), I = S.children()), D = i.default("<div></div>"), D.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
          var E, T = u.config.placeholder;
          T !== d.default.placeholder ? E = i.default("<div>" + T + "</div>") : E = i.default("<div>" + A.t(T) + "</div>"), E.addClass("placeholder"), I && I.length ? (D.append(I), E.hide()) : D.append(i.default(g.EMPTY_P)), C && C.length && (D.append(C), E.hide()), S.append(D), S.append(E), x.addClass("w-e-toolbar").css("z-index", u.zIndex.get("toolbar")), S.addClass("w-e-text-container"), S.css("z-index", u.zIndex.get()), D.addClass("w-e-text");
          var R = c.getRandom("toolbar-elem");
          x.attr("id", R);
          var N = c.getRandom("text-elem");
          D.attr("id", N);
          var M = S.getBoundingClientRect().height, B = D.getBoundingClientRect().height;
          M !== B && D.css("min-height", M + "px"), u.$toolbarElem = x, u.$textContainerElem = S, u.$textElem = D, u.toolbarElemId = R, u.textElemId = N;
        }
        n.default = f;
        function l(u) {
          var s = "data-we-id", p = /^wangEditor-\d+$/, v = u.textSelector, h = u.toolbarSelector, y = {
            bar: i.default("<div></div>"),
            text: i.default("<div></div>")
          };
          if (h == null)
            throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
          if (y.bar = i.default(h), !y.bar.elems.length)
            throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + h);
          if (p.test(y.bar.attr(s)))
            throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
          if (v) {
            if (y.text = i.default(v), !y.text.elems.length)
              throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + v);
            if (p.test(y.text.attr(s)))
              throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
          }
          y.bar.attr(s, u.id), y.text.attr(s, u.id), u.beforeDestroy(function() {
            y.bar.removeAttr(s), y.text.removeAttr(s);
          });
        }
        n.selectorValidator = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = t(7);
        function g(d, m) {
          var f = d.$textElem, l = f.children();
          if (!l || !l.length) {
            f.append(i.default(c.EMPTY_P)), g(d);
            return;
          }
          var u = l.last();
          if (m) {
            var s = u.html().toLowerCase(), p = u.getNodeName();
            if (s !== "<br>" && s !== "<br/>" || p !== "P") {
              f.append(i.default(c.EMPTY_P)), g(d);
              return;
            }
          }
          d.selection.createRangeByElem(u, !1, !0), d.config.focus ? d.selection.restoreSelection() : d.selection.clearWindowSelectionRange();
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3));
        function g(s) {
          d(s), m(s), f(s);
        }
        function d(s) {
          s.txt.eventHooks.changeEvents.push(function() {
            var p = s.config.onchange;
            if (p) {
              var v = s.txt.html() || "";
              s.isFocus = !0, p(v);
            }
            s.txt.togglePlaceholder();
          });
        }
        function m(s) {
          s.isFocus = !1;
          function p(v) {
            var h = v.target, y = c.default(h), A = s.$textElem, x = s.$toolbarElem, S = A.isContain(y), D = x.isContain(y), I = x.elems[0] == v.target;
            if (S)
              s.isFocus || u(s), s.isFocus = !0;
            else {
              if (D && !I || !s.isFocus)
                return;
              l(s), s.isFocus = !1;
            }
          }
          document.activeElement === s.$textElem.elems[0] && s.config.focus && (u(s), s.isFocus = !0), c.default(document).on("click", p), s.beforeDestroy(function() {
            c.default(document).off("click", p);
          });
        }
        function f(s) {
          s.$textElem.on("compositionstart", function() {
            s.isComposing = !0, s.txt.togglePlaceholder();
          }).on("compositionend", function() {
            s.isComposing = !1, s.txt.togglePlaceholder();
          });
        }
        function l(s) {
          var p, v = s.config, h = v.onblur, y = s.txt.html() || "";
          (0, r.default)(p = s.txt.eventHooks.onBlurEvents).call(p, function(A) {
            return A();
          }), h(y);
        }
        function u(s) {
          var p = s.config, v = p.onfocus, h = s.txt.html() || "";
          v(h);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        function r(i) {
          var c = i.config, g = c.lang, d = c.languages;
          if (i.i18next != null) {
            try {
              i.i18next.init({
                ns: "wangEditor",
                lng: g,
                defaultNS: "wangEditor",
                resources: d
              });
            } catch (m) {
              throw new Error("i18next:" + m);
            }
            return;
          }
          i.i18next = {
            t: function(f) {
              var l = f.split(".");
              return l[l.length - 1];
            }
          };
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.setUnFullScreen = n.setFullScreen = void 0;
        var i = t(2), c = i.__importDefault(t(3));
        t(421);
        var g = "w-e-icon-fullscreen", d = "w-e-icon-fullscreen_exit", m = "w-e-full-screen-editor";
        n.setFullScreen = function(l) {
          var u = c.default(l.toolbarSelector), s = l.$textContainerElem, p = l.$toolbarElem, v = (0, r.default)(p).call(p, "i." + g), h = l.config;
          v.removeClass(g), v.addClass(d), u.addClass(m), u.css("z-index", h.zIndexFullScreen);
          var y = p.getBoundingClientRect();
          s.css("height", "calc(100% - " + y.height + "px)");
        }, n.setUnFullScreen = function(l) {
          var u = c.default(l.toolbarSelector), s = l.$textContainerElem, p = l.$toolbarElem, v = (0, r.default)(p).call(p, "i." + d), h = l.config;
          v.removeClass(d), v.addClass(g), u.removeClass(m), u.css("z-index", "auto"), s.css("height", h.height + "px");
        };
        var f = function(u) {
          if (!u.textSelector && !!u.config.showFullScreen) {
            var s = u.$toolbarElem, p = c.default(`<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` + g + `"></i>
        </div>`);
            p.on("click", function(v) {
              var h, y = (0, r.default)(h = c.default(v.currentTarget)).call(h, "i");
              y.hasClass(g) ? (p.attr("data-title", "\u53D6\u6D88\u5168\u5C4F"), n.setFullScreen(u)) : (p.attr("data-title", "\u5168\u5C4F"), n.setUnFullScreen(u));
            }), s.append(p);
          }
        };
        n.default = f;
      },
      function(o, n, t) {
        var e = t(20), a = t(422);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = function(g, d) {
          var m, f = g.isEnable ? g.$textElem : (0, r.default)(m = g.$textContainerElem).call(m, ".w-e-content-mantle"), l = (0, r.default)(f).call(f, "[id='" + d + "']"), u = l.getOffsetData().top;
          f.scrollTop(u);
        };
        n.default = i;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(129)), c = {
          menu: 2,
          panel: 2,
          toolbar: 1,
          tooltip: 1,
          textContainer: 1
        }, g = function() {
          function d() {
            this.tier = c, this.baseZIndex = i.default.zIndex;
          }
          return d.prototype.get = function(m) {
            return m && this.tier[m] ? this.baseZIndex + this.tier[m] : this.baseZIndex;
          }, d.prototype.init = function(m) {
            this.baseZIndex == i.default.zIndex && (this.baseZIndex = m.config.zIndex);
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(70)), i = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(426)), d = t(6), m = t(7);
        function f(u, s) {
          return (0, r.default)(u).call(u, function(p) {
            var v = p.type, h = p.target, y = p.attributeName;
            return v != "attributes" || v == "attributes" && (y == "contenteditable" || h != s);
          });
        }
        var l = function(u) {
          c.__extends(s, u);
          function s(p) {
            var v = u.call(this, function(h, y) {
              var A;
              if (h = f(h, y.target), (A = v.data).push.apply(A, h), p.isCompatibleMode)
                v.asyncSave();
              else if (!p.isComposing)
                return v.asyncSave();
            }) || this;
            return v.editor = p, v.data = [], v.asyncSave = m.EMPTY_FN, v;
          }
          return s.prototype.save = function() {
            this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
          }, s.prototype.emit = function() {
            var p;
            (0, i.default)(p = this.editor.txt.eventHooks.changeEvents).call(p, function(v) {
              return v();
            });
          }, s.prototype.observe = function() {
            var p = this;
            u.prototype.observe.call(this, this.editor.$textElem.elems[0]);
            var v = this.editor.config.onchangeTimeout;
            this.asyncSave = d.debounce(function() {
              p.save();
            }, v), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
              p.asyncSave();
            });
          }, s;
        }(g.default);
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = function() {
          function i(c, g) {
            var d = this;
            this.options = {
              subtree: !0,
              childList: !0,
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0
            }, this.callback = function(m) {
              c(m, d);
            }, this.observer = new MutationObserver(this.callback), g && (this.options = g);
          }
          return (0, a.default)(i.prototype, "target", {
            get: function() {
              return this.node;
            },
            enumerable: !1,
            configurable: !0
          }), i.prototype.observe = function(c) {
            this.node instanceof Node || (this.node = c, this.connect());
          }, i.prototype.connect = function() {
            if (this.node)
              return this.observer.observe(this.node, this.options), this;
            throw new Error("\u8FD8\u672A\u521D\u59CB\u5316\u7ED1\u5B9A\uFF0C\u8BF7\u60A8\u5148\u7ED1\u5B9A\u6709\u6548\u7684 Node \u8282\u70B9");
          }, i.prototype.disconnect = function() {
            var c = this.observer.takeRecords();
            c.length && this.callback(c), this.observer.disconnect();
          }, i;
        }();
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(428)), c = r.__importDefault(t(435)), g = r.__importDefault(t(436)), d = function() {
          function m(f) {
            this.editor = f, this.content = new i.default(f), this.scroll = new c.default(f), this.range = new g.default(f);
          }
          return (0, a.default)(m.prototype, "size", {
            get: function() {
              return this.scroll.size;
            },
            enumerable: !1,
            configurable: !0
          }), m.prototype.observe = function() {
            this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
          }, m.prototype.save = function(f) {
            f.length && (this.content.save(f), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
          }, m.prototype.revoke = function() {
            this.editor.change.disconnect();
            var f = this.content.revoke();
            f && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), f && this.editor.change.emit();
          }, m.prototype.restore = function() {
            this.editor.change.disconnect();
            var f = this.content.restore();
            f && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), f && this.editor.change.emit();
          }, m;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(429)), c = r.__importDefault(t(433)), g = function() {
          function d(m) {
            this.editor = m;
          }
          return d.prototype.observe = function() {
            this.editor.isCompatibleMode ? this.cache = new c.default(this.editor) : this.cache = new i.default(this.editor), this.cache.observe();
          }, d.prototype.save = function(m) {
            this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(m);
          }, d.prototype.revoke = function() {
            var m;
            return (m = this.cache) === null || m === void 0 ? void 0 : m.revoke();
          }, d.prototype.restore = function() {
            var m;
            return (m = this.cache) === null || m === void 0 ? void 0 : m.restore();
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(99)), c = r.__importDefault(t(431)), g = t(432), d = function(m) {
          r.__extends(f, m);
          function f(l) {
            var u = m.call(this, l.config.historyMaxSize) || this;
            return u.editor = l, u;
          }
          return f.prototype.observe = function() {
            this.resetMaxSize(this.editor.config.historyMaxSize);
          }, f.prototype.compile = function(l) {
            return this.save(c.default(l)), this;
          }, f.prototype.revoke = function() {
            return m.prototype.revoke.call(this, function(l) {
              g.revoke(l);
            });
          }, f.prototype.restore = function() {
            return m.prototype.restore.call(this, function(l) {
              g.restore(l);
            });
          }, f;
        }(i.default);
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.CeilStack = void 0;
        var r = function() {
          function i(c) {
            c === void 0 && (c = 0), this.data = [], this.max = 0, this.reset = !1, c = Math.abs(c), c && (this.max = c);
          }
          return i.prototype.resetMax = function(c) {
            c = Math.abs(c), !this.reset && !isNaN(c) && (this.max = c, this.reset = !0);
          }, (0, a.default)(i.prototype, "size", {
            get: function() {
              return this.data.length;
            },
            enumerable: !1,
            configurable: !0
          }), i.prototype.instack = function(c) {
            return this.data.unshift(c), this.max && this.size > this.max && (this.data.length = this.max), this;
          }, i.prototype.outstack = function() {
            return this.data.shift();
          }, i.prototype.clear = function() {
            return this.data.length = 0, this;
          }, i;
        }();
        n.CeilStack = r;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.compliePosition = n.complieNodes = n.compileValue = n.compileType = void 0;
        var c = t(6);
        function g(p) {
          switch (p) {
            case "childList":
              return "node";
            case "attributes":
              return "attr";
            default:
              return "text";
          }
        }
        n.compileType = g;
        function d(p) {
          switch (p.type) {
            case "attributes":
              return p.target.getAttribute(p.attributeName) || "";
            case "characterData":
              return p.target.textContent;
            default:
              return "";
          }
        }
        n.compileValue = d;
        function m(p) {
          var v = {};
          return p.addedNodes.length && (v.add = c.toArray(p.addedNodes)), p.removedNodes.length && (v.remove = c.toArray(p.removedNodes)), v;
        }
        n.complieNodes = m;
        function f(p) {
          var v;
          return p.previousSibling ? v = {
            type: "before",
            target: p.previousSibling
          } : p.nextSibling ? v = {
            type: "after",
            target: p.nextSibling
          } : v = {
            type: "parent",
            target: p.target
          }, v;
        }
        n.compliePosition = f;
        var l = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
        function u(p) {
          var v = [], h = !1, y = [];
          return (0, r.default)(p).call(p, function(A, x) {
            var S = {
              type: g(A.type),
              target: A.target,
              attr: A.attributeName || "",
              value: d(A) || "",
              oldValue: A.oldValue || "",
              nodes: m(A),
              position: f(A)
            };
            if (v.push(S), !!c.UA.isFirefox) {
              if (h && A.addedNodes.length && A.addedNodes[0].nodeType == 1) {
                var D = A.addedNodes[0], I = {
                  type: "node",
                  target: D,
                  attr: "",
                  value: "",
                  oldValue: "",
                  nodes: {
                    add: [h]
                  },
                  position: {
                    type: "parent",
                    target: D
                  }
                };
                (0, i.default)(l).call(l, D.nodeName) != -1 ? (I.nodes.add = c.toArray(D.childNodes), v.push(I)) : h.nodeType == 3 ? (s(D, y) && (I.nodes.add = c.toArray(D.childNodes)), v.push(I)) : (0, i.default)(l).call(l, A.target.nodeName) == -1 && s(D, y) && (I.nodes.add = c.toArray(D.childNodes), v.push(I));
              }
              S.type == "node" && A.removedNodes.length == 1 ? (h = A.removedNodes[0], y.push(h)) : (h = !1, y.length = 0);
            }
          }), v;
        }
        n.default = u;
        function s(p, v) {
          for (var h = 0, y = v.length - 1; y > 0 && p.contains(v[y]); y--)
            h++;
          return h;
        }
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(94));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.restore = n.revoke = void 0;
        function c(y, A) {
          var x = y.position.target;
          switch (y.position.type) {
            case "before":
              x.nextSibling ? (x = x.nextSibling, (0, r.default)(A).call(A, function(S) {
                y.target.insertBefore(S, x);
              })) : (0, r.default)(A).call(A, function(S) {
                y.target.appendChild(S);
              });
              break;
            case "after":
              (0, r.default)(A).call(A, function(S) {
                y.target.insertBefore(S, x);
              });
              break;
            default:
              (0, r.default)(A).call(A, function(S) {
                x.appendChild(S);
              });
              break;
          }
        }
        function g(y) {
          for (var A = 0, x = (0, i.default)(y.nodes); A < x.length; A++) {
            var S = x[A], D = S[0], I = S[1];
            switch (D) {
              case "add":
                (0, r.default)(I).call(I, function(C) {
                  y.target.removeChild(C);
                });
                break;
              default: {
                c(y, I);
                break;
              }
            }
          }
        }
        function d(y) {
          var A = y.target;
          y.oldValue == null ? A.removeAttribute(y.attr) : A.setAttribute(y.attr, y.oldValue);
        }
        function m(y) {
          y.target.textContent = y.oldValue;
        }
        var f = {
          node: g,
          text: m,
          attr: d
        };
        function l(y) {
          for (var A = y.length - 1; A > -1; A--) {
            var x = y[A];
            f[x.type](x);
          }
        }
        n.revoke = l;
        function u(y) {
          for (var A = 0, x = (0, i.default)(y.nodes); A < x.length; A++) {
            var S = x[A], D = S[0], I = S[1];
            switch (D) {
              case "add": {
                c(y, I);
                break;
              }
              default: {
                (0, r.default)(I).call(I, function(C) {
                  C.parentNode.removeChild(C);
                });
                break;
              }
            }
          }
        }
        function s(y) {
          y.target.textContent = y.value;
        }
        function p(y) {
          y.target.setAttribute(y.attr, y.value);
        }
        var v = {
          node: u,
          text: s,
          attr: p
        };
        function h(y) {
          for (var A = 0, x = y; A < x.length; A++) {
            var S = x[A];
            v[S.type](S);
          }
        }
        n.restore = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(434), i = function() {
          function c(g) {
            this.editor = g, this.data = new r.TailChain();
          }
          return c.prototype.observe = function() {
            this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
          }, c.prototype.save = function() {
            return this.data.insertLast(this.editor.$textElem.html()), this;
          }, c.prototype.revoke = function() {
            var g = this.data.prev();
            return g ? (this.editor.$textElem.html(g), !0) : !1;
          }, c.prototype.restore = function() {
            var g = this.data.next();
            return g ? (this.editor.$textElem.html(g), !0) : !1;
          }, c;
        }();
        n.default = i;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(91));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.TailChain = void 0;
        var i = function() {
          function c() {
            this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
          }
          return c.prototype.resetMax = function(g) {
            g = Math.abs(g), g && (this.max = g);
          }, (0, a.default)(c.prototype, "size", {
            get: function() {
              return this.data.length;
            },
            enumerable: !1,
            configurable: !0
          }), c.prototype.insertLast = function(g) {
            if (this.isRe) {
              var d;
              (0, r.default)(d = this.data).call(d, this.point + 1), this.isRe = !1;
            }
            for (this.data.push(g); this.max && this.size > this.max; )
              this.data.shift();
            return this.point = this.size - 1, this;
          }, c.prototype.current = function() {
            return this.data[this.point];
          }, c.prototype.prev = function() {
            if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
              this.point = 0;
              return;
            }
            return this.current();
          }, c.prototype.next = function() {
            if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
              this.point = this.size - 1;
              return;
            }
            return this.current();
          }, c;
        }();
        n.TailChain = i;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(99)), c = function(g) {
          r.__extends(d, g);
          function d(m) {
            var f = g.call(this, m.config.historyMaxSize) || this;
            return f.editor = m, f.last = 0, f.target = m.$textElem.elems[0], f;
          }
          return d.prototype.observe = function() {
            var m = this;
            this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
              m.last = m.target.scrollTop;
            }), this.resetMaxSize(this.editor.config.historyMaxSize);
          }, d.prototype.save = function() {
            return g.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
          }, d.prototype.revoke = function() {
            var m = this;
            return g.prototype.revoke.call(this, function(f) {
              m.target.scrollTop = f[0];
            });
          }, d.prototype.restore = function() {
            var m = this;
            return g.prototype.restore.call(this, function(f) {
              m.target.scrollTop = f[1];
            });
          }, d;
        }(i.default);
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(99)), c = r.__importDefault(t(3)), g = t(6);
        function d(f) {
          return {
            start: [f.startContainer, f.startOffset],
            end: [f.endContainer, f.endOffset],
            root: f.commonAncestorContainer,
            collapsed: f.collapsed
          };
        }
        var m = function(f) {
          r.__extends(l, f);
          function l(u) {
            var s = f.call(this, u.config.historyMaxSize) || this;
            return s.editor = u, s.lastRange = d(document.createRange()), s.root = u.$textElem.elems[0], s.updateLastRange = g.debounce(function() {
              s.lastRange = d(s.rangeHandle);
            }, u.config.onchangeTimeout), s;
          }
          return (0, a.default)(l.prototype, "rangeHandle", {
            get: function() {
              var s = document.getSelection();
              return s && s.rangeCount ? s.getRangeAt(0) : document.createRange();
            },
            enumerable: !1,
            configurable: !0
          }), l.prototype.observe = function() {
            var u = this;
            this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
            function s() {
              var v = u.rangeHandle;
              (u.root === v.commonAncestorContainer || u.root.contains(v.commonAncestorContainer)) && (u.editor.isComposing || u.updateLastRange());
            }
            function p(v) {
              (v.key == "Backspace" || v.key == "Delete") && u.updateLastRange();
            }
            c.default(document).on("selectionchange", s), this.editor.beforeDestroy(function() {
              c.default(document).off("selectionchange", s);
            }), u.editor.$textElem.on("keydown", p);
          }, l.prototype.save = function() {
            var u = d(this.rangeHandle);
            return f.prototype.save.call(this, [this.lastRange, u]), this.lastRange = u, this;
          }, l.prototype.set = function(u) {
            try {
              if (u) {
                var s = this.rangeHandle;
                return s.setStart.apply(s, u.start), s.setEnd.apply(s, u.end), this.editor.menus.changeActive(), !0;
              }
            } catch {
              return !1;
            }
            return !1;
          }, l.prototype.revoke = function() {
            var u = this;
            return f.prototype.revoke.call(this, function(s) {
              u.set(s[0]);
            });
          }, l.prototype.restore = function() {
            var u = this;
            return f.prototype.restore.call(this, function(s) {
              u.set(s[1]);
            });
          }, l;
        }(i.default);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3));
        t(438);
        function g(d) {
          var m = !1, f, l;
          d.txt.eventHooks.changeEvents.push(function() {
            m && (0, r.default)(f).call(f, ".w-e-content-preview").html(d.$textElem.html());
          });
          function u() {
            if (!m) {
              d.$textElem.hide();
              var p = d.zIndex.get("textContainer"), v = d.txt.html();
              f = c.default('<div class="w-e-content-mantle" style="z-index:' + p + `">
                <div class="w-e-content-preview w-e-text">` + v + `</div>
            </div>`), d.$textContainerElem.append(f);
              var h = d.zIndex.get("menu");
              l = c.default('<div class="w-e-menue-mantle" style="z-index:' + h + '"></div>'), d.$toolbarElem.append(l), m = !0, d.isEnable = !1;
            }
          }
          function s() {
            !m || (f.remove(), l.remove(), d.$textElem.show(), m = !1, d.isEnable = !0);
          }
          return {
            disable: u,
            enable: s
          };
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(20), a = t(439);
        a = a.__esModule ? a.default : a, typeof a == "string" && (a = [[o.i, a, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(a, r), o.exports = a.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = function() {
          function i(c) {
            var g = this;
            this.editor = c;
            var d = function() {
              var f = document.activeElement;
              f === c.$textElem.elems[0] && g.emit();
            };
            window.document.addEventListener("selectionchange", d), this.editor.beforeDestroy(function() {
              window.document.removeEventListener("selectionchange", d);
            });
          }
          return i.prototype.emit = function() {
            var c, g = this.editor.config.onSelectionChange;
            if (g) {
              var d = this.editor.selection;
              d.saveRange(), d.isSelectionEmpty() || g({
                text: d.getSelectionText(),
                html: (c = d.getSelectionContainerElem()) === null || c === void 0 ? void 0 : c.elems[0].innerHTML,
                selection: d
              });
            }
          }, i;
        }();
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(128)), i = e(t(94)), c = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.registerPlugin = void 0;
        var g = t(2), d = g.__importDefault(t(87)), m = t(6);
        function f(u, s, p) {
          if (!u)
            throw new TypeError("name is not define");
          if (!s)
            throw new TypeError("options is not define");
          if (!s.intention)
            throw new TypeError("options.intention is not define");
          if (s.intention && typeof s.intention != "function")
            throw new TypeError("options.intention is not function");
          p[u] && console.warn("plugin " + u + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002"), p[u] = s;
        }
        n.registerPlugin = f;
        function l(u) {
          var s = (0, r.default)({}, m.deepClone(d.default.globalPluginsFunctionList), m.deepClone(u.pluginsFunctionList)), p = (0, i.default)(s);
          (0, c.default)(p).call(p, function(v) {
            var h = v[0], y = v[1];
            console.info("plugin " + h + " initializing");
            var A = y.intention, x = y.config;
            A(u, x), console.info("plugin " + h + " initialization complete");
          });
        }
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
      }
    ]).default;
  });
})(Dn);
const sc = /* @__PURE__ */ Bn(Dn.exports), uc = {
  key: 2,
  id: "editor"
}, fc = /* @__PURE__ */ nn({
  __name: "index",
  props: {
    options: {
      type: Array,
      required: !0
    },
    httpRequest: {
      type: Function
    }
  },
  emits: [
    "on-preview",
    "on-remove",
    "on-success",
    "on-error",
    "on-progress",
    "on-change",
    "on-exceed",
    "before-upload",
    "before-remove"
  ],
  setup(P, { expose: L, emit: o }) {
    const n = P, t = Ot(), e = Ot(null), a = Ot(null), r = Ot(null), i = () => {
      if (n.options && n.options.length) {
        let A = {}, x = {};
        n.options.map((S) => {
          A[S.prop] = S.value, x[S.prop] = S.rules, S.type === "editor" && Mn(() => {
            if (document.getElementById("editor")) {
              const D = new sc("#editor");
              S.placeholder && (D.config.placeholder = S.placeholder), D.create(), D.txt.html(S.value), D.config.onchange = (I) => {
                a.value[S.prop] = I;
              }, e.value = D;
            }
          });
        }), a.value = en(A), r.value = en(x);
      }
    };
    Rn(() => {
      i();
    });
    let c = (A) => {
      o("on-preview", A);
    }, g = (A, x) => {
      o("on-remove", { file: A, fileList: x });
    }, d = (A, x, S) => {
      let D = n.options.find((I) => I.type === "upload");
      a.value[D.prop] = { response: A, file: x, fileList: S }, o("on-success", { response: A, file: x, fileList: S });
    }, m = (A, x, S) => {
      o("on-error", { err: A, file: x, fileList: S });
    }, f = (A, x, S) => {
      o("on-progress", { event: A, file: x, fileList: S });
    }, l = (A, x) => {
      o("on-change", { file: A, fileList: x });
    }, u = (A) => {
      o("before-upload", A);
    }, s = (A, x) => {
      o("before-remove", { file: A, fileList: x });
    }, p = (A, x) => {
      o("on-exceed", { files: A, fileList: x });
    };
    return L({
      resetFields: () => {
        if (t.value.resetFields(), n.options && n.options.length) {
          let A = n.options.find((x) => x.type === "editor");
          e.value.txt.html(A.value);
        }
      },
      validate: () => t.value.validate,
      getFormData: () => a.value
    }), (A, x) => {
      const S = qt("el-upload"), D = qt("el-form-item"), I = qt("el-form");
      return a.value ? (ct(), Ct(I, zt({
        key: 0,
        "validate-on-rule-change": !1
      }, A.$attrs, {
        rules: r.value,
        model: a.value,
        ref_key: "form",
        ref: t
      }), {
        default: pt(() => [
          (ct(!0), Gt(se, null, Re(P.options, (C, E) => (ct(), Gt(se, { key: E }, [
            !C.children || !C.children.length ? (ct(), Ct(D, {
              key: 0,
              label: C.label,
              prop: C.prop
            }, {
              default: pt(() => [
                C.type !== "upload" && C.type !== "editor" ? (ct(), Ct(ue(`el-${C.type}`), zt({ key: 0 }, C.attrs, {
                  modelValue: a.value[C.prop],
                  "onUpdate:modelValue": (T) => a.value[C.prop] = T
                }), null, 16, ["modelValue", "onUpdate:modelValue"])) : Ft("", !0),
                C.type === "upload" ? (ct(), Ct(S, zt({ key: 1 }, C.UploadAttrs, {
                  "on-preview": yt(c),
                  "on-remove": yt(g),
                  "on-success": yt(d),
                  "on-error": yt(m),
                  "on-progress": yt(f),
                  "on-change": yt(l),
                  "on-exceed": yt(p),
                  "before-upload": yt(u),
                  "before-remove": yt(s),
                  "http-request": n.httpRequest
                }), {
                  default: pt(() => [
                    Lt(A.$slots, "uploadArea", {}, void 0, !0),
                    Lt(A.$slots, "uploadTip", {}, void 0, !0)
                  ]),
                  _: 2
                }, 1040, ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "on-exceed", "before-upload", "before-remove", "http-request"])) : Ft("", !0),
                C.type === "editor" ? (ct(), Gt("div", uc)) : Ft("", !0)
              ]),
              _: 2
            }, 1032, ["label", "prop"])) : Ft("", !0),
            C.children && C.children.length ? (ct(), Ct(D, {
              key: 1,
              label: C.label,
              prop: C.prop
            }, {
              default: pt(() => [
                (ct(), Ct(ue(`el-${C.type}`), zt(C.attrs, {
                  modelValue: a.value[C.prop],
                  "onUpdate:modelValue": (T) => a.value[C.prop] = T
                }), {
                  default: pt(() => [
                    (ct(!0), Gt(se, null, Re(C.children, (T, R) => (ct(), Ct(ue(`el-${T.type}`), {
                      key: R,
                      label: T.label,
                      value: T.value
                    }, null, 8, ["label", "value"]))), 128))
                  ]),
                  _: 2
                }, 1040, ["modelValue", "onUpdate:modelValue"]))
              ]),
              _: 2
            }, 1032, ["label", "prop"])) : Ft("", !0)
          ], 64))), 128)),
          ce(D, null, {
            default: pt(() => [
              Lt(A.$slots, "action", {
                form: t.value,
                model: a.value
              }, void 0, !0)
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 16, ["rules", "model"])) : Ft("", !0);
    };
  }
});
const In = (P, L) => {
  const o = P.__vccOpts || P;
  for (const [n, t] of L)
    o[n] = t;
  return o;
}, cc = /* @__PURE__ */ In(fc, [["__scopeId", "data-v-7857a4a1"]]), dc = /* @__PURE__ */ nn({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      required: !0
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onExceed: {
      type: Function
    },
    isScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:visible"],
  setup(P, { emit: L }) {
    const o = P, n = Ot(), t = Ot(o.visible);
    return Me(
      () => o.visible,
      (e) => {
        t.value = e;
      }
    ), Me(
      () => t.value,
      (e) => {
        L("update:visible", e);
      }
    ), (e, a) => {
      const r = qt("el-dialog");
      return ct(), Gt("div", {
        class: Nn({ scroll: P.isScroll })
      }, [
        ce(r, zt({
          modelValue: t.value,
          "onUpdate:modelValue": a[0] || (a[0] = (i) => t.value = i)
        }, e.$attrs), {
          default: pt(() => [
            ce(cc, {
              ref_key: "form",
              ref: n,
              "label-width": "100px",
              onOnChange: P.onChange,
              onBeforeUpload: P.beforeUpload,
              onOnPreview: P.onPreview,
              onOnRemove: P.onRemove,
              onBeforeRemove: P.beforeRemove,
              onOnSuccess: P.onSuccess,
              onOnExceed: P.onExceed,
              options: P.options
            }, {
              uploadArea: pt(() => [
                Lt(e.$slots, "uploadArea", {}, void 0, !0)
              ]),
              uploadTip: pt(() => [
                Lt(e.$slots, "uploadTip", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["onOnChange", "onBeforeUpload", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnSuccess", "onOnExceed", "options"])
          ]),
          footer: pt(() => [
            Lt(e.$slots, "footer", { form: n.value }, void 0, !0)
          ]),
          _: 3
        }, 16, ["modelValue"])
      ], 2);
    };
  }
});
const vc = /* @__PURE__ */ In(dc, [["__scopeId", "data-v-70937a81"]]), mc = {
  install(P) {
    P.component("xs-modalForm", vc);
  }
};
export {
  mc as default
};
