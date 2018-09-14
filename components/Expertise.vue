<template>
  <div id="expertise" class="expertise section">
    <component :key="blok._uid" v-for="blok in blok.expertise" :blok="blok" :is="blok.component"></component>
  </div>
</template>

<script>
  export default {
    props: ['blok']
  };
</script>
