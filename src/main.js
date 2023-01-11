import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router/router";
import { store } from "./store";

import Button from "primevue/button";
import InputText from "primevue/inputtext";

const app = createApp(App);

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./assets/css/normalize.css";

app.use(router);
app.use(store);
app.mount("#app");
app.use(PrimeVue);

app.component("Button", Button);
app.component("InputText", InputText);
