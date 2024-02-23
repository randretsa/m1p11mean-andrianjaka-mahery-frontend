export class Service {
    name= "";
    price= 0;
    duration= 0;
    commission= 0;
    montant = 0;

    constructor(){}

    loadFromJson(jsonElement:any) {
        Object.assign(this, jsonElement);
    }

    calculateMontant(){
        return 1200000000;
    }

}