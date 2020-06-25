document.addEventListener('DOMContentLoaded', () =>  {
    
    stockNameInput = document.createElement('input');
    stockNameInput.id = 'stockName';
    stockNameInput.placeholder = "Stock Name";
    document.body.appendChild(stockNameInput);
    
    stockNameButton = document.createElement('button');
    stockNameButton.id = 'stockNameButton';
    stockNameButton.innerText = 'Submit';
    document.body.appendChild(stockNameButton);





        //// bobby' add code
    div1 = document.createElement('div');
    div1.id = 'firstDiv';
    document.body.appendChild(div1);


    sharesInput = document.createElement('input');
    sharesInput.id = 'stockShares';
    sharesInput.placeholder = "Enter How Many Shares You've Purchased";
    div1.appendChild(sharesInput);
    
    sharesButton = document.createElement('button');
    sharesButton.id = 'sharesButton';
    sharesButton.innerText = 'Submit'
    div1.appendChild(sharesButton)
    
    
    sharesButton = document.querySelector('#sharesButton');
    sharesButton.style.color = 'white';
    sharesButton.style.backgroundColor = 'blue';
    sharesButton.style.height = '40px'
    
    
})