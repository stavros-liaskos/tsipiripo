<template>
  <div id="expertise" class="section">

    <headline-animated
      v-bind:class="['m-b-4']"
      v-bind:content="expetiseMainContent.title"/>

    <p class="m-b-6">{{expetiseMainContent.desc}}</p>

    <div class="expertise-card-container">
      <expertise-card v-for="(expertiseCard, index) in expertiseCards" v-if="expertiseCards.length"
                      v-bind:icon="expertiseCard.icon"
                      v-bind:title="expertiseCard.title"
                      v-bind:desc="expertiseCard.desc"
                      v-bind:key="index"
      />
    </div>

    <dragon :style="{margin: '0 auto'}"/>
  </div>
</template>

<script>
  import {expertiseCards, expetiseMainContent} from '~/assets/data/expertise.json';
  import ParallaxScene from '~/components/ParallaxScene.vue';
  import ParallaxLayer from '~/components/ParallaxLayer.vue';
  import Dragon from '~/components/Dragon.vue';

  export default {
    components: {
      ParallaxScene,
      ParallaxLayer,
      Dragon
    },
    data() {
      return {
        expertiseCards,
        expetiseMainContent
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  #expertise {
    text-align: center;

    .expertise-card-container {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }
  }
</style>
