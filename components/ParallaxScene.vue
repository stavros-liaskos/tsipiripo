<template>
  <ul ref="scene">
    <slot></slot>
  </ul>
</template>

<script>
  import Parallax from 'parallax-js';

  function isNumberOrFalse(value) {
    return value === false || typeof value === 'number';
  }

  export default {
    name: 'parallax-scene',
    props: {
      relativeInput: {type: Boolean, default: undefined},
      clipRelativeInput: {type: Boolean, default: undefined},
      hoverOnly: {type: Boolean, default: undefined},
      inputElement: HTMLElement,
      calibrateX: {type: Boolean, default: undefined},
      calibrateY: {type: Boolean, default: undefined},
      invertX: {type: Boolean, default: undefined},
      invertY: {type: Boolean, default: undefined},
      limitX: {validator: isNumberOrFalse},
      limitY: {validator: isNumberOrFalse},
      scalarX: Number,
      scalarY: Number,
      frictionX: Number,
      frictionY: Number,
      originX: Number,
      originY: Number,
      precision: Number,
      pointerEvents: {type: Boolean, default: undefined},
      onReady: Function
    },
    computed: {
      /**
       * Returns an object with all actually passed props and their values.
       *
       * Example:
       *   input: <parallax-scene :scalar-x="25" :scalar-y="15"></parallax-scene>
       *   output: { scalarX: 25, scalarY: 15 }
       */
      options() {
        return Object.keys(this.$options.props).reduce((acc, key) => Object.assign(acc, this[key] !== undefined ? {[key]: this[key]} : {}),
          {});
      }
    },
    mounted() {
      this.parallax = new Parallax(this.$refs.scene, this.options);
    },
    beforeDestroy() {
      this.parallax.disable();
    }
  };
</script>
