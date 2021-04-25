<template>
    <div class="address">
        <h1 class="address__title">Адрес доставки</h1>
        <p>У вас нет не одного заказа</p>
    </div>
</template>

<script>
  export default {
    name: "Address"
  }
</script>

<style lang="scss" scoped>
    .address {
         &__title {
             font-size: 34px;
             font-weight: 700;
             color: #333333;
         }
    }

</style>
