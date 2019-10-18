import Vue from "vue";
import Router from "vue-router";


//  Main Pages
import Index from "./views/Index.vue";
import People from "./views/People.vue"
import Services from "./views/Services.vue";
import Login from "./views/Login.vue";
import BriefingForm from "./views/BriefingForm.vue"
import Thankyou from "./views/Thankyou.vue"
import ContactUs from "./views/ContactUs.vue"


import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

const requireAuth = () => (from, to, next) => {
  if (store.getters.getIsAuth) return next()
  next('/')
}

export default new Router({
  routes: [{
      path: "/",
      name: "index",
      components: {
        default: Index,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400,
          navbarTransparent: true
        }
      }
    },
    {
      path: "/people",
      name: "people",
      components: {
        default: People,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 50,
          navbarTransparent: true
        }
      }
    },
    {
      path: "/services",
      name: "services",
      components: {
        default: Services,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 50,
          navbarTransparent: true
        },
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 0,
          navbarTransparent: true
        },
      }
    },
    {
      path: "/briefingform",
      name: "briefingform",
      components: {
        default: BriefingForm,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 0,
          navbarTransparent: true
        },
      },
    },
    {
      path: "/thankyou",
      name: "thankyou",
      components: {
        default: Thankyou,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 0,
          navbarTransparent: true
        }
      }
    },
    {
      path: "/contactus",
      name: "contactus",
      components: {
        default: ContactUs,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 0,
          navbarTransparent: false,
          type: "dark"
        }
      }
    },
    

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});