//creating grid
var testing = document.createElement("div");
const cont = document.getElementById("container");
let rows = document.getElementsByClassName("rows");
document.body.appendChild(testing);


function generateGrid(value, value2) {
    generateRows(value)
    generateCol(value2)
}

function generateRows(userInput) {
    for (let i = 0; i < userInput; i++) {
        let rows = document.createElement('div');
        cont.appendChild(rows).className = "rows";
    }
}

function generateCol(userInput) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < userInput; j++) {
            var cols = document.createElement('div');
            cols.setAttribute('id', 'column');
            rows[j].appendChild(cols).className = "cols";
        }
    }
}

// let slide = document.getElementById("slider") = ;

generateGrid(16, 16)
// end create grid



// adds color to mouseover
let blockCounter = 0;


// listen for which color
const cell = Array.from(document.getElementsByClassName('cols'));

function blueSelected(){
cell.forEach(cell => {
    cell.addEventListener('mouseenter', function handleClickBlue() {
      
            cell.setAttribute('style', 'background-color: blue;');
        blockCounter++;
        document.getElementById('painted').innerHTML = 'Total Blocks painted: ' + blockCounter;
    });
});
}

function redSelected(){
cell.forEach(cell => {
    cell.addEventListener('mouseenter', function handleClickred() {
      
            cell.setAttribute('style', 'background-color: red;');
            
      
        blockCounter++;
        document.getElementById('painted').innerHTML = 'Total Blocks painted: ' + blockCounter;
    });
});
}

function greenSelected(){
cell.forEach(cell => {
    cell.addEventListener('mouseenter', function handleClickgreen() {
      
            cell.setAttribute('style', 'background-color: green;');
      
        blockCounter++;
        document.getElementById('painted').innerHTML = 'Total Blocks painted: ' + blockCounter;
    });
});
}

let blueOn = new Boolean(false);
let greenOn = new Boolean(false);
let redOn = new Boolean(false);
const blue = document.getElementById("blue");
blue.addEventListener('click', function initBlue() {
    redOn = false;
    greenOn = false;
    blueOn = true;
    checkColor()
    
    
});
const red = document.getElementById("red");
red.addEventListener('click', function initRed() {
    greenOn = false;
    blueOn = false;
    redOn = true;
    checkColor()
});
const green = document.getElementById("green");
green.addEventListener('click', function initGreen() {
    blueOn = false;
    redOn =false;
    greenOn = true;
    checkColor();
});


function checkColor(){
if(blueOn){
    blueSelected();
    console.log("blue");
}
else if(greenOn){
    greenSelected();
    console.log("green");
}
else if(redOn){
    redSelected();
    console.log("red");
}
}
// clear the grid
const reset = document.getElementById('resetGrid');
reset.addEventListener('click', function clearGrid() {
    const cell = Array.from(document.getElementsByClassName('cols'));
    cell.forEach(cell => {
        cell.setAttribute('style', 'background-color: white;')
    })
})



// eraser
//bad logic. hungry.. tired..blah...
//todo:
// const erase = document.getElementById('erase');
// erase.addEventListener('mouseenter', function erase(){

// });



//change size of grid
//todo:
// let defaultSize = document.getElementById("default");

// defaultSize.addEventListener("change", function defaultSize(){
//     const kill = Array.from(document.getElementsByClassName('cols'));
//     kill.forEach(kill => {
//       kill.parentElement.removeChild(kill);

//     });
//     generateCol(16);

// })