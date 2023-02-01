async function getChuckNorrisQuote() {
    const randNum = Math.ceil(Math.random(1,10)*10)
    console.log(randNum)
    document.getElementById("chuckNorrisImage").src=`/images/chuck_norris/chuck-norris${randNum}.jpg`
    const response = await fetch('/chucknorrisrandomjoke')
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    const fact = jsonResponse.value
    

    document.getElementById("chuckNorrisQuote").innerHTML = fact
    

    
}

window.addEventListener("load", event => {
    getChuckNorrisQuote()
    document.getElementById("refreshButton").addEventListener("click", () => {
        getChuckNorrisQuote()
    })
    

})
