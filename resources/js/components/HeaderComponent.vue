<template>
    <header class="header">
        <div class="header__top">
            <nav class="header__navbar">
                <ul class="header__menu">
                    <li class="menu__item">
                        <router-link to="/" class="menu__link">Каталог</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/about" class="menu__link">О компании</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/admin" class="menu__link">Контакты</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/admin" class="menu__link">Доставка</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/admin" class="menu__link">Оплата</router-link>
                    </li>
                    <li class="menu__item">
                        <router-link to="/admin" class="menu__link">Личный кабинет</router-link>
                    </li>
                </ul>
            </nav>
            <p class="header__work-time">Доставка с 8:00 до 18:00</p>
            <div class="header__phone">
                <a class="header__phone-value" href="tel:+78008008080">+7(3519)46-66-11</a>
            </div>
        </div>

        <div class="header__bottom">
            <div class="header__logo">
                <router-link to="/" class="navbar-brand">
                    <img src="" alt="Logo">
                </router-link>
            </div>
            <div class="header__catalog">
                <button class="header__btn btn btn-info">
                    Каталог
                </button>
            </div>
            <div class="header__search">
                <form>
                    <label for="headerSearch">
                        <input type="text" class="form-control header__search" id="headerSearch">
                    </label>
                    <button class="btn btn-info">Поиск</button>
                </form>
            </div>
            <div class="header__controls">
                <router-link to="/">
                    <span class="icon icon-user"></span>
                </router-link>
                <router-link to="/">
                    <span class="icon icon-compare">
                <span class="header__control-bage">0</span>
              </span>
                </router-link>
                <router-link to="/">
                    <span class="icon icon-cart">
              <span class="header__control-bage" data-cart-positions-count="">0</span>
            </span>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
ul, p {margin: 0}

.header {

}
.header__top {
    display: flex;
    justify-content: space-between;
    padding: 5px 40px;
    background: #f7f7f7;
}

.header__menu {
    list-style-type: none;
    display: flex;
    grid-column-gap: 15px;

    & .menu__link {
        color: #333333;
        white-space: nowrap;
        text-decoration: none;

        &:hover {
            color: #1f7d63;
        }
    }
}
.header__navbar {
    overflow: hidden;
}

.header__work-time {
    max-width: 250px;
    overflow: hidden;
    white-space: nowrap;
    color: #999999;
}
.header__phone {

    &-value {
        color: #333333;
    }
}
</style>
