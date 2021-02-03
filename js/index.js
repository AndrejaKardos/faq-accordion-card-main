for (let i = 1; i < 6; i++) {
    document.getElementById('question-' + i).addEventListener('click', function() {
        document.getElementById('answer-' + i).classList.toggle('answer--hide');
    });
}