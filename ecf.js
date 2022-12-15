///Déclaration des variables

const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php"


let change = document.querySelector('#change'),
    ingredients = document.querySelector('.ingredients'),
    gauche = document.querySelector('.gauche');







///Rangement de variable dans des tableaux
let picture = [...document.querySelectorAll('.picMeal')],

    ///Variables noms de plat///
    nameMeal = [...document.querySelectorAll('.nameMeal')],

    ///tableaux pour la modale
    list = [...document.querySelectorAll('.choice')],
    modal = [...document.querySelectorAll('.modal')];


///Rassemblement des différents tableaux en 1 avec objets   
let info = [{ picture, nameMeal }, { list, modal }];



// Instructions
///Ajout des 3 plats aléatoires via la fonction établie
getRandomMeal();


///Bouton changer = consiste à rafraichir la page afin que le fetch se relance
change.addEventListener("click", () => getRandomMeal())

console.log(info);
///Ouverture de fenêtre modale   
for (let i = 0; i < list.length; i++) {

    list[i].addEventListener('click', (e) => {
        list[i].style.cssText = " position:static;height: 90%;width: 80%"
        // html.appendChild(modal[i])
        modal[i].classList.toggle('modaltest');

    })

};


fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52764")
    .then(data => data.json())
    .then(json => {
        try {
            console.log(json.meals[0].strIngredient + [i]);
        }
        catch (error) { console.log("ok"); }


        //Déclaration tableau des ingrédients
        let tab = [json.meals[0].strIngredient1,
        json.meals[0].strIngredient2,
        json.meals[0].strIngredient3,
        json.meals[0].strIngredient4,
        json.meals[0].strIngredient5,
        json.meals[0].strIngredient6,
        json.meals[0].strIngredient7,
        json.meals[0].strIngredient8,
        json.meals[0].strIngredient9,
        json.meals[0].strIngredient10,
        json.meals[0].strIngredient11,
        json.meals[0].strIngredient12,
        json.meals[0].strIngredient13,
        json.meals[0].strIngredient14,
        json.meals[0].strIngredient15,
        json.meals[0].strIngredient16,
        json.meals[0].strIngredient17,
        json.meals[0].strIngredient18,
        json.meals[0].strIngredient19,
        json.meals[0].strIngredient20,];

        for (let i = 0; i < 20; i++) {


        // console.log(json.meals[0]);
        // console.log(json.meals[0].strIngredient18);
        if (tab[i] !== null || tab[i] !== "") {


            // console.log("ingrédient");
            ingredients.innerHTML = ingredients.innerHTML+'<ul>' + '<li>' + tab[i] + '</li></ul>'



        }
        else { console.log("vide"); }
        }










    })



function getRandomMeal() {
    for (let i = 0; i < picture.length; i++) {

        fetch(randomMeal)
            .then(data => data.json())
            .then(json => {
                info[0].picture[i].innerHTML = '<img src=' + json.meals[0].strMealThumb + ' alt="' + json.meals[0].strMeal + '">';
                info[0].nameMeal[i].innerHTML = json.meals[0].strMeal












                console.log(json)
            })
    }
}