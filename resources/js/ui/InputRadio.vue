<template>
  <div class="form-item">
    <input
      type="radio"
      class="form-radio"
      :name="name"
      :id="uniq"
      :value="val"
      @change="change"
      v-model="modelInput"
    />
    <label
      class="form-radio-label"
      :class="labelclass"
      v-if="label"
      :for="uniq"
    >
      <span v-if="!isButton"></span>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number, Object, Array, Boolean],
    val: [String, Number, Object, Boolean],
    name: {
      type: String,
      default: "uniq",
    },
    uniq: {
      type: String,
      default: "uniq",
    },
    label: {
      type: String,
      default: "",
    },
    labelclass: {
      type: String,
      default: "",
    },
    isButton: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    modelInput: {

    },
  },
  methods: {
    change(e) {
      // console.log(e.target.value);
      this.$emit("radioChange", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

</style>
