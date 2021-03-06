function Animal(name) {
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    self.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);
    var self = this;
    
    var animalFeed = this.feed; // здесь хранится код родительского метода

    this.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^');
        return self;
    }; // перезаписываем и дополняем родительский метод

    self.stroke = function() {
        console.log('Гладим кота');
        return self;
    };

}

var barsik = new Cat('Barsik');

console.log(barsik.name);

(new Cat()).feed().stroke();

