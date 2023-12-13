function isAnagram(str1,str2) {
	let n1=str1.length;
	let n2=str2.lenght;

	if (n1!==n2) {
		return false;
	}

	str1=str1.split("").sort().join("");
	str2=str2.split("").sort().join("");

	for (var i = 0; i < n1; i++) {
		if (str1[i]!==str2[i]) {
			return false;
		}
	}
	return true;
}
console.log(isAnagram('hello','elloh'));