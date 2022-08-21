// ..........Step-2.................

function updatePhoneNumber(isIncrease){
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneValueString = phoneInputField.value;
    const phoneValue = parseFloat(phoneValueString);
    let phoneValueTotal;
    if(isIncrease===true){
        phoneValueTotal  =phoneValue+1;
    }
    else{
        phoneValueTotal= phoneValue-1
    }
    phoneInputField.value = phoneValueTotal;

    return phoneValueTotal;
}

// ..........Step-3.................
function updateTotalPhoneNumber(myPhoneNumber){
    const phoneMultiplication = myPhoneNumber*1219;
    const phonePrice = document.getElementById('phone-total');
    phonePrice.innerText =phoneMultiplication
}

// ..........Step-4.................


// ..........Step-1.................

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const myPhoneNumber =updatePhoneNumber(true);
    updateTotalPhoneNumber(myPhoneNumber)
    subTotal()
 
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const myPhoneNumber =updatePhoneNumber(false);
    updateTotalPhoneNumber(myPhoneNumber)
    subTotal()
})