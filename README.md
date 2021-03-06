# Домашнее задание

## Задание 1. Валидация формы входа

Необходимо добавить валидацию на стороне клиента по полям email и password.

Правила для поля email:
  1. Строка может содержать только символы латинского алфавита, цифры и дефис;
  2. Строка должна содержать символ ```@```;
  3. Email может быть зарегистрирован на домене любого уровня.

Правила для поля ввода пароля:
  1. Строка не долна быть короче 6 символов.

При клике на кнопку «Log in» должна быть запущена валидация. Если поле не валидно, это должно быть отражено визуально. Все ошибки валидации должны выводиться в алерте над формой.

Компонент приложения «Форма входа» — ```src/common/LoginApp/index.tsx```

Приложение будет запущено по адресу ```http://localhost:8080```

## Задание 1. ⭐️ Дополнительно: валидация на сервере
Дополнительно можно добавить валидацию на стороне сервера по тем же правилам, что и на клиенте, и добавить проверку на соответствие отправленного логина и пароля. Хранить пары логин-пароль можно в константе. Если пароль не соответствует введённому логину, должно быть выведено соответствующее сообщение.

Код сервера находится в ```src/server/index.tsx```

## Задание 2. Написать галерею на React

Необходимо написать фотогалерею, используя React для отрисовки интерфейса.

Требования к галерее:
  1. Галерея может отображать любое количество изображений;
  2. При клике на превью должна меняться большая фотография;
  3. При клике на стрелки влево и вправо должна прокручиваться лента превью на 1 изображение;
  4. ⭐️ Дополнительно: добавить бесконечную прокрутку ленты превью в обе стороны.

Компонент приложения «Галерея» — ```src/common/GalleryApp/index.tsx```

Приложение будет запущено по адресу ```http://localhost:8080/gallery```

# Установка и сборка проекта
Запуск веб-сервера для разработки клиентской части (добавлен hot module replacement): ```npm run dev-server```

Сервер будет запущен по адресу ```http://localhost:8080```

Запуск сервера на Node.js с SSR и отдачей статики: ```npm start```

Сервер на Node.js будет запущен по адресу ```http://localhost:3000```