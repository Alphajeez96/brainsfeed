<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 my-2 col-lg-4"  v-for="company in companies" :key="company.objectID">
          <div class="card " style="width: 22rem"  >
            <div class="card-body">
              <!-- Company row here -->
              <div class="row">
                <div class="col-md-7">
                  <h4 class="card-title">{{company.company_name}}</h4>
                </div>
                <div class="col-md-5">
                  <h5 class="card-title">Social Icons</h5>
                </div>
              </div>

              <!-- Founded row here -->
              <div class="row">
                <div class="col-md-6">
                  <h6 class="company__title">{{company.title_}}</h6>
                  <h6 class="card-subtitle m mb-2 text-muted">
                    Founded:
                    <span>{{company.founded}}</span>
                  </h6>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3 Logo__holder">LOGO</div>
              </div>

              <p class="card-text pt-4">
               {{company.Short_description}}
              </p>
              <router-link :to="{ name: 'About', params: { companyid: company.objectID }}">Read More</router-link>
              <!-- <a href="#" class="card-link">Read More</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
export default {
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
</style>
