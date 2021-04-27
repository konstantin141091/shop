<template>
    <div class="profile">
        <h1 class="profile__title">Данные профиля</h1>
        <form action="#" @submit.prevent="submit" class="login__form">
            <div class="login__group">
                <label for="name" class="login__label">Имя</label>
                <input type="text" name="name" id="name" class="login__input" v-model="form.name" placeholder="Имя">
            </div>
            <div class="login__group">
                <label for="email" class="login__label">Email</label>
                <input type="email" name="email" id="email" class="login__input" v-model="form.email" placeholder="Email">
            </div>
            <div class="login__group login__group-phone">
                <label for="phone" class="login__label">Телефон</label>
                <span class="login-phone-7">+7</span>
                <input type="tel" name="phone" id="phone" class="login__input login__input-phone" v-model.number="form.phone" placeholder="9225663344">
            </div>

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
          name: '',
          email: '',
          phone: null,
          oldPassword: '',
          newPassword: '',
          password_confirmation: '',
        }
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
        edit: 'auth/EDIT'
      }),

      async submit () {
        await this.edit(this.form);
        // this.$router.push('/');
      }
    },
    created() {
      this.form.name = this.user.name;
      this.form.email = this.user.email;
      this.form.phone = this.user.phone;
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../../sass/login-register";
    .profile {
        width: 100%;
        &__title {
            font-size: 34px;
            font-weight: 700;
            color: #333333;
        }
    }

</style>
