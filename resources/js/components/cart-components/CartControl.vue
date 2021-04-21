<template>
    <div class="total">
        <div class="total__price">
            <span>Итого</span>
            <span>{{ cartTotalCost }}&nbsp;руб</span>
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
import {mapGetters} from "vuex";

export default {
    name: 'CartControl',
    components: {Button},

    computed: {
        ...mapGetters([
           'CART'
        ]),
        cartTotalCost() {
            let result = []
            if(this.CART.length) {
                for (let item of this.CART) {
                    result.push(item.price * item.count)
                }
                result = result.reduce( (sum, el) => {
                    return sum + el
                })
                return result
            } else {
                return result = 0
            }

        }
    }
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
