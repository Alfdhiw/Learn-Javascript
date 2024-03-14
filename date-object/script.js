const startDate = new Date();
const daysToAdd = 7;

const endDate = new Date(startDate);
endDate.setDate(startDate.getDate() + daysToAdd);

console.log(`End date after adding ${daysToAdd} days: ${endDate.toDateString()}`);