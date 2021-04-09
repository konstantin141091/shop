<template>
    <div>
        <Carousel/>

        <section>
            <h2>Новое поступление</h2>
        </section>

        <BenefitListComponent />

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
import Carousel from "../components/home-components/CarouselComponent";
import BenefitListComponent from "../components/home-components/BenefitListComponent";

export default {
    name: "Home",
    components: {BenefitListComponent, Carousel}
}
</script>

<style scoped>

</style>
