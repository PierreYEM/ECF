let choice1 = document.querySelector('.choice1'),
    choice2 = document.querySelector('.choice2'),
    choice3 = document.querySelector('.choice3'),
    modal1 = document.querySelector('.modal1'),
    modal2 = document.querySelector('.modal2'),
    modal3 = document.querySelector('.modal3');

let list = [choice1, choice2, choice3],
    modal = [modal1, modal2, modal3],
    listCHoice = document.querySelector('#listChoice'),
porpositions=document.querySelector('.propositions');

for (let i = 0; i < list.length; i++) {

    list[i].addEventListener('click', () => {
        list[i].style.cssText = " position:static;height: 90%;width: 80%"
        modal[i].classList.toggle('test');
// listCHoice.style.cssText='height:100%;width:100%'

    })

}


function createModale() {
    let modalWrap = document.createElement('div');
    modalWrap.classList.add('modalWrap');

    listCHoice.appendChild(modalWrap)
    modalWrap.appendChild(choice1);



}