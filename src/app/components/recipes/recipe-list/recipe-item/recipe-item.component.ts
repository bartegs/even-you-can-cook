import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };

  @Input() index: number = 0;

  // constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
