
async function getBookData()
{
    try{
    const getdata = await fetch('https://anapioficeandfire.com/api/books/',{ method:"GET"});
    const bookdata = await getdata.json();
    return bookdata; 
    }
    catch(err){
        alert(err);
    }
}

async function displayUsers()
{
    try{
        //getting books data from api
        const bookdata = await getBookData();
        //display books data in html DOM
        const booklist = document.querySelector('.book-list');
        bookdata.forEach( books => {
       
        const char1 = books.characters[0];    //fetching 1st character
        let release = books.released;         //to split released date alone
        let rdate = release.split("T");

        booklist.innerHTML += `<div class="book-container">
            <h2>${books.name}</h2>
            <h4>isbn: ${books.isbn}</h4>
            <h4>pages: ${books.numberOfPages}</h4>
            <h4>Authors : ${books.authors}</h4>
            <h4>Publisher : ${books.publisher}</h4>
            <h4>Released : ${rdate[0]}</h4>         
            <h4>Country : ${books.country}</h4>
            </div>`;   
        });
    }
    catch(e){
        alert(e);
    }
}

displayUsers();

// code to fetch chracters for each book
 
// async function getchardata()
// {
//     try{
//     const get = await displayUsers();    
//     const chardata = await fetch(char1,{ method:"GET"});
//     const charvalue = await chardata.json();
//     return charvalue; 
//     }
//     catch(err){
//         alert(err);
//     }
// }

// async function displayChar()
// {
//     const cdata = await getchardata();
//     const charlist = document.querySelector('.book-container');
//     cdata.forEach( chars => {
//         booklist.innerHTML += `<div class="book-container">
//         <h3>characters : ${chars.name}</h3>         
//         </div>`;  
// });
       
// }