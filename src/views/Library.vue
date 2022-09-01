<template>
  <div class="flex flex-col px-4 py-3">
    <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">All Songs</h1>
    <div class=" align-center w-full flex-wrap flex">
      <Card :songs="music"/>
  </div>
  </div>
</template>

<script>
import Card from '@/components/card.vue';
export default {
    data() {
        return {
            music: "",
        };
    },
    mounted() {
        this.music = this.$store.state.playlist
    },
    components: { Card }
}
</script>

<style>

</style>