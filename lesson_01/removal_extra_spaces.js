// return blank line if 'Cancel' is selected
const input = prompt('Enter text: ') || '';

const editedText = input.trim().replace(/\s{2,}/, ' ');

console.log(`Edited text: '${editedText}'`);
