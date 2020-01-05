var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
var qClassElements = document.getElementsByClassName('q');
var qNumId = function (qEl) {
    return parseInt(qEl.replace('q', ''));
};
var emptyQs = function () {
    var elementsArray = [];
    for (var i = 0; i < qClassElements.length; i++) {
        if (qClassElements[i].innerHTML === '') {
            elementsArray.push(qClassElements[i]);
        }
    }
    return elementsArray;
};
var isAllSame = function (elementsArray) {
    if (elementsArray.length == 0) {
        alert("isAllSame: Something wrong");
    }
    if (elementsArray[0].innerHTML === '') {
        return false;
    }
    for (var i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].innerHTML !== elementsArray[0].innerHTML) {
            return false;
        }
    }
    return true;
};
// const endGame = (winningSequence: Element[]) => {
//
// };
var checkForVictory = function () {
    var victory = false;
    for (var i = 0; i < winningCombos.length; i++) {
        var sequence = [
            qClassElements[winningCombos[i][0]],
            qClassElements[winningCombos[i][1]],
            qClassElements[winningCombos[i][2]],
        ];
        if (isAllSame(sequence)) {
            victory = true;
            //endGame(sequence);
            console.log("endGame: ", sequence);
            break;
        }
    }
    return victory;
};
var setTurn = function (index, letter) {
    qClassElements[index].innerHTML = letter;
};
var opponentChoice = function () {
    var element = emptyQs()[Math.floor(Math.random() * emptyQs().length)];
    return qNumId(element.id);
};
var opponentTurn = function () {
    disableListeners();
    setTimeout(function () {
        setTurn(opponentChoice(), 'O');
        if (checkForVictory()) {
        }
        else {
            enableListeners();
        }
    }, 500);
};
var clickFn = function (event) {
    console.log("clickFn: ", event.target);
    var id = event.target.id;
    setTurn(qNumId(id), 'X');
    if (!checkForVictory()) {
        opponentTurn();
    }
    else {
        disableListeners();
    }
};
var enableListeners = function () {
    for (var i = 0; i < qClassElements.length; i++) {
        qClassElements[i].addEventListener("click", clickFn);
    }
};
var disableListeners = function () {
    for (var i = 0; i < qClassElements.length; i++) {
        qClassElements[i].removeEventListener("click", clickFn);
    }
};
enableListeners();
var a = 3 + 3;
//# sourceMappingURL=index.js.map