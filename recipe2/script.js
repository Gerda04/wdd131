import recipes from './recipes.js';

// Function to generate random recipe card
function loadRandomRecipe() {
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];
  const recipeCard = document.querySelector('.recipe-card');
  
  // Clear existing content
  recipeCard.innerHTML = '';

  // Add new recipe details
  recipeCard.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}">
    <h2>${recipe.name}</h2>
    <p class="stars">${'★'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}</p>
    <p>${recipe.description}</p>
  `;
}

// Event Listener for Button
document.getElementById('new-recipe-btn').addEventListener('click', loadRandomRecipe);

// Load a random recipe on page load
window.addEventListener('DOMContentLoaded', loadRandomRecipe);
