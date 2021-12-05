let userInput = 16;
let cell = [];
let gridContainer = document.getElementById('grid-container');
let gridSize = document.getElementById('change-grid');
let reset = document.getElementById('reset-grid');
let i = 0;



cleanGrid(userInput);

function cleanGrid(userInput){
    if (userInput > 100) {
        userInput = 100;
    }
let cellTotal = userInput*userInput;
gridContainer.style.gridTemplateColumns = (`repeat(${userInput}, 1fr`);
gridContainer.style.gridTemplateRows = (`repeat(${userInput}, 1fr`);

for(i=0; i<cellTotal; i++) {
    cell[i] = document.createElement('div');
    cell[i].classList.add('cell');
    gridContainer.appendChild(cell[i]);
    }
cell.forEach(item => {
    item.addEventListener("mouseover", function(e){
    e.target.classList.add('hovered');
});
});
}




gridSize.addEventListener('click', function() {
    userInput = parseInt(prompt("New Grid Size (1-100):", 16))
    removeAllChildNodes(gridContainer);
    cleanGrid(userInput);
});


reset.addEventListener('click', function() {
    removeAllChildNodes(gridContainer);
    cleanGrid(userInput);
});



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}