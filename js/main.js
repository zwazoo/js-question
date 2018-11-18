; (function(){
    "use strict";

    //Task1 - Ask question
    var buttonClick = document.querySelector('.ba-button'),
        result = document.querySelector('.ba-result');
        
        buttonClick.addEventListener('click', askquestion);

    function askquestion() {
        var answer = document.querySelector('.ba-answer').value,
            rightAnswer = 'ECMAScript';

        if(answer.toLowerCase() === rightAnswer.toLowerCase()) {
            result.textContent = "Верно!";
            } else {
                result.textContent = "Не знаете? «ECMAScript»!";
            }
        
 
    }

    //Task2 - Login
    var login = document.querySelector('.ba-login');
        
        login.addEventListener('click', asklogin);

    
    function asklogin() {
        var answer1 = prompt('Введите логин', '');


    if(answer1 === 'Админ') {
        var answer2 = prompt('Введите пароль', '');

        if(answer2 === 'Черный Властелин'){
            alert('Добро пожаловать!');
        } else if(answer2 == null) {
            alert('Вход отменен');
        } else {
            alert('Пароль неверен');
        }

    } else if(answer1 == null) {
        alert('Вход отменен');
    } else {
        alert('Я вас не знаю');
    }
    }
})();