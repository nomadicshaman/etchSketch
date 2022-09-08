let color = 'black';
let click = false;
createBoard(8);

document.querySelector('.container').addEventListener('click', function (e) {
  if (e.target.tagName != 'BUTTON') {
    click = !click;
    let draw = document.querySelector('#draw');
    if (click) {
      draw.innerHTML = 'Go draw, kiddo!'
    } else {
      draw.innerHTML = 'You should click to the board to start drawing!  '
    }
  }
})



let selectBtn = document.querySelector('#select-size');
let resetBtn = document.querySelector('#clear');

let pickColor = document.querySelector('#pick-color');

selectBtn.addEventListener('click', function () {
  let size = getSize();
  createBoard(size);
});




function createBoard(size) {
  let container = document.querySelector('.container');
  let squares = container.querySelectorAll("div");
  let toggleBtn = document.querySelector('#toggle');

  squares.forEach((div) => div.remove());


  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


  let numOfDivs = size * size;

  for (let i = 0; i < numOfDivs; i++) {
    let divs = document.createElement('div');
    toggleBtn.addEventListener('click', function () {
      divs.classList.toggle('divsClass')
    })
    divs.addEventListener('mouseover', colorDiv);
    divs.style.backgroundColor = 'white';
    divs.classList.add('divsClass');
    container.insertAdjacentElement('beforeend', divs);


  }
};



function getSize() {
  let input = prompt('Enter a number between 8 and 100!');
  let message = document.querySelector('#message');
  if (input == '') {
    message.innerHTML = 'You forgot the enter a number, lol.';
  } else if (input < 8 || input > 100) {
    message.innerHTML = 'Enter a number between 8 and 100.';
  } else {
    message.innerHTML = 'Have fun ma boi!';
    return input;
  }
};


function colorDiv() {
  if (click) {
    if (color == 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else if (color == 'black') {
      this.style.backgroundColor = 'black';
    } else if (color == 'pickColor') {
      this.style.backgroundColor = pickColor.value;
    }
  }

}

function setColor(colorChoice) {
  color = colorChoice;
}

function clearBoard() {
  let container = document.querySelector('.container');
  let divs = container.querySelectorAll('div');
  divs.forEach((div) => div.style.backgroundColor = 'white')

}