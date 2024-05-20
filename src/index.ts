import { Beans, Meat, Rice } from './creational/builder/classes/Meals';
import { MealsBox } from './creational/builder/classes/Meals-box';

const rice = new Rice(4, 'arroz');
const beans = new Beans(3, 'feijão');
const meal = new Meat(20, 'carne');
const mealBox = new MealsBox();

mealBox.add(rice, beans, meal);
console.log(mealBox);
