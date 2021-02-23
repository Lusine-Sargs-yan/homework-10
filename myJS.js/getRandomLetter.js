function getRandomLetter() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const singleLetter = letters[Math.floor(Math.random() * letters.length)];
    return singleLetter;
}
getRandomLetter();

// function getRandomNumber() {
//     return Math.floor(Math.random() * 100);
// }
// getRandomNumber();