<template>
    <div class="container checkout">
        <h1 class="checkout__title">Оформление заказа</h1>

        <div class="checkout__box">
            <form class="checkout__form">
                <div class="checkout-block">
                    <h2 class="form__title">Контактные данные</h2>

                    <InputText
                        :label="'Контактное лицо (ФИО)'"
                        :uniq="'client_name'"
                        :error="'Поле не заполнено'"
                 /> <!--   :error="'Поле не заполнено'"-->

                    <InputText
                        :label="'Контактный телефон'"
                        :uniq="'client_tel'"
                    />
                </div>

                <div class="checkout-block">
                    <h3 class="form__title">Доставка</h3>

                    <InputText
                        :label="'Населенный пункт'"
                        :uniq="'client_address'"
                 />

                    <InputRadio
                        :label="'Самовывоз'"
                        :uniq="'pickUp'"
                        :name="'delivery'"
                    />
                    <InputRadio
                        :label="'Курьером'"
                        :uniq="'deliveryByCourier'"
                        :name="'delivery'"
                    />

                    <InputTextarea
                        :label="'Комментарии к заказу'"
                        :resize="false"

                    />

                </div>

                <div class="checkout-block">
                    <h3 class="form__title">Покупатель</h3>

                    <InputEmail
                        :label="'Email'"
                        :uniq="'client_email'"
                    />
                    <InputCheck
                        :labelText="'Стать постоянным покупателем'"
                        :labelClass="'label-class'"
                    />
                </div>

                <div class="checkout-block">
                    <h3 class="form__title">Способ оплаты</h3>
                    <p>Оплата производится наличными или по карте курьеру</p>
                </div>

            </form>

            <div class="basket-item__list">
                <div class="basket-item">
                    <div class="basket-item__img">
                        <img src="storage/images/no_photo.png" alt="">
                    </div>
                    <p class="basket-item__name">{{ 'Cосиски Кроха' }}</p>
                    <p class="basket-item__price">{{ 2 }}&nbsp;х&nbsp;<span>{{ 100 }}&nbsp;руб</span></p>
                </div>
                <div class="basket-item">
                    <div class="basket-item__img">
                        <img src="storage/images/no_photo.png" alt="">
                    </div>
                    <p class="basket-item__name">{{ 'Cосиски Кроха' }}</p>
                    <p class="basket-item__price">{{ 2 }}&nbsp;х&nbsp;<span>{{ 100 }}&nbsp;руб</span></p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import InputText from "../ui/InputText";
import InputNumber from "../ui/InputNumber";
import InputTextarea from "../ui/InputTextarea";
import InputEmail from "../ui/InputEmail";
import InputCheck from "../ui/InputCheck";
import InputRadio from "../ui/InputRadio";
export default {
    components: {InputRadio, InputCheck, InputEmail, InputTextarea, InputNumber, InputText}
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.checkout {
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__box {
        display: flex;
        align-items: flex-start;
    }

    &__form {
        flex-grow: 1;
        margin-right: 3rem;
    }
}

.basket-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $greyLight;
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    &__img {
        margin-right: 3rem;

        img {
            width: 75px;
        }
    }

    &__text {
        display: flex;
        align-items: flex-end;
        color: #333333;
    }

    &__name {
        line-height: 24px;
        margin-right: 3rem;
    }

    &__price {
        margin-left: auto;
        span {
            font-size: 24px;
            line-height: 24px;
            font-weight: bold;
        }
    }

}

.basket-item__list {
    width: 450px;
}


//form

.form {
    &__title {
        font-size: 24px;
        margin-bottom: 1.5rem;
    }
}

.label-class {
    display: flex;
    align-items: center;
}
</style>

