<template>
  <footer
    class="footer footer-black"
    :class="{
      [`footer-${type}`]: type,
      [`footer-${size}`]: size
    }"
    :data-background-color="backgroundColor"
  >
    <template v-if="$route.name !== 'ecommerce-page' && $route.name !== 'presentation'">
      <div class="container flex-direction-row">
        <a class="footer-brand" href="#/">David & Golyat</a>
        <ul>
          <li>
            <a href="javascript:void(0)">About Us</a>
          </li>

          <li>
            <a href="#/contactus">Contact Us</a>
          </li>
        </ul>

        <ul class="social-buttons">
          <li>
            <md-button
              href="https://www.facebook.com/davidandgolyatph/"
              target="_blank"
              class="md-facebook md-just-icon md-simple md-white"
            >
              <i class="fab fa-facebook"></i>
            </md-button>
          </li>
          <li>
            <md-button
              href="https://www.linkedin.com/company/david-&-golyat/"
              target="_blank"
              class="md-linkedin md-just-icon md-simple md-white"
            >
              <i class="fab fa-linkedin"></i>
            </md-button>
          </li>
        </ul>
      </div>
    </template>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    size: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      img1: require("@/assets/img/faces/card-profile6-square.jpg"),
      img2: require("@/assets/img/faces/christian.jpg"),
      img3: require("@/assets/img/faces/card-profile4-square.jpg"),
      img4: require("@/assets/img/faces/card-profile1-square.jpg"),
      img5: require("@/assets/img/faces/marc.jpg"),
      img6: require("@/assets/img/faces/kendall.jpg"),
      img7: require("@/assets/img/faces/card-profile5-square.jpg"),
      img8: require("@/assets/img/faces/card-profile2-square.jpg")
    };
  }
};
</script>
<style></style>
