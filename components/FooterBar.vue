<template>
  <footer id="footer" class="z-3 container">
    <div class="info">
      <div class="m-b-3">
        <h4 class="m-0 p-b-6">Επικοινωνία</h4>

        <p class="m-0 p-y-1"><strong>Τηλέφωνο:</strong></p>
        <p class="m-0 p-b-1">{{contact.phone}}</p>

        <p class="m-0 p-y-1"><strong>Email:</strong></p>
        <p class="m-0 p-b-1"><a :href="'mailto:'+contact.email">{{contact.email}}</a></p>

        <p class="m-0 p-y-1"><strong>Διεύθυνση:</strong></p>
        <p class="m-0 p-b-1" v-html="contact.address"></p>
      </div>

      <div class="quick-links">
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
        <img class="first" src="~/assets/img/letter_b.png" alt="letter_b">
        <img class="second" src="~/assets/img/letter_e.png" alt="letter_e">
        <img class="third" src="~/assets/img/letter_b.png" alt="letter_b">
        <img class="forth" src="~/assets/img/letter_e.png" alt="letter_e">
      </div>
    </div>

    <div class="text-center">
      <br>
      <a href="https://stavrosliaskos.com" target="_blank">
        <!--
                <img class="pull-left mr-15 relative" src="~/assets/img/stavros_logo.png" width="28" height="28">
        -->
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

  export default {
    components: {
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
    height: $footer_height;
    display: flex;
    flex-direction: column;
    @extend .text-center;

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
        margin: 0;
        order: 2;
      }

      .title {
        display: block;
      }
    }
  }

  .bebe {
    margin: $space_5 auto;
    width: 240px;

    img {
      //position: absolute;
    }

    .first {
      transform: rotate(-45deg);
      margin: 0 -3px -15px 0px;
    }

    .third {
      transform: rotate(15deg);
      margin: 0 -3px -15px 0px;
    }

    .forth {
      transform: rotate(45deg);
      margin: 0 -3px -15px 0px;
    }
  }
</style>
