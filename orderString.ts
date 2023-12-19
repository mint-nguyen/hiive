function orderString(str: string, customAlphabet?: string): string {
	if (!customAlphabet) {
		// Standard alphabetical order
		return str.toLowerCase().split("").sort().join("");
	} else {
		// Custom alphabet order
		str = str.toLowerCase();
		customAlphabet.toLowerCase();
		const alphabetMap = {};
		for (let i = 0; i < customAlphabet.length; i++) {
			alphabetMap[customAlphabet[i]] = i;
		}

		return str
			.split("")
			.sort((a, b) => {
				return (alphabetMap[a] || 0) - (alphabetMap[b] || 0);
			})
			.join("");
	}
}

console.log(orderString("HiiveIsLive"));
console.log(orderString("HiiveIsLive", "zyxwvutsrqponmlkjihgfedcba"));
