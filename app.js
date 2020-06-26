
document.addEventListener('DOMContentLoaded', () => {

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
    sharesButton.style.height = '40px';


    // Stock API

    document.getElementById('sharesButton').addEventListener('click', stockReturn);
  
    function stockReturn() {
        const apiKey1 = 'WDKZS0GMSWNAXG41';
        let apiKey = '1833d3125cmsh0ab8c932d47a9a1p1baa09jsnd57107bb5df9';
        const ticker = document.getElementById(stockNameInput.id).value;
        // const interval = '5min';
        const functionName = 'TIME_SERIES_DAILY';
        // const outputSize = 'full';
        const url = `https://www.alphavantage.co/query?function=${functionName}&symbol=${ticker}&apikey=${apiKey1}`;

        const xhr = new XMLHttpRequest();
    
        xhr.open('GET', url, true);
    
        xhr.onload = function () {
          if (this.status === 200 && this.readyState === 4) {
            let stockParsedText = JSON.parse(this.responseText);
            console.log(stockParsedText);

            
            let objectKey = [Object.keys(stockParsedText['Time Series (Daily)'])];
            let objectEntries = Object.entries(stockParsedText['Time Series (Daily)']);

            console.log(objectEntries[0][1]['4. close']);

            let openPrice = objectEntries[0][1]['1. open']; //[1] accessing date
            let closePrice = objectEntries[0][1]['4. close'];
            let shares = document.getElementById(sharesInput.id).value;
            let profit = (shares*openPrice) - (shares*closePrice);
            
            console.log(objectKey[0][0]); //date given
            html = `<p>Total Return For The Day:$${profit.toFixed(2)}</p>`;
            document.getElementById('totalReturn').innerHTML = html
            
            const data = null;
            const array = [];
    
            const xhrAmazon = new XMLHttpRequest();
            xhrAmazon.withCredentials = true;
    
            xhrAmazon.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    let parsedResponseText = JSON.parse(this.responseText)
                    console.log(parsedResponseText)
                    console.log("___________________");
    
                    // Displays Amazon products list
                    let outputData = '<ul>'
                    let productImg = document.createElement("img")
    
                    for (let i = 0; i < parsedResponseText.products.length; i++) { //we will replace i < 1 with parsedResponseText after Jamie's part
                        if (parsedResponseText.products[i].price <= profit) {
    
                            // entire list of Amazon items that are equal or less then money gained from stocks
                            // console.log(parsedResponseText.products[i].title)
                            // console.log(parsedResponseText.products[i].price)
                            // console.log(i) // index of the Amazon item
    
                            array.push(i)
                            console.log("___________________");
                        }
                    }
                    console.log(`array length: ${array.length}`)
    
                    let arLength = array.length
    
                    let randomNumber = Math.floor((Math.random() * arLength))
    
                    console.log(`random number: ${randomNumber}`)
    
                    console.log(array)
    
                    let selectNum = array.splice(randomNumber, 1)
    
                    console.log(`value of spliced number: ${selectNum}`)
    
                    console.log(array)
    
                    // console.log(parsedResponseText.products[selectNum].title)
                    // console.log(parsedResponseText.products[selectNum].price)
                    // console.log('___________________')
    
                    outputData = outputData + `<li><p><a href=${parsedResponseText.products[selectNum].url}>${parsedResponseText.products[selectNum].title}</a></p></li><li><p>Price: $${parsedResponseText.products[selectNum].price}</p></li><br>`
    
                    productImg.src = parsedResponseText.products[selectNum].thumbnail;
                    productImg.id = "productImg"
    
                    document.getElementById("amazonProducts").appendChild(productImg);
    
    
                    outputData = outputData + '</ul>'
                    document.getElementById('amazonProducts').innerHTML = outputData
                    document.getElementById('amazonProducts').appendChild(productImg);
                } else if (this.status === 404) {
                    document.getElementById("amazonProducts").innerHTML = "404 ERROR: Data Not Found!"
                }
            });
    
            xhrAmazon.open("GET", "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?country=US&keyword=Lightning%20Deals");
            xhrAmazon.setRequestHeader("x-rapidapi-host", "amazon-product-reviews-keywords.p.rapidapi.com");
            xhrAmazon.setRequestHeader("x-rapidapi-key", apiKey);
    
            xhrAmazon.send(data);
    



          } else if (this.status === 400) {
            console.log('404 Error...Try Again');
          }
        } 
        xhr.send();
      }


    // Begining of Amazon API
    //document.getElementById('sharesButton').addEventListener('click', loadText)

    //function loadText() {

        //const data = null;
        

        //const array = []

        

    

})