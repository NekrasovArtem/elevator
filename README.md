# Лифт
Чтобы взаимодейстовать с лифтом выберите количество этажей в здание. Для работы лифта необходимо минимум 2 этажа.

На каждом этаже присутсвует его номер. 

Для того, чтобы лифт переместился на нужный вам этаж, необходимо нажать на серую круглую кнопку (по правой стороне этажа).
После нажатия на кнопку, она становится выключенной. На кнопку можно будет нажать еще раз только после того, как лифт уедет с её этажа. 
Лифт перемещается по этажам в зависимости от того, в какой очередности вы выбрали этажи.

Перейдя на нужный этаж, лифт откроет двери на 4 секунды, после чего закроет двери и отправится на следующий в очереди этаж.

После прибытия на последний этаж в очереди, лифт отправится на первый этаж, чтобы "высадить" людей.

## Технологии
- HTML
- CSS
- JS
- VueJS
- Vue Router
- Pinia

## Последние обновления
- Перенос проекта на шаблон Vue
- Исправлен баг бесконечного вызова лифта на этаж

## Будущие обновления
- Обновление анимации движения лифта
- Обновление очереди вызова лифта
- Два лифта

## Использование
Установите npm-пакет с помощью команды:
```sh
npm install
``` 

Запустить версию для разработки:
```sh
npm run dev
``` 

Запустить сборку:
```sh
npm run build
``` 