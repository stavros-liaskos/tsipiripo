<template>
  <footer id="footer" class="z-3 container">
    <div class="info">
      <div class="contact m-b-3 text-center">
        <h4 class="m-0 p-b-6">Επικοινωνία</h4>

        <p class="m-0 p-y-1"><strong>Τηλέφωνο:</strong></p>
        <p class="m-0 p-b-1">{{contact.phone}}</p>

        <p class="m-0 p-y-1"><strong>Email:</strong></p>
        <p class="m-0 p-b-1"><a :href="'mailto:'+contact.email">{{contact.email}}</a></p>

        <p class="m-0 p-y-1"><strong>Διεύθυνση:</strong></p>
        <p class="m-0 p-b-1" v-html="contact.address"></p>
      </div>

      <div class="quick-links text-center">
        <h4 class="title hidden m-0 p-b-6">Σύνδεσμοι</h4>

        <div>
          <a class="m-r-2" :href="contact.facebook" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="m-r-2" :href="contact.instagram" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a class="m-r-2" :href="'mailto:'+contact.email" target="_blank">
            <i class="far fa-envelope"></i>
          </a>
        </div>
        <br>
        <p class="m-t-5"> &copy; 2018 Tsipiripo</p>
        <br>
      </div>

      <div class="bebe">
        <parallax-scene class="parallax-desc" :scalar-x="10.0" :scalar-y="50.0">
          <parallax-layer :depth="0.33">
            <img class="first" src="~/assets/img/letter_b.png" alt="letter_b">
          </parallax-layer>
          <parallax-layer :depth=" 0.5">
            <img class="second" src="~/assets/img/letter_e.png" alt="letter_e">
          </parallax-layer>
          <parallax-layer :depth=" 0.4">
            <img class="third" src="~/assets/img/letter_b.png" alt="letter_b">
          </parallax-layer>
          <parallax-layer :depth=" 0.6">
            <img class="fourth" src="~/assets/img/letter_e.png" alt="letter_e">
          </parallax-layer>
        </parallax-scene>
      </div>
    </div>

    <div class="text-center">
      <br>
      <a href="https://stavrosliaskos.com" target="_blank">
        <logo-stavros/>
        <span style="margin-left:10px; color: #666">Powered by Stavros Liaskos</span>
      </a>
    </div>

    <!--<cookie-law theme="royal"> TODO
      <div slot="message">
        This website uses cookies to ensure you get the best experience on our website. More info
        <nuxt-link to="/privacy-policy"> here</nuxt-link>
      </div>
    </cookie-law>-->
  </footer>
</template>

<script>
  import contact from '~/assets/data/contact.json';
  import LogoStavros from '~/components/LogoStavros.vue';
  import ParallaxScene from '~/components/ParallaxScene.vue';
  import ParallaxLayer from '~/components/ParallaxLayer.vue';

  export default {
    components: {
      ParallaxScene,
      ParallaxLayer,
      LogoStavros
    },

    data() {
      return contact;
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  footer {
    // height: $footer_height; TODO
    display: flex;
    flex-direction: column;

    .fab,
    .far {
      font-size: $social_icons_size;
    }

    .footer-item {
      margin-top: $space_2;
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    footer {
      height: unset;
      text-align: unset;

      .info {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .footer-item {
          float: right;
          margin-left: $space_3;

          &:first-child {
            float: left;
            margin-left: 0;
          }
        }
      }

      .quick-links {
        text-align: right;
        margin: 0;
        order: 2;
      }

      .contact {
        text-align: left;
      }

      .title {
        display: block;
      }
    }
  }

  .bebe {
    margin: $space_5 auto;
    width: 240px;

    .first {
      transform: rotate(-45deg);
      margin-left: 0;
    }

    .second {
      transform: rotate(-45deg);
      margin-left: 50px;
    }

    .third {
      transform: rotate(15deg);
      margin-left: 100px;
    }

    .fourth {
      transform: rotate(45deg);
      margin-left: 150px;
    }
  }
</style>
