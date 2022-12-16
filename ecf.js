///Déclaration des variables

const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php",
    mealId = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772",
    allIng = "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    body = document.querySelector('body');



let change = document.querySelector('#change'),
    x = "";
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

        ///désactiver la barre de scroll durant la modale
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

            for (let c = 0; c < 20; c++) {

                if (!(tab[c] == null) ^ (tab[c] == "")) {

                    ingredients[i].innerHTML = ingredients[i].innerHTML + '<div>' + tab[c] + '</div>';
                    let listIng = [...document.querySelectorAll("div")];
                    console.log(listIng);
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
        let response = await fetch(randomMeal);
        response = await response.json();

        picture.forEach(elment => {
            info[0].picture[i].innerHTML = '<img src=' + response.meals[0].strMealThumb + ' alt="' + response.meals[0].strMeal + '">';
            info[0].nameMeal[i].innerHTML = response.meals[0].strMeal
        })



        ///Afficher les ingrédients correspondants au plat///
        let tab = [response.meals[0].strIngredient1,
        response.meals[0].strIngredient2,
        response.meals[0].strIngredient3,
        response.meals[0].strIngredient4,
        response.meals[0].strIngredient5,
        response.meals[0].strIngredient6,
        response.meals[0].strIngredient7,
        response.meals[0].strIngredient8,
        response.meals[0].strIngredient9,
        response.meals[0].strIngredient10,
        response.meals[0].strIngredient11,
        response.meals[0].strIngredient12,
        response.meals[0].strIngredient13,
        response.meals[0].strIngredient14,
        response.meals[0].strIngredient15,
        response.meals[0].strIngredient16,
        response.meals[0].strIngredient17,
        response.meals[0].strIngredient18,
        response.meals[0].strIngredient19,
        response.meals[0].strIngredient20,];


        for (let c = 0; c < 20; c++) {

            ///ajout de nom des ingrédients///
            if (!(tab[c] == null) ^ (tab[c] == "")) {

                console.log(tab[c]);

                let nameIng = document.createElement('div'),

                    detailIng = document.createElement('div');
                textIng = document.createTextNode(tab[c]);
                nameIng.classList.add('nameIng');
                detailIng.classList.add('detailIng');
                detailIng.setAttribute('data-id', tab[c]);

                nameIng.appendChild(textIng);
                nameIng.appendChild(detailIng);



                ingredients[i].appendChild(nameIng);

            }

        }

    }

    let a = [...document.querySelectorAll('[data-id]')];
    b = a.map(element => '' + element.dataset.id + '');
    console.log(a);
    console.log(b);
    console.log(a[0]);
    console.log(a[0].dataset.id);
    for (let c = 0; c < a.length; c++) {



        fetch(allIng)
            .then(data => data.json())
            .then(ing => {
                console.log(ing);
                console.log(a[0].dataset.id);
                for (let i = 0; i < ing.meals.length; i++) {


                    if (ing.meals[i].strIngredient === "Oil") {

                        a[c].innerHTML = ing.meals[i].strDescription;
                        if
                            (ing.meals[i].strDescription == null ^ ing.meals[i].strDescription == "") { a[c].innerHTML = "No description available" }
                    } else { console.log("nope"); }
                }



            })



    }
}

// let a = document.querySelector('.ab')

// fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
//     .then(data => data.json())
//     .then(json => {
//         console.log(json);
//         console.log(json.meals[0].strIngredient);
//         console.log(json.meals.length);
//         for (let i = 0; i < json.meals.length; i++) {
//             if (json.meals[i].strIngredient == "Salmon") {

//                 console.log(json.meals[i].strDescription);

//                 a.innerHTML = json.meals[i].strDescription;
//                 if
//                     (json.meals[i].strDescription == null) { a.innerHTML = "No description available" }
//             }

//         }




//     })