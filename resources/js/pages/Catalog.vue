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
                <h3 class="aside__title">Фильтры</h3>

                <form class="filter">
                    <div class="filter">
                        <div class="filter__content">
                            <div class="filter__items">
                                <div class="filter-item">
                                    <div class="filter-item__head">
                                        <span>Цены</span>
                                    </div>
                                    <div class="filter-item__content">
<!--                                        <Slider-->
<!--                                            v-model="value"-->
<!--                                        />-->
                                    </div>
                                </div>
                                <div class="filter-item">
                                    <div class="filter-item__head">
                                        <span>Масса</span>
                                    </div>
                                    <div class="filter-item__content">
                                        <InputCheck
                                            :label-text="'1кг'"
                                        />
                                        <InputCheck
                                            :label-text="'3кг'"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter__controls">
                            <Button
                                :btn-text="'Применить'"
                                :btn-class="'filter__btn'"
                            />
                        </div>
                    </div>
                </form>

                <h3 class="aside__title">Виды колбасы</h3>
                <ul class="aside__categories">
                    <li
                        class="category__list"
                        v-for="category in categories"
                    >
                        <a :href="category.link" class="category__link">{{ category.name }}</a>
                    </li>
                </ul>
            </aside>

            <main class="catalog__main">
<!--                <h2>Варенная</h2>-->


                <div class="products__flex">
                    <ProductCardComponent
                        v-for="(product, index) in productList"
                        :product="product"
                        :key="index"
                        :title="product.name"
                        :count="product.count"
                        :price="product.price"
                        :imageUrl="product.img ? imageUrl + product.img : 'storage/images/no_photo.png'"
                    />
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Select from "../ui/Select";
import InputCheck from "../ui/InputCheck";
import Button from "../ui/Button";
import Slider from '@vueform/slider'
import PaginatedList from "../ui/PaginatedList";
import ProductCardComponent from "../components/ProductCardComponent";

export default {
    components: {ProductCardComponent, PaginatedList, Button, InputCheck, Select, Slider},

    props: {
        listData: {
            type: Array,
            required: true
        },
        size: {
            type: Number,
            required: false,
            default: 5
        },
    },
    data() {
        return {
            categoriesSort: [
                {id: 1, title: 'по возрастанию цены'},
                {id: 2, title: 'по убыванию цены'},
                {id: 3, title: 'сначала новые'},
                {id: 4, title: 'по названию'},
            ],
            categories: [
                {name: 'Варенная', link: '#'},
                {name: 'Копченная', link: '#'},
                {name: 'Ветчина', link: '#'},
                {name: 'Сосиски', link: '#'}
            ],
            pageNumber: 0,

        }
    },
    computed: {

    },
    methods: {
        //product
        productList() {
            return this.$store.getters.PRODUCTS
        },
        imageUrl() {
            return `storage/images/products/`
        },

        //paginator
        pageCount() {
            let l = this.listData.length
            let s = this.size
            return Math.ceil(l/s)
        },
        paginatedData() {
            const start = this.pageNumber * this.size
            const end = start + this.size
            return this.listData.slice(start, end);
        }
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


.products__flex {
    display: flex;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 3rem;
}
</style>
