<template>
    <div class="alert-msg-error">
        <p>{{ this.message }}</p>
    </div>
</template>

<script>
  export default {
    name: "ErrorMessageComponent",
    props: {
      message: {
        type: String,
        required: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
    .alert-msg-error {
        width: 100%;
        background-color: #dc7362;
        padding: 10px;
    }
</style>
