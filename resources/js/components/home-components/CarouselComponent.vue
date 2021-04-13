<template>
    <hooper :progress="true" :autoPlay="true" :playSpeed="8000" :wheelControl="false" style="height: auto; outline: none">
        <slide style="width: 100%">
            <!--            в url картинку для слайдера-->
            <div class="slider__container">
                <img class="slider__img" src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp" alt="">
                <div class="slider__text">
                    <p>slider text/ About</p>
                </div>
            </div>
        </slide>
        <slide style="width: 100%">
            <div class="slider__container">
                <img class="slider__img" src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp" alt="">
                <div class="slider__text">
                    <p>slider text/ About</p>
                </div>
            </div>
        </slide>
        <slide style="width: 100%">
            <div class="slider__container">
                <img class="slider__img" src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp" alt="">
                <div class="slider__text">
                    <p>slider text/ About</p>
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
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation} from "hooper";
  import 'hooper/dist/hooper.css';
  export default {
    name: 'CarouselComponent',
    components: {
      Hooper,
      Slide,
      HooperNavigation
    }
  }
</script>

<style lang="scss" scoped>

.slider {
    &__container {
        height: 100%;
        max-height: 420px;
        position: relative;
    }
    &__img {
        width: 100%;
        height: auto;
    }
    &__text {
        position: absolute;
        top: 50%;
        width: 100%;
        text-align: center;
        & p {
            font-size: 3rem;
            color: #ffffff;
            margin: 0;
        }
    }
    .svg {
        width: 46px;
        height: 46px;
    }
}

    @media screen and (max-width: 767px) {
        .slider {
            &__text {

                & p {
                    font-size: 18px;
                    padding: 10px 3.5rem;
                }
            }
        }
    }


</style>
