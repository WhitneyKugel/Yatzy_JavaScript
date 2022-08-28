// This is a playable game of the generic dice poker game called "Yatzy"
function Yatzy() {
	//Game Music
	function PlayMusic() {
		document.getElementById("gamemusic").play();
	}

	function PauseMusic() {
		document.getElementById("gamemusic").pause();
	}


	//SFX

	//Rolling Dice SFX
	function RollingDiceSFX() {
		document.getElementById("rollsound").play();
	}

	//Yatzy Rolled SFX
	function RolledYatzySFX() {
		document.getElementById("yaztysfx").play();
	}

	//End of Game SFX
	function GameEndSFX() {
		document.getElementById("clapping").play();
	}


	//Declare Variables for new game setup. Multiple sections to set up. 

	//User name
	var playerName = "";
	var playerNameEntered = false;

	//Screen State
	var continuegame = false;

	//Rolled Dice
	var rolledDice = [];
	var sortedRolledDice = [];
	var die1Saved = false;
	var die2Saved = false;
	var die3Saved = false;
	var die4Saved = false;
	var die5Saved = false;
	var rollNumber = 0;
	var rolling = false;

	//Category Scores
	var ones = 0;
	var twos = 0;
	var threes = 0;
	var fours = 0;
	var fives = 0;
	var sixes = 0;
	var upperScoreSubTotal = 0;
	var upperScoreBonus = 0;
	var upperScoreTotal = 0;
	var threeOfAKind = 0;
	var fourOfAKind = 0;
	var fullHouse = 0;
	var smallStraight = 0;
	var largeStraight = 0;
	var chance = 0;
	var yatzy = 0;
	var lowerScoreTotal = 0;
	var grandTotalScore = 0;

	//Boolean for determining if the category has been score for the current game or not
	var onesScored = false;
	var twosScored = false;
	var threesScored = false;
	var foursScored = false;
	var fivesScored = false;
	var sixesScored = false;
	var threeOfAKindScored = false;
	var fourOfAKindScored = false;
	var fullHouseScored = false;
	var smallStraightScored = false;
	var largeStraightScored = false;
	var chanceScored = false;
	var yatzycheck = false;
	var yatzyScratched = false;
	var yatzyScored = false;
	var bonusYatzyScored = false;
	var scoredThisRound = false;
	var endOfGame = false;
	var gameMusic = true;
	var gameSFX = true;

	function ResetVars() {
		//Rolled Dice
		rolledDice = [];
		sortedRolledDice = [];
		die1Saved = false;
		die2Saved = false;
		die3Saved = false;
		die4Saved = false;
		die5Saved = false;
		rollNumber = 0;

		//Category Scores
		ones = 0;
		twos = 0;
		threes = 0;
		fours = 0;
		fives = 0;
		sixes = 0;
		upperScoreSubTotal = 0;
		upperScoreBonus = 0;
		upperScoreTotal = 0;
		threeOfAKind = 0;
		fourOfAKind = 0;
		fullHouse = 0;
		smallStraight = 0;
		largeStraight = 0;
		chance = 0;
		yatzy = 0;
		additionalYatzy = 0;
		lowerScoreTotal = 0;
		grandTotalScore = 0;

		//Boolean for determining if the category has been score for the current game or not
		onesScored = false;
		twosScored = false;
		threesScored = false;
		foursScored = false;
		fivesScored = false;
		sixesScored = false;
		threeOfAKindScored = false;
		fourOfAKindScored = false;
		fullHouseScored = false;
		smallStraightScored = false;
		largeStraightScored = false;
		chanceScored = false;
		yatzyScratched = false;
		yatzyScored = false;
		bonusYatzyScored = false;
		scoredThisRound = false;
		endOfGame = false;

		document.getElementById("onesscore").innerHTML = "";
		document.getElementById("twosscore").innerHTML = "";
		document.getElementById("threesscore").innerHTML = "";
		document.getElementById("foursscore").innerHTML = "";
		document.getElementById("fivesscore").innerHTML = "";
		document.getElementById("sixesscore").innerHTML = "";
		document.getElementById("subtotalscore").innerHTML = "";
		document.getElementById("upperscore").innerHTML = "";
		document.getElementById("upperscoretotal").innerHTML = "";
		document.getElementById("threeofakindscore").innerHTML = "";
		document.getElementById("fourofakindscore").innerHTML = "";
		document.getElementById("smallstraightscore").innerHTML = "";
		document.getElementById("largestraightscore").innerHTML = "";
		document.getElementById("fullhousescore").innerHTML = "";
		document.getElementById("chancescore").innerHTML = "";
		document.getElementById("yatzyscore").innerHTML = "";
		document.getElementById("lowerscoretotal").innerHTML = "";
		document.getElementById("rollmessage").innerHTML = "";
		document.getElementById("grandtotalscore").innerHTML = "";
		document.getElementById("rollmessage").innerHTML = "LET'S PLAY!";
		for (var dicecount = 1; dicecount < 6; dicecount++) {
			document.getElementById("die" + dicecount).style.display = "none";
		}
		document.getElementById("backtogamebutton").style.display = "block";
	}


	//Function to sum all dice in array
	function SumAllDice(total, number) {
		return total + number;
	}

	/*Get player name
	function PlayerName() {
		playerName = prompt("Enter your name (under 20 character)");
		if (playerName.length > 20 || playerName.length == 0) {
			PlayerName();
		}else{
			playerNameEntered = true;
			document.getElementById("player").innerHTML = "Ready to play, " + playerName + "!";
		}
	}*/

	//Start New Game
	document.getElementById("newgamebutton").onclick = function NewGame() {
		/*if (playerNameEntered == false) {
			PlayerName();
		}*/
		if (gameMusic == true) {
			PlayMusic();
		}
		continuegame = true;
		document.getElementById("mainmenuscreen").style.display = "none";
		document.getElementById("continuebutton").style.display = "block";
		document.getElementById("mainmenubuttonfromgame").style.display = "block";
		document.getElementById("gamescreen").style.display = "grid";
		ResetVars();
	}




	//Continue Game Show or Hide
	function continueGameButton() {
		if (continuegame == false) {
			document.getElementById("continuebutton").style.display = "none";
			document.getElementById("backtogamebutton").style.display = "none";
		} else {
			document.getElementById("continuebutton").style.display = "block";
			document.getElementById("backtogamebutton").style.display = "block";
		}
	}

	//To Current Game From Main Menu
	document.getElementById("continuebutton").onclick = function ContinueGame() {
		document.getElementById("mainmenuscreen").style.display = "none";
		document.getElementById("gamescreen").style.display = "grid";
	}

	//End of Game Screen
	function EndOfGame() {
		endOfGame = true;
		document.getElementById("rollmessage").innerHTML = "CONGRATULATIONS!\nYou scored " + grandTotalScore + "\npoints this game!";
		document.getElementById("rolldicebutton").innerHTML = "Play Again?";
		if (gameSFX == true) {
			GameEndSFX();
		}
	}

	//To Main Menu from Game
	document.getElementById("mainmenubuttonfromgame").onclick = function GoHome() {
		document.getElementById("gamescreen").style.display = "none";
		document.getElementById("mainmenuscreen").style.display = "grid";
		continueGameButton();
	}

	//To About screen from Main Screen
	document.getElementById("aboutbutton").onclick = function ToAboutPage() {
		document.getElementById("mainmenuscreen").style.display = "none";
		document.getElementById("aboutscreen").style.display = "grid";
	}

	//To About screen from Game Screen
	document.getElementById("aboutbuttonfromgame").onclick = function ToAboutPageFromGame() {
		document.getElementById("gamescreen").style.display = "none";
		document.getElementById("aboutscreen").style.display = "grid";

	}

	//Back to game from About Screen
	document.getElementById("backtogamebutton").onclick = function BackToGame() {
		document.getElementById("aboutscreen").style.display = "none";
		document.getElementById("gamescreen").style.display = "grid";
		continueGameButton();
	}

	//To Main Menu from About Screen
	document.getElementById("mainmenubuttonfromabout").onclick = function FromAboutPage() {
		document.getElementById("aboutscreen").style.display = "none";
		document.getElementById("mainmenuscreen").style.display = "grid";
	}


	//To Whitney Kugel's profile website
	document.getElementById("homesitebutton").onclick = function KugelSite() {
		// location.replace("https://www.whitneykugel.com")
		window.open("https://www.whitneykugel.com", '_blank').focus();
	}


	//Game Music Off/On
	document.getElementById("musiccontrol").onclick = function GameMusic() {
		if (gameMusic == true) {
			gameMusic = false;
			document.getElementById("musiccontrol").innerHTML = "Music Off";
			PauseMusic();
		} else {
			gameMusic = true;
			document.getElementById("musiccontrol").innerHTML = "Music On";
			PlayMusic();
		}
	}

	//Game SFX Off/On
	document.getElementById("soundcontrol").onclick = function GameSFX() {
		if (gameSFX == true) {
			gameSFX = false;
			document.getElementById("soundcontrol").innerHTML = "SFX Off";
		} else {
			gameSFX = true;
			document.getElementById("soundcontrol").innerHTML = "SFX On";
		}
	}


	//Randomization Animation. Individualized for optimization in saves and rerolls.
	function randomizationAnimation1() {
		rolling = true;
		rolledDice[0] = Math.ceil((Math.random() * 6));
		document.getElementById("die1").src = "images/die_side_" + rolledDice[0] + ".png";
		setTimeout(stopRandom1, 700);
	}

	function randomizationAnimation2() {
		rolling = true;
		rolledDice[1] = Math.ceil((Math.random() * 6));
		document.getElementById("die2").src = "images/die_side_" + rolledDice[1] + ".png";
		setTimeout(stopRandom2, 700);
	}

	function randomizationAnimation3() {
		rolling = true;
		rolledDice[2] = Math.ceil((Math.random() * 6));
		document.getElementById("die3").src = "images/die_side_" + rolledDice[2] + ".png";
		setTimeout(stopRandom3, 700);
	}

	function randomizationAnimation4() {
		rolling = true;
		rolledDice[3] = Math.ceil((Math.random() * 6));
		document.getElementById("die4").src = "images/die_side_" + rolledDice[3] + ".png";
		setTimeout(stopRandom4, 700);
	}

	function randomizationAnimation5() {
		rolling = true;
		rolledDice[4] = Math.ceil((Math.random() * 6));
		document.getElementById("die5").src = "images/die_side_" + rolledDice[4] + ".png";
		setTimeout(stopRandom5, 700);
	}

	//Stops Randomization Animation. Individualized for dice to be able to be saved.
	function stopRandom1() {
		clearTimeout(myVar1);
		rolling = false;
	}

	function stopRandom2() {
		clearTimeout(myVar2);
		rolling = false;
	}

	function stopRandom3() {
		clearTimeout(myVar3);
		rolling = false;
	}

	function stopRandom4() {
		clearTimeout(myVar4);
		rolling = false;
	}

	function stopRandom5() {
		clearTimeout(myVar5);
		rolling = false;
	}


	//Determines which die image to display based on roll
	function SingleDice() {
		if (die1Saved == false) {
			myVar1 = setInterval(randomizationAnimation1, 50);
			randomizationAnimation1();
		} else {
			null;
		}

		if (die2Saved == false) {
			myVar2 = setInterval(randomizationAnimation2, 50);
			randomizationAnimation2();

		} else {
			null;
		}

		if (die3Saved == false) {
			myVar3 = setInterval(randomizationAnimation3, 50);
			randomizationAnimation3();
		} else {
			null;
		}

		if (die4Saved == false) {
			myVar4 = setInterval(randomizationAnimation4, 50);
			randomizationAnimation4();
		} else {
			null;
		}

		if (die5Saved == false) {
			myVar5 = setInterval(randomizationAnimation5, 50);
			randomizationAnimation5();
		} else {
			null;
		}
	}

	//Roll button action
	document.getElementById("rolldicebutton").onclick = function RollDice() {
		if (endOfGame == false) {
			if (rollNumber < 3) {
				if (rollNumber === 0) {
					die1Saved = false;
					die2Saved = false;
					die3Saved = false;
					die4Saved = false;
					die5Saved = false;
					scoredThisRound = false;
					rolledDice.length = 0;
					document.getElementById("rollmessage").innerHTML = "ROLL 1!";
				} else if (rollNumber === 1) {
					document.getElementById("rollmessage").innerHTML = "ROLL 2!";
				} else if (rollNumber === 2) {
					document.getElementById("rollmessage").innerHTML = "ROLL 3!";
				} else {
					null;
				}
				rollNumber++;
				for (var dicecount = 1; dicecount < 6; dicecount++) {
					document.getElementById("die" + dicecount).style.display = "grid";
				}
				if (rolling == false) {
					SingleDice();
					if (gameSFX == true) {
						RollingDiceSFX();
					}
				} else {
					null;
				}
			} else {
				document.getElementById("rollmessage").innerHTML = "NO MORE ROLLS.";
			}
		} else {
			ResetVars();
			RollDice();
			document.getElementById("rolldicebutton").innerHTML = "Roll Dice!";
		}
	}

	//Click to Save Die 1
	document.getElementById("die1").onclick = function Saving1Dice() {
		if (die1Saved == false) {
			document.getElementById("die1").src = "images/black_die_side_" + rolledDice[0] + ".png";
			die1Saved = true;
		} else {
			document.getElementById("die1").src = "images/die_side_" + rolledDice[0] + ".png";
			die1Saved = false;
		}
	}

	//Click to Save Die 2
	document.getElementById("die2").onclick = function Saving2Dice() {
		if (die2Saved == false) {
			document.getElementById("die2").src = "images/black_die_side_" + rolledDice[1] + ".png";
			die2Saved = true;
		} else {
			document.getElementById("die2").src = "images/die_side_" + rolledDice[1] + ".png";
			die2Saved = false;
		}
	}

	//Click to Save Die 3
	document.getElementById("die3").onclick = function Saving3Dice() {
		if (die3Saved == false) {
			document.getElementById("die3").src = "images/black_die_side_" + rolledDice[2] + ".png";
			die3Saved = true;
		} else {
			document.getElementById("die3").src = "images/die_side_" + rolledDice[2] + ".png";
			die3Saved = false;
		}
	}

	//Click to Save Die 4
	document.getElementById("die4").onclick = function Saving4Dice() {
		if (die4Saved == false) {
			document.getElementById("die4").src = "images/black_die_side_" + rolledDice[3] + ".png";
			die4Saved = true;
		} else {
			document.getElementById("die4").src = "images/die_side_" + rolledDice[3] + ".png";
			die4Saved = false;
		}
	}

	//Click to Save Die 5
	document.getElementById("die5").onclick = function Saving5Dice() {
		if (die5Saved == false) {
			document.getElementById("die5").src = "images/black_die_side_" + rolledDice[4] + ".png";
			die5Saved = true;
		} else {
			document.getElementById("die5").src = "images/die_side_" + rolledDice[4] + ".png";
			die5Saved = false;
		}
	}


	//Check for available moves
	function EndGameCheck() {
		if (onesScored && twosScored && threesScored && foursScored && fivesScored && sixesScored && threeOfAKindScored && fourOfAKindScored && smallStraightScored && largeStraightScored && fullHouseScored && chanceScored && (yatzyScored || yatzyScratched)) {
			EndOfGame();
		} else {
			PlayGame();
		}
	}

	//New Game
	function PlayGame() {
		//Ones score
		document.getElementById("onesscore").onclick = function OnesScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED!";
			} else {
				if (onesScored == false) {
					for (var count = 0; count < 6; count++) {
						if (rolledDice[count] == 1) {
							ones += 1;
							upperScoreSubTotal += 1;
						} else {
							ones += 0;
						}
					}
					onesScored = true;
					scoredThisRound = true;
					rollNumber = 0;
					document.getElementById("onesscore").innerHTML = ones;
					document.getElementById("subtotalscore").innerHTML = upperScoreSubTotal;
					if (ones == 1) {
						document.getElementById("rollmessage").innerHTML = "Ones Scored: " + ones + " point!";
					} else {
						document.getElementById("rollmessage").innerHTML = "Ones Scored: " + ones + " points!";
					}
					UpperTotal();
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED ONES!";
				}
			}
			EndGameCheck();
		}

		//Twos score
		document.getElementById("twosscore").onclick = function TwosScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (twosScored == false) {
					for (var count = 0; count < 6; count++) {
						if (rolledDice[count] == 2) {
							twos += 2;
							upperScoreSubTotal += 2;
						} else {
							twos += 0;
						}
					}
					twosScored = true;
					scoredThisRound = true;
					rollNumber = 0;
					document.getElementById("twosscore").innerHTML = twos;
					document.getElementById("subtotalscore").innerHTML = upperScoreSubTotal;
					document.getElementById("rollmessage").innerHTML = "Twos Scored: " + twos + " points!";
					UpperTotal();
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED TWOS!";
				}
			}
			EndGameCheck();
		}

		//Threes score
		document.getElementById("threesscore").onclick = function ThreesScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (threesScored == false) {
					for (var count = 0; count < 6; count++) {
						if (rolledDice[count] == 3) {
							threes += 3;
							upperScoreSubTotal += 3;
						} else {
							threes += 0;
						}
					}
					threesScored = true;
					scoredThisRound = true;
					rollNumber = 0;
					document.getElementById("threesscore").innerHTML = threes;
					document.getElementById("subtotalscore").innerHTML = upperScoreSubTotal;
					document.getElementById("rollmessage").innerHTML = "Threes Scored: " + threes + " points!";
					UpperTotal();
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THREES!";
				}
			}
			EndGameCheck();
		}

		//Fours score
		document.getElementById("foursscore").onclick = function FoursScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (foursScored == false) {
					for (var count = 0; count < 6; count++) {
						if (rolledDice[count] == 4) {
							fours += 4;
							upperScoreSubTotal += 4;
						} else {
							fours += 0;
						}
					}
					foursScored = true;
					scoredThisRound = true;
					rollNumber = 0;
					document.getElementById("foursscore").innerHTML = fours;
					document.getElementById("subtotalscore").innerHTML = upperScoreSubTotal;
					document.getElementById("rollmessage").innerHTML = "Fours Scored: " + fours + " points!";
					UpperTotal();
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED FOURS!";
				}
			}
			EndGameCheck();
		}

		//Fives score
		document.getElementById("fivesscore").onclick = function FivesScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (fivesScored == false) {
					for (var count = 0; count < 6; count++) {
						if (rolledDice[count] == 5) {
							fives += 5;
							upperScoreSubTotal += 5;
						} else {
							fives += 0;
						}
					}
					fivesScored = true;
					scoredThisRound = true;
					rollNumber = 0;
					document.getElementById("fivesscore").innerHTML = fives;
					document.getElementById("subtotalscore").innerHTML = upperScoreSubTotal;
					document.getElementById("rollmessage").innerHTML = "Fives Scored: " + fives + " points!";
					UpperTotal();
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED FIVES!";
				}
			}
			EndGameCheck();
		}

		//Sixes score
		document.getElementById("sixesscore").onclick = function SixesScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (sixesScored == false) {
					for (var count = 0; count < 6; count++) {
						if (rolledDice[count] == 6) {
							sixes += 6;
							upperScoreSubTotal += 6;
						} else {
							sixes += 0;
						}
					}
					sixesScored = true;
					scoredThisRound = true;
					rollNumber = 0;
					document.getElementById("sixesscore").innerHTML = sixes;
					document.getElementById("subtotalscore").innerHTML = upperScoreSubTotal;
					document.getElementById("rollmessage").innerHTML = "Sixes Scored: " + sixes + " points!";
					UpperTotal();
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED SIXES!";
				}
			}
			EndGameCheck();
		}

		//Upper Score Bonus Check
		function BonusPoints() {
			if (upperScoreSubTotal >= 63) {
				upperScoreBonus = 35;
			} else {
				upperScoreBonus = 0;
				upperScoreSubTotal += 0;
			}
			document.getElementById("upperscore").innerHTML = upperScoreBonus;
		}

		//Upper Score Total
		function UpperTotal() {
			BonusPoints();
			RecalculateTotal();
			upperScoreTotal = upperScoreSubTotal + upperScoreBonus;
			grandTotalScore = upperScoreTotal + lowerScoreTotal;
			document.getElementById("upperscoretotal").innerHTML = upperScoreTotal;
			document.getElementById("grandtotalscore").innerHTML = grandTotalScore;
		}

		//Three of a Kind Score
		document.getElementById("threeofakindscore").onclick = function ThreeOfAKindScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (threeOfAKindScored == false) {
					rollNumber = 0;
					sortedRolledDice = rolledDice.sort()
					for (var number = 0; number < 3; number++) {
						if (sortedRolledDice[number] == sortedRolledDice[number + 1] && sortedRolledDice[number + 1] == sortedRolledDice[number + 2]) {
							threeOfAKind = rolledDice.reduce(SumAllDice);
							lowerScoreTotal += threeOfAKind;
							RecalculateTotal();
							document.getElementById("threeofakindscore").innerHTML = sortedRolledDice.reduce(SumAllDice);
							document.getElementById("lowerscoretotal").innerHTML = lowerScoreTotal;
							document.getElementById("rollmessage").innerHTML = "Three of a Kind: " + threeOfAKind + " points!";
							threeOfAKindScored = true;
							scoredThisRound = true;
						} else {
							if (threeOfAKindScored == false) {
								threeOfAKindScored = true;
								scoredThisRound = true;
								document.getElementById("rollmessage").innerHTML = "No Three of a kind!";
								document.getElementById("threeofakindscore").innerHTML = 0;
							}
						}
					}
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THREE OF A KIND!";
				}
			}
			EndGameCheck();
		}

		//Four of a Kind Score
		document.getElementById("fourofakindscore").onclick = function FourOfAKindScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (fourOfAKindScored == false) {
					rollNumber = 0;
					sortedRolledDice = rolledDice.sort()
					for (var number = 0; number < 3; number++) {
						if (sortedRolledDice[number] == sortedRolledDice[number + 1] && sortedRolledDice[number + 1] == sortedRolledDice[number + 2] && sortedRolledDice[number] == sortedRolledDice[number + 3]) {
							fourOfAKind = rolledDice.reduce(SumAllDice);
							lowerScoreTotal += fourOfAKind;
							RecalculateTotal();
							document.getElementById("fourofakindscore").innerHTML = sortedRolledDice.reduce(SumAllDice);
							document.getElementById("lowerscoretotal").innerHTML = lowerScoreTotal;
							document.getElementById("rollmessage").innerHTML = "Four of a Kind: " + fourOfAKind + " points!";
							fourOfAKindScored = true;
							scoredThisRound = true;
						} else {
							if (fourOfAKindScored == false) {
								fourOfAKindScored = true;
								scoredThisRound = true;
								document.getElementById("rollmessage").innerHTML = "No Four of a kind!";
								document.getElementById("fourofakindscore").innerHTML = 0;
							}
						}
					}
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED FOUR OF A KIND!";
				}
			}
			EndGameCheck();
		}

		//Small Straight Score
		document.getElementById("smallstraightscore").onclick = function SmallStraightScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (smallStraightScored == false) {
					smallStraightScored = true;
					scoredThisRound = true;
					rollNumber = 0;
					sortedRolledDice = rolledDice.sort().toString();
					let unique = [...new Set(sortedRolledDice)]
					if (unique == "1,,,2,3,4" || unique == "1,,,2,3,4,5" || unique == "1,,,2,3,4,6" || unique == "2,,,3,4,5" || unique == "2,,,3,4,5,6" || unique == "3,,,4,5,6" || unique == "1,,,3,4,5,6") {
						smallStraight = 30;
						lowerScoreTotal += 30;
						RecalculateTotal();
						document.getElementById("smallstraightscore").innerHTML = smallStraight;
						document.getElementById("rollmessage").innerHTML = "Small Straight: " + smallStraight + " points!";
					} else {
						document.getElementById("rollmessage").innerHTML = "No Small Straight!";
						document.getElementById("smallstraightscore").innerHTML = 0;
					}
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED SMALL STRAIGHT!";
				}
			}
			EndGameCheck();
		}


		//Large Straight Score
		document.getElementById("largestraightscore").onclick = function LargeStraightScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (largeStraightScored == false) {
					largeStraightScored = true;
					scoredThisRound = true;
					rollNumber = 0;
					sortedRolledDice = rolledDice.sort().toString();
					if (sortedRolledDice == "1,2,3,4,5" || sortedRolledDice == "2,3,4,5,6") {
						largeStraight = 40;
						lowerScoreTotal += 40;
						RecalculateTotal();
						document.getElementById("largestraightscore").innerHTML = largeStraight;
						document.getElementById("rollmessage").innerHTML = "Large Straight: " + largeStraight + " points!";
					} else {
						document.getElementById("rollmessage").innerHTML = "No Large Straight!";
						document.getElementById("largestraightscore").innerHTML = 0;
					}
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED LARGE STRAIGHT!";
				}
			}
			EndGameCheck();
		}

		//Full House Score
		document.getElementById("fullhousescore").onclick = function FullHouseScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (fullHouseScored == false) {
					rollNumber = 0;
					sortedRolledDice = rolledDice.sort()
					if (((sortedRolledDice[0] === (sortedRolledDice[1] && sortedRolledDice[2])) && (sortedRolledDice[3] === sortedRolledDice[4])) || ((sortedRolledDice[0] === sortedRolledDice[1]) && (sortedRolledDice[2] === (sortedRolledDice[3] && sortedRolledDice[4])))) {
						fullHouse = 25
						lowerScoreTotal += fullHouse;
						RecalculateTotal();
						document.getElementById("fullhousescore").innerHTML = fullHouse;
						document.getElementById("lowerscoretotal").innerHTML = lowerScoreTotal;
						document.getElementById("rollmessage").innerHTML = "Full House: " + fullHouse + " points!";
						fullHouseScored = true;
						scoredThisRound = true;
					} else {
						if (fullHouseScored == false) {
							fullHouseScored = true;
							scoredThisRound = true;
							document.getElementById("rollmessage").innerHTML = "No Full House!";
							document.getElementById("fullhousescore").innerHTML = 0;
						}
					}
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED FULL HOUSE!";
				}
			}
			EndGameCheck();
		}

		//Chance Score
		document.getElementById("chancescore").onclick = function ChanceScoring() {
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (chanceScored == false) {
					chance = rolledDice.reduce(SumAllDice);
					lowerScoreTotal += chance;
					RecalculateTotal();
					document.getElementById("chancescore").innerHTML = chance;
					document.getElementById("lowerscoretotal").innerHTML = lowerScoreTotal;
					document.getElementById("rollmessage").innerHTML = "Chance Scored: " + chance + " points!";
					chanceScored = true;
					scoredThisRound = true;
					rollNumber = 0;
				} else {
					document.getElementById("rollmessage").innerHTML = "ALREADY SCORED CHANCE!";
				}
				EndGameCheck();
			}
		}

		//Yatzy Score 
		document.getElementById("yatzyscore").onclick = function YatzyScoring() {
			yatzycheck = false;
			if (scoredThisRound == true) {
				document.getElementById("rollmessage").innerHTML = "ALREADY SCORED THIS ROUND!";
			} else {
				if (yatzyScratched == false) {
					rollNumber = 0;
					for (var count = 1; count <= 2; count++) {
						if (count == 1) {
							for (var number = 1; number < 7; number++) {
								if (String(rolledDice) == String((number + ",").repeat(4) + number)) {
									yatzycheck = true;
									if (yatzyScored == false) {
										yatzy += 50;
										lowerScoreTotal += 50;
										if (gameSFX == true) {
											RolledYatzySFX();
										}
										RecalculateTotal();
										yatzyScored = true;
										scoredThisRound = true;
										document.getElementById("yatzyscore").innerHTML = yatzy;
									} else {
										yatzy += 100;
										lowerScoreTotal += 100;
										if (gameSFX == true) {
											RolledYatzySFX();
										}
										RecalculateTotal();
										bonusYatzyScored = true;
										scoredThisRound = true;
										document.getElementById("yatzyscore").innerHTML = yatzy;
									}
								}
							}
						} else {
							if (yatzyScored == false) {
								yatzyScratched = true;
								scoredThisRound = true;
								document.getElementById("rollmessage").innerHTML = "You didn't roll a Yatzy!";
								document.getElementById("yatzyscore").innerHTML = 0;
							} else if (yatzyScored == true && bonusYatzyScored == false && yatzycheck == true) {
								document.getElementById("rollmessage").innerHTML = "YATZY! 50 POINTS!";
							} else if (yatzyScored == true && bonusYatzyScored == true && yatzycheck == true) {
								document.getElementById("rollmessage").innerHTML = "BONUS YATZY! 100 POINTS!";
							} else {
								document.getElementById("rollmessage").innerHTML = "No Bonus!";
							}

						}
					}
				} else {
					document.getElementById("rollmessage").innerHTML = "Can't score Yatzy after scratch.";
				}
			}
			EndGameCheck();
		}

		//Upper Score Total
		function RecalculateTotal() {
			grandTotalScore = upperScoreTotal + lowerScoreTotal;
			document.getElementById("upperscoretotal").innerHTML = upperScoreTotal;
			document.getElementById("lowerscoretotal").innerHTML = lowerScoreTotal;
			document.getElementById("grandtotalscore").innerHTML = grandTotalScore;
		}
	}

	//Display Upper Score Subtotal
	document.getElementById("subtotalscore").innerHTML = upperScoreSubTotal;

	//Display Upper Score Total
	document.getElementById("upperscoretotal").innerHTML = upperScoreTotal;

	//Display Lower Score Total
	document.getElementById("lowerscoretotal").innerHTML = lowerScoreTotal;

	//Display Grand Score Total
	document.getElementById("grandtotalscore").innerHTML = grandTotalScore;

	PlayGame();
}

Yatzy();