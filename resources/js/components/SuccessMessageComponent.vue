<template>
    <div class="alert-msg">
        <p>{{ this.message }}</p>
    </div>
</template>

<script>
  export default {
    name: "SuccessMessageComponent",
    props: {
      message: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
    .alert-msg {
        width: 100%;
        background-color: #dff0d8;
        padding: 10px;
    }
</style>
