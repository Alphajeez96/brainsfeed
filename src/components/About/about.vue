<template>

  <div>
    <cnav></cnav>
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