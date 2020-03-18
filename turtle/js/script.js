'use strict';

const size = {
  w: 800,
  h: 600
};

canvas.width = size.w;
canvas.height = size.h;

const ctx = canvas.getContext('2d');

const Turtle = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 30;
  this.angle = 0;
  this.img = new Image();
};

Turtle.prototype.draw = function (ctx, size) {
  const img = new Image();
  const that = this;
  img.onload = function () {
    canvas.width = canvas.width;
    ctx.save(); 
    ctx.translate(that.x, that.y);
    ctx.rotate(that.angle);
    ctx.drawImage(img, 0, 0, that.radius, that.radius);
    ctx.restore(); 
  };
  // img.addEventListener('load', function() {
  // }, false);

  img.src = './images/turtle.png';
  // ctx.fillStyle = 'rgb(0,255,0)';
  // ctx.beginPath();
  // ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  // ctx.closePath();
  // ctx.fill();
};

Turtle.prototype.update = function (ctx, size) {

};

let algo = [], vectors = [];
let interval;
const turtle = new Turtle(size.w / 2, size.h / 2);

const front = (ctx, step, turtle) => {
  const x = turtle.x;
  const y = turtle.y;
  const vector = [];
  return () => {
    ctx.beginPath();
    // ctx.moveTo(turtle.x - turtle.radius / 2, turtle.y + turtle.radius / 2);
    // ctx.moveTo(turtle.x, turtle.y);
    vector.push(turtle.x + turtle.radius / 2);
    vector.push(turtle.y + turtle.radius);
    turtle.x += step * Math.sin(turtle.angle);
    turtle.y -= step * Math.cos(turtle.angle);
    // ctx.lineTo(turtle.x - turtle.radius / 2, turtle.y + turtle.radius / 2);
    // ctx.lineTo(turtle.x, turtle.y);
    vector.push(turtle.x + turtle.radius / 2);
    vector.push(turtle.y + turtle.radius);
    ctx.closePath();
    ctx.stroke();
    vectors.push(vector);
  };
};

const back = (ctx, step, turtle) => {
  return () => {
    ctx.beginPath();
    ctx.moveTo(turtle.x + turtle.radius / 2, turtle.y - turtle.radius / 2);
    // ctx.moveTo(turtle.x, turtle.y);
    turtle.x -= step * Math.sin(turtle.angle);
    turtle.y += step * Math.cos(turtle.angle);
    ctx.lineTo(turtle.x + turtle.radius / 2, turtle.y - turtle.radius / 2);
    // ctx.lineTo(turtle.x, turtle.y);
    ctx.closePath();
    ctx.stroke();
  };
};

const right = (ctx, angle, turtle) => {
  return () => {
    turtle.angle += angle * Math.PI / 180;
  };
};

const left = (ctx, angle, turtle) => {
  return () => {
    turtle.angle -= angle * Math.PI / 180;
  };
};

const draw = (ctx, size) => {
  turtle.draw(ctx, size);
  for (let vector of vectors) {
    ctx.beginPath();
    ctx.moveTo(vector[0], vector[1]);
    ctx.lineTo(vector[2], vector[3]);
    ctx.closePath();
    ctx.stroke();
  }
};

const update = (ctx, size) => {
  turtle.update(ctx, size);
};

const loop = () => {
  draw(ctx, size);
  update(ctx, size);

  requestAnimationFrame(loop);
};

loop();

const frontBtnHandler = () => {
  const step = +prompt('Введіть кількість кроків');
  algo.push(front(ctx, step, turtle));
  display.innerHTML += 'Вперед на ' + step + ' кроків<br>';
};

const backBtnHandler = () => {
  const step = +prompt('Введіть кількість кроків');
  algo.push(back(ctx, step, turtle));
  display.innerHTML += 'Назад на ' + step + ' кроків<br>';
};

const rightBtnHandler = () => {
  const angle = +prompt('Введіть кут повороту');
  algo.push(right(ctx, angle, turtle));
  display.innerHTML += 'Вправо на ' + angle + ' градусів<br>';
};

const leftBtnHandler = () => {
  const angle = +prompt('Введіть кут повороту');
  algo.push(left(ctx, angle, turtle));
  display.innerHTML += 'Вліво на ' + angle + ' градусів<br>';
};

const repeatStartBtnHadnler = () => {

};

const repeatEndBtnHandler = () => {

};

let i = 0;
const enterBtnHandler = () => {
  if (!interval) {
    interval = setInterval(() => {
      if (i < algo.length)
        algo[i++]();
      else {
        clearInterval(interval);
        interval = null;
      }
    }, 100);
  } else {
    clearInterval(interval);
    interval = null;
  }
  // for (let f of algo)
    // f();
};

const clearBtnHandler = () => {
  ctx.clearRect(0, 0, size.w, size.h)
  algo = [];
  display.innerHTML = '';
  turtle.x = size.w / 2;
  turtle.y = size.h / 2;
  turtle.angle = 0;
  vectors = [];
};

frontBtn.addEventListener('click', frontBtnHandler);
backBtn.addEventListener('click', backBtnHandler);
rightBtn.addEventListener('click', rightBtnHandler);
leftBtn.addEventListener('click', leftBtnHandler);
repeatStartBtn.addEventListener('click', repeatStartBtnHadnler);
repeatEndBtn.addEventListener('click', repeatEndBtnHandler);
enterBtn.addEventListener('click', enterBtnHandler);
clearBtn.addEventListener('click', clearBtnHandler);
