<template>
    <div class="container">
        <PromoComponent/>

        <NewArrivalComponent/>

        <BenefitListComponent/>

        <PromotionsComponent/>

        <ReviewsComponent/>

        <FeedbackComponent/>
    </div>

</template>

<script>
import PromoComponent from "../components/home-components/PromoComponent";
import BenefitListComponent from "../components/home-components/BenefitListComponent";
import ReviewsComponent from "../components/home-components/ReviewsComponent";
import FeedbackComponent from "../components/home-components/FeedbackComponent";
import PromotionsComponent from "../components/home-components/PromotionsComponent";
import NewArrivalComponent from "../components/home-components/NewArrivalComponent";
// import Carousel from "../components/Carousel";
import ProductCardComponent from "../components/ProductCardComponent";


export default {
    name: "Home",
    components: {
        // Carousel,
        ProductCardComponent,
        NewArrivalComponent,
        PromotionsComponent,
        FeedbackComponent,
        ReviewsComponent,
        BenefitListComponent,
        PromoComponent,
    }
}
</script>

<style lang="scss">

</style>
