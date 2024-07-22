<template>
  <div>
    <v-app-bar  elevation="7"  color="primary" class="mb-2">
      <v-img src="https://on-track.in/wp-content/uploads/2020/10/logo-white.svg" class="mr-1" max-height="24" contain></v-img>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" class="mr-2" to="/">Home</v-btn>
      <v-btn depressed color="primary" class="mr-2" to="/form">Form</v-btn>
      <v-btn depressed color="primary" class="mr-2" to="/bikes">Bikes</v-btn>
      <v-btn depressed color="primary" class="mr-2" to="/about">About</v-btn>
      <v-btn depressed color="primary" class="mr-2" to="/contact">Contact</v-btn>
    </v-app-bar>

    

    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
