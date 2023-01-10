<template>
  <div>
    <h1>Hello</h1>
    <div id="shadow"></div>
  </div>
</template>

<script>
  export default {
    mounted() {
      const shadow = document.querySelector("#shadow").attachShadow({mode: "open"});
      const element = document.createElement("div");
      const style = [...document.querySelectorAll("style")].find((e) => e.textContent.includes("traitify"));

      shadow.appendChild(element);
      shadow.appendChild(style);

      this.$traitify.render(element);
    }
  }
</script>
