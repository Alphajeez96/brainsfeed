<template>
  <div>
    <div class="container">
      <div class="row">
    
<div class="col-md-6" v-for="company in companies" :key="company.objectID" >
            <div class="row white__bg">
              <!-- Image/screenshot here -->
              <div class="col-md-4 img__holder">
                <div>
                  <img
                    :src="`${company.logo}`"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class=''>
                <h3>{{company.company_name}}</h3>
                </div>
              </div>

              <div class="col-md-8">
                <div class="details">
                  <h4>{{  company.title_  }}</h4>
               
                  <h5 class="pt-3">
                    headquaters:
                    <span>
                      {{ company.headquarters }}
                    </span>
                  </h5>
                  <h5 class="pt-3">
                    Industry:
                    <span>
                      {{  company.industry  }}
                    </span>
                  </h5>
               
   <h5 class="pt-3">
                    Founded:
                    <span>
                      {{ company.founded   }}
                    </span>
                  </h5>
                  <div class="inline">
                 
                     <h5 class="pt-3">
                    Description :
                    <span>
                    <v-clamp autoresize :max-lines="2">{{
                         company.Short_description 
                      }}</v-clamp>
                      
                    </span>
                  </h5>
                    <router-link :to="{ name: 'About', params: { companyid: company.objectID }}">Read More</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
import VClamp from 'vue-clamp'

export default {
  components: {
    VClamp
  },
  name: 'home',
  data() {
    return {
      secretKey: "$2b$10$Wb8VppNIDoAhIAB8n8oFnuCuOnANGbL7pxknMH8lhYplG40/hi5LC",
      companies:[]
    }
  },
  mounted() {
    this.getCompany()
  },
  methods: {
    async getCompany() {
      try {
        let response = await this.$http.get(
          `https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275`,{
              headers:{
                  "secret-key": this.secretKey
              }
          }
        )
        console.log(response.data)
        this.companies = response.data
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
<style scoped>
.Logo__holder {
  width: 2px;
  height: 10vh;
  background: white;
  border: 2px solid red;
  border-radius: 10px;
  box-shadow: green;
}
.card-text {
  text-align: left;
}
.company__title {
  font-style: italic;
  position: relative;
  bottom: 7px;
}
.card ::after{
        transition: all .6s cubic-bezier(.165,.84,.44,1);
}
.card{
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0,0,0,.15);
}
.card-title{
    font-size:20px
}
.white__bg {
  background: white;
  border: 2px solid white;
  width: 100%;
  -webkit-box-shadow: 2px 2px 7px -3px rgba(0,0,0,0.79);
-moz-box-shadow: 2px 2px 7px -3px rgba(0,0,0,0.79);
box-shadow: 2px 2px 7px -3px rgba(0,0,0,0.79);
  margin-bottom: 24px;
  border-radius: 0.25rem;
  padding: 2rem;
  margin-top: 20px;

}
.details {
  text-align: left;
}
.inline p {
  display: inline;
}
h4{
  font-size: 20px;

}
h5{
  font-size: 16px;
}
 .pt-3 span{
  font-size: 14px;
  line-height: 22px;
}
a {
  text-decoration: none !important;
}
h3{
font-size: 22px;
margin-top: 20px;
}
</style>
