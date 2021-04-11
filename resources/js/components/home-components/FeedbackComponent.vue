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


                <div class="feedback__field-area agree">
                    <label class="agree__checkbox">
                        <input name="agree" type="checkbox" value="" autocomplete="off" class="agree__field">
                        <span class="agree__content">
                        <span class="agree__btn icon-check"></span>
                        <span class="agree__label">
                          Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *
                        </span>
            </span>
                    </label>
                    <div data-feedback-form-field-error="" class="feedback__field-error"></div>
                </div>


                <input type="hidden" value="Форма обратной связи" data-feedback-form-field="" name="subject">

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

    & > textarea {
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

.form-control {
    padding: 6px 10px;
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
        background: rgba(182,51,52, .9);
    }
}
</style>
