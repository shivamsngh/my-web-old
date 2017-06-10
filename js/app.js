var mybooks = myBooks();
function myBooks() {
    return ({
        "books": [

            {
                "title": "One night at call center",
                "myrating": 6,
                "author": "Chetan Bhagat",
                "read": true
            }
            ,
            {
                "title": "3 Mistakes of my life",
                "myrating": 8,
                "author": "Chetan Bhagat",
                "read": true

            },
            {

                "title": "A roller coaster Ride",
                "myrating": 7,
                "author": "Saumil Srivastav",
                "read": true
            }
            ,
            {

                "title": "Nothing For You My Dear Still I Love You",
                "myrating": 6,
                "author": "Arpit Dugar",
                "read": true
            }
            ,
            {

                "title": "Harry Potter and The order of Phoenix",
                "myrating": 9,
                "author": "J.K Rowling",
                "read": true
            }
            ,
            {

                "title": "Chanakya's Chant",
                "myrating": 8,
                "author": "Ashwin Sanghi",
                "read": true

            },
            {

                "title": "Immortals of Meluha",
                "myrating": 9,
                "author": "Amish Tripathi",
                "read": true
            }
            ,
            {

                "title": "The secret of Nagas",
                "myrating": 8.5,
                "author": "Amish Tripathi",
                "read": true
            }
            ,
            {

                "title": "The Oath of Vayuputras",
                "myrating": 8,
                "author": "Amish Tripathi",
                "read": true

            },
            {

                "title": "And then there were None",
                "myrating": 9,
                "author": "Agatha Christie",
                "read": true

            },
            {

                "title": "A Passage to India",
                "myrating": 9,
                "author": "E.M Forster",
                "read": true

            },
            {

                "title": "Alexander's Secret",
                "myrating": 9,
                "author": "Chrishtopher C. Doyle",
                "read": true

            },
            {

                "title": "The Secret of Druids",
                "myrating": 9,
                "author": "Chrishtopher C. Doyle",
                "read": true

            },
            {

                "title": "Pakistan Before and After Osama",
                "myrating": 8.5,
                "author": "Imtiaz Gul",
                "read": true

            },
            {

                "title": "Afghanistan-The Bear Trap",
                "myrating": 8.5,
                "author": "Brigadier Mohd Yusuf & Mark Adkin",
                "read": false

            },
            {

                "title": "And the Mountains Echoed",
                "myrating": 10,
                "author": "Khaled Hosseini",
                "read": true

            },
            {
                "title": "I too had a love story",
                "myrating": 8.5,
                "author": "Ravinder Singh",
                "read": true
            },
            {
                "title": "The Murder of Roger Ackroyd",
                "myrating": 0.0,
                "author": "Agatha Christie",
                "read": undefined
            },
            {
                "title": "Breaking India: Western Interventions in Dravidian and Dalit Faultlines",
                "myrating": 0.0,
                "author": "Rajiv Malhotra",
                "read": undefined
            },
            {
                "title": "Scion of Ikshavaku",
                "myrating": 9,
                "author": "Amish Tripathi",
                "read": true
            },
            {
                "title": "Sita - Warrior of Mithila",
                "myrating": 9,
                "author": "Amish Tripathi",
                "read": true
            }


        ]
    });
}

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
    if (item.read===false) {
        allH5[1].innerHTML = "Currently Reading";
    }
    else if(item.read===undefined){
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
    if (!item.read && item.read!==undefined) {
        $('#currentAuthor').text(`By- ${item.author}`);
        $('#currentBook').text(item.title);
        $('#currentRead').text("Currently Reading");
        $('#currentRating').text(`My rating: ${item.myrating}`);
        $('#bookcount').text(`Book Count: ${mybooks.books.length}`)
    }
    return item;
}
mybooks.books.map(setCurrentlyReading).map(setAllReads);

