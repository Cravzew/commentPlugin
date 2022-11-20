(function () {

    // Массив комментарий
    let commentsArray = [];

    // Создание заголовка
    function commentCreateTitle(title) {
        let commentTitle = document.createElement('h2');
        commentTitle.innerHTML = title;
        return commentTitle;
    }

    // Создание формы комментария
    function commentCreateForm() {
        let commentForm = document.createElement('form');
        let commentDivName = document.createElement('div');
        let commentLabelName = document.createElement('label');
        let commentInputName = document.createElement('input');
        let commentDivTextarea = document.createElement('div');
        let commentLabelTextarea = document.createElement('label');
        let commentInputTextarea = document.createElement('textarea');
        let commentButton = document.createElement('button');

        commentForm.classList.add('mb-3');
        commentDivName.classList.add('form-group')
        commentLabelName.textContent = 'Nickname'
        commentLabelName.htmlFor = 'nickname'
        commentInputName.classList.add('input-name', 'form-control')
        commentInputName.placeholder = 'Name'
        commentDivTextarea.classList.add('form-group')
        commentLabelTextarea.textContent = 'Textarea'
        commentLabelTextarea.htmlFor = 'textarea'
        commentInputTextarea.classList.add('input-name', 'form-control')
        commentInputTextarea.style.resize = 'none'
        commentInputTextarea.setAttribute('required', 'required')
        commentButton.classList.add('btn', 'btn-primary');
        commentButton.textContent = 'Submit';

        commentForm.append(commentDivName)
        commentDivName.append(commentLabelName)
        commentDivName.append(commentInputName)
        commentForm.append(commentDivTextarea)
        commentDivTextarea.append(commentLabelTextarea)
        commentDivTextarea.append(commentInputTextarea)
        commentForm.append(commentButton)

        commentButton.disabled = true;

        commentInputName.addEventListener('input', () => {
            if (commentInputName.value !== '') {
                commentButton.disabled = false;
            } else {
                commentButton.disabled = true;
            }
        });

        return {
            commentForm,
            commentInputName,
            commentInputTextarea,
            commentButton,
        };
    }

    // Создание списка комментариев
    function commentCreateList() {
        let commentList = document.createElement('ul');
        commentList.classList.add('comment-block', 'list-group');
        commentList.style.listStyle = 'none'
        return commentList;
    }

    // Создание формы отправки комментария
    function commentCreateItem(obj) {
        let commentItem = document.createElement('li');
        commentItem.classList.add('card-body', 'mb-3');
        commentItem.style.border = '1px solid lightgray'
        let commentName = document.createElement('strong');
        commentName.classList.add('card-title')
        commentName.textContent = obj.name
        let commentText = document.createElement('p')
        commentText.classList.add('card-text')
        commentText.textContent = obj.text

        commentItem.append(commentName)
        commentItem.append(commentText)

        return {
            commentItem
        };
    }

    // Логика создания комментария
    function commentCreateApp(commentContainer, title = 'Comments') {
        let commentTitleApp = commentCreateTitle(title);
        let commentFormApp = commentCreateForm();
        let commentListApp = commentCreateList();

        commentContainer.append(commentTitleApp);
        commentContainer.append(commentFormApp.commentForm);
        commentContainer.append(commentListApp);

        commentFormApp.commentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let newItem = {
                name: commentFormApp.commentInputName.value,
                text: commentFormApp.commentInputTextarea.value,
            }

            let commentItemApp = commentCreateItem(newItem);

            commentListApp.append(commentItemApp.commentItem);

            commentFormApp.commentButton.disabled = true;
            commentFormApp.commentInputName.value = '';
            commentFormApp.commentInputTextarea.value = '';
        })
    }

    window.createCommentApp = commentCreateApp;
})();