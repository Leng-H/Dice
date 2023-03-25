/**
 * Generate random number between 1 and 6.
 */
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

/**
 * Get path to the new images
 */
let newImgSrc1 = "images/dice" + randomNumber1 + ".png";
let newImgSrc2 = "images/dice" + randomNumber2 + ".png";

/**
 * Update dice images
 */
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

img1.setAttribute("src", newImgSrc1);
img2.setAttribute("src", newImgSrc2);

/**
 * Display the winner
 */
let title = document.getElementById("title");
if (randomNumber1 > randomNumber2) {
  title.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  title.textContent = "Player 2 Wins! 🚩";
} else {
  title.textContent = "Draw!";
}
