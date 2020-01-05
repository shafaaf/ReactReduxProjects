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
var clickFn = function (event) {
    console.log("clickFn: ", event.target);
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
console.log("Hiz");
enableListeners();
// disableListeners();
var a = 3 + 3;
//# sourceMappingURL=index.js.map