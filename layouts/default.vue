<template>
  <div class="app"
       v-bind:class="{ active: isNavOpen}"
  >
    <navigation/>

    <div class="container header-p">
      <nuxt/>
    </div>

    <footer-bar/>

    <!--
        <header-bar/>
    -->

    <!--
        <particles/>
    -->
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation.vue';
  // import Particles from '~/components/Particles.vue';
  import FooterBar from '~/components/FooterBar.vue';
  // import HeaderBar from '~/components/HeaderBar.vue';
  import FontFaceObserver from 'fontfaceobserver';

  export default {
    components: {
      Navigation,
      // Particles,
      // HeaderBar,
      FooterBar
    },

    data() {
      return {
        isNavOpen: false
      };
    },

    methods: {
      /**
       * Initialize Navigation Listener for toggling state of Burger, Navigation, app elements
       */
      initNavigationListener() {
        this.$root.$on('toggle.navigation.state', (isNaviOpen) => {
          this.isNavOpen = !isNaviOpen;
        });
      },

      fontFaceLoader() {
        // Font loading: https://github.com/zeit/next.js/issues/512
        const comingSoonUrl = 'https://fonts.googleapis.com/css?family=Fira+Sans',
          fontAwesomeUrl = 'https://use.fontawesome.com/releases/v5.3.0/css/all.css';

        let linkRoboto = document.createElement('link'),
          linkFontAwesome = document.createElement('link'),
          comingSoon = new FontFaceObserver('Roboto'),
          fontAwesome = new FontFaceObserver('FontAwesome');

        linkRoboto.href = comingSoonUrl;
        linkRoboto.rel = 'stylesheet';
        linkFontAwesome.href = fontAwesomeUrl;
        linkFontAwesome.rel = 'stylesheet';

        document.head.appendChild(linkRoboto);
        document.head.appendChild(linkFontAwesome);

        // roboto.load().then(() => {
        Promise.all([comingSoon.load(), fontAwesome.load()]).then(function () {
          document.documentElement.classList.add('roboto');
        }, function () {
          console.log('🍺');
        });
      }
    },

    mounted() {
      this.initNavigationListener();
      this.fontFaceLoader();
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  .app {
    width: 100%;
    font-family: $font_family_default !important;
  }

  @include breakpoint($breakpoint_screen_md) {
    .header-p {
      padding-top: $space_7;
    }
  }
</style>
