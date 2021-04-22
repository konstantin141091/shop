<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
        type="email"
        :name="uniq"
        :id="uniq"
        :placeholder="placeholder"
        :class="{'form-error': error}"
        class="form-input"
    >
      <label v-if="error" class="error-label">{{ error }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Email'
    },
    uniq: {
      type: String,
      default: 'uniq'
    },
      error: {
          type: String,
          default: ""
      },
  },

  computed: {

  }
}
</script>

<style>

</style>
