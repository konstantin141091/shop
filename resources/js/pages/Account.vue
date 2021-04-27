<template>
    <div class="container account">
        <nav class="account__menu">
            <ul>
                <li class="account__li"><router-link to="/account/history" class="account__link">История заказов</router-link></li>
                <li class="account__li"><router-link to="/account/address" class="account__link">Адрес доставки</router-link></li>
                <li class="account__li"><router-link to="/account/profile" class="account__link">Мои данные</router-link></li>
                <li class="account__li"><a href="#" @click.prevent="signOut" class="account__link">Выйти</a></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex/dist/vuex.mjs";
  export default {
    name: "Account",

    computed: {
      isAuth() {
        return this.$store.getters.authenticated;
      },
      ...mapGetters({
        authenticated: 'auth/authenticated',
      })
    },

    methods: {
      ...mapActions({
        signOutAction: 'auth/signOut'
      }),

      async signOut () {
        await this.signOutAction();

        this.$router.push('/');
      }
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.push('/login');
      }
    }
  }
</script>

<style lang="scss" scoped>
    .account{
        margin-top: 20px;
        display: flex;
        &__menu {
            margin-right: 40px;
            & ul {
                display: flex;
                flex-direction: column;
            }
        }
        &__li {
            margin-bottom: 15px;
        }
        &__li:last-child {
            margin-bottom: 0;
        }
        &__link {
            color: #1f7d63;
            font-size: 18px;
            font-weight: 400;
            text-decoration: underline;
        }
        &__link:hover {
            text-decoration: none;
        }
    }

</style>
