<template>
    <section class="special-products">
        <h2 class="special-products__title">{{ title }}</h2>

        <div class="special-products__box">
        <hooper :settings="hooperSettings">
            <!--        TODO вынести slide в отдельный компонент-->

                <slide v-for="product in products" :key="product.id">
                    <ProductComponent
                        :product="product"
                        :imageUrl="product.img ? imageUrl + product.img : 'storage/images/no_photo.png'"
                    />
                </slide>


            <hooper-navigation slot="hooper-addons">
                <svg slot="hooper-prev" class="icon icon-arrowLeft" viewBox="0 0 24 24" width="50px" height="50px">
                    <title>Arrow Left</title>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                </svg>

                <svg slot="hooper-next" class="icon icon-arrowRight" viewBox="0 0 24 24" width="50px" height="50px">
                    <title>Arrow Right</title>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                </svg>
            </hooper-navigation>
        </hooper>
        </div>
    </section>
</template>

<script>
import {Hooper, Slide, Navigation as HooperNavigation} from "hooper";
import 'hooper/dist/hooper.css';
import ProductComponent from "./ProductComponent";

export default {
    // TODO описать пропсы, добавить возможные значения flag (акция, новинки, рекомендованые)
    props: {
        title: {
            type: String,
            required: true,
        },
        flag: {
            type: String,
            // required: true раскоментировать когда продукты будем брать из апи
        }
    },
    name: "CarouselProductsComponent",
    components: {
        ProductComponent,
        Hooper,
        Slide,
        HooperNavigation
    },
    data() {
        return {
            hooperSettings: {
                infiniteScroll: true,
                centerMode: true,
                autoPlay: false,
                playSpeed: 3500,
                wheelControl: false,
                breakpoints: {
                    1400: {
                        itemsToShow: 6
                    },
                    1100: {
                        itemsToShow: 5
                    },

                    720: {
                        itemsToShow: 4
                    },
                    550: {
                        itemsToShow: 3
                    },
                    0: {
                        itemsToShow: 2
                    }
                }
            },

            // убрать products когда будет апи
            products: [
                {
                    id: 1,
                    title: "Сосиски Кроха",
                    // img: "Sosiski_kroha.png",
                    price: 1300,
                    count: "1 кг"
                },
                {
                    id: 2,
                    title: "Охотничие колбасы ГОСТ",
                    img: "Ohotnich'i_kolbaski_GOST.png",
                    price: 1300,
                    count: "1 кг"
                },
                {
                    id: 3,
                    title: "Старомосковская варено-копченная",
                    img: "Staromoskovskaya_varyono_kopchyonnaya.png",
                    price: 1300,
                    count: "1 кг"
                },

            ]
        }
    },
    computed: {
        imageUrl() {
            return `storage/images/products/`
        }
    }
}
</script>


<style lang="scss" scoped>
/*TODO импортировать scss переменные глобально*/
@import "../../sass/variables";

.special-products {
    margin-bottom: 3rem;
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
        margin-top: 3rem;
    }

    &__box {
        padding-left: 50px;
        padding-right: 50px;
    }
}


.hooper {
    height: auto;
    max-height: 400px;

    &-slide {
        width: 230px;
    }
}

.hooper-prev {
    left: -50px;
}


</style>
