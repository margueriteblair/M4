
//JS file please fucking kill me
// yoooo mad funny - BA
document.addEventListener('DOMContentLoaded', () =>  {
    
    stockNameInput = document.createElement('input');
    stockNameInput.id = 'stockName';
    stockNameInput.placeholder = "Stock Name";
    document.getElementById("jsButtons").appendChild(stockNameInput);

    // stockNameButton = document.createElement('button');
    // stockNameButton.id = 'stockNameButton';
    // stockNameButton.innerText = 'Submit';
    // document.body.appendChild(stockNameButton);


    //// bobby' add code
    div1 = document.createElement('div');
    div1.id = 'firstDiv';
    document.getElementById("jsButtons").appendChild(div1);


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
    const apiKey = "add-api-key-here"

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
                let productImg = document.createElement("img")
                for (let i = 0; i < 1; i++) { //we will replace i < 1 with parsedResponseText after Jamie's part
                    outputData = outputData + `<li><p><a href=${parsedResponseText.products[i].url}>${parsedResponseText.products[i].title}</a></p></li><li><p>Price: $${parsedResponseText.products[i].price}</p></li><br>`
                    productImg.src = parsedResponseText.products[i].thumbnail;
                    productImg.id = "productImg"
                    document.getElementById("amazonProducts").appendChild(productImg);

                }
                outputData = outputData + '</ul>'
                document.getElementById('amazonProducts').innerHTML = outputData
                document.getElementById('amazonProducts').appendChild(productImg);
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

