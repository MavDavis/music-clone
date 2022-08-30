<template>
  
<div class="p-2 w-48 card relative"  v-for="(cards,index) in songs" :key="index">
<div class="absolute w-full h-full justify-end items-end p-8 flex opacity-0 hover:opacity-100">
    <div class="rounded-full bg-green h-10 w-10 flex items-center justify-center">
        <i v-if="$store.state.singlePlaying" class="fas fa-play text-white text-xl" @click="$store.commit('playSingle', cards.title)" ></i>
        <i v-else class="fas fa-pause text-white text-x1"></i>
    </div>
</div>
    <div class="bg-light w-full h-60 p-5 shadow-md rounded-lg ">
    <img :src="cards.image" alt="card-img" class="h-1/2 w-full shadow mb-2">
    <h1 class="text-sm font-semibold text-white tracking-wide">{{cards.title}}</h1>
    <h2 class="text-xs text-lightest tracking-wide">{{cards.artist}}</h2>
    </div>

  </div>
</template>

<script>
export default {
props:['songs']
}
</script>

<style lang="scss">
// .card{
//     transition: 0.5s;

//     &:hover{
//         transform: translateY(-5px);
//     }
// }
</style>