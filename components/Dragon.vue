<template>
  <div class="dragon-cage" v-on:mouseover="firebreathe">
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

        imgDragon.classList.add('dragon');
        imgFire.classList.add('grow');

        imgDragon.addEventListener('animationend', () => {
          imgDragon.classList.remove('dragon');
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

  .dragon-cage {
    position: relative;
    height: $dragon_height;
    width: calc(#{$dragon_height} + 100px);

    img:first-child {
      position: absolute;
      right: 0;
      height: 100%;
      width: 66%;
    }

    img:last-child {
      position: absolute;
      right: 66%;
      top: 20%;
      width: 33%;
      opacity: 0;
    }
  }

  // show and grow fire
  .grow {
    animation: fire 1.1s ease-in-out 2s;
  }

  @keyframes fire {
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

  // shake and rotate dragon
  .dragon {
    animation: dragon 3.3s ease-in-out;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  // dragon animation
  @keyframes dragon {
    5%, 45% {
      transform: translate3d(-1px, 0, 0);
    }

    10%, 40% {
      transform: translate3d(2px, 0, 0);
    }

    15%, 25%, 35% {
      transform: translate3d(-4px, 0, 0);
    }

    20%, 30% {
      transform: translate3d(4px, 0, 0);
    }

    50% {
      transform: rotate(0.5deg);
    }

    55% {
      transform: rotate(1deg);
    }

    60% {
      transform: rotate(2deg);
    }

    65% {
      transform: rotate(3deg);
    }

    70% {
      transform: rotate(5deg);
    }

    75% {
      transform: rotate(5deg);
    }

    80% {
      transform: rotate(5deg);
    }

    85% {
      transform: rotate(5deg);
    }

    90% {
      transform: rotate(3deg);
    }

    95% {
      transform: rotate(1deg);
    }

    100% {
      transform: rotate(.5deg);
    }
  }

  .shake {
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>
