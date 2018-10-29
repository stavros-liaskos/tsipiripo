/* eslint no-unused-vars: 0 */
<template>
  <div id="description" class="section">
    <div class="title-wrapper">
      <h1 class="desc-title">Τσιπιρίπο Bebe</h1>


      <vue-typer v-bind="{text: typedTxt}" initial-action='typing' pre-type-delay='500'></vue-typer>
    </div>


    <div class="learn-more text-center">
      <nuxt-link to="/" v-scroll-to="'#expertise'" class="dis-txt p-3 fas fa-arrow-down bounce h4"></nuxt-link>
    </div>

    <parallax-scene class="parallax-desc hidden" :scalar-x="100.0" :scalar-y="100.0">
      <parallax-layer :depth="0.33">
        <img src="~/assets/img/flying_gift.png" style="top: 40px;" draggable="false" alt="flying_gift">
      </parallax-layer>
    </parallax-scene>

  </div>
</template>

<script>
  /* eslint no-unused-vars: 0 */
  import ParallaxScene from '~/components/ParallaxScene.vue';
  import ParallaxLayer from '~/components/ParallaxLayer.vue';

  export default {
    components: {
      ParallaxScene,
      ParallaxLayer
    },
    computed: {
      typedTxt() {
        return ['Τα πάντα για το μωρό'];
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/styles';

  .vue-typer {
    background: inherit;
    display: block;
    @extend .h1;
    @extend .bg-main;

    .custom.char {
      &.typed {
        @extend .h1;
      }

      &.selected {
        @extend .h1;
        background: $color_grey_30;
        color: $text_main;
      }
    }

    .custom.caret {
      @extend .h1;
    }
  }

  #description {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-image: url('~/assets/img/flying_gift.png');
    background-repeat: no-repeat;
    background-position: right bottom;

    .title-wrapper {
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      padding: 20px;
    }

    .learn-more {
      position: absolute;
      bottom: 75px;
      width: 100%;
    }

    .fas {
      color: $text_link;
    }

    .scroll-promt {
      display: none;
    }
  }

  @include breakpoint($breakpoint_screen_sm) {
    #description {
      text-align: center;
      background-image: none;

      .desc-title {
        margin: 0 $space_2;
      }

      .scroll-promt {
        display: inline;
      }

      .parallax-desc {
        display: block;
        position: absolute;
        right: 10%;
      }
    }
  }
</style>
