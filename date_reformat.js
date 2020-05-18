const dateString = prompt('Enter the date in American format: ');

// validate the string with date (format: MM/DD/YYYY)
const stringIsValid = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString);

if (!stringIsValid) {
    console.error('Incorrect date format!');
} else {
    const date = new Date(Date.parse(dateString));

    const year = date.getFullYear();
    // getMonth returns the month number without the first 0 and numbering of months starts from zero
    const month = ('0' + (date.getMonth() + 1)).substr(-2);
    // getDate returns the day number without the first 0
    const day = ('0' + date.getDate()).substr(-2);

    console.log(`Russian format: ${day}.${month}.${year}`);
}
