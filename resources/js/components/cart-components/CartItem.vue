<template>
    <div
        class="cart-item"
    >

        <div class="cart-item__description">
            <div class="cart-item__img">
                <img :src="imageUrl" :alt="cartDataItem.name">
            </div>
            <div class="cart-item__text">
                <router-link class="cart-item__name" to="#">{{ cartDataItem.name }}</router-link>
                <p class="cart-item__price">{{ cartDataItem.price }} руб/{{ cartDataItem.unit }}</p>
            </div>
        </div>

        <div class="cart-item__control field-control">
            <div class="">
                <button class="field-control__btn">-</button>
                <input class="field-control__input" type="number">
                <button class="field-control__btn">+</button>
            </div>
            <div class="field-control__del">
                <button>x</button>
            </div>
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
    border-bottom: 1px solid $greyLight;
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    &__img {
        width: 150px;
        margin-right: 3rem;
        img {
            width: 100%;
        }
    }

    &__title {
        flex-grow: 1;
    }

    &__description {
        display: flex;
        align-items: center;
        width: 100%;
    }

    &__name {
        font-size: 24px;
        color: #333333;
        display: block;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

    &__control {
        display: flex;
        align-items: center;
    }
}

.field-control {
    width: 40%;
    &__btn {
        width: 20px;
        height: 20px;
    }

    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &__input {
        border: 1px solid $greyExtraLight;
        border-radius: 5px;
        width: 50px;
    }

    &__del {
        margin-left: 3rem;
        button {
            background: $grey;
            color: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;

            &:hover {
                background: red;
            }
        }
    }
}

</style>
