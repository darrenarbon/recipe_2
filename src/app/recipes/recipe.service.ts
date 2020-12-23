import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Bread', 
    //         'How to make bread', 
    //         'https://www.browneyedbaker.com/wp-content/uploads/2016/05/white-bread-53-600.jpg',
    //         [
    //             new Ingredient('Flour', 1),
    //             new Ingredient('Eggs', 1),
    //             new Ingredient('Milk', 1)
    //         ]),
    //     new Recipe(
    //         'Pasta', 
    //         'How to make pasta', 
    //         'https://shewearsmanyhats.com/wp-content/uploads/2009/08/creamy-pesto-pasta-new4.jpg',
    //         [
    //             new Ingredient('Flour', 1),
    //             new Ingredient('Eggs', 3),
    //             new Ingredient('Salt', 1)
    //         ])
    // ];

    private recipes: Recipe[] = [];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getSingleRecipe(id: number) {
        return this.recipes[id]
    }

    putRecipes() {

    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice());
    }
}