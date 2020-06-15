let money = 50000,  income = 5000,  addExpense = '800, 200, 350',   deposit = true, mission = 100000,   period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpense.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' гривен');

addExpense.toLowerCase();
console.log(addExpense.split(', '));

let budgetDay = money/30;
console.log(budgetDay);