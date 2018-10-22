<!-- Slide-In Navigation Menu -->
<template>
  <div class="navigation z-1" v-bind:class="{ active: isNavOpen}">
    <navi-toolbar/>

    <div class="menu-container">
      <div class="menu-wrapper z-2">
        <ul class="menu-list">

          <li class="menu-item">

            <a href="#" v-scroll-to="{
                        el: '#description',
                        offset: -60}"
               class="underline item-link text-main h1 flip"
               v-on:click.native=toggleMenu()>Αρχική
            </a>
          </li>

          <li class="menu-item">
            <a href="#" v-scroll-to="{
                        el: '#expertise',
                        offset: -60}"
               class="underline item-link text-main h1 flip"
               v-on:click.native=toggleMenu()>Γνωριμία
            </a>
          </li>

          <li class="menu-item">
            <a href="#" v-scroll-to="{
                        el: '#portfolio',
                        offset: -60}"
               class="underline item-link text-main h1 flip"
               v-on:click.native=toggleMenu()>Προιόντα
            </a>
          </li>

          <li class="menu-item">
            <a href="#" v-scroll-to="{
                        el: '#footer',
                        offset: -60}"
               class="underline item-link text-main h1 flip"
               v-on:click.native=toggleMenu()>Επικοινωνία
            </a>
          </li>
        </ul>
      </div>

      <div class="accent accent-one"></div>
      <div class="accent accent-two"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isNavOpen: false
      };
    },

    methods: {
      initNavigationListener() {
        this.$root.$on('toggle.navigation.state', (isNaviOpen) => {
          this.isNavOpen = !isNaviOpen;
        });
      },

      toggleMenu() {
        this.$root.$emit('toggle.navigation.state', this.isNavOpen); // send event to index page to handle slide effect
      }
    },

    mounted() {
      this.initNavigationListener();
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  $navi_slide_out_time: .8s;

  .navigation {
    background: $bg_header;
    position: fixed !important; // makes sure that position:relative from .z-2 is overwritten
    height: 100%;
    top: -100%;
    left: 0;
    right: 0;
    transition: top $navi_slide_out_time ease-out;

    &.active {
      // slide down effect in device
      top: 0;

      .menu-container .menu-wrapper .flip {
        transform: rotateY(0deg);
        opacity: 1;
      }
    }

    .menu-container {
      // position: relative;
      height: 100%;
      text-align: center;
      padding: 12% 0;

      .menu-wrapper {
        height: 100%;

        .flip {
          position: relative;
          display: inline-block;
          opacity: 0;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          perspective: 1000px;
          transform: rotateY(180deg);
          transition: all .3s linear $navi_slide_out_time;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 100%;
        }

        .menu-item {
          display: inline-block;
          margin: 0;
          width: auto;
        }
      }
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .navigation {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: $header_height;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);

      transition: none;

      .menu-container {
        padding: 0;
        overflow: hidden;

        .menu-wrapper {
          padding: 0 $space_8;

          .menu-list {
            flex-direction: row;

            .item-link {
              position: relative;
              opacity: 1;
              display: inline;
            }
          }
        }
      }

      .accent {
        position: absolute;
        top: 0;
        display: block;
        height: $header_height;
      }

      .accent-one {
        width: 56%;
        min-height: $header_height;
        transition: transform .25s linear;
        transform: skewX(-40deg) translateX(100%);
        background: linear-gradient(-171deg, #9b9bfd, #7966f3);
      }

      .accent-two {
        width: 56%;
        min-height: $header_height;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        transform: skewX(30deg) translateX(-57%);
        transition: transform .25s linear;
        background: linear-gradient(-193deg, #17bebb, #9b9bfd);
      }
    }
  }
</style>
