import { createApp } from "vue";
import { game } from "vue-storyground-reader";

Element.prototype.StoryGround = function (objSettings) {
  let app = {
    name: "StoryGround",
    data() {
      return {
        objSettings: objSettings,
      };
    },
    components: {
      game,
    },
    template: `
      <game 
        v-bind:propLang="objSettings.propLang"
        v-bind:langEditor="objSettings.langEditor"
        v-bind:strings="objSettings.strings"
        v-bind:gameData="objSettings.gameData"
      />
    `,
  };

  createApp(app).mount(this);
};

module.exports = Element.prototype.StoryGround;
