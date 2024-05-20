import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class AbstracMeal implements MealCompositeProtocol {
  constructor(
    private price: number,
    private nome: string,
  ) {}
  getPrice(): number {
    return 5;
  }
}
