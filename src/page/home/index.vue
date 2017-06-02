<template>
  <div class="home">
     <itemcontainer father-component="home"></itemcontainer>
  </div>
</template>
<script>

   import itemcontainer from '../../components/itemcontainer.vue'
   console.log(itemcontainer)
   export default {
    name:'home',
    components: {
       itemcontainer,
    }

   }
</script>
<style lang='scss' scoped>

</style>
