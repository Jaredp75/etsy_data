// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
// Answer:


const priceAverage = function(data) {
  var price = 0,
      average;

  for (var i = 0; i < data.length; i++) {
    price += data[i].price;
  }
  average = price / data.length;
  return average;
};
console.log(priceAverage(data));

}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let arrayOfItems = [];
  	  for (let i = 0; i < data.length; i++){
  	    if (data[i].price >= 14 && data[i].price <= 18){
  	      arrayOfItems.push(data[i].title)
  	    }
  	  }
  	  return console.log(arrayOfItems.join('\r\n'));
  	}





//const filterItems = data.filter(function(price){
//  return data.price >= 14.00 && <= 18.00;
//});
//}





// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let GBPItem = "";
  	  for (let i = 0; i < data.length; i++){
  	    if (data[i].currency_code === "GBP"){
  	      GBPItem += data[i].title + " costs " + data[i].price + " pounds."
  	    }
  	  }
  	  return console.log(GBPItem);
  	}





// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 (data) {
  eightMaterials = []
  data.map((item) =>{
    if (item.materials.length >= 8){
      eightMaterials.push(item.materials)
    }
  })
  return eightMaterials
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}
