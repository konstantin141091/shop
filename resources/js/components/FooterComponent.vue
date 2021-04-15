<template>
    <footer>
        &copy;&nbsp;{{ date | date('year')}}&nbsp;Любое использование контента без письменного разрешения запрещено
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            date: new Date()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

footer {
    background: #f7f7f7;
    height: 5rem;
    color: $colorText;;
    text-align: center;
    line-height: 5rem;
    margin-top: 3rem;
}
</style>
