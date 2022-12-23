import { openBlock as l, createElementBlock as p, normalizeClass as h, normalizeStyle as m, createCommentVNode as d, createElementVNode as f } from "vue";
class i {
  constructor(t, a) {
    this.message = t, this.name = a;
  }
}
class c {
  constructor(t) {
    try {
      let a = c.validate(t);
      this.name = a[0], this.packageName = a[1], this.viewBox = `0 0 ${a[2]} ${a[3]}`, this.path = a[4];
    } catch (a) {
      this.name = null, this.packageName = null, this.path = null, console.warn(`[@iconplanet/uicons-vue]: ${a.message}`);
    }
  }
  static validate(t) {
    if (!Array.isArray(t) || t.length !== 5 || typeof t[0] != "string" || typeof t[1] != "string" || typeof t[2] != "number" || typeof t[3] != "number" || typeof t[4] != "string")
      throw new i("Icon format is not supported. Icon = " + JSON.stringify(t), "Invalid icon format");
    return t;
  }
}
class r {
  constructor(t) {
    this.name = r.validate(t), this.icons = {};
  }
  addIcon(t) {
    if (!t instanceof c)
      throw new i("Icon must be an instance of Icon class", "Invalid icon format");
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
    }, n = ["brands", "awesome-regular", "awesome-light", "awesome-thin", "awesome-solid", "custom"];
    if (!t || typeof t != "string")
      throw new i("Package name must be a string. name = " + t, "Invalid package name");
    if (t = a.hasOwnProperty(t) ? a[t] : t, !n.includes(t))
      throw new i("Package name is not supported. name = " + t, "Invalid package name");
    return t;
  }
}
const u = {
  computed: {
    classes() {
      var e = this.$IconPlanet.className;
      return [
        e
      ];
    },
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
}, g = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, s] of t)
    a[n] = s;
  return a;
}, w = {
  data() {
    return {
      pack: ""
    };
  },
  mixins: [u],
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
}, k = ["data-name", "data-package"];
function v(e, t, a, n, s, o) {
  return s.pack && a.name ? (l(), p("i", {
    key: 0,
    class: h(e.classes),
    "data-name": a.name,
    "data-package": s.pack,
    style: m(e.style)
  }, null, 14, k)) : d("", !0);
}
const b = /* @__PURE__ */ g(w, [["render", v]]), I = {
  data() {
    return {
      pack: "",
      icon: null
    };
  },
  mixins: [u],
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
    this.icon = this.$IconPlanet.library.getIcon(this.name, this.package);
  }
}, S = ["data-name", "data-package", "viewBox"], N = ["d"];
function _(e, t, a, n, s, o) {
  return s.icon ? (l(), p("svg", {
    key: 0,
    class: h(e.classes),
    style: m(e.style),
    "data-name": s.icon.name,
    "data-package": s.icon.packageName,
    viewBox: s.icon.viewBox
  }, [
    f("path", {
      d: s.icon.path
    }, null, 8, N)
  ], 14, S)) : d("", !0);
}
const P = /* @__PURE__ */ g(I, [["render", _]]);
class $ {
  constructor() {
    this.packages = {}, this.packages.custom = new r("custom");
  }
  add(t) {
    t = new c(t), this.packages.hasOwnProperty(t.packageName) || (this.packages[t.packageName] = new r(t.packageName)), this.packages[t.packageName].addIcon(t);
  }
  addAll(t) {
    if (typeof t == "array")
      throw new i("Icons must be an array.", "Invalid icons type");
    t.forEach((a) => this.add(a));
  }
  getIcon(t, a) {
    return this.packages.hasOwnProperty(a) ? this.packages[a].getIcon(t) : this.packages.custom.getIcon("not-found");
  }
}
const O = (e) => {
  const t = ["webfont", "svg"], a = "webfont";
  return e && typeof e == "object" && e.hasOwnProperty("previewType") && typeof e.previewType == "string" && t.includes(e.previewType) ? e.previewType : a;
}, B = (e) => {
  const t = "iconplanet-uicon";
  return e && typeof e == "object" && e.hasOwnProperty("componentName") && typeof e.componentName == "string" ? e.componentName : t;
}, T = (e) => {
  const t = "ip-uicon";
  return e && typeof e == "object" && e.hasOwnProperty("className") && typeof e.componentName == "string" ? e.className : t;
}, x = (e) => {
  const t = [];
  return e && typeof e == "object" && e.hasOwnProperty("icons") && Array.isArray(e.icons) ? e.icons : t;
}, L = {
  install(e, t) {
    try {
      const a = O(t), n = B(t), s = T(t);
      let o = {
        previewType: a,
        componentName: n,
        className: s,
        library: new $()
      };
      if (a == "webfont")
        e.component(n, b);
      else {
        const y = x(t);
        o.library.addAll(y), e.component(n, P);
      }
      e.config.globalProperties.$IconPlanet = o, console.log("[@iconplanet/uicons-vue]: Installed successfully.");
    } catch (a) {
      console.warn(`[@iconplanet/uicons-vue]: ${a.message}`);
    }
  }
};
export {
  L as default
};
