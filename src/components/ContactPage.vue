<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            <h1>Contact Us</h1>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-textarea
                v-model="message"
                :rules="messageRules"
                label="Message"
                required
              ></v-textarea>

              <v-btn :disabled="!valid" color="primary" @click="submit">
                Submit
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card class="mt-4">
          <v-card-title>
            <h2>Our Location</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9958890096723!2d77.63960807425443!3d12.972114514868645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a77f100f77%3A0xc5ec8c9958653929!2sOntrack%20%7C%20Bike%20Rentals%20in%20Bangalore%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1721689995046!5m2!1sen!2sin" width="300" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <!-- <v-img
                  src="https://via.placeholder.com/300"
                  alt="Location Image"
                  max-width="100%"
                  height="auto"
                ></v-img> -->
              </v-col>
              <v-col cols="12" md="6">
                <p>
                 No 3, 1, 1st Main Rd, Tavarekere, Venkateshwara Layout, S.G. Palya, Bengaluru, Karnataka 560029
                </p>
                <p>
                  Phone: +91 9148518401
                </p>
                <p>
                  Email: info@on-track.in
                </p>
                <v-row >
                  <v-col>
                    <v-btn icon>
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-youtube</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      message: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 500) || 'Message must be less than 500 characters',
      ],
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // handle form submission
        alert('Form submitted!')
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  padding: 16px;
}
</style>
