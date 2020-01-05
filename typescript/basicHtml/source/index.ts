enum Turn {
    HUMAN,
    AI
}
enum GameDone {
    HUMAN_WIN,
    AI_WIN,
    INCOMPLETE,
    Draw
}

window.addEventListener("load", function() {
    document.getElementById("reset")!.onclick = function () {
        window.location.reload(true);
    };

    let symbols = init();
    const playerSymbol = symbols[0];
    const computerSymbol = symbols[1];

    let random = Math.floor(Math.random() * 2) + 1;

    let turn: Turn;
    if (random == 1) {
        turn = Turn.HUMAN;
    } else {
        turn = Turn.AI;
    }

    do {
        if (turn == Turn.HUMAN) {
            const playerMove = prompt('Choose box');

            turn = Turn.AI;
        } else {
            // ...
            turn = Turn.HUMAN;
        }
    } while (isGameComplete() == GameDone.INCOMPLETE)

    alert("isGameComplete is: " + isGameComplete);
});

function isGameComplete(): GameDone {
    return GameDone.INCOMPLETE;
}

function init():[string,string] {
    let computerSymbol = '';
    const playerSymbol = prompt('Choose Your Move Type X or O');

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
    return [playerSymbol!, computerSymbol];
}
