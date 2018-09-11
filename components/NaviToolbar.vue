<!-- Fixed Navigation Toolbar (Desktop: left-side, Device: top) -->
<template>
  <div class="navi-toolbar">
    <div class="navi-toolbar-container">
      <burger/>

      <social-links/>
    </div>
  </div>
</template>

<script>
  import Burger from '~/components/Burger.vue';
  import SocialLinks from '~/components/SocialLinks.vue';

  export default {
    components: {
      Burger,
      SocialLinks
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  .navi-toolbar {
    position: fixed;
    top: 0;
    bottom: unset;
    right: 0;
    left: 0;
    height: $navi_toolbar_device_height;
    background: inherit;

    .navi-toolbar-container {
      position: relative;
      height: 100%;
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .navi-toolbar {
      display: none;
    }
  }
</style>
