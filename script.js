
class Masina {
    constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }
    get proprietati() {
        return 'Masina[marca = ${this.marca}, model = ${this.model}, culoare = ${this.culoare}, kilometraj = ${this.kilometraj}]';
    }
}


function Masina2(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
}


//definim noi proprietati pe un obiect(varianta mai lunga decat cea de sus)
Object.defineProperties(Masina2.prototype, {
    proprietati: {
        get: function() {
            return 'Masina[marca = ${this.marca}, model = ${this.model}, culoare = ${this.culoare}, kilometraj = ${this.kilometraj}]';
        }
    }
})

const Volvo =new Masina2("Volvo", "XC-60", "Negru", 234_000);
console.log(Volvo);


const audi = new Masina("Audi", "A7Quattro", "negru", 0); // instantiere prin "new"
console.log(audi)

//dupa folosirea obiectului :
// console.log(audi.proprietati)


function main() {
    const bmw = new Masina ("bmw", "x3", "gri", 100_000)
    const Dacia = new Masina("Dacia", "BIGGSTER", "Albastru", 234_000)
    const Mazda = new Masina("Mazda", "CX-5", "Verde", 111_000)
    
}

const bmw = {
    marca: "bmw",
    model: "x3",
    culoare: "gri",
    kilometraj: "100_000"
}

const Dacia = {
    marca: "Dacia",
    model: "BIGGSTER",
    culoare: "Albastru",
    kilometraj: "234_000"
}

const Mazda = {
    marca: "Mazda",
    model: "CX-5",
    culoare: "Verde",
    kilometraj: "111_000"
}


console.log(bmw, Dacia, Mazda);





