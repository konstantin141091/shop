<template>
    <div>
        <div class="product">
            <a href="#" class="product__img">
                <img :src="imageUrl" :alt="product.title">
            </a>
            <div class="product__text">
                <a class="product__title" href="#">{{ product.title }}, {{ product.count }}</a>
                <p class="product__price">{{ product.price }} руб.</p>
            </div>
            <div class="product__btn">
                <button>В корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductComponent',
    props: {
        product: {
            type: Object,
        },
        imageUrl: {
            type: String,
            default: 'storage/images/no_photo.png'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.product {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid $greyLight;
    max-width: 230px;
    height: 350px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    &__img {
        display: block;
        height: 180px;
        margin-bottom: 1.5rem;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    &__text {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
    }

    &__title {
        font-size: 16px;
        color: $colorText;

        &:hover {
            color: $colorBtn;
        }
    }

    &__price {
        font-size: 2.4rem;
        font-weight: bold;
    }

    &__btn {
        padding: 10px;

        button {
            font-size: 16px;
            cursor: pointer;
            color: #ffffff;
            background-color: $colorBtn;
            width: 100%;
            padding: 10px;
            border-radius: 5px;
        }
    }

}

</style>
