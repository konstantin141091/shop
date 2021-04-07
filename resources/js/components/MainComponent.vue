<template>
    <div>
        <h2>Входной компонент. Главный</h2>
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
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MainComponent"
  }
</script>

<style scoped>

</style>
