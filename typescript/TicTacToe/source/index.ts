const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let qClassElements = document.getElementsByClassName('q');

const qNumId = (qEl: string): number => {
    return parseInt(qEl.replace('q', ''));
};

const emptyQs = (): Element[] => {
    let elementsArray: Array<Element> = [];
    for (let i = 0; i < qClassElements.length; i++) {
        if (qClassElements[i].innerHTML === '') {
            elementsArray.push(qClassElements[i]);
        }
    }
    return elementsArray;
};

const isAllSame = (htmlCollection: HTMLCollection): boolean => {
    if (htmlCollection.length == 0) {
        return true;
    }
    if (htmlCollection[0].innerHTML === '') {
        return false;
    }
    for (let i = 0; i < htmlCollection.length; i++) {
        if (htmlCollection[i].innerHTML !== htmlCollection[0].innerHTML) {
            return false;
        }
    }
    return true;
};

const setTurn = (index: number, letter: string) => {
    qClassElements[index].innerHTML = letter;
};

let opponentChoice = (): number => {
    let element = emptyQs()[Math.floor(Math.random() * emptyQs().length)];
    return qNumId(element.id);
};

let opponentTurn = () => {
    disableListeners();
    setTimeout(() => {
        setTurn(opponentChoice(), 'O');
        enableListeners();
    }, 500);
};

let clickFn = (event: Event) => {
    console.log("clickFn: ", event.target);
    let id = (event.target as HTMLElement).id;
    setTurn(qNumId(id), 'X');
    opponentTurn();
};

const enableListeners = () => {
    for (let i = 0; i < qClassElements.length; i++) {
        qClassElements[i].addEventListener("click", clickFn);
    }
};

const disableListeners = () => {
    for (let i = 0; i < qClassElements.length; i++) {
        qClassElements[i].removeEventListener("click", clickFn);
    }
};

enableListeners();

const a = 3 + 3;
