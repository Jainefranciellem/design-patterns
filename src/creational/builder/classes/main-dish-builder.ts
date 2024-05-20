import { MealBuilderProtocol } from '../interfaces/meal-builder=protocol';
import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';
import { Beans, Beverage, Dessert, MealBox, Meat, Rice } from './Meals';
import { MealsBox } from './Meals-box';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealsBox();

  makeMeal(): this {
    const rice = new Rice(10, 'Arroz');
    const beans = new Beans(7, 'Feijão');
    const meat = new Meat(20, 'Carne');
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage(5, 'Bebida');
    this.meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert(7, 'Sobremesa');
    this.meal.add(dessert);
    return this;
  }

  getMeal(): MealCompositeProtocol {
    return this.meal;
  }
}
