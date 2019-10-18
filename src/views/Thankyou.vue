<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" parallax-active="true" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <h1 class="title">Thanks for Submitting.</h1>
            <h4>We will check and get back to you as soon as possible.</h4>
            <br>
            <md-button href="#/" class="md-success md-lg">
              <i class="fas fa-home"></i> Back to Home
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";

export default {
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      image: require("@/assets/img/bg7.jpg")
    };
  }
};
</script>


