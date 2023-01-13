import "attachshadow";
import getRandomValues from "polyfill-crypto.getrandomvalues";
import "proxy-polyfill/proxy.min.js";
import Traitify from "traitify-widgets";

window.crypto = {getRandomValues};

export default ({app}, inject) => {
  inject("traitify", {
    render: (shadowSelector) => {
      const shadow = document.querySelector(shadowSelector).attachShadow({mode: "open"});
      const element = document.createElement("div");
      const style = [...document.querySelectorAll("style")].find((e) => e.textContent.includes("traitify"));

      shadow.appendChild(element);
      shadow.appendChild(style);

      Traitify.setHost("https://api.traitify.com");
      Traitify.setPublicKey("sptoechv411aqbqrp4l9a4eg2a");

      const assessmentID = "2241aedc-8f3c-45ae-b34c-2c4359b2ab3c"; // Results
      // const assessmentID = "1f893342-6a92-42e6-8b9f-58565da2902e"; // SlideDeck
      const widget = Traitify.ui.component();

      widget.assessmentID(assessmentID)
        .target(element)
        .theme("paradox")
        .view("employee")
        .render();
    }
  })
}

