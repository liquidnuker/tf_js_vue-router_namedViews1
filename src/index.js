import Vue from "./js/vendor/vue.min.js";
import VueRouter from "./js/vendor/vue-router.min.js";

Vue.use(VueRouter);

// 
// ======================================================/
const home_Foo = {
  template: "<div>home_Foo</div>"
};

const home_Bar = {
  template: "<div>home_Bar</div>"
};

const home_Baz = {
  template: "<div>home_Baz</div>"
};

const other_Foo = {
  template: "<div>other_Foo</div>"
};

const other_Bar = {
  template: "<div>other_Bar</div>"
};

const other_Baz = {
  template: "<div>other_Baz</div>"
};

const contact_Foo = {
  template: "<div>contact_Foo</div>"
};

// 
// ======================================================/

const router = new VueRouter({
  // mode: "history", // NS_...
  routes: [{
    // path: "/",
    path: "/home",
    components: {
      default: home_Foo,
      viewA: home_Bar,
      viewB: other_Baz
    }
  }, {
    path: "/other",
    components: {
      default: other_Foo,
      viewA: other_Bar,
      viewB: home_Baz
    }
  }, {
    path: "/contact",
    components: {
      default: contact_Foo,
      viewC: home_Foo,
    }
  }]
});

// 
// ======================================================/

const app = new Vue({
  router,
  el: "#app"
});