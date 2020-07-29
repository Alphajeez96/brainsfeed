<template>
<header>
        <section class="container main-div px-0">
            <nav class="navbar navbar-expand-lg  navbar-light">
                <a class="navbar-brand a-text flex" href="#">
                   <h2>{{companies.company_name}}</h2>
                </a>
                <button class="navbar-toggler" style="color: lemonchiffon !important;" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

           
            </nav>
        </section>
    </header>
</template>
<script>
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
</script>
<style scoped>
header {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    margin-bottom: 40px;
}

.nav-item {
    font-family: 'Poppins', sans-serif;
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    font-style: normal;
}
</style>