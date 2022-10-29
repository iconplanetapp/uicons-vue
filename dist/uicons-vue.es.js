import { openBlock as l, createElementBlock as p, normalizeClass as d, normalizeStyle as h, createCommentVNode as m, createElementVNode as y } from "vue";
class n {
  constructor(t, a) {
    this.message = t, this.name = a;
  }
}
class o {
  constructor(t) {
    try {
      let a = o.validate(t);
      this.name = a[0], this.packageName = a[1], this.viewBox = `0 0 ${a[2]} ${a[3]}`, this.path = a[4];
    } catch (a) {
      this.name = null, this.packageName = null, this.path = null, console.warn(`[@iconplanet/uicons-vue]: ${a.message}`);
    }
  }
  static validate(t) {
    if (!Array.isArray(t) || t.length !== 5 || typeof t[0] != "string" || typeof t[1] != "string" || typeof t[2] != "number" || typeof t[3] != "number" || typeof t[4] != "string")
      throw new n("Icon format is not supported. Icon = " + JSON.stringify(t), "Invalid icon format");
    return t;
  }
}
class r {
  constructor(t) {
    this.name = r.validate(t), this.icons = {};
  }
  addIcon(t) {
    if (!t instanceof o)
      throw new n("Icon must be an instance of Icon class", "Invalid icon format");
    this.icons[t.name] = t;
  }
  removeIcon(t) {
    this.icons.hasOwnProperty(t) && delete this.icon[t];
  }
  getIcon(t) {
    return this.icons.hasOwnProperty(t) ? this.icons[t] : null;
  }
  static validate(t) {
    const a = {
      ar: "awesome-regular",
      al: "awesome-light",
      at: "awesome-thin",
      as: "awesome-solid"
    }, i = ["brands", "awesome-regular", "awesome-light", "awesome-thin", "awesome-solid", "custom"];
    if (!t || typeof t != "string")
      throw new n("Package name must be a string. name = " + t, "Invalid package name");
    if (t = a.hasOwnProperty(t) ? a[t] : t, !i.includes(t))
      throw new n("Package name is not supported. name = " + t, "Invalid package name");
    return t;
  }
}
const g = {
  computed: {
    style() {
      let e = {
        display: "inline-block",
        verticalAlign: this.verticalAlign,
        height: "1em"
      };
      if (this.display == "block" && (e.display = "block", e.width = "100%", e.height = "100%"), this.width && (e.width = this.width), this.height && (e.height = this.height), this.translateX || this.translateY || this.rotate || this.scale) {
        let t = "";
        (this.translateX || this.translateY) && (t = `translate(${this.translateX}, ${this.translateY})`), this.rotate && (t += ` rotate(${this.rotate})`), this.scale && (t += ` scale(${this.scale})`), e.transform = t;
      }
      return this.color && (e.fill = this.color, e.color = this.color), this.margin && (e.margin = this.margin), this.marginLeft && (e.marginLeft = this.marginLeft), this.marginRight && (e.marginRight = this.marginRight), this.marginTop && (e.marginTop = this.marginTop), this.marginBottom && (e.marginBottom = this.marginBottom), e;
    }
  },
  props: {
    display: {
      type: String,
      default: "inline-block"
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    verticalAlign: {
      type: String,
      default: "middle"
    },
    translateX: {
      type: String,
      default: ""
    },
    translateY: {
      type: String,
      default: ""
    },
    rotate: {
      type: String,
      default: ""
    },
    scale: {
      type: String,
      default: ""
    },
    margin: {
      type: String,
      default: ""
    },
    marginTop: {
      type: String,
      default: ""
    },
    marginLeft: {
      type: String,
      default: ""
    },
    marginRight: {
      type: String,
      default: ""
    },
    marginBottom: {
      type: String,
      default: ""
    }
  }
}, u = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, s] of t)
    a[i] = s;
  return a;
}, f = {
  data() {
    return {
      pack: ""
    };
  },
  mixins: [g],
  props: {
    package: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      required: !0
    }
  },
  mounted() {
    this.pack = r.validate(this.package);
  }
};
function w(e, t, a, i, s, c) {
  return s.pack && a.name ? (l(), p("i", {
    key: 0,
    class: d(`ip-uicon ip-${s.pack}-${a.name}`),
    style: h(e.style)
  }, null, 6)) : m("", !0);
}
const k = /* @__PURE__ */ u(f, [["render", w]]), v = {
  data() {
    return {
      icon: null
    };
  },
  mixins: [g],
  props: {
    name: {
      type: String,
      required: !0
    },
    package: {
      type: String,
      default: "custom"
    }
  },
  mounted() {
    this.icon = this.$IconPlanet.library.getIcon(this.name, this.package);
  }
}, b = ["data-name", "data-package", "viewBox"], I = ["d"];
function S(e, t, a, i, s, c) {
  return s.icon ? (l(), p("svg", {
    key: 0,
    class: "ip-uicon",
    style: h(e.style),
    "data-name": s.icon.name,
    "data-package": s.icon.packageName,
    viewBox: s.icon.viewBox
  }, [
    y("path", {
      d: s.icon.path
    }, null, 8, I)
  ], 12, b)) : m("", !0);
}
const _ = /* @__PURE__ */ u(v, [["render", S]]);
class P {
  constructor() {
    this.packages = {}, this.packages.custom = new r("custom");
  }
  add(t) {
    t = new o(t), this.packages.hasOwnProperty(t.packageName) || (this.packages[t.packageName] = new r(t.packageName)), this.packages[t.packageName].addIcon(t);
  }
  addAll(t) {
    if (typeof t == "array")
      throw new n("Icons must be an array.", "Invalid icons type");
    t.forEach((a) => this.add(a));
  }
  getIcon(t, a) {
    return this.packages.hasOwnProperty(a) ? this.packages[a].getIcon(t) : this.packages.custom.getIcon("not-found");
  }
}
const $ = (e) => {
  const t = ["webfont", "svg"], a = "webfont";
  return e && typeof e == "object" && e.hasOwnProperty("previewType") && typeof e.previewType == "string" && t.includes(e.previewType) ? e.previewType : a;
}, N = (e) => {
  const t = "iconplanet-uicon";
  return e && typeof e == "object" && e.hasOwnProperty("componentName") && typeof e.componentName == "string" ? e.componentName : t;
}, x = (e) => {
  const t = [];
  return e && typeof e == "object" && e.hasOwnProperty("icons") && Array.isArray(e.icons) ? e.icons : t;
}, O = {
  install(e, t) {
    try {
      const a = $(t), i = N(t);
      let s = {
        previewType: a,
        componentName: i,
        library: new P()
      };
      if (a == "webfont")
        e.component(i, k);
      else {
        const c = x(t);
        s.library.addAll(c), e.component(i, _);
      }
      e.config.globalProperties.$IconPlanet = s, console.log("[@iconplanet/uicons-vue]: Installed successfully.");
    } catch (a) {
      console.warn(`[@iconplanet/uicons-vue]: ${a.message}`);
    }
  }
};
export {
  O as default
};
