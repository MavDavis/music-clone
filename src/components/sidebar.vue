<template>
  <div class="p-6">
    <img
      src="../assets/logo.png"
      style="filter: brightness(0) invert(1)"
      alt="logo"
      class="h-10"
    />
  </div>
  <div class="mx-2 mb-5">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      class="
        w-full
        font-semibold
        text-xs
        rounded
        px-3
        py-2
        items-center
        justify-start
        text-lightest
        flex
        hover:bg-dark hover:opacity-75
      "
    >
      <i :class="route.icons"></i>
      <p class="ml-3">{{ route.name }}</p>
    </router-link>
  </div>
  <div class="mx-5">
    <h1 class="text-xs text-lightest tracking-widesrt uppercase">Playlist</h1>
    <button
      class="flex items-center justify-start opacity-75 hover:opacity-100 mt-3"
    >
      <div class="rounded bg-white h-8 w-8 mr-2">
        <i
          class="
            fas
            fa-light fa-square-plus
            text-lightest
            h-full
            w-full
            relative
            text-lg
          "
        ></i>
      </div>
      <p class="text-sm text-white font-semibold">Create Playlist</p>
    </button>
    <button
      class="flex items-center justify-start opacity-75 hover:opacity-100 mt-3"
    >
      <div class="purple rounded h-8 w-8 mr-2">
        <i class="fas fa-thin fa-heart text-lightest mr text-lg"></i>
      </div>
      <p class="text-sm text-white font-semibold">Liked Songs</p>
    </button>
  </div>
  <div class="mx-5">
    <div class="w-full h-10">
      <p class="text-lightest hover:text-white text-sm p-1">lorem</p>
    </div>
    <a
      class="flex items-center justify-start text-lightest hover:text-white"
      href="  https://spotify.link/lz04YJ0r9ib?label=sp_cid%3A9e0bd639e6022ce64375727b153bef28"
      target="”_blank”"
    >
      <i
        class="
          fas
          fa-arrow-down
          border
          rounded-full
          text-sm
          px-1
          border-lightest
          mr-3
        "
      >
      </i>
      <p class="text-sm font-semibold">Install App</p>
    </a>
  </div>
  <div class="relative pt-4  w-full  flex items-center justify-center">
    <div
      class="
        absolute
        w-full
        h-full
        flex
        justify-end
        items-start
        opacity-0
        hover:opacity-100
        p-2
      "
    >
      <div class="bg-black rounded-full h-6 w-6 text-center">
        <i class="fas fa-chevron-down text-white"></i>
      </div>
    </div>

    <img
      :src="$store.state.currentImageSrc"
      class="h-20 w-full shadow mb-2"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
};
</script>

<style lang="scss">
.router-link-active {
  background: #282828;
  color: #fff !important;

  &:hover {
    opacity: 1 !important;
    background: #282828 !important;
  }
}
.purple {
  background: #a4508b;
}

</style>
