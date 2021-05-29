@component('mail::message')
# Оформлен новый заказ.

Письмо из нашей spa. Башкирские колбасы.
Оформлен новый заказ. Смотри его, клиент не хочет ждать.
Камиль, привет!

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
