class Meal {
    id: number = 0;
    categoryIds: number[] = [];
    title: string = "";
    affordability: string;
    complexity: number = 0;
    imageUrl: string = "";
    duration: number = 0;
    ingredients: string[];
    steps: [];
    isGlutenFree: boolean = false;
    isVegan: boolean = false;
    isVegetarian: boolean = false;
    isLactoseFree: boolean = false

    constructor(
        id: number,
        categoryIds: [],
        title: string,
        affordability: string,
        complexity: number,
        imageUrl: string,
        duration: number,
        ingredients: [],
        steps: [],
        isGlutenFree: boolean,
        isVegan: boolean,
        isVegetarian: boolean,
        isLactoseFree: boolean
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.steps = steps;
        this.duration = duration;
        this.complexity = complexity;
        this.affordability = affordability;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;
