import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(VueSmoothScroll)
    .mount('#app');
