<template>
    <div class="container">
        <h1 class="login__title">Вход в кабинет покупателя</h1>
        <form action="#" @submit.prevent="submit" class="login__form">
            <div class="login__group">
                <label for="email" class="login__label">Email</label>
                <input type="email" name="email" id="email" class="login__input" v-model="form.email">
            </div>
            <div class="login__group">
                <label for="password" class="login__label">Пароль</label>
                <input type="password" name="password" id="password" class="login__input" v-model="form.password">
            </div>
            <div class="login__btns">
                <button type="submit" class="login__button">
                    Войти
                </button>
                <router-link to="/register" class="login__href">Регистрация</router-link>
                <router-link to="/register" class="login__href">Восстановить пароль</router-link>
            </div>
        </form>
    </div>


</template>

<script>
  import { mapActions } from 'vuex'
// TODO нужно добавить обработку случая если логирование не прошло успешно, валидация
  export default {
    name: "Login",
    data () {
      return {
        form: {
          email: '',
          password: '',
        }
      }
    },

    methods: {
      ...mapActions({
        signIn: 'auth/signIn'
      }),

      async submit () {
        await this.signIn(this.form);
        this.$router.push('/');
      }
    },
  }
</script>

<style lang="scss" scoped>
    .login {
        &__title {
            font-size: 34px;
            font-weight: 700;
            color: #333333;
            margin: 16px 0;
         }
        &__form {
            display: flex;
            flex-direction: column;
            width: 50%;
        }
        &__label {
            font-size: 16px;
            font-weight: 400;
            color: #333333;
            margin-bottom: 10px;
        }
        &__group {
            display: flex;
            flex-direction: column;
            margin-bottom: 16px;
        }
        &__input {
            border: solid 1px #cccccc;
            border-radius: 5px;
            color: #333333;
            padding: 6px 10px;
            line-height: 24px;
            background-color: #ffffff;
            font-size: 16px;
        }
        &__button {
            background-color: #1f7d63;
            color: #ffffff;
            padding: 16px;
            line-height: 16px;
            font-size: 16px;
            border: solid 1px #cccccc;
            border-radius: 10px;
            margin-right: 15px;
        }
        &__button:hover {
            background-color: #40a78a;
        }
        &__href {
            color: #1f7d63;
            font-size: 16px;
            margin-right: 15px;
        }
        &__href:last-child {
            margin-right: 0;
        }
    }

</style>
