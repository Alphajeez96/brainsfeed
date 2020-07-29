<template>
<div>

    <!-- <h1>{{ companies ? companies.specialties : 'Not available' }}</h1> -->
       <div class='body'>
        <div class='container px-0'>
            <div class='row'>

                <!-- Details holder here -->
                <div class="col-md-8">
                    <div class="row white__bg">

                        <!-- Image/screenshot here -->
                        <div class="col-md-6 img__holder">
                        <div>                            <img src="https://i.imgur.com/Vv5vBOn.png" class='img-fuid' alt=""></div>

                        </div>

                        <div class="col-md-6 ">
                            <div class="details">
                                <h3>Title :FIrst Opportunity Eer</h3>
                                <h5>FOunded: <span></span></h5>
                                <h5>headquaters: <span></span></h5>
                                <h5>Address : <span></span></h5>


                            </div>
                            <div>
                                <ul>
                                    <li>rating:</li>
                                    <li>price:</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mini side bar here -->
                <div class="col-md-4 white__bg">
hhhh
                </div>
            </div>
        </div>
       </div>
        
  
</div>  
</template>

<script>
const axios = require('axios')
const About = {
  props: ['companyid'],
}

export default {
  name: '',
  data() {
    return {
      secretKey: '$2b$10$Wb8VppNIDoAhIAB8n8oFnuCuOnANGbL7pxknMH8lhYplG40/hi5LC',
      companies: null,
      router: this.$route.params.companyid,
    }
  },
  mounted() {
    this.getCompany()
  },
  methods: {
    async getCompany() {
      try {
        let response = await this.$http.get(
          `https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275`,
          {
            headers: {
              'secret-key': this.secretKey,
            },
          },
        )

        console.log(this.router)

        console.log(response.data)
        this.companies = response.data.find(
          (company) => company.objectID === this.router,
        )
        console.log(this.companies)
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>
<style scoped>
.body {
    background: #F6F8FA;
    height: 100%
}

.white__bg {
    background: white;
    border: 2px solid white;
    width: 100%;
    box-shadow: 0 0.75rem 6rem rgba(56,65,74,.03);
    margin-bottom: 24px;
    border-radius: .25rem;
    padding: 2rem;
    margin-top:20px
}
.img__holder img{
    height:40vh
}
</style>