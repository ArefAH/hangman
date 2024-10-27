var words = ["EDUCATION", "SMART", "BIGO", "WAR", "CHOUF"];
var number = Math.floor(Math.random() * words.length);
var word = words[number].split("");
var guessed = [];
var bodyParts = [
  "head",
  "body",
  "left-hand",
  "right-hand",
  "left-leg",
  "right-leg",
];
word.forEach(function () {
  guessed.push("_");
});
var i = 0;

answer.innerHTML = guessed.join(" ");

letters.forEach(function (letter) {
  letter.addEventListener("click", function () {
    var guess = letter.textContent;
    letter.classList.add("pressed");
    var found = false;
    word.forEach(function (letter, index) {
      if (guess == letter && hangMan.children.length < 6) {
        guessed[index] = guess;
        answer.innerHTML = guessed.join(" ");
        found = true;
      }
    });
    console.log(hangMan.children.length);
    if (!found && hangMan.children.length < 6) {
      var bodyPart = document.createElement("img");
      bodyPart.src = `./../assets/${bodyParts[i]}.svg`;
      bodyPart.classList.add(`${bodyParts[i]}`);
      hangMan.appendChild(bodyPart);
      i++;
    } else if (guessed.join("") === word.join("")) {
      letters.forEach(function (letter) {
        letter.classList.add("pressed");
      });
      alert("You Win!!");
    } else if (hangMan.children.length == 6) {
      letters.forEach(function (letter) {
        letter.classList.add("pressed");
      });
      alert("You Lost!!");
    }
  });
});
