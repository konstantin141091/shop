<template>
  <div class="promo-slider">
    <VueSlickCarousel :settings="settings">
      <div class="img-wrapper"><img src="http://dummyimage.com/1200x450/99cccc.gif&text=Первый+слайд!" alt=""/></div>
      <div class="img-wrapper"><img src="http://dummyimage.com/1200x450/99ccee.gif&text=Второй+слайд!" alt=""/></div>
      <div class="img-wrapper"><img src="http://dummyimage.com/1200x450/99cc99.gif&text=Третий+слайд!" alt=""/></div>
    </VueSlickCarousel>
  </div>
</template>

<script>

export default {
  name: 'PromoComponent',
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
      },
    }
  }
}
</script>

<style lang="scss">
.promo-slider {
  margin-bottom: 3rem;
  width: 100%;
  height: 100%;
}

.img-wrapper {
  img {
    object-fit: cover;
    max-width: none;
    max-height: none;
    width: 100%;
    height: 100%;
  }
}

</style>
