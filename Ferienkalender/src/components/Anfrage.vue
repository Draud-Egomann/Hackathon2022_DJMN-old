<template>
    <div v-for="dep in departments">  
      <div v-if="!dep.IsApproved"
      >
      {{ dep }}
    </div>
    </div>
  </template>
  
  <script lang="ts">
      const variables = {
        API_URL:"http://localhost:34474/API/Vacation"
    }
    const department={template: '<div> hi </div>'}
import axios from "axios"
export default {
  name: 'Anfrage',
  components: { },
  data() {
    let test = [1,2,3,4,5]
    return {
        departments:[],
        modalTitle:"",
        DepartmentName:"",
        DepartmentId:0,
        DepartmentNameFilter:"",
        DepartmentIdFilter:"",
    }
  },
  methods:{
    refreshData(){
        axios.get(variables.API_URL)
        .then((response) =>{
            this.departments=response.data
        })
        console.log(this.departments)
    }
  },
  mounted:function(){
    this.refreshData();
  }
}
  </script>
  
  <style scoped>
  
  </style>
  