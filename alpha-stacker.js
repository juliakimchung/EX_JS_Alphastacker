var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log("hi");

function stackLetter(theAlphabetArray) {
   var alphabetString = "";

	for( var i = 0; i < alphabet.length; i++) {
		

		alphabetString += alphabet[i];

		
		if ((i + 1 ) % 3 === 0) {

			alphabetString += " ";

			}

	    console.log("alphabetString", alphabetString);
	    }


}
stackLetter(alphabet);

