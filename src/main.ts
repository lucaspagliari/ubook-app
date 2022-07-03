import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import registerComponents from "./components/global";

const app = createApp(App);

registerComponents(app).mount("#app");
