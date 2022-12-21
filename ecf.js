///Déclaration des variables

const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php",
    mealId = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772",
    allIng = "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    body = document.querySelector('body');



let change = document.querySelector('#change'),
    choice1 = document.querySelector('.choice1'),
    choice2 = document.querySelector('.choice2'),
    choice3 = document.querySelector('.choice3');



///déclaration de tableaux facilitant mon code///
let picture = [...document.querySelectorAll('.picMeal')],

    ///Variables noms de plat///
    nameMeal = [...document.querySelectorAll('.nameMeal')],

    ///tableaux pour la modale
    choices = [choice1, choice2, choice3],
    modal = [...document.querySelectorAll('.modal')],

    ingredients = [...document.querySelectorAll('.ingredients')],
    gauche = [...document.querySelectorAll('.gauche')],

    footerLogo = [...document.querySelectorAll('.networks')];


///Rassemblement des différents tableaux en 1 avec objets ( pour le Fun)  
let info = [{ picture, nameMeal }, { choices, modal }];


///Bouton changer = consiste à rafraichir la page afin que le fetch se relance
change.addEventListener("click", () => getRandomMeal())

///Ouverture de fenêtre modale   
for (let i = 0; i < choices.length; i++) {

    choices[i].addEventListener('click', () => {

        ///désactiver la barre de scroll durant la modale
        body.classList.toggle('scrollOnOff');

        gauche[i].classList.toggle('gaucheModal');

        /* switch condition responsive pour format mobile */
        switch (choices[i]) {
            case choice1:
                if (window.screen.width > 426) {
                    choice2.classList.toggle('slideLeft');
                    choice3.classList.toggle('slideRight');
                }
                else {
                    choice2.classList.toggle('slideUp');
                    choice3.classList.toggle('slideDown');
                }

                break;
            case choice2:
                if (window.screen.width > 426) {
                    choice1.classList.toggle('slideLeft');
                    choice3.classList.toggle('slideRight');
                }
                else {
                    choice1.classList.toggle('slideUp');
                    choice3.classList.toggle('slideDown');
                }

                break;
            case choice3:
                if (window.screen.width > 426) {
                    choice1.classList.toggle('slideLeft');
                    choice2.classList.toggle('slideRight');
                }
                else {
                    choice1.classList.toggle('slideUp');
                    choice2.classList.toggle('slideDown');
                }

                break;

            default:
                break;
        }

        choices[i].classList.toggle('choiceModal');


        setTimeout(() => {
            ingredients[i].classList.toggle('ingredientsModal');

        }, 100);


        nameMeal[i].classList.toggle('nameMealModal');
        picture[i].classList.toggle('picMealModal')

    })

};

///appel de la fonction principale
getRandomMeal();
for (let i = 0; i < footerLogo.length; i++) {
    footerLogo[i].addEventListener('click', () => {

        alert("En construction par manque de temps \nl'administration vous présente ses plus plates excuses pour le dérangement");
    })
}




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

        /* Créer un tableau vierge à chaque repas et le remplir avec les 20 emplacements d'ingrédients*/
        let tabIng = new Array;

        for (let i = 1; i < 20; i++) {

            tabIng.push(response.meals[0][`strIngredient${i}`])

        }
        /*  */

        /*  */
        for (let c = 0; c < 20; c++) {

            /// Si l'ingrédient est "true" soit différent de null ou "" alors on procède aux instructions de création de div et de texte
            if (tabIng[c]) {

                const nameIng = document.createElement('div'),
                    detailIng = document.createElement('div');

                // instructions de création de bloc aliments
                textIng = document.createTextNode(tabIng[c]);
                nameIng.classList.add('nameIng');
                detailIng.classList.add('detailIng');
                detailIng.setAttribute('data-id', tabIng[c]);
                nameIng.appendChild(textIng);
                nameIng.appendChild(detailIng);

                //ajout des ingredients dans la partie correspondante
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

// const doubleSided = document.querySelector('.double-sided');
// doubleSided.addEventListener('click', function () {
//     this.classList.toggle('flipped');
// });
