import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    primary: '#730710', // dark red
    secondary: '#353F40', // dark grey
    accent: '#A1A6A5', // light grey
    error: '#BA1B1A', // red
    success: '#468966', // forest green
    warning: '#FFB03B' // orange
  },
});
