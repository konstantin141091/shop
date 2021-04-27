<template>
    <div class="container">
        <h1 class="login__title">Регистрация</h1>
        <form action="#" @submit.prevent="submit" class="login__form">
            <div class="login__group">
                <label for="name" class="login__label">Имя</label>
                <input type="text" name="name" id="name" class="login__input" v-model="form.name" placeholder="Имя">
            </div>
            <div class="login__group">
                <label for="email" class="login__label">Email</label>
                <input type="email" name="name" id="email" class="login__input" v-model="form.email" placeholder="Email">
            </div>
            <div class="login__group login__group-phone">
                <label for="phone" class="login__label">Телефон</label>
                <span class="login-phone-7">+7</span>
                <input type="tel" name="phone" id="phone" class="login__input login__input-phone" v-model.number="form.phone" placeholder="9225663344">
            </div>
            <div class="login__group">
                <label for="password" class="login__label">Пароль</label>
                <input type="password" name="password" id="password" class="login__input" v-model="form.password" placeholder="Пароль">
            </div>
            <div class="login__group">
                <label for="password-confirm" class="login__label">Повторите пароль</label>
                <input type="password" name="password_confirmation" id="password-confirm" class="login__input" v-model="form.password_confirmation" placeholder="Повторите пароль">
            </div>
            <div class="login__btns">
                <button type="submit" class="login__button">
                    Зарегестрироваться
                </button>
                <router-link to="/login" class="login__href">У меня уже есть аккаунт</router-link>
            </div>
        </form>
    </div>
</template>

<script>
  // TODO нужно добавить обработку случая если регистрация не прошла успешно, валидация
  // TODO продублировал стили из Login.vue Нужно их объеденить
  import { mapActions } from 'vuex'
  export default {
    name: "Register",
    data () {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          phone: null,
        }
      }
    },

    methods: {
      ...mapActions({
        register: 'auth/REGISTER'
      }),

      async submit () {
        console.log(this.form);
        await this.register(this.form);
        this.$router.push('/');
      }
    },
  }
</script>

<style lang="scss" scoped>
    @import "../../sass/login-register";
</style>
