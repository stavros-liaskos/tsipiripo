<template>
  <div>
    <description/>
    <expertise/>
    <portfolio/>

    <section class="util__container">
      <component v-if="story.content.component" :key="story.content._uid" :blok="story.content"
                 :is="story.content.component"></component>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {story: {content: {}}};
    },
    mounted() {
      console.warn(this.$storybook);
      this.$storyblok.init();
      this.$storyblok.on(['published', 'change'], (event) => {
        if (!event.slugChanged) {
          // Reload the page on save events
          location.reload(true);
        }
      });
      this.$storyblok.on('input', (event) => {
        // Inject content on the input event
        this.story.content = event.story.content;
      });
    },
    asyncData(context) {
      // Check if we are in the editor mode
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published';

      // Load the JSON from the API
      return context.app.$storyapi.get('cdn/stories/home', {
        version: version
      }).then((res) => {
        return res.data;
      }).catch((res) => {
        context.error({statusCode: res.response.status, message: res.response.data});
      });
    }
  };
</script>


<style lang="scss">
  @import '../assets/styles';

  .util__container {
    padding-top: 100px;
  }
</style>
