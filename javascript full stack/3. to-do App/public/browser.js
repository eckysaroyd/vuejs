function itemTemplete(item)
{
    return `
            <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text">${item.text}</span>
            <div>
            <button data-id ="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
            <button data-id ="${item._id}"  class="delete-me btn btn-danger btn-sm">Delete</button>
            </div>    
            </li>`

}

//initial page load render
let ourHTML = items.map(function(item) {
    return itemTemplate(item)
  }).join('')
  document.getElementById("item-list").insertAdjacentHTML("beforeend", ourHTML)

// create feature
let createField = document.getElementById("create-field")

document.getElementById("create-form").addEventListener("submit",function(e){
e.preventDefault()
axios.post('/create-items',{ text : createField.value}).then(function(response){
    //do something interest here in next video
  //create the html for new items

    document.getElementById("item-list").insertAdjacentHTML("beforeend",itemTemplete(response.data))
    createField.value=""
    createField.focus()
   }).catch(function(){
    console.log("please try again leter")
})
})


document.addEventListener("click",function(e){
    //delete Feature
    if (e.target.classList.contains("delete-me"))
    {
        if(confirm("Do you Really want to delete this Permanent....?")){
            axios.post('/delete-item',{ id : e.target.getAttribute("data-id")}).then(function(){
                //do something interest here in next video
               e.target.parentElement.parentElement.remove()
               }).catch(function(){
                console.log("please try again leter")
            })
        }

    }
    
    //update feature
    if (e.target.classList.contains("edit-me"))
    {
     let userinput =  prompt("Enter your desire new Test",e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
    
     //console.log(userinput)
     if(userinput){
        axios.post('/update-item',{text : userinput, id : e.target.getAttribute("data-id")}).then(function(){
            //do something interest here in next video
           e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userinput
           }).catch(function(){
            console.log("pleasw try again leter")
        })
         
     }
    }


})