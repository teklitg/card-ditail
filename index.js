/* display */
const card_number = document.getElementById("card-number")
const card_name = document.getElementById("card-name")
const cvc_one= document.querySelector("cvc-one")
const expair= document.querySelector("expaire")


/*form */

const name= document.getElementById("name")
const number= document.getElementById("number")
const exp_m= document.getElementById("month")
const exp_y= document.getElementById("year")
const cvc= document.getElementById("cvc")

/* erro box */
const nan= document.getElementById("nan")

/* card details update in real-time */

/* update name */
name.addEventListener("input", function () {
    card_name.innerHTML = this.value
})

/* update number */

number.addEventListener("input", function () {
    card_number.innerHTML = this.value

    if (isNaN(card_number)) {
        nan.innerHTML = "Wrong input, only a number"
        card_number.style.borderColor = "red"
    }

    console.log(isNaN(card_number.innerHTML))
   
})


