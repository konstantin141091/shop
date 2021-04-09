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

        <ReviewsComponent />

        <FeedbackComponent />
    </div>

</template>

<script>
import Carousel from "../components/home-components/CarouselComponent";
import BenefitListComponent from "../components/home-components/BenefitListComponent";
import ReviewsComponent from "../components/home-components/ReviewsComponent";
import FeedbackComponent from "../components/home-components/FeedbackComponent";

export default {
    name: "Home",
    components: {FeedbackComponent, ReviewsComponent, BenefitListComponent, Carousel}
}
</script>

<style scoped>

</style>
