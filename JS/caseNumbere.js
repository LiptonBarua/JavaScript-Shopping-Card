
function updateCaseNumber(isIncrease){
    const inputField = document.getElementById("input-Field");
    const inputPlusValueString = inputField.value;
    const inputPlusValue = parseFloat(inputPlusValueString);
    let inputPlusValueTotal;
    if(isIncrease===true){
        inputPlusValueTotal = inputPlusValue+1;
    }
    else{
        inputPlusValueTotal = inputPlusValue-1
    }
    inputField.value = inputPlusValueTotal

    return inputPlusValueTotal;
}


function updateTotalCaseNumber(newNumumber){
    const newNumumberMultiplication = newNumumber*59;
    const casePrice = document.getElementById('case-total');
    casePrice.innerText = newNumumberMultiplication;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newNumumber=updateCaseNumber(true);
    updateTotalCaseNumber(newNumumber)
    subTotal()

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newNumumber=updateCaseNumber(false);
    updateTotalCaseNumber(newNumumber)
    subTotal()
   
})