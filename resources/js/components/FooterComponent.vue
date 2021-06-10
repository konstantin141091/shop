<template>
  <footer>
    <div class="footer__top">
      <div class="footer__area-menu container">
        <div class="menu__item">
          <div class="menu__title">
            <p>О магазине</p>
            <button>
              <span class="material-icons">keyboard_arrow_down</span>
            </button>
          </div>

          <router-link to="/contacts" class="menu__link">Адреса магазинов</router-link>
          <router-link to="/promotions" class="menu__link">Акции и скидки</router-link>
          <router-link to="/" class="menu__link">Юридическим лицам</router-link>
          <router-link to="/" class="menu__link">Как заказать</router-link>
          <router-link to="/return-policy" class="menu__link">Обмен и возврат</router-link>
        </div>

        <div class="menu__item">
          <div class="menu__title">
            <p>Покупателям</p>
            <button>
              <span class="material-icons">keyboard_arrow_down</span>
            </button>
          </div>

          <router-link to="/account/history" class="menu__link">Личный кабинет</router-link>
          <router-link to="/" class="menu__link">Мои заказы</router-link>
          <!--                    <router-link to="/" class="menu__link">Вопросы и ответы</router-link>-->
          <router-link to="/return-policy" class="menu__link">Политика возврата</router-link>
        </div>

        <div class="menu__item">
          <div class="menu__title">
            <p>Информация</p>
            <button>
              <span class="material-icons">keyboard_arrow_down</span>
            </button>
          </div>

          <router-link to="/offer" class="menu__link">Политика конфиденциальности и оферта</router-link>
          <router-link to="/user-agreement" class="menu__link">Пользовательское соглашение</router-link>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p>&copy;&nbsp;{{ date | date('year') }}&nbsp;Любое использование контента без письменного разрешения
        запрещено</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      date: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.footer {
  &__top {
    margin-top: 3rem;
    background: #f7f7f7;

    @media (min-width: 768px) {

    }
  }

  &__area-menu {
    padding-top: 3rem;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    height: 7rem;
    color: $colorText;
    text-align: center;
    padding: 0 10px;
    font-size: 14px;

    @media (min-width: 768px) {
      height: 5rem;
      font-size: 16px;
    }
  }
}

.menu {
  &__item {
    text-align: left;
    color: $colorText;
  }

  &__title {
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > button {
      background: transparent;

      @media (min-width: 768px) {
        display: none;
      }
    }

  }

  &__link {
    display: block;
    color: $colorText;
    font-size: 1.4rem;

    &:hover {
      color: $colorBtn;
    }
  }

  &__link + &__link {
    margin-top: 1rem;
  }

  &__item + &__item {
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    &__item + &__item {
      margin-left: 6rem;
    }
    &__item + &__item {
      margin-top: 0;
    }
  }
}
</style>
