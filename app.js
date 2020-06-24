//JS file please fucking kill me

document.addEventListener('DOMContentLoaded', function() {
    
    stockNameInput = document.createElement('input');
    stockNameInput.id = 'stockName';
    stockNameInput.placeholder = "Stock Name";
    document.body.appendChild(stockNameInput);
    
    stockNameButton = document.createElement('button');
    stockNameButton.id = 'stockNameButton';
    stockNameButton.innerText = 'Submit';
    document.body.appendChild(stockNameButton);

})
