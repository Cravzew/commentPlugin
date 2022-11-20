# commentPlugin
Простая и легкая JavaScript-библиотека для написания комментарий
# Для работы необходимо
* Библиотека Bootstrap 4 
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```
* Сам плагин _commentPlugin_
```
<script defer src="./script.js"></script>
```
# Установка
1. Скачать репозиторий
2. Кинуть _script.js_ в папку с проектом
3. Инициализировать
```
document.addEventListener('DOMContentLoaded', () => {
    createCommentApp(document.getElementById('comment'));
})
```
4. Готово
# Пару слов
Моя первая библиотека. Она имеет пару недостатков. Не судите строго :)
