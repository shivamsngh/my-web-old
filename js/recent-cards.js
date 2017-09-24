function _bindRecentData() {
    // this.initializeRecentComponent((recentTemplate) => {
    //     this.setRecentTemplateOnUI(recentTemplate);
    // })
    let recentEventsData = newEventsAndConferences();
    recentEventsData.events.map(data => this.setRecentTemplateOnUI(this.initializeRecentComponent(data)));

}

function initializeRecentComponent(data) {
    let recentTemplate = document.querySelector('#recents');
    let textHeader = recentTemplate.content.querySelectorAll('h4');
    let textBody = recentTemplate.content.querySelectorAll('p');
    let textFooter = recentTemplate.content.querySelectorAll('sub');
    textHeader[0].innerHTML = data.eventName;
    textBody[0].innerHTML = data.details;
    textFooter[0].innerHTML = `<a href='${data.link}' class='btn btn-xs' target='_blank'>Details</a>`;
    // callback(recentTemplate);
    return recentTemplate;
}

function setRecentTemplateOnUI(recentTemplate) {
    let recentCard = document.querySelector('#eventscreen');
    let cardBody = document.importNode(recentTemplate.content, true);
    // recentCard.insertBefore(cardBody, recentCard.children[3]);
    recentCard.appendChild(cardBody);
}