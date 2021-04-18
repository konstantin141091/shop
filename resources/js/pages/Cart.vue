<template>
    <div class="container cart">
        <h1 class="cart__title">Корзина</h1>

        <div v-if="!cartList.length">
            <CartEmpty />
        </div>

        <div v-else>

            <CartItem
                v-for="item in cartList"
                :key="item.id"
                :imageUrl="item.img ? imageUrl + item.img : 'storage/images/no_photo.png'"
                :cartDataItem="item"
            />
        </div>

    </div>
</template>

<script>
import CartEmpty from "../components/cart-components/CartEmpty";
import CartItem from "../components/cart-components/CartItem";

export default {
    name: 'Cart',
    components: {CartItem, CartEmpty},
    props: {

    },
    data() {
        return {

        }
    },
    computed: {
        cartList() {
            return this.$store.getters.CART
        },
        imageUrl() {
            return `storage/images/products/`
        },
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
}
</style>
