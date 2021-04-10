<template>
    <hooper :settings="hooperSettings">
    <slide>
        <div class="product">
            <img src="https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg" alt="">
            <h3>product</h3>
        </div>
    </slide>
    <slide>
        <div class="product">
            <img src="https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg" alt="">
            <h3>product</h3>
        </div>
    </slide>
    <slide>
        <div class="product">
            <img src="https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg" alt="">
            <h3>product</h3>
        </div>
    </slide>
    <slide>
        <div class="product">
            <img src="https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg" alt="">
            <h3>product</h3>
        </div>
    </slide>
    <slide>
        <div class="product">
            <img src="https://static-sl.insales.ru/r/OhtYntwQrDA/fit/440/0/ce/1/plain/images/products/1/3146/379440202/large_Авокадо.jpg" alt="">
            <h3>product</h3>
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
          breakpoints: {
            2400: {
              itemsToShow: 5
            },
            1800: {
              itemsToShow: 4
            },
            1500: {
              itemsToShow: 3
            },
            1100: {
              itemsToShow: 2.5
            },
            0: {
              itemsToShow: 1.5
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
    .product {
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        margin: 0 15px;
        border: solid 2px #8e8787;
    }
    .img1 {
        background: salmon;
    }
    .img2 {
        background: lightblue;
    }
    .img3 {
        background: coral;
    }
    .img4 {
        background: lightgreen;
    }
    .img5 {
        background: pink;
    }
    h2 {
        color: #fff
    }
    .hooper {
        height: 100vh;
    }
</style>
