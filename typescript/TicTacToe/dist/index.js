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
var emptyQs = function (htmlCollection) {
    var elementsArray = [];
    for (var i = 0; i < htmlCollection.length; i++) {
        if (htmlCollection[i].innerHTML === '') {
            elementsArray.push(htmlCollection[i]);
        }
    }
    return elementsArray;
};
var isAllSame = function (htmlCollection) {
    if (htmlCollection.length == 0) {
        return true;
    }
    if (htmlCollection[0].innerHTML === '') {
        return false;
    }
    for (var i = 0; i < htmlCollection.length; i++) {
        if (htmlCollection[i].innerHTML !== htmlCollection[0].innerHTML) {
            return false;
        }
    }
    return true;
};
var setTurn = function (index, letter) {
    qClassElements[index].innerHTML = letter;
};
var opponentChoice = function () {
    return 0;
};
var opponentTurn = function () {
    disableListeners();
    setTimeout(function () {
        setTurn(opponentChoice(), 'O');
        enableListeners();
    }, 2000);
};
var clickFn = function (event) {
    console.log("clickFn: ", event.target);
    var id = event.target.id;
    setTurn(qNumId(id), 'X');
    opponentTurn();
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