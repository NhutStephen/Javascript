function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10))


function multipleProduct (product1, product2) {
    return product1 * product2;
}
const tryDoSomeMultiple = multipleProduct(500, 500)
console.log(tryDoSomeMultiple)


//Init lesson 5: Anonymous Function
setTimeout(function() {
    console.log("I am so stupid")
}, 1000);