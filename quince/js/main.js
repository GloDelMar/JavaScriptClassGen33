
let createProductButton = document.getElementById("create-product");

let productos = [];

createProductButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");
  let fields = document.querySelectorAll("#product-form input");
  console.log(fields);

  let productObject = {};

  fields.forEach((field) => {
    /*el nombre de la propiedad que voy a crear en mi objeto*/
    let property = field.name;

    /*el valor de la propiedad que voy a crear en el objeto*/
    let value = field.value;

    productObject[property] = value;
  });

  productos = [...productos, productObject];

  printProductList(productos, "product-list");
});
/*
<div id="productCards" class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Título de la tarjeta</h5>
                      <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                    </div>
                  </div>
                </div>
*/
const createProductItem = (productObject) => {
    let { nombre, descripcion, precio } = productObject;
   
    let cardBody = document.createElement("div");
    cardBody.classList.add("card", "row", "row-cols-1", "row-cols-md-2", "g-4");
   
    cardimagenbody = document.createElement("div")
    cardimagenBody.classList.add("card, conten-aling-center")
    
    let imagenCard = document.createElement("img"),
    imagenCard.classList.add()

    let cardNameText = document.createTextNode(`${fullname}: ${email}`);
    personListItem.append(personNameText);
    return personListItem;
  };
  
  const printPersonsList = (dataArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
  
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
  
    dataArray.forEach((person) => wrapper.append(createPersonItem(person)));
  };
  
  let fields = document.querySelectorAll ("#product-form")

  let products = []

  const creatProduct = () =>{
    let productObject = {}
    fields.forEach((field)=>{
      productObjet[field.name]=field.value
    })
    products.push(productObject)
  }

  const saveProductBtn = document.getElementById("save-product")

  saveProductBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    creatProduct()
    console.log(products)
  })

  const creadProductCard = (productObject)=>{
    let {name, description, picture, category} = productObject

    let productCard = document.createElement("div"  )
    productCard.classList.add("card")

    let productImage = document.createElement("img")
    productImage.setAttribute("src", picture)

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let cardTitle = document.createElement("h3")
    cardTitle.classList("card-title")
    cardTitle.innerText = name



  }

  