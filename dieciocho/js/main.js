const getbloginfo = async () =>{
    let response = await fetch(
        "https://javascriptglo-default-rtdb.firebaseio.com/blog/.json")

        let blog = await response.json()
        console.log(blog)

        let keys = Object.keys(blog)
        console.log(keys)

        let blogArrays = keys.map((key) =>{ 
            return {...blog[key], key}
        })
        console.log(blogArrays)

        printAllBlogContent(blogArrays, "blogCard-wrapper")
    }

    const postBlog = async (blogObjet) =>{
        let response = await fetch(
            "https://javascriptglo-default-rtdb.firebaseio.com/blog/.json",
            {
                method: "POST",
                body:JSON.stringify(blogObjet)
            }
        )
            let data = await response.json()
            console.log(data)
            getbloginfo()
        }

    let saveBlogBtn = document.getElementById("save-info")
    
    saveBlogBtn.addEventListener("click", async ()=>{
        let inputs = document.querySelectorAll("#info-in-form input")
        let blogObjet = {}

        inputs.forEach((input)=>{
            let value = input.value
            let name = input.name
            blogObjet[name] = value 
        }) 
  
console.log(blogObjet)
postBlog(blogObjet)

inputs.forEach((input) => {
    input.value = '';
});
    })

const createBlogCard = (blogObjet) =>{
    let {titulo, contenido, autor} = blogObjet

    let blogCard = document.createElement("div")
    blogCard.classList.add("card", "text-center")

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let cardTitle = document.createElement("h3")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = titulo

    let cardContent = document.createElement("p")
    cardContent.classList.add("card-text")
    cardContent.innerText = contenido

    let cardAutor = document.createElement("h5")
    cardAutor.classList.add("card-text")
    cardAutor.innerText = autor

    cardBody.append(cardTitle, cardContent, cardAutor)
    blogCard.append(cardBody)
    return blogCard
}

const printAllBlogContent =(dataArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)
    wrapper.innerHTML = ""
    dataArray.forEach((blog)=> wrapper.append
    (createBlogCard(blog)))
}

getbloginfo()