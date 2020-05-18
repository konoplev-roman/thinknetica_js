// return blank line if 'Cancel' is selected
const input = prompt('Enter text: ') || '';

console.log(`Reverse: ${input.split('').reverse().join('')}`);
