/**
 * A very good example of fucitonal programming below where even initialization is done by 
 * fucntions which makes the arrays immutable.
 * Then a good example of using query selector. 
 * It is pure javascript.
 * And yes I am not an expert. :)
 */

function _loadScripts() {
    console.log("app script loading")
    let dataScript = document.createElement("script");
    let recentCardsScript = document.createElement("script");
    let booksScript = document.createElement("script");
    dataScript.type = "text/javascript";
    dataScript.src = "js/data-script/data.js";
    document.getElementsByTagName("body")[0].appendChild(dataScript);


    recentCardsScript.type = "text/javascript";
    recentCardsScript.src = "js/component-script/recent-cards.js";
    document.getElementsByTagName("body")[0].appendChild(recentCardsScript);
    recentCardsScript.onload = () => {
        console.log("recent sript loaded")
        _bindRecentData();
    }

    booksScript.type = "text/javascript";
    booksScript.src = "js/component-script/books.js";
    document.getElementsByTagName("body")[0].appendChild(booksScript);
    // recentCardsScript.onload = () => {
    //     console.log("recent sript loaded")
    //     _bindRecentData();
    // }
}



