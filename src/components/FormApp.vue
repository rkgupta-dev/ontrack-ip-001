<template>
  <div>
    <form id="submitForm">
      <div>
        <label>Name:</label>
        <input type="text" id="name" placeholder="Name" >
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" id="phone" placeholder="Phone" >
      </div>
      <button @click="showAlert" type="submit">Submit</button>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'ModelList',
  
  methods: {
        showAlert() {
      alert('Form submitted successfully!');
  }
}

}

</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  border: 2px solid red;
  background-color: #8b5b5b;
  border-radius: 1em;
}
div {
  margin-bottom: 1em;
}
label {
  margin-bottom: .5em;
  color: white;
  display: block;
  /* text-align: left; */
}
input {
  border: 1px solid #CCCCCC;
  padding: .5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}
button {
  padding: 0.7em;
  color: #fff;
  background-color: red;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
button:hover {
  color: white;
  background-color: green;
  /* text-transform: uppercase; */
}
</style>
