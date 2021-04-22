<template>
    <div class="form-item">
        <label v-if="label" class="form-label">{{ label }}</label>
        <input
            type="text"
            :name="uniq"
            :id="uniq"
            :placeholder="placeholder"
            :class="{ light: light, 'form-input': !light, 'form-error': error }"
            :maxlength="maxLength"
            :disabled="disabled"
            ref="autocomplete"
        />
        <label v-if="error" class="error-label">{{ error }}</label>
    </div>
</template>

<script>
export default {
    name: 'InputText',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        error: {
            type: [String, Boolean],
            default: "",
        },
        maxLength: {
            type: Number,
            default: 1000
        },
        value: [String, Number],
        placeholder: {
            type: String,
            default: "Placeholder"
        },
        uniq: {
            type: String,
            default: "uniq"
        },
        label: {
            type: String,
            default: ""
        },
        required: {
            type: Boolean,
            default: false
        },
        light: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../sass/variables";


</style>
