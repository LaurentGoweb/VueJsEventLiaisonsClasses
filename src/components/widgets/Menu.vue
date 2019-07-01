<template>
 <nav>
    <ul class="d-flex flex-column">
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/Page1">Page1</router-link></li>
      <li><router-link to="/Page2">Page2</router-link></li>

    </ul>
    <button class="menu-toggle d-lg-none" @click="openMenuMobile()">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
    }
  },
  methods:{
    openMenuMobile () {
     this.$parent.menuMobileActive = ! this.$parent.menuMobileActive
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './src/assets/css/menu.scss';
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

