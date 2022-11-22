"use strict";
class Lavoratore {
    constructor(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * this.codRedd / 100;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps / 100;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    }
}
class Professionista extends Lavoratore {
    constructor(_redditoAnnuoLordo) {
        super(78, _redditoAnnuoLordo, 25.72, 5); //ESEGUE IL CONSTRUCTOR DELLA CLASSE MADRE
    }
}
class Artigiano extends Lavoratore {
    constructor(_redditoAnnuoLordo) {
        super(67, _redditoAnnuoLordo, 35, 15);
    }
}
class Commerciante extends Lavoratore {
    constructor(_redditoAnnuoLordo) {
        super(40, _redditoAnnuoLordo, 35, 15);
    }
}
let p = new Professionista(20000);
let a = new Artigiano(27000);
let c = new Commerciante(50000);
console.log('----PROFESSIONISTA----');
console.log(p.getUtileTasse());
console.log(p.getTasseInps());
console.log(p.getTasseIrpef());
console.log(p.getRedditoAnnuoNetto());
console.log('----ARTIGIANO----');
console.log(a.getUtileTasse());
console.log(a.getTasseInps());
console.log(a.getTasseIrpef());
console.log(a.getRedditoAnnuoNetto());
console.log('----COMMERCIANTE----');
console.log(c.getUtileTasse());
console.log(c.getTasseInps());
console.log(c.getTasseIrpef());
console.log(c.getRedditoAnnuoNetto());
