<template>
    <div class="form-item">
        <div class="form-item__password">
            <label v-if="label" :for="uniq" class="form-label">{{ label }}</label>
            <input
                type="password"
                :name="uniq"
                :id="uniq"
                :placeholder="placeholder"
                class="form-input"
                :class="{'form-error': error}"
                autocomplete="new-password"
                v-model="modelInput"
            >
            <label v-if="error" class="error-label">{{ error }}</label>
        </div>

        <div v-if="isRepass" class="form-item__repass">
            <label class="form-label">{{ label }}</label>
            <input
                type="password"
                :name="'re'+uniq"
                :id="'re'+uniq"
                :placeholder="placeholder"
                class="form-input"
                :class="{'form-error': error}"
                autocomplete="new-password"
                v-model="repass"
            >
            <label v-if="error" class="error-label">{{ error }}</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isRepass: {
            type: Boolean,
            default: false
        },
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
            default: ''
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
    data: () => ({
        repass: ''
    }),
    computed: {
        modelInput: {

        },
    }
}
</script>

<style>

</style>
