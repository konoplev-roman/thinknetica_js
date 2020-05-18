const text = `The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading.
Java uses comments similar to those of C++`;

const replaceFrom = 'Java';
const replaceBy = 'JS';
const replaceCondition = 'overloading';

// Division of text into sentences.
// The division is approximate, '!', '?', etc. are not counted.
// Expressions containing a dot will also be divided into different sentences.
// (e.g. "Mr. Smith bought a boat for $1.5 million" -> ["Mr", " Smith bought a boat for $1", "5 million"])
const sentences = text.split('.');

let editedText = [];

for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].includes(replaceCondition)) {
        editedText.push(sentences[i].replace(replaceFrom, replaceBy));
    } else {
        editedText.push(sentences[i]);
    }
}

console.log(editedText.join('.'));
