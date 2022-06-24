import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Pierogi',
      'Best polish food',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pierogi_ruskie%2C_Nowe_Warpno.jpg'
    ),
    new Recipe(
      'Pierożki',
      'Best polish food',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pierogi_ruskie%2C_Nowe_Warpno.jpg'
    ),
  ];

  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {}
}
