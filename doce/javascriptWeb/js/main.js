let koders = [
    {
        name:"Israel",
        lastname:"Salinas Martínez"
    },
    {
        name: "Vianey",
        lastname: "Díaz"
    },
    {
        name:"Gloriela",
        lastname:"Suárez"
    },
    {
        name: "Juanito",
        lastname: "De las Pitayas"
    },
    {
        name: "Fulanito",
        lastname: "Detal"
    },
    {
        name: "Aniv",
        lastname: "Delarev"
    },
    {
        name: "Susana",
        lastname: "Distancia"
    },
    {
        name: "Juanelo",
        lastname: "Pérez"
    },
    {
        name: "Isela",
        lastname: "Crello"
    },
    {
        name: "Pere",
        lastname: "Gil"
    },
    {
        name: "Aitor",
        lastname: "Menta"
    },
    {
        name: "Digna",
        lastname: "Víbora"
    }
]



let namesList = (entryObjet) => {
    let {name, lastname} = entryObjet

    let card = document.createElement("div")
    card.classList.add("list-group")

    let cardNames = document.createElement("p")
    cardNames.classList.add("list-group-item", "col-6", "m-0", "ps-3", "fs-5", "fst-italic")
    let cardFullName = document.createTextNode(`${name} ${lastname}`)
    cardNames.append(cardFullName)

    card.append(cardNames)

    return card

    }


const printNames = (blogData, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    blogData.forEach((entry) => {
      let blogCard = namesList(entry);
      wrapper.append(blogCard);
    });}

    printNames(koders, "card-wrapper")
   
