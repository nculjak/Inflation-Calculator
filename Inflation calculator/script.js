function inflationCalculator() {

    let inflationRate = document.querySelector('#inflationRate')
    inflationRate = parseFloat(inflationRate.value)

    let money = document.querySelector ('#money')
    money = parseFloat(money.value)

    let years = document.querySelector ('#years')
    years = parseFloat (years.value)

   let worth = money + (money * (inflationRate)/100)

    for (let i =1; i<years; i++){
        worth += worth * (inflationRate/100)
    }
    worth = worth.toFixed(2)
    console.log(worth)


    //new element 

    let newElement = document.createElement('div')
    newElement.className = 'new-element'
    newElement.innerHTML = `Današnjih ${money} € će za ${years} godina vrijediti ${worth} €.`

    document.querySelector('.container').appendChild(newElement)
}