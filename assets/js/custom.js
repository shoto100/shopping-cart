//! Shopping Cart JS
const phoneIncreaseButton = document.getElementById("phoneIncreaseButton");
const phoneDecreaseButton = document.getElementById("phoneDecreaseButton");
const caseIncreaseButton = document.getElementById("caseIncreaseButton");
const caseDecreaseButton = document.getElementById("caseDecreaseButton");
const removePhoneCart = document.getElementById("removePhoneCart");
const removeCaseCart = document.getElementById("removeCaseCart");

// ! phone Increase Button
phoneIncreaseButton.addEventListener("click", function() {
    var phoneValue = Number(document.getElementById("phoneInput").value);
    phoneValue++;
    
    document.getElementById("phoneInput").value = phoneValue;

    var totalPhonePrice = phoneValue * 1219;
    document.getElementById("totalPhonePrice").innerText = totalPhonePrice;

    totalPrice();
})


// ! phone Decrease Button
phoneDecreaseButton.addEventListener("click", function() {
    var phoneValue = Number(document.getElementById("phoneInput").value);
    phoneValue--;
    
    if (phoneValue < 0) {
        return phoneValue == 0;
    }
    
    document.getElementById("phoneInput").value = phoneValue;

    var totalPhonePrice = phoneValue * 1219;
    document.getElementById("totalPhonePrice").innerText = totalPhonePrice;

    totalPrice();
})


// ! case Increase Button
caseIncreaseButton.addEventListener("click", function() {
    var caseValue = Number(document.getElementById("caseInput").value);
    caseValue++;
    
    document.getElementById("caseInput").value = caseValue;

    var totalCasePrice = caseValue * 59;
    document.getElementById("totalCasePrice").innerText = totalCasePrice;

    totalPrice();
})


// ! case Decrease Button
caseDecreaseButton.addEventListener("click", function() {
    var caseValue = Number(document.getElementById("caseInput").value);
    caseValue--;
    
    if (caseValue < 0) {
        return caseValue == 0
    }
    
    document.getElementById("caseInput").value = caseValue;

    var totalCasePrice = caseValue * 59;
    document.getElementById("totalCasePrice").innerText = totalCasePrice;

    totalPrice();
})

//! remove phone cart
removePhoneCart.addEventListener("click", function() {
    var phoneCart = document.getElementById("phoneCart");
    phoneCart.style.display = "none";

    
    document.getElementById("totalPhonePrice").innerText = 0;
    totalPrice();
})

//! remove case cart
removeCaseCart.addEventListener("click", function() {
    var caseCart = document.getElementById("caseCart");
    caseCart.style.display = "none";

    document.getElementById("totalCasePrice").innerText = 0;
    totalPrice();
})

//! Total price
function totalPrice() {
    var totalPhonePrice = parseFloat(document.getElementById("totalPhonePrice").innerText);
    var totalCasePrice = parseFloat(document.getElementById("totalCasePrice").innerText);
    var totalPrice = (totalPhonePrice + totalCasePrice);
    
    document.getElementById("subTotal").innerText = totalPrice;
    document.getElementById("total").innerText = totalPrice;
}