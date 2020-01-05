(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants", "./index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constants_1 = require("./constants");
    var index_1 = require("./index");
    exports.enableListeners = function () {
        for (var i = 0; i < constants_1.qClassElements.length; i++) {
            constants_1.qClassElements[i].addEventListener("click", exports.clickFn);
        }
    };
    exports.disableListeners = function () {
        for (var i = 0; i < constants_1.qClassElements.length; i++) {
            constants_1.qClassElements[i].removeEventListener("click", exports.clickFn);
        }
    };
    exports.clickFn = function (event) {
        console.log("clickFn: ", event.target);
        var elementId = event.target.id;
        index_1.setTurn(constants_1.qNumId(elementId), 'X');
        index_1.opponentTurn();
    };
});
//# sourceMappingURL=clicking.js.map