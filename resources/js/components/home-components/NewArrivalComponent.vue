<template>
    <div class="new-arrival">
        <div class="new-arrival__head">
            <h2 class="new-arrival__title">Новое поступление</h2>
            <div class="new-arrival__arrows">
                <button @click="prevSlide" class="btn-prev" :class="{disabled: isDisabled}" :style="{background: 'url(\'/icons/arrow-left.svg\') 0 0 / 100% no-repeat'}">🠐</button>
                <button @click="nextSlide" class="btn-next" :style="{background: 'url(\'/icons/arrow-right.svg\') 0 0 / 100% no-repeat'}">🠒</button>
            </div>
        </div>

        <VueSlickCarousel v-bind="newProductsSliderSettings" ref="slider">
            <ProductCardComponent
                v-for="item in sliderItems"
                :key="item.id"
                :product-data="item"
                :image-url="item.img ? imageUrl + item.img : '/images/no_photo.png'"
            />
        </VueSlickCarousel>
    </div>
</template>

<script>
import ProductCardComponent from "../ProductCardComponent";
import {mapGetters, mapActions} from "vuex/dist/vuex.mjs";

export default {
    name: 'NewArrivalComponent',
    components: {ProductCardComponent},
    data() {
        return {
            sliderItems: [
                {id: 1, name: 'Колбаса вареная Молочная', price: 150, unit: 'шт', img: 'Kolbasa_varennaya_Molochnaya.png'},
                {id: 2, name: 'Охотничие колбаски ГОСТ', price: 600, unit: 'шт', img: 'Ohotnich_kolbaski_GOST.png'},
                {id: 3, name: 'Полукопченная Армавирская ГОСТ', price: 500, unit: 'шт', img: 'Polukopchyonnaya_Armavarskaya_GOST.png'},
                {id: 4, name: 'Полукопченные колбаски элитные', price: 600, unit: 'кг', img: 'Polukopchyonnye_kolbaski_Elitnye_3_sort.png'},
                {id: 5, name: 'Сосиски Кроха', price: 350, unit: 'шт', img: 'Sosiski_kroha.png'},
                {id: 6, name: 'Полукопченная Армавирская ГОСТ', price: 250, unit: 'шт', img: 'Polukopchyonnaya_Armavarskaya_GOST.png'},
                {id: 7, name: 'Cтаромосковская вареная копченая', price: 200, unit: 'шт', img: 'Staromoskovskaya_varyono_kopchyonnaya.png'},
            ],
            newProductsSliderSettings: {
                arrows: false,
                slidesToShow: 4,
                infinite: false,
            },
            isDisabled: false,
        }
    },
    computed: {
        imageUrl() {
            return `/images/products/`
        },
        ...mapGetters([
            'PRODUCTS', 'PRODUCTS_NEWS'
        ]),

    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS'
        ]),
        prevSlide() {
            this.$refs.slider.prev()
        },

        nextSlide() {
            this.$refs.slider.next()
        }
    },
    created() {
        this.GET_PRODUCTS()
            .then(response => {
                if(response) {
                    console.log('Data arrived created')
                }
            })
    }
}
</script>

<style lang="scss">

.new-arrival {
    margin-bottom: 3rem;
    width: 100%;

    &__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }


    .btn-prev, .btn-next {
        font-size: 0;
        line-height: 0;

        width: 30px;
        height: 40px;
        padding: 0;
    }

    .btn-prev + .btn-next {
        margin-left: 30px;
    }

    .disabled {
        opacity: .5;
        pointer-events: none;
    }
}


</style>
