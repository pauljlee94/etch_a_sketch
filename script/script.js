const container = document.querySelector('#container');
function makeGrid (x) { 
    for (i=0; i<x; i++) {
        for (j=0; j<x; j++) {
            let grid = document.createElement('div');
            let dimension = 600/x;
            grid.style.height = dimension + "px";
            grid.style.width = dimension + "px";
            if (i%2==0 && j%2==0 || i%2!=0 && j%2!=0) {
                grid.classList.add('grid1');
                container.appendChild(grid);
            }else {
                grid.classList.add('grid2');
                container.appendChild(grid);
            }
        }
    }
}

makeGrid(20)