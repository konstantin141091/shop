<template>
    <div class="container">
        <Carousel/>

        <CarouselProductComponent :title="'Новое поступление'" />

        <BenefitListComponent />

<!--        <CarouselProductComponent :title="'Акции'" />-->
        <PromotionsComponent />

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
import PromotionsComponent from "../components/home-components/PromotionsComponent";

export default {
    name: "Home",
    components: {
        PromotionsComponent,
        FeedbackComponent, ReviewsComponent, BenefitListComponent, Carousel, CarouselProductComponent}
}
</script>

<style>

</style>
