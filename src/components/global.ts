import { App } from "vue";
import Divider from "./Divider.vue";
import TextField from "./inputs/TextField.vue";
import Btn from "./buttons/Btn.vue";


export default function registerComponents(app: App):App {
  app.component("Divider", Divider);
  app.component("TextField", TextField);
  app.component("Btn", Btn);
  return app;
}
