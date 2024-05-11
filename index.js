const question = document.querySelectorAll('.qstn')
const answer = document.querySelectorAll('.ans')
const plusMinus = document.querySelectorAll('.plus-minus')

question.forEach( (qstn, index) => {
qstn.addEventListener('click', () => {
    removeActiveClass()
    plusMinus[index].innerHTML = '<img src="images/icon-minus.svg" alt="plus-img">'
    answer[index].classList.add('active')

})
} )

function removeActiveClass(){
    answer.forEach((ans, ind) => {
        ans.classList.remove('active')
        plusMinus[ind].innerHTML = '<img src="images/icon-plus.svg" alt="plus-img">'
    })
}
