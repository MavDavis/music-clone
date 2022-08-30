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

  <div class="flex flex-col justify-center w-1/2 items-center">
    <div class="flex iems-center">
      <button class="mx-5 text-lightest hover:text-white">
        <i class="fas fa-shuffle"></i></button>
        <button @click=" $store.commit('prev')" class="text-lightest hover:text-white">
        <i class="fas fa-backward-step"></i></button>
        <div >
          <button v-if=" $store.state.isPlaying " class="text-lightest mx-5 hover:text-white" @click=" $store.commit('paused')">
     <i class="fas fa-2x fa-light fa-pause"></i>
        </button>
        <button v-else class="text-lightest mx-5 hover:text-white" @click=" $store.commit('played')">
                  <i class="fas fa-2x fa-light fa-circle-play"></i>
   
        </button>
        </div>
        <button @click=" $store.commit('next')" class="text-lightest hover:text-white">
        <i class="fas fa-forward-step"></i></button>
        <button class="mx-5 text-lightest hover:text-white">
        <i class="fas fa-repeat"></i>
      </button>
    </div>
    <div class="w-full flex items-center justify-center">
      <div class="text-lightest hover:text-white text-xs -mb-3 mr-2">
        {{ musicTotalTime - timePlayed }}
      </div>
      <div class="w-1/2 mt-4 bg-dark rounded-full h-1 opacity-75 hover:opacity-100 flex items-center">
        <div class="bg-green h-1 rounded-full w-1/2"></div>
        <div class="rounded-full bg-white h-2 w-2 -ml-1 shadow"></div>
      </div>
      <div class="text-lightest hover:text-white text-xs -mb-3 ml-2">
        {{ $store.state.duration}}
      </div>
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
export default {
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

<style>
</style>
