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
        v-bind:editorUsage="objSettings.editorUsage"
        v-bind:propLang="objSettings.propLang"
        v-bind:langEditor="objSettings.langEditor"
        v-bind:strings="objSettings.strings"
        v-bind:gameData="objSettings.gameData"
        v-bind:indexMedia="objSettings.indexMedia"
        v-bind:pathMediaDir="objSettings.pathMediaDir"
      />
    `,
  };

  createApp(app).mount(this);
};

export {};
