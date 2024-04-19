let data = [
    ["Israel", "Salinas", 34],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28],
  ];
  
  /*
      1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
      2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
      3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
      let restructuredData = [
          {
              name:
              lastname:
              age
          }
      ]
  */
  //ejercicio 1
  
  const getFullNames = (data) => {
      let fullNames = data.map((person) => {
     return `${person[0]} ${person[1]}`;
      });
     return fullNames;
     }
     console.log(getFullNames(data));
  
     //ejercicio 2
  
     function NoHagasCasoALasEdades(bestFriends){
    let elAncianoMayor = 0
    let elColagenoDeTodos = 99
    bestFriends.forEach((item)=>{
    if(item[2] > elAncianoMayor){
      elAncianoMayor = item[2]
    }
    if(item[2] < elColagenoDeTodos){
      elColagenoDeTodos = item[2]
    }
      })
     return `La edad del mayor es ${elAncianoMayor} y la menor edad es ${elColagenoDeTodos}.`
  }
  
  console.log(NoHagasCasoALasEdades(data))
  
  //ejercicio 3
  
  function restructuracionDeData (ordenarlos) {

    let reordenados= ordenarlos.map(item => ({
    name: item[0],
    lastname: item[1],
    age: item[2]
  })
)
return reordenados
}

console.log(restructuracionDeData(data))