<template>
  <div>
    <div
      class="flex justify-between border-t border-primary border-solid text-primary pt-4 md:pt-6 pb-6 md:pb-8 cursor-pointer"
      @click="toggleItem"
    >
      <h2 class="text-lg md:text-2xl font-medium">
        <slot name="title"> </slot>
      </h2>
    </div>

    <div v-show="show">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      show: false,
    }
  },
  methods: {
    toggleItem: function() {
      this.show = !this.show
    },
  },
}
</script>
