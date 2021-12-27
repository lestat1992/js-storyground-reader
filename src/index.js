import { createApp } from "vue";
import { game } from "vue-storyground-reader";

let app = {
  name: "Test",
  components: {
    game,
  },
  template: `
      <game/>
    `,
};

createApp(app).mount("#app-test");
