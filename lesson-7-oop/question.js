function game (cycle) {
  var sum = 0;
  for (numOfCycle = 1; numOfCycle <= cycle; numOfCycle++) {
    function Question (question, answers, correctAnswer) {
      this.question = question;
      this.answers = answers;
      this.correctAnswer = correctAnswer;
    }
    var q1 = new Question ('В каком году появился JavaScript?', ['0: 1995', '1: 2015', '2: 2001'], '0: 1995');
    var q2 = new Question ('Какая компания разработала JavaScript?',['0: Microsoft', '1: Netscape', '2: Google'], '1: Netscape');
    var q3 = new Question ('Как зовут создателя языка JavaScript?',['0: Джеймс Гослинг', '1: Марк Андриссен', '2: Брендан Эйх'], '2: Брендан Эйх');
    var questions = [q1, q2, q3];
    var randIndexOfQuestion = Math.floor(Math.random() * questions.length);
    var randQuestion = questions[randIndexOfQuestion].question;
    var variables = questions[randIndexOfQuestion].answers;
    var playerAnswer = function() {
      while (true) {
        var answerOfPlayer = prompt ('Введите номер своего ответа: ');
        if (answerOfPlayer === null) break;
        return answerOfPlayer;
      }
    }
    console.log (randQuestion);
    variables.forEach (function(item) {
      console.log (item)
    });
    var result = playerAnswer ();
    var correct = questions[randIndexOfQuestion].correctAnswer;
    var coincidence = variables.indexOf(correct);
    function checkAnswer () {
      if (result == coincidence) {
       console.log ('Верно!');
      } else {
       console.log ('Неверно');
      }
    }
    checkAnswer ();
    function counter () {
      if (result == coincidence)
      sum++;
      return sum;
    }
    console.log ('Количество набранных очков: ' + counter());
  }
}
game (3);