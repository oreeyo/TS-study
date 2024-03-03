enum Shoes {
    nike,
    adidas
}

const myShoes = Shoes.nike
console.log(myShoes)

enum Answer {
    Yes = 'y',
    No = 'n'
}

function askQuestion (answer : Answer) {
    if(answer === Answer.Yes) {
        console.log('정답입니다')
    }
    
    if(answer === Answer.No) {
        console.log('오답입니다.')
    }
}

askQuestion(Answer.Yes)



// askQuestion('정답')
