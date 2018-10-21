<template>
  <div class="project-card">
    <a :href="[link]" target="_blank" rel="noopener noreferrer">
      <div class="img-wrapper">
        <img class="project-card-img" v-lazy="`${imgUrl}`" v-bind:alt="[title]">
      </div>

      <span :class="[bgColor]" class="badge">{{tech}}</span>

      <p class="h1">{{title}} </p>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      imgUrl: String,
      title: String,
      tech: String,
      link: String,
      bgColor: String
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  // Card spacing
  $card_width: 300px;
  $card_bg_color: $color_white;
  $anim-time: .3s;
  $img_wrapper_height: 240px;
  $tech_stack_height: 20px;
  $border-color: $color_grey_60;

  .project-card {
    position: relative;
    max-width: $card_width;
    min-width: calc(#{$card_width} - 100px);
    background: $card_bg_color;
    margin: 0 $space_2 $space_7;
    box-shadow: 0 0 30px 0 $color_sky;
    border: 1px solid $border-color;
    border-radius: 15px;

    // paint all letters to white to create visual effect in cards
    * {
      transition: all $anim-time ease-in-out 0s;;
    }

    .img-wrapper {
      overflow: hidden;
      background: $color_grey_10;
      height: $img_wrapper_height;
      border-radius: 15px 15px 0 0;
      border-bottom: 1px solid $border-color;

      .project-card-img {
        opacity: 1;
      }
    }

    .badge {
      display: inline-block;
      padding: 4px 6px;
      border-radius: 0 0 5px 0;
      color: $text_white;
    }

    p {
      background: inherit;
      padding: $space_4 $space_3;
      width: 100%;
      margin-bottom: 15px;
    }

    &:hover .project-card-img {
      transform: scale(1.1);
      opacity: .6;
    }
  }
</style>
