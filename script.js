const recipes = [
    {
        title: 'Spaghetti Carbonara',
        ingredients: 'Spaghetti, eggs, pancetta, Parmesan cheese, black pepper',
        instructions: 'Cook the spaghetti. In a separate pan, cook the pancetta. Mix the eggs and cheese, and combine everything in the pan.'
    },
    {
        title: 'Chicken Curry',
        ingredients: 'Chicken, curry powder, coconut milk, onions, garlic, ginger',
        instructions: 'Cook the onions, garlic, and ginger. Add the chicken and curry powder, then pour in the coconut milk. Simmer until cooked through.'
    },
    {
        title: 'Vegetable Stir Fry',
        ingredients: 'Mixed vegetables, soy sauce, garlic, ginger, sesame oil',
        instructions: 'Stir-fry the garlic and ginger in sesame oil. Add the vegetables and soy sauce, and cook until tender.'
    }
];

function displayRecipes(filteredRecipes = recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';

        const title = document.createElement('h2');
        title.textContent = recipe.title;
        recipeDiv.appendChild(title);

        const ingredients = document.createElement('p');
        ingredients.textContent = `Ingredients: ${recipe.ingredients}`;
        recipeDiv.appendChild(ingredients);

        const instructions = document.createElement('p');
        instructions.textContent = `Instructions: ${recipe.instructions}`;
        recipeDiv.appendChild(instructions);

        recipesContainer.appendChild(recipeDiv);
    });
}

function searchRecipes() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchInput)
    );
    displayRecipes(filteredRecipes);
}

document.getElementById('search').addEventListener('input', searchRecipes);

// Initial display of all recipes
displayRecipes();
