<template>
    <div class="container">
        <div class="flex-box">
            <div class="left">
                <img :src="`storage/images/products/${product.img}`" :alt="product.name">
            </div>
            <div class="right">
                <h1 class="product__title">{{ product.name }}</h1>
                <div class="product__info">
                    <div class="product__buy">
                        <p class="product__price">{{ product.price }} руб.</p>
                        <Button
                            :btnClass="'product__btn'"
                            :btnText="'В корзину'"
                            @click="addToCart"
                        />
                    </div>

                    <div class="product__description">
                        <div>
                            <h3>Описание</h3>
                            <p>{{ product.description }}</p>
                        </div>

                        <div>
                            <h3>Характеристики</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, vel.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import Button from "../ui/Button";
import {mapActions} from "vuex/dist/vuex.mjs";
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
    data() {
        return {
            product: null
        }
    },
    components: {Button},
    created() {
        console.log(this.$route.params.id)
        const product = this.PRODUCTS.find(product => product.id === this.$route.params.id)
        if (product) {
            this.product = product
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.flex-box {
    display: flex;
}

.left {
    width: 50%;

    img {
        width: 100%;
    }
}

.product {
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__buy {
        background: $greyLight;
        padding: 40px 20px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;

    }

    &__price {
        font-size: 3.2rem;
        font-weight: bold;
    }

    &__btn {
        padding: 8px 16px;
        min-width: 200px;
    }
}
</style>
