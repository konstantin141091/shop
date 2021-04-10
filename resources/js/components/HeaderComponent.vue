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
                    <img src="storage/images/markom_logo.svg" alt="Logo">
                </router-link>
            </div>
            <div class="header__search">
                <form class="header__search-form">
                    <input type="text" class="header__search-input" placeholder="Поиск">
                    <button class="header__search-btn">
                        <img src="storage/icons/search_white.svg" alt="найти">
                    </button>
                </form>
            </div>
            <div class="header__controls">
                <router-link to="/">
                    <img src="storage/icons/person_black.svg" alt="Аккаунт">
                </router-link>
                <router-link to="/">
                    <span class="header__cart">
                        <img src="storage/icons/shopping_cart_black.svg" alt="Аккаунт">
                        <span class="header__cart-badge">15</span>
                    </span>
                    <span class="header__cart-text">0&nbsp;руб</span>
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

ul, p {
    margin: 0
}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}

.header__top {
    display: flex;
    justify-content: space-between;
    padding: 5px 40px;
    background: #f7f7f7;
}

.header__navbar {
    overflow: hidden;
    margin-right: 15px;
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

.header__work-time {
    max-width: 250px;
    overflow: hidden;
    white-space: nowrap;
    color: #999999;
}

.header__phone-value {
    color: #333333;
    white-space: nowrap;
}

.header__bottom {
    display: flex;
    align-items: center;
    padding: 15px 40px;
}

.header__logo {
    margin-right: 50px;
}

.header__search {
    margin: 0 24px;
    flex-grow: 1;

    &-form {
        display: flex;
        height: 50px;
    }

    &-input {
        border-radius: 15px 0 0 15px;
        border-right: none;
        min-width: 150px;
        width: 100%;
        height: 50px;
        padding: 0 10px;
        outline: none;
        border: 1px solid #808080;

        &:focus {
            outline: none;
        }
    }

    &-btn {
        border-radius: 0 15px 15px 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        line-height: 1;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        background: #1f7d63;
        outline: none;
        padding: 0 15px;

        & > img {
            height: 40px;
        }
    }
}

.header__controls {
    display: flex;
    grid-column-gap: 20px;
}

.header__cart {
    position: relative;
    margin-right: 10px;

    &-badge {
        position: absolute;
        min-width: 1.6rem;
        height: 1.6rem;
        padding: 0 3px;
        line-height: 1.6rem;
        font-size: 1.1rem;
        color: #ffffff;
        font-weight: 700;
        text-align: center;
        border-radius: 50%;
        top: -10px;
        right: 0;
        background-color: #ff4100;
    }
    &-text {
        color: #1f7d63;
        font-size: 18px;
    }
}


</style>
