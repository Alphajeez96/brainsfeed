<template>

  <div>
    <cnav></cnav>
    <div class='container px-0'>
     <div class='back  '>
     <router-link to='/'> <button class="btn btn-outline-info mb-3"> <font-awesome-icon class='mx-2' :icon="{ prefix: 'fa', iconName: 'arrow-left' }"></font-awesome-icon>Back</button></router-link>
     
    </div>
    </div>
   

 <div>
  <section1></section1>
  <section2></section2>
 
  </div>
  </div>
</template>
<script>
import section1 from './section1'
import section2 from './section2'
import cnav from '../partials/navbar'

export default {
  name: 'about',
  components: {
    section1,section2,cnav
  
  }
}
</script>
<style scoped>
.back{
  text-align: left;
}
</style>>