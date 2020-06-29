
document.addEventListener('DOMContentLoaded', () => {


    pageTitle = document.createElement('h1');
    pageTitle.id = 'title';
    pageTitle.innerText = "Team : Drun-Codess"
    document.body.appendChild(pageTitle)
    pageTitle.style.color = 'darkgrey';
    pageTitle.style.height = ' 60px';

    pTag2 = document.createElement('p');
    pTag2.id = 'projectName';
    pTag2.innerText = 'Project : M4';
    document.body.appendChild(pTag2);
    pTag2.style.height = '50px';
    pTag2.style.color = 'green';




    stockNameInput = document.createElement('input');
    stockNameInput.id = 'stockName';
    stockNameInput.placeholder = "Stock Name";
    document.body.appendChild(stockNameInput)

    let div1 = document.createElement('div');
    div1.id = 'firstDiv';
    document.body.appendChild(div1)
    
    let div3 = document.createElement('div');
    div3.id = 'tickerSymbol';
    div3.innerText = '';
    document.body.appendChild(div3);

    let div4 = document.createElement('div');
    div4.id = 'amazonProducts';
    div4.innerText = '';
    document.body.appendChild(div4);

    let div5 = document.createElement('div');
    div5.id = 'spotLightProduct';
    div5.innerText = '';
    document.body.appendChild(div5);


    let pTag = document.createElement('p');
    pTag.id = 'totalReturn';
    pTag.innerText = 'Total Return : '
    document.body.appendChild(pTag);


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
    sharesButton.style.backgroundColor =  'blue' ;
    sharesButton.style.height = '25px';
    // sharesButton.style.borderRadius = "3px";



   

    // Stock API

    document.getElementById('sharesButton').addEventListener('click', stockReturn);
  
    function stockReturn() {
        const apiKey1 = 'shawns-apiKey';
        let apiKey = 'wills-apiKey';
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
                    // console.log("___________________");
                    // console.log(parsedResponseText.products.length)
    
                    // Displays Amazon products list
                    let outputData = '<ul>'
                    let allProductData = '<ul>'

                    let productImg = document.createElement("img")
                    let allProductImgs = document.createElement('img')

                    for (let i = 0; i < 10; i++) {
                        // console.log(profit)
                        // console.log(parseInt(parsedResponseText.products[i].price))
                        
                        if (parseInt(parsedResponseText.products[i].price) <= profit && profit > 0) {

                          allProductData = allProductData + `<li><p><a href=${parsedResponseText.products[i].url}>${parsedResponseText.products[i].title}</a></p></li><li><p>Price: $${parsedResponseText.products[i].price}</p><img src="${parsedResponseText.products[i].thumbnail}"></li><br>`

                          allProductImgs.src = parsedResponseText.products[i].thumbnail;
                          allProductImgs.id = 'allProductImgs'
                          document.getElementById('amazonProducts').appendChild(allProductImgs);
      

                            // console.log("hello")
                            // entire list of Amazon items that are equal or less then money gained from stocks
                            console.log(parsedResponseText.products[i].title)
                            console.log(parsedResponseText.products[i].price)    
                            console.log('pictures here')
                            console.log(parsedResponseText.products[i].thumbnail);
                            array.push(i)
                            // console.log(array)
                        } else if (parseInt(parsedResponseText.products[i].price) >= profit && profit < 0) { 
                            document.getElementById("amazonProducts").innerText = `lmao sis ya shouldnt be buying anything`; 
                        };
                    }
                    allProductData = allProductData + '</ul>'
                    document.getElementById('amazonProducts').innerHTML = allProductData
                    document.getElementById('amazonProducts').appendChild(allProductImgs);

                    console.log(`array length: ${array.length}`)
                    
    
                    let arLength = array.length
    
                    let randomNumber = Math.floor((Math.random() * arLength))
    
                    console.log(`random number: ${randomNumber}`)
    
                    console.log(array)
    
                    let selectNum = array.splice(randomNumber, 1)
    
                    console.log(`value of spliced number: ${selectNum}`)
    
                    console.log(array)
    
                    console.log(parsedResponseText.products[selectNum].title)
                    console.log(parsedResponseText.products[selectNum].price)
                    console.log('___________________')
    
                    outputData = outputData + `<li><p><a href=${parsedResponseText.products[selectNum].url}>${parsedResponseText.products[selectNum].title}</a></p></li><li><p>Price: $${parsedResponseText.products[selectNum].price}</p></li><br>`
                    productImg.src = parsedResponseText.products[selectNum].thumbnail;
                    productImg.id = "productImg"
                    document.getElementById("spotLightProduct").appendChild(productImg);
    
    
                    outputData = outputData + '</ul>'
                    document.getElementById('spotLightProduct').innerHTML = outputData
                    document.getElementById('spotLightProduct').appendChild(productImg);

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


        

    

})

