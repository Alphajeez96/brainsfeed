<template>
    <div>
    <div>
    <!-- <h1>{{ companies ? companies.specialties : 'Not available' }}</h1> -->
    <div class="body">
      <div class="container px-0">
        <div class="row">
          <!-- Details holder here -->
          <div class="col-md-8">
            <div class="row white__bg">
              <!-- Image/screenshot here -->
              <div class="col-md-6 img__holder">
                <div>
                  <img
                    :src="`${companies.screenshot}`"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="details">
                  <h4>{{ companies ? companies.title_ : 'Not available' }}</h4>
                  <h5 class="pt-3">
                    Founded:
                    <span>
                      {{ companies ? companies.founded : 'Not available' }}
                    </span>
                  </h5>
                  <h5 class="pt-3">
                    headquaters:
                    <span>
                      {{ companies ? companies.headquarters : 'Not available' }}
                    </span>
                  </h5>
                  <h5 class="pt-3">
                    Industry:
                    <span>
                      {{ companies ? companies.industry : 'Not available' }}
                    </span>
                  </h5>
                  <h5 class="pt-3">
                    Address :
                    <span>
                      {{
                        companies ? companies.companyAddress : 'Not available'
                      }}
                    </span>
                  </h5>

                  <div class="inline pt-3">
                    <p>
                      Rating:
                      {{ companies ? companies.rating : 'Not available' }}
                    </p>
                    <p class="mx-4">
                      Price: {{ companies ? companies.price : 'Not available' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mini side bar here -->
          <div class="col-md-4 white__bg">
            <h4>Company Info</h4>
            <div>
              <img :src="`${companies.logo}`" alt="" />
            </div>
            <div>
              <span class="badge badge-pill badge-success">
                {{ companies ? companies.type : 'Not available' }}
              </span>
            </div>
            <div>
              <h6>
                {{ companies ? companies.company_name : 'Not available' }}
              </h6>
            </div>
            <div>
              <h6>
                {{ companies ? companies.company_size : 'Not available' }}
              </h6>
            </div>

            <div>
              <h6>{{ companies ? companies.website_ : 'Not available' }}</h6>
            </div>
          </div>
        </div>

    </div>
</template>>