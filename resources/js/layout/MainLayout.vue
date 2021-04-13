<template>
    <div class="wrapper-layout">
        <Header/>
        <div class="main-layout container">
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
    components: {Header, Footer}
}
</script>

<style lang="scss" scoped>

</style>
