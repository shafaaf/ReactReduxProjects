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
var endGame = function (sequence) {
    console.log("endGame: ", sequence);
    for (var i = 0; i < sequence.length; i++) {
        sequence[i].classList.add('winner');
    }
};
var checkForVictory = function () {
    for (var i = 0; i < winningCombos.length; i++) {
        var sequence = [
            qClassElements[winningCombos[i][0]],
            qClassElements[winningCombos[i][1]],
            qClassElements[winningCombos[i][2]],
        ];
        if (isAllSame(sequence)) {
            endGame(sequence);
            return true;
        }
    }
    return false;
};
var setTurn = function (index, letter) {
    qClassElements[index].innerHTML = letter;
};
var opponentChoiceRandom = function () {
    var element = emptyQs()[Math.floor(Math.random() * emptyQs().length)];
    return qNumId(element.id);
};
var opponentTurn = function () {
    disableListeners();
    setTimeout(function () {
        setTurn(opponentChoiceRandom(), 'O');
        if (checkForVictory()) {
        }
        else {
            enableListeners();
        }
    }, 500);
};
var clickFn = function (event) {
    console.log("clickFn: ", event.target);
    var element = event.target;
    var id = element.id;
    if ((element.innerText == 'X') || (element.innerText == 'O')) {
        return;
    }
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
//# sourceMappingURL=index.js.map