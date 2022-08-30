<template>
<div class="px-6  ">
<div class="flex items-center justify-between py-3 ">
    <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Recently Played</h1>
  <div class="pr-2 text-xs  pt-4 text-lightest uppercase tracking-wider hover:underline">
    <router-link to="/Library">See All</router-link>
  </div>
</div>
  <div class="w-full flex-wrap flex ">

    <Card :songs="song"/>
  </div>
</div>
<div class="px-6  ">
 <div class="pt-2">
     <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider ">Made for User</h1>
  <h2 class="text-sm text-lightest tracking-wide pb-5">
 Get better recommendations the more you listen.  
</h2>
 </div>
  <div class="w-full flex-wrap flex ">

    <Card :songs="songTwo"/>
  </div>
</div>
</template>

<script>
import Card from '../components/card.vue';
import { mapState } from 'vuex'
export default {
    components: { Card },
    computed:  mapState({
    song () {
      return this.$store.state.playlist.slice(0,5)
    },
    songTwo () {
      return this.$store.state.playlist.slice(5,10)
    }
  
  }),
  created(){
    console.log(this.song);
  }
}
</script>

<style>

</style>