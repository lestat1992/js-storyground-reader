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
    components: {
      game,
    },
    template: `
      <game 
        v-bind:idStory="objSettings.idStory"
        v-bind:editorUsage="objSettings.editorUsage"
        v-bind:langStory="objSettings.langStory"
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
        v-on:emitByTabs="objSettings.EmitByTabs ? objSettings.EmitByTabs() : false"
        v-on:onInit="objSettings.OnInit ? objSettings.OnInit() : false"
        v-on:beforeNavigation = " objSettings.beforeNavigation ? objSettings.beforeNavigation() : false "
        v-on:afterNavigation = " objSettings.afterNavigation ?  objSettings.afterNavigation() : false "
      />
    `,
    getPlayerValues: () => {
      console.log("nome evento in .js: ");
      console.log(
        "getPlayerValues" + this.childNodes[0].getAttribute("sg1-id-stroy")
      );
      console.log("..");

      let idStory = this.childNodes[0].getAttribute("sg1-id-stroy");

      window.dispatchEvent(new Event("getPlayerValues" + idStory));
      let value = JSON.parse(localStorage["sg1Storage" + idStory]);
      localStorage.removeItem("sg1Storage" + idStory);
      return value;
    },
    getCurrentTabsValues: () => {
      let idStory = this.childNodes[0].getAttribute("sg1-id-stroy");

      window.dispatchEvent(new Event("getCurrentTabsValues" + idStory));
      let value = JSON.parse(localStorage["sg1Storage" + idStory]);
      localStorage.removeItem("sg1Storage" + idStory);
      return value;
    },
    //eventi set
    setStartPoint: (params) => {
      let idStory = this.childNodes[0].getAttribute("sg1-id-stroy");

      localStorage.setItem("sg1Storage" + idStory, JSON.stringify(params));
      window.dispatchEvent(new Event("setStartPoint" + idStory));
    },
    setPlayerValues: (params) => {
      let idStory = this.childNodes[0].getAttribute("sg1-id-stroy");

      localStorage.setItem("sg1Storage" + idStory, JSON.stringify(params));
      window.dispatchEvent(new Event("setPlayerValues" + idStory));
    },
  };

  createApp(app).mount(this);

  return app;
};

export {};
