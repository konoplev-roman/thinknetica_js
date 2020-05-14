// return blank line if 'Cancel' is selected
const input = prompt('Enter text: ') || '';

// return empty array if nothing is found
const vowels = input.match(/[aeiou]/gi) || [];
const consonants = input.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];

console.log(`Number of vowels: ${vowels.length}, number of consonants: ${consonants.length}`);