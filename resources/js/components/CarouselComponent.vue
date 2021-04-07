<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100"
                     src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp"
                     alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h2>Премиум продукты высокого качества</h2>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100"
                     src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp"
                     alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Премиум продукты высокого качества</h3>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100"
                     src="https://static-sl.insales.ru/r/nlEYOkOZekE/fit/1408/0/ce/1/plain/files/1/2110/14641214/original/slider.jpg@webp"
                     alt="Second slide">
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselComponent'
}
</script>

<style lang="scss" scoped>
.carousel-caption {
    bottom: 50%;
    padding-top: 0;
    padding-bottom: 0;

    & > h2 {
        margin-bottom: 0;
    }
}
</style>
