export default {
  build: {
    babel: {
      plugins: ["transform-unicode-regexp-runtime"]
    },
    transpile: ["traitify-widgets"]
  },
  plugins: [
    {src: "~/plugins/traitify.js", mode: "client"}
  ]
}
