import { createApp } from "vue";
import { game } from "vue-storyground-reader";

Element.prototype.StoryGround = function (objSettings) {
  let app = {
    name: "StoryGround",
    data() {
      return {
        objSettings: objSettings,
        idStory: false,
      };
    },
    mounted() {
      //PORTA NELLA LIBRERIA VUE -------------------------------

      let idToAdd = 0;
      if (objSettings.id) {
        idToAdd = objSettings.id;
      }
      this.idStory = idToAdd;

      ///CONTROLLA NOME EVENTI QUA SOTTO E NOME LOCAL STORAGE

      window.addEventListener("getPlayerValues", (event) => {
        //console.log("id NEL listener");
        //console.log(idToAdd);
        localStorage.setItem(
          "sg1Storage" + this.idStory,
          JSON.stringify([{ val1: true, val2: "ciaone" }])
        );
      });
      window.addEventListener("getCurrentTabValues", (event) => {
        localStorage.setItem(
          "sg1Storage" + this.idStory,
          "!!! some data from vue !!!"
        );
      });
      //eventi set
      window.addEventListener("setStartPoint" + this.idStory, (event) => {
        //console.log("!! this are some player values !!");
      });
      window.addEventListener("setPlayerValues" + this.idStory, (event) => {
        //console.log("!! this are some player values !!");
      });
      //--------------------------------------------------------
    },
    components: {
      game,
    },
    template: `
      <game 
        v-bind:sg1-id-stroy="idStory"
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
      />
    `,
    getPlayerValues: () => {
      console.log("..");
      console.log(objSettings);
      window.dispatchEvent(new Event("getPlayerValues" + objSettings.id));
      let value = JSON.parse(localStorage.sg1Storage);
      localStorage.removeItem("sg1Storage");
      return value;
    },
    getCurrentTabValues: () => {
      window.dispatchEvent(new Event("getCurrentTabValues" + objSettings.id));
    },
    //eventi set
    setStartPoint: () => {
      window.dispatchEvent(new Event("setStartPoint" + objSettings.id));
    },
    setPlayerValues: () => {
      window.dispatchEvent(new Event("setPlayerValues" + objSettings.id));
    },
  };

  createApp(app).mount(this);

  return app;
};

export {};
