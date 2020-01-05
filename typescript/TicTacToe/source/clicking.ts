import {qClassElements, qNumId} from "./constants";
import {opponentTurn, setTurn} from "./index";

export const enableListeners = () => {
    for (let i = 0; i < qClassElements.length; i++) {
        qClassElements[i].addEventListener("click", clickFn);
    }
};

export const disableListeners = () => {
    for (let i = 0; i < qClassElements.length; i++) {
        qClassElements[i].removeEventListener("click", clickFn);
    }
};

export const clickFn = (event: Event) => {
    console.log("clickFn: ", event.target);
    let elementId: string = (event.target as Element).id;

    setTurn(qNumId(elementId), 'X');
    opponentTurn();
};