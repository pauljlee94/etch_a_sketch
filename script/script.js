//-----------------------//
//                       //
//     Etch-a-Sketch     //
//                       //
//       Paul Lee        //
//                       //
//-----------------------//

const container = document.querySelector('#container');
const resetButton = document.querySelector('.resetButton')
const grid = document.getElementsByClassName('grid')
const colorPicker = document.querySelector('.colorPicker')
let mouseDown = false
container.addEventListener('mousedown', function(e) {
    mouseDown = true;
})
container.addEventListener('mouseup', function(e) {
    mouseDown = false;
})

function initializeGame() {
    container.innerHTML = "";
    let x = prompt("size?");
    if (x > 0) {
        makeGrid(x);
    }else {
        alert("Invalid entry");
        initializeGame();
    }
    draw();
}

function makeGrid (x) { 
    for (i=0; i<x; i++) {
        for (j=0; j<x; j++) {
            let grid = document.createElement('div');
            let dimension = 600/x;
            grid.style.height = dimension + "px";
            grid.style.width = dimension + "px";
            if (i%2==0 && j%2==0 || i%2!=0 && j%2!=0) {
                grid.classList.add('grid', 'white');
                container.appendChild(grid);
            }else {
                grid.classList.add('grid', 'gray');
                container.appendChild(grid);
            }
        }
    }
}

resetButton.addEventListener('click', function() {
    initializeGame();
    draw();
})

function draw() {
    for (let i=0; i<grid.length; i++) {
        grid[i].addEventListener('mouseover', function() {
            if (mouseDown == true) {
                let color = colorPicker.value;
                grid[i].style.backgroundColor = color;
            }
        })
    }
    for (let i=0; i<grid.length; i++) {
        grid[i].addEventListener('mousedown', function() {
            let color = colorPicker.value;
            grid[i].style.backgroundColor = color;
        })
    }
}

initializeGame()