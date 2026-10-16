"use strict";
/* type Heroi = {
    name:String;
    vulgo:String;
}

function printaObjetos(pessoa: Heroi) {

    console.log(pessoa)
}

printaObjetos({
    name: "Clark Kent",
    vulgo: "Superman",
}) */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * data modifiers
 * public
 * privaite
 * protected
 */
/*

// class

class Character {
    name?: String;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): string {
        return `Attack with ${this.stregth} points`;
    }
}

class Magician extends Character {

    magcpoint:number

    constructor(name: string, stregth: number, skill: number, magcpoint:number) {
        super(name, stregth, skill);
        this.magcpoint = magcpoint;
    }
}

const p1 = new Character("Goku", 10, 98);
const p2 = new Magician("Merlen", 90, 90, 100);
p1.skill = 12;
console.log(p1.attack());
console.log(p2);
*/
// generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Otávio", "Orfeu"], ["Odiseu", ""]);
console.log(numArray);
console.log(stgArray);
//# sourceMappingURL=index.js.map