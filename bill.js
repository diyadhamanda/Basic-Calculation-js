/* Bill */

let pname = 'shampoo';
let price = 780;
let quantity = 3;
let dis = 0.12;

let Total = price * quantity;
let discount = Total * dis;
let NetTotal = Total - discount;

console.log();
console.log("*** TOTAL BILL RECEIPT ***")
console.log();
console.log("Product Name is :" +pname);
console.log("Product price is :" +price);
console.log("Product quantity is :" +quantity);
console.log("Total of the product :" +Total);
console.log("Discount is :" +discount);
console.log("-------------------------")
console.log("Net Total  is :" +NetTotal);



