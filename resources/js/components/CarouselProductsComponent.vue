<template>
    <hooper :settings="hooperSettings">
    <slide v-for="product in products" :key="product.id">
        <div class="product">
            <img class="product__img" style="width: 100%" :src="product.img" alt="product">
            <div class="product__text">
                <h3>{{product.title}}, {{product.count}}</h3>
                <p class="product__price">{{product.price}}</p>
                <button class="product__btn">В корзину</button>
            </div>
        </div>
    </slide>
</hooper>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation} from "hooper";
  import 'hooper/dist/hooper.css';
  export default {
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
          itemsToShow: 4
          // breakpoints: {
          //   2400: {
          //     itemsToShow: 5
          //   },
          //   1800: {
          //     itemsToShow: 4
          //   },
          //   1500: {
          //     itemsToShow: 3
          //   },
          //   1100: {
          //     itemsToShow: 2.5
          //   },
          //   0: {
          //     itemsToShow: 1.5
          //   }
          // }
        },
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
            title: "product5",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 7,
            title: "product5",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },
          {
            id: 8,
            title: "product5",
            img: "https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg",
            price: 1300,
            count: "1 кг"
          },

        ]
      }
    }
  }
</script>

<style type="scss" scoped>
    .product {
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 20px;
        margin: 0 15px;
        border: solid 2px #8e8787;
        max-width: 230px;
        padding-bottom: 8px;
        &__img {
            margin: 13px 6px;
        }

    }
    .hooper {
        height: auto;
        max-height: 367px;
        &-slide {
            width: 230px;
        }
    }
</style>
