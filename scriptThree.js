'use strict';

let money = 50000, 
income = 'Фриланс', 
addExpenses = 'бензин, коммунальные платежи, арендная плата за квартиру', 
deposit = true,
period = 6;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');

let mission = prompt('Сколько вы хотите заработать?');
console.log('Цель заработать ' + mission + ' рублей');

addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

money = prompt('Какой у вас месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');

let addExpenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');

let addExpenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - (Number(amount1) + Number(amount2));
console.log('Бюджет на месяц ' + budgetMonth);

let success = mission / budgetMonth;
console.log('Цель будет достигнута за: ' + Math.ceil(success) + ' месяцев');

let budgetDay = budgetMonth/30;
console.log('Бюджет на день: ' + Math.floor(budgetDay));

if (budgetDay < 0 || budgetDay == 0){
    console.log('Что-то пошло не так');
} else if(budgetDay >= 1200){
        console.log('У вас высокий уровень дохода');
} else if (budgetDay < 600){
        console.log('У вас низкий уровень дохода');
} else if(budgetDay < 1200 && budgetDay >= 600) {
        console.log('У вас средний уровень дохода');
}