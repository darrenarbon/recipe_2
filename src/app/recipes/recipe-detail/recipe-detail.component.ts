import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute, private shoppingListService: ShoppingListService, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id
            this.recipe = this.recipeService.getSingleRecipe(this.id)
        })
    }

    addIngredients() {
        this.shoppingListService.addIngredients(this.recipe.ingredients)
    }

    deleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes'])
    }

}