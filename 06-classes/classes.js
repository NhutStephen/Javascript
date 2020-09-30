class SuperSentai {
    constructor(name, specialPower) {
        this.name = name
        this.specialPower = specialPower
    }

    showInformation() {
        console.log(this.name + " have super power is: " + this.specialPower)
    }
}

const superSentai = new SuperSentai("Gao Ranger", "Anime Instinct")
console.log(superSentai)

superSentai.showInformation()