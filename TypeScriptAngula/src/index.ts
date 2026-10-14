type Heroi = {
    name:String;
    vulgo:String;
}

function printaObjetos(pessoa: Heroi) {

    console.log(pessoa)
}

printaObjetos({
    name: "Clark Kent",
    vulgo: "Superman",
})