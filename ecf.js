///Déclaration des variables

const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php",
    mealId = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772",
    body = document.querySelector('body');


let change = document.querySelector('#change');
// ingredients = document.querySelector('.ingredients'),







///Rangement de variable dans des tableaux
let picture = [...document.querySelectorAll('.picMeal')],

    ///Variables noms de plat///
    nameMeal = [...document.querySelectorAll('.nameMeal')],

    ///tableaux pour la modale
    list = [...document.querySelectorAll('.choice')],
    modal = [...document.querySelectorAll('.modal')],

    ingredients = [...document.querySelectorAll('.ingredients')],
    gauche = [...document.querySelectorAll('.gauche')];

///Rassemblement des différents tableaux en 1 avec objets   
let info = [{ picture, nameMeal }, { list, modal }];



// Instructions
///Ajout des 3 plats aléatoires via la fonction établie



///Bouton changer = consiste à rafraichir la page afin que le fetch se relance
change.addEventListener("click", () => getRandomMeal())

///Ouverture de fenêtre modale   
for (let i = 0; i < list.length; i++) {

    list[i].addEventListener('click', (e) => {
        body.classList.toggle('scrollOnOff');

        gauche[i].classList.toggle('gaucheModal');

        list[i].classList.toggle('choiceModal');
        setTimeout(() => {
            ingredients[i].classList.toggle('ingredientsModal');

        }, 100);


        nameMeal[i].classList.toggle('nameMealModal');
        picture[i].classList.toggle('picMealModal')
        modal[i].classList.toggle('modalOn');

    })

};
getRandomMeal();

async function getRecipe() {
    fetch(randomMeal)
        .then(data => data.json())
        .then(json => {

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

                if (!(tab[i] == null) ^ (tab[i] == "")) {

                    console.log("vide"); ingredients.innerHTML = ingredients.innerHTML + '<ul>' + '<li>' + tab[i] + '</li></ul>'

                }
            }
        })

    let a = document.createElement('div'),
        li = document.querySelector('li'),
        ul = [...document.querySelectorAll('ul')];
    console.log(ul);
    await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        .then(data => data.json())
        .then(data => {
            console.log(data);









        })


}

async function getRandomMeal() {

    for (let i = 0; i < picture.length; i++) {
        ingredients[i].innerHTML = "";
        fetch(randomMeal)
            .then(data => data.json())
            .then(json => {


                info[0].picture[i].innerHTML = '<img src=' + json.meals[0].strMealThumb + ' alt="' + json.meals[0].strMeal + '">';
                info[0].nameMeal[i].innerHTML = json.meals[0].strMeal

                ///Afficher les ingrédients correspondants au plat///
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

                for (let c = 0; c < 20; c++) {

                    if (!(tab[c] == null) ^ (tab[c] == "")) {
                        ingredients[i].innerHTML = ingredients[i].innerHTML + '<ul>' + '<li>' + tab[c] + '</li></ul>';


                    }

                };


                // console.log(json)
            })
    }

    let a = document.createElement('div'),
        li = document.querySelector('li'),
        ul = [...document.querySelectorAll('ul')];
    console.log(ul);

    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        .then(data => data.json())
        .then(json => {
            console.log(json);
            for (let i = 0; i < ul.length; i++) {

                console.log(ul[i]);

                if (json[0].strIngredient !== "poulet") {
                    ul[i].innerHTML = ul[i].innerHTML + json.meals[0].strDescription

                }



            }






        })

}