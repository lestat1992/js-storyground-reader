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
    mounted() {
      console.log("mounting15 ----------------");
      objSettings.afterNavigation;
      console.log("..");
      objSettings.afterNavigation();
      console.log("--------------------------");
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
        v-on:functionToEmitByTabs="objSettings.EmitByTabs ? objSettings.EmitByTabs() : false"
        v-on:functionToEmitOnInit="objSettings.OnInit ? objSettings.OnInit() : false"
        v-on:functionToEmitBeforeNavigation = " objSettings.beforeNavigation ? objSettings.beforeNavigation() : false "
        v-on:functionToEmitAfterNavigation = " objSettings.afterNavigation ?  objSettings.afterNavigation() : false "
        ref="gameRef"
      />
    `,
  };

  createApp(app).mount(this);

  return app;
};

export {};
