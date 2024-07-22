<template>
  <div>
    <v-card max-width="600" class="mx-auto">
      <v-container>
        <div class="text-right">
          <v-btn @click="showInfo = true" icon
            ><v-icon>mdi-information</v-icon></v-btn
          >
        </div>
        <v-form id="submitForm">
          <div>
            <v-text-field label="Name" />
          </div>
          <div>
            <v-text-field label="Email" />
          </div>
          <div>
            <v-text-field label="Password" />
          </div>
          <v-btn @click="showAlert" type="submit">Submit</v-btn>
          <!-- <v-icon right> mdi-account-circle-outline </v-icon> -->
        </v-form>
      </v-container>
    </v-card>
    <v-bottom-sheet v-model="showInfo">
      <v-card>
        <v-container>
          <h1>Info</h1>
          <div>
            The bottom sheet is a modified v-dialog that slides from the bottom
            of the screen, similar to a v-bottom-navigation. Whereas a bottom
            navigation component is for buttons and specific application level
            actions, a bottom sheet can contain anything.
          </div>
        </v-container>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: "SimpleForm",
  data() {
    return {
      showInfo: false,
    };
  },

  methods: {
    showAlert() {
      alert("Form submitted successfully!");
    },
  },
};
</script>
