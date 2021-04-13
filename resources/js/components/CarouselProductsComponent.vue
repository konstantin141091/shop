<template>
<section class="container">
    <h2 class="title">{{ title }}</h2>
    <hooper :settings="hooperSettings">
<!--        TODO вынести slide в отдельный компонент-->
        <slide v-for="product in products" :key="product.id">
            <div class="product">
                <img class="product__img" style="width: 100%" :src="product.img" alt="product">

                <div class="product__text">
                    <a class="product__title" href="#">{{product.title}}, {{product.count}}</a>
                    <p class="product__price">{{product.price}}</p>
                </div>
                <div class="product__btn">
                    <button>В корзину</button>
                </div>
            </div>
        </slide>
        <hooper-navigation slot="hooper-addons">
            <svg slot="hooper-prev" class="icon icon-arrowLeft" viewBox="0 0 24 24" width="50px" height="50px">
                <title>Arrow Left</title>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
            </svg>

            <svg slot="hooper-next" class="icon icon-arrowRight" viewBox="0 0 24 24" width="50px" height="50px">
                <title>Arrow Right</title>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
        </hooper-navigation>
    </hooper>
</section>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation} from "hooper";
  import 'hooper/dist/hooper.css';
  export default {
    // TODO описать пропсы, добавить возможные значения flag (акция, новинки, рекомендованые)
    props: {
      title: {
        type: String,
        required: true,
      },
      flag: {
        type: String,
        // required: true раскоментировать когда продукты будем брать из апи
      }
    },
    name: "CarouselProductsComponent",
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    data() {
      return {
        hooperSettings: {
          infiniteScroll: true,
          centerMode: true,
          autoPlay: false,
          playSpeed: 3500,
          wheelControl: false,
          breakpoints: {
            1400: {
              itemsToShow: 6
            },
            1100: {
              itemsToShow: 5
            },

            720: {
              itemsToShow: 4
            },
            550: {
              itemsToShow: 3
            },
            0: {
              itemsToShow: 2
            }
          }
        },
        // убрать products когда будет апи
        products: [
          {
            id: 1,
            title: "product",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 2,
            title: "product2",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 3,
            title: "product3",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 4,
            title: "product4",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 5,
            title: "product5",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 6,
            title: "product6",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 7,
            title: "product7",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 8,
            title: "product8",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 9,
            title: "product9",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },

        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
    /*TODO импортировать scss переменные глобально*/
    @import "../../sass/variables";
    .product {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        margin: 0 15px;
        border: solid 2px #8e8787;
        max-width: 230px;
        padding: 6px 5px 8px 5px;
        &__text {
            display: flex;
            flex-direction: column;
            padding: 0 0 5px 10px;
        }
        &__title {
            font-size: 16px;
            margin: 0;
        }
        &__price {
            font-size: 28px;
            font-weight: 600;
        }
        &__btn button {
            border: solid 1px #eeeeee;
            font-size: 16px;
            cursor: pointer;
            color: #ffffff;
            background-color: $colorBtn;
            width: 100%;
            padding: 10px 0;
            border-radius: 10px;
        }

    }
    .hooper {
        height: auto;
        max-height: 367px;
        &-slide {
            width: 230px;
        }
    }
    .title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }
    .container {
        margin: 20px 0;
    }
</style>
