<template>
  <div class="portfolio" v-editable="blok">
    <img :src="blok.image">
  </div>
</template>

<script>
  export default {
    props: ['blok']
  };
</script>

<style lang="scss">
  .slide img {
    width: 100%;
  }
</style>

<style lang="scss" scoped>
  @import '../assets/styles';

  .portfolio {
    .project-cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .portfolio {
      .project-cards-container {
        justify-content: space-evenly;
      }
    }
  }
</style>
