function Cat(name) {
    var foodAmount = 50; //приватное свойство
    
    function formatFoodAmount() {
        return foodAmount + ' гр.';
    } // приватный метод

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount(); //работает режим геттера

        if (amount < 50) {
            throw new Error('Too little');
        }
        if (amount > 500) {
            throw new Error('Too much');
        } // работает режим сеттера

        foodAmount = amount;
    }; //единый геттер-сеттер

    this.name = name; // публичное свойство

    this.feed = function() {
        console.log('Насыпаем в миску' + ' ' + this.dailyNorm() + ' корма.');
    }; // публичный метод

}

var barsik = new Cat('Barsik');

console.log(barsik.dailyNorm(300)); // вызываем сеттер
barsik.dailyNorm(); //вызываем геттер

barsik = null; // удаляем объект класса