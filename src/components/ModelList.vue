<template>
  <div>
    <div>
      <label>Home</label>
      <p>Loaded 04 of 04 entries</p>
    </div>
    <div class="mainbox">
      <div class="box" v-for="(bike, index) in bikes" :key="index">
        <img :src="bike.image" alt="" />
        <h3>{{ bike.brand }}</h3>
        <h4>Price: ${{ bike.price }}</h4>
        <h6 border="1px">Price for first time booking</h6>
        <button>Rent Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelList",

  data() {
    return {
      bikes: [
        {
          brand: "Honda",
          model: "SP Shine",
          color: "Red",
          price: 8500,
          image:
            "https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-hf-100-min.webp",
        },
        {
          brand: "Bajaj",
          model: "Pulsar 150",
          color: "Black",
          price: 9500,
          image:
            "https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-hf-100-min.webp",
        },
        {
          brand: "Hero",
          model: "HF 100",
          color: "Blue",
          price: 5500,
          image:
            "https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-hf-100-min.webp",
        },
        {
          brand: "Hero",
          model: "HF 100",
          color: "Blue",
          price: 5500,
          image:
            "https://on-track-jarvis.s3.ap-south-1.amazonaws.com/monthly-rental/rent-hero-hf-100-min.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
label {
  padding-right: 75rem;
  color: blue;
}

p {
  font-size: 12px;
  padding-right: 70rem;
}

.box img {
  height: 200px;
}

.box {
  box-sizing: auto;
  height: 420px;
  width: 310px;
  border: 2px solid black;
  background: rgb(240, 250, 250);
  margin-left: -2px;
}

.mainbox {
  display: inline-flex;
  padding: 2rem;
}

button {
  color: white;
  background-color: green;
  cursor: pointer;
}

.box:hover {
  cursor: pointer;
  border-radius: 15px;
}

.List {
  color: red;
}
</style>
