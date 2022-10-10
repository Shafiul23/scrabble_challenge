class Scrabble {
  // Write your implementation here
  word;

  constructor(word) {
    this.word = word;
  }

  score() {

    let scoreMap = new Map();

    scoreMap.set('A', 1)
    scoreMap.set('E', 1)
    scoreMap.set('I', 1)
    scoreMap.set('O', 1)
    scoreMap.set('U', 1)
    scoreMap.set('L', 1)
    scoreMap.set('N', 1)
    scoreMap.set('R', 1)
    scoreMap.set('S', 1)
    scoreMap.set('T', 1)
    scoreMap.set('D', 2)
    scoreMap.set('G', 2)
    scoreMap.set('B', 3)
    scoreMap.set('C', 3)
    scoreMap.set('M', 3)
    scoreMap.set('P', 3)
    scoreMap.set('F', 4)
    scoreMap.set('H', 4)
    scoreMap.set('V', 4)
    scoreMap.set('W', 4)
    scoreMap.set('Y', 4)
    scoreMap.set('K', 5)
    scoreMap.set('J', 8)
    scoreMap.set('X', 8)
    scoreMap.set('Q', 10)
    scoreMap.set('Z', 10)

    let res = 0;

    if (!this.word) {
      res = 0
    } else {


      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === ' ' || this.word[i] === '\t' || this.word[i] === '\n') {

          res += 0;

        } else {
          res += scoreMap.get(this.word[i].toUpperCase());
        }
      }
    }

    return res;
  }

}



// let scrabble = new Scrabble("Shafiul")
// console.log(scrabble.score());

// let empty = new Scrabble("")
// console.log(empty.score());

// let whitespace = new Scrabble(' ');
// console.log(whitespace.score());

// let noInput = new Scrabble()
// console.log(noInput.score());

// let shortWord1 = new Scrabble("a")
// console.log(shortWord1.score());

// let shortWord2 = new Scrabble("f")
// console.log(shortWord2.score());

// let simpleWord = new Scrabble("street")
// console.log(simpleWord.score());

// let complicatedWord = new Scrabble("quirky")
// console.log(complicatedWord.score());

// let caseSensitive = new Scrabble("OXYpHENbUTaZONE")
// console.log(caseSensitive.score());


module.exports = Scrabble


