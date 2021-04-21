<template>
    <form action="#" @submit.prevent="submit">
        <div>
            <label for="email">Email адресс</label>
            <input type="text" name="email" id="email" v-model="form.email">
        </div>
        <div>
            <label for="password">Пароль</label>
            <input type="text" name="password" id="password" v-model="form.password">
        </div>
        <div>
            <button type="submit">
                Войти
            </button>
        </div>
    </form>

</template>

<script>
  import axios from 'axios'
  import { mapActions } from 'vuex'

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

        this.$router.replace({ name: 'home' })
      }
    }
  }
</script>

<style scoped>

</style>
