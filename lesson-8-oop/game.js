(function() {
  function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  }
  Question.prototype.displayQuestion = function() {
      console.log (this.question);
      for (var i = 0; i < this.answers.length; i++) {
          console.log(i + ': ' + this.answers[i]);
      }
  }
  Question.prototype.checkAnswer = function (ans, callback) {
      var sum;
      if (ans == this.correct) {
          console.log('Correct answer!');
          sum = callback (true);
      } else {
          console.log('Wrong answer. Try again :)');
          sum = callback (false);
      }
      this.displayCounter (sum);
  }
  Question.prototype.displayCounter = function(counter) {
    console.log('Вы набрали: ' + counter + ' очков');
}
  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
      ['Yes', 'No'],
      0);
  var q2 = new Question('What is the name of this course\'s teacher?',
      ['John', 'Micheal', 'Jonas'],
      2);
  var q3 = new Question('What does best describe coding?',
      ['Boring', 'Hard', 'Fun', 'Tediuos'],
      2);
  var questions = [q1, q2, q3];
  function counter() {
    var sum = 0;
    return function (correct) {
       if (correct) {
           sum++;
       } 
       return sum;
    }
}
var quantity = counter();
function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt('Please select the correct answer.');

  if (answer !== 'exit' && answer !== null) {
    questions[n].checkAnswer (parseInt(answer), quantity);
    nextQuestion();
  }
}
nextQuestion();
})();