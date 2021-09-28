const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const disChar = document.querySelector('.characterdisplay');

const disResult = document.querySelector('.resultdisplay');

const btnseven = document.querySelector('.seven');
btnseven.addEventListener('click', seven);

function seven() {
  disChar.innerHTML += num[7];
  return num[7];
}

const btneight = document.querySelector('.eight');
btneight.addEventListener('click', eight)

function eight() {
  disChar.innerHTML += num[8]
  return num[8];
}

const btnnine = document.getElementById('nine');
btnnine.addEventListener('click', nine);

function nine() {
  disChar.innerHTML += num[9];
  return num[9];
}

const btnfour = document.getElementById('four');
btnfour.addEventListener('click', four);

function four() {
  disChar.innerHTML += num[4];
  return num[4];
}

const btnfive = document.getElementById('five');
btnfive.addEventListener('click', five);

function five() {
  disChar.innerHTML += num[5];
  return num[5];
}

const btnsix = document.getElementById('six');
btnsix.addEventListener('click', six);

function six() {
  disChar.innerHTML += num[6];
  return num[6];
}

const btnone = document.getElementById('one');
btnone.addEventListener('click', one);

function one() {
  disChar.innerHTML += num[1];
  return num[1];
}

const btntwo = document.getElementById('two');
btntwo.addEventListener('click', two);

function two() {
  disChar.innerHTML += num[2];
  return num[2];
}

const btnthree = document.getElementById('three');
btnthree.addEventListener('click', three);

function three() {
  disChar.innerHTML += num[3];
  return num[3];
  console.log(num[3])
}

const btnzero = document.getElementById('zero');
btnzero.addEventListener('click', zero);

function zero() {
  disChar.innerHTML += num[0];
  return num[0];
}

const operator = ['+', '/', '*', "-", '.']

const btnmul = document.getElementById('mul');
btnmul.addEventListener('click', mul)

function mul () {
  if (disChar.innerHTML !== ' ' && disResult.textContent !== ' ') {
    let newCalc = disResult.textContent;
    disChar.textContent = ' ';
    disChar.innerHTML += newCalc + operator[2];
    disResult.textContent = ' ';
    
  }else {
    disChar.innerHTML += operator[2];
    return operator[2];

  }
  
}

const btnadd = document.getElementById('add');
btnadd.addEventListener('click', add);

function add () {
  disChar.innerHTML += operator[0];
  return operator[0];
}

const btnsub = document.getElementById('sub');
btnsub.addEventListener('click', sub);

function sub () {
  disChar.innerHTML += operator[3];
  return operator[3];
}

const btndivi = document.getElementById('divi');
btndivi.addEventListener('click', divi);

function divi () {
  disChar.innerHTML += operator[1];
  return operator[1];
}

const btnequal = document.querySelector('.equalto');
btnequal.addEventListener('click', equalto)
function equalto() {
  let me = disChar.innerHTML.toString();
  let newme = eval(me)
  disResult.innerHTML = newme;
  console.log(newme)
}

const btndot = document.querySelector('.dot');
btndot.addEventListener('click', dot)

function dot() {
  disChar.innerHTML += operator[4];
}

const btnClear = document.querySelector('.clear')
btnClear.addEventListener('click', function() {
  disChar.innerHTML = ' ';
  disResult.textContent = ' ';
})
