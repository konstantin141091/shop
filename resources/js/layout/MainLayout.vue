<template>
    <div class="wrapper-layout container">
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
    components: {Header, Footer}
}
</script>

<style scoped>

</style>
