// Example values
const timestamp = 1588312016;
const cluster = 58;
const type = 8;
const user = 5553663;

const id = timestamp.toString(16) + cluster.toString(16) + type.toString(16) + user.toString(16);

console.log('timestamp:', timestamp, new Date(timestamp * 1000));
console.log('cluster:', cluster);
console.log('type:', type);
console.log('user:', user);
console.log('ID encoding:', id);