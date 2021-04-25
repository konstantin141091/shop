<template>
    <div class="profile">
        <h1 class="profile__title">Данные профиля</h1>
        <p>У вас нет не одного заказа</p>
    </div>
</template>
<script>
  export default {
    name: "Profile"
  }
</script>

<style lang="scss" scoped>
    .profile {
        &__title {
            font-size: 34px;
            font-weight: 700;
            color: #333333;
        }
    }

</style>
