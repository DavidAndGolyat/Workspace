<template>
  <div class="wrapper" :style="headerStyle">
    <div class="container">
      <div class="main main-raised" style="margin: 2rem auto">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100 ml-auto">
            <h2 class="title mt-0">Send us a message</h2>
            <p class="description">
              You can contact us with anything related to our Services. We'll
              get in touch with you as soon as possible.
              <br>
              <br>
            </p>
            <form>
              <md-field>
                <label>Your Name</label>
                <md-input v-model="name" type="text"></md-input>
              </md-field>
              <md-field>
                <label>Email Adress</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field>
                <label>Phone</label>
                <md-input v-model="phone" type="number"></md-input>
              </md-field>
              <md-field>
                <label>Your message</label>
                <md-textarea v-model="textarea"></md-textarea>
              </md-field>
              <div class="submit text-center mt-3">
                <md-button class="md-info md-round" v-if="!sending" @click="Submit">Contact Us</md-button>
                <md-button class="md-danger md-round" v-if="sending">Sending...Please wait</md-button>
              </div>
            </form>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100 ml-auto">
            <info-areas class="pt-0" info-horizontal icon-color="info" icon="pin_drop">
              <h4 class="info-title" slot="title">Find us at the office</h4>
              <div class="description" slot="content">
                <p>
                  4th Floor, LV Locsin Building
                  <br>6752 Makati Ave, Legazpi Village,
                  <br>Makati, 1228 Metro Manila
                  <br>Philippines
                </p>
              </div>
            </info-areas>
            <info-areas class="pt-0" info-horizontal icon-color="info" icon="mail">
              <h4 class="info-title" slot="title">Give us a message</h4>
              <div class="description" slot="content">
                <p>
                  Miko David
                  <br>miko@davidandgolyat.com
                  <br>Mon - Fri, 9:00-19:00
                </p>
                <p>
                  Peter Kim
                  <br>peter@davidandgolyat.com
                  <br>Mon - Fri, 9:00-19:00
                </p>
              </div>
            </info-areas>
            <info-areas class="pt-0" info-horizontal icon-color="info" icon="business_center">
              <h4 class="info-title" slot="title">Legal Information</h4>
              <div class="description" slot="content">
                <p>David And Golyat Mgmt. Inc.</p>
              </div>
            </info-areas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InfoAreas } from "@/components";
import Mixins from "@/plugins/basicMixins";
import { USER, PASS } from "../API_KEY";
export default {
  mixins: [Mixins.HeaderImage],
  name: "contactus",
  components: {
    InfoAreas
  },
  bodyClass: "contact-us",
  data() {
    return {
      sending: false,
      image: require("@/assets/img/DnG/background-1.jpg"),
      name: null,
      email: null,
      phone: null,
      textarea: null
    };
  },

  methods: {
    Submit: function() {
      this.sending = true;
      this.fixMessage();
      Email.send({
        Host: "smtp.gmail.com",
        Username: USER,
        Password: PASS,
        To: "dashboard@davidandgolyat.com",
        From: USER,
        Subject: "Message from " + this.name,
        Body:
          "Name: " +
          this.name +
          "<br><br>" +
          "Email: " +
          this.email +
          "<br><br>" +
          "Phone: " +
          this.phone +
          "<br><br>" +
          "Message: " +
          this.textarea
      }).then(message => {
        console.log(message);
        this.$router.push({
          name: "thankyou"
        });
      });
    },
    fixMessage: function() {
      this.textarea = this.textarea.replace(/(?:\r\n|\r|\n)/g, "<br>");
    }
  }
};
</script>

<style lang="scss" scoped>
.mt-3 {
  margin-top: 1.5rem;
}
</style>
