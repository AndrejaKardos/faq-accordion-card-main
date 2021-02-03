let question = document.getElementsByClassName('.question');
let answer = document.getElementsByClassName('.answer');

document.getElementsByClassName('.question').addEventListener('click', function() {
    document.getElementsByClassName('.answer').removeClass('.answer--hide');
});

// Need to make an array for each one, otherwise this applies to all answers and questions