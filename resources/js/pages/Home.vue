<template>
    <div>
        <Carousel/>

        <section>
            <h2>Новое поступление</h2>
            <CarouselProductComponent />
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
import CarouselProductComponent from "../components/CarouselProductsComponent"

export default {
    name: "Home",
    components: {FeedbackComponent, ReviewsComponent, BenefitListComponent, Carousel, CarouselProductComponent}
}
</script>

<style scoped>

</style>
