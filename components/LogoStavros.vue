<template>
  <div class="logo-cont">
    <div class="logo-wrapper bg-black">
      <svg
        class="logo"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        style="enable-background:new 0 0 1000 1000;"
        xml:space="preserve">
      <g>
        <path
          d="M809,1000c67.4,0,131.1-0.3,190.7-0.3c-0.1-205.2,0.3-405.6,0.3-611.6c-260.6-0.2-523-0.3-784.4-0.5
		c-0.6-71-1.1-131.4-1.7-206.1c264.1,0.3,524.3-0.9,786.1-0.6c0-68,0-128.5,0-180.8C657.6,0,327.9,0,0.2,0
		c-0.7,191.2,0.8,389.2,0,597.8c262.1,0,531.7,0,808.2,0C808,734.4,809.3,877.3,809,1000z"/>
        <rect
          x="0.2"
          y="789.7"
          width="213.4"
          height="210.3"/>
        <rect
          x="404.6"
          y="789.7"
          width="213.4"
          height="210.3"/>
      </g>
  </svg>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../assets/styles';

  $logo_dimensions: 30px;

  .logo-cont {
    display: inline-block;
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: $logo_dimensions;
    height: $logo_dimensions;
    border-radius: 50%;

    .logo {
      fill: white;
      width: calc(#{$logo_dimensions} / 2);

    }
  }
</style>
