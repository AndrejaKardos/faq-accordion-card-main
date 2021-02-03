// let question = document.getElementsByClassName('question');
// let answer = document.getElementsByClassName('answer');

document.getElementById('question-1').addEventListener('click', function() {
    console.log("Hello!")
    document.getElementById('answer-1').classList.toggle('answer--hide');
});

// Need to make an array for each one, otherwise this applies to all answers and questions