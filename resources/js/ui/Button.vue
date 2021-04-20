<template>
    <button
        :class="[ 'button', btnClass ]"
        :type="btnType"
        @click="click"
    >
        {{ btnText }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        btnText: {
            type: String,
            default: 'Кнопка'
        },
        btnClass: {
            type: String,
        },
        btnType: {
            type: String,
            default: 'submit',
        }
    },
    methods: {
        click(data) {
            this.$emit('event', data)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.button {
    min-width: 250px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    font-size: 2rem;
    line-height: 1;
    color: #ffffff;
    border-radius: 5px;
    white-space: nowrap;
    background: $colorBtn;
    outline: none;
    transition: all .3s;

    &:hover {
        background: lighten($colorBtn, .9);
    }
}

</style>
