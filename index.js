let products = [
    { id: 1, name: "Ürün 1", price: 10.99, category: "Elektronik" },
    { id: 2, name: "Ürün 2", price: 15.49, category: "Giyim" },
    { id: 3, name: "Ürün 3", price: 5.99, category: "Mutfak" },
    { id: 4, name: "Ürün 4", price: 7.99, category: "Elektronik" },
    { id: 5, name: "Ürün 5", price: 12.99, category: "Giyim" },
    { id: 6, name: "Ürün 6", price: 9.99, category: "Mutfak" },
    { id: 7, name: "Ürün 7", price: 19.99, category: "Elektronik" },
    { id: 8, name: "Ürün 8", price: 3.99, category: "Giyim" },
    { id: 9, name: "Ürün 9", price: 8.49, category: "Mutfak" },
    { id: 10, name: "Ürün 10", price: 11.99, category: "Elektronik" },
    { id: 11, name: "Ürün 11", price: 14.99, category: "Giyim" },
    { id: 12, name: "Ürün 12", price: 17.99, category: "Mutfak" },
    { id: 13, name: "Ürün 13", price: 6.99, category: "Elektronik" },
    { id: 14, name: "Ürün 14", price: 13.49, category: "Giyim" },
    { id: 15, name: "Ürün 15", price: 4.99, category: "Mutfak" },
    { id: 16, name: "Ürün 16", price: 8.99, category: "Elektronik" },
    { id: 17, name: "Ürün 17", price: 22.99, category: "Giyim" },
    { id: 18, name: "Ürün 18", price: 9.49, category: "Mutfak" },
    { id: 19, name: "Ürün 19", price: 16.99, category: "Elektronik" },
    { id: 20, name: "Ürün 20", price: 7.49, category: "Giyim" }
  ];
 
// for (let element of products){
//   if (element.category=="Elektronik"){
//     console.log(element.name);
//   }
// }

// for (let i = 0; i < products.length; i++) {
// if (i%2==1) {
//   console.log(products[i].category);
// } 
// }
let element = []; 
for (let i = 0; i < products.length; i++) {
if (products[i].id%2) {
   element.push(products[i]); 
} 
}
console.log(element);

    