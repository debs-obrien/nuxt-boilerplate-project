<template>
  <div>
    My Components
    <TechAccordion />
  </div>
</template>

<script>
import TechAccordion from '@/components/tech-accordion'
export default {
  components: { TechAccordion },
  data() {
    return {}
  },
  head() {
    return {
      title: 'MyComponents',
      meta: [
        {
          name: 'description',
          content: 'MyComponents',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
