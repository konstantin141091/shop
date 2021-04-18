<template>
    <div class="container">
        <div class="flex-box">
            <div class="left">
                <img src="storage/images/products/Polukopchyonnye_kolbaski_Elitnye_3_sort.png" alt="Полукопченные колбаски элитные">
            </div>
            <div class="right">
                <h1 class="product__title">Полукопченные колбаски элитные 3 сорт</h1>
                <div class="product__info">
                    <div class="product__buy">
                        <p class="product__price">550 руб.</p>
                        <Button
                            :btnClass="'product__btn'"
                            :btnText="'В корзину'"
                        />
                    </div>

                    <div class="product__description">
                        <div>
                            <h3>Описание</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, vel.</p>
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
export default {
    components: {Button}
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
