function Cerca(){
    var libro=document.getElementById('cerca')
    console.log(libro)
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(Response => Response.json)
    .then(libri =>{
        console.log(libri)
        if (libro in )
    })
}