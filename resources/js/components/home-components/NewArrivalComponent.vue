<template>
  <div class="new-arrival">
    <div>
      <Notification
        v-if="messages.length"
        :messages="messages"
      />
      <div class="new-arrival__head">
        <h2 class="new-arrival__title">Новое поступление</h2>
        <div class="new-arrival__arrows">
          <button @click="prevSlide" class="btn-prev" :class="{disabled: isDisabled}"
                  :style="{background: 'url(\'/icons/arrow-left.svg\') 0 0 / 100% no-repeat'}">🠐
          </button>
          <button @click="nextSlide" class="btn-next"
                  :style="{background: 'url(\'/icons/arrow-right.svg\') 0 0 / 100% no-repeat'}">🠒
          </button>
        </div>
      </div>

      <VueSlickCarousel v-bind="newProductsSliderSettings" ref="slider">
        <ProductCardComponent
          v-for="item in newProducts"
          :key="'new-product-' + item.id"
          :product-data="item"
          :image-url="item.img ? imageUrl + item.img : '/images/no_photo.png'"
          @addToCart="addToCart"
        />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import ProductCardComponent from "../ProductCardComponent";
import {mapActions, mapGetters} from "vuex/dist/vuex.mjs";
import Loader from "../../ui/Loader";
import SuccessMessageComponent from "../SuccessMessageComponent";
import Notification from "../../ui/Notification";

export default {
  name: 'NewArrivalComponent',
  components: {Notification, SuccessMessageComponent, Loader, ProductCardComponent},
  data() {
    return {
      newProductsSliderSettings: {
        arrows: false,
        slidesToShow: 4,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              swipeToSlide: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              swipeToSlide: true
            }
          }
        ]
      },
      isDisabled: false,
      loading: true,
      messages: [],
    }
  },
  computed: {
    imageUrl() {
      return `/images/products/`
    },
    ...mapGetters('products', { newProducts: 'PRODUCTS_NEW'}),
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    prevSlide() {
      this.$refs.slider.prev()
    },

    nextSlide() {
      this.$refs.slider.next()
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
      let timeStamp = Date.now().toLocaleString()
      this.messages.unshift(
        {name: 'Товар добавлен в корзину!', id: timeStamp}
      )

    },
  }
}
</script>

<style lang="scss">

.new-arrival {
  margin-bottom: 3rem;
  width: 100%;
  text-align: center;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }


  .btn-prev, .btn-next {
    font-size: 0;
    line-height: 0;

    width: 30px;
    height: 40px;
    padding: 0;
  }

  .btn-prev + .btn-next {
    margin-left: 30px;
  }

  .disabled {
    opacity: .5;
    pointer-events: none;
  }
}


</style>
