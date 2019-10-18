<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter clear-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="typo">
              <h1 class="main-title">Digital adoption and its</h1>
              <h1 class="main-title">implications for challenger</h1>
              <h1 class="main-title">brands</h1>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main" id="main-panel" style="background-color:black">
      <div class="md-layout">
        <div class="md-xsmall-size-100 md-layout-item" id="logo-main">
          <img src="../assets/img/DnG/Logo-White_transparent_medium.png">
        </div>
        <div class="md-xsmall-size-100 md-layout-item" id="text-main">
          <span>
            <p class="main-text">David & Golyat is a digital strategy consulting firm committed to help business leaders make calculated, performance-driven business decisions.</p>
            <p class="main-text">We believe that every company has its own Golyat to overcome – a formidable competitor, challenging market conditions, or evolving customer segments. We enable our partners with the tools, talent, and tactics to make a lasting impact in their respective industries.</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/NavigationSection";
import SmallNavigation from "./components/SmallNavigationSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import Notifications from "./components/NotificationsSection";
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";
import PreFooterAreas from "./components/PreFooterSection";
import FooterAreas from "./components/FooterSection";
import Tables from "./components/TablesSection";
import Comments from "./components/CommentsSection";
import Cards from "./components/CardsSection";
import Mixins from "@/plugins/basicMixins";

export default {
  mixins: [Mixins.VerticalNav, Mixins.HeaderImage],
  components: {
    BasicElements,
    Navigation,
    SmallNavigation,
    Tabs,
    NavPills,
    Notifications,
    TypographyImages,
    JavascriptComponents,
    PreFooterAreas,
    FooterAreas,
    Tables,
    Comments,
    Cards
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/DnG/dg_performance.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

.vertical-nav-active {
  display: block;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
@media all and (max-width: 768px) {
  .vertical-nav-active {
    display: none;
  }
}

.mb-0 {
  padding-bottom: 0 !important;
}

#morphing-cards {
  padding-top: 70px;
}
</style>
