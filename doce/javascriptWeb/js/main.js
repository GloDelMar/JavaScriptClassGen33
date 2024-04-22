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
    }
]


let namesList = (entryObjet) => {
    let {name, lastname} = entryObjet

    let card = document.createElement("div")
    card.classList.add("col-4", "card", "blog-card", "mb-3")

    let cardNames = document.createElement("p")
    cardNames.classList.add("m-0", "ps-3", "fs-5", "fst-italic")
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