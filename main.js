console.log("hello world");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];

var letters ="";
	for (var i=0; i < alphabet.length; i++){
		letters += alphabet[i];
		console.log(letters);
}
var letters2 = "";
for (var i = 0; i < alphabet.length; i++){
	if(i % 3 ===0){
		letters2 += " ";


	}
letters2 += alphabet[i];
console.log(letters2);
}

