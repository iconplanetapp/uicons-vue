import { openBlock as a, createElementBlock as s, normalizeClass as r } from "vue";
const p = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [c, o] of n)
    e[c] = o;
  return e;
}, i = {
  data() {
    return {
      pack: ""
    };
  },
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
    this.pack = this.package;
  }
};
function m(t, n, e, c, o, _) {
  return a(), s("i", {
    class: r(`ip-${o.pack}-${e.name}`)
  }, null, 2);
}
const l = /* @__PURE__ */ p(i, [["render", m]]);
class u {
  constructor(n, e) {
    this.message = n, this.name = e;
  }
}
const f = {
  install(t, n) {
    try {
      let e = "iconplanet-uicon";
      if (n.componentName)
        if (typeof n.componentName == "string")
          e = n.componentName;
        else
          throw new u('"componentName" must be a string.', "Invalid config value");
      t.component(e, l);
    } catch (e) {
      console.warn(`[@iconplanet/uicons-vue]: ${e.message}`);
    }
  }
};
export {
  f as default
};
