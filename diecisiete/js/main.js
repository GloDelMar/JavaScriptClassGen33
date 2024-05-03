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
    
    printFoods(foodsArrays, "the-food-list")
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
    getAlimentos()
  };
  
  const editFoodById = async (foodkey, dewData) =>{
    let response = await fetch(`https://javascriptglo-default-rtdb.
    firebaseio.com/alimentacionSana/${foodkey}/.json`, {
      method:"PUT",
      body: JSON.stringify(newData)
    })
  let data = await response.json(
    console.log(data)
  )
  }

  const deleteFoodById = async (foodkey) => {
    let response = await fetch(`https://javascriptglo-default-rtdb.firebaseio.com/alimentacionSana/${foodkey}/.json`,
    {
      method: "DELETE"
    }
    )
    let data = await response.json()
    console.log(data)
  }


  let saveProductBtn = document.getElementById("save-food-btn");
  const editmodal = new bootstrap.Modal(
    document.getElementById('edit-food-modal')
  )
  
    saveProductBtn.addEventListener("click", async () => {
      let inputs = document.querySelectorAll("#food-form input");
      
      let foodObject = {};
  
      inputs.forEach(({ name, value }) => {
          foodObject[name] = value;
      });
      console.log(foodObject);
      await postFood(foodObject)
      await getAlimentos()
      inputs.forEach((input) => (input.value = ""));
  });
  
  let saveChangesBtn =  document.getElementById("save-changes-btn")
  saveChangesBtn.addEventListener("click", async ()=>{
    console.log("guardando")
    let editFields = document.querySelectorAll("#edit-food-form input")
    let editFood = {}

    editFields.forEach(({name, value})=>{
      editFields[name]= value
    }),
    await editFoodById(key, editFood),
    await getAlimentos()
    editmodal.close()
    console.log(editFood)
  })
  
  const creatFoodItem = (foodObjet)=>{
    console.log(foodObjet)
    let {name, tipo, porcion, key} = foodObjet
    let foodItem = document.createElement("li") 
    foodItem.classList.add("list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "gap-3")
   
      let cardName = document.createElement("span")
     cardName.classList.add("d-flex",
      "justify-content-between",
      "align-items-center", "flex-grow-1")

      let foodName = document.createElement("h4");
    foodName.classList.add("text-title");
    foodName.innerText = name;
  
     let cardTipo = document.createElement("p");
    cardTipo.innerText = `${tipo} - ${porcion}`
    
    let editBtn = document.createElement("button")
    editBtn.classList.add("btn", "btn-primary")
    editBtn.innerText = "✎"
    
    editBtn.addEventListener("click", () => {
    
      document.getElementById("edit-name").value = name
      document.getElementById("edit-tipo").value =  tipo
      document.getElementById("edit-porcion").value = porcion
      editmodal.show()
      
    })

    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("btn", "btn-danger")
    deleteBtn.innerText = "X"

    deleteBtn.addEventListener("click", async ()=>{
      console.log(key)
     await deleteFoodById(key)
     await getAlimentos()
    })
    cardName.append(foodName, cardTipo)
    foodItem.append(cardName, editBtn, deleteBtn)

    return foodItem
  }

  const printFoods = (foodArray, wrapperId)=> {
    let wrapper = document.getElementById(wrapperId)
    wrapper.innerHTML = ""

    foodArray.forEach((food)=> wrapper.append
  (creatFoodItem(food)))
  }
 
  getAlimentos()
