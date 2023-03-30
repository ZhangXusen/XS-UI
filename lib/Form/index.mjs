import { defineComponent as Tn, ref as Jt, onMounted as Dn, resolveComponent as ie, openBlock as dt, createBlock as St, mergeProps as Wt, withCtx as Bt, createElementBlock as Xt, Fragment as le, renderList as Pe, resolveDynamicComponent as se, createCommentVNode as Ft, unref as At, renderSlot as ue, createVNode as In, nextTick as Pn } from "vue";
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rn(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
function Mn() {
  this.__data__ = [], this.size = 0;
}
var Nn = Mn;
function Bn(P, L) {
  return P === L || P !== P && L !== L;
}
var tn = Bn, Fn = tn;
function On(P, L) {
  for (var o = P.length; o--; )
    if (Fn(P[o][0], L))
      return o;
  return -1;
}
var _t = On, Ln = _t, $n = Array.prototype, Hn = $n.splice;
function bn(P) {
  var L = this.__data__, o = Ln(L, P);
  if (o < 0)
    return !1;
  var n = L.length - 1;
  return o == n ? L.pop() : Hn.call(L, o, 1), --this.size, !0;
}
var jn = bn, Un = _t;
function wn(P) {
  var L = this.__data__, o = Un(L, P);
  return o < 0 ? void 0 : L[o][1];
}
var Qn = wn, Yn = _t;
function zn(P) {
  return Yn(this.__data__, P) > -1;
}
var Gn = zn, Vn = _t;
function Kn(P, L) {
  var o = this.__data__, n = Vn(o, P);
  return n < 0 ? (++this.size, o.push([P, L])) : o[n][1] = L, this;
}
var Jn = Kn, Wn = Nn, Xn = jn, Zn = Qn, kn = Gn, qn = Jn;
function Ot(P) {
  var L = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++L < o; ) {
    var n = P[L];
    this.set(n[0], n[1]);
  }
}
Ot.prototype.clear = Wn;
Ot.prototype.delete = Xn;
Ot.prototype.get = Zn;
Ot.prototype.has = kn;
Ot.prototype.set = qn;
var te = Ot, _n = te;
function tr() {
  this.__data__ = new _n(), this.size = 0;
}
var er = tr;
function nr(P) {
  var L = this.__data__, o = L.delete(P);
  return this.size = L.size, o;
}
var rr = nr;
function or(P) {
  return this.__data__.get(P);
}
var ar = or;
function ir(P) {
  return this.__data__.has(P);
}
var lr = ir, sr = typeof Zt == "object" && Zt && Zt.Object === Object && Zt, en = sr, ur = en, fr = typeof self == "object" && self && self.Object === Object && self, cr = ur || fr || Function("return this")(), pt = cr, dr = pt, vr = dr.Symbol, ge = vr, Re = ge, nn = Object.prototype, pr = nn.hasOwnProperty, hr = nn.toString, Qt = Re ? Re.toStringTag : void 0;
function mr(P) {
  var L = pr.call(P, Qt), o = P[Qt];
  try {
    P[Qt] = void 0;
    var n = !0;
  } catch {
  }
  var t = hr.call(P);
  return n && (L ? P[Qt] = o : delete P[Qt]), t;
}
var gr = mr, Ar = Object.prototype, yr = Ar.toString;
function Er(P) {
  return yr.call(P);
}
var xr = Er, Me = ge, Sr = gr, Cr = xr, Tr = "[object Null]", Dr = "[object Undefined]", Ne = Me ? Me.toStringTag : void 0;
function Ir(P) {
  return P == null ? P === void 0 ? Dr : Tr : Ne && Ne in Object(P) ? Sr(P) : Cr(P);
}
var ee = Ir;
function Pr(P) {
  var L = typeof P;
  return P != null && (L == "object" || L == "function");
}
var zt = Pr, Rr = ee, Mr = zt, Nr = "[object AsyncFunction]", Br = "[object Function]", Fr = "[object GeneratorFunction]", Or = "[object Proxy]";
function Lr(P) {
  if (!Mr(P))
    return !1;
  var L = Rr(P);
  return L == Br || L == Fr || L == Nr || L == Or;
}
var rn = Lr, $r = pt, Hr = $r["__core-js_shared__"], br = Hr, fe = br, Be = function() {
  var P = /[^.]+$/.exec(fe && fe.keys && fe.keys.IE_PROTO || "");
  return P ? "Symbol(src)_1." + P : "";
}();
function jr(P) {
  return !!Be && Be in P;
}
var Ur = jr, wr = Function.prototype, Qr = wr.toString;
function Yr(P) {
  if (P != null) {
    try {
      return Qr.call(P);
    } catch {
    }
    try {
      return P + "";
    } catch {
    }
  }
  return "";
}
var on = Yr, zr = rn, Gr = Ur, Vr = zt, Kr = on, Jr = /[\\^$.*+?()[\]{}|]/g, Wr = /^\[object .+?Constructor\]$/, Xr = Function.prototype, Zr = Object.prototype, kr = Xr.toString, qr = Zr.hasOwnProperty, _r = RegExp(
  "^" + kr.call(qr).replace(Jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function to(P) {
  if (!Vr(P) || Gr(P))
    return !1;
  var L = zr(P) ? _r : Wr;
  return L.test(Kr(P));
}
var eo = to;
function no(P, L) {
  return P == null ? void 0 : P[L];
}
var ro = no, oo = eo, ao = ro;
function io(P, L) {
  var o = ao(P, L);
  return oo(o) ? o : void 0;
}
var Tt = io, lo = Tt, so = pt, uo = lo(so, "Map"), Ae = uo, fo = Tt, co = fo(Object, "create"), ne = co, Fe = ne;
function vo() {
  this.__data__ = Fe ? Fe(null) : {}, this.size = 0;
}
var po = vo;
function ho(P) {
  var L = this.has(P) && delete this.__data__[P];
  return this.size -= L ? 1 : 0, L;
}
var mo = ho, go = ne, Ao = "__lodash_hash_undefined__", yo = Object.prototype, Eo = yo.hasOwnProperty;
function xo(P) {
  var L = this.__data__;
  if (go) {
    var o = L[P];
    return o === Ao ? void 0 : o;
  }
  return Eo.call(L, P) ? L[P] : void 0;
}
var So = xo, Co = ne, To = Object.prototype, Do = To.hasOwnProperty;
function Io(P) {
  var L = this.__data__;
  return Co ? L[P] !== void 0 : Do.call(L, P);
}
var Po = Io, Ro = ne, Mo = "__lodash_hash_undefined__";
function No(P, L) {
  var o = this.__data__;
  return this.size += this.has(P) ? 0 : 1, o[P] = Ro && L === void 0 ? Mo : L, this;
}
var Bo = No, Fo = po, Oo = mo, Lo = So, $o = Po, Ho = Bo;
function Lt(P) {
  var L = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++L < o; ) {
    var n = P[L];
    this.set(n[0], n[1]);
  }
}
Lt.prototype.clear = Fo;
Lt.prototype.delete = Oo;
Lt.prototype.get = Lo;
Lt.prototype.has = $o;
Lt.prototype.set = Ho;
var bo = Lt, Oe = bo, jo = te, Uo = Ae;
function wo() {
  this.size = 0, this.__data__ = {
    hash: new Oe(),
    map: new (Uo || jo)(),
    string: new Oe()
  };
}
var Qo = wo;
function Yo(P) {
  var L = typeof P;
  return L == "string" || L == "number" || L == "symbol" || L == "boolean" ? P !== "__proto__" : P === null;
}
var zo = Yo, Go = zo;
function Vo(P, L) {
  var o = P.__data__;
  return Go(L) ? o[typeof L == "string" ? "string" : "hash"] : o.map;
}
var re = Vo, Ko = re;
function Jo(P) {
  var L = Ko(this, P).delete(P);
  return this.size -= L ? 1 : 0, L;
}
var Wo = Jo, Xo = re;
function Zo(P) {
  return Xo(this, P).get(P);
}
var ko = Zo, qo = re;
function _o(P) {
  return qo(this, P).has(P);
}
var ta = _o, ea = re;
function na(P, L) {
  var o = ea(this, P), n = o.size;
  return o.set(P, L), this.size += o.size == n ? 0 : 1, this;
}
var ra = na, oa = Qo, aa = Wo, ia = ko, la = ta, sa = ra;
function $t(P) {
  var L = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++L < o; ) {
    var n = P[L];
    this.set(n[0], n[1]);
  }
}
$t.prototype.clear = oa;
$t.prototype.delete = aa;
$t.prototype.get = ia;
$t.prototype.has = la;
$t.prototype.set = sa;
var ua = $t, fa = te, ca = Ae, da = ua, va = 200;
function pa(P, L) {
  var o = this.__data__;
  if (o instanceof fa) {
    var n = o.__data__;
    if (!ca || n.length < va - 1)
      return n.push([P, L]), this.size = ++o.size, this;
    o = this.__data__ = new da(n);
  }
  return o.set(P, L), this.size = o.size, this;
}
var ha = pa, ma = te, ga = er, Aa = rr, ya = ar, Ea = lr, xa = ha;
function Ht(P) {
  var L = this.__data__ = new ma(P);
  this.size = L.size;
}
Ht.prototype.clear = ga;
Ht.prototype.delete = Aa;
Ht.prototype.get = ya;
Ht.prototype.has = Ea;
Ht.prototype.set = xa;
var Sa = Ht;
function Ca(P, L) {
  for (var o = -1, n = P == null ? 0 : P.length; ++o < n && L(P[o], o, P) !== !1; )
    ;
  return P;
}
var Ta = Ca, Da = Tt, Ia = function() {
  try {
    var P = Da(Object, "defineProperty");
    return P({}, "", {}), P;
  } catch {
  }
}(), Pa = Ia, Le = Pa;
function Ra(P, L, o) {
  L == "__proto__" && Le ? Le(P, L, {
    configurable: !0,
    enumerable: !0,
    value: o,
    writable: !0
  }) : P[L] = o;
}
var an = Ra, Ma = an, Na = tn, Ba = Object.prototype, Fa = Ba.hasOwnProperty;
function Oa(P, L, o) {
  var n = P[L];
  (!(Fa.call(P, L) && Na(n, o)) || o === void 0 && !(L in P)) && Ma(P, L, o);
}
var ln = Oa, La = ln, $a = an;
function Ha(P, L, o, n) {
  var t = !o;
  o || (o = {});
  for (var e = -1, a = L.length; ++e < a; ) {
    var r = L[e], i = n ? n(o[r], P[r], r, o, P) : void 0;
    i === void 0 && (i = P[r]), t ? $a(o, r, i) : La(o, r, i);
  }
  return o;
}
var oe = Ha;
function ba(P, L) {
  for (var o = -1, n = Array(P); ++o < P; )
    n[o] = L(o);
  return n;
}
var ja = ba;
function Ua(P) {
  return P != null && typeof P == "object";
}
var Gt = Ua, wa = ee, Qa = Gt, Ya = "[object Arguments]";
function za(P) {
  return Qa(P) && wa(P) == Ya;
}
var Ga = za, $e = Ga, Va = Gt, sn = Object.prototype, Ka = sn.hasOwnProperty, Ja = sn.propertyIsEnumerable, Wa = $e(function() {
  return arguments;
}()) ? $e : function(P) {
  return Va(P) && Ka.call(P, "callee") && !Ja.call(P, "callee");
}, Xa = Wa, Za = Array.isArray, ye = Za, qt = { exports: {} };
function ka() {
  return !1;
}
var qa = ka;
(function(P, L) {
  var o = pt, n = qa, t = L && !L.nodeType && L, e = t && !0 && P && !P.nodeType && P, a = e && e.exports === t, r = a ? o.Buffer : void 0, i = r ? r.isBuffer : void 0, c = i || n;
  P.exports = c;
})(qt, qt.exports);
var _a = 9007199254740991, ti = /^(?:0|[1-9]\d*)$/;
function ei(P, L) {
  var o = typeof P;
  return L = L == null ? _a : L, !!L && (o == "number" || o != "symbol" && ti.test(P)) && P > -1 && P % 1 == 0 && P < L;
}
var ni = ei, ri = 9007199254740991;
function oi(P) {
  return typeof P == "number" && P > -1 && P % 1 == 0 && P <= ri;
}
var un = oi, ai = ee, ii = un, li = Gt, si = "[object Arguments]", ui = "[object Array]", fi = "[object Boolean]", ci = "[object Date]", di = "[object Error]", vi = "[object Function]", pi = "[object Map]", hi = "[object Number]", mi = "[object Object]", gi = "[object RegExp]", Ai = "[object Set]", yi = "[object String]", Ei = "[object WeakMap]", xi = "[object ArrayBuffer]", Si = "[object DataView]", Ci = "[object Float32Array]", Ti = "[object Float64Array]", Di = "[object Int8Array]", Ii = "[object Int16Array]", Pi = "[object Int32Array]", Ri = "[object Uint8Array]", Mi = "[object Uint8ClampedArray]", Ni = "[object Uint16Array]", Bi = "[object Uint32Array]", ot = {};
ot[Ci] = ot[Ti] = ot[Di] = ot[Ii] = ot[Pi] = ot[Ri] = ot[Mi] = ot[Ni] = ot[Bi] = !0;
ot[si] = ot[ui] = ot[xi] = ot[fi] = ot[Si] = ot[ci] = ot[di] = ot[vi] = ot[pi] = ot[hi] = ot[mi] = ot[gi] = ot[Ai] = ot[yi] = ot[Ei] = !1;
function Fi(P) {
  return li(P) && ii(P.length) && !!ot[ai(P)];
}
var Oi = Fi;
function Li(P) {
  return function(L) {
    return P(L);
  };
}
var Ee = Li, Yt = { exports: {} };
(function(P, L) {
  var o = en, n = L && !L.nodeType && L, t = n && !0 && P && !P.nodeType && P, e = t && t.exports === n, a = e && o.process, r = function() {
    try {
      var i = t && t.require && t.require("util").types;
      return i || a && a.binding && a.binding("util");
    } catch {
    }
  }();
  P.exports = r;
})(Yt, Yt.exports);
var $i = Oi, Hi = Ee, He = Yt.exports, be = He && He.isTypedArray, bi = be ? Hi(be) : $i, ji = bi, Ui = ja, wi = Xa, Qi = ye, Yi = qt.exports, zi = ni, Gi = ji, Vi = Object.prototype, Ki = Vi.hasOwnProperty;
function Ji(P, L) {
  var o = Qi(P), n = !o && wi(P), t = !o && !n && Yi(P), e = !o && !n && !t && Gi(P), a = o || n || t || e, r = a ? Ui(P.length, String) : [], i = r.length;
  for (var c in P)
    (L || Ki.call(P, c)) && !(a && (c == "length" || t && (c == "offset" || c == "parent") || e && (c == "buffer" || c == "byteLength" || c == "byteOffset") || zi(c, i))) && r.push(c);
  return r;
}
var fn = Ji, Wi = Object.prototype;
function Xi(P) {
  var L = P && P.constructor, o = typeof L == "function" && L.prototype || Wi;
  return P === o;
}
var xe = Xi;
function Zi(P, L) {
  return function(o) {
    return P(L(o));
  };
}
var cn = Zi, ki = cn, qi = ki(Object.keys, Object), _i = qi, tl = xe, el = _i, nl = Object.prototype, rl = nl.hasOwnProperty;
function ol(P) {
  if (!tl(P))
    return el(P);
  var L = [];
  for (var o in Object(P))
    rl.call(P, o) && o != "constructor" && L.push(o);
  return L;
}
var al = ol, il = rn, ll = un;
function sl(P) {
  return P != null && ll(P.length) && !il(P);
}
var dn = sl, ul = fn, fl = al, cl = dn;
function dl(P) {
  return cl(P) ? ul(P) : fl(P);
}
var Se = dl, vl = oe, pl = Se;
function hl(P, L) {
  return P && vl(L, pl(L), P);
}
var ml = hl;
function gl(P) {
  var L = [];
  if (P != null)
    for (var o in Object(P))
      L.push(o);
  return L;
}
var Al = gl, yl = zt, El = xe, xl = Al, Sl = Object.prototype, Cl = Sl.hasOwnProperty;
function Tl(P) {
  if (!yl(P))
    return xl(P);
  var L = El(P), o = [];
  for (var n in P)
    n == "constructor" && (L || !Cl.call(P, n)) || o.push(n);
  return o;
}
var Dl = Tl, Il = fn, Pl = Dl, Rl = dn;
function Ml(P) {
  return Rl(P) ? Il(P, !0) : Pl(P);
}
var Ce = Ml, Nl = oe, Bl = Ce;
function Fl(P, L) {
  return P && Nl(L, Bl(L), P);
}
var Ol = Fl, ce = { exports: {} };
(function(P, L) {
  var o = pt, n = L && !L.nodeType && L, t = n && !0 && P && !P.nodeType && P, e = t && t.exports === n, a = e ? o.Buffer : void 0, r = a ? a.allocUnsafe : void 0;
  function i(c, g) {
    if (g)
      return c.slice();
    var d = c.length, h = r ? r(d) : new c.constructor(d);
    return c.copy(h), h;
  }
  P.exports = i;
})(ce, ce.exports);
function Ll(P, L) {
  var o = -1, n = P.length;
  for (L || (L = Array(n)); ++o < n; )
    L[o] = P[o];
  return L;
}
var $l = Ll;
function Hl(P, L) {
  for (var o = -1, n = P == null ? 0 : P.length, t = 0, e = []; ++o < n; ) {
    var a = P[o];
    L(a, o, P) && (e[t++] = a);
  }
  return e;
}
var bl = Hl;
function jl() {
  return [];
}
var vn = jl, Ul = bl, wl = vn, Ql = Object.prototype, Yl = Ql.propertyIsEnumerable, je = Object.getOwnPropertySymbols, zl = je ? function(P) {
  return P == null ? [] : (P = Object(P), Ul(je(P), function(L) {
    return Yl.call(P, L);
  }));
} : wl, Te = zl, Gl = oe, Vl = Te;
function Kl(P, L) {
  return Gl(P, Vl(P), L);
}
var Jl = Kl;
function Wl(P, L) {
  for (var o = -1, n = L.length, t = P.length; ++o < n; )
    P[t + o] = L[o];
  return P;
}
var pn = Wl, Xl = cn, Zl = Xl(Object.getPrototypeOf, Object), hn = Zl, kl = pn, ql = hn, _l = Te, ts = vn, es = Object.getOwnPropertySymbols, ns = es ? function(P) {
  for (var L = []; P; )
    kl(L, _l(P)), P = ql(P);
  return L;
} : ts, mn = ns, rs = oe, os = mn;
function as(P, L) {
  return rs(P, os(P), L);
}
var is = as, ls = pn, ss = ye;
function us(P, L, o) {
  var n = L(P);
  return ss(P) ? n : ls(n, o(P));
}
var gn = us, fs = gn, cs = Te, ds = Se;
function vs(P) {
  return fs(P, ds, cs);
}
var ps = vs, hs = gn, ms = mn, gs = Ce;
function As(P) {
  return hs(P, gs, ms);
}
var ys = As, Es = Tt, xs = pt, Ss = Es(xs, "DataView"), Cs = Ss, Ts = Tt, Ds = pt, Is = Ts(Ds, "Promise"), Ps = Is, Rs = Tt, Ms = pt, Ns = Rs(Ms, "Set"), Bs = Ns, Fs = Tt, Os = pt, Ls = Fs(Os, "WeakMap"), $s = Ls, de = Cs, ve = Ae, pe = Ps, he = Bs, me = $s, An = ee, bt = on, Ue = "[object Map]", Hs = "[object Object]", we = "[object Promise]", Qe = "[object Set]", Ye = "[object WeakMap]", ze = "[object DataView]", bs = bt(de), js = bt(ve), Us = bt(pe), ws = bt(he), Qs = bt(me), Ct = An;
(de && Ct(new de(new ArrayBuffer(1))) != ze || ve && Ct(new ve()) != Ue || pe && Ct(pe.resolve()) != we || he && Ct(new he()) != Qe || me && Ct(new me()) != Ye) && (Ct = function(P) {
  var L = An(P), o = L == Hs ? P.constructor : void 0, n = o ? bt(o) : "";
  if (n)
    switch (n) {
      case bs:
        return ze;
      case js:
        return Ue;
      case Us:
        return we;
      case ws:
        return Qe;
      case Qs:
        return Ye;
    }
  return L;
});
var De = Ct, Ys = Object.prototype, zs = Ys.hasOwnProperty;
function Gs(P) {
  var L = P.length, o = new P.constructor(L);
  return L && typeof P[0] == "string" && zs.call(P, "index") && (o.index = P.index, o.input = P.input), o;
}
var Vs = Gs, Ks = pt, Js = Ks.Uint8Array, Ws = Js, Ge = Ws;
function Xs(P) {
  var L = new P.constructor(P.byteLength);
  return new Ge(L).set(new Ge(P)), L;
}
var Ie = Xs, Zs = Ie;
function ks(P, L) {
  var o = L ? Zs(P.buffer) : P.buffer;
  return new P.constructor(o, P.byteOffset, P.byteLength);
}
var qs = ks, _s = /\w*$/;
function tu(P) {
  var L = new P.constructor(P.source, _s.exec(P));
  return L.lastIndex = P.lastIndex, L;
}
var eu = tu, Ve = ge, Ke = Ve ? Ve.prototype : void 0, Je = Ke ? Ke.valueOf : void 0;
function nu(P) {
  return Je ? Object(Je.call(P)) : {};
}
var ru = nu, ou = Ie;
function au(P, L) {
  var o = L ? ou(P.buffer) : P.buffer;
  return new P.constructor(o, P.byteOffset, P.length);
}
var iu = au, lu = Ie, su = qs, uu = eu, fu = ru, cu = iu, du = "[object Boolean]", vu = "[object Date]", pu = "[object Map]", hu = "[object Number]", mu = "[object RegExp]", gu = "[object Set]", Au = "[object String]", yu = "[object Symbol]", Eu = "[object ArrayBuffer]", xu = "[object DataView]", Su = "[object Float32Array]", Cu = "[object Float64Array]", Tu = "[object Int8Array]", Du = "[object Int16Array]", Iu = "[object Int32Array]", Pu = "[object Uint8Array]", Ru = "[object Uint8ClampedArray]", Mu = "[object Uint16Array]", Nu = "[object Uint32Array]";
function Bu(P, L, o) {
  var n = P.constructor;
  switch (L) {
    case Eu:
      return lu(P);
    case du:
    case vu:
      return new n(+P);
    case xu:
      return su(P, o);
    case Su:
    case Cu:
    case Tu:
    case Du:
    case Iu:
    case Pu:
    case Ru:
    case Mu:
    case Nu:
      return cu(P, o);
    case pu:
      return new n();
    case hu:
    case Au:
      return new n(P);
    case mu:
      return uu(P);
    case gu:
      return new n();
    case yu:
      return fu(P);
  }
}
var Fu = Bu, Ou = zt, We = Object.create, Lu = function() {
  function P() {
  }
  return function(L) {
    if (!Ou(L))
      return {};
    if (We)
      return We(L);
    P.prototype = L;
    var o = new P();
    return P.prototype = void 0, o;
  };
}(), $u = Lu, Hu = $u, bu = hn, ju = xe;
function Uu(P) {
  return typeof P.constructor == "function" && !ju(P) ? Hu(bu(P)) : {};
}
var wu = Uu, Qu = De, Yu = Gt, zu = "[object Map]";
function Gu(P) {
  return Yu(P) && Qu(P) == zu;
}
var Vu = Gu, Ku = Vu, Ju = Ee, Xe = Yt.exports, Ze = Xe && Xe.isMap, Wu = Ze ? Ju(Ze) : Ku, Xu = Wu, Zu = De, ku = Gt, qu = "[object Set]";
function _u(P) {
  return ku(P) && Zu(P) == qu;
}
var tf = _u, ef = tf, nf = Ee, ke = Yt.exports, qe = ke && ke.isSet, rf = qe ? nf(qe) : ef, of = rf, af = Sa, lf = Ta, sf = ln, uf = ml, ff = Ol, cf = ce.exports, df = $l, vf = Jl, pf = is, hf = ps, mf = ys, gf = De, Af = Vs, yf = Fu, Ef = wu, xf = ye, Sf = qt.exports, Cf = Xu, Tf = zt, Df = of, If = Se, Pf = Ce, Rf = 1, Mf = 2, Nf = 4, yn = "[object Arguments]", Bf = "[object Array]", Ff = "[object Boolean]", Of = "[object Date]", Lf = "[object Error]", En = "[object Function]", $f = "[object GeneratorFunction]", Hf = "[object Map]", bf = "[object Number]", xn = "[object Object]", jf = "[object RegExp]", Uf = "[object Set]", wf = "[object String]", Qf = "[object Symbol]", Yf = "[object WeakMap]", zf = "[object ArrayBuffer]", Gf = "[object DataView]", Vf = "[object Float32Array]", Kf = "[object Float64Array]", Jf = "[object Int8Array]", Wf = "[object Int16Array]", Xf = "[object Int32Array]", Zf = "[object Uint8Array]", kf = "[object Uint8ClampedArray]", qf = "[object Uint16Array]", _f = "[object Uint32Array]", rt = {};
rt[yn] = rt[Bf] = rt[zf] = rt[Gf] = rt[Ff] = rt[Of] = rt[Vf] = rt[Kf] = rt[Jf] = rt[Wf] = rt[Xf] = rt[Hf] = rt[bf] = rt[xn] = rt[jf] = rt[Uf] = rt[wf] = rt[Qf] = rt[Zf] = rt[kf] = rt[qf] = rt[_f] = !0;
rt[Lf] = rt[En] = rt[Yf] = !1;
function kt(P, L, o, n, t, e) {
  var a, r = L & Rf, i = L & Mf, c = L & Nf;
  if (o && (a = t ? o(P, n, t, e) : o(P)), a !== void 0)
    return a;
  if (!Tf(P))
    return P;
  var g = xf(P);
  if (g) {
    if (a = Af(P), !r)
      return df(P, a);
  } else {
    var d = gf(P), h = d == En || d == $f;
    if (Sf(P))
      return cf(P, r);
    if (d == xn || d == yn || h && !t) {
      if (a = i || h ? {} : Ef(P), !r)
        return i ? pf(P, ff(a, P)) : vf(P, uf(a, P));
    } else {
      if (!rt[d])
        return t ? P : {};
      a = yf(P, d, r);
    }
  }
  e || (e = new af());
  var f = e.get(P);
  if (f)
    return f;
  e.set(P, a), Df(P) ? P.forEach(function(s) {
    a.add(kt(s, L, o, s, P, e));
  }) : Cf(P) && P.forEach(function(s, p) {
    a.set(p, kt(s, L, o, p, P, e));
  });
  var l = c ? i ? mf : hf : i ? Pf : If, u = g ? void 0 : l(P);
  return lf(u || P, function(s, p) {
    u && (p = s, s = P[p]), sf(a, p, kt(s, L, o, p, P, e));
  }), a;
}
var tc = kt, ec = tc, nc = 1, rc = 4;
function oc(P) {
  return ec(P, nc | rc);
}
var _e = oc, Sn = { exports: {} };
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
          return h;
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
          return m;
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
        function h(M, B, F, O) {
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
            function V(W) {
              try {
                U(O.throw(W));
              } catch (K) {
                H(K);
              }
            }
            function U(W) {
              W.done ? $(W.value) : b(W.value).then(j, V);
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
              return V([U, W]);
            };
          }
          function V(U) {
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
        function m() {
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
              V(O[w](Y));
            } catch (J) {
              K($[0][3], J);
            }
          }
          function V(w) {
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
              return new Promise(function(j, V) {
                H = M[$](H), b(j, V, H.done, H.value);
              });
            };
          }
          function b($, H, j, V) {
            Promise.resolve(V).then(function(U) {
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
        var e = t(0), a = e(t(1)), r = e(t(89)), i = e(t(4)), c = e(t(26)), g = e(t(17)), d = e(t(121)), h = e(t(27)), f = e(t(91)), l = e(t(70)), u = e(t(28)), s = e(t(57));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.DomElement = void 0;
        var p = t(2), v = t(6), m = [];
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
                (0, h.default)(M).call(M, "<") === 0 ? T = y(M) : T = x(M);
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
              M.addEventListener(E, B), m.push({
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
                for (var B = -1, F = 0; F < m.length; F++) {
                  var O = m[F];
                  if (O.selector === T && O.fn === R && O.elem === M) {
                    B = F;
                    break;
                  }
                }
                if (B !== -1) {
                  var b = (0, f.default)(m).call(m, B, 1)[0].agentFn;
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
                }), (0, h.default)(N).call(N, E) < 0 && N.push(E), R.className = N.join(" ");
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
                  return (0, h.default)(b).call(b, E) === 0 ? N : b;
                }), N != "" && (0, h.default)(O).call(O, N) < 0 && O.push(N), N == "" && (O = S(O)), M.setAttribute("style", O.join("; "));
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
        var e = t(8), a = t(71).f, r = t(101), i = t(9), c = t(40), g = t(19), d = t(16), h = function(f) {
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
          var u = f.target, s = f.global, p = f.stat, v = f.proto, m = s ? e : p ? e[u] : (e[u] || {}).prototype, y = s ? i : i[u] || (i[u] = {}), A = y.prototype, x, S, D, I, C, E, T, R, N;
          for (I in l)
            x = r(s ? I : u + (p ? "." : "#") + I, f.forced), S = !x && m && d(m, I), E = y[I], S && (f.noTargetGet ? (N = a(m, I), T = N && N.value) : T = m[I]), C = S && T ? T : l[I], !(S && typeof E == typeof C) && (f.bind && S ? R = c(C, e) : f.wrap && S ? R = h(C) : v && typeof C == "function" ? R = c(Function.call, C) : R = C, (f.sham || C && C.sham || E && E.sham) && g(R, "sham", !0), y[I] = R, v && (D = u + "Prototype", d(i, D) || g(i, D, {}), i[D][I] = C, f.real && A && !A[I] && g(A, I, C)));
        };
      },
      function(o, n, t) {
        var e = t(0), a = e(t(92)), r = e(t(1)), i = e(t(256)), c = e(t(45)), g = e(t(46)), d = e(t(89)), h = e(t(26));
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
        function m(E, T) {
          var R, N, M, B = E.length || 0;
          for (R = 0; R < B && (N = E[R], M = T.call(E, N, R), M !== !1); R++)
            ;
        }
        n.arrForEach = m;
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
          var R = (0, h.default)(T).call(T, function(F) {
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
        var e = t(8), a = t(74), r = t(16), i = t(64), c = t(76), g = t(106), d = a("wks"), h = e.Symbol, f = g ? h : h && h.withoutSetter || i;
        o.exports = function(l) {
          return r(d, l) || (c && r(h, l) ? d[l] = h[l] : d[l] = f("Symbol." + l)), d[l];
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
        n.f = e ? c : function(d, h, f) {
          if (r(d), h = i(h, !0), r(f), a)
            try {
              return c(d, h, f);
            } catch {
            }
          if ("get" in f || "set" in f)
            throw TypeError("Accessors not supported");
          return "value" in f && (d[h] = f.value), d;
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
          var m;
          return function() {
            return typeof m > "u" && (m = Boolean(window && document && document.all && !window.atob)), m;
          };
        }(), a = function() {
          var m = {};
          return function(A) {
            if (typeof m[A] > "u") {
              var x = document.querySelector(A);
              if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
                try {
                  x = x.contentDocument.head;
                } catch {
                  x = null;
                }
              m[A] = x;
            }
            return m[A];
          };
        }(), r = [];
        function i(v) {
          for (var m = -1, y = 0; y < r.length; y++)
            if (r[y].identifier === v) {
              m = y;
              break;
            }
          return m;
        }
        function c(v, m) {
          for (var y = {}, A = [], x = 0; x < v.length; x++) {
            var S = v[x], D = m.base ? S[0] + m.base : S[0], I = y[D] || 0, C = "".concat(D, " ").concat(I);
            y[D] = I + 1;
            var E = i(C), T = {
              css: S[1],
              media: S[2],
              sourceMap: S[3]
            };
            E !== -1 ? (r[E].references++, r[E].updater(T)) : r.push({
              identifier: C,
              updater: p(T, m),
              references: 1
            }), A.push(C);
          }
          return A;
        }
        function g(v) {
          var m = document.createElement("style"), y = v.attributes || {};
          if (typeof y.nonce > "u") {
            var A = t.nc;
            A && (y.nonce = A);
          }
          if (Object.keys(y).forEach(function(S) {
            m.setAttribute(S, y[S]);
          }), typeof v.insert == "function")
            v.insert(m);
          else {
            var x = a(v.insert || "head");
            if (!x)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            x.appendChild(m);
          }
          return m;
        }
        function d(v) {
          if (v.parentNode === null)
            return !1;
          v.parentNode.removeChild(v);
        }
        var h = function() {
          var m = [];
          return function(A, x) {
            return m[A] = x, m.filter(Boolean).join(`
`);
          };
        }();
        function f(v, m, y, A) {
          var x = y ? "" : A.media ? "@media ".concat(A.media, " {").concat(A.css, "}") : A.css;
          if (v.styleSheet)
            v.styleSheet.cssText = h(m, x);
          else {
            var S = document.createTextNode(x), D = v.childNodes;
            D[m] && v.removeChild(D[m]), D.length ? v.insertBefore(S, D[m]) : v.appendChild(S);
          }
        }
        function l(v, m, y) {
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
        function p(v, m) {
          var y, A, x;
          if (m.singleton) {
            var S = s++;
            y = u || (u = g(m)), A = f.bind(null, y, S, !1), x = f.bind(null, y, S, !0);
          } else
            y = g(m), A = l.bind(null, y, m), x = function() {
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
        o.exports = function(v, m) {
          m = m || {}, !m.singleton && typeof m.singleton != "boolean" && (m.singleton = e()), v = v || [];
          var y = c(v, m);
          return function(x) {
            if (x = x || [], Object.prototype.toString.call(x) === "[object Array]") {
              for (var S = 0; S < y.length; S++) {
                var D = y[S], I = i(D);
                r[I].references--;
              }
              for (var C = c(x, m), E = 0; E < y.length; E++) {
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
            var h = {};
            if (d)
              for (var f = 0; f < this.length; f++) {
                var l = this[f][0];
                l != null && (h[l] = !0);
              }
            for (var u = 0; u < c.length; u++) {
              var s = [].concat(c[u]);
              d && h[s[0]] || (g && (s[2] ? s[2] = "".concat(g, " and ").concat(s[2]) : s[2] = g), i.push(s));
            }
          }, i;
        };
        function e(r, i) {
          var c = r[1] || "", g = r[3];
          if (!g)
            return c;
          if (i && typeof btoa == "function") {
            var d = a(g), h = g.sources.map(function(f) {
              return "/*# sourceURL=".concat(g.sourceRoot || "").concat(f, " */");
            });
            return [c].concat(h).concat([d]).join(`
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
        o.exports = function(d, h) {
          if (r(c, d))
            return c[d];
          h || (h = {});
          var f = [][d], l = r(h, "ACCESSORS") ? h.ACCESSORS : !1, u = r(h, 0) ? h[0] : g, s = r(h, 1) ? h[1] : void 0;
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
          function d(h, f) {
            return g.call(this, h, f) || this;
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
        var c = t(2), g = c.__importDefault(t(3)), d = c.__importDefault(t(95)), h = c.__importDefault(t(134)), f = function(l) {
          c.__extends(u, l);
          function u(s, p, v) {
            var m = l.call(this, s, p) || this;
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
            var x = new h.default(m, v);
            return m.dropList = x, s.on("click", function() {
              var S;
              p.selection.getRange() != null && (s.css("z-index", p.zIndex.get("menu")), (0, r.default)(S = p.txt.eventHooks.dropListMenuHoverEvents).call(S, function(D) {
                return D();
              }), x.show());
            }).on("mouseleave", function() {
              s.css("z-index", "auto"), x.hideTimeoutId = (0, i.default)(function() {
                x.hide();
              });
            }), m;
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
        var e = t(40), a = t(72), r = t(31), i = t(35), c = t(88), g = [].push, d = function(h) {
          var f = h == 1, l = h == 2, u = h == 3, s = h == 4, p = h == 6, v = h == 5 || p;
          return function(m, y, A, x) {
            for (var S = r(m), D = a(S), I = e(y, A, 3), C = i(D.length), E = 0, T = x || c, R = f ? T(m, C) : l ? T(m, 0) : void 0, N, M; C > E; E++)
              if ((v || E in D) && (N = D[E], M = I(N, E, S), h)) {
                if (f)
                  R[E] = M;
                else if (M)
                  switch (h) {
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
        var g = t(2), d = g.__importDefault(t(3)), h = t(7), f = function() {
          function l(u, s) {
            this.menu = u, this.conf = s, this.$container = d.default('<div class="w-e-panel-container"></div>');
            var p = u.editor;
            p.txt.eventHooks.clickEvents.push(l.hideCurAllPanels), p.txt.eventHooks.toolbarClickEvents.push(l.hideCurAllPanels), p.txt.eventHooks.dropListMenuHoverEvents.push(l.hideCurAllPanels);
          }
          return l.prototype.create = function() {
            var u = this, s = this.menu;
            if (!l.createdMenus.has(s)) {
              var p = this.conf, v = this.$container, m = p.width || 300, y = s.editor.$toolbarElem.getBoundingClientRect(), A = s.$elem.getBoundingClientRect(), x = y.height + y.top - A.top, S = (y.width - m) / 2 + y.left - A.left, D = 300;
              Math.abs(S) > D && (A.left < document.documentElement.clientWidth / 2 ? S = -A.width / 2 : S = -m + A.width / 2), v.css("width", m + "px").css("margin-top", x + "px").css("margin-left", S + "px").css("z-index", s.editor.zIndex.get("panel"));
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
                    H.data("active") || ((0, r.default)(N).call(N, function(V) {
                      V.data("active", !1), V.removeClass("w-e-active");
                    }), (0, r.default)(M).call(M, function(V) {
                      V.hide();
                    }), H.data("active", !0), H.addClass("w-e-active"), j.show());
                  });
                }
              }), v.on("click", function(F) {
                F.stopPropagation();
              }), s.$elem.append(v), p.setLinkValue && p.setLinkValue(v, "text"), p.setLinkValue && p.setLinkValue(v, "link"), (0, r.default)(R).call(R, function(F, O) {
                if (!!F) {
                  var b = F.events || [];
                  (0, r.default)(b).call(b, function($) {
                    var H, j = $.selector, V = $.type, U = $.fn || h.EMPTY_FN, W = M[O], K = (H = $.bindEnter) !== null && H !== void 0 ? H : !1, w = function(J) {
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
                    (0, i.default)(W).call(W, j).on(V, w), K && V === "click" && W.on("keyup", function(Y) {
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
        o.exports = function(h, f, l, u) {
          if (h) {
            var s = l ? h : h.prototype;
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
          function d(h, f) {
            return g.call(this, h, f) || this;
          }
          return d.prototype.setPanel = function(h) {
            this.panel = h;
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
          function h(f, l, u) {
            this.editor = f, this.$targetElem = l, this.conf = u, this._show = !1, this._isInsertTextContainer = !1;
            var s = g.default("<div></div>");
            s.addClass("w-e-tooltip"), this.$container = s;
          }
          return h.prototype.getPositionData = function() {
            var f = this.$container, l = 0, u = 0, s = 20, p = document.documentElement.scrollTop, v = this.$targetElem.getBoundingClientRect(), m = this.editor.$textElem.getBoundingClientRect(), y = this.$targetElem.getOffsetData(), A = g.default(y.parent), x = this.editor.$textElem.elems[0].scrollTop;
            if (this._isInsertTextContainer = A.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
              var S = A.getBoundingClientRect().height, D = y.top, I = y.left, C = y.height, E = D - x;
              E > s + 5 ? (l = E - s - 15, f.addClass("w-e-tooltip-up")) : E + C + s < S ? (l = E + C + 10, f.addClass("w-e-tooltip-down")) : (l = (E > 0 ? E : 0) + s + 10, f.addClass("w-e-tooltip-down")), I < 0 ? u = 0 : u = I;
            } else
              v.top < s || v.top - m.top < s ? (l = v.bottom + p + 5, f.addClass("w-e-tooltip-down")) : (l = v.top + p - s - 15, f.addClass("w-e-tooltip-up")), v.left < 0 ? u = 0 : u = v.left;
            return {
              top: l,
              left: u
            };
          }, h.prototype.appendMenus = function() {
            var f = this, l = this.conf, u = this.editor, s = this.$targetElem, p = this.$container;
            (0, r.default)(l).call(l, function(v, m) {
              var y = v.$elem, A = g.default("<div></div>");
              A.addClass("w-e-tooltip-item-wrapper "), A.append(y), p.append(A), y.on("click", function(x) {
                x.preventDefault();
                var S = v.onClick(u, s);
                S && f.remove();
              });
            });
          }, h.prototype.create = function() {
            var f, l, u = this.editor, s = this.$container;
            this.appendMenus();
            var p = this.getPositionData(), v = p.top, m = p.left;
            s.css("top", v + "px"), s.css("left", m + "px"), s.css("z-index", u.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(s) : g.default("body").append(s), this._show = !0, u.beforeDestroy((0, i.default)(f = this.remove).call(f, this)), u.txt.eventHooks.onBlurEvents.push((0, i.default)(l = this.remove).call(l, this));
          }, h.prototype.remove = function() {
            this.$container.remove(), this._show = !1;
          }, (0, a.default)(h.prototype, "isShow", {
            get: function() {
              return this._show;
            },
            enumerable: !1,
            configurable: !0
          }), h;
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
        var e = t(165), a = t(8), r = t(13), i = t(19), c = t(16), g = t(63), d = t(51), h = a.WeakMap, f, l, u, s = function(S) {
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
          var v = new h(), m = v.get, y = v.has, A = v.set;
          f = function(S, D) {
            return A.call(v, S, D), D;
          }, l = function(S) {
            return m.call(v, S) || {};
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
        function d(m) {
          var y = [];
          return (0, r.default)(m).call(m, function(A) {
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
        function h(m, y, A) {
          var x = m.selection, S = document.createRange();
          y.length > 1 ? (S.setStart(y.elems[0], 0), S.setEnd(y.elems[y.length - 1], y.elems[y.length - 1].childNodes.length)) : S.selectNodeContents(y.elems[0]), A && S.collapse(!1), x.saveRange(S), x.restoreSelection();
        }
        n.updateRange = h;
        function f(m) {
          var y;
          return m.prior ? m.prior : g.default((y = m.children()) === null || y === void 0 ? void 0 : y.elems[0]);
        }
        n.getStartPoint = f;
        function l(m) {
          var y;
          return m.prior ? m.prior : g.default((y = m.children()) === null || y === void 0 ? void 0 : y.last().elems[0]);
        }
        n.getEndPoint = l;
        function u(m, y, A) {
          A === void 0 && (A = null), m.parent().elems[0].insertBefore(y, A);
        }
        n.insertBefore = u;
        function s(m) {
          return document.createElement(m);
        }
        n.createElement = s;
        function p() {
          return document.createDocumentFragment();
        }
        n.createDocumentFragment = p;
        function v(m, y, A) {
          return A === void 0 && (A = "li"), (0, r.default)(m).call(m, function(x) {
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
          var h = g(this), f = h.string, l = h.index, u;
          return l >= f.length ? { value: void 0, done: !0 } : (u = e(f, l), h.index += u.length, { value: u, done: !1 });
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
        for (var h in e) {
          var f = a[h], l = f && f.prototype;
          l && r(l) !== d && i(l, d, h), c[h] = c.Array;
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
        }()) == "Arguments", g = function(d, h) {
          try {
            return d[h];
          } catch {
          }
        };
        o.exports = e ? a : function(d) {
          var h, f, l;
          return d === void 0 ? "Undefined" : d === null ? "Null" : typeof (f = g(h = Object(d), i)) == "string" ? f : c ? a(h) : (l = a(h)) == "Object" && typeof h.callee == "function" ? "Arguments" : l;
        };
      },
      function(o, n, t) {
        var e = t(25), a = t(112), r = t(35), i = t(40), c = t(113), g = t(114), d = function(f, l) {
          this.stopped = f, this.result = l;
        }, h = o.exports = function(f, l, u, s, p) {
          var v = i(l, u, s ? 2 : 1), m, y, A, x, S, D, I;
          if (p)
            m = f;
          else {
            if (y = c(f), typeof y != "function")
              throw TypeError("Target is not iterable");
            if (a(y)) {
              for (A = 0, x = r(f.length); x > A; A++)
                if (S = s ? v(e(I = f[A])[0], I[1]) : v(f[A]), S && S instanceof d)
                  return S;
              return new d(!1);
            }
            m = y.call(f);
          }
          for (D = m.next; !(I = D.call(m)).done; )
            if (S = g(m, v, I.value, s), typeof S == "object" && S && S instanceof d)
              return S;
          return new d(!1);
        };
        h.stop = function(f) {
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
        var e = t(14), a = t(59), r = t(48), i = t(30), c = t(60), g = t(16), d = t(100), h = Object.getOwnPropertyDescriptor;
        n.f = e ? h : function(l, u) {
          if (l = i(l), u = c(u, !0), d)
            try {
              return h(l, u);
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
        var e = t(5), a = t(167), r = t(105), i = t(171), c = t(37), g = t(19), d = t(53), h = t(10), f = t(43), l = t(44), u = t(104), s = u.IteratorPrototype, p = u.BUGGY_SAFARI_ITERATORS, v = h("iterator"), m = "keys", y = "values", A = "entries", x = function() {
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
              case m:
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
          }, M = D + " Iterator", B = !1, F = S.prototype, O = F[v] || F["@@iterator"] || E && F[E], b = !p && O || N(E), $ = D == "Array" && F.entries || O, H, j, V;
          if ($ && (H = r($.call(new S())), s !== Object.prototype && H.next && (!f && r(H) !== s && (i ? i(H, s) : typeof H[v] != "function" && g(H, v, x)), c(H, M, !0, !0), f && (l[M] = x))), E == y && O && O.name !== y && (B = !0, b = function() {
            return O.call(this);
          }), (!f || R) && F[v] !== b && g(F, v, b), l[D] = b, E)
            if (j = {
              values: N(y),
              keys: T ? b : N(m),
              entries: N(A)
            }, R)
              for (V in j)
                (p || B || !(V in F)) && d(F, V, j[V]);
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
        var e = t(25), a = t(169), r = t(80), i = t(51), c = t(108), g = t(73), d = t(63), h = ">", f = "<", l = "prototype", u = "script", s = d("IE_PROTO"), p = function() {
        }, v = function(S) {
          return f + u + h + S + f + "/" + u + h;
        }, m = function(S) {
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
          x = A ? m(A) : y();
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
          return function(g, d, h) {
            var f = e(g), l = a(f.length), u = r(h, l), s;
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
        var i = t(2), c = i.__importDefault(t(3)), g = t(6), d = i.__importDefault(t(267)), h = i.__importDefault(t(280)), f = i.__importDefault(t(281)), l = i.__importDefault(t(282)), u = i.__importDefault(t(301)), s = i.__importStar(t(416)), p = i.__importDefault(t(417)), v = i.__importDefault(t(418)), m = i.__importDefault(t(419)), y = i.__importStar(t(420)), A = i.__importDefault(t(423)), x = i.__importDefault(t(424)), S = i.__importDefault(t(425)), D = i.__importDefault(t(427)), I = i.__importDefault(t(437)), C = i.__importDefault(t(440)), E = i.__importStar(t(441)), T = i.__importDefault(t(23)), R = i.__importDefault(t(134)), N = i.__importDefault(t(24)), M = i.__importDefault(t(33)), B = i.__importDefault(t(38)), F = i.__importDefault(t(39)), O = 1, b = function() {
          function $(H, j) {
            this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + O++, this.toolbarSelector = H, this.textSelector = j, s.selectorValidator(this), this.config = g.deepClone(d.default), this.$toolbarElem = c.default("<div></div>"), this.$textContainerElem = c.default("<div></div>"), this.$textElem = c.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new h.default(this), this.cmd = new f.default(this), this.txt = new l.default(this), this.menus = new u.default(this), this.zIndex = new x.default(), this.change = new S.default(this), this.history = new D.default(this), this.onSelectionChange = new C.default(this);
            var V = I.default(this), U = V.disable, W = V.enable;
            this.disable = U, this.enable = W, this.isEnable = !0;
          }
          return $.prototype.initSelection = function(H) {
            p.default(this, H);
          }, $.prototype.create = function() {
            this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), m.default(this), s.default(this), this.txt.init(), this.menus.init(), y.default(this), this.initSelection(!0), v.default(this), this.change.observe(), this.history.observe(), E.default(this);
          }, $.prototype.beforeDestroy = function(H) {
            return this.beforeDestroyHooks.push(H), this;
          }, $.prototype.destroy = function() {
            var H, j = this;
            (0, r.default)(H = this.beforeDestroyHooks).call(H, function(V) {
              return V.call(j);
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
          return function(h) {
            var f = String(e(h));
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
          function d(h, f) {
            var l = this;
            this.$elem = h, this.editor = f, this._active = !1, h.on("click", function(u) {
              var s;
              c.default.hideCurAllPanels(), (0, r.default)(s = f.txt.eventHooks.menuClickEvents).call(s, function(p) {
                return p();
              }), u.stopPropagation(), f.selection.getRange() != null && l.clickHandler(u);
            });
          }
          return d.prototype.clickHandler = function(h) {
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
          for (var d = g.elems[0]; d && (0, r.default)(h = n.EXTRA_TAG).call(h, d.nodeName); ) {
            var h;
            if (d = d.parentElement, d.nodeName === "A")
              return d;
          }
        }
        n.getParentNodeA = i;
        function c(g) {
          var d, h = g.selection.getSelectionContainerElem();
          if (!(!((d = h == null ? void 0 : h.elems) === null || d === void 0) && d.length))
            return !1;
          if (h.getNodeName() === "A")
            return !0;
          var f = i(h);
          return !!(f && f.nodeName === "A");
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(57)), i = e(t(4)), c = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(6), h = g.__importDefault(t(135)), f = g.__importDefault(t(136)), l = function() {
          function u(s) {
            this.editor = s;
          }
          return u.prototype.insertImg = function(s, p, v) {
            var m = this.editor, y = m.config, A = "validate.", x = function(T, R) {
              return R === void 0 && (R = A), m.i18next.t(R + T);
            }, S = s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            S = S.replace("'", '"');
            var D = "";
            v && (D = v.replace("'", '"'), D = "data-href='" + encodeURIComponent(D) + "' ");
            var I = "";
            p && (I = p.replace(/</g, "&lt;").replace(/>/g, "&gt;"), I = I.replace("'", '"'), I = "alt='" + I + "' "), m.cmd.do("insertHTML", "<img src='" + S + "' " + I + D + 'style="max-width:100%;" contenteditable="false"/>'), y.linkImgCallback(s, p, v);
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
              var v = this.editor, m = v.config, y = "validate.", A = function(w) {
                return v.i18next.t(y + w);
              }, x = m.uploadImgServer, S = m.uploadImgShowBase64, D = m.uploadImgMaxSize, I = D / 1024 / 1024, C = m.uploadImgMaxLength, E = m.uploadFileName, T = m.uploadImgParams, R = m.uploadImgParamsWithUrl, N = m.uploadImgHeaders, M = m.uploadImgHooks, B = m.uploadImgTimeout, F = m.withCredentials, O = m.customUploadImg;
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
                  m.customAlert(A("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + $.join(`
`), "warning");
                  return;
                }
                if (b.length === 0) {
                  m.customAlert(A("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                  return;
                }
                if (b.length > C) {
                  m.customAlert(A("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + C + A("\u5F20\u56FE\u7247"), "warning");
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
                  var V = x.split("#");
                  x = V[0];
                  var U = V[1] || "";
                  (0, i.default)(d).call(d, T, function(K, w) {
                    R && ((0, c.default)(x).call(x, "?") > 0 ? x += "&" : x += "?", x = x + K + "=" + w), j.append(K, w);
                  }), U && (x += "#" + U);
                  var W = h.default(x, {
                    timeout: B,
                    formData: j,
                    headers: N,
                    withCredentials: !!F,
                    beforeSend: function(w) {
                      if (M.before)
                        return M.before(w, v, b);
                    },
                    onTimeout: function(w) {
                      m.customAlert(A("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error"), M.timeout && M.timeout(w, v);
                    },
                    onProgress: function(w, Y) {
                      var J = new f.default(v);
                      Y.lengthComputable && (w = Y.loaded / Y.total, J.show(w));
                    },
                    onError: function(w) {
                      m.customAlert(A("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", A("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + A("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + w.status), M.error && M.error(w, v);
                    },
                    onFail: function(w, Y) {
                      m.customAlert(A("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", A("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + A("\u8FD4\u56DE\u7ED3\u679C") + ": ") + Y), M.fail && M.fail(w, v, Y);
                    },
                    onSuccess: function(w, Y) {
                      if (M.customInsert) {
                        var J;
                        M.customInsert((0, r.default)(J = p.insertImg).call(J, p), Y, v);
                        return;
                      }
                      if (Y.errno != "0") {
                        m.customAlert(A("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", A("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + A("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + Y.errno), M.fail && M.fail(w, v, Y);
                        return;
                      }
                      var k = Y.data;
                      (0, i.default)(k).call(k, function(nt) {
                        typeof nt == "string" ? p.insertImg(nt) : p.insertImg(nt.url, nt.alt, nt.href);
                      }), M.success && M.success(w, v, Y);
                    }
                  });
                  typeof W == "string" && m.customAlert(W, "error");
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
        function h(u, s, p) {
          var v;
          if (!!u.hasChildNodes()) {
            var m = u.cloneNode(), y = !1;
            s.nodeValue === "" && (y = !0);
            var A = [];
            return (0, i.default)(v = u.childNodes).call(v, function(x) {
              if (!f(x, s) && y && (m.appendChild(x.cloneNode(!0)), x.nodeName !== "BR" && A.push(x)), f(x, s)) {
                if (x.nodeType === 1) {
                  var S = h(x, s, p);
                  S && S.textContent !== "" && (m == null || m.appendChild(S));
                }
                if (x.nodeType === 3 && s.isEqualNode(x)) {
                  var D = l(x, p);
                  m.textContent = D;
                }
                y = !0;
              }
            }), (0, i.default)(A).call(A, function(x) {
              var S = x;
              S.remove();
            }), m;
          }
        }
        n.getCursorNextNode = h;
        function f(u, s) {
          return u.nodeType === 3 ? u.nodeValue === s.nodeValue : u.contains(s);
        }
        function l(u, s, p) {
          p === void 0 && (p = !0);
          var v = u.nodeValue, m = v == null ? void 0 : (0, c.default)(v).call(v, 0, s);
          if (v = v == null ? void 0 : (0, c.default)(v).call(v, s), !p) {
            var y = v;
            v = m, m = y;
          }
          return u.nodeValue = m, v;
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
        var e = t(11), a = /#|\.prototype\./, r = function(h, f) {
          var l = c[i(h)];
          return l == d ? !0 : l == g ? !1 : typeof f == "function" ? e(f) : !!f;
        }, i = r.normalize = function(h) {
          return String(h).replace(a, ".").toLowerCase();
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
        var e = t(105), a = t(19), r = t(16), i = t(10), c = t(43), g = i("iterator"), d = !1, h = function() {
          return this;
        }, f, l, u;
        [].keys && (u = [].keys(), "next" in u ? (l = e(e(u)), l !== Object.prototype && (f = l)) : d = !0), f == null && (f = {}), !c && !r(f, g) && a(f, g, h), o.exports = {
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
          var d = a(c), h = 0, f = [], l;
          for (l in d)
            !e(i, l) && e(d, l) && f.push(l);
          for (; g.length > h; )
            e(d, l = g[h++]) && (~r(f, l) || f.push(l));
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
          var d = e(g), h = a.f;
          i && d && !d[c] && h(d, c, {
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
          var h = !1;
          try {
            var f = {};
            f[a] = function() {
              return {
                next: function() {
                  return { done: h = !0 };
                }
              };
            }, g(f);
          } catch {
          }
          return h;
        };
      },
      function(o, n, t) {
        var e = t(25), a = t(41), r = t(10), i = r("species");
        o.exports = function(c, g) {
          var d = e(c).constructor, h;
          return d === void 0 || (h = e(d)[i]) == null ? g : a(h);
        };
      },
      function(o, n, t) {
        var e = t(8), a = t(11), r = t(34), i = t(40), c = t(108), g = t(73), d = t(118), h = e.location, f = e.setImmediate, l = e.clearImmediate, u = e.process, s = e.MessageChannel, p = e.Dispatch, v = 0, m = {}, y = "onreadystatechange", A, x, S, D = function(T) {
          if (m.hasOwnProperty(T)) {
            var R = m[T];
            delete m[T], R();
          }
        }, I = function(T) {
          return function() {
            D(T);
          };
        }, C = function(T) {
          D(T.data);
        }, E = function(T) {
          e.postMessage(T + "", h.protocol + "//" + h.host);
        };
        (!f || !l) && (f = function(R) {
          for (var N = [], M = 1; arguments.length > M; )
            N.push(arguments[M++]);
          return m[++v] = function() {
            (typeof R == "function" ? R : Function(R)).apply(void 0, N);
          }, A(v), v;
        }, l = function(R) {
          delete m[R];
        }, r(u) == "process" ? A = function(T) {
          u.nextTick(I(T));
        } : p && p.now ? A = function(T) {
          p.now(I(T));
        } : s && !d ? (x = new s(), S = x.port2, x.port1.onmessage = C, A = i(S.postMessage, S, 1)) : e.addEventListener && typeof postMessage == "function" && !e.importScripts && !a(E) && h.protocol !== "file:" ? (A = E, e.addEventListener("message", C, !1)) : y in g("script") ? A = function(T) {
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
        var e = t(5), a = t(8), r = t(123), i = t(11), c = t(19), g = t(66), d = t(83), h = t(13), f = t(37), l = t(18).f, u = t(32).forEach, s = t(14), p = t(42), v = p.set, m = p.getterFor;
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
            var N = m(y);
            u(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(M) {
              var B = M == "add" || M == "set";
              M in E && !(D && M == "clear") && c(R.prototype, M, function(F, O) {
                var b = N(this).collection;
                if (!B && D && !h(F))
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
        var e = t(51), a = t(13), r = t(16), i = t(18).f, c = t(64), g = t(200), d = c("meta"), h = 0, f = Object.isExtensible || function() {
          return !0;
        }, l = function(m) {
          i(m, d, { value: {
            objectID: "O" + ++h,
            weakData: {}
          } });
        }, u = function(m, y) {
          if (!a(m))
            return typeof m == "symbol" ? m : (typeof m == "string" ? "S" : "P") + m;
          if (!r(m, d)) {
            if (!f(m))
              return "F";
            if (!y)
              return "E";
            l(m);
          }
          return m[d].objectID;
        }, s = function(m, y) {
          if (!r(m, d)) {
            if (!f(m))
              return !0;
            if (!y)
              return !1;
            l(m);
          }
          return m[d].weakData;
        }, p = function(m) {
          return g && v.REQUIRED && f(m) && !r(m, d) && l(m), m;
        }, v = o.exports = {
          REQUIRED: !1,
          fastKey: u,
          getWeakData: s,
          onFreeze: p
        };
        e[d] = !0;
      },
      function(o, n, t) {
        var e = t(18).f, a = t(77), r = t(110), i = t(40), c = t(83), g = t(66), d = t(75), h = t(111), f = t(14), l = t(123).fastKey, u = t(42), s = u.set, p = u.getterFor;
        o.exports = {
          getConstructor: function(v, m, y, A) {
            var x = v(function(C, E) {
              c(C, x, m), s(C, {
                type: m,
                index: a(null),
                first: void 0,
                last: void 0,
                size: 0
              }), f || (C.size = 0), E != null && g(E, C[A], C, y);
            }), S = p(m), D = function(C, E, T) {
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
          setStrong: function(v, m, y) {
            var A = m + " Iterator", x = p(m), S = p(A);
            d(v, m, function(D, I) {
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
            }, y ? "entries" : "values", !y, !0), h(m);
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
        function h(l, u, s) {
          u === void 0 && (u = !0), s === void 0 && (s = !1);
          var p = l.clipboardData, v = "";
          if (p && (v = p.getData("text/html")), !v) {
            var m = d(l);
            if (!m)
              return "";
            v = "<p>" + m + "</p>";
          }
          return v = v.replace(/<(\d)/gm, function(y, A) {
            return "&lt;" + A;
          }), v = v.replace(/<(\/?meta.*?)>/gim, ""), v = g.default(v, u, s), v;
        }
        n.getPasteHtml = h;
        function f(l) {
          var u, s = [], p = d(l);
          if (p)
            return s;
          var v = (u = l.clipboardData) === null || u === void 0 ? void 0 : u.items;
          return v && (0, r.default)(c).call(c, v, function(m, y) {
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
        var c = t(2), g = c.__importDefault(t(3)), d = t(7), h = function() {
          function f(l, u) {
            var s = this;
            this.hideTimeoutId = 0, this.menu = l, this.conf = u;
            var p = g.default('<div class="w-e-droplist"></div>'), v = g.default("<p>" + u.title + "</p>");
            v.addClass("w-e-dp-title"), p.append(v);
            var m = u.list || [], y = u.type || "list", A = u.clickHandler || d.EMPTY_FN, x = g.default('<ul class="' + (y === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
            (0, r.default)(m).call(m, function(S) {
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
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(92)), r = e(t(1)), i = e(t(4));
        (0, r.default)(n, "__esModule", {
          value: !0
        });
        var c = t(6);
        function g(d, h) {
          var f = new XMLHttpRequest();
          if (f.open("POST", d), f.timeout = h.timeout || 10 * 1e3, f.ontimeout = function() {
            console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6"), h.onTimeout && h.onTimeout(f);
          }, f.upload && (f.upload.onprogress = function(u) {
            var s = u.loaded / u.total;
            h.onProgress && h.onProgress(s, u);
          }), h.headers && (0, i.default)(c).call(c, h.headers, function(u, s) {
            f.setRequestHeader(u, s);
          }), f.withCredentials = !!h.withCredentials, h.beforeSend) {
            var l = h.beforeSend(f);
            if (l && (0, a.default)(l) === "object" && l.prevent)
              return l.msg;
          }
          return f.onreadystatechange = function() {
            if (f.readyState === 4) {
              var u = f.status;
              if (!(u < 200) && !(u >= 300 && u < 400)) {
                if (u >= 400) {
                  console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + u), h.onError && h.onError(f);
                  return;
                }
                var s = f.responseText, p;
                if ((0, a.default)(s) !== "object")
                  try {
                    p = JSON.parse(s);
                  } catch {
                    console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", s), h.onFail && h.onFail(f, s);
                    return;
                  }
                else
                  p = s;
                h.onSuccess(f, p);
              }
            }
          }, f.send(h.formData || null), f;
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(342)), i = e(t(46));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(3)), d = function() {
          function h(f) {
            this.editor = f, this.$textContainer = f.$textContainerElem, this.$bar = g.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
          }
          return h.prototype.show = function(f) {
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
          }, h.prototype.hide = function() {
            var f = this.$bar;
            f.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
          }, h;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.ListType = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(24)), g = t(47), d = r.__importStar(t(371)), h;
        (function(l) {
          l.OrderedList = "OL", l.UnorderedList = "UL";
        })(h = n.ListType || (n.ListType = {}));
        var f = function(l) {
          r.__extends(u, l);
          function u(s) {
            var p = this, v = i.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`), m = {
              width: 130,
              title: "\u5E8F\u5217",
              type: "list",
              list: [{
                $elem: i.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + s.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + `
                        <p>`),
                value: h.UnorderedList
              }, {
                $elem: i.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + s.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + `
                        <p>`),
                value: h.OrderedList
              }],
              clickHandler: function(A) {
                p.command(A);
              }
            };
            return p = l.call(this, v, s, m) || this, p;
          }
          return u.prototype.command = function(s) {
            var p = this.editor, v = p.selection.getSelectionContainerElem();
            v !== void 0 && (this.handleSelectionRangeNodes(s), this.tryChangeActive());
          }, u.prototype.validator = function(s, p, v) {
            return !(!s.length || !p.length || v.equal(s) || v.equal(p));
          }, u.prototype.handleSelectionRangeNodes = function(s) {
            var p = this.editor, v = p.selection, m = s.toLowerCase(), y = v.getSelectionContainerElem(), A = v.getSelectionStartElem().getNodeTop(p), x = v.getSelectionEndElem().getNodeTop(p);
            if (!!this.validator(A, x, p.$textElem)) {
              var S = v.getRange(), D = S == null ? void 0 : S.collapsed;
              p.$textElem.equal(y) || (y = y.getNodeTop(p));
              var I = {
                editor: p,
                listType: s,
                listTarget: m,
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
            return p === h.OrderedList || p === h.UnorderedList;
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
          function h(f) {
            var l;
            this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = c.default(this.template), this.$child = (l = f == null ? void 0 : f.childNodes()) === null || l === void 0 ? void 0 : l.clone(!0);
          }
          return h.prototype.init = function() {
            var f = this.$child, l = this.getInputContainer();
            f && f.insertAfter(l);
          }, h.prototype.getInput = function() {
            var f = this.$todo, l = (0, r.default)(f).call(f, "input");
            return l;
          }, h.prototype.getInputContainer = function() {
            var f = this.getInput().parent();
            return f;
          }, h.prototype.getTodo = function() {
            return this.$todo;
          }, h;
        }();
        n.todo = g;
        function d(h) {
          var f = new g(h);
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
            var d = String(a(c)), h = e(g), f = d.length, l, u;
            return h < 0 || h >= f ? i ? "" : void 0 : (l = d.charCodeAt(h), l < 55296 || l > 56319 || h + 1 === f || (u = d.charCodeAt(h + 1)) < 56320 || u > 57343 ? i ? d.charAt(h) : l : i ? d.slice(h, h + 2) : (l - 55296 << 10) + (u - 56320) + 65536);
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
        o.exports = function(d, h, f) {
          var l = h + " Iterator";
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
          for (var h = i(d), f = h.length, l = 0, u; f > l; )
            a.f(g, u = h[l++], d[u]);
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
          return function(d, h) {
            return e(d), a(h), r ? c.call(d, h) : d.__proto__ = h, d;
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
        var e = t(30), a = t(82), r = t(44), i = t(42), c = t(75), g = "Array Iterator", d = i.set, h = i.getterFor(g);
        o.exports = c(Array, "Array", function(f, l) {
          d(this, {
            type: g,
            target: e(f),
            index: 0,
            kind: l
          });
        }, function() {
          var f = h(this), l = f.target, u = f.kind, s = f.index++;
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
        var e = t(5), a = t(43), r = t(8), i = t(36), c = t(109), g = t(53), d = t(110), h = t(37), f = t(111), l = t(13), u = t(41), s = t(83), p = t(34), v = t(102), m = t(66), y = t(115), A = t(116), x = t(117).set, S = t(176), D = t(119), I = t(177), C = t(85), E = t(120), T = t(42), R = t(101), N = t(10), M = t(86), B = N("species"), F = "Promise", O = T.get, b = T.set, $ = T.getterFor(F), H = c, j = r.TypeError, V = r.document, U = r.process, W = i("fetch"), K = C.f, w = K, Y = p(U) == "process", J = !!(V && V.createEvent && r.dispatchEvent), k = "unhandledrejection", nt = "rejectionhandled", at = 0, ct = 1, Vt = 2, st = 1, jt = 2, Dt, ut, ht, It, mt = R(F, function() {
          var X = v(H) !== String(H);
          if (!X && (M === 66 || !Y && typeof PromiseRejectionEvent != "function") || a && !H.prototype.finally)
            return !0;
          if (M >= 51 && /native code/.test(H))
            return !1;
          var Q = H.resolve(1), q = function(G) {
            G(function() {
            }, function() {
            });
          }, tt = Q.constructor = {};
          return tt[B] = q, !(Q.then(function() {
          }) instanceof q);
        }), ae = mt || !y(function(X) {
          H.all(X).catch(function() {
          });
        }), Pt = function(X) {
          var Q;
          return l(X) && typeof (Q = X.then) == "function" ? Q : !1;
        }, Et = function(X, Q, q) {
          if (!Q.notified) {
            Q.notified = !0;
            var tt = Q.reactions;
            S(function() {
              for (var G = Q.value, z = Q.state == ct, Z = 0; tt.length > Z; ) {
                var _ = tt[Z++], et = z ? _.ok : _.fail, it = _.resolve, ft = _.reject, vt = _.domain, lt, wt, Kt;
                try {
                  et ? (z || (Q.rejection === jt && Nt(X, Q), Q.rejection = st), et === !0 ? lt = G : (vt && vt.enter(), lt = et(G), vt && (vt.exit(), Kt = !0)), lt === _.promise ? ft(j("Promise-chain cycle")) : (wt = Pt(lt)) ? wt.call(lt, it, ft) : it(lt)) : ft(G);
                } catch (Cn) {
                  vt && !Kt && vt.exit(), ft(Cn);
                }
              }
              Q.reactions = [], Q.notified = !1, q && !Q.rejection && Ut(X, Q);
            });
          }
        }, Rt = function(X, Q, q) {
          var tt, G;
          J ? (tt = V.createEvent("Event"), tt.promise = Q, tt.reason = q, tt.initEvent(X, !1, !0), r.dispatchEvent(tt)) : tt = { promise: Q, reason: q }, (G = r["on" + X]) ? G(tt) : X === k && I("Unhandled promise rejection", q);
        }, Ut = function(X, Q) {
          x.call(r, function() {
            var q = Q.value, tt = Mt(Q), G;
            if (tt && (G = E(function() {
              Y ? U.emit("unhandledRejection", q, X) : Rt(k, X, q);
            }), Q.rejection = Y || Mt(Q) ? jt : st, G.error))
              throw G.value;
          });
        }, Mt = function(X) {
          return X.rejection !== st && !X.parent;
        }, Nt = function(X, Q) {
          x.call(r, function() {
            Y ? U.emit("rejectionHandled", X) : Rt(nt, X, Q.value);
          });
        }, gt = function(X, Q, q, tt) {
          return function(G) {
            X(Q, q, G, tt);
          };
        }, yt = function(X, Q, q, tt) {
          Q.done || (Q.done = !0, tt && (Q = tt), Q.value = q, Q.state = Vt, Et(X, Q, !0));
        }, xt = function(X, Q, q, tt) {
          if (!Q.done) {
            Q.done = !0, tt && (Q = tt);
            try {
              if (X === q)
                throw j("Promise can't be resolved itself");
              var G = Pt(q);
              G ? S(function() {
                var z = { done: !1 };
                try {
                  G.call(
                    q,
                    gt(xt, X, z, Q),
                    gt(yt, X, z, Q)
                  );
                } catch (Z) {
                  yt(X, z, Z, Q);
                }
              }) : (Q.value = q, Q.state = ct, Et(X, Q, !1));
            } catch (z) {
              yt(X, { done: !1 }, z, Q);
            }
          }
        };
        mt && (H = function(Q) {
          s(this, H, F), u(Q), Dt.call(this);
          var q = O(this);
          try {
            Q(gt(xt, this, q), gt(yt, this, q));
          } catch (tt) {
            yt(this, q, tt);
          }
        }, Dt = function(Q) {
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
        }, Dt.prototype = d(H.prototype, {
          then: function(Q, q) {
            var tt = $(this), G = K(A(this, H));
            return G.ok = typeof Q == "function" ? Q : !0, G.fail = typeof q == "function" && q, G.domain = Y ? U.domain : void 0, tt.parent = !0, tt.reactions.push(G), tt.state != at && Et(this, tt, !1), G.promise;
          },
          catch: function(X) {
            return this.then(void 0, X);
          }
        }), ut = function() {
          var X = new Dt(), Q = O(X);
          this.promise = X, this.resolve = gt(xt, X, Q), this.reject = gt(yt, X, Q);
        }, C.f = K = function(X) {
          return X === H || X === ht ? new ut(X) : w(X);
        }, !a && typeof c == "function" && (It = c.prototype.then, g(c.prototype, "then", function(Q, q) {
          var tt = this;
          return new H(function(G, z) {
            It.call(tt, G, z);
          }).then(Q, q);
        }, { unsafe: !0 }), typeof W == "function" && e({ global: !0, enumerable: !0, forced: !0 }, {
          fetch: function(Q) {
            return D(H, W.apply(r, arguments));
          }
        }))), e({ global: !0, wrap: !0, forced: mt }, {
          Promise: H
        }), h(H, F, !1, !0), f(F), ht = i(F), e({ target: F, stat: !0, forced: mt }, {
          reject: function(Q) {
            var q = K(this);
            return q.reject.call(void 0, Q), q.promise;
          }
        }), e({ target: F, stat: !0, forced: a || mt }, {
          resolve: function(Q) {
            return D(a && this === ht ? H : this, Q);
          }
        }), e({ target: F, stat: !0, forced: ae }, {
          all: function(Q) {
            var q = this, tt = K(q), G = tt.resolve, z = tt.reject, Z = E(function() {
              var _ = u(q.resolve), et = [], it = 0, ft = 1;
              m(Q, function(vt) {
                var lt = it++, wt = !1;
                et.push(void 0), ft++, _.call(q, vt).then(function(Kt) {
                  wt || (wt = !0, et[lt] = Kt, --ft || G(et));
                }, z);
              }), --ft || G(et);
            });
            return Z.error && z(Z.value), tt.promise;
          },
          race: function(Q) {
            var q = this, tt = K(q), G = tt.reject, z = E(function() {
              var Z = u(q.resolve);
              m(Q, function(_) {
                Z.call(q, _).then(tt.resolve, G);
              });
            });
            return z.error && G(z.value), tt.promise;
          }
        });
      },
      function(o, n, t) {
        var e = t(8), a = t(71).f, r = t(34), i = t(117).set, c = t(118), g = e.MutationObserver || e.WebKitMutationObserver, d = e.process, h = e.Promise, f = r(d) == "process", l = a(e, "queueMicrotask"), u = l && l.value, s, p, v, m, y, A, x, S;
        u || (s = function() {
          var D, I;
          for (f && (D = d.domain) && D.exit(); p; ) {
            I = p.fn, p = p.next;
            try {
              I();
            } catch (C) {
              throw p ? m() : v = void 0, C;
            }
          }
          v = void 0, D && D.enter();
        }, f ? m = function() {
          d.nextTick(s);
        } : g && !c ? (y = !0, A = document.createTextNode(""), new g(s).observe(A, { characterData: !0 }), m = function() {
          A.data = y = !y;
        }) : h && h.resolve ? (x = h.resolve(void 0), S = x.then, m = function() {
          S.call(x, s);
        }) : m = function() {
          i.call(e, s);
        }), o.exports = u || function(D) {
          var I = { fn: D, next: void 0 };
          v && (v.next = I), p || (p = I, m()), v = I;
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
            var h = this, f = r.f(h), l = f.resolve, u = f.reject, s = i(function() {
              var p = a(h.resolve), v = [], m = 0, y = 1;
              c(d, function(A) {
                var x = m++, S = !1;
                v.push(void 0), y++, p.call(h, A).then(function(D) {
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
        var e = t(5), a = t(43), r = t(109), i = t(11), c = t(36), g = t(116), d = t(119), h = t(53), f = !!r && i(function() {
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
        }), !a && typeof r == "function" && !r.prototype.finally && h(r.prototype, "finally", c("Promise").prototype.finally);
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
          map: function(h) {
            return a(this, h, arguments.length > 1 ? arguments[1] : void 0);
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
        var e = t(5), a = t(78).indexOf, r = t(67), i = t(22), c = [].indexOf, g = !!c && 1 / [1].indexOf(1, -0) < 0, d = r("indexOf"), h = i("indexOf", { ACCESSORS: !0, 1: 0 });
        e({ target: "Array", proto: !0, forced: g || !d || !h }, {
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
        var e = t(5), a = t(79), r = t(62), i = t(35), c = t(31), g = t(88), d = t(69), h = t(56), f = t(22), l = h("splice"), u = f("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), s = Math.max, p = Math.min, v = 9007199254740991, m = "Maximum allowed length exceeded";
        e({ target: "Array", proto: !0, forced: !l || !u }, {
          splice: function(A, x) {
            var S = c(this), D = i(S.length), I = a(A, D), C = arguments.length, E, T, R, N, M, B;
            if (C === 0 ? E = T = 0 : C === 1 ? (E = 0, T = D - I) : (E = C - 2, T = p(s(r(x), 0), D - I)), D + E - T > v)
              throw TypeError(m);
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
          filter: function(h) {
            return a(this, h, arguments.length > 1 ? arguments[1] : void 0);
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
        var e = t(41), a = t(13), r = [].slice, i = {}, c = function(g, d, h) {
          if (!(d in i)) {
            for (var f = [], l = 0; l < d; l++)
              f[l] = "a[" + l + "]";
            i[d] = Function("C,a", "return new C(" + f.join(",") + ")");
          }
          return i[d](g, h);
        };
        o.exports = Function.bind || function(d) {
          var h = e(this), f = r.call(arguments, 1), l = function() {
            var s = f.concat(r.call(arguments));
            return this instanceof l ? c(h, s.length, s) : h.apply(d, s);
          };
          return a(h.prototype) && (l.prototype = h.prototype), l;
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
        var e = t(5), a = t(11), r = t(55), i = t(13), c = t(31), g = t(35), d = t(69), h = t(88), f = t(56), l = t(10), u = t(86), s = l("isConcatSpreadable"), p = 9007199254740991, v = "Maximum allowed index exceeded", m = u >= 51 || !a(function() {
          var S = [];
          return S[s] = !1, S.concat()[0] !== S;
        }), y = f("concat"), A = function(S) {
          if (!i(S))
            return !1;
          var D = S[s];
          return D !== void 0 ? !!D : r(S);
        }, x = !m || !y;
        e({ target: "Array", proto: !0, forced: x }, {
          concat: function(D) {
            var I = c(this), C = h(I, 0), E = 0, T, R, N, M, B;
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
        var e = t(5), a = t(8), r = t(36), i = t(43), c = t(14), g = t(76), d = t(106), h = t(11), f = t(16), l = t(55), u = t(13), s = t(25), p = t(31), v = t(30), m = t(60), y = t(48), A = t(77), x = t(52), S = t(126), D = t(235), I = t(127), C = t(71), E = t(18), T = t(59), R = t(19), N = t(53), M = t(74), B = t(63), F = t(51), O = t(64), b = t(10), $ = t(93), H = t(12), j = t(37), V = t(42), U = t(32).forEach, W = B("hidden"), K = "Symbol", w = "prototype", Y = b("toPrimitive"), J = V.set, k = V.getterFor(K), nt = Object[w], at = a.Symbol, ct = r("JSON", "stringify"), Vt = C.f, st = E.f, jt = D.f, Dt = T.f, ut = M("symbols"), ht = M("op-symbols"), It = M("string-to-symbol-registry"), mt = M("symbol-to-string-registry"), ae = M("wks"), Pt = a.QObject, Et = !Pt || !Pt[w] || !Pt[w].findChild, Rt = c && h(function() {
          return A(st({}, "a", {
            get: function() {
              return st(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(G, z, Z) {
          var _ = Vt(nt, z);
          _ && delete nt[z], st(G, z, Z), _ && G !== nt && st(nt, z, _);
        } : st, Ut = function(G, z) {
          var Z = ut[G] = A(at[w]);
          return J(Z, {
            type: K,
            tag: G,
            description: z
          }), c || (Z.description = z), Z;
        }, Mt = d ? function(G) {
          return typeof G == "symbol";
        } : function(G) {
          return Object(G) instanceof at;
        }, Nt = function(z, Z, _) {
          z === nt && Nt(ht, Z, _), s(z);
          var et = m(Z, !0);
          return s(_), f(ut, et) ? (_.enumerable ? (f(z, W) && z[W][et] && (z[W][et] = !1), _ = A(_, { enumerable: y(0, !1) })) : (f(z, W) || st(z, W, y(1, {})), z[W][et] = !0), Rt(z, et, _)) : st(z, et, _);
        }, gt = function(z, Z) {
          s(z);
          var _ = v(Z), et = x(_).concat(q(_));
          return U(et, function(it) {
            (!c || xt.call(_, it)) && Nt(z, it, _[it]);
          }), z;
        }, yt = function(z, Z) {
          return Z === void 0 ? A(z) : gt(A(z), Z);
        }, xt = function(z) {
          var Z = m(z, !0), _ = Dt.call(this, Z);
          return this === nt && f(ut, Z) && !f(ht, Z) ? !1 : _ || !f(this, Z) || !f(ut, Z) || f(this, W) && this[W][Z] ? _ : !0;
        }, X = function(z, Z) {
          var _ = v(z), et = m(Z, !0);
          if (!(_ === nt && f(ut, et) && !f(ht, et))) {
            var it = Vt(_, et);
            return it && f(ut, et) && !(f(_, W) && _[W][et]) && (it.enumerable = !0), it;
          }
        }, Q = function(z) {
          var Z = jt(v(z)), _ = [];
          return U(Z, function(et) {
            !f(ut, et) && !f(F, et) && _.push(et);
          }), _;
        }, q = function(z) {
          var Z = z === nt, _ = jt(Z ? ht : v(z)), et = [];
          return U(_, function(it) {
            f(ut, it) && (!Z || f(nt, it)) && et.push(ut[it]);
          }), et;
        };
        if (g || (at = function() {
          if (this instanceof at)
            throw TypeError("Symbol is not a constructor");
          var z = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Z = O(z), _ = function(et) {
            this === nt && _.call(ht, et), f(this, W) && f(this[W], Z) && (this[W][Z] = !1), Rt(this, Z, y(1, et));
          };
          return c && Et && Rt(nt, Z, { configurable: !0, set: _ }), Ut(Z, z);
        }, N(at[w], "toString", function() {
          return k(this).tag;
        }), N(at, "withoutSetter", function(G) {
          return Ut(O(G), G);
        }), T.f = xt, E.f = Nt, C.f = X, S.f = D.f = Q, I.f = q, $.f = function(G) {
          return Ut(b(G), G);
        }, c && (st(at[w], "description", {
          configurable: !0,
          get: function() {
            return k(this).description;
          }
        }), i || N(nt, "propertyIsEnumerable", xt, { unsafe: !0 }))), e({ global: !0, wrap: !0, forced: !g, sham: !g }, {
          Symbol: at
        }), U(x(ae), function(G) {
          H(G);
        }), e({ target: K, stat: !0, forced: !g }, {
          for: function(G) {
            var z = String(G);
            if (f(It, z))
              return It[z];
            var Z = at(z);
            return It[z] = Z, mt[Z] = z, Z;
          },
          keyFor: function(z) {
            if (!Mt(z))
              throw TypeError(z + " is not a symbol");
            if (f(mt, z))
              return mt[z];
          },
          useSetter: function() {
            Et = !0;
          },
          useSimple: function() {
            Et = !1;
          }
        }), e({ target: "Object", stat: !0, forced: !g, sham: !c }, {
          create: yt,
          defineProperty: Nt,
          defineProperties: gt,
          getOwnPropertyDescriptor: X
        }), e({ target: "Object", stat: !0, forced: !g }, {
          getOwnPropertyNames: Q,
          getOwnPropertySymbols: q
        }), e({ target: "Object", stat: !0, forced: h(function() {
          I.f(1);
        }) }, {
          getOwnPropertySymbols: function(z) {
            return I.f(p(z));
          }
        }), ct) {
          var tt = !g || h(function() {
            var G = at();
            return ct([G]) != "[null]" || ct({ a: G }) != "{}" || ct(Object(G)) != "{}";
          });
          e({ target: "JSON", stat: !0, forced: tt }, {
            stringify: function(z, Z, _) {
              for (var et = [z], it = 1, ft; arguments.length > it; )
                et.push(arguments[it++]);
              if (ft = Z, !(!u(Z) && z === void 0 || Mt(z)))
                return l(Z) || (Z = function(vt, lt) {
                  if (typeof ft == "function" && (lt = ft.call(this, vt, lt)), !Mt(lt))
                    return lt;
                }), et[1] = Z, ct.apply(null, et);
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
        o.exports = g ? function(h, f) {
          var l = a(String(h));
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
        var e = t(5), a = t(13), r = t(55), i = t(79), c = t(35), g = t(30), d = t(69), h = t(10), f = t(56), l = t(22), u = f("slice"), s = l("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), p = h("species"), v = [].slice, m = Math.max;
        e({ target: "Array", proto: !0, forced: !u || !s }, {
          slice: function(A, x) {
            var S = g(this), D = c(S.length), I = i(A, D), C = i(x === void 0 ? D : x, D), E, T, R;
            if (r(S) && (E = S.constructor, typeof E == "function" && (E === Array || r(E.prototype)) ? E = void 0 : a(E) && (E = E[p], E === null && (E = void 0)), E === Array || E === void 0))
              return v.call(S, I, C);
            for (T = new (E === void 0 ? Array : E)(m(C - I, 0)), R = 0; I < C; I++, R++)
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
          return function(h, f) {
            var l = arguments.length > 2, u = l ? i.call(arguments, 2) : void 0;
            return d(l ? function() {
              (typeof h == "function" ? h : Function(h)).apply(this, u);
            } : h, f);
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
        var i = t(2), c = i.__importDefault(t(272)), g = i.__importDefault(t(273)), d = i.__importDefault(t(129)), h = i.__importDefault(t(274)), f = i.__importDefault(t(275)), l = i.__importDefault(t(276)), u = i.__importDefault(t(130)), s = i.__importDefault(t(277)), p = i.__importDefault(t(278)), v = i.__importDefault(t(279)), m = (0, r.default)(
          {},
          c.default,
          g.default,
          d.default,
          f.default,
          h.default,
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
        n.default = m;
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
        var e = t(14), a = t(11), r = t(52), i = t(127), c = t(59), g = t(31), d = t(72), h = Object.assign, f = Object.defineProperty;
        o.exports = !h || a(function() {
          if (e && h({ b: 1 }, h(f({}, "a", {
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
          }), h({}, l)[s] != 7 || r(h({}, u)).join("") != p;
        }) ? function(u, s) {
          for (var p = g(u), v = arguments.length, m = 1, y = i.f, A = c.f; v > m; )
            for (var x = d(arguments[m++]), S = y ? r(x).concat(y(x)) : r(x), D = S.length, I = 0, C; D > I; )
              C = S[I++], (!e || A.call(x, C)) && (p[C] = x[C]);
          return p;
        } : h;
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
        var i = t(2), c = i.__importDefault(t(3)), g = t(6), d = t(7), h = function() {
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
                var v = this.editor, m = v.$textElem;
                if (m.isContain(p)) {
                  if (m.elems[0] === p.elems[0]) {
                    var y;
                    if ((0, r.default)(y = m.html()).call(y) === d.EMPTY_P) {
                      var A = m.children(), x = A == null ? void 0 : A.last();
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
            var m = u != null ? u : v;
            !p || l && (p.setStart(l, m), p.setEnd(l, m), this.restoreSelection());
          }, f.prototype.getCursorPos = function() {
            var l = window.getSelection();
            return l == null ? void 0 : l.anchorOffset;
          }, f.prototype.clearWindowSelectionRange = function() {
            var l = window.getSelection();
            l && l.removeAllRanges();
          }, f.prototype.recordSelectionNodes = function(l, u) {
            var s = [], p = !0;
            try {
              for (var v = l, m = this.editor.$textElem; p; ) {
                var y = v == null ? void 0 : v.getNodeTop(this.editor);
                y.getNodeName() === "BODY" && (p = !1), y.length > 0 && (s.push(c.default(v)), (u == null ? void 0 : u.equal(y)) || m.equal(y) ? p = !1 : v = y.getNextSibling());
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
        n.default = h;
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
          return g.prototype.do = function(d, h) {
            var f = this.editor;
            f.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
            var l = f.selection;
            if (!!l.getRange()) {
              switch (l.restoreSelection(), d) {
                case "insertHTML":
                  this.insertHTML(h);
                  break;
                case "insertElem":
                  this.insertElem(h);
                  break;
                default:
                  this.execCommand(d, h);
                  break;
              }
              f.menus.changeActive(), l.saveRange(), l.restoreSelection();
            }
          }, g.prototype.insertHTML = function(d) {
            var h = this.editor, f = h.selection.getRange();
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
                h.selection.collapseRange();
              }
            }
          }, g.prototype.insertElem = function(d) {
            var h = this.editor, f = h.selection.getRange();
            f != null && f.insertNode && (f.deleteContents(), f.insertNode(d.elems[0]));
          }, g.prototype.execCommand = function(d, h) {
            document.execCommand(d, !1, h);
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
        var h = t(2), f = h.__importDefault(t(3)), l = h.__importDefault(t(287)), u = t(6), s = h.__importDefault(t(299)), p = h.__importDefault(t(300)), v = t(7), m = function() {
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
        n.default = m;
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
        var r = t(2), i = r.__importDefault(t(288)), c = r.__importStar(t(289)), g = r.__importDefault(t(290)), d = r.__importDefault(t(291)), h = r.__importDefault(t(298));
        function f(l) {
          var u = l.editor, s = l.eventHooks;
          i.default(u, s.enterUpEvents, s.enterDownEvents), c.default(u, s.deleteUpEvents, s.deleteDownEvents), c.cutToKeepP(u, s.keyupEvents), g.default(u, s.tabDownEvents), d.default(u, s.pasteEvents), h.default(u, s.imgClickEvents);
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = t(7), g = i.__importDefault(t(3));
        function d(h, f, l) {
          function u(v) {
            var m, y = g.default(c.EMPTY_P);
            if (y.insertBefore(v), (0, r.default)(m = v.html()).call(m, "<img") >= 0) {
              y.remove();
              return;
            }
            h.selection.createRangeByElem(y, !0, !0), h.selection.restoreSelection(), v.remove();
          }
          function s() {
            var v = h.$textElem, m = h.selection.getSelectionContainerElem(), y = m.parent();
            if (y.html() === "<code><br></code>") {
              u(y);
              return;
            }
            if (m.getNodeName() === "FONT" && m.text() === "" && m.attr("face") === "monospace") {
              u(y);
              return;
            }
            if (!!y.equal(v)) {
              var A = m.getNodeName();
              A === "P" && m.attr("data-we-empty-p") === null || m.text() || u(m);
            }
          }
          f.push(s);
          function p(v) {
            var m;
            h.selection.saveRange((m = getSelection()) === null || m === void 0 ? void 0 : m.getRangeAt(0));
            var y = h.selection.getSelectionContainerElem();
            y.id === h.textElemId && (v.preventDefault(), h.cmd.do("insertHTML", "<p><br></p>"));
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
        function h(l, u, s) {
          function p() {
            var m = l.$textElem, y = l.$textElem.html(), A = l.$textElem.text(), x = (0, r.default)(y).call(y), S = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', g.EMPTY_P];
            if (/^\s*$/.test(A) && (!x || (0, i.default)(S).call(S, x))) {
              m.html(g.EMPTY_P);
              var D = m.getNode();
              l.selection.createRangeByElems(D.childNodes[0], D.childNodes[0]);
              var I = l.selection.getSelectionContainerElem();
              l.selection.restoreSelection(), l.selection.moveCursor(I.getNode(), 0);
            }
          }
          u.push(p);
          function v(m) {
            var y, A = l.$textElem, x = (0, r.default)(y = A.html().toLowerCase()).call(y);
            if (x === g.EMPTY_P) {
              m.preventDefault();
              return;
            }
          }
          s.push(v);
        }
        function f(l, u) {
          function s(p) {
            var v;
            if (p.keyCode === 88) {
              var m = l.$textElem, y = (0, r.default)(v = m.html().toLowerCase()).call(v);
              if (!y || y === "<br>") {
                var A = d.default(g.EMPTY_P);
                m.html(" "), m.append(A), l.selection.createRangeByElem(A, !1, !0), l.selection.restoreSelection(), l.selection.moveCursor(A.getNode(), 0);
              }
            }
          }
          u.push(s);
        }
        n.cutToKeepP = f, n.default = h;
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
                var h = d.parent(), f = d.getNodeName(), l = h.getNodeName();
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
        function h(p) {
          var v, m = (0, r.default)(v = p.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(v), y = document.createElement("div");
          return y.innerHTML = m, y.innerHTML.replace(/<p><\/p>/gim, "");
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
          var m = document.createElement("div");
          return m.innerHTML = p, ((v = m.firstChild) === null || v === void 0 ? void 0 : v.nodeName) === "P";
        }
        function u(p) {
          if (!(p != null && p.length))
            return !1;
          var v = p.elems[0];
          return v.nodeName === "P" && v.innerHTML === "<br>";
        }
        function s(p, v) {
          function m(y) {
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
                var M = C.replace(d.urlRegex, function(V) {
                  return '<a href="' + V + '" target="_blank">' + V + "</a>";
                }), B = p.selection.getRange(), F = document.createElement("div"), O = document.createDocumentFragment();
                if (F.innerHTML = M, B == null)
                  return;
                for (; F.childNodes.length; )
                  O.append(F.childNodes[0]);
                var b = O.querySelectorAll("a");
                (0, i.default)(b).call(b, function(V) {
                  V.innerText = V.href;
                }), B.insertNode && (B.deleteContents(), B.insertNode(O)), p.selection.clearWindowSelectionRange();
                return;
              }
              if (!!I)
                try {
                  D && g.isFunction(D) && (I = "" + (D(I) || ""));
                  var $ = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(I);
                  if ($ && x)
                    p.cmd.do("insertHTML", "" + h(C));
                  else {
                    var H = h(I);
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
                  D && g.isFunction(D) && (C = "" + (D(C) || "")), p.cmd.do("insertHTML", "" + h(C));
                }
            }
          }
          v.push(m);
        }
        n.default = s;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17)), i = e(t(4)), c = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(293), h = g.__importDefault(t(297));
        function f(v) {
          var m = /<span>.*?<\/span>/gi, y = /<span>(.*?)<\/span>/;
          return v.replace(m, function(A) {
            var x = A.match(y);
            return x == null ? "" : x[1];
          });
        }
        function l(v, m) {
          var y;
          return v = (0, r.default)(y = v.toLowerCase()).call(y), !!(d.IGNORE_TAGS.has(v) || m && v === "img");
        }
        function u(v, m) {
          var y = "";
          y = "<" + v;
          var A = [];
          (0, i.default)(m).call(m, function(S) {
            A.push(S.name + '="' + S.value + '"');
          }), A.length > 0 && (y = y + " " + A.join(" "));
          var x = d.EMPTY_TAGS.has(v);
          return y = y + (x ? "/" : "") + ">", y;
        }
        function s(v) {
          return "</" + v + ">";
        }
        function p(v, m, y) {
          m === void 0 && (m = !0), y === void 0 && (y = !1);
          var A = [], x = "";
          function S(E) {
            E = (0, r.default)(E).call(E), E && (d.EMPTY_TAGS.has(E) || (x = E));
          }
          function D() {
            x = "";
          }
          var I = new h.default();
          I.parse(v, {
            startElement: function(T, R) {
              if (S(T), !l(T, y)) {
                var N = d.NECESSARY_ATTRS.get(T) || [], M = [];
                (0, i.default)(R).call(R, function(F) {
                  var O = F.name;
                  if (O === "style") {
                    m || M.push(F);
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
            return a.replace(this.attrRe, function(c, g, d, h, f, l, u, s) {
              i.push(r.parseAttribute(e, c, g, d, h, f, l, u, s));
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
        function d(h) {
          var f = [], l = h.childNodes() || [];
          return (0, r.default)(l).call(l, function(u) {
            var s, p = u.nodeType;
            if (p === 3 && (s = u.textContent || "", s = c.replaceHtmlSymbol(s)), p === 1) {
              s = {}, s = s, s.tag = u.nodeName.toLowerCase();
              for (var v = [], m = u.attributes, y = m.length || 0, A = 0; A < y; A++) {
                var x = m[A];
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
        function d(h, f) {
          f === void 0 && (f = document.createElement("div"));
          var l = f;
          return (0, i.default)(h).call(h, function(u) {
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
        var e = t(0), a = e(t(1)), r = e(t(89)), i = e(t(70)), c = e(t(28)), g = e(t(302)), d = e(t(4)), h = e(t(94)), f = e(t(133)), l = e(t(46)), u = e(t(57));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var s = t(2), p = s.__importDefault(t(87)), v = s.__importDefault(t(314)), m = s.__importDefault(t(3)), y = function() {
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
            for (var T = 0, R = (0, h.default)(p.default.globalCustomMenuConstructorList); T < R.length; T++) {
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
            var x = this.editor, S = x.$toolbarElem, D = x.config, I = D.menuTooltipPosition, C = m.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + I + `">
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
              var M = N.target, B = m.default(M), F, O;
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
            for (var h = r(d), f = a(h), l = f.length, u = 0, s = [], p; l > u; )
              p = f[u++], (!e || i.call(h, p)) && s.push(g ? [p, h[p]] : h[p]);
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
          some: function(h) {
            return a(this, h, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(315)), c = r.__importDefault(t(316)), g = r.__importDefault(t(321)), d = r.__importDefault(t(326)), h = r.__importDefault(t(327)), f = r.__importDefault(t(328)), l = r.__importDefault(t(329)), u = r.__importDefault(t(331)), s = r.__importDefault(t(333)), p = r.__importDefault(t(334)), v = r.__importDefault(t(337)), m = r.__importDefault(t(338)), y = r.__importDefault(t(339)), A = r.__importDefault(t(350)), x = r.__importDefault(t(365)), S = r.__importDefault(t(369)), D = r.__importDefault(t(137)), I = r.__importDefault(t(378)), C = r.__importDefault(t(380)), E = r.__importDefault(t(381)), T = r.__importDefault(t(382)), R = r.__importDefault(t(401)), N = r.__importDefault(t(406)), M = r.__importDefault(t(409));
        n.default = {
          bold: i.default,
          head: c.default,
          italic: d.default,
          link: g.default,
          underline: h.default,
          strikeThrough: f.default,
          fontName: l.default,
          fontSize: u.default,
          justify: s.default,
          quote: p.default,
          backColor: v.default,
          foreColor: m.default,
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
          r.__extends(h, d);
          function h(f) {
            var l = this, u = c.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var f = this.editor, l = f.selection.isSelectionEmpty();
            l && f.selection.createEmptyRange(), f.cmd.do("bold"), l && (f.selection.collapseRange(), f.selection.restoreSelection());
          }, h.prototype.tryChangeActive = function() {
            var f = this.editor;
            f.cmd.queryCommandState("bold") ? this.active() : this.unActive();
          }, h;
        }(i.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(27)), i = e(t(29)), c = e(t(4)), g = e(t(317)), d = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var h = t(2), f = h.__importDefault(t(24)), l = h.__importDefault(t(3)), u = t(6), s = t(7), p = function(v) {
          h.__extends(m, v);
          function m(y) {
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
          return m.prototype.command = function(y) {
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
          }, m.prototype.addUidForSelectionElem = function() {
            var y = this.editor, A = y.selection.getSelectionContainerElem(), x = u.getRandomCode();
            l.default(A).attr("id", x);
          }, m.prototype.addListenerCatalog = function() {
            var y = this, A = this.editor;
            A.txt.eventHooks.changeEvents.push(function() {
              y.getCatalogs();
            });
          }, m.prototype.getCatalogs = function() {
            var y = this.editor, A = this.editor.$textElem, x = y.config.onCatalogChange, S = (0, i.default)(A).call(A, "h1,h2,h3,h4,h5"), D = [];
            (0, c.default)(S).call(S, function(I, C) {
              var E = l.default(I), T = E.attr("id"), R = E.getNodeName(), N = E.text();
              T || (T = u.getRandomCode(), E.attr("id", T)), N && D.push({
                tag: R,
                id: T,
                text: N
              });
            }), (0, g.default)(this.oldCatalogs) !== (0, g.default)(D) && (this.oldCatalogs = D, x && x(D));
          }, m.prototype.setMultilineHead = function(y) {
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
          }, m.prototype.hasTag = function(y, A) {
            var x = this, S;
            if (!y)
              return !1;
            if ((0, d.default)(A).call(A, y == null ? void 0 : y.getNodeName()))
              return !0;
            var D = !1;
            return (S = y.children()) === null || S === void 0 || (0, c.default)(S).call(S, function(I) {
              D = x.hasTag(l.default(I), A);
            }), D;
          }, m.prototype.tryChangeActive = function() {
            var y = this.editor, A = /^h/i, x = y.cmd.queryCommandValue("formatBlock");
            A.test(x) ? this.active() : this.unActive();
          }, m;
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
        var e = t(5), a = t(36), r = t(11), i = a("JSON", "stringify"), c = /[\uD800-\uDFFF]/g, g = /^[\uD800-\uDBFF]$/, d = /^[\uDC00-\uDFFF]$/, h = function(l, u, s) {
          var p = s.charAt(u - 1), v = s.charAt(u + 1);
          return g.test(l) && !d.test(v) || d.test(l) && !g.test(p) ? "\\u" + l.charCodeAt(0).toString(16) : l;
        }, f = r(function() {
          return i("\uDF06\uD834") !== '"\\udf06\\ud834"' || i("\uDEAD") !== '"\\udead"';
        });
        i && e({ target: "JSON", stat: !0, forced: f }, {
          stringify: function(u, s, p) {
            var v = i.apply(null, arguments);
            return typeof v == "string" ? v.replace(c, h) : v;
          }
        });
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(38)), g = i.__importDefault(t(3)), d = i.__importDefault(t(322)), h = i.__importStar(t(96)), f = i.__importDefault(t(33)), l = i.__importDefault(t(324)), u = t(7), s = function(p) {
          i.__extends(v, p);
          function v(m) {
            var y = this, A = g.default('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
            return y = p.call(this, A, m) || this, l.default(m), y;
          }
          return v.prototype.clickHandler = function() {
            var m = this.editor, y, A = m.selection.getSelectionContainerElem(), x = m.$textElem, S = x.html(), D = (0, r.default)(S).call(S);
            if (D === u.EMPTY_P) {
              var I = x.children();
              m.selection.createRangeByElem(I, !0, !0), A = m.selection.getSelectionContainerElem();
            }
            if (!(A && m.$textElem.equal(A)))
              if (this.isActive) {
                var C = "", E = "";
                if (y = m.selection.getSelectionContainerElem(), !y)
                  return;
                if (y.getNodeName() !== "A") {
                  var T = h.getParentNodeA(y);
                  y = g.default(T);
                }
                C = y.elems[0].innerText, E = y.attr("href"), this.createPanel(C, E);
              } else
                m.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(m.selection.getSelectionText(), "");
          }, v.prototype.createPanel = function(m, y) {
            var A = d.default(this.editor, m, y), x = new f.default(this, A);
            x.create();
          }, v.prototype.tryChangeActive = function() {
            var m = this.editor;
            h.default(m) ? this.active() : this.unActive();
          }, v;
        }(c.default);
        n.default = s;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28)), i = e(t(17)), c = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(6), h = g.__importDefault(t(3)), f = g.__importStar(t(96)), l = t(323);
        function u(s, p, v) {
          var m = d.getRandom("input-link"), y = d.getRandom("input-text"), A = d.getRandom("btn-ok"), x = d.getRandom("btn-del"), S = f.default(s) ? "inline-block" : "none", D;
          function I() {
            if (!!f.default(s)) {
              var N = s.selection.getSelectionContainerElem();
              !N || (s.selection.createRangeByElem(N), s.selection.restoreSelection(), D = N);
            }
          }
          function C(N, M) {
            var B = N.replace(/</g, "&lt;").replace(/>/g, "&gt;"), F = h.default('<a target="_blank">' + B + "</a>"), O = F.elems[0];
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
                            id="` + m + `"
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
                    var j = s.selection.getSelectionRangeTopNodes()[0].getNode(), V = window.getSelection(), U = h.default("#" + m), W = h.default("#" + y), K = (0, i.default)(M = U.val()).call(M), w = (0, i.default)(B = W.val()).call(B), Y = "";
                    V && !(V != null && V.isCollapsed) && (Y = (O = l.insertHtml(V, j)) === null || O === void 0 ? void 0 : (0, i.default)(O).call(O));
                    var J = Y == null ? void 0 : Y.replace(/<.*?>/g, ""), k = (b = J == null ? void 0 : J.length) !== null && b !== void 0 ? b : 0;
                    if (k <= w.length) {
                      var nt = w.substring(0, k), at = w.substring(k);
                      J === nt && (w = J + at);
                    }
                    if (!!K && (w || (w = K), !!T(w, K))) {
                      if ((H == null ? void 0 : H.nodeName) === "A")
                        return H.setAttribute("href", K), H.innerText = w, !0;
                      if ((H == null ? void 0 : H.nodeName) !== "A" && (0, r.default)(F = f.EXTRA_TAG).call(F, H.nodeName)) {
                        var ct = f.getParentNodeA($);
                        if (ct)
                          return ct.setAttribute("href", K), H.innerText = w, !0;
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
              B === "text" && (F = "#" + y, O = p), B === "link" && (F = "#" + m, O = v), b = (0, c.default)(M).call(M, F).elems[0], b.value = O;
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
            var v = l.getAttribute("style"), m = l.getAttribute("face"), y = l.getAttribute("color");
            v && (p = p + (' style="' + v + '"')), m && (p = p + (' face="' + m + '"')), y && (p = p + (' color="' + y + '"'));
          }
          return s = s.toLowerCase(), "<" + s + p + ">" + u + "</" + s + ">";
        }
        n.makeHtmlString = c;
        function g(l, u, s, p) {
          var v, m = (v = u.textContent) === null || v === void 0 ? void 0 : v.substring(s, p), y = u, A = "";
          do
            A = c(y, m != null ? m : ""), m = A, y = y == null ? void 0 : y.parentElement;
          while (y && y.textContent !== l);
          return A;
        }
        n.createPartHtml = g;
        function d(l, u) {
          var s, p, v, m, y, A = l.anchorNode, x = l.focusNode, S = l.anchorOffset, D = l.focusOffset, I = (s = u.textContent) !== null && s !== void 0 ? s : "", C = h(u), E = "", T = "", R = "", N = "", M = A, B = x, F = A;
          if (A != null && A.isEqualNode(x != null ? x : null)) {
            var O = g(I, A, S, D);
            return O = f(C, O), O;
          }
          for (A && (T = g(I, A, S != null ? S : 0)), x && (N = g(I, x, 0, D)), A && (M = i(A, I)), x && (B = i(x, I)), F = (p = M == null ? void 0 : M.nextSibling) !== null && p !== void 0 ? p : A; !(F != null && F.isEqualNode(B != null ? B : null)); ) {
            var b = F == null ? void 0 : F.nodeName;
            if (b === "#text")
              R = R + (F == null ? void 0 : F.textContent);
            else {
              var $ = (m = (v = F == null ? void 0 : F.firstChild) === null || v === void 0 ? void 0 : v.parentElement) === null || m === void 0 ? void 0 : m.innerHTML;
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
        function h(l) {
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
        function h(l) {
          var u;
          function s(v) {
            var m = [{
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
            u = new g.default(l, v, m), u.create();
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
          var u = h(l), s = u.showLinkTooltip, p = u.hideLinkTooltip;
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
          r.__extends(h, d);
          function h(f) {
            var l = this, u = c.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var f = this.editor, l = f.selection.isSelectionEmpty();
            l && f.selection.createEmptyRange(), f.cmd.do("italic"), l && (f.selection.collapseRange(), f.selection.restoreSelection());
          }, h.prototype.tryChangeActive = function() {
            var f = this.editor;
            f.cmd.queryCommandState("italic") ? this.active() : this.unActive();
          }, h;
        }(i.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(23)), c = r.__importDefault(t(3)), g = function(d) {
          r.__extends(h, d);
          function h(f) {
            var l = this, u = c.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var f = this.editor, l = f.selection.isSelectionEmpty();
            l && f.selection.createEmptyRange(), f.cmd.do("underline"), l && (f.selection.collapseRange(), f.selection.restoreSelection());
          }, h.prototype.tryChangeActive = function() {
            var f = this.editor;
            f.cmd.queryCommandState("underline") ? this.active() : this.unActive();
          }, h;
        }(i.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(23)), c = r.__importDefault(t(3)), g = function(d) {
          r.__extends(h, d);
          function h(f) {
            var l = this, u = c.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var f = this.editor, l = f.selection.isSelectionEmpty();
            l && f.selection.createEmptyRange(), f.cmd.do("strikeThrough"), l && (f.selection.collapseRange(), f.selection.restoreSelection());
          }, h.prototype.tryChangeActive = function() {
            var f = this.editor;
            f.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
          }, h;
        }(i.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(24)), c = r.__importDefault(t(3)), g = r.__importDefault(t(330)), d = function(h) {
          r.__extends(f, h);
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
            return u = h.call(this, s, l, v) || this, u;
          }
          return f.prototype.command = function(l) {
            var u, s = this.editor, p = s.selection.isSelectionEmpty(), v = (u = s.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
            if (v != null) {
              var m = (v == null ? void 0 : v.nodeName.toLowerCase()) !== "p", y = (v == null ? void 0 : v.getAttribute("face")) === l;
              if (p) {
                if (m && !y) {
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
          function d(h) {
            var f = this;
            this.itemList = [], (0, r.default)(h).call(h, function(l) {
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
        var r = t(2), i = r.__importDefault(t(24)), c = r.__importDefault(t(3)), g = r.__importDefault(t(332)), d = function(h) {
          r.__extends(f, h);
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
            return u = h.call(this, s, l, v) || this, u;
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
            for (var h in d) {
              var f = d[h];
              this.itemList.push({
                $elem: i.default('<p style="font-size:' + h + '">' + f.name + "</p>"),
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
        var c = t(2), g = c.__importDefault(t(24)), d = c.__importDefault(t(3)), h = ["LI"], f = ["BLOCKQUOTE"], l = function(u) {
          c.__extends(s, u);
          function s(p) {
            var v = this, m = d.default('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'), y = {
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
            return v = u.call(this, m, p, y) || this, v;
          }
          return s.prototype.command = function(p) {
            var v = this.editor, m = v.selection, y = m.getSelectionContainerElem();
            m.saveRange();
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
            m.restoreSelection();
          }, s.prototype.getSpecialNodeUntilTop = function(p, v) {
            for (var m = p.elems[0], y = v.elems[0]; m != null; ) {
              if ((0, i.default)(h).call(h, m == null ? void 0 : m.nodeName) !== -1 || m.parentNode === y)
                return m;
              m = m.parentNode;
            }
            return m;
          }, s.prototype.isSpecialNode = function(p, v) {
            var m = this.getSpecialNodeUntilTop(p, v);
            return m == null ? !1 : (0, i.default)(h).call(h, m.nodeName) !== -1;
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
        var i = t(2), c = i.__importDefault(t(3)), g = i.__importDefault(t(23)), d = i.__importDefault(t(335)), h = i.__importDefault(t(336)), f = t(7), l = function(u) {
          i.__extends(s, u);
          function s(p) {
            var v = this, m = c.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
            return v = u.call(this, m, p) || this, d.default(p), v;
          }
          return s.prototype.clickHandler = function() {
            var p, v, m = this.editor, y = m.selection.isSelectionEmpty(), A = m.selection.getSelectionRangeTopNodes(), x = A[A.length - 1], S = this.getTopNodeName();
            if (S === "BLOCKQUOTE") {
              var D = c.default(x.childNodes()), I = D.length, C = x;
              (0, r.default)(D).call(D, function(N) {
                var M = c.default(N);
                M.insertAfter(C), C = M;
              }), x.remove(), m.selection.moveCursor(D.elems[I - 1]), this.tryChangeActive();
            } else {
              var E = h.default(A);
              if (m.$textElem.equal(x)) {
                var T = (p = m.selection.getSelectionContainerElem()) === null || p === void 0 ? void 0 : p.elems[0];
                m.selection.createRangeByElems(T.children[0], T.children[0]), A = m.selection.getSelectionRangeTopNodes(), E = h.default(A), x.append(E);
              } else
                E.insertAfter(x);
              this.delSelectNode(A);
              var R = (v = E.childNodes()) === null || v === void 0 ? void 0 : v.last().getNode();
              if (R == null)
                return;
              R.textContent ? m.selection.moveCursor(R) : m.selection.moveCursor(R, 0), this.tryChangeActive(), c.default(f.EMPTY_P).insertAfter(E);
              return;
            }
            y && (m.selection.collapseRange(), m.selection.restoreSelection());
          }, s.prototype.tryChangeActive = function() {
            var p, v = this.editor, m = (p = v.selection.getSelectionRangeTopNodes()[0]) === null || p === void 0 ? void 0 : p.getNodeName();
            m === "BLOCKQUOTE" ? this.active() : this.unActive();
          }, s.prototype.getTopNodeName = function() {
            var p = this.editor, v = p.selection.getSelectionRangeTopNodes()[0], m = v == null ? void 0 : v.getNodeName();
            return m;
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
          function h(f) {
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
          d.txt.eventHooks.enterDownEvents.push(h);
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
          var h = c.default("<blockquote></blockquote>");
          return (0, r.default)(d).call(d, function(f) {
            h.append(f.clone(!0));
          }), h;
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(24)), g = i.__importDefault(t(3)), d = t(6), h = function(f) {
          i.__extends(l, f);
          function l(u) {
            var s, p = this, v = g.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), m = {
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
            return p = f.call(this, v, u, m) || this, p;
          }
          return l.prototype.command = function(u) {
            var s, p = this.editor, v = p.selection.isSelectionEmpty(), m = (s = p.selection.getSelectionContainerElem()) === null || s === void 0 ? void 0 : s.elems[0];
            if (m != null) {
              var y = (m == null ? void 0 : m.nodeName.toLowerCase()) !== "p", A = m == null ? void 0 : m.style.backgroundColor, x = d.hexToRgb(u) === A;
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
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(24)), g = i.__importDefault(t(3)), d = function(h) {
          i.__extends(f, h);
          function f(l) {
            var u, s = this, p = g.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`), v = {
              width: 120,
              title: "\u6587\u5B57\u989C\u8272",
              type: "inline-block",
              list: (0, r.default)(u = l.config.colors).call(u, function(m) {
                return {
                  $elem: g.default('<i style="color:' + m + ';" class="w-e-icon-pencil2"></i>'),
                  value: m
                };
              }),
              clickHandler: function(y) {
                s.command(y);
              }
            };
            return s = h.call(this, p, l, v) || this, s;
          }
          return f.prototype.command = function(l) {
            var u, s = this.editor, p = s.selection.isSelectionEmpty(), v = (u = s.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
            if (v != null) {
              var m = s.selection.getSelectionText();
              if (v.nodeName === "A" && v.textContent === m) {
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
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(33)), g = r.__importDefault(t(38)), d = r.__importDefault(t(340)), h = r.__importDefault(t(346)), f = function(l) {
          r.__extends(u, l);
          function u(s) {
            var p = this, v = i.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`);
            return p = l.call(this, v, s) || this, h.default(s), p;
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
        var i = t(2), c = t(6), g = i.__importDefault(t(3)), d = i.__importDefault(t(341)), h = t(7);
        function f(l, u) {
          var s = l.config, p = new d.default(l), v = c.getRandom("input-iframe"), m = c.getRandom("btn-ok"), y = c.getRandom("input-upload"), A = c.getRandom("btn-local-ok");
          function x(C) {
            l.cmd.do("insertHTML", C + h.EMPTY_P), l.config.onlineVideoCallback(C);
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
                        <button type="button" id="` + m + `" class="right">
                            ` + l.i18next.t("\u63D2\u5165") + `
                        </button>
                    </div>
                </div>`,
            events: [
              {
                selector: "#" + m,
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
        var d = t(2), h = t(6), f = d.__importDefault(t(135)), l = d.__importDefault(t(136)), u = t(7), s = t(6), p = function() {
          function v(m) {
            this.editor = m;
          }
          return v.prototype.uploadVideo = function(m) {
            var y = this;
            if (!!m.length) {
              var A = this.editor, x = A.config, S = "validate.", D = function(J) {
                return A.i18next.t(S + J);
              }, I = x.uploadVideoServer, C = x.uploadVideoMaxSize, E = C / 1024, T = x.uploadVideoName, R = x.uploadVideoParams, N = x.uploadVideoParamsWithUrl, M = x.uploadVideoHeaders, B = x.uploadVideoHooks, F = x.uploadVideoTimeout, O = x.withVideoCredentials, b = x.customUploadVideo, $ = x.uploadVideoAccept, H = [], j = [];
              if (h.arrForEach(m, function(Y) {
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
                var V;
                b(H, (0, i.default)(V = this.insertVideo).call(V, this));
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
                (0, c.default)(h).call(h, R, function(Y, J) {
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
          }, v.prototype.insertVideo = function(m) {
            var y = this.editor, A = y.config, x = "validate.", S = function(C, E) {
              return E === void 0 && (E = x), y.i18next.t(E + C);
            };
            if (!A.customInsertVideo)
              s.UA.isFirefox ? y.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + m + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : y.cmd.do("insertHTML", '<video src="' + m + '" controls="controls" style="max-width:100%"></video>' + u.EMPTY_P);
            else {
              A.customInsertVideo(m);
              return;
            }
            var D = document.createElement("video");
            D.onload = function() {
              D = null;
            }, D.onerror = function() {
              A.customAlert(S("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + S("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + S("\u89C6\u9891\u94FE\u63A5") + ' "' + m + '"\uFF0C' + S("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), D = null;
            }, D.onabort = function() {
              return D = null;
            }, D.src = m;
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
          var l, u = function(m, y) {
            return y === void 0 && (y = ""), f.i18next.t(y + m);
          };
          function s(v) {
            var m = [{
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
            l = new c.default(f, v, m), l.create();
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
        function h(f) {
          var l = d(f), u = l.showVideoTooltip, s = l.hideVideoTooltip;
          f.txt.eventHooks.videoClickEvents.push(u), f.txt.eventHooks.clickEvents.push(s), f.txt.eventHooks.keyupEvents.push(s), f.txt.eventHooks.toolbarClickEvents.push(s), f.txt.eventHooks.menuClickEvents.push(s), f.txt.eventHooks.textScrollEvents.push(s), f.txt.eventHooks.changeEvents.push(s);
        }
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(28));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3));
        function g(h, f) {
          var l = ["P"], u = d(h, l);
          u && c.default(u).css("text-align", f);
        }
        n.default = g;
        function d(h, f) {
          for (var l, u = h.elems[0]; u != null; ) {
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
            var g = c.txt, d = c.selection, h = g.eventHooks.keydownEvents;
            h.push(function(f) {
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
        var i = t(2), c = t(7), g = i.__importDefault(t(3)), d = i.__importDefault(t(33)), h = i.__importDefault(t(38)), f = i.__importDefault(t(351)), l = i.__importDefault(t(364)), u = function(s) {
          i.__extends(p, s);
          function p(v) {
            var m = this, y = g.default('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'), A = l.default(v);
            if (A.onlyUploadConf) {
              var x;
              y = A.onlyUploadConf.$elem, (0, r.default)(x = A.onlyUploadConf.events).call(x, function(S) {
                var D = S.type, I = S.fn || c.EMPTY_FN;
                y.on(D, function(C) {
                  C.stopPropagation(), I(C);
                });
              });
            }
            return m = s.call(this, y, v) || this, m.imgPanelConfig = A, f.default(v), m;
          }
          return p.prototype.clickHandler = function() {
            this.imgPanelConfig.onlyUploadConf || this.createPanel();
          }, p.prototype.createPanel = function() {
            var v = this.imgPanelConfig, m = new d.default(this, v);
            this.setPanel(m), m.create();
          }, p.prototype.tryChangeActive = function() {
          }, p;
        }(h.default);
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(352)), c = r.__importDefault(t(353)), g = r.__importDefault(t(354)), d = r.__importDefault(t(362)), h = r.__importDefault(t(363));
        function f(l) {
          i.default(l), c.default(l), g.default(l), d.default(l), h.default(l);
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
          var s = l.config, p = s.pasteFilterStyle, v = s.pasteIgnoreImg, m = i.getPasteHtml(u, p, v);
          if (m)
            return !0;
          var y = i.getPasteText(u);
          return !!y;
        }
        function d(l, u) {
          for (var s, p = ((s = u.clipboardData) === null || s === void 0 ? void 0 : s.types) || [], v = 0; v < p.length; v++) {
            var m = p[v];
            if (m === "Files")
              return !0;
          }
          return !1;
        }
        function h(l, u) {
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
            h(u, l);
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
          function d(h) {
            var f = h.dataTransfer && h.dataTransfer.files;
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
        function h(p, v, m, y, A) {
          p.attr("style", "width:" + v + "px; height:" + m + "px; left:" + y + "px; top:" + A + "px;");
        }
        function f(p, v) {
          var m = g.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
          return m.hide(), v.append(m), m;
        }
        function l(p, v, m) {
          var y = p.getBoundingClientRect(), A = m.getBoundingClientRect(), x = A.width.toFixed(2), S = A.height.toFixed(2);
          (0, r.default)(v).call(v, ".w-e-img-drag-show-size").text(x + "px * " + S + "px"), h(v, (0, i.default)(x), (0, i.default)(S), A.left - y.left, A.top - y.top), v.show();
        }
        function u(p) {
          var v = p.$textContainerElem, m, y = f(p, v);
          function A(D, I) {
            D.on("click", function(C) {
              C.stopPropagation();
            }), D.on("mousedown", ".w-e-img-drag-rb", function(C) {
              if (C.preventDefault(), !m)
                return;
              var E = C.clientX, T = C.clientY, R = I.getBoundingClientRect(), N = m.getBoundingClientRect(), M = N.width, B = N.height, F = N.left - R.left, O = N.top - R.top, b = M / B, $ = M, H = B, j = g.default(document);
              function V() {
                j.off("mousemove", U), j.off("mouseup", W);
              }
              function U(K) {
                K.stopPropagation(), K.preventDefault(), $ = M + (K.clientX - E), H = B + (K.clientY - T), $ / H != b && (H = $ / b), $ = (0, i.default)($.toFixed(2)), H = (0, i.default)(H.toFixed(2)), (0, r.default)(D).call(D, ".w-e-img-drag-show-size").text($.toFixed(2).replace(".00", "") + "px * " + H.toFixed(2).replace(".00", "") + "px"), h(D, $, H, F, O);
              }
              j.on("mousemove", U);
              function W() {
                m.attr("width", $ + ""), m.attr("height", H + "");
                var K = m.getBoundingClientRect();
                h(D, $, H, K.left - R.left, K.top - R.top), V();
              }
              j.on("mouseup", W), j.on("mouseleave", V);
            });
          }
          function x(D) {
            if (d.UA.isIE())
              return !1;
            D && (m = D, l(v, y, m));
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
          var v = u(p), m = v.showDrag, y = v.hideDrag;
          p.txt.eventHooks.imgClickEvents.push(m), p.txt.eventHooks.textScrollEvents.push(y), p.txt.eventHooks.keyupEvents.push(y), p.txt.eventHooks.toolbarClickEvents.push(y), p.txt.eventHooks.menuClickEvents.push(y), p.txt.eventHooks.changeEvents.push(y);
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
          var h = a(String(d)), f = i(h);
          return f === 0 && h.charAt(0) == "-" ? -0 : f;
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
        function g(h) {
          var f, l = function(v, m) {
            return m === void 0 && (m = ""), h.i18next.t(m + v);
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
            }), f = new c.default(h, p, v), f.create();
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
        function d(h) {
          var f = g(h), l = f.showImgTooltip, u = f.hideImgTooltip;
          h.txt.eventHooks.imgClickEvents.push(l), h.txt.eventHooks.clickEvents.push(u), h.txt.eventHooks.keyupEvents.push(u), h.txt.eventHooks.toolbarClickEvents.push(u), h.txt.eventHooks.menuClickEvents.push(u), h.txt.eventHooks.textScrollEvents.push(u), h.txt.eventHooks.imgDragBarMouseDownEvents.push(u), h.txt.eventHooks.changeEvents.push(u);
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
          d.push(function(h) {
            var f = g.getSelectionContainerElem(), l = g.getRange();
            if (!(!l || !f || h.keyCode !== 8 || !g.isSelectionEmpty())) {
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
                v instanceof HTMLElement && v.tagName === "IMG" && (v.remove(), h.preventDefault());
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
        var c = t(2), g = c.__importDefault(t(3)), d = t(6), h = c.__importDefault(t(97));
        function f(l) {
          var u, s = l.config, p = new h.default(l), v = d.getRandom("up-trigger-id"), m = d.getRandom("up-file-id"), y = d.getRandom("input-link-url"), A = d.getRandom("input-link-url-alt"), x = d.getRandom("input-link-url-href"), S = d.getRandom("btn-link"), D = "menus.panelMenus.image.", I = function(b, $) {
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
                <input id="` + m + '" type="file" ' + E + ' accept="' + T + `"/>
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
                var $ = g.default("#" + m), H = $.elems[0];
                if (H)
                  H.click();
                else
                  return !0;
              }
            },
            {
              selector: "#" + m,
              type: "change",
              fn: function() {
                var b = g.default("#" + m), $ = b.elems[0];
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
                      var V;
                      j = (0, i.default)(V = g.default("#" + A).val()).call(V);
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
        var i = t(2), c = i.__importDefault(t(3)), g = i.__importDefault(t(24)), d = i.__importDefault(t(366)), h = function(f) {
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
              v.length > 0 && (0, r.default)(v).call(v, function(m) {
                d.default(c.default(m), u, s);
              });
            } else
              p && p.length > 0 && (0, r.default)(p).call(p, function(m) {
                d.default(c.default(m), u, s);
              });
            s.selection.restoreSelection(), this.tryChangeActive();
          }, l.prototype.tryChangeActive = function() {
            var u = this.editor, s = u.selection.getSelectionStartElem(), p = c.default(s).getNodeTop(u);
            p.length <= 0 || (p.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
          }, l;
        }(g.default);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45)), i = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(367)), d = c.__importDefault(t(368)), h = /^(\d+)(\w+)$/, f = /^(\d+)%$/;
        function l(s) {
          var p = s.config.indentation;
          if (typeof p == "string") {
            if (h.test(p)) {
              var v, m = (0, r.default)(v = (0, i.default)(p).call(p).match(h)).call(v, 1, 3), y = m[0], A = m[1];
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
          var m = s.getNodeTop(v), y = /^(P|H[0-9]*)$/;
          y.test(m.getNodeName()) && (p === "increase" ? g.default(m, l(v)) : p === "decrease" && d.default(m, l(v)));
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
            var h = d.style.paddingLeft, f = (0, r.default)(h).call(h, 0, h.length - g.unit.length), l = Number(f) + g.value;
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
            var h = d.style.paddingLeft, f = (0, r.default)(h).call(h, 0, h.length - g.unit.length), l = Number(f) - g.value;
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
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(38)), g = r.__importDefault(t(33)), d = r.__importDefault(t(370)), h = function(f) {
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
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26)), i = e(t(70)), c = e(t(17));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = g.__importDefault(t(3));
        function h(f) {
          var l = f.config.emotions;
          function u(v) {
            var m = [];
            if (v.type == "image") {
              var y;
              m = (0, r.default)(y = v.content).call(y, function(x) {
                return typeof x == "string" ? "" : '<span  title="' + x.alt + `">
                    <img class="eleImg" data-emoji="` + x.alt + '" style src="' + x.src + '" alt="[' + x.alt + `]">
                </span>`;
              }), m = (0, i.default)(m).call(m, function(x) {
                return x !== "";
              });
            } else {
              var A;
              m = (0, r.default)(A = v.content).call(A, function(x) {
                return '<span class="eleImg" title="' + x + '">' + x + "</span>";
              });
            }
            return m.join("").replace(/&nbsp;/g, "");
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
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.createListHandle = n.ClassType = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(372)), g = r.__importDefault(t(374)), d = r.__importDefault(t(375)), h = r.__importDefault(t(376)), f = r.__importDefault(t(377)), l;
        (function(v) {
          v.Wrap = "WrapListHandle", v.Join = "JoinListHandle", v.StartJoin = "StartJoinListHandle", v.EndJoin = "EndJoinListHandle", v.Other = "OtherListHandle";
        })(l = n.ClassType || (n.ClassType = {}));
        var u = {
          WrapListHandle: c.default,
          JoinListHandle: g.default,
          StartJoinListHandle: d.default,
          EndJoinListHandle: h.default,
          OtherListHandle: f.default
        };
        function s(v, m, y) {
          if (v === l.Other && y === void 0)
            throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
          return v !== l.Other ? new u[v](m) : new u[v](m, y);
        }
        n.createListHandle = s;
        var p = function() {
          function v(m) {
            this.handle = m, this.handle.exec();
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
        var i = t(2), c = i.__importDefault(t(3)), g = t(58), d = t(47), h = function(f) {
          i.__extends(l, f);
          function l(u) {
            return f.call(this, u) || this;
          }
          return l.prototype.exec = function() {
            var u = this.options, s = u.listType, p = u.listTarget, v = u.$selectionElem, m = u.$startElem, y = u.$endElem, A, x = [], S = v == null ? void 0 : v.getNodeName(), D = m.prior, I = y.prior;
            if (!m.prior && !y.prior || !(D != null && D.prev().length) && !(I != null && I.next().length)) {
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
        n.default = h;
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
              var d, h = [];
              (0, r.default)(d = g.childNodes).call(d, function(f) {
                h.push(f);
              }), g = h;
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
        var i = t(2), c = i.__importDefault(t(3)), g = t(58), d = t(47), h = function(f) {
          i.__extends(l, f);
          function l(u) {
            return f.call(this, u) || this;
          }
          return l.prototype.exec = function() {
            var u, s, p, v, m, y, A, x = this.options, S = x.editor, D = x.listType, I = x.listTarget, C = x.$startElem, E = x.$endElem, T, R = S.selection.getSelectionRangeTopNodes(), N = C == null ? void 0 : C.getNodeName(), M = E == null ? void 0 : E.getNodeName();
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
                }), this.selectionRangeElem.set(T), c.default(T).insertAfter(C)), !(!((v = C.children()) === null || v === void 0) && v.length) && E.remove(), !(!((m = E.children()) === null || m === void 0) && m.length) && E.remove();
              }
            else {
              for (var V = [], $ = d.getEndPoint(E); $.length; )
                V.unshift($), $ = $.prev();
              for (var U = [], O = d.getStartPoint(C); O.length; )
                U.push(O), O = O.next();
              if (T = d.createDocumentFragment(), R.shift(), R.pop(), (0, r.default)(U).call(U, function(Y) {
                return T.append(Y.elems[0]);
              }), T = d.createElementFragment(
                d.filterSelectionNodes(R),
                T
              ), (0, r.default)(V).call(V, function(Y) {
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
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(58), d = t(47), h = function(f) {
          i.__extends(l, f);
          function l(u) {
            return f.call(this, u) || this;
          }
          return l.prototype.exec = function() {
            var u, s = this.options, p = s.editor, v = s.listType, m = s.listTarget, y = s.$startElem, A, x = p.selection.getSelectionRangeTopNodes(), S = y == null ? void 0 : y.getNodeName();
            x.shift();
            for (var D = [], I = d.getStartPoint(y); I.length; )
              D.push(I), I = I.next();
            S === v ? (A = d.createDocumentFragment(), (0, r.default)(D).call(D, function(C) {
              return A.append(C.elems[0]);
            }), A = d.createElementFragment(
              d.filterSelectionNodes(x),
              A
            ), this.selectionRangeElem.set(A), y.elems[0].append(A)) : (A = d.createElement(m), (0, r.default)(D).call(D, function(C) {
              return A.append(C.elems[0]);
            }), A = d.createElementFragment(
              d.filterSelectionNodes(x),
              A
            ), this.selectionRangeElem.set(A), c.default(A).insertAfter(y), !(!((u = y.children()) === null || u === void 0) && u.length) && y.remove());
          }, l;
        }(g.ListHandle);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(58), d = t(47), h = function(f) {
          i.__extends(l, f);
          function l(u) {
            return f.call(this, u) || this;
          }
          return l.prototype.exec = function() {
            var u, s, p = this.options, v = p.editor, m = p.listType, y = p.listTarget, A = p.$endElem, x, S = v.selection.getSelectionRangeTopNodes(), D = A == null ? void 0 : A.getNodeName();
            S.pop();
            for (var I = [], C = d.getEndPoint(A); C.length; )
              I.unshift(C), C = C.prev();
            if (D === m)
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
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = t(58), c = t(47), g = function(d) {
          r.__extends(h, d);
          function h(f, l) {
            var u = d.call(this, f) || this;
            return u.range = l, u;
          }
          return h.prototype.exec = function() {
            var f = this.options, l = f.editor, u = f.listTarget, s = l.selection.getSelectionRangeTopNodes(), p = c.createElementFragment(
              c.filterSelectionNodes(s),
              c.createElement(u)
            );
            this.selectionRangeElem.set(p), this.range.insertNode(p);
          }, h;
        }(i.ListHandle);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4)), i = e(t(27));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(24)), d = c.__importDefault(t(3)), h = c.__importDefault(t(379)), f = function(l) {
          c.__extends(u, l);
          function u(s) {
            var p = this, v = d.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`), m = new h.default(s, s.config.lineHeights), y = {
              width: 100,
              title: "\u8BBE\u7F6E\u884C\u9AD8",
              type: "list",
              list: m.getItemList(),
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
                for (var m = !1, y = d.default(p.selection.getSelectionStartElem()).elems[0], A = d.default(p.selection.getSelectionEndElem()).elems[0], x = this.getDom(y), S = this.getDom(A), D = v.elems[0].children, I = 0; I < D.length; I++) {
                  var C = D[I];
                  if (d.default(C).getNodeName() === "P" && (C === x && (m = !0), m && (d.default(C).css("line-height", s), C === S))) {
                    m = !1;
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
            function v(m, y) {
              var A = d.default(m.parentNode);
              return y.$textElem.equal(A) ? m : v(A.elems[0], y);
            }
            return p = v(p, this.editor), p;
          }, u.prototype.styleProcessing = function(s) {
            var p = "";
            return (0, r.default)(s).call(s, function(v) {
              v !== "" && (0, i.default)(v).call(v, "line-height") === -1 && (p = p + v + ";");
            }), p;
          }, u.prototype.setRange = function(s, p) {
            var v = this.editor, m = window.getSelection ? window.getSelection() : document.getSelection();
            m == null || m.removeAllRanges();
            var y = document.createRange(), A = s, x = p;
            y.setStart(A, 0), y.setEnd(x, 1), m == null || m.addRange(y), v.selection.saveRange(), m == null || m.removeAllRanges(), v.selection.restoreSelection();
          }, u.prototype.tryChangeActive = function() {
            var s = this.editor, p = s.selection.getSelectionContainerElem();
            if (!(p && s.$textElem.equal(p))) {
              var v = d.default(s.selection.getSelectionStartElem());
              if (v.length !== 0) {
                v = this.getDom(v.elems[0]);
                var m = v.getAttribute("style") ? v.getAttribute("style") : "";
                m && (0, i.default)(m).call(m, "line-height") !== -1 ? this.active() : this.unActive();
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
          function d(h, f) {
            var l = this;
            this.itemList = [{
              $elem: c.default("<span>" + h.i18next.t("\u9ED8\u8BA4") + "</span>"),
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
          r.__extends(h, d);
          function h(f) {
            var l = this, u = i.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var f = this.editor;
            f.history.revoke();
            var l = f.$textElem.children();
            if (!!(l != null && l.length)) {
              var u = l.last();
              f.selection.createRangeByElem(u, !1, !0), f.selection.restoreSelection();
            }
          }, h.prototype.tryChangeActive = function() {
            this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
          }, h;
        }(c.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(23)), g = function(d) {
          r.__extends(h, d);
          function h(f) {
            var l = this, u = i.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`);
            return l = d.call(this, u, f) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var f = this.editor;
            f.history.restore();
            var l = f.$textElem.children();
            if (!!(l != null && l.length)) {
              var u = l.last();
              f.selection.createRangeByElem(u, !1, !0), f.selection.restoreSelection();
            }
          }, h.prototype.tryChangeActive = function() {
            this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
          }, h;
        }(c.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(38)), c = r.__importDefault(t(3)), g = r.__importDefault(t(383)), d = r.__importDefault(t(33)), h = r.__importDefault(t(392)), f = function(l) {
          r.__extends(u, l);
          function u(s) {
            var p = this, v = c.default('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
            return p = l.call(this, v, s) || this, h.default(s), p;
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
        function h(l) {
          return l > 0 && (0, r.default)(l);
        }
        function f(l) {
          var u = new d.default(l), s = c.getRandom("w-col-id"), p = c.getRandom("w-row-id"), v = c.getRandom("btn-link"), m = "menus.panelMenus.table.", y = function(D) {
            return l.i18next.t(D);
          }, A = [{
            title: y(m + "\u63D2\u5165\u8868\u683C"),
            tpl: `<div>
                    <div class="w-e-table">
                        <span>` + y("\u521B\u5EFA") + `</span>
                        <input id="` + p + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + y(m + "\u884C") + `</span>
                        <input id="` + s + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (y(m + "\u5217") + y(m + "\u7684") + y(m + "\u8868\u683C")) + `</span>
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
                return h(I) && h(D) ? (u.createAction(I, D), !0) : (l.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning"), !1);
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
          function d(h) {
            this.editor = h;
          }
          return d.prototype.createAction = function(h, f) {
            var l = this.editor, u = c.default(l.selection.getSelectionContainerElem()), s = c.default(u.elems[0]).parentUntilEditor("UL", l), p = c.default(u.elems[0]).parentUntilEditor("OL", l);
            if (!(s || p)) {
              var v = this.createTableHtml(h, f);
              l.cmd.do("insertHTML", v);
            }
          }, d.prototype.createTableHtml = function(h, f) {
            for (var l = "", u = "", s = 0; s < h; s++) {
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
        var r = t(2), i = r.__importDefault(t(3)), c = r.__importDefault(t(39)), g = r.__importDefault(t(394)), d = r.__importDefault(t(399)), h = t(7);
        function f(p) {
          var v;
          function m(A) {
            var x = new d.default(p), S = "menus.panelMenus.table.", D = function(E, T) {
              return T === void 0 && (T = S), p.i18next.t(T + E);
            }, I = [{
              $elem: i.default("<span>" + D("\u5220\u9664\u8868\u683C") + "</span>"),
              onClick: function(E, T) {
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", h.EMPTY_P), !0;
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
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), O === 0 ? b = h.EMPTY_P : b = x.getTableHtml(g.default.DeleteRow(i.default(F), B).elems[0]), b = s(T, b), E.cmd.do("insertHTML", b), !0;
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
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), O === 0 ? b = h.EMPTY_P : b = x.getTableHtml(F.elems[0]), b = s(T, b), E.cmd.do("insertHTML", b), !0;
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
            showTableTooltip: m,
            hideTableTooltip: y
          };
        }
        function l(p) {
          var v = p.selection.getSelectionStartElem(), m = p.selection.getSelectionEndElem();
          return (v == null ? void 0 : v.elems[0]) !== (m == null ? void 0 : m.elems[0]);
        }
        function u(p) {
          var v = f(p), m = v.showTableTooltip, y = v.hideTableTooltip;
          p.txt.eventHooks.tableClickEvents.push(m), p.txt.eventHooks.clickEvents.push(y), p.txt.eventHooks.keyupEvents.push(y), p.txt.eventHooks.toolbarClickEvents.push(y), p.txt.eventHooks.menuClickEvents.push(y), p.txt.eventHooks.textScrollEvents.push(y);
        }
        n.default = u;
        function s(p, v) {
          var m = p.elems[0].nextSibling;
          return (!m || m.innerHTML === "<br>") && (v += "" + h.EMPTY_P), v;
        }
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(45)), i = e(t(91)), c = e(t(4)), g = e(t(138));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var d = t(2), h = d.__importDefault(t(3));
        function f(y, A) {
          for (var x = m(y), S = (0, r.default)(Array.prototype).apply(x.children), D = S[0].children.length, I = document.createElement("tr"), C = 0; C < D; C++) {
            var E = document.createElement("td");
            I.appendChild(E);
          }
          return (0, i.default)(S).call(S, A + 1, 0, I), v(x, S), h.default(x.parentNode);
        }
        function l(y, A) {
          for (var x = m(y), S = (0, r.default)(Array.prototype).apply(x.children), D = function(E) {
            var T, R = [];
            for ((0, c.default)(T = (0, g.default)(S[E].children)).call(T, function(B) {
              R.push(B);
            }); S[E].children.length !== 0; )
              S[E].removeChild(S[E].children[0]);
            var N = h.default(R[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
            (0, i.default)(R).call(R, A + 1, 0, N);
            for (var M = 0; M < R.length; M++)
              S[E].appendChild(R[M]);
          }, I = 0; I < S.length; I++)
            D(I);
          return v(x, S), h.default(x.parentNode);
        }
        function u(y, A) {
          var x = m(y), S = (0, r.default)(Array.prototype).apply(x.children);
          return (0, i.default)(S).call(S, A, 1), v(x, S), h.default(x.parentNode);
        }
        function s(y, A) {
          for (var x = m(y), S = (0, r.default)(Array.prototype).apply(x.children), D = function(E) {
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
          return v(x, S), h.default(x.parentNode);
        }
        function p(y, A, x) {
          for (var S = m(y), D = (0, r.default)(Array.prototype).apply(S.children), I = D[A].children, C = document.createElement("tr"), E = function(N) {
            var M, B = document.createElement(x), F = I[N];
            (0, c.default)(M = (0, g.default)(F.childNodes)).call(M, function(O) {
              B.appendChild(O);
            }), C.appendChild(B);
          }, T = 0; T < I.length; T++)
            E(T);
          return (0, i.default)(D).call(D, A, 1, C), v(S, D), h.default(S.parentNode);
        }
        function v(y, A) {
          for (; y.children.length !== 0; )
            y.removeChild(y.children[0]);
          for (var x = 0; x < A.length; x++)
            y.appendChild(A[x]);
        }
        function m(y) {
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
          var l = a(f), u = typeof this == "function" ? this : Array, s = arguments.length, p = s > 1 ? arguments[1] : void 0, v = p !== void 0, m = d(l), y = 0, A, x, S, D, I, C;
          if (v && (p = e(p, s > 2 ? arguments[2] : void 0, 2)), m != null && !(u == Array && i(m)))
            for (D = m.call(l), I = D.next, x = new u(); !(S = I.call(D)).done; y++)
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
          function h(f) {
            this.editor = f;
          }
          return h.prototype.getRowNode = function(f) {
            var l, u = g.default(f).elems[0];
            return u.parentNode && (u = (l = g.default(u).parentUntil("TR", u)) === null || l === void 0 ? void 0 : l.elems[0]), u;
          }, h.prototype.getCurrentRowIndex = function(f, l) {
            var u, s = 0, p = f.children[0];
            return p.nodeName === "COLGROUP" && (p = f.children[f.children.length - 1]), (0, r.default)(u = (0, i.default)(p.children)).call(u, function(v, m) {
              v === l && (s = m);
            }), s;
          }, h.prototype.getCurrentColIndex = function(f) {
            var l, u, s = 0, p = g.default(f).getNodeName() === "TD" || g.default(f).getNodeName() === "TH" ? f : (u = g.default(f).parentUntil("TD", f)) === null || u === void 0 ? void 0 : u.elems[0], v = g.default(p).parent();
            return (0, r.default)(l = (0, i.default)(v.elems[0].children)).call(l, function(m, y) {
              m === p && (s = y);
            }), s;
          }, h.prototype.getTableHtml = function(f) {
            var l = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + g.default(f).html() + "</table>";
            return l;
          }, h;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.bindEventKeyboardEvent = n.bindClickEvent = void 0;
        var r = t(2), i = r.__importDefault(t(3));
        function c(h) {
          if (!h.length)
            return !1;
          var f = h.elems[0];
          return f.nodeName === "P" && f.innerHTML === "<br>";
        }
        function g(h) {
          function f(l, u) {
            if (u.detail >= 3) {
              var s = window.getSelection();
              if (s) {
                var p = s.focusNode, v = s.anchorNode, m = i.default(v == null ? void 0 : v.parentElement);
                if (!l.isContain(i.default(p))) {
                  var y = m.elems[0].tagName === "TD" ? m : m.parentUntilEditor("td", h);
                  if (y) {
                    var A = h.selection.getRange();
                    A == null || A.setEnd(y.elems[0], y.elems[0].childNodes.length), h.selection.restoreSelection();
                  }
                }
              }
            }
          }
          h.txt.eventHooks.tableClickEvents.push(f);
        }
        n.bindClickEvent = g;
        function d(h) {
          var f = h.txt, l = h.selection, u = f.eventHooks.keydownEvents;
          u.push(function(s) {
            h.selection.saveRange();
            var p = l.getSelectionContainerElem();
            if (p) {
              var v = p.getNodeTop(h), m = v.length && v.prev().length ? v.prev() : null;
              if (m && m.getNodeName() === "TABLE" && l.isSelectionEmpty() && l.getCursorPos() === 0 && s.keyCode === 8) {
                var y = v.next(), A = !!y.length;
                A && c(v) && (v.remove(), h.selection.setRangeToElem(y.elems[0])), s.preventDefault();
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
        var i = t(2), c = i.__importDefault(t(38)), g = i.__importDefault(t(3)), d = t(6), h = i.__importDefault(t(402)), f = i.__importDefault(t(139)), l = i.__importDefault(t(33)), u = i.__importDefault(t(403));
        function s(v, m) {
          if (!m)
            return m;
          return m = A(m), m = y(m), m = d.replaceSpecialSymbol(m), m;
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
          i.__extends(m, v);
          function m(y) {
            var A = this, x = g.default('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
            return A = v.call(this, x, y) || this, u.default(y), A;
          }
          return m.prototype.insertLineCode = function(y) {
            var A = this.editor, x = g.default("<code>" + y + "</code>");
            A.cmd.do("insertElem", x), A.selection.createRangeByElem(x, !1), A.selection.restoreSelection();
          }, m.prototype.clickHandler = function() {
            var y = this.editor, A = y.selection.getSelectionText();
            this.isActive || (y.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(A));
          }, m.prototype.createPanel = function(y, A) {
            var x = h.default(this.editor, y, A), S = new l.default(this, x);
            S.create();
          }, m.prototype.tryChangeActive = function() {
            var y = this.editor;
            f.default(y) ? this.active() : this.unActive();
          }, m;
        }(c.default);
        n.default = p;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(26));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = t(6), g = i.__importDefault(t(3)), d = i.__importDefault(t(139)), h = t(7);
        function f(l, u, s) {
          var p, v = c.getRandom("input-iframe"), m = c.getRandom("select"), y = c.getRandom("btn-ok");
          function A(I, C) {
            var E, T = d.default(l);
            T && x();
            var R = (E = l.selection.getSelectionStartElem()) === null || E === void 0 ? void 0 : E.elems[0].innerHTML;
            R && l.cmd.do("insertHTML", h.EMPTY_P);
            var N = C.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            l.highlight && (N = l.highlight.highlightAuto(N).value), l.cmd.do("insertHTML", '<pre><code class="' + I + '">' + N + "</code></pre>");
            var M = l.selection.getSelectionStartElem(), B = M == null ? void 0 : M.getNodeTop(l);
            (B == null ? void 0 : B.getNextSibling().elems.length) === 0 && g.default(h.EMPTY_P).insertAfter(B);
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
                        <select name="" id="` + m + `">
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
                    var C = document.getElementById(v), E = g.default("#" + m), T = E.val(), R = C.value;
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
        function g(h) {
          var f;
          function l(s) {
            var p = "menus.panelMenus.code.", v = function(A, x) {
              return x === void 0 && (x = p), h.i18next.t(x + A);
            }, m = [{
              $elem: i.default("<span>" + v("\u5220\u9664\u4EE3\u7801") + "</span>"),
              onClick: function(A, x) {
                return x.remove(), !0;
              }
            }];
            f = new c.default(h, s, m), f.create();
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
        function d(h) {
          var f = g(h), l = f.showCodeTooltip, u = f.hideCodeTooltip;
          h.txt.eventHooks.codeClickEvents.push(l), h.txt.eventHooks.clickEvents.push(u), h.txt.eventHooks.toolbarClickEvents.push(u), h.txt.eventHooks.menuClickEvents.push(u), h.txt.eventHooks.textScrollEvents.push(u);
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
          var h = d.$textElem, f = d.selection, l = d.txt, u = l.eventHooks.keydownEvents;
          u.push(function(s) {
            var p;
            if (s.keyCode === 40) {
              var v = f.getSelectionContainerElem(), m = (p = h.children()) === null || p === void 0 ? void 0 : p.last();
              if ((v == null ? void 0 : v.elems[0].tagName) === "XMP" && (m == null ? void 0 : m.elems[0].tagName) === "PRE") {
                var y = c.default(i.EMPTY_P);
                h.append(y);
              }
            }
          }), u.push(function(s) {
            d.selection.saveRange();
            var p = f.getSelectionContainerElem();
            if (p) {
              var v = p.getNodeTop(d), m = v == null ? void 0 : v.prev(), y = v == null ? void 0 : v.getNextSibling();
              if (m.length && (m == null ? void 0 : m.getNodeName()) === "PRE" && y.length === 0 && f.getCursorPos() === 0 && s.keyCode === 8) {
                var A = c.default(i.EMPTY_P);
                h.append(A);
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
        var r = t(2), i = r.__importDefault(t(23)), c = r.__importDefault(t(3)), g = r.__importDefault(t(407)), d = t(6), h = t(7), f = function(l) {
          r.__extends(u, l);
          function u(s) {
            var p = this, v = c.default('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
            return p = l.call(this, v, s) || this, g.default(s), p;
          }
          return u.prototype.clickHandler = function() {
            var s = this.editor, p = s.selection.getRange(), v = s.selection.getSelectionContainerElem();
            if (!!(v != null && v.length)) {
              var m = c.default(v.elems[0]), y = m.parentUntil("TABLE", v.elems[0]), A = m.children();
              m.getNodeName() !== "CODE" && (y && c.default(y.elems[0]).getNodeName() === "TABLE" || A && A.length !== 0 && c.default(A.elems[0]).getNodeName() === "IMG" && !(p != null && p.collapsed) || this.createSplitLine());
            }
          }, u.prototype.createSplitLine = function() {
            var s = "<hr/>" + h.EMPTY_P;
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
        function g(h) {
          var f;
          function l(s) {
            var p = [{
              $elem: i.default("<span>" + h.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"),
              onClick: function(m, y) {
                return m.selection.createRangeByElem(y), m.selection.restoreSelection(), m.cmd.do("delete"), !0;
              }
            }];
            f = new c.default(h, s, p), f.create();
          }
          function u() {
            f && (f.remove(), f = null);
          }
          return {
            showSplitLineTooltip: l,
            hideSplitLineTooltip: u
          };
        }
        function d(h) {
          var f = g(h), l = f.showSplitLineTooltip, u = f.hideSplitLineTooltip;
          h.txt.eventHooks.splitLineEvents.push(l), h.txt.eventHooks.clickEvents.push(u), h.txt.eventHooks.keyupEvents.push(u), h.txt.eventHooks.toolbarClickEvents.push(u), h.txt.eventHooks.menuClickEvents.push(u), h.txt.eventHooks.textScrollEvents.push(u);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = i.__importDefault(t(23)), d = t(98), h = i.__importDefault(t(415)), f = i.__importDefault(t(140)), l = function(u) {
          i.__extends(s, u);
          function s(p) {
            var v = this, m = c.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
            return v = u.call(this, m, p) || this, h.default(p), v;
          }
          return s.prototype.clickHandler = function() {
            var p = this.editor;
            d.isAllTodo(p) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
          }, s.prototype.tryChangeActive = function() {
            d.isAllTodo(this.editor) ? this.active() : this.unActive();
          }, s.prototype.setTodo = function() {
            var p = this.editor, v = p.selection.getSelectionRangeTopNodes();
            (0, r.default)(v).call(v, function(m) {
              var y, A = m == null ? void 0 : m.getNodeName();
              if (A === "P") {
                var x = f.default(m), S = x.getTodo(), D = (y = S.children()) === null || y === void 0 ? void 0 : y.getNode();
                S.insertAfter(m), p.selection.moveCursor(D), m.remove();
              }
            }), this.tryChangeActive();
          }, s.prototype.cancelTodo = function() {
            var p = this.editor, v = p.selection.getSelectionRangeTopNodes();
            (0, r.default)(v).call(v, function(m) {
              var y, A, x, S = (A = (y = m.childNodes()) === null || y === void 0 ? void 0 : y.childNodes()) === null || A === void 0 ? void 0 : A.clone(!0), D = c.default("<p></p>");
              D.append(S), D.insertAfter(m), (x = D.childNodes()) === null || x === void 0 || x.get(0).remove(), p.selection.moveCursor(D.getNode()), m.remove();
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
          every: function(h) {
            return a(this, h, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3)), g = t(98), d = i.__importDefault(t(140)), h = t(98), f = t(7);
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
                })), h.dealTextNode(R, M), h.dealTextNode(N, B, !1), u.selection.moveCursor(N, 0);
              }
              if (D.text() === "") {
                var $ = c.default(f.EMPTY_P);
                $.insertAfter(D), S.moveCursor($.getNode()), D.remove();
                return;
              }
              var H = S.getCursorPos(), j = g.getCursorNextNode(I == null ? void 0 : I.getNode(), C, H), V = d.default(c.default(j)), U = V.getInputContainer(), W = U.parent().getNode(), K = V.getTodo(), w = U.getNode().nextSibling;
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
            A && h.isTodo(A) && A.text() === "" && (c.default(f.EMPTY_P).insertAfter(A), A.remove());
          }
          function m(y) {
            y && y.target instanceof HTMLInputElement && y.target.type === "checkbox" && (y.target.checked ? y.target.setAttribute("checked", "true") : y.target.removeAttribute("checked"));
          }
          u.txt.eventHooks.enterDownEvents.push(s), u.txt.eventHooks.deleteUpEvents.push(v), u.txt.eventHooks.deleteDownEvents.push(p), u.txt.eventHooks.clickEvents.push(m);
        }
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        }), n.selectorValidator = void 0;
        var r = t(2), i = r.__importDefault(t(3)), c = t(6), g = t(7), d = r.__importDefault(t(130)), h = {
          border: "1px solid #c9d8db",
          toolbarBgColor: "#FFF",
          toolbarBottomBorder: "1px solid #EEE"
        };
        function f(u) {
          var s = u.toolbarSelector, p = i.default(s), v = u.textSelector, m = u.config, y = m.height, A = u.i18next, x = i.default("<div></div>"), S = i.default("<div></div>"), D, I, C = null;
          v == null ? (I = p.children(), p.append(x).append(S), x.css("background-color", h.toolbarBgColor).css("border", h.border).css("border-bottom", h.toolbarBottomBorder), S.css("border", h.border).css("border-top", "none").css("height", y + "px")) : (p.append(x), C = i.default(v).children(), i.default(v).append(S), I = S.children()), D = i.default("<div></div>"), D.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
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
          var s = "data-we-id", p = /^wangEditor-\d+$/, v = u.textSelector, m = u.toolbarSelector, y = {
            bar: i.default("<div></div>"),
            text: i.default("<div></div>")
          };
          if (m == null)
            throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
          if (y.bar = i.default(m), !y.bar.elems.length)
            throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + m);
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
        function g(d, h) {
          var f = d.$textElem, l = f.children();
          if (!l || !l.length) {
            f.append(i.default(c.EMPTY_P)), g(d);
            return;
          }
          var u = l.last();
          if (h) {
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
          d(s), h(s), f(s);
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
        function h(s) {
          s.isFocus = !1;
          function p(v) {
            var m = v.target, y = c.default(m), A = s.$textElem, x = s.$toolbarElem, S = A.isContain(y), D = x.isContain(y), I = x.elems[0] == v.target;
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
          var p, v = s.config, m = v.onblur, y = s.txt.html() || "";
          (0, r.default)(p = s.txt.eventHooks.onBlurEvents).call(p, function(A) {
            return A();
          }), m(y);
        }
        function u(s) {
          var p = s.config, v = p.onfocus, m = s.txt.html() || "";
          v(m);
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
            } catch (h) {
              throw new Error("i18next:" + h);
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
        var g = "w-e-icon-fullscreen", d = "w-e-icon-fullscreen_exit", h = "w-e-full-screen-editor";
        n.setFullScreen = function(l) {
          var u = c.default(l.toolbarSelector), s = l.$textContainerElem, p = l.$toolbarElem, v = (0, r.default)(p).call(p, "i." + g), m = l.config;
          v.removeClass(g), v.addClass(d), u.addClass(h), u.css("z-index", m.zIndexFullScreen);
          var y = p.getBoundingClientRect();
          s.css("height", "calc(100% - " + y.height + "px)");
        }, n.setUnFullScreen = function(l) {
          var u = c.default(l.toolbarSelector), s = l.$textContainerElem, p = l.$toolbarElem, v = (0, r.default)(p).call(p, "i." + d), m = l.config;
          v.removeClass(d), v.addClass(g), u.removeClass(h), u.css("z-index", "auto"), s.css("height", m.height + "px");
        };
        var f = function(u) {
          if (!u.textSelector && !!u.config.showFullScreen) {
            var s = u.$toolbarElem, p = c.default(`<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` + g + `"></i>
        </div>`);
            p.on("click", function(v) {
              var m, y = (0, r.default)(m = c.default(v.currentTarget)).call(m, "i");
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
          var h, f = g.isEnable ? g.$textElem : (0, r.default)(h = g.$textContainerElem).call(h, ".w-e-content-mantle"), l = (0, r.default)(f).call(f, "[id='" + d + "']"), u = l.getOffsetData().top;
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
          return d.prototype.get = function(h) {
            return h && this.tier[h] ? this.baseZIndex + this.tier[h] : this.baseZIndex;
          }, d.prototype.init = function(h) {
            this.baseZIndex == i.default.zIndex && (this.baseZIndex = h.config.zIndex);
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(70)), i = e(t(4));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var c = t(2), g = c.__importDefault(t(426)), d = t(6), h = t(7);
        function f(u, s) {
          return (0, r.default)(u).call(u, function(p) {
            var v = p.type, m = p.target, y = p.attributeName;
            return v != "attributes" || v == "attributes" && (y == "contenteditable" || m != s);
          });
        }
        var l = function(u) {
          c.__extends(s, u);
          function s(p) {
            var v = u.call(this, function(m, y) {
              var A;
              if (m = f(m, y.target), (A = v.data).push.apply(A, m), p.isCompatibleMode)
                v.asyncSave();
              else if (!p.isComposing)
                return v.asyncSave();
            }) || this;
            return v.editor = p, v.data = [], v.asyncSave = h.EMPTY_FN, v;
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
            }, this.callback = function(h) {
              c(h, d);
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
          function h(f) {
            this.editor = f, this.content = new i.default(f), this.scroll = new c.default(f), this.range = new g.default(f);
          }
          return (0, a.default)(h.prototype, "size", {
            get: function() {
              return this.scroll.size;
            },
            enumerable: !1,
            configurable: !0
          }), h.prototype.observe = function() {
            this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
          }, h.prototype.save = function(f) {
            f.length && (this.content.save(f), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
          }, h.prototype.revoke = function() {
            this.editor.change.disconnect();
            var f = this.content.revoke();
            f && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), f && this.editor.change.emit();
          }, h.prototype.restore = function() {
            this.editor.change.disconnect();
            var f = this.content.restore();
            f && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), f && this.editor.change.emit();
          }, h;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(429)), c = r.__importDefault(t(433)), g = function() {
          function d(h) {
            this.editor = h;
          }
          return d.prototype.observe = function() {
            this.editor.isCompatibleMode ? this.cache = new c.default(this.editor) : this.cache = new i.default(this.editor), this.cache.observe();
          }, d.prototype.save = function(h) {
            this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(h);
          }, d.prototype.revoke = function() {
            var h;
            return (h = this.cache) === null || h === void 0 ? void 0 : h.revoke();
          }, d.prototype.restore = function() {
            var h;
            return (h = this.cache) === null || h === void 0 ? void 0 : h.restore();
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), i = r.__importDefault(t(99)), c = r.__importDefault(t(431)), g = t(432), d = function(h) {
          r.__extends(f, h);
          function f(l) {
            var u = h.call(this, l.config.historyMaxSize) || this;
            return u.editor = l, u;
          }
          return f.prototype.observe = function() {
            this.resetMaxSize(this.editor.config.historyMaxSize);
          }, f.prototype.compile = function(l) {
            return this.save(c.default(l)), this;
          }, f.prototype.revoke = function() {
            return h.prototype.revoke.call(this, function(l) {
              g.revoke(l);
            });
          }, f.prototype.restore = function() {
            return h.prototype.restore.call(this, function(l) {
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
        function h(p) {
          var v = {};
          return p.addedNodes.length && (v.add = c.toArray(p.addedNodes)), p.removedNodes.length && (v.remove = c.toArray(p.removedNodes)), v;
        }
        n.complieNodes = h;
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
          var v = [], m = !1, y = [];
          return (0, r.default)(p).call(p, function(A, x) {
            var S = {
              type: g(A.type),
              target: A.target,
              attr: A.attributeName || "",
              value: d(A) || "",
              oldValue: A.oldValue || "",
              nodes: h(A),
              position: f(A)
            };
            if (v.push(S), !!c.UA.isFirefox) {
              if (m && A.addedNodes.length && A.addedNodes[0].nodeType == 1) {
                var D = A.addedNodes[0], I = {
                  type: "node",
                  target: D,
                  attr: "",
                  value: "",
                  oldValue: "",
                  nodes: {
                    add: [m]
                  },
                  position: {
                    type: "parent",
                    target: D
                  }
                };
                (0, i.default)(l).call(l, D.nodeName) != -1 ? (I.nodes.add = c.toArray(D.childNodes), v.push(I)) : m.nodeType == 3 ? (s(D, y) && (I.nodes.add = c.toArray(D.childNodes)), v.push(I)) : (0, i.default)(l).call(l, A.target.nodeName) == -1 && s(D, y) && (I.nodes.add = c.toArray(D.childNodes), v.push(I));
              }
              S.type == "node" && A.removedNodes.length == 1 ? (m = A.removedNodes[0], y.push(m)) : (m = !1, y.length = 0);
            }
          }), v;
        }
        n.default = u;
        function s(p, v) {
          for (var m = 0, y = v.length - 1; y > 0 && p.contains(v[y]); y--)
            m++;
          return m;
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
        function h(y) {
          y.target.textContent = y.oldValue;
        }
        var f = {
          node: g,
          text: h,
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
        function m(y) {
          for (var A = 0, x = y; A < x.length; A++) {
            var S = x[A];
            v[S.type](S);
          }
        }
        n.restore = m;
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
          function d(h) {
            var f = g.call(this, h.config.historyMaxSize) || this;
            return f.editor = h, f.last = 0, f.target = h.$textElem.elems[0], f;
          }
          return d.prototype.observe = function() {
            var h = this;
            this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
              h.last = h.target.scrollTop;
            }), this.resetMaxSize(this.editor.config.historyMaxSize);
          }, d.prototype.save = function() {
            return g.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
          }, d.prototype.revoke = function() {
            var h = this;
            return g.prototype.revoke.call(this, function(f) {
              h.target.scrollTop = f[0];
            });
          }, d.prototype.restore = function() {
            var h = this;
            return g.prototype.restore.call(this, function(f) {
              h.target.scrollTop = f[1];
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
        var h = function(f) {
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
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), a = e(t(1)), r = e(t(29));
        (0, a.default)(n, "__esModule", {
          value: !0
        });
        var i = t(2), c = i.__importDefault(t(3));
        t(438);
        function g(d) {
          var h = !1, f, l;
          d.txt.eventHooks.changeEvents.push(function() {
            h && (0, r.default)(f).call(f, ".w-e-content-preview").html(d.$textElem.html());
          });
          function u() {
            if (!h) {
              d.$textElem.hide();
              var p = d.zIndex.get("textContainer"), v = d.txt.html();
              f = c.default('<div class="w-e-content-mantle" style="z-index:' + p + `">
                <div class="w-e-content-preview w-e-text">` + v + `</div>
            </div>`), d.$textContainerElem.append(f);
              var m = d.zIndex.get("menu");
              l = c.default('<div class="w-e-menue-mantle" style="z-index:' + m + '"></div>'), d.$toolbarElem.append(l), h = !0, d.isEnable = !1;
            }
          }
          function s() {
            !h || (f.remove(), l.remove(), d.$textElem.show(), h = !1, d.isEnable = !0);
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
        var g = t(2), d = g.__importDefault(t(87)), h = t(6);
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
          var s = (0, r.default)({}, h.deepClone(d.default.globalPluginsFunctionList), h.deepClone(u.pluginsFunctionList)), p = (0, i.default)(s);
          (0, c.default)(p).call(p, function(v) {
            var m = v[0], y = v[1];
            console.info("plugin " + m + " initializing");
            var A = y.intention, x = y.config;
            A(u, x), console.info("plugin " + m + " initialization complete");
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
})(Sn);
const ac = /* @__PURE__ */ Rn(Sn.exports), ic = {
  key: 2,
  id: "editor"
}, lc = /* @__PURE__ */ Tn({
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
    const n = P, t = Jt(), e = Jt(null), a = Jt(null), r = Jt(null), i = () => {
      if (n.options && n.options.length) {
        let A = {}, x = {};
        n.options.map((S) => {
          A[S.prop] = S.value, x[S.prop] = S.rules, S.type === "editor" && Pn(() => {
            if (document.getElementById("editor")) {
              const D = new ac("#editor");
              S.placeholder && (D.config.placeholder = S.placeholder), D.create(), D.txt.html(S.value), D.config.onchange = (I) => {
                a.value[S.prop] = I;
              }, e.value = D;
            }
          });
        }), a.value = _e(A), r.value = _e(x);
      }
    };
    Dn(() => {
      i();
    });
    let c = (A) => {
      o("on-preview", A);
    }, g = (A, x) => {
      o("on-remove", { file: A, fileList: x });
    }, d = (A, x, S) => {
      let D = n.options.find((I) => I.type === "upload");
      a.value[D.prop] = { response: A, file: x, fileList: S }, o("on-success", { response: A, file: x, fileList: S });
    }, h = (A, x, S) => {
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
      const S = ie("el-upload"), D = ie("el-form-item"), I = ie("el-form");
      return a.value ? (dt(), St(I, Wt({
        key: 0,
        "validate-on-rule-change": !1
      }, A.$attrs, {
        rules: r.value,
        model: a.value,
        ref_key: "form",
        ref: t
      }), {
        default: Bt(() => [
          (dt(!0), Xt(le, null, Pe(P.options, (C, E) => (dt(), Xt(le, { key: E }, [
            !C.children || !C.children.length ? (dt(), St(D, {
              key: 0,
              label: C.label,
              prop: C.prop
            }, {
              default: Bt(() => [
                C.type !== "upload" && C.type !== "editor" ? (dt(), St(se(`el-${C.type}`), Wt({ key: 0 }, C.attrs, {
                  modelValue: a.value[C.prop],
                  "onUpdate:modelValue": (T) => a.value[C.prop] = T
                }), null, 16, ["modelValue", "onUpdate:modelValue"])) : Ft("", !0),
                C.type === "upload" ? (dt(), St(S, Wt({ key: 1 }, C.UploadAttrs, {
                  "on-preview": At(c),
                  "on-remove": At(g),
                  "on-success": At(d),
                  "on-error": At(h),
                  "on-progress": At(f),
                  "on-change": At(l),
                  "on-exceed": At(p),
                  "before-upload": At(u),
                  "before-remove": At(s),
                  "http-request": n.httpRequest
                }), {
                  default: Bt(() => [
                    ue(A.$slots, "uploadArea", {}, void 0, !0),
                    ue(A.$slots, "uploadTip", {}, void 0, !0)
                  ]),
                  _: 2
                }, 1040, ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "on-exceed", "before-upload", "before-remove", "http-request"])) : Ft("", !0),
                C.type === "editor" ? (dt(), Xt("div", ic)) : Ft("", !0)
              ]),
              _: 2
            }, 1032, ["label", "prop"])) : Ft("", !0),
            C.children && C.children.length ? (dt(), St(D, {
              key: 1,
              label: C.label,
              prop: C.prop
            }, {
              default: Bt(() => [
                (dt(), St(se(`el-${C.type}`), Wt(C.attrs, {
                  modelValue: a.value[C.prop],
                  "onUpdate:modelValue": (T) => a.value[C.prop] = T
                }), {
                  default: Bt(() => [
                    (dt(!0), Xt(le, null, Pe(C.children, (T, R) => (dt(), St(se(`el-${T.type}`), {
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
          In(D, null, {
            default: Bt(() => [
              ue(A.$slots, "action", {
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
const sc = (P, L) => {
  const o = P.__vccOpts || P;
  for (const [n, t] of L)
    o[n] = t;
  return o;
}, uc = /* @__PURE__ */ sc(lc, [["__scopeId", "data-v-7857a4a1"]]), cc = {
  install(P) {
    P.component("xs-form", uc);
  }
};
export {
  cc as default
};
