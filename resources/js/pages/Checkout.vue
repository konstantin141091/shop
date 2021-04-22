<template>
    <div class="container checkout">
        <h1 class="checkout__title">Оформление заказа</h1>

        <div class="checkout__box">
            <form class="checkout__form">
                <div class="checkout-block">
                    <h2 class="form__title">Контактные данные</h2>
                    <div class="input">
                        <label class="input-label" for="client_contact_name">Контактное лицо (ФИО)</label>
                        <input class="input-field" autocomplete="off" type="text" id="client_contact_name" value="">
                        <div class="co-input-notice co-notice--danger">Поле не заполнено</div>
                    </div>
                    <InputText />
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
export default {
    components: {InputText}
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

.input-label {
    display: block;
    margin-bottom: .5rem;
}

.input-label:after {
    font-size: 0.9em;
    margin-left: 0.2em;
    line-height: 0.7em;
    content: '*';
    color: red;
}
</style>

