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
          }, 1000); // consult diagram below. Rotate -> maintain rotation
        }, false);

        imgFire.addEventListener('animationend', () => {
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

  /*
        |           |
        |           |
Shake   |           | initial delay         transition duration     maintain rotation
        |-----------|---------------------|----------------------|----------------------|
        |           |
        |           |
        |           |
Rotate  |           | initial delay         transition duration     maintain rotation
        |-----------|---------------------|----------------------|----------------------|
        |           |     1s                      0.5s                    1s
        |           |
        |           |
Fire    |           |              initial delay                    transition duration
        |-----------|--------------------------------------------|-----------|
        |           |                   1.7s                          1.3s
        |           |

      Time --->
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
      transition: transform 0.5s ease-in-out 1s;
    }

    img:last-child {
      position: absolute;
      right: 66%;
      top: 22%;
      width: 33%;
      opacity: 0;
    }
  }

  // show and grow animation
  .grow {
    animation: createBox 1.3s ease-in-out 1.7s;
  }

  @keyframes createBox {
    10% {
      transform: scale(0) rotate(22deg);
      opacity: 0;
    }
    20%, 80% {
      transform: scale(1) rotate(22deg);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotate(22deg);
      opacity: 0;
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
