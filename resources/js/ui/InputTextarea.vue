<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <textarea
      :name="uniq"
      :id="uniq"
      :placeholder="placeholder"
      :class="[{
        light: light,
        'form-textarea form-input': !light,
        resize: !resize,
        'form-error': error,
      },classTextArea]"
    ></textarea>
  <label v-if="error" class="error-label">{{ error }}</label>
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
      default: "Placeholder"
    },
    error: {
      type: String,
      default: ""
    },
    uniq: {
      type: String,
      default: "uniq"
    },
    label: {
      type: String,
      default: ""
    },
    light: {
      type: Boolean,
      default: false
    },
    resize: {
      type: Boolean,
      default: true
    },
    classTextArea:{
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
