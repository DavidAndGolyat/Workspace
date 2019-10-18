<template>
  <div class="wrapper">
    <div class="section" id="page_section">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <img :src="img1">
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <p class="context" id="title">Comprehensive Digital Intelligence</p>
            <hr style="border: solid 0.5px white">
            <br>
            <p
              class="context"
            >Consumer digital consumption is disrupting the way businesses and brands engage with them. Some brands have paced themselves to meet with the digital demand, while others are still in the process of learning and transformation.</p>
            <p
              class="context"
            >DAVID’S STAR helps businesses paint a clear picture on how to draw calculated decisions in this complex digital landscape. Each corner of DAVID’S STAR represents insights and analyses to help businesses define its digital business objectives, know the competitive landscape, assess the market, identify and improve customer experience, spearhead customer insights, and assess the business from a comprehensive standpoint.</p>
            <p
              class="context"
            >With DAVID’S STAR, brands can access the full suite of tools and analyses to make informed decisions without having to spend additional effort and resources.</p>
            <br>
          </div>
          <div class="md-layout-item">
            <hr style="border: solid 0.25px gray">
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <img :src="img2">
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <p class="context" id="title">Precesion-driven Performance</p>
            <hr style="border: solid 0.5px white">
            <br>
            <p
              class="context"
            >Slingshot is a 360-degree MarTech service that consolidates cutting-edge MarTech platforms available in the digital industry.</p>
            <p
              class="context"
            >Each SlingShot channel focuses on delivering best-in-class outcomes and results for brands and provides the most out of every investment.</p>
            <p
              class="context"
            >SlingShot Connect enables the integration of MarTech platforms with the brand’s digital assets so that they could properly execute data mining opportunities to convey their messages contextually and precisely.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "services",

  data() {
    return {
      img1: require("@/assets/img/DnG/DAVIDS-STAR_logo_web.jpg"),
      img2: require("@/assets/img/DnG/SLINGSHOT_logo_web.jpg")
    };
  }
};
</script>

<style scoped>
#page_section {
  background-color: black;
}
.context {
  color: white;
  font-size: 1em;
  text-align: justify;
}
#title {
  font-size: 1.85em;
  font-weight: 410;
}
.md-layout {
  padding-top: 5em;
  padding-bottom: 1em;
}
</style>