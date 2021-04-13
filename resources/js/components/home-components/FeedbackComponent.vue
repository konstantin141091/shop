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
                    <InputCheck
                        :labelText="'Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *'"
                        :labelClass="'agree__label'"
                    />
                    <div class="feedback__field-error"></div>
                </div>

                <!--                <input type="hidden" value="Форма обратной связи" name="subject">-->

                <div class="feedback__submit">
                    <Button
                        :btnText="'Отправить'"
                        :btn-class="'feedback__btn'"
                    />
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import InputCheck from "../../ui/InputCheck";
import Button from "../../ui/Button";

export default {
    components: {Button, InputCheck}
}
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
        resize: none;
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
    height: 50px;
}

.agree__label {

}
</style>
