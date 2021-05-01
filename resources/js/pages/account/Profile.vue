<template>
    <div class="profile">
        <template v-if="successMsg">
            <div class="alert-msg">
                <p>Данные успешно изменены</p>
            </div>
        </template>
        <template v-if="errorMsg">
            <div class="alert-msg-error">
                <p>Не удалось сохранить изменения</p>
            </div>
        </template>
        <h1 class="profile__title">Данные профиля</h1>
        <form action="#" @submit.prevent="submit" class="login__form">
            <div class="login__group">
                <label for="name" class="login__label">Имя</label>
                <input type="text" name="name" id="name" class="login__input" v-model="form.name" placeholder="Имя">
                <div class="login__error" v-show="validateErrors.name">
                    <p v-for="error in validateErrors.name">{{ error }}</p>
                </div>
            </div>
            <div class="login__group">
                <label for="email" class="login__label">Email</label>
                <input type="email" name="email" id="email" class="login__input" v-model="form.email" placeholder="Email">
                <div class="login__error" v-show="validateErrors.email">
                    <p v-for="error in validateErrors.email">{{ error }}</p>
                </div>
            </div>
            <div class="login__group login__group-phone">
                <label for="phone" class="login__label">Телефон</label>
                <span class="login-phone-7">+7</span>
                <input type="tel" name="phone" id="phone" class="login__input login__input-phone" v-model.number="form.phone" placeholder="9225663344">
                <div class="login__error" v-show="validateErrors.phone">
                    <p v-for="error in validateErrors.phone">{{ error }}</p>
                </div>
            </div>
            <div class="login__checkPassword">
                <input type="checkbox" id="checkAddress" v-model="checkAddress">
                <p>Указать адрес доставки</p>
            </div>
            <template v-if="checkAddress">
                <div class="login__group">
                    <label for="location" class="login__label">Населенный пункт</label>
                    <input type="text" name="location" list="locations" id="location" class="login__input" v-model="form.location" placeholder="Населенный пункт">
                    <datalist id="locations">
                        <option value="Чита"></option>
                        <option value="Чита2"></option>
                        <option value="Москва"></option>
                        <option value="Москва2"></option>
                    </datalist>
                    <div class="login__error" v-show="validateErrors.location">
                        <p v-for="error in validateErrors.location">{{ error }}</p>
                    </div>
                </div>
                <div class="login__group">
                    <label for="address" class="login__label">Адрес доставки</label>
                    <input type="text" name="address" id="address" class="login__input" v-model="form.address" placeholder="Адрес доставки">
                    <div class="login__error" v-show="validateErrors.address">
                        <p v-for="error in validateErrors.address">{{ error }}</p>
                    </div>
                </div>
            </template>
            <div class="login__checkPassword">
                <input type="checkbox" id="checkPassword" v-model="checkPassword">
                <p>Сменить пароль</p>
            </div>
            <template v-if="checkPassword">
                <div class="login__group">
                    <label for="oldPassword" class="login__label">Текущий пароль</label>
                    <input type="password" name="oldPassword" id="oldPassword" class="login__input" v-model="form.oldPassword" placeholder="Текущий пароль">
                    <div class="login__error" v-show="validateErrors.oldPassword">
                        <p v-for="error in validateErrors.oldPassword">{{ error }}</p>
                    </div>
                </div>
                <div class="login__group">
                    <label for="newPassword" class="login__label">Новый пароль</label>
                    <input type="password" name="newPassword" id="newPassword" class="login__input" v-model="form.newPassword" placeholder="Новый пароль">
                    <div class="login__error" v-show="validateErrors.newPassword">
                        <p v-for="error in validateErrors.newPassword">{{ error }}</p>
                    </div>
                </div>
                <div class="login__group">
                    <label for="newPassword_confirmation" class="login__label">Повторите новый пароль</label>
                    <input type="password" name="newPassword_confirmation" id="newPassword_confirmation" class="login__input" v-model="form.newPassword_confirmation" placeholder="Повторите новый пароль">
                    <div class="login__error" v-show="validateErrors.newPassword_confirmation">
                        <p v-for="error in validateErrors.newPassword_confirmation">{{ error }}</p>
                    </div>
                </div>
            </template>
            <div class="login__btns">
                <button type="submit" class="login__button">
                    Сохранить изменения
                </button>
            </div>
        </form>
    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "Profile",
    data () {
      return {
        form: {
          id: null,
          name: '',
          email: '',
          phone: null,
          address: '',
          location: '',
          oldPassword: '',
          newPassword: '',
          newPassword_confirmation: '',
        },
        checkPassword: false,
        checkAddress: false,
        successMsg: false,
        errorMsg: false,
        validateErrors: {},
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/USER',
        token: 'auth/USER_TOKEN'
      })
    },

    methods: {
      ...mapActions({
        update: 'auth/UPDATE',
      }),
      successMsgClose() {
        this.successMsg = false;
      },
      errorMsgClose() {
        this.errorMsg = false;
      },

      async submit () {
        const response = await this.update(this.form);
        if (response.status === 200) {
          this.successMsg = true;
          this.validateErrors = {};
          setTimeout(this.successMsgClose, 4000)
        }
        if (response.status === 422) {
          this.errorMsg = true;
          this.validateErrors = {...response.data.errors};
          setTimeout(this.errorMsgClose, 4000)
        }
        this.form.oldPassword = '';
        this.form.newPassword = '';
        this.form.newPassword_confirmation = '';
      }
    },
    created() {
      this.form.name = this.user.name;
      this.form.email = this.user.email;
      this.form.phone = this.user.phone;
      this.form.id = this.user.id;
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../../sass/login-register";
    .profile {
        width: 100%;
        position: relative;
        &__title {
            font-size: 34px;
            font-weight: 700;
            color: #333333;
        }
    }
    .login__checkPassword {
        display: flex;
        align-items: center;
        padding: 10px 0;
        & p {
            font-size: 20px;
            font-weight: 400;
            margin-left: 15px;
        }
    }
    .login__error {
        margin-top: 5px;
        & p {
            color: #f10f0f;
            font-size: 18px;
        }
    }
    .alert-msg {
        width: 100%;
        background-color: #dff0d8;
        padding: 10px;
    }
    .alert-msg-error {
        width: 100%;
        background-color: #dc7362;
        padding: 10px;
    }

</style>
