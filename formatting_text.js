// return blank line if 'Cancel' is selected
const input = prompt('Enter text: ') || '';

// return empty array if nothing is found
const splitText = input.trim().match(/.{1,80}/g) || [];

console.log(`Edited text:\n${splitText.join('\n')}`);