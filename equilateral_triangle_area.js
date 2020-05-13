const lengthSideString = prompt('Set the length of the side of the equilateral triangle: ');
const lengthSide = parseFloat(lengthSideString);

if (isNaN(lengthSide) || lengthSide <= 0) {
    console.error('Length must be a positive number!');
} else {
    const area = (Math.sqrt(3) / 4) * lengthSide ** 2;

    console.log('Triangle area:', area);
}