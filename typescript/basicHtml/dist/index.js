var Turn;
(function (Turn) {
    Turn[Turn["HUMAN"] = 0] = "HUMAN";
    Turn[Turn["AI"] = 1] = "AI";
})(Turn || (Turn = {}));
var GameDone;
(function (GameDone) {
    GameDone[GameDone["HUMAN_WIN"] = 0] = "HUMAN_WIN";
    GameDone[GameDone["AI_WIN"] = 1] = "AI_WIN";
    GameDone[GameDone["INCOMPLETE"] = 2] = "INCOMPLETE";
    GameDone[GameDone["Draw"] = 3] = "Draw";
})(GameDone || (GameDone = {}));
window.addEventListener("load", function () {
    document.getElementById("reset").onclick = function () {
        window.location.reload(true);
    };
    var symbols = init();
    var playerSymbol = symbols[0];
    var computerSymbol = symbols[1];
    var random = Math.floor(Math.random() * 2) + 1;
    var turn;
    if (random == 1) {
        turn = Turn.HUMAN;
    }
    else {
        turn = Turn.AI;
    }
    do {
        if (turn == Turn.HUMAN) {
            var playerMove = prompt('Choose box');
            turn = Turn.AI;
        }
        else {
            // ...
            turn = Turn.HUMAN;
        }
    } while (isGameComplete() == GameDone.INCOMPLETE);
    alert("isGameComplete is: " + isGameComplete);
});
function isGameComplete() {
    return GameDone.INCOMPLETE;
}
function init() {
    var computerSymbol = '';
    var playerSymbol = prompt('Choose Your Move Type X or O');
    switch (playerSymbol) {
        case "X":
            computerSymbol = "O";
            break;
        case "O":
            computerSymbol = "X";
            break;
        default:
            alert("Sorry. Please type X or O");
            window.location.reload(true);
            break;
    }
    return [playerSymbol, computerSymbol];
}
//# sourceMappingURL=index.js.map