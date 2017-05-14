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

            }

        ]
    });
}

function setAuthor(item) {
    // console.log(item);
    // $('#author').text(item.author);
    return item;
}
function setTitle(item) {
    console.log(item);
    // $('#bookname').text(item.title);
    return item;
}
function setStatus(item) {
    // console.log(item);
    // $('.card-text').text("Currently Reading");
    return item;
}
function setRating(item) {
    // console.log(item);
    // $('#myrating').text(item.myrating);
    return item;
}
function setCurrentlyReading(item) {
    if (!item.read) {
        $('#author').text(`By- ${item.author}`);
        $('#bookname').text(item.title);
        $('.card-text').text("Currently Reading");
        $('#myrating').text(`My rating: ${item.myrating}`);
        $('#bookcount').text(`Book Count: ${mybooks.books.length}`)
    }
      return item;
}
mybooks.books.map(setCurrentlyReading).map(setAuthor).map(setTitle).map(setStatus).map(setRating);
// $(document).ready(()=>{

// $("#bookname").text();
// });

