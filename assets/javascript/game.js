		document.addEventListener("keypress", keyPressed);

		function keyPressed() {
		    var x = event.keyCode;
		    var y = String.fromCharCode(x).toLowerCase();
		    document.getElementById("demo").innerHTML = y;

		    game2(y);
		}



		function getWord() {
			var words = ['cat', 'tree', 'swing', 'around', 'scientist'];

			var rand;
			
			rand = words[Math.floor(Math.random() * words.length)];
			
			var word = rand;
			testWord = word.split('');
			newWord = word.replace(/[a-z]/g, '_').split('');

			document.getElementById("currentWord").innerHTML = newWord;
		}



		////////////  Start
		
		var winCounter = 0;
		document.getElementById("wins").innerHTML = winCounter;
		
		var remainingGuesses = 12;
		document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

		var guessedLetters = [];
		var newWord = [];
		var testWord = [];

		getWord();
		////////////




		function game2(guess) {
			if(remainingGuesses == 0){
				return "Game Over";
			}

			if(guessedLetters.indexOf(guess) == -1){
				guessedLetters.push(guess);
				remainingGuesses--;

				document.getElementById("guessedLetters").innerHTML = guessedLetters;
				document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
				

				for(var i = 0; i < testWord.length; i++){
					if(guess === testWord[i]){
						newWord[i] = guess;
					}
				}
				
				document.getElementById("currentWord").innerHTML = newWord;

				checkWin(newWord, testWord);

			}

			else
				return;
			

			

		
		}

		function checkWin(originalWord, guessedWord){
			if(newWord.toString() == testWord.toString()){
				winCounter++;
				remainingGuesses = 12;
				guessedLetters = [];
				

				document.getElementById("wins").innerHTML = winCounter;
				document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
				document.getElementById("guessedLetters").innerHTML = guessedLetters;

				getWord();
			}

			else if(remainingGuesses == 0){
				winCounter = 0;
				remainingGuesses = 12;
				guessedLetters = [];

				document.getElementById("wins").innerHTML = winCounter;
				document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
				document.getElementById("guessedLetters").innerHTML = guessedLetters;

				getWord();
			}

			
			
		}