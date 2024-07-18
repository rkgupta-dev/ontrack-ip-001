<template>
  <div>
    <v-app-bar>
      <v-btn exact-match depressed class="mr-2" to="/">Home</v-btn>
      <v-btn exact-match depressed class="mr-2" to="/form">Form</v-btn>
      <v-btn exact-match depressed class="mr-2" to="/about">about</v-btn>
      <v-btn exact-match depressed class="mr-2" to="/contact">contact</v-btn>
      <v-btn exact-match depressed class="mr-2" to="/bikes">bikes</v-btn>
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
