<template>
<div class="w-full bg-light flex justify-between items-center px-3">
  <div class="flex items-center w-1/4">
    <div>
      <h1 class="text-sm text-white tracking-wide">{{$store.state.currentTitle}}</h1>
      <h2 class="text-xs text-lightest tracking-wide">{{$store.state.currentArtist}}</h2>
    </div>
    <i class="fas fa-heart text-green mx-4"></i>

    <i class="fa-thin fa-image text-lightest fas"></i>
  </div>

  <div class="flex  justify-center w-1/2 items-center">
    <div class="flex w-1/4 justify-center ml-3">
      <button class=" text-lightest hover:text-white">
        <i class="fas fa-shuffle"></i></button>
        <button @click=" $store.commit('prev')" class="text-lightest hover:text-white ml-5">
        <i class="fas fa-backward-step"></i></button>
    </div>
        
    <seekbar class="flex w-3/4"/>
 <div class="flex ml-5 w-1/4">
  <button @click=" $store.commit('next')" class="text-lightest hover:text-white">
        <i class="fas fa-forward-step"></i></button>
        <button class="mx-5 text-lightest hover:text-white">
        <i class="fas fa-repeat"></i>
      </button>
 </div>
   
  </div>
  <div class="flex items-center w-1/4">
    <i class="fa-list-music text-lightest"></i>
    <i class="fa-light fa-list-music text-lightest mx-3"></i>
    <i class="fas fa-volume-up text-lightest hover:text-white text-sm"></i>
    <button class="w-20 ml-1 bg-lightest rounded-full h-1 opacity-75 hover:opacity-100"></button>
  </div>
</div>
</template>

<script>
  import Seekbar from './seekbar.vue';
export default {
  components:{
    Seekbar
  },
  data() {
    return {
      width: 50,
      musicTotalTime: 3.0,
      timePlayed: 1.5,
      isPlaying:false,

    };
  },
  computed:{


}}
</script>

<style lang="scss">
  .progress{
    -webkit-appearance: none;
    transition: width 0.5s ease-in;
    outline: none;

    &.progress::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 4px;
	height: 6px;
	background-color: #ccc;
	cursor: pointer;
}
  }
</style>
