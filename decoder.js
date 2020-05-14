const key = prompt('Enter key: ');

// error if 'cancel' is selected or an empty value is entered
if (key === null || key.trim() === '') {
    console.error('The key cannot be empty!')
} else {
    const keyCodeA = 'a'.charCodeAt(0);

    // return blank line if 'Cancel' is selected
    let text = prompt('Enter text: ') || '';
    text = text.toLowerCase();

    let decoded = '';

    for (let i = 0; i < text.length; i++) {
        let code = key.indexOf(text[i]);

        // If no symbol is found, a space is added
        if (code === -1) {
            decoded += ' ';
        } else {
            decoded += String.fromCharCode(code + keyCodeA);
        }
    }

    console.log(decoded);
}