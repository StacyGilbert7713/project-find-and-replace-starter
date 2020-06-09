const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

const rowElements = document.querySelectorAll(".row")
    function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function(){
    let inputRequired = findInput.value
    let adjustInput = replaceInput.value
    for (let index = 0; index < rowElements.length; index += 1){
        input = getCellElements(rowElements[index])
        console.log(input)
        for (let legend = 0; legend < input.length; legend += 1){
            let moreInput = input[legend].innerText
            console.log(moreInput);
            if (moreInput.includes(inputRequired)){
                let nested = input[legend]
                let loop = nested.innerHTML
                let secure = loop.replace(inputRequired, adjustInput)
                nested.innerHTML = secure

            }

        }
    }
})
