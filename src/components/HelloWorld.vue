<template>
  <v-container>
    <v-row>
      <v-col lg="7" class="mt-10">
        <h1 class="d-flex justify-center mr-9 mt-16 mb-3">Rent it Out to</h1>
        <h1 class="d-flex justify-center mr-9 mb-3 display-2 primary--text">
          EXPLORE THE WORLD
        </h1>
        <h3 class="d-flex justify-center mr-9 font-weight-bold display-1">
          India's favourite two-wheeler super app
        </h3>
        <v-row class="d-flex justify-center mt-10 mr-7">
          <v-btn color="success" class="white--text mr-8" rounded
            ><v-icon>mdi-google-play</v-icon>Play Store</v-btn
          >
          <v-btn color="indigo" class="white--text" rounded
            ><v-icon>mdi-apple</v-icon>App Store</v-btn
          >
        </v-row>
      </v-col>

      <v-col>
        <v-col lg="15">
          <img
            height="100%"
            width="100%"
            src="https://img.freepik.com/free-vector/rockers-concept-illustration_114360-12698.jpg?ga=GA1.1.880112540.1690776464&semt=ais_user"
            alt=""
          />
          <!-- <img height="100%" width="100%" src="https://img.freepik.com/premium-vector/realistic-motorcycle-vector-illustration-concept_1253202-27354.jpg?ga=GA1.1.880112540.1690776464&semt=ais_user" alt="" /> -->
          <!-- <img height="110%" width="110%" src="https://img.freepik.com/free-vector/motocross-abstract-concept-vector-illustration-adventure-sport-motorsport-championship-motorbike-race-extreme-track-motorcross-rally-enduro-dirt-bike-bicycle-rider-moto-abstract-metaphor_335657-4273.jpg?ga=GA1.1.880112540.1690776464&semt=ais_user" alt="" /> -->
        </v-col>
      </v-col>
    </v-row>

    <v-divider class="mt-16"></v-divider>

    <v-row align="center" justify="center">
      <v-col lg="8" class="text-center mt-6">
        <h1>Bike Rentals in Bangalore</h1>
      </v-col>
    </v-row>

    <v-card class="mt-8" color="blue darken-1" elevation="8" outlined rounded>
      <div class="mt-15 mb-15">
        <h1 class="ml-10 white--text">monthly rentals</h1>
        <p class="ml-10 mt-5 white--text text-h6">
          rent a bike for a month in bangalore starting at ₹ 3,999.00 only.
        </p>
        <v-btn class="black--text ml-10" elevation="7" to="/bikes"
          ><v-icon></v-icon>Rent Now</v-btn
        >
      </div>
    </v-card>
    <v-card class="mt-15 mb-15 d-flex align-center justify-space-between">
      <div class="mt-15" v-for="(slist, index) in slist" :key="index">
        <v-row class="mt-5 ml-10 mb-6">
          <v-col class="">
            <img class="ml-15" height="30%" width="20%" :src="slist.image" />
            <h2 class="ml-10">{{ slist.heading }}</h2>
            <p class="text-subtitle-2 text-left mt-7">{{ slist.para }}</p>
            <p class="text-subtitle-2 text-left ml-5">{{ slist.para2 }}</p>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <div>
      <h1 class="text-center mb-4 font-weight-light">
        one app. powering it all.
      </h1>
      <img
        height="100%"
        width="100%"
        src="https://on-track.in/wp-content/uploads/2023/01/Untitled-design-3-1-1024x417.png"
      />
    </div>

    <!-- Others  -->
    <template>
      <v-card class="pa-10 mt-10" color="light-blue lighten-1" rounded>
        <v-responsive class="overflow-y-auto" max-height="400">
          <h1 class="pa-5 text-center">Pickup Location</h1>

          <v-responsive height="100vh" class="text-center pa-2">
            <v-responsive min-height="5vh"></v-responsive>

            <v-timeline>
              <v-timeline-item class="text-left">Indranagar</v-timeline-item>
              <v-timeline-item class="text-right"> Kormagala </v-timeline-item>
              <v-timeline-item class="text-left">Girinagar</v-timeline-item>
            </v-timeline>

            <v-lazy
              v-model="isActive"
              :options="{
                threshold: 0.5,
              }"
              min-height="200"
              transition="fade-transition"
            >
              <v-card class="mx-auto" max-width="336" color="lime darken-4">
                <v-card-title class="white--text">Ontrack</v-card-title>

                <v-card-text class="white--text">
                  Phasellus magna. Quisque rutrum. Nunc egestas, augue at
                  pellentesque laoreet, felis eros vehicula leo, at malesuada
                  velit leo quis pede. Aliquam lobortis. Quisque libero metus,
                  condimentum nec, tempor a, commodo mollis, magna. In turpis.
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo. In turpis. Pellentesque dapibus hendrerit tortor. Ut
                  varius tincidunt libero.
                </v-card-text>
              </v-card>
            </v-lazy>
          </v-responsive>
        </v-responsive>
      </v-card>
    </template>
    <!-- Others -->
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      slist: [
        {
          image:
            "https://on-track.in/wp-content/uploads/2023/02/003-bankruptcy.svg",
          heading: "zero security deposit",
          para: "no need to pay any security deposit. we only ask",
          para2: "you for the rental amount and nothing else.",
        },
        {
          image:
            "https://on-track.in/wp-content/uploads/2023/02/004-toolbox.svg",
          heading: "maintenance covered",
          para: "we cover servicing of your rented bike for free!",
          para2: "just shoot us a request and we’ll do it asap.",
        },
        {
          image:
            "https://on-track.in/wp-content/uploads/2023/02/010-remain.svg",
          heading: "unrestricted km",
          para: "there is no limit on how many kilometers",
          para2: "you can ride your rented bike for.",
        },
      ],
      isActive: false,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
