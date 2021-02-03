function toggleFont(num) {
    document.getElementById('question-' + num).style.fontWeight = document.getElementById('question-' + num).style.fontWeight === '700' ? '' : '700';
}

for (let i = 1; i < 6; i++) {
    document.getElementById('question-' + i).addEventListener('click', function() {
        toggleFont(i);
        document.getElementById('answer-' + i).classList.toggle('answer--hide');
    });
}