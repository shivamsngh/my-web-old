function _bindRecentData() {
    console.log("Binding recent cards")
    let recentEventsData = newEventsAndConferences();
    recentEventsData.map(data => setRecentTemplateOnUI(initializeRecentComponent(data)));

}

function initializeRecentComponent(data) {
    let recentTemplate = document.querySelector('#recents');
    let textHeader = recentTemplate.content.querySelectorAll('h4');
    let textBody = recentTemplate.content.querySelectorAll('p');
    let textFooter = recentTemplate.content.querySelectorAll('sub');
    textHeader[0].innerHTML = data.eventName;
    textBody[0].innerHTML = data.details;
    textFooter[0].innerHTML = `<a href='${data.link}' class='btn btn-xs' target="_blank" rel="noopener">Details</a>`;
    // callback(recentTemplate);
    return recentTemplate;
}

function setRecentTemplateOnUI(recentTemplate) {
    let recentCard = document.querySelector('#eventscreen');
    let cardBody = document.importNode(recentTemplate.content, true);
    // recentCard.insertBefore(cardBody, recentCard.children[3]);
    recentCard.appendChild(cardBody);
}