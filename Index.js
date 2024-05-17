const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];

function crypt(word, gap) {
    gap = gap % alphabet.length;
    let wordArray = word.split('');
    let newWord = [];
    wordArray.forEach((element) =>{
        alphabet.indexOf(element);
        newWord.push(alphabet[mod((alphabet.indexOf(element) + gap), alphabet.length)]);
    })
    newWord = newWord.join('');
    console.log(newWord)
}

function decrypt(cryptedWord, gap) {
    gap = gap % alphabet.length;
    let wordArray = cryptedWord.split('');
    let newWord = [];
    wordArray.forEach((element) =>{
        alphabet.indexOf(element);
        newWord.push(alphabet[mod((alphabet.indexOf(element) - gap), alphabet.length)]);
    })
    newWord = newWord.join('');
    console.log(newWord)
}

function findGap(string) {
    let stringArray = string.split('');

    let countElements = {};

    for (let element of stringArray) {
        countElements[element] = (countElements[element] || 0) + 1;
    }

    let elementMax = null;
    let maxOccurences = 0;
    for (let element in countElements) {
        if (countElements[element] > maxOccurences) {
            maxOccurences = countElements[element];
            elementMax = element;
        }
    }

    let gap = mod(alphabet.indexOf(elementMax) - alphabet.indexOf('e'), alphabet.length)
    console.log(gap)
}

function brutForce (string) {
    for (let i = 0; i < alphabet.length; i++) {
        decrypt(string, i);
    }
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

// crypt('lesoleilbrilleetlesoiseauxchantent', 22);
// decrypt('snsn', 25);

// findGap('haokhaehxnehhaaphaokeoawqtydwjpajp');
// brutForce('haokhaehxnehhaaphaokeoawqtydwjpajp');
