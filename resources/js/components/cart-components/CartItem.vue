<template>
    <div class="cart-item">
        <div class="cart-item__img">
            <img :src="imageUrl" :alt="cartDataItem.name">
        </div>

        <div class="cart-item__description">
            <p>{{ cartDataItem.name }}</p>
            <p class="cart-item__price">{{ cartDataItem.price }} руб.</p>
        </div>

        <div class="cart-item__btn">
            <button>Удалить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cartDataItem: {
            type: Array,
            default: () => {
                return {}
            }
        },
        imageUrl: {
            type: String
        }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    }

}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $grey;
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    &__img {
        width: 100px;
        img {
            width: 100%;
        }
    }
}
</style>
