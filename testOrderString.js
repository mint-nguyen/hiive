"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orderString_1 = require("./orderString");
function testOrderString() {
    // Test 1: Standard alphabetical order
    console.assert((0, orderString_1.default)("HiiveIsLive") === "eehiiiilsvv", "Test 1 Failed");
    // Test 2: Standard alphabetical order with uppercase
    console.assert((0, orderString_1.default)("HELLO") === "ehllo", "Test 2 Failed");
    // Test 3: Standard alphabetical order with non-alphabetic characters
    console.assert((0, orderString_1.default)("Hello123") === "ehllo123", "Test 3 Failed");
    // Test 4: Standard alphabetical order with empty string
    console.assert((0, orderString_1.default)("") === "", "Test 4 Failed");
    // Test 5: Custom alphabet order, valid input
    console.assert((0, orderString_1.default)("HiiveIsLive", "zyxwvutsrqponmlkjihgfedcba") === "vvsliiiihee", "Test 5 Failed");
    // Test 6: Custom alphabet order with empty string
    console.assert((0, orderString_1.default)("", "zyxwvutsrqponmlkjihgfedcba") === "", "Test 6 Failed");
}
testOrderString();
