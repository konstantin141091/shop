<template>
    <section class="feedback">
        <h2 class="feedback__title">Обратная связь</h2>

        <form method="post" class="feedback__form">

            <div class="feedback__fields">
                <div class="feedback__field feedback__inputs">
                    <div class="feedback__name feedback__input">
                        <input name="name"
                               type="text" placeholder="Имя*"
                               class="form-control">
                        <div class="feedback__error"></div>
                    </div>
                    <div class="feedback__mail feedback__input">
                        <input name="email"
                               type="text" placeholder="Ваша почта*"
                               class="form-control">
                        <div class="feedback__error"></div>
                    </div>
                </div>

                <div class="feedback__field feedback__text">
                    <textarea name="content"
                              placeholder="Ваш вопрос, отзыв или пожелание*"
                              class="form-control"></textarea>
                    <div class="feedback__error"></div>
                </div>


                <div class="feedback__field agree">
                    <label class="agree__checkbox">
                        <input type="checkbox" checked="checked">
                        <span class="checkmark"></span>
                        <span class="agree__label">
                              Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *
                        </span>
                    </label>
                    <div class="feedback__field-error"></div>
                </div>

                <!--                <input type="hidden" value="Форма обратной связи" name="subject">-->

                <div class="feedback__submit">
                    <button class="button feedback__btn" type="submit">Отправить</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";

.feedback {
    padding-bottom: 3rem;
    text-align: center;
    max-width: 680px;
    margin: 0 auto;

    &__title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 3rem;
    }
}

.feedback__field {
    margin-bottom: 2rem;
    text-align: left;
    position: relative;

    & input, textarea {
        background: #f7f7f7;
        width: 100%;
        border-radius: 5px;
        font-size: 16px;
        padding: 6px 10px;
    }

    & textarea {
        height: 115px;
    }
}

.feedback__inputs {
    display: flex;
    column-gap: 2rem;
}

.feedback__input {
    min-width: 250px;
    flex-grow: 1;

}

.feedback__btn {
    min-width: 250px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    max-width: 100%;
    font-weight: bold;
    font-size: 2rem;
    line-height: 1;
    color: #ffffff;
    border-radius: 10px;
    white-space: nowrap;
    background: #b63334;
    outline: none;
    transition: all .3s;

    &:hover {
        background: rgba(182, 51, 52, .9);
    }
}

.agree__checkbox {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

}

.agree__checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2.5rem;
    width: 2.5rem;
    border: 1px solid $grey;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}

.agree__checkbox:hover input ~ .checkmark {

}

.agree__checkbox input:checked ~ .checkmark {


}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.agree__checkbox input:checked ~ .checkmark:after {
    display: block;
}

.agree__checkbox .checkmark:after {
    left: 9px;
    top: 5px;
    width: 6px;
    height: 12px;
    border: solid $colorBtn;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
