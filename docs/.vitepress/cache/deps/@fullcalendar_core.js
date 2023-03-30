import {
  BASE_OPTION_DEFAULTS,
  BASE_OPTION_REFINERS,
  BaseComponent,
  BgEvent,
  CalendarApi,
  CalendarContent,
  CalendarDataManager,
  CalendarDataProvider,
  CalendarRoot,
  Component,
  ContentHook,
  CustomContentRenderContext,
  DateComponent,
  DateEnv,
  DateProfileGenerator,
  DayCellContent,
  DayCellRoot,
  DayHeader,
  DaySeriesModel,
  DayTableModel,
  DelayedRunner,
  ElementDragging,
  ElementScrollController,
  Emitter,
  EventApi,
  EventRoot,
  EventSourceApi,
  Fragment,
  Interaction,
  MoreLinkRoot,
  MountHook,
  NamedTimeZoneImpl,
  NowIndicatorRoot,
  NowTimer,
  PositionCache,
  RefMap,
  RenderHook,
  ScrollController,
  ScrollResponder,
  Scroller,
  SegHierarchy,
  SimpleScrollGrid,
  Slicer,
  Splitter,
  StandardEvent,
  TableDateCell,
  TableDowCell,
  Theme,
  ViewApi,
  ViewContextType,
  ViewRoot,
  WeekNumberRoot,
  WindowScrollController,
  __assign,
  __extends,
  addDays,
  addDurations,
  addMs,
  addWeeks,
  allowContextMenu,
  allowSelection,
  applyMutationToEventStore,
  applyStyle,
  applyStyleProp,
  asCleanDays,
  asRoughMinutes,
  asRoughMs,
  asRoughSeconds,
  binarySearch,
  buildClassNameNormalizer,
  buildEntryKey,
  buildEventApis,
  buildEventRangeKey,
  buildHashFromArray,
  buildIsoString,
  buildNavLinkAttrs,
  buildSegCompareObj,
  buildSegTimeText,
  collectFromHash,
  combineEventUis,
  compareByFieldSpec,
  compareByFieldSpecs,
  compareNumbers,
  compareObjs,
  computeEarliestSegStart,
  computeEdges,
  computeFallbackHeaderFormat,
  computeHeightAndMargins,
  computeInnerRect,
  computeRect,
  computeSegDraggable,
  computeSegEndResizable,
  computeSegStartResizable,
  computeShrinkWidth,
  computeSmallestCellWidth,
  computeVisibleDayRange,
  config,
  constrainPoint,
  createAriaClickAttrs,
  createContext,
  createDuration,
  createElement,
  createEmptyEventStore,
  createEventInstance,
  createEventUi,
  createFormatter,
  createPlugin,
  createPortal,
  createRef,
  diffDates,
  diffDayAndTime,
  diffDays,
  diffPoints,
  diffWeeks,
  diffWholeDays,
  diffWholeWeeks,
  disableCursor,
  elementClosest,
  elementMatches,
  enableCursor,
  eventTupleToStore,
  filterEventStoreDefs,
  filterHash,
  findDirectChildren,
  findElements,
  flexibleCompare,
  flushSync,
  formatDate,
  formatDayString,
  formatIsoTimeString,
  formatRange,
  getAllowYScrolling,
  getCanVGrowWithinCell,
  getClippingParents,
  getDateMeta,
  getDayClassNames,
  getDefaultEventEnd,
  getElRoot,
  getElSeg,
  getEntrySpanEnd,
  getEventClassNames,
  getEventTargetViaRoot,
  getIsRtlScrollbarOnLeft,
  getRectCenter,
  getRelevantEvents,
  getScrollGridClassNames,
  getScrollbarWidths,
  getSectionClassNames,
  getSectionHasLiquidHeight,
  getSegAnchorAttrs,
  getSegMeta,
  getSlotClassNames,
  getStickyFooterScrollbar,
  getStickyHeaderDates,
  getUnequalProps,
  getUniqueDomId,
  globalLocales,
  globalPlugins,
  greatestDurationDenominator,
  groupIntersectingEntries,
  guid,
  hasBgRendering,
  hasShrinkWidth,
  identity,
  interactionSettingsStore,
  interactionSettingsToStore,
  intersectRanges,
  intersectRects,
  intersectSpans,
  isArraysEqual,
  isColPropsEqual,
  isDateSelectionValid,
  isDateSpansEqual,
  isInt,
  isInteractionValid,
  isMultiDayRange,
  isPropsEqual,
  isPropsValid,
  isValidDate,
  joinSpans,
  listenBySelector,
  mapHash,
  memoize,
  memoizeArraylike,
  memoizeHashlike,
  memoizeObjArg,
  mergeEventStores,
  multiplyDuration,
  padStart,
  parse,
  parseBusinessHours,
  parseClassNames,
  parseDragMeta,
  parseEventDef,
  parseFieldSpecs,
  pointInsideRect,
  preventContextMenu,
  preventDefault,
  preventSelection,
  rangeContainsMarker,
  rangeContainsRange,
  rangesEqual,
  rangesIntersect,
  refineEventDef,
  refineProps,
  removeElement,
  removeExact,
  render,
  renderChunkContent,
  renderFill,
  renderMicroColGroup,
  renderScrollShim,
  requestJson,
  sanitizeShrinkWidth,
  setElSeg,
  setRef,
  sliceEventStore,
  sliceEvents,
  sortEventSegs,
  startOfDay,
  translateRect,
  triggerDateSelect,
  unmountComponentAtNode,
  unpromisify,
  version,
  whenTransitionDone,
  wholeDivideDurations
} from "./chunk-ACIWJR3J.js";
import "./chunk-DFKQJ226.js";

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var r;
var o;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function v(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function y(l3, u3, i3) {
  var t3, r3, o2, f3 = {};
  for (o2 in u3)
    "key" == o2 ? t3 = u3[o2] : "ref" == o2 ? r3 = u3[o2] : f3[o2] = u3[o2];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
    for (o2 in l3.defaultProps)
      void 0 === f3[o2] && (f3[o2] = l3.defaultProps[o2]);
  return p(l3, f3, t3, r3, null);
}
function p(n2, i3, t3, r3, o2) {
  var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u : o2 };
  return null == o2 && null != l.vnode && l.vnode(f3), f3;
}
function d() {
  return { current: null };
}
function _(n2) {
  return n2.children;
}
function k(n2, l3) {
  this.props = n2, this.context = l3;
}
function b(n2, l3) {
  if (null == l3)
    return n2.__ ? b(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? b(n2) : null;
}
function g(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return g(n2);
  }
}
function m(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
}
function w() {
  var n2, l3, u3, i3, r3, o2, e3, c3;
  for (t.sort(f); n2 = t.shift(); )
    n2.__d && (l3 = t.length, i3 = void 0, r3 = void 0, e3 = (o2 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (r3 = h({}, o2)).__v = o2.__v + 1, L(c3, o2, r3, u3.__n, void 0 !== c3.ownerSVGElement, null != o2.__h ? [e3] : null, i3, null == e3 ? b(o2) : e3, o2.__h), M(i3, o2), o2.__e != e3 && g(o2)), t.length > l3 && t.sort(f));
  w.__r = 0;
}
function x(n2, l3, u3, i3, t3, r3, o2, f3, e3, a3) {
  var h3, v3, y3, d2, k3, g4, m3, w4 = i3 && i3.__k || s, x3 = w4.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if (null != (d2 = u3.__k[h3] = null == (d2 = l3[h3]) || "boolean" == typeof d2 || "function" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p(null, d2, null, null, d2) : Array.isArray(d2) ? p(_, { children: d2 }, null, null, null) : d2.__b > 0 ? p(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
      if (d2.__ = u3, d2.__b = u3.__b + 1, null === (y3 = w4[h3]) || y3 && d2.key == y3.key && d2.type === y3.type)
        w4[h3] = void 0;
      else
        for (v3 = 0; v3 < x3; v3++) {
          if ((y3 = w4[v3]) && d2.key == y3.key && d2.type === y3.type) {
            w4[v3] = void 0;
            break;
          }
          y3 = null;
        }
      L(n2, d2, y3 = y3 || c, t3, r3, o2, f3, e3, a3), k3 = d2.__e, (v3 = d2.ref) && y3.ref != v3 && (m3 || (m3 = []), y3.ref && m3.push(y3.ref, null, d2), m3.push(v3, d2.__c || k3, d2)), null != k3 ? (null == g4 && (g4 = k3), "function" == typeof d2.type && d2.__k === y3.__k ? d2.__d = e3 = A(d2, e3, n2) : e3 = C(n2, d2, y3, w4, k3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y3.__e == e3 && e3.parentNode != n2 && (e3 = b(y3));
    }
  for (u3.__e = g4, h3 = x3; h3--; )
    null != w4[h3] && ("function" == typeof u3.type && null != w4[h3].__e && w4[h3].__e == u3.__d && (u3.__d = $(i3).nextSibling), S(w4[h3], w4[h3]));
  if (m3)
    for (h3 = 0; h3 < m3.length; h3++)
      O(m3[h3], m3[++h3], m3[++h3]);
}
function A(n2, l3, u3) {
  for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
    (i3 = t3[r3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? A(i3, l3, u3) : C(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function P(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    P(n3, l3);
  }) : l3.push(n2)), l3;
}
function C(n2, l3, u3, i3, t3, r3) {
  var o2, f3, e3;
  if (void 0 !== l3.__d)
    o2 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != r3 || null == t3.parentNode)
    n:
      if (null == r3 || r3.parentNode !== n2)
        n2.appendChild(t3), o2 = null;
      else {
        for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
          if (f3 == t3)
            break n;
        n2.insertBefore(t3, r3), o2 = r3;
      }
  return void 0 !== o2 ? o2 : t3.nextSibling;
}
function $(n2) {
  var l3, u3, i3;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
      if ((u3 = n2.__k[l3]) && (i3 = $(u3)))
        return i3;
  }
  return null;
}
function H(n2, l3, u3, i3, t3) {
  var r3;
  for (r3 in u3)
    "children" === r3 || "key" === r3 || r3 in l3 || T(n2, r3, null, u3[r3], i3);
  for (r3 in l3)
    t3 && "function" != typeof l3[r3] || "children" === r3 || "key" === r3 || "value" === r3 || "checked" === r3 || u3[r3] === l3[r3] || T(n2, r3, l3[r3], u3[r3], i3);
}
function I(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
}
function T(n2, l3, u3, i3, t3) {
  var r3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || I(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? z : j, r3) : n2.removeEventListener(l3, r3 ? z : j, r3);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
    }
}
function j(n2) {
  return this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function z(n2) {
  return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function L(n2, u3, i3, t3, r3, o2, f3, e3, c3) {
  var s3, a3, v3, y3, p3, d2, b3, g4, m3, w4, A3, P3, C3, $3, H3, I3 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o2 = [e3]), (s3 = l.__b) && s3(u3);
  try {
    n:
      if ("function" == typeof I3) {
        if (g4 = u3.props, m3 = (s3 = I3.contextType) && t3[s3.__c], w4 = s3 ? m3 ? m3.props.value : s3.__ : t3, i3.__c ? b3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I3 && I3.prototype.render ? u3.__c = a3 = new I3(g4, w4) : (u3.__c = a3 = new k(g4, w4), a3.constructor = I3, a3.render = q), m3 && m3.sub(a3), a3.props = g4, a3.state || (a3.state = {}), a3.context = w4, a3.__n = t3, v3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I3.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I3.getDerivedStateFromProps(g4, a3.__s))), y3 = a3.props, p3 = a3.state, a3.__v = u3, v3)
          null == I3.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
        else {
          if (null == I3.getDerivedStateFromProps && g4 !== y3 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(g4, w4), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(g4, a3.__s, w4) || u3.__v === i3.__v) {
            for (u3.__v !== i3.__v && (a3.props = g4, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), A3 = 0; A3 < a3._sb.length; A3++)
              a3.__h.push(a3._sb[A3]);
            a3._sb = [], a3.__h.length && f3.push(a3);
            break n;
          }
          null != a3.componentWillUpdate && a3.componentWillUpdate(g4, a3.__s, w4), null != a3.componentDidUpdate && a3.__h.push(function() {
            a3.componentDidUpdate(y3, p3, d2);
          });
        }
        if (a3.context = w4, a3.props = g4, a3.__P = n2, P3 = l.__r, C3 = 0, "prototype" in I3 && I3.prototype.render) {
          for (a3.state = a3.__s, a3.__d = false, P3 && P3(u3), s3 = a3.render(a3.props, a3.state, a3.context), $3 = 0; $3 < a3._sb.length; $3++)
            a3.__h.push(a3._sb[$3]);
          a3._sb = [];
        } else
          do {
            a3.__d = false, P3 && P3(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
          } while (a3.__d && ++C3 < 25);
        a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), v3 || null == a3.getSnapshotBeforeUpdate || (d2 = a3.getSnapshotBeforeUpdate(y3, p3)), H3 = null != s3 && s3.type === _ && null == s3.key ? s3.props.children : s3, x(n2, Array.isArray(H3) ? H3 : [H3], u3, i3, t3, r3, o2, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), b3 && (a3.__E = a3.__ = null), a3.__e = false;
      } else
        null == o2 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, r3, o2, f3, c3);
    (s3 = l.diffed) && s3(u3);
  } catch (n3) {
    u3.__v = null, (c3 || null != o2) && (u3.__e = e3, u3.__h = !!c3, o2[o2.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function M(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function N(l3, u3, i3, t3, r3, o2, f3, e3) {
  var s3, a3, h3, y3 = i3.props, p3 = u3.props, d2 = u3.type, _3 = 0;
  if ("svg" === d2 && (r3 = true), null != o2) {
    for (; _3 < o2.length; _3++)
      if ((s3 = o2[_3]) && "setAttribute" in s3 == !!d2 && (d2 ? s3.localName === d2 : 3 === s3.nodeType)) {
        l3 = s3, o2[_3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d2)
      return document.createTextNode(p3);
    l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p3.is && p3), o2 = null, e3 = false;
  }
  if (null === d2)
    y3 === p3 || e3 && l3.data === p3 || (l3.data = p3);
  else {
    if (o2 = o2 && n.call(l3.childNodes), a3 = (y3 = i3.props || c).dangerouslySetInnerHTML, h3 = p3.dangerouslySetInnerHTML, !e3) {
      if (null != o2)
        for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
          y3[l3.attributes[_3].name] = l3.attributes[_3].value;
      (h3 || a3) && (h3 && (a3 && h3.__html == a3.__html || h3.__html === l3.innerHTML) || (l3.innerHTML = h3 && h3.__html || ""));
    }
    if (H(l3, p3, y3, r3, e3), h3)
      u3.__k = [];
    else if (_3 = u3.props.children, x(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, r3 && "foreignObject" !== d2, o2, f3, o2 ? o2[0] : i3.__k && b(i3, 0), e3), null != o2)
      for (_3 = o2.length; _3--; )
        null != o2[_3] && v(o2[_3]);
    e3 || ("value" in p3 && void 0 !== (_3 = p3.value) && (_3 !== l3.value || "progress" === d2 && !_3 || "option" === d2 && _3 !== y3.value) && T(l3, "value", _3, y3.value, false), "checked" in p3 && void 0 !== (_3 = p3.checked) && _3 !== l3.checked && T(l3, "checked", _3, y3.checked, false));
  }
  return l3;
}
function O(n2, u3, i3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function S(n2, u3, i3) {
  var t3, r3;
  if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    t3.base = t3.__P = null, n2.__c = void 0;
  }
  if (t3 = n2.__k)
    for (r3 = 0; r3 < t3.length; r3++)
      t3[r3] && S(t3[r3], u3, i3 || "function" != typeof n2.type);
  i3 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function B(u3, i3, t3) {
  var r3, o2, f3;
  l.__ && l.__(u3, i3), o2 = (r3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!r3 && t3 || i3).__k = y(_, null, [u3]), o2 || c, c, void 0 !== i3.ownerSVGElement, !r3 && t3 ? [t3] : o2 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o2 ? o2.__e : i3.firstChild, r3), M(f3, u3);
}
function F(n2, l3) {
  var u3 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, i3;
    return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
      return i3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(function(n5) {
        n5.__e = true, m(n5);
      });
    }, this.sub = function(n4) {
      u4.push(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
n = s.slice, l = { __e: function(n2, l3, u3, i3) {
  for (var t3, r3, o2; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((r3 = t3.constructor) && null != r3.getDerivedStateFromError && (t3.setState(r3.getDerivedStateFromError(n2)), o2 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), o2 = t3.__d), o2)
          return t3.__E = t3;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, k.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), m(this));
}, k.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
}, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, w.__r = 0, e = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var f2 = [];
var c2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
function b2() {
  for (var t3; t3 = f2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
      } catch (r3) {
        t3.__H.__h = [], l.__e(r3, t3.__v);
      }
}
l.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
  })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var o2 = t3.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f2.push(o2) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
  })), u2 = r2 = null;
}, l.__c = function(t3, r3) {
  r3.some(function(t4) {
    try {
      t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || w2(n2);
      });
    } catch (u3) {
      r3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r3 = [], l.__e(u3, t4.__v);
    }
  }), l2 && l2(t3, r3);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var r3, u3 = t3.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      k2(n2);
    } catch (n3) {
      r3 = n3;
    }
  }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  g2 && (t3 = requestAnimationFrame(r3));
}
function k2(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function w2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}

// node_modules/preact/compat/dist/compat.module.js
function g3(n2, t3) {
  for (var e3 in t3)
    n2[e3] = t3[e3];
  return n2;
}
function C2(n2, t3) {
  for (var e3 in n2)
    if ("__source" !== e3 && !(e3 in t3))
      return true;
  for (var r3 in t3)
    if ("__source" !== r3 && n2[r3] !== t3[r3])
      return true;
  return false;
}
function w3(n2) {
  this.props = n2;
}
(w3.prototype = new k()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
  return C2(this.props, n2) || C2(this.state, t3);
};
var R = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
};
var N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var T3 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u3, o2 = t3; o2 = o2.__; )
      if ((u3 = o2.__c) && u3.__c)
        return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
  }
  T3(n2, t3, e3, r3);
};
var I2 = l.unmount;
function L2(n2, t3, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L2(n3, t3, e3);
  })), n2;
}
function U(n2, t3, e3) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t3, e3);
  }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
}
function D2() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F3(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function V2() {
  this.u = null, this.o = null;
}
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
}, (D2.prototype = new k()).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  null == r3.t && (r3.t = []), r3.t.push(e3);
  var u3 = F3(r3.__v), o2 = false, i3 = function() {
    o2 || (o2 = true, e3.__R = null, u3 ? u3(l3) : l3());
  };
  e3.__R = i3;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
        t4.forceUpdate();
    }
  }, c3 = true === t3.__h;
  r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, D2.prototype.componentWillUnmount = function() {
  this.t = [];
}, D2.prototype.render = function(n2, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = L2(this.__b, r3, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i3 = e3.__a && y(_, null, n2.fallback);
  return i3 && (i3.__h = null), [y(_, null, e3.__a ? null : n2.children), i3];
};
var W = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e3 = n2.u; e3; ) {
      for (; e3.length > 3; )
        e3.pop()();
      if (e3[1] < e3[0])
        break;
      n2.u = e3 = e3[2];
    }
};
function P2(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function j3(n2) {
  var e3 = this, r3 = n2.i;
  e3.componentWillUnmount = function() {
    B(null, e3.l), e3.l = null, e3.i = null;
  }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e3.i.appendChild(n3);
  }, insertBefore: function(n3, t3) {
    this.childNodes.push(n3), e3.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
  } }), B(y(P2, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
}
function z2(n2, e3) {
  var r3 = y(j3, { __v: n2, i: e3 });
  return r3.containerInfo = e3, r3;
}
(V2.prototype = new k()).__a = function(n2) {
  var t3 = this, e3 = F3(t3.__v), r3 = t3.o.get(n2);
  return r3[0]++, function(u3) {
    var o2 = function() {
      t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
    };
    e3 ? e3(o2) : o2();
  };
}, V2.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t3 = P(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
  for (var e3 = t3.length; e3--; )
    this.o.set(t3[e3], this.u = [1, 0, this.u]);
  return n2.children;
}, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t3, e3) {
    W(n2, e3, t3);
  });
};
var B2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var Y = /[A-Z0-9]/g;
var $2 = "undefined" != typeof document;
var q3 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
k.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
  Object.defineProperty(k.prototype, t3, { configurable: true, get: function() {
    return this["UNSAFE_" + t3];
  }, set: function(n2) {
    Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
  } });
});
var K = l.event;
function Q() {
}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
l.event = function(n2) {
  return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
};
var tn;
var en = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var rn = l.vnode;
l.vnode = function(n2) {
  "string" == typeof n2.type && function(n3) {
    var t3 = n3.props, e3 = n3.type, u3 = {};
    for (var o2 in t3) {
      var i3 = t3[o2];
      if (!("value" === o2 && "defaultValue" in t3 && null == i3 || $2 && "children" === o2 && "noscript" === e3 || "class" === o2 || "className" === o2)) {
        var l3 = o2.toLowerCase();
        "defaultValue" === o2 && "value" in t3 && null == t3.value ? o2 = "value" : "download" === o2 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o2 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l3 ? o2 = "onfocusin" : "onblur" === l3 ? o2 = "onfocusout" : Z.test(o2) ? o2 = l3 : -1 === e3.indexOf("-") && H2.test(o2) ? o2 = o2.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o2 = "oninput", "oninput" === l3 && u3[o2 = l3] && (o2 = "oninputCapture"), u3[o2] = i3;
      }
    }
    "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = P(t3.children).forEach(function(n4) {
      n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
    })), "select" == e3 && null != u3.defaultValue && (u3.value = P(t3.children).forEach(function(n4) {
      n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
    })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
  }(n2), n2.$$typeof = B2, rn && rn(n2);
};
var un = l.__r;
l.__r = function(n2) {
  un && un(n2), tn = n2.__c;
};
var on = l.diffed;
l.diffed = function(n2) {
  on && on(n2);
  var t3 = n2.props, e3 = n2.__e;
  null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), tn = null;
};

// node_modules/@fullcalendar/core/vdom.js
var globalObj = typeof globalThis !== "undefined" ? globalThis : window;
if (globalObj.FullCalendarVDom) {
  console.warn("FullCalendar VDOM already loaded");
} else {
  globalObj.FullCalendarVDom = {
    Component: k,
    createElement: y,
    render: B,
    createRef: d,
    Fragment: _,
    createContext: createContext2,
    createPortal: z2,
    flushSync: flushSync2,
    unmountComponentAtNode: unmountComponentAtNode2
  };
}
function flushSync2(runBeforeFlush) {
  runBeforeFlush();
  var oldDebounceRendering = l.debounceRendering;
  var callbackQ = [];
  function execCallbackSync(callback) {
    callbackQ.push(callback);
  }
  l.debounceRendering = execCallbackSync;
  B(y(FakeComponent, {}), document.createElement("div"));
  while (callbackQ.length) {
    callbackQ.shift()();
  }
  l.debounceRendering = oldDebounceRendering;
}
var FakeComponent = (
  /** @class */
  function(_super) {
    __extends(FakeComponent2, _super);
    function FakeComponent2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    FakeComponent2.prototype.render = function() {
      return y("div", {});
    };
    FakeComponent2.prototype.componentDidMount = function() {
      this.setState({});
    };
    return FakeComponent2;
  }(k)
);
function createContext2(defaultValue) {
  var ContextType = F(defaultValue);
  var origProvider = ContextType.Provider;
  ContextType.Provider = function() {
    var _this = this;
    var isNew = !this.getChildContext;
    var children = origProvider.apply(this, arguments);
    if (isNew) {
      var subs_1 = [];
      this.shouldComponentUpdate = function(_props) {
        if (_this.props.value !== _props.value) {
          subs_1.forEach(function(c3) {
            c3.context = _props.value;
            c3.forceUpdate();
          });
        }
      };
      this.sub = function(c3) {
        subs_1.push(c3);
        var old = c3.componentWillUnmount;
        c3.componentWillUnmount = function() {
          subs_1.splice(subs_1.indexOf(c3), 1);
          old && old.call(c3);
        };
      };
    }
    return children;
  };
  return ContextType;
}
function unmountComponentAtNode2(node) {
  B(null, node);
}

// node_modules/@fullcalendar/core/main.js
var Calendar = (
  /** @class */
  function(_super) {
    __extends(Calendar2, _super);
    function Calendar2(el, optionOverrides) {
      if (optionOverrides === void 0) {
        optionOverrides = {};
      }
      var _this = _super.call(this) || this;
      _this.isRendering = false;
      _this.isRendered = false;
      _this.currentClassNames = [];
      _this.customContentRenderId = 0;
      _this.handleAction = function(action) {
        switch (action.type) {
          case "SET_EVENT_DRAG":
          case "SET_EVENT_RESIZE":
            _this.renderRunner.tryDrain();
        }
      };
      _this.handleData = function(data) {
        _this.currentData = data;
        _this.renderRunner.request(data.calendarOptions.rerenderDelay);
      };
      _this.handleRenderRequest = function() {
        if (_this.isRendering) {
          _this.isRendered = true;
          var currentData_1 = _this.currentData;
          flushSync(function() {
            render(createElement(CalendarRoot, { options: currentData_1.calendarOptions, theme: currentData_1.theme, emitter: currentData_1.emitter }, function(classNames, height, isHeightAuto, forPrint) {
              _this.setClassNames(classNames);
              _this.setHeight(height);
              return createElement(
                CustomContentRenderContext.Provider,
                { value: _this.customContentRenderId },
                createElement(CalendarContent, __assign({ isHeightAuto, forPrint }, currentData_1))
              );
            }), _this.el);
          });
        } else if (_this.isRendered) {
          _this.isRendered = false;
          unmountComponentAtNode(_this.el);
          _this.setClassNames([]);
          _this.setHeight("");
        }
      };
      _this.el = el;
      _this.renderRunner = new DelayedRunner(_this.handleRenderRequest);
      new CalendarDataManager({
        optionOverrides,
        calendarApi: _this,
        onAction: _this.handleAction,
        onData: _this.handleData
      });
      return _this;
    }
    Object.defineProperty(Calendar2.prototype, "view", {
      get: function() {
        return this.currentData.viewApi;
      },
      enumerable: false,
      configurable: true
    });
    Calendar2.prototype.render = function() {
      var wasRendering = this.isRendering;
      if (!wasRendering) {
        this.isRendering = true;
      } else {
        this.customContentRenderId += 1;
      }
      this.renderRunner.request();
      if (wasRendering) {
        this.updateSize();
      }
    };
    Calendar2.prototype.destroy = function() {
      if (this.isRendering) {
        this.isRendering = false;
        this.renderRunner.request();
      }
    };
    Calendar2.prototype.updateSize = function() {
      var _this = this;
      flushSync(function() {
        _super.prototype.updateSize.call(_this);
      });
    };
    Calendar2.prototype.batchRendering = function(func) {
      this.renderRunner.pause("batchRendering");
      func();
      this.renderRunner.resume("batchRendering");
    };
    Calendar2.prototype.pauseRendering = function() {
      this.renderRunner.pause("pauseRendering");
    };
    Calendar2.prototype.resumeRendering = function() {
      this.renderRunner.resume("pauseRendering", true);
    };
    Calendar2.prototype.resetOptions = function(optionOverrides, append) {
      this.currentDataManager.resetOptions(optionOverrides, append);
    };
    Calendar2.prototype.setClassNames = function(classNames) {
      if (!isArraysEqual(classNames, this.currentClassNames)) {
        var classList = this.el.classList;
        for (var _i = 0, _a = this.currentClassNames; _i < _a.length; _i++) {
          var className = _a[_i];
          classList.remove(className);
        }
        for (var _b = 0, classNames_1 = classNames; _b < classNames_1.length; _b++) {
          var className = classNames_1[_b];
          classList.add(className);
        }
        this.currentClassNames = classNames;
      }
    };
    Calendar2.prototype.setHeight = function(height) {
      applyStyleProp(this.el, "height", height);
    };
    return Calendar2;
  }(CalendarApi)
);
export {
  BASE_OPTION_DEFAULTS,
  BASE_OPTION_REFINERS,
  BaseComponent,
  BgEvent,
  Calendar,
  CalendarApi,
  CalendarContent,
  CalendarDataManager,
  CalendarDataProvider,
  CalendarRoot,
  Component,
  ContentHook,
  CustomContentRenderContext,
  DateComponent,
  DateEnv,
  DateProfileGenerator,
  DayCellContent,
  DayCellRoot,
  DayHeader,
  DaySeriesModel,
  DayTableModel,
  DelayedRunner,
  ElementDragging,
  ElementScrollController,
  Emitter,
  EventApi,
  EventRoot,
  EventSourceApi,
  Fragment,
  Interaction,
  MoreLinkRoot,
  MountHook,
  NamedTimeZoneImpl,
  NowIndicatorRoot,
  NowTimer,
  PositionCache,
  RefMap,
  RenderHook,
  ScrollController,
  ScrollResponder,
  Scroller,
  SegHierarchy,
  SimpleScrollGrid,
  Slicer,
  Splitter,
  StandardEvent,
  TableDateCell,
  TableDowCell,
  Theme,
  ViewApi,
  ViewContextType,
  ViewRoot,
  WeekNumberRoot,
  WindowScrollController,
  addDays,
  addDurations,
  addMs,
  addWeeks,
  allowContextMenu,
  allowSelection,
  applyMutationToEventStore,
  applyStyle,
  applyStyleProp,
  asCleanDays,
  asRoughMinutes,
  asRoughMs,
  asRoughSeconds,
  binarySearch,
  buildClassNameNormalizer,
  buildEntryKey,
  buildEventApis,
  buildEventRangeKey,
  buildHashFromArray,
  buildIsoString,
  buildNavLinkAttrs,
  buildSegCompareObj,
  buildSegTimeText,
  collectFromHash,
  combineEventUis,
  compareByFieldSpec,
  compareByFieldSpecs,
  compareNumbers,
  compareObjs,
  computeEarliestSegStart,
  computeEdges,
  computeFallbackHeaderFormat,
  computeHeightAndMargins,
  computeInnerRect,
  computeRect,
  computeSegDraggable,
  computeSegEndResizable,
  computeSegStartResizable,
  computeShrinkWidth,
  computeSmallestCellWidth,
  computeVisibleDayRange,
  config,
  constrainPoint,
  createAriaClickAttrs,
  createContext,
  createDuration,
  createElement,
  createEmptyEventStore,
  createEventInstance,
  createEventUi,
  createFormatter,
  createPlugin,
  createPortal,
  createRef,
  diffDates,
  diffDayAndTime,
  diffDays,
  diffPoints,
  diffWeeks,
  diffWholeDays,
  diffWholeWeeks,
  disableCursor,
  elementClosest,
  elementMatches,
  enableCursor,
  eventTupleToStore,
  filterEventStoreDefs,
  filterHash,
  findDirectChildren,
  findElements,
  flexibleCompare,
  flushSync,
  formatDate,
  formatDayString,
  formatIsoTimeString,
  formatRange,
  getAllowYScrolling,
  getCanVGrowWithinCell,
  getClippingParents,
  getDateMeta,
  getDayClassNames,
  getDefaultEventEnd,
  getElRoot,
  getElSeg,
  getEntrySpanEnd,
  getEventClassNames,
  getEventTargetViaRoot,
  getIsRtlScrollbarOnLeft,
  getRectCenter,
  getRelevantEvents,
  getScrollGridClassNames,
  getScrollbarWidths,
  getSectionClassNames,
  getSectionHasLiquidHeight,
  getSegAnchorAttrs,
  getSegMeta,
  getSlotClassNames,
  getStickyFooterScrollbar,
  getStickyHeaderDates,
  getUnequalProps,
  getUniqueDomId,
  globalLocales,
  globalPlugins,
  greatestDurationDenominator,
  groupIntersectingEntries,
  guid,
  hasBgRendering,
  hasShrinkWidth,
  identity,
  interactionSettingsStore,
  interactionSettingsToStore,
  intersectRanges,
  intersectRects,
  intersectSpans,
  isArraysEqual,
  isColPropsEqual,
  isDateSelectionValid,
  isDateSpansEqual,
  isInt,
  isInteractionValid,
  isMultiDayRange,
  isPropsEqual,
  isPropsValid,
  isValidDate,
  joinSpans,
  listenBySelector,
  mapHash,
  memoize,
  memoizeArraylike,
  memoizeHashlike,
  memoizeObjArg,
  mergeEventStores,
  multiplyDuration,
  padStart,
  parseBusinessHours,
  parseClassNames,
  parseDragMeta,
  parseEventDef,
  parseFieldSpecs,
  parse as parseMarker,
  pointInsideRect,
  preventContextMenu,
  preventDefault,
  preventSelection,
  rangeContainsMarker,
  rangeContainsRange,
  rangesEqual,
  rangesIntersect,
  refineEventDef,
  refineProps,
  removeElement,
  removeExact,
  render,
  renderChunkContent,
  renderFill,
  renderMicroColGroup,
  renderScrollShim,
  requestJson,
  sanitizeShrinkWidth,
  setElSeg,
  setRef,
  sliceEventStore,
  sliceEvents,
  sortEventSegs,
  startOfDay,
  translateRect,
  triggerDateSelect,
  unmountComponentAtNode,
  unpromisify,
  version,
  whenTransitionDone,
  wholeDivideDurations
};
/*! Bundled license information:

@fullcalendar/core/main.js:
  (*!
  FullCalendar v5.11.2
  Docs & License: https://fullcalendar.io/
  (c) 2022 Adam Shaw
  *)
*/
//# sourceMappingURL=@fullcalendar_core.js.map
