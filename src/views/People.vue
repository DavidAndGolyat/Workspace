<template>
  <div class="wrapper">
    <div class="section section-team-2" id="section_miko">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-30 md-small-size-100"></div>
          <div class="md-layout-item md-size-40 md-small-size-100">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile1"
            >
              <template slot="cardContent">
                <h4 class="card-title">Miko David</h4>
                <h6 class="card-category text-muted">Co-Founder</h6>
              </template>
              <template slot="cardAction">
                <md-button
                  href="https://www.linkedin.com/in/mikodavid/"
                  class="md-linkedin md-just-icon md-round"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-30 md-small-size-100"></div>
          <div class="md-layout-item md-size-20 md-small-size-100"></div>
          <div class="md-layout-item md-size-60 md-small-size-100">
            <tabs :tab-active="1" :tab-name="['Career', 'Schools']" plain color-button="info">
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <p
                  class="tab_content"
                >Miko was previously Marketing Communications Director & Head of Digital for Globe Telecom’s Small & Medium Business Group (SG), where he oversaw all branding, performance marketing initiatives, social media activities, as well as data collection and attribution.</p>
                <p
                  class="tab_content"
                >Before Globe, he lived & worked in Madrid, Spain, where he served at the Global New Business HQ of Havas Media, one of the world’s largest communication firms. He was also based in the regional office in Singapore, where he served as Senior Digital Manager – leading digital and social media campaigns for several markets.</p>
                <p
                  class="tab_content"
                >Mr. David has taught over a thousand students from all over the world. He has taught masters students from London Business School, as well as IE Business School. He was previously Adjunct Faculty at National University of Singapore’s Institute of Systems Science (ISS), and was a part-time lecturer at Ateneo de Manila University as well as Ateneo Graduate School of Business.</p>
              </template>
              <template slot="tab-pane-2">
                <p
                  class="tab_content"
                >Mr. David earned his Master’s degree in Business Administration from IE Business School (currently ranked #8 globally, by Financial Times). He was also a Gold Award Recipient when he earned his Professional Diploma in Asia Pacific Marketing from the National University of Singapore (NUS), and Marketing Institute of Singapore (MIS). He acquired his Bachelor’s degree in Management from Ateneo de Manila University.</p>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>

    <!--------- Peter's Section --------->
    <div class="section section-team-2" id="section_peter">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-30 md-small-size-100"></div>
          <div class="md-layout-item md-size-40 md-small-size-100">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile2"
            >
              <template slot="cardContent">
                <h4 class="card-title" style="color:white !important">Peter Kyuchul Kim</h4>
                <h6 class="card-category text-muted" style="color:white !important">Co-Founder</h6>
              </template>
              <template slot="cardAction">
                <md-button
                  href="https://www.linkedin.com/in/kyuchul-peter-kim-83973954/"
                  class="md-linkedin md-just-icon md-round"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-30 md-small-size-100"></div>
          <div class="md-layout-item md-size-20 md-small-size-100"></div>
          <div class="md-layout-item md-size-60 md-small-size-100">
            <tabs :tab-active="1" :tab-name="['Career', 'Schools']" plain color-button="info">
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <p
                  class="black_background tab_content"
                >Peter was previously Digital Performance Lead at Starcom Mediavest Group, where he led performance marketing campaigns for Cebu Pacific, McDonald’s, Mead Johnson, and Samsung, among many clients, across 20 markets around the world.</p>
                <p
                  class="black_background tab_content"
                >Peter’s experience in performance marketing also stemmed from his prior experiences as One-Search Lead for Performics, and Digital Specialist within ZenithOptimedia, which led him to build a performance marketing unit within Starcom Mediavest Group, opening up three fold businesses YoY.</p>
                <p
                  class="black_background tab_content"
                >Mr. Kim has managed over Php 1 billion in online performance marketing executions – spanning display & programmatic advertising, search, and social. His experience has been valuable for Publicis Groupe, where he led training for digital performance marketing at SMG (Starcom Mediavest Group) University, leading 100+ students to be certified in Google, Facebook and Programmatic.</p>
                <p
                  class="black_background tab_content"
                >Peter is accredited as a Google Performance Guru (Blue Belt – 1st Batch Globally), and has certifications for Google DoubleClick Search, Google DoubleClick Campaign Manager, Google Advanced Search, Display, and Video, as well as certifications for Bing Ads and Facebook Studio Edge.</p>
              </template>
              <template slot="tab-pane-2">
                <p
                  class="black_background tab_content"
                >Mr. Kim earned his bachelor’s degree in counseling psychology and business management at Handong Global University in South Korea, and has been living in the Philippines for the past 15 years.</p>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard } from "@/components";
import { Tabs } from "@/components";
export default {
  name: "people",
  components: {
    ProfileCard,
    Tabs
  },
  data() {
    return {
      cardProfile: {
        cardProfile1: require("@/assets/img/DnG/DavidGolyat-MikoDavid.jpg"),
        cardProfile2: require("@/assets/img/DnG/DavidGolyat-PeterKim.jpg")
      },
      team4: require("@/assets/img/bg7.jpg"),
      team5: require("@/assets/img/examples/city.jpg")
    };
  },
  methods: {
    sectionTeam(image) {
      return {
        backgroundImage: `url(${image})`
      };
    }
  }
};
</script>

<style lang="scss">
#section_peter {
  background-color: black;
  padding-top: 1em;
  padding-bottom: 0px;
}

#section_miko {
  padding-bottom: 0px;
}

.black_background {
  color: white;
}

.tab_content {
  font-size: 1.15em;
  font-weight: 400;
  text-align: justify;
}
</style>