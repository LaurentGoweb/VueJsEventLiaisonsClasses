<template>
  <section class="container-fluid main-container">
    <nav class="navbar navbar-expand">
      <h1>Traning Vue.js</h1>
    </nav>

    <h2>Page 1</h2>
    <div class="card card-toggle" v-bind:class="{ active: isActive }">
      <div class="card-header" v-on:click="isActive = ! isActive">
        <h4 class="mb-0 p-3">Je suis togglable</h4>
      </div>
      <div class="card-body">
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
