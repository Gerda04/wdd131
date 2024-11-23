import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listlength = list.length;
    const randomNum = random(listlength);
    return list[randomNum];
}

console.log(getRandomListEntry(recipes));

function tagsTemplate(tags) {
    // Generates a list of <li> elements from the array of tags
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    // Generates stars based on the recipe's rating
    const fullStars = Math.floor(rating); // Number of full stars
    const emptyStars = 5 - fullStars;    // Remaining empty stars
    
    // Create the star icons
    const fullStarsHTML = '<span aria-hidden="true" class="icon-star">⭐</span>'.repeat(fullStars);
    const emptyStarsHTML = '<span aria-hidden="true" class="icon-star-empty">☆</span>'.repeat(emptyStars);
    
    return `
        <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
            ${fullStarsHTML}${emptyStarsHTML}
        </span>`;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="${recipe.link}">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

function renderRecipes(recipeList) {
    const outputElement = document.querySelector('#recipe-output');

    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');

    outputElement.innerHTML = recipeHTML;
}

function init() {
    const recipe = getRandomListEntry(recipes);

    renderRecipes([recipe]);
}

init();

// Filter recipes based on the search query
function filterRecipes(query) {
    return recipes
        .filter(recipe => {
            const lowerQuery = query.toLowerCase();

            // Check if the query is in the name, description, tags, or ingredients
            return (
                recipe.name.toLowerCase().includes(lowerQuery) ||
                recipe.description.toLowerCase().includes(lowerQuery) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
                (recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerQuery)))
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
}

function handleSearch() {
    const query = document.querySelector('#search-input').value.trim();

    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

document.querySelector('#search-button').addEventListener('click', handleSearch);


