<template>
    <div class="container cart">
        <h1 class="cart__title">Корзина</h1>

        <div v-if="!cartList.length">
            <CartEmpty />
        </div>

        <div
            v-else
            class="cart__flex"
        >
            <div class="cart__list">
                <CartItem
                    v-for="(item, index) in cartList"
                    :key="item.id"
                    :imageUrl="item.img ? imageUrl + item.img : 'storage/images/no_photo.png'"
                    :cartDataItem="item"
                    @deleteFromCart="deleteFromCart(index)"
                    @incrementItem="incrementItem(index)"
                    @decrementItem="decrementItem(index)"
                />
            </div>

            <CartControl />
        </div>

    </div>
</template>

<script>
import CartEmpty from "../components/cart-components/CartEmpty";
import CartItem from "../components/cart-components/CartItem";
import CartControl from "../components/cart-components/CartControl";
import {mapActions, mapGetters} from "vuex/dist/vuex.mjs";

export default {
    name: 'Cart',
    components: {CartControl, CartItem, CartEmpty},
    props: {

    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters ([
            'CART'
        ]),
        cartList() {
            return this.CART
        },
        imageUrl() {
            return `storage/images/products/`
        },
    },
    methods: {
        ...mapActions([
           'DELETE_FROM_CART', 'DECREMENT_CART_ITEM', 'INCREMENT_CART_ITEM'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        incrementItem(index) {
            this.INCREMENT_CART_ITEM(index)
        },
        decrementItem(index) {
            this.DECREMENT_CART_ITEM(index)
        }

    }
}
</script>

<style lang="scss" scoped>
.cart {
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }
    &__flex {
        display: flex;
        align-items: flex-start;
    }
    &__list {
        flex-grow: 1;
        margin-right: 3rem;
    }
}
</style>
