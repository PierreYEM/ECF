///Déclaration des variables

const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php"


let change = document.querySelector('#change'),
    ingredients = document.querySelector('ingredients')







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


fetch(randomMeal)
    .then(data => data.json())
    .then(json => {
        try{        console.log(json.meals[0].strIngredient[i]);
}
catch(error){console.log("ok");}


//
let tab=new Array;
        for (let i = 0; i < 20; i++) {

tab[i]="json.meals[0].strIngredient"+[i+1]
;console.log(tab);





            if (tab[i] !== "" || tab[i]!== "null") {



                ingredients.innerHTML = '<ul>' + '<li>' +tab[i]+'</li></ul>'



            }
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