const availableKeywords = ["Marie", "Hana", "Jana", "Petra", "Monika", "Tereza"]

const input = document.getElementById("input")
const resultBox = document.querySelector(".result-box")

const search = () => {
    const searchedText = input.value.toLowerCase()
    
    let results = searchedText.length ? availableKeywords.filter(oneWord => oneWord.toLowerCase().includes(searchedText)) : []

    results.length ? display(results) : resultBox.innerHTML = ""
    
}

const display = (results) => {
    const ul = document.createElement("ul")
    results.forEach(oneItem => {
        const li = document.createElement("li")
        li.textContent = oneItem
        ul.append(li)
        li.addEventListener("click", function () {
            input.value = oneItem
            resultBox.innerHTML = ""
        })
    })
    resultBox.innerHTML = ""
    resultBox.append(ul)
}

input.addEventListener("keyup", search)