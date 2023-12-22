let claimBtn = document.getElementById("claim-btn")
let inputs = document.querySelectorAll(".container__main-content__bottom input")
let inputCan = document.getElementsByClassName("inputcan")
const emailReg = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i

console.log(inputCan[0])

claimBtn.addEventListener("click", () => {
    if (inputs[0].value.trim() === "" && inputs[1].value.trim() === "" && inputs[2].value.trim() === "" && inputs[3].value.trim() === "") {
        errorMsg(inputCan[0], "First name cannot be empty")
        errorMsg(inputCan[1], "Last name cannot be empty")
        errorMsg(inputCan[2], "Email adress cannot be empty")
        errorMsg(inputCan[3], "Password cannot be empty")
    } else if (inputs[0].value.trim() === "") {
        errorMsg(inputCan[0], "First name cannot be empty")
    } else if (inputs[1].value.trim() === "") {
        errorMsg(inputCan[1], "Last name cannot be empty")
    } else if (inputs[2].value.trim() === "") {
        errorMsg(inputCan[2], "Email adress cannot be empty")
    } else if (emailReg.test(inputs[2].value.trim()) === false) {
        errorMsg(inputCan[2], "Looks like this is not an email")
    } else if (inputs[3].value.trim() === "") {
        errorMsg(inputCan[3], "Password cannot be empty")
    } else {
        document.location.reload()
    }
})

errorMsg = (pos, msg) => {
    let el = document.createElement("span")
    el.innerHTML = `<i>` + msg + `</i>`
    el.setAttribute("class", "errtxt")
    let img = document.createElement("img")
    img.setAttribute("class", "errimg")
    img.setAttribute("src", "images/icon-error.svg")

    if (pos.childElementCount <= 1) {
        pos.appendChild(el)
        pos.appendChild(img)  
    }

    for (let i = 0; i < inputs.length; i++) {

        for (let i = 0; i < inputCan.length; i++) {
    
            inputs[i].addEventListener("input", () => {
                inputCan[i].removeChild(el)
                inputCan[i].removeChild(img)
            })
        }
        
    }

}