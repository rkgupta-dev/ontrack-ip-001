<template>
  <div id="app">
    <div>{{ bike }}</div>

    <div>
      <p>'cat'</p>
      <p>'dog'</p>
      <p>'elephant'</p>
    </div>

    <div>
      <h2>Bike List</h2>
      <ul>
        <li v-for="(bike, index) in bikes" :key="index">
          <strong>{{ bike.brand }} {{ bike.model }}</strong> , Color:
          {{ bike.color }}, Price: ${{ bike.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "JsonArray",
  data() {
    return {
      bike: ["cat", "dog", "elephant"],
      bikes: [
        {
          brand: "Honda",
          model: "SP Shine",
          color: "Red",
          price: 8500,
          image:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-hf-100-min.webp"
        },
        {
          brand: "Bajaj",
          model: "Pulsar 150",
          color: "Black",
          price: 9500,image:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-hf-100-min.webp"
        },
        {
          brand: "Hero",
          model: "HF 100",
          color: "Blue",
          price: 5500,image:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-hf-100-min.webp"
        },
        {
          brand: "Hero",
          model: "HF 100",
          color: "Blue",
          price: 5500,image:"https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-hf-100-min.webp"
        },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
