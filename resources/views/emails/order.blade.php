@component('mail::message')
# Оформлен новый заказ.

<div class="email-order">
    <p>Номер заказа: {{ $order->id }}</p>
    <p>Имя заказчика: {{ $order->name }}</p>
    <p>Телефон: {{ $order->phone }}</p>
    <p>Сумма заказа: {{ $order->total_price }}</p>
</div>
{{--TODO исправить ссылку в подробнее на акктуальную в будущем--}}
@component('mail::button', ['url' => 'https://sausage-mgn.xyz/'])
Подробнее
@endcomponent

С уважением,<br>
Башкирские колбасы.
@endcomponent
