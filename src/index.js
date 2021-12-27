import Vue from "vue";

export default function storyGround(target) {
  console.log("hello");

  new Vue({
    el: target,
    data: {
      //message: "Hello Vue!",
    },
    template: "<div>TEST</div>",
    /*
    components: { App },
    render: (h) => {
      return h("App");
    },
    */
  });
}
