//JS file please fucking kill me

document.addEventListener('DOMContentLoaded', () => {

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

    // Begining of Amazon API
    document.getElementById('sharesButton').addEventListener('click', loadText)
    const apiKey = "paste_apikey_here"
    function loadText() {

        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                let parsedResponseText = JSON.parse(this.responseText)
                console.log(parsedResponseText);

                // Displays Amazon products list
                let outputData = '<ul>'
                for (let i = 0; i < parsedResponseText.products.length; i++) {
                    outputData = outputData + `<li><h5>Product: ${parsedResponseText.products[i].title}</h5></li><li><p>Price: $${parsedResponseText.products[i].price}</p></li><li><p>Rating: ${parsedResponseText.products[i].rating} Stars</p></li><li><p><a href=${parsedResponseText.products[i].url}>${parsedResponseText.products[i].url}</a></p></li><br>`

                }
                outputData = outputData + '</ul>'
                document.getElementById('amazonProducts').innerHTML = outputData
            } else if (this.status === 404) {
                document.getElementById("amazonProducts").innerHTML = "404 ERROR: Data Not Found!"
            }
        });

        xhr.open("GET", "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?country=US&keyword=Lightning%20Deals");
        xhr.setRequestHeader("x-rapidapi-host", "amazon-product-reviews-keywords.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", apiKey);

        xhr.send(data);

    }

})