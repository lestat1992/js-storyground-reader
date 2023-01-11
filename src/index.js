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
      //PORTA NELLA LIBRERIA VUE -------------------------------

      let idToAdd = 0;
      if (objSettings.id) {
        idToAdd = objSettings.id;
      }

      window.addEventListener("getPlayerValues", (event) => {
        localStorage.setItem(
          "dataX",
          JSON.stringify([{ val1: true, val2: "ciaone" }])
        );
      });
      window.addEventListener("getCurrentTabValues", (event) => {
        localStorage.setItem("dataX", "!!! some data from vue !!!");
      });
      //eventi set
      window.addEventListener("setStartPoint", (event) => {
        //console.log("!! this are some player values !!");
      });
      window.addEventListener("setPlayerValues", (event) => {
        //console.log("!! this are some player values !!");
      });
      //--------------------------------------------------------
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
    getPlayerValues: () => {
      window.dispatchEvent(new Event("getPlayerValues"));
      let value = JSON.parse(localStorage.dataX);
      localStorage.removeItem("dataX");
      return value;
    },
    getCurrentTabValues: () => {
      window.dispatchEvent(new Event("getCurrentTabValues"));
    },
    //eventi set
    setStartPoint: () => {
      window.dispatchEvent(new Event("setStartPoint"));
    },
    setPlayerValues: () => {
      window.dispatchEvent(new Event("setPlayerValues"));
    },
  };

  createApp(app).mount(this);

  return app;
};

export {};
