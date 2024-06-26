const getKoders = async () => {
    /*creamos la petición*/
    /*Esperamos a que la petición se cumpla*/
    let response = await fetch(
      "https://javascriptglo-default-rtdb.firebaseio.com/koders/.json"
    );
  
    /*Desempaquetamos el contenido de la respuesta, para extraer la información con la que vamos a trabajar*/
    let koders = await response.json();
    console.log(koders);
  
    let keys = Object.keys(koders);
    console.log(keys);
   
  //Aqui obtendremos el array listo para trabajar con él
    let kodersArray = keys.map((key) => {
      return { ...koders[key], key };
    });
    console.log(kodersArray);
    printKoders(kodersArray, "koder-list")
  };
  
  const postKoder = async (koderObject) => {
    let response = await fetch(
      "https://javascriptglo-default-rtdb.firebaseio.com/koders/.json",
      {
        method: "POST",
        body: JSON.stringify(koderObject),
      }
    );
    let data = await response.json();
    console.log(data);
  };
  

  /*se engará de pedir información a la base de datos*/
  
  let saveKoderBtn = document.getElementById(save-koder-btn)

  saveKoderBtn.addEventListener("click", ()=>{
    let inputs = document.querySelectorAll("koder-form unput")

    let koderObject = {}

    inputs.forEach(({name, value})=>{
      koderObject[name] = value
    })
    console.log(koderObject)
    postKoder(koderObject)
    inputs.forEach((input)=> (input.value = ""))
  })