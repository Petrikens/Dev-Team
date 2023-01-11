import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router/router";
import { store } from "./store";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import ProgressSpinner from "primevue/progressspinner";

const app = createApp(App);

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./assets/css/normalize.css";

app.use(router);
app.use(store);
app.mount("#app");
app.use(PrimeVue);
app.use(ToastService);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);
app.component("ProgressSpinner", ProgressSpinner);
