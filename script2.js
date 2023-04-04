
class MasinadeCurse extends Masina{
    super(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }
    participaLaCampionat() {
        const m1 = new MasinadeCurse("Toyota", "turbo", "Rosu", 100_000);
        
        console.log("Cu " + this.marca + " model " + this.model +  " am participat la campionat");
    }

}
const m1 = new MasinadeCurse("Toyota", "turbo", "Rosu", 100_000);
m1.participaLaCampionat();

function pozitiaInCampionat (value) {
    this.value = value;

    if(value > 0) {
        result = ' am castigat locul ' + this.value;
        } else {
        result = ' nu am participat !';
        }    
        return result;
}

console.log(pozitiaInCampionat(2));
console.log(pozitiaInCampionat(-1));



