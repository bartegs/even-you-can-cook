import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Pierogi',
      'Best polish food',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pierogi_ruskie%2C_Nowe_Warpno.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Potatoes', 10),
        new Ingredient('Egg', 1),
      ]
    ),
    new Recipe(
      'Pierożki',
      'Best polish food',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pierogi_ruskie%2C_Nowe_Warpno.jpg',
      [
        new Ingredient('Water', 0.5),
        new Ingredient('Bacon', 1),
        new Ingredient('Salt', 0.1),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
}
