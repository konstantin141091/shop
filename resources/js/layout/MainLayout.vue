<template>
    <div class="wrapper-layout">
        <Header/>
        <div class="main-layout">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";

export default {
    name: "MainLayout",
    components: {Header, Footer},
  mounted() {
      // вызываем запросы к бд, чтобы сохранить данные в store
    this.$store.dispatch('GET_PRODUCTS');
    this.$store.dispatch('GET_CATEGORIES');
  }
}
</script>

<style lang="scss" scoped>

</style>
