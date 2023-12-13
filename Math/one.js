const prompt=require("prompt-sync")({sigint:true});
function fact(n) {
	if (n===0) {
		return 1;
	}else{
		result=1;
		for (var i = 1; i <=n; i++) {
		   result=result*i;
		}
	}
	return result;
}

let num=prompt('enter number:-');

console.log(fact(num));