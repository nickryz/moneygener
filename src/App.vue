<template>
  <div id="app">
    <!-- Header -->
    <Header />
    <!-- <div class="wrapper"> -->
    <transition name="fade" mode="out-in" v-on:enter="enter">
      <router-view />
    </transition>
    <!-- </div> -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    enter () {
      window.scroll(0, 0)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import "global/styles/main";

#app {
  height: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body {
  // background-color: rgba(255, 166, 0, 0.3);
  background: rgba(255, 196, 0, 0.2) url('~@/assets/gplay.png') repeat;
}
</style>
