import { recipes } from './recipes.mjs';

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
    const index = getRandomNumber(recipes.length);
    return recipes[index];
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
            <div class="recipe-tags">
                ${tagsTemplate(recipe.tags)}
            </div>
            <div class="recipe-rating">
                ${ratingTemplate(recipe.rating)}
            </div>
        </div>
    `;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function ratingTemplate(stars) {
    const fullStar = `<i class="star fa fa-star" aria-hidden="true"></i>`;
    const emptyStar = `<i class="star fa fa-star-o" aria-hidden="true"></i>`;
    return fullStar.repeat(stars) + emptyStar.repeat(5 - stars);
}

function init() {
    const randomRecipe = getRandomRecipe();
    const recipeHTML = recipeTemplate(randomRecipe);
    document.querySelector('#recipe-container').innerHTML = recipeHTML;
}

// Run init on page load
window.addEventListener('DOMContentLoaded', init);

