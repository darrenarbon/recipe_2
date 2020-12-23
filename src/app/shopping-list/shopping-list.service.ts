import { Ingredient} from '../shared/ingredient.model'
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredient: Ingredient[]) {
        ingredient.forEach(ing => {
            var ingredientExists = this.ingredients.findIndex(ingredient => {
                return ingredient.name === ing.name
            })
            if (ingredientExists !== -1) {
                this.ingredients[ingredientExists].amount += ing.amount 
            } else {
                this.ingredients.push(ing);
            }
        })
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}