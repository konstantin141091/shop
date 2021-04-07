## Git ##
Примерный план действий с git:
* fork - создать свой репозиторий в GitHub от репозитория https://github.com/konstantin141091/shop
* clone - развернуть проект локально от своего репозитория
* внести изменения
* commit - создать коммит изменений
* push - загрузить изменения в свой репозиторий
* pull request - загрузить изменения из своего репозитория в первоначальный
* в дальнейшем перед выполнением задач выгружать последнюю версию из первоначального репозитория
## Разворачивание проекта ##
* скопировать .env.example в .env, указать соответствующие настройки БД
* настроить web-сервер, php7.2
* composer install
* npm install
* php artisan key:generate
* php artisan migrate
* php artisan db:seed (если ошибка composer dump-autoload)
* npm run dev (каждый раз после выгрузки последней версии из репозитория) или
* npm run watch
* php artisan storage:link

## Настройка почты ##
В .env прописать:
* MAIL_MAILER=mailgun
* MAILGUN_DOMAIN=домен
* MAILGUN_SECRET=ключ
* MAIL_FROM_ADDRESS=no-reply@presents.com
В командной строке:
* composer require guzzlehttp/guzzle
## Настройка pusher ##
* BROADCAST_DRIVER=pusher
* PUSHER_APP_ID=ID приложения
* PUSHER_APP_KEY=Открытый ключ
* PUSHER_APP_SECRET=Защищенный ключ 
* PUSHER_APP_CLUSTER=Название приложения
## Описание баз данных ##

## Описание баз api ##

