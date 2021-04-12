<template>
    <div>
        <div class="catalog__top">
            <h1>Каталог</h1>

        </div>
    </div>
</template>

<script>
import Select from "../ui/Select";
export default {
    components: {Select},
    data() {
        return {
            categoriesSort: [
                {id: 1, title: 'по возрастанию цены'},
                {id: 2, title: 'по убыванию цены'},
                {id: 3, title: 'сначала новые'},
                {id: 4, title: 'по названию'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
