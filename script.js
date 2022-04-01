const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');



// Search mmeal and fetch api 

const searchMeal= (e)=>{
    e.preventDefault();
    

  //clear single meal
  single_mealEl.innerHTML = ' ';

  //get search term
  const term = search.value;
  
  //check for empty
  if(term.trim()) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then( res => res.json())
      .then(data => {
         console.log(data);
         resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`

      });
  } else {
      alert('please enter a term');
  }
   
}




// Event Listeners 

submit.addEventListener('submit',searchMeal);