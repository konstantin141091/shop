<template>
    <div>
        <Carousel />

        <section>
            <h2>Новое поступление</h2>
        </section>

        <section>
            <h2>Наши плюсы</h2>
        </section>

        <section>
            <h2>Акции</h2>
        </section>

        <section>
            <h2>Отзывы клиентов</h2>
        </section>

        <section>
            <h2>Обратная связь</h2>
        </section>
    </div>

</template>

<script>
import Carousel from "../components/CarouselComponent";

export default {
    name: "Home",
    components: {Carousel}
}
</script>

<style scoped>

</style>
