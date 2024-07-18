<template>
  <div>
    <div>
      <h1>Data Binding in Vue js</h1>
      <h2 style="white-space: pre-line">{{ message }}</h2>
      <textarea type="text" placeholder="Edit Me" v-model="message" />
    </div>

    <div>
      <h1>Two Way Data Binding</h1>
      <input type="text" placeholder="type here" v-model="count" />
      <h2 style="color: red">{{ count }}</h2>
    </div>

    <hr />

    <div>
      <h1>Data from API (axios)</h1>
      <h2>Employee Lists</h2>
      <table border="1px">
        <tr>
          <td>Name</td>
          <td>Salary</td>
          <td>Age</td>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
          <td>{{ item.employee_name }}</td>
          <td>{{ item.employee_salary }}</td>
          <td>{{ item.employee_age }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "DataBind",
  data() {
    return {
      message: "Hello World",
      count: 10,
      list: undefined,
    };
  },

  mounted() {
    Vue.axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((Response) => {
        this.list = Response.data.data;
        console.warn(Response.data.data);
      });
  },
};
</script>
