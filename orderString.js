"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderString(str, customAlphabet) {
    if (!customAlphabet) {
        // Standard alphabetical order
        return str.toLowerCase().split("").sort().join("");
    }
    else {
        // Custom alphabet order
        str = str.toLowerCase();
        customAlphabet.toLowerCase();
        var alphabetMap_1 = {};
        for (var i = 0; i < customAlphabet.length; i++) {
            alphabetMap_1[customAlphabet[i]] = i;
        }
        return str
            .split("")
            .sort(function (a, b) {
            return (alphabetMap_1[a] || 0) - (alphabetMap_1[b] || 0);
        })
            .join("");
    }
}
exports.default = orderString;
