<template>
    <div>
        <form class="filter">
            <div class="filter">
                <div class="filter__content">
                    <div class="filter__items">
                        <div class="filter-item">
                            <div class="filter-item__head">
                                <span>Цены</span>
                            </div>
                            <div class="filter-item__content">

                            </div>
                        </div>
                        <div class="filter-item">
                            <div class="filter-item__head">
                                <span>Масса</span>
                            </div>
                            <div class="filter-item__content">
<!--                                <InputCheck-->
<!--                                    :label-text="'1кг'"-->
<!--                                />-->
<!--                                <InputCheck-->
<!--                                    :label-text="'3кг'"-->
<!--                                />-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter__controls">
                    <Button
                        :btn-text="'Применить'"
                        :btn-class="'filter__btn'"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FilterComponent',
    props: {

    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    }
}
</script>

<style scoped>

</style>
