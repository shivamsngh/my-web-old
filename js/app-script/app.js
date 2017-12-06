/**
 * A very good example of fucitonal programming below where even initialization is done by 
 * fucntions which makes the arrays immutable.
 * Then a good example of using query selector. 
 * It is pure javascript.
 * And yes I am not an expert. :)
 */
var blistLoc = [
    {
        loc: 'NEPAL',
        link: 'https://www.google.co.in/maps/place/Bhotekosi+Bungee+Jump/@27.8480006,85.7331756,47999m/data=!3m1!1e3!4m8!1m2!2m1!1sbungy+nepali!3m4!1s0x0:0xae9a9e05f6d29e6d!8m2!3d27.8759936!4d85.8923149'
    },
    {
        loc: 'RISHIKESH',
        link: '#'
    }
];

function _loadScripts() {
    console.log("app script loading")
    let dataScript = document.createElement("script");
    let recentCardsScript = document.createElement("script");
    let booksScript = document.createElement("script");
    //Dropdown
    this.createDropdown();
    //dropdown
    dataScript.type = "text/javascript";
    dataScript.src = "js/data-script/data.js";
    document.getElementsByTagName("body")[0].appendChild(dataScript);
    dataScript.onload = () => {
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

        blistLoc.map(x => {
            loadDropdown(x.loc, x.link);
        })
    }

    //Set  event listener
    let bucketElm = document.querySelector('#bucketDrop');
    bucketElm.addEventListener('mouseover', () => {
        console.log("mouse event listened");
        let dropdiv = document.getElementById('bucketDiv');
        dropdiv.style.display = 'block';
    });
}

function createDropdown() {
    let bucketElm = document.querySelector('#bucketDrop');
    let dropDiv = document.createElement('DIV');
    dropDiv.addEventListener('mouseleave', () => {
        // console.log("mouse leave");
        dropDiv.style.display = 'none';
    })
    dropDiv.setAttribute('id', 'bucketDiv');
    dropDiv.style.border = '2px solid #B2ADAC';
    dropDiv.style.backgroundColor = '#B2ADAC';
    dropDiv.style.position = 'absolute';
    dropDiv.style.display = 'none';
    dropDiv.style.width = '100%'
    dropDiv.style.color = 'white';
    dropDiv.style.textAlign = 'center';
    bucketElm.parentNode.appendChild(dropDiv);
}

function loadDropdown(loc, link) {
    console.log("mouse event loadropdown");
    let bucketElm = document.querySelector('#bucketDiv');
    let newNode = document.createElement('A');
    newNode.innerHTML = `${loc}<br>`;
    // newNode.style.display = 'none';
    newNode.setAttribute('href', link);
    bucketElm.appendChild(newNode, bucketElm.nextSibling);
}



