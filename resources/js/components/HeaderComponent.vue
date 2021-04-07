<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Главная</router-link>
                </li>
                <li>
                    <router-link to="/about">О нас</router-link>
                </li>
                <li>
                    <router-link to="/admin">Админка</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>

</style>
