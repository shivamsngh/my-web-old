/**
 * A very good example of fucitonal programming below where even initialization is done by 
 * fucntions which makes the arrays immutable.
 * Then a good example of using query selector. 
 * It is pure javascript.
 * And yes I am not an expert. :)
 */
var blistLoc = [];
// var myBucketList;
var leftFlag;


function _loadScripts() {
    console.log("app script loading")
    const dataScript = document.createElement("script");
    const recentCardsScript = document.createElement("script");
    const booksScript = document.createElement("script");
    //dropdown
    dataScript.type = "text/javascript";
    dataScript.src = "js/data-script/data.min.js";
    document.getElementsByTagName("body")[0].appendChild(dataScript);
    dataScript.onload = () => {
        recentCardsScript.type = "text/javascript";
        recentCardsScript.src = "js/component-script/recent-cards.min.js";
        document.getElementsByTagName("body")[0].appendChild(recentCardsScript);
        recentCardsScript.onload = () => {
            console.log("recent sript loaded")
            _bindRecentData();
        }

        booksScript.type = "text/javascript";
        booksScript.src = "js/component-script/books.min.js";
        document.getElementsByTagName("body")[0].appendChild(booksScript);

        createDropdown();
        let myBucketLists = myBucketList();
        console.log("mubucket", myBucketList)
        myBucketLists.map(x => {
            const item = {
                loc: x.location,
                link: x.link
            };
            blistLoc.push(item);
        });
        blistLoc.map(x => {
            loadDropdown(x.loc, x.link);
        });
        //Dropdown

        //Set  event listener
        let bucketElm = document.querySelector('#bucketDrop');
        bucketElm.addEventListener('mouseover', () => {
            console.log("mouse event listened");
            const dropdiv = document.getElementById('bucketDiv');
            dropdiv.style.display = 'block';
        });
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // some code..
            const dropdiv = document.getElementById('bucketDiv');
            dropdiv.style.position="unset";
            dropdiv.style.display = 'block';
        }

        bucketDrop.addEventListener('mouseleave', (ev) => {
            // console.log("mouse leave");
            console.log("mouseleave event", ev.toElement);
            const tarElem = document.querySelector('#bucketDiv div');
            const bucketElm = document.querySelector('#bucketDiv');
            console.log("tarelem", tarElem);
            if (ev.toElement !== tarElem) {
                bucketElm.style.display = 'none';
            }
        });
    }


}

function createDropdown() {
    const bucketElm = document.querySelector('#bucketDrop');
    const dropDiv = document.createElement('DIV');
    dropDiv.addEventListener('mouseleave', (ev) => {
        const bucketElm = document.querySelector('#bucketDiv');
        bucketElm.style.display = 'none';
    });
    dropDiv.setAttribute('id', 'bucketDiv');
    dropDiv.style.backgroundColor = '#B2ADAC';
    dropDiv.style.opacity = 0.8;
    dropDiv.style.position = 'absolute';
    dropDiv.style.display = 'none';
    dropDiv.style.width = '100%'
    dropDiv.style.color = 'white';
    dropDiv.style.textAlign = 'center';
    bucketElm.parentNode.appendChild(dropDiv);
}

function loadDropdown(loc, link) {
    console.log("mouse event load dropdown");
    const bucketDrop = document.querySelector('#bucketDrop');
    const bucketElm = document.querySelector('#bucketDiv');
    const newDiv = document.createElement('DIV');
    const newNode = document.createElement('A');
    newDiv.style.padding = '5px';
    newDiv.style.textTransform = 'uppercase';
    newDiv.style.fontWeight = '700';
    newNode.innerHTML = `${loc}<br>`;
    newNode.style.margin = '5px';
    newNode.style.fontSize = '13px';
    newNode.style.color = 'rgba(255, 255, 255, 1)';
    newNode.setAttribute('href', link);
    newNode.setAttribute('class', 'page-scroll');
    newNode.setAttribute('target', '_blank');
    newNode.setAttribute('rel', 'noopener');
    newDiv.appendChild(newNode);
    bucketElm.appendChild(newDiv, bucketElm.nextSibling);
}



