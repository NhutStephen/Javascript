//Define an object
const cookie= {
    name: "Chocolate Chip",
    isGluttenFree: false,
    "+Yummy": true
}

//Calling object and it value => Giving with another value (latest)
cookie.name = "Minh Nhut bakery"
cookie.isGluttenFree = true

//Calling value from object
console.log(cookie["+Yummy"])

//Expected: When calling object, it always getting the latest result like Minh Nhut bakery
console.log(cookie)