<template>
    <div class="container checkout">
        <h1 class="checkout__title">Оформление заказа</h1>

        <div class="checkout__box">
            <form class="checkout__form" @submit.prevent="submitHandler">
                <div class="checkout-block">
                    <h2 class="form__title">Контактные данные</h2>

                    <InputText
                        :label="'Контактное лицо (ФИО)'"
                        :uniq="'client_name'"
                        :required-field="true"
                        :error="errors.userName"
                        v-model.trim="userName"
                    />

                    <InputText
                        :label="'Контактный телефон'"
                        :uniq="'client_tel'"
                        :required-field="true"
                        :error="errors.userNumberPhone"
                        v-model="userNumberPhone"
                    />
                </div>

                <div class="checkout-block">
                    <h3 class="form__title">Доставка</h3>

                    <InputText
                        :label="'Населенный пункт'"
                        :uniq="'client_address'"
                        placeholder="Челябинская область, г. Магнитогорск, ул. Полевая, д.0"
                        :required-field="true"
                        :error="errors.deliveryAddress"
                        v-model="deliveryAddress"
                    />

                    <!--<InputRadio
                        :label="'Самовывоз'"
                        :uniq="'pickup'"
                        :name="'delivery'"
                        :title="'pickup'"
                        v-model="deliveryMethod"
                    />
                    <InputRadio
                        :label="'Курьером'"
                        :uniq="'deliveryByCourier'"
                        :name="'delivery'"
                        :title="'deliveryByCourier'"
                        v-model="deliveryMethod"
                    />-->

                    <div class="form-item">
                        <input
                            type="radio"
                            class="form-radio"
                            name="delivery"
                            id="pickup"
                            value="pickup"
                            v-model="deliveryMethod"
                        />
                        <label
                            class="form-radio-label"
                            for="pickup"
                        >
                            Самовывоз
                        </label>
                    </div>
                    <div class="form-item">
                        <input
                            type="radio"
                            class="form-radio"
                            name="delivery"
                            id="deliveryByCourier"
                            value="deliveryByCourier"
                            v-model="deliveryMethod"
                        />
                        <label
                            class="form-radio-label"
                            for="deliveryByCourier"
                        >
                            Курьером
                        </label>
                    </div>

                    <InputTextarea
                        :label="'Комментарии к заказу'"
                        :resize="false"
                        v-model="deliveryText"
                    />

                </div>

                <div class="checkout-block">
                    <h3 class="form__title">Покупатель</h3>

                    <InputText
                        v-if="!isCheckPassword"
                        label="Email"
                        :uniq="'client-email'"
                        v-model="emailNotRegistration"
                    />

                    <InputText
                        v-if="isCheckPassword"
                        label="Email"
                        :uniq="'client-email'"
                        :error="errors.email"
                        :required-field="true"
                        v-model="email"
                    />

                    <InputCheck
                        label-text="Стать постоянным покупателем"
                        label-class="c"
                        v-model="isCheckPassword"
                    />

                    <template v-if="isCheckPassword">
                        <InputPassword
                            label="Пароль"
                            uniq="client-pass"
                            is-repass
                        />
                    </template>
                </div>

                <div class="checkout-block">
                    <h3 class="form__title">Способ оплаты</h3>
                    <p>Оплата производится наличными или по карте курьеру</p>
                </div>

                <Button
                    type="submit"
                    btn-class="form__btn"
                    btn-text="Подтвердить заказ"
                >Button
                </Button>

            </form>

           <BasketItemList />
        </div>

    </div>
</template>

<script>
import InputText from "../ui/InputText"
import InputNumber from "../ui/InputNumber"
import InputTextarea from "../ui/InputTextarea"
import InputEmail from "../ui/InputEmail"
import InputCheck from "../ui/InputCheck"
import InputRadio from "../ui/InputRadio"
import Button from "../ui/Button"

import {required, minLength, maxLength, email} from 'vuelidate/lib/validators'
import InputPassword from "../ui/InputPassword";
import BasketItemList from "../components/checkout/BasketItemList";



export default {
    components: {
        BasketItemList,
        InputPassword, Button, InputRadio, InputCheck, InputEmail, InputTextarea, InputNumber, InputText},
    data() {
        return {
            userName: '',
            userNumberPhone: '',
            deliveryAddress: '',
            deliveryMethod: '',
            deliveryText: '',
            email: '',
            emailNotRegistration: '',
            isCheckPassword: null,
            errors: {
                userName: '',
                userNumberPhone: '',
                deliveryAddress: '',
                email: '',
            }
        }
    },
    validations: {
        userName: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(35),
        },
        userNumberPhone: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(35),
        },
        deliveryAddress: {
            required,
            minLength: minLength(5),
            maxLength: maxLength(35),
        },
        email: {
            required,
            email
        }
    },

    computed: {},

    methods: {
        formIsValid() {
            const regNumPhone = new RegExp(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)


            let isValid = true

            this.errors = {
                userName: '',
                userNumberPhone: '',
                deliveryAddress: '',
            }

            if (!this.$v.userName.minLength || !this.$v.userName.maxLength) {
                this.errors.userName = "Количество символов (min 5 max 35)";
                isValid = false
            }

            if (this.$v.userName.required && !this.$v.userName.required) {
                this.errors.userName = "Поле не может быть пустым";
                isValid = false
            }

            if (!this.$v.userNumberPhone.required) {
                this.errors.userNumberPhone = "Поле не может быть пустым";
                isValid = false
            }

            if (!regNumPhone.test(this.userNumberPhone) ) {
                console.log(this.userNumberPhone.length)
                console.log(typeof this.userNumberPhone.length)
                this.errors.userNumberPhone = "Введите номер в формате 8900123456 или +7900123456";
                isValid = false
            }

            if (!this.$v.deliveryAddress.required) {
                this.errors.deliveryAddress = "Поле не может быть пустым";
                isValid = false
            }

            // Блок email

            if (!this.$v.email.required) {
                this.errors.email = "Поле не может быть пустым";
                isValid = false
            }

            if (!this.$v.email.email) {
                this.errors.email = "Введите корректный email";
                isValid = false
            }



            return isValid
        },
        submitHandler() {
            if (this.formIsValid()) {
                console.group('Form Data')
                console.log('Name:', this.userName)
                console.log('Number:', this.userNumberPhone)
                console.log('Address:', this.deliveryAddress)
                console.log('deliveryMethod:', this.deliveryMethod)
                console.log('email:', this.email)
                console.log('emailNotRegistration:', this.emailNotRegistration)
                console.log('checkPassword:', this.checkPassword)
                console.groupEnd()
            }
        },

    },

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




//form

.form {
    &__title {
        font-size: 24px;
        margin-bottom: 1.5rem;
    }

    &__btn {
        height: 40px;
        width: 100%;
        margin-top: 1.5rem;
    }
}

.regular-client {
    margin-bottom: 1.5rem;
}
</style>

