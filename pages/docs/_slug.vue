<template>
  <div class="container">
    <div class="flex mb-8 justify-between">
      <NuxtLink to="/" class="ml-8 mr-4 w-auto"
        >Nuxt Boilerplate Project</NuxtLink
      >
      <SearchInput />
    </div>
    <div class=" flex">
      <aside class="hidden lg:block">
        <ul>
          <li v-for="doc of docs" :key="doc.slug" class="pb-2">
            <NuxtLink :to="`/docs/${doc.slug}`">
              {{ doc.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>
      <main>
        <h1 class="text-4xl mb-4 leading-none">
          {{ page.title }}
        </h1>
        <nuxt-content :document="page" />
        <PrevNext :prev="prev" :next="next" class="lg:px-8 mt-4" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug
    const page = await $content('docs', slug).fetch()
    const docs = await $content('docs')
      .sortBy('slug', 'asc')
      .fetch()

    const [prev, next] = await $content('docs')
      .only(['title', 'slug'])
      .sortBy('slug', 'asc')
      .surround(slug)
      .fetch()

    return {
      page,
      prev,
      next,
      docs,
    }
  },
}
</script>
