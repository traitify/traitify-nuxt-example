<template>
  <div>
    <h1>Hello</h1>
    <div id="shadow"></div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$traitify.render("#shadow");
    }
  }
</script>
