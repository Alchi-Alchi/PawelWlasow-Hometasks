var body = document.querySelector ('body');
window.onload = function() {
  var widthOfField = 720;
  var heightOfField = 720;
  var racketH = 150;
  var racketW = 5;
  var speedOfRacket = 0;
  var ballSizes = 25;
  var ballPosX = 295;
  var ballPosY = 195;
  var ballSpeedY = 0;
  var ballSpeedX = 0;
  var score = 0;
  var gameInterval = undefined;
  //Табло
  var wrapper = document.querySelector('.wrapper');
  var board = document.createElement('div');
  wrapper.appendChild (board).id = ('board');
  var score1 = document.createElement ('span');
  var score2 = document.createElement ('span');
  board.appendChild(score1).id = 'score1';
  board.appendChild(score2).id = 'score2';
  //Кнопка
  var button = document.createElement('button');
  button.textContent = 'Старт';
  wrapper.appendChild(button).id = 'start';
  //Поле
  var field = document.createElement('div');
  wrapper.appendChild(field).id = 'field';
  field.style.width = widthOfField + 'px';
  field.style.height = heightOfField + 'px';
  //Мячик
  var ball = document.createElement('div');
  field.appendChild(ball).id = 'ball';
  //Левая ракетка
  var racketLeft = document.createElement('div');
  field.appendChild(racketLeft).id = 'racketleft';
  posXRacketLeft = 0;
  posYRacketLeft = heightOfField / 2 - racketLeft.offsetHeight / 2;
  racketLeft.style.top = posYRacketLeft + 'px';
  //Правая ракетка
  var racketRight = document.createElement('div');
  field.appendChild(racketRight).id = 'racketright';
  posXRacketRight = widthOfField - racketRight.offsetWidth;
  posYRacketRight = widthOfField / 2 - racketRight.offsetHeight / 2;
  racketRight.style.left = posXRacketRight + 'px';
  racketRight.style.top = posYRacketRight + 'px';
  startGame();
  function startGame() {
    stopGame();
    gameInterval = setInterval(showGame, 1000 / 50);
  };
  function stopGame() {
      clearInterval(gameInterval);
  };
  //Конструктор ракетки
  function Racket(x, y) {
    this.x = x;
    this.y = y;
    this.width = racketW;
    this.height = racketH;
    this.score = score;
    this.speed = speedOfRacket;
  };
  var racketLeft = new Racket (posXRacketLeft, posYRacketLeft);
  var racketRight = new Racket (posXRacketRight, posYRacketRight);
  //Конструктор мяча
  function Ball() {
    this.x = ballPosX;
    this.y = ballPosY;
    this.speedX = ballSpeedX;
    this.speedY = ballSpeedY;
    this.width = ballSizes;
    this.height = ballSizes;
  }
  var ball = new Ball();
  //Запуск мяча в случайном направлении и с определенной скоростью
  button.addEventListener ('click', function() {
    startGame();
    startBall();
  })
  function startBall() {
    ball.y = ballPosY;
    ball.x = ballPosX;
    if (Math.random() <= 0.5) {
      var side = 1;
    } else {
      var side = -1;
    };
    ball.speedY = Math.random() * 3 + 5; 
    ball.speedX = side * (Math.random() * 3 + 5); 
  };
  //Нажатие на кнопки
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 16 || event.which == 16) { 
      racketLeft.speed = -10;
    };
    if (event.keyCode == 17 || event.which == 17) { 
      racketLeft.speed = 10;
    };
    if (event.keyCode == 38 || event.which == 38) { 
      racketRight.speed = -10;
    };
    if (event.keyCode == 40 || event.which == 40) {
      racketRight.speed = 10;
    };
  }, false);
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 16 || event.which == 16) {
      racketLeft.speed = 0;
    };
    if (event.keyCode == 17 || event.which == 17) {
      racketLeft.speed = 0;
    };
    if (event.keyCode == 38 || event.which == 38) {
      racketRight.speed = 0;
    };
    if (event.keyCode == 40 || event.which == 40) {
      racketRight.speed = 0;
    };
  }, false);
  // Игровой процесс (Движение ракеток, мяча, условия отрисовки)
  function showGame() {
    racketLeft.y += racketLeft.speed;
    racketRight.y += racketRight.speed;
    ball.y += ball.speedY; 
    ball.x += ball.speedX;
    if (racketLeft.y < 10) {
      racketLeft.y = 0;
    };
    if (racketRight.y < 10) {
      racketRight.y = 0;
    };
    if (racketLeft.y >= heightOfField - racketLeft.height) {
      racketLeft.y = heightOfField - racketLeft.height;
    };
    if (racketRight.y >= heightOfField - racketRight.height) {
      racketRight.y = heightOfField - racketRight.height;
    };
    if (ball.y <= 0 || ball.y >= heightOfField - ball.height) {
        ball.speedY = - ball.speedY;
    };
    if (ball.x <= racketLeft.width) {
      if (ball.y > racketLeft.y && ball.y < racketLeft.y + racketLeft.height) { 
        ball.speedX = - ball.speedX;
      } else {
        ball.x = 0;
        racketRight.score++; 
        stopGame();
      };
    };
      if (ball.x >= widthOfField - ball.width - racketRight.width) {
        if (ball.y > racketRight.y && ball.y < racketRight.y + racketRight.height) {
          ball.speedX = - ball.speedX;
        } else {
          ball.x = widthOfField - ballSizes;
          racketLeft.score++;
          stopGame();
        };
      };
      document.getElementById("racketleft").style.top = (racketLeft.y) + "px";
      document.getElementById("racketright").style.top = (racketRight.y) + "px";
      document.getElementById("ball").style.top = (ball.y) + "px";
      document.getElementById("ball").style.left = (ball.x) + "px";
      document.getElementById('score1').innerHTML = racketLeft.score.toString();
      document.getElementById('score2').innerHTML = racketRight.score.toString();
  };
};