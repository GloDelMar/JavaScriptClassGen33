function calculoDeIMC(peso, altura){

    return peso/(altura*altura)

}

const IMC=calculoDeIMC(75,1.65)

if(isNaN(IMC)){
   console.log("¡ATENCIÓN! Alguno de tus parámetros no es válido para ejectuar el programa, intenta de nuevo.")
}

else{
console.log("Tu IMC es de: "+ IMC)

function interpretarIMC(){
   
    if(IMC<18.5){
        console.log("Tu IMC indica BAJO PESO")
    }
    else if(IMC>=18.5 && IMC<=24.9){
        console.log("Tu IMC indica PESO SALUDABLE")
    }
    else if (IMC>=25 && IMC<=29.9){
        console.log("Tu IMC indica SOBREPESO")
    }

    else if (IMC>=30) {
        console.log("Tu IMC indica OBESIDAD")
    }

}

interpretarIMC()
}