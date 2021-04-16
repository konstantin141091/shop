<template>
    <div class="container">
        <div class="catalog__top">
            <h1 class="catalog__title">Каталог</h1>
            <div class="catalog__select">
                <select
                    class="select"
                    v-model="sortType"
                    @click="sortItem()"
                >
                    <option value="name">По названию</option>
                    <option value="min_price">По возрастанию цены</option>
                    <option value="max_price">По убыванию цены</option>
                    <option value="new-products">Сначала новые</option>

                </select>
            </div>
        </div>

        <div class="flex-box">
            <aside class="catalog__aside aside">
                <h3 class="aside__title">Фильтры</h3>
                    <FilterComponent />
                <h3 class="aside__title">Виды колбасы</h3>
                <ul class="aside__categories">
                    <li
                        class="category__list"
                        v-for="category in categoryList"
                    >
                       {{ category.name }}
                    </li>
                </ul>
            </aside>

            <main class="catalog__main">
                <!--                <h2>Варенная</h2>-->

                <PaginationCatalog
                    :catalogData="productList"
                />

            </main>
        </div>
    </div>
</template>

<script>
import Select from "../ui/Select";
import InputCheck from "../ui/InputCheck";
import Button from "../ui/Button";
import ProductCardComponent from "../components/ProductCardComponent";
import PaginationCatalog from "../components/catalog-components/PaginationCatalog";
import FilterComponent from "../components/catalog-components/FiltersComponent";

export default {
    components: {FilterComponent, PaginationCatalog, ProductCardComponent, Button, InputCheck, Select},
    props: {

    },
    data() {
        return {
            categoriesSort: [
                {id: 1, title: 'по возрастанию цены'},
                {id: 2, title: 'по убыванию цены'},
                {id: 3, title: 'сначала новые'},
                {id: 4, title: 'по названию'},
            ],
            sortedProducts: [],
            pageNumber: 0,
            sortType: 'name',
        }
    },
    computed: {
        productList() {
            return this.$store.getters.PRODUCTS
        },
        categoryList() {
            return this.$store.getters.CATEGORIES
        },

    },
    methods: {
        sortItem() {
            if (this.sortType === 'name') {
                this.productList.sort((a,b) => {a.name.localeCompare(b.name)})
            }
            if (this.sortType === 'min_price') {
                this.productList.sort((a,b) => a.price - b.price)
            }
            if (this.sortType === 'max_price') {
                this.productList.sort((a,b) => b.price - a.price)
            }
        },
        sortByCategories(category) {
            this.sortedProducts = []
            this.productList.map(item => {
                if(item.category === category.name) {
                    this.sortedProducts.push(item)
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

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

.select {
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
    width: 300px;
    padding: 10px;
}

.aside__title {
    font-size: 20px;
    margin-bottom: 1.5rem;
}

.category {
    &__list {
        border-bottom: 1px solid $greyLight;
        text-transform: capitalize;
        display: block;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: $colorText;
        font-family: "Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji";
        cursor: pointer;

        &:hover {
            color: $colorBtn;
        }
    }

    &__link {
        display: block;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: $colorText;
        font-family: "Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji";

        &:hover {
            color: $colorBtn;
        }
    }
}

.catalog__main {
    width: 100%;
    padding: 10px;
}

.filter {
    margin-bottom: 3rem;

    &__content {
        margin-bottom: 1.5rem;
    }

    &__btn {
        height: 40px;
    }
}

</style>
