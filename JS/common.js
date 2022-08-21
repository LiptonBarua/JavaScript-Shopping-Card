function caseAndPhoneCalculation(elementId){
    const caseAndPhoneField = document.getElementById(elementId);
    const caseAndPhoneValueString = caseAndPhoneField.innerText;
    const caseAndPhoneValue = parseFloat(caseAndPhoneValueString)
    return caseAndPhoneValue;
  }


  function textTotalAmount(elementId, value){
    const subAmount = document.getElementById(elementId);
    subAmount.innerText = value;
  }
// ..........Step-5.................

  function subTotal(){
    const currentPhoneTotal= caseAndPhoneCalculation('phone-total');
    const currentCaseTotal =caseAndPhoneCalculation('case-total')
    const caseAndPhoneSum = currentPhoneTotal+currentCaseTotal;
    textTotalAmount('sub-amount', caseAndPhoneSum);

    const textTotal = caseAndPhoneSum/100*10;
    textTotalAmount('text-amount', textTotal)

    const finalAmount = caseAndPhoneSum+textTotal;
    textTotalAmount('final-amount', finalAmount)

  }



