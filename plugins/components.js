import Vue from 'vue';
import Page from '~/components/Page.vue';
import Teaser from '~/components/Teaser.vue';
import Grid from '~/components/Grid.vue';
import Feature from '~/components/Feature.vue';
import Slide from '~/components/Slide.vue';

import Description from '~/components/Description.vue';
import Expertise from '~/components/Expertise.vue';
import Portfolio from '~/components/Portfolio.vue';

Vue.component('page', Page);
Vue.component('teaser', Teaser);
Vue.component('grid', Grid);
Vue.component('feature', Feature);
Vue.component('slide', Slide);

Vue.component('description', Description);
Vue.component('expertise', Expertise);
Vue.component('portfolio', Portfolio);
