<template>
  <div class="w-full sticky top-0 p-2 flex items-center justify-between bg-dark" style="z-index:100">
    <div class="flex items-center">
      <button
        class="
          rounded-full
          bg-black
          w-8
          h-8
          text-white
          mr-3
          opacity-75
          hover:opacity-100
        "
      @click="$router.go(-1)"
      >
        <i class="fas fa-chevron-left text-xl"></i>
      </button>
      <button
        class="
          rounded-full
          bg-black
          w-8
          h-8
          text-white
          opacity-75
          hover:opacity-100
        "
       @click="$router.go(+1)"
      >
        <i class="fas fa-chevron-right text-xl"></i>
      </button>
    </div>
    <div class="relative">
      <button
        class="bg-light rounded-full flex items-center px-2 py-1 w-40"
        @click="userIsActive = !userIsActive"
      >
        <i class="fas fa-user bg-white rounded-full px-2 py-1 text-xl"></i>
        <p class="semibold text-white text-sm ml-3">New User</p>
        <i
          class="
            fas
            fa-chevron-down
            text-white text-xs
            ml-2
            opacity-75
            hover:opacity-100
          "
          :class="{ userActive: userIsActive }"
        ></i>
      </button>
      <div v-if="userIsActive" class="rounded absolute mt-1 bg-light w-full">
        <button
          class="
            py-2
            text-lightest
            opacity-75
            hover:opacity-100
            text-white
            border-b border-white
            w-full
            text-sm
          "
          @click="userIsActive = !userIsActive"
        >
          Account
        </button>

        <button
          class="
            py-2
            text-lightest
            opacity-75
            hover:opacity-100
            text-white
            border-b border-white
            w-full
            text-sm
          "
          @click="userIsActive = !userIsActive"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      userIsActive: false,
    };
  },
  method: {},
};
</script>

<style>

i.userActive {
  transform: rotate(-180deg);
}
</style>