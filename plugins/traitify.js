import Traitify from "traitify-widgets";

export default ({app}, inject) => {
  inject("traitify", {
    render: (selector) => {
      Traitify.setHost("https://api.traitify.com");
      Traitify.setPublicKey("sptoechv411aqbqrp4l9a4eg2a");

      const assessmentID = "2241aedc-8f3c-45ae-b34c-2c4359b2ab3c";
      const widget = Traitify.ui.component();
      widget.assessmentID(assessmentID);
      widget.target(selector);
      widget.render();
    }
  })
}

