'use strict';

let money = prompt('Какой у вас месячный доход?'),
income = 'Фриланс',
addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = prompt('Сколько вы хотите заработать?'),
period = 6;

function showTypeOf (data){
    console.log(data, typeof(data))
}
showTypeOf (money);
showTypeOf (income);
showTypeOf (deposit);
console.log(addExpenses.length);

console.log('Период равен: ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

let addExpenses1 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');

let addExpenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');

console.log(addExpenses.toLowerCase().split(', '));

let getExpensesMonth = function(){
    return Number(amount1) + Number(amount2);
}

console.log('Расходы за месяц: ' + getExpensesMonth());

let getAccumulatedMonth = function(){
    return money - getExpensesMonth();
}

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
    return mission / accumulatedMonth;
}

let success = getTargetMonth();
console.log('Цель будет достигнута за: ' + Math.ceil(success) + ' месяцев');

let budgetDay = accumulatedMonth/30;
console.log('Бюджет на день: ' + Math.floor(budgetDay));

let getStatusIncome = function(){
    if (budgetDay < 0 || budgetDay == 0){
        console.log('Что-то пошло не так');
    } else if(budgetDay >= 1200){
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay < 600){
        console.log('У вас низкий уровень дохода');
    } else if(budgetDay < 1200 && budgetDay >= 600) {
        console.log('У вас средний уровень дохода');
}
}

getStatusIncome();

