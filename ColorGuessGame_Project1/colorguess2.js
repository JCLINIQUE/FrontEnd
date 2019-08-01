var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");

var newGame = document.getElementById("new"); //reset
var msg = document.getElementById("msg");
var mode = document.getElementsByClassName("mode");

var squares = document.getElementsByClassName("square");
var numColors = 6;
var colorList = [];
var pickedColor;

// mode[1].addEventListener("click", function() {
//     alert("connected");
// })

Init();

function Init() {
    setupMode();
    setupSquaresAndInsideColors();
    reset();
}

function setupMode() {
    for(var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function() {
            mode[0].classList.remove("modeSelected");
            mode[1].classList.remove("modeSelected");
            this.classList.add("modeSelected");
            this.textContent === "简单模式" ? numColors = 3: numColors = 6;
            reset();
        });
    }
}
newGame.addEventListener("click", reset);
function reset() {
    colorList = generateOneRandomColor(numColors);
    pickedColor = colorList[Math.floor(generateRandom()*numColors)];
    colorDisplay.textContent = pickedColor;
    msg.textContent = " ";
    newGame.textContent = "换点新颜色";
    for(var i = 0; i < squares.length; i++) {
        if(i < numColors) {
            squares[i].style.display = "block";
            squares[i].style.background = colorList[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
}
function setupSquaresAndInsideColors() {
    console.log(colorList);
    console.log("picked color is "+ pickedColor);
    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.background;
            console.log("clicked color is " + clickedColor);
            if(clickedColor === pickedColor) {
                msg.textContent = "恭喜你，猜对啦！";
                newGame.textContent = "再来一局？"
                changeColorsIntoPickedColor(clickedColor);
                h1.style.background = clickedColor;
            } else {
                msg.textContent = "加油!再试试！";
                this.style.background = "#232323";
            }
        });
    }
}
function generateOneRandomColor(colors) {
    var arr = [];
    for(var i = 0; i < colors; i++) {
        var r = Math.floor(generateRandom()*256);
        var g = Math.floor(generateRandom()*256);
        var b = Math.floor(generateRandom()*256);
        var colorRepresentation = "rgb(" + r + ", " + g + ", " + b + ")";
        arr.push(colorRepresentation);
    }
    return arr;
}
function generateRandom() {
    var randomNum = Math.random();
    return randomNum;
}
function changeColorsIntoPickedColor(theColor) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = theColor;
    }
}

