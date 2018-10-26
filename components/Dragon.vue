<template>
  <div class="dragon" v-on:mouseover="firebreathe">
    <img src="~/assets/img/dragon.png" alt="dragon">
    <img src="~/assets/img/fire.png" alt="fire">
  </div>
</template>

<script>
  export default {
    methods: {
      firebreathe(e) {
        const el = e.currentTarget,
          imgDragon = el.getElementsByTagName('img')[0],
          imgFire = el.getElementsByTagName('img')[1];

        imgDragon.classList.add('rotate');
        imgFire.classList.add('grow');

        imgDragon.addEventListener('transitionend', () => {
          window.setTimeout(() => {
            imgDragon.classList.remove('rotate');
          }, 2500); // must be equal to $dragon_breathing_fire
        }, false);

        imgFire.addEventListener('transitionend', () => {
          console.warn('end');
          imgFire.classList.remove('grow');
        }, false);
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/styles';

  // On hover, dragon shakes then tilts up and breathes fire
  $dragon_height: 200px;
  $dragon_shake: 1s;
  $dragon_rotating: 0.5s;
  $dragon_breathing_fire: 1s;

  $dragon_rotating_delay: $dragon_shake; // start after shaking is over
  $dragon_breathing_fire_delay: $dragon_rotating_delay + $dragon_rotating; // start after shaking and rotating is over

  /*
      time
        |
Rotate  | initial delay         transition duration     maintain rotation
        |---------------------|----------------------|----------------------|
        |     1s                      0.5s
        |
        |
Fire    |              initial delay                    transition duration
        |--------------------------------------------|----------------------|
        |                   1.5s                              1s
        |
  */

  .dragon {
    position: relative;
    height: $dragon_height;
    width: calc(#{$dragon_height} + 100px);

    img:first-child {
      position: absolute;
      right: 0;
      height: 100%;
      width: 66%;
      transition: transform $dragon_rotating_delay ease-in-out $dragon_rotating;
    }

    img:last-child {
      position: absolute;
      right: 66%;
      top: 22%;
      transform: rotate(22deg);
      width: 33%;
      opacity: 0;
      transition: opacity $dragon_breathing_fire_delay cubic-bezier(.32, .62, .53, .82) $dragon_breathing_fire;
    }
  }

  // show and grow animation
  .grow {
    opacity: 1 !important;
    // animation: createBox $animation_delay ease-in-out .25s;
  }

  @keyframes createBox {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  // rotate animation
  .rotate {
    transform: rotate(5deg);
  }

  // shake animation
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  .shake {
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>
