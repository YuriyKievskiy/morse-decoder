const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let wordsArr = [];

function decode(expr) {
    let wordsArr=[];
    let morseCode = [];
    let result = [];

    let word = expr.match(/.{1,10}/g); //Разбиваем на массив по 10 символов

    word.map(function(key, index) {         //Разбиваем на подмассив по 5 пар символов
        let keys = key.match(/.{1,2}/g);
        wordsArr.push(keys);
    });
            //переводим '00' '10' '11' в код морзе
    wordsArr.forEach(function(key) {
        let morse = [];
        for(let i = 0; i < key.length; i++) {
            if(key[i] === '00'){
                morse.push('')
            }else if(key[i] === '10'){
                morse.push('.')
            }else if(key[i] === '11'){
                morse.push('-')
            }else if(key[i] === '**'){
                morse.push('*')
            }
        }
        morseCode.push(morse.join(''));
    })

    for( let i = 0; i < morseCode.length; i++ ) {
        let bord = " ";
        console.log(morseCode[i])
        if( morseCode[i] === "*****") {
            result.push(bord)
        }else if(morseCode[i] in MORSE_TABLE) {
            result.push(MORSE_TABLE[morseCode[i]])
        }
    }
    return result.join('');
}
module.exports = {
    decode
}