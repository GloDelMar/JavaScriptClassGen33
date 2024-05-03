const createFoodCard = (foodObject) => {
  let { name, tipo, porcion} = foodObject;

  let foodCard = document.createElement("div");
  foodCard.classList.add("card");

  let cardBody = document.createElement("ul");
  cardBody.classList.add("card-body", "list-group",
      "d-flex", "justify-content-between",
    "alingn-items-center", "gap-3");

  let cardName = document.createElement("h3");
  cardName.classList.add("card-title");
  cardName.innerText = name;

   let cardTipo = document.createElement("span");
  cardTipo.innerText = tipo;

  let cardPorcion = document.createElement("span");
  cardPorcion.innerText = porcion;

  let editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-primary", "text-center");
    editBtn.innerHTML = "&#x270E;";
  
    editBtn.addEventListener("click", () => {
      document.getElementById("edit-name").value = name;
      document.getElementById("edit-tipo").value = tipo;
      document.getElementById("edit-porcion").value = tipo;
      document.getElementById("save-changes-btn").dataset.koderKey = key;
      editModal.show();
    });
  
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "text-center");
    deleteBtn.innerText = "X";
  
    deleteBtn.addEventListener("click", async () => {
      console.log(key);
      await deleteKoderById(key);
      await getKoders();
    });

  cardBody.append(cardName, cardTipo, cardPorcion);

  foodCard.append(cardBody);
  return productCard;
};

const printAllFoods = (dataArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = "";
  dataArray.forEach((food) => wrapper.append(createFoodCard(food)));
};

export { createFoodCard, printAllFoods }