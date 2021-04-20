<template>
    <div class="total">
        <div class="total__price">
            <span>Итого</span>
            <span>{{ 10000 }}&nbsp;руб</span>
        </div>
        <Button
            :btn-type="'submit'"
            :btn-text="'Оформить заказ'"
            :btn-class="'total__btn'"
            />
    </div>
</template>

<script>
import Button from "../../ui/Button";
export default {
    name: 'CartControl',
    components: {Button}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.total {
    padding: 20px 25px;
    background: $greyLight;
    border-radius: 5px;
    width: 300px;

    &__price {
        color: $colorText;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    &__btn {
        height: 50px;
    }
}
</style>
