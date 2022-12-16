///Déclaration des variables

const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php",
    mealId = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772",
    allIng = "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    body = document.querySelector('body');



let change = document.querySelector('#change');


///déclaration de tableaux facilitant mon code///
let picture = [...document.querySelectorAll('.picMeal')],

    ///Variables noms de plat///
    nameMeal = [...document.querySelectorAll('.nameMeal')],

    ///tableaux pour la modale
    list = [...document.querySelectorAll('.choice')],
    modal = [...document.querySelectorAll('.modal')],

    ingredients = [...document.querySelectorAll('.ingredients')],
    gauche = [...document.querySelectorAll('.gauche')],

    footerLogo = [...document.querySelectorAll('.t')];


///Rassemblement des différents tableaux en 1 avec objets ( pour le Fun)  
let info = [{ picture, nameMeal }, { list, modal }];


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

///appel de la fonction principale
getRandomMeal();
// for (let i = 0; i < footerLogo.length; i++) {
//     footerLogo.addEventListener('click', () => {

//         alert("En construction par manque de temps \nl'administration vous présente ses plus plates excuses pour le dérangement");
//     })
// }




async function getRandomMeal() {

    ///Ajout des 3 plats aléatoires via la fonction établie
    for (let i = 0; i < picture.length; i++) {
        ingredients[i].innerHTML = "";
        let response = await fetch(randomMeal);
        response = await response.json();
        //images correspondants aux plats
        picture.forEach(element => {
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

        ///liste des ingrédients///
        for (let c = 0; c < 20; c++) {

            // si l'emplacement de l'ingrédient est différent de " " ou exclusif Null alors je procède aux instructions de cration de div et de l'ajout de l'ingrédient du plat//
            if (!(tab[c] == null) ^ (tab[c] == "")) {

                let nameIng = document.createElement('div'),
                    detailIng = document.createElement('div');

                // instructions de création de bloc aliments
                textIng = document.createTextNode(tab[c]);
                nameIng.classList.add('nameIng');
                detailIng.classList.add('detailIng');
                detailIng.setAttribute('data-id', tab[c]);
                nameIng.appendChild(textIng);
                nameIng.appendChild(detailIng);

                //ajout des ingredients
                ingredients[i].appendChild(nameIng);

                // description de chaque aliments ( en construction)

                // let a = [...document.querySelectorAll('[data-id]')];
                // b = a.map(element => '' + element.dataset.id + '');

                // fetch(allIng)
                //     .then(data => data.json())
                //     .then(ing => {

                //         for (let i = 0; i < ing.meals.length; i++) {

                //             if (ing.meals[i].strIngredient == a[c].dataset.id) {

                //                 a[c].innerHTML = ing.meals[i].strDescription;
                //                 if
                //                     (ing.meals[i].strDescription == null ^ ing.meals[i].strDescription == "") { a[c].innerHTML = "No description available" }
                //             } else { console.log("nope"); }


                //         }
                //     })
                // description de chaque aliments ( en construction)

            }

        }

    }

}

