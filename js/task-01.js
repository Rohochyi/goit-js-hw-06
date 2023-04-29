const categoriesList = document.querySelector("#categories");
const categories = document.querySelectorAll(".item");

console.log(`Number of categories:${categories.length}`);

categories.forEach((categorie) => {
  const categoryName = categorie.querySelector("h2").textContent;
  const categoryElements = categorie.querySelectorAll("li");
  console.log(`Category:${categoryName}`);
  console.log(`Elements:${categoryElements.length} `);
});
