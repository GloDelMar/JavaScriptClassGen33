const someString = "The evil that men do"

const countVowels = (prhase)=>{
    const vowelsList = /[AEIOUaeiouÁÉÍÓÚáéíóúÜü]/g
  
    let total = 0

   for (let i = 0; i < prhase.length; i++){
   let isVowel = vowelsList.test(prhase.charAt(i))
   if(isVowel){
    total++}
  }
     return total
}

let test1 = countVowels(someString)
let test2 = countVowels("amor de mis amores")

console.log(test1)
console.log(test2)