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


