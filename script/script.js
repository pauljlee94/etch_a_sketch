const container = document.querySelector('#container');
const resetButton = document.querySelector('.resetButton')
let grid = document.getElementsByClassName('grid')

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

function reset() {
    container.innerHTML = ""
    let x = prompt("size?")
    if (x > 0) {
        makeGrid(x)
    }else {
        alert("Invalid entry")
        reset()
    }
}

resetButton.addEventListener('click', function() {
    reset();
    gridEventListener()
})

function gridEventListener () {
    for (let i=0; i<grid.length; i++) {
        grid[i].addEventListener('mouseenter', function() {
            grid[i].style.backgroundColor = 'black';
    })}
}

//Initialize Game
reset()
gridEventListener()