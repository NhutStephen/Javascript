// T T => T [First Condition]
// T F => F [Second Condition]
// F T => F [Third Condition]
// F F => F [Fourth Condition]

const Nhut = {
    gender: "male",
    age: 23,
    salary: 1000
}

if (Nhut.age == 24 && Nhut.gender == "male" && Nhut.salary == 1000) {
    console.log("First Condition: Rich man")
} if ((Nhut.age == 24 && Nhut.gender == "male") && Nhut.salary == 500) {
    console.log("Second Condition: Not a rich man")
} if (Nhut.age == 23 && (Nhut.gender == "male" && Nhut.salary == 1000)) {
    console.log("Third Condition: Young rich man")
} if (Nhut.age == 23 || (Nhut.gender == "female" && Nhut.salary == 2000)) {
    console.log("Fourth Condition: Wrong information of this person")
}