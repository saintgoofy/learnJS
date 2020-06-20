'use strict';

let isNumber = function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
}

let appData = {
    budget: function(){
        let money = 0;
            do{
                money = prompt('Какой у вас месячный доход?');
            }
            while(!isNumber(money));
            appData.budget = +money;
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            let inAm = appData.expenses[key];
            appData.expensesMonth += +inAm;
        }
        return appData.expensesMonth;
    },
    getBudget: function(){
        let month = 0;
            month = appData.budget - appData.expensesMonth;
        appData.budgetMonth += +month;

        let day = 0;
            day = appData.budgetMonth/30;
        appData.budgetDay += +day;
    },   
    getTargetMonth: function(){
            return Math.ceil(appData.mission / appData.budgetMonth);
    },
    getStatusIncome: function(){
        if (appData.budgetDay < 0 || appData.budgetDay == 0){
                console.log('Что-то пошло не так');
        } else if(appData.budgetDay >= 1200){
                console.log('У вас высокий уровень дохода');
        } else if (appData.budgetDay < 600){
                console.log('У вас низкий уровень дохода');
        } else if(appData.budgetDay < 1200 && appData.budgetDay >= 600) {
                console.log('У вас средний уровень дохода');
        }
    },
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 0,
    period: 3,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую'),
            deposit = confirm('Есть ли у вас депозит в банке?'),
            mission = prompt('Сколько вы хотите заработать?');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = deposit;
            appData.mission = +mission;
               
                for (let i = 0; i < 2; i++){ 
                let exp = prompt('Введите обязательную статью расходов');
                let amount = prompt('Во сколько это обойдется?');
                appData.expenses[exp] = amount;
                while (!isNumber(amount)){
                amount = prompt('Во сколько это обойдется?');
            }
        }
               
    }

}

appData.budget();
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяцев');
}else if (appData.getTargetMonth() <= 0){
    console.log('Цель не будет достигнута');
}

appData.getStatusIncome();

console.log('Наша программа включает в себя данные: ');
for(const key in appData){
    console.log(key + ': ' , appData[key]);
}

console.log(appData.expenses);
