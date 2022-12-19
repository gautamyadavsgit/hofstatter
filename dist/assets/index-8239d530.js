;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a)
  new MutationObserver((a) => {
    for (const i of a)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(a) {
    const i = {}
    return (
      a.integrity && (i.integrity = a.integrity),
      a.referrerpolicy && (i.referrerPolicy = a.referrerpolicy),
      a.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : a.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(a) {
    if (a.ep) return
    a.ep = !0
    const i = n(a)
    fetch(a.href, i)
  }
})()
function ka(e, t) {
  const n = Object.create(null),
    r = e.split(',')
  for (let a = 0; a < r.length; a++) n[r[a]] = !0
  return t ? (a) => !!n[a.toLowerCase()] : (a) => !!n[a]
}
function Ea(e) {
  if (H(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        a = he(r) ? cl(r) : Ea(r)
      if (a) for (const i in a) t[i] = a[i]
    }
    return t
  } else {
    if (he(e)) return e
    if (fe(e)) return e
  }
}
const ol = /;(?![^(]*\))/g,
  sl = /:([^]+)/,
  ll = /\/\*.*?\*\//gs
function cl(e) {
  const t = {}
  return (
    e
      .replace(ll, '')
      .split(ol)
      .forEach((n) => {
        if (n) {
          const r = n.split(sl)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function En(e) {
  let t = ''
  if (he(e)) t = e
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const r = En(e[n])
      r && (t += r + ' ')
    }
  else if (fe(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const fl = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  ul = ka(fl)
function Ao(e) {
  return !!e || e === ''
}
const ie = {},
  Wt = [],
  De = () => {},
  dl = () => !1,
  ml = /^on[^a-z]/,
  xr = (e) => ml.test(e),
  Aa = (e) => e.startsWith('onUpdate:'),
  we = Object.assign,
  Oa = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  pl = Object.prototype.hasOwnProperty,
  V = (e, t) => pl.call(e, t),
  H = Array.isArray,
  pn = (e) => wr(e) === '[object Map]',
  hl = (e) => wr(e) === '[object Set]',
  U = (e) => typeof e == 'function',
  he = (e) => typeof e == 'string',
  Pa = (e) => typeof e == 'symbol',
  fe = (e) => e !== null && typeof e == 'object',
  Oo = (e) => fe(e) && U(e.then) && U(e.catch),
  gl = Object.prototype.toString,
  wr = (e) => gl.call(e),
  vl = (e) => wr(e).slice(8, -1),
  bl = (e) => wr(e) === '[object Object]',
  Ca = (e) => he(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  ar = ka(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  kr = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  yl = /-(\w)/g,
  Ge = kr((e) => e.replace(yl, (t, n) => (n ? n.toUpperCase() : ''))),
  _l = /\B([A-Z])/g,
  tn = kr((e) => e.replace(_l, '-$1').toLowerCase()),
  Er = kr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Fr = kr((e) => (e ? `on${Er(e)}` : '')),
  An = (e, t) => !Object.is(e, t),
  jr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  fr = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Po = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let li
const xl = () =>
  li ||
  (li =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
let Ke
class wl {
  constructor(t = !1) {
    ;(this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ke),
      !t && Ke && (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1)
  }
  run(t) {
    if (this.active) {
      const n = Ke
      try {
        return (Ke = this), t()
      } finally {
        Ke = n
      }
    }
  }
  on() {
    Ke = this
  }
  off() {
    Ke = this.parent
  }
  stop(t) {
    if (this.active) {
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop()
        a && a !== this && ((this.parent.scopes[this.index] = a), (a.index = this.index))
      }
      ;(this.parent = void 0), (this.active = !1)
    }
  }
}
function kl(e, t = Ke) {
  t && t.active && t.effects.push(e)
}
const Sa = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Co = (e) => (e.w & ht) > 0,
  So = (e) => (e.n & ht) > 0,
  El = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ht
  },
  Al = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let r = 0; r < t.length; r++) {
        const a = t[r]
        Co(a) && !So(a) ? a.delete(e) : (t[n++] = a), (a.w &= ~ht), (a.n &= ~ht)
      }
      t.length = n
    }
  },
  Gr = new WeakMap()
let un = 0,
  ht = 1
const Qr = 30
let $e
const St = Symbol(''),
  Jr = Symbol('')
class Ia {
  constructor(t, n = null, r) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      kl(this, r)
  }
  run() {
    if (!this.active) return this.fn()
    let t = $e,
      n = mt
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = $e),
        ($e = this),
        (mt = !0),
        (ht = 1 << ++un),
        un <= Qr ? El(this) : ci(this),
        this.fn()
      )
    } finally {
      un <= Qr && Al(this),
        (ht = 1 << --un),
        ($e = this.parent),
        (mt = n),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    $e === this
      ? (this.deferStop = !0)
      : this.active && (ci(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function ci(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let mt = !0
const Io = []
function nn() {
  Io.push(mt), (mt = !1)
}
function rn() {
  const e = Io.pop()
  mt = e === void 0 ? !0 : e
}
function Ce(e, t, n) {
  if (mt && $e) {
    let r = Gr.get(e)
    r || Gr.set(e, (r = new Map()))
    let a = r.get(n)
    a || r.set(n, (a = Sa())), Ro(a)
  }
}
function Ro(e, t) {
  let n = !1
  un <= Qr ? So(e) || ((e.n |= ht), (n = !Co(e))) : (n = !e.has($e)),
    n && (e.add($e), $e.deps.push(e))
}
function tt(e, t, n, r, a, i) {
  const o = Gr.get(e)
  if (!o) return
  let s = []
  if (t === 'clear') s = [...o.values()]
  else if (n === 'length' && H(e)) {
    const l = Po(r)
    o.forEach((f, c) => {
      ;(c === 'length' || c >= l) && s.push(f)
    })
  } else
    switch ((n !== void 0 && s.push(o.get(n)), t)) {
      case 'add':
        H(e) ? Ca(n) && s.push(o.get('length')) : (s.push(o.get(St)), pn(e) && s.push(o.get(Jr)))
        break
      case 'delete':
        H(e) || (s.push(o.get(St)), pn(e) && s.push(o.get(Jr)))
        break
      case 'set':
        pn(e) && s.push(o.get(St))
        break
    }
  if (s.length === 1) s[0] && Zr(s[0])
  else {
    const l = []
    for (const f of s) f && l.push(...f)
    Zr(Sa(l))
  }
}
function Zr(e, t) {
  const n = H(e) ? e : [...e]
  for (const r of n) r.computed && fi(r)
  for (const r of n) r.computed || fi(r)
}
function fi(e, t) {
  ;(e !== $e || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Ol = ka('__proto__,__v_isRef,__isVue'),
  To = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Pa)
  ),
  Pl = Ra(),
  Cl = Ra(!1, !0),
  Sl = Ra(!0),
  ui = Il()
function Il() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = X(this)
        for (let i = 0, o = this.length; i < o; i++) Ce(r, 'get', i + '')
        const a = r[t](...n)
        return a === -1 || a === !1 ? r[t](...n.map(X)) : a
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        nn()
        const r = X(this)[t].apply(this, n)
        return rn(), r
      }
    }),
    e
  )
}
function Ra(e = !1, t = !1) {
  return function (r, a, i) {
    if (a === '__v_isReactive') return !e
    if (a === '__v_isReadonly') return e
    if (a === '__v_isShallow') return t
    if (a === '__v_raw' && i === (e ? (t ? Yl : Fo) : t ? Lo : $o).get(r)) return r
    const o = H(r)
    if (!e && o && V(ui, a)) return Reflect.get(ui, a, i)
    const s = Reflect.get(r, a, i)
    return (Pa(a) ? To.has(a) : Ol(a)) || (e || Ce(r, 'get', a), t)
      ? s
      : ve(s)
      ? o && Ca(a)
        ? s
        : s.value
      : fe(s)
      ? e
        ? jo(s)
        : Fn(s)
      : s
  }
}
const Rl = No(),
  Tl = No(!0)
function No(e = !1) {
  return function (n, r, a, i) {
    let o = n[r]
    if (Vt(o) && ve(o) && !ve(a)) return !1
    if (!e && (!ur(a) && !Vt(a) && ((o = X(o)), (a = X(a))), !H(n) && ve(o) && !ve(a)))
      return (o.value = a), !0
    const s = H(n) && Ca(r) ? Number(r) < n.length : V(n, r),
      l = Reflect.set(n, r, a, i)
    return n === X(i) && (s ? An(a, o) && tt(n, 'set', r, a) : tt(n, 'add', r, a)), l
  }
}
function Nl(e, t) {
  const n = V(e, t)
  e[t]
  const r = Reflect.deleteProperty(e, t)
  return r && n && tt(e, 'delete', t, void 0), r
}
function Ml(e, t) {
  const n = Reflect.has(e, t)
  return (!Pa(t) || !To.has(t)) && Ce(e, 'has', t), n
}
function $l(e) {
  return Ce(e, 'iterate', H(e) ? 'length' : St), Reflect.ownKeys(e)
}
const Mo = { get: Pl, set: Rl, deleteProperty: Nl, has: Ml, ownKeys: $l },
  Ll = {
    get: Sl,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    },
  },
  Fl = we({}, Mo, { get: Cl, set: Tl }),
  Ta = (e) => e,
  Ar = (e) => Reflect.getPrototypeOf(e)
function Hn(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const a = X(e),
    i = X(t)
  n || (t !== i && Ce(a, 'get', t), Ce(a, 'get', i))
  const { has: o } = Ar(a),
    s = r ? Ta : n ? $a : On
  if (o.call(a, t)) return s(e.get(t))
  if (o.call(a, i)) return s(e.get(i))
  e !== a && e.get(t)
}
function Wn(e, t = !1) {
  const n = this.__v_raw,
    r = X(n),
    a = X(e)
  return (
    t || (e !== a && Ce(r, 'has', e), Ce(r, 'has', a)), e === a ? n.has(e) : n.has(e) || n.has(a)
  )
}
function Kn(e, t = !1) {
  return (e = e.__v_raw), !t && Ce(X(e), 'iterate', St), Reflect.get(e, 'size', e)
}
function di(e) {
  e = X(e)
  const t = X(this)
  return Ar(t).has.call(t, e) || (t.add(e), tt(t, 'add', e, e)), this
}
function mi(e, t) {
  t = X(t)
  const n = X(this),
    { has: r, get: a } = Ar(n)
  let i = r.call(n, e)
  i || ((e = X(e)), (i = r.call(n, e)))
  const o = a.call(n, e)
  return n.set(e, t), i ? An(t, o) && tt(n, 'set', e, t) : tt(n, 'add', e, t), this
}
function pi(e) {
  const t = X(this),
    { has: n, get: r } = Ar(t)
  let a = n.call(t, e)
  a || ((e = X(e)), (a = n.call(t, e))), r && r.call(t, e)
  const i = t.delete(e)
  return a && tt(t, 'delete', e, void 0), i
}
function hi() {
  const e = X(this),
    t = e.size !== 0,
    n = e.clear()
  return t && tt(e, 'clear', void 0, void 0), n
}
function Yn(e, t) {
  return function (r, a) {
    const i = this,
      o = i.__v_raw,
      s = X(o),
      l = t ? Ta : e ? $a : On
    return !e && Ce(s, 'iterate', St), o.forEach((f, c) => r.call(a, l(f), l(c), i))
  }
}
function qn(e, t, n) {
  return function (...r) {
    const a = this.__v_raw,
      i = X(a),
      o = pn(i),
      s = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      f = a[e](...r),
      c = n ? Ta : t ? $a : On
    return (
      !t && Ce(i, 'iterate', l ? Jr : St),
      {
        next() {
          const { value: d, done: p } = f.next()
          return p ? { value: d, done: p } : { value: s ? [c(d[0]), c(d[1])] : c(d), done: p }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function lt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function jl() {
  const e = {
      get(i) {
        return Hn(this, i)
      },
      get size() {
        return Kn(this)
      },
      has: Wn,
      add: di,
      set: mi,
      delete: pi,
      clear: hi,
      forEach: Yn(!1, !1),
    },
    t = {
      get(i) {
        return Hn(this, i, !1, !0)
      },
      get size() {
        return Kn(this)
      },
      has: Wn,
      add: di,
      set: mi,
      delete: pi,
      clear: hi,
      forEach: Yn(!1, !0),
    },
    n = {
      get(i) {
        return Hn(this, i, !0)
      },
      get size() {
        return Kn(this, !0)
      },
      has(i) {
        return Wn.call(this, i, !0)
      },
      add: lt('add'),
      set: lt('set'),
      delete: lt('delete'),
      clear: lt('clear'),
      forEach: Yn(!0, !1),
    },
    r = {
      get(i) {
        return Hn(this, i, !0, !0)
      },
      get size() {
        return Kn(this, !0)
      },
      has(i) {
        return Wn.call(this, i, !0)
      },
      add: lt('add'),
      set: lt('set'),
      delete: lt('delete'),
      clear: lt('clear'),
      forEach: Yn(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = qn(i, !1, !1)),
        (n[i] = qn(i, !0, !1)),
        (t[i] = qn(i, !1, !0)),
        (r[i] = qn(i, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [Dl, zl, Bl, Ul] = jl()
function Na(e, t) {
  const n = t ? (e ? Ul : Bl) : e ? zl : Dl
  return (r, a, i) =>
    a === '__v_isReactive'
      ? !e
      : a === '__v_isReadonly'
      ? e
      : a === '__v_raw'
      ? r
      : Reflect.get(V(n, a) && a in r ? n : r, a, i)
}
const Hl = { get: Na(!1, !1) },
  Wl = { get: Na(!1, !0) },
  Kl = { get: Na(!0, !1) },
  $o = new WeakMap(),
  Lo = new WeakMap(),
  Fo = new WeakMap(),
  Yl = new WeakMap()
function ql(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Vl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ql(vl(e))
}
function Fn(e) {
  return Vt(e) ? e : Ma(e, !1, Mo, Hl, $o)
}
function Xl(e) {
  return Ma(e, !1, Fl, Wl, Lo)
}
function jo(e) {
  return Ma(e, !0, Ll, Kl, Fo)
}
function Ma(e, t, n, r, a) {
  if (!fe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = a.get(e)
  if (i) return i
  const o = Vl(e)
  if (o === 0) return e
  const s = new Proxy(e, o === 2 ? r : n)
  return a.set(e, s), s
}
function Kt(e) {
  return Vt(e) ? Kt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Vt(e) {
  return !!(e && e.__v_isReadonly)
}
function ur(e) {
  return !!(e && e.__v_isShallow)
}
function Do(e) {
  return Kt(e) || Vt(e)
}
function X(e) {
  const t = e && e.__v_raw
  return t ? X(t) : e
}
function zo(e) {
  return fr(e, '__v_skip', !0), e
}
const On = (e) => (fe(e) ? Fn(e) : e),
  $a = (e) => (fe(e) ? jo(e) : e)
function Bo(e) {
  mt && $e && ((e = X(e)), Ro(e.dep || (e.dep = Sa())))
}
function Uo(e, t) {
  ;(e = X(e)), e.dep && Zr(e.dep)
}
function ve(e) {
  return !!(e && e.__v_isRef === !0)
}
function Gl(e) {
  return Ho(e, !1)
}
function Ql(e) {
  return Ho(e, !0)
}
function Ho(e, t) {
  return ve(e) ? e : new Jl(e, t)
}
class Jl {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : X(t)),
      (this._value = n ? t : On(t))
  }
  get value() {
    return Bo(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || ur(t) || Vt(t)
    ;(t = n ? t : X(t)),
      An(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : On(t)), Uo(this))
  }
}
function It(e) {
  return ve(e) ? e.value : e
}
const Zl = {
  get: (e, t, n) => It(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t]
    return ve(a) && !ve(n) ? ((a.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function Wo(e) {
  return Kt(e) ? e : new Proxy(e, Zl)
}
var Ko
class ec {
  constructor(t, n, r, a) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Ko] = !1),
      (this._dirty = !0),
      (this.effect = new Ia(t, () => {
        this._dirty || ((this._dirty = !0), Uo(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !a),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = X(this)
    return (
      Bo(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
Ko = '__v_isReadonly'
function tc(e, t, n = !1) {
  let r, a
  const i = U(e)
  return i ? ((r = e), (a = De)) : ((r = e.get), (a = e.set)), new ec(r, a, i || !a, n)
}
function pt(e, t, n, r) {
  let a
  try {
    a = r ? e(...r) : e()
  } catch (i) {
    Or(i, t, n)
  }
  return a
}
function ze(e, t, n, r) {
  if (U(e)) {
    const i = pt(e, t, n, r)
    return (
      i &&
        Oo(i) &&
        i.catch((o) => {
          Or(o, t, n)
        }),
      i
    )
  }
  const a = []
  for (let i = 0; i < e.length; i++) a.push(ze(e[i], t, n, r))
  return a
}
function Or(e, t, n, r = !0) {
  const a = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const o = t.proxy,
      s = n
    for (; i; ) {
      const f = i.ec
      if (f) {
        for (let c = 0; c < f.length; c++) if (f[c](e, o, s) === !1) return
      }
      i = i.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      pt(l, null, 10, [e, o, s])
      return
    }
  }
  nc(e, n, a, r)
}
function nc(e, t, n, r = !0) {
  console.error(e)
}
let Pn = !1,
  ea = !1
const ge = []
let qe = 0
const Yt = []
let Ze = null,
  At = 0
const Yo = Promise.resolve()
let La = null
function qo(e) {
  const t = La || Yo
  return e ? t.then(this ? e.bind(this) : e) : t
}
function rc(e) {
  let t = qe + 1,
    n = ge.length
  for (; t < n; ) {
    const r = (t + n) >>> 1
    Cn(ge[r]) < e ? (t = r + 1) : (n = r)
  }
  return t
}
function Fa(e) {
  ;(!ge.length || !ge.includes(e, Pn && e.allowRecurse ? qe + 1 : qe)) &&
    (e.id == null ? ge.push(e) : ge.splice(rc(e.id), 0, e), Vo())
}
function Vo() {
  !Pn && !ea && ((ea = !0), (La = Yo.then(Go)))
}
function ac(e) {
  const t = ge.indexOf(e)
  t > qe && ge.splice(t, 1)
}
function ic(e) {
  H(e) ? Yt.push(...e) : (!Ze || !Ze.includes(e, e.allowRecurse ? At + 1 : At)) && Yt.push(e), Vo()
}
function gi(e, t = Pn ? qe + 1 : 0) {
  for (; t < ge.length; t++) {
    const n = ge[t]
    n && n.pre && (ge.splice(t, 1), t--, n())
  }
}
function Xo(e) {
  if (Yt.length) {
    const t = [...new Set(Yt)]
    if (((Yt.length = 0), Ze)) {
      Ze.push(...t)
      return
    }
    for (Ze = t, Ze.sort((n, r) => Cn(n) - Cn(r)), At = 0; At < Ze.length; At++) Ze[At]()
    ;(Ze = null), (At = 0)
  }
}
const Cn = (e) => (e.id == null ? 1 / 0 : e.id),
  oc = (e, t) => {
    const n = Cn(e) - Cn(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Go(e) {
  ;(ea = !1), (Pn = !0), ge.sort(oc)
  const t = De
  try {
    for (qe = 0; qe < ge.length; qe++) {
      const n = ge[qe]
      n && n.active !== !1 && pt(n, null, 14)
    }
  } finally {
    ;(qe = 0), (ge.length = 0), Xo(), (Pn = !1), (La = null), (ge.length || Yt.length) && Go()
  }
}
function sc(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || ie
  let a = n
  const i = t.startsWith('update:'),
    o = i && t.slice(7)
  if (o && o in r) {
    const c = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: d, trim: p } = r[c] || ie
    p && (a = n.map((g) => (he(g) ? g.trim() : g))), d && (a = n.map(Po))
  }
  let s,
    l = r[(s = Fr(t))] || r[(s = Fr(Ge(t)))]
  !l && i && (l = r[(s = Fr(tn(t)))]), l && ze(l, e, 6, a)
  const f = r[s + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[s]) return
    ;(e.emitted[s] = !0), ze(f, e, 6, a)
  }
}
function Qo(e, t, n = !1) {
  const r = t.emitsCache,
    a = r.get(e)
  if (a !== void 0) return a
  const i = e.emits
  let o = {},
    s = !1
  if (!U(e)) {
    const l = (f) => {
      const c = Qo(f, t, !0)
      c && ((s = !0), we(o, c))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !i && !s
    ? (fe(e) && r.set(e, null), null)
    : (H(i) ? i.forEach((l) => (o[l] = null)) : we(o, i), fe(e) && r.set(e, o), o)
}
function Pr(e, t) {
  return !e || !xr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      V(e, t[0].toLowerCase() + t.slice(1)) || V(e, tn(t)) || V(e, t))
}
let _e = null,
  Jo = null
function dr(e) {
  const t = _e
  return (_e = e), (Jo = (e && e.type.__scopeId) || null), t
}
function Xe(e, t = _e, n) {
  if (!t || e._n) return e
  const r = (...a) => {
    r._d && Ai(-1)
    const i = dr(t)
    let o
    try {
      o = e(...a)
    } finally {
      dr(i), r._d && Ai(1)
    }
    return o
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Dr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    props: i,
    propsOptions: [o],
    slots: s,
    attrs: l,
    emit: f,
    render: c,
    renderCache: d,
    data: p,
    setupState: g,
    ctx: A,
    inheritAttrs: S,
  } = e
  let L, b
  const x = dr(e)
  try {
    if (n.shapeFlag & 4) {
      const z = a || r
      ;(L = Ye(c.call(z, z, d, i, g, p, A))), (b = l)
    } else {
      const z = t
      ;(L = Ye(z.length > 1 ? z(i, { attrs: l, slots: s, emit: f }) : z(i, null))),
        (b = t.props ? l : lc(l))
    }
  } catch (z) {
    ;(bn.length = 0), Or(z, e, 1), (L = Q(Xt))
  }
  let O = L
  if (b && S !== !1) {
    const z = Object.keys(b),
      { shapeFlag: K } = O
    z.length && K & 7 && (o && z.some(Aa) && (b = cc(b, o)), (O = Gt(O, b)))
  }
  return (
    n.dirs && ((O = Gt(O)), (O.dirs = O.dirs ? O.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (O.transition = n.transition),
    (L = O),
    dr(x),
    L
  )
}
const lc = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || xr(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  cc = (e, t) => {
    const n = {}
    for (const r in e) (!Aa(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function fc(e, t, n) {
  const { props: r, children: a, component: i } = e,
    { props: o, children: s, patchFlag: l } = t,
    f = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return r ? vi(r, o, f) : !!o
    if (l & 8) {
      const c = t.dynamicProps
      for (let d = 0; d < c.length; d++) {
        const p = c[d]
        if (o[p] !== r[p] && !Pr(f, p)) return !0
      }
    }
  } else
    return (a || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? (o ? vi(r, o, f) : !0) : !!o
  return !1
}
function vi(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let a = 0; a < r.length; a++) {
    const i = r[a]
    if (t[i] !== e[i] && !Pr(n, i)) return !0
  }
  return !1
}
function uc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const dc = (e) => e.__isSuspense
function mc(e, t) {
  t && t.pendingBranch ? (H(e) ? t.effects.push(...e) : t.effects.push(e)) : ic(e)
}
function ir(e, t) {
  if (pe) {
    let n = pe.provides
    const r = pe.parent && pe.parent.provides
    r === n && (n = pe.provides = Object.create(r)), (n[e] = t)
  }
}
function et(e, t, n = !1) {
  const r = pe || _e
  if (r) {
    const a =
      r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides
    if (a && e in a) return a[e]
    if (arguments.length > 1) return n && U(t) ? t.call(r.proxy) : t
  }
}
const Vn = {}
function hn(e, t, n) {
  return Zo(e, t, n)
}
function Zo(e, t, { immediate: n, deep: r, flush: a, onTrack: i, onTrigger: o } = ie) {
  const s = pe
  let l,
    f = !1,
    c = !1
  if (
    (ve(e)
      ? ((l = () => e.value), (f = ur(e)))
      : Kt(e)
      ? ((l = () => e), (r = !0))
      : H(e)
      ? ((c = !0),
        (f = e.some((O) => Kt(O) || ur(O))),
        (l = () =>
          e.map((O) => {
            if (ve(O)) return O.value
            if (Kt(O)) return Bt(O)
            if (U(O)) return pt(O, s, 2)
          })))
      : U(e)
      ? t
        ? (l = () => pt(e, s, 2))
        : (l = () => {
            if (!(s && s.isUnmounted)) return d && d(), ze(e, s, 3, [p])
          })
      : (l = De),
    t && r)
  ) {
    const O = l
    l = () => Bt(O())
  }
  let d,
    p = (O) => {
      d = b.onStop = () => {
        pt(O, s, 4)
      }
    },
    g
  if (In)
    if (((p = De), t ? n && ze(t, s, 3, [l(), c ? [] : void 0, p]) : l(), a === 'sync')) {
      const O = lf()
      g = O.__watcherHandles || (O.__watcherHandles = [])
    } else return De
  let A = c ? new Array(e.length).fill(Vn) : Vn
  const S = () => {
    if (b.active)
      if (t) {
        const O = b.run()
        ;(r || f || (c ? O.some((z, K) => An(z, A[K])) : An(O, A))) &&
          (d && d(), ze(t, s, 3, [O, A === Vn ? void 0 : c && A[0] === Vn ? [] : A, p]), (A = O))
      } else b.run()
  }
  S.allowRecurse = !!t
  let L
  a === 'sync'
    ? (L = S)
    : a === 'post'
    ? (L = () => Ae(S, s && s.suspense))
    : ((S.pre = !0), s && (S.id = s.uid), (L = () => Fa(S)))
  const b = new Ia(l, L)
  t ? (n ? S() : (A = b.run())) : a === 'post' ? Ae(b.run.bind(b), s && s.suspense) : b.run()
  const x = () => {
    b.stop(), s && s.scope && Oa(s.scope.effects, b)
  }
  return g && g.push(x), x
}
function pc(e, t, n) {
  const r = this.proxy,
    a = he(e) ? (e.includes('.') ? es(r, e) : () => r[e]) : e.bind(r, r)
  let i
  U(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = pe
  Qt(this)
  const s = Zo(a, i.bind(r), n)
  return o ? Qt(o) : Rt(), s
}
function es(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let a = 0; a < n.length && r; a++) r = r[n[a]]
    return r
  }
}
function Bt(e, t) {
  if (!fe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), ve(e))) Bt(e.value, t)
  else if (H(e)) for (let n = 0; n < e.length; n++) Bt(e[n], t)
  else if (hl(e) || pn(e))
    e.forEach((n) => {
      Bt(n, t)
    })
  else if (bl(e)) for (const n in e) Bt(e[n], t)
  return e
}
function jn(e) {
  return U(e) ? { setup: e, name: e.name } : e
}
const gn = (e) => !!e.type.__asyncLoader,
  ts = (e) => e.type.__isKeepAlive
function hc(e, t) {
  ns(e, 'a', t)
}
function gc(e, t) {
  ns(e, 'da', t)
}
function ns(e, t, n = pe) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let a = n
      for (; a; ) {
        if (a.isDeactivated) return
        a = a.parent
      }
      return e()
    })
  if ((Cr(t, r, n), n)) {
    let a = n.parent
    for (; a && a.parent; ) ts(a.parent.vnode) && vc(r, t, n, a), (a = a.parent)
  }
}
function vc(e, t, n, r) {
  const a = Cr(t, e, r, !0)
  rs(() => {
    Oa(r[t], a)
  }, n)
}
function Cr(e, t, n = pe, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          nn(), Qt(n)
          const s = ze(t, n, e, o)
          return Rt(), rn(), s
        })
    return r ? a.unshift(i) : a.push(i), i
  }
}
const it =
    (e) =>
    (t, n = pe) =>
      (!In || e === 'sp') && Cr(e, (...r) => t(...r), n),
  bc = it('bm'),
  yc = it('m'),
  _c = it('bu'),
  xc = it('u'),
  wc = it('bum'),
  rs = it('um'),
  kc = it('sp'),
  Ec = it('rtg'),
  Ac = it('rtc')
function Oc(e, t = pe) {
  Cr('ec', e, t)
}
function wt(e, t, n, r) {
  const a = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < a.length; o++) {
    const s = a[o]
    i && (s.oldValue = i[o].value)
    let l = s.dir[r]
    l && (nn(), ze(l, n, 8, [e.el, s, e, t]), rn())
  }
}
const as = 'components'
function xe(e, t) {
  return Cc(as, e, !0, t) || e
}
const Pc = Symbol()
function Cc(e, t, n = !0, r = !1) {
  const a = _e || pe
  if (a) {
    const i = a.type
    if (e === as) {
      const s = af(i, !1)
      if (s && (s === t || s === Ge(t) || s === Er(Ge(t)))) return i
    }
    const o = bi(a[e] || i[e], t) || bi(a.appContext[e], t)
    return !o && r ? i : o
  }
}
function bi(e, t) {
  return e && (e[t] || e[Ge(t)] || e[Er(Ge(t))])
}
function dn(e, t, n = {}, r, a) {
  if (_e.isCE || (_e.parent && gn(_e.parent) && _e.parent.isCE))
    return t !== 'default' && (n.name = t), Q('slot', n, r && r())
  let i = e[t]
  i && i._c && (i._d = !1), Qe()
  const o = i && is(i(n)),
    s = za(
      Me,
      { key: n.key || (o && o.key) || `_${t}` },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2
    )
  return !a && s.scopeId && (s.slotScopeIds = [s.scopeId + '-s']), i && i._c && (i._d = !0), s
}
function is(e) {
  return e.some((t) => (pr(t) ? !(t.type === Xt || (t.type === Me && !is(t.children))) : !0))
    ? e
    : null
}
const ta = (e) => (e ? (gs(e) ? Ua(e) || e.proxy : ta(e.parent)) : null),
  vn = we(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ta(e.parent),
    $root: (e) => ta(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ja(e),
    $forceUpdate: (e) => e.f || (e.f = () => Fa(e.update)),
    $nextTick: (e) => e.n || (e.n = qo.bind(e.proxy)),
    $watch: (e) => pc.bind(e),
  }),
  zr = (e, t) => e !== ie && !e.__isScriptSetup && V(e, t),
  Sc = {
    get({ _: e }, t) {
      const { ctx: n, setupState: r, data: a, props: i, accessCache: o, type: s, appContext: l } = e
      let f
      if (t[0] !== '$') {
        const g = o[t]
        if (g !== void 0)
          switch (g) {
            case 1:
              return r[t]
            case 2:
              return a[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (zr(r, t)) return (o[t] = 1), r[t]
          if (a !== ie && V(a, t)) return (o[t] = 2), a[t]
          if ((f = e.propsOptions[0]) && V(f, t)) return (o[t] = 3), i[t]
          if (n !== ie && V(n, t)) return (o[t] = 4), n[t]
          na && (o[t] = 0)
        }
      }
      const c = vn[t]
      let d, p
      if (c) return t === '$attrs' && Ce(e, 'get', t), c(e)
      if ((d = s.__cssModules) && (d = d[t])) return d
      if (n !== ie && V(n, t)) return (o[t] = 4), n[t]
      if (((p = l.config.globalProperties), V(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: a, ctx: i } = e
      return zr(a, t)
        ? ((a[t] = n), !0)
        : r !== ie && V(r, t)
        ? ((r[t] = n), !0)
        : V(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, propsOptions: i } },
      o
    ) {
      let s
      return (
        !!n[o] ||
        (e !== ie && V(e, o)) ||
        zr(t, o) ||
        ((s = i[0]) && V(s, o)) ||
        V(r, o) ||
        V(vn, o) ||
        V(a.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : V(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
let na = !0
function Ic(e) {
  const t = ja(e),
    n = e.proxy,
    r = e.ctx
  ;(na = !1), t.beforeCreate && yi(t.beforeCreate, e, 'bc')
  const {
    data: a,
    computed: i,
    methods: o,
    watch: s,
    provide: l,
    inject: f,
    created: c,
    beforeMount: d,
    mounted: p,
    beforeUpdate: g,
    updated: A,
    activated: S,
    deactivated: L,
    beforeDestroy: b,
    beforeUnmount: x,
    destroyed: O,
    unmounted: z,
    render: K,
    renderTracked: ae,
    renderTriggered: le,
    errorCaptured: Oe,
    serverPrefetch: be,
    expose: Ie,
    inheritAttrs: st,
    components: Ue,
    directives: Lt,
    filters: _t,
  } = t
  if ((f && Rc(f, r, null, e.appContext.config.unwrapInjectedRef), o))
    for (const ee in o) {
      const J = o[ee]
      U(J) && (r[ee] = J.bind(n))
    }
  if (a) {
    const ee = a.call(n, n)
    fe(ee) && (e.data = Fn(ee))
  }
  if (((na = !0), i))
    for (const ee in i) {
      const J = i[ee],
        Re = U(J) ? J.bind(n, n) : U(J.get) ? J.get.bind(n, n) : De,
        xt = !U(J) && U(J.set) ? J.set.bind(n) : De,
        Te = se({ get: Re, set: xt })
      Object.defineProperty(r, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (ke) => (Te.value = ke),
      })
    }
  if (s) for (const ee in s) os(s[ee], r, n, ee)
  if (l) {
    const ee = U(l) ? l.call(n) : l
    Reflect.ownKeys(ee).forEach((J) => {
      ir(J, ee[J])
    })
  }
  c && yi(c, e, 'c')
  function ue(ee, J) {
    H(J) ? J.forEach((Re) => ee(Re.bind(n))) : J && ee(J.bind(n))
  }
  if (
    (ue(bc, d),
    ue(yc, p),
    ue(_c, g),
    ue(xc, A),
    ue(hc, S),
    ue(gc, L),
    ue(Oc, Oe),
    ue(Ac, ae),
    ue(Ec, le),
    ue(wc, x),
    ue(rs, z),
    ue(kc, be),
    H(Ie))
  )
    if (Ie.length) {
      const ee = e.exposed || (e.exposed = {})
      Ie.forEach((J) => {
        Object.defineProperty(ee, J, { get: () => n[J], set: (Re) => (n[J] = Re) })
      })
    } else e.exposed || (e.exposed = {})
  K && e.render === De && (e.render = K),
    st != null && (e.inheritAttrs = st),
    Ue && (e.components = Ue),
    Lt && (e.directives = Lt)
}
function Rc(e, t, n = De, r = !1) {
  H(e) && (e = ra(e))
  for (const a in e) {
    const i = e[a]
    let o
    fe(i)
      ? 'default' in i
        ? (o = et(i.from || a, i.default, !0))
        : (o = et(i.from || a))
      : (o = et(i)),
      ve(o) && r
        ? Object.defineProperty(t, a, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (s) => (o.value = s),
          })
        : (t[a] = o)
  }
}
function yi(e, t, n) {
  ze(H(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function os(e, t, n, r) {
  const a = r.includes('.') ? es(n, r) : () => n[r]
  if (he(e)) {
    const i = t[e]
    U(i) && hn(a, i)
  } else if (U(e)) hn(a, e.bind(n))
  else if (fe(e))
    if (H(e)) e.forEach((i) => os(i, t, n, r))
    else {
      const i = U(e.handler) ? e.handler.bind(n) : t[e.handler]
      U(i) && hn(a, i, e)
    }
}
function ja(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: a,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    s = i.get(t)
  let l
  return (
    s
      ? (l = s)
      : !a.length && !n && !r
      ? (l = t)
      : ((l = {}), a.length && a.forEach((f) => mr(l, f, o, !0)), mr(l, t, o)),
    fe(t) && i.set(t, l),
    l
  )
}
function mr(e, t, n, r = !1) {
  const { mixins: a, extends: i } = t
  i && mr(e, i, n, !0), a && a.forEach((o) => mr(e, o, n, !0))
  for (const o in t)
    if (!(r && o === 'expose')) {
      const s = Tc[o] || (n && n[o])
      e[o] = s ? s(e[o], t[o]) : t[o]
    }
  return e
}
const Tc = {
  data: _i,
  props: Et,
  emits: Et,
  methods: Et,
  computed: Et,
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  components: Et,
  directives: Et,
  watch: Mc,
  provide: _i,
  inject: Nc,
}
function _i(e, t) {
  return t
    ? e
      ? function () {
          return we(U(e) ? e.call(this, this) : e, U(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Nc(e, t) {
  return Et(ra(e), ra(t))
}
function ra(e) {
  if (H(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Et(e, t) {
  return e ? we(we(Object.create(null), e), t) : t
}
function Mc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = we(Object.create(null), e)
  for (const r in t) n[r] = ye(e[r], t[r])
  return n
}
function $c(e, t, n, r = !1) {
  const a = {},
    i = {}
  fr(i, Ir, 1), (e.propsDefaults = Object.create(null)), ss(e, t, a, i)
  for (const o in e.propsOptions[0]) o in a || (a[o] = void 0)
  n ? (e.props = r ? a : Xl(a)) : e.type.props ? (e.props = a) : (e.props = i), (e.attrs = i)
}
function Lc(e, t, n, r) {
  const {
      props: a,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    s = X(a),
    [l] = e.propsOptions
  let f = !1
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps
      for (let d = 0; d < c.length; d++) {
        let p = c[d]
        if (Pr(e.emitsOptions, p)) continue
        const g = t[p]
        if (l)
          if (V(i, p)) g !== i[p] && ((i[p] = g), (f = !0))
          else {
            const A = Ge(p)
            a[A] = aa(l, s, A, g, e, !1)
          }
        else g !== i[p] && ((i[p] = g), (f = !0))
      }
    }
  } else {
    ss(e, t, a, i) && (f = !0)
    let c
    for (const d in s)
      (!t || (!V(t, d) && ((c = tn(d)) === d || !V(t, c)))) &&
        (l
          ? n && (n[d] !== void 0 || n[c] !== void 0) && (a[d] = aa(l, s, d, void 0, e, !0))
          : delete a[d])
    if (i !== s) for (const d in i) (!t || !V(t, d)) && (delete i[d], (f = !0))
  }
  f && tt(e, 'set', '$attrs')
}
function ss(e, t, n, r) {
  const [a, i] = e.propsOptions
  let o = !1,
    s
  if (t)
    for (let l in t) {
      if (ar(l)) continue
      const f = t[l]
      let c
      a && V(a, (c = Ge(l)))
        ? !i || !i.includes(c)
          ? (n[c] = f)
          : ((s || (s = {}))[c] = f)
        : Pr(e.emitsOptions, l) || ((!(l in r) || f !== r[l]) && ((r[l] = f), (o = !0)))
    }
  if (i) {
    const l = X(n),
      f = s || ie
    for (let c = 0; c < i.length; c++) {
      const d = i[c]
      n[d] = aa(a, l, d, f[d], e, !V(f, d))
    }
  }
  return o
}
function aa(e, t, n, r, a, i) {
  const o = e[n]
  if (o != null) {
    const s = V(o, 'default')
    if (s && r === void 0) {
      const l = o.default
      if (o.type !== Function && U(l)) {
        const { propsDefaults: f } = a
        n in f ? (r = f[n]) : (Qt(a), (r = f[n] = l.call(null, t)), Rt())
      } else r = l
    }
    o[0] && (i && !s ? (r = !1) : o[1] && (r === '' || r === tn(n)) && (r = !0))
  }
  return r
}
function ls(e, t, n = !1) {
  const r = t.propsCache,
    a = r.get(e)
  if (a) return a
  const i = e.props,
    o = {},
    s = []
  let l = !1
  if (!U(e)) {
    const c = (d) => {
      l = !0
      const [p, g] = ls(d, t, !0)
      we(o, p), g && s.push(...g)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!i && !l) return fe(e) && r.set(e, Wt), Wt
  if (H(i))
    for (let c = 0; c < i.length; c++) {
      const d = Ge(i[c])
      xi(d) && (o[d] = ie)
    }
  else if (i)
    for (const c in i) {
      const d = Ge(c)
      if (xi(d)) {
        const p = i[c],
          g = (o[d] = H(p) || U(p) ? { type: p } : Object.assign({}, p))
        if (g) {
          const A = Ei(Boolean, g.type),
            S = Ei(String, g.type)
          ;(g[0] = A > -1), (g[1] = S < 0 || A < S), (A > -1 || V(g, 'default')) && s.push(d)
        }
      }
    }
  const f = [o, s]
  return fe(e) && r.set(e, f), f
}
function xi(e) {
  return e[0] !== '$'
}
function wi(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : e === null ? 'null' : ''
}
function ki(e, t) {
  return wi(e) === wi(t)
}
function Ei(e, t) {
  return H(t) ? t.findIndex((n) => ki(n, e)) : U(t) && ki(t, e) ? 0 : -1
}
const cs = (e) => e[0] === '_' || e === '$stable',
  Da = (e) => (H(e) ? e.map(Ye) : [Ye(e)]),
  Fc = (e, t, n) => {
    if (t._n) return t
    const r = Xe((...a) => Da(t(...a)), n)
    return (r._c = !1), r
  },
  fs = (e, t, n) => {
    const r = e._ctx
    for (const a in e) {
      if (cs(a)) continue
      const i = e[a]
      if (U(i)) t[a] = Fc(a, i, r)
      else if (i != null) {
        const o = Da(i)
        t[a] = () => o
      }
    }
  },
  us = (e, t) => {
    const n = Da(t)
    e.slots.default = () => n
  },
  jc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = X(t)), fr(t, '_', n)) : fs(t, (e.slots = {}))
    } else (e.slots = {}), t && us(e, t)
    fr(e.slots, Ir, 1)
  },
  Dc = (e, t, n) => {
    const { vnode: r, slots: a } = e
    let i = !0,
      o = ie
    if (r.shapeFlag & 32) {
      const s = t._
      s
        ? n && s === 1
          ? (i = !1)
          : (we(a, t), !n && s === 1 && delete a._)
        : ((i = !t.$stable), fs(t, a)),
        (o = t)
    } else t && (us(e, t), (o = { default: 1 }))
    if (i) for (const s in a) !cs(s) && !(s in o) && delete a[s]
  }
function ds() {
  return {
    app: null,
    config: {
      isNativeTag: dl,
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
  }
}
let zc = 0
function Bc(e, t) {
  return function (r, a = null) {
    U(r) || (r = Object.assign({}, r)), a != null && !fe(a) && (a = null)
    const i = ds(),
      o = new Set()
    let s = !1
    const l = (i.app = {
      _uid: zc++,
      _component: r,
      _props: a,
      _container: null,
      _context: i,
      _instance: null,
      version: cf,
      get config() {
        return i.config
      },
      set config(f) {},
      use(f, ...c) {
        return (
          o.has(f) ||
            (f && U(f.install) ? (o.add(f), f.install(l, ...c)) : U(f) && (o.add(f), f(l, ...c))),
          l
        )
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), l
      },
      component(f, c) {
        return c ? ((i.components[f] = c), l) : i.components[f]
      },
      directive(f, c) {
        return c ? ((i.directives[f] = c), l) : i.directives[f]
      },
      mount(f, c, d) {
        if (!s) {
          const p = Q(r, a)
          return (
            (p.appContext = i),
            c && t ? t(p, f) : e(p, f, d),
            (s = !0),
            (l._container = f),
            (f.__vue_app__ = l),
            Ua(p.component) || p.component.proxy
          )
        }
      },
      unmount() {
        s && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(f, c) {
        return (i.provides[f] = c), l
      },
    })
    return l
  }
}
function ia(e, t, n, r, a = !1) {
  if (H(e)) {
    e.forEach((p, g) => ia(p, t && (H(t) ? t[g] : t), n, r, a))
    return
  }
  if (gn(r) && !a) return
  const i = r.shapeFlag & 4 ? Ua(r.component) || r.component.proxy : r.el,
    o = a ? null : i,
    { i: s, r: l } = e,
    f = t && t.r,
    c = s.refs === ie ? (s.refs = {}) : s.refs,
    d = s.setupState
  if (
    (f != null &&
      f !== l &&
      (he(f) ? ((c[f] = null), V(d, f) && (d[f] = null)) : ve(f) && (f.value = null)),
    U(l))
  )
    pt(l, s, 12, [o, c])
  else {
    const p = he(l),
      g = ve(l)
    if (p || g) {
      const A = () => {
        if (e.f) {
          const S = p ? (V(d, l) ? d[l] : c[l]) : l.value
          a
            ? H(S) && Oa(S, i)
            : H(S)
            ? S.includes(i) || S.push(i)
            : p
            ? ((c[l] = [i]), V(d, l) && (d[l] = c[l]))
            : ((l.value = [i]), e.k && (c[e.k] = l.value))
        } else p ? ((c[l] = o), V(d, l) && (d[l] = o)) : g && ((l.value = o), e.k && (c[e.k] = o))
      }
      o ? ((A.id = -1), Ae(A, n)) : A()
    }
  }
}
const Ae = mc
function Uc(e) {
  return Hc(e)
}
function Hc(e, t) {
  const n = xl()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: a,
      patchProp: i,
      createElement: o,
      createText: s,
      createComment: l,
      setText: f,
      setElementText: c,
      parentNode: d,
      nextSibling: p,
      setScopeId: g = De,
      insertStaticContent: A,
    } = e,
    S = (u, m, h, v = null, _ = null, E = null, I = !1, k = null, P = !!m.dynamicChildren) => {
      if (u === m) return
      u && !cn(u, m) && ((v = C(u)), ke(u, _, E, !0), (u = null)),
        m.patchFlag === -2 && ((P = !1), (m.dynamicChildren = null))
      const { type: w, ref: j, shapeFlag: N } = m
      switch (w) {
        case Sr:
          L(u, m, h, v)
          break
        case Xt:
          b(u, m, h, v)
          break
        case or:
          u == null && x(m, h, v, I)
          break
        case Me:
          Ue(u, m, h, v, _, E, I, k, P)
          break
        default:
          N & 1
            ? K(u, m, h, v, _, E, I, k, P)
            : N & 6
            ? Lt(u, m, h, v, _, E, I, k, P)
            : (N & 64 || N & 128) && w.process(u, m, h, v, _, E, I, k, P, q)
      }
      j != null && _ && ia(j, u && u.ref, E, m || u, !m)
    },
    L = (u, m, h, v) => {
      if (u == null) r((m.el = s(m.children)), h, v)
      else {
        const _ = (m.el = u.el)
        m.children !== u.children && f(_, m.children)
      }
    },
    b = (u, m, h, v) => {
      u == null ? r((m.el = l(m.children || '')), h, v) : (m.el = u.el)
    },
    x = (u, m, h, v) => {
      ;[u.el, u.anchor] = A(u.children, m, h, v, u.el, u.anchor)
    },
    O = ({ el: u, anchor: m }, h, v) => {
      let _
      for (; u && u !== m; ) (_ = p(u)), r(u, h, v), (u = _)
      r(m, h, v)
    },
    z = ({ el: u, anchor: m }) => {
      let h
      for (; u && u !== m; ) (h = p(u)), a(u), (u = h)
      a(m)
    },
    K = (u, m, h, v, _, E, I, k, P) => {
      ;(I = I || m.type === 'svg'), u == null ? ae(m, h, v, _, E, I, k, P) : be(u, m, _, E, I, k, P)
    },
    ae = (u, m, h, v, _, E, I, k) => {
      let P, w
      const { type: j, props: N, shapeFlag: D, transition: B, dirs: Y } = u
      if (
        ((P = u.el = o(u.type, E, N && N.is, N)),
        D & 8
          ? c(P, u.children)
          : D & 16 && Oe(u.children, P, null, v, _, E && j !== 'foreignObject', I, k),
        Y && wt(u, null, v, 'created'),
        N)
      ) {
        for (const Z in N) Z !== 'value' && !ar(Z) && i(P, Z, null, N[Z], E, u.children, v, _, R)
        'value' in N && i(P, 'value', null, N.value), (w = N.onVnodeBeforeMount) && We(w, v, u)
      }
      le(P, u, u.scopeId, I, v), Y && wt(u, null, v, 'beforeMount')
      const te = (!_ || (_ && !_.pendingBranch)) && B && !B.persisted
      te && B.beforeEnter(P),
        r(P, m, h),
        ((w = N && N.onVnodeMounted) || te || Y) &&
          Ae(() => {
            w && We(w, v, u), te && B.enter(P), Y && wt(u, null, v, 'mounted')
          }, _)
    },
    le = (u, m, h, v, _) => {
      if ((h && g(u, h), v)) for (let E = 0; E < v.length; E++) g(u, v[E])
      if (_) {
        let E = _.subTree
        if (m === E) {
          const I = _.vnode
          le(u, I, I.scopeId, I.slotScopeIds, _.parent)
        }
      }
    },
    Oe = (u, m, h, v, _, E, I, k, P = 0) => {
      for (let w = P; w < u.length; w++) {
        const j = (u[w] = k ? ut(u[w]) : Ye(u[w]))
        S(null, j, m, h, v, _, E, I, k)
      }
    },
    be = (u, m, h, v, _, E, I) => {
      const k = (m.el = u.el)
      let { patchFlag: P, dynamicChildren: w, dirs: j } = m
      P |= u.patchFlag & 16
      const N = u.props || ie,
        D = m.props || ie
      let B
      h && kt(h, !1),
        (B = D.onVnodeBeforeUpdate) && We(B, h, m, u),
        j && wt(m, u, h, 'beforeUpdate'),
        h && kt(h, !0)
      const Y = _ && m.type !== 'foreignObject'
      if (
        (w ? Ie(u.dynamicChildren, w, k, h, v, Y, E) : I || J(u, m, k, null, h, v, Y, E, !1), P > 0)
      ) {
        if (P & 16) st(k, m, N, D, h, v, _)
        else if (
          (P & 2 && N.class !== D.class && i(k, 'class', null, D.class, _),
          P & 4 && i(k, 'style', N.style, D.style, _),
          P & 8)
        ) {
          const te = m.dynamicProps
          for (let Z = 0; Z < te.length; Z++) {
            const de = te[Z],
              Ne = N[de],
              jt = D[de]
            ;(jt !== Ne || de === 'value') && i(k, de, Ne, jt, _, u.children, h, v, R)
          }
        }
        P & 1 && u.children !== m.children && c(k, m.children)
      } else !I && w == null && st(k, m, N, D, h, v, _)
      ;((B = D.onVnodeUpdated) || j) &&
        Ae(() => {
          B && We(B, h, m, u), j && wt(m, u, h, 'updated')
        }, v)
    },
    Ie = (u, m, h, v, _, E, I) => {
      for (let k = 0; k < m.length; k++) {
        const P = u[k],
          w = m[k],
          j = P.el && (P.type === Me || !cn(P, w) || P.shapeFlag & 70) ? d(P.el) : h
        S(P, w, j, null, v, _, E, I, !0)
      }
    },
    st = (u, m, h, v, _, E, I) => {
      if (h !== v) {
        if (h !== ie)
          for (const k in h) !ar(k) && !(k in v) && i(u, k, h[k], null, I, m.children, _, E, R)
        for (const k in v) {
          if (ar(k)) continue
          const P = v[k],
            w = h[k]
          P !== w && k !== 'value' && i(u, k, w, P, I, m.children, _, E, R)
        }
        'value' in v && i(u, 'value', h.value, v.value)
      }
    },
    Ue = (u, m, h, v, _, E, I, k, P) => {
      const w = (m.el = u ? u.el : s('')),
        j = (m.anchor = u ? u.anchor : s(''))
      let { patchFlag: N, dynamicChildren: D, slotScopeIds: B } = m
      B && (k = k ? k.concat(B) : B),
        u == null
          ? (r(w, h, v), r(j, h, v), Oe(m.children, h, j, _, E, I, k, P))
          : N > 0 && N & 64 && D && u.dynamicChildren
          ? (Ie(u.dynamicChildren, D, h, _, E, I, k),
            (m.key != null || (_ && m === _.subTree)) && ms(u, m, !0))
          : J(u, m, h, j, _, E, I, k, P)
    },
    Lt = (u, m, h, v, _, E, I, k, P) => {
      ;(m.slotScopeIds = k),
        u == null
          ? m.shapeFlag & 512
            ? _.ctx.activate(m, h, v, I, P)
            : _t(m, h, v, _, E, I, P)
          : sn(u, m, P)
    },
    _t = (u, m, h, v, _, E, I) => {
      const k = (u.component = Zc(u, v, _))
      if ((ts(u) && (k.ctx.renderer = q), ef(k), k.asyncDep)) {
        if ((_ && _.registerDep(k, ue), !u.el)) {
          const P = (k.subTree = Q(Xt))
          b(null, P, m, h)
        }
        return
      }
      ue(k, u, m, h, _, E, I)
    },
    sn = (u, m, h) => {
      const v = (m.component = u.component)
      if (fc(u, m, h))
        if (v.asyncDep && !v.asyncResolved) {
          ee(v, m, h)
          return
        } else (v.next = m), ac(v.update), v.update()
      else (m.el = u.el), (v.vnode = m)
    },
    ue = (u, m, h, v, _, E, I) => {
      const k = () => {
          if (u.isMounted) {
            let { next: j, bu: N, u: D, parent: B, vnode: Y } = u,
              te = j,
              Z
            kt(u, !1),
              j ? ((j.el = Y.el), ee(u, j, I)) : (j = Y),
              N && jr(N),
              (Z = j.props && j.props.onVnodeBeforeUpdate) && We(Z, B, j, Y),
              kt(u, !0)
            const de = Dr(u),
              Ne = u.subTree
            ;(u.subTree = de),
              S(Ne, de, d(Ne.el), C(Ne), u, _, E),
              (j.el = de.el),
              te === null && uc(u, de.el),
              D && Ae(D, _),
              (Z = j.props && j.props.onVnodeUpdated) && Ae(() => We(Z, B, j, Y), _)
          } else {
            let j
            const { el: N, props: D } = m,
              { bm: B, m: Y, parent: te } = u,
              Z = gn(m)
            if (
              (kt(u, !1),
              B && jr(B),
              !Z && (j = D && D.onVnodeBeforeMount) && We(j, te, m),
              kt(u, !0),
              N && W)
            ) {
              const de = () => {
                ;(u.subTree = Dr(u)), W(N, u.subTree, u, _, null)
              }
              Z ? m.type.__asyncLoader().then(() => !u.isUnmounted && de()) : de()
            } else {
              const de = (u.subTree = Dr(u))
              S(null, de, h, v, u, _, E), (m.el = de.el)
            }
            if ((Y && Ae(Y, _), !Z && (j = D && D.onVnodeMounted))) {
              const de = m
              Ae(() => We(j, te, de), _)
            }
            ;(m.shapeFlag & 256 || (te && gn(te.vnode) && te.vnode.shapeFlag & 256)) &&
              u.a &&
              Ae(u.a, _),
              (u.isMounted = !0),
              (m = h = v = null)
          }
        },
        P = (u.effect = new Ia(k, () => Fa(w), u.scope)),
        w = (u.update = () => P.run())
      ;(w.id = u.uid), kt(u, !0), w()
    },
    ee = (u, m, h) => {
      m.component = u
      const v = u.vnode.props
      ;(u.vnode = m), (u.next = null), Lc(u, m.props, v, h), Dc(u, m.children, h), nn(), gi(), rn()
    },
    J = (u, m, h, v, _, E, I, k, P = !1) => {
      const w = u && u.children,
        j = u ? u.shapeFlag : 0,
        N = m.children,
        { patchFlag: D, shapeFlag: B } = m
      if (D > 0) {
        if (D & 128) {
          xt(w, N, h, v, _, E, I, k, P)
          return
        } else if (D & 256) {
          Re(w, N, h, v, _, E, I, k, P)
          return
        }
      }
      B & 8
        ? (j & 16 && R(w, _, E), N !== w && c(h, N))
        : j & 16
        ? B & 16
          ? xt(w, N, h, v, _, E, I, k, P)
          : R(w, _, E, !0)
        : (j & 8 && c(h, ''), B & 16 && Oe(N, h, v, _, E, I, k, P))
    },
    Re = (u, m, h, v, _, E, I, k, P) => {
      ;(u = u || Wt), (m = m || Wt)
      const w = u.length,
        j = m.length,
        N = Math.min(w, j)
      let D
      for (D = 0; D < N; D++) {
        const B = (m[D] = P ? ut(m[D]) : Ye(m[D]))
        S(u[D], B, h, null, _, E, I, k, P)
      }
      w > j ? R(u, _, E, !0, !1, N) : Oe(m, h, v, _, E, I, k, P, N)
    },
    xt = (u, m, h, v, _, E, I, k, P) => {
      let w = 0
      const j = m.length
      let N = u.length - 1,
        D = j - 1
      for (; w <= N && w <= D; ) {
        const B = u[w],
          Y = (m[w] = P ? ut(m[w]) : Ye(m[w]))
        if (cn(B, Y)) S(B, Y, h, null, _, E, I, k, P)
        else break
        w++
      }
      for (; w <= N && w <= D; ) {
        const B = u[N],
          Y = (m[D] = P ? ut(m[D]) : Ye(m[D]))
        if (cn(B, Y)) S(B, Y, h, null, _, E, I, k, P)
        else break
        N--, D--
      }
      if (w > N) {
        if (w <= D) {
          const B = D + 1,
            Y = B < j ? m[B].el : v
          for (; w <= D; ) S(null, (m[w] = P ? ut(m[w]) : Ye(m[w])), h, Y, _, E, I, k, P), w++
        }
      } else if (w > D) for (; w <= N; ) ke(u[w], _, E, !0), w++
      else {
        const B = w,
          Y = w,
          te = new Map()
        for (w = Y; w <= D; w++) {
          const Pe = (m[w] = P ? ut(m[w]) : Ye(m[w]))
          Pe.key != null && te.set(Pe.key, w)
        }
        let Z,
          de = 0
        const Ne = D - Y + 1
        let jt = !1,
          ii = 0
        const ln = new Array(Ne)
        for (w = 0; w < Ne; w++) ln[w] = 0
        for (w = B; w <= N; w++) {
          const Pe = u[w]
          if (de >= Ne) {
            ke(Pe, _, E, !0)
            continue
          }
          let He
          if (Pe.key != null) He = te.get(Pe.key)
          else
            for (Z = Y; Z <= D; Z++)
              if (ln[Z - Y] === 0 && cn(Pe, m[Z])) {
                He = Z
                break
              }
          He === void 0
            ? ke(Pe, _, E, !0)
            : ((ln[He - Y] = w + 1),
              He >= ii ? (ii = He) : (jt = !0),
              S(Pe, m[He], h, null, _, E, I, k, P),
              de++)
        }
        const oi = jt ? Wc(ln) : Wt
        for (Z = oi.length - 1, w = Ne - 1; w >= 0; w--) {
          const Pe = Y + w,
            He = m[Pe],
            si = Pe + 1 < j ? m[Pe + 1].el : v
          ln[w] === 0
            ? S(null, He, h, si, _, E, I, k, P)
            : jt && (Z < 0 || w !== oi[Z] ? Te(He, h, si, 2) : Z--)
        }
      }
    },
    Te = (u, m, h, v, _ = null) => {
      const { el: E, type: I, transition: k, children: P, shapeFlag: w } = u
      if (w & 6) {
        Te(u.component.subTree, m, h, v)
        return
      }
      if (w & 128) {
        u.suspense.move(m, h, v)
        return
      }
      if (w & 64) {
        I.move(u, m, h, q)
        return
      }
      if (I === Me) {
        r(E, m, h)
        for (let N = 0; N < P.length; N++) Te(P[N], m, h, v)
        r(u.anchor, m, h)
        return
      }
      if (I === or) {
        O(u, m, h)
        return
      }
      if (v !== 2 && w & 1 && k)
        if (v === 0) k.beforeEnter(E), r(E, m, h), Ae(() => k.enter(E), _)
        else {
          const { leave: N, delayLeave: D, afterLeave: B } = k,
            Y = () => r(E, m, h),
            te = () => {
              N(E, () => {
                Y(), B && B()
              })
            }
          D ? D(E, Y, te) : te()
        }
      else r(E, m, h)
    },
    ke = (u, m, h, v = !1, _ = !1) => {
      const {
        type: E,
        props: I,
        ref: k,
        children: P,
        dynamicChildren: w,
        shapeFlag: j,
        patchFlag: N,
        dirs: D,
      } = u
      if ((k != null && ia(k, null, h, u, !0), j & 256)) {
        m.ctx.deactivate(u)
        return
      }
      const B = j & 1 && D,
        Y = !gn(u)
      let te
      if ((Y && (te = I && I.onVnodeBeforeUnmount) && We(te, m, u), j & 6)) y(u.component, h, v)
      else {
        if (j & 128) {
          u.suspense.unmount(h, v)
          return
        }
        B && wt(u, null, m, 'beforeUnmount'),
          j & 64
            ? u.type.remove(u, m, h, _, q, v)
            : w && (E !== Me || (N > 0 && N & 64))
            ? R(w, m, h, !1, !0)
            : ((E === Me && N & 384) || (!_ && j & 16)) && R(P, m, h),
          v && Ft(u)
      }
      ;((Y && (te = I && I.onVnodeUnmounted)) || B) &&
        Ae(() => {
          te && We(te, m, u), B && wt(u, null, m, 'unmounted')
        }, h)
    },
    Ft = (u) => {
      const { type: m, el: h, anchor: v, transition: _ } = u
      if (m === Me) {
        Un(h, v)
        return
      }
      if (m === or) {
        z(u)
        return
      }
      const E = () => {
        a(h), _ && !_.persisted && _.afterLeave && _.afterLeave()
      }
      if (u.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: I, delayLeave: k } = _,
          P = () => I(h, E)
        k ? k(u.el, E, P) : P()
      } else E()
    },
    Un = (u, m) => {
      let h
      for (; u !== m; ) (h = p(u)), a(u), (u = h)
      a(m)
    },
    y = (u, m, h) => {
      const { bum: v, scope: _, update: E, subTree: I, um: k } = u
      v && jr(v),
        _.stop(),
        E && ((E.active = !1), ke(I, u, m, h)),
        k && Ae(k, m),
        Ae(() => {
          u.isUnmounted = !0
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve())
    },
    R = (u, m, h, v = !1, _ = !1, E = 0) => {
      for (let I = E; I < u.length; I++) ke(u[I], m, h, v, _)
    },
    C = (u) =>
      u.shapeFlag & 6
        ? C(u.component.subTree)
        : u.shapeFlag & 128
        ? u.suspense.next()
        : p(u.anchor || u.el),
    F = (u, m, h) => {
      u == null
        ? m._vnode && ke(m._vnode, null, null, !0)
        : S(m._vnode || null, u, m, null, null, null, h),
        gi(),
        Xo(),
        (m._vnode = u)
    },
    q = { p: S, um: ke, m: Te, r: Ft, mt: _t, mc: Oe, pc: J, pbc: Ie, n: C, o: e }
  let oe, W
  return t && ([oe, W] = t(q)), { render: F, hydrate: oe, createApp: Bc(F, oe) }
}
function kt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function ms(e, t, n = !1) {
  const r = e.children,
    a = t.children
  if (H(r) && H(a))
    for (let i = 0; i < r.length; i++) {
      const o = r[i]
      let s = a[i]
      s.shapeFlag & 1 &&
        !s.dynamicChildren &&
        ((s.patchFlag <= 0 || s.patchFlag === 32) && ((s = a[i] = ut(a[i])), (s.el = o.el)),
        n || ms(o, s)),
        s.type === Sr && (s.el = o.el)
    }
}
function Wc(e) {
  const t = e.slice(),
    n = [0]
  let r, a, i, o, s
  const l = e.length
  for (r = 0; r < l; r++) {
    const f = e[r]
    if (f !== 0) {
      if (((a = n[n.length - 1]), e[a] < f)) {
        ;(t[r] = a), n.push(r)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; ) (s = (i + o) >> 1), e[n[s]] < f ? (i = s + 1) : (o = s)
      f < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
const Kc = (e) => e.__isTeleport,
  Me = Symbol(void 0),
  Sr = Symbol(void 0),
  Xt = Symbol(void 0),
  or = Symbol(void 0),
  bn = []
let Fe = null
function Qe(e = !1) {
  bn.push((Fe = e ? null : []))
}
function Yc() {
  bn.pop(), (Fe = bn[bn.length - 1] || null)
}
let Sn = 1
function Ai(e) {
  Sn += e
}
function ps(e) {
  return (e.dynamicChildren = Sn > 0 ? Fe || Wt : null), Yc(), Sn > 0 && Fe && Fe.push(e), e
}
function Mt(e, t, n, r, a, i) {
  return ps(M(e, t, n, r, a, i, !0))
}
function za(e, t, n, r, a) {
  return ps(Q(e, t, n, r, a, !0))
}
function pr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function cn(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ir = '__vInternal',
  hs = ({ key: e }) => e ?? null,
  sr = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null ? (he(e) || ve(e) || U(e) ? { i: _e, r: e, k: t, f: !!n } : e) : null
function M(e, t = null, n = null, r = 0, a = null, i = e === Me ? 0 : 1, o = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hs(t),
    ref: t && sr(t),
    scopeId: Jo,
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: _e,
  }
  return (
    s ? (Ba(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= he(n) ? 8 : 16),
    Sn > 0 && !o && Fe && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Fe.push(l),
    l
  )
}
const Q = qc
function qc(e, t = null, n = null, r = 0, a = null, i = !1) {
  if (((!e || e === Pc) && (e = Xt), pr(e))) {
    const s = Gt(e, t, !0)
    return (
      n && Ba(s, n),
      Sn > 0 && !i && Fe && (s.shapeFlag & 6 ? (Fe[Fe.indexOf(e)] = s) : Fe.push(s)),
      (s.patchFlag |= -2),
      s
    )
  }
  if ((of(e) && (e = e.__vccOpts), t)) {
    t = Vc(t)
    let { class: s, style: l } = t
    s && !he(s) && (t.class = En(s)),
      fe(l) && (Do(l) && !H(l) && (l = we({}, l)), (t.style = Ea(l)))
  }
  const o = he(e) ? 1 : dc(e) ? 128 : Kc(e) ? 64 : fe(e) ? 4 : U(e) ? 2 : 0
  return M(e, t, n, r, a, o, i, !0)
}
function Vc(e) {
  return e ? (Do(e) || Ir in e ? we({}, e) : e) : null
}
function Gt(e, t, n = !1) {
  const { props: r, ref: a, patchFlag: i, children: o } = e,
    s = t ? Gc(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && hs(s),
    ref: t && t.ref ? (n && a ? (H(a) ? a.concat(sr(t)) : [a, sr(t)]) : sr(t)) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Me ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Gt(e.ssContent),
    ssFallback: e.ssFallback && Gt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
  }
}
function gt(e = ' ', t = 0) {
  return Q(Sr, null, e, t)
}
function Xc(e, t) {
  const n = Q(or, null, e)
  return (n.staticCount = t), n
}
function Ye(e) {
  return e == null || typeof e == 'boolean'
    ? Q(Xt)
    : H(e)
    ? Q(Me, null, e.slice())
    : typeof e == 'object'
    ? ut(e)
    : Q(Sr, null, String(e))
}
function ut(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Gt(e)
}
function Ba(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (H(t)) n = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const a = t.default
      a && (a._c && (a._d = !1), Ba(e, a()), a._c && (a._d = !0))
      return
    } else {
      n = 32
      const a = t._
      !a && !(Ir in t)
        ? (t._ctx = _e)
        : a === 3 && _e && (_e.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    U(t)
      ? ((t = { default: t, _ctx: _e }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [gt(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Gc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const a in r)
      if (a === 'class') t.class !== r.class && (t.class = En([t.class, r.class]))
      else if (a === 'style') t.style = Ea([t.style, r.style])
      else if (xr(a)) {
        const i = t[a],
          o = r[a]
        o && i !== o && !(H(i) && i.includes(o)) && (t[a] = i ? [].concat(i, o) : o)
      } else a !== '' && (t[a] = r[a])
  }
  return t
}
function We(e, t, n, r = null) {
  ze(e, t, 7, [n, r])
}
const Qc = ds()
let Jc = 0
function Zc(e, t, n) {
  const r = e.type,
    a = (t ? t.appContext : e.appContext) || Qc,
    i = {
      uid: Jc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: a,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new wl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(a.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ls(r, a),
      emitsOptions: Qo(r, a),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: r.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
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
    }
  return (
    (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = sc.bind(null, i)), e.ce && e.ce(i), i
  )
}
let pe = null
const Qt = (e) => {
    ;(pe = e), e.scope.on()
  },
  Rt = () => {
    pe && pe.scope.off(), (pe = null)
  }
function gs(e) {
  return e.vnode.shapeFlag & 4
}
let In = !1
function ef(e, t = !1) {
  In = t
  const { props: n, children: r } = e.vnode,
    a = gs(e)
  $c(e, n, a, t), jc(e, r)
  const i = a ? tf(e, t) : void 0
  return (In = !1), i
}
function tf(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = zo(new Proxy(e.ctx, Sc)))
  const { setup: r } = n
  if (r) {
    const a = (e.setupContext = r.length > 1 ? rf(e) : null)
    Qt(e), nn()
    const i = pt(r, e, 0, [e.props, a])
    if ((rn(), Rt(), Oo(i))) {
      if ((i.then(Rt, Rt), t))
        return i
          .then((o) => {
            Oi(e, o, t)
          })
          .catch((o) => {
            Or(o, e, 0)
          })
      e.asyncDep = i
    } else Oi(e, i, t)
  } else vs(e, t)
}
function Oi(e, t, n) {
  U(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : fe(t) && (e.setupState = Wo(t)),
    vs(e, n)
}
let Pi
function vs(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Pi && !r.render) {
      const a = r.template || ja(e).template
      if (a) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: s, compilerOptions: l } = r,
          f = we(we({ isCustomElement: i, delimiters: s }, o), l)
        r.render = Pi(a, f)
      }
    }
    e.render = r.render || De
  }
  Qt(e), nn(), Ic(e), rn(), Rt()
}
function nf(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ce(e, 'get', '$attrs'), t[n]
    },
  })
}
function rf(e) {
  const t = (r) => {
    e.exposed = r || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = nf(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Ua(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Wo(zo(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in vn) return vn[n](e)
        },
        has(t, n) {
          return n in t || n in vn
        },
      }))
    )
}
function af(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function of(e) {
  return U(e) && '__vccOpts' in e
}
const se = (e, t) => tc(e, t, In)
function Rr(e, t, n) {
  const r = arguments.length
  return r === 2
    ? fe(t) && !H(t)
      ? pr(t)
        ? Q(e, null, [t])
        : Q(e, t)
      : Q(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && pr(n) && (n = [n]),
      Q(e, t, n))
}
const sf = Symbol(''),
  lf = () => et(sf),
  cf = '3.2.45',
  ff = 'http://www.w3.org/2000/svg',
  Ot = typeof document < 'u' ? document : null,
  Ci = Ot && Ot.createElement('template'),
  uf = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const a = t ? Ot.createElementNS(ff, e) : Ot.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && r && r.multiple != null && a.setAttribute('multiple', r.multiple), a
    },
    createText: (e) => Ot.createTextNode(e),
    createComment: (e) => Ot.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ot.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, r, a, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (a && (a === i || a.nextSibling))
        for (; t.insertBefore(a.cloneNode(!0), n), !(a === i || !(a = a.nextSibling)); );
      else {
        Ci.innerHTML = r ? `<svg>${e}</svg>` : e
        const s = Ci.content
        if (r) {
          const l = s.firstChild
          for (; l.firstChild; ) s.appendChild(l.firstChild)
          s.removeChild(l)
        }
        t.insertBefore(s, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  }
function df(e, t, n) {
  const r = e._vtc
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
function mf(e, t, n) {
  const r = e.style,
    a = he(n)
  if (n && !a) {
    for (const i in n) oa(r, i, n[i])
    if (t && !he(t)) for (const i in t) n[i] == null && oa(r, i, '')
  } else {
    const i = r.display
    a ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'), '_vod' in e && (r.display = i)
  }
}
const Si = /\s*!important$/
function oa(e, t, n) {
  if (H(n)) n.forEach((r) => oa(e, t, r))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const r = pf(e, t)
    Si.test(n) ? e.setProperty(tn(r), n.replace(Si, ''), 'important') : (e[r] = n)
  }
}
const Ii = ['Webkit', 'Moz', 'ms'],
  Br = {}
function pf(e, t) {
  const n = Br[t]
  if (n) return n
  let r = Ge(t)
  if (r !== 'filter' && r in e) return (Br[t] = r)
  r = Er(r)
  for (let a = 0; a < Ii.length; a++) {
    const i = Ii[a] + r
    if (i in e) return (Br[t] = i)
  }
  return t
}
const Ri = 'http://www.w3.org/1999/xlink'
function hf(e, t, n, r, a) {
  if (r && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(Ri, t.slice(6, t.length)) : e.setAttributeNS(Ri, t, n)
  else {
    const i = ul(t)
    n == null || (i && !Ao(n)) ? e.removeAttribute(t) : e.setAttribute(t, i ? '' : n)
  }
}
function gf(e, t, n, r, a, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && o(r, a, i), (e[t] = n ?? '')
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const l = n ?? ''
    ;(e.value !== l || e.tagName === 'OPTION') && (e.value = l), n == null && e.removeAttribute(t)
    return
  }
  let s = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = Ao(n))
      : n == null && l === 'string'
      ? ((n = ''), (s = !0))
      : l === 'number' && ((n = 0), (s = !0))
  }
  try {
    e[t] = n
  } catch {}
  s && e.removeAttribute(t)
}
function vf(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function bf(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
function yf(e, t, n, r, a = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t]
  if (r && o) o.value = r
  else {
    const [s, l] = _f(t)
    if (r) {
      const f = (i[t] = kf(r, a))
      vf(e, s, f, l)
    } else o && (bf(e, s, o, l), (i[t] = void 0))
  }
}
const Ti = /(?:Once|Passive|Capture)$/
function _f(e) {
  let t
  if (Ti.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Ti)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : tn(e.slice(2)), t]
}
let Ur = 0
const xf = Promise.resolve(),
  wf = () => Ur || (xf.then(() => (Ur = 0)), (Ur = Date.now()))
function kf(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    ze(Ef(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = wf()), n
}
function Ef(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (a) => !a._stopped && r && r(a))
    )
  } else return t
}
const Ni = /^on[a-z]/,
  Af = (e, t, n, r, a = !1, i, o, s, l) => {
    t === 'class'
      ? df(e, r, a)
      : t === 'style'
      ? mf(e, n, r)
      : xr(t)
      ? Aa(t) || yf(e, t, n, r, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Of(e, t, r, a)
        )
      ? gf(e, t, r, i, o, s, l)
      : (t === 'true-value' ? (e._trueValue = r) : t === 'false-value' && (e._falseValue = r),
        hf(e, t, r, a))
  }
function Of(e, t, n, r) {
  return r
    ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && Ni.test(t) && U(n)))
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Ni.test(t) && he(n))
    ? !1
    : t in e
}
const Pf = we({ patchProp: Af }, uf)
let Mi
function Cf() {
  return Mi || (Mi = Uc(Pf))
}
const Sf = (...e) => {
  const t = Cf().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const a = If(r)
      if (!a) return
      const i = t._component
      !U(i) && !i.render && !i.template && (i.template = a.innerHTML), (a.innerHTML = '')
      const o = n(a, !1, a instanceof SVGElement)
      return (
        a instanceof Element && (a.removeAttribute('v-cloak'), a.setAttribute('data-v-app', '')), o
      )
    }),
    t
  )
}
function If(e) {
  return he(e) ? document.querySelector(e) : e
}
const zt = typeof window < 'u'
function Rf(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const G = Object.assign
function Hr(e, t) {
  const n = {}
  for (const r in t) {
    const a = t[r]
    n[r] = Be(a) ? a.map(e) : e(a)
  }
  return n
}
const yn = () => {},
  Be = Array.isArray,
  Tf = /\/$/,
  Nf = (e) => e.replace(Tf, '')
function Wr(e, t, n = '/') {
  let r,
    a = {},
    i = '',
    o = ''
  const s = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    s < l && s >= 0 && (l = -1),
    l > -1 && ((r = t.slice(0, l)), (i = t.slice(l + 1, s > -1 ? s : t.length)), (a = e(i))),
    s > -1 && ((r = r || t.slice(0, s)), (o = t.slice(s, t.length))),
    (r = Ff(r ?? t, n)),
    { fullPath: r + (i && '?') + i + o, path: r, query: a, hash: o }
  )
}
function Mf(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function $i(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function $f(e, t, n) {
  const r = t.matched.length - 1,
    a = n.matched.length - 1
  return (
    r > -1 &&
    r === a &&
    Jt(t.matched[r], n.matched[a]) &&
    bs(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Jt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function bs(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Lf(e[n], t[n])) return !1
  return !0
}
function Lf(e, t) {
  return Be(e) ? Li(e, t) : Be(t) ? Li(t, e) : e === t
}
function Li(e, t) {
  return Be(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function Ff(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    r = e.split('/')
  let a = n.length - 1,
    i,
    o
  for (i = 0; i < r.length; i++)
    if (((o = r[i]), o !== '.'))
      if (o === '..') a > 1 && a--
      else break
  return n.slice(0, a).join('/') + '/' + r.slice(i - (i === r.length ? 1 : 0)).join('/')
}
var Rn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Rn || (Rn = {}))
var _n
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(_n || (_n = {}))
function jf(e) {
  if (!e)
    if (zt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Nf(e)
}
const Df = /^[^#]+#/
function zf(e, t) {
  return e.replace(Df, '#') + t
}
function Bf(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const Tr = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Uf(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      a =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!a) return
    t = Bf(a, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function Fi(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const sa = new Map()
function Hf(e, t) {
  sa.set(e, t)
}
function Wf(e) {
  const t = sa.get(e)
  return sa.delete(e), t
}
let Kf = () => location.protocol + '//' + location.host
function ys(e, t) {
  const { pathname: n, search: r, hash: a } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let s = a.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = a.slice(s)
    return l[0] !== '/' && (l = '/' + l), $i(l, '')
  }
  return $i(n, e) + r + a
}
function Yf(e, t, n, r) {
  let a = [],
    i = [],
    o = null
  const s = ({ state: p }) => {
    const g = ys(e, location),
      A = n.value,
      S = t.value
    let L = 0
    if (p) {
      if (((n.value = g), (t.value = p), o && o === A)) {
        o = null
        return
      }
      L = S ? p.position - S.position : 0
    } else r(g)
    a.forEach((b) => {
      b(n.value, A, {
        delta: L,
        type: Rn.pop,
        direction: L ? (L > 0 ? _n.forward : _n.back) : _n.unknown,
      })
    })
  }
  function l() {
    o = n.value
  }
  function f(p) {
    a.push(p)
    const g = () => {
      const A = a.indexOf(p)
      A > -1 && a.splice(A, 1)
    }
    return i.push(g), g
  }
  function c() {
    const { history: p } = window
    p.state && p.replaceState(G({}, p.state, { scroll: Tr() }), '')
  }
  function d() {
    for (const p of i) p()
    ;(i = []),
      window.removeEventListener('popstate', s),
      window.removeEventListener('beforeunload', c)
  }
  return (
    window.addEventListener('popstate', s),
    window.addEventListener('beforeunload', c),
    { pauseListeners: l, listen: f, destroy: d }
  )
}
function ji(e, t, n, r = !1, a = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: a ? Tr() : null,
  }
}
function qf(e) {
  const { history: t, location: n } = window,
    r = { value: ys(e, n) },
    a = { value: t.state }
  a.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    )
  function i(l, f, c) {
    const d = e.indexOf('#'),
      p = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + l : Kf() + e + l
    try {
      t[c ? 'replaceState' : 'pushState'](f, '', p), (a.value = f)
    } catch (g) {
      console.error(g), n[c ? 'replace' : 'assign'](p)
    }
  }
  function o(l, f) {
    const c = G({}, t.state, ji(a.value.back, l, a.value.forward, !0), f, {
      position: a.value.position,
    })
    i(l, c, !0), (r.value = l)
  }
  function s(l, f) {
    const c = G({}, a.value, t.state, { forward: l, scroll: Tr() })
    i(c.current, c, !0)
    const d = G({}, ji(r.value, l, null), { position: c.position + 1 }, f)
    i(l, d, !1), (r.value = l)
  }
  return { location: r, state: a, push: s, replace: o }
}
function Vf(e) {
  e = jf(e)
  const t = qf(e),
    n = Yf(e, t.state, t.location, t.replace)
  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const a = G({ location: '', base: e, go: r, createHref: zf.bind(null, e) }, t, n)
  return (
    Object.defineProperty(a, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(a, 'state', { enumerable: !0, get: () => t.state.value }),
    a
  )
}
function Xf(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function _s(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const ct = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  xs = Symbol('')
var Di
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Di || (Di = {}))
function Zt(e, t) {
  return G(new Error(), { type: e, [xs]: !0 }, t)
}
function Je(e, t) {
  return e instanceof Error && xs in e && (t == null || !!(e.type & t))
}
const zi = '[^/]+?',
  Gf = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Qf = /[.+*?^${}()[\]/\\]/g
function Jf(e, t) {
  const n = G({}, Gf, t),
    r = []
  let a = n.start ? '^' : ''
  const i = []
  for (const f of e) {
    const c = f.length ? [] : [90]
    n.strict && !f.length && (a += '/')
    for (let d = 0; d < f.length; d++) {
      const p = f[d]
      let g = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0) d || (a += '/'), (a += p.value.replace(Qf, '\\$&')), (g += 40)
      else if (p.type === 1) {
        const { value: A, repeatable: S, optional: L, regexp: b } = p
        i.push({ name: A, repeatable: S, optional: L })
        const x = b || zi
        if (x !== zi) {
          g += 10
          try {
            new RegExp(`(${x})`)
          } catch (z) {
            throw new Error(`Invalid custom RegExp for param "${A}" (${x}): ` + z.message)
          }
        }
        let O = S ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`
        d || (O = L && f.length < 2 ? `(?:/${O})` : '/' + O),
          L && (O += '?'),
          (a += O),
          (g += 20),
          L && (g += -8),
          S && (g += -20),
          x === '.*' && (g += -50)
      }
      c.push(g)
    }
    r.push(c)
  }
  if (n.strict && n.end) {
    const f = r.length - 1
    r[f][r[f].length - 1] += 0.7000000000000001
  }
  n.strict || (a += '/?'), n.end ? (a += '$') : n.strict && (a += '(?:/|$)')
  const o = new RegExp(a, n.sensitive ? '' : 'i')
  function s(f) {
    const c = f.match(o),
      d = {}
    if (!c) return null
    for (let p = 1; p < c.length; p++) {
      const g = c[p] || '',
        A = i[p - 1]
      d[A.name] = g && A.repeatable ? g.split('/') : g
    }
    return d
  }
  function l(f) {
    let c = '',
      d = !1
    for (const p of e) {
      ;(!d || !c.endsWith('/')) && (c += '/'), (d = !1)
      for (const g of p)
        if (g.type === 0) c += g.value
        else if (g.type === 1) {
          const { value: A, repeatable: S, optional: L } = g,
            b = A in f ? f[A] : ''
          if (Be(b) && !S)
            throw new Error(
              `Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`
            )
          const x = Be(b) ? b.join('/') : b
          if (!x)
            if (L) p.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${A}"`)
          c += x
        }
    }
    return c || '/'
  }
  return { re: o, score: r, keys: i, parse: s, stringify: l }
}
function Zf(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function eu(e, t) {
  let n = 0
  const r = e.score,
    a = t.score
  for (; n < r.length && n < a.length; ) {
    const i = Zf(r[n], a[n])
    if (i) return i
    n++
  }
  if (Math.abs(a.length - r.length) === 1) {
    if (Bi(r)) return 1
    if (Bi(a)) return -1
  }
  return a.length - r.length
}
function Bi(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const tu = { type: 0, value: '' },
  nu = /[a-zA-Z0-9_]/
function ru(e) {
  if (!e) return [[]]
  if (e === '/') return [[tu]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(g) {
    throw new Error(`ERR (${n})/"${f}": ${g}`)
  }
  let n = 0,
    r = n
  const a = []
  let i
  function o() {
    i && a.push(i), (i = [])
  }
  let s = 0,
    l,
    f = '',
    c = ''
  function d() {
    f &&
      (n === 0
        ? i.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (l === '*' || l === '+') &&
            t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
          i.push({
            type: 1,
            value: f,
            regexp: c,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?',
          }))
        : t('Invalid state to consume buffer'),
      (f = ''))
  }
  function p() {
    f += l
  }
  for (; s < e.length; ) {
    if (((l = e[s++]), l === '\\' && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (f && d(), o()) : l === ':' ? (d(), (n = 1)) : p()
        break
      case 4:
        p(), (n = r)
        break
      case 1:
        l === '('
          ? (n = 2)
          : nu.test(l)
          ? p()
          : (d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && s--)
        break
      case 2:
        l === ')' ? (c[c.length - 1] == '\\' ? (c = c.slice(0, -1) + l) : (n = 3)) : (c += l)
        break
      case 3:
        d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && s--, (c = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), d(), o(), a
}
function au(e, t, n) {
  const r = Jf(ru(e.path), n),
    a = G(r, { record: e, parent: t, children: [], alias: [] })
  return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a
}
function iu(e, t) {
  const n = [],
    r = new Map()
  t = Wi({ strict: !1, end: !0, sensitive: !1 }, t)
  function a(c) {
    return r.get(c)
  }
  function i(c, d, p) {
    const g = !p,
      A = ou(c)
    A.aliasOf = p && p.record
    const S = Wi(t, c),
      L = [A]
    if ('alias' in c) {
      const O = typeof c.alias == 'string' ? [c.alias] : c.alias
      for (const z of O)
        L.push(
          G({}, A, {
            components: p ? p.record.components : A.components,
            path: z,
            aliasOf: p ? p.record : A,
          })
        )
    }
    let b, x
    for (const O of L) {
      const { path: z } = O
      if (d && z[0] !== '/') {
        const K = d.record.path,
          ae = K[K.length - 1] === '/' ? '' : '/'
        O.path = d.record.path + (z && ae + z)
      }
      if (
        ((b = au(O, d, S)),
        p
          ? p.alias.push(b)
          : ((x = x || b), x !== b && x.alias.push(b), g && c.name && !Hi(b) && o(c.name)),
        A.children)
      ) {
        const K = A.children
        for (let ae = 0; ae < K.length; ae++) i(K[ae], b, p && p.children[ae])
      }
      ;(p = p || b),
        ((b.record.components && Object.keys(b.record.components).length) ||
          b.record.name ||
          b.record.redirect) &&
          l(b)
    }
    return x
      ? () => {
          o(x)
        }
      : yn
  }
  function o(c) {
    if (_s(c)) {
      const d = r.get(c)
      d && (r.delete(c), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o))
    } else {
      const d = n.indexOf(c)
      d > -1 &&
        (n.splice(d, 1),
        c.record.name && r.delete(c.record.name),
        c.children.forEach(o),
        c.alias.forEach(o))
    }
  }
  function s() {
    return n
  }
  function l(c) {
    let d = 0
    for (
      ;
      d < n.length && eu(c, n[d]) >= 0 && (c.record.path !== n[d].record.path || !ws(c, n[d]));

    )
      d++
    n.splice(d, 0, c), c.record.name && !Hi(c) && r.set(c.record.name, c)
  }
  function f(c, d) {
    let p,
      g = {},
      A,
      S
    if ('name' in c && c.name) {
      if (((p = r.get(c.name)), !p)) throw Zt(1, { location: c })
      ;(S = p.record.name),
        (g = G(
          Ui(
            d.params,
            p.keys.filter((x) => !x.optional).map((x) => x.name)
          ),
          c.params &&
            Ui(
              c.params,
              p.keys.map((x) => x.name)
            )
        )),
        (A = p.stringify(g))
    } else if ('path' in c)
      (A = c.path), (p = n.find((x) => x.re.test(A))), p && ((g = p.parse(A)), (S = p.record.name))
    else {
      if (((p = d.name ? r.get(d.name) : n.find((x) => x.re.test(d.path))), !p))
        throw Zt(1, { location: c, currentLocation: d })
      ;(S = p.record.name), (g = G({}, d.params, c.params)), (A = p.stringify(g))
    }
    const L = []
    let b = p
    for (; b; ) L.unshift(b.record), (b = b.parent)
    return { name: S, path: A, params: g, matched: L, meta: lu(L) }
  }
  return (
    e.forEach((c) => i(c)),
    { addRoute: i, resolve: f, removeRoute: o, getRoutes: s, getRecordMatcher: a }
  )
}
function Ui(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function ou(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: su(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
}
function su(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r]
  return t
}
function Hi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function lu(e) {
  return e.reduce((t, n) => G(t, n.meta), {})
}
function Wi(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function ws(e, t) {
  return t.children.some((n) => n === e || ws(e, n))
}
const ks = /#/g,
  cu = /&/g,
  fu = /\//g,
  uu = /=/g,
  du = /\?/g,
  Es = /\+/g,
  mu = /%5B/g,
  pu = /%5D/g,
  As = /%5E/g,
  hu = /%60/g,
  Os = /%7B/g,
  gu = /%7C/g,
  Ps = /%7D/g,
  vu = /%20/g
function Ha(e) {
  return encodeURI('' + e)
    .replace(gu, '|')
    .replace(mu, '[')
    .replace(pu, ']')
}
function bu(e) {
  return Ha(e).replace(Os, '{').replace(Ps, '}').replace(As, '^')
}
function la(e) {
  return Ha(e)
    .replace(Es, '%2B')
    .replace(vu, '+')
    .replace(ks, '%23')
    .replace(cu, '%26')
    .replace(hu, '`')
    .replace(Os, '{')
    .replace(Ps, '}')
    .replace(As, '^')
}
function yu(e) {
  return la(e).replace(uu, '%3D')
}
function _u(e) {
  return Ha(e).replace(ks, '%23').replace(du, '%3F')
}
function xu(e) {
  return e == null ? '' : _u(e).replace(fu, '%2F')
}
function hr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function wu(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const r = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let a = 0; a < r.length; ++a) {
    const i = r[a].replace(Es, ' '),
      o = i.indexOf('='),
      s = hr(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : hr(i.slice(o + 1))
    if (s in t) {
      let f = t[s]
      Be(f) || (f = t[s] = [f]), f.push(l)
    } else t[s] = l
  }
  return t
}
function Ki(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = yu(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Be(r) ? r.map((i) => i && la(i)) : [r && la(r)]).forEach((i) => {
      i !== void 0 && ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
    })
  }
  return t
}
function ku(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = Be(r) ? r.map((a) => (a == null ? null : '' + a)) : r == null ? r : '' + r)
  }
  return t
}
const Eu = Symbol(''),
  Yi = Symbol(''),
  Wa = Symbol(''),
  Cs = Symbol(''),
  ca = Symbol('')
function fn() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const a = e.indexOf(r)
        a > -1 && e.splice(a, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e, reset: n }
}
function dt(e, t, n, r, a) {
  const i = r && (r.enterCallbacks[a] = r.enterCallbacks[a] || [])
  return () =>
    new Promise((o, s) => {
      const l = (d) => {
          d === !1
            ? s(Zt(4, { from: n, to: t }))
            : d instanceof Error
            ? s(d)
            : Xf(d)
            ? s(Zt(2, { from: t, to: d }))
            : (i && r.enterCallbacks[a] === i && typeof d == 'function' && i.push(d), o())
        },
        f = e.call(r && r.instances[a], t, n, l)
      let c = Promise.resolve(f)
      e.length < 3 && (c = c.then(l)), c.catch((d) => s(d))
    })
}
function Kr(e, t, n, r) {
  const a = []
  for (const i of e)
    for (const o in i.components) {
      let s = i.components[o]
      if (!(t !== 'beforeRouteEnter' && !i.instances[o]))
        if (Au(s)) {
          const f = (s.__vccOpts || s)[t]
          f && a.push(dt(f, n, r, i, o))
        } else {
          let l = s()
          a.push(() =>
            l.then((f) => {
              if (!f)
                return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`))
              const c = Rf(f) ? f.default : f
              i.components[o] = c
              const p = (c.__vccOpts || c)[t]
              return p && dt(p, n, r, i, o)()
            })
          )
        }
    }
  return a
}
function Au(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function qi(e) {
  const t = et(Wa),
    n = et(Cs),
    r = se(() => t.resolve(It(e.to))),
    a = se(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        c = l[f - 1],
        d = n.matched
      if (!c || !d.length) return -1
      const p = d.findIndex(Jt.bind(null, c))
      if (p > -1) return p
      const g = Vi(l[f - 2])
      return f > 1 && Vi(c) === g && d[d.length - 1].path !== g
        ? d.findIndex(Jt.bind(null, l[f - 2]))
        : p
    }),
    i = se(() => a.value > -1 && Su(n.params, r.value.params)),
    o = se(() => a.value > -1 && a.value === n.matched.length - 1 && bs(n.params, r.value.params))
  function s(l = {}) {
    return Cu(l) ? t[It(e.replace) ? 'replace' : 'push'](It(e.to)).catch(yn) : Promise.resolve()
  }
  return { route: r, href: se(() => r.value.href), isActive: i, isExactActive: o, navigate: s }
}
const Ou = jn({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: qi,
    setup(e, { slots: t }) {
      const n = Fn(qi(e)),
        { options: r } = et(Wa),
        a = se(() => ({
          [Xi(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [Xi(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : Rr(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: a.value,
              },
              i
            )
      }
    },
  }),
  Pu = Ou
function Cu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Su(e, t) {
  for (const n in t) {
    const r = t[n],
      a = e[n]
    if (typeof r == 'string') {
      if (r !== a) return !1
    } else if (!Be(a) || a.length !== r.length || r.some((i, o) => i !== a[o])) return !1
  }
  return !0
}
function Vi(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Xi = (e, t, n) => e ?? t ?? n,
  Iu = jn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = et(ca),
        a = se(() => e.route || r.value),
        i = et(Yi, 0),
        o = se(() => {
          let f = It(i)
          const { matched: c } = a.value
          let d
          for (; (d = c[f]) && !d.components; ) f++
          return f
        }),
        s = se(() => a.value.matched[o.value])
      ir(
        Yi,
        se(() => o.value + 1)
      ),
        ir(Eu, s),
        ir(ca, a)
      const l = Gl()
      return (
        hn(
          () => [l.value, s.value, e.name],
          ([f, c, d], [p, g, A]) => {
            c &&
              ((c.instances[d] = f),
              g &&
                g !== c &&
                f &&
                f === p &&
                (c.leaveGuards.size || (c.leaveGuards = g.leaveGuards),
                c.updateGuards.size || (c.updateGuards = g.updateGuards))),
              f && c && (!g || !Jt(c, g) || !p) && (c.enterCallbacks[d] || []).forEach((S) => S(f))
          },
          { flush: 'post' }
        ),
        () => {
          const f = a.value,
            c = e.name,
            d = s.value,
            p = d && d.components[c]
          if (!p) return Gi(n.default, { Component: p, route: f })
          const g = d.props[c],
            A = g ? (g === !0 ? f.params : typeof g == 'function' ? g(f) : g) : null,
            L = Rr(
              p,
              G({}, A, t, {
                onVnodeUnmounted: (b) => {
                  b.component.isUnmounted && (d.instances[c] = null)
                },
                ref: l,
              })
            )
          return Gi(n.default, { Component: L, route: f }) || L
        }
      )
    },
  })
function Gi(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Ss = Iu
function Ru(e) {
  const t = iu(e.routes, e),
    n = e.parseQuery || wu,
    r = e.stringifyQuery || Ki,
    a = e.history,
    i = fn(),
    o = fn(),
    s = fn(),
    l = Ql(ct)
  let f = ct
  zt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const c = Hr.bind(null, (y) => '' + y),
    d = Hr.bind(null, xu),
    p = Hr.bind(null, hr)
  function g(y, R) {
    let C, F
    return _s(y) ? ((C = t.getRecordMatcher(y)), (F = R)) : (F = y), t.addRoute(F, C)
  }
  function A(y) {
    const R = t.getRecordMatcher(y)
    R && t.removeRoute(R)
  }
  function S() {
    return t.getRoutes().map((y) => y.record)
  }
  function L(y) {
    return !!t.getRecordMatcher(y)
  }
  function b(y, R) {
    if (((R = G({}, R || l.value)), typeof y == 'string')) {
      const u = Wr(n, y, R.path),
        m = t.resolve({ path: u.path }, R),
        h = a.createHref(u.fullPath)
      return G(u, m, { params: p(m.params), hash: hr(u.hash), redirectedFrom: void 0, href: h })
    }
    let C
    if ('path' in y) C = G({}, y, { path: Wr(n, y.path, R.path).path })
    else {
      const u = G({}, y.params)
      for (const m in u) u[m] == null && delete u[m]
      ;(C = G({}, y, { params: d(y.params) })), (R.params = d(R.params))
    }
    const F = t.resolve(C, R),
      q = y.hash || ''
    F.params = c(p(F.params))
    const oe = Mf(r, G({}, y, { hash: bu(q), path: F.path })),
      W = a.createHref(oe)
    return G({ fullPath: oe, hash: q, query: r === Ki ? ku(y.query) : y.query || {} }, F, {
      redirectedFrom: void 0,
      href: W,
    })
  }
  function x(y) {
    return typeof y == 'string' ? Wr(n, y, l.value.path) : G({}, y)
  }
  function O(y, R) {
    if (f !== y) return Zt(8, { from: R, to: y })
  }
  function z(y) {
    return le(y)
  }
  function K(y) {
    return z(G(x(y), { replace: !0 }))
  }
  function ae(y) {
    const R = y.matched[y.matched.length - 1]
    if (R && R.redirect) {
      const { redirect: C } = R
      let F = typeof C == 'function' ? C(y) : C
      return (
        typeof F == 'string' &&
          ((F = F.includes('?') || F.includes('#') ? (F = x(F)) : { path: F }), (F.params = {})),
        G({ query: y.query, hash: y.hash, params: 'path' in F ? {} : y.params }, F)
      )
    }
  }
  function le(y, R) {
    const C = (f = b(y)),
      F = l.value,
      q = y.state,
      oe = y.force,
      W = y.replace === !0,
      u = ae(C)
    if (u)
      return le(
        G(x(u), { state: typeof u == 'object' ? G({}, q, u.state) : q, force: oe, replace: W }),
        R || C
      )
    const m = C
    m.redirectedFrom = R
    let h
    return (
      !oe && $f(r, F, C) && ((h = Zt(16, { to: m, from: F })), xt(F, F, !0, !1)),
      (h ? Promise.resolve(h) : be(m, F))
        .catch((v) => (Je(v) ? (Je(v, 2) ? v : Re(v)) : ee(v, m, F)))
        .then((v) => {
          if (v) {
            if (Je(v, 2))
              return le(
                G({ replace: W }, x(v.to), {
                  state: typeof v.to == 'object' ? G({}, q, v.to.state) : q,
                  force: oe,
                }),
                R || m
              )
          } else v = st(m, F, !0, W, q)
          return Ie(m, F, v), v
        })
    )
  }
  function Oe(y, R) {
    const C = O(y, R)
    return C ? Promise.reject(C) : Promise.resolve()
  }
  function be(y, R) {
    let C
    const [F, q, oe] = Tu(y, R)
    C = Kr(F.reverse(), 'beforeRouteLeave', y, R)
    for (const u of F)
      u.leaveGuards.forEach((m) => {
        C.push(dt(m, y, R))
      })
    const W = Oe.bind(null, y, R)
    return (
      C.push(W),
      Dt(C)
        .then(() => {
          C = []
          for (const u of i.list()) C.push(dt(u, y, R))
          return C.push(W), Dt(C)
        })
        .then(() => {
          C = Kr(q, 'beforeRouteUpdate', y, R)
          for (const u of q)
            u.updateGuards.forEach((m) => {
              C.push(dt(m, y, R))
            })
          return C.push(W), Dt(C)
        })
        .then(() => {
          C = []
          for (const u of y.matched)
            if (u.beforeEnter && !R.matched.includes(u))
              if (Be(u.beforeEnter)) for (const m of u.beforeEnter) C.push(dt(m, y, R))
              else C.push(dt(u.beforeEnter, y, R))
          return C.push(W), Dt(C)
        })
        .then(
          () => (
            y.matched.forEach((u) => (u.enterCallbacks = {})),
            (C = Kr(oe, 'beforeRouteEnter', y, R)),
            C.push(W),
            Dt(C)
          )
        )
        .then(() => {
          C = []
          for (const u of o.list()) C.push(dt(u, y, R))
          return C.push(W), Dt(C)
        })
        .catch((u) => (Je(u, 8) ? u : Promise.reject(u)))
    )
  }
  function Ie(y, R, C) {
    for (const F of s.list()) F(y, R, C)
  }
  function st(y, R, C, F, q) {
    const oe = O(y, R)
    if (oe) return oe
    const W = R === ct,
      u = zt ? history.state : {}
    C &&
      (F || W
        ? a.replace(y.fullPath, G({ scroll: W && u && u.scroll }, q))
        : a.push(y.fullPath, q)),
      (l.value = y),
      xt(y, R, C, W),
      Re()
  }
  let Ue
  function Lt() {
    Ue ||
      (Ue = a.listen((y, R, C) => {
        if (!Un.listening) return
        const F = b(y),
          q = ae(F)
        if (q) {
          le(G(q, { replace: !0 }), F).catch(yn)
          return
        }
        f = F
        const oe = l.value
        zt && Hf(Fi(oe.fullPath, C.delta), Tr()),
          be(F, oe)
            .catch((W) =>
              Je(W, 12)
                ? W
                : Je(W, 2)
                ? (le(W.to, F)
                    .then((u) => {
                      Je(u, 20) && !C.delta && C.type === Rn.pop && a.go(-1, !1)
                    })
                    .catch(yn),
                  Promise.reject())
                : (C.delta && a.go(-C.delta, !1), ee(W, F, oe))
            )
            .then((W) => {
              ;(W = W || st(F, oe, !1)),
                W &&
                  (C.delta && !Je(W, 8)
                    ? a.go(-C.delta, !1)
                    : C.type === Rn.pop && Je(W, 20) && a.go(-1, !1)),
                Ie(F, oe, W)
            })
            .catch(yn)
      }))
  }
  let _t = fn(),
    sn = fn(),
    ue
  function ee(y, R, C) {
    Re(y)
    const F = sn.list()
    return F.length ? F.forEach((q) => q(y, R, C)) : console.error(y), Promise.reject(y)
  }
  function J() {
    return ue && l.value !== ct
      ? Promise.resolve()
      : new Promise((y, R) => {
          _t.add([y, R])
        })
  }
  function Re(y) {
    return ue || ((ue = !y), Lt(), _t.list().forEach(([R, C]) => (y ? C(y) : R())), _t.reset()), y
  }
  function xt(y, R, C, F) {
    const { scrollBehavior: q } = e
    if (!zt || !q) return Promise.resolve()
    const oe =
      (!C && Wf(Fi(y.fullPath, 0))) || ((F || !C) && history.state && history.state.scroll) || null
    return qo()
      .then(() => q(y, R, oe))
      .then((W) => W && Uf(W))
      .catch((W) => ee(W, y, R))
  }
  const Te = (y) => a.go(y)
  let ke
  const Ft = new Set(),
    Un = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: A,
      hasRoute: L,
      getRoutes: S,
      resolve: b,
      options: e,
      push: z,
      replace: K,
      go: Te,
      back: () => Te(-1),
      forward: () => Te(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: s.add,
      onError: sn.add,
      isReady: J,
      install(y) {
        const R = this
        y.component('RouterLink', Pu),
          y.component('RouterView', Ss),
          (y.config.globalProperties.$router = R),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => It(l),
          }),
          zt && !ke && l.value === ct && ((ke = !0), z(a.location).catch((q) => {}))
        const C = {}
        for (const q in ct) C[q] = se(() => l.value[q])
        y.provide(Wa, R), y.provide(Cs, Fn(C)), y.provide(ca, l)
        const F = y.unmount
        Ft.add(y),
          (y.unmount = function () {
            Ft.delete(y),
              Ft.size < 1 &&
                ((f = ct), Ue && Ue(), (Ue = null), (l.value = ct), (ke = !1), (ue = !1)),
              F()
          })
      },
    }
  return Un
}
function Dt(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}
function Tu(e, t) {
  const n = [],
    r = [],
    a = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const s = t.matched[o]
    s && (e.matched.find((f) => Jt(f, s)) ? r.push(s) : n.push(s))
    const l = e.matched[o]
    l && (t.matched.find((f) => Jt(f, l)) || a.push(l))
  }
  return [n, r, a]
}
const Nu = {
    __name: 'App',
    setup(e) {
      return (t, n) => (Qe(), za(It(Ss)))
    },
  },
  Mu = '/assets/welcome-81aed2c0.svg',
  $u = '/assets/keyblue-9183efe0.svg',
  Lu = '/assets/keywhite-5e362586.svg',
  $t = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, a] of t) n[r] = a
    return n
  },
  Fu = {
    data() {
      return { WelComeImg: Mu, KeyBlueImg: $u, KeyWhiteImg: Lu }
    },
  },
  ju = { class: 'container m-auto font-oxygen' },
  Du = { class: 'content-area' },
  zu = M(
    'div',
    { class: 'm-auto w-full' },
    [
      M(
        'h2',
        { class: 'text-center font-bold text-[30px] leading-[38px] text-[#2E3192] font-oxygen' },
        ' WELCOME '
      ),
    ],
    -1
  ),
  Bu = { class: 'm-auto w-full items-center' },
  Uu = ['src'],
  Hu = M(
    'div',
    { class: 'm-auto mt-[10px] w-full' },
    [
      M(
        'h3',
        { class: 'text-center font-normal text-[18px] leading-[23px] font-oxygen' },
        ' Please choose your preferred login method '
      ),
    ],
    -1
  ),
  Wu = { class: 'btn-area' },
  Ku = { class: 'm-auto w-[300px]' },
  Yu = { class: 'm-auto mt-6 w-[300px]' },
  qu = ['src'],
  Vu = ['src']
function Xu(e, t, n, r, a, i) {
  const o = xe('logo-area'),
    s = xe('router-link'),
    l = xe('login-card')
  return (
    Qe(),
    Mt('div', ju, [
      Q(l, null, {
        default: Xe(() => [
          Q(o),
          M('div', Du, [
            zu,
            M('div', Bu, [M('img', { src: a.WelComeImg, class: 'm-auto' }, null, 8, Uu)]),
            Hu,
          ]),
          M('div', Wu, [
            M('div', Ku, [
              Q(
                s,
                { to: '/sms-login', class: 'main-button' },
                { default: Xe(() => [gt(' Social Security Number / SMS TAN ')]), _: 1 }
              ),
            ]),
            M('div', Yu, [
              Q(
                s,
                { to: '/austria-login', class: 'main-button group' },
                {
                  default: Xe(() => [
                    M('span', null, [
                      M(
                        'img',
                        { src: a.KeyBlueImg, class: 'hidden group-hover:inline-block' },
                        null,
                        8,
                        qu
                      ),
                      M(
                        'img',
                        { src: a.KeyWhiteImg, class: 'inline-block group-hover:hidden' },
                        null,
                        8,
                        Vu
                      ),
                    ]),
                    gt(' ID Austria '),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ]),
        ]),
        _: 1,
      }),
    ])
  )
}
const Gu = $t(Fu, [['render', Xu]]),
  Qu = '/assets/auslogin-549579a9.svg',
  Ju = {
    data() {
      return { AusLoginImg: Qu }
    },
  },
  Zu = { class: 'container m-auto font-oxygen' },
  ed = { class: 'content-area' },
  td = { class: 'm-auto w-full' },
  nd = { class: 'mb-5' },
  rd = M(
    'p',
    { class: 'text-[22px] leading-[22px] font-bold m-auto grid justify-center mb-5' },
    ' Authenticate with ID Austria ',
    -1
  ),
  ad = ['src'],
  id = M(
    'div',
    { class: 'mb-5' },
    [
      M(
        'label',
        { class: 'text-center block text-[16px] leading-[20px] font-bold', for: 'phone' },
        ' Username/Phone '
      ),
      M('input', {
        type: 'text',
        id: 'phone',
        placeholder: 'Username/Phone',
        class: 'input-login',
      }),
    ],
    -1
  ),
  od = M(
    'div',
    { class: 'mb-5' },
    [
      M(
        'label',
        { class: 'text-center block text-[16px] leading-[20px] font-bold', for: 'phone' },
        ' Signature Password '
      ),
      M('input', {
        type: 'password',
        id: 'phone',
        placeholder: '4332 010197',
        class: 'input-login',
      }),
    ],
    -1
  ),
  sd = { class: 'btn-area' },
  ld = { class: 'm-auto mt-1 w-[300px]' },
  cd = { class: 'm-auto w-[300px] mt-6 items-center' }
function fd(e, t, n, r, a, i) {
  const o = xe('logo-area'),
    s = xe('router-link'),
    l = xe('font-awesome-icon'),
    f = xe('login-card')
  return (
    Qe(),
    Mt('div', Zu, [
      Q(f, null, {
        default: Xe(() => [
          Q(o),
          M('form', null, [
            M('div', ed, [
              M('div', td, [
                M('div', nd, [
                  rd,
                  M('div', null, [M('img', { src: a.AusLoginImg, class: 'm-auto' }, null, 8, ad)]),
                ]),
                id,
                od,
              ]),
              M('div', sd, [
                M('div', ld, [
                  Q(
                    s,
                    { to: '/dashboard', class: 'main-button' },
                    { default: Xe(() => [gt('Identity')]), _: 1 }
                  ),
                ]),
                M('div', cd, [
                  M(
                    'a',
                    { class: 'main-button', onClick: t[0] || (t[0] = (c) => e.$router.go(-1)) },
                    [M('span', null, [Q(l, { icon: 'fas fa-long-arrow-alt-left' })]), gt(' Back')]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      }),
    ])
  )
}
const ud = $t(Ju, [['render', fd]]),
  dd = {},
  md = { class: 'container m-auto font-oxygen' },
  pd = M(
    'div',
    { class: 'content-area' },
    [
      M('div', { class: 'm-auto w-full' }, [
        M('div', { class: 'mb-5' }, [
          M(
            'label',
            { class: 'text-center block text-[16px] leading-[20px] font-bold', for: 'phone' },
            ' Enter Phone Number '
          ),
          M('input', {
            type: 'tel',
            id: 'phone',
            placeholder: '0664 555 1333 323',
            class: 'input-login',
          }),
        ]),
        M('div', { class: 'mb-5' }, [
          M(
            'label',
            { class: 'text-center block text-[16px] leading-[20px] font-bold', for: 'phone' },
            ' Enter Social Security Number '
          ),
          M('input', {
            type: 'tel',
            id: 'phone',
            placeholder: '4332 010197',
            class: 'input-login',
          }),
        ]),
      ]),
    ],
    -1
  ),
  hd = { class: 'btn-area' },
  gd = { class: 'm-auto w-[300px]' },
  vd = { class: 'm-auto w-[300px] mt-6 items-center' }
function bd(e, t) {
  const n = xe('logo-area'),
    r = xe('router-link'),
    a = xe('font-awesome-icon'),
    i = xe('login-card')
  return (
    Qe(),
    Mt('div', md, [
      Q(i, null, {
        default: Xe(() => [
          Q(n),
          M('form', null, [
            pd,
            M('div', hd, [
              M('div', gd, [
                Q(
                  r,
                  { to: '/enter-tpn', class: 'main-button' },
                  { default: Xe(() => [gt('Request SMS TAN')]), _: 1 }
                ),
              ]),
              M('div', vd, [
                M(
                  'a',
                  { class: 'main-button', onClick: t[0] || (t[0] = (o) => e.$router.go(-1)) },
                  [M('span', null, [Q(a, { icon: 'fas fa-long-arrow-alt-left' })]), gt(' Back')]
                ),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      }),
    ])
  )
}
const yd = $t(dd, [['render', bd]]),
  _d = {},
  xd = { class: 'container m-auto font-oxygen' },
  wd = M(
    'div',
    { class: 'content-area' },
    [
      M('div', { class: 'm-auto w-full' }, [
        M('div', { class: 'mb-5' }, [
          M(
            'label',
            { class: 'text-center block text-[16px] leading-[20px] font-normal', for: 'phone' },
            ' Please enter SMS TAN sent to 0664 555 1333 323 '
          ),
          M('input', { type: 'number', id: 'phone', placeholder: '0664555', class: 'input-login' }),
        ]),
      ]),
    ],
    -1
  ),
  kd = { class: 'btn-area' },
  Ed = M(
    'div',
    { class: 'm-auto w-[300px]' },
    [M('a', { href: '/dashboard', class: 'main-button' }, 'Login')],
    -1
  ),
  Ad = { class: 'm-auto w-[300px] mt-6 items-center' }
function Od(e, t) {
  const n = xe('logo-area'),
    r = xe('font-awesome-icon'),
    a = xe('login-card')
  return (
    Qe(),
    Mt('div', xd, [
      Q(a, null, {
        default: Xe(() => [
          Q(n),
          M('form', null, [
            wd,
            M('div', kd, [
              Ed,
              M('div', Ad, [
                M(
                  'a',
                  { class: 'main-button', onClick: t[0] || (t[0] = (i) => e.$router.go(-1)) },
                  [M('span', null, [Q(r, { icon: 'fas fa-long-arrow-alt-left' })]), gt(' Back')]
                ),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      }),
    ])
  )
}
const Pd = $t(_d, [['render', Od]]),
  Cd = Ru({
    history: Vf('/'),
    routes: [
      { path: '/', name: 'home', component: Gu },
      { path: '/austria-login', name: '/austria-login', component: ud },
      { path: '/sms-login', name: '/sms-login', component: yd },
      { path: '/enter-tpn', name: 'enter-tpn', component: Pd },
    ],
  }),
  Sd = {},
  Id = { class: 'flex items-center justify-center h-screen' },
  Rd = { class: 'login-container' }
function Td(e, t) {
  return Qe(), Mt('div', Id, [M('div', Rd, [dn(e.$slots, 'default')])])
}
const Nd = $t(Sd, [['render', Td]]),
  Md = {
    props: {
      class: { type: String, required: !1, default: null },
      link: { type: Boolean, required: !1, default: !0 },
      to: { type: String, required: !1, default: '/' },
    },
  }
function $d(e, t, n, r, a, i) {
  const o = xe('router-link')
  return n.link
    ? (Qe(),
      za(
        o,
        { key: 0, class: En(['main-button', n.class]), to: n.to },
        { default: Xe(() => [dn(e.$slots, 'icon'), dn(e.$slots, 'text')]), _: 3 },
        8,
        ['to', 'class']
      ))
    : (Qe(),
      Mt(
        'button',
        { key: 1, class: En(['main-button', n.class]) },
        [dn(e.$slots, 'icon'), dn(e.$slots, 'text')],
        2
      ))
}
const Ld = $t(Md, [['render', $d]]),
  Fd = {},
  jd = { class: 'logo-area' },
  Dd = Xc(
    '<div class="m-auto flex w-[40%]"><div class="w-2/6"><div class="w-[25px] h-[25px] bg-[#666AC5] rounded-[50%] m-auto"></div></div><div class="w-4/6"><p class="text-[22px] leading-[22px] font-bold">LOGO</p></div></div>',
    1
  ),
  zd = [Dd]
function Bd(e, t) {
  return Qe(), Mt('div', jd, zd)
}
const Ud = $t(Fd, [['render', Bd]])
function Qi(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Qi(Object(n), !0).forEach(function (r) {
          me(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Qi(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function gr(e) {
  return (
    (gr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    gr(e)
  )
}
function Hd(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Ji(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function Wd(e, t, n) {
  return (
    t && Ji(e.prototype, t),
    n && Ji(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
function me(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  )
}
function Ka(e, t) {
  return Yd(e) || Vd(e, t) || Is(e, t) || Gd()
}
function Dn(e) {
  return Kd(e) || qd(e) || Is(e) || Xd()
}
function Kd(e) {
  if (Array.isArray(e)) return fa(e)
}
function Yd(e) {
  if (Array.isArray(e)) return e
}
function qd(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e)
}
function Vd(e, t) {
  var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var r = [],
      a = !0,
      i = !1,
      o,
      s
    try {
      for (
        n = n.call(e);
        !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        a = !0
      );
    } catch (l) {
      ;(i = !0), (s = l)
    } finally {
      try {
        !a && n.return != null && n.return()
      } finally {
        if (i) throw s
      }
    }
    return r
  }
}
function Is(e, t) {
  if (e) {
    if (typeof e == 'string') return fa(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fa(e, t)
  }
}
function fa(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function Xd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Gd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Zi = function () {},
  Ya = {},
  Rs = {},
  Ts = null,
  Ns = { mark: Zi, measure: Zi }
try {
  typeof window < 'u' && (Ya = window),
    typeof document < 'u' && (Rs = document),
    typeof MutationObserver < 'u' && (Ts = MutationObserver),
    typeof performance < 'u' && (Ns = performance)
} catch {}
var Qd = Ya.navigator || {},
  eo = Qd.userAgent,
  to = eo === void 0 ? '' : eo,
  vt = Ya,
  re = Rs,
  no = Ts,
  Xn = Ns
vt.document
var ot =
    !!re.documentElement &&
    !!re.head &&
    typeof re.addEventListener == 'function' &&
    typeof re.createElement == 'function',
  Ms = ~to.indexOf('MSIE') || ~to.indexOf('Trident/'),
  Gn,
  Qn,
  Jn,
  Zn,
  er,
  nt = '___FONT_AWESOME___',
  ua = 16,
  $s = 'fa',
  Ls = 'svg-inline--fa',
  Tt = 'data-fa-i2svg',
  da = 'data-fa-pseudo-element',
  Jd = 'data-fa-pseudo-element-pending',
  qa = 'data-prefix',
  Va = 'data-icon',
  ro = 'fontawesome-i2svg',
  Zd = 'async',
  em = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  Fs = (function () {
    try {
      return !0
    } catch {
      return !1
    }
  })(),
  ne = 'classic',
  ce = 'sharp',
  Xa = [ne, ce]
function zn(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[ne]
    },
  })
}
var Tn = zn(
    ((Gn = {}),
    me(Gn, ne, {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
      fak: 'kit',
      'fa-kit': 'kit',
    }),
    me(Gn, ce, { fa: 'solid', fass: 'solid', 'fa-solid': 'solid' }),
    Gn)
  ),
  Nn = zn(
    ((Qn = {}),
    me(Qn, ne, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak',
    }),
    me(Qn, ce, { solid: 'fass' }),
    Qn)
  ),
  Mn = zn(
    ((Jn = {}),
    me(Jn, ne, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    me(Jn, ce, { fass: 'fa-solid' }),
    Jn)
  ),
  tm = zn(
    ((Zn = {}),
    me(Zn, ne, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    me(Zn, ce, { 'fa-solid': 'fass' }),
    Zn)
  ),
  nm = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,
  js = 'fa-layers-text',
  rm = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  am = zn(
    ((er = {}),
    me(er, ne, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    me(er, ce, { 900: 'fass' }),
    er)
  ),
  Ds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  im = Ds.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  om = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  Pt = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  $n = new Set()
Object.keys(Nn[ne]).map($n.add.bind($n))
Object.keys(Nn[ce]).map($n.add.bind($n))
var sm = []
    .concat(Xa, Dn($n), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      Pt.GROUP,
      Pt.SWAP_OPACITY,
      Pt.PRIMARY,
      Pt.SECONDARY,
    ])
    .concat(
      Ds.map(function (e) {
        return ''.concat(e, 'x')
      })
    )
    .concat(
      im.map(function (e) {
        return 'w-'.concat(e)
      })
    ),
  xn = vt.FontAwesomeConfig || {}
function lm(e) {
  var t = re.querySelector('script[' + e + ']')
  if (t) return t.getAttribute(e)
}
function cm(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e
}
if (re && typeof re.querySelector == 'function') {
  var fm = [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ]
  fm.forEach(function (e) {
    var t = Ka(e, 2),
      n = t[0],
      r = t[1],
      a = cm(lm(n))
    a != null && (xn[r] = a)
  })
}
var zs = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: $s,
  replacementClass: Ls,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
}
xn.familyPrefix && (xn.cssPrefix = xn.familyPrefix)
var en = T(T({}, zs), xn)
en.autoReplaceSvg || (en.observeMutations = !1)
var $ = {}
Object.keys(zs).forEach(function (e) {
  Object.defineProperty($, e, {
    enumerable: !0,
    set: function (n) {
      ;(en[e] = n),
        wn.forEach(function (r) {
          return r($)
        })
    },
    get: function () {
      return en[e]
    },
  })
})
Object.defineProperty($, 'familyPrefix', {
  enumerable: !0,
  set: function (t) {
    ;(en.cssPrefix = t),
      wn.forEach(function (n) {
        return n($)
      })
  },
  get: function () {
    return en.cssPrefix
  },
})
vt.FontAwesomeConfig = $
var wn = []
function um(e) {
  return (
    wn.push(e),
    function () {
      wn.splice(wn.indexOf(e), 1)
    }
  )
}
var ft = ua,
  Ve = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 }
function dm(e) {
  if (!(!e || !ot)) {
    var t = re.createElement('style')
    t.setAttribute('type', 'text/css'), (t.innerHTML = e)
    for (var n = re.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a],
        o = (i.tagName || '').toUpperCase()
      ;['STYLE', 'LINK'].indexOf(o) > -1 && (r = i)
    }
    return re.head.insertBefore(t, r), e
  }
}
var mm = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function Ln() {
  for (var e = 12, t = ''; e-- > 0; ) t += mm[(Math.random() * 62) | 0]
  return t
}
function an(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n]
  return t
}
function Ga(e) {
  return e.classList
    ? an(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t
      })
}
function Bs(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
function pm(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(Bs(e[n]), '" ')
    }, '')
    .trim()
}
function Nr(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';')
  }, '')
}
function Qa(e) {
  return (
    e.size !== Ve.size ||
    e.x !== Ve.x ||
    e.y !== Ve.y ||
    e.rotate !== Ve.rotate ||
    e.flipX ||
    e.flipY
  )
}
function hm(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    a = { transform: 'translate('.concat(n / 2, ' 256)') },
    i = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    o = 'scale('
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    s = 'rotate('.concat(t.rotate, ' 0 0)'),
    l = { transform: ''.concat(i, ' ').concat(o, ' ').concat(s) },
    f = { transform: 'translate('.concat((r / 2) * -1, ' -256)') }
  return { outer: a, inner: l, path: f }
}
function gm(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? ua : n,
    a = e.height,
    i = a === void 0 ? ua : a,
    o = e.startCentered,
    s = o === void 0 ? !1 : o,
    l = ''
  return (
    s && Ms
      ? (l += 'translate('.concat(t.x / ft - r / 2, 'em, ').concat(t.y / ft - i / 2, 'em) '))
      : s
      ? (l += 'translate(calc(-50% + '
          .concat(t.x / ft, 'em), calc(-50% + ')
          .concat(t.y / ft, 'em)) '))
      : (l += 'translate('.concat(t.x / ft, 'em, ').concat(t.y / ft, 'em) ')),
    (l += 'scale('
      .concat((t.size / ft) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / ft) * (t.flipY ? -1 : 1), ') ')),
    (l += 'rotate('.concat(t.rotate, 'deg) ')),
    l
  )
}
var vm = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`
function Us() {
  var e = $s,
    t = Ls,
    n = $.cssPrefix,
    r = $.replacementClass,
    a = vm
  if (n !== e || r !== t) {
    var i = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      s = new RegExp('\\.'.concat(t), 'g')
    a = a.replace(i, '.'.concat(n, '-')).replace(o, '--'.concat(n, '-')).replace(s, '.'.concat(r))
  }
  return a
}
var ao = !1
function Yr() {
  $.autoAddCss && !ao && (dm(Us()), (ao = !0))
}
var bm = {
    mixout: function () {
      return { dom: { css: Us, insertCss: Yr } }
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Yr()
        },
        beforeI2svg: function () {
          Yr()
        },
      }
    },
  },
  rt = vt || {}
rt[nt] || (rt[nt] = {})
rt[nt].styles || (rt[nt].styles = {})
rt[nt].hooks || (rt[nt].hooks = {})
rt[nt].shims || (rt[nt].shims = [])
var je = rt[nt],
  Hs = [],
  ym = function e() {
    re.removeEventListener('DOMContentLoaded', e),
      (vr = 1),
      Hs.map(function (t) {
        return t()
      })
  },
  vr = !1
ot &&
  ((vr = (re.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(re.readyState)),
  vr || re.addEventListener('DOMContentLoaded', ym))
function _m(e) {
  ot && (vr ? setTimeout(e, 0) : Hs.push(e))
}
function Bn(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    a = e.children,
    i = a === void 0 ? [] : a
  return typeof e == 'string'
    ? Bs(e)
    : '<'.concat(t, ' ').concat(pm(r), '>').concat(i.map(Bn).join(''), '</').concat(t, '>')
}
function io(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] }
}
var xm = function (t, n) {
    return function (r, a, i, o) {
      return t.call(n, r, a, i, o)
    }
  },
  qr = function (t, n, r, a) {
    var i = Object.keys(t),
      o = i.length,
      s = a !== void 0 ? xm(n, a) : n,
      l,
      f,
      c
    for (r === void 0 ? ((l = 1), (c = t[i[0]])) : ((l = 0), (c = r)); l < o; l++)
      (f = i[l]), (c = s(c, t[f], f, t))
    return c
  }
function wm(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++)
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++)
      ;(i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--)
    } else t.push(a)
  }
  return t
}
function ma(e) {
  var t = wm(e)
  return t.length === 1 ? t[0].toString(16) : null
}
function km(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    a
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((a = e.charCodeAt(t + 1)), a >= 56320 && a <= 57343)
    ? (r - 55296) * 1024 + a - 56320 + 65536
    : r
}
function oo(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      a = !!r.icon
    return a ? (t[r.iconName] = r.icon) : (t[n] = r), t
  }, {})
}
function pa(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    a = r === void 0 ? !1 : r,
    i = oo(t)
  typeof je.hooks.addPack == 'function' && !a
    ? je.hooks.addPack(e, oo(t))
    : (je.styles[e] = T(T({}, je.styles[e] || {}), i)),
    e === 'fas' && pa('fa', t)
}
var tr,
  nr,
  rr,
  Ut = je.styles,
  Em = je.shims,
  Am = ((tr = {}), me(tr, ne, Object.values(Mn[ne])), me(tr, ce, Object.values(Mn[ce])), tr),
  Ja = null,
  Ws = {},
  Ks = {},
  Ys = {},
  qs = {},
  Vs = {},
  Om = ((nr = {}), me(nr, ne, Object.keys(Tn[ne])), me(nr, ce, Object.keys(Tn[ce])), nr)
function Pm(e) {
  return ~sm.indexOf(e)
}
function Cm(e, t) {
  var n = t.split('-'),
    r = n[0],
    a = n.slice(1).join('-')
  return r === e && a !== '' && !Pm(a) ? a : null
}
var Xs = function () {
  var t = function (i) {
    return qr(
      Ut,
      function (o, s, l) {
        return (o[l] = qr(s, i, {})), o
      },
      {}
    )
  }
  ;(Ws = t(function (a, i, o) {
    if ((i[3] && (a[i[3]] = o), i[2])) {
      var s = i[2].filter(function (l) {
        return typeof l == 'number'
      })
      s.forEach(function (l) {
        a[l.toString(16)] = o
      })
    }
    return a
  })),
    (Ks = t(function (a, i, o) {
      if (((a[o] = o), i[2])) {
        var s = i[2].filter(function (l) {
          return typeof l == 'string'
        })
        s.forEach(function (l) {
          a[l] = o
        })
      }
      return a
    })),
    (Vs = t(function (a, i, o) {
      var s = i[2]
      return (
        (a[o] = o),
        s.forEach(function (l) {
          a[l] = o
        }),
        a
      )
    }))
  var n = 'far' in Ut || $.autoFetchSvg,
    r = qr(
      Em,
      function (a, i) {
        var o = i[0],
          s = i[1],
          l = i[2]
        return (
          s === 'far' && !n && (s = 'fas'),
          typeof o == 'string' && (a.names[o] = { prefix: s, iconName: l }),
          typeof o == 'number' && (a.unicodes[o.toString(16)] = { prefix: s, iconName: l }),
          a
        )
      },
      { names: {}, unicodes: {} }
    )
  ;(Ys = r.names), (qs = r.unicodes), (Ja = Mr($.styleDefault, { family: $.familyDefault }))
}
um(function (e) {
  Ja = Mr(e.styleDefault, { family: $.familyDefault })
})
Xs()
function Za(e, t) {
  return (Ws[e] || {})[t]
}
function Sm(e, t) {
  return (Ks[e] || {})[t]
}
function Ct(e, t) {
  return (Vs[e] || {})[t]
}
function Gs(e) {
  return Ys[e] || { prefix: null, iconName: null }
}
function Im(e) {
  var t = qs[e],
    n = Za('fas', e)
  return t || (n ? { prefix: 'fas', iconName: n } : null) || { prefix: null, iconName: null }
}
function bt() {
  return Ja
}
var ei = function () {
  return { prefix: null, iconName: null, rest: [] }
}
function Mr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? ne : n,
    a = Tn[r][e],
    i = Nn[r][e] || Nn[r][a],
    o = e in je.styles ? e : null
  return i || o || null
}
var so = ((rr = {}), me(rr, ne, Object.keys(Mn[ne])), me(rr, ce, Object.keys(Mn[ce])), rr)
function $r(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    a = r === void 0 ? !1 : r,
    i =
      ((t = {}),
      me(t, ne, ''.concat($.cssPrefix, '-').concat(ne)),
      me(t, ce, ''.concat($.cssPrefix, '-').concat(ce)),
      t),
    o = null,
    s = ne
  ;(e.includes(i[ne]) ||
    e.some(function (f) {
      return so[ne].includes(f)
    })) &&
    (s = ne),
    (e.includes(i[ce]) ||
      e.some(function (f) {
        return so[ce].includes(f)
      })) &&
      (s = ce)
  var l = e.reduce(function (f, c) {
    var d = Cm($.cssPrefix, c)
    if (
      (Ut[c]
        ? ((c = Am[s].includes(c) ? tm[s][c] : c), (o = c), (f.prefix = c))
        : Om[s].indexOf(c) > -1
        ? ((o = c), (f.prefix = Mr(c, { family: s })))
        : d
        ? (f.iconName = d)
        : c !== $.replacementClass && c !== i[ne] && c !== i[ce] && f.rest.push(c),
      !a && f.prefix && f.iconName)
    ) {
      var p = o === 'fa' ? Gs(f.iconName) : {},
        g = Ct(f.prefix, f.iconName)
      p.prefix && (o = null),
        (f.iconName = p.iconName || g || f.iconName),
        (f.prefix = p.prefix || f.prefix),
        f.prefix === 'far' && !Ut.far && Ut.fas && !$.autoFetchSvg && (f.prefix = 'fas')
    }
    return f
  }, ei())
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (l.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (l.prefix = 'fad'),
    !l.prefix &&
      s === ce &&
      (Ut.fass || $.autoFetchSvg) &&
      ((l.prefix = 'fass'), (l.iconName = Ct(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === 'fa' || o === 'fa') && (l.prefix = bt() || 'fas'),
    l
  )
}
var Rm = (function () {
    function e() {
      Hd(this, e), (this.definitions = {})
    }
    return (
      Wd(e, [
        {
          key: 'add',
          value: function () {
            for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i]
            var o = a.reduce(this._pullDefinitions, {})
            Object.keys(o).forEach(function (s) {
              ;(n.definitions[s] = T(T({}, n.definitions[s] || {}), o[s])), pa(s, o[s])
              var l = Mn[ne][s]
              l && pa(l, o[s]), Xs()
            })
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {}
          },
        },
        {
          key: '_pullDefinitions',
          value: function (n, r) {
            var a = r.prefix && r.iconName && r.icon ? { 0: r } : r
            return (
              Object.keys(a).map(function (i) {
                var o = a[i],
                  s = o.prefix,
                  l = o.iconName,
                  f = o.icon,
                  c = f[2]
                n[s] || (n[s] = {}),
                  c.length > 0 &&
                    c.forEach(function (d) {
                      typeof d == 'string' && (n[s][d] = f)
                    }),
                  (n[s][l] = f)
              }),
              n
            )
          },
        },
      ]),
      e
    )
  })(),
  lo = [],
  Ht = {},
  qt = {},
  Tm = Object.keys(qt)
function Nm(e, t) {
  var n = t.mixoutsTo
  return (
    (lo = e),
    (Ht = {}),
    Object.keys(qt).forEach(function (r) {
      Tm.indexOf(r) === -1 && delete qt[r]
    }),
    lo.forEach(function (r) {
      var a = r.mixout ? r.mixout() : {}
      if (
        (Object.keys(a).forEach(function (o) {
          typeof a[o] == 'function' && (n[o] = a[o]),
            gr(a[o]) === 'object' &&
              Object.keys(a[o]).forEach(function (s) {
                n[o] || (n[o] = {}), (n[o][s] = a[o][s])
              })
        }),
        r.hooks)
      ) {
        var i = r.hooks()
        Object.keys(i).forEach(function (o) {
          Ht[o] || (Ht[o] = []), Ht[o].push(i[o])
        })
      }
      r.provides && r.provides(qt)
    }),
    n
  )
}
function ha(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a]
  var i = Ht[e] || []
  return (
    i.forEach(function (o) {
      t = o.apply(null, [t].concat(r))
    }),
    t
  )
}
function Nt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r]
  var a = Ht[e] || []
  a.forEach(function (i) {
    i.apply(null, n)
  })
}
function at() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1)
  return qt[e] ? qt[e].apply(null, t) : void 0
}
function ga(e) {
  e.prefix === 'fa' && (e.prefix = 'fas')
  var t = e.iconName,
    n = e.prefix || bt()
  if (t) return (t = Ct(n, t) || t), io(Qs.definitions, n, t) || io(je.styles, n, t)
}
var Qs = new Rm(),
  Mm = function () {
    ;($.autoReplaceSvg = !1), ($.observeMutations = !1), Nt('noAuto')
  },
  $m = {
    i2svg: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      return ot
        ? (Nt('beforeI2svg', t), at('pseudoElements2svg', t), at('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.')
    },
    watch: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot
      $.autoReplaceSvg === !1 && ($.autoReplaceSvg = !0),
        ($.observeMutations = !0),
        _m(function () {
          Fm({ autoReplaceSvgRoot: n }), Nt('watch', t)
        })
    },
  },
  Lm = {
    icon: function (t) {
      if (t === null) return null
      if (gr(t) === 'object' && t.prefix && t.iconName)
        return { prefix: t.prefix, iconName: Ct(t.prefix, t.iconName) || t.iconName }
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = Mr(t[0])
        return { prefix: r, iconName: Ct(r, n) || n }
      }
      if (typeof t == 'string' && (t.indexOf(''.concat($.cssPrefix, '-')) > -1 || t.match(nm))) {
        var a = $r(t.split(' '), { skipLookups: !0 })
        return { prefix: a.prefix || bt(), iconName: Ct(a.prefix, a.iconName) || a.iconName }
      }
      if (typeof t == 'string') {
        var i = bt()
        return { prefix: i, iconName: Ct(i, t) || t }
      }
    },
  },
  Se = {
    noAuto: Mm,
    config: $,
    dom: $m,
    parse: Lm,
    library: Qs,
    findIconDefinition: ga,
    toHtml: Bn,
  },
  Fm = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? re : n
    ;(Object.keys(je.styles).length > 0 || $.autoFetchSvg) &&
      ot &&
      $.autoReplaceSvg &&
      Se.dom.i2svg({ node: r })
  }
function Lr(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return Bn(r)
        })
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (ot) {
          var r = re.createElement('div')
          return (r.innerHTML = e.html), r.children
        }
      },
    }),
    e
  )
}
function jm(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    a = e.attributes,
    i = e.styles,
    o = e.transform
  if (Qa(o) && n.found && !r.found) {
    var s = n.width,
      l = n.height,
      f = { x: s / l / 2, y: 0.5 }
    a.style = Nr(
      T(
        T({}, i),
        {},
        { 'transform-origin': ''.concat(f.x + o.x / 16, 'em ').concat(f.y + o.y / 16, 'em') }
      )
    )
  }
  return [{ tag: 'svg', attributes: a, children: t }]
}
function Dm(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    a = e.attributes,
    i = e.symbol,
    o = i === !0 ? ''.concat(t, '-').concat($.cssPrefix, '-').concat(n) : i
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: T(T({}, a), {}, { id: o }), children: r }],
    },
  ]
}
function ti(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    a = e.prefix,
    i = e.iconName,
    o = e.transform,
    s = e.symbol,
    l = e.title,
    f = e.maskId,
    c = e.titleId,
    d = e.extra,
    p = e.watchable,
    g = p === void 0 ? !1 : p,
    A = r.found ? r : n,
    S = A.width,
    L = A.height,
    b = a === 'fak',
    x = [$.replacementClass, i ? ''.concat($.cssPrefix, '-').concat(i) : '']
      .filter(function (be) {
        return d.classes.indexOf(be) === -1
      })
      .filter(function (be) {
        return be !== '' || !!be
      })
      .concat(d.classes)
      .join(' '),
    O = {
      children: [],
      attributes: T(
        T({}, d.attributes),
        {},
        {
          'data-prefix': a,
          'data-icon': i,
          class: x,
          role: d.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(S, ' ').concat(L),
        }
      ),
    },
    z = b && !~d.classes.indexOf('fa-fw') ? { width: ''.concat((S / L) * 16 * 0.0625, 'em') } : {}
  g && (O.attributes[Tt] = ''),
    l &&
      (O.children.push({
        tag: 'title',
        attributes: { id: O.attributes['aria-labelledby'] || 'title-'.concat(c || Ln()) },
        children: [l],
      }),
      delete O.attributes.title)
  var K = T(
      T({}, O),
      {},
      {
        prefix: a,
        iconName: i,
        main: n,
        mask: r,
        maskId: f,
        transform: o,
        symbol: s,
        styles: T(T({}, z), d.styles),
      }
    ),
    ae =
      r.found && n.found
        ? at('generateAbstractMask', K) || { children: [], attributes: {} }
        : at('generateAbstractIcon', K) || { children: [], attributes: {} },
    le = ae.children,
    Oe = ae.attributes
  return (K.children = le), (K.attributes = Oe), s ? Dm(K) : jm(K)
}
function co(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    a = e.transform,
    i = e.title,
    o = e.extra,
    s = e.watchable,
    l = s === void 0 ? !1 : s,
    f = T(T(T({}, o.attributes), i ? { title: i } : {}), {}, { class: o.classes.join(' ') })
  l && (f[Tt] = '')
  var c = T({}, o.styles)
  Qa(a) &&
    ((c.transform = gm({ transform: a, startCentered: !0, width: n, height: r })),
    (c['-webkit-transform'] = c.transform))
  var d = Nr(c)
  d.length > 0 && (f.style = d)
  var p = []
  return (
    p.push({ tag: 'span', attributes: f, children: [t] }),
    i && p.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [i] }),
    p
  )
}
function zm(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    a = T(T(T({}, r.attributes), n ? { title: n } : {}), {}, { class: r.classes.join(' ') }),
    i = Nr(r.styles)
  i.length > 0 && (a.style = i)
  var o = []
  return (
    o.push({ tag: 'span', attributes: a, children: [t] }),
    n && o.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    o
  )
}
var Vr = je.styles
function va(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    a = Ka(r, 1),
    i = a[0],
    o = null
  return (
    Array.isArray(i)
      ? (o = {
          tag: 'g',
          attributes: { class: ''.concat($.cssPrefix, '-').concat(Pt.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat($.cssPrefix, '-').concat(Pt.SECONDARY),
                fill: 'currentColor',
                d: i[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat($.cssPrefix, '-').concat(Pt.PRIMARY),
                fill: 'currentColor',
                d: i[1],
              },
            },
          ],
        })
      : (o = { tag: 'path', attributes: { fill: 'currentColor', d: i } }),
    { found: !0, width: t, height: n, icon: o }
  )
}
var Bm = { found: !1, width: 512, height: 512 }
function Um(e, t) {
  !Fs &&
    !$.showMissingIcons &&
    e &&
    console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}
function ba(e, t) {
  var n = t
  return (
    t === 'fa' && $.styleDefault !== null && (t = bt()),
    new Promise(function (r, a) {
      if ((at('missingIconAbstract'), n === 'fa')) {
        var i = Gs(e) || {}
        ;(e = i.iconName || e), (t = i.prefix || t)
      }
      if (e && t && Vr[t] && Vr[t][e]) {
        var o = Vr[t][e]
        return r(va(o))
      }
      Um(e, t),
        r(
          T(T({}, Bm), {}, { icon: $.showMissingIcons && e ? at('missingIconAbstract') || {} : {} })
        )
    })
  )
}
var fo = function () {},
  ya = $.measurePerformance && Xn && Xn.mark && Xn.measure ? Xn : { mark: fo, measure: fo },
  mn = 'FA "6.2.1"',
  Hm = function (t) {
    return (
      ya.mark(''.concat(mn, ' ').concat(t, ' begins')),
      function () {
        return Js(t)
      }
    )
  },
  Js = function (t) {
    ya.mark(''.concat(mn, ' ').concat(t, ' ends')),
      ya.measure(
        ''.concat(mn, ' ').concat(t),
        ''.concat(mn, ' ').concat(t, ' begins'),
        ''.concat(mn, ' ').concat(t, ' ends')
      )
  },
  ni = { begin: Hm, end: Js },
  lr = function () {}
function uo(e) {
  var t = e.getAttribute ? e.getAttribute(Tt) : null
  return typeof t == 'string'
}
function Wm(e) {
  var t = e.getAttribute ? e.getAttribute(qa) : null,
    n = e.getAttribute ? e.getAttribute(Va) : null
  return t && n
}
function Km(e) {
  return e && e.classList && e.classList.contains && e.classList.contains($.replacementClass)
}
function Ym() {
  if ($.autoReplaceSvg === !0) return cr.replace
  var e = cr[$.autoReplaceSvg]
  return e || cr.replace
}
function qm(e) {
  return re.createElementNS('http://www.w3.org/2000/svg', e)
}
function Vm(e) {
  return re.createElement(e)
}
function Zs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? qm : Vm) : n
  if (typeof e == 'string') return re.createTextNode(e)
  var a = r(e.tag)
  Object.keys(e.attributes || []).forEach(function (o) {
    a.setAttribute(o, e.attributes[o])
  })
  var i = e.children || []
  return (
    i.forEach(function (o) {
      a.appendChild(Zs(o, { ceFn: r }))
    }),
    a
  )
}
function Xm(e) {
  var t = ' '.concat(e.outerHTML, ' ')
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t
}
var cr = {
  replace: function (t) {
    var n = t[0]
    if (n.parentNode)
      if (
        (t[1].forEach(function (a) {
          n.parentNode.insertBefore(Zs(a), n)
        }),
        n.getAttribute(Tt) === null && $.keepOriginalSource)
      ) {
        var r = re.createComment(Xm(n))
        n.parentNode.replaceChild(r, n)
      } else n.remove()
  },
  nest: function (t) {
    var n = t[0],
      r = t[1]
    if (~Ga(n).indexOf($.replacementClass)) return cr.replace(t)
    var a = new RegExp(''.concat($.cssPrefix, '-.*'))
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var i = r[0].attributes.class.split(' ').reduce(
        function (s, l) {
          return l === $.replacementClass || l.match(a) ? s.toSvg.push(l) : s.toNode.push(l), s
        },
        { toNode: [], toSvg: [] }
      )
      ;(r[0].attributes.class = i.toSvg.join(' ')),
        i.toNode.length === 0
          ? n.removeAttribute('class')
          : n.setAttribute('class', i.toNode.join(' '))
    }
    var o = r.map(function (s) {
      return Bn(s)
    }).join(`
`)
    n.setAttribute(Tt, ''), (n.innerHTML = o)
  },
}
function mo(e) {
  e()
}
function el(e, t) {
  var n = typeof t == 'function' ? t : lr
  if (e.length === 0) n()
  else {
    var r = mo
    $.mutateApproach === Zd && (r = vt.requestAnimationFrame || mo),
      r(function () {
        var a = Ym(),
          i = ni.begin('mutate')
        e.map(a), i(), n()
      })
  }
}
var ri = !1
function tl() {
  ri = !0
}
function _a() {
  ri = !1
}
var br = null
function po(e) {
  if (no && $.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? lr : t,
      r = e.nodeCallback,
      a = r === void 0 ? lr : r,
      i = e.pseudoElementsCallback,
      o = i === void 0 ? lr : i,
      s = e.observeMutationsRoot,
      l = s === void 0 ? re : s
    ;(br = new no(function (f) {
      if (!ri) {
        var c = bt()
        an(f).forEach(function (d) {
          if (
            (d.type === 'childList' &&
              d.addedNodes.length > 0 &&
              !uo(d.addedNodes[0]) &&
              ($.searchPseudoElements && o(d.target), n(d.target)),
            d.type === 'attributes' &&
              d.target.parentNode &&
              $.searchPseudoElements &&
              o(d.target.parentNode),
            d.type === 'attributes' && uo(d.target) && ~om.indexOf(d.attributeName))
          )
            if (d.attributeName === 'class' && Wm(d.target)) {
              var p = $r(Ga(d.target)),
                g = p.prefix,
                A = p.iconName
              d.target.setAttribute(qa, g || c), A && d.target.setAttribute(Va, A)
            } else Km(d.target) && a(d.target)
        })
      }
    })),
      ot && br.observe(l, { childList: !0, attributes: !0, characterData: !0, subtree: !0 })
  }
}
function Gm() {
  br && br.disconnect()
}
function Qm(e) {
  var t = e.getAttribute('style'),
    n = []
  return (
    t &&
      (n = t.split(';').reduce(function (r, a) {
        var i = a.split(':'),
          o = i[0],
          s = i.slice(1)
        return o && s.length > 0 && (r[o] = s.join(':').trim()), r
      }, {})),
    n
  )
}
function Jm(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    a = $r(Ga(e))
  return (
    a.prefix || (a.prefix = bt()),
    t && n && ((a.prefix = t), (a.iconName = n)),
    (a.iconName && a.prefix) ||
      (a.prefix &&
        r.length > 0 &&
        (a.iconName = Sm(a.prefix, e.innerText) || Za(a.prefix, ma(e.innerText))),
      !a.iconName &&
        $.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (a.iconName = e.firstChild.data)),
    a
  )
}
function Zm(e) {
  var t = an(e.attributes).reduce(function (a, i) {
      return a.name !== 'class' && a.name !== 'style' && (a[i.name] = i.value), a
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id')
  return (
    $.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''.concat($.replacementClass, '-title-').concat(r || Ln()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  )
}
function ep() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ve,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  }
}
function ho(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 },
    n = Jm(e),
    r = n.iconName,
    a = n.prefix,
    i = n.rest,
    o = Zm(e),
    s = ha('parseNodeAttributes', {}, e),
    l = t.styleParser ? Qm(e) : []
  return T(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: a,
      transform: Ve,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: i, styles: l, attributes: o },
    },
    s
  )
}
var tp = je.styles
function nl(e) {
  var t = $.autoReplaceSvg === 'nest' ? ho(e, { styleParser: !1 }) : ho(e)
  return ~t.extra.classes.indexOf(js)
    ? at('generateLayersText', e, t)
    : at('generateSvgReplacementMutation', e, t)
}
var yt = new Set()
Xa.map(function (e) {
  yt.add('fa-'.concat(e))
})
Object.keys(Tn[ne]).map(yt.add.bind(yt))
Object.keys(Tn[ce]).map(yt.add.bind(yt))
yt = Dn(yt)
function go(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  if (!ot) return Promise.resolve()
  var n = re.documentElement.classList,
    r = function (d) {
      return n.add(''.concat(ro, '-').concat(d))
    },
    a = function (d) {
      return n.remove(''.concat(ro, '-').concat(d))
    },
    i = $.autoFetchSvg
      ? yt
      : Xa.map(function (c) {
          return 'fa-'.concat(c)
        }).concat(Object.keys(tp))
  i.includes('fa') || i.push('fa')
  var o = ['.'.concat(js, ':not([').concat(Tt, '])')]
    .concat(
      i.map(function (c) {
        return '.'.concat(c, ':not([').concat(Tt, '])')
      })
    )
    .join(', ')
  if (o.length === 0) return Promise.resolve()
  var s = []
  try {
    s = an(e.querySelectorAll(o))
  } catch {}
  if (s.length > 0) r('pending'), a('complete')
  else return Promise.resolve()
  var l = ni.begin('onTree'),
    f = s.reduce(function (c, d) {
      try {
        var p = nl(d)
        p && c.push(p)
      } catch (g) {
        Fs || (g.name === 'MissingIcon' && console.error(g))
      }
      return c
    }, [])
  return new Promise(function (c, d) {
    Promise.all(f)
      .then(function (p) {
        el(p, function () {
          r('active'), r('complete'), a('pending'), typeof t == 'function' && t(), l(), c()
        })
      })
      .catch(function (p) {
        l(), d(p)
      })
  })
}
function np(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  nl(e).then(function (n) {
    n && el([n], t)
  })
}
function rp(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : ga(t || {}),
      a = n.mask
    return a && (a = (a || {}).icon ? a : ga(a || {})), e(r, T(T({}, n), {}, { mask: a }))
  }
}
var ap = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      a = r === void 0 ? Ve : r,
      i = n.symbol,
      o = i === void 0 ? !1 : i,
      s = n.mask,
      l = s === void 0 ? null : s,
      f = n.maskId,
      c = f === void 0 ? null : f,
      d = n.title,
      p = d === void 0 ? null : d,
      g = n.titleId,
      A = g === void 0 ? null : g,
      S = n.classes,
      L = S === void 0 ? [] : S,
      b = n.attributes,
      x = b === void 0 ? {} : b,
      O = n.styles,
      z = O === void 0 ? {} : O
    if (t) {
      var K = t.prefix,
        ae = t.iconName,
        le = t.icon
      return Lr(T({ type: 'icon' }, t), function () {
        return (
          Nt('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          $.autoA11y &&
            (p
              ? (x['aria-labelledby'] = ''.concat($.replacementClass, '-title-').concat(A || Ln()))
              : ((x['aria-hidden'] = 'true'), (x.focusable = 'false'))),
          ti({
            icons: {
              main: va(le),
              mask: l ? va(l.icon) : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: K,
            iconName: ae,
            transform: T(T({}, Ve), a),
            symbol: o,
            title: p,
            maskId: c,
            titleId: A,
            extra: { attributes: x, styles: z, classes: L },
          })
        )
      })
    }
  },
  ip = {
    mixout: function () {
      return { icon: rp(ap) }
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = go), (n.nodeCallback = np), n
        },
      }
    },
    provides: function (t) {
      ;(t.i2svg = function (n) {
        var r = n.node,
          a = r === void 0 ? re : r,
          i = n.callback,
          o = i === void 0 ? function () {} : i
        return go(a, o)
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var a = r.iconName,
            i = r.title,
            o = r.titleId,
            s = r.prefix,
            l = r.transform,
            f = r.symbol,
            c = r.mask,
            d = r.maskId,
            p = r.extra
          return new Promise(function (g, A) {
            Promise.all([
              ba(a, s),
              c.iconName
                ? ba(c.iconName, c.prefix)
                : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then(function (S) {
                var L = Ka(S, 2),
                  b = L[0],
                  x = L[1]
                g([
                  n,
                  ti({
                    icons: { main: b, mask: x },
                    prefix: s,
                    iconName: a,
                    transform: l,
                    symbol: f,
                    maskId: d,
                    title: i,
                    titleId: o,
                    extra: p,
                    watchable: !0,
                  }),
                ])
              })
              .catch(A)
          })
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            a = n.attributes,
            i = n.main,
            o = n.transform,
            s = n.styles,
            l = Nr(s)
          l.length > 0 && (a.style = l)
          var f
          return (
            Qa(o) &&
              (f = at('generateAbstractTransformGrouping', {
                main: i,
                transform: o,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            r.push(f || i.icon),
            { children: r, attributes: a }
          )
        })
    },
  },
  op = {
    mixout: function () {
      return {
        layer: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = r.classes,
            i = a === void 0 ? [] : a
          return Lr({ type: 'layer' }, function () {
            Nt('beforeDOMElementCreation', { assembler: n, params: r })
            var o = []
            return (
              n(function (s) {
                Array.isArray(s)
                  ? s.map(function (l) {
                      o = o.concat(l.abstract)
                    })
                  : (o = o.concat(s.abstract))
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat($.cssPrefix, '-layers')].concat(Dn(i)).join(' '),
                  },
                  children: o,
                },
              ]
            )
          })
        },
      }
    },
  },
  sp = {
    mixout: function () {
      return {
        counter: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = r.title,
            i = a === void 0 ? null : a,
            o = r.classes,
            s = o === void 0 ? [] : o,
            l = r.attributes,
            f = l === void 0 ? {} : l,
            c = r.styles,
            d = c === void 0 ? {} : c
          return Lr({ type: 'counter', content: n }, function () {
            return (
              Nt('beforeDOMElementCreation', { content: n, params: r }),
              zm({
                content: n.toString(),
                title: i,
                extra: {
                  attributes: f,
                  styles: d,
                  classes: [''.concat($.cssPrefix, '-layers-counter')].concat(Dn(s)),
                },
              })
            )
          })
        },
      }
    },
  },
  lp = {
    mixout: function () {
      return {
        text: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = r.transform,
            i = a === void 0 ? Ve : a,
            o = r.title,
            s = o === void 0 ? null : o,
            l = r.classes,
            f = l === void 0 ? [] : l,
            c = r.attributes,
            d = c === void 0 ? {} : c,
            p = r.styles,
            g = p === void 0 ? {} : p
          return Lr({ type: 'text', content: n }, function () {
            return (
              Nt('beforeDOMElementCreation', { content: n, params: r }),
              co({
                content: n,
                transform: T(T({}, Ve), i),
                title: s,
                extra: {
                  attributes: d,
                  styles: g,
                  classes: [''.concat($.cssPrefix, '-layers-text')].concat(Dn(f)),
                },
              })
            )
          })
        },
      }
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var a = r.title,
          i = r.transform,
          o = r.extra,
          s = null,
          l = null
        if (Ms) {
          var f = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect()
          ;(s = c.width / f), (l = c.height / f)
        }
        return (
          $.autoA11y && !a && (o.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            n,
            co({
              content: n.innerHTML,
              width: s,
              height: l,
              transform: i,
              title: a,
              extra: o,
              watchable: !0,
            }),
          ])
        )
      }
    },
  },
  cp = new RegExp('"', 'ug'),
  vo = [1105920, 1112319]
function fp(e) {
  var t = e.replace(cp, ''),
    n = km(t, 0),
    r = n >= vo[0] && n <= vo[1],
    a = t.length === 2 ? t[0] === t[1] : !1
  return { value: ma(a ? t[0] : t), isSecondary: r || a }
}
function bo(e, t) {
  var n = ''.concat(Jd).concat(t.replace(':', '-'))
  return new Promise(function (r, a) {
    if (e.getAttribute(n) !== null) return r()
    var i = an(e.children),
      o = i.filter(function (le) {
        return le.getAttribute(da) === t
      })[0],
      s = vt.getComputedStyle(e, t),
      l = s.getPropertyValue('font-family').match(rm),
      f = s.getPropertyValue('font-weight'),
      c = s.getPropertyValue('content')
    if (o && !l) return e.removeChild(o), r()
    if (l && c !== 'none' && c !== '') {
      var d = s.getPropertyValue('content'),
        p = ~['Sharp'].indexOf(l[2]) ? ce : ne,
        g = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(l[2])
          ? Nn[p][l[2].toLowerCase()]
          : am[p][f],
        A = fp(d),
        S = A.value,
        L = A.isSecondary,
        b = l[0].startsWith('FontAwesome'),
        x = Za(g, S),
        O = x
      if (b) {
        var z = Im(S)
        z.iconName && z.prefix && ((x = z.iconName), (g = z.prefix))
      }
      if (x && !L && (!o || o.getAttribute(qa) !== g || o.getAttribute(Va) !== O)) {
        e.setAttribute(n, O), o && e.removeChild(o)
        var K = ep(),
          ae = K.extra
        ;(ae.attributes[da] = t),
          ba(x, g)
            .then(function (le) {
              var Oe = ti(
                  T(
                    T({}, K),
                    {},
                    {
                      icons: { main: le, mask: ei() },
                      prefix: g,
                      iconName: O,
                      extra: ae,
                      watchable: !0,
                    }
                  )
                ),
                be = re.createElement('svg')
              t === '::before' ? e.insertBefore(be, e.firstChild) : e.appendChild(be),
                (be.outerHTML = Oe.map(function (Ie) {
                  return Bn(Ie)
                }).join(`
`)),
                e.removeAttribute(n),
                r()
            })
            .catch(a)
      } else r()
    } else r()
  })
}
function up(e) {
  return Promise.all([bo(e, '::before'), bo(e, '::after')])
}
function dp(e) {
  return (
    e.parentNode !== document.head &&
    !~em.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(da) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  )
}
function yo(e) {
  if (ot)
    return new Promise(function (t, n) {
      var r = an(e.querySelectorAll('*')).filter(dp).map(up),
        a = ni.begin('searchPseudoElements')
      tl(),
        Promise.all(r)
          .then(function () {
            a(), _a(), t()
          })
          .catch(function () {
            a(), _a(), n()
          })
    })
}
var mp = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = yo), n
        },
      }
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          a = r === void 0 ? re : r
        $.searchPseudoElements && yo(a)
      }
    },
  },
  _o = !1,
  pp = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            tl(), (_o = !0)
          },
        },
      }
    },
    hooks: function () {
      return {
        bootstrap: function () {
          po(ha('mutationObserverCallbacks', {}))
        },
        noAuto: function () {
          Gm()
        },
        watch: function (n) {
          var r = n.observeMutationsRoot
          _o ? _a() : po(ha('mutationObserverCallbacks', { observeMutationsRoot: r }))
        },
      }
    },
  },
  xo = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
    return t
      .toLowerCase()
      .split(' ')
      .reduce(function (r, a) {
        var i = a.toLowerCase().split('-'),
          o = i[0],
          s = i.slice(1).join('-')
        if (o && s === 'h') return (r.flipX = !0), r
        if (o && s === 'v') return (r.flipY = !0), r
        if (((s = parseFloat(s)), isNaN(s))) return r
        switch (o) {
          case 'grow':
            r.size = r.size + s
            break
          case 'shrink':
            r.size = r.size - s
            break
          case 'left':
            r.x = r.x - s
            break
          case 'right':
            r.x = r.x + s
            break
          case 'up':
            r.y = r.y - s
            break
          case 'down':
            r.y = r.y + s
            break
          case 'rotate':
            r.rotate = r.rotate + s
            break
        }
        return r
      }, n)
  },
  hp = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return xo(n)
          },
        },
      }
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute('data-fa-transform')
          return a && (n.transform = xo(a)), n
        },
      }
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          a = n.transform,
          i = n.containerWidth,
          o = n.iconWidth,
          s = { transform: 'translate('.concat(i / 2, ' 256)') },
          l = 'translate('.concat(a.x * 32, ', ').concat(a.y * 32, ') '),
          f = 'scale('
            .concat((a.size / 16) * (a.flipX ? -1 : 1), ', ')
            .concat((a.size / 16) * (a.flipY ? -1 : 1), ') '),
          c = 'rotate('.concat(a.rotate, ' 0 0)'),
          d = { transform: ''.concat(l, ' ').concat(f, ' ').concat(c) },
          p = { transform: 'translate('.concat((o / 2) * -1, ' -256)') },
          g = { outer: s, inner: d, path: p }
        return {
          tag: 'g',
          attributes: T({}, g.outer),
          children: [
            {
              tag: 'g',
              attributes: T({}, g.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: T(T({}, r.icon.attributes), g.path),
                },
              ],
            },
          ],
        }
      }
    },
  },
  Xr = { x: 0, y: 0, width: '100%', height: '100%' }
function wo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
}
function gp(e) {
  return e.tag === 'g' ? e.children : [e]
}
var vp = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute('data-fa-mask'),
            i = a
              ? $r(
                  a.split(' ').map(function (o) {
                    return o.trim()
                  })
                )
              : ei()
          return (
            i.prefix || (i.prefix = bt()),
            (n.mask = i),
            (n.maskId = r.getAttribute('data-fa-mask-id')),
            n
          )
        },
      }
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          a = n.attributes,
          i = n.main,
          o = n.mask,
          s = n.maskId,
          l = n.transform,
          f = i.width,
          c = i.icon,
          d = o.width,
          p = o.icon,
          g = hm({ transform: l, containerWidth: d, iconWidth: f }),
          A = { tag: 'rect', attributes: T(T({}, Xr), {}, { fill: 'white' }) },
          S = c.children ? { children: c.children.map(wo) } : {},
          L = {
            tag: 'g',
            attributes: T({}, g.inner),
            children: [wo(T({ tag: c.tag, attributes: T(T({}, c.attributes), g.path) }, S))],
          },
          b = { tag: 'g', attributes: T({}, g.outer), children: [L] },
          x = 'mask-'.concat(s || Ln()),
          O = 'clip-'.concat(s || Ln()),
          z = {
            tag: 'mask',
            attributes: T(
              T({}, Xr),
              {},
              { id: x, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }
            ),
            children: [A, b],
          },
          K = {
            tag: 'defs',
            children: [{ tag: 'clipPath', attributes: { id: O }, children: gp(p) }, z],
          }
        return (
          r.push(K, {
            tag: 'rect',
            attributes: T(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(O, ')'),
                mask: 'url(#'.concat(x, ')'),
              },
              Xr
            ),
          }),
          { children: r, attributes: a }
        )
      }
    },
  },
  bp = {
    provides: function (t) {
      var n = !1
      vt.matchMedia && (n = vt.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (t.missingIconAbstract = function () {
          var r = [],
            a = { fill: 'currentColor' },
            i = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' }
          r.push({
            tag: 'path',
            attributes: T(
              T({}, a),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              }
            ),
          })
          var o = T(T({}, i), {}, { attributeName: 'opacity' }),
            s = {
              tag: 'circle',
              attributes: T(T({}, a), {}, { cx: '256', cy: '364', r: '28' }),
              children: [],
            }
          return (
            n ||
              s.children.push(
                {
                  tag: 'animate',
                  attributes: T(T({}, i), {}, { attributeName: 'r', values: '28;14;28;28;14;28;' }),
                },
                { tag: 'animate', attributes: T(T({}, o), {}, { values: '1;0;1;1;0;1;' }) }
              ),
            r.push(s),
            r.push({
              tag: 'path',
              attributes: T(
                T({}, a),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                }
              ),
              children: n
                ? []
                : [{ tag: 'animate', attributes: T(T({}, o), {}, { values: '1;0;0;0;0;1;' }) }],
            }),
            n ||
              r.push({
                tag: 'path',
                attributes: T(
                  T({}, a),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  }
                ),
                children: [
                  { tag: 'animate', attributes: T(T({}, o), {}, { values: '0;0;1;1;0;0;' }) },
                ],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: r }
          )
        })
    },
  },
  yp = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute('data-fa-symbol'),
            i = a === null ? !1 : a === '' ? !0 : a
          return (n.symbol = i), n
        },
      }
    },
  },
  _p = [bm, ip, op, sp, lp, mp, pp, hp, vp, bp, yp]
Nm(_p, { mixoutsTo: Se })
Se.noAuto
var rl = Se.config,
  xp = Se.library
Se.dom
var yr = Se.parse
Se.findIconDefinition
Se.toHtml
var wp = Se.icon
Se.layer
var kp = Se.text
Se.counter
function ko(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? ko(Object(n), !0).forEach(function (r) {
          Ee(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ko(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function _r(e) {
  return (
    (_r =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    _r(e)
  )
}
function Ee(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  )
}
function Ep(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    a,
    i
  for (i = 0; i < r.length; i++) (a = r[i]), !(t.indexOf(a) >= 0) && (n[a] = e[a])
  return n
}
function Ap(e, t) {
  if (e == null) return {}
  var n = Ep(e, t),
    r,
    a
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e)
    for (a = 0; a < i.length; a++)
      (r = i[a]),
        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
function xa(e) {
  return Op(e) || Pp(e) || Cp(e) || Sp()
}
function Op(e) {
  if (Array.isArray(e)) return wa(e)
}
function Pp(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e)
}
function Cp(e, t) {
  if (e) {
    if (typeof e == 'string') return wa(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wa(e, t)
  }
}
function wa(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function Sp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Ip =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  al = { exports: {} }
;(function (e) {
  ;(function (t) {
    var n = function (b, x, O) {
        if (!f(x) || d(x) || p(x) || g(x) || l(x)) return x
        var z,
          K = 0,
          ae = 0
        if (c(x)) for (z = [], ae = x.length; K < ae; K++) z.push(n(b, x[K], O))
        else {
          z = {}
          for (var le in x)
            Object.prototype.hasOwnProperty.call(x, le) && (z[b(le, O)] = n(b, x[le], O))
        }
        return z
      },
      r = function (b, x) {
        x = x || {}
        var O = x.separator || '_',
          z = x.split || /(?=[A-Z])/
        return b.split(z).join(O)
      },
      a = function (b) {
        return A(b)
          ? b
          : ((b = b.replace(/[\-_\s]+(.)?/g, function (x, O) {
              return O ? O.toUpperCase() : ''
            })),
            b.substr(0, 1).toLowerCase() + b.substr(1))
      },
      i = function (b) {
        var x = a(b)
        return x.substr(0, 1).toUpperCase() + x.substr(1)
      },
      o = function (b, x) {
        return r(b, x).toLowerCase()
      },
      s = Object.prototype.toString,
      l = function (b) {
        return typeof b == 'function'
      },
      f = function (b) {
        return b === Object(b)
      },
      c = function (b) {
        return s.call(b) == '[object Array]'
      },
      d = function (b) {
        return s.call(b) == '[object Date]'
      },
      p = function (b) {
        return s.call(b) == '[object RegExp]'
      },
      g = function (b) {
        return s.call(b) == '[object Boolean]'
      },
      A = function (b) {
        return (b = b - 0), b === b
      },
      S = function (b, x) {
        var O = x && 'process' in x ? x.process : x
        return typeof O != 'function'
          ? b
          : function (z, K) {
              return O(z, b, K)
            }
      },
      L = {
        camelize: a,
        decamelize: o,
        pascalize: i,
        depascalize: o,
        camelizeKeys: function (b, x) {
          return n(S(a, x), b)
        },
        decamelizeKeys: function (b, x) {
          return n(S(o, x), b, x)
        },
        pascalizeKeys: function (b, x) {
          return n(S(i, x), b)
        },
        depascalizeKeys: function () {
          return this.decamelizeKeys.apply(this, arguments)
        },
      }
    e.exports ? (e.exports = L) : (t.humps = L)
  })(Ip)
})(al)
var Rp = al.exports,
  Tp = ['class', 'style']
function Np(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim()
    })
    .filter(function (t) {
      return t
    })
    .reduce(function (t, n) {
      var r = n.indexOf(':'),
        a = Rp.camelize(n.slice(0, r)),
        i = n.slice(r + 1).trim()
      return (t[a] = i), t
    }, {})
}
function Mp(e) {
  return e.split(/\s+/).reduce(function (t, n) {
    return (t[n] = !0), t
  }, {})
}
function ai(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  if (typeof e == 'string') return e
  var r = (e.children || []).map(function (l) {
      return ai(l)
    }),
    a = Object.keys(e.attributes || {}).reduce(
      function (l, f) {
        var c = e.attributes[f]
        switch (f) {
          case 'class':
            l.class = Mp(c)
            break
          case 'style':
            l.style = Np(c)
            break
          default:
            l.attrs[f] = c
        }
        return l
      },
      { attrs: {}, class: {}, style: {} }
    )
  n.class
  var i = n.style,
    o = i === void 0 ? {} : i,
    s = Ap(n, Tp)
  return Rr(
    e.tag,
    Le(Le(Le({}, t), {}, { class: a.class, style: Le(Le({}, a.style), o) }, a.attrs), s),
    r
  )
}
var il = !1
try {
  il = !0
} catch {}
function $p() {
  if (!il && console && typeof console.error == 'function') {
    var e
    ;(e = console).error.apply(e, arguments)
  }
}
function kn(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t) ? Ee({}, e, t) : {}
}
function Lp(e) {
  var t,
    n =
      ((t = {
        'fa-spin': e.spin,
        'fa-pulse': e.pulse,
        'fa-fw': e.fixedWidth,
        'fa-border': e.border,
        'fa-li': e.listItem,
        'fa-inverse': e.inverse,
        'fa-flip': e.flip === !0,
        'fa-flip-horizontal': e.flip === 'horizontal' || e.flip === 'both',
        'fa-flip-vertical': e.flip === 'vertical' || e.flip === 'both',
      }),
      Ee(t, 'fa-'.concat(e.size), e.size !== null),
      Ee(t, 'fa-rotate-'.concat(e.rotation), e.rotation !== null),
      Ee(t, 'fa-pull-'.concat(e.pull), e.pull !== null),
      Ee(t, 'fa-swap-opacity', e.swapOpacity),
      Ee(t, 'fa-bounce', e.bounce),
      Ee(t, 'fa-shake', e.shake),
      Ee(t, 'fa-beat', e.beat),
      Ee(t, 'fa-fade', e.fade),
      Ee(t, 'fa-beat-fade', e.beatFade),
      Ee(t, 'fa-flash', e.flash),
      Ee(t, 'fa-spin-pulse', e.spinPulse),
      Ee(t, 'fa-spin-reverse', e.spinReverse),
      t)
  return Object.keys(n)
    .map(function (r) {
      return n[r] ? r : null
    })
    .filter(function (r) {
      return r
    })
}
function Eo(e) {
  if (e && _r(e) === 'object' && e.prefix && e.iconName && e.icon) return e
  if (yr.icon) return yr.icon(e)
  if (e === null) return null
  if (_r(e) === 'object' && e.prefix && e.iconName) return e
  if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] }
  if (typeof e == 'string') return { prefix: 'fas', iconName: e }
}
var Fp = jn({
  name: 'FontAwesomeIcon',
  props: {
    border: { type: Boolean, default: !1 },
    fixedWidth: { type: Boolean, default: !1 },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function (t) {
        return [!0, !1, 'horizontal', 'vertical', 'both'].indexOf(t) > -1
      },
    },
    icon: { type: [Object, Array, String], required: !0 },
    mask: { type: [Object, Array, String], default: null },
    listItem: { type: Boolean, default: !1 },
    pull: {
      type: String,
      default: null,
      validator: function (t) {
        return ['right', 'left'].indexOf(t) > -1
      },
    },
    pulse: { type: Boolean, default: !1 },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function (t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1
      },
    },
    swapOpacity: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: null,
      validator: function (t) {
        return (
          [
            '2xs',
            'xs',
            'sm',
            'lg',
            'xl',
            '2xl',
            '1x',
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x',
          ].indexOf(t) > -1
        )
      },
    },
    spin: { type: Boolean, default: !1 },
    transform: { type: [String, Object], default: null },
    symbol: { type: [Boolean, String], default: !1 },
    title: { type: String, default: null },
    inverse: { type: Boolean, default: !1 },
    bounce: { type: Boolean, default: !1 },
    shake: { type: Boolean, default: !1 },
    beat: { type: Boolean, default: !1 },
    fade: { type: Boolean, default: !1 },
    beatFade: { type: Boolean, default: !1 },
    flash: { type: Boolean, default: !1 },
    spinPulse: { type: Boolean, default: !1 },
    spinReverse: { type: Boolean, default: !1 },
  },
  setup: function (t, n) {
    var r = n.attrs,
      a = se(function () {
        return Eo(t.icon)
      }),
      i = se(function () {
        return kn('classes', Lp(t))
      }),
      o = se(function () {
        return kn(
          'transform',
          typeof t.transform == 'string' ? yr.transform(t.transform) : t.transform
        )
      }),
      s = se(function () {
        return kn('mask', Eo(t.mask))
      }),
      l = se(function () {
        return wp(
          a.value,
          Le(Le(Le(Le({}, i.value), o.value), s.value), {}, { symbol: t.symbol, title: t.title })
        )
      })
    hn(
      l,
      function (c) {
        if (!c) return $p('Could not find one or more icon(s)', a.value, s.value)
      },
      { immediate: !0 }
    )
    var f = se(function () {
      return l.value ? ai(l.value.abstract[0], {}, r) : null
    })
    return function () {
      return f.value
    }
  },
})
jn({
  name: 'FontAwesomeLayers',
  props: { fixedWidth: { type: Boolean, default: !1 } },
  setup: function (t, n) {
    var r = n.slots,
      a = rl.familyPrefix,
      i = se(function () {
        return [''.concat(a, '-layers')].concat(xa(t.fixedWidth ? [''.concat(a, '-fw')] : []))
      })
    return function () {
      return Rr('div', { class: i.value }, r.default ? r.default() : [])
    }
  },
})
jn({
  name: 'FontAwesomeLayersText',
  props: {
    value: { type: [String, Number], default: '' },
    transform: { type: [String, Object], default: null },
    counter: { type: Boolean, default: !1 },
    position: {
      type: String,
      default: null,
      validator: function (t) {
        return ['bottom-left', 'bottom-right', 'top-left', 'top-right'].indexOf(t) > -1
      },
    },
  },
  setup: function (t, n) {
    var r = n.attrs,
      a = rl.familyPrefix,
      i = se(function () {
        return kn(
          'classes',
          [].concat(
            xa(t.counter ? [''.concat(a, '-layers-counter')] : []),
            xa(t.position ? [''.concat(a, '-layers-').concat(t.position)] : [])
          )
        )
      }),
      o = se(function () {
        return kn(
          'transform',
          typeof t.transform == 'string' ? yr.transform(t.transform) : t.transform
        )
      }),
      s = se(function () {
        var f = kp(t.value.toString(), Le(Le({}, o.value), i.value)),
          c = f.abstract
        return (
          t.counter &&
            (c[0].attributes.class = c[0].attributes.class.replace('fa-layers-text', '')),
          c[0]
        )
      }),
      l = se(function () {
        return ai(s.value, {}, r)
      })
    return function () {
      return l.value
    }
  },
})
var jp = {
    prefix: 'fas',
    iconName: 'left-long',
    icon: [
      512,
      512,
      ['long-arrow-alt-left'],
      'f30a',
      'M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z',
    ],
  },
  Dp = jp
const on = Sf(Nu)
xp.add(Dp)
on.use(Cd)
on.component('font-awesome-icon', Fp)
on.component('login-card', Nd)
on.component('logo-area', Ud)
on.component('login-button', Ld)
on.mount('#app')
