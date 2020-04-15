<script> 
import Vue from 'vue'
import { ConversationalForm } from 'conversational-form';

export default Vue.component('MyForm', {
  template: '<div class="myForm"></div>',
  styles: [`
    .myForm {
      position: relative;
      height: 100%;
      width: 100%;
    }
  `],
  methods: {
    setupForm: function () {
      const formFields = [
        {
          'tag': 'input',
          'type': 'text',
          'name': 'firstname',
          'cf-questions': 'What is your firstname?'
        },
        {
          'tag': 'input',
          'type': 'text',
          'name': 'lastname',
          'cf-questions': 'What is your lastname?'
        }
      ];

      this.cf = ConversationalForm.startTheConversation({
        options: {
          submitCallback: this.submitCallback,
          preventAutoFocus: true,
        },
        tags: formFields
      });
      this.$el.appendChild(this.cf.el);
    },
    submitCallback: function () {
      var formDataSerialized = this.cf.getFormData(true);
      console.log("Formdata, obj:", formDataSerialized);
      this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
    }
  },
  // mounted: function () {
  //   this.setupForm()
  // },

  mounted() {
            $(document).ready(() => {
              $("form").conversationalForm({
                formEl: document.getElementById("form"),
                context: document.getElementById("cf-context"),
                userImage: "https://gulpjs.com/img/gulp-white-text.svg",
                robotImage: "https://static.wixstatic.com/media/170a47_2959d43fa79b4f6781b188e639c58303~mv2.png/v1/crop/x_339,y_0,w_754,h_882/fill/w_33,h_38,al_c,q_80,usm_0.66_1.00_0.01/170a47_2959d43fa79b4f6781b188e639c58303~mv2.webp",
                submitCallback: () => {
                  this.callSuccess()
                }
              })
            })
        },
});
</script> 