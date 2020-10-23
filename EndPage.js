//Usama Naeem Toor. 301353233. 30th July 2020


let finalScore = document.querySelector('#finalScore')
let mostRecentScore = localStorage.getItem('mostRecentScore')
let stats = document.querySelector('#Status')

finalScore.innerText = mostRecentScore

function result () {
if (mostRecentScore < 3 ) {stats.innerText = 'Please try again!' } else {stats.innerText = 'You Pass! Yay!!'}
}

result()