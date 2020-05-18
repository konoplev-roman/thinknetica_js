// return blank line if 'Cancel' is selected
const timeString = prompt('Enter the date: ') || '';

// Searching for values:
// 1. (\d{1,2}) - hours
// 2. (\d{1,2}) - minutes
// 3. (.*) - locales equivalent (am/pm\etc...)
// \D* and \s* - delimiters
// return empty array if nothing is found
const timeArray = timeString.match(/^(\d{1,2})\D*(\d{1,2})\s*(.*)$/) || [];

// A year is inserted to the generated date in order to new Date returns a valid object
const date = new Date(`2020, ${timeArray[1]}:${timeArray[2]} ${timeArray[3]}`);

if (isNaN(date)) {
    console.error('Incorrect time!');
} else {
    // getHours returns the day number without the first 0
    const hours = ('0' + date.getHours()).substr(-2);

    // getMinutes returns the day number without the first 0
    const minutes = ('0' + date.getMinutes()).substr(-2);

    console.log(`Time: ${hours}:${minutes}`);
}
