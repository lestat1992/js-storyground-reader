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
        v-bind:disableIlustration="objSettings.disableIlustration"
        v-bind:stopLink="objSettings.stopLink"
        v-bind:width="objSettings.width"
        v-bind:height="objSettings.height"
        v-bind:useTheme="objSettings.useTheme"
        v-bind:canEmit="objSettings.canEmit"
        v-bind:showToast="objSettings.showToast"
        v-on:functionToEmitByTabs="objSettings.functionToEmitByTabs"
        v-on:functionToEmitOnInit="objSettings.functionToEmitOnInit"
        v-on:functionToEmitBeforeNavigation = "objSettings.functionToEmitBeforeNavigation"
        v-on:functionToEmitAfterNavigation = "objSettings.functionToEmitAfterNavigation"
      />
    `,
  };

  createApp(app).mount(this);
};

export {};
