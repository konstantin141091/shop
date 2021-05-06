<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <textarea
      :name="uniq"
      :id="uniq"
      :placeholder="placeholder"
      :class="[{
        resize: !resize,
        'form-error': error,
      }, classTextarea]"
      class="form-textarea form-input"
    ></textarea>
  <small v-if="error" class="error-label">{{ error }}</small>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    uniq: {
      type: String,
    },
    label: {
      type: String,
      default: ""
    },
    resize: {
      type: Boolean,
      default: true
    },
    classTextarea:{
      type: String,
      default: ""
    }
  },

  computed: {

  }
};
</script>
<style lang="scss" scoped>
@import "resources/sass/variables";
.light {
  background: #ffffff;
  border: 0.5px solid #979797;
  box-sizing: border-box;
  border-radius: 4px;
 // height: 210px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  &::placeholder {
    color: $grey;
  }
}

.resize {
  resize: none;
}
</style>
