/* 1. Kérjen be a felhasználótól egy szöveget, majd határozza meg,
hogy hány különböző karakter található a szövegben! A darabszámot és a karaktereket
írja ki a konzolra! */
function getDiffCharsFromString() {
  var inputString = prompt("kérem a szöveget");
  var stringDiffChars = "";
  for (var i = 0; i < inputString.length; i++) {
    var actChar = inputString.charAt(i);
    if (stringDiffChars.indexOf(actChar) == -1) {
      stringDiffChars = stringDiffChars + actChar;
    }
  }
  alert(">> különböző karakterek: " + stringDiffChars + "\n>> darabszám: " + stringDiffChars.length);

}
//getDiffCharsFromString();

/* 2. Az szotar tömbben lévő szavakat alakítsa át úgy, hogy minden szó karaktereit
egyenként tegye ábécérendbe! Az így létrehozott szavakból hozzon létre egy tömböt,
az eredetivel egyező sorrendben! Például: tervez => eertvz, nyugalom => aglmnouy*/
//'abc' rendbe teszi a szöveg karaktereit
// function order(text) {
//   return = text.split('').sort().join('');
// }
var word;
var newSzotar = [];

function makeNewSzotar() {
  alert(szotar.length);
  for (var i = 0; i < szotar.length; i++) {
    word = szotar[i].split('').sort().join('');
    newSzotar.push(word);
  }
  // var num = prompt("hányadik elem? ");
  // alert(szotar[num] + " - " + newSzotar[num]);
}
makeNewSzotar();

/* 3. Kérjen be a felhasználótól két szót, és döntse el, hogy a két szó anagramma-e!
Ha azok voltak, írja ki a konzolra az „Anagramma” szót, ha nem, akkor
pedig a „Nem anagramma” szöveget! */

function printIsAnagramm() {
  var firstString = prompt("kérem az első szót: ");
  var secondString = prompt("kérem a második szót: ");
  var result = true;

  if (firstString.length != secondString.length) {
    result = false;
  } else {
    var orderedFirst = firstString.toLowerCase().split('').sort().join('');
    var orderedSecond = secondString.toLowerCase().split('').sort().join('');
    for (var i = 0; i < orderedFirst.length; i++) {
      if (orderedFirst.charAt(i) != orderedSecond.charAt(i)) {
        result = false;
        break;
      }
    }
  }
  alert(result ? "Anagramma" : "Nem anagramma");
}
// printIsAnagramm();

/* 4. Kérjen be a felhasználótól egy szót! A szotar tömb szavaiból keresse meg
a szó anagrammáit (a szót önmagát is annak tekintve)! Ha van találat, azokat
egymás alá írja ki a konzolra, ha nem volt találat, akkor írja ki a
„Nincs a szótárban anagramma” szöveget! */

function isAnagram(text1, text2) {
  var result = true;
  if(text1.length != text2.length ) {
    result = false;
  } else {
    var orderedFirst = text1.toLowerCase().split('').sort().join('');
    var orderedSecond = text2.toLowerCase().split('').sort().join('');
    for (var i = 0; i < orderedFirst.length; i++) {
      if (orderedFirst.charAt(i) != orderedSecond.charAt(i)) {
        result = false;
        break;
      }
    }
  }
  return result;
}

function isAnagramVolcalbulary() {
	var answer = false;
  var myString = prompt("4feladat kérem a szót: ");
  var orderedMyString = myString.toLowerCase().split('').sort().join('');
  for (var i = 0; i < szotar.length; i++) {
    if(isAnagram(myString, szotar[i])) {
    alert("anagram" + " -- " + szotar[i]);
    answer = true;
    }
  }
  if(!answer) {
  alert("nincs a szótárban anagramma!");
  }
}

isAnagramVolcalbulary();



/*5. Határozza meg, hogy a szotar tömbben melyik a leghosszabb szó! Ha több,
ugyanannyi karakterből álló leghosszabb szó volt, akkor az összeset írja ki!
A feltételnek megfelelő összes szó pontosan egyszer szerepeljen a kiírásban! */
var maxLength = 0;
var longestWords = [];

function maxlength() {
  for (var i = 0; i < szotar.length; i++) {
    if (szotar[i].length > maxLength) {
      maxLength = szotar[i].length;
    }
  }
}
maxlength();

function getLongestWord() {
  for (var i = 0; i < szotar.length; i++) {
    if (szotar[i].length == maxLength) {
      longestWords.push(szotar[i]);
    }
  }
  alert(maxLength + " - " + longestWords);
}
//getLongestWord();

/* 6. Rendezze a szotar tömbben lévő szavakat a karakterek száma szerint
növekvő sorrendbe! Az egyforma hosszúságú és ugyanazokat a karaktereket tartalmazó szavak
(amelyek egymás anagrammái) szóközzel elválasztva ugyanabba a sorba kerüljenek!
Az egyforma hosszúságú, de nem ugyanazokat a karaktereket tartalmazó szavak
külön sorba kerüljenek! Az így rendezett szavakat írja ki a konzolra! */
