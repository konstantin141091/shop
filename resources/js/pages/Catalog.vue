<template>
    <div class="container">
        <div class="catalog__top">
            <h1 class="catalog__title">Каталог</h1>
            <div class="catalog__select">
                <select class="select-css">
                    <option>Сортировка</option>
                    <option>по возрастанию цены</option>
                    <option>по убыванию цены</option>
                    <option>сначала новые</option>
                    <option>по названию</option>
                </select>
            </div>
        </div>

        <div class="flex-box">
            <aside class="catalog__aside aside">
                <h2 class="aside__title">Виды колбасы</h2>
                <ul class="aside__catalogs">
                    <li class="catalog__item"><a href="#">Варенная</a></li>
                    <li class="catalog__item"><a href="#">Копченная</a></li>
                    <li class="catalog__item"><a href="#">Ветчина</a></li>
                    <li class="catalog__item"><a href="#">Сосиски</a></li>
                </ul>
            </aside>
            <main class="catalog__main">
                <h2>Варенная</h2>
                <div>

                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Select from "../ui/Select";

export default {
    components: {Select},
    data() {
        return {
            categoriesSort: [
                {id: 1, title: 'по возрастанию цены'},
                {id: 2, title: 'по убыванию цены'},
                {id: 3, title: 'сначала новые'},
                {id: 4, title: 'по названию'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.catalog {
    &__top {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    &__title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 3rem;
    }
}

.select-css {
    display: block;
    font-size: 16px;
    color: $colorText;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    margin: 0;
    border: 1px solid $grey;
    border-radius: 5px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
/*    background-image: url('../storage/icons/arrow-down.svg');*/
    background-repeat: no-repeat;
}

.flex-box {
    display: flex;
}

.catalog__aside {
    width: 200px;
    border: 1px solid green;
    padding: 10px;
}

.catalog__main {
    width: 100%;
    border: 1px solid red;
    padding: 10px;
}
</style>
