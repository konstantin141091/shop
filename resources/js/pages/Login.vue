<template>
    <div class="container">
        <h1 class="login__title">Вход в кабинет покупателя</h1>
        <form action="#" @submit.prevent="submit" class="login__form">
            <div class="login__group">
                <label for="email" class="login__label">Email</label>
                <input type="email" name="email" id="email" class="login__input" v-model="form.email" placeholder="Email">
            </div>
            <div class="login__group">
                <label for="password" class="login__label">Пароль</label>
                <input type="password" name="password" id="password" class="login__input" v-model="form.password" placeholder="Пароль">
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
        signIn: 'auth/SIGN_IN'
      }),

      async submit () {
        await this.signIn(this.form);
        this.$router.push('/');
      }
    },
  }
</script>

<style lang="scss" scoped>
    @import "../../sass/login-register";
</style>
