<template>
  <div>
    <h1>Hello world!</h1>
    <div class="widget"></div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$traitify.render(".widget");
    }
  }
</script>
