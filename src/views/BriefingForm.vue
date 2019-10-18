<template>
  <div class="wrapper" id="content">
    <div class="section">
      <div class="container">
        <md-card>
          <h1 class="title" style="text-align:center">{{ user_name }}</h1>
          <form novalidate @submit.prevent="validateForm">
            <div class="md-layout">
              <div
                class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
              >
                <md-field :class="getValidationClass('requester')">
                  <label for="requester">Requester</label>
                  <md-input
                    name="requester"
                    id="requester"
                    v-model="form.requester"
                    type="text"
                    :disabled="sending"
                    required
                  ></md-input>
                  <span class="md-error" v-if="!$v.form.requester.required">Kindly Fill this field</span>
                  <span class="md-error" v-else-if="!$v.form.requester.minlength">Invalid requester</span>
                </md-field>
              </div>
              <div
                class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
              >
                <md-field :class="getValidationClass('email')">
                  <label for="requester">Requester's Email</label>
                  <md-input
                    name="email"
                    id="email"
                    v-model="form.email"
                    type="email"
                    :disabled="sending"
                    required
                  ></md-input>
                  <span class="md-error" v-if="!$v.form.email.required">Kindly Fill this field</span>
                  <span class="md-error" v-else-if="!$v.form.email.email">Invalid email!</span>
                </md-field>
              </div>
              <div
                class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
              >
                <md-field :class="getValidationClass('advertiser')">
                  <label for="advertiser">Advertiser</label>
                  <md-input
                    name="advertiser"
                    id="advertiser"
                    v-model="form.advertiser"
                    type="text"
                    :disabled="sending"
                    required
                  ></md-input>
                  <span class="md-error" v-if="!$v.form.advertiser.required">Kindly Fill this field</span>
                  <span class="md-error" v-else-if="!$v.form.advertiser.minlength">Invalid requester</span>
                </md-field>
              </div>
              <div
                class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
              >
                <md-field :class="getValidationClass('campaignName')">
                  <label for="campaign-name">Campaign Name</label>
                  <md-input
                    name="campaign-name"
                    id="campaign-name"
                    v-model="form.campaignName"
                    :disabled="sending"
                    type="text"
                    required
                  ></md-input>
                  <span
                    class="md-error"
                    v-if="!$v.form.campaignName.required"
                  >Kindly Fill this field</span>
                </md-field>
              </div>
              <div
                class="md-layout-item md-size-30 md-xsmall-size-50 md-small-size-50 md-medium-size-50"
              >
                <md-datepicker
                  :class="getValidationClass('startDate')"
                  v-model="form.startDate"
                  :disabled="sending"
                  required
                >
                  <label>Campaign starts</label>
                  <span class="md-error" v-if="!$v.form.startDate.required">Kindly Fill this field</span>
                </md-datepicker>
              </div>
              <div
                class="md-layout-item md-size-30 md-xsmall-size-50 md-small-size-50 md-medium-size-50"
              >
                <md-datepicker
                  :class="getValidationClass('endDate')"
                  v-model="form.endDate"
                  :disabled="sending"
                  required
                >
                  <label>Campaign ends</label>
                  <span class="md-error" v-if="!$v.form.endDate.required">Kindly Fill this field</span>
                </md-datepicker>
              </div>
              <div
                class="md-layout-item md-size-10 md-xsmall-size-30 md-small-size-30 md-medium-size-30"
              >
                <md-field :class="getValidationClass('currency')">
                  <label>Currency</label>
                  <md-select v-model="form.currency" :disabled="sending" required>
                    <md-option default value="PHP">PHP</md-option>
                    <md-option value="USD">USD</md-option>
                  </md-select>
                  <span class="md-error" v-if="!$v.form.currency.required">Kindly Fill this field</span>
                </md-field>
              </div>
              <div
                class="md-layout-item md-size-30 md-xsmall-size-70 md-small-size-70 md-medium-size-70"
              >
                <md-field :class="getValidationClass('budget')">
                  <label>Estimated Budget</label>
                  <md-input v-model="form.budget" :disabled="sending" type="number" required></md-input>
                  <span class="md-error" v-if="!$v.form.budget.required">Kindly Fill this field</span>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100">
                <md-field :class="getValidationClass('objective')">
                  <label>Campaign Objective</label>
                  <md-textarea v-model="form.objective" :disabled="sending" md-autogrow required></md-textarea>
                  <span class="md-error" v-if="!$v.form.objective.required">Kindly Fill this field</span>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100">
                <md-field :class="getValidationClass('target')">
                  <label>Target Market</label>
                  <md-textarea v-model="form.target" :disabled="sending" md-autogrow required></md-textarea>
                  <span class="md-error" v-if="!$v.form.target.required">Kindly Fill this field</span>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100">
                <md-field :class="getValidationClass('competitors')">
                  <label>Competitors</label>
                  <md-textarea v-model="form.competitors" :disabled="sending" md-autogrow required></md-textarea>
                  <span class="md-error" v-if="!$v.form.competitors.required">Kindly Fill this field</span>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100">
                <md-field :class="getValidationClass('material')">
                  <label>Planned Materials</label>
                  <md-textarea v-model="form.material" :disabled="sending" md-autogrow required></md-textarea>
                  <span class="md-error" v-if="!$v.form.material.required">Kindly Fill this field</span>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100">
                <md-field>
                  <label>Additional Campaign Information</label>
                  <md-textarea v-model="form.additional" md-autogrow></md-textarea>
                </md-field>
              </div>
              <div
                class="md-layout-item md-size-55 md-xsmall-size-100 md-small-size-100 md-medium-size-100"
              >
                <md-table>
                  <md-table-row
                    slot="md-table-row"
                    v-for="(item,index) in form.rowData"
                    :key="index"
                  >
                    <md-table-cell>
                      <md-field>
                        <label>Digital Assets</label>
                        <md-select v-model="item.assets">
                          <md-option value="Facebook">Facebook</md-option>
                          <md-option value="Twitter">Twitter</md-option>
                          <md-option value="Instagram">Instagram</md-option>
                          <md-option value="LinkedIn">LinkedIn</md-option>
                          <md-option value="Youtube">Youtube</md-option>
                          <md-option value="Website">Website</md-option>
                        </md-select>
                      </md-field>
                    </md-table-cell>
                    <md-table-cell>
                      <md-field>
                        <md-input
                          v-model="item.address"
                          type="text"
                          placeholder="ex)https://www.facebook.com/Example"
                        ></md-input>
                      </md-field>
                    </md-table-cell>
                    <md-table-cell>
                      <md-button class="md-just-icon md-round md-info" @click="addLine">
                        <md-icon>add</md-icon>
                      </md-button>
                      <md-button
                        class="md-just-icon md-round md-info"
                        @click="deleteLine(index)"
                        v-if="form.rowData.length > 1"
                      >
                        <md-icon>delete</md-icon>
                      </md-button>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
              <div
                class="md-layout-item md-size-45 md-xsmall-size-100 md-small-size-100 md-medium-size-100"
                id="ignorePDF"
              >
                <md-field>
                  <label>Additional attachments (Multiple files are allowed)</label>
                  <md-file v-model="multiple" id="myFile" @change="onFileChange()" multiple/>
                </md-field>
              </div>
              <br>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item"></div>
              <div class="md-layout-item" align="center">
                <md-button class="md-info md-lg" type="submit" v-if="!sending">{{ buttonMsg }}</md-button>
                <md-button class="md-danger md-lg" v-if="sending">{{ buttonMsg }}</md-button>
              </div>

              <div class="md-layout-item"></div>
            </div>
          </form>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import jsZip from "jszip";
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { USER, PASS } from "../API_KEY";

export default {
  name: "briefingform",
  mixins: [validationMixin],
  data: () => ({
    isLogin: true,
    user_name: null,
    lines: [],
    multiple: null,
    dataUriForFiles: "",
    attachName: "",
    blockRemoval: true,
    assetList: "",
    addressList: "",
    path: "",
    form: {
      requester: "",
      email: "",
      advertiser: "",
      campaignName: "",
      startDate: "",
      endDate: "",
      currency: "PHP",
      budget: "",
      objective: "",
      target: "",
      material: "",
      competitors: "",
      additional: "",
      assets: "",
      address: "",
      rowData: []
    },
    userSaved: false,
    sending: false,
    buttonMsg: "Submit Request"
  }),
  validations: {
    form: {
      requester: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      advertiser: {
        required,
        maxLength: minLength(3)
      },
      campaignName: {
        required
      },
      startDate: {
        required
      },
      endDate: {
        required
      },
      currency: {
        required
      },
      budget: {
        required
      },
      objective: {
        required
      },
      target: {
        required
      },
      competitors: {
        required
      },
      material: {
        required
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },

    // To add line for digital assets
    addLine() {
      var my_object = {
        asset: this.form.assets,
        address: this.form.address
      };
      this.form.rowData.push(my_object);

      this.form.assets = "";
      this.form.address = "";
    },

    // Delete line in digital assets line
    deleteLine(lineId) {
      this.form.rowData.splice(lineId, 1);
    },

    // To validate Form which is required
    validateForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveDigitalAssets();
        this.fixDate();
        this.makePDF();
      }
    },

    // Sending an email using SmtpJS
    sendForm(Data) {
      // add <br> for spacing with enter key
      this.form.objective = this.form.objective.replace(
        /(?:\r\n|\r|\n)/g,
        "<br>"
      );
      this.form.target = this.form.target.replace(/(?:\r\n|\r|\n)/g, "<br>");
      this.form.competitors = this.form.competitors.replace(
        /(?:\r\n|\r|\n)/g,
        "<br>"
      );
      this.form.material = this.form.material.replace(
        /(?:\r\n|\r|\n)/g,
        "<br>"
      );
      this.form.additional = this.form.additional.replace(
        /(?:\r\n|\r|\n)/g,
        "<br>"
      );

      this.assetList = this.assetList.replace(/(?:\r\n|\r|\n)/g, "<br>");
      this.addressList = this.addressList.replace(/(?:\r\n|\r|\n)/g, "<br>");

      var self = this;
      this.sending = true;
      var dataUri = `data:application/pdf;base64,${Data}`;
      Email.send({
        Host: "smtp.gmail.com",
        Username: USER,
        Password: PASS,
        To: "yohan.choi@davidandgolyat.com",
        Cc: this.form.email,
        From: USER,
        Subject: `Request from ${this.user_name}`,
        Body: `<div style='overflow-x: auto'>
          <h1 align='center' style='color: black'>BRIEFING FORM</h1>
          <table align='center' border='1' cellpadding='5' cellspacing='0' width='100%'
          style='font-family: Helvetica; color: #000000; border-collapse: collapse; text-align: center; border-color: black; vertical-align:middle;'>
          <tr>
          <th colspan='4' bgcolor='#000000' style='color: white'>REQUEST OVERVIEW</th>
          </tr>
          <tr>
          <td rowspan='3' width='25%'>CLIENT INFORMATION</td>
          <td width='20%'>REQUESTED BY</td>
          <td colspan='2' width='55%'>
          ${this.form.requester}
          </td>
          </tr>
          <tr>
          <td>E-MAIL</td>
          <td colspan='2'>
          ${this.form.email}
          </td>
          </tr>
          <tr>
          <td>ADVERTISER</td>
          <td colspan='2'>
          ${this.form.advertiser}
          </td>
          </tr>
          <tr>
          <td rowspan='5' bgcolor='Black' style='color: white;'>CAMPAIGN AND BILLING INFORMATION</td>
          <td rowspan='2'>CAMPAIGN</td>
          <td width='15%'>NAME</td>
          <td width='40%'>
          ${this.form.campaignName}
          </td>
          </tr>
          <tr>
          <td>OBJECTIVE</td>
          <td align='justify'>
          ${this.form.objective}
          </td>
          </tr>
          <tr>
          <td rowspan='3'>BUDGET AND PERIOD</td>
          <td>
          ${this.form.currency}
          </td>
          <td>
          ${this.form.budget}
          </td>
          </tr>
          <tr>
          <td>START DATE</td>
          <td>
          ${this.form.startDate}
          </td>
          </tr>
          <tr>
          <td>END DATE</td>
          <td>
          ${this.form.endDate}
          </td>
          </tr>
          <tr>
          <td rowspan='4'>MARKET INFORMATION</td>
          <td>TARGET MARKET</td>
          <td colspan='2' width='55%' align='justify'>
          ${this.form.target}
          </td>
          </tr>
          <tr>
          <td id='second'>COMPETITORS</td>
          <td colspan='2' align='justify'>
          ${this.form.competitors}
          </td>
          </tr>
          <tr>
          <td>MATERIALS</td>
          <td colspan='2' align='justify'>
          ${this.form.material}
          </td>
          </tr>
          <tr>
          <td>ADDITIONAL INFO</td>
          <td colspan='2' align='justify'>
          ${this.form.additional}
          </td>
          </tr>
          <tr>
          <td bgcolor='Black' style='color: white'>DIGITAL ASSETS</td>
          <td>
          ${this.assetList}
          </td>
          <td colspan='2'>
          ${this.addressList}
          </td>
          </tr>
          </table>
          </div>`,
        Attachments: [
          {
            name: `Briefing Form_${this.user_name}.pdf`,
            data: dataUri
          },
          {
            name: this.attachName,
            data: this.dataUriForFiles
          }
        ]
      }).then(message => {
        console.log(message);
        this.clearForm();
        this.$router.push({
          name: "thankyou"
        });
      });
    },

    //Make PDF File(JS)
    makePDF() {
      var fs = require("fs");
      var pdfMake = require("pdfmake/build/pdfmake.js");
      this.buttonMsg = "Sending...Please Wait";
      if (pdfMake.vfs == undefined) {
        var pdfFonts = require("pdfmake/build/vfs_fonts.js");
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
      }
      var docDefinition = {
        content: [
          {
            text: `BRIEFING FORM OF ${this.user_name}`,
            style: "header",
            alignment: "center"
          },
          {
            table: {
              widths: ["25%", "20%", "15%", "40%"],
              headerRows: 1,
              body: [
                // First Row
                [
                  {
                    text: "REQUEST OVERVIEW",
                    style: "tableHeader",
                    colSpan: 4,
                    alignment: "center"
                  },
                  "",
                  "",
                  ""
                ],
                // Client Information part
                [
                  {
                    rowSpan: 3,
                    text: "CLIENT INFORMATION",
                    alignment: "center"
                  },
                  {
                    text: "REQUESTED BY",
                    alignment: "center"
                  },
                  {
                    colSpan: 2,
                    text: this.form.requester,
                    alignment: "center"
                  },
                  ""
                ],
                [
                  "",
                  {
                    text: "E-MAIL",
                    alignment: "center"
                  },
                  {
                    colSpan: 2,
                    text: this.form.email,
                    alignment: "center"
                  },
                  ""
                ],
                [
                  "",
                  {
                    text: "ADVERTISER",
                    alignment: "center"
                  },
                  {
                    colSpan: 2,
                    text: this.form.advertiser,
                    alignment: "center"
                  },
                  ""
                ],
                // Campaign and billing Information part
                [
                  {
                    rowSpan: 5,
                    text: "CAMPAIGN AND BILLING INFORMATION",
                    alignment: "center"
                  },
                  {
                    rowSpan: 2,
                    text: "CAMPAIGN",
                    alignment: "center"
                  },
                  {
                    text: "NAME",
                    alignment: "center"
                  },
                  {
                    text: this.form.campaignName,
                    alignment: "center"
                  }
                ],
                [
                  "",
                  "",
                  {
                    text: "OBJECTIVE",
                    alignment: "center"
                  },
                  {
                    text: this.form.objective,
                    alignment: "justify"
                  }
                ],
                [
                  "",
                  {
                    rowSpan: 3,
                    text: "BUDGET AND PERIOD",
                    alignment: "center"
                  },
                  {
                    text: this.form.currency,
                    alignment: "center"
                  },
                  {
                    text: this.form.budget,
                    alignment: "center"
                  }
                ],
                [
                  "",
                  "",
                  {
                    text: "START DATE",
                    alignment: "center"
                  },
                  {
                    text: this.form.startDate,
                    alignment: "center"
                  }
                ],
                [
                  "",
                  "",
                  {
                    text: "END DATE",
                    alignment: "center"
                  },
                  {
                    text: this.form.endDate,
                    alignment: "center"
                  }
                ],
                // Market Information Part
                [
                  {
                    rowSpan: 4,
                    text: "MARKET INFORMATION",
                    alignment: "center"
                  },
                  {
                    text: "TARGET MARKET",
                    alignment: "center"
                  },
                  {
                    colSpan: 2,
                    text: this.form.target,
                    alignment: "justify"
                  },
                  ""
                ],
                [
                  "",
                  {
                    text: "COMPETITORS",
                    alignment: "center"
                  },
                  {
                    colSpan: 2,
                    text: this.form.competitors,
                    alignment: "justify"
                  },
                  ""
                ],
                [
                  "",
                  {
                    text: "MATERIALS",
                    alignment: "center"
                  },
                  {
                    colSpan: 2,
                    text: this.form.material,
                    alignment: "justify"
                  },
                  ""
                ],
                [
                  "",
                  {
                    text: "ADDITIONAL INFO",
                    alignment: "center"
                  },
                  {
                    colSpan: 2,
                    text: this.form.additional,
                    alignment: "justify"
                  },
                  ""
                ],
                // Digital Assets part
                [
                  {
                    text: "DIGITAL ASSETS",
                    alignment: "center"
                  },
                  {
                    text: this.assetList,
                    alignment: "center"
                  },
                  {
                    colSpan: 2,
                    text: this.addressList,
                    alignment: "center"
                  },
                  ""
                ]
              ]
            }
          }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
          }
        },
        defaultStyle: {}
      };
      //pdfMake.createPdf(docDefinition).download("test.pdf");
      var pdf = pdfMake.createPdf(docDefinition);
      var pdfData;
      var self = this;
      pdf.getBase64(function(encodedString) {
        pdfData = encodedString;
        self.sendForm(pdfData);
      });
    },

    // To save Digital Assets for PDF form
    saveDigitalAssets() {
      for (var item in this.form.rowData) {
        this.assetList += this.form.rowData[item].assets + "\n";
        this.addressList += this.form.rowData[item].address + "\n";
      }
    },

    // To fix date
    fixDate() {
      this.form.startDate = this.form.startDate.toString().substring(4, 15);
      this.form.endDate = this.form.endDate.toString().substring(4, 15);
    },

    // Clear Form after sending an email
    clearForm() {
      this.$v.$reset();
      this.form.requester = "";
      this.form.email = "";
      this.form.advertiser = "";
      this.form.campaignName = "";
      this.form.startDate = "";
      this.form.endDate = "";
      this.form.currency = "PHP";
      this.form.budget = "";
      this.form.objective = "";
      this.form.target = "";
      this.form.material = "";
      this.form.competitors = "";
      this.form.additional = "";
      this.form.assets = "";
      this.form.address = "";
      this.form.rowData = [];
    },
    // Make Zip file for multiple attachments
    onFileChange() {
      var zip = new jsZip();
      var numberOfFiles = event.srcElement.files.length;
      var numberOfProcessedFiles = 0;
      var self = this;
      for (var i = 0; i < numberOfFiles; i++) {
        (function(i) {
          var file = event.srcElement.files[i];
          var reader = new FileReader();
          reader.readAsBinaryString(file);
          reader.onload = function() {
            numberOfProcessedFiles++;
            zip.file(file.name, btoa(reader.result), { base64: true });
            if (numberOfProcessedFiles) {
              zip.generateAsync({ type: "base64" }).then(function(content) {
                self.dataUriForFiles = `data:application/x-zip-compressed;base64,${content}`;
                self.attachName = "Attachment.zip";
              });
            }
          };
        })(i);
      }
    }
  },
  mounted() {
    this.addLine();
    this.user_name = this.$route.params.code;
    console.log(`Hello, ${this.user_name}`);

    // To prevent unauthorized approach
    if (this.user_name == null) {
      alert("Login Required.");
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>