<script setup>
import mainHeader from './components/header.vue'
import mainMain from './components/main.vue'
import mainFooter from './components/footer.vue'
</script>

<script>
export default {
  data() {
    return {
      
    }
  },
  components:{
    mainHeader,
    mainFooter,
    mainMain
  }
}
</script>

<template>
  <mainHeader />
  <mainMain/>
  <mainFooter />
</template>

<style scoped>

</style>
