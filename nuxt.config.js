export default {
  build: {
    transpile: ["traitify-widgets"]
  },
  plugins: [
    {src: "~/plugins/traitify.js", mode: "client"}
  ]
}
