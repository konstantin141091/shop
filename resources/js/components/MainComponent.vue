<template>
    <div>
        <Header/>
        <div>
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default {
    name: "MainComponent",
    components: {HeaderComponent, FooterComponent}
}
</script>

<style scoped>

</style>
