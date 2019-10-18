<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <form novalidate class="md-layout" @submit.prevent="submit">
            <div
              class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
            >
              <login-card header-color="info">
                <h3 slot="title" class="card-title">Briefing Form</h3>
                <h4 slot="title" class="card-title">Log in using the code</h4>
                <div class="alert alert-danger" v-if="error">{{ error }}</div>
                <md-field :class="getValidationClass('code')" slot="inputs">
                  <md-icon>fingerprint</md-icon>
                  <label>Client Code...</label>
                  <md-input name="code" id="code" v-model="form.code"></md-input>
                  <span class="md-error" v-if="!$v.form.code.required">The code is required</span>
                  <span class="md-error" v-if="!$v.form.code.minLength">Invalid code</span>
                  <span class="md-error" v-if="!$v.form.code.maxLength">Invalid code</span>
                </md-field>
                <md-button type="submit" slot="footer" class="md-simple md-info md-lg">Log In</md-button>
              </login-card>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import Mixins from "@/plugins/basicMixins";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import axios from "axios";
import codes from "../assets/client_codes.json";

export default {
  mixins: [Mixins.HeaderImage, validationMixin],
  name: "login",
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data: () => ({
    image: require("@/assets/img/DnG/david_donatello_bg.jpg"),
    form: {
      code: null
    },
    error: false,
    client_name: null
  }),
  validations: {
    form: {
      code: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(8)
      }
    }
  },
  methods: {
    submit() {
      var code = this.form.code;
      var json = codes;
      // Validation
      this.$v.form.$touch();
      if (this.$v.form.$error) return;

      // Match the code with code file
      var found = json.find(function(element) {
        return element.code == code.toUpperCase();
      });

      if (found) {
        this.client_name = found.client_name;
        alert("Welcome! " + this.client_name);
        this.$router.push({
          name: "briefingform",
          params: { code: this.client_name }
        });
      } else {
        alert("Invalid code!");
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    }
  }
};
</script>

<style scoped>
</style>
