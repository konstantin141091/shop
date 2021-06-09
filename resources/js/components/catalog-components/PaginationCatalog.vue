<template>
  <div>
    <Notification
      :messages="messageAddProduct"
    />

    <div class="catalog">
      <ProductCardComponent
        v-for="item in paginatedData"
        :key="item.id"
        :imageUrl="item.img ? `/images/products/` + item.img : '/images/no_photo.png'"
        :product-data="item"
        @addToCart="addToCart(item)"
      />
    </div>

    <Paginate
      v-if="catalogData.length > elementsPerPage"
      :page-count="pageCount"
      :click-handler="pageChangeHandler"
      :prev-text="'Предыдущая'"
      :next-text="'Следующая'"
      :container-class="'pagination'"
      :page-link-class="'page'"
      :prev-link-class="'pagination__btn__prev'"
      :next-link-class="'pagination__btn__next'"
      v-model="page"
    />
  </div>
</template>

<script>
import ProductCardComponent from "../ProductCardComponent";
import {mapActions} from "vuex/dist/vuex.mjs";
import SuccessMessageComponent from "../SuccessMessageComponent";
import Notification from "../../ui/Notification";

export default {
  name: 'PaginationCatalog',
  components: {Notification, SuccessMessageComponent, ProductCardComponent},
  props: {
    catalogData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      elementsPerPage: 9,
      items: [],
      messageAddProduct: [],
      page: 1
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.catalogData.length / this.elementsPerPage)
    },
    paginatedData() {
      this.page = Math.min(this.pageCount, this.page)
      const start = (this.page - 1) * this.elementsPerPage
      const end = this.page * this.elementsPerPage
      return this.catalogData.slice(start, end)
    } //this.$route.query.page
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    pageChangeHandler(page) {
      this.page = page
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
      let timeStamp = Date.now().toLocaleString()
      this.messageAddProduct.unshift(
        {name: 'Товар добавлен в корзину!', id: timeStamp}
      )
    },
  }
}
</script>

<style lang="scss">
@import "resources/sass/variables";

.catalog {
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
  row-gap: 3rem;
}

.pagination {
  display: flex;
  align-items: center;
  margin-top: 3rem;

  .page {
    display: block;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: $colorText;
    border-radius: 5px;

    &:hover {
      background-color: lighten($colorBtn, 10%);
      cursor: pointer;
      color: #ffffff;
    }

    &__box {
      margin-left: 3rem;
      margin-right: 3rem;
      display: flex;
      align-items: center;
    }
  }

  .active {
    a {
      background-color: $colorBtn;
      color: #ffffff !important;
    }
  }

  .disabled {
    & > .pagination__btn {
      &__prev, &__next {
        color: $grey !important;
        border-color: transparent;
        background: $greyLight;
        cursor: context-menu;
      }
    }
  }

  .page + .page {
    margin-left: 5px;
  }
}

.pagination__btn {
  &__prev, &__next {
    background: $greyLight;
    color: $colorBtn;
    padding: 12px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid transparent;
    font-weight: bold;

    &:hover {
      border: 1px solid $colorBtn;
    }

    &:active {
      background: lighten($greyLight, 10%);
    }
  }

  &__prev {
    margin-right: 3rem;
  }

  &__next {
    margin-left: 3rem;
  }
}

</style>
