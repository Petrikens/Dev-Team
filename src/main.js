import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router/router";
import { store } from "./store";

const app = createApp(App);

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

app.use(router);
app.use(store);
app.mount("#app");
app.use(PrimeVue);
