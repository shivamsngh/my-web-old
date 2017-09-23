/**
 * A very good example of fucitonal programming below where even initialization is done by 
 * fucntions which makes the arrays immutable.
 * Then a good example of using query selector. 
 * It is pure javascript.
 * And yes I am not an expert. :)
 */
var mybooks = myBooks();

/**
 * Set all read books in the modal.
 */
function setAllReads(item) {
    //select the template
    var bookTemplate = document.querySelector('#book-template');
    //select all the nodes for editing values
    let allH5 = bookTemplate.content.querySelectorAll('h5');
    let allH4 = bookTemplate.content.querySelectorAll('h4');
    let allH6 = bookTemplate.content.querySelectorAll('h6');
    //set values
    allH4[0].innerHTML = item.title;
    allH5[0].innerHTML = "By- " + item.author;
    //set currently reading attribute
    if (item.read === false) {
        allH5[1].innerHTML = "Currently Reading";
    }
    else if (item.read === undefined) {
        allH5[1].innerHTML = "Yet to start.";
    }
    else {
        allH5[1].innerHTML = "Completed";
    }
    allH6[0].innerHTML = "My Rating: " + item.myrating;

    // Clone the new row and insert it into the table
    var bookcard = document.querySelector('.modal-body');
    var book = document.importNode(bookTemplate.content, true);
    bookcard.appendChild(book);
    return item;
}

function setCurrentlyReading(item) {
    if (!item.read && item.read !== undefined) {
        $('#currentAuthor').text(`By- ${item.author}`);
        $('#currentBook').text(item.title);
        $('#currentRead').text("Currently Reading");
        $('#currentRating').text(`My rating: ${item.myrating}`);
        $('#bookcount').text(`Book Count: ${mybooks.books.length}`)
    }
    return item;
}
mybooks.books.reverse();
mybooks.books.map(setCurrentlyReading).map(setAllReads);

