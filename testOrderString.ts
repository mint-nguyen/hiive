import orderString from "./orderString";

function testOrderString() {
	// Test 1: Standard alphabetical order
	console.assert(orderString("HiiveIsLive") === "eehiiiilsvv", "Test 1 Failed");

	// Test 2: Standard alphabetical order with uppercase
	console.assert(orderString("HELLO") === "ehllo", "Test 2 Failed");

	// Test 3: Standard alphabetical order with non-alphabetic characters
	console.assert(orderString("Hello123") === "ehllo123", "Test 3 Failed");

	// Test 4: Standard alphabetical order with empty string
	console.assert(orderString("") === "", "Test 4 Failed");

	// Test 5: Custom alphabet order, valid input
	console.assert(
		orderString("HiiveIsLive", "zyxwvutsrqponmlkjihgfedcba") === "vvsliiiihee",
		"Test 5 Failed"
	);

	// Test 6: Custom alphabet order with empty string
	console.assert(
		orderString("", "zyxwvutsrqponmlkjihgfedcba") === "",
		"Test 6 Failed"
	);
}

testOrderString();
