<template>
  <li :data-depth="depth">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'parallax-layer',
    props: {
      depth: {
        type: Number,
        required: true
      }
    }
  };
</script>
