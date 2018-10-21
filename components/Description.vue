<template>
  <div id="description" class="description section">
    <div class="title-wrapper">
      <h1 class="desc-title">Τσιπιρίπο Bebe</h1>

      <vue-typer v-bind="{text: typedTxt}" initial-action='typing' pre-type-delay='500'></vue-typer>
    </div>


    <div class="learn-more text-center">
      <!--<nuxt-link to="/" v-scroll-to="'#expertise'" class="scroll-promt">
        Δείτε περισσότερα<br>
      </nuxt-link>-->
      <nuxt-link to="/" v-scroll-to="'#expertise'" class="dis-txt p-3 fas fa-arrow-down bounce h4"></nuxt-link>
    </div>

    <div class="parallax-container">
      <parallax :speed-factor="0.3" breakpoint="(min-width: 80px)">
        <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg">
      </parallax>
    </div>

  </div>
</template>

<script>
  import Parallax from 'vue-parallaxy';

  export default {
    components: {
      Parallax
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

  .description {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-image: url('~/assets/img/flying_gift.png');
    background-repeat: no-repeat;
    background-position: right;

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

  .parallax-container {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 10%;
    overflow: hidden;
  }

  @include breakpoint($breakpoint_screen_sm) {
    .description {
      text-align: center;

      .desc-title {
        margin: 0 $space_2;
      }

      .scroll-promt {
        display: inline;
      }
    }
  }
</style>
