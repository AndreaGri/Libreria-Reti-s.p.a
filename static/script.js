function cerca() {
    var libro = String(document.getElementById('t').value);
    console.log(libro);

    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let found = false;
            for (const book of data) {
                console.log(book['title']);
                if (book['title'] === libro) {
                    console.log('si');
                    console.log(book)
                    document.getElementById('out').innerHTML = [book['title'] + '<br>' + book['id']+ '<br>' +book['genreId']+ '<br>' +book['genreName']+ '<br>' +
                    book['price']+ '<br>' +book['shelfId']
                ];
                    found = true;
                    break; // Esci dal ciclo una volta trovato il libro
                }
            }
            if (!found) {
                console.log('Libro non trovato');
                document.getElementById('out').innerHTML = 'Libro non trovato';
            }
        })
        .catch(err => alert("Qualcosa è andato storto nella richiesta"));
}



function vedi(){
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let foundBooks;
      for (const book of data) {
        console.log(book['title']);
        foundBooks += book['title'] + '<br>';
        }
       document.getElementById('out').innerHTML= foundBooks
    })
    .catch(err => alert("Qualcosa è andato storto nella richiesta"))
}
