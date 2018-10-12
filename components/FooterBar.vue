<template>
  <footer id="footer" class="z-3 container">
    <div class="info">
      <div>
        <h4 class="m-0 p-b-6">Επικοινωνία</h4>

        <p class="m-0 p-y-1"><strong>Τηλέφωνο:</strong></p>
        <p class="m-0 p-b-1">{{contact.phone}}</p>

        <p class="m-0 p-y-1"><strong>Email:</strong></p>
        <p class="m-0 p-b-1"><a :href="'mailto:'+contact.email">{{contact.email}}</a></p>

        <p class="m-0 p-y-1"><strong>Διεύθυνση:</strong></p>
        <p class="m-0 p-b-1" v-html="contact.address"></p>
      </div>

      <div>
        <h4 class="m-0 p-b-6">Σύνδεσμοι</h4>

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
    </div>

    <div class="powered text-center">
      <br>
      <a href="https://stavrosliaskos.com" target="_blank">
        <!--
                <img class="pull-left mr-15 relative" src="https://cosmicjs.com/images/logo.svg" width="28" height="28">
        -->
        <span style="margin-left:10px; color: #666">Proudly powered by Stavros Liaskos</span>
      </a>
    </div>

    <!--<cookie-law theme="royal">
      <div slot="message">
        This website uses cookies to ensure you get the best experience on our website. More info
        <nuxt-link to="/privacy-policy"> here</nuxt-link>
      </div>
    </cookie-law>-->
  </footer>
</template>

<script>
  import contact from '~/assets/data/contact.json';

  export default {
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .powered {

        }
        .footer-item {
          float: right;
          margin-left: $space_3;

          &:first-child {
            float: left;
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
