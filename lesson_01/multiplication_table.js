for (let i = 0; i <= 10; i++) {
    let row = [];

    for (let j = 0; j <= 10; j++) {
        let value;

        if (i === 0) {
            value = j || ' '; // row header with space instead of zero
        } else if (j === 0) {
            value = i; // col header
        } else {
            value = i * j;
        }

        // add spaces at the beginning of a row to align the values in columns
        const formattedValue = ('  ' + value).substr(-3);

        row.push(formattedValue);
    }

    console.log(row.join(' '));
}
