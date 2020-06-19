'use strict';

let isNumber = function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
income = 'Фриланс',
addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = prompt('Сколько вы хотите заработать?'),
period = 6;

let start = function(){
do {
money = prompt('Какой у вас месячный доход?');
}
while(!isNumber(money));
}

start();

function showTypeOf (data){
console.log(data, typeof(data))
}

showTypeOf (income);
showTypeOf (deposit);
console.log(addExpenses.length);

let expenses = [];

console.log(addExpenses.toLowerCase().split(', '));

let getExpensesMonth = function(){
let sum = 0;
for (let i = 0; i < 2; i++){
expenses[i] = prompt('Введите обязательную статью расходов');
let amount = prompt('Во сколько это обойдется?');
while (!isNumber(amount)){
amount = prompt('Во сколько это обойдется?');
}
sum += +amount;
}
console.log(expenses);
return sum;
}

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function(){
return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
return Math.ceil(mission / accumulatedMonth);
}

let success = getTargetMonth();
if (success > 0){
console.log('Цель будет достигнута за: ' + success + ' месяцев');
}else if (success <= 0){
console.log('Цель не будет достигнута');
}


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