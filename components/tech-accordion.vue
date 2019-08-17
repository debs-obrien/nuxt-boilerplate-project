<template>
  <div class="p-4">
    <h1 class="text-4xl">Accordion</h1>
    <div v-for="(accordion, i) in $t('techList')" :key="i + accordion.title">
      <BaseAccordion>
        <template v-slot:title>
          {{ accordion.title }}
        </template>

        <template v-slot:content>
          <div class="mb-10">
            {{ accordion.content }}
          </div>
        </template>
      </BaseAccordion>
    </div>
  </div>
</template>
<script>
import BaseAccordion from '@/components/_base-accordion'
export default {
  components: { BaseAccordion },

  data() {
    return {}
  },
}
</script>
