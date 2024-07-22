<template>
  <div class="bike">
    <v-row no-gutters>
      <div class="box" v-for="(bikes, index) in bikes" :key="index">
        <v-card :loading="loading" class="mx-auto my-12" max-width="290">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="210" :src="bikes.image"></v-img>

          <v-card-title>{{ bikes.name }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="Number(bikes.rating)"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="green--text ms-4">{{ bikes.rating }} ({{bikes.totalRatings}})</div>
            </v-row>
            <br />
            <div class="bg-primary blue--text">
              Price for first time booking
            </div>

            <div class="my-3 text-subtitle-1 black--text">
              ₹ {{ bikes.price }}
            </div>

            <v-img
              height="auto"
              width="100px"
              src="https://book.on-track.in/img/zero-deposit.bc895812.svg"
            ></v-img>

            <div class="green--text"><br />Summer Days Sale</div>
          </v-card-text>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ModelList",
  data() {
    return {
      bikes: [
        {
          name: "Hero Duet",
          rating: 4.7,
          totalRatings: 556,
          price: "4199/month",
          image: "https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-duet-bangalore-min.webp",
        },
        {
          name: "Honda Shine 2024",
          rating: 4.3,
          totalRatings: 756,
          price: "5399/month",
          image: "https://on-track-jarvis.s3.ap-south-1.amazonaws.com/107a242755abc802ef75751057ca0822",
        },
        {
          name: "Honda Dio",
          rating: 4.1,
          totalRatings: 256,
          price: "4099/month",
          image: "https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-honda-dio-bangalore-min.webp",
        },
        {
          name: "TVS Sports",
          rating: 2.2,
          totalRatings: 456,
          price: "3799/month",
          image: "https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-TVS-sport-bangalore-min.webp",
        },
      ],
    };
  },
  methods: {
    selectBike(bike) {
      alert(`Selected Bike: ${bike.name}`);
    },
  },
};
</script>

<style>
</style>
