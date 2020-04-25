var numSquares = 6;
var color = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = selectColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    color = generateRandomColor(numSquares);
    pickedColor = selectColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if(color[i]){
            squares[i].style.backgroundColor = color[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    color = generateRandomColor(numSquares);
    pickedColor = selectColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = color[i];
            squares[i].style.display = "block";
        
    
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    color = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = selectColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    this.textContent = "New Colors";

    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color[i]
    }
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //Add colors to squares
    squares[i].style.backgroundColor = color[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;

        //compare color clicked with winning color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again"
            changeColor(clickedColor); 
            h1.style.backgroundColor = clickedColor;           
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}

function changeColor(change){
    //loop though squares 
    for (var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = change;                                           
    }
}


function selectColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];  
}

function generateRandomColor(num){
    //make an array 
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and put into arrayh
        arr.push(randomColor())

    }
    //return that array
    return arr;
}


function randomColor(num){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    //rgb(r,g,b)
    return "rgb(" + r + ", " + g + ", " + b + ")";

}