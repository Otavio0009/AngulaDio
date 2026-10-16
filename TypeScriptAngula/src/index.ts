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

/*function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["Otávio", "Orfeu"], ["Odiseu"]);

console.log(numArray);
console.log(stgArray);*/

// decorators

/*function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Pessoa {}

@ExibirNome
class Quincas {}*/

/*function apiVerson(version: string) {
    return (target: any) =>{
        Object.assign(target.prototype, {__version: version});
    }
}

@apiVerson("1.10")
class Api{}

const api = new Api();
console.log(api.__version);*/

// attribute decorator

function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api {

    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// nome válido (3 ou mais caracteres)
const api = new Api("users");
console.log(api.name); // users

// nome inválido (menos de 3 caracteres)
try {
    const apiInvalida = new Api("us");
    console.log(apiInvalida.name);
} catch (erro) {
    console.log((erro as Error).message); // Tamanho menor que 3
}