let inputBill = document.getElementById("money-amount");
let inputPeople = document.getElementById("num-of-people");
let billErrorMessage = document.getElementById("bill-input-error");
let peopleErrorMessage = document.getElementById("people-input-error");


let personTip = document.getElementById("person-tip");
let totalTip = document.getElementById("total-tip");

let custom = document.getElementById("custom-tip-button");


addEventListener("keydown", function(e){
    if (e.code==="Enter"){
        customTip();
    }
})


function fiveTip(){
    const isBillInputValid = +inputBill.value > 0;
    const isPeopeInputValid = +inputPeople.value > 0;
    if(!isBillInputValid){
    inputBill.style.borderWidth = "thin";
    inputBill.style.borderColor = "red";
    billErrorMessage.innerHTML = "Enter valid number";
    }

    if(!isPeopeInputValid){
        inputPeople.style.borderWidth = "thin";
        inputPeople.style.borderColor = "red";
        peopleErrorMessage.innerHTML = "Enter valid number";
    }

    if(isBillInputValid && isPeopeInputValid){
    inputBill.style.borderColor = "hsl(189, 41%, 97%)";
    inputPeople.style.borderColor = "hsl(189, 41%, 97%)";
    billErrorMessage.innerHTML = "";
    peopleErrorMessage.innerHTML = "";
    personTip.innerHTML = "$" + Math.floor((inputBill.value * 5/100) / inputPeople.value * 100) / 100;
    totalTip.innerHTML = "$" + Math.floor((inputBill.value * 5/100) * 100) / 100;
    }
}

function tenTip(){
    personTip.innerHTML = "$" + Math.floor((inputBill.value * 10/100) / inputPeople.value * 100) / 100;
    totalTip.innerHTML = "$" + Math.floor((inputBill.value * 10/100) * 100) / 100;
}

function fifteenTip(){
    personTip.innerHTML = "$" + Math.floor((inputBill.value * 15/100) / inputPeople.value * 100) / 100;
    totalTip.innerHTML = "$" + Math.floor((inputBill.value * 15/100) * 100) / 100;
}


function twentyFiveTip(){
    personTip.innerHTML = "$" + Math.floor((inputBill.value * 25/100) / inputPeople.value * 100) / 100;
    totalTip.innerHTML = "$" + Math.floor((inputBill.value * 25/100) * 100) / 100;
}

function fiftyTip(){
    personTip.innerHTML = "$" + Math.floor((inputBill.value * 50/100) / inputPeople.value * 100) / 100;
    totalTip.innerHTML = "$" + Math.floor((inputBill.value * 50/100) * 100) / 100;
}

function customTip(){
    personTip.innerHTML = "$" + Math.floor((inputBill.value * custom.value) / inputPeople.value * 100) / 100;
    totalTip.innerHTML = "$" + Math.floor((inputBill.value * custom.value) * 100) / 100;
}


function reset(){
    inputBill.value = "";
    inputPeople.value = "";
    custom.value = "";
    personTip.innerHTML = "$0.00";
    totalTip.innerHTML = "$0.00";
}