function isPalinddrome(str) {
	str1=str.toLowerCase().replace(/[^a-z0-9]/g,"");
    console.log(str1);
	return str===str1.split("").reverse().join("");
}

console.log(isPalinddrome(`madam`));