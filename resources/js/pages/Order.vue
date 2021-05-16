<template>
    <div class="container order">
        <h1 class="order__title">Заказ №1051</h1>

        <h3 class="order__subtitle">Информация о заказе</h3>

        <div class="order-info">
            <div class="order-row">
                <p class="order-info__title">Дата оформления</p>
                <p class="order-info__value">15.05.2021 12:36</p>
            </div>

            <div class="order-row">
                <p class="order-info__title">Сумма</p>
                <p class="order-info__value">{{ 230 }}&nbsp;руб</p>
            </div>

            <div class="order-row">
                <p class="order-info__title">Способ доставки</p>
                <p class="order-info__value">Самовывоз (На пункте выдачи)</p>
            </div>

            <div class="order-row">
                <p class="order-info__title">Адрес доставки</p>
                <p class="order-info__value">г. Магнитогорск</p>
            </div>

            <div class="order-row">
                <p class="order-info__title">Получатель</p>
                <p class="order-info__value">Name&nbsp;+7(351)022-55-45</p>
            </div>

        </div>

        <h3 class="order__subtitle">Состав заказа</h3>

        <table class="table">
            <tbody>
            <tr class="table-row table-row__head">
                <td class="table-cell table-cell__head">Наименование</td>
                <td class="table-cell table-cell__head">Кол-во</td>
                <td class="table-cell table-cell__head">Стоимость</td>
            </tr>

            <tr class="table-row table-row__body">
                <td class="table-cell table-cell__body" data-title="Наименование">{{'Колбаса варенная'}}</td>
                <td class="table-cell table-cell__body" data-title="Кол-во">{{ 1 }}</td>
                <td class="table-cell table-cell__body" data-title="Стоимость">{{ 79 }}&nbsp;руб</td>
            </tr>

            <tr class="table-row table-row__body">
                <td class="table-cell table-cell__body" data-title="Наименование">{{'Колбаса копченная'}}</td>
                <td class="table-cell table-cell__body" data-title="Кол-во">{{ 1 }}</td>
                <td class="table-cell table-cell__body" data-title="Стоимость">{{ 151 }}&nbsp;руб</td>
            </tr>

            <tr class="table-row table-row__foot">
                <td class="table-cell table-cell__foot" colspan="3">Итого:&nbsp;<strong>{{ 230 }}&nbsp;руб</strong></td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    name: 'Order'
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.order {
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__subtitle {
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
        font-weight: normal;
    }

    &-info {
        padding: 1rem 0 1rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
        font-size: 1.6rem;

        &__title {
            flex: 0 0 160px;
            color: #747474;
        }

        &__value {
            color: $colorText;
        }
    }
}
.order-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0;
}

.table {
    min-width: 100%;
    border-radius: 2px;
    border: 1px solid #cccccc;
    border-collapse: unset;
    border-spacing: 0;

    &-row {
        td:first-child {
            text-align: left;
        }
        td:nth-child(2) {
            text-align: center;
        }
        td:last-child {
            text-align: right;
        }
    }
}



.table-cell {
    text-align: left;
    line-height: 1.2;

    &__head {
        padding: 1rem;
        font-weight: normal;
        border-bottom: 1px solid #cccccc;
        color: #747474;
    }

    &__body {
        padding: 0.5rem 1rem;
        border-bottom: 1px solid #cccccc;
    }
    &__foot {
        padding: 1rem;
        text-align: right;
        border: none;
    }
}

</style>
