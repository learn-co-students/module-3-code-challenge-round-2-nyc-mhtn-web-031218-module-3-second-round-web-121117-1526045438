document.addEventListener("DOMContentLoaded", function(event) {

    function renderPage() {
      fetch("http://localhost:3000/beers")
        .then(res=> res.json())
        .then(res => {
          res.forEach(function(beer){
              let list = document.getElementById("list-group")
              let ul = document.createElement("ul")
                ul.setAttribute("class", "list-group")
              let li = document.createElement("li")
                li.setAttribute("class", "list-group-item")
                li.setAttribute("id", `${beer.id}`)
                li.innerText = beer.name

              ul.append(li)
              list.append(ul)

              let beerItem = document.getElementById(`${beer.id}`)

              beerItem.addEventListener("click", function(event){

                let beerDetails = document.getElementById("beer-detail")

                  beerDetails.innerHTML = `<h1>${beer.name}</h1>
                                            <img src=${beer.image_url}>
                                            <h3>${beer.tagline}</h3>
                                            <textarea id="text">${beer.description}</textarea>
                                            <button id="edit-beer" class="btn btn-info">
                                              Save
                                                </button>`





                          let edit = document.getElementById("edit-beer")

                            edit.addEventListener("click", function(event){
                              let text = document.getElementById("text").value

                fetch(`http://localhost:3000/beers/${beer.id}`, {
                method: 'PATCH',
              body: JSON.stringify({
              description: text

                }),
                headers: {
                  'Content-Type': 'application/json'
                }

                })
                .then(res => res.json())
                .then( res =>{
                  let list = document.getElementById("list-group")
                  let ul = document.createElement("ul")
                    ul.setAttribute("class", "list-group")
                  let li = document.createElement("li")
                    li.setAttribute("class", "list-group-item")
                    li.setAttribute("id", `${beer.id}`)
                    li.innerText = beer.name

                  ul.append(li)
                  list.append(ul)
                    // let list = document.getElementById("list-group")
                    //     list.innerHTML= ""
                    // let group = document.getElementById("beer-detail")
                    //     group.innerHTML= ""
                })





                    })

              })






          })
        })
    }



    renderPage()


  });
