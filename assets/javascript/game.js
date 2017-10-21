


//NOTE: I couldn't get my last letter to show up when completing the word. BORING would end up B_RING.


//Variables
var wordBank =['boring','simple','tedious','dim'];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10;
var rightGuessCounter = 0;
var sameKey = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];

//Functions

function startGame() {
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	rightGuessCounter = 0;
	guessesLeft = 10;
	wrongLetters =[];
	blanksAndSuccesses =[];
	sameKey = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	for(var i = 0; i< numBlanks; i++) {
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}
 
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
}

function compareLetters(userKey) {
	if(choosenWord.indexOf(userKey) > -1) {
		for(var i = 0; i < numBlanks; i++) {
			if(lettersInWord[i] === userKey) {
				rightGuessCounter++;
				blanksAndSuccesses[i] = userKey;
				document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
			}	
		}
	}
	else {
		wrongLetters.push(userKey);
		guessesLeft--;
		document.getElementById('numGuesses').innerHTML = guessesLeft;
		document.getElementById('wrongGuesses').innerHTML = wrongLetters;
	}	
}

function winLose() {
	if(rightGuessCounter === numBlanks) {
		winCount++;
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You won... Press "OK" to keep playing.');
		reset();
	}

	else if(guessesLeft === 0) {
		loseCount++;
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lost... Press "OK" to keep losing.');
		reset();
	}
}

function reset() {
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 10;
	wrongLetters =[];
	blanksAndSuccesses =[];
	sameKey = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	test=false;
	startGame();
}

startGame();

document.onkeyup = function(event) {
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < sameKey.length; i++) {	
		if(letterGuessed === sameKey[i] && test === true) {
			var spliceDword = sameKey.splice(i,1);
			compareLetters(letterGuessed);
			winLose();
		}
	}		
}