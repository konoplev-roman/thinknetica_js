let sum = 0, i = 0, arithmeticMean = 0;

while (true) {
    const input = prompt('Input a number (to stop, enter an empty value): ');

    // break if 'cancel' is selected or an empty value is entered
    if (input === null || input.trim() === '') break;

    const number = parseInt(input);

    sum += number;
    i += 1;
    arithmeticMean = sum / i;

    console.log(`Entered number: ${number}; Arithmetic mean: ${arithmeticMean}`);
}

alert(`Arithmetic mean: ${arithmeticMean}`)