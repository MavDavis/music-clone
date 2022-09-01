<template>
    <div class="flex flex-col px-4 py-3">
      <div class="font-sans text-black  flex items-center justify-start  mb-5">
    <div class="border border-lighter rounded overflow-hidden flex">
      <input type="text" v-model="searchInput" @keyup ="filterMusic()" class="px-4 py-2 bg-dark text-white" placeholder="Search...">
      <button class="flex items-center justify-center px-4 border-l">
        <svg @click="filterMusic()" class="h-4 w-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
      </button>
    </div>
  </div>
  <div class=" align-center w-full flex-wrap flex">
      <Card :songs="music"/>
  </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/card.vue';
  export default {
      data(){
          return{
              music:'',
              searchInput:''
          }
      },
      mounted(){
          this.music = this.$store.state.playlist
  
      },
          components: { Card },
      methods:{
        checkName (name, str) {
    var pattern = str.split("").map((x)=>{
        return `(?=.*${x})`
    }).join("");
    var regex = new RegExp(`${pattern}`, "g")
    return name.match(regex);
}
,
          filterMusic(){
              let items = this.$store.state.playlist;
             let newValue = (this.searchInput+'').toLowerCase()
  let item = items.filter((x)=>{ 
       return x.title.toLowerCase().includes(newValue)
   })
this.music = (item);

},
      }
  }
  </script>
  
  <style>
  
  </style>