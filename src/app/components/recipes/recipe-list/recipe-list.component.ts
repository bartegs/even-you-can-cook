import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pierogi',
      'Best polish food',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pierogi_ruskie%2C_Nowe_Warpno.jpg'
    ),
    new Recipe(
      'Pierogi',
      'Best polish food',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pierogi_ruskie%2C_Nowe_Warpno.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
