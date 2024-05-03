const getAlimentos = async() =>{
    let response = await fetch("https://javascriptglo-default-rtdb.firebaseio.com/alimentacionSana/.json")

    let alimentacionSana = await response.json()
    console.log(alimentacionSana)

    let keys = Object.keys(alimentacionSana)
    console.log(keys)


    let foodsArrays = keys.map( (key) => {
        return {...alimentacionSana[key], key}
    })
    console.log(foodsArrays)
    return foodsArrays
}

const postFood = async (foodObject) => {
    let response = await fetch(
      "https://javascriptglo-default-rtdb.firebaseio.com/alimentacionSana/.json",
      {
        method: "POST",
        body:JSON.stringify(foodObject),
      }
    );
    let data = await response.json();
    console.log(data);
  };
  
  let saveProductBtn = document.getElementById("save-food-btn");

  saveProductBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      let inputs = document.querySelectorAll("#food-form input");
      let foodObject = {};
  
      inputs.forEach(({ name, value }) => {
          foodObject[name] = value;
      });
      console.log(foodObject);
      await postFood(foodObject); 
      inputs.forEach((input) => (input.value = ""));
  });
  

export {postFood, getAlimentos}